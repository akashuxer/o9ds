/**
 * Arvo typography — mirrors `arvo.typography.scss` for documentation.
 */
import arvoTypographyScss from './arvo.typography.scss?raw'

export const ARVO_TYPOGRAPHY_SCSS = arvoTypographyScss

/** SCSS variables: $arvo-font-size-* (largest to smallest for docs table) */
export const FONT_SIZE_TOKENS = [
  { token: '$arvo-font-size-64', value: '4rem', px: '64px' },
  { token: '$arvo-font-size-40', value: '2.5rem', px: '40px' },
  { token: '$arvo-font-size-32', value: '2rem', px: '32px' },
  { token: '$arvo-font-size-24', value: '1.5rem', px: '24px' },
  { token: '$arvo-font-size-20', value: '1.25rem', px: '20px' },
  { token: '$arvo-font-size-18', value: '1.125rem', px: '18px' },
  { token: '$arvo-font-size-16', value: '1rem', px: '16px' },
  { token: '$arvo-font-size-14', value: '0.875rem', px: '14px' },
  { token: '$arvo-font-size-12', value: '0.75rem', px: '12px' },
  { token: '$arvo-font-size-10', value: '0.625rem', px: '10px' },
]

/** Overview ✦ Typescale — px parsed from `FONT_SIZE_TOKENS` (largest → smallest). */
export const TYPSCALE_STEPS = FONT_SIZE_TOKENS.map(({ token, value, px }) => ({
  token,
  value,
  px: Number.parseInt(px, 10),
}))

export const HEADING_MIXIN_ROWS = [
  { mixin: '$arvo-font-h64-r', size: '64px (4rem)', weight: '400', other: '—' },
  { mixin: '$arvo-font-h40-r', size: '40px (2.5rem)', weight: '400', other: '—' },
  { mixin: '$arvo-font-h32-r', size: '32px (2rem)', weight: '400', other: '—' },
  { mixin: '$arvo-font-h24-m', size: '24px (1.5rem)', weight: '500', other: '—' },
  { mixin: '$arvo-font-h20-r', size: '20px (1.25rem)', weight: '400', other: '—' },
  { mixin: '$arvo-font-h18-r', size: '18px (1.125rem)', weight: '400', other: '—' },
  { mixin: '$arvo-font-h16-m', size: '16px (1rem)', weight: '500', other: '—' },
  { mixin: '$arvo-font-h14-r', size: '14px (0.875rem)', weight: '400', other: '—' },
  { mixin: '$arvo-font-h14-rc', size: '14px', weight: '400', other: 'text-transform: uppercase' },
  { mixin: '$arvo-font-h14-m', size: '14px', weight: '500', other: '—' },
  { mixin: '$arvo-font-h12-rc', size: '12px (0.75rem)', weight: '400', other: 'text-transform: uppercase' },
  { mixin: '$arvo-font-h12-m', size: '12px', weight: '500', other: '—' },
  { mixin: '$arvo-font-h12-r', size: '12px', weight: '400', other: '—' },
  { mixin: '$arvo-font-h12-mc', size: '12px', weight: '500', other: 'text-transform: uppercase' },
]

export const PARAGRAPH_MIXIN_ROWS = [
  { mixin: '$arvo-font-p24-r', size: '24px (1.5rem)', weight: '400', other: '—' },
  { mixin: '$arvo-font-p20-r', size: '20px (1.25rem)', weight: '400', other: '—' },
  { mixin: '$arvo-font-p16-r', size: '16px (1rem)', weight: '400', other: '—' },
  { mixin: '$arvo-font-p16-m', size: '16px', weight: '500', other: '—' },
  { mixin: '$arvo-font-p14-r', size: '14px', weight: '400', other: '—' },
  { mixin: '$arvo-font-p14-m', size: '14px', weight: '500', other: '—' },
  { mixin: '$arvo-font-p14-b', size: '14px', weight: '700', other: '—' },
  { mixin: '$arvo-font-p12-r', size: '12px (0.75rem)', weight: '400', other: '—' },
  { mixin: '$arvo-font-p12-m', size: '12px', weight: '500', other: '—' },
  { mixin: '$arvo-font-p12-ru', size: '12px', weight: '500', other: 'text-decoration: underline' },
  { mixin: '$arvo-font-p10-r', size: '10px (0.625rem)', weight: '400', other: '—' },
]

export const LABEL_MIXIN_ROWS = [
  { mixin: '$arvo-font-l40-r', size: '40px (2.5rem)', weight: '400', other: '—' },
  { mixin: '$arvo-font-l32-r', size: '32px (2rem)', weight: '400', other: '—' },
  { mixin: '$arvo-font-l24-r', size: '24px (1.5rem)', weight: '400', other: '—' },
  { mixin: '$arvo-font-l16-r', size: '16px (1rem)', weight: '400', other: '—' },
  { mixin: '$arvo-font-l14-r', size: '14px', weight: '400', other: '—' },
  { mixin: '$arvo-font-l14-m', size: '14px', weight: '500', other: '—' },
  { mixin: '$arvo-font-l14-ru', size: '14px', weight: '400', other: 'text-decoration: underline' },
  { mixin: '$arvo-font-l12-r', size: '12px', weight: '400', other: '—' },
  { mixin: '$arvo-font-l12-m', size: '12px', weight: '500', other: '—' },
  { mixin: '$arvo-font-l12-ru', size: '12px', weight: '400', other: 'text-decoration: underline' },
  { mixin: '$arvo-font-l10-r', size: '10px (0.625rem)', weight: '400', other: '—' },
]

export const FONT_WEIGHT_ROWS = [
  { token: '$arvo-regular', value: '400' },
  { token: '$arvo-medium', value: '500' },
  { token: '$arvo-bold', value: '700' },
]

export const FONT_FAMILY_ROWS = [
  { token: '$default-font', maps: '$o9-reg (o9 Sans — primary UI)' },
  { token: '$mono-font', maps: '$o9-mono (monospace stack)' },
]

/**
 * Typography overview — semantic text color tokens for “type style” variants.
 * Maps to `SEMANTIC_TEXT` in `semanticColorTokens.js`.
 */
export const TYPE_STYLE_VARIANT_DOC = [
  { token: 'arvo-color-t-primary', variantLabel: 'Primary text', useFor: 'Important content and primary hierarchy.' },
  { token: 'arvo-color-t-secondary', variantLabel: 'Secondary text', useFor: 'Supporting text and captions.' },
  { token: 'arvo-color-t-tertiary', variantLabel: 'Tertiary text', useFor: 'De-emphasized supporting text.' },
  {
    token: 'arvo-color-t-placeholder',
    variantLabel: 'Placeholder text',
    useFor: 'Very subtle text and form input placeholder.',
  },
  { token: 'arvo-color-t-negative', variantLabel: 'Error / block', useFor: 'Errors, negative states, and blocking messages.' },
  { token: 'arvo-color-t-positive', variantLabel: 'Success', useFor: 'Positive or success outcomes.' },
  { token: 'arvo-color-t-warning', variantLabel: 'Warning', useFor: 'Warnings and critical attention.' },
  { token: 'arvo-color-t-disabled', variantLabel: 'Disabled', useFor: 'Non-interactive UI where reduced contrast is intentional.' },
  { token: 'arvo-color-t-readonly', variantLabel: 'Read-only', useFor: 'Non-interactive content that stays readable.' },
  { token: 'arvo-color-t-info-light', variantLabel: 'Info', useFor: 'Informational alerts and inline hints.' },
  {
    token: 'arvo-color-t-info-dark',
    variantLabel: 'Link',
    useFor: 'Hyperlinks; pair with underline for clarity.',
    underline: true,
  },
  { token: 'arvo-color-t-inverse', variantLabel: 'Inverse', useFor: 'Text on dark or theme-colored surfaces.', inverse: true },
]
