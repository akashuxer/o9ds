import { useState, useMemo } from 'react'
import { O9Radio } from '@o9ds/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocSection, { DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import { PropsTable, KeyboardTable, AriaTable, MethodsTable, LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const PROPS = [
  { prop: 'label', type: 'string | ReactNode', desc: 'Inline label rendered next to the radio.' },
  { prop: 'value', type: 'string', required: 'Yes', desc: 'The value this radio represents within its RadioGroup.' },
  { prop: 'isChecked', type: 'boolean', desc: 'Controlled checked state. Usually managed by the parent RadioGroup.' },
  { prop: 'description', type: 'string', desc: 'Help text below the label.' },
  { prop: 'isDisabled', type: 'boolean', default: 'false', desc: 'Disable interaction.' },
  { prop: 'isReadonly', type: 'boolean', default: 'false', desc: 'Disable selection but keep tabbable.' },
  { prop: 'onChange', type: '(value: string, event) => void', desc: 'Change callback. Usually consumed by the RadioGroup.' },
]

export default function Radio() {
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
          title="Radio"
          description="A single radio control. Always wrap one or more radios in a RadioGroup so the group provides legend semantics and arrow-key roving focus."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="12" cy="12" r="4" fill="currentColor" /></svg>}
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>Use Radio for a single mutually-exclusive choice. The standalone <DocCode>O9Radio</DocCode> is rarely used directly — wrap radios in <DocStrong>Radio Group</DocStrong> for proper grouping, labelling, and keyboard navigation.</DocParagraph>
            </DocSection>
            <DocSection id="demo" title="Live demo">
              <LiveReference>
                <O9Radio value="opt-1" label="Default" />
                <O9Radio value="opt-2" label="Checked" defaultChecked />
                <O9Radio value="opt-3" label="Disabled" isDisabled />
              </LiveReference>
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'As a child of a RadioGroup for mutually exclusive options.',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">For multi-select choices — use <DocStrong>Checkbox Group</DocStrong>.</span>,
                <span key="2">For binary on/off settings — use <DocStrong>Switch</DocStrong>.</span>,
                <span key="3">A single Radio outside a RadioGroup is unsupported.</span>,
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@o9ds/react — almost always inside a RadioGroup" code={`import { O9RadioGroup, O9Radio } from '@o9ds/react';

<O9RadioGroup label="Theme" defaultValue="light">
  <O9Radio value="light" label="Light" />
  <O9Radio value="dark" label="Dark" />
  <O9Radio value="system" label="System" />
</O9RadioGroup>`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@o9ds/js" code={`import { O9Radio } from '@o9ds/js';

const rb = O9Radio.initialize(el, {
  value: 'light',
  label: 'Light',
  onChange: (value) => console.log(value),
});

rb.checked(true);
rb.disabled(true);
rb.destroy();`} />
            </DocSection>
            <DocSection id="props" title="Props"><PropsTable rows={PROPS} /></DocSection>
            <DocSection id="methods" title="Methods (JS)">
              <MethodsTable rows={[
                { method: 'O9Radio.initialize(el, options)', returns: 'O9Radio', desc: 'Factory.' },
                { method: 'checked(state?)', returns: 'boolean | void', desc: 'Get/set checked state.' },
                { method: 'disabled(state?)', returns: 'boolean | void', desc: 'Get/set disabled state.' },
                { method: 'destroy()', desc: 'Tear down.' },
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Accessibility' && (
          <div className="space-y-12">
            <DocSection id="keyboard" title="Keyboard">
              <DocParagraph>Keyboard interactions live on the parent RadioGroup. Tab moves into and out of the group; arrow keys cycle through radios.</DocParagraph>
              <KeyboardTable rows={[
                { key: 'Space', action: 'Select the focused radio.' },
                { key: 'ArrowUp / ArrowDown / ArrowLeft / ArrowRight', action: 'Move focus and selection within the group.' },
              ]} />
            </DocSection>
            <DocSection id="aria" title="ARIA">
              <AriaTable rows={[
                { attr: 'role="radio"', when: 'Set automatically on the control.' },
                { attr: 'aria-checked', when: 'Reflects the current selected state.' },
                { attr: 'aria-disabled', when: 'Set when isDisabled.' },
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
