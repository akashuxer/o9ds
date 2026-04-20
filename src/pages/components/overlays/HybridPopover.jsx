import { useState, useMemo } from 'react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocSection, { DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import { PropsTable, KeyboardTable, AriaTable, MethodsTable, EventsTable } from '../../../LayoutComponents/ComponentDocPrimitives'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const PROPS = [
  { prop: 'triggerRef', type: 'React.RefObject<HTMLElement | null>', desc: 'Ref to the trigger element.' },
  { prop: 'isOpen / defaultOpen / onOpenChange', type: 'open-state API', desc: 'Same controlled/uncontrolled API as O9Popover.' },
  { prop: 'variant', type: "'multi' | 'single' | 'reorder'", default: "'multi'", desc: 'Selection mode. multi → checkboxes; single → radios; reorder → drag-and-drop only.' },
  { prop: 'items', type: 'HybridPopoverItem[]', desc: 'Flat item list when groups are not used.' },
  { prop: 'groups', type: 'HybridPopoverGroup[]', desc: 'Grouped item structure: { id, label, items }.' },
  { prop: 'value', type: 'string | string[] | null', desc: 'Controlled selected value(s). string[] for multi, string for single.' },
  { prop: 'onChange', type: '(value, detail) => void', desc: 'Selection change callback.' },
  { prop: 'search', type: 'SearchConfig | boolean', desc: 'Show the search input. Pass an object to configure placeholder, debounce, badge counter.' },
  { prop: 'conditional', type: 'ConditionalConfig', desc: 'And/Or toggle for multi mode.' },
  { prop: 'enableReorder', type: 'boolean', default: 'false', desc: 'Enable drag-and-drop reordering.' },
  { prop: 'inline', type: 'boolean', default: 'false', desc: 'Render inline (no popover wrapper).' },
  { prop: 'empty', type: 'EmptyConfig', desc: 'Empty-state configuration when no items match.' },
  { prop: 'isLoading', type: 'boolean', default: 'false', desc: 'Pattern B skeleton loading.' },
]

export default function HybridPopover() {
  const [tab, setTab] = useState('Overview')
  const sections = useMemo(() => {
    if (tab === 'Overview') return [{ id: 'purpose', label: 'Purpose' }, { id: 'modes', label: 'Modes' }]
    if (tab === 'Usage') return [{ id: 'when', label: 'When to use' }, { id: 'when-not', label: 'When not to use' }]
    if (tab === 'Code/APIs') return [{ id: 'react', label: 'React' }, { id: 'js', label: 'Vanilla JS' }, { id: 'props', label: 'Props' }, { id: 'methods', label: 'Methods (JS)' }, { id: 'events', label: 'Events (JS)' }]
    if (tab === 'Accessibility') return [{ id: 'keyboard', label: 'Keyboard' }, { id: 'aria', label: 'ARIA' }]
    return []
  }, [tab])

  return (
    <PageWithToc sections={sections}>
      <div className="space-y-8">
        <PageHeader
          title="Hybrid Popover"
          description="Configurable overlay that composes Popover with structured filter-list content. Multi-select (checkboxes + select-all + indeterminate), single-select (radios), drag-and-drop reordering, grouped items, search, And/Or conditional, corner resize handles, Pattern B loading."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 12a1 1 0 011-1h16a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zM3 20a1 1 0 011-1h16a1 1 0 011 1v.01" /></svg>}
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>Use Hybrid Popover for any complex filter / picker overlay that needs more than a flat select. The component handles search, grouping, multi-select, conditional logic, drag reordering, and select-all — all wired into the same overlay shell as O9Popover.</DocParagraph>
            </DocSection>
            <DocSection id="modes" title="Modes">
              <DocList items={[
                <span key="1"><DocStrong>multi</DocStrong> — checkboxes with select-all, exclude, and indeterminate states. Apply commits the full selection.</span>,
                <span key="2"><DocStrong>single</DocStrong> — radios for mutually exclusive options.</span>,
                <span key="3"><DocStrong>reorder</DocStrong> (selectionMode="none" + enableReorder) — let users drag rows without selecting them (column order/visibility).</span>,
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'Multi-select filter picker (status, tier, region) with optional search.',
                'Grouped filter sets (Americas / Europe / APAC) with per-group select-all.',
                'Column order/visibility configurators that need drag-and-drop.',
                'Filters with And/Or conditional toggles.',
                'Pickers with an exclude semantic (mark items with isExcluded).',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">Single value picker without grouping or search — use <DocStrong>Combobox</DocStrong> or <DocStrong>Select</DocStrong>.</span>,
                <span key="2">Action menus — use <DocStrong>Action Menu</DocStrong>.</span>,
                <span key="3">Free-form forms — use <DocStrong>Popover</DocStrong> directly.</span>,
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@o9ds/react" code={`import { O9HybridPopover } from '@o9ds/react';
import { useRef, useState } from 'react';

const triggerRef = useRef(null);
const [value, setValue] = useState<string[]>([]);

<button ref={triggerRef}>Filter</button>

<O9HybridPopover
  triggerRef={triggerRef}
  variant="multi"
  search={{ placeholder: 'Search…', counter: true }}
  groups={[
    { id: 'americas', label: 'Americas', items: [
      { value: 'us', label: 'United States' },
      { value: 'br', label: 'Brazil' },
    ]},
    { id: 'europe', label: 'Europe', items: [
      { value: 'de', label: 'Germany' },
      { value: 'fr', label: 'France' },
    ]},
  ]}
  value={value}
  onChange={(next) => setValue(next)}
  conditional={{ value: 'and' }}
/>

// Single-select with flat items
<O9HybridPopover triggerRef={triggerRef} variant="single" items={items} value={value} onChange={setValue} />

// Reorder mode (no selection)
<O9HybridPopover triggerRef={triggerRef} variant="reorder" items={cols} enableReorder />`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@o9ds/js" code={`import { O9HybridPopover } from '@o9ds/js';

const hpop = O9HybridPopover.initialize(trigger, {
  variant: 'multi',
  groups,
  value: [],
  search: { placeholder: 'Search', counter: true },
  conditional: { value: 'and' },
  onChange: (value, detail) => console.log(value),
});

hpop.open();
hpop.close();
hpop.value(['us', 'br']);
hpop.setItems(items);
hpop.setGroups(groups);
hpop.setLoading(true);
hpop.destroy();`} />
            </DocSection>
            <DocSection id="props" title="Props"><PropsTable rows={PROPS} /></DocSection>
            <DocSection id="methods" title="Methods (JS)">
              <MethodsTable rows={[
                { method: 'O9HybridPopover.initialize(trigger, options)', returns: 'O9HybridPopover', desc: 'Factory.' },
                { method: 'open() / close() / toggle() / isOpen()', desc: 'Open state control (delegates to inner Popover).' },
                { method: 'value(v?)', returns: 'string | string[] | null | void', desc: 'Get/set selected value(s).' },
                { method: 'setItems(items) / setGroups(groups)', desc: 'Replace items or groups.' },
                { method: 'setLoading(b)', desc: 'Toggle Pattern B loading.' },
                { method: 'reposition()', desc: 'Force reposition.' },
                { method: 'destroy()', desc: 'Tear down.' },
              ]} />
            </DocSection>
            <DocSection id="events" title="Custom events (JS)">
              <EventsTable rows={[
                { event: 'hpop:open / hpop:close', payload: '—', desc: 'Forwarded from the inner Popover.' },
                { event: 'hpop:change', payload: '{ value, changedValue, isSelected? }', desc: 'Fires on selection change.' },
                { event: 'hpop:reorder', payload: '{ from, to, value }', desc: 'Fires when items are reordered.' },
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Accessibility' && (
          <div className="space-y-12">
            <DocSection id="keyboard" title="Keyboard">
              <KeyboardTable rows={[
                { key: 'Enter / Space (on trigger)', action: 'Open the picker and focus the search or list.' },
                { key: 'Type-to-filter', action: 'Filters the visible items.' },
                { key: 'ArrowUp / ArrowDown', action: 'Move active option.' },
                { key: 'Space', action: 'Toggle selection (multi) / select (single).' },
                { key: 'Enter (on Apply)', action: 'Commit and close.' },
                { key: 'Escape', action: 'Close the popover and return focus to the trigger.' },
              ]} />
            </DocSection>
            <DocSection id="aria" title="ARIA">
              <AriaTable rows={[
                { attr: 'role="dialog"', when: 'On the popover panel.' },
                { attr: 'role="listbox"', when: 'On the items list.' },
                { attr: 'role="option" + aria-selected', when: 'On each option.' },
                { attr: 'aria-multiselectable', when: 'Set when variant is "multi".' },
                { attr: 'aria-haspopup="dialog" / aria-expanded / aria-controls', when: 'On the trigger.' },
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
