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
      { path: '/components/button/overview', label: 'Button' },
      { path: '/components/button-group/overview', label: 'Button Group' },
      { path: '/components/dropdown-button/overview', label: 'Dropdown Button' },
      { path: '/components/dropdown-icon-button/overview', label: 'Dropdown Icon Button' },
      { path: '/components/fab-button/overview', label: 'FAB' },
      { path: '/components/icon-button/overview', label: 'Icon Button' },
      { path: '/components/segmented-control/overview', label: 'Segmented Control' },
      { path: '/components/split-button/overview', label: 'Split Button' },
      { path: '/components/split-icon-button/overview', label: 'Split Icon Button' },
      { path: '/components/toolbar/overview', label: 'Toolbar' },
    ]),
  },
  {
    id: 'data-display',
    label: 'Data Display',
    children: sortLeaves([
      { path: '/components/accordion/overview', label: 'Accordion' },
      { path: '/components/cards/overview', label: 'Card' },
      { path: '/components/carousel-view/overview', label: 'Carousel View' },
      { path: '/components/code-block/overview', label: 'Code (Block / Editor)' },
      { path: '/components/comments/overview', label: 'Comments' },
      { path: '/components/grid/overview', label: 'Grid' },
      { path: '/components/media-player/overview', label: 'Media Player' },
      { path: '/components/pdf-viewer/overview', label: 'PDF Viewer' },
      { path: '/components/tree-widget/overview', label: 'Tree Widget' },
    ]),
  },
  {
    id: 'feedback',
    label: 'Feedback',
    children: sortLeaves([
      { path: '/components/badge/overview', label: 'Badge' },
      { path: '/components/banner-alerts/overview', label: 'Banner Alert' },
      { path: '/components/counter/overview', label: 'Counter' },
      { path: '/components/email-notification/overview', label: 'Email Notification' },
      { path: '/components/empty-state/overview', label: 'Empty State' },
      { path: '/components/inline-alert/overview', label: 'Message Alert' },
      { path: '/components/notifications/overview', label: 'Notifications' },
      { path: '/components/skeleton-loader/overview', label: 'Skeleton Loader' },
      { path: '/components/spinner/overview', label: 'Spinner' },
      { path: '/components/toast/overview', label: 'Toast' },
    ]),
  },
  {
    id: 'inputs',
    label: 'Inputs',
    children: sortLeaves([
      { path: '/components/checkbox/overview', label: 'Checkbox' },
      { path: '/components/checkbox-group/overview', label: 'Checkbox Group' },
      { path: '/components/chip/overview', label: 'Chips' },
      { path: '/components/color-input/overview', label: 'Color Input' },
      { path: '/components/color-picker/overview', label: 'Color Picker' },
      { path: '/components/combobox/overview', label: 'Combobox' },
      { path: '/components/date-picker/overview', label: 'Date Picker' },
      { path: '/components/date-range-picker/overview', label: 'Date Range Picker' },
      { path: '/components/date-time-picker/overview', label: 'Date Time Picker' },
      { path: '/components/dropzone/overview', label: 'Dropzone' },
      { path: '/components/dropdown-tree/overview', label: 'Dropdown Tree' },
      { path: '/components/text-editor/overview', label: 'Editor' },
      { path: '/components/file-input/overview', label: 'File Input' },
      { path: '/components/listbox/overview', label: 'Listbox' },
      { path: '/components/multi-select/overview', label: 'Multi-Select' },
      { path: '/components/number-input/overview', label: 'Number Input' },
      { path: '/components/otp-input/overview', label: 'OTP Input' },
      { path: '/components/property-filter/overview', label: 'Property Filter' },
      { path: '/components/radio/overview', label: 'Radio' },
      { path: '/components/radio-group/overview', label: 'Radio Group' },
      { path: '/components/search/overview', label: 'Search' },
      { path: '/components/select-dropdown/overview', label: 'Select Dropdown' },
      { path: '/components/slider/overview', label: 'Slider' },
      { path: '/components/switch/overview', label: 'Switch' },
      { path: '/components/textarea/overview', label: 'Textarea' },
      { path: '/components/textbox/overview', label: 'Textbox' },
      { path: '/components/time-picker/overview', label: 'Time Picker' },
      { path: '/components/upload/overview', label: 'Upload' },
    ]),
  },
  {
    id: 'navigation',
    label: 'Navigation',
    children: sortLeaves([
      { path: '/components/breadcrumb/overview', label: 'Breadcrumb' },
      { path: '/components/button-link/overview', label: 'Button Link' },
      { path: '/components/icon-button-link/overview', label: 'Icon Link' },
      { path: '/components/link/overview', label: 'Link' },
      { path: '/components/pagination/overview', label: 'Pagination' },
      { path: '/components/stepper/overview', label: 'Stepper' },
      { path: '/components/tabstrip/overview', label: 'Tabs' },
      { path: '/components/tree/overview', label: 'Tree' },
      { path: '/components/wizard/overview', label: 'Wizard' },
    ]),
  },
  {
    id: 'overlays',
    label: 'Overlays',
    children: sortLeaves([
      { path: '/components/action-menu/overview', label: 'Action Menu' },
      { path: '/components/alert-dialog/overview', label: 'Alert Dialog' },
      { path: '/components/calendar/overview', label: 'Calendar' },
      { path: '/components/calendar-range/overview', label: 'Calendar Range' },
      { path: '/components/drawer/overview', label: 'Drawer' },
      { path: '/components/help-panel/overview', label: 'Help Panel' },
      { path: '/components/hybrid-popover/overview', label: 'Hybrid Popover' },
      { path: '/components/list/overview', label: 'List View' },
      { path: '/components/backdrop/overview', label: 'Mask Overlay' },
      { path: '/components/my-profile/overview', label: 'My Profile' },
      { path: '/components/notifications-panel/overview', label: 'Notifications Panel' },
      { path: '/components/popover/overview', label: 'Popover' },
      { path: '/components/side-panel/overview', label: 'Side Panel' },
      { path: '/components/time/overview', label: 'Time' },
      { path: '/components/tooltip/overview', label: 'Tooltip' },
      { path: '/components/overlay-window/overview', label: 'Window' },
    ]),
  },
  {
    id: 'utilities',
    label: 'Utilities',
    children: sortLeaves([
      { path: '/components/avatar/overview', label: 'Avatar' },
      { path: '/components/avatar-group/overview', label: 'Avatar Group' },
      { path: '/components/label/overview', label: 'Form Label' },
      { path: '/components/indicators/overview', label: 'Indicator' },
      { path: '/components/scroll-bar/overview', label: 'Scrollbar' },
      { path: '/components/splitter/overview', label: 'Splitter' },
    ]),
  },
]

/**
 * Routes implemented as real doc pages (not placeholder stubs).
 * Drives the green dot in ComponentTreeNav. Keep in sync with PATHS_WITH_CONTENT in pathsWithContent.js.
 */
export const COMPONENT_DOC_ROUTES = new Set([
  // Actions
  '/components/button/overview',
  '/components/icon-button/overview',
  '/components/button-group/overview',
  '/components/dropdown-button/overview',
  '/components/dropdown-icon-button/overview',
  '/components/fab-button/overview',
  '/components/segmented-control/overview',
  '/components/split-button/overview',
  '/components/split-icon-button/overview',
  // Navigation
  '/components/link/overview',
  '/components/button-link/overview',
  '/components/icon-button-link/overview',
  '/components/tabstrip/overview',
  '/components/breadcrumb/overview',
  // Inputs
  '/components/textbox/overview',
  '/components/textarea/overview',
  '/components/number-input/overview',
  '/components/search/overview',
  '/components/checkbox/overview',
  '/components/checkbox-group/overview',
  '/components/radio/overview',
  '/components/radio-group/overview',
  '/components/switch/overview',
  '/components/select-dropdown/overview',
  '/components/combobox/overview',
  '/components/listbox/overview',
  // Overlays
  '/components/popover/overview',
  '/components/hybrid-popover/overview',
  '/components/action-menu/overview',
  '/components/tooltip/overview',
  '/components/alert-dialog/overview',
  '/components/drawer/overview',
  '/components/side-panel/overview',
  // Feedback
  '/components/badge/overview',
  '/components/banner-alerts/overview',
  '/components/inline-alert/overview',
  '/components/toast/overview',
  // Inputs (additional)
  '/components/chip/overview',
  '/components/label/overview',
  // Data display
  '/components/cards/overview',
  '/components/accordion/overview',
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
    const m = leaf.path.match(/^\/components\/([^/]+)(?:\/overview)?$/)
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
