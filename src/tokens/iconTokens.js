/**
 * Icon size tokens — SCSS variables for o9con Code tab and o9 export.
 */

export const ICON_SIZE_PX = [8, 12, 14, 16, 20, 24, 32, 40]

/** Sizes for o9con gallery Display Options (excludes 8px / 12px indicator-only tokens). */
export const ICON_SIZE_PX_GALLERY = ICON_SIZE_PX.filter((px) => px !== 8 && px !== 12)

export const ICON_SIZE_TOKEN_ROWS = [
  { name: '$arvo-icon-8', valueRem: '0.5rem', pxComment: '8px' },
  { name: '$arvo-icon-12', valueRem: '0.75rem', pxComment: '12px' },
  { name: '$arvo-icon-14', valueRem: '0.875rem', pxComment: '14px' },
  { name: '$arvo-icon-16', valueRem: '1rem', pxComment: '16px' },
  { name: '$arvo-icon-20', valueRem: '1.25rem', pxComment: '20px' },
  { name: '$arvo-icon-24', valueRem: '1.5rem', pxComment: '24px' },
  { name: '$arvo-icon-32', valueRem: '2rem', pxComment: '32px' },
  { name: '$arvo-icon-40', valueRem: '2.5rem', pxComment: '40px' },
]

export const ICON_SIZE_TOKENS_SCSS = `// Icon Size Tokens (o9con)
${ICON_SIZE_TOKEN_ROWS.map((row) => `${row.name}: ${row.valueRem}; // ${row.pxComment}`).join('\n')}`
