import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

/**
 * Preview card for component doc pages.
 * Embeds a live Storybook story via <object> and shows a footer
 * with title, description, theme toggle (sun/moon), and an "open in new tab" link.
 *
 * @param {string} storybookUrl        Light-theme story URL
 * @param {string} [storybookDarkUrl]  Dark-theme story URL (swapped on moon click)
 */
export default function ComponentPreview({ title, description, storybookUrl, storybookDarkUrl, height = 300, children }) {
  const [dark, setDark] = useState(false)
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const activeUrl = dark && storybookDarkUrl ? storybookDarkUrl : storybookUrl
  const hasEmbed = !!activeUrl
  const hasChildren = children != null

  const borderColor = isLight ? '#E5E5E5' : '#404040'
  const footerBg = isLight ? '#FFFFFF' : '#171717'
  const btnBorder = isLight ? '#E5E5E5' : '#525252'
  const btnHoverBg = isLight ? '#F5F5F5' : '#262626'

  return (
    <div
      className="overflow-hidden"
      style={{ border: `1px solid ${borderColor}` }}
      data-arvo-component-preview
    >
      {hasEmbed && (
        <object
          key={dark ? 'dark' : 'light'}
          data={activeUrl}
          type="text/html"
          width="100%"
          height={height}
          style={{ display: 'block', border: 'none' }}
        >
          <p className="p-6 text-sm text-arvo-light-secondary dark:text-neutral-400">
            Preview could not be loaded.{' '}
            <a
              href={activeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline text-arvo-light-primary dark:text-white font-medium"
            >
              Open in Storybook
            </a>
          </p>
        </object>
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
        style={{
          borderTop: `1px solid ${borderColor}`,
          backgroundColor: footerBg,
        }}
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
              style={{
                border: `1px solid ${btnBorder}`,
                backgroundColor: 'transparent',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = btnHoverBg }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
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

          {activeUrl && (
            <a
              href={activeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 transition-colors text-arvo-light-primary dark:text-white"
              style={{
                border: `1px solid ${btnBorder}`,
                backgroundColor: 'transparent',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = btnHoverBg }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
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
      </div>
    </div>
  )
}
