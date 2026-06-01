import DosDontCards from '../../LayoutComponents/DosDontCards'
import GrayBgCard from '../../LayoutComponents/GrayBgCard'
import WhiteBgCard from '../../LayoutComponents/WhiteBgCard'
import ContentDocPage from './ContentDocPage'
import { WriteAvoidBlock } from './contentDocBlocks'

const toc = [
  { id: 'content-wp-overview', label: 'Overview' },
  { id: 'content-wp-principles', label: 'Writing principles' },
  { id: 'content-wp-checklist', label: 'Writing checklist' },
]

const HELPS_TEAMS = [
  'clear',
  'concise',
  'actionable',
  'easy to scan',
  'consistent',
  'business-focused',
]

const APPLIES_TO = [
  'planning workflows',
  'forecasting',
  'scenario analysis',
  'supplier collaboration',
  'inventory management',
  'revenue planning',
  'control tower experiences',
  'alerts and exceptions',
  'AI recommendations',
]

/** @type {Array<{ id: string, title: string, intro?: string, prefer?: string[], write: string[], avoid: string[], why?: string, footnote?: string, doTitle?: string, dontTitle?: string }>} */
const PRINCIPLES = [
  {
    id: 'wp-1',
    title: '1. Prioritize clarity over cleverness',
    intro:
      'Users should understand meaning immediately. Product interfaces are decision-making tools, not marketing experiences. Avoid witty, clever, or overly creative language.',
    write: ['Review forecast variance', 'Compare scenarios', 'Inventory below safety stock', 'No supplier response available'],
    avoid: ["Let's fix this", 'See what happens', 'Oops. Something went wrong.', 'Looks like we hit a roadblock'],
    why: 'Users should never pause to interpret meaning.',
  },
  {
    id: 'wp-2',
    title: '2. Be concise',
    intro: 'Keep content short. Remove unnecessary words. Enterprise workflows already contain dense information.',
    write: ['Forecast published', 'Scenario saved', 'Supplier response updated', 'Review affected SKUs'],
    avoid: [
      'The forecast has been successfully published.',
      'The selected supplier response has now been updated.',
      'Please review the affected SKUs for more information.',
    ],
    why: 'Shorter content improves scanability and reduces effort.',
  },
  {
    id: 'wp-3',
    title: '3. Write for action',
    intro: 'Help users understand what they can do next. Prefer strong, specific verbs.',
    write: [
      'Review exceptions',
      'Compare scenarios',
      'Resolve constraint',
      'Publish forecast',
      'Approve override',
      'Rebalance inventory',
    ],
    avoid: ['Continue', 'Proceed', 'Manage', 'Take action'],
    footnote: 'Avoid generic verbs unless context already makes meaning obvious.',
    why: 'Specific actions reduce decision effort.',
  },
  {
    id: 'wp-4',
    title: '4. Use familiar language',
    intro:
      'Write the way planners, analysts, and business users think. Avoid engineering terminology, internal platform wording, or technical system language.',
    write: ['Refresh forecast', 'Remove supplier', 'Demand increased', 'Supplier delay detected'],
    avoid: [
      'Reinitialize planning model',
      'Detach supplier entity',
      'Demand signal anomaly',
      'External dependency interruption',
    ],
    why: 'Users should understand content without technical knowledge.',
  },
  {
    id: 'wp-5',
    title: '5. Reduce cognitive load',
    intro: 'Keep writing lightweight. Avoid long instructions or dense explanations.',
    prefer: ['short sentences', 'scannable content', 'clear hierarchy', 'progressive disclosure', 'meaningful labels'],
    write: ['Compare scenarios before publishing.'],
    avoid: ['It is recommended that users compare scenarios before moving ahead with the publishing process.'],
    why: 'Less reading improves speed and confidence.',
  },
  {
    id: 'wp-6',
    title: '6. Write for scanning',
    intro: 'Enterprise users skim before they read. Optimize content for quick recognition.',
    prefer: ['short headings', 'clear actions', 'concise descriptions', 'predictable wording'],
    write: ['Review supply constraints'],
    avoid: ['Review all existing supply-related planning constraints.'],
    why: 'Users should understand content quickly.',
  },
  {
    id: 'wp-7',
    title: '7. Be consistent',
    intro: 'Use the same words for the same actions. Choose one term and reuse it.',
    doTitle: 'Correct',
    dontTitle: 'Avoid',
    write: ['Forecast', 'Scenario', 'Supplier response', 'Filter set', 'Override'],
    avoid: ['Projection', 'Simulation', 'Vendor response', 'Template', 'Manual adjustment'],
    footnote: 'Use different terms only when the meaning is intentionally different.',
    why: 'Consistency reduces learning effort.',
  },
  {
    id: 'wp-8',
    title: '8. Show business impact',
    intro: 'Whenever possible, explain why something matters. Connect system activity to business outcomes.',
    write: [
      'Supplier delay affects 12 production orders.',
      'Revenue risk increased by 6%.',
      'Inventory shortage may affect service levels.',
    ],
    avoid: ['Supplier issue found.', 'Risk detected.', 'Inventory changed.'],
    why: 'Business context improves decision-making.',
  },
  {
    id: 'wp-9',
    title: '9. Prefer active voice',
    intro: 'Use active voice whenever possible. Active voice feels clearer and more direct.',
    write: ['Demand increased in the Northeast region.', 'Supplier updated capacity.', 'Changes affect selected planners.'],
    avoid: ['Capacity was updated by the supplier.', 'Selected planners are affected.', 'Demand increase has been identified.'],
    why: 'Active voice improves readability.',
  },
  {
    id: 'wp-10',
    title: '10. Focus on recovery',
    intro: 'When something goes wrong, help users recover quickly. Good recovery messaging explains what happened and what users should do next.',
    write: [
      "Couldn't publish forecast.",
      'Resolve validation errors and try again.',
      "Couldn't sync supplier responses.",
      'Refresh the page or try again.',
    ],
    avoid: ['Unexpected system error.', 'Request failed.', 'Error code: 502.'],
    why: 'Recovery matters more than technical detail.',
  },
  {
    id: 'wp-11',
    title: '11. Be helpful, not blaming',
    intro: 'Never make users feel responsible for errors. Avoid accusatory language.',
    write: ['Select at least one planner.', 'Enter a valid supplier ID.', 'Review missing required fields.'],
    avoid: ['You entered an invalid supplier ID.', 'You missed required fields.', 'Incorrect input detected.'],
    why: 'Helpful language reduces frustration.',
  },
  {
    id: 'wp-12',
    title: '12. Explain only what is necessary',
    intro: 'Show only what users need to move forward. Avoid over-explaining. Prefer contextual guidance.',
    write: ['Planning horizon', 'Select a date range.'],
    avoid: [
      'This setting helps determine the time period across which planning activities are calculated and analyzed.',
    ],
    why: 'Too much explanation increases cognitive load.',
  },
  {
    id: 'wp-13',
    title: '13. Use progressive disclosure',
    intro: 'Reveal complexity only when needed. Use detailed explanations progressively.',
    prefer: ['tooltips', 'advanced settings', 'AI explainability', 'scenario comparisons', 'exception details'],
    write: ['Demand spike detected.', 'View affected regions.'],
    avoid: ['Long explanations shown upfront.'],
    why: 'Users should not be overwhelmed.',
  },
  {
    id: 'wp-14',
    title: '14. Be transparent',
    intro:
      'Tell users what is happening. Especially important for publishing, syncing, AI processing, data refresh, and long-running planning actions.',
    write: [
      'Publishing forecast…',
      'Syncing supplier responses…',
      'Generating scenario comparison…',
      'Refreshing demand signals…',
    ],
    avoid: ['Loading… (for long-running processes)'],
    why: 'Visibility builds trust.',
  },
  {
    id: 'wp-15',
    title: '15. Set expectations',
    intro:
      'Help users understand consequences before actions happen. Especially important for publishing, overrides, deletions, supplier collaboration, and scenario updates.',
    write: [
      'Publishing affects selected planners.',
      'Deleting removes this scenario permanently.',
      'Supplier updates affect connected purchase orders.',
    ],
    avoid: ['Publish?', 'Delete scenario? (without impact)'],
    why: 'Users should understand impact before acting.',
  },
]

const WRITING_CHECKLIST = [
  'Is it clear?',
  'Is it concise?',
  'Does it help users act?',
  'Does it show business impact?',
  'Is terminology consistent?',
  'Does it use o9 domain language correctly?',
  'Does it avoid jargon?',
  'Is recovery guidance clear?',
  'Does AI wording keep users in control?',
  'Can users understand it quickly?',
]

export default function WritingPrinciples() {
  return (
    <ContentDocPage
      title="Writing principles"
      description="How to write clear, concise, and actionable product content across o9 planning experiences."
      tocSections={toc}
    >
      <section id="content-wp-overview" className="space-y-6 scroll-mt-24">
        <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
          Writing principles define how product content should be written across o9 experiences.
        </p>
        <div>
          <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed mb-3">
            These principles help teams create content that is:
          </p>
          <ul className="list-disc list-inside space-y-2 text-arvo-light-secondary dark:text-neutral-400">
            {HELPS_TEAMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <p className="text-arvo-light-primary dark:text-white leading-relaxed">
          <strong className="font-semibold">The goal is simple:</strong>
          <br />
          <span className="text-arvo-light-secondary dark:text-neutral-400">
            Help users understand impact, compare options, and take action with confidence.
          </span>
        </p>
        <div>
          <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed mb-3">
            These principles apply to all product experiences, including:
          </p>
          <div className="flex flex-wrap gap-2">
            {APPLIES_TO.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full border border-arvo-light-border dark:border-neutral-600 px-3 py-1.5 text-sm text-arvo-light-primary dark:text-neutral-200 bg-arvo-light-surface dark:bg-neutral-900/50"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="content-wp-principles" className="space-y-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Writing principles</h2>
        <div className="space-y-10">
          {PRINCIPLES.map((principle) => (
            <WriteAvoidBlock key={principle.id} {...principle} />
          ))}

          <article className="space-y-4 border-t border-arvo-light-border dark:border-neutral-700 pt-10">
            <h3 className="text-lg font-semibold text-arvo-light-primary dark:text-white">16. Keep AI advisory</h3>
            <p className="text-sm text-arvo-light-secondary dark:text-neutral-400 leading-relaxed m-0">
              AI should support decisions, not make them. Users stay in control.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <WhiteBgCard
                title="AI should"
                bullets={['recommend', 'explain', 'surface trade-offs', 'show reasoning']}
              />
              <GrayBgCard
                title="AI should not"
                bullets={['force decisions', 'overstate certainty', 'sound absolute']}
              />
            </div>
            <WriteAvoidBlock
              title="Example"
              write={['Recommended action: Increase safety stock.', 'Reason: Demand variability increased by 18%.']}
              avoid={['Increase safety stock immediately.', 'This is the best decision.', 'AI solved the issue.']}
              why="Planning decisions require human judgment."
            />
          </article>

          <WriteAvoidBlock
            title="17. Design for accessibility"
            intro="Writing should support all users. Content should use plain language, avoid unnecessary abbreviations, support screen readers, reduce ambiguity, and work globally."
            write={['Supplier response is required.']}
            avoid={['Supp. resp. req.']}
            why="Accessible writing improves usability for everyone."
          />

          <article className="space-y-4">
            <h3 className="text-lg font-semibold text-arvo-light-primary dark:text-white">18. Write for global enterprise audiences</h3>
            <p className="text-sm text-arvo-light-secondary dark:text-neutral-400 leading-relaxed m-0">
              o9 serves global organizations. Use globally understandable English. Avoid slang, idioms, humor-dependent language, and region-specific references.
            </p>
            <DosDontCards
              stacked
              doTitle="Write"
              dontTitle="Avoid"
              doItems={['Changes published', 'Forecast completed', 'Review recommendations']}
              dontItems={['Hit it out of the park', 'Piece of cake', "Let's get this rolling"]}
            />
            <p className="text-sm text-arvo-light-secondary dark:text-neutral-400 m-0">
              <strong className="text-arvo-light-primary dark:text-white font-medium">Why:</strong> Global products require global clarity.
            </p>
          </article>

          <WriteAvoidBlock
            title="19. Use data carefully"
            intro="Be precise with numbers and metrics. Enterprise users depend on accuracy."
            write={[
              'Forecast accuracy increased by 12%.',
              'Inventory value decreased by $2.4M.',
              'Capacity utilization reached 84%.',
            ]}
            avoid={['Forecast accuracy improved significantly.', 'Inventory improved.', 'Capacity increased.']}
            why="Precision improves trust."
          />
        </div>
      </section>

      <section id="content-wp-checklist" className="space-y-6 scroll-mt-24">
        <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Writing checklist</h2>
        <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">Before shipping content, ask:</p>
        <WhiteBgCard title="Before you ship">
          <ul className="space-y-2.5 m-0 p-0 list-none">
            {WRITING_CHECKLIST.map((question) => (
              <li key={question} className="flex gap-3 text-sm text-arvo-light-secondary dark:text-neutral-400">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-arvo-light-border dark:border-neutral-600 text-[10px] font-semibold text-arvo-light-primary dark:text-white"
                  aria-hidden
                >
                  ?
                </span>
                {question}
              </li>
            ))}
          </ul>
          <p className="text-sm font-medium text-arvo-light-primary dark:text-white mt-6 mb-0">
            If the answer is no, rewrite.
          </p>
        </WhiteBgCard>
      </section>
    </ContentDocPage>
  )
}
