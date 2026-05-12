import ExpandableDocImage from '../../LayoutComponents/ExpandableDocImage'
import DocSection, { DocParagraph } from '../../LayoutComponents/DocSection'
import O9conExternalLinkIcon from './O9conExternalLinkIcon'

function DemoHeadingLink({ href, label, ariaLabel }) {
  return (
    <h2 className="text-xl font-semibold text-arvo-light-primary dark:text-white m-0">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className="inline-flex items-center gap-2 font-semibold text-arvo-light-primary hover:opacity-90 dark:text-white"
      >
        <span className="underline underline-offset-2">{label}</span>
        <O9conExternalLinkIcon className="arvo-icon-20" />
      </a>
    </h2>
  )
}

const DEMO_1_GIF = '/figmamakeGraphic/Demo 1 example.gif'
const DEMO_1_URL = 'https://stroke-drawer-34242468.figma.site/'

const DEMO_2_GIF = '/figmamakeGraphic/Demo 02 example.gif'
const DEMO_2_URL = 'https://monkey-agile-60917138.figma.site/'

const DEMO_3_GIF = '/figmamakeGraphic/demo 03 example.gif'
const DEMO_3_URL = 'https://swoop-broil-48954584.figma.site/'

const DEMO_4_GIF = '/figmamakeGraphic/Demo 04 example.gif'
const DEMO_4_URL = 'https://pouch-jolly-69788496.figma.site/'

const DEMO_5_GIF = '/figmamakeGraphic/Demo 05 example.gif'
const DEMO_5_URL = 'https://lyric-amount-92204472.figma.site/'

export const makeDemosSections = [
  { id: 'make-demos-intro', label: 'Make Demos' },
  { id: 'make-demos-demo-1', label: 'Demo 1' },
  { id: 'make-demos-demo-2', label: 'Demo 2' },
  { id: 'make-demos-demo-3', label: 'Demo 3' },
  { id: 'make-demos-demo-4', label: 'Demo 4' },
  { id: 'make-demos-demo-5', label: 'Demo 5' },
]

export default function MakeDemosTab() {
  return (
    <div className="space-y-12">
      <DocSection id="make-demos-intro">
        <DocParagraph>
          Curated examples of Figma Make builds—screenshots, short walkthroughs, and links to explore files—will appear
          here. Pair this tab with Make Templates and Prompts Library when you try patterns in your own workspace.
        </DocParagraph>
      </DocSection>

      <DocSection id="make-demos-demo-1">
        <DemoHeadingLink
          href={DEMO_1_URL}
          label="Demo 1"
          ariaLabel="Demo 1 — Enterprise Analytics Dashboard (opens in new tab)"
        />
        <ExpandableDocImage
          src={DEMO_1_GIF}
          alt="Enterprise Analytics Dashboard — adoption charts, user status, trends, and departments requiring action"
          loading="lazy"
          className="border border-arvo-light-border dark:border-neutral-700 rounded-lg"
        />
      </DocSection>

      <DocSection id="make-demos-demo-2">
        <DemoHeadingLink
          href={DEMO_2_URL}
          label="Demo 2"
          ariaLabel="Demo 2 — Create User Management Workspace (opens in new tab)"
        />
        <ExpandableDocImage
          src={DEMO_2_GIF}
          alt="User Management workspace — compact enterprise grid with drawer"
          loading="lazy"
          className="border border-arvo-light-border dark:border-neutral-700 rounded-lg"
        />
      </DocSection>

      <DocSection id="make-demos-demo-3">
        <DemoHeadingLink
          href={DEMO_3_URL}
          label="Demo 3"
          ariaLabel="Demo 3 — User Management Admin Screen (opens in new tab)"
        />
        <ExpandableDocImage
          src={DEMO_3_GIF}
          alt="User Management admin screen — action bar, filters, user table, and workspace composition"
          loading="lazy"
          className="border border-arvo-light-border dark:border-neutral-700 rounded-lg"
        />
      </DocSection>

      <DocSection id="make-demos-demo-4">
        <DemoHeadingLink
          href={DEMO_4_URL}
          label="Demo 4"
          ariaLabel="Demo 4 — Single-View Supply Chain Workspace (opens in new tab)"
        />
        <ExpandableDocImage
          src={DEMO_4_GIF}
          alt="Single-View Supply Chain Workspace — integrated supply chain dashboard"
          loading="lazy"
          className="border border-arvo-light-border dark:border-neutral-700 rounded-lg"
        />
      </DocSection>

      <DocSection id="make-demos-demo-5">
        <DemoHeadingLink
          href={DEMO_5_URL}
          label="Demo 5"
          ariaLabel="Demo 5 — Showing/Hiding Workflows (opens in new tab)"
        />
        <ExpandableDocImage
          src={DEMO_5_GIF}
          alt="Showing and hiding workflows in the workspace"
          loading="lazy"
          className="border border-arvo-light-border dark:border-neutral-700 rounded-lg"
        />
      </DocSection>
    </div>
  )
}
