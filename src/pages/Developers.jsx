import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../LayoutComponents/PageHeader'
import PageWithToc from '../LayoutComponents/PageWithToc'
import DocTabs from '../LayoutComponents/DocTabs'
import CodeBlock from '../LayoutComponents/CodeBlock'
import DocSection, { DocCallout, DocCode, DocList, DocParagraph, DocStrong } from '../LayoutComponents/DocSection'
import { DOC_TABLE_FIRST_COLUMN_CLASS } from '../LayoutComponents/codeHighlight'

const TABS = ['Overview', 'Usage', 'Architecture']

// ─── Overview data ────────────────────────────────────────────────────────────

const PACKAGES = [
  ['@arvo/tokens', 'Design tokens — color, spacing, typography, borders, animation', 'SCSS source + prebuilt CSS'],
  ['@arvo/styles', 'Component SCSS, shared mixins, icon font, web fonts', 'SCSS source + prebuilt CSS'],
  ['@arvo/core', 'Framework-agnostic logic — overlays, positioning, focus, keyboard', 'ESM + CJS + types'],
  ['@arvo/utils', 'Form label, char counter, inline alert helpers', 'ESM + CJS + types'],
  ['@arvo/react', 'React components, hooks, providers', 'ESM + CJS + types'],
  ['@arvo/js', 'Vanilla JS components, jQuery plugin system', 'ESM + CJS + types'],
  ['@arvo/assets', 'Fonts, o9con icon font, illustrations', 'Static assets + prebuilt CSS'],
  ['@arvo/docs', 'Docusaurus documentation site', 'Static build'],
]

const PRINCIPLES = [
  ['Single source of truth', 'Tokens originate in Figma, component specs in descriptors. Generated code is never hand-edited.'],
  ['Framework-agnostic core', 'Overlays, positioning, focus, and keyboard logic live in @arvo/core. React and JS are thin adapters over the same primitives.'],
  ['Mechanical consistency', 'Naming, prop patterns, CSS variable structures, and cross-platform parity are enforced by automated agents.'],
  ['Stateless agents', 'Each agent receives a descriptor plus prior outputs, produces artifacts, and has no side effects beyond its declared outputs.'],
  ['Incremental delivery', 'Each phase produces shippable artifacts. Later phases extend earlier ones without blocking delivery.'],
]

// ─── Usage data ───────────────────────────────────────────────────────────────

const IMPORT_TABLE = [
  ['@arvo/react', "'@arvo/react' only"],
  ['@arvo/js', "'@arvo/js', '@arvo/js/plugin', '@arvo/js/auto'"],
  ['@arvo/styles', "'@arvo/styles', '@arvo/styles/base', '@arvo/styles/mixins/*', '@arvo/styles/css'"],
  ['@arvo/tokens', "'@arvo/tokens/scss' (and sub-paths), '@arvo/tokens/css'"],
  ['@arvo/assets', "'@arvo/assets/fonts', '@arvo/assets/icons', '@arvo/assets/illustrations'"],
  ['@arvo/core', '(none — internal to framework wrappers)'],
  ['@arvo/utils', '(none — internal to framework wrappers)'],
  ['@arvo/test-utils', '(none — internal)'],
]

const NAMING_TABLE = [
  ['React component', 'Arvo{PascalName}', 'ArvoButton, ArvoCombobox'],
  ['React props type', 'Arvo{PascalName}Props', 'ArvoButtonProps'],
  ['JS component class', 'Arvo{PascalName}', 'ArvoButton, ArvoCombobox'],
  ['JS options type', 'Arvo{PascalName}Options', 'ArvoButtonOptions'],
  ['BEM block', 'arvo-{abbr}', 'arvo-btn, arvo-cb'],
  ['Component CSS var', '--arvo-{abbr}-{property}', '--arvo-btn-bg-color'],
  ['Custom DOM event', '{abbr}:{action}', 'btn:loading, cb:change'],
]

const VERSION_BUMP = [
  ['New component or new prop', 'Minor'],
  ['Bug fix or style adjustment', 'Patch'],
  ['Token value change', 'Patch'],
  ['Token or prop removed / renamed', 'Major'],
  ['API breaking change', 'Major'],
]

const ANTI_PATTERNS = [
  ['Deep imports', 'Never import from @arvo/*/src/* or @arvo/*/dist/*'],
  ['Internal selector coupling', 'Never write CSS targeting .arvo-{abbr}__* from outside the library'],
  ['Direct DOM mutation', 'Never reach into the component DOM and mutate it directly'],
  ['Manual prop mutation', 'Never mutate props/options object references after initialization'],
  ['Undocumented event dependence', 'Never rely on internal custom events not listed in the docs'],
  ['Hardcoded token values', 'Never hardcode #hex or px values that belong in tokens'],
  ['Copy-paste forking', 'Never copy a component source into your app to customize it'],
  ['!important overrides', 'Never use !important against arvo-* selectors'],
  ['Tests on internal markup', 'Never assert on .arvo-* classnames or internal DOM structure in tests'],
  ['Skipping release notes', 'Always read the changeset before upgrading any @arvo/* version'],
  ['Mixing framework boundaries', 'Never mix @arvo/react and @arvo/js for the same component instance'],
  ['Experimental APIs in production', 'Never use APIs not in the published documentation'],
]

// ─── Architecture data ────────────────────────────────────────────────────────

const TECH_STACK = [
  ['Package manager', 'pnpm', '9.x'],
  ['Build orchestration', 'Turborepo', '2.x'],
  ['Library bundler', 'Vite (library mode)', '6.x'],
  ['Language', 'TypeScript (strict)', '5.5+'],
  ['Styles', 'SCSS (Dart Sass)', '1.86+'],
  ['Testing', 'Vitest + Testing Library + jsdom', '3.x'],
  ['Component explorer', 'Storybook', '10.x'],
  ['Versioning', 'Changesets', '2.27+'],
  ['Runtime', 'Node.js', '>= 20'],
]

const CORE_MODULES = [
  ['overlay/', 'Stack management, z-index allocation, backdrop, outside-click/Escape/popstate dismissal'],
  ['position/', 'Placement resolution, flip/shift, scroll-aware updates, virtual anchor support'],
  ['focus/', 'Tab cycling, focus restoration on overlay close, roving tabindex'],
  ['keyboard/', 'Arrow key navigation, Escape handling, Enter/Space activation'],
  ['animation/', 'CSS transition orchestration, reduced-motion detection'],
  ['mask/', 'Input masking'],
]

const AGENTS = [
  ['Orchestrator', 'Coordinates agent sequence, manages checkpoints, handles errors'],
  ['Shared Pattern', 'Implements reusable SCSS mixins + @arvo/utils DOM utilities before component work'],
  ['Scaffolding', 'Generates boilerplate files across all packages from a component descriptor'],
  ['SCSS Implementation', 'Writes full component SCSS with tokens, states, BEM structure, loading pattern'],
  ['React Implementation', 'Writes React component with props, refs, hooks, ARIA attributes'],
  ['JS Implementation', 'Writes vanilla JS class with initialize/destroy lifecycle, matching React parity'],
  ['Test Generator', 'Generates Vitest tests for React + JS — props, states, a11y, keyboard, parity'],
  ['Drift Checker', 'Compares React vs JS output for prop/event/method/CSS parity; blocks on critical drift'],
  ['Doc Generator', 'Generates Storybook stories + documentation pages'],
  ['Reviewer', 'Enforces naming conventions, accessibility rules, consistency'],
]

const WORKFLOWS = [
  ['New Component', 'Component does not exist yet', 'Pre-flight → Scaffolding → SCSS → React → JS → Tests → Drift → Docs → Review'],
  ['Enhancement', 'New prop/method/variant (additive)', 'Update Descriptor → SCSS → React → JS → Tests → Drift → Docs → Review'],
  ['Rework', 'Significant changes — renames, removals, API restructure', 'Delta Analysis → All Impl → Migration Guide → Review'],
  ['Bug Fix', 'Targeted fix', 'Fix Implementation → Regression Test → Drift → Validate'],
  ['Documentation', 'Create or update stories and docs pages', 'Generate → Review → Validate → Update STATUS.md'],
]

const DIST_MATRIX = [
  ['@arvo/tokens', 'src/', 'SCSS', './scss and sub-paths'],
  ['@arvo/styles', 'src/', 'SCSS', '., ./base, ./mixins/*'],
  ['@arvo/core', 'dist/', 'ESM, CJS, .d.ts', '.'],
  ['@arvo/utils', 'dist/', 'ESM, CJS, .d.ts', '.'],
  ['@arvo/react', 'dist/', 'ESM, CJS, .d.ts', '.'],
  ['@arvo/js', 'dist/', 'ESM, CJS, .d.ts', '., ./plugin, ./auto'],
]

export default function Developers() {
  const [activeTab, setActiveTab] = useState('Overview')

  const sections = useMemo(() => {
    if (activeTab === 'Overview') return [
      { id: 'mission', label: 'Mission' },
      { id: 'audiences', label: 'Audiences' },
      { id: 'packages', label: 'Package inventory' },
      { id: 'principles', label: 'Guiding principles' },
    ]
    if (activeTab === 'Usage') return [
      { id: 'safe-imports', label: 'Safe imports' },
      { id: 'component-api', label: 'Component API' },
      { id: 'styling', label: 'Styling & tokens' },
      { id: 'versioning', label: 'Versioning' },
      { id: 'anti-patterns', label: 'Anti-patterns' },
      { id: 'a11y', label: 'Accessibility' },
    ]
    if (activeTab === 'Architecture') return [
      { id: 'system-overview', label: 'System overview' },
      { id: 'tech-stack', label: 'Tech stack' },
      { id: 'core-modules', label: 'Core modules' },
      { id: 'multi-framework', label: 'Multi-framework' },
      { id: 'agent-pipeline', label: 'Agent pipeline' },
      { id: 'workflows', label: 'Workflows' },
      { id: 'distribution', label: 'Distribution' },
    ]
    return []
  }, [activeTab])

  return (
    <PageWithToc sections={sections}>
      <div className="space-y-8">
        <PageHeader
          title="For Developers"
          description="A dual-platform component library (React + vanilla JS) backed by shared design tokens, SCSS styles, framework-agnostic core utilities, and an agent-driven development pipeline — distributed as scoped npm packages via Azure Artifacts."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}
        />

        <DocTabs tabs={TABS} activeTab={activeTab} onSelect={setActiveTab} />

        {/* ─── Overview ─────────────────────────────────────────────────────── */}
        {activeTab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="mission" title="Mission">
              <DocParagraph>
                Arvo is the canonical, packaged design system for o9 platform applications. It is treated the same as any external packaged library — its development is intentionally separate from product UI work. Platform Compliance, NovaAI/Kibo migrations, and other improvements live elsewhere.
              </DocParagraph>
              <DocCallout title="Scope discipline">
                Do not mix Arvo scope with product sprint work. Arvo is an external, packaged system that platform UI consumes — it is not a shared development layer.
              </DocCallout>
            </DocSection>

            <DocSection id="audiences" title="Audiences">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="border p-5 dark:border-neutral-700" data-arvo-card="light">
                  <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white m-0 mb-2">Consumers</h3>
                  <p className="text-sm text-arvo-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Building product UIs against <DocCode>@arvo/*</DocCode>. See the <strong>Usage</strong> tab for the public contract: safe imports, props, styling, versioning, and anti-patterns.
                  </p>
                </div>
                <div className="border p-5 dark:border-neutral-700" data-arvo-card="light">
                  <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white m-0 mb-2">Contributors</h3>
                  <p className="text-sm text-arvo-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Building or maintaining <DocCode>@arvo/*</DocCode> itself. See the <strong>Architecture</strong> tab for the system design, agent pipeline, core modules, and contributor workflows.
                  </p>
                </div>
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
          </div>
        )}

        {/* ─── Usage ────────────────────────────────────────────────────────── */}
        {activeTab === 'Usage' && (
          <div className="space-y-12">
            <DocCallout title="Rule">
              Only consume what <DocCode>@arvo/*</DocCode> explicitly exposes. Anything not listed in this tab is private and can change in any release without a version bump.
            </DocCallout>

            <DocSection id="safe-imports" title="Safe imports">
              <DocParagraph>
                For every package, "public" is defined by the <DocCode>exports</DocCode> field in its <DocCode>package.json</DocCode>. Every other path — including anything inside <DocCode>dist/</DocCode> or <DocCode>src/</DocCode> — is private.
              </DocParagraph>
              <div className="border overflow-hidden dark:border-neutral-700">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Package</th>
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Safe entry points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {IMPORT_TABLE.map(([pkg, safe]) => (
                      <tr key={pkg} className="border-t dark:border-neutral-700">
                        <td className={`py-2 px-3 font-mono text-sm ${DOC_TABLE_FIRST_COLUMN_CLASS}`}>{pkg}</td>
                        <td className="py-2 px-3 font-mono text-arvo-light-secondary dark:text-neutral-400 text-xs">{safe}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <CodeBlock
                language="tsx"
                label="React — single barrel"
                code={`import { ArvoButton, ArvoTextbox, ArvoSelect, OverlayProvider } from '@arvo/react';`}
              />
              <CodeBlock
                language="js"
                label="Vanilla JS — three documented entry points"
                code={`import { ArvoButton } from '@arvo/js';                  // direct class usage
import { registerArvoPlugins } from '@arvo/js/plugin';    // jQuery plugins
import '@arvo/js/auto';                                    // auto-initialize all`}
              />
            </DocSection>

            <DocSection id="component-api" title="Component API">
              <DocParagraph>All component names, props, and class names follow consistent naming conventions.</DocParagraph>
              <div className="border overflow-hidden dark:border-neutral-700">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Item</th>
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Pattern</th>
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    {NAMING_TABLE.map(([item, pattern, example]) => (
                      <tr key={item} className="border-t dark:border-neutral-700">
                        <td className={`py-2 px-3 ${DOC_TABLE_FIRST_COLUMN_CLASS}`}>{item}</td>
                        <td className="py-2 px-3 font-mono text-arvo-light-secondary dark:text-neutral-400 text-xs">{pattern}</td>
                        <td className="py-2 px-3 font-mono text-arvo-light-secondary dark:text-neutral-400 text-xs">{example}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white mt-4">React — props</h3>
              <DocList items={[
                <span key="1">All components use <DocCode>forwardRef</DocCode> and extend native HTML element attributes.</span>,
                <span key="2">Boolean props: <DocCode>isDisabled</DocCode>, <DocCode>isLoading</DocCode>, <DocCode>isRequired</DocCode>, <DocCode>hasError</DocCode>.</span>,
                <span key="3">State control: <DocCode>value</DocCode> + <DocCode>onChange</DocCode> for controlled; omit for uncontrolled.</span>,
                <span key="4"><DocCode>isLoading</DocCode> sets <DocCode>aria-busy</DocCode> and suppresses interaction callbacks.</span>,
              ]} />

              <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white mt-4">Vanilla JS — class-based lifecycle</h3>
              <CodeBlock
                language="js"
                code={`const btn = ArvoButton.initialize(element, { variant: 'primary' });
btn.disabled(true);   // setter: disable
btn.disabled();       // getter: returns true
btn.destroy();        // cleanup`}
              />
              <DocList items={[
                <span key="1">Dual-purpose getter/setter: <DocCode>disabled()</DocCode> reads; <DocCode>disabled(true)</DocCode> sets.</span>,
                <span key="2">Toggle: <DocCode>toggle()</DocCode> flips; <DocCode>toggle(true)</DocCode> forces on; <DocCode>toggle(false)</DocCode> forces off.</span>,
                <span key="3">Value: <DocCode>value()</DocCode> reads; <DocCode>value(newVal)</DocCode> sets.</span>,
              ]} />
            </DocSection>

            <DocSection id="styling" title="Styling & tokens">
              <DocCallout title="Rule">
                Style through tokens and per-component CSS variables only. Never target <DocCode>.arvo-*</DocCode> selectors from your app, never use <DocCode>!important</DocCode>, never copy SCSS source.
              </DocCallout>

              <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white">Two safe layers</h3>
              <DocList items={[
                <span key="1"><DocStrong>Global tokens</DocStrong> — <DocCode>var(--arvo-color-*) var(--arvo-space-*) var(--arvo-font-size-*)</DocCode> etc. These are stable across releases.</span>,
                <span key="2"><DocStrong>Per-component CSS variables</DocStrong> — <DocCode>--arvo-{`{abbr}`}-{`{property}`}</DocCode> documented on each component page. Set on the component's root element to customize it.</span>,
              ]} />
              <CodeBlock
                language="scss"
                label="Token usage in your app"
                code={`// Global token — stable across releases
.my-layout { gap: var(--arvo-space-4); }

// Per-component variable — documented on the Button page
.my-toolbar .arvo-btn { --arvo-btn-min-width: 120px; }`}
              />

              <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white mt-4">SCSS imports (app-side)</h3>
              <CodeBlock
                language="scss"
                code={`@use '@arvo/styles';                          // full bundle
@use '@arvo/styles/mixins/form-input';        // specific mixin
@use '@arvo/tokens/scss/colors';              // token sub-path`}
              />

              <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white mt-4">What semver does NOT protect</h3>
              <DocList items={[
                'Internal classnames and their presence on specific DOM nodes',
                'Internal SCSS variable names or mixin signatures not in the public API',
                'The shape of the rendered HTML beyond what the component docs specify',
              ]} />
            </DocSection>

            <DocSection id="versioning" title="Versioning">
              <DocParagraph>
                All packages use lockstep semantic versioning via Changesets. A release bumps all packages together even if only one changed.
              </DocParagraph>
              <div className="border overflow-hidden dark:border-neutral-700">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Change type</th>
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
                <DocStrong>What semver protects:</DocStrong> exported names, documented prop/option shapes, method signatures, public events, token names, per-component CSS variable names.
              </DocParagraph>
              <DocParagraph>
                <DocStrong>Upgrade practice:</DocStrong> Read the changeset before every upgrade. Run a regression pass before adopting. Pin the full lockstep set (<DocCode>"@arvo/*": "x.y.z"</DocCode>) — never mix versions.
              </DocParagraph>
            </DocSection>

            <DocSection id="anti-patterns" title="Anti-patterns">
              <DocParagraph>These 12 patterns cause the majority of upgrade failures and visual regressions.</DocParagraph>
              <div className="border overflow-hidden dark:border-neutral-700">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white w-8">#</th>
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Anti-pattern</th>
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Rule</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ANTI_PATTERNS.map(([name, rule], i) => (
                      <tr key={name} className="border-t dark:border-neutral-700">
                        <td className="py-2 px-3 font-mono text-xs text-arvo-light-secondary dark:text-neutral-500">{i + 1}</td>
                        <td className={`py-2 px-3 font-medium ${DOC_TABLE_FIRST_COLUMN_CLASS}`}>{name}</td>
                        <td className="py-2 px-3 text-arvo-light-secondary dark:text-neutral-400">{rule}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DocSection>

            <DocSection id="a11y" title="Accessibility">
              <DocParagraph>
                Arvo components ship in an accessible state — correct roles, ARIA wiring, focus management, and keyboard support are built in. Your responsibility is to preserve the contract.
              </DocParagraph>
              <DocList items={[
                <span key="1">Provide <DocCode>label</DocCode> (or <DocCode>aria-label</DocCode>) on every icon-only control and every form input.</span>,
                <span key="2">Never override <DocCode>role</DocCode>, strip <DocCode>aria-*</DocCode> attributes, remove focus styles, or re-implement keyboard handlers the component already provides.</span>,
                <span key="3">Use the dedicated dropdown/menu/popover components rather than manually wiring a button to a popover — they handle ARIA relationships automatically.</span>,
                <span key="4">Don't remove or bypass the focus trap for modal overlays.</span>,
              ]} />
              <DocCallout title="Accessibility section">
                Component keyboard patterns, ARIA guarantees, screen reader behavior, and testing guidance live in the{' '}
                <Link to="/accessibility" className="underline">Accessibility</Link> section.
                The{' '}
                <Link to="/accessibility/keyboard-and-focus" className="underline">Keyboard & Focus</Link> and{' '}
                <Link to="/accessibility/screen-reader-and-aria" className="underline">Screen Reader & ARIA</Link> pages
                include developer-specific notes on what each Arvo component provides out of the box.
              </DocCallout>
            </DocSection>
          </div>
        )}

        {/* ─── Architecture ─────────────────────────────────────────────────── */}
        {activeTab === 'Architecture' && (
          <div className="space-y-12">
            <DocSection id="system-overview" title="System overview">
              <DocParagraph>The system is a layered monorepo. Tokens feed styles; styles and core feed both framework wrappers; assets ship side-effecting CSS for icon and web fonts.</DocParagraph>
              <CodeBlock
                language="text"
                label="Layered monorepo (top to bottom)"
                code={`┌──────────────────────────────────────────────────────┐
│  Consumers: product applications                     │
│  └─ install @arvo/* via Azure Artifacts              │
└──────────────────────────────────────────────────────┘
          ▲                            ▲
          │                            │
┌──────────────────┐        ┌──────────────────┐
│ @arvo/react      │        │ @arvo/js         │
│  React adapters  │        │  JS classes,     │
│  hooks, providers│        │  jQuery plugins  │
└──────────────────┘        └──────────────────┘
          ▲                            ▲
          └────────────┬───────────────┘
                       │
          ┌────────────────────────┐
          │ @arvo/core (behaviour) │  @arvo/utils (DOM helpers)
          └────────────────────────┘
                       ▲
          ┌────────────────────────┐
          │ @arvo/styles  (SCSS)   │  @arvo/assets (icon font, fonts)
          └────────────────────────┘
                       ▲
          ┌────────────────────────┐
          │ @arvo/tokens (SCSS)    │
          └────────────────────────┘`}
              />
              <DocParagraph>
                Peer dependencies (not bundled): <DocCode>react ^18 || ^19</DocCode> and <DocCode>react-dom</DocCode> for <DocCode>@arvo/react</DocCode>; <DocCode>jquery ^3.7</DocCode> for <DocCode>@arvo/js</DocCode>.
              </DocParagraph>
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

            <DocSection id="core-modules" title="Core modules (@arvo/core)">
              <DocParagraph>
                Framework-agnostic behavior modules consumed by both <DocCode>@arvo/react</DocCode> (via hooks) and <DocCode>@arvo/js</DocCode> (via direct import). This ensures React and JS share the same overlay, focus, and keyboard primitives structurally — not by convention.
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

            <DocSection id="multi-framework" title="Multi-framework">
              <DocParagraph>
                Two framework targets ship from a single architectural source. <DocCode>@arvo/core</DocCode> is framework-agnostic so React and vanilla JS adapters share the same overlay, focus, and keyboard primitives.
              </DocParagraph>

              <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white">React</h3>
              <DocList items={[
                <span key="1">Every component uses <DocCode>forwardRef</DocCode> and extends native HTML element attributes.</span>,
                <span key="2">Hooks (<DocCode>useOverlay</DocCode>, <DocCode>useFocusTrap</DocCode>, <DocCode>useKeyboardNav</DocCode>) wrap <DocCode>@arvo/core</DocCode> modules.</span>,
                <span key="3"><DocCode>OverlayProvider</DocCode> configures z-index layering and route-change behavior at the app level.</span>,
              ]} />
              <CodeBlock
                language="tsx"
                label="Provider setup (once at app root)"
                code={`import { OverlayProvider, TooltipProvider, ArvoToastProvider } from '@arvo/react';

<OverlayProvider>
  <TooltipProvider delay={400}>
    <ArvoToastProvider position="top-right">
      <App />
    </ArvoToastProvider>
  </TooltipProvider>
</OverlayProvider>`}
              />

              <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white mt-4">Vanilla JS</h3>
              <DocList items={[
                <span key="1">Class-based lifecycle: <DocCode>ArvoComponent.initialize(element, options)</DocCode> → instance methods → <DocCode>.destroy()</DocCode>.</span>,
                <span key="2">Three entry points: <DocCode>main</DocCode> (direct class), <DocCode>plugin</DocCode> (jQuery registration), <DocCode>auto</DocCode> (side-effect import).</span>,
              ]} />

              <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white mt-4">Parity enforcement</h3>
              <DocParagraph>
                React and JS produce identical HTML structure, CSS classes, ARIA attributes, and event semantics. The <DocStrong>Drift Checker</DocStrong> agent validates this on every change and blocks merge on critical divergence.
              </DocParagraph>
            </DocSection>

            <DocSection id="agent-pipeline" title="Agent pipeline">
              <DocParagraph>
                Components are built by a sequence of specialized AI agents. Each agent receives a component descriptor plus prior outputs, produces typed artifacts, and has no side effects beyond its declared outputs.
              </DocParagraph>
              <div className="border overflow-hidden dark:border-neutral-700">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Agent</th>
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Responsibility</th>
                    </tr>
                  </thead>
                  <tbody>
                    {AGENTS.map(([agent, resp]) => (
                      <tr key={agent} className="border-t dark:border-neutral-700">
                        <td className={`py-2 px-3 font-medium ${DOC_TABLE_FIRST_COLUMN_CLASS}`}>{agent}</td>
                        <td className="py-2 px-3 text-arvo-light-secondary dark:text-neutral-400">{resp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <DocParagraph>
                The component descriptor (<DocCode>.json</DocCode> file per component) is the single source of truth: name, abbreviation, props, events, ARIA patterns, supported sizes/variants, and which shared patterns the component depends on.
              </DocParagraph>
            </DocSection>

            <DocSection id="workflows" title="Contributor workflows">
              <div className="border overflow-hidden dark:border-neutral-700">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Workflow</th>
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">When</th>
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Agent steps</th>
                    </tr>
                  </thead>
                  <tbody>
                    {WORKFLOWS.map(([wf, when, steps]) => (
                      <tr key={wf} className="border-t dark:border-neutral-700">
                        <td className={`py-2 px-3 font-medium ${DOC_TABLE_FIRST_COLUMN_CLASS}`}>{wf}</td>
                        <td className="py-2 px-3 text-arvo-light-secondary dark:text-neutral-400">{when}</td>
                        <td className="py-2 px-3 font-mono text-xs text-arvo-light-secondary dark:text-neutral-400">{steps}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <DocParagraph>
                Shared patterns must be registered in <DocCode>SHARED-PATTERNS-REGISTRY.json</DocCode> with ready status before a component that depends on them can be scaffolded.
              </DocParagraph>
            </DocSection>

            <DocSection id="distribution" title="Distribution">
              <DocParagraph>
                Azure Artifacts serves as the private npm registry for <DocCode>@arvo</DocCode> scoped packages. The feed proxies <DocCode>npmjs.com</DocCode>, so a single registry serves both private and public packages.
              </DocParagraph>
              <div className="border overflow-hidden dark:border-neutral-700">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Package</th>
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Dist</th>
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Formats</th>
                      <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Entry points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DIST_MATRIX.map(([pkg, dist, fmt, entries]) => (
                      <tr key={pkg} className="border-t dark:border-neutral-700">
                        <td className={`py-2 px-3 font-mono text-sm ${DOC_TABLE_FIRST_COLUMN_CLASS}`}>{pkg}</td>
                        <td className="py-2 px-3 font-mono text-arvo-light-secondary dark:text-neutral-400">{dist}</td>
                        <td className="py-2 px-3 text-arvo-light-secondary dark:text-neutral-400">{fmt}</td>
                        <td className="py-2 px-3 font-mono text-xs text-arvo-light-secondary dark:text-neutral-400">{entries}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <DocParagraph>
                Version promotion: <DocCode>@Local</DocCode> (CI) → <DocCode>@Prerelease</DocCode> (QA/staging) → <DocCode>@Release</DocCode> (production consumers).
              </DocParagraph>
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
