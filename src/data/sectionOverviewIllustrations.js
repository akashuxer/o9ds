/**
 * Per-path illustrations for Foundations overview cards (`public/o9DocGraphics/FoundationGraphic/`).
 * Unmapped paths use the shared default from ComponentsOverview.
 */
const FOUNDATION_GRAPHIC = '/o9DocGraphics/FoundationGraphic'

/** @type {Record<string, string>} */
const SECTION_OVERVIEW_BY_PATH = {
  '/colors': `${FOUNDATION_GRAPHIC}/colors.png`,
  '/typography': `${FOUNDATION_GRAPHIC}/typography.png`,
  '/spacing': `${FOUNDATION_GRAPHIC}/space.png`,
  '/borders': `${FOUNDATION_GRAPHIC}/border.png`,
  '/effects': `${FOUNDATION_GRAPHIC}/effects.png`,
  '/icons': `${FOUNDATION_GRAPHIC}/icon.png`,
  '/illustrations': `${FOUNDATION_GRAPHIC}/illustration.png`,
  '/symbol': `${FOUNDATION_GRAPHIC}/icon.png`,
  '/motion': `${FOUNDATION_GRAPHIC}/motion.png`,
}

const FALLBACK = '/o9DocGraphics/ComponentsOverview/default.svg'

/**
 * @param {string} path
 * @returns {string}
 */
export function getSectionOverviewIllustrationSrc(path) {
  return SECTION_OVERVIEW_BY_PATH[path] ?? FALLBACK
}
