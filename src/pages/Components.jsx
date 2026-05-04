import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import PageHeader from '../LayoutComponents/PageHeader'
import ComponentOverviewCard from '../LayoutComponents/ComponentOverviewCard'
import { COMPONENTS_NAV_TREE, COMPONENT_DOC_ROUTES } from '../data/componentsNav'
import { getAllComponentPageMeta } from '../data/componentPageMeta'
import { getComponentOverviewIllustrationSrc } from '../data/componentOverviewIllustrations'

const componentIcon = (
  <svg className="h-6 w-6 text-arvo-light-secondary dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
)

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

export default function Components() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [readyOnly, setReadyOnly] = useState(false)

  const allMeta = useMemo(() => getAllComponentPageMeta(), [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    let rows = allMeta
    if (category !== 'all') {
      rows = rows.filter((m) => m.categoryId === category)
    }
    if (readyOnly) {
      rows = rows.filter((m) => COMPONENT_DOC_ROUTES.has(`/components/${m.slug}`))
    }
    if (q) {
      rows = rows.filter((m) => {
        const hay = `${m.label} ${m.section} ${m.slug}`.toLowerCase()
        return hay.includes(q)
      })
    }
    return [...rows].sort((a, b) => a.label.localeCompare(b.label, undefined, { sensitivity: 'base' }))
  }, [allMeta, category, query, readyOnly])

  const canReset = query.trim() !== '' || category !== 'all' || readyOnly

  const inputStyle = {
    backgroundColor: isDark ? '#171717' : '#FFFFFF',
    color: isDark ? '#fff' : '#010101',
  }

  const handleReset = () => {
    setQuery('')
    setCategory('all')
    setReadyOnly(false)
  }

  return (
    <div className="space-y-10 pb-8">
      <PageHeader
        title="Components"
        description="This library lists UI building blocks that form the basis for platform interfaces. Filter by category, search by name, and open a page for usage and API details as documentation becomes available."
        icon={componentIcon}
      />

      <section id="component-catalog" className="scroll-mt-24 space-y-6" aria-labelledby="component-catalog-heading">
        <h2 id="component-catalog-heading" className="sr-only">
          Browse components
        </h2>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <div className="relative flex-1 min-w-[200px] max-w-xl">
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-arvo-light-secondary dark:text-neutral-500" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by keyword"
              autoComplete="off"
              aria-label="Search components by keyword"
              className="arvo-doc-search-input w-full py-2.5 pl-9 pr-3 text-sm text-[#010101] dark:text-white"
              style={inputStyle}
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <label htmlFor="component-category" className="sr-only">
              Category
            </label>
            <select
              id="component-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="min-w-[180px] cursor-pointer rounded-none border px-3 py-2.5 text-sm text-[#010101] focus:outline-none focus:ring-2 focus:ring-[#010101] focus:ring-offset-0 dark:text-white dark:focus:ring-white"
              style={inputStyle}
            >
              <option value="all">All categories</option>
              {COMPONENTS_NAV_TREE.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.label}
                </option>
              ))}
            </select>

            <label className="inline-flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-[#010101] dark:text-white">
              <input
                type="checkbox"
                checked={readyOnly}
                onChange={(e) => setReadyOnly(e.target.checked)}
                className="h-4 w-4 shrink-0 rounded-none border-2 border-[#010101] bg-white accent-[#010101] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#010101] focus-visible:ring-offset-0 dark:border-white dark:bg-black dark:accent-white dark:focus-visible:ring-white"
                aria-label="Show only components with ready documentation"
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

        <p className="text-sm text-arvo-light-secondary dark:text-neutral-400">
          Showing <strong className="text-arvo-light-primary dark:text-white font-semibold">{filtered.length}</strong> of{' '}
          {allMeta.length} components
          {category !== 'all' && (
            <>
              {' '}
              in <strong className="text-arvo-light-primary dark:text-white font-semibold">{COMPONENTS_NAV_TREE.find((g) => g.id === category)?.label}</strong>
            </>
          )}
        </p>

        {filtered.length === 0 ? (
          <div
            className="rounded-none border px-6 py-12 text-center text-sm text-arvo-light-secondary dark:text-neutral-400"
            style={{ borderColor: isDark ? '#404040' : '#E5E5E5', backgroundColor: isDark ? '#0a0a0a' : '#FAFAFA' }}
          >
            No components match your search or filters. Try a different keyword, choose <strong className="text-arvo-light-primary dark:text-white">All categories</strong>, turn off{' '}
            <strong className="text-arvo-light-primary dark:text-white">Ready status</strong>, then use{' '}
            <strong className="text-arvo-light-primary dark:text-white">Reset all</strong>.
          </div>
        ) : (
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 list-none p-0 m-0">
            {filtered.map((m) => {
              const path = `/components/${m.slug}`
              const ready = COMPONENT_DOC_ROUTES.has(path)
              return (
                <li key={m.slug}>
                  <Link
                    to={path}
                    className="group block h-full rounded-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#010101] focus-visible:ring-offset-2 dark:focus-visible:ring-white dark:focus-visible:ring-offset-black"
                  >
                    <ComponentOverviewCard
                      title={m.label}
                      description={`${m.section}. Open for guidance and examples as they are published.`}
                      illustrationSrc={getComponentOverviewIllustrationSrc(m.slug)}
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
