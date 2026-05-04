import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../LayoutComponents/PageHeader'
import PageWithToc from '../LayoutComponents/PageWithToc'
import DocTabs from '../LayoutComponents/DocTabs'
import CodeBlock from '../LayoutComponents/CodeBlock'
import DocSection, { DocCallout, DocCode, DocList, DocParagraph, DocStrong } from '../LayoutComponents/DocSection'
import { DOC_TABLE_FIRST_COLUMN_CLASS } from '../LayoutComponents/codeHighlight'

const TABS = ['Overview', 'Architecture', 'Multi-Framework', 'Distribution']

const PACKAGES = [
  ['@arvo/tokens', 'SCSS design tokens — color, spacing, typography, borders, widths, animation', 'SCSS source (no build step) + prebuilt CSS'],
  ['@arvo/styles', 'Component SCSS, shared mixins, icon font, illustrations, web fonts', 'SCSS source + prebuilt CSS'],
  ['@arvo/core', 'Framework-agnostic behavioral logic — overlay hub, positioning, focus, keyboard, animation, mask', 'Vite dist/ (ESM + CJS + types)'],
  ['@arvo/utils', 'Form label, char counter, inline alert helpers', 'Vite dist/ (ESM + CJS + types)'],
  ['@arvo/react', 'React components, hooks, providers', 'Vite dist/ (ESM + CJS + types)'],
  ['@arvo/js', 'Vanilla JS components, jQuery plugin system', 'Vite dist/ (ESM + CJS + types)'],
  ['@arvo/assets', 'Fonts, o9con icon font, o9illus illustrations', 'Static asset directories + prebuilt CSS'],
  ['@arvo/docs', 'Docusaurus site with MDX component pages', 'Static build (planned)'],
]

const PRINCIPLES = [
  ['Single source of truth', 'Tokens originate in Figma, component specs originate in descriptors, generated code is never hand-edited.'],
  ['Framework-agnostic core', 'Shared logic (overlays, positioning, focus, keyboard) lives in @arvo/core. React and JS packages are thin adapters.'],
  ['Mechanical consistency', 'Naming, prop patterns, CSS variable structures, and cross-platform parity are validated by automated agents, not by review alone.'],
  ['Stateless agents', 'Each agent receives a descriptor plus prior outputs, produces artifacts, and has no side effects beyond its declared outputs. Agents are portable Markdown prompts.'],
  ['Incremental delivery', 'Each phase produces shippable artifacts. Later phases extend earlier ones without blocking them from delivering value.'],
]

const TECH_STACK = [
  ['Package manager', 'pnpm', '9.x'],
  ['Build orchestration', 'Turborepo', '2.x'],
  ['Library bundler', 'Vite (library mode)', '6.x'],
  ['Language', 'TypeScript (strict)', '5.5+'],
  ['Styles', 'SCSS (Dart Sass, modern API)', '1.86+'],
  ['Testing', 'Vitest + Testing Library + jsdom', '3.x'],
  ['Component explorer', 'Storybook (React-Vite)', '10.x'],
  ['Versioning', 'Changesets', '2.27+'],
  ['Runtime', 'Node.js', '>= 20'],
]

const TOKEN_CATEGORIES = ['Color', 'Spacing', 'Typography', 'Borders', 'Widths', 'Animation']

const CORE_MODULES = [
  ['overlay/', 'Stack management, z-index allocation, backdrop, outside-click / Escape / popstate dismissal'],
  ['position/', 'Placement resolution, flip/shift, scroll-aware updates, virtual anchor support'],
  ['focus/', 'Tab cycling, focus restoration on overlay close, roving tabindex'],
  ['keyboard/', 'Arrow key navigation, Escape handling, Enter/Space activation'],
  ['animation/', 'CSS transition orchestration, reduced-motion detection'],
  ['mask/', 'Input masking'],
]

const VERSION_BUMP = [
  ['New component', 'Minor'],
  ['New prop on existing component', 'Minor'],
  ['Bug fix or style adjustment', 'Patch'],
  ['Token value change', 'Patch'],
  ['Token or prop removed', 'Major'],
  ['API breaking change', 'Major'],
]

const FEED_VIEWS = [
  ['@Local', 'Development / CI', 'Subject to retention policy'],
  ['@Prerelease', 'QA / staging', 'Exempt from cleanup'],
  ['@Release', 'Production consumers', 'Exempt from cleanup'],
]

const DIST_MATRIX = [
  ['@arvo/tokens', 'src/', 'SCSS', './scss, ./scss/{category}', 'No'],
  ['@arvo/styles', 'src/', 'SCSS', '., ./icons, ./fonts, ./illustrations, ./base, ./mixins/*', 'Yes'],
  ['@arvo/core', 'dist/', 'ESM, CJS, .d.ts', '.', 'No'],
  ['@arvo/utils', 'dist/', 'ESM, CJS, .d.ts', '.', 'No'],
  ['@arvo/react', 'dist/', 'ESM, CJS, .d.ts', '.', 'No'],
  ['@arvo/js', 'dist/', 'ESM, CJS, .d.ts', '., ./plugin, ./auto', './auto only'],
]

export default function Developers() {
  const [activeTab, setActiveTab] = useState('Overview')

  const sections = useMemo(() => {
    if (activeTab === 'Overview') return [
      { id: 'mission', label: 'Mission' },
      { id: 'audiences', label: 'Audiences' },
      { id: 'packages', label: 'Package inventory' },
      { id: 'principles', label: 'Guiding principles' },
      { id: 'where-next', label: 'Where to go next' },
    ]
    if (activeTab === 'Architecture') return [
      { id: 'high-level', label: 'High-level view' },
      { id: 'tech-stack', label: 'Technology stack' },
      { id: 'tokens', label: 'Token architecture' },
      { id: 'core-modules', label: 'Shared core modules' },
      { id: 'shared-patterns', label: 'Shared patterns' },
      { id: 'bem', label: 'BEM and naming' },
    ]
    if (activeTab === 'Multi-Framework') return [
      { id: 'mf-strategy', label: 'Strategy' },
      { id: 'mf-react', label: '@arvo/react' },
      { id: 'mf-js', label: '@arvo/js' },
      { id: 'mf-parity', label: 'Parity enforcement' },
      { id: 'mf-future', label: 'Future framework support' },
    ]
    if (activeTab === 'Distribution') return [
      { id: 'registry', label: 'Registry' },
      { id: 'dist-matrix', label: 'Distribution matrix' },
      { id: 'versioning', label: 'Versioning' },
      { id: 'feed-promotion', label: 'Feed promotion' },
    ]
    return []
  }, [activeTab])

  return (
    <PageWithToc sections={sections}>
      <div className="space-y-8">
        <PageHeader
          title="For Developers"
          description="The Arvo Design System is a dual-platform component library (React + vanilla JS) backed by shared design tokens, SCSS styles, framework-agnostic core utilities, and an agent-driven development pipeline. It is distributed as scoped npm packages via Azure Artifacts."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}
        />

        <DocTabs tabs={TABS} activeTab={activeTab} onSelect={setActiveTab} />

        {activeTab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="mission" title="Mission">
              <DocParagraph>
                Arvo is the canonical, packaged design system for o9 platform applications. It is treated the same as any external packaged library — the development of Arvo is intentionally separate from product UI work (Platform Compliance, NovaAI/Kibo migrations, and other improvements live elsewhere).
              </DocParagraph>
              <DocCallout title="Scope discipline">
                Do not mix Arvo scope with the Kibo Q3 improvement plan. Arvo is an external, packaged system that platform UI is consuming, and is not a shared development layer.
              </DocCallout>
            </DocSection>

            <DocSection id="audiences" title="Audiences">
              <div className="grid gap-4 sm:grid-cols-2">
                <Link to="/usage" className="block border p-5 transition-colors hover:border-arvo-light-primary dark:hover:border-white" data-arvo-card="light">
                  <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white m-0 mb-2">Consumers</h3>
                  <p className="text-sm text-arvo-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Building product UIs against <DocCode>@arvo/*</DocCode>. See the <DocStrong>Usage</DocStrong> section for the public contract: imports, props, styling, accessibility, testing, versioning.
                  </p>
                </Link>
                <Link to="/developer-reference/agentic-pipeline" className="block border p-5 transition-colors hover:border-arvo-light-primary dark:hover:border-white" data-arvo-card="light">
                  <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white m-0 mb-2">Contributors</h3>
                  <p className="text-sm text-arvo-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Building or maintaining <DocCode>@arvo/*</DocCode> itself. See the <DocStrong>Developer Reference</DocStrong> section for architecture, agentic pipeline, component pipeline, shared patterns, and contributor workflows.
                  </p>
                </Link>
              </div>
            </DocSection>

            <DocSection id="packages" title="Package inventory">
              <DocParagraph>Eight packages compose the system. Each ships independently but is versioned in lockstep.</DocParagraph>
              <div className="border overflow-hidden dark:border-neutral-700">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Package</th>
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Role</th>
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Output</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PACKAGES.map(([pkg, role, output]) => (
                      <tr key={pkg} className="border-t dark:border-neutral-700">
                        <td className={`py-2 px-3 font-mono text-sm ${DOC_TABLE_FIRST_COLUMN_CLASS}`}>{pkg}</td>
                        <td className="py-2 px-3 text-arvo-light-secondary dark:text-neutral-400">{role}</td>
                        <td className="py-2 px-3 text-arvo-light-secondary dark:text-neutral-400">{output}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DocSection>

            <DocSection id="principles" title="Guiding principles">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {PRINCIPLES.map(([title, body]) => (
                  <div key={title} className="border p-4 dark:border-neutral-700" data-arvo-card="light">
                    <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white m-0 mb-2">{title}</h3>
                    <p className="text-sm text-arvo-light-secondary dark:text-neutral-400 leading-relaxed m-0">{body}</p>
                  </div>
                ))}
              </div>
            </DocSection>

            <DocSection id="where-next" title="Where to go next">
              <DocList items={[
                <span key="1"><Link to="/usage" className="underline">Usage Standards</Link> — the consumer public contract.</span>,
                <span key="2"><Link to="/developer-reference/agentic-pipeline" className="underline">Agentic Pipeline</Link> — how components are produced by orchestrated agents.</span>,
                <span key="3"><Link to="/developer-reference/component-pipeline" className="underline">Component Pipeline</Link> — the per-component flow from descriptor to ship.</span>,
                <span key="4"><Link to="/developer-reference/workflows" className="underline">Contributor Workflows</Link> — new component, rework, bug fix, enhancement, doc update, testing.</span>,
                <span key="5"><Link to="/components" className="underline">Components</Link> — every shipped component with usage, code, and accessibility tabs.</span>,
              ]} />
            </DocSection>
          </div>
        )}

        {activeTab === 'Architecture' && (
          <div className="space-y-12">
            <DocSection id="high-level" title="High-level view">
              <DocParagraph>The system is a layered monorepo. Tokens feed styles; styles + core feed both framework wrappers; assets ship side-effecting CSS for icon and web fonts.</DocParagraph>
              <CodeBlock
                language="text"
                label="Layered monorepo (top to bottom)"
                code={`┌─────────────────────────────────────────────────────────────────┐
│  Consumers: product applications                                │
│  └─ install @arvo/* via Azure Artifacts (lockstep version set)  │
└─────────────────────────────────────────────────────────────────┘
            ▲                                ▲
            │                                │
┌─────────────────────┐          ┌─────────────────────┐
│ @arvo/react         │          │ @arvo/js            │
│  React adapters,    │          │  JS classes,        │
│  hooks, providers   │          │  jQuery plugins     │
└─────────────────────┘          └─────────────────────┘
            ▲                                ▲
            └────────────┬───────────────────┘
                         │
            ┌────────────────────────┐
            │ @arvo/core (behaviour) │  @arvo/utils (DOM helpers)
            └────────────────────────┘
                         ▲
            ┌────────────────────────┐
            │ @arvo/styles  (SCSS)   │  @arvo/assets (icon font, illus, fonts)
            └────────────────────────┘
                         ▲
            ┌────────────────────────┐
            │ @arvo/tokens (SCSS)    │
            └────────────────────────┘`}
              />
              <DocParagraph>Peer dependencies (not bundled): <DocCode>react ^18 || ^19</DocCode>, <DocCode>react-dom ^18 || ^19</DocCode> for <DocCode>@arvo/react</DocCode>; <DocCode>jquery ^3.7</DocCode> for <DocCode>@arvo/js</DocCode>.</DocParagraph>
            </DocSection>

            <DocSection id="tech-stack" title="Technology stack">
              <div className="border overflow-hidden dark:border-neutral-700">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Area</th>
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Tool</th>
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Version</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TECH_STACK.map(([area, tool, version]) => (
                      <tr key={area} className="border-t dark:border-neutral-700">
                        <td className={`py-2 px-3 ${DOC_TABLE_FIRST_COLUMN_CLASS}`}>{area}</td>
                        <td className="py-2 px-3 text-arvo-light-secondary dark:text-neutral-400">{tool}</td>
                        <td className="py-2 px-3 font-mono text-arvo-light-secondary dark:text-neutral-400">{version}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DocSection>

            <DocSection id="tokens" title="Token architecture">
              <DocParagraph>Tokens flow through two layers:</DocParagraph>
              <ol className="list-decimal pl-5 space-y-2 text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><DocStrong>Compile-time</DocStrong> — SCSS variables (<DocCode>$arvo-*</DocCode>) defined in <DocCode>@arvo/tokens/src/scss/</DocCode>. Used inside mixins and the styles package during Sass compilation.</li>
                <li><DocStrong>Runtime</DocStrong> — CSS custom properties (<DocCode>--arvo-*</DocCode>) emitted onto <DocCode>:root</DocCode> by <DocCode>_root.scss</DocCode>. Theme, brand, and mode layers compose via mixins so consuming applications can override at any cascade level.</li>
              </ol>
              <DocParagraph><DocStrong>Token categories:</DocStrong> {TOKEN_CATEGORIES.join(' · ')}.</DocParagraph>
              <DocParagraph>
                <DocStrong>CSS variable discipline:</DocStrong> Component-level CSS variables (<DocCode>--arvo-{`{abbr}`}-*</DocCode>) are created only when the value changes per size, variant, state, or parent override. Static token references are used directly.
              </DocParagraph>
              <DocParagraph>
                <DocStrong>Why tokens live outside the platform:</DocStrong> One version across all applications (no copy-paste drift), independent versioning, cross-application consistency, and a reduced platform bundle.
              </DocParagraph>
            </DocSection>

            <DocSection id="core-modules" title="Shared core modules (@arvo/core)">
              <DocParagraph>
                Framework-agnostic behavior modules consumed by both <DocCode>@arvo/react</DocCode> (via hooks) and <DocCode>@arvo/js</DocCode> (via direct import). This layer ensures behavioral parity between React and vanilla JS is structural, not coincidental.
              </DocParagraph>
              <div className="border overflow-hidden dark:border-neutral-700">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Module</th>
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CORE_MODULES.map(([mod, purpose]) => (
                      <tr key={mod} className="border-t dark:border-neutral-700">
                        <td className={`py-2 px-3 font-mono text-sm ${DOC_TABLE_FIRST_COLUMN_CLASS}`}>{mod}</td>
                        <td className="py-2 px-3 text-arvo-light-secondary dark:text-neutral-400">{purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DocSection>

            <DocSection id="shared-patterns" title="Shared patterns">
              <DocParagraph>
                Shared patterns sit between the raw token layer and the component layer. They encode specific visual behaviors (animated form borders, loading skeletons, inline alerts) that would otherwise be duplicated across every component that needs them.
              </DocParagraph>
              <DocParagraph>
                Each pattern is a styling solution (SCSS mixin in <DocCode>@arvo/styles</DocCode>). When DOM is involved, a logic solution (utility in <DocCode>@arvo/utils</DocCode>). Both are registered in <DocCode>SHARED-PATTERNS-REGISTRY.json</DocCode> and enforced by the pipeline. A component cannot scaffold until its declared patterns have ready status.
              </DocParagraph>
              <DocParagraph>
                See the <Link to="/developer-reference/shared-patterns" className="underline">Shared Patterns</Link> page for the active pattern registry.
              </DocParagraph>
            </DocSection>

            <DocSection id="bem" title="BEM and naming">
              <DocParagraph>CSS classes follow BEM with aggressive abbreviation for compactness across a library of 70+ components:</DocParagraph>
              <CodeBlock
                language="text"
                code={`.arvo-{abbr}__{element}--{modifier}`}
              />
              <DocParagraph>
                Abbreviations are documented in each component descriptor: <DocCode>btn</DocCode>, <DocCode>cb</DocCode>, <DocCode>rb</DocCode>, <DocCode>sw</DocCode>, <DocCode>sel</DocCode>, <DocCode>dd</DocCode>, <DocCode>txt</DocCode>, <DocCode>pop</DocCode>, <DocCode>bc</DocCode>, <DocCode>num</DocCode>, …
              </DocParagraph>
            </DocSection>
          </div>
        )}

        {activeTab === 'Multi-Framework' && (
          <div className="space-y-12">
            <DocSection id="mf-strategy" title="Strategy">
              <DocParagraph>
                The design system ships two framework targets from a single source of architectural truth. The <DocCode>@arvo/core</DocCode> layer is deliberately framework-agnostic so that React and vanilla JS adapters share the same overlay, focus, and keyboard primitives.
              </DocParagraph>
            </DocSection>

            <DocSection id="mf-react" title="@arvo/react">
              <DocList items={[
                <span key="1">Every component uses <DocCode>forwardRef</DocCode> and extends native HTML element attributes.</span>,
                <span key="2">Hooks (<DocCode>useOverlay</DocCode>, <DocCode>useFocusTrap</DocCode>, <DocCode>useKeyboardNav</DocCode>, <DocCode>usePositioning</DocCode>) wrap <DocCode>@arvo/core</DocCode> modules.</span>,
                <span key="3"><DocCode>OverlayProvider</DocCode> configures container constraints, z-index layering, and route-change behavior for the application.</span>,
              ]} />
              <CodeBlock
                language="tsx"
                label="Component pattern"
                code={`import { ArvoButton } from '@arvo/react';

<ArvoButton variant="primary" size="md" onClick={handleClick}>
  Save
</ArvoButton>`}
              />
              <CodeBlock
                language="tsx"
                label="Provider pattern"
                code={`import { OverlayProvider } from '@arvo/react';

<OverlayProvider config={{ containerSelector: '#app', zIndexBase: 1000 }}>
  <App />
</OverlayProvider>`}
              />
            </DocSection>

            <DocSection id="mf-js" title="@arvo/js">
              <DocList items={[
                <span key="1">Class-based lifecycle: <DocCode>ArvoComponent.initialize(element, options)</DocCode> → instance methods → <DocCode>.destroy()</DocCode>.</span>,
                <span key="2">Dual-purpose getter/setter API: <DocCode>disabled()</DocCode> returns state; <DocCode>disabled(true)</DocCode> sets it.</span>,
                <span key="3">Three entry points: <DocCode>main</DocCode> (direct class usage), <DocCode>plugin</DocCode> (selective jQuery registration), <DocCode>auto</DocCode> (side-effect import that registers all plugins).</span>,
                <span key="4">Overlay bridge for jQuery consumers: <DocCode>$.setupOverlays()</DocCode>, <DocCode>$.openOverlay()</DocCode>, <DocCode>$.closeAllOverlays()</DocCode>.</span>,
              ]} />
              <CodeBlock
                language="js"
                label="Class-based pattern"
                code={`import { ArvoButton } from '@arvo/js';
const btn = ArvoButton.initialize(element, { variant: 'primary', size: 'md' });
btn.disabled(true);   // setter: disable
btn.disabled();       // getter: returns true
btn.destroy();        // cleanup`}
              />
              <CodeBlock
                language="js"
                label="jQuery plugin usage"
                code={`import { registerArvoPlugins } from '@arvo/js/plugin';
registerArvoPlugins($);                                  // all components
registerArvoPlugins($, ['arvoButton', 'arvoTextbox']);   // selective

$('#save-btn').arvoButton({ variant: 'primary' });`}
              />
              <CodeBlock
                language="js"
                label="Overlay bridge (jQuery)"
                code={`$.setupOverlays({ containerSelector: '#app', zIndexBase: 1000 });
$('#my-popover').openOverlay({ type: 'popover', triggerElement: anchorEl });
$.closeAllOverlays();`}
              />
            </DocSection>

            <DocSection id="mf-parity" title="Parity enforcement">
              <DocParagraph>
                React and JS implementations produce identical HTML structure, CSS classes, ARIA attributes, and event semantics for every component. This is not a convention — it is validated by the <DocStrong>Drift Checker</DocStrong> agent on every change and blocks merge on critical divergence.
              </DocParagraph>
              <DocParagraph>
                See <Link to="/developer-reference/testing-and-drift" className="underline">Testing & Drift</Link> for how the parity gate works.
              </DocParagraph>
            </DocSection>

            <DocSection id="mf-future" title="Future framework support">
              <DocParagraph>
                Adding a new framework target (Angular, Svelte, Web Components) requires writing thin adapter components over the same <DocCode>@arvo/core</DocCode> modules. The styles, tokens, shared patterns, and behavioral logic remain unchanged.
              </DocParagraph>
            </DocSection>
          </div>
        )}

        {activeTab === 'Distribution' && (
          <div className="space-y-12">
            <DocSection id="registry" title="Registry">
              <DocParagraph>
                Azure Artifacts serves as the private npm registry for <DocCode>@arvo</DocCode> scoped packages. Consuming applications reference the feed via <DocCode>.npmrc</DocCode> and install packages identically to any public npm dependency. The feed proxies public <DocCode>npmjs.com</DocCode>, so a single registry serves both private and third-party packages.
              </DocParagraph>
            </DocSection>

            <DocSection id="dist-matrix" title="Distribution matrix">
              <div className="border overflow-hidden dark:border-neutral-700">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Package</th>
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Dist</th>
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Formats</th>
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Entry points</th>
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Side effects</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DIST_MATRIX.map(([pkg, dist, fmt, entries, side]) => (
                      <tr key={pkg} className="border-t dark:border-neutral-700">
                        <td className={`py-2 px-3 font-mono text-sm ${DOC_TABLE_FIRST_COLUMN_CLASS}`}>{pkg}</td>
                        <td className="py-2 px-3 font-mono text-arvo-light-secondary dark:text-neutral-400">{dist}</td>
                        <td className="py-2 px-3 text-arvo-light-secondary dark:text-neutral-400">{fmt}</td>
                        <td className="py-2 px-3 font-mono text-arvo-light-secondary dark:text-neutral-400">{entries}</td>
                        <td className="py-2 px-3 text-arvo-light-secondary dark:text-neutral-400">{side}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DocSection>

            <DocSection id="versioning" title="Versioning">
              <DocParagraph>
                All packages follow semantic versioning managed by Changesets. Version bumps are intentional — not every merge is published. A developer includes a changeset file in their PR, and after merge, the Changesets Action accumulates pending changes into a "Version Packages" PR that bumps versions and updates changelogs. Merging that PR triggers the publisher.
              </DocParagraph>
              <div className="border overflow-hidden dark:border-neutral-700">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Change</th>
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Bump</th>
                    </tr>
                  </thead>
                  <tbody>
                    {VERSION_BUMP.map(([change, bump]) => (
                      <tr key={change} className="border-t dark:border-neutral-700">
                        <td className={`py-2 px-3 ${DOC_TABLE_FIRST_COLUMN_CLASS}`}>{change}</td>
                        <td className="py-2 px-3 font-mono text-arvo-light-secondary dark:text-neutral-400">{bump}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <DocParagraph>
                Consumer-facing versioning rules and the upgrade checklist live on the <Link to="/usage/versioning" className="underline">Usage › Versioning</Link> page.
              </DocParagraph>
            </DocSection>

            <DocSection id="feed-promotion" title="Feed promotion">
              <div className="border overflow-hidden dark:border-neutral-700">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">View</th>
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Audience</th>
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Retention</th>
                    </tr>
                  </thead>
                  <tbody>
                    {FEED_VIEWS.map(([view, audience, retention]) => (
                      <tr key={view} className="border-t dark:border-neutral-700">
                        <td className={`py-2 px-3 font-mono text-sm ${DOC_TABLE_FIRST_COLUMN_CLASS}`}>{view}</td>
                        <td className="py-2 px-3 text-arvo-light-secondary dark:text-neutral-400">{audience}</td>
                        <td className="py-2 px-3 text-arvo-light-secondary dark:text-neutral-400">{retention}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
