import { useState, useRef, useEffect, forwardRef } from 'react'
import { useTheme } from '../../context/ThemeContext'
import CodeBlock from '../../LayoutComponents/CodeBlock'
import DocTable from '../../LayoutComponents/DocTable'
import PageHeader from '../../LayoutComponents/PageHeader'
import PageWithToc from '../../LayoutComponents/PageWithToc'
import WhiteBgCard from '../../LayoutComponents/WhiteBgCard'
import {
  BORDER_RADIUS_TOKEN_ROWS,
  BORDER_WIDTH_TOKEN_ROWS,
} from '../../tokens/borderTokens'
import { downloadO9dsBordersScss } from '../../utils/o9dsBordersScss'

const OLD_BORDER_IMG = '/o9DocGraphics/FoundationGraphic/old-border.svg'
const NEW_BORDER_IMG = '/o9DocGraphics/FoundationGraphic/new-border.svg'

const BORDERS_SECTIONS = [
  { id: 'sharp-corners', label: 'Sharp corners' },
  { id: 'policy', label: 'Policy' },
  { id: 'border-radius-tokens', label: 'Border radius tokens' },
  { id: 'applying-border-radius', label: 'Applying border-radius' },
  { id: 'border-width-tokens', label: 'Border width tokens' },
  { id: 'applying-border-width', label: 'Applying border-width' },
  { id: 'borders-download-tokens', label: 'Download tokens' },
]

function DownloadIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
    </svg>
  )
}

const BordersDownloadButton = forwardRef(function BordersDownloadButton({ isLight, className = '' }, ref) {
  return (
    <button
      ref={ref}
      type="button"
      onClick={downloadO9dsBordersScss}
      className={`inline-flex items-center gap-2 border px-4 py-2 text-sm font-medium transition-colors hover:opacity-90 dark:border-neutral-600 dark:text-white ${className}`}
      style={
        isLight
          ? { borderColor: '#010101', backgroundColor: '#010101', color: '#FFFFFF' }
          : { borderColor: '#FFFFFF', backgroundColor: '#FFFFFF', color: '#010101' }
      }
    >
      <DownloadIcon className="h-4 w-4" />
      Download Border Tokens
    </button>
  )
})

function BordersDownloadFab({ isLight, visible }) {
  if (!visible) return null

  return (
    <button
      type="button"
      onClick={downloadO9dsBordersScss}
      aria-label="Download Border Tokens"
      title="Download Border Tokens"
      className="fixed z-40 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-[transform,opacity] hover:scale-105 active:scale-95 bottom-20 right-5 sm:bottom-8 sm:right-8"
      style={
        isLight
          ? { backgroundColor: '#010101', color: '#FFFFFF', boxShadow: '0 4px 14px rgba(1, 1, 1, 0.25)' }
          : { backgroundColor: '#FFFFFF', color: '#010101', boxShadow: '0 4px 14px rgba(0, 0, 0, 0.35)' }
      }
    >
      <DownloadIcon className="h-6 w-6" />
    </button>
  )
}

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

function BorderRadiusPreview({ name }) {
  const style =
    name === '$arvo-radius-circle'
      ? { borderRadius: '999px' }
      : name === '$arvo-radius-16'
        ? { borderRadius: '1rem' }
        : { borderRadius: 0 }

  return (
    <div
      className="h-12 w-12 border-2 border-neutral-400 bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-800"
      style={style}
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
  preview: <BorderRadiusPreview name={row.name} />,
}))

const BORDER_WIDTH_TABLE_ROWS = BORDER_WIDTH_TOKEN_ROWS.map((row) => ({
  ...row,
  preview: <BorderWidthPreview px={row.valuePx} />,
}))

const copyBorderRow = (row) => row.clipboard

export default function Borders() {
  const { theme } = useTheme()
  const isLight = theme === 'light'
  const bordersDownloadBtnRef = useRef(null)
  const [showBordersDownloadFab, setShowBordersDownloadFab] = useState(true)

  useEffect(() => {
    const el = bordersDownloadBtnRef.current
    if (!el) return

    setShowBordersDownloadFab(true)
    const observer = new IntersectionObserver(
      ([entry]) => setShowBordersDownloadFab(!entry.isIntersecting),
      { threshold: 0, rootMargin: '0px 0px -16px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const codeInlineStyle = isLight ? { backgroundColor: '#F2F2F2' } : { backgroundColor: '#262626' }

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
            Prefer <code className="font-mono text-sm px-1" data-arvo-inline-code>$arvo-radius-none</code> (0) for new UI. Use{' '}
            <code className="font-mono text-sm px-1" data-arvo-inline-code>$arvo-radius-circle</code> for small circular indicators (for example an
            unsaved orange dot), not for large rounded cards.
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

        <section
          id="borders-download-tokens"
          className="scroll-mt-24 border p-6 shadow-sm dark:border-neutral-700"
          style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#FFFFFF' } : { backgroundColor: 'transparent' }}
        >
          <h2 className="text-lg font-semibold text-arvo-light-primary dark:text-white mb-2">Download for development</h2>
          <p className="text-sm text-arvo-light-secondary dark:text-neutral-400 mb-4 max-w-2xl" style={isLight ? { color: '#303030' } : undefined}>
            Export border radius and width tokens as{' '}
            <code className="font-mono text-xs px-1" style={codeInlineStyle}>
              _arvo.borders.scss
            </code>{' '}
            and replace{' '}
            <code className="font-mono text-xs px-1" style={codeInlineStyle}>
              tokens/_arvo.borders.scss
            </code>{' '}
            in the o9 Kibo theme.
          </p>
          <BordersDownloadButton ref={bordersDownloadBtnRef} isLight={isLight} />
        </section>
      </div>
      <BordersDownloadFab isLight={isLight} visible={showBordersDownloadFab} />
    </PageWithToc>
  )
}
