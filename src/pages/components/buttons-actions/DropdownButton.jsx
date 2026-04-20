import { useState, useMemo } from 'react'
import { O9DropdownButton } from '@o9ds/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocSection, { DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import { PropsTable, KeyboardTable, AriaTable, MethodsTable, EventsTable, LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const PROPS = [
  { prop: 'label', type: 'string', required: 'Yes', desc: 'Visible button label.' },
  { prop: 'items', type: 'ActionMenuItem[]', required: 'Yes', desc: 'Menu item configurations consumed by the inner ActionMenu.' },
  { prop: 'variant', type: "'primary' | 'secondary' | 'tertiary' | 'outline' | 'danger'", default: "'primary'", desc: 'Inherited from O9Button.' },
  { prop: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", desc: 'Inherited from O9Button.' },
  { prop: 'icon', type: 'string', default: 'undefined', desc: 'Optional leading icon.' },
  { prop: 'isDisabled', type: 'boolean', default: 'false', desc: 'Disable the button and prevent the menu from opening.' },
  { prop: 'isLoading', type: 'boolean', default: 'false', desc: 'Skeleton shimmer overlay.' },
  { prop: 'placement', type: 'PopoverPlacement', default: "'bottom-start'", desc: 'Menu placement relative to the trigger.' },
  { prop: 'onSelect', type: '(item) => void', desc: 'Fires when an item is activated.' },
  { prop: 'onOpenChange', type: '(open: boolean) => void', desc: 'Fires when the menu opens/closes.' },
]

export default function DropdownButton() {
  const [tab, setTab] = useState('Overview')
  const sections = useMemo(() => {
    if (tab === 'Overview') return [{ id: 'purpose', label: 'Purpose' }, { id: 'demo', label: 'Live demo' }]
    if (tab === 'Usage') return [{ id: 'when', label: 'When to use' }, { id: 'when-not', label: 'When not to use' }]
    if (tab === 'Code/APIs') return [{ id: 'react', label: 'React' }, { id: 'js', label: 'Vanilla JS' }, { id: 'props', label: 'Props' }, { id: 'methods', label: 'Methods (JS)' }, { id: 'events', label: 'Events (JS)' }]
    if (tab === 'Accessibility') return [{ id: 'keyboard', label: 'Keyboard' }, { id: 'aria', label: 'ARIA' }]
    return []
  }, [tab])

  const items = [
    { id: 'edit', label: 'Edit', icon: 'edit' },
    { id: 'duplicate', label: 'Duplicate', icon: 'copy' },
    { id: 'delete', label: 'Delete', icon: 'bin', tone: 'danger' },
  ]

  return (
    <PageWithToc sections={sections}>
      <div className="space-y-8">
        <PageHeader
          title="Dropdown Button"
          description="A button that opens an action menu. Composes O9Button + O9ActionMenu — the trigger gets aria-haspopup, aria-expanded, aria-controls, and focus return automatically."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>}
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>
                Use Dropdown Button when a single button needs to expose a small, related set of actions. The component handles overlay orchestration, focus management, and ARIA wiring. For icon-only triggers, use <DocStrong>Dropdown Icon Button</DocStrong>.
              </DocParagraph>
            </DocSection>
            <DocSection id="demo" title="Live demo">
              <LiveReference>
                <O9DropdownButton label="Actions" items={items} onSelect={(item) => console.log(item)} />
                <O9DropdownButton label="More" items={items} variant="secondary" />
              </LiveReference>
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'A small set of related actions hanging off a single button (3–7 items).',
                'A primary or secondary action followed by less common alternates.',
                'Row or card actions where a single trigger is preferred over inline buttons.',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">For navigation — use <DocStrong>Link</DocStrong>.</span>,
                <span key="2">For long lists — use <DocStrong>Combobox</DocStrong>, <DocStrong>Listbox</DocStrong>, or <DocStrong>Hybrid Popover</DocStrong>.</span>,
                <span key="3">For icon-only triggers — use <DocStrong>Dropdown Icon Button</DocStrong>.</span>,
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@o9ds/react" code={`import { O9DropdownButton } from '@o9ds/react';

const items = [
  { id: 'edit', label: 'Edit', icon: 'edit' },
  { id: 'duplicate', label: 'Duplicate', icon: 'copy' },
  { id: 'delete', label: 'Delete', icon: 'bin', tone: 'danger' },
];

<O9DropdownButton
  label="Actions"
  items={items}
  variant="primary"
  onSelect={(item) => handleSelect(item)}
  onOpenChange={(open) => console.log('open?', open)}
/>`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@o9ds/js" code={`import { O9DropdownButton } from '@o9ds/js';

const dd = O9DropdownButton.initialize(el, {
  label: 'Actions',
  items,
  variant: 'primary',
  onSelect: (item) => handleSelect(item),
});

dd.open();
dd.close();
dd.setItems(newItems);
dd.disabled(true);
dd.destroy();`} />
            </DocSection>
            <DocSection id="props" title="Props"><PropsTable rows={PROPS} /></DocSection>
            <DocSection id="methods" title="Methods (JS)">
              <MethodsTable rows={[
                { method: 'O9DropdownButton.initialize(el, options)', returns: 'O9DropdownButton', desc: 'Factory.' },
                { method: 'open()', desc: 'Open the menu.' },
                { method: 'close()', desc: 'Close the menu.' },
                { method: 'toggle()', desc: 'Toggle the menu.' },
                { method: 'isOpen()', returns: 'boolean', desc: 'Whether the menu is currently open.' },
                { method: 'setItems(items)', desc: 'Replace menu items.' },
                { method: 'setLabel(text)', desc: 'Update the trigger label.' },
                { method: 'disabled(state?)', returns: 'boolean | void', desc: 'Get/set disabled state.' },
                { method: 'setLoading(b)', desc: 'Toggle loading state.' },
                { method: 'destroy()', desc: 'Tear down.' },
              ]} />
            </DocSection>
            <DocSection id="events" title="Custom events (JS)">
              <EventsTable rows={[
                { event: 'dd-btn:open', payload: '—', desc: 'Fires when the menu opens.' },
                { event: 'dd-btn:close', payload: '—', desc: 'Fires when the menu closes.' },
                { event: 'dd-btn:select', payload: '{ id, label }', desc: 'Fires when an item is activated.' },
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
                { key: 'Enter / Space', action: 'Activate the focused item.' },
                { key: 'Escape', action: 'Close the menu and return focus to the trigger.' },
                { key: 'Tab', action: 'Close the menu and move focus.' },
              ]} />
            </DocSection>
            <DocSection id="aria" title="ARIA">
              <AriaTable rows={[
                { attr: 'aria-haspopup="menu"', when: 'Always set on the trigger.' },
                { attr: 'aria-expanded', when: 'Reflects the current open state.' },
                { attr: 'aria-controls', when: 'Points at the menu element.' },
                { attr: 'role="menu" / role="menuitem"', when: 'Set automatically on the inner action menu.' },
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
