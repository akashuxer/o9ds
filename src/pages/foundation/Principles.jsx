import PageWithToc from '../../LayoutComponents/PageWithToc'
import WhiteBgCard from '../../LayoutComponents/WhiteBgCard'

const PRINCIPLES_SECTIONS = [{ id: 'core-principles', label: 'Our Core Principles' }]

export default function Principles() {
  const principles = [
    {
      num: 1,
      title: 'Predictable & Consistent Experience',
      desc: 'Design interactions that behave consistently across the platform so users don\'t need to relearn patterns.',
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
      rule: 'If it\'s not accessible → it\'s not complete',
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

  return (
    <PageWithToc sections={PRINCIPLES_SECTIONS}>
    <div className="max-w-3xl space-y-10">
      <section>
        <h1 className="group flex items-center gap-2 text-[30px] font-bold text-o9ds-light-primary dark:text-white">
          <span className="flex h-8 w-8 items-center justify-center bg-o9ds-light-surface dark:bg-neutral-700" data-o9ds-avatar data-o9ds-avatar-header>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </span>
          Principles
        </h1>
        <p className="mt-4 text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed">
          The o9 Design System follows a set of core principles that define how interfaces are designed, built, and scaled across the platform. These are not optional guidelines—they are enforced standards that every component, pattern, and experience in o9DS must follow.
        </p>
      </section>

      <section id="core-principles">
        <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white mb-6">Our Core Principles</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {principles.map(({ num, title, desc, bullets, rule }) => (
              <WhiteBgCard
                key={num}
                number={num}
                title={title}
                desc={desc}
                bullets={bullets}
                decisionRule={rule}
                className="animate-fade-in-up"
                style={{ animationDelay: `${num * 80}ms` }}
                unified
              />
          ))}
        </div>
      </section>
    </div>
    </PageWithToc>
  )
}
