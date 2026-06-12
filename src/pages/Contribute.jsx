import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../LayoutComponents/PageHeader'
import PageWithToc from '../LayoutComponents/PageWithToc'
import DocTable from '../LayoutComponents/DocTable'
import CodeBlock from '../LayoutComponents/CodeBlock'
import DocSection, {
  DocCallout,
  DocCode,
  DocList,
  DocParagraph,
  DocStrong,
} from '../LayoutComponents/DocSection'
import {
  PATH_DEV_INTRO_BASE,
  devRefTopicPath,
  devUsageTopicPath,
  docPagePath,
} from '../data/docPaths'

const FEEDBACK_FORM_URL = 'https://forms.gle/fTRNAnDyunKX1hTE6'
const REPO_URL = 'https://o9git.visualstudio.com/CoreDev/_git/o9.DesignSystem'

const headerIcon = (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
)

const WORKFLOW_COLUMNS = [
  { key: 'workflow', label: 'Workflow', primary: true },
  { key: 'when', label: 'When to use it' },
  { key: 'steps', label: 'Pipeline stages', mono: true },
]

const WORKFLOWS = [
  {
    workflow: 'New component',
    when: 'The component does not exist yet',
    steps: 'Scaffold -> SCSS -> React -> JS -> Tests -> Drift -> Docs -> Review',
  },
  {
    workflow: 'Enhancement',
    when: 'Add a prop, method, event, variant, or size (additive only)',
    steps: 'Descriptor -> affected layers -> Tests -> Drift -> Docs -> Review',
  },
  {
    workflow: 'Rework',
    when: 'Rename, remove, or restructure existing API or DOM',
    steps: 'Delta analysis -> all impl -> Tests -> Drift -> Docs -> Review',
  },
  {
    workflow: 'Bug fix',
    when: 'A targeted fix with no API change',
    steps: 'Fix layer(s) -> Regression test -> Drift -> Validate',
  },
  {
    workflow: 'Documentation',
    when: 'Create or update Storybook stories or MDX docs',
    steps: 'Generate -> Review -> Validate',
  },
  {
    workflow: 'Testing',
    when: 'Write or extend Vitest tests',
    steps: 'Author tests -> Run -> Fix',
  },
]

const CONFIG_COLUMNS = [
  { key: 'location', label: 'Location', mono: true, tone: 'code' },
  { key: 'what', label: 'What it is' },
]

const CONFIG = [
  { location: 'CLAUDE.md', what: 'Always-loaded project memory: purpose, verified commands, core principles, naming summary.' },
  { location: '.claude/rules/arvo/*.md', what: 'Path-scoped conventions that auto-attach by file type (SCSS, React, JS, descriptors, stories, icons).' },
  { location: '.claude/agents/arvo/*.md', what: 'Specialist subagents, one per pipeline stage.' },
  { location: '.claude/skills/*', what: 'Reusable workflows: component pipeline, token update, playground story, API reference.' },
  { location: '.claude/settings.json', what: 'Default model, permission rules, and the post-edit non-ASCII guard hook.' },
]

const SUBAGENT_COLUMNS = [
  { key: 'agent', label: 'Subagent', mono: true, tone: 'agent' },
  { key: 'capability', label: 'Capability' },
  { key: 'use', label: 'Use for' },
]

const SUBAGENTS = [
  { agent: 'arvo-planner', capability: 'read-only', use: 'Investigation, descriptor authoring, rework delta scans, planning complex work' },
  { agent: 'arvo-shared-pattern', capability: 'edits', use: 'Implement a planned shared mixin or utility before component work' },
  { agent: 'arvo-scaffolder', capability: 'edits', use: 'Initial file structure for a new component' },
  { agent: 'arvo-scss', capability: 'edits', use: 'Complete component SCSS' },
  { agent: 'arvo-react', capability: 'edits', use: 'Full React implementation' },
  { agent: 'arvo-js', capability: 'edits', use: 'Vanilla JS implementation matching React' },
  { agent: 'arvo-test-author', capability: 'edits', use: 'Vitest tests for both platforms' },
  { agent: 'arvo-drift-reviewer', capability: 'read-only', use: 'React / JS parity audit' },
  { agent: 'arvo-doc-author', capability: 'edits', use: 'Storybook pair + Docusaurus page' },
  { agent: 'arvo-reviewer', capability: 'read-only', use: 'Final standards gate' },
]

const VERIFY_COLUMNS = [
  { key: 'command', label: 'Command', mono: true, tone: 'code' },
  { key: 'checks', label: 'Confirms' },
]

const VERIFY = [
  { command: '/memory', checks: 'CLAUDE.md and active rules are loaded' },
  { command: '/skills', checks: 'The arvo-* skills are discoverable' },
  { command: '/agents', checks: 'The arvo-* subagents are registered' },
  { command: '/permissions', checks: 'Deny / ask rules from settings.json resolved' },
  { command: '/hooks', checks: 'The post-edit non-ASCII guard is active' },
]

function FeedbackCard() {
  return (
    <div className="border border-l-4 border-l-[#010101] dark:border-l-white p-6 bg-arvo-light-surface dark:bg-neutral-800/40">
      <h3 className="text-lg font-semibold text-arvo-light-primary dark:text-white m-0 mb-2">
        Share feedback, ideas, and requests
      </h3>
      <p className="text-sm text-arvo-light-secondary dark:text-neutral-400 leading-relaxed m-0 mb-4 max-w-2xl">
        You do not need to write code to shape Arvo. Use the feedback form to request a feature, propose a
        new component, report an issue, share an idea, or tell us about a real product use case. Every
        submission is reviewed and helps prioritize the roadmap.
      </p>
      <a
        href={FEEDBACK_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border border-[#010101] bg-[#010101] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#010101] dark:border-white dark:bg-white dark:text-[#010101] dark:focus-visible:ring-white dark:focus-visible:ring-offset-neutral-900"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        Open the feedback form
      </a>
    </div>
  )
}

export default function Contribute() {
  const sections = useMemo(
    () => [
      { id: 'ways-to-contribute', label: 'Ways to contribute' },
      { id: 'feedback', label: 'Share feedback & ideas' },
      { id: 'before-you-start', label: 'Before you start' },
      { id: 'how-it-works', label: 'How the pipeline works' },
      { id: 'workflows', label: 'Choose a workflow' },
      { id: 'configuration', label: 'Claude Code setup' },
      { id: 'subagents', label: 'Specialist subagents' },
      { id: 'quality-gate', label: 'Quality gate' },
      { id: 'reference', label: 'Where to go deeper' },
    ],
    [],
  )

  return (
    <PageWithToc sections={sections}>
      <div className="space-y-8">
        <PageHeader
          title="How to Contribute"
          description="Arvo grows in two ways: feedback that shapes what we build, and code contributions that build it. This page is the single starting point for both -- share an idea in minutes, or run the descriptor-driven, Claude Code pipeline to ship a component."
          icon={headerIcon}
        />

        <div className="space-y-12">
          <DocSection id="ways-to-contribute" title="Ways to contribute">
            <DocParagraph>
              Anyone can contribute, regardless of role. Pick the path that matches what you have to offer.
            </DocParagraph>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="border p-5 dark:border-neutral-700" data-arvo-card="light">
                <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white m-0 mb-2">Feedback &amp; ideas</h3>
                <p className="text-sm text-arvo-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                  Designers, PMs, and engineers: request features, propose components, report issues, or share
                  product use cases through the feedback form. No setup required.
                </p>
              </div>
              <div className="border p-5 dark:border-neutral-700" data-arvo-card="light">
                <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white m-0 mb-2">Code contributions</h3>
                <p className="text-sm text-arvo-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                  Build or maintain <DocCode>@arvo/*</DocCode> itself by running the Claude Code component
                  pipeline. The steps below walk through setup, workflows, and the quality gate.
                </p>
              </div>
            </div>
          </DocSection>

          <DocSection id="feedback" title="Share feedback & ideas">
            <FeedbackCard />
          </DocSection>

          <DocSection id="before-you-start" title="Before you start">
            <DocParagraph>
              Code contributions run through the Arvo monorepo with Claude Code. Get a clean local build first.
            </DocParagraph>
            <CodeBlock
              language="bash"
              label="Clone, install, build"
              code={`git clone ${REPO_URL}
cd o9.DesignSystem
pnpm install
pnpm turbo run build`}
            />
            <DocCallout title="The configuration loads itself">
              Open the repo in Claude Code and the project configuration attaches automatically -- project
              memory, path-scoped rules, specialist subagents, and skills. You never paste conventions into a
              chat; the rules attach when you touch matching files.
            </DocCallout>
          </DocSection>

          <DocSection id="how-it-works" title="How the pipeline works">
            <DocParagraph>
              The component pipeline is <DocStrong>descriptor-driven</DocStrong>. Each component&apos;s
              public API lives in a <DocCode>descriptors/*.json</DocCode> file, which is the single source of
              truth -- the implementation follows the descriptor, never the reverse.
            </DocParagraph>
            <DocParagraph>
              The fastest path for any component work is the <DocCode>arvo-component-pipeline</DocCode> skill.
              It classifies the task, then chains the specialist subagents stage by stage -- scaffolding,
              SCSS, React, JS, tests, drift check, docs, review -- running verification between stages.
            </DocParagraph>
            <DocList
              items={[
                <span key="1">
                  <DocStrong>Full pipeline:</DocStrong> ask Claude to run the{' '}
                  <DocCode>arvo-component-pipeline</DocCode> skill for your descriptor.
                </span>,
                <span key="2">
                  <DocStrong>One step at a time:</DocStrong> ask Claude to use a single subagent (for example{' '}
                  <DocCode>arvo-scss</DocCode>) to debug or make a small change.
                </span>,
              ]}
            />
            <DocCallout tone="note" title="The main session is the orchestrator">
              Subagents cannot call other subagents. The session you are in chains each specialist and carries
              the output of one stage into the next. Keep React and JS in parity -- a change to one platform
              usually needs the matching change in the other.
            </DocCallout>
          </DocSection>

          <DocSection id="workflows" title="Choose a workflow">
            <DocParagraph>
              Match your change to a workflow. Each one is a recipe that the pipeline skill can run end to end.
            </DocParagraph>
            <DocTable columns={WORKFLOW_COLUMNS} rows={WORKFLOWS} />
          </DocSection>

          <DocSection id="configuration" title="Claude Code setup">
            <DocParagraph>
              The repo ships a complete Claude Code configuration. These are the pieces that load when you open
              the project.
            </DocParagraph>
            <DocTable columns={CONFIG_COLUMNS} rows={CONFIG} />
            <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white mt-4">Verify the setup loaded</h3>
            <DocParagraph>Run these inside Claude Code to confirm everything resolved as intended.</DocParagraph>
            <DocTable columns={VERIFY_COLUMNS} rows={VERIFY} />
          </DocSection>

          <DocSection id="subagents" title="Specialist subagents">
            <DocParagraph>
              Each stage of the pipeline is handled by a dedicated subagent. Read-only agents investigate and
              review; editing agents produce the implementation.
            </DocParagraph>
            <DocTable columns={SUBAGENT_COLUMNS} rows={SUBAGENTS} />
          </DocSection>

          <DocSection id="quality-gate" title="Quality gate">
            <DocParagraph>Run the full gate before every commit. It must stay green.</DocParagraph>
            <CodeBlock
              language="bash"
              label="Pre-commit gate"
              code={`pnpm turbo run build   # everything compiles
pnpm turbo run lint    # ESLint + Stylelint
pnpm turbo run test    # full test suite`}
            />
            <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white mt-4">Manual checks</h3>
            <DocList
              items={[
                'No hardcoded colors, spacing, or typography -- everything comes from tokens.',
                <span key="2">Exports use the <DocCode>Arvo</DocCode> prefix; BEM classes match the descriptor abbreviation.</span>,
                <span key="3">Loading covers all three modes: individual, parent-controlled (<DocCode>[data-arvo-loading]</DocCode>), and opt-out (<DocCode>[data-arvo-loading-ignore]</DocCode>).</span>,
                'React and JS stay in parity: matching CSS classes, ARIA, events, and method names.',
                <span key="4">If a descriptor changed, regenerate the agent knowledge base: <DocCode>pnpm --filter @arvo/ai-context build</DocCode>.</span>,
                'No non-standard unicode characters in source files; use a clear, descriptive commit message.',
              ]}
            />
          </DocSection>

          <DocSection id="reference" title="Where to go deeper">
            <DocParagraph>
              The contribution process above is the starting point. For the full system context, follow the
              For Developers section.
            </DocParagraph>
            <DocList
              items={[
                <span key="1">
                  <Link to={docPagePath(PATH_DEV_INTRO_BASE, 'Architecture')} className="underline">For Developers -- Architecture</Link>: the layered monorepo, core modules, and agent pipeline.
                </span>,
                <span key="2">
                  <Link to={devUsageTopicPath('checklist')} className="underline">Usage -- PR Checklist</Link> and the consumer contract for building against <DocCode>@arvo/*</DocCode>.
                </span>,
                <span key="3">
                  <Link to={devRefTopicPath('component-pipeline')} className="underline">Developer Reference -- Component Pipeline</Link> and the per-workflow contributor guides.
                </span>,
              ]}
            />
            <DocCallout title="Have a question or a request first?">
              Not sure where a change fits, or want a component that does not exist yet? Start with the{' '}
              <a href={FEEDBACK_FORM_URL} target="_blank" rel="noopener noreferrer" className="underline">feedback form</a>{' '}
              -- it is the right entry point for proposals, issues, and ideas.
            </DocCallout>
          </DocSection>
        </div>
      </div>
    </PageWithToc>
  )
}
