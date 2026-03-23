import { useState, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'
import ColorSwatch from '../LayoutComponents/ColorSwatch'
import { PALETTE_ORDER, BRAND_PALETTES, NEUTRALS_PALETTE } from '../tokens/brandColors'
import {
  NEUTRAL_TOKENS,
  o9THEME_TOKENS,
  DARK_THEME_TOKENS,
  ONYXBLACK_TOKENS,
  SKYBLUE_TOKENS,
  FORESTGREEN_TOKENS,
  MIDNIGHTINDIGO_TOKENS,
  FEEDBACK_BLUISH,
  FEEDBACK_GREENISH,
  FEEDBACK_REDISH,
  FEEDBACK_ORANGISH,
  UTILITY_TOKENS,
} from '../tokens/globalColorTokens'
import {
  SEMANTIC_SURFACE,
  SEMANTIC_BORDER,
  SEMANTIC_TEXT,
  SEMANTIC_ICON,
  LIGHT_THEMES,
  THEME_LABELS,
  resolveSemanticToHex,
  resolveSemanticToGlobalName,
  resolveSurfaceThemeHex,
  resolveSurfaceNegativeActiveHex,
  resolveSurfaceWhiteStaticHex,
} from '../tokens/semanticColorTokens'

const tabs = ['Overview', 'Brand Colors', 'Global Tokens', 'Semantic Tokens']

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

function TokenRow({ token, hex, primary, isLight }) {
  const [copied, setCopied] = useState(false)
  const snippet = `var(--${token});`

  const handleCopy = (e) => {
    e.stopPropagation()
    navigator.clipboard.writeText(snippet).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  const rowBorderColor = isLight ? '#E5E5E5' : '#404040'
  return (
    <tr style={{ borderBottom: `1px solid ${rowBorderColor}` }} className="last:border-b-0 group">
      <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">
        {token}
        {primary && <span className="ml-1 px-1 py-0.5 text-[10px] font-medium" style={{ backgroundColor: isLight ? '#E5E5E5' : '#404040', color: isLight ? '#010101' : '#fff' }}>P</span>}
      </td>
      <td className="py-2 px-3">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 border shrink-0" style={{ backgroundColor: hex, borderColor: rowBorderColor }} />
          <span className="font-mono text-o9ds-light-secondary dark:text-neutral-400" style={isLight ? { color: '#303030' } : undefined}>{hex}</span>
        </div>
      </td>
      <td className="py-2 px-3 w-10">
        <button
          onClick={handleCopy}
          className="p-1.5 border opacity-0 group-hover:opacity-100 transition-opacity"
          style={
            copied
              ? { borderColor: '#00c278', backgroundColor: '#00c278', color: '#fff' }
              : isLight ? { borderColor: '#E5E5E5', color: '#303030' } : { borderColor: '#404040', color: '#a3a3a3' }
          }
          title="Copy var()"
          aria-label="Copy code"
        >
          {copied ? <CheckDoubleIcon className="h-3.5 w-3.5" style={{ color: '#fff' }} /> : <CopyIcon className="h-3.5 w-3.5" />}
        </button>
      </td>
    </tr>
  )
}

function TokenTable({ tokens, isLight }) {
  const rowBorderColor = isLight ? '#E5E5E5' : '#404040'
  const tableBg = isLight ? '#FFFFFF' : '#0a0a0a'

  return (
    <div
      className="border overflow-hidden"
      style={{
        borderColor: rowBorderColor,
        backgroundColor: tableBg,
      }}
    >
      <table className="w-full text-sm">
        <thead>
          <tr
            style={isLight ? { backgroundColor: '#F2F2F2', borderBottom: `1px solid ${rowBorderColor}` } : { borderBottom: `1px solid ${rowBorderColor}` }}
            className="dark:bg-neutral-800/50"
          >
            <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Token Name</th>
            <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Hex</th>
            <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white w-10" aria-label="Copy" />
          </tr>
        </thead>
        <tbody>
          {tokens.map(({ token, hex, primary }) => (
            <TokenRow key={token} token={token} hex={hex} primary={primary} isLight={isLight} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

const SEMANTIC_SUBTABS = ['Surface', 'Border', 'Text', 'Icon']

function SemanticTokenRow({ row, lightTheme, isLight, semanticSubTab, resolveHex, resolveName }) {
  const [copied, setCopied] = useState(false)
  const lightHex = resolveHex(row, lightTheme, false)
  const darkHex = resolveHex(row, lightTheme, true)
  const lightModeGlobalName = resolveName(row, lightTheme, false)
  const useSurfaceThemeBg =
    row.token === 'o9ds-color-b-focus-inverse' ||
    row.token === 'o9ds-color-t-inverse' ||
    row.token === 'o9ds-color-i-inverse' ||
    row.token === 'o9ds-color-t-active-inverse' ||
    row.token === 'o9ds-color-i-active-inverse'
  const useSurfaceNegativeActiveBg =
    row.token === 'o9ds-color-t-white-static' || row.token === 'o9ds-color-i-white-static'
  const useSurfaceWhiteStaticBg =
    row.token === 'o9ds-color-t-black-static' || row.token === 'o9ds-color-i-black-static'

  const getCopyText = () => {
    if (semanticSubTab === 'Surface') return `background: var(--${row.token});`
    if (semanticSubTab === 'Border') {
      const style = row.borderStyle === 'dashed' ? 'dashed' : 'solid'
      return `border: 2px ${style} var(--${row.token});`
    }
    if (semanticSubTab === 'Text') return `color: var(--${row.token});`
    if (semanticSubTab === 'Icon') return `color: var(--${row.token});`
    return row.token
  }

  const handleCopy = (e) => {
    e.stopPropagation()
    navigator.clipboard.writeText(getCopyText()).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  const rowBorderColor = isLight ? '#E5E5E5' : '#404040'
  const isBorderTab = semanticSubTab === 'Border'
  const isTextTab = semanticSubTab === 'Text'
  const isIconTab = semanticSubTab === 'Icon'

  const lightTileStyle = isBorderTab
    ? { backgroundColor: 'transparent', border: `2px ${row.borderStyle || 'solid'} ${lightHex}` }
    : isTextTab || isIconTab
      ? null
      : { backgroundColor: lightHex, border: `1px solid ${rowBorderColor}` }
  const darkTileStyle = isBorderTab
    ? { backgroundColor: 'transparent', border: `2px ${row.borderStyle || 'solid'} ${darkHex}` }
    : isTextTab || isIconTab
      ? null
      : { backgroundColor: darkHex, border: `1px solid ${rowBorderColor}` }

  const lightModeCellBg = useSurfaceNegativeActiveBg
    ? resolveSurfaceNegativeActiveHex(lightTheme, false)
    : useSurfaceWhiteStaticBg
      ? resolveSurfaceWhiteStaticHex(lightTheme, false)
      : useSurfaceThemeBg
        ? resolveSurfaceThemeHex(lightTheme, false)
        : '#FFFFFF'
  const darkModeCellBg = useSurfaceNegativeActiveBg
    ? resolveSurfaceNegativeActiveHex(lightTheme, true)
    : useSurfaceWhiteStaticBg
      ? resolveSurfaceWhiteStaticHex(lightTheme, true)
      : useSurfaceThemeBg
        ? resolveSurfaceThemeHex(lightTheme, true)
        : '#010101'
  const isLightBg = (hex) => !hex || hex === '#FFFFFF' || hex === '#fff' || hex.toLowerCase() === '#ffffff'
  const lightModeCellFg = isLightBg(lightModeCellBg) ? '#303030' : '#FFFFFF'
  const darkModeCellFg = isLightBg(darkModeCellBg) ? '#010101' : '#FFFFFF'

  const isWhiteOrVeryLight = (hex) => {
    if (!hex) return false
    const h = hex.toLowerCase()
    if (h === '#fff' || h === '#ffffff') return true
    const m = hex.match(/^#?([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i)
    if (!m) return false
    const r = parseInt(m[1], 16) / 255
    const g = parseInt(m[2], 16) / 255
    const b = parseInt(m[3], 16) / 255
    const lum = 0.299 * r + 0.587 * g + 0.114 * b
    return lum > 0.9
  }
  const isBlackOrVeryDark = (hex) => {
    if (!hex) return false
    const h = hex.toLowerCase()
    if (h === '#000' || h === '#000000' || h === '#010101') return true
    const m = hex.match(/^#?([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i)
    if (!m) return false
    const r = parseInt(m[1], 16) / 255
    const g = parseInt(m[2], 16) / 255
    const b = parseInt(m[3], 16) / 255
    const lum = 0.299 * r + 0.587 * g + 0.114 * b
    return lum < 0.08
  }
  const needsContrastBackdrop = !useSurfaceThemeBg && !useSurfaceNegativeActiveBg && !useSurfaceWhiteStaticBg
  const lightSwatchBg = (isTextTab || isIconTab) && needsContrastBackdrop && isWhiteOrVeryLight(lightHex) ? '#404040' : 'transparent'
  const darkSwatchBg = (isTextTab || isIconTab) && needsContrastBackdrop && isBlackOrVeryDark(darkHex) ? '#525252' : 'transparent'

  return (
    <tr style={{ borderBottom: `1px solid ${rowBorderColor}` }} className="last:border-b-0 group">
      <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{row.token}</td>
      <td className="py-2 px-3" style={{ backgroundColor: lightModeCellBg }}>
        <div className="flex items-center gap-2">
          {isTextTab ? (
            <div className="shrink-0 min-w-8 h-6 px-1 rounded flex items-center justify-center" style={{ backgroundColor: lightSwatchBg }}>
              <span className="text-base font-medium leading-none o9ds-swatch" style={{ ['--o9ds-swatch-color']: lightHex, color: 'var(--o9ds-swatch-color)' }} title={lightHex} data-o9ds-swatch>Ab1@</span>
            </div>
          ) : isIconTab ? (
            <div className="shrink-0 w-6 h-6 rounded flex items-center justify-center" style={{ backgroundColor: lightSwatchBg }}>
              <span className="o9con o9con-info-circle o9ds-icon-20 o9ds-swatch" style={{ ['--o9ds-swatch-color']: lightHex, color: 'var(--o9ds-swatch-color)', fontSize: '20px' }} title={lightHex} aria-hidden />
            </div>
          ) : (
            <div className="h-6 w-6 shrink-0" style={lightTileStyle} title={lightHex} />
          )}
          <span className="font-mono" style={{ color: lightModeCellFg }}>{lightModeGlobalName}</span>
        </div>
      </td>
      <td className="py-2 px-3" style={{ backgroundColor: darkModeCellBg }}>
        <div className="flex items-center gap-2">
          {isTextTab ? (
            <div className="shrink-0 min-w-8 h-6 px-1 rounded flex items-center justify-center" style={{ backgroundColor: darkSwatchBg }}>
              <span className="text-base font-medium leading-none o9ds-swatch" style={{ ['--o9ds-swatch-color']: darkHex, color: 'var(--o9ds-swatch-color)' }} title={darkHex} data-o9ds-swatch>Ab1@</span>
            </div>
          ) : isIconTab ? (
            <div className="shrink-0 w-6 h-6 rounded flex items-center justify-center" style={{ backgroundColor: darkSwatchBg }}>
              <span className="o9con o9con-info-circle o9ds-icon-20 o9ds-swatch" style={{ ['--o9ds-swatch-color']: darkHex, color: 'var(--o9ds-swatch-color)', fontSize: '20px' }} title={darkHex} aria-hidden />
            </div>
          ) : (
            <div className="h-6 w-6 shrink-0" style={darkTileStyle} title={darkHex} />
          )}
          <span className="font-mono" style={{ color: darkModeCellFg }}>{row.darkGlobal}</span>
        </div>
      </td>
      <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400 text-sm" style={isLight ? { color: '#303030' } : undefined}>
        {row.useCase}
      </td>
      <td className="py-2 px-3 w-10">
        <button
          onClick={handleCopy}
          className="p-1.5 border opacity-0 group-hover:opacity-100 transition-opacity"
          style={
            copied
              ? { borderColor: '#00c278', backgroundColor: '#00c278', color: '#fff' }
              : isLight ? { borderColor: '#E5E5E5', color: '#303030' } : { borderColor: '#404040', color: '#a3a3a3' }
          }
          title="Copy usage snippet"
          aria-label="Copy usage snippet"
        >
          {copied ? <CheckDoubleIcon className="h-3.5 w-3.5" style={{ color: '#fff' }} /> : <CopyIcon className="h-3.5 w-3.5" />}
        </button>
      </td>
    </tr>
  )
}

function SemanticTokenTable({ tokens, lightTheme, isLight, semanticSubTab }) {
  const rowBorderColor = isLight ? '#E5E5E5' : '#404040'
  const tableBg = isLight ? '#FFFFFF' : '#0a0a0a'

  return (
    <div
      className="border overflow-hidden"
      style={{
        borderColor: rowBorderColor,
        backgroundColor: tableBg,
      }}
    >
      <table className="w-full text-sm">
        <thead>
          <tr
            style={isLight ? { backgroundColor: '#F2F2F2', borderBottom: `1px solid ${rowBorderColor}` } : { borderBottom: `1px solid ${rowBorderColor}` }}
            className="dark:bg-neutral-800/50"
          >
            <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Token Name</th>
            <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Light Mode ({THEME_LABELS[lightTheme]})</th>
            <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Dark Mode</th>
            <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Use Case</th>
            <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white w-10" aria-label="Copy" />
          </tr>
        </thead>
        <tbody>
          {tokens.map((row) => (
            <SemanticTokenRow
              key={row.token}
              row={row}
              lightTheme={lightTheme}
              isLight={isLight}
              semanticSubTab={semanticSubTab}
              resolveHex={resolveSemanticToHex}
              resolveName={resolveSemanticToGlobalName}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

const SEMANTIC_DATA = { Surface: SEMANTIC_SURFACE, Border: SEMANTIC_BORDER, Text: SEMANTIC_TEXT, Icon: SEMANTIC_ICON }
const SEMANTIC_COUNTS = {
  Surface: SEMANTIC_SURFACE.length,
  Border: SEMANTIC_BORDER.length,
  Text: SEMANTIC_TEXT.length,
  Icon: SEMANTIC_ICON.length,
}

export default function Colors() {
  const [activeTab, setActiveTab] = useState('Overview')
  const [semanticSubTab, setSemanticSubTab] = useState('Surface')
  const [lightTheme, setLightTheme] = useState('o9theme')
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
                  className="group flex gap-4 items-start border dark:border-neutral-700 p-4 shadow-sm"
                  style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#FFFFFF' } : { backgroundColor: 'transparent' }}
                >
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center text-sm font-bold transition-colors dark:bg-neutral-700 dark:text-neutral-400 group-hover:text-white"
                    data-o9ds-avatar={isLight ? '' : undefined}
                  >
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
                      <span style={isLight ? { color: '#303030' } : undefined} className="dark:text-neutral-400"> — {usage}</span>
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
        <section className="space-y-10">
          {/* Neutral Colors */}
          <div>
            <h2 className="text-lg font-semibold text-o9ds-light-primary dark:text-white mb-2">Neutral Colors</h2>
            <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 mb-4 max-w-2xl" style={isLight ? { color: '#303030' } : undefined}>
              Base grayscale colors ranging from pure black to pure white, providing the foundation for backgrounds, text, and borders.
            </p>
            <TokenTable tokens={NEUTRAL_TOKENS} isLight={isLight} />
          </div>

          {/* o9 Theme (default light) */}
          <div>
            <h2 className="text-lg font-semibold text-o9ds-light-primary dark:text-white mb-2">o9 Theme</h2>
            <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 mb-4" style={isLight ? { color: '#303030' } : undefined}>
              Default theme in light mode.
            </p>
            <TokenTable tokens={o9THEME_TOKENS} isLight={isLight} />
          </div>

          {/* Dark Mode Theme */}
          <div>
            <h2 className="text-lg font-semibold text-o9ds-light-primary dark:text-white mb-2">Dark Mode Theme</h2>
            <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 mb-4" style={isLight ? { color: '#303030' } : undefined}>
              o9 theme in dark mode.
            </p>
            <TokenTable tokens={DARK_THEME_TOKENS} isLight={isLight} />
          </div>

          {/* Secondary Themes */}
          <div>
            <h2 className="text-lg font-semibold text-o9ds-light-primary dark:text-white mb-2">Secondary Themes</h2>
            <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 mb-4" style={isLight ? { color: '#303030' } : undefined}>
              Forest Green, Onyx Black, Midnight Indigo, and Sky Blue.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-medium text-o9ds-light-primary dark:text-white mb-3">Forest Green</h3>
                <TokenTable tokens={FORESTGREEN_TOKENS} isLight={isLight} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-o9ds-light-primary dark:text-white mb-3">Onyx Black</h3>
                <TokenTable tokens={ONYXBLACK_TOKENS} isLight={isLight} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-o9ds-light-primary dark:text-white mb-3">Midnight Indigo</h3>
                <TokenTable tokens={MIDNIGHTINDIGO_TOKENS} isLight={isLight} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-o9ds-light-primary dark:text-white mb-3">Sky Blue</h3>
                <TokenTable tokens={SKYBLUE_TOKENS} isLight={isLight} />
              </div>
            </div>
          </div>

          {/* Feedback Colors */}
          <div>
            <h2 className="text-lg font-semibold text-o9ds-light-primary dark:text-white mb-2">Feedback Colors</h2>
            <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 mb-4 max-w-2xl" style={isLight ? { color: '#303030' } : undefined}>
              Semantic status colors for communicating system states including error, success, warning, and informational feedback across all interface elements.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-medium text-o9ds-light-primary dark:text-white mb-3">Bluish</h3>
                <TokenTable tokens={FEEDBACK_BLUISH} isLight={isLight} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-o9ds-light-primary dark:text-white mb-3">Greenish</h3>
                <TokenTable tokens={FEEDBACK_GREENISH} isLight={isLight} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-o9ds-light-primary dark:text-white mb-3">Redish</h3>
                <TokenTable tokens={FEEDBACK_REDISH} isLight={isLight} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-o9ds-light-primary dark:text-white mb-3">Orangish</h3>
                <TokenTable tokens={FEEDBACK_ORANGISH} isLight={isLight} />
              </div>
            </div>
          </div>

          {/* Utility Colors */}
          <div>
            <h2 className="text-lg font-semibold text-o9ds-light-primary dark:text-white mb-2">Utility Colors</h2>
            <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 mb-4" style={isLight ? { color: '#303030' } : undefined}>
              Purples, opacity tokens, and green scale — used less frequently.
            </p>
            <TokenTable tokens={UTILITY_TOKENS} isLight={isLight} />
          </div>
        </section>
      )}

      {activeTab === 'Semantic Tokens' && (
        <section className="space-y-6">
          <p className="text-o9ds-light-secondary dark:text-neutral-400">Purpose-driven mappings for surfaces, borders, text, and icons. All semantic tokens map to global tokens—no hardcoded values.</p>

          {/* Theme switcher - reuse Display Options button group styling (data-o9ds-size-selected) */}
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <span className="text-sm dark:text-neutral-400" style={isLight ? { color: '#303030' } : undefined}>Light theme:</span>
            <div className="flex gap-2">
              {LIGHT_THEMES.map((t) => (
                <button
                  key={t}
                  onClick={() => setLightTheme(t)}
                  data-o9ds-size-selected={lightTheme === t ? '' : undefined}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    lightTheme === t ? 'dark:text-black dark:bg-white' : 'border dark:border-neutral-600 dark:text-neutral-400 hover:text-o9ds-light-primary dark:hover:text-white'
                  }`}
                  style={
                    lightTheme === t
                      ? { backgroundColor: isLight ? '#010101' : undefined, color: isLight ? '#FFFFFF' : undefined }
                      : { borderColor: isLight ? '#E5E5E5' : undefined, color: isLight ? '#303030' : undefined }
                  }
                >
                  {THEME_LABELS[t]}
                </button>
              ))}
            </div>
          </div>

          {/* Semantic sub-tabs - reuse existing tabs (data-o9ds-tabs) */}
          <div
            role="tablist"
            className="flex gap-6 border-b border-o9ds-light-border dark:border-neutral-700"
            data-o9ds-tabs
            aria-label="Semantic categories"
          >
            {SEMANTIC_SUBTABS.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={semanticSubTab === tab}
                onClick={() => setSemanticSubTab(tab)}
                data-o9ds-tab-active={semanticSubTab === tab ? '' : undefined}
                className={`pb-3 text-sm font-medium transition-colors border-b-2 flex items-center gap-2 ${
                  semanticSubTab === tab
                    ? 'border-o9ds-light-primary dark:border-white text-o9ds-light-primary dark:text-white'
                    : 'border-transparent text-o9ds-light-secondary hover:text-o9ds-light-primary dark:text-neutral-400 dark:hover:text-neutral-300'
                }`}
              >
                {tab}
                <span
                  className="px-1.5 py-0.5 text-[10px] font-medium min-w-[1.25rem] text-center"
                  style={{
                    backgroundColor: semanticSubTab === tab
                      ? (isLight ? '#E5E5E5' : '#404040')
                      : (isLight ? '#F2F2F2' : '#262626'),
                    color: semanticSubTab === tab ? (isLight ? '#010101' : '#fff') : (isLight ? '#303030' : '#a3a3a3'),
                  }}
                >
                  {SEMANTIC_COUNTS[tab]}
                </span>
              </button>
            ))}
          </div>

          {/* Token table */}
          <SemanticTokenTable
            tokens={SEMANTIC_DATA[semanticSubTab]}
            lightTheme={lightTheme}
            isLight={isLight}
            semanticSubTab={semanticSubTab}
          />
        </section>
      )}
    </div>
  )
}
