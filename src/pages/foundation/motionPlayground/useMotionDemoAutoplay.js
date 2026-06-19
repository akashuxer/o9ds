import { useEffect, useRef, useState } from 'react'
import {
  createAutoplayState,
  isAutoplayExcluded,
  isAutoplayStatic,
  runAutoplayWave,
} from './motionDemoAutoplay'
import { useMotionPlaygroundPlayback } from './MotionPlaygroundPlaybackContext'

/**
 * Syncs each card to the global playback wave with profile-aware choreography.
 * @param {object} options
 * @param {React.RefObject<HTMLElement | null>} options.containerRef
 * @param {string} options.exampleId
 * @param {boolean} options.enabled
 * @param {() => void} [options.onCycleReset]
 */
export default function useMotionDemoAutoplay({ containerRef, exampleId, enabled, onCycleReset }) {
  const { playbackWave } = useMotionPlaygroundPlayback()
  const stepRef = useRef(0)
  const stateRef = useRef(createAutoplayState())
  const [isVisible, setIsVisible] = useState(false)
  const [visibilityEpoch, setVisibilityEpoch] = useState(0)
  const lastWaveRef = useRef(-1)
  const lastVisibilityEpochRef = useRef(0)
  const onCycleResetRef = useRef(onCycleReset)

  onCycleResetRef.current = onCycleReset

  useEffect(() => {
    if (!enabled || isAutoplayExcluded(exampleId) || isAutoplayStatic(exampleId)) {
      return undefined
    }

    const container = containerRef.current
    if (!container) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const nextVisible = entries.some((entry) => entry.isIntersecting && entry.intersectionRatio >= 0.04)
        setIsVisible((prev) => {
          if (!prev && nextVisible) setVisibilityEpoch((epoch) => epoch + 1)
          return nextVisible
        })
      },
      { threshold: [0, 0.04, 0.12, 0.25] },
    )
    observer.observe(container)

    return () => observer.disconnect()
  }, [containerRef, enabled, exampleId])

  useEffect(() => {
    if (!enabled || isAutoplayExcluded(exampleId) || isAutoplayStatic(exampleId)) {
      return
    }

    if (!isVisible) return

    const visibilityChanged = visibilityEpoch !== lastVisibilityEpochRef.current
    if (visibilityChanged) {
      lastVisibilityEpochRef.current = visibilityEpoch
      lastWaveRef.current = -1
    }

    if (playbackWave === lastWaveRef.current) return
    lastWaveRef.current = playbackWave

    const container = containerRef.current
    if (!container) return

    const result = runAutoplayWave(container, exampleId, stepRef.current, stateRef.current)
    stepRef.current = result.nextStep

    if (result.reset) {
      stepRef.current = 0
      stateRef.current = createAutoplayState()
      window.setTimeout(() => onCycleResetRef.current?.(), 320)
    }
  }, [containerRef, enabled, exampleId, playbackWave, isVisible, visibilityEpoch])
}
