/**
 * Catalog entries for Foundations / Patterns / Accessibility / Content overview grids.
 * When adding a new doc page in a section, add a row here so the overview card appears.
 * @typedef {{ path: string, label: string, section: string }} OverviewCatalogItem
 */

/** @type {OverviewCatalogItem[]} */
export const FOUNDATIONS_CATALOG = [
  { path: '/colors', label: 'Colors', section: 'Foundations' },
  { path: '/typography', label: 'Typography', section: 'Foundations' },
  { path: '/spacing', label: 'Spacing', section: 'Foundations' },
  { path: '/borders', label: 'Borders & Radius', section: 'Foundations' },
  { path: '/icons', label: 'Iconography', section: 'Assets' },
  { path: '/illustrations', label: 'Illustrations', section: 'Assets' },
  { path: '/symbol', label: 'Symbol', section: 'Assets' },
  { path: '/motion', label: 'Motion & Animation', section: 'Foundations' },
  { path: '/effects', label: 'Effects', section: 'Foundations' },
  { path: '/colors/data-viz', label: 'Data Visualization Colors', section: 'Foundations' },
]

/** @type {OverviewCatalogItem[]} */
export const PATTERNS_CATALOG = [
  { path: '/patterns/forms', label: 'Forms', section: 'Patterns' },
  { path: '/patterns/search', label: 'Search', section: 'Patterns' },
  { path: '/patterns/filters', label: 'Filters', section: 'Patterns' },
  { path: '/patterns/tables', label: 'Tables', section: 'Patterns' },
  { path: '/patterns/side-panels', label: 'Side Panels', section: 'Patterns' },
  { path: '/patterns/modals', label: 'Modals', section: 'Patterns' },
  { path: '/patterns/notifications', label: 'Notifications', section: 'Patterns' },
  { path: '/patterns/empty-states', label: 'Empty States', section: 'Patterns' },
  { path: '/patterns/bulk-actions', label: 'Bulk Actions', section: 'Patterns' },
  { path: '/patterns/nested-interactions', label: 'Nested Interactions', section: 'Patterns' },
  { path: '/patterns/drag', label: 'Drag', section: 'Patterns' },
  { path: '/patterns/disabled', label: 'Disabled', section: 'Patterns' },
]

/** Do not list the section overview route itself (e.g. /accessibility) as a card — only child topics. */
/** @type {OverviewCatalogItem[]} */
export const ACCESSIBILITY_CATALOG = [
  { path: '/accessibility/overview', label: 'Introduction', section: 'Accessibility' },
  { path: '/accessibility/standards-and-principles', label: 'Standards and principles', section: 'Accessibility' },
  { path: '/accessibility/assistive-technology', label: 'Assistive technology', section: 'Accessibility' },
  { path: '/accessibility/screen-reader-and-aria', label: 'Screen reader and ARIA', section: 'Accessibility' },
  { path: '/accessibility/keyboard-and-focus', label: 'Keyboard and focus', section: 'Accessibility' },
  { path: '/accessibility/visual-accessibility', label: 'Visual accessibility', section: 'Accessibility' },
  { path: '/accessibility/testing-and-qa', label: 'Testing and QA', section: 'Accessibility' },
  { path: '/accessibility/glossary', label: 'Glossary', section: 'Accessibility' },
]

/** @type {OverviewCatalogItem[]} */
export const CONTENT_CATALOG = [
  { path: '/content/writing-principles', label: 'Writing Principles', section: 'Content Guidelines' },
  { path: '/content/grammar', label: 'Grammar', section: 'Content Guidelines' },
  { path: '/content/voice-and-tone', label: 'Voice and Tone', section: 'Content Guidelines' },
]
