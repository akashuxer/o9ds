import { useMemo } from 'react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import { BADGE_RESOURCE_STATUS } from '../../../data/componentResourceStatus'
import DocTabs, { useDocTabUrl } from '../../../LayoutComponents/DocTabs'
import GrayBgCard from '../../../LayoutComponents/GrayBgCard'
import {
  DOCUMENTATION_STATUS_TITLE,
  getDocumentationStatusDescription,
} from '../../../data/documentationStatus'
import { BADGE_OVERVIEW_TOC, BADGE_UX_COPY_TOC } from '../../../data/badgeDocData'
import BadgeOverview from './BadgeOverview'
import BadgeUxCopy from './BadgeUxCopy'
import { ExpertUsageTab, ExpertAccessibilityTab } from '../shared/ExpertDocSections'
import { getExpertDoc } from '../../../data/expertDocContent'
import { getExpertUsageToc, getExpertA11yToc } from '../shared/expertDocToc'

const TABS = ['Overview', 'Usage', 'UX Copy', 'Code/APIs', 'Accessibility']

const badgeIcon = (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
    />
  </svg>
)

const COMPONENT_STATUS_DESC = getDocumentationStatusDescription('component')

function DocumentationStatusCard({ id }) {
  return (
    <section id={id} className="scroll-mt-24">
      <GrayBgCard title={DOCUMENTATION_STATUS_TITLE} desc={COMPONENT_STATUS_DESC} />
    </section>
  )
}

export default function BadgeDoc() {
  const [tab, setTab] = useDocTabUrl(TABS)
  const expert = getExpertDoc('badge')

  const sections = useMemo(() => {
    if (tab === 'Overview') return BADGE_OVERVIEW_TOC
    if (tab === 'Usage') return getExpertUsageToc(expert)
    if (tab === 'UX Copy') return BADGE_UX_COPY_TOC
    if (tab === 'Accessibility') return getExpertA11yToc(expert, null)
    if (tab === 'Code/APIs') {
      return [
        { id: 'badge-code-overview', label: 'Documentation' },
        { id: 'stub-status-code', label: 'Documentation status' },
      ]
    }
    return []
  }, [tab, expert])

  return (
    <PageWithToc sections={sections}>
      <div className="space-y-8">
        <PageHeader
          title="Badge"
          componentSlug="badge"
          resourceStatus={BADGE_RESOURCE_STATUS}
          icon={badgeIcon}
          description={
            <>
              <p className="m-0">
                Compact labels and counters used to communicate semantic meaning, metadata, priority, status, and
                quantities in a lightweight and scannable format.
              </p>
              <p className="m-0">
                Badge helps users quickly understand state, progress, counts, or contextual information without
                interrupting workflows. It is designed for dense enterprise interfaces where information hierarchy and
                quick scanning are important.
              </p>
            </>
          }
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && <BadgeOverview />}

        {tab === 'Usage' && <ExpertUsageTab content={expert} />}

        {tab === 'UX Copy' && <BadgeUxCopy />}

        {tab === 'Code/APIs' && (
          <div className="space-y-10 pt-2">
            <section id="badge-code-overview" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-arvo-light-primary dark:text-white">Implementation</h2>
              <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
                The full Badge API is on the <strong className="text-arvo-light-primary dark:text-white font-medium">Overview</strong>{' '}
                tab (<strong className="text-arvo-light-primary dark:text-white font-medium">API props</strong>). UX writing
                rules are on the <strong className="text-arvo-light-primary dark:text-white font-medium">UX Copy</strong> tab.
              </p>
            </section>
            <DocumentationStatusCard id="stub-status-code" />
          </div>
        )}

        {tab === 'Accessibility' && <ExpertAccessibilityTab content={expert} keyboard={[]} aria={[]} />}
      </div>
    </PageWithToc>
  )
}
