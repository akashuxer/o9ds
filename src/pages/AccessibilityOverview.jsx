import SectionOverviewPage from '../LayoutComponents/SectionOverviewPage'
import { ACCESSIBILITY_CATALOG } from '../data/overviewCatalog'
import { getSectionOverviewIllustrationSrc } from '../data/sectionOverviewIllustrations'
import { hasReadyDocumentation } from '../data/pathsWithContent'

const accessibilityIcon = (
  <svg className="h-6 w-6 text-o9ds-light-secondary dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
)

export default function AccessibilityOverview() {
  return (
    <SectionOverviewPage
      title="Accessibility"
      description="Inclusive design standards and accessibility guidance for o9 products. Search and filter by ready status; more topics will appear here over time."
      icon={accessibilityIcon}
      items={ACCESSIBILITY_CATALOG}
      getIllustrationSrc={getSectionOverviewIllustrationSrc}
      isReady={hasReadyDocumentation}
    />
  )
}
