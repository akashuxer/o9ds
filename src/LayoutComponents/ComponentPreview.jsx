import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTheme } from '../context/ThemeContext'

/**
 * Preview card for component doc pages.
 * Embeds a live Storybook story via <iframe> with lazy loading,
 * IntersectionObserver gating, sandbox, fullscreen expand overlay,
 * and a footer with title, description, theme toggle, and links.
 *
 * @param {string} storybookUrl        Light-theme story URL
 * @param {string} [storybookDarkUrl]  Dark-theme story URL (swapped on moon click)
 * @param {number} [height=300]        Embed height in px
 * @param {boolean} [lazy=true]        Defer iframe mount until visible in viewport
 */
export default function ComponentPreview({ title, description, storybookUrl, storybookDarkUrl, height = 300, lazy = true, children }) {
  const [dark, setDark] = useState(false)
  const [visible, setVisible] = useState(!lazy)
  const [expanded, setExpanded] = useState(false)
  const sentinelRef = useRef(null)
  const closeBtnRef = useRef(null)
  const prevActiveRef = useRef(null)
  const { theme } = useTheme()
  const isLight = theme === 'light'

  useEffect(() => {
    if (!lazy || visible) return
    const el = sentinelRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin: '200px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [lazy, visible])

  useEffect(() => {
    if (!expanded) return
    prevActiveRef.current = document.activeElement
    const id = requestAnimationFrame(() => closeBtnRef.current?.focus())
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        setExpanded(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      cancelAnimationFrame(id)
      document.body.style.overflow = prevOverflow
      document.removeEventListener('keydown', onKey)
      prevActiveRef.current?.focus?.()
    }
  }, [expanded])

  const activeUrl = dark && storybookDarkUrl ? storybookDarkUrl : storybookUrl
  const hasEmbed = !!activeUrl
  const hasChildren = children != null

  const borderColor = isLight ? '#E5E5E5' : '#404040'
  const footerBg = isLight ? '#FFFFFF' : '#171717'
  const btnBorder = isLight ? '#E5E5E5' : '#525252'
  const btnHoverBg = isLight ? '#F5F5F5' : '#262626'

  const onHover = useCallback((bg) => (e) => { e.currentTarget.style.backgroundColor = bg }, [])
  const onLeave = useCallback((e) => { e.currentTarget.style.backgroundColor = 'transparent' }, [])

  const iframeEl = (iframeHeight) => (
    <iframe
      key={dark ? 'dark' : 'light'}
      src={activeUrl}
      title={title || 'Storybook preview'}
      width="100%"
      height={iframeHeight}
      loading="lazy"
      sandbox="allow-scripts"
      referrerPolicy="strict-origin-when-cross-origin"
      style={{ display: 'block', border: 'none' }}
    />
  )

  const footerButtons = (
    <div className="flex items-center gap-2 shrink-0">
      {storybookDarkUrl && (
        <button
          type="button"
          onClick={() => setDark((d) => !d)}
          className="inline-flex items-center justify-center w-8 h-8 transition-colors text-arvo-light-primary dark:text-white"
          style={{ border: `1px solid ${btnBorder}`, backgroundColor: 'transparent' }}
          onMouseEnter={onHover(btnHoverBg)}
          onMouseLeave={onLeave}
          aria-label={dark ? 'Switch to light preview' : 'Switch to dark preview'}
          title={dark ? 'Light preview' : 'Dark preview'}
        >
          {dark ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      )}

      {hasEmbed && (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="inline-flex items-center justify-center w-8 h-8 transition-colors text-arvo-light-primary dark:text-white"
          style={{ border: `1px solid ${btnBorder}`, backgroundColor: 'transparent' }}
          onMouseEnter={onHover(btnHoverBg)}
          onMouseLeave={onLeave}
          aria-label="Expand preview to fullscreen"
          title="Expand preview"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <polyline points="15 3 21 3 21 9" />
            <polyline points="9 21 3 21 3 15" />
            <line x1="21" y1="3" x2="14" y2="10" />
            <line x1="3" y1="21" x2="10" y2="14" />
          </svg>
        </button>
      )}

      {activeUrl && (
        <a
          href={activeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 transition-colors text-arvo-light-primary dark:text-white"
          style={{ border: `1px solid ${btnBorder}`, backgroundColor: 'transparent' }}
          onMouseEnter={onHover(btnHoverBg)}
          onMouseLeave={onLeave}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          Open in new tab
        </a>
      )}
    </div>
  )

  return (
    <>
      <div
        ref={sentinelRef}
        className="overflow-hidden"
        style={{ border: `1px solid ${borderColor}` }}
        data-arvo-component-preview
      >
        {hasEmbed && (
          visible ? iframeEl(height) : (
            <div
              className="flex items-center justify-center"
              style={{ height, backgroundColor: isLight ? '#FAFAFA' : '#0a0a0a' }}
            >
              <p className="text-sm text-arvo-light-secondary dark:text-neutral-500 animate-pulse">
                Loading preview…
              </p>
            </div>
          )
        )}

        {hasChildren && !hasEmbed && (
          <div
            className="p-6 md:p-8 flex flex-wrap items-center gap-3"
            style={{
              backgroundColor: isLight ? '#FAFAFA' : '#0a0a0a',
              backgroundImage: `radial-gradient(circle, ${isLight ? 'rgba(0,0,0,.06)' : 'rgba(255,255,255,.06)'} 1px, transparent 1px)`,
              backgroundSize: '16px 16px',
            }}
          >
            {children}
          </div>
        )}

        <div
          className="flex items-center justify-between gap-4 px-5 py-3"
          style={{ borderTop: `1px solid ${borderColor}`, backgroundColor: footerBg }}
        >
          <div className="min-w-0">
            {title && (
              <p className="text-sm font-semibold text-arvo-light-primary dark:text-white m-0 truncate">
                {title}
              </p>
            )}
            {description && (
              <p className="text-xs text-arvo-light-secondary dark:text-neutral-400 m-0 mt-0.5 line-clamp-1">
                {description}
              </p>
            )}
          </div>
          {footerButtons}
        </div>
      </div>

      {expanded && hasEmbed && createPortal(
        <div
          className="fixed inset-0 z-[200] flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label={`${title || 'Storybook'} — fullscreen preview`}
        >
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
            onClick={() => setExpanded(false)}
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col w-full h-full max-w-[96vw] max-h-[96vh] m-auto overflow-hidden"
            style={{ border: `1px solid ${borderColor}`, backgroundColor: isLight ? '#FFFFFF' : '#0a0a0a' }}
          >
            <div className="flex-1 min-h-0">
              {iframeEl('100%')}
            </div>

            <div
              className="flex items-center justify-between gap-4 px-5 py-3 shrink-0"
              style={{ borderTop: `1px solid ${borderColor}`, backgroundColor: footerBg }}
            >
              <div className="min-w-0">
                {title && (
                  <p className="text-sm font-semibold text-arvo-light-primary dark:text-white m-0 truncate">
                    {title}
                  </p>
                )}
                {description && (
                  <p className="text-xs text-arvo-light-secondary dark:text-neutral-400 m-0 mt-0.5 line-clamp-1">
                    {description}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {storybookDarkUrl && (
                  <button
                    type="button"
                    onClick={() => setDark((d) => !d)}
                    className="inline-flex items-center justify-center w-8 h-8 transition-colors text-arvo-light-primary dark:text-white"
                    style={{ border: `1px solid ${btnBorder}`, backgroundColor: 'transparent' }}
                    onMouseEnter={onHover(btnHoverBg)}
                    onMouseLeave={onLeave}
                    aria-label={dark ? 'Switch to light preview' : 'Switch to dark preview'}
                    title={dark ? 'Light preview' : 'Dark preview'}
                  >
                    {dark ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <circle cx="12" cy="12" r="5" />
                        <line x1="12" y1="1" x2="12" y2="3" />
                        <line x1="12" y1="21" x2="12" y2="23" />
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                        <line x1="1" y1="12" x2="3" y2="12" />
                        <line x1="21" y1="12" x2="23" y2="12" />
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                      </svg>
                    )}
                  </button>
                )}

                <button
                  ref={closeBtnRef}
                  type="button"
                  onClick={() => setExpanded(false)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 transition-colors text-arvo-light-primary dark:text-white"
                  style={{ border: `1px solid ${btnBorder}`, backgroundColor: 'transparent' }}
                  onMouseEnter={onHover(btnHoverBg)}
                  onMouseLeave={onLeave}
                  aria-label="Close fullscreen preview"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <polyline points="4 14 10 14 10 20" />
                    <polyline points="20 10 14 10 14 4" />
                    <line x1="14" y1="10" x2="21" y2="3" />
                    <line x1="3" y1="21" x2="10" y2="14" />
                  </svg>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
