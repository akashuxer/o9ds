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
  { prop: 'value', type: 'number', default: '—', required: 'No', desc: 'Current numeric value' },
  { prop: 'min', type: 'number', default: '—', required: 'No', desc: 'Minimum allowed value' },
  { prop: 'max', type: 'number', default: '—', required: 'No', desc: 'Maximum allowed value' },
  { prop: 'step', type: 'number', default: '1', required: 'No', desc: 'Increment/decrement step amount' },
  { prop: 'placeholder', type: 'string', default: '—', required: 'No', desc: 'Placeholder hint text' },
  { prop: 'disabled', type: 'boolean', default: 'false', required: 'No', desc: 'Prevents all interaction' },
  { prop: 'readonly', type: 'boolean', default: 'false', required: 'No', desc: 'Value visible but not editable; stepper buttons hidden' },
  { prop: 'label', type: 'string', default: '—', required: 'No', desc: 'Label text above the field' },
  { prop: 'required', type: 'boolean', default: 'false', required: 'No', desc: 'Field required for form submission' },
  { prop: 'invalid', type: 'boolean', default: 'false', required: 'No', desc: 'Shows validation error state with red border' },
  { prop: 'size', type: "'sm' | 'lg'", default: "'lg'", required: 'No', desc: "Input height. sm: 24px, lg: 32px" },
  { prop: 'errorMsg', type: 'string', default: '—', required: 'No', desc: 'Custom error message text' },
  { prop: 'inlineError', type: 'boolean', default: 'false', required: 'No', desc: 'Show error as inline icon with tooltip instead of alert' },
  { prop: 'loading', type: 'boolean', default: 'false', required: 'No', desc: 'Shows skeleton loading overlay (Pattern A)' },
  { prop: 'fullWidth', type: 'boolean', default: 'false', required: 'No', desc: 'Expands to fill parent container width' },
  { prop: 'onInput', type: '(event) => void', default: '—', required: 'No', desc: 'Called on each value change' },
  { prop: 'onChange', type: '(event) => void', default: '—', required: 'No', desc: 'Called on blur or after stepper/keyboard changes' },
  { prop: 'onFocus', type: '(event) => void', default: '—', required: 'No', desc: 'Called when input receives focus' },
  { prop: 'onBlur', type: '(event) => void', default: '—', required: 'No', desc: 'Called when input loses focus' },
]

const KEYBOARD = [
  { key: 'ArrowUp', behavior: 'Increment value by step (clamped to max)' },
  { key: 'Shift+ArrowUp', behavior: 'Increment value by 10× step (clamped to max)' },
  { key: 'ArrowDown', behavior: 'Decrement value by step (clamped to min)' },
  { key: 'Shift+ArrowDown', behavior: 'Decrement value by 10× step (clamped to min)' },
  { key: 'Home', behavior: 'Set value to min (if min is defined)' },
  { key: 'End', behavior: 'Set value to max (if max is defined)' },
  { key: 'Tab', behavior: 'Move focus into / out of the input' },
]

const ARIA_ATTRS = [
  { attr: 'role="spinbutton"', when: 'Implicit on <input type="number"> or set explicitly' },
  { attr: 'aria-valuemin', when: 'Set when min prop is defined' },
  { attr: 'aria-valuemax', when: 'Set when max prop is defined' },
  { attr: 'aria-valuenow', when: 'Reflects the current numeric value' },
  { attr: 'aria-label', when: 'Required when no visible label is present' },
  { attr: 'aria-labelledby', when: 'Points to an external label element' },
  { attr: 'aria-invalid', when: 'Automatically set when error state is active' },
  { attr: 'aria-required', when: 'Automatically set when required prop is true' },
  { attr: 'aria-describedby', when: 'Links to error message element' },
  { attr: 'aria-busy', when: 'Set to "true" during loading state' },
]

export default function NumberInput() {
  const [activeTab, setActiveTab] = useState('Overview')
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const onThisPageSections = useMemo(() => {
    if (activeTab === 'Overview') {
      return [
        { id: 'overview-purpose', label: 'Purpose' },
        { id: 'overview-definition', label: 'Definition & role' },
        { id: 'overview-anatomy', label: 'Anatomy' },
        { id: 'overview-variants', label: 'Variants & sizes' },
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
        { id: 'code-scenarios', label: 'Implementation scenarios' },
        { id: 'code-methods', label: 'Methods (JS)' },
        { id: 'code-events', label: 'Custom events (JS)' },
        { id: 'code-css', label: 'CSS variables' },
        { id: 'code-size', label: 'Size reference' },
      ]
    }
    if (activeTab === 'Accessibility') {
      return [
        { id: 'a11y-intro', label: 'Overview' },
        { id: 'a11y-keyboard', label: 'Keyboard interaction' },
        { id: 'a11y-focus', label: 'Focus behavior' },
        { id: 'a11y-aria', label: 'ARIA attributes' },
        { id: 'a11y-disabled', label: 'Disabled & loading' },
        { id: 'a11y-notes', label: 'Accessibility notes' },
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
            Number Input
          </h1>
          <p className="text-lg text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed mb-2">
            {getComponentPageDescription('number-input')}
          </p>
          <p className="text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed">
            Numeric input with increment/decrement stepper buttons, animated bottom border, and min/max/step constraints.
          </p>
          <DocTabs tabs={tabs} activeTab={activeTab} onSelect={setActiveTab} />
        </section>

        {activeTab === 'Overview' && (
          <div className="space-y-12">
            <section id="overview-purpose" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Purpose</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The Number Input provides a precise way to enter and adjust numeric values. Stepper buttons allow quick increment/decrement while the native input accepts direct typing. Values are automatically clamped to the defined min/max range.
              </p>
            </section>

            <section id="overview-definition" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Definition & role</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                A native <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;input type="number"&gt;</code> wrapped in the o9ds form-input pattern with increment and decrement <strong className="text-o9ds-light-primary dark:text-white font-medium">icon buttons</strong>. It uses the <code className="px-1 py-0.5" data-o9ds-inline-code>spinbutton</code> role (implicit from type="number") and supports <code className="px-1 py-0.5" data-o9ds-inline-code>aria-valuemin</code>, <code className="px-1 py-0.5" data-o9ds-inline-code>aria-valuemax</code>, and <code className="px-1 py-0.5" data-o9ds-inline-code>aria-valuenow</code>.
              </p>
            </section>

            <section id="overview-anatomy" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Anatomy</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Label</strong> — optional text above the field with required indicator.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Field container</strong> — flex container holding input and stepper buttons.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Native input</strong> — <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;input type="number"&gt;</code> for direct numeric entry.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Stepper buttons</strong> — increment (up) and decrement (down) icon buttons. Hidden when readonly.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Animated border</strong> — bottom border that expands on hover and thickens on focus.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Error message</strong> — inline alert below the field, or inline icon with tooltip.</li>
              </ul>
            </section>

            <section id="overview-variants" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Variants & sizes</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">sm (24 px)</strong> — compact density for data-heavy views and inline editing.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">lg (32 px, default)</strong> — standard density for forms and dialogs.</li>
              </ul>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Modifier: <strong className="text-o9ds-light-primary dark:text-white font-medium">full-width</strong> stretches the input to fill its container.
              </p>
            </section>

            <section id="overview-states" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">States</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Default</strong> — base styling with layer-04 background.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Hover</strong> — background shifts to theme-hover-4.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Focus</strong> — bottom border thickens to 3 px.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Invalid</strong> — bottom border uses negative color; error feedback shown.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Disabled</strong> — native disabled, reduced opacity, stepper buttons disabled.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Readonly</strong> — dashed border, not editable, stepper buttons hidden.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Loading</strong> — full skeleton shimmer overlay (Pattern A).</li>
              </ul>
            </section>

            <section id="overview-naming" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Naming guidance</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Use a label that describes the numeric value: "Quantity", "Price", "Weight", "Age". Include units in the label or placeholder when relevant (e.g. "Weight (kg)").
              </p>
            </section>

            <section id="overview-dos-donts" className="scroll-mt-24">
              <div className="grid gap-4 sm:grid-cols-2">
                <GrayBgCard title="Do" bullets={['Use for numeric values that benefit from stepper buttons', 'Define min and max to prevent out-of-range values', 'Set step to match the expected precision (1, 0.1, 10)', 'Provide a visible label with units when relevant']} />
                <WhiteBgCard title="Don't" bullets={['Use NumberInput for free-text entry — use Textbox', 'Use for date/time input — use dedicated date/time components', 'Leave min/max undefined when business rules constrain the range', 'Use step values that create floating-point precision issues']} />
              </div>
            </section>
          </div>
        )}

        {activeTab === 'Usage' && (
          <div className="space-y-12">
            <section id="usage-when" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Precise numeric entry</strong> — quantities, prices, weights, ages, counts.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Bounded ranges</strong> — values constrained by min/max business rules.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Stepper adjustments</strong> — when users frequently adjust values by fixed increments.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Form fields</strong> — with label, required indicator, and error messaging.</li>
              </ul>
            </section>

            <section id="usage-when-not" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When not to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Free-text input (names, emails) — use <strong className="text-o9ds-light-primary dark:text-white font-medium">Textbox</strong>.</li>
                <li>Large numeric ranges best explored with a slider — use a slider component.</li>
                <li>Date or time entry — use dedicated date/time components.</li>
                <li>Phone numbers or postal codes — use <strong className="text-o9ds-light-primary dark:text-white font-medium">Textbox</strong> with appropriate type.</li>
              </ul>
            </section>

            <section id="usage-scenarios" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Scenarios</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Quantity field</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Set min={'{1}'} and max to the available stock. Step defaults to 1. Users can type directly or click the stepper buttons.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Decimal precision</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Set step={'{0.01}'} for currency or step={'{0.1}'} for measurements. Arrow keys and stepper buttons respect the step value.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Loading state</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Set loading to true during async validation or data fetching. Pattern A covers the component with a skeleton shimmer.
                  </p>
                </div>
              </div>
            </section>

            <section id="usage-best-practices" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Best practices</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Always define min and max when the domain has clear bounds.</li>
                <li>Use step values that align with the precision users expect (whole numbers, tenths, hundredths).</li>
                <li>Include units in the label or a helper text to clarify meaning.</li>
                <li>Provide clear, actionable errorMsg text on validation failure.</li>
              </ul>
            </section>
          </div>
        )}

        {activeTab === 'Code/APIs' && (
          <div className="space-y-12">
            <section id="code-props" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Component API</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
                O9NumberInput accepts all standard <code className="px-1 py-0.5" data-o9ds-inline-code>HTMLInputElement</code> attributes via spread.
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
                  code={`import { O9NumberInput } from '@o9ds/react';

<O9NumberInput label="Quantity" min={1} max={100} step={1} placeholder="Enter quantity" />

<O9NumberInput label="Price" min={0} step={0.01} placeholder="0.00" />`}
                  label="React"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Controlled — React</h3>
                <CodeBlock
                  code={`const [qty, setQty] = React.useState(1);

<O9NumberInput
  label="Quantity"
  value={qty}
  min={1}
  max={99}
  onChange={(e) => setQty(Number(e.target.value))}
/>`}
                  label="Controlled"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Basic — HTML</h3>
                <CodeBlock
                  code={`<div class="o9ds-number-input o9ds-number-input--lg">
  <label class="o9ds-number-input__lbl" for="ni-1">
    Quantity
    <span class="o9ds-number-input__lbl__req" aria-hidden="true">*</span>
  </label>
  <div class="o9ds-number-input__field">
    <input class="o9ds-number-input__input" id="ni-1" type="number"
           min="1" max="100" step="1" placeholder="Enter quantity"
           required aria-required="true"
           aria-valuemin="1" aria-valuemax="100" aria-valuenow="1" />
    <div class="o9ds-number-input__steppers">
      <button class="o9ds-number-input__decrement-btn" type="button" aria-label="Decrease">−</button>
      <button class="o9ds-number-input__increment-btn" type="button" aria-label="Increase">+</button>
    </div>
    <div class="o9ds-number-input__border"></div>
  </div>
</div>`}
                  label="HTML"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Error state — React</h3>
                <CodeBlock
                  code={`<O9NumberInput
  label="Age"
  invalid
  errorMsg="Age must be between 18 and 120"
  min={18}
  max={120}
/>`}
                  label="Error state"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Disabled & loading — React</h3>
                <CodeBlock
                  code={`<O9NumberInput label="Stock" disabled value={42} />

<O9NumberInput label="Loading..." loading />`}
                  label="Disabled / loading"
                />
              </div>
            </section>

            <section id="code-methods" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Methods (JS)</h2>
              <DocTable
                columns={[
                  { key: 'method', label: 'Method', mono: true },
                  { key: 'returns', label: 'Returns' },
                  { key: 'desc', label: 'Description' },
                ]}
                rows={[
                  { method: 'initialize(el, opts)', returns: 'O9NumberInput', desc: 'Factory — initializes on a DOM element' },
                  { method: 'value(val?)', returns: 'number | null | void', desc: 'Get or set value (clamped to min/max)' },
                  { method: 'clear()', returns: 'void', desc: 'Clears the input value' },
                  { method: 'validate()', returns: '{ valid, errors }', desc: 'Run validation (required, min, max, step, numeric)' },
                  { method: 'setError(msg)', returns: 'void', desc: 'Set or clear error state and message' },
                  { method: 'disabled(state?)', returns: 'boolean | void', desc: 'Get or set disabled state' },
                  { method: 'focus()', returns: 'void', desc: 'Programmatically focus the input' },
                  { method: 'setLoading(bool)', returns: 'void', desc: 'Toggle loading skeleton overlay' },
                  { method: 'destroy()', returns: 'void', desc: 'Remove listeners and clean up' },
                ]}
              />
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
                  { event: 'number-input:change', payload: '{ value, previousValue }', desc: 'Numeric value changed via typing or stepper buttons' },
                ]}
              />
            </section>

            <section id="code-css" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">CSS variables</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                Override on <code className="px-1 py-0.5" data-o9ds-inline-code>.o9ds-number-input</code> or a parent to theme the component. Shares form-input CSS variables with Textbox and Textarea.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { cat: 'Layout', vars: ['--o9ds-form-input-padding-block', '--o9ds-form-input-padding-inline'] },
                  { cat: 'Typography', vars: ['--o9ds-form-input-font-size'] },
                  { cat: 'Color', vars: ['--o9ds-form-input-bg-color', '--o9ds-form-input-hover-bg-color', '--o9ds-form-input-disabled-bg-color', '--o9ds-form-input-text-color', '--o9ds-form-input-placeholder-color', '--o9ds-form-input-text-disabled-color', '--o9ds-form-input-text-readonly-color'] },
                  { cat: 'Border', vars: ['--o9ds-form-input-border-color', '--o9ds-form-input-border-hover-color', '--o9ds-form-input-border-focus-color', '--o9ds-form-input-border-error-color', '--o9ds-form-input-border-disabled-color', '--o9ds-form-input-border-readonly-color', '--o9ds-form-input-border-width', '--o9ds-form-input-border-focus-width'] },
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
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { size: 'sm', height: '24px', font: '12px' },
                      { size: 'lg (default)', height: '32px', font: '14px' },
                    ].map((row) => (
                      <tr key={row.size} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{row.size}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.height}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.font}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'Accessibility' && (
          <section id="number-input-accessibility" className="space-y-12">
            <div id="a11y-intro" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Number Input accessibility</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The Number Input uses a native <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;input type="number"&gt;</code> which provides the <code className="px-1 py-0.5" data-o9ds-inline-code>spinbutton</code> role implicitly. Screen readers announce the current value, min, max, and step constraints. Stepper buttons have accessible labels ("Increase", "Decrease").
              </p>
            </div>

            <div id="a11y-keyboard" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Keyboard interaction</h3>
              <DocTable
                columns={[
                  { key: 'key', label: 'Keys', mono: true },
                  { key: 'behavior', label: 'Action' },
                ]}
                rows={KEYBOARD}
              />
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                Shift+Arrow multiplies the step by 10 for faster adjustment over large ranges.
              </p>
            </div>

            <div id="a11y-focus" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Focus behavior</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>The native input receives focus via Tab key or <code className="px-1 py-0.5" data-o9ds-inline-code>focus()</code> method.</li>
                <li>Stepper buttons are focusable via Tab after the input.</li>
                <li>When disabled, the input and stepper buttons are removed from the tab order.</li>
                <li>When readonly, stepper buttons are hidden entirely.</li>
                <li>When loading, <code className="px-1 py-0.5" data-o9ds-inline-code>pointer-events: none</code> prevents focus via click.</li>
              </ul>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <strong className="text-o9ds-light-primary dark:text-white font-normal">WCAG:</strong> 2.4.7 Focus Visible
              </p>
            </div>

            <div id="a11y-aria" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">ARIA attributes</h3>
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

            <div id="a11y-disabled" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Disabled & loading states</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                When <strong className="text-o9ds-light-primary dark:text-white font-medium">disabled</strong>, the native <code className="px-1 py-0.5" data-o9ds-inline-code>disabled</code> attribute removes the input and stepper buttons from the tab order. Screen readers announce the field as dimmed.
              </p>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                When <strong className="text-o9ds-light-primary dark:text-white font-medium">loading</strong>, <code className="px-1 py-0.5" data-o9ds-inline-code>aria-busy="true"</code> is set on the root element. The skeleton overlay blocks all interaction.
              </p>
            </div>

            <div id="a11y-notes" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Accessibility notes</h3>
              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
                <WhiteBgCard title="Spinbutton pattern">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Screen readers announce: "[value], spin button, [label]" with min/max constraints. Arrow keys adjust the value by the defined step.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Stepper buttons">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Increment and decrement buttons have <code className="px-1 py-0.5" data-o9ds-inline-code>aria-label</code> ("Increase", "Decrease") so screen readers announce their purpose.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Error messaging">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Error messages use <code className="px-1 py-0.5" data-o9ds-inline-code>role="alert"</code> for immediate announcement. <code className="px-1 py-0.5" data-o9ds-inline-code>aria-describedby</code> links the input to the error.
                  </p>
                </WhiteBgCard>
              </div>
            </div>
          </section>
        )}
      </div>
    </PageWithToc>
  )
}
