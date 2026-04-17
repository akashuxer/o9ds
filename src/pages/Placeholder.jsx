import PageHeader from '../LayoutComponents/PageHeader'
import GrayBgCard from '../LayoutComponents/GrayBgCard'
import {
  DOCUMENTATION_STATUS_TITLE,
  getDocumentationStatusDescription,
} from '../data/documentationStatus'

const placeholderIcon = (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

/**
 * @param {{ title: string, documentationCatalog?: 'component' | 'contentWriting' | 'accessibility' | 'foundations' | 'patterns' | 'documentation' }} props
 */
export default function Placeholder({ title, documentationCatalog = 'documentation' }) {
  return (
    <div className="space-y-8 max-w-4xl pb-8">
      <PageHeader title={title} description="This page is not ready yet." icon={placeholderIcon} />
      <GrayBgCard title={DOCUMENTATION_STATUS_TITLE} desc={getDocumentationStatusDescription(documentationCatalog)} />
    </div>
  )
}
