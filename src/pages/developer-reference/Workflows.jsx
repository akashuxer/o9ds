import { useState } from 'react'
import PageHeader from '../../LayoutComponents/PageHeader'
import PageWithToc from '../../LayoutComponents/PageWithToc'
import CodeBlock from '../../LayoutComponents/CodeBlock'
import DocSection, { DocCallout, DocCode, DocList, DocParagraph, DocStrong } from '../../LayoutComponents/DocSection'

const sections = [
  { id: 'choose', label: 'Choose a workflow' },
  { id: 'new-component', label: 'New Component' },
  { id: 'enhancement', label: 'Enhancement' },
  { id: 'rework', label: 'Rework' },
  { id: 'bug-fix', label: 'Bug Fix' },
  { id: 'documentation', label: 'Documentation' },
  { id: 'testing', label: 'Testing' },
  { id: 'outside-cursor', label: 'Working outside Cursor' },
]

const WORKFLOWS = [
  ['New Component', 'Component does not exist yet', 'Pre-flight patterns → Scaffolding → SCSS → React → JS → Tests → Drift → Docs → Review'],
  ['Enhancement', 'Add a new prop / method / event / variant / state to an existing component (additive)', 'Spec → Update Descriptor → SCSS → React → JS → Tests → Drift → Docs → Review'],
  ['Rework', 'Significant changes — renames, removals, restructure, breaking API moves', 'Delta Analysis → SCSS → React → JS → Tests → Drift → Docs → Migration Guide → Review'],
  ['Bug Fix', 'Targeted fix — wrong CSS class, broken event, incorrect ARIA, missing state handling', 'Fix Implementation (SCSS / React / JS as needed) → Regression Test → Drift → Validate'],
  ['Documentation', 'Create or update Storybook stories and Docusaurus MDX page', 'Generate Stories + MDX → Review → Validate → Update STATUS.md'],
  ['Testing', 'Add tests, regression tests, or backfill missing coverage', 'Generate or extend test files → Run scoped suite → Run full suite'],
]

function WorkflowCard({ id, title, when, steps, body }) {
  const [open, setOpen] = useState(false)
  return (
    <section id={id} className="scroll-mt-24 border dark:border-neutral-700">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-o9ds-light-surface dark:hover:bg-neutral-800/40"
      >
        <div>
          <h2 className="text-base font-semibold text-o9ds-light-primary dark:text-white m-0">{title}</h2>
          <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 m-0 mt-1">{when}</p>
        </div>
        <span className="text-xs font-mono text-o9ds-light-secondary dark:text-neutral-400 shrink-0">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="border-t dark:border-neutral-700 p-4 space-y-3 text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
          <p className="m-0"><strong className="text-o9ds-light-primary dark:text-white font-medium">Steps:</strong> {steps}</p>
          {body}
        </div>
      )}
    </section>
  )
}

export default function Workflows() {
  return (
    <PageWithToc sections={sections}>
      <div className="space-y-12">
        <PageHeader
          title="Contributor Workflows"
          description="The exact recipe for each component-development workflow. Each step is one agent conversation; outputs feed forward."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>}
        />

        <DocCallout title="Quick start">
          Clone the repo, run <DocCode>pnpm install</DocCode> then <DocCode>pnpm turbo run build</DocCode>. Pick a workflow below. Run <DocCode>pnpm turbo run build && pnpm turbo run lint && pnpm turbo run test</DocCode> before committing.
        </DocCallout>

        <DocSection id="choose" title="Choose a workflow">
          <div className="border overflow-hidden dark:border-neutral-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="dark:bg-neutral-800/50">
                  <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Workflow</th>
                  <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">When to use</th>
                </tr>
              </thead>
              <tbody>
                {WORKFLOWS.map(([wf, when]) => (
                  <tr key={wf} className="border-t dark:border-neutral-700">
                    <td className="py-2 px-3 text-o9ds-light-primary dark:text-white font-medium">{wf}</td>
                    <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{when}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DocSection>

        <div className="space-y-3">
          <WorkflowCard
            id="new-component"
            title="New Component"
            when="Component does not exist yet"
            steps="Pre-flight patterns → Scaffolding → SCSS → React → JS → Tests → Drift → Docs → Review"
            body={
              <>
                <p className="m-0"><DocStrong>Prerequisites.</DocStrong> Descriptor exists at <DocCode>descriptors/{`{name}`}.json</DocCode>. Project builds cleanly. Check <DocCode>STATUS.md</DocCode> the component isn't already done.</p>
                <ol className="list-decimal pl-5 space-y-1 m-0">
                  <li><DocStrong>Shared Pattern Pre-Flight</DocStrong> — skip if all referenced patterns are <DocCode>"ready"</DocCode> in the registry; otherwise run the Shared Pattern agent for each <DocCode>"planned"</DocCode> entry.</li>
                  <li><DocStrong>Scaffolding</DocStrong> agent — generates SCSS, React stub, JS stub, barrels, plugin entry, story placeholder.</li>
                  <li><DocStrong>SCSS Implementation</DocStrong> — full file with variants, sizes, states, loading pattern.</li>
                  <li><DocStrong>React Implementation</DocStrong> — props, refs, hooks, ARIA per descriptor.</li>
                  <li><DocStrong>JS Implementation</DocStrong> — mirror React exactly. <DocCode>initialize</DocCode>/<DocCode>destroy</DocCode> lifecycle.</li>
                  <li><DocStrong>Test Generation</DocStrong> — both React and JS test files, axe checks included.</li>
                  <li><DocStrong>Drift Check</DocStrong> — block merge on critical parity gaps.</li>
                  <li><DocStrong>Doc Generator</DocStrong> — Storybook stories + Docusaurus MDX page.</li>
                  <li><DocStrong>Reviewer</DocStrong> — naming, a11y, impact analysis on shared patterns and consumers.</li>
                </ol>
              </>
            }
          />

          <WorkflowCard
            id="enhancement"
            title="Enhancement"
            when="Add a new feature to an existing component (additive — no renames or removals)"
            steps="Spec → Update Descriptor → SCSS → React → JS → Tests → Drift → Docs → Review"
            body={
              <>
                <p className="m-0">If your change renames or removes anything, switch to the <DocStrong>Rework</DocStrong> workflow instead.</p>
                <ol className="list-decimal pl-5 space-y-1 m-0">
                  <li>Write a short enhancement spec (what's added, which layers, new BEM/CSS vars/ARIA, acceptance criteria). Paste this into every following conversation.</li>
                  <li>Manually add new entries to the descriptor — do not remove or rename existing ones.</li>
                  <li>Shared Pattern pre-flight if the enhancement introduces new patterns.</li>
                  <li>SCSS / React / JS implementation steps (skip whichever doesn't apply).</li>
                  <li>Test generation — add tests for the new surface.</li>
                  <li>Drift check.</li>
                  <li>Docs update — extend stories and MDX with the new feature.</li>
                  <li>Reviewer.</li>
                </ol>
              </>
            }
          />

          <WorkflowCard
            id="rework"
            title="Rework"
            when="Significant changes — renames, removals, DOM restructure, changed states/methods/ARIA"
            steps="Delta Analysis → SCSS → React → JS → Tests → Drift → Docs → Migration Guide → Review"
            body={
              <ol className="list-decimal pl-5 space-y-1 m-0">
                <li><DocStrong>Delta Analysis</DocStrong> — write a delta list (added/removed/renamed props, DOM changes, state changes, methods, ARIA). Paste into every step.</li>
                <li>SCSS / React / JS rework — agent updates files in place using the delta list as instructions.</li>
                <li>Test rework — agent updates existing tests (don't remove unrelated tests).</li>
                <li>Drift check — confirm React and JS still match after rework.</li>
                <li>Documentation rework.</li>
                <li><DocStrong>Migration guide</DocStrong> — record what changed and how consumers update. Required for major bumps.</li>
                <li>Reviewer with explicit impact analysis on consumer touchpoints.</li>
              </ol>
            }
          />

          <WorkflowCard
            id="bug-fix"
            title="Bug Fix"
            when="Targeted fix — wrong CSS class, broken event, incorrect ARIA, missing state handling"
            steps="Fix Implementation (SCSS / React / JS as needed) → Regression Test → Drift → Validate"
            body={
              <ol className="list-decimal pl-5 space-y-1 m-0">
                <li>Identify the affected layer(s). For each, run the corresponding implementation agent with a clear bug description.</li>
                <li><DocStrong>Scope discipline:</DocStrong> fix only the reported bug. Do not refactor adjacent code. If the fix reveals a larger issue, switch to Rework.</li>
                <li>Run the Test Generator agent in regression-test mode — add a test that would have caught the bug.</li>
                <li>Drift check (skip if the bug only affected SCSS).</li>
                <li>Validate: <DocCode>pnpm turbo run build && pnpm turbo run lint && pnpm turbo run test</DocCode>.</li>
              </ol>
            }
          />

          <WorkflowCard
            id="documentation"
            title="Documentation"
            when="Create or update Storybook stories and/or the Docusaurus MDX page"
            steps="Generate Stories + MDX → Review → Validate → Update STATUS.md"
            body={
              <>
                <p className="m-0">Every component needs two doc files:</p>
                <DocList items={[
                  <span key="1"><DocCode>{`packages/react/src/components/{Name}/{Name}.stories.tsx`}</DocCode> — Storybook playground.</span>,
                  <span key="2"><DocCode>{`apps/docs/docs/components/{category-lowercase}/{abbr}.mdx`}</DocCode> — Docusaurus public docs.</span>,
                ]} />
                <ol className="list-decimal pl-5 space-y-1 m-0 mt-2">
                  <li>Run the Doc Generator with descriptor + React/JS/SCSS source + Button reference files.</li>
                  <li>Reviewer pass (optional but recommended).</li>
                  <li><DocCode>pnpm turbo run build</DocCode> to compile the docs site.</li>
                  <li>Update <DocCode>STATUS.md</DocCode> — set the Stories and Docs columns.</li>
                </ol>
              </>
            }
          />

          <WorkflowCard
            id="testing"
            title="Testing"
            when="Generate, extend, or backfill component tests"
            steps="Generate or extend test files → Run scoped suite → Run full suite"
            body={
              <>
                <p className="m-0">Two patterns:</p>
                <DocList items={[
                  <span key="1"><DocStrong>Full generation</DocStrong> for new components — Test Generator with descriptor + React + JS + reference test file.</span>,
                  <span key="2"><DocStrong>Regression test</DocStrong> for bug fixes — same agent, given the source with the fix and the existing test file. Add a single test that would have caught the bug.</span>,
                ]} />
                <p className="m-0 mt-2">See <a className="underline" href="/developer-reference/testing-and-drift">Testing & Drift</a> for the test categories the agent always covers (props, states, events, a11y, keyboard, loading, parity, lifecycle).</p>
              </>
            }
          />
        </div>

        <DocSection id="outside-cursor" title="Working outside Cursor">
          <DocParagraph>
            For developers using Claude in VS Code, Visual Studio, or direct chat: agents are portable Markdown prompts. Outside Cursor, you run each pipeline step as a <DocStrong>separate agent conversation</DocStrong>, providing context manually between steps.
          </DocParagraph>
          <DocParagraph>For each step:</DocParagraph>
          <ol className="list-decimal pl-5 space-y-1.5 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
            <li>Start a fresh agent conversation.</li>
            <li>Paste the <DocStrong>role instructions</DocStrong> — from <DocCode>{`.cursor/agents/{agent}.md`}</DocCode>.</li>
            <li>Paste the <DocStrong>project conventions</DocStrong> — <DocCode>.cursor/rules/project-conventions.mdc</DocCode>.</li>
            <li>Paste/attach <DocStrong>package-specific rules</DocStrong> when applicable — <DocCode>.cursor/rules/{`{react|js|scss}`}-*.mdc</DocCode>.</li>
            <li>Attach the <DocStrong>component descriptor</DocStrong> and any source files the step needs.</li>
            <li>Give the agent a clear instruction.</li>
            <li>Review and save the output, then move to the next step.</li>
          </ol>
          <DocCallout title="Tip">
            Keep a scratch file with the project conventions pre-copied. You'll paste it into every conversation.
          </DocCallout>
        </DocSection>
      </div>
    </PageWithToc>
  )
}
