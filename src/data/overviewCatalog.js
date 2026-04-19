/**
 * Catalog entries for Foundations / Patterns / Accessibility / Content overview grids.
 * When adding a new doc page in a section, add a row here so the overview card appears.
 * @typedef {{ path: string, label: string, section: string, description?: string }} OverviewCatalogItem
 */

/** @type {OverviewCatalogItem[]} */
export const FOUNDATIONS_CATALOG = [
  {
    path: '/colors',
    label: 'Colors',
    section: 'Foundations',
    description: 'Core palettes, semantic roles, and contrast guidance for text, surfaces, and interactive states.',
  },
  {
    path: '/typography',
    label: 'Typography',
    section: 'Foundations',
    description: 'Type scale, font stacks, weights, and usage rules for readable, consistent UI copy.',
  },
  {
    path: '/spacing',
    label: 'Spacing',
    section: 'Foundations',
    description: 'Spacing tokens for padding, margin, and gap—predictable rhythm from dense tools to airy layouts.',
  },
  {
    path: '/borders',
    label: 'Borders & Radius',
    section: 'Foundations',
    description: 'Border widths, styles, and corner radii so containers and controls share one visual language.',
  },
  {
    path: '/effects',
    label: 'Effects',
    section: 'Foundations',
    description: 'Shadow, blur, and opacity tokens for depth, focus, and hierarchy without one-off values.',
  },
  {
    path: '/icons',
    label: 'Iconography',
    section: 'Assets',
    description: 'The o9con icon set—grid, stroke, sizes, and usage for UI actions and status at any scale.',
  },
  {
    path: '/illustrations',
    label: 'Illustrations',
    section: 'Assets',
    description: 'o9 illustration style for empty states, onboarding, and storytelling—composition, color, and tone.',
  },
  {
    path: '/symbol',
    label: 'Symbol',
    section: 'Assets',
    description: 'Product symbol usage: clear space, sizing, and co-branding so the mark stays recognizable.',
  },
  {
    path: '/motion',
    label: 'Motion & Animation',
    section: 'Foundations',
    description: 'Duration, easing, and motion patterns for feedback, transitions, and reduced-motion respect.',
  },
  {
    path: '/colors/data-viz',
    label: 'Data Visualization Colors',
    section: 'Foundations',
    description: 'Categorical and sequential palettes for charts and dashboards—legible, accessible data color.',
  },
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
  {
    path: '/accessibility/overview',
    label: 'Introduction',
    section: 'Accessibility',
    description:
      'Why accessibility matters, shared responsibility, and principles—your entry point before deeper topics.',
  },
  {
    path: '/accessibility/standards-and-principles',
    label: 'Standards and principles',
    section: 'Accessibility',
    description: 'WCAG baseline, the POUR framework, and how global standards map to design-system decisions.',
  },
  {
    path: '/accessibility/assistive-technology',
    label: 'Assistive technology',
    section: 'Accessibility',
    description: 'How AT interacts with UIs, common tools, and what to assume when you design or review features.',
  },
  {
    path: '/accessibility/screen-reader-and-aria',
    label: 'Screen reader and ARIA',
    section: 'Accessibility',
    description: 'Semantic HTML, roles and states, accessible names, live regions, and screen-reader-friendly patterns.',
  },
  {
    path: '/accessibility/keyboard-and-focus',
    label: 'Keyboard and focus',
    section: 'Accessibility',
    description: 'Tab order, focus visibility, focus management, and keyboard-only operation across layouts.',
  },
  {
    path: '/accessibility/shortcuts',
    label: 'Shortcuts',
    section: 'Accessibility',
    description: 'Product and browser shortcuts versus assistive-tech commands, and how to document them clearly.',
  },
  {
    path: '/accessibility/visual-accessibility',
    label: 'Visual accessibility',
    section: 'Accessibility',
    description: 'Contrast, color alone, zoom and reflow, images, and data viz so interfaces stay perceivable for everyone.',
  },
  {
    path: '/accessibility/testing-and-qa',
    label: 'Testing and QA',
    section: 'Accessibility',
    description: 'Practical checklists, environments, common failures, and how to file useful accessibility bugs.',
  },
]

/** @type {OverviewCatalogItem[]} */
export const CONTENT_CATALOG = [
  { path: '/content/writing-principles', label: 'Writing Principles', section: 'Content Guidelines' },
  { path: '/content/grammar', label: 'Grammar', section: 'Content Guidelines' },
  { path: '/content/voice-and-tone', label: 'Voice and Tone', section: 'Content Guidelines' },
]
