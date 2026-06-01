import { useState, useMemo } from 'react'
import { ArvoButtonGroup } from '@arvo/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs, { useDocTabUrl } from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DosDontCards from '../../../LayoutComponents/DosDontCards'
import DocSection, { DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import { PropsTable, CssVarsGrid, KeyboardTable, AriaTable, MethodsTable, EventsTable, LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'
import { getDescriptor } from '../../../data/componentDescriptors.generated'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const DESCRIPTOR = getDescriptor('button-group')
const PROPS = DESCRIPTOR.props
const CSS_VARS = DESCRIPTOR.cssVarGroups



const ITEMS = [
  { value: 'bold', label: 'Bold', icon: 'bold' },
  { value: 'italic', label: 'Italic', icon: 'italic' },
  { value: 'underline', label: 'Underline', icon: 'underline' },
]

const VARIANTS = [
  { name: 'Primary', desc: 'Subtle active state — theme-active-2 background with theme-active text. Default for most toolbars.' },
  { name: 'Secondary', desc: 'High-contrast active state — dark background with inverse text. Use when the group must read more prominently against light surfaces.' },
]

const STATES = [
  { name: 'Default', desc: 'No item selected (single-select) or baseline toggle states (multi-select).' },
  { name: 'Active / selected', desc: 'One or more items visually pressed; communicates current mode or applied formatting.' },
  { name: 'Hover', desc: 'Confirms interactivity on desktop; gated behind fine-pointer media queries.' },
  { name: 'Focus', desc: 'Visible focus ring on the focused item; roving tabindex keeps one item in tab order.' },
  { name: 'Disabled', desc: 'Entire group or individual items blocked; group-level disabled overrides per-item enabled.' },
  { name: 'Loading', desc: 'Group non-interactive with shimmer on child buttons; use when selection depends on async data.' },
]

export default function ButtonGroup() {
  const [tab, setTab] = useDocTabUrl(TABS)
  const [single, setSingle] = useState('bold')
  const sections = useMemo(() => {
    if (tab === 'Overview') return [
      { id: 'purpose', label: 'Purpose' },
      { id: 'anatomy', label: 'Anatomy' },
      { id: 'modes', label: 'Selection modes' },
      { id: 'variants', label: 'Variants' },
      { id: 'sizes', label: 'Sizes' },
      { id: 'states', label: 'States' },
      { id: 'vs-seg-ctrl', label: 'vs Segmented Control' },
      { id: 'icon-only', label: 'Icon-only & overflow' },
      { id: 'dos-donts', label: 'Dos & Don\'ts' },
    ]
    if (tab === 'Usage') return [
      { id: 'when', label: 'When to use' },
      { id: 'when-not', label: 'When not to use' },
      { id: 'scenarios', label: 'Scenarios' },
      { id: 'best-practices', label: 'Best practices' },
    ]
    if (tab === 'Code/APIs') return [{ id: 'react', label: 'React' }, { id: 'js', label: 'Vanilla JS' }, { id: 'props', label: 'Props' }, { id: 'css-vars', label: 'CSS variables' }, { id: 'methods', label: 'Methods (JS)' }, { id: 'events', label: 'Events (JS)' }]
    if (tab === 'Accessibility') return [{ id: 'keyboard', label: 'Keyboard' }, { id: 'aria', label: 'ARIA' }]
    return []
  }, [tab])

  return (
    <PageWithToc sections={sections}>
      <div className="space-y-8">
        <PageHeader
          title="Button Group"
          description="Horizontal grouping of buttons acting as a unified selection control. Supports single-select (default) and multi-select modes, two visual variants, icon-only display, overflow with action menu, and animated label expansion."
          componentSlug="button-group"
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" /></svg>}
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>
                Button Group clusters related actions into one horizontal control so users perceive them as a single unit — not scattered buttons. It is the right pattern when options are adjacent, share context, and differ by mode or toggle state rather than by unrelated workflow steps.
              </DocParagraph>
              <DocParagraph>
                Think of it as a compact toolbar: text formatting (Bold / Italic / Underline), canvas tools (Select / Pan / Draw), or alignment pickers. The group provides shared chrome, consistent sizing, and unified keyboard behavior while each item remains an independently activatable button.
              </DocParagraph>
            </DocSection>

            <DocSection id="anatomy" title="Anatomy">
              <DocParagraph>
                A button group combines a <DocStrong>container</DocStrong> (unified border and background treatment), one or more <DocStrong>items</DocStrong> (child buttons with optional icon and label), and an optional <DocStrong>overflow trigger</DocStrong> (ellipsis icon button when items clip at narrow widths).
              </DocParagraph>
              <LiveReference>
                <ArvoButtonGroup items={ITEMS} value={single} ariaLabel="Text formatting" onChange={({ value }) => setSingle(value)} />
              </LiveReference>
            </DocSection>

            <DocSection id="modes" title="Selection modes">
              <DocList items={[
                <span key="1"><DocStrong>Single-select</DocStrong> — mutually exclusive options. Arrow keys move focus and select in one gesture; only one item shows the active state at a time. Use for alignment, view tools, or any &ldquo;pick one&rdquo; toolbar.</span>,
                <span key="2"><DocStrong>Multi-select</DocStrong> — independent toggles that can be on simultaneously. Space or Enter toggles the focused item without deselecting others. Use for cumulative states like Bold + Italic + Underline.</span>,
                <span key="3"><DocStrong>Expand on select</DocStrong> — single-select only; the active item animates to reveal its label while inactive items collapse to icon-only. Saves horizontal space in dense editors while keeping the current mode readable.</span>,
              ]} />
            </DocSection>

            <DocSection id="variants" title="Variants">
              <DocParagraph>Two visual variants control how the active item is emphasized. Both use transparent default items; the difference is active-state contrast.</DocParagraph>
              <ul className="space-y-2 text-arvo-light-secondary dark:text-neutral-400">
                {VARIANTS.map(({ name, desc }) => (
                  <li key={name}><DocStrong>{name}</DocStrong> — {desc}</li>
                ))}
              </ul>
              <LiveReference>
                <ArvoButtonGroup items={ITEMS.slice(0, 2)} value="bold" variant="primary" ariaLabel="Primary variant" />
                <ArvoButtonGroup items={ITEMS.slice(0, 2)} value="italic" variant="secondary" ariaLabel="Secondary variant" />
              </LiveReference>
            </DocSection>

            <DocSection id="sizes" title="Sizes">
              <DocParagraph>Two sizes scale item height, padding, font, and icon together. Size propagates to child buttons automatically.</DocParagraph>
              <LiveReference>
                <ArvoButtonGroup items={ITEMS} value="bold" size="sm" ariaLabel="Small button group" />
                <ArvoButtonGroup items={ITEMS} value="bold" size="lg" ariaLabel="Large button group" />
              </LiveReference>
            </DocSection>

            <DocSection id="states" title="States">
              <ul className="list-disc pl-5 space-y-2 text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
                {STATES.map(({ name, desc }) => (
                  <li key={name}><DocStrong>{name}</DocStrong> — {desc}</li>
                ))}
              </ul>
            </DocSection>

            <DocSection id="vs-seg-ctrl" title="ButtonGroup vs Segmented Control">
              <DocParagraph>
                The visual treatment is similar; the semantics are not. If the control behaves like a toolbar command, use <DocStrong>Button Group</DocStrong>. If it behaves like choosing a setting, value, view, filter, or operator (List / Grid, Day / Week / Month, AND / OR), use <DocStrong>Segmented Control</DocStrong>.
              </DocParagraph>
              <ul className="list-disc pl-5 space-y-2 text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><DocStrong>Button Group</DocStrong> — toolbar commands or toggle-button states (<DocCode>role="toolbar"</DocCode>, <DocCode>aria-pressed</DocCode> on items).</li>
                <li><DocStrong>Segmented Control</DocStrong> — choosing a setting or preference (<DocCode>role="radiogroup"</DocCode>, <DocCode>aria-checked</DocCode> on items).</li>
              </ul>
            </DocSection>

            <DocSection id="icon-only" title="Icon-only & overflow">
              <DocParagraph>
                Icon-only mode hides labels and requires an icon on every item — pair with a descriptive <DocCode>ariaLabel</DocCode> on the group. When <DocCode>hasOverflow</DocCode> is enabled, clipped items move into an action menu triggered by an ellipsis button at the inline end.
              </DocParagraph>
              <LiveReference>
                <ArvoButtonGroup items={[{ value: 'left', icon: 'align-left' }, { value: 'center', icon: 'align-center' }, { value: 'right', icon: 'align-right' }]} isIconOnly value="center" ariaLabel="Text alignment" />
              </LiveReference>
            </DocSection>

            <DocSection id="dos-donts" title="Dos & Don'ts">
              <DosDontCards
                doItems={['Provide a concise ariaLabel — the group has no visible label', 'Keep item count small (2–5); overflow handles the rest responsively', 'Use multi-select only when states can coexist (formatting toggles)', 'Match variant to surrounding toolbar emphasis (primary vs secondary)']}
                dontItems={['Use for unrelated actions — separate individual buttons instead', 'Mix selection semantics with navigation — use links or tabs', 'Use for 5+ always-visible options — prefer Select or Segmented Control', 'Rely on icon-only items without tooltips or ariaLabel context']}
              />
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'A small set of mutually exclusive options (single-select).',
                'A small set of independent toggles that read as one control (multi-select).',
                'Compact toolbars where each action is one of a few related modes.',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">Many options (5+) — use <DocStrong>Select</DocStrong> or <DocStrong>Combobox</DocStrong>.</span>,
                <span key="2">Unrelated actions — use individual <DocStrong>Button</DocStrong>s separated by spacing.</span>,
                <span key="3">Single binary on/off setting — use <DocStrong>Switch</DocStrong> or <DocStrong>Checkbox</DocStrong>.</span>,
              ]} />
            </DocSection>
            <DocSection id="scenarios" title="Scenarios">
              <ul className="space-y-3 text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><DocStrong>Rich-text toolbar</DocStrong> — Bold / Italic / Underline in multi-select mode; states can stack and the group reads as one formatting control.</li>
                <li><DocStrong>Canvas tool picker</DocStrong> — Select / Pan / Draw in single-select mode; arrow keys switch the active tool without leaving the canvas.</li>
                <li><DocStrong>Table row density toggle</DocStrong> — Compact / Comfortable in a widget header; pair with Segmented Control only if the choice is a view setting, not a command.</li>
                <li><DocStrong>Overflow in narrow toolbars</DocStrong> — enable hasOverflow so clipped items move into an action menu instead of wrapping or truncating labels.</li>
              </ul>
            </DocSection>
            <DocSection id="best-practices" title="Best practices">
              <DocList items={[
                'Place the group adjacent to the content it affects — formatting controls above the editor, alignment controls beside the object.',
                'Use icon-only mode only when every item has a universally understood glyph; add Tooltip on each item or a descriptive ariaLabel on the group.',
                'In multi-select, reflect applied state in the document (e.g. bold text) — do not rely on the pressed state alone.',
                'Disable the entire group during async operations rather than individual items when no selection is valid until data loads.',
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@arvo/react" code={`import { ArvoButtonGroup } from '@arvo/react';

const items = [
  { value: 'bold', label: 'Bold', icon: 'bold' },
  { value: 'italic', label: 'Italic', icon: 'italic' },
  { value: 'underline', label: 'Underline', icon: 'underline' },
];

// Single-select
<ArvoButtonGroup
  items={items}
  value="bold"
  ariaLabel="Text formatting"
  onChange={({ value }) => console.log(value)}
/>

// Multi-select
<ArvoButtonGroup
  items={items}
  value={['bold', 'italic']}
  multiSelect
  ariaLabel="Text formatting"
  onChange={({ value, changedValue, isSelected }) => console.log(value, changedValue, isSelected)}
/>

// Icon-only with expand-on-select
<ArvoButtonGroup items={items} iconOnly expandOnSelect value="bold" ariaLabel="Text formatting" />`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@arvo/js" code={`import { ArvoButtonGroup } from '@arvo/js';

const group = ArvoButtonGroup.initialize(el, {
  items,
  value: 'bold',
  ariaLabel: 'Text formatting',
  onChange: ({ value, previousValue }) => console.log(value),
});

group.value('italic');         // setter
group.value();                 // getter
group.disabled(true);
group.setLoading(true);
group.setVariant('secondary');
group.setItems(newItems);
group.focus();
group.destroy();`} />
            </DocSection>
            <DocSection id="props" title="Props"><PropsTable rows={PROPS} /></DocSection>
            <DocSection id="css-vars" title="CSS variables"><CssVarsGrid groups={CSS_VARS} /></DocSection>
            <DocSection id="methods" title="Methods (JS)">
              <MethodsTable rows={[
                { method: 'ArvoButtonGroup.initialize(el, options)', returns: 'ArvoButtonGroup', desc: 'Factory.' },
                { method: 'value(v?)', returns: 'string|string[]|null|void', desc: 'Get/set selected value(s).' },
                { method: 'disabled(b?)', returns: 'boolean | void', desc: 'Get/set disabled state.' },
                { method: 'setVariant(v)', desc: 'Change visual variant.' },
                { method: 'setLoading(b)', desc: 'Toggle loading state.' },
                { method: 'setItems(items)', desc: 'Replace items and reset selection.' },
                { method: 'focus()', desc: 'Focus the active item.' },
                { method: 'destroy()', desc: 'Clean up.' },
              ]} />
            </DocSection>
            <DocSection id="events" title="Custom events (JS)">
              <EventsTable rows={[{ event: 'btn-grp:change', payload: '{ value, previousValue, changedValue?, selected? }', desc: 'Fires on selection change.' }]} />
            </DocSection>
          </div>
        )}

        {tab === 'Accessibility' && (
          <div className="space-y-12">
            <DocSection id="keyboard" title="Keyboard">
              <KeyboardTable rows={[
                { key: 'ArrowRight', action: 'Move focus to next item. In single-select, also selects.' },
                { key: 'ArrowLeft', action: 'Move focus to previous item. In single-select, also selects.' },
                { key: 'Home', action: 'Move focus to first item.' },
                { key: 'End', action: 'Move focus to last item.' },
                { key: 'Space / Enter', action: 'Multi-select: toggle focused item. Single-select: select focused item.' },
                { key: 'Tab', action: 'Enter/exit toolbar. Only one item in tab order at a time.' },
              ]} />
            </DocSection>
            <DocSection id="aria" title="ARIA">
              <AriaTable rows={[
                { attr: 'role="toolbar"', when: 'On the root container.' },
                { attr: 'aria-orientation="horizontal"', when: 'Always set on the root.' },
                { attr: 'aria-label', when: 'Required on the root.' },
                { attr: 'aria-pressed', when: 'On each child button — "true" if selected, "false" if not.' },
                { attr: 'aria-busy', when: 'On the root during loading.' },
                { attr: 'aria-haspopup / aria-expanded', when: 'On the overflow trigger when overflow is enabled.' },
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
