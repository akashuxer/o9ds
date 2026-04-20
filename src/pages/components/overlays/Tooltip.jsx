import { useState, useMemo } from 'react'
import { O9Tooltip, O9Button } from '@o9ds/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocSection, { DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import { PropsTable, KeyboardTable, AriaTable, MethodsTable, CssVarsGrid, LiveReference, SimpleTable } from '../../../LayoutComponents/ComponentDocPrimitives'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const PROPS = [
  { prop: 'content', type: 'string', required: 'Yes', desc: 'Text content displayed in the tooltip.' },
  { prop: 'placement', type: '12 placements', default: "'bottom-center'", desc: 'Preferred placement. Auto-flips on viewport overflow.' },
  { prop: 'shortcut', type: 'string', default: 'undefined', desc: 'Keyboard shortcut hint shown alongside content (e.g. Ctrl+S).' },
  { prop: 'children', type: 'ReactElement', required: 'Yes', desc: 'Single interactive child element that serves as the tooltip trigger.' },
]

const CSS_VARS = [
  { category: 'Layout', vars: ['--o9ds-tip-max-w', '--o9ds-tip-padding-inline', '--o9ds-tip-padding-block', '--o9ds-tip-gap'] },
  { category: 'Typography', vars: ['--o9ds-tip-font-size'] },
  { category: 'Colors', vars: ['--o9ds-tip-bg', '--o9ds-tip-text-color', '--o9ds-tip-shortcut-bg'] },
  { category: 'Effects', vars: ['--o9ds-tip-shadow'] },
]

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
                <O9Tooltip content="Save document">
                  <O9Button label="Save" />
                </O9Tooltip>
                <O9Tooltip content="Save document" shortcut="Ctrl+S">
                  <O9Button label="With shortcut" />
                </O9Tooltip>
                <O9Tooltip content="Top placement" placement="top-center">
                  <O9Button label="Top" variant="secondary" />
                </O9Tooltip>
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
              <CodeBlock language="tsx" label="@o9ds/react" code={`import { O9Tooltip } from '@o9ds/react';

<O9Tooltip content="Save document">
  <button>Save</button>
</O9Tooltip>

// With shortcut
<O9Tooltip content="Save document" shortcut="Ctrl+S">
  <button>Save</button>
</O9Tooltip>

// Custom placement
<O9Tooltip content="More options" placement="top-end">
  <button aria-label="More options">…</button>
</O9Tooltip>

// On a disabled element (keep it focusable)
<O9Tooltip content="You do not have permission to delete">
  <button aria-disabled="true" tabIndex={0}>Delete</button>
</O9Tooltip>`} />
              <DocParagraph>Many o9 components also accept a <DocCode>tooltip</DocCode> prop directly (Button, IconButton, FabButton, etc.) — use that built-in option instead of wrapping with <DocCode>O9Tooltip</DocCode> when possible.</DocParagraph>
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@o9ds/js" code={`import { O9Tooltip, setupTooltips } from '@o9ds/js';

setupTooltips({ hoverDelay: 500, gap: 6 });

const tip = O9Tooltip.initialize(triggerEl, {
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
                { method: 'O9Tooltip.initialize(trigger, options)', returns: 'O9Tooltip', desc: 'Factory — attaches tooltip behavior.' },
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
