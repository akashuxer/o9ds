import { useState, useMemo } from 'react'
import { ArvoCheckboxGroup, ArvoCheckbox } from '@arvo/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocSection, { DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import { PropsTable, KeyboardTable, AriaTable, MethodsTable, LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'
import { getDescriptor } from '../../../data/componentDescriptors.generated'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const DESCRIPTOR = getDescriptor('checkbox-group')
const PROPS = DESCRIPTOR.props


export default function CheckboxGroup() {
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
          title="Checkbox Group"
          description="A labeled group of checkboxes that read as a single multi-select control. Provides the legend-equivalent and ensures the group has a single accessible name."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M5 13l4 4L19 7" /></svg>}
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>Use Checkbox Group whenever multiple checkboxes share a question or theme. The group is mandatory for accessible form-field semantics.</DocParagraph>
            </DocSection>
            <DocSection id="demo" title="Live demo">
              <LiveReference>
                <ArvoCheckboxGroup label="Notifications">
                  <ArvoCheckbox value="email" label="Email" defaultChecked />
                  <ArvoCheckbox value="sms" label="SMS" />
                  <ArvoCheckbox value="push" label="Push" />
                </ArvoCheckboxGroup>
              </LiveReference>
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'Multiple non-mutually-exclusive options under a single question.',
                'Filter UIs (categories, statuses, tags).',
                'Permission lists where each row is independent.',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">Mutually exclusive options — use <DocStrong>Radio Group</DocStrong>.</span>,
                <span key="2">Selecting from a long list with search — use <DocStrong>Combobox</DocStrong> or <DocStrong>Hybrid Popover</DocStrong>.</span>,
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@arvo/react" code={`import { ArvoCheckboxGroup } from '@arvo/react';

const items = [
  { value: 'email', label: 'Email' },
  { value: 'sms', label: 'SMS' },
  { value: 'push', label: 'Push' },
];

<ArvoCheckboxGroup label="Notifications" items={items} defaultValue={['email']} />

// Controlled
const [v, setV] = useState(['email']);
<ArvoCheckboxGroup label="Notifications" items={items} value={v} onChange={setV} />

// Horizontal layout
<ArvoCheckboxGroup label="Permissions" items={items} orientation="horizontal" />`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@arvo/js" code={`import { ArvoCheckboxGroup } from '@arvo/js';

const grp = ArvoCheckboxGroup.initialize(el, {
  label: 'Notifications',
  items,
  defaultValue: ['email'],
  onChange: (values) => console.log(values),
});

grp.value(['email', 'sms']);
grp.value();              // => ['email', 'sms']
grp.disabled(true);
grp.destroy();`} />
            </DocSection>
            <DocSection id="props" title="Props"><PropsTable rows={PROPS} /></DocSection>
            <DocSection id="methods" title="Methods (JS)">
              <MethodsTable rows={[
                { method: 'ArvoCheckboxGroup.initialize(el, options)', returns: 'ArvoCheckboxGroup', desc: 'Factory.' },
                { method: 'value(values?)', returns: 'string[] | void', desc: 'Get/set selected values.' },
                { method: 'setError(message | false)', desc: 'Set/clear error message.' },
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
                { key: 'Tab / Shift+Tab', action: 'Move focus into and out of the group.' },
                { key: 'Space', action: 'Toggle the focused checkbox.' },
              ]} />
            </DocSection>
            <DocSection id="aria" title="ARIA">
              <AriaTable rows={[
                { attr: 'role="group"', when: 'Set on the container.' },
                { attr: 'aria-labelledby', when: 'Points at the group label element.' },
                { attr: 'aria-required', when: 'Set when isRequired.' },
                { attr: 'aria-invalid', when: 'Set on the group when error is present.' },
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
