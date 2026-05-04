/**
 * Standard doc section wrapper used by long-form usage / developer-reference pages.
 * Renders an h2 with anchor id (matches the OnThisPage TOC) and a consistent prose layout.
 */
export default function DocSection({ id, title, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-24 space-y-3 ${className}`}>
      {title && (
        <h2 className="text-xl font-semibold text-arvo-light-primary dark:text-white">
          {title}
        </h2>
      )}
      {children}
    </section>
  )
}

/** Subsection wrapper (h3) for nested headings inside a DocSection. */
export function DocSubsection({ title, children, className = '' }) {
  return (
    <div className={`space-y-2 ${className}`}>
      {title && (
        <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white">
          {title}
        </h3>
      )}
      {children}
    </div>
  )
}

/** Standard paragraph styling for body prose inside doc pages. */
export function DocParagraph({ children, className = '' }) {
  return (
    <p className={`text-arvo-light-secondary dark:text-neutral-400 leading-relaxed ${className}`}>
      {children}
    </p>
  )
}

/** Bulleted list with consistent prose styling. */
export function DocList({ items, ordered = false, className = '' }) {
  const Tag = ordered ? 'ol' : 'ul'
  const listClass = ordered ? 'list-decimal' : 'list-disc'
  return (
    <Tag className={`${listClass} pl-5 space-y-1.5 text-arvo-light-secondary dark:text-neutral-400 leading-relaxed ${className}`}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </Tag>
  )
}

/** Inline strong emphasis matching the design system's typography pattern. */
export function DocStrong({ children }) {
  return (
    <strong className="text-arvo-light-primary dark:text-white font-medium">{children}</strong>
  )
}

/** Inline code chip matching the global [data-arvo-inline-code] styling. */
export function DocCode({ children }) {
  return (
    <code className="px-1 py-0.5" data-arvo-inline-code>
      {children}
    </code>
  )
}

/** Boxed callout used for the "Rule" / "Note" / "Why" blocks that appear throughout the docs. */
export function DocCallout({ tone = 'rule', title, children }) {
  const toneStyles = {
    rule: 'border-l-4 border-l-[#010101] dark:border-l-white',
    note: 'border-l-4 border-l-[#7c3aed] dark:border-l-[#a78bfa]',
    warn: 'border-l-4 border-l-[#bc1227] dark:border-l-[#f07a62]',
  }
  return (
    <div className={`border ${toneStyles[tone] || toneStyles.rule} pl-4 pr-4 py-3 bg-arvo-light-surface dark:bg-neutral-800/40`}>
      {title && (
        <p className="text-sm font-semibold text-arvo-light-primary dark:text-white mb-1 m-0">
          {title}
        </p>
      )}
      <div className="text-sm text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
        {children}
      </div>
    </div>
  )
}
