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
  { name: 'Primary', desc: 'Main call-to-action navigation; filled theme-color background with inverse text' },
  { name: 'Secondary', desc: 'Supporting navigation that is important but not primary' },
  { name: 'Tertiary', desc: 'Low-emphasis navigation in dense toolbars or inline contexts' },
  { name: 'Outline', desc: 'Navigation needing brand-color emphasis without filled background' },
  { name: 'Danger', desc: 'Destructive navigation actions; always pair with confirmation' },
]

const PROPS = [
  { prop: 'label', type: 'string', default: '—', required: 'Yes', desc: 'Link text content' },
  { prop: 'href', type: 'string', default: '—', required: 'Yes', desc: 'Destination URL' },
  { prop: 'variant', type: "'primary' | 'secondary' | 'tertiary' | 'outline' | 'danger'", default: "'primary'", required: 'No', desc: 'Visual style variant' },
  { prop: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", required: 'No', desc: 'Size (height, padding, font, icon)' },
  { prop: 'icon', type: 'string', default: 'undefined', required: 'No', desc: 'Leading icon name without o9con- prefix' },
  { prop: 'target', type: 'string', default: 'undefined', required: 'No', desc: 'Native target attribute; auto-adds rel when _blank' },
  { prop: 'disabled', type: 'boolean', default: 'false', required: 'No', desc: 'Prevents navigation; uses aria-disabled + .is-disabled' },
  { prop: 'fullWidth', type: 'boolean', default: 'false', required: 'No', desc: 'Expands link to fill container width' },
  { prop: 'loading', type: 'boolean', default: 'false', required: 'No', desc: 'Shows skeleton shimmer overlay; prevents interaction' },
  { prop: 'tooltip', type: 'string', default: 'undefined', required: 'No', desc: 'Supplementary hover text via title attribute' },
  { prop: 'onClick', type: '(event) => void', default: 'undefined', required: 'No', desc: 'Click handler; suppressed when disabled or loading' },
]

const SIZES = [
  { size: 'sm', height: '24px', font: '12px', icon: '16px', padding: '4px 8px' },
  { size: 'md', height: '32px', font: '14px', icon: '20px', padding: '6px 12px' },
  { size: 'lg', height: '40px', font: '16px', icon: '24px', padding: '10px 12px' },
]

const ARIA_ATTRS = [
  { attr: 'aria-disabled', when: 'When the link is disabled; keeps element focusable while preventing navigation' },
  { attr: 'aria-busy', when: 'Loading state; set automatically when loading prop is true' },
  { attr: 'aria-describedby', when: 'Links to supplementary description element' },
  { attr: 'aria-current', when: 'Set to "page" when representing the current page; consumer-managed' },
]

export default function ButtonLink() {
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
        { id: 'overview-states', label: 'States' },
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
        { id: 'usage-layout', label: 'Layout & grouping' },
      ]
    }
    if (activeTab === 'Code/APIs') {
      return [
        { id: 'code-props', label: 'Props' },
        { id: 'code-scenarios', label: 'Implementation scenarios' },
        { id: 'code-tokens', label: 'Tokens & mapping' },
        { id: 'code-css', label: 'CSS variables' },
        { id: 'code-size', label: 'Size reference' },
      ]
    }
    if (activeTab === 'Accessibility') {
      return [
        { id: 'a11y-intro', label: 'Overview' },
        { id: 'a11y-keyboard', label: 'Keyboard interaction' },
        { id: 'a11y-focus', label: 'Focus behavior' },
        { id: 'a11y-disabled', label: 'Disabled state' },
        { id: 'a11y-link-vs-button', label: 'Link vs button' },
        { id: 'a11y-external', label: 'External links' },
        { id: 'a11y-loading', label: 'Loading state' },
        { id: 'a11y-supported-aria', label: 'Supported ARIA attributes' },
      ]
    }
    return []
  }, [activeTab])

  const variantPreview = (name) => ({
    ...(name === 'Primary' && { backgroundColor: isLight ? '#010101' : '#fff', color: isLight ? '#fff' : '#000', borderColor: 'transparent' }),
    ...(name === 'Secondary' && { backgroundColor: isLight ? '#F2F2F2' : '#404040', color: isLight ? '#010101' : '#fff', borderColor: 'transparent' }),
    ...(name === 'Tertiary' && { backgroundColor: 'transparent', color: isLight ? '#010101' : '#fff', borderColor: 'transparent' }),
    ...(name === 'Outline' && { backgroundColor: 'transparent', borderColor: isLight ? '#010101' : '#fff', color: isLight ? '#010101' : '#fff' }),
    ...(name === 'Danger' && { backgroundColor: '#ff1e39', color: '#fff', borderColor: 'transparent' }),
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
            Button Link
          </h1>
          <p className="text-lg text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed mb-2">
            {getComponentPageDescription('button-link')}
          </p>
          <p className="text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed">
            An anchor element styled identically to Button — visually appears as a button but navigates like a link. Use this page to understand the component conceptually, when to use it, how to implement it, and how to keep it accessible.
          </p>

          <DocTabs tabs={tabs} activeTab={activeTab} onSelect={setActiveTab} />
        </section>

        {activeTab === 'Overview' && (
          <div className="space-y-12">
            <section id="overview-purpose" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Purpose</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                ButtonLink provides the visual affordance of a button while preserving link semantics. It renders an <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;a&gt;</code> element with the same BEM classes, variants, sizes, and visual states as Button. Users get familiar button styling for high-impact navigation actions like CTA links, nav cards, and prominent page-level navigation.
              </p>
            </section>

            <section id="overview-definition" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Definition & role</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                A <strong className="text-o9ds-light-primary dark:text-white font-medium">button link</strong> is a styled anchor that navigates to a URL. Despite looking like a button, it is semantically a link — screen readers announce it as a link, and only <strong className="text-o9ds-light-primary dark:text-white font-medium">Enter</strong> activates it (not Space). It does not support toggle behavior, form submission, or overlay triggering.
              </p>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                ButtonLink reuses the <code className="px-1 py-0.5" data-o9ds-inline-code>o9ds-btn</code> BEM block class because it is visually identical to Button. No new SCSS is needed — the only DOM difference is <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;a&gt;</code> instead of <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;button&gt;</code>.
              </p>
            </section>

            <section id="overview-anatomy" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Anatomy</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                A button link combines a <strong className="text-o9ds-light-primary dark:text-white font-medium">surface</strong> (the clickable container), an optional <strong className="text-o9ds-light-primary dark:text-white font-medium">leading icon</strong>, and a{' '}
                <strong className="text-o9ds-light-primary dark:text-white font-medium">label</strong>. The anatomy is identical to Button.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">1 — Surface</strong> — anchor container sized by variant and size token; loading state uses a shimmer overlay across the surface.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">2 — Optional leading icon</strong> — reinforces meaning without replacing the label. Rendered via <code className="px-1 py-0.5" data-o9ds-inline-code>o9ds-btn__ico</code>.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">3 — Label</strong> — short navigation-oriented text (e.g. "Go to Page", "View Details"). Rendered via <code className="px-1 py-0.5" data-o9ds-inline-code>o9ds-btn__lbl</code>.
                </li>
              </ul>
            </section>

            <section id="overview-variants" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Variants</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed mb-4">
                Five variants communicate importance. These are identical to Button variants since ButtonLink reuses the same BEM modifiers and SCSS.
              </p>
              <ul className="space-y-3 text-o9ds-light-secondary dark:text-neutral-400 mb-6">
                {VARIANTS.map(({ name, desc }) => (
                  <li key={name}>
                    <strong className="text-o9ds-light-primary dark:text-white">{name}</strong> — {desc}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                {['Primary', 'Secondary', 'Tertiary', 'Outline', 'Danger'].map((name) => (
                  <span
                    key={name}
                    className="px-4 py-2.5 text-sm font-medium border transition-colors inline-flex items-center"
                    style={variantPreview(name)}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </section>

            <section id="overview-states" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">States</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Default</strong> — ready to navigate.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Hover</strong> — confirms interactivity (desktop).</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Focus</strong> — visible focus ring for keyboard users.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Active</strong> — pressed state during click.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Disabled</strong> — not navigable; uses <code className="px-1 py-0.5" data-o9ds-inline-code>.is-disabled</code> + <code className="px-1 py-0.5" data-o9ds-inline-code>aria-disabled</code> since anchors have no native disabled.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Loading</strong> — shimmer overlay; blocks interaction.</li>
              </ul>
            </section>

            <section id="overview-naming" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Naming guidance</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Use destination-oriented labels. Prefer "Go to Dashboard" over "Click here"; prefer "View Details" over a generic "Open". The label should convey the navigation outcome.
              </p>
            </section>

            <section id="overview-dos-donts" className="scroll-mt-24">
              <div className="grid gap-4 sm:grid-cols-2">
                <GrayBgCard title="Do" bullets={['Use for navigation actions that need button-like visual prominence', 'Auto-add rel="noopener noreferrer" when target is _blank', 'Keep the same visual affordance as Button for consistency', 'Preserve link semantics — screen readers should announce as link']} />
                <WhiteBgCard title="Don't" bullets={['Add role="button" — the component is semantically a link', 'Use for actions like submit, toggle, or opening overlays (use Button)', 'Override Space key to activate (only Enter activates links)', 'Use aria-pressed — links do not support toggle behavior']} />
              </div>
            </section>
          </div>
        )}

        {activeTab === 'Usage' && (
          <div className="space-y-12">
            <section id="usage-when" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Navigation actions that need the visual affordance of a button (CTA links, nav cards).</li>
                <li>Prominent page-level links that should stand out from inline text links.</li>
                <li>Call-to-action areas where the destination is a URL, not an in-page action.</li>
                <li>External links styled as buttons (e.g. "Visit Documentation").</li>
              </ul>
            </section>

            <section id="usage-when-not" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When not to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>The action is not navigation — form submit, toggle, or opening an overlay. Use <strong className="text-o9ds-light-primary dark:text-white font-medium">Button</strong>.</li>
                <li>Inline text-style navigation is appropriate. Use <strong className="text-o9ds-light-primary dark:text-white font-medium">Link</strong>.</li>
                <li>Icon-only navigation affordance is needed. Use <strong className="text-o9ds-light-primary dark:text-white font-medium">Icon Button Link</strong>.</li>
              </ul>
            </section>

            <section id="usage-scenarios" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Scenarios</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">CTA navigation</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Primary variant for the main call-to-action link on a landing page or feature card. Draws attention to the most important navigation path.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">External resources</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Use with <code className="px-1 py-0.5" data-o9ds-inline-code>target="_blank"</code> for links to external documentation, help sites, or partner portals. The component auto-adds <code className="px-1 py-0.5" data-o9ds-inline-code>rel="noopener noreferrer"</code>.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Navigation card</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Secondary or outline variant in card footers that navigate to detail pages. Provides a clear, button-like target without implying an in-page action.
                  </p>
                </div>
              </div>
            </section>

            <section id="usage-best-practices" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Best practices</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Use one primary ButtonLink per viewport region — additional navigation should use secondary or outline.</li>
                <li>When disabled, provide nearby context explaining why navigation is unavailable.</li>
                <li>Match the variant and size to the surrounding Button components for visual consistency.</li>
                <li>Do not mix ButtonLink and Button in the same group if one navigates and the other performs an action — use consistent patterns.</li>
              </ul>
            </section>

            <section id="usage-layout" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Layout & grouping</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Spacing</strong> — use system spacing tokens between adjacent button links for clear tap targets.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">With Buttons</strong> — ButtonLink can sit alongside Button in a footer; users should understand which navigates vs which performs an action.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Full width</strong> — use <code className="px-1 py-0.5" data-o9ds-inline-code>fullWidth</code> for primary CTA links in narrow layouts or mobile views.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Icon usage</strong> — add a leading icon to reinforce the navigation direction (e.g. arrow-right) without replacing the label.</li>
              </ul>
            </section>
          </div>
        )}

        {activeTab === 'Code/APIs' && (
          <div className="space-y-12">
            <section id="code-props" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Component API</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
                O9ButtonLink renders an <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;a&gt;</code> element and accepts standard <code className="px-1 py-0.5" data-o9ds-inline-code>HTMLAnchorElement</code> attributes via spread.
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
                  code={`import { O9ButtonLink } from '@o9ds/react';

<O9ButtonLink href="/page" label="Go to Page" variant="primary" />
<O9ButtonLink href="/page" label="Navigate" icon="arrow-right" variant="secondary" />`}
                  label="React"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Basic — HTML</h3>
                <CodeBlock
                  code={`<a class="o9ds-btn o9ds-btn--primary o9ds-btn--md" href="/page">
  <span class="o9ds-btn__lbl">Go to Page</span>
</a>

<!-- With icon -->
<a class="o9ds-btn o9ds-btn--secondary o9ds-btn--md" href="/page">
  <span class="o9ds-btn__ico o9con o9con-arrow-right" aria-hidden="true"></span>
  <span class="o9ds-btn__lbl">Navigate</span>
</a>`}
                  label="HTML"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Disabled</h3>
                <CodeBlock
                  code={`<O9ButtonLink href="/page" label="Unavailable" disabled />

<!-- HTML disabled — no native :disabled on <a> -->
<a class="o9ds-btn o9ds-btn--primary o9ds-btn--md is-disabled" aria-disabled="true" tabindex="0">
  <span class="o9ds-btn__lbl">Unavailable</span>
</a>`}
                  label="Disabled"
                />
                <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                  The <code className="px-1 py-0.5" data-o9ds-inline-code>href</code> is removed and <code className="px-1 py-0.5" data-o9ds-inline-code>aria-disabled="true"</code> is added. The element remains focusable so screen reader users can discover it.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Loading</h3>
                <CodeBlock
                  code={`<O9ButtonLink href="/page" label="Loading..." loading />

<a class="o9ds-btn o9ds-btn--primary o9ds-btn--md loading" href="/page" aria-busy="true">
  <span class="o9ds-btn__lbl">Loading...</span>
</a>`}
                  label="Loading"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">External link (new tab)</h3>
                <CodeBlock
                  code={`<O9ButtonLink href="https://example.com" label="External" target="_blank" />

<a class="o9ds-btn o9ds-btn--primary o9ds-btn--md" href="https://example.com"
   target="_blank" rel="noopener noreferrer">
  <span class="o9ds-btn__lbl">External</span>
</a>`}
                  label="External link"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Full width</h3>
                <CodeBlock
                  code={`<O9ButtonLink href="/continue" label="Continue" variant="primary" fullWidth />`}
                  label="Full width"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Vanilla JS</h3>
                <CodeBlock
                  code={`import { O9ButtonLink } from '@o9ds/js';

const el = document.querySelector('#my-btn-link');
const lnk = O9ButtonLink.initialize(el, {
  variant: 'primary',
  href: '/page',
  label: 'Go to Page',
});

lnk.setLabel('Updated');
lnk.setVariant('secondary');
lnk.setHref('/new-page');
lnk.disabled(true);
lnk.destroy();`}
                  label="Vanilla JS"
                />
              </div>
            </section>

            <section id="code-tokens" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Tokens & mapping</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                ButtonLink uses the same CSS custom properties as Button on <code className="px-1 py-0.5" data-o9ds-inline-code>.o9ds-btn</code>. No new variables are introduced.
              </p>
              <DocTable
                columns={[
                  { key: 'map', label: 'Mapping' },
                  { key: 'detail', label: 'Notes' },
                ]}
                rows={[
                  { map: 'variant → BEM modifier', detail: 'o9ds-btn--primary | secondary | tertiary | outline | danger' },
                  { map: 'size → BEM modifier', detail: 'o9ds-btn--sm | md | lg' },
                  { map: 'loading → class + aria-busy', detail: '.loading + aria-busy="true"' },
                  { map: 'disabled → class + aria', detail: '.is-disabled + aria-disabled="true" (no native :disabled on <a>)' },
                  { map: 'fullWidth → modifier', detail: 'o9ds-btn--full-width' },
                ]}
              />
            </section>

            <section id="code-css" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">CSS variables</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                Shared with Button — override on <code className="px-1 py-0.5" data-o9ds-inline-code>.o9ds-btn</code> or a parent to theme.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { cat: 'Layout', vars: ['--o9ds-btn-height', '--o9ds-btn-padding-block', '--o9ds-btn-padding-inline', '--o9ds-btn-gap'] },
                  { cat: 'Typography', vars: ['--o9ds-btn-font-size', '--o9ds-btn-font-weight', '--o9ds-btn-line-height'] },
                  { cat: 'Icon', vars: ['--o9ds-btn-icon-size'] },
                  { cat: 'Color', vars: ['--o9ds-btn-bg-color', '--o9ds-btn-text-color', '--o9ds-btn-icon-color', '--o9ds-btn-border-color'] },
                  { cat: 'Border', vars: ['--o9ds-btn-border-width'] },
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

            <section id="code-size" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Size reference</h2>
              <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Size</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Height</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Font</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Icon</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Padding</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SIZES.map((row) => (
                      <tr key={row.size} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{row.size}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.height}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.font}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.icon}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.padding}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'Accessibility' && (
          <section id="buttonlink-accessibility" className="space-y-12">
            <div id="a11y-intro" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">ButtonLink accessibility</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                ButtonLink renders a native <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;a&gt;</code> element. Despite looking like a button, it has link semantics. Screen readers announce it as a link. Do not add <code className="px-1 py-0.5" data-o9ds-inline-code>role="button"</code>.
              </p>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                Screen readers typically announce: <code className="px-1 py-0.5" data-o9ds-inline-code>[Accessible name], link</code>
              </p>
            </div>

            <div id="a11y-keyboard" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Keyboard interaction</h3>
              <p className="text-sm font-medium text-o9ds-light-primary dark:text-white">Required behavior</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>The link must be reachable by keyboard via Tab.</li>
                <li>Only <strong className="text-o9ds-light-primary dark:text-white font-medium">Enter</strong> activates the link — this is native browser behavior.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Space</strong> does NOT activate links. Do not add a Space key handler.</li>
              </ul>
              <DocTable
                columns={[
                  { key: 'key', label: 'Keys', mono: true },
                  { key: 'behavior', label: 'Purpose' },
                ]}
                rows={[
                  { key: 'Enter', behavior: 'Activates the link and navigates to the href destination.' },
                  { key: 'Tab', behavior: 'Moves focus to the next focusable element.' },
                  { key: 'Shift+Tab', behavior: 'Moves focus to the previous focusable element.' },
                ]}
              />
            </div>

            <div id="a11y-focus" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Focus behavior</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <strong className="text-o9ds-light-primary dark:text-white font-medium">Focus visible:</strong> Identical to Button — <code className="px-1 py-0.5" data-o9ds-inline-code>outline: 1px solid var(--o9ds-color-b-theme-focus)</code> with offset 2px. When <code className="px-1 py-0.5" data-o9ds-inline-code>.focus-border</code> is applied, offset is -1px.
              </p>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed pt-2">
                <strong className="text-o9ds-light-primary dark:text-white font-medium">Recommendation:</strong> Use <code className="px-1 py-0.5" data-o9ds-inline-code>:focus-visible</code> so mouse clicks do not always show a focus ring.
              </p>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <strong className="text-o9ds-light-primary dark:text-white font-normal">WCAG:</strong> 2.4.7 Focus Visible · 2.4.13 Focus Appearance (WCAG 2.2)
              </p>
            </div>

            <div id="a11y-disabled" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Disabled state</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Since <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;a&gt;</code> has no native <code className="px-1 py-0.5" data-o9ds-inline-code>disabled</code> attribute, the disabled pattern uses:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li><code className="px-1 py-0.5" data-o9ds-inline-code>.is-disabled</code> class on the element.</li>
                <li><code className="px-1 py-0.5" data-o9ds-inline-code>aria-disabled="true"</code> for assistive technology.</li>
                <li><code className="px-1 py-0.5" data-o9ds-inline-code>href</code> is removed to prevent navigation.</li>
                <li>Element remains focusable so screen reader users can discover it.</li>
                <li><code className="px-1 py-0.5" data-o9ds-inline-code>pointer-events: none</code> via CSS.</li>
              </ul>
              <CodeBlock code={`<a class="o9ds-btn o9ds-btn--primary o9ds-btn--md is-disabled" aria-disabled="true" tabindex="0">
  <span class="o9ds-btn__lbl">Unavailable</span>
</a>`} label="Disabled link" />
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <strong className="text-o9ds-light-primary dark:text-white font-medium">Screen reader:</strong> "Unavailable, dimmed, link"
              </p>
            </div>

            <div id="a11y-link-vs-button" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Link vs button semantics</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Although ButtonLink looks identical to Button, it is a link. Key differences from Button:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>No <code className="px-1 py-0.5" data-o9ds-inline-code>role="button"</code> — role is link (implicit on <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;a&gt;</code>).</li>
                <li>No <code className="px-1 py-0.5" data-o9ds-inline-code>aria-pressed</code> — links do not support toggle behavior.</li>
                <li>No <code className="px-1 py-0.5" data-o9ds-inline-code>aria-expanded</code> or <code className="px-1 py-0.5" data-o9ds-inline-code>aria-haspopup</code> — links should not open overlays (use Button).</li>
                <li>Space key does not activate — only Enter activates links in browsers.</li>
              </ul>
            </div>

            <div id="a11y-external" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">External links</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                When <code className="px-1 py-0.5" data-o9ds-inline-code>target="_blank"</code> is set, the component automatically adds <code className="px-1 py-0.5" data-o9ds-inline-code>rel="noopener noreferrer"</code> for security. Consider adding a visual indicator or <code className="px-1 py-0.5" data-o9ds-inline-code>aria-describedby</code> to inform users the link opens in a new window.
              </p>
            </div>

            <div id="a11y-loading" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Loading state</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                When loading, the component sets <code className="px-1 py-0.5" data-o9ds-inline-code>aria-busy="true"</code> and shows a shimmer overlay. Interaction is blocked.
              </p>
              <CodeBlock code={`<a class="o9ds-btn o9ds-btn--primary o9ds-btn--md loading" href="/page" aria-busy="true">
  <span class="o9ds-btn__lbl">Loading...</span>
</a>`} label="Loading link" />
            </div>

            <div id="a11y-supported-aria" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Supported ARIA attributes</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 mb-4">
                Do not add ARIA that duplicates native link semantics.
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
