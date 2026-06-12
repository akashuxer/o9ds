import { useMemo } from 'react'
import PageHeader from '../LayoutComponents/PageHeader'
import PageWithToc from '../LayoutComponents/PageWithToc'
import DocTabs, { useDocTabUrl } from '../LayoutComponents/DocTabs'
import { DocTabRouteProvider } from '../context/DocTabRouteContext'
import { PATH_CONTRIBUTE } from '../data/docPaths'
import {
  CONTRIBUTE_DESIGNER_TOC,
  CONTRIBUTE_DEVELOPER_TOC,
  CONTRIBUTE_TABS,
} from './contribute/contributeData'
import { headerIcon } from './contribute/contributeShared'
import ContributeDesignersTab from './contribute/ContributeDesignersTab'
import ContributeDevelopersTab from './contribute/ContributeDevelopersTab'

export default function Contribute() {
  const [activeTab, setActiveTab] = useDocTabUrl(CONTRIBUTE_TABS, { basePath: PATH_CONTRIBUTE })

  const sections = useMemo(() => {
    if (activeTab === 'For Developers') return CONTRIBUTE_DEVELOPER_TOC
    return CONTRIBUTE_DESIGNER_TOC
  }, [activeTab])

  return (
    <DocTabRouteProvider basePath={PATH_CONTRIBUTE}>
      <PageWithToc sections={sections}>
        <div className="space-y-8">
          <PageHeader
            title="How to Contribute"
            description="Arvo grows through implementation and shared product thinking. Run the descriptor-driven pipeline as a developer, or share UX feedback and proposals as a designer — no code required."
            icon={headerIcon}
          />

          <DocTabs tabs={CONTRIBUTE_TABS} activeTab={activeTab} onSelect={setActiveTab} />

          {activeTab === 'For UX Designers' && <ContributeDesignersTab />}
          {activeTab === 'For Developers' && <ContributeDevelopersTab />}
        </div>
      </PageWithToc>
    </DocTabRouteProvider>
  )
}
