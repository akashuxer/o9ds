import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

function CopyIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  )
}

export default function CodeBlock({ code, label }) {
  const [copied, setCopied] = useState(false)
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const copy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  return (
    <div className="flex items-start gap-2">
      <div className="flex-1 min-w-0">
        {label && <p className="text-xs mb-1 dark:text-neutral-400" style={isLight ? { color: '#303030' } : undefined}>{label}</p>}
        <pre
          className="border p-4 text-sm font-mono overflow-x-auto dark:border-neutral-700 dark:bg-neutral-800/50 dark:text-neutral-200"
          style={isLight ? { backgroundColor: '#F2F2F2', borderColor: '#E5E5E5', color: '#010101' } : undefined}
          data-o9ds-code
        >
          {code}
        </pre>
      </div>
      <button
        onClick={copy}
        className="shrink-0 border p-2 flex items-center gap-1 transition-colors dark:border-neutral-600 dark:text-neutral-400 hover:text-o9ds-light-primary dark:hover:text-white"
        style={isLight ? { borderColor: '#E5E5E5', color: '#303030' } : undefined}
        title="Copy"
      >
        <CopyIcon className="h-4 w-4" />
        {copied && <span className="text-xs">Copied!</span>}
      </button>
    </div>
  )
}
