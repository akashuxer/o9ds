import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { TABLE_IDENTIFIER_TONE_CLASS } from './codeHighlight'

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

function TokenRow({ token, value, px, varFormat, isLight, showCopy }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = (e) => {
    e.stopPropagation()
    navigator.clipboard.writeText(varFormat).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  return (
    <tr className="group border-b last:border-b-0" style={{ borderColor: isLight ? '#E5E5E5' : '#404040' }}>
      <td className="py-2 px-3 font-mono text-sm" style={{ color: isLight ? '#010101' : '#fff' }}>{token}</td>
      <td className="py-2 px-3 font-mono text-sm" style={{ color: isLight ? '#010101' : '#e5e5e5' }}>{value}</td>
      <td className="py-2 px-3 font-mono text-sm" style={{ color: isLight ? '#303030' : '#a3a3a3' }}>{px}</td>
      <td className="py-2 px-3">
        <div className="h-8" style={{ width: px, backgroundColor: isLight ? '#444444' : '#737373' }} />
      </td>
      {showCopy && (
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
      )}
    </tr>
  )
}

function RowCopyButton({ text, isLight }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = (e) => {
    e.stopPropagation()
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  return (
    <td className="py-2 px-3 w-12 align-middle">
      <button
        type="button"
        onClick={handleCopy}
        className="p-1.5 border opacity-0 group-hover:opacity-100 transition-opacity"
        style={
          copied
            ? { borderColor: '#00c278', backgroundColor: '#00c278', color: '#fff' }
            : isLight ? { borderColor: '#E5E5E5', color: '#303030' } : { borderColor: '#404040', color: '#a3a3a3' }
        }
        title="Copy"
        aria-label="Copy"
      >
        {copied ? <CheckIcon className="h-3.5 w-3.5" style={{ color: '#fff' }} /> : <CopyIcon className="h-3.5 w-3.5" />}
      </button>
    </td>
  )
}

function columnToneClass(tone) {
  if (tone === 'package' || tone === 'module' || tone === 'prop' || tone === 'agent' || tone === 'layer' || tone === 'gate' || tone === 'code') {
    return TABLE_IDENTIFIER_TONE_CLASS
  }
  return ''
}

/**
 * Reusable table for documentation: props, tokens, keyboard, ARIA, etc.
 * No vertical lines between columns. Use across any page needing structured tables.
 *
 * @param {Object} props
 * @param {Array} props.tokens - For token table: [{ token, value, px }]. Renders Token Name, Value (rem), Value (px), Preview bar.
 * @param {Array} props.columns - For generic table: [{ key, label, mono?, primary?, tone?: 'package' | 'module' | 'prop' | 'agent' | 'layer' | 'gate' | 'code' }]
 * @param {Array} props.rows - For generic table: array of row objects
 * @param {boolean} props.showCopy - Only for tokens: show copy var() button per row
 * @param {(row: object) => string} [props.rowCopy] - Generic table: if set, adds a copy column; function returns clipboard text per row
 */
export default function DocTable({ tokens, columns = [], rows = [], showCopy = true, rowCopy }) {
  const { theme } = useTheme()
  const isLight = theme === 'light'

  // Token table mode
  if (tokens && tokens.length > 0) {
    return (
      <div className="border overflow-hidden" style={{ borderColor: isLight ? '#E5E5E5' : '#404040', backgroundColor: isLight ? '#FFFFFF' : undefined }}>
        <table className="w-full text-sm">
          <thead>
            <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
              <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Token Name</th>
              <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Value (rem)</th>
              <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Value (px)</th>
              <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Preview</th>
              {showCopy && <th className="py-2 px-3 w-12" aria-label="Copy" />}
            </tr>
          </thead>
          <tbody>
            {tokens.map(({ token, value, px }) => (
              <TokenRow
                key={token}
                token={token}
                value={value}
                px={px}
                varFormat={`var(--${token})`}
                isLight={isLight}
                showCopy={showCopy}
              />
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  // Generic table mode
  const rowCopyFn = typeof rowCopy === 'function' ? rowCopy : null

  return (
    <div className="border overflow-hidden" style={{ borderColor: isLight ? '#E5E5E5' : '#404040', backgroundColor: isLight ? '#FFFFFF' : undefined }}>
      <table className="w-full text-sm">
        <thead>
          <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
            {columns.map((col) => (
              <th key={col.key} className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">
                {col.label}
              </th>
            ))}
            {rowCopyFn && <th className="py-2 px-3 w-12" aria-label="Copy" />}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="group border-t" style={{ borderColor: isLight ? '#E5E5E5' : '#404040' }}>
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={`py-2 px-3 ${col.mono ? 'font-mono text-sm' : ''} ${
                    col.tone
                      ? `${columnToneClass(col.tone)} font-medium o9ds-doc-table-cell--tone`
                      : 'text-o9ds-light-secondary dark:text-neutral-400'
                  }`}
                  style={col.primary ? { color: isLight ? '#010101' : '#fff' } : undefined}
                >
                  {row[col.key]}
                </td>
              ))}
              {rowCopyFn && <RowCopyButton text={rowCopyFn(row)} isLight={isLight} />}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
