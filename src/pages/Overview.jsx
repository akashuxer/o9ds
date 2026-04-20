import { useTheme } from '../context/ThemeContext'
import ExpandableDocImage from '../LayoutComponents/ExpandableDocImage'
import GrayBgCard from '../LayoutComponents/GrayBgCard'
import WhiteBgCard from '../LayoutComponents/WhiteBgCard'
import PageWithToc from '../LayoutComponents/PageWithToc'
import {
  DESIGN_PRINCIPLES,
  GET_STARTED_INTRO,
  GET_STARTED_SYSTEM_DIAGRAM,
  PRINCIPLES_INTRO,
} from '../data/principlesContent'

const OVERVIEW_SECTIONS = [
  { id: 'what-is-o9ds', label: 'What is o9ds?' },
  { id: 'why-we-built-it', label: 'Why we built it' },
  { id: 'get-started', label: 'Get started' },
  { id: 'business-impact', label: 'Business Impact' },
]

const whyWeBuiltIt = [
  'Eliminate inconsistency',
  'Improve efficiency and speed',
  'Enhance usability',
  'Ensure accessibility (WCAG 2.2 AA)',
  'Enable scalability',
  'Reduce UX and engineering debt',
  'Support future-ready workflows',
  'Embed o9 brand in product',
]

const businessImpact = [
  { title: 'Speeds up delivery', desc: 'Reusable components and patterns reduce effort and accelerate time to market' },
  { title: 'Reduces rework', desc: 'Standardization minimizes inconsistencies and avoids duplicate efforts' },
  { title: 'Ensures consistency', desc: 'Shared patterns create a cohesive and predictable user experience' },
  { title: 'Enables scalability', desc: 'Supports new widgets, theming, multi-client needs, and AI-driven workflows' },
  { title: 'Improves handoff', desc: 'Clear standards improve design-to-development handoff' },
  { title: 'Builds in accessibility', desc: 'Accessibility is built into the system, reducing retrofitting effort' },
  { title: 'Strengthens brand', desc: 'Brings o9 brand principles and visual language into the platform' },
]

export default function Overview() {
  const { theme } = useTheme()
  const isLight = theme === 'light'

  return (
    <PageWithToc sections={OVERVIEW_SECTIONS}>
    <div className="max-w-3xl space-y-12">
      <section>
        <h1 className="group flex items-center gap-2 text-[30px] font-bold text-o9ds-light-primary dark:text-white mb-4">
          <span className="flex h-8 w-8 items-center justify-center bg-o9ds-light-surface dark:bg-neutral-700" data-o9ds-avatar data-o9ds-avatar-header>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </span>
          Overview
        </h1>
      </section>

      {/* What is o9ds */}
      <section id="what-is-o9ds" className="animate-fade-in-up" style={{ animationDelay: '80ms' }}>
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white mb-3">What is o9ds?</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
          The o9 Design System (o9DS) is a centralized system of foundations, components, patterns, and guidelines that standardize how interfaces are designed and built across the o9 platform. It aligns design, engineering, accessibility, and brand into one scalable system.
        </p>
      </section>

      {/* Why we built it - Cards */}
      <section id="why-we-built-it">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white mb-3">Why we built it</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-6">Address platform-wide inconsistencies and enable scalable product development.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {whyWeBuiltIt.map((item, i) => (
            <div
              key={item}
              className="border dark:border-neutral-700 p-4 transition-all duration-300 hover:border-o9ds-light-primary dark:hover:border-neutral-600 dark:hover:bg-neutral-800/50 hover:shadow-md hover:-translate-y-0.5 animate-fade-in-up"
              style={{ animationDelay: `${100 + i * 50}ms`, borderColor: isLight ? '#E5E5E5' : undefined, backgroundColor: isLight ? '#F2F2F2' : undefined }}
              data-o9ds-card="light"
            >
              <p className="text-sm font-medium text-o9ds-light-primary dark:text-white">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Get started — system diagram + five principles (infographics in public/GetStarted/) */}
      <section id="get-started" className="animate-fade-in-up scroll-mt-24" style={{ animationDelay: '500ms' }}>
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white mb-3">Get started</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-6 leading-relaxed max-w-2xl">
          {GET_STARTED_INTRO}
        </p>
        <div className="mb-10">
          <ExpandableDocImage
            src={GET_STARTED_SYSTEM_DIAGRAM.src}
            alt={GET_STARTED_SYSTEM_DIAGRAM.alt}
            className="w-full"
            triggerClassName="max-w-full"
          />
        </div>
        <h3
          id="principles"
          className="text-lg font-semibold text-o9ds-light-primary dark:text-white mb-3 scroll-mt-24"
        >
          Core principles
        </h3>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-6 leading-relaxed">{PRINCIPLES_INTRO}</p>
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-6">
          {DESIGN_PRINCIPLES.map(({ num, title, desc, bullets, rule, infographic, infographicAlt }) => (
            <WhiteBgCard
              key={num}
              number={num}
              title={title}
              desc={desc}
              media={
                infographic ? (
                  <ExpandableDocImage
                    src={infographic}
                    alt={infographicAlt || `Principle ${num} infographic`}
                    className="w-full"
                    triggerClassName="max-w-full w-full"
                  />
                ) : null
              }
              bullets={bullets}
              decisionRule={rule}
              className="animate-fade-in-up p-6"
              style={{ animationDelay: `${560 + num * 80}ms` }}
              unified
            />
          ))}
        </div>
      </section>

      {/* Business Impact - Cards */}
      <section id="business-impact">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white mb-4">Business Impact</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-6">The o9 Design System unifies design, development, accessibility, and brand into one scalable system.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {businessImpact.map(({ title, desc }, i) => (
            <GrayBgCard
              key={title}
              title={title}
              desc={desc}
              className="animate-fade-in-up p-4"
              style={{ animationDelay: `${700 + i * 60}ms` }}
            />
          ))}
        </div>
      </section>
    </div>
    </PageWithToc>
  )
}
