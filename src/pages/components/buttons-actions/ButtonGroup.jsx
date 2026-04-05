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
  { prop: 'items', type: 'ButtonGroupItemConfig[]', default: '[]', required: 'Yes', desc: 'Array of item configs. Each: { value, label?, icon?, disabled?, excluded? }' },
  { prop: 'value', type: "string | string[] | null", default: 'null', required: 'No', desc: 'Selected value(s). string for single-select, string[] for multi-select.' },
  { prop: 'variant', type: "'primary' | 'secondary'", default: "'primary'", required: 'No', desc: 'Visual variant controlling active item colors.' },
  { prop: 'size', type: "'sm' | 'lg'", default: "'lg'", required: 'No', desc: "Group size. sm = 24px (child buttons sm), lg = 32px (child buttons md)." },
  { prop: 'multiSelect', type: 'boolean', default: 'false', required: 'No', desc: 'Allow multiple items to be selected simultaneously.' },
  { prop: 'iconOnly', type: 'boolean', default: 'false', required: 'No', desc: 'All items render as icon-only buttons.' },
  { prop: 'hasOverflow', type: 'boolean', default: 'false', required: 'No', desc: 'Enable overflow detection. Clipped items appear in an overflow menu.' },
  { prop: 'expandOnSelect', type: 'boolean', default: 'false', required: 'No', desc: 'Selected item expands to show label; others collapse to icon-only (single-select only).' },
  { prop: 'disabled', type: 'boolean', default: 'false', required: 'No', desc: 'Disable the entire group and all child buttons.' },
  { prop: 'loading', type: 'boolean', default: 'false', required: 'No', desc: 'Loading state (Pattern C). Group blocks interaction; children show shimmer.' },
  { prop: 'ariaLabel', type: 'string', default: '—', required: 'Yes', desc: 'Accessible label for the toolbar. Required since no visible label exists.' },
  { prop: 'onChange', type: 'function', default: 'undefined', required: 'No', desc: 'Selection change callback. Payload varies by mode.' },
]

const SIZES = [
  { size: 'sm', height: '24px', font: '12px', icon: '16px', padding: '8px / 4px', maps: 'button sm' },
  { size: 'lg', height: '32px', font: '14px', icon: '20px', padding: '12px / 6px', maps: 'button md' },
]

const METHODS = [
  { method: 'value()', signature: '() → string | string[] | null', desc: 'Get current selected value(s).' },
  { method: 'value(v)', signature: '(string | string[] | null) → void', desc: 'Set selected value(s). Updates .active and aria-pressed on child buttons.' },
  { method: 'disabled()', signature: '() → boolean', desc: 'Get disabled state.' },
  { method: 'disabled(b)', signature: '(boolean) → void', desc: 'Set disabled state on group and all child buttons.' },
  { method: 'setVariant(v)', signature: '(string) → void', desc: 'Change visual variant (primary or secondary).' },
  { method: 'setLoading(b)', signature: '(boolean) → void', desc: 'Toggle loading state. Propagates to non-excluded children.' },
  { method: 'setItems(items)', signature: '(array) → void', desc: 'Replace items and reset selection.' },
  { method: 'focus()', signature: '() → void', desc: 'Focus the active item, or first non-disabled item.' },
  { method: 'destroy()', signature: '() → void', desc: 'Clean up all listeners, child instances, and DOM.' },
]

const ARIA_ATTRS = [
  { attr: 'aria-label', when: 'Always — required accessible name for the toolbar. No visible label exists.' },
  { attr: 'aria-orientation', when: "Set to 'horizontal'. Informs AT that ArrowLeft/ArrowRight navigate between items." },
  { attr: 'aria-busy', when: "Set to 'true' during loading state." },
  { attr: 'aria-pressed', when: "On each child button — 'true' for selected, 'false' for unselected." },
  { attr: 'aria-haspopup', when: "On overflow trigger button — set to 'menu' when overflow items exist." },
  { attr: 'aria-expanded', when: 'On overflow trigger — indicates whether the overflow menu is open.' },
]

export default function ButtonGroup() {
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
        { id: 'overview-modes', label: 'Selection modes' },
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
        { id: 'code-size', label: 'Size & spacing' },
      ]
    }
    if (activeTab === 'Accessibility') {
      return [
        { id: 'a11y-intro', label: 'Overview' },
        { id: 'a11y-keyboard', label: 'Keyboard interaction' },
        { id: 'a11y-focus', label: 'Focus behavior' },
        { id: 'a11y-disabled', label: 'Disabled state' },
        { id: 'a11y-loading', label: 'Loading state' },
        { id: 'a11y-overflow', label: 'Overflow trigger' },
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
            Button Group
          </h1>
          <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed mb-2">
            {getComponentPageDescription('button-group')}
          </p>
          <p className="text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed">
            A horizontal collection of buttons acting as a unified selection control. Supports single-select, multi-select, icon-only, overflow handling, and animated label expansion on selection.
          </p>

          <DocTabs tabs={tabs} activeTab={activeTab} onSelect={setActiveTab} />
        </section>

        {activeTab === 'Overview' && (
          <div className="space-y-12">
            <section id="overview-purpose" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Purpose</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The Button Group provides a compact, visually unified set of related choices. It replaces individual scattered buttons with a cohesive toolbar-like control where users pick one or several options without leaving context.
              </p>
            </section>

            <section id="overview-definition" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Definition & role</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                A <strong className="text-o9ds-light-primary dark:text-white font-medium">button group</strong> is a horizontal grouping of O9Button or O9IconButton items acting as a selection control. It uses <code className="px-1 py-0.5" data-o9ds-inline-code>role="toolbar"</code> to communicate that its children are functionally related. Each child button maintains its native button role, while the toolbar groups them for assistive technology.
              </p>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                In single-select mode it behaves like a radio group (arrow keys move focus and change selection). In multi-select mode it behaves like a set of independent toggles (arrows move focus; Space/Enter toggles).
              </p>
            </section>

            <section id="overview-anatomy" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Anatomy</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                A button group combines a <strong className="text-o9ds-light-primary dark:text-white font-medium">container</strong> (the toolbar), one or more <strong className="text-o9ds-light-primary dark:text-white font-medium">child buttons</strong> (each with an optional icon and label), and an optional <strong className="text-o9ds-light-primary dark:text-white font-medium">overflow trigger</strong>.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">1 — Container</strong> — horizontal toolbar with flush items (gap: 0). Applies variant and size context via CSS variable overrides on child buttons.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">2 — Child buttons</strong> — O9Button or O9IconButton instances. Active item shows filled background and adjusted text/icon color. Inactive items show transparent background with secondary text.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">3 — Overflow trigger</strong> — ellipsis icon button appended when <code className="px-1 py-0.5" data-o9ds-inline-code>hasOverflow</code> is true and items are clipped. Opens an action menu listing hidden items.
                </li>
              </ul>
            </section>

            <section id="overview-variants" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Variants</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed mb-4">
                Two variants control how the active item is visually distinguished from inactive items.
              </p>
              <ul className="space-y-3 text-o9ds-light-secondary dark:text-neutral-400">
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white">Primary</strong> — subtle active background (<code className="px-1 py-0.5" data-o9ds-inline-code>theme-active-2</code>) with theme-active text and icon. Default variant.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white">Secondary</strong> — high-contrast dark background (<code className="px-1 py-0.5" data-o9ds-inline-code>theme-active-1</code>) with inverse (white) text and icon.
                </li>
              </ul>
            </section>

            <section id="overview-modes" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Selection modes</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">Single-select (default)</strong> — only one item can be active. Arrow keys move focus and change selection simultaneously. Clicking the already-selected item is a no-op.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">Multi-select</strong> — multiple items can be active. Arrow keys only move focus; Space/Enter toggles the focused item. Value is always an array.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">Icon-only</strong> — all items render as O9IconButton instances with labels hidden. Every item must have an icon.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">Expand on select</strong> — the selected item animates to reveal its label while inactive items collapse to icon-only. Single-select only.
                </li>
              </ul>
            </section>

            <section id="overview-states" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">States</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Default</strong> — items laid out horizontally with flush edges. Active item highlighted.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Hover</strong> — inactive items show <code className="px-1 py-0.5" data-o9ds-inline-code>theme-hover-2</code>; active items use variant-specific hover tokens.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Focus</strong> — standard focus ring on the focused child button via roving tabindex.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Disabled</strong> — all items disabled, pointer-events blocked on the container.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Loading</strong> — Pattern C: group blocks pointer-events with <code className="px-1 py-0.5" data-o9ds-inline-code>aria-busy</code>; each child shows a shimmer overlay.</li>
              </ul>
            </section>

            <section id="overview-naming" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Naming guidance</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Use short, parallel labels across items. Prefer nouns or adjectives that describe the option rather than verbs (e.g. "Bold", "Italic", "Underline" instead of "Make bold"). If icon-only, ensure each item has a descriptive <code className="px-1 py-0.5" data-o9ds-inline-code>ariaLabel</code> via the toolbar's <code className="px-1 py-0.5" data-o9ds-inline-code>ariaLabel</code> prop.
              </p>
            </section>

            <section id="overview-dos-donts" className="scroll-mt-24">
              <div className="grid gap-4 sm:grid-cols-2">
                <GrayBgCard title="Do" bullets={['Provide a descriptive ariaLabel on the group', 'Use single-select for mutually exclusive choices', 'Use multi-select only for independent toggles', 'Keep item counts small (2–6 visible items)']} />
                <WhiteBgCard title="Don't" bullets={['Mix selection and action semantics in one group', 'Use as a navigation tab bar (use tabs instead)', 'Nest button groups inside other button groups', 'Use more than two visual levels of hierarchy']} />
              </div>
            </section>
          </div>
        )}

        {activeTab === 'Usage' && (
          <div className="space-y-12">
            <section id="usage-when" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Toggling between two options in single-select (e.g. On/Off, List/Grid).</li>
                <li>Single-select toolbar for mutually exclusive choices like text alignment (left, center, right, justify).</li>
                <li>Multi-select toolbar for independent toggles like text formatting (bold, italic, underline).</li>
                <li>Compact action bar with icon-only items and overflow support for responsive layouts.</li>
                <li>Presenting a small, bounded set of related options without the weight of a dropdown.</li>
              </ul>
            </section>

            <section id="usage-when-not" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When not to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Navigation between views or pages — use <strong className="text-o9ds-light-primary dark:text-white font-medium">tabs</strong> instead.</li>
                <li>Many options that would overflow frequently — use a <strong className="text-o9ds-light-primary dark:text-white font-medium">dropdown</strong> or select.</li>
                <li>Independent actions that are not selection-based — use individual <strong className="text-o9ds-light-primary dark:text-white font-medium">buttons</strong>.</li>
                <li>On/off with a clear binary meaning — consider a <strong className="text-o9ds-light-primary dark:text-white font-medium">switch</strong>.</li>
              </ul>
            </section>

            <section id="usage-scenarios" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Scenarios</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Text formatting toolbar</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Use multi-select with icon-only items for bold, italic, underline, and strikethrough. Each toggle is independent.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">View switcher</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Use single-select with <code className="px-1 py-0.5" data-o9ds-inline-code>expandOnSelect</code> to show the active view label while keeping inactive items compact.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Responsive toolbar</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Enable <code className="px-1 py-0.5" data-o9ds-inline-code>hasOverflow</code> so items that don't fit are moved into an overflow action menu automatically.
                  </p>
                </div>
              </div>
            </section>

            <section id="usage-best-practices" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Best practices</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Keep item count small — ideally 2 to 6 visible items. Large sets should use a dropdown.</li>
                <li>Ensure all items in the group share the same conceptual domain (formatting, alignment, view mode).</li>
                <li>Use the secondary variant when the group needs stronger contrast in a light-background toolbar.</li>
                <li>When using icon-only mode, provide clear tooltips or an <code className="px-1 py-0.5" data-o9ds-inline-code>ariaLabel</code> so the purpose of each item is accessible.</li>
              </ul>
            </section>

            <section id="usage-layout" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Layout & grouping</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Flush items</strong> — items are laid out with zero gap for a unified appearance. Border-radius is stripped from interior items.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Toolbar placement</strong> — place the group alongside other toolbar controls with system spacing between groups.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Overflow</strong> — when <code className="px-1 py-0.5" data-o9ds-inline-code>hasOverflow</code> is enabled, clipped items collapse into an ellipsis menu at the inline-end.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Expand label</strong> — use for view switchers where showing the selected label improves scannability without widening the default footprint.</li>
              </ul>
            </section>
          </div>
        )}

        {activeTab === 'Code/APIs' && (
          <div className="space-y-12">
            <section id="code-props" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Component API</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
                O9ButtonGroup composes O9Button and O9IconButton instances internally. The group overrides child button CSS variables within its scope.
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
                  { event: 'btn-grp:change', payload: '{ value, previousValue, changedValue?, selected? }', desc: 'Fires on selection change. changedValue and selected present in multi-select mode.' },
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
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Single-select — React</h3>
                <CodeBlock
                  code={`import { O9ButtonGroup } from '@o9ds/react';

<O9ButtonGroup
  items={[
    { value: 'bold', label: 'Bold', icon: 'bold' },
    { value: 'italic', label: 'Italic', icon: 'italic' },
    { value: 'underline', label: 'Underline', icon: 'underline' },
  ]}
  value="bold"
  ariaLabel="Text formatting"
  onChange={({ value }) => console.log('Selected:', value)}
/>`}
                  label="React — single-select"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Multi-select — React</h3>
                <CodeBlock
                  code={`<O9ButtonGroup
  items={items}
  value={['bold', 'italic']}
  multiSelect
  ariaLabel="Text formatting"
  onChange={({ value, changedValue, selected }) => {
    console.log('Values:', value, 'Changed:', changedValue, 'Selected:', selected);
  }}
/>`}
                  label="React — multi-select"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Icon-only — React</h3>
                <CodeBlock
                  code={`<O9ButtonGroup
  items={[
    { value: 'left', icon: 'align-left' },
    { value: 'center', icon: 'align-center' },
    { value: 'right', icon: 'align-right' },
  ]}
  iconOnly
  value="center"
  ariaLabel="Text alignment"
/>`}
                  label="React — icon-only"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Expand label on select — React</h3>
                <CodeBlock
                  code={`<O9ButtonGroup
  items={viewItems}
  expandOnSelect
  value="list"
  ariaLabel="View mode"
/>`}
                  label="React — expand on select"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Vanilla JS</h3>
                <CodeBlock
                  code={`import { O9ButtonGroup } from '@o9ds/js';

const el = document.querySelector('#my-btn-group');
const group = O9ButtonGroup.initialize(el, {
  items: [
    { value: 'bold', label: 'Bold', icon: 'bold' },
    { value: 'italic', label: 'Italic', icon: 'italic' },
    { value: 'underline', label: 'Underline', icon: 'underline' },
  ],
  value: 'bold',
  ariaLabel: 'Text formatting',
  onChange: ({ value, previousValue }) => {
    console.log('Selected:', value, 'Previous:', previousValue);
  },
});

group.value('italic');
group.disabled(true);
group.setLoading(true);
group.setVariant('secondary');
group.setItems(newItems);
group.focus();
group.destroy();`}
                  label="Vanilla JS"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">HTML markup</h3>
                <CodeBlock
                  code={`<div class="o9ds-btn-grp o9ds-btn-grp--primary o9ds-btn-grp--lg"
     role="toolbar"
     aria-orientation="horizontal"
     aria-label="Text formatting">
  <button class="o9ds-btn o9ds-btn--tertiary o9ds-btn--md active"
          aria-pressed="true" tabindex="0" data-value="bold">
    <span class="o9ds-btn__ico o9con o9con-bold" aria-hidden="true"></span>
    <span class="o9ds-btn__lbl">Bold</span>
  </button>
  <button class="o9ds-btn o9ds-btn--tertiary o9ds-btn--md"
          aria-pressed="false" tabindex="-1" data-value="italic">
    <span class="o9ds-btn__ico o9con o9con-italic" aria-hidden="true"></span>
    <span class="o9ds-btn__lbl">Italic</span>
  </button>
</div>`}
                  label="HTML"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Loading state</h3>
                <CodeBlock
                  code={`<O9ButtonGroup
  items={items}
  value="bold"
  loading
  ariaLabel="Text formatting"
/>

<!-- HTML loading -->
<div class="o9ds-btn-grp o9ds-btn-grp--primary o9ds-btn-grp--lg loading"
     role="toolbar" aria-busy="true" aria-label="Text formatting">
  <button class="o9ds-btn o9ds-btn--tertiary o9ds-btn--md loading"
          aria-pressed="true" tabindex="0" disabled>
    <span class="o9ds-btn__lbl">Bold</span>
  </button>
</div>`}
                  label="Loading (Pattern C)"
                />
              </div>
            </section>

            <section id="code-css" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">CSS variables</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                Override on <code className="px-1 py-0.5" data-o9ds-inline-code>.o9ds-btn-grp</code> or a parent to theme the group. The group also overrides child button CSS variables within its scope.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { cat: 'Layout', vars: ['--o9ds-btn-grp-gap', '--o9ds-btn-grp-height'] },
                  { cat: 'Item default', vars: ['--o9ds-btn-grp-item-bg', '--o9ds-btn-grp-item-text-color', '--o9ds-btn-grp-item-icon-color', '--o9ds-btn-grp-item-font-weight'] },
                  { cat: 'Active (primary)', vars: ['--o9ds-btn-grp-active-bg', '--o9ds-btn-grp-active-text', '--o9ds-btn-grp-active-icon', '--o9ds-btn-grp-active-font-weight'] },
                  { cat: 'Active (secondary)', vars: ['--o9ds-btn-grp-active-bg', '--o9ds-btn-grp-active-text', '--o9ds-btn-grp-active-icon'] },
                  { cat: 'Hover', vars: ['--o9ds-btn-grp-item-bg-hover', '--o9ds-btn-grp-active-bg-hover-primary', '--o9ds-btn-grp-active-bg-hover-secondary'] },
                  { cat: 'Animation', vars: ['--o9ds-btn-grp-expand-duration', '--o9ds-btn-grp-expand-easing'] },
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
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Height</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Font</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Icon</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Padding (inline / block)</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Maps to</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SIZES.map((row) => (
                      <tr key={row.size} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{row.size}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.height}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.font}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.icon}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.padding}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.maps}</td>
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
                  { map: 'variant → BEM modifier', detail: 'o9ds-btn-grp--primary | secondary' },
                  { map: 'size → BEM modifier', detail: 'o9ds-btn-grp--sm | lg' },
                  { map: 'multiSelect → modifier', detail: 'o9ds-btn-grp--multi' },
                  { map: 'iconOnly → modifier', detail: 'o9ds-btn-grp--icon-only' },
                  { map: 'expandOnSelect → modifier', detail: 'o9ds-btn-grp--expand-lbl' },
                  { map: 'hasOverflow → modifier', detail: 'o9ds-btn-grp--overflow' },
                  { map: 'loading → class + aria-busy', detail: '.loading + aria-busy="true"' },
                  { map: 'disabled → class', detail: '.is-disabled' },
                ]}
              />
            </section>
          </div>
        )}

        {activeTab === 'Accessibility' && (
          <section id="button-group-accessibility" className="space-y-12">
            <div id="a11y-intro" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Button Group accessibility</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The button group uses <code className="px-1 py-0.5" data-o9ds-inline-code>role="toolbar"</code> to communicate that its children are functionally related controls. Each child button uses <code className="px-1 py-0.5" data-o9ds-inline-code>aria-pressed</code> to communicate toggle state. Navigation uses a roving tabindex pattern so only one item is in the tab order at any time.
              </p>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                Screen readers typically announce: <code className="px-1 py-0.5" data-o9ds-inline-code>[ariaLabel], toolbar</code> on entry, then <code className="px-1 py-0.5" data-o9ds-inline-code>[item label], toggle button, pressed/not pressed</code> for each item.
              </p>
            </div>

            <div id="a11y-keyboard" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Keyboard interaction</h3>
              <p className="text-sm font-medium text-o9ds-light-primary dark:text-white">Single-select mode</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>Arrow keys move focus <strong className="text-o9ds-light-primary dark:text-white font-medium">and</strong> change selection (matches WAI-ARIA radio group pattern).</li>
                <li>Space/Enter selects the focused item (no-op if already selected).</li>
              </ul>
              <p className="text-sm font-medium text-o9ds-light-primary dark:text-white pt-2">Multi-select mode</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>Arrow keys only move focus — they do not change selection.</li>
                <li>Space/Enter toggles the focused item's selected state.</li>
              </ul>
              <DocTable
                columns={[
                  { key: 'key', label: 'Key', mono: true },
                  { key: 'behavior', label: 'Action' },
                ]}
                rows={[
                  { key: 'ArrowRight', behavior: 'Move focus to next non-disabled item (wraps to first). In single-select, also selects.' },
                  { key: 'ArrowLeft', behavior: 'Move focus to previous non-disabled item (wraps to last). In single-select, also selects.' },
                  { key: 'Home', behavior: 'Move focus to the first non-disabled item.' },
                  { key: 'End', behavior: 'Move focus to the last non-disabled item.' },
                  { key: 'Space / Enter', behavior: 'Multi-select: toggle focused item. Single-select: select focused item.' },
                  { key: 'Tab', behavior: 'Enter/exit toolbar. Only one item in tab order at a time.' },
                  { key: 'Shift+Tab', behavior: 'Move focus out of the toolbar to previous focusable element.' },
                ]}
              />
            </div>

            <div id="a11y-focus" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Focus behavior</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <strong className="text-o9ds-light-primary dark:text-white font-medium">Roving tabindex:</strong> only the currently selected item (or the first non-disabled item when none is selected) has <code className="px-1 py-0.5" data-o9ds-inline-code>tabindex="0"</code>. All other items have <code className="px-1 py-0.5" data-o9ds-inline-code>tabindex="-1"</code>. This means pressing Tab enters the toolbar at the active item and exits with the next Tab press.
              </p>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Disabled items are skipped by arrow key navigation within the toolbar.
              </p>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <strong className="text-o9ds-light-primary dark:text-white font-normal">WCAG:</strong> 2.4.7 Focus Visible · 2.1.1 Keyboard
              </p>
            </div>

            <div id="a11y-disabled" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Disabled state</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                When the group is disabled, all child buttons are disabled and <code className="px-1 py-0.5" data-o9ds-inline-code>pointer-events: none</code> is set on the root. Individual items can also be independently disabled via their config. Group disabled overrides individual enabled.
              </p>
              <CodeBlock
                code={`<O9ButtonGroup items={items} disabled ariaLabel="Formatting" />

<div class="o9ds-btn-grp o9ds-btn-grp--primary o9ds-btn-grp--lg is-disabled"
     role="toolbar" aria-label="Formatting">
  <button class="o9ds-btn o9ds-btn--tertiary o9ds-btn--md" disabled
          aria-pressed="false" tabindex="-1">
    <span class="o9ds-btn__lbl">Bold</span>
  </button>
</div>`}
                label="Disabled group"
              />
            </div>

            <div id="a11y-loading" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Loading state</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Loading uses Pattern C: the group sets <code className="px-1 py-0.5" data-o9ds-inline-code>pointer-events: none</code> and <code className="px-1 py-0.5" data-o9ds-inline-code>aria-busy="true"</code> on the root. Each child button shows its own Pattern A shimmer overlay (unless excluded in item config via <code className="px-1 py-0.5" data-o9ds-inline-code>excluded: true</code>).
              </p>
            </div>

            <div id="a11y-overflow" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Overflow trigger</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                When <code className="px-1 py-0.5" data-o9ds-inline-code>hasOverflow</code> is enabled and items are clipped, an overflow trigger button appears at the inline-end. This button has <code className="px-1 py-0.5" data-o9ds-inline-code>aria-haspopup="menu"</code> and <code className="px-1 py-0.5" data-o9ds-inline-code>aria-expanded</code> to indicate whether the overflow menu is currently open.
              </p>
            </div>

            <div id="a11y-notes" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Accessibility notes</h3>
              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
                <WhiteBgCard title="Toolbar role">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    The root uses <code className="px-1 py-0.5" data-o9ds-inline-code>role="toolbar"</code> with <code className="px-1 py-0.5" data-o9ds-inline-code>aria-orientation="horizontal"</code> and a required <code className="px-1 py-0.5" data-o9ds-inline-code>aria-label</code>. This groups the child buttons for assistive technology.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Toggle semantics">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Every child button uses <code className="px-1 py-0.5" data-o9ds-inline-code>aria-pressed</code> to communicate toggle state. This is the WAI-ARIA recommended pattern for toggle buttons in a toolbar.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Touch devices">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Hover styles are scoped to <code className="px-1 py-0.5" data-o9ds-inline-code>.no-touch</code> to prevent sticky hover on mobile devices. Touch activation uses the same press semantics.
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
