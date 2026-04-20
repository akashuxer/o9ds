import { useState, useMemo } from 'react'
import { O9ButtonGroup } from '@o9ds/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocSection, { DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import { PropsTable, CssVarsGrid, KeyboardTable, AriaTable, MethodsTable, EventsTable, LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const PROPS = [
  { prop: 'items', type: 'ButtonGroupItemConfig[]', default: '[]', desc: 'Array of item configs. Each: { value, label?, icon?, disabled?, excluded? }' },
  { prop: 'value', type: 'string | string[] | null', default: 'null', desc: 'Selected value(s). string for single-select, string[] for multi-select.' },
  { prop: 'variant', type: "'primary' | 'secondary'", default: "'primary'", desc: 'Visual variant controlling active item colors.' },
  { prop: 'size', type: "'sm' | 'lg'", default: "'lg'", desc: 'Group size. sm=24px, lg=32px.' },
  { prop: 'multiSelect', type: 'boolean', default: 'false', desc: 'Allow multiple items selected simultaneously.' },
  { prop: 'iconOnly', type: 'boolean', default: 'false', desc: 'All items render icon-only.' },
  { prop: 'hasOverflow', type: 'boolean', default: 'false', desc: 'Enable overflow detection. Clipped items appear in an overflow menu.' },
  { prop: 'expandOnSelect', type: 'boolean', default: 'false', desc: 'Selected item expands to show label; others collapse to icon-only (single-select).' },
  { prop: 'isDisabled', type: 'boolean', default: 'false', desc: 'Disable the entire group and child buttons.' },
  { prop: 'isLoading', type: 'boolean', default: 'false', desc: 'Loading state (Pattern C).' },
  { prop: 'ariaLabel', type: 'string', required: 'Yes', desc: 'Accessible label for the toolbar.' },
  { prop: 'onChange', type: '(detail) => void', desc: 'Selection change callback.' },
]

const CSS_VARS = [
  { category: 'Layout', vars: ['--o9ds-btn-grp-gap', '--o9ds-btn-grp-height'] },
  { category: 'Animation', vars: ['--o9ds-btn-grp-expand-duration', '--o9ds-btn-grp-expand-easing'] },
]

const ITEMS = [
  { value: 'bold', label: 'Bold', icon: 'bold' },
  { value: 'italic', label: 'Italic', icon: 'italic' },
  { value: 'underline', label: 'Underline', icon: 'underline' },
]

export default function ButtonGroup() {
  const [tab, setTab] = useState('Overview')
  const [single, setSingle] = useState('bold')
  const sections = useMemo(() => {
    if (tab === 'Overview') return [{ id: 'purpose', label: 'Purpose' }, { id: 'modes', label: 'Modes' }, { id: 'icon-only', label: 'Icon-only' }]
    if (tab === 'Usage') return [{ id: 'when', label: 'When to use' }, { id: 'when-not', label: 'When not to use' }]
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
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" /></svg>}
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>
                Use Button Group when several related actions need to read as a single, mutually exclusive (or grouped multi-select) control. Common cases: text formatting toggles, view-mode switchers, alignment pickers.
              </DocParagraph>
            </DocSection>
            <DocSection id="modes" title="Modes">
              <DocList items={[
                <span key="1"><DocStrong>Toggle</DocStrong> — two options in single-select mode (e.g. On/Off, List/Grid).</span>,
                <span key="2"><DocStrong>Single-select toolbar</DocStrong> — mutually exclusive options like text alignment.</span>,
                <span key="3"><DocStrong>Multi-select toolbar</DocStrong> — independent toggles like text formatting (bold, italic, underline).</span>,
                <span key="4"><DocStrong>Compact action bar</DocStrong> — icon-only group with overflow support.</span>,
              ]} />
              <LiveReference>
                <O9ButtonGroup items={ITEMS} value={single} ariaLabel="Text formatting" onChange={({ value }) => setSingle(value)} />
              </LiveReference>
            </DocSection>
            <DocSection id="icon-only" title="Icon-only">
              <LiveReference>
                <O9ButtonGroup items={[{ value: 'left', icon: 'align-left' }, { value: 'center', icon: 'align-center' }, { value: 'right', icon: 'align-right' }]} iconOnly value="center" ariaLabel="Text alignment" />
              </LiveReference>
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
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@o9ds/react" code={`import { O9ButtonGroup } from '@o9ds/react';

const items = [
  { value: 'bold', label: 'Bold', icon: 'bold' },
  { value: 'italic', label: 'Italic', icon: 'italic' },
  { value: 'underline', label: 'Underline', icon: 'underline' },
];

// Single-select
<O9ButtonGroup
  items={items}
  value="bold"
  ariaLabel="Text formatting"
  onChange={({ value }) => console.log(value)}
/>

// Multi-select
<O9ButtonGroup
  items={items}
  value={['bold', 'italic']}
  multiSelect
  ariaLabel="Text formatting"
  onChange={({ value, changedValue, isSelected }) => console.log(value, changedValue, isSelected)}
/>

// Icon-only with expand-on-select
<O9ButtonGroup items={items} iconOnly expandOnSelect value="bold" ariaLabel="Text formatting" />`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@o9ds/js" code={`import { O9ButtonGroup } from '@o9ds/js';

const group = O9ButtonGroup.initialize(el, {
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
                { method: 'O9ButtonGroup.initialize(el, options)', returns: 'O9ButtonGroup', desc: 'Factory.' },
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
