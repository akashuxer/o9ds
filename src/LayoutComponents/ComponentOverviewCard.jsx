/**
 * Catalog tile: fixed-height illustration band (white + dot grid + SVG),
 * theme-aware footer with a 2-line description slot (ellipsis + native tooltip when truncated).
 * Green dot matches sidebar when `ready` (documentation available).
 */
export default function ComponentOverviewCard({ title, description, illustrationSrc, ready }) {
  /** Two lines at text-sm + leading-relaxed (1.625): reserve consistent block height across cards */
  const descriptionBlockClass =
    'mb-0 h-[2.875rem] overflow-hidden text-sm leading-relaxed line-clamp-2 text-[#525252] dark:text-neutral-400'

  return (
    <div
      data-o9ds-component-overview-card
      className="flex h-full flex-col overflow-hidden rounded-none border border-[#E5E5E5] shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow duration-200 hover:shadow-md dark:border-neutral-700"
    >
      {/* Fixed height — matches catalog grid (e.g. Accordion); white + dots + SVG stacked */}
      <div className="relative h-[168px] w-full shrink-0 overflow-hidden border-b border-[#E5E5E5] dark:border-neutral-700">
        <div className="absolute inset-0 bg-white" aria-hidden />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(148, 163, 184, 0.35) 1px, transparent 1px)',
            backgroundSize: '14px 14px',
          }}
          aria-hidden
        />
        <div className="relative z-10 flex h-full w-full items-center justify-center px-4 py-5">
          <img
            src={illustrationSrc}
            alt=""
            className="max-h-[120px] w-auto max-w-full object-contain object-center"
            loading="lazy"
            decoding="async"
            aria-hidden
          />
        </div>
      </div>

      <div className="bg-[#FAFAFA] px-4 py-4 dark:bg-neutral-900">
        <div className="mb-1.5 flex items-center gap-2">
          {ready && (
            <span
              className="h-2 w-2 shrink-0 rounded-none bg-[#00c278]"
              aria-hidden
              title="Documentation available"
            />
          )}
          <h3 className="min-w-0 flex-1 text-base font-semibold text-[#010101] dark:text-white">{title}</h3>
        </div>
        <p className={descriptionBlockClass} title={description}>
          {description}
        </p>
      </div>
    </div>
  )
}
