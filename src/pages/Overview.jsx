import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import ExpandableDocImage from '../LayoutComponents/ExpandableDocImage'
import GrayBgCard from '../LayoutComponents/GrayBgCard'
import WhiteBgCard from '../LayoutComponents/WhiteBgCard'
import PageWithToc from '../LayoutComponents/PageWithToc'
import {
  ARVO_FUN_FACT,
  ARVO_TECHNICAL_ERGONOMICS,
  DESIGN_PRINCIPLES,
  GET_STARTED_SYSTEM_DIAGRAM,
  PRINCIPLES_INTRO,
} from '../data/principlesContent'

const codeInline =
  'ml-1 inline rounded-sm border border-neutral-300 bg-neutral-100 px-1.5 py-0.5 text-sm font-mono text-o9ds-light-primary dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-200'

function ErgonomicsBullet({ line }) {
  const npm = line.match(/^NPM:\s*(.+)$/)
  const css = line.match(/^CSS:\s*(.+)$/)
  if (npm) {
    return (
      <>
        NPM: <code className={codeInline}>{npm[1]}</code>
      </>
    )
  }
  if (css) {
    return (
      <>
        CSS: <code className={codeInline}>{css[1]}</code>
      </>
    )
  }
  return line
}

const OVERVIEW_SECTIONS = [
  { id: 'what-arvo-represents', label: 'What Arvo represents' },
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
    <div className="max-w-3xl space-y-12 lg:space-y-14">
      <section>
        <div className="pb-8 lg:pb-10">
          <p className="text-[2rem] font-bold leading-[1.1] tracking-tight text-o9ds-light-primary dark:text-white sm:text-[2.5rem] md:text-[2.75rem]">
            o9 Arvo
          </p>
          <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-o9ds-light-secondary dark:text-neutral-300 sm:text-lg md:text-xl">
            A Value System for Adaptive, Intelligent Enterprise Experiences
          </p>
        </div>
      </section>

      {/* What Arvo represents (replaces What is o9ds) */}
      <section id="what-arvo-represents" className="animate-fade-in-up scroll-mt-24" style={{ animationDelay: '80ms' }}>
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white mb-6 sm:text-2xl">
          What Arvo Represents
        </h2>
        <div className="space-y-5 text-base leading-relaxed text-o9ds-light-secondary dark:text-neutral-400 sm:text-[17px]">
          <p>
            o9 Arvo (o9 Design System) is a centralized system of foundations, components, patterns, and guidelines that
            standardizes how interfaces are designed and built across the o9 platform—aligning design, engineering,
            accessibility, and brand into one scalable system.
          </p>
          <div
            className="border-l-2 py-1 pl-5 dark:border-neutral-600"
            style={{ borderColor: isLight ? '#010101' : '#a3a3a3' }}
          >
            <p className="font-semibold text-o9ds-light-primary dark:text-white">Arvo is not just a design system.</p>
            <p className="mt-2">
              It is the experience layer of o9&apos;s operating model, built to support APEX, the Digital Brain, and
              connected decision-making.
            </p>
          </div>
          <p className="text-o9ds-light-primary dark:text-neutral-200">
            It moves beyond UI standardization to enable a living, adaptive platform experience—designed for scale,
            intelligence, and continuous evolution.
          </p>
        </div>

        <div
          className="mt-10 space-y-10 border-t pt-10 dark:border-neutral-700"
          style={{ borderColor: isLight ? '#E5E5E5' : undefined }}
        >
          <div>
            <h3 className="mb-3 text-lg font-semibold text-o9ds-light-primary dark:text-white">
              {ARVO_TECHNICAL_ERGONOMICS.title}
            </h3>
            <p className="mb-4 italic text-o9ds-light-secondary dark:text-neutral-300">{ARVO_TECHNICAL_ERGONOMICS.lead}</p>
            <ul className="list-disc space-y-2 pl-5 text-o9ds-light-secondary dark:text-neutral-400 marker:text-[#010101] dark:marker:text-neutral-500">
              {ARVO_TECHNICAL_ERGONOMICS.bullets.map((line) => (
                <li key={line}>
                  <ErgonomicsBullet line={line} />
                </li>
              ))}
            </ul>
          </div>
          <div
            className="border p-6 sm:p-8 dark:border-neutral-600"
            style={{
              borderColor: isLight ? '#E5E5E5' : undefined,
              backgroundColor: isLight ? '#FAFAFA' : 'rgba(23, 23, 23, 0.85)',
            }}
          >
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <h3 className="text-xl font-bold tracking-tight text-o9ds-light-primary dark:text-white">
                {ARVO_FUN_FACT.title}
              </h3>
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center border border-neutral-200 bg-white text-xl leading-none dark:border-neutral-600 dark:bg-neutral-800/90"
                aria-hidden
              >
                🌍
              </span>
            </div>
            <p
              className="mb-8 max-w-2xl border-l-2 pl-4 text-[17px] font-medium leading-relaxed text-o9ds-light-primary dark:text-neutral-100 sm:pl-5 sm:text-lg"
              style={{ borderColor: isLight ? '#010101' : '#fafafa' }}
            >
              {ARVO_FUN_FACT.lead}
            </p>
            <div className="space-y-3">
              {ARVO_FUN_FACT.points.map(({ label, detail }) => (
                <div
                  key={label}
                  className="flex flex-col gap-1.5 border py-3 pl-4 pr-3 sm:flex-row sm:items-start sm:gap-6 sm:py-3.5 dark:border-neutral-600 dark:bg-neutral-950/40"
                  style={{ borderColor: isLight ? '#E5E5E5' : undefined, backgroundColor: isLight ? '#FFFFFF' : undefined }}
                >
                  <span className="shrink-0 text-[13px] font-semibold uppercase tracking-wide text-o9ds-light-primary dark:text-white sm:w-[min(12rem,34%)] sm:pt-0.5">
                    {label}
                  </span>
                  <span className="min-w-0 text-sm leading-relaxed text-o9ds-light-secondary dark:text-neutral-400 sm:border-l sm:pl-6 dark:sm:border-neutral-600">
                    {detail}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-8 border-t pt-6 text-center text-sm font-semibold tracking-tight text-o9ds-light-primary dark:text-white sm:text-base">
              <span aria-hidden className="mr-2 text-neutral-500 dark:text-neutral-500">
                →
              </span>
              {ARVO_FUN_FACT.closing}
            </p>
          </div>
        </div>

        <div
          className="mt-10 overflow-hidden border dark:border-neutral-700"
          style={{ borderColor: isLight ? '#E5E5E5' : undefined }}
        >
          <ExpandableDocImage
            src={GET_STARTED_SYSTEM_DIAGRAM.src}
            alt={GET_STARTED_SYSTEM_DIAGRAM.alt}
            className="w-full"
            triggerClassName="max-w-full"
          />
        </div>
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

      {/* Get started — five principles (infographics in public/GetStarted/) */}
      <section id="get-started" className="animate-fade-in-up scroll-mt-24" style={{ animationDelay: '500ms' }}>
        <div
          className="mb-8 border-t pt-10 dark:border-neutral-700"
          style={{ borderColor: isLight ? '#E5E5E5' : undefined }}
        >
          <h2 className="text-2xl font-bold tracking-tight text-o9ds-light-primary dark:text-white sm:text-[28px]">
            Get started
          </h2>
        </div>
        <h3
          id="principles"
          className="mb-4 scroll-mt-24 text-xl font-semibold text-o9ds-light-primary dark:text-white"
        >
          Core principles
        </h3>
        <p className="mb-8 max-w-2xl text-base leading-relaxed text-o9ds-light-secondary dark:text-neutral-400">
          {PRINCIPLES_INTRO}
        </p>
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
        <div className="mt-10 rounded-xl border border-neutral-200/90 bg-gradient-to-br from-neutral-50 to-white p-6 dark:border-neutral-700 dark:from-neutral-900/50 dark:to-neutral-950">
          <p className="m-0 text-sm font-semibold text-o9ds-light-primary dark:text-white">Resources hub</p>
          <p className="mt-2 m-0 max-w-2xl text-sm leading-relaxed text-o9ds-light-secondary dark:text-neutral-400">
            Design files, engineering entry points, adoption checklists, and the living Google Doc index—everything in one place on
            the{' '}
            <Link to="/resources" className="font-semibold text-violet-600 underline underline-offset-2 dark:text-violet-400">
              Resources
            </Link>{' '}
            page.
          </p>
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
