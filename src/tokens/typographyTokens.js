/**
 * o9DS typography — mirrors `o9ds.typography.scss` for documentation.
 */
import o9dsTypographyScss from './o9ds.typography.scss?raw'

export const O9DS_TYPOGRAPHY_SCSS = o9dsTypographyScss

/** SCSS variables: $o9ds-font-size-* (largest to smallest for docs table) */
export const FONT_SIZE_TOKENS = [
  { token: '$o9ds-font-size-64', value: '4rem', px: '64px' },
  { token: '$o9ds-font-size-40', value: '2.5rem', px: '40px' },
  { token: '$o9ds-font-size-32', value: '2rem', px: '32px' },
  { token: '$o9ds-font-size-24', value: '1.5rem', px: '24px' },
  { token: '$o9ds-font-size-20', value: '1.25rem', px: '20px' },
  { token: '$o9ds-font-size-18', value: '1.125rem', px: '18px' },
  { token: '$o9ds-font-size-16', value: '1rem', px: '16px' },
  { token: '$o9ds-font-size-14', value: '0.875rem', px: '14px' },
  { token: '$o9ds-font-size-12', value: '0.75rem', px: '12px' },
  { token: '$o9ds-font-size-10', value: '0.625rem', px: '10px' },
]

export const FONT_WEIGHT_ROWS = [
  { token: '$o9ds-regular', value: '400' },
  { token: '$o9ds-medium', value: '500' },
  { token: '$o9ds-bold', value: '700' },
]

export const FONT_FAMILY_ROWS = [
  { token: '$default-font', maps: '$o9-reg (o9 Sans — primary UI)' },
  { token: '$mono-font', maps: '$o9-mono (monospace stack)' },
]
