/**
 * Catalog tile: fixed-height illustration band (white + dot grid + SVG),
 * theme-aware footer with a 2-line description slot (ellipsis + native tooltip when truncated).
 * Green dot matches sidebar when `ready` (documentation available).
 *
 * @param {boolean} [props.hideFooter] - If true, only the dotted illustration band is rendered (no title/description block).
 * @param {string} [props.imageAlt] - Alt text when `hideFooter` (defaults to empty for decorative catalog tiles).
 */
export default function ComponentOverviewCard({ title, description, illustrationSrc, ready, hideFooter = false, imageAlt = '' }) {
  /** Two lines at text-sm + leading-relaxed (1.625): reserve consistent block height across cards */
  const descriptionBlockClass =
    'mb-0 h-[2.875rem] overflow-hidden text-sm leading-relaxed line-clamp-2 text-[#525252] dark:text-neutral-400'

  const imgClassName = hideFooter
    ? 'max-h-[min(70vh,560px)] w-auto max-w-full object-contain object-center'
    : 'max-h-[120px] w-auto max-w-full object-contain object-center'

  return (
    <div
      data-o9ds-component-overview-card
      data-o9ds-component-overview-card-footer={hideFooter ? 'hidden' : undefined}
      className="flex h-full flex-col overflow-hidden rounded-none border border-[#E5E5E5] shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow duration-200 hover:shadow-md dark:border-neutral-700"
    >
      {/* Fixed height in catalog mode; flexible height when hideFooter (e.g. Typography typeface) */}
      <div
        className={`relative w-full shrink-0 overflow-hidden ${hideFooter ? '' : 'h-[168px] border-b border-[#E5E5E5] dark:border-neutral-700'}`}
      >
        <div className="absolute inset-0 bg-white dark:bg-white" aria-hidden />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(148, 163, 184, 0.35) 1px, transparent 1px)',
            backgroundSize: '14px 14px',
          }}
          aria-hidden
        />
        <div
          className={`relative z-10 flex w-full items-center justify-center px-4 ${hideFooter ? 'py-8 sm:py-10' : 'h-full py-5'}`}
        >
          <img
            src={illustrationSrc}
            alt={hideFooter ? imageAlt : ''}
            className={imgClassName}
            loading="lazy"
            decoding="async"
            aria-hidden={hideFooter ? (imageAlt ? undefined : true) : true}
          />
        </div>
      </div>

      {!hideFooter && (
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
      )}
    </div>
  )
}
