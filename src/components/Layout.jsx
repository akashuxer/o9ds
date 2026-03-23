import { useState, useRef, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const PAGE_TITLES = {
  '/': 'Platform UI',
  '/overview': 'Overview',
  '/principles': 'Principles and Guidelines',
  '/colors': 'Colors',
  '/colors/data-viz': 'Data Visualization Colors',
  '/typography': 'Typography',
  '/spacing': 'Spacing',
  '/borders': 'Borders & Radius',
  '/icons': 'Iconography',
  '/illustrations': 'Illustrations',
  '/motion': 'Motion & Animation',
  '/elevation': 'Elevation & Shadows',
  '/components': 'Components',
  '/components/button': 'Button',
  '/components/icon-button': 'Icon Button',
  '/components/split-button': 'Split Button',
  '/components/button-group': 'Button Group',
  '/components/link': 'Link',
  '/components/breadcrumb': 'Breadcrumb',
  '/components/tabstrip': 'Tabstrip',
  '/components/pagination': 'Pagination',
  '/components/workspace-sidebar': 'Workspace Sidebar',
  '/components/label': 'Label',
  '/components/textbox': 'Textbox',
  '/components/textarea': 'Textarea',
  '/components/search': 'Search',
  '/components/select': 'Select',
  '/designers': 'For Designers',
  '/developers': 'For Developers',
  '/vibe-coders': 'For Vibe Coders',
  '/accessibility': 'Accessibility',
  '/content': 'Content Guidelines',
  '/content/writing-principles': 'Writing Principles',
  '/content/grammar': 'Grammar',
  '/content/voice-and-tone': 'Voice and Tone',
  '/patterns': 'Patterns',
  '/patterns/forms': 'Forms',
  '/patterns/search': 'Search',
  '/patterns/filters': 'Filters',
  '/patterns/tables': 'Tables',
  '/patterns/side-panels': 'Side Panels',
  '/patterns/modals': 'Modals',
  '/patterns/notifications': 'Notifications',
  '/patterns/empty-states': 'Empty States',
  '/patterns/bulk-actions': 'Bulk Actions',
  '/patterns/nested-interactions': 'Nested Interactions',
  '/patterns/drag': 'Drag',
  '/patterns/disabled': 'Disabled',
  '/contribute': 'How to Contribute',
  '/faqs': 'FAQs',
  '/changelog': 'Changelog',
}

const sidebarSections = [
  {
    title: '',
    hideTitle: true,
    items: [
      { path: '/', label: 'Home' },
      { path: '/changelog', label: 'Changelog' },
    ],
  },
  {
    title: 'GETTING STARTED',
    items: [
      { path: '/overview', label: 'Overview' },
      { path: '/principles', label: 'Principles and Guidelines' },
      { path: '/designers', label: 'For Designers' },
      { path: '/developers', label: 'For Developers' },
      { path: '/vibe-coders', label: 'For Vibe Coders' },
      { path: '/contribute', label: 'How to Contribute / Governance Model' },
      { path: '/faqs', label: 'FAQs' },
    ],
  },
  {
    title: 'FOUNDATIONS',
    items: [
      { path: '/colors', label: 'Colors' },
      { path: '/typography', label: 'Typography' },
      { path: '/spacing', label: 'Spacing' },
      { path: '/borders', label: 'Borders & Radius' },
      { path: '/icons', label: 'Iconography' },
      { path: '/illustrations', label: 'Illustrations' },
      { path: '/motion', label: 'Motion & Animation' },
      { path: '/elevation', label: 'Elevation & Shadows' },
      { path: '/colors/data-viz', label: 'Data Visualization Colors' },
    ],
  },
  {
    title: 'COMPONENTS',
    items: [
      {
        path: '/components/button',
        label: 'Buttons & Actions',
        children: [
          { path: '/components/button', label: 'Button' },
          { path: '/components/icon-button', label: 'Icon Button' },
          { path: '/components/split-button', label: 'Split Button' },
          { path: '/components/button-group', label: 'Button Group' },
        ],
      },
      { path: '/components/link', label: 'Link' },
      { path: '/components/breadcrumb', label: 'Breadcrumb' },
      { path: '/components/tabstrip', label: 'Tabstrip' },
      { path: '/components/pagination', label: 'Pagination' },
      { path: '/components/workspace-sidebar', label: 'Workspace Sidebar' },
      { path: '/components/label', label: 'Label' },
      { path: '/components/textbox', label: 'Textbox' },
      { path: '/components/textarea', label: 'Textarea' },
      { path: '/components/search', label: 'Search' },
      { path: '/components/select', label: 'Select' },
    ],
  },
  {
    title: 'ACCESSIBILITY',
    items: [
      { path: '/accessibility', label: 'Overview' },
    ],
  },
  {
    title: 'CONTENT GUIDELINES',
    items: [
      { path: '/content', label: 'Overview' },
      { path: '/content/writing-principles', label: 'Writing Principles' },
      { path: '/content/grammar', label: 'Grammar' },
      { path: '/content/voice-and-tone', label: 'Voice and Tone' },
    ],
  },
  {
    title: 'PATTERNS',
    items: [
      { path: '/patterns', label: 'Overview' },
      { path: '/patterns/forms', label: 'Forms' },
      { path: '/patterns/search', label: 'Search' },
      { path: '/patterns/filters', label: 'Filters' },
      { path: '/patterns/tables', label: 'Tables' },
      { path: '/patterns/side-panels', label: 'Side Panels' },
      { path: '/patterns/modals', label: 'Modals' },
      { path: '/patterns/notifications', label: 'Notifications' },
      { path: '/patterns/empty-states', label: 'Empty States' },
      { path: '/patterns/bulk-actions', label: 'Bulk Actions' },
      { path: '/patterns/nested-interactions', label: 'Nested Interactions' },
      { path: '/patterns/drag', label: 'Drag' },
      { path: '/patterns/disabled', label: 'Disabled' },
    ],
  },
]

function matchesSearch(label, query) {
  if (!query.trim()) return true
  return label.toLowerCase().includes(query.toLowerCase().trim())
}

/* Paths that have real content (not placeholder) */
const pathsWithContent = new Set([
  '/',
  '/overview',
  '/principles',
  '/colors',
  '/typography',
  '/spacing',
  '/borders',
  '/icons',
  '/illustrations',
  '/components',
  '/components/button',
])

function getPageTitle(pathname) {
  const exact = PAGE_TITLES[pathname]
  if (exact) return exact
  // Fallback for /components/:slug – titleize slug
  const componentsMatch = pathname.match(/^\/components\/(.+)$/)
  if (componentsMatch) {
    return componentsMatch[1].split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ')
  }
  return 'Design System'
}

export default function Layout({ children }) {
  const { theme, toggleTheme } = useTheme()
  const { pathname } = useLocation()
  const [searchQuery, setSearchQuery] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const searchRef = useRef(null)
  const navRef = useRef(null)

  useEffect(() => {
    const pageName = getPageTitle(pathname)
    document.title = `o9ds Design System - ${pageName}`
  }, [pathname])

  const filteredSections = sidebarSections
    .map((section) => {
      const filteredItems = section.items.filter((item) => {
        if (item.children) {
          const matchingChildren = item.children.filter((c) => matchesSearch(c.label, searchQuery))
          return matchesSearch(item.label, searchQuery) || matchingChildren.length > 0
        }
        return matchesSearch(item.label, searchQuery)
      }).map((item) => {
        if (item.children) {
          const matchingChildren = item.children.filter((c) => matchesSearch(c.label, searchQuery))
          return { ...item, children: matchingChildren }
        }
        return item
      }).filter((item) => !item.children || item.children.length > 0)
      return { ...section, items: filteredItems }
    })
    .filter((section) => section.items.length > 0)

  // / shortcut to focus search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        e.preventDefault()
        searchRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Close sidebar on resize to lg, escape key
  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) setSidebarOpen(false)
    }
    const handleEscape = (e) => {
      if (e.key === 'Escape') setSidebarOpen(false)
    }
    window.addEventListener('resize', handleResize)
    window.addEventListener('keydown', handleEscape)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])

  // Sidebar nav: Arrow Up/Down to move focus, Enter to activate (only when focus is on a link)
  const handleNavKeyDown = (e) => {
    if (!['ArrowDown', 'ArrowUp', 'Enter'].includes(e.key)) return
    const nav = navRef.current
    if (!nav) return
    const links = Array.from(nav.querySelectorAll('a[href]'))
    if (links.length === 0) return
    const current = links.indexOf(document.activeElement)
    if (current < 0) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = current < links.length - 1 ? current + 1 : 0
      links[next].focus()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const prev = current > 0 ? current - 1 : links.length - 1
      links[prev].focus()
    } else if (e.key === 'Enter') {
      e.preventDefault()
      links[current].click()
    }
  }

  const isDark = theme === 'dark'
  return (
    <div
      className="min-h-screen font-sans antialiased"
      style={{
        backgroundColor: isDark ? '#000' : '#FFFFFF',
        color: isDark ? '#fff' : '#010101',
      }}
    >
      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          borderColor: isDark ? '#262626' : '#E5E5E5',
          backgroundColor: isDark ? '#000' : '#FFFFFF',
        }}
      >
        <div className="flex h-14 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <button
              onClick={() => setSidebarOpen((o) => !o)}
              className="lg:hidden flex items-center justify-center p-2 -ml-2 shrink-0"
              style={{ color: isDark ? '#a3a3a3' : '#303030' }}
              title={sidebarOpen ? 'Close menu' : 'Open menu'}
              aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {sidebarOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" focusable="false" className="h-8 w-8 shrink-0" aria-hidden>
              <rect width="48" height="48" fill={isDark ? '#FFFFFF' : '#010101'} />
              <path d="M35.8031 21.1231C35.8031 23.3631 34.6311 25.3311 33.5391 26.6751L28.4351 32.8991H25.7231L31.0991 26.5991C30.4271 26.9991 29.6551 27.1991 28.8071 27.1991C27.1631 27.1991 25.8191 26.7271 24.7751 25.9311C24.7991 26.0791 24.7991 26.2551 24.7991 26.4271C24.7991 30.3591 22.3351 33.1991 18.5231 33.1991C14.6151 33.1991 12.2231 30.3591 12.2231 26.4271C12.2231 22.4671 14.6151 19.6551 18.5231 19.6551C20.2151 19.6551 21.6111 20.1791 22.6551 21.0991C22.7031 17.4871 25.3671 14.7991 29.3031 14.7991C33.3911 14.7991 35.8031 17.5391 35.8031 21.1231ZM22.4591 26.4271C22.4591 23.5391 21.1911 21.4471 18.5271 21.4471C15.8391 21.4471 14.5671 23.5391 14.5671 26.4271C14.5671 29.3391 15.8351 31.4071 18.5271 31.4071C21.1911 31.4071 22.4591 29.3391 22.4591 26.4271ZM33.5391 21.1231C33.5391 18.6831 32.0471 16.5911 29.3071 16.5911C26.5951 16.5911 24.9991 18.6831 24.9991 21.1991C24.9991 23.6631 26.5191 25.6791 29.2551 25.6791C31.9431 25.6791 33.5391 23.5151 33.5391 21.1231Z" fill={isDark ? '#010101' : '#FFFFFF'} />
            </svg>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-semibold truncate" style={{ color: isDark ? '#fff' : '#010101' }}>Design System</span>
                <span className="bg-blue-600 px-1.5 py-0.5 text-[10px] font-medium uppercase text-white">
                  ALPHA
                </span>
              </div>
              <div className="text-xs hidden sm:block" style={{ color: isDark ? '#a3a3a3' : '#303030' }}>v1.0.0</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 border p-2 sm:px-3 sm:py-2 text-sm transition-colors shrink-0"
              style={{
                borderColor: isDark ? '#525252' : '#E5E5E5',
                color: isDark ? '#a3a3a3' : '#303030',
              }}
              title={theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
            >
              {theme === 'dark' ? (
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
              <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 lg:hidden"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            onClick={() => setSidebarOpen(false)}
            aria-hidden
          />
        )}

        <div className="flex">
        {/* Sidebar - drawer on mobile, fixed on lg */}
        <aside
          className={`
            fixed left-0 top-14 z-40 h-[calc(100vh-3.5rem)] w-64 shrink-0 overflow-y-auto border-r
            transform transition-transform duration-200 ease-out
            lg:translate-x-0
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
          style={{
            borderColor: isDark ? '#262626' : '#E5E5E5',
            backgroundColor: isDark ? '#0a0a0a' : '#F2F2F2',
          }}
        >
          <div className="p-4">
            <input
              ref={searchRef}
              type="search"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border px-3 py-2 text-sm focus:outline-none"
              style={{
                borderColor: isDark ? '#404040' : '#E5E5E5',
                backgroundColor: isDark ? '#171717' : '#FFFFFF',
                color: isDark ? '#fff' : '#010101',
              }}
            />
            <p className="mt-1 text-[10px]" style={{ color: isDark ? '#a3a3a3' : '#303030' }}>
              Press <kbd className="px-1 py-0.5 font-mono text-[10px]" style={{ backgroundColor: isDark ? '#262626' : '#E5E5E5' }}>/</kbd> to search
            </p>
          </div>
          <nav
            ref={navRef}
            className="space-y-6 px-3 pb-8"
            role="navigation"
            aria-label="Documentation"
            onKeyDown={handleNavKeyDown}
          >
            {filteredSections.map((section) => (
              <div key={section.title || 'top'}>
                {!section.hideTitle && (
                  <h3 className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-wider" style={{ color: isDark ? '#a3a3a3' : '#303030' }}>
                    {section.title}
                  </h3>
                )}
                <ul className="space-y-0.5">
                  {section.items.map((item) =>
                    item.children ? (
                      <li key={item.path}>
                        <div className="px-2 py-1.5 text-sm font-medium" style={{ color: isDark ? '#a3a3a3' : '#303030' }}>
                          {item.label}
                        </div>
                        <ul className="ml-2 space-y-0.5 border-l pl-3" style={{ borderColor: isDark ? '#262626' : '#E5E5E5' }}>
                          {item.children.map((child) => (
                            <li key={child.path}>
                              <NavLink
                                to={child.path}
                                end
                                onClick={() => setSidebarOpen(false)}
                                className={({ isActive }) =>
                                  `flex items-center justify-between gap-2 px-2 py-1.5 text-sm transition-colors border-l ${
                                    isActive
                                      ? (isDark ? 'bg-neutral-800 text-white border-l-white' : 'bg-[#E5E5E5] text-[#010101] border-l-[#010101]')
                                      : 'border-l-transparent hover:opacity-90 ' + (isDark ? 'text-neutral-400 hover:bg-neutral-800/50 hover:text-white' : 'text-[#303030] hover:bg-[#F2F2F2] hover:text-[#010101]')
                                  }`
                                }
                              >
                                <span className="flex items-center gap-2 min-w-0">
                                  {pathsWithContent.has(child.path) && (
                                    <span className="shrink-0 w-2 h-2 rounded-full bg-[#00c278]" aria-hidden title="Content available" />
                                  )}
                                  {child.label}
                                </span>
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      <li key={item.path}>
                        <NavLink
                          to={item.path}
                          end
                          onClick={() => setSidebarOpen(false)}
                          className={({ isActive }) =>
                            `flex items-center gap-2 px-2 py-1.5 text-sm transition-colors border-l ${
                              isActive
                                ? (isDark ? 'bg-neutral-800 text-white border-l-white' : 'bg-[#E5E5E5] text-[#010101] border-l-[#010101]')
                                : 'border-l-transparent hover:opacity-90 ' + (isDark ? 'text-neutral-400 hover:bg-neutral-800/50 hover:text-white' : 'text-[#303030] hover:bg-[#F2F2F2] hover:text-[#010101]')
                            }`
                          }
                        >
                          <span className="flex items-center gap-2 min-w-0">
                            {pathsWithContent.has(item.path) && (
                              <span className="shrink-0 w-2 h-2 rounded-full bg-[#00c278]" aria-hidden title="Content available" />
                            )}
                            {item.label}
                          </span>
                        </NavLink>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main
          className="o9ds-main ml-0 lg:ml-64 min-h-[calc(100vh-3.5rem)] flex-1 px-4 sm:px-6 md:px-8 py-8 sm:py-10"
          style={{ backgroundColor: isDark ? '#000' : '#FFFFFF', color: isDark ? '#fff' : '#010101' }}
          data-theme={theme}
        >
          <div className="mx-auto max-w-4xl relative z-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
