import { useState, useMemo } from 'react'
import { O9IconButtonLink } from '@o9ds/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocSection, { DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import { PropsTable, KeyboardTable, AriaTable, LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const PROPS = [
  { prop: 'icon', type: 'string', required: 'Yes', desc: 'Icon name without o9con- prefix.' },
  { prop: 'href', type: 'string', required: 'Yes', desc: 'Destination URL.' },
  { prop: 'tooltip', type: 'string', required: 'Yes', desc: 'Accessible label and hover tooltip. Maps to aria-label and title.' },
  { prop: 'variant', type: "'primary' | 'secondary' | 'tertiary' | 'outline' | 'danger'", default: "'primary'", desc: 'Visual style variant.' },
  { prop: 'size', type: "'xs' | 'sm' | 'md' | 'lg'", default: "'md'", desc: 'Size.' },
  { prop: 'target', type: 'string', default: 'undefined', desc: 'Native target attribute. Auto-adds rel when _blank.' },
  { prop: 'isDisabled', type: 'boolean', default: 'false', desc: 'Prevent navigation.' },
  { prop: 'isLoading', type: 'boolean', default: 'false', desc: 'Skeleton shimmer overlay.' },
  { prop: 'onClick', type: '(event) => void', default: 'undefined', desc: 'Click handler.' },
]

export default function IconButtonLink() {
  const [tab, setTab] = useState('Overview')
  const sections = useMemo(() => {
    if (tab === 'Overview') return [{ id: 'purpose', label: 'Purpose' }, { id: 'demo', label: 'Live demo' }]
    if (tab === 'Usage') return [{ id: 'when', label: 'When to use' }, { id: 'when-not', label: 'When not to use' }]
    if (tab === 'Code/APIs') return [{ id: 'react', label: 'React' }, { id: 'js', label: 'Vanilla JS' }, { id: 'props', label: 'Props' }]
    if (tab === 'Accessibility') return [{ id: 'keyboard', label: 'Keyboard' }, { id: 'aria', label: 'ARIA' }]
    return []
  }, [tab])

  return (
    <PageWithToc sections={sections}>
      <div className="space-y-8">
        <PageHeader
          title="Icon Button Link"
          description="An anchor element styled identically to Icon Button — visually a square icon-only button but navigates like a link. Uses the same variants, sizes, and visual states as Icon Button."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>}
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>
                Use this for compact icon-only navigation affordances (external link shortcuts, navigation icons). Both <DocCode>icon</DocCode> and <DocCode>tooltip</DocCode> are required so the link is discoverable to assistive tech.
              </DocParagraph>
            </DocSection>
            <DocSection id="demo" title="Live demo">
              <LiveReference>
                <O9IconButtonLink href="#" icon="external-link" tooltip="Open" />
                <O9IconButtonLink href="#" icon="arrow-right" tooltip="Navigate" variant="secondary" />
                <O9IconButtonLink href="#" icon="settings" tooltip="Settings" variant="tertiary" size="sm" />
                <O9IconButtonLink href="https://example.com" icon="external-link" tooltip="External" target="_blank" />
              </LiveReference>
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'Compact icon-only navigation in toolbars.',
                'External link shortcuts in cards or rows.',
                'Persistent navigation icons inside small UI surfaces.',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">For action triggers (toggle, open overlay) — use <DocStrong>Icon Button</DocStrong>.</span>,
                <span key="2">When a visible label is needed alongside the button styling — use <DocStrong>Button Link</DocStrong>.</span>,
                <span key="3">For inline text-style navigation — use <DocStrong>Link</DocStrong>.</span>,
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@o9ds/react" code={`import { O9IconButtonLink } from '@o9ds/react';

<O9IconButtonLink href="/page" icon="external-link" tooltip="Open" />
<O9IconButtonLink href="/page" icon="arrow-right" tooltip="Navigate" variant="secondary" />
<O9IconButtonLink href="/page" icon="external-link" tooltip="Disabled" isDisabled />
<O9IconButtonLink href="https://example.com" icon="external-link" tooltip="External" target="_blank" />`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@o9ds/js" code={`import { O9IconButtonLink } from '@o9ds/js';

const lnk = O9IconButtonLink.initialize(el, {
  variant: 'secondary',
  icon: 'external-link',
  href: '/page',
  tooltip: 'Open link',
});

lnk.setIcon('arrow-right');
lnk.setTooltip('Navigate');
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
              <DocParagraph><DocStrong>Element:</DocStrong> Renders <DocCode>{`<a>`}</DocCode>, not <DocCode>{`<button>`}</DocCode>. Screen readers announce it as a link. <DocCode>aria-label</DocCode> is required from the tooltip prop — no visible text label exists.</DocParagraph>
              <AriaTable rows={[
                { attr: 'aria-label', when: 'Always set via tooltip prop. Required.' },
                { attr: 'aria-disabled', when: 'Set to "true" when disabled; href removed; element remains focusable.' },
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
