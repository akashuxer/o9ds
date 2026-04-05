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
  { prop: 'name', type: 'string', default: '—', required: 'Yes', desc: 'Group name shared by all child radio inputs for mutual exclusion' },
  { prop: 'label', type: 'string | null', default: 'null', required: 'No', desc: 'Group label text displayed above or beside the items' },
  { prop: 'orientation', type: "'vertical' | 'horizontal'", default: "'vertical'", required: 'No', desc: 'Layout direction of child radios' },
  { prop: 'labelPosition', type: "'top' | 'start'", default: "'top'", required: 'No', desc: 'Position of group label relative to items body' },
  { prop: 'size', type: "'sm' | 'lg'", default: "'lg'", required: 'No', desc: 'Size propagated to all child radios via context' },
  { prop: 'disabled', type: 'boolean', default: 'false', required: 'No', desc: 'Disables all interaction on group and children' },
  { prop: 'readonly', type: 'boolean', default: 'false', required: 'No', desc: 'Makes group and children read-only' },
  { prop: 'required', type: 'boolean', default: 'false', required: 'No', desc: 'Shows required asterisk on label; sets aria-required' },
  { prop: 'invalid', type: 'boolean', default: 'false', required: 'No', desc: 'Applies error styling; sets aria-invalid' },
  { prop: 'errorMsg', type: 'string | null', default: 'null', required: 'No', desc: 'Error message in inline alert when invalid is true' },
  { prop: 'loading', type: 'boolean', default: 'false', required: 'No', desc: 'Pattern C loading: group disables, children show shimmer' },
  { prop: 'value', type: 'string | null', default: 'null', required: 'No', desc: 'Currently selected radio value; null means no selection' },
  { prop: 'onChange', type: '({ value, previousValue }) => void', default: '—', required: 'No', desc: 'Fires when the selected radio changes' },
  { prop: 'className', type: 'string', default: '—', required: 'No', desc: 'Additional CSS classes on root element' },
  { prop: 'children', type: 'ReactNode', default: '—', required: 'No', desc: 'O9Radio components to render inside the group' },
]

const METHODS = [
  { method: 'initialize(el, opts)', returns: 'O9RadioGroup', desc: 'Factory — initializes the component on a DOM element' },
  { method: 'value()', returns: 'string | null', desc: 'Returns the value of the currently selected radio, or null' },
  { method: 'value(newValue)', returns: 'void', desc: 'Select a radio by value; deselects previous; fires change event' },
  { method: 'disabled(state?)', returns: 'boolean | void', desc: 'Get or set disabled state; propagates to children' },
  { method: 'readonly(state?)', returns: 'boolean | void', desc: 'Get or set readonly state; propagates to children' },
  { method: 'setError(msg | false)', returns: 'void', desc: 'String sets error with message; false clears error state' },
  { method: 'setLoading(loading)', returns: 'void', desc: 'Toggle Pattern C loading state' },
  { method: 'setLabel(label)', returns: 'void', desc: 'Update or remove the group label' },
  { method: 'destroy()', returns: 'void', desc: 'Cleanup listeners, destroy child instances, remove DOM refs' },
]

const ARIA_ATTRS = [
  { attr: 'role="radiogroup"', when: 'Always; semantically groups the radios for mutual exclusion' },
  { attr: 'aria-labelledby', when: 'When label prop is provided; references the label element ID' },
  { attr: 'aria-required', when: 'Set when required prop is true' },
  { attr: 'aria-invalid', when: 'Set to "true" when invalid prop is true' },
  { attr: 'aria-describedby', when: 'References inline alert ID when invalid and errorMsg are both set' },
  { attr: 'aria-busy', when: 'Set to "true" during loading state' },
]

export default function RadioGroup() {
  const [activeTab, setActiveTab] = useState('Overview')
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const onThisPageSections = useMemo(() => {
    if (activeTab === 'Overview') {
      return [
        { id: 'overview-purpose', label: 'Purpose' },
        { id: 'overview-definition', label: 'Definition & role' },
        { id: 'overview-anatomy', label: 'Anatomy' },
        { id: 'overview-variants', label: 'Variants & layout' },
        { id: 'overview-states', label: 'States' },
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
        { id: 'a11y-focus', label: 'Focus & roving tabindex' },
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
            Radio Group
          </h1>
          <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed mb-2">
            {getComponentPageDescription('radio-group')}
          </p>
          <p className="text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed">
            Container that manages mutual exclusion across multiple Radio components as a single form field. Supports group-level label, validation, roving tabindex, orientation control, and Pattern C loading.
          </p>
          <DocTabs tabs={tabs} activeTab={activeTab} onSelect={setActiveTab} />
        </section>

        {activeTab === 'Overview' && (
          <div className="space-y-12">
            <section id="overview-purpose" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Purpose</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The Radio Group manages a set of Radio components as a single form field, enforcing mutual exclusion (only one option can be selected at a time). It provides group-level labeling, validation, keyboard navigation via roving tabindex, and consistent sizing for all children.
              </p>
            </section>

            <section id="overview-definition" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Definition & role</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                A <strong className="text-o9ds-light-primary dark:text-white font-medium">radio group</strong> is a container with <code className="px-1 py-0.5" data-o9ds-inline-code>role="radiogroup"</code> that wraps multiple <strong className="text-o9ds-light-primary dark:text-white font-medium">O9Radio</strong> children. It implements the WAI-ARIA radio group pattern with roving tabindex, propagates shared properties (name, size, disabled, readonly) to all children, and reports the currently selected value through its <code className="px-1 py-0.5" data-o9ds-inline-code>onChange</code> callback.
              </p>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The <code className="px-1 py-0.5" data-o9ds-inline-code>name</code> prop is required—it ensures all child radios participate in mutual exclusion. The group manages which radio has <code className="px-1 py-0.5" data-o9ds-inline-code>tabindex="0"</code> (the selected one, or the first non-disabled if none selected) and which have <code className="px-1 py-0.5" data-o9ds-inline-code>tabindex="-1"</code>.
              </p>
            </section>

            <section id="overview-anatomy" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Anatomy</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Group label</strong> — optional text above or beside the items, using the shared form-label pattern. Supports required asterisk.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Body</strong> — wrapper containing the items container and optional inline alert.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Items container</strong> — flex container holding child O9Radio components. Direction is column (vertical) or row (horizontal).</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Inline alert</strong> — error message shown below items when <code className="px-1 py-0.5" data-o9ds-inline-code>invalid</code> and <code className="px-1 py-0.5" data-o9ds-inline-code>errorMsg</code> are set. Uses <code className="px-1 py-0.5" data-o9ds-inline-code>role="alert"</code> for immediate announcement.</li>
              </ul>
            </section>

            <section id="overview-variants" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Variants & layout</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Vertical (default)</strong> — children stacked in a column.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Horizontal</strong> — children laid out in a row.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Label position: top (default)</strong> — label above the items body.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Label position: start</strong> — label inline to the left of the body (only effective with horizontal orientation).</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Size: sm / lg</strong> — propagated to all child radios and the form label.</li>
              </ul>
            </section>

            <section id="overview-states" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">States</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Default</strong> — label visible, children interactive, one or no radio selected.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Disabled</strong> — all children disabled, label dimmed.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Readonly</strong> — values visible but interaction blocked.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Error</strong> — inline alert visible below items, <code className="px-1 py-0.5" data-o9ds-inline-code>aria-invalid</code> set.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Loading</strong> — Pattern C: group blocks pointer events, sets <code className="px-1 py-0.5" data-o9ds-inline-code>aria-busy</code>, each child shows Pattern A shimmer.</li>
              </ul>
            </section>

            <section id="overview-dos-donts" className="scroll-mt-24">
              <div className="grid gap-4 sm:grid-cols-2">
                <GrayBgCard title="Do" bullets={['Always provide a group label for context', 'Pre-select a default option when a reasonable default exists', 'Use for 2–5 mutually exclusive options', 'Set required and invalid with a clear error message for validation']} />
                <WhiteBgCard title="Don't" bullets={['Use for multi-select—use Checkbox Group instead', 'Use for more than 5 options—use a Select dropdown', 'Mix sizes within a single group', 'Nest radio groups inside each other']} />
              </div>
            </section>
          </div>
        )}

        {activeTab === 'Usage' && (
          <div className="space-y-12">
            <section id="usage-when" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Single selection from a list</strong> — when users must choose exactly one option from a defined set.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Form validation</strong> — set <code className="px-1 py-0.5" data-o9ds-inline-code>invalid</code> and <code className="px-1 py-0.5" data-o9ds-inline-code>errorMsg</code> when a selection is required but missing.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Inline form fields</strong> — use horizontal orientation with start label position for compact layouts.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Read-only display</strong> — set <code className="px-1 py-0.5" data-o9ds-inline-code>readonly</code> for review or confirmation screens.</li>
              </ul>
            </section>

            <section id="usage-when-not" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When not to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Multiple selections</strong> — use <strong className="text-o9ds-light-primary dark:text-white font-medium">Checkbox Group</strong> when users can select more than one option.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Many options</strong> — use a <strong className="text-o9ds-light-primary dark:text-white font-medium">Select</strong> dropdown when there are 6+ options.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Binary toggle</strong> — use <strong className="text-o9ds-light-primary dark:text-white font-medium">Switch</strong> for immediate on/off settings or <strong className="text-o9ds-light-primary dark:text-white font-medium">Checkbox</strong> for form-based yes/no.</li>
              </ul>
            </section>

            <section id="usage-scenarios" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Scenarios</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Plan selection</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Vertical radio group with "Basic", "Pro", "Enterprise" options. Set <code className="px-1 py-0.5" data-o9ds-inline-code>required</code> and validate on submit with an error message if no selection was made.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Size picker</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Horizontal radio group for size selection (S, M, L). Use <code className="px-1 py-0.5" data-o9ds-inline-code>labelPosition="start"</code> to align the "Size" label with the options in an inline layout.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Controlled selection</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Use the <code className="px-1 py-0.5" data-o9ds-inline-code>value</code> prop and <code className="px-1 py-0.5" data-o9ds-inline-code>onChange</code> callback for fully controlled behavior. The callback receives both the new value and the previous value for state management.
                  </p>
                </div>
              </div>
            </section>

            <section id="usage-best-practices" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Best practices</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Always provide a group label to describe the set of options.</li>
                <li>Pre-select a default when there is a reasonable default—do not force users to make an active choice when one is obvious.</li>
                <li>Error messages should be specific: "Please select a plan" is better than "Error".</li>
                <li>Horizontal layout works best for 2–3 short-labeled options; use vertical for longer labels or more options.</li>
              </ul>
            </section>
          </div>
        )}

        {activeTab === 'Code/APIs' && (
          <div className="space-y-12">
            <section id="code-props" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Component API</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
                O9RadioGroup accepts standard <code className="px-1 py-0.5" data-o9ds-inline-code>HTMLDivElement</code> attributes via spread on the root element.
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
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <strong className="text-o9ds-light-primary dark:text-white font-medium">JS items option:</strong> The JS component also accepts an <code className="px-1 py-0.5" data-o9ds-inline-code>items</code> array of <code className="px-1 py-0.5" data-o9ds-inline-code>{`{ value, label, checked?, disabled? }`}</code> objects to create child O9Radio instances programmatically.
              </p>
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
                  { event: 'rb-grp:change', payload: '{ value: string, previousValue: string | null }', desc: 'Fires when the selected radio changes. value is the new selection; previousValue is the prior selection.' },
                ]}
              />
            </section>

            <section id="code-scenarios" className="scroll-mt-24 space-y-10">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Implementation scenarios</h2>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Basic — React</h3>
                <CodeBlock
                  code={`import { O9RadioGroup, O9Radio } from '@o9ds/react';

<O9RadioGroup
  name="color"
  label="Favorite color"
  value={selected}
  onChange={({ value }) => setSelected(value)}
>
  <O9Radio label="Red" value="red" />
  <O9Radio label="Green" value="green" />
  <O9Radio label="Blue" value="blue" />
</O9RadioGroup>`}
                  label="React"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Horizontal layout</h3>
                <CodeBlock
                  code={`<O9RadioGroup name="size" label="Size" orientation="horizontal">
  <O9Radio label="Small" value="sm" />
  <O9Radio label="Medium" value="md" />
  <O9Radio label="Large" value="lg" />
</O9RadioGroup>`}
                  label="React — horizontal"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Error state</h3>
                <CodeBlock
                  code={`<O9RadioGroup
  name="plan"
  label="Select a plan"
  required
  invalid
  errorMsg="Please select a plan"
>
  <O9Radio label="Basic" value="basic" />
  <O9Radio label="Pro" value="pro" />
</O9RadioGroup>`}
                  label="React — error"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">HTML</h3>
                <CodeBlock
                  code={`<div class="o9ds-rb-grp o9ds-rb-grp--lg" role="radiogroup"
     aria-labelledby="grp-lbl">
  <span id="grp-lbl" class="o9ds-form-lbl o9ds-rb-grp__lbl">
    Favorite color
  </span>
  <div class="o9ds-rb-grp__bdy">
    <div class="o9ds-rb-grp__items">
      <div class="o9ds-radio o9ds-radio--lg">
        <label class="o9ds-radio__field">
          <input class="o9ds-radio__input" type="radio"
                 name="color" value="red" />
          <span class="o9ds-radio__control" aria-hidden="true"></span>
          <span class="o9ds-radio__text">Red</span>
        </label>
      </div>
      <div class="o9ds-radio o9ds-radio--lg">
        <label class="o9ds-radio__field">
          <input class="o9ds-radio__input" type="radio"
                 name="color" value="green" checked />
          <span class="o9ds-radio__control" aria-hidden="true"></span>
          <span class="o9ds-radio__text">Green</span>
        </label>
      </div>
    </div>
  </div>
</div>`}
                  label="HTML"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Vanilla JS</h3>
                <CodeBlock
                  code={`import { O9RadioGroup } from '@o9ds/js';

const grp = O9RadioGroup.initialize(el, {
  name: 'color',
  label: 'Favorite color',
  items: [
    { value: 'red', label: 'Red' },
    { value: 'green', label: 'Green' },
    { value: 'blue', label: 'Blue' },
  ],
  onChange: ({ value, previousValue }) => {
    console.log('selected:', value, 'previous:', previousValue);
  },
});

grp.value();              // => string | null
grp.value('green');       // selects 'green'
grp.disabled(true);
grp.setError('Please select an option');
grp.setLoading(true);
grp.destroy();`}
                  label="JS API"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Loading (Pattern C)</h3>
                <CodeBlock
                  code={`const [loading, setLoading] = React.useState(false);

const handleFetch = async () => {
  setLoading(true);
  const options = await fetchOptions();
  setLoading(false);
};

<O9RadioGroup name="prefs" label="Preferences" loading={loading}>
  <O9Radio label="Option A" value="a" />
  <O9Radio label="Option B" value="b" />
</O9RadioGroup>`}
                  label="React — loading"
                />
              </div>
            </section>

            <section id="code-css" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">CSS variables</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                Override on <code className="px-1 py-0.5" data-o9ds-inline-code>.o9ds-rb-grp</code> or a parent to theme the group.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { cat: 'Label', vars: ['--o9ds-rb-grp-lbl-color', '--o9ds-rb-grp-lbl-color-disabled'] },
                  { cat: 'Layout', vars: ['--o9ds-rb-grp-gap', '--o9ds-rb-grp-lbl-gap', '--o9ds-rb-grp-lbl-gap-start', '--o9ds-rb-grp-error-gap'] },
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
                  { token: '--o9ds-color-t-form-label', usage: 'Group label text color' },
                  { token: '--o9ds-color-t-disabled', usage: 'Disabled label and text color' },
                  { token: '--o9ds-color-b-negative', usage: 'Error state indicator' },
                  { token: '--o9ds-space-8', usage: 'Gap between label and body (top position)' },
                  { token: '--o9ds-space-12', usage: 'Gap between items, gap in label-start mode, error gap' },
                ]}
              />
            </section>
          </div>
        )}

        {activeTab === 'Accessibility' && (
          <section className="space-y-12">
            <div id="a11y-intro" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Radio Group accessibility</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The group container uses <code className="px-1 py-0.5" data-o9ds-inline-code>role="radiogroup"</code> with <code className="px-1 py-0.5" data-o9ds-inline-code>aria-labelledby</code> pointing to the group label. It implements the <strong className="text-o9ds-light-primary dark:text-white font-medium">roving tabindex</strong> pattern per the WAI-ARIA radio group specification, ensuring only one radio is in the tab order at a time.
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
                  { key: 'Tab / Shift+Tab', behavior: 'Enter or exit the radio group. Focus lands on the selected radio, or the first non-disabled radio if none selected.' },
                  { key: 'Arrow Down / Right', behavior: 'Move selection to the next radio (wraps to first). Skips disabled radios.' },
                  { key: 'Arrow Up / Left', behavior: 'Move selection to the previous radio (wraps to last). Skips disabled radios.' },
                  { key: 'Space', behavior: 'Select the currently focused radio (if not already selected)' },
                ]}
              />
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                Arrow keys both <strong className="text-o9ds-light-primary dark:text-white font-medium">move focus</strong> and <strong className="text-o9ds-light-primary dark:text-white font-medium">select</strong> the target radio, which matches the expected WAI-ARIA behavior.
              </p>
            </div>

            <div id="a11y-focus" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Focus & roving tabindex</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>Only the selected radio (or the first non-disabled radio if none selected) has <code className="px-1 py-0.5" data-o9ds-inline-code>tabindex="0"</code>; all others have <code className="px-1 py-0.5" data-o9ds-inline-code>tabindex="-1"</code>.</li>
                <li>Arrow keys move focus and selection within the group, wrapping at boundaries.</li>
                <li>Disabled radios are skipped during arrow-key navigation.</li>
                <li>The <code className="px-1 py-0.5" data-o9ds-inline-code>role="radiogroup"</code> with <code className="px-1 py-0.5" data-o9ds-inline-code>aria-labelledby</code> ensures screen readers announce the group label when focus enters.</li>
                <li>When the group is <code className="px-1 py-0.5" data-o9ds-inline-code>loading</code>, pointer events are suppressed; the roving tabindex pattern continues to work via keyboard.</li>
              </ul>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <strong className="text-o9ds-light-primary dark:text-white font-normal">WCAG:</strong> 2.4.7 Focus Visible · 2.4.13 Focus Appearance (WCAG 2.2)
              </p>
            </div>

            <div id="a11y-loading" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Loading state</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Pattern C loading: the group root receives <code className="px-1 py-0.5" data-o9ds-inline-code>aria-busy="true"</code> and blocks pointer events. Each child O9Radio receives <code className="px-1 py-0.5" data-o9ds-inline-code>loading=true</code> and shows its own Pattern A shimmer overlay. The roving tabindex pattern remains functional via keyboard.
              </p>
            </div>

            <div id="a11y-notes" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Accessibility notes</h3>
              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
                <WhiteBgCard title="Roving tabindex">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    The selected radio has <code className="px-1 py-0.5" data-o9ds-inline-code>tabindex="0"</code>, all others have <code className="px-1 py-0.5" data-o9ds-inline-code>tabindex="-1"</code>. Arrow keys both move focus and select, per the WAI-ARIA radio group pattern.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Error announcements">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    The inline alert uses <code className="px-1 py-0.5" data-o9ds-inline-code>role="alert"</code> so validation errors are announced immediately. <code className="px-1 py-0.5" data-o9ds-inline-code>aria-describedby</code> on the root points to the alert element.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Group semantics">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    The root <code className="px-1 py-0.5" data-o9ds-inline-code>role="radiogroup"</code> with <code className="px-1 py-0.5" data-o9ds-inline-code>aria-labelledby</code> ensures screen readers announce the group label and context when focus enters.
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
