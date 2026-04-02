import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BackgroundRippleEffect } from '@/components/ui/BackgroundRippleEffect'
import { useTheme } from '../context/ThemeContext'
import { useDocsShell } from '../context/DocsShellContext'

/** Flip order: Consistent → Flexible → Accessible → Effortless → Delightful */
const FLIP_WORDS = ['Consistent', 'Flexible', 'Accessible', 'Effortless', 'Delightful']


const CardIcon = ({ name }) => {
  const icons = {
    getStarted: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    foundations: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343L12.657 5.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    assets: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    components: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    accessibility: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    patterns: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    content: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  }
  return icons[name] || null
}

const cards = [
  {
    title: 'Get Started',
    desc: 'Orientation, principles, and how teams adopt o9DS.',
    path: '/overview',
    icon: 'getStarted',
    links: [
      { label: 'Overview', to: '/overview' },
      { label: 'Principles', to: '/principles' },
      { label: 'For Designers', to: '/designers' },
      { label: 'For Developers', to: '/developers' },
    ],
  },
  {
    title: 'Foundations',
    desc: 'Tokens, color, type, spacing, and motion baselines.',
    path: '/foundations',
    icon: 'foundations',
    links: [
      { label: 'Foundations overview', to: '/foundations' },
      { label: 'Colors', to: '/colors' },
      { label: 'Typography', to: '/typography' },
      { label: 'Spacing', to: '/spacing' },
    ],
  },
  {
    title: 'Assets',
    desc: 'Iconography and illustration language.',
    path: '/icons',
    icon: 'assets',
    links: [
      { label: 'Icons', to: '/icons' },
      { label: 'Illustrations', to: '/illustrations' },
    ],
  },
  {
    title: 'Components',
    desc: 'Inputs, actions, navigation, and data display.',
    path: '/components',
    icon: 'components',
    links: [
      { label: 'All components', to: '/components' },
      { label: 'Button', to: '/components/button' },
      { label: 'Cards', to: '/components/cards' },
      { label: 'Workspace sidebar', to: '/components/workspace-sidebar' },
    ],
  },
  {
    title: 'Accessibility',
    desc: 'Inclusive patterns and WCAG-aligned guidance.',
    path: '/accessibility',
    icon: 'accessibility',
    links: [{ label: 'Accessibility overview', to: '/accessibility' }],
  },
  {
    title: 'Content Guidelines',
    desc: 'Voice, tone, and product copy conventions.',
    path: '/content',
    icon: 'content',
    links: [
      { label: 'Content overview', to: '/content' },
      { label: 'Writing principles', to: '/content/writing-principles' },
      { label: 'Voice & tone', to: '/content/voice-and-tone' },
    ],
  },
  {
    title: 'Patterns',
    desc: 'Common workflows: forms, tables, modals, and more.',
    path: '/patterns',
    icon: 'patterns',
    links: [
      { label: 'Patterns overview', to: '/patterns' },
      { label: 'Forms', to: '/patterns/forms' },
      { label: 'Tables', to: '/patterns/tables' },
      { label: 'Modals', to: '/patterns/modals' },
    ],
  },
]

/** Full-viewport orbit mesh + corners (fixed behind content). */
function HeroPatternFullPage({ isLight }) {
  const dot = isLight ? 'rgba(1,1,1,0.06)' : 'rgba(255,255,255,0.028)'
  const hatch = isLight ? 'rgba(255,61,0,0.04)' : 'rgba(249,137,249,0.022)'
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] min-h-screen overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0 opacity-[0.9] dark:opacity-[0.22]"
        style={{
          backgroundImage: `radial-gradient(circle at center, ${dot} 1px, transparent 1px)`,
          backgroundSize: '26px 26px',
        }}
      />
      <div
        className="absolute inset-0 opacity-45 dark:opacity-[0.08]"
        style={{
          backgroundImage: `repeating-linear-gradient(-33deg, transparent, transparent 14px, ${hatch} 14px, ${hatch} 15px)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-35 mix-blend-multiply dark:opacity-[0.06] dark:mix-blend-screen"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, ${isLight ? 'rgba(0,55,255,0.025)' : 'rgba(0,55,255,0.018)'} 40px, ${isLight ? 'rgba(0,55,255,0.025)' : 'rgba(0,55,255,0.018)'} 41px)`,
        }}
      />
      <div
        className="absolute left-0 top-0 h-[45vh] w-[45vw] blur-3xl motion-safe:animate-pulse-ring opacity-40 dark:opacity-[0.1]"
        style={{ background: 'radial-gradient(ellipse at 0% 0%, rgba(255, 61, 0, 0.22), transparent 70%)' }}
      />
      <div
        className="absolute right-0 top-0 h-[45vh] w-[45vw] blur-3xl motion-safe:animate-pulse-ring opacity-35 [animation-delay:0.5s] dark:opacity-[0.09]"
        style={{ background: 'radial-gradient(ellipse at 100% 0%, rgba(249, 137, 249, 0.2), transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-0 h-[45vh] w-[45vw] blur-3xl motion-safe:animate-pulse-ring opacity-35 [animation-delay:1s] dark:opacity-[0.08]"
        style={{ background: 'radial-gradient(ellipse at 0% 100%, rgba(0, 55, 255, 0.12), transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 right-0 h-[45vh] w-[45vw] blur-3xl motion-safe:animate-pulse-ring opacity-35 [animation-delay:1.5s] dark:opacity-[0.08]"
        style={{ background: 'radial-gradient(ellipse at 100% 100%, rgba(255, 61, 0, 0.18), transparent 70%)' }}
      />
      <div
        className="absolute left-1/2 top-[-10%] h-[min(85vh,720px)] w-[min(110vw,960px)] -translate-x-1/2 blur-3xl dark:opacity-[0.09]"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255, 61, 0, 0.14), transparent 60%)',
        }}
      />
      <div
        className="absolute bottom-[-15%] left-1/2 h-[50%] w-[min(100%,900px)] -translate-x-1/2 blur-3xl dark:opacity-[0.07]"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(249, 137, 249, 0.12), transparent 55%)',
        }}
      />
    </div>
  )
}

function RotatingFlipWord() {
  const [index, setIndex] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mq.matches)
    const fn = () => setReduceMotion(mq.matches)
    mq.addEventListener('change', fn)
    return () => mq.removeEventListener('change', fn)
  }, [])

  useEffect(() => {
    if (reduceMotion) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % FLIP_WORDS.length)
    }, 3600)
    return () => window.clearInterval(id)
  }, [reduceMotion])

  const activeIndex = reduceMotion ? 0 : index

  return (
    <span className="relative inline-block max-w-full align-baseline text-left" aria-live="polite">
      {/* Width = widest word (stacked in one grid cell) so nothing clips horizontally */}
      <span
        aria-hidden
        className="invisible inline-grid grid-cols-1 grid-rows-1 font-semibold select-none"
      >
        {FLIP_WORDS.map((w) => (
          <span key={`w-${w}`} className="col-start-1 row-start-1 whitespace-nowrap font-semibold [padding:0_0.1em]">
            {w}
          </span>
        ))}
      </span>
      <span className="absolute left-0 top-0 h-[1.12em] w-full overflow-hidden">
        <span
          className="home-hero-flip-strip flex w-max min-w-full flex-col motion-safe:transition-transform motion-safe:duration-[520ms] motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
          style={{ transform: `translateY(calc(${-activeIndex} * 1.12em))` }}
        >
          {FLIP_WORDS.map((w) => (
            <span
              key={w}
              className="home-hero-flip-word box-border h-[1.12em] shrink-0 whitespace-nowrap font-semibold leading-[1.12]"
            >
              {w}
            </span>
          ))}
        </span>
      </span>
    </span>
  )
}

function TabletHeroFrame({ src, alt, className = '' }) {
  const frameRef = useRef(null)
  const [ty, setTy] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = frameRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || 1
      const mid = (rect.top + rect.bottom) / 2
      const n = (mid - vh / 2) / (vh * 0.9)
      setTy(Math.max(-28, Math.min(28, n * -36)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`relative z-[5] w-full overflow-visible ${className}`}>
      <div ref={frameRef} className="relative mx-auto w-full max-w-none overflow-visible">
        <div className="relative block w-full max-w-full">
          <div className="relative w-full overflow-visible bg-transparent p-1 leading-[0] sm:p-1.5">
            <div className="origin-center motion-safe:-rotate-[2.25deg] motion-safe:skew-x-[-4deg] motion-reduce:transform-none">
              <div
                className="relative motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-reduce:transform-none"
                style={{ transform: `translate3d(0, ${ty}px, 0)` }}
              >
                <img
                  src={src}
                  alt={alt}
                  className="block h-auto max-h-[min(85vh,880px)] w-full max-w-full align-top"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const { theme } = useTheme()
  const { enterDocs } = useDocsShell()
  const navigate = useNavigate()
  const isLight = theme === 'light'

  const onGetStarted = () => {
    enterDocs()
    navigate('/overview')
  }

  const linkClass =
    'inline-block border-b border-transparent text-xs font-medium text-o9-shock transition-colors hover:border-o9-shock dark:text-[#7ca8ff] dark:hover:border-[#7ca8ff]'

  return (
    <div className="relative">
      {/* Full-page ripple + orbit (viewport-fixed; only on Home route) */}
      <div className="pointer-events-none fixed inset-0 z-0 min-h-screen md:pointer-events-auto">
        <BackgroundRippleEffect interactive />
      </div>
      <HeroPatternFullPage isLight={isLight} />

      <div className="relative z-10 space-y-20 md:space-y-28">
        <section className="relative w-full">
          {/* Tight column gap + ~50/50 split so H1 has width for fewer lines; image sits in the other half */}
          <div className="grid w-full grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.18fr)] lg:items-center lg:gap-4 xl:gap-5 2xl:gap-6">
            <div className="min-w-0 overflow-visible text-left lg:pr-1 xl:pr-2">
              <p
                className="mb-6 text-xs font-medium uppercase tracking-[0.08em] text-neutral-500 motion-safe:animate-fade-in-up motion-reduce:animate-none dark:text-neutral-400 sm:text-sm md:mb-8"
                style={{ animationDelay: '0ms' }}
              >
                ONE COMPANY — MULTIPLE PRODUCTS — ONE DESIGN SYSTEM
              </p>

              <h1
                className="text-balance text-left text-[clamp(2rem,4.5vw+1rem,3.75rem)] font-semibold leading-[1.04] tracking-[-0.038em] text-o9ds-light-primary motion-safe:animate-fade-in-up motion-reduce:animate-none dark:text-white md:text-[clamp(2.15rem,4.8vw+1rem,4.1rem)] lg:text-[clamp(2.25rem,3.8vw+1.35rem,4.35rem)] xl:text-[clamp(2.4rem,4.2vw+1.25rem,4.85rem)]"
                style={{ animationDelay: '40ms' }}
              >
                <span className="text-o9ds-light-primary dark:text-white">Build experiences that feel </span>
                <span className="inline-block overflow-visible align-baseline">
                  <RotatingFlipWord />
                </span>
              </h1>

              <p
                className="mt-6 max-w-xl text-xl font-medium leading-snug text-o9ds-light-primary motion-safe:animate-fade-in-up dark:text-neutral-200 md:text-2xl md:leading-relaxed"
                style={{ animationDelay: '90ms' }}
              >
                Design with o9DS. Ship faster with confidence. Scale seamlessly across o9UI.
              </p>

              <div className="mt-10 flex justify-start motion-safe:animate-fade-in-up motion-reduce:animate-none" style={{ animationDelay: '160ms' }}>
                <button
                  type="button"
                  onClick={onGetStarted}
                  className="group relative inline-flex min-h-[48px] min-w-[200px] items-center justify-center overflow-hidden border-2 border-[#010101] bg-[#010101] px-8 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-o9-shock focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white dark:bg-white dark:text-[#010101] dark:focus-visible:ring-offset-black"
                >
                  <span
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:translate-x-full"
                    aria-hidden
                  />
                  <span className="relative flex items-center gap-2 text-white dark:text-[#010101]">
                    Get Started
                    <svg className="h-4 w-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            <div className="relative flex min-h-0 min-w-0 justify-end lg:justify-end lg:pl-0">
              <TabletHeroFrame
                className="mt-2 w-full max-w-full lg:mt-0"
                src="/o9DocGraphics/home-hero-dashboard.svg"
                alt="o9 Design System — Enterprise dashboard with workspaces, filters, and data visualization"
              />
            </div>
          </div>
        </section>

        <section id="home-cards" className="scroll-mt-24 w-full">
          <h2 className="mb-10 max-w-4xl text-left text-[clamp(1.65rem,5.5vw,2.85rem)] font-medium leading-[1.12] tracking-[-0.03em] text-o9ds-light-primary motion-safe:animate-fade-in-up dark:text-white md:mb-14">
            Building Blocks of o9DS
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map(({ title, desc, path, icon, links }, i) => (
              <div
                key={path}
                className="flex flex-col border p-6 transition-all duration-300 hover:shadow-md motion-safe:hover:-translate-y-0.5 motion-safe:animate-fade-in-up"
                style={{
                  animationDelay: `${i * 45}ms`,
                  borderColor: isLight ? '#E5E5E5' : '#404040',
                  backgroundColor: isLight ? '#FFFFFF' : 'transparent',
                }}
                data-o9ds-card={isLight ? 'light-white' : 'dark'}
              >
                <Link to={path} onClick={() => enterDocs()} className="group block min-w-0 flex-1 text-left">
                  <span
                    className="mb-4 flex h-12 w-12 items-center justify-center transition-colors dark:bg-neutral-700 dark:text-neutral-400 group-hover:text-white"
                    data-o9ds-avatar={isLight ? '' : undefined}
                  >
                    <CardIcon name={icon} />
                  </span>
                  <h3 className="mb-2 text-lg font-semibold text-o9ds-light-primary group-hover:underline dark:text-white">{title}</h3>
                  <p className="text-sm leading-relaxed text-o9ds-light-secondary dark:text-neutral-400">{desc}</p>
                </Link>
                {links.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2 border-t border-o9ds-light-border pt-4 dark:border-neutral-700">
                    {links.map(({ label, to }) => (
                      <li key={`${path}-${to}`}>
                        <Link to={to} onClick={() => enterDocs()} className={linkClass}>
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
