import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import CodeBlock from '../components/CodeBlock'
import { BORDER_TOKENS_SCSS } from '../data/borderTokens'

function CopyIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  )
}

function CheckIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}

const BORDER_RADIUS_TOKENS = [
  { token: 'o9ds-radius-16', value: '1rem', px: '16px', copyFormat: 'border-radius: var(--o9ds-radius-16);' },
  { token: 'o9ds-radius-circle', value: '62.438rem', px: '999px (circle)', copyFormat: 'border-radius: var(--o9ds-radius-circle);' },
]

const BORDER_WIDTH_TOKENS = [
  { token: 'o9ds-border-1', value: '0.063rem', px: '1px', usage: 'Default borders', copyFormat: 'border-width: var(--o9ds-border-1);' },
  { token: 'o9ds-border-2', value: '0.125rem', px: '2px', usage: 'Emphasis', copyFormat: 'border-width: var(--o9ds-border-2);' },
  { token: 'o9ds-border-3', value: '0.094rem', px: '1.5px', usage: 'Subtle', copyFormat: 'border-width: var(--o9ds-border-3);' },
]

function BorderTokenRow({ token, value, px, usage, copyFormat, isLight, isWidth }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = (e) => {
    e.stopPropagation()
    navigator.clipboard.writeText(copyFormat).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  return (
    <tr className="border-b dark:border-neutral-700 last:border-b-0" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
      <td className="py-2 px-3 font-mono text-sm" style={{ color: isLight ? '#010101' : '#fff' }}>{token}</td>
      <td className="py-2 px-3 font-mono text-sm" style={{ color: isLight ? '#010101' : '#e5e5e5' }}>{value}</td>
      <td className="py-2 px-3 font-mono text-sm" style={{ color: isLight ? '#303030' : '#a3a3a3' }}>{px}</td>
      {isWidth && (
        <td className="py-2 px-3">
          <div className="h-8 border" style={{ borderWidth: px, borderColor: isLight ? '#010101' : '#fff' }} />
        </td>
      )}
      {usage != null && (
        <td className="py-2 px-3 text-sm" style={{ color: isLight ? '#303030' : '#a3a3a3' }}>{usage}</td>
      )}
      <td className="py-2 px-3 w-12">
        <button
          onClick={handleCopy}
          className="p-1.5 border opacity-0 group-hover:opacity-100 transition-opacity"
          style={
            copied
              ? { borderColor: '#00c278', backgroundColor: '#00c278', color: '#fff' }
              : isLight ? { borderColor: '#E5E5E5', color: '#303030' } : { borderColor: '#404040', color: '#a3a3a3' }
          }
          title="Copy var()"
          aria-label="Copy"
        >
          {copied ? <CheckIcon className="h-3.5 w-3.5" style={{ color: '#fff' }} /> : <CopyIcon className="h-3.5 w-3.5" />}
        </button>
      </td>
    </tr>
  )
}

export default function Borders() {
  const { theme } = useTheme()
  const isLight = theme === 'light'

  return (
    <div className="space-y-8">
      <section>
        <h1 className="group flex items-center gap-2 text-[30px] font-bold mb-4 text-o9ds-light-primary dark:text-white">
          <span className="flex h-8 w-8 items-center justify-center bg-o9ds-light-surface dark:bg-neutral-700" data-o9ds-avatar data-o9ds-avatar-header>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </span>
          Borders & Radius
        </h1>
        <p className="text-lg text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl">
          o9ds follows a <strong style={{ color: isLight ? '#010101' : '#fff' }}>0 radius policy</strong> — all UI elements use sharp corners with no border radius. Border radius and width tokens are available for exceptions.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-o9ds-light-primary dark:text-white">Policy</h2>
        <div>
          <p className="text-o9ds-light-secondary dark:text-neutral-300 mb-4" style={isLight ? { color: '#303030' } : undefined}>
            Border radius is set to 0 across the design system. Buttons, inputs, cards, badges, and all components use sharp (90°) corners only.
          </p>
          <CodeBlock
            code={`/* All elements */
border-radius: 0;

/* Tailwind: borderRadius plugin disabled */`}
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-o9ds-light-primary dark:text-white">Border Radius Tokens</h2>
        <div className="border overflow-hidden group" style={{ borderColor: isLight ? '#E5E5E5' : undefined, backgroundColor: isLight ? '#FFFFFF' : undefined }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Token Name</th>
                <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Value (rem)</th>
                <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Value (px)</th>
                <th className="py-2 px-3 w-12" aria-label="Copy" />
              </tr>
            </thead>
            <tbody>
              {BORDER_RADIUS_TOKENS.map((row) => (
                <BorderTokenRow key={row.token} {...row} isLight={isLight} isWidth={false} usage={null} />
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-o9ds-light-primary dark:text-white">Border Width Tokens</h2>
        <div className="border overflow-hidden group" style={{ borderColor: isLight ? '#E5E5E5' : undefined, backgroundColor: isLight ? '#FFFFFF' : undefined }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Token Name</th>
                <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Value (rem)</th>
                <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Value (px)</th>
                <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Preview</th>
                <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Usage</th>
                <th className="py-2 px-3 w-12" aria-label="Copy" />
              </tr>
            </thead>
            <tbody>
              {BORDER_WIDTH_TOKENS.map((row) => (
                <BorderTokenRow key={row.token} {...row} isLight={isLight} isWidth />
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-o9ds-light-primary dark:text-white">Border Tokens</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-4 max-w-2xl">
          Copy the SCSS variables below to use border radius and width tokens in your project.
        </p>
        <CodeBlock code={BORDER_TOKENS_SCSS} label="SCSS variables" />
      </section>
    </div>
  )
}
