import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import PageWithToc from '../LayoutComponents/PageWithToc'

const OVERVIEW_SECTIONS = [
  { id: 'what-is-o9ds', label: 'What is o9ds?' },
  { id: 'why-we-built-it', label: 'Why we built it' },
  { id: 'principles', label: 'Principles' },
  { id: 'scope', label: 'Scope' },
  { id: 'audience', label: 'Audience' },
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
      {/* Slogan */}
      <section
        className="border dark:border-neutral-700 dark:bg-neutral-900/50 p-6 md:p-8 animate-fade-in shadow-sm"
        style={
          isLight
            ? { borderColor: '#E5E5E5', backgroundColor: '#FFFFFF' }
            : undefined
        }
      >
        <p className="text-center text-base md:text-lg font-semibold text-o9ds-light-primary dark:text-white leading-relaxed">
          ONE COMPANY · ONE SYSTEM · MULTIPLE MODULES · DIFFERENT PRODUCTS · MULTIPLE TEAMS
          <br />
          <span
            className="dark:text-neutral-400"
            style={isLight ? { color: '#303030' } : undefined}
          >
            BUT ONE CONSISTENT EXPERIENCE
          </span>
        </p>
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

      {/* Principles Link */}
      <section id="principles" className="animate-fade-in-up" style={{ animationDelay: '550ms' }}>
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white mb-3">Principles</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-4">Five core principles define how interfaces are designed and built.</p>
        <Link
          to="/principles"
          className="inline-flex items-center gap-2 dark:bg-white dark:text-black px-4 py-2 text-sm font-medium hover:opacity-90 dark:hover:bg-neutral-200 transition-colors duration-300 hover:-translate-y-0.5"
          data-o9ds-principles-btn={isLight ? '' : undefined}
          style={isLight ? { backgroundColor: '#010101' } : undefined}
        >
          View principles
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </section>

      {/* Scope */}
      <section id="scope" className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white mb-4">Scope</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div
            className="border dark:border-neutral-700 p-4 transition-all duration-300 hover:border-o9ds-light-primary dark:hover:border-neutral-600 hover:shadow-md dark:hover:bg-neutral-800/50"
            style={{ borderColor: isLight ? '#E5E5E5' : undefined, backgroundColor: isLight ? '#FFFFFF' : undefined }}
            data-o9ds-card={isLight ? 'light-white' : 'dark'}
          >
            <h3 className="font-semibold text-o9ds-light-primary dark:text-white mb-2">Includes</h3>
            <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">Foundations, components, patterns, accessibility guidelines, content guidelines, governance</p>
          </div>
          <div
            className="border dark:border-neutral-700 p-4 transition-all duration-300 hover:border-o9ds-light-primary dark:hover:border-neutral-600 hover:shadow-md dark:hover:bg-neutral-800/50"
            style={{ borderColor: isLight ? '#E5E5E5' : undefined, backgroundColor: isLight ? '#FFFFFF' : undefined }}
            data-o9ds-card={isLight ? 'light-white' : 'dark'}
          >
            <h3 className="font-semibold text-o9ds-light-primary dark:text-white mb-2">Excludes</h3>
            <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">Product-specific customizations, backend logic and business rules</p>
          </div>
        </div>
      </section>

      {/* Audience */}
      <section id="audience" className="animate-fade-in-up" style={{ animationDelay: '650ms' }}>
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white mb-4">Audience</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">Designers, developers, product managers, QA, content writers, stakeholders, and customers.</p>
      </section>

      {/* Business Impact - Cards */}
      <section id="business-impact">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white mb-4">Business Impact</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-6">The o9 Design System unifies design, development, accessibility, and brand into one scalable system.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {businessImpact.map(({ title, desc }, i) => (
            <div
              key={title}
              className="border dark:border-neutral-700 p-4 transition-all duration-300 hover:border-o9ds-light-primary dark:hover:border-neutral-600 dark:hover:bg-neutral-800/50 hover:shadow-md hover:-translate-y-0.5 animate-fade-in-up"
              style={{ animationDelay: `${700 + i * 60}ms`, borderColor: isLight ? '#E5E5E5' : undefined, backgroundColor: isLight ? '#F2F2F2' : undefined }}
              data-o9ds-card="light"
            >
              <h4 className="font-semibold text-o9ds-light-primary dark:text-white mb-2">{title}</h4>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    </PageWithToc>
  )
}
