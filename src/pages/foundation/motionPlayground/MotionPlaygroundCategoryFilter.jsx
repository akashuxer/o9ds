import { MOTION_PLAYGROUND_CATEGORIES } from '../../../data/motionPlaygroundCategories'

/** @typedef {'all' | 'featured' | import('../../../data/motionPlaygroundCategories').MotionCategoryId} MotionPlaygroundFilterId */

/**
 * @param {object} props
 * @param {MotionPlaygroundFilterId} props.activeFilter
 * @param {(id: MotionPlaygroundFilterId) => void} props.onSelect
 * @param {Record<string, number>} [props.counts]
 */
export default function MotionPlaygroundCategoryFilter({ activeFilter, onSelect, counts = {} }) {
  return (
    <div
      className="motion-category-filter"
      role="tablist"
      aria-label="Motion pattern categories"
    >
      <button
        type="button"
        role="tab"
        id="motion-filter-all"
        aria-selected={activeFilter === 'all'}
        className={`motion-category-filter__chip${activeFilter === 'all' ? ' is-active' : ''}`}
        onClick={() => onSelect('all')}
      >
        All
        <span className="motion-category-filter__count">{counts.all ?? 0}</span>
      </button>
      <button
        type="button"
        role="tab"
        id="motion-filter-featured"
        aria-selected={activeFilter === 'featured'}
        className={`motion-category-filter__chip${activeFilter === 'featured' ? ' is-active' : ''}`}
        onClick={() => onSelect('featured')}
      >
        Featured
        <span className="motion-category-filter__count">{counts.featured ?? 6}</span>
      </button>
      {MOTION_PLAYGROUND_CATEGORIES.map((category) => (
        <button
          key={category.categoryId}
          type="button"
          role="tab"
          id={`motion-filter-${category.categoryId}`}
          aria-selected={activeFilter === category.categoryId}
          className={`motion-category-filter__chip${activeFilter === category.categoryId ? ' is-active' : ''}`}
          onClick={() => onSelect(category.categoryId)}
        >
          {category.shortTitle ?? category.title}
          <span className="motion-category-filter__count">
            {counts[category.categoryId] ?? category.exampleIds.length}
          </span>
        </button>
      ))}
    </div>
  )
}
