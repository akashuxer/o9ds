import { useTheme } from '../context/ThemeContext'

/**
 * Reusable card with light gray background, thin black border.
 * Use for principle cards, feature callouts, and structured content.
 * No vertical line in decision rule section (reduces noise).
 */
export default function GrayBgCard({ number, title, desc, bullets = [], decisionRule, children, className = '', style }) {
  const { theme } = useTheme()
  const isLight = theme === 'light'

  return (
    <div
      className={`border p-6 transition-all duration-300 hover:border-o9ds-light-primary dark:hover:border-neutral-600 hover:shadow-md hover:-translate-y-0.5 ${className}`}
      style={{
        borderColor: isLight ? '#010101' : '#404040',
        backgroundColor: isLight ? '#F2F2F2' : '#171717',
        ...style,
      }}
      data-o9ds-card="light"
    >
      {number != null && (
        <div
          className="mb-4 flex h-8 w-8 items-center justify-center text-sm font-bold shrink-0"
          style={isLight ? { backgroundColor: '#010101', color: '#fff' } : { backgroundColor: '#404040', color: '#fff' }}
          data-o9ds-avatar
        >
          {number}
        </div>
      )}
      {title && (
        <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white mb-2">{title}</h3>
      )}
      {desc && <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 mb-4 leading-relaxed">{desc}</p>}
      {bullets.length > 0 && (
        <ul className="space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400 mb-4">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-o9ds-light-secondary dark:text-neutral-500 shrink-0">•</span>
              {b}
            </li>
          ))}
        </ul>
      )}
      {children}
      {decisionRule != null && (
        <div className="pt-2 mt-4">
          <p className="text-xs font-semibold text-o9ds-light-secondary dark:text-neutral-500 uppercase tracking-wider mb-1">Decision rule</p>
          <p className="text-sm font-medium text-o9ds-light-primary dark:text-white">{decisionRule}</p>
        </div>
      )}
    </div>
  )
}
