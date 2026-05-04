import { useState, useMemo } from 'react'
import { ArvoDropdownIconButton } from '@arvo/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocSection, { DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import { PropsTable, KeyboardTable, AriaTable, MethodsTable, EventsTable, LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'
import { getDescriptor } from '../../../data/componentDescriptors.generated'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const DESCRIPTOR = getDescriptor('dropdown-icon-button')
const PROPS = DESCRIPTOR.props


export default function DropdownIconButton() {
  const [tab, setTab] = useState('Overview')
  const sections = useMemo(() => {
    if (tab === 'Overview') return [{ id: 'purpose', label: 'Purpose' }, { id: 'demo', label: 'Live demo' }]
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
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01" /></svg>}
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>
                Use this for inline row menus, table cell actions, and any context where space is constrained. The trigger requires a <DocCode>tooltip</DocCode> — it becomes both <DocCode>aria-label</DocCode> and <DocCode>title</DocCode>.
              </DocParagraph>
            </DocSection>
            <DocSection id="demo" title="Live demo">
              <LiveReference>
                <ArvoDropdownIconButton icon="ellipsis-v" tooltip="More actions" items={items} />
                <ArvoDropdownIconButton icon="settings" tooltip="Settings" items={items} variant="secondary" />
                <ArvoDropdownIconButton icon="ellipsis-v" tooltip="More" items={items} variant="tertiary" size="sm" />
              </LiveReference>
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
