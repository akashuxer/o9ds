import DosDontCards from '../../LayoutComponents/DosDontCards'

/**
 * @param {{
 *   title: string,
 *   intro?: string,
 *   prefer?: string[],
 *   write: string[],
 *   avoid: string[],
 *   why?: string,
 *   footnote?: string,
 *   stacked?: boolean,
 *   doTitle?: string,
 *   dontTitle?: string,
 * }} props
 */
export function WriteAvoidBlock({
  title,
  intro,
  prefer,
  write,
  avoid,
  why,
  footnote,
  stacked = true,
  doTitle = 'Write',
  dontTitle = 'Avoid',
}) {
  return (
    <article className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-arvo-light-primary dark:text-white mb-2">{title}</h3>
        {intro ? <p className="text-sm text-arvo-light-secondary dark:text-neutral-400 leading-relaxed m-0">{intro}</p> : null}
        {prefer?.length ? (
          <div className="mt-3">
            <p className="text-sm font-medium text-arvo-light-primary dark:text-white mb-2 m-0">Prefer:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-arvo-light-secondary dark:text-neutral-400 m-0">
              {prefer.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      <DosDontCards stacked={stacked} doTitle={doTitle} dontTitle={dontTitle} doItems={write} dontItems={avoid} />
      {footnote ? <p className="text-xs text-arvo-light-secondary dark:text-neutral-500 m-0">{footnote}</p> : null}
      {why ? (
        <p className="text-sm text-arvo-light-secondary dark:text-neutral-400 m-0">
          <strong className="text-arvo-light-primary dark:text-white font-medium">Why:</strong> {why}
        </p>
      ) : null}
    </article>
  )
}
