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
  { prop: 'label', type: 'string', default: '—', required: 'Yes', desc: 'Visible label text beside the checkbox' },
  { prop: 'checked', type: 'boolean', default: 'false', required: 'No', desc: 'Whether the checkbox is checked' },
  { prop: 'indeterminate', type: 'boolean', default: 'false', required: 'No', desc: 'Partially checked state for parent checkboxes in hierarchical lists' },
  { prop: 'disabled', type: 'boolean', default: 'false', required: 'No', desc: 'Prevents all interaction' },
  { prop: 'readonly', type: 'boolean', default: 'false', required: 'No', desc: 'Value visible but not changeable' },
  { prop: 'required', type: 'boolean', default: 'false', required: 'No', desc: 'Field is required for form submission' },
  { prop: 'invalid', type: 'boolean', default: 'false', required: 'No', desc: 'Shows validation error state' },
  { prop: 'excluded', type: 'boolean', default: 'false', required: 'No', desc: 'Marks as excluded with negative/red styling' },
  { prop: 'value', type: 'string', default: '""', required: 'No', desc: 'Form value submitted when checked' },
  { prop: 'name', type: 'string', default: '—', required: 'No', desc: 'Form field name for grouping' },
  { prop: 'size', type: "'sm' | 'lg'", default: "'lg'", required: 'No', desc: 'Size variant for box and label' },
  { prop: 'loading', type: 'boolean', default: 'false', required: 'No', desc: 'Shows skeleton loading state' },
  { prop: 'errorMsg', type: 'string', default: '—', required: 'No', desc: 'Error message shown in inline alert when invalid' },
  { prop: 'showInlineError', type: 'boolean', default: 'true', required: 'No', desc: 'Controls whether inline alert renders when invalid' },
  { prop: 'onChange', type: '({ checked, value }) => void', default: '—', required: 'No', desc: 'Called when checked state changes' },
  { prop: 'onFocus', type: 'FocusEventHandler', default: '—', required: 'No', desc: 'Focus handler on the internal input' },
  { prop: 'onBlur', type: 'FocusEventHandler', default: '—', required: 'No', desc: 'Blur handler on the internal input' },
  { prop: 'className', type: 'string', default: '—', required: 'No', desc: 'Additional CSS classes on the root element' },
]

const METHODS = [
  { method: 'initialize(el, opts)', returns: 'O9Checkbox', desc: 'Factory — initializes the component on a DOM element' },
  { method: 'toggle(force?)', returns: 'void', desc: 'true checks, false unchecks, omit to flip. Clears indeterminate.' },
  { method: 'checked()', returns: 'boolean', desc: 'Returns current checked state' },
  { method: 'indeterminate(state?)', returns: 'boolean | void', desc: 'Get or set indeterminate state' },
  { method: 'excluded(state?)', returns: 'boolean | void', desc: 'Get or set excluded state' },
  { method: 'disabled(state?)', returns: 'boolean | void', desc: 'Get or set disabled state' },
  { method: 'readonly(state?)', returns: 'boolean | void', desc: 'Get or set readonly state' },
  { method: 'setLabel(label)', returns: 'void', desc: 'Update or remove the visible label' },
  { method: 'setError(hasError, msg?)', returns: 'void', desc: 'Set or clear error state with optional message' },
  { method: 'setLoading(loading)', returns: 'void', desc: 'Toggle loading skeleton overlay' },
  { method: 'setChecked(checked)', returns: 'void', desc: 'Set checked state without dispatching change event' },
  { method: 'getValue()', returns: 'string', desc: 'Returns the current form value' },
  { method: 'destroy()', returns: 'void', desc: 'Remove all listeners and clean up references' },
]

const ARIA_ATTRS = [
  { attr: 'aria-checked', when: 'Always; "true" when checked, "false" when unchecked, "mixed" when indeterminate' },
  { attr: 'aria-required', when: 'Set when required prop is true' },
  { attr: 'aria-invalid', when: 'Set to "true" when invalid prop is true' },
  { attr: 'aria-busy', when: 'Set to "true" during loading state' },
  { attr: 'aria-describedby', when: 'Points to inline alert element when error state is active with showInlineError' },
]

export default function Checkbox() {
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
        { id: 'a11y-indeterminate', label: 'Indeterminate state' },
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
            Checkbox
          </h1>
          <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed mb-2">
            {getComponentPageDescription('checkbox')}
          </p>
          <p className="text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed">
            Binary selection control displayed as a square box with a visible label. Supports checked, indeterminate, disabled, required, invalid, excluded, and loading states.
          </p>
          <DocTabs tabs={tabs} activeTab={activeTab} onSelect={setActiveTab} />
        </section>

        {activeTab === 'Overview' && (
          <div className="space-y-12">
            <section id="overview-purpose" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Purpose</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The Checkbox lets users make binary (yes/no) or multi-select choices within forms and lists. Unlike a switch, a checkbox defers its effect until the form is submitted, making it the correct control for form-based workflows. The indeterminate state enables hierarchical parent/child selection patterns.
              </p>
            </section>

            <section id="overview-definition" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Definition & role</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                A <strong className="text-o9ds-light-primary dark:text-white font-medium">checkbox</strong> is a selection control rendered as a square box beside a visible label. It supports three visual states: unchecked, checked (with a checkmark icon), and indeterminate (with a dash icon for partial child selection). The native <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;input type="checkbox"&gt;</code> handles form submission and accessibility semantics.
              </p>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Checkboxes are independent of each other—selecting one does not deselect others (unlike Radio). When grouped, use <strong className="text-o9ds-light-primary dark:text-white font-medium">Checkbox Group</strong> for label, validation, and layout management.
              </p>
            </section>

            <section id="overview-anatomy" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Anatomy</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The checkbox is composed of a <strong className="text-o9ds-light-primary dark:text-white font-medium">box</strong> (the visual indicator), a <strong className="text-o9ds-light-primary dark:text-white font-medium">checkmark/dash icon</strong>, a <strong className="text-o9ds-light-primary dark:text-white font-medium">label</strong>, and an optional <strong className="text-o9ds-light-primary dark:text-white font-medium">inline error</strong>.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Box</strong> — square indicator that shows the checked, unchecked, or indeterminate state via background color and icon.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Checkmark / dash</strong> — icon rendered via <code className="px-1 py-0.5" data-o9ds-inline-code>::before</code> pseudo-element; checkmark for checked, horizontal dash for indeterminate.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Label</strong> — visible text beside the box describing the option.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Error icon & message</strong> — optional inline alert below the checkbox when validation fails.</li>
              </ul>
            </section>

            <section id="overview-states" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">States</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Unchecked</strong> — transparent box with form border.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Checked</strong> — theme-colored box, checkmark icon visible.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Indeterminate</strong> — theme-colored box, dash icon instead of checkmark. Used for parent checkboxes in hierarchical lists.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Hover</strong> — border highlight on box (scoped to <code className="px-1 py-0.5" data-o9ds-inline-code>.no-touch</code>).</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Focus</strong> — visible focus ring on box via <code className="px-1 py-0.5" data-o9ds-inline-code>:focus-visible</code>.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Disabled</strong> — disabled background and text styling, removed from tab order.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Error</strong> — negative color border on box; inline alert shown when configured.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Excluded</strong> — negative/red styling on box, distinct from error state.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Loading</strong> — shimmer overlay (Pattern A), <code className="px-1 py-0.5" data-o9ds-inline-code>aria-busy="true"</code>.</li>
              </ul>
            </section>

            <section id="overview-naming" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Naming guidance</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Use clear, descriptive labels that describe the option being selected. Prefer "Accept terms and conditions" over "Terms". For binary choices, phrase the label as an affirmative statement ("Remember me", "Subscribe to newsletter").
              </p>
            </section>

            <section id="overview-dos-donts" className="scroll-mt-24">
              <div className="grid gap-4 sm:grid-cols-2">
                <GrayBgCard title="Do" bullets={['Use for form-based selections that apply on submit', 'Use indeterminate for parent checkboxes with partial child selection', 'Pair with a visible label to describe each option', 'Use Checkbox Group when grouping related options']} />
                <WhiteBgCard title="Don't" bullets={['Use for immediate settings—use Switch instead', 'Use for mutually exclusive options—use Radio Group', 'Omit labels on individual checkboxes', 'Rely on color alone to convey error or excluded state']} />
              </div>
            </section>
          </div>
        )}

        {activeTab === 'Usage' && (
          <div className="space-y-12">
            <section id="usage-when" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Multiple selections</strong> — when the user can select any number of options from a list.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Binary toggle</strong> — a single yes/no or on/off choice that persists until explicitly changed (e.g., "Remember me", "Accept terms").</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Hierarchical selection</strong> — use <code className="px-1 py-0.5" data-o9ds-inline-code>indeterminate</code> on a parent checkbox to indicate partial child selection.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Form validation</strong> — set <code className="px-1 py-0.5" data-o9ds-inline-code>invalid</code> when required agreement is missing or selection fails validation.</li>
              </ul>
            </section>

            <section id="usage-when-not" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When not to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Immediate effect</strong> — use a <strong className="text-o9ds-light-primary dark:text-white font-medium">Switch</strong> when the toggle should apply instantly.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Mutually exclusive options</strong> — use <strong className="text-o9ds-light-primary dark:text-white font-medium">Radio Group</strong> when exactly one selection is required.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Many options with search</strong> — consider a <strong className="text-o9ds-light-primary dark:text-white font-medium">Multi-select</strong> or list-based pattern.</li>
              </ul>
            </section>

            <section id="usage-scenarios" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Scenarios</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Terms & conditions</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    A single required checkbox with label "I accept the terms and conditions". Set <code className="px-1 py-0.5" data-o9ds-inline-code>required</code> and <code className="px-1 py-0.5" data-o9ds-inline-code>invalid</code> with an error message if the user tries to submit without checking.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Preference list</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Multiple checkboxes for notification preferences (email, SMS, push). Use a Checkbox Group wrapper for group-level labeling and validation.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Hierarchical selection</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    A parent "Select all" checkbox with child options. The parent shows indeterminate when some (but not all) children are checked, checked when all are checked, and unchecked when none are checked.
                  </p>
                </div>
              </div>
            </section>

            <section id="usage-best-practices" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Best practices</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Always provide a label—never rely on context alone to explain the option.</li>
                <li>Use the <code className="px-1 py-0.5" data-o9ds-inline-code>indeterminate</code> state only for parent checkboxes that manage children, not for uncertain states.</li>
                <li>Pair <code className="px-1 py-0.5" data-o9ds-inline-code>invalid</code> with a clear <code className="px-1 py-0.5" data-o9ds-inline-code>errorMsg</code> so users understand what to fix.</li>
                <li>Group related checkboxes with Checkbox Group for consistent spacing, labeling, and validation.</li>
              </ul>
            </section>
          </div>
        )}

        {activeTab === 'Code/APIs' && (
          <div className="space-y-12">
            <section id="code-props" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Component API</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
                O9Checkbox accepts standard <code className="px-1 py-0.5" data-o9ds-inline-code>HTMLLabelElement</code> attributes via spread on the root element.
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
                  { event: 'checkbox:change', payload: '{ checked: boolean, value: string }', desc: 'Fires when checked state changes via user interaction or programmatic toggle()' },
                ]}
              />
            </section>

            <section id="code-scenarios" className="scroll-mt-24 space-y-10">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Implementation scenarios</h2>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Basic — React</h3>
                <CodeBlock
                  code={`import { O9Checkbox } from '@o9ds/react';

<O9Checkbox label="Accept terms" value="terms" />
<O9Checkbox label="Remember me" value="remember" checked />
<O9Checkbox
  label="Subscribe to newsletter"
  value="newsletter"
  name="prefs"
  onChange={({ checked, value }) => console.log(checked, value)}
/>`}
                  label="React"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Basic — HTML</h3>
                <CodeBlock
                  code={`<label class="o9ds-checkbox" aria-checked="false">
  <input class="o9ds-checkbox__input" type="checkbox"
         value="option1" name="preferences" />
  <span class="o9ds-checkbox__box">
    <span class="o9ds-checkbox__checkmark"></span>
  </span>
  <span class="o9ds-checkbox__lbl">Option label</span>
</label>`}
                  label="HTML"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Indeterminate</h3>
                <CodeBlock
                  code={`<O9Checkbox label="Select all" indeterminate />

<label class="o9ds-checkbox indeterminate" aria-checked="mixed">
  <input class="o9ds-checkbox__input" type="checkbox" />
  <span class="o9ds-checkbox__box">
    <span class="o9ds-checkbox__checkmark"></span>
  </span>
  <span class="o9ds-checkbox__lbl">Select all</span>
</label>`}
                  label="Indeterminate"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Error state</h3>
                <CodeBlock
                  code={`<O9Checkbox label="Required field" invalid />

<label class="o9ds-checkbox has-error" aria-checked="false">
  <input class="o9ds-checkbox__input" type="checkbox"
         aria-invalid="true" />
  <span class="o9ds-checkbox__box">
    <span class="o9ds-checkbox__checkmark"></span>
  </span>
  <span class="o9ds-checkbox__lbl">Required field</span>
</label>`}
                  label="Error state"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Loading & async</h3>
                <CodeBlock
                  code={`const [loading, setLoading] = React.useState(false);

const handleLoad = async () => {
  setLoading(true);
  await fetchOptions();
  setLoading(false);
};

<O9Checkbox label="Accept terms" value="terms" loading={loading} />`}
                  label="React async + loading"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Vanilla JS</h3>
                <CodeBlock
                  code={`import { O9Checkbox } from '@o9ds/js';

const cb = O9Checkbox.initialize(el, {
  label: 'Accept terms',
  value: 'terms',
  onChange: ({ checked, value }) => console.log(checked, value),
});

cb.toggle(true);          // check
cb.toggle(false);         // uncheck
cb.toggle();              // flip
cb.indeterminate(true);   // set indeterminate
cb.setError(true, 'Required');
cb.destroy();`}
                  label="JS API"
                />
              </div>
            </section>

            <section id="code-css" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">CSS variables</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                Override on <code className="px-1 py-0.5" data-o9ds-inline-code>.o9ds-checkbox</code> or a parent to theme the checkbox.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { cat: 'Box', vars: ['--o9ds-checkbox-box-bg', '--o9ds-checkbox-box-bg-checked', '--o9ds-checkbox-box-border', '--o9ds-checkbox-box-border-checked', '--o9ds-checkbox-box-bg-disabled', '--o9ds-checkbox-box-border-error'] },
                  { cat: 'Icon & label', vars: ['--o9ds-checkbox-checkmark-color', '--o9ds-checkbox-label-color', '--o9ds-checkbox-label-color-disabled'] },
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
                  { token: '--o9ds-color-s-theme', usage: 'Checked and indeterminate state fill' },
                  { token: '--o9ds-color-b-form', usage: 'Default box border' },
                  { token: '--o9ds-color-b-negative', usage: 'Error state border' },
                  { token: '--o9ds-color-s-disabled', usage: 'Disabled background' },
                  { token: '--o9ds-color-t-primary', usage: 'Label text color' },
                  { token: '--o9ds-color-t-disabled', usage: 'Disabled label text color' },
                  { token: '--o9ds-color-i-inverse', usage: 'Checkmark icon color' },
                ]}
              />
            </section>
          </div>
        )}

        {activeTab === 'Accessibility' && (
          <section className="space-y-12">
            <div id="a11y-intro" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Checkbox accessibility</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The checkbox uses a native <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;input type="checkbox"&gt;</code> for full semantic support. Label association is via the wrapping <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;label&gt;</code> element. The indeterminate state is conveyed to assistive technology via <code className="px-1 py-0.5" data-o9ds-inline-code>aria-checked="mixed"</code>.
              </p>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                Screen readers announce: <code className="px-1 py-0.5" data-o9ds-inline-code>[Label], checkbox, checked/unchecked/mixed</code>
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
                  { key: 'Space', behavior: 'Toggle checkbox between checked and unchecked. If indeterminate, clears indeterminate and sets to checked.' },
                  { key: 'Tab / Shift+Tab', behavior: 'Move focus to or from the checkbox' },
                ]}
              />
            </div>

            <div id="a11y-focus" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Focus behavior</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>The native input receives focus and is navigable via Tab.</li>
                <li>A visible focus ring appears on the box via <code className="px-1 py-0.5" data-o9ds-inline-code>:focus-visible</code> on the sibling input.</li>
                <li>When <code className="px-1 py-0.5" data-o9ds-inline-code>disabled</code>, the input is excluded from the tab order.</li>
                <li>When <code className="px-1 py-0.5" data-o9ds-inline-code>loading</code>, pointer events are disabled; the input remains focusable via keyboard.</li>
              </ul>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <strong className="text-o9ds-light-primary dark:text-white font-normal">WCAG:</strong> 2.4.7 Focus Visible · 2.4.13 Focus Appearance (WCAG 2.2)
              </p>
            </div>

            <div id="a11y-disabled" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Disabled state</h3>
              <CodeBlock code={`<O9Checkbox label="Unavailable option" disabled />`} label="Disabled checkbox" />
              <ul className="list-disc pl-5 space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>Cannot be activated or toggled.</li>
                <li>Removed from tab order.</li>
                <li>Screen readers announce as dimmed or unavailable.</li>
                <li>Disabled token colors applied to box, icon, and label.</li>
              </ul>
            </div>

            <div id="a11y-indeterminate" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Indeterminate state</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The indeterminate state is visual-only—it does not change the native <code className="px-1 py-0.5" data-o9ds-inline-code>checked</code> property. It is conveyed to assistive technology via <code className="px-1 py-0.5" data-o9ds-inline-code>aria-checked="mixed"</code> on the root label. Clicking an indeterminate checkbox clears indeterminate and sets checked to true.
              </p>
              <CodeBlock code={`<O9Checkbox label="Select all" indeterminate />`} label="Indeterminate" />
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <strong className="text-o9ds-light-primary dark:text-white font-medium">Screen reader:</strong> "Select all, checkbox, partially checked"
              </p>
            </div>

            <div id="a11y-loading" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Loading state</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                Loading applies a shimmer overlay (Pattern A), blocks pointer events, and sets <code className="px-1 py-0.5" data-o9ds-inline-code>aria-busy="true"</code>. The input remains focusable via keyboard.
              </p>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <strong className="text-o9ds-light-primary dark:text-white font-medium">Parent-controlled loading:</strong> add <code className="px-1 py-0.5" data-o9ds-inline-code>data-loading="true"</code> to a parent to trigger loading on descendants. Use <code className="px-1 py-0.5" data-o9ds-inline-code>data-loading-ignore="true"</code> to opt out a specific checkbox.
              </p>
            </div>

            <div id="a11y-notes" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Accessibility notes</h3>
              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
                <WhiteBgCard title="Label association">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Label association is via the wrapping <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;label&gt;</code> element containing the input. This ensures clicking the label also toggles the checkbox.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Error announcements">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    When <code className="px-1 py-0.5" data-o9ds-inline-code>showInlineError</code> is true and the checkbox is invalid, <code className="px-1 py-0.5" data-o9ds-inline-code>aria-describedby</code> points to the inline alert so screen readers announce the error message.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Focus indicators">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Always provide visible focus indicators. The focus ring appears on the box element, not the hidden input, to give users a clear visual target.
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
