import OnThisPage from './OnThisPage'

/**
 * Wraps page content with "On This Page" TOC on the right.
 * Use for doc pages that have multiple sections.
 */
export default function PageWithToc({ sections = [], children, className = '' }) {
  return (
    <div className={`flex w-full items-start gap-8 xl:gap-12 ${className}`}>
      <div className="flex-1 min-w-0">{children}</div>
      <OnThisPage sections={sections} />
    </div>
  )
}
