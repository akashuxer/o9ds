import { Link } from 'react-router-dom'
import CodeBlock from '../../LayoutComponents/CodeBlock'
import DocSection, { DocCallout, DocParagraph, DocStrong, DocSubsection } from '../../LayoutComponents/DocSection'
import GrayBgCard from '../../LayoutComponents/GrayBgCard'

export const referenceSections = [
  { id: 'guideline-routing', label: 'Guideline routing — how it works' },
  { id: 'available-reference-files', label: 'Available reference files' },
  { id: 'guidelines-md', label: 'Guidelines.md' },
  { id: 'chart-md', label: 'chart.md' },
  { id: 'grid-md', label: 'Grid.md' },
  { id: 'kpi-md', label: 'kpi.md' },
  { id: 'o9pagelayout-md', label: 'o9PageLayout.md' },
  { id: 'recommended-usage', label: 'Recommended usage pattern' },
  { id: 'best-practice', label: 'Best practice' },
]

const ROUTING_HELPS = [
  'Reduce guesswork during generation',
  'Improve output consistency and UX quality',
  'Reuse approved Arvo components and enterprise patterns',
  'Reduce token usage by avoiding repetitive explanations',
  'Generate more structured and accurate UI experiences',
]

const GUIDELINES_USE_FOR = [
  'Components',
  'Layout structures',
  'Typography',
  'Spacing',
  'Icons',
  'General enterprise UX patterns',
]

const GUIDELINES_PROMPT = `"Use Arvo Design System Guidelines as the primary UX and component reference. Reuse existing Arvo components, variable tokens, assets, spacing, typography, icons, and enterprise UX patterns while building the interface. Avoid hardcoded values and do not use external libraries or non-Arvo patterns."`

const CHART_USE_FOR = [
  'Charts and data visualizations',
  'Report tiles',
  'Legends, axes, and tooltip behavior',
  'Visualization hierarchy and styling standards',
]

const CHART_PROMPT = `"Use Arvo Chart Guidelines from chart.md for all chart (or write specific chart) and data visualization implementations. Reuse existing Arvo chart components, variable tokens, report tile patterns, legends, axis styling, tooltip behavior, and visualization hierarchy standards while building the interface. Avoid hardcoded values and do not use external libraries or non-Arvo chart patterns."`

const GRID_USE_FOR = [
  'Tables',
  'Data grids',
  'Filters',
  'Toolbars',
  'Pagination',
  'Enterprise table interactions',
]

const GRID_PROMPT = `"Use Arvo Grid Guidelines from Grid.md for all data grid and table implementations. Reuse existing Arvo grid components, variable tokens, spacing, filters, toolbar patterns, pagination, and enterprise table interactions while building the interface. Avoid hardcoded values and do not use external libraries or non-Arvo grid patterns."`

const KPI_USE_FOR = [
  'KPI cards',
  'Summary metrics',
  'Trend indicators',
  'Metric visualizations',
  'Dashboard KPI sections',
]

const KPI_PROMPT = `"Use Arvo KPI Guidelines from kpi.md for KPI cards and metric summary sections. Reuse existing Arvo KPI components, variable tokens, typography hierarchy, trend indicators, spacing, and enterprise metric visualization patterns while building the interface. Avoid hardcoded values and do not use external libraries or non-Arvo KPI patterns."`

const PAGE_LAYOUT_USE_FOR = [
  'Application layouts',
  'Left sidebar',
  'Right Side launchbar',
  'Filter bar area',
  'Report Tiles',
]

const PAGE_LAYOUT_PROMPT = `"Use o9PageLayout.md as the primary application layout reference without restructuring the existing shell."`

const BEST_PRACTICE_PROMPT = `"Use Arvo Design System guidelines, design tokens, colors, spacing, typography, components, assets, interaction patterns, and enterprise UX standards while generating the experience. Do not use external libraries, hardcoded tokens, colors, spacing values, or non-Arvo patterns."`

function BulletList({ items }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5 text-sm text-arvo-light-secondary dark:text-neutral-400 leading-relaxed m-0">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default function ReferenceLibraryTab() {
  return (
    <div className="space-y-12">
      <DocSection id="guideline-routing" title="Guideline Routing — How It Works">
        <DocParagraph>
          When using Figma Make, users do not need to manually explain every UX pattern, component structure, or enterprise
          interaction from scratch.
        </DocParagraph>
        <DocParagraph>
          Instead, route your prompt to the correct Arvo guideline reference file (<DocStrong>.md</DocStrong>) that already defines the
          expected standards, behaviors, layouts, and implementation patterns.
        </DocParagraph>
        <DocSubsection title="Guideline routing helps">
          <BulletList items={ROUTING_HELPS} />
        </DocSubsection>
        <div className="mt-6">
          <DocCallout tone="note" title="Prompts Library">
            Ready-made prompts for common workflows live on the{' '}
            <Link
              to="/gettingstarted/figma-make/prompts-library"
              className="font-semibold text-arvo-light-primary underline underline-offset-2 dark:text-white"
            >
              Prompts Library
            </Link>{' '}
            tab. This tab focuses on which guideline files to reference.
          </DocCallout>
        </div>
      </DocSection>

      <DocSection id="available-reference-files" title="Available Arvo Reference Files">
        <DocParagraph>
          The Markdown files below define standards and patterns—reference them by name in your Figma Make prompts so outputs
          stay aligned with Arvo.
        </DocParagraph>
      </DocSection>

      <DocSection id="guidelines-md" title="Guidelines.md">
        <DocParagraph className="m-0 mb-2">Main UX and component reference file.</DocParagraph>
        <DocSubsection title="Use for">
          <BulletList items={GUIDELINES_USE_FOR} />
        </DocSubsection>
        <DocSubsection title="Add in prompt" className="mt-6">
          <CodeBlock code={GUIDELINES_PROMPT} language="text" label="Add in prompt" />
        </DocSubsection>
      </DocSection>

      <DocSection id="chart-md" title="chart.md">
        <DocParagraph className="m-0 mb-2">Reference file for charts and data visualizations.</DocParagraph>
        <DocSubsection title="Use for">
          <BulletList items={CHART_USE_FOR} />
        </DocSubsection>
        <DocSubsection title="Add in prompt" className="mt-6">
          <CodeBlock code={CHART_PROMPT} language="text" label="Add in prompt" />
        </DocSubsection>
      </DocSection>

      <DocSection id="grid-md" title="Grid.md">
        <DocParagraph className="m-0 mb-2">Reference file for data grids and enterprise tables.</DocParagraph>
        <DocSubsection title="Use for">
          <BulletList items={GRID_USE_FOR} />
        </DocSubsection>
        <DocSubsection title="Add in prompt" className="mt-6">
          <CodeBlock code={GRID_PROMPT} language="text" label="Add in prompt" />
        </DocSubsection>
      </DocSection>

      <DocSection id="kpi-md" title="kpi.md">
        <DocParagraph className="m-0 mb-2">Reference file for KPI and metric components.</DocParagraph>
        <DocSubsection title="Use for">
          <BulletList items={KPI_USE_FOR} />
        </DocSubsection>
        <DocSubsection title="Add in prompt" className="mt-6">
          <CodeBlock code={KPI_PROMPT} language="text" label="Add in prompt" />
        </DocSubsection>
      </DocSection>

      <DocSection id="o9pagelayout-md" title="o9PageLayout.md">
        <DocParagraph className="m-0 mb-2">Reference file for o9 application shell and layout structure.</DocParagraph>
        <DocSubsection title="Use for">
          <BulletList items={PAGE_LAYOUT_USE_FOR} />
        </DocSubsection>
        <DocSubsection title="Add in prompt" className="mt-6">
          <CodeBlock code={PAGE_LAYOUT_PROMPT} language="text" label="Add in prompt" />
        </DocSubsection>
      </DocSection>

      <DocSection id="recommended-usage" title="Recommended Usage Pattern">
        <DocParagraph>Combine multiple reference files depending on the workflow.</DocParagraph>
        <div className="grid gap-4 md:grid-cols-2 mt-4">
          <GrayBgCard className="space-y-0 shadow-none hover:translate-y-0 hover:shadow-none">
            <p className="text-xs font-semibold uppercase tracking-wider text-arvo-light-primary dark:text-white m-0 mb-3">
              Example — dashboard
            </p>
            <BulletList items={['Guidelines.md', 'chart.md', 'Grid.md', 'kpi.md', 'o9PageLayout.md']} />
          </GrayBgCard>
          <GrayBgCard className="space-y-0 shadow-none hover:translate-y-0 hover:shadow-none">
            <p className="text-xs font-semibold uppercase tracking-wider text-arvo-light-primary dark:text-white m-0 mb-3">
              Example — data-heavy workspace
            </p>
            <BulletList items={['Guidelines.md', 'Grid.md', 'o9PageLayout.md']} />
          </GrayBgCard>
        </div>
      </DocSection>

      <DocSection id="best-practice" title="Best Practice">
        <DocParagraph>
          Always place the guideline reference statement at the beginning or end of your prompt.
        </DocParagraph>
        <DocSubsection title="Example">
          <CodeBlock code={BEST_PRACTICE_PROMPT} language="text" label="Example prompt" />
        </DocSubsection>
      </DocSection>
    </div>
  )
}
