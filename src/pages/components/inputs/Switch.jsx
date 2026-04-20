import { useState, useMemo } from 'react'
import { O9Switch } from '@o9ds/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocSection, { DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import { PropsTable, KeyboardTable, AriaTable, MethodsTable, LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const PROPS = [
  { prop: 'label', type: 'string | ReactNode', desc: 'Inline label rendered next to the switch.' },
  { prop: 'isChecked', type: 'boolean', desc: 'Controlled on/off state.' },
  { prop: 'defaultChecked', type: 'boolean', default: 'false', desc: 'Uncontrolled initial on/off state.' },
  { prop: 'description', type: 'string', desc: 'Help text rendered under the label.' },
  { prop: 'isDisabled', type: 'boolean', default: 'false', desc: 'Disable interaction.' },
  { prop: 'isReadonly', type: 'boolean', default: 'false', desc: 'Disable toggling but keep tabbable.' },
  { prop: 'onChange', type: '(checked: boolean, event) => void', desc: 'Change callback.' },
]

export default function Switch() {
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
          title="Switch"
          description="On/off toggle for binary settings. Effect should be immediate — switches do not require a separate Save action."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12a7 7 0 0114 0M9 12a3 3 0 116 0 3 3 0 01-6 0z" /></svg>}
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>Use Switch for settings that read as on/off and take effect immediately. The control role is <DocCode>switch</DocCode>, distinct from a checkbox.</DocParagraph>
            </DocSection>
            <DocSection id="demo" title="Live demo">
              <LiveReference>
                <O9Switch label="Wi-Fi" defaultChecked />
                <O9Switch label="Notifications" />
                <O9Switch label="Disabled" isDisabled />
              </LiveReference>
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'Settings that toggle a system state immediately (Wi-Fi, dark mode, notifications).',
                'When the on/off semantic is clearer than checked/unchecked.',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">For form fields that need to be saved with a submit — use <DocStrong>Checkbox</DocStrong>.</span>,
                <span key="2">For mutually exclusive options — use <DocStrong>Radio Group</DocStrong> or <DocStrong>Button Group</DocStrong>.</span>,
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@o9ds/react" code={`import { O9Switch } from '@o9ds/react';

<O9Switch label="Wi-Fi" defaultChecked />

// Controlled
const [on, setOn] = useState(true);
<O9Switch label="Dark mode" isChecked={on} onChange={setOn} />`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@o9ds/js" code={`import { O9Switch } from '@o9ds/js';

const sw = O9Switch.initialize(el, {
  label: 'Wi-Fi',
  defaultChecked: true,
  onChange: (checked) => console.log(checked),
});

sw.toggle();           // flip
sw.toggle(false);      // force off
sw.checked();          // => boolean
sw.disabled(true);
sw.destroy();`} />
            </DocSection>
            <DocSection id="props" title="Props"><PropsTable rows={PROPS} /></DocSection>
            <DocSection id="methods" title="Methods (JS)">
              <MethodsTable rows={[
                { method: 'O9Switch.initialize(el, options)', returns: 'O9Switch', desc: 'Factory.' },
                { method: 'toggle(state?)', desc: 'Flip or set on/off state.' },
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
              <KeyboardTable rows={[
                { key: 'Space', action: 'Toggle the switch.' },
                { key: 'Tab / Shift+Tab', action: 'Move focus.' },
              ]} />
            </DocSection>
            <DocSection id="aria" title="ARIA">
              <AriaTable rows={[
                { attr: 'role="switch"', when: 'Set automatically on the control.' },
                { attr: 'aria-checked', when: 'Reflects the current on/off state — "true" or "false".' },
                { attr: 'aria-disabled', when: 'Set when isDisabled.' },
                { attr: 'aria-readonly', when: 'Set when isReadonly.' },
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
