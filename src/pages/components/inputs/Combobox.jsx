import { useState, useMemo } from 'react'
import { ArvoCombobox } from '@arvo/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocSection, { DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import { PropsTable, KeyboardTable, AriaTable, MethodsTable, EventsTable, LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'
import { getDescriptor } from '../../../data/componentDescriptors.generated'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const DESCRIPTOR = getDescriptor('combobox')
const PROPS = DESCRIPTOR.props


export default function Combobox() {
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
          title="Combobox"
          description="Single-select picker with type-to-filter input. Shows a listbox dropdown of matching options. Supports creatable items and grouped options."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>Use Combobox when the user needs to type to filter a list. The trigger is an input; the dropdown is a listbox of matches.</DocParagraph>
            </DocSection>
            <DocSection id="demo" title="Live demo">
              <LiveReference>
                <div style={{ minWidth: 240 }}><ArvoCombobox label="Fruit" items={options} placeholder="Type to filter" /></div>
                <div style={{ minWidth: 240 }}><ArvoCombobox label="With default" items={options} defaultValue="banana" /></div>
                <div style={{ minWidth: 240 }}><ArvoCombobox label="Disabled" items={options} isDisabled /></div>
              </LiveReference>
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'Picking from a long list (25+) where typing is faster than scanning.',
                'Pickers backed by an API where the user types and the list updates.',
                'Forms that benefit from creatable options ("add new...").',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">Short fixed list — use <DocStrong>Select Dropdown</DocStrong>.</span>,
                <span key="2">Multi-select — use <DocStrong>Listbox</DocStrong> or <DocStrong>Hybrid Popover</DocStrong>.</span>,
                <span key="3">2–4 mutually exclusive options — use <DocStrong>Radio Group</DocStrong>.</span>,
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@arvo/react" code={`import { ArvoCombobox } from '@arvo/react';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
];

<ArvoCombobox label="Fruit" options={options} placeholder="Type to filter" />

// Controlled
const [v, setV] = useState(null);
<ArvoCombobox
  label="Fruit"
  options={options}
  value={v}
  onChange={(value) => setV(value)}
  onInputChange={(text) => fetchSuggestions(text)}
/>

// Creatable
<ArvoCombobox label="Tag" options={options} creatable />`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@arvo/js" code={`import { ArvoCombobox } from '@arvo/js';

const cb = ArvoCombobox.initialize(el, {
  label: 'Fruit',
  options,
  onChange: (value, option) => console.log(value),
  onInputChange: (text) => fetchSuggestions(text),
});

cb.value('banana');
cb.value();              // => 'banana'
cb.setOptions(newOptions);
cb.open();
cb.disabled(true);
cb.destroy();`} />
            </DocSection>
            <DocSection id="props" title="Props"><PropsTable rows={PROPS} /></DocSection>
            <DocSection id="methods" title="Methods (JS)">
              <MethodsTable rows={[
                { method: 'ArvoCombobox.initialize(el, options)', returns: 'ArvoCombobox', desc: 'Factory.' },
                { method: 'value(v?)', returns: 'string | null | void', desc: 'Get/set selected value.' },
                { method: 'open() / close() / toggle()', desc: 'Control the dropdown.' },
                { method: 'isOpen()', returns: 'boolean', desc: 'Whether the dropdown is open.' },
                { method: 'setOptions(options)', desc: 'Replace the options.' },
                { method: 'inputValue(text?)', returns: 'string | void', desc: 'Get/set the input filter text.' },
                { method: 'disabled(state?)', returns: 'boolean | void', desc: 'Get/set disabled state.' },
                { method: 'destroy()', desc: 'Tear down.' },
              ]} />
            </DocSection>
            <DocSection id="events" title="Custom events (JS)">
              <EventsTable rows={[
                { event: 'cb:change', payload: '{ value, option }', desc: 'Fires on selection change.' },
                { event: 'cb:input', payload: '{ text }', desc: 'Fires on filter input change.' },
                { event: 'cb:open / cb:close', payload: '—', desc: 'Dropdown open/close.' },
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Accessibility' && (
          <div className="space-y-12">
            <DocSection id="keyboard" title="Keyboard">
              <KeyboardTable rows={[
                { key: 'Type-to-filter', action: 'Updates the visible option list.' },
                { key: 'ArrowDown', action: 'Open the listbox / move to next option.' },
                { key: 'ArrowUp', action: 'Move to previous option.' },
                { key: 'Home / End', action: 'Jump to first / last option.' },
                { key: 'Enter', action: 'Select the focused option.' },
                { key: 'Escape', action: 'Close the listbox; clear the input on a second press.' },
              ]} />
            </DocSection>
            <DocSection id="aria" title="ARIA">
              <AriaTable rows={[
                { attr: 'role="combobox"', when: 'On the trigger input.' },
                { attr: 'role="listbox"', when: 'On the dropdown panel.' },
                { attr: 'role="option"', when: 'On each option.' },
                { attr: 'aria-expanded', when: 'On the input; reflects open state.' },
                { attr: 'aria-controls', when: 'Input points at the listbox.' },
                { attr: 'aria-activedescendant', when: 'On the input; points at the active option.' },
                { attr: 'aria-autocomplete="list"', when: 'On the input; declares filter behavior.' },
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
