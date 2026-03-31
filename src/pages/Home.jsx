import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import PageWithToc from '../LayoutComponents/PageWithToc'

const HOME_SECTIONS = [{ id: 'explore', label: 'Explore the design system' }]

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
  { title: 'Get Started', desc: 'Overview, principles, and how to use the design system', path: '/overview', icon: 'getStarted' },
  { title: 'Foundations', desc: 'Tokens, colors, typography, spacing', path: '/colors', icon: 'foundations' },
  { title: 'Assets', desc: 'Icons and illustrations', path: '/icons', icon: 'assets' },
  { title: 'Components', desc: 'Buttons, inputs, navigation, and more', path: '/components/button', icon: 'components' },
  { title: 'Accessibility', desc: 'WCAG standards and inclusive design', path: '/accessibility', icon: 'accessibility' },
  { title: 'Content Guidelines', desc: 'UX writing and microcopy', path: '/content', icon: 'content' },
  { title: 'Patterns', desc: 'Workflow solutions and layouts', path: '/patterns', icon: 'patterns' },
]

export default function Home() {
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const highlightStyle = isLight
    ? { backgroundColor: 'rgba(255, 229, 0, 0.35)', padding: '0 0.2em', borderRadius: '2px' }
    : { backgroundColor: 'rgba(255, 229, 0, 0.2)', padding: '0 0.2em', borderRadius: '2px', color: '#fff' }

  return (
    <PageWithToc sections={HOME_SECTIONS}>
    <div className="space-y-16">
      {/* Hero Section */}
      <section>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-o9ds-light-primary dark:text-white mb-6 tracking-tight leading-[1.15]">
          Design with Consistency. Build with Confidence. Scale with o9ds
        </h1>
        <div className="border p-6 md:p-8 mb-8" style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#FAFAFA' } : { borderColor: '#262626', backgroundColor: '#0a0a0a' }}>
          <p className="text-lg md:text-xl text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed md:leading-loose max-w-4xl">
            <strong style={{ color: isLight ? '#010101' : '#fff' }}>o9 Design System (o9DS)</strong> is a centralized system of{' '}
            <span className="animate-highlight-pulse" style={highlightStyle}>foundations, components, and patterns</span> that standardize how products are designed and built across the platform. It enables teams to create{' '}
            <span className="animate-highlight-pulse" style={highlightStyle}>consistent, accessible, and scalable</span> enterprise experiences while reducing design and development effort. By aligning design, engineering, and business,{' '}
            <span className="animate-highlight-pulse" style={highlightStyle}>o9DS accelerates product delivery and ensures a unified experience across all workflows</span>.
          </p>
        </div>
        <div
          className="group/hero border overflow-hidden animate-fade-in shadow-sm rounded-lg"
          style={{ borderColor: isLight ? '#E5E5E5' : '#404040', backgroundColor: isLight ? '#F2F2F2' : '#171717' }}
        >
          <div className="relative overflow-hidden">
            <img
              src="/o9DocGraphics/home-hero-dashboard.svg"
              alt="o9 Design System — Enterprise dashboard with workspaces, filters, and data visualization"
              className="w-full h-auto transition-transform duration-500 ease-out group-hover/hero:scale-105"
            />
            {/* Fade-darken gradient from bottom */}
            <div
              className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
              style={{
                background: isLight
                  ? 'linear-gradient(to top, rgba(0,0,0,0.12), transparent)'
                  : 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)',
              }}
            />
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section id="explore">
        <h2 className="text-2xl md:text-3xl font-semibold text-o9ds-light-primary dark:text-white mb-8 mt-12">Explore the design system</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ title, desc, path, icon }, i) => (
            <Link
              key={path}
              to={path}
              className="group block border p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 animate-fade-in-up"
              style={{
                animationDelay: `${i * 60}ms`,
                borderColor: isLight ? '#E5E5E5' : '#404040',
                backgroundColor: isLight ? '#FFFFFF' : 'transparent',
              }}
            data-o9ds-card={isLight ? 'light-white' : 'dark'}
            >
              <span
                className="flex h-12 w-12 items-center justify-center mb-4 transition-colors dark:bg-neutral-700 dark:text-neutral-400 group-hover:text-white"
                data-o9ds-avatar={isLight ? '' : undefined}
              >
                <CardIcon name={icon} />
              </span>
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white mb-2">{title}</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">{desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
    </PageWithToc>
  )
}
