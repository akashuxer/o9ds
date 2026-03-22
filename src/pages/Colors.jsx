import { useState, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'
import ColorSwatch from '../components/ColorSwatch'
import CodeBlock from '../components/CodeBlock'
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
          <section>
            <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white mb-4">Color System Overview</h2>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-6 max-w-2xl">
              The o9ds color system is built on two foundational layers:
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="border dark:border-neutral-700 dark:bg-transparent p-6 shadow-sm" style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#F2F2F2' } : undefined}>
                <h3 className="font-semibold text-o9ds-light-primary dark:text-white mb-2">Global Tokens</h3>
                <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                  Raw color values organized by theme and purpose (e.g., neutral grays, brand colors,
                  theme variations like Onyx Black, Sky Blue). These are the building blocks.
                </p>
              </div>
              <div className="border dark:border-neutral-700 dark:bg-transparent p-6 shadow-sm" style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#F2F2F2' } : undefined}>
                <h3 className="font-semibold text-o9ds-light-primary dark:text-white mb-2">Semantic Tokens</h3>
                <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                  Purpose-driven color assignments that map global tokens to specific UI functions
                  (e.g., brand colors for identity, surface colors for backgrounds, feedback colors for status).
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white mb-4">Usage Guidelines</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-4">
                  <span className="flex h-5 w-5 items-center justify-center bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">●</span>
                  Do
                </h3>
                <ul className="space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                  <li>• Use semantic tokens for component styling.</li>
                  <li>• Reference CSS custom properties in code.</li>
                  <li>• Maintain consistent contrast ratios.</li>
                  <li>• Test colors in both light and dark modes.</li>
                </ul>
              </div>
              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold text-red-600 dark:text-red-400 mb-4">
                  <span className="flex h-5 w-5 items-center justify-center bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400">●</span>
                  Don't
                </h3>
                <ul className="space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                  <li>• Use hardcoded hex values directly.</li>
                  <li>• Mix global tokens with semantic tokens.</li>
                  <li>• Create new colors outside the system.</li>
                  <li>• Ignore accessibility color requirements.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white mb-4">Implementation</h2>
            <CodeBlock
              code={`:root {
  --color-surface: #000000;
  --color-surface-raised: #0a0a0a;
  --color-text-primary: #ffffff;
  --color-text-secondary: #a3a3a3;
  --color-border: #262626;
  --color-brand: #ffffff;
}`}
            />
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
