import { useMemo } from 'react'
import { validateMotionPlaygroundTokens } from '../../../utils/motionTokenCatalog'

/**
 * Search + category filter for the Tokens tab (controls sections below — no duplicate table).
 * @param {object} props
 * @param {string} props.query
 * @param {(value: string) => void} props.onQueryChange
 * @param {string} props.category
 * @param {(value: string) => void} props.onCategoryChange
 * @param {string[]} props.categories
 * @param {number} [props.matchCount]
 */
export default function MotionTokenCatalogFilter({
  query,
  onQueryChange,
  category,
  onCategoryChange,
  categories,
  matchCount,
}) {
  const validation = useMemo(() => validateMotionPlaygroundTokens(), [])

  return (
    <div>
      {validation.ok ? (
        <p className="motion-token-catalog-validation mb-4" role="status">
          All {validation.exampleCount} playground examples reference documented tokens ({validation.tokenCount} tokens
          in catalog).
        </p>
      ) : (
        <p className="text-sm text-red-600 dark:text-red-400 mb-4" role="alert">
          Undocumented tokens in playground: {validation.undocumented.join('; ')}
        </p>
      )}

      <div className="motion-token-catalog-toolbar">
        <label className="sr-only" htmlFor="motion-token-search">
          Search tokens
        </label>
        <input
          id="motion-token-search"
          type="search"
          placeholder="Search tokens…"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          className="motion-token-catalog-filter flex-1 min-w-[12rem]"
        />
        <label className="sr-only" htmlFor="motion-token-category">
          Filter by category
        </label>
        <select
          id="motion-token-category"
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="motion-token-catalog-filter"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {matchCount != null && (query.trim() || category !== 'All') ? (
        <p className="text-sm text-arvo-light-secondary dark:text-neutral-500 m-0 mt-3" role="status">
          {matchCount === 0
            ? 'No tokens match — try a different search or category.'
            : `${matchCount} token${matchCount === 1 ? '' : 's'} shown`}
        </p>
      ) : null}
    </div>
  )
}
