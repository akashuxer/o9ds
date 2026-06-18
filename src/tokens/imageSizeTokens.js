/**
 * Integration logo / image size tokens — fixed scale for partner marks in product UI.
 * Matches Figma variables: image-14 … image-60.
 */

/** @typedef {{ token: string, value: string, px: number }} ImageSizeTokenRow */

/** @type {ImageSizeTokenRow[]} */
export const IMAGE_SIZE_TOKEN_ROWS = [
  { token: '$arvo-image-14', value: '0.875rem', px: 14 },
  { token: '$arvo-image-16', value: '1rem', px: 16 },
  { token: '$arvo-image-20', value: '1.25rem', px: 20 },
  { token: '$arvo-image-24', value: '1.5rem', px: 24 },
  { token: '$arvo-image-32', value: '2rem', px: 32 },
  { token: '$arvo-image-40', value: '2.5rem', px: 40 },
  { token: '$arvo-image-60', value: '3.75rem', px: 60 },
]

export const DEFAULT_IMAGE_SIZE_PX = 60

export const IMAGE_SIZE_PX_LIST = IMAGE_SIZE_TOKEN_ROWS.map((row) => row.px)

/** Clipboard text for image size token table rows. */
export function imageSizeTokenClipboard(row) {
  const px = row.px ?? parseInt(String(row.pxLabel), 10)
  return `${row.token}: ${row.value}; // ${px}px`
}

export const IMAGE_SIZE_TOKENS_SCSS = IMAGE_SIZE_TOKEN_ROWS.map(
  (row) => `${row.token}: ${row.value}; // ${row.px}px`,
).join('\n')
