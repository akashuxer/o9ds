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
  { name: 'Primary', desc: 'Filled theme-color background with inverse icon' },
  { name: 'Secondary', desc: 'Subtle layer background with secondary icon' },
  { name: 'Tertiary', desc: 'Transparent background with secondary icon' },
  { name: 'Outline', desc: 'Transparent background with theme-color border and icon' },
  { name: 'Danger', desc: 'Negative-color background with white icon' },
]

const PROPS = [
  { prop: 'icon', type: 'string', default: '—', required: 'Yes', desc: 'Icon name without o9con- prefix' },
  { prop: 'href', type: 'string', default: '—', required: 'Yes', desc: 'Destination URL' },
  { prop: 'tooltip', type: 'string', default: '—', required: 'Yes', desc: 'Accessible label and hover tooltip; maps to aria-label and title' },
  { prop: 'variant', type: "'primary' | 'secondary' | 'tertiary' | 'outline' | 'danger'", default: "'primary'", required: 'No', desc: 'Visual style variant' },
  { prop: 'size', type: "'xs' | 'sm' | 'md' | 'lg'", default: "'md'", required: 'No', desc: 'Square dimensions (16/24/32/40px)' },
  { prop: 'target', type: 'string', default: 'undefined', required: 'No', desc: 'Native target attribute; auto-adds rel when _blank' },
  { prop: 'disabled', type: 'boolean', default: 'false', required: 'No', desc: 'Prevents navigation' },
  { prop: 'loading', type: 'boolean', default: 'false', required: 'No', desc: 'Shows skeleton shimmer overlay' },
  { prop: 'onClick', type: '(event) => void', default: 'undefined', required: 'No', desc: 'Click handler; suppressed when disabled or loading' },
]

const SIZES = [
  { size: 'xs', dimensions: '16×16', padding: '0', icon: '16px' },
  { size: 'sm', dimensions: '24×24', padding: '4px', icon: '16px' },
  { size: 'md', dimensions: '32×32', padding: '6px', icon: '20px' },
  { size: 'lg', dimensions: '40×40', padding: '8px', icon: '24px' },
]

const ARIA_ATTRS = [
  { attr: 'aria-label', when: 'Required — set from tooltip prop; provides the accessible name since there is no visible text' },
  { attr: 'aria-disabled', when: 'Set to "true" when disabled; element remains focusable' },
  { attr: 'aria-busy', when: 'Set to "true" during loading state' },
]

export default function IconButtonLink() {
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
        { id: 'overview-dos-donts', label: 'Dos & don\u2019ts' },
      ]
    }
    if (activeTab === 'Usage') {
      return [
        { id: 'usage-when', label: 'When to use' },
        { id: 'usage-when-not', label: 'When not to use' },
        { id: 'usage-scenarios', label: 'Scenarios' },
        { id: 'usage-best-practices', label: 'Best practices' },
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
        { id: 'a11y-tooltip', label: 'Tooltip requirement' },
        { id: 'a11y-link-semantics', label: 'Link semantics' },
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
            Icon Button Link
          </h1>
          <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed mb-2">
            {getComponentPageDescription('icon-button-link')}
          </p>
          <p className="text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed">
            An anchor element styled identically to Icon Button — visually appears as a square icon-only button but navigates like a link. Uses a single icon with a required tooltip for accessibility.
          </p>

          <DocTabs tabs={tabs} activeTab={activeTab} onSelect={setActiveTab} />
        </section>

        {activeTab === 'Overview' && (
          <div className="space-y-12">
            <section id="overview-purpose" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Purpose</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                IconButtonLink provides a compact, icon-only navigation affordance that looks like an icon button but navigates like a link. It renders an <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;a&gt;</code> element with the same BEM classes, variants, sizes, and visual states as Icon Button. Useful for external link shortcuts, navigation icons in toolbars, and compact navigation targets.
              </p>
            </section>

            <section id="overview-definition" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Definition & role</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                An <strong className="text-o9ds-light-primary dark:text-white font-medium">icon button link</strong> is a square, icon-only anchor element. It has no visible text label — the <code className="px-1 py-0.5" data-o9ds-inline-code>tooltip</code> prop provides both the accessible name (via <code className="px-1 py-0.5" data-o9ds-inline-code>aria-label</code>) and hover tooltip. Despite looking like an icon button, it is semantically a link.
              </p>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                IconButtonLink reuses the <code className="px-1 py-0.5" data-o9ds-inline-code>o9ds-icon-btn</code> BEM block class. No new SCSS is needed — the only DOM difference is <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;a&gt;</code> instead of <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;button&gt;</code>.
              </p>
            </section>

            <section id="overview-anatomy" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Anatomy</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                An icon button link has two parts:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">1 — Surface</strong> — square anchor container sized by the size token. Loading state uses a shimmer overlay.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">2 — Icon</strong> — always present. Rendered via <code className="px-1 py-0.5" data-o9ds-inline-code>o9ds-btn__ico</code> with the o9con icon font. Set to <code className="px-1 py-0.5" data-o9ds-inline-code>aria-hidden="true"</code> since the tooltip provides the accessible name.
                </li>
              </ul>
            </section>

            <section id="overview-variants" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Variants</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed mb-4">
                Five variants identical to Icon Button, controlling background and icon color.
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
                    className="w-8 h-8 text-sm font-medium border transition-colors inline-flex items-center justify-center"
                    style={variantPreview(name)}
                  >
                    &#x2197;
                  </span>
                ))}
              </div>
            </section>

            <section id="overview-states" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">States</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Default</strong> — ready to navigate.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Hover</strong> — confirms interactivity.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Focus</strong> — visible focus ring for keyboard users.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Active</strong> — pressed state during click.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Disabled</strong> — uses <code className="px-1 py-0.5" data-o9ds-inline-code>.is-disabled</code> + <code className="px-1 py-0.5" data-o9ds-inline-code>aria-disabled</code>.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Loading</strong> — shimmer overlay; blocks interaction.</li>
              </ul>
            </section>

            <section id="overview-dos-donts" className="scroll-mt-24">
              <div className="grid gap-4 sm:grid-cols-2">
                <GrayBgCard title="Do" bullets={['Always provide a tooltip — it is the only accessible name', 'Use for compact icon-only navigation affordances', 'Auto-add rel="noopener noreferrer" for target="_blank"', 'Match size to surrounding icon buttons for alignment']} />
                <WhiteBgCard title="Don't" bullets={['Add role="button" — the semantic role is link', 'Use for actions (toggle, overlay) — use Icon Button instead', 'Override Space key behavior — only Enter activates links', 'Use without a tooltip — the icon alone is not accessible']} />
              </div>
            </section>
          </div>
        )}

        {activeTab === 'Usage' && (
          <div className="space-y-12">
            <section id="usage-when" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Compact icon-only navigation affordances (external link shortcuts, navigation icons).</li>
                <li>Toolbar navigation targets where space is limited and the icon is universally understood.</li>
                <li>Quick navigation to related resources (e.g. an external-link icon next to a title).</li>
              </ul>
            </section>

            <section id="usage-when-not" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When not to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>The action is not navigation (toggle, open overlay). Use <strong className="text-o9ds-light-primary dark:text-white font-medium">Icon Button</strong>.</li>
                <li>Visible label text is needed alongside the button styling. Use <strong className="text-o9ds-light-primary dark:text-white font-medium">Button Link</strong>.</li>
                <li>Inline text-style navigation. Use <strong className="text-o9ds-light-primary dark:text-white font-medium">Link</strong>.</li>
              </ul>
            </section>

            <section id="usage-scenarios" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Scenarios</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">External link shortcut</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    An external-link icon next to a heading or title that opens a related resource in a new tab.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Toolbar navigation</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Navigation icons in a toolbar (e.g. home, settings) where each icon navigates to a different view. Place alongside Icon Buttons for a consistent toolbar appearance.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Compact card actions</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Small navigation targets in card headers or footers where full-text ButtonLink would be too large.
                  </p>
                </div>
              </div>
            </section>

            <section id="usage-best-practices" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Best practices</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Always provide a meaningful tooltip — it serves as both the visible tooltip and the <code className="px-1 py-0.5" data-o9ds-inline-code>aria-label</code>.</li>
                <li>Use universally understood icons (home, external-link, settings) to minimize confusion.</li>
                <li>Match size to surrounding icon buttons so the toolbar reads as a cohesive group.</li>
                <li>When disabled, explain nearby why navigation is unavailable.</li>
              </ul>
            </section>
          </div>
        )}

        {activeTab === 'Code/APIs' && (
          <div className="space-y-12">
            <section id="code-props" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Component API</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
                O9IconButtonLink renders an <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;a&gt;</code> element. The <code className="px-1 py-0.5" data-o9ds-inline-code>tooltip</code> prop is required because there is no visible text label.
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
                  code={`import { O9IconButtonLink } from '@o9ds/react';

<O9IconButtonLink href="/page" icon="external-link" tooltip="Open" />
<O9IconButtonLink href="/page" icon="arrow-right" tooltip="Navigate" variant="secondary" />`}
                  label="React"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Basic — HTML</h3>
                <CodeBlock
                  code={`<a class="o9ds-icon-btn o9ds-btn--primary o9ds-btn--md" href="/page"
   aria-label="Open" title="Open">
  <span class="o9ds-btn__ico o9con o9con-external-link" aria-hidden="true"></span>
</a>`}
                  label="HTML"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Disabled</h3>
                <CodeBlock
                  code={`<O9IconButtonLink href="/page" icon="external-link" tooltip="Disabled" disabled />

<a class="o9ds-icon-btn o9ds-btn--primary o9ds-btn--md is-disabled"
   aria-label="Disabled" aria-disabled="true" tabindex="0" title="Disabled">
  <span class="o9ds-btn__ico o9con o9con-external-link" aria-hidden="true"></span>
</a>`}
                  label="Disabled"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">External link (new tab)</h3>
                <CodeBlock
                  code={`<O9IconButtonLink
  href="https://example.com"
  icon="external-link"
  tooltip="External"
  target="_blank"
/>`}
                  label="External"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Vanilla JS</h3>
                <CodeBlock
                  code={`import { O9IconButtonLink } from '@o9ds/js';

const el = document.querySelector('#my-icon-link');
const lnk = O9IconButtonLink.initialize(el, {
  variant: 'secondary',
  icon: 'external-link',
  href: '/page',
  tooltip: 'Open link',
});

lnk.setIcon('arrow-right');
lnk.setTooltip('Navigate');
lnk.disabled(true);
lnk.destroy();`}
                  label="Vanilla JS"
                />
              </div>
            </section>

            <section id="code-tokens" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Tokens & mapping</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                IconButtonLink uses the same CSS variables as Icon Button (<code className="px-1 py-0.5" data-o9ds-inline-code>--o9ds-btn-*</code> on <code className="px-1 py-0.5" data-o9ds-inline-code>.o9ds-icon-btn</code>). No new variables are introduced.
              </p>
              <DocTable
                columns={[
                  { key: 'map', label: 'Mapping' },
                  { key: 'detail', label: 'Notes' },
                ]}
                rows={[
                  { map: 'variant → BEM modifier', detail: 'o9ds-btn--primary | secondary | tertiary | outline | danger' },
                  { map: 'size → BEM modifier', detail: 'o9ds-btn--xs | sm | md | lg' },
                  { map: 'loading → class + aria-busy', detail: '.loading + aria-busy="true"' },
                  { map: 'disabled → class + aria', detail: '.is-disabled + aria-disabled="true"' },
                ]}
              />
            </section>

            <section id="code-css" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">CSS variables</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                Shared with Icon Button — override on <code className="px-1 py-0.5" data-o9ds-inline-code>.o9ds-icon-btn</code> or a parent.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { cat: 'Layout', vars: ['--o9ds-btn-height', '--o9ds-btn-padding-block', '--o9ds-btn-padding-inline'] },
                  { cat: 'Icon', vars: ['--o9ds-btn-icon-size'] },
                  { cat: 'Color', vars: ['--o9ds-btn-bg-color', '--o9ds-btn-icon-color', '--o9ds-btn-border-color'] },
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
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Dimensions</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Padding</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Icon</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SIZES.map((row) => (
                      <tr key={row.size} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{row.size}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.dimensions}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.padding}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.icon}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'Accessibility' && (
          <section id="iconbuttonlink-accessibility" className="space-y-12">
            <div id="a11y-intro" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">IconButtonLink accessibility</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                IconButtonLink renders a native <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;a&gt;</code> element. There is no visible text label, so the <code className="px-1 py-0.5" data-o9ds-inline-code>tooltip</code> prop is required — it sets <code className="px-1 py-0.5" data-o9ds-inline-code>aria-label</code> for screen readers and <code className="px-1 py-0.5" data-o9ds-inline-code>title</code> for hover display.
              </p>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                Screen readers typically announce: <code className="px-1 py-0.5" data-o9ds-inline-code>[tooltip text], link</code>
              </p>
            </div>

            <div id="a11y-keyboard" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Keyboard interaction</h3>
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
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <strong className="text-o9ds-light-primary dark:text-white font-medium">Space</strong> does NOT activate links. This is native browser behavior and should not be overridden.
              </p>
            </div>

            <div id="a11y-focus" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Focus behavior</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <strong className="text-o9ds-light-primary dark:text-white font-medium">Focus visible:</strong> Identical to Icon Button — <code className="px-1 py-0.5" data-o9ds-inline-code>outline: 1px solid var(--o9ds-color-b-theme-focus)</code> with offset 2px.
              </p>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <strong className="text-o9ds-light-primary dark:text-white font-normal">WCAG:</strong> 2.4.7 Focus Visible · 2.4.13 Focus Appearance (WCAG 2.2)
              </p>
            </div>

            <div id="a11y-disabled" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Disabled state</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Same pattern as ButtonLink: <code className="px-1 py-0.5" data-o9ds-inline-code>.is-disabled</code> class, <code className="px-1 py-0.5" data-o9ds-inline-code>aria-disabled="true"</code>, href removed, element remains focusable.
              </p>
              <CodeBlock code={`<a class="o9ds-icon-btn o9ds-btn--primary o9ds-btn--md is-disabled"
   aria-label="Disabled" aria-disabled="true" tabindex="0" title="Disabled">
  <span class="o9ds-btn__ico o9con o9con-external-link" aria-hidden="true"></span>
</a>`} label="Disabled icon link" />
            </div>

            <div id="a11y-tooltip" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Tooltip requirement</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The <code className="px-1 py-0.5" data-o9ds-inline-code>tooltip</code> prop is required because there is no visible text. It serves dual purposes:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>Sets <code className="px-1 py-0.5" data-o9ds-inline-code>aria-label</code> for screen reader users.</li>
                <li>Displays as a tooltip on hover and keyboard focus for sighted users.</li>
              </ul>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <strong className="text-o9ds-light-primary dark:text-white font-normal">WCAG:</strong> 1.4.13 Content on Hover or Focus — tooltip must be available on both hover and keyboard focus.
              </p>
            </div>

            <div id="a11y-link-semantics" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Link semantics</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>No <code className="px-1 py-0.5" data-o9ds-inline-code>role="button"</code> — the semantic role is link.</li>
                <li>No <code className="px-1 py-0.5" data-o9ds-inline-code>aria-pressed</code> — links do not support toggle behavior.</li>
                <li>No <code className="px-1 py-0.5" data-o9ds-inline-code>aria-expanded</code> or <code className="px-1 py-0.5" data-o9ds-inline-code>aria-haspopup</code>.</li>
              </ul>
            </div>

            <div id="a11y-supported-aria" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Supported ARIA attributes</h3>
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
