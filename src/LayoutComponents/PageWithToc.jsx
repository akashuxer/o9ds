import OnThisPage from './OnThisPage'

/**
 * Wraps page content with "On This Page" TOC on the right.
 * Use for doc pages that have multiple sections.
 */
export default function PageWithToc({ sections = [], children, className = '' }) {
  return (
    <div className={`flex items-start gap-12 max-w-5xl ${className}`}>
      <div className="flex-1 min-w-0">{children}</div>
      <OnThisPage sections={sections} />
    </div>
  )
}
