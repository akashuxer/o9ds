import AccessibilityDocPage from './AccessibilityDocPage'
import GrayBgCard from '../../LayoutComponents/GrayBgCard'
import {
  DOCUMENTATION_STATUS_TITLE,
  getDocumentationStatusDescription,
} from '../../data/documentationStatus'

export default function Shortcuts() {
  return (
    <AccessibilityDocPage title="Shortcuts" description="This page is not ready yet." tocSections={[]}>
      <GrayBgCard title={DOCUMENTATION_STATUS_TITLE} desc={getDocumentationStatusDescription('accessibility')} />
    </AccessibilityDocPage>
  )
}
