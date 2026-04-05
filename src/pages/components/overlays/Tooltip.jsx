import { useState, useMemo } from 'react'
import { useTheme } from '../../../context/ThemeContext'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocTabs from '../../../LayoutComponents/DocTabs'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTable from '../../../LayoutComponents/DocTable'
import GrayBgCard from '../../../LayoutComponents/GrayBgCard'
import WhiteBgCard from '../../../LayoutComponents/WhiteBgCard'
import { getComponentPageDescription } from '../../../data/componentPageMeta'

const tabs = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const PROPS = [
  { prop: 'content', type: 'string', default: '—', required: 'Yes', desc: 'Text content displayed in the tooltip' },
  { prop: 'placement', type: "'bottom-center' | 'bottom-start' | 'bottom-end' | 'top-center' | 'top-start' | 'top-end'", default: "'bottom-center'", required: 'No', desc: 'Preferred placement relative to the trigger. Auto-flips if clipped' },
  { prop: 'shortcut', type: 'string', default: '—', required: 'No', desc: "Keyboard shortcut hint (e.g. 'Ctrl+S')" },
  { prop: 'children', type: 'ReactElement', default: '—', required: 'Yes', desc: 'Single interactive child element that serves as the trigger' },
]

const GLOBAL_CONFIG = [
  { option: 'hoverDelay', type: 'number', default: '400', desc: 'Milliseconds to wait before showing on hover' },
  { option: 'hideDelay', type: 'number', default: '100', desc: 'Milliseconds grace period before hiding' },
  { option: 'gap', type: 'number', default: '4', desc: 'Pixel gap between tooltip and trigger element' },
  { option: 'defaultPlacement', type: 'TooltipPlacement', default: "'bottom-center'", desc: 'Default placement when not specified per-tooltip' },
]

const BEHAVIORS = [
  { behavior: 'Single instance', detail: 'Only one tooltip is visible at any time. Opening a new tooltip immediately replaces the previous one.' },
  { behavior: 'Hover delay', detail: '400ms default delay before showing on mouse hover. Prevents flicker on quick mouse passes.' },
  { behavior: 'Focus immediate', detail: 'Tooltip appears immediately (0ms delay) when the trigger receives keyboard focus.' },
  { behavior: 'Hide grace period', detail: '100ms grace period before hiding. Allows the cursor to move from the trigger to the tooltip.' },
  { behavior: 'Persist on hover', detail: 'Tooltip stays visible when hovering the tooltip element itself (WCAG 1.4.13 compliance).' },
  { behavior: 'Collision-aware', detail: 'The position engine automatically flips the tooltip to the opposite side if the preferred placement would overflow.' },
  { behavior: 'Truncation-aware', detail: 'Components can detect text overflow and attach a tooltip automatically. Suppressed if text is not truncated.' },
  { behavior: 'Disabled elements', detail: 'Use aria-disabled="true" instead of native disabled so the element remains focusable and the tooltip is discoverable.' },
  { behavior: 'Touch devices', detail: 'Hover listeners are scoped to .no-touch contexts. Tooltips do not appear on touch-only interactions.' },
  { behavior: 'Reduced motion', detail: 'When prefers-reduced-motion is active, the tooltip appears and disappears instantly with no opacity transition.' },
]

const KEYBOARD = [
  { key: 'Tab', behavior: 'Focus on the trigger shows the tooltip; moving focus away hides it' },
  { key: 'Escape', behavior: 'Dismiss the tooltip while it is visible' },
]

const ARIA_ATTRS = [
  { attr: 'role="tooltip"', where: 'Tooltip element', when: 'Applied to the tooltip element by the manager' },
  { attr: 'aria-describedby', where: 'Trigger element', when: 'Set dynamically when the tooltip is visible, pointing to the tooltip id. Removed on hide.' },
]

const JS_METHODS = [
  { method: 'O9Tooltip.initialize(trigger, options)', returns: 'O9Tooltip', desc: 'Factory — attaches tooltip behavior to a DOM element' },
  { method: 'update(options)', returns: 'void', desc: 'Update tooltip content, placement, or shortcut at runtime' },
  { method: 'destroy()', returns: 'void', desc: 'Remove all event listeners and clean up' },
]

export default function Tooltip() {
  const [activeTab, setActiveTab] = useState('Overview')
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const onThisPageSections = useMemo(() => {
    if (activeTab === 'Overview') {
      return [
        { id: 'overview-purpose', label: 'Purpose' },
        { id: 'overview-definition', label: 'Definition & role' },
        { id: 'overview-anatomy', label: 'Anatomy' },
        { id: 'overview-behavior', label: 'Behavior' },
        { id: 'overview-naming', label: 'Naming' },
        { id: 'overview-dos-donts', label: 'Dos & don\u2019ts' },
      ]
    }
    if (activeTab === 'Usage') {
      return [
        { id: 'usage-when', label: 'When to use' },
        { id: 'usage-when-not', label: 'When not to use' },
        { id: 'usage-scenarios', label: 'Scenarios' },
        { id: 'usage-best-practices', label: 'Best practices' },
        { id: 'usage-related', label: 'Related components' },
      ]
    }
    if (activeTab === 'Code/APIs') {
      return [
        { id: 'code-props', label: 'Props' },
        { id: 'code-scenarios', label: 'Implementation scenarios' },
        { id: 'code-global', label: 'Global configuration' },
        { id: 'code-js-methods', label: 'JS methods' },
        { id: 'code-css', label: 'CSS variables' },
      ]
    }
    if (activeTab === 'Accessibility') {
      return [
        { id: 'a11y-intro', label: 'Overview' },
        { id: 'a11y-keyboard', label: 'Keyboard interaction' },
        { id: 'a11y-focus', label: 'Focus behavior' },
        { id: 'a11y-aria', label: 'ARIA attributes' },
        { id: 'a11y-disabled', label: 'Disabled triggers' },
        { id: 'a11y-wcag', label: 'WCAG compliance' },
        { id: 'a11y-notes', label: 'Accessibility notes' },
      ]
    }
    return []
  }, [activeTab])

  return (
    <PageWithToc sections={onThisPageSections}>
      <div className="max-w-4xl space-y-8">
        <section>
          <h1 className="group flex items-center gap-2 text-[30px] font-bold text-o9ds-light-primary dark:text-white mb-4">
            <span className="flex h-8 w-8 items-center justify-center bg-o9ds-light-surface dark:bg-neutral-700" data-o9ds-avatar data-o9ds-avatar-header>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </span>
            Tooltip
          </h1>
          <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed mb-2">
            {getComponentPageDescription('tooltip')}
          </p>
          <p className="text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed">
            Contextual text bubble that displays a description for an element on hover or keyboard focus. Managed by a singleton tooltip manager that guarantees only one tooltip is visible at a time. Supports an optional keyboard shortcut indicator.
          </p>
          <DocTabs tabs={tabs} activeTab={activeTab} onSelect={setActiveTab} />
        </section>

        {activeTab === 'Overview' && (
          <div className="space-y-12">
            <section id="overview-purpose" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Purpose</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The Tooltip provides supplementary text descriptions for UI controls when a visible label would consume too much space or when additional context is helpful. It is the lightest overlay in the design system — transient, non-interactive, and appearing only on hover or keyboard focus.
              </p>
            </section>

            <section id="overview-definition" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Definition & role</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                A <strong className="text-o9ds-light-primary dark:text-white font-medium">tooltip</strong> is a small text bubble that appears near a trigger element to describe it. It is always non-interactive — the user cannot click or focus inside the tooltip. A singleton manager ensures only one tooltip is visible at a time across the entire application.
              </p>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Tooltips are distinct from <strong className="text-o9ds-light-primary dark:text-white font-medium">popovers</strong>, which can contain interactive content, focus traps, and multi-section layouts. If you need more than plain text, use a Popover with <code className="px-1 py-0.5" data-o9ds-inline-code>interactive={'{false}'}</code> or <code className="px-1 py-0.5" data-o9ds-inline-code>interactive={'{true}'}</code> depending on the content.
              </p>
            </section>

            <section id="overview-anatomy" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Anatomy</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The tooltip is composed of a dark-themed container with one or two text elements.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">Text</strong> — the primary content text (<code className="px-1 py-0.5" data-o9ds-inline-code>.o9ds-tip__txt</code>). Always present.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">Shortcut badge</strong> — an optional keyboard shortcut indicator (<code className="px-1 py-0.5" data-o9ds-inline-code>.o9ds-tip__shortcut</code>) displayed alongside the text with a slightly different background.
                </li>
              </ul>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                A <strong className="text-o9ds-light-primary dark:text-white font-medium">rich</strong> tooltip variant with header, body, and footer sections is planned for a future release. The CSS class names (<code className="px-1 py-0.5" data-o9ds-inline-code>o9ds-tip--rich</code>, <code className="px-1 py-0.5" data-o9ds-inline-code>__hdr</code>, <code className="px-1 py-0.5" data-o9ds-inline-code>__bdy</code>, <code className="px-1 py-0.5" data-o9ds-inline-code>__ftr</code>) are reserved.
              </p>
            </section>

            <section id="overview-behavior" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Behavior</h2>
              <DocTable
                columns={[
                  { key: 'behavior', label: 'Behavior' },
                  { key: 'detail', label: 'Detail' },
                ]}
                rows={BEHAVIORS}
              />
            </section>

            <section id="overview-naming" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Naming guidance</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Tooltip content should be a short, descriptive phrase — not a sentence. For icon-only buttons, use the action name: "Save", "Delete", "More options". For shortcuts, pair the action with the key combination: "Save document" + "Ctrl+S".
              </p>
            </section>

            <section id="overview-dos-donts" className="scroll-mt-24">
              <div className="grid gap-4 sm:grid-cols-2">
                <GrayBgCard title="Do" bullets={['Use for supplementary labels on icon-only controls', 'Show keyboard shortcut hints with the shortcut prop', 'Use on truncated text so users can read the full value', 'Use aria-disabled (not native disabled) on triggers that need tooltips', 'Keep content to a single short phrase or sentence']} />
                <WhiteBgCard title="Don't" bullets={['Put interactive content (links, buttons, forms) in a tooltip', 'Duplicate information already visible in the trigger label', 'Use as a substitute for proper visible labels on important controls', 'Rely on tooltips as the only way to communicate critical information', 'Use for long paragraphs — consider a Popover instead']} />
              </div>
            </section>
          </div>
        )}

        {activeTab === 'Usage' && (
          <div className="space-y-12">
            <section id="usage-when" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Supplementary labels</strong> — clarify icon-only buttons or controls where a visible label would take too much space.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Keyboard shortcut hints</strong> — surface shortcuts without cluttering the UI.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Truncated text</strong> — attach a tooltip to a cell or label that clips overflow so users can read the full value.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Disabled controls</strong> — explain why a control is unavailable by pairing a tooltip with <code className="px-1 py-0.5" data-o9ds-inline-code>aria-disabled</code>.</li>
              </ul>
            </section>

            <section id="usage-when-not" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When not to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Interactive content (links, buttons, forms) — use a <strong className="text-o9ds-light-primary dark:text-white font-medium">Popover</strong> instead.</li>
                <li>Content that needs a title, body, and footer layout — use a <strong className="text-o9ds-light-primary dark:text-white font-medium">Popover</strong>.</li>
                <li>Content that must be persistent or dismissible by click — tooltips are transient by design.</li>
                <li>Essential information that users must read — tooltips are supplementary and not guaranteed to be seen by all users.</li>
              </ul>
            </section>

            <section id="usage-scenarios" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Scenarios</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Icon-only toolbar</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Each icon button in a toolbar gets a tooltip with the action name. The tooltip serves as the accessible label for screen readers via <code className="px-1 py-0.5" data-o9ds-inline-code>aria-describedby</code>.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Shortcut discovery</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Pair a tooltip with a shortcut badge to help users learn keyboard shortcuts. The shortcut text appears in a slightly different background within the tooltip.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Truncated cell</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    In data-dense tables, long values are truncated with ellipsis. A tooltip on hover reveals the full text. The tooltip is suppressed automatically if the text is not actually truncated.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Disabled button explanation</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    When a button is visually disabled, wrap it with a tooltip explaining why. Use <code className="px-1 py-0.5" data-o9ds-inline-code>aria-disabled="true"</code> instead of native <code className="px-1 py-0.5" data-o9ds-inline-code>disabled</code> so the tooltip trigger remains focusable.
                  </p>
                </div>
              </div>
            </section>

            <section id="usage-best-practices" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Best practices</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Keep tooltip text under 80 characters. If you need more, use a Popover.</li>
                <li>Do not duplicate the visible label — tooltips should add information, not repeat it.</li>
                <li>Use the built-in <code className="px-1 py-0.5" data-o9ds-inline-code>tooltip</code> prop on o9ds components (Button, IconButton) instead of wrapping with <code className="px-1 py-0.5" data-o9ds-inline-code>{'<O9Tooltip>'}</code> when available.</li>
                <li>Configure global tooltip timing via <code className="px-1 py-0.5" data-o9ds-inline-code>TooltipProvider</code> (React) or <code className="px-1 py-0.5" data-o9ds-inline-code>setupTooltips()</code> (JS) once at app startup.</li>
                <li>Avoid showing tooltips on touch devices — ensure all essential information has a visible alternative.</li>
              </ul>
            </section>

            <section id="usage-related" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Related components</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Popover</strong> — for richer overlays that need interactive content, a persistent state, or a header/body/footer layout.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Button</strong> — supports a built-in <code className="px-1 py-0.5" data-o9ds-inline-code>tooltip</code> prop so no wrapper is needed.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Icon Button</strong> — commonly paired with a tooltip to provide a visible label for the icon-only button.</li>
              </ul>
            </section>
          </div>
        )}

        {activeTab === 'Code/APIs' && (
          <div className="space-y-12">
            <section id="code-props" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Component API</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
                <code className="px-1 py-0.5" data-o9ds-inline-code>O9Tooltip</code> wraps a single interactive child element. The tooltip element itself is rendered by the singleton manager into the document body.
              </p>
              <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Prop</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Type</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Default</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Required</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PROPS.map((row) => (
                      <tr key={row.prop} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{row.prop}</td>
                        <td className="py-2 px-3 font-mono text-o9ds-light-secondary dark:text-neutral-400">{row.type}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.default}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.required}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="code-scenarios" className="scroll-mt-24 space-y-10">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Implementation scenarios</h2>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Basic — React</h3>
                <CodeBlock
                  code={`import { O9Tooltip } from '@o9ds/react';

<O9Tooltip content="Save document">
  <button>Save</button>
</O9Tooltip>

// With keyboard shortcut
<O9Tooltip content="Save document" shortcut="Ctrl+S">
  <button>Save</button>
</O9Tooltip>

// Custom placement
<O9Tooltip content="More options" placement="top-end">
  <button aria-label="More options">...</button>
</O9Tooltip>`}
                  label="React — basic"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Disabled trigger — React</h3>
                <CodeBlock
                  code={`<O9Tooltip content="You do not have permission to delete">
  <button aria-disabled="true" tabIndex={0}>Delete</button>
</O9Tooltip>`}
                  label="React — disabled trigger"
                />
                <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                  Use <code className="px-1 py-0.5" data-o9ds-inline-code>aria-disabled="true"</code> instead of native <code className="px-1 py-0.5" data-o9ds-inline-code>disabled</code> so the element remains focusable and the tooltip is discoverable.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Built-in tooltip prop — React</h3>
                <CodeBlock
                  code={`import { O9Button, O9IconButton } from '@o9ds/react';

// String shorthand
<O9Button label="Save" tooltip="Save document" />

// Object with shortcut
<O9IconButton
  icon="save"
  aria-label="Save"
  tooltip={{ content: 'Save document', shortcut: 'Ctrl+S' }}
/>`}
                  label="React — built-in tooltip prop"
                />
                <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                  Many o9ds components accept a <code className="px-1 py-0.5" data-o9ds-inline-code>tooltip</code> prop directly, so you do not need to wrap them with <code className="px-1 py-0.5" data-o9ds-inline-code>{'<O9Tooltip>'}</code>.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Basic — HTML</h3>
                <CodeBlock
                  code={`<!-- Trigger element -->
<button id="save-btn" aria-describedby="o9ds-tip-1">Save</button>

<!-- Tooltip element (inserted/removed by the manager) -->
<div class="o9ds-tip" id="o9ds-tip-1" role="tooltip">
  <span class="o9ds-tip__txt">Save document</span>
</div>

<!-- With keyboard shortcut -->
<div class="o9ds-tip" id="o9ds-tip-2" role="tooltip">
  <span class="o9ds-tip__txt">Save document</span>
  <span class="o9ds-tip__shortcut">Ctrl+S</span>
</div>`}
                  label="HTML"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Vanilla JS</h3>
                <CodeBlock
                  code={`import { O9Tooltip, setupTooltips } from '@o9ds/js';

// Optional: configure global tooltip behavior
setupTooltips({ hoverDelay: 500, gap: 6 });

// Attach tooltip to a DOM element
const triggerEl = document.querySelector('#save-btn');
const tip = O9Tooltip.initialize(triggerEl, {
  content: 'Save document',
  placement: 'bottom-center',
  shortcut: 'Ctrl+S',
});

// Update at runtime
tip.update({ content: 'Document saved!' });

// Tear down
tip.destroy();`}
                  label="Vanilla JS"
                />
              </div>
            </section>

            <section id="code-global" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Global configuration</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                Configure tooltip behavior globally via <code className="px-1 py-0.5" data-o9ds-inline-code>TooltipProvider</code> (React) or <code className="px-1 py-0.5" data-o9ds-inline-code>setupTooltips()</code> (JS).
              </p>

              <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Option</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Type</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Default</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {GLOBAL_CONFIG.map((row) => (
                      <tr key={row.option} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{row.option}</td>
                        <td className="py-2 px-3 font-mono text-o9ds-light-secondary dark:text-neutral-400">{row.type}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.default}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="space-y-3 mt-6">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">React provider</h3>
                <CodeBlock
                  code={`import { TooltipProvider } from '@o9ds/react';

<TooltipProvider config={{ hoverDelay: 500, hideDelay: 150, gap: 6 }}>
  <App />
</TooltipProvider>`}
                  label="React — TooltipProvider"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">JS setup</h3>
                <CodeBlock
                  code={`import { setupTooltips } from '@o9ds/js';

setupTooltips({
  hoverDelay: 500,
  hideDelay: 150,
  gap: 6,
  defaultPlacement: 'top-center',
});`}
                  label="JS — setupTooltips"
                />
              </div>
            </section>

            <section id="code-js-methods" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">JS methods</h2>
              <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Method</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Returns</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {JS_METHODS.map((row) => (
                      <tr key={row.method} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{row.method}</td>
                        <td className="py-2 px-3 font-mono text-o9ds-light-secondary dark:text-neutral-400">{row.returns}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="code-css" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">CSS variables</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                Override on <code className="px-1 py-0.5" data-o9ds-inline-code>.o9ds-tip</code> or a parent to theme the tooltip.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { cat: 'Layout', vars: ['--o9ds-tip-max-w', '--o9ds-tip-padding-inline', '--o9ds-tip-padding-block', '--o9ds-tip-gap'] },
                  { cat: 'Typography', vars: ['--o9ds-tip-font-size'] },
                  { cat: 'Colors', vars: ['--o9ds-tip-bg', '--o9ds-tip-text-color', '--o9ds-tip-shortcut-bg'] },
                  { cat: 'Effects', vars: ['--o9ds-tip-shadow'] },
                ].map(({ cat, vars }) => (
                  <div key={cat} className="border p-4 dark:border-neutral-700" style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#FAFAFA' } : undefined}>
                    <h3 className="text-sm font-semibold text-o9ds-light-primary dark:text-white mb-2">{cat}</h3>
                    <ul className="space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                      {vars.map((v) => (
                        <li key={v}>{v}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'Accessibility' && (
          <section id="tooltip-accessibility" className="space-y-12">
            <div id="a11y-intro" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Tooltip accessibility</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The Tooltip follows the WAI-ARIA Tooltip pattern. The tooltip element has <code className="px-1 py-0.5" data-o9ds-inline-code>role="tooltip"</code> and the trigger is linked via <code className="px-1 py-0.5" data-o9ds-inline-code>aria-describedby</code> when the tooltip is visible. The tooltip never receives focus — focus remains on the trigger at all times.
              </p>
            </div>

            <div id="a11y-keyboard" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Keyboard interaction</h3>
              <DocTable
                columns={[
                  { key: 'key', label: 'Key', mono: true },
                  { key: 'behavior', label: 'Action' },
                ]}
                rows={KEYBOARD}
              />
            </div>

            <div id="a11y-focus" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Focus behavior</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>The tooltip does not receive focus. Focus remains on the trigger element at all times.</li>
                <li>Tooltip appears immediately (0ms delay) on keyboard focus — no hover delay for keyboard users.</li>
                <li>Tooltip disappears when focus moves away from the trigger.</li>
                <li>The tooltip stays visible while the user hovers over the tooltip element itself (WCAG 1.4.13).</li>
              </ul>
            </div>

            <div id="a11y-aria" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">ARIA attributes</h3>
              <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Attribute</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Applied to</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ARIA_ATTRS.map(({ attr, where, when }) => (
                      <tr key={attr} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{attr}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{where}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{when}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div id="a11y-disabled" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Disabled triggers</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Tooltips on disabled elements require special handling. Use <code className="px-1 py-0.5" data-o9ds-inline-code>aria-disabled="true"</code> instead of the native <code className="px-1 py-0.5" data-o9ds-inline-code>disabled</code> attribute so the element remains in the tab order and the tooltip is discoverable via keyboard focus.
              </p>
              <CodeBlock
                code={`<!-- Native disabled — tooltip NOT accessible via keyboard -->
<button disabled>Delete</button>

<!-- aria-disabled — tooltip IS accessible via keyboard -->
<button aria-disabled="true" tabindex="0"
  aria-describedby="o9ds-tip-del">Delete</button>
<div class="o9ds-tip" id="o9ds-tip-del" role="tooltip">
  <span class="o9ds-tip__txt">You do not have permission</span>
</div>`}
                label="Disabled trigger handling"
              />
            </div>

            <div id="a11y-wcag" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">WCAG compliance</h3>
              <DocTable
                columns={[
                  { key: 'criterion', label: 'Criterion' },
                  { key: 'detail', label: 'How we comply' },
                ]}
                rows={[
                  { criterion: '1.4.13 Content on Hover or Focus', detail: 'Tooltip stays visible while hovered, dismissible via Escape, persistent until user action.' },
                  { criterion: '4.1.2 Name, Role, Value', detail: 'Tooltip has role="tooltip"; trigger references it via aria-describedby.' },
                ]}
              />
            </div>

            <div id="a11y-notes" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Accessibility notes</h3>
              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
                <WhiteBgCard title="Singleton manager">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Only one tooltip is visible at any time. The manager automatically dismisses the current tooltip before showing a new one. This prevents screen readers from announcing stale tooltip content.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Touch devices">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Tooltip hover listeners are scoped to <code className="px-1 py-0.5" data-o9ds-inline-code>.no-touch</code> contexts. On touch-only devices, tooltips do not appear. Ensure critical information has a visible alternative.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Reduced motion">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    When <code className="px-1 py-0.5" data-o9ds-inline-code>prefers-reduced-motion</code> is active, the tooltip appears and disappears instantly with no opacity transition, respecting the user's motion preferences.
                  </p>
                </WhiteBgCard>
              </div>
            </div>
          </section>
        )}
      </div>
    </PageWithToc>
  )
}
