import { useState, useMemo, useRef } from 'react'
import { O9Popover, O9Button } from '@o9ds/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocSection, { DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import { PropsTable, KeyboardTable, AriaTable, MethodsTable, EventsTable, LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const PROPS = [
  { prop: 'triggerRef', type: 'React.RefObject<HTMLElement | null>', desc: 'Ref to the trigger element. The popover attaches event listeners to it.' },
  { prop: 'renderTrigger', type: '(props) => ReactNode', desc: 'Render-prop alternative — receives ARIA props for the trigger.' },
  { prop: 'isOpen', type: 'boolean', desc: 'Controlled open state.' },
  { prop: 'defaultOpen', type: 'boolean', default: 'false', desc: 'Uncontrolled initial open state.' },
  { prop: 'onOpenChange', type: '(open: boolean) => void', desc: 'Open state callback.' },
  { prop: 'title', type: 'string', desc: 'Header title.' },
  { prop: 'children', type: 'ReactNode', desc: 'Body content.' },
  { prop: 'actions', type: 'PopoverAction[]', desc: 'Footer actions: { id, label, variant, action }.' },
  { prop: 'placement', type: 'PopoverPlacement', default: "'auto'", desc: 'Preferred placement (13 positions + auto).' },
  { prop: 'trigger', type: "'click' | 'hover' | 'focus'", default: "'click'", desc: 'Open trigger mode.' },
  { prop: 'variant', type: "'space' | 'edge'", default: "'space'", desc: 'Body padding variant. edge removes horizontal padding.' },
  { prop: 'modal', type: 'boolean', default: 'false', desc: 'Modal mode (page below is inert; focus trapped).' },
  { prop: 'closable', type: 'boolean', default: 'true', desc: 'Show the header close button.' },
  { prop: 'backButton', type: 'boolean', default: 'false', desc: 'Show a back arrow in the header.' },
  { prop: 'onBack', type: '() => void', desc: 'Callback fired when the back button is pressed.' },
  { prop: 'isLoading', type: 'boolean', default: 'false', desc: 'Pattern B skeleton loading.' },
]

export default function Popover() {
  const [tab, setTab] = useState('Overview')
  const triggerRef = useRef(null)
  const [open, setOpen] = useState(false)

  const sections = useMemo(() => {
    if (tab === 'Overview') return [{ id: 'purpose', label: 'Purpose' }, { id: 'demo', label: 'Live demo' }, { id: 'placements', label: 'Placements' }]
    if (tab === 'Usage') return [{ id: 'when', label: 'When to use' }, { id: 'when-not', label: 'When not to use' }]
    if (tab === 'Code/APIs') return [{ id: 'react', label: 'React' }, { id: 'js', label: 'Vanilla JS' }, { id: 'props', label: 'Props' }, { id: 'methods', label: 'Methods (JS)' }, { id: 'events', label: 'Events (JS)' }]
    if (tab === 'Accessibility') return [{ id: 'keyboard', label: 'Keyboard' }, { id: 'aria', label: 'ARIA' }]
    return []
  }, [tab])

  return (
    <PageWithToc sections={sections}>
      <div className="space-y-8">
        <PageHeader
          title="Popover"
          description="Floating panel anchored to a trigger element with structured header, scrollable body, and optional footer. 13 placements, three trigger modes (click/hover/focus), back navigation, controlled/uncontrolled open state."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4v-4H6a2 2 0 01-2-2V6z" /></svg>}
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>
                Use Popover for inline overlays anchored to a trigger — supplementary details, inline forms, action confirmations, rich tooltip-like content. Popover orchestrates focus, dismissal (outside click / Escape / route change), and accessibility wiring.
              </DocParagraph>
            </DocSection>
            <DocSection id="demo" title="Live demo">
              <LiveReference>
                <O9Button label="Open popover" ref={triggerRef} onClick={() => setOpen((o) => !o)} />
              </LiveReference>
              <O9Popover
                triggerRef={triggerRef}
                isOpen={open}
                onOpenChange={setOpen}
                title="Popover title"
                actions={[
                  { id: 'cancel', label: 'Cancel', variant: 'secondary', action: () => setOpen(false) },
                  { id: 'save', label: 'Save', variant: 'primary', action: () => setOpen(false) },
                ]}
              >
                <p style={{ margin: 0 }}>Use the controlled isOpen + onOpenChange API to drive the open state from your component.</p>
              </O9Popover>
            </DocSection>
            <DocSection id="placements" title="Placements">
              <DocParagraph>13 placement options: top / top-start / top-end, bottom / bottom-start / bottom-end, left / left-start / left-end, right / right-start / right-end, and auto. The position engine flips and shifts to stay inside the viewport.</DocParagraph>
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'Contextual details — supplementary information related to a specific trigger.',
                'Inline forms — short forms, filters, or settings adjacent to the control that opens them.',
                'Action confirmations — use footer actions to confirm or cancel a destructive operation.',
                'Rich tooltips — use trigger="hover" or "focus" for transient interactive content.',
                'Nested navigation — backButton enables multi-level panel flows within a single popover.',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">For small text-only hints — use <DocStrong>Tooltip</DocStrong>.</span>,
                <span key="2">For action menus — use <DocStrong>Action Menu</DocStrong>.</span>,
                <span key="3">For multi-select filters — use <DocStrong>Hybrid Popover</DocStrong>.</span>,
                <span key="4">For full-screen tasks — use a dialog component instead of a modal popover.</span>,
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@o9ds/react" code={`import { O9Popover } from '@o9ds/react';
import { useRef, useState } from 'react';

const triggerRef = useRef(null);
<button ref={triggerRef}>Open</button>
<O9Popover triggerRef={triggerRef} title="Settings">
  <p>Popover content</p>
</O9Popover>

// With footer actions
<O9Popover
  triggerRef={triggerRef}
  title="Confirm"
  actions={[
    { id: 'cancel', label: 'Cancel', variant: 'secondary' },
    { id: 'save', label: 'Save', variant: 'primary', action: () => handleSave() },
  ]}
>
  <p>Are you sure?</p>
</O9Popover>

// Controlled
const [isOpen, setIsOpen] = useState(false);
<O9Popover isOpen={isOpen} onOpenChange={setIsOpen} triggerRef={triggerRef} title="Controlled">
  <p>Controlled content</p>
</O9Popover>

// Hover trigger
<O9Popover triggerRef={triggerRef} trigger="hover" title="Hover Info">
  <p>Opens on pointer enter, closes on pointer leave.</p>
</O9Popover>

// Edge variant (full-bleed body)
<O9Popover triggerRef={triggerRef} variant="edge" title="Edge">
  <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
    <li style={{ padding: '8px 12px' }}>List item</li>
  </ul>
</O9Popover>`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@o9ds/js" code={`import { O9Popover } from '@o9ds/js';

const popover = O9Popover.initialize(trigger, {
  title: 'Settings',
  content: '<p>Popover content</p>',
  closable: true,
  actions: [
    { id: 'cancel', label: 'Cancel', variant: 'secondary' },
    { id: 'save', label: 'Save', variant: 'primary', action: () => handleSave() },
  ],
  onOpen: () => console.log('opened'),
  onClose: () => console.log('closed'),
});

popover.open();
popover.close();
popover.toggle();
popover.isOpen();

popover.renderBody('<p>New content</p>');
popover.setLoading(true);
popover.setFooterVisible(false);
popover.updateFooterAction('save', { disabled: true, label: 'Saving...' });
popover.reposition();
popover.destroy();`} />
            </DocSection>
            <DocSection id="props" title="Props"><PropsTable rows={PROPS} /></DocSection>
            <DocSection id="methods" title="Methods (JS)">
              <MethodsTable rows={[
                { method: 'O9Popover.initialize(trigger, options)', returns: 'O9Popover', desc: 'Factory.' },
                { method: 'open() / close() / toggle()', desc: 'Control the open state.' },
                { method: 'isOpen()', returns: 'boolean', desc: 'Whether the popover is open.' },
                { method: 'renderBody(html | fn)', desc: 'Update body content.' },
                { method: 'setLoading(b)', desc: 'Toggle Pattern B loading.' },
                { method: 'setFooterVisible(b)', desc: 'Show/hide the footer.' },
                { method: 'updateFooterAction(id, partial)', desc: 'Update an existing footer action.' },
                { method: 'reposition()', desc: 'Force reposition (e.g. after content resize).' },
                { method: 'destroy()', desc: 'Tear down.' },
              ]} />
            </DocSection>
            <DocSection id="events" title="Custom events (JS)">
              <EventsTable rows={[
                { event: 'pop:open', payload: '—', desc: 'Fires when the popover opens.' },
                { event: 'pop:close', payload: '—', desc: 'Fires when the popover closes.' },
                { event: 'pop:reposition', payload: '—', desc: 'Fires when the position is recomputed.' },
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Accessibility' && (
          <div className="space-y-12">
            <DocSection id="keyboard" title="Keyboard">
              <KeyboardTable rows={[
                { key: 'Enter / Space (on trigger)', action: 'Open the popover and move focus inside.' },
                { key: 'Escape', action: 'Close the popover and return focus to the trigger.' },
                { key: 'Tab / Shift+Tab', action: 'Cycle focus inside the popover (modal mode traps focus).' },
              ]} />
            </DocSection>
            <DocSection id="aria" title="ARIA">
              <AriaTable rows={[
                { attr: 'role="dialog"', when: 'Set on the popover panel.' },
                { attr: 'aria-labelledby', when: 'Points at the popover title element.' },
                { attr: 'aria-modal', when: 'Set when modal mode is enabled.' },
                { attr: 'aria-haspopup="dialog"', when: 'Set on the trigger.' },
                { attr: 'aria-expanded', when: 'Reflects the trigger\'s current open state.' },
                { attr: 'aria-controls', when: 'Trigger points at the popover panel.' },
                { attr: 'aria-busy', when: 'Set during loading.' },
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
