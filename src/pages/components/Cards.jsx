import { useMemo, useState } from 'react'
import CodeBlock from '../../LayoutComponents/CodeBlock'
import DocTabs from '../../LayoutComponents/DocTabs'
import PageWithToc from '../../LayoutComponents/PageWithToc'
import DocTable from '../../LayoutComponents/DocTable'
import GrayBgCard from '../../LayoutComponents/GrayBgCard'
import WhiteBgCard from '../../LayoutComponents/WhiteBgCard'

const cardTabs = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

/** Chromatic — Shadowbox CTA (example story id: `shadowboxcta`) */
export const STORYBOOK_CHROMATIC_BASE = 'https://5ccbc373887ca40020446347-wtuhidckxo.chromatic.com'

/** Docs: use `viewMode=docs` and the `--docs` story id */
export const STORYBOOK_CARDS_DOCS_URL = `${STORYBOOK_CHROMATIC_BASE}/iframe.html?id=shadowboxcta--docs&viewMode=docs&shortcuts=false&singleStory=true`

/** Story with Storybook toolbar (full UI) */
export const STORYBOOK_SHADOWBOX_WITH_TOOLBAR_URL = `${STORYBOOK_CHROMATIC_BASE}/?path=/story/shadowboxcta--default&full=1&shortcuts=false&singleStory=true`

/** Story without toolbar (iframe canvas only) */
export const STORYBOOK_SHADOWBOX_CANVAS_URL = `${STORYBOOK_CHROMATIC_BASE}/iframe.html?id=shadowboxcta--default&viewMode=story&shortcuts=false&singleStory=true`

const PROPS_PLACEHOLDER = [
  { prop: 'className', type: 'string', default: '—', required: 'No', desc: 'Additional classes on the root element' },
  { prop: 'children', type: 'ReactNode', default: '—', required: 'Yes', desc: 'Card body content' },
]

const ARIA_CARD = [
  { attr: 'role="region"', when: 'When the card groups distinct content and benefits from a landmark' },
  { attr: 'aria-labelledby', when: 'Points to visible card title id' },
  { attr: 'aria-label', when: 'No visible title; short description of the card purpose' },
]

function StorybookIframe({ src, title, height, openHref }) {
  const h = height ?? 400
  return (
    <div className="space-y-3">
      {openHref && (
        <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
          If the preview does not load,{' '}
          <a
            href={openHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-o9ds-light-primary dark:text-white underline hover:no-underline font-medium"
          >
            open in a new tab
          </a>
          .
        </p>
      )}
      <div
        className="border border-o9ds-light-border dark:border-neutral-700 overflow-hidden w-full max-w-[800px] bg-o9ds-light-surface dark:bg-neutral-950"
        data-o9ds-storybook-embed
      >
        <iframe
          title={title}
          src={src}
          width="800"
          height={h}
          className="w-full max-w-full block"
          style={{ minHeight: h, height: h }}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-modals"
        />
      </div>
    </div>
  )
}

function StorybookEmbedsSection() {
  const oEmbedToolbar = `${STORYBOOK_CHROMATIC_BASE}/?path=/story/shadowboxcta--default`
  const oEmbedCanvas = `${STORYBOOK_CHROMATIC_BASE}/iframe.html?id=/story/shadowboxcta--default&viewMode=story`

  return (
    <div className="space-y-12">
      <div id="overview-embed-docs" className="scroll-mt-24 space-y-4">
        <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Embed documentation</h3>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed text-sm">
          Embed a documentation page by replacing <code className="px-1 py-0.5" data-o9ds-inline-code>viewMode=story</code> with the uniquely auto-generated documentation entry for the story.
        </p>
        <p className="text-xs font-semibold uppercase tracking-wider text-o9ds-light-secondary dark:text-neutral-500">oEmbed</p>
        <CodeBlock code={STORYBOOK_CARDS_DOCS_URL} label="URL" />
        <p className="text-xs font-semibold uppercase tracking-wider text-o9ds-light-secondary dark:text-neutral-500">iframe embed</p>
        <CodeBlock
          code={`<iframe
  src="${STORYBOOK_CARDS_DOCS_URL}"
  width="800"
  height="400"
></iframe>`}
          label="HTML"
        />
        <StorybookIframe
          title="Storybook: Shadowbox CTA — documentation"
          src={STORYBOOK_CARDS_DOCS_URL}
          height={400}
          openHref={STORYBOOK_CARDS_DOCS_URL}
        />
      </div>

      <div id="overview-embed-toolbar" className="scroll-mt-24 space-y-4">
        <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Embed a story with the toolbar</h3>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed text-sm">
          Embed a story with the toolbar, and paste the published story URL. For example:
        </p>
        <p className="text-xs font-semibold uppercase tracking-wider text-o9ds-light-secondary dark:text-neutral-500">oEmbed</p>
        <CodeBlock code={oEmbedToolbar} label="URL" />
        <p className="text-xs font-semibold uppercase tracking-wider text-o9ds-light-secondary dark:text-neutral-500">iframe embed</p>
        <CodeBlock
          code={`<iframe
  src="${STORYBOOK_SHADOWBOX_WITH_TOOLBAR_URL}"
  width="800"
  height="260"
></iframe>`}
          label="HTML"
        />
        <StorybookIframe
          title="Storybook: Shadowbox CTA — with toolbar"
          src={STORYBOOK_SHADOWBOX_WITH_TOOLBAR_URL}
          height={260}
          openHref={oEmbedToolbar}
        />
      </div>

      <div id="overview-embed-canvas" className="scroll-mt-24 space-y-4">
        <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Embed a story without the toolbar</h3>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed text-sm">
          To embed a plain story without Storybook&apos;s toolbar, click the &quot;open canvas in new tab&quot; icon in the top-right corner of Storybook to get the canvas URL. For example:
        </p>
        <p className="text-xs font-semibold uppercase tracking-wider text-o9ds-light-secondary dark:text-neutral-500">oEmbed</p>
        <CodeBlock code={oEmbedCanvas} label="URL" />
        <p className="text-xs font-semibold uppercase tracking-wider text-o9ds-light-secondary dark:text-neutral-500">iframe embed</p>
        <CodeBlock
          code={`<iframe
  src="${STORYBOOK_SHADOWBOX_CANVAS_URL}"
  width="800"
  height="200"
></iframe>`}
          label="HTML"
        />
        <StorybookIframe
          title="Storybook: Shadowbox CTA — canvas only"
          src={STORYBOOK_SHADOWBOX_CANVAS_URL}
          height={200}
          openHref={STORYBOOK_SHADOWBOX_CANVAS_URL}
        />
      </div>
    </div>
  )
}

export default function Cards() {
  const [activeTab, setActiveTab] = useState('Overview')

  const onThisPageSections = useMemo(() => {
    if (activeTab === 'Overview') {
      return [
        { id: 'overview-purpose', label: 'Purpose' },
        { id: 'overview-definition', label: 'Definition & role' },
        { id: 'overview-storybook', label: 'Storybook' },
        { id: 'overview-embed-docs', label: 'Embed documentation' },
        { id: 'overview-embed-toolbar', label: 'Embed with toolbar' },
        { id: 'overview-embed-canvas', label: 'Embed without toolbar' },
        { id: 'overview-anatomy', label: 'Anatomy' },
        { id: 'overview-variants', label: 'Patterns' },
        { id: 'overview-dos-donts', label: 'Dos & don’ts' },
      ]
    }
    if (activeTab === 'Usage') {
      return [
        { id: 'usage-when', label: 'When to use' },
        { id: 'usage-when-not', label: 'When not to use' },
        { id: 'usage-scenarios', label: 'Scenarios' },
        { id: 'usage-layout', label: 'Layout' },
      ]
    }
    if (activeTab === 'Code/APIs') {
      return [
        { id: 'code-markup', label: 'Markup' },
        { id: 'code-scenarios', label: 'Scenarios' },
        { id: 'code-props', label: 'API notes' },
        { id: 'code-tokens', label: 'Tokens' },
      ]
    }
    if (activeTab === 'Accessibility') {
      return [
        { id: 'a11y-intro', label: 'Overview' },
        { id: 'a11y-structure', label: 'Structure' },
        { id: 'a11y-keyboard', label: 'Keyboard' },
        { id: 'a11y-aria', label: 'ARIA' },
        { id: 'a11y-checklist', label: 'Checklist' },
      ]
    }
    return []
  }, [activeTab])

  return (
    <PageWithToc sections={onThisPageSections}>
      <div className="max-w-4xl space-y-8">
        <section>
          <h1 className="group flex items-center gap-2 text-[30px] font-bold text-o9ds-light-primary dark:text-white mb-4">
            <span
              className="flex h-8 w-8 items-center justify-center bg-o9ds-light-surface dark:bg-neutral-700"
              data-o9ds-avatar
              data-o9ds-avatar-header
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm0 0h16M8 10h8M8 14h4" />
              </svg>
            </span>
            Cards
          </h1>
          <p className="text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed">
            Containers for grouped content and actions. The <strong className="text-o9ds-light-primary dark:text-white font-medium">o9ds-card</strong> surface is used for tiles, callouts, and structured regions across the platform.
          </p>
          <DocTabs tabs={cardTabs} activeTab={activeTab} onSelect={setActiveTab} />
        </section>

        {activeTab === 'Overview' && (
          <div className="space-y-12">
            <section id="overview-purpose" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Purpose</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Cards group related information, media, or controls so users can scan, compare, and act within a bounded region. They create hierarchy on dashboards, lists, and marketing-style callouts without fragmenting the page.
              </p>
            </section>

            <section id="overview-definition" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Definition & role</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                In o9DS, card patterns (including shadowbox-style CTAs) use a consistent <strong className="text-o9ds-light-primary dark:text-white font-medium">o9ds-card</strong> surface: border, padding, and optional elevation or media. The component’s job is presentation and grouping—not navigation by itself (links and buttons inside handle actions).
              </p>
            </section>

            <section id="overview-storybook" className="scroll-mt-24 space-y-6">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Storybook & Chromatic</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Published Storybook on Chromatic can be embedded in three ways: full documentation, the default story with the Storybook shell (toolbar), or the iframe canvas only. Examples below use the <strong className="text-o9ds-light-primary dark:text-white font-medium">Shadowbox CTA</strong> story; replace story ids for other components.
              </p>
              <StorybookEmbedsSection />
            </section>

            <section id="overview-anatomy" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Anatomy</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Container</strong> — bordered or elevated surface (<code className="px-1 py-0.5" data-o9ds-inline-code>o9ds-card</code>).</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Header / title</strong> — optional; keeps hierarchy clear when the card is landmarked.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Body</strong> — primary copy, lists, or media.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Footer / actions</strong> — optional buttons aligned to layout rules.</li>
              </ul>
            </section>

            <section id="overview-variants" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Patterns</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Cards may appear as flat bordered tiles, elevated panels, or media-forward callouts (e.g. shadowbox). Density and emphasis follow the same token system as the rest of o9DS—avoid mixing unrelated patterns inside one card.
              </p>
            </section>

            <section id="overview-dos-donts" className="scroll-mt-24">
              <div className="grid gap-4 sm:grid-cols-2">
                <GrayBgCard
                  title="Do"
                  bullets={[
                    'Use one primary action per card when actions are present',
                    'Keep titles short and scannable',
                    'Align cards to the layout grid',
                  ]}
                />
                <WhiteBgCard
                  title="Don’t"
                  bullets={[
                    'Nest interactive cards in ways that trap focus',
                    'Hide critical actions only in hover-only affordances',
                    'Overload a single card with unrelated tasks',
                  ]}
                />
              </div>
            </section>
          </div>
        )}

        {activeTab === 'Usage' && (
          <div className="space-y-12">
            <section id="usage-when" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Dashboard or browse surfaces where users compare multiple entities (workspaces, orders, KPI tiles).</li>
                <li>Grouped settings or summaries with a clear title and optional actions.</li>
                <li>Promotional or onboarding callouts that need a bounded visual block.</li>
              </ul>
            </section>

            <section id="usage-when-not" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When not to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Simple inline form rows—use field groups without an extra card chrome.</li>
                <li>Full-page primary content that should not feel “boxed”—use page sections instead.</li>
                <li>Navigation-only rows—prefer list or table patterns.</li>
              </ul>
            </section>

            <section id="usage-scenarios" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Scenarios</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <strong className="text-o9ds-light-primary dark:text-white font-medium">Grid of tiles:</strong> equal-width cards in a responsive grid; keep actions in a consistent row (footer).
              </p>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <strong className="text-o9ds-light-primary dark:text-white font-medium">Hero / CTA:</strong> one prominent card with headline, supporting text, and a single primary button—avoid competing primaries.
              </p>
            </section>

            <section id="usage-layout" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Layout</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Maintain spacing between cards using the global spacing scale.</li>
                <li>Align card actions to reading direction (primary trailing in LTR footers).</li>
                <li>On narrow viewports, stack actions full width when touch targets need room.</li>
              </ul>
            </section>
          </div>
        )}

        {activeTab === 'Code/APIs' && (
          <div className="space-y-12">
            <section id="code-markup" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Markup</h2>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                Use the <code className="px-1 py-0.5" data-o9ds-inline-code>o9ds-card</code> class on a container; compose header, body, and footer with inner elements or BEM-style modifiers from your bundle.
              </p>
              <CodeBlock
                code={`<article class="o9ds-card" data-o9ds-card="light">
  <header class="o9ds-card__hd">
    <h2 class="o9ds-card__title">Title</h2>
  </header>
  <div class="o9ds-card__bd">
    <p>Supporting content.</p>
  </div>
  <footer class="o9ds-card__ft">
    <button type="button" class="o9ds-btn o9ds-btn--primary o9ds-btn--md">Action</button>
  </footer>
</article>`}
                label="HTML structure (illustrative)"
              />
            </section>

            <section id="code-scenarios" className="scroll-mt-24 space-y-6">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Implementation scenarios</h2>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">React wrapper</h3>
                <CodeBlock
                  code={`import { O9Card } from '@o9ds/react'; // illustrative API name

<O9Card variant="bordered" title="Workspace">
  <p>Card content</p>
</O9Card>`}
                  label="React (adjust import to your package)"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Linked card</h3>
                <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                  If the whole card is clickable, use a single link or button wrapping appropriate content and ensure focus styles cover the hit area.
                </p>
              </div>
            </section>

            <section id="code-props" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">API notes</h2>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                Final prop names ship with your <code className="px-1 py-0.5" data-o9ds-inline-code>@o9ds/react</code> package. The table below is a placeholder until types are generated from source.
              </p>
              <div className="border overflow-hidden dark:border-neutral-700" style={{ borderColor: '#E5E5E5' }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="dark:bg-neutral-800/50" style={{ backgroundColor: '#F2F2F2' }}>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Prop</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Type</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Default</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Required</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PROPS_PLACEHOLDER.map((row) => (
                      <tr key={row.prop} className="border-t dark:border-neutral-700" style={{ borderColor: '#E5E5E5' }}>
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

            <section id="code-tokens" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Tokens</h2>
              <DocTable
                columns={[
                  { key: 'token', label: 'Concern', mono: false },
                  { key: 'maps', label: 'Typical mapping' },
                ]}
                rows={[
                  { token: 'Space', maps: 'Padding inside card; gap between header, body, footer' },
                  { token: 'Border / radius', maps: 'Follow o9DS border policy (0 radius site-wide)' },
                  { token: 'Color', maps: 'Surface vs elevated surfaces from semantic tokens' },
                ]}
              />
            </section>
          </div>
        )}

        {activeTab === 'Accessibility' && (
          <section className="space-y-12">
            <div id="a11y-intro" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Card accessibility</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Cards are usually static containers; focus management matters for interactive children (links, buttons) and for cards that behave as single large controls.
              </p>
            </div>

            <div id="a11y-structure" className="scroll-mt-24 space-y-3">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Structure</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>Use heading levels that fit the page outline (one <code className="px-1 py-0.5" data-o9ds-inline-code>h2</code>–<code className="px-1 py-0.5" data-o9ds-inline-code>h4</code> per card title, not skipped levels).</li>
                <li>Prefer <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;article&gt;</code> or <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;section&gt;</code> when the card is a self-contained unit.</li>
              </ul>
            </div>

            <div id="a11y-keyboard" className="scroll-mt-24 space-y-3">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Keyboard</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                Tab order follows the DOM. If the entire card is interactive, implement as a single focusable control (button or link) with visible focus, or keep inner controls separately focusable—do not duplicate actions.
              </p>
            </div>

            <div id="a11y-aria" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">ARIA (when needed)</h3>
              <div className="border overflow-hidden dark:border-neutral-700" style={{ borderColor: '#E5E5E5' }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="dark:bg-neutral-800/50" style={{ backgroundColor: '#F2F2F2' }}>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Technique</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">When</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ARIA_CARD.map(({ attr, when }) => (
                      <tr key={attr} className="border-t dark:border-neutral-700" style={{ borderColor: '#E5E5E5' }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{attr}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{when}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div id="a11y-checklist" className="scroll-mt-24">
              <GrayBgCard
                title="Checklist"
                bullets={[
                  'Card title is programmatically associated or labeled',
                  'Interactive elements inside are reachable and visibly focused',
                  'Color is not the only cue for state or importance',
                  'Motion in media callouts respects reduced-motion preferences where implemented',
                ]}
              />
            </div>
          </section>
        )}
      </div>
    </PageWithToc>
  )
}
