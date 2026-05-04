import { useState, useMemo } from 'react'
import { ArvoRadioGroup, ArvoRadio } from '@arvo/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocSection, { DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import { PropsTable, KeyboardTable, AriaTable, MethodsTable, LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'
import { getDescriptor } from '../../../data/componentDescriptors.generated'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const DESCRIPTOR = getDescriptor('radio-group')
const PROPS = DESCRIPTOR.props


export default function RadioGroup() {
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
          title="Radio Group"
          description="A labeled group of radios that read as a single mutually-exclusive control. Implements arrow-key roving focus per the WAI-ARIA Radio Group pattern."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="12" cy="12" r="4" fill="currentColor" /></svg>}
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>Use Radio Group whenever multiple radios share a question. The group is mandatory for accessible form-field semantics — never use a single Radio outside a Radio Group.</DocParagraph>
            </DocSection>
            <DocSection id="demo" title="Live demo">
              <LiveReference>
                <ArvoRadioGroup name="theme" label="Theme" defaultValue="light">
                  <ArvoRadio value="light" label="Light" />
                  <ArvoRadio value="dark" label="Dark" />
                  <ArvoRadio value="system" label="System" />
                </ArvoRadioGroup>
              </LiveReference>
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'Mutually exclusive options under a single question (theme, billing cycle, plan).',
                'A small set of options where seeing all choices at once is useful (typically 2–5).',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">Multi-select — use <DocStrong>Checkbox Group</DocStrong>.</span>,
                <span key="2">Many options — use <DocStrong>Select</DocStrong> or <DocStrong>Combobox</DocStrong>.</span>,
                <span key="3">Binary on/off — use <DocStrong>Switch</DocStrong>.</span>,
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@arvo/react" code={`import { ArvoRadioGroup } from '@arvo/react';

const items = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'system', label: 'System' },
];

<ArvoRadioGroup label="Theme" items={items} defaultValue="light" />

// Controlled
const [theme, setTheme] = useState('light');
<ArvoRadioGroup label="Theme" items={items} value={theme} onChange={setTheme} />

// Horizontal
<ArvoRadioGroup label="Density" items={items} orientation="horizontal" />`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@arvo/js" code={`import { ArvoRadioGroup } from '@arvo/js';

const grp = ArvoRadioGroup.initialize(el, {
  label: 'Theme',
  items,
  defaultValue: 'light',
  onChange: (value) => console.log(value),
});

grp.value('dark');
grp.value();              // => 'dark'
grp.disabled(true);
grp.destroy();`} />
            </DocSection>
            <DocSection id="props" title="Props"><PropsTable rows={PROPS} /></DocSection>
            <DocSection id="methods" title="Methods (JS)">
              <MethodsTable rows={[
                { method: 'ArvoRadioGroup.initialize(el, options)', returns: 'ArvoRadioGroup', desc: 'Factory.' },
                { method: 'value(v?)', returns: 'string | null | void', desc: 'Get/set selected value.' },
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
                { key: 'Tab', action: 'Move focus into the group (focuses the selected radio, or the first if none).' },
                { key: 'ArrowDown / ArrowRight', action: 'Move selection to the next radio.' },
                { key: 'ArrowUp / ArrowLeft', action: 'Move selection to the previous radio.' },
                { key: 'Space', action: 'Select the focused radio (when none is yet selected).' },
              ]} />
            </DocSection>
            <DocSection id="aria" title="ARIA">
              <AriaTable rows={[
                { attr: 'role="radiogroup"', when: 'Set on the container.' },
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
