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
  { name: 'Primary', desc: 'Main call-to-action dropdown; filled theme-color background with inverse text' },
  { name: 'Secondary', desc: 'Supporting dropdown; subtle layer background with secondary text' },
  { name: 'Tertiary', desc: 'Low-emphasis ghost dropdown; transparent background with secondary text' },
  { name: 'Outline', desc: 'Outlined dropdown; transparent background with theme-color border and text' },
]

const PROPS = [
  { prop: 'label', type: 'string', default: '—', required: 'Yes', desc: 'Trigger button text. In selection mode, overridden by selected item\'s display text.' },
  { prop: 'variant', type: "'primary' | 'secondary' | 'tertiary' | 'outline'", default: "'primary'", required: 'No', desc: 'Visual style variant of the trigger.' },
  { prop: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", required: 'No', desc: 'Trigger button size (height, padding, font, icon).' },
  { prop: 'icon', type: 'string', default: 'undefined', required: 'No', desc: 'Optional leading icon name without o9con- prefix.' },
  { prop: 'mode', type: "'action' | 'selection'", default: "'action'", required: 'No', desc: "Operating mode. 'action': items are clickable, label stays fixed. 'selection': item updates label." },
  { prop: 'displaySelected', type: "'label' | 'value'", default: "'label'", required: 'No', desc: 'In selection mode, show selected item\'s label or value on trigger.' },
  { prop: 'selectedItem', type: 'string | number', default: 'undefined', required: 'No', desc: 'Controlled selected item ID (selection mode only).' },
  { prop: 'defaultSelectedItem', type: 'string | number', default: 'undefined', required: 'No', desc: 'Initial selected item ID for uncontrolled selection mode.' },
  { prop: 'disabled', type: 'boolean', default: 'false', required: 'No', desc: 'Prevents all interaction; menu cannot open.' },
  { prop: 'loading', type: 'boolean', default: 'false', required: 'No', desc: 'Shows Pattern A skeleton shimmer overlay on trigger.' },
  { prop: 'items', type: 'MenuItemData[]', default: '[]', required: 'Yes', desc: 'Menu items passed to O9ActionMenu. Flat or grouped array.' },
  { prop: 'filterable', type: 'boolean', default: 'false', required: 'No', desc: 'Renders a search input in the menu for filtering items.' },
  { prop: 'placement', type: "'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'", default: "'bottom-end'", required: 'No', desc: 'Preferred placement of the ActionMenu relative to trigger.' },
  { prop: 'maxHeight', type: 'string', default: 'undefined', required: 'No', desc: 'Maximum height of the ActionMenu panel.' },
  { prop: 'closeOnSelect', type: 'boolean', default: 'true', required: 'No', desc: 'Whether the menu closes after item selection.' },
  { prop: 'menuSize', type: "'sm' | 'md'", default: "'md'", required: 'No', desc: 'Size of ActionMenu items. Independent of trigger size.' },
  { prop: 'tooltip', type: 'string | TooltipConfig', default: 'undefined', required: 'No', desc: 'Supplementary tooltip on hover/focus.' },
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
  { method: 'value()', signature: '() → MenuItemData | null', desc: 'Get current selected item (selection mode).' },
  { method: 'value(id)', signature: '(string | number | null) → void', desc: 'Set selected item by ID. Pass null to clear.' },
  { method: 'updateItems(items)', signature: '(array) → void', desc: 'Replace menu items.' },
  { method: 'setLabel(text)', signature: '(string) → void', desc: 'Update button label text.' },
  { method: 'setIcon(name)', signature: '(string | null) → void', desc: 'Set or remove the leading icon.' },
  { method: 'setVariant(v)', signature: '(string) → void', desc: 'Change visual variant.' },
  { method: 'setSize(s)', signature: '(string) → void', desc: 'Change trigger button size.' },
  { method: 'setLoading(b)', signature: '(boolean) → void', desc: 'Toggle loading state on trigger.' },
  { method: 'disabled(state?)', signature: '(boolean?) → boolean | void', desc: 'Get or set disabled state.' },
  { method: 'isOpen()', signature: '() → boolean', desc: 'Returns whether the menu is open.' },
  { method: 'focus()', signature: '() → void', desc: 'Programmatically focus the trigger.' },
  { method: 'destroy()', signature: '() → void', desc: 'Remove listeners, destroy ActionMenu, clean up.' },
]

const SIZES = [
  { size: 'sm', height: '24px', font: '12px', icon: '16px', caret: '12px' },
  { size: 'md', height: '32px', font: '14px', icon: '20px', caret: '16px' },
  { size: 'lg', height: '40px', font: '16px', icon: '24px', caret: '16px' },
]

const ARIA_ATTRS = [
  { attr: 'aria-haspopup', when: "Set to 'menu' on the trigger at initialization." },
  { attr: 'aria-expanded', when: 'Toggled on trigger when the ActionMenu opens/closes.' },
  { attr: 'aria-disabled', when: 'Set when the disabled prop is true.' },
  { attr: 'aria-busy', when: "Set to 'true' during loading state." },
  { attr: 'aria-label', when: 'Optional accessible label for the trigger. Defaults to visible label text.' },
]

export default function DropdownButton() {
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
        { id: 'overview-modes', label: 'Operating modes' },
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
            Dropdown Button
          </h1>
          <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed mb-2">
            {getComponentPageDescription('dropdown-button')}
          </p>
          <p className="text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed">
            A button trigger that opens an ActionMenu overlay. Supports action mode for fire-and-forget item activation and selection mode where the chosen item updates the button label.
          </p>

          <DocTabs tabs={tabs} activeTab={activeTab} onSelect={setActiveTab} />
        </section>

        {activeTab === 'Overview' && (
          <div className="space-y-12">
            <section id="overview-purpose" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Purpose</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The Dropdown Button consolidates multiple related actions or options behind a single trigger, keeping the UI clean while providing access to a full action menu. It prevents toolbar clutter and supports both "pick an action" and "pick a value" workflows.
              </p>
            </section>

            <section id="overview-definition" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Definition & role</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                A <strong className="text-o9ds-light-primary dark:text-white font-medium">dropdown button</strong> composes an O9Button trigger with an O9ActionMenu panel. The trigger displays a label, an optional leading icon, and a trailing caret (<code className="px-1 py-0.5" data-o9ds-inline-code>angle-down</code>) that rotates when the menu is open. Clicking the trigger or pressing Enter/Space toggles the menu.
              </p>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                In <strong className="text-o9ds-light-primary dark:text-white font-medium">action mode</strong>, items are fire-and-forget — selecting an item triggers its action and the button label stays fixed. In <strong className="text-o9ds-light-primary dark:text-white font-medium">selection mode</strong>, selecting an item updates the button label and marks the item active in the menu.
              </p>
            </section>

            <section id="overview-anatomy" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Anatomy</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The dropdown button combines a <strong className="text-o9ds-light-primary dark:text-white font-medium">trigger</strong> (the button) and a <strong className="text-o9ds-light-primary dark:text-white font-medium">panel</strong> (the ActionMenu overlay).
              </p>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">1 — Leading icon</strong> — optional icon rendered before the label using the o9con icon font.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">2 — Label</strong> — text content of the trigger. In selection mode, updates to reflect the selected item.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">3 — Caret</strong> — trailing angle-down icon. Always present. Rotates 180° when the menu is open.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">4 — ActionMenu panel</strong> — overlay containing the list of items. Supports filtering, grouping, submenus, and dividers.
                </li>
              </ul>
            </section>

            <section id="overview-variants" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Variants</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed mb-4">
                Four variants communicate importance, matching the standard Button variant system.
              </p>
              <ul className="space-y-3 text-o9ds-light-secondary dark:text-neutral-400">
                {VARIANTS.map(({ name, desc }) => (
                  <li key={name}>
                    <strong className="text-o9ds-light-primary dark:text-white">{name}</strong> — {desc}
                  </li>
                ))}
              </ul>
            </section>

            <section id="overview-modes" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Operating modes</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">Action mode (default)</strong> — items are clickable actions. No value state is maintained. The button label stays fixed after item selection. Use for "More actions" or "Export as" menus.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">Selection mode</strong> — selecting an item sets a value and updates the button label to show the selected item's text. The selected item is visually marked as active in the menu. Supports controlled (<code className="px-1 py-0.5" data-o9ds-inline-code>selectedItem</code>) and uncontrolled (<code className="px-1 py-0.5" data-o9ds-inline-code>defaultSelectedItem</code>) patterns.
                </li>
              </ul>
            </section>

            <section id="overview-states" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">States</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Default</strong> — trigger ready to activate; caret pointing down.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Hover</strong> — inherits hover from the button variant.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Focus</strong> — visible focus ring via <code className="px-1 py-0.5" data-o9ds-inline-code>:focus-visible</code>.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Open</strong> — menu visible; caret rotated to angle-up.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Disabled</strong> — trigger disabled; menu cannot open.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Loading</strong> — Pattern A shimmer overlay on trigger; menu cannot open.</li>
              </ul>
            </section>

            <section id="overview-naming" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Naming guidance</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Use a clear, action-oriented label that hints at the menu's purpose. Prefer "Export as" over "Export" when the user must pick a format. In selection mode, the initial label should describe the category (e.g. "Sort by") so the replaced value reads naturally.
              </p>
            </section>

            <section id="overview-dos-donts" className="scroll-mt-24">
              <div className="grid gap-4 sm:grid-cols-2">
                <GrayBgCard title="Do" bullets={['Include a trailing caret to signal the menu', 'Use action mode for fire-and-forget commands', 'Use selection mode when the user picks a persistent value', 'Pair with tooltips when the label is ambiguous']} />
                <WhiteBgCard title="Don't" bullets={['Hide the caret — users expect it to indicate a dropdown', 'Use for navigation — use links or a navigation menu', 'Mix action and selection items in one menu', 'Overload the menu with more than 10–12 items without filtering']} />
              </div>
            </section>
          </div>
        )}

        {activeTab === 'Usage' && (
          <div className="space-y-12">
            <section id="usage-when" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Consolidating related actions behind a single trigger (e.g. "More actions", "Export as").</li>
                <li>Letting the user pick from a list that updates the button label (e.g. "Sort by: Name").</li>
                <li>Toolbar actions that need a submenu or grouped item list.</li>
                <li>When space is limited and a full button group would be too wide.</li>
                <li>Presenting filterable action lists for large option sets.</li>
              </ul>
            </section>

            <section id="usage-when-not" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When not to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>For navigation — use a <strong className="text-o9ds-light-primary dark:text-white font-medium">link</strong> or navigation menu.</li>
                <li>For form field selection — use a <strong className="text-o9ds-light-primary dark:text-white font-medium">select</strong> or combobox.</li>
                <li>When there are only 2–3 options visible at once — use a <strong className="text-o9ds-light-primary dark:text-white font-medium">button group</strong>.</li>
                <li>For a split action + dropdown — use a <strong className="text-o9ds-light-primary dark:text-white font-medium">split button</strong> instead.</li>
              </ul>
            </section>

            <section id="usage-scenarios" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Scenarios</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Toolbar "More actions"</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Use tertiary variant in action mode. The label stays "More" or "Actions" regardless of which item the user clicks. Keep destructive items at the bottom with a divider.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Sort selector</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Use selection mode with <code className="px-1 py-0.5" data-o9ds-inline-code>displaySelected="label"</code>. The trigger shows the currently active sort field (e.g. "Name", "Date modified").
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Export menu</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Use action mode with a leading icon. Items might include "Export as CSV", "Export as PDF", "Copy to clipboard". Each action fires independently.
                  </p>
                </div>
              </div>
            </section>

            <section id="usage-best-practices" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Best practices</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Always include the caret icon so users recognize the dropdown affordance.</li>
                <li>In selection mode, set a sensible default so the trigger is never empty.</li>
                <li>Group related items with dividers to improve scanability in long menus.</li>
                <li>Enable <code className="px-1 py-0.5" data-o9ds-inline-code>filterable</code> when the menu has more than 7–8 items.</li>
                <li>Use <code className="px-1 py-0.5" data-o9ds-inline-code>closeOnSelect={'{false}'}</code> only when multi-step selection within the menu is required.</li>
              </ul>
            </section>

            <section id="usage-layout" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Layout & grouping</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Placement</strong> — defaults to <code className="px-1 py-0.5" data-o9ds-inline-code>bottom-end</code>. Use <code className="px-1 py-0.5" data-o9ds-inline-code>bottom-start</code> in RTL or when the trigger is right-aligned.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Menu width</strong> — the ActionMenu panel auto-sizes to content. Use <code className="px-1 py-0.5" data-o9ds-inline-code>maxHeight</code> for long lists to keep the overlay manageable.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Toolbar context</strong> — when placed inside a toolbar, the trigger inherits transparent background and layer-hover colors via parent overrides.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Adjacent buttons</strong> — space dropdown buttons from other controls using system spacing tokens.</li>
              </ul>
            </section>
          </div>
        )}

        {activeTab === 'Code/APIs' && (
          <div className="space-y-12">
            <section id="code-props" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Component API</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
                O9DropdownButton composes an O9Button trigger with an O9ActionMenu panel. All overlay behavior is delegated to the ActionMenu instance.
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
                  { event: 'dd-btn:select', payload: '{ item, index }', desc: 'Menu item selected. Cancelable — preventing default stops close-on-select.' },
                  { event: 'dd-btn:open', payload: '{}', desc: 'Menu opened. Cancelable.' },
                  { event: 'dd-btn:close', payload: '{}', desc: 'Menu closed. Cancelable.' },
                  { event: 'dd-btn:change', payload: '{ item, previousItem }', desc: 'Selection changed (selection mode only).' },
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
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Action mode — React</h3>
                <CodeBlock
                  code={`import { O9DropdownButton } from '@o9ds/react';

<O9DropdownButton
  label="Actions"
  variant="secondary"
  items={[
    { id: 'edit', label: 'Edit', icon: 'edit' },
    { id: 'duplicate', label: 'Duplicate', icon: 'copy' },
    { id: 'delete', label: 'Delete', icon: 'trash', danger: true },
  ]}
  onSelect={(item) => handleAction(item.id)}
/>`}
                  label="React — action mode"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Selection mode — React</h3>
                <CodeBlock
                  code={`<O9DropdownButton
  label="Sort by"
  mode="selection"
  displaySelected="label"
  defaultSelectedItem="name"
  items={[
    { id: 'name', label: 'Name' },
    { id: 'date', label: 'Date modified' },
    { id: 'size', label: 'Size' },
  ]}
  onSelect={(item) => setSortField(item.id)}
/>`}
                  label="React — selection mode"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">With leading icon and filtering</h3>
                <CodeBlock
                  code={`<O9DropdownButton
  label="Export"
  icon="download"
  variant="outline"
  filterable
  items={exportOptions}
  onSelect={handleExport}
/>`}
                  label="React — icon + filterable"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Controlled selection — React</h3>
                <CodeBlock
                  code={`const [selected, setSelected] = React.useState('name');

<O9DropdownButton
  label="Sort by"
  mode="selection"
  selectedItem={selected}
  items={sortOptions}
  onSelect={(item) => setSelected(item.id)}
/>`}
                  label="React — controlled"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">HTML markup</h3>
                <CodeBlock
                  code={`<div class="o9ds-dd-btn">
  <button class="o9ds-btn o9ds-btn--secondary o9ds-btn--md"
          type="button"
          aria-haspopup="menu"
          aria-expanded="false">
    <span class="o9ds-dd-btn__lbl">Actions</span>
    <span class="o9ds-dd-btn__caret o9con o9con-angle-down"
          aria-hidden="true"></span>
  </button>
  <!-- O9ActionMenu panel rendered when open -->
</div>`}
                  label="HTML"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Vanilla JS</h3>
                <CodeBlock
                  code={`import { O9DropdownButton } from '@o9ds/js';

const el = document.querySelector('#my-dd-btn');
const ddBtn = O9DropdownButton.initialize(el, {
  label: 'Actions',
  variant: 'secondary',
  items: [
    { id: 'edit', label: 'Edit' },
    { id: 'delete', label: 'Delete' },
  ],
  onSelect: (item) => console.log(item.id),
});

ddBtn.open();
ddBtn.close();
ddBtn.toggle();
ddBtn.setLabel('More');
ddBtn.setVariant('tertiary');
ddBtn.disabled(true);
ddBtn.destroy();`}
                  label="Vanilla JS"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Loading & disabled</h3>
                <CodeBlock
                  code={`<O9DropdownButton label="Actions" loading />
<O9DropdownButton label="Actions" disabled />

<!-- HTML loading -->
<div class="o9ds-dd-btn">
  <button class="o9ds-btn o9ds-btn--primary o9ds-btn--md loading"
          type="button" aria-busy="true" aria-haspopup="menu">
    <span class="o9ds-dd-btn__lbl">Actions</span>
    <span class="o9ds-dd-btn__caret o9con o9con-angle-down"
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
                The dropdown button inherits all trigger styling from <code className="px-1 py-0.5" data-o9ds-inline-code>o9ds-btn</code> variant/size classes. These variables control the caret layout specifically.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { cat: 'Caret', vars: ['--o9ds-dd-btn-caret-size', '--o9ds-dd-btn-caret-color'] },
                  { cat: 'Layout', vars: ['--o9ds-dd-btn-gap'] },
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
                All other trigger styling (height, padding, font-size, bg, text-color, border) is inherited from <code className="px-1 py-0.5" data-o9ds-inline-code>o9ds-btn--{'{variant}'}</code> and <code className="px-1 py-0.5" data-o9ds-inline-code>o9ds-btn--{'{size}'}</code> modifier classes.
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
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Font</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Icon</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Caret</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SIZES.map((row) => (
                      <tr key={row.size} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{row.size}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.height}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.font}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.icon}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.caret}</td>
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
                  { map: 'loading → class + aria-busy', detail: '.loading + aria-busy="true"' },
                  { map: 'open → class', detail: '.open — caret rotates 180°' },
                ]}
              />
            </section>
          </div>
        )}

        {activeTab === 'Accessibility' && (
          <section id="dropdown-button-accessibility" className="space-y-12">
            <div id="a11y-intro" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Dropdown Button accessibility</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The dropdown button uses a native <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;button&gt;</code> trigger with <code className="px-1 py-0.5" data-o9ds-inline-code>aria-haspopup="menu"</code> and <code className="px-1 py-0.5" data-o9ds-inline-code>aria-expanded</code> to communicate the menu trigger pattern. The ActionMenu panel manages its own <code className="px-1 py-0.5" data-o9ds-inline-code>role="menu"</code> and item roles.
              </p>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                Screen readers typically announce: <code className="px-1 py-0.5" data-o9ds-inline-code>[label], button, has popup menu, collapsed</code>
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
                <li>All internal menu navigation (ArrowUp/Down, Home, End, Enter, Space, type-ahead, submenu Left/Right) is handled by the composed ActionMenu.</li>
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
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">On open:</strong> focus moves into the ActionMenu — the first non-disabled item, or the search input if <code className="px-1 py-0.5" data-o9ds-inline-code>filterable</code> is true.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">On close:</strong> focus returns to the trigger button.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">On select:</strong> if <code className="px-1 py-0.5" data-o9ds-inline-code>closeOnSelect</code> is true, focus returns to the trigger after the menu closes.</li>
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
              <CodeBlock code={`<button type="button" disabled aria-haspopup="menu" aria-expanded="false">Actions</button>`} label="Disabled trigger" />
            </div>

            <div id="a11y-loading" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Loading state</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Loading uses Pattern A: a shimmer overlay on the trigger button. The menu cannot be opened during loading. The trigger receives <code className="px-1 py-0.5" data-o9ds-inline-code>aria-busy="true"</code>.
              </p>
              <CodeBlock code={`<button type="button" aria-busy="true" aria-haspopup="menu">Actions</button>`} label="Loading trigger" />
            </div>

            <div id="a11y-notes" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Accessibility notes</h3>
              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
                <WhiteBgCard title="Menu trigger pattern">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    The trigger uses <code className="px-1 py-0.5" data-o9ds-inline-code>aria-haspopup="menu"</code> and <code className="px-1 py-0.5" data-o9ds-inline-code>aria-expanded</code> following the WAI-ARIA menu button pattern. Do not add <code className="px-1 py-0.5" data-o9ds-inline-code>role="button"</code> — the native element provides it.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Focus return">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    After the menu closes (via Escape, Tab, or item selection), focus always returns to the trigger button. This ensures users don't lose their place in the page.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Selection mode">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    In selection mode, the trigger label updates to reflect the selected value. Screen readers re-announce the new label on focus, keeping users informed of the current selection.
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
