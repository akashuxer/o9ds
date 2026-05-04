/**
 * Border radius and border width tokens — SCSS variables for docs and copy.
 */

export const BORDER_RADIUS_SCSS = `// BORDER RADIUS TOKENS
$arvo-radius-circle: 62.438rem; // 999px`

export const BORDER_WIDTH_SCSS = `// BORDER WIDTH TOKENS
$arvo-border-1: 0.063rem; // 1px
$arvo-border-2: 0.125rem; // 2px
$arvo-border-3: 0.094rem; // 1.5px`

export const BORDER_TOKENS_SCSS = `${BORDER_RADIUS_SCSS}

${BORDER_WIDTH_SCSS}`

/** Doc table rows — border radius (SCSS names + clipboard snippets). */
export const BORDER_RADIUS_TOKEN_ROWS = [
  {
    name: '$arvo-radius-circle',
    valueRem: '62.438rem',
    valuePx: '999px (circle)',
    usage: 'Circular indicators—for example the unsaved orange dot on a tab or similar status markers.',
    clipboard: 'border-radius: $arvo-radius-circle;',
  },
]

/** Doc table rows — border width. */
export const BORDER_WIDTH_TOKEN_ROWS = [
  {
    name: '$arvo-border-1',
    valueRem: '0.063rem',
    valuePx: '1px',
    usage: 'Default borders.',
    clipboard: 'border-width: $arvo-border-1;',
  },
  {
    name: '$arvo-border-2',
    valueRem: '0.125rem',
    valuePx: '2px',
    usage: 'Emphasis.',
    clipboard: 'border-width: $arvo-border-2;',
  },
  {
    name: '$arvo-border-3',
    valueRem: '0.094rem',
    valuePx: '1.5px',
    usage: 'Subtle.',
    clipboard: 'border-width: $arvo-border-3;',
  },
]
