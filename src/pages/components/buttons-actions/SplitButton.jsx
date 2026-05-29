import { useState, useMemo } from 'react'
import { ArvoSplitButton } from '@arvo/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs, { useDocTabUrl } from '../../../LayoutComponents/DocTabs'
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

const DESCRIPTOR = getDescriptor('split-button')
const PROPS = DESCRIPTOR?.props ?? []
const CSS_VARS = DESCRIPTOR?.cssVarGroups ?? []
const METHODS = DESCRIPTOR?.methods ?? []
const EVENTS = DESCRIPTOR?.events ?? []
const KEYBOARD = DESCRIPTOR?.keyboard ?? []
const ARIA = DESCRIPTOR?.aria ?? []

const SAVE_ITEMS = [
  { id: 'save', label: 'Save', icon: 'save' },
  { id: 'save-as', label: 'Save As', icon: 'duplicate' },
  { id: 'save-all', label: 'Save All', icon: 'floppy-o' },
]

const SIZE_TABLE_ROWS = [
  ['sm', '24px', '12px', '16px', '16px', '16px', '4px 8px'],
  ['md', '32px', '14px', '20px', '16px', '20px', '6px 12px'],
  ['lg', '40px', '16px', '24px', '16px', '24px', '8px 16px'],
]

export default function SplitButton() {
  const [tab, setTab] = useDocTabUrl(TABS)

  const sections = useMemo(() => {
    if (tab === 'Overview') return [
      { id: 'purpose', label: 'Purpose' },
      { id: 'anatomy', label: 'Anatomy' },
      { id: 'modes', label: 'Modes' },
      { id: 'variants', label: 'Variants' },
      { id: 'sizes', label: 'Sizes' },
      { id: 'states', label: 'States' },
      { id: 'dos-donts', label: 'Dos & Don\'ts' },
    ]
    if (tab === 'Usage') return [
      { id: 'when', label: 'When to use' },
      { id: 'when-not', label: 'When not to use' },
      { id: 'segment-disabled', label: 'Per-segment disabled' },
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
          title="Split Button"
          description="Two-segment action control: an executable action button on the left and a separate dropdown trigger on the right that opens an ActionMenu of alternatives."
          componentSlug="split-button"
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6h12v12H3V6zm15 6l3-3v6l-3-3z" /></svg>}
        />

        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>
                A Split Button surfaces the most common action directly so users can activate it in one click, while keeping related alternatives one click away through a caret trigger. Use it for Save / Save As / Save All, Export / Export As, Print / Print Preview, or any action that has a primary form and a small set of related variants.
              </DocParagraph>
            </DocSection>

            <DocSection id="anatomy" title="Anatomy">
              <DocParagraph>
                A Split Button is a <DocStrong>group</DocStrong> wrapping two segments: an <DocStrong>action segment</DocStrong> (left) that fires <DocCode>onAction</DocCode>, and a <DocStrong>trigger segment</DocStrong> (right) that opens an <DocCode>ArvoActionMenu</DocCode>. Both segments share the same variant and size; a 1px sliver between them keeps focus rings legible.
              </DocParagraph>
              <LiveReference>
                <ArvoSplitButton label="Save" icon="save" variant="primary" items={SAVE_ITEMS} triggerLabel="Save options" />
              </LiveReference>
            </DocSection>

            <DocSection id="modes" title="Modes">
              <DocList items={[
                <span key="1"><DocStrong>Action mode</DocStrong> (default) — the left segment always fires a fixed action; the menu offers related alternatives that fire <DocCode>onSelect</DocCode>.</span>,
                <span key="2"><DocStrong>Selection mode</DocStrong> — the last-picked menu item becomes the new default action. Classic Save / Save As / Save All UX where the most recently used action surfaces as the default.</span>,
              ]} />
            </DocSection>

            <DocSection id="variants" title="Variants">
              <DocParagraph>Three variants match the underlying Button: use one primary split button per region; secondary or tertiary for supporting actions and toolbars.</DocParagraph>
              <LiveReference>
                <ArvoSplitButton label="Primary" icon="save" variant="primary" items={SAVE_ITEMS} triggerLabel="Primary options" />
                <ArvoSplitButton label="Secondary" icon="save" variant="secondary" items={SAVE_ITEMS} triggerLabel="Secondary options" />
                <ArvoSplitButton label="Tertiary" icon="save" variant="tertiary" items={SAVE_ITEMS} triggerLabel="Tertiary options" />
              </LiveReference>
            </DocSection>

            <DocSection id="sizes" title="Sizes">
              <DocParagraph>Three sizes scale height, padding, font, and the leading icon. The caret stays at 16px across all sizes for visual consistency.</DocParagraph>
              <LiveReference>
                <ArvoSplitButton label="Small" icon="save" size="sm" items={SAVE_ITEMS} triggerLabel="Small options" />
                <ArvoSplitButton label="Medium" icon="save" size="md" items={SAVE_ITEMS} triggerLabel="Medium options" />
                <ArvoSplitButton label="Large" icon="save" size="lg" items={SAVE_ITEMS} triggerLabel="Large options" />
              </LiveReference>
            </DocSection>

            <DocSection id="states" title="States">
              <ul className="list-disc pl-5 space-y-2 text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><DocStrong>Default</DocStrong> — both segments active and discoverable.</li>
                <li><DocStrong>Disabled</DocStrong> — both segments inert; menu cannot open.</li>
                <li><DocStrong>Loading</DocStrong> — Pattern A skeleton shimmer covering both segments at once; treats the control as a single cohesive surface during async work.</li>
                <li><DocStrong>Per-segment disabled</DocStrong> — disable only the action or only the trigger when the alternatives are still relevant in context.</li>
              </ul>
              <LiveReference>
                <ArvoSplitButton label="Disabled" icon="save" isDisabled items={SAVE_ITEMS} triggerLabel="Disabled options" />
                <ArvoSplitButton label="Loading" icon="save" isLoading items={SAVE_ITEMS} triggerLabel="Loading options" />
                <ArvoSplitButton label="Action off" icon="save" isActionDisabled items={SAVE_ITEMS} triggerLabel="Action off options" />
              </LiveReference>
            </DocSection>

            <DocSection id="dos-donts" title="Dos & Don'ts">
              <div className="grid gap-4 sm:grid-cols-2">
                <GrayBgCard title="Do" bullets={[
                  'Use when one action is clearly the most common and the others are close cousins.',
                  'Always set triggerLabel — it becomes the aria-label for the caret segment.',
                  'Match the menu items to the action label — alternatives, not unrelated commands.',
                ]} />
                <WhiteBgCard title="Don't" bullets={[
                  'Mix unrelated commands in the menu — use a Dropdown Button or Action Menu instead.',
                  'Hide the only available action behind the trigger — surface it as the action segment.',
                  'Stack multiple primary Split Buttons in one row — pick one default action.',
                ]} />
              </div>
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'A primary action has 1–4 closely related variants (Save / Save As / Save All).',
                'Power users will mostly take the default but occasionally need an alternative.',
                'You want to keep the toolbar compact while still exposing the alternatives.',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">All commands carry equal weight — use a <DocStrong>Dropdown Button</DocStrong>.</span>,
                <span key="2">There is no clear default — use a <DocStrong>Dropdown Button</DocStrong> so users do not accidentally fire one.</span>,
                <span key="3">The menu items are unrelated commands — use an <DocStrong>Action Menu</DocStrong> off an Icon Button.</span>,
              ]} />
            </DocSection>
            <DocSection id="segment-disabled" title="Per-segment disabled">
              <DocParagraph>
                Use <DocCode>isActionDisabled</DocCode> when the default action is contextually unavailable but alternatives still apply (e.g. nothing to "Save" yet, but "Save As..." would create a new file). Use <DocCode>isTriggerDisabled</DocCode> when only one action is valid in this context.
              </DocParagraph>
            </DocSection>
            <DocSection id="best-practices" title="Best practices">
              <DocList items={[
                'Keep the action label short — the caret already adds visual width.',
                'In selection mode, ensure the menu items have stable IDs so the last-selected value survives data refreshes.',
                'For destructive defaults, prefer a Dropdown Button so the destructive action is never one click away.',
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@arvo/react" code={`import { ArvoSplitButton } from '@arvo/react';

// Action mode (default)
<ArvoSplitButton
  label="Save"
  icon="save"
  variant="primary"
  items={[
    { id: 'save', label: 'Save', icon: 'save' },
    { id: 'save-as', label: 'Save As', icon: 'duplicate' },
    { id: 'save-all', label: 'Save All', icon: 'floppy-o' },
  ]}
  onAction={(e) => console.log('action')}
  onSelect={(item) => console.log('selected', item)}
  triggerLabel="Save options"
/>

// Selection mode — last-picked item becomes the default action
<ArvoSplitButton
  label="Save"
  icon="save"
  mode="selection"
  defaultValue="save"
  items={items}
  onSelect={(item) => console.log('selected', item)}
  triggerLabel="Save options"
/>

// Per-segment disabled
<ArvoSplitButton label="Save" icon="save" isActionDisabled items={items} />
<ArvoSplitButton label="Save" icon="save" isTriggerDisabled items={items} />`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@arvo/js" code={`import { ArvoSplitButton } from '@arvo/js';

const splitBtn = ArvoSplitButton.initialize(el, {
  label: 'Save',
  icon: 'save',
  variant: 'primary',
  items: [
    { id: 'save', label: 'Save', icon: 'save' },
    { id: 'save-as', label: 'Save As', icon: 'duplicate' },
    { id: 'save-all', label: 'Save All', icon: 'floppy-o' },
  ],
  onAction: (event) => console.log('action clicked'),
  onSelect: (item) => console.log('picked', item),
});

splitBtn.open();
splitBtn.close();
splitBtn.toggle();

splitBtn.value();           // current selected item or null
splitBtn.value('save-as');  // set selection

splitBtn.disabled(true);
splitBtn.actionDisabled(true);
splitBtn.triggerDisabled(true);
splitBtn.setLoading(true);
splitBtn.destroy();`} />
            </DocSection>
            <DocSection id="props" title="Props">
              <DocParagraph><DocCode>ArvoSplitButton</DocCode> also accepts standard <DocCode>HTMLButtonElement</DocCode> attributes via spread on the action segment.</DocParagraph>
              <PropsTable rows={PROPS} />
              <DocCallout>
                <DocCode>ArvoSplitButton</DocCode> does not expose a <DocCode>tooltip</DocCode> prop — wrap with <DocCode>ArvoTooltip</DocCode> when one is needed. Menu size is derived from the trigger <DocCode>size</DocCode> automatically (sm trigger → sm menu, md/lg trigger → md menu).
              </DocCallout>
            </DocSection>
            <DocSection id="css-vars" title="CSS variables">
              <DocParagraph>Override on <DocCode>.arvo-split-btn</DocCode> or a parent. Segment-level styling (height, padding, font, hover, focus, active, disabled, loading) is inherited from <DocCode>arvo-btn</DocCode> variant/size modifiers.</DocParagraph>
              <CssVarsGrid groups={CSS_VARS} />
            </DocSection>
            <DocSection id="sizes-table" title="Size reference">
              <SimpleTable columns={['Size', 'Height', 'Font', 'Leading icon', 'Caret', 'Trigger width', 'Action padding']} rows={SIZE_TABLE_ROWS} />
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
                { key: 'ArrowDown (trigger)', action: 'Open the menu and focus the first item.' },
                { key: 'ArrowUp (trigger)', action: 'Open the menu and focus the last item.' },
                { key: 'Escape (menu open)', action: 'Close the menu and return focus to the trigger.' },
              ]} />
              <DocCallout>
                <DocCode>ArrowDown</DocCode> on the action segment is a deliberate WAI-ARIA APG SplitButton shortcut — it opens the menu without firing the action.
              </DocCallout>
            </DocSection>
            <DocSection id="aria" title="ARIA attributes">
              <AriaTable rows={ARIA.length ? ARIA : [
                { attr: 'role="group"', when: 'Wrapper. Groups the two segments for assistive technology.' },
                { attr: 'aria-haspopup="menu"', when: 'On the trigger segment. Indicates the trigger opens a menu.' },
                { attr: 'aria-expanded', when: 'On the trigger. Toggled when the menu opens / closes.' },
                { attr: 'aria-label', when: 'On the trigger, from triggerLabel (default: "Show options").' },
                { attr: 'aria-disabled', when: 'On the wrapper when isDisabled is true.' },
                { attr: 'aria-busy', when: 'On the wrapper during loading state.' },
              ]} />
            </DocSection>
            <DocSection id="focus" title="Focus">
              <DocList items={[
                'Each segment displays its own focus ring; the unfocused segment never shows the ring.',
                <span key="2">When <DocCode>isActionDisabled</DocCode> or <DocCode>isTriggerDisabled</DocCode> is set, the disabled segment is removed from the tab order via the native <DocCode>disabled</DocCode> attribute.</span>,
                'On menu close (Escape or selection), focus returns to the trigger segment.',
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
