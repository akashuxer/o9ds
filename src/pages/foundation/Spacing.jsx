import CodeBlock from '../../LayoutComponents/CodeBlock'
import DocTable from '../../LayoutComponents/DocTable'
import PageHeader from '../../LayoutComponents/PageHeader'
import PageWithToc from '../../LayoutComponents/PageWithToc'
import { SPACING_TOKENS } from '../../tokens/spacingTokens'

const SPACING_SECTIONS = [
  { id: 'spacing-scale-tokens', label: 'Spacing Scale / Tokens' },
  { id: 'applying-padding', label: 'Applying padding' },
  { id: 'applying-margin', label: 'Applying margin' },
  { id: 'applying-gap', label: 'Applying gap' },
]

const spacingIcon = (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
  </svg>
)

const SPACING_COLUMNS = [
  { key: 'name', label: 'Name', mono: true, tone: 'code' },
  { key: 'valueRem', label: 'Value (rem)', mono: true },
  { key: 'valuePx', label: 'Value (px)', mono: true },
  { key: 'preview', label: 'Preview' },
]

function SpacingPreviewBar({ px }) {
  return <div className="h-8 max-w-full bg-neutral-600 dark:bg-neutral-500" style={{ width: px }} />
}

const SPACING_TABLE_ROWS = SPACING_TOKENS.map((t) => ({
  name: `$${t.token}`,
  valueRem: t.value,
  valuePx: t.px,
  preview: <SpacingPreviewBar px={t.px} />,
}))

const copySpacingRowName = (row) => row.name

export default function Spacing() {
  return (
    <PageWithToc sections={SPACING_SECTIONS}>
      <div className="space-y-12">
        <PageHeader
          title="Spacing"
          description="A consistent 4px base unit for padding, margins, and gaps across layouts."
          icon={spacingIcon}
          descClassName="mt-4"
        />

        <section id="spacing-scale-tokens" className="scroll-mt-24 space-y-8">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-arvo-light-primary dark:text-white">
            <span className="text-arvo-light-secondary dark:text-neutral-500" aria-hidden>
              ✦
            </span>
            Spacing Scale / Tokens
          </h2>

          <p className="m-0 max-w-3xl text-base leading-relaxed text-arvo-light-secondary dark:text-neutral-400">
            Use the SCSS variables below for padding, margin, and gap. Values scale from 1px to 80px on the same system as the rest of arvo.
          </p>

          <DocTable
            columns={SPACING_COLUMNS}
            rows={SPACING_TABLE_ROWS}
            rowCopy={copySpacingRowName}
            rowCopyAlwaysVisible
          />
        </section>

        <section id="applying-padding" className="scroll-mt-24 space-y-4 max-w-3xl">
          <h2 className="text-xl font-semibold text-arvo-light-primary dark:text-white">Applying padding</h2>
          <CodeBlock
            label="SCSS"
            language="scss"
            code={`.card {
  padding: $arvo-space-16;
}`}
          />
        </section>

        <section id="applying-margin" className="scroll-mt-24 space-y-4 max-w-3xl">
          <h2 className="text-xl font-semibold text-arvo-light-primary dark:text-white">Applying margin</h2>
          <CodeBlock
            label="SCSS"
            language="scss"
            code={`.section {
  margin-bottom: $arvo-space-24;
}`}
          />
        </section>

        <section id="applying-gap" className="scroll-mt-24 space-y-4 max-w-3xl">
          <h2 className="text-xl font-semibold text-arvo-light-primary dark:text-white">Applying gap</h2>
          <CodeBlock
            label="SCSS"
            language="scss"
            code={`.toolbar {
  display: flex;
  gap: $arvo-space-16;
}`}
          />
        </section>
      </div>
    </PageWithToc>
  )
}
