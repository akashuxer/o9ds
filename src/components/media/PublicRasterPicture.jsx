import { publicPngToWebpUrl } from '@/utils/publicRaster'

/**
 * Prefer WebP for public PNGs (with PNG fallback) without changing layout:
 * `picture` uses `display: contents` so the inner `img` participates in the parent
 * formatting context exactly like a lone `img`.
 */
export default function PublicRasterPicture({ src, webpSrc, ...imgProps }) {
  const webp = webpSrc ?? publicPngToWebpUrl(src)
  const img = <img src={src} {...imgProps} />
  if (!webp) return img
  return (
    <picture style={{ display: 'contents' }}>
      <source srcSet={webp} type="image/webp" />
      {img}
    </picture>
  )
}
