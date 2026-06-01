import DocTable from '../../LayoutComponents/DocTable'
import GrayBgCard from '../../LayoutComponents/GrayBgCard'
import WhiteBgCard from '../../LayoutComponents/WhiteBgCard'
import ContentDocPage from './ContentDocPage'
import { WriteAvoidBlock } from './contentDocBlocks'

const toc = [
  { id: 'content-voice-overview', label: 'Overview' },
  { id: 'content-voice-vs-tone', label: 'Voice vs. tone' },
  { id: 'content-brand-voice', label: 'Brand voice' },
  { id: 'content-voice-attributes', label: 'Voice attributes' },
  { id: 'content-how-we-speak', label: 'How we speak' },
  { id: 'content-tone-context', label: 'Tone by context' },
  { id: 'content-words-avoid', label: 'Words to avoid' },
  { id: 'content-voice-examples', label: 'Voice examples' },
  { id: 'content-voice-checklist', label: 'Voice checklist' },
]

const GOOD_WRITING_HELPS = [
  'understand what is happening',
  'see business impact',
  'compare decisions',
  'act quickly',
  'recover from issues',
  'trust the system',
]

const VOICE_SHOULD = [
  'clear',
  'concise',
  'logical',
  'confident',
  'action-oriented',
  'enterprise-aware',
  'decision-focused',
  'helpful',
  'knowledgeable',
]

const VOICE_SHOULD_NOT = [
  'robotic',
  'casual',
  'salesy',
  'vague',
  'overly technical',
  'overly clever',
  'overly emotional',
  'exaggerated',
]

const TONE_ADAPTS = [
  'user intent',
  'workflow context',
  'risk level',
  'business impact',
  'system state',
  'user expertise',
]

const TONE_MATRIX_COLUMNS = [
  { key: 'context', label: 'Context', primary: true },
  { key: 'tone', label: 'Tone' },
]

const TONE_MATRIX_ROWS = [
  { context: 'Success', tone: 'Brief and confirming' },
  { context: 'Error', tone: 'Helpful and recovery-focused' },
  { context: 'Warning', tone: 'Calm and direct' },
  { context: 'Critical action', tone: 'Explicit and consequence-led' },
  { context: 'Planning workflow', tone: 'Clear and action-oriented' },
  { context: 'Exception management', tone: 'Urgent but calm' },
  { context: 'Executive dashboard', tone: 'Concise and business-focused' },
  { context: 'AI recommendation', tone: 'Advisory and explainable' },
  { context: 'Empty state', tone: 'Helpful and instructional' },
  { context: 'Loading', tone: 'Transparent and specific' },
]

const VOICE_ATTRIBUTES = [
  {
    id: 'attr-professional',
    title: 'Professional',
    intro: 'Use language appropriate for enterprise planning and decision-making.',
    write: ['Review affected orders', 'Approve forecast override', 'Compare scenario impact'],
    avoid: ['Check this out', 'Looks like things got messy', 'Something weird happened'],
  },
  {
    id: 'attr-personable',
    title: 'Personable',
    intro: 'Sound human without sounding casual.',
    write: [
      "You don't have access to this workspace.",
      'Add at least one member to continue.',
      'Try adjusting filters.',
    ],
    avoid: [
      'User authorization insufficient.',
      'Member selection required for workflow continuation.',
      'No matching entities identified.',
    ],
  },
  {
    id: 'attr-business',
    title: 'Business-focused',
    intro: 'Connect messages to business value when useful.',
    write: [
      'Revenue risk increased by 8%.',
      'Supplier delay affects 12 production orders.',
      'Inventory shortage may impact service levels.',
    ],
    avoid: ['Risk increased.', 'Delay detected.', 'Issue found.'],
  },
  {
    id: 'attr-concise',
    title: 'Concise',
    intro: 'Keep content short. Use only the words needed to support action.',
    write: ['Forecast published', 'Scenario saved', 'Supplier commitment updated'],
    avoid: [
      'The forecast has been successfully published.',
      'Your scenario has been saved successfully.',
      'The supplier commitment information has been updated.',
    ],
  },
  {
    id: 'attr-logical',
    title: 'Logical',
    intro: 'Write in a sequence that matches user decision-making.',
    prefer: ['What happened', 'Business impact', 'Next action'],
    write: [
      'Supplier delay detected.',
      '12 production orders may be affected.',
      'Review resolution options.',
    ],
    avoid: [
      'Review resolution options because 12 production orders may be affected due to a supplier delay.',
    ],
  },
  {
    id: 'attr-confident',
    title: 'Confident',
    intro: 'Use clear and direct wording. Avoid weak language.',
    write: [
      'Refresh the page and try again.',
      'Select a scenario to compare impact.',
      'Add a supplier response to continue.',
    ],
    avoid: [
      'You may want to refresh the page.',
      'You could try selecting a scenario.',
      'It might help to add a supplier response.',
    ],
  },
  {
    id: 'attr-action',
    title: 'Action-oriented',
    intro: 'Help users move forward. Use strong verbs.',
    write: [
      'Review exceptions',
      'Compare scenarios',
      'Publish forecast',
      'Resolve constraint',
      'Rebalance inventory',
    ],
    avoid: ['Continue', 'Proceed', 'Manage', 'Take action'],
    footnote: 'Avoid generic verbs unless context is already clear.',
  },
]

const HOW_WE_SPEAK = [
  {
    id: 'speak-clear',
    title: 'Be clear',
    intro: 'Users should understand content immediately.',
    write: ['No forecast data available.', 'Select a planning horizon.', 'Review affected SKUs.'],
    avoid: ['Data unavailable.', 'Choose configuration.', 'Review affected entities.'],
  },
  {
    id: 'speak-jargon',
    title: 'Avoid jargon',
    intro: 'Avoid corporate buzzwords and unnecessary technical language. Use planning terms when users understand them.',
    write: ['Work together', 'Major change', 'Discuss later', 'Reliable', 'Improved'],
    avoid: [
      'Synergy',
      'Paradigm shift',
      'Circle back',
      'Touch base',
      'Seamless',
      'Best-in-class',
      'Revolutionary',
    ],
  },
  {
    id: 'speak-impact',
    title: 'Show business impact',
    intro: 'When possible, explain why something matters.',
    write: [
      'Capacity shortage affects 8 production lines.',
      'Supplier delay may increase revenue risk.',
      'Price change affects margin forecast.',
    ],
    avoid: ['Capacity issue found.', 'Supplier delay detected.', 'Price changed.'],
  },
  {
    id: 'speak-guide',
    title: 'Guide without pushing',
    intro: 'Tell users what they can do next. Do not pressure users.',
    write: [
      'Add a scenario to compare impact.',
      'Review supplier responses before publishing.',
      'You can update this later.',
    ],
    avoid: ['You must add a scenario.', 'You need to review supplier responses.', 'Complete this now.'],
  },
  {
    id: 'speak-ai',
    title: 'Keep AI advisory',
    intro: 'AI should support decisions, not make them. Use advisory language.',
    write: [
      'Based on recent demand signals, consider increasing safety stock.',
      'AI found three possible causes for the forecast variance.',
      'Review recommended actions before applying changes.',
    ],
    avoid: ['Increase safety stock.', 'This is the best action.', 'AI has resolved the issue.'],
  },
  {
    id: 'speak-simplify-1',
    title: 'Simplify complexity',
    intro: 'Complex planning logic should be explained in plain language.',
    write: ['This change affects connected supply plans.'],
    avoid: ['This update triggers cross-functional propagation across dependent planning models.'],
  },
  {
    id: 'speak-simplify-2',
    title: 'Simplify complexity (scenarios)',
    intro: 'Translate multidimensional planning into understandable outcomes.',
    write: ['The scenario compares cost, service, and inventory impact.'],
    avoid: ['The scenario evaluates multidimensional planning trade-offs across the operating model.'],
  },
]

const GOOD_DOMAIN_TERMS = [
  'forecast',
  'scenario',
  'constraint',
  'supplier',
  'inventory',
  'service level',
  'revenue risk',
  'demand signal',
  'production order',
  'planning horizon',
  'exception',
  'SKU',
  'OTIF',
  'capacity',
  'allocation',
]

const AVOID_UNCLEAR_TERMS = [
  'entity',
  'object',
  'node',
  'propagation',
  'orchestration layer',
  'model execution',
  'downstream dependency',
]

const CONTEXT_GUIDANCE = [
  {
    id: 'ctx-success',
    title: 'Success',
    intro: 'Confirm completion and move on.',
    write: ['Forecast published', 'Scenario saved', 'Supplier response submitted', 'Inventory plan updated'],
    avoid: ['Great job! Your forecast has been successfully published.'],
  },
  {
    id: 'ctx-error',
    title: 'Error',
    intro: 'Explain what happened and how to recover.',
    write: [
      "Couldn't load forecast data.",
      'Refresh the page or try again.',
      "Couldn't publish scenario.",
      'Resolve validation errors and try again.',
    ],
    avoid: ['Unexpected error occurred.', 'System failure.'],
  },
  {
    id: 'ctx-warning',
    title: 'Warning',
    intro: 'Communicate risk clearly. Avoid dramatic language.',
    write: [
      'Unsaved changes will be lost.',
      'Publishing affects all selected planners.',
      'Supplier commitment is below requested capacity.',
    ],
    avoid: ['Warning! This action may cause serious problems.'],
  },
  {
    id: 'ctx-critical',
    title: 'Critical actions',
    intro: 'Be explicit. Always explain the consequence.',
    write: ['Delete scenario?', 'This action cannot be undone.', 'Remove supplier response?', 'This removes the response from the current planning cycle.'],
    avoid: ['Are you sure?'],
  },
  {
    id: 'ctx-planning',
    title: 'Planning workflows',
    intro: 'Use action-oriented language. Focus on the user’s planning task.',
    write: [
      'Select a planning horizon.',
      'Compare scenario impact.',
      'Review forecast variance.',
      'Approve planner override.',
      'Publish supply plan.',
    ],
    avoid: ['Configure parameters.', 'Proceed with workflow.', 'Execute planning operation.'],
  },
  {
    id: 'ctx-exceptions',
    title: 'Exceptions and disruptions',
    intro: 'Use calm urgency. Show what changed, what is affected, and what to do next.',
    write: [
      'Supplier delay detected.',
      '12 production orders may be affected.',
      'Review resolution options.',
      'Demand spike detected.',
      'Inventory may fall below safety stock.',
      'Review replenishment options.',
    ],
    avoid: ['Critical disruption detected across supply chain network.', 'Immediate action required.'],
  },
  {
    id: 'ctx-alerts',
    title: 'Alerts and risks',
    intro: 'Make alerts specific. Include business impact when available.',
    write: [
      'Revenue risk increased by 8%.',
      'Three shipments may miss delivery windows.',
      'Capacity shortage affects Northeast demand.',
    ],
    avoid: ['High risk detected.', 'Alert triggered.', 'Issue found.'],
  },
  {
    id: 'ctx-executive',
    title: 'Executive experiences',
    intro: 'Use concise, business-focused language. Executives need signal, impact, and direction.',
    write: ['Service level declined by 3%.', 'Review regions below target.', 'Inventory value increased by $2.4M.', 'Compare drivers by category.'],
    avoid: ['There are multiple areas where the service level appears to be below the expected threshold.'],
  },
  {
    id: 'ctx-ai',
    title: 'AI recommendations',
    intro: 'AI content should be transparent and explainable. Use recommendation, reason, confidence or source when available, and a clear user action.',
    write: [
      'Recommended action: Rebalance inventory from Dallas to Atlanta.',
      'Reason: Atlanta demand is trending 14% above forecast.',
    ],
    avoid: ['AI recommends this action because it is optimal.'],
  },
  {
    id: 'ctx-empty',
    title: 'Empty states',
    intro: 'Explain what is missing and what to do next.',
    write: ['No scenarios yet.', 'Create a scenario to compare planning options.', 'No supplier responses.', 'Invite suppliers or upload responses to continue.'],
    avoid: ['Nothing here.', 'No data.'],
  },
  {
    id: 'ctx-loading',
    title: 'Loading and background processes',
    intro: 'Tell users what is happening. Use specific loading messages for long-running actions.',
    write: [
      'Loading forecast data…',
      'Generating scenario comparison…',
      'Syncing supplier responses…',
      'Publishing supply plan…',
    ],
    avoid: ['Loading… (when the process may take time)'],
  },
]

const WORD_ALTERNATIVES_COLUMNS = [
  { key: 'instead', label: 'Instead of', primary: true },
  { key: 'write', label: 'Write' },
]

const WORD_ALTERNATIVES_ROWS = [
  { instead: 'Leverage insights', write: 'Use insights' },
  { instead: 'Unlock value', write: 'Identify value' },
  { instead: 'Transform planning', write: 'Improve planning' },
]

const BUZZWORDS = [
  'synergy',
  'paradigm shift',
  'circle back',
  'touch base',
  'seamless',
  'revolutionary',
  'game-changing',
  'best-in-class',
  'cutting-edge',
  'unprecedented',
  'resiliency',
  'leverage',
  'empower',
  'unlock',
  'transform',
]

const VOICE_EXAMPLES = [
  {
    id: 'ex-forecasting',
    title: 'Forecasting',
    write: ['Forecast variance increased by 6%.', 'Review demand drivers.'],
    avoid: ['Forecast performance shifted significantly.'],
  },
  {
    id: 'ex-inventory',
    title: 'Inventory',
    write: ['Inventory is below safety stock.', 'Review replenishment options.'],
    avoid: ['Inventory exception triggered.'],
  },
  {
    id: 'ex-supplier',
    title: 'Supplier collaboration',
    write: ['Supplier commitment updated.', 'Capacity is below requested volume.'],
    avoid: ['Supplier data has been modified.'],
  },
  {
    id: 'ex-scenario',
    title: 'Scenario planning',
    write: ['Compare cost, service, and inventory impact.'],
    avoid: ['Run multidimensional trade-off analysis.'],
  },
  {
    id: 'ex-rgm',
    title: 'Revenue growth management',
    write: ['Promotion impact reduced margin by 4%.', 'Review price and volume drivers.'],
    avoid: ['Commercial plan performance changed.'],
  },
  {
    id: 'ex-control-tower',
    title: 'Control tower',
    write: ['Shipment delay may affect 23 customer orders.', 'Review mitigation options.'],
    avoid: ['Logistics disruption detected.'],
  },
  {
    id: 'ex-access',
    title: 'Access and permissions',
    write: ["You don't have access to this workspace.", 'Request access from the workspace owner.'],
    avoid: ['Authorization failed.'],
  },
]

const VOICE_CHECKLIST = [
  'Is it clear?',
  'Is it concise?',
  'Does it help users act?',
  'Does it show business impact when useful?',
  'Does it use o9 domain language correctly?',
  'Does it avoid jargon?',
  'Does it avoid sales language?',
  'Does it sound professional?',
  'Does it support decision-making?',
  'Does AI wording keep users in control?',
]

export default function VoiceAndTone() {
  return (
    <ContentDocPage
      title="Brand voice & tone"
      description="Voice, tone, and planning-focused copy guidance for o9 product experiences documented in Arvo."
      tocSections={toc}
    >
      <section id="content-voice-overview" className="space-y-6 scroll-mt-24">
        <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
          o9 product writing should help planners, analysts, executives, and business teams understand risk, compare options, and take action with confidence.
        </p>
        <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
          The product operates in complex enterprise environments where decisions affect supply, demand, revenue, inventory, service levels, cost, and execution. Content must be clear, concise, business-focused, and trusted.
        </p>
        <div>
          <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed mb-3">
            Good product writing helps users:
          </p>
          <ul className="list-disc list-inside space-y-2 text-arvo-light-secondary dark:text-neutral-400">
            {GOOD_WRITING_HELPS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
          The product should sound like an experienced enterprise planning partner. It should be professional, knowledgeable, concise, and useful.
        </p>
      </section>

      <section id="content-voice-vs-tone" className="space-y-6 scroll-mt-24">
        <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Voice vs. tone</h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <WhiteBgCard title="Voice" desc="Voice is the product’s consistent personality. It stays the same across o9 experiences, components, and workflows.">
            <p className="text-xs font-semibold uppercase tracking-wider text-arvo-light-secondary dark:text-neutral-500 mb-1 mt-4">
              Voice answers
            </p>
            <p className="text-sm font-medium text-arvo-light-primary dark:text-white m-0">Who are we?</p>
          </WhiteBgCard>
          <GrayBgCard title="Tone" desc="Tone changes based on the situation.">
            <p className="text-xs font-semibold uppercase tracking-wider text-arvo-light-secondary dark:text-neutral-500 mb-2 mt-4">
              It adapts to
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-arvo-light-secondary dark:text-neutral-400 m-0 mb-4">
              {TONE_ADAPTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-xs font-semibold uppercase tracking-wider text-arvo-light-secondary dark:text-neutral-500 mb-1">
              Tone answers
            </p>
            <p className="text-sm font-medium text-arvo-light-primary dark:text-white m-0">How should we communicate in this moment?</p>
          </GrayBgCard>
        </div>
      </section>

      <section id="content-brand-voice" className="space-y-6 scroll-mt-24">
        <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Brand voice</h2>
        <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
          o9’s voice is professional, personable, business-focused, and trusted.
        </p>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-arvo-light-primary dark:text-white">The product should sound</h3>
          <div className="flex flex-wrap gap-2">
            {VOICE_SHOULD.map((trait) => (
              <span
                key={trait}
                className="inline-flex items-center rounded-full border border-arvo-light-border dark:border-neutral-600 px-3 py-1.5 text-sm text-arvo-light-primary dark:text-neutral-200 bg-arvo-light-surface dark:bg-neutral-900/50"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-arvo-light-primary dark:text-white">The product should not sound</h3>
          <div className="flex flex-wrap gap-2">
            {VOICE_SHOULD_NOT.map((trait) => (
              <span
                key={trait}
                className="inline-flex items-center rounded border border-arvo-light-border dark:border-neutral-600 px-3 py-1.5 text-sm text-arvo-light-secondary dark:text-neutral-400 line-through decoration-arvo-light-secondary/60 dark:decoration-neutral-500"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="content-voice-attributes" className="space-y-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Voice attributes</h2>
        <div className="space-y-10">
          {VOICE_ATTRIBUTES.map((block) => (
            <WriteAvoidBlock key={block.id} {...block} />
          ))}
        </div>
      </section>

      <section id="content-how-we-speak" className="space-y-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">How we speak</h2>

        <div className="space-y-10">
          {HOW_WE_SPEAK.map((block) => (
            <WriteAvoidBlock key={block.id} {...block} />
          ))}
        </div>

        <article className="space-y-4 border-t border-arvo-light-border dark:border-neutral-700 pt-10">
          <h3 className="text-lg font-semibold text-arvo-light-primary dark:text-white">Use domain language carefully</h3>
          <p className="text-sm text-arvo-light-secondary dark:text-neutral-400 leading-relaxed m-0">
            o9 users understand supply chain and planning terms. Use domain language when it improves precision.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <WhiteBgCard title="Good domain terms" bullets={GOOD_DOMAIN_TERMS} />
            <GrayBgCard title="Avoid when unclear" bullets={AVOID_UNCLEAR_TERMS} />
          </div>
          <WriteAvoidBlock
            title="Example"
            write={['Changes apply to connected forecasts.']}
            avoid={['Configuration propagates across downstream entities.']}
          />
        </article>
      </section>

      <section id="content-tone-context" className="space-y-8 scroll-mt-24">
        <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Tone by context</h2>
        <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
          Use tone based on user situation and business risk.
        </p>
        <DocTable columns={TONE_MATRIX_COLUMNS} rows={TONE_MATRIX_ROWS} highlightFirstColumnIdentifier />

        <div className="space-y-10 pt-4">
          {CONTEXT_GUIDANCE.map((block) => (
            <WriteAvoidBlock key={block.id} {...block} />
          ))}
        </div>
      </section>

      <section id="content-words-avoid" className="space-y-6 scroll-mt-24">
        <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Words to avoid</h2>
        <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
          Avoid vague, salesy, or overused language in product UI.
        </p>
        <div className="flex flex-wrap gap-2">
          {BUZZWORDS.map((word) => (
            <span
              key={word}
              className="inline-flex items-center rounded border border-arvo-light-border dark:border-neutral-600 px-2.5 py-1 text-xs text-arvo-light-secondary dark:text-neutral-400 line-through decoration-arvo-light-secondary/60 dark:decoration-neutral-500"
            >
              {word}
            </span>
          ))}
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-arvo-light-primary dark:text-white">Use simpler alternatives</h3>
          <DocTable columns={WORD_ALTERNATIVES_COLUMNS} rows={WORD_ALTERNATIVES_ROWS} highlightFirstColumnIdentifier />
        </div>
      </section>

      <section id="content-voice-examples" className="space-y-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Voice examples</h2>
        <div className="space-y-10">
          {VOICE_EXAMPLES.map((block) => (
            <WriteAvoidBlock key={block.id} {...block} />
          ))}
        </div>
      </section>

      <section id="content-voice-checklist" className="space-y-6 scroll-mt-24">
        <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Voice checklist</h2>
        <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
          Before shipping product content, ask:
        </p>
        <WhiteBgCard title="Before you ship">
          <ul className="space-y-2.5 m-0 p-0 list-none">
            {VOICE_CHECKLIST.map((question) => (
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
