import { useState, useMemo } from 'react'
import { O9Search } from '@o9ds/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocSection, { DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import { PropsTable, KeyboardTable, AriaTable, MethodsTable, LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const PROPS = [
  { prop: 'label', type: 'string', desc: 'Field label rendered above (or visually hidden via aria-label).' },
  { prop: 'value', type: 'string', desc: 'Controlled value.' },
  { prop: 'defaultValue', type: 'string', desc: 'Uncontrolled initial value.' },
  { prop: 'placeholder', type: "'string'", default: "'Search...'", desc: 'Placeholder text.' },
  { prop: 'shortcut', type: 'string', desc: 'Optional keyboard shortcut hint shown inside the input (e.g. Ctrl+K).' },
  { prop: 'clearable', type: 'boolean', default: 'true', desc: 'Show a clear (×) button when value is non-empty.' },
  { prop: 'isDisabled', type: 'boolean', default: 'false', desc: 'Disable interaction.' },
  { prop: 'isReadonly', type: 'boolean', default: 'false', desc: 'Disable editing.' },
  { prop: 'isFullWidth', type: 'boolean', default: 'false', desc: 'Expand to fill container width.' },
  { prop: 'onChange', type: '(value, event) => void', desc: 'Change callback.' },
  { prop: 'onSubmit', type: '(value) => void', desc: 'Submit callback (Enter).' },
]

export default function Search() {
  const [tab, setTab] = useState('Overview')
  const sections = useMemo(() => {
    if (tab === 'Overview') return [{ id: 'purpose', label: 'Purpose' }, { id: 'demo', label: 'Live demo' }]
    if (tab === 'Usage') return [{ id: 'when', label: 'When to use' }, { id: 'when-not', label: 'When not to use' }]
    if (tab === 'Code/APIs') return [{ id: 'react', label: 'React' }, { id: 'js', label: 'Vanilla JS' }, { id: 'props', label: 'Props' }, { id: 'methods', label: 'Methods (JS)' }]
    if (tab === 'Accessibility') return [{ id: 'keyboard', label: 'Keyboard' }, { id: 'aria', label: 'ARIA' }]
    return []
  }, [tab])

  return (
    <PageWithToc sections={sections}>
      <div className="space-y-8">
        <PageHeader
          title="Search"
          description="Single-line search input with a leading magnifier icon, clearable affordance, and optional shortcut hint. Built on the same form-input pattern as Textbox."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>Use Search for filter inputs and search fields where the user types a query and the result updates immediately or on submit.</DocParagraph>
            </DocSection>
            <DocSection id="demo" title="Live demo">
              <LiveReference>
                <div style={{ minWidth: 280 }}><O9Search label="Search" /></div>
                <div style={{ minWidth: 280 }}><O9Search label="With shortcut" shortcut="Ctrl+K" /></div>
                <div style={{ minWidth: 280 }}><O9Search label="Disabled" isDisabled /></div>
              </LiveReference>
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'Type-to-filter inputs for tables, lists, and dropdowns.',
                'App-wide search affordances (often paired with a shortcut hint).',
                'Inline search within popovers or hybrid popovers.',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">When the user picks from a list of suggestions — use <DocStrong>Combobox</DocStrong>.</span>,
                <span key="2">For free-form text — use <DocStrong>Textbox</DocStrong>.</span>,
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@o9ds/react" code={`import { O9Search } from '@o9ds/react';

<O9Search label="Search items" onChange={(v) => filter(v)} />
<O9Search label="Search" shortcut="Ctrl+K" onSubmit={(v) => runSearch(v)} />
<O9Search label="Filter" defaultValue="" clearable />`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@o9ds/js" code={`import { O9Search } from '@o9ds/js';

const search = O9Search.initialize(el, {
  label: 'Search',
  shortcut: 'Ctrl+K',
  onChange: (value) => filter(value),
  onSubmit: (value) => runSearch(value),
});

search.value('hello');
search.value();
search.disabled(true);
search.destroy();`} />
            </DocSection>
            <DocSection id="props" title="Props"><PropsTable rows={PROPS} /></DocSection>
            <DocSection id="methods" title="Methods (JS)">
              <MethodsTable rows={[
                { method: 'O9Search.initialize(el, options)', returns: 'O9Search', desc: 'Factory.' },
                { method: 'value(v?)', returns: 'string | void', desc: 'Get/set the current value.' },
                { method: 'disabled(state?)', returns: 'boolean | void', desc: 'Get/set disabled state.' },
                { method: 'focus()', desc: 'Focus the input.' },
                { method: 'destroy()', desc: 'Tear down.' },
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Accessibility' && (
          <div className="space-y-12">
            <DocSection id="keyboard" title="Keyboard">
              <KeyboardTable rows={[
                { key: 'Enter', action: 'Submit (fires onSubmit).' },
                { key: 'Esc', action: 'Clears the value (when clearable).' },
                { key: 'Tab / Shift+Tab', action: 'Move focus.' },
              ]} />
            </DocSection>
            <DocSection id="aria" title="ARIA">
              <AriaTable rows={[
                { attr: 'role="searchbox"', when: 'Set automatically on the input.' },
                { attr: 'aria-label', when: 'Set when label is visually hidden.' },
                { attr: 'aria-describedby', when: 'Wires shortcut hint and any description.' },
                { attr: 'aria-disabled', when: 'Set when isDisabled.' },
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
