import { useState, useMemo } from 'react'
import { O9Checkbox } from '@o9ds/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocSection, { DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import { PropsTable, KeyboardTable, AriaTable, MethodsTable, LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const PROPS = [
  { prop: 'label', type: 'string | ReactNode', desc: 'Inline label rendered next to the checkbox.' },
  { prop: 'isChecked', type: 'boolean', desc: 'Controlled checked state.' },
  { prop: 'defaultChecked', type: 'boolean', desc: 'Uncontrolled initial checked state.' },
  { prop: 'isIndeterminate', type: 'boolean', default: 'false', desc: 'Tri-state indicator (mixed).' },
  { prop: 'description', type: 'string', desc: 'Help text rendered under the label.' },
  { prop: 'error', type: 'string', desc: 'Error message; sets aria-invalid.' },
  { prop: 'isRequired', type: 'boolean', default: 'false', desc: 'Marks the field as required.' },
  { prop: 'isReadonly', type: 'boolean', default: 'false', desc: 'Disable toggling but keep tabbable.' },
  { prop: 'isDisabled', type: 'boolean', default: 'false', desc: 'Disable interaction.' },
  { prop: 'onChange', type: '(checked: boolean, event) => void', desc: 'Change callback.' },
]

export default function Checkbox() {
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
          title="Checkbox"
          description="Single tri-state checkbox (checked, unchecked, indeterminate). For grouped selection, use Checkbox Group."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>Use Checkbox for binary or tri-state choices. For multiple related options, wrap in <DocStrong>Checkbox Group</DocStrong> so the group provides legend semantics and roving focus.</DocParagraph>
            </DocSection>
            <DocSection id="demo" title="Live demo">
              <LiveReference>
                <O9Checkbox label="Default" />
                <O9Checkbox label="Checked" defaultChecked />
                <O9Checkbox label="Indeterminate" isIndeterminate />
                <O9Checkbox label="Disabled" isDisabled />
              </LiveReference>
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'Single binary opt-in (terms acceptance, "remember me").',
                'Tri-state controls (parent toggle for nested checkboxes).',
                'Grouped multi-select within a Checkbox Group.',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">Settings that should read as on/off — use <DocStrong>Switch</DocStrong>.</span>,
                <span key="2">Mutually exclusive options — use <DocStrong>Radio Group</DocStrong>.</span>,
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@o9ds/react" code={`import { O9Checkbox } from '@o9ds/react';

<O9Checkbox label="Subscribe" defaultChecked />

// Controlled
const [c, setC] = useState(false);
<O9Checkbox label="Agree" isChecked={c} onChange={setC} />

// Indeterminate (parent of nested checkboxes)
<O9Checkbox label="All items" isIndeterminate onChange={toggleAll} />`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@o9ds/js" code={`import { O9Checkbox } from '@o9ds/js';

const cb = O9Checkbox.initialize(el, {
  label: 'Agree',
  defaultChecked: false,
  onChange: (checked) => console.log(checked),
});

cb.toggle();          // flip
cb.toggle(true);      // force checked
cb.indeterminate(true);
cb.disabled(true);
cb.destroy();`} />
            </DocSection>
            <DocSection id="props" title="Props"><PropsTable rows={PROPS} /></DocSection>
            <DocSection id="methods" title="Methods (JS)">
              <MethodsTable rows={[
                { method: 'O9Checkbox.initialize(el, options)', returns: 'O9Checkbox', desc: 'Factory.' },
                { method: 'toggle(state?)', desc: 'Flip or set checked state.' },
                { method: 'checked(state?)', returns: 'boolean | void', desc: 'Get/set checked state.' },
                { method: 'indeterminate(state?)', returns: 'boolean | void', desc: 'Get/set indeterminate state.' },
                { method: 'disabled(state?)', returns: 'boolean | void', desc: 'Get/set disabled state.' },
                { method: 'destroy()', desc: 'Tear down.' },
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Accessibility' && (
          <div className="space-y-12">
            <DocSection id="keyboard" title="Keyboard">
              <KeyboardTable rows={[
                { key: 'Space', action: 'Toggle the checkbox.' },
                { key: 'Tab / Shift+Tab', action: 'Move focus.' },
              ]} />
            </DocSection>
            <DocSection id="aria" title="ARIA">
              <AriaTable rows={[
                { attr: 'role="checkbox"', when: 'Set automatically on the control.' },
                { attr: 'aria-checked', when: 'Reflects the current state — "true", "false", or "mixed".' },
                { attr: 'aria-required', when: 'Set when isRequired.' },
                { attr: 'aria-invalid', when: 'Set when error is present.' },
                { attr: 'aria-disabled', when: 'Set when isDisabled.' },
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
