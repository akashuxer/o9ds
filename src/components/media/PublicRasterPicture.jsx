import { encodePublicMediaUrl, publicPngToWebpUrl } from '@/utils/publicRaster'

/**
 * Prefer WebP for public PNGs (with PNG fallback) without changing layout:
 * `picture` uses `display: contents` so the inner `img` participates in the parent
 * formatting context exactly like a lone `img`.
 */
export default function PublicRasterPicture({
  src,
  webpSrc,
  fetchPriority,
  fetchpriority,
  ...imgProps
}) {
  const safeSrc = encodePublicMediaUrl(src)
  const webp = encodePublicMediaUrl(webpSrc ?? publicPngToWebpUrl(src))
  const priority = fetchpriority ?? fetchPriority
  const img = (
    <img
      src={safeSrc}
      {...imgProps}
      {...(priority != null && priority !== '' ? { fetchpriority: priority } : {})}
    />
  )
  if (!webp) return img
  return (
    <picture style={{ display: 'contents' }}>
      <source srcSet={webp} type="image/webp" />
      {img}
    </picture>
  )
}
