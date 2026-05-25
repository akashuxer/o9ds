/**
 * Sidebar green dot + section overview "ready" state: routes with real documentation
 * (not placeholder). Import this single source from Layout and overview pages.
 */
export const PATHS_WITH_CONTENT = new Set([
  '/',
  '/overview',
  '/resources',
  '/foundations',
  '/colors',
  '/typography',
  '/spacing',
  '/borders',
  '/effects',
  '/icons',
  '/illustrations',
  '/symbol',
  '/components',
  '/developers',
  '/figma-make',

  // For Developers → Usage
  '/usage',
  '/usage/public-api',
  '/usage/components',
  '/usage/styling',
  '/usage/composition',
  '/usage/accessibility',
  '/usage/testing',
  '/usage/versioning',
  '/usage/anti-patterns',
  '/usage/checklist',

  // For Developers → Developer Reference
  '/developer-reference/agentic-pipeline',
  '/developer-reference/component-pipeline',
  '/developer-reference/token-pipeline',
  '/developer-reference/shared-patterns',
  '/developer-reference/testing-and-drift',
  '/developer-reference/workflows',
  '/patterns',
  '/accessibility',
  '/accessibility/overview',
  '/accessibility/standards-and-principles',
  '/accessibility/assistive-technology',
  '/accessibility/screen-reader-and-aria',
  '/accessibility/keyboard-and-focus',
  '/accessibility/visual-accessibility',
  '/accessibility/testing-and-qa',
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
  '/components/listbox',
  '/components/search',

  // Feedback
  '/components/toast',
  '/components/badge',

  // Overlays
  '/components/action-menu',
  '/components/popover',
  '/components/hybrid-popover',
  '/components/tooltip',
  '/components/alert-dialog',

  // Inputs (additional)
  '/components/chip',

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
