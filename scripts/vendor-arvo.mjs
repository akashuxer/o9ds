/**
 * Vendor the built @arvo/* packages from the sibling o9-design-system monorepo
 * into the doc site's vendor/@arvo/<name>. Self-contained so Vercel deploys do not need
 * the sibling repo.
 *
 * Run:  node scripts/vendor-arvo.mjs
 *
 * Pre-req: in ../o9-design-system, run `pnpm install && pnpm build` so that
 * each package has populated dist/ output.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const SRC_ROOT = path.resolve(ROOT, '..', 'o9-design-system', 'packages')
const OUT_ROOT = path.resolve(ROOT, 'vendor', '@arvo')

const PACKAGES = ['tokens', 'styles', 'core', 'utils', 'react', 'js', 'assets']

const PINNED_VERSION = '1.0.0-dev.2'

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true })
}

function rmDir(p) {
  fs.rmSync(p, { recursive: true, force: true })
}

// Files emitted by the legacy o9ds build that are still present in the monorepo's
// dist for back-compat. The doc site only consumes the arvo-named outputs, so skip
// these to keep `vendor/` minimal and the audit clean.
const LEGACY_FILE_NAMES = new Set(['o9ds.css', 'o9ds.min.css'])

function copyTree(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return
  ensureDir(destDir)
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    if (entry.isFile() && LEGACY_FILE_NAMES.has(entry.name)) continue
    const s = path.join(srcDir, entry.name)
    const d = path.join(destDir, entry.name)
    if (entry.isDirectory()) {
      copyTree(s, d)
    } else if (entry.isFile()) {
      fs.copyFileSync(s, d)
    }
  }
}

/**
 * The npm `files` array can contain directory names ("dist", "src/") or top-level
 * file names ("_index.scss"). We mirror that contract — copy whatever exists.
 */
function copyShipped(srcPkgDir, destPkgDir, files) {
  for (const item of files) {
    const trimmed = item.replace(/[/\\]+$/, '')
    const src = path.join(srcPkgDir, trimmed)
    const dest = path.join(destPkgDir, trimmed)
    if (!fs.existsSync(src)) continue
    const stat = fs.statSync(src)
    if (stat.isDirectory()) {
      copyTree(src, dest)
    } else {
      ensureDir(path.dirname(dest))
      fs.copyFileSync(src, dest)
    }
  }
}

function rewritePackageJson(srcPkgDir, destPkgDir) {
  const pkgPath = path.join(srcPkgDir, 'package.json')
  const raw = fs.readFileSync(pkgPath, 'utf8')
  const pkg = JSON.parse(raw)

  const replaceWorkspace = (deps) => {
    if (!deps) return deps
    const out = {}
    for (const [name, version] of Object.entries(deps)) {
      if (typeof version === 'string' && version.startsWith('workspace:')) {
        // Pin workspace deps to the current monorepo version so npm resolves
        // siblings via file: links declared in the consumer's package.json.
        out[name] = PINNED_VERSION
      } else {
        out[name] = version
      }
    }
    return out
  }

  pkg.dependencies = replaceWorkspace(pkg.dependencies)
  pkg.peerDependencies = replaceWorkspace(pkg.peerDependencies)
  // Drop dev tooling — not needed by consumers.
  delete pkg.devDependencies
  // Keep `scripts.build` for @arvo/styles (consumed by `npm run build:arvo-styles`)
  // but drop everything else.
  if (pkg.scripts) {
    const keepBuild = pkg.scripts.build
    pkg.scripts = keepBuild ? { build: keepBuild } : undefined
    if (!pkg.scripts) delete pkg.scripts
  }
  // Drop the monorepo-only publish registry hint.
  delete pkg.publishConfig

  ensureDir(destPkgDir)
  fs.writeFileSync(path.join(destPkgDir, 'package.json'), JSON.stringify(pkg, null, 2) + '\n', 'utf8')
  return pkg
}

function vendor(name) {
  const src = path.join(SRC_ROOT, name)
  const dest = path.join(OUT_ROOT, name)
  if (!fs.existsSync(src)) {
    console.error(`[vendor] missing source package: ${src}`)
    return
  }
  rmDir(dest)
  const pkg = rewritePackageJson(src, dest)
  const files = Array.isArray(pkg.files) && pkg.files.length > 0
    ? pkg.files
    : ['dist', 'src', 'fonts', 'o9con', 'o9illus', '_index.scss']
  copyShipped(src, dest, files)
  console.log(`[vendor] @arvo/${name} -> ${path.relative(ROOT, dest)} (${files.join(', ')})`)
}

ensureDir(OUT_ROOT)
// Wipe any stale @arvo output from a previous run before re-populating.
for (const name of PACKAGES) rmDir(path.join(OUT_ROOT, name))
for (const name of PACKAGES) vendor(name)
console.log('[vendor] done')
