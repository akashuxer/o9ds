import { useMotionPlaygroundPlayback } from './MotionPlaygroundPlaybackContext'

/** Toggle continuous automatic replay of visible playground demos. */
export default function MotionPlaygroundContinuousPreview() {
  const { continuousPreview, setContinuousPreview } = useMotionPlaygroundPlayback()

  return (
    <div className="motion-playback-bar">
      <button
        type="button"
        className={`motion-playback-toggle${continuousPreview ? ' is-active' : ''}`}
        aria-pressed={continuousPreview}
        onClick={() => setContinuousPreview((on) => !on)}
      >
        Continuous preview
        <span className="motion-playback-toggle__state">{continuousPreview ? 'On' : 'Off'}</span>
      </button>
      <p className="motion-playback-bar__hint">
        {continuousPreview
          ? 'Visible cards animate together in parallel — Dialog stays manual so you can open it yourself. Turn preview off anytime for hands-on exploration.'
          : 'Preview paused — every card is yours to interact with. Turn continuous preview back on when you want the gallery to move again.'}
      </p>
    </div>
  )
}
