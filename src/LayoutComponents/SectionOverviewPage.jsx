import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import PageHeader from './PageHeader'
import ComponentOverviewCard from './ComponentOverviewCard'

function SearchIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  )
}

function ResetIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  )
}

export default function SectionOverviewPage({ title, description, icon, items, getIllustrationSrc, isReady }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [query, setQuery] = useState('')
  const [readyOnly, setReadyOnly] = useState(false)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    let rows = items
    if (readyOnly) {
      rows = rows.filter((m) => isReady(m.path))
    }
    if (q) {
      rows = rows.filter((m) => {
        const hay = `${m.label} ${m.section} ${m.path}`.toLowerCase()
        return hay.includes(q)
      })
    }
    return [...rows].sort((a, b) => a.label.localeCompare(b.label, undefined, { sensitivity: 'base' }))
  }, [items, query, readyOnly, isReady])

  const canReset = query.trim() !== '' || readyOnly

  const inputStyle = {
    borderColor: isDark ? '#404040' : '#E5E5E5',
    backgroundColor: isDark ? '#171717' : '#FFFFFF',
    color: isDark ? '#fff' : '#010101',
  }

  const handleReset = () => {
    setQuery('')
    setReadyOnly(false)
  }

  return (
    <div className="space-y-10 pb-8">
      <PageHeader title={title} description={description} icon={icon} />

      <section id="section-catalog" className="scroll-mt-24 space-y-6" aria-labelledby="section-catalog-heading">
        <h2 id="section-catalog-heading" className="sr-only">
          Browse {title}
        </h2>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <div className="relative flex-1 min-w-[200px] max-w-xl">
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-o9ds-light-secondary dark:text-neutral-500" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by keyword"
              autoComplete="off"
              aria-label={`Search ${title} by keyword`}
              className="w-full rounded-none border py-2.5 pl-9 pr-3 text-sm text-[#010101] focus:outline-none focus:ring-2 focus:ring-[#010101] focus:ring-offset-0 dark:text-white dark:focus:ring-white"
              style={inputStyle}
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <label
              className="inline-flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-[#010101] dark:text-white"
            >
              <input
                type="checkbox"
                checked={readyOnly}
                onChange={(e) => setReadyOnly(e.target.checked)}
                className="h-4 w-4 shrink-0 rounded-none border-2 border-[#010101] bg-white accent-[#010101] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#010101] focus-visible:ring-offset-0 dark:border-white dark:bg-black dark:accent-white dark:focus-visible:ring-white"
                aria-label="Show only pages with ready documentation"
              />
              Ready status
            </label>

            <button
              type="button"
              onClick={handleReset}
              disabled={!canReset}
              className="inline-flex items-center gap-2 rounded-none border px-3 py-2.5 text-sm font-medium transition-opacity disabled:opacity-40 disabled:pointer-events-none hover:opacity-90"
              style={{
                borderColor: isDark ? '#404040' : '#E5E5E5',
                backgroundColor: isDark ? '#171717' : '#FAFAFA',
                color: isDark ? '#fff' : '#010101',
              }}
            >
              <ResetIcon className="h-4 w-4 shrink-0" />
              Reset all
            </button>
          </div>
        </div>

        {items.length > 0 && (
          <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
            Showing <strong className="text-o9ds-light-primary dark:text-white font-semibold">{filtered.length}</strong> of {items.length}{' '}
            entries
          </p>
        )}

        {items.length === 0 ? (
          <div
            className="rounded-none border px-6 py-12 text-center text-sm text-o9ds-light-secondary dark:text-neutral-400"
            style={{ borderColor: isDark ? '#404040' : '#E5E5E5', backgroundColor: isDark ? '#0a0a0a' : '#FAFAFA' }}
          >
            No topics are listed for this overview yet. Add rows to <code className="font-mono text-xs">src/data/overviewCatalog.js</code> when
            documentation pages are published.
          </div>
        ) : filtered.length === 0 ? (
          <div
            className="rounded-none border px-6 py-12 text-center text-sm text-o9ds-light-secondary dark:text-neutral-400"
            style={{ borderColor: isDark ? '#404040' : '#E5E5E5', backgroundColor: isDark ? '#0a0a0a' : '#FAFAFA' }}
          >
            No entries match your search or filters. Try another keyword or turn off{' '}
            <strong className="text-o9ds-light-primary dark:text-white">Ready status</strong>, then use{' '}
            <strong className="text-o9ds-light-primary dark:text-white">Reset all</strong>.
          </div>
        ) : (
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 list-none p-0 m-0">
            {filtered.map((m) => {
              const ready = isReady(m.path)
              return (
                <li key={m.path}>
                  <Link
                    to={m.path}
                    className="group block h-full rounded-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#010101] focus-visible:ring-offset-2 dark:focus-visible:ring-white dark:focus-visible:ring-offset-black"
                  >
                    <ComponentOverviewCard
                      title={m.label}
                      description={`${m.section}. Open for guidance and examples as they are published.`}
                      illustrationSrc={getIllustrationSrc(m.path)}
                      ready={ready}
                    />
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
      </section>
    </div>
  )
}
