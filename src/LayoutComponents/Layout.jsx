import { useState, useRef, useEffect, useLayoutEffect, useMemo } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import ComponentTreeNav from './ComponentTreeNav'
import { COMPONENTS_NAV_TREE, filterComponentNavTree } from '../data/componentsNav'
import { PATHS_WITH_CONTENT } from '../data/pathsWithContent'

/** Section hub pages (Foundations / Accessibility / … overview grids) — extra width so 3-column cards match. */
const SECTION_OVERVIEW_HUB_PATHS = ['/foundations', '/accessibility', '/patterns', '/content']

const PAGE_TITLES = {
  '/': 'Platform UI',
  '/overview': 'Overview',
  '/foundations': 'Foundations',
  '/colors': 'Colors',
  '/colors/data-viz': 'Data Visualization Colors',
  '/typography': 'Typography',
  '/spacing': 'Spacing',
  '/borders': 'Borders & Radius',
  '/icons': 'Iconography',
  '/illustrations': 'Illustrations',
  '/symbol': 'Symbol',
  '/motion': 'Motion & Animation',
  '/effects': 'Effects',
  '/elevation': 'Effects',
  '/components': 'Components',
  '/components/button': 'Button',
  '/components/cards': 'Cards',
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
  '/arvo-mcp-other-mcps': 'Arvo MCP/Other MCPs',
  '/vibe-coders': 'For Vibe Coders',
  '/accessibility': 'Accessibility',
  '/accessibility/overview': 'Accessibility — Introduction',
  '/accessibility/standards-and-principles': 'Standards and principles',
  '/accessibility/assistive-technology': 'Assistive technology',
  '/accessibility/screen-reader-and-aria': 'Screen reader and ARIA',
  '/accessibility/keyboard-and-focus': 'Keyboard and focus',
  '/accessibility/shortcuts': 'Shortcuts',
  '/accessibility/visual-accessibility': 'Visual accessibility',
  '/accessibility/testing-and-qa': 'Testing and QA',
  '/content': 'Content Guidelines',
  '/content/writing-principles': 'Writing Principles',
  '/content/grammar': 'Grammar',
  '/content/voice-and-tone': 'Voice and Tone',
  '/patterns': 'Patterns',
  '/patterns/forms': 'Forms',
  '/patterns/search': 'Search',
  '/patterns/application-layouts': 'Application Layouts',
  '/patterns/notifications-alerts': 'Notifications / Alerts',
  '/patterns/truncation': 'Truncation',
  '/patterns/loading': 'Loading',
  '/patterns/export': 'Export',
  '/patterns/destructive-action': 'Destructive Action',
  '/patterns/navigation': 'Navigation',
  '/patterns/on-hover-always-visible': 'On Hover / Always Visible',
  '/patterns/filters': 'Filters',
  '/patterns/bulk-actions': 'Bulk Actions',
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
      { path: '/designers', label: 'For Designers' },
      { path: '/developers', label: 'For Developers' },
      { path: '/arvo-mcp-other-mcps', label: 'Arvo MCP/Other MCPs' },
      { path: '/vibe-coders', label: 'For Vibe Coders' },
      { path: '/contribute', label: 'How to Contribute' },
      { path: '/faqs', label: 'FAQs' },
    ],
  },
  {
    title: 'FOUNDATIONS',
    items: [
      { path: '/foundations', label: 'Overview' },
      { path: '/colors', label: 'Colors' },
      { path: '/typography', label: 'Typography' },
      { path: '/spacing', label: 'Spacing' },
      { path: '/borders', label: 'Borders & Radius' },
      { path: '/effects', label: 'Effects' },
      {
        path: '/icons',
        label: 'Assets',
        children: [
          { path: '/icons', label: 'Iconography' },
          { path: '/illustrations', label: 'Illustrations' },
          { path: '/symbol', label: 'Symbol' },
        ],
      },
      { path: '/motion', label: 'Motion & Animation' },
      { path: '/colors/data-viz', label: 'Data Visualization Colors' },
    ],
  },
  {
    title: 'COMPONENTS',
    componentTree: true,
    items: [],
  },
  {
    title: 'ACCESSIBILITY',
    items: [
      { path: '/accessibility', label: 'Overview' },
      { path: '/accessibility/overview', label: 'Introduction' },
      { path: '/accessibility/standards-and-principles', label: 'Standards and principles' },
      { path: '/accessibility/assistive-technology', label: 'Assistive technology' },
      { path: '/accessibility/screen-reader-and-aria', label: 'Screen reader and ARIA' },
          { path: '/accessibility/keyboard-and-focus', label: 'Keyboard and focus' },
          { path: '/accessibility/shortcuts', label: 'Shortcuts' },
          { path: '/accessibility/visual-accessibility', label: 'Visual accessibility' },
          { path: '/accessibility/testing-and-qa', label: 'Testing and QA' },
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
      { path: '/patterns/application-layouts', label: 'Application Layouts' },
      { path: '/patterns/notifications-alerts', label: 'Notifications / Alerts' },
      { path: '/patterns/truncation', label: 'Truncation' },
      { path: '/patterns/loading', label: 'Loading' },
      { path: '/patterns/export', label: 'Export' },
      { path: '/patterns/destructive-action', label: 'Destructive Action' },
      { path: '/patterns/navigation', label: 'Navigation' },
      { path: '/patterns/on-hover-always-visible', label: 'On Hover / Always Visible' },
      { path: '/patterns/filters', label: 'Filters' },
      { path: '/patterns/bulk-actions', label: 'Bulk Actions' },
    ],
  },
]

function matchesSearch(label, query) {
  if (!query.trim()) return true
  return label.toLowerCase().includes(query.toLowerCase().trim())
}

/** Sidebar nav: keep only links whose path is in PATHS_WITH_CONTENT (green dot = ready). */
function filterNavItemsByReady(items) {
  return items
    .map((item) => {
      if (item.children) {
        const children = item.children.filter((c) => PATHS_WITH_CONTENT.has(c.path))
        if (children.length === 0) return null
        return { ...item, children }
      }
      return PATHS_WITH_CONTENT.has(item.path) ? item : null
    })
    .filter(Boolean)
}

function getPageTitle(pathname) {
  const exact = PAGE_TITLES[pathname]
  if (exact) return exact
  // Fallback for /components/:slug – titleize slug
  const componentsMatch = pathname.match(/^\/components\/(.+)$/)
  if (componentsMatch) {
    return componentsMatch[1].split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ')
  }
  return 'o9ds Design System'
}

export default function Layout({ children }) {
  const { theme, toggleTheme } = useTheme()
  const { pathname } = useLocation()
  const isSectionOverviewHub = SECTION_OVERVIEW_HUB_PATHS.includes(pathname)
  /** Full-width landing: sidebar only appears on routes other than `/`. */
  const isLandingHome = pathname === '/'
  const [searchQuery, setSearchQuery] = useState('')
  const [sidebarReadyOnly, setSidebarReadyOnly] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const searchRef = useRef(null)
  const navRef = useRef(null)

  useEffect(() => {
    const pageName = getPageTitle(pathname)
    document.title = `o9ds Design System - ${pageName}`
  }, [pathname])

  const filteredSections = useMemo(() => {
    const afterSearch = sidebarSections
      .map((section) => {
        if (section.componentTree) {
          const q = searchQuery.trim()
          if (!q) return section
          const tree = filterComponentNavTree(COMPONENTS_NAV_TREE, searchQuery)
          if (tree.length === 0 && !matchesSearch('Overview', searchQuery)) return null
          return section
        }
        const filteredItems = section.items
          .filter((item) => {
            if (item.children) {
              const matchingChildren = item.children.filter((c) => matchesSearch(c.label, searchQuery))
              return matchesSearch(item.label, searchQuery) || matchingChildren.length > 0
            }
            return matchesSearch(item.label, searchQuery)
          })
          .map((item) => {
            if (item.children) {
              const matchingChildren = item.children.filter((c) => matchesSearch(c.label, searchQuery))
              return { ...item, children: matchingChildren }
            }
            return item
          })
          .filter((item) => !item.children || item.children.length > 0)
        return { ...section, items: filteredItems }
      })
      .filter((section) => section != null && (section.componentTree || section.items.length > 0))

    if (!sidebarReadyOnly) return afterSearch

    return afterSearch
      .map((section) => {
        if (section.componentTree) return section
        const items = filterNavItemsByReady(section.items)
        if (items.length === 0) return null
        return { ...section, items }
      })
      .filter(Boolean)
  }, [searchQuery, sidebarReadyOnly])

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
  const [headerScrolled, setHeaderScrolled] = useState(false)
  const [showEvolutionBanner, setShowEvolutionBanner] = useState(true)
  const headerStackRef = useRef(null)
  const [headerStackHeight, setHeaderStackHeight] = useState(56)

  useEffect(() => {
    const onScroll = () => {
      setHeaderScrolled((window.scrollY || document.documentElement.scrollTop) > 10)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useLayoutEffect(() => {
    const el = headerStackRef.current
    if (!el) return
    const update = () => setHeaderStackHeight(el.offsetHeight)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [showEvolutionBanner])

  return (
    <div
      className="min-h-screen font-sans antialiased"
      style={{
        backgroundColor: isDark ? '#000' : '#FFFFFF',
        color: isDark ? '#fff' : '#010101',
      }}
    >
      {/* Sticky stack: optional evolution banner + main header row */}
      <div ref={headerStackRef} className="sticky top-0 z-50">
        {showEvolutionBanner && (
          <div
            role="status"
            className="flex items-start gap-2 border-b px-3 py-2.5 sm:px-6 sm:py-3"
            style={{
              borderColor: isDark ? '#3f3a2e' : '#e8dcc8',
              backgroundColor: isDark ? '#1c1914' : '#fff8ed',
              color: isDark ? '#e7e5e4' : '#292524',
            }}
          >
            <div className="min-w-0 flex-1 space-y-2 text-xs font-normal leading-relaxed sm:text-sm">
              <p>
                <strong className="font-bold">This design system is actively evolving and not yet fully complete.</strong>{' '}
                We are continuously improving components, documentation, and experiences{' '}
                <strong className="font-bold">as we work toward the official Q3 2026 release.</strong>
              </p>
              <p>
                Developers can start using available o9DS components, tokens, assets, etc. as they are ready. For areas
                not yet covered,
                teams can continue using existing implementations in parallel. Components will be released
                incrementally, enabling gradual adoption and migration to o9DS without waiting for the full system to
                be completed.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowEvolutionBanner(false)}
              className="shrink-0 rounded-none border p-1.5 transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#010101] focus-visible:ring-offset-2 dark:focus-visible:ring-white dark:focus-visible:ring-offset-[#1c1914]"
              style={{
                borderColor: isDark ? '#525252' : '#d6d3d1',
                color: isDark ? '#fafaf9' : '#010101',
              }}
              aria-label="Dismiss announcement"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
        {/* Header: solid at top → glassmorphism after scroll */}
        <header
          className={`border-b transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 ease-out ${
            headerScrolled
              ? 'border-white/20 bg-white/72 shadow-[0_8px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl backdrop-saturate-150 dark:border-white/10 dark:bg-black/45 dark:shadow-[0_8px_40px_rgba(0,0,0,0.35)] dark:backdrop-blur-xl'
              : ''
          }`}
          style={
            headerScrolled
              ? undefined
              : {
                  borderColor: isDark ? '#262626' : '#E5E5E5',
                  backgroundColor: isDark ? '#000' : '#FFFFFF',
                }
          }
        >
        <div className="flex h-14 items-center justify-between px-4 sm:px-6 min-[2560px]:max-w-[1800px] min-[2560px]:mx-auto min-[2560px]:px-6">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            {!isLandingHome && (
            <button
              type="button"
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
            )}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 min-w-0 hover:opacity-90 transition-opacity" aria-label="Go to home">
              <div className="flex min-w-0 shrink-0 items-center gap-1">
                <span
                  className="o9con o9con-o9-logo flex h-[50px] shrink-0 items-center justify-center leading-none text-o9ds-light-primary dark:text-white text-[46px]"
                  aria-hidden
                />
                <div
                  className="flex h-[38px] min-w-0 max-w-[min(300px,58vw)] shrink items-center border px-3 sm:px-4"
                  style={{
                    backgroundColor: isDark ? '#ffffff' : '#000000',
                    borderColor: isDark ? '#e5e5e5' : '#262626',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.12)',
                  }}
                >
                  <span
                    className="truncate whitespace-nowrap text-[15px] leading-none tracking-tight sm:text-[17px]"
                    style={{ color: isDark ? '#010101' : '#ffffff' }}
                  >
                    <span className="font-extrabold">arvo</span>
                    <span className="font-extrabold">.</span>
                    <span className="font-extralight"> design system</span>
                  </span>
                </div>
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="bg-blue-600 px-1.5 py-0.5 text-[10px] font-medium uppercase text-white">
                    ALPHA
                  </span>
                </div>
                <div className="text-xs hidden sm:block" style={{ color: isDark ? '#a3a3a3' : '#303030' }}>v1.0.0</div>
              </div>
            </Link>
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
      </div>

        {/* Mobile overlay */}
        {!isLandingHome && sidebarOpen && (
          <div
            className="fixed inset-0 z-30 lg:hidden"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            onClick={() => setSidebarOpen(false)}
            aria-hidden
          />
        )}

        <div className="flex min-[2560px]:max-w-[1800px] min-[2560px]:mx-auto min-[2560px]:w-full">
        {/* Sidebar - drawer on mobile, fixed on lg, sticky in-flow on 2560px+ — hidden until Get Started on home */}
        <aside
          className={`
            ${isLandingHome ? 'hidden' : ''}
            fixed left-0 z-40 w-64 shrink-0 overflow-y-auto border-r
            transform transition-transform duration-200 ease-out
            lg:translate-x-0
            min-[2560px]:sticky min-[2560px]:self-start
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
          style={{
            borderColor: isDark ? '#262626' : '#E5E5E5',
            backgroundColor: isDark ? '#0a0a0a' : '#F2F2F2',
            top: headerStackHeight,
            height: `calc(100vh - ${headerStackHeight}px)`,
          }}
        >
          <div
            className="sticky top-0 z-10 p-4 border-b"
            style={{ backgroundColor: isDark ? '#0a0a0a' : '#F2F2F2', borderColor: isDark ? '#262626' : '#E5E5E5' }}
          >
            <input
              ref={searchRef}
              type="search"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="o9ds-doc-search-input w-full px-3 py-2 text-sm"
              style={{
                backgroundColor: isDark ? '#171717' : '#FFFFFF',
                color: isDark ? '#fff' : '#010101',
              }}
            />
            <p className="mt-1 text-[10px]" style={{ color: isDark ? '#a3a3a3' : '#303030' }}>
              Press <kbd className="rounded-none px-1 py-0.5 font-mono text-[10px]" style={{ backgroundColor: isDark ? '#262626' : '#E5E5E5' }}>/</kbd> to search
            </p>
            <label
              className="mt-3 flex cursor-pointer select-none items-center gap-2 text-xs font-medium"
              style={{ color: isDark ? '#fff' : '#010101' }}
            >
              <input
                type="checkbox"
                checked={sidebarReadyOnly}
                onChange={(e) => setSidebarReadyOnly(e.target.checked)}
                className="h-4 w-4 shrink-0 rounded-none border-2 border-[#010101] bg-white accent-[#010101] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#010101] focus-visible:ring-offset-0 dark:border-white dark:bg-black dark:accent-white dark:focus-visible:ring-white"
                aria-label="Show only pages with ready documentation"
              />
              Ready status
            </label>
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
                {section.componentTree ? (
                  <ComponentTreeNav
                    searchQuery={searchQuery}
                    readyOnly={sidebarReadyOnly}
                    isDark={isDark}
                    onNavigate={() => setSidebarOpen(false)}
                  />
                ) : (
                <ul className="space-y-0.5">
                  {section.items.map((item) =>
                    item.children ? (
                      <li key={item.path}>
                        {!item.hideGroupLabel && (
                          <div className="px-2 py-1.5 text-sm font-medium" style={{ color: isDark ? '#a3a3a3' : '#303030' }}>
                            {item.label}
                          </div>
                        )}
                        <ul className="ml-2 space-y-0.5 pl-3">
                          {item.children.map((child) => (
                            <li key={child.path}>
                              <NavLink
                                to={child.path}
                                end
                                onClick={() => setSidebarOpen(false)}
                                className={({ isActive }) =>
                                  `flex items-center justify-between gap-2 pl-2 pr-2 py-1.5 text-sm transition-colors border-l-2 ${
                                    isActive
                                      ? (isDark ? 'bg-neutral-800 text-white border-white' : 'bg-[#E5E5E5] text-[#010101] border-[#010101]')
                                      : 'border-transparent hover:opacity-90 ' + (isDark ? 'text-neutral-400 hover:bg-neutral-800/50 hover:text-white' : 'text-[#303030] hover:bg-[#E5E5E5]/80 hover:text-[#010101]')
                                  }`
                                }
                              >
                                <span className="flex items-center gap-2 min-w-0">
                                  {PATHS_WITH_CONTENT.has(child.path) && (
                                    <span className="h-2 w-2 shrink-0 rounded-none bg-[#00c278]" aria-hidden title="Content available" />
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
                            `flex items-center gap-2 pl-2 pr-2 py-1.5 text-sm transition-colors border-l-2 ${
                              isActive
                                ? (isDark ? 'bg-neutral-800 text-white border-white' : 'bg-[#E5E5E5] text-[#010101] border-[#010101]')
                                : 'border-transparent hover:opacity-90 ' + (isDark ? 'text-neutral-400 hover:bg-neutral-800/50 hover:text-white' : 'text-[#303030] hover:bg-[#E5E5E5]/80 hover:text-[#010101]')
                            }`
                          }
                        >
                          <span className="flex items-center gap-2 min-w-0">
                            {PATHS_WITH_CONTENT.has(item.path) && (
                              <span className="h-2 w-2 shrink-0 rounded-none bg-[#00c278]" aria-hidden title="Content available" />
                            )}
                            {item.label}
                          </span>
                        </NavLink>
                      </li>
                    )
                  )}
                </ul>
                )}
              </div>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main
          className={`o9ds-main flex-1 min-w-0 py-8 sm:py-10 ${
            isLandingHome ? 'px-4 sm:px-6' : 'px-4 sm:px-6 md:px-8'
          } ${
            isLandingHome ? 'ml-0' : 'ml-0 lg:ml-64 min-[2560px]:ml-0'
          }`}
          style={{
            backgroundColor: isDark ? '#000' : '#FFFFFF',
            color: isDark ? '#fff' : '#010101',
            minHeight: `calc(100vh - ${headerStackHeight}px)`,
          }}
          data-theme={theme}
        >
          <div
            className={`mx-auto relative z-10 ${
              pathname === '/'
                ? 'w-full max-w-none'
                : isSectionOverviewHub
                  ? 'max-w-7xl'
                  : pathname.startsWith('/overview') ||
                      pathname.startsWith('/colors') ||
                      pathname.startsWith('/typography') ||
                      pathname.startsWith('/spacing') ||
                      pathname.startsWith('/borders') ||
                      pathname.startsWith('/icons') ||
                      pathname.startsWith('/illustrations') ||
                      pathname.startsWith('/symbol') ||
                      pathname.startsWith('/foundations') ||
                      pathname.startsWith('/patterns') ||
                      pathname.startsWith('/accessibility') ||
                      pathname.startsWith('/content') ||
                      pathname.startsWith('/components') ||
                      pathname.startsWith('/developers') ||
                      pathname.startsWith('/arvo-mcp')
                    ? 'max-w-6xl'
                    : 'max-w-4xl'
            }`}
          >
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
