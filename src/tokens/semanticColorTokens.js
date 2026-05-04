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

/** Resolve semantic token to hex. Live dependency on global tokens. */
export function resolveSemanticToHex(row, lightTheme, isDark) {
  const globalToken = isDark ? row.darkGlobal : (typeof row.lightGlobal === 'string' ? row.lightGlobal : row.lightGlobal[lightTheme])
  return GLOBAL_TOKEN_HEX[globalToken] ?? '#808080'
}

/** Resolve semantic token to global token name (for display). */
export function resolveSemanticToGlobalName(row, lightTheme, isDark) {
  return isDark ? row.darkGlobal : (typeof row.lightGlobal === 'string' ? row.lightGlobal : row.lightGlobal[lightTheme])
}

export const SEMANTIC_SURFACE = [
  // Base & Layer tokens (same across all light themes)
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
  // Theme-specific
  { token: 'arvo-color-s-theme', lightGlobal: { o9theme: 'arvo-global-o9theme-10', skyblue: 'arvo-global-skyblue-09', onyxblack: 'arvo-global-onyxblack-10', forestgreen: 'arvo-global-forestgreen-09', midnightindigo: 'arvo-global-midnightindigo-10' }, darkGlobal: 'arvo-global-dark-07', useCase: 'Primary buttons, checkboxes, etc.' },
  { token: 'arvo-color-s-theme-2', lightGlobal: { o9theme: 'arvo-global-o9theme-10', skyblue: 'arvo-global-skyblue-09', onyxblack: 'arvo-global-onyxblack-10', forestgreen: 'arvo-global-forestgreen-09', midnightindigo: 'arvo-global-midnightindigo-10' }, darkGlobal: 'arvo-global-dark-12', useCase: 'Toolbar.' },
  // Brand & Hover
  { token: 'arvo-color-s-brand', lightGlobal: 'arvo-global-gray-01', darkGlobal: 'arvo-global-gray-09', useCase: 'Left sidebar navigation background.' },
  { token: 'arvo-color-s-theme-hover-1', lightGlobal: { o9theme: 'arvo-global-o9theme-09', skyblue: 'arvo-global-skyblue-09', onyxblack: 'arvo-global-onyxblack-09', forestgreen: 'arvo-global-forestgreen-10', midnightindigo: 'arvo-global-midnightindigo-09' }, darkGlobal: 'arvo-global-dark-03', useCase: 'Hover state for Primary btn' },
  { token: 'arvo-color-s-theme-hover-2', lightGlobal: { o9theme: 'arvo-global-o9theme-08', skyblue: 'arvo-global-skyblue-08', onyxblack: 'arvo-global-onyxblack-08', forestgreen: 'arvo-global-forestgreen-08', midnightindigo: 'arvo-global-midnightindigo-08' }, darkGlobal: 'arvo-global-dark-13', useCase: 'Hover state for secondary, tertiary and outline' },
  { token: 'arvo-color-s-theme-hover-3', lightGlobal: { o9theme: 'arvo-global-o9theme-07', skyblue: 'arvo-global-skyblue-07', onyxblack: 'arvo-global-onyxblack-07', forestgreen: 'arvo-global-forestgreen-07', midnightindigo: 'arvo-global-midnightindigo-07' }, darkGlobal: 'arvo-global-dark-12', useCase: 'Secondary tab hover state' },
  { token: 'arvo-color-s-theme-hover-4', lightGlobal: { o9theme: 'arvo-global-o9theme-07', skyblue: 'arvo-global-skyblue-07', onyxblack: 'arvo-global-onyxblack-07', forestgreen: 'arvo-global-forestgreen-07', midnightindigo: 'arvo-global-midnightindigo-07' }, darkGlobal: 'arvo-global-dark-09', useCase: 'Hover state for dropdowns, notifications hover' },
  { token: 'arvo-color-s-hover', lightGlobal: 'arvo-global-gray-04', darkGlobal: 'arvo-global-dark-05', useCase: 'Hover color for scroll handle.' },
  // Active
  { token: 'arvo-color-s-theme-active-1', lightGlobal: { o9theme: 'arvo-global-o9theme-10', skyblue: 'arvo-global-skyblue-09', onyxblack: 'arvo-global-onyxblack-10', forestgreen: 'arvo-global-forestgreen-09', midnightindigo: 'arvo-global-midnightindigo-09' }, darkGlobal: 'arvo-global-dark-07', useCase: 'Checkbox, radio active state' },
  { token: 'arvo-color-s-theme-active-2', lightGlobal: { o9theme: 'arvo-global-o9theme-07', skyblue: 'arvo-global-skyblue-07', onyxblack: 'arvo-global-onyxblack-07', forestgreen: 'arvo-global-forestgreen-07', midnightindigo: 'arvo-global-midnightindigo-07' }, darkGlobal: 'arvo-global-dark-12', useCase: 'Active state for secondary, tertiary, outline btn' },
  { token: 'arvo-color-s-theme-active-3', lightGlobal: { o9theme: 'arvo-global-o9theme-06', skyblue: 'arvo-global-skyblue-06', onyxblack: 'arvo-global-onyxblack-06', forestgreen: 'arvo-global-forestgreen-06', midnightindigo: 'arvo-global-midnightindigo-06' }, darkGlobal: 'arvo-global-o9theme-09', useCase: 'Active state for secondary Tab' },
  { token: 'arvo-color-s-theme-active-4', lightGlobal: { o9theme: 'arvo-global-o9theme-06', skyblue: 'arvo-global-skyblue-06', onyxblack: 'arvo-global-onyxblack-06', forestgreen: 'arvo-global-forestgreen-06', midnightindigo: 'arvo-global-midnightindigo-06' }, darkGlobal: 'arvo-global-gray-08', useCase: 'Active state for Dropdown' },
  { token: 'arvo-color-s-theme-active-5', lightGlobal: { o9theme: 'arvo-global-o9theme-11', skyblue: 'arvo-global-skyblue-11', onyxblack: 'arvo-global-onyxblack-11', forestgreen: 'arvo-global-forestgreen-11', midnightindigo: 'arvo-global-midnightindigo-11' }, darkGlobal: 'arvo-global-dark-06', useCase: 'Active/pressed state for Primary Button' },
  { token: 'arvo-color-s-active', lightGlobal: 'arvo-global-white', darkGlobal: 'arvo-global-black', useCase: 'Left sidebar - icon button active state' },
  // Disabled, negative, neutral, inverse
  { token: 'arvo-color-s-disabled', lightGlobal: 'arvo-global-gray-02', darkGlobal: 'arvo-global-gray-08', useCase: 'Background for disabled elements (buttons, checkboxes, chips).' },
  { token: 'arvo-color-s-readonly', lightGlobal: 'arvo-global-gray-01', darkGlobal: 'arvo-global-gray-08', useCase: 'Read-only field background.' },
  { token: 'arvo-color-s-negative-light', lightGlobal: 'arvo-global-redish-09', darkGlobal: 'arvo-global-redish-06', useCase: 'Checkbox background in error state.' },
  { token: 'arvo-color-s-negative', lightGlobal: 'arvo-global-redish-09', darkGlobal: 'arvo-global-redish-06', useCase: 'Danger Button primary color.' },
  { token: 'arvo-color-s-negative-hover', lightGlobal: 'arvo-global-redish-10', darkGlobal: 'arvo-global-redish-09', useCase: 'Danger button hover; Checkbox/radio hover.' },
  { token: 'arvo-color-s-negative-active', lightGlobal: 'arvo-global-redish-11', darkGlobal: 'arvo-global-redish-10', useCase: 'Danger button active state color.' },
  { token: 'arvo-color-s-negative-static', lightGlobal: 'arvo-global-redish-08', darkGlobal: 'arvo-global-redish-08', useCase: 'Counter background color.' },
  { token: 'arvo-color-s-neutral', lightGlobal: 'arvo-global-black', darkGlobal: 'arvo-global-white', useCase: 'Neutral counters/badge background color.' },
  { token: 'arvo-color-s-inverse', lightGlobal: 'arvo-global-black', darkGlobal: 'arvo-global-white', useCase: 'Inverse background (e.g., Tooltips).' },
  { token: 'arvo-color-s-direct', lightGlobal: 'arvo-global-white', darkGlobal: 'arvo-global-black', useCase: 'Direct background (Pivot tables, Grid cells).' },
  { token: 'arvo-color-s-on-inverse', lightGlobal: 'arvo-global-gray-08', darkGlobal: 'arvo-global-gray-01', useCase: 'Shortcut info text/icons on Tooltip.' },
  // Pulse, static, overlay, shadow
  { token: 'arvo-color-s-pulse-light', lightGlobal: 'arvo-global-gray-01', darkGlobal: 'arvo-global-gray-09', useCase: 'Skeleton loader (light - starting color).' },
  { token: 'arvo-color-s-pulse-dark', lightGlobal: 'arvo-global-gray-02', darkGlobal: 'arvo-global-gray-06', useCase: 'Skeleton loader (dark - ending color).' },
  { token: 'arvo-color-s-white-static', lightGlobal: 'arvo-global-white', darkGlobal: 'arvo-global-white', useCase: 'Color picker - light mode preview.' },
  { token: 'arvo-color-s-black-static', lightGlobal: 'arvo-global-gray-10', darkGlobal: 'arvo-global-dark-gray-10', useCase: 'Color picker - dark mode preview.' },
  { token: 'arvo-color-s-overlay-static', lightGlobal: 'arvo-global-opacity-1', darkGlobal: 'arvo-global-opacity-1', useCase: 'Overlay for popups/modals.' },
  { token: 'arvo-color-s-shadow-static-1', lightGlobal: 'arvo-global-opacity-2', darkGlobal: 'arvo-global-opacity-2', useCase: 'Shadow for popover, dropdown, window, tooltip, toast.' },
  { token: 'arvo-color-s-shadow-static-2', lightGlobal: 'arvo-global-opacity-3', darkGlobal: 'arvo-global-opacity-2', useCase: 'Shadow for left sidebar.' },
  { token: 'arvo-color-s-warning-static', lightGlobal: 'arvo-global-orangish-07', darkGlobal: 'arvo-global-orangish-07', useCase: 'Unnamed indicator.' },
  { token: 'arvo-color-s-currenttime', lightGlobal: 'arvo-global-orangish-07', darkGlobal: 'arvo-global-orangish-10', useCase: 'Current time bucket color.' },
  { token: 'arvo-color-s-ancestorfrozen', lightGlobal: 'arvo-global-green-07', darkGlobal: 'arvo-global-green-10', useCase: 'Ancestor frozen cell.' },
  { token: 'arvo-color-s-frozen', lightGlobal: 'arvo-global-green-06', darkGlobal: 'arvo-global-green-08', useCase: 'Main frozen cell color.' },
  { token: 'arvo-color-s-frozenleaf', lightGlobal: 'arvo-global-green-05', darkGlobal: 'arvo-global-green-09', useCase: 'Leaf frozen cell in pivot.' },
]

// Border tokens — use border: 2px solid var(--token) or 3px. focus-inverse and disabled sit on surface-theme bg.
export const SEMANTIC_BORDER = [
  { token: 'arvo-color-b-divider', lightGlobal: 'arvo-global-gray-02', darkGlobal: 'arvo-global-gray-08', useCase: 'Actions separator, chips border, tile border, button group, counter, pivot gridlines, chart gridlines.' },
  { token: 'arvo-color-b-base', lightGlobal: 'arvo-global-gray-01', darkGlobal: 'arvo-global-gray-09', useCase: 'Match border with surface base (dim separator in H Filter).' },
  { token: 'arvo-color-b-subtle', lightGlobal: 'arvo-global-gray-01', darkGlobal: 'arvo-global-gray-10', useCase: 'Dropdown divider on gray bg.' },
  { token: 'arvo-color-b-dark', lightGlobal: 'arvo-global-gray-04', darkGlobal: 'arvo-global-gray-06', useCase: 'Past time bucket color on gray divider.' },
  { token: 'arvo-color-b-separator', lightGlobal: 'arvo-global-gray-02', darkGlobal: 'arvo-global-gray-07', useCase: 'Vertical divider inside form fields (e.g. minus/plus in input group).' },
  { token: 'arvo-color-b-inverse', lightGlobal: 'arvo-global-black', darkGlobal: 'arvo-global-white', useCase: 'Inverse border.' },
  { token: 'arvo-color-b-theme', lightGlobal: { o9theme: 'arvo-global-o9theme-10', skyblue: 'arvo-global-skyblue-09', onyxblack: 'arvo-global-onyxblack-10', forestgreen: 'arvo-global-forestgreen-09', midnightindigo: 'arvo-global-midnightindigo-10' }, darkGlobal: 'arvo-global-dark-07', useCase: 'Theme border (primary buttons, links).' },
  { token: 'arvo-color-b-hover', lightGlobal: 'arvo-global-gray-03', darkGlobal: 'arvo-global-gray-07', useCase: 'Not active tab hover state.' },
  { token: 'arvo-color-b-theme-hover', lightGlobal: { o9theme: 'arvo-global-o9theme-10', skyblue: 'arvo-global-skyblue-09', onyxblack: 'arvo-global-onyxblack-10', forestgreen: 'arvo-global-forestgreen-09', midnightindigo: 'arvo-global-midnightindigo-10' }, darkGlobal: 'arvo-global-dark-07', useCase: 'Tab border hover color in default state.' },
  { token: 'arvo-color-b-theme-active', lightGlobal: { o9theme: 'arvo-global-o9theme-10', skyblue: 'arvo-global-skyblue-09', onyxblack: 'arvo-global-onyxblack-10', forestgreen: 'arvo-global-forestgreen-09', midnightindigo: 'arvo-global-midnightindigo-10' }, darkGlobal: 'arvo-global-dark-07', useCase: 'Tab active state hover color.' },
  { token: 'arvo-color-b-active-static', lightGlobal: 'arvo-global-gray-05', darkGlobal: 'arvo-global-gray-05', useCase: 'Active state for interactive elements (e.g. title view in filters).' },
  { token: 'arvo-color-b-theme-hover-2', lightGlobal: { o9theme: 'arvo-global-o9theme-09', skyblue: 'arvo-global-skyblue-10', onyxblack: 'arvo-global-onyxblack-10', forestgreen: 'arvo-global-forestgreen-10', midnightindigo: 'arvo-global-midnightindigo-09' }, darkGlobal: 'arvo-global-dark-08', useCase: 'Active/selected state of chips, cards, or active tabs.' },
  { token: 'arvo-color-b-negative', lightGlobal: 'arvo-global-redish-09', darkGlobal: 'arvo-global-redish-06', useCase: 'Input field error border on hover/focus.' },
  { token: 'arvo-color-b-warning', lightGlobal: 'arvo-global-orangish-10', darkGlobal: 'arvo-global-orangish-09', useCase: 'Warning border.' },
  { token: 'arvo-color-b-positive', lightGlobal: 'arvo-global-greenish-10', darkGlobal: 'arvo-global-greenish-09', useCase: 'Positive/success border.' },
  { token: 'arvo-color-b-info-light', lightGlobal: 'arvo-global-bluish-09', darkGlobal: 'arvo-global-bluish-08', useCase: 'Info border.' },
  { token: 'arvo-color-b-neutral', lightGlobal: 'arvo-global-black', darkGlobal: 'arvo-global-white', useCase: 'Neutral border.' },
  { token: 'arvo-color-b-theme-focus', lightGlobal: { o9theme: 'arvo-global-o9theme-10', skyblue: 'arvo-global-skyblue-09', onyxblack: 'arvo-global-onyxblack-10', forestgreen: 'arvo-global-forestgreen-09', midnightindigo: 'arvo-global-midnightindigo-10' }, darkGlobal: 'arvo-global-dark-07', useCase: 'Theme focus border.' },
  { token: 'arvo-color-b-form', lightGlobal: 'arvo-global-gray-11', darkGlobal: 'arvo-global-gray-05', useCase: 'Form field border.' },
  { token: 'arvo-color-b-disabled', lightGlobal: 'arvo-global-gray-03', darkGlobal: 'arvo-global-gray-05', useCase: 'Disabled border. Use with surface-theme background (sits on top of that).' },
  { token: 'arvo-color-b-readonly', lightGlobal: 'arvo-global-gray-05', darkGlobal: 'arvo-global-gray-05', useCase: 'Read-only field border (dashed).', borderStyle: 'dashed' },
  { token: 'arvo-color-b-utility-purple', lightGlobal: 'arvo-global-purple-dark', darkGlobal: 'arvo-global-purple-light', useCase: 'Utility purple border.' },
  { token: 'arvo-color-b-focus-inverse', lightGlobal: 'arvo-global-white', darkGlobal: 'arvo-global-black', useCase: 'Focus inverse border. Use with surface-theme background (sits on top of that).' },
]

// Text tokens — use "A" for color swatch. Map to global tokens.
export const SEMANTIC_TEXT = [
  { token: 'arvo-color-t-primary', lightGlobal: 'arvo-global-black', darkGlobal: 'arvo-global-gray-02', useCase: 'Primary text color.' },
  { token: 'arvo-color-t-secondary', lightGlobal: 'arvo-global-gray-08', darkGlobal: 'arvo-global-gray-03', useCase: 'Secondary text, captions.' },
  { token: 'arvo-color-t-tertiary', lightGlobal: 'arvo-global-gray-07', darkGlobal: 'arvo-global-gray-04', useCase: 'Tertiary text.' },
  { token: 'arvo-color-t-placeholder', lightGlobal: 'arvo-global-gray-06', darkGlobal: 'arvo-global-gray-04', useCase: 'Placeholder text.' },
  { token: 'arvo-color-t-active', lightGlobal: 'arvo-global-black', darkGlobal: 'arvo-global-white', useCase: 'Neutral active color.' },
  { token: 'arvo-color-t-theme', lightGlobal: { o9theme: 'arvo-global-o9theme-10', skyblue: 'arvo-global-skyblue-09', onyxblack: 'arvo-global-onyxblack-10', forestgreen: 'arvo-global-forestgreen-09', midnightindigo: 'arvo-global-midnightindigo-10' }, darkGlobal: 'arvo-global-dark-07', useCase: 'Theme text color in enabled/default state.' },
  { token: 'arvo-color-t-theme-hover', lightGlobal: { o9theme: 'arvo-global-o9theme-10', skyblue: 'arvo-global-skyblue-10', onyxblack: 'arvo-global-onyxblack-10', forestgreen: 'arvo-global-forestgreen-10', midnightindigo: 'arvo-global-midnightindigo-10' }, darkGlobal: 'arvo-global-dark-07', useCase: 'Hover/focus text for tertiary, secondary buttons, filter chips, dropdown options.' },
  { token: 'arvo-color-t-theme-active', lightGlobal: { o9theme: 'arvo-global-o9theme-10', skyblue: 'arvo-global-skyblue-10', onyxblack: 'arvo-global-onyxblack-10', forestgreen: 'arvo-global-forestgreen-10', midnightindigo: 'arvo-global-midnightindigo-10' }, darkGlobal: 'arvo-global-dark-07', useCase: 'Active state text on white, gray, or theme-active-2 bg.' },
  { token: 'arvo-color-t-hover', lightGlobal: 'arvo-global-black', darkGlobal: 'arvo-global-white', useCase: 'Neutral hover color.' },
  { token: 'arvo-color-t-inverse', lightGlobal: 'arvo-global-white', darkGlobal: 'arvo-global-black', useCase: 'Inverse text on colored backgrounds.' },
  { token: 'arvo-color-t-active-inverse', lightGlobal: 'arvo-global-white', darkGlobal: 'arvo-global-black', useCase: 'Primary button active state text color.' },
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
  { token: 'arvo-color-t-utility-purple', lightGlobal: 'arvo-global-purple-dark', darkGlobal: 'arvo-global-purple-light', useCase: 'Utility purple text.' },
]

// Icon tokens — use o9con icon for color swatch. Same mapping logic as text.
export const SEMANTIC_ICON = [
  { token: 'arvo-color-i-primary', lightGlobal: 'arvo-global-black', darkGlobal: 'arvo-global-gray-02', useCase: 'Primary icon color.' },
  { token: 'arvo-color-i-secondary', lightGlobal: 'arvo-global-gray-08', darkGlobal: 'arvo-global-gray-03', useCase: 'Secondary icon color.' },
  { token: 'arvo-color-i-tertiary', lightGlobal: 'arvo-global-gray-07', darkGlobal: 'arvo-global-gray-04', useCase: 'Tertiary icon color.' },
  { token: 'arvo-color-i-placeholder', lightGlobal: 'arvo-global-gray-06', darkGlobal: 'arvo-global-gray-04', useCase: 'Placeholder icon color.' },
  { token: 'arvo-color-i-active', lightGlobal: 'arvo-global-black', darkGlobal: 'arvo-global-white', useCase: 'Neutral active color.' },
  { token: 'arvo-color-i-theme', lightGlobal: { o9theme: 'arvo-global-o9theme-10', skyblue: 'arvo-global-skyblue-09', onyxblack: 'arvo-global-onyxblack-10', forestgreen: 'arvo-global-forestgreen-09', midnightindigo: 'arvo-global-midnightindigo-10' }, darkGlobal: 'arvo-global-dark-07', useCase: 'Theme icon color.' },
  { token: 'arvo-color-i-theme-hover', lightGlobal: { o9theme: 'arvo-global-o9theme-10', skyblue: 'arvo-global-skyblue-10', onyxblack: 'arvo-global-onyxblack-10', forestgreen: 'arvo-global-forestgreen-10', midnightindigo: 'arvo-global-midnightindigo-10' }, darkGlobal: 'arvo-global-dark-07', useCase: 'Hover/focus icon color for buttons, chips, dropdowns.' },
  { token: 'arvo-color-i-theme-active', lightGlobal: { o9theme: 'arvo-global-o9theme-10', skyblue: 'arvo-global-skyblue-10', onyxblack: 'arvo-global-onyxblack-10', forestgreen: 'arvo-global-forestgreen-10', midnightindigo: 'arvo-global-midnightindigo-10' }, darkGlobal: 'arvo-global-dark-07', useCase: 'Active state icon on white, gray, or theme-active-2 bg.' },
  { token: 'arvo-color-i-hover', lightGlobal: 'arvo-global-black', darkGlobal: 'arvo-global-white', useCase: 'Neutral hover color.' },
  { token: 'arvo-color-i-inverse', lightGlobal: 'arvo-global-white', darkGlobal: 'arvo-global-black', useCase: 'Inverse icon on colored backgrounds.' },
  { token: 'arvo-color-i-active-inverse', lightGlobal: 'arvo-global-white', darkGlobal: 'arvo-global-black', useCase: 'Primary button active state icon color.' },
  { token: 'arvo-color-i-white-static', lightGlobal: 'arvo-global-white', darkGlobal: 'arvo-global-white', useCase: 'Static white icon.' },
  { token: 'arvo-color-i-black-static', lightGlobal: 'arvo-global-gray-09', darkGlobal: 'arvo-global-gray-09', useCase: 'Tooltip icon remains same in light and dark mode.' },
  { token: 'arvo-color-i-disabled', lightGlobal: 'arvo-global-gray-04', darkGlobal: 'arvo-global-gray-06', useCase: 'Disabled icon color.' },
  { token: 'arvo-color-i-readonly', lightGlobal: 'arvo-global-gray-08', darkGlobal: 'arvo-global-gray-03', useCase: 'Read-only icon color.' },
  { token: 'arvo-color-i-positive', lightGlobal: 'arvo-global-greenish-10', darkGlobal: 'arvo-global-greenish-09', useCase: 'Positive/success icon.' },
  { token: 'arvo-color-i-negative', lightGlobal: 'arvo-global-redish-09', darkGlobal: 'arvo-global-redish-06', useCase: 'Error icon color.' },
  { token: 'arvo-color-i-negative-static', lightGlobal: 'arvo-global-redish-08', darkGlobal: 'arvo-global-redish-08', useCase: 'Indicator shape color.' },
  { token: 'arvo-color-i-warning', lightGlobal: 'arvo-global-orangish-10', darkGlobal: 'arvo-global-orangish-09', useCase: 'Warning icon.' },
  { token: 'arvo-color-i-warning-static', lightGlobal: 'arvo-global-redish-08', darkGlobal: 'arvo-global-redish-08', useCase: 'Indicator for unsaved changes.' },
  { token: 'arvo-color-i-info-light', lightGlobal: 'arvo-global-bluish-09', darkGlobal: 'arvo-global-bluish-07', useCase: 'Info icon (light).' },
  { token: 'arvo-color-i-info-dark', lightGlobal: 'arvo-global-bluish-10', darkGlobal: 'arvo-global-bluish-08', useCase: 'Info icon (dark).' },
  { token: 'arvo-color-i-neutral', lightGlobal: 'arvo-global-black', darkGlobal: 'arvo-global-white', useCase: 'Neutral icon.' },
  { token: 'arvo-color-i-utility-purple', lightGlobal: 'arvo-global-purple-dark', darkGlobal: 'arvo-global-purple-light', useCase: 'Utility purple icon.' },
]
