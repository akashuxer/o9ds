/**
 * Border radius and border width tokens — SCSS variables for docs and copy.
 */

export const BORDER_RADIUS_SCSS = `// BORDER RADIUS TOKENS
$o9ds-radius-circle: 62.438rem; // 999px`

export const BORDER_WIDTH_SCSS = `// BORDER WIDTH TOKENS
$o9ds-border-1: 0.063rem; // 1px
$o9ds-border-2: 0.125rem; // 2px
$o9ds-border-3: 0.094rem; // 1.5px`

export const BORDER_TOKENS_SCSS = `${BORDER_RADIUS_SCSS}

${BORDER_WIDTH_SCSS}`

/** Doc table rows — border radius (SCSS names + clipboard snippets). */
export const BORDER_RADIUS_TOKEN_ROWS = [
  {
    name: '$o9ds-radius-circle',
    valueRem: '62.438rem',
    valuePx: '999px (circle)',
    usage: 'Circular indicators—for example the unsaved orange dot on a tab or similar status markers.',
    clipboard: 'border-radius: $o9ds-radius-circle;',
  },
]

/** Doc table rows — border width. */
export const BORDER_WIDTH_TOKEN_ROWS = [
  {
    name: '$o9ds-border-1',
    valueRem: '0.063rem',
    valuePx: '1px',
    usage: 'Default borders.',
    clipboard: 'border-width: $o9ds-border-1;',
  },
  {
    name: '$o9ds-border-2',
    valueRem: '0.125rem',
    valuePx: '2px',
    usage: 'Emphasis.',
    clipboard: 'border-width: $o9ds-border-2;',
  },
  {
    name: '$o9ds-border-3',
    valueRem: '0.094rem',
    valuePx: '1.5px',
    usage: 'Subtle.',
    clipboard: 'border-width: $o9ds-border-3;',
  },
]
