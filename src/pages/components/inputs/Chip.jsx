import { useState, useMemo } from 'react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocSection, { DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import {
  PropsTable,
  KeyboardTable,
  AriaTable,
  MethodsTable,
  EventsTable,
  CssVarsGrid,
} from '../../../LayoutComponents/ComponentDocPrimitives'
import { getDescriptor } from '../../../data/componentDescriptors.generated'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const DESCRIPTOR = getDescriptor('chip')
const PROPS = DESCRIPTOR.props
const CSS_VARS = DESCRIPTOR.cssVarGroups
const METHODS = DESCRIPTOR.methods
const EVENTS = DESCRIPTOR.events
const KEYBOARD = DESCRIPTOR.keyboard
const ARIA = DESCRIPTOR.aria

export default function Chip() {
  const [tab, setTab] = useState('Overview')

  const sections = useMemo(() => {
    if (tab === 'Overview') return [
      { id: 'purpose', label: 'Purpose' },
      { id: 'variants', label: 'Variants' },
    ]
    if (tab === 'Usage') return [
      { id: 'when', label: 'When to use' },
      { id: 'when-not', label: 'When not to use' },
    ]
    if (tab === 'Code/APIs') return [
      { id: 'react', label: 'React' },
      { id: 'js', label: 'Vanilla JS' },
      { id: 'props', label: 'Props' },
      { id: 'css-vars', label: 'CSS variables' },
      { id: 'methods', label: 'Methods (JS)' },
      { id: 'events', label: 'Events (JS)' },
    ]
    if (tab === 'Accessibility') return [
      { id: 'keyboard', label: 'Keyboard' },
      { id: 'aria', label: 'ARIA' },
    ]
    return []
  }, [tab])

  return (
    <PageWithToc sections={sections}>
      <div className="space-y-8">
        <PageHeader
          title="Chip"
          description="Compact interactive label representing an attribute, filter token, or selection. Supports icon, count badge, removability, and selection states. Use ChipList for collections."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10v10H7z" /></svg>}
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>Use Chip to represent a discrete piece of information that the user can act on — apply or remove a filter, select an option, or display an attribute that can be cleared. Chips are typically grouped in a wrapping list.</DocParagraph>
            </DocSection>
            <DocSection id="variants" title="Variants">
              <DocList items={[
                <span key="filter"><DocStrong>Filter</DocStrong> — toggle a query token; click to apply, click again to remove.</span>,
                <span key="input"><DocStrong>Input</DocStrong> — represents user-entered tokens (emails, tags). Always removable.</span>,
                <span key="choice"><DocStrong>Choice</DocStrong> — single-select alternative to a radio group when options are short.</span>,
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'Showing applied filter tokens that the user can clear.',
                'Tag-style selection within a form (multi-select inputs, tag editors).',
                'Compact representation of an attribute set on a row or card.',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">For exclusive selection across many options — use <DocStrong>Radio Group</DocStrong> or <DocStrong>Select Dropdown</DocStrong>.</span>,
                <span key="2">For yes/no toggles — use <DocStrong>Switch</DocStrong> or <DocStrong>Checkbox</DocStrong>.</span>,
                <span key="3">For multi-line tags or rich content — use cards or a list view.</span>,
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <DocParagraph>The React chip wrapper is published when the Chip component graduates from the JS library. For now, prefer the vanilla JS API.</DocParagraph>
              <CodeBlock
                language="tsx"
                label="@arvo/react (preview)"
                code={`// Chip is currently shipped via @arvo/js. The React wrapper will follow
// the same prop shape documented in the Props table below.`}
              />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock
                language="js"
                label="@arvo/js"
                code={`import { ArvoChip } from '@arvo/js';

const chip = ArvoChip.initialize(el, {
  label: 'Q3',
  variant: 'filter',
  isRemovable: true,
  onRemove: () => removeFilter('q3'),
});

chip.toggle();         // toggles selected state
chip.toggle(true);     // explicit set
chip.disabled(true);
chip.destroy();`}
              />
            </DocSection>
            <DocSection id="props" title="Props">
              <PropsTable rows={PROPS} />
            </DocSection>
            <DocSection id="css-vars" title="CSS variables">
              <DocParagraph>Override on <DocCode>.arvo-chip</DocCode> or a parent to theme the chip.</DocParagraph>
              <CssVarsGrid groups={CSS_VARS} />
            </DocSection>
            <DocSection id="methods" title="Methods (JS)">
              <MethodsTable rows={METHODS} />
            </DocSection>
            <DocSection id="events" title="Custom events (JS)">
              <EventsTable rows={EVENTS} />
            </DocSection>
          </div>
        )}

        {tab === 'Accessibility' && (
          <div className="space-y-12">
            <DocSection id="keyboard" title="Keyboard">
              <KeyboardTable rows={KEYBOARD} />
            </DocSection>
            <DocSection id="aria" title="ARIA">
              <AriaTable rows={ARIA} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
