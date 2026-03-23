import { useState } from 'react'
import { hexToRgb, rgbToString, getContrastTextColor } from '../utils/colorUtils'

function CopyIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  )
}

export default function ColorSwatch({ label, hex }) {
  const [hovered, setHovered] = useState(false)
  const [copied, setCopied] = useState(null)
  const rgb = hexToRgb(hex)
  const rgbStr = rgb ? rgbToString(rgb) : ''
  const textColor = getContrastTextColor(hex)

  const copy = (format) => {
    const text = format === 'hex' ? hex : rgbStr
    navigator.clipboard.writeText(text).then(() => {
      setCopied(format)
      setTimeout(() => setCopied(null), 1500)
    })
  }

  return (
    <div
      className="group relative flex h-10 min-h-[2.5rem] items-center justify-between border-b border-black/10 px-3 last:border-b-0 transition-colors"
      style={{ backgroundColor: hex }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="text-sm font-medium" style={{ color: textColor }}>{label}</span>
      {hovered && (
        <div className="flex items-center gap-3" style={{ color: textColor }}>
          <button
            onClick={(e) => {
              e.preventDefault()
              copy('hex')
            }}
            className="flex items-center gap-1.5 text-xs font-medium transition-opacity hover:opacity-80"
          >
            <CopyIcon className="h-3.5 w-3.5" />
            Hex
            {copied === 'hex' && <span className="text-[10px]">Copied!</span>}
          </button>
          <button
            onClick={(e) => {
              e.preventDefault()
              copy('rgb')
            }}
            className="flex items-center gap-1.5 text-xs font-medium transition-opacity hover:opacity-80"
          >
            <CopyIcon className="h-3.5 w-3.5" />
            RGB
            {copied === 'rgb' && <span className="text-[10px]">Copied!</span>}
          </button>
        </div>
      )}
    </div>
  )
}
