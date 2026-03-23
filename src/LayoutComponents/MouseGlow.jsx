import { useState, useEffect, useCallback } from 'react'
import { useTheme } from '../context/ThemeContext'

/**
 * A subtle radial glow that follows the mouse cursor.
 * Adds a soft, ambient sparkle effect to the page.
 */
export default function MouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const handleMove = useCallback((e) => {
    setPos({ x: e.clientX, y: e.clientY })
    if (!visible) setVisible(true)
  }, [visible])

  const handleLeave = useCallback(() => setVisible(false), [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMove, { passive: true })
    window.addEventListener('mouseleave', handleLeave)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseleave', handleLeave)
    }
  }, [handleMove, handleLeave])

  if (!visible) return null

  const outerColor = isLight
    ? 'rgba(1, 1, 1, 0.04)'
    : 'rgba(255, 255, 255, 0.055)'
  const innerColor = isLight
    ? 'rgba(1, 1, 1, 0.08)'
    : 'rgba(255, 255, 255, 0.1)'

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden
    >
      <div
        className="absolute w-[min(90vw,700px)] h-[min(90vw,700px)] -translate-x-1/2 -translate-y-1/2 transition-[left,top] duration-500 ease-out"
        style={{
          left: pos.x,
          top: pos.y,
          background: `radial-gradient(circle, ${outerColor} 0%, transparent 65%)`,
        }}
      />
      <div
        className="absolute w-64 h-64 -translate-x-1/2 -translate-y-1/2 transition-[left,top] duration-200 ease-out"
        style={{
          left: pos.x,
          top: pos.y,
          background: `radial-gradient(circle, ${innerColor} 0%, transparent 55%)`,
        }}
      />
    </div>
  )
}
