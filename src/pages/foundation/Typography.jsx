import ComponentOverviewCard from '../../LayoutComponents/ComponentOverviewCard'
import DocTable from '../../LayoutComponents/DocTable'
import PageHeader from '../../LayoutComponents/PageHeader'
import PageWithToc from '../../LayoutComponents/PageWithToc'
import WhiteBgCard from '../../LayoutComponents/WhiteBgCard'
import {
  FONT_FAMILY_ROWS,
  FONT_SIZE_TOKENS,
  FONT_WEIGHT_ROWS,
} from '../../tokens/typographyTokens'

const TYPEFACE_GRAPHIC_SRC = '/o9DocGraphics/FoundationGraphic/typeface.svg'

const TYPOGRAPHY_SECTIONS = [
  { id: 'typography-principles', label: 'Principles' },
  { id: 'usage-guidelines', label: 'Usage' },
  { id: 'font-family-tokens', label: 'Font family' },
  { id: 'font-weight-tokens', label: 'Font weight' },
  { id: 'font-size-tokens', label: 'Font size' },
  { id: 'naming-convention', label: 'Token naming' },
  { id: 'heading-mixins', label: 'Heading tokens' },
  { id: 'paragraph-mixins', label: 'Paragraph tokens' },
  { id: 'label-mixins', label: 'Label tokens' },
]

const typographyIcon = (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7-6v12m7-6v12" />
  </svg>
)

const NAMING_COLUMNS = [
  { key: 'code', label: 'Code', mono: true, tone: 'code' },
  { key: 'meaning', label: 'Meaning' },
]

const NAMING_VARIANT_ROWS = [
  { code: 'h', meaning: 'Heading styles' },
  { code: 'p', meaning: 'Paragraph / body text' },
  { code: 'l', meaning: 'Label' },
]

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
  { mixin: 'o9ds-font-l16-r', size: '16px (1rem)', weight: '400', other: '—' },
  { mixin: 'o9ds-font-l14-r', size: '14px', weight: '400', other: '—' },
  { mixin: 'o9ds-font-l14-m', size: '14px', weight: '500', other: '—' },
  { mixin: 'o9ds-font-l14-ru', size: '14px', weight: '400', other: 'text-decoration: underline' },
  { mixin: 'o9ds-font-l12-r', size: '12px', weight: '400', other: '—' },
  { mixin: 'o9ds-font-l12-m', size: '12px', weight: '500', other: '—' },
  { mixin: 'o9ds-font-l12-ru', size: '12px', weight: '400', other: 'text-decoration: underline' },
  { mixin: 'o9ds-font-l10-r', size: '10px (0.625rem)', weight: '400', other: '—' },
]

const FAMILY_COLUMNS = [
  { key: 'token', label: 'Variable', mono: true, tone: 'code' },
  { key: 'maps', label: 'Resolves to' },
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

export default function Typography() {
  return (
    <PageWithToc sections={TYPOGRAPHY_SECTIONS}>
      <div className="space-y-12">
        <PageHeader title="Typography" icon={typographyIcon} />

        <section id="typography-principles" className="space-y-4 max-w-3xl">
          <p className="text-lg text-o9ds-light-primary dark:text-neutral-200 leading-relaxed">
            To make our designed outputs distinctly o9, our typography must embody key characteristics—clarity, balance, and precision. o9 Sans
            is our primary typeface, designed to be easily read, well-proportioned, and sharply contrasted, ensuring a clean and modern aesthetic.
          </p>
          <p className="text-lg text-o9ds-light-primary dark:text-neutral-200 leading-relaxed">
            Our typographic approach is heavily influenced by the International Typographic Style.
          </p>
        </section>

        <section id="usage-guidelines" className="space-y-4">
          <h2 className="text-2xl font-bold text-o9ds-light-primary dark:text-white">Usage</h2>
          <WhiteBgCard className="space-y-3">
            <p className="text-o9ds-light-primary dark:text-neutral-200">
              Do not use the CSS shorthand <code className="font-mono text-sm px-1" data-o9ds-inline-code>font</code> when styling
              elements. Set <code className="font-mono text-sm px-1" data-o9ds-inline-code>font-size</code>,{' '}
              <code className="font-mono text-sm px-1" data-o9ds-inline-code>font-weight</code>, and related properties individually.
            </p>
            <p className="text-o9ds-light-secondary dark:text-neutral-400">
              Mixins are optional but encouraged for consistency with UX guidelines. Body text should inherit{' '}
              <code className="font-mono text-sm" data-o9ds-inline-code>font-family</code> from the document — do not set font-family by
              hand on inner nodes so future dynamic font updates can rely on tokens.
            </p>
          </WhiteBgCard>
        </section>

        <section id="font-family-tokens" className="space-y-4">
          <h2 className="text-2xl font-bold text-o9ds-light-primary dark:text-white">Font family tokens</h2>
          <p className="text-o9ds-light-secondary dark:text-neutral-400 max-w-3xl">
            Primary UI uses <span className="font-mono text-sm text-o9ds-light-primary dark:text-white">$default-font</span> (mapped to{' '}
            <span className="font-mono text-sm">$o9-reg</span>, o9 Sans). Monospace uses{' '}
            <span className="font-mono text-sm">$mono-font</span> → <span className="font-mono text-sm">$o9-mono</span>.
          </p>
          <DocTable columns={FAMILY_COLUMNS} rows={FONT_FAMILY_ROWS} />
        </section>

        <section id="font-weight-tokens" className="space-y-4">
          <h2 className="text-2xl font-bold text-o9ds-light-primary dark:text-white">Font weight tokens</h2>
          <DocTable columns={WEIGHT_COLUMNS} rows={FONT_WEIGHT_ROWS_WITH_PREVIEW} />
        </section>

        <section id="font-size-tokens" className="space-y-4">
          <h2 className="text-2xl font-bold text-o9ds-light-primary dark:text-white">Font size tokens</h2>
          <DocTable tokens={FONT_SIZE_TOKENS} showCopy={false} tokenPreviewMode="fontSize" />
        </section>

        <section id="naming-convention" className="space-y-6">
          <h2 className="text-2xl font-bold text-o9ds-light-primary dark:text-white">Token naming</h2>
          <div className="max-w-3xl">
            <ComponentOverviewCard
              illustrationSrc={TYPEFACE_GRAPHIC_SRC}
              hideFooter
              imageAlt="o9 Sans typeface and scale reference"
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Variants</h3>
            <DocTable columns={NAMING_COLUMNS} rows={NAMING_VARIANT_ROWS} />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Property suffixes</h3>
            <DocTable columns={NAMING_COLUMNS} rows={NAMING_PROPERTY_ROWS} />
          </div>
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
    </PageWithToc>
  )
}
