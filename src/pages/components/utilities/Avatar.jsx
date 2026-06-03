import { useMemo } from 'react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import { AVATAR_RESOURCE_STATUS } from '../../../data/componentResourceStatus'
import DocTabs, { useDocTabUrl } from '../../../LayoutComponents/DocTabs'
import GrayBgCard from '../../../LayoutComponents/GrayBgCard'
import {
  DOCUMENTATION_STATUS_TITLE,
  getDocumentationStatusDescription,
} from '../../../data/documentationStatus'
import { AVATAR_OVERVIEW_TOC } from '../../../data/avatarDocData'
import AvatarOverview from './AvatarOverview'
import { ExpertUsageTab, ExpertAccessibilityTab } from '../shared/ExpertDocSections'
import { getExpertDoc } from '../../../data/expertDocContent'
import { getExpertUsageToc, getExpertA11yToc } from '../shared/expertDocToc'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const avatarIcon = (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
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

export default function AvatarDoc() {
  const [tab, setTab] = useDocTabUrl(TABS)
  const expert = getExpertDoc('avatar')

  const sections = useMemo(() => {
    if (tab === 'Overview') return AVATAR_OVERVIEW_TOC
    if (tab === 'Usage') return getExpertUsageToc(expert)
    if (tab === 'Accessibility') return getExpertA11yToc(expert, null)
    if (tab === 'Code/APIs') {
      return [
        { id: 'avatar-code-overview', label: 'Documentation' },
        { id: 'stub-status-code', label: 'Documentation status' },
      ]
    }
    return []
  }, [tab, expert])

  return (
    <PageWithToc sections={sections}>
      <div className="space-y-8">
        <PageHeader
          title="Avatar"
          componentSlug="avatar"
          resourceStatus={AVATAR_RESOURCE_STATUS}
          icon={avatarIcon}
          description={
            <>
              <p className="m-0">
                Avatar represents a person, AI assistant, brand, connector, or system identity in a compact visual format.
                It helps users quickly recognize ownership, presence, status, and identity across the platform.
              </p>
              <p className="m-0">
                Avatars support multiple visual types including profile images, initials fallback, icons, logos, and AI
                identities while maintaining consistency across enterprise workflows.
              </p>
            </>
          }
        />
        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && <AvatarOverview />}

        {tab === 'Usage' && <ExpertUsageTab content={expert} />}

        {tab === 'Code/APIs' && (
          <div className="space-y-10 pt-2">
            <section id="avatar-code-overview" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-arvo-light-primary dark:text-white">Implementation</h2>
              <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
                The full Avatar API (all props, types, defaults, and initials fallback rules) is documented on the{' '}
                <strong className="text-arvo-light-primary dark:text-white font-medium">Overview</strong> tab — see{' '}
                <strong className="text-arvo-light-primary dark:text-white font-medium">API props</strong> and{' '}
                <strong className="text-arvo-light-primary dark:text-white font-medium">Initials fallback logic</strong>.
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
