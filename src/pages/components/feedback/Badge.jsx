import { useState, useMemo } from 'react'
import { O9BadgeAlert } from '@o9ds/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocSection, { DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import { PropsTable, KeyboardTable, AriaTable, MethodsTable, EventsTable, LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const PROPS = [
  { prop: 'type', type: "'info' | 'success' | 'warning' | 'danger'", default: "'info'", desc: 'Tone semantic — drives the role between alert and status.' },
  { prop: 'variant', type: "'subtle' | 'solid'", default: "'subtle'", desc: 'Visual weight.' },
  { prop: 'size', type: "'sm' | 'md'", default: "'md'", desc: 'Size.' },
  { prop: 'title', type: 'string', desc: 'Heading content (optional).' },
  { prop: 'description', type: 'string | ReactNode', required: 'Yes', desc: 'Body content describing the alert.' },
  { prop: 'icon', type: 'string', desc: 'Override the default icon for this type.' },
  { prop: 'actions', type: 'BadgeAlertAction[]', desc: 'Inline actions: { id, label, onClick }.' },
  { prop: 'dismissible', type: 'boolean', default: 'false', desc: 'Show a close button.' },
  { prop: 'onDismiss', type: '() => void', desc: 'Fires when the user dismisses the alert.' },
]

export default function Badge() {
  const [tab, setTab] = useState('Overview')
  const sections = useMemo(() => {
    if (tab === 'Overview') return [{ id: 'purpose', label: 'Purpose' }, { id: 'demo', label: 'Live demo' }]
    if (tab === 'Usage') return [{ id: 'when', label: 'When to use' }, { id: 'when-not', label: 'When not to use' }]
    if (tab === 'Code/APIs') return [{ id: 'react', label: 'React' }, { id: 'js', label: 'Vanilla JS' }, { id: 'props', label: 'Props' }, { id: 'methods', label: 'Methods (JS)' }, { id: 'events', label: 'Events (JS)' }]
    if (tab === 'Accessibility') return [{ id: 'roles', label: 'Roles & live regions' }, { id: 'keyboard', label: 'Keyboard' }, { id: 'aria', label: 'ARIA' }]
    return []
  }, [tab])

  return (
    <PageWithToc sections={sections}>
      <div className="space-y-8">
        <PageHeader
          title="Badge Alert"
          description="Inline alert badge with four tones (info, success, warning, danger), two visual weights, optional title, actions, and dismissal. Live-region wired so screen readers hear changes."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>Use Badge Alert for inline messages adjacent to or above the content they describe — form validation summaries, contextual notes, system status banners. For ephemeral confirmations use <DocStrong>Toast</DocStrong>.</DocParagraph>
            </DocSection>
            <DocSection id="demo" title="Live demo">
              <LiveReference>
                <O9BadgeAlert type="info" message="Heads up — the system will be down on Sunday." />
                <O9BadgeAlert type="positive" message="Changes saved successfully." />
                <O9BadgeAlert type="warning" message="Your session expires in 5 minutes." />
                <O9BadgeAlert type="negative" message="Failed to save changes." />
              </LiveReference>
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'Inline status messages adjacent to or above the related content.',
                'Form validation summaries (multiple errors collapsed into one alert).',
                'System banners (maintenance windows, plan limits).',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">Per-field validation errors — use the <DocCode>error</DocCode> prop on the field component.</span>,
                <span key="2">Ephemeral confirmations — use <DocStrong>Toast</DocStrong>.</span>,
                <span key="3">Modal confirmations — use a Popover with footer actions.</span>,
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@o9ds/react" code={`import { O9BadgeAlert } from '@o9ds/react';

<O9BadgeAlert type="info" description="The system will be down on Sunday." />

<O9BadgeAlert
  type="success"
  title="Saved"
  description="Your changes have been published."
/>

<O9BadgeAlert
  type="danger"
  title="Failed to save"
  description="Try again or contact support."
  actions={[{ id: 'retry', label: 'Retry', onClick: () => retry() }]}
  dismissible
  onDismiss={() => hide()}
/>`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@o9ds/js" code={`import { O9BadgeAlert } from '@o9ds/js';

const alert = O9BadgeAlert.initialize(el, {
  type: 'success',
  title: 'Saved',
  description: 'Your changes have been published.',
  dismissible: true,
  onDismiss: () => hide(),
});

alert.update({ type: 'danger', title: 'Failed' });
alert.dismiss();
alert.destroy();`} />
            </DocSection>
            <DocSection id="props" title="Props"><PropsTable rows={PROPS} /></DocSection>
            <DocSection id="methods" title="Methods (JS)">
              <MethodsTable rows={[
                { method: 'O9BadgeAlert.initialize(el, options)', returns: 'O9BadgeAlert', desc: 'Factory.' },
                { method: 'update(partial)', desc: 'Update type, title, description, actions, etc.' },
                { method: 'dismiss()', desc: 'Programmatically dismiss the alert.' },
                { method: 'destroy()', desc: 'Tear down.' },
              ]} />
            </DocSection>
            <DocSection id="events" title="Custom events (JS)">
              <EventsTable rows={[{ event: 'bdg-alert:dismiss', payload: '—', desc: 'Fires when the user dismisses the alert.' }]} />
            </DocSection>
          </div>
        )}

        {tab === 'Accessibility' && (
          <div className="space-y-12">
            <DocSection id="roles" title="Roles & live regions">
              <DocList items={[
                <span key="1"><DocStrong>danger</DocStrong> tone uses <DocCode>role="alert"</DocCode> (assertive live region) — interrupts current speech.</span>,
                <span key="2"><DocStrong>info / success / warning</DocStrong> use <DocCode>role="status"</DocCode> (polite live region) — announced when the screen reader pauses.</span>,
                <span key="3">Use the matching tone semantically — don't escalate info to alert just for visual emphasis.</span>,
              ]} />
            </DocSection>
            <DocSection id="keyboard" title="Keyboard">
              <KeyboardTable rows={[
                { key: 'Tab / Shift+Tab', action: 'Move focus to inline actions and the dismiss button.' },
                { key: 'Enter / Space', action: 'Activate the focused action or dismiss button.' },
              ]} />
            </DocSection>
            <DocSection id="aria" title="ARIA">
              <AriaTable rows={[
                { attr: 'role="alert" / role="status"', when: 'Driven by tone; do not override.' },
                { attr: 'aria-labelledby', when: 'Points at the title element when title is set.' },
                { attr: 'aria-describedby', when: 'Points at the description.' },
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
