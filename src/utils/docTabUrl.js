/**
 * URL slugs for documentation tabs (path segment after the page base).
 * "Code/APIs" → "code-apis", "o9con Gallery" → "o9con-gallery"
 */
export function tabLabelToSlug(label) {
  return label
    .trim()
    .toLowerCase()
    .replace(/\s*\/\s*/g, '-')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

export function resolveTabFromSlug(tabSlug, tabs) {
  if (!tabSlug) return tabs[0]
  const match = tabs.find((t) => tabLabelToSlug(t) === tabSlug)
  return match ?? tabs[0]
}

/**
 * Parse tab slug from pathname given an explicit doc base (e.g. `/foundations/typography`).
 */
export function getDocTabFromPathname(pathname, tabs, explicitBasePath) {
  const normalized = pathname.replace(/\/$/, '') || '/'
  const base = explicitBasePath.replace(/\/$/, '')

  if (!normalized.startsWith(base)) {
    return { basePath: base, tabSlug: null }
  }

  const rest = normalized.slice(base.length).replace(/^\//, '')
  if (!rest) {
    return { basePath: base, tabSlug: null }
  }

  const slug = rest.split('/')[0]
  const tabSlugs = new Set(tabs.map(tabLabelToSlug))
  if (tabSlugs.has(slug)) {
    return { basePath: base, tabSlug: slug }
  }

  return { basePath: base, tabSlug: null }
}

/** Always includes tab segment (Overview → `…/overview`). */
export function buildDocTabPath(basePath, tab) {
  const base = basePath.replace(/\/$/, '')
  return `${base}/${tabLabelToSlug(tab)}`
}
