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
  { prop: 'label', type: 'string | null', default: 'null', required: 'No', desc: 'Group label text displayed above or beside the items' },
  { prop: 'selectAll', type: 'boolean', default: 'false', required: 'No', desc: 'Renders a "Select All" checkbox; automatically tracks indeterminate state' },
  { prop: 'orientation', type: "'vertical' | 'horizontal'", default: "'vertical'", required: 'No', desc: 'Layout direction of child checkboxes' },
  { prop: 'labelPosition', type: "'top' | 'start'", default: "'top'", required: 'No', desc: 'Position of group label relative to items body' },
  { prop: 'size', type: "'sm' | 'lg'", default: "'lg'", required: 'No', desc: 'Size propagated to all child checkboxes via context' },
  { prop: 'disabled', type: 'boolean', default: 'false', required: 'No', desc: 'Disables all interaction on group and children' },
  { prop: 'readonly', type: 'boolean', default: 'false', required: 'No', desc: 'Makes group and children read-only' },
  { prop: 'required', type: 'boolean', default: 'false', required: 'No', desc: 'Shows required asterisk on label; sets aria-required' },
  { prop: 'invalid', type: 'boolean', default: 'false', required: 'No', desc: 'Applies error styling; sets aria-invalid' },
  { prop: 'errorMsg', type: 'string | null', default: 'null', required: 'No', desc: 'Error message in inline alert when invalid is true' },
  { prop: 'loading', type: 'boolean', default: 'false', required: 'No', desc: 'Pattern C loading: group disables, children show shimmer' },
  { prop: 'name', type: 'string', default: '—', required: 'No', desc: 'Common name attribute applied to all child checkbox inputs' },
  { prop: 'onChange', type: '({ values, allChecked }) => void', default: '—', required: 'No', desc: 'Fires when any child checkbox changes state' },
  { prop: 'className', type: 'string', default: '—', required: 'No', desc: 'Additional CSS classes on root element' },
  { prop: 'children', type: 'ReactNode', default: '—', required: 'No', desc: 'O9Checkbox components to render inside the group' },
]

const METHODS = [
  { method: 'initialize(el, opts)', returns: 'O9CheckboxGroup', desc: 'Factory — initializes the component on a DOM element' },
  { method: 'values()', returns: 'string[]', desc: 'Returns the values of all currently checked child checkboxes' },
  { method: 'values(newValues)', returns: 'void', desc: 'Check items whose value appears in the array; uncheck all others' },
  { method: 'toggleAll(force?)', returns: 'void', desc: 'true checks all, false unchecks all, omit flips' },
  { method: 'disabled(state?)', returns: 'boolean | void', desc: 'Get or set disabled state on group and children' },
  { method: 'readonly(state?)', returns: 'boolean | void', desc: 'Get or set readonly state on group and children' },
  { method: 'setError(msg | false)', returns: 'void', desc: 'String sets error with message; false clears error state' },
  { method: 'setLoading(loading)', returns: 'void', desc: 'Toggle Pattern C loading state' },
  { method: 'setLabel(label)', returns: 'void', desc: 'Update or remove the group label' },
  { method: 'destroy()', returns: 'void', desc: 'Cleanup listeners, destroy child instances, remove DOM refs' },
]

const ARIA_ATTRS = [
  { attr: 'role="group"', when: 'Always; semantically groups the checkboxes' },
  { attr: 'aria-labelledby', when: 'When label prop is provided; references the label element ID' },
  { attr: 'aria-required', when: 'Set when required prop is true' },
  { attr: 'aria-invalid', when: 'Set to "true" when invalid prop is true' },
  { attr: 'aria-describedby', when: 'References inline alert ID when invalid and errorMsg are both set' },
  { attr: 'aria-busy', when: 'Set to "true" during loading state' },
]

export default function CheckboxGroup() {
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
        { id: 'a11y-focus', label: 'Focus behavior' },
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
            Checkbox Group
          </h1>
          <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed mb-2">
            {getComponentPageDescription('checkbox-group')}
          </p>
          <p className="text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed">
            Container that manages a set of Checkbox components as a single form field with group-level label, validation, Select All, orientation control, and Pattern C loading.
          </p>
          <DocTabs tabs={tabs} activeTab={activeTab} onSelect={setActiveTab} />
        </section>

        {activeTab === 'Overview' && (
          <div className="space-y-12">
            <section id="overview-purpose" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Purpose</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The Checkbox Group provides structure and context for a set of related checkboxes. It manages group-level labeling, required state, validation, and a "Select All" shortcut—keeping the individual Checkbox components focused on their own checked/unchecked behavior.
              </p>
            </section>

            <section id="overview-definition" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Definition & role</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                A <strong className="text-o9ds-light-primary dark:text-white font-medium">checkbox group</strong> is a container with <code className="px-1 py-0.5" data-o9ds-inline-code>role="group"</code> that wraps multiple <strong className="text-o9ds-light-primary dark:text-white font-medium">O9Checkbox</strong> children. It propagates shared properties (size, disabled, readonly, name) to all children and manages collective state through the <code className="px-1 py-0.5" data-o9ds-inline-code>onChange</code> callback, which returns all currently checked values.
              </p>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                When <code className="px-1 py-0.5" data-o9ds-inline-code>selectAll</code> is enabled, a "Select All" checkbox is inserted as the first item. It automatically shows indeterminate when some (but not all) items are checked, checked when all are checked, and unchecked when none are checked.
              </p>
            </section>

            <section id="overview-anatomy" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Anatomy</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Group label</strong> — optional text above or beside the items, using the shared form-label pattern. Supports required asterisk.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Body</strong> — wrapper containing the items container and optional inline alert.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Items container</strong> — flex container holding child O9Checkbox components. When <code className="px-1 py-0.5" data-o9ds-inline-code>selectAll</code> is true, the "Select All" checkbox is the first item.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Inline alert</strong> — error message shown below items when <code className="px-1 py-0.5" data-o9ds-inline-code>invalid</code> and <code className="px-1 py-0.5" data-o9ds-inline-code>errorMsg</code> are set.</li>
              </ul>
            </section>

            <section id="overview-variants" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Variants & layout</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Vertical (default)</strong> — children stacked in a column.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Horizontal</strong> — children laid out in a row.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Label position: top (default)</strong> — label above the items body.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Label position: start</strong> — label inline to the left of the body (only effective with horizontal orientation).</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Size: sm / lg</strong> — propagated to all child checkboxes and the form label.</li>
              </ul>
            </section>

            <section id="overview-states" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">States</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Default</strong> — label visible, children interactive.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Disabled</strong> — all children disabled, label dimmed.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Readonly</strong> — values visible but interaction blocked.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Error</strong> — inline alert visible below items, <code className="px-1 py-0.5" data-o9ds-inline-code>aria-invalid</code> set.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Loading</strong> — Pattern C: group blocks pointer events, sets <code className="px-1 py-0.5" data-o9ds-inline-code>aria-busy</code>, each child shows Pattern A shimmer.</li>
              </ul>
            </section>

            <section id="overview-dos-donts" className="scroll-mt-24">
              <div className="grid gap-4 sm:grid-cols-2">
                <GrayBgCard title="Do" bullets={['Use a group label to describe the set of options', 'Enable selectAll when the full list is selectable in one click', 'Set required and invalid with a clear error message for validation', 'Keep groups to a manageable number of options (5–7 recommended)']} />
                <WhiteBgCard title="Don't" bullets={['Use for mutually exclusive choices—use Radio Group instead', 'Nest checkbox groups within checkbox groups', 'Mix sizes within a single group', 'Disable without providing context about why']} />
              </div>
            </section>
          </div>
        )}

        {activeTab === 'Usage' && (
          <div className="space-y-12">
            <section id="usage-when" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Multiple selections from a list</strong> — when users need to pick any number of options that benefit from a visible group label.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Select All pattern</strong> — enable <code className="px-1 py-0.5" data-o9ds-inline-code>selectAll</code> when the full list should be selectable in one click.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Form validation</strong> — set <code className="px-1 py-0.5" data-o9ds-inline-code>invalid</code> and <code className="px-1 py-0.5" data-o9ds-inline-code>errorMsg</code> when the group fails validation (e.g., at least one item must be selected).</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Inline form fields</strong> — use horizontal orientation with start label position for dense form layouts.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Read-only display</strong> — set <code className="px-1 py-0.5" data-o9ds-inline-code>readonly</code> for review or confirmation screens.</li>
              </ul>
            </section>

            <section id="usage-when-not" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When not to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Single-selection</strong> — use <strong className="text-o9ds-light-primary dark:text-white font-medium">Radio Group</strong> when only one selection is allowed.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Immediate toggles</strong> — use individual <strong className="text-o9ds-light-primary dark:text-white font-medium">Switch</strong> controls for settings that take effect instantly.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Large option sets</strong> — consider a multi-select dropdown when there are many options with search capability.</li>
              </ul>
            </section>

            <section id="usage-scenarios" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Scenarios</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Notification preferences</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    A vertical group labeled "Notify me about" with checkboxes for email, SMS, and push. Use <code className="px-1 py-0.5" data-o9ds-inline-code>onChange</code> to capture all currently checked values.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Topic selection with Select All</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Enable <code className="px-1 py-0.5" data-o9ds-inline-code>selectAll</code> for a group of topics. The "Select All" checkbox automatically reflects indeterminate state when only some topics are chosen.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Inline day picker</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Use horizontal orientation with <code className="px-1 py-0.5" data-o9ds-inline-code>labelPosition="start"</code> for a compact "Days available" field with Mon, Tue, Wed checkboxes inline.
                  </p>
                </div>
              </div>
            </section>

            <section id="usage-best-practices" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Best practices</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Always provide a group label for context—even if the surrounding heading seems sufficient.</li>
                <li>Use <code className="px-1 py-0.5" data-o9ds-inline-code>selectAll</code> only when every item in the list is equally selectable.</li>
                <li>Error messages should be specific: "Please select at least one option" is better than "Error".</li>
                <li>Propagate size consistently—do not set individual child sizes when using a group.</li>
              </ul>
            </section>
          </div>
        )}

        {activeTab === 'Code/APIs' && (
          <div className="space-y-12">
            <section id="code-props" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Component API</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
                O9CheckboxGroup accepts standard <code className="px-1 py-0.5" data-o9ds-inline-code>HTMLDivElement</code> attributes via spread on the root element.
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
                  { event: 'cb-grp:change', payload: '{ values: string[], allChecked: boolean }', desc: 'Fires when any child checkbox changes. values contains all currently checked values.' },
                ]}
              />
            </section>

            <section id="code-scenarios" className="scroll-mt-24 space-y-10">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Implementation scenarios</h2>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Basic — React</h3>
                <CodeBlock
                  code={`import { O9CheckboxGroup, O9Checkbox } from '@o9ds/react';

<O9CheckboxGroup label="Preferences">
  <O9Checkbox label="Email updates" value="email" />
  <O9Checkbox label="SMS notifications" value="sms" />
  <O9Checkbox label="Push notifications" value="push" />
</O9CheckboxGroup>`}
                  label="React"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">With Select All</h3>
                <CodeBlock
                  code={`<O9CheckboxGroup label="Select topics" selectAll>
  <O9Checkbox label="Design" value="design" />
  <O9Checkbox label="Engineering" value="engineering" />
  <O9Checkbox label="Product" value="product" />
</O9CheckboxGroup>`}
                  label="React — Select All"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Horizontal layout</h3>
                <CodeBlock
                  code={`<O9CheckboxGroup label="Days available" orientation="horizontal">
  <O9Checkbox label="Mon" value="mon" />
  <O9Checkbox label="Tue" value="tue" />
  <O9Checkbox label="Wed" value="wed" />
</O9CheckboxGroup>`}
                  label="React — horizontal"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Error state</h3>
                <CodeBlock
                  code={`<O9CheckboxGroup
  label="Required selection"
  required
  invalid
  errorMsg="Please select at least one option"
>
  <O9Checkbox label="Option A" value="a" />
  <O9Checkbox label="Option B" value="b" />
</O9CheckboxGroup>`}
                  label="React — error"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">HTML</h3>
                <CodeBlock
                  code={`<div class="o9ds-cb-grp o9ds-cb-grp--lg" role="group"
     aria-labelledby="grp-lbl">
  <span id="grp-lbl" class="o9ds-form-lbl o9ds-cb-grp__lbl">
    Preferences
  </span>
  <div class="o9ds-cb-grp__bdy">
    <div class="o9ds-cb-grp__items">
      <div class="o9ds-checkbox o9ds-checkbox--lg" aria-checked="false">
        <label class="o9ds-checkbox__field">
          <input class="o9ds-checkbox__input" type="checkbox"
                 value="email" name="prefs" />
          <span class="o9ds-checkbox__lbl">Email updates</span>
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
                  code={`import { O9CheckboxGroup } from '@o9ds/js';

const grp = O9CheckboxGroup.initialize(el, {
  label: 'Preferences',
  selectAll: true,
  onChange: ({ values, allChecked }) => console.log(values, allChecked),
});

grp.values();             // => string[]
grp.values(['a', 'c']);   // set checked values
grp.toggleAll(true);      // check all
grp.setError('Select at least one');
grp.setLoading(true);
grp.destroy();`}
                  label="JS API"
                />
              </div>
            </section>

            <section id="code-css" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">CSS variables</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                Override on <code className="px-1 py-0.5" data-o9ds-inline-code>.o9ds-cb-grp</code> or a parent to theme the group.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { cat: 'Label', vars: ['--o9ds-cb-grp-lbl-color', '--o9ds-cb-grp-lbl-color-disabled'] },
                  { cat: 'Layout', vars: ['--o9ds-cb-grp-gap', '--o9ds-cb-grp-lbl-gap', '--o9ds-cb-grp-lbl-gap-start', '--o9ds-cb-grp-error-gap'] },
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
                  { token: '--o9ds-color-s-disabled', usage: 'Disabled background for child checkboxes' },
                  { token: '--o9ds-space-8', usage: 'Default gap between items and between label and body' },
                  { token: '--o9ds-space-12', usage: 'Gap in label-start mode' },
                ]}
              />
            </section>
          </div>
        )}

        {activeTab === 'Accessibility' && (
          <section className="space-y-12">
            <div id="a11y-intro" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Checkbox Group accessibility</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The group container uses <code className="px-1 py-0.5" data-o9ds-inline-code>role="group"</code> with <code className="px-1 py-0.5" data-o9ds-inline-code>aria-labelledby</code> pointing to the group label. This ensures screen readers announce the group label when focus enters the first child. Each child checkbox manages its own ARIA attributes independently.
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
                  { key: 'Tab', behavior: 'Move focus into and out of the group; each checkbox is individually focusable' },
                  { key: 'Space', behavior: 'Toggle the focused checkbox between checked and unchecked' },
                  { key: 'Shift+Tab', behavior: 'Move focus to the previous focusable element' },
                ]}
              />
            </div>

            <div id="a11y-focus" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Focus behavior</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>Each child checkbox receives focus individually via Tab; the group itself is not a single focus stop.</li>
                <li>When the group is <code className="px-1 py-0.5" data-o9ds-inline-code>disabled</code>, all child inputs are excluded from the tab order.</li>
                <li>When the group is <code className="px-1 py-0.5" data-o9ds-inline-code>loading</code>, pointer events are suppressed; child inputs remain keyboard-focusable.</li>
                <li>The Select All checkbox participates in the same tab order as other checkboxes.</li>
              </ul>
            </div>

            <div id="a11y-loading" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Loading state</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Pattern C loading: the group root receives <code className="px-1 py-0.5" data-o9ds-inline-code>aria-busy="true"</code> and blocks pointer events. The inner items container receives <code className="px-1 py-0.5" data-o9ds-inline-code>data-loading="true"</code> which triggers Pattern A shimmer on each child checkbox individually.
              </p>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <strong className="text-o9ds-light-primary dark:text-white font-medium">Parent-controlled loading:</strong> add <code className="px-1 py-0.5" data-o9ds-inline-code>data-loading="true"</code> to any parent to trigger shimmer on descendant checkboxes. Use <code className="px-1 py-0.5" data-o9ds-inline-code>data-loading-ignore="true"</code> to opt out a specific checkbox.
              </p>
            </div>

            <div id="a11y-notes" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Accessibility notes</h3>
              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
                <WhiteBgCard title="Group semantics">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    The root element has <code className="px-1 py-0.5" data-o9ds-inline-code>role="group"</code> with <code className="px-1 py-0.5" data-o9ds-inline-code>aria-labelledby</code> pointing to the label element. Screen readers announce the group label when focus enters the first child.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Error announcements">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    The inline alert uses <code className="px-1 py-0.5" data-o9ds-inline-code>role="alert"</code> so validation errors are announced immediately. <code className="px-1 py-0.5" data-o9ds-inline-code>aria-describedby</code> on the root points to the alert.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Required indication">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Group-level <code className="px-1 py-0.5" data-o9ds-inline-code>aria-required</code> indicates at least one selection is needed. The required asterisk on the label provides a visual cue.
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
