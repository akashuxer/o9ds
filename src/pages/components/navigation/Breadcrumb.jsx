import { useState, useMemo } from 'react'
import { ArvoBreadcrumb } from '@arvo/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocSection, { DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import { PropsTable, CssVarsGrid, KeyboardTable, AriaTable, MethodsTable, EventsTable, LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'
import { getDescriptor } from '../../../data/componentDescriptors.generated'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const DESCRIPTOR = getDescriptor('breadcrumb')
const PROPS = DESCRIPTOR.props
const CSS_VARS = DESCRIPTOR.cssVarGroups



export default function Breadcrumb() {
  const [tab, setTab] = useState('Overview')
  const sections = useMemo(() => {
    if (tab === 'Overview') return [{ id: 'purpose', label: 'Purpose' }, { id: 'demo', label: 'Live demo' }]
    if (tab === 'Usage') return [{ id: 'when', label: 'When to use' }, { id: 'when-not', label: 'When not to use' }]
    if (tab === 'Code/APIs') return [{ id: 'react', label: 'React' }, { id: 'js', label: 'Vanilla JS' }, { id: 'props', label: 'Props' }, { id: 'item', label: 'ArvoBreadcrumbItem' }, { id: 'css-vars', label: 'CSS variables' }, { id: 'methods', label: 'Methods (JS)' }, { id: 'events', label: 'Events (JS)' }]
    if (tab === 'Accessibility') return [{ id: 'keyboard', label: 'Keyboard' }, { id: 'aria', label: 'ARIA' }, { id: 'pattern', label: 'WAI-ARIA pattern' }]
    return []
  }, [tab])

  const items = [
    { label: '', icon: 'home', href: '#' },
    { label: 'Products', href: '#' },
    { label: 'Category', href: '#' },
    { label: 'Current Item' },
  ]

  return (
    <PageWithToc sections={sections}>
      <div className="space-y-8">
        <PageHeader
          title="Breadcrumb"
          description="Horizontal trail of navigational links showing the user's current location within a page hierarchy. The last item is non-navigable, bold text representing the current page."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>}
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>
                Use Breadcrumb to display the user's location within a multi-level site structure and provide quick navigation back to parent pages. The first item is typically a home icon.
              </DocParagraph>
            </DocSection>
            <DocSection id="demo" title="Live demo">
              <LiveReference>
                <ArvoBreadcrumb items={items} />
              </LiveReference>
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                "Display the user's location within a multi-level site structure.",
                'Provide quick navigation back to parent pages.',
                'Help users understand the information architecture.',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">For standalone navigational anchors — use <DocStrong>Link</DocStrong>.</span>,
                <span key="2">For switching between sibling views at the same hierarchy level — use <DocStrong>Tabstrip</DocStrong>.</span>,
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@arvo/react" code={`import { ArvoBreadcrumb } from '@arvo/react';

<ArvoBreadcrumb
  items={[
    { label: '', icon: 'home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Category', href: '/products/category' },
    { label: 'Current Item' },
  ]}
  onNavigate={({ href, index, label }) => router.push(href)}
/>`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@arvo/js" code={`import { ArvoBreadcrumb } from '@arvo/js';

const bc = ArvoBreadcrumb.initialize(el, {
  items: [
    { label: '', icon: 'home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Current Page' },
  ],
  onNavigate: ({ href }) => console.log('navigate', href),
});

bc.setItems([{ label: 'Home', href: '/' }, { label: 'New Page' }]);
bc.disabled(true);
bc.setLoading(true);
bc.destroy();`} />
            </DocSection>
            <DocSection id="props" title="Props"><PropsTable rows={PROPS} /></DocSection>
            <DocSection id="item" title="ArvoBreadcrumbItem shape">
              <CodeBlock language="ts" code={`interface ArvoBreadcrumbItem {
  label: string;       // Item text. Empty string for icon-only items.
  href?: string;       // Destination URL. Omit for the current page item.
  icon?: string;       // Icon name (without o9con- prefix). Typically 'home' for the first item.
}`} />
            </DocSection>
            <DocSection id="css-vars" title="CSS variables"><CssVarsGrid groups={CSS_VARS} /></DocSection>
            <DocSection id="methods" title="Methods (JS)">
              <MethodsTable rows={[
                { method: 'ArvoBreadcrumb.initialize(el, options)', returns: 'ArvoBreadcrumb', desc: 'Factory.' },
                { method: 'setItems(items)', desc: 'Replace all breadcrumb items.' },
                { method: 'disabled(state?)', returns: 'boolean | void', desc: 'Get/set disabled state.' },
                { method: 'setLoading(b)', desc: 'Toggle loading state.' },
                { method: 'destroy()', desc: 'Tear down.' },
              ]} />
            </DocSection>
            <DocSection id="events" title="Custom events (JS)">
              <EventsTable rows={[{ event: 'bc:navigate', payload: '{ href: string, index: number, label: string }', desc: 'Fires on breadcrumb link click.' }]} />
            </DocSection>
          </div>
        )}

        {tab === 'Accessibility' && (
          <div className="space-y-12">
            <DocSection id="keyboard" title="Keyboard">
              <KeyboardTable rows={[
                { key: 'Tab / Shift+Tab', action: 'Move focus across navigable links.' },
                { key: 'Enter', action: 'Activate the focused breadcrumb link.' },
              ]} />
            </DocSection>
            <DocSection id="aria" title="ARIA">
              <AriaTable rows={[
                { attr: 'aria-label="Breadcrumb"', when: 'Set on the <nav> element.' },
                { attr: 'aria-current="page"', when: 'Set on the last breadcrumb item.' },
                { attr: 'aria-disabled', when: 'Set to "true" on disabled links.' },
                { attr: 'aria-busy', when: 'Set during loading state.' },
              ]} />
            </DocSection>
            <DocSection id="pattern" title="WAI-ARIA pattern">
              <DocList items={[
                <span key="1"><DocCode>{`<nav>`}</DocCode> landmark with <DocCode>aria-label="Breadcrumb"</DocCode>.</span>,
                <span key="2"><DocCode>{`<ol>`}</DocCode> provides ordered list semantics.</span>,
                <span key="3">Last item uses <DocCode>aria-current="page"</DocCode> and is a non-interactive <DocCode>{`<span>`}</DocCode>.</span>,
                <span key="4">Separator <DocCode>/</DocCode> is CSS-generated and hidden from assistive technology.</span>,
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
