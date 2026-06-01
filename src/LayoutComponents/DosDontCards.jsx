function CheckIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function XIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

/**
 * Side-by-side Do / Don't guidance cards for component Overview tabs.
 * Uses semantic tokens: t-positive / b-positive (Do), t-negative / b-negative (Don't).
 */
export default function DosDontCards({
  doTitle = 'Do',
  dontTitle = "Don't",
  doItems = [],
  dontItems = [],
  stacked = false,
}) {
  const renderCard = (title, items, toneClass, borderClass, tone, Icon) => (
    <div
      data-arvo-dos-dont-card
      data-arvo-tone={tone}
      className={`border border-l-[3px] ${borderClass} p-5 sm:p-6 bg-arvo-light-surface dark:bg-neutral-950`}
    >
      <div className="mb-4 flex items-center gap-2">
        <Icon className={`h-5 w-5 shrink-0 ${toneClass}`} />
        <h3 className={`text-sm font-semibold uppercase tracking-wider m-0 ${toneClass}`}>
          {title}
        </h3>
      </div>
      <ul className="m-0 list-none space-y-2.5 p-0">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-arvo-light-secondary dark:text-neutral-300">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-arvo-light-secondary dark:bg-neutral-500" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <div className={stacked ? 'grid grid-cols-1 gap-4' : 'grid gap-4 sm:grid-cols-2'}>
      {renderCard(doTitle, doItems, 't-positive', 'b-positive', 'positive', CheckIcon)}
      {renderCard(dontTitle, dontItems, 't-negative', 'b-negative', 'negative', XIcon)}
    </div>
  )
}
