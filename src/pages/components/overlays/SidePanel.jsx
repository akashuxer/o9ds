import { useState, useMemo } from 'react'
import { ArvoSidePanel } from '@arvo/react'
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

const DESCRIPTOR = getDescriptor('side-panel')
const PROPS = DESCRIPTOR?.props ?? []
const CSS_VARS = DESCRIPTOR?.cssVarGroups ?? []
const METHODS = DESCRIPTOR?.methods ?? []
const EVENTS = DESCRIPTOR?.events ?? []
const KEYBOARD = DESCRIPTOR?.keyboard ?? []
const ARIA = DESCRIPTOR?.aria ?? []

const VARIANT_ROWS = [
  ['layout (default)', 'Pane participates in flex / grid layout flow next to its siblings. Resizable via __splitter when hasSplitter is enabled.'],
  ['overlay', 'Pane slides over sibling content; sibling layout does not reflow.'],
  ['Pinnable', 'isPinnable lets the user flip between layout and overlay at runtime. State, scroll, and child instances survive the flip.'],
]

export default function SidePanel() {
  const [tab, setTab] = useState('Overview')

  const sections = useMemo(() => {
    if (tab === 'Overview') return [
      { id: 'purpose', label: 'Purpose' },
      { id: 'anatomy', label: 'Anatomy' },
      { id: 'variants', label: 'Variants' },
      { id: 'pinnable', label: 'Pinnable' },
      { id: 'states', label: 'States' },
      { id: 'dos-donts', label: 'Dos & Don\'ts' },
    ]
    if (tab === 'Usage') return [
      { id: 'when', label: 'When to use' },
      { id: 'when-not', label: 'When not to use' },
      { id: 'vs-drw', label: 'Side Panel vs Drawer' },
      { id: 'best-practices', label: 'Best practices' },
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
          title="Side Panel"
          description="Content-area-scoped pane that docks at the layout level (default) or overlays sibling content. Pin / unpin flips between variants without remounting — preserving state, scroll, and child instances."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h12v16H3V4zm14 0h4v16h-4V4z" /></svg>}
        />

        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>
                Side Panel is a content-area-scoped pane: it docks at the layout level next to the page content (default) or overlays sibling content via slide-in animation. Pin / unpin flips between layout and overlay variants <DocStrong>without remounting</DocStrong> the DOM, preserving panel state, scroll position, and child instances.
              </DocParagraph>
              <DocCallout>
                Side Panel composes the same panel-shell pattern as <DocStrong>Drawer</DocStrong>. Header, sticky region, body, footer, items, search, empty / skeleton states all behave identically. Side Panel adds layout vs in-content overlay mounting, the pin button, the side-aware splitter slot, and the layout / overlay variant flip.
              </DocCallout>
            </DocSection>

            <DocSection id="anatomy" title="Anatomy">
              <DocParagraph>
                A pane (<DocCode>.arvo-sp</DocCode>) with a header (title, optional pin button, header actions, close button), an optional sticky region (search / tabs / info alert), a scrollable body, and an optional footer with action buttons. When <DocCode>hasSplitter</DocCode> is enabled in layout variant, a side-aware splitter sits on the inner edge for resize.
              </DocParagraph>
              <LiveReference>
                <div className="border" style={{ width: 320, height: 240 }}>
                  <ArvoSidePanel title="Filters" side="right" variant="layout" isClosable>
                    <p className="px-4 pt-2 text-sm text-arvo-light-secondary dark:text-neutral-400">Panel body content.</p>
                  </ArvoSidePanel>
                </div>
              </LiveReference>
            </DocSection>

            <DocSection id="variants" title="Variants">
              <SimpleTable columns={['Variant', 'Behavior']} rows={VARIANT_ROWS} />
            </DocSection>

            <DocSection id="pinnable" title="Pinnable">
              <DocParagraph>
                Set <DocCode>isPinnable</DocCode> to render the pin button in the header. Users flip between layout (pinned) and overlay (unpinned). The flip preserves all state — scroll position, search query, selected items, focus — because the DOM is not remounted.
              </DocParagraph>
              <DocCallout title="When to use isPinnable">
                Reach for pinnable when the user has a real preference about whether the pane is always visible (e.g. nav rails, persistent filters in a planning view). For purely transient panes (forms, settings overlays), use <DocStrong>Drawer</DocStrong>.
              </DocCallout>
            </DocSection>

            <DocSection id="states" title="States">
              <ul className="list-disc pl-5 space-y-2 text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><DocStrong>Open / Closed</DocStrong> — overlay variant only; layout is always visible while mounted.</li>
                <li><DocStrong>Pinned / Unpinned</DocStrong> — flips variant in place when <DocCode>isPinnable</DocCode>.</li>
                <li><DocStrong>Loading</DocStrong> — Pattern B skeleton inside the body while data loads.</li>
                <li><DocStrong>Disabled</DocStrong> — whole-panel disabled state.</li>
              </ul>
            </DocSection>

            <DocSection id="dos-donts" title="Dos & Don'ts">
              <div className="grid gap-4 sm:grid-cols-2">
                <GrayBgCard title="Do" bullets={[
                  'Use Side Panel when the pane should sit beside the page content and possibly stay open.',
                  'Set isPinnable when the user has a real preference about visibility.',
                  'Always provide a clear title (or ariaLabel) — it is the dialog\'s accessible name in overlay mode.',
                ]} />
                <WhiteBgCard title="Don't" bullets={[
                  'Use Side Panel for purely transient surfaces — use Drawer.',
                  'Use it as a confirmation dialog substitute.',
                  'Stack two pinned panels on the same edge.',
                ]} />
              </div>
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'Filter pane — search + item list with Clear / Apply footer actions.',
                'Workflow pane — sticky tabs + body content, no footer.',
                'Gen AI pane — custom body children + sticky info alert + footer with send action.',
                'Page navigation (pinned) — always-visible layout pane for left / right nav rails.',
                'Page navigation (unpinned) — slide-in overlay for user-triggered navigation.',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">Purely transient surfaces (edit form, filter modal, settings overlay) — use <DocStrong>Drawer</DocStrong>.</span>,
                <span key="2">Modal-style surfaces portaled to the document root with a backdrop — use <DocStrong>Drawer</DocStrong>.</span>,
                <span key="3">Confirmation prompts — use an <DocStrong>Alert Dialog</DocStrong>.</span>,
              ]} />
            </DocSection>
            <DocSection id="vs-drw" title="Side Panel vs Drawer">
              <DocParagraph>
                Side Panel and Drawer share the same inner anatomy via the panel-shell pattern. The difference is positional: Side Panel docks in the content layout (and can flip to overlay-in-content), Drawer always portals to the document root and overlays the entire viewport.
              </DocParagraph>
              <DocCallout title="Default to Side Panel">
                If you are unsure, default to <DocStrong>Side Panel</DocStrong> — it has both layout and overlay variants and can flip between them without remounting. Reach for Drawer only when the pane is purely transient and modal-style.
              </DocCallout>
            </DocSection>
            <DocSection id="best-practices" title="Best practices">
              <DocList items={[
                'Persist the pinned state per user / per view so the pane returns the way they left it.',
                'For overlay variant inside a layout, make sure the parent has positioning context.',
                'Use the splitter only on the layout variant where resize affects sibling layout.',
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@arvo/react" code={`import { ArvoSidePanel } from '@arvo/react';

// Basic layout-docked panel
<ArvoSidePanel title="Filters" side="right" variant="layout" isClosable>
  <p>Panel body content</p>
</ArvoSidePanel>

// Pinnable panel (flips between layout and overlay)
<ArvoSidePanel
  title="Navigation"
  isPinnable
  defaultPinned={true}
  onPinChange={(pinned) => console.log(pinned)}
  isClosable
/>

// Overlay variant with open/close control
<ArvoSidePanel
  title="Details"
  variant="overlay"
  isOpen={isOpen}
  onOpenChange={setIsOpen}
  closeOnEscape
/>

// Filter pane with items
<ArvoSidePanel
  title="Filters"
  stickyHeader={{ search: true }}
  items={filterItems}
  getItemId={(item) => item.id}
  filterKeys={['label']}
  renderItem={(item) => <span>{item.label}</span>}
  actions={[
    { id: 'clear', label: 'Clear', variant: 'outline' },
    { id: 'apply', label: 'Apply', variant: 'primary' },
  ]}
/>`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@arvo/js" code={`import { ArvoSidePanel } from '@arvo/js/components/SidePanel';

const panel = ArvoSidePanel.initialize(el, {
  variant: 'layout',
  side: 'right',
  title: 'Filters',
  isPinnable: true,
  defaultPinned: true,
  isClosable: true,
  hasSplitter: 'auto',
  stickyHeader: { search: true },
  items: [...],
  getItemId: (item) => item.id,
  filterKeys: ['label'],
  renderItem: (item, el) => { el.textContent = item.label; },
  actions: [
    { id: 'clear', label: 'Clear', variant: 'outline' },
    { id: 'apply', label: 'Apply', variant: 'primary' },
  ],
  onPinChange: (pinned) => console.log('pinned:', pinned),
});

// Pin / unpin
panel.pinned(false);   // unpin -> overlay
panel.pinned(true);    // pin -> layout
panel.pinned();        // => boolean

// Overlay lifecycle
panel.open();
panel.close();
panel.toggle();

// Content updates
panel.setTitle('Updated');
panel.setItems([...]);
panel.loading(true);
panel.destroy();`} />
            </DocSection>
            <DocSection id="props" title="Props">
              <DocParagraph>Inner-anatomy props (header, sticky region, items, footer actions, empty / skeleton states) are inherited from the panel-shell pattern shared with Drawer.</DocParagraph>
              <PropsTable rows={PROPS} />
            </DocSection>
            <DocSection id="css-vars" title="CSS variables">
              <DocParagraph>Override on <DocCode>.arvo-sp</DocCode> or any parent.</DocParagraph>
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
                { key: 'Escape', action: 'Close the panel in overlay variant when closeOnEscape is true.' },
                { key: 'Tab / Shift+Tab', action: 'Move focus into / through panel content. Focus trap engages in overlay variant.' },
                { key: 'Enter / Space', action: 'Activate the focused control (pin button, close button, action button).' },
              ]} />
            </DocSection>
            <DocSection id="aria" title="ARIA attributes">
              <AriaTable rows={ARIA.length ? ARIA : [
                { attr: 'role="region"', when: 'On the layout variant pane.' },
                { attr: 'role="dialog"', when: 'On the overlay variant pane (when shown).' },
                { attr: 'aria-modal', when: 'Set on overlay variant when a mask is shown.' },
                { attr: 'aria-labelledby', when: 'Set to the title id when title is provided.' },
                { attr: 'aria-label', when: 'Use ariaLabel when there is no visible title.' },
                { attr: 'aria-busy', when: 'Set during loading state.' },
              ]} />
            </DocSection>
            <DocSection id="focus" title="Focus">
              <DocList items={[
                'Layout variant: focus moves freely between the panel and surrounding content.',
                'Overlay variant: focus moves into the panel when it opens; focus trap engages while it is shown; focus returns to the trigger on close.',
                'When pin / unpin flips the variant, focus is preserved on the active element.',
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
