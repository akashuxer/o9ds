import PageHeader from '../../LayoutComponents/PageHeader'
import PageWithToc from '../../LayoutComponents/PageWithToc'
import CodeBlock from '../../LayoutComponents/CodeBlock'
import DocSection, { DocCallout, DocCode, DocList, DocParagraph, DocStrong } from '../../LayoutComponents/DocSection'
import { DOC_TABLE_FIRST_COLUMN_CLASS } from '../../LayoutComponents/codeHighlight'

const sections = [
  { id: 'stack', label: 'Test stack' },
  { id: 'locations', label: 'Test file locations' },
  { id: 'commands', label: 'Running tests' },
  { id: 'categories', label: 'What gets tested' },
  { id: 'drift', label: 'Drift Checker (parity gate)' },
  { id: 'a11y', label: 'Accessibility checks' },
]

const STACK = [
  ['Vitest', 'Test runner and assertion library'],
  ['jsdom', 'Browser environment simulation'],
  ['@testing-library/react', 'React component testing utilities'],
  ['@testing-library/jest-dom', 'DOM assertion matchers (.toBeDisabled(), etc.)'],
  ['axe-core', 'Automated accessibility testing'],
  ['@arvo/test-utils', 'Project-specific test helpers'],
]

const COMMANDS = [
  ['pnpm test', 'All packages (builds first via Turborepo)'],
  ['pnpm test:watch', 'Watch mode across all packages'],
  ['pnpm --filter @arvo/react test', 'React package only'],
  ['pnpm --filter @arvo/js test', 'JS package only'],
  ['pnpm --filter @arvo/core test', 'Core package only'],
]

export default function TestingAndDrift() {
  return (
    <PageWithToc sections={sections}>
      <div className="space-y-12">
        <PageHeader
          title="Testing & Drift"
          description="Internal test strategy for the @arvo/* monorepo and how the Drift Checker enforces React/JS parity. For consumer-side test guidance, see Usage › Testing."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
        />

        <DocSection id="stack" title="Test stack">
          <div className="border overflow-hidden dark:border-neutral-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="dark:bg-neutral-800/50">
                  <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Tool</th>
                  <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {STACK.map(([tool, purpose]) => (
                  <tr key={tool} className="border-t dark:border-neutral-700">
                    <td className={`py-2 px-3 font-mono text-sm ${DOC_TABLE_FIRST_COLUMN_CLASS}`}>{tool}</td>
                    <td className="py-2 px-3 text-arvo-light-secondary dark:text-neutral-400">{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DocSection>

        <DocSection id="locations" title="Test file locations">
          <DocParagraph>Tests are co-located with source files:</DocParagraph>
          <CodeBlock
            language="text"
            code={`packages/react/src/components/Button/
  Button.tsx              # Component
  Button.test.tsx         # React tests
  Button.stories.tsx      # Storybook

packages/js/src/components/Button/
  Button.ts               # Component
  Button.test.ts          # JS tests

packages/core/src/overlay/
  overlay-hub.ts
  __tests__/
    overlay-hub.test.ts   # Core tests use __tests__ folders`}
          />
        </DocSection>

        <DocSection id="commands" title="Running tests">
          <div className="border overflow-hidden dark:border-neutral-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="dark:bg-neutral-800/50">
                  <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Command</th>
                  <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Scope</th>
                </tr>
              </thead>
              <tbody>
                {COMMANDS.map(([cmd, scope]) => (
                  <tr key={cmd} className="border-t dark:border-neutral-700">
                    <td className={`py-2 px-3 font-mono text-sm ${DOC_TABLE_FIRST_COLUMN_CLASS}`}>{cmd}</td>
                    <td className="py-2 px-3 text-arvo-light-secondary dark:text-neutral-400">{scope}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <CodeBlock
            language="bash"
            label="Run a single test file"
            code={`cd packages/react
npx vitest run src/components/Button/Button.test.tsx`}
          />
        </DocSection>

        <DocSection id="categories" title="What gets tested">
          <DocParagraph>Generated by the Test Generator agent for every component, both React and JS:</DocParagraph>
          <DocList items={[
            <span key="1"><DocStrong>Props / options</DocStrong> — every documented prop with valid + edge-case values renders correctly and updates the visible output.</span>,
            <span key="2"><DocStrong>States</DocStrong> — disabled, loading, selected, hover/focus, error/invalid, readonly.</span>,
            <span key="3"><DocStrong>Events / callbacks</DocStrong> — every documented event/callback fires with the correct payload, in the correct order.</span>,
            <span key="4"><DocStrong>Accessibility</DocStrong> — axe-core scan on every variant, ARIA attributes match descriptor, role + name are queryable.</span>,
            <span key="5"><DocStrong>Keyboard interactions</DocStrong> — every key listed in the descriptor's <DocCode>keyboardInteractions</DocCode> table.</span>,
            <span key="6"><DocStrong>Loading pattern</DocStrong> — skeleton overlay, parent-controlled loading, ignore opt-out.</span>,
            <span key="7"><DocStrong>Parity</DocStrong> — assertions that the same input produces the same DOM/CSS/ARIA in React and JS.</span>,
            <span key="8"><DocStrong>Lifecycle</DocStrong> — React strict-mode safe; JS instance <DocCode>destroy()</DocCode> tears down listeners and overlays cleanly.</span>,
          ]} />
        </DocSection>

        <DocSection id="drift" title="Drift Checker (parity gate)">
          <DocParagraph>
            The Drift Checker agent runs after every implementation change. It compares the React and JS implementations along four axes:
          </DocParagraph>
          <DocList items={[
            <span key="1"><DocStrong>Props vs options parity</DocStrong> — React <DocCode>O9*Props</DocCode> matches JS <DocCode>O9*Options</DocCode> field-for-field (modulo the documented React-only <DocCode>is*</DocCode>/<DocCode>has*</DocCode> renaming).</span>,
            <span key="2"><DocStrong>Events parity</DocStrong> — every <DocCode>{`{abbr}:{action}`}</DocCode> custom event dispatched by the JS class has a matching React callback prop, and vice versa.</span>,
            <span key="3"><DocStrong>Methods parity</DocStrong> — every public method on the JS instance is reachable through React refs (or an equivalent prop) and the signatures match.</span>,
            <span key="4"><DocStrong>DOM/CSS parity</DocStrong> — same input produces identical BEM classes, ARIA attributes, and DOM structure.</span>,
          ]} />
          <DocCallout title="Merge gate">
            <DocStrong>Critical drift blocks merge.</DocStrong> Stylistic differences are reported as advisories. The agent's report is part of the PR — it tells you exactly which framework needs to be updated to restore parity.
          </DocCallout>
        </DocSection>

        <DocSection id="a11y" title="Accessibility checks">
          <DocParagraph>
            Every component test imports <DocCode>axe-core</DocCode> and runs a scan on the rendered output for each variant/state combination. Findings are treated as test failures — not warnings.
          </DocParagraph>
          <CodeBlock
            language="ts"
            label="Pattern (excerpt from generated test)"
            code={`import { axe } from 'jest-axe';
import { render } from '@testing-library/react';

it('has no a11y violations across variants', async () => {
  const { container } = render(
    <>
      <ArvoButton label="Default" />
      <ArvoButton label="Disabled" isDisabled />
      <ArvoButton label="Loading" isLoading />
    </>
  );
  expect(await axe(container)).toHaveNoViolations();
});`}
          />
          <DocParagraph>
            For overlay-heavy patterns (popovers, dialogs, menus), tests additionally verify focus trap installation, focus return on close, and Escape/outside-click dismissal.
          </DocParagraph>
        </DocSection>
      </div>
    </PageWithToc>
  )
}
