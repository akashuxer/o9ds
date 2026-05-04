import PageHeader from '../../LayoutComponents/PageHeader'
import PageWithToc from '../../LayoutComponents/PageWithToc'
import CodeBlock from '../../LayoutComponents/CodeBlock'
import DocSection, { DocCallout, DocCode, DocList, DocParagraph, DocStrong } from '../../LayoutComponents/DocSection'
import { DOC_TABLE_FIRST_COLUMN_CLASS } from '../../LayoutComponents/codeHighlight'

const sections = [
  { id: 'protected', label: 'What semver protects' },
  { id: 'not-protected', label: 'What semver does NOT protect' },
  { id: 'release-process', label: 'Release process & changesets' },
  { id: 'consume', label: 'How to consume releases' },
  { id: 'checklist', label: 'Upgrade checklist' },
  { id: 'misuse', label: 'Upgrades exposing misuse' },
  { id: 'deprecation', label: 'Deprecation policy' },
  { id: 'tldr', label: 'TL;DR' },
]

export default function UsageVersioning() {
  return (
    <PageWithToc sections={sections}>
      <div className="space-y-12">
        <PageHeader
          title="Versioning & upgrades"
          description="@arvo/* is published as a lockstep version set. Every publishable package shares the same version. A release bumps the full suite together, even if only one package changed."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>}
        />

        <DocCallout title="Rule">
          Treat the public contract documented in this section as the only thing protected by semver. Internal markup, internal classnames, internal source paths, and accidental behavior <DocStrong>are not</DocStrong> covered. Read the changeset before every upgrade and run a regression pass before adopting.
        </DocCallout>

        <DocSection id="protected" title="What semver protects">
          <DocParagraph>A <DocStrong>major</DocStrong> version bump is required to break any of:</DocParagraph>
          <DocList items={[
            <span key="1">The list of exported names in <DocCode>@arvo/react</DocCode> and <DocCode>@arvo/js</DocCode> and the documented entry sub-paths of every package.</span>,
            <span key="2">The documented <DocCode>O9*Props</DocCode> / <DocCode>O9*Options</DocCode> shape (removing a prop, narrowing a type, changing a default, removing a method).</span>,
            'The documented method signatures (parameter order, return type) on JS components and React refs.',
            <span key="4">The documented public events (<DocCode>btn:loading</DocCode>, <DocCode>cb:change</DocCode>, <DocCode>pop:open</DocCode>, …).</span>,
            <span key="5">The token names (<DocCode>$arvo-*</DocCode>, <DocCode>--arvo-*</DocCode>) listed in <DocCode>@arvo/tokens</DocCode>.</span>,
            <span key="6">The per-component CSS variable names (<DocCode>--arvo-{`{abbr}`}-*</DocCode>) documented on each component page.</span>,
            "The component's documented accessible pattern (role, ARIA wiring, keyboard support).",
            'The documented composition surfaces (providers, parent loading, slot props, mixins).',
          ]} />
          <DocParagraph>
            A <DocStrong>minor</DocStrong> bump may add to any of these (new components, new props with defaults, new tokens, new CSS variables) and may deprecate (with warnings) but not remove. A <DocStrong>patch</DocStrong> bump only fixes bugs without changing the contract.
          </DocParagraph>
        </DocSection>

        <DocSection id="not-protected" title="What semver does NOT protect">
          <DocParagraph>The following can change in any release without a bump and <DocStrong>without warning</DocStrong>:</DocParagraph>
          <DocList items={[
            'Internal markup, child element order, nesting depth.',
            'Internal classnames inside components (anything not documented as a CSS variable hook).',
            'Internal helper exports, internal hooks, internal SCSS partials.',
            'Animation timing values, internal CSS transitions, internal keyframe names.',
            'The shape of internal state objects, instance fields, private methods.',
            'The order/timing of internal event dispatches.',
            <span key="7">Source-path locations under <DocCode>dist/</DocCode> or <DocCode>src/</DocCode>.</span>,
            'Bundler chunking, file naming, and module formats.',
            'Default visual treatment of an undocumented prop combination.',
            <span key="10">Behavior of legacy/removed methods (<DocCode>enable()</DocCode>, <DocCode>disable()</DocCode>, <DocCode>getValue()</DocCode>, <DocCode>setValue()</DocCode>, <DocCode>clearError()</DocCode>, …).</span>,
          ]} />
          <DocParagraph>If you depend on any of those, semver does not protect you.</DocParagraph>
        </DocSection>

        <DocSection id="release-process" title="Release process and changesets">
          <DocParagraph>The repo uses Changesets. Every change ships with a changeset that classifies the bump:</DocParagraph>
          <div className="border overflow-hidden dark:border-neutral-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="dark:bg-neutral-800/50">
                  <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Change</th>
                  <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Bump</th>
                  <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Examples</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['New non-breaking feature', 'minor', 'New component, new prop with default, new CSS variable'],
                  ['Bug fix or internal-only update', 'patch', 'Fix focus return on close, refactor SCSS partial structure'],
                  ['Breaking API or style contract change', 'major', 'Remove a prop, rename a method, drop a token, change a default'],
                ].map(([change, bump, examples]) => (
                  <tr key={change} className="border-t dark:border-neutral-700">
                    <td className={`py-2 px-3 ${DOC_TABLE_FIRST_COLUMN_CLASS}`}>{change}</td>
                    <td className="py-2 px-3 font-mono text-arvo-light-secondary dark:text-neutral-400">{bump}</td>
                    <td className="py-2 px-3 text-arvo-light-secondary dark:text-neutral-400">{examples}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DocSection>

        <DocSection id="consume" title="How to consume releases">
          <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white">Pin or range strategy</h3>
          <DocList items={[
            <span key="1"><DocStrong>Range</DocStrong> (<DocCode>"@arvo/react": "^1.4.0"</DocCode>) — automatic adoption of compatible minors and patches. Requires CI to actually catch regressions.</span>,
            <span key="2"><DocStrong>Pin</DocStrong> (<DocCode>"@arvo/react": "1.4.2"</DocCode>) — explicit upgrades only. Safer for high-risk surfaces, slower to receive fixes.</span>,
          ]} />
          <DocParagraph>
            Whichever you pick, <DocStrong>all @arvo/* packages must be pinned to the same version</DocStrong> (lockstep). Do not pin <DocCode>@arvo/react</DocCode> to one version and <DocCode>@arvo/styles</DocCode> to another — the published version set is tested together.
          </DocParagraph>

          <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white">Where to install from</h3>
          <DocParagraph>
            <DocCode>@arvo/*</DocCode> packages are published to the Azure Artifacts <DocCode>o9UI</DocCode> feed. Your app needs the scoped registry mapping in <DocCode>.npmrc</DocCode>:
          </DocParagraph>
          <CodeBlock
            language="text"
            label=".npmrc — scoped registry"
            code={`@arvo:registry=https://pkgs.dev.azure.com/<ORG>/<PROJECT>/_packaging/o9UI/npm/registry/
always-auth=true`}
          />
          <DocParagraph>
            Authenticate locally with <DocCode>vsts-npm-auth -config .npmrc</DocCode> (Windows) or a PAT in your <DocStrong>user-level</DocStrong> <DocCode>~/.npmrc</DocCode> (never commit credentials).
          </DocParagraph>

          <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white">Prereleases (*.dev.*, *.next.*)</h3>
          <DocParagraph>
            Prerelease versions exist for QA and feed testing of upcoming releases. Pin to a prerelease only in non-production environments.
          </DocParagraph>
        </DocSection>

        <DocSection id="checklist" title="Upgrade checklist">
          <DocParagraph>Run this checklist for every <DocCode>@arvo/*</DocCode> upgrade. Make it a required PR template.</DocParagraph>
          <ol className="list-decimal pl-5 space-y-3 text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
            <li><DocStrong>Read the changeset.</DocStrong> Note every entry tagged breaking change (<DocCode>major</DocCode>) or deprecation.</li>
            <li>
              <DocStrong>Update all @arvo/* packages to the same version.</DocStrong>
              <CodeBlock
                language="bash"
                code={`pnpm update @arvo/react @arvo/js @arvo/core \\
            @arvo/styles @arvo/tokens @arvo/assets \\
            @arvo/utils @arvo/test-utils \\
            --latest`}
              />
            </li>
            <li><DocStrong>Run static checks:</DocStrong> <DocCode>pnpm typecheck</DocCode>, <DocCode>pnpm lint</DocCode>, <DocCode>pnpm stylelint</DocCode>. Type errors usually point at renamed props, narrowed types, or removed exports.</li>
            <li>
              <DocStrong>Run the test suite.</DocStrong> If a previously passing test fails:
              <DocList items={[
                'Asserting visible behavior → upgrade is the regression. File a design system bug.',
                <span key="2">Asserting a classname/snapshot/internal markup → <DocStrong>the test is the bug</DocStrong>. Rewrite to assert visible behavior.</span>,
              ]} />
            </li>
            <li>
              <DocStrong>Manual smoke pass on high-risk flows:</DocStrong>
              <DocList items={[
                'Login / sign-up form (Textbox, Checkbox, Button, BadgeAlert)',
                'Search-then-pick flows (Search, Combobox, Listbox)',
                'Multi-step wizards (Tabstrip, Button, BadgeAlert)',
                'Bulk action surfaces (CheckboxGroup, ButtonGroup, ActionMenu, Toast)',
                'Overlay-heavy screens (Popover, HybridPopover, Dialog, Tooltip)',
              ]} />
            </li>
            <li><DocStrong>Run automated accessibility checks</DocStrong> (<DocCode>pnpm test:axe</DocCode>, Storybook/Playwright a11y suite).</li>
            <li><DocStrong>Visual regression.</DocStrong> Patch bumps should have empty diffs; minor may have polish; major may be larger.</li>
            <li><DocStrong>Validate against the customization matrix.</DocStrong> For every component you customize, recheck that your customization is on a documented surface.</li>
            <li><DocStrong>Promote in stages.</DocStrong> Use canary/staging first; keep the previous lockstep version available for quick revert.</li>
            <li>
              <DocStrong>Report regressions back</DocStrong> with: the @arvo/* versions involved, the component and reproduction, links to your test/PR/screenshot, and whether you were on the public contract.
            </li>
          </ol>
        </DocSection>

        <DocSection id="misuse" title="What to do when an upgrade exposes misuse">
          <ol className="list-decimal pl-5 space-y-2 text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
            <li><DocStrong>Don't patch around it.</DocStrong> Don't add another <DocCode>!important</DocCode> to make the override stick to the new markup.</li>
            <li><DocStrong>Move to the public contract.</DocStrong> Replace the deep import with the package root import; replace the override with a documented CSS variable.</li>
            <li><DocStrong>If a contract gap caused the misuse, file an extension request.</DocStrong> "I had to use !important because there's no <DocCode>--arvo-cb-accent-color</DocCode> variable" is a legitimate gap to fix in the design system.</li>
            <li><DocStrong>Track it.</DocStrong> Until misuse is gone, mark it as technical debt with a link to this section.</li>
          </ol>
        </DocSection>

        <DocSection id="deprecation" title="Deprecation policy">
          <DocList items={[
            <span key="1">The <DocCode>minor</DocCode> release that introduces a deprecation logs a <DocCode>console.warn</DocCode> (in dev builds), updates the docs page, and points to the replacement.</span>,
            <span key="2">The next <DocCode>major</DocCode> release removes it.</span>,
            'Codemods are provided for renames where mechanically possible.',
          ]} />
          <DocParagraph>Treat deprecation warnings as PR blockers. They are warnings <em>now</em> so the breakage isn't a surprise <em>later</em>.</DocParagraph>
        </DocSection>

        <DocSection id="tldr" title="TL;DR">
          <DocList items={[
            'Lockstep: bump every @arvo/* package to the same version, every time.',
            'Read the changeset before every upgrade.',
            <span key="3">Static checks first (<DocCode>typecheck</DocCode>, <DocCode>lint</DocCode>), then tests, then smoke pass.</span>,
            'Failures that assert internal markup → fix the test. Failures that assert visible behavior → file a bug.',
            "A failed upgrade is usually preexisting misuse. Move to the public contract; don't add another patch.",
          ]} />
        </DocSection>
      </div>
    </PageWithToc>
  )
}
