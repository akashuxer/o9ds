/**
 * Public-folder raster URLs (`/path/from/public.png`).
 * WebP siblings are emitted by `npm run images:webp` next to each PNG.
 */

export function publicPngToWebpUrl(src) {
  if (typeof src !== 'string') return null
  const i = src.toLowerCase().lastIndexOf('.png')
  if (i === -1 || i !== src.length - 4) return null
  return `${src.slice(0, -4)}.webp`
}
