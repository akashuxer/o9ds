import { useTheme } from '../context/ThemeContext'
import { MOTION_EASING_STRIP } from '../data/motionTokens'

/** Animated easing comparison — shows how each curve feels over the same distance and time. */
export default function MotionEasingStrip() {
  const { theme } = useTheme()
  const isLight = theme === 'light'
  const trackBg = isLight ? '#E5E5E5' : '#404040'
  const dotBg = isLight ? '#010101' : '#FFFFFF'

  return (
    <div
      className="border p-5 space-y-4 dark:border-neutral-700"
      style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#FAFAFA' } : undefined}
      aria-hidden
    >
      <div className="space-y-1">
        <p className="text-xs font-medium uppercase tracking-wider text-arvo-light-secondary dark:text-neutral-500 m-0">
          How easing feels
        </p>
        <p className="text-sm text-arvo-light-secondary dark:text-neutral-400 m-0 leading-relaxed">
          Easing is the acceleration curve — how quickly motion starts and stops. Same duration and distance can feel
          very different depending on the curve.
        </p>
      </div>

      <div className="space-y-3">
        {MOTION_EASING_STRIP.map((step, index) => (
          <div key={step.id} className="grid gap-2 sm:grid-cols-[5.5rem_1fr] sm:items-center sm:gap-3">
            <div className="min-w-0">
              <p className="text-xs font-semibold text-arvo-light-primary dark:text-white m-0">{step.label}</p>
              <p className="text-[11px] text-arvo-light-secondary dark:text-neutral-500 m-0 leading-snug mt-0.5">
                {step.feel}
              </p>
            </div>
            <div
              className="relative h-7 rounded-full overflow-hidden"
              style={{ backgroundColor: trackBg }}
            >
              <div
                className="motion-easing-dot absolute top-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full"
                style={{
                  backgroundColor: dotBg,
                  animationDelay: `${index * 0.2}s`,
                  ['--mp-ease']: step.css,
                }}
                data-motion-easing-dot
                data-mp-loop={step.loop ? 'true' : 'false'}
              />
            </div>
          </div>
        ))}
      </div>

      <p className="text-[11px] text-arvo-light-secondary dark:text-neutral-500 m-0">
        Each dot travels the same track in 1.6s — watch how the curve changes the rhythm.
      </p>

      <style>{`
        @keyframes motion-easing-travel {
          0% { left: 4px; }
          100% { left: calc(100% - 18px); }
        }
        @keyframes motion-easing-loop {
          0% { left: 4px; }
          50% { left: calc(100% - 18px); }
          100% { left: 4px; }
        }
        [data-motion-easing-dot] {
          animation-name: motion-easing-travel;
          animation-duration: 1.6s;
          animation-timing-function: var(--mp-ease);
          animation-iteration-count: infinite;
          animation-direction: alternate;
        }
        [data-motion-easing-dot][data-mp-loop="true"] {
          animation-name: motion-easing-loop;
          animation-direction: normal;
        }
        @media (prefers-reduced-motion: reduce) {
          [data-motion-easing-dot] {
            animation: none;
            left: calc(100% - 18px);
          }
        }
      `}</style>
    </div>
  )
}
