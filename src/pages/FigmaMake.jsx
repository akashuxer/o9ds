import { Suspense, lazy, useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import DocTabs from '../LayoutComponents/DocTabs'
import OnThisPage from '../LayoutComponents/OnThisPage'
import PageHeader from '../LayoutComponents/PageHeader'
import { overviewSections } from './figma-make/overviewSections'

const OverviewTab = lazy(() => import('./figma-make/OverviewTab'))
const ArvoTemplatesTab = lazy(() => import('./figma-make/ArvoTemplatesTab'))
const ReferenceLibraryTab = lazy(() => import('./figma-make/ReferenceLibraryTab'))
const PromptsLibraryTab = lazy(() => import('./figma-make/PromptsLibraryTab'))
const MakeDemosTab = lazy(() => import('./figma-make/MakeDemosTab'))

const TABS = ['Overview', 'Make Templates', 'Reference Library', 'Make Demos', 'Prompts Library']

/** Map tab label → URL hash slug for shareable deep links. */
const TAB_HASH = {
  Overview: 'overview',
  'Make Templates': 'make-templates',
  'Reference Library': 'reference-library',
  'Prompts Library': 'prompts-library',
  'Make Demos': 'make-demos',
}

const HASH_TO_TAB = {
  ...Object.fromEntries(Object.entries(TAB_HASH).map(([t, h]) => [h, t])),
  /** Legacy share links */
  'arvo-templates': 'Make Templates',
}

/** Removed tabs: deep links redirect to Overview */
const LEGACY_HASH_TO_OVERVIEW = new Set(['getting-started', 'enterprise', 'arvo-mastery', 'optimization'])

const FIGMA_MAKE_PAGE_TITLE = 'Get Started with Figma Make'
const FIGMA_MAKE_PAGE_SUBTITLE =
  'Prototype your ideas while speaking the same design language using Arvo'

const FigmaMakeIcon = (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
    />
  </svg>
)

/** Lazy-load section configs (mirror tab module imports) so they coexist with code splitting. */
function useTabSections(activeTab) {
  const [sections, setSections] = useState(activeTab === 'Overview' ? overviewSections : [])

  useEffect(() => {
    let cancelled = false
    if (activeTab === 'Overview') {
      setSections(overviewSections)
      return () => undefined
    }
    if (activeTab === 'Make Templates') {
      import('./figma-make/ArvoTemplatesTab').then((m) => !cancelled && setSections(m.makeTemplatesSections))
    } else if (activeTab === 'Reference Library') {
      import('./figma-make/ReferenceLibraryTab').then((m) => !cancelled && setSections(m.referenceSections))
    } else if (activeTab === 'Make Demos') {
      import('./figma-make/MakeDemosTab').then((m) => !cancelled && setSections(m.makeDemosSections))
    } else if (activeTab === 'Prompts Library') {
      import('./figma-make/PromptsLibraryTab').then((m) => !cancelled && setSections(m.promptsLibrarySections))
    }
    return () => {
      cancelled = true
    }
  }, [activeTab])

  return sections
}

export default function FigmaMake() {
  const location = useLocation()
  const navigate = useNavigate()

  const initialTab = useMemo(() => {
    const hash = location.hash.replace(/^#/, '')
    return HASH_TO_TAB[hash] || 'Overview'
  }, [location.hash])

  const [activeTab, setActiveTab] = useState(initialTab)

  useEffect(() => {
    setActiveTab(initialTab)
  }, [initialTab])

  /** Legacy deep links for removed tabs → Overview */
  useEffect(() => {
    const h = location.hash.replace(/^#/, '')
    if (!LEGACY_HASH_TO_OVERVIEW.has(h)) return
    navigate(`${location.pathname}#overview`, { replace: true })
    setActiveTab('Overview')
  }, [location.hash, location.pathname, navigate])

  /** Legacy tab hash `arvo-templates` → canonical `make-templates` */
  useEffect(() => {
    const h = location.hash.replace(/^#/, '')
    if (h !== 'arvo-templates') return
    navigate(`${location.pathname}#make-templates`, { replace: true })
  }, [location.hash, location.pathname, navigate])

  const sections = useTabSections(activeTab)

  const handleSelect = (tab) => {
    setActiveTab(tab)
    const hash = TAB_HASH[tab]
    if (hash && location.hash.replace(/^#/, '') !== hash) {
      navigate(`${location.pathname}#${hash}`, { replace: false })
    }
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }

  return (
    <div className="flex w-full items-start gap-12">
      <div className="flex-1 min-w-0 space-y-8">
        <PageHeader
          title={FIGMA_MAKE_PAGE_TITLE}
          description={FIGMA_MAKE_PAGE_SUBTITLE}
          icon={FigmaMakeIcon}
        />
        <DocTabs tabs={TABS} activeTab={activeTab} onSelect={handleSelect} />

        <Suspense fallback={<div className="text-sm text-arvo-light-secondary dark:text-neutral-400">Loading…</div>}>
          {activeTab === 'Overview' && <OverviewTab />}
          {activeTab === 'Make Templates' && <ArvoTemplatesTab />}
          {activeTab === 'Reference Library' && <ReferenceLibraryTab />}
          {activeTab === 'Make Demos' && <MakeDemosTab />}
          {activeTab === 'Prompts Library' && <PromptsLibraryTab />}
        </Suspense>
      </div>
      <OnThisPage sections={sections} />
    </div>
  )
}
