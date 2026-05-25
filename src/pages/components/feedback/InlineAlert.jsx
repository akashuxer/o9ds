import { useState, useMemo } from 'react'
import { ArvoMessageAlert } from '@arvo/react'
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

const DESCRIPTOR = getDescriptor('message-alert') ?? getDescriptor('inline-alert')
const PROPS = DESCRIPTOR?.props ?? []
const CSS_VARS = DESCRIPTOR?.cssVarGroups ?? []
const METHODS = DESCRIPTOR?.methods ?? []
const EVENTS = DESCRIPTOR?.events ?? []
const KEYBOARD = DESCRIPTOR?.keyboard ?? []
const ARIA = DESCRIPTOR?.aria ?? []

const SIZE_ROWS = [
  ['Full', '24px (row height)', '16x16', '12px', '4px (ico-msg), 8px (body-close)'],
  ['Inline', '16px', '16x16', '—', '0'],
]

export default function InlineAlert() {
  const [tab, setTab] = useState('Overview')

  const sections = useMemo(() => {
    if (tab === 'Overview') return [
      { id: 'purpose', label: 'Purpose' },
      { id: 'anatomy', label: 'Anatomy' },
      { id: 'types', label: 'Types' },
      { id: 'modes', label: 'Modes' },
      { id: 'dos-donts', label: 'Dos & Don\'ts' },
    ]
    if (tab === 'Usage') return [
      { id: 'when', label: 'When to use' },
      { id: 'when-not', label: 'When not to use' },
      { id: 'wiring', label: 'Wiring with form fields' },
      { id: 'best-practices', label: 'Best practices' },
    ]
    if (tab === 'Code/APIs') return [
      { id: 'react', label: 'React' },
      { id: 'js', label: 'Vanilla JS' },
      { id: 'props', label: 'Props' },
      { id: 'css-vars', label: 'CSS variables' },
      { id: 'sizes-table', label: 'Size reference' },
      { id: 'methods', label: 'Methods (JS)' },
      { id: 'events', label: 'Custom events (JS)' },
    ]
    if (tab === 'Accessibility') return [
      { id: 'roles', label: 'Roles' },
      { id: 'aria', label: 'ARIA attributes' },
      { id: 'keyboard', label: 'Keyboard interactions' },
    ]
    return []
  }, [tab])

  return (
    <PageWithToc sections={sections}>
      <div className="space-y-8">
        <PageHeader
          title="Message Alert"
          description="Atomic icon + message status primitive. Renders below form fields, inside panel info slots, and as in-field error icons. Six semantic types and two display modes."
          componentSlug="inline-alert"
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 4h.01M5.07 19h13.86a2 2 0 001.74-3l-6.93-12a2 2 0 00-3.48 0l-6.93 12a2 2 0 001.74 3z" /></svg>}
        />

        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>
                Message Alert is the atomic primitive used wherever a compact icon + message status row needs to render. It is the public surface behind the <DocCode>errorMsg</DocCode> on form fields, the in-field error icon on Textbox / Search, and the info slot inside Side Panel and Drawer headers.
              </DocParagraph>
              <DocCallout title="Renamed">
                This component was previously called <DocStrong>Inline Alert</DocStrong> and exposed via the <DocCode>arvo-inline-alert</DocCode> class. It is now <DocStrong>Message Alert</DocStrong> with class <DocCode>arvo-msg-alert</DocCode> and a wrapping <DocCode>__body</DocCode> element to make room for the dismiss button.
              </DocCallout>
            </DocSection>

            <DocSection id="anatomy" title="Anatomy">
              <DocParagraph>
                A row containing a type-specific <DocStrong>icon</DocStrong>, a <DocStrong>message</DocStrong>, and an optional <DocStrong>dismiss button</DocStrong>. The icon and message are wrapped in a <DocCode>__body</DocCode> element so the dismiss button can sit alongside without affecting the message-icon spacing.
              </DocParagraph>
              <LiveReference>
                <ArvoMessageAlert type="error" message="Email is required" />
              </LiveReference>
            </DocSection>

            <DocSection id="types" title="Types">
              <DocParagraph>Six semantic types drive the icon glyph and color. The role auto-resolves: <DocCode>error</DocCode>, <DocCode>warning</DocCode>, and <DocCode>block</DocCode> render as <DocCode>role="alert"</DocCode>; <DocCode>info</DocCode>, <DocCode>success</DocCode>, and <DocCode>neutral</DocCode> render as <DocCode>role="status"</DocCode>.</DocParagraph>
              <div className="space-y-2">
                <ArvoMessageAlert type="error" message="Email is required" />
                <ArvoMessageAlert type="success" message="Saved" />
                <ArvoMessageAlert type="warning" message="Approaching quota" />
                <ArvoMessageAlert type="info" message="24 matching results" />
                <ArvoMessageAlert type="neutral" message="No new activity" />
                <ArvoMessageAlert type="block" message="You do not have permission to publish" />
              </div>
            </DocSection>

            <DocSection id="modes" title="Modes">
              <DocList items={[
                <span key="1"><DocStrong>Full</DocStrong> (default) — icon + message + optional dismiss button. Used below form fields and as a panel info row.</span>,
                <span key="2"><DocStrong>Inline</DocStrong> (<DocCode>isInline</DocCode>) — icon-only 16x16 mode. Used for in-field error icons (e.g. <DocCode>arvo-textbox__err-ico</DocCode>). The message is mirrored to <DocCode>aria-label</DocCode> so it stays accessible.</span>,
              ]} />
            </DocSection>

            <DocSection id="dos-donts" title="Dos & Don'ts">
              <div className="grid gap-4 sm:grid-cols-2">
                <GrayBgCard title="Do" bullets={[
                  'Pass an id to wire it via aria-describedby on the form field.',
                  'Use the inline mode only for in-field error icons; the message is for assistive tech.',
                  'Pick the type by intent — never by color preference.',
                ]} />
                <WhiteBgCard title="Don't" bullets={[
                  'Use it for page-level alerts — use Banner Alert or Toast instead.',
                  'Stack multiple message alerts under one field — collapse to a single message.',
                  'Use it as a confirmation dialog substitute.',
                ]} />
              </div>
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'Form-field validation errors (rendered below the field, linked via aria-describedby).',
                'In-field tooltip error icons (inline mode).',
                'Panel info slot (info type, role="status") inside Side Panel or Drawer headers.',
                'Selection-control errors below Checkbox / Radio / Group components.',
                'Dismissable inline notifications for non-persistent info rows.',
                'Blocked / hard-stop states (block type) when the user cannot proceed.',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">Page- or section-level persistent feedback — use <DocStrong>Banner Alert</DocStrong>.</span>,
                <span key="2">Transient post-action confirmations — use <DocStrong>Toast</DocStrong>.</span>,
                <span key="3">Compact inline status counters next to other content — use <DocStrong>Badge Alert</DocStrong>.</span>,
              ]} />
            </DocSection>
            <DocSection id="wiring" title="Wiring with form fields">
              <DocParagraph>
                Form-input components (Textbox, Textarea, Number Input, Search, Select, Combobox, Checkbox Group, Radio Group) accept an <DocCode>errorMsg</DocCode> prop. The component renders a Message Alert internally, sets <DocCode>aria-invalid</DocCode> on the input, and wires <DocCode>aria-describedby</DocCode> automatically — you typically do not instantiate Message Alert directly for field validation.
              </DocParagraph>
              <DocParagraph>
                Use the standalone Message Alert when you need a status row outside of a form field (panel info slot, selection-control group errors, dismissable inline rows).
              </DocParagraph>
            </DocSection>
            <DocSection id="best-practices" title="Best practices">
              <DocList items={[
                'For inline icons in fields, always pass the message — it powers the aria-label.',
                'Pass a stable id when the alert describes another element so aria-describedby can reference it.',
                'Use the role override only when the auto-resolved role does not match the urgency.',
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@arvo/react" code={`import { ArvoMessageAlert, ARVO_MSG_ALERT_DEFAULT_ERROR } from '@arvo/react';

// Full mode — below-field validation error
<ArvoMessageAlert type="error" id="email-error" message="Email is required" />

// Inline mode — in-field tooltip error icon
<ArvoMessageAlert
  type="error"
  isInline
  message="Email is required"
  className="arvo-textbox__err-ico"
/>

// Info type for panel info slot
<ArvoMessageAlert type="info" role="status" message="24 matching results" />

// Dismissable
<ArvoMessageAlert
  type="success"
  message="Saved!"
  isDismissable
  onDismiss={() => setVisible(false)}
/>

// Icon override
<ArvoMessageAlert type="neutral" icon="bell-o" message="Notification" />

// Default error message constant
const msg = errorMsg ?? ARVO_MSG_ALERT_DEFAULT_ERROR;`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@arvo/js" code={`import { ArvoMessageAlert } from '@arvo/js';

const alert = ArvoMessageAlert.initialize(document.createElement('div'), {
  type: 'error',
  message: 'Email is required',
  id: 'email-error',
});
field.appendChild(alert.el);

// Inline mode
const errIcon = ArvoMessageAlert.initialize(document.createElement('span'), {
  type: 'error',
  isInline: true,
  message: 'Email is required',
});
errIcon.el.classList.add('arvo-textbox__err-ico');

alert.message('New message');
alert.type('success');
alert.inline(true);     // toggle to icon-only
alert.dismissable(true);
alert.dismiss();
alert.destroy();`} />
            </DocSection>
            <DocSection id="props" title="Props"><PropsTable rows={PROPS} /></DocSection>
            <DocSection id="css-vars" title="CSS variables"><CssVarsGrid groups={CSS_VARS} /></DocSection>
            <DocSection id="sizes-table" title="Size reference">
              <DocParagraph>Message Alert is a fixed-size primitive — there is no size prop.</DocParagraph>
              <SimpleTable columns={['Mode', 'Height', 'Icon', 'Font', 'Gap']} rows={SIZE_ROWS} />
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
            <DocSection id="roles" title="Roles">
              <DocParagraph>
                The role is resolved automatically from the type:
              </DocParagraph>
              <DocList items={[
                <span key="1"><DocCode>error</DocCode>, <DocCode>warning</DocCode>, <DocCode>block</DocCode> → <DocCode>role="alert"</DocCode> (assertive — interrupts).</span>,
                <span key="2"><DocCode>info</DocCode>, <DocCode>success</DocCode>, <DocCode>neutral</DocCode> → <DocCode>role="status"</DocCode> (polite — announces when idle).</span>,
                <span key="3">Override only when the default does not match urgency (e.g. an info banner that must be assertive).</span>,
              ]} />
            </DocSection>
            <DocSection id="aria" title="ARIA attributes">
              <AriaTable rows={ARIA.length ? ARIA : [
                { attr: 'role="alert"', when: 'Auto-set for error / warning / block.' },
                { attr: 'role="status"', when: 'Auto-set for info / success / neutral.' },
                { attr: 'aria-label', when: 'Mirrors the message in inline mode (icon-only) so the message remains accessible.' },
                { attr: 'aria-hidden', when: 'On the decorative icon element.' },
                { attr: 'id', when: 'Pass via the id prop and reference from the related field via aria-describedby.' },
              ]} />
            </DocSection>
            <DocSection id="keyboard" title="Keyboard interactions">
              <KeyboardTable rows={KEYBOARD.length ? KEYBOARD : [
                { key: 'Tab', action: 'Move focus to the dismiss button (full + dismissable mode only).' },
                { key: 'Enter / Space', action: 'Activate the focused dismiss button.' },
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
