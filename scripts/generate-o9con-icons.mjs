/**
 * Regenerates src/tokens/o9conIcons.js from public/o9ConIconFont/o9con.css
 * Run: node scripts/generate-o9con-icons.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const cssPath = path.join(root, 'public/o9ConIconFont/o9con.css')
const outPath = path.join(root, 'src/tokens/o9conIcons.js')

function iconClassToName(className) {
  const without = className.replace(/^o9con-/, '')
  return without.split('-').join(' ')
}

function parseIcons(css) {
  const icons = new Map()
  const classLineRe = /^\.o9con-([a-z0-9-]+)::before\s*\{\s*$/i
  const contentRe = /^\s*content:\s*["'](\\[a-fA-F0-9]+)["']\s*;\s*$/i

  let pendingClass = null
  for (const line of css.split(/\r?\n/)) {
    const cm = line.match(classLineRe)
    if (cm) {
      pendingClass = cm[1]
      continue
    }
    const tm = line.match(contentRe)
    if (tm && pendingClass) {
      const raw = tm[1]
      const hex = raw.replace(/^\\/, '').toLowerCase()
      if (!icons.has(pendingClass)) {
        icons.set(pendingClass, hex)
      }
      pendingClass = null
    }
  }
  return icons
}

const css = fs.readFileSync(cssPath, 'utf8')
const map = parseIcons(css)
const sorted = [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]))

const rows = sorted.map(([cls, hex]) => {
  const displayUnicode = '\\u' + hex.padStart(4, '0')
  const name = iconClassToName(`o9con-${cls}`)
  return `  {
    "name": ${JSON.stringify(name)},
    "class": ${JSON.stringify(`o9con-${cls}`)},
    "unicode": ${JSON.stringify(displayUnicode)}
  }`
})

const header = `// o9con icon font — ${sorted.length} icons (generated from public/o9ConIconFont/o9con.css)
// Regenerate: node scripts/generate-o9con-icons.mjs

export const o9conIcons = [
`

const footer = `
]
`

fs.writeFileSync(outPath, header + rows.join(',\n') + footer, 'utf8')
console.log(`Wrote ${sorted.length} icons to ${path.relative(root, outPath)}`)
