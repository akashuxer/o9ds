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
  { prop: 'value', type: 'string', default: '—', required: 'Yes', desc: 'Form value submitted when selected' },
  { prop: 'name', type: 'string', default: '—', required: 'Yes', desc: 'Group identifier for mutual exclusion' },
  { prop: 'label', type: 'string', default: '—', required: 'Yes', desc: 'Visible label text beside the radio' },
  { prop: 'checked', type: 'boolean', default: 'false', required: 'No', desc: 'Whether this radio is the selected option' },
  { prop: 'disabled', type: 'boolean', default: 'false', required: 'No', desc: 'Prevents interaction' },
  { prop: 'readonly', type: 'boolean', default: 'false', required: 'No', desc: 'Value visible but not editable, dashed border' },
  { prop: 'required', type: 'boolean', default: 'false', required: 'No', desc: 'A selection is required for form submission' },
  { prop: 'invalid', type: 'boolean', default: 'false', required: 'No', desc: 'Shows validation error state' },
  { prop: 'size', type: "'sm' | 'lg'", default: "'lg'", required: 'No', desc: 'Size variant for circle, dot, and label' },
  { prop: 'loading', type: 'boolean', default: 'false', required: 'No', desc: 'Shows skeleton loading state' },
  { prop: 'errorMsg', type: 'string', default: '—', required: 'No', desc: 'Error message shown in inline alert when invalid' },
  { prop: 'onChange', type: '({ value, name }) => void', default: '—', required: 'No', desc: 'Called when the radio becomes selected' },
  { prop: 'onFocus', type: 'FocusEventHandler', default: '—', required: 'No', desc: 'Focus handler on the internal input' },
  { prop: 'onBlur', type: 'FocusEventHandler', default: '—', required: 'No', desc: 'Blur handler on the internal input' },
  { prop: 'className', type: 'string', default: '—', required: 'No', desc: 'Additional CSS classes on root element' },
]

const METHODS = [
  { method: 'initialize(el, opts)', returns: 'O9Radio', desc: 'Factory — initializes the component on a DOM element' },
  { method: 'select()', returns: 'void', desc: 'Programmatically select this radio. No-op if already selected, disabled, readonly, or loading.' },
  { method: 'checked()', returns: 'boolean', desc: 'Returns current checked state' },
  { method: 'disabled(state?)', returns: 'boolean | void', desc: 'Get or set disabled state' },
  { method: 'readonly(state?)', returns: 'boolean | void', desc: 'Get or set readonly state' },
  { method: 'setLabel(label)', returns: 'void', desc: 'Update or remove the visible label text' },
  { method: 'setError(hasError, msg?)', returns: 'void', desc: 'Set or clear error state with optional message' },
  { method: 'setLoading(loading)', returns: 'void', desc: 'Toggle loading skeleton overlay' },
  { method: 'getValue()', returns: 'string', desc: 'Returns the current form value' },
  { method: 'deselect()', returns: 'void', desc: 'Set checked to false without dispatching change event' },
  { method: 'setTabIndex(index)', returns: 'void', desc: 'Set tabindex on the native input (for roving tabindex)' },
  { method: 'destroy()', returns: 'void', desc: 'Remove all listeners and clean up references' },
]

const ARIA_ATTRS = [
  { attr: 'aria-checked', when: 'Always; "true" when selected, "false" when not selected' },
  { attr: 'aria-required', when: 'Set when required prop is true' },
  { attr: 'aria-invalid', when: 'Set to "true" when invalid prop is true' },
  { attr: 'aria-busy', when: 'Set to "true" during loading state' },
  { attr: 'aria-describedby', when: 'Points to inline alert element when error state is active' },
]

export default function Radio() {
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
            Radio
          </h1>
          <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed mb-2">
            {getComponentPageDescription('radio')}
          </p>
          <p className="text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed">
            Single-selection control within a group, displayed as a circular button with an inner dot and visible label. Supports checked, disabled, readonly, invalid, and loading states.
          </p>
          <DocTabs tabs={tabs} activeTab={activeTab} onSelect={setActiveTab} />
        </section>

        {activeTab === 'Overview' && (
          <div className="space-y-12">
            <section id="overview-purpose" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Purpose</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The Radio provides a single-selection control for mutually exclusive options within a group. Selecting one radio automatically deselects the previously selected sibling, enforcing the "only one" constraint visually and semantically.
              </p>
            </section>

            <section id="overview-definition" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Definition & role</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                A <strong className="text-o9ds-light-primary dark:text-white font-medium">radio</strong> is a selection control rendered as a circle with an inner dot when selected. It uses a native <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;input type="radio"&gt;</code> for form submission, mutual exclusion via the <code className="px-1 py-0.5" data-o9ds-inline-code>name</code> attribute, and accessibility semantics.
              </p>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Radios are always used within a group. When used standalone, wrap them with <strong className="text-o9ds-light-primary dark:text-white font-medium">Radio Group</strong> for proper keyboard navigation (roving tabindex), group-level labeling, and validation.
              </p>
            </section>

            <section id="overview-anatomy" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Anatomy</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Circle</strong> — visual circular indicator whose border and background change based on state. In readonly mode, the border becomes dashed.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Dot</strong> — inner selection indicator, visible only when the radio is checked. Rendered via <code className="px-1 py-0.5" data-o9ds-inline-code>::after</code> pseudo-element.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Label</strong> — visible text beside the circle describing the option.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Hidden input</strong> — native <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;input type="radio"&gt;</code> for form submission and roving tabindex.</li>
              </ul>
            </section>

            <section id="overview-states" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">States</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Unchecked</strong> — transparent circle with form border, no inner dot.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Checked</strong> — theme-colored circle and border, inner dot visible.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Hover</strong> — border highlight on circle (scoped to <code className="px-1 py-0.5" data-o9ds-inline-code>.no-touch</code>).</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Focus</strong> — visible focus ring on circle via <code className="px-1 py-0.5" data-o9ds-inline-code>:focus-visible</code>.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Disabled</strong> — disabled background and text, removed from arrow-key navigation.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Readonly</strong> — dashed border, interaction blocked, removed from tab order.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Error</strong> — negative color border on circle; inline alert below when configured.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Loading</strong> — shimmer overlay (Pattern A), <code className="px-1 py-0.5" data-o9ds-inline-code>aria-busy="true"</code>.</li>
              </ul>
            </section>

            <section id="overview-naming" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Naming guidance</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Each radio label should clearly describe one option in the group. Keep labels concise—"Small", "Medium", "Large" rather than "Select the small size option". The group label provides the context.
              </p>
            </section>

            <section id="overview-dos-donts" className="scroll-mt-24">
              <div className="grid gap-4 sm:grid-cols-2">
                <GrayBgCard title="Do" bullets={['Always use inside a Radio Group for proper keyboard navigation', 'Set one radio as the default selection when a reasonable default exists', 'Use consistent label phrasing across all options in the group', 'Show all options simultaneously so users can compare']} />
                <WhiteBgCard title="Don't" bullets={['Use for multi-select—use Checkbox Group instead', 'Use a single radio without a group context', 'Hide options behind progressive disclosure unless there are many', 'Rely on radio for immediate effect—use Switch for instant toggles']} />
              </div>
            </section>
          </div>
        )}

        {activeTab === 'Usage' && (
          <div className="space-y-12">
            <section id="usage-when" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Mutually exclusive selection</strong> — when the user must choose exactly one option from a set.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Required selection</strong> — when the user must pick one option before submitting a form.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Visible options</strong> — when all options should be visible for easy comparison (2–5 options).</li>
              </ul>
            </section>

            <section id="usage-when-not" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When not to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Multiple selections</strong> — use <strong className="text-o9ds-light-primary dark:text-white font-medium">Checkbox Group</strong> when users can select more than one option.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Many options</strong> — use a <strong className="text-o9ds-light-primary dark:text-white font-medium">Select</strong> dropdown when there are 6+ options to save space.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Binary on/off</strong> — use <strong className="text-o9ds-light-primary dark:text-white font-medium">Switch</strong> or <strong className="text-o9ds-light-primary dark:text-white font-medium">Checkbox</strong> for simple yes/no choices.</li>
              </ul>
            </section>

            <section id="usage-scenarios" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Scenarios</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Plan selection</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Radio group with "Basic", "Pro", "Enterprise" options. One option pre-selected as default. Error validation if required and no selection on submit.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Size picker</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Horizontal radio group for "S", "M", "L", "XL" size selection. Use compact labels and horizontal orientation for space efficiency.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Notification preference</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Vertical radio group for choosing a single notification channel: "Email", "SMS", "In-app". Use <code className="px-1 py-0.5" data-o9ds-inline-code>onChange</code> to react to selection changes.
                  </p>
                </div>
              </div>
            </section>

            <section id="usage-best-practices" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Best practices</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Always wrap radios in a Radio Group for correct keyboard navigation and group semantics.</li>
                <li>Provide a sensible default selection unless the act of choosing is itself important.</li>
                <li>All radios sharing the same <code className="px-1 py-0.5" data-o9ds-inline-code>name</code> form a mutual-exclusion group—this is required for native radio behavior.</li>
                <li>Keep group sizes small (2–5 options); for longer lists, use a Select dropdown.</li>
              </ul>
            </section>
          </div>
        )}

        {activeTab === 'Code/APIs' && (
          <div className="space-y-12">
            <section id="code-props" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Component API</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
                O9Radio accepts standard <code className="px-1 py-0.5" data-o9ds-inline-code>HTMLLabelElement</code> attributes via spread on the root element.
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
              <DocTable
                columns={[
                  { key: 'event', label: 'Event', mono: true },
                  { key: 'payload', label: 'Payload' },
                  { key: 'desc', label: 'Description' },
                ]}
                rows={[
                  { event: 'radio:change', payload: '{ value: string, name: string }', desc: 'Fires when this radio becomes selected via user interaction or programmatic select()' },
                ]}
              />
            </section>

            <section id="code-scenarios" className="scroll-mt-24 space-y-10">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Implementation scenarios</h2>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Basic — React</h3>
                <CodeBlock
                  code={`import { O9Radio } from '@o9ds/react';

<O9Radio value="option-a" name="group1" label="Option A" />
<O9Radio value="option-b" name="group1" label="Option B" checked />
<O9Radio
  value="option-a"
  name="group1"
  label="Option A"
  onChange={({ value, name }) => console.log(value, name)}
/>`}
                  label="React"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Basic — HTML</h3>
                <CodeBlock
                  code={`<!-- Unchecked -->
<label class="o9ds-radio" aria-checked="false">
  <input class="o9ds-radio__input" type="radio"
         name="group1" value="option-a" />
  <span class="o9ds-radio__circle">
    <span class="o9ds-radio__dot"></span>
  </span>
  <span class="o9ds-radio__lbl">Option A</span>
</label>

<!-- Checked -->
<label class="o9ds-radio" aria-checked="true">
  <input class="o9ds-radio__input" type="radio"
         name="group1" value="option-b" checked />
  <span class="o9ds-radio__circle">
    <span class="o9ds-radio__dot"></span>
  </span>
  <span class="o9ds-radio__lbl">Option B</span>
</label>`}
                  label="HTML"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Disabled & readonly</h3>
                <CodeBlock
                  code={`<O9Radio value="a" name="g" label="Disabled" disabled />
<O9Radio value="a" name="g" label="Readonly" readonly />

<label class="o9ds-radio is-disabled" aria-checked="false">
  <input class="o9ds-radio__input" type="radio"
         name="g" value="a" disabled />
  <span class="o9ds-radio__circle">
    <span class="o9ds-radio__dot"></span>
  </span>
  <span class="o9ds-radio__lbl">Disabled</span>
</label>`}
                  label="Disabled & readonly"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Error state</h3>
                <CodeBlock
                  code={`<O9Radio value="a" name="g" label="Option A" invalid />

<label class="o9ds-radio has-error" aria-checked="false">
  <input class="o9ds-radio__input" type="radio"
         name="g" value="a" aria-invalid="true" />
  <span class="o9ds-radio__circle">
    <span class="o9ds-radio__dot"></span>
  </span>
  <span class="o9ds-radio__lbl">Option A</span>
</label>`}
                  label="Error state"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Vanilla JS</h3>
                <CodeBlock
                  code={`import { O9Radio } from '@o9ds/js';

const radio = O9Radio.initialize(el, {
  value: 'option-a',
  name: 'group1',
  label: 'Option A',
  onChange: ({ value, name }) => console.log(value, name),
});

radio.select();
radio.checked();       // => boolean
radio.disabled(true);
radio.setLoading(true);
radio.destroy();`}
                  label="JS API"
                />
              </div>
            </section>

            <section id="code-css" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">CSS variables</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                Override on <code className="px-1 py-0.5" data-o9ds-inline-code>.o9ds-radio</code> or a parent to theme the radio.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { cat: 'Circle', vars: ['--o9ds-radio-circle-bg', '--o9ds-radio-circle-bg-checked', '--o9ds-radio-circle-border', '--o9ds-radio-circle-border-checked', '--o9ds-radio-circle-bg-disabled', '--o9ds-radio-circle-border-error'] },
                  { cat: 'Dot & label', vars: ['--o9ds-radio-dot-color', '--o9ds-radio-label-color', '--o9ds-radio-label-color-disabled'] },
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
                  { token: '--o9ds-color-s-theme', usage: 'Checked state fill and border' },
                  { token: '--o9ds-color-b-form', usage: 'Default circle border' },
                  { token: '--o9ds-color-b-negative', usage: 'Error state border' },
                  { token: '--o9ds-color-s-disabled', usage: 'Disabled background' },
                  { token: '--o9ds-color-t-primary', usage: 'Label text color' },
                  { token: '--o9ds-color-t-disabled', usage: 'Disabled label text color' },
                  { token: '--o9ds-color-s-layer-01', usage: 'Inner dot color' },
                ]}
              />
            </section>
          </div>
        )}

        {activeTab === 'Accessibility' && (
          <section className="space-y-12">
            <div id="a11y-intro" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Radio accessibility</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The radio uses a native <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;input type="radio"&gt;</code> for full semantic support. Within a group, radios use the <strong className="text-o9ds-light-primary dark:text-white font-medium">roving tabindex</strong> pattern—only the selected radio (or the first non-disabled radio if none selected) is in the tab order.
              </p>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                Screen readers announce: <code className="px-1 py-0.5" data-o9ds-inline-code>[Label], radio, [N of M], selected/not selected</code>
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
                  { key: 'Arrow Down / Right', behavior: 'Move selection to next radio in group (wraps to first). Skips disabled radios.' },
                  { key: 'Arrow Up / Left', behavior: 'Move selection to previous radio in group (wraps to last). Skips disabled radios.' },
                  { key: 'Space', behavior: 'Select the focused radio (if not already selected)' },
                  { key: 'Tab / Shift+Tab', behavior: 'Enter or exit the radio group. Only one radio participates in the tab order.' },
                ]}
              />
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                Arrow keys both <strong className="text-o9ds-light-primary dark:text-white font-medium">move focus</strong> and <strong className="text-o9ds-light-primary dark:text-white font-medium">select</strong> the target radio per the WAI-ARIA radio group pattern.
              </p>
            </div>

            <div id="a11y-focus" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Focus behavior</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>Uses the <strong className="text-o9ds-light-primary dark:text-white font-medium">roving tabindex</strong> pattern: selected radio has <code className="px-1 py-0.5" data-o9ds-inline-code>tabindex="0"</code>, all others have <code className="px-1 py-0.5" data-o9ds-inline-code>tabindex="-1"</code>.</li>
                <li>Arrow keys move focus and selection within the group.</li>
                <li>When <code className="px-1 py-0.5" data-o9ds-inline-code>disabled</code>, the input is excluded from both tab order and arrow-key navigation.</li>
                <li>When <code className="px-1 py-0.5" data-o9ds-inline-code>readonly</code>, the input is removed from the tab order via <code className="px-1 py-0.5" data-o9ds-inline-code>tabindex="-1"</code>.</li>
                <li>When <code className="px-1 py-0.5" data-o9ds-inline-code>loading</code>, pointer events are disabled; the input remains focusable via keyboard.</li>
              </ul>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <strong className="text-o9ds-light-primary dark:text-white font-normal">WCAG:</strong> 2.4.7 Focus Visible · 2.4.13 Focus Appearance (WCAG 2.2)
              </p>
            </div>

            <div id="a11y-disabled" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Disabled state</h3>
              <CodeBlock code={`<O9Radio value="a" name="g" label="Disabled" disabled />`} label="Disabled radio" />
              <ul className="list-disc pl-5 space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>Cannot be selected or interacted with.</li>
                <li>Skipped by arrow-key navigation within the group.</li>
                <li>Screen readers announce as dimmed or unavailable.</li>
                <li>Uses <code className="px-1 py-0.5" data-o9ds-inline-code>cursor: not-allowed</code> and disabled token colors.</li>
              </ul>
            </div>

            <div id="a11y-loading" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Loading state</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                Loading applies a shimmer overlay (Pattern A), blocks pointer events, and sets <code className="px-1 py-0.5" data-o9ds-inline-code>aria-busy="true"</code>. The input remains focusable via keyboard.
              </p>
              <CodeBlock code={`<O9Radio value="a" name="g" label="Loading..." loading />`} label="Loading radio" />
            </div>

            <div id="a11y-notes" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Accessibility notes</h3>
              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
                <WhiteBgCard title="Roving tabindex">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Selected radio has <code className="px-1 py-0.5" data-o9ds-inline-code>tabindex="0"</code>, all others have <code className="px-1 py-0.5" data-o9ds-inline-code>tabindex="-1"</code>. Arrow keys both move focus and select, matching WAI-ARIA expectations.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Label association">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Label association is via the wrapping <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;label&gt;</code> element. Clicking the label selects the radio. For custom patterns, use <code className="px-1 py-0.5" data-o9ds-inline-code>for</code>/<code className="px-1 py-0.5" data-o9ds-inline-code>id</code> attributes.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Error announcements">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    When <code className="px-1 py-0.5" data-o9ds-inline-code>invalid</code> is set with an error message, <code className="px-1 py-0.5" data-o9ds-inline-code>aria-describedby</code> points to the inline alert element so screen readers announce the error.
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
