import SectionOverviewPage from '../LayoutComponents/SectionOverviewPage'
import { CONTENT_CATALOG } from '../data/overviewCatalog'
import { getSectionOverviewIllustrationSrc } from '../data/sectionOverviewIllustrations'
import { hasReadyDocumentation } from '../data/pathsWithContent'

const contentIcon = (
  <svg className="h-6 w-6 text-arvo-light-secondary dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
)

const contentOverviewDescription = (
  <>
    <p className="m-0">
      Arvo establishes a shared writing system across products, workflows, and components to ensure communication feels clear, consistent, and trustworthy.
    </p>
    <p className="m-0">
      This guidance applies to all user-facing content including buttons, forms, dialogs, tables, notifications, onboarding, AI experiences, and enterprise workflows.
    </p>
    <p className="m-0">
      <strong className="font-semibold text-arvo-light-primary dark:text-white">The goal is simple:</strong>
      <br />
      Help users complete work with less effort.
    </p>
  </>
)

export default function ContentOverview() {
  return (
    <SectionOverviewPage
      title="Content Guidelines"
      description={contentOverviewDescription}
      icon={contentIcon}
      items={CONTENT_CATALOG}
      getIllustrationSrc={getSectionOverviewIllustrationSrc}
      isReady={hasReadyDocumentation}
      documentationCatalogId="contentWriting"
      preserveCatalogOrder
    />
  )
}
