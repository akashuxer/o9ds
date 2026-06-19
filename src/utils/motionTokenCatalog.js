import {
  MOTION_DURATION_ROWS,
  MOTION_EASING_ROWS,
  MOTION_SEMANTIC_SECTIONS,
} from '../data/motionTokens.js'
import { MOTION_PLAYGROUND_EXAMPLES } from '../data/motionPlayground.js'
import { MOTION_EXAMPLE_META } from '../data/motionPlaygroundCategories.js'

/** SCSS `$token` → CSS custom property `--token` (strip leading `$`). */
export function motionTokenToCssVar(token) {
  return `--${token.replace(/^\$/, '')}`
}

const DURATION_MS = Object.fromEntries(
  MOTION_DURATION_ROWS.map(({ token, value }) => [token, value]),
)

const EASING_LABEL = Object.fromEntries(
  MOTION_EASING_ROWS.map(({ token, value }) => {
    const short = token.replace('$arvo-ease-', '')
    const label = short === 'in-out' ? 'Ease-in-out' : short.charAt(0).toUpperCase() + short.slice(1)
    return [token, label]
  }),
)

/** Tokens that alias another token — surfaced in the catalog. */
const TOKEN_ALIASES = {
  '$arvo-transition-toggle-slide': {
    status: 'Alias',
    note: 'Prefer $arvo-transition-switch-slide',
    resolvesTo: '$arvo-transition-switch-slide',
  },
}

function resolveTokenValue(value, depth = 0) {
  if (depth > 4) return value
  const trimmed = value.trim()
  if (trimmed.startsWith('$') && !trimmed.includes(' ')) {
    const alias = TOKEN_ALIASES[trimmed]
    if (alias?.resolvesTo) {
      const resolved = findCatalogRawValue(alias.resolvesTo)
      return resolved ? resolveTokenValue(resolved, depth + 1) : trimmed
    }
  }
  return value
}

function findCatalogRawValue(token) {
  for (const row of MOTION_DURATION_ROWS) {
    if (row.token === token) return row.value
  }
  for (const row of MOTION_EASING_ROWS) {
    if (row.token === token) return row.value
  }
  for (const section of MOTION_SEMANTIC_SECTIONS) {
    for (const row of section.rows) {
      if (row.token === token) return row.value
    }
  }
  return null
}

function parseDurations(value) {
  const resolved = resolveTokenValue(value)
  const refs = [...resolved.matchAll(/\$arvo-duration-[\w-]+/g)].map((m) => m[0])
  const direct = [...resolved.matchAll(/\b(\d+(?:\.\d+)?ms)\b/g)].map((m) => m[1])
  const unique = [...new Set([...refs.map((r) => DURATION_MS[r] ?? r), ...direct])]
  if (unique.length === 0) return '—'
  return unique.join(', ')
}

function parseEasings(value) {
  const resolved = resolveTokenValue(value)
  const refs = [...resolved.matchAll(/\$arvo-ease-[\w-]+/g)].map((m) => m[0])
  const direct = [...resolved.matchAll(/\b(ease(?:-in-out|-in|-out)?|linear|cubic-bezier\([^)]+\))\b/g)].map(
    (m) => m[1],
  )
  const labels = refs.map((r) => EASING_LABEL[r] ?? r)
  const unique = [...new Set([...labels, ...direct])]
  if (unique.length === 0) return '—'
  return unique.join(', ')
}

function parseDelay(value) {
  const resolved = resolveTokenValue(value)
  const delayMatch = resolved.match(/(?:^|[\s,])(\d+(?:\.\d+)?ms)\s+\d/ )
  if (delayMatch) return delayMatch[1]
  if (/\$arvo-duration-instant/.test(resolved) && /opacity|transform/.test(resolved)) {
    return '120ms (orchestration)'
  }
  return '—'
}

const MOTION_TOKEN_PREFIXES = [
  '$arvo-motion-',
  '$arvo-transition-',
  '$arvo-duration-',
  '$arvo-ease-',
  '$arvo-transform-',
  '$arvo-toast-duration-',
]

function isMotionToken(token) {
  return MOTION_TOKEN_PREFIXES.some((prefix) => token.startsWith(prefix))
}

/** Reverse map: token → playground example ids that reference it. */
function buildTokenExampleMap() {
  /** @type {Record<string, string[]>} */
  const map = {}
  for (const ex of MOTION_PLAYGROUND_EXAMPLES) {
    for (const token of ex.tokens) {
      if (!map[token]) map[token] = []
      if (!map[token].includes(ex.id)) map[token].push(ex.id)
    }
  }
  return map
}

const TOKEN_EXAMPLE_MAP = buildTokenExampleMap()

function exampleTitle(id) {
  return MOTION_PLAYGROUND_EXAMPLES.find((e) => e.id === id)?.title ?? id
}

function relatedPatternsForToken(token) {
  const ids = TOKEN_EXAMPLE_MAP[token] ?? []
  if (ids.length === 0) return '—'
  return ids.map((id) => MOTION_EXAMPLE_META[id]?.relatedComponent ?? exampleTitle(id)).join(', ')
}

/**
 * @returns {Array<{
 *   token: string,
 *   category: string,
 *   cssVar: string,
 *   value: string,
 *   duration: string,
 *   easing: string,
 *   delay: string,
 *   usage: string,
 *   relatedPattern: string,
 *   exampleIds: string[],
 *   status?: string,
 *   note?: string,
 * }>}
 */
export function buildMotionTokenCatalog() {
  /** @type {ReturnType<typeof buildMotionTokenCatalog>} */
  const rows = []

  for (const row of MOTION_DURATION_ROWS) {
    rows.push({
      token: row.token,
      category: 'Core duration',
      cssVar: motionTokenToCssVar(row.token),
      value: row.value,
      duration: row.value,
      easing: '—',
      delay: '—',
      usage: row.meaning,
      relatedPattern: relatedPatternsForToken(row.token),
      exampleIds: TOKEN_EXAMPLE_MAP[row.token] ?? [],
    })
  }

  for (const row of MOTION_EASING_ROWS) {
    rows.push({
      token: row.token,
      category: 'Core easing',
      cssVar: motionTokenToCssVar(row.token),
      value: row.value,
      duration: '—',
      easing: EASING_LABEL[row.token] ?? row.value,
      delay: '—',
      usage: row.meaning,
      relatedPattern: relatedPatternsForToken(row.token),
      exampleIds: TOKEN_EXAMPLE_MAP[row.token] ?? [],
    })
  }

  for (const section of MOTION_SEMANTIC_SECTIONS) {
    for (const row of section.rows) {
      const alias = TOKEN_ALIASES[row.token]
      const isTransform = row.token.includes('transform')
      rows.push({
        token: row.token,
        category: section.title,
        cssVar: motionTokenToCssVar(row.token),
        value: row.value,
        duration: isTransform ? '—' : parseDurations(row.value),
        easing: isTransform ? '—' : parseEasings(row.value),
        delay: isTransform ? '—' : parseDelay(row.value),
        usage: section.description ?? section.title,
        relatedPattern: relatedPatternsForToken(row.token),
        exampleIds: TOKEN_EXAMPLE_MAP[row.token] ?? [],
        ...(alias ? { status: alias.status, note: alias.note } : {}),
      })
    }
  }

  return rows
}

/** Validate playground examples reference documented tokens only. */
export function validateMotionPlaygroundTokens() {
  const catalogTokens = new Set(buildMotionTokenCatalog().map((r) => r.token))
  /** @type {string[]} */
  const undocumented = []

  for (const ex of MOTION_PLAYGROUND_EXAMPLES) {
    for (const token of ex.tokens) {
      if (!isMotionToken(token)) continue
      if (!catalogTokens.has(token)) undocumented.push(`${ex.id}: ${token}`)
    }
  }

  return {
    ok: undocumented.length === 0,
    undocumented,
    exampleCount: MOTION_PLAYGROUND_EXAMPLES.length,
    tokenCount: catalogTokens.size,
  }
}

export const MOTION_TOKEN_CATALOG = buildMotionTokenCatalog()

/** Distinct categories for filter UI. */
export const MOTION_TOKEN_CATALOG_CATEGORIES = [
  'All',
  ...new Set(MOTION_TOKEN_CATALOG.map((r) => r.category)),
]
