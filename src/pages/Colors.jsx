import { useState, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'
import ColorSwatch from '../components/ColorSwatch'
import { PALETTE_ORDER, BRAND_PALETTES, NEUTRALS_PALETTE } from '../data/brandColors'

const tabs = ['Overview', 'Brand Colors', 'Global Tokens', 'Semantic Tokens']

export default function Colors() {
  const [activeTab, setActiveTab] = useState('Overview')
  const tabListRef = useRef(null)
  const { theme } = useTheme()
  const isLight = theme === 'light'

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
    <div className="max-w-4xl space-y-8">
      <section>
        <h1 className="group flex items-center gap-2 text-[30px] font-bold text-o9ds-light-primary dark:text-white">
          <span className="flex h-8 w-8 items-center justify-center bg-o9ds-light-surface dark:bg-neutral-700" data-o9ds-avatar data-o9ds-avatar-header>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343L12.657 5.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </span>
          Color Tokens
        </h1>
        <p className="mt-4 text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed">
          Color tokens are the visual design atoms of the design system. They are named entities that store
          visual design attributes like colors, typography, spacing, and more.
        </p>

        {/* Tabs */}
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
          {/* Color System Overview */}
          <section>
            <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white mb-2">Color System Overview</h2>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-6 max-w-2xl">
              Understanding the structure and purpose of our color token system
            </p>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-8 max-w-2xl leading-relaxed">
              Our color system is built on two foundational layers: <strong className="text-o9ds-light-primary dark:text-white">Global Tokens</strong> and <strong className="text-o9ds-light-primary dark:text-white">Semantic Tokens</strong>. This approach ensures consistency, maintainability, and flexibility across all design implementations.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="border dark:border-neutral-700 dark:bg-transparent p-6 shadow-sm" style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#F2F2F2' } : undefined}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex h-8 w-8 items-center justify-center dark:bg-neutral-700" aria-hidden>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </span>
                  <h3 className="font-semibold text-o9ds-light-primary dark:text-white">Global Tokens</h3>
                </div>
                <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 mb-4">
                  Raw color values organized by theme and purpose. These are the foundation colors that define our visual identity and provide the building blocks for semantic tokens.
                </p>
                <ul className="space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400 list-disc list-inside">
                  <li>Neutral grays and brand colors</li>
                  <li>Theme variations (o9, Onyx Black, Sky Blue, etc.)</li>
                  <li>Feedback and utility colors</li>
                </ul>
              </div>
              <div className="border dark:border-neutral-700 dark:bg-transparent p-6 shadow-sm" style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#F2F2F2' } : undefined}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex h-8 w-8 items-center justify-center dark:bg-neutral-700" aria-hidden>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  <h3 className="font-semibold text-o9ds-light-primary dark:text-white">Semantic Tokens</h3>
                </div>
                <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 mb-4">
                  Purpose-driven color assignments that map global tokens to specific UI functions. These tokens provide meaning and context to color usage across components.
                </p>
                <ul className="space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400 list-disc list-inside">
                  <li>Brand colors for identity elements</li>
                  <li>Surface colors for backgrounds</li>
                  <li>Feedback colors for status communication</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Color Token Hierarchy */}
          <section>
            <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white mb-4">Color Token Levels</h2>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-6 max-w-2xl">
              A four-tier hierarchy defines how colors flow from raw values to component usage.
            </p>
            <div className="space-y-4">
              {[
                {
                  level: 1,
                  title: 'Hex Code Values',
                  desc: 'Raw color values that form the o9 global color palette provided by the Design Lab team.',
                  example: '#010101',
                },
                {
                  level: 2,
                  title: 'Global Colors',
                  desc: 'Mapped to hex codes with meaningful names for easy reference (e.g., o9ds-global-o9black, o9ds-global-dark-07).',
                  example: 'o9ds-global-o9black',
                },
                {
                  level: 3,
                  title: 'Semantic Color Tokens',
                  desc: 'Assign functional meaning to global colors. Categorized into surface, border, icon, and text for consistency.',
                  example: 'o9ds-color-t-theme',
                },
                {
                  level: 4,
                  title: 'Component-Specific Tokens (Exceptions)',
                  desc: 'Used for specific cases such as form labels, form borders, scroll bars, and neutral hover colors.',
                  example: 'o9ds-color-t-form-value',
                },
              ].map(({ level, title, desc, example }) => (
                <div
                  key={level}
                  className="flex gap-4 items-start border dark:border-neutral-700 p-4 shadow-sm"
                  style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#FFFFFF' } : { backgroundColor: 'transparent' }}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center text-sm font-bold dark:bg-neutral-700" style={isLight ? { backgroundColor: '#010101', color: '#FFFFFF' } : { color: '#fff' }}>
                    {level}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-o9ds-light-primary dark:text-white mb-1">{title}</h3>
                    <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 mb-2">{desc}</p>
                    <code className="text-xs font-mono px-2 py-1 dark:bg-neutral-800" style={isLight ? { backgroundColor: '#F2F2F2', color: '#010101' } : { color: '#a3a3a3' }}>
                      {example}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Token Flow Anatomy */}
          <section>
            <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white mb-4">Referencing Flow</h2>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-6 max-w-2xl">
              How a raw hex value flows through global and semantic tokens to reach a component.
            </p>
            <div className="border dark:border-neutral-700 p-6 shadow-sm" style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#F2F2F2' } : undefined}>
              <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                <div className="flex flex-col items-center gap-2 p-4 border dark:border-neutral-600 rounded" style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#FFFFFF' } : undefined}>
                  <span className="text-xs font-medium text-o9ds-light-secondary dark:text-neutral-400">Level 1 · Hex</span>
                  <div className="h-10 w-10 rounded border dark:border-neutral-600" style={{ backgroundColor: '#010101' }} />
                  <code className="text-sm font-mono text-o9ds-light-primary dark:text-white">#010101</code>
                </div>
                <span className="hidden md:block text-o9ds-light-secondary dark:text-neutral-500">→</span>
                <div className="flex flex-col items-center gap-2 p-4 border dark:border-neutral-600 rounded" style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#FFFFFF' } : undefined}>
                  <span className="text-xs font-medium text-o9ds-light-secondary dark:text-neutral-400">Level 2 · Global</span>
                  <div className="h-10 w-10 rounded border dark:border-neutral-600" style={{ backgroundColor: '#010101' }} />
                  <code className="text-sm font-mono text-o9ds-light-primary dark:text-white">o9ds-global-o9black</code>
                </div>
                <span className="hidden md:block text-o9ds-light-secondary dark:text-neutral-500">→</span>
                <div className="flex flex-col items-center gap-2 p-4 border dark:border-neutral-600 rounded" style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#FFFFFF' } : undefined}>
                  <span className="text-xs font-medium text-o9ds-light-secondary dark:text-neutral-400">Level 3 · Semantic</span>
                  <div className="h-10 w-10 rounded border dark:border-neutral-600" style={{ backgroundColor: '#010101' }} />
                  <code className="text-sm font-mono text-o9ds-light-primary dark:text-white">o9ds-color-t-theme</code>
                </div>
              </div>
            </div>
          </section>

          {/* Naming Convention */}
          <section>
            <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white mb-4">Naming Convention</h2>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-4 max-w-2xl">
              Semantic color tokens follow a four-part structure: <code className="px-1.5 py-0.5 text-sm font-mono dark:bg-neutral-800" style={isLight ? { backgroundColor: '#E5E5E5' } : undefined}>system-category-variant-property</code>
            </p>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-6 max-w-2xl">
              Example: <code className="px-1.5 py-0.5 text-sm font-mono dark:bg-neutral-800 text-o9ds-light-primary dark:text-white" style={isLight ? { backgroundColor: '#E5E5E5', color: '#010101' } : undefined}>o9ds-color-s-negative</code>
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border dark:border-neutral-700" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
                <thead>
                  <tr style={isLight ? { backgroundColor: '#F2F2F2', borderColor: '#E5E5E5' } : undefined} className="border-b dark:border-neutral-700 dark:bg-neutral-800/50">
                    <th className="py-3 px-4 text-left font-medium text-o9ds-light-primary dark:text-white">Part</th>
                    <th className="py-3 px-4 text-left font-medium text-o9ds-light-primary dark:text-white">Definition</th>
                    <th className="py-3 px-4 text-left font-medium text-o9ds-light-primary dark:text-white">Example</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['system', 'Prefix representing the o9 Design System', 'o9ds'],
                    ['category', 'Indicates that this is a color token', 'color'],
                    ['variant', 'Usage category: s (surface), b (border), t (text), i (icon)', 's, b, t, i'],
                    ['property', 'Functional state or purpose', 'primary, secondary, negative, disabled, inverse, positive'],
                  ].map(([part, def, ex]) => (
                    <tr key={part} className="border-b dark:border-neutral-700/50">
                      <td className="py-3 px-4 font-mono text-o9ds-light-primary dark:text-white">{part}</td>
                      <td className="py-3 px-4 text-o9ds-light-secondary dark:text-neutral-400">{def}</td>
                      <td className="py-3 px-4 font-mono text-o9ds-light-secondary dark:text-neutral-400">{ex}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-o9ds-light-primary dark:text-white mb-3">Variant codes</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { code: 's', name: 'surface', usage: 'Backgrounds of containers, cards, windows, buttons' },
                  { code: 'b', name: 'border', usage: 'Outlines, separators, dividers' },
                  { code: 't', name: 'text', usage: 'Text color for content and labels' },
                  { code: 'i', name: 'icon', usage: 'Standalone icons, visual indicators, shapes' },
                ].map(({ code, name, usage }) => (
                  <div key={code} className="flex gap-3 p-3 border dark:border-neutral-700" style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#FFFFFF' } : undefined}>
                    <code className="shrink-0 font-mono text-sm font-semibold text-o9ds-light-primary dark:text-white">({code})</code>
                    <div>
                      <span className="font-medium text-o9ds-light-primary dark:text-white">{name}</span>
                      <span className="text-o9ds-light-secondary dark:text-neutral-400"> — {usage}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Variable Types & Behavior */}
          <section>
            <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white mb-4">Types of Variables & Their Behavior</h2>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-6 max-w-2xl">
              How different token types respond to theme and light/dark mode.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  type: 'Theme-Based',
                  token: 'o9ds-color-s-theme',
                  desc: 'Include theme names. Automatically adjust based on light or dark mode settings. In light mode, match the active theme (o9, sky-blue, forest-green); in dark mode, switch to corresponding dark theme color.',
                },
                {
                  type: 'Non-Theme',
                  token: 'o9ds-color-s-layer-01',
                  desc: 'Do not include a theme name. Stay consistent across all light mode themes but shift to grayscale in dark mode.',
                },
                {
                  type: 'Static',
                  token: 'o9ds-color-i-negative-static',
                  desc: 'Contain the word "static." Remain unchanged regardless of light or dark mode. Often used for semantic status colors like error red.',
                },
                {
                  type: 'Inverse',
                  token: 'o9ds-color-t-inverse',
                  desc: 'Contain the word "inverse." Flip between black and white when switching between light and dark modes.',
                },
              ].map(({ type, token, desc }) => (
                <div
                  key={type}
                  className="border dark:border-neutral-700 p-5 shadow-sm"
                  style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#FFFFFF' } : undefined}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-o9ds-light-primary dark:text-white">{type}</h3>
                    <code className="text-xs font-mono px-2 py-1 dark:bg-neutral-800 truncate max-w-[180px]" style={isLight ? { backgroundColor: '#F2F2F2', color: '#010101' } : { color: '#a3a3a3' }} title={token}>
                      {token}
                    </code>
                  </div>
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Usage Guidelines */}
          <section>
            <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white mb-4">Usage Guidelines</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="border dark:border-neutral-700 p-5" style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#F9FDF9', borderLeftWidth: '4px', borderLeftColor: '#00c278' } : { borderLeftWidth: '4px', borderLeftColor: '#00c278' }}>
                <h3 className="flex items-center gap-2 text-sm font-semibold mb-4" style={{ color: '#00c278' }}>
                  <span>●</span> Do
                </h3>
                <ul className="space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                  <li>• Use semantic tokens for component styling</li>
                  <li>• Reference CSS custom properties in code</li>
                  <li>• Maintain consistent contrast ratios</li>
                  <li>• Test colors in both light and dark modes</li>
                </ul>
              </div>
              <div className="border dark:border-neutral-700 p-5" style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#FDF9F9', borderLeftWidth: '4px', borderLeftColor: '#ff1e39' } : { borderLeftWidth: '4px', borderLeftColor: '#ff1e39' }}>
                <h3 className="flex items-center gap-2 text-sm font-semibold mb-4" style={{ color: '#ff1e39' }}>
                  <span>●</span> Don&apos;t
                </h3>
                <ul className="space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                  <li>• Use hardcoded hex values directly</li>
                  <li>• Mix global tokens with semantic tokens</li>
                  <li>• Create new colors outside the system</li>
                  <li>• Ignore accessibility color requirements</li>
                </ul>
              </div>
            </div>
          </section>
        </>
      )}

      {activeTab === 'Brand Colors' && (
        <>
          <section className="border dark:border-neutral-700 dark:bg-neutral-900/50 p-4 md:p-6 shadow-sm" style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#FFFFFF' } : undefined}>
            <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
              These are the brand palettes which reflect the o9 brand identity. They are used to generate the global
              platform token colors, which are eventually mapped into semantic tokens across the system.
            </p>
          </section>
          <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {BRAND_PALETTES.map(({ name, palette }) => (
              <div key={name} className="border dark:border-neutral-700 overflow-hidden" style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#F2F2F2' } : undefined}>
                <div className="border-b dark:border-neutral-700 px-4 py-3 dark:bg-neutral-800/50" style={isLight ? { borderColor: '#E5E5E5', backgroundColor: 'transparent' } : undefined}>
                  <h3 className="text-sm font-semibold text-o9ds-light-primary dark:text-white">{name}</h3>
                </div>
                <div>
                  {PALETTE_ORDER.map((shade) => (
                    <ColorSwatch
                      key={shade}
                      label={`${name} ${shade}`}
                      hex={palette[shade]}
                    />
                  ))}
                </div>
              </div>
            ))}
            {/* Neutrals column */}
            <div className="border dark:border-neutral-700 overflow-hidden sm:col-span-2 lg:col-span-1" style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#F2F2F2' } : undefined}>
              <div className="border-b dark:border-neutral-700 px-4 py-3 dark:bg-neutral-800/50" style={isLight ? { borderColor: '#E5E5E5', backgroundColor: 'transparent' } : undefined}>
                <h3 className="text-sm font-semibold text-o9ds-light-primary dark:text-white">Neutrals</h3>
              </div>
              <div>
                {Object.entries(NEUTRALS_PALETTE).map(([label, hex]) => (
                  <ColorSwatch key={label} label={label} hex={hex} />
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {activeTab === 'Global Tokens' && (
        <section className="space-y-4">
          <p className="text-o9ds-light-secondary dark:text-neutral-400">Neutral grays and theme-specific palettes.</p>
          <div className="grid gap-2 sm:grid-cols-5">
            {[
              { n: '50', hex: '#fafafa' },
              { n: '100', hex: '#f5f5f5' },
              { n: '200', hex: '#e5e5e5' },
              { n: '300', hex: '#d4d4d4' },
              { n: '400', hex: '#a3a3a3' },
              { n: '500', hex: '#737373' },
              { n: '600', hex: '#525252' },
              { n: '700', hex: '#404040' },
              { n: '800', hex: '#262626' },
              { n: '900', hex: '#171717' },
            ].map(({ n, hex }) => (
              <div key={n} className=" overflow-hidden">
                <div className="h-12" style={{ backgroundColor: hex }} />
                <p className="py-1 text-center text-xs text-o9ds-light-secondary dark:text-neutral-500">{n}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === 'Semantic Tokens' && (
        <section>
          <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-6">Purpose-driven mappings for surfaces, text, and feedback.</p>
          <div className="border border-o9ds-light-border dark:border-neutral-700 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-o9ds-light-border dark:border-neutral-700">
                  <th className="py-3 px-4 text-left font-medium text-o9ds-light-secondary dark:text-neutral-400">Token</th>
                  <th className="py-3 px-4 text-left font-medium text-o9ds-light-secondary dark:text-neutral-400">Usage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['color-surface', 'Page background'],
                  ['color-surface-raised', 'Cards, modals'],
                  ['color-text-primary', 'Headings, body'],
                  ['color-text-secondary', 'Captions, hints'],
                  ['color-border', 'Borders, dividers'],
                  ['color-feedback-success', 'Success states'],
                  ['color-feedback-error', 'Error states'],
                ].map(([token, usage]) => (
                  <tr key={token} className="border-b border-o9ds-light-border dark:border-neutral-700/50">
                    <td className="py-3 px-4 font-mono text-o9ds-light-primary dark:text-white">{token}</td>
                    <td className="py-3 px-4 text-o9ds-light-secondary dark:text-neutral-400">{usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  )
}
