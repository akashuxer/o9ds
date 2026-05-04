import CodeBlock from '../../LayoutComponents/CodeBlock'
import DocTable from '../../LayoutComponents/DocTable'
import PageHeader from '../../LayoutComponents/PageHeader'
import PageWithToc from '../../LayoutComponents/PageWithToc'
import WhiteBgCard from '../../LayoutComponents/WhiteBgCard'
import {
  BORDER_RADIUS_TOKEN_ROWS,
  BORDER_WIDTH_TOKEN_ROWS,
} from '../../tokens/borderTokens'

const OLD_BORDER_IMG = '/o9DocGraphics/FoundationGraphic/old-border.svg'
const NEW_BORDER_IMG = '/o9DocGraphics/FoundationGraphic/new-border.svg'

const BORDERS_SECTIONS = [
  { id: 'sharp-corners', label: 'Sharp corners' },
  { id: 'policy', label: 'Policy' },
  { id: 'border-radius-tokens', label: 'Border radius tokens' },
  { id: 'applying-border-radius', label: 'Applying border-radius' },
  { id: 'border-width-tokens', label: 'Border width tokens' },
  { id: 'applying-border-width', label: 'Applying border-width' },
]

const bordersIcon = (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const RADIUS_COLUMNS = [
  { key: 'name', label: 'Name', mono: true, tone: 'code' },
  { key: 'valueRem', label: 'Value (rem)', mono: true },
  { key: 'valuePx', label: 'Value (px)', mono: true },
  { key: 'preview', label: 'Preview' },
  { key: 'usage', label: 'Usage' },
]

const WIDTH_COLUMNS = [
  { key: 'name', label: 'Name', mono: true, tone: 'code' },
  { key: 'valueRem', label: 'Value (rem)', mono: true },
  { key: 'valuePx', label: 'Value (px)', mono: true },
  { key: 'preview', label: 'Preview' },
  { key: 'usage', label: 'Usage' },
]

function BorderRadiusPreview({ circle }) {
  return (
    <div
      className={`h-12 w-12 border-2 border-neutral-400 bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-800 ${
        circle ? 'rounded-full' : 'rounded-2xl'
      }`}
      aria-hidden
    />
  )
}

function BorderWidthPreview({ px }) {
  return (
    <div
      className="box-border h-10 w-10 border-solid border-neutral-900 dark:border-white"
      style={{ borderWidth: px }}
      aria-hidden
    />
  )
}

const BORDER_RADIUS_TABLE_ROWS = BORDER_RADIUS_TOKEN_ROWS.map((row) => ({
  ...row,
  preview: <BorderRadiusPreview circle={row.name.includes('circle')} />,
}))

const BORDER_WIDTH_TABLE_ROWS = BORDER_WIDTH_TOKEN_ROWS.map((row) => ({
  ...row,
  preview: <BorderWidthPreview px={row.valuePx} />,
}))

const copyBorderRow = (row) => row.clipboard

export default function Borders() {
  return (
    <PageWithToc sections={BORDERS_SECTIONS}>
      <div className="space-y-12">
        <PageHeader
          title="Borders & radius"
          description="Border width and radius tokens for arvo. Product UI defaults to sharp (0) corners; tokens cover exceptions and legacy surfaces."
          icon={bordersIcon}
          descClassName="mt-4"
        />

        <section id="sharp-corners" className="scroll-mt-24 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-arvo-light-primary dark:text-white">
            <span className="text-arvo-light-secondary dark:text-neutral-500" aria-hidden>
              ✦
            </span>
            Sharp corners
          </h2>

          <WhiteBgCard className="max-w-3xl" unified>
            <p className="m-0 text-lg font-semibold text-arvo-light-primary dark:text-white">
              o9 Branding is Moving to Sharp Borders Instead of Rounded Corners
            </p>
            <p className="mt-4 mb-0 text-base leading-relaxed text-arvo-light-secondary dark:text-neutral-400">
              o9 is modernizing its design language to align with a more sleek, professional, and data-driven aesthetic.
            </p>
            <p className="mt-4 mb-0 text-base leading-relaxed text-arvo-light-secondary dark:text-neutral-400">
              Sharp corners convey a structured and precise look, reinforcing the professional and analytical nature of o9&apos;s UI platform.
            </p>
            <p className="mt-4 mb-0 text-base leading-relaxed text-arvo-light-secondary dark:text-neutral-400">
              From o9con icons to UI components, we are shifting to a 0-radius approach, ensuring a modern, cohesive, and forward-thinking design
              system.
            </p>
          </WhiteBgCard>

          <div
            data-arvo-doc-figure
            className="rounded-xl border border-[#e5e5e5] bg-[#fafafa] px-6 py-6 [background-image:radial-gradient(circle,rgba(148,163,184,0.35)_1px,transparent_1px)] [background-size:14px_14px] dark:!border-[#e5e5e5] dark:!bg-[#fafafa]"
          >
            <p className="mb-4 text-sm font-medium text-[#303030]">Border radius: before and after</p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <figure className="m-0 flex flex-col gap-2">
                <img
                  src={OLD_BORDER_IMG}
                  alt="Previous treatment with rounded corners"
                  className="w-full object-contain"
                />
                <figcaption className="text-center text-sm font-medium text-[#303030]">Before (rounded)</figcaption>
              </figure>
              <figure className="m-0 flex flex-col gap-2">
                <img
                  src={NEW_BORDER_IMG}
                  alt="Current treatment with sharp corners"
                  className="w-full object-contain"
                />
                <figcaption className="text-center text-sm font-medium text-[#303030]">After (sharp)</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section id="policy" className="scroll-mt-24 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-arvo-light-primary dark:text-white">
            <span className="text-arvo-light-secondary dark:text-neutral-500" aria-hidden>
              ✦
            </span>
            Policy
          </h2>
          <p className="m-0 max-w-3xl text-base leading-relaxed text-arvo-light-secondary dark:text-neutral-400">
            Border radius defaults to <strong className="font-semibold text-arvo-light-primary dark:text-neutral-200">0</strong> across the design
            system. Buttons, inputs, cards, badges, and components use sharp (90°) corners unless a tokenized exception applies.
          </p>
          <CodeBlock
            label="SCSS"
            language="scss"
            code={`.surface {
  border-radius: 0;
}`}
          />
        </section>

        <section id="border-radius-tokens" className="scroll-mt-24 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-arvo-light-primary dark:text-white">
            <span className="text-arvo-light-secondary dark:text-neutral-500" aria-hidden>
              ✦
            </span>
            Border radius tokens
          </h2>
          <p className="m-0 max-w-3xl text-base leading-relaxed text-arvo-light-secondary dark:text-neutral-400">
            Prefer <code className="font-mono text-sm px-1" data-arvo-inline-code>0</code> for new UI. The token below makes a full circle—use it for small indicators (for example an unsaved orange dot), not for large rounded cards.
          </p>
          <DocTable
            columns={RADIUS_COLUMNS}
            rows={BORDER_RADIUS_TABLE_ROWS}
            rowCopy={copyBorderRow}
            rowCopyAlwaysVisible
          />

          <div id="applying-border-radius" className="scroll-mt-8 space-y-4 max-w-3xl">
            <h3 className="text-xl font-semibold text-arvo-light-primary dark:text-white">Applying border-radius</h3>
            <CodeBlock
              label="SCSS"
              language="scss"
              code={`.unsaved-indicator {
  border-radius: $arvo-radius-circle;
}`}
            />
          </div>
        </section>

        <section id="border-width-tokens" className="scroll-mt-24 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-arvo-light-primary dark:text-white">
            <span className="text-arvo-light-secondary dark:text-neutral-500" aria-hidden>
              ✦
            </span>
            Border width tokens
          </h2>
          <p className="m-0 max-w-3xl text-base leading-relaxed text-arvo-light-secondary dark:text-neutral-400">
            Standard hairline and emphasis widths for outlines, dividers, and focus rings.
          </p>
          <DocTable
            columns={WIDTH_COLUMNS}
            rows={BORDER_WIDTH_TABLE_ROWS}
            rowCopy={copyBorderRow}
            rowCopyAlwaysVisible
          />
        </section>

        <section id="applying-border-width" className="scroll-mt-24 space-y-4 max-w-3xl">
          <h2 className="text-xl font-semibold text-arvo-light-primary dark:text-white">Applying border-width</h2>
          <CodeBlock
            label="SCSS"
            language="scss"
            code={`.input-outline {
  border-width: $arvo-border-1;
  border-style: solid;
}`}
          />
        </section>
      </div>
    </PageWithToc>
  )
}
