import { useState, useRef, useMemo } from 'react'
import { useTheme } from '../../context/ThemeContext'
import PageWithToc from '../../LayoutComponents/PageWithToc'
import { ILLUSTRATION_SIZE_TOKENS_SCSS } from '../../tokens/illustrationTokens'
import CodeBlock from '../../LayoutComponents/CodeBlock'

const tabs = ['Overview', 'o9Illus Gallery', 'Accessibility', 'Code']

const ILLUSTRATIONS = [
  { name: 'dashboard', label: 'Dashboard', srcDark: '/o9illus/dark/o9illus-dark-dashboard.svg', srcLight: '/o9illus/light/o9illus-light-dashboard.svg' },
  { name: 'document', label: 'Document', srcDark: '/o9illus/dark/o9illus-dark-document.svg', srcLight: '/o9illus/light/o9illus-light-document.svg' },
  { name: 'favorites', label: 'Favorites', srcDark: '/o9illus/dark/o9illus-dark-favorites.svg', srcLight: '/o9illus/light/o9illus-light-favorites.svg' },
  { name: 'help', label: 'Help', srcDark: '/o9illus/dark/o9illus-dark-help.svg', srcLight: '/o9illus/light/o9illus-light-help.svg' },
  { name: 'no-filter-results', label: 'No Filter Results', srcDark: '/o9illus/dark/o9illus-dark-no-filter-results.svg', srcLight: '/o9illus/light/o9illus-light-no-filter-results.svg' },
  { name: 'no-filters-found', label: 'No Filters Found', srcDark: '/o9illus/dark/o9illus-dark-no-filter-results-found.svg', srcLight: '/o9illus/light/o9illus-light-no-filters-found.svg' },
  { name: 'no-form-configured', label: 'No Form Configured', srcDark: '/o9illus/dark/o9illus-dark-no-form-configured.svg', srcLight: '/o9illus/light/o9illus-light-no-form-configured.svg' },
  { name: 'no-notifications', label: 'No Notifications', srcDark: '/o9illus/dark/o9illus-dark-no-notifications.svg', srcLight: '/o9illus/light/o9illus-light-no-notifications.svg' },
  { name: 'no-post', label: 'No Post', srcDark: '/o9illus/dark/o9illus-dark-no-post.svg', srcLight: '/o9illus/light/o9illus-light-no-post.svg' },
  { name: 'no-report', label: 'No Report', srcDark: '/o9illus/dark/o9illus-dark-no-report.svg', srcLight: '/o9illus/light/o9illus-light-no-report.svg' },
  { name: 'no-results-found', label: 'No Results Found', srcDark: '/o9illus/dark/o9illus-dark-no-results-found.svg', srcLight: '/o9illus/light/o9illus-light-no-results-found.svg' },
  { name: 'no-slides', label: 'No Slides', srcDark: '/o9illus/dark/o9illus-dark-no-slides.svg', srcLight: '/o9illus/light/o9illus-light-no-slides.svg' },
  { name: 'no-tasks', label: 'No Tasks', srcDark: '/o9illus/dark/o9illus-dark-no-tasks.svg', srcLight: '/o9illus/light/o9illus-light-no-tasks.svg' },
  { name: 'restricted-access', label: 'Restricted Access', srcDark: '/o9illus/dark/o9illus-dark-no-restricted-access.svg', srcLight: '/o9illus/light/o9illus-light-restricted-access.svg' },
  { name: 'server-error', label: 'Server Error', srcDark: '/o9illus/dark/o9illus-dark-server-error.svg', srcLight: '/o9illus/light/o9illus-light-server-error.svg' },
  { name: 'settings', label: 'Settings', srcDark: '/o9illus/dark/o9illus-dark-settings.svg', srcLight: '/o9illus/light/o9illus-light-settings.svg' },
]

const SIZES = [80, 120, 200, 280]

const DESIGN_PRINCIPLES = [
  {
    title: 'Simplicity First',
    desc: 'Clean, flat design language that complements the o9 brand aesthetic without overwhelming the interface or distracting from core functionality.',
  },
  {
    title: 'Clarity & Purpose',
    desc: 'Each illustration serves a specific purpose, whether communicating system states, guiding user actions, or providing contextual feedback.',
  },
  {
    title: 'Brand Consistency',
    desc: 'Integral part of the o9 brand identity, maintaining visual consistency across all touchpoints and user interactions.',
  },
  {
    title: 'User Guidance',
    desc: 'Transform empty states into opportunities for engagement, providing clear next steps and maintaining user context.',
  },
]

function CopyIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  )
}

function CheckDoubleIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l4 4 9-9" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 16l3 3 7-7" />
    </svg>
  )
}

function IllustrationCard({ item, size }) {
  const [copied, setCopied] = useState(false)
  const { theme } = useTheme()
  const isLight = theme === 'light'
  const src = isLight ? item.srcLight : item.srcDark
  const snippet = `<div class="o9ds-illus o9ds-illus--${item.name} o9ds-illus-${size}"></div>`

  const handleCopy = (e) => {
    e.stopPropagation()
    navigator.clipboard.writeText(snippet).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  return (
    <div
      className="group border dark:border-neutral-700 overflow-hidden shadow-sm hover:shadow-md dark:hover:border-neutral-600 transition-all"
      style={{
        backgroundColor: isLight ? '#FFFFFF' : '#171717',
        borderColor: isLight ? '#E5E5E5' : undefined,
      }}
      data-o9ds-card={isLight ? 'light-white' : 'dark'}
    >
      <div className="flex flex-col items-center p-6">
        <div className="flex items-center justify-center shrink-0 overflow-hidden" style={{ width: size, height: size }}>
          <img
            src={src}
            alt={item.label}
            className="w-full h-full object-contain"
            style={{ width: size, height: size }}
          />
        </div>
        <div className="mt-4 flex flex-col items-center gap-1 w-full">
          <span
            className="text-sm font-medium dark:text-white"
            style={isLight ? { color: '#010101' } : { color: '#fff' }}
          >
            {item.label}
          </span>
          <button
            onClick={handleCopy}
            className="p-1.5 border opacity-0 group-hover:opacity-100 transition-opacity"
            style={
              copied
                ? { borderColor: '#00c278', backgroundColor: '#00c278', color: '#fff' }
                : isLight ? { borderColor: '#E5E5E5', color: '#303030' } : { borderColor: '#404040', color: '#a3a3a3' }
            }
            title="Copy code"
            aria-label="Copy code"
          >
            {copied ? <CheckDoubleIcon className="h-3.5 w-3.5" style={{ color: '#fff' }} /> : <CopyIcon className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Illustrations() {
  const [activeTab, setActiveTab] = useState('Overview')
  const [selectedSize, setSelectedSize] = useState(120)
  const tabListRef = useRef(null)
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const onThisPageSections = useMemo(() => {
    if (activeTab === 'Overview') {
      return [
        { id: 'o9illus-philosophy', label: 'o9Illus Design Philosophy' },
        { id: 'usage-guidelines', label: 'Usage Guidelines' },
        { id: 'sizes', label: 'Sizes' },
      ]
    }
    if (activeTab === 'o9Illus Gallery') {
      return [
        { id: 'illus-display-options', label: 'Display Options' },
        { id: 'o9illus-library', label: 'o9Illus Library' },
      ]
    }
    if (activeTab === 'Accessibility') return [{ id: 'illus-accessibility', label: 'Illustration Accessibility' }]
    if (activeTab === 'Code') return [{ id: 'illus-implementation', label: 'Implementation' }, { id: 'illus-size-tokens', label: 'Illustration Size Tokens' }]
    return []
  }, [activeTab])

  const handleTabKeyDown = (e) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return
    const idx = tabs.indexOf(activeTab)
    if (idx < 0) return
    let next
    if (e.key === 'ArrowRight') next = (idx + 1) % tabs.length
    else next = (idx - 1 + tabs.length) % tabs.length
    e.preventDefault()
    setActiveTab(tabs[next])
    setTimeout(() => tabListRef.current?.children?.[next]?.focus(), 0)
  }

  return (
    <PageWithToc sections={onThisPageSections}>
    <div className="max-w-4xl space-y-8">
      <section>
        <h1 className="group flex items-center gap-2 text-[30px] font-bold text-o9ds-light-primary dark:text-white pb-2">
          <span
            className="flex h-8 w-8 items-center justify-center dark:bg-neutral-700"
            data-o9ds-avatar
            data-o9ds-avatar-header
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </span>
          Illustrations &quot;o9Illus&quot;
        </h1>
        <p className="mt-4 text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed">
          As part of the new o9 Design System, we are introducing o9Illus, a collection of flat illustrations that are an integral part of the o9 brand.
        </p>

        <div
          ref={tabListRef}
          role="tablist"
          className="mt-6 flex gap-6 border-b border-o9ds-light-border dark:border-neutral-700"
          data-o9ds-tabs
          onKeyDown={handleTabKeyDown}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              tabIndex={activeTab === tab ? 0 : -1}
              onClick={() => setActiveTab(tab)}
              data-o9ds-tab-active={activeTab === tab ? '' : undefined}
              className={`pb-3 text-sm font-medium transition-colors border-b-2 ${
                activeTab === tab
                  ? 'border-o9ds-light-primary dark:border-white text-o9ds-light-primary dark:text-white'
                  : 'border-transparent text-o9ds-light-secondary hover:text-o9ds-light-primary dark:text-neutral-400 dark:hover:text-neutral-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {activeTab === 'Overview' && (
        <>
          <section id="o9illus-philosophy" className="border dark:border-neutral-700 p-6 md:p-8 shadow-sm bg-o9ds-light-surface dark:bg-transparent">
            <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white mb-2">o9Illus Design Philosophy</h2>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-6">
              Meaningful visuals that enhance user experience and guide interactions
            </p>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-8 leading-relaxed">
              Our illustration design philosophy is built on four fundamental principles that ensure consistency, clarity, and usability across all interface elements. These principles guide every aspect of our illustration creation and selection process.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {DESIGN_PRINCIPLES.map(({ title, desc }) => (
                <div
                key={title}
                className="border dark:border-neutral-700 p-6 dark:bg-neutral-800/50 shadow-sm"
                style={{ borderColor: isLight ? '#E5E5E5' : undefined, backgroundColor: isLight ? '#FFFFFF' : undefined }}
              >
                  <h3 className="font-semibold text-o9ds-light-primary dark:text-white mb-2">• {title}</h3>
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="usage-guidelines">
            <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white mb-4">Usage Guidelines</h2>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-6">Best practices for implementing o9Illus in your interfaces</p>
            <div className="border dark:border-neutral-700 p-6 space-y-6 shadow-sm dark:bg-transparent" style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#FFFFFF' } : undefined}>
              <div>
                <h3 className="font-semibold text-o9ds-light-primary dark:text-white mb-3">When to Use Illustrations</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                  <li>Empty states to guide users toward their next action</li>
                  <li>Error states to provide context and reassurance</li>
                  <li>Success confirmations to celebrate user achievements</li>
                  <li>Onboarding flows to welcome and orient new users</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-o9ds-light-primary dark:text-white mb-3">Size Selection</h3>
                <ul className="space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                  <li><strong className="text-o9ds-light-primary dark:text-white">80px</strong> — Compact illustrations for tight layouts and inline states</li>
                  <li><strong className="text-o9ds-light-primary dark:text-white">120px</strong> — Default size for most empty states and modal dialogs</li>
                  <li><strong className="text-o9ds-light-primary dark:text-white">200px</strong> — Medium-large illustrations for section empty states</li>
                  <li><strong className="text-o9ds-light-primary dark:text-white">280px</strong> — Largest size for prominent empty states and landing pages</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="sizes">
            <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white mb-4">Sizes</h2>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-4">
              Illustration usage has been made simple like our icons. Selectors are all that's needed for rendering an illustration in an element.
            </p>
            <div className="space-y-4 mb-6">
              <div>
                <p className="text-sm font-medium text-o9ds-light-secondary dark:text-neutral-400 mb-1">Selectors include:</p>
                <div className="space-y-2">
                  <CodeBlock code="o9ds-illus" label="Base" />
                  <CodeBlock code={'.o9ds-illus--{illus-name}'} label="Illustration" />
                  <CodeBlock code={SIZES.map((s) => `.o9ds-illus-${s}`).join('   ')} label="Size" />
                </div>
              </div>
            </div>
            <div className="border dark:border-neutral-700 p-8 dark:bg-neutral-800/50 shadow-sm" style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#FFFFFF' } : undefined}>
              <div className="flex flex-wrap items-end justify-center gap-12">
                {SIZES.map((s) => (
                  <div key={s} className="flex flex-col items-center">
                    <div className="flex items-center justify-center overflow-hidden" style={{ width: s, height: s, backgroundColor: isLight ? '#FFFFFF' : '#171717' }}>
                      <img src={isLight ? '/o9illus/light/o9illus-light-dashboard.svg' : '/o9illus/dark/o9illus-dark-dashboard.svg'} alt="Dashboard" style={{ width: s, height: s }} className="object-contain" />
                    </div>
                    <p className="mt-3 text-sm font-medium text-o9ds-light-primary dark:text-white">{s}px</p>
                    <p className="text-xs text-o9ds-light-secondary dark:text-neutral-400">o9ds-illus-{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {activeTab === 'o9Illus Gallery' && (
        <>
          <section id="illus-display-options">
            <h2 className="text-lg font-semibold text-o9ds-light-primary dark:text-white mb-2">Display Options</h2>
            <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 mb-4">Customize how illustrations are displayed in the gallery</p>
            <div className="flex flex-wrap items-center gap-4 mb-2">
              <span className="text-sm dark:text-neutral-400" style={isLight ? { color: '#303030' } : undefined}>Illustration Size:</span>
              <div className="flex gap-2">
                {SIZES.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    data-o9ds-size-selected={selectedSize === s ? '' : undefined}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      selectedSize === s
                        ? 'dark:text-black dark:bg-white'
                        : 'border dark:border-neutral-600 dark:text-neutral-400 hover:text-o9ds-light-primary dark:hover:text-white'
                    }`}
                    style={
                      selectedSize === s
                        ? { backgroundColor: isLight ? '#010101' : undefined, color: isLight ? '#FFFFFF' : undefined }
                        : { borderColor: isLight ? '#E5E5E5' : undefined, color: isLight ? '#303030' : undefined }
                    }
                  >
                    {s}
                  </button>
                ))}
              </div>
              <span className="text-sm dark:text-neutral-400" style={isLight ? { color: '#303030' } : undefined}>Current: {selectedSize}px</span>
            </div>
          </section>

          <section id="o9illus-library">
            <h2 className="text-lg font-semibold text-o9ds-light-primary dark:text-white mb-2">
              o9Illus Library
              <span
                className="ml-2 inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium dark:bg-neutral-700 dark:text-neutral-400"
                style={isLight ? { backgroundColor: '#010101', color: '#FFFFFF' } : undefined}
              >
                {ILLUSTRATIONS.length}
              </span>
            </h2>
            <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 mb-6">
              Click "Copy" to get the HTML code for the illustration. All illustrations include proper semantic markup for accessibility.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ILLUSTRATIONS.map((item) => (
                <IllustrationCard key={item.name} item={item} size={selectedSize} />
              ))}
            </div>
          </section>
        </>
      )}

      {activeTab === 'Accessibility' && (
        <section id="illus-accessibility" className="border dark:border-neutral-700 p-6 md:p-8 shadow-sm dark:bg-transparent" style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#FFFFFF' } : undefined}>
          <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white mb-4">Illustration Accessibility</h2>
          <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed mb-6">
            All o9Illus illustrations are designed with accessibility in mind. Each illustration includes proper semantic markup and can be paired with descriptive text or aria-labels for screen reader users.
          </p>
          <ul className="list-disc list-inside space-y-2 text-o9ds-light-secondary dark:text-neutral-400">
            <li>Use decorative images (aria-hidden) when the illustration does not convey unique information</li>
            <li>Provide alt text or accompanying copy when the illustration communicates meaningful content</li>
            <li>Ensure sufficient contrast between illustrations and their backgrounds</li>
          </ul>
        </section>
      )}

      {activeTab === 'Code' && (
        <section id="illus-implementation" className="space-y-8">
          <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Implementation</h2>
          <p className="text-o9ds-light-secondary dark:text-neutral-400">Use the following HTML structure to render an illustration:</p>
          <div className="relative">
            <CodeBlock
              code={`<div class="o9ds-illus o9ds-illus--dashboard o9ds-illus-120"></div>`}
              label="Example: Dashboard at 120px"
            />
          </div>
          <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
            Replace <code className="px-1 py-0.5" data-o9ds-inline-code>dashboard</code> with the illustration name (e.g. dashboard, document, favorites, help, no-filter-results, no-filters-found, no-form-configured, no-notifications, no-post, no-report, no-results-found, no-slides, no-tasks, restricted-access, server-error, settings) and <code className="px-1 py-0.5" data-o9ds-inline-code>120</code> with the desired size (80, 120, 200, 280).
          </p>

          <div id="illus-size-tokens">
            <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white mb-3">Illustration Size Tokens</h3>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-4">Copy the SCSS variables for illustration sizes:</p>
            <CodeBlock code={ILLUSTRATION_SIZE_TOKENS_SCSS} label="o9Illus size tokens" />
          </div>
        </section>
      )}
    </div>
    </PageWithToc>
  )
}
