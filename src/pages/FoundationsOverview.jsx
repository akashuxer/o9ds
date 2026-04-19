import SectionOverviewPage from '../LayoutComponents/SectionOverviewPage'
import { FOUNDATIONS_CATALOG } from '../data/overviewCatalog'
import { getSectionOverviewIllustrationSrc } from '../data/sectionOverviewIllustrations'
import { hasReadyDocumentation } from '../data/pathsWithContent'

const foundationsIcon = (
  <svg className="h-6 w-6 text-o9ds-light-secondary dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343L12.657 5.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>
)

export default function FoundationsOverview() {
  return (
    <SectionOverviewPage
      title="Foundations"
      description="Design tokens, typography, spacing, color, assets, and motion foundations. Search, filter by ready status, and open a page for detailed guidance."
      icon={foundationsIcon}
      items={FOUNDATIONS_CATALOG}
      getIllustrationSrc={getSectionOverviewIllustrationSrc}
      isReady={hasReadyDocumentation}
      documentationCatalogId="foundations"
      preserveCatalogOrder
    />
  )
}
