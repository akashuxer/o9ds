import PageHeader from '../../LayoutComponents/PageHeader'
import PageWithToc from '../../LayoutComponents/PageWithToc'
import CodeBlock from '../../LayoutComponents/CodeBlock'
import DocSection, { DocCallout, DocCode, DocList, DocParagraph, DocStrong } from '../../LayoutComponents/DocSection'
import { DOC_TABLE_FIRST_COLUMN_CLASS } from '../../LayoutComponents/codeHighlight'

const sections = [
  { id: 'what-public-means', label: 'What "public" means' },
  { id: 'pkg-react', label: '@arvo/react' },
  { id: 'pkg-js', label: '@arvo/js' },
  { id: 'pkg-styles', label: '@arvo/styles' },
  { id: 'pkg-tokens', label: '@arvo/tokens' },
  { id: 'pkg-assets', label: '@arvo/assets' },
  { id: 'pkg-core-utils', label: '@arvo/core, /utils, /test-utils' },
  { id: 'enforcement', label: 'Lint / enforcement' },
  { id: 'tldr', label: 'TL;DR table' },
]

export default function UsagePublicApi() {
  return (
    <PageWithToc sections={sections}>
      <div className="space-y-12">
        <PageHeader
          title="Public API & imports"
          description="The single most common source of upgrade pain is deep imports. This page lists what is safe to import from each @arvo/* package, and what is not."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}
        />

        <DocCallout title="Rule">
          If an import path is not listed in this page, it is <DocStrong>not</DocStrong> part of the public API. It can change in any release without a major bump.
        </DocCallout>

        <DocSection id="what-public-means" title='What "public" means here'>
          <DocParagraph>
            For every <DocCode>@arvo/*</DocCode> package, "public" is defined by the <DocCode>exports</DocCode> field in that package's <DocCode>package.json</DocCode>. Every other path — including anything inside <DocCode>dist/</DocCode>, <DocCode>src/</DocCode>, internal helper folders, or non-exported sub-paths — is private.
          </DocParagraph>
          <DocList items={[
            <span key="1">The list below is exhaustive. If a path is not here, do not import it.</span>,
            <span key="2">TypeScript may <em>let</em> you import private paths because the files are physically present on disk. The language does not know about your contract; this document does.</span>,
            <span key="3">Internal symbols may be re-exported in a future minor release. Do not pre-empt this — request the export through the design system team.</span>,
          ]} />
        </DocSection>

        <DocSection id="pkg-react" title="@arvo/react">
          <DocParagraph>The React component library. <DocStrong>Single entry point.</DocStrong></DocParagraph>
          <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white">Safe imports</h3>
          <CodeBlock
            language="ts"
            label="Single barrel — @arvo/react"
            code={`import {
  // providers
  OverlayProvider, useOverlayContext,
  TooltipProvider, useTooltipManager,
  ArvoToastProvider, useToast,

  // hooks (advanced composition only)
  useOverlay, useFocusTrap, useKeyboardNav, usePositioning, useTooltip,

  // components — every O9* exported from the barrel is public
  ArvoButton, ArvoIconButton, ArvoFabButton, ArvoButtonGroup,
  ArvoLink, ArvoButtonLink, ArvoIconButtonLink,
  ArvoTextbox, ArvoTextarea, ArvoNumberInput, ArvoSearch,
  ArvoSelect, ArvoCombobox, ArvoListbox,
  ArvoCheckbox, ArvoCheckboxGroup, ArvoRadio, ArvoRadioGroup, ArvoSwitch,
  ArvoPopover, ArvoHybridPopover, ArvoTooltip, ArvoActionMenu,
  ArvoDropdownButton, ArvoDropdownIconButton,
  ArvoBadgeAlert, ArvoTabstrip, ArvoBreadcrumb,

  // types follow the O9{Name}Props pattern
  type ArvoButtonProps,
  type ArvoSelectProps,
} from '@arvo/react';`}
          />
          <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white">Forbidden imports</h3>
          <CodeBlock
            language="ts"
            label="Do not import internal paths"
            code={`// FORBIDDEN — internal source paths
import { Button } from '@arvo/react/src/components/Button/Button';

// FORBIDDEN — compiled internals
import { ArvoButton } from '@arvo/react/dist/components/Button/Button.js';

// FORBIDDEN — unexported internal helpers
import { mergeRefs } from '@arvo/react/src/internal/refs';

// FORBIDDEN — non-O9 prefixed names are not public
import { Button } from '@arvo/react';`}
          />
          <DocParagraph>
            Anything outside the barrel can be renamed, moved, deleted, or have its signature changed in any release. Internal hooks (<DocCode>useControllableState</DocCode>, <DocCode>mergeRefs</DocCode>, focus orchestration helpers) are part of the implementation, not the contract.
          </DocParagraph>
        </DocSection>

        <DocSection id="pkg-js" title="@arvo/js">
          <DocParagraph>The vanilla JS / jQuery component library. <DocStrong>Three documented entry points.</DocStrong></DocParagraph>
          <CodeBlock
            language="js"
            label="Three documented entry points"
            code={`// 1. Component classes and overlay setup (recommended modern usage).
import {
  ArvoButton, ArvoTextbox, ArvoSelect, ArvoCombobox, ArvoPopover, ArvoHybridPopover,
  ArvoCheckbox, ArvoCheckboxGroup, ArvoRadio, ArvoRadioGroup, ArvoSwitch,
  ArvoNumberInput, ArvoTextarea, ArvoSearch, ArvoActionMenu, ArvoListbox,
  ArvoDropdownButton, ArvoDropdownIconButton,
  ArvoButtonGroup, ArvoFabButton, ArvoIconButton,
  ArvoLink, ArvoButtonLink, ArvoIconButtonLink,
  ArvoTabstrip, ArvoBreadcrumb, ArvoBadgeAlert, ArvoTooltip,
  setupOverlayPlugin, setupTooltips,
} from '@arvo/js';

// 2. jQuery plugin registration (opt-in, side-effecting).
import { registerArvoPlugins } from '@arvo/js/plugin';
registerArvoPlugins($);                                  // register all $.fn.arvo*
registerArvoPlugins($, ['arvoButton', 'arvoSelect']);    // selective

// 3. Auto-initialization (side-effecting, scans DOM on import).
import '@arvo/js/auto';`}
          />
          <DocParagraph>
            The only published entry points are <DocCode>'@arvo/js'</DocCode>, <DocCode>'@arvo/js/plugin'</DocCode>, and <DocCode>'@arvo/js/auto'</DocCode>. The <DocCode>auto</DocCode> and <DocCode>plugin</DocCode> entries are explicitly side-effecting; never expect tree-shaking from them.
          </DocParagraph>
        </DocSection>

        <DocSection id="pkg-styles" title="@arvo/styles">
          <DocParagraph>Component SCSS, mixins, and shared patterns. <DocStrong>SCSS source and pre-built CSS are both supported.</DocStrong></DocParagraph>
          <CodeBlock
            language="scss"
            label="Safe SCSS imports"
            code={`// Full bundle of tokens + base + every component (recommended for apps).
@use '@arvo/styles';

// Just the global base layer (reset, sr-only, reduced-motion, skeleton keyframes).
@use '@arvo/styles/base';

// Individual mixins for app-side composition.
@use '@arvo/styles/mixins/form-input';
@use '@arvo/styles/mixins/form-label';
@use '@arvo/styles/mixins/list-item';
@use '@arvo/styles/mixins/list-group';
@use '@arvo/styles/mixins/inline-alert';
@use '@arvo/styles/mixins/loading';
@use '@arvo/styles/mixins/indicator';
@use '@arvo/styles/mixins/typography';
@use '@arvo/styles/mixins/form-char-counter';`}
          />
          <CodeBlock
            language="ts"
            label="Pre-built CSS (for non-SCSS toolchains)"
            code={`// Drop the precompiled CSS into a JS entry, or link via <link rel="stylesheet">.
import '@arvo/styles/css';
import '@arvo/styles/css/min'; // minified`}
          />
          <DocParagraph>
            The component partials inside <DocCode>src/components/*</DocCode> are an internal organization that may be reshuffled, renamed, or merged. The supported public surface is the four documented exports plus the <DocCode>mixins/*</DocCode> directory.
          </DocParagraph>
        </DocSection>

        <DocSection id="pkg-tokens" title="@arvo/tokens">
          <DocParagraph>Design tokens (SCSS source plus built CSS variables). <DocStrong>SCSS sub-paths and pre-built CSS are documented.</DocStrong></DocParagraph>
          <CodeBlock
            language="scss"
            label="Safe SCSS imports"
            code={`// Everything (variables, colors, spacing, typography, borders, widths, animation, root).
@use '@arvo/tokens/scss';

// Targeted sub-imports for specific token domains.
@use '@arvo/tokens/scss/variables';
@use '@arvo/tokens/scss/colors';
@use '@arvo/tokens/scss/spacing';
@use '@arvo/tokens/scss/typography';
@use '@arvo/tokens/scss/borders';
@use '@arvo/tokens/scss/widths';
@use '@arvo/tokens/scss/animation';

// :root CSS variable set (use in app SCSS to expose --arvo-* on the page).
@use '@arvo/tokens/scss/root';`}
          />
          <DocParagraph>
            Tokens have no JS surface; they ship as SCSS variables (<DocCode>$arvo-*</DocCode>) and CSS variables (<DocCode>--arvo-*</DocCode>). If you need a token value at runtime, read the CSS variable from the DOM (<DocCode>{`getComputedStyle(el).getPropertyValue('--arvo-color-brand-500')`}</DocCode>) instead of hardcoding.
          </DocParagraph>
        </DocSection>

        <DocSection id="pkg-assets" title="@arvo/assets">
          <DocParagraph>Static assets with pre-built CSS (icon font, web fonts, illustrations). <DocStrong>Top-level package and documented sub-exports only.</DocStrong></DocParagraph>
          <CodeBlock
            language="ts"
            label="Safe imports"
            code={`import '@arvo/assets/fonts';        // load web fonts
import '@arvo/assets/icons';        // load o9con icon font + base classes
import '@arvo/assets/illustrations';`}
          />
          <DocParagraph>
            Asset filenames, hashes, and folder structure are part of the build, not the contract. Use the CSS classes the package provides (e.g., <DocCode>.o9con .o9con-search</DocCode>) and let the loader handle the URL.
          </DocParagraph>
        </DocSection>

        <DocSection id="pkg-core-utils" title="@arvo/core, @arvo/utils, @arvo/test-utils">
          <DocParagraph>
            <DocStrong>Internal to the wrappers.</DocStrong> <DocCode>@arvo/core</DocCode> exists to share behavior across framework wrappers (overlay hub, positioning, focus, keyboard primitives). <DocCode>@arvo/utils</DocCode> contains shared DOM helpers (indicator, inline alert, loading). Both are dependencies of <DocCode>@arvo/react</DocCode> and <DocCode>@arvo/js</DocCode>.
          </DocParagraph>
          <DocParagraph>
            <DocStrong>Application code should consume these capabilities through the framework wrapper instead.</DocStrong> Bypassing the wrapper means you replicate (and silently drift from) the wiring it does for events, lifecycle, and accessibility.
          </DocParagraph>
          <DocParagraph>
            <DocCode>@arvo/test-utils</DocCode> is shared test helpers used by the design system itself — not contracted for product test code. Use Testing Library, jest-dom, and Vitest directly.
          </DocParagraph>
        </DocSection>

        <DocSection id="enforcement" title="Lint / enforcement">
          <DocParagraph>To make the boundary mechanical instead of cultural, enforce these patterns in your app's repo.</DocParagraph>
          <CodeBlock
            language="js"
            label="ESLint — no-restricted-imports"
            code={`// .eslintrc.cjs
module.exports = {
  rules: {
    'no-restricted-imports': ['error', {
      patterns: [
        { group: ['@arvo/*/src/*', '@arvo/*/dist/*'],
          message: 'Import from the @arvo/<pkg> root, not from internal paths.' },
        { group: ['@arvo/core', '@arvo/core/*', '@arvo/utils', '@arvo/utils/*'],
          message: 'Use @arvo/react or @arvo/js — @arvo/core and @arvo/utils are internal.' },
      ],
    }],
  },
};`}
          />
          <CodeBlock
            language="bash"
            label="CI grep guard"
            code={`# Fail if any source file deep-imports into @arvo/*.
if rg -n "from ['\\"]@arvo/[^'\\"]+/(src|dist|components|hooks|providers|internal)" src/; then
  echo "Deep import into @arvo/*. Use the package root."
  exit 1
fi`}
          />
        </DocSection>

        <DocSection id="tldr" title="TL;DR">
          <div className="border overflow-hidden dark:border-neutral-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="dark:bg-neutral-800/50">
                  <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Package</th>
                  <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Safe entry points</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['@arvo/react', "'@arvo/react' only"],
                  ['@arvo/js', "'@arvo/js', '@arvo/js/plugin', '@arvo/js/auto'"],
                  ['@arvo/styles', "'@arvo/styles', '@arvo/styles/base', '@arvo/styles/mixins/<name>', '@arvo/styles/css'"],
                  ['@arvo/tokens', "'@arvo/tokens/scss' (and sub-paths), '@arvo/tokens/css'"],
                  ['@arvo/assets', "'@arvo/assets/fonts', '@arvo/assets/icons', '@arvo/assets/illustrations'"],
                  ['@arvo/core', '(none — internal)'],
                  ['@arvo/utils', '(none — internal)'],
                  ['@arvo/test-utils', '(none — internal)'],
                ].map(([pkg, safe]) => (
                  <tr key={pkg} className="border-t dark:border-neutral-700">
                    <td className={`py-2 px-3 font-mono text-sm ${DOC_TABLE_FIRST_COLUMN_CLASS}`}>{pkg}</td>
                    <td className="py-2 px-3 font-mono text-arvo-light-secondary dark:text-neutral-400">{safe}</td>
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
