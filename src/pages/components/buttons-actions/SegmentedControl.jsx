import { useState, useMemo } from 'react'
import { ArvoSegmentedControl } from '@arvo/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs, { useDocTabUrl } from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DosDontCards from '../../../LayoutComponents/DosDontCards'
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

const DESCRIPTOR = getDescriptor('segmented-control')
const PROPS = DESCRIPTOR?.props ?? []
const CSS_VARS = DESCRIPTOR?.cssVarGroups ?? []
const METHODS = DESCRIPTOR?.methods ?? []
const EVENTS = DESCRIPTOR?.events ?? []
const KEYBOARD = DESCRIPTOR?.keyboard ?? []
const ARIA = DESCRIPTOR?.aria ?? []

const VIEW_ITEMS = [
  { value: 'list', label: 'List' },
  { value: 'grid', label: 'Grid' },
  { value: 'kanban', label: 'Kanban' },
]

const DENSITY_ITEMS = [
  { value: 'compact', label: 'Compact' },
  { value: 'comfortable', label: 'Comfortable' },
  { value: 'spacious', label: 'Spacious' },
]

const ICON_ITEMS = [
  { value: 'list', label: 'List', icon: 'list' },
  { value: 'grid', label: 'Grid', icon: 'th' },
]

const COMPARE_ROWS = [
  ['ArvoSegmentedControl', 'choosing a setting, value, view, filter, preference, or boolean / operator (radio-group semantics)'],
  ['ArvoButtonGroup', 'a toolbar of commands or toggle-button states (button / toggle-button semantics)'],
]

export default function SegmentedControl() {
  const [tab, setTab] = useDocTabUrl(TABS)
  const [view, setView] = useState('list')

  const sections = useMemo(() => {
    if (tab === 'Overview') return [
      { id: 'purpose', label: 'Purpose' },
      { id: 'anatomy', label: 'Anatomy' },
      { id: 'variants', label: 'Variants' },
      { id: 'sizes', label: 'Sizes' },
      { id: 'icon-only', label: 'Icon-only' },
      { id: 'dos-donts', label: 'Dos & Don\'ts' },
    ]
    if (tab === 'Usage') return [
      { id: 'when', label: 'When to use' },
      { id: 'when-not', label: 'When not to use' },
      { id: 'scenarios', label: 'Scenarios' },
      { id: 'best-practices', label: 'Best practices' },
      { id: 'vs-btn-grp', label: 'vs Button Group' },
      { id: 'examples', label: 'Examples' },
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
          title="Segmented Control"
          description="Compact single-select control for choosing between peer values that set a setting, view, filter, preference, or boolean / operator. Renders radio-group semantics with arrow-key navigation that moves and selects in one step."
          componentSlug="segmented-control"
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18v6H3V4zm0 10h18v6H3v-6zM9 4v16" /></svg>}
        />

        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>
                A Segmented Control lets users pick exactly one value from a small set of peer options. Use it for switching views (List / Grid / Kanban), choosing a density (Compact / Comfortable / Spacious), or toggling a boolean operator (AND / OR). Semantically it is a radio group; visually it reads as a single connected control.
              </DocParagraph>
            </DocSection>

            <DocSection id="anatomy" title="Anatomy">
              <DocParagraph>
                A Segmented Control is a <DocStrong>radiogroup container</DocStrong> wrapping one <DocStrong>option button</DocStrong> per value. Each option carries an <DocCode>aria-checked</DocCode> state, with an active visual treatment on the currently selected option.
              </DocParagraph>
              <LiveReference>
                <ArvoSegmentedControl ariaLabel="View type" items={VIEW_ITEMS} value={view} onChange={({ value }) => setView(value)} />
              </LiveReference>
            </DocSection>

            <DocSection id="variants" title="Variants">
              <DocParagraph>Two variants tune the active background tone. Use <DocStrong>secondary</DocStrong> when the control sits in a busier surface (toolbars, panels) and you want a lower-emphasis active state.</DocParagraph>
              <LiveReference>
                <ArvoSegmentedControl ariaLabel="Density (primary)" items={DENSITY_ITEMS} defaultValue="comfortable" />
                <ArvoSegmentedControl ariaLabel="Density (secondary)" items={DENSITY_ITEMS} defaultValue="comfortable" variant="secondary" />
              </LiveReference>
            </DocSection>

            <DocSection id="sizes" title="Sizes">
              <DocParagraph>Two heights: <DocCode>lg</DocCode> (default, 32px) for stand-alone controls and <DocCode>sm</DocCode> (24px) for dense toolbars and table cells.</DocParagraph>
              <LiveReference>
                <ArvoSegmentedControl ariaLabel="Density (sm)" items={DENSITY_ITEMS} defaultValue="comfortable" size="sm" />
                <ArvoSegmentedControl ariaLabel="Density (lg)" items={DENSITY_ITEMS} defaultValue="comfortable" size="lg" />
              </LiveReference>
            </DocSection>

            <DocSection id="icon-only" title="Icon-only">
              <DocParagraph>Set <DocCode>isIconOnly</DocCode> for compact view-switchers. The option <DocCode>label</DocCode> still drives the accessible name on each option.</DocParagraph>
              <LiveReference>
                <ArvoSegmentedControl ariaLabel="View type (icon)" items={ICON_ITEMS} defaultValue="grid" isIconOnly />
              </LiveReference>
            </DocSection>

            <DocSection id="dos-donts" title="Dos & Don'ts">
              <DosDontCards
                doItems={[
                  'Use for 2–4 peer values (settings, views, filters, operators).',
                  'Always set ariaLabel — it labels the radiogroup for assistive tech.',
                  'Pair the icon-only layout with a clear surrounding label or context.',
                ]}
                dontItems={[
                  'Use for command actions (Save / Export / Share) — that is a Button Group.',
                  'Use when one option is more prominent than the others — use Buttons with primary / secondary variants.',
                  'Stack 5+ options — switch to Select or Radio Group.',
                ]}
              />
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'Switching the current view (List / Grid / Kanban).',
                'Picking a density preference (Compact / Comfortable / Spacious).',
                'Choosing a date scope (Day / Week / Month).',
                'Toggling a boolean operator inside a query builder (AND / OR).',
              ]} />
            </DocSection>

            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">For command-style actions — use <DocStrong>Button Group</DocStrong>.</span>,
                <span key="2">For independent toggles where multiple values can be selected — use <DocStrong>Button Group</DocStrong> in multi-select mode or <DocStrong>Checkbox Group</DocStrong>.</span>,
                <span key="3">For long lists of values (5+) — use <DocStrong>Select</DocStrong> or <DocStrong>Radio Group</DocStrong>.</span>,
              ]} />
            </DocSection>

            <DocSection id="scenarios" title="Scenarios">
              <ul className="space-y-3 text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><DocStrong>List / Grid / Kanban view switcher</DocStrong> — switching how a collection is rendered. Always pair with a stable ariaLabel such as &ldquo;View type&rdquo;.</li>
                <li><DocStrong>Day / Week / Month scope</DocStrong> — controls the period a calendar or report covers; pair with the chart or table heading so context is clear.</li>
                <li><DocStrong>AND / OR operator</DocStrong> — toggling a query-builder operator inside a filter row. Use the secondary variant so the control reads as part of the inline filter.</li>
              </ul>
            </DocSection>

            <DocSection id="best-practices" title="Best practices">
              <DocList items={[
                'Place the control directly above or beside the content it filters — not in a distant toolbar unless the relationship is obvious.',
                'Keep option labels short (1–2 words). Use icon-only mode only when icons are universally understood in your product.',
                'Reflect the selected value in the page heading or table title when the control changes scope (e.g. "Orders — Week view").',
                'Disable the control while async data loads rather than showing a stale selection that no longer applies.',
              ]} />
            </DocSection>

            <DocSection id="vs-btn-grp" title="Segmented Control vs Button Group">
              <DocParagraph>
                The two controls look similar but model different intents. Choose by what the control <DocStrong>means</DocStrong>, not by visual treatment.
              </DocParagraph>
              <SimpleTable columns={['Use ...', 'When the control behaves like ...']} rows={COMPARE_ROWS} />
              <DocCallout title="Rule of thumb">
                If swapping the value changes <DocStrong>what the user sees or filters</DocStrong>, it is a Segmented Control. If pressing the button <DocStrong>does something</DocStrong>, it is a Button Group.
              </DocCallout>
            </DocSection>

            <DocSection id="examples" title="Examples">
              <ul className="space-y-3 text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><DocStrong>List / Grid / Kanban view switcher</DocStrong> — switching how a collection is rendered. Always pair with a stable <DocCode>ariaLabel="View type"</DocCode>.</li>
                <li><DocStrong>Day / Week / Month scope</DocStrong> — controls the period a calendar or report covers; pair with the chart or table heading.</li>
                <li><DocStrong>AND / OR operator</DocStrong> — toggling a query builder operator. Use the <DocCode>secondary</DocCode> variant to read as part of an inline filter row.</li>
              </ul>
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@arvo/react" code={`import { ArvoSegmentedControl } from '@arvo/react';

<ArvoSegmentedControl
  ariaLabel="View type"
  items={[
    { value: 'list', label: 'List' },
    { value: 'grid', label: 'Grid' },
    { value: 'kanban', label: 'Kanban' },
  ]}
  defaultValue="list"
  onChange={({ value, previousValue }) => console.log(value, previousValue)}
/>

// Variant + size
<ArvoSegmentedControl
  ariaLabel="Density"
  items={[
    { value: 'compact', label: 'Compact' },
    { value: 'comfortable', label: 'Comfortable' },
    { value: 'spacious', label: 'Spacious' },
  ]}
  defaultValue="comfortable"
  variant="secondary"
  size="sm"
/>

// Icon-only
<ArvoSegmentedControl
  ariaLabel="View type"
  items={[
    { value: 'list', label: 'List', icon: 'list' },
    { value: 'grid', label: 'Grid', icon: 'th' },
  ]}
  defaultValue="grid"
  isIconOnly
/>`} />
            </DocSection>

            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@arvo/js" code={`import { ArvoSegmentedControl } from '@arvo/js';

const el = document.querySelector('#view-switcher');
const ctrl = ArvoSegmentedControl.initialize(el, {
  ariaLabel: 'View type',
  items: [
    { value: 'list', label: 'List' },
    { value: 'grid', label: 'Grid' },
  ],
  value: 'list',
  onChange: ({ value, previousValue }) => {
    console.log('Switched from', previousValue, 'to', value);
  },
});

ctrl.value('grid');     // setter
ctrl.value();           // getter
ctrl.disabled(true);
ctrl.destroy();`} />
            </DocSection>

            <DocSection id="props" title="Props">
              <DocParagraph><DocCode>ArvoSegmentedControl</DocCode> uses controlled (<DocCode>value</DocCode>) or uncontrolled (<DocCode>defaultValue</DocCode>) selection. Each item passes through to a <DocCode>{`<button role="radio">`}</DocCode>.</DocParagraph>
              <PropsTable rows={PROPS} />
            </DocSection>

            <DocSection id="css-vars" title="CSS variables">
              <DocParagraph>Override on <DocCode>.arvo-seg-ctrl</DocCode> or a parent to theme the control.</DocParagraph>
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
                { key: 'ArrowLeft / ArrowUp', action: 'Move focus and selection to the previous enabled option.' },
                { key: 'ArrowRight / ArrowDown', action: 'Move focus and selection to the next enabled option.' },
                { key: 'Home', action: 'Move focus and selection to the first enabled option.' },
                { key: 'End', action: 'Move focus and selection to the last enabled option.' },
                { key: 'Enter / Space', action: 'Activate the focused option (selects it).' },
                { key: 'Tab / Shift+Tab', action: 'Move focus into / out of the radiogroup. Only one option is in the tab order at a time.' },
              ]} />
              <DocCallout>
                Arrow keys move <DocStrong>and</DocStrong> select in one step. This matches the WAI-ARIA radio-group pattern — the user does not press Space after arrowing.
              </DocCallout>
            </DocSection>

            <DocSection id="aria" title="ARIA attributes">
              <DocParagraph>
                Renders <DocCode>role="radiogroup"</DocCode> with each option as a <DocCode>{`<button role="radio" aria-checked>`}</DocCode>. <DocCode>ariaLabel</DocCode> is required and is read out as the group label.
              </DocParagraph>
              <AriaTable rows={ARIA.length ? ARIA : [
                { attr: 'role="radiogroup"', when: 'Always set on the root container.' },
                { attr: 'aria-label', when: 'Required on the root — drives the accessible name of the group.' },
                { attr: 'role="radio"', when: 'On every option button.' },
                { attr: 'aria-checked', when: '"true" on the currently selected option, "false" on others.' },
                { attr: 'aria-disabled', when: '"true" on disabled options. The button also carries the native disabled attribute so it is skipped by keyboard navigation.' },
                { attr: 'aria-busy', when: 'Set on the root during loading.' },
              ]} />
            </DocSection>

            <DocSection id="focus" title="Focus">
              <DocList items={[
                <span key="1">Roving tabindex: only the selected (or first enabled) option is in the tab order; the rest carry <DocCode>tabindex="-1"</DocCode>.</span>,
                <span key="2">Disabled options carry both <DocCode>disabled</DocCode> and <DocCode>aria-disabled="true"</DocCode> so assistive tech and keyboard navigation skip them.</span>,
                <span key="3">Focus styling matches the rest of the form-input system — see <DocCode>Button</DocCode> for the focus ring spec.</span>,
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
