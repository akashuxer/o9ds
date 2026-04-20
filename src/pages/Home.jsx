import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BackgroundRippleEffect } from '@/components/ui/BackgroundRippleEffect'
import { useTheme } from '../context/ThemeContext'
import { useDocsShell } from '../context/DocsShellContext'

/** Flip order: Consistent → Flexible → Accessible → Effortless → Delightful */
const FLIP_WORDS = ['Consistent', 'Flexible', 'Accessible', 'Effortless', 'Delightful']

/** Infographic paths under `public/home/`. */
const HOME_CARD_ILLUSTRATIONS = {
  getStarted: '/home/getStarted.png',
  foundations: '/home/foundations.png',
  assets: '/home/assets.png',
  components: '/home/components.png',
  accessibility: '/home/accessibility.png',
  content: '/home/contentguide.png',
  patterns: '/home/patterns.png',
}

const cards = [
  {
    title: 'Get Started',
    desc: 'Orientation, principles, and how teams adopt o9DS.',
    path: '/overview',
    icon: 'getStarted',
  },
  {
    title: 'Foundations',
    desc: 'Tokens, color, type, spacing, and motion baselines.',
    path: '/foundations',
    icon: 'foundations',
  },
  {
    title: 'Assets',
    desc: 'Iconography and illustration language.',
    path: '/icons',
    icon: 'assets',
  },
  {
    title: 'Components',
    desc: 'Inputs, actions, navigation, and data display.',
    path: '/components',
    icon: 'components',
  },
  {
    title: 'Accessibility',
    desc: 'Inclusive patterns and WCAG-aligned guidance.',
    path: '/accessibility',
    icon: 'accessibility',
  },
  {
    title: 'Content Guidelines',
    desc: 'Voice, tone, and product copy conventions.',
    path: '/content',
    icon: 'content',
  },
  {
    title: 'Patterns',
    desc: 'Common workflows: forms, tables, modals, and more.',
    path: '/patterns',
    icon: 'patterns',
  },
]

function HomeBlockCardIllustration({ illustrationSrc, isLight }) {
  return (
    <div
      className="relative h-[clamp(200px,42vw,300px)] min-h-[200px] w-full shrink-0 overflow-hidden border-b sm:h-[clamp(220px,26vw,300px)] sm:min-h-[220px] lg:h-[clamp(240px,22vw,300px)]"
      style={{
        borderColor: isLight ? '#E5E5E5' : '#404040',
      }}
      aria-hidden
    >
      {/* White band in both themes so the slate dot grid matches light mode visibility (see ComponentOverviewCard). */}
      <div className="absolute inset-0 bg-white" />
      <div
        className="absolute inset-0 opacity-[0.85]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(148, 163, 184, 0.4) 1px, transparent 1px)',
          backgroundSize: '14px 14px',
        }}
      />
      <div className="relative z-10 h-full min-h-0 w-full">
        <img
          src={illustrationSrc}
          alt=""
          className="absolute inset-3 z-[1] h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] max-h-none object-contain object-center sm:inset-4 sm:h-[calc(100%-2rem)] sm:w-[calc(100%-2rem)] motion-safe:transition-[transform,filter] motion-safe:duration-300 motion-safe:ease-out motion-safe:group-hover:scale-[1.04] motion-safe:group-hover:brightness-[1.02] dark:brightness-[0.98] dark:group-hover:brightness-100"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  )
}

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

/** Hero illustration paths — auto-advancing carousel (see TabletHeroFrame). */
const HERO_SLIDES = [
  { src: '/hero-1.svg', alt: 'o9 Design System — hero illustration 1 of 3' },
  { src: '/hero-2.svg', alt: 'o9 Design System — hero illustration 2 of 3' },
  { src: '/hero-3.svg', alt: 'o9 Design System — hero illustration 3 of 3' },
]

const HERO_CAROUSEL_INTERVAL_MS = 5200

function TabletHeroFrame({ slides, className = '' }) {
  const frameRef = useRef(null)
  const indexRef = useRef(0)
  const [ty, setTy] = useState(0)
  const [index, setIndex] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)
  /** When false, X position jumps without CSS transition (used after clone slide to snap back to real slide 1). */
  const [slideTransitionOn, setSlideTransitionOn] = useState(true)

  const loopSlides = useMemo(() => {
    if (slides.length < 2) return slides
    return [...slides, slides[0]]
  }, [slides])

  const slideCount = loopSlides.length
  const lastIndex = slideCount - 1

  useEffect(() => {
    indexRef.current = index
  }, [index])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mq.matches)
    const fn = () => setReduceMotion(mq.matches)
    mq.addEventListener('change', fn)
    return () => mq.removeEventListener('change', fn)
  }, [])

  useEffect(() => {
    if (reduceMotion || slides.length < 2) return
    const id = window.setInterval(() => {
      setIndex((i) => {
        if (i === slides.length - 1) return lastIndex
        return i + 1
      })
    }, HERO_CAROUSEL_INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [reduceMotion, slides.length, lastIndex])

  const handleSlideTransitionEnd = (e) => {
    if (e.propertyName !== 'transform') return
    if (indexRef.current !== lastIndex) return
    setSlideTransitionOn(false)
    setIndex(0)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setSlideTransitionOn(true)
      })
    })
  }

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

  const pct = slideCount ? (100 / slideCount) * index : 0

  const transitionClass =
    reduceMotion || !slideTransitionOn
      ? ''
      : 'motion-safe:transition-transform motion-safe:duration-[680ms] motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none'

  if (reduceMotion || slides.length < 2) {
    return (
      <div className={`relative z-[5] w-full overflow-visible ${className}`}>
        <div ref={frameRef} className="relative mx-auto w-full max-w-none overflow-visible">
          <div className="relative block w-full max-w-full">
            <div className="relative w-full overflow-visible bg-transparent p-1 leading-[0] sm:p-1.5">
              <div
                className="relative motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-reduce:transform-none"
                style={{ transform: `translate3d(0, ${ty}px, 0)` }}
              >
                <div
                  role="region"
                  aria-roledescription="carousel"
                  aria-label="Hero illustrations"
                  className="relative w-full overflow-hidden"
                >
                  <img
                    src={slides[0].src}
                    alt={slides[0].alt}
                    className="block h-auto max-h-[min(85vh,880px)] w-full max-w-full align-top"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative z-[5] w-full overflow-visible ${className}`}>
      <div ref={frameRef} className="relative mx-auto w-full max-w-none overflow-visible">
        <div className="relative block w-full max-w-full">
          <div className="relative w-full overflow-visible bg-transparent p-1 leading-[0] sm:p-1.5">
            <div
              className="relative motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-reduce:transform-none"
              style={{ transform: `translate3d(0, ${ty}px, 0)` }}
            >
              <div
                role="region"
                aria-roledescription="carousel"
                aria-label="Hero illustrations"
                aria-live="polite"
                className="relative w-full overflow-hidden"
              >
                <div
                  className={`flex ${transitionClass}`}
                  style={{
                    width: `${slideCount * 100}%`,
                    transform: `translateX(-${pct}%)`,
                  }}
                  onTransitionEnd={handleSlideTransitionEnd}
                >
                  {loopSlides.map((slide, i) => (
                    <div
                      key={i === lastIndex ? `${slide.src}-loop-clone` : slide.src}
                      className="box-border shrink-0"
                      style={{ width: `${100 / slideCount}%` }}
                      aria-hidden={i !== index}
                    >
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        className="block h-auto max-h-[min(85vh,880px)] w-full max-w-full align-top"
                        loading={i === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                      />
                    </div>
                  ))}
                </div>
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
              <TabletHeroFrame className="mt-2 w-full max-w-full lg:mt-0" slides={HERO_SLIDES} />
            </div>
          </div>
        </section>

        <section id="home-cards" className="scroll-mt-24 w-full">
          <h2 className="mb-10 max-w-4xl text-left text-[clamp(1.65rem,5.5vw,2.85rem)] font-medium leading-[1.12] tracking-[-0.03em] text-o9ds-light-primary motion-safe:animate-fade-in-up dark:text-white md:mb-14">
            Building Blocks of o9DS
          </h2>
          <div className="grid gap-7 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-9">
            {cards.map(({ title, desc, path, icon }, i) => {
              const illustrationSrc = HOME_CARD_ILLUSTRATIONS[icon] ?? null
              return (
                <div
                  key={path}
                  className="flex flex-col overflow-hidden border shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-[box-shadow,transform,border-color] duration-300 hover:border-o9ds-light-primary/25 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] motion-safe:hover:-translate-y-1 motion-safe:animate-fade-in-up dark:border-neutral-700 dark:shadow-[0_2px_12px_rgba(0,0,0,0.35)] dark:hover:border-neutral-500 dark:hover:shadow-[0_16px_48px_rgba(0,0,0,0.45)]"
                  style={{
                    animationDelay: `${i * 45}ms`,
                    borderColor: isLight ? '#E5E5E5' : '#404040',
                    backgroundColor: isLight ? '#FFFFFF' : 'transparent',
                  }}
                  data-o9ds-card={isLight ? 'light-white' : 'dark'}
                >
                  <Link to={path} onClick={() => enterDocs()} className="group block min-w-0 flex-1 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-o9-shock dark:focus-visible:ring-[#7ca8ff]">
                    <HomeBlockCardIllustration illustrationSrc={illustrationSrc} isLight={isLight} />
                    <div className="bg-[#FAFAFA] px-5 pb-6 pt-5 dark:bg-neutral-900/80 sm:px-6">
                      <h3 className="mb-2 text-lg font-semibold tracking-tight text-o9ds-light-primary dark:text-white sm:text-xl">
                        {title}
                      </h3>
                      <p className="text-sm leading-relaxed text-o9ds-light-secondary dark:text-neutral-400 sm:text-[0.9375rem] sm:leading-relaxed">
                        {desc}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.12em] text-o9ds-light-primary dark:text-white sm:text-xs sm:tracking-[0.14em]">
                        <span>Learn more</span>
                        <svg
                          className="h-3 w-3 shrink-0 stroke-current motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:group-hover:translate-x-1 motion-reduce:transition-none"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}
