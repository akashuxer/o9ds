import { useCallback, useRef, useState } from 'react'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import { isAutoplayExcluded, isAutoplayStatic } from './motionDemoAutoplay'
import { useMotionPlaygroundPlayback } from './MotionPlaygroundPlaybackContext'
import useMotionDemoAutoplay from './useMotionDemoAutoplay'

/**
 * Rich motion example card — preview, trigger hint, expandable code.
 */
export default function MotionPlaygroundExample({
  id,
  title,
  purpose,
  code,
  trigger,
  featured = false,
  fullWidth = true,
  children,
}) {
  const { continuousPreview, autoplayScopeEnabled } = useMotionPlaygroundPlayback()
  const previewRef = useRef(null)
  const [showCode, setShowCode] = useState(false)
  const [demoGeneration, setDemoGeneration] = useState(0)

  const autoplayEnabled =
    continuousPreview && autoplayScopeEnabled && !isAutoplayExcluded(id) && !isAutoplayStatic(id)

  const handleCycleReset = useCallback(() => {
    setDemoGeneration((generation) => generation + 1)
  }, [])

  useMotionDemoAutoplay({
    containerRef: previewRef,
    exampleId: id,
    enabled: autoplayEnabled,
    onCycleReset: handleCycleReset,
  })

  const cardClass = [
    'mg-example-card',
    featured ? 'mg-example-card--featured' : '',
    fullWidth ? 'mg-example-card--full' : '',
    autoplayEnabled ? 'mg-example-card--autoplay' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <article className={cardClass} id={id}>
      <header>
        <h3 className="mg-example-card__title">{title}</h3>
        <p className="mg-example-card__desc">{purpose}</p>
        {trigger ? (
          <p className="mg-example-card__trigger">
            <strong className="mg-example-card__trigger-label">Trigger</strong> {trigger}
          </p>
        ) : null}
      </header>

      <div className="mg-preview-shell">
        <div
          ref={previewRef}
          className="motion-playground mp-preview-frame"
          data-mp-example
          data-mp-autoplay-skip={isAutoplayExcluded(id) ? 'true' : undefined}
        >
          <div key={demoGeneration}>{children}</div>
        </div>
      </div>

      <button
        type="button"
        className="mg-code-toggle"
        onClick={() => setShowCode((open) => !open)}
        aria-expanded={showCode}
      >
        {showCode ? 'Hide implementation' : 'Show implementation'}
      </button>

      {showCode ? <CodeBlock code={code} language="scss" label="SCSS" /> : null}
    </article>
  )
}
