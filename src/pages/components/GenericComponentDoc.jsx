import { useMemo, useState } from 'react'
import DocTabs from '../../LayoutComponents/DocTabs'
import PageHeader from '../../LayoutComponents/PageHeader'
import PageWithToc from '../../LayoutComponents/PageWithToc'
import GrayBgCard from '../../LayoutComponents/GrayBgCard'
import { getComponentPageDescription } from '../../data/componentPageMeta'
import {
  DOCUMENTATION_STATUS_TITLE,
  getDocumentationStatusDescription,
} from '../../data/documentationStatus'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const COMPONENT_STATUS_DESC = getDocumentationStatusDescription('component')

export function slugToComponentTitle(slug) {
  if (!slug) return 'Component'
  return slug
    .split('-')
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(' ')
}

const docIcon = (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
  </svg>
)

function DocumentationStatusCard({ id }) {
  return (
    <section id={id} className="scroll-mt-24">
      <GrayBgCard title={DOCUMENTATION_STATUS_TITLE} desc={COMPONENT_STATUS_DESC} />
    </section>
  )
}

/**
 * Standard four-tab shell for components that do not have a dedicated doc file yet.
 * @param {{ slug?: string, description?: string }} props
 */
export default function GenericComponentDoc({ slug, description: descriptionProp }) {
  const title = slugToComponentTitle(slug)
  const headerDescription = descriptionProp ?? getComponentPageDescription(slug)
  const [activeTab, setActiveTab] = useState('Overview')

  const onThisPageSections = useMemo(() => {
    if (activeTab === 'Overview') {
      return [
        { id: 'stub-purpose', label: 'Purpose' },
        { id: 'stub-status-overview', label: 'Documentation status' },
      ]
    }
    if (activeTab === 'Usage') {
      return [
        { id: 'stub-usage', label: 'Guidance' },
        { id: 'stub-status-usage', label: 'Documentation status' },
      ]
    }
    if (activeTab === 'Code/APIs') {
      return [
        { id: 'stub-code', label: 'Implementation' },
        { id: 'stub-status-code', label: 'Documentation status' },
      ]
    }
    if (activeTab === 'Accessibility') {
      return [
        { id: 'stub-a11y', label: 'Basics' },
        { id: 'stub-status-a11y', label: 'Documentation status' },
      ]
    }
    return []
  }, [activeTab])

  return (
    <PageWithToc sections={onThisPageSections}>
      <div className="max-w-4xl space-y-8 pb-16">
        <PageHeader title={title} description={headerDescription} icon={docIcon} />
        <DocTabs tabs={TABS} activeTab={activeTab} onSelect={setActiveTab} />

        {activeTab === 'Overview' && (
          <div className="space-y-10 pt-2">
            <section id="stub-purpose" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-arvo-light-primary dark:text-white">Purpose</h2>
              <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
                This page reserves the full four-tab documentation structure (Overview, Usage, Code/APIs, Accessibility) for{' '}
                <strong className="text-arvo-light-primary dark:text-white font-medium">{title}</strong>. Content will be added in a future
                iteration.
              </p>
            </section>
            <DocumentationStatusCard id="stub-status-overview" />
          </div>
        )}

        {activeTab === 'Usage' && (
          <div className="space-y-10 pt-2">
            <section id="stub-usage" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-arvo-light-primary dark:text-white">Usage</h2>
              <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
                Usage guidance—when to choose this component, layout, and pairing with other Arvo patterns—will be documented here.
              </p>
            </section>
            <DocumentationStatusCard id="stub-status-usage" />
          </div>
        )}

        {activeTab === 'Code/APIs' && (
          <div className="space-y-10 pt-2">
            <section id="stub-code" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-arvo-light-primary dark:text-white">Code / APIs</h2>
              <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
                Props, package imports, tokens, and implementation examples will be added here. Refer to sibling components with full docs (e.g.
                Button, Cards) for the expected structure.
              </p>
            </section>
            <DocumentationStatusCard id="stub-status-code" />
          </div>
        )}

        {activeTab === 'Accessibility' && (
          <div className="space-y-10 pt-2">
            <section id="stub-a11y" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-arvo-light-primary dark:text-white">Accessibility</h2>
              <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
                Keyboard, screen reader, and ARIA guidance will be documented here. Prefer native HTML semantics where possible.
              </p>
            </section>
            <DocumentationStatusCard id="stub-status-a11y" />
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
