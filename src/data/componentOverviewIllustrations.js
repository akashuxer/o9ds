/**
 * Component overview grid: SVG previews in `public/o9DocGraphics/ComponentsOverview/`.
 * Filenames match design exports; map slugs here. Missing slugs use `default.svg`.
 */
const BASE = '/o9DocGraphics/ComponentsOverview'

/** @type {Record<string, string>} */
export const COMPONENT_OVERVIEW_ILLUSTRATION_BY_SLUG = {
  button: `${BASE}/btn.svg`,
  'icon-button': `${BASE}/iconBtn.svg`,
  textbox: `${BASE}/textbox.svg`,
  textarea: `${BASE}/textarea.svg`,
}

const DEFAULT_ILLUSTRATION = `${BASE}/default.svg`

/**
 * @param {string} slug
 * @returns {string} Public URL for the overview illustration
 */
export function getComponentOverviewIllustrationSrc(slug) {
  return COMPONENT_OVERVIEW_ILLUSTRATION_BY_SLUG[slug] ?? DEFAULT_ILLUSTRATION
}
