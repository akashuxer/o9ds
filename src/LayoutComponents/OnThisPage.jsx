import { useState, useEffect, useCallback, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

/**
 * Sticky "On This Page" table of contents with scroll-spy.
 * Stays visible while scrolling; active item updates based on scroll position.
 */
export default function OnThisPage({ sections = [], className = '' }) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? null)
  const { theme } = useTheme()
  const tickingRef = useRef(false)

  useEffect(() => {
    setActiveId(sections[0]?.id ?? null)
  }, [sections])

  const updateActive = useCallback(() => {
    if (sections.length === 0) return
    const ids = sections.map((s) => s.id)
    const threshold = 160
    for (let i = ids.length - 1; i >= 0; i--) {
      const el = document.getElementById(ids[i])
      if (el) {
        const rect = el.getBoundingClientRect()
        if (rect.top <= threshold) {
          setActiveId(ids[i])
          return
        }
      }
    }
    setActiveId(ids[0])
  }, [sections])

  useEffect(() => {
    const handleScroll = () => {
      if (tickingRef.current) return
      tickingRef.current = true
      requestAnimationFrame(() => {
        updateActive()
        tickingRef.current = false
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [updateActive])

  const isLight = theme === 'light'

  const handleClick = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  if (sections.length === 0) return null

  return (
    <nav
      className={`sticky top-24 self-start hidden xl:block w-52 shrink-0 ${className}`}
      aria-label="On this page"
    >
      <div
        className="text-[10px] font-semibold uppercase tracking-wider mb-3"
        style={{ color: isLight ? '#303030' : '#a3a3a3' }}
      >
        On this page
      </div>
      <ul className="space-y-0.5 border-l pl-3 relative" style={{ borderColor: isLight ? '#E5E5E5' : '#404040' }}>
        {sections.map(({ id, label }) => {
          const isActive = activeId === id
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className="relative block py-1.5 -ml-3 pl-6 text-sm transition-colors hover:opacity-90 border-l-[3px] border-transparent"
                style={{
                  color: isActive ? (isLight ? '#010101' : '#fff') : (isLight ? '#303030' : '#a3a3a3'),
                  borderLeftColor: isActive ? (isLight ? '#010101' : '#fff') : 'transparent',
                }}
              >
                <span aria-hidden className="block font-bold invisible select-none">{label}</span>
                <span className="absolute inset-0 flex items-start pt-1.5 pb-1.5 pl-6 pr-0">
                  <span style={{ fontWeight: isActive ? 'bold' : 'normal' }}>{label}</span>
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
