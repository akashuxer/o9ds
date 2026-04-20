import { useState, useMemo } from 'react'
import { O9ButtonLink } from '@o9ds/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocSection, { DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import { PropsTable, KeyboardTable, AriaTable, LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const PROPS = [
  { prop: 'label', type: 'string', required: 'Yes', desc: 'Link text content.' },
  { prop: 'href', type: 'string', required: 'Yes', desc: 'Destination URL.' },
  { prop: 'variant', type: "'primary' | 'secondary' | 'tertiary' | 'outline' | 'danger'", default: "'primary'", desc: 'Visual style variant.' },
  { prop: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", desc: 'Size.' },
  { prop: 'icon', type: 'string', default: 'undefined', desc: 'Leading icon name without o9con- prefix.' },
  { prop: 'target', type: 'string', default: 'undefined', desc: 'Native target attribute. Auto-adds rel when _blank.' },
  { prop: 'isDisabled', type: 'boolean', default: 'false', desc: 'Prevent navigation. Uses aria-disabled + .is-disabled.' },
  { prop: 'isFullWidth', type: 'boolean', default: 'false', desc: 'Expand to fill container width.' },
  { prop: 'isLoading', type: 'boolean', default: 'false', desc: 'Skeleton shimmer overlay.' },
  { prop: 'tooltip', type: 'string', default: 'undefined', desc: 'Supplementary hover text via title.' },
  { prop: 'onClick', type: '(event) => void', default: 'undefined', desc: 'Click handler.' },
]

export default function ButtonLink() {
  const [tab, setTab] = useState('Overview')
  const sections = useMemo(() => {
    if (tab === 'Overview') return [{ id: 'purpose', label: 'Purpose' }, { id: 'demo', label: 'Variants' }]
    if (tab === 'Usage') return [{ id: 'when', label: 'When to use' }, { id: 'when-not', label: 'When not to use' }]
    if (tab === 'Code/APIs') return [{ id: 'react', label: 'React' }, { id: 'js', label: 'Vanilla JS' }, { id: 'props', label: 'Props' }]
    if (tab === 'Accessibility') return [{ id: 'keyboard', label: 'Keyboard' }, { id: 'aria', label: 'ARIA' }]
    return []
  }, [tab])

  return (
    <PageWithToc sections={sections}>
      <div className="space-y-8">
        <PageHeader
          title="Button Link"
          description="An anchor element styled identically to Button — visually appears as a button but navigates like a link. Uses the same variants, sizes, and visual states as Button."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>}
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>
                Use Button Link for navigation actions that need the visual affordance of a button (CTA links, nav cards). Renders an <DocCode>{`<a>`}</DocCode> element. Screen readers announce it as a link.
              </DocParagraph>
            </DocSection>
            <DocSection id="demo" title="Variants">
              <LiveReference>
                <O9ButtonLink href="#" label="Primary" variant="primary" />
                <O9ButtonLink href="#" label="Secondary" variant="secondary" />
                <O9ButtonLink href="#" label="Tertiary" variant="tertiary" />
                <O9ButtonLink href="#" label="With icon" icon="arrow-right" variant="primary" />
              </LiveReference>
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'Navigation actions that need a button-like visual affordance.',
                'Primary CTA links (Get started, View pricing).',
                'Card-style navigation tiles.',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">Inline text-style navigation — use <DocStrong>Link</DocStrong>.</span>,
                <span key="2">Form submits or interactive actions — use <DocStrong>Button</DocStrong>.</span>,
                <span key="3">Icon-only navigation — use <DocStrong>Icon Button Link</DocStrong>.</span>,
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@o9ds/react" code={`import { O9ButtonLink } from '@o9ds/react';

<O9ButtonLink href="/page" label="Go to Page" variant="primary" />
<O9ButtonLink href="/page" label="Navigate" icon="arrow-right" variant="secondary" />
<O9ButtonLink href="/page" label="Unavailable" isDisabled />
<O9ButtonLink href="/page" label="Loading..." isLoading />
<O9ButtonLink href="https://example.com" label="External" target="_blank" />`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@o9ds/js" code={`import { O9ButtonLink } from '@o9ds/js';

const lnk = O9ButtonLink.initialize(el, {
  variant: 'primary',
  href: '/page',
  label: 'Go to Page',
});

lnk.setLabel('Updated');
lnk.setVariant('secondary');
lnk.setHref('/new-page');
lnk.disabled(true);
lnk.destroy();`} />
            </DocSection>
            <DocSection id="props" title="Props"><PropsTable rows={PROPS} /></DocSection>
          </div>
        )}

        {tab === 'Accessibility' && (
          <div className="space-y-12">
            <DocSection id="keyboard" title="Keyboard">
              <KeyboardTable rows={[
                { key: 'Enter', action: 'Activate the link (navigate to href). Note: links do not respond to Space.' },
                { key: 'Tab / Shift+Tab', action: 'Move focus.' },
              ]} />
            </DocSection>
            <DocSection id="aria" title="ARIA">
              <DocParagraph><DocStrong>Element:</DocStrong> Renders <DocCode>{`<a>`}</DocCode>, not <DocCode>{`<button>`}</DocCode>. No <DocCode>role="button"</DocCode> override — semantic role is link.</DocParagraph>
              <AriaTable rows={[
                { attr: 'aria-disabled', when: 'Set to "true" when disabled; href is removed; element remains focusable.' },
                { attr: 'aria-busy', when: 'Set during loading state.' },
                { attr: 'aria-pressed', when: 'Not supported — links do not have toggle behavior.' },
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
