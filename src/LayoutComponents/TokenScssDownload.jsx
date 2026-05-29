import { forwardRef } from 'react'

export function DownloadIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
    </svg>
  )
}

export const TokenDownloadButton = forwardRef(function TokenDownloadButton(
  { isLight, onClick, label, className = '' },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 border px-4 py-2 text-sm font-medium transition-colors hover:opacity-90 dark:border-neutral-600 dark:text-white ${className}`}
      style={
        isLight
          ? { borderColor: '#010101', backgroundColor: '#010101', color: '#FFFFFF' }
          : { borderColor: '#FFFFFF', backgroundColor: '#FFFFFF', color: '#010101' }
      }
    >
      <DownloadIcon className="h-4 w-4" />
      {label}
    </button>
  )
})

export function TokenDownloadFab({ isLight, visible, onClick, ariaLabel }) {
  if (!visible) return null

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      title={ariaLabel}
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

export function TokenDownloadSection({
  id,
  isLight,
  buttonRef,
  onDownload,
  buttonLabel,
  filename,
  replacePath,
  description,
}) {
  const codeInlineStyle = isLight ? { backgroundColor: '#F2F2F2' } : { backgroundColor: '#262626' }

  return (
    <section
      id={id}
      className="scroll-mt-24 border p-6 shadow-sm dark:border-neutral-700"
      style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#FFFFFF' } : { backgroundColor: 'transparent' }}
    >
      <h2 className="text-lg font-semibold text-arvo-light-primary dark:text-white mb-2">Download for development</h2>
      <p className="text-sm text-arvo-light-secondary dark:text-neutral-400 mb-4 max-w-2xl" style={isLight ? { color: '#303030' } : undefined}>
        {description ?? (
          <>
            Export {buttonLabel.toLowerCase().replace(/^download /, '')} as{' '}
            <code className="font-mono text-xs px-1" style={codeInlineStyle}>
              {filename}
            </code>{' '}
            and replace{' '}
            <code className="font-mono text-xs px-1" style={codeInlineStyle}>
              {replacePath}
            </code>
            .
          </>
        )}
      </p>
      <TokenDownloadButton ref={buttonRef} isLight={isLight} onClick={onDownload} label={buttonLabel} />
    </section>
  )
}
