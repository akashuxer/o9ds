import { useCallback, useEffect, useMemo, useState } from 'react'
import '../../styles/motion-playground.css'
import '../../styles/motion-gallery.css'
import {
  enrichMotionExample,
  getAllMotionExamples,
  getFeaturedMotionExamples,
  getMotionExamplesByCategory,
  resolvePlaygroundFilterFromHash,
} from '../../data/motionPlayground'
import { MOTION_PLAYGROUND_CATEGORIES } from '../../data/motionPlaygroundCategories'
import MotionPlaygroundExample from './motionPlayground/MotionPlaygroundExample'
import MotionPlaygroundCategoryFilter from './motionPlayground/MotionPlaygroundCategoryFilter'
import MotionPlaygroundContinuousPreview from './motionPlayground/MotionPlaygroundContinuousPreview'
import { MotionPlaygroundPlaybackProvider } from './motionPlayground/MotionPlaygroundPlaybackContext'
import { MOTION_PLAYGROUND_DEMOS } from './motionPlayground/MotionPlaygroundDemos'

function ExampleCard({ example, featured = false }) {
  const enriched = enrichMotionExample(example)
  const Demo = MOTION_PLAYGROUND_DEMOS[example.id]
  return (
    <MotionPlaygroundExample {...enriched} featured={featured}>
      {Demo ? <Demo /> : null}
    </MotionPlaygroundExample>
  )
}

function filterPanelLabel(activeFilter) {
  if (activeFilter === 'all') return 'motion-filter-all'
  if (activeFilter === 'featured') return 'motion-filter-featured'
  return `motion-filter-${activeFilter}`
}

/** Motion pattern gallery — embedded on Overview tab. */
export default function MotionPlaygroundTab() {
  const [activeFilter, setActiveFilter] = useState(() =>
    resolvePlaygroundFilterFromHash(typeof window !== 'undefined' ? window.location.hash : ''),
  )

  const featured = getFeaturedMotionExamples()
  const allExamples = useMemo(() => getAllMotionExamples(), [])

  const filterCounts = useMemo(
    () => ({
      all: allExamples.length,
      featured: featured.length,
      ...Object.fromEntries(
        MOTION_PLAYGROUND_CATEGORIES.map((c) => [c.categoryId, c.exampleIds.length]),
      ),
    }),
    [allExamples.length, featured.length],
  )

  const activeCategory =
    activeFilter === 'featured' || activeFilter === 'all'
      ? null
      : MOTION_PLAYGROUND_CATEGORIES.find((c) => c.categoryId === activeFilter)

  const visibleExamples = useMemo(() => {
    if (activeFilter === 'all') return allExamples
    if (activeFilter === 'featured') return featured
    return getMotionExamplesByCategory(activeFilter, { excludeFeatured: false })
  }, [activeFilter, allExamples, featured])

  const applyFilter = useCallback((filterId) => {
    setActiveFilter(filterId)
    let hash = '#motion-playground-patterns'
    if (filterId === 'featured') hash = '#motion-playground-featured'
    else {
      hash = `#${MOTION_PLAYGROUND_CATEGORIES.find((c) => c.categoryId === filterId)?.id ?? 'motion-playground-patterns'}`
    }
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}${hash}`)
  }, [])

  useEffect(() => {
    const onHashChange = () => {
      setActiveFilter(resolvePlaygroundFilterFromHash(window.location.hash))
      const exampleId = window.location.hash.replace(/^#/, '')
      if (exampleId.startsWith('motion-pg-')) {
        requestAnimationFrame(() => {
          document.getElementById(exampleId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
      }
    }
    window.addEventListener('hashchange', onHashChange)
    onHashChange()
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <MotionPlaygroundPlaybackProvider autoplayScopeEnabled={activeFilter === 'all'}>
      <div className="motion-gallery space-y-5">
        <div className="space-y-5">
          <div className="motion-playground-toolbar">
            <MotionPlaygroundCategoryFilter
              activeFilter={activeFilter}
              onSelect={applyFilter}
              counts={filterCounts}
            />
            {activeFilter === 'all' ? <MotionPlaygroundContinuousPreview /> : null}
          </div>

          <div
            className="motion-gallery-panel"
            role="tabpanel"
            aria-labelledby={filterPanelLabel(activeFilter)}
          >
            {activeFilter === 'all' ? (
              <>
                <div className="motion-gallery-panel__header">
                  <h3 className="motion-gallery-panel__title">All patterns</h3>
                  <p className="motion-gallery-panel__desc">
                    Full catalog in one scroll — use category filters to narrow the list. Continuous preview replays
                    visible demos until you pause it.
                  </p>
                </div>
                <div className="mg-example-grid mg-example-grid--auto">
                  {visibleExamples.map((example) => (
                    <ExampleCard key={example.id} example={example} />
                  ))}
                </div>
              </>
            ) : activeFilter === 'featured' ? (
              <>
                <div className="motion-gallery-panel__header">
                  <h3 className="motion-gallery-panel__title">Featured patterns</h3>
                  <p className="motion-gallery-panel__desc">
                    Commonly used motion across navigation, dialogs, progress, and drag-and-drop — start here before
                    browsing the full catalog.
                  </p>
                </div>
                <div className="motion-gallery-featured motion-gallery-featured--auto">
                  {visibleExamples.map((example) => (
                    <ExampleCard key={example.id} example={example} featured />
                  ))}
                </div>
              </>
            ) : activeCategory ? (
              <>
                <div className="motion-gallery-panel__header">
                  <h3 className="motion-gallery-panel__title">{activeCategory.title}</h3>
                  <p className="motion-gallery-panel__desc">{activeCategory.description}</p>
                </div>
                <div className="mg-example-grid mg-example-grid--auto">
                  {visibleExamples.map((example) => (
                    <ExampleCard key={example.id} example={example} />
                  ))}
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </MotionPlaygroundPlaybackProvider>
  )
}
