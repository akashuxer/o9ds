import { useState, useMemo } from 'react'
import { O9FabButton } from '@o9ds/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocSection, { DocCallout, DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import { PropsTable, CssVarsGrid, KeyboardTable, AriaTable, MethodsTable, SimpleTable, LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const PROPS = [
  { prop: 'icon', type: 'string', default: "'plus'", required: 'Yes', desc: 'Icon name without o9con- prefix.' },
  { prop: 'variant', type: "'primary' | 'secondary'", default: "'primary'", desc: 'Visual variant. Only primary and secondary are supported.' },
  { prop: 'label', type: 'string', default: 'undefined', desc: 'Label text. When provided, renders extended FAB (icon + label).' },
  { prop: 'isDisabled', type: 'boolean', default: 'false', desc: 'Prevents all interaction. Shadow remains at reduced opacity.' },
  { prop: 'isLoading', type: 'boolean', default: 'false', desc: 'Shows shimmer on inner button. Prevents interaction.' },
  { prop: 'indicator', type: "'unsaved' | 'new' | 'unread' | false", default: 'false', desc: 'Indicator badge variant. Hidden during disabled/loading.' },
  { prop: 'indicatorSize', type: "'sm' | 'lg'", default: "'lg'", desc: 'Indicator dot size (6px or 10px).' },
  { prop: 'zIndex', type: 'number', default: 'undefined', desc: 'Explicit z-index override. Falls back to CSS variable, then 1050 default.' },
  { prop: 'tooltip', type: 'string', default: 'undefined', desc: 'Tooltip text. Used as aria-label in icon-only mode.' },
  { prop: 'onClick', type: '(event) => void', default: 'undefined', desc: 'Click handler.' },
]

const CSS_VARS = [
  { category: 'Elevation', vars: ['--o9ds-fab-btn-shadow', '--o9ds-fab-btn-shadow-disabled'] },
  { category: 'Positioning', vars: ['--o9ds-fab-btn-z-index'] },
  { category: 'Indicator offsets', vars: ['--o9ds-fab-btn-indicator-top', '--o9ds-fab-btn-indicator-right'] },
]

export default function FabButton() {
  const [tab, setTab] = useState('Overview')
  const sections = useMemo(() => {
    if (tab === 'Overview') return [{ id: 'purpose', label: 'Purpose' }, { id: 'modes', label: 'Modes' }, { id: 'indicator', label: 'Indicator badge' }]
    if (tab === 'Usage') return [{ id: 'when', label: 'When to use' }, { id: 'when-not', label: 'When not to use' }]
    if (tab === 'Code/APIs') return [{ id: 'react', label: 'React' }, { id: 'js', label: 'Vanilla JS' }, { id: 'props', label: 'Props' }, { id: 'css-vars', label: 'CSS variables' }, { id: 'arch', label: 'Architecture' }, { id: 'zindex', label: 'Z-index cascade' }, { id: 'methods', label: 'Methods (JS)' }]
    if (tab === 'Accessibility') return [{ id: 'keyboard', label: 'Keyboard' }, { id: 'aria', label: 'ARIA' }, { id: 'focus', label: 'Focus' }]
    return []
  }, [tab])

  return (
    <PageWithToc sections={sections}>
      <div className="space-y-8">
        <PageHeader
          title="FAB Button"
          description="Floating Action Button — a persistent, elevated button that floats above page content for a primary or secondary contextual action. Composes O9Button (with-label) or O9IconButton (icon-only)."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>}
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>
                Use FAB for the most important action on a page or view, where the action should remain visible regardless of scroll position. The FAB wrapper provides elevation, z-index control, and an optional indicator badge — the inner button handles all interaction.
              </DocParagraph>
            </DocSection>
            <DocSection id="modes" title="Modes">
              <LiveReference>
                <O9FabButton icon="plus" tooltip="Add" />
                <O9FabButton icon="plus" label="Create" />
                <O9FabButton icon="edit" tooltip="Edit" variant="secondary" />
                <O9FabButton icon="bell-o" tooltip="Notifications" indicator="new" />
              </LiveReference>
            </DocSection>
            <DocSection id="indicator" title="Indicator badge">
              <DocParagraph>The indicator uses the shared <DocCode>o9ds-indicator</DocCode> pattern.</DocParagraph>
              <SimpleTable columns={['Variant', 'Color', 'Shape', 'Semantic']} rows={[
                ['unsaved', 'warning', 'Circle', 'Unsaved changes'],
                ['new', 'negative', 'Square', 'New notification'],
                ['unread', 'theme', 'Square', 'Unread items'],
              ]} />
              <DocCallout>The indicator is purely decorative (<DocCode>aria-hidden="true"</DocCode>). If the status is critical, communicate it through other means (e.g., live region, tooltip).</DocCallout>
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'A persistent primary action that should remain visible across scroll (e.g. Add, Compose).',
                'A secondary FAB that complements the primary action.',
                'Compact contextual actions where labeling via tooltip is sufficient.',
                'Actions that benefit from explicit labeling — extended FAB with icon + label.',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">Inside a button group — use <DocStrong>Button Group</DocStrong>.</span>,
                <span key="2">For non-floating in-flow actions — use <DocStrong>Button</DocStrong> or <DocStrong>Icon Button</DocStrong>.</span>,
                <span key="3">More than one prominent FAB per region — competing FABs erode their meaning.</span>,
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@o9ds/react" code={`import { O9FabButton } from '@o9ds/react';

<O9FabButton icon="plus" tooltip="Add item" />
<O9FabButton icon="plus" label="Create" />
<O9FabButton icon="edit" tooltip="Edit" variant="secondary" />
<O9FabButton icon="plus" tooltip="Add" indicator="new" />
<O9FabButton icon="plus" tooltip="Add" isLoading />
<O9FabButton icon="plus" tooltip="Add" zIndex={2000} />`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@o9ds/js" code={`import { O9FabButton } from '@o9ds/js';

const fab = O9FabButton.initialize(el, {
  variant: 'primary',
  icon: 'plus',
  tooltip: 'Add item',
  indicator: 'new',
  onClick: (event) => console.log('clicked', event),
});

fab.setLabel('Create');     // switch to extended FAB
fab.setLabel(null);         // back to icon-only
fab.setLoading(true);
fab.disabled(true);
fab.setIndicator('unsaved');
fab.setIndicator(false);
fab.destroy();`} />
            </DocSection>
            <DocSection id="props" title="Props"><PropsTable rows={PROPS} /></DocSection>
            <DocSection id="css-vars" title="CSS variables"><CssVarsGrid groups={CSS_VARS} /></DocSection>
            <DocSection id="arch" title="Architecture">
              <DocParagraph>FAB is a <DocStrong>composition wrapper</DocStrong> — it does not duplicate button logic or styling.</DocParagraph>
              <SimpleTable columns={['Mode', 'Inner component', 'Button size', 'Dimensions']} rows={[
                ['Icon-only (default)', 'O9IconButton', 'lg', '40 × 40px'],
                ['With label', 'O9Button', 'md', '32px height'],
              ]} />
              <DocParagraph>The wrapper provides box-shadow, z-index, position-relative for indicator placement, and the indicator element. Variant colors, sizes, hover/focus/active states, loading shimmer, and typography are all inherited from the inner button.</DocParagraph>
            </DocSection>
            <DocSection id="zindex" title="Z-index cascade">
              <ol className="list-decimal pl-5 space-y-1.5 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><DocStrong>Explicit zIndex prop</DocStrong> — sets inline z-index style.</li>
                <li><DocStrong>CSS variable <DocCode>--o9ds-fab-btn-z-index</DocCode></DocStrong> — set by the consumer on the element or a parent.</li>
                <li><DocStrong>Design system default</DocStrong> — <DocCode>1050</DocCode> (above page content, below modals at 1300).</li>
              </ol>
            </DocSection>
            <DocSection id="methods" title="Methods (JS)">
              <MethodsTable rows={[
                { method: 'O9FabButton.initialize(el, options)', returns: 'O9FabButton', desc: 'Factory.' },
                { method: 'setVariant(v)', desc: 'Change variant (primary | secondary).' },
                { method: 'setIcon(name)', desc: 'Update displayed icon.' },
                { method: 'setLabel(label | null)', desc: 'Set label or switch to icon-only. Recreates inner button on mode change.' },
                { method: 'setIndicator(variant | false)', desc: 'Show, update, or hide the indicator.' },
                { method: 'setIndicatorSize(size)', desc: 'Change indicator dot size.' },
                { method: 'setZIndex(z | null)', desc: 'Set or clear explicit z-index.' },
                { method: 'setLoading(b)', desc: 'Toggle loading state.' },
                { method: 'disabled(state?)', returns: 'boolean | void', desc: 'Get/set disabled state.' },
                { method: 'focus()', desc: 'Focus the inner button.' },
                { method: 'destroy()', desc: 'Tear down DOM, events, inner instance.' },
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Accessibility' && (
          <div className="space-y-12">
            <DocSection id="keyboard" title="Keyboard">
              <KeyboardTable rows={[
                { key: 'Enter / Space', action: 'Activate the FAB (delegated to inner button).' },
                { key: 'Tab', action: 'Focus the inner button.' },
                { key: 'Shift+Tab', action: 'Move focus away.' },
              ]} />
            </DocSection>
            <DocSection id="aria" title="ARIA">
              <AriaTable rows={[
                { attr: 'aria-label', when: 'Automatically set in icon-only mode from tooltip prop. Required for accessibility.' },
                { attr: 'aria-busy', when: 'Set on wrapper and inner button during loading.' },
                { attr: 'aria-disabled', when: 'Set via native disabled attribute on the inner button.' },
              ]} />
            </DocSection>
            <DocSection id="focus" title="Focus">
              <DocList items={[
                'The wrapper <div> is presentational only — no role, not focusable.',
                'Tab focuses the inner <button>. The focus ring renders on the button, not the wrapper.',
                'Hover styles inherited from the inner button (.no-touch scope).',
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
