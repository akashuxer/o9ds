import { useState, useMemo } from 'react'
import { O9IconButton } from '@o9ds/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import GrayBgCard from '../../../LayoutComponents/GrayBgCard'
import WhiteBgCard from '../../../LayoutComponents/WhiteBgCard'
import DocSection, { DocCallout, DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import { PropsTable, CssVarsGrid, KeyboardTable, AriaTable, MethodsTable, EventsTable, SimpleTable, LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const PROPS = [
  { prop: 'icon', type: 'string', required: 'Yes', desc: 'Icon name without o9con- prefix' },
  { prop: 'tooltip', type: 'string', required: 'Yes', desc: 'Accessible label and native tooltip. Maps to aria-label and title.' },
  { prop: 'variant', type: "'primary' | 'secondary' | 'tertiary' | 'outline' | 'danger'", default: "'primary'", desc: 'Visual style variant' },
  { prop: 'size', type: "'xs' | 'sm' | 'md' | 'lg'", default: "'md'", desc: 'Button size. xs (16px) is exclusive to IconButton.' },
  { prop: 'type', type: "'button' | 'submit' | 'reset'", default: "'button'", desc: 'Native HTML button type' },
  { prop: 'isDisabled', type: 'boolean', default: 'false', desc: 'Prevents all interaction' },
  { prop: 'isSelected', type: 'boolean', default: 'undefined', desc: 'Toggle/active state. Sets aria-pressed.' },
  { prop: 'isLoading', type: 'boolean', default: 'false', desc: 'Skeleton shimmer overlay; prevents interaction' },
  { prop: 'onClick', type: '(event) => void', default: 'undefined', desc: 'Click handler. Suppressed when disabled or loading.' },
]

const CSS_VARS = [
  { category: 'Layout', vars: ['--o9ds-btn-height', '--o9ds-btn-padding-block', '--o9ds-btn-padding-inline'] },
  { category: 'Icon', vars: ['--o9ds-btn-icon-size'] },
  { category: 'Color', vars: ['--o9ds-btn-bg-color', '--o9ds-btn-icon-color', '--o9ds-btn-border-color'] },
  { category: 'Border', vars: ['--o9ds-btn-border-width'] },
]

export default function IconButton() {
  const [tab, setTab] = useState('Overview')
  const sections = useMemo(() => {
    if (tab === 'Overview') return [{ id: 'purpose', label: 'Purpose' }, { id: 'variants', label: 'Variants' }, { id: 'sizes', label: 'Sizes' }, { id: 'states', label: 'States' }, { id: 'dos-donts', label: "Dos & Don'ts" }]
    if (tab === 'Usage') return [{ id: 'when', label: 'When to use' }, { id: 'when-not', label: 'When not to use' }]
    if (tab === 'Code/APIs') return [{ id: 'react', label: 'React' }, { id: 'js', label: 'Vanilla JS' }, { id: 'props', label: 'Props' }, { id: 'css-vars', label: 'CSS variables' }, { id: 'sizes-table', label: 'Sizes' }, { id: 'methods', label: 'Methods (JS)' }, { id: 'events', label: 'Events (JS)' }]
    if (tab === 'Accessibility') return [{ id: 'keyboard', label: 'Keyboard' }, { id: 'aria', label: 'ARIA' }, { id: 'focus', label: 'Focus' }]
    return []
  }, [tab])

  return (
    <PageWithToc sections={sections}>
      <div className="space-y-8">
        <PageHeader
          title="Icon Button"
          description="Square, icon-only interactive element for compact actions where space is limited or visual simplicity is preferred. Five variants, four sizes (including the IconButton-exclusive xs), toggle/selected state."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>}
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>
                Use Icon Button when icon meaning is well-known (close, edit, delete, add) and screen real estate is constrained. Both <DocCode>icon</DocCode> and <DocCode>tooltip</DocCode> are required — the tooltip becomes both <DocCode>aria-label</DocCode> and <DocCode>title</DocCode> so the control is discoverable to assistive tech.
              </DocParagraph>
            </DocSection>
            <DocSection id="variants" title="Variants">
              <LiveReference>
                <O9IconButton icon="plus" tooltip="Add" variant="primary" />
                <O9IconButton icon="edit" tooltip="Edit" variant="secondary" />
                <O9IconButton icon="close" tooltip="Close" variant="tertiary" />
                <O9IconButton icon="settings" tooltip="Settings" variant="outline" />
                <O9IconButton icon="bin" tooltip="Delete" variant="danger" />
              </LiveReference>
            </DocSection>
            <DocSection id="sizes" title="Sizes">
              <DocParagraph><DocStrong>xs</DocStrong> (16x16) is unique to Icon Button — use it for dense inline controls only.</DocParagraph>
              <LiveReference>
                <O9IconButton icon="plus" tooltip="xs" variant="primary" size="xs" />
                <O9IconButton icon="plus" tooltip="sm" variant="primary" size="sm" />
                <O9IconButton icon="plus" tooltip="md" variant="primary" size="md" />
                <O9IconButton icon="plus" tooltip="lg" variant="primary" size="lg" />
              </LiveReference>
            </DocSection>
            <DocSection id="states" title="States">
              <LiveReference>
                <O9IconButton icon="star" tooltip="Default" variant="secondary" />
                <O9IconButton icon="star" tooltip="Selected" variant="secondary" isSelected />
                <O9IconButton icon="plus" tooltip="Disabled" variant="primary" isDisabled />
                <O9IconButton icon="plus" tooltip="Loading" variant="primary" isLoading />
              </LiveReference>
            </DocSection>
            <DocSection id="dos-donts" title="Dos & Don'ts">
              <div className="grid gap-4 sm:grid-cols-2">
                <GrayBgCard title="Do" bullets={['Use widely-recognized icons (close, edit, delete, add)', 'Always set tooltip — it becomes the accessible name', 'Pair with a text label in the surrounding context when meaning is ambiguous']} />
                <WhiteBgCard title="Don't" bullets={['Use obscure icons without supporting context', 'Stack many icon-only buttons next to each other', 'Use xs outside dense inline controls']} />
              </div>
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'Compact toolbars where space is constrained.',
                'Icons with universally recognized meaning (close, edit, delete, add, more).',
                'Toggle controls (favorite, pin) — pair isSelected with a clear tooltip.',
                'Inline row actions inside data tables or list items.',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">For navigation — use <DocStrong>Icon Button Link</DocStrong> instead.</span>,
                <span key="2">When the icon meaning is uncertain — use a regular <DocStrong>Button</DocStrong> with a label.</span>,
                <span key="3">For floating page actions — use <DocStrong>FAB Button</DocStrong>.</span>,
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@o9ds/react" code={`import { O9IconButton } from '@o9ds/react';

<O9IconButton icon="plus" tooltip="Add" variant="primary" />
<O9IconButton icon="star" tooltip="Favorite" variant="secondary" isSelected />
<O9IconButton icon="close" tooltip="Close" variant="tertiary" size="xs" />
<O9IconButton icon="bin" tooltip="Delete" variant="danger" isDisabled />
<O9IconButton icon="plus" tooltip="Loading" isLoading />`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@o9ds/js" code={`import { O9IconButton } from '@o9ds/js';

const btn = O9IconButton.initialize(el, {
  variant: 'secondary',
  icon: 'add',
  tooltip: 'Add item',
  onClick: (event) => console.log('clicked', event),
});

btn.setIcon('check');
btn.setTooltip('Done');     // updates aria-label + title
btn.setLoading(true);
btn.disabled(true);
btn.selected(true);
btn.destroy();`} />
            </DocSection>
            <DocSection id="props" title="Props"><PropsTable rows={PROPS} /></DocSection>
            <DocSection id="css-vars" title="CSS variables">
              <DocParagraph>Icon Button shares color and border variables with <DocCode>o9ds-btn</DocCode> via shared modifier classes.</DocParagraph>
              <CssVarsGrid groups={CSS_VARS} />
            </DocSection>
            <DocSection id="sizes-table" title="Size reference">
              <SimpleTable columns={['Size', 'Dimensions', 'Icon', 'Notes']} rows={[
                ['xs', '16×16', '16px', 'IconButton-exclusive. Dense inline controls only.'],
                ['sm', '24×24', '16px', 'Compact toolbars and data-dense layouts.'],
                ['md', '32×32', '20px', 'Default for most contexts.'],
                ['lg', '40×40', '24px', 'Touch-friendly and prominent action areas.'],
              ]} />
            </DocSection>
            <DocSection id="methods" title="Methods (JS)">
              <MethodsTable rows={[
                { method: 'O9IconButton.initialize(el, options)', returns: 'O9IconButton', desc: 'Factory.' },
                { method: 'setIcon(name)', desc: 'Swap the displayed icon.' },
                { method: 'setTooltip(text)', desc: 'Update tooltip, aria-label, and title.' },
                { method: 'setVariant(v)', desc: 'Change visual variant.' },
                { method: 'setSize(size)', desc: 'Change button size.' },
                { method: 'setLoading(loading)', desc: 'Toggle loading state.' },
                { method: 'selected(state?)', returns: 'boolean | void', desc: 'Get or set selected state.' },
                { method: 'disabled(state?)', returns: 'boolean | void', desc: 'Get or set disabled state.' },
                { method: 'focus()', desc: 'Focus the button.' },
                { method: 'destroy()', desc: 'Tear down.' },
              ]} />
            </DocSection>
            <DocSection id="events" title="Custom events (JS)">
              <EventsTable rows={[{ event: 'btn:loading', payload: '{ loading: boolean }', desc: 'Fires when loading state changes.' }]} />
            </DocSection>
          </div>
        )}

        {tab === 'Accessibility' && (
          <div className="space-y-12">
            <DocSection id="keyboard" title="Keyboard interactions">
              <KeyboardTable rows={[
                { key: 'Enter', action: 'Activate the button.' },
                { key: 'Space', action: 'Activate the button.' },
                { key: 'Tab / Shift+Tab', action: 'Move focus.' },
              ]} />
            </DocSection>
            <DocSection id="aria" title="ARIA attributes">
              <AriaTable rows={[
                { attr: 'aria-label', when: 'Always set via tooltip prop. Required for icon-only buttons.' },
                { attr: 'aria-pressed', when: 'Automatically set when isSelected is provided.' },
                { attr: 'aria-expanded', when: 'When the button has opened associated content (menu, popover, dialog).' },
                { attr: 'aria-haspopup', when: 'When the button opens an overlay.' },
                { attr: 'aria-busy', when: 'Automatically set during loading state.' },
              ]} />
            </DocSection>
            <DocSection id="focus" title="Focus">
              <DocList items={[
                <span key="1">Focus ring uses <DocCode>outline: 1px solid</DocCode> with <DocCode>outline-offset: 2px</DocCode>.</span>,
                <span key="2"><DocCode>.focus-border</DocCode> tightens offset to <DocCode>-1px</DocCode> in dense layouts (button groups, toolbars, table cells).</span>,
                <span key="3">Hover styles are scoped to <DocCode>.no-touch</DocCode>.</span>,
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
