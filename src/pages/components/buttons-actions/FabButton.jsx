import { useState, useMemo } from 'react'
import { ArvoFabButton } from '@arvo/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs, { useDocTabUrl } from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DosDontCards from '../../../LayoutComponents/DosDontCards'
import DocSection, { DocCallout, DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import { PropsTable, CssVarsGrid, KeyboardTable, AriaTable, MethodsTable, SimpleTable, LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'
import { getDescriptor } from '../../../data/componentDescriptors.generated'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const DESCRIPTOR = getDescriptor('fab-button')
const PROPS = DESCRIPTOR.props
const CSS_VARS = DESCRIPTOR.cssVarGroups

const VARIANTS = [
  { name: 'Primary', desc: 'The dominant floating action — one per view for the single most important create/add workflow.' },
  { name: 'Secondary', desc: 'A supporting floating action when two persistent actions are justified (e.g. Add + Filter).' },
]

const STATES = [
  { name: 'Default', desc: 'Ready to activate; elevated shadow separates FAB from page content.' },
  { name: 'Hover / focus', desc: 'Inherited from inner button; focus ring renders on the button, not the wrapper.' },
  { name: 'Disabled', desc: 'Non-interactive; shadow remains at reduced opacity — explain why if the action is temporarily unavailable.' },
  { name: 'Loading', desc: 'Shimmer on inner button; blocks repeat activation during async work.' },
]
export default function FabButton() {
  const [tab, setTab] = useDocTabUrl(TABS)
  const sections = useMemo(() => {
    if (tab === 'Overview') return [
      { id: 'purpose', label: 'Purpose' },
      { id: 'anatomy', label: 'Anatomy' },
      { id: 'layouts', label: 'Layouts' },
      { id: 'variants', label: 'Variants' },
      { id: 'indicator', label: 'Indicator badge' },
      { id: 'placement', label: 'Placement' },
      { id: 'states', label: 'States' },
      { id: 'dos-donts', label: 'Dos & Don\'ts' },
    ]
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
          description="Floating Action Button — a persistent, elevated button that floats above page content for a primary or secondary contextual action. Composes ArvoButton (with-label) or ArvoIconButton (icon-only)."
          componentSlug="fab-button"
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>}
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>
                A Floating Action Button (FAB) keeps one high-priority action visible above scrolling content — typically create, compose, or add. Its elevation and fixed position signal &ldquo;this action follows you&rdquo; without occupying permanent layout space in the page chrome.
              </DocParagraph>
              <DocParagraph>
                FAB is a composition wrapper: it adds shadow, z-index layering, and an optional indicator badge around an inner Button or Icon Button. Interaction, variants, loading, and focus behavior all delegate to the inner control.
              </DocParagraph>
            </DocSection>

            <DocSection id="anatomy" title="Anatomy">
              <DocParagraph>
                A FAB comprises a presentational <DocStrong>wrapper</DocStrong> (elevation shadow, positioning context), an inner <DocStrong>button</DocStrong> (icon-only or icon + label), and an optional <DocStrong>indicator badge</DocStrong> (top-right corner, decorative unless paired with other status communication).
              </DocParagraph>
            </DocSection>

            <DocSection id="layouts" title="Layouts">
              <DocParagraph>Two layouts trade label clarity for compactness. Icon-only is the default; extended FAB adds a visible label when the action needs explicit naming.</DocParagraph>
              <LiveReference>
                <ArvoFabButton icon="plus" tooltip="Add" />
                <ArvoFabButton icon="plus" label="Create" />
                <ArvoFabButton icon="edit" tooltip="Edit" variant="secondary" />
                <ArvoFabButton icon="bell-o" tooltip="Notifications" indicator="new" />
              </LiveReference>
              <ul className="list-disc pl-5 space-y-2 text-arvo-light-secondary dark:text-neutral-400 leading-relaxed mt-4">
                <li><DocStrong>Icon-only</DocStrong> — 40 × 40px square (ArvoIconButton lg). Tooltip provides the accessible name.</li>
                <li><DocStrong>Extended (with label)</DocStrong> — 32px height pill (ArvoButton md). Label is visible; tooltip optional.</li>
              </ul>
            </DocSection>

            <DocSection id="variants" title="Variants">
              <DocParagraph>FAB supports only primary and secondary — not tertiary, outline, or danger. Destructive floating actions are rare; if needed, use confirmation and consider an inline Button instead.</DocParagraph>
              <ul className="space-y-2 text-arvo-light-secondary dark:text-neutral-400">
                {VARIANTS.map(({ name, desc }) => (
                  <li key={name}><DocStrong>{name}</DocStrong> — {desc}</li>
                ))}
              </ul>
            </DocSection>

            <DocSection id="indicator" title="Indicator badge">
              <DocParagraph>The indicator uses the shared <DocCode>arvo-indicator</DocCode> pattern to surface lightweight status at a glance.</DocParagraph>
              <SimpleTable columns={['Variant', 'Color', 'Shape', 'Semantic']} rows={[
                ['unsaved', 'warning', 'Circle', 'Unsaved changes'],
                ['new', 'negative', 'Square', 'New notification'],
                ['unread', 'theme', 'Square', 'Unread items'],
              ]} />
              <DocCallout>The indicator is purely decorative (<DocCode>aria-hidden="true"</DocCode>). If the status is critical, communicate it through other means (e.g., live region, tooltip, or page-level alert).</DocCallout>
            </DocSection>

            <DocSection id="placement" title="Placement">
              <DocParagraph>
                Anchor FAB to the bottom-end corner in LTR layouts (bottom-right), with consistent inset from viewport edges (typically 16–24px). Avoid overlapping primary navigation, toasts, or modal footers. Use <DocCode>zIndex</DocCode> only when stacking above local overlays — default 1050 sits above page content but below modals (1300).
              </DocParagraph>
            </DocSection>

            <DocSection id="states" title="States">
              <ul className="list-disc pl-5 space-y-2 text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
                {STATES.map(({ name, desc }) => (
                  <li key={name}><DocStrong>{name}</DocStrong> — {desc}</li>
                ))}
              </ul>
              <LiveReference>
                <ArvoFabButton icon="plus" tooltip="Add" isLoading />
                <ArvoFabButton icon="plus" tooltip="Add" isDisabled />
              </LiveReference>
            </DocSection>

            <DocSection id="dos-donts" title="Dos & Don'ts">
              <DosDontCards
                doItems={['Reserve for the single most important persistent action on a view', 'Use extended FAB when icon alone is ambiguous ("Create scenario")', 'Keep one primary FAB; a secondary FAB is the maximum for one region', 'Ensure FAB does not cover critical content or primary navigation']}
                dontItems={['Place multiple competing primary FABs in one viewport', 'Use for actions available elsewhere in persistent header chrome', 'Rely on indicator badge alone for time-sensitive alerts', 'Use danger/destructive actions without a confirmation step']}
              />
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
              <CodeBlock language="tsx" label="@arvo/react" code={`import { ArvoFabButton } from '@arvo/react';

<ArvoFabButton icon="plus" tooltip="Add item" />
<ArvoFabButton icon="plus" label="Create" />
<ArvoFabButton icon="edit" tooltip="Edit" variant="secondary" />
<ArvoFabButton icon="plus" tooltip="Add" indicator="new" />
<ArvoFabButton icon="plus" tooltip="Add" isLoading />
<ArvoFabButton icon="plus" tooltip="Add" zIndex={2000} />`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@arvo/js" code={`import { ArvoFabButton } from '@arvo/js';

const fab = ArvoFabButton.initialize(el, {
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
                ['Icon-only (default)', 'ArvoIconButton', 'lg', '40 × 40px'],
                ['With label', 'ArvoButton', 'md', '32px height'],
              ]} />
              <DocParagraph>The wrapper provides box-shadow, z-index, position-relative for indicator placement, and the indicator element. Variant colors, sizes, hover/focus/active states, loading shimmer, and typography are all inherited from the inner button.</DocParagraph>
            </DocSection>
            <DocSection id="zindex" title="Z-index cascade">
              <ol className="list-decimal pl-5 space-y-1.5 text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><DocStrong>Explicit zIndex prop</DocStrong> — sets inline z-index style.</li>
                <li><DocStrong>CSS variable <DocCode>--arvo-fab-btn-z-index</DocCode></DocStrong> — set by the consumer on the element or a parent.</li>
                <li><DocStrong>Design system default</DocStrong> — <DocCode>1050</DocCode> (above page content, below modals at 1300).</li>
              </ol>
            </DocSection>
            <DocSection id="methods" title="Methods (JS)">
              <MethodsTable rows={[
                { method: 'ArvoFabButton.initialize(el, options)', returns: 'ArvoFabButton', desc: 'Factory.' },
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
                'Hover styles inherited from the inner button (gated by @media (hover: hover) and (pointer: fine)).',
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
