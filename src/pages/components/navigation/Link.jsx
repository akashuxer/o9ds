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
  { prop: 'label', type: 'string', default: '—', required: 'Yes', desc: 'Link text content' },
  { prop: 'href', type: 'string', default: '—', required: 'Yes', desc: 'Destination URL' },
  { prop: 'variant', type: "'primary' | 'secondary'", default: "'primary'", required: 'No', desc: 'Visual style variant' },
  { prop: 'size', type: "'sm' | 'lg'", default: "'lg'", required: 'No', desc: 'Font size (sm=12px, lg=14px); icon stays 16px' },
  { prop: 'icon', type: 'string', default: 'undefined', required: 'No', desc: 'Leading icon name without o9con- prefix' },
  { prop: 'external', type: 'boolean', default: 'false', required: 'No', desc: 'Show trailing external icon and auto-set target="_blank"' },
  { prop: 'target', type: 'string', default: 'undefined', required: 'No', desc: 'Native target attribute' },
  { prop: 'disabled', type: 'boolean', default: 'false', required: 'No', desc: 'Prevent navigation; removes href, adds aria-disabled' },
  { prop: 'visited', type: 'boolean', default: 'false', required: 'No', desc: 'Apply visited color (utility-purple)' },
  { prop: 'loading', type: 'boolean', default: 'false', required: 'No', desc: 'Show skeleton shimmer overlay' },
  { prop: 'onClick', type: '(event) => void', default: 'undefined', required: 'No', desc: 'Click handler; suppressed when disabled or loading' },
]

const SIZES = [
  { size: 'sm', font: '12px', icon: '16px' },
  { size: 'lg', font: '14px', icon: '16px' },
]

const ARIA_ATTRS = [
  { attr: 'aria-disabled', when: 'Set to "true" when disabled; element remains focusable' },
  { attr: 'aria-busy', when: 'Automatically set to "true" during loading state' },
  { attr: 'aria-current', when: 'Set to "page" when representing the current page; consumer-managed' },
  { attr: 'aria-describedby', when: 'Optional reference to a supplementary description element' },
]

export default function Link() {
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
        { id: 'usage-layout', label: 'Layout & placement' },
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
        { id: 'a11y-external', label: 'External links' },
        { id: 'a11y-loading', label: 'Loading state' },
        { id: 'a11y-notes', label: 'Accessibility notes' },
        { id: 'a11y-supported-aria', label: 'Supported ARIA attributes' },
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
            Link
          </h1>
          <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed mb-2">
            {getComponentPageDescription('link')}
          </p>
          <p className="text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed">
            Inline navigational anchor for linking to internal pages, external URLs, or downloadable resources. Supports optional leading icon, trailing external-link indicator, two visual variants, and two sizes.
          </p>

          <DocTabs tabs={tabs} activeTab={activeTab} onSelect={setActiveTab} />
        </section>

        {activeTab === 'Overview' && (
          <div className="space-y-12">
            <section id="overview-purpose" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Purpose</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The Link component is the standard inline navigation control for text-level references. It renders a native <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;a&gt;</code> element with underline decoration, providing a clear, consistent way to navigate between pages, sections, or external resources within flowing content.
              </p>
            </section>

            <section id="overview-definition" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Definition & role</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                A <strong className="text-o9ds-light-primary dark:text-white font-medium">link</strong> is an inline navigational anchor that flows with text content. Unlike ButtonLink (which has a filled background and padding), Link has no background, no border, and no padding — it is an <code className="px-1 py-0.5" data-o9ds-inline-code>inline-flex</code> element with underline decoration.
              </p>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Link uses the <code className="px-1 py-0.5" data-o9ds-inline-code>o9ds-lnk</code> BEM block with its own elements (<code className="px-1 py-0.5" data-o9ds-inline-code>__ico</code>, <code className="px-1 py-0.5" data-o9ds-inline-code>__lbl</code>, <code className="px-1 py-0.5" data-o9ds-inline-code>__ext</code>) and two variants (primary, secondary).
              </p>
            </section>

            <section id="overview-anatomy" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Anatomy</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                A link can have up to three parts:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">1 — Optional leading icon</strong> — reinforces meaning (e.g. settings gear). Rendered via <code className="px-1 py-0.5" data-o9ds-inline-code>o9ds-lnk__ico</code>. Always 16px regardless of size.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">2 — Label</strong> — the link text with underline decoration. Rendered via <code className="px-1 py-0.5" data-o9ds-inline-code>o9ds-lnk__lbl</code>.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">3 — Optional trailing external icon</strong> — indicates the link opens in a new tab. Rendered via <code className="px-1 py-0.5" data-o9ds-inline-code>o9ds-lnk__ext</code> with the <code className="px-1 py-0.5" data-o9ds-inline-code>o9con-external-link</code> icon.
                </li>
              </ul>
            </section>

            <section id="overview-variants" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Variants</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed mb-4">
                Two variants control text and icon color:
              </p>
              <ul className="space-y-3 text-o9ds-light-secondary dark:text-neutral-400 mb-6">
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white">Primary</strong> — high-contrast blue (<code className="px-1 py-0.5" data-o9ds-inline-code>info-dark</code>) for primary navigation, in-content references, and call-to-action text.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white">Secondary</strong> — subdued neutral (<code className="px-1 py-0.5" data-o9ds-inline-code>secondary</code>) for contextual or supplementary navigation within dense content areas.
                </li>
              </ul>
              <div className="flex flex-wrap gap-6 items-center">
                <span className="text-sm font-medium underline" style={{ color: '#002ed2' }}>Primary link</span>
                <span className="text-sm font-medium underline" style={{ color: '#303030' }}>Secondary link</span>
              </div>
            </section>

            <section id="overview-states" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">States</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Default</strong> — underlined text in variant color.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Hover</strong> — info-light blue, underline removed.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Focus</strong> — info-light blue with focus ring outline.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Active</strong> — info-light blue with medium font weight, no underline.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Visited</strong> — utility-purple text, underlined.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Disabled</strong> — disabled text color, underlined, cursor not-allowed.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Loading</strong> — shimmer overlay; blocks interaction.</li>
              </ul>
            </section>

            <section id="overview-naming" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Naming guidance</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Use descriptive, meaningful link text. Avoid generic labels like "click here" or "read more" — the link text should make sense out of context (e.g. in a screen reader's list of links). Prefer "View documentation" over "Click here to view the documentation".
              </p>
            </section>

            <section id="overview-dos-donts" className="scroll-mt-24">
              <div className="grid gap-4 sm:grid-cols-2">
                <GrayBgCard title="Do" bullets={['Use descriptive text that makes sense out of context', 'Add trailing external icon for links opening in new tabs', 'Use primary variant for main navigation references', 'Use secondary variant for supplementary contextual links']} />
                <WhiteBgCard title="Don't" bullets={['Use vague link text like "click here" or "read more"', 'Style links as buttons when the action is navigation (use ButtonLink)', 'Remove the underline in default state — it is essential for discoverability', 'Use links for actions like submit or toggle (use Button)']} />
              </div>
            </section>
          </div>
        )}

        {activeTab === 'Usage' && (
          <div className="space-y-12">
            <section id="usage-when" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Inline text-level references within paragraphs or descriptions.</li>
                <li>Navigation to internal pages, external URLs, or downloadable resources.</li>
                <li>Contextual navigation in tables, cards, or list items.</li>
                <li>Breadcrumb-style or auxiliary navigation where button styling is too heavy.</li>
              </ul>
            </section>

            <section id="usage-when-not" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When not to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>The navigation action needs the visual affordance of a button (filled background, padding). Use <strong className="text-o9ds-light-primary dark:text-white font-medium">ButtonLink</strong>.</li>
                <li>The control performs an in-page action (submit, toggle, open overlay). Use <strong className="text-o9ds-light-primary dark:text-white font-medium">Button</strong>.</li>
                <li>Icon-only navigation affordance. Use <strong className="text-o9ds-light-primary dark:text-white font-medium">Icon Button Link</strong>.</li>
              </ul>
            </section>

            <section id="usage-scenarios" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Scenarios</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">In-content reference</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Primary variant within paragraph text, linking to a related page or section. The underline makes the link discoverable within flowing content.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">External resource</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Use the <code className="px-1 py-0.5" data-o9ds-inline-code>external</code> prop to show a trailing external-link icon and auto-set <code className="px-1 py-0.5" data-o9ds-inline-code>target="_blank"</code>. The icon provides a clear visual cue that the link opens in a new tab.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Supplementary navigation</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Secondary variant for less prominent contextual links (e.g. "View all" in a card header, metadata links in a list).
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">With leading icon</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Add a leading icon (e.g. settings, document) to reinforce the link destination without replacing the label text.
                  </p>
                </div>
              </div>
            </section>

            <section id="usage-best-practices" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Best practices</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Keep link text concise and descriptive — it should convey the destination.</li>
                <li>Use the <code className="px-1 py-0.5" data-o9ds-inline-code>visited</code> prop when browser <code className="px-1 py-0.5" data-o9ds-inline-code>:visited</code> is insufficient due to privacy constraints.</li>
                <li>When disabled, provide nearby context explaining why navigation is unavailable.</li>
                <li>Avoid making entire sentences or paragraphs a link — keep click targets precise.</li>
              </ul>
            </section>

            <section id="usage-layout" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Layout & placement</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Inline</strong> — links flow with text content. They use <code className="px-1 py-0.5" data-o9ds-inline-code>display: inline-flex</code> for icon alignment.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">No padding/background</strong> — unlike ButtonLink, Link has no visible container. It relies on text color and underline for affordance.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Size</strong> — use <code className="px-1 py-0.5" data-o9ds-inline-code>sm</code> (12px) for dense content areas and <code className="px-1 py-0.5" data-o9ds-inline-code>lg</code> (14px, default) for standard body content.</li>
              </ul>
            </section>
          </div>
        )}

        {activeTab === 'Code/APIs' && (
          <div className="space-y-12">
            <section id="code-props" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Component API</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
                O9Link renders an <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;a&gt;</code> element and accepts all standard <code className="px-1 py-0.5" data-o9ds-inline-code>HTMLAnchorElement</code> attributes via spread.
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
                  code={`import { O9Link } from '@o9ds/react';

<O9Link href="/page" label="Learn more" />
<O9Link href="/page" label="Settings" icon="settings" />
<O9Link href="/page" label="Details" variant="secondary" />`}
                  label="React"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Basic — HTML</h3>
                <CodeBlock
                  code={`<!-- Primary (lg) -->
<a class="o9ds-lnk o9ds-lnk--primary o9ds-lnk--lg" href="/page">
  <span class="o9ds-lnk__lbl">Learn more</span>
</a>

<!-- With leading icon -->
<a class="o9ds-lnk o9ds-lnk--primary o9ds-lnk--lg" href="/page">
  <span class="o9ds-lnk__ico o9con o9con-settings" aria-hidden="true"></span>
  <span class="o9ds-lnk__lbl">Settings</span>
</a>`}
                  label="HTML"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">External link</h3>
                <CodeBlock
                  code={`<O9Link href="https://example.com" label="Visit site" external />

<a class="o9ds-lnk o9ds-lnk--primary o9ds-lnk--lg" href="https://example.com"
   target="_blank" rel="noopener noreferrer">
  <span class="o9ds-lnk__lbl">Visit site</span>
  <span class="o9ds-lnk__ext o9con o9con-external-link" aria-hidden="true"></span>
</a>`}
                  label="External"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Disabled</h3>
                <CodeBlock
                  code={`<O9Link href="/page" label="Unavailable" disabled />

<a class="o9ds-lnk o9ds-lnk--primary o9ds-lnk--lg is-disabled"
   aria-disabled="true" tabindex="0">
  <span class="o9ds-lnk__lbl">Unavailable</span>
</a>`}
                  label="Disabled"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Loading</h3>
                <CodeBlock
                  code={`<O9Link href="/page" label="Loading..." loading />

<a class="o9ds-lnk o9ds-lnk--primary o9ds-lnk--lg loading"
   href="/page" aria-busy="true">
  <span class="o9ds-lnk__lbl">Loading...</span>
</a>`}
                  label="Loading"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Vanilla JS</h3>
                <CodeBlock
                  code={`import { O9Link } from '@o9ds/js';

const el = document.querySelector('#my-link');
const lnk = O9Link.initialize(el, {
  variant: 'primary',
  href: '/page',
  label: 'Learn more',
  icon: 'arrow-right',
});

lnk.setLabel('Updated');
lnk.setIcon('check');
lnk.setIcon(null);
lnk.setExternal(true);
lnk.disabled(true);
lnk.destroy();`}
                  label="Vanilla JS"
                />
              </div>
            </section>

            <section id="code-tokens" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Tokens & mapping</h2>
              <DocTable
                columns={[
                  { key: 'map', label: 'Mapping' },
                  { key: 'detail', label: 'Notes' },
                ]}
                rows={[
                  { map: 'variant → BEM modifier', detail: 'o9ds-lnk--primary | secondary' },
                  { map: 'size → BEM modifier', detail: 'o9ds-lnk--sm | lg' },
                  { map: 'loading → class + aria-busy', detail: '.loading + aria-busy="true"' },
                  { map: 'disabled → class + aria', detail: '.is-disabled + aria-disabled="true"' },
                  { map: 'visited → state class', detail: '.visited (utility-purple color)' },
                  { map: 'active → state class', detail: '.active (info-light, medium weight)' },
                ]}
              />
            </section>

            <section id="code-css" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">CSS variables</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                Override on <code className="px-1 py-0.5" data-o9ds-inline-code>.o9ds-lnk</code> or a parent to theme the link.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { cat: 'Layout', vars: ['--o9ds-lnk-gap'] },
                  { cat: 'Typography', vars: ['--o9ds-lnk-font-size', '--o9ds-lnk-font-weight', '--o9ds-lnk-line-height'] },
                  { cat: 'Icon', vars: ['--o9ds-lnk-icon-size'] },
                  { cat: 'Color', vars: ['--o9ds-lnk-text-color', '--o9ds-lnk-icon-color'] },
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
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                Icon size remains 16px at all sizes — only the font size changes.
              </p>
              <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Size</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Font</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Icon</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SIZES.map((row) => (
                      <tr key={row.size} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{row.size}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.font}</td>
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
          <section id="link-accessibility" className="space-y-12">
            <div id="a11y-intro" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Link accessibility</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Link renders a native <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;a&gt;</code> element with implicit link role. The accessible name comes from the label text. Icons are decorative (<code className="px-1 py-0.5" data-o9ds-inline-code>aria-hidden="true"</code>).
              </p>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                Screen readers typically announce: <code className="px-1 py-0.5" data-o9ds-inline-code>[label text], link</code>
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
                Space does NOT activate links — this is native browser behavior.
              </p>
            </div>

            <div id="a11y-focus" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Focus behavior</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <strong className="text-o9ds-light-primary dark:text-white font-medium">Focus visible:</strong> <code className="px-1 py-0.5" data-o9ds-inline-code>outline: 1px solid var(--o9ds-color-b-theme-focus)</code> around the full link content area (icon + label + external icon group).
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>Disabled links remain focusable (<code className="px-1 py-0.5" data-o9ds-inline-code>aria-disabled</code> pattern) so screen reader users can discover them.</li>
                <li>Hover styles are scoped to <code className="px-1 py-0.5" data-o9ds-inline-code>.no-touch</code> to prevent sticky hover on touch devices.</li>
              </ul>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <strong className="text-o9ds-light-primary dark:text-white font-normal">WCAG:</strong> 2.4.7 Focus Visible · 2.4.13 Focus Appearance (WCAG 2.2)
              </p>
            </div>

            <div id="a11y-disabled" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Disabled state</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Since <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;a&gt;</code> has no native disabled, the pattern uses <code className="px-1 py-0.5" data-o9ds-inline-code>.is-disabled</code> class + <code className="px-1 py-0.5" data-o9ds-inline-code>aria-disabled="true"</code> + href removed + <code className="px-1 py-0.5" data-o9ds-inline-code>tabindex="0"</code> to remain focusable.
              </p>
              <CodeBlock code={`<a class="o9ds-lnk o9ds-lnk--primary o9ds-lnk--lg is-disabled"
   aria-disabled="true" tabindex="0">
  <span class="o9ds-lnk__lbl">Unavailable</span>
</a>`} label="Disabled link" />
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <strong className="text-o9ds-light-primary dark:text-white font-medium">Screen reader:</strong> "Unavailable, dimmed, link"
              </p>
            </div>

            <div id="a11y-external" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">External links</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                When <code className="px-1 py-0.5" data-o9ds-inline-code>external</code> is true, the trailing external-link icon provides a visual cue. The icon is <code className="px-1 py-0.5" data-o9ds-inline-code>aria-hidden="true"</code> (decorative). Consider adding <code className="px-1 py-0.5" data-o9ds-inline-code>aria-describedby</code> to announce "opens in a new tab" for screen reader users.
              </p>
              <CodeBlock code={`<a class="o9ds-lnk o9ds-lnk--primary o9ds-lnk--lg" href="https://example.com"
   target="_blank" rel="noopener noreferrer"
   aria-describedby="ext-hint">
  <span class="o9ds-lnk__lbl">Visit site</span>
  <span class="o9ds-lnk__ext o9con o9con-external-link" aria-hidden="true"></span>
</a>
<span id="ext-hint" class="sr-only">Opens in a new tab</span>`} label="External with description" />
            </div>

            <div id="a11y-loading" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Loading state</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                Loading is supported but rarely used on links. When loading, <code className="px-1 py-0.5" data-o9ds-inline-code>aria-busy="true"</code> is set and the shimmer overlay covers the link content inline.
              </p>
            </div>

            <div id="a11y-notes" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Accessibility notes</h3>
              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
                <WhiteBgCard title="Link text">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Write link text that makes sense out of context. Screen readers can list all links on a page — "click here" provides no context.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Color contrast">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Link colors meet WCAG 2.1 AA contrast requirements. The underline provides a non-color visual cue for discoverability.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="No toggle support">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Links do not support <code className="px-1 py-0.5" data-o9ds-inline-code>aria-pressed</code> or toggle behavior. They are for navigation only.
                  </p>
                </WhiteBgCard>
              </div>
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
