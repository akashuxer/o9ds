import { useEffect, useMemo, useRef, useState } from 'react'
import PageHeader from '../../LayoutComponents/PageHeader'
import PageWithToc from '../../LayoutComponents/PageWithToc'
import DocTabs, { useDocTabUrl } from '../../LayoutComponents/DocTabs'
import DocSection, { DocList, DocParagraph, DocStrong } from '../../LayoutComponents/DocSection'
import DocTable from '../../LayoutComponents/DocTable'
import CodeBlock from '../../LayoutComponents/CodeBlock'
import WhiteBgCard from '../../LayoutComponents/WhiteBgCard'
import { TokenDownloadFab, TokenDownloadSection } from '../../LayoutComponents/TokenScssDownload'
import { DocTabRouteProvider } from '../../context/DocTabRouteContext'
import { PATH_LOGOS_BASE } from '../../data/docPaths'
import { useTheme } from '../../context/ThemeContext'
import {
  LOGO_CATALOG,
  LOGO_CATEGORIES,
  LOGOS_GALLERY_TOC,
  LOGOS_OVERVIEW_TOC,
  SCALE_PREVIEW_LOGO,
  logoAssetUrl,
} from '../../data/logosCatalog'
import {
  DEFAULT_IMAGE_SIZE_PX,
  IMAGE_SIZE_PX_LIST,
  IMAGE_SIZE_TOKEN_ROWS,
  imageSizeTokenClipboard,
} from '../../tokens/imageSizeTokens'
import {
  ARVO_IMAGE_SIZE_SCSS_FILENAME,
  ARVO_IMAGE_SIZE_SCSS_REPLACE_PATH,
  downloadArvoImageSizeScss,
} from '../../utils/arvoImageSizeScss'

const LOGOS_TABS = ['Overview', 'Logo Gallery']

const TOKEN_COLUMNS = [
  { key: 'token', label: 'Token', mono: true },
  { key: 'value', label: 'Value', mono: true },
  { key: 'pxLabel', label: 'Size', mono: true },
]

const TOKEN_TABLE_ROWS = IMAGE_SIZE_TOKEN_ROWS.map((row) => ({
  token: row.token,
  value: row.value,
  px: row.px,
  pxLabel: `${row.px}px`,
}))

const logosIcon = (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
)

function CopyIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  )
}

function CheckIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function sizeButtonStyle(isLight, selected) {
  if (selected) {
    return { backgroundColor: isLight ? '#010101' : undefined, color: isLight ? '#FFFFFF' : undefined }
  }
  return { borderColor: isLight ? '#E5E5E5' : undefined, color: isLight ? '#303030' : undefined }
}

/** @param {{ item: typeof LOGO_CATALOG[number], size: number }} props */
function LogoCard({ item, size }) {
  const [copied, setCopied] = useState(false)
  const { theme } = useTheme()
  const isLight = theme === 'light'
  const src = logoAssetUrl(item.file, theme)
  const snippet = `<img src="${src}" width="${size}" height="${size}" alt="${item.label}" />`

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
      <div className="flex flex-col items-center p-5">
        <div
          className="flex items-center justify-center shrink-0"
          style={{ width: size, height: size, minHeight: size }}
        >
          <img
            src={src}
            alt=""
            width={size}
            height={size}
            className="max-w-full max-h-full object-contain"
            aria-hidden
          />
        </div>
        <div className="mt-3 flex flex-col items-center gap-1 w-full min-h-[2.5rem]">
          <span
            className="text-sm font-medium text-center leading-snug dark:text-white"
            style={isLight ? { color: '#010101' } : undefined}
          >
            {item.label}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="p-1.5 border opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity"
            style={
              copied
                ? { borderColor: '#00c278', backgroundColor: '#00c278', color: '#fff' }
                : isLight
                  ? { borderColor: '#E5E5E5', color: '#303030' }
                  : { borderColor: '#404040', color: '#a3a3a3' }
            }
            title="Copy markup"
            aria-label={`Copy markup for ${item.label}`}
          >
            {copied ? (
              <CheckIcon className="h-3.5 w-3.5" style={{ color: '#fff' }} />
            ) : (
              <CopyIcon className="h-3.5 w-3.5" />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

/** Foundations → Assets — integration & partner logos. */
export default function Logos() {
  const { theme } = useTheme()
  const isLight = theme === 'light'
  const [activeTab, setActiveTab] = useDocTabUrl(LOGOS_TABS, { basePath: PATH_LOGOS_BASE })
  const [gallerySize, setGallerySize] = useState(DEFAULT_IMAGE_SIZE_PX)
  const [categoryFilter, setCategoryFilter] = useState('all')
  const downloadBtnRef = useRef(null)
  const [showDownloadFab, setShowDownloadFab] = useState(false)

  useEffect(() => {
    if (activeTab !== 'Overview') {
      setShowDownloadFab(false)
      return undefined
    }

    const el = downloadBtnRef.current
    if (!el) return undefined

    setShowDownloadFab(true)
    const observer = new IntersectionObserver(
      ([entry]) => setShowDownloadFab(!entry.isIntersecting),
      { threshold: 0, rootMargin: '0px 0px -16px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [activeTab])

  const sections = useMemo(() => {
    if (activeTab === 'Logo Gallery') return LOGOS_GALLERY_TOC
    return LOGOS_OVERVIEW_TOC
  }, [activeTab])

  const filteredLogos = useMemo(() => {
    if (categoryFilter === 'all') return LOGO_CATALOG
    return LOGO_CATALOG.filter((item) => item.category === categoryFilter)
  }, [categoryFilter])

  const activeTokenRow = IMAGE_SIZE_TOKEN_ROWS.find((row) => row.px === gallerySize)

  return (
    <DocTabRouteProvider basePath={PATH_LOGOS_BASE}>
      <PageWithToc sections={sections}>
        <div className="space-y-8 max-w-4xl">
          <PageHeader
            title="Logos"
            icon={logosIcon}
            description="Partner and integration marks for AI providers, data platforms, connectors, and developer tools — sized consistently so users instantly recognize what a product connects to."
          />

          <DocTabs tabs={LOGOS_TABS} activeTab={activeTab} onSelect={setActiveTab} />

          {activeTab === 'Overview' && (
            <div className="space-y-12">
              <DocSection id="logos-overview" title="Overview">
                <DocParagraph>
                  Integration logos are the visual shorthand for <DocStrong>what your product talks to</DocStrong>. They
                  appear wherever you need to signal a supported service, an active connection, a data source, or an
                  MCP-linked integration — connection pickers, agent configuration panels, marketplace tiles, and status
                  rows.
                </DocParagraph>
                <DocParagraph>
                  Each mark ships as an approved SVG from the design system —{' '}
                  <DocStrong>light assets under</DocStrong>{' '}
                  <code className="px-1 py-0.5" data-arvo-inline-code>/logos/light/</code>,{' '}
                  <DocStrong>dark assets under</DocStrong>{' '}
                  <code className="px-1 py-0.5" data-arvo-inline-code>/logos/dark/</code>. Use the published files and
                  size tokens so logos stay crisp, recognizable, and legally compliant across themes.
                </DocParagraph>
                <DocParagraph>
                  <DocStrong>Symbol</DocStrong> (under Assets) covers file-type icons. This page covers{' '}
                  <DocStrong>third-party brand logos</DocStrong> for integrations and connectivity.
                </DocParagraph>
              </DocSection>

              <DocSection id="logos-categories" title="What we show">
                <DocParagraph>
                  The library is grouped by intent — pick the category that matches why the logo appears in your UI.
                </DocParagraph>
                <div className="grid gap-4 sm:grid-cols-2">
                  {LOGO_CATEGORIES.map((cat) => (
                    <WhiteBgCard key={cat.id} title={cat.label} desc={cat.description} />
                  ))}
                </div>
              </DocSection>

              <DocSection id="logos-usage" title="Usage">
                <DocParagraph>Reach for an integration logo when you need to communicate:</DocParagraph>
                <DocList
                  items={[
                    <>
                      <DocStrong>Integration</DocStrong> — &ldquo;this workflow connects to Slack&rdquo; or &ldquo;powered
                      by Claude.&rdquo;
                    </>,
                    <>
                      <DocStrong>Connectivity</DocStrong> — live link status, OAuth success, or MCP server registration.
                    </>,
                    <>
                      <DocStrong>Supported service</DocStrong> — marketplace cards, connector catalogs, or setup
                      wizards.
                    </>,
                    <>
                      <DocStrong>Data source</DocStrong> — Snowflake, Redis, S3, or another backend feeding a view.
                    </>,
                  ]}
                />
                <DocParagraph>
                  Pair the logo with a short label when space allows. In dense tables or chips, the mark alone is
                  acceptable if the surrounding copy already names the service.
                </DocParagraph>
              </DocSection>

              <DocSection id="logos-size" title="Size & scale">
                <DocParagraph>
                  Logos render at a <DocStrong>fixed token scale</DocStrong> — never stretched to arbitrary dimensions.
                  Pick the size that fits the component density; all marks in a row should share the same value.
                </DocParagraph>
                <div
                  className="border p-6 space-y-5 dark:border-neutral-700"
                  style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#FAFAFA' } : undefined}
                >
                  <p className="text-sm text-arvo-light-secondary dark:text-neutral-400 m-0">
                    Preview — {SCALE_PREVIEW_LOGO.label} at each size (default: {DEFAULT_IMAGE_SIZE_PX}px)
                  </p>
                  <div className="flex flex-wrap items-end gap-6">
                    {IMAGE_SIZE_TOKEN_ROWS.map((row) => (
                      <div key={row.px} className="flex flex-col items-center gap-2">
                        <img
                          src={logoAssetUrl(SCALE_PREVIEW_LOGO.file, theme)}
                          alt=""
                          width={row.px}
                          height={row.px}
                          className="object-contain"
                          aria-hidden
                        />
                        <span className="text-xs font-medium text-arvo-light-primary dark:text-white">{row.px}px</span>
                        <code className="text-[11px] font-mono text-arvo-light-secondary dark:text-neutral-400">
                          image-{row.px}
                        </code>
                      </div>
                    ))}
                  </div>
                </div>
                <DocList
                  items={[
                    <>14px — inline badges and compact metadata beside small text.</>,
                    <>16px — list rows, dense chips, and secondary connector labels.</>,
                    <>20px — standard inline use in forms and configuration panels.</>,
                    <>24px — cards, pickers, and connection tiles.</>,
                    <>32px — emphasized selections and empty-state illustrations.</>,
                    <>40px — marketplace hero tiles and onboarding steps.</>,
                    <>60px — default size for integration logos in product UI.</>,
                  ]}
                />
              </DocSection>

              <DocSection id="logos-size-tokens" title="Size tokens">
                <DocParagraph>
                  SCSS variables mirror Figma <DocStrong>image-*</DocStrong> size variables. Copy a row or download the
                  full token file for your codebase.
                </DocParagraph>
                <DocTable
                  columns={TOKEN_COLUMNS}
                  rows={TOKEN_TABLE_ROWS}
                  highlightFirstColumnIdentifier
                  rowCopy={imageSizeTokenClipboard}
                  rowCopyAlwaysVisible
                />
              </DocSection>

              <TokenDownloadSection
                id="logos-download-tokens"
                isLight={isLight}
                buttonRef={downloadBtnRef}
                onDownload={downloadArvoImageSizeScss}
                buttonLabel="Download Image Size Tokens"
                filename={ARVO_IMAGE_SIZE_SCSS_FILENAME}
                replacePath={ARVO_IMAGE_SIZE_SCSS_REPLACE_PATH}
                description={
                  <>
                    Export integration logo size tokens as{' '}
                    <code
                      className="font-mono text-xs px-1"
                      style={isLight ? { backgroundColor: '#F2F2F2' } : { backgroundColor: '#262626' }}
                    >
                      {ARVO_IMAGE_SIZE_SCSS_FILENAME}
                    </code>{' '}
                    and replace{' '}
                    <code
                      className="font-mono text-xs px-1"
                      style={isLight ? { backgroundColor: '#F2F2F2' } : { backgroundColor: '#262626' }}
                    >
                      {ARVO_IMAGE_SIZE_SCSS_REPLACE_PATH}
                    </code>
                    . Use with explicit width and height — do not scale with CSS transforms.
                  </>
                }
              />

              <DocSection id="logos-dos-donts" title="Do's and Don'ts">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div
                    className="border dark:border-neutral-700 p-6 shadow-sm"
                    style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#FFFFFF' } : undefined}
                  >
                    <h3 className="font-semibold text-arvo-light-primary dark:text-white mb-3">Do&apos;s</h3>
                    <DocList
                      items={[
                        <>Use the matching light or dark SVG for the active theme — never recolor one asset for both.</>,
                        <>Set equal width and height from the size token scale.</>,
                        <>Keep logos aligned with labels and consistent within a list or grid.</>,
                        <>Respect each vendor&apos;s trademark and brand guidelines for external comms.</>,
                      ]}
                    />
                  </div>
                  <div
                    className="border dark:border-neutral-700 p-6 shadow-sm"
                    style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#FFFFFF' } : undefined}
                  >
                    <h3 className="font-semibold text-arvo-light-primary dark:text-white mb-3">Don&apos;ts</h3>
                    <DocList
                      items={[
                        <>Don&apos;t stretch, squash, or rotate integration marks.</>,
                        <>Don&apos;t recolor logos or add drop shadows for decoration.</>,
                        <>Don&apos;t mix sizes in the same row — pick one token and stay on scale.</>,
                        <>Don&apos;t substitute unofficial icons when an approved mark exists here.</>,
                      ]}
                    />
                  </div>
                </div>
              </DocSection>

              <DocSection id="logos-code" title="Implementation">
                <DocParagraph>
                  Reference logos from <DocStrong>/logos/light/</DocStrong> or <DocStrong>/logos/dark/</DocStrong> — same
                  filename in each folder. Swap the path when the UI theme changes; do not recolor a single asset. Default
                  size is <DocStrong>60px</DocStrong> (
                  <code className="px-1 py-0.5" data-arvo-inline-code>
                    $arvo-image-60
                  </code>
                  ).
                </DocParagraph>
                <CodeBlock
                  code={`// Pick light or dark asset to match the active theme
const logoSrc = theme === 'dark'
  ? '${logoAssetUrl('Slack.svg', 'dark')}'
  : '${logoAssetUrl('Slack.svg', 'light')}'

<img src={logoSrc} width="60" height="60" alt="Slack" />`}
                  label="Example: Slack at default size (60px), theme-aware path"
                />
                <CodeBlock
                  code={`.integration-logo {
  width: $arvo-image-60;
  height: $arvo-image-60;
  object-fit: contain;
}`}
                  label="SCSS: default logo dimensions"
                />
              </DocSection>
            </div>
          )}

          {activeTab === 'Logo Gallery' && (
            <div className="space-y-10">
              <DocSection id="logos-display-options" title="Display options">
                <DocParagraph>
                  Choose a category and size to preview every approved mark. Assets load from{' '}
                  <code className="px-1 py-0.5" data-arvo-inline-code>/logos/light/</code> or{' '}
                  <code className="px-1 py-0.5" data-arvo-inline-code>/logos/dark/</code> based on the site theme — toggle
                  light/dark in the header to compare both sets.
                </DocParagraph>

                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm font-medium text-arvo-light-primary dark:text-white">Category:</span>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => setCategoryFilter('all')}
                        data-arvo-size-selected={categoryFilter === 'all' ? '' : undefined}
                        className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                          categoryFilter === 'all'
                            ? 'dark:text-black dark:bg-white'
                            : 'border dark:border-neutral-600 dark:text-neutral-400 hover:text-arvo-light-primary dark:hover:text-white'
                        }`}
                        style={sizeButtonStyle(isLight, categoryFilter === 'all')}
                      >
                        All ({LOGO_CATALOG.length})
                      </button>
                      {LOGO_CATEGORIES.map((cat) => {
                        const count = LOGO_CATALOG.filter((l) => l.category === cat.id).length
                        return (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => setCategoryFilter(cat.id)}
                            data-arvo-size-selected={categoryFilter === cat.id ? '' : undefined}
                            className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                              categoryFilter === cat.id
                                ? 'dark:text-black dark:bg-white'
                                : 'border dark:border-neutral-600 dark:text-neutral-400 hover:text-arvo-light-primary dark:hover:text-white'
                            }`}
                            style={sizeButtonStyle(isLight, categoryFilter === cat.id)}
                          >
                            {cat.label} ({count})
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-sm font-medium text-arvo-light-primary dark:text-white">Logo size:</span>
                    <div className="flex flex-wrap gap-2">
                      {IMAGE_SIZE_PX_LIST.map((px) => (
                        <button
                          key={px}
                          type="button"
                          onClick={() => setGallerySize(px)}
                          data-arvo-size-selected={gallerySize === px ? '' : undefined}
                          className={`px-4 py-2 text-sm font-medium transition-colors ${
                            gallerySize === px
                              ? 'dark:text-black dark:bg-white'
                              : 'border dark:border-neutral-600 dark:text-neutral-400 hover:text-arvo-light-primary dark:hover:text-white'
                          }`}
                          style={sizeButtonStyle(isLight, gallerySize === px)}
                        >
                          {px}
                        </button>
                      ))}
                    </div>
                    <span className="text-sm text-arvo-light-secondary dark:text-neutral-400">
                      Current: {gallerySize}px
                      {activeTokenRow?.token ? (
                        <>
                          {' '}
                          (
                          <code className="px-1 py-0.5" data-arvo-inline-code>
                            {activeTokenRow.token}
                          </code>
                          )
                        </>
                      ) : null}
                    </span>
                  </div>
                </div>
              </DocSection>

              <DocSection id="logos-library" title="Logo library">
                <p className="text-sm text-arvo-light-secondary dark:text-neutral-400 m-0 mb-4">
                  Showing {filteredLogos.length} logo{filteredLogos.length === 1 ? '' : 's'} at{' '}
                  <DocStrong>
                    {gallerySize}×{gallerySize}px
                  </DocStrong>{' '}
                  from <code className="px-1 py-0.5" data-arvo-inline-code>/logos/{theme}/</code>. Hover a card to copy
                  markup.
                </p>
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                  {filteredLogos.map((item) => (
                    <LogoCard key={item.id} item={item} size={gallerySize} />
                  ))}
                </div>
              </DocSection>
            </div>
          )}
        </div>

        {activeTab === 'Overview' && (
          <TokenDownloadFab
            isLight={isLight}
            visible={showDownloadFab}
            onClick={downloadArvoImageSizeScss}
            ariaLabel="Download Image Size Tokens"
          />
        )}
      </PageWithToc>
    </DocTabRouteProvider>
  )
}
