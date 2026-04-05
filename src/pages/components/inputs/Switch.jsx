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
  { prop: 'label', type: 'string | null', default: 'null', required: 'No', desc: 'Visible label text beside the switch' },
  { prop: 'checked', type: 'boolean', default: 'false', required: 'No', desc: 'Whether the switch is on' },
  { prop: 'disabled', type: 'boolean', default: 'false', required: 'No', desc: 'Prevents all interaction' },
  { prop: 'readonly', type: 'boolean', default: 'false', required: 'No', desc: 'Value visible but not changeable' },
  { prop: 'required', type: 'boolean', default: 'false', required: 'No', desc: 'Field is required for form submission' },
  { prop: 'value', type: 'string', default: '"on"', required: 'No', desc: 'Form value submitted when checked' },
  { prop: 'name', type: 'string', default: '—', required: 'No', desc: 'Form field name' },
  { prop: 'labelPosition', type: "'end' | 'start'", default: "'end'", required: 'No', desc: 'Position of label relative to track' },
  { prop: 'loading', type: 'boolean', default: 'false', required: 'No', desc: 'Shows skeleton loading state' },
  { prop: 'onChange', type: '({ checked, value }) => void', default: '—', required: 'No', desc: 'Called when checked state changes' },
  { prop: 'onFocus', type: 'FocusEventHandler', default: '—', required: 'No', desc: 'Focus handler on the internal input' },
  { prop: 'onBlur', type: 'FocusEventHandler', default: '—', required: 'No', desc: 'Blur handler on the internal input' },
  { prop: 'className', type: 'string', default: '—', required: 'No', desc: 'Additional CSS classes on the root element' },
]

const METHODS = [
  { method: 'initialize(el, opts)', returns: 'O9Switch', desc: 'Factory — initializes the component on a DOM element' },
  { method: 'toggle(force?)', returns: 'void', desc: 'true checks, false unchecks, omit to flip. No-op if disabled/readonly/loading.' },
  { method: 'checked()', returns: 'boolean', desc: 'Returns current checked state' },
  { method: 'disabled(state?)', returns: 'boolean | void', desc: 'Get or set disabled state' },
  { method: 'readonly(state?)', returns: 'boolean | void', desc: 'Get or set readonly state' },
  { method: 'setLoading(loading)', returns: 'void', desc: 'Toggle loading skeleton overlay' },
  { method: 'setLabel(label)', returns: 'void', desc: 'Update or remove the visible label' },
  { method: 'focus()', returns: 'void', desc: 'Programmatically focus the hidden input' },
  { method: 'destroy()', returns: 'void', desc: 'Remove all listeners and clean up references' },
]

const ARIA_ATTRS = [
  { attr: 'role="switch"', when: 'Always; overrides implicit checkbox role on the native input' },
  { attr: 'aria-checked', when: 'Always; "true" when on, "false" when off' },
  { attr: 'aria-required', when: 'Set when required prop is true' },
  { attr: 'aria-labelledby', when: 'Points to the __lbl element when label is set' },
  { attr: 'aria-label', when: 'Required when no visible label is provided' },
  { attr: 'aria-busy', when: 'Set to "true" during loading state' },
]

export default function Switch() {
  const [activeTab, setActiveTab] = useState('Overview')
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const onThisPageSections = useMemo(() => {
    if (activeTab === 'Overview') {
      return [
        { id: 'overview-purpose', label: 'Purpose' },
        { id: 'overview-definition', label: 'Definition & role' },
        { id: 'overview-anatomy', label: 'Anatomy' },
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
      ]
    }
    if (activeTab === 'Code/APIs') {
      return [
        { id: 'code-props', label: 'Props' },
        { id: 'code-methods', label: 'Methods (JS)' },
        { id: 'code-events', label: 'Events (JS)' },
        { id: 'code-scenarios', label: 'Implementation scenarios' },
        { id: 'code-css', label: 'CSS variables' },
        { id: 'code-tokens', label: 'Design tokens' },
      ]
    }
    if (activeTab === 'Accessibility') {
      return [
        { id: 'a11y-intro', label: 'Overview' },
        { id: 'a11y-keyboard', label: 'Keyboard interaction' },
        { id: 'a11y-focus', label: 'Focus behavior' },
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
            Switch
          </h1>
          <p className="text-lg text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed mb-2">
            {getComponentPageDescription('switch')}
          </p>
          <p className="text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed">
            Toggle control for binary on/off states. Renders as a hidden native checkbox with <code className="px-1 py-0.5" data-o9ds-inline-code>role="switch"</code>, a styled track, and a sliding thumb with check icon when on.
          </p>
          <DocTabs tabs={tabs} activeTab={activeTab} onSelect={setActiveTab} />
        </section>

        {activeTab === 'Overview' && (
          <div className="space-y-12">
            <section id="overview-purpose" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Purpose</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The Switch gives users a physical toggle metaphor for binary settings that take effect immediately. Unlike a checkbox—which typically defers action until a form is submitted—the switch communicates that flipping it applies the change right away (e.g., enabling dark mode, turning on notifications).
              </p>
            </section>

            <section id="overview-definition" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Definition & role</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                A <strong className="text-o9ds-light-primary dark:text-white font-medium">switch</strong> is a selection control that toggles a single option between on and off. It renders as a hidden native <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;input type="checkbox"&gt;</code> with <code className="px-1 py-0.5" data-o9ds-inline-code>role="switch"</code>, overlaid by a styled track and sliding thumb. An optional visible label describes the setting being controlled.
              </p>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                In the o9 design system, the switch is used for preferences, feature flags, and permission grants—anywhere a binary toggle with immediate feedback is appropriate.
              </p>
            </section>

            <section id="overview-anatomy" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Anatomy</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The switch is composed of a <strong className="text-o9ds-light-primary dark:text-white font-medium">track</strong> (28 × 16 px container), a <strong className="text-o9ds-light-primary dark:text-white font-medium">thumb</strong> (12 × 12 px sliding knob), and an optional <strong className="text-o9ds-light-primary dark:text-white font-medium">label</strong>.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">Track</strong> — rectangular container whose background changes between off and on token values.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">Thumb</strong> — circular knob that slides left (off) to right (on). A check icon (<code className="px-1 py-0.5" data-o9ds-inline-code>::before</code> pseudo-element) becomes visible when checked.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">Label</strong> — optional text positioned at the end (right) or start (left) of the track, using the <code className="px-1 py-0.5" data-o9ds-inline-code>labelPosition</code> prop.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">Hidden input</strong> — native <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;input type="checkbox" role="switch"&gt;</code> for form integration and focus delegation.
                </li>
              </ul>
            </section>

            <section id="overview-states" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">States</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Unchecked (off)</strong> — track shows layer-07 background, thumb at left.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Checked (on)</strong> — track shows theme-active-1 background, thumb at right, check icon visible.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Hover</strong> — track background shifts to hover token (scoped to <code className="px-1 py-0.5" data-o9ds-inline-code>.no-touch</code> to avoid sticky hover on mobile).</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Focus</strong> — visible focus ring on the track via <code className="px-1 py-0.5" data-o9ds-inline-code>:focus-visible</code> on the sibling input.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Disabled</strong> — pointer events blocked, cursor not-allowed, disabled token colors on track, thumb, and label.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Readonly</strong> — visually same as default, but all interaction blocked.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Loading</strong> — shimmer overlay (Pattern A), interaction blocked, <code className="px-1 py-0.5" data-o9ds-inline-code>aria-busy="true"</code>.</li>
              </ul>
            </section>

            <section id="overview-naming" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Naming guidance</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Label the setting being controlled, not the action. Prefer "Dark mode" over "Toggle dark mode". The switch's on/off metaphor already implies toggling. Keep labels short and descriptive—users should understand the effect without extra context.
              </p>
            </section>

            <section id="overview-dos-donts" className="scroll-mt-24">
              <div className="grid gap-4 sm:grid-cols-2">
                <GrayBgCard title="Do" bullets={['Use for settings that take effect immediately', 'Provide a visible label so the setting is self-explanatory', 'Use labelPosition="start" when the label is a long sentence', 'Set aria-label when the switch has no visible label']} />
                <WhiteBgCard title="Don't" bullets={['Use for form submissions—use Checkbox instead', 'Use for selecting from multiple options—use Checkbox Group', 'Place more than one switch per row without clear visual separation', 'Disable without explaining why nearby']} />
              </div>
            </section>
          </div>
        )}

        {activeTab === 'Usage' && (
          <div className="space-y-12">
            <section id="usage-when" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Immediate settings</strong> — when the effect takes place instantly (e.g., "Dark mode", "Enable notifications").</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Binary on/off</strong> — when there are exactly two mutually exclusive states and the user should perceive a physical toggle metaphor.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Preferences and toggles</strong> — for settings panels, feature flags, and permission grants.</li>
              </ul>
            </section>

            <section id="usage-when-not" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When not to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Form submission</strong> — if the value is only applied when the user submits a form, use a <strong className="text-o9ds-light-primary dark:text-white font-medium">Checkbox</strong> instead.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Multiple selections</strong> — use <strong className="text-o9ds-light-primary dark:text-white font-medium">Checkbox Group</strong> for selecting multiple items from a list.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Mutually exclusive options</strong> — use <strong className="text-o9ds-light-primary dark:text-white font-medium">Radio Group</strong> when there are 3+ named options.</li>
              </ul>
            </section>

            <section id="usage-scenarios" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Scenarios</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Settings panel</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Use switches for preferences that apply immediately—dark mode, notification preferences, feature toggles. Stack vertically with consistent label positioning.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Inline setting in a form</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    When a switch appears inside a form alongside checkboxes and inputs, ensure the switch label clearly communicates that it takes immediate effect. Consider using <code className="px-1 py-0.5" data-o9ds-inline-code>labelPosition="start"</code> to align the label with surrounding form labels.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Permission grants</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Use a switch for granting or revoking access to a feature. Consider adding a confirmation dialog for irreversible permission changes.
                  </p>
                </div>
              </div>
            </section>

            <section id="usage-best-practices" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Best practices</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Always pair with a label to describe the controlled setting. If there is no visible label, provide <code className="px-1 py-0.5" data-o9ds-inline-code>aria-label</code>.</li>
                <li>Use consistent label positioning across a settings panel—do not mix start and end positions.</li>
                <li>Avoid using a switch inside a form that also has a Submit button unless the switch controls something independent of the form payload.</li>
                <li>If a switch is disabled, provide context nearby explaining why and what action re-enables it.</li>
              </ul>
            </section>
          </div>
        )}

        {activeTab === 'Code/APIs' && (
          <div className="space-y-12">
            <section id="code-props" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Component API</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
                O9Switch accepts standard <code className="px-1 py-0.5" data-o9ds-inline-code>HTMLDivElement</code> attributes via spread on the root element.
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

            <section id="code-methods" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Methods (JS)</h2>
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
                    {METHODS.map((row) => (
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

            <section id="code-events" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Custom events (JS)</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-2">
                Listen with <code className="px-1 py-0.5" data-o9ds-inline-code>element.addEventListener()</code>.
              </p>
              <DocTable
                columns={[
                  { key: 'event', label: 'Event', mono: true },
                  { key: 'payload', label: 'Payload' },
                  { key: 'desc', label: 'Description' },
                ]}
                rows={[
                  { event: 'sw:change', payload: '{ checked: boolean, value: string }', desc: 'Fires when checked state changes via user interaction or programmatic toggle()' },
                ]}
              />
            </section>

            <section id="code-scenarios" className="scroll-mt-24 space-y-10">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Implementation scenarios</h2>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Basic — React</h3>
                <CodeBlock
                  code={`import { O9Switch } from '@o9ds/react';

<O9Switch label="Enable notifications" />
<O9Switch label="Dark mode" checked onChange={({ checked }) => setDark(checked)} />
<O9Switch label="Airplane mode" labelPosition="start" />`}
                  label="React"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Basic — HTML</h3>
                <CodeBlock
                  code={`<div class="o9ds-sw">
  <label class="o9ds-sw__field">
    <input class="o9ds-sw__input" type="checkbox" role="switch"
           aria-checked="false" value="on" />
    <span class="o9ds-sw__track" aria-hidden="true">
      <span class="o9ds-sw__thumb"></span>
    </span>
    <span class="o9ds-sw__lbl">Enable notifications</span>
  </label>
</div>`}
                  label="HTML"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Checked (on)</h3>
                <CodeBlock
                  code={`<div class="o9ds-sw">
  <label class="o9ds-sw__field">
    <input class="o9ds-sw__input" type="checkbox" role="switch"
           aria-checked="true" checked value="on" />
    <span class="o9ds-sw__track" aria-hidden="true">
      <span class="o9ds-sw__thumb"></span>
    </span>
    <span class="o9ds-sw__lbl">Dark mode</span>
  </label>
</div>`}
                  label="HTML — checked"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Disabled</h3>
                <CodeBlock
                  code={`<O9Switch label="Unavailable" disabled />

<div class="o9ds-sw is-disabled">
  <label class="o9ds-sw__field">
    <input class="o9ds-sw__input" type="checkbox" role="switch"
           aria-checked="false" disabled value="on" />
    <span class="o9ds-sw__track" aria-hidden="true">
      <span class="o9ds-sw__thumb"></span>
    </span>
    <span class="o9ds-sw__lbl">Unavailable</span>
  </label>
</div>`}
                  label="Disabled"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Loading & async</h3>
                <CodeBlock
                  code={`const [loading, setLoading] = React.useState(false);

const handleLoad = async () => {
  setLoading(true);
  await fetchSettings();
  setLoading(false);
};

<O9Switch label="Dark mode" loading={loading} />`}
                  label="React async + loading"
                />
                <CodeBlock
                  code={`<div class="o9ds-sw loading" aria-busy="true">
  <label class="o9ds-sw__field">
    <input class="o9ds-sw__input" type="checkbox" role="switch"
           aria-checked="false" value="on" />
    <span class="o9ds-sw__track" aria-hidden="true">
      <span class="o9ds-sw__thumb"></span>
    </span>
    <span class="o9ds-sw__lbl">Loading...</span>
  </label>
</div>`}
                  label="HTML loading"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Vanilla JS</h3>
                <CodeBlock
                  code={`import { O9Switch } from '@o9ds/js';

const sw = O9Switch.initialize(el, {
  label: 'Enable notifications',
  onChange: ({ checked, value }) => console.log(checked, value),
});

sw.toggle(true);   // on
sw.toggle(false);  // off
sw.toggle();       // flip
sw.checked();      // => boolean
sw.disabled(true);
sw.setLoading(true);
sw.destroy();`}
                  label="JS API"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Label position — start</h3>
                <CodeBlock
                  code={`<div class="o9ds-sw o9ds-sw--label-start">
  <label class="o9ds-sw__field">
    <input class="o9ds-sw__input" type="checkbox" role="switch"
           aria-checked="false" value="on" />
    <span class="o9ds-sw__track" aria-hidden="true">
      <span class="o9ds-sw__thumb"></span>
    </span>
    <span class="o9ds-sw__lbl">Airplane mode</span>
  </label>
</div>`}
                  label="HTML — label-start"
                />
              </div>
            </section>

            <section id="code-css" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">CSS variables</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                Override on <code className="px-1 py-0.5" data-o9ds-inline-code>.o9ds-sw</code> or a parent to theme the switch.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { cat: 'Track', vars: ['--o9ds-sw-track-bg', '--o9ds-sw-track-bg-checked', '--o9ds-sw-track-bg-hover', '--o9ds-sw-track-bg-checked-hover', '--o9ds-sw-track-bg-disabled', '--o9ds-sw-track-border-disabled'] },
                  { cat: 'Thumb', vars: ['--o9ds-sw-thumb-bg', '--o9ds-sw-thumb-bg-checked', '--o9ds-sw-thumb-bg-disabled', '--o9ds-sw-thumb-icon-color', '--o9ds-sw-thumb-icon-color-disabled'] },
                  { cat: 'Label', vars: ['--o9ds-sw-lbl-color', '--o9ds-sw-lbl-color-disabled'] },
                  { cat: 'Focus', vars: ['--o9ds-sw-focus-border', '--o9ds-sw-focus-offset'] },
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
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Design tokens</h2>
              <DocTable
                columns={[
                  { key: 'token', label: 'Token category' },
                  { key: 'usage', label: 'Usage' },
                ]}
                rows={[
                  { token: '--o9ds-color-s-layer-07', usage: 'Unchecked track fill' },
                  { token: '--o9ds-color-s-theme-active-1', usage: 'Checked track fill' },
                  { token: '--o9ds-color-s-hover', usage: 'Hover track fill (unchecked)' },
                  { token: '--o9ds-color-s-theme-hover-1', usage: 'Hover track fill (checked)' },
                  { token: '--o9ds-color-s-disabled', usage: 'Disabled track fill' },
                  { token: '--o9ds-color-s-placeholder', usage: 'Unchecked thumb fill' },
                  { token: '--o9ds-color-s-layer-01', usage: 'Checked thumb fill' },
                  { token: '--o9ds-color-b-theme-focus', usage: 'Focus ring border color' },
                  { token: '--o9ds-color-t-form-label', usage: 'Label text color' },
                  { token: '--o9ds-color-t-disabled', usage: 'Disabled label text color' },
                ]}
              />
            </section>
          </div>
        )}

        {activeTab === 'Accessibility' && (
          <section className="space-y-12">
            <div id="a11y-intro" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Switch accessibility</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The switch uses a native <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;input type="checkbox"&gt;</code> with <code className="px-1 py-0.5" data-o9ds-inline-code>role="switch"</code>. This overrides the implicit checkbox role so assistive technology announces the control as a toggle switch. Label association is via the wrapping <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;label&gt;</code> element.
              </p>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                Screen readers typically announce: <code className="px-1 py-0.5" data-o9ds-inline-code>[Label], switch, on/off</code>
              </p>
            </div>

            <div id="a11y-keyboard" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Keyboard interaction</h3>
              <DocTable
                columns={[
                  { key: 'key', label: 'Key', mono: true },
                  { key: 'behavior', label: 'Action' },
                ]}
                rows={[
                  { key: 'Space', behavior: 'Toggle switch between on and off' },
                  { key: 'Enter', behavior: 'Toggle switch between on and off (explicitly handled; native checkbox ignores Enter)' },
                  { key: 'Tab / Shift+Tab', behavior: 'Move focus to or from the switch' },
                ]}
              />
              <p className="text-sm font-medium text-o9ds-light-primary dark:text-white pt-2">Do not</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>Trigger the toggle on focus alone.</li>
                <li>Break native keyboard behavior with custom key handling.</li>
              </ul>
            </div>

            <div id="a11y-focus" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Focus behavior</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>The native input receives focus and is navigable via Tab.</li>
                <li>A visible focus ring appears on the track via <code className="px-1 py-0.5" data-o9ds-inline-code>:focus-visible</code>.</li>
                <li>When <code className="px-1 py-0.5" data-o9ds-inline-code>disabled</code>, the input is excluded from the tab order.</li>
                <li>When <code className="px-1 py-0.5" data-o9ds-inline-code>loading</code>, pointer events are disabled; the input remains focusable via keyboard.</li>
                <li>Touch device hover is scoped to <code className="px-1 py-0.5" data-o9ds-inline-code>.no-touch</code> to prevent sticky hover on mobile.</li>
              </ul>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <strong className="text-o9ds-light-primary dark:text-white font-normal">WCAG:</strong> 2.4.7 Focus Visible · 2.4.13 Focus Appearance (WCAG 2.2)
              </p>
            </div>

            <div id="a11y-disabled" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Disabled state</h3>
              <CodeBlock code={`<O9Switch label="Unavailable" disabled />`} label="Disabled switch" />
              <ul className="list-disc pl-5 space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>Cannot be activated.</li>
                <li>Removed from tab order.</li>
                <li>Screen readers announce it as dimmed or unavailable.</li>
                <li>Uses <code className="px-1 py-0.5" data-o9ds-inline-code>cursor: not-allowed</code> and disabled token colors.</li>
              </ul>
            </div>

            <div id="a11y-loading" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Loading state</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                When loading, the switch shows a shimmer overlay (Pattern A), blocks pointer events, and sets <code className="px-1 py-0.5" data-o9ds-inline-code>aria-busy="true"</code>. The input remains focusable via keyboard.
              </p>
              <CodeBlock code={`<O9Switch label="Loading..." loading />`} label="Loading switch" />
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <strong className="text-o9ds-light-primary dark:text-white font-medium">Parent-controlled loading:</strong> add <code className="px-1 py-0.5" data-o9ds-inline-code>data-loading="true"</code> to a parent element to trigger loading on all descendant switches. Use <code className="px-1 py-0.5" data-o9ds-inline-code>data-loading-ignore="true"</code> on a specific switch to opt it out.
              </p>
            </div>

            <div id="a11y-notes" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Accessibility notes</h3>
              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
                <WhiteBgCard title="Role & semantics">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    The hidden input uses <code className="px-1 py-0.5" data-o9ds-inline-code>role="switch"</code> which overrides the default checkbox role. Assistive technology announces the control as a toggle switch rather than a checkbox.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Label requirements">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    When no visible label is provided (label is null), consumers must supply <code className="px-1 py-0.5" data-o9ds-inline-code>aria-label</code> on the host element so screen readers can announce the switch purpose.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Enter key handling">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Native checkboxes do not respond to Enter. The switch explicitly handles the Enter key via a <code className="px-1 py-0.5" data-o9ds-inline-code>keydown</code> listener to match user expectations for a toggle control.
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
