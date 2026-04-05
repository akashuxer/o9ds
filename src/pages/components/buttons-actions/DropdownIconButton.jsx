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

const VARIANTS = [
  { name: 'Primary', desc: 'Filled theme-color background with inverse icon' },
  { name: 'Secondary', desc: 'Subtle layer background with secondary icon' },
  { name: 'Tertiary', desc: 'Transparent background with secondary icon' },
  { name: 'Outline', desc: 'Transparent background with theme-color border and icon' },
]

const PROPS = [
  { prop: 'icon', type: 'string', default: '—', required: 'Yes', desc: 'Icon name without o9con- prefix. Always present as the primary visual.' },
  { prop: 'tooltip', type: 'string | TooltipConfig', default: '—', required: 'Yes', desc: 'Accessible label (aria-label) and tooltip text. Required since there is no visible label.' },
  { prop: 'variant', type: "'primary' | 'secondary' | 'tertiary' | 'outline'", default: "'primary'", required: 'No', desc: 'Visual style variant.' },
  { prop: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", required: 'No', desc: 'Button size controlling height and icon size.' },
  { prop: 'compact', type: 'boolean', default: 'false', required: 'No', desc: 'Hides caret; renders as a square icon button.' },
  { prop: 'disabled', type: 'boolean', default: 'false', required: 'No', desc: 'Prevents all interaction; menu cannot open.' },
  { prop: 'loading', type: 'boolean', default: 'false', required: 'No', desc: 'Shows Pattern A skeleton shimmer overlay on trigger.' },
  { prop: 'items', type: 'MenuItemData[]', default: '[]', required: 'Yes', desc: 'Menu items passed to O9ActionMenu.' },
  { prop: 'filterable', type: 'boolean', default: 'false', required: 'No', desc: 'Renders a search input in the menu for filtering.' },
  { prop: 'placement', type: "'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'", default: "'bottom-end'", required: 'No', desc: 'Preferred ActionMenu placement relative to trigger.' },
  { prop: 'maxHeight', type: 'string', default: 'undefined', required: 'No', desc: 'Maximum height of the ActionMenu panel.' },
  { prop: 'closeOnSelect', type: 'boolean', default: 'true', required: 'No', desc: 'Whether the menu closes after item selection.' },
  { prop: 'menuSize', type: "'sm' | 'md'", default: "'md'", required: 'No', desc: 'Size of ActionMenu items. Independent of trigger size.' },
  { prop: 'onSelect', type: '(item, index) => void', default: 'undefined', required: 'No', desc: 'Called when a menu item is activated.' },
  { prop: 'onOpen', type: '() => void | false', default: 'undefined', required: 'No', desc: 'Called before menu opens. Return false to cancel.' },
  { prop: 'onClose', type: '() => void | false', default: 'undefined', required: 'No', desc: 'Called before menu closes. Return false to cancel.' },
  { prop: 'onOpenChange', type: '(open: boolean) => void', default: 'undefined', required: 'No', desc: 'Called after open state changes.' },
  { prop: 'onClick', type: '(event) => void', default: 'undefined', required: 'No', desc: 'Click handler on trigger. Suppressed when disabled/loading.' },
]

const METHODS = [
  { method: 'open()', signature: '() → void', desc: 'Open the menu.' },
  { method: 'close()', signature: '() → void', desc: 'Close the menu.' },
  { method: 'toggle(force?)', signature: '(boolean?) → void', desc: 'Toggle menu. true = open, false = close, omit = flip.' },
  { method: 'updateItems(items)', signature: '(array) → void', desc: 'Replace menu items.' },
  { method: 'setIcon(name)', signature: '(string) → void', desc: 'Update the displayed icon.' },
  { method: 'setTooltip(text)', signature: '(string | null) → void', desc: 'Update or remove tooltip and aria-label.' },
  { method: 'setVariant(v)', signature: '(string) → void', desc: 'Change visual variant.' },
  { method: 'setSize(s)', signature: '(string) → void', desc: 'Change trigger button size.' },
  { method: 'setLoading(b)', signature: '(boolean) → void', desc: 'Toggle loading state on trigger.' },
  { method: 'compact(state?)', signature: '(boolean?) → boolean | void', desc: 'Get or set compact state. Adds/removes caret.' },
  { method: 'disabled(state?)', signature: '(boolean?) → boolean | void', desc: 'Get or set disabled state.' },
  { method: 'isOpen()', signature: '() → boolean', desc: 'Returns whether the menu is open.' },
  { method: 'focus()', signature: '() → void', desc: 'Programmatically focus the trigger.' },
  { method: 'destroy()', signature: '() → void', desc: 'Remove listeners, destroy ActionMenu, clean up.' },
]

const SIZES = [
  { size: 'sm', height: '24px', nonCompact: '46px wide', compact: '24×24', icon: '16px' },
  { size: 'md', height: '32px', nonCompact: '56px wide', compact: '32×32', icon: '20px' },
  { size: 'lg', height: '40px', nonCompact: '64px wide', compact: '40×40', icon: '24px' },
]

const ARIA_ATTRS = [
  { attr: 'aria-haspopup', when: "Set to 'menu' on the trigger at initialization." },
  { attr: 'aria-expanded', when: 'Toggled on trigger when the ActionMenu opens/closes.' },
  { attr: 'aria-disabled', when: 'Set when the disabled prop is true.' },
  { attr: 'aria-busy', when: "Set to 'true' during loading state." },
  { attr: 'aria-label', when: 'Required — set from the tooltip prop. Icon buttons have no visible text.' },
]

export default function DropdownIconButton() {
  const [activeTab, setActiveTab] = useState('Overview')
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const onThisPageSections = useMemo(() => {
    if (activeTab === 'Overview') {
      return [
        { id: 'overview-purpose', label: 'Purpose' },
        { id: 'overview-definition', label: 'Definition & role' },
        { id: 'overview-anatomy', label: 'Anatomy' },
        { id: 'overview-variants', label: 'Variants' },
        { id: 'overview-compact', label: 'Compact mode' },
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
        { id: 'usage-layout', label: 'Layout & grouping' },
      ]
    }
    if (activeTab === 'Code/APIs') {
      return [
        { id: 'code-props', label: 'Props' },
        { id: 'code-events', label: 'Events' },
        { id: 'code-methods', label: 'Methods (JS)' },
        { id: 'code-scenarios', label: 'Implementation scenarios' },
        { id: 'code-css', label: 'CSS variables' },
        { id: 'code-size', label: 'Size reference' },
      ]
    }
    if (activeTab === 'Accessibility') {
      return [
        { id: 'a11y-intro', label: 'Overview' },
        { id: 'a11y-keyboard', label: 'Keyboard interaction' },
        { id: 'a11y-focus', label: 'Focus management' },
        { id: 'a11y-disabled', label: 'Disabled state' },
        { id: 'a11y-loading', label: 'Loading state' },
        { id: 'a11y-notes', label: 'Accessibility notes' },
        { id: 'a11y-supported-aria', label: 'Supported ARIA attributes' },
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
            Dropdown Icon Button
          </h1>
          <p className="text-lg text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed mb-2">
            {getComponentPageDescription('dropdown-icon-button')}
          </p>
          <p className="text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed">
            An icon-only button trigger that opens an ActionMenu overlay. Use in space-constrained layouts where a text label is not needed. Supports an optional trailing caret or compact square layout.
          </p>

          <DocTabs tabs={tabs} activeTab={activeTab} onSelect={setActiveTab} />
        </section>

        {activeTab === 'Overview' && (
          <div className="space-y-12">
            <section id="overview-purpose" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Purpose</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The Dropdown Icon Button provides a minimal-footprint menu trigger for toolbars, dense UIs, and contexts where the icon alone communicates meaning. It keeps the UI compact while providing full action menu functionality behind a single icon.
              </p>
            </section>

            <section id="overview-definition" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Definition & role</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                A <strong className="text-o9ds-light-primary dark:text-white font-medium">dropdown icon button</strong> is an icon-only trigger that opens an O9ActionMenu panel. It displays a configured icon and an optional trailing caret (<code className="px-1 py-0.5" data-o9ds-inline-code>angle-down</code>). When <code className="px-1 py-0.5" data-o9ds-inline-code>compact</code> is true, the caret is hidden and the button becomes a perfect square, matching the dimensions of O9IconButton.
              </p>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Because there is no visible text, the <code className="px-1 py-0.5" data-o9ds-inline-code>tooltip</code> prop is <strong className="text-o9ds-light-primary dark:text-white font-medium">required</strong> — it sets both the <code className="px-1 py-0.5" data-o9ds-inline-code>aria-label</code> for screen readers and the visual tooltip for sighted users.
              </p>
            </section>

            <section id="overview-anatomy" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Anatomy</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The dropdown icon button combines a <strong className="text-o9ds-light-primary dark:text-white font-medium">trigger</strong> (the icon button) and a <strong className="text-o9ds-light-primary dark:text-white font-medium">panel</strong> (the ActionMenu overlay).
              </p>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">1 — Icon</strong> — primary icon rendered via o9con icon font. Always present and serves as the main visual indicator.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">2 — Caret (optional)</strong> — trailing angle-down icon indicating expandability. Hidden when <code className="px-1 py-0.5" data-o9ds-inline-code>compact</code> is true. Rotates 180° when the menu is open.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">3 — ActionMenu panel</strong> — overlay containing the list of items with full menu functionality.
                </li>
              </ul>
            </section>

            <section id="overview-variants" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Variants</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed mb-4">
                Four variants match the standard Button variant system. Color and hover tokens are inherited from <code className="px-1 py-0.5" data-o9ds-inline-code>o9ds-btn--{'{variant}'}</code> classes.
              </p>
              <ul className="space-y-3 text-o9ds-light-secondary dark:text-neutral-400">
                {VARIANTS.map(({ name, desc }) => (
                  <li key={name}>
                    <strong className="text-o9ds-light-primary dark:text-white">{name}</strong> — {desc}
                  </li>
                ))}
              </ul>
            </section>

            <section id="overview-compact" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Compact mode</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                When <code className="px-1 py-0.5" data-o9ds-inline-code>compact</code> is true, the caret is hidden and the button renders as a square — identical dimensions to O9IconButton. This is ideal for dense toolbars where the dropdown behavior is implicit or communicated through context.
              </p>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                When <code className="px-1 py-0.5" data-o9ds-inline-code>compact</code> is false (default), the button uses a rectangular layout with a gap between the icon and the trailing caret, making the dropdown affordance explicit.
              </p>
            </section>

            <section id="overview-states" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">States</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Default</strong> — trigger ready to activate; caret pointing down (or hidden in compact).</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Hover</strong> — inherits hover from the button variant.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Focus</strong> — visible focus ring via <code className="px-1 py-0.5" data-o9ds-inline-code>:focus-visible</code>.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Open</strong> — menu visible; caret rotated (if visible).</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Disabled</strong> — trigger disabled; menu cannot open.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Loading</strong> — Pattern A shimmer overlay on trigger; menu cannot open.</li>
              </ul>
            </section>

            <section id="overview-naming" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Naming guidance</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Since there is no visible label, the <code className="px-1 py-0.5" data-o9ds-inline-code>tooltip</code> prop doubles as the accessible name. Use a clear, descriptive phrase (e.g. "More actions", "Filter options", "Settings") that communicates the menu's purpose.
              </p>
            </section>

            <section id="overview-dos-donts" className="scroll-mt-24">
              <div className="grid gap-4 sm:grid-cols-2">
                <GrayBgCard title="Do" bullets={['Always provide a tooltip for accessibility', 'Use compact mode in dense toolbars', 'Show the caret when the dropdown behavior isn\'t obvious', 'Choose an icon that clearly represents the menu\'s purpose']} />
                <WhiteBgCard title="Don't" bullets={['Omit the tooltip — icon buttons require an accessible name', 'Use for primary page-level actions (use a labeled button)', 'Rely solely on the caret for meaning (icon should be descriptive)', 'Nest dropdown icon buttons inside other dropdown menus']} />
              </div>
            </section>
          </div>
        )}

        {activeTab === 'Usage' && (
          <div className="space-y-12">
            <section id="usage-when" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Dense toolbars where space is limited and the icon alone communicates meaning.</li>
                <li>Overflow or "more" menus triggered by an ellipsis or kebab icon.</li>
                <li>Context menus on cards, rows, or list items where a labeled button would be too heavy.</li>
                <li>Settings or configuration menus behind a gear icon.</li>
                <li>Any menu trigger where a text label is unnecessary or redundant in context.</li>
              </ul>
            </section>

            <section id="usage-when-not" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When not to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>When the action needs a visible text label — use a <strong className="text-o9ds-light-primary dark:text-white font-medium">Dropdown Button</strong>.</li>
                <li>For value selection that should display the chosen value — use a <strong className="text-o9ds-light-primary dark:text-white font-medium">Dropdown Button in selection mode</strong>.</li>
                <li>For standalone icon actions that don't open a menu — use an <strong className="text-o9ds-light-primary dark:text-white font-medium">Icon Button</strong>.</li>
                <li>For navigation — use links or a navigation menu.</li>
              </ul>
            </section>

            <section id="usage-scenarios" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Scenarios</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Row actions</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Use compact mode with an ellipsis icon (<code className="px-1 py-0.5" data-o9ds-inline-code>ellipsis-v</code>) at the end of table rows or list items. Keeps the UI clean while providing full action access.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Toolbar settings</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Use with a gear or settings icon in non-compact mode so the caret signals the dropdown. Tertiary variant keeps it visually lightweight.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Card actions</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Place a compact dropdown icon button in the card header for contextual actions like edit, duplicate, or delete.
                  </p>
                </div>
              </div>
            </section>

            <section id="usage-best-practices" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Best practices</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Always provide a meaningful <code className="px-1 py-0.5" data-o9ds-inline-code>tooltip</code> — it is the only way sighted users and screen readers understand the button's purpose.</li>
                <li>Use compact mode in tables and lists where every pixel matters; use non-compact with caret in toolbars where discoverability matters more.</li>
                <li>Keep menu items concise. If items need icons, ensure they enhance recognition without cluttering the menu.</li>
                <li>Place destructive items at the bottom of the menu with a separator divider above.</li>
              </ul>
            </section>

            <section id="usage-layout" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Layout & grouping</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Compact dimensions</strong> — square button matching O9IconButton: sm = 24×24, md = 32×32, lg = 40×40.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Non-compact dimensions</strong> — rectangular with gap between icon and caret: sm = 46px, md = 56px, lg = 64px wide.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Toolbar context</strong> — when inside a toolbar, the trigger inherits transparent background and layer-hover colors via parent overrides.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Placement</strong> — defaults to <code className="px-1 py-0.5" data-o9ds-inline-code>bottom-end</code>. Adjust to <code className="px-1 py-0.5" data-o9ds-inline-code>bottom-start</code> for right-aligned triggers or RTL layouts.</li>
              </ul>
            </section>
          </div>
        )}

        {activeTab === 'Code/APIs' && (
          <div className="space-y-12">
            <section id="code-props" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Component API</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
                O9DropdownIconButton composes an icon trigger with an O9ActionMenu panel. All overlay behavior is delegated to the ActionMenu instance.
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

            <section id="code-events" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Events</h2>
              <DocTable
                columns={[
                  { key: 'event', label: 'Event', mono: true },
                  { key: 'payload', label: 'Payload' },
                  { key: 'desc', label: 'Description' },
                ]}
                rows={[
                  { event: 'dd-icon-btn:select', payload: '{ item, index }', desc: 'Menu item selected. Cancelable.' },
                  { event: 'dd-icon-btn:open', payload: '{}', desc: 'Menu opened. Cancelable.' },
                  { event: 'dd-icon-btn:close', payload: '{}', desc: 'Menu closed. Cancelable.' },
                ]}
              />
            </section>

            <section id="code-methods" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Methods (JS only)</h2>
              <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Method</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Signature</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {METHODS.map((row) => (
                      <tr key={row.method} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{row.method}</td>
                        <td className="py-2 px-3 font-mono text-o9ds-light-secondary dark:text-neutral-400">{row.signature}</td>
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
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Basic — React</h3>
                <CodeBlock
                  code={`import { O9DropdownIconButton } from '@o9ds/react';

<O9DropdownIconButton
  icon="ellipsis-v"
  tooltip="More actions"
  variant="tertiary"
  items={[
    { id: 'edit', label: 'Edit', icon: 'edit' },
    { id: 'duplicate', label: 'Duplicate', icon: 'copy' },
    { id: 'delete', label: 'Delete', icon: 'trash', danger: true },
  ]}
  onSelect={(item) => handleAction(item.id)}
/>`}
                  label="React — basic"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Compact mode — React</h3>
                <CodeBlock
                  code={`<O9DropdownIconButton
  icon="ellipsis-v"
  tooltip="Row actions"
  variant="tertiary"
  size="sm"
  compact
  items={rowActions}
  onSelect={handleRowAction}
/>`}
                  label="React — compact"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">With caret and filtering — React</h3>
                <CodeBlock
                  code={`<O9DropdownIconButton
  icon="settings"
  tooltip="Settings"
  variant="secondary"
  filterable
  items={settingsItems}
  placement="bottom-start"
  onSelect={handleSettings}
/>`}
                  label="React — caret + filterable"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">HTML markup — non-compact</h3>
                <CodeBlock
                  code={`<div class="o9ds-dd-icon-btn">
  <button class="o9ds-btn o9ds-btn--tertiary o9ds-btn--md"
          type="button"
          aria-haspopup="menu"
          aria-expanded="false"
          aria-label="More actions">
    <span class="o9ds-dd-icon-btn__icon o9con o9con-ellipsis-v"
          aria-hidden="true"></span>
    <span class="o9ds-dd-icon-btn__caret o9con o9con-angle-down"
          aria-hidden="true"></span>
  </button>
</div>`}
                  label="HTML — non-compact"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">HTML markup — compact</h3>
                <CodeBlock
                  code={`<div class="o9ds-dd-icon-btn o9ds-dd-icon-btn--compact">
  <button class="o9ds-btn o9ds-btn--tertiary o9ds-btn--md"
          type="button"
          aria-haspopup="menu"
          aria-expanded="false"
          aria-label="Row actions">
    <span class="o9ds-dd-icon-btn__icon o9con o9con-ellipsis-v"
          aria-hidden="true"></span>
  </button>
</div>`}
                  label="HTML — compact"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Vanilla JS</h3>
                <CodeBlock
                  code={`import { O9DropdownIconButton } from '@o9ds/js';

const el = document.querySelector('#my-dd-icon-btn');
const ddIconBtn = O9DropdownIconButton.initialize(el, {
  icon: 'ellipsis-v',
  tooltip: 'More actions',
  variant: 'tertiary',
  compact: true,
  items: [
    { id: 'edit', label: 'Edit' },
    { id: 'delete', label: 'Delete' },
  ],
  onSelect: (item) => console.log(item.id),
});

ddIconBtn.open();
ddIconBtn.close();
ddIconBtn.toggle();
ddIconBtn.setIcon('settings');
ddIconBtn.setTooltip('Settings');
ddIconBtn.compact(false);
ddIconBtn.disabled(true);
ddIconBtn.destroy();`}
                  label="Vanilla JS"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Loading & disabled</h3>
                <CodeBlock
                  code={`<O9DropdownIconButton icon="ellipsis-v" tooltip="Actions" loading />
<O9DropdownIconButton icon="ellipsis-v" tooltip="Actions" disabled />

<!-- HTML loading -->
<div class="o9ds-dd-icon-btn o9ds-dd-icon-btn--compact">
  <button class="o9ds-btn o9ds-btn--tertiary o9ds-btn--md loading"
          type="button" aria-busy="true" aria-haspopup="menu"
          aria-label="Actions">
    <span class="o9ds-dd-icon-btn__icon o9con o9con-ellipsis-v"
          aria-hidden="true"></span>
  </button>
</div>`}
                  label="Loading & disabled"
                />
              </div>
            </section>

            <section id="code-css" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">CSS variables</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                All color/variant styling is inherited from <code className="px-1 py-0.5" data-o9ds-inline-code>o9ds-btn--{'{variant}'}</code> classes. These variables control the icon button layout specifically.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { cat: 'Layout', vars: ['--o9ds-dd-icon-btn-size', '--o9ds-dd-icon-btn-gap'] },
                  { cat: 'Caret', vars: ['--o9ds-dd-icon-btn-caret-size'] },
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
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 mt-2">
                In compact mode, <code className="px-1 py-0.5" data-o9ds-inline-code>--o9ds-dd-icon-btn-size</code> sets the square dimensions (matching O9IconButton). In non-compact mode, width is calculated as icon-size + gap + caret-size + padding.
              </p>
            </section>

            <section id="code-size" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Size reference</h2>
              <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Size</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Height</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Non-compact width</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Compact</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Icon</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SIZES.map((row) => (
                      <tr key={row.size} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{row.size}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.height}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.nonCompact}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.compact}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.icon}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <DocTable
                columns={[
                  { key: 'map', label: 'Mapping' },
                  { key: 'detail', label: 'Notes' },
                ]}
                rows={[
                  { map: 'variant → BEM modifier', detail: 'o9ds-btn--primary | secondary | tertiary | outline' },
                  { map: 'size → BEM modifier', detail: 'o9ds-btn--sm | md | lg' },
                  { map: 'compact → modifier', detail: 'o9ds-dd-icon-btn--compact' },
                  { map: 'loading → class + aria-busy', detail: '.loading + aria-busy="true"' },
                  { map: 'open → class', detail: '.open — caret rotates 180° (if visible)' },
                ]}
              />
            </section>
          </div>
        )}

        {activeTab === 'Accessibility' && (
          <section id="dropdown-icon-button-accessibility" className="space-y-12">
            <div id="a11y-intro" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Dropdown Icon Button accessibility</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The dropdown icon button uses a native <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;button&gt;</code> trigger with <code className="px-1 py-0.5" data-o9ds-inline-code>aria-haspopup="menu"</code>, <code className="px-1 py-0.5" data-o9ds-inline-code>aria-expanded</code>, and a <strong className="text-o9ds-light-primary dark:text-white font-medium">required</strong> <code className="px-1 py-0.5" data-o9ds-inline-code>aria-label</code> (set from the <code className="px-1 py-0.5" data-o9ds-inline-code>tooltip</code> prop). Since there is no visible text, the <code className="px-1 py-0.5" data-o9ds-inline-code>aria-label</code> is the only accessible name.
              </p>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                Screen readers typically announce: <code className="px-1 py-0.5" data-o9ds-inline-code>[tooltip text], button, has popup menu, collapsed</code>
              </p>
            </div>

            <div id="a11y-keyboard" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Keyboard interaction</h3>
              <p className="text-sm font-medium text-o9ds-light-primary dark:text-white">Trigger keys</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>Enter and Space toggle the menu open/closed.</li>
                <li>ArrowDown opens the menu and focuses the first item.</li>
                <li>ArrowUp opens the menu and focuses the last item.</li>
              </ul>
              <p className="text-sm font-medium text-o9ds-light-primary dark:text-white pt-2">Menu keys</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>Escape closes the menu and returns focus to the trigger.</li>
                <li>Tab closes the menu and moves focus to the next focusable element.</li>
                <li>All internal menu navigation is handled by the composed ActionMenu.</li>
              </ul>
              <DocTable
                columns={[
                  { key: 'key', label: 'Key', mono: true },
                  { key: 'behavior', label: 'Action' },
                ]}
                rows={[
                  { key: 'Enter', behavior: 'Toggle the menu open/closed.' },
                  { key: 'Space', behavior: 'Toggle the menu open/closed.' },
                  { key: 'ArrowDown', behavior: 'Open the menu and focus the first item.' },
                  { key: 'ArrowUp', behavior: 'Open the menu and focus the last item.' },
                  { key: 'Escape', behavior: 'Close the menu and return focus to trigger.' },
                  { key: 'Tab', behavior: 'Close the menu and move focus to next focusable element.' },
                ]}
              />
            </div>

            <div id="a11y-focus" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Focus management</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">On open:</strong> focus moves into the ActionMenu (first non-disabled item).</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">On close:</strong> focus returns to the trigger button.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Touch devices:</strong> hover styles are scoped to <code className="px-1 py-0.5" data-o9ds-inline-code>.no-touch</code> to prevent sticky hover on mobile.</li>
              </ul>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <strong className="text-o9ds-light-primary dark:text-white font-normal">WCAG:</strong> 2.4.7 Focus Visible · 2.4.3 Focus Order
              </p>
            </div>

            <div id="a11y-disabled" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Disabled state</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                When disabled, the trigger receives the native <code className="px-1 py-0.5" data-o9ds-inline-code>disabled</code> attribute and <code className="px-1 py-0.5" data-o9ds-inline-code>aria-disabled="true"</code>. The menu cannot be opened. The trigger is removed from the tab order.
              </p>
              <CodeBlock
                code={`<button type="button" disabled aria-haspopup="menu" aria-label="Actions">
  <span class="o9con o9con-ellipsis-v" aria-hidden="true"></span>
</button>`}
                label="Disabled trigger"
              />
            </div>

            <div id="a11y-loading" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Loading state</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Loading uses Pattern A: a shimmer overlay on the trigger while maintaining its dimensions. The menu cannot be opened during loading. The trigger receives <code className="px-1 py-0.5" data-o9ds-inline-code>aria-busy="true"</code>.
              </p>
            </div>

            <div id="a11y-notes" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Accessibility notes</h3>
              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
                <WhiteBgCard title="Required accessible name">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    The <code className="px-1 py-0.5" data-o9ds-inline-code>tooltip</code> prop is required and maps directly to <code className="px-1 py-0.5" data-o9ds-inline-code>aria-label</code>. Without it, screen readers would only announce "button" with no context.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Menu trigger pattern">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Uses the same WAI-ARIA menu button pattern as DropdownButton: <code className="px-1 py-0.5" data-o9ds-inline-code>aria-haspopup="menu"</code> and <code className="px-1 py-0.5" data-o9ds-inline-code>aria-expanded</code> on the trigger.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Tooltip visibility">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    The tooltip must be visible on both hover and keyboard focus, per WCAG 1.4.13 Content on Hover or Focus. It must not be hover-only.
                  </p>
                </WhiteBgCard>
              </div>
            </div>

            <div id="a11y-supported-aria" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Supported ARIA attributes</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 mb-4">
                Do not add ARIA that duplicates native semantics.
              </p>
              <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Attribute</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">When to use</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ARIA_ATTRS.map(({ attr, when }) => (
                      <tr key={attr} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{attr}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{when}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}
      </div>
    </PageWithToc>
  )
}
