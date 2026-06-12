import { useMemo } from 'react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs, { useDocTabUrl } from '../../../LayoutComponents/DocTabs'
import ComponentPreview from '../../../LayoutComponents/ComponentPreview'
import GrayBgCard from '../../../LayoutComponents/GrayBgCard'
import DocSection, { DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import {
  DOCUMENTATION_STATUS_TITLE,
  getDocumentationStatusDescription,
} from '../../../data/documentationStatus'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']
const SB = '/storybook/iframe.html'

const story = (id, theme = 'o9theme') =>
  `${SB}?id=${id}&viewMode=story&globals=theme%3A${theme}`

const PREVIEW_URL = story('actions-buttongroup--playground')
const PREVIEW_DARK_URL = story('actions-buttongroup--playground', 'o9dark')
const TOOLBAR_ROW_URL = story('actions-button-examples--toolbar-row')
const TOOLBAR_ROW_DARK_URL = story('actions-button-examples--toolbar-row', 'o9dark')
const VARIANTS_URL = story('actions-buttongroup-examples--all-variants')
const VARIANTS_DARK_URL = story('actions-buttongroup-examples--all-variants', 'o9dark')
const SIZES_URL = story('actions-buttongroup-examples--all-sizes')
const SIZES_DARK_URL = story('actions-buttongroup-examples--all-sizes', 'o9dark')
const BULK_TOOLBAR_URL = story('actions-buttongroup-examples--bulk-action-toolbar')
const BULK_TOOLBAR_DARK_URL = story('actions-buttongroup-examples--bulk-action-toolbar', 'o9dark')
const ICON_ONLY_URL = story('actions-buttongroup-features--icon-only')
const ICON_ONLY_DARK_URL = story('actions-buttongroup-features--icon-only', 'o9dark')

const COMPONENT_STATUS_DESC = getDocumentationStatusDescription('component')

export default function Toolbar() {
  const [tab, setTab] = useDocTabUrl(TABS)

  const sections = useMemo(() => {
    if (tab === 'Overview') {
      return [
        { id: 'purpose', label: 'Purpose' },
        { id: 'preview', label: 'Preview' },
        { id: 'toolbar-row', label: 'Toolbar row' },
        { id: 'variants', label: 'Variants' },
        { id: 'sizes', label: 'Sizes' },
        { id: 'bulk-toolbar', label: 'Bulk actions' },
        { id: 'icon-only', label: 'Icon-only' },
        { id: 'status-overview', label: 'Documentation status' },
      ]
    }
    if (tab === 'Usage') {
      return [
        { id: 'stub-usage', label: 'Guidance' },
        { id: 'status-usage', label: 'Documentation status' },
      ]
    }
    if (tab === 'Code/APIs') {
      return [
        { id: 'stub-code', label: 'Implementation' },
        { id: 'status-code', label: 'Documentation status' },
      ]
    }
    if (tab === 'Accessibility') {
      return [
        { id: 'stub-a11y', label: 'Basics' },
        { id: 'status-a11y', label: 'Documentation status' },
      ]
    }
    return []
  }, [tab])

  return (
    <PageWithToc sections={sections}>
      <div className="max-w-4xl space-y-8 pb-16">
        <PageHeader
          title="Toolbar"
          description="A horizontal container for grouping related actions, filters, and controls. Toolbars provide consistent keyboard navigation across a set of buttons or interactive elements."
          componentSlug="toolbar"
        />

        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-10 pt-2">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>
                A <DocStrong>Toolbar</DocStrong> groups related actions into a single horizontal row with roving-tabindex keyboard navigation. In Arvo, toolbars are built with <DocStrong>Button Group</DocStrong> (<code className="px-1" data-arvo-inline-code>role=&quot;toolbar&quot;</code>) and related action controls (buttons, icon buttons, split buttons) arranged for headers, panels, and editors.
              </DocParagraph>
            </DocSection>

            <DocSection id="preview" title="Preview">
              <DocParagraph>
                Interactive Button Group playground — the primary building block for toolbar layouts in Storybook.
              </DocParagraph>
              <ComponentPreview
                title="Button Group — Playground"
                description="Configure selection mode, variant, size, and items for a toolbar-style group."
                storybookUrl={PREVIEW_URL}
                storybookDarkUrl={PREVIEW_DARK_URL}
              />
            </DocSection>

            <DocSection id="toolbar-row" title="Toolbar row">
              <DocParagraph>
                A typical toolbar row mixing primary, secondary, and icon actions in a single horizontal strip.
              </DocParagraph>
              <ComponentPreview
                title="Button — Toolbar row"
                description="Mixed button variants arranged as a toolbar row."
                storybookUrl={TOOLBAR_ROW_URL}
                storybookDarkUrl={TOOLBAR_ROW_DARK_URL}
              />
            </DocSection>

            <DocSection id="variants" title="Variants">
              <DocParagraph>
                Primary and secondary Button Group variants for toolbars on different surface emphasis levels.
              </DocParagraph>
              <ComponentPreview
                title="All variants"
                description="Primary and secondary toolbar group variants."
                storybookUrl={VARIANTS_URL}
                storybookDarkUrl={VARIANTS_DARK_URL}
              />
            </DocSection>

            <DocSection id="sizes" title="Sizes">
              <DocParagraph>
                Small and large toolbar heights — match density to the surrounding layout (table header vs. page chrome).
              </DocParagraph>
              <ComponentPreview
                title="All sizes"
                description="Small (24px) and large (32px) toolbar item heights."
                storybookUrl={SIZES_URL}
                storybookDarkUrl={SIZES_DARK_URL}
              />
            </DocSection>

            <DocSection id="bulk-toolbar" title="Bulk actions">
              <DocParagraph>
                Bulk-action toolbar pattern for data grids and lists — selection-driven actions in a compact row.
              </DocParagraph>
              <ComponentPreview
                title="Bulk action toolbar"
                description="Selection-driven bulk actions in a toolbar layout."
                storybookUrl={BULK_TOOLBAR_URL}
                storybookDarkUrl={BULK_TOOLBAR_DARK_URL}
              />
            </DocSection>

            <DocSection id="icon-only" title="Icon-only">
              <DocParagraph>
                Icon-only toolbar for space-constrained surfaces — each item is an icon button with an accessible name.
              </DocParagraph>
              <ComponentPreview
                title="Icon-only toolbar"
                description="Dense icon-only Button Group for compact toolbars."
                storybookUrl={ICON_ONLY_URL}
                storybookDarkUrl={ICON_ONLY_DARK_URL}
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
                Props, package imports, tokens, and implementation examples will be added here. See <DocStrong>Button Group</DocStrong> for the underlying API.
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
                Keyboard, screen reader, and ARIA guidance will be documented here. Toolbars use <code className="px-1" data-arvo-inline-code>role=&quot;toolbar&quot;</code> with roving tabindex — see Button Group accessibility for details.
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
