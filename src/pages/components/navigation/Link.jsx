import { useState, useMemo } from 'react'
import { O9Link } from '@o9ds/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocSection, { DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import { PropsTable, CssVarsGrid, KeyboardTable, AriaTable, MethodsTable, EventsTable, SimpleTable, LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const PROPS = [
  { prop: 'label', type: 'string', required: 'Yes', desc: 'Link text content.' },
  { prop: 'href', type: 'string', required: 'Yes', desc: 'Destination URL.' },
  { prop: 'variant', type: "'primary' | 'secondary'", default: "'primary'", desc: 'Visual style variant.' },
  { prop: 'size', type: "'sm' | 'lg'", default: "'lg'", desc: 'Font size (sm=12px, lg=14px). Icon stays 16px.' },
  { prop: 'icon', type: 'string', default: 'undefined', desc: 'Leading icon name without o9con- prefix.' },
  { prop: 'external', type: 'boolean', default: 'false', desc: 'Show trailing external icon and auto-set target="_blank".' },
  { prop: 'target', type: 'string', default: 'undefined', desc: 'Native target attribute.' },
  { prop: 'isDisabled', type: 'boolean', default: 'false', desc: 'Prevent navigation. Removes href, adds aria-disabled.' },
  { prop: 'visited', type: 'boolean', default: 'false', desc: 'Apply visited color (utility-purple).' },
  { prop: 'isLoading', type: 'boolean', default: 'false', desc: 'Show skeleton shimmer overlay.' },
  { prop: 'onClick', type: '(event) => void', default: 'undefined', desc: 'Click handler.' },
]

const CSS_VARS = [
  { category: 'Layout', vars: ['--o9ds-lnk-gap'] },
  { category: 'Typography', vars: ['--o9ds-lnk-font-size', '--o9ds-lnk-font-weight', '--o9ds-lnk-line-height'] },
  { category: 'Icon', vars: ['--o9ds-lnk-icon-size'] },
  { category: 'Color', vars: ['--o9ds-lnk-text-color', '--o9ds-lnk-icon-color'] },
]

export default function Link() {
  const [tab, setTab] = useState('Overview')
  const sections = useMemo(() => {
    if (tab === 'Overview') return [{ id: 'purpose', label: 'Purpose' }, { id: 'variants', label: 'Variants' }, { id: 'sizes', label: 'Sizes' }]
    if (tab === 'Usage') return [{ id: 'when', label: 'When to use' }, { id: 'when-not', label: 'When not to use' }]
    if (tab === 'Code/APIs') return [{ id: 'react', label: 'React' }, { id: 'js', label: 'Vanilla JS' }, { id: 'props', label: 'Props' }, { id: 'css-vars', label: 'CSS variables' }, { id: 'sizes-table', label: 'Sizes' }, { id: 'methods', label: 'Methods (JS)' }, { id: 'events', label: 'Events (JS)' }]
    if (tab === 'Accessibility') return [{ id: 'keyboard', label: 'Keyboard' }, { id: 'aria', label: 'ARIA' }, { id: 'focus', label: 'Focus' }]
    return []
  }, [tab])

  return (
    <PageWithToc sections={sections}>
      <div className="space-y-8">
        <PageHeader
          title="Link"
          description="Inline navigational anchor for linking to internal pages, external URLs, or downloadable resources. Renders as an <a> element with optional leading icon and trailing external-link indicator."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>}
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>
                Use Link for inline text-style navigation. For navigation that needs the visual affordance of a button (filled background, padding), use <DocStrong>Button Link</DocStrong> instead.
              </DocParagraph>
            </DocSection>
            <DocSection id="variants" title="Variants">
              <LiveReference>
                <O9Link href="#" label="Primary link" />
                <O9Link href="#" label="Secondary link" variant="secondary" />
                <O9Link href="#" label="With icon" icon="settings" />
                <O9Link href="https://example.com" label="External link" isExternal />
              </LiveReference>
            </DocSection>
            <DocSection id="sizes" title="Sizes">
              <LiveReference>
                <O9Link href="#" label="Small (12px)" size="sm" />
                <O9Link href="#" label="Large (14px)" size="lg" />
              </LiveReference>
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'Inline references to other pages or content within prose.',
                'Subdued contextual navigation in dense content areas (secondary variant).',
                'Linking to external resources — set the external prop for the trailing icon and safe target/rel.',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">For action triggers — use <DocStrong>Button</DocStrong>.</span>,
                <span key="2">When the navigation needs a button affordance — use <DocStrong>Button Link</DocStrong>.</span>,
                <span key="3">For icon-only navigation — use <DocStrong>Icon Button Link</DocStrong>.</span>,
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@o9ds/react" code={`import { O9Link } from '@o9ds/react';

<O9Link href="/page" label="Learn more" />
<O9Link href="/page" label="Settings" icon="settings" />
<O9Link href="https://example.com" label="Visit site" external />
<O9Link href="/page" label="Details" variant="secondary" />
<O9Link href="/page" label="Unavailable" isDisabled />`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@o9ds/js" code={`import { O9Link } from '@o9ds/js';

const lnk = O9Link.initialize(el, {
  variant: 'primary',
  href: '/page',
  label: 'Learn more',
  icon: 'arrow-right',
  onClick: (event) => console.log('clicked', event),
});

lnk.setLabel('Updated');
lnk.setIcon('check');
lnk.setIcon(null);            // remove icon
lnk.setExternal(true);
lnk.disabled(true);
lnk.destroy();`} />
            </DocSection>
            <DocSection id="props" title="Props"><PropsTable rows={PROPS} /></DocSection>
            <DocSection id="css-vars" title="CSS variables"><CssVarsGrid groups={CSS_VARS} /></DocSection>
            <DocSection id="sizes-table" title="Size reference">
              <SimpleTable columns={['Size', 'Font', 'Icon']} rows={[['sm', '12px', '16px'], ['lg', '14px', '16px']]} />
            </DocSection>
            <DocSection id="methods" title="Methods (JS)">
              <MethodsTable rows={[
                { method: 'O9Link.initialize(el, options)', returns: 'O9Link', desc: 'Factory.' },
                { method: 'setLabel(text)', desc: 'Update link label.' },
                { method: 'setHref(href)', desc: 'Update destination URL.' },
                { method: 'setIcon(name | null)', desc: 'Set or remove the leading icon.' },
                { method: 'setExternal(b)', desc: 'Toggle external link behavior.' },
                { method: 'setLoading(b)', desc: 'Toggle loading state.' },
                { method: 'disabled(state?)', returns: 'boolean | void', desc: 'Get/set disabled state.' },
                { method: 'focus()', desc: 'Focus the link.' },
                { method: 'destroy()', desc: 'Tear down.' },
              ]} />
            </DocSection>
            <DocSection id="events" title="Custom events (JS)">
              <EventsTable rows={[{ event: 'lnk:click', payload: '{ href: string, external: boolean }', desc: 'Fires on link click.' }]} />
            </DocSection>
          </div>
        )}

        {tab === 'Accessibility' && (
          <div className="space-y-12">
            <DocSection id="keyboard" title="Keyboard">
              <KeyboardTable rows={[
                { key: 'Enter', action: 'Activate the link (navigate to href).' },
                { key: 'Tab / Shift+Tab', action: 'Move focus.' },
              ]} />
            </DocSection>
            <DocSection id="aria" title="ARIA">
              <AriaTable rows={[
                { attr: 'aria-disabled', when: 'Set to "true" when disabled. Element remains focusable.' },
                { attr: 'aria-busy', when: 'Automatically set during loading state.' },
                { attr: 'aria-current', when: 'Set to "page" when representing the current page (consumer-managed).' },
                { attr: 'aria-describedby', when: 'Optional reference to a supplementary description element.' },
              ]} />
            </DocSection>
            <DocSection id="focus" title="Focus">
              <DocList items={[
                <span key="1">Focus ring uses <DocCode>outline: 1px solid var(--o9ds-color-b-theme-focus)</DocCode> around the full link content area.</span>,
                <span key="2">Disabled links remain focusable (aria-disabled pattern) so screen reader users can discover them.</span>,
                <span key="3">Hover styles scoped to <DocCode>.no-touch</DocCode>.</span>,
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
