/**
 * Per-path illustrations for section overview cards (Foundations, Accessibility, etc.).
 * Unmapped paths use the shared default from ComponentsOverview.
 */
const FOUNDATION_GRAPHIC = '/o9DocGraphics/FoundationGraphic'
const ACCESSIBILITY_GRAPHIC = '/AccessibilityGraphics'

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

/** @type {Record<string, string>} */
const ACCESSIBILITY_OVERVIEW_BY_PATH = {
  '/accessibility/overview': `${ACCESSIBILITY_GRAPHIC}/introductionOverview.png`,
  '/accessibility/standards-and-principles': `${ACCESSIBILITY_GRAPHIC}/standard and principles Overview.png`,
  '/accessibility/assistive-technology': `${ACCESSIBILITY_GRAPHIC}/AssistiveTechnologyOverview.png`,
  '/accessibility/screen-reader-and-aria': `${ACCESSIBILITY_GRAPHIC}/ScreenReaderAriaOverview.png`,
  '/accessibility/keyboard-and-focus': `${ACCESSIBILITY_GRAPHIC}/keyboard-focusOverview.png`,
  '/accessibility/shortcuts': `${ACCESSIBILITY_GRAPHIC}/shortcutOverview.png`,
  '/accessibility/visual-accessibility': `${ACCESSIBILITY_GRAPHIC}/VisualAccessibilityOverview.png`,
  '/accessibility/testing-and-qa': `${ACCESSIBILITY_GRAPHIC}/TestingQAOverview.png`,
}

const FALLBACK = '/o9DocGraphics/ComponentsOverview/default.svg'

/**
 * @param {string} path
 * @returns {string}
 */
export function getSectionOverviewIllustrationSrc(path) {
  return SECTION_OVERVIEW_BY_PATH[path] ?? ACCESSIBILITY_OVERVIEW_BY_PATH[path] ?? FALLBACK
}
