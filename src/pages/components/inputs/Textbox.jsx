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
  { prop: 'value', type: 'string', default: '—', required: 'No', desc: 'Current input value' },
  { prop: 'placeholder', type: 'string', default: '—', required: 'No', desc: 'Placeholder hint text' },
  { prop: 'disabled', type: 'boolean', default: 'false', required: 'No', desc: 'Prevents all interaction' },
  { prop: 'readonly', type: 'boolean', default: 'false', required: 'No', desc: 'Value visible but not editable; dashed border' },
  { prop: 'label', type: 'string', default: '—', required: 'No', desc: 'Label text above the field' },
  { prop: 'required', type: 'boolean', default: 'false', required: 'No', desc: 'Field required for form submission' },
  { prop: 'invalid', type: 'boolean', default: 'false', required: 'No', desc: 'Shows validation error state with red border' },
  { prop: 'size', type: "'sm' | 'lg'", default: "'lg'", required: 'No', desc: "Input height. sm: 24px, lg: 32px" },
  { prop: 'type', type: "'text' | 'email' | 'tel' | 'url'", default: "'text'", required: 'No', desc: 'HTML input type' },
  { prop: 'maxLength', type: 'number', default: '—', required: 'No', desc: 'Maximum characters allowed' },
  { prop: 'showCounter', type: 'boolean', default: 'false', required: 'No', desc: 'Shows character counter below the input' },
  { prop: 'errorMsg', type: 'string', default: '—', required: 'No', desc: 'Custom error message text' },
  { prop: 'inlineError', type: 'boolean', default: 'false', required: 'No', desc: 'Show error as inline icon with tooltip instead of alert' },
  { prop: 'clearable', type: 'boolean', default: 'false', required: 'No', desc: 'Shows clear button when input has a value' },
  { prop: 'loading', type: 'boolean', default: 'false', required: 'No', desc: 'Shows skeleton loading overlay (Pattern A)' },
  { prop: 'fullWidth', type: 'boolean', default: 'false', required: 'No', desc: 'Expands to fill parent container width' },
  { prop: 'leadingIcon', type: 'string', default: '—', required: 'No', desc: 'Leading icon name (no o9con- prefix)' },
  { prop: 'onInput', type: '(event) => void', default: '—', required: 'No', desc: 'Called on each keystroke' },
  { prop: 'onChange', type: '(event) => void', default: '—', required: 'No', desc: 'Called on blur after value changes' },
  { prop: 'onFocus', type: '(event) => void', default: '—', required: 'No', desc: 'Called when input receives focus' },
  { prop: 'onBlur', type: '(event) => void', default: '—', required: 'No', desc: 'Called when input loses focus' },
  { prop: 'onKeyDown', type: '(event) => void', default: '—', required: 'No', desc: 'Called on keydown while input is focused' },
]

const KEYBOARD = [
  { key: 'Tab', behavior: 'Move focus into / out of the input; if clearable with value, clear button receives focus' },
  { key: 'Escape', behavior: 'Clear input if clearable and has value; otherwise no-op' },
]

const ARIA_ATTRS = [
  { attr: 'aria-label', when: 'Required when no visible label is present' },
  { attr: 'aria-labelledby', when: 'Points to an external label element' },
  { attr: 'aria-invalid', when: 'Automatically set to "true" when error state is active' },
  { attr: 'aria-required', when: 'Automatically set when required prop is true' },
  { attr: 'aria-describedby', when: 'Links to error message and/or character counter' },
  { attr: 'aria-busy', when: 'Set to "true" during loading state' },
]

export default function Textbox() {
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
            Textbox
          </h1>
          <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed mb-2">
            {getComponentPageDescription('textbox')}
          </p>
          <p className="text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed">
            Single-line text input with animated bottom border, optional leading/trailing icons, clearable support, and validation error display.
          </p>
          <DocTabs tabs={tabs} activeTab={activeTab} onSelect={setActiveTab} />
        </section>

        {activeTab === 'Overview' && (
          <div className="space-y-12">
            <section id="overview-purpose" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Purpose</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The Textbox is the standard single-line text input for forms, search fields, and any scenario requiring free-text entry. It shares the same animated-border, state-class, and loading patterns as the Textarea component.
              </p>
            </section>

            <section id="overview-definition" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Definition & role</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                A native <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;input&gt;</code> element wrapped in the o9ds form-input pattern. It supports multiple input types (text, email, tel, url), an optional leading icon, a clearable button, character counting, and the shared validation and error display system.
              </p>
            </section>

            <section id="overview-anatomy" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Anatomy</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Label</strong> — optional text above the field with required indicator.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Field container</strong> — flex container for input and icons, provides hover/focus area.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Leading icon</strong> — optional icon before the input text.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Native input</strong> — the editable single-line input.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Clear button</strong> — icon button to clear the value (when clearable and has value).</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Animated border</strong> — bottom border that expands on hover and thickens on focus.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Character counter</strong> — optional display showing current/max characters.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Error message</strong> — inline alert below the field, or inline icon with tooltip.</li>
              </ul>
            </section>

            <section id="overview-variants" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Variants & sizes</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">sm (24 px)</strong> — compact density for data-heavy views and toolbars.</li>
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
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Disabled</strong> — native disabled, reduced opacity.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Readonly</strong> — dashed border, not editable.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Loading</strong> — full skeleton shimmer overlay (Pattern A).</li>
              </ul>
            </section>

            <section id="overview-naming" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Naming guidance</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Use a label that describes the expected value: "Name", "Email address", "Search". Placeholder text should hint at format or content, not repeat the label.
              </p>
            </section>

            <section id="overview-dos-donts" className="scroll-mt-24">
              <div className="grid gap-4 sm:grid-cols-2">
                <GrayBgCard title="Do" bullets={['Use for single-line free-text entry (names, emails, search)', 'Provide a visible label for form context and accessibility', 'Use clearable for search fields where resetting is common', 'Use leadingIcon to reinforce the input purpose (search, email)']} />
                <WhiteBgCard title="Don't" bullets={['Use Textbox for multi-line content — use Textarea', 'Use Textbox for numeric entry with steppers — use NumberInput', 'Remove the animated border — it signals focus to all users', 'Leave required fields without validation and error messaging']} />
              </div>
            </section>
          </div>
        )}

        {activeTab === 'Usage' && (
          <div className="space-y-12">
            <section id="usage-when" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Free-text entry</strong> — names, addresses, search queries, single-line descriptions.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Specific input types</strong> — email, telephone, URL with browser-level validation.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">With leading icon</strong> — reinforcing the field purpose (search icon, email icon).</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Clearable</strong> — search inputs where users frequently reset the field.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">With character counter</strong> — fields with a character limit.</li>
              </ul>
            </section>

            <section id="usage-when-not" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When not to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Multi-line text — use <strong className="text-o9ds-light-primary dark:text-white font-medium">Textarea</strong>.</li>
                <li>Numeric input with increment/decrement — use <strong className="text-o9ds-light-primary dark:text-white font-medium">NumberInput</strong>.</li>
                <li>Selecting from a list — use <strong className="text-o9ds-light-primary dark:text-white font-medium">Select</strong> or <strong className="text-o9ds-light-primary dark:text-white font-medium">Combobox</strong>.</li>
                <li>Password entry — use a dedicated password input component.</li>
              </ul>
            </section>

            <section id="usage-scenarios" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Scenarios</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Form field with label</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Pair with a visible label and required indicator. Validate on submit and surface errorMsg below the input.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Search input</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Use leadingIcon="search" and clearable to create a search field. The clear button appears when the user types, allowing quick reset.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Character-limited field</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Set maxLength and showCounter to provide visual feedback on remaining characters.
                  </p>
                </div>
              </div>
            </section>

            <section id="usage-best-practices" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Best practices</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Choose the right input type (email, tel, url) to get browser-level validation and mobile keyboard hints.</li>
                <li>Use leadingIcon sparingly — one icon per field to reinforce purpose without clutter.</li>
                <li>Pair showCounter with maxLength so users see remaining characters.</li>
                <li>Provide clear, actionable errorMsg text.</li>
              </ul>
            </section>
          </div>
        )}

        {activeTab === 'Code/APIs' && (
          <div className="space-y-12">
            <section id="code-props" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Component API</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
                O9Textbox accepts all standard <code className="px-1 py-0.5" data-o9ds-inline-code>HTMLInputElement</code> attributes via spread.
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
                  code={`import { O9Textbox } from '@o9ds/react';

<O9Textbox placeholder="Enter your name..." />

<O9Textbox label="Email" type="email" placeholder="name@example.com" required />`}
                  label="React"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">With leading icon & clearable — React</h3>
                <CodeBlock
                  code={`<O9Textbox
  leadingIcon="search"
  clearable
  placeholder="Search..."
  onInput={(e) => handleSearch(e.target.value)}
/>`}
                  label="Search input"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Character counter — React</h3>
                <CodeBlock
                  code={`<O9Textbox label="Title" showCounter maxLength={100} placeholder="Enter title..." />`}
                  label="Counter"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Basic — HTML</h3>
                <CodeBlock
                  code={`<div class="o9ds-textbox o9ds-textbox--lg">
  <label class="o9ds-textbox__lbl" for="tb-1">
    Name
    <span class="o9ds-textbox__lbl__req" aria-hidden="true">*</span>
  </label>
  <div class="o9ds-textbox__field">
    <input class="o9ds-textbox__input" id="tb-1" type="text"
           placeholder="Enter your name..." required aria-required="true" />
    <div class="o9ds-textbox__border"></div>
  </div>
</div>`}
                  label="HTML"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Error state — HTML</h3>
                <CodeBlock
                  code={`<div class="o9ds-textbox o9ds-textbox--lg has-error">
  <div class="o9ds-textbox__field">
    <input class="o9ds-textbox__input" type="text"
           aria-invalid="true" aria-describedby="tb-err-1" />
    <div class="o9ds-textbox__border"></div>
  </div>
  <div class="o9ds-inline-alert o9ds-inline-alert--error" id="tb-err-1" role="alert">
    <span class="o9ds-inline-alert__ico" aria-hidden="true"></span>
    <span class="o9ds-inline-alert__msg">This field is required</span>
  </div>
</div>`}
                  label="Error HTML"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Disabled & loading — React</h3>
                <CodeBlock
                  code={`<O9Textbox disabled value="Cannot edit" />

<O9Textbox loading placeholder="Loading..." />`}
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
                  { method: 'initialize(el, opts)', returns: 'O9Textbox', desc: 'Factory — initializes on a DOM element' },
                  { method: 'value(val?)', returns: 'string | void', desc: 'Get or set input value' },
                  { method: 'clear()', returns: 'void', desc: 'Clears the input value; fires textbox:clear' },
                  { method: 'validate()', returns: '{ valid, errors }', desc: 'Run built-in validation (required, maxLength, type)' },
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
                  { event: 'textbox:change', payload: '{ value, previousValue }', desc: 'Value changed via user input or value() method' },
                  { event: 'textbox:clear', payload: '—', desc: 'Clear button clicked or clear() called' },
                ]}
              />
            </section>

            <section id="code-css" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">CSS variables</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                Override on <code className="px-1 py-0.5" data-o9ds-inline-code>.o9ds-textbox</code> or a parent to theme the component. Shares form-input CSS variables with Textarea.
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
          <section id="textbox-accessibility" className="space-y-12">
            <div id="a11y-intro" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Textbox accessibility</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The Textbox uses a native <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;input&gt;</code> element, which provides built-in keyboard support and screen reader semantics. Ensure a visible label or <code className="px-1 py-0.5" data-o9ds-inline-code>aria-label</code> is always present.
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
            </div>

            <div id="a11y-focus" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Focus behavior</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>Native <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;input&gt;</code> receives focus via Tab key or <code className="px-1 py-0.5" data-o9ds-inline-code>focus()</code> method.</li>
                <li>When clearable with a value, the clear button receives focus after the input in tab order.</li>
                <li>When disabled, the input is removed from the tab order via the native <code className="px-1 py-0.5" data-o9ds-inline-code>disabled</code> attribute.</li>
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
                When <strong className="text-o9ds-light-primary dark:text-white font-medium">disabled</strong>, the native <code className="px-1 py-0.5" data-o9ds-inline-code>disabled</code> attribute removes the input from the tab order and screen readers announce it as dimmed.
              </p>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                When <strong className="text-o9ds-light-primary dark:text-white font-medium">loading</strong>, <code className="px-1 py-0.5" data-o9ds-inline-code>aria-busy="true"</code> is set on the root element. The skeleton overlay blocks interaction.
              </p>
              <CodeBlock code={`<input type="text" disabled />`} label="Disabled" />
            </div>

            <div id="a11y-notes" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Accessibility notes</h3>
              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
                <WhiteBgCard title="Clear button">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    When clearable, the clear button is an <code className="px-1 py-0.5" data-o9ds-inline-code>O9IconButton</code> with an accessible label so screen readers announce "Clear" as a separate button in the tab order.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Error messaging">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Error messages use <code className="px-1 py-0.5" data-o9ds-inline-code>role="alert"</code> for immediate announcement. <code className="px-1 py-0.5" data-o9ds-inline-code>aria-describedby</code> and <code className="px-1 py-0.5" data-o9ds-inline-code>aria-invalid</code> ensure the error is announced in context.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Focus indicators">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    The animated bottom border thickens to 3 px on <code className="px-1 py-0.5" data-o9ds-inline-code>:focus-visible</code>. Custom styles should maintain WCAG 3:1 contrast.
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
