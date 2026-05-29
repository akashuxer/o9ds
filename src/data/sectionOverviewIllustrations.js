/**
 * Per-path illustrations for section overview cards (Foundations, Accessibility, etc.).
 * Unmapped paths use the shared default from ComponentsOverview.
 */
import {
  PATH_A11Y_ASSISTIVE,
  PATH_A11Y_INTRODUCTION,
  PATH_A11Y_KEYBOARD,
  PATH_A11Y_SCREEN_READER_BASE,
  PATH_A11Y_SHORTCUTS,
  PATH_A11Y_STANDARDS,
  PATH_A11Y_TESTING,
  PATH_A11Y_VISUAL,
  PATH_BORDERS,
  PATH_COLOR_BASE,
  PATH_ICONS_BASE,
  PATH_ILLUSTRATIONS_BASE,
  PATH_MOTION,
  PATH_SPACING,
  PATH_SYMBOL,
  PATH_TYPOGRAPHY_BASE,
  docPagePath,
} from './docPaths'

const FOUNDATION_GRAPHIC = '/o9DocGraphics/FoundationGraphic'
const ACCESSIBILITY_GRAPHIC = '/AccessibilityGraphics'

/** @type {Record<string, string>} */
const SECTION_OVERVIEW_BY_PATH = {
  [docPagePath(PATH_COLOR_BASE, 'Overview')]: `${FOUNDATION_GRAPHIC}/colors.png`,
  [docPagePath(PATH_TYPOGRAPHY_BASE, 'Overview')]: `${FOUNDATION_GRAPHIC}/typography.png`,
  [PATH_SPACING]: `${FOUNDATION_GRAPHIC}/space.png`,
  [PATH_BORDERS]: `${FOUNDATION_GRAPHIC}/border.png`,
  [PATH_EFFECTS]: `${FOUNDATION_GRAPHIC}/effects.png`,
  [docPagePath(PATH_ICONS_BASE, 'Overview')]: `${FOUNDATION_GRAPHIC}/icon.png`,
  [docPagePath(PATH_ILLUSTRATIONS_BASE, 'Overview')]: `${FOUNDATION_GRAPHIC}/illustration.png`,
  [PATH_SYMBOL]: `${FOUNDATION_GRAPHIC}/icon.png`,
  [PATH_MOTION]: `${FOUNDATION_GRAPHIC}/motion.png`,
}

/** @type {Record<string, string>} */
const ACCESSIBILITY_OVERVIEW_BY_PATH = {
  [PATH_A11Y_INTRODUCTION]: `${ACCESSIBILITY_GRAPHIC}/introductionOverview.png`,
  [PATH_A11Y_STANDARDS]: `${ACCESSIBILITY_GRAPHIC}/standard and principles Overview.png`,
  [PATH_A11Y_ASSISTIVE]: `${ACCESSIBILITY_GRAPHIC}/AssistiveTechnologyOverview.png`,
  [docPagePath(PATH_A11Y_SCREEN_READER_BASE, 'Overview')]: `${ACCESSIBILITY_GRAPHIC}/ScreenReaderAriaOverview.png`,
  [PATH_A11Y_KEYBOARD]: `${ACCESSIBILITY_GRAPHIC}/keyboard-focusOverview.png`,
  [PATH_A11Y_SHORTCUTS]: `${ACCESSIBILITY_GRAPHIC}/shortcutOverview.png`,
  [PATH_A11Y_VISUAL]: `${ACCESSIBILITY_GRAPHIC}/VisualAccessibilityOverview.png`,
  [PATH_A11Y_TESTING]: `${ACCESSIBILITY_GRAPHIC}/TestingQAOverview.png`,
}

const FALLBACK = '/o9DocGraphics/ComponentsOverview/default.svg'

/**
 * @param {string} path
 * @returns {string}
 */
export function getSectionOverviewIllustrationSrc(path) {
  return SECTION_OVERVIEW_BY_PATH[path] ?? ACCESSIBILITY_OVERVIEW_BY_PATH[path] ?? FALLBACK
}
