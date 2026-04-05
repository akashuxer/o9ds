/**
 * Sidebar green dot + section overview "ready" state: routes with real documentation
 * (not placeholder). Import this single source from Layout and overview pages.
 */
export const PATHS_WITH_CONTENT = new Set([
  '/',
  '/overview',
  '/principles',
  '/foundations',
  '/colors',
  '/typography',
  '/spacing',
  '/borders',
  '/effects',
  '/icons',
  '/illustrations',
  '/components',
  '/developers',
  '/patterns',
  '/accessibility',
  '/content',

  // Buttons & Actions
  '/components/button',
  '/components/icon-button',
  '/components/button-group',
  '/components/dropdown-button',
  '/components/dropdown-icon-button',
  '/components/fab-button',

  // Navigation
  '/components/link',
  '/components/button-link',
  '/components/icon-button-link',
  '/components/tabstrip',
  '/components/breadcrumb',

  // Inputs — Text
  '/components/textbox',
  '/components/textarea',
  '/components/number-input',

  // Inputs — Selection Controls
  '/components/checkbox',
  '/components/checkbox-group',
  '/components/radio',
  '/components/radio-group',
  '/components/switch',

  // Inputs — Selection Inputs
  '/components/select-dropdown',
  '/components/combobox',

  // Feedback
  '/components/toast',
  '/components/badge',

  // Overlays
  '/components/action-menu',
  '/components/popover',
  '/components/tooltip',

  // Data Display
  '/components/cards',
])

/**
 * @param {string} path
 * @returns {boolean}
 */
export function hasReadyDocumentation(path) {
  return PATHS_WITH_CONTENT.has(path)
}
