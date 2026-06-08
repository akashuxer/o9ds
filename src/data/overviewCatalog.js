/**
 * Catalog entries for Foundations / Patterns / Accessibility / Content overview grids.
 * When adding a new doc page in a section, add a row here so the overview card appears.
 * @typedef {{ path: string, label: string, section: string, description?: string }} OverviewCatalogItem
 */

import {
  PATH_A11Y_ASSISTIVE,
  PATH_A11Y_INTRODUCTION,
  PATH_A11Y_KEYBOARD,
  PATH_A11Y_SCREEN_READER_BASE,
  PATH_A11Y_STANDARDS,
  PATH_A11Y_SHORTCUTS,
  PATH_A11Y_TESTING,
  PATH_A11Y_VISUAL,
  PATH_BORDERS,
  PATH_COLOR_BASE,
  PATH_COLOR_DATA_VIZ,
  PATH_EFFECTS,
  PATH_ICONS_BASE,
  PATH_ILLUSTRATIONS_BASE,
  PATH_MOTION,
  PATH_SPACING,
  PATH_SYMBOL,
  PATH_TYPOGRAPHY_BASE,
  contentTopicPath,
  docPagePath,
  grammarStyleTopicPath,
  patternTopicPath,
} from './docPaths'

/** @type {OverviewCatalogItem[]} */
export const FOUNDATIONS_CATALOG = [
  {
    path: docPagePath(PATH_COLOR_BASE, 'Overview'),
    label: 'Colors',
    section: 'Foundations',
    description: 'Core palettes, semantic roles, and contrast guidance for text, surfaces, and interactive states.',
  },
  {
    path: docPagePath(PATH_TYPOGRAPHY_BASE, 'Overview'),
    label: 'Typography',
    section: 'Foundations',
    description: 'Type scale, font stacks, weights, and usage rules for readable, consistent UI copy.',
  },
  {
    path: PATH_SPACING,
    label: 'Spacing',
    section: 'Foundations',
    description: 'Spacing tokens for padding, margin, and gap—predictable rhythm from dense tools to airy layouts.',
  },
  {
    path: PATH_BORDERS,
    label: 'Borders & Radius',
    section: 'Foundations',
    description: 'Border widths, styles, and corner radii so containers and controls share one visual language.',
  },
  {
    path: PATH_EFFECTS,
    label: 'Effects',
    section: 'Foundations',
    description: 'Shadow, blur, and opacity tokens for depth, focus, and hierarchy without one-off values.',
  },
  {
    path: docPagePath(PATH_ICONS_BASE, 'Overview'),
    label: 'Iconography',
    section: 'Assets',
    description: 'The o9con icon set—grid, stroke, sizes, and usage for UI actions and status at any scale.',
  },
  {
    path: docPagePath(PATH_ILLUSTRATIONS_BASE, 'Overview'),
    label: 'Illustrations',
    section: 'Assets',
    description: 'o9 illustration style for empty states, onboarding, and storytelling—composition, color, and tone.',
  },
  {
    path: PATH_SYMBOL,
    label: 'Symbol',
    section: 'Assets',
    description: 'Product symbol usage: clear space, sizing, and co-branding so the mark stays recognizable.',
  },
  {
    path: docPagePath(PATH_MOTION, 'Overview'),
    label: 'Motion & Animation',
    section: 'Foundations',
    description: 'Duration, easing, and motion patterns for feedback, transitions, and reduced-motion respect.',
  },
  {
    path: PATH_COLOR_DATA_VIZ,
    label: 'Data Visualization Colors',
    section: 'Foundations',
    description: 'Categorical and sequential palettes for charts and dashboards—legible, accessible data color.',
  },
]

/** @type {OverviewCatalogItem[]} */
export const PATTERNS_CATALOG = [
  { path: patternTopicPath('forms'), label: 'Forms', section: 'Patterns' },
  { path: patternTopicPath('search'), label: 'Search', section: 'Patterns' },
  { path: patternTopicPath('application-layouts'), label: 'Application Layouts', section: 'Patterns' },
  { path: patternTopicPath('notifications-alerts'), label: 'Notifications / Alerts', section: 'Patterns' },
  { path: patternTopicPath('truncation'), label: 'Truncation', section: 'Patterns' },
  { path: patternTopicPath('loading'), label: 'Loading', section: 'Patterns' },
  { path: patternTopicPath('export'), label: 'Export', section: 'Patterns' },
  { path: patternTopicPath('destructive-action'), label: 'Destructive Action', section: 'Patterns' },
  { path: patternTopicPath('navigation'), label: 'Navigation', section: 'Patterns' },
  { path: patternTopicPath('on-hover-always-visible'), label: 'On Hover / Always Visible', section: 'Patterns' },
  { path: patternTopicPath('filters'), label: 'Filters', section: 'Patterns' },
  { path: patternTopicPath('bulk-actions'), label: 'Bulk Actions', section: 'Patterns' },
]

/** Do not list the section overview route itself (e.g. /accessibility) as a card — only child topics. */
/** @type {OverviewCatalogItem[]} */
export const ACCESSIBILITY_CATALOG = [
  {
    path: PATH_A11Y_INTRODUCTION,
    label: 'Introduction',
    section: 'Accessibility',
    description:
      'Why accessibility matters, shared responsibility, and principles—your entry point before deeper topics.',
  },
  {
    path: PATH_A11Y_STANDARDS,
    label: 'Standards and principles',
    section: 'Accessibility',
    description: 'WCAG baseline, the POUR framework, and how global standards map to design-system decisions.',
  },
  {
    path: PATH_A11Y_ASSISTIVE,
    label: 'Assistive technology',
    section: 'Accessibility',
    description: 'How AT interacts with UIs, common tools, and what to assume when you design or review features.',
  },
  {
    path: docPagePath(PATH_A11Y_SCREEN_READER_BASE, 'Overview'),
    label: 'Screen reader and ARIA',
    section: 'Accessibility',
    description: 'Semantic HTML, roles and states, accessible names, live regions, and screen-reader-friendly patterns.',
  },
  {
    path: PATH_A11Y_KEYBOARD,
    label: 'Keyboard and focus',
    section: 'Accessibility',
    description: 'Tab order, focus visibility, focus management, and keyboard-only operation across layouts.',
  },
  {
    path: PATH_A11Y_SHORTCUTS,
    label: 'Shortcuts',
    section: 'Accessibility',
    description:
      'Reserved for product and browser shortcut guidance versus assistive-technology commands—documentation will expand in a future release.',
  },
  {
    path: PATH_A11Y_VISUAL,
    label: 'Visual accessibility',
    section: 'Accessibility',
    description: 'Contrast, color alone, zoom and reflow, images, and data viz so interfaces stay perceivable for everyone.',
  },
  {
    path: PATH_A11Y_TESTING,
    label: 'Testing and QA',
    section: 'Accessibility',
    description: 'Practical checklists, environments, common failures, and how to file useful accessibility bugs.',
  },
]

/** @type {OverviewCatalogItem[]} */
export const CONTENT_CATALOG = [
  { path: contentTopicPath('voice-and-tone'), label: 'Voice and Tone', section: 'Content Guidelines' },
  { path: contentTopicPath('writing-principles'), label: 'Writing Principles', section: 'Content Guidelines' },
  { path: grammarStyleTopicPath('intro'), label: 'Grammar & Style', section: 'Content Guidelines' },
]
