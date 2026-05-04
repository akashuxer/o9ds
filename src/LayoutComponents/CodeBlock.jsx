import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { highlightCode } from './codeHighlight'

function CopyIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  )
}

/**
 * @param {{ code: string, label?: string, language?: 'html' | 'markup' | 'ts' | 'tsx' | 'js' | 'jsx' | 'bash' | 'json' | 'text' | 'mermaid' | 'scss' | 'auto' }} props
 */
export default function CodeBlock({ code, label, language = 'auto' }) {
  const [copied, setCopied] = useState(false)
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const copy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  const border = isLight ? { borderColor: '#E5E5E5' } : undefined
  const headerBg = isLight ? { backgroundColor: '#FAFAFA' } : { backgroundColor: 'rgba(23, 23, 23, 0.85)' }
  const preBg = isLight ? { backgroundColor: '#F2F2F2', color: '#010101' } : { backgroundColor: 'rgba(38, 38, 38, 0.5)' }

  return (
    <div className="border dark:border-neutral-700 overflow-hidden" style={border} data-arvo-code-block>
      <div
        className={`flex items-center gap-3 min-h-[2.25rem] px-3 py-2 border-b dark:border-neutral-700 ${label ? 'justify-between' : 'justify-end'}`}
        style={headerBg}
      >
        {label ? (
          <p className="text-xs m-0 shrink min-w-0 dark:text-neutral-400" style={isLight ? { color: '#303030' } : undefined}>
            {label}
          </p>
        ) : null}
        <button
          type="button"
          onClick={copy}
          className="shrink-0 inline-flex items-center gap-1.5 text-xs font-medium border px-2.5 py-1.5 transition-colors dark:border-neutral-600 dark:text-neutral-300 hover:text-arvo-light-primary dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/80"
          style={isLight ? { borderColor: '#E5E5E5', color: '#303030' } : undefined}
          aria-label={label ? 'Copy code' : 'Copy code sample'}
          title="Copy to clipboard"
        >
          <CopyIcon className="h-4 w-4 shrink-0" />
          {copied ? <span>Copied!</span> : <span className="hidden sm:inline">Copy</span>}
        </button>
      </div>
      <pre
        className="p-4 text-sm font-mono overflow-x-auto leading-relaxed m-0 dark:text-neutral-200"
        style={preBg}
        data-arvo-code
      >
        <code data-arvo-syntax-block>{highlightCode(code, language)}</code>
      </pre>
    </div>
  )
}
