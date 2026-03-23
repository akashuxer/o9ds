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

/** Surface-theme token (o9ds-color-s-theme) for cell bg when displaying focus-inverse, disabled. */
const SURFACE_THEME_ROW = { lightGlobal: { o9theme: 'o9ds-global-o9theme-10', skyblue: 'o9ds-global-skyblue-09', onyxblack: 'o9ds-global-onyxblack-10', forestgreen: 'o9ds-global-forestgreen-09', midnightindigo: 'o9ds-global-midnightindigo-10' }, darkGlobal: 'o9ds-global-dark-07' }

/** Resolve surface-theme hex for focus-inverse / disabled cell backgrounds. */
export function resolveSurfaceThemeHex(lightTheme, isDark) {
  const globalToken = isDark ? SURFACE_THEME_ROW.darkGlobal : SURFACE_THEME_ROW.lightGlobal[lightTheme]
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
  { token: 'o9ds-color-s-base', lightGlobal: 'o9ds-global-gray-01', darkGlobal: 'o9ds-global-gray-09', useCase: 'Base background for body. Left sidebar, header, etc.' },
  { token: 'o9ds-color-s-layer-01', lightGlobal: 'o9ds-global-white', darkGlobal: 'o9ds-global-gray-10', useCase: 'App header, right sidebar, tile layout.' },
  { token: 'o9ds-color-s-layer-02', lightGlobal: 'o9ds-global-gray-01', darkGlobal: 'o9ds-global-gray-09', useCase: 'Background for Cards, AI prompts.' },
  { token: 'o9ds-color-s-layer-03', lightGlobal: 'o9ds-global-white', darkGlobal: 'o9ds-global-gray-07', useCase: 'Windows, dialogs, popovers.' },
  { token: 'o9ds-color-s-layer-04', lightGlobal: 'o9ds-global-gray-01', darkGlobal: 'o9ds-global-gray-08', useCase: 'Form inputs, searchbar, alerts, badges.' },
  { token: 'o9ds-color-s-layer-05', lightGlobal: 'o9ds-global-gray-01', darkGlobal: 'o9ds-global-gray-08', useCase: 'Secondary button default state.' },
  { token: 'o9ds-color-s-layer-06', lightGlobal: 'o9ds-global-white', darkGlobal: 'o9ds-global-gray-08', useCase: 'Background for dropdowns.' },
  { token: 'o9ds-color-s-layer-07', lightGlobal: 'o9ds-global-gray-03', darkGlobal: 'o9ds-global-gray-07', useCase: 'Scroll handles, toggle off track.' },
  { token: 'o9ds-color-s-placeholder', lightGlobal: 'o9ds-global-white', darkGlobal: 'o9ds-global-gray-03', useCase: 'Toggle switch handle.' },
  { token: 'o9ds-color-s-placeholder-2', lightGlobal: 'o9ds-global-gray-07', darkGlobal: 'o9ds-global-gray-07', useCase: 'Avatar group "+4" more indicator.' },
  // Theme-specific
  { token: 'o9ds-color-s-theme', lightGlobal: { o9theme: 'o9ds-global-o9theme-10', skyblue: 'o9ds-global-skyblue-09', onyxblack: 'o9ds-global-onyxblack-10', forestgreen: 'o9ds-global-forestgreen-09', midnightindigo: 'o9ds-global-midnightindigo-10' }, darkGlobal: 'o9ds-global-dark-07', useCase: 'Primary buttons, checkboxes, etc.' },
  { token: 'o9ds-color-s-theme-2', lightGlobal: { o9theme: 'o9ds-global-o9theme-10', skyblue: 'o9ds-global-skyblue-09', onyxblack: 'o9ds-global-onyxblack-10', forestgreen: 'o9ds-global-forestgreen-09', midnightindigo: 'o9ds-global-midnightindigo-10' }, darkGlobal: 'o9ds-global-dark-12', useCase: 'Toolbar.' },
  // Brand & Hover
  { token: 'o9ds-color-s-brand', lightGlobal: 'o9ds-global-gray-01', darkGlobal: 'o9ds-global-gray-09', useCase: 'Left sidebar navigation background.' },
  { token: 'o9ds-color-s-theme-hover-1', lightGlobal: { o9theme: 'o9ds-global-o9theme-09', skyblue: 'o9ds-global-skyblue-09', onyxblack: 'o9ds-global-onyxblack-09', forestgreen: 'o9ds-global-forestgreen-10', midnightindigo: 'o9ds-global-midnightindigo-09' }, darkGlobal: 'o9ds-global-dark-03', useCase: 'Hover state for Primary btn' },
  { token: 'o9ds-color-s-theme-hover-2', lightGlobal: { o9theme: 'o9ds-global-o9theme-08', skyblue: 'o9ds-global-skyblue-08', onyxblack: 'o9ds-global-onyxblack-08', forestgreen: 'o9ds-global-forestgreen-08', midnightindigo: 'o9ds-global-midnightindigo-08' }, darkGlobal: 'o9ds-global-dark-13', useCase: 'Hover state for secondary, tertiary and outline' },
  { token: 'o9ds-color-s-theme-hover-3', lightGlobal: { o9theme: 'o9ds-global-o9theme-07', skyblue: 'o9ds-global-skyblue-07', onyxblack: 'o9ds-global-onyxblack-07', forestgreen: 'o9ds-global-forestgreen-07', midnightindigo: 'o9ds-global-midnightindigo-07' }, darkGlobal: 'o9ds-global-dark-12', useCase: 'Secondary tab hover state' },
  { token: 'o9ds-color-s-theme-hover-4', lightGlobal: { o9theme: 'o9ds-global-o9theme-07', skyblue: 'o9ds-global-skyblue-07', onyxblack: 'o9ds-global-onyxblack-07', forestgreen: 'o9ds-global-forestgreen-07', midnightindigo: 'o9ds-global-midnightindigo-07' }, darkGlobal: 'o9ds-global-dark-09', useCase: 'Hover state for dropdowns, notifications hover' },
  { token: 'o9ds-color-s-hover', lightGlobal: 'o9ds-global-gray-04', darkGlobal: 'o9ds-global-dark-05', useCase: 'Hover color for scroll handle.' },
  // Active
  { token: 'o9ds-color-s-theme-active-1', lightGlobal: { o9theme: 'o9ds-global-o9theme-10', skyblue: 'o9ds-global-skyblue-09', onyxblack: 'o9ds-global-onyxblack-10', forestgreen: 'o9ds-global-forestgreen-09', midnightindigo: 'o9ds-global-midnightindigo-09' }, darkGlobal: 'o9ds-global-dark-07', useCase: 'Checkbox, radio active state' },
  { token: 'o9ds-color-s-theme-active-2', lightGlobal: { o9theme: 'o9ds-global-o9theme-07', skyblue: 'o9ds-global-skyblue-07', onyxblack: 'o9ds-global-onyxblack-07', forestgreen: 'o9ds-global-forestgreen-07', midnightindigo: 'o9ds-global-midnightindigo-07' }, darkGlobal: 'o9ds-global-dark-12', useCase: 'Active state for secondary, tertiary, outline btn' },
  { token: 'o9ds-color-s-theme-active-3', lightGlobal: { o9theme: 'o9ds-global-o9theme-06', skyblue: 'o9ds-global-skyblue-06', onyxblack: 'o9ds-global-onyxblack-06', forestgreen: 'o9ds-global-forestgreen-06', midnightindigo: 'o9ds-global-midnightindigo-06' }, darkGlobal: 'o9ds-global-o9theme-09', useCase: 'Active state for secondary Tab' },
  { token: 'o9ds-color-s-theme-active-4', lightGlobal: { o9theme: 'o9ds-global-o9theme-06', skyblue: 'o9ds-global-skyblue-06', onyxblack: 'o9ds-global-onyxblack-06', forestgreen: 'o9ds-global-forestgreen-06', midnightindigo: 'o9ds-global-midnightindigo-06' }, darkGlobal: 'o9ds-global-gray-08', useCase: 'Active state for Dropdown' },
  { token: 'o9ds-color-s-theme-active-5', lightGlobal: { o9theme: 'o9ds-global-o9theme-11', skyblue: 'o9ds-global-skyblue-11', onyxblack: 'o9ds-global-onyxblack-11', forestgreen: 'o9ds-global-forestgreen-11', midnightindigo: 'o9ds-global-midnightindigo-11' }, darkGlobal: 'o9ds-global-dark-06', useCase: 'Active/pressed state for Primary Button' },
  { token: 'o9ds-color-s-active', lightGlobal: 'o9ds-global-white', darkGlobal: 'o9ds-global-black', useCase: 'Left sidebar - icon button active state' },
  // Disabled, negative, neutral, inverse
  { token: 'o9ds-color-s-disabled', lightGlobal: 'o9ds-global-gray-02', darkGlobal: 'o9ds-global-gray-08', useCase: 'Background for disabled elements (buttons, checkboxes, chips).' },
  { token: 'o9ds-color-s-readonly', lightGlobal: 'o9ds-global-gray-01', darkGlobal: 'o9ds-global-gray-08', useCase: 'Read-only field background.' },
  { token: 'o9ds-color-s-negative-light', lightGlobal: 'o9ds-global-redish-09', darkGlobal: 'o9ds-global-redish-06', useCase: 'Checkbox background in error state.' },
  { token: 'o9ds-color-s-negative', lightGlobal: 'o9ds-global-redish-09', darkGlobal: 'o9ds-global-redish-06', useCase: 'Danger Button primary color.' },
  { token: 'o9ds-color-s-negative-hover', lightGlobal: 'o9ds-global-redish-10', darkGlobal: 'o9ds-global-redish-09', useCase: 'Danger button hover; Checkbox/radio hover.' },
  { token: 'o9ds-color-s-negative-active', lightGlobal: 'o9ds-global-redish-11', darkGlobal: 'o9ds-global-redish-10', useCase: 'Danger button active state color.' },
  { token: 'o9ds-color-s-negative-static', lightGlobal: 'o9ds-global-redish-08', darkGlobal: 'o9ds-global-redish-08', useCase: 'Counter background color.' },
  { token: 'o9ds-color-s-neutral', lightGlobal: 'o9ds-global-black', darkGlobal: 'o9ds-global-white', useCase: 'Neutral counters/badge background color.' },
  { token: 'o9ds-color-s-inverse', lightGlobal: 'o9ds-global-black', darkGlobal: 'o9ds-global-white', useCase: 'Inverse background (e.g., Tooltips).' },
  { token: 'o9ds-color-s-direct', lightGlobal: 'o9ds-global-white', darkGlobal: 'o9ds-global-black', useCase: 'Direct background (Pivot tables, Grid cells).' },
  { token: 'o9ds-color-s-on-inverse', lightGlobal: 'o9ds-global-gray-08', darkGlobal: 'o9ds-global-gray-01', useCase: 'Shortcut info text/icons on Tooltip.' },
  // Pulse, static, overlay, shadow
  { token: 'o9ds-color-s-pulse-light', lightGlobal: 'o9ds-global-gray-01', darkGlobal: 'o9ds-global-gray-09', useCase: 'Skeleton loader (light - starting color).' },
  { token: 'o9ds-color-s-pulse-dark', lightGlobal: 'o9ds-global-gray-02', darkGlobal: 'o9ds-global-gray-06', useCase: 'Skeleton loader (dark - ending color).' },
  { token: 'o9ds-color-s-white-static', lightGlobal: 'o9ds-global-white', darkGlobal: 'o9ds-global-white', useCase: 'Color picker - light mode preview.' },
  { token: 'o9ds-color-s-black-static', lightGlobal: 'o9ds-global-gray-10', darkGlobal: 'o9ds-global-dark-gray-10', useCase: 'Color picker - dark mode preview.' },
  { token: 'o9ds-color-s-overlay-static', lightGlobal: 'o9ds-global-opacity-1', darkGlobal: 'o9ds-global-opacity-1', useCase: 'Overlay for popups/modals.' },
  { token: 'o9ds-color-s-shadow-static-1', lightGlobal: 'o9ds-global-opacity-2', darkGlobal: 'o9ds-global-opacity-2', useCase: 'Shadow for popover, dropdown, window, tooltip, toast.' },
  { token: 'o9ds-color-s-shadow-static-2', lightGlobal: 'o9ds-global-opacity-3', darkGlobal: 'o9ds-global-opacity-2', useCase: 'Shadow for left sidebar.' },
  { token: 'o9ds-color-s-warning-static', lightGlobal: 'o9ds-global-orangish-07', darkGlobal: 'o9ds-global-orangish-07', useCase: 'Unnamed indicator.' },
  { token: 'o9ds-color-s-currenttime', lightGlobal: 'o9ds-global-orangish-07', darkGlobal: 'o9ds-global-orangish-10', useCase: 'Current time bucket color.' },
  { token: 'o9ds-color-s-ancestorfrozen', lightGlobal: 'o9ds-global-green-07', darkGlobal: 'o9ds-global-green-10', useCase: 'Ancestor frozen cell.' },
  { token: 'o9ds-color-s-frozen', lightGlobal: 'o9ds-global-green-06', darkGlobal: 'o9ds-global-green-08', useCase: 'Main frozen cell color.' },
  { token: 'o9ds-color-s-frozenleaf', lightGlobal: 'o9ds-global-green-05', darkGlobal: 'o9ds-global-green-09', useCase: 'Leaf frozen cell in pivot.' },
]

// Border tokens — use border: 2px solid var(--token) or 3px. focus-inverse and disabled sit on surface-theme bg.
export const SEMANTIC_BORDER = [
  { token: 'o9ds-color-b-divider', lightGlobal: 'o9ds-global-gray-02', darkGlobal: 'o9ds-global-gray-08', useCase: 'Actions separator, chips border, tile border, button group, counter, pivot gridlines, chart gridlines.' },
  { token: 'o9ds-color-b-base', lightGlobal: 'o9ds-global-gray-01', darkGlobal: 'o9ds-global-gray-09', useCase: 'Match border with surface base (dim separator in H Filter).' },
  { token: 'o9ds-color-b-subtle', lightGlobal: 'o9ds-global-gray-01', darkGlobal: 'o9ds-global-gray-10', useCase: 'Dropdown divider on gray bg.' },
  { token: 'o9ds-color-b-dark', lightGlobal: 'o9ds-global-gray-04', darkGlobal: 'o9ds-global-gray-06', useCase: 'Past time bucket color on gray divider.' },
  { token: 'o9ds-color-b-separator', lightGlobal: 'o9ds-global-gray-02', darkGlobal: 'o9ds-global-gray-07', useCase: 'Vertical divider inside form fields (e.g. minus/plus in input group).' },
  { token: 'o9ds-color-b-inverse', lightGlobal: 'o9ds-global-black', darkGlobal: 'o9ds-global-white', useCase: 'Inverse border.' },
  { token: 'o9ds-color-b-theme', lightGlobal: { o9theme: 'o9ds-global-o9theme-10', skyblue: 'o9ds-global-skyblue-09', onyxblack: 'o9ds-global-onyxblack-10', forestgreen: 'o9ds-global-forestgreen-09', midnightindigo: 'o9ds-global-midnightindigo-10' }, darkGlobal: 'o9ds-global-dark-07', useCase: 'Theme border (primary buttons, links).' },
  { token: 'o9ds-color-b-hover', lightGlobal: 'o9ds-global-gray-03', darkGlobal: 'o9ds-global-gray-07', useCase: 'Not active tab hover state.' },
  { token: 'o9ds-color-b-theme-hover', lightGlobal: { o9theme: 'o9ds-global-o9theme-10', skyblue: 'o9ds-global-skyblue-09', onyxblack: 'o9ds-global-onyxblack-10', forestgreen: 'o9ds-global-forestgreen-09', midnightindigo: 'o9ds-global-midnightindigo-10' }, darkGlobal: 'o9ds-global-dark-07', useCase: 'Tab border hover color in default state.' },
  { token: 'o9ds-color-b-theme-active', lightGlobal: { o9theme: 'o9ds-global-o9theme-10', skyblue: 'o9ds-global-skyblue-09', onyxblack: 'o9ds-global-onyxblack-10', forestgreen: 'o9ds-global-forestgreen-09', midnightindigo: 'o9ds-global-midnightindigo-10' }, darkGlobal: 'o9ds-global-dark-07', useCase: 'Tab active state hover color.' },
  { token: 'o9ds-color-b-active-static', lightGlobal: 'o9ds-global-gray-05', darkGlobal: 'o9ds-global-gray-05', useCase: 'Active state for interactive elements (e.g. title view in filters).' },
  { token: 'o9ds-color-b-theme-hover-2', lightGlobal: { o9theme: 'o9ds-global-o9theme-09', skyblue: 'o9ds-global-skyblue-10', onyxblack: 'o9ds-global-onyxblack-10', forestgreen: 'o9ds-global-forestgreen-10', midnightindigo: 'o9ds-global-midnightindigo-09' }, darkGlobal: 'o9ds-global-dark-08', useCase: 'Active/selected state of chips, cards, or active tabs.' },
  { token: 'o9ds-color-b-negative', lightGlobal: 'o9ds-global-redish-09', darkGlobal: 'o9ds-global-redish-08', useCase: 'Input field error border on hover/focus.' },
  { token: 'o9ds-color-b-warning', lightGlobal: 'o9ds-global-orangish-10', darkGlobal: 'o9ds-global-orangish-09', useCase: 'Warning border.' },
  { token: 'o9ds-color-b-positive', lightGlobal: 'o9ds-global-greenish-10', darkGlobal: 'o9ds-global-greenish-09', useCase: 'Positive/success border.' },
  { token: 'o9ds-color-b-info-light', lightGlobal: 'o9ds-global-bluish-09', darkGlobal: 'o9ds-global-bluish-08', useCase: 'Info border.' },
  { token: 'o9ds-color-b-neutral', lightGlobal: 'o9ds-global-black', darkGlobal: 'o9ds-global-white', useCase: 'Neutral border.' },
  { token: 'o9ds-color-b-theme-focus', lightGlobal: { o9theme: 'o9ds-global-o9theme-10', skyblue: 'o9ds-global-skyblue-09', onyxblack: 'o9ds-global-onyxblack-10', forestgreen: 'o9ds-global-forestgreen-09', midnightindigo: 'o9ds-global-midnightindigo-10' }, darkGlobal: 'o9ds-global-dark-07', useCase: 'Theme focus border.' },
  { token: 'o9ds-color-b-form', lightGlobal: 'o9ds-global-gray-11', darkGlobal: 'o9ds-global-gray-05', useCase: 'Form field border.' },
  { token: 'o9ds-color-b-disabled', lightGlobal: 'o9ds-global-gray-03', darkGlobal: 'o9ds-global-gray-05', useCase: 'Disabled border. Use with surface-theme background (sits on top of that).' },
  { token: 'o9ds-color-b-readonly', lightGlobal: 'o9ds-global-gray-05', darkGlobal: 'o9ds-global-gray-05', useCase: 'Read-only field border (dashed).', borderStyle: 'dashed' },
  { token: 'o9ds-color-b-utility-purple', lightGlobal: 'o9ds-global-purple-dark', darkGlobal: 'o9ds-global-purple-light', useCase: 'Utility purple border.' },
  { token: 'o9ds-color-b-focus-inverse', lightGlobal: 'o9ds-global-white', darkGlobal: 'o9ds-global-black', useCase: 'Focus inverse border. Use with surface-theme background (sits on top of that).' },
]

// Text tokens — use "A" for color swatch. Map to global tokens.
export const SEMANTIC_TEXT = [
  { token: 'o9ds-color-t-primary', lightGlobal: 'o9ds-global-black', darkGlobal: 'o9ds-global-gray-02', useCase: 'Primary text color.' },
  { token: 'o9ds-color-t-secondary', lightGlobal: 'o9ds-global-gray-08', darkGlobal: 'o9ds-global-gray-03', useCase: 'Secondary text, captions.' },
  { token: 'o9ds-color-t-tertiary', lightGlobal: 'o9ds-global-gray-07', darkGlobal: 'o9ds-global-gray-04', useCase: 'Tertiary text.' },
  { token: 'o9ds-color-t-placeholder', lightGlobal: 'o9ds-global-gray-06', darkGlobal: 'o9ds-global-gray-04', useCase: 'Placeholder text.' },
  { token: 'o9ds-color-t-active', lightGlobal: 'o9ds-global-black', darkGlobal: 'o9ds-global-white', useCase: 'Neutral active color.' },
  { token: 'o9ds-color-t-theme', lightGlobal: { o9theme: 'o9ds-global-o9theme-10', skyblue: 'o9ds-global-skyblue-09', onyxblack: 'o9ds-global-onyxblack-10', forestgreen: 'o9ds-global-forestgreen-09', midnightindigo: 'o9ds-global-midnightindigo-10' }, darkGlobal: 'o9ds-global-dark-07', useCase: 'Theme text color in enabled/default state.' },
  { token: 'o9ds-color-t-theme-hover', lightGlobal: { o9theme: 'o9ds-global-o9theme-10', skyblue: 'o9ds-global-skyblue-10', onyxblack: 'o9ds-global-onyxblack-10', forestgreen: 'o9ds-global-forestgreen-10', midnightindigo: 'o9ds-global-midnightindigo-10' }, darkGlobal: 'o9ds-global-dark-07', useCase: 'Hover/focus text for tertiary, secondary buttons, filter chips, dropdown options.' },
  { token: 'o9ds-color-t-theme-active', lightGlobal: { o9theme: 'o9ds-global-o9theme-10', skyblue: 'o9ds-global-skyblue-10', onyxblack: 'o9ds-global-onyxblack-10', forestgreen: 'o9ds-global-forestgreen-10', midnightindigo: 'o9ds-global-midnightindigo-10' }, darkGlobal: 'o9ds-global-dark-07', useCase: 'Active state text on white, gray, or theme-active-2 bg.' },
  { token: 'o9ds-color-t-hover', lightGlobal: 'o9ds-global-black', darkGlobal: 'o9ds-global-white', useCase: 'Neutral hover color.' },
  { token: 'o9ds-color-t-inverse', lightGlobal: 'o9ds-global-white', darkGlobal: 'o9ds-global-black', useCase: 'Inverse text on colored backgrounds.' },
  { token: 'o9ds-color-t-active-inverse', lightGlobal: 'o9ds-global-white', darkGlobal: 'o9ds-global-black', useCase: 'Primary button active state text color.' },
  { token: 'o9ds-color-t-white-static', lightGlobal: 'o9ds-global-white', darkGlobal: 'o9ds-global-white', useCase: 'Static white text.' },
  { token: 'o9ds-color-t-black-static', lightGlobal: 'o9ds-global-gray-09', darkGlobal: 'o9ds-global-gray-09', useCase: 'Tooltip text remains same in light and dark mode.' },
  { token: 'o9ds-color-t-disabled', lightGlobal: 'o9ds-global-gray-04', darkGlobal: 'o9ds-global-gray-06', useCase: 'Disabled text color.' },
  { token: 'o9ds-color-t-readonly', lightGlobal: 'o9ds-global-gray-08', darkGlobal: 'o9ds-global-gray-03', useCase: 'Read-only field text.' },
  { token: 'o9ds-color-t-positive', lightGlobal: 'o9ds-global-greenish-10', darkGlobal: 'o9ds-global-greenish-09', useCase: 'Positive/success text.' },
  { token: 'o9ds-color-t-negative', lightGlobal: 'o9ds-global-redish-09', darkGlobal: 'o9ds-global-redish-06', useCase: 'Error text color.' },
  { token: 'o9ds-color-t-warning', lightGlobal: 'o9ds-global-orangish-10', darkGlobal: 'o9ds-global-orangish-09', useCase: 'Warning text.' },
  { token: 'o9ds-color-t-info-light', lightGlobal: 'o9ds-global-bluish-09', darkGlobal: 'o9ds-global-bluish-07', useCase: 'Info text (light).' },
  { token: 'o9ds-color-t-info-dark', lightGlobal: 'o9ds-global-bluish-10', darkGlobal: 'o9ds-global-bluish-08', useCase: 'Info text (dark).' },
  { token: 'o9ds-color-t-neutral', lightGlobal: 'o9ds-global-black', darkGlobal: 'o9ds-global-white', useCase: 'Neutral text.' },
  { token: 'o9ds-color-t-form-label', lightGlobal: 'o9ds-global-gray-08', darkGlobal: 'o9ds-global-gray-02', useCase: 'Form label text.' },
  { token: 'o9ds-color-t-form-value', lightGlobal: 'o9ds-global-gray-09', darkGlobal: 'o9ds-global-gray-01', useCase: 'Form value text.' },
  { token: 'o9ds-color-t-utility-purple', lightGlobal: 'o9ds-global-purple-dark', darkGlobal: 'o9ds-global-purple-light', useCase: 'Utility purple text.' },
]

// Icon tokens — use o9con icon for color swatch. Same mapping logic as text.
export const SEMANTIC_ICON = [
  { token: 'o9ds-color-i-primary', lightGlobal: 'o9ds-global-black', darkGlobal: 'o9ds-global-gray-02', useCase: 'Primary icon color.' },
  { token: 'o9ds-color-i-secondary', lightGlobal: 'o9ds-global-gray-08', darkGlobal: 'o9ds-global-gray-03', useCase: 'Secondary icon color.' },
  { token: 'o9ds-color-i-tertiary', lightGlobal: 'o9ds-global-gray-07', darkGlobal: 'o9ds-global-gray-04', useCase: 'Tertiary icon color.' },
  { token: 'o9ds-color-i-placeholder', lightGlobal: 'o9ds-global-gray-06', darkGlobal: 'o9ds-global-gray-04', useCase: 'Placeholder icon color.' },
  { token: 'o9ds-color-i-active', lightGlobal: 'o9ds-global-black', darkGlobal: 'o9ds-global-white', useCase: 'Neutral active color.' },
  { token: 'o9ds-color-i-theme', lightGlobal: { o9theme: 'o9ds-global-o9theme-10', skyblue: 'o9ds-global-skyblue-09', onyxblack: 'o9ds-global-onyxblack-10', forestgreen: 'o9ds-global-forestgreen-09', midnightindigo: 'o9ds-global-midnightindigo-10' }, darkGlobal: 'o9ds-global-dark-07', useCase: 'Theme icon color.' },
  { token: 'o9ds-color-i-theme-hover', lightGlobal: { o9theme: 'o9ds-global-o9theme-10', skyblue: 'o9ds-global-skyblue-10', onyxblack: 'o9ds-global-onyxblack-10', forestgreen: 'o9ds-global-forestgreen-10', midnightindigo: 'o9ds-global-midnightindigo-10' }, darkGlobal: 'o9ds-global-dark-07', useCase: 'Hover/focus icon color for buttons, chips, dropdowns.' },
  { token: 'o9ds-color-i-theme-active', lightGlobal: { o9theme: 'o9ds-global-o9theme-10', skyblue: 'o9ds-global-skyblue-10', onyxblack: 'o9ds-global-onyxblack-10', forestgreen: 'o9ds-global-forestgreen-10', midnightindigo: 'o9ds-global-midnightindigo-10' }, darkGlobal: 'o9ds-global-dark-07', useCase: 'Active state icon on white, gray, or theme-active-2 bg.' },
  { token: 'o9ds-color-i-hover', lightGlobal: 'o9ds-global-black', darkGlobal: 'o9ds-global-white', useCase: 'Neutral hover color.' },
  { token: 'o9ds-color-i-inverse', lightGlobal: 'o9ds-global-white', darkGlobal: 'o9ds-global-black', useCase: 'Inverse icon on colored backgrounds.' },
  { token: 'o9ds-color-i-active-inverse', lightGlobal: 'o9ds-global-white', darkGlobal: 'o9ds-global-black', useCase: 'Primary button active state icon color.' },
  { token: 'o9ds-color-i-white-static', lightGlobal: 'o9ds-global-white', darkGlobal: 'o9ds-global-white', useCase: 'Static white icon.' },
  { token: 'o9ds-color-i-black-static', lightGlobal: 'o9ds-global-gray-09', darkGlobal: 'o9ds-global-gray-09', useCase: 'Tooltip icon remains same in light and dark mode.' },
  { token: 'o9ds-color-i-disabled', lightGlobal: 'o9ds-global-gray-04', darkGlobal: 'o9ds-global-gray-06', useCase: 'Disabled icon color.' },
  { token: 'o9ds-color-i-readonly', lightGlobal: 'o9ds-global-gray-08', darkGlobal: 'o9ds-global-gray-03', useCase: 'Read-only icon color.' },
  { token: 'o9ds-color-i-positive', lightGlobal: 'o9ds-global-greenish-10', darkGlobal: 'o9ds-global-greenish-09', useCase: 'Positive/success icon.' },
  { token: 'o9ds-color-i-negative', lightGlobal: 'o9ds-global-redish-09', darkGlobal: 'o9ds-global-redish-06', useCase: 'Error icon color.' },
  { token: 'o9ds-color-i-negative-static', lightGlobal: 'o9ds-global-redish-08', darkGlobal: 'o9ds-global-redish-08', useCase: 'Indicator shape color.' },
  { token: 'o9ds-color-i-warning', lightGlobal: 'o9ds-global-orangish-10', darkGlobal: 'o9ds-global-orangish-09', useCase: 'Warning icon.' },
  { token: 'o9ds-color-i-warning-static', lightGlobal: 'o9ds-global-redish-08', darkGlobal: 'o9ds-global-redish-08', useCase: 'Indicator for unsaved changes.' },
  { token: 'o9ds-color-i-info-light', lightGlobal: 'o9ds-global-bluish-09', darkGlobal: 'o9ds-global-bluish-07', useCase: 'Info icon (light).' },
  { token: 'o9ds-color-i-info-dark', lightGlobal: 'o9ds-global-bluish-10', darkGlobal: 'o9ds-global-bluish-08', useCase: 'Info icon (dark).' },
  { token: 'o9ds-color-i-neutral', lightGlobal: 'o9ds-global-black', darkGlobal: 'o9ds-global-white', useCase: 'Neutral icon.' },
  { token: 'o9ds-color-i-utility-purple', lightGlobal: 'o9ds-global-purple-dark', darkGlobal: 'o9ds-global-purple-light', useCase: 'Utility purple icon.' },
]
