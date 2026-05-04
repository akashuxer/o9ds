import { useState, useMemo } from 'react'
import { ArvoTabstrip } from '@arvo/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocSection, { DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import { PropsTable, KeyboardTable, AriaTable, MethodsTable, EventsTable, SimpleTable, LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'
import { getDescriptor } from '../../../data/componentDescriptors.generated'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const DESCRIPTOR = getDescriptor('tabstrip')
const PROPS = DESCRIPTOR.props


export default function Tabstrip() {
  const [tab, setTab] = useState('Overview')
  const [selected, setSelected] = useState('overview')
  const sections = useMemo(() => {
    if (tab === 'Overview') return [{ id: 'purpose', label: 'Purpose' }, { id: 'variants', label: 'Variants' }, { id: 'sizes', label: 'Sizes' }]
    if (tab === 'Usage') return [{ id: 'when', label: 'When to use' }, { id: 'when-not', label: 'When not to use' }]
    if (tab === 'Code/APIs') return [{ id: 'react', label: 'React' }, { id: 'js', label: 'Vanilla JS' }, { id: 'props', label: 'Props' }, { id: 'tabitem', label: 'TabItem' }, { id: 'methods', label: 'Methods (JS)' }, { id: 'events', label: 'Events (JS)' }]
    if (tab === 'Accessibility') return [{ id: 'keyboard', label: 'Keyboard' }, { id: 'aria', label: 'ARIA' }]
    return []
  }, [tab])

  const tabsData = [
    { id: 'overview', label: 'Overview', icon: 'home' },
    { id: 'details', label: 'Details', icon: 'info-circle' },
    { id: 'settings', label: 'Settings', icon: 'gear' },
  ]

  return (
    <PageWithToc sections={sections}>
      <div className="space-y-8">
        <PageHeader
          title="Tabstrip"
          description="Horizontal strip of selectable tabs for switching between views or panels. Three variants, two sizes, optional tab icons, closable and pinnable tabs, full WAI-ARIA Tabs Pattern keyboard navigation."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /></svg>}
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>
                Use Tabstrip to switch between sibling views in the same hierarchy level. The component implements roving tabindex so only the selected tab participates in the page tab order.
              </DocParagraph>
            </DocSection>
            <DocSection id="variants" title="Variants">
              <SimpleTable columns={['Variant', 'Description']} rows={[
                ['primary', 'Flat tabs with bottom border indicator on selected tab.'],
                ['secondary', 'Background fill + bottom border on selected tab.'],
                ['tertiary', 'Icon-only unselected; expands to icon + label on selection.'],
              ]} />
              <LiveReference>
                <ArvoTabstrip tabs={tabsData} selectedId={selected} onSelect={({ id }) => setSelected(id)} />
              </LiveReference>
            </DocSection>
            <DocSection id="sizes" title="Sizes">
              <SimpleTable columns={['Size', 'Height', 'Font', 'Inner icon button']} rows={[
                ['sm', '24px', '12px', 'sm (24px)'],
                ['lg', '32px', '14px', 'md (32px)'],
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'Switching between sibling views in the same hierarchy level.',
                'Multi-tab document workspaces (closable + pinnable).',
                'Settings panels with several related sections.',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">Hierarchical navigation — use <DocStrong>Breadcrumb</DocStrong>.</span>,
                <span key="2">Many options that don't all need to be visible — use <DocStrong>Combobox</DocStrong>.</span>,
                <span key="3">Single primary action — use <DocStrong>Button</DocStrong>.</span>,
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@arvo/react" code={`import { ArvoTabstrip } from '@arvo/react';

const tabs = [
  { id: 'overview', label: 'Overview', icon: 'home' },
  { id: 'details', label: 'Details', icon: 'info-circle' },
  { id: 'settings', label: 'Settings', icon: 'gear' },
];

<ArvoTabstrip
  tabs={tabs}
  selectedId="overview"
  onSelect={({ id }) => setActiveTab(id)}
/>

<ArvoTabstrip
  tabs={tabs}
  closable
  pinnable
  onClose={({ id }) => removeTab(id)}
  onPin={({ id, pinned }) => togglePin(id, pinned)}
/>

<ArvoTabstrip tabs={tabs} variant="secondary" size="sm" />
<ArvoTabstrip tabs={tabs} variant="tertiary" />`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@arvo/js" code={`import { ArvoTabstrip } from '@arvo/js';

const strip = ArvoTabstrip.initialize(el, {
  variant: 'primary',
  size: 'lg',
  tabs,
  closable: true,
  pinnable: true,
  onSelect: ({ id }) => console.log('selected', id),
  onClose: ({ id }) => console.log('closed', id),
  onPin: ({ id, pinned }) => console.log('pinned', id, pinned),
});

strip.select('details');
strip.selectedId();          // => 'details'
strip.addTab({ id: 'new', label: 'New Tab' });
strip.removeTab('settings');
strip.disabled(true);
strip.setLoading(true);
strip.destroy();`} />
            </DocSection>
            <DocSection id="props" title="Props"><PropsTable rows={PROPS} /></DocSection>
            <DocSection id="tabitem" title="TabItem shape">
              <CodeBlock language="ts" code={`interface TabItem {
  id: string;
  label: string;
  icon?: string;
  disabled?: boolean;
  pinned?: boolean;
  closable?: boolean;
  panelId?: string;     // id of the controlled panel for aria-controls
}`} />
            </DocSection>
            <DocSection id="methods" title="Methods (JS)">
              <MethodsTable rows={[
                { method: 'ArvoTabstrip.initialize(el, options)', returns: 'ArvoTabstrip', desc: 'Factory.' },
                { method: 'select(id)', desc: 'Programmatically select a tab.' },
                { method: 'selectedId()', returns: 'string | null', desc: 'Read current selection.' },
                { method: 'addTab(tab)', desc: 'Add a new tab.' },
                { method: 'removeTab(id)', desc: 'Remove a tab.' },
                { method: 'disabled(state?)', returns: 'boolean | void', desc: 'Get/set disabled state.' },
                { method: 'setLoading(b)', desc: 'Toggle loading state.' },
                { method: 'destroy()', desc: 'Tear down.' },
              ]} />
            </DocSection>
            <DocSection id="events" title="Custom events (JS)">
              <EventsTable rows={[
                { event: 'tabs:select', payload: '{ id, index }', desc: 'Tab selected.' },
                { event: 'tabs:close', payload: '{ id, index }', desc: 'Tab close clicked.' },
                { event: 'tabs:pin', payload: '{ id, pinned }', desc: 'Tab pin toggled.' },
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Accessibility' && (
          <div className="space-y-12">
            <DocSection id="keyboard" title="Keyboard">
              <KeyboardTable rows={[
                { key: 'ArrowRight', action: 'Focus next tab (wraps from last to first).' },
                { key: 'ArrowLeft', action: 'Focus previous tab (wraps from first to last).' },
                { key: 'Home', action: 'Focus first non-disabled tab.' },
                { key: 'End', action: 'Focus last non-disabled tab.' },
                { key: 'Enter / Space', action: 'Activate (select) focused tab.' },
                { key: 'Delete', action: 'Close focused tab (if closable).' },
                { key: 'Tab', action: 'Exit tabstrip to next focusable element.' },
              ]} />
            </DocSection>
            <DocSection id="aria" title="ARIA">
              <AriaTable rows={[
                { attr: 'role="tablist"', when: 'On the container.' },
                { attr: 'aria-orientation="horizontal"', when: 'Always set on the container.' },
                { attr: 'role="tab"', when: 'On each tab.' },
                { attr: 'aria-selected', when: 'On each tab — true for the active tab, false otherwise.' },
                { attr: 'aria-disabled', when: 'On disabled tabs.' },
                { attr: 'aria-controls', when: 'On each tab pointing at the corresponding panel id (when provided).' },
                { attr: 'aria-busy', when: 'On the root during loading.' },
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
