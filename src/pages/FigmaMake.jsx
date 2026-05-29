import { Suspense, lazy, useEffect, useState } from 'react'
import DocTabs, { useDocTabUrl } from '../LayoutComponents/DocTabs'
import { DocTabRouteProvider } from '../context/DocTabRouteContext'
import { PATH_FIGMA_MAKE_BASE } from '../data/docPaths'
import OnThisPage from '../LayoutComponents/OnThisPage'
import PageHeader from '../LayoutComponents/PageHeader'
import { overviewSections } from './figma-make/overviewSections'

const OverviewTab = lazy(() => import('./figma-make/OverviewTab'))
const ArvoTemplatesTab = lazy(() => import('./figma-make/ArvoTemplatesTab'))
const ReferenceLibraryTab = lazy(() => import('./figma-make/ReferenceLibraryTab'))
const PromptsLibraryTab = lazy(() => import('./figma-make/PromptsLibraryTab'))
const MakeDemosTab = lazy(() => import('./figma-make/MakeDemosTab'))

const TABS = ['Overview', 'Make Templates', 'Reference Library', 'Make Demos', 'Prompts Library']

/** Legacy `#hash` deep links → tab label (migrated to `/figma-make/:tab`). */
const LEGACY_HASH_TO_TAB = {
  overview: 'Overview',
  'make-templates': 'Make Templates',
  'reference-library': 'Reference Library',
  'prompts-library': 'Prompts Library',
  'make-demos': 'Make Demos',
  'arvo-templates': 'Make Templates',
  'getting-started': 'Overview',
  enterprise: 'Overview',
  'arvo-mastery': 'Overview',
  optimization: 'Overview',
}

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
  const [activeTab, setActiveTab] = useDocTabUrl(TABS, {
    basePath: PATH_FIGMA_MAKE_BASE,
    legacyHashToTab: LEGACY_HASH_TO_TAB,
  })

  const sections = useTabSections(activeTab)

  return (
    <DocTabRouteProvider basePath={PATH_FIGMA_MAKE_BASE}>
    <div className="flex w-full items-start gap-12">
      <div className="flex-1 min-w-0 space-y-8">
        <PageHeader
          title={FIGMA_MAKE_PAGE_TITLE}
          description={FIGMA_MAKE_PAGE_SUBTITLE}
          icon={FigmaMakeIcon}
        />
        <DocTabs tabs={TABS} activeTab={activeTab} onSelect={setActiveTab} />

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
    </DocTabRouteProvider>
  )
}
