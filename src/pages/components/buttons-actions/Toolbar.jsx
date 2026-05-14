import { useState, useMemo } from 'react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs from '../../../LayoutComponents/DocTabs'
import ComponentPreview from '../../../LayoutComponents/ComponentPreview'
import GrayBgCard from '../../../LayoutComponents/GrayBgCard'
import DocSection, { DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import {
  DOCUMENTATION_STATUS_TITLE,
  getDocumentationStatusDescription,
} from '../../../data/documentationStatus'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']
const STORYBOOK_URL = 'https://o9arvo-storybook.vercel.app/iframe.html?id=actions-button--playground&viewMode=story'
const STORYBOOK_DARK_URL = 'https://o9arvo-storybook.vercel.app/iframe.html?id=actions-button--playground&viewMode=story&globals=theme%3Ao9dark'
const VARIANTS_URL = 'https://o9arvo-storybook.vercel.app/iframe.html?id=actions-button-examples--all-variants&viewMode=story&globals=theme%3Ao9theme'
const VARIANTS_DARK_URL = 'https://o9arvo-storybook.vercel.app/iframe.html?id=actions-button-examples--all-variants&viewMode=story&globals=theme%3Ao9dark'
const SIZES_URL = 'https://o9arvo-storybook.vercel.app/iframe.html?id=actions-button-examples--all-sizes&viewMode=story&globals=theme%3Ao9theme'
const SIZES_DARK_URL = 'https://o9arvo-storybook.vercel.app/iframe.html?id=actions-button-examples--all-sizes&viewMode=story&globals=theme%3Ao9dark'
const COMPONENT_STATUS_DESC = getDocumentationStatusDescription('component')

const docIcon = (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
  </svg>
)

export default function Toolbar() {
  const [tab, setTab] = useState('Overview')

  const sections = useMemo(() => {
    if (tab === 'Overview') return [
      { id: 'purpose', label: 'Purpose' },
      { id: 'preview', label: 'Preview' },
      { id: 'variants', label: 'Variants' },
      { id: 'sizes', label: 'Sizes' },
      { id: 'status-overview', label: 'Documentation status' },
    ]
    if (tab === 'Usage') return [
      { id: 'stub-usage', label: 'Guidance' },
      { id: 'status-usage', label: 'Documentation status' },
    ]
    if (tab === 'Code/APIs') return [
      { id: 'stub-code', label: 'Implementation' },
      { id: 'status-code', label: 'Documentation status' },
    ]
    if (tab === 'Accessibility') return [
      { id: 'stub-a11y', label: 'Basics' },
      { id: 'status-a11y', label: 'Documentation status' },
    ]
    return []
  }, [tab])

  return (
    <PageWithToc sections={sections}>
      <div className="max-w-4xl space-y-8 pb-16">
        <PageHeader
          title="Toolbar"
          description="A horizontal container for grouping related actions, filters, and controls. Toolbars provide consistent keyboard navigation across a set of buttons or interactive elements."
          icon={docIcon}
        />

        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-10 pt-2">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>
                A <DocStrong>Toolbar</DocStrong> groups related actions into a single horizontal row with roving-tabindex keyboard navigation. It is the standard container for action sets in headers, panels, and editors.
              </DocParagraph>
            </DocSection>

            <DocSection id="preview" title="Preview">
              <DocParagraph>
                Explore the full Toolbar component with interactive controls, variants, and documentation in Storybook.
              </DocParagraph>
              <ComponentPreview
                title="Toolbar"
                description="Groups related actions with roving-tabindex keyboard navigation."
                storybookUrl={STORYBOOK_URL}
                storybookDarkUrl={STORYBOOK_DARK_URL}
              />
            </DocSection>

            <DocSection id="variants" title="Variants">
              <DocParagraph>
                All available button variants displayed side by side. Toggle between light and dark themes to compare contrast and visual weight.
              </DocParagraph>
              <ComponentPreview
                title="All Variants"
                description="Primary, Secondary, Tertiary, Outline, and Danger variants."
                storybookUrl={VARIANTS_URL}
                storybookDarkUrl={VARIANTS_DARK_URL}
              />
            </DocSection>

            <DocSection id="sizes" title="Sizes">
              <DocParagraph>
                Three sizes scale height, padding, font, and icon together. Toggle between light and dark themes to preview.
              </DocParagraph>
              <ComponentPreview
                title="All Sizes"
                description="Small, Medium, and Large button sizes."
                storybookUrl={SIZES_URL}
                storybookDarkUrl={SIZES_DARK_URL}
              />
            </DocSection>

            <section id="status-overview" className="scroll-mt-24">
              <GrayBgCard title={DOCUMENTATION_STATUS_TITLE} desc={COMPONENT_STATUS_DESC} />
            </section>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-10 pt-2">
            <DocSection id="stub-usage" title="Guidance">
              <DocParagraph>
                Usage guidance — when to choose this component, layout, and pairing with other Arvo patterns — will be documented here.
              </DocParagraph>
            </DocSection>
            <section id="status-usage" className="scroll-mt-24">
              <GrayBgCard title={DOCUMENTATION_STATUS_TITLE} desc={COMPONENT_STATUS_DESC} />
            </section>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-10 pt-2">
            <DocSection id="stub-code" title="Code / APIs">
              <DocParagraph>
                Props, package imports, tokens, and implementation examples will be added here.
              </DocParagraph>
            </DocSection>
            <section id="status-code" className="scroll-mt-24">
              <GrayBgCard title={DOCUMENTATION_STATUS_TITLE} desc={COMPONENT_STATUS_DESC} />
            </section>
          </div>
        )}

        {tab === 'Accessibility' && (
          <div className="space-y-10 pt-2">
            <DocSection id="stub-a11y" title="Accessibility">
              <DocParagraph>
                Keyboard, screen reader, and ARIA guidance will be documented here.
              </DocParagraph>
            </DocSection>
            <section id="status-a11y" className="scroll-mt-24">
              <GrayBgCard title={DOCUMENTATION_STATUS_TITLE} desc={COMPONENT_STATUS_DESC} />
            </section>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
