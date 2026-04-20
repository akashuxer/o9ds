/**
 * Component catalog: sidebar + Components overview page.
 * Leaf nodes use /components/:slug (kebab-case).
 * Top-level groups only (no nested subcategories). Categories A–Z; items A–Z within each.
 */

/** @typedef {{ path: string, label: string }} NavLeaf */
/** @typedef {{ id: string, label: string, children: NavLeaf[] }} NavGroup */

/** @param {NavLeaf[]} leaves */
function sortLeaves(leaves) {
  return [...leaves].sort((a, b) =>
    a.label.localeCompare(b.label, 'en', { sensitivity: 'base', numeric: true })
  )
}

/** @type {NavGroup[]} — category order A–Z by label */
export const COMPONENTS_NAV_TREE = [
  {
    id: 'buttons-actions',
    label: 'Actions',
    children: sortLeaves([
      { path: '/components/button', label: 'Button' },
      { path: '/components/button-group', label: 'Button Group' },
      { path: '/components/dropdown-button', label: 'Dropdown Button' },
      { path: '/components/dropdown-icon-button', label: 'Dropdown Icon Button' },
      { path: '/components/fab-button', label: 'FAB' },
      { path: '/components/icon-button', label: 'Icon Button' },
      { path: '/components/split-button', label: 'Split Button' },
      { path: '/components/split-icon-button', label: 'Split Icon Button' },
      { path: '/components/toolbar', label: 'Toolbar' },
    ]),
  },
  {
    id: 'data-display',
    label: 'Data Display',
    children: sortLeaves([
      { path: '/components/accordion', label: 'Accordion' },
      { path: '/components/cards', label: 'Card' },
      { path: '/components/carousel-view', label: 'Carousel View' },
      { path: '/components/code-block', label: 'Code (Block / Editor)' },
      { path: '/components/comments', label: 'Comments' },
      { path: '/components/grid', label: 'Grid' },
      { path: '/components/media-player', label: 'Media Player' },
      { path: '/components/pdf-viewer', label: 'PDF Viewer' },
      { path: '/components/tree-widget', label: 'Tree Widget' },
    ]),
  },
  {
    id: 'feedback',
    label: 'Feedback',
    children: sortLeaves([
      { path: '/components/badge', label: 'Badge Alert' },
      { path: '/components/banner-alerts', label: 'Banner Alert' },
      { path: '/components/counter', label: 'Counter' },
      { path: '/components/email-notification', label: 'Email Notification' },
      { path: '/components/empty-state', label: 'Empty State' },
      { path: '/components/inline-alert', label: 'MessageAlert' },
      { path: '/components/notifications', label: 'Notifications' },
      { path: '/components/skeleton-loader', label: 'Skeleton Loader' },
      { path: '/components/spinner', label: 'Spinner' },
      { path: '/components/toast', label: 'Toast' },
    ]),
  },
  {
    id: 'inputs',
    label: 'Inputs',
    children: sortLeaves([
      { path: '/components/checkbox', label: 'Checkbox' },
      { path: '/components/checkbox-group', label: 'Checkbox Group' },
      { path: '/components/chip', label: 'Chips' },
      { path: '/components/color-input', label: 'Color Input' },
      { path: '/components/color-picker', label: 'Color Picker' },
      { path: '/components/combobox', label: 'Combobox' },
      { path: '/components/date-picker', label: 'Date Picker' },
      { path: '/components/date-range-picker', label: 'Date Range Picker' },
      { path: '/components/date-time-picker', label: 'Date Time Picker' },
      { path: '/components/dropzone', label: 'Dropzone' },
      { path: '/components/dropdown-tree', label: 'Dropdown Tree' },
      { path: '/components/text-editor', label: 'Editor' },
      { path: '/components/file-input', label: 'File Input' },
      { path: '/components/listbox', label: 'Listbox' },
      { path: '/components/multi-select', label: 'Multi-Select' },
      { path: '/components/number-input', label: 'Number Input' },
      { path: '/components/otp-input', label: 'OTP Input' },
      { path: '/components/property-filter', label: 'Property Filter' },
      { path: '/components/radio', label: 'Radio' },
      { path: '/components/radio-group', label: 'Radio Group' },
      { path: '/components/search', label: 'Search' },
      { path: '/components/select-dropdown', label: 'Select Dropdown' },
      { path: '/components/slider', label: 'Slider' },
      { path: '/components/switch', label: 'Switch' },
      { path: '/components/textarea', label: 'Textarea' },
      { path: '/components/textbox', label: 'Textbox' },
      { path: '/components/time-picker', label: 'Time Picker' },
      { path: '/components/upload', label: 'Upload' },
    ]),
  },
  {
    id: 'navigation',
    label: 'Navigation',
    children: sortLeaves([
      { path: '/components/breadcrumb', label: 'Breadcrumb' },
      { path: '/components/button-link', label: 'Button Link' },
      { path: '/components/icon-button-link', label: 'Icon Link' },
      { path: '/components/link', label: 'Link' },
      { path: '/components/pagination', label: 'Pagination' },
      { path: '/components/stepper', label: 'Stepper' },
      { path: '/components/tabstrip', label: 'Tabs' },
      { path: '/components/tree', label: 'Tree' },
      { path: '/components/wizard', label: 'Wizard' },
    ]),
  },
  {
    id: 'overlays',
    label: 'Overlays',
    children: sortLeaves([
      { path: '/components/action-menu', label: 'Action Menu' },
      { path: '/components/alert-dialog', label: 'Alert Dialog' },
      { path: '/components/calendar', label: 'Calendar' },
      { path: '/components/calendar-range', label: 'Calendar Range' },
      { path: '/components/drawer', label: 'Drawer' },
      { path: '/components/help-panel', label: 'Help Panel' },
      { path: '/components/hybrid-popover', label: 'Hybrid Popover' },
      { path: '/components/list', label: 'List View' },
      { path: '/components/backdrop', label: 'Mask Overlay' },
      { path: '/components/my-profile', label: 'My Profile' },
      { path: '/components/notifications-panel', label: 'Notifications Panel' },
      { path: '/components/popover', label: 'Popover' },
      { path: '/components/side-panel', label: 'Side Panel' },
      { path: '/components/time', label: 'Time' },
      { path: '/components/tooltip', label: 'Tooltip' },
      { path: '/components/overlay-window', label: 'Window' },
    ]),
  },
  {
    id: 'utilities',
    label: 'Utilities',
    children: sortLeaves([
      { path: '/components/avatar', label: 'Avatar' },
      { path: '/components/avatar-group', label: 'Avatar Group' },
      { path: '/components/label', label: 'Form Label' },
      { path: '/components/indicators', label: 'Indicator' },
      { path: '/components/scroll-bar', label: 'Scrollbar' },
      { path: '/components/splitter', label: 'Splitter' },
    ]),
  },
]

/**
 * Routes implemented as real doc pages (not placeholder stubs).
 * Drives the green dot in ComponentTreeNav. Keep in sync with PATHS_WITH_CONTENT in pathsWithContent.js.
 */
export const COMPONENT_DOC_ROUTES = new Set([
  // Actions
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
  // Inputs
  '/components/textbox',
  '/components/textarea',
  '/components/number-input',
  '/components/search',
  '/components/checkbox',
  '/components/checkbox-group',
  '/components/radio',
  '/components/radio-group',
  '/components/switch',
  '/components/select-dropdown',
  '/components/combobox',
  '/components/listbox',
  // Overlays
  '/components/popover',
  '/components/hybrid-popover',
  '/components/action-menu',
  '/components/tooltip',
  // Feedback
  '/components/badge',
  '/components/toast',
  // Data display
  '/components/cards',
])

/**
 * @param {NavLeaf[]} nodes
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
 * @param {NavGroup[]} nodes
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
 * @param {NavGroup[]} nodes
 * @param {string} query
 * @returns {NavGroup[]}
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
