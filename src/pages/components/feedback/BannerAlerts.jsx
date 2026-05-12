import { useState, useMemo } from 'react'
import { ArvoBannerAlert, ArvoLink } from '@arvo/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import GrayBgCard from '../../../LayoutComponents/GrayBgCard'
import WhiteBgCard from '../../../LayoutComponents/WhiteBgCard'
import DocSection, { DocCallout, DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import {
  PropsTable,
  CssVarsGrid,
  KeyboardTable,
  AriaTable,
  MethodsTable,
  EventsTable,
  SimpleTable,
  LiveReference,
} from '../../../LayoutComponents/ComponentDocPrimitives'
import { getDescriptor } from '../../../data/componentDescriptors.generated'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const DESCRIPTOR = getDescriptor('banner-alert')
const PROPS = DESCRIPTOR?.props ?? []
const CSS_VARS = DESCRIPTOR?.cssVarGroups ?? []
const METHODS = DESCRIPTOR?.methods ?? []
const EVENTS = DESCRIPTOR?.events ?? []
const KEYBOARD = DESCRIPTOR?.keyboard ?? []
const ARIA = DESCRIPTOR?.aria ?? []

const TYPE_ROWS = [
  ['positive', '--arvo-color-b-positive', '--arvo-color-t-positive', 'check-circle'],
  ['info', '--arvo-color-b-info', '--arvo-color-t-info-dark', 'info-circle-filled'],
  ['neutral', '--arvo-color-b-neutral', '--arvo-color-t-neutral', 'speaker'],
  ['warning', '--arvo-color-b-warning', '--arvo-color-t-warning', 'exclamation-triangle-filled'],
  ['negative', '--arvo-color-b-negative', '--arvo-color-t-negative', 'blocker-action-filled-alt'],
  ['block', '--arvo-color-b-negative', '--arvo-color-t-negative', 'blocker-action-filled (14px)'],
]

const LAYOUT_ROWS = [
  ['Default', 'Title + message + optional link', '16px block', 'Standard page-level alerts'],
  ['Compact (isCompact)', 'Message only', '8px block', 'Panel-shell banner slot, constrained vertical space'],
]

export default function BannerAlerts() {
  const [tab, setTab] = useState('Overview')

  const sections = useMemo(() => {
    if (tab === 'Overview') return [
      { id: 'purpose', label: 'Purpose' },
      { id: 'anatomy', label: 'Anatomy' },
      { id: 'types', label: 'Types' },
      { id: 'layout', label: 'Layout modes' },
      { id: 'states', label: 'States' },
      { id: 'dos-donts', label: 'Dos & Don\'ts' },
    ]
    if (tab === 'Usage') return [
      { id: 'when', label: 'When to use' },
      { id: 'when-not', label: 'When not to use' },
      { id: 'placement', label: 'Placement' },
      { id: 'best-practices', label: 'Best practices' },
    ]
    if (tab === 'Code/APIs') return [
      { id: 'react', label: 'React' },
      { id: 'js', label: 'Vanilla JS' },
      { id: 'props', label: 'Props' },
      { id: 'css-vars', label: 'CSS variables' },
      { id: 'types-table', label: 'Type reference' },
      { id: 'methods', label: 'Methods (JS)' },
      { id: 'events', label: 'Custom events (JS)' },
    ]
    if (tab === 'Accessibility') return [
      { id: 'keyboard', label: 'Keyboard interactions' },
      { id: 'aria', label: 'ARIA attributes' },
      { id: 'focus', label: 'Focus' },
    ]
    return []
  }, [tab])

  return (
    <PageWithToc sections={sections}>
      <div className="space-y-8">
        <PageHeader
          title="Banner Alert"
          description="Full-width banner for persistent contextual feedback. Six semantic types, two layout modes, optional link, and an optional dismiss button."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6h18v4H3V6zm0 8h18v4H3v-4z" /></svg>}
        />

        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>
                Banner Alerts give users persistent, page- or section-level feedback that needs to stay visible until the user reads it or acts on it. Use them for system messages, confirmations after a navigation, blocked workflows, and quota or maintenance warnings — anything more durable than a Toast and more visible than a Badge Alert.
              </DocParagraph>
            </DocSection>

            <DocSection id="anatomy" title="Anatomy">
              <DocParagraph>
                A horizontal bar with a colored left border, a type-specific icon, and a content area containing an optional <DocStrong>title</DocStrong>, a required <DocStrong>message</DocStrong>, and an optional <DocStrong>link</DocStrong>. Optionally dismissible via a close button on the trailing edge.
              </DocParagraph>
              <LiveReference>
                <ArvoBannerAlert
                  type="info"
                  title="System update"
                  message="A new version of the planner is available."
                  link={<ArvoLink label="See what's new" href="#" size="sm" />}
                />
              </LiveReference>
            </DocSection>

            <DocSection id="types" title="Types">
              <DocParagraph>Six semantic types control border color, background tint, title and icon color, and the icon glyph. Pick by intent — never by visual preference.</DocParagraph>
              <div className="space-y-3">
                <ArvoBannerAlert type="positive" title="Saved" message="Your changes have been saved." />
                <ArvoBannerAlert type="info" title="Heads up" message="A new release rolls out tonight." />
                <ArvoBannerAlert type="neutral" title="Maintenance window" message="Read-only access between 02:00 and 03:00 UTC." />
                <ArvoBannerAlert type="warning" title="Low storage" message="You are approaching your storage quota." />
                <ArvoBannerAlert type="negative" title="Connection lost" message="We can't reach the server." />
                <ArvoBannerAlert type="block" title="Action blocked" message="You do not have permission to publish this scenario." />
              </div>
            </DocSection>

            <DocSection id="layout" title="Layout modes">
              <SimpleTable columns={['Mode', 'Content', 'Padding', 'Use case']} rows={LAYOUT_ROWS} />
              <LiveReference>
                <ArvoBannerAlert type="info" title="Default" message="Title plus message plus optional link." link={<ArvoLink label="Learn more" href="#" size="sm" />} />
                <ArvoBannerAlert type="warning" message="Compact: message only, tighter padding." isCompact />
              </LiveReference>
            </DocSection>

            <DocSection id="states" title="States">
              <ul className="list-disc pl-5 space-y-2 text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><DocStrong>Default</DocStrong> — visible and persistent until the user dismisses or the consumer removes it.</li>
                <li><DocStrong>Loading</DocStrong> — Pattern A skeleton shimmer covers the banner; <DocCode>aria-busy="true"</DocCode> and pointer events are suppressed.</li>
                <li><DocStrong>Dismissed</DocStrong> — fires <DocCode>onDismiss</DocCode> / <DocCode>bnr-alert:dismiss</DocCode>; the consumer is responsible for removing the element.</li>
              </ul>
            </DocSection>

            <DocSection id="dos-donts" title="Dos & Don'ts">
              <div className="grid gap-4 sm:grid-cols-2">
                <GrayBgCard title="Do" bullets={[
                  'Use the type that matches user intent (positive, info, warning, negative, block).',
                  'Pair negative or block banners with a clear next-step link.',
                  'Use compact mode when the banner sits inside a panel or constrained surface.',
                ]} />
                <WhiteBgCard title="Don't" bullets={[
                  'Stack three or more banners — combine into a single message or use the most critical one.',
                  'Use Banner Alert for transient confirmations — use Toast.',
                  'Use it as a replacement for a destructive confirmation dialog.',
                ]} />
              </div>
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'Page-level system messages (incident notice, scheduled maintenance, version mismatch).',
                'Persistent confirmations after a navigation (e.g. "Plan saved" on the planning view).',
                'Blocked workflows that need an explanation and a next step.',
                'Quota or expiry warnings that should stay visible until the user acts.',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">Transient feedback after a click — use <DocStrong>Toast</DocStrong>.</span>,
                <span key="2">Inline form-field validation — use the field's <DocStrong>Message Alert</DocStrong> via <DocCode>errorMsg</DocCode>.</span>,
                <span key="3">Compact inline status indicators next to other content — use <DocStrong>Badge Alert</DocStrong>.</span>,
                <span key="4">Decisions that require a confirmation — use an <DocStrong>Alert Dialog</DocStrong>.</span>,
              ]} />
            </DocSection>
            <DocSection id="placement" title="Placement">
              <DocList items={[
                'Page level: directly under the page header, above primary content. One banner per region.',
                'Panel / section level: pinned to the top of the panel, above its scroll area. Use compact mode.',
                'Avoid placing banners inside scrollable content — they should remain visible.',
              ]} />
            </DocSection>
            <DocSection id="best-practices" title="Best practices">
              <DocList items={[
                'Lead with what happened (title), then what to do (message + link).',
                'Use the role override sparingly — defaults already pick polite vs assertive correctly.',
                'For dismissible banners, persist the dismissal at the right scope (per session, per user, per release).',
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@arvo/react" code={`import { ArvoBannerAlert, ArvoLink } from '@arvo/react';

<ArvoBannerAlert
  type="info"
  title="System update"
  message="A new version is available."
/>

<ArvoBannerAlert
  type="negative"
  title="Connection lost"
  message="We can't reach the server."
  link={<ArvoLink label="View status" href="/status" size="sm" />}
  onDismiss={() => setVisible(false)}
/>

<ArvoBannerAlert type="warning" message="Approaching storage quota." isCompact />

<ArvoBannerAlert type="positive" title="Saved" message="Your changes have been saved." isDismissible={false} />

<ArvoBannerAlert type="info" title="Checking status" message="Verifying connectivity..." isLoading />`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@arvo/js" code={`import { ArvoBannerAlert } from '@arvo/js';

const banner = ArvoBannerAlert.initialize(host, {
  type: 'negative',
  title: 'Connection lost',
  message: 'We cannot reach the server. Check your network.',
  isDismissible: true,
  onDismiss: () => host.remove(),
});

host.addEventListener('bnr-alert:dismiss', () => {
  console.log('Banner dismissed');
});

banner.type('warning');
banner.message('Network unstable');
banner.title('Degraded connectivity');
banner.loading(true);
banner.destroy();`} />
            </DocSection>
            <DocSection id="props" title="Props"><PropsTable rows={PROPS} /></DocSection>
            <DocSection id="css-vars" title="CSS variables">
              <DocParagraph>Override on <DocCode>.arvo-bnr-alert</DocCode> or any parent. Only the four color tokens below change per type modifier; layout and typography are static.</DocParagraph>
              <CssVarsGrid groups={CSS_VARS} />
            </DocSection>
            <DocSection id="types-table" title="Type reference">
              <SimpleTable columns={['Type', 'Border token', 'Title / icon token', 'Icon glyph']} rows={TYPE_ROWS} />
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
            <DocSection id="keyboard" title="Keyboard interactions">
              <KeyboardTable rows={KEYBOARD.length ? KEYBOARD : [
                { key: 'Tab', action: 'Move focus to the link (if present), then to the close button (if dismissible).' },
                { key: 'Enter', action: 'Activate the focused link or close button.' },
                { key: 'Space', action: 'Activate the focused close button.' },
              ]} />
            </DocSection>
            <DocSection id="aria" title="ARIA attributes">
              <DocParagraph><DocCode>role</DocCode> defaults to <DocCode>status</DocCode> (polite) for positive, info, neutral, and warning, and to <DocCode>alert</DocCode> (assertive) for negative and block. Override via the <DocCode>role</DocCode> prop only when the default does not match the urgency.</DocParagraph>
              <AriaTable rows={ARIA.length ? ARIA : [
                { attr: 'role="status" / role="alert"', when: 'Set automatically based on type. Override via the role prop.' },
                { attr: 'aria-busy', when: 'Set to "true" during loading state.' },
                { attr: 'aria-hidden', when: 'Applied to the decorative icon element.' },
                { attr: 'aria-label', when: '"Dismiss alert" on the close button.' },
              ]} />
            </DocSection>
            <DocSection id="focus" title="Focus">
              <DocList items={[
                'The close button shows a visible focus ring on :focus-visible.',
                'The icon is purely decorative (aria-hidden="true"); the title + message convey meaning.',
                'For dynamic banners that appear after page load, the live-region role ensures screen reader announcement.',
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
