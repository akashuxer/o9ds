import PageHeader from '../../LayoutComponents/PageHeader'
import PageWithToc from '../../LayoutComponents/PageWithToc'
import CodeBlock from '../../LayoutComponents/CodeBlock'
import DocSection, { DocCallout, DocCode, DocList, DocParagraph, DocStrong } from '../../LayoutComponents/DocSection'
import { DOC_TABLE_FIRST_COLUMN_CLASS } from '../../LayoutComponents/codeHighlight'

const sections = [
  { id: 'why-agents', label: 'Why agents' },
  { id: 'agents', label: 'Agent inventory' },
  { id: 'descriptor', label: 'Component descriptor' },
  { id: 'pipeline-types', label: 'Pipeline types' },
  { id: 'invocation', label: 'Pipeline invocation' },
  { id: 'context-files', label: 'Context files quick reference' },
]

const AGENTS = [
  ['Orchestrator', 'Coordinates agent sequence, manages checkpoints, handles errors'],
  ['Shared Pattern', 'Implements reusable SCSS mixins + @o9ds/utils DOM utilities before component work begins'],
  ['Scaffolding', 'Generates boilerplate files across all packages from a component descriptor'],
  ['SCSS Implementation', 'Writes full component SCSS with tokens, states, BEM structure, loading pattern'],
  ['React Implementation', 'Writes React component with props, refs, hooks, ARIA attributes'],
  ['JS Implementation', 'Writes vanilla JS class with initialize/destroy lifecycle, matching React parity'],
  ['Test Generator', 'Generates Vitest tests for React + JS — props, states, a11y, keyboard, parity'],
  ['Drift Checker', 'Compares React vs JS output for prop/event/method/CSS parity; blocks on critical drift'],
  ['Doc Generator', 'Generates Storybook stories + Docusaurus MDX documentation pages'],
  ['Reviewer', 'Enforces naming conventions, accessibility rules, consistency; performs impact analysis'],
]

const PIPELINE_TYPES = [
  ['new-component', 'Component does not yet exist', 'All 10'],
  ['rework', 'Descriptor changed significantly', 'Impl + Test + Drift + Doc + Review'],
  ['bug-fix', 'Targeted fix needed', 'Impl + Test + Drift + Review'],
  ['style-update', 'SCSS-only change', 'SCSS Impl + Drift + Review'],
  ['doc-update', 'Documentation change', 'Doc + Review'],
  ['breaking-change', 'API change (major bump)', 'All + migration guide'],
]

const CONTEXT_FILES = [
  ['.cursor/rules/project-conventions.mdc', 'Every conversation — naming, BEM, tokens, coding standards'],
  ['.cursor/rules/scss-styles.mdc', 'SCSS implementation steps'],
  ['.cursor/rules/react-components.mdc', 'React implementation steps'],
  ['.cursor/rules/js-components.mdc', 'JS implementation steps'],
  ['.cursor/agents/{agent}.md', 'Role instructions for that step'],
  ['descriptors/{name}.json', 'All implementation steps — the component spec'],
]

export default function AgenticPipeline() {
  return (
    <PageWithToc sections={sections}>
      <div className="space-y-12">
        <PageHeader
          title="Agentic Pipeline"
          description="The design system uses a pipeline of specialized AI agents to scaffold, implement, test, document, and review components from structured JSON descriptors. The orchestrator coordinates the sequence."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
        />

        <DocSection id="why-agents" title="Why agents">
          <DocParagraph>
            Agents are <DocStrong>portable Markdown prompts</DocStrong>. They run in Cursor as subagents but can be used directly in any LLM-enabled environment (Claude, ChatGPT, or any editor with agent support). Because they are stateless and declarative, they produce consistent output regardless of runtime.
          </DocParagraph>
          <DocCallout title="Stateless contract">
            Each agent receives a descriptor plus prior outputs, produces artifacts, and has no side effects beyond its declared outputs. This is what makes the same prompts work in Cursor's orchestrator <em>and</em> as standalone Claude/ChatGPT conversations.
          </DocCallout>
        </DocSection>

        <DocSection id="agents" title="Agent inventory">
          <div className="border overflow-hidden dark:border-neutral-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="dark:bg-neutral-800/50">
                  <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Agent</th>
                  <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Responsibility</th>
                </tr>
              </thead>
              <tbody>
                {AGENTS.map(([agent, resp]) => (
                  <tr key={agent} className="border-t dark:border-neutral-700">
                    <td className={`py-2 px-3 ${DOC_TABLE_FIRST_COLUMN_CLASS}`}>{agent}</td>
                    <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{resp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DocSection>

        <DocSection id="descriptor" title="Component descriptor">
          <DocParagraph>
            The JSON descriptor is the <DocStrong>single input</DocStrong> that drives the entire pipeline. It encodes:
          </DocParagraph>
          <DocList items={[
            'Component identity (name, abbreviation, category, status, description)',
            'BEM structure (block, elements, modifiers, state classes)',
            'Props (type, values, defaults, dynamic, descriptions, ARIA/HTML attributes)',
            'Events and methods (signatures, payloads, descriptions)',
            'Accessibility (role, ARIA attributes, keyboard interactions, focus management)',
            'Loading pattern (A, B, or C with rationale)',
            'Shared pattern dependencies and parent override relationships',
            'CSS variables (grouped buckets) and interactive states',
          ]} />
          <DocParagraph>
            One descriptor produces all SCSS, React, JS, test, and documentation files — ensuring mechanical consistency across every artifact.
          </DocParagraph>
        </DocSection>

        <DocSection id="pipeline-types" title="Pipeline types">
          <div className="border overflow-hidden dark:border-neutral-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="dark:bg-neutral-800/50">
                  <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Pipeline</th>
                  <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Trigger</th>
                  <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Agents involved</th>
                </tr>
              </thead>
              <tbody>
                {PIPELINE_TYPES.map(([pipe, trigger, agents]) => (
                  <tr key={pipe} className="border-t dark:border-neutral-700">
                    <td className={`py-2 px-3 font-mono text-sm ${DOC_TABLE_FIRST_COLUMN_CLASS}`}>{pipe}</td>
                    <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{trigger}</td>
                    <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{agents}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DocSection>

        <DocSection id="invocation" title="Pipeline invocation">
          <DocParagraph>From inside Cursor, the orchestrator runs the chain end-to-end:</DocParagraph>
          <CodeBlock
            language="bash"
            label="Cursor — orchestrated pipeline"
            code={`# New component
pnpm pipeline new-component --descriptor descriptors/tooltip.json

# Rework existing component
pnpm pipeline rework --descriptor descriptors/button.json

# Bug fix
pnpm pipeline bug-fix --component Button --description "hover state missing in dark theme"

# Dry run (validate without writing)
pnpm pipeline new-component --descriptor descriptors/tooltip.json --dry-run`}
          />
          <DocParagraph>
            Outside Cursor, <DocStrong>you are the orchestrator</DocStrong> — run each step as a separate conversation, passing the agent role, project conventions, and prior outputs as context. See the <a className="underline" href="/developer-reference/workflows">Contributor Workflows</a> page for the per-step recipes.
          </DocParagraph>
        </DocSection>

        <DocSection id="context-files" title="Context files quick reference">
          <DocParagraph>Every agent conversation pulls from a small set of files in the repo. Keep these handy in a scratch buffer when running outside Cursor.</DocParagraph>
          <div className="border overflow-hidden dark:border-neutral-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="dark:bg-neutral-800/50">
                  <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">File</th>
                  <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">When to use</th>
                </tr>
              </thead>
              <tbody>
                {CONTEXT_FILES.map(([file, when]) => (
                  <tr key={file} className="border-t dark:border-neutral-700">
                    <td className={`py-2 px-3 font-mono text-sm ${DOC_TABLE_FIRST_COLUMN_CLASS}`}>{file}</td>
                    <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{when}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DocSection>
      </div>
    </PageWithToc>
  )
}
