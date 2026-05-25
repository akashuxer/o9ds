import { useState, useMemo } from 'react'
import { ArvoDrawer, ArvoButton } from '@arvo/react'
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

const DESCRIPTOR = getDescriptor('drawer')
const PROPS = DESCRIPTOR?.props ?? []
const CSS_VARS = DESCRIPTOR?.cssVarGroups ?? []
const METHODS = DESCRIPTOR?.methods ?? []
const EVENTS = DESCRIPTOR?.events ?? []
const KEYBOARD = DESCRIPTOR?.keyboard ?? []
const ARIA = DESCRIPTOR?.aria ?? []

const DRW_VS_SP_ROWS = [
  ['Pane that should dock at the layout level next to the page content (resizable, pin/unpin, splitter)', 'ArvoSidePanel'],
  ['Modal-style temporary slide-in from a viewport edge (forms, filters, settings, item-edit)', 'ArvoDrawer'],
  ['Pane that needs to participate in flex/grid layout flow', 'ArvoSidePanel (variant="layout")'],
  ['Pane portaled to document.body or a custom anchor, with optional backdrop and Escape/mask dismissal', 'ArvoDrawer'],
  ['Pane the user can pin into the layout when desired and overlay otherwise', 'ArvoSidePanel (isPinnable)'],
]

const REASON_ROWS = [
  ['escape', 'User pressed Escape (when closeOnEscape is true).'],
  ['mask-click', 'User clicked the backdrop (when closeOnClick resolves true).'],
  ['close-button', 'User clicked the panel-shell __close button.'],
  ['programmatic', 'Default for drawer.close() with no argument.'],
]

export default function Drawer() {
  const [tab, setTab] = useState('Overview')
  const [open, setOpen] = useState(false)

  const sections = useMemo(() => {
    if (tab === 'Overview') return [
      { id: 'purpose', label: 'Purpose' },
      { id: 'anatomy', label: 'Anatomy' },
      { id: 'sides', label: 'Sides' },
      { id: 'mask', label: 'Mask configuration' },
      { id: 'states', label: 'States' },
      { id: 'dos-donts', label: 'Dos & Don\'ts' },
    ]
    if (tab === 'Usage') return [
      { id: 'when', label: 'When to use' },
      { id: 'when-not', label: 'When not to use' },
      { id: 'vs-sp', label: 'Drawer vs Side Panel' },
      { id: 'close-reasons', label: 'Close reasons' },
    ]
    if (tab === 'Code/APIs') return [
      { id: 'react', label: 'React' },
      { id: 'js', label: 'Vanilla JS' },
      { id: 'props', label: 'Props' },
      { id: 'css-vars', label: 'CSS variables' },
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
          title="Drawer"
          description="Viewport-anchored slide-in overlay panel. Always portaled and always overlay — modal-style temporary surface for forms, filters, settings, and item edits."
          componentSlug="drawer"
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 4h6v16h-6V4zM4 4h6v16H4V4z" /></svg>}
        />

        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>
                A Drawer is a viewport-anchored slide-in overlay panel. It is always portaled (default <DocCode>document.body</DocCode>, configurable container) and always overlay — there is no layout / pinned mode. Use Drawer for transient surfaces: edit forms, filter panels, settings, quick-look details, and short-lived inline workflows.
              </DocParagraph>
              <DocCallout>
                Drawer composes the same content shell as <DocStrong>ArvoSidePanel</DocStrong> via the panel-shell shared pattern. Header, sticky region, body, footer, items, search, empty / skeleton states all behave identically — Drawer adds portal mounting, optional backdrop / mask, scroll lock, focus trap, slide-in animation, and Escape / mask-click dismissal on top.
              </DocCallout>
            </DocSection>

            <DocSection id="anatomy" title="Anatomy">
              <DocParagraph>
                A portaled root (<DocCode>.arvo-drw</DocCode>) holding a focus-trapped <DocStrong>pane</DocStrong> with role <DocCode>dialog</DocCode>. The pane contains a header (title, optional back button, header actions, close button), an optional sticky region (search / tabs), a scrollable body, and an optional footer with action buttons. An optional sibling backdrop (<DocCode>.arvo-drw__backdrop</DocCode>) handles mask click / blur.
              </DocParagraph>
              <LiveReference>
                <ArvoButton label="Open drawer" variant="primary" onClick={() => setOpen(true)} />
                <ArvoDrawer
                  isOpen={open}
                  onOpenChange={setOpen}
                  title="Filters"
                  side="right"
                  isClosable
                  hasMask
                >
                  <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed p-4">
                    Drawer body content. Compose any panel-shell features here (sticky search, items, footer actions).
                  </p>
                </ArvoDrawer>
              </LiveReference>
            </DocSection>

            <DocSection id="sides" title="Sides">
              <DocParagraph>
                <DocCode>side</DocCode> picks the edge the pane slides in from. Default is <DocCode>"right"</DocCode>; <DocCode>"left"</DocCode> mirrors the slide direction. <DocCode>"top"</DocCode> and <DocCode>"bottom"</DocCode> are reserved for v2 — current builds fall back to <DocCode>"right"</DocCode>.
              </DocParagraph>
            </DocSection>

            <DocSection id="mask" title="Mask configuration">
              <DocParagraph>
                <DocCode>hasMask</DocCode> accepts either a boolean or an <DocCode>ArvoDrawerMaskConfig</DocCode> object with <DocCode>variant</DocCode> (light / dark), <DocCode>opacity</DocCode>, <DocCode>blur</DocCode>, and <DocCode>closeOnClick</DocCode> fields. The backdrop is rendered as a sibling of the pane, not a parent, so it never clips the slide animation.
              </DocParagraph>
              <CodeBlock language="ts" code={`hasMask: true                                                  // light, default opacity, dismissible
hasMask: false                                                 // no backdrop, aria-modal="false"
hasMask: { variant: 'dark', opacity: 0.5, blur: 8, closeOnClick: false }`} />
            </DocSection>

            <DocSection id="states" title="States">
              <ul className="list-disc pl-5 space-y-2 text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><DocStrong>Closed</DocStrong> — the portal root is unmounted; no DOM cost.</li>
                <li><DocStrong>Open</DocStrong> — slides in over the page; focus trap active; scroll lock applied if a mask is shown.</li>
                <li><DocStrong>Loading</DocStrong> — Pattern B skeleton inside the panel-shell body while data loads.</li>
                <li><DocStrong>Disabled</DocStrong> — whole-panel disabled state; no interactions allowed.</li>
              </ul>
            </DocSection>

            <DocSection id="dos-donts" title="Dos & Don'ts">
              <div className="grid gap-4 sm:grid-cols-2">
                <GrayBgCard title="Do" bullets={[
                  'Use Drawer for transient surfaces — close on save, cancel, Escape, or mask click.',
                  'Always set a clear title (or ariaLabel) — it is the dialog\'s accessible name.',
                  'Reach for ArvoSidePanel when the user needs to pin the pane or have it docked.',
                ]} />
                <WhiteBgCard title="Don't" bullets={[
                  'Stack multiple drawers on top of each other.',
                  'Use a Drawer for primary navigation — use a side panel or top nav.',
                  'Disable Escape dismissal without an obvious close button.',
                ]} />
              </div>
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'Edit drawer — form fields with Save / Cancel footer actions.',
                'Filter drawer — search + items + Apply / Reset footer.',
                'Settings drawer — tabs + sections, no footer.',
                'Quick-look details — read-only summary triggered from a row.',
                'Multi-step inline workflow — short-lived form that does not justify a full page.',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">When the pane should dock at the layout level next to the page content (resizable, pin / unpin, splitter) — use <DocStrong>Side Panel</DocStrong>.</span>,
                <span key="2">When the pane needs to participate in flex / grid layout flow — use <DocStrong>Side Panel</DocStrong> (<DocCode>variant="layout"</DocCode>).</span>,
                <span key="3">When the user should be able to pin the pane and have it overlay otherwise — use <DocStrong>Side Panel</DocStrong> (<DocCode>isPinnable</DocCode>).</span>,
                <span key="4">For a confirmation prompt — use an <DocStrong>Alert Dialog</DocStrong>.</span>,
              ]} />
            </DocSection>
            <DocSection id="vs-sp" title="Drawer vs Side Panel">
              <SimpleTable columns={['Use case', 'Component']} rows={DRW_VS_SP_ROWS} />
              <DocCallout title="Default to Side Panel">
                If you are unsure, default to <DocStrong>Side Panel</DocStrong> — it has both layout and overlay variants and can flip between them without remounting. Reach for Drawer only when the pane is purely transient.
              </DocCallout>
            </DocSection>
            <DocSection id="close-reasons" title="Close reasons">
              <DocParagraph>
                Every close dispatches <DocCode>drw:close</DocCode> with <DocCode>{`detail: { reason }`}</DocCode>, and the <DocCode>onClose(reason)</DocCode> callback receives the same value. Returning <DocCode>false</DocCode> from <DocCode>onClose(reason)</DocCode> cancels the close.
              </DocParagraph>
              <SimpleTable columns={['Reason', 'Source']} rows={REASON_ROWS} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@arvo/react" code={`import { ArvoDrawer } from '@arvo/react';

// Basic right-side drawer
<ArvoDrawer
  isOpen={open}
  onOpenChange={setOpen}
  title="Filters"
  side="right"
  isClosable
>
  <p>Drawer body content</p>
</ArvoDrawer>

// Custom mask config
<ArvoDrawer
  isOpen={open}
  onOpenChange={setOpen}
  title="Settings"
  hasMask={{ variant: 'dark', opacity: 0.6, blur: 4 }}
  closeOnEscape
  closeOnMaskClick={false}
/>

// Filter drawer with items and footer actions
<ArvoDrawer
  isOpen={open}
  onOpenChange={setOpen}
  title="Filters"
  stickyHeader={{ search: true }}
  items={filterItems}
  getItemId={(item) => item.id}
  filterKeys={['label']}
  renderItem={(item) => <span>{item.label}</span>}
  actions={[
    { id: 'reset', label: 'Reset', variant: 'outline' },
    { id: 'apply', label: 'Apply', variant: 'primary' },
  ]}
  onClose={(reason) => console.log('closed via:', reason)}
/>`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@arvo/js" code={`import { ArvoDrawer } from '@arvo/js/components/Drawer';

const marker = document.querySelector('#drawer-marker');
const drawer = ArvoDrawer.initialize(marker, {
  side: 'right',
  title: 'Filters',
  hasMask: { variant: 'light' },
  closeOnEscape: true,
  closeOnMaskClick: true,
  lockScroll: 'auto',
  width: 360,
  stickyHeader: { search: true },
  items: [...],
  getItemId: (item) => item.id,
  filterKeys: ['label'],
  renderItem: (item, el) => { el.textContent = item.label; },
  actions: [
    { id: 'reset', label: 'Reset', variant: 'outline' },
    { id: 'apply', label: 'Apply', variant: 'primary' },
  ],
  onClose: (reason) => console.log('close reason:', reason),
});

// Imperative lifecycle
await drawer.open();
drawer.close();
drawer.close('mask-click');
drawer.toggle();
drawer.isOpen();

// Content updates
drawer.setTitle('Updated');
drawer.setItems([...]);
drawer.loading(true);
drawer.destroy();`} />
            </DocSection>
            <DocSection id="props" title="Props">
              <DocParagraph>
                Inner anatomy (header, sticky region, body, footer, items, filter pipeline, empty / skeleton states) is owned by the panel-shell shared pattern. See <DocStrong>Side Panel</DocStrong> for shared shell props.
              </DocParagraph>
              <PropsTable rows={PROPS} />
            </DocSection>
            <DocSection id="css-vars" title="CSS variables">
              <DocParagraph>Override on <DocCode>.arvo-drw</DocCode> or any parent. The backdrop tone and z-index are token-driven.</DocParagraph>
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
            <DocSection id="keyboard" title="Keyboard interactions">
              <KeyboardTable rows={KEYBOARD.length ? KEYBOARD : [
                { key: 'Escape', action: 'Close the drawer when closeOnEscape is true.' },
                { key: 'Tab / Shift+Tab', action: 'Cycle focus inside the drawer (focus trap).' },
                { key: 'Enter / Space', action: 'Activate the focused control.' },
              ]} />
            </DocSection>
            <DocSection id="aria" title="ARIA attributes">
              <AriaTable rows={ARIA.length ? ARIA : [
                { attr: 'role="dialog"', when: 'Set on the __pane element.' },
                { attr: 'aria-modal="true"', when: 'Set when the drawer renders a mask. False when hasMask is false.' },
                { attr: 'aria-labelledby', when: 'Set to the title id when title is provided. Override via ariaLabelledBy.' },
                { attr: 'aria-label', when: 'Use ariaLabel when there is no visible title.' },
                { attr: 'aria-busy', when: 'Set during loading state.' },
              ]} />
            </DocSection>
            <DocSection id="focus" title="Focus">
              <DocList items={[
                'When the drawer opens, focus moves into the pane (close button or first focusable element).',
                'A focus trap keeps Tab and Shift+Tab inside the dialog while it is open.',
                'On close, focus returns to the trigger that opened the drawer.',
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
