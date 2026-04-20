/** Shared copy for the five o9DS design principles (Overview + legacy /principles redirect). */

export const PRINCIPLES_INTRO =
  "The o9 Design System follows a set of core principles that define how interfaces are designed, built, and scaled across the platform. These are not optional guidelines—they are enforced standards that every component, pattern, and experience in o9DS must follow."

/** Lead copy for the Overview “Get started” block (above principle infographics). */
export const GET_STARTED_INTRO =
  'Start with how o9 and Arvo fit together, then use the five core principles below—they guide every component, pattern, and experience in the system.'

/** System-level infographic (`public/GetStarted/`). */
export const GET_STARTED_SYSTEM_DIAGRAM = {
  src: '/GetStarted/o9ArvoSystem.png',
  alt: 'Infographic describing the o9 platform and Arvo design system relationship.',
}

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
    infographic: '/GetStarted/1stPrinciple.png',
    infographicAlt: 'Infographic: Predictable and consistent experience',
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
    infographic: '/GetStarted/2ndPrinciple.png',
    infographicAlt: 'Infographic: Efficiency over effort (enterprise-first)',
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
    infographic: '/GetStarted/3rdPrinciple.png',
    infographicAlt: 'Infographic: Clarity through hierarchy and structure',
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
    infographic: '/GetStarted/4thPrinciple.png',
    infographicAlt: 'Infographic: Accessibility by default',
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
    infographic: '/GetStarted/5thPrinciple.png',
    infographicAlt: 'Infographic: Standardized yet flexible patterns',
  },
]
