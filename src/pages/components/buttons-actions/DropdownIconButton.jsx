import { useState, useMemo } from 'react'
import { ArvoDropdownIconButton } from '@arvo/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs, { useDocTabUrl } from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DosDontCards from '../../../LayoutComponents/DosDontCards'
import DocSection, { DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import { PropsTable, KeyboardTable, AriaTable, MethodsTable, EventsTable, LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'
import { getDescriptor } from '../../../data/componentDescriptors.generated'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const DESCRIPTOR = getDescriptor('dropdown-icon-button')
const PROPS = DESCRIPTOR.props

const VARIANTS = [
  { name: 'Primary', desc: 'Filled theme background — rare for row menus; use when the trigger is a primary affordance.' },
  { name: 'Secondary', desc: 'Subtle layer background — common for settings or filter triggers in toolbars.' },
  { name: 'Tertiary', desc: 'Ghost treatment — default for table row overflow (ellipsis) and inline actions.' },
  { name: 'Outline', desc: 'Bordered trigger when the icon menu must read clearly on mixed backgrounds.' },
]

const STATES = [
  { name: 'Closed', desc: 'Icon (and optional caret) visible; menu hidden.' },
  { name: 'Open', desc: 'Menu visible; caret rotated if shown; focus moves into the menu.' },
  { name: 'Compact', desc: 'Caret hidden; trigger is a square icon button — same footprint as Icon Button.' },
  { name: 'Disabled', desc: 'No interaction; menu cannot open.' },
  { name: 'Loading', desc: 'Shimmer blocks opening until complete.' },
]

export default function DropdownIconButton() {
  const [tab, setTab] = useDocTabUrl(TABS)
  const sections = useMemo(() => {
    if (tab === 'Overview') return [
      { id: 'purpose', label: 'Purpose' },
      { id: 'anatomy', label: 'Anatomy' },
      { id: 'variants', label: 'Variants' },
      { id: 'compact', label: 'Compact layout' },
      { id: 'states', label: 'States' },
      { id: 'demo', label: 'Live reference' },
      { id: 'dos-donts', label: 'Dos & Don\'ts' },
    ]
    if (tab === 'Usage') return [{ id: 'when', label: 'When to use' }, { id: 'when-not', label: 'When not to use' }]
    if (tab === 'Code/APIs') return [{ id: 'react', label: 'React' }, { id: 'js', label: 'Vanilla JS' }, { id: 'props', label: 'Props' }, { id: 'methods', label: 'Methods (JS)' }, { id: 'events', label: 'Events (JS)' }]
    if (tab === 'Accessibility') return [{ id: 'keyboard', label: 'Keyboard' }, { id: 'aria', label: 'ARIA' }]
    return []
  }, [tab])

  const items = [
    { id: 'edit', label: 'Edit row', icon: 'edit' },
    { id: 'duplicate', label: 'Duplicate', icon: 'copy' },
    { id: 'delete', label: 'Delete row', icon: 'bin', tone: 'danger' },
  ]

  return (
    <PageWithToc sections={sections}>
      <div className="space-y-8">
        <PageHeader
          title="Dropdown Icon Button"
          description="An icon-only trigger that opens an action menu. Composes ArvoIconButton + ArvoActionMenu — ideal for row actions, table cell menus, and dense toolbars."
          componentSlug="dropdown-icon-button"
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01" /></svg>}
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>
                Dropdown Icon Button is the space-efficient sibling of Dropdown Button — an icon-only trigger that opens an action menu. It is the standard pattern for row overflow menus, card kebab actions, and compact toolbars where a text label would consume too much horizontal space.
              </DocParagraph>
              <DocParagraph>
                Because there is no visible text, the <DocCode>tooltip</DocCode> prop is required: it becomes the accessible name (<DocCode>aria-label</DocCode>), hover tooltip, and native <DocCode>title</DocCode>. Write tooltips as verbs or short phrases (&ldquo;More actions&rdquo;, &ldquo;Row options&rdquo;) — not single ambiguous words like &ldquo;Menu&rdquo;.
              </DocParagraph>
            </DocSection>

            <DocSection id="anatomy" title="Anatomy">
              <DocParagraph>
                The trigger combines a primary <DocStrong>icon</DocStrong> (always visible), an optional trailing <DocStrong>caret</DocStrong> (hidden in compact mode), and the connected <DocStrong>action menu</DocStrong>. Non-compact triggers are wider than Icon Button to accommodate the caret; compact triggers are square.
              </DocParagraph>
            </DocSection>

            <DocSection id="variants" title="Variants">
              <DocParagraph>Tertiary is the most common variant for inline row menus. Escalate to secondary or outline only when the trigger needs more visual weight in its context.</DocParagraph>
              <ul className="space-y-2 text-arvo-light-secondary dark:text-neutral-400">
                {VARIANTS.map(({ name, desc }) => (
                  <li key={name}><DocStrong>{name}</DocStrong> — {desc}</li>
                ))}
              </ul>
            </DocSection>

            <DocSection id="compact" title="Compact layout">
              <DocParagraph>
                Enable <DocCode>isCompact</DocCode> to hide the caret and render a square trigger identical in footprint to Icon Button. Use in table cells, list rows, and anywhere horizontal space is at a premium. The tooltip becomes even more important because the caret no longer signals expandability.
              </DocParagraph>
            </DocSection>

            <DocSection id="states" title="States">
              <ul className="list-disc pl-5 space-y-2 text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
                {STATES.map(({ name, desc }) => (
                  <li key={name}><DocStrong>{name}</DocStrong> — {desc}</li>
                ))}
              </ul>
            </DocSection>

            <DocSection id="demo" title="Live reference">
              <LiveReference>
                <ArvoDropdownIconButton icon="ellipsis-v" tooltip="More actions" items={items} />
                <ArvoDropdownIconButton icon="settings" tooltip="Settings" items={items} variant="secondary" />
                <ArvoDropdownIconButton icon="ellipsis-v" tooltip="More" items={items} variant="tertiary" size="sm" isCompact />
              </LiveReference>
            </DocSection>

            <DocSection id="dos-donts" title="Dos & Don'ts">
              <DosDontCards
                doItems={['Use ellipsis-v for generic overflow; pick a specific icon when the menu scope is narrow', 'Write tooltip text that names the target ("Row actions", "Column options")', 'Keep one overflow trigger per row — right-align in LTR tables', 'Use compact mode in fixed-width table columns']}
                dontItems={['Use when a visible label would clarify the action — prefer Dropdown Button', 'Repeat the same tooltip on every row without row context in menu items', 'Hide destructive-only actions with no confirmation path', 'Use primary variant for routine row menus — it competes with page CTAs']}
              />
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'Inline row actions in tables and lists.',
                'Compact toolbars where space precludes a labeled trigger.',
                'Card overflow menus.',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">When the trigger benefits from a visible label — use <DocStrong>Dropdown Button</DocStrong>.</span>,
                <span key="2">For navigation menus — use <DocStrong>Action Menu</DocStrong> with the appropriate trigger.</span>,
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@arvo/react" code={`import { ArvoDropdownIconButton } from '@arvo/react';

const items = [
  { id: 'edit', label: 'Edit row', icon: 'edit' },
  { id: 'duplicate', label: 'Duplicate', icon: 'copy' },
  { id: 'delete', label: 'Delete row', icon: 'bin', tone: 'danger' },
];

<ArvoDropdownIconButton
  icon="ellipsis-v"
  tooltip="More actions"
  items={items}
  variant="tertiary"
  onSelect={(item) => handleSelect(item)}
/>`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@arvo/js" code={`import { ArvoDropdownIconButton } from '@arvo/js';

const dd = ArvoDropdownIconButton.initialize(el, {
  icon: 'ellipsis-v',
  tooltip: 'More actions',
  items,
  onSelect: (item) => handleSelect(item),
});

dd.open();
dd.close();
dd.setItems(newItems);
dd.setIcon('settings');
dd.setTooltip('Settings');
dd.disabled(true);
dd.destroy();`} />
            </DocSection>
            <DocSection id="props" title="Props"><PropsTable rows={PROPS} /></DocSection>
            <DocSection id="methods" title="Methods (JS)">
              <MethodsTable rows={[
                { method: 'ArvoDropdownIconButton.initialize(el, options)', returns: 'ArvoDropdownIconButton', desc: 'Factory.' },
                { method: 'open() / close() / toggle()', desc: 'Menu open state.' },
                { method: 'isOpen()', returns: 'boolean', desc: 'Whether the menu is currently open.' },
                { method: 'setIcon(name)', desc: 'Update the trigger icon.' },
                { method: 'setTooltip(text)', desc: 'Update tooltip + aria-label + title.' },
                { method: 'setItems(items)', desc: 'Replace menu items.' },
                { method: 'disabled(state?)', returns: 'boolean | void', desc: 'Get/set disabled state.' },
                { method: 'setLoading(b)', desc: 'Toggle loading state.' },
                { method: 'destroy()', desc: 'Tear down.' },
              ]} />
            </DocSection>
            <DocSection id="events" title="Custom events (JS)">
              <EventsTable rows={[
                { event: 'dd-icon-btn:open', payload: '—', desc: 'Fires when the menu opens.' },
                { event: 'dd-icon-btn:close', payload: '—', desc: 'Fires when the menu closes.' },
                { event: 'dd-icon-btn:select', payload: '{ id, label }', desc: 'Fires when an item is activated.' },
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Accessibility' && (
          <div className="space-y-12">
            <DocSection id="keyboard" title="Keyboard">
              <KeyboardTable rows={[
                { key: 'Enter / Space / ArrowDown', action: 'Open the menu and focus the first item.' },
                { key: 'ArrowUp / ArrowDown', action: 'Move focus through menu items.' },
                { key: 'Escape', action: 'Close the menu and return focus to the trigger.' },
                { key: 'Tab', action: 'Close the menu and move focus.' },
              ]} />
            </DocSection>
            <DocSection id="aria" title="ARIA">
              <AriaTable rows={[
                { attr: 'aria-label', when: 'Always set via tooltip prop. Required for icon-only buttons.' },
                { attr: 'aria-haspopup="menu"', when: 'Always set on the trigger.' },
                { attr: 'aria-expanded', when: 'Reflects current open state.' },
                { attr: 'aria-controls', when: 'Points at the menu element.' },
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
