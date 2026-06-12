import ExpandableDocImage from '../LayoutComponents/ExpandableDocImage'
import DocSection, { DocCallout, DocList, DocParagraph, DocStrong } from '../LayoutComponents/DocSection'
import PageHeader from '../LayoutComponents/PageHeader'
import PageWithToc from '../LayoutComponents/PageWithToc'
const NOVA_AI_CHAT_URL = 'https://mygenaidev.o9solutions.com/kibo2#/o9AI/o9AI/Chat'

const IMG_LANDING = '/GetStarted/arvo-nova-ai-agent-landing.png'
const IMG_OVERVIEW_CHAT = '/GetStarted/arvo-nova-ai-agent-overview-chat.png'
const IMG_REACT_BUTTON = '/GetStarted/arvo-nova-ai-agent-react-button.png'
const IMG_FILTER_BAR = '/GetStarted/arvo-nova-ai-agent-filter-bar-example.png'

const TOC_SECTIONS = [
  { id: 'nova-ai-intro', label: 'Introduction' },
  { id: 'nova-ai-capabilities', label: 'What it can help with' },
  { id: 'nova-ai-open-agent', label: 'Open the agent' },
  { id: 'nova-ai-screenshots', label: 'In the o9 AI chat' },
]

const novaAiIcon = (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
)

/** Get Started — Arvo Nova AI Agent in o9 AI / Chat. */
export default function ArvoNovaAiAgent() {
  return (
    <PageWithToc sections={TOC_SECTIONS}>
      <div className="space-y-12">
        <PageHeader
          title="Arvo — Nova AI Agent"
          icon={novaAiIcon}
          description="Helps developers and o9ers use Arvo confidently across React, vanilla JS, and jQuery. Answers component questions, explains tokens and providers, and produces copy-paste code for your stack."
        />

        <DocSection id="nova-ai-intro" title="Introduction">
          <DocParagraph>
            Arvo is here to help you work with the Arvo design system. Arvo can answer questions about components,
            tokens, providers, and produce copy-paste code for your stack.
          </DocParagraph>
        </DocSection>

        <DocSection id="nova-ai-capabilities" title="What it can help with">
          <DocList
            items={[
              <>
                <DocStrong>Component discovery</DocStrong> — &ldquo;What component should I use for X?&rdquo;
              </>,
              <>
                <DocStrong>Code generation</DocStrong> — jQuery (default), React, or vanilla JS snippets
              </>,
              <>
                <DocStrong>Token &amp; styling</DocStrong> — CSS custom property overrides, SCSS tokens
              </>,
              <>
                <DocStrong>Accessibility</DocStrong> — WCAG 2.2 AA duties the consumer must handle
              </>,
              <>
                <DocStrong>Multi-component planning</DocStrong> — filter bars, forms, dashboards, overlays
              </>,
            ]}
          />
          <DocParagraph>Just ask a component question and let Arvo, your o9ds agent, get to work.</DocParagraph>
        </DocSection>

        <DocSection id="nova-ai-open-agent" title="Open the agent">
          <DocParagraph>
            Please utilize the Nova AI Arvo Agent to route any questions for understanding Arvo components,
            readiness, public contract, and generating ready-to-use component code.
          </DocParagraph>
          <a
            href={NOVA_AI_CHAT_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-arvo-theme-cta=""
            className="inline-flex items-center gap-2.5 border border-solid px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--arvo-color-b-theme-focus)] dark:focus-visible:ring-offset-neutral-900"
          >
            <svg
              className="h-4 w-4 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Open Arvo — o9 Nova Agent
            <svg
              className="h-4 w-4 shrink-0 opacity-80"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          <DocCallout tone="note" title="Notes">
            You must have access to o9solutions tenants in this environment. Request access if needed from your team
            members.
          </DocCallout>
        </DocSection>

        <DocSection id="nova-ai-screenshots" title="In the o9 AI chat">
          <DocParagraph>
            Select <DocStrong>Arvo Agent</DocStrong> in o9 AI / Chat to ask about components, readiness, public
            contracts, and ready-to-use code.
          </DocParagraph>

          <div className="space-y-10">
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white m-0">
                Agent landing and suggestions
              </h3>
              <ExpandableDocImage
                src={IMG_LANDING}
                alt="Arvo Agent in o9 AI Chat — landing screen with suggested prompts for buttons, forms, and filter layouts"
                width={1024}
                height={687}
                className="border border-arvo-light-border dark:border-neutral-700 rounded-lg w-full"
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white m-0">
                Design system overview
              </h3>
              <ExpandableDocImage
                src={IMG_OVERVIEW_CHAT}
                alt="Arvo Agent answering What is Arvo — packages, component categories, and design principles"
                width={1024}
                height={718}
                className="border border-arvo-light-border dark:border-neutral-700 rounded-lg w-full"
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white m-0">
                React code generation
              </h3>
              <ExpandableDocImage
                src={IMG_REACT_BUTTON}
                alt="Arvo Agent answering how to add a primary ArvoButton with a leading icon using @arvo/react, with TSX snippet and follow-up suggestions"
                width={1024}
                height={691}
                className="border border-arvo-light-border dark:border-neutral-700 rounded-lg w-full"
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white m-0">
                Component mapping and code generation
              </h3>
              <ExpandableDocImage
                src={IMG_FILTER_BAR}
                alt="Arvo Agent recommending ArvoSelect, ArvoCombobox, ArvoDateRangePicker, and ArvoButton for a filter bar with jQuery example code"
                width={1024}
                height={711}
                className="border border-arvo-light-border dark:border-neutral-700 rounded-lg w-full"
              />
            </div>
          </div>
        </DocSection>
      </div>
    </PageWithToc>
  )
}
