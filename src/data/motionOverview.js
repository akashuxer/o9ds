/** Motion & Animation — Overview tab TOC (principles & guidance; tokens live on Tokens tab). */

export const MOTION_OVERVIEW_TOC = [
  { id: 'motion-intro', label: 'Introduction' },
  { id: 'motion-why', label: 'Why motion' },
  { id: 'motion-principles', label: 'Principles' },
  { id: 'motion-when', label: 'When to animate' },
  { id: 'motion-language', label: 'Motion language' },
  { id: 'motion-handoff', label: 'Design & development' },
]

/** Short labels for the intro chip strip. */
export const MOTION_CLARITY_CHIPS = [
  'What changed',
  'Where it came from',
  'What became active',
  'Action succeeded',
  'Action rejected',
  'How to go back',
]

export const MOTION_WHY_PILLARS = [
  {
    title: 'Feedback',
    desc: 'Confirms the system responded.',
    examples: ['Toast after save', 'Counter on selection', 'Shake on invalid drop'],
  },
  {
    title: 'Orientation',
    desc: 'Shows where you are.',
    examples: ['Nested view slides forward', 'Panel enters from the side', 'Tab indicator moves'],
  },
  {
    title: 'Continuity',
    desc: 'Connects layout changes.',
    examples: ['Accordion expands', 'Toast stack reflows', 'Footer updates in place'],
  },
  {
    title: 'Focus',
    desc: 'Directs attention.',
    examples: ['Search expands', 'Dialog opens', 'Match highlight'],
  },
]

/** One-line principles — detail lives on Tokens tab. */
export const MOTION_PRINCIPLES = [
  { title: 'Functional first', body: 'Motion explains a transition or result — not decoration.' },
  { title: 'Fast, not rushed', body: 'Most UI motion finishes in 120–300ms.' },
  { title: 'Subtle over playful', body: 'Small moves, light fades — calm and platform-ready.' },
  { title: 'Direction matches meaning', body: 'Forward/back, toast entry, counter up/down — motion follows intent.' },
  { title: 'Layout stability', body: 'Add, remove, and dismiss without jarring jumps.' },
  { title: 'Stable parent surface', body: 'Popovers and drawers transition inner content — not the whole shell.' },
  { title: 'One intent, one token', body: 'Use semantic tokens from the Tokens tab — no one-off values.' },
  { title: 'Delight without distraction', body: 'Polish the task, never compete with data and decisions.' },
  { title: 'Accessible by default', body: 'Respect reduced motion; never rely on animation alone for state.' },
]

export const MOTION_USE = [
  'Open & close',
  'Expand & collapse',
  'Enter & exit',
  'Forward & back',
  'Active state',
  'Count & status changes',
  'Invalid actions',
  'Search highlight',
]

export const MOTION_AVOID = [
  'Change is already obvious',
  'Slows frequent tasks',
  'Adds noise on dense screens',
  'Replaces clear messaging',
  'Hurts motion-sensitive users',
]

export const MOTION_LANGUAGE = [
  { title: 'Fade', desc: 'Visibility', examples: ['Tooltip', 'Status dot', 'Highlight'] },
  { title: 'Slide', desc: 'Direction', examples: ['Drawer', 'Nested view', 'Toast'] },
  { title: 'Expand', desc: 'Height', examples: ['Accordion', 'Tree', 'Show more'] },
  { title: 'Scale', desc: 'Micro-feedback', examples: ['Icon toggle', 'Chip remove'] },
  { title: 'Shake', desc: 'Invalid once', examples: ['Rejected drop', 'Duplicate block'] },
]
