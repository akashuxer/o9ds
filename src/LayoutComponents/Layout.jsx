import { useState, useRef, useEffect, useLayoutEffect, useMemo } from 'react'
import { useSidebarActiveLinkScroll } from '../hooks/useSidebarActiveLinkScroll'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { ArvoTooltip } from '@arvo/react'
import { useTheme } from '../context/ThemeContext'
import PublicRasterPicture from '@/components/media/PublicRasterPicture'
import ComponentTreeNav from './ComponentTreeNav'
import { COMPONENTS_NAV_TREE, filterComponentNavTree } from '../data/componentsNav'
import { GRAMMAR_STYLE_NAV_ITEMS, GRAMMAR_STYLE_TOPICS } from '../data/contentGrammarNav'
import { PATHS_WITH_CONTENT, hasReadyDocumentation } from '../data/pathsWithContent'
import {
  ACCESSIBILITY,
  COMPONENTS,
  CONTENT,
  FOUNDATIONS,
  GETTING_STARTED,
  PATTERNS,
  PATH_A11Y_ASSISTIVE,
  PATH_A11Y_INTRODUCTION,
  PATH_A11Y_KEYBOARD,
  PATH_A11Y_OVERVIEW,
  PATH_A11Y_SCREEN_READER_BASE,
  PATH_A11Y_SHORTCUTS,
  PATH_A11Y_STANDARDS,
  PATH_A11Y_TESTING,
  PATH_A11Y_VISUAL,
  PATH_ABOUT_ARVO,
  PATH_ARVO_MCP,
  PATH_ARVO_NOVA_AI_AGENT,
  PATH_BORDERS,
  PATH_CHANGELOG,
  PATH_COLOR_BASE,
  PATH_COLOR_DATA_VIZ,
  PATH_COMPONENTS_OVERVIEW,
  PATH_CONTENT_OVERVIEW,
  PATH_CONTRIBUTE,
  PATH_DESIGNERS,
  PATH_DEV_INTRO_BASE,
  PATH_DEV_REF_BASE,
  PATH_DEV_USAGE_BASE,
  PATH_EFFECTS,
  PATH_FIGMA_MAKE_BASE,
  PATH_FOUNDATIONS_OVERVIEW,
  PATH_HOME,
  PATH_ICONS_BASE,
  PATH_ILLUSTRATIONS_BASE,
  PATH_MOTION,
  PATH_PATTERNS_OVERVIEW,
  PATH_RESOURCES,
  PATH_SPACING,
  PATH_STORYBOOK_SANDBOX,
  PATH_SYMBOL,
  PATH_TYPOGRAPHY_BASE,
  contentTopicPath,
  devRefTopicPath,
  devUsageTopicPath,
  docPagePath,
  grammarStyleTopicPath,
  patternTopicPath,
} from '../data/docPaths'

function groupHasContent(item) {
  if (!item.children) return hasReadyDocumentation(item.path)
  return item.children.some(groupHasContent)
}

/** Section hub pages (Foundations / Accessibility / … overview grids) — extra width so 3-column cards match. */
const SECTION_OVERVIEW_HUB_PATHS = [
  PATH_FOUNDATIONS_OVERVIEW,
  PATH_A11Y_OVERVIEW,
  PATH_PATTERNS_OVERVIEW,
  PATH_CONTENT_OVERVIEW,
]

const PAGE_TITLES = {
  '/': 'Platform UI',
  '/overview': 'About Arvo',
  '/resources': 'Resources / Links',
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
  '/figma-make': 'For Figma Make Users',
  [PATH_ARVO_NOVA_AI_AGENT]: 'Arvo — Nova AI Agent',
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
  '/content/voice-and-tone': 'Voice and Tone',
  ...Object.fromEntries(
    GRAMMAR_STYLE_TOPICS.map((topic) => [
      grammarStyleTopicPath(topic.slug),
      topic.slug === 'intro' ? 'Grammar & Style' : topic.label,
    ]),
  ),
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
      { path: PATH_HOME, label: 'Home' },
      { path: PATH_CHANGELOG, label: 'Changelog' },
    ],
  },
  {
    title: 'GETTING STARTED',
    items: [
      { path: PATH_ABOUT_ARVO, label: 'About Arvo' },
      { path: PATH_RESOURCES, label: 'Resources' },
      { path: docPagePath(PATH_FIGMA_MAKE_BASE, 'Overview'), label: 'For Figma Make Users' },
      { path: PATH_ARVO_NOVA_AI_AGENT, label: 'Arvo — Nova AI Agent' },
      { path: PATH_ARVO_MCP, label: 'Arvo MCP/Other MCPs' },
      { path: PATH_DESIGNERS, label: 'For Designers' },
      {
        path: '_nav-group-for-developers',
        label: 'For Developers',
        subsectionGroup: true,
        children: [
          { path: docPagePath(PATH_DEV_INTRO_BASE, 'Overview'), label: 'Intro Guide' },
          {
            path: '_nav-group-usage',
            label: 'Usage',
            subsectionGroup: true,
            children: [
              { path: devUsageTopicPath('overview'), label: 'Overview' },
              { path: devUsageTopicPath('public-api'), label: 'Public API' },
              { path: devUsageTopicPath('components'), label: 'Components Contract' },
              { path: devUsageTopicPath('styling'), label: 'Styling' },
              { path: devUsageTopicPath('composition'), label: 'Composition' },
              { path: devUsageTopicPath('accessibility'), label: 'Accessibility' },
              { path: devUsageTopicPath('testing'), label: 'Testing' },
              { path: devUsageTopicPath('versioning'), label: 'Versioning' },
              { path: devUsageTopicPath('anti-patterns'), label: 'Anti-Patterns' },
              { path: devUsageTopicPath('checklist'), label: 'PR Checklist' },
            ],
          },
          {
            path: '_nav-group-developer-reference',
            label: 'Developer Reference',
            subsectionGroup: true,
            children: [
              { path: devRefTopicPath('agentic-pipeline'), label: 'Agentic Pipeline' },
              { path: devRefTopicPath('component-pipeline'), label: 'Component Pipeline' },
              { path: devRefTopicPath('token-pipeline'), label: 'Token Pipeline' },
              { path: devRefTopicPath('shared-patterns'), label: 'Shared Patterns' },
              { path: devRefTopicPath('testing-and-drift'), label: 'Testing & Drift' },
              { path: devRefTopicPath('workflows'), label: 'Contributor Workflows' },
            ],
          },
        ],
      },
      { path: PATH_CONTRIBUTE, label: 'How to Contribute' },
    ],
  },
  {
    title: 'FOUNDATIONS',
    items: [
      { path: PATH_FOUNDATIONS_OVERVIEW, label: 'Overview' },
      { path: docPagePath(PATH_COLOR_BASE, 'Overview'), label: 'Colors' },
      { path: docPagePath(PATH_TYPOGRAPHY_BASE, 'Overview'), label: 'Typography' },
      { path: PATH_SPACING, label: 'Spacing' },
      { path: PATH_BORDERS, label: 'Borders & Radius' },
      { path: PATH_EFFECTS, label: 'Effects' },
      {
        path: '_nav-group-assets',
        label: 'Assets',
        subsectionGroup: true,
        children: [
          { path: docPagePath(PATH_ICONS_BASE, 'Overview'), label: 'Iconography' },
          { path: docPagePath(PATH_ILLUSTRATIONS_BASE, 'Overview'), label: 'Illustrations' },
          { path: PATH_SYMBOL, label: 'Symbol' },
        ],
      },
      { path: docPagePath(PATH_MOTION, 'Overview'), label: 'Motion & Animation' },
      { path: PATH_COLOR_DATA_VIZ, label: 'Data Visualization Colors' },
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
      { path: PATH_A11Y_OVERVIEW, label: 'Overview' },
      { path: PATH_A11Y_INTRODUCTION, label: 'Introduction' },
      { path: PATH_A11Y_STANDARDS, label: 'Standards and principles' },
      { path: PATH_A11Y_ASSISTIVE, label: 'Assistive technology' },
      { path: docPagePath(PATH_A11Y_SCREEN_READER_BASE, 'Overview'), label: 'Screen reader and ARIA' },
      { path: PATH_A11Y_KEYBOARD, label: 'Keyboard and focus' },
      { path: PATH_A11Y_SHORTCUTS, label: 'Shortcuts' },
      { path: PATH_A11Y_VISUAL, label: 'Visual accessibility' },
      { path: PATH_A11Y_TESTING, label: 'Testing and QA' },
    ],
  },
  {
    title: 'CONTENT GUIDELINES',
    items: [
      { path: PATH_CONTENT_OVERVIEW, label: 'Overview' },
      { path: contentTopicPath('voice-and-tone'), label: 'Voice and Tone' },
      { path: contentTopicPath('writing-principles'), label: 'Writing Principles' },
      {
        path: '_nav-group-grammar-style',
        label: 'Grammar & Style',
        subsectionGroup: true,
        children: GRAMMAR_STYLE_NAV_ITEMS,
      },
    ],
  },
  {
    title: 'PATTERNS',
    items: [
      { path: PATH_PATTERNS_OVERVIEW, label: 'Overview' },
      { path: patternTopicPath('forms'), label: 'Forms' },
      { path: patternTopicPath('search'), label: 'Search' },
      { path: patternTopicPath('application-layouts'), label: 'Application Layouts' },
      { path: patternTopicPath('notifications-alerts'), label: 'Notifications / Alerts' },
      { path: patternTopicPath('truncation'), label: 'Truncation' },
      { path: patternTopicPath('loading'), label: 'Loading' },
      { path: patternTopicPath('export'), label: 'Export' },
      { path: patternTopicPath('destructive-action'), label: 'Destructive Action' },
      { path: patternTopicPath('navigation'), label: 'Navigation' },
      { path: patternTopicPath('on-hover-always-visible'), label: 'On Hover / Always Visible' },
      { path: patternTopicPath('filters'), label: 'Filters' },
      { path: patternTopicPath('bulk-actions'), label: 'Bulk Actions' },
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
        const children = item.children.filter((c) => hasReadyDocumentation(c.path))
        if (children.length === 0) return null
        return { ...item, children }
      }
      return hasReadyDocumentation(item.path) ? item : null
    })
    .filter(Boolean)
}

function getPageTitle(pathname) {
  const normalized = pathname.replace(/\/$/, '')
  const exact = PAGE_TITLES[normalized] ?? PAGE_TITLES[pathname]
  if (exact) return exact
  // Fallback for /components/:slug – titleize slug
  const componentsMatch = normalized.match(/^\/components\/([^/]+)/)
  if (componentsMatch) {
    return componentsMatch[1].split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ')
  }
  const grammarMatch = normalized.match(/^\/content\/grammar-style\/([^/]+)/)
  if (grammarMatch) {
    const topic = GRAMMAR_STYLE_TOPICS.find((t) => t.slug === grammarMatch[1])
    if (topic) return topic.slug === 'intro' ? 'Grammar & Style' : topic.label
  }
  const usageMatch = normalized.match(new RegExp(`^${PATH_DEV_USAGE_BASE.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/([^/]+)`))
  if (usageMatch) {
    const slug = usageMatch[1]
    const labels = {
      overview: 'Usage Standards',
      'public-api': 'Public API',
      components: 'Components Contract',
      styling: 'Styling',
      composition: 'Composition',
      accessibility: 'Accessibility',
      testing: 'Testing',
      versioning: 'Versioning',
      'anti-patterns': 'Anti-Patterns',
      checklist: 'PR Checklist',
    }
    if (labels[slug]) return labels[slug]
  }
  const devRefMatch = normalized.match(new RegExp(`^${PATH_DEV_REF_BASE.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/([^/]+)`))
  if (devRefMatch) {
    const slug = devRefMatch[1]
    const labels = {
      'agentic-pipeline': 'Agentic Pipeline',
      'component-pipeline': 'Component Pipeline',
      'token-pipeline': 'Token Pipeline',
      'shared-patterns': 'Shared Patterns',
      'testing-and-drift': 'Testing & Drift',
      workflows: 'Contributor Workflows',
    }
    if (labels[slug]) return labels[slug]
  }
  const introMatch = normalized.match(new RegExp(`^${PATH_DEV_INTRO_BASE.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/([^/]+)`))
  if (introMatch) {
    const tabLabels = { overview: 'For Developers', usage: 'For Developers — Usage', architecture: 'For Developers — Architecture' }
    if (tabLabels[introMatch[1]]) return tabLabels[introMatch[1]]
  }
  return 'Arvo Design System'
}

function initialSubsectionOpen(pathname) {
  const normalized = pathname.replace(/\/$/, '')
  const onDevUsage = normalized.startsWith(PATH_DEV_USAGE_BASE)
  const onDevRef = normalized.startsWith(PATH_DEV_REF_BASE)
  const onDevIntro = normalized.startsWith(PATH_DEV_INTRO_BASE)
  return {
    '_nav-group-for-developers': onDevUsage || onDevRef || onDevIntro,
    '_nav-group-usage': onDevUsage,
    '_nav-group-developer-reference': onDevRef,
    '_nav-group-assets': false,
    '_nav-group-grammar-style': normalized.startsWith('/content/grammar-style'),
  }
}

const STORYBOOK_ICON_SRC = '/componentOverview/storybook.png'

const HEADER_ACTION_BTN_CLASS =
  'flex items-center justify-center gap-0 border p-2 text-sm font-medium transition-colors shrink-0 hover:opacity-90 whitespace-nowrap lg:gap-2 lg:px-3 lg:py-2'

function HeaderNavButton({ to, href, children, isDark, ariaLabel }) {
  const style = {
    borderColor: isDark ? '#525252' : '#E5E5E5',
    color: isDark ? '#e5e5e5' : '#010101',
  }

  const trigger = href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={HEADER_ACTION_BTN_CLASS}
      style={style}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  ) : (
    <Link to={to} className={HEADER_ACTION_BTN_CLASS} style={style} aria-label={ariaLabel}>
      {children}
    </Link>
  )

  return (
    <ArvoTooltip content={ariaLabel} placement="bottom-center">
      {trigger}
    </ArvoTooltip>
  )
}

function HeaderActionLabel({ children }) {
  return <span className="hidden lg:inline">{children}</span>
}

export default function Layout({ children }) {
  const { theme, toggleTheme } = useTheme()
  const { pathname } = useLocation()
  const isSectionOverviewHub = SECTION_OVERVIEW_HUB_PATHS.includes(pathname)
  /** Full-width landing: sidebar only appears on routes other than `/`. */
  const isLandingHome = pathname === PATH_HOME
  const [searchQuery, setSearchQuery] = useState('')
  const [sidebarReadyOnly, setSidebarReadyOnly] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  /** Accordion: expandable groups under GETTING STARTED and FOUNDATIONS (default collapsed; expand on toggle or while search has text). */
  const [subsectionOpen, setSubsectionOpen] = useState(() => initialSubsectionOpen(pathname))
  const searchRef = useRef(null)
  const navRef = useRef(null)
  const sidebarRef = useRef(null)

  useEffect(() => {
    const pageName = getPageTitle(pathname)
    document.title = `Arvo Design System - ${pageName}`
  }, [pathname])

  useEffect(() => {
    const normalized = pathname.replace(/\/$/, '')
    if (normalized.startsWith('/content/grammar-style')) {
      setSubsectionOpen((o) => ({ ...o, '_nav-group-grammar-style': true }))
    }
    if (
      normalized.startsWith(PATH_DEV_USAGE_BASE) ||
      normalized.startsWith(PATH_DEV_REF_BASE) ||
      normalized.startsWith(PATH_DEV_INTRO_BASE)
    ) {
      setSubsectionOpen((o) => ({
        ...o,
        '_nav-group-for-developers': true,
        '_nav-group-usage': normalized.startsWith(PATH_DEV_USAGE_BASE),
        '_nav-group-developer-reference': normalized.startsWith(PATH_DEV_REF_BASE),
      }))
    }
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

  useSidebarActiveLinkScroll(sidebarRef, navRef, [subsectionOpen, filteredSections, searchQuery])

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
                Developers can start using available Arvo components, tokens, assets, etc. as they are ready. For areas
                not yet covered,
                teams can continue using existing implementations in parallel. Components will be released
                incrementally, enabling gradual adoption and migration to Arvo without waiting for the full system to
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
                  className="o9con o9con-o9-logo flex h-[50px] shrink-0 items-center justify-center leading-none text-arvo-light-primary dark:text-white text-[46px]"
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
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <HeaderNavButton
              href={PATH_STORYBOOK_SANDBOX}
              isDark={isDark}
              ariaLabel="Storybook Sandbox"
            >
              <PublicRasterPicture
                src={STORYBOOK_ICON_SRC}
                alt=""
                className="h-4 w-4 shrink-0 rounded-[3px]"
                aria-hidden
              />
              <HeaderActionLabel>Storybook Sandbox</HeaderActionLabel>
            </HeaderNavButton>
            <HeaderNavButton
              to={docPagePath(PATH_CONTRIBUTE, 'For Developers')}
              isDark={isDark}
              ariaLabel="Contribute to Arvo"
            >
              <span className="o9con o9con-comment-empty shrink-0 text-base leading-none" aria-hidden />
              <HeaderActionLabel>Contribute to Arvo</HeaderActionLabel>
            </HeaderNavButton>
            <HeaderNavButton to={PATH_ARVO_NOVA_AI_AGENT} isDark={isDark} ariaLabel="Arvo Agent">
              <span className="o9con o9con-flash shrink-0 text-base leading-none" aria-hidden />
              <HeaderActionLabel>Arvo Agent</HeaderActionLabel>
            </HeaderNavButton>
            <ArvoTooltip
              content={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              placement="bottom-center"
            >
              <button
                type="button"
                onClick={toggleTheme}
                className={HEADER_ACTION_BTN_CLASS}
                style={{
                  borderColor: isDark ? '#525252' : '#E5E5E5',
                  color: isDark ? '#a3a3a3' : '#303030',
                }}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? (
                  <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
                <HeaderActionLabel>{theme === 'dark' ? 'Light' : 'Dark'}</HeaderActionLabel>
              </button>
            </ArvoTooltip>
          </div>
        </div>
      </header>
      </div>

        {/* Mobile overlay — starts below the sticky header stack so the header stays uncovered */}
        {!isLandingHome && sidebarOpen && (
          <div
            className="fixed left-0 right-0 bottom-0 z-30 lg:hidden"
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              top: headerStackHeight,
            }}
            onClick={() => setSidebarOpen(false)}
            aria-hidden
          />
        )}

        <div className="flex min-[2560px]:max-w-[1800px] min-[2560px]:mx-auto min-[2560px]:w-full">
        {/* Sidebar - drawer on mobile, fixed on lg, sticky in-flow on 2560px+ — hidden until Get Started on home */}
        <aside
          ref={sidebarRef}
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
            data-arvo-sidebar-sticky
            className="sticky top-0 z-10 p-4 border-b"
            style={{ backgroundColor: isDark ? '#0a0a0a' : '#F2F2F2', borderColor: isDark ? '#262626' : '#E5E5E5' }}
          >
            <input
              ref={searchRef}
              type="search"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="arvo-doc-search-input w-full px-3 py-2 text-sm"
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
              Ready/Partial Ready Status
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
                  {section.items.map((item, itemIndex) => {
                    if (item.children) {
                      if (item.subsectionGroup && !item.hideGroupLabel) {
                        const expanded =
                          Boolean(searchQuery.trim()) || subsectionOpen[item.path] === true
                        return (
                          <li key={item.path}>
                            <button
                              type="button"
                              onClick={() => {
                                setSubsectionOpen((o) => {
                                  const isOpen = o[item.path] === true
                                  return { ...o, [item.path]: !isOpen }
                                })
                              }}
                              aria-expanded={expanded}
                              className={`mb-1 flex w-full items-center justify-between gap-2 py-2 pl-2 pr-2 text-left text-sm font-normal transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.06] ${
                                itemIndex > 0 ? 'mt-2' : 'mt-0.5'
                              }`}
                              style={{
                                color: isDark ? '#a3a3a3' : '#333333',
                              }}
                            >
                              <span className="flex items-center gap-2">
                                {groupHasContent(item) && (
                                  <span className="h-2 w-2 shrink-0 rounded-none bg-[#00c278]" aria-hidden title="Content available" />
                                )}
                                {item.label}
                              </span>
                              <svg
                                className={`h-4 w-4 shrink-0 transition-transform duration-200 ease-out ${
                                  expanded ? 'rotate-90' : ''
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </button>
                            {expanded && (
                              <ul className="ml-2 space-y-0.5 border-l border-neutral-200 pl-3 dark:border-neutral-700">
                                {item.children.map((child) => {
                                  if (child.subsectionGroup && child.children) {
                                    const childExpanded =
                                      Boolean(searchQuery.trim()) || subsectionOpen[child.path] === true
                                    return (
                                      <li key={child.path}>
                                        <button
                                          type="button"
                                          onClick={() => {
                                            setSubsectionOpen((o) => {
                                              const isOpen = o[child.path] === true
                                              return { ...o, [child.path]: !isOpen }
                                            })
                                          }}
                                          aria-expanded={childExpanded}
                                          className="mt-1 mb-0.5 flex w-full items-center justify-between gap-2 py-1.5 pl-2 pr-2 text-left text-sm font-normal transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
                                          style={{ color: isDark ? '#a3a3a3' : '#333333' }}
                                        >
                                          <span className="flex items-center gap-2">
                                            {groupHasContent(child) && (
                                              <span className="h-2 w-2 shrink-0 rounded-none bg-[#00c278]" aria-hidden title="Content available" />
                                            )}
                                            {child.label}
                                          </span>
                                          <svg
                                            className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ease-out ${childExpanded ? 'rotate-90' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden
                                          >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                          </svg>
                                        </button>
                                        {childExpanded && (
                                          <ul className="ml-2 space-y-0.5 border-l border-neutral-200 pl-3 dark:border-neutral-700">
                                            {child.children.map((grandchild) => (
                                              <li key={grandchild.path}>
                                                <NavLink
                                                  to={grandchild.path}
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
                                                    {hasReadyDocumentation(grandchild.path) && (
                                                      <span className="h-2 w-2 shrink-0 rounded-none bg-[#00c278]" aria-hidden title="Content available" />
                                                    )}
                                                    {grandchild.label}
                                                  </span>
                                                </NavLink>
                                              </li>
                                            ))}
                                          </ul>
                                        )}
                                      </li>
                                    )
                                  }
                                  return (
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
                                          {hasReadyDocumentation(child.path) && (
                                            <span className="h-2 w-2 shrink-0 rounded-none bg-[#00c278]" aria-hidden title="Content available" />
                                          )}
                                          {child.label}
                                        </span>
                                      </NavLink>
                                    </li>
                                  )
                                })}
                              </ul>
                            )}
                          </li>
                        )
                      }
                      return (
                        <li key={item.path}>
                          {!item.hideGroupLabel && (
                            <div
                              className="px-2 py-1.5 text-sm font-medium"
                              style={{ color: isDark ? '#a3a3a3' : '#303030' }}
                            >
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
                                    {hasReadyDocumentation(child.path) && (
                                      <span className="h-2 w-2 shrink-0 rounded-none bg-[#00c278]" aria-hidden title="Content available" />
                                    )}
                                    {child.label}
                                  </span>
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </li>
                      )
                    }
                    return (
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
                            {hasReadyDocumentation(item.path) && (
                              <span className="h-2 w-2 shrink-0 rounded-none bg-[#00c278]" aria-hidden title="Content available" />
                            )}
                            {item.label}
                          </span>
                        </NavLink>
                      </li>
                    )
                  })}
                </ul>
                )}
              </div>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main
          className={`arvo-main flex-1 min-w-0 py-8 sm:py-10 ${
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
              pathname === PATH_HOME
                ? 'w-full max-w-none'
                : isSectionOverviewHub
                  ? 'max-w-7xl'
                  : pathname.startsWith(GETTING_STARTED) ||
                      pathname.startsWith(FOUNDATIONS) ||
                      pathname.startsWith(PATTERNS) ||
                      pathname.startsWith(ACCESSIBILITY) ||
                      pathname.startsWith(CONTENT) ||
                      pathname.startsWith(COMPONENTS) ||
                      pathname.startsWith('/overview') ||
                      pathname.startsWith('/resources') ||
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
                      pathname.startsWith('/arvo-mcp') ||
                      pathname.startsWith('/figma-make')
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
