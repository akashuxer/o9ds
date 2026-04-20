import { useState, useMemo } from 'react'
import { useToast, O9Button } from '@o9ds/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocSection, { DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import { PropsTable, KeyboardTable, AriaTable, MethodsTable, EventsTable, LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const PROPS = [
  { prop: 'type', type: "'info' | 'success' | 'warning' | 'danger'", default: "'info'", desc: 'Tone semantic.' },
  { prop: 'title', type: 'string', desc: 'Heading content.' },
  { prop: 'description', type: 'string', desc: 'Body content.' },
  { prop: 'duration', type: 'number', default: '5000', desc: 'Auto-dismiss after N milliseconds. Set 0 for sticky.' },
  { prop: 'actions', type: 'ToastAction[]', desc: 'Inline actions: { label, onClick }.' },
  { prop: 'dismissible', type: 'boolean', default: 'true', desc: 'Show a close button.' },
  { prop: 'onDismiss', type: '() => void', desc: 'Fires when the toast is dismissed.' },
]

const PROVIDER_PROPS = [
  { prop: 'position', type: "'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'", default: "'top-right'", desc: 'Where the toast container mounts.' },
  { prop: 'max', type: 'number', default: '5', desc: 'Maximum visible toasts before older toasts are queued.' },
  { prop: 'gap', type: 'number', default: '8', desc: 'Pixel gap between stacked toasts.' },
]

export default function Toast() {
  const [tab, setTab] = useState('Overview')
  const toast = useToast?.() ?? null
  const sections = useMemo(() => {
    if (tab === 'Overview') return [{ id: 'purpose', label: 'Purpose' }, { id: 'demo', label: 'Live demo' }]
    if (tab === 'Usage') return [{ id: 'when', label: 'When to use' }, { id: 'when-not', label: 'When not to use' }]
    if (tab === 'Code/APIs') return [{ id: 'react', label: 'React' }, { id: 'js', label: 'Vanilla JS' }, { id: 'props', label: 'Props' }, { id: 'provider-props', label: 'Provider props' }, { id: 'methods', label: 'Methods (JS)' }, { id: 'events', label: 'Events (JS)' }]
    if (tab === 'Accessibility') return [{ id: 'live', label: 'Live region' }, { id: 'keyboard', label: 'Keyboard' }, { id: 'aria', label: 'ARIA' }]
    return []
  }, [tab])

  return (
    <PageWithToc sections={sections}>
      <div className="space-y-8">
        <PageHeader
          title="Toast"
          description="Ephemeral floating notification managed by O9ToastProvider. Use useToast() (React) or the singleton manager (JS) to push toasts from anywhere in the app."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>}
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>Use Toast for non-blocking confirmations or status updates that should auto-dismiss. The provider manages the container, stack order, and timing — you only push toasts.</DocParagraph>
            </DocSection>
            <DocSection id="demo" title="Live demo">
              <LiveReference>
                <O9Button label="Show success toast" onClick={() => toast?.success?.({ title: 'Saved', description: 'Your changes were published.' })} />
                <O9Button label="Show danger toast" variant="danger" onClick={() => toast?.danger?.({ title: 'Failed', description: 'Could not save.' })} />
              </LiveReference>
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'Confirmations of completed async actions ("Saved", "Sent", "Copied").',
                'System status notifications that should not block the user.',
                'Background updates ("New version available") with an inline action.',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">For persistent or critical errors — use <DocStrong>Badge Alert</DocStrong>.</span>,
                <span key="2">For confirmations that block until the user responds — use a Popover with footer actions.</span>,
                <span key="3">For per-field validation — use the field component\'s <DocCode>error</DocCode> prop.</span>,
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@o9ds/react" code={`import { O9ToastProvider, useToast } from '@o9ds/react';

// Once at app root
<O9ToastProvider position="top-right" max={5}>
  <App />
</O9ToastProvider>

// Anywhere in the tree
function SaveButton() {
  const toast = useToast();
  return (
    <button onClick={async () => {
      try {
        await save();
        toast.success({ title: 'Saved' });
      } catch {
        toast.danger({ title: 'Failed', description: 'Try again.' });
      }
    }}>Save</button>
  );
}

// Sticky toast with action
toast.info({
  title: 'New version available',
  description: 'Refresh to update.',
  duration: 0,
  actions: [{ label: 'Refresh', onClick: () => location.reload() }],
});`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@o9ds/js" code={`import { O9Toast } from '@o9ds/js';

// Once at app boot
O9Toast.setup({ position: 'top-right', max: 5 });

// Push a toast
O9Toast.success({ title: 'Saved', description: 'Your changes were published.' });
O9Toast.danger({ title: 'Failed', actions: [{ label: 'Retry', onClick: retry }] });

// Programmatic dismissal
const id = O9Toast.info({ title: 'Loading…', duration: 0 });
O9Toast.dismiss(id);`} />
            </DocSection>
            <DocSection id="props" title="Toast props"><PropsTable rows={PROPS} /></DocSection>
            <DocSection id="provider-props" title="Provider / setup options"><PropsTable rows={PROVIDER_PROPS} /></DocSection>
            <DocSection id="methods" title="Methods (JS)">
              <MethodsTable rows={[
                { method: 'O9Toast.setup(options)', desc: 'Configure position, max, gap.' },
                { method: 'O9Toast.info(options) / success / warning / danger', returns: 'string', desc: 'Push a toast and return its id.' },
                { method: 'O9Toast.dismiss(id)', desc: 'Dismiss a specific toast.' },
                { method: 'O9Toast.dismissAll()', desc: 'Dismiss all toasts.' },
              ]} />
            </DocSection>
            <DocSection id="events" title="Custom events (JS)">
              <EventsTable rows={[
                { event: 'toast:show', payload: '{ id, type }', desc: 'Fires when a toast appears.' },
                { event: 'toast:dismiss', payload: '{ id, type }', desc: 'Fires when a toast is dismissed.' },
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Accessibility' && (
          <div className="space-y-12">
            <DocSection id="live" title="Live region">
              <DocParagraph>The toast container is a polite (info / success / warning) or assertive (danger) live region. Title and description are read together when a toast appears.</DocParagraph>
            </DocSection>
            <DocSection id="keyboard" title="Keyboard">
              <KeyboardTable rows={[
                { key: 'Tab / Shift+Tab', action: 'Move focus into inline toast actions and the dismiss button.' },
                { key: 'Enter / Space', action: 'Activate the focused action.' },
                { key: 'Esc', action: 'Dismiss the focused toast.' },
              ]} />
            </DocSection>
            <DocSection id="aria" title="ARIA">
              <AriaTable rows={[
                { attr: 'role="status" / role="alert"', when: 'Driven by toast tone (status for info/success/warning, alert for danger).' },
                { attr: 'aria-live', when: 'Set on the toast container; polite or assertive matching the role.' },
                { attr: 'aria-labelledby / aria-describedby', when: 'Wires title/description to the toast.' },
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
