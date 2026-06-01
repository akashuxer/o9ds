import ComponentResourceChips from './ComponentResourceChips'

/** Shared avatar icon for every component doc page — keeps the header consistent. */
const COMPONENT_PAGE_ICON = (
  <span
    className="o9con o9con-cube leading-none text-arvo-light-primary dark:text-white"
    style={{ fontSize: '18px' }}
    aria-hidden
  />
)

/**
 * Consistent page header with avatar icon, title, and optional description.
 * Use across all documentation pages for unified layout.
 * Description uses text-lg (18px); avoid overriding size in descClassName unless intentional.
 *
 * @param {string} [componentSlug] — when set, shows Figma / Storybook / Azure Git chips below the description
 *                                   and forces the shared o9con-cube avatar icon for consistency.
 */
export default function PageHeader({ title, description, icon, componentSlug, children, className = '', descClassName = '' }) {
  const resolvedIcon = componentSlug ? COMPONENT_PAGE_ICON : icon
  return (
    <section className={className}>
      <h1 className="group flex items-center gap-2 text-[30px] font-bold text-arvo-light-primary dark:text-white mb-4">
        <span
          className="flex h-8 w-8 items-center justify-center bg-arvo-light-surface dark:bg-neutral-700"
          data-arvo-avatar
          data-arvo-avatar-header
        >
          {resolvedIcon}
        </span>
        {title}
      </h1>
      {description && (
        <div
          className={`text-lg text-arvo-light-secondary dark:text-neutral-400 max-w-3xl space-y-4 leading-relaxed ${descClassName}`}
        >
          {typeof description === 'string' ? <p className="m-0">{description}</p> : description}
        </div>
      )}
      {componentSlug && <ComponentResourceChips slug={componentSlug} />}
      {children}
    </section>
  )
}
