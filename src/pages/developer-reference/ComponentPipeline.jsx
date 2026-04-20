import PageHeader from '../../LayoutComponents/PageHeader'
import PageWithToc from '../../LayoutComponents/PageWithToc'
import CodeBlock from '../../LayoutComponents/CodeBlock'
import DocSection, { DocCallout, DocCode, DocList, DocParagraph, DocStrong } from '../../LayoutComponents/DocSection'

const sections = [
  { id: 'overview', label: 'End-to-end flow' },
  { id: 'steps', label: 'Step-by-step' },
  { id: 'impact-chain', label: 'Impact chain' },
  { id: 'quality-gates', label: 'Quality gates' },
  { id: 'output-artifacts', label: 'Output artifacts' },
]

const STEPS = [
  ['1', 'Shared Pattern Pre-Flight', 'Skip if descriptor sharedPatterns is empty or all referenced patterns are ready in SHARED-PATTERNS-REGISTRY.json. Otherwise the Shared Pattern agent implements the SCSS mixin and (if needed) the @o9ds/utils DOM helper, then flips the registry status to "ready".'],
  ['2', 'Scaffolding', 'Generates the SCSS file, React component (forwardRef stub), JS class stub, barrel exports, and Storybook story placeholder. Adds the SCSS @forward, the React export, the JS plugin entry.'],
  ['3', 'SCSS Implementation', 'Writes the full SCSS using tokens. Implements all variants, sizes, states, loading pattern (A/B/C), parent overrides. No hardcoded values.'],
  ['4', 'React Implementation', 'Implements the React component: forwardRef, props (is*/has* boolean naming), refs, hooks (useOverlay, useFocusTrap, etc.), ARIA attributes per descriptor.'],
  ['5', 'JS Implementation', 'Mirrors React exactly. initialize/destroy lifecycle, dual-purpose getter/setter methods, identical HTML/CSS/ARIA output.'],
  ['6', 'Test Generation', 'Vitest tests for both React and JS. Props, states, accessibility (axe), keyboard, parity assertions.'],
  ['7', 'Drift Check', 'Compares React vs JS output for prop/event/method/CSS parity. Critical drift blocks merge.'],
  ['8', 'Documentation', 'Storybook stories (variants/sizes/states/JS API/API reference) plus Docusaurus MDX page (props, CSS variables, events, methods, loading, accessibility).'],
  ['9', 'Review', 'Naming conventions, accessibility rules, consistency, impact analysis on shared patterns and consumers.'],
]

const IMPACT_RULES = [
  ['A component\'s SCSS', 'React and JS still render with correct classes'],
  ['A React component', 'Run drift check against JS (or update JS too)'],
  ['A JS component', 'Run drift check against React (or update React too)'],
  ['A shared SCSS mixin', 'Every component in the mixin\'s usedBy list — check SHARED-PATTERNS-REGISTRY.json'],
  ['A @o9ds/utils utility', 'All components importing that utility'],
  ['A @o9ds/core module', 'All React hooks and JS code using that module'],
  ['@o9ds/tokens', 'Full rebuild: pnpm turbo run build then full test suite'],
]

export default function ComponentPipeline() {
  return (
    <PageWithToc sections={sections}>
      <div className="space-y-12">
        <PageHeader
          title="Component Pipeline"
          description="The per-component flow that turns a JSON descriptor into shipped SCSS, React, JS, tests, and documentation. Each step is one agent conversation; outputs feed forward."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>}
        />

        <DocSection id="overview" title="End-to-end flow">
          <CodeBlock
            language="text"
            label="New-component pipeline"
            code={`Descriptor (JSON)
   │
   ▼
[1] Shared Pattern Pre-Flight    ─┐
[2] Scaffolding                    │
[3] SCSS Implementation            │  Implementation phase
[4] React Implementation           │
[5] JS Implementation             ─┘
   │
   ▼
[6] Test Generation
[7] Drift Check                  (parity gate — blocks merge on critical drift)
[8] Documentation                (Storybook stories + Docusaurus MDX)
[9] Review                       (naming, a11y, impact analysis)
   │
   ▼
PR with build/lint/test/typecheck all green`}
          />
        </DocSection>

        <DocSection id="steps" title="Step-by-step">
          <div className="space-y-4">
            {STEPS.map(([num, name, body]) => (
              <div key={num} className="border p-4 dark:border-neutral-700" data-o9ds-card="light">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-o9ds-light-secondary dark:text-neutral-500">Step {num}</span>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white m-0">{name}</h3>
                </div>
                <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">{body}</p>
              </div>
            ))}
          </div>
        </DocSection>

        <DocSection id="impact-chain" title="Impact chain">
          <DocParagraph>Changes ripple through the dependency chain. Know what to verify:</DocParagraph>
          <CodeBlock
            language="text"
            label="Package dependency graph"
            code={`@o9ds/tokens
  └─> @o9ds/styles (compiles tokens into CSS variables)
        ├─> @o9ds/react (consumes CSS classes)
        └─> @o9ds/js (consumes CSS classes)

@o9ds/core (overlay, focus, keyboard, position, animation)
  ├─> @o9ds/react (via hooks: useOverlay, useFocusTrap, etc.)
  └─> @o9ds/js (direct imports)

@o9ds/utils (form-label, inline-alert, char-counter, indicator)
  ├─> @o9ds/react (internal React components use pure helpers)
  └─> @o9ds/js (imperative factories)

Shared SCSS Mixins (form-input-base, loading-overlay, list-item, ...)
  └─> Every component SCSS file that @includes them`}
          />
          <div className="border overflow-hidden dark:border-neutral-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="dark:bg-neutral-800/50">
                  <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">If you change…</th>
                  <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Then verify…</th>
                </tr>
              </thead>
              <tbody>
                {IMPACT_RULES.map(([change, verify]) => (
                  <tr key={change} className="border-t dark:border-neutral-700">
                    <td className="py-2 px-3 text-o9ds-light-primary dark:text-white">{change}</td>
                    <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{verify}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DocSection>

        <DocSection id="quality-gates" title="Quality gates">
          <DocParagraph>Run before committing:</DocParagraph>
          <CodeBlock
            language="bash"
            code={`pnpm turbo run build   # Everything compiles
pnpm turbo run lint    # ESLint + Stylelint
pnpm turbo run test    # Full test suite`}
          />
          <DocParagraph>Manual checks before opening a PR:</DocParagraph>
          <DocList items={[
            'No hardcoded colors, spacing, or typography — all from tokens',
            'BEM classes match descriptor abbreviation',
            <span key="3">CSS variables follow <DocCode>--o9ds-{`{abbr}`}-{`{property}`}</DocCode></span>,
            <span key="4">Exports use <DocCode>O9</DocCode> prefix (<DocCode>O9Button</DocCode>, not <DocCode>Button</DocCode>)</span>,
            <span key="5">Loading: individual + parent-controlled (<DocCode>[data-o9ds-loading]</DocCode>) + opt-out (<DocCode>[data-o9ds-loading-ignore]</DocCode>)</span>,
            'Inner interactive elements use o9ds components, not raw HTML',
            <span key="7">React: <DocCode>forwardRef</DocCode>, accepts <DocCode>className</DocCode>, exports <DocCode>{`O9{Name}Props`}</DocCode></span>,
            <span key="8">JS: <DocCode>initialize</DocCode>/<DocCode>destroy</DocCode>, private methods prefixed <DocCode>_</DocCode>, consolidated getter/setters</span>,
            'ARIA attributes and keyboard interactions per descriptor',
          ]} />
        </DocSection>

        <DocSection id="output-artifacts" title="Output artifacts">
          <CodeBlock
            language="text"
            label="A new component produces these files"
            code={`packages/styles/src/components/{category}/_o9ds-{abbr}.scss
packages/styles/src/components/{category}/_index.scss          (updated: @forward)
packages/react/src/components/{Name}/{Name}.tsx
packages/react/src/components/{Name}/{Name}.test.tsx
packages/react/src/components/{Name}/{Name}.stories.tsx
packages/react/src/components/{Name}/index.ts
packages/react/src/index.ts                                    (updated: export)
packages/js/src/components/{Name}/{Name}.ts
packages/js/src/components/{Name}/{Name}.test.ts
packages/js/src/components/{Name}/index.ts
packages/js/src/components/index.ts                            (updated: export)
packages/js/src/index.ts                                       (updated: export)
packages/js/src/plugin.ts                                      (updated: ALL_COMPONENTS + $.fn)
apps/docs/docs/components/{category-lowercase}/{abbr}.mdx`}
          />
        </DocSection>
      </div>
    </PageWithToc>
  )
}
