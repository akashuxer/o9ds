import { useState, useMemo } from 'react'
import { ArvoTextarea } from '@arvo/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocSection, { DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import { PropsTable, KeyboardTable, AriaTable, MethodsTable, LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'
import { getDescriptor } from '../../../data/componentDescriptors.generated'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const DESCRIPTOR = getDescriptor('textarea')
const PROPS = DESCRIPTOR.props


export default function Textarea() {
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
          title="Textarea"
          description="Multi-line text input with optional auto-resize, character counter, and the same validation/error/required wiring as Textbox."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>}
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>Use Textarea for free-form multi-line content where the user may type more than a single line (notes, descriptions, comments).</DocParagraph>
            </DocSection>
            <DocSection id="demo" title="Live demo">
              <LiveReference>
                <div style={{ minWidth: 280 }}><ArvoTextarea label="Notes" placeholder="Type a few words..." rows={3} /></div>
                <div style={{ minWidth: 280 }}><ArvoTextarea label="With counter" maxLength={120} rows={3} /></div>
                <div style={{ minWidth: 280 }}><ArvoTextarea label="Disabled" isDisabled rows={3} /></div>
              </LiveReference>
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'Free-form multi-line content (notes, descriptions, comments).',
                'When the user might paste a long block of text.',
                'When you want a visible character counter.',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">Single-line input — use <DocStrong>Textbox</DocStrong>.</span>,
                <span key="2">Rich text editing — use a dedicated text editor.</span>,
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@arvo/react" code={`import { ArvoTextarea } from '@arvo/react';

<ArvoTextarea label="Notes" placeholder="Type here..." rows={4} />
<ArvoTextarea label="Bio" maxLength={200} autoResize maxRows={8} />
<ArvoTextarea label="Description" defaultValue="" isRequired />
<ArvoTextarea label="Read-only" defaultValue="Locked content" isReadonly />`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@arvo/js" code={`import { ArvoTextarea } from '@arvo/js';

const ta = ArvoTextarea.initialize(el, {
  label: 'Notes',
  rows: 4,
  onChange: (value) => console.log(value),
});

ta.value('hello');
ta.value();
ta.setError('Required');
ta.disabled(true);
ta.destroy();`} />
            </DocSection>
            <DocSection id="props" title="Props"><PropsTable rows={PROPS} /></DocSection>
            <DocSection id="methods" title="Methods (JS)">
              <MethodsTable rows={[
                { method: 'ArvoTextarea.initialize(el, options)', returns: 'ArvoTextarea', desc: 'Factory.' },
                { method: 'value(v?)', returns: 'string | void', desc: 'Get/set the current value.' },
                { method: 'setError(message | false)', desc: 'Set/clear error message.' },
                { method: 'disabled(state?)', returns: 'boolean | void', desc: 'Get/set disabled state.' },
                { method: 'readonly(state?)', returns: 'boolean | void', desc: 'Get/set readonly state.' },
                { method: 'focus()', desc: 'Focus the textarea.' },
                { method: 'destroy()', desc: 'Tear down.' },
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Accessibility' && (
          <div className="space-y-12">
            <DocSection id="keyboard" title="Keyboard">
              <KeyboardTable rows={[
                { key: 'Tab / Shift+Tab', action: 'Move focus.' },
                { key: 'Enter', action: 'Inserts a newline.' },
              ]} />
            </DocSection>
            <DocSection id="aria" title="ARIA">
              <AriaTable rows={[
                { attr: 'aria-required', when: 'Set when isRequired.' },
                { attr: 'aria-invalid', when: 'Set when error is present.' },
                { attr: 'aria-describedby', when: 'Wires description and/or error to the textarea.' },
                { attr: 'aria-readonly', when: 'Set when isReadonly.' },
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
