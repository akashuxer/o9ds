import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { AUTOPLAY_STEP_MS } from './motionDemoAutoplay'

const MotionPlaygroundPlaybackContext = createContext(null)

/** Shared continuous-preview toggle + global wave clock (All tab only). */
export function MotionPlaygroundPlaybackProvider({ children, autoplayScopeEnabled = true }) {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const [continuousPreview, setContinuousPreview] = useState(() => !prefersReducedMotion)
  const [playbackWave, setPlaybackWave] = useState(0)

  const autoplayActive = continuousPreview && autoplayScopeEnabled

  useEffect(() => {
    if (!autoplayActive) return undefined
    const id = window.setInterval(() => {
      setPlaybackWave((wave) => wave + 1)
    }, AUTOPLAY_STEP_MS)
    return () => window.clearInterval(id)
  }, [autoplayActive])

  const value = useMemo(
    () => ({
      continuousPreview,
      setContinuousPreview,
      playbackWave,
      autoplayScopeEnabled,
    }),
    [continuousPreview, playbackWave, autoplayScopeEnabled],
  )

  return (
    <MotionPlaygroundPlaybackContext.Provider value={value}>
      {children}
    </MotionPlaygroundPlaybackContext.Provider>
  )
}

export function useMotionPlaygroundPlayback() {
  const ctx = useContext(MotionPlaygroundPlaybackContext)
  if (!ctx) {
    throw new Error('useMotionPlaygroundPlayback must be used within MotionPlaygroundPlaybackProvider')
  }
  return ctx
}
