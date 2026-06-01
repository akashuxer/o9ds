import { useMemo } from 'react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs, { useDocTabUrl } from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocSection from '../../../LayoutComponents/DocSection'
import {
  PropsTable,
  CssVarsGrid,
  MethodsTable,
  EventsTable,
} from '../../../LayoutComponents/ComponentDocPrimitives'
import { getDescriptor } from '../../../data/componentDescriptors.generated'
import { getExpertDoc } from '../../../data/expertDocContent'
import {
  getExpertOverviewToc,
  getExpertUsageToc,
  getExpertA11yToc,
  getExpertCodeToc,
} from './expertDocToc'
import {
  ExpertOverviewTab,
  ExpertUsageTab,
  ExpertAccessibilityTab,
  ExpertImplementationPlaceholder,
} from './ExpertDocSections'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const defaultIcon = (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
  </svg>
)

/**
 * @typedef {import('react').ReactNode} ReactNode
 * @typedef {{
 *   slug: string,
 *   title: string,
 *   description: string,
 *   componentSlug?: string,
 *   icon?: ReactNode,
 *   descriptorSlug?: string,
 *   liveDemo?: ReactNode,
 *   overviewExtra?: ReactNode,
 *   reactCode?: string,
 *   jsCode?: string,
 * }} ExpertPageConfig
 */

/**
 * Factory for full four-tab component documentation pages driven by expertDocContent.
 * @param {ExpertPageConfig} config
 */
export function createExpertComponentPage(config) {
  const {
    slug,
    title,
    description,
    componentSlug = slug,
    icon = defaultIcon,
    descriptorSlug = slug,
    liveDemo,
    overviewExtra,
    reactCode,
    jsCode,
  } = config

  function ExpertComponentDoc() {
    const [tab, setTab] = useDocTabUrl(TABS)
    const content = getExpertDoc(slug)
    const descriptor = getDescriptor(descriptorSlug)
    const keyboard = descriptor?.keyboard ?? []
    const aria = descriptor?.aria ?? []

    const sections = useMemo(() => {
      if (tab === 'Overview') return getExpertOverviewToc(content)
      if (tab === 'Usage') return getExpertUsageToc(content)
      if (tab === 'Code/APIs') return getExpertCodeToc(descriptor, { react: reactCode, js: jsCode })
      if (tab === 'Accessibility') return getExpertA11yToc(content, descriptor)
      return []
    }, [tab, content, descriptor])

    return (
      <PageWithToc sections={sections}>
        <div className="space-y-8">
          <PageHeader title={title} description={description} componentSlug={componentSlug} icon={icon} />
          <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

          {tab === 'Overview' && (
            <ExpertOverviewTab content={content}>
              {liveDemo}
              {overviewExtra}
            </ExpertOverviewTab>
          )}

          {tab === 'Usage' && <ExpertUsageTab content={content} />}

          {tab === 'Code/APIs' && (
            <div className="space-y-12">
              {reactCode ? (
                <DocSection id="react" title="React">
                  <CodeBlock language="tsx" label="@arvo/react" code={reactCode} />
                </DocSection>
              ) : null}
              {jsCode ? (
                <DocSection id="js" title="Vanilla JS">
                  <CodeBlock language="js" label="@arvo/js" code={jsCode} />
                </DocSection>
              ) : null}
              {descriptor?.props?.length ? (
                <DocSection id="props" title="Props">
                  <PropsTable rows={descriptor.props} />
                </DocSection>
              ) : null}
              {descriptor?.cssVarGroups?.length ? (
                <DocSection id="css-vars" title="CSS variables">
                  <CssVarsGrid groups={descriptor.cssVarGroups} />
                </DocSection>
              ) : null}
              {descriptor?.methods?.length ? (
                <DocSection id="methods" title="Methods (JS)">
                  <MethodsTable rows={descriptor.methods} />
                </DocSection>
              ) : null}
              {descriptor?.events?.length ? (
                <DocSection id="events" title="Custom events (JS)">
                  <EventsTable rows={descriptor.events} />
                </DocSection>
              ) : null}
              {!reactCode && !jsCode && !descriptor?.props?.length ? (
                <ExpertImplementationPlaceholder slug={slug} label={title} />
              ) : null}
            </div>
          )}

          {tab === 'Accessibility' && (
            <ExpertAccessibilityTab content={content} keyboard={keyboard} aria={aria} />
          )}
        </div>
      </PageWithToc>
    )
  }

  ExpertComponentDoc.displayName = `${title.replace(/\s+/g, '')}Doc`
  return ExpertComponentDoc
}
