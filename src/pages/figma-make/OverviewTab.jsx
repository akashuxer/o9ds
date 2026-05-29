import { Link } from 'react-router-dom'
import DocSection, { DocCallout, DocParagraph, DocStrong } from '../../LayoutComponents/DocSection'
import ExpandableDocImage from '../../LayoutComponents/ExpandableDocImage'
import GrayBgCard from '../../LayoutComponents/GrayBgCard'
import WhiteBgCard from '../../LayoutComponents/WhiteBgCard'
import { DoDontPair, SimpleTable } from './shared'

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

const MODEL_TREE = [
  ['Trivial change (color, text, spacing)', 'Flash', '30–50 tokens', 'Quick tweaks'],
  ['Standard UI (cards, forms, tables)', 'Sonnet (default)', '80–150 tokens', 'Most UI work'],
  ['Complex logic (state, animation, drag-drop)', 'Opus', '150–250 tokens', 'Tricky problems'],
  ['Integration (API, DB, auth, payments)', 'Gemini 3.1 Pro', '100–200 tokens', 'Backend / external services'],
]

const MODEL_SELECTION_MODELS = [
  {
    title: 'Flash — Best for Quick UI Updates',
    useFor: ['Text updates', 'Color changes', 'Spacing tweaks', 'o9con icon swaps', 'Minor component adjustments'],
    avoidFor: ['New component creation', 'Complex workflows', 'Large dashboards', 'Multi-step interactions'],
  },
  {
    title: 'Sonnet — Best for Most UI Generation (Default)',
    useFor: [
      'Dashboard creation',
      'KPI sections',
      'Forms and tables',
      'Report tiles',
      'Responsive enterprise layouts',
      'Standard application workflows',
    ],
    avoidFor: ['Heavy logic/state handling', 'Complex animations', 'Backend/API integrations'],
  },
  {
    title: 'Opus — Best for Complex UX Logic',
    useFor: [
      'Advanced workflows',
      'Drag-and-drop interactions',
      'Complex state management',
      'Multi-step logic-heavy experiences',
      'Advanced interaction patterns',
    ],
    avoidFor: ['Simple UI updates', 'Basic enterprise layouts'],
  },
  {
    title: 'Gemini 3.1 Pro — Best for Integrations',
    useFor: [
      'API-connected experiences',
      'Database integrations',
      'Authentication flows',
      'Third-party services',
      'Backend-connected workflows',
    ],
    avoidFor: [],
  },
]

const USE_CASES = [
  'Accelerate ideation and early-stage product discussions',
  'Quickly prototype enterprise workflows and experiences',
  'Visualize business processes and operational flows',
  'Convert complex documentation into visual workflow prototypes',
  'Reduce repetitive documentation effort and avoid reading 100s of lines of docs',
  'Explore integrations and connected workflow experiences',
]

const CLEAR_CONTEXT_BENEFITS = [
  'Improves generation performance and accuracy',
  'Reduces hallucinations and irrelevant outputs',
  'Keeps prompts focused on the current workflow',
  'Helps when switching between workflows, templates, or design systems',
  'Reduces token usage by avoiding processing of long conversation history, old prompts, attached references, and previous iterations during every generation',
]

const FAQ_ITEMS = [
  {
    q: 'Is the Arvo Design System ready?',
    a: 'No. Arvo is currently a work in progress, and the team is actively stabilizing and expanding the system through the end of the quarter.',
  },
  {
    q: 'Is the Figma Make kit fully ready?',
    a: 'No. The Figma Make kit is continuously being optimized and updated weekly to improve stability, workflows, and output quality.',
  },
  {
    q: 'How can I optimize token usage in Figma Make?',
    a: 'Refer to this guide regularly. The team will continue adding best practices, optimization strategies, and workflow examples to help users work more efficiently with Figma Make.',
  },
  {
    q: 'Whom should I contact if I face issues with the Figma Make kit?',
    a: (
      <>
        Please reach out to the UX team:
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            Diwakar —{' '}
            <a className="underline underline-offset-2" href="mailto:diwakar.rajan@o9solutions.com">
              diwakar.rajan@o9solutions.com
            </a>
          </li>
          <li>
            Atul —{' '}
            <a className="underline underline-offset-2" href="mailto:atul.meshram@o9solutions.com">
              atul.meshram@o9solutions.com
            </a>
          </li>
          <li>
            Akash —{' '}
            <a className="underline underline-offset-2" href="mailto:akash.upadhyay@o9solutions.com">
              akash.upadhyay@o9solutions.com
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    q: 'Need help while building?',
    a: (
      <>
        Use the{' '}
        <Link
          to="/gettingstarted/figma-make/prompts-library"
          className="font-semibold text-arvo-light-primary underline underline-offset-2 dark:text-white"
        >
          Prompts Library
        </Link>{' '}
        tab for workflow examples and ideas. The library is still evolving and will continue improving with more optimized
        enterprise workflow examples over time.
      </>
    ),
  },
  {
    q: 'Is Figma Make generated code production-ready?',
    a: 'No. Generated experiences are not guaranteed to be production-ready and must still go through UX, accessibility, engineering, and design-system validation before implementation. If something does not work correctly, it should be reviewed and refined by the UX team.',
  },
]

export default function OverviewTab() {
  return (
    <div className="space-y-12">
      <DocSection id="figma-platform" title="Figma as a collaborative design platform">
        <DocParagraph>
          <ExternalDocLink href="https://www.figma.com/">Figma</ExternalDocLink> is a collaborative UI/UX design platform used by UX
          and design teams to create applications, websites, workflows, and design systems.
        </DocParagraph>
        <ExpandableDocImage
          src="/figmamakeGraphic/make01.webp"
          alt="Figma as a collaborative UI and UX design platform"
          className="border border-arvo-light-border dark:border-neutral-700"
        />
      </DocSection>

      <DocSection id="figma-evolution" title="Beyond the original design tool">
        <DocParagraph>
          Figma has evolved beyond its original design tool into a multi-product creative platform supporting workflows across
          design, prototyping, collaboration, and development.
        </DocParagraph>
        <ExpandableDocImage
          src="/figmamakeGraphic/make02.jpg"
          alt="Figma as a multi-product creative platform"
          className="border border-arvo-light-border dark:border-neutral-700"
        />
      </DocSection>

      <DocSection id="figma-make-vision" title="Figma Make and the Arvo design language">
        <DocParagraph>
          To accelerate this vision, we are introducing{' '}
          <ExternalDocLink href="https://www.figma.com/make/">
            <DocStrong>Figma Make</DocStrong>
          </ExternalDocLink>{' '}
          — a platform for teams across o9 business functions, not only UX designers and developers.
        </DocParagraph>
        <DocParagraph>
          Teams can prototype, explore, and iterate using natural language while staying aligned with the{' '}
          <DocStrong>Arvo</DocStrong> design language.
        </DocParagraph>
        <DocParagraph>
          Powered by the <ExternalDocLink href="https://o9ds.vercel.app/">o9 Arvo Design System</ExternalDocLink>, it helps teams
          rapidly bring ideas to life while maintaining o9 brand consistency, interaction patterns, and UX standards.
        </DocParagraph>
        <ExpandableDocImage
          src="/figmamakeGraphic/make00.png"
          alt="Figma Make powered by the o9 Arvo Design System"
          className="border border-arvo-light-border dark:border-neutral-700"
        />
      </DocSection>

      <DocSection id="figma-make-intro-interface" title="Intro Figma Make Interface">
        <DocParagraph className="max-w-3xl">
          Press play to watch an introduction to the Figma Make interface — video plays inline below without leaving this page.
        </DocParagraph>
        <div className="relative mt-4 w-full max-w-4xl overflow-hidden rounded-lg border border-arvo-light-border bg-neutral-950 aspect-video dark:border-neutral-700">
          <iframe
            className="absolute left-0 top-0 h-full w-full"
            src="https://www.youtube-nocookie.com/embed/1PFkmrb4Bqg"
            title="Intro — Figma Make interface walkthrough"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </DocSection>

      <DocSection id="figma-make-use-cases" title="Use Cases of Figma Make">
        <DocParagraph className="max-w-3xl text-base">
          Figma Make helps teams rapidly prototype, explore, and iterate on ideas using natural language while staying aligned
          with the <DocStrong>Arvo</DocStrong> design language.
        </DocParagraph>
        <GrayBgCard className="mt-4 space-y-0 shadow-none hover:translate-y-0 hover:shadow-none">
          <p className="text-xs font-semibold uppercase tracking-wider text-arvo-light-primary dark:text-white mb-4 m-0">
            Where teams get value
          </p>
          <ul className="m-0 grid list-none gap-3 p-0 sm:grid-cols-2" role="list">
            {USE_CASES.map((text, i) => (
              <li
                key={text}
                className="flex gap-4 border border-neutral-200 bg-white/95 px-4 py-3.5 dark:border-neutral-600 dark:bg-neutral-950/55"
              >
                <span
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-arvo-light-primary/35 text-xs font-semibold tabular-nums text-arvo-light-primary dark:border-white/45 dark:text-white"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm leading-relaxed text-arvo-light-secondary dark:text-neutral-300">{text}</span>
              </li>
            ))}
          </ul>
        </GrayBgCard>
      </DocSection>

      <DocSection id="enable-arvo-kit" title='Enable “Arvo” Design System Library in Figma Make'>
        <div className="space-y-8">
          <div>
            <p className="text-sm font-semibold text-arvo-light-primary dark:text-white m-0 mb-2">Step 1</p>
            <DocParagraph className="m-0 mb-3">Open Figma → Click Create → Make</DocParagraph>
            <div className="mx-auto w-full max-w-md">
              <ExpandableDocImage
                src="/figmamakeGraphic/make03.png"
                alt="Figma Create menu with Make selected"
                className="border border-arvo-light-border dark:border-neutral-700"
              />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-arvo-light-primary dark:text-white m-0 mb-2">Step 2</p>
            <DocParagraph className="m-0">
              Inside the Figma Make prompt area, click the <DocStrong>Design System Kit</DocStrong> chip or button.
            </DocParagraph>
          </div>
          <div>
            <p className="text-sm font-semibold text-arvo-light-primary dark:text-white m-0 mb-2">Step 3</p>
            <DocParagraph className="m-0 mb-3">
              Search and attach the required library:{' '}
              <span className="inline-flex items-center gap-1.5 rounded-none border border-amber-400/80 bg-amber-50 px-2 py-0.5 text-sm dark:border-amber-500/60 dark:bg-amber-950/40">
                <span aria-hidden>🟡</span>
                <DocStrong>WIP:</DocStrong> o9 Arvo Design System | Kit
              </span>
            </DocParagraph>
            <ExpandableDocImage
              src="/figmamakeGraphic/make04.png"
              alt="Model selection options in Figma Make"
              className="border border-arvo-light-border dark:border-neutral-700"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-arvo-light-primary dark:text-white m-0 mb-2">Step 4</p>
            <DocParagraph className="m-0">
              Once attached, the library will appear below the prompt input with active status.
            </DocParagraph>
          </div>
        </div>
      </DocSection>

      <DocSection id="model-selection" title="Model Selection in Figma Make">
        <DocParagraph>
          Choosing the right model in Figma Make helps generate better UI outputs, improves performance, reduces token usage,
          and speeds up enterprise workflow generation.
        </DocParagraph>
        <div className="mx-auto w-full max-w-md">
          <ExpandableDocImage
            src="/figmamakeGraphic/make05.png"
            alt="Design System Kit chip and o9 Arvo Design System kit attachment"
            className="border border-arvo-light-border dark:border-neutral-700"
          />
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6">
          {MODEL_SELECTION_MODELS.map((m) => (
            <WhiteBgCard key={m.title} title={m.title}>
              {m.avoidFor.length > 0 ? (
                <DoDontPair
                  stacked
                  doTitle="Use for"
                  dontTitle="Avoid for"
                  doItems={m.useFor}
                  dontItems={m.avoidFor}
                />
              ) : (
                <>
                  <p className="text-xs font-semibold uppercase tracking-wider text-arvo-light-primary dark:text-white mb-2">
                    Use for
                  </p>
                  <ul className="list-disc space-y-1.5 pl-5 text-sm text-arvo-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    {m.useFor.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </WhiteBgCard>
          ))}
        </div>
      </DocSection>

      <DocSection id="model-decision-tree" title="Model Selection: Quick Decision Tree">
        <DocParagraph>
          Pick the model that matches the complexity of your task. When in doubt, default to <DocStrong>Sonnet</DocStrong>.
        </DocParagraph>
        <SimpleTable headers={['Task', 'Model', 'Average tokens', 'Best for']} rows={MODEL_TREE} dense />
        <p className="text-xs text-arvo-light-secondary dark:text-neutral-500 m-0 mt-3">
          Use Sonnet for ~80% of work. Switch only when complexity or scope clearly demands it.
        </p>
      </DocSection>

      <DocSection id="clear-context" title="Useful Information: Clear Context for Better Performance">
        <DocParagraph className="m-0 mb-6">
          Figma Make remembers your previous prompts, attached files, guidelines, and references, so very long conversations
          can sometimes make outputs inconsistent or off-track. Clearing context resets the AI memory for the current generation
          while keeping your visible chat history intact, allowing you to still refer to previous prompts whenever needed.
        </DocParagraph>
        <ExpandableDocImage
          src="/figmamakeGraphic/make06.png"
          alt="Clear context control in Figma Make"
          className="border border-arvo-light-border dark:border-neutral-700"
        />
        <p className="mt-6 mb-2 text-sm font-semibold text-arvo-light-primary dark:text-white">Why clearing context helps</p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
          {CLEAR_CONTEXT_BENEFITS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <DocParagraph className="mt-4">
          This is especially useful when starting a completely new workflow or experimenting with different UX directions.
        </DocParagraph>
      </DocSection>

      <DocSection id="disclaimer" title="Disclaimer">
        <DocParagraph>
          Generated outputs from Figma Make are intended to accelerate ideation, workflows, and design exploration, but are not
          automatically production-ready.
        </DocParagraph>
        <DocParagraph>
          Even when using the Arvo Design System and o9 assets, outputs may still contain UX gaps, accessibility issues,
          inconsistent patterns, or workflow mismatches. All generated experiences should go through UX, engineering,
          accessibility, and design-system validation before implementation.
        </DocParagraph>
        <DocCallout tone="note">
          If any generated workflow or interaction does not align with o9 UX or Design System standards, the UX team will
          review and refine it before development adoption.
        </DocCallout>
      </DocSection>

      <DocSection id="faq" title="FAQ">
        <div className="space-y-5">
          {FAQ_ITEMS.map((f) => (
            <div key={f.q} className="border-l-4 border-l-arvo-light-primary dark:border-l-white pl-4">
              <p className="text-sm font-semibold text-arvo-light-primary dark:text-white m-0 mb-1">{f.q}</p>
              <div className="text-sm text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">{f.a}</div>
            </div>
          ))}
        </div>
      </DocSection>
    </div>
  )
}
