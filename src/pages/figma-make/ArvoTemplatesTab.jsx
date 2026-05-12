import CodeBlock from '../../LayoutComponents/CodeBlock'
import DocSection, { DocCallout, DocCode, DocParagraph, DocStrong, DocSubsection } from '../../LayoutComponents/DocSection'
import ExpandableDocImage from '../../LayoutComponents/ExpandableDocImage'
import WhiteBgCard from '../../LayoutComponents/WhiteBgCard'

/** Public URLs — `make 09` includes a space (matches files under public/figmamakeGraphic/). */
const IMG_START_EXAMPLE = '/figmamakeGraphic/make 09.png'
const IMG_TEMPLATE_LIST = '/figmamakeGraphic/make10.png'
const IMG_APP_LAYOUT = '/figmamakeGraphic/make07.png'
const IMG_WORKFLOW = '/figmamakeGraphic/make08.png'
const IMG_APP_LAYOUT_SNAPSHOT = '/figmamakeGraphic/make11.png'
const IMG_WORKFLOW_SNAPSHOT = '/figmamakeGraphic/make12.png'

const LINK_APP_LAYOUT_TEMPLATE = 'https://o9pagelayout.figma.site/'
const LINK_WORKFLOW_TEMPLATE = 'https://o9workflows.figma.site/'

function ExternalDocLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-arvo-light-primary underline underline-offset-2 hover:opacity-90 dark:text-white"
    >
      {children}
    </a>
  )
}

export const makeTemplatesSections = [
  { id: 'what-are-make-templates', label: 'What are Make templates?' },
  { id: 'arvo-templates-access', label: 'How to access templates' },
  { id: 'arvo-templates-available', label: 'Available templates' },
  { id: 'arvo-templates-prompts', label: 'Prompts with templates' },
  { id: 'arvo-templates-why', label: 'Why use Make templates' },
]

const PROMPT_APPLICATION_LAYOUT = `"Use the existing o9 Application Layout template area and integrate this new flow within the current layout structure only. Do not remove, replace, restructure, or regenerate the existing o9 page layout, navigation, or application shell. Reuse the current layout hierarchy and place the new workflow within the available content area while maintaining Arvo design system standards and enterprise UX patterns."`

const PROMPT_WORKFLOW = `"Use the existing o9 Workflow template area and integrate this new flow within the current layout structure only. Do not remove, replace, restructure, or regenerate the existing workflow layout, navigation, or application shell. Reuse the current layout hierarchy and place the new workflow within the available content area while maintaining Arvo design system standards and enterprise UX patterns."`

const WHY_BULLETS = [
  'Reduces token usage because the base application structure already exists',
  'Reuses approved navigation, headers, side panels, and layouts',
  'Helps Figma Make focus on business workflows instead of rebuilding layouts',
  'Enables faster iterations and better consistency across modules and screens',
  'Reduces hallucinated UI structures and random component generation',
]

export default function ArvoTemplatesTab() {
  return (
    <div className="space-y-12">
      <DocSection id="what-are-make-templates" title="What Are Figma Make Templates?">
        <DocParagraph>
          Figma Make templates are prebuilt starting structures that help teams rapidly create workflows, dashboards, and
          enterprise experiences without generating layouts from scratch.
        </DocParagraph>
        <DocParagraph>
          Instead of rebuilding navigation, application shells, layouts, or workspace structures every time, templates provide
          reusable foundations aligned with the <DocStrong>Arvo Design System</DocStrong> and o9 enterprise UX standards.
        </DocParagraph>
      </DocSection>

      <DocSection id="arvo-templates-access" title="How to Access Make Templates in Figma Make">
        <div className="space-y-8">
          <div>
            <p className="text-sm font-semibold text-arvo-light-primary dark:text-white m-0 mb-2">Step 1</p>
            <DocParagraph className="m-0 mb-3">
              On the home screen, go to <DocStrong>Start from an example</DocStrong>.
            </DocParagraph>
            <div className="mx-auto w-full max-w-md">
              <ExpandableDocImage
                src={IMG_START_EXAMPLE}
                alt="Figma Make home screen with Start from an example"
                className="border border-arvo-light-border dark:border-neutral-700"
              />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-arvo-light-primary dark:text-white m-0 mb-2">Step 2</p>
            <DocParagraph className="m-0">
              Click <DocStrong>See more</DocStrong> to explore all available templates.
            </DocParagraph>
          </div>
          <div>
            <p className="text-sm font-semibold text-arvo-light-primary dark:text-white m-0 mb-2">Step 3</p>
            <DocParagraph className="m-0 mb-3">
              Look for o9 templates with the prefix <DocCode>o9Arvo:</DocCode> in the template list.
            </DocParagraph>
            <div className="mx-auto w-full max-w-md">
              <ExpandableDocImage
                src={IMG_TEMPLATE_LIST}
                alt="Template list showing o9Arvo prefixed templates"
                className="border border-arvo-light-border dark:border-neutral-700"
              />
            </div>
          </div>
        </div>
      </DocSection>

      <DocSection id="arvo-templates-available" title="Available Templates">
        <div className="grid gap-6 md:grid-cols-2">
          <WhiteBgCard title="o9Arvo: o9 Application Layout">
            <p className="text-sm text-arvo-light-secondary dark:text-neutral-400 m-0 mb-2 leading-relaxed">
              o9 Application Layout Template
            </p>
            <p className="text-sm text-arvo-light-secondary dark:text-neutral-400 m-0 mb-4 leading-relaxed break-words">
              Visit{' '}
              <ExternalDocLink href={LINK_APP_LAYOUT_TEMPLATE}>https://o9pagelayout.figma.site/</ExternalDocLink>
            </p>
            <ExpandableDocImage
              src={IMG_APP_LAYOUT}
              alt="o9 Application Layout template preview"
              className="border border-arvo-light-border dark:border-neutral-700"
            />
            <p className="mt-4 mb-2 text-xs font-semibold uppercase tracking-wider text-arvo-light-secondary dark:text-neutral-500">
              Snapshot
            </p>
            <ExpandableDocImage
              src={IMG_APP_LAYOUT_SNAPSHOT}
              alt="Snapshot of o9 Application Layout template in Figma Make"
              className="border border-arvo-light-border dark:border-neutral-700"
            />
          </WhiteBgCard>
          <WhiteBgCard title="o9Arvo: Workflows">
            <p className="text-sm text-arvo-light-secondary dark:text-neutral-400 m-0 mb-2 leading-relaxed">
              o9 Workflow Template
            </p>
            <p className="text-sm text-arvo-light-secondary dark:text-neutral-400 m-0 mb-4 leading-relaxed break-words">
              Visit{' '}
              <ExternalDocLink href={LINK_WORKFLOW_TEMPLATE}>https://o9workflows.figma.site/</ExternalDocLink>
            </p>
            <ExpandableDocImage
              src={IMG_WORKFLOW}
              alt="o9 Workflow template preview"
              className="border border-arvo-light-border dark:border-neutral-700"
            />
            <p className="mt-4 mb-2 text-xs font-semibold uppercase tracking-wider text-arvo-light-secondary dark:text-neutral-500">
              Snapshot
            </p>
            <ExpandableDocImage
              src={IMG_WORKFLOW_SNAPSHOT}
              alt="Snapshot of o9 Workflow template in Figma Make"
              className="border border-arvo-light-border dark:border-neutral-700"
            />
          </WhiteBgCard>
        </div>
      </DocSection>

      <DocSection id="arvo-templates-prompts" title="Add These Prompts While Using Make Templates">
        <DocSubsection title="For o9 Application Layout Template">
          <CodeBlock code={PROMPT_APPLICATION_LAYOUT} language="text" label="Prompt" />
        </DocSubsection>
        <DocSubsection title="For o9 Workflow Template" className="mt-8">
          <CodeBlock code={PROMPT_WORKFLOW} language="text" label="Prompt" />
        </DocSubsection>
      </DocSection>

      <DocSection id="arvo-templates-why" title="Why Use Make Templates">
        <ul className="m-0 list-none space-y-3 p-0">
          {WHY_BULLETS.map((item) => (
            <li
              key={item}
              className="flex gap-3 border border-arvo-light-border dark:border-neutral-700 bg-arvo-light-surface px-4 py-3 text-sm leading-relaxed text-arvo-light-secondary dark:bg-neutral-900/40 dark:text-neutral-300"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-arvo-light-primary dark:bg-white" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <DocCallout tone="note" title="Note">
            More templates for different workspaces and use cases are being added continuously to improve reuse and workflow
            acceleration.
          </DocCallout>
        </div>
      </DocSection>
    </div>
  )
}
