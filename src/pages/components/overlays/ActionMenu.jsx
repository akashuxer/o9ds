import { useState, useMemo } from 'react'
import { useTheme } from '../../../context/ThemeContext'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocTabs from '../../../LayoutComponents/DocTabs'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTable from '../../../LayoutComponents/DocTable'
import GrayBgCard from '../../../LayoutComponents/GrayBgCard'
import WhiteBgCard from '../../../LayoutComponents/WhiteBgCard'
import { getComponentPageDescription } from '../../../data/componentPageMeta'

const tabs = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const PROPS = [
  { prop: 'items', type: "MenuItemData[] | ListGroup<MenuItemData>[]", default: '—', required: 'Yes', desc: 'Menu items as a flat array or array of groups' },
  { prop: 'trigger', type: 'ReactElement', default: '—', required: 'Yes', desc: 'Element that opens the menu on click' },
  { prop: 'size', type: "'sm' | 'md'", default: "'md'", required: 'No', desc: 'Item height. sm: 24px, md: 32px' },
  { prop: 'loading', type: 'boolean', default: 'false', required: 'No', desc: 'Shows Pattern B skeleton; blocks interaction' },
  { prop: 'filterable', type: 'boolean', default: 'false', required: 'No', desc: 'Shows a search input above the item list' },
  { prop: 'placement', type: 'Placement', default: "'bottom-start'", required: 'No', desc: 'Preferred placement relative to the trigger' },
  { prop: 'maxHeight', type: 'string', default: '—', required: 'No', desc: 'CSS max-height for the scrollable menu panel' },
  { prop: 'showGroupDividers', type: 'boolean', default: 'true', required: 'No', desc: 'Renders <hr> dividers between item groups' },
  { prop: 'trailingActionsVisibility', type: "'always' | 'hover'", default: "'always'", required: 'No', desc: 'When trailing actions are visible' },
  { prop: 'submenuTrigger', type: "'hover' | 'click'", default: "'hover'", required: 'No', desc: 'How submenus are triggered (hover with 200ms delay or click)' },
  { prop: 'closeOnSelect', type: 'boolean', default: 'true', required: 'No', desc: 'Whether the menu closes after item selection' },
  { prop: 'open', type: 'boolean', default: '—', required: 'No', desc: 'Controlled open state' },
  { prop: 'defaultOpen', type: 'boolean', default: 'false', required: 'No', desc: 'Initial open state (uncontrolled)' },
  { prop: 'disabled', type: 'boolean', default: 'false', required: 'No', desc: 'Disables the trigger; prevents the menu from opening' },
  { prop: 'onOpen', type: '() => boolean | void', default: '—', required: 'No', desc: 'Called before opening. Return false to cancel' },
  { prop: 'onClose', type: '() => boolean | void', default: '—', required: 'No', desc: 'Called before closing. Return false to cancel' },
  { prop: 'onSelect', type: '(item, index) => boolean | void', default: '—', required: 'No', desc: 'Called on item activation. Return false to prevent close' },
  { prop: 'onOpenChange', type: '(open: boolean) => void', default: '—', required: 'No', desc: 'Called after open state changes' },
]

const MENU_ITEM_FIELDS = [
  { field: 'id', type: 'string', required: 'Yes', desc: 'Unique identifier for the item' },
  { field: 'label', type: 'string', required: 'Yes', desc: 'Primary label text' },
  { field: 'secondaryLabel', type: 'string', required: 'No', desc: 'Secondary description shown below the label' },
  { field: 'icon', type: 'string', required: 'No', desc: 'Leading icon name (without o9con- prefix)' },
  { field: 'avatar', type: 'string', required: 'No', desc: 'Avatar image URL in the leading zone' },
  { field: 'disabled', type: 'boolean', required: 'No', desc: 'Disables the item; sets aria-disabled' },
  { field: 'shortcut', type: 'string', required: 'No', desc: "Keyboard shortcut hint (e.g. 'Ctrl+C'). Display only" },
  { field: 'destructive', type: 'boolean', required: 'No', desc: 'Applies red text and icon styling' },
  { field: 'checked', type: 'boolean', required: 'No', desc: 'Renders item as menuitemcheckbox with aria-checked' },
  { field: 'submenu', type: 'MenuItemData[]', required: 'No', desc: 'Nested submenu items' },
  { field: 'trailingActions', type: 'MenuTrailingAction[]', required: 'No', desc: 'Icon buttons in the trailing zone' },
  { field: 'inlinePopover', type: 'MenuInlinePopoverConfig', required: 'No', desc: 'Inline panel that opens on item activation' },
]

const SIZES = [
  { size: 'sm', height: '24px', font: '12px', icon: '16px' },
  { size: 'md', height: '32px', font: '14px', icon: '20px' },
]

const KEYBOARD = [
  { key: 'Enter / Space', behavior: 'Activate the focused item or open a submenu' },
  { key: 'ArrowDown', behavior: 'Move focus to the next item' },
  { key: 'ArrowUp', behavior: 'Move focus to the previous item' },
  { key: 'Home', behavior: 'Move focus to the first item' },
  { key: 'End', behavior: 'Move focus to the last item' },
  { key: 'ArrowRight', behavior: 'Open a submenu or move focus to the first trailing action' },
  { key: 'ArrowLeft', behavior: 'Close a submenu or return focus from trailing action to item' },
  { key: 'Escape', behavior: 'Close the menu (or close an inline panel first if one is open)' },
  { key: 'Printable characters', behavior: 'Type-ahead: focus the next item whose label starts with the typed character' },
  { key: 'Tab', behavior: 'Close the menu and move focus to the next focusable element' },
]

const ARIA_ATTRS = [
  { attr: 'aria-haspopup="menu"', where: 'Trigger element', when: 'Indicates the element opens a menu' },
  { attr: 'aria-expanded', where: 'Trigger element', when: '"true" when menu is open, "false" when closed' },
  { attr: 'role="menu"', where: 'Panel element', when: 'Identifies the overlay as a menu widget' },
  { attr: 'role="menuitem"', where: 'Standard item', when: 'Identifies a regular menu item' },
  { attr: 'role="menuitemcheckbox"', where: 'Checkable item', when: 'Identifies a toggle-able menu item' },
  { attr: 'aria-checked', where: 'Checkable item', when: '"true" when checked, "false" when unchecked' },
  { attr: 'aria-disabled', where: 'Disabled item', when: 'Marks item as disabled while keeping it in the accessibility tree' },
  { attr: 'aria-busy', where: 'Panel element', when: 'Set to "true" during loading skeleton state' },
  { attr: 'aria-label', where: 'Trailing action buttons', when: 'Required; set via trailingActions[n].ariaLabel' },
  { attr: 'aria-controls', where: 'Trigger element', when: 'References the menu panel id' },
]

const JS_METHODS = [
  { method: 'O9ActionMenu.initialize(el, options)', returns: 'O9ActionMenu', desc: 'Factory — initializes the menu on a trigger element' },
  { method: 'open()', returns: 'void', desc: 'Programmatically open the menu' },
  { method: 'close()', returns: 'void', desc: 'Programmatically close the menu' },
  { method: 'isOpen()', returns: 'boolean', desc: 'Returns whether the menu is currently open' },
  { method: 'toggle(force?)', returns: 'void', desc: 'Toggle open/close. Pass true to force open, false to force close' },
  { method: 'updateItems(items)', returns: 'void', desc: 'Replace the current item list and re-render' },
  { method: 'setLoading(loading)', returns: 'void', desc: 'Toggle the loading skeleton' },
  { method: 'disabled(state?)', returns: 'boolean | void', desc: 'Get or set disabled state on the trigger' },
  { method: 'destroy()', returns: 'void', desc: 'Remove event listeners, detach panel, restore trigger' },
]

const JS_EVENTS = [
  { event: 'action-menu:open', payload: '—', desc: 'Fires before the menu opens. Cancelable via event.preventDefault()' },
  { event: 'action-menu:close', payload: '—', desc: 'Fires before the menu closes. Cancelable via event.preventDefault()' },
  { event: 'action-menu:select', payload: '{ item, index }', desc: 'Fires on item activation. Cancelable to keep the menu open' },
]

export default function ActionMenu() {
  const [activeTab, setActiveTab] = useState('Overview')
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const onThisPageSections = useMemo(() => {
    if (activeTab === 'Overview') {
      return [
        { id: 'overview-purpose', label: 'Purpose' },
        { id: 'overview-definition', label: 'Definition & role' },
        { id: 'overview-anatomy', label: 'Anatomy' },
        { id: 'overview-variants', label: 'Item types' },
        { id: 'overview-states', label: 'States' },
        { id: 'overview-naming', label: 'Naming' },
        { id: 'overview-dos-donts', label: 'Dos & don\u2019ts' },
      ]
    }
    if (activeTab === 'Usage') {
      return [
        { id: 'usage-when', label: 'When to use' },
        { id: 'usage-when-not', label: 'When not to use' },
        { id: 'usage-scenarios', label: 'Scenarios' },
        { id: 'usage-best-practices', label: 'Best practices' },
        { id: 'usage-related', label: 'Related components' },
      ]
    }
    if (activeTab === 'Code/APIs') {
      return [
        { id: 'code-props', label: 'Props' },
        { id: 'code-menu-item', label: 'MenuItemData' },
        { id: 'code-scenarios', label: 'Implementation scenarios' },
        { id: 'code-js-methods', label: 'JS methods' },
        { id: 'code-js-events', label: 'JS custom events' },
        { id: 'code-css', label: 'CSS variables' },
        { id: 'code-size', label: 'Size reference' },
      ]
    }
    if (activeTab === 'Accessibility') {
      return [
        { id: 'a11y-intro', label: 'Overview' },
        { id: 'a11y-keyboard', label: 'Keyboard interaction' },
        { id: 'a11y-focus', label: 'Focus management' },
        { id: 'a11y-aria', label: 'ARIA attributes' },
        { id: 'a11y-disabled', label: 'Disabled items' },
        { id: 'a11y-loading', label: 'Loading state' },
        { id: 'a11y-notes', label: 'Accessibility notes' },
      ]
    }
    return []
  }, [activeTab])

  return (
    <PageWithToc sections={onThisPageSections}>
      <div className="max-w-4xl space-y-8">
        <section>
          <h1 className="group flex items-center gap-2 text-[30px] font-bold text-o9ds-light-primary dark:text-white mb-4">
            <span className="flex h-8 w-8 items-center justify-center bg-o9ds-light-surface dark:bg-neutral-700" data-o9ds-avatar data-o9ds-avatar-header>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </span>
            Action Menu
          </h1>
          <p className="text-lg text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed mb-2">
            {getComponentPageDescription('action-menu')}
          </p>
          <p className="text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed">
            Overlay menu of actionable items triggered from a button or icon button. Supports flat and grouped items with optional headers and dividers, trailing actions, keyboard shortcuts, checkable items, submenus, inline popovers, type-ahead search, and an optional filter input.
          </p>
          <DocTabs tabs={tabs} activeTab={activeTab} onSelect={setActiveTab} />
        </section>

        {activeTab === 'Overview' && (
          <div className="space-y-12">
            <section id="overview-purpose" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Purpose</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The Action Menu provides a contextual list of operations that can be performed on an entity or within a workflow. It keeps the interface clean by hiding secondary and tertiary actions behind a discoverable trigger, surfacing them only when the user needs them.
              </p>
            </section>

            <section id="overview-definition" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Definition & role</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                An <strong className="text-o9ds-light-primary dark:text-white font-medium">action menu</strong> is an overlay that appears on activation of a trigger element (button or icon button). It presents a vertical list of actionable items — each item performs an operation when activated. Unlike a dropdown select, the menu does not represent a value selection; it triggers side effects.
              </p>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Items extend <strong className="text-o9ds-light-primary dark:text-white font-medium">ListItemBase</strong> from the shared list system, gaining consistent sizing, icon placement, and disabled-state handling. Menu-specific extensions add shortcuts, checkmarks, submenus, trailing actions, and inline popovers.
              </p>
            </section>

            <section id="overview-anatomy" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Anatomy</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The action menu combines a <strong className="text-o9ds-light-primary dark:text-white font-medium">trigger</strong> (typically a button or icon button), a <strong className="text-o9ds-light-primary dark:text-white font-medium">panel</strong> (the overlay container), and one or more <strong className="text-o9ds-light-primary dark:text-white font-medium">menu items</strong> arranged in a scrollable list.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">Trigger</strong> — button or icon button; receives <code className="px-1 py-0.5" data-o9ds-inline-code>aria-haspopup="menu"</code> and <code className="px-1 py-0.5" data-o9ds-inline-code>aria-expanded</code>.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">Panel</strong> — overlay container with <code className="px-1 py-0.5" data-o9ds-inline-code>role="menu"</code>; holds the scrollable list area, optional search filter, and optional inline panel.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">Menu item</strong> — each row has an optional leading icon or avatar, a primary label, optional secondary label, and a trailing zone for shortcuts, checkmarks, submenu chevrons, or action buttons.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">Group header & divider</strong> — visual separators for grouped items; headers label each group.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">Inline panel</strong> — a sub-panel that slides over the menu content when an item with an inline popover config is activated.
                </li>
              </ul>
            </section>

            <section id="overview-variants" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Item types</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed mb-4">
                Action menu items adapt their appearance and behavior based on their configuration.
              </p>
              <ul className="space-y-3 text-o9ds-light-secondary dark:text-neutral-400">
                <li><strong className="text-o9ds-light-primary dark:text-white">Standard</strong> — a simple actionable item with an optional icon and shortcut hint.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white">Checkable</strong> — a toggle item rendered as <code className="px-1 py-0.5" data-o9ds-inline-code>menuitemcheckbox</code> with a check indicator.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white">Destructive</strong> — a dangerous action styled with red text and icon color.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white">Submenu</strong> — an item that opens a nested menu on hover or activation.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white">Multi-line</strong> — 40px height with primary and secondary labels stacked vertically.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white">With trailing actions</strong> — icon buttons in the trailing zone for per-item secondary operations.</li>
              </ul>
            </section>

            <section id="overview-states" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">States</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Closed</strong> — the menu panel is not rendered; the trigger has <code className="px-1 py-0.5" data-o9ds-inline-code>aria-expanded="false"</code>.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Open</strong> — the panel is visible and focus moves to the first non-disabled item.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Item hover</strong> — background change on desktop (scoped to <code className="px-1 py-0.5" data-o9ds-inline-code>.no-touch</code>).</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Item active</strong> — highlighted via keyboard navigation; 2px left border indicator.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Item disabled</strong> — reduced opacity, pointer-events blocked; stays in the DOM with <code className="px-1 py-0.5" data-o9ds-inline-code>aria-disabled="true"</code>.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Loading</strong> — Pattern B skeleton shimmer; items hidden; <code className="px-1 py-0.5" data-o9ds-inline-code>aria-busy="true"</code>.</li>
              </ul>
            </section>

            <section id="overview-naming" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Naming guidance</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Use concise, action-oriented labels for menu items. Start with a verb when possible — "Delete row", "Export as CSV", "Pin to top". For checkable items, use the setting name rather than a verb — "Auto Save", "Word Wrap".
              </p>
            </section>

            <section id="overview-dos-donts" className="scroll-mt-24">
              <div className="grid gap-4 sm:grid-cols-2">
                <GrayBgCard title="Do" bullets={['Use for actions, not navigation or value selection', 'Group related items with headers and dividers', 'Pair destructive items with confirmation when irreversible', 'Use shortcut hints to surface keyboard shortcuts', 'Keep menus short; use filtering for long lists']} />
                <WhiteBgCard title="Don't" bullets={['Use as a dropdown select — use Dropdown or Select instead', 'Nest more than two levels of submenus', 'Combine submenu and trailing actions on the same item', 'Leave destructive actions unstyled — use the destructive flag', 'Open the menu programmatically without user initiation']} />
              </div>
            </section>
          </div>
        )}

        {activeTab === 'Usage' && (
          <div className="space-y-12">
            <section id="usage-when" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Flat list</strong> — a short set of related actions on a single entity (cut, copy, paste).</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Grouped list</strong> — related actions that benefit from visual separation and optional headers.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Checkable items</strong> — persisted toggle preferences (auto-save, word-wrap) without a separate dialog.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Submenus</strong> — hierarchical navigation where secondary options depend on a parent choice.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Filterable</strong> — long lists where the user needs to locate an item by typing.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Trailing actions</strong> — per-item secondary actions (pin, delete, open) without cluttering the label.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Destructive items</strong> — irreversible actions that need distinct visual treatment.</li>
              </ul>
            </section>

            <section id="usage-when-not" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When not to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Selecting a value from a list — use a <strong className="text-o9ds-light-primary dark:text-white font-medium">Dropdown</strong> or <strong className="text-o9ds-light-primary dark:text-white font-medium">Select</strong> component.</li>
                <li>Showing rich content, forms, or interactive panels — use a <strong className="text-o9ds-light-primary dark:text-white font-medium">Popover</strong>.</li>
                <li>Navigating to a different page — use links or a navigation component.</li>
                <li>Right-click context menus — the Context Menu shares the same panel component but has a different trigger model.</li>
              </ul>
            </section>

            <section id="usage-scenarios" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Scenarios</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Toolbar overflow</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Place overflow actions behind a "More" icon button. Keep the most-used actions visible in the toolbar; group secondary actions in the menu.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Row-level actions</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Attach a compact action menu to each row in a table or list. Use trailing actions for the most common operation (e.g. delete) and the menu for the rest.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Preference toggles</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Use checkable items for quick settings like auto-save or column visibility. Set <code className="px-1 py-0.5" data-o9ds-inline-code>closeOnSelect={'{false}'}</code> so users can toggle multiple items without re-opening the menu.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Async item loading</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    When menu items are fetched asynchronously, use the loading prop to show a skeleton while data is being retrieved. Transition to items once the response arrives.
                  </p>
                </div>
              </div>
            </section>

            <section id="usage-best-practices" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Best practices</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Keep menus focused — 3 to 10 items is ideal; use filtering or submenus for larger sets.</li>
                <li>Use group headers and dividers to create logical sections when mixing different action categories.</li>
                <li>Place destructive actions at the bottom of the menu, visually separated by a divider.</li>
                <li>Use keyboard shortcut hints to train power users without adding visual noise to the main UI.</li>
                <li>Prefer <code className="px-1 py-0.5" data-o9ds-inline-code>trailingActionsVisibility="hover"</code> in dense interfaces to reduce visual clutter.</li>
              </ul>
            </section>

            <section id="usage-related" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Related components</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Popover</strong> — generic overlay for non-menu content such as forms, rich text, or custom panels.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Dropdown Button</strong> — a single button that opens a list of selection options rather than actions.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Icon Button</strong> — commonly used as the trigger for a compact action menu.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Context Menu</strong> — action menu triggered by right-click rather than a button (shares the same panel component).</li>
              </ul>
            </section>
          </div>
        )}

        {activeTab === 'Code/APIs' && (
          <div className="space-y-12">
            <section id="code-props" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Component API</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
                O9ActionMenu accepts standard <code className="px-1 py-0.5" data-o9ds-inline-code>HTMLDivElement</code> attributes via spread.
              </p>
              <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Prop</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Type</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Default</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Required</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PROPS.map((row) => (
                      <tr key={row.prop} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{row.prop}</td>
                        <td className="py-2 px-3 font-mono text-o9ds-light-secondary dark:text-neutral-400">{row.type}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.default}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.required}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="code-menu-item" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">MenuItemData</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
                Extends <code className="px-1 py-0.5" data-o9ds-inline-code>ListItemBase</code> from <code className="px-1 py-0.5" data-o9ds-inline-code>@o9ds/core/list</code> with menu-specific fields.
              </p>
              <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Field</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Type</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Required</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MENU_ITEM_FIELDS.map((row) => (
                      <tr key={row.field} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{row.field}</td>
                        <td className="py-2 px-3 font-mono text-o9ds-light-secondary dark:text-neutral-400">{row.type}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.required}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="code-scenarios" className="scroll-mt-24 space-y-10">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Implementation scenarios</h2>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Basic flat list — React</h3>
                <CodeBlock
                  code={`import { O9ActionMenu, O9Button } from '@o9ds/react';

<O9ActionMenu
  items={[
    { id: '1', label: 'Cut', icon: 'content-cut', shortcut: 'Ctrl+X' },
    { id: '2', label: 'Copy', icon: 'content-copy', shortcut: 'Ctrl+C' },
    { id: '3', label: 'Paste', icon: 'content-paste', shortcut: 'Ctrl+V' },
  ]}
  trigger={<O9Button label="Edit" />}
  onSelect={(item) => console.log('Selected:', item.label)}
/>`}
                  label="React — flat list"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Grouped items — React</h3>
                <CodeBlock
                  code={`<O9ActionMenu
  items={[
    {
      id: 'edit',
      label: 'Edit',
      items: [
        { id: 'cut', label: 'Cut', shortcut: 'Ctrl+X' },
        { id: 'copy', label: 'Copy', shortcut: 'Ctrl+C' },
      ],
    },
    {
      id: 'view',
      label: 'View',
      items: [
        { id: 'zoom-in', label: 'Zoom In', shortcut: 'Ctrl++' },
        { id: 'zoom-out', label: 'Zoom Out', shortcut: 'Ctrl+-' },
      ],
    },
  ]}
  showGroupDividers
  trigger={<O9Button label="Menu" />}
/>`}
                  label="React — grouped"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Basic — HTML</h3>
                <CodeBlock
                  code={`<button
  class="o9ds-btn o9ds-btn--secondary o9ds-btn--md"
  type="button"
  aria-haspopup="menu"
  aria-expanded="false"
>
  <span class="o9ds-btn__lbl">Edit</span>
</button>

<div class="o9ds-action-menu o9ds-action-menu--md" role="menu" aria-label="Edit">
  <ul class="o9ds-action-menu__list">
    <li class="o9ds-action-menu__item" role="menuitem" tabindex="-1">
      <span class="o9ds-action-menu__ico o9con o9con-content-cut" aria-hidden="true"></span>
      <span class="o9ds-action-menu__lbl">Cut</span>
      <span class="o9ds-action-menu__shortcut" aria-hidden="true">Ctrl+X</span>
    </li>
    <li class="o9ds-action-menu__item" role="menuitem" tabindex="-1">
      <span class="o9ds-action-menu__ico o9con o9con-content-copy" aria-hidden="true"></span>
      <span class="o9ds-action-menu__lbl">Copy</span>
      <span class="o9ds-action-menu__shortcut" aria-hidden="true">Ctrl+C</span>
    </li>
  </ul>
</div>`}
                  label="HTML"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Checkable & destructive items — HTML</h3>
                <CodeBlock
                  code={`<!-- Checkable item -->
<li class="o9ds-action-menu__item" role="menuitemcheckbox" aria-checked="true" tabindex="-1">
  <span class="o9ds-action-menu__check o9con o9con-check" aria-hidden="true"></span>
  <span class="o9ds-action-menu__lbl">Auto Save</span>
</li>

<!-- Destructive item -->
<li class="o9ds-action-menu__item o9ds-action-menu__item--destructive" role="menuitem" tabindex="-1">
  <span class="o9ds-action-menu__ico o9con o9con-delete" aria-hidden="true"></span>
  <span class="o9ds-action-menu__lbl">Delete</span>
</li>`}
                  label="HTML — checkable & destructive"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Async loading — React</h3>
                <CodeBlock
                  code={`const [items, setItems] = React.useState([]);
const [loading, setLoading] = React.useState(false);

const handleOpen = async () => {
  setLoading(true);
  const result = await fetchMenuItems();
  setItems(result);
  setLoading(false);
};

<O9ActionMenu
  items={items}
  loading={loading}
  onOpen={handleOpen}
  trigger={<O9Button label="Actions" />}
/>`}
                  label="React — async loading"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Vanilla JS</h3>
                <CodeBlock
                  code={`import { O9ActionMenu } from '@o9ds/js';

const el = document.querySelector('#menu-trigger');
const menu = O9ActionMenu.initialize(el, {
  items: [
    { id: '1', label: 'Cut', icon: 'content-cut', shortcut: 'Ctrl+X' },
    { id: '2', label: 'Copy', icon: 'content-copy', shortcut: 'Ctrl+C' },
  ],
  onSelect: (item) => console.log('Selected:', item.label),
});

menu.open();
menu.close();
menu.toggle();
menu.updateItems([{ id: 'a', label: 'New Action' }]);
menu.destroy();`}
                  label="Vanilla JS"
                />
              </div>
            </section>

            <section id="code-js-methods" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">JS methods</h2>
              <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Method</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Returns</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {JS_METHODS.map((row) => (
                      <tr key={row.method} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{row.method}</td>
                        <td className="py-2 px-3 font-mono text-o9ds-light-secondary dark:text-neutral-400">{row.returns}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="code-js-events" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">JS custom events</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                Dispatched on the trigger DOM element. Listen with <code className="px-1 py-0.5" data-o9ds-inline-code>el.addEventListener()</code>.
              </p>
              <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Event</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Payload</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {JS_EVENTS.map((row) => (
                      <tr key={row.event} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{row.event}</td>
                        <td className="py-2 px-3 font-mono text-o9ds-light-secondary dark:text-neutral-400">{row.payload}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="code-css" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">CSS variables</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                Override on <code className="px-1 py-0.5" data-o9ds-inline-code>.o9ds-action-menu</code> or a parent to theme the menu.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { cat: 'Layout', vars: ['--o9ds-action-menu-min-width', '--o9ds-action-menu-max-width', '--o9ds-action-menu-item-height', '--o9ds-action-menu-item-padding-inline', '--o9ds-action-menu-item-gap', '--o9ds-action-menu-panel-padding-block'] },
                  { cat: 'Typography', vars: ['--o9ds-action-menu-font-size', '--o9ds-action-menu-font-weight', '--o9ds-action-menu-grp-hdr-font-size', '--o9ds-action-menu-shortcut-font-size'] },
                  { cat: 'Icon', vars: ['--o9ds-action-menu-icon-size'] },
                  { cat: 'Color', vars: ['--o9ds-action-menu-bg-color', '--o9ds-action-menu-text-color', '--o9ds-action-menu-icon-color', '--o9ds-action-menu-shortcut-color', '--o9ds-action-menu-hover-bg-color', '--o9ds-action-menu-destructive-color', '--o9ds-action-menu-grp-hdr-color'] },
                  { cat: 'Border', vars: ['--o9ds-action-menu-border-color', '--o9ds-action-menu-border-radius', '--o9ds-action-menu-divider-color'] },
                  { cat: 'Transition', vars: ['--o9ds-action-menu-transition'] },
                ].map(({ cat, vars }) => (
                  <div key={cat} className="border p-4 dark:border-neutral-700" style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#FAFAFA' } : undefined}>
                    <h3 className="text-sm font-semibold text-o9ds-light-primary dark:text-white mb-2">{cat}</h3>
                    <ul className="space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                      {vars.map((v) => (
                        <li key={v}>{v}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section id="code-size" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Size reference</h2>
              <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Size</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Item Height</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Font</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Icon</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SIZES.map((row) => (
                      <tr key={row.size} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{row.size}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.height}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.font}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.icon}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'Accessibility' && (
          <section id="action-menu-accessibility" className="space-y-12">
            <div id="a11y-intro" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Action Menu accessibility</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The Action Menu follows the WAI-ARIA Menu pattern. The trigger element is augmented with <code className="px-1 py-0.5" data-o9ds-inline-code>aria-haspopup="menu"</code> and <code className="px-1 py-0.5" data-o9ds-inline-code>aria-expanded</code>. The panel uses <code className="px-1 py-0.5" data-o9ds-inline-code>role="menu"</code> with individual items as <code className="px-1 py-0.5" data-o9ds-inline-code>menuitem</code> or <code className="px-1 py-0.5" data-o9ds-inline-code>menuitemcheckbox</code>.
              </p>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                Screen readers typically announce: <code className="px-1 py-0.5" data-o9ds-inline-code>[Trigger name], menu button</code> → <code className="px-1 py-0.5" data-o9ds-inline-code>[Item label], menu item</code>
              </p>
            </div>

            <div id="a11y-keyboard" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Keyboard interaction</h3>
              <DocTable
                columns={[
                  { key: 'key', label: 'Key', mono: true },
                  { key: 'behavior', label: 'Action' },
                ]}
                rows={KEYBOARD}
              />
            </div>

            <div id="a11y-focus" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Focus management</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">On open:</strong> Focus moves to the first non-disabled item. If filterable, focus moves to the search input instead.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">On close:</strong> Focus returns to the trigger element.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">On submenu open:</strong> Focus moves to the first non-disabled item in the submenu.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">On submenu close:</strong> Focus returns to the parent menu item.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Inline panel:</strong> Focus is trapped within the inline panel. First focusable element receives focus.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Trailing actions:</strong> Reachable via ArrowRight from the parent item; ArrowLeft returns focus to the item.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Disabled items:</strong> Skipped by arrow-key navigation but remain in the DOM with <code className="px-1 py-0.5" data-o9ds-inline-code>aria-disabled="true"</code>.</li>
              </ul>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                Touch hover styles are scoped to <code className="px-1 py-0.5" data-o9ds-inline-code>.no-touch</code> to prevent sticky hover on touch devices.
              </p>
            </div>

            <div id="a11y-aria" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">ARIA attributes</h3>
              <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Attribute</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Applied to</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ARIA_ATTRS.map(({ attr, where, when }) => (
                      <tr key={attr} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{attr}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{where}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{when}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div id="a11y-disabled" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Disabled items</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Disabled items use <code className="px-1 py-0.5" data-o9ds-inline-code>aria-disabled="true"</code> and remain in the accessibility tree. They are skipped by arrow-key navigation but visible in the item list. Do not use the native <code className="px-1 py-0.5" data-o9ds-inline-code>disabled</code> attribute on list items.
              </p>
              <CodeBlock
                code={`<li class="o9ds-action-menu__item" role="menuitem" aria-disabled="true" tabindex="-1">
  <span class="o9ds-action-menu__lbl">Unavailable</span>
</li>`}
                label="Disabled menu item"
              />
            </div>

            <div id="a11y-loading" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Loading state</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                When loading, the panel sets <code className="px-1 py-0.5" data-o9ds-inline-code>aria-busy="true"</code> and renders a skeleton shimmer. All item interaction is blocked. The menu can still be opened but shows skeleton content instead of actionable items.
              </p>
              <CodeBlock
                code={`<div class="o9ds-action-menu o9ds-action-menu--md loading" role="menu" aria-busy="true">
  <div class="o9ds-action-menu__skeleton"></div>
</div>`}
                label="Loading state"
              />
            </div>

            <div id="a11y-notes" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Accessibility notes</h3>
              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
                <WhiteBgCard title="Type-ahead navigation">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Typing printable characters accumulates a search buffer (resets after 300ms) and focuses the first item whose label matches. This provides quick navigation in long menus.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Two-axis navigation">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Arrow keys create two navigation axes: vertical between items (Up/Down) and horizontal within an item's trailing action zone (Right/Left). This pattern keeps all controls reachable without Tab.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Checkable items">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Items with <code className="px-1 py-0.5" data-o9ds-inline-code>checked</code> defined use <code className="px-1 py-0.5" data-o9ds-inline-code>role="menuitemcheckbox"</code> and <code className="px-1 py-0.5" data-o9ds-inline-code>aria-checked</code>. Screen readers announce the toggle state alongside the item label.
                  </p>
                </WhiteBgCard>
              </div>
            </div>
          </section>
        )}
      </div>
    </PageWithToc>
  )
}
