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
  { key: 'pkg', label: 'Package', mono: true, tone: 'package' },
  { key: 'role', label: 'Responsibility' },
]

const TECH_ARCH_COLS = [
  { key: 'area', label: 'Topic', tone: 'layer' },
  { key: 'detail', label: 'Summary' },
]

const PIPELINE_TABLE_COLS = [
  { key: 'name', label: 'Pipeline', mono: true, tone: 'agent' },
  { key: 'desc', label: 'Flow' },
]

const TECH_PACKAGE_DETAIL_COLS = [
  { key: 'pkg', label: 'Package', mono: true, tone: 'package' },
  { key: 'type', label: 'Type' },
  { key: 'build', label: 'Build' },
  { key: 'contains', label: 'What it contains' },
]

const TECH_PACKAGE_DETAIL_ROWS = [
  {
    pkg: '@o9ds/tokens',
    type: 'SCSS source',
    build: 'No build (distributed as source)',
    contains:
      'Color, spacing, typography, animation, border, and width tokens. Light/dark theme mappings. CSS custom properties for runtime theme switching.',
  },
  {
    pkg: '@o9ds/styles',
    type: 'SCSS source',
    build: 'No build (distributed as source)',
    contains:
      'Typography mixins, icon font (o9con), font-face declarations, illustrations (SVGs), loading-state mixins, form input patterns, and component SCSS files.',
  },
  {
    pkg: '@o9ds/core',
    type: 'TypeScript',
    build: 'Vite (ESM + CJS)',
    contains:
      'Overlay management hub, positioning engine, focus trap/restore, keyboard navigation, animation transitions. Framework-agnostic — no React or jQuery imports.',
  },
  {
    pkg: '@o9ds/react',
    type: 'TypeScript + JSX',
    build: 'Vite (ESM + CJS)',
    contains: 'React components using forwardRef, hooks wrapping @o9ds/core, and co-located Storybook stories.',
  },
  {
    pkg: '@o9ds/jquery',
    type: 'TypeScript',
    build: 'Vite (ESM + CJS)',
    contains:
      'jQuery/vanilla JS components using a class-based pattern with initialize/destroy lifecycle, consuming @o9ds/core directly.',
  },
  {
    pkg: '@o9ds/utils',
    type: 'TypeScript',
    build: 'Vite (ESM + CJS)',
    contains: 'Standalone DOM utilities (status indicator, inline alert, loading helpers).',
  },
  {
    pkg: '@o9ds/test-utils',
    type: 'TypeScript',
    build: 'No build (consumed as source)',
    contains:
      'React Testing Library wrappers, jsdom harness, parity assertion helpers, axe-core integration, mock token fixtures.',
  },
  {
    pkg: '@o9ds/docs',
    type: 'Docusaurus',
    build: 'Static site build',
    contains:
      'Public documentation: token reference, typography, iconography, component API pages, code examples, and getting-started guides.',
  },
]

const SHARED_CORE_MODULE_COLS = [
  { key: 'module', label: 'Module', mono: true, tone: 'module' },
  { key: 'purpose', label: 'Purpose' },
  { key: 'usedBy', label: 'Used by' },
]

const SHARED_CORE_MODULE_ROWS = [
  {
    module: 'overlay/overlay-hub',
    purpose: 'Registry of active overlays, stacking order, backdrop, outside click, route change',
    usedBy: 'Modal, Side Panel, Popover, Dropdown, Action Menu, Date Picker',
  },
  {
    module: 'position/position-engine',
    purpose: 'Floating element placement with flip/shift, container-relative mode',
    usedBy: 'Tooltip, Popover, Dropdown, Select, Date Picker',
  },
  {
    module: 'focus/focus-trap',
    purpose: 'Tab key wrapping inside overlays, focus restoration on close',
    usedBy: 'Modal, Side Panel, Popover',
  },
  {
    module: 'focus/tab-roving',
    purpose: 'Arrow key navigation within composite widgets',
    usedBy: 'Menu, Radio Group, Tab Bar',
  },
  {
    module: 'keyboard/arrow-nav',
    purpose: 'Arrow key list navigation',
    usedBy: 'Menu items, Select options, Listbox',
  },
  {
    module: 'keyboard/escape-handler',
    purpose: 'Escape key closes topmost overlay',
    usedBy: 'All overlays',
  },
  {
    module: 'animation/transition',
    purpose: 'CSS class-based enter/exit transitions',
    usedBy: 'All overlays',
  },
]

const STANDARD_INTERACTIVE_PROPS_COLS = [
  { key: 'prop', label: 'Prop', mono: true, tone: 'prop' },
  { key: 'type', label: 'Type', mono: true },
  { key: 'default', label: 'Default', mono: true },
  { key: 'description', label: 'Description' },
]

const BEM_NAMING_COLS = [
  { key: 'selector', label: 'CSS selector', mono: true, tone: 'code' },
  { key: 'role', label: 'BEM role' },
  { key: 'detail', label: 'Description' },
]

const BEM_NAMING_ROWS = [
  { selector: '.o9ds-btn', role: 'Block (component)', detail: 'The root of the component.' },
  { selector: '.o9ds-btn__label', role: 'Element (child part)', detail: 'Sub-part of the block; double underscore (`__`) separates element names.' },
  { selector: '.o9ds-btn__icon', role: 'Element', detail: 'Another child part of the block.' },
  { selector: '.o9ds-btn--primary', role: 'Modifier (variant)', detail: 'Visual variant; double hyphen (`--`) for modifiers.' },
  { selector: '.o9ds-btn--sm', role: 'Modifier (size)', detail: 'Size variant of the block.' },
  { selector: '.o9ds-btn.active', role: 'State (selected)', detail: 'Selected or active state via an additional class.' },
  { selector: '.o9ds-btn.loading', role: 'State (loading)', detail: 'Loading state via an additional class (often with aria-busy).' },
  { selector: '.o9ds-btn:disabled', role: 'State (disabled, native)', detail: 'Native disabled state via the :disabled pseudo-class.' },
]

const STANDARD_INTERACTIVE_PROPS_ROWS = [
  { prop: 'disabled', type: 'boolean', default: 'false', description: 'Prevents interaction' },
  { prop: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Component size' },
  {
    prop: 'variant',
    type: "'primary' | 'secondary' | 'tertiary' | 'outline' | 'danger'",
    default: 'varies',
    description: 'Visual style',
  },
  { prop: 'loading', type: 'boolean', default: 'false', description: 'Skeleton loading state' },
]

const O9DS_SYSTEM_ARCH_MERMAID = `graph LR
    subgraph Foundation ["Foundation Layer"]
        direction TB
        tokens["@o9ds/tokens"]
        utils["@o9ds/utils"]
        core["@o9ds/core"]
        styles["@o9ds/styles"]
    end

    subgraph Component ["Component Layer"]
        direction TB
        react["@o9ds/react"]
        jquery["@o9ds/jquery"]
    end

    subgraph Testing ["Testing Layer"]
        testutils["@o9ds/test-utils"]
    end

    metadata["Docs / metadata"]

    subgraph Tools ["Development Tools"]
        direction TB
        storybook["Storybook"]
        docusaurus["Docusaurus"]
    end

    %% Foundation internal
    tokens --> core
    tokens --> styles

    %% Into component layer
    tokens --> react
    tokens --> jquery
    utils --> react
    utils --> jquery
    core --> react
    core --> jquery
    styles --> react
    styles --> jquery

    %% Testing
    tokens --> testutils
    react --> testutils
    jquery --> testutils

    %% Docs metadata & tools
    styles --> metadata
    react --> metadata
    jquery --> metadata
    react --> storybook
    metadata --> docusaurus`

const QUALITY_GATES_COLS = [
  { key: 'gate', label: 'Gate', tone: 'gate' },
  { key: 'detail', label: 'Purpose' },
]

const QUALITY_GATES_ROWS = [
  { gate: 'Lint & typecheck', detail: 'Enforce style and catch contract breaks before merge.' },
  { gate: 'Unit & integration tests', detail: 'Protect behavior for core utilities and components.' },
  { gate: 'Visual / Storybook (where applicable)', detail: 'Catch unintended UI drift on critical stories.' },
  { gate: 'Accessibility checks', detail: 'Automated rules plus manual spot checks for complex widgets.' },
]

const AGENT_PIPELINE_TABLE_COLS = [
  { key: 'agent', label: 'Agent', mono: true, tone: 'agent' },
  { key: 'input', label: 'Input' },
  { key: 'output', label: 'Output' },
]

const AGENT_PIPELINE_TABLE_ROWS = [
  {
    agent: 'Scaffolding',
    input: 'Component descriptor JSON',
    output: 'SCSS skeleton, React stub, jQuery stub, test stubs',
  },
  {
    agent: 'Implementation',
    input: 'Scaffold + planning spec',
    output: 'Complete component code across all packages',
  },
  {
    agent: 'Test',
    input: 'Component source',
    output: 'Unit tests, accessibility tests, interaction tests',
  },
  {
    agent: 'Documentation',
    input: 'Source + descriptor',
    output: 'Storybook stories + Docusaurus MDX page',
  },
  {
    agent: 'Drift Detection',
    input: 'React + jQuery source',
    output: 'Parity report (critical mismatches block merge)',
  },
  {
    agent: 'Review/Validation',
    input: 'All changed files',
    output: 'Pass/fail on naming, consistency, accessibility',
  },
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

function ArrowBetweenStages() {
  return (
    <div
      className="flex items-center justify-center text-sky-500 dark:text-sky-400 shrink-0 px-1 py-2 lg:py-0 select-none"
      aria-hidden
    >
      <span className="text-2xl font-light leading-none lg:inline hidden">→</span>
      <span className="text-2xl font-light leading-none lg:hidden">↓</span>
    </div>
  )
}

function PipelineStage({ title, highlight, children }) {
  return (
    <div
      className={`rounded-lg border-2 p-4 flex-1 min-w-[min(100%,12rem)] ${
        highlight
          ? 'border-[#4a90e2] bg-[#e6f0ff] dark:bg-sky-950/45 dark:border-sky-500'
          : 'border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-900'
      }`}
    >
      <p className="text-xs font-bold uppercase tracking-wide text-o9ds-light-primary dark:text-white mb-3">{title}</p>
      {children}
    </div>
  )
}

function PipelineSubBox({ children, emphasize }) {
  return (
    <div
      className={`rounded border px-3 py-2 text-center text-sm font-medium ${
        emphasize
          ? 'border-[#4a90e2] bg-white/95 text-o9ds-light-primary dark:bg-neutral-950/80 dark:text-white dark:border-sky-400'
          : 'border-neutral-200 bg-white dark:bg-neutral-950 dark:border-neutral-600 dark:text-neutral-200'
      }`}
    >
      {children}
    </div>
  )
}

function AgentPipelineDiagram() {
  return (
    <div className="w-full overflow-x-auto pb-1">
      <div className="flex flex-col lg:flex-row lg:items-stretch gap-0 lg:gap-0 min-w-[min(100%,56rem)] mx-auto">
        <PipelineStage title="Input" highlight>
          <PipelineSubBox emphasize>Component Descriptor</PipelineSubBox>
        </PipelineStage>
        <ArrowBetweenStages />
        <PipelineStage title="Generation">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <PipelineSubBox>Scaffolding</PipelineSubBox>
            <span className="text-sky-500 dark:text-sky-400 font-light text-xl shrink-0" aria-hidden>
              →
            </span>
            <PipelineSubBox>Implementation</PipelineSubBox>
          </div>
        </PipelineStage>
        <ArrowBetweenStages />
        <PipelineStage title="Assurance">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-2">
            <PipelineSubBox>Testing</PipelineSubBox>
            <span className="text-neutral-400 dark:text-neutral-500 text-lg shrink-0" aria-hidden>
              →
            </span>
            <PipelineSubBox>Documentation</PipelineSubBox>
            <span className="text-neutral-400 dark:text-neutral-500 text-lg shrink-0" aria-hidden>
              →
            </span>
            <PipelineSubBox>Drift Detection</PipelineSubBox>
          </div>
        </PipelineStage>
        <ArrowBetweenStages />
        <PipelineStage title="Review & validation" highlight>
          <PipelineSubBox emphasize>Review & validation</PipelineSubBox>
        </PipelineStage>
      </div>
    </div>
  )
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
      { id: 'tech-intro', label: 'Introduction' },
      { id: 'tech-architecture', label: 'System architecture' },
      { id: 'tech-packages', label: 'Package responsibilities' },
      { id: 'tech-tokens', label: 'Token system' },
      { id: 'tech-shared-core', label: 'Shared core (@o9ds/core)' },
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
              <DocTable columns={TECH_ARCH_COLS} rows={TECH_ARCH_ROWS} />
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
                  <DocTable columns={PIPELINE_TABLE_COLS} rows={PIPELINES} />
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
            <section id="tech-intro" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Technical overview</h2>
              <ProseP>
                Technical reference for consuming and developing with the o9 Design System: how packages depend on each other, how tokens and
                styles compile and run, and how React and jQuery implementations stay aligned on markup and behavior.
              </ProseP>
            </section>

            <section id="tech-architecture" className="scroll-mt-24 space-y-6">
              <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">System architecture</h2>
              <ProseP>
                Dependencies flow from the foundation layer (tokens, styles, core, utils) into React and jQuery component packages, then into
                testing utilities, Storybook, and generated package metadata that powers the public documentation site (Docusaurus).
              </ProseP>
              <figure className="space-y-2 m-0">
                <div className="border overflow-hidden rounded-sm bg-white dark:bg-neutral-900" style={{ borderColor: '#E5E5E5' }}>
                  <img
                    src="/o9DocGraphics/o9ds-developers-system-architecture.png"
                    alt="Diagram: Foundation layer packages feed component layer; React and jQuery connect to test-utils, Storybook, and metadata; metadata flows to Docusaurus."
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                </div>
                <figcaption className="text-xs text-o9ds-light-secondary dark:text-neutral-500">
                  Package and tool relationships across foundation, components, testing, and documentation.
                </figcaption>
              </figure>
              <CodeBlock
                label="Mermaid source (for editors that render diagrams)"
                code={O9DS_SYSTEM_ARCH_MERMAID}
                language="mermaid"
              />
            </section>

            <section id="tech-packages" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Package responsibilities</h2>
              <ProseP>
                Each published package has a clear role: SCSS layers ship as source for bundlers; TypeScript libraries ship as ESM and CJS
                builds from Vite.
              </ProseP>
              <DocTable columns={TECH_PACKAGE_DETAIL_COLS} rows={TECH_PACKAGE_DETAIL_ROWS} />
            </section>

            <section id="tech-tokens" className="scroll-mt-24 space-y-6">
              <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Token system</h2>
              <Subsection id="tokens-three-layer" title="Three-layer architecture">
                <ul className="list-disc pl-5 space-y-3 text-o9ds-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
                  <li>
                    <strong className="text-o9ds-light-primary dark:text-white font-medium">Layer 1 — Global raw values (global palette).</strong>{' '}
                    Raw hex values that never change between themes, e.g.{' '}
                    <code className="font-mono text-xs text-o9ds-light-primary dark:text-white">$o9ds-global-skyblue-09: #3D6DCC</code>.
                  </li>
                  <li>
                    <strong className="text-o9ds-light-primary dark:text-white font-medium">Layer 2 — Semantic mapping.</strong> Maps globals to
                    roles such as surface, text, border, and icon. Defined in theme SCSS (e.g. light/dark); consumed as{' '}
                    <code className="font-mono text-xs text-o9ds-light-primary dark:text-white">$o9ds-*</code> variables at{' '}
                    <strong className="text-o9ds-light-primary dark:text-white font-medium">compile time</strong>.
                  </li>
                  <li>
                    <strong className="text-o9ds-light-primary dark:text-white font-medium">Layer 3 — Theme CSS variables.</strong> Accent and
                    theme switching via CSS custom properties in <code className="font-mono text-xs">_root.scss</code>, toggled at{' '}
                    <strong className="text-o9ds-light-primary dark:text-white font-medium">runtime</strong> with{' '}
                    <code className="font-mono text-xs">html[data-theme=&quot;…&quot;]</code> (e.g. o9black, o9default, o9dark, o9green, o9indigo,
                    o9theme). Example: <code className="font-mono text-xs">--o9ds-color-s-theme</code>.
                  </li>
                </ul>
              </Subsection>
              <Subsection id="tokens-distribution" title="Token distribution">
                <ProseP>
                  Tokens ship as <strong className="text-o9ds-light-primary dark:text-white font-medium">SCSS source</strong>, not prebuilt CSS.
                  The consuming app compiles SCSS. Use <code className="font-mono text-sm">$o9ds-*</code> where values are fixed at compile time
                  and <code className="font-mono text-sm">var(--o9ds-*)</code> where values must change at runtime without recompilation.
                </ProseP>
                <CodeBlock
                  label="Component SCSS (example: primary button)"
                  language="scss"
                  code={`// Component SCSS can reference compile-time semantics and runtime theme variables:
.o9ds-btn--primary {
  background-color: var(--o9ds-color-s-theme); // Layer 3: runtime theme
  color: $o9ds-color-t-inverse;               // Layer 2: compile-time semantic
}`}
                />
              </Subsection>
            </section>

            <section id="tech-shared-core" className="scroll-mt-24 space-y-6">
              <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Shared core (@o9ds/core)</h2>
              <ProseP>
                Framework-agnostic behavioral logic consumed by both React and jQuery packages: overlays, floating UI, focus management, and
                keyboard handling live here so behavior does not diverge per stack.
              </ProseP>
              <DocTable columns={SHARED_CORE_MODULE_COLS} rows={SHARED_CORE_MODULE_ROWS} />
              <Subsection id="tech-framework-adapters" title="Framework adapters">
                <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
                  <li>
                    <strong className="text-o9ds-light-primary dark:text-white font-medium">React</strong> uses hooks such as{' '}
                    <code className="font-mono text-xs">useOverlay()</code>, <code className="font-mono text-xs">useFocusTrap()</code>,{' '}
                    <code className="font-mono text-xs">usePositioning()</code>, and <code className="font-mono text-xs">useKeyboardNav()</code>.
                  </li>
                  <li>
                    <strong className="text-o9ds-light-primary dark:text-white font-medium">jQuery</strong> calls core modules directly, e.g.{' '}
                    <code className="font-mono text-xs">overlayHub.open()</code>, <code className="font-mono text-xs">focusTrap.activate()</code>,{' '}
                    <code className="font-mono text-xs">positionEngine.autoUpdate()</code>.
                  </li>
                </ul>
              </Subsection>
            </section>

            <section id="tech-components" className="scroll-mt-24 space-y-6">
              <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Component architecture</h2>
              <Subsection id="tech-dual-platform" title="Dual-platform pattern">
                <ProseP>
                  Each component is implemented across shared styles plus two adapters. Both stacks target the same HTML structure and CSS
                  classes; only the framework integration differs.
                </ProseP>
                <ul className="list-disc pl-5 space-y-1 text-o9ds-light-secondary dark:text-neutral-400 text-sm leading-relaxed font-mono text-xs">
                  <li>packages/styles/src/components/_button.scss</li>
                  <li>packages/react/src/components/Button/Button.tsx</li>
                  <li>packages/jquery/src/components/button/button.ts</li>
                </ul>
              </Subsection>
              <Subsection id="tech-bem" title="BEM naming">
                <ProseP>
                  All UI classes use the <code className="font-mono text-sm text-o9ds-light-primary dark:text-white">o9ds-</code> prefix. Elements use{' '}
                  <code className="font-mono text-sm">__</code>; modifiers use <code className="font-mono text-sm">--</code>.
                </ProseP>
                <DocTable columns={BEM_NAMING_COLS} rows={BEM_NAMING_ROWS} />
              </Subsection>
              <Subsection id="tech-standard-props" title="Standard props (all interactive components)">
                <DocTable columns={STANDARD_INTERACTIVE_PROPS_COLS} rows={STANDARD_INTERACTIVE_PROPS_ROWS} />
              </Subsection>
              <Subsection id="tech-loading" title="Loading states">
                <ProseP>
                  Loading can be expressed on the component, driven by an ancestor, or opted out on specific children.
                </ProseP>
                <CodeBlock
                  language="html"
                  code={`<button class="o9ds-btn loading" aria-busy="true">Save</button>

<div data-loading="true">
  <button class="o9ds-btn">Save</button>
</div>

<div data-loading="true">
  <button class="o9ds-btn" data-loading-ignore="true">Cancel</button>
</div>`}
                />
              </Subsection>
            </section>

            <section id="tech-workflow" className="scroll-mt-24 space-y-8">
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Agentic development workflow</h2>
                <ProseP>
                  Components are built through an automated agent pipeline. Each agent is stateless and produces specific artifacts.
                </ProseP>
              </div>
              <Subsection id="tech-agent-pipeline" title="Agent pipeline for new components">
                <ProseP>
                  The pipeline moves from a component descriptor through generation and assurance steps; drift detection and review ensure React and
                  jQuery stay aligned before merge.
                </ProseP>
                <div className="mt-4 rounded-lg border border-neutral-200 dark:border-neutral-600 bg-neutral-50/80 dark:bg-neutral-900/40 p-4">
                  <AgentPipelineDiagram />
                </div>
                <div className="mt-6">
                  <DocTable columns={AGENT_PIPELINE_TABLE_COLS} rows={AGENT_PIPELINE_TABLE_ROWS} />
                </div>
              </Subsection>
              <Subsection id="tech-bug-pipeline" title="Bug fix pipeline">
                <ProseP>
                  Bug fixes start with <strong className="text-o9ds-light-primary dark:text-white font-medium">impact analysis</strong> before any code
                  changes:
                </ProseP>
                <ol className="list-decimal pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 text-sm leading-relaxed mt-3">
                  <li>
                    <strong className="text-o9ds-light-primary dark:text-white font-medium">Review Agent (impact-analysis mode)</strong> maps which
                    components use the affected code.
                  </li>
                  <li>
                    <strong className="text-o9ds-light-primary dark:text-white font-medium">Human</strong> reviewers validate the blast radius.
                  </li>
                  <li>
                    <strong className="text-o9ds-light-primary dark:text-white font-medium">Implementation Agent</strong> applies the targeted fix.
                  </li>
                  <li>
                    <strong className="text-o9ds-light-primary dark:text-white font-medium">Test Agent</strong> adds a regression test.
                  </li>
                  <li>
                    <strong className="text-o9ds-light-primary dark:text-white font-medium">Affected component tests</strong> run first, then the{' '}
                    <strong className="text-o9ds-light-primary dark:text-white font-medium">full suite</strong>.
                  </li>
                  <li>
                    <strong className="text-o9ds-light-primary dark:text-white font-medium">Drift detection</strong> and{' '}
                    <strong className="text-o9ds-light-primary dark:text-white font-medium">review/validation</strong> complete the pipeline.
                  </li>
                </ol>
              </Subsection>
            </section>

            <section id="tech-testing-docs" className="scroll-mt-24 space-y-6">
              <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Testing strategy & documentation</h2>
              <Subsection id="tech-testing" title="Testing strategy">
                <ProseP>
                  Testing runs at multiple levels: <strong className="text-o9ds-light-primary dark:text-white font-medium">unit tests</strong> for
                  @o9ds/core and utilities, <strong className="text-o9ds-light-primary dark:text-white font-medium">component tests</strong> for
                  behavior and accessibility (including axe rules where configured), and{' '}
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">interaction tests</strong> for keyboard and pointer flows. The
                  assurance stage in the new-component pipeline feeds unit, a11y, and interaction coverage before drift detection.
                </ProseP>
                <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 text-sm leading-relaxed mt-3">
                  <li>
                    <strong className="text-o9ds-light-primary dark:text-white font-medium">@o9ds/test-utils</strong> supplies RTL helpers, jsdom setup,
                    parity checks between stacks, and shared fixtures so suites stay consistent across packages.
                  </li>
                  <li>
                    Merge-blocking gates include lint, typecheck, tests, and (where applicable) Storybook or visual checks on critical stories—see{' '}
                    <a href="#tech-quality-gates" className="text-o9ds-light-primary dark:text-sky-400 underline underline-offset-2">
                      Quality gates
                    </a>
                    .
                  </li>
                </ul>
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
