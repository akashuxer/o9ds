import { useTheme } from '../context/ThemeContext'
import { MOTION_DURATION_STRIP } from '../data/motionTokens'

/** Animated 120ms → 300ms scale — shared by Motion Overview and Tokens tabs. */
export default function MotionDurationStrip() {
  const { theme } = useTheme()
  const isLight = theme === 'light'

  return (
    <div
      className="border p-5 space-y-3 dark:border-neutral-700 overflow-hidden"
      style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#FAFAFA' } : undefined}
      aria-hidden
    >
      <p className="text-xs font-medium uppercase tracking-wider text-arvo-light-secondary dark:text-neutral-500 m-0">
        Typical interaction range
      </p>
      <div className="relative flex items-center justify-between gap-1">
        {MOTION_DURATION_STRIP.map((step, index) => (
          <div key={step.token} className="flex flex-1 flex-col items-center gap-2 min-w-0">
            <div
              className="h-2 w-full rounded-full motion-duration-bar"
              style={{
                backgroundColor: isLight ? '#E5E5E5' : '#404040',
                animationDelay: `${index * 0.35}s`,
              }}
              data-motion-bar
            />
            <span className="text-[11px] font-mono text-arvo-light-secondary dark:text-neutral-400">{step.label}</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes motion-bar-pulse {
          0%, 100% { background-color: ${isLight ? '#E5E5E5' : '#404040'}; transform: scaleY(1); }
          50% { background-color: ${isLight ? '#010101' : '#FFFFFF'}; transform: scaleY(1.75); }
        }
        [data-motion-bar] {
          animation: motion-bar-pulse 2.8s ease-in-out infinite;
          transform-origin: center bottom;
        }
        @media (prefers-reduced-motion: reduce) {
          [data-motion-bar] { animation: none; opacity: 0.85; }
        }
      `}</style>
    </div>
  )
}
