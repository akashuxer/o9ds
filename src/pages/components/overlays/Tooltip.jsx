import { useState, useMemo } from 'react'
import { ArvoTooltip, ArvoButton } from '@arvo/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocSection, { DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import { PropsTable, KeyboardTable, AriaTable, MethodsTable, CssVarsGrid, LiveReference, SimpleTable } from '../../../LayoutComponents/ComponentDocPrimitives'
import { getDescriptor } from '../../../data/componentDescriptors.generated'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const DESCRIPTOR = getDescriptor('tooltip')
const PROPS = DESCRIPTOR.props
const CSS_VARS = DESCRIPTOR.cssVarGroups



export default function Tooltip() {
  const [tab, setTab] = useState('Overview')
  const sections = useMemo(() => {
    if (tab === 'Overview') return [{ id: 'purpose', label: 'Purpose' }, { id: 'demo', label: 'Live demo' }, { id: 'behavior', label: 'Behavior' }]
    if (tab === 'Usage') return [{ id: 'when', label: 'When to use' }, { id: 'when-not', label: 'When not to use' }]
    if (tab === 'Code/APIs') return [{ id: 'react', label: 'React' }, { id: 'js', label: 'Vanilla JS' }, { id: 'props', label: 'Props' }, { id: 'css-vars', label: 'CSS variables' }, { id: 'config', label: 'Global config' }, { id: 'methods', label: 'Methods (JS)' }]
    if (tab === 'Accessibility') return [{ id: 'keyboard', label: 'Keyboard' }, { id: 'aria', label: 'ARIA' }]
    return []
  }, [tab])

  return (
    <PageWithToc sections={sections}>
      <div className="space-y-8">
        <PageHeader
          title="Tooltip"
          description="Transient supplementary label for a trigger element. Singleton-managed (only one tooltip visible at a time), positioned via the core position engine, with optional keyboard shortcut indicator."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>Use Tooltip for short, non-interactive supplementary text — clarifying icon-only buttons, surfacing keyboard shortcuts, or revealing truncated text. Tooltips are transient; for interactive content use <DocStrong>Popover</DocStrong>.</DocParagraph>
            </DocSection>
            <DocSection id="demo" title="Live demo">
              <LiveReference>
                <ArvoTooltip content="Save document">
                  <ArvoButton label="Save" />
                </ArvoTooltip>
                <ArvoTooltip content="Save document" shortcut="Ctrl+S">
                  <ArvoButton label="With shortcut" />
                </ArvoTooltip>
                <ArvoTooltip content="Top placement" placement="top-center">
                  <ArvoButton label="Top" variant="secondary" />
                </ArvoTooltip>
              </LiveReference>
            </DocSection>
            <DocSection id="behavior" title="Behavior">
              <DocList items={[
                <span key="1"><DocStrong>Singleton.</DocStrong> Only one tooltip is visible at any time.</span>,
                <span key="2"><DocStrong>Hover delay.</DocStrong> 400ms default before showing on mouse hover.</span>,
                <span key="3"><DocStrong>Focus immediate.</DocStrong> Tooltip appears with no delay when the trigger receives keyboard focus.</span>,
                <span key="4"><DocStrong>Hide grace period.</DocStrong> 100ms grace period to allow cursor movement onto the tooltip element itself (WCAG 1.4.13).</span>,
                <span key="5"><DocStrong>Collision-aware.</DocStrong> Auto-flips/cascades to keep the tooltip inside the viewport.</span>,
                <span key="6"><DocStrong>Disabled elements.</DocStrong> Use <DocCode>aria-disabled="true"</DocCode> on the trigger so the tooltip stays keyboard-accessible.</span>,
                <span key="7"><DocStrong>Reduced motion.</DocStrong> Tooltip appears/disappears instantly when prefers-reduced-motion is set.</span>,
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'Supplementary labels for icon-only controls.',
                'Keyboard shortcut hints (pair with shortcut prop).',
                'Truncation-aware tooltips for clipped table cells or labels.',
                'Disabled-control hints (use aria-disabled, not native disabled).',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">For interactive content — use <DocStrong>Popover</DocStrong>.</span>,
                <span key="2">For confirmations or destructive actions — use a Popover or dialog.</span>,
                <span key="3">As a replacement for an accessible name on icon-only buttons — set the <DocCode>tooltip</DocCode> / <DocCode>aria-label</DocCode> on the component.</span>,
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@arvo/react" code={`import { ArvoTooltip } from '@arvo/react';

<ArvoTooltip content="Save document">
  <button>Save</button>
</ArvoTooltip>

// With shortcut
<ArvoTooltip content="Save document" shortcut="Ctrl+S">
  <button>Save</button>
</ArvoTooltip>

// Custom placement
<ArvoTooltip content="More options" placement="top-end">
  <button aria-label="More options">…</button>
</ArvoTooltip>

// On a disabled element (keep it focusable)
<ArvoTooltip content="You do not have permission to delete">
  <button aria-disabled="true" tabIndex={0}>Delete</button>
</ArvoTooltip>`} />
              <DocParagraph>Many o9 components also accept a <DocCode>tooltip</DocCode> prop directly (Button, IconButton, FabButton, etc.) — use that built-in option instead of wrapping with <DocCode>ArvoTooltip</DocCode> when possible.</DocParagraph>
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@arvo/js" code={`import { ArvoTooltip, setupTooltips } from '@arvo/js';

setupTooltips({ hoverDelay: 500, gap: 6 });

const tip = ArvoTooltip.initialize(triggerEl, {
  content: 'Save document',
  placement: 'bottom-center',
  shortcut: 'Ctrl+S',
});

tip.update({ content: 'Document saved!' });
tip.update({ placement: 'top-center' });
tip.destroy();`} />
            </DocSection>
            <DocSection id="props" title="Props"><PropsTable rows={PROPS} /></DocSection>
            <DocSection id="css-vars" title="CSS variables"><CssVarsGrid groups={CSS_VARS} /></DocSection>
            <DocSection id="config" title="Global configuration">
              <DocParagraph>Configure tooltip behavior globally for the entire application via <DocCode>TooltipProvider</DocCode> (React) or <DocCode>setupTooltips()</DocCode> (JS).</DocParagraph>
              <SimpleTable columns={['Option', 'Type', 'Default', 'Description']} rows={[
                ['hoverDelay', 'number', '400', 'Milliseconds before showing on hover.'],
                ['hideDelay', 'number', '100', 'Grace period before hiding.'],
                ['gap', 'number', '4', 'Pixel gap between tooltip and trigger.'],
                ['defaultPlacement', 'TooltipPlacement', "'bottom-center'", 'Default placement when not specified per-tooltip.'],
              ]} />
            </DocSection>
            <DocSection id="methods" title="Methods (JS)">
              <MethodsTable rows={[
                { method: 'ArvoTooltip.initialize(trigger, options)', returns: 'ArvoTooltip', desc: 'Factory — attaches tooltip behavior.' },
                { method: 'update(options)', desc: 'Update content, placement, or shortcut.' },
                { method: 'destroy()', desc: 'Remove all event listeners and clean up.' },
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Accessibility' && (
          <div className="space-y-12">
            <DocSection id="keyboard" title="Keyboard">
              <KeyboardTable rows={[
                { key: 'Tab (focus)', action: 'Tooltip appears immediately on the focused trigger.' },
                { key: 'Shift+Tab', action: 'Tooltip dismissed when focus moves away.' },
                { key: 'Escape', action: 'Dismiss the active tooltip.' },
              ]} />
            </DocSection>
            <DocSection id="aria" title="ARIA">
              <AriaTable rows={[
                { attr: 'role="tooltip"', when: 'On the tooltip element managed by the singleton.' },
                { attr: 'aria-describedby', when: 'Set on the trigger element pointing at the tooltip id.' },
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
