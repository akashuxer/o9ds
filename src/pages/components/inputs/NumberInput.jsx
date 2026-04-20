import { useState, useMemo } from 'react'
import { O9NumberInput } from '@o9ds/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocSection, { DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import { PropsTable, KeyboardTable, AriaTable, MethodsTable, LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const PROPS = [
  { prop: 'label', type: 'string', desc: 'Field label rendered above the input.' },
  { prop: 'value', type: 'number | null', desc: 'Controlled value.' },
  { prop: 'defaultValue', type: 'number | null', desc: 'Uncontrolled initial value.' },
  { prop: 'min', type: 'number', desc: 'Minimum allowed value.' },
  { prop: 'max', type: 'number', desc: 'Maximum allowed value.' },
  { prop: 'step', type: 'number', default: '1', desc: 'Stepper increment.' },
  { prop: 'precision', type: 'number', desc: 'Decimal precision when displaying the value.' },
  { prop: 'placeholder', type: 'string', desc: 'Placeholder text.' },
  { prop: 'description', type: 'string', desc: 'Help text below the input.' },
  { prop: 'error', type: 'string', desc: 'Error message. Sets aria-invalid.' },
  { prop: 'isRequired', type: 'boolean', default: 'false', desc: 'Marks the field as required.' },
  { prop: 'isReadonly', type: 'boolean', default: 'false', desc: 'Disable editing.' },
  { prop: 'isDisabled', type: 'boolean', default: 'false', desc: 'Disable interaction.' },
  { prop: 'showSteppers', type: 'boolean', default: 'true', desc: 'Show + / − stepper buttons.' },
  { prop: 'onChange', type: '(value: number | null) => void', desc: 'Change callback.' },
]

export default function NumberInput() {
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
          title="Number Input"
          description="Numeric input with optional min/max/step constraints, stepper buttons, and decimal precision. Renders the spinbutton role for assistive tech."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" /></svg>}
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>Use Number Input for numeric values where the user benefits from typing or stepping. Supports min/max constraints, decimal precision, and the standard form-input pattern.</DocParagraph>
            </DocSection>
            <DocSection id="demo" title="Live demo">
              <LiveReference>
                <div style={{ minWidth: 220 }}><O9NumberInput label="Quantity" defaultValue={1} min={0} max={100} /></div>
                <div style={{ minWidth: 220 }}><O9NumberInput label="Price" defaultValue={9.99} step={0.01} precision={2} /></div>
                <div style={{ minWidth: 220 }}><O9NumberInput label="Disabled" defaultValue={5} isDisabled /></div>
              </LiveReference>
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'Numeric values with optional min/max constraints (quantity, age, percentage).',
                'Decimal values with a fixed precision (price, currency, percentage).',
                'Settings that benefit from stepper increments.',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">Free-form numeric ID strings — use <DocStrong>Textbox</DocStrong>.</span>,
                <span key="2">Continuous numeric range — use a slider component.</span>,
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@o9ds/react" code={`import { O9NumberInput } from '@o9ds/react';

<O9NumberInput label="Quantity" defaultValue={1} min={0} max={100} />
<O9NumberInput label="Price" defaultValue={9.99} step={0.01} precision={2} />
<O9NumberInput label="Read-only" defaultValue={42} isReadonly />`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@o9ds/js" code={`import { O9NumberInput } from '@o9ds/js';

const num = O9NumberInput.initialize(el, {
  label: 'Quantity',
  min: 0,
  max: 100,
  defaultValue: 1,
  onChange: (value) => console.log(value),
});

num.value(5);
num.value();         // => 5
num.setError('Out of range');
num.disabled(true);
num.destroy();`} />
            </DocSection>
            <DocSection id="props" title="Props"><PropsTable rows={PROPS} /></DocSection>
            <DocSection id="methods" title="Methods (JS)">
              <MethodsTable rows={[
                { method: 'O9NumberInput.initialize(el, options)', returns: 'O9NumberInput', desc: 'Factory.' },
                { method: 'value(v?)', returns: 'number | null | void', desc: 'Get/set the current value.' },
                { method: 'setError(message | false)', desc: 'Set/clear error message.' },
                { method: 'disabled(state?)', returns: 'boolean | void', desc: 'Get/set disabled state.' },
                { method: 'readonly(state?)', returns: 'boolean | void', desc: 'Get/set readonly state.' },
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
                { key: 'ArrowUp / ArrowDown', action: 'Increment/decrement by step.' },
                { key: 'PageUp / PageDown', action: 'Increment/decrement by 10× step.' },
                { key: 'Home / End', action: 'Jump to min / max (when set).' },
              ]} />
            </DocSection>
            <DocSection id="aria" title="ARIA">
              <AriaTable rows={[
                { attr: 'role="spinbutton"', when: 'Set automatically on the input.' },
                { attr: 'aria-valuemin / aria-valuemax / aria-valuenow', when: 'Reflect min/max/value when set.' },
                { attr: 'aria-required', when: 'Set when isRequired.' },
                { attr: 'aria-invalid', when: 'Set when error is present.' },
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
