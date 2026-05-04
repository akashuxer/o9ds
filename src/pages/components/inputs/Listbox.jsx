import { useState, useMemo } from 'react'
import { ArvoListbox } from '@arvo/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocSection, { DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import { PropsTable, KeyboardTable, AriaTable, MethodsTable, EventsTable, LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'
import { getDescriptor } from '../../../data/componentDescriptors.generated'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const DESCRIPTOR = getDescriptor('listbox')
const PROPS = DESCRIPTOR.props


export default function Listbox() {
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
    { value: 'durian', label: 'Durian' },
  ]

  return (
    <PageWithToc sections={sections}>
      <div className="space-y-8">
        <PageHeader
          title="Listbox"
          description="Standalone selectable list — single or multi-select. Renders inline (always visible). Use Combobox or Hybrid Popover when the list should appear inside an overlay."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>}
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>Use Listbox for an always-visible selectable list. Implements the WAI-ARIA Listbox pattern with arrow-key navigation, Home/End, type-to-jump, and (in multi mode) Shift/Ctrl-extend.</DocParagraph>
            </DocSection>
            <DocSection id="demo" title="Live demo">
              <LiveReference>
                <div style={{ minWidth: 220 }}><ArvoListbox label="Single select" items={options} defaultValue="banana" /></div>
                <div style={{ minWidth: 220 }}><ArvoListbox label="Multi-select" items={options} isMultiple defaultValue={['apple', 'cherry']} /></div>
              </LiveReference>
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'Always-visible selectable lists (sidebars, settings panels).',
                'Inline pickers where the list is the primary content.',
                'Multi-select pickers without a search filter.',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">If the list should appear inside an overlay — use <DocStrong>Select</DocStrong>, <DocStrong>Combobox</DocStrong>, or <DocStrong>Hybrid Popover</DocStrong>.</span>,
                <span key="2">For action menus — use <DocStrong>Action Menu</DocStrong>.</span>,
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@arvo/react" code={`import { ArvoListbox } from '@arvo/react';

<ArvoListbox label="Items" options={options} defaultValue="banana" />

// Multi-select
<ArvoListbox label="Items" options={options} multiple defaultValue={['apple', 'cherry']} />

// Controlled
const [v, setV] = useState(null);
<ArvoListbox label="Items" options={options} value={v} onChange={(value) => setV(value)} />`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@arvo/js" code={`import { ArvoListbox } from '@arvo/js';

const lb = ArvoListbox.initialize(el, {
  label: 'Items',
  options,
  multiple: true,
  onChange: (value, option) => console.log(value),
});

lb.value(['apple']);
lb.value();              // => ['apple']
lb.setOptions(newOptions);
lb.disabled(true);
lb.destroy();`} />
            </DocSection>
            <DocSection id="props" title="Props"><PropsTable rows={PROPS} /></DocSection>
            <DocSection id="methods" title="Methods (JS)">
              <MethodsTable rows={[
                { method: 'ArvoListbox.initialize(el, options)', returns: 'ArvoListbox', desc: 'Factory.' },
                { method: 'value(v?)', returns: 'string | string[] | null | void', desc: 'Get/set selected value(s).' },
                { method: 'setOptions(options)', desc: 'Replace the options.' },
                { method: 'disabled(state?)', returns: 'boolean | void', desc: 'Get/set disabled state.' },
                { method: 'setLoading(b)', desc: 'Toggle loading state.' },
                { method: 'destroy()', desc: 'Tear down.' },
              ]} />
            </DocSection>
            <DocSection id="events" title="Custom events (JS)">
              <EventsTable rows={[{ event: 'lst:change', payload: '{ value, option }', desc: 'Fires on selection change.' }]} />
            </DocSection>
          </div>
        )}

        {tab === 'Accessibility' && (
          <div className="space-y-12">
            <DocSection id="keyboard" title="Keyboard">
              <KeyboardTable rows={[
                { key: 'ArrowUp / ArrowDown', action: 'Move active option.' },
                { key: 'Home / End', action: 'Jump to first / last option.' },
                { key: 'Enter / Space', action: 'Select active option.' },
                { key: 'Shift+ArrowUp/Down', action: 'Extend selection (multi-select mode).' },
                { key: 'Ctrl/Cmd+A', action: 'Select all (multi-select mode).' },
                { key: 'Type-to-search', action: 'Jump to next option whose label starts with the typed character.' },
              ]} />
            </DocSection>
            <DocSection id="aria" title="ARIA">
              <AriaTable rows={[
                { attr: 'role="listbox"', when: 'On the container.' },
                { attr: 'aria-multiselectable', when: 'Set to "true" when multiple is enabled.' },
                { attr: 'aria-label / aria-labelledby', when: 'Provides the listbox name.' },
                { attr: 'role="option"', when: 'On each option.' },
                { attr: 'aria-selected', when: 'On each selected option.' },
                { attr: 'aria-disabled', when: 'On disabled options.' },
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
