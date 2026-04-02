import SectionOverviewPage from '../LayoutComponents/SectionOverviewPage'
import { PATTERNS_CATALOG } from '../data/overviewCatalog'
import { getSectionOverviewIllustrationSrc } from '../data/sectionOverviewIllustrations'
import { hasReadyDocumentation } from '../data/pathsWithContent'

const patternsIcon = (
  <svg className="h-6 w-6 text-o9ds-light-secondary dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
  </svg>
)

export default function PatternsOverview() {
  return (
    <SectionOverviewPage
      title="Patterns"
      description="Reusable workflow and layout patterns for the platform. Search, filter by ready status, and open a topic as documentation is published."
      icon={patternsIcon}
      items={PATTERNS_CATALOG}
      getIllustrationSrc={getSectionOverviewIllustrationSrc}
      isReady={hasReadyDocumentation}
    />
  )
}
