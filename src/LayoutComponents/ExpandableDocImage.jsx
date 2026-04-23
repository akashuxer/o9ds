import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import PublicRasterPicture from '@/components/media/PublicRasterPicture'

/**
 * Doc infographic: click (or Enter/Space on the trigger) opens a full-viewport lightbox
 * so users can read details without browser zoom.
 */
export default function ExpandableDocImage({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  decoding = 'async',
  /** Merged onto the trigger `<button>` (e.g. flex centering inside a dot-card band). */
  triggerClassName = '',
  /** Merged onto the enlarged `<img>` in the lightbox. */
  lightboxImgClassName = '',
}) {
  const [open, setOpen] = useState(false)
  const titleId = useId()
  const closeBtnRef = useRef(null)
  const lastFocusRef = useRef(null)
  const prevActiveRef = useRef(null)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    prevActiveRef.current = document.activeElement
    const id = requestAnimationFrame(() => closeBtnRef.current?.focus())
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      cancelAnimationFrame(id)
      document.body.style.overflow = prevOverflow
      prevActiveRef.current?.focus?.()
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        close()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, close])

  const onTabKey = (e) => {
    if (e.key !== 'Tab') return
    if (e.shiftKey) {
      if (document.activeElement === closeBtnRef.current) {
        e.preventDefault()
        lastFocusRef.current?.focus()
      }
    } else if (document.activeElement === lastFocusRef.current) {
      e.preventDefault()
      closeBtnRef.current?.focus()
    }
  }

  const triggerLabel = `View full-size image: ${alt}`

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group block w-full max-w-4xl mx-auto border-0 bg-transparent p-0 cursor-zoom-in rounded text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-o9ds-light-primary dark:focus-visible:ring-white focus-visible:ring-offset-o9ds-light-bg dark:focus-visible:ring-offset-neutral-950 ${triggerClassName}`.trim()}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={triggerLabel}
      >
        <PublicRasterPicture
          src={src}
          alt=""
          width={width}
          height={height}
          loading={loading}
          decoding={decoding}
          aria-hidden="true"
          className={`pointer-events-none w-full h-auto block ${className}`.trim()}
        />
      </button>

      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center p-3 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onKeyDown={onTabKey}
          >
            <h2 id={titleId} className="sr-only">
              Enlarged image: {alt}
            </h2>
            <div
              className="absolute inset-0 z-0 cursor-zoom-out"
              style={{
                backgroundColor: 'var(--o9ds-color-s-overlay-static, rgba(0, 0, 0, 0.65))',
                backdropFilter: 'blur(var(--o9ds-shadow-blur))',
                WebkitBackdropFilter: 'blur(var(--o9ds-shadow-blur))',
              }}
              onClick={close}
              aria-hidden="true"
            />
            <div className="relative z-10 flex max-h-[min(92vh,calc(100vh-2rem))] w-full max-w-[min(96vw,1400px)] flex-col items-center gap-3">
              <button
                ref={closeBtnRef}
                type="button"
                onClick={close}
                className="self-end rounded-lg border border-neutral-300 bg-white px-3 py-1.5 text-sm font-medium text-o9ds-light-primary shadow-sm hover:bg-neutral-50 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700/80"
              >
                Close
              </button>
              <PublicRasterPicture
                src={src}
                alt={alt}
                width={width}
                height={height}
                decoding="async"
                className={`max-h-[min(85vh,calc(100vh-5rem))] w-auto max-w-full object-contain shadow-lg ${lightboxImgClassName}`.trim()}
              />
              <span ref={lastFocusRef} tabIndex={0} className="sr-only" aria-hidden="true" />
            </div>
          </div>,
          document.body
        )}
    </>
  )
}
