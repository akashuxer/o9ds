/** Badge component documentation — props and overview table rows. */

export const BADGE_PROPS = [
  {
    prop: 'variant',
    type: 'standard | counter',
    default: 'standard',
    appliesTo: 'All',
    desc: 'Defines whether badge displays text label or numeric counter.',
  },
  {
    prop: 'size',
    type: 'sm | md | lg',
    default: 'md',
    appliesTo: 'All',
    desc: 'Controls badge size.',
  },
  {
    prop: 'appearance',
    type: 'primary | outline | filled',
    default: 'primary',
    appliesTo: 'All',
    desc: 'Defines visual treatment.',
  },
  {
    prop: 'colorMode',
    type: 'semantic | custom',
    default: 'semantic',
    appliesTo: 'All',
    desc: 'Defines color assignment behavior.',
  },
  {
    prop: 'semanticType',
    type: 'positive | info | neutral | warning | negative | block | none',
    default: 'neutral',
    appliesTo: 'colorMode=semantic',
    desc: 'Defines semantic meaning.',
  },
  {
    prop: 'customColor',
    type: 'purple | pink | glacier | amber | greenish | bluish',
    default: 'purple',
    appliesTo: 'colorMode=custom',
    desc: 'Used when colorMode=custom.',
  },
  {
    prop: 'message',
    type: 'string',
    default: 'Status Message',
    appliesTo: 'variant=standard',
    desc: 'Text shown in standard badge.',
  },
  {
    prop: 'counterMode',
    type: 'single | ratio',
    default: 'single',
    appliesTo: 'variant=counter',
    desc: 'Defines counter behavior — single value or current/total ratio.',
  },
  {
    prop: 'count',
    type: 'number',
    default: '0',
    appliesTo: 'variant=counter',
    desc: 'Primary numeric value. In ratio mode, this represents the current value.',
  },
  {
    prop: 'total',
    type: 'number',
    default: '—',
    appliesTo: 'counterMode=ratio',
    desc: 'Total numeric value for ratio counters.',
  },
  {
    prop: 'overflowCount',
    type: 'number',
    default: '99',
    appliesTo: 'variant=counter, counterMode=single',
    desc: 'Maximum visible count before overflow. Applies only to single counter mode. Values above this display as overflowCount+.',
  },
  {
    prop: 'isBadgeIcon',
    type: 'boolean',
    default: 'true',
    appliesTo: 'All',
    desc: 'Shows the leading semantic icon.',
  },
  {
    prop: 'isStatus',
    type: 'boolean',
    default: 'false',
    appliesTo: 'All',
    desc: 'Enables Arvo Status indicator inside the badge.',
  },
  {
    prop: 'tooltip',
    type: 'string',
    default: 'Auto generated',
    appliesTo: 'All',
    desc: 'Accessible label and native tooltip. Maps to both aria-label and title. Recommended for user names, status context, or interaction meaning.',
  },
]

export const BADGE_SIZES = [
  ['sm', 'Dense tables and compact layouts'],
  ['md', 'Standard UI patterns'],
  ['lg', 'High emphasis or prominent layouts'],
]

export const BADGE_LOCALE_FORMAT_ROWS = [
  { locale: 'US / UK', format: '1,234,567.89' },
  { locale: 'Germany', format: '1.234.567,89' },
  { locale: 'France', format: '1 234 567,89' },
  { locale: 'India', format: '12,34,567.89' },
]

export const BADGE_SIZE_TABLE_ROWS = BADGE_SIZES.map(([size, useCase]) => ({ size, useCase }))

export const BADGE_LOCALE_TABLE_ROWS = BADGE_LOCALE_FORMAT_ROWS

export const BADGE_SEMANTIC_TYPE_ROWS = [
  { semanticType: 'positive', useFor: 'Approved, Success, Completed, Connected, Resolved' },
  { semanticType: 'info', useFor: 'FYI, helpful context, additional information, guidance' },
  { semanticType: 'neutral', useFor: 'Draft, Pending, Paused, Unknown, Undefined' },
  { semanticType: 'warning', useFor: 'Needs attention, moderate risk, escalation, pending review' },
  { semanticType: 'negative', useFor: 'Failed, Rejected, Error, Cancelled, issue detected' },
  { semanticType: 'block', useFor: 'Blocked, Restricted, Disabled, Access denied' },
  { semanticType: 'none', useFor: 'No semantic color assignment' },
]

export const BADGE_CUSTOM_COLOR_ROWS = [
  { color: 'purple', useFor: 'Workflow categorization, tenant branding' },
  { color: 'pink', useFor: 'AI-assigned or system-assigned accents' },
  { color: 'glacier', useFor: 'Cool-toned categorization' },
  { color: 'amber', useFor: 'Warm-toned highlights' },
  { color: 'greenish', useFor: 'Positive-adjacent custom grouping' },
  { color: 'bluish', useFor: 'Info-adjacent custom grouping' },
]

export const BADGE_APPEARANCE_ROWS = [
  {
    appearance: 'primary',
    useWhen: 'Supporting information, low emphasis, dense enterprise layouts',
    bestFor: 'Metadata, supporting labels, secondary status',
  },
  {
    appearance: 'outline',
    useWhen: 'Multiple badges together, visual separation, secondary emphasis',
    bestFor: 'Filters, metadata, categorization',
  },
  {
    appearance: 'filled',
    useWhen: 'Meaning should stand out, attention or severity matters',
    bestFor: 'Critical, Blocked, high priority, warnings',
  },
]

export const BADGE_VARIANT_ROWS = [
  {
    variant: 'standard',
    purpose: 'Semantic text labels',
    bestFor: 'Status labels, metadata, workflow states, priorities, categories',
    examples: 'Critical, Blocked, Draft, Stable, Unknown',
  },
  {
    variant: 'counter',
    purpose: 'Numeric values',
    bestFor: 'Notifications, unread count, tasks, usage, workload, progress, current/total',
    examples: '99+, 1K, 4.5K, 2/100, 50K/1M',
  },
]

export const BADGE_COUNTER_MODE_ROWS = [
  {
    counterMode: 'single',
    description: 'Displays a single numeric value',
    bestFor: 'Notifications, unread count, tasks, messages, item counts',
    overflow: 'Yes — when count > overflowCount (default 99)',
  },
  {
    counterMode: 'ratio',
    description: 'Displays current / total',
    bestFor: 'Quota tracking, progress, capacity, usage, completion',
    overflow: 'No — do not combine with overflow (avoid 99+/1M)',
  },
]

export const BADGE_OVERFLOW_ROWS = [
  { count: '8', display: '8' },
  { count: '99', display: '99' },
  { count: '100', display: '99+' },
  { count: '120', display: '99+' },
  { count: '500', display: '99+' },
]

export const BADGE_FORMAT_CLEAN_ROWS = [
  { input: '4000', output: '4K' },
  { input: '4500', output: '4.5K' },
  { input: '50000', output: '50K' },
  { input: '1000000', output: '1M' },
  { input: '2500000', output: '2.5M' },
]

export const BADGE_FORMAT_PRECISE_ROWS = [
  { input: '4234', output: '4,234' },
  { input: '49999', output: '49,999' },
  { input: '1234', output: '1,234' },
]

export const BADGE_LOCALE_EXAMPLE_ROWS = [
  { locale: 'US', input: '1234567', output: '1,234,567' },
  { locale: 'Germany', input: '1234567', output: '1.234.567' },
  { locale: 'India', input: '1234567', output: '12,34,567' },
]

export const BADGE_RECOMMENDED_SETUP_ROWS = [
  { setup: 'counterMode = single, count = 120, overflowCount = 99', output: '99+' },
  { setup: 'counterMode = ratio, count = 2, total = 100', output: '2/100' },
  { setup: 'counterMode = ratio, count = 50000, total = 1000000', output: '50K/1M' },
  { setup: 'counterMode = ratio, count = 1234, total = 4234', output: '1,234/4,234' },
]

export const BADGE_INTERACTIVE_BEHAVIOR_ROWS = [
  { guideline: 'Increment', behavior: 'Add or plus action increases the counter' },
  { guideline: 'Decrement', behavior: 'Remove or minus action decreases the counter' },
  { guideline: 'Auto removal', behavior: 'At 0, the counter badge is removed by default' },
  { guideline: 'Live feedback', behavior: 'Updates instantly on interaction' },
  { guideline: 'Formatting', behavior: 'Locale-aware formatting and abbreviations (1,234, 2K, 1.2M)' },
]

export const BADGE_INTERACTIVE_ACTION_ROWS = [
  { action: 'Click +', result: 'Counter increases' },
  { action: 'Click –', result: 'Counter decreases' },
  { action: 'Click delete/remove', result: 'Counter decreases' },
  { action: 'Click clear all', result: 'Counter resets to 0; badge is removed' },
]

export const BADGE_A11Y_COUNTER_ROWS = [
  { visible: '99+', screenReader: '99 or more notifications' },
  { visible: '2/100', screenReader: '2 out of 100 completed' },
]

export const BADGE_ANATOMY_ROWS = [
  { element: 'Container', description: 'Visual surface — primary, outline, or filled appearance' },
  { element: 'Content', description: 'Text label, counter, or current/total count' },
  { element: 'Status indicator (optional)', description: 'Semantic indicator when isStatus = true' },
  { element: 'Tooltip (optional)', description: 'Accessible naming — maps to aria-label and title' },
]

export const BADGE_WHEN_NOT_USE_ROWS = [
  { scenario: 'Presence or availability is required', alternative: 'Arvo Status' },
  { scenario: 'Icon-only communication is sufficient', alternative: 'Arvo Status' },
  { scenario: 'Long descriptions are needed', alternative: 'Tooltip, popover, or details panel' },
  { scenario: 'A primary action is required', alternative: 'Button or link' },
  { scenario: 'Detailed explanation is required', alternative: 'Banner Alert or inline help' },
]

export const BADGE_PRIORITY_LABEL_ROWS = [
  { type: 'Critical', label: 'Critical' },
  { type: 'High', label: 'High' },
  { type: 'Medium', label: 'Medium' },
  { type: 'Low', label: 'Low' },
  { type: 'Unknown', label: 'Unknown' },
  { type: 'Draft', label: 'Draft' },
  { type: 'Stable', label: 'Stable' },
]

export const BADGE_STATUS_TERMINOLOGY_ROWS = [
  { state: 'Success', label: 'Approved / Completed' },
  { state: 'Warning', label: 'Needs Attention' },
  { state: 'Negative', label: 'Failed / Rejected' },
  { state: 'Neutral', label: 'Draft / Pending' },
  { state: 'Block', label: 'Blocked' },
  { state: 'Info', label: 'FYI / Info' },
]

export const BADGE_PROPS_TABLE_ROWS = BADGE_PROPS.map((row) => ({
  prop: row.prop,
  type: row.type,
  default: row.default,
  appliesTo: row.appliesTo,
  desc: row.desc,
}))

/** On-this-page sections for Badge Overview tab. */
export const BADGE_OVERVIEW_TOC = [
  { id: 'badge-when-to-use', label: 'When to use' },
  { id: 'badge-when-not-to-use', label: 'When not to use' },
  { id: 'badge-anatomy', label: 'Anatomy' },
  { id: 'badge-variant', label: 'Variant' },
  { id: 'badge-appearance', label: 'Appearance' },
  { id: 'badge-size', label: 'Size' },
  { id: 'badge-color-mode', label: 'Color mode' },
  { id: 'badge-counter-patterns', label: 'Counter patterns' },
  { id: 'badge-interactive-counter', label: 'Interactive counter' },
  { id: 'badge-interactive-animation', label: 'Counter animation' },
  { id: 'badge-best-practices', label: 'Best practices' },
  { id: 'badge-accessibility', label: 'Accessibility' },
  { id: 'badge-api-props', label: 'API props' },
]

/** On-this-page sections for Badge UX Copy tab. */
export const BADGE_UX_COPY_TOC = [
  { id: 'badge-ux-writing', label: 'UX writing guidelines' },
  { id: 'badge-writing-principles', label: 'Writing principles' },
  { id: 'badge-counter-writing', label: 'Counter writing guidelines' },
  { id: 'badge-priority-labels', label: 'Priority labels' },
  { id: 'badge-status-terminology', label: 'Status terminology' },
  { id: 'badge-writing-dos-donts', label: 'Do & Avoid' },
]
