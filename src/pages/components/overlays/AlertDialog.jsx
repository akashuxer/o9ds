import { useState, useMemo } from 'react'
import { ArvoAlertDialog, ArvoButton } from '@arvo/react'
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
  LiveReference,
} from '../../../LayoutComponents/ComponentDocPrimitives'
import { getDescriptor } from '../../../data/componentDescriptors.generated'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const DESCRIPTOR = getDescriptor('alert-dialog')
const PROPS = DESCRIPTOR.props
const CSS_VARS = DESCRIPTOR.cssVarGroups
const METHODS = DESCRIPTOR.methods
const EVENTS = DESCRIPTOR.events
const KEYBOARD = DESCRIPTOR.keyboard
const ARIA = DESCRIPTOR.aria

export default function AlertDialog() {
  const [tab, setTab] = useState('Overview')
  const [open, setOpen] = useState(false)

  const sections = useMemo(() => {
    if (tab === 'Overview') return [
      { id: 'purpose', label: 'Purpose' },
      { id: 'demo', label: 'Live demo' },
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
          title="Alert Dialog"
          description="Modal confirmation dialog used to interrupt the flow for a single decision: confirm, cancel, or destructive acknowledge. Built on the overlay hub with a focus trap and a configurable variant set."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>
                Use Alert Dialog when an action requires explicit confirmation or has irreversible consequences. The dialog blocks all other UI until the user responds, ensuring the choice is intentional.
              </DocParagraph>
            </DocSection>
            <DocSection id="demo" title="Live demo">
              <LiveReference>
                <ArvoButton label="Open dialog" onClick={() => setOpen(true)} />
                <ArvoAlertDialog
                  isOpen={open}
                  onClose={() => setOpen(false)}
                  title="Discard changes?"
                  description="You have unsaved changes. Discarding now removes them permanently."
                  variant="warning"
                  confirmLabel="Discard"
                  cancelLabel="Keep editing"
                  onConfirm={() => setOpen(false)}
                />
              </LiveReference>
            </DocSection>
            <DocSection id="variants" title="Variants">
              <DocList items={[
                <span key="info"><DocStrong>info</DocStrong> — Neutral confirmation. Use for non-destructive actions.</span>,
                <span key="warning"><DocStrong>warning</DocStrong> — Soft consequence. Default tone for "are you sure?" prompts.</span>,
                <span key="danger"><DocStrong>danger</DocStrong> — Destructive action. Pairs with a danger-styled confirm button.</span>,
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'Confirming destructive actions: delete, discard, or revoke access.',
                'Acknowledging irreversible operations before they run.',
                'Confirming bulk actions on selected rows or items.',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">For non-blocking confirmations of completed work — use <DocStrong>Toast</DocStrong>.</span>,
                <span key="2">For multi-step or content-rich flows — use a full <DocStrong>Side Panel</DocStrong> or a wizard pattern.</span>,
                <span key="3">For form input dialogs — prefer an inline form or a side panel where users can dismiss freely.</span>,
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock
                language="tsx"
                label="@arvo/react"
                code={`import { ArvoAlertDialog, ArvoButton } from '@arvo/react';
import { useState } from 'react';

function DiscardButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ArvoButton label="Discard" variant="danger" onClick={() => setOpen(true)} />
      <ArvoAlertDialog
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Discard changes?"
        description="You have unsaved changes. Discarding now removes them permanently."
        variant="danger"
        confirmLabel="Discard"
        cancelLabel="Keep editing"
        onConfirm={() => setOpen(false)}
      />
    </>
  );
}`}
              />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock
                language="js"
                label="@arvo/js"
                code={`import { ArvoAlertDialog } from '@arvo/js';

const dlg = ArvoAlertDialog.initialize(el, {
  title: 'Discard changes?',
  description: 'You have unsaved changes.',
  variant: 'danger',
  confirmLabel: 'Discard',
  cancelLabel: 'Keep editing',
  onConfirm: () => api.discard(),
});

dlg.open();
dlg.close();
dlg.destroy();`}
              />
            </DocSection>
            <DocSection id="props" title="Props">
              <PropsTable rows={PROPS} />
            </DocSection>
            <DocSection id="css-vars" title="CSS variables">
              <DocParagraph>Override on <DocCode>.arvo-dlg</DocCode> or a parent to theme the dialog surface.</DocParagraph>
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
              <DocParagraph>The dialog uses <DocCode>role="alertdialog"</DocCode> with <DocCode>aria-modal="true"</DocCode>. Title and description are wired via <DocCode>aria-labelledby</DocCode>/<DocCode>aria-describedby</DocCode>.</DocParagraph>
              <AriaTable rows={ARIA} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
