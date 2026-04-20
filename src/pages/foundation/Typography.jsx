import { useMemo, useState } from 'react'
import ComponentOverviewCard from '../../LayoutComponents/ComponentOverviewCard'
import CodeBlock from '../../LayoutComponents/CodeBlock'
import DocTable from '../../LayoutComponents/DocTable'
import DocTabs from '../../LayoutComponents/DocTabs'
import PageHeader from '../../LayoutComponents/PageHeader'
import PageWithToc from '../../LayoutComponents/PageWithToc'
import { useTheme } from '../../context/ThemeContext'
import { GLOBAL_TOKEN_HEX } from '../../tokens/globalColorTokens'
import { resolveSemanticToHex, SEMANTIC_TEXT } from '../../tokens/semanticColorTokens'
import { FONT_SIZE_TOKENS, FONT_WEIGHT_ROWS, TYPE_STYLE_VARIANT_DOC } from '../../tokens/typographyTokens'

const TYPEFACE_GRAPHIC_SRC = '/o9DocGraphics/FoundationGraphic/typeface.svg'
const TYPO1_SRC = '/o9DocGraphics/FoundationGraphic/typo1.svg'
const TYPO2_SRC = '/o9DocGraphics/FoundationGraphic/typo2.svg'

const typographyTabs = ['Overview', 'Tokens']

const typographyIcon = (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7-6v12m7-6v12" />
  </svg>
)

const NAMING_COLUMNS = [
  { key: 'code', label: 'Code', mono: true, tone: 'code' },
  { key: 'meaning', label: 'Meaning' },
]

const VARIANT_CATEGORIZATION_COLUMNS = [
  { key: 'name', label: 'Name', mono: true, tone: 'code' },
  { key: 'meaning', label: 'Meaning' },
]

const TYPE_STYLE_VARIANT_COLUMNS = [
  { key: 'preview', label: 'Preview' },
  { key: 'token', label: 'Token', mono: true, tone: 'code' },
  { key: 'useFor', label: 'Use for' },
]

/**
 * Resolved preview color via `resolveSemanticToHex` (same as Colors → Semantic → Text) so
 * light/dark match `GLOBAL_TOKEN_HEX` mappings; `--o9ds-type-variant-color` is set to that hex
 * so global `main td` !important rules still lose to index.css `[data-o9ds-type-variant-preview]`.
 */
function TypeStyleVariantPreview({ token, variantLabel, underline, inverse }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const row = SEMANTIC_TEXT.find((r) => r.token === token)
  if (!row) return null
  const hex = resolveSemanticToHex(row, 'o9theme', isDark)
  const baseStyle = {
    '--o9ds-type-variant-color': hex,
    fontWeight: 600,
    fontFamily: 'inherit',
  }
  if (inverse) {
    const bg = isDark ? GLOBAL_TOKEN_HEX['o9ds-global-gray-01'] : GLOBAL_TOKEN_HEX['o9ds-global-black']
    return (
      <span
        data-o9ds-type-variant-preview
        className="inline-block px-2 py-1 font-sans text-sm"
        style={{
          ...baseStyle,
          backgroundColor: bg,
        }}
      >
        {variantLabel}
      </span>
    )
  }
  return (
    <span
      data-o9ds-type-variant-preview
      className="font-sans text-sm"
      style={{
        ...baseStyle,
        textDecoration: underline ? 'underline' : undefined,
        textUnderlineOffset: underline ? '2px' : undefined,
      }}
    >
      {variantLabel}
    </span>
  )
}

/** Structural template ↔ example token with segment colors (matches design reference). */
function TokenNamingPatternCard() {
  const dash = <span className="text-[#FCFCFD]">–</span>
  const hy = <span className="text-[#FCFCFD]">-</span>
  return (
    <div
      className="max-w-4xl border-2 border-dashed border-neutral-300 bg-white p-6 dark:border-neutral-600 dark:bg-neutral-950"
      data-o9ds-dotted-card
      role="group"
      aria-label="Naming pattern: system–category–variant–size–property maps to o9ds-font-h32-r with matching segment colors"
    >
      <div className="flex flex-wrap items-center gap-4 sm:gap-5">
        <div className="min-w-0 rounded-sm bg-[#010101] px-4 py-3 font-mono text-sm leading-relaxed shadow-inner">
          <span className="text-[#FCFCFD]">system</span>
          {dash}
          <span className="text-emerald-400">category</span>
          {dash}
          <span className="text-violet-400">variant</span>
          {dash}
          <span className="text-cyan-400">size</span>
          {dash}
          <span className="text-[#F07A62]">property</span>
        </div>
        <span className="shrink-0 text-xl font-light text-o9ds-light-secondary dark:text-neutral-500" aria-hidden>
          →
        </span>
        <div className="min-w-0 rounded-sm bg-[#010101] px-4 py-3 font-mono text-sm leading-relaxed shadow-inner">
          <span className="text-[#FCFCFD]">o9ds</span>
          {hy}
          <span className="text-emerald-400">font</span>
          {hy}
          <span className="text-violet-400">h</span>
          <span className="text-cyan-400">32</span>
          {hy}
          <span className="text-[#F07A62]">r</span>
        </div>
      </div>
    </div>
  )
}

function VariantNameCell({ label, letter }) {
  return (
    <span className="inline-block align-top text-left">
      <span className="block font-mono text-sm font-medium">{label}</span>
      <span className="block font-mono text-sm font-medium">&quot;{letter}&quot;</span>
    </span>
  )
}

const VARIANT_CATEGORIZATION_ROWS = [
  {
    name: <VariantNameCell label="heading" letter="h" />,
    meaning:
      'Used for side panels, drawers, popovers, windows, dialogs, cards, and section headings.',
  },
  {
    name: <VariantNameCell label="paragraph" letter="p" />,
    meaning:
      'Used for non-interactive body text such as alert messages, badge messages, normal text, and tooltip labels.',
  },
  {
    name: <VariantNameCell label="label" letter="l" />,
    meaning:
      'Used for interactive elements such as buttons, links, form labels, form input values, dropdown options, tree widgets, checkboxes, radios, and toggle labels. When the same element can be interactive or non-interactive depending on context, use label tokens.',
  },
]

const TYPSCALE_SIZES_PX = [64, 40, 32, 24, 20, 18, 16, 14, 12, 10]

const TYPSCALE_SAMPLE = 'Active hierarchy is an ordered collection of levels'

const NAMING_PROPERTY_ROWS = [
  { code: 'r', meaning: 'Regular weight' },
  { code: 'ri', meaning: 'Regular italic' },
  { code: 'rc', meaning: 'Regular caps (uppercase)' },
  { code: 'm', meaning: 'Medium weight' },
  { code: 'mi', meaning: 'Medium italic' },
  { code: 'mc', meaning: 'Medium caps (uppercase)' },
  { code: 'b', meaning: 'Bold' },
  { code: 'bi', meaning: 'Bold italic' },
  { code: 'bc', meaning: 'Bold caps (uppercase)' },
  { code: 'ru', meaning: 'Regular or medium with underline (paragraph/label only)' },
]

const MIXIN_COLUMNS = [
  { key: 'mixin', label: 'Name', mono: true, tone: 'code' },
  { key: 'size', label: 'Size' },
  { key: 'weight', label: 'Weight' },
  { key: 'other', label: 'Other' },
]

const MIXIN_ROW_COPY = (row) => `@include ${row.mixin};`

const HEADING_MIXIN_ROWS = [
  { mixin: 'o9ds-font-h64-r', size: '64px (4rem)', weight: '400', other: '—' },
  { mixin: 'o9ds-font-h40-r', size: '40px (2.5rem)', weight: '400', other: '—' },
  { mixin: 'o9ds-font-h32-r', size: '32px (2rem)', weight: '400', other: '—' },
  { mixin: 'o9ds-font-h20-r', size: '20px (1.25rem)', weight: '400', other: '—' },
  { mixin: 'o9ds-font-h18-r', size: '18px (1.125rem)', weight: '400', other: '—' },
  { mixin: 'o9ds-font-h16-m', size: '16px (1rem)', weight: '500', other: '—' },
  { mixin: 'o9ds-font-h14-r', size: '14px (0.875rem)', weight: '400', other: '—' },
  { mixin: 'o9ds-font-h14-rc', size: '14px', weight: '400', other: 'text-transform: uppercase' },
  { mixin: 'o9ds-font-h14-m', size: '14px', weight: '500', other: '—' },
  { mixin: 'o9ds-font-h12-rc', size: '12px (0.75rem)', weight: '400', other: 'text-transform: uppercase' },
  { mixin: 'o9ds-font-h12-m', size: '12px', weight: '500', other: '—' },
  { mixin: 'o9ds-font-h12-r', size: '12px', weight: '400', other: '—' },
  { mixin: 'o9ds-font-h12-mc', size: '12px', weight: '500', other: 'text-transform: uppercase' },
]

const PARAGRAPH_MIXIN_ROWS = [
  { mixin: 'o9ds-font-p16-r', size: '16px (1rem)', weight: '400', other: '—' },
  { mixin: 'o9ds-font-p16-m', size: '16px', weight: '500', other: '—' },
  { mixin: 'o9ds-font-p14-r', size: '14px', weight: '400', other: '—' },
  { mixin: 'o9ds-font-p14-m', size: '14px', weight: '500', other: '—' },
  { mixin: 'o9ds-font-p14-b', size: '14px', weight: '700', other: '—' },
  { mixin: 'o9ds-font-p12-r', size: '12px', weight: '400', other: '—' },
  { mixin: 'o9ds-font-p12-m', size: '12px', weight: '500', other: '—' },
  { mixin: 'o9ds-font-p12-ru', size: '12px', weight: '500', other: 'text-decoration: underline' },
  { mixin: 'o9ds-font-p10-r', size: '10px (0.625rem)', weight: '400', other: '—' },
]

const LABEL_MIXIN_ROWS = [
  { mixin: 'o9ds-font-l40-r', size: '40px (2.5rem)', weight: '400', other: '—' },
  { mixin: 'o9ds-font-l32-r', size: '32px (2rem)', weight: '400', other: '—' },
  { mixin: 'o9ds-font-l24-r', size: '24px (1.5rem)', weight: '400', other: '—' },
  { mixin: 'o9ds-font-l16-r', size: '16px (1rem)', weight: '400', other: '—' },
  { mixin: 'o9ds-font-l14-r', size: '14px', weight: '400', other: '—' },
  { mixin: 'o9ds-font-l14-m', size: '14px', weight: '500', other: '—' },
  { mixin: 'o9ds-font-l14-ru', size: '14px', weight: '400', other: 'text-decoration: underline' },
  { mixin: 'o9ds-font-l12-r', size: '12px', weight: '400', other: '—' },
  { mixin: 'o9ds-font-l12-m', size: '12px', weight: '500', other: '—' },
  { mixin: 'o9ds-font-l12-ru', size: '12px', weight: '400', other: 'text-decoration: underline' },
  { mixin: 'o9ds-font-l10-r', size: '10px (0.625rem)', weight: '400', other: '—' },
]

const WEIGHT_COLUMNS = [
  { key: 'token', label: 'Variable', mono: true, tone: 'code' },
  { key: 'value', label: 'Value', mono: true },
  { key: 'preview', label: 'Preview' },
]

const FONT_WEIGHT_PREVIEW_SAMPLE = 'o9 Sans'

const FONT_WEIGHT_ROWS_WITH_PREVIEW = FONT_WEIGHT_ROWS.map((r) => ({
  ...r,
  preview: (
    <span
      className="font-sans text-o9ds-light-primary dark:text-white"
      style={{ fontWeight: Number(r.value) }}
    >
      {FONT_WEIGHT_PREVIEW_SAMPLE}
    </span>
  ),
}))

const TYPE_STYLE_VARIANT_ROWS = TYPE_STYLE_VARIANT_DOC.map((doc) => ({
  preview: (
    <TypeStyleVariantPreview
      token={doc.token}
      variantLabel={doc.variantLabel}
      underline={doc.underline}
      inverse={doc.inverse}
    />
  ),
  token: `$${doc.token}`,
  useFor: doc.useFor,
}))

export default function Typography() {
  const [activeTab, setActiveTab] = useState('Overview')

  const sections = useMemo(() => {
    if (activeTab === 'Overview') {
      return [
        { id: 'typography-typeface', label: 'Typeface' },
        { id: 'typography-fallback-stack', label: 'Fallback font stack' },
        { id: 'typography-root-font-size', label: 'Root font size' },
        { id: 'typography-typescale', label: 'Typescale' },
        { id: 'naming-convention', label: 'Naming convention' },
        { id: 'naming-anatomy', label: 'Anatomy' },
        { id: 'variant-categorization', label: 'Variant categorization' },
        { id: 'property-suffixes', label: 'Property suffixes' },
        { id: 'type-style-variants', label: 'Type style variants' },
      ]
    }
    return [
      { id: 'font-weight-tokens', label: 'Font weight' },
      { id: 'font-size-tokens', label: 'Font size' },
      { id: 'tokens-naming', label: 'Token naming' },
      { id: 'heading-mixins', label: 'Heading tokens' },
      { id: 'paragraph-mixins', label: 'Paragraph tokens' },
      { id: 'label-mixins', label: 'Label tokens' },
    ]
  }, [activeTab])

  return (
    <PageWithToc sections={sections}>
      <div className="space-y-12">
        <PageHeader
          title="Typography"
          icon={typographyIcon}
          description="The o9 Design System uses o9Sans as its primary typeface for clarity, balance, and precision across the product."
          descClassName="mt-4 text-o9ds-light-primary dark:text-neutral-200"
        />

        <DocTabs tabs={typographyTabs} activeTab={activeTab} onSelect={setActiveTab} />

        {activeTab === 'Overview' && (
          <div className="space-y-12">
            <section id="typography-typeface" className="space-y-6 max-w-3xl">
              <div className="overflow-hidden rounded-xl border border-neutral-200/90 bg-gradient-to-b from-neutral-50 via-white to-neutral-50/80 p-8 shadow-sm dark:border-neutral-700 dark:from-neutral-900/40 dark:via-neutral-950 dark:to-neutral-900/30">
                <img
                  src={TYPO1_SRC}
                  alt="o9Sans typography overview"
                  className="mx-auto w-full max-w-2xl object-contain select-none"
                  draggable={false}
                />
              </div>
              <h2 className="text-2xl font-bold text-o9ds-light-primary dark:text-white">
                <span className="text-o9ds-light-secondary dark:text-neutral-500 mr-1.5" aria-hidden>
                  ✦
                </span>
                Typeface
              </h2>
              <p className="text-lg text-o9ds-light-primary dark:text-neutral-200 leading-relaxed">
                o9ds uses o9Sans as its primary typeface.
              </p>
              <p className="text-lg text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Beyond o9Sans, Roboto is available as a more condensed option for tenants who prefer it. Tenants can set the platform
                default to either o9Sans or Roboto.
              </p>
              <p className="text-lg text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Noto Sans is included for non-Latin scripts, so global users have a consistent experience.
              </p>
              <div
                className="border-2 border-dashed border-neutral-300 bg-white p-6 dark:border-neutral-600 dark:bg-neutral-950 max-w-3xl"
                data-o9ds-dotted-card
              >
                <img
                  src={TYPO2_SRC}
                  alt="Typography scale reference: o9Sans typeface styles"
                  className="w-full h-auto"
                />
              </div>

              <div id="typography-fallback-stack" className="space-y-4 scroll-mt-24">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Fallback font stack</h3>
                <p className="text-lg text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                  The design system uses a CSS font stack so fallback fonts load in order: the browser loads o9Sans first, then Noto Sans
                  if needed, then a generic system sans-serif stack for body text.
                </p>
                <CodeBlock language="scss" code={`font-family: "o9Sans", "Noto Sans", Arial, sans-serif;`} />
              </div>

              <div id="typography-root-font-size" className="space-y-4 scroll-mt-24">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Root font size</h3>
                <p className="text-lg text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                  The system is responsive and uses rem units. The base font size in o9ds is 16px (1rem).
                </p>
                <CodeBlock language="scss" code={`html {\n  font-size: 1rem; /* 16px */\n}`} />
              </div>
            </section>

            <section id="typography-typescale" className="space-y-6 max-w-3xl scroll-mt-24">
              <h2 className="text-2xl font-bold text-o9ds-light-primary dark:text-white">
                <span className="text-o9ds-light-secondary dark:text-neutral-500 mr-1.5" aria-hidden>
                  ✦
                </span>
                Typescale
              </h2>
              <p className="text-lg text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed max-w-3xl">
                o9Sans sizes in pixels (1rem = 16px). The same sample line appears at each step so you can compare hierarchy at a glance.
              </p>
              <div className="relative max-w-3xl">
                {TYPSCALE_SIZES_PX.map((px) => (
                  <div key={px} className="mb-7 last:mb-0">
                    <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-o9ds-light-secondary dark:text-neutral-500">
                      Font {px}
                    </p>
                    <p
                      className="font-sans text-o9ds-light-primary dark:text-white leading-[1.15] tracking-[-0.02em]"
                      style={{ fontSize: `${px}px` }}
                    >
                      {TYPSCALE_SAMPLE}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="naming-convention" className="space-y-6 max-w-4xl">
              <h2 className="text-2xl font-bold text-o9ds-light-primary dark:text-white">
                <span className="text-o9ds-light-secondary dark:text-neutral-500 mr-1.5" aria-hidden>
                  ✦
                </span>
                Naming convention for typography style tokens
              </h2>
              <p className="text-lg text-o9ds-light-secondary dark:text-neutral-400 max-w-3xl">
                Token names follow a pattern from the system prefix through variant, size, and property, as shown below.
              </p>
              <TokenNamingPatternCard />

              <div id="naming-anatomy" className="space-y-3 scroll-mt-24">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Anatomy</h3>
                <ol className="list-decimal list-inside space-y-2 text-lg text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                  <li>
                    <strong className="text-o9ds-light-primary dark:text-white font-medium">o9ds</strong> — Prefix for the o9 Design System.
                  </li>
                  <li>
                    <strong className="text-o9ds-light-primary dark:text-white font-medium">font</strong> — Indicates a typography font token.
                  </li>
                  <li>
                    <strong className="text-o9ds-light-primary dark:text-white font-medium">variant</strong> — Defines the usage category (heading, paragraph, or label).
                  </li>
                  <li>
                    <strong className="text-o9ds-light-primary dark:text-white font-medium">size</strong> — Defines the font size in the token name.
                  </li>
                  <li>
                    <strong className="text-o9ds-light-primary dark:text-white font-medium">property</strong> — Defines the font weight and style suffix.
                  </li>
                </ol>
              </div>

              <div id="variant-categorization" className="space-y-4 scroll-mt-24">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Variant categorization</h3>
                <p className="text-lg text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed max-w-3xl">
                  Typography variables are grouped into three variants to clarify how font sizes are used in the UI.
                </p>
                <DocTable columns={VARIANT_CATEGORIZATION_COLUMNS} rows={VARIANT_CATEGORIZATION_ROWS} />
              </div>

              <div id="property-suffixes" className="space-y-4 scroll-mt-24">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Property suffixes</h3>
                <DocTable columns={NAMING_COLUMNS} rows={NAMING_PROPERTY_ROWS} />
              </div>

              <div className="max-w-3xl pt-4">
                <ComponentOverviewCard
                  illustrationSrc={TYPEFACE_GRAPHIC_SRC}
                  hideFooter
                  imageAlt="o9 Sans typeface and scale reference"
                />
              </div>
            </section>

            <section id="type-style-variants" className="space-y-6 max-w-4xl scroll-mt-24">
              <h2 className="text-2xl font-bold text-o9ds-light-primary dark:text-white">
                <span className="text-o9ds-light-secondary dark:text-neutral-500 mr-1.5" aria-hidden>
                  ✦
                </span>
                Type style variants
              </h2>
              <p className="text-lg text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed max-w-3xl">
                Type styles let you tune o9ds typography beyond the default scale. Variants build on top of your hierarchies so readers can
                scan meaning—state, emphasis, and affordance—without relying on size alone.
              </p>
              <p className="text-lg text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed max-w-3xl">
                Pair each text style with the semantic text tokens below so color stays aligned with the rest of the system.
              </p>
              <p className="rounded-md border border-neutral-200/90 bg-neutral-50/90 px-4 py-3 text-sm leading-relaxed text-o9ds-light-secondary dark:border-neutral-700 dark:bg-neutral-900/40 dark:text-neutral-300 max-w-3xl">
                <span className="font-semibold text-o9ds-light-primary dark:text-white">Note:</span> Color is not the only way to convey
                information. For critical messages, combine color with shape, pattern, or icons so the meaning is not lost for users who do
                not perceive color alone.
              </p>
              <DocTable columns={TYPE_STYLE_VARIANT_COLUMNS} rows={TYPE_STYLE_VARIANT_ROWS} />
            </section>
          </div>
        )}

        {activeTab === 'Tokens' && (
          <div className="space-y-12">
            <section id="font-weight-tokens" className="space-y-4">
              <h2 className="text-2xl font-bold text-o9ds-light-primary dark:text-white">Font weight tokens</h2>
              <p className="max-w-3xl text-lg text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Weight adds emphasis within typographic hierarchies and can signal how important content is on screen. o9ds recommends{' '}
                <strong className="text-o9ds-light-primary dark:text-white font-medium">Regular</strong> and{' '}
                <strong className="text-o9ds-light-primary dark:text-white font-medium">Medium</strong> weights, and{' '}
                <strong className="text-o9ds-light-primary dark:text-white font-medium">Bold</strong> only in exceptional cases, to cover
                most use cases.
              </p>
              <DocTable columns={WEIGHT_COLUMNS} rows={FONT_WEIGHT_ROWS_WITH_PREVIEW} />
            </section>

            <section id="font-size-tokens" className="space-y-4">
              <h2 className="text-2xl font-bold text-o9ds-light-primary dark:text-white">Font size tokens</h2>
              <DocTable tokens={FONT_SIZE_TOKENS} showCopy={false} tokenPreviewMode="fontSize" />
            </section>

            <section id="tokens-naming" className="space-y-4">
              <h2 className="text-2xl font-bold text-o9ds-light-primary dark:text-white">Token naming</h2>
              <p className="text-lg text-o9ds-light-secondary dark:text-neutral-400 max-w-3xl">
                Mixins follow <code className="font-mono text-sm" data-o9ds-inline-code>o9ds-font-{'{variant}{size}-{property}'}</code>: variant
                (h / p / l), optical size in the name (10, 12, 14, …), then the style suffix. See the{' '}
                <strong className="text-o9ds-light-primary dark:text-white font-medium">Overview</strong> tab for variant categorization and property suffixes.
              </p>
            </section>

            <section id="heading-mixins" className="space-y-4">
              <h2 className="text-2xl font-bold text-o9ds-light-primary dark:text-white">Heading tokens</h2>
              <DocTable columns={MIXIN_COLUMNS} rows={HEADING_MIXIN_ROWS} rowCopy={MIXIN_ROW_COPY} rowCopyAlwaysVisible />
            </section>

            <section id="paragraph-mixins" className="space-y-4">
              <h2 className="text-2xl font-bold text-o9ds-light-primary dark:text-white">Paragraph tokens</h2>
              <DocTable columns={MIXIN_COLUMNS} rows={PARAGRAPH_MIXIN_ROWS} rowCopy={MIXIN_ROW_COPY} rowCopyAlwaysVisible />
            </section>

            <section id="label-mixins" className="space-y-4">
              <h2 className="text-2xl font-bold text-o9ds-light-primary dark:text-white">Label tokens</h2>
              <DocTable columns={MIXIN_COLUMNS} rows={LABEL_MIXIN_ROWS} rowCopy={MIXIN_ROW_COPY} rowCopyAlwaysVisible />
            </section>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
