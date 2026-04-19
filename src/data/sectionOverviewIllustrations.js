/**
 * Optional per-path SVGs for section overview cards (`public/o9DocGraphics/SectionOverview/`).
 * Unmapped paths use the shared default from ComponentsOverview.
 */
const SECTION_BASE = '/o9DocGraphics/SectionOverview'

/** @type {Record<string, string>} */
const SECTION_OVERVIEW_BY_PATH = {
  '/effects': '/o9DocGraphics/FoundationGraphic/effects.png',
}

const FALLBACK = '/o9DocGraphics/ComponentsOverview/default.svg'

/**
 * @param {string} path
 * @returns {string}
 */
export function getSectionOverviewIllustrationSrc(path) {
  return SECTION_OVERVIEW_BY_PATH[path] ?? FALLBACK
}
