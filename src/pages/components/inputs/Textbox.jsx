import { useState, useMemo } from 'react'
import { O9Textbox } from '@o9ds/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocSection, { DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import { PropsTable, KeyboardTable, AriaTable, MethodsTable, EventsTable, LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const PROPS = [
  { prop: 'label', type: 'string', desc: 'Field label rendered above the input.' },
  { prop: 'value', type: 'string', desc: 'Controlled value.' },
  { prop: 'defaultValue', type: 'string', desc: 'Uncontrolled initial value.' },
  { prop: 'placeholder', type: 'string', desc: 'Placeholder text. Do not use as a label.' },
  { prop: 'description', type: 'string', desc: 'Help text rendered below the input. Wires aria-describedby.' },
  { prop: 'error', type: 'string', desc: 'Error message. Sets aria-invalid and aria-describedby.' },
  { prop: 'isRequired', type: 'boolean', default: 'false', desc: 'Marks the field as required.' },
  { prop: 'isReadonly', type: 'boolean', default: 'false', desc: 'Disables editing while keeping the value tabbable.' },
  { prop: 'isDisabled', type: 'boolean', default: 'false', desc: 'Disables interaction.' },
  { prop: 'isFullWidth', type: 'boolean', default: 'false', desc: 'Expand to fill container width.' },
  { prop: 'prefix', type: 'string | ReactNode', desc: 'Prefix content rendered inside the input.' },
  { prop: 'suffix', type: 'string | ReactNode', desc: 'Suffix content rendered inside the input.' },
  { prop: 'clearable', type: 'boolean', default: 'false', desc: 'Show a clear (×) button when the value is non-empty.' },
  { prop: 'maxLength', type: 'number', desc: 'Maximum character count (renders a counter).' },
  { prop: 'onChange', type: '(value, event) => void', desc: 'Change callback.' },
]

export default function Textbox() {
  const [tab, setTab] = useState('Overview')
  const sections = useMemo(() => {
    if (tab === 'Overview') return [{ id: 'purpose', label: 'Purpose' }, { id: 'demo', label: 'Live demo' }]
    if (tab === 'Usage') return [{ id: 'when', label: 'When to use' }, { id: 'when-not', label: 'When not to use' }]
    if (tab === 'Code/APIs') return [{ id: 'react', label: 'React' }, { id: 'js', label: 'Vanilla JS' }, { id: 'props', label: 'Props' }, { id: 'methods', label: 'Methods (JS)' }, { id: 'events', label: 'Events (JS)' }]
    if (tab === 'Accessibility') return [{ id: 'keyboard', label: 'Keyboard' }, { id: 'aria', label: 'ARIA' }]
    return []
  }, [tab])

  return (
    <PageWithToc sections={sections}>
      <div className="space-y-8">
        <PageHeader
          title="Textbox"
          description="Single-line text input with a label, optional description, prefix/suffix slots, clearable affordance, character counter, and full validation/error wiring."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>}
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>Use Textbox for any short, single-line text input. The component handles label association, error/required announcements, and the standard form-input visual treatment via the shared form-input pattern.</DocParagraph>
            </DocSection>
            <DocSection id="demo" title="Live demo">
              <LiveReference>
                <div style={{ minWidth: 240 }}><O9Textbox label="Email" placeholder="you@example.com" /></div>
                <div style={{ minWidth: 240 }}><O9Textbox label="With description" description="We'll never share this." /></div>
                <div style={{ minWidth: 240 }}><O9Textbox label="With error" defaultValue="invalid" error="Please enter a valid value." /></div>
                <div style={{ minWidth: 240 }}><O9Textbox label="Disabled" isDisabled /></div>
              </LiveReference>
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'Single-line free text inputs (name, email, search query, code identifier).',
                'Inputs that need a visible label, help text, or character limit.',
                'Inputs with prefix/suffix affordances (currency symbol, units, clear button).',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">Multi-line content — use <DocStrong>Textarea</DocStrong>.</span>,
                <span key="2">Numeric input with stepper — use <DocStrong>Number Input</DocStrong>.</span>,
                <span key="3">Search with suggestions — use <DocStrong>Search</DocStrong> or <DocStrong>Combobox</DocStrong>.</span>,
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@o9ds/react" code={`import { O9Textbox } from '@o9ds/react';

// Uncontrolled
<O9Textbox label="Email" placeholder="you@example.com" defaultValue="" />

// Controlled
const [value, setValue] = useState('');
<O9Textbox label="Email" value={value} onChange={(v) => setValue(v)} />

// With validation
<O9Textbox
  label="Email"
  isRequired
  hasError
  error="Please enter a valid email"
/>

// Prefix / suffix
<O9Textbox label="Amount" prefix="$" suffix="USD" />

// Clearable + max length
<O9Textbox label="Bio" clearable maxLength={120} />`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@o9ds/js" code={`import { O9Textbox } from '@o9ds/js';

const txt = O9Textbox.initialize(el, {
  label: 'Email',
  placeholder: 'you@example.com',
  onChange: (value) => console.log(value),
});

txt.value('hello');
txt.value();                     // => 'hello'
txt.setError('Required');
txt.setError(false);
txt.disabled(true);
txt.focus();
txt.destroy();`} />
            </DocSection>
            <DocSection id="props" title="Props"><PropsTable rows={PROPS} /></DocSection>
            <DocSection id="methods" title="Methods (JS)">
              <MethodsTable rows={[
                { method: 'O9Textbox.initialize(el, options)', returns: 'O9Textbox', desc: 'Factory.' },
                { method: 'value(v?)', returns: 'string | void', desc: 'Get/set the current value.' },
                { method: 'setError(message | false)', desc: 'Set or clear the error message.' },
                { method: 'disabled(state?)', returns: 'boolean | void', desc: 'Get/set disabled state.' },
                { method: 'readonly(state?)', returns: 'boolean | void', desc: 'Get/set readonly state.' },
                { method: 'focus()', desc: 'Focus the input.' },
                { method: 'destroy()', desc: 'Tear down.' },
              ]} />
            </DocSection>
            <DocSection id="events" title="Custom events (JS)">
              <EventsTable rows={[
                { event: 'txt:change', payload: '{ value }', desc: 'Fires on value change.' },
                { event: 'txt:focus', payload: '—', desc: 'Fires on focus.' },
                { event: 'txt:blur', payload: '—', desc: 'Fires on blur.' },
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Accessibility' && (
          <div className="space-y-12">
            <DocSection id="keyboard" title="Keyboard">
              <KeyboardTable rows={[
                { key: 'Tab / Shift+Tab', action: 'Move focus.' },
                { key: 'Esc', action: 'When clearable is enabled and the input has focus, clears the value.' },
              ]} />
            </DocSection>
            <DocSection id="aria" title="ARIA">
              <AriaTable rows={[
                { attr: 'aria-required', when: 'Set when isRequired.' },
                { attr: 'aria-invalid', when: 'Set when error is present or hasError.' },
                { attr: 'aria-describedby', when: 'Wires the description and/or error message to the input.' },
                { attr: 'aria-readonly', when: 'Set when isReadonly.' },
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
