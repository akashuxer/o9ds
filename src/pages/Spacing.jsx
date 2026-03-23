import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import CodeBlock from '../LayoutComponents/CodeBlock'
import { SPACING_TOKENS, SPACING_TOKENS_SCSS } from '../tokens/spacingTokens'

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

function TokenRow({ token, value, px, preview, varFormat, isLight }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = (e) => {
    e.stopPropagation()
    navigator.clipboard.writeText(varFormat).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  return (
    <tr className="border-b dark:border-neutral-700 last:border-b-0" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
      <td className="py-2 px-3 font-mono text-sm" style={{ color: isLight ? '#010101' : '#fff' }}>{token}</td>
      <td className="py-2 px-3 font-mono text-sm" style={{ color: isLight ? '#010101' : '#e5e5e5' }}>{value}</td>
      <td className="py-2 px-3 font-mono text-sm" style={{ color: isLight ? '#303030' : '#a3a3a3' }}>{px}</td>
      <td className="py-2 px-3">
        <div className="h-8 bg-o9ds-light-border dark:bg-neutral-600" style={{ width: value }} />
      </td>
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

export default function Spacing() {
  const { theme } = useTheme()
  const isLight = theme === 'light'

  return (
    <div className="space-y-12">
      <section>
        <h1 className="group flex items-center gap-2 text-[30px] font-bold mb-4 text-o9ds-light-primary dark:text-white">
          <span className="flex h-8 w-8 items-center justify-center bg-o9ds-light-surface dark:bg-neutral-700" data-o9ds-avatar data-o9ds-avatar-header>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </span>
          Spacing
        </h1>
        <p className="text-lg text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl mt-4">
          A consistent 4px base unit for padding, margins, and gaps across layouts.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-o9ds-light-primary dark:text-white">Scale</h2>
        <div className="border overflow-hidden" style={{ borderColor: isLight ? '#E5E5E5' : undefined, backgroundColor: isLight ? '#FFFFFF' : undefined }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Token Name</th>
                <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Value (rem)</th>
                <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Value (px)</th>
                <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Preview</th>
                <th className="py-2 px-3 w-12" aria-label="Copy" />
              </tr>
            </thead>
            <tbody className="group">
              {SPACING_TOKENS.map(({ token, value, px }) => (
                <TokenRow
                  key={token}
                  token={token}
                  value={value}
                  px={px}
                  preview={value}
                  varFormat={`var(--${token})`}
                  isLight={isLight}
                />
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-o9ds-light-primary dark:text-white">Spacing Tokens</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-4 max-w-2xl">
          Copy the SCSS variables below to use spacing tokens in your project.
        </p>
        <CodeBlock
          code={SPACING_TOKENS_SCSS}
          label="SCSS variables"
        />
      </section>
    </div>
  )
}
