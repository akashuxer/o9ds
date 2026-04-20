import PageHeader from '../../LayoutComponents/PageHeader'
import PageWithToc from '../../LayoutComponents/PageWithToc'
import CodeBlock from '../../LayoutComponents/CodeBlock'
import DocSection, { DocCallout, DocCode, DocList, DocParagraph, DocStrong } from '../../LayoutComponents/DocSection'

const sections = [
  { id: 'why', label: 'Why shared patterns' },
  { id: 'shape', label: 'Pattern shape' },
  { id: 'registry', label: 'Pattern registry' },
  { id: 'authoring', label: 'Authoring a new pattern' },
  { id: 'using', label: 'Using a pattern from a component' },
]

const PATTERN_EXAMPLES = [
  ['form-input-base', 'Field surface, border animation, error state, focus ring — used by Textbox, Textarea, NumberInput, Search, Select, Combobox, etc.'],
  ['form-input-actions-overlay', 'Right-side action slot for clear/shortcut/inline buttons inside a form input.'],
  ['list-item / list-group', 'Selectable row + group container — used by Listbox, ActionMenu, Combobox dropdown, HybridPopover groups.'],
  ['loading-overlay', 'Skeleton shimmer surface that drives the loading state across every interactive component (Pattern A).'],
  ['inline-alert', 'Field-adjacent error/success/info messaging with consistent ARIA wiring.'],
  ['indicator', 'Status dots and counter pills shared by BadgeAlert, FabButton, Avatar, etc.'],
  ['form-char-counter', 'Character counter logic + visual treatment for Textbox/Textarea length feedback.'],
  ['form-label', 'Label rendering, required marker, helper text, accessible-name wiring.'],
  ['typography', 'Heading/body/code typography mixins keeping component text in lockstep with the type system.'],
]

export default function SharedPatterns() {
  return (
    <PageWithToc sections={sections}>
      <div className="space-y-12">
        <PageHeader
          title="Shared Patterns"
          description="Patterns sit between the raw token layer and the component layer. They encode visual behaviors that would otherwise be duplicated across every component that needs them."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>}
        />

        <DocSection id="why" title="Why shared patterns">
          <DocParagraph>
            Without shared patterns, every component would re-implement its own focus ring, form-input border animation, loading skeleton, and inline alert wiring. Each implementation would drift from the others over time. Patterns capture these once and require components to consume them — drift is impossible by construction.
          </DocParagraph>
          <DocCallout title="Pipeline gate">
            A component <DocStrong>cannot</DocStrong> scaffold until every pattern it declares in <DocCode>sharedPatterns</DocCode> has status <DocCode>"ready"</DocCode> in the registry. Pattern authoring is an explicit pre-flight step.
          </DocCallout>
        </DocSection>

        <DocSection id="shape" title="Pattern shape">
          <DocParagraph>Each pattern can ship up to three artifacts, depending on what's needed:</DocParagraph>
          <DocList items={[
            <span key="1"><DocStrong>SCSS mixin</DocStrong> in <DocCode>@o9ds/styles/src/mixins/_{`{pattern-name}`}.scss</DocCode> — the styling solution.</span>,
            <span key="2"><DocStrong>DOM utility</DocStrong> in <DocCode>@o9ds/utils/src/{`{pattern-name}`}.ts</DocCode> — the imperative DOM logic when behavior is involved (e.g. inline-alert insertion, char counter sync).</span>,
            <span key="3"><DocStrong>Internal React component</DocStrong> in <DocCode>@o9ds/react/src/internal/{`{pattern-name}`}.tsx</DocCode> — the React-side wrapper consumed by component implementations.</span>,
          ]} />
          <DocParagraph>
            Components consume only the pattern's documented mixin / utility / internal component. The internal partials inside a pattern are not part of the contract.
          </DocParagraph>
        </DocSection>

        <DocSection id="registry" title="Pattern registry">
          <DocParagraph>
            <DocCode>packages/styles/src/mixins/SHARED-PATTERNS-REGISTRY.json</DocCode> is the source of truth. Every pattern has an entry with: name, file paths, status (<DocCode>planned</DocCode> | <DocCode>ready</DocCode>), and a <DocCode>usedBy</DocCode> list of consuming components.
          </DocParagraph>
          <DocParagraph>Active patterns include:</DocParagraph>
          <div className="border overflow-hidden dark:border-neutral-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="dark:bg-neutral-800/50">
                  <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Pattern</th>
                  <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {PATTERN_EXAMPLES.map(([name, purpose]) => (
                  <tr key={name} className="border-t dark:border-neutral-700">
                    <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{name}</td>
                    <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <DocParagraph>The registry is the authoritative list — what's reflected on this page is a representative sample.</DocParagraph>
        </DocSection>

        <DocSection id="authoring" title="Authoring a new pattern">
          <DocParagraph>Trigger the Shared Pattern agent (<DocCode>.cursor/agents/shared-pattern.md</DocCode>) before any component work that depends on a new pattern.</DocParagraph>
          <ol className="list-decimal pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
            <li>Add the pattern entry to <DocCode>SHARED-PATTERNS-REGISTRY.json</DocCode> with status <DocCode>"planned"</DocCode>.</li>
            <li>Run the Shared Pattern agent with the registry, an existing implemented mixin for style reference, and the project conventions.</li>
            <li>The agent creates the SCSS mixin, the optional DOM utility, the optional internal React component.</li>
            <li>Update the registry status to <DocCode>"ready"</DocCode>.</li>
            <li>Verify SCSS compiles: <DocCode>pnpm --filter @o9ds/styles build</DocCode>.</li>
          </ol>
        </DocSection>

        <DocSection id="using" title="Using a pattern from a component">
          <CodeBlock
            language="scss"
            label="Component SCSS — @use the mixin"
            code={`@use '@o9ds/styles/mixins/form-input';
@use '@o9ds/styles/mixins/loading';

.o9ds-txt {
  @include form-input.base;
  @include form-input.size('md');
  @include loading.shimmer-surface;
}`}
          />
          <CodeBlock
            language="ts"
            label="JS — import the utility"
            code={`import { ensureInlineAlert, removeInlineAlert } from '@o9ds/utils';

ensureInlineAlert(host, { message, tone: 'error' });
// ...
removeInlineAlert(host);`}
          />
          <DocParagraph>
            React components import the same utilities (where applicable) plus the internal React wrappers under <DocCode>@o9ds/react/src/internal/</DocCode>. These are intentionally not exported from the package barrel — they're part of the implementation contract, not the consumer API.
          </DocParagraph>
        </DocSection>
      </div>
    </PageWithToc>
  )
}
