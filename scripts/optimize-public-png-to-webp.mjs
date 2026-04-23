#!/usr/bin/env node
/**
 * Converts every PNG under `public/` to a lossy WebP sibling (same basename).
 * - Preserves alpha (transparency).
 * - Idempotent: re-run after adding or editing PNGs.
 * - Hook from `npm run build` so production always ships fresh WebP alongside PNG fallbacks.
 *
 * AVIF: not generated here — WebP has broader decode support in older browsers; AVIF can be
 * added later as an additional `<source type="image/avif">` if build time and QA scope allow.
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.resolve(__dirname, '..', 'public')

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
  if (!pngs.length) {
    console.log('[images:webp] No PNG files under public/')
    return
  }

  let ok = 0
  for (const pngPath of pngs) {
    const webpPath = pngPath.replace(/\.png$/i, '.webp')
    const buf = await sharp(pngPath)
      .webp({
        quality: 86,
        alphaQuality: 100,
        effort: 5,
      })
      .toBuffer()
    await fs.writeFile(webpPath, buf)
    ok += 1
  }
  console.log(`[images:webp] Wrote ${ok} WebP file(s) next to PNG sources under public/`)
}

main().catch((err) => {
  console.error('[images:webp]', err)
  process.exit(1)
})
