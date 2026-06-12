export const FEEDBACK_FORM_URL = 'https://forms.gle/fTRNAnDyunKX1hTE6'
export const REPO_URL = 'https://o9git.visualstudio.com/CoreDev/_git/o9.DesignSystem'

export const CONTRIBUTE_TABS = ['For Developers', 'For UX Designers']

export const CONTRIBUTE_DESIGNER_TOC = [
  { id: 'designer-ways-to-contribute', label: 'Ways to contribute' },
  { id: 'designer-quick-contribution', label: 'Quick contribution' },
  { id: 'designer-before-proposing', label: 'Before proposing something new' },
  { id: 'designer-workflows', label: 'Contribution workflows' },
  { id: 'designer-component-enhancement', label: 'Component enhancement' },
  { id: 'designer-new-component', label: 'New component proposal' },
  { id: 'designer-pattern', label: 'Pattern contribution' },
  { id: 'designer-accessibility', label: 'Accessibility contribution' },
  { id: 'designer-documentation', label: 'Documentation contribution' },
  { id: 'designer-principles', label: 'Contribution principles' },
  { id: 'designer-checklist', label: 'Contribution checklist' },
  { id: 'designer-need-help', label: 'Need help first?' },
]

export const CONTRIBUTE_DEVELOPER_TOC = [
  { id: 'developer-ways-to-contribute', label: 'Ways to contribute' },
  { id: 'developer-feedback', label: 'Share feedback & ideas' },
  { id: 'developer-before-you-start', label: 'Before you start' },
  { id: 'developer-how-it-works', label: 'How the pipeline works' },
  { id: 'developer-workflows', label: 'Choose a workflow' },
  { id: 'developer-configuration', label: 'Claude Code setup' },
  { id: 'developer-subagents', label: 'Specialist subagents' },
  { id: 'developer-quality-gate', label: 'Quality gate' },
  { id: 'developer-reference', label: 'Where to go deeper' },
]

export const DESIGNER_CONTRIBUTION_COLUMNS = [
  { key: 'type', label: 'Contribution type', primary: true },
  { key: 'when', label: 'When to use it' },
]

export const DESIGNER_CONTRIBUTIONS = [
  { type: 'Feedback & ideas', when: 'Something feels inconsistent, missing, confusing, or repetitive' },
  { type: 'Component enhancement', when: 'Existing component needs a new property, state, variant, or interaction' },
  { type: 'New component proposal', when: 'No existing component solves the problem' },
  { type: 'Pattern contribution', when: 'Multiple teams solve the same workflow differently' },
  { type: 'Accessibility improvement', when: 'Keyboard, focus, screen reader, or usability issues' },
  { type: 'Documentation contribution', when: 'Usage guidance is unclear or missing' },
]

export const DESIGNER_WORKFLOW_COLUMNS = [
  { key: 'workflow', label: 'Workflow', primary: true },
  { key: 'when', label: 'When to use it' },
  { key: 'share', label: 'What to share' },
]

export const DESIGNER_CHECKLIST_ITEMS = [
  'Did I check existing components?',
  'Can composition solve this?',
  'Is this reusable?',
  'Am I solving a real user problem?',
  'Did I include screenshots or examples?',
  'Did I consider accessibility?',
  'Would other teams benefit?',
]

export const DESIGNER_WORKFLOWS = [
  { workflow: 'Enhancement', when: 'Existing component needs improvement', share: 'Problem + use case + expected behavior' },
  { workflow: 'New component', when: 'Existing system cannot solve the need', share: 'Problem + reuse potential + examples' },
  { workflow: 'Pattern proposal', when: 'Teams solve the same interaction differently', share: 'Workflow + screenshots' },
  { workflow: 'Accessibility improvement', when: 'Experience fails accessibility expectations', share: 'Issue + expected behavior' },
  { workflow: 'Documentation update', when: 'Guidance is unclear or missing', share: 'Missing information' },
]
