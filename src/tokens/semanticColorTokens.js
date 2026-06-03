/**
 * Semantic Color Tokens — map to global tokens by theme and mode
 * Structure: { token, lightGlobal, darkGlobal, useCase }
 * lightGlobal: string (theme-independent) or { o9theme, skyblue, onyxblack, forestgreen, midnightindigo }
 */

import { GLOBAL_TOKEN_HEX } from './globalColorTokens'

export const LIGHT_THEMES = ['o9theme', 'skyblue', 'onyxblack', 'forestgreen', 'midnightindigo']

export const THEME_LABELS = {
  o9theme: 'o9 Theme',
  skyblue: 'Sky Blue',
  onyxblack: 'Onyx Black',
  forestgreen: 'Forest Green',
  midnightindigo: 'Midnight Indigo',
}

/** Surface-theme token (arvo-color-s-theme) for cell bg when displaying focus-inverse, disabled. */
const SURFACE_THEME_ROW = { lightGlobal: { o9theme: 'arvo-global-o9theme-10', skyblue: 'arvo-global-skyblue-09', onyxblack: 'arvo-global-onyxblack-10', forestgreen: 'arvo-global-forestgreen-09', midnightindigo: 'arvo-global-midnightindigo-10' }, darkGlobal: 'arvo-global-dark-07' }

/** Resolve surface-theme hex for focus-inverse / inverse / active-inverse cell backgrounds. */
export function resolveSurfaceThemeHex(lightTheme, isDark) {
  const globalToken = isDark ? SURFACE_THEME_ROW.darkGlobal : SURFACE_THEME_ROW.lightGlobal[lightTheme]
  return GLOBAL_TOKEN_HEX[globalToken] ?? '#808080'
}

/** Resolve surface-negative-active hex for white-static cell backgrounds. */
const SURFACE_NEGATIVE_ACTIVE = { lightGlobal: 'arvo-global-redish-11', darkGlobal: 'arvo-global-redish-10' }
export function resolveSurfaceNegativeActiveHex(lightTheme, isDark) {
  const globalToken = isDark ? SURFACE_NEGATIVE_ACTIVE.darkGlobal : SURFACE_NEGATIVE_ACTIVE.lightGlobal
  return GLOBAL_TOKEN_HEX[globalToken] ?? '#808080'
}

/** Resolve surface-white-static hex for black-static cell backgrounds. */
const SURFACE_WHITE_STATIC = { lightGlobal: 'arvo-global-white', darkGlobal: 'arvo-global-white' }
export function resolveSurfaceWhiteStaticHex(lightTheme, isDark) {
  const globalToken = isDark ? SURFACE_WHITE_STATIC.darkGlobal : SURFACE_WHITE_STATIC.lightGlobal
  return GLOBAL_TOKEN_HEX[globalToken] ?? '#808080'
}

/** Nova gradient using global CSS variables (production / copy snippet). */
export const NOVA_SURFACE_GRADIENT_VARS =
  'linear-gradient(61deg, var(--arvo-global-nova-start) 0.88%, var(--arvo-global-nova-end) 60.13%)'

/** Nova gradient with resolved hex — for doc swatches when globals are not on :root. */
export function buildNovaSurfaceGradientPreview() {
  const start = GLOBAL_TOKEN_HEX['arvo-global-nova-start'] ?? '#FFE9C9'
  const end = GLOBAL_TOKEN_HEX['arvo-global-nova-end'] ?? '#FF3D00'
  return `linear-gradient(61deg, ${start} 0.88%, ${end} 60.13%)`
}

export const NOVA_SURFACE_GRADIENT_PREVIEW = buildNovaSurfaceGradientPreview()

/** Copy-ready background declaration with semantic var + gradient fallback. */
export const NOVA_SURFACE_BACKGROUND_CSS = `background: var(--arvo-color-s-nova-static, ${NOVA_SURFACE_GRADIENT_VARS});`
export const NOVA_BORDER_BACKGROUND_CSS = `border-color: var(--arvo-color-b-nova-static, ${NOVA_SURFACE_GRADIENT_VARS});`
export const NOVA_ICON_COLOR_CSS = `background: var(--arvo-color-i-nova-static, ${NOVA_SURFACE_GRADIENT_VARS}); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent;`

/** Resolve semantic token to hex. Live dependency on global tokens. */
export function resolveSemanticToHex(row, lightTheme, isDark) {
  if (row.lightGradient) {
    return GLOBAL_TOKEN_HEX['arvo-global-nova-start'] ?? '#FFE9C9'
  }
  const globalToken = isDark ? row.darkGlobal : (typeof row.lightGlobal === 'string' ? row.lightGlobal : row.lightGlobal[lightTheme])
  return GLOBAL_TOKEN_HEX[globalToken] ?? '#808080'
}

/** Resolve semantic token to global token name (for display). */
export function resolveSemanticToGlobalName(row, lightTheme, isDark) {
  if (row.lightGradient) {
    return isDark ? (row.darkGlobalLabel ?? row.darkGradient) : (row.lightGlobalLabel ?? row.lightGradient)
  }
  return isDark ? row.darkGlobal : (typeof row.lightGlobal === 'string' ? row.lightGlobal : row.lightGlobal[lightTheme])
}

/** Figma surface variable order (see Foundations → Colors → Semantic → Surface). */
const SURFACE_FIGMA_TOKEN_ORDER = [
  'arvo-color-s-base',
  'arvo-color-s-layer-01',
  'arvo-color-s-layer-02',
  'arvo-color-s-layer-03',
  'arvo-color-s-layer-04',
  'arvo-color-s-layer-05',
  'arvo-color-s-layer-06',
  'arvo-color-s-layer-07',
  'arvo-color-s-placeholder',
  'arvo-color-s-placeholder-2',
  'arvo-color-s-brand',
  'arvo-color-s-theme',
  'arvo-color-s-theme-2',
  'arvo-color-s-theme-hover-1',
  'arvo-color-s-theme-hover-2',
  'arvo-color-s-theme-hover-3',
  'arvo-color-s-theme-hover-4',
  'arvo-color-s-theme-active-1',
  'arvo-color-s-theme-active-2',
  'arvo-color-s-theme-active-3',
  'arvo-color-s-theme-active-4',
  'arvo-color-s-theme-active-5',
  'arvo-color-s-hover', // Figma: hover / scroll-hover (one token)
  'arvo-color-s-active',
  'arvo-color-s-disabled',
  'arvo-color-s-readonly',
  'arvo-color-s-negative-subtle',
  'arvo-color-s-positive-subtle',
  'arvo-color-s-warning-subtle',
  'arvo-color-s-info-subtle',
  'arvo-color-s-positive-strong',
  'arvo-color-s-negative-strong',
  'arvo-color-s-warning-strong',
  'arvo-color-s-info-strong',
  'arvo-color-s-neutral-strong',
  'arvo-color-s-negative',
  'arvo-color-s-negative-hover',
  'arvo-color-s-negative-active',
  'arvo-color-s-negative-static',
  'arvo-color-s-neutral',
  'arvo-color-s-inverse',
  'arvo-color-s-direct',
  'arvo-color-s-on-inverse',
  'arvo-color-s-white-static',
  'arvo-color-s-black-static',
  'arvo-color-s-overlay-static',
  'arvo-color-s-shadow-static-1',
  'arvo-color-s-shadow-static-2',
  'arvo-color-s-pulse-light',
  'arvo-color-s-pulse-dark',
  'arvo-color-s-fn-currenttime',
  'arvo-color-s-fn-pasttime',
  'arvo-color-s-fn-editable',
  'arvo-color-s-fn-ancestorfrozen',
  'arvo-color-s-fn-frozen',
  'arvo-color-s-fn-frozenleaf', // Figma: frozen-leaf
  'arvo-color-s-util-purple-dark',
  'arvo-color-s-util-purple-static',
  'arvo-color-s-util-purple-subtle',
  'arvo-color-s-util-pink-dark',
  'arvo-color-s-util-pink-static',
  'arvo-color-s-util-pink-subtle',
  'arvo-color-s-util-glacier-dark',
  'arvo-color-s-util-glacier-static',
  'arvo-color-s-util-glacier-subtle',
  'arvo-color-s-util-amber-dark',
  'arvo-color-s-util-amber-static',
  'arvo-color-s-util-amber-subtle',
  'arvo-color-s-util-greenish-dark',
  'arvo-color-s-util-greenish-static',
  'arvo-color-s-util-greenish-subtle',
  'arvo-color-s-util-bluish-dark',
  'arvo-color-s-util-bluish-static',
  'arvo-color-s-util-bluish-subtle',
]

/** In docs data but not in Figma surface list — appended after util. */
const SURFACE_EXTRA_TOKEN_ORDER = ['arvo-color-s-nova-static']

const SEMANTIC_SURFACE_ROWS = [
  { token: 'arvo-color-s-base', lightGlobal: 'arvo-global-gray-01', darkGlobal: 'arvo-global-gray-09', useCase: 'Base background for body. Left sidebar, header, etc.' },
  { token: 'arvo-color-s-layer-01', lightGlobal: 'arvo-global-white', darkGlobal: 'arvo-global-gray-10', useCase: 'App header, right sidebar, tile layout.' },
  { token: 'arvo-color-s-layer-02', lightGlobal: 'arvo-global-gray-01', darkGlobal: 'arvo-global-gray-09', useCase: 'Background for Cards, AI prompts.' },
  { token: 'arvo-color-s-layer-03', lightGlobal: 'arvo-global-white', darkGlobal: 'arvo-global-gray-07', useCase: 'Windows, dialogs, popovers.' },
  { token: 'arvo-color-s-layer-04', lightGlobal: 'arvo-global-gray-01', darkGlobal: 'arvo-global-gray-08', useCase: 'Form inputs, searchbar, alerts, badges.' },
  { token: 'arvo-color-s-layer-05', lightGlobal: 'arvo-global-gray-01', darkGlobal: 'arvo-global-gray-08', useCase: 'Secondary button default state.' },
  { token: 'arvo-color-s-layer-06', lightGlobal: 'arvo-global-white', darkGlobal: 'arvo-global-gray-08', useCase: 'Background for dropdowns.' },
  { token: 'arvo-color-s-layer-07', lightGlobal: 'arvo-global-gray-03', darkGlobal: 'arvo-global-gray-07', useCase: 'Scroll handles, toggle off track.' },
  { token: 'arvo-color-s-placeholder', lightGlobal: 'arvo-global-white', darkGlobal: 'arvo-global-gray-03', useCase: 'Toggle switch handle.' },
  { token: 'arvo-color-s-placeholder-2', lightGlobal: 'arvo-global-gray-07', darkGlobal: 'arvo-global-gray-07', useCase: 'Avatar group "+4" more indicator.' },
  { token: 'arvo-color-s-brand', lightGlobal: 'arvo-global-gray-01', darkGlobal: 'arvo-global-gray-09', useCase: 'Left sidebar navigation background.' },
  { token: 'arvo-color-s-theme', lightGlobal: { o9theme: 'arvo-global-o9theme-10', skyblue: 'arvo-global-skyblue-09', onyxblack: 'arvo-global-onyxblack-10', forestgreen: 'arvo-global-forestgreen-09', midnightindigo: 'arvo-global-midnightindigo-10' }, darkGlobal: 'arvo-global-dark-07', useCase: 'Primary buttons, checkboxes, etc.' },
  { token: 'arvo-color-s-theme-2', lightGlobal: { o9theme: 'arvo-global-o9theme-10', skyblue: 'arvo-global-skyblue-09', onyxblack: 'arvo-global-onyxblack-10', forestgreen: 'arvo-global-forestgreen-09', midnightindigo: 'arvo-global-midnightindigo-10' }, darkGlobal: 'arvo-global-dark-12', useCase: 'Toolbar.' },
  { token: 'arvo-color-s-theme-hover-1', lightGlobal: { o9theme: 'arvo-global-o9theme-09', skyblue: 'arvo-global-skyblue-09', onyxblack: 'arvo-global-onyxblack-09', forestgreen: 'arvo-global-forestgreen-10', midnightindigo: 'arvo-global-midnightindigo-09' }, darkGlobal: 'arvo-global-dark-03', useCase: 'Hover state for Primary btn' },
  { token: 'arvo-color-s-theme-hover-2', lightGlobal: { o9theme: 'arvo-global-o9theme-08', skyblue: 'arvo-global-skyblue-08', onyxblack: 'arvo-global-onyxblack-08', forestgreen: 'arvo-global-forestgreen-08', midnightindigo: 'arvo-global-midnightindigo-08' }, darkGlobal: 'arvo-global-dark-13', useCase: 'Hover state for secondary, tertiary and outline' },
  { token: 'arvo-color-s-theme-hover-3', lightGlobal: { o9theme: 'arvo-global-o9theme-07', skyblue: 'arvo-global-skyblue-07', onyxblack: 'arvo-global-onyxblack-07', forestgreen: 'arvo-global-forestgreen-07', midnightindigo: 'arvo-global-midnightindigo-07' }, darkGlobal: 'arvo-global-dark-12', useCase: 'Secondary tab hover state' },
  { token: 'arvo-color-s-theme-hover-4', lightGlobal: { o9theme: 'arvo-global-o9theme-07', skyblue: 'arvo-global-skyblue-07', onyxblack: 'arvo-global-onyxblack-07', forestgreen: 'arvo-global-forestgreen-07', midnightindigo: 'arvo-global-midnightindigo-07' }, darkGlobal: 'arvo-global-dark-09', useCase: 'Hover state for dropdowns, notifications hover' },
  { token: 'arvo-color-s-theme-active-1', lightGlobal: { o9theme: 'arvo-global-o9theme-10', skyblue: 'arvo-global-skyblue-09', onyxblack: 'arvo-global-onyxblack-10', forestgreen: 'arvo-global-forestgreen-09', midnightindigo: 'arvo-global-midnightindigo-09' }, darkGlobal: 'arvo-global-dark-07', useCase: 'Checkbox, radio active state' },
  { token: 'arvo-color-s-theme-active-2', lightGlobal: { o9theme: 'arvo-global-o9theme-07', skyblue: 'arvo-global-skyblue-07', onyxblack: 'arvo-global-onyxblack-07', forestgreen: 'arvo-global-forestgreen-07', midnightindigo: 'arvo-global-midnightindigo-07' }, darkGlobal: 'arvo-global-dark-12', useCase: 'Active state for secondary, tertiary, outline btn' },
  { token: 'arvo-color-s-theme-active-3', lightGlobal: { o9theme: 'arvo-global-o9theme-06', skyblue: 'arvo-global-skyblue-06', onyxblack: 'arvo-global-onyxblack-06', forestgreen: 'arvo-global-forestgreen-06', midnightindigo: 'arvo-global-midnightindigo-06' }, darkGlobal: 'arvo-global-o9theme-09', useCase: 'Active state for secondary Tab' },
  { token: 'arvo-color-s-theme-active-4', lightGlobal: { o9theme: 'arvo-global-o9theme-06', skyblue: 'arvo-global-skyblue-06', onyxblack: 'arvo-global-onyxblack-06', forestgreen: 'arvo-global-forestgreen-06', midnightindigo: 'arvo-global-midnightindigo-06' }, darkGlobal: 'arvo-global-gray-08', useCase: 'Active state for Dropdown' },
  { token: 'arvo-color-s-theme-active-5', lightGlobal: { o9theme: 'arvo-global-o9theme-11', skyblue: 'arvo-global-skyblue-11', onyxblack: 'arvo-global-onyxblack-11', forestgreen: 'arvo-global-forestgreen-11', midnightindigo: 'arvo-global-midnightindigo-11' }, darkGlobal: 'arvo-global-dark-06', useCase: 'Active/pressed state for Primary Button' },
  { token: 'arvo-color-s-hover', lightGlobal: 'arvo-global-gray-04', darkGlobal: 'arvo-global-dark-05', useCase: 'Scroll handle hover (Figma: hover / scroll-hover).' },
  { token: 'arvo-color-s-active', lightGlobal: 'arvo-global-white', darkGlobal: 'arvo-global-black', useCase: 'Left sidebar - icon button active state' },
  { token: 'arvo-color-s-disabled', lightGlobal: 'arvo-global-gray-02', darkGlobal: 'arvo-global-gray-08', useCase: 'Background for disabled elements (buttons, checkboxes, chips).' },
  { token: 'arvo-color-s-readonly', lightGlobal: 'arvo-global-gray-01', darkGlobal: 'arvo-global-gray-08', useCase: 'Read-only field background.' },
  { token: 'arvo-color-s-negative-subtle', lightGlobal: 'arvo-global-redish-05', darkGlobal: 'arvo-global-redish-05', useCase: 'Subtle error / negative background.' },
  { token: 'arvo-color-s-positive-subtle', lightGlobal: 'arvo-global-greenish-07', darkGlobal: 'arvo-global-gray-08', useCase: 'Subtle positive / success background.' },
  { token: 'arvo-color-s-warning-subtle', lightGlobal: 'arvo-global-warning-06', darkGlobal: 'arvo-global-gray-08', useCase: 'Subtle warning background.' },
  { token: 'arvo-color-s-info-subtle', lightGlobal: 'arvo-global-bluish-06', darkGlobal: 'arvo-global-gray-08', useCase: 'Subtle info background.' },
  { token: 'arvo-color-s-positive-strong', lightGlobal: 'arvo-global-positive-10', darkGlobal: 'arvo-global-greenish-09', useCase: 'Strong positive / success background.' },
  { token: 'arvo-color-s-negative-strong', lightGlobal: 'arvo-global-redish-09', darkGlobal: 'arvo-global-redish-06', useCase: 'Strong error / negative background.' },
  { token: 'arvo-color-s-warning-strong', lightGlobal: 'arvo-global-warning-10', darkGlobal: 'arvo-global-orangish-09', useCase: 'Strong warning background.' },
  { token: 'arvo-color-s-info-strong', lightGlobal: 'arvo-global-bluish-09', darkGlobal: 'arvo-global-bluish-07', useCase: 'Strong info background.' },
  { token: 'arvo-color-s-neutral-strong', lightGlobal: 'arvo-global-gray-07', darkGlobal: 'arvo-global-gray-02', useCase: 'Strong neutral background.' },
  { token: 'arvo-color-s-negative', lightGlobal: 'arvo-global-redish-09', darkGlobal: 'arvo-global-redish-06', useCase: 'Danger Button primary color.' },
  { token: 'arvo-color-s-negative-hover', lightGlobal: 'arvo-global-redish-10', darkGlobal: 'arvo-global-redish-09', useCase: 'Danger button hover; Checkbox/radio hover.' },
  { token: 'arvo-color-s-negative-active', lightGlobal: 'arvo-global-redish-11', darkGlobal: 'arvo-global-redish-10', useCase: 'Danger button active state color.' },
  { token: 'arvo-color-s-negative-static', lightGlobal: 'arvo-global-redish-08', darkGlobal: 'arvo-global-redish-08', useCase: 'Counter background color.' },
  { token: 'arvo-color-s-neutral', lightGlobal: 'arvo-global-black', darkGlobal: 'arvo-global-white', useCase: 'Neutral counters/badge background color.' },
  { token: 'arvo-color-s-inverse', lightGlobal: 'arvo-global-black', darkGlobal: 'arvo-global-white', useCase: 'Inverse background (e.g., Tooltips).' },
  { token: 'arvo-color-s-direct', lightGlobal: 'arvo-global-white', darkGlobal: 'arvo-global-black', useCase: 'Direct background (Pivot tables, Grid cells).' },
  { token: 'arvo-color-s-on-inverse', lightGlobal: 'arvo-global-gray-08', darkGlobal: 'arvo-global-gray-01', useCase: 'Shortcut info text/icons on Tooltip.' },
  { token: 'arvo-color-s-white-static', lightGlobal: 'arvo-global-white', darkGlobal: 'arvo-global-white', useCase: 'Color picker - light mode preview.' },
  { token: 'arvo-color-s-black-static', lightGlobal: 'arvo-global-gray-10', darkGlobal: 'arvo-global-dark-gray-10', useCase: 'Color picker - dark mode preview.' },
  { token: 'arvo-color-s-overlay-static', lightGlobal: 'arvo-global-opacity-1', darkGlobal: 'arvo-global-opacity-1', useCase: 'Overlay for popups/modals.' },
  { token: 'arvo-color-s-shadow-static-1', lightGlobal: 'arvo-global-opacity-2', darkGlobal: 'arvo-global-opacity-2', useCase: 'Shadow for popover, dropdown, window, tooltip, toast.' },
  { token: 'arvo-color-s-shadow-static-2', lightGlobal: 'arvo-global-opacity-3', darkGlobal: 'arvo-global-opacity-2', useCase: 'Shadow for left sidebar.' },
  { token: 'arvo-color-s-pulse-light', lightGlobal: 'arvo-global-gray-01', darkGlobal: 'arvo-global-gray-09', useCase: 'Skeleton loader (light - starting color).' },
  { token: 'arvo-color-s-pulse-dark', lightGlobal: 'arvo-global-gray-02', darkGlobal: 'arvo-global-gray-06', useCase: 'Skeleton loader (dark - ending color).' },
  { token: 'arvo-color-s-fn-currenttime', lightGlobal: 'arvo-global-orangish-09', darkGlobal: 'arvo-global-orangish-10', useCase: 'Current time bucket color.' },
  { token: 'arvo-color-s-fn-pasttime', lightGlobal: 'arvo-global-gray-01', darkGlobal: 'arvo-global-gray-09', useCase: 'Past time bucket color.' },
  { token: 'arvo-color-s-fn-editable', lightGlobal: 'arvo-global-orangish-07', darkGlobal: 'arvo-global-orangish-11', useCase: 'Editable cell background.' },
  { token: 'arvo-color-s-fn-ancestorfrozen', lightGlobal: 'arvo-global-green-08', darkGlobal: 'arvo-global-green-10', useCase: 'Ancestor frozen cell.' },
  { token: 'arvo-color-s-fn-frozen', lightGlobal: 'arvo-global-green-07', darkGlobal: 'arvo-global-greenish-10', useCase: 'Main frozen cell color.' },
  { token: 'arvo-color-s-fn-frozenleaf', lightGlobal: 'arvo-global-greenish-08', darkGlobal: 'arvo-global-green-09', useCase: 'Leaf frozen cell in pivot (Figma: frozen-leaf).' },
  { token: 'arvo-color-s-util-purple-dark', lightGlobal: 'arvo-global-purple-10', darkGlobal: 'arvo-global-purple-08', useCase: 'Utility purple — dark emphasis.' },
  { token: 'arvo-color-s-util-purple-static', lightGlobal: 'arvo-global-purple-08', darkGlobal: 'arvo-global-purple-08', useCase: 'Utility purple — static.' },
  { token: 'arvo-color-s-util-purple-subtle', lightGlobal: 'arvo-global-purple-08', darkGlobal: 'arvo-global-gray-08', useCase: 'Utility purple — subtle.' },
  { token: 'arvo-color-s-util-pink-dark', lightGlobal: 'arvo-global-pink-10', darkGlobal: 'arvo-global-pink-08', useCase: 'Utility pink — dark emphasis.' },
  { token: 'arvo-color-s-util-pink-static', lightGlobal: 'arvo-global-pink-08', darkGlobal: 'arvo-global-pink-08', useCase: 'Utility pink — static.' },
  { token: 'arvo-color-s-util-pink-subtle', lightGlobal: 'arvo-global-pink-08', darkGlobal: 'arvo-global-gray-08', useCase: 'Utility pink — subtle.' },
  { token: 'arvo-color-s-util-glacier-dark', lightGlobal: 'arvo-global-glacier-10', darkGlobal: 'arvo-global-glacier-08', useCase: 'Utility glacier — dark emphasis.' },
  { token: 'arvo-color-s-util-glacier-static', lightGlobal: 'arvo-global-glacier-08', darkGlobal: 'arvo-global-glacier-08', useCase: 'Utility glacier — static.' },
  { token: 'arvo-color-s-util-glacier-subtle', lightGlobal: 'arvo-global-glacier-08', darkGlobal: 'arvo-global-gray-08', useCase: 'Utility glacier — subtle.' },
  { token: 'arvo-color-s-util-amber-dark', lightGlobal: 'arvo-global-amber-10', darkGlobal: 'arvo-global-amber-08', useCase: 'Utility amber — dark emphasis.' },
  { token: 'arvo-color-s-util-amber-static', lightGlobal: 'arvo-global-amber-08', darkGlobal: 'arvo-global-amber-08', useCase: 'Utility amber — static.' },
  { token: 'arvo-color-s-util-amber-subtle', lightGlobal: 'arvo-global-amber-08', darkGlobal: 'arvo-global-gray-08', useCase: 'Utility amber — subtle.' },
  { token: 'arvo-color-s-util-greenish-dark', lightGlobal: 'arvo-global-greenish-10', darkGlobal: 'arvo-global-greenish-08', useCase: 'Utility greenish — dark emphasis.' },
  { token: 'arvo-color-s-util-greenish-static', lightGlobal: 'arvo-global-greenish-08', darkGlobal: 'arvo-global-greenish-08', useCase: 'Utility greenish — static.' },
  { token: 'arvo-color-s-util-greenish-subtle', lightGlobal: 'arvo-global-greenish-08', darkGlobal: 'arvo-global-gray-08', useCase: 'Utility greenish — subtle.' },
  { token: 'arvo-color-s-util-bluish-dark', lightGlobal: 'arvo-global-bluish-10', darkGlobal: 'arvo-global-bluish-07', useCase: 'Utility bluish — dark emphasis.' },
  { token: 'arvo-color-s-util-bluish-static', lightGlobal: 'arvo-global-bluish-07', darkGlobal: 'arvo-global-bluish-07', useCase: 'Utility bluish — static.' },
  { token: 'arvo-color-s-util-bluish-subtle', lightGlobal: 'arvo-global-bluish-07', darkGlobal: 'arvo-global-gray-08', useCase: 'Utility bluish — subtle.' },
  {
    token: 'arvo-color-s-nova-static',
    lightGradient: NOVA_SURFACE_GRADIENT_PREVIEW,
    darkGradient: NOVA_SURFACE_GRADIENT_PREVIEW,
    lightGlobalLabel: 'arvo-global-nova-start → arvo-global-nova-end',
    darkGlobalLabel: 'arvo-global-nova-start → arvo-global-nova-end',
    useCase: 'Nova AI brand surface gradient (not in Figma surface list).',
  },
]

function orderSurfaceTokens(rows, figmaOrder, extraOrder) {
  const byToken = new Map(rows.map((row) => [row.token, row]))
  const ordered = []
  for (const token of [...figmaOrder, ...extraOrder]) {
    const row = byToken.get(token)
    if (row) ordered.push(row)
  }
  for (const row of rows) {
    if (!ordered.includes(row)) ordered.push(row)
  }
  return ordered
}

export const SEMANTIC_SURFACE = orderSurfaceTokens(
  SEMANTIC_SURFACE_ROWS,
  SURFACE_FIGMA_TOKEN_ORDER,
  SURFACE_EXTRA_TOKEN_ORDER,
)

/** Tokens in docs but not in the Figma surface variable list. */
export const SURFACE_TOKENS_NOT_IN_FIGMA = [...SURFACE_EXTRA_TOKEN_ORDER]

/** Quick-filter groups for Surface semantic tokens (Colors page). */
export const SURFACE_QUICK_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'neutral', label: 'Neutral' },
  { id: 'theme', label: 'Theme' },
  { id: 'fn', label: 'Functional' },
  { id: 'util', label: 'Utility' },
]

/** Classify a surface token for quick filters (`neutral` | `theme` | `fn` | `util`). */
export function getSurfaceTokenFilterCategory(token) {
  if (token.includes('-fn-')) return 'fn'
  if (token.includes('-util-')) return 'util'
  if (/-theme(?:-|$)/.test(token)) return 'theme'
  return 'neutral'
}

/** Count surface tokens per quick-filter id (includes `all`). */
export function countSurfaceTokensByQuickFilter(rows = SEMANTIC_SURFACE) {
  const counts = { all: rows.length, neutral: 0, theme: 0, fn: 0, util: 0 }
  for (const { token } of rows) {
    counts[getSurfaceTokenFilterCategory(token)]++
  }
  return counts
}

/** Figma border variable order (Theme → form states → border / util). */
const BORDER_FIGMA_TOKEN_ORDER = [
  'arvo-color-b-divider',
  'arvo-color-b-base',
  'arvo-color-b-subtle',
  'arvo-color-b-dark',
  'arvo-color-b-separator',
  'arvo-color-b-inverse',
  'arvo-color-b-direct',
  'arvo-color-b-theme',
  'arvo-color-b-hover',
  'arvo-color-b-theme-hover',
  'arvo-color-b-theme-hover-2',
  'arvo-color-b-theme-active',
  'arvo-color-b-active-static',
  'arvo-color-b-positive',
  'arvo-color-b-negative',
  'arvo-color-b-warning',
  'arvo-color-b-warning-static',
  'arvo-color-b-info',
  'arvo-color-b-neutral',
  'arvo-color-b-theme-focus',
  'arvo-color-b-focus-inverse',
  'arvo-color-b-form',
  'arvo-color-b-form-separator',
  'arvo-color-b-disabled',
  'arvo-color-b-readonly',
  'arvo-color-b-util-purple-dark',
  'arvo-color-b-util-purple-static',
  'arvo-color-b-util-pink-dark',
  'arvo-color-b-util-pink-static',
  'arvo-color-b-util-glacier-dark',
  'arvo-color-b-util-glacier-static',
  'arvo-color-b-util-amber-dark',
  'arvo-color-b-util-amber-static',
  'arvo-color-b-util-greenish-dark',
  'arvo-color-b-util-greenish-static',
  'arvo-color-b-util-bluish-dark',
  'arvo-color-b-util-bluish-static',
  'arvo-color-b-nova-static',
]

// Border tokens — use border: 2px solid var(--token). focus-inverse and disabled sit on surface-theme bg.
const SEMANTIC_BORDER_ROWS = [
  { token: 'arvo-color-b-divider', lightGlobal: 'arvo-global-gray-02', darkGlobal: 'arvo-global-gray-08', useCase: 'Actions separator, chips border, tile border, button group, counter, pivot gridlines, chart gridlines.' },
  { token: 'arvo-color-b-base', lightGlobal: 'arvo-global-gray-01', darkGlobal: 'arvo-global-gray-09', useCase: 'Match border with surface base (dim separator in H Filter).' },
  { token: 'arvo-color-b-subtle', lightGlobal: 'arvo-global-gray-01', darkGlobal: 'arvo-global-gray-10', useCase: 'Dropdown divider on gray bg.' },
  { token: 'arvo-color-b-dark', lightGlobal: 'arvo-global-gray-04', darkGlobal: 'arvo-global-gray-06', useCase: 'Past time bucket color on gray divider.' },
  { token: 'arvo-color-b-separator', lightGlobal: 'arvo-global-gray-02', darkGlobal: 'arvo-global-gray-07', useCase: 'Vertical divider inside form fields (e.g. minus/plus in input group).' },
  { token: 'arvo-color-b-inverse', lightGlobal: 'arvo-global-black', darkGlobal: 'arvo-global-gray-01', useCase: 'Inverse border.' },
  { token: 'arvo-color-b-direct', lightGlobal: 'arvo-global-white', darkGlobal: 'arvo-global-black', useCase: 'Direct border (Pivot tables, grid cells — pairs with surface direct).' },
  { token: 'arvo-color-b-theme', lightGlobal: { o9theme: 'arvo-global-o9theme-10', skyblue: 'arvo-global-skyblue-09', onyxblack: 'arvo-global-onyxblack-10', forestgreen: 'arvo-global-forestgreen-09', midnightindigo: 'arvo-global-midnightindigo-10' }, darkGlobal: 'arvo-global-dark-07', useCase: 'Theme border (primary buttons, links).' },
  { token: 'arvo-color-b-hover', lightGlobal: 'arvo-global-gray-03', darkGlobal: 'arvo-global-gray-08', useCase: 'Not active tab hover state.' },
  { token: 'arvo-color-b-theme-hover', lightGlobal: { o9theme: 'arvo-global-o9theme-10', skyblue: 'arvo-global-skyblue-09', onyxblack: 'arvo-global-onyxblack-10', forestgreen: 'arvo-global-forestgreen-09', midnightindigo: 'arvo-global-midnightindigo-10' }, darkGlobal: 'arvo-global-dark-07', useCase: 'Tab border hover color in default state.' },
  { token: 'arvo-color-b-theme-hover-2', lightGlobal: { o9theme: 'arvo-global-o9theme-09', skyblue: 'arvo-global-skyblue-10', onyxblack: 'arvo-global-onyxblack-10', forestgreen: 'arvo-global-forestgreen-10', midnightindigo: 'arvo-global-midnightindigo-09' }, darkGlobal: 'arvo-global-dark-08', useCase: 'Active/selected state of chips, cards, or active tabs.' },
  { token: 'arvo-color-b-theme-active', lightGlobal: { o9theme: 'arvo-global-o9theme-10', skyblue: 'arvo-global-skyblue-09', onyxblack: 'arvo-global-onyxblack-10', forestgreen: 'arvo-global-forestgreen-09', midnightindigo: 'arvo-global-midnightindigo-10' }, darkGlobal: 'arvo-global-dark-07', useCase: 'Tab active state border color.' },
  { token: 'arvo-color-b-active-static', lightGlobal: 'arvo-global-gray-05', darkGlobal: 'arvo-global-gray-05', useCase: 'Active state for interactive elements (e.g. title view in filters).' },
  { token: 'arvo-color-b-positive', lightGlobal: 'arvo-global-greenish-10', darkGlobal: 'arvo-global-greenish-09', useCase: 'Positive/success border.' },
  { token: 'arvo-color-b-negative', lightGlobal: 'arvo-global-redish-09', darkGlobal: 'arvo-global-redish-06', useCase: 'Input field error border on hover/focus.' },
  { token: 'arvo-color-b-warning', lightGlobal: 'arvo-global-orangish-10', darkGlobal: 'arvo-global-orangish-09', useCase: 'Warning border.' },
  { token: 'arvo-color-b-warning-static', lightGlobal: 'arvo-global-orangish-08', darkGlobal: 'arvo-global-orangish-08', useCase: 'Static warning border.' },
  { token: 'arvo-color-b-info', lightGlobal: 'arvo-global-bluish-09', darkGlobal: 'arvo-global-bluish-08', useCase: 'Info border.' },
  { token: 'arvo-color-b-neutral', lightGlobal: 'arvo-global-black', darkGlobal: 'arvo-global-white', useCase: 'Neutral border.' },
  { token: 'arvo-color-b-theme-focus', lightGlobal: { o9theme: 'arvo-global-o9theme-10', skyblue: 'arvo-global-skyblue-09', onyxblack: 'arvo-global-onyxblack-10', forestgreen: 'arvo-global-forestgreen-09', midnightindigo: 'arvo-global-midnightindigo-10' }, darkGlobal: 'arvo-global-dark-07', useCase: 'Theme focus border.' },
  { token: 'arvo-color-b-focus-inverse', lightGlobal: 'arvo-global-white', darkGlobal: 'arvo-global-black', useCase: 'Focus inverse border. Use with surface-theme background (sits on top of that).' },
  { token: 'arvo-color-b-form', lightGlobal: 'arvo-global-gray-11', darkGlobal: 'arvo-global-gray-05', useCase: 'Form field border.' },
  { token: 'arvo-color-b-form-separator', lightGlobal: 'arvo-global-gray-11', darkGlobal: 'arvo-global-gray-05', useCase: 'Form field internal separator border.' },
  { token: 'arvo-color-b-disabled', lightGlobal: 'arvo-global-gray-03', darkGlobal: 'arvo-global-gray-06', useCase: 'Disabled border. Use with surface-theme background (sits on top of that).' },
  { token: 'arvo-color-b-readonly', lightGlobal: 'arvo-global-gray-05', darkGlobal: 'arvo-global-gray-06', useCase: 'Read-only field border (dashed).', borderStyle: 'dashed' },
  { token: 'arvo-color-b-util-purple-dark', lightGlobal: 'arvo-global-purple-10', darkGlobal: 'arvo-global-purple-08', useCase: 'Utility purple border (Figma: purple).' },
  { token: 'arvo-color-b-util-purple-static', lightGlobal: 'arvo-global-purple-09', darkGlobal: 'arvo-global-purple-09', useCase: 'Utility purple border — static.' },
  { token: 'arvo-color-b-util-pink-dark', lightGlobal: 'arvo-global-pink-10', darkGlobal: 'arvo-global-pink-08', useCase: 'Utility pink border (Figma: pink).' },
  { token: 'arvo-color-b-util-pink-static', lightGlobal: 'arvo-global-pink-09', darkGlobal: 'arvo-global-pink-09', useCase: 'Utility pink border — static.' },
  { token: 'arvo-color-b-util-glacier-dark', lightGlobal: 'arvo-global-glacier-10', darkGlobal: 'arvo-global-glacier-08', useCase: 'Utility glacier border (Figma: glacier).' },
  { token: 'arvo-color-b-util-glacier-static', lightGlobal: 'arvo-global-glacier-09', darkGlobal: 'arvo-global-glacier-09', useCase: 'Utility glacier border — static.' },
  { token: 'arvo-color-b-util-amber-dark', lightGlobal: 'arvo-global-amber-10', darkGlobal: 'arvo-global-amber-08', useCase: 'Utility amber border (Figma: amber).' },
  { token: 'arvo-color-b-util-amber-static', lightGlobal: 'arvo-global-amber-09', darkGlobal: 'arvo-global-amber-09', useCase: 'Utility amber border — static.' },
  { token: 'arvo-color-b-util-greenish-dark', lightGlobal: 'arvo-global-greenish-10', darkGlobal: 'arvo-global-greenish-08', useCase: 'Utility greenish border (Figma: greenish).' },
  { token: 'arvo-color-b-util-greenish-static', lightGlobal: 'arvo-global-greenish-09', darkGlobal: 'arvo-global-greenish-09', useCase: 'Utility greenish border — static.' },
  { token: 'arvo-color-b-util-bluish-dark', lightGlobal: 'arvo-global-bluish-10', darkGlobal: 'arvo-global-bluish-07', useCase: 'Utility bluish border (Figma: bluish).' },
  { token: 'arvo-color-b-util-bluish-static', lightGlobal: 'arvo-global-bluish-08', darkGlobal: 'arvo-global-bluish-08', useCase: 'Utility bluish border — static.' },
  {
    token: 'arvo-color-b-nova-static',
    lightGradient: NOVA_SURFACE_GRADIENT_PREVIEW,
    darkGradient: NOVA_SURFACE_GRADIENT_PREVIEW,
    lightGlobalLabel: 'arvo-global-nova-start → arvo-global-nova-end',
    darkGlobalLabel: 'arvo-global-nova-start → arvo-global-nova-end',
    useCase: 'Nova AI brand border gradient.',
  },
]

export const SEMANTIC_BORDER = orderSurfaceTokens(SEMANTIC_BORDER_ROWS, BORDER_FIGMA_TOKEN_ORDER, [])

/** Quick-filter groups for Border semantic tokens (Colors page). */
export const BORDER_QUICK_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'util', label: 'Utility' },
]

/** Classify a border token for quick filters (`util` | otherwise core). */
export function getBorderTokenFilterCategory(token) {
  if (token.includes('-util-')) return 'util'
  return 'core'
}

/** Count border tokens per quick-filter id (includes `all`). */
export function countBorderTokensByQuickFilter(rows = SEMANTIC_BORDER) {
  const counts = { all: rows.length, util: 0 }
  for (const { token } of rows) {
    if (getBorderTokenFilterCategory(token) === 'util') counts.util++
  }
  return counts
}

/** Figma text variable order (Theme → form → text / util). */
const TEXT_FIGMA_TOKEN_ORDER = [
  'arvo-color-t-primary',
  'arvo-color-t-secondary',
  'arvo-color-t-tertiary',
  'arvo-color-t-placeholder',
  'arvo-color-t-theme',
  'arvo-color-t-theme-hover',
  'arvo-color-t-hover',
  'arvo-color-t-theme-active',
  'arvo-color-t-active',
  'arvo-color-t-active-inverse',
  'arvo-color-t-inverse',
  'arvo-color-t-white-static',
  'arvo-color-t-black-static',
  'arvo-color-t-disabled',
  'arvo-color-t-readonly',
  'arvo-color-t-positive',
  'arvo-color-t-negative',
  'arvo-color-t-warning',
  'arvo-color-t-info-light',
  'arvo-color-t-info-dark',
  'arvo-color-t-neutral',
  'arvo-color-t-form-label',
  'arvo-color-t-form-value',
  'arvo-color-t-util-purple',
  'arvo-color-t-util-pink',
  'arvo-color-t-util-glacier',
  'arvo-color-t-util-amber',
  'arvo-color-t-util-greenish',
  'arvo-color-t-util-bluish',
]

// Text tokens — use "A" for color swatch. Map to global tokens.
const SEMANTIC_TEXT_ROWS = [
  { token: 'arvo-color-t-primary', lightGlobal: 'arvo-global-black', darkGlobal: 'arvo-global-gray-02', useCase: 'Primary text color.' },
  { token: 'arvo-color-t-secondary', lightGlobal: 'arvo-global-gray-08', darkGlobal: 'arvo-global-gray-03', useCase: 'Secondary text, captions.' },
  { token: 'arvo-color-t-tertiary', lightGlobal: 'arvo-global-gray-07', darkGlobal: 'arvo-global-gray-04', useCase: 'Tertiary text.' },
  { token: 'arvo-color-t-placeholder', lightGlobal: 'arvo-global-gray-06', darkGlobal: 'arvo-global-gray-04', useCase: 'Placeholder text.' },
  { token: 'arvo-color-t-theme', lightGlobal: { o9theme: 'arvo-global-o9theme-10', skyblue: 'arvo-global-skyblue-09', onyxblack: 'arvo-global-onyxblack-10', forestgreen: 'arvo-global-forestgreen-09', midnightindigo: 'arvo-global-midnightindigo-10' }, darkGlobal: 'arvo-global-dark-07', useCase: 'Theme text color in enabled/default state.' },
  { token: 'arvo-color-t-theme-hover', lightGlobal: { o9theme: 'arvo-global-o9theme-10', skyblue: 'arvo-global-skyblue-10', onyxblack: 'arvo-global-onyxblack-10', forestgreen: 'arvo-global-forestgreen-10', midnightindigo: 'arvo-global-midnightindigo-10' }, darkGlobal: 'arvo-global-dark-07', useCase: 'Hover/focus text for tertiary, secondary buttons, filter chips, dropdown options.' },
  { token: 'arvo-color-t-hover', lightGlobal: 'arvo-global-black', darkGlobal: 'arvo-global-white', useCase: 'Neutral hover color.' },
  { token: 'arvo-color-t-theme-active', lightGlobal: { o9theme: 'arvo-global-o9theme-10', skyblue: 'arvo-global-skyblue-10', onyxblack: 'arvo-global-onyxblack-10', forestgreen: 'arvo-global-forestgreen-10', midnightindigo: 'arvo-global-midnightindigo-10' }, darkGlobal: 'arvo-global-dark-07', useCase: 'Active state text on white, gray, or theme-active-2 bg.' },
  { token: 'arvo-color-t-active', lightGlobal: 'arvo-global-black', darkGlobal: 'arvo-global-white', useCase: 'Neutral active color.' },
  { token: 'arvo-color-t-active-inverse', lightGlobal: 'arvo-global-white', darkGlobal: 'arvo-global-black', useCase: 'Primary button active state text color.' },
  { token: 'arvo-color-t-inverse', lightGlobal: 'arvo-global-white', darkGlobal: 'arvo-global-black', useCase: 'Inverse text on colored backgrounds.' },
  { token: 'arvo-color-t-white-static', lightGlobal: 'arvo-global-white', darkGlobal: 'arvo-global-white', useCase: 'Static white text.' },
  { token: 'arvo-color-t-black-static', lightGlobal: 'arvo-global-gray-09', darkGlobal: 'arvo-global-gray-09', useCase: 'Tooltip text remains same in light and dark mode.' },
  { token: 'arvo-color-t-disabled', lightGlobal: 'arvo-global-gray-04', darkGlobal: 'arvo-global-gray-06', useCase: 'Disabled text color.' },
  { token: 'arvo-color-t-readonly', lightGlobal: 'arvo-global-gray-08', darkGlobal: 'arvo-global-gray-03', useCase: 'Read-only field text.' },
  { token: 'arvo-color-t-positive', lightGlobal: 'arvo-global-greenish-10', darkGlobal: 'arvo-global-greenish-09', useCase: 'Positive/success text.' },
  { token: 'arvo-color-t-negative', lightGlobal: 'arvo-global-redish-09', darkGlobal: 'arvo-global-redish-06', useCase: 'Error text color.' },
  { token: 'arvo-color-t-warning', lightGlobal: 'arvo-global-orangish-10', darkGlobal: 'arvo-global-orangish-09', useCase: 'Warning text.' },
  { token: 'arvo-color-t-info-light', lightGlobal: 'arvo-global-bluish-09', darkGlobal: 'arvo-global-bluish-07', useCase: 'Info text (light).' },
  { token: 'arvo-color-t-info-dark', lightGlobal: 'arvo-global-bluish-10', darkGlobal: 'arvo-global-bluish-08', useCase: 'Info text (dark).' },
  { token: 'arvo-color-t-neutral', lightGlobal: 'arvo-global-black', darkGlobal: 'arvo-global-white', useCase: 'Neutral text.' },
  { token: 'arvo-color-t-form-label', lightGlobal: 'arvo-global-gray-08', darkGlobal: 'arvo-global-gray-02', useCase: 'Form label text.' },
  { token: 'arvo-color-t-form-value', lightGlobal: 'arvo-global-gray-09', darkGlobal: 'arvo-global-gray-01', useCase: 'Form value text.' },
  { token: 'arvo-color-t-util-purple', lightGlobal: 'arvo-global-purple-10', darkGlobal: 'arvo-global-purple-09', useCase: 'Utility purple text (Figma: purple).' },
  { token: 'arvo-color-t-util-pink', lightGlobal: 'arvo-global-pink-10', darkGlobal: 'arvo-global-pink-08', useCase: 'Utility pink text (Figma: pink).' },
  { token: 'arvo-color-t-util-glacier', lightGlobal: 'arvo-global-glacier-10', darkGlobal: 'arvo-global-glacier-08', useCase: 'Utility glacier text (Figma: glacier).' },
  { token: 'arvo-color-t-util-amber', lightGlobal: 'arvo-global-amber-10', darkGlobal: 'arvo-global-amber-08', useCase: 'Utility amber text (Figma: amber).' },
  { token: 'arvo-color-t-util-greenish', lightGlobal: 'arvo-global-greenish-10', darkGlobal: 'arvo-global-greenish-08', useCase: 'Utility greenish text (Figma: greenish).' },
  { token: 'arvo-color-t-util-bluish', lightGlobal: 'arvo-global-bluish-10', darkGlobal: 'arvo-global-bluish-07', useCase: 'Utility bluish text (Figma: bluish).' },
]

export const SEMANTIC_TEXT = orderSurfaceTokens(SEMANTIC_TEXT_ROWS, TEXT_FIGMA_TOKEN_ORDER, [])

/** Quick-filter groups for Text semantic tokens (Colors page). */
export const TEXT_QUICK_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'util', label: 'Utility' },
]

/** Classify a text token for quick filters. */
export function getTextTokenFilterCategory(token) {
  if (token.includes('-util-')) return 'util'
  return 'core'
}

/** Count text tokens per quick-filter id (includes `all`). */
export function countTextTokensByQuickFilter(rows = SEMANTIC_TEXT) {
  const counts = { all: rows.length, util: 0 }
  for (const { token } of rows) {
    if (getTextTokenFilterCategory(token) === 'util') counts.util++
  }
  return counts
}

/** Figma icon variable order (Theme → icon / util → nova). */
const ICON_FIGMA_TOKEN_ORDER = [
  'arvo-color-i-primary',
  'arvo-color-i-secondary',
  'arvo-color-i-tertiary',
  'arvo-color-i-placeholder',
  'arvo-color-i-theme',
  'arvo-color-i-theme-hover',
  'arvo-color-i-hover',
  'arvo-color-i-theme-active',
  'arvo-color-i-active',
  'arvo-color-i-active-inverse',
  'arvo-color-i-inverse',
  'arvo-color-i-white-static',
  'arvo-color-i-black-static',
  'arvo-color-i-disabled',
  'arvo-color-i-readonly',
  'arvo-color-i-positive',
  'arvo-color-i-negative',
  'arvo-color-i-negative-static',
  'arvo-color-i-warning',
  'arvo-color-i-warning-static',
  'arvo-color-i-info-light',
  'arvo-color-i-info-dark',
  'arvo-color-i-neutral',
  'arvo-color-i-util-purple',
  'arvo-color-i-util-pink',
  'arvo-color-i-util-glacier',
  'arvo-color-i-util-amber',
  'arvo-color-i-util-greenish',
  'arvo-color-i-util-bluish',
  'arvo-color-i-nova-static',
]

// Icon tokens — use o9con icon for color swatch. Same mapping logic as text.
const SEMANTIC_ICON_ROWS = [
  { token: 'arvo-color-i-primary', lightGlobal: 'arvo-global-black', darkGlobal: 'arvo-global-gray-02', useCase: 'Primary icon color.' },
  { token: 'arvo-color-i-secondary', lightGlobal: 'arvo-global-gray-08', darkGlobal: 'arvo-global-gray-03', useCase: 'Secondary icon color.' },
  { token: 'arvo-color-i-tertiary', lightGlobal: 'arvo-global-gray-07', darkGlobal: 'arvo-global-gray-04', useCase: 'Tertiary icon color.' },
  { token: 'arvo-color-i-placeholder', lightGlobal: 'arvo-global-gray-06', darkGlobal: 'arvo-global-gray-04', useCase: 'Placeholder icon color.' },
  { token: 'arvo-color-i-theme', lightGlobal: { o9theme: 'arvo-global-o9theme-10', skyblue: 'arvo-global-skyblue-09', onyxblack: 'arvo-global-onyxblack-10', forestgreen: 'arvo-global-forestgreen-09', midnightindigo: 'arvo-global-midnightindigo-10' }, darkGlobal: 'arvo-global-dark-07', useCase: 'Theme icon color.' },
  { token: 'arvo-color-i-theme-hover', lightGlobal: { o9theme: 'arvo-global-o9theme-10', skyblue: 'arvo-global-skyblue-10', onyxblack: 'arvo-global-onyxblack-10', forestgreen: 'arvo-global-forestgreen-10', midnightindigo: 'arvo-global-midnightindigo-10' }, darkGlobal: 'arvo-global-dark-07', useCase: 'Hover/focus icon color for buttons, chips, dropdowns.' },
  { token: 'arvo-color-i-hover', lightGlobal: 'arvo-global-black', darkGlobal: 'arvo-global-white', useCase: 'Neutral hover color.' },
  { token: 'arvo-color-i-theme-active', lightGlobal: { o9theme: 'arvo-global-o9theme-10', skyblue: 'arvo-global-skyblue-10', onyxblack: 'arvo-global-onyxblack-10', forestgreen: 'arvo-global-forestgreen-10', midnightindigo: 'arvo-global-midnightindigo-10' }, darkGlobal: 'arvo-global-dark-07', useCase: 'Active state icon on white, gray, or theme-active-2 bg.' },
  { token: 'arvo-color-i-active', lightGlobal: 'arvo-global-black', darkGlobal: 'arvo-global-white', useCase: 'Neutral active color.' },
  { token: 'arvo-color-i-active-inverse', lightGlobal: 'arvo-global-white', darkGlobal: 'arvo-global-black', useCase: 'Primary button active state icon color.' },
  { token: 'arvo-color-i-inverse', lightGlobal: 'arvo-global-white', darkGlobal: 'arvo-global-black', useCase: 'Inverse icon on colored backgrounds.' },
  { token: 'arvo-color-i-white-static', lightGlobal: 'arvo-global-white', darkGlobal: 'arvo-global-white', useCase: 'Static white icon.' },
  { token: 'arvo-color-i-black-static', lightGlobal: 'arvo-global-gray-09', darkGlobal: 'arvo-global-gray-09', useCase: 'Tooltip icon remains same in light and dark mode.' },
  { token: 'arvo-color-i-disabled', lightGlobal: 'arvo-global-gray-04', darkGlobal: 'arvo-global-gray-06', useCase: 'Disabled icon color.' },
  { token: 'arvo-color-i-readonly', lightGlobal: 'arvo-global-gray-08', darkGlobal: 'arvo-global-gray-03', useCase: 'Read-only icon color.' },
  { token: 'arvo-color-i-positive', lightGlobal: 'arvo-global-greenish-10', darkGlobal: 'arvo-global-greenish-09', useCase: 'Positive/success icon.' },
  { token: 'arvo-color-i-negative', lightGlobal: 'arvo-global-redish-09', darkGlobal: 'arvo-global-redish-06', useCase: 'Error icon color.' },
  { token: 'arvo-color-i-negative-static', lightGlobal: 'arvo-global-redish-08', darkGlobal: 'arvo-global-redish-08', useCase: 'Indicator shape color.' },
  { token: 'arvo-color-i-warning', lightGlobal: 'arvo-global-orangish-10', darkGlobal: 'arvo-global-orangish-09', useCase: 'Warning icon.' },
  { token: 'arvo-color-i-warning-static', lightGlobal: 'arvo-global-orangish-08', darkGlobal: 'arvo-global-orangish-08', useCase: 'Static warning icon (unsaved changes indicator).' },
  { token: 'arvo-color-i-info-light', lightGlobal: 'arvo-global-bluish-09', darkGlobal: 'arvo-global-bluish-07', useCase: 'Info icon (light).' },
  { token: 'arvo-color-i-info-dark', lightGlobal: 'arvo-global-bluish-10', darkGlobal: 'arvo-global-bluish-08', useCase: 'Info icon (dark).' },
  { token: 'arvo-color-i-neutral', lightGlobal: 'arvo-global-black', darkGlobal: 'arvo-global-white', useCase: 'Neutral icon.' },
  { token: 'arvo-color-i-util-purple', lightGlobal: 'arvo-global-purple-10', darkGlobal: 'arvo-global-purple-09', useCase: 'Utility purple icon (Figma: purple).' },
  { token: 'arvo-color-i-util-pink', lightGlobal: 'arvo-global-pink-10', darkGlobal: 'arvo-global-pink-08', useCase: 'Utility pink icon (Figma: pink).' },
  { token: 'arvo-color-i-util-glacier', lightGlobal: 'arvo-global-glacier-10', darkGlobal: 'arvo-global-glacier-08', useCase: 'Utility glacier icon (Figma: glacier).' },
  { token: 'arvo-color-i-util-amber', lightGlobal: 'arvo-global-amber-10', darkGlobal: 'arvo-global-amber-08', useCase: 'Utility amber icon (Figma: amber).' },
  { token: 'arvo-color-i-util-greenish', lightGlobal: 'arvo-global-greenish-10', darkGlobal: 'arvo-global-greenish-08', useCase: 'Utility greenish icon (Figma: greenish).' },
  { token: 'arvo-color-i-util-bluish', lightGlobal: 'arvo-global-bluish-10', darkGlobal: 'arvo-global-bluish-07', useCase: 'Utility bluish icon (Figma: bluish).' },
  {
    token: 'arvo-color-i-nova-static',
    lightGradient: NOVA_SURFACE_GRADIENT_PREVIEW,
    darkGradient: NOVA_SURFACE_GRADIENT_PREVIEW,
    lightGlobalLabel: 'arvo-global-nova-start → arvo-global-nova-end',
    darkGlobalLabel: 'arvo-global-nova-start → arvo-global-nova-end',
    useCase: 'Nova AI brand icon gradient (same as surface nova-static).',
  },
]

export const SEMANTIC_ICON = orderSurfaceTokens(SEMANTIC_ICON_ROWS, ICON_FIGMA_TOKEN_ORDER, [])

/** Quick-filter groups for Icon semantic tokens (Colors page). */
export const ICON_QUICK_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'util', label: 'Utility' },
]

/** Classify an icon token for quick filters. */
export function getIconTokenFilterCategory(token) {
  if (token.includes('-util-')) return 'util'
  return 'core'
}

/** Count icon tokens per quick-filter id (includes `all`). */
export function countIconTokensByQuickFilter(rows = SEMANTIC_ICON) {
  const counts = { all: rows.length, util: 0 }
  for (const { token } of rows) {
    if (getIconTokenFilterCategory(token) === 'util') counts.util++
  }
  return counts
}
