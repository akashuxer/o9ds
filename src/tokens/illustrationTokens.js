/**
 * Illustration size tokens — SCSS variables for o9Illus Code tab and o9 export.
 */

export const ILLUSTRATION_SIZE_PX = [96, 124, 224, 300]

export const ILLUSTRATION_SIZE_TOKEN_ROWS = [
  { name: '$o9illus-96', valueRem: '6rem', pxComment: '96px' },
  { name: '$o9illus-124', valueRem: '7.75rem', pxComment: '124px' },
  { name: '$o9illus-224', valueRem: '14rem', pxComment: '224px' },
  { name: '$o9illus-300', valueRem: '18.75rem', pxComment: '300px' },
]

export const ILLUSTRATION_SIZE_TOKENS_SCSS = `// Illustration Size Tokens (o9Illus)
${ILLUSTRATION_SIZE_TOKEN_ROWS.map((row) => `${row.name}: ${row.valueRem}; // ${row.pxComment}`).join('\n')}`
