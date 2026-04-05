/**
 * Component catalog: sidebar + Components overview page.
 * Leaf nodes use /components/:slug (kebab-case).
 */

/** @typedef {{ path: string, label: string }} NavLeaf */
/** @typedef {{ id: string, label: string, children: NavNode[] }} NavGroup */
/** @typedef {NavLeaf | NavGroup} NavNode */

/** @type {NavGroup[]} */
export const COMPONENTS_NAV_TREE = [
  {
    id: 'buttons-actions',
    label: 'Buttons & Actions',
    children: [
      { path: '/components/button', label: 'Button' },
      { path: '/components/icon-button', label: 'Icon Button' },
      { path: '/components/button-group', label: 'Button Group' },
      { path: '/components/dropdown-button', label: 'Dropdown Button' },
      { path: '/components/dropdown-icon-button', label: 'Dropdown Icon Button' },
      { path: '/components/split-button', label: 'Split Button' },
      { path: '/components/split-icon-button', label: 'Split Icon Button' },
      { path: '/components/fab-button', label: 'FAB Button' },
    ],
  },
  {
    id: 'navigation',
    label: 'Navigation',
    children: [
      { path: '/components/link', label: 'Link' },
      { path: '/components/button-link', label: 'Button Link' },
      { path: '/components/icon-button-link', label: 'Icon Button Link' },
      { path: '/components/tabstrip', label: 'Tabstrip' },
      { path: '/components/breadcrumb', label: 'Breadcrumb' },
    ],
  },
  {
    id: 'inputs',
    label: 'Inputs',
    children: [
      { path: '/components/label', label: 'Label' },
      {
        id: 'inputs-text',
        label: 'Text Inputs',
        children: [
          { path: '/components/textbox', label: 'Textbox' },
          { path: '/components/textarea', label: 'Textarea' },
          { path: '/components/search', label: 'Search' },
          { path: '/components/input-url', label: 'Input URL' },
          { path: '/components/number-input', label: 'Number Input' },
        ],
      },
      {
        id: 'inputs-selection-controls',
        label: 'Selection Controls',
        children: [
          { path: '/components/checkbox', label: 'Checkbox' },
          { path: '/components/checkbox-group', label: 'Checkbox Group' },
          { path: '/components/radio', label: 'Radio' },
          { path: '/components/radio-group', label: 'Radio Group' },
          { path: '/components/switch', label: 'Switch' },
          { path: '/components/slider', label: 'Slider' },
          { path: '/components/chip', label: 'Chip' },
          { path: '/components/chip-list', label: 'Chip List' },
        ],
      },
      {
        id: 'inputs-selection-inputs',
        label: 'Selection Inputs',
        children: [
          { path: '/components/select-dropdown', label: 'Select Dropdown' },
          { path: '/components/multi-select', label: 'Multi Select' },
          { path: '/components/combobox', label: 'Combobox' },
        ],
      },
      {
        id: 'inputs-datetime',
        label: 'DateTime Pickers',
        children: [
          { path: '/components/date-picker', label: 'Date Picker' },
          { path: '/components/time-picker', label: 'Time Picker' },
          { path: '/components/date-time-picker', label: 'Date Time Picker' },
          { path: '/components/date-range-picker', label: 'Date Range Picker' },
        ],
      },
      {
        id: 'inputs-visual',
        label: 'Visual Inputs',
        children: [
          { path: '/components/color-picker', label: 'Color Picker' },
          { path: '/components/color-input', label: 'Color Input' },
        ],
      },
      {
        id: 'inputs-editor',
        label: 'Editor',
        children: [
          { path: '/components/text-editor', label: 'Text Editor' },
          { path: '/components/image-editor', label: 'Image Editor' },
        ],
      },
    ],
  },
  {
    id: 'file-handling',
    label: 'File Handling',
    children: [
      { path: '/components/file-input', label: 'File Input' },
      { path: '/components/upload', label: 'Upload' },
      { path: '/components/dropzone', label: 'Dropzone' },
    ],
  },
  {
    id: 'overlays',
    label: 'Overlays & popups',
    children: [
      { path: '/components/tooltip', label: 'Tooltip' },
      { path: '/components/popover', label: 'Popover' },
      { path: '/components/action-menu', label: 'Action Menu' },
      { path: '/components/hybrid-popover', label: 'Hybrid Popover' },
      { path: '/components/drawer', label: 'Drawer' },
      { path: '/components/side-panel', label: 'Side Panel' },
      { path: '/components/overlay-window', label: 'Overlay / Window' },
    ],
  },
  {
    id: 'feedback',
    label: 'Feedback',
    children: [
      {
        id: 'feedback-messaging',
        label: 'Messaging',
        children: [
          { path: '/components/inline-alert', label: 'Inline Alert' },
          { path: '/components/banner-alerts', label: 'Banner Alerts' },
          { path: '/components/toast', label: 'Toast' },
          { path: '/components/alert-dialog', label: 'Alert Dialog' },
          { path: '/components/notifications', label: 'Notifications' },
        ],
      },
      {
        id: 'feedback-status',
        label: 'Status Indicators',
        children: [
          { path: '/components/badge', label: 'Badge' },
          { path: '/components/indicators', label: 'Indicators' },
          { path: '/components/counter', label: 'Counter' },
          { path: '/components/backdrop', label: 'Backdrop' },
        ],
      },
    ],
  },
  {
    id: 'loading-empty',
    label: 'Loading & Empty States',
    children: [
      { path: '/components/spinner', label: 'Spinner' },
      { path: '/components/skeleton-loader', label: 'Skeleton Loader' },
      { path: '/components/empty-state', label: 'Empty State' },
    ],
  },
  {
    id: 'data-display',
    label: 'Data Display',
    children: [
      { path: '/components/cards', label: 'Card' },
      { path: '/components/list', label: 'List' },
      { path: '/components/grid', label: 'Grid' },
      { path: '/components/accordion', label: 'Accordion' },
      { path: '/components/tree-widget', label: 'Tree Widget' },
    ],
  },
  {
    id: 'layout-structure',
    label: 'Layout & Structure',
    children: [
      { path: '/components/layout-tiles', label: 'Layout Tiles' },
      { path: '/components/splitter', label: 'Splitter' },
      { path: '/components/scroll-bar', label: 'Scroll Bar' },
    ],
  },
  {
    id: 'identity',
    label: 'Identity',
    children: [
      { path: '/components/avatar', label: 'Avatar' },
      { path: '/components/avatar-group', label: 'Avatar Group' },
    ],
  },
]

/**
 * Routes implemented as real doc pages (not placeholder stubs).
 * This drives the green dot in ComponentTreeNav. Keep in sync with
 * PATHS_WITH_CONTENT in pathsWithContent.js.
 */
export const COMPONENT_DOC_ROUTES = new Set([
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
 * @param {NavNode[]} nodes
 * @param {(leaf: NavLeaf) => void} visit
 */
function walkLeaves(nodes, visit) {
  for (const node of nodes) {
    if ('path' in node && node.path) {
      visit(/** @type {NavLeaf} */ (node))
    } else if ('children' in node && node.children) {
      walkLeaves(node.children, visit)
    }
  }
}

/** All /components/:slug slugs for placeholder routes */
export function getAllComponentSlugs() {
  const slugs = new Set()
  walkLeaves(COMPONENTS_NAV_TREE, (leaf) => {
    const m = leaf.path.match(/^\/components\/(.+)$/)
    if (m) slugs.add(m[1])
  })
  return [...slugs]
}

/**
 * @param {string} pathname
 * @param {NavNode[]} nodes
 * @param {string[]} acc
 * @returns {string[] | null}
 */
export function findOpenGroupIds(pathname, nodes, acc = []) {
  for (const node of nodes) {
    if ('path' in node && node.path === pathname) {
      return acc
    }
    if ('children' in node && node.children) {
      const next = node.id ? [...acc, node.id] : acc
      const found = findOpenGroupIds(pathname, node.children, next)
      if (found !== null) return found
    }
  }
  return null
}

/**
 * @param {NavNode[]} nodes
 * @param {string} query
 * @returns {NavNode[]}
 */
export function filterComponentNavTree(nodes, query) {
  const q = query.trim().toLowerCase()
  if (!q) return nodes
  const out = []
  for (const node of nodes) {
    if ('path' in node && node.path) {
      if (node.label.toLowerCase().includes(q)) out.push(node)
    } else if ('children' in node && node.children) {
      const filteredChildren = filterComponentNavTree(node.children, query)
      if (filteredChildren.length > 0) {
        out.push({ ...node, children: filteredChildren })
      } else if (node.label.toLowerCase().includes(q)) {
        out.push(node)
      }
    }
  }
  return out
}
