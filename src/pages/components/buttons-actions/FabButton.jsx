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

const VARIANTS = [
  { name: 'Primary', desc: 'The most important floating action on a page — theme-color background with inverse icon/text' },
  { name: 'Secondary', desc: 'Supporting floating action — subtle layer background with secondary icon/text' },
]

const PROPS = [
  { prop: 'icon', type: 'string', default: "'plus'", required: 'Yes', desc: 'Icon name without o9con- prefix' },
  { prop: 'variant', type: "'primary' | 'secondary'", default: "'primary'", required: 'No', desc: 'Visual variant. Only primary and secondary are supported.' },
  { prop: 'label', type: 'string', default: 'undefined', required: 'No', desc: 'Label text. When provided, renders extended FAB (icon + label).' },
  { prop: 'disabled', type: 'boolean', default: 'false', required: 'No', desc: 'Prevents all interaction. Shadow remains at reduced opacity.' },
  { prop: 'loading', type: 'boolean', default: 'false', required: 'No', desc: 'Shows shimmer on inner button (Pattern A); prevents interaction' },
  { prop: 'indicator', type: "'unsaved' | 'new' | 'unread' | false", default: 'false', required: 'No', desc: 'Indicator badge variant. Hidden during disabled/loading.' },
  { prop: 'indicatorSize', type: "'sm' | 'lg'", default: "'lg'", required: 'No', desc: 'Indicator dot size (6px or 10px)' },
  { prop: 'zIndex', type: 'number', default: 'undefined', required: 'No', desc: 'Explicit z-index override. Falls back to CSS variable, then 1050.' },
  { prop: 'tooltip', type: 'string', default: 'undefined', required: 'No', desc: 'Tooltip text. Also used as aria-label in icon-only mode.' },
  { prop: 'onClick', type: '(event) => void', default: 'undefined', required: 'No', desc: 'Click handler; suppressed when disabled or loading' },
  { prop: 'onFocus', type: '(event) => void', default: 'undefined', required: 'No', desc: 'Focus handler on the inner button' },
  { prop: 'onBlur', type: '(event) => void', default: 'undefined', required: 'No', desc: 'Blur handler on the inner button' },
]

const INDICATOR_VARIANTS = [
  { variant: 'unsaved', color: '#e39600 (warning)', shape: 'Circle', semantic: 'Unsaved changes' },
  { variant: 'new', color: '#d9311b (negative)', shape: 'Square', semantic: 'New notification' },
  { variant: 'unread', color: '#010101 (theme)', shape: 'Square', semantic: 'Unread items' },
]

const ARIA_ATTRS = [
  { attr: 'aria-label', when: 'Automatically set in icon-only mode from tooltip prop. Required for accessibility.' },
  { attr: 'aria-busy', when: 'Set on wrapper and inner button during loading state.' },
  { attr: 'aria-disabled', when: 'Set via native disabled attribute on the inner button.' },
]

export default function FabButton() {
  const [activeTab, setActiveTab] = useState('Overview')
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const onThisPageSections = useMemo(() => {
    if (activeTab === 'Overview') {
      return [
        { id: 'overview-purpose', label: 'Purpose' },
        { id: 'overview-definition', label: 'Definition & role' },
        { id: 'overview-anatomy', label: 'Anatomy' },
        { id: 'overview-variants', label: 'Variants' },
        { id: 'overview-modes', label: 'Modes' },
        { id: 'overview-states', label: 'States' },
        { id: 'overview-indicator', label: 'Indicator badge' },
        { id: 'overview-dos-donts', label: 'Dos & don\u2019ts' },
      ]
    }
    if (activeTab === 'Usage') {
      return [
        { id: 'usage-when', label: 'When to use' },
        { id: 'usage-when-not', label: 'When not to use' },
        { id: 'usage-scenarios', label: 'Scenarios' },
        { id: 'usage-best-practices', label: 'Best practices' },
        { id: 'usage-z-index', label: 'Z-index & positioning' },
      ]
    }
    if (activeTab === 'Code/APIs') {
      return [
        { id: 'code-props', label: 'Props' },
        { id: 'code-scenarios', label: 'Implementation scenarios' },
        { id: 'code-architecture', label: 'Architecture' },
        { id: 'code-tokens', label: 'Tokens & mapping' },
        { id: 'code-css', label: 'CSS variables' },
        { id: 'code-indicator', label: 'Indicator reference' },
      ]
    }
    if (activeTab === 'Accessibility') {
      return [
        { id: 'a11y-intro', label: 'Overview' },
        { id: 'a11y-keyboard', label: 'Keyboard interaction' },
        { id: 'a11y-focus', label: 'Focus behavior' },
        { id: 'a11y-label', label: 'Accessible name' },
        { id: 'a11y-disabled', label: 'Disabled state' },
        { id: 'a11y-loading', label: 'Loading state' },
        { id: 'a11y-indicator', label: 'Indicator accessibility' },
        { id: 'a11y-notes', label: 'Accessibility notes' },
        { id: 'a11y-supported-aria', label: 'Supported ARIA attributes' },
      ]
    }
    return []
  }, [activeTab])

  const variantPreview = (name) => ({
    ...(name === 'Primary' && { backgroundColor: isLight ? '#010101' : '#fff', color: isLight ? '#fff' : '#000', borderColor: 'transparent' }),
    ...(name === 'Secondary' && { backgroundColor: isLight ? '#F2F2F2' : '#404040', color: isLight ? '#010101' : '#fff', borderColor: 'transparent' }),
  })

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
            FAB Button
          </h1>
          <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed mb-2">
            {getComponentPageDescription('fab-button')}
          </p>
          <p className="text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed">
            A persistent, elevated button that floats above page content for a primary or secondary contextual action. Use this page to understand its composition model, when to use it, how to implement it, and how to keep it accessible.
          </p>

          <DocTabs tabs={tabs} activeTab={activeTab} onSelect={setActiveTab} />
        </section>

        {activeTab === 'Overview' && (
          <div className="space-y-12">
            <section id="overview-purpose" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Purpose</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The FAB Button provides a persistent, high-visibility action point that floats above the page content. It is designed for the single most important action in a view — creating a new item, composing a message, or triggering a primary workflow. Its elevated shadow ensures it stands out regardless of the content below.
              </p>
            </section>

            <section id="overview-definition" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Definition & role</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                A <strong className="text-o9ds-light-primary dark:text-white font-medium">Floating Action Button (FAB)</strong> is a composition wrapper — it does not duplicate button logic. Internally it composes either an <strong className="text-o9ds-light-primary dark:text-white font-medium">O9IconButton</strong> (icon-only mode) or an <strong className="text-o9ds-light-primary dark:text-white font-medium">O9Button</strong> (with-label / extended mode). The wrapper provides elevation (box-shadow), z-index layering, and an optional indicator badge.
              </p>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Only <strong className="text-o9ds-light-primary dark:text-white font-medium">primary</strong> and <strong className="text-o9ds-light-primary dark:text-white font-medium">secondary</strong> variants are supported — tertiary, outline, and danger are not FAB use cases.
              </p>
            </section>

            <section id="overview-anatomy" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Anatomy</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                A FAB consists of a <strong className="text-o9ds-light-primary dark:text-white font-medium">wrapper</strong> (presentational div providing shadow and positioning), an <strong className="text-o9ds-light-primary dark:text-white font-medium">inner button</strong> (O9IconButton or O9Button), and an optional <strong className="text-o9ds-light-primary dark:text-white font-medium">indicator badge</strong>.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">1 — Wrapper</strong> — presentational <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;div&gt;</code> with <code className="px-1 py-0.5" data-o9ds-inline-code>.o9ds-fab-btn</code>; provides box-shadow, z-index, and indicator positioning context. Not focusable.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">2 — Inner button</strong> — the actual interactive element. In icon-only mode, a 40×40px O9IconButton (lg); in with-label mode, a 32px O9Button (md) with icon and label.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">3 — Indicator badge</strong> — optional status dot positioned at the top-right corner using the shared <code className="px-1 py-0.5" data-o9ds-inline-code>o9ds-indicator</code> pattern. Purely decorative (<code className="px-1 py-0.5" data-o9ds-inline-code>aria-hidden="true"</code>).
                </li>
              </ul>
            </section>

            <section id="overview-variants" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Variants</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed mb-4">
                Two variants only — FABs represent the primary or secondary action in a view. Use one primary FAB per viewport region.
              </p>
              <ul className="space-y-3 text-o9ds-light-secondary dark:text-neutral-400 mb-6">
                {VARIANTS.map(({ name, desc }) => (
                  <li key={name}>
                    <strong className="text-o9ds-light-primary dark:text-white">{name}</strong> — {desc}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                {['Primary', 'Secondary'].map((name) => (
                  <button
                    key={name}
                    type="button"
                    className="flex items-center justify-center w-10 h-10 border transition-colors"
                    style={{
                      ...variantPreview(name),
                      boxShadow: '0px 4px 7px 2px rgba(76, 76, 76, 0.2)',
                    }}
                    title={name}
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                ))}
              </div>
            </section>

            <section id="overview-modes" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Modes</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">Icon-only (default)</strong> — compact circular FAB (40×40px) for well-known actions. Composes O9IconButton at size lg. A <code className="px-1 py-0.5" data-o9ds-inline-code>tooltip</code> is required for accessibility.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">Extended / with-label</strong> — FAB with icon + text label (32px height) for actions that benefit from explicit labeling. Composes O9Button at size md with leading icon.
                </li>
              </ul>
            </section>

            <section id="overview-states" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">States</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Default</strong> — elevated, ready to activate.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Hover</strong> — inner button hover (inherited from variant styles).</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Focus</strong> — visible focus ring on the inner button, not the wrapper.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Active</strong> — inner button active/pressed styles (inherited).</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Disabled</strong> — inner button disabled; shadow remains at reduced opacity; indicator hidden.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Loading</strong> — inner button shows shimmer overlay; shadow remains; indicator hidden.</li>
              </ul>
            </section>

            <section id="overview-indicator" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Indicator badge</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The FAB supports an optional indicator badge positioned at the top-right corner, using the shared <code className="px-1 py-0.5" data-o9ds-inline-code>o9ds-indicator</code> pattern. Three semantic variants are available:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">unsaved</strong> — amber circle indicating unsaved changes.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">new</strong> — red square indicating new notifications.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">unread</strong> — theme-color square indicating unread items.</li>
              </ul>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The indicator is purely decorative (<code className="px-1 py-0.5" data-o9ds-inline-code>aria-hidden="true"</code>). If its status is critical, communicate it through an alternative accessible mechanism such as a live region or <code className="px-1 py-0.5" data-o9ds-inline-code>aria-label</code> update.
              </p>
            </section>

            <section id="overview-dos-donts" className="scroll-mt-24">
              <div className="grid gap-4 sm:grid-cols-2">
                <GrayBgCard title="Do" bullets={['Use one FAB per viewport region for the primary action', 'Provide a tooltip for icon-only FABs', 'Use the extended (with-label) mode when the icon alone is not universally clear', 'Keep the FAB visible and accessible across scroll positions']} />
                <WhiteBgCard title="Don't" bullets={['Use FAB inside a Button Group — it is designed for standalone floating placement', 'Apply tertiary, outline, or danger variants — only primary and secondary are supported', 'Place multiple FABs competing for attention in the same region', 'Rely solely on the indicator badge for critical information']} />
              </div>
            </section>
          </div>
        )}

        {activeTab === 'Usage' && (
          <div className="space-y-12">
            <section id="usage-when" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>A single, primary creation or composition action dominates the view (e.g. "Add item", "Compose", "New").</li>
                <li>The action must remain visible and accessible as users scroll through content.</li>
                <li>A persistent floating action point provides better discoverability than a toolbar or inline button.</li>
                <li>The action benefits from an optional status indicator (unsaved changes, new notifications).</li>
              </ul>
            </section>

            <section id="usage-when-not" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When not to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>The action is inline within content — use a standard <strong className="text-o9ds-light-primary dark:text-white font-medium">Button</strong> or <strong className="text-o9ds-light-primary dark:text-white font-medium">Icon Button</strong>.</li>
                <li>Multiple competing actions need to float — a FAB is for one primary action, not a toolbar.</li>
                <li>The action is destructive — FABs should not use the danger variant.</li>
                <li>The action is in a toolbar, form footer, or table row — use an inline button instead.</li>
                <li>The view already has a prominent primary call-to-action that is always visible.</li>
              </ul>
            </section>

            <section id="usage-scenarios" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Scenarios</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Create / add action</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Use a primary icon-only FAB with a "plus" icon for the main creation action in a list or dashboard view. Pair with a tooltip describing what is created.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Extended FAB with label</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    When the icon alone is insufficient context, use an extended FAB with a label. The label makes the action explicit without relying on user familiarity with the icon.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Secondary FAB</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Use a secondary FAB for a supporting action that complements the primary action or when a primary FAB would be too visually dominant.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">With indicator badge</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Add an indicator to signal status changes (unsaved work, new notifications) without interrupting the user's workflow.
                  </p>
                </div>
              </div>
            </section>

            <section id="usage-best-practices" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Best practices</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Limit to one FAB per viewport region — two FABs competing for attention confuse users.</li>
                <li>Position the FAB consistently (typically bottom-right) so users build muscle memory.</li>
                <li>Use the extended mode (with label) when onboarding or when the icon is not universally understood.</li>
                <li>If the indicator status is critical, provide an accessible alternative (live region or updated aria-label).</li>
              </ul>
            </section>

            <section id="usage-z-index" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Z-index & positioning</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed mb-2">
                The FAB's z-index resolves in this order:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Explicit <code className="px-1 py-0.5" data-o9ds-inline-code>zIndex</code> prop</strong> — sets inline <code className="px-1 py-0.5" data-o9ds-inline-code>z-index</code>.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">CSS variable <code className="px-1 py-0.5" data-o9ds-inline-code>--o9ds-fab-btn-z-index</code></strong> — set by consumer on the element or parent.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Design system default</strong> — 1050 (above page content, below modals at 1300).</li>
              </ol>
            </section>
          </div>
        )}

        {activeTab === 'Code/APIs' && (
          <div className="space-y-12">
            <section id="code-props" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Component API</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
                O9FabButton wraps an O9IconButton (icon-only) or O9Button (with-label). The wrapper is a presentational <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;div&gt;</code> — all interaction is delegated to the inner button.
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
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Icon-only FAB — React</h3>
                <CodeBlock
                  code={`import { O9FabButton } from '@o9ds/react';

<O9FabButton icon="plus" tooltip="Add item" />
<O9FabButton icon="edit" tooltip="Edit" variant="secondary" />`}
                  label="React — icon-only"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Extended FAB with label — React</h3>
                <CodeBlock
                  code={`<O9FabButton icon="plus" label="Create" />
<O9FabButton icon="edit" label="Edit Item" variant="secondary" />`}
                  label="React — with label"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Icon-only FAB — HTML</h3>
                <CodeBlock
                  code={`<!-- Primary, icon-only -->
<div class="o9ds-fab-btn o9ds-fab-btn--primary o9ds-fab-btn--icon-only">
  <button class="o9ds-icon-btn o9ds-btn--primary o9ds-btn--lg" type="button"
          aria-label="Add item" title="Add item">
    <span class="o9ds-btn__ico o9con o9con-plus" aria-hidden="true"></span>
  </button>
</div>`}
                  label="HTML — icon-only"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Extended FAB — HTML</h3>
                <CodeBlock
                  code={`<!-- Secondary, with label -->
<div class="o9ds-fab-btn o9ds-fab-btn--secondary o9ds-fab-btn--with-label">
  <button class="o9ds-btn o9ds-btn--secondary o9ds-btn--md" type="button">
    <span class="o9ds-btn__ico o9con o9con-edit" aria-hidden="true"></span>
    <span class="o9ds-btn__lbl">Edit Item</span>
  </button>
</div>`}
                  label="HTML — with label"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">With indicator badge — HTML</h3>
                <CodeBlock
                  code={`<div class="o9ds-fab-btn o9ds-fab-btn--primary o9ds-fab-btn--icon-only">
  <button class="o9ds-icon-btn o9ds-btn--primary o9ds-btn--lg" type="button"
          aria-label="Notifications" title="Notifications">
    <span class="o9ds-btn__ico o9con o9con-bell" aria-hidden="true"></span>
  </button>
  <span class="o9ds-indicator o9ds-indicator--new o9ds-indicator--lg"
        aria-hidden="true"></span>
</div>`}
                  label="HTML — with indicator"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Disabled</h3>
                <CodeBlock
                  code={`<O9FabButton icon="plus" tooltip="Add" disabled />

<div class="o9ds-fab-btn o9ds-fab-btn--primary o9ds-fab-btn--icon-only is-disabled">
  <button class="o9ds-icon-btn o9ds-btn--primary o9ds-btn--lg" type="button" disabled
          aria-label="Add item">
    <span class="o9ds-btn__ico o9con o9con-plus" aria-hidden="true"></span>
  </button>
</div>`}
                  label="Disabled"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Loading & async</h3>
                <CodeBlock
                  code={`const [loading, setLoading] = React.useState(false);

const handleCreate = async () => {
  setLoading(true);
  await createItem();
  setLoading(false);
};

<O9FabButton icon="plus" tooltip="Create" loading={loading} onClick={handleCreate} />`}
                  label="React async + loading"
                />
                <CodeBlock
                  code={`<!-- HTML loading -->
<div class="o9ds-fab-btn o9ds-fab-btn--primary o9ds-fab-btn--icon-only loading"
     aria-busy="true">
  <button class="o9ds-icon-btn o9ds-btn--primary o9ds-btn--lg loading" type="button"
          aria-label="Add item" aria-busy="true">
    <span class="o9ds-btn__ico o9con o9con-plus" aria-hidden="true"></span>
  </button>
</div>`}
                  label="HTML loading"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Custom z-index</h3>
                <CodeBlock
                  code={`<O9FabButton icon="plus" tooltip="Add" zIndex={2000} />`}
                  label="Explicit z-index"
                />
              </div>
            </section>

            <section id="code-architecture" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Architecture</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                The FAB is a composition wrapper — it does NOT duplicate button logic or styling. All button variant colors, sizes, hover/focus/active states, loading shimmer, and typography are inherited from the inner button unchanged.
              </p>
              <DocTable
                columns={[
                  { key: 'mode', label: 'Mode' },
                  { key: 'inner', label: 'Inner component' },
                  { key: 'size', label: 'Button size' },
                  { key: 'dims', label: 'Dimensions' },
                ]}
                rows={[
                  { mode: 'Icon-only (default)', inner: 'O9IconButton', size: 'lg', dims: '40×40px' },
                  { mode: 'With label', inner: 'O9Button', size: 'md', dims: '32px height' },
                ]}
              />
            </section>

            <section id="code-tokens" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Tokens & mapping</h2>
              <DocTable
                columns={[
                  { key: 'map', label: 'Mapping' },
                  { key: 'detail', label: 'Notes' },
                ]}
                rows={[
                  { map: 'variant → wrapper + inner', detail: 'o9ds-fab-btn--primary | secondary → inner button gets o9ds-btn--primary | secondary' },
                  { map: 'mode → wrapper modifier', detail: 'o9ds-fab-btn--icon-only (default) or o9ds-fab-btn--with-label' },
                  { map: 'loading → class + aria-busy', detail: '.loading on wrapper + inner button; aria-busy="true"' },
                  { map: 'disabled → class + attribute', detail: '.is-disabled on wrapper; disabled on inner button' },
                  { map: 'indicator → shared pattern', detail: '.o9ds-indicator--unsaved | new | unread with --sm | --lg size' },
                ]}
              />
            </section>

            <section id="code-css" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">CSS variables</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                Override on <code className="px-1 py-0.5" data-o9ds-inline-code>.o9ds-fab-btn</code> or a parent. The FAB does not override any <code className="px-1 py-0.5" data-o9ds-inline-code>--o9ds-btn-*</code> variables — inner button styling is inherited unchanged.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { cat: 'Elevation', vars: ['--o9ds-fab-btn-shadow', '--o9ds-fab-btn-shadow-disabled'] },
                  { cat: 'Positioning', vars: ['--o9ds-fab-btn-z-index'] },
                  { cat: 'Indicator offsets', vars: ['--o9ds-fab-btn-indicator-top', '--o9ds-fab-btn-indicator-right'] },
                  { cat: 'Layout (icon-only)', vars: ['--o9ds-fab-btn-size'] },
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

            <section id="code-indicator" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Indicator reference</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                The indicator uses the shared <code className="px-1 py-0.5" data-o9ds-inline-code>o9ds-indicator</code> pattern with a 1px layer-01 border ring.
              </p>
              <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Variant</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Color</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Shape</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Semantic</th>
                    </tr>
                  </thead>
                  <tbody>
                    {INDICATOR_VARIANTS.map((row) => (
                      <tr key={row.variant} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{row.variant}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.color}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.shape}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.semantic}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <DocTable
                columns={[
                  { key: 'size', label: 'Size' },
                  { key: 'dims', label: 'Dot dimensions' },
                ]}
                rows={[
                  { size: 'sm', dims: '6×6px' },
                  { size: 'lg', dims: '10×10px' },
                ]}
              />
            </section>
          </div>
        )}

        {activeTab === 'Accessibility' && (
          <section id="fab-button-accessibility" className="space-y-12">
            <div id="a11y-intro" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">FAB Button accessibility</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The FAB wrapper is purely presentational — all interactive semantics live on the inner <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;button&gt;</code> element. Screen readers interact with the inner O9IconButton or O9Button, not the wrapper div. In icon-only mode, the{' '}
                <code className="px-1 py-0.5" data-o9ds-inline-code>tooltip</code> prop is required and provides the accessible name via <code className="px-1 py-0.5" data-o9ds-inline-code>aria-label</code>.
              </p>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                Screen readers announce the inner button: <code className="px-1 py-0.5" data-o9ds-inline-code>[accessible name], button</code>
              </p>
            </div>

            <div id="a11y-keyboard" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Keyboard interaction</h3>
              <p className="text-sm font-medium text-o9ds-light-primary dark:text-white">Required behavior</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>Tab focuses the inner button (standard tab order based on z-index and DOM position).</li>
                <li>Activation works with both <strong className="text-o9ds-light-primary dark:text-white font-medium">Enter</strong> and <strong className="text-o9ds-light-primary dark:text-white font-medium">Space</strong>, delegated to the inner button.</li>
                <li>Focus must remain predictable after the action.</li>
              </ul>
              <DocTable
                columns={[
                  { key: 'key', label: 'Keys', mono: true },
                  { key: 'behavior', label: 'Purpose' },
                ]}
                rows={[
                  { key: 'Enter', behavior: 'Activate the FAB (delegated to inner button).' },
                  { key: 'Space', behavior: 'Activate the FAB (delegated to inner button).' },
                  { key: 'Tab', behavior: 'Focus the inner button.' },
                  { key: 'Shift+Tab', behavior: 'Move focus away from the FAB.' },
                ]}
              />
            </div>

            <div id="a11y-focus" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Focus behavior</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <strong className="text-o9ds-light-primary dark:text-white font-medium">Focus target:</strong> The focus ring renders on the inner button element, not the wrapper div. The wrapper has no role and is not focusable.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>Focus ring uses <code className="px-1 py-0.5" data-o9ds-inline-code>outline: 1px solid</code> with <code className="px-1 py-0.5" data-o9ds-inline-code>outline-offset: 2px</code> (standard o9ds focus ring).</li>
                <li>Hover styles are scoped to <code className="px-1 py-0.5" data-o9ds-inline-code>.no-touch</code> (inherited from inner button variant styles).</li>
              </ul>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <strong className="text-o9ds-light-primary dark:text-white font-normal">WCAG:</strong> 2.4.7 Focus Visible · 2.4.13 Focus Appearance (WCAG 2.2)
              </p>
            </div>

            <div id="a11y-label" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Accessible name</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                In <strong className="text-o9ds-light-primary dark:text-white font-medium">icon-only mode</strong>, the <code className="px-1 py-0.5" data-o9ds-inline-code>tooltip</code> prop is required and maps to <code className="px-1 py-0.5" data-o9ds-inline-code>aria-label</code>. In <strong className="text-o9ds-light-primary dark:text-white font-medium">with-label mode</strong>, the visible label text provides the accessible name automatically.
              </p>
              <CodeBlock
                code={`<!-- Icon-only: tooltip provides aria-label -->
<div class="o9ds-fab-btn o9ds-fab-btn--primary o9ds-fab-btn--icon-only">
  <button class="o9ds-icon-btn o9ds-btn--primary o9ds-btn--lg" type="button"
          aria-label="Add item" title="Add item">
    <span class="o9ds-btn__ico o9con o9con-plus" aria-hidden="true"></span>
  </button>
</div>

<!-- With-label: visible text is the accessible name -->
<div class="o9ds-fab-btn o9ds-fab-btn--primary o9ds-fab-btn--with-label">
  <button class="o9ds-btn o9ds-btn--primary o9ds-btn--md" type="button">
    <span class="o9ds-btn__ico o9con o9con-plus" aria-hidden="true"></span>
    <span class="o9ds-btn__lbl">Create</span>
  </button>
</div>`}
                label="Accessible name by mode"
              />
            </div>

            <div id="a11y-disabled" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Disabled state</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Disabled is set on the inner button via the native <code className="px-1 py-0.5" data-o9ds-inline-code>disabled</code> attribute. The wrapper receives the <code className="px-1 py-0.5" data-o9ds-inline-code>.is-disabled</code> class for visual styling (reduced shadow opacity). The indicator is hidden.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>Inner button cannot be activated.</li>
                <li>Removed from tab order (native disabled behavior).</li>
                <li>Shadow remains visible but at reduced opacity.</li>
                <li>Indicator badge is hidden.</li>
              </ul>
            </div>

            <div id="a11y-loading" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Loading state</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                During loading, <code className="px-1 py-0.5" data-o9ds-inline-code>aria-busy="true"</code> is set on both the wrapper and the inner button. The shimmer overlay renders on the inner button while the wrapper retains its shadow. The indicator is hidden.
              </p>
              <CodeBlock
                code={`<div class="o9ds-fab-btn o9ds-fab-btn--primary o9ds-fab-btn--icon-only loading"
     aria-busy="true">
  <button class="o9ds-icon-btn o9ds-btn--primary o9ds-btn--lg loading" type="button"
          aria-label="Adding..." aria-busy="true">
    <span class="o9ds-btn__ico o9con o9con-plus" aria-hidden="true"></span>
  </button>
</div>`}
                label="FAB loading state"
              />
            </div>

            <div id="a11y-indicator" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Indicator accessibility</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The indicator badge is purely decorative (<code className="px-1 py-0.5" data-o9ds-inline-code>aria-hidden="true"</code>). It should not be the sole means of communicating status.
              </p>
              <p className="text-sm font-medium text-o9ds-light-primary dark:text-white">If the indicator status is critical</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>Update the button's <code className="px-1 py-0.5" data-o9ds-inline-code>aria-label</code> to include the status (e.g. "Notifications, 3 new").</li>
                <li>Use an <code className="px-1 py-0.5" data-o9ds-inline-code>aria-live</code> region to announce status changes.</li>
                <li>Provide alternative visual or textual indication elsewhere in the UI.</li>
              </ul>
            </div>

            <div id="a11y-notes" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Accessibility notes</h3>
              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
                <WhiteBgCard title="Wrapper is presentational">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    The <code className="px-1 py-0.5" data-o9ds-inline-code>.o9ds-fab-btn</code> wrapper has no role and is not focusable. All interactive semantics live on the inner <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;button&gt;</code> element.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Icon-only requires tooltip">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    In icon-only mode, the <code className="px-1 py-0.5" data-o9ds-inline-code>tooltip</code> prop is required. It provides both the <code className="px-1 py-0.5" data-o9ds-inline-code>aria-label</code> and the native title tooltip for hover/focus display.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Indicator is decorative">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    The indicator badge is <code className="px-1 py-0.5" data-o9ds-inline-code>aria-hidden="true"</code>. If its status is critical, use an <code className="px-1 py-0.5" data-o9ds-inline-code>aria-live</code> region or updated <code className="px-1 py-0.5" data-o9ds-inline-code>aria-label</code> as an accessible alternative.
                  </p>
                </WhiteBgCard>
              </div>
            </div>

            <div id="a11y-supported-aria" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Supported ARIA attributes</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 mb-4">
                These attributes apply to the inner button element, not the wrapper.
              </p>
              <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Attribute</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">When to use</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ARIA_ATTRS.map(({ attr, when }) => (
                      <tr key={attr} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{attr}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{when}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}
      </div>
    </PageWithToc>
  )
}
