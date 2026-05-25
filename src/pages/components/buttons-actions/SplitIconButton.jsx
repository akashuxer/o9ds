import { useState, useMemo } from 'react'
import { ArvoSplitIconButton } from '@arvo/react'
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
  LiveReference,
} from '../../../LayoutComponents/ComponentDocPrimitives'
import { getDescriptor } from '../../../data/componentDescriptors.generated'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const DESCRIPTOR = getDescriptor('split-icon-button')
const PROPS = DESCRIPTOR?.props ?? []
const CSS_VARS = DESCRIPTOR?.cssVarGroups ?? []
const METHODS = DESCRIPTOR?.methods ?? []
const EVENTS = DESCRIPTOR?.events ?? []
const KEYBOARD = DESCRIPTOR?.keyboard ?? []
const ARIA = DESCRIPTOR?.aria ?? []

const FILTER_ITEMS = [
  { id: 'all', label: 'All filters', icon: 'filter' },
  { id: 'recent', label: 'Recent', icon: 'clock-o' },
  { id: 'pinned', label: 'Pinned', icon: 'thumb-tack' },
  { id: 'clear', label: 'Clear filters', icon: 'clear' },
]

export default function SplitIconButton() {
  const [tab, setTab] = useState('Overview')

  const sections = useMemo(() => {
    if (tab === 'Overview') return [
      { id: 'purpose', label: 'Purpose' },
      { id: 'anatomy', label: 'Anatomy' },
      { id: 'variants', label: 'Variants' },
      { id: 'sizes', label: 'Sizes' },
      { id: 'states', label: 'States' },
      { id: 'dos-donts', label: 'Dos & Don\'ts' },
    ]
    if (tab === 'Usage') return [
      { id: 'when', label: 'When to use' },
      { id: 'when-not', label: 'When not to use' },
      { id: 'no-selection', label: 'No selection mode' },
      { id: 'segment-disabled', label: 'Per-segment disabled' },
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
          title="Split Icon Button"
          description="Icon-only Split Button: a square icon-only action segment plus a narrow caret trigger that opens an ActionMenu of alternatives. Used in dense toolbars."
          componentSlug="split-icon-button"
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6h12v12H3V6zm15 6l3-3v6l-3-3z" /></svg>}
        />

        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>
                Split Icon Button packs a default icon-only action plus its alternatives into a single compact unit. Use it in dense toolbars (filter / sort / export rows) where labels would crowd the surface but you still need both the default action and its variants one click away.
              </DocParagraph>
            </DocSection>

            <DocSection id="anatomy" title="Anatomy">
              <DocParagraph>
                A <DocStrong>group</DocStrong> wrapping a square icon-only <DocStrong>action segment</DocStrong> (matching <DocCode>ArvoIconButton</DocCode> dimensions) and a narrow caret-only <DocStrong>trigger segment</DocStrong>. Each segment is independently focusable, hoverable, and reports its own click. The action segment requires a <DocCode>tooltip</DocCode> — it becomes both the visible tooltip and the <DocCode>aria-label</DocCode>.
              </DocParagraph>
              <LiveReference>
                <ArvoSplitIconButton icon="filter" tooltip="Filter" variant="primary" triggerLabel="Filter options" items={FILTER_ITEMS} />
              </LiveReference>
            </DocSection>

            <DocSection id="variants" title="Variants">
              <LiveReference>
                <ArvoSplitIconButton icon="filter" tooltip="Primary" variant="primary" triggerLabel="Primary options" items={FILTER_ITEMS} />
                <ArvoSplitIconButton icon="filter" tooltip="Secondary" variant="secondary" triggerLabel="Secondary options" items={FILTER_ITEMS} />
                <ArvoSplitIconButton icon="filter" tooltip="Tertiary" variant="tertiary" triggerLabel="Tertiary options" items={FILTER_ITEMS} />
              </LiveReference>
            </DocSection>

            <DocSection id="sizes" title="Sizes">
              <LiveReference>
                <ArvoSplitIconButton icon="filter" tooltip="Small" size="sm" triggerLabel="Small options" items={FILTER_ITEMS} />
                <ArvoSplitIconButton icon="filter" tooltip="Medium" size="md" triggerLabel="Medium options" items={FILTER_ITEMS} />
                <ArvoSplitIconButton icon="filter" tooltip="Large" size="lg" triggerLabel="Large options" items={FILTER_ITEMS} />
              </LiveReference>
            </DocSection>

            <DocSection id="states" title="States">
              <ul className="list-disc pl-5 space-y-2 text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><DocStrong>Default</DocStrong> — both segments active.</li>
                <li><DocStrong>Disabled</DocStrong> — both segments inert.</li>
                <li><DocStrong>Loading</DocStrong> — Pattern A skeleton shimmer covering both segments.</li>
                <li><DocStrong>Per-segment disabled</DocStrong> — disable only the action or only the trigger.</li>
              </ul>
              <LiveReference>
                <ArvoSplitIconButton icon="filter" tooltip="Disabled" isDisabled triggerLabel="Disabled options" items={FILTER_ITEMS} />
                <ArvoSplitIconButton icon="filter" tooltip="Loading" isLoading triggerLabel="Loading options" items={FILTER_ITEMS} />
                <ArvoSplitIconButton icon="filter" tooltip="Action off" isActionDisabled triggerLabel="Action off options" items={FILTER_ITEMS} />
              </LiveReference>
            </DocSection>

            <DocSection id="dos-donts" title="Dos & Don'ts">
              <div className="grid gap-4 sm:grid-cols-2">
                <GrayBgCard title="Do" bullets={[
                  'Use widely-recognized icons (filter, sort, export, share).',
                  'Always set tooltip — it is the accessible name.',
                  'Always set triggerLabel — it is the accessible name for the caret.',
                ]} />
                <WhiteBgCard title="Don't" bullets={[
                  'Use ambiguous or custom icons without surrounding context.',
                  'Try to swap the action icon based on selection — there is no selection mode here.',
                  'Use for label-bearing primary actions — pick Split Button instead.',
                ]} />
              </div>
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'Dense toolbars where labels would crowd the surface (filter / sort / export rows).',
                'A primary icon action with 2–4 closely related alternatives that should be one click away.',
                'Per-row controls in tables and lists where horizontal space is tight.',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">When the default action benefits from a visible label — use <DocStrong>Split Button</DocStrong>.</span>,
                <span key="2">When you need the action segment to swap to the last-selected item — use <DocStrong>Split Button</DocStrong> in selection mode.</span>,
                <span key="3">When the icon meaning is not widely recognized — pair with a label or use a different control.</span>,
              ]} />
            </DocSection>
            <DocSection id="no-selection" title="No selection mode">
              <DocCallout title="Different from Split Button">
                Unlike <DocCode>SplitButton</DocCode>, <DocCode>SplitIconButton</DocCode> does <DocStrong>not</DocStrong> track a "last selected" item that swaps into the action segment. The action icon is always the <DocCode>icon</DocCode> prop. To swap based on selection, call <DocCode>setIcon()</DocCode> manually in your <DocCode>onSelect</DocCode> handler, or use <DocCode>SplitButton</DocCode> with <DocCode>displaySelected</DocCode> configured.
              </DocCallout>
            </DocSection>
            <DocSection id="segment-disabled" title="Per-segment disabled">
              <DocParagraph>
                Use <DocCode>isActionDisabled</DocCode> when the default action is contextually unavailable but alternatives still apply. Use <DocCode>isTriggerDisabled</DocCode> when only the default action is valid in this context.
              </DocParagraph>
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@arvo/react" code={`import { ArvoSplitIconButton } from '@arvo/react';

<ArvoSplitIconButton
  icon="filter"
  tooltip="Filter"
  variant="primary"
  triggerLabel="Filter options"
  items={[
    { id: 'all', label: 'All filters', icon: 'filter' },
    { id: 'recent', label: 'Recent', icon: 'clock-o' },
    { id: 'pinned', label: 'Pinned', icon: 'thumb-tack' },
    { id: 'clear', label: 'Clear filters', icon: 'clear' },
  ]}
  onAction={(e) => console.log('action')}
  onSelect={(item) => console.log('selected', item)}
/>

<ArvoSplitIconButton icon="filter" tooltip="Filter" isActionDisabled items={items} />
<ArvoSplitIconButton icon="filter" tooltip="Filter" isTriggerDisabled items={items} />
<ArvoSplitIconButton icon="filter" tooltip="Filter" isLoading items={items} />`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@arvo/js" code={`import { ArvoSplitIconButton } from '@arvo/js';

const splitIcoBtn = ArvoSplitIconButton.initialize(el, {
  icon: 'filter',
  tooltip: 'Filter',
  variant: 'primary',
  triggerLabel: 'Filter options',
  items: [...],
  onAction: (event) => console.log('action clicked'),
  onSelect: (item) => console.log('picked', item),
});

splitIcoBtn.open();
splitIcoBtn.close();
splitIcoBtn.toggle();

splitIcoBtn.setIcon('sort');         // swap action icon manually
splitIcoBtn.disabled(true);
splitIcoBtn.actionDisabled(true);
splitIcoBtn.triggerDisabled(true);
splitIcoBtn.setLoading(true);
splitIcoBtn.destroy();`} />
            </DocSection>
            <DocSection id="props" title="Props">
              <DocParagraph><DocCode>ArvoSplitIconButton</DocCode> also accepts standard <DocCode>HTMLButtonElement</DocCode> attributes via spread on the action segment.</DocParagraph>
              <PropsTable rows={PROPS} />
              <DocCallout>
                Menu size is derived from the trigger <DocCode>size</DocCode> automatically (sm → sm menu, md/lg → md menu).
              </DocCallout>
            </DocSection>
            <DocSection id="css-vars" title="CSS variables">
              <DocParagraph>The action segment carries <DocCode>arvo-icon-btn</DocCode> (square dimensions, hover / focus / active inherited from the icon-button base). The trigger uses <DocCode>arvo-btn</DocCode> for color tokens but a narrow caret-strip layout.</DocParagraph>
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
                { key: 'Tab', action: 'Move focus into action, then trigger, then out (two stops).' },
                { key: 'Shift+Tab', action: 'Reverse order.' },
                { key: 'Enter / Space (action)', action: 'Activate the action segment.' },
                { key: 'ArrowDown (action)', action: 'Open the menu and focus the first item (shortcut).' },
                { key: 'Enter / Space (trigger)', action: 'Toggle the menu.' },
                { key: 'ArrowDown / ArrowUp (trigger)', action: 'Open the menu and focus the first / last item.' },
                { key: 'Escape (menu open)', action: 'Close the menu and return focus to the trigger.' },
              ]} />
            </DocSection>
            <DocSection id="aria" title="ARIA attributes">
              <AriaTable rows={ARIA.length ? ARIA : [
                { attr: 'role="group"', when: 'Wrapper. Groups the two segments for assistive technology.' },
                { attr: 'aria-label (action)', when: 'Set automatically from the tooltip prop. Required for icon-only.' },
                { attr: 'aria-haspopup="menu"', when: 'On the trigger. Indicates the trigger opens a menu.' },
                { attr: 'aria-expanded', when: 'On the trigger. Toggled when the menu opens / closes.' },
                { attr: 'aria-label (trigger)', when: 'From triggerLabel (default: "Show options").' },
                { attr: 'aria-disabled', when: 'On the wrapper when isDisabled is true.' },
                { attr: 'aria-busy', when: 'On the wrapper during loading state.' },
              ]} />
            </DocSection>
            <DocSection id="focus" title="Focus">
              <DocList items={[
                'Each segment displays its own focus ring; the unfocused segment never shows it.',
                <span key="2">Disabled segments are removed from the tab order via the native <DocCode>disabled</DocCode> attribute.</span>,
                'On menu close (Escape or selection), focus returns to the trigger segment.',
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
