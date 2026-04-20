import { useTheme } from '../context/ThemeContext'

/**
 * Reusable card with white background, thin light-gray border.
 * Use for principle cards, feature callouts, and structured content.
 * No vertical line in decision rule section (reduces noise).
 */
export default function WhiteBgCard({ number, icon, title, desc, media, bullets = [], decisionRule, children, className = '', style, unified }) {
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const isUnified = unified === true

  return (
    <div
      className={`group border p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${className}`}
      style={{
        borderColor: isLight ? '#E5E5E5' : (isUnified ? '#404040' : undefined),
        /* Light: off-white surface (#FAFAFA), not pure #FFF — dark: let global [data-o9ds-card] rules apply */
        backgroundColor: isLight ? '#FAFAFA' : (isUnified ? '#FFFFFF' : undefined),
        ...style,
      }}
      data-o9ds-card={isUnified ? 'principles' : (isLight ? 'light-white' : 'dark')}
    >
      {number != null && (
        <div
          className="mb-4 flex h-8 w-8 items-center justify-center text-sm font-bold shrink-0 transition-colors"
          style={
            isUnified
              ? { backgroundColor: '#000000', color: '#ffffff' }
              : isLight
                ? { backgroundColor: '#E5E5E5', color: '#010101' }
                : { backgroundColor: '#fff', color: '#000' }
          }
          data-o9ds-avatar
        >
          {number}
        </div>
      )}
      {icon != null && number == null && (
        <span
          className="flex h-12 w-12 items-center justify-center mb-4 transition-colors dark:bg-neutral-700 dark:text-neutral-400 group-hover:text-white"
          data-o9ds-avatar={isLight ? '' : undefined}
        >
          {icon}
        </span>
      )}
      {title && (
        <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white mb-2">{title}</h3>
      )}
      {desc && <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 mb-4 leading-relaxed">{desc}</p>}
      {media != null && <div className="mb-4">{media}</div>}
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
