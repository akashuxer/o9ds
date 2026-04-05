/**
 * Consistent page header with avatar icon, title, and optional description.
 * Use across all documentation pages for unified layout.
 * Description uses text-lg (18px); avoid overriding size in descClassName unless intentional.
 */
export default function PageHeader({ title, description, icon, children, className = '', descClassName = '' }) {
  return (
    <section className={className}>
      <h1 className="group flex items-center gap-2 text-[30px] font-bold text-o9ds-light-primary dark:text-white mb-4">
        <span
          className="flex h-8 w-8 items-center justify-center bg-o9ds-light-surface dark:bg-neutral-700"
          data-o9ds-avatar
          data-o9ds-avatar-header
        >
          {icon}
        </span>
        {title}
      </h1>
      {description && (
        <p
          className={`text-lg text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed ${descClassName}`}
        >
          {description}
        </p>
      )}
      {children}
    </section>
  )
}
