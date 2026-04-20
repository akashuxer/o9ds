import PageHeader from '../../LayoutComponents/PageHeader'
import PageWithToc from '../../LayoutComponents/PageWithToc'
import CodeBlock from '../../LayoutComponents/CodeBlock'
import DocSection, { DocCode, DocList, DocParagraph, DocStrong } from '../../LayoutComponents/DocSection'

const sections = [
  { id: 'flow', label: 'Token flow' },
  { id: 'layers', label: 'Two layers' },
  { id: 'categories', label: 'Token categories' },
  { id: 'discipline', label: 'CSS variable discipline' },
  { id: 'why-external', label: 'Why tokens live outside the platform' },
]

export default function TokenPipeline() {
  return (
    <PageWithToc sections={sections}>
      <div className="space-y-12">
        <PageHeader
          title="Token Pipeline"
          description="Tokens are the cross-system source of truth. They originate in Figma, ship as SCSS source plus prebuilt CSS variables, and feed every other package via @use."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4z" /></svg>}
        />

        <DocSection id="flow" title="Token flow">
          <CodeBlock
            language="text"
            label="Figma → tokens → styles → consumer"
            code={`Figma (design canvas)
   │  variables + styles export
   ▼
@o9ds/tokens
   ├─ src/scss/_variables.scss      ($o9ds-* SCSS variables)
   ├─ src/scss/_colors.scss
   ├─ src/scss/_spacing.scss
   ├─ src/scss/_typography.scss
   ├─ src/scss/_borders.scss
   ├─ src/scss/_widths.scss
   ├─ src/scss/_animation.scss
   ├─ src/scss/_root.scss           (emits :root --o9ds-* CSS variables)
   └─ dist/o9ds-tokens.css          (prebuilt CSS — for non-SCSS consumers)
   │
   ▼
@o9ds/styles  @use '@o9ds/tokens/scss';
   ├─ Compiles tokens into component CSS
   ├─ Emits BEM classes (.o9ds-{abbr}__{element}--{modifier})
   └─ Emits per-component --o9ds-{abbr}-* variables on each component root
   │
   ▼
@o9ds/react / @o9ds/js
   └─ Consume CSS classes; expose props that map to BEM modifiers
   │
   ▼
Consumer applications
   ├─ Read tokens via var(--o9ds-color-*)/var(--o9ds-space-*)
   └─ Override per-component variables on app-side wrappers`}
          />
        </DocSection>

        <DocSection id="layers" title="Two layers">
          <ol className="list-decimal pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
            <li>
              <DocStrong>Compile-time</DocStrong> — SCSS variables (<DocCode>$o9ds-*</DocCode>) defined in <DocCode>@o9ds/tokens/src/scss/</DocCode>. Used inside mixins and the styles package during Sass compilation. Not visible at runtime.
            </li>
            <li>
              <DocStrong>Runtime</DocStrong> — CSS custom properties (<DocCode>--o9ds-*</DocCode>) emitted onto <DocCode>:root</DocCode> by <DocCode>_root.scss</DocCode>. Theme, brand, and mode layers compose via mixins so consuming applications can override at any cascade level.
            </li>
          </ol>
          <CodeBlock
            language="scss"
            label="Compile-time → runtime"
            code={`// _variables.scss (compile-time)
$o9ds-color-brand-500: #ff1e39;

// _root.scss (runtime — emits CSS variable)
:root {
  --o9ds-color-brand-500: #{$o9ds-color-brand-500};
}

// Component SCSS uses both
.o9ds-btn {
  --o9ds-btn-bg-color: var(--o9ds-color-brand-500);
  background: var(--o9ds-btn-bg-color);
  padding: $o9ds-space-12; // raw token reference at compile-time
}`}
          />
        </DocSection>

        <DocSection id="categories" title="Token categories">
          <DocList items={[
            <span key="1"><DocStrong>Color</DocStrong> — primitive (gray, brand, semantic) and semantic (text-primary, bg-canvas, border-strong).</span>,
            <span key="2"><DocStrong>Spacing</DocStrong> — single scale (<DocCode>$o9ds-space-2 / 4 / 6 / 8 / 12 / 16 / 24 / …</DocCode>).</span>,
            <span key="3"><DocStrong>Typography</DocStrong> — font sizes, weights, line heights, font families.</span>,
            <span key="4"><DocStrong>Borders</DocStrong> — widths and (deliberately limited) radii.</span>,
            <span key="5"><DocStrong>Widths</DocStrong> — form input widths, container widths.</span>,
            <span key="6"><DocStrong>Animation</DocStrong> — durations and easings (with <DocCode>prefers-reduced-motion</DocCode> escapes).</span>,
          ]} />
        </DocSection>

        <DocSection id="discipline" title="CSS variable discipline">
          <DocParagraph>
            Component-level CSS variables (<DocCode>--o9ds-{`{abbr}`}-*</DocCode>) are created <DocStrong>only</DocStrong> when the value changes per size, variant, state, or parent override. Static token references are used directly.
          </DocParagraph>
          <CodeBlock
            language="scss"
            label="When to expose a per-component CSS variable"
            code={`// Yes — value differs per size/variant/parent.
.o9ds-btn {
  --o9ds-btn-padding-inline: var(--o9ds-space-12);
  &--sm { --o9ds-btn-padding-inline: var(--o9ds-space-8); }
  &--lg { --o9ds-btn-padding-inline: var(--o9ds-space-16); }
  padding-inline: var(--o9ds-btn-padding-inline);
}

// No — static, never changes per instance. Use the token directly.
.o9ds-btn {
  letter-spacing: $o9ds-letter-spacing-default;
}`}
          />
        </DocSection>

        <DocSection id="why-external" title="Why tokens live outside the platform">
          <DocList items={[
            <span key="1"><DocStrong>One version across all applications</DocStrong> — eliminating copy-paste drift.</span>,
            <span key="2"><DocStrong>Independent versioning</DocStrong> — token updates ship without a platform release.</span>,
            <span key="3"><DocStrong>Cross-application consistency</DocStrong> — every product renders identical colors, spacing, and typography.</span>,
            <span key="4"><DocStrong>Reduced platform bundle</DocStrong> — fonts, icons, and illustrations load from the package rather than being duplicated per app.</span>,
          ]} />
        </DocSection>
      </div>
    </PageWithToc>
  )
}
