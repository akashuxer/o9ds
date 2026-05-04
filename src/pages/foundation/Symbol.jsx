import { useState, useMemo } from 'react'
import { useTheme } from '../../context/ThemeContext'
import PageWithToc from '../../LayoutComponents/PageWithToc'
import CodeBlock from '../../LayoutComponents/CodeBlock'
import { SYMBOL_SIZE_TOKENS_SCSS } from '../../tokens/symbolTokens'

/** @typedef {{ id: string, label: string }} SymbolItem */

/** Single theme for now; use \`/symbol/light/{NAME}.svg\`. Dark assets can live under \`/symbol/dark/\` later. */
const SYMBOL_BASE = '/symbol/light'

/** @type {SymbolItem[]} */
const FILE_TYPE_SYMBOLS = [
  { id: 'CSV', label: 'CSV' },
  { id: 'DOC', label: 'DOC' },
  { id: 'DOCX', label: 'DOCX' },
  { id: 'HTML', label: 'HTML' },
  { id: 'IMG', label: 'IMG' },
  { id: 'JPEG', label: 'JPEG' },
  { id: 'JSON', label: 'JSON' },
  { id: 'PDF', label: 'PDF' },
  { id: 'PNG', label: 'PNG' },
  { id: 'PPT', label: 'PPT' },
  { id: 'RAR', label: 'RAR' },
  { id: 'SVG', label: 'SVG' },
  { id: 'TXT', label: 'TXT' },
  { id: 'XLSX', label: 'XLSX' },
  { id: 'XML', label: 'XML' },
  { id: 'ZIP', label: 'ZIP' },
]

/** Supported display sizes — 24px is default */
const SYMBOL_SIZES = [24, 32]
const DEFAULT_SYMBOL_SIZE = 24

function CopyIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  )
}

function CheckDoubleIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l4 4 9-9" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 16l3 3 7-7" />
    </svg>
  )
}

/** @param {{ item: SymbolItem, size: number }} props */
function SymbolCard({ item, size }) {
  const [copied, setCopied] = useState(false)
  const { theme } = useTheme()
  const isLight = theme === 'light'
  const src = `${SYMBOL_BASE}/${item.id}.svg`
  const snippet = `<img src="${src}" width="${size}" height="${size}" alt="${item.label} file type" />`

  const handleCopy = (e) => {
    e.stopPropagation()
    navigator.clipboard.writeText(snippet).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  return (
    <div
      className="group border dark:border-neutral-700 overflow-hidden shadow-sm hover:shadow-md dark:hover:border-neutral-600 transition-all"
      style={{
        backgroundColor: isLight ? '#FFFFFF' : '#171717',
        borderColor: isLight ? '#E5E5E5' : undefined,
      }}
      data-arvo-card={isLight ? 'light-white' : 'dark'}
    >
      <div className="flex flex-col items-center p-6">
        <div
          className="flex items-center justify-center shrink-0 overflow-hidden"
          style={{ width: size, height: size }}
        >
          <img src={src} alt="" width={size} height={size} className="object-contain" aria-hidden />
        </div>
        <div className="mt-4 flex flex-col items-center gap-1 w-full">
          <span
            className="text-sm font-medium dark:text-white"
            style={isLight ? { color: '#010101' } : { color: '#fff' }}
          >
            {item.label}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="p-1.5 border opacity-0 group-hover:opacity-100 transition-opacity"
            style={
              copied
                ? { borderColor: '#00c278', backgroundColor: '#00c278', color: '#fff' }
                : isLight
                  ? { borderColor: '#E5E5E5', color: '#303030' }
                  : { borderColor: '#404040', color: '#a3a3a3' }
            }
            title="Copy code"
            aria-label="Copy code"
          >
            {copied ? <CheckDoubleIcon className="h-3.5 w-3.5" style={{ color: '#fff' }} /> : <CopyIcon className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Symbol() {
  const [gallerySize, setGallerySize] = useState(DEFAULT_SYMBOL_SIZE)
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const onThisPageSections = useMemo(
    () => [
      { id: 'symbol-intro', label: 'Overview' },
      { id: 'symbol-usage', label: 'Usage' },
      { id: 'symbol-behavior', label: 'Behavior & principles' },
      { id: 'symbol-size', label: 'Size & responsiveness' },
      { id: 'symbol-variants', label: 'Variants' },
      { id: 'symbol-dos', label: "Do's and Don'ts" },
      { id: 'symbol-gallery', label: 'Symbol Gallery' },
      { id: 'symbol-future', label: 'Future' },
      { id: 'symbol-code', label: 'Implementation' },
    ],
    []
  )

  return (
    <PageWithToc sections={onThisPageSections}>
      <div className="max-w-4xl space-y-10">
        <section>
          <h1 className="group flex items-center gap-2 text-[30px] font-bold text-arvo-light-primary dark:text-white pb-2">
            <span
              className="flex h-8 w-8 items-center justify-center dark:bg-neutral-700"
              data-arvo-avatar
              data-arvo-avatar-header
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </span>
            Symbol
          </h1>
        </section>

        <section id="symbol-intro" className="space-y-4">
          <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Overview</h2>
          <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
            File Type Icons are visual indicators used to represent different file formats (for example PDF, DOCX, PNG). They help users quickly recognize the type of content without needing to read file names, improving scanability and decision-making in file-heavy interfaces.
          </p>
          <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
            These icons are designed to be simple, consistent, and easily distinguishable through color and label, enabling fast visual recognition.
          </p>
        </section>

        <section id="symbol-usage" className="space-y-4">
          <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Usage</h2>
          <p className="text-arvo-light-secondary dark:text-neutral-400">File Type Icons can be used in multiple contexts:</p>
          <ul className="list-disc list-inside space-y-2 text-arvo-light-secondary dark:text-neutral-400">
            <li>
              <strong className="text-arvo-light-primary dark:text-white">File preview / attachments</strong> — Helps users understand the type of uploaded or available files at a glance.
            </li>
            <li>
              <strong className="text-arvo-light-primary dark:text-white">Upload component</strong> — Displays file type immediately after upload, giving users confirmation and clarity.
            </li>
            <li>
              <strong className="text-arvo-light-primary dark:text-white">Standalone usage</strong> — Can be used independently in lists, tables, cards, or file explorers wherever file representation is needed.
            </li>
          </ul>
        </section>

        <section id="symbol-behavior" className="space-y-4">
          <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Behavior &amp; principles</h2>
          <ul className="space-y-3 text-arvo-light-secondary dark:text-neutral-400">
            <li>
              <strong className="text-arvo-light-primary dark:text-white">Instant recognition</strong> — Each icon uses a combination of color and file extension label so users can identify file types quickly.
            </li>
            <li>
              <strong className="text-arvo-light-primary dark:text-white">Consistency</strong> — Icons maintain a uniform shape, structure, and styling across all file types.
            </li>
            <li>
              <strong className="text-arvo-light-primary dark:text-white">Clarity over decoration</strong> — The design is intentionally minimal to prioritize usability over visual complexity.
            </li>
          </ul>
        </section>

        <section id="symbol-size" className="space-y-4">
          <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Size &amp; responsiveness</h2>
          <ul className="list-disc list-inside space-y-2 text-arvo-light-secondary dark:text-neutral-400">
            <li>Only two dimensions are supported: 24px (default) and 32px—no continuous scaling.</li>
            <li>The same asset is shown at the chosen size across preview, upload, and standalone use.</li>
            <li>Keeps visual consistency and avoids arbitrary sizes across the system.</li>
          </ul>
          <ul className="list-disc list-inside space-y-1 text-sm text-arvo-light-secondary dark:text-neutral-400">
            <li>
              <strong className="text-arvo-light-primary dark:text-white">24px</strong> — default
            </li>
            <li>
              <strong className="text-arvo-light-primary dark:text-white">32px</strong> — alternate fixed size
            </li>
          </ul>
          <p className="text-sm text-arvo-light-secondary dark:text-neutral-400">Use only these two sizes; do not stretch to arbitrary dimensions.</p>
        </section>

        <section id="symbol-variants" className="space-y-4">
          <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Variants</h2>
          <p className="text-arvo-light-secondary dark:text-neutral-400">
            Each file type is represented by a distinct color (category-based grouping, for example documents, images, data) and a clear file extension label (for example PDF, CSV, JSON).
          </p>
          <p className="text-arvo-light-secondary dark:text-neutral-400">Examples include:</p>
          <ul className="list-disc list-inside space-y-2 text-arvo-light-secondary dark:text-neutral-400">
            <li>
              <strong className="text-arvo-light-primary dark:text-white">Document:</strong> PDF, DOC, DOCX, TXT, PPT
            </li>
            <li>
              <strong className="text-arvo-light-primary dark:text-white">Image:</strong> PNG, JPEG, IMG, SVG
            </li>
            <li>
              <strong className="text-arvo-light-primary dark:text-white">Data:</strong> CSV, XLSX, JSON, XML
            </li>
            <li>
              <strong className="text-arvo-light-primary dark:text-white">Compressed:</strong> ZIP, RAR
            </li>
            <li>
              <strong className="text-arvo-light-primary dark:text-white">Web:</strong> HTML
            </li>
          </ul>
        </section>

        <section id="symbol-dos" className="space-y-4">
          <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Do&apos;s and Don&apos;ts</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div
              className="border dark:border-neutral-700 p-6 shadow-sm"
              style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#FFFFFF' } : undefined}
            >
              <h3 className="font-semibold text-arvo-light-primary dark:text-white mb-3">Do&apos;s</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-arvo-light-secondary dark:text-neutral-400">
                <li>Use alongside file names for better clarity</li>
                <li>Keep placement consistent in lists and previews</li>
                <li>Use in upload flows to reinforce feedback</li>
              </ul>
            </div>
            <div
              className="border dark:border-neutral-700 p-6 shadow-sm"
              style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#FFFFFF' } : undefined}
            >
              <h3 className="font-semibold text-arvo-light-primary dark:text-white mb-3">Don&apos;ts</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-arvo-light-secondary dark:text-neutral-400">
                <li>Don&apos;t resize or stretch the icon</li>
                <li>Don&apos;t replace label text with custom abbreviations</li>
                <li>Don&apos;t use colors outside the defined system</li>
                <li>Don&apos;t overload with additional visual styles (shadows, gradients, and so on)</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="symbol-gallery" className="space-y-6">
          <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Symbol Gallery</h2>
          <p className="text-sm text-arvo-light-secondary dark:text-neutral-400">
            Assets currently use the same SVG for light and dark themes. When dark-specific assets are added, they can be served from <code className="px-1 py-0.5" data-arvo-inline-code>/symbol/dark/</code> without changing the layout here.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm dark:text-neutral-400" style={isLight ? { color: '#303030' } : undefined}>
              Symbol size:
            </span>
            <div className="flex gap-2">
              {SYMBOL_SIZES.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setGallerySize(s)}
                  data-arvo-size-selected={gallerySize === s ? '' : undefined}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    gallerySize === s
                      ? 'dark:text-black dark:bg-white'
                      : 'border dark:border-neutral-600 dark:text-neutral-400 hover:text-arvo-light-primary dark:hover:text-white'
                  }`}
                  style={
                    gallerySize === s
                      ? { backgroundColor: isLight ? '#010101' : undefined, color: isLight ? '#FFFFFF' : undefined }
                      : { borderColor: isLight ? '#E5E5E5' : undefined, color: isLight ? '#303030' : undefined }
                  }
                >
                  {s}px
                </button>
              ))}
            </div>
            <span className="text-sm dark:text-neutral-400" style={isLight ? { color: '#303030' } : undefined}>
              Default: {DEFAULT_SYMBOL_SIZE}px
            </span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FILE_TYPE_SYMBOLS.map((item) => (
              <SymbolCard key={item.id} item={item} size={gallerySize} />
            ))}
          </div>
        </section>

        <section
          id="symbol-future"
          className="border dark:border-neutral-700 p-6 md:p-8 shadow-sm dark:bg-transparent"
          style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#FAFAFA' } : undefined}
        >
          <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white mb-3">Future</h2>
          <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
            Connector logos (for example Microsoft, Gmail, Google Drive) will be documented here when they are added to the design system.
          </p>
        </section>

        <section id="symbol-code" className="space-y-6">
          <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Implementation</h2>
          <p className="text-arvo-light-secondary dark:text-neutral-400">
            Render at <strong className="text-arvo-light-primary dark:text-white">24×24px</strong> (default) or{' '}
            <strong className="text-arvo-light-primary dark:text-white">32×32px</strong> only. Use the published SVG path; set width and height explicitly—do not scale with arbitrary CSS values.
          </p>
          <CodeBlock
            code={`<img src="${SYMBOL_BASE}/PDF.svg" width="24" height="24" alt="PDF file type" />`}
            label="Example: PDF at 24px (default)"
          />
          <CodeBlock
            code={`<img src="${SYMBOL_BASE}/PDF.svg" width="32" height="32" alt="PDF file type" />`}
            label="Example: PDF at 32px"
          />
          <div>
            <h3 className="text-lg font-semibold text-arvo-light-primary dark:text-white mb-3">Size tokens</h3>
            <p className="text-arvo-light-secondary dark:text-neutral-400 mb-4">SCSS variables for the two symbol sizes:</p>
            <CodeBlock code={SYMBOL_SIZE_TOKENS_SCSS} label="Symbol size tokens" />
          </div>
        </section>
      </div>
    </PageWithToc>
  )
}
