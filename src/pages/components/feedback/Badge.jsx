import { useState, useMemo } from 'react'
import { useTheme } from '../../../context/ThemeContext'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocTabs from '../../../LayoutComponents/DocTabs'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTable from '../../../LayoutComponents/DocTable'
import GrayBgCard from '../../../LayoutComponents/GrayBgCard'
import WhiteBgCard from '../../../LayoutComponents/WhiteBgCard'
import { getComponentPageDescription } from '../../../data/componentPageMeta'

const badgeTabs = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const TYPES = [
  { name: 'positive', desc: 'Success or completion (saved, approved, completed)', textToken: '--o9ds-color-t-positive', icon: 'check-circle' },
  { name: 'info', desc: 'Informational context that is useful but non-urgent', textToken: '--o9ds-color-t-info-dark', icon: 'info-circle-filled' },
  { name: 'neutral', desc: 'General messages with no particular urgency or sentiment', textToken: '--o9ds-color-t-neutral', icon: 'speaker' },
  { name: 'warning', desc: 'Something needs attention but is not yet an error', textToken: '--o9ds-color-t-warning', icon: 'exclamation-triangle-filled' },
  { name: 'negative', desc: 'An error or failure has occurred', textToken: '--o9ds-color-t-negative', icon: 'blocker-action-filled-alt' },
  { name: 'block', desc: 'A hard blocker preventing the user from proceeding', textToken: '--o9ds-color-t-negative', icon: 'blocker-action-filled' },
]

const VARIANTS = [
  { name: 'primary', desc: 'Filled background using layer-04 surface; no border (default)' },
  { name: 'outline', desc: 'White (layer-01) background with a 1px divider border' },
]

const SIZES = [
  { size: 'lg', height: '24px', font: '14px', icon: '16px' },
  { size: 'sm', height: '20px', font: '12px', icon: '14px' },
]

const BADGE_PROPS = [
  { prop: 'message', type: 'string', default: '—', required: 'Yes', desc: 'Alert message text content' },
  { prop: 'type', type: "'positive' | 'info' | 'neutral' | 'warning' | 'negative' | 'block'", default: "'positive'", required: 'No', desc: 'Semantic type controlling text color, icon color, and icon glyph' },
  { prop: 'variant', type: "'primary' | 'outline'", default: "'primary'", required: 'No', desc: 'Visual variant (filled background vs bordered)' },
  { prop: 'size', type: "'sm' | 'lg'", default: "'lg'", required: 'No', desc: 'Badge size (height, font, icon)' },
  { prop: 'icon', type: 'boolean', default: 'true', required: 'No', desc: 'Show or hide the status icon' },
  { prop: 'customIcon', type: 'string', default: '—', required: 'No', desc: 'o9con icon name (without prefix) to override the default type icon' },
  { prop: 'role', type: "'status' | 'alert'", default: "'status'", required: 'No', desc: "ARIA role; use 'alert' for urgent, must-read messages" },
  { prop: 'className', type: 'string', default: '—', required: 'No', desc: 'Additional CSS classes (React only)' },
]

const JS_METHODS = [
  { method: 'O9BadgeAlert.initialize(element, options)', returns: 'O9BadgeAlert', desc: 'Factory — initialize on a DOM element' },
  { method: 'setMessage(text)', returns: 'void', desc: 'Update the alert message text' },
  { method: 'setType(type)', returns: 'void', desc: 'Swap the semantic type modifier class' },
  { method: 'setVariant(variant)', returns: 'void', desc: 'Swap the variant modifier class' },
  { method: 'setSize(size)', returns: 'void', desc: 'Swap the size modifier class' },
  { method: 'setIcon(show)', returns: 'void', desc: 'Show or hide the icon element' },
  { method: 'destroy()', returns: 'void', desc: 'Clean up DOM and nullify references' },
]

const ARIA_ATTRS = [
  { attr: 'role="status"', when: 'Default — provides implicit aria-live="polite" for non-urgent feedback' },
  { attr: 'role="alert"', when: 'Critical errors or blockers that require immediate announcement (aria-live="assertive")' },
  { attr: 'aria-hidden="true"', when: 'On the icon element — message text conveys the information' },
  { attr: 'aria-label', when: 'Optional; when the visible message alone is insufficient context (abbreviated or icon-only)' },
]

export default function Badge() {
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
        { id: 'overview-types', label: 'Types' },
        { id: 'overview-sizes', label: 'Sizes' },
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
      ]
    }
    if (activeTab === 'Code/APIs') {
      return [
        { id: 'code-props', label: 'Props' },
        { id: 'code-js-api', label: 'JS API & methods' },
        { id: 'code-scenarios', label: 'Implementation scenarios' },
        { id: 'code-css', label: 'CSS variables' },
        { id: 'code-tokens', label: 'Tokens & mapping' },
        { id: 'code-sizes', label: 'Size reference' },
      ]
    }
    if (activeTab === 'Accessibility') {
      return [
        { id: 'a11y-intro', label: 'Overview' },
        { id: 'a11y-roles', label: 'Roles & live regions' },
        { id: 'a11y-screen-reader', label: 'Screen reader' },
        { id: 'a11y-dynamic-updates', label: 'Dynamic updates' },
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
            Badge Alert
          </h1>
          <p className="text-lg text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed mb-2">
            {getComponentPageDescription('badge')}
          </p>
          <p className="text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed">
            Compact, static status badge for displaying short alert messages with semantic color coding. Use it in dashboards, table cells, status panels, and headers to surface system state at a glance.
          </p>

          <DocTabs tabs={badgeTabs} activeTab={activeTab} onSelect={setActiveTab} />
        </section>

        {activeTab === 'Overview' && (
          <div className="space-y-12">
            <section id="overview-purpose" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Purpose</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The Badge Alert provides compact, at-a-glance status information using semantic color coding. It surfaces the current state of a record, process, or system element without requiring user interaction or occupying significant layout space.
              </p>
            </section>

            <section id="overview-definition" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Definition & role</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                A <strong className="text-o9ds-light-primary dark:text-white font-medium">badge alert</strong> is a static, non-interactive inline element that displays a short text message with an optional status icon. It is not for notifications that come and go (use a toast); it is for persistent status indicators that remain visible as long as the state is relevant.
              </p>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Unlike the inline-alert shared pattern (which is positioned below form inputs), Badge Alert is a self-contained badge with its own background and border for use in any layout context — dashboards, tables, cards, and headers.
              </p>
            </section>

            <section id="overview-anatomy" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Anatomy</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                A badge alert is an inline-flex container with two parts: an optional <strong className="text-o9ds-light-primary dark:text-white font-medium">status icon</strong> and a <strong className="text-o9ds-light-primary dark:text-white font-medium">message</strong>.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">Icon (optional)</strong> — leading glyph from the o9con icon font; determined by type, overridable with customIcon. Hidden from screen readers via aria-hidden.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">Message</strong> — short status text content displayed inline.
                </li>
              </ul>
            </section>

            <section id="overview-variants" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Variants</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed mb-4">
                Two visual variants compose independently with any type or size.
              </p>
              <ul className="space-y-3 text-o9ds-light-secondary dark:text-neutral-400">
                {VARIANTS.map(({ name, desc }) => (
                  <li key={name}>
                    <strong className="text-o9ds-light-primary dark:text-white">{name}</strong> — {desc}
                  </li>
                ))}
              </ul>
            </section>

            <section id="overview-types" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Types</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed mb-4">
                Six semantic types map to the design system's standard feedback color tokens. Each controls text color, icon color, and the default icon glyph.
              </p>
              <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Type</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Purpose</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Default icon</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TYPES.map((row) => (
                      <tr key={row.name} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{row.name}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.desc}</td>
                        <td className="py-2 px-3 font-mono text-o9ds-light-secondary dark:text-neutral-400">{row.icon}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="overview-sizes" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Sizes</h2>
              <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Size</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Height</th>
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

            <section id="overview-naming" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Naming guidance</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Keep messages very short — ideally one to three words. Use past participles for completed states ("Approved", "Completed", "Failed") and present tense for ongoing states ("Pending", "In progress", "Overdue"). Avoid full sentences.
              </p>
            </section>

            <section id="overview-dos-donts" className="scroll-mt-24">
              <div className="grid gap-4 sm:grid-cols-2">
                <GrayBgCard title="Do" bullets={['Use for persistent, at-a-glance status indicators', 'Match the type to the semantic meaning (positive for success, negative for error)', 'Keep messages short — one to three words', 'Use the outline variant in dense layouts for visual breathing room', 'Show the icon to reinforce meaning alongside color']} />
                <WhiteBgCard title="Don't" bullets={['Use for transient notifications (use a toast instead)', 'Write full sentences in the badge message', 'Rely on color alone — the icon + text must convey meaning together', 'Use for interactive controls — Badge Alert has no click or keyboard behavior', 'Mix multiple badge types in the same cell without clear spatial separation']} />
              </div>
            </section>
          </div>
        )}

        {activeTab === 'Usage' && (
          <div className="space-y-12">
            <section id="usage-when" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Displaying the status of a record in a table cell (approved, pending, failed).</li>
                <li>Surfacing system state in a dashboard header or card (connected, syncing, error).</li>
                <li>Showing the result of a process in a status panel (completed, in progress, blocked).</li>
                <li>Indicating severity or priority in a list or log view (info, warning, critical).</li>
                <li>Labeling items with a semantic category that maps to the feedback color system.</li>
              </ul>
            </section>

            <section id="usage-when-not" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When not to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Transient notifications that appear and disappear — use a <strong className="text-o9ds-light-primary dark:text-white font-medium">toast</strong>.</li>
                <li>Inline form validation messages below an input — use an <strong className="text-o9ds-light-primary dark:text-white font-medium">inline alert</strong>.</li>
                <li>Page-level banners spanning the full width — use a <strong className="text-o9ds-light-primary dark:text-white font-medium">banner alert</strong>.</li>
                <li>Numeric counts or indicators — use a <strong className="text-o9ds-light-primary dark:text-white font-medium">counter</strong> or <strong className="text-o9ds-light-primary dark:text-white font-medium">indicator</strong>.</li>
                <li>Interactive status elements that respond to clicks — Badge Alert is static and non-interactive.</li>
              </ul>
            </section>

            <section id="usage-scenarios" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Scenarios</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Table cell status</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Place a small badge in a status column. Use size="sm" to fit dense table rows. The icon reinforces the color for users who cannot distinguish colors.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Dashboard card header</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Show the connection or sync status in a card header. Use the outline variant for visual clarity against the card background.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Status panel</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    List multiple items with their current state. Each row can carry a badge alert showing the process result: completed (positive), in progress (info), or blocked (block).
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Dynamic status updates</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    When a record's status changes at runtime, update the badge via JS methods or React props. The role="status" ensures screen readers politely announce the change.
                  </p>
                </div>
              </div>
            </section>

            <section id="usage-best-practices" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Best practices</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Always show the icon unless space is extremely constrained — it reinforces color meaning for accessibility.</li>
                <li>Use the primary variant (filled) for most contexts; use outline in denser layouts or on colored backgrounds.</li>
                <li>Keep the type aligned with the design system's semantic intent: positive for success, warning for caution, negative for errors.</li>
                <li>Use size="sm" in tables and compact lists; use size="lg" (default) in dashboards and cards.</li>
                <li>For critical alerts that must be read immediately, override the role to "alert" so screen readers announce assertively.</li>
              </ul>
            </section>
          </div>
        )}

        {activeTab === 'Code/APIs' && (
          <div className="space-y-12">
            <section id="code-props" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Component API</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
                <code className="px-1 py-0.5" data-o9ds-inline-code>O9BadgeAlert</code> is a static display component. It has no interactive states, events, or form participation.
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
                    {BADGE_PROPS.map((row) => (
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

            <section id="code-js-api" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">JS API & methods</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                Vanilla JS uses <code className="px-1 py-0.5" data-o9ds-inline-code>O9BadgeAlert.initialize()</code> to create an instance on a DOM element.
              </p>
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

            <section id="code-scenarios" className="scroll-mt-24 space-y-10">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Implementation scenarios</h2>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">React — basic</h3>
                <CodeBlock
                  code={`import { O9BadgeAlert } from '@o9ds/react';

<O9BadgeAlert message="Saved successfully" />
<O9BadgeAlert message="Review pending" type="info" variant="outline" />
<O9BadgeAlert message="Overdue" type="warning" size="sm" />`}
                  label="React"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">React — all types</h3>
                <CodeBlock
                  code={`<O9BadgeAlert message="Approved" type="positive" />
<O9BadgeAlert message="Pending review" type="info" />
<O9BadgeAlert message="Scheduled" type="neutral" />
<O9BadgeAlert message="Overdue" type="warning" />
<O9BadgeAlert message="Failed" type="negative" />
<O9BadgeAlert message="Blocked" type="block" />`}
                  label="All types"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">React — icon and custom icon</h3>
                <CodeBlock
                  code={`// Hide the icon
<O9BadgeAlert message="Failed" type="negative" icon={false} />

// Custom icon override
<O9BadgeAlert message="Starred" type="neutral" customIcon="star" />`}
                  label="Icon options"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">React — urgent alert role</h3>
                <CodeBlock
                  code={`<O9BadgeAlert
  message="Action blocked"
  type="block"
  role="alert"
/>`}
                  label="Alert role"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">HTML — static markup</h3>
                <CodeBlock
                  code={`<!-- Primary, positive, large (defaults) -->
<div class="o9ds-bdg-alert o9ds-bdg-alert--primary o9ds-bdg-alert--positive o9ds-bdg-alert--lg"
     role="status">
  <span class="o9ds-bdg-alert__ico o9con" aria-hidden="true"></span>
  <span class="o9ds-bdg-alert__msg">Saved successfully</span>
</div>

<!-- Outline, warning, small -->
<div class="o9ds-bdg-alert o9ds-bdg-alert--outline o9ds-bdg-alert--warning o9ds-bdg-alert--sm"
     role="status">
  <span class="o9ds-bdg-alert__ico o9con" aria-hidden="true"></span>
  <span class="o9ds-bdg-alert__msg">Overdue</span>
</div>

<!-- No icon -->
<div class="o9ds-bdg-alert o9ds-bdg-alert--primary o9ds-bdg-alert--negative o9ds-bdg-alert--lg"
     role="status">
  <span class="o9ds-bdg-alert__msg">Failed</span>
</div>`}
                  label="HTML"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Vanilla JS</h3>
                <CodeBlock
                  code={`import { O9BadgeAlert } from '@o9ds/js';

const el = document.querySelector('#status-badge');
const badge = O9BadgeAlert.initialize(el, {
  message: 'Saved successfully',
  type: 'positive',
  variant: 'primary',
  size: 'lg',
});

badge.setMessage('Updated status');
badge.setType('warning');
badge.setVariant('outline');
badge.setSize('sm');
badge.setIcon(false);
badge.destroy();`}
                  label="Vanilla JS"
                />
              </div>
            </section>

            <section id="code-css" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">CSS variables</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                Override on <code className="px-1 py-0.5" data-o9ds-inline-code>.o9ds-bdg-alert</code> or a parent scope to customize.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { cat: 'Layout', vars: ['--o9ds-bdg-alert-height', '--o9ds-bdg-alert-padding-inline-start', '--o9ds-bdg-alert-padding-inline-end', '--o9ds-bdg-alert-padding-block', '--o9ds-bdg-alert-gap'] },
                  { cat: 'Typography', vars: ['--o9ds-bdg-alert-font-size', '--o9ds-bdg-alert-font-weight', '--o9ds-bdg-alert-line-height'] },
                  { cat: 'Icon', vars: ['--o9ds-bdg-alert-icon-size'] },
                  { cat: 'Colors', vars: ['--o9ds-bdg-alert-text-color', '--o9ds-bdg-alert-icon-color', '--o9ds-bdg-alert-bg', '--o9ds-bdg-alert-border-color', '--o9ds-bdg-alert-border-width'] },
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

            <section id="code-tokens" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Tokens & mapping</h2>
              <DocTable
                columns={[
                  { key: 'map', label: 'Mapping' },
                  { key: 'detail', label: 'Notes' },
                ]}
                rows={[
                  { map: 'variant → BEM modifier', detail: 'o9ds-bdg-alert--primary | outline' },
                  { map: 'type → BEM modifier', detail: 'o9ds-bdg-alert--positive | info | neutral | warning | negative | block' },
                  { map: 'size → BEM modifier', detail: 'o9ds-bdg-alert--sm | lg' },
                  { map: 'primary background', detail: 'var(--o9ds-color-s-layer-04) → #f2f2f2' },
                  { map: 'outline background', detail: 'var(--o9ds-color-s-layer-01) → white, border: var(--o9ds-color-b-divider)' },
                ]}
              />
            </section>

            <section id="code-sizes" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Size reference</h2>
              <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Size</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Height</th>
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
          <section id="badge-accessibility" className="space-y-12">
            <div id="a11y-intro" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Badge Alert accessibility</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Badge Alert is a static, non-interactive display element. It has no focusable elements and no keyboard interaction. Accessibility relies on proper ARIA roles for screen reader announcement and ensuring the message text (not just color or icon) conveys meaning.
              </p>
            </div>

            <div id="a11y-roles" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Roles & live regions</h3>
              <DocTable
                columns={[
                  { key: 'role', label: 'Role', mono: true },
                  { key: 'behavior', label: 'Behavior' },
                  { key: 'when', label: 'When to use' },
                ]}
                rows={[
                  { role: 'status', behavior: 'Implicit aria-live="polite" — changes announced at next pause in speech', when: 'Default; most badge alerts' },
                  { role: 'alert', behavior: 'Implicit aria-live="assertive" — changes announced immediately', when: 'Critical errors or blockers that demand attention' },
                ]}
              />
            </div>

            <div id="a11y-screen-reader" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Screen reader behavior</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The icon element carries <code className="px-1 py-0.5" data-o9ds-inline-code>aria-hidden="true"</code> because the message text alone conveys the badge's meaning. Screen readers will announce only the text content within the badge.
              </p>
              <p className="text-sm font-medium text-o9ds-light-primary dark:text-white">Example announcements</p>
              <ul className="list-none space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400 pl-0">
                <li>"Saved successfully" (positive, polite)</li>
                <li>"Action blocked" (block, with role="alert" — assertive)</li>
                <li>"Overdue" (warning, polite)</li>
              </ul>
            </div>

            <div id="a11y-dynamic-updates" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Dynamic updates</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                When the badge message text changes at runtime (via React re-render or the JS <code className="px-1 py-0.5" data-o9ds-inline-code>setMessage()</code> method), the <code className="px-1 py-0.5" data-o9ds-inline-code>role="status"</code> ensures screen readers politely announce the new content. No additional ARIA wiring is needed for dynamic updates.
              </p>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                For critical state transitions (e.g., a record moving from "Pending" to "Blocked"), consider overriding the role to <code className="px-1 py-0.5" data-o9ds-inline-code>"alert"</code> temporarily so the change is announced immediately.
              </p>
            </div>

            <div id="a11y-notes" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Accessibility notes</h3>
              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
                <WhiteBgCard title="No keyboard interaction">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Badge Alert is not focusable and has no keyboard interaction. It is a purely presentational element with no event listeners. Users perceive it through its text content and ARIA role.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Color is not sufficient">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Never rely on color alone to convey the badge's meaning. The message text and the icon glyph together provide the semantic information. Keep the icon visible unless space is critically constrained.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Icon hidden from AT">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    The icon element carries <code className="px-1 py-0.5" data-o9ds-inline-code>aria-hidden="true"</code> because the message text fully conveys the badge's meaning. For abbreviated or icon-only usage, provide an <code className="px-1 py-0.5" data-o9ds-inline-code>aria-label</code>.
                  </p>
                </WhiteBgCard>
              </div>
            </div>

            <div id="a11y-supported-aria" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Supported ARIA attributes</h3>
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
