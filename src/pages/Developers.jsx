import { useMemo, useState } from 'react'
import CodeBlock from '../LayoutComponents/CodeBlock'
import DocTabs from '../LayoutComponents/DocTabs'
import DocTable from '../LayoutComponents/DocTable'
import GrayBgCard from '../LayoutComponents/GrayBgCard'
import PageHeader from '../LayoutComponents/PageHeader'
import PageWithToc from '../LayoutComponents/PageWithToc'
import WhiteBgCard from '../LayoutComponents/WhiteBgCard'

const TABS = ['Overview', 'Technical overview']

const devIcon = (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
)

const PACKAGE_INCLUDES = [
  { pkg: '@o9ds/tokens', role: 'Design tokens (color, type, space, motion) as the single source of truth for product UI.' },
  { pkg: '@o9ds/styles', role: 'Shared SCSS/CSS foundations, global resets, and asset references aligned with tokens.' },
  { pkg: 'Framework components', role: 'React and platform (e.g. jQuery) implementations that share behavior and visual parity.' },
  { pkg: '@o9ds/core', role: 'Framework-agnostic utilities: state helpers, composition patterns, and shared component logic.' },
  { pkg: '@o9ds/utils', role: 'DOM-focused helpers for legacy surfaces and incremental adoption without duplicating behavior.' },
  { pkg: 'Documentation', role: 'This site and internal references that describe usage, API, and accessibility expectations.' },
  { pkg: '@o9ds/test-utils', role: 'Render helpers, matchers, and fixtures for unit and integration tests across packages.' },
]

const TECH_ARCH_ROWS = [
  { area: 'Monorepo setup', detail: 'Packages live in one repository with shared tooling, lint rules, and release semantics.' },
  { area: 'File structure', detail: 'Clear boundaries: tokens and styles at the bottom; core and utils next; framework adapters on top.' },
  { area: 'Package dependency graph', detail: 'Acyclic flow: tokens → styles → core → framework packages; test-utils is a dev-facing leaf.' },
  { area: 'Build pipeline', detail: 'Per-package builds (tokens JSON/SCSS, TS/JS bundles, type declarations) with workspace-aware scripts.' },
  { area: 'Distribution & consumption', detail: 'Published npm packages plus documented paths for SCSS entry points and overlay configuration.' },
  { area: 'Shared layer', detail: 'Cross-cutting contracts (props, BEM, loading states) enforced so both platforms stay aligned.' },
  { area: 'Versioning', detail: 'SemVer across packages; coordinated releases when token or core breaking changes affect consumers.' },
]

const AGENTS = [
  { name: 'Scaffolding & implementation', desc: 'Generate or extend components following descriptors, BEM, and standard props.' },
  { name: 'Documentation', desc: 'Keep API tables, examples, and a11y notes in sync with code changes.' },
  { name: 'Quality & tests', desc: 'Propose or update tests and Storybook stories to match acceptance criteria.' },
]

const PIPELINES = [
  { name: 'New component', desc: 'Design intake → Code Connect mapping → implementation → Storybook → docs → review.' },
  { name: 'Bug fix', desc: 'Reproduce → minimal fix → regression test → patch version → changelog entry.' },
]

const RELIABILITY = [
  'Descriptors and checklists reduce ambiguity so outputs stay consistent across runs.',
  'CI runs the same lint, test, and build steps as local workflows.',
  'Human review remains the gate for API changes and token breaks.',
]

const PACKAGE_RESPONSIBILITY_COLS = [
  { key: 'pkg', label: 'Package', mono: true },
  { key: 'role', label: 'Responsibility' },
]

const PACKAGE_RESPONSIBILITY_ROWS = [
  { pkg: '@o9ds/tokens', role: 'Authoritative design decisions exported for code and tools.' },
  { pkg: '@o9ds/styles', role: 'Global styles, mixins, and imports that consume tokens.' },
  { pkg: '@o9ds/core', role: 'Shared logic and types without tying to a specific renderer.' },
  { pkg: '@o9ds/utils', role: 'DOM utilities for non-React or hybrid pages.' },
  { pkg: 'Framework packages', role: 'Components and adapters per stack, built on core + tokens.' },
  { pkg: '@o9ds/test-utils', role: 'Stable test harness for components and accessibility checks.' },
]

const QUALITY_GATES_COLS = [
  { key: 'gate', label: 'Gate' },
  { key: 'detail', label: 'Purpose' },
]

const QUALITY_GATES_ROWS = [
  { gate: 'Lint & typecheck', detail: 'Enforce style and catch contract breaks before merge.' },
  { gate: 'Unit & integration tests', detail: 'Protect behavior for core utilities and components.' },
  { gate: 'Visual / Storybook (where applicable)', detail: 'Catch unintended UI drift on critical stories.' },
  { gate: 'Accessibility checks', detail: 'Automated rules plus manual spot checks for complex widgets.' },
]

function Section({ id, title, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white mb-3">{title}</h2>
      {children}
    </section>
  )
}

function Subsection({ id, title, children }) {
  return (
    <div id={id} className="scroll-mt-24 space-y-3">
      <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">{title}</h3>
      {children}
    </div>
  )
}

function ProseP({ children }) {
  return <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">{children}</p>
}

export default function Developers() {
  const [activeTab, setActiveTab] = useState('Overview')

  const onThisPageSections = useMemo(() => {
    if (activeTab === 'Overview') {
      return [
        { id: 'dev-intro', label: 'Introduction' },
        { id: 'dev-system-architecture', label: 'System architecture' },
        { id: 'dev-library-includes', label: 'What the library includes' },
        { id: 'dev-technical-architecture', label: 'Technical architecture' },
        { id: 'dev-agent-orchestration', label: 'Agent orchestration' },
        { id: 'dev-collaboration', label: 'Developer collaboration' },
        { id: 'dev-figma', label: 'Figma & design-to-code' },
      ]
    }
    return [
      { id: 'tech-architecture', label: 'System architecture' },
      { id: 'tech-packages', label: 'Package responsibilities' },
      { id: 'tech-tokens', label: 'Token system' },
      { id: 'tech-core-adapters', label: 'Shared core & adapters' },
      { id: 'tech-components', label: 'Component architecture' },
      { id: 'tech-workflow', label: 'Agentic workflow & pipelines' },
      { id: 'tech-testing-docs', label: 'Testing & documentation' },
      { id: 'tech-cicd', label: 'CI/CD & versioning' },
      { id: 'tech-consuming', label: 'Consuming the design system' },
      { id: 'tech-directory', label: 'Directory & safeguards' },
    ]
  }, [activeTab])

  return (
    <PageWithToc sections={onThisPageSections}>
      <div className="max-w-3xl space-y-10 pb-16">
        <PageHeader
          title="For Developers"
          description="How the o9 Design System is structured as a monorepo, how packages relate, and how we build, test, document, and ship UI for multiple platforms—including agents, Figma, and quality gates."
          icon={devIcon}
        />

        <DocTabs tabs={TABS} activeTab={activeTab} onSelect={setActiveTab} />

        {activeTab === 'Overview' && (
          <div className="space-y-12 pt-2">
            <section id="dev-intro" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Overview</h2>
              <ProseP>
                o9DS is delivered as a set of versioned packages with a shared token layer and framework-specific implementations.
                The same conceptual model applies whether you ship React, jQuery, or a mix: tokens and core behavior sit below; adapters
                render and wire events for each environment.
              </ProseP>
              <WhiteBgCard>
                <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                  Use this page as the map: first understand <strong className="text-o9ds-light-primary dark:text-white font-medium">what ships</strong> in
                  the library, then how the <strong className="text-o9ds-light-primary dark:text-white font-medium">repo and build</strong> are organized,
                  how <strong className="text-o9ds-light-primary dark:text-white font-medium">agents and pipelines</strong> accelerate work, and how{' '}
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">Figma and Code Connect</strong> tie design to implementation.
                </p>
              </WhiteBgCard>
            </section>

            <Section id="dev-system-architecture" title="System architecture">
              <ProseP>
                The system stacks design tokens and shared styles at the foundation, layers framework-agnostic core utilities, and exposes
                components through React and platform adapters. Documentation and test utilities wrap the same contracts so examples,
                tests, and production builds stay aligned.
              </ProseP>
            </Section>

            <Section id="dev-library-includes" title="1. What the library includes">
              <DocTable
                columns={PACKAGE_RESPONSIBILITY_COLS}
                rows={PACKAGE_INCLUDES.map((r) => ({ pkg: r.pkg, role: r.role }))}
              />
              <p className="mt-4 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                Framework components are consumed from the package that matches your stack; they depend on tokens and styles so visual
                changes propagate when you bump versions consistently.
              </p>
            </Section>

            <Section id="dev-technical-architecture" title="2. Technical architecture">
              <DocTable columns={[{ key: 'area', label: 'Topic' }, { key: 'detail', label: 'Summary' }]} rows={TECH_ARCH_ROWS} />
            </Section>

            <Section id="dev-agent-orchestration" title="3. Agent orchestration">
              <Subsection id="agent-overview" title="Overview">
                <ProseP>
                  Agents automate repeatable steps—scaffolding, refactors, doc updates—using the same rules as humans: package boundaries,
                  BEM, standard props, and test expectations. They augment the team; they do not replace design or architecture review.
                </ProseP>
              </Subsection>
              <div className="space-y-6 mt-6">
                <Subsection id="agent-list" title="Agents">
                  <div className="grid gap-4 sm:grid-cols-1">
                    {AGENTS.map((a) => (
                      <GrayBgCard key={a.name} title={a.name} desc={a.desc} />
                    ))}
                  </div>
                </Subsection>
                <Subsection id="agent-pipelines" title="Pipelines">
                  <DocTable columns={[{ key: 'name', label: 'Pipeline' }, { key: 'desc', label: 'Flow' }]} rows={PIPELINES} />
                </Subsection>
                <Subsection id="agent-reliability" title="Reliability mechanisms">
                  <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
                    {RELIABILITY.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </Subsection>
                <Subsection id="agent-descriptors" title="Component descriptors">
                  <ProseP>
                    Descriptors capture the contract for a component: anatomy, props, states, and accessibility notes. Agents and reviewers
                    use them as the checklist so generated code matches the design system’s expectations.
                  </ProseP>
                </Subsection>
              </div>
            </Section>

            <Section id="dev-collaboration" title="4. Developer collaboration">
              <Subsection id="collab-library" title="Working with the library">
                <ProseP>
                  Prefer importing from published package entry points; avoid deep paths that bypass semver guarantees. When you need a new
                  token or variant, propose it at the token layer first so all consumers inherit the change predictably.
                </ProseP>
              </Subsection>
              <div className="space-y-6 mt-4">
                <Subsection id="collab-agents-local" title="Using agents locally">
                  <ProseP>
                    Run the same prompts and scripts the team documents in the repo README. Keep local branches small and pair agent output
                    with Storybook or the doc site preview before opening a PR.
                  </ProseP>
                </Subsection>
                <Subsection id="collab-contribution" title="Contribution workflow">
                  <ProseP>
                    Branch from main, implement with tests and docs, run the workspace checks, then request review from design system
                    owners for API or token changes. Follow the changelog and versioning policy for consumer-facing breaks.
                  </ProseP>
                </Subsection>
              </div>
            </Section>

            <Section id="dev-figma" title="5. Figma integration & design-to-code">
              <Subsection id="figma-code-connect" title="Code Connect">
                <ProseP>
                  Code Connect maps Figma components to repository components so design tools can surface real props and usage. Keep mappings
                  updated when component APIs or file structure changes.
                </ProseP>
              </Subsection>
              <div className="space-y-6 mt-6">
                <Subsection id="figma-workflow" title="Design-to-implementation workflow">
                  <ProseP>
                    Designers work in libraries linked to tokens; engineers implement against the same names in code. The handoff is
                    anchored on tokens and descriptors, not one-off measurements.
                  </ProseP>
                </Subsection>
                <Subsection id="figma-scaling" title="Scaling Code Connect">
                  <ProseP>
                    Add mappings incrementally by squad or domain. Prioritize high-traffic components and shared patterns first; automate
                    validation where the pipeline can diff Figma structure against expected component slots.
                  </ProseP>
                </Subsection>
              </div>
            </Section>
          </div>
        )}

        {activeTab === 'Technical overview' && (
          <div className="space-y-12 pt-2">
            <section id="tech-architecture" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">System architecture</h2>
              <ProseP>
                The technical model separates <strong className="text-o9ds-light-primary dark:text-white font-medium">token authority</strong>,{' '}
                <strong className="text-o9ds-light-primary dark:text-white font-medium">shared implementation</strong>, and{' '}
                <strong className="text-o9ds-light-primary dark:text-white font-medium">framework-specific rendering</strong>. That split keeps
                branding and behavior consistent while allowing each platform to integrate with its own event and lifecycle model.
              </ProseP>
            </section>

            <section id="tech-packages" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Package responsibilities</h2>
              <DocTable columns={PACKAGE_RESPONSIBILITY_COLS} rows={PACKAGE_RESPONSIBILITY_ROWS} />
            </section>

            <section id="tech-tokens" className="scroll-mt-24 space-y-6">
              <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Token system</h2>
              <Subsection id="tokens-three-layer" title="Three-layer architecture">
                <ProseP>
                  Tokens are typically organized as <strong className="text-o9ds-light-primary dark:text-white font-medium">primitive</strong> (raw palette and scales),{' '}
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">semantic</strong> (role-based names such as text primary or border subtle),
                  and <strong className="text-o9ds-light-primary dark:text-white font-medium">component</strong> (specific slots where semantics alone are not enough).
                  This keeps global theming predictable while allowing component-level refinement.
                </ProseP>
              </Subsection>
              <Subsection id="tokens-distribution" title="Token distribution">
                <ProseP>
                  @o9ds/tokens publishes artifacts consumed by SCSS, CSS variables, and runtime theme providers. Consumers should reference
                  semantic or component tokens in UI code; reach for primitives only inside token definitions or tooling.
                </ProseP>
              </Subsection>
            </section>

            <section id="tech-core-adapters" className="scroll-mt-24 space-y-6">
              <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Shared core & framework adapters</h2>
              <Subsection id="tech-shared-core" title="Shared core (@o9ds/core)">
                <ProseP>
                  Core holds state machines, composition helpers, and shared types so React and legacy bundles do not fork business rules.
                  Keep DOM APIs out of core when possible—push those to @o9ds/utils or the adapter layer.
                </ProseP>
              </Subsection>
              <Subsection id="tech-framework-adapters" title="Framework adapters">
                <ProseP>
                  Adapters translate core contracts into elements and event bindings: React components use hooks and props; jQuery or vanilla
                  modules attach to the DOM with the same class contract and aria patterns.
                </ProseP>
              </Subsection>
            </section>

            <section id="tech-components" className="scroll-mt-24 space-y-6">
              <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Component architecture</h2>
              <Subsection id="tech-dual-platform" title="Dual-platform pattern">
                <ProseP>
                  Interactive components aim for behavioral parity: keyboard order, focus management, and aria roles match across stacks even
                  when implementation details differ.
                </ProseP>
              </Subsection>
              <Subsection id="tech-bem" title="BEM naming">
                <ProseP>
                  Block__element--modifier classes keep styles traceable and avoid specificity wars. The block name aligns with the component
                  folder and documentation slug.
                </ProseP>
              </Subsection>
              <Subsection id="tech-standard-props" title="Standard props (interactive components)">
                <ProseP>
                  Common props include disabled, loading, and optional controlled value patterns. Document edge cases in the component page
                  so agents and humans apply them consistently.
                </ProseP>
              </Subsection>
              <Subsection id="tech-loading" title="Loading states">
                <ProseP>
                  Loading is a first-class state: it blocks duplicate submits, exposes aria-busy where appropriate, and uses the same
                  visual language (e.g. shimmer) defined in foundations.
                </ProseP>
              </Subsection>
            </section>

            <section id="tech-workflow" className="scroll-mt-24 space-y-6">
              <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Agentic development workflow</h2>
              <Subsection id="tech-agent-pipeline" title="Agent pipeline for new components">
                <ProseP>
                  Start from a descriptor and Figma reference, scaffold files in the correct package, add stories and tests, then wire docs.
                  CI verifies the checklist before merge.
                </ProseP>
              </Subsection>
              <Subsection id="tech-bug-pipeline" title="Bug fix pipeline">
                <ProseP>
                  Reproduce in Storybook or a minimal app, add a failing test where feasible, ship the smallest fix, and backport to supported
                  release lines per policy.
                </ProseP>
              </Subsection>
            </section>

            <section id="tech-testing-docs" className="scroll-mt-24 space-y-6">
              <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Testing strategy & documentation</h2>
              <Subsection id="tech-testing" title="Testing strategy">
                <ProseP>
                  Unit tests cover core logic; component tests focus on behavior and accessibility; integration tests protect critical flows.
                  @o9ds/test-utils keeps setup consistent across packages.
                </ProseP>
              </Subsection>
              <Subsection id="tech-doc-hybrid" title="Documentation (hybrid approach)">
                <ProseP>
                  Human-written guidance lives on this public site; generated tables and props come from source where possible to avoid drift.
                </ProseP>
              </Subsection>
              <Subsection id="tech-storybook" title="Storybook (internal dev tool)">
                <ProseP>
                  Storybook is the workshop for states, edge cases, and visual review. Stories are not a substitute for the public doc site
                  but they accelerate development and QA.
                </ProseP>
              </Subsection>
              <Subsection id="tech-docusaurus" title="Docusaurus (public documentation site)">
                <ProseP>
                  Where the organization also publishes Docusaurus, keep navigation and terminology aligned with this site so users see one
                  story. Link between sites for deep dives if needed.
                </ProseP>
              </Subsection>
            </section>

            <section id="tech-cicd" className="scroll-mt-24 space-y-6">
              <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">CI/CD and quality gates</h2>
              <Subsection id="tech-pipeline-stages" title="Pipeline stages">
                <ProseP>
                  Typical stages: install, lint, typecheck, test, build packages, and optionally publish artifacts or Storybook to a preview
                  channel.
                </ProseP>
              </Subsection>
              <Subsection id="tech-quality-gates" title="Quality gates (merge-blocking)">
                <DocTable columns={QUALITY_GATES_COLS} rows={QUALITY_GATES_ROWS} />
              </Subsection>
              <Subsection id="tech-versioning-detail" title="Versioning">
                <ProseP>
                  Semantic versioning applies per package. Breaking token or prop changes require a major bump and a migration note in the
                  changelog.
                </ProseP>
              </Subsection>
            </section>

            <section id="tech-consuming" className="scroll-mt-24 space-y-8">
              <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Consuming the design system</h2>
              <Subsection id="tech-react" title="React application">
                <ProseP>
                  Install the React package, import components from the public entry, and wrap the app with any required theme or token
                  provider documented for your version.
                </ProseP>
                <CodeBlock
                  code={`import { Button } from '@o9ds/react' // example package name

export function Example() {
  return <Button variant="primary" label="Save" />
}`}
                />
              </Subsection>
              <Subsection id="tech-jquery" title="jQuery / vanilla JavaScript application">
                <ProseP>
                  Use the platform bundle that mounts components from markup or imperative APIs. Keep class names and data attributes aligned
                  with documentation so upgrades do not break selectors.
                </ProseP>
              </Subsection>
              <Subsection id="tech-scss" title="Platform SCSS compilation">
                <ProseP>
                  Import token and style entry points in dependency order. Resolve paths through the bundler’s includePaths so shared partials
                  dedupe correctly across apps.
                </ProseP>
              </Subsection>
              <Subsection id="tech-overlay" title="Overlay configuration">
                <ProseP>
                  When the monorepo uses package overlays or local patches, document them in the consuming app README and pin versions.
                  Prefer upstream fixes in o9DS over long-lived forks.
                </ProseP>
              </Subsection>
            </section>

            <section id="tech-directory" className="scroll-mt-24 space-y-6">
              <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Directory structure</h2>
              <ProseP>
                Expect top-level packages (tokens, styles, core, utils, react, platform), plus <code className="font-mono text-sm text-o9ds-light-primary dark:text-white">docs/</code> or{' '}
                <code className="font-mono text-sm text-o9ds-light-primary dark:text-white">apps/</code> for examples and the doc site. Each component usually
                colocates styles, tests, and stories next to its implementation.
              </ProseP>

              <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white pt-4">Safeguards and rules</h2>
              <Subsection id="tech-safeguards-agents" title="Enforced by agents and CI">
                <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
                  <li>Package import boundaries and dependency rules.</li>
                  <li>Lint and type checks on every PR.</li>
                  <li>Required tests for risky changes (core, a11y, or token consumers).</li>
                </ul>
              </Subsection>
              <Subsection id="tech-safeguards-convention" title="Enforced by convention">
                <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
                  <li>BEM structure and file naming per contributor guide.</li>
                  <li>Descriptors and Storybook stories for new interactive components.</li>
                  <li>Design review for user-facing visual changes.</li>
                </ul>
              </Subsection>
            </section>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
