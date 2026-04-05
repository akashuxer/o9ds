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
  { name: 'Primary', desc: 'Main icon action in a compact toolbar or control group — use sparingly' },
  { name: 'Secondary', desc: 'Supporting icon actions that are important but not the primary call-to-action' },
  { name: 'Tertiary', desc: 'Low-emphasis icon actions in dense toolbars, inline contexts, or nested controls' },
  { name: 'Outline', desc: 'Icon actions needing brand-color emphasis without a filled background' },
  { name: 'Danger', desc: 'Destructive icon actions (delete, remove); always pair with a confirmation step' },
]

const PROPS = [
  { prop: 'icon', type: 'string', default: '—', required: 'Yes', desc: 'Icon name without o9con- prefix' },
  { prop: 'tooltip', type: 'string | TooltipConfig', default: '—', required: 'Yes', desc: 'Accessible label and tooltip. Maps to aria-label and title.' },
  { prop: 'variant', type: "'primary' | 'secondary' | 'tertiary' | 'outline' | 'danger'", default: "'primary'", required: 'No', desc: 'Visual style variant' },
  { prop: 'size', type: "'xs' | 'sm' | 'md' | 'lg'", default: "'md'", required: 'No', desc: 'Button size. xs (16px) is exclusive to IconButton.' },
  { prop: 'type', type: "'button' | 'submit' | 'reset'", default: "'button'", required: 'No', desc: 'Native HTML button type' },
  { prop: 'disabled', type: 'boolean', default: 'false', required: 'No', desc: 'Prevents all interaction' },
  { prop: 'selected', type: 'boolean', default: 'undefined', required: 'No', desc: 'Toggle/active state. Sets .active class and aria-pressed.' },
  { prop: 'loading', type: 'boolean', default: 'false', required: 'No', desc: 'Shows skeleton shimmer overlay; prevents interaction' },
  { prop: 'onClick', type: '(event) => void', default: 'undefined', required: 'No', desc: 'Click handler; suppressed when disabled or loading' },
  { prop: 'onFocus', type: '(event) => void', default: 'undefined', required: 'No', desc: 'Focus handler callback' },
  { prop: 'onBlur', type: '(event) => void', default: 'undefined', required: 'No', desc: 'Blur handler callback' },
  { prop: 'onKeyDown', type: '(event) => void', default: 'undefined', required: 'No', desc: 'Keydown handler; suppressed on Enter/Space when disabled or loading' },
]

const SIZES = [
  { size: 'xs', dimensions: '16×16px', icon: '16px', padding: '0px', notes: 'Icon Button exclusive — dense inline controls' },
  { size: 'sm', dimensions: '24×24px', icon: '16px', padding: '4px', notes: 'Compact toolbars and data-dense layouts' },
  { size: 'md', dimensions: '32×32px', icon: '20px', padding: '6px', notes: 'Default size for most contexts' },
  { size: 'lg', dimensions: '40×40px', icon: '24px', padding: '8px', notes: 'Touch-friendly and prominent action areas' },
]

const ARIA_ATTRS = [
  { attr: 'aria-label', when: 'Always set (via tooltip prop). Required — icon buttons have no visible text.' },
  { attr: 'aria-disabled', when: 'Only when button must remain focusable while logically disabled' },
  { attr: 'aria-pressed', when: 'Automatically set when selected prop is provided. Omit for non-toggle buttons.' },
  { attr: 'aria-expanded', when: 'Set when button has opened associated content (menu, popover, dialog)' },
  { attr: 'aria-haspopup', when: 'Set to "menu", "listbox", or "dialog" when button opens an overlay' },
  { attr: 'aria-busy', when: 'Automatically set during loading state' },
]

export default function IconButton() {
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
        { id: 'overview-sizes', label: 'Sizes' },
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
        { id: 'usage-contextual', label: 'Contextual usage' },
      ]
    }
    if (activeTab === 'Code/APIs') {
      return [
        { id: 'code-props', label: 'Props' },
        { id: 'code-scenarios', label: 'Implementation scenarios' },
        { id: 'code-tokens', label: 'Tokens & mapping' },
        { id: 'code-css', label: 'CSS variables' },
        { id: 'code-size', label: 'Size reference' },
        { id: 'code-o9ds-styling', label: 'o9ds focus & hover' },
      ]
    }
    if (activeTab === 'Accessibility') {
      return [
        { id: 'a11y-intro', label: 'Overview' },
        { id: 'a11y-keyboard', label: 'Keyboard interaction' },
        { id: 'a11y-focus', label: 'Focus behavior' },
        { id: 'a11y-label', label: 'Accessible name' },
        { id: 'a11y-disabled', label: 'Disabled state' },
        { id: 'a11y-pressed', label: 'Pressed / toggle' },
        { id: 'a11y-expand', label: 'Expand / popups' },
        { id: 'a11y-loading', label: 'Loading state' },
        { id: 'a11y-notes', label: 'Accessibility notes' },
        { id: 'a11y-supported-aria', label: 'Supported ARIA attributes' },
      ]
    }
    return []
  }, [activeTab])

  const variantPreview = (name) => ({
    ...(name === 'Primary' && { backgroundColor: isLight ? '#010101' : '#fff', color: isLight ? '#fff' : '#000', borderColor: 'transparent' }),
    ...(name === 'Secondary' && { backgroundColor: isLight ? '#F2F2F2' : '#404040', color: isLight ? '#010101' : '#fff', borderColor: 'transparent' }),
    ...(name === 'Tertiary' && { backgroundColor: 'transparent', color: isLight ? '#010101' : '#fff', borderColor: 'transparent' }),
    ...(name === 'Outline' && { backgroundColor: 'transparent', borderColor: isLight ? '#010101' : '#fff', color: isLight ? '#010101' : '#fff' }),
    ...(name === 'Danger' && { backgroundColor: '#ff1e39', color: '#fff', borderColor: 'transparent' }),
  })

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
            Icon Button
          </h1>
          <p className="text-lg text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed mb-2">
            {getComponentPageDescription('icon-button')}
          </p>
          <p className="text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed">
            A square, icon-only control for compact actions where space is limited or visual simplicity is preferred. Use this page to understand the component conceptually, when to use it, how to implement it, and how to keep it accessible.
          </p>

          <DocTabs tabs={tabs} activeTab={activeTab} onSelect={setActiveTab} />
        </section>

        {activeTab === 'Overview' && (
          <div className="space-y-12">
            <section id="overview-purpose" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Purpose</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The Icon Button provides a compact, visually clean action control for toolbars, inline editors, data tables, and any interface where label text would create clutter. It maintains the same interaction model as a text Button but communicates meaning through an icon and a mandatory accessible tooltip.
              </p>
            </section>

            <section id="overview-definition" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Definition & role</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                An <strong className="text-o9ds-light-primary dark:text-white font-medium">icon button</strong> is a square, labelless control that performs a single action on activation. Because there is no visible text, a <strong className="text-o9ds-light-primary dark:text-white font-medium">tooltip</strong> is always required — it serves as the accessible name (<code className="px-1 py-0.5" data-o9ds-inline-code>aria-label</code>) and provides a visual hint on hover or focus.
              </p>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Icon Button shares variant and size modifier classes with Button (<code className="px-1 py-0.5" data-o9ds-inline-code>o9ds-btn--*</code>) for color tokens, but uses its own BEM block (<code className="px-1 py-0.5" data-o9ds-inline-code>o9ds-icon-btn</code>) to enforce square dimensions and remove the label element.
              </p>
            </section>

            <section id="overview-anatomy" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Anatomy</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                An icon button consists of a <strong className="text-o9ds-light-primary dark:text-white font-medium">square surface</strong> containing a single <strong className="text-o9ds-light-primary dark:text-white font-medium">icon</strong>. Unlike text buttons, there is no label element — all meaning is conveyed by the icon and its tooltip.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">1 — Surface</strong> — square container sized by the size modifier; loading state applies a shimmer overlay across the entire surface.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">2 — Icon</strong> — always present; rendered via the <code className="px-1 py-0.5" data-o9ds-inline-code>o9con</code> icon font. Decorative (<code className="px-1 py-0.5" data-o9ds-inline-code>aria-hidden="true"</code>) because the tooltip provides the accessible name.
                </li>
              </ul>
            </section>

            <section id="overview-variants" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Variants</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed mb-4">
                Five variants communicate importance and risk — identical to the text Button variants. Use one primary icon action per region; secondary and tertiary variants support the task without competing.
              </p>
              <ul className="space-y-3 text-o9ds-light-secondary dark:text-neutral-400 mb-6">
                {VARIANTS.map(({ name, desc }) => (
                  <li key={name}>
                    <strong className="text-o9ds-light-primary dark:text-white">{name}</strong> — {desc}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                {['Primary', 'Secondary', 'Tertiary', 'Outline', 'Danger'].map((name) => (
                  <button
                    key={name}
                    type="button"
                    className="flex items-center justify-center w-10 h-10 border transition-colors"
                    style={variantPreview(name)}
                    title={name}
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                ))}
              </div>
            </section>

            <section id="overview-sizes" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Sizes</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Icon Button supports four sizes. The <strong className="text-o9ds-light-primary dark:text-white font-medium">xs</strong> (16×16) size is exclusive to Icon Button and is designed for dense inline controls where every pixel counts. Text Button does not support xs.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">xs (16×16)</strong> — dense inline controls, nested within chips or inputs.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">sm (24×24)</strong> — compact toolbars and data-dense layouts.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">md (32×32)</strong> — default size for most contexts.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">lg (40×40)</strong> — touch-friendly and prominent action areas.</li>
              </ul>
            </section>

            <section id="overview-states" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">States</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Default</strong> — ready to activate.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Hover</strong> — confirms interactivity (desktop); touch uses separate affordance.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Focus</strong> — visible focus ring for keyboard users.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Active / pressed</strong> — optional for toggle-style icon actions.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Open</strong> — associated overlay (menu, popover) is visible.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Disabled</strong> — not actionable; must be explainable in context.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Loading</strong> — action in progress; full shimmer overlay prevents repeat activation.</li>
              </ul>
            </section>

            <section id="overview-naming" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Naming guidance</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The <code className="px-1 py-0.5" data-o9ds-inline-code>tooltip</code> prop is the only text a user sees — it must describe the action, not the icon. Use specific, outcome-oriented labels: "Delete row" rather than "Trash", "Add filter" rather than "Plus".
              </p>
            </section>

            <section id="overview-dos-donts" className="scroll-mt-24">
              <div className="grid gap-4 sm:grid-cols-2">
                <GrayBgCard title="Do" bullets={['Always provide a tooltip — icon buttons have no visible label', 'Choose universally understood icons for common actions', 'Use xs size only in dense inline contexts (chips, inputs)', 'Use toggle state (selected) for persistent on/off actions']} />
                <WhiteBgCard title="Don't" bullets={['Use an icon button when the action is ambiguous — prefer a text button with a label', 'Omit the tooltip prop — accessibility requires it', 'Place multiple primary icon buttons in the same region', 'Use icon-only for destructive actions without a confirmation step']} />
              </div>
            </section>
          </div>
        )}

        {activeTab === 'Usage' && (
          <div className="space-y-12">
            <section id="usage-when" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Compact toolbars where label text would create visual clutter.</li>
                <li>Inline controls within data-dense layouts (tables, grids, list items).</li>
                <li>Repeated actions on individual items (e.g. edit, delete, expand) where the context makes the action clear.</li>
                <li>Toggle actions like favorite, pin, or bookmark where a visual toggle state is more intuitive than text.</li>
                <li>Dense UI regions like chips, inputs, and search fields where a dismiss or clear button must be minimal.</li>
              </ul>
            </section>

            <section id="usage-when-not" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When not to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>The action is ambiguous without a text label — use a <strong className="text-o9ds-light-primary dark:text-white font-medium">text button</strong> instead.</li>
                <li>The action is the primary flow step (e.g. "Save", "Submit") — use a <strong className="text-o9ds-light-primary dark:text-white font-medium">text button</strong> for clarity.</li>
                <li>The icon is not universally recognized — pair it with a label or switch to a text button.</li>
                <li>Navigation to another page — use a <strong className="text-o9ds-light-primary dark:text-white font-medium">link</strong>.</li>
                <li>A floating, elevated action — use a <strong className="text-o9ds-light-primary dark:text-white font-medium">FAB Button</strong> instead.</li>
              </ul>
            </section>

            <section id="usage-scenarios" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Scenarios</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Toolbar actions</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Use secondary or tertiary icon buttons for toolbar controls (bold, italic, align). Reserve primary for the single most important action if needed.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Data table row actions</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Place sm or xs icon buttons in table cells for per-row actions (edit, delete, expand). Use tertiary variant to keep density high and visual noise low.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Toggle / favorite</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Use the <code className="px-1 py-0.5" data-o9ds-inline-code>selected</code> prop with <code className="px-1 py-0.5" data-o9ds-inline-code>aria-pressed</code> for persistent toggle actions like starring, pinning, or bookmarking.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Close / dismiss</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Use xs or sm tertiary icon buttons for close actions on chips, dialogs, or inline alerts. The close icon is universally recognized and does not need a visible label.
                  </p>
                </div>
              </div>
            </section>

            <section id="usage-best-practices" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Best practices</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Always pair icon buttons with a meaningful tooltip that describes the action, not the icon.</li>
                <li>Use consistent sizing within a toolbar or control group — don't mix sm and lg.</li>
                <li>Group related icon buttons with appropriate spacing; separate unrelated actions with dividers or extra space.</li>
                <li>If the icon's meaning is uncertain for your audience, switch to a text button.</li>
              </ul>
            </section>

            <section id="usage-contextual" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Contextual usage</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed mb-2">
                Icon Button adapts its appearance when embedded in other components using contextual modifier classes:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">In Chip</strong> (<code className="px-1 py-0.5" data-o9ds-inline-code>.in-chip</code>) — transparent background, 16px container, 12px icon for dismiss buttons.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">In Input</strong> (<code className="px-1 py-0.5" data-o9ds-inline-code>.in-input</code>) — transparent background with hover highlight for clear/action buttons.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">In Search</strong> (<code className="px-1 py-0.5" data-o9ds-inline-code>.in-search</code>) — transparent background with hover highlight for clear/action buttons.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">In Menu</strong> (<code className="px-1 py-0.5" data-o9ds-inline-code>.in-menu</code>) — transparent background with hover highlight for menu item actions.</li>
              </ul>
            </section>
          </div>
        )}

        {activeTab === 'Code/APIs' && (
          <div className="space-y-12">
            <section id="code-props" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Component API</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
                O9IconButton accepts standard <code className="px-1 py-0.5" data-o9ds-inline-code>HTMLButtonElement</code> attributes via spread. Both <code className="px-1 py-0.5" data-o9ds-inline-code>icon</code> and <code className="px-1 py-0.5" data-o9ds-inline-code>tooltip</code> are required.
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

            <section id="code-scenarios" className="scroll-mt-24 space-y-10">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Implementation scenarios</h2>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Basic — React</h3>
                <CodeBlock
                  code={`import { O9IconButton } from '@o9ds/react';

<O9IconButton icon="add" tooltip="Add" variant="primary" />
<O9IconButton icon="star" tooltip="Favorite" variant="secondary" selected />
<O9IconButton icon="close" tooltip="Close" variant="tertiary" size="xs" />`}
                  label="React"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Basic — HTML</h3>
                <CodeBlock
                  code={`<!-- Primary (md) -->
<button class="o9ds-icon-btn o9ds-btn--primary o9ds-btn--md" type="button"
        aria-label="Add" title="Add">
  <span class="o9ds-btn__ico o9con o9con-plus" aria-hidden="true"></span>
</button>

<!-- Secondary (sm) -->
<button class="o9ds-icon-btn o9ds-btn--secondary o9ds-btn--sm" type="button"
        aria-label="Edit" title="Edit">
  <span class="o9ds-btn__ico o9con o9con-edit" aria-hidden="true"></span>
</button>

<!-- Tertiary (xs) — icon button exclusive size -->
<button class="o9ds-icon-btn o9ds-btn--tertiary o9ds-btn--xs" type="button"
        aria-label="Close" title="Close">
  <span class="o9ds-btn__ico o9con o9con-close" aria-hidden="true"></span>
</button>`}
                  label="HTML"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Disabled</h3>
                <CodeBlock
                  code={`<O9IconButton icon="delete" tooltip="Delete" variant="danger" disabled />

<button class="o9ds-icon-btn o9ds-btn--primary o9ds-btn--md" type="button"
        aria-label="Add" title="Add" disabled>
  <span class="o9ds-btn__ico o9con o9con-plus" aria-hidden="true"></span>
</button>`}
                  label="Disabled"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Loading & async</h3>
                <CodeBlock
                  code={`const [loading, setLoading] = React.useState(false);

const handleClick = async () => {
  setLoading(true);
  await performAction();
  setLoading(false);
};

<O9IconButton icon="save" tooltip="Save" loading={loading} onClick={handleClick} />`}
                  label="React async + loading"
                />
                <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                  A parent with <code className="px-1 py-0.5" data-o9ds-inline-code>data-loading="true"</code> can force loading on children; use <code className="px-1 py-0.5" data-o9ds-inline-code>data-loading-ignore="true"</code> to opt out.
                </p>
                <CodeBlock
                  code={`<!-- HTML loading -->
<button class="o9ds-icon-btn o9ds-btn--primary o9ds-btn--md loading" type="button"
        aria-label="Loading" aria-busy="true" title="Loading">
  <span class="o9ds-btn__ico o9con o9con-plus" aria-hidden="true"></span>
</button>`}
                  label="HTML loading"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Toggle / selected</h3>
                <CodeBlock
                  code={`<O9IconButton icon="star" tooltip="Favorite" variant="secondary" selected aria-pressed="true" />

<button class="o9ds-icon-btn o9ds-btn--secondary o9ds-btn--md active" type="button"
        aria-label="Favorite" aria-pressed="true" title="Favorite">
  <span class="o9ds-btn__ico o9con o9con-star" aria-hidden="true"></span>
</button>`}
                  label="Toggle / selected"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Menu trigger</h3>
                <CodeBlock
                  code={`<button class="o9ds-icon-btn o9ds-btn--tertiary o9ds-btn--md" type="button"
        aria-label="More actions" aria-haspopup="menu" aria-expanded="false"
        title="More actions">
  <span class="o9ds-btn__ico o9con o9con-more-vertical" aria-hidden="true"></span>
</button>`}
                  label="Menu trigger with aria-haspopup"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Danger — destructive action</h3>
                <CodeBlock
                  code={`<O9IconButton icon="delete" tooltip="Delete" variant="danger" />

<button class="o9ds-icon-btn o9ds-btn--danger o9ds-btn--md" type="button"
        aria-label="Delete" title="Delete">
  <span class="o9ds-btn__ico o9con o9con-delete" aria-hidden="true"></span>
</button>`}
                  label="Danger variant"
                />
              </div>
            </section>

            <section id="code-tokens" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Tokens & mapping</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                Variant and size modifiers use the <code className="px-1 py-0.5" data-o9ds-inline-code>o9ds-btn--</code> prefix (shared with Button). The <code className="px-1 py-0.5" data-o9ds-inline-code>o9ds-icon-btn</code> block provides the square layout; the modifier classes provide colors.
              </p>
              <DocTable
                columns={[
                  { key: 'map', label: 'Mapping' },
                  { key: 'detail', label: 'Notes' },
                ]}
                rows={[
                  { map: 'variant → BEM modifier', detail: 'o9ds-btn--primary | secondary | tertiary | outline | danger' },
                  { map: 'size → BEM modifier', detail: 'o9ds-btn--xs | sm | md | lg' },
                  { map: 'loading → class + aria-busy', detail: '.loading + aria-busy="true"' },
                  { map: 'selected → pressed', detail: '.active + aria-pressed for toggles' },
                  { map: 'open → class', detail: '.open when overlay is visible' },
                ]}
              />
            </section>

            <section id="code-css" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">CSS variables</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                Override on <code className="px-1 py-0.5" data-o9ds-inline-code>.o9ds-icon-btn</code> or a parent to theme the icon button. Icon Button shares color and border variables with Button.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { cat: 'Layout', vars: ['--o9ds-btn-height', '--o9ds-btn-padding-block', '--o9ds-btn-padding-inline'] },
                  { cat: 'Icon', vars: ['--o9ds-btn-icon-size'] },
                  { cat: 'Color', vars: ['--o9ds-btn-bg-color', '--o9ds-btn-icon-color', '--o9ds-btn-border-color'] },
                  { cat: 'Border', vars: ['--o9ds-btn-border-width'] },
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
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Dimensions</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Icon</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Padding</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SIZES.map((row) => (
                      <tr key={row.size} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{row.size}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.dimensions}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.icon}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.padding}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="code-o9ds-styling" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">o9ds focus & hover</h2>
              <ul className="space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>Focus ring uses <code className="px-1 py-0.5" data-o9ds-inline-code>outline: 1px solid</code> with <code className="px-1 py-0.5" data-o9ds-inline-code>outline-offset: 2px</code>; global <code className="px-1 py-0.5" data-o9ds-inline-code>:focus-visible</code> applies.</li>
                <li><code className="px-1 py-0.5" data-o9ds-inline-code>.focus-border</code> sets <code className="px-1 py-0.5" data-o9ds-inline-code>outline-offset: -1px</code> for dense layouts (button groups, toolbars, table cells).</li>
                <li><code className="px-1 py-0.5" data-o9ds-inline-code>.no-touch</code> scopes hover so touch devices avoid sticky hover.</li>
              </ul>
            </section>
          </div>
        )}

        {activeTab === 'Accessibility' && (
          <section id="icon-button-accessibility" className="space-y-12">
            <div id="a11y-intro" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Icon Button accessibility</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Because icon buttons have no visible text, accessibility relies entirely on the <code className="px-1 py-0.5" data-o9ds-inline-code>tooltip</code> prop, which maps to <code className="px-1 py-0.5" data-o9ds-inline-code>aria-label</code> and <code className="px-1 py-0.5" data-o9ds-inline-code>title</code>. Prefer native{' '}
                <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;button&gt;</code> via <strong className="text-o9ds-light-primary dark:text-white font-medium">O9IconButton</strong> or equivalent documented markup so activation and semantics stay correct.
              </p>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                Screen readers announce: <code className="px-1 py-0.5" data-o9ds-inline-code>[aria-label value], button</code>
              </p>
            </div>

            <div id="a11y-keyboard" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Keyboard interaction</h3>
              <p className="text-sm font-medium text-o9ds-light-primary dark:text-white">Required behavior</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>The icon button must be reachable by keyboard.</li>
                <li>Activation must work with both <strong className="text-o9ds-light-primary dark:text-white font-medium">Enter</strong> and <strong className="text-o9ds-light-primary dark:text-white font-medium">Space</strong>.</li>
                <li>Focus must remain predictable after the action.</li>
              </ul>
              <DocTable
                columns={[
                  { key: 'key', label: 'Keys', mono: true },
                  { key: 'behavior', label: 'Purpose' },
                ]}
                rows={[
                  { key: 'Enter', behavior: 'Activates the button and triggers the associated action.' },
                  { key: 'Space', behavior: 'Activates the button and triggers the associated action.' },
                  { key: 'Tab', behavior: 'Moves focus to the next focusable element.' },
                  { key: 'Shift+Tab', behavior: 'Moves focus to the previous focusable element.' },
                ]}
              />
            </div>

            <div id="a11y-focus" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Focus behavior</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <strong className="text-o9ds-light-primary dark:text-white font-medium">Focus visible:</strong> A visible focus indicator must appear when the icon button receives keyboard focus.
              </p>
              <p className="text-sm font-medium text-o9ds-light-primary dark:text-white">It should</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>Be clearly visible against all supported backgrounds.</li>
                <li>Not rely on color alone.</li>
                <li>Not be removed via <code className="px-1 py-0.5" data-o9ds-inline-code>outline: none</code> unless replaced with an equally strong alternative.</li>
              </ul>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed pt-2">
                <strong className="text-o9ds-light-primary dark:text-white font-medium">Recommendation:</strong> Use <code className="px-1 py-0.5" data-o9ds-inline-code>:focus-visible</code> instead of <code className="px-1 py-0.5" data-o9ds-inline-code>:focus</code> for keyboard focus styling. The <code className="px-1 py-0.5" data-o9ds-inline-code>.focus-border</code> utility class switches to an inner ring (<code className="px-1 py-0.5" data-o9ds-inline-code>outline-offset: -1px</code>) for dense layouts.
              </p>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <strong className="text-o9ds-light-primary dark:text-white font-normal">WCAG:</strong> 2.4.7 Focus Visible · 2.4.13 Focus Appearance (WCAG 2.2)
              </p>
            </div>

            <div id="a11y-label" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Accessible name</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Icon buttons have no visible text — <code className="px-1 py-0.5" data-o9ds-inline-code>aria-label</code> (set from the <code className="px-1 py-0.5" data-o9ds-inline-code>tooltip</code> prop) is the only accessible name. The icon element is marked <code className="px-1 py-0.5" data-o9ds-inline-code>aria-hidden="true"</code> to avoid duplicate announcements.
              </p>
              <CodeBlock
                code={`<button type="button" aria-label="Add item" title="Add item">
  <span class="o9ds-btn__ico o9con o9con-plus" aria-hidden="true"></span>
</button>`}
                label="aria-label from tooltip"
              />
              <p className="text-sm font-medium text-o9ds-light-primary dark:text-white">Screen reader announcement</p>
              <ul className="list-none space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400 pl-0">
                <li>"Add item, button"</li>
              </ul>
            </div>

            <div id="a11y-disabled" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Disabled state</h3>
              <CodeBlock code={`<button type="button" aria-label="Add" title="Add" disabled>\n  <span class="o9ds-btn__ico o9con o9con-plus" aria-hidden="true"></span>\n</button>`} label="Native disabled" />
              <p className="text-sm font-medium text-o9ds-light-primary dark:text-white">Disabled behavior</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>Cannot be activated.</li>
                <li>Removed from tab order in native HTML.</li>
                <li>Screen readers usually announce it as dimmed or unavailable.</li>
                <li>Use <code className="px-1 py-0.5" data-o9ds-inline-code>aria-disabled="true"</code> only when the button must remain focusable.</li>
              </ul>
            </div>

            <div id="a11y-pressed" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Pressed / toggle state</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                Use <code className="px-1 py-0.5" data-o9ds-inline-code>aria-pressed</code> only for toggle icon buttons (e.g. pin/unpin, favorite/unfavorite). The <code className="px-1 py-0.5" data-o9ds-inline-code>selected</code> prop sets this automatically.
              </p>
              <CodeBlock code={`<button type="button" aria-label="Favorite" aria-pressed="true" title="Favorite">\n  <span class="o9ds-btn__ico o9con o9con-star" aria-hidden="true"></span>\n</button>`} label="Toggle (pressed)" />
              <p className="text-sm font-medium text-o9ds-light-primary dark:text-white">Screen reader announcement</p>
              <ul className="list-none space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400 pl-0">
                <li>"Favorite, pressed, toggle button"</li>
              </ul>
            </div>

            <div id="a11y-expand" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Expand / popups</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                When an icon button opens an overlay (menu, popover, dialog), use <code className="px-1 py-0.5" data-o9ds-inline-code>aria-haspopup</code> and <code className="px-1 py-0.5" data-o9ds-inline-code>aria-expanded</code>.
              </p>
              <CodeBlock
                code={`<button type="button" aria-label="More actions"
        aria-haspopup="menu" aria-expanded="false" title="More actions">
  <span class="o9ds-btn__ico o9con o9con-more-vertical" aria-hidden="true"></span>
</button>`}
                label="Menu trigger"
              />
            </div>

            <div id="a11y-loading" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Loading state</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                During loading, <code className="px-1 py-0.5" data-o9ds-inline-code>aria-busy="true"</code> is set automatically. The button prevents interaction and shows a shimmer overlay.
              </p>
              <CodeBlock code={`<button type="button" aria-label="Saving" aria-busy="true" title="Saving">\n  <span class="o9ds-btn__ico o9con o9con-save" aria-hidden="true"></span>\n</button>`} label="Busy + loading" />
            </div>

            <div id="a11y-notes" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Accessibility notes</h3>
              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
                <WhiteBgCard title="Accessible name">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    The <code className="px-1 py-0.5" data-o9ds-inline-code>tooltip</code> prop is required and maps to <code className="px-1 py-0.5" data-o9ds-inline-code>aria-label</code>. Without it, the icon button is invisible to screen readers. Describe the action, not the icon.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Focus indicators">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Always provide visible focus indicators. Use <code className="px-1 py-0.5" data-o9ds-inline-code>.focus-border</code> in dense groups to switch to an inner ring that does not overlap adjacent elements.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Tooltip on focus">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    The tooltip must be available on both hover and keyboard focus, not hover only. This satisfies WCAG 1.4.13 Content on Hover or Focus.
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
