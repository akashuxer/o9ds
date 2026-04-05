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
  { prop: 'items', type: "SelectOptionData[] | ListGroup<SelectOptionData>[]", default: '—', required: 'Yes', desc: 'Option items as a flat array or array of groups' },
  { prop: 'value', type: 'unknown', default: '—', required: 'No', desc: 'Controlled selected value' },
  { prop: 'defaultValue', type: 'unknown', default: '—', required: 'No', desc: 'Initial selected value (uncontrolled)' },
  { prop: 'placeholder', type: 'string', default: '—', required: 'No', desc: 'Placeholder text when no value is selected' },
  { prop: 'label', type: 'string', default: '—', required: 'No', desc: 'Label rendered above the trigger' },
  { prop: 'disabled', type: 'boolean', default: 'false', required: 'No', desc: 'Prevents all interaction; panel cannot open' },
  { prop: 'required', type: 'boolean', default: 'false', required: 'No', desc: 'Marks field as required; adds indicator to label' },
  { prop: 'invalid', type: 'boolean', default: 'false', required: 'No', desc: 'Apply error styling and surface errorMsg' },
  { prop: 'errorMsg', type: 'string', default: '—', required: 'No', desc: 'Validation error message when invalid is true' },
  { prop: 'size', type: "'sm' | 'lg'", default: "'lg'", required: 'No', desc: "Trigger height. sm: 24px, lg: 32px" },
  { prop: 'clearable', type: 'boolean', default: 'false', required: 'No', desc: 'Show clear button when a value is selected' },
  { prop: 'filterable', type: 'boolean', default: 'false', required: 'No', desc: 'Show search input in panel for filtering' },
  { prop: 'loading', type: 'boolean', default: 'false', required: 'No', desc: 'Show spinner in trigger; block interaction' },
  { prop: 'readonly', type: 'boolean', default: 'false', required: 'No', desc: 'Prevent opening while displaying current value' },
  { prop: 'fullWidth', type: 'boolean', default: 'false', required: 'No', desc: 'Stretch trigger to fill container' },
  { prop: 'placement', type: "'top-start' | 'bottom-start' | 'auto'", default: "'bottom-start'", required: 'No', desc: 'Panel placement relative to trigger' },
  { prop: 'maxHeight', type: 'string', default: '—', required: 'No', desc: 'CSS max-height for the scrollable panel' },
  { prop: 'showGroupDividers', type: 'boolean', default: 'true', required: 'No', desc: 'Render dividers between item groups' },
  { prop: 'closeOnSelect', type: 'boolean', default: 'true', required: 'No', desc: 'Close panel after item is selected' },
  { prop: 'open', type: 'boolean', default: '—', required: 'No', desc: 'Controlled open state' },
  { prop: 'defaultOpen', type: 'boolean', default: '—', required: 'No', desc: 'Initial open state (uncontrolled)' },
  { prop: 'onChange', type: '(item, index) => boolean | void', default: '—', required: 'No', desc: 'Called on selection; return false to keep panel open' },
  { prop: 'onOpen', type: '() => boolean | void', default: '—', required: 'No', desc: 'Called before panel opens; return false to cancel' },
  { prop: 'onClose', type: '() => boolean | void', default: '—', required: 'No', desc: 'Called before panel closes; return false to cancel' },
  { prop: 'onClear', type: '({ previousValue }) => void', default: '—', required: 'No', desc: 'Called when selection is cleared' },
  { prop: 'onOpenChange', type: '(open: boolean) => void', default: '—', required: 'No', desc: 'Called when open state changes (React only)' },
]

const KEYBOARD = [
  { key: 'Enter / Space', behavior: 'Open panel (closed) or select highlighted option (open)' },
  { key: 'ArrowDown', behavior: 'Open panel and highlight first option, or move highlight down' },
  { key: 'ArrowUp', behavior: 'Open panel and highlight last option, or move highlight up' },
  { key: 'Home', behavior: 'Move highlight to first non-disabled option (when open)' },
  { key: 'End', behavior: 'Move highlight to last non-disabled option (when open)' },
  { key: 'Escape', behavior: 'Close panel without changing selection' },
  { key: 'Tab', behavior: 'Select highlighted option, close panel, move focus to next element' },
  { key: 'Printable characters', behavior: 'Type-ahead: jump to matching option by label prefix (300 ms debounce)' },
]

const ARIA_ATTRS = [
  { attr: 'role="combobox"', when: 'On the trigger element (ARIA 1.2 select-only combobox)' },
  { attr: 'aria-haspopup="listbox"', when: 'Always; indicates it opens a listbox' },
  { attr: 'aria-expanded', when: '"true" when panel is open, "false" when closed' },
  { attr: 'aria-controls', when: 'References the panel element by id' },
  { attr: 'aria-activedescendant', when: 'References the currently highlighted option' },
  { attr: 'aria-required', when: 'Set when required prop is true' },
  { attr: 'aria-invalid', when: 'Set when invalid prop is true' },
  { attr: 'aria-disabled', when: 'Set when disabled prop is true' },
  { attr: 'aria-busy', when: 'Set to "true" during loading state' },
  { attr: 'aria-describedby', when: 'References error message element when invalid' },
]

export default function SelectDropdown() {
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
        { id: 'code-option-data', label: 'SelectOptionData' },
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
            Select Dropdown
          </h1>
          <p className="text-lg text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed mb-2">
            {getComponentPageDescription('select-dropdown')}
          </p>
          <p className="text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed">
            Dropdown selection control that presents options in a floating panel. Supports flat and grouped items, inline filter search, clearable selection, and all standard input states.
          </p>
          <DocTabs tabs={tabs} activeTab={activeTab} onSelect={setActiveTab} />
        </section>

        {activeTab === 'Overview' && (
          <div className="space-y-12">
            <section id="overview-purpose" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Purpose</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The Select Dropdown lets users pick exactly one value from a predefined list without typing. It keeps the interface clean by hiding options until the user activates the trigger, then presents them in an overlay panel that can be navigated with a keyboard or pointer.
              </p>
            </section>

            <section id="overview-definition" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Definition & role</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                A <strong className="text-o9ds-light-primary dark:text-white font-medium">select</strong> is a form control with a non-editable trigger and a listbox panel. It uses <code className="px-1 py-0.5" data-o9ds-inline-code>role="combobox"</code> per ARIA 1.2 for select-only dropdowns. Unlike Combobox, the trigger does not accept typed input (unless <code className="px-1 py-0.5" data-o9ds-inline-code>filterable</code> is enabled, which places a search field inside the panel).
              </p>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Items extend <strong className="text-o9ds-light-primary dark:text-white font-medium">ListItemBase</strong> with a <code className="px-1 py-0.5" data-o9ds-inline-code>value</code> field for form submission and programmatic access.
              </p>
            </section>

            <section id="overview-anatomy" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Anatomy</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Label</strong> — optional text above the trigger with a required indicator.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Trigger</strong> — displays selected value or placeholder. Not a native input; uses <code className="px-1 py-0.5" data-o9ds-inline-code>tabindex="0"</code>.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Animated border</strong> — bottom border with expand-on-hover and thicken-on-focus behavior.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Chevron</strong> — dropdown indicator, rotates 180° when open.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Clear button</strong> — resets the selected value (when clearable).</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Panel</strong> — overlay listbox with scrollable options, optional search field, group headers, and dividers.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Option</strong> — individual selectable row with checkmark on the active item.</li>
              </ul>
            </section>

            <section id="overview-variants" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Variants & sizes</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">sm (24 px)</strong> — compact density for toolbars and data-heavy views.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">lg (32 px, default)</strong> — standard density for forms and dialogs.</li>
              </ul>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Modifiers: <strong className="text-o9ds-light-primary dark:text-white font-medium">full-width</strong>, <strong className="text-o9ds-light-primary dark:text-white font-medium">clearable</strong>, and <strong className="text-o9ds-light-primary dark:text-white font-medium">filterable</strong> (shows a search input inside the panel).
              </p>
            </section>

            <section id="overview-states" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">States</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Default</strong> — base trigger with layer-04 background.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Hover</strong> — background shifts to theme-hover-4.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Focus</strong> — bottom border thickens to 3 px.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Open</strong> — panel visible, chevron rotated, aria-expanded="true".</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Filled</strong> — selected value displayed instead of placeholder.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Invalid</strong> — bottom border uses negative color.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Disabled</strong> — reduced opacity, cursor not-allowed, no hover/focus.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Readonly</strong> — value visible, panel cannot open.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Loading</strong> — spinner replaces chevron, panel blocked.</li>
              </ul>
            </section>

            <section id="overview-naming" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Naming guidance</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Use descriptive labels that name the category ("Region", "Status", "Priority"). Placeholder text should indicate the expected action: "Select…" rather than repeating the label.
              </p>
            </section>

            <section id="overview-dos-donts" className="scroll-mt-24">
              <div className="grid gap-4 sm:grid-cols-2">
                <GrayBgCard title="Do" bullets={['Use for single selection from a predefined list', 'Enable filterable for lists longer than ~15 items', 'Provide a visible label and required indicator for form fields', 'Group options when they have natural categories']} />
                <WhiteBgCard title="Don't" bullets={['Use Select for multi-value selection — use a multi-select instead', 'Use for triggering actions — prefer Action Menu or Dropdown Button', 'Rely on color alone to convey the error state', 'Leave the placeholder empty — always hint at expected interaction']} />
              </div>
            </section>
          </div>
        )}

        {activeTab === 'Usage' && (
          <div className="space-y-12">
            <section id="usage-when" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Single selection</strong> — the user must pick exactly one value from a predefined list.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">With label and validation</strong> — form fields that require a visible label, required indicator, and error messaging.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Grouped options</strong> — categorized lists with optional headers and dividers.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Filterable</strong> — long option lists where typing to narrow choices helps.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Clearable</strong> — optional fields where resetting to empty is valid.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Controlled</strong> — when value must be driven by external state.</li>
              </ul>
            </section>

            <section id="usage-when-not" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When not to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Searchable selection where the user needs to type to filter — use <strong className="text-o9ds-light-primary dark:text-white font-medium">Combobox</strong>.</li>
                <li>Multi-value selection with options visible simultaneously — use <strong className="text-o9ds-light-primary dark:text-white font-medium">Checkbox</strong> group.</li>
                <li>Small set of mutually exclusive options displayed inline — use <strong className="text-o9ds-light-primary dark:text-white font-medium">Radio Group</strong>.</li>
                <li>Triggering contextual actions — use <strong className="text-o9ds-light-primary dark:text-white font-medium">Action Menu</strong>.</li>
              </ul>
            </section>

            <section id="usage-scenarios" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Scenarios</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Form field</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Pair with a visible label and required indicator. Validate on form submit and show errorMsg below the trigger when an invalid or empty value is detected.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Async option loading</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Set loading to true while fetching options. The spinner replaces the chevron and blocks the user from opening the panel until data is ready.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Filterable panel</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Enable filterable for long lists. A search input appears at the top of the panel, automatically filtering options as the user types.
                  </p>
                </div>
              </div>
            </section>

            <section id="usage-best-practices" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Best practices</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Keep option labels concise; avoid wrapping text inside the panel.</li>
                <li>Set maxHeight when the list might overflow available viewport space.</li>
                <li>Use closeOnSelect={'{false}'} only when the user needs to review the panel after selecting (rare).</li>
                <li>Pair errorMsg with invalid to give actionable guidance, not just "Invalid".</li>
              </ul>
            </section>
          </div>
        )}

        {activeTab === 'Code/APIs' && (
          <div className="space-y-12">
            <section id="code-props" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Component API</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
                O9Select accepts standard <code className="px-1 py-0.5" data-o9ds-inline-code>HTMLDivElement</code> attributes via spread.
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

            <section id="code-option-data" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">SelectOptionData</h2>
              <DocTable
                columns={[
                  { key: 'field', label: 'Field', mono: true },
                  { key: 'type', label: 'Type', mono: true },
                  { key: 'required', label: 'Required' },
                  { key: 'desc', label: 'Description' },
                ]}
                rows={[
                  { field: 'id', type: 'string', required: 'Yes', desc: 'Unique identifier' },
                  { field: 'label', type: 'string', required: 'Yes', desc: 'Display text' },
                  { field: 'value', type: 'unknown', required: 'Yes', desc: 'Selection value for form submission' },
                  { field: 'icon', type: 'string', required: 'No', desc: 'Leading icon name (no o9con- prefix)' },
                  { field: 'disabled', type: 'boolean', required: 'No', desc: 'Disables the option; sets aria-disabled' },
                ]}
              />
            </section>

            <section id="code-scenarios" className="scroll-mt-24 space-y-10">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Implementation scenarios</h2>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Basic — React</h3>
                <CodeBlock
                  code={`import { O9Select } from '@o9ds/react';

const items = [
  { id: '1', label: 'Apple', value: 'apple' },
  { id: '2', label: 'Banana', value: 'banana' },
  { id: '3', label: 'Cherry', value: 'cherry' },
];

<O9Select
  items={items}
  placeholder="Select a fruit..."
  onChange={(item) => console.log('selected', item.label)}
/>`}
                  label="React"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Filterable — React</h3>
                <CodeBlock
                  code={`<O9Select items={items} filterable placeholder="Search and select..." />`}
                  label="Filterable"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Basic — HTML</h3>
                <CodeBlock
                  code={`<div class="o9ds-sel o9ds-sel--lg">
  <label class="o9ds-sel__lbl" for="sel-1">
    Favourite Fruit
    <span class="o9ds-sel__lbl__req" aria-hidden="true">*</span>
  </label>
  <div class="o9ds-sel__field">
    <div class="o9ds-sel__input" id="sel-1" role="combobox"
         tabindex="0" aria-haspopup="listbox"
         aria-expanded="false" aria-required="true">
      <span class="o9ds-sel__placeholder">Select...</span>
    </div>
    <span class="o9ds-sel__ico o9con o9con-angle-down" aria-hidden="true"></span>
    <div class="o9ds-sel__border"></div>
  </div>
</div>`}
                  label="HTML"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Async loading — React</h3>
                <CodeBlock
                  code={`const [items, setItems] = React.useState([]);
const [loading, setLoading] = React.useState(false);

const handleOpen = async () => {
  setLoading(true);
  const result = await fetchOptions();
  setItems(result);
  setLoading(false);
};

<O9Select items={items} loading={loading} onOpen={handleOpen} placeholder="Loading..." />`}
                  label="Async loading"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Invalid with error</h3>
                <CodeBlock
                  code={`<O9Select
  items={items}
  invalid
  errorMsg="Please select a valid option."
  placeholder="Invalid"
/>`}
                  label="Error state"
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
                  { method: 'initialize(el, opts)', returns: 'O9Select', desc: 'Factory — initializes on a container element' },
                  { method: 'open()', returns: 'void', desc: 'Open the panel' },
                  { method: 'close()', returns: 'void', desc: 'Close the panel' },
                  { method: 'toggle(force?)', returns: 'void', desc: 'Toggle panel; pass true/false to force' },
                  { method: 'value(val?)', returns: 'unknown | void', desc: 'Get or set the selected value' },
                  { method: 'clear()', returns: 'void', desc: 'Clear the current selection' },
                  { method: 'updateItems(items)', returns: 'void', desc: 'Replace option list; re-renders if open' },
                  { method: 'disabled(state?)', returns: 'boolean | void', desc: 'Get or set disabled state' },
                  { method: 'setError(msg)', returns: 'void', desc: 'Set or clear validation error' },
                  { method: 'setLoading(bool)', returns: 'void', desc: 'Toggle loading spinner in trigger' },
                  { method: 'focus()', returns: 'void', desc: 'Focus the trigger' },
                  { method: 'destroy()', returns: 'void', desc: 'Clean up listeners and DOM' },
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
                  { event: 'sel:change', payload: '{ item, index }', desc: 'Selected value changed (cancelable)' },
                  { event: 'sel:open', payload: '—', desc: 'Panel opened (cancelable)' },
                  { event: 'sel:close', payload: '—', desc: 'Panel closed (cancelable)' },
                  { event: 'sel:clear', payload: '{ previousValue }', desc: 'Selection cleared' },
                ]}
              />
            </section>

            <section id="code-css" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">CSS variables</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                Override on <code className="px-1 py-0.5" data-o9ds-inline-code>.o9ds-sel</code> or a parent to theme the component.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { cat: 'Layout', vars: ['--o9ds-sel-height-sm', '--o9ds-sel-height-lg', '--o9ds-sel-padding-inline', '--o9ds-sel-gap', '--o9ds-sel-panel-min-width', '--o9ds-sel-panel-max-height', '--o9ds-sel-search-height'] },
                  { cat: 'Typography', vars: ['--o9ds-sel-font-size-sm', '--o9ds-sel-font-size-lg'] },
                  { cat: 'Icon', vars: ['--o9ds-sel-chevron-size', '--o9ds-sel-clear-btn-size', '--o9ds-sel-chevron-color'] },
                  { cat: 'Color', vars: ['--o9ds-sel-bg', '--o9ds-sel-text-color', '--o9ds-sel-placeholder-color', '--o9ds-sel-hover-bg', '--o9ds-sel-panel-bg'] },
                  { cat: 'Border', vars: ['--o9ds-sel-panel-border-radius'] },
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
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Trigger Height</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Font Size</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Chevron</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { size: 'sm', height: '24px', font: '12px', chevron: '16px' },
                      { size: 'lg (default)', height: '32px', font: '14px', chevron: '16px' },
                    ].map((row) => (
                      <tr key={row.size} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{row.size}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.height}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.font}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.chevron}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'Accessibility' && (
          <section id="select-accessibility" className="space-y-12">
            <div id="a11y-intro" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Select accessibility</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The Select uses <code className="px-1 py-0.5" data-o9ds-inline-code>role="combobox"</code> on the trigger per the ARIA 1.2 select-only combobox pattern. The panel is a <code className="px-1 py-0.5" data-o9ds-inline-code>role="listbox"</code> with individual <code className="px-1 py-0.5" data-o9ds-inline-code>role="option"</code> items.
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
                When <code className="px-1 py-0.5" data-o9ds-inline-code>filterable</code> is enabled, ArrowDown, ArrowUp, Home, End, Enter, Tab, and Escape from the search input are forwarded to panel navigation.
              </p>
            </div>

            <div id="a11y-focus" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Focus behavior</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>Trigger (<code className="px-1 py-0.5" data-o9ds-inline-code>.o9ds-sel__input</code>) is focusable via <code className="px-1 py-0.5" data-o9ds-inline-code>tabindex="0"</code>.</li>
                <li>Disabled triggers receive <code className="px-1 py-0.5" data-o9ds-inline-code>tabindex="-1"</code> and cannot receive keyboard focus.</li>
                <li>When <code className="px-1 py-0.5" data-o9ds-inline-code>filterable</code>, the search input receives focus when the panel opens.</li>
                <li>Keyboard navigation uses <code className="px-1 py-0.5" data-o9ds-inline-code>aria-activedescendant</code>; option elements do not receive focus.</li>
                <li>Focus returns to the trigger when the panel closes.</li>
                <li>Disabled options are skipped by arrow-key navigation but remain in the DOM.</li>
              </ul>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <strong className="text-o9ds-light-primary dark:text-white font-normal">WCAG:</strong> 2.4.7 Focus Visible · 2.4.13 Focus Appearance (WCAG 2.2)
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
                When <strong className="text-o9ds-light-primary dark:text-white font-medium">disabled</strong>, the trigger receives <code className="px-1 py-0.5" data-o9ds-inline-code>aria-disabled="true"</code> and <code className="px-1 py-0.5" data-o9ds-inline-code>tabindex="-1"</code>, removing it from the tab order.
              </p>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                When <strong className="text-o9ds-light-primary dark:text-white font-medium">loading</strong>, <code className="px-1 py-0.5" data-o9ds-inline-code>aria-busy="true"</code> is set. The panel cannot open and interaction is blocked.
              </p>
            </div>

            <div id="a11y-notes" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Accessibility notes</h3>
              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
                <WhiteBgCard title="Screen reader pattern">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Screen readers announce: "[value], combobox, has popup listbox". Type-ahead input allows jumping to options by label prefix.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Focus indicators">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    The animated bottom border thickens to 3 px on focus-visible. Ensure custom overrides maintain at least 3:1 contrast.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Error messaging">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    When invalid, <code className="px-1 py-0.5" data-o9ds-inline-code>aria-describedby</code> links the trigger to the error message so screen readers announce it.
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
