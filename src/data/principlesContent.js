/** Shared copy for the five o9DS design principles (Overview + legacy /principles redirect). */

export const PRINCIPLES_INTRO =
  "The o9 Design System follows a set of core principles that define how interfaces are designed, built, and scaled across the platform. These are not optional guidelines—they are enforced standards that every component, pattern, and experience in o9DS must follow."

export const DESIGN_PRINCIPLES = [
  {
    num: 1,
    title: 'Predictable & Consistent Experience',
    desc: "Design interactions that behave consistently across the platform so users don't need to relearn patterns.",
    bullets: [
      'Reuse established patterns before creating new ones',
      'Maintain consistent behavior, layout, and interaction models',
      'Align visual and interaction language across features',
    ],
    rule: 'If a pattern already exists → reuse it',
  },
  {
    num: 2,
    title: 'Efficiency Over Effort (Enterprise-first)',
    desc: 'Enable users to complete complex tasks with minimal cognitive load and fewer steps.',
    bullets: [
      'Reduce clicks, reduce mouse movements, context switching, and redundant inputs',
      'Support power users (keyboard, shortcuts, bulk actions)',
      'Optimize for high-frequency workflows',
    ],
    rule: 'Choose the option that reduces user effort at scale',
  },
  {
    num: 3,
    title: 'Clarity Through Hierarchy & Structure',
    desc: 'Organize information to help users quickly scan, understand, and act.',
    bullets: [
      'Use visual hierarchy (spacing, typography, color)',
      'Group related information logically',
      'Apply progressive disclosure for complexity',
    ],
    rule: 'If everything looks important → nothing is',
  },
  {
    num: 4,
    title: 'Accessibility by Default (Not Optional)',
    desc: 'Ensure every experience is usable by all users without adaptation.',
    bullets: [
      'Follow WCAG 2.2 AA standards',
      'Support keyboard navigation and screen readers',
      'Maintain sufficient contrast and focus visibility',
    ],
    rule: "If it's not accessible → it's not complete",
  },
  {
    num: 5,
    title: 'Standardized Yet Flexible Patterns',
    desc: 'Create reusable patterns that work across use cases while allowing controlled flexibility.',
    bullets: [
      'Define clear pattern guidelines',
      'Avoid one-off solutions',
      'Support extensibility without breaking system integrity',
    ],
    rule: 'Standardize first, extend second',
  },
]
