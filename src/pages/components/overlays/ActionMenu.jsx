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
  { prop: 'items', type: 'ActionMenuItem[]', required: 'Yes', desc: 'Item configs: { id, label, icon?, tone?, disabled?, shortcut?, divider? }.' },
  { prop: 'trailingActions', type: 'ActionMenuItem[]', desc: 'Items rendered in a trailing slot, e.g. inline action.' },
  { prop: 'inlinePopover', type: 'PopoverConfig', desc: 'Optional inline Popover that opens from a sub-item.' },
  { prop: 'inlineHybridPopover', type: 'HybridPopoverConfig', desc: 'Optional inline Hybrid Popover that opens from a sub-item.' },
  { prop: 'placement', type: 'PopoverPlacement', default: "'bottom-start'", desc: 'Menu placement relative to the trigger.' },
  { prop: 'onSelect', type: '(item) => void', desc: 'Fires when an item is activated.' },
]

export default function ActionMenu() {
  const [tab, setTab] = useState('Overview')
  const sections = useMemo(() => {
    if (tab === 'Overview') return [{ id: 'purpose', label: 'Purpose' }, { id: 'item', label: 'Item shape' }]
    if (tab === 'Usage') return [{ id: 'when', label: 'When to use' }, { id: 'when-not', label: 'When not to use' }]
    if (tab === 'Code/APIs') return [{ id: 'react', label: 'React' }, { id: 'js', label: 'Vanilla JS' }, { id: 'props', label: 'Props' }, { id: 'methods', label: 'Methods (JS)' }, { id: 'events', label: 'Events (JS)' }]
    if (tab === 'Accessibility') return [{ id: 'keyboard', label: 'Keyboard' }, { id: 'aria', label: 'ARIA' }]
    return []
  }, [tab])

  return (
    <PageWithToc sections={sections}>
      <div className="space-y-8">
        <PageHeader
          title="Action Menu"
          description="Overlay menu of actions anchored to a trigger. Drives the menu inside Dropdown Button and Dropdown Icon Button. Supports icons, tone variants, dividers, shortcuts, and inline popover/hybrid-popover sub-flows."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>}
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>Use Action Menu when you need a menu of actions hanging off a custom trigger. For standard buttons, prefer <DocStrong>Dropdown Button</DocStrong> or <DocStrong>Dropdown Icon Button</DocStrong> — they handle the trigger + menu composition for you.</DocParagraph>
            </DocSection>
            <DocSection id="item" title="Item shape">
              <CodeBlock language="ts" code={`interface ActionMenuItem {
  id: string;
  label: string;
  icon?: string;
  tone?: 'default' | 'danger';
  shortcut?: string;
  disabled?: boolean;
  divider?: boolean;        // render a divider line under this item
  description?: string;
}`} />
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'A short list of related actions hanging off a non-button trigger (avatar, kebab handle on a non-button surface).',
                'Composing into Dropdown Button / Dropdown Icon Button — those wrap Action Menu for you.',
                'Multi-step menus that include an inline popover or hybrid popover.',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">For standard button menus — use <DocStrong>Dropdown Button</DocStrong> / <DocStrong>Dropdown Icon Button</DocStrong>.</span>,
                <span key="2">For multi-select pickers — use <DocStrong>Hybrid Popover</DocStrong>.</span>,
                <span key="3">For Combobox-style pickers — use <DocStrong>Combobox</DocStrong>.</span>,
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@o9ds/react" code={`import { O9ActionMenu } from '@o9ds/react';
import { useRef } from 'react';

const triggerRef = useRef(null);

const items = [
  { id: 'edit', label: 'Edit', icon: 'edit', shortcut: 'Ctrl+E' },
  { id: 'duplicate', label: 'Duplicate', icon: 'copy' },
  { id: 'divider', divider: true, label: '' },
  { id: 'delete', label: 'Delete', icon: 'bin', tone: 'danger' },
];

<button ref={triggerRef}>Open menu</button>
<O9ActionMenu triggerRef={triggerRef} items={items} onSelect={(item) => handle(item)} />`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@o9ds/js" code={`import { O9ActionMenu } from '@o9ds/js';

const menu = O9ActionMenu.initialize(trigger, {
  items,
  onSelect: (item) => handle(item),
});

menu.open();
menu.close();
menu.toggle();
menu.setItems(newItems);
menu.destroy();`} />
            </DocSection>
            <DocSection id="props" title="Props"><PropsTable rows={PROPS} /></DocSection>
            <DocSection id="methods" title="Methods (JS)">
              <MethodsTable rows={[
                { method: 'O9ActionMenu.initialize(trigger, options)', returns: 'O9ActionMenu', desc: 'Factory.' },
                { method: 'open() / close() / toggle()', desc: 'Open state control.' },
                { method: 'isOpen()', returns: 'boolean', desc: 'Whether the menu is open.' },
                { method: 'setItems(items)', desc: 'Replace menu items.' },
                { method: 'destroy()', desc: 'Tear down.' },
              ]} />
            </DocSection>
            <DocSection id="events" title="Custom events (JS)">
              <EventsTable rows={[
                { event: 'action-menu:open', payload: '—', desc: 'Fires when the menu opens.' },
                { event: 'action-menu:close', payload: '—', desc: 'Fires when the menu closes.' },
                { event: 'action-menu:select', payload: '{ id, label }', desc: 'Fires when an item is activated.' },
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Accessibility' && (
          <div className="space-y-12">
            <DocSection id="keyboard" title="Keyboard">
              <KeyboardTable rows={[
                { key: 'Enter / Space / ArrowDown', action: 'Open the menu and focus the first item.' },
                { key: 'ArrowUp / ArrowDown', action: 'Move focus through items.' },
                { key: 'Home / End', action: 'Jump to first / last item.' },
                { key: 'Enter / Space', action: 'Activate the focused item.' },
                { key: 'Escape', action: 'Close the menu and return focus to the trigger.' },
                { key: 'Type-to-search', action: 'Jump to the next item starting with the typed character.' },
              ]} />
            </DocSection>
            <DocSection id="aria" title="ARIA">
              <AriaTable rows={[
                { attr: 'role="menu"', when: 'On the menu panel.' },
                { attr: 'role="menuitem"', when: 'On each item.' },
                { attr: 'aria-haspopup="menu"', when: 'On the trigger.' },
                { attr: 'aria-expanded', when: 'On the trigger; reflects open state.' },
                { attr: 'aria-controls', when: 'On the trigger; points at the menu.' },
                { attr: 'aria-disabled', when: 'On disabled items.' },
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
