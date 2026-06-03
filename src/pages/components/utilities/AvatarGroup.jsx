import { useMemo } from 'react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import { AVATAR_GROUP_RESOURCE_STATUS } from '../../../data/componentResourceStatus'
import DocTabs, { useDocTabUrl } from '../../../LayoutComponents/DocTabs'
import GrayBgCard from '../../../LayoutComponents/GrayBgCard'
import {
  DOCUMENTATION_STATUS_TITLE,
  getDocumentationStatusDescription,
} from '../../../data/documentationStatus'
import { AVATAR_GROUP_OVERVIEW_TOC } from '../../../data/avatarGroupDocData'
import AvatarGroupOverview from './AvatarGroupOverview'
import { ExpertUsageTab, ExpertAccessibilityTab } from '../shared/ExpertDocSections'
import { getExpertDoc } from '../../../data/expertDocContent'
import { getExpertUsageToc, getExpertA11yToc } from '../shared/expertDocToc'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const avatarGroupIcon = (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
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

export default function AvatarGroupDoc() {
  const [tab, setTab] = useDocTabUrl(TABS)
  const expert = getExpertDoc('avatar-group')

  const sections = useMemo(() => {
    if (tab === 'Overview') return AVATAR_GROUP_OVERVIEW_TOC
    if (tab === 'Usage') return getExpertUsageToc(expert)
    if (tab === 'Accessibility') return getExpertA11yToc(expert, null)
    if (tab === 'Code/APIs') {
      return [
        { id: 'avatar-group-code-overview', label: 'Documentation' },
        { id: 'stub-status-code', label: 'Documentation status' },
      ]
    }
    return []
  }, [tab, expert])

  return (
    <PageWithToc sections={sections}>
      <div className="space-y-8">
        <PageHeader
          title="Avatar Group"
          componentSlug="avatar-group"
          resourceStatus={AVATAR_GROUP_RESOURCE_STATUS}
          icon={avatarGroupIcon}
          description={
            <>
              <p className="m-0">
                Avatar Group represents multiple users, collaborators, contributors, or entities in a compact stacked
                format. It helps reduce visual clutter while maintaining identity recognition and contextual awareness
                across workflows.
              </p>
              <p className="m-0">
                Avatar Group is commonly used for ownership, assignments, contributors, reviewers, shared responsibility,
                and participant-based workflows.
              </p>
            </>
          }
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && <AvatarGroupOverview />}

        {tab === 'Usage' && <ExpertUsageTab content={expert} />}

        {tab === 'Code/APIs' && (
          <div className="space-y-10 pt-2">
            <section id="avatar-group-code-overview" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-arvo-light-primary dark:text-white">Implementation</h2>
              <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
                The full Avatar Group API (all props, types, defaults, and overflow behavior) is documented on the{' '}
                <strong className="text-arvo-light-primary dark:text-white font-medium">Overview</strong> tab — see{' '}
                <strong className="text-arvo-light-primary dark:text-white font-medium">API props</strong>,{' '}
                <strong className="text-arvo-light-primary dark:text-white font-medium">Behavior</strong>, and{' '}
                <strong className="text-arvo-light-primary dark:text-white font-medium">Overflow interaction</strong>.
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
