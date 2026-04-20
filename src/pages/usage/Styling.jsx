import PageHeader from '../../LayoutComponents/PageHeader'
import PageWithToc from '../../LayoutComponents/PageWithToc'
import CodeBlock from '../../LayoutComponents/CodeBlock'
import DocSection, { DocCallout, DocCode, DocList, DocParagraph, DocStrong } from '../../LayoutComponents/DocSection'

const sections = [
  { id: 'two-layers', label: 'Two layers of contract' },
  { id: 'do', label: 'Do' },
  { id: 'dont', label: "Don't" },
  { id: 'theming', label: 'Theming patterns' },
  { id: 'mixins', label: 'SCSS mixins' },
  { id: 'utilities', label: 'Utilities & icons' },
  { id: 'specificity', label: 'Specificity policy' },
  { id: 'tldr', label: 'TL;DR' },
]

const TOKEN_ROWS = [
  ['Color', '--o9ds-color-{semantic} or --o9ds-color-{role}-{step}', '--o9ds-color-brand-500'],
  ['Spacing', '--o9ds-space-{n}', '--o9ds-space-12'],
  ['Typography', '--o9ds-font-size-{step}, --o9ds-line-height-{step}', '--o9ds-font-size-md'],
  ['Borders', '--o9ds-border-{property}', '--o9ds-border-radius-md'],
  ['Animation', '--o9ds-duration-{step}, --o9ds-easing-{name}', '--o9ds-duration-fast'],
  ['Widths', '--o9ds-width-{step}', '--o9ds-width-form-input'],
]

export default function UsageStyling() {
  return (
    <PageWithToc sections={sections}>
      <div className="space-y-12">
        <PageHeader
          title="Styling & theming"
          description="The library guarantees stability for tokens and per-component CSS variables. It does NOT guarantee anything about internal markup, classnames, specificity, or cascade resolution against internal selectors."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>}
        />

        <DocCallout title="Rule">
          Style through tokens (<DocCode>$o9ds-*</DocCode>, <DocCode>{`var(--o9ds-*)`}</DocCode>) and per-component CSS variables (<DocCode>--o9ds-{`{abbr}`}-*</DocCode>). Never write CSS that targets <DocCode>.o9ds-{`{abbr}`}__{`{element}`}</DocCode> from outside the design system; never use <DocCode>!important</DocCode>; never copy SCSS source into your app.
        </DocCallout>

        <DocSection id="two-layers" title="The two layers of contract">
          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Layer 1 — Design tokens (@o9ds/tokens)</h3>
          <DocParagraph>Tokens are the cross-system source of truth. Exposed two ways:</DocParagraph>
          <DocList items={[
            <span key="1"><DocStrong>SCSS:</DocStrong> <DocCode>$o9ds-color-brand-500</DocCode>, <DocCode>$o9ds-space-12</DocCode>, … via <DocCode>{`@use '@o9ds/tokens/scss'`}</DocCode>.</span>,
            <span key="2"><DocStrong>CSS variables:</DocStrong> <DocCode>--o9ds-color-brand-500</DocCode>, <DocCode>--o9ds-space-12</DocCode>, … exposed on <DocCode>:root</DocCode> by <DocCode>@o9ds/tokens/scss/root</DocCode> or <DocCode>@o9ds/tokens/css</DocCode>.</span>,
          ]} />
          <div className="border overflow-hidden dark:border-neutral-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="dark:bg-neutral-800/50">
                  <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Category</th>
                  <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Pattern</th>
                  <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Example</th>
                </tr>
              </thead>
              <tbody>
                {TOKEN_ROWS.map(([cat, pattern, example]) => (
                  <tr key={cat} className="border-t dark:border-neutral-700">
                    <td className="py-2 px-3 text-o9ds-light-primary dark:text-white">{cat}</td>
                    <td className="py-2 px-3 font-mono text-o9ds-light-secondary dark:text-neutral-400">{pattern}</td>
                    <td className="py-2 px-3 font-mono text-o9ds-light-secondary dark:text-neutral-400">{example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Layer 2 — Per-component CSS variables (--o9ds-{`{abbr}`}-*)</h3>
          <DocParagraph>
            Every component exposes a small, documented set of CSS variables that target its visual contract: dimensions, padding, color slots, typography, icon, border. Set them on the component's root element (or any ancestor) to override appearance without touching internals.
          </DocParagraph>
          <CodeBlock
            language="scss"
            label="Theme a single button"
            code={`.my-cta {
  --o9ds-btn-bg-color: var(--o9ds-color-brand-700);
  --o9ds-btn-text-color: var(--o9ds-color-on-brand);
  --o9ds-btn-padding-inline: var(--o9ds-space-16);
}`}
          />
          <CodeBlock
            language="tsx"
            label="Apply the theme via className"
            code={`<O9Button className="my-cta" label="Get started" variant="primary" />`}
          />
          <DocParagraph>
            The <DocStrong>complete</DocStrong> list of CSS variables for each component is the <DocStrong>CSS Variables</DocStrong> table on its docs page. Anything not in that table is internal.
          </DocParagraph>
        </DocSection>

        <DocSection id="do" title="Do">
          <DocList items={[
            <span key="1"><DocStrong>Use tokens before raw values.</DocStrong> A button background should be <DocCode>{`var(--o9ds-color-brand-500)`}</DocCode>, not <DocCode>#1f5fff</DocCode>.</span>,
            <span key="2"><DocStrong>Use semantic tokens before primitive tokens.</DocStrong> <DocCode>{`var(--o9ds-color-text-primary)`}</DocCode> is more upgrade-safe than <DocCode>{`var(--o9ds-color-gray-900)`}</DocCode>.</span>,
            <span key="3"><DocStrong>Override per-component CSS variables for theming.</DocStrong> Set <DocCode>--o9ds-{`{abbr}`}-*</DocCode> on the component root or a parent.</span>,
            <span key="4"><DocStrong>Scope overrides</DocStrong> — write <DocCode>{`.checkout { --o9ds-btn-bg-color: ...; }`}</DocCode>, not <DocCode>{`.o9ds-btn { ...; }`}</DocCode>.</span>,
            <span key="5"><DocStrong>Use className</DocStrong> for layout / positioning classes (margin, grid placement, width).</span>,
            <span key="6"><DocStrong>Use width / isFullWidth props</DocStrong> on form inputs to control field width. Internally these set <DocCode>--o9ds-form-input-width</DocCode>.</span>,
          ]} />
        </DocSection>

        <DocSection id="dont" title="Don't">
          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Don't override internal selectors</h3>
          <CodeBlock
            language="scss"
            label="Forbidden — targets internals"
            code={`/* FORBIDDEN — targets internals. */
.o9ds-btn {
  background: tomato !important;
}
.o9ds-cb__input + .o9ds-cb__box {
  border-color: red;
}
.o9ds-pop__bdy > div:nth-child(2) {
  padding: 0;
}`}
          />
          <DocParagraph>
            The block class (<DocCode>o9ds-btn</DocCode>) and BEM children (<DocCode>o9ds-cb__box</DocCode>, <DocCode>o9ds-pop__bdy</DocCode>) are part of the <em>implementation</em>, not your styling API. They can change.
          </DocParagraph>

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Don't use !important</h3>
          <DocParagraph>
            <DocCode>!important</DocCode> is the universal sign that you are fighting the cascade — usually because you reached past a CSS variable. The right fix is almost always: set the documented CSS variable instead, on the right scope.
          </DocParagraph>

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Don't hardcode token values</h3>
          <CodeBlock
            language="scss"
            label="Forbidden vs correct"
            code={`/* FORBIDDEN. */
.my-card {
  padding: 12px;
  color: #1f2937;
  font-size: 14px;
}

/* CORRECT. */
.my-card {
  padding: var(--o9ds-space-12);
  color: var(--o9ds-color-text-primary);
  font-size: var(--o9ds-font-size-md);
}`}
          />

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Don't copy SCSS source into your app</h3>
          <DocParagraph>
            If you find yourself wanting to copy <DocCode>_button.scss</DocCode> and tweak it, that is the design system team's signal that an extension point is missing. File a request. Forking guarantees you stop receiving fixes, accessibility improvements, and visual updates.
          </DocParagraph>

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Don't rely on inline style to undo component CSS</h3>
          <DocParagraph>
            Inline <DocCode>style</DocCode> has the highest specificity short of <DocCode>!important</DocCode> and will silently mask the component's own state styles (hover, focus-visible, disabled, loading). If a CSS variable doesn't exist for what you need, request one.
          </DocParagraph>
        </DocSection>

        <DocSection id="theming" title="Theming patterns">
          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">App-wide theme</h3>
          <CodeBlock
            language="scss"
            label="Tokens on a top-level wrapper"
            code={`.app-theme--dark {
  --o9ds-color-text-primary: #fff;
  --o9ds-color-bg-canvas: #111;
  --o9ds-btn-bg-color: var(--o9ds-color-brand-600);
}`}
          />

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Region-scoped theme</h3>
          <CodeBlock
            language="scss"
            label="Same mechanism, scoped to a region"
            code={`.nav--dark {
  --o9ds-color-text-primary: var(--o9ds-color-on-dark);
  --o9ds-link-color: var(--o9ds-color-brand-300);
}`}
          />

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">One-off component theme</h3>
          <CodeBlock
            language="tsx"
            label="Class on the single component"
            code={`<O9Button className="btn--success" label="Apply" />`}
          />
          <CodeBlock
            language="scss"
            code={`.btn--success {
  --o9ds-btn-bg-color: var(--o9ds-color-success-500);
  --o9ds-btn-border-color: var(--o9ds-color-success-700);
}`}
          />

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Multi-mode theming</h3>
          <CodeBlock
            language="scss"
            label="data-* attributes you control on a wrapper"
            code={`[data-app-theme='dark'] {
  --o9ds-color-bg-canvas: #0d1117;
  --o9ds-color-text-primary: #e6edf3;
}
[data-app-theme='hc'] {
  --o9ds-color-text-primary: #ffffff;
  --o9ds-color-border-strong: #ffffff;
}`}
          />
        </DocSection>

        <DocSection id="mixins" title="SCSS mixins — the supported reuse path">
          <DocParagraph>
            <DocCode>@o9ds/styles/mixins/*</DocCode> exposes mixins that the design system itself uses, so application-level patterns (custom forms, custom lists, ad-hoc loading skeletons) match the system look out of the box.
          </DocParagraph>
          <CodeBlock
            language="scss"
            label="Compose with system mixins"
            code={`@use '@o9ds/styles/mixins/form-input';
@use '@o9ds/styles/mixins/form-label';
@use '@o9ds/styles/mixins/list-item';
@use '@o9ds/styles/mixins/loading';
@use '@o9ds/styles/mixins/inline-alert';

.my-custom-field {
  @include form-input.base;
  @include form-input.size('md');
}`}
          />
          <DocParagraph>These mixins <DocStrong>are</DocStrong> part of the contract. The internal partials they assemble are not.</DocParagraph>
        </DocSection>

        <DocSection id="utilities" title="Utilities & icons">
          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Loading skeleton CSS class</h3>
          <DocParagraph>
            The skeleton shimmer used by the loading state is exposed as the <DocCode>o9ds-skeleton</DocCode> utility class for app-side custom layouts. The class is contracted; the internal animation keyframes that drive it are not.
          </DocParagraph>

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">o9ds-sr-only</h3>
          <DocParagraph>
            <DocCode>.o9ds-sr-only</DocCode> (visually hidden but available to assistive tech) is contracted and may be used in app-side templates.
          </DocParagraph>

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Icons (o9con font)</h3>
          <DocList items={[
            <span key="1"><DocCode>o9con</DocCode> is the base class. <DocCode>o9con-{`{name}`}</DocCode> is the icon glyph class.</span>,
            <span key="2">The list of valid icon names is published; use those names with components that accept an <DocCode>icon</DocCode> prop (Button, Search, ActionMenu items, …).</span>,
            <span key="3">Don't reference the font file URL directly. Always go through the class.</span>,
            <span key="4">The icon font is delivered by <DocCode>@o9ds/assets/icons</DocCode> — include it once in your app entry.</span>,
          ]} />
        </DocSection>

        <DocSection id="specificity" title="Specificity policy">
          <DocParagraph>Your overrides should look like this (lowest to highest preferred specificity):</DocParagraph>
          <ol className="list-decimal pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
            <li>CSS variables on <DocCode>:root</DocCode> or a wrapper.</li>
            <li>CSS variables on the component instance via <DocCode>className</DocCode>.</li>
            <li>A single class targeting an app-side wrapper, never the component block.</li>
          </ol>
          <DocParagraph>
            Anything that requires <DocCode>{`>`}</DocCode>, <DocCode>:nth-*</DocCode>, descendant combinators into an <DocCode>o9ds-*</DocCode> class, attribute selectors against internal data attributes, or <DocCode>!important</DocCode> is a smell.
          </DocParagraph>
        </DocSection>

        <DocSection id="tldr" title="TL;DR">
          <CodeBlock
            language="scss"
            label="Do vs don't, summarized"
            code={`/* DO. */
.checkout {
  --o9ds-btn-bg-color: var(--o9ds-color-brand-700);
  --o9ds-cb-accent-color: var(--o9ds-color-success-500);
}

/* DON'T. */
.checkout .o9ds-btn { background: #1f5fff !important; }
.o9ds-cb__box       { border: 2px solid red; }`}
          />
        </DocSection>
      </div>
    </PageWithToc>
  )
}
