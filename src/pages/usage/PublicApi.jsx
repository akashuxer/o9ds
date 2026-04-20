import PageHeader from '../../LayoutComponents/PageHeader'
import PageWithToc from '../../LayoutComponents/PageWithToc'
import CodeBlock from '../../LayoutComponents/CodeBlock'
import DocSection, { DocCallout, DocCode, DocList, DocParagraph, DocStrong } from '../../LayoutComponents/DocSection'

const sections = [
  { id: 'what-public-means', label: 'What "public" means' },
  { id: 'pkg-react', label: '@o9ds/react' },
  { id: 'pkg-js', label: '@o9ds/js' },
  { id: 'pkg-styles', label: '@o9ds/styles' },
  { id: 'pkg-tokens', label: '@o9ds/tokens' },
  { id: 'pkg-assets', label: '@o9ds/assets' },
  { id: 'pkg-core-utils', label: '@o9ds/core, /utils, /test-utils' },
  { id: 'enforcement', label: 'Lint / enforcement' },
  { id: 'tldr', label: 'TL;DR table' },
]

export default function UsagePublicApi() {
  return (
    <PageWithToc sections={sections}>
      <div className="space-y-12">
        <PageHeader
          title="Public API & imports"
          description="The single most common source of upgrade pain is deep imports. This page lists what is safe to import from each @o9ds/* package, and what is not."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}
        />

        <DocCallout title="Rule">
          If an import path is not listed in this page, it is <DocStrong>not</DocStrong> part of the public API. It can change in any release without a major bump.
        </DocCallout>

        <DocSection id="what-public-means" title='What "public" means here'>
          <DocParagraph>
            For every <DocCode>@o9ds/*</DocCode> package, "public" is defined by the <DocCode>exports</DocCode> field in that package's <DocCode>package.json</DocCode>. Every other path — including anything inside <DocCode>dist/</DocCode>, <DocCode>src/</DocCode>, internal helper folders, or non-exported sub-paths — is private.
          </DocParagraph>
          <DocList items={[
            <span key="1">The list below is exhaustive. If a path is not here, do not import it.</span>,
            <span key="2">TypeScript may <em>let</em> you import private paths because the files are physically present on disk. The language does not know about your contract; this document does.</span>,
            <span key="3">Internal symbols may be re-exported in a future minor release. Do not pre-empt this — request the export through the design system team.</span>,
          ]} />
        </DocSection>

        <DocSection id="pkg-react" title="@o9ds/react">
          <DocParagraph>The React component library. <DocStrong>Single entry point.</DocStrong></DocParagraph>
          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Safe imports</h3>
          <CodeBlock
            language="ts"
            label="Single barrel — @o9ds/react"
            code={`import {
  // providers
  OverlayProvider, useOverlayContext,
  TooltipProvider, useTooltipManager,
  O9ToastProvider, useToast,

  // hooks (advanced composition only)
  useOverlay, useFocusTrap, useKeyboardNav, usePositioning, useTooltip,

  // components — every O9* exported from the barrel is public
  O9Button, O9IconButton, O9FabButton, O9ButtonGroup,
  O9Link, O9ButtonLink, O9IconButtonLink,
  O9Textbox, O9Textarea, O9NumberInput, O9Search,
  O9Select, O9Combobox, O9Listbox,
  O9Checkbox, O9CheckboxGroup, O9Radio, O9RadioGroup, O9Switch,
  O9Popover, O9HybridPopover, O9Tooltip, O9ActionMenu,
  O9DropdownButton, O9DropdownIconButton,
  O9BadgeAlert, O9Tabstrip, O9Breadcrumb,

  // types follow the O9{Name}Props pattern
  type O9ButtonProps,
  type O9SelectProps,
} from '@o9ds/react';`}
          />
          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Forbidden imports</h3>
          <CodeBlock
            language="ts"
            label="Do not import internal paths"
            code={`// FORBIDDEN — internal source paths
import { Button } from '@o9ds/react/src/components/Button/Button';

// FORBIDDEN — compiled internals
import { O9Button } from '@o9ds/react/dist/components/Button/Button.js';

// FORBIDDEN — unexported internal helpers
import { mergeRefs } from '@o9ds/react/src/internal/refs';

// FORBIDDEN — non-O9 prefixed names are not public
import { Button } from '@o9ds/react';`}
          />
          <DocParagraph>
            Anything outside the barrel can be renamed, moved, deleted, or have its signature changed in any release. Internal hooks (<DocCode>useControllableState</DocCode>, <DocCode>mergeRefs</DocCode>, focus orchestration helpers) are part of the implementation, not the contract.
          </DocParagraph>
        </DocSection>

        <DocSection id="pkg-js" title="@o9ds/js">
          <DocParagraph>The vanilla JS / jQuery component library. <DocStrong>Three documented entry points.</DocStrong></DocParagraph>
          <CodeBlock
            language="js"
            label="Three documented entry points"
            code={`// 1. Component classes and overlay setup (recommended modern usage).
import {
  O9Button, O9Textbox, O9Select, O9Combobox, O9Popover, O9HybridPopover,
  O9Checkbox, O9CheckboxGroup, O9Radio, O9RadioGroup, O9Switch,
  O9NumberInput, O9Textarea, O9Search, O9ActionMenu, O9Listbox,
  O9DropdownButton, O9DropdownIconButton,
  O9ButtonGroup, O9FabButton, O9IconButton,
  O9Link, O9ButtonLink, O9IconButtonLink,
  O9Tabstrip, O9Breadcrumb, O9BadgeAlert, O9Toast, O9Tooltip,
  setupOverlayPlugin, setupTooltips,
} from '@o9ds/js';

// 2. jQuery plugin registration (opt-in, side-effecting).
import { registerO9Plugins } from '@o9ds/js/plugin';
registerO9Plugins($);                              // register all $.fn.o9*
registerO9Plugins($, ['o9Button', 'o9Select']);    // selective

// 3. Auto-initialization (side-effecting, scans DOM on import).
import '@o9ds/js/auto';`}
          />
          <DocParagraph>
            The only published entry points are <DocCode>'@o9ds/js'</DocCode>, <DocCode>'@o9ds/js/plugin'</DocCode>, and <DocCode>'@o9ds/js/auto'</DocCode>. The <DocCode>auto</DocCode> and <DocCode>plugin</DocCode> entries are explicitly side-effecting; never expect tree-shaking from them.
          </DocParagraph>
        </DocSection>

        <DocSection id="pkg-styles" title="@o9ds/styles">
          <DocParagraph>Component SCSS, mixins, and shared patterns. <DocStrong>SCSS source and pre-built CSS are both supported.</DocStrong></DocParagraph>
          <CodeBlock
            language="scss"
            label="Safe SCSS imports"
            code={`// Full bundle of tokens + base + every component (recommended for apps).
@use '@o9ds/styles';

// Just the global base layer (reset, sr-only, reduced-motion, skeleton keyframes).
@use '@o9ds/styles/base';

// Individual mixins for app-side composition.
@use '@o9ds/styles/mixins/form-input';
@use '@o9ds/styles/mixins/form-label';
@use '@o9ds/styles/mixins/list-item';
@use '@o9ds/styles/mixins/list-group';
@use '@o9ds/styles/mixins/inline-alert';
@use '@o9ds/styles/mixins/loading';
@use '@o9ds/styles/mixins/indicator';
@use '@o9ds/styles/mixins/typography';
@use '@o9ds/styles/mixins/form-char-counter';`}
          />
          <CodeBlock
            language="ts"
            label="Pre-built CSS (for non-SCSS toolchains)"
            code={`// Drop the precompiled CSS into a JS entry, or link via <link rel="stylesheet">.
import '@o9ds/styles/css';
import '@o9ds/styles/css/min'; // minified`}
          />
          <DocParagraph>
            The component partials inside <DocCode>src/components/*</DocCode> are an internal organization that may be reshuffled, renamed, or merged. The supported public surface is the four documented exports plus the <DocCode>mixins/*</DocCode> directory.
          </DocParagraph>
        </DocSection>

        <DocSection id="pkg-tokens" title="@o9ds/tokens">
          <DocParagraph>Design tokens (SCSS source plus built CSS variables). <DocStrong>SCSS sub-paths and pre-built CSS are documented.</DocStrong></DocParagraph>
          <CodeBlock
            language="scss"
            label="Safe SCSS imports"
            code={`// Everything (variables, colors, spacing, typography, borders, widths, animation, root).
@use '@o9ds/tokens/scss';

// Targeted sub-imports for specific token domains.
@use '@o9ds/tokens/scss/variables';
@use '@o9ds/tokens/scss/colors';
@use '@o9ds/tokens/scss/spacing';
@use '@o9ds/tokens/scss/typography';
@use '@o9ds/tokens/scss/borders';
@use '@o9ds/tokens/scss/widths';
@use '@o9ds/tokens/scss/animation';

// :root CSS variable set (use in app SCSS to expose --o9ds-* on the page).
@use '@o9ds/tokens/scss/root';`}
          />
          <DocParagraph>
            Tokens have no JS surface; they ship as SCSS variables (<DocCode>$o9ds-*</DocCode>) and CSS variables (<DocCode>--o9ds-*</DocCode>). If you need a token value at runtime, read the CSS variable from the DOM (<DocCode>{`getComputedStyle(el).getPropertyValue('--o9ds-color-brand-500')`}</DocCode>) instead of hardcoding.
          </DocParagraph>
        </DocSection>

        <DocSection id="pkg-assets" title="@o9ds/assets">
          <DocParagraph>Static assets with pre-built CSS (icon font, web fonts, illustrations). <DocStrong>Top-level package and documented sub-exports only.</DocStrong></DocParagraph>
          <CodeBlock
            language="ts"
            label="Safe imports"
            code={`import '@o9ds/assets/fonts';        // load web fonts
import '@o9ds/assets/icons';        // load o9con icon font + base classes
import '@o9ds/assets/illustrations';`}
          />
          <DocParagraph>
            Asset filenames, hashes, and folder structure are part of the build, not the contract. Use the CSS classes the package provides (e.g., <DocCode>.o9con .o9con-search</DocCode>) and let the loader handle the URL.
          </DocParagraph>
        </DocSection>

        <DocSection id="pkg-core-utils" title="@o9ds/core, @o9ds/utils, @o9ds/test-utils">
          <DocParagraph>
            <DocStrong>Internal to the wrappers.</DocStrong> <DocCode>@o9ds/core</DocCode> exists to share behavior across framework wrappers (overlay hub, positioning, focus, keyboard primitives). <DocCode>@o9ds/utils</DocCode> contains shared DOM helpers (indicator, inline alert, loading). Both are dependencies of <DocCode>@o9ds/react</DocCode> and <DocCode>@o9ds/js</DocCode>.
          </DocParagraph>
          <DocParagraph>
            <DocStrong>Application code should consume these capabilities through the framework wrapper instead.</DocStrong> Bypassing the wrapper means you replicate (and silently drift from) the wiring it does for events, lifecycle, and accessibility.
          </DocParagraph>
          <DocParagraph>
            <DocCode>@o9ds/test-utils</DocCode> is shared test helpers used by the design system itself — not contracted for product test code. Use Testing Library, jest-dom, and Vitest directly.
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
        { group: ['@o9ds/*/src/*', '@o9ds/*/dist/*'],
          message: 'Import from the @o9ds/<pkg> root, not from internal paths.' },
        { group: ['@o9ds/core', '@o9ds/core/*', '@o9ds/utils', '@o9ds/utils/*'],
          message: 'Use @o9ds/react or @o9ds/js — @o9ds/core and @o9ds/utils are internal.' },
      ],
    }],
  },
};`}
          />
          <CodeBlock
            language="bash"
            label="CI grep guard"
            code={`# Fail if any source file deep-imports into @o9ds/*.
if rg -n "from ['\\"]@o9ds/[^'\\"]+/(src|dist|components|hooks|providers|internal)" src/; then
  echo "Deep import into @o9ds/*. Use the package root."
  exit 1
fi`}
          />
        </DocSection>

        <DocSection id="tldr" title="TL;DR">
          <div className="border overflow-hidden dark:border-neutral-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="dark:bg-neutral-800/50">
                  <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Package</th>
                  <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Safe entry points</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['@o9ds/react', "'@o9ds/react' only"],
                  ['@o9ds/js', "'@o9ds/js', '@o9ds/js/plugin', '@o9ds/js/auto'"],
                  ['@o9ds/styles', "'@o9ds/styles', '@o9ds/styles/base', '@o9ds/styles/mixins/<name>', '@o9ds/styles/css'"],
                  ['@o9ds/tokens', "'@o9ds/tokens/scss' (and sub-paths), '@o9ds/tokens/css'"],
                  ['@o9ds/assets', "'@o9ds/assets/fonts', '@o9ds/assets/icons', '@o9ds/assets/illustrations'"],
                  ['@o9ds/core', '(none — internal)'],
                  ['@o9ds/utils', '(none — internal)'],
                  ['@o9ds/test-utils', '(none — internal)'],
                ].map(([pkg, safe]) => (
                  <tr key={pkg} className="border-t dark:border-neutral-700">
                    <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{pkg}</td>
                    <td className="py-2 px-3 font-mono text-o9ds-light-secondary dark:text-neutral-400">{safe}</td>
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
