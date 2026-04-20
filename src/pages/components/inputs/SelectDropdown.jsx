import { useState, useMemo } from 'react'
import { O9Select } from '@o9ds/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocSection, { DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import { PropsTable, KeyboardTable, AriaTable, MethodsTable, EventsTable, LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const PROPS = [
  { prop: 'label', type: 'string', desc: 'Field label rendered above the trigger.' },
  { prop: 'options', type: 'SelectOption[]', required: 'Yes', desc: 'Options: { value, label, disabled?, description? }.' },
  { prop: 'value', type: 'string | null', desc: 'Controlled selected value.' },
  { prop: 'defaultValue', type: 'string | null', desc: 'Uncontrolled initial value.' },
  { prop: 'placeholder', type: 'string', desc: 'Placeholder shown when no value is selected.' },
  { prop: 'description', type: 'string', desc: 'Help text below the trigger.' },
  { prop: 'error', type: 'string', desc: 'Error message; sets aria-invalid.' },
  { prop: 'isRequired', type: 'boolean', default: 'false', desc: 'Marks the field as required.' },
  { prop: 'isDisabled', type: 'boolean', default: 'false', desc: 'Disable interaction.' },
  { prop: 'isFullWidth', type: 'boolean', default: 'false', desc: 'Expand to fill container width.' },
  { prop: 'onChange', type: '(value: string | null, option) => void', desc: 'Change callback.' },
  { prop: 'onOpenChange', type: '(open: boolean) => void', desc: 'Fires when the dropdown opens/closes.' },
]

export default function SelectDropdown() {
  const [tab, setTab] = useState('Overview')
  const sections = useMemo(() => {
    if (tab === 'Overview') return [{ id: 'purpose', label: 'Purpose' }, { id: 'demo', label: 'Live demo' }]
    if (tab === 'Usage') return [{ id: 'when', label: 'When to use' }, { id: 'when-not', label: 'When not to use' }]
    if (tab === 'Code/APIs') return [{ id: 'react', label: 'React' }, { id: 'js', label: 'Vanilla JS' }, { id: 'props', label: 'Props' }, { id: 'methods', label: 'Methods (JS)' }, { id: 'events', label: 'Events (JS)' }]
    if (tab === 'Accessibility') return [{ id: 'keyboard', label: 'Keyboard' }, { id: 'aria', label: 'ARIA' }]
    return []
  }, [tab])

  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
  ]

  return (
    <PageWithToc sections={sections}>
      <div className="space-y-8">
        <PageHeader
          title="Select Dropdown"
          description="Single-select dropdown rendered as a combobox with a listbox popup. Use Combobox when the user should be able to filter the options by typing."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>}
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>Use Select for picking one option from a fixed list. The dropdown is keyboard navigable and follows the WAI-ARIA Combobox + Listbox pattern.</DocParagraph>
            </DocSection>
            <DocSection id="demo" title="Live demo">
              <LiveReference>
                <div style={{ minWidth: 240 }}><O9Select label="Fruit" options={options} placeholder="Pick one" /></div>
                <div style={{ minWidth: 240 }}><O9Select label="With default" options={options} defaultValue="banana" /></div>
                <div style={{ minWidth: 240 }}><O9Select label="Disabled" options={options} isDisabled /></div>
              </LiveReference>
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'Picking one option from a small-to-medium fixed list (typically 5–25).',
                'When the user benefits from a closed list (no typing needed).',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">When users need to type to filter — use <DocStrong>Combobox</DocStrong>.</span>,
                <span key="2">For multi-select — use <DocStrong>Listbox</DocStrong> or <DocStrong>Hybrid Popover</DocStrong>.</span>,
                <span key="3">For 2–4 mutually exclusive options — use <DocStrong>Radio Group</DocStrong>.</span>,
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@o9ds/react" code={`import { O9Select } from '@o9ds/react';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
];

<O9Select label="Fruit" options={options} placeholder="Pick one" />

// Controlled
const [v, setV] = useState(null);
<O9Select label="Fruit" options={options} value={v} onChange={(value) => setV(value)} />`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@o9ds/js" code={`import { O9Select } from '@o9ds/js';

const sel = O9Select.initialize(el, {
  label: 'Fruit',
  options,
  onChange: (value, option) => console.log(value),
});

sel.value('banana');
sel.value();              // => 'banana'
sel.open();
sel.close();
sel.disabled(true);
sel.destroy();`} />
            </DocSection>
            <DocSection id="props" title="Props"><PropsTable rows={PROPS} /></DocSection>
            <DocSection id="methods" title="Methods (JS)">
              <MethodsTable rows={[
                { method: 'O9Select.initialize(el, options)', returns: 'O9Select', desc: 'Factory.' },
                { method: 'value(v?)', returns: 'string | null | void', desc: 'Get/set selected value.' },
                { method: 'open() / close() / toggle()', desc: 'Control the dropdown.' },
                { method: 'isOpen()', returns: 'boolean', desc: 'Whether the dropdown is open.' },
                { method: 'setOptions(options)', desc: 'Replace the options.' },
                { method: 'disabled(state?)', returns: 'boolean | void', desc: 'Get/set disabled state.' },
                { method: 'destroy()', desc: 'Tear down.' },
              ]} />
            </DocSection>
            <DocSection id="events" title="Custom events (JS)">
              <EventsTable rows={[
                { event: 'sel:change', payload: '{ value, option }', desc: 'Fires on selection change.' },
                { event: 'sel:open', payload: '—', desc: 'Fires when the dropdown opens.' },
                { event: 'sel:close', payload: '—', desc: 'Fires when the dropdown closes.' },
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Accessibility' && (
          <div className="space-y-12">
            <DocSection id="keyboard" title="Keyboard">
              <KeyboardTable rows={[
                { key: 'Enter / Space / ArrowDown', action: 'Open the dropdown.' },
                { key: 'ArrowUp / ArrowDown', action: 'Move active option.' },
                { key: 'Home / End', action: 'Jump to first / last option.' },
                { key: 'Enter', action: 'Select the active option.' },
                { key: 'Escape', action: 'Close the dropdown without changing the value.' },
                { key: 'Type-to-search', action: 'Jumps focus to the next option whose label starts with the typed character.' },
              ]} />
            </DocSection>
            <DocSection id="aria" title="ARIA">
              <AriaTable rows={[
                { attr: 'role="combobox"', when: 'On the trigger.' },
                { attr: 'role="listbox"', when: 'On the dropdown panel.' },
                { attr: 'role="option"', when: 'On each option.' },
                { attr: 'aria-expanded', when: 'On the trigger; reflects open state.' },
                { attr: 'aria-controls', when: 'Trigger points at the listbox.' },
                { attr: 'aria-activedescendant', when: 'On the trigger; points at the focused option.' },
                { attr: 'aria-selected', when: 'On the active option.' },
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
