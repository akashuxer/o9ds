import { useState, useMemo } from 'react'
import { ArvoButtonLink } from '@arvo/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocSection, { DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import { PropsTable, KeyboardTable, AriaTable, LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'
import { getDescriptor } from '../../../data/componentDescriptors.generated'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const DESCRIPTOR = getDescriptor('button-link')
const PROPS = DESCRIPTOR.props


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
                <ArvoButtonLink href="#" label="Primary" variant="primary" />
                <ArvoButtonLink href="#" label="Secondary" variant="secondary" />
                <ArvoButtonLink href="#" label="Tertiary" variant="tertiary" />
                <ArvoButtonLink href="#" label="With icon" icon="arrow-right" variant="primary" />
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
              <CodeBlock language="tsx" label="@arvo/react" code={`import { ArvoButtonLink } from '@arvo/react';

<ArvoButtonLink href="/page" label="Go to Page" variant="primary" />
<ArvoButtonLink href="/page" label="Navigate" icon="arrow-right" variant="secondary" />
<ArvoButtonLink href="/page" label="Unavailable" isDisabled />
<ArvoButtonLink href="/page" label="Loading..." isLoading />
<ArvoButtonLink href="https://example.com" label="External" target="_blank" />`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@arvo/js" code={`import { ArvoButtonLink } from '@arvo/js';

const lnk = ArvoButtonLink.initialize(el, {
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
