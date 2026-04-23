#!/usr/bin/env node
/**
 * Guardrails for `public/` raster assets:
 * - Every .png must have a sibling .webp (run `npm run images:webp` or `vite build`).
 * - Warn or fail when PNGs exceed size thresholds (large PNGs hurt repo and LCP if served by mistake).
 *
 * Env:
 *   STRICT_IMAGES=1  — exit 1 on any warning (use in CI)
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.resolve(__dirname, '..', 'public')
const STRICT = process.env.STRICT_IMAGES === '1'

/** Soft limit: warn (or fail if STRICT) */
const WARN_BYTES = 800 * 1024
/** Hard limit: always fail */
const FAIL_BYTES = 3 * 1024 * 1024

async function collectPngFiles(dir, acc = []) {
  let entries
  try {
    entries = await fs.readdir(dir, { withFileTypes: true })
  } catch {
    return acc
  }
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) await collectPngFiles(full, acc)
    else if (e.isFile() && e.name.toLowerCase().endsWith('.png')) acc.push(full)
  }
  return acc
}

async function main() {
  const pngs = await collectPngFiles(publicDir)
  const errors = []
  const warnings = []

  for (const pngPath of pngs) {
    const webpPath = pngPath.replace(/\.png$/i, '.webp')
    try {
      await fs.access(webpPath)
    } catch {
      errors.push(`Missing WebP sibling for ${path.relative(publicDir, pngPath)} (expected ${path.relative(publicDir, webpPath)})`)
    }

    const st = await fs.stat(pngPath)
    if (st.size >= FAIL_BYTES) {
      errors.push(`Oversized PNG (${(st.size / 1024 / 1024).toFixed(2)} MiB): ${path.relative(publicDir, pngPath)} — compress source or split artwork`)
    } else if (st.size >= WARN_BYTES) {
      warnings.push(`Large PNG (${(st.size / 1024).toFixed(0)} KiB): ${path.relative(publicDir, pngPath)} — consider optimizing source before WebP`)
    }
  }

  const webpCount = pngs.length ? (await collectWebpCount(publicDir)) : 0
  if (pngs.length) {
    console.log(`[images:audit] PNG files: ${pngs.length}, WebP files under public/: ${webpCount}`)
  } else {
    console.log('[images:audit] No PNG files under public/')
  }

  for (const w of warnings) console.warn(`[images:audit] WARN: ${w}`)
  for (const e of errors) console.error(`[images:audit] ${e}`)

  if (errors.length || (STRICT && warnings.length)) {
    process.exit(1)
  }
}

async function collectWebpCount(dir) {
  let n = 0
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) n += await collectWebpCount(full)
    else if (e.isFile() && e.name.toLowerCase().endsWith('.webp')) n += 1
  }
  return n
}

main().catch((err) => {
  console.error('[images:audit]', err)
  process.exit(1)
})
