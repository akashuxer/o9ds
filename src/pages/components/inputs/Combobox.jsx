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
  { prop: 'items', type: "ComboboxOptionData[] | ListGroup<ComboboxOptionData>[]", default: '—', required: 'Yes', desc: 'Option items as a flat array or array of groups' },
  { prop: 'value', type: 'unknown', default: '—', required: 'No', desc: 'Controlled selected value' },
  { prop: 'defaultValue', type: 'unknown', default: '—', required: 'No', desc: 'Initial selected value (uncontrolled)' },
  { prop: 'inputValue', type: 'string', default: '—', required: 'No', desc: 'Controlled text input value' },
  { prop: 'placeholder', type: 'string', default: "'Placeholder'", required: 'No', desc: 'Placeholder text for the input' },
  { prop: 'label', type: 'string', default: '—', required: 'No', desc: 'Label rendered above the input' },
  { prop: 'disabled', type: 'boolean', default: 'false', required: 'No', desc: 'Prevents all interaction; input is natively disabled' },
  { prop: 'required', type: 'boolean', default: 'false', required: 'No', desc: 'Mark the field as required; adds indicator to label' },
  { prop: 'invalid', type: 'boolean', default: 'false', required: 'No', desc: 'Apply error styling and surface errorMsg' },
  { prop: 'errorMsg', type: 'string', default: '—', required: 'No', desc: 'Validation error message shown when invalid is true' },
  { prop: 'size', type: "'sm' | 'lg'", default: "'lg'", required: 'No', desc: "Input height. sm: 24px, lg: 32px" },
  { prop: 'clearable', type: 'boolean', default: 'true', required: 'No', desc: 'Show clear button when input has a value' },
  { prop: 'loading', type: 'boolean', default: 'false', required: 'No', desc: 'Show spinner and block interaction (Pattern C)' },
  { prop: 'readonly', type: 'boolean', default: 'false', required: 'No', desc: 'Prevent opening while showing the current value' },
  { prop: 'fullWidth', type: 'boolean', default: 'false', required: 'No', desc: 'Stretch input to fill its container' },
  { prop: 'placement', type: "'top-start' | 'bottom-start' | 'auto'", default: "'bottom-start'", required: 'No', desc: 'Preferred panel placement relative to the input' },
  { prop: 'maxHeight', type: 'string', default: '—', required: 'No', desc: 'CSS max-height for the scrollable panel' },
  { prop: 'showGroupDividers', type: 'boolean', default: 'true', required: 'No', desc: 'Render dividers between item groups' },
  { prop: 'filterFn', type: '(item, query) => boolean', default: '—', required: 'No', desc: 'Custom filter function replacing default substring match' },
  { prop: 'open', type: 'boolean', default: '—', required: 'No', desc: 'Controlled open state' },
  { prop: 'defaultOpen', type: 'boolean', default: 'false', required: 'No', desc: 'Initial open state (uncontrolled)' },
  { prop: 'onChange', type: '(item, index) => boolean | void', default: '—', required: 'No', desc: 'Called on option selection; return false to prevent close' },
  { prop: 'onInputChange', type: '(value: string) => void', default: '—', required: 'No', desc: 'Called on each keystroke' },
  { prop: 'onOpen', type: '() => boolean | void', default: '—', required: 'No', desc: 'Called before panel opens; return false to cancel' },
  { prop: 'onClose', type: '() => boolean | void', default: '—', required: 'No', desc: 'Called before panel closes; return false to cancel' },
  { prop: 'onClear', type: '({ previousValue }) => void', default: '—', required: 'No', desc: 'Called when the value is cleared' },
  { prop: 'onOpenChange', type: '(open: boolean) => void', default: '—', required: 'No', desc: 'Called when open state changes (React only)' },
]

const KEYBOARD = [
  { key: 'ArrowDown', behavior: 'Open panel (when closed) or move highlight to next non-disabled option' },
  { key: 'ArrowUp', behavior: 'Open panel (when closed) or move highlight to previous non-disabled option' },
  { key: 'Enter', behavior: 'Select the highlighted option and close the panel' },
  { key: 'Escape', behavior: 'Close panel; if already closed, clear input text' },
  { key: 'Tab', behavior: 'Select highlighted option (if any), close panel, move focus to next element' },
  { key: 'Home / End', behavior: 'Move cursor within input text (default native behaviour)' },
  { key: 'Typing', behavior: 'Filter options in real-time; open panel if not already open' },
]

const ARIA_ATTRS = [
  { attr: 'role="combobox"', when: 'Implicit on the native <input> element' },
  { attr: 'aria-haspopup="listbox"', when: 'Always; indicates the input opens a listbox' },
  { attr: 'aria-expanded', when: '"true" when panel is open, "false" when closed' },
  { attr: 'aria-controls', when: 'References the panel element by id' },
  { attr: 'aria-activedescendant', when: 'References the currently highlighted option' },
  { attr: 'aria-autocomplete="list"', when: 'Always; suggestions come from a predefined list' },
  { attr: 'aria-required', when: 'Set when required prop is true' },
  { attr: 'aria-invalid', when: 'Set when invalid prop is true' },
  { attr: 'aria-disabled', when: 'Set when disabled prop is true' },
  { attr: 'aria-busy', when: 'Set to "true" during loading state' },
  { attr: 'aria-labelledby', when: 'References the label element' },
  { attr: 'aria-describedby', when: 'References error message element when invalid' },
]

export default function Combobox() {
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
        { id: 'code-option-data', label: 'ComboboxOptionData' },
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
            Combobox
          </h1>
          <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed mb-2">
            {getComponentPageDescription('combobox')}
          </p>
          <p className="text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed">
            Searchable select with a native text input and a filterable dropdown option panel. Typing filters options in real-time. Supports grouped items, clearable value, validation states, and custom filter functions.
          </p>
          <DocTabs tabs={tabs} activeTab={activeTab} onSelect={setActiveTab} />
        </section>

        {activeTab === 'Overview' && (
          <div className="space-y-12">
            <section id="overview-purpose" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Purpose</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The Combobox lets users pick one value from a list while typing to narrow choices in real-time. It combines the precision of a dropdown with the speed of a search field, making it ideal when the option list is long or when users already know what they are looking for.
              </p>
            </section>

            <section id="overview-definition" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Definition & role</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                A <strong className="text-o9ds-light-primary dark:text-white font-medium">combobox</strong> is a composite widget that pairs a text input with a listbox panel. As the user types, the option list filters to show matching items. It follows the ARIA 1.2 combobox pattern with <code className="px-1 py-0.5" data-o9ds-inline-code>aria-autocomplete="list"</code>.
              </p>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Items extend <strong className="text-o9ds-light-primary dark:text-white font-medium">ListItemBase</strong> from <code className="px-1 py-0.5" data-o9ds-inline-code>@o9ds/core/list</code> with a <code className="px-1 py-0.5" data-o9ds-inline-code>value</code> field, enabling consistent integration with other list-based controls (Select, Action Menu).
              </p>
            </section>

            <section id="overview-anatomy" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Anatomy</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The combobox is composed of an <strong className="text-o9ds-light-primary dark:text-white font-medium">input field</strong> container and an <strong className="text-o9ds-light-primary dark:text-white font-medium">option panel</strong>.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Label</strong> — optional text above the input with a required indicator when needed.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Input field</strong> — native text input for typing and filtering. Contains chevron icon and optional clear button.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Animated border</strong> — bottom border that expands on hover and thickens on focus.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Clear button</strong> — resets the input text and selected value when visible.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Chevron</strong> — dropdown indicator that rotates 180° when the panel is open.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Panel</strong> — overlay listbox holding scrollable options, group headers, and dividers.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Option</strong> — individual selectable item with a checkmark for the active selection.</li>
              </ul>
            </section>

            <section id="overview-variants" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Variants & sizes</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The Combobox ships in two sizes. Choose based on the density of the surrounding layout.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">sm (24 px)</strong> — compact density for data-heavy views, toolbars, and inline editing.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">lg (32 px, default)</strong> — standard density for forms and dialogs.</li>
              </ul>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Layout modifiers include <strong className="text-o9ds-light-primary dark:text-white font-medium">full-width</strong> (stretches to container) and <strong className="text-o9ds-light-primary dark:text-white font-medium">clearable</strong> (shows a clear button when a value exists).
              </p>
            </section>

            <section id="overview-states" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">States</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Default</strong> — base input with layer-04 background.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Hover</strong> — background shifts to theme-hover-4 on desktop.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Focus</strong> — bottom border grows to 3 px in focus color.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Open</strong> — panel visible, chevron rotated 180°.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Filled</strong> — has-value class; value text displayed.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Invalid</strong> — bottom border uses negative color; error message shown.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Disabled</strong> — reduced opacity, native disabled on input.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Readonly</strong> — value visible, dashed bottom border, panel cannot open.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Loading</strong> — spinner visible, typing disabled, panel blocked.</li>
              </ul>
            </section>

            <section id="overview-naming" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Naming guidance</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Use a clear, descriptive label that reflects the category of options (e.g. "Country", "Product", "Assignee"). Placeholder text should hint at the interaction: "Search…" or "Type to filter…" rather than repeating the label.
              </p>
            </section>

            <section id="overview-dos-donts" className="scroll-mt-24">
              <div className="grid gap-4 sm:grid-cols-2">
                <GrayBgCard title="Do" bullets={['Use when the option list is long enough to benefit from type-to-filter', 'Provide a visible label for accessibility and form context', 'Use grouped items when options have natural categories', 'Use clearable for optional fields where resetting is a valid action']} />
                <WhiteBgCard title="Don't" bullets={['Use Combobox for short fixed lists — prefer Select instead', 'Allow free-text entry if the value must be from the list', 'Hide the chevron icon — it signals dropdown behavior', 'Leave the placeholder as "Placeholder" in production']} />
              </div>
            </section>
          </div>
        )}

        {activeTab === 'Usage' && (
          <div className="space-y-12">
            <section id="usage-when" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Searchable selection</strong> — when the user must pick one value but benefits from typing to narrow choices.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Large option lists</strong> — too many options to scan visually without filtering.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">With label and validation</strong> — form fields requiring a visible label, required indicator, and error messaging.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Grouped options</strong> — categorized lists with optional headers and dividers.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Clearable</strong> — optional fields where resetting to empty is valid.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Custom filtering</strong> — when default case-insensitive substring match needs replacing (starts-with, fuzzy, server-side).</li>
              </ul>
            </section>

            <section id="usage-when-not" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When not to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Choosing from a fixed, short list — use a <strong className="text-o9ds-light-primary dark:text-white font-medium">Select</strong> instead.</li>
                <li>Multi-value selection — use a multi-select or checkbox group.</li>
                <li>Triggering actions — use an <strong className="text-o9ds-light-primary dark:text-white font-medium">Action Menu</strong> or <strong className="text-o9ds-light-primary dark:text-white font-medium">Dropdown Button</strong>.</li>
                <li>Free-text with no predefined options — use a plain <strong className="text-o9ds-light-primary dark:text-white font-medium">Textbox</strong>.</li>
              </ul>
            </section>

            <section id="usage-scenarios" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Scenarios</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Form field with label</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Pair with a visible label and required indicator. Use errorMsg to surface validation errors below the input when the form is submitted with an invalid value.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Async option loading</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Set loading to true while fetching options from a server, then call updateItems (JS) or update the items prop (React) when data arrives. The spinner replaces the chevron and blocks interaction.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Grouped categories</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Pass grouped items when options have natural categories (e.g. Fruits / Vegetables). Enable showGroupDividers for clear visual separation.
                  </p>
                </div>
              </div>
            </section>

            <section id="usage-best-practices" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Best practices</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Always provide a placeholder that hints at the expected behavior ("Search…", "Type to filter…").</li>
                <li>Use the default filter function unless a specific use case demands custom filtering.</li>
                <li>Set maxHeight when the option list might exceed available viewport space.</li>
                <li>Provide an errorMsg alongside invalid to explain what went wrong.</li>
                <li>Use controlled value when integration with a form library requires it; prefer uncontrolled mode otherwise.</li>
              </ul>
            </section>
          </div>
        )}

        {activeTab === 'Code/APIs' && (
          <div className="space-y-12">
            <section id="code-props" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Component API</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
                O9Combobox accepts standard <code className="px-1 py-0.5" data-o9ds-inline-code>HTMLDivElement</code> attributes via spread.
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
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">ComboboxOptionData</h2>
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
                  code={`import { O9Combobox } from '@o9ds/react';

const items = [
  { id: '1', label: 'Apple', value: 'apple' },
  { id: '2', label: 'Banana', value: 'banana' },
  { id: '3', label: 'Cherry', value: 'cherry' },
];

<O9Combobox
  items={items}
  placeholder="Search fruits..."
  onChange={(item) => console.log('selected', item.label)}
/>`}
                  label="React"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">With label & required — React</h3>
                <CodeBlock
                  code={`<O9Combobox
  items={items}
  label="Favourite Fruit"
  placeholder="Type to search..."
  required
  onChange={(item) => console.log(item.value)}
/>`}
                  label="React label + required"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Clearable & controlled — React</h3>
                <CodeBlock
                  code={`const [value, setValue] = useState(null);

<O9Combobox
  items={items}
  value={value}
  onChange={(item) => setValue(item.value)}
  onClear={() => setValue(null)}
  clearable
  placeholder="Search fruits..."
/>`}
                  label="Controlled + clearable"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Basic — HTML</h3>
                <CodeBlock
                  code={`<div class="o9ds-combobox o9ds-combobox--lg">
  <label class="o9ds-combobox__lbl" for="cb-1">
    Favourite Fruit
    <span class="o9ds-combobox__lbl__req" aria-hidden="true">*</span>
  </label>
  <div class="o9ds-combobox__field">
    <input
      class="o9ds-combobox__input" id="cb-1" type="text"
      role="combobox" aria-haspopup="listbox"
      aria-expanded="false" aria-autocomplete="list"
      aria-required="true" placeholder="Type to search..."
    />
    <span class="o9ds-combobox__ico o9con o9con-angle-down" aria-hidden="true"></span>
    <div class="o9ds-combobox__border"></div>
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

const fetchOptions = async () => {
  setLoading(true);
  const result = await fetch('/api/options').then(r => r.json());
  setItems(result);
  setLoading(false);
};

<O9Combobox items={items} loading={loading} placeholder="Loading options..." />`}
                  label="Async loading"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Invalid with error</h3>
                <CodeBlock
                  code={`<O9Combobox
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
                  { method: 'initialize(el, opts)', returns: 'O9Combobox', desc: 'Factory — initializes on a container element' },
                  { method: 'open()', returns: 'void', desc: 'Open the panel' },
                  { method: 'close()', returns: 'void', desc: 'Close the panel' },
                  { method: 'toggle(force?)', returns: 'void', desc: 'Toggle panel; pass true/false to force' },
                  { method: 'value(val?)', returns: 'unknown | void', desc: 'Get or set the selected value' },
                  { method: 'inputValue(text?)', returns: 'string | void', desc: 'Get or set current input text' },
                  { method: 'clear()', returns: 'void', desc: 'Clear input and selection' },
                  { method: 'updateItems(items)', returns: 'void', desc: 'Replace option list; re-filters if open' },
                  { method: 'disabled(state?)', returns: 'boolean | void', desc: 'Get or set disabled state' },
                  { method: 'setError(msg)', returns: 'void', desc: 'Set or clear validation error' },
                  { method: 'setLoading(bool)', returns: 'void', desc: 'Toggle loading spinner' },
                  { method: 'focus()', returns: 'void', desc: 'Focus the input' },
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
                  { event: 'combobox:change', payload: '{ item, index }', desc: 'Option selected (cancelable)' },
                  { event: 'combobox:input', payload: '{ value }', desc: 'Input text changed by typing' },
                  { event: 'combobox:open', payload: '—', desc: 'Panel opened (cancelable)' },
                  { event: 'combobox:close', payload: '—', desc: 'Panel closed (cancelable)' },
                  { event: 'combobox:clear', payload: '{ previousValue }', desc: 'Value cleared' },
                ]}
              />
            </section>

            <section id="code-css" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">CSS variables</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                Override on <code className="px-1 py-0.5" data-o9ds-inline-code>.o9ds-combobox</code> or a parent to theme the component.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { cat: 'Layout', vars: ['--o9ds-combobox-height-sm', '--o9ds-combobox-height-lg', '--o9ds-combobox-padding-inline-start', '--o9ds-combobox-padding-inline-end', '--o9ds-combobox-gap', '--o9ds-combobox-panel-min-width', '--o9ds-combobox-panel-max-height'] },
                  { cat: 'Typography', vars: ['--o9ds-combobox-font-size-sm', '--o9ds-combobox-font-size-lg'] },
                  { cat: 'Icon', vars: ['--o9ds-combobox-chevron-size', '--o9ds-combobox-clear-btn-size', '--o9ds-combobox-chevron-color'] },
                  { cat: 'Color', vars: ['--o9ds-combobox-bg', '--o9ds-combobox-text-color', '--o9ds-combobox-placeholder-color', '--o9ds-combobox-hover-bg', '--o9ds-combobox-panel-bg'] },
                  { cat: 'Border', vars: ['--o9ds-combobox-panel-border-radius'] },
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
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Input Height</th>
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
          <section id="combobox-accessibility" className="space-y-12">
            <div id="a11y-intro" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Combobox accessibility</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The Combobox follows the ARIA 1.2 combobox pattern. The native <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;input&gt;</code> receives <code className="px-1 py-0.5" data-o9ds-inline-code>role="combobox"</code> implicitly and is always the keyboard target. The panel uses <code className="px-1 py-0.5" data-o9ds-inline-code>role="listbox"</code> with individual <code className="px-1 py-0.5" data-o9ds-inline-code>role="option"</code> items.
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
                <li>Focus is always on the native text input.</li>
                <li>When the panel opens, focus stays on the input; <code className="px-1 py-0.5" data-o9ds-inline-code>aria-activedescendant</code> points to the highlighted option.</li>
                <li>When the panel closes, focus remains on the input.</li>
                <li>On option selection, panel closes, input text updates to the selected label, focus stays on input.</li>
                <li>Disabled options are skipped by arrow-key navigation but remain in the DOM with <code className="px-1 py-0.5" data-o9ds-inline-code>aria-disabled="true"</code>.</li>
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
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 mt-2">
                Panel options also use <code className="px-1 py-0.5" data-o9ds-inline-code>role="option"</code> with <code className="px-1 py-0.5" data-o9ds-inline-code>aria-selected</code> on the active item. Groups use <code className="px-1 py-0.5" data-o9ds-inline-code>role="group"</code> with <code className="px-1 py-0.5" data-o9ds-inline-code>aria-label</code>, and dividers use <code className="px-1 py-0.5" data-o9ds-inline-code>role="separator"</code>.
              </p>
            </div>

            <div id="a11y-disabled" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Disabled & loading states</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                When <strong className="text-o9ds-light-primary dark:text-white font-medium">disabled</strong>, the native input receives the <code className="px-1 py-0.5" data-o9ds-inline-code>disabled</code> attribute, removing it from the tab order. Screen readers announce it as dimmed or unavailable.
              </p>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                When <strong className="text-o9ds-light-primary dark:text-white font-medium">loading</strong>, <code className="px-1 py-0.5" data-o9ds-inline-code>aria-busy="true"</code> is set on the input. Typing is disabled and the panel cannot open.
              </p>
              <CodeBlock code={`<input type="text" role="combobox" disabled aria-disabled="true" />`} label="Disabled" />
              <CodeBlock code={`<input type="text" role="combobox" aria-busy="true" disabled />`} label="Loading" />
            </div>

            <div id="a11y-notes" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Accessibility notes</h3>
              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
                <WhiteBgCard title="Screen reader pattern">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Screen readers announce: "[value], combobox, autocomplete list". Use <code className="px-1 py-0.5" data-o9ds-inline-code>aria-labelledby</code> or a visible label so the field name is announced before the role.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Focus indicators">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    The animated bottom border thickens to 3 px on focus-visible. Do not override <code className="px-1 py-0.5" data-o9ds-inline-code>outline: none</code> without an equally visible replacement.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Error messaging">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    When invalid, <code className="px-1 py-0.5" data-o9ds-inline-code>aria-describedby</code> links the input to the error message and <code className="px-1 py-0.5" data-o9ds-inline-code>aria-invalid="true"</code> is set, so screen readers announce the error.
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
