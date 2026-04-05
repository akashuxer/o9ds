import { useState } from 'react'
import PageHeader from '../../LayoutComponents/PageHeader'
import PageWithToc from '../../LayoutComponents/PageWithToc'
import DocTable from '../../LayoutComponents/DocTable'
import CodeBlock from '../../LayoutComponents/CodeBlock'
import WhiteBgCard from '../../LayoutComponents/WhiteBgCard'
import { BLUR_TOKEN_ROWS, OPACITY_TOKEN_ROWS, SHADOW_BOX_TOKEN_ROWS } from '../../tokens/effectsTokens'

/** Sample image for opacity previews (shared base; opacity applied per card). */
const OPACITY_SAMPLE_IMG = '/hero-1.svg'

/** Placeholder asset for blur preview (mask overlay over image). */
const BLUR_PREVIEW_PLACEHOLDER_IMG = '/placeholder.svg'

const EFFECTS_SECTIONS = [
  { id: 'shadow-tokens', label: 'Shadow tokens' },
  { id: 'blur', label: 'Blur Tokens' },
  { id: 'opacity-tokens', label: 'Opacity tokens' },
]

const effectsIcon = (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
)

const SHADOW_COLUMNS = [
  { key: 'name', label: 'Name', mono: true, tone: 'code' },
  { key: 'value', label: 'Value (SCSS)', mono: true },
  { key: 'usage', label: 'Usage' },
]

const OPACITY_COLUMNS = [
  { key: 'name', label: 'Name', mono: true, tone: 'code' },
  { key: 'value', label: 'Value', mono: true },
  { key: 'usage', label: 'Usage' },
]

/** Illustrative directional shadows (preview — aligns with $o9ds-shadow-* box-shadow presets). */
const SHADOW_GALLERY_LEVELS = [
  { token: '$o9ds-shadow-left', pillLabel: 'shadow-left', boxShadow: '-10px 0 10px 0 rgba(0, 0, 0, 0.12)' },
  { token: '$o9ds-shadow-right', pillLabel: 'shadow-right', boxShadow: '10px 0 10px 0 rgba(0, 0, 0, 0.12)' },
  { token: '$o9ds-shadow-down', pillLabel: 'shadow-down', boxShadow: '0 10px 20px 0 rgba(0, 0, 0, 0.12)' },
  { token: '$o9ds-shadow-up', pillLabel: 'shadow-up', boxShadow: '0 -10px 20px 0 rgba(0, 0, 0, 0.12)' },
  { token: '$o9ds-shadow-center', pillLabel: 'shadow-center', boxShadow: '0 4px 40px 0 rgba(0, 0, 0, 0.14)' },
  { token: '$o9ds-shadow-fab', pillLabel: 'shadow-fab', boxShadow: '0 -10px 20px 0 rgba(0, 0, 0, 0.12)' },
]

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

function CopyClipboardButton({ text, className = '' }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }
  return (
    <button
      type="button"
      onClick={copy}
      className={`inline-flex shrink-0 items-center justify-center rounded border p-1 transition-colors hover:bg-neutral-100 dark:border-neutral-600 dark:hover:bg-neutral-800 ${className}`}
      style={{ borderColor: '#E5E5E5' }}
      title="Copy to clipboard"
      aria-label={`Copy ${text}`}
    >
      {copied ? (
        <CheckIcon className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
      ) : (
        <CopyIcon className="h-3.5 w-3.5 text-o9ds-light-secondary dark:text-neutral-400" />
      )}
    </button>
  )
}

function TokenPill({ children, copyText, forceLight, noCopy }) {
  return (
    <div
      className={
        forceLight
          ? 'inline-flex max-w-full items-center gap-1.5 rounded-full bg-violet-100 px-2.5 py-1'
          : 'inline-flex max-w-full items-center gap-1.5 rounded-full bg-violet-100 px-2.5 py-1 dark:bg-violet-950/60'
      }
    >
      <span
        className={
          forceLight
            ? 'truncate font-mono text-xs font-medium text-indigo-900'
            : 'truncate font-mono text-xs font-medium text-indigo-900 dark:text-violet-200'
        }
      >
        {children}
      </span>
      {!noCopy && (
        <CopyClipboardButton
          text={copyText}
          className={
            forceLight
              ? '!border-0 !p-1 hover:bg-violet-200/80'
              : '!border-0 !p-1 hover:bg-violet-200/80 dark:hover:bg-violet-900/50'
          }
        />
      )}
    </div>
  )
}

/** Same light dotted panel in both themes (avoids `p-6` + `border` on main — dark rule forces black bg). */
function DottedLightDocPanel({ children, title }) {
  return (
    <div
      data-o9ds-doc-figure
      className="rounded-xl border border-[#e5e5e5] bg-[#fafafa] px-6 py-6 [background-image:radial-gradient(circle,rgba(148,163,184,0.35)_1px,transparent_1px)] [background-size:14px_14px] dark:!border-[#e5e5e5] dark:!bg-[#fafafa]"
    >
      {title ? <p className="mb-4 text-sm font-medium text-[#303030]">{title}</p> : null}
      {children}
    </div>
  )
}

function ShadowPreviewGallery() {
  return (
    <DottedLightDocPanel title="Elevation preview">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
        {SHADOW_GALLERY_LEVELS.map(({ token, pillLabel, boxShadow }) => (
          <div key={token} className="flex flex-col items-center gap-3">
            <div
              className="h-28 w-full rounded-lg bg-white dark:bg-white"
              style={{ boxShadow }}
            />
            <TokenPill forceLight noCopy>
              {pillLabel}
            </TokenPill>
          </div>
        ))}
      </div>
    </DottedLightDocPanel>
  )
}

function BlurPreviewGallery() {
  return (
    <DottedLightDocPanel title="Blur preview">
      <div className="mx-auto flex w-full flex-col items-center gap-3">
        <div className="relative inline-block max-w-full overflow-hidden rounded-lg border border-neutral-200">
          <img
            src={BLUR_PREVIEW_PLACEHOLDER_IMG}
            alt=""
            className="block h-auto w-auto max-w-full"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: 'var(--o9ds-color-s-overlay-static)',
              backdropFilter: 'blur(var(--o9ds-shadow-blur))',
              WebkitBackdropFilter: 'blur(var(--o9ds-shadow-blur))',
            }}
            aria-hidden
          />
        </div>
        <TokenPill forceLight noCopy>
          $o9ds-shadow-blur
        </TokenPill>
      </div>
    </DottedLightDocPanel>
  )
}

function Spinner() {
  return (
    <div
      className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-300 border-t-o9ds-light-primary dark:border-neutral-600 dark:border-t-white"
      role="status"
      aria-label="Loading"
    />
  )
}

function BlurInteractiveDemo() {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border border-neutral-200 bg-neutral-50/80 px-6 py-6 dark:border-neutral-700 dark:bg-neutral-900/40">
      <p className="mb-4 text-sm font-medium text-o9ds-light-secondary dark:text-neutral-400">Interactive example</p>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm font-medium text-o9ds-light-primary shadow-sm transition-colors hover:bg-neutral-50 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700/80"
      >
        Click me
      </button>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="blur-demo-title">
          <button
            type="button"
            className="absolute inset-0 border-0"
            style={{
              backgroundColor: 'var(--o9ds-color-s-overlay-static)',
              backdropFilter: 'blur(var(--o9ds-shadow-blur))',
              WebkitBackdropFilter: 'blur(var(--o9ds-shadow-blur))',
            }}
            onClick={() => setOpen(false)}
            aria-label="Close overlay"
          />
          <div className="relative z-10 flex w-full max-w-sm flex-col items-center gap-4 rounded-xl border border-neutral-200 bg-white p-8 shadow-xl dark:border-neutral-600 dark:bg-neutral-900">
            <h3 id="blur-demo-title" className="text-lg font-semibold text-o9ds-light-primary dark:text-white">
              Blurred backdrop
            </h3>
            <Spinner />
            <p className="text-center text-sm text-o9ds-light-secondary dark:text-neutral-400">
              Same SCSS pairing as Mask Overlay:{' '}
              <code className="font-mono text-xs px-1" data-o9ds-inline-code>background: $o9ds-color-s-overlay-static</code> and{' '}
              <code className="font-mono text-xs px-1" data-o9ds-inline-code>backdrop-filter: $o9ds-shadow-blur</code> (this demo uses equivalent runtime styles).
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium text-o9ds-light-primary hover:bg-neutral-50 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function OpacityPreviewGallery() {
  return (
    <div className="rounded-xl border border-neutral-200 bg-neutral-50/80 p-6 dark:border-neutral-700 dark:bg-neutral-900/40">
      <p className="mb-4 text-sm font-medium text-o9ds-light-secondary dark:text-neutral-400">Opacity preview</p>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {OPACITY_TOKEN_ROWS.map((row) => (
          <div key={row.name} className="flex flex-col items-center gap-3">
            <div className="relative h-28 w-full overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 dark:border-neutral-600 dark:bg-neutral-800">
              <img
                src={OPACITY_SAMPLE_IMG}
                alt=""
                className="h-full w-full object-cover"
                style={{ opacity: row.decimal }}
              />
            </div>
            <TokenPill noCopy>{row.name}</TokenPill>
          </div>
        ))}
      </div>
    </div>
  )
}

const OPACITY_ROWS_FOR_TABLE = OPACITY_TOKEN_ROWS.map((row) => ({
  name: row.name,
  value: row.value,
  usage: row.usage,
  clipboard: row.clipboard,
}))

const copyRowTokenName = (row) => row.clipboard ?? row.name

export default function Effects() {
  return (
    <PageWithToc sections={EFFECTS_SECTIONS}>
      <div className="space-y-12">
        <PageHeader
          title="Effects"
          description="Layered shadows, backdrop blur, and opacity work together to separate surfaces, guide attention, and signal state. Shadows resolve through semantic color tokens so elevation stays consistent in light and dark themes; blur and opacity fine-tune overlays and interactive feedback without changing layout."
          icon={effectsIcon}
          descClassName="mt-4"
        />

        <WhiteBgCard className="max-w-3xl" unified>
          <p className="m-0 text-base leading-relaxed text-o9ds-light-secondary dark:text-neutral-400">
            Use the SCSS variables below with <code className="font-mono text-sm px-1" data-o9ds-inline-code>box-shadow</code>,{' '}
            <code className="font-mono text-sm px-1" data-o9ds-inline-code>backdrop-filter</code>, and{' '}
            <code className="font-mono text-sm px-1" data-o9ds-inline-code>opacity</code>. Preview galleries are illustrative; token tables list
            the o9ds names you ship in code.
          </p>
        </WhiteBgCard>

        <section id="shadow-tokens" className="scroll-mt-24 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-o9ds-light-primary dark:text-white">
            <span className="text-o9ds-light-secondary dark:text-neutral-500" aria-hidden>
              ✦
            </span>
            Shadow tokens
          </h2>

          <div>
            <p className="mb-6 max-w-3xl text-base leading-relaxed text-o9ds-light-secondary dark:text-neutral-400">
              A shadow simulates light falling on a surface so panels and floating UI feel lifted. o9ds maps shadows to semantic shadow colors (
              <code className="font-mono text-sm px-1" data-o9ds-inline-code>$o9ds-color-s-shadow-static-1</code>,{' '}
              <code className="font-mono text-sm px-1" data-o9ds-inline-code>$o9ds-color-s-shadow-static-2</code>
              ) so the same token string works across themes.
            </p>
          </div>

          <CodeBlock
            label="SCSS example"
            language="scss"
            code={`.dropdown-panel {
  box-shadow: $o9ds-shadow-down;
}`}
          />

          <ShadowPreviewGallery />

          <DocTable
            columns={SHADOW_COLUMNS}
            rows={SHADOW_BOX_TOKEN_ROWS}
            rowCopy={copyRowTokenName}
            rowCopyAlwaysVisible
          />
        </section>

        <section id="blur" className="scroll-mt-24 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-o9ds-light-primary dark:text-white">
            <span className="text-o9ds-light-secondary dark:text-neutral-500" aria-hidden>
              ✦
            </span>
            Blur Tokens
          </h2>

          <div className="max-w-3xl space-y-4">
            <p className="m-0 text-base leading-relaxed text-o9ds-light-secondary dark:text-neutral-400">
              Blur is not used on its own: it belongs to the mask overlay stack for modals and drawers that open as viewport overlays. The scrim covers the page under the panel; the Mask Overlay component combines{' '}
              <code className="font-mono text-sm px-1" data-o9ds-inline-code>backdrop-filter</code> with{' '}
              <code className="font-mono text-sm px-1" data-o9ds-inline-code>$o9ds-shadow-blur</code> and the overlay fill so the background reads dimmed and frosted instead of sharp and bright.
            </p>
            <p className="m-0 text-base leading-relaxed text-o9ds-light-secondary dark:text-neutral-400">
              Set the scrim background to{' '}
              <code className="font-mono text-sm px-1" data-o9ds-inline-code>$o9ds-color-s-overlay-static</code> whenever you apply{' '}
              <code className="font-mono text-sm px-1" data-o9ds-inline-code>$o9ds-shadow-blur</code> on{' '}
              <code className="font-mono text-sm px-1" data-o9ds-inline-code>backdrop-filter</code>.{' '}
              <code className="font-mono text-sm px-1" data-o9ds-inline-code>$o9ds-shadow-blur</code> resolves to{' '}
              <code className="font-mono text-sm px-1" data-o9ds-inline-code>blur(4px)</code>, so assign it directly to{' '}
              <code className="font-mono text-sm px-1" data-o9ds-inline-code>backdrop-filter</code>. A transparent scrim with blur only is out of spec; use Mask Overlay or the same SCSS pairing.
            </p>
            <CodeBlock
              label="SCSS example (mask overlay scrim)"
              language="scss"
              code={`.o9ds-mask-overlay {
  background: $o9ds-color-s-overlay-static;
  backdrop-filter: $o9ds-shadow-blur;
}`}
            />
          </div>

          <BlurPreviewGallery />
          <BlurInteractiveDemo />

          <DocTable columns={SHADOW_COLUMNS} rows={BLUR_TOKEN_ROWS} rowCopy={copyRowTokenName} rowCopyAlwaysVisible />
        </section>

        <section id="opacity-tokens" className="scroll-mt-24 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-o9ds-light-primary dark:text-white">
            <span className="text-o9ds-light-secondary dark:text-neutral-500" aria-hidden>
              ✦
            </span>
            Opacity tokens
          </h2>

          <div>
            <p className="mb-6 max-w-3xl text-base leading-relaxed text-o9ds-light-secondary dark:text-neutral-400">
              Opacity controls how much of a layer shows through—from subtle hovers to disabled states. Values are expressed as decimals (0–1)
              and percentages; apply them to images, icons, and surfaces without altering layout dimensions.
            </p>
          </div>

          <CodeBlock
            label="SCSS example"
            language="scss"
            code={`.hero-art {
  opacity: $o9ds-opacity-80;
}`}
          />

          <OpacityPreviewGallery />

          <DocTable columns={OPACITY_COLUMNS} rows={OPACITY_ROWS_FOR_TABLE} rowCopy={copyRowTokenName} rowCopyAlwaysVisible />
        </section>
      </div>
    </PageWithToc>
  )
}
