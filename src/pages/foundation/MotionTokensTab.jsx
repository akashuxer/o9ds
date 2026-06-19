import { useMemo, useState } from 'react'
import DocSection, { DocParagraph } from '../../LayoutComponents/DocSection'
import DocTable from '../../LayoutComponents/DocTable'
import MotionDurationStrip from '../../LayoutComponents/MotionDurationStrip'
import MotionEasingStrip from '../../LayoutComponents/MotionEasingStrip'
import {
  MOTION_DURATION_ROWS,
  MOTION_EASING_ROWS,
  MOTION_SEMANTIC_SECTIONS,
  motionTokenClipboard,
} from '../../data/motionTokens'
import { MOTION_TOKEN_CATALOG_CATEGORIES } from '../../utils/motionTokenCatalog'
import MotionTokenCatalogFilter from './motionPlayground/MotionTokenCatalogFilter'
import '../../styles/motion-gallery.css'

const TOKEN_COLUMNS = [
  { key: 'token', label: 'Token', mono: true },
  { key: 'value', label: 'Value', mono: true },
]

const CORE_TOKEN_COLUMNS = [
  { key: 'token', label: 'Token', mono: true },
  { key: 'value', label: 'Value', mono: true },
  { key: 'meaning', label: 'Use when' },
]

const CORE_DURATION_CATEGORY = 'Core duration'
const CORE_EASING_CATEGORY = 'Core easing'

function rowMatchesSearch(row, query) {
  const q = query.trim().toLowerCase()
  if (!q) return true
  const haystack = [row.token, row.value, row.meaning, row.scss]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()
  return haystack.includes(q)
}

function filterRows(rows, query) {
  return rows.filter((row) => rowMatchesSearch(row, query))
}

/** Motion & Animation — Tokens tab. */
export default function MotionTokensTab() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const matchCount = useMemo(() => {
    let count = 0
    const q = query.trim()
    const filterCategory = category !== 'All'

    if (!filterCategory || category === CORE_DURATION_CATEGORY) {
      count += filterRows(MOTION_DURATION_ROWS, q).length
    }
    if (!filterCategory || category === CORE_EASING_CATEGORY) {
      count += filterRows(MOTION_EASING_ROWS, q).length
    }
    for (const section of MOTION_SEMANTIC_SECTIONS) {
      if (!filterCategory || category === section.title) {
        count += filterRows(section.rows, q).length
      }
    }
    return count
  }, [query, category])

  const showCoreDurations = category === 'All' || category === CORE_DURATION_CATEGORY
  const showCoreEasing = category === 'All' || category === CORE_EASING_CATEGORY

  const durationRows = useMemo(
    () => (showCoreDurations ? filterRows(MOTION_DURATION_ROWS, query) : []),
    [showCoreDurations, query],
  )
  const easingRows = useMemo(
    () => (showCoreEasing ? filterRows(MOTION_EASING_ROWS, query) : []),
    [showCoreEasing, query],
  )

  const semanticSections = useMemo(
    () =>
      MOTION_SEMANTIC_SECTIONS.map((section) => ({
        ...section,
        rows: filterRows(section.rows, query),
      })).filter((section) => {
        if (category !== 'All' && category !== section.title) return false
        return section.rows.length > 0
      }),
    [query, category],
  )

  const hasVisibleSections =
    durationRows.length > 0 || easingRows.length > 0 || semanticSections.length > 0

  return (
    <div className="motion-docs space-y-12 max-w-5xl">
      <DocSection id="motion-token-catalog" title="Find tokens">
        <DocParagraph>
          Search and filter tokens below — core durations, easing curves, and semantic groups. Values match the
          downloadable <code className="text-sm font-mono">_animation.scss</code> file at the bottom of this tab.
        </DocParagraph>
        <MotionTokenCatalogFilter
          query={query}
          onQueryChange={setQuery}
          category={category}
          onCategoryChange={setCategory}
          categories={MOTION_TOKEN_CATALOG_CATEGORIES}
          matchCount={query.trim() || category !== 'All' ? matchCount : undefined}
        />
      </DocSection>

      {!hasVisibleSections && (query.trim() || category !== 'All') ? (
        <p className="text-sm text-arvo-light-secondary dark:text-neutral-500">
          No matching tokens. Clear the search or choose <strong>All</strong> categories.
        </p>
      ) : null}

      {durationRows.length > 0 ? (
        <DocSection id="motion-core-durations" title="Core durations">
          <DocParagraph>
            Base duration scale for transitions and animations across Arvo components. Most interaction motion finishes
            between 120ms and 300ms.
          </DocParagraph>
          <MotionDurationStrip />
          <DocTable
            columns={CORE_TOKEN_COLUMNS}
            rows={durationRows}
            highlightFirstColumnIdentifier
            rowCopy={motionTokenClipboard}
            rowCopyAlwaysVisible
          />
        </DocSection>
      ) : null}

      {easingRows.length > 0 ? (
        <DocSection id="motion-core-easing" title="Core easing">
          <DocParagraph>
            Easing curves control acceleration — whether motion eases in, eases out, or both. Semantic motion tokens
            reference one of these curves; pick based on how decisive or gentle the interaction should feel.
          </DocParagraph>
          <MotionEasingStrip />
          <DocTable
            columns={CORE_TOKEN_COLUMNS}
            rows={easingRows}
            highlightFirstColumnIdentifier
            rowCopy={motionTokenClipboard}
            rowCopyAlwaysVisible
          />
        </DocSection>
      ) : null}

      {semanticSections.map(({ id, title, description, rows }) => (
        <DocSection key={id} id={id} title={title}>
          {description && <DocParagraph>{description}</DocParagraph>}
          <DocTable
            columns={TOKEN_COLUMNS}
            rows={rows}
            highlightFirstColumnIdentifier
            rowCopy={motionTokenClipboard}
            rowCopyAlwaysVisible
          />
        </DocSection>
      ))}
    </div>
  )
}
