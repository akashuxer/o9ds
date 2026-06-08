import { tabLabelToSlug } from '../utils/docTabUrl'

/** Top-level doc section prefixes (no trailing slash). */
export const GETTING_STARTED = '/gettingstarted'
export const FOUNDATIONS = '/foundations'
export const COMPONENTS = '/components'
export const ACCESSIBILITY = '/accessibility'
export const CONTENT = '/content'
export const PATTERNS = '/patterns'

/** Build `basePath/tabSlug` — always includes tab (Overview → `overview`). */
export function docPagePath(basePath, tabLabel) {
  const base = basePath.replace(/\/$/, '')
  return `${base}/${tabLabelToSlug(tabLabel)}`
}

// ——— Getting Started ———
export const PATH_HOME = '/'
export const PATH_CHANGELOG = '/changelog'
export const PATH_ABOUT_ARVO = `${GETTING_STARTED}/aboutarvo`
export const PATH_RESOURCES = `${GETTING_STARTED}/resources`
export const PATH_FIGMA_MAKE_BASE = `${GETTING_STARTED}/figma-make`
export const PATH_DESIGNERS = `${GETTING_STARTED}/designers`
export const PATH_CONTRIBUTE = `${GETTING_STARTED}/contribute`
export const PATH_FAQS = `${GETTING_STARTED}/faqs`
export const PATH_ARVO_MCP = `${GETTING_STARTED}/arvo-mcp-other-mcps`

export const PATH_DEV_INTRO_BASE = `${GETTING_STARTED}/developers/introguide`
export const PATH_DEV_USAGE_BASE = `${GETTING_STARTED}/developers/usage`
export const PATH_DEV_REF_BASE = `${GETTING_STARTED}/developers/developer-reference`

// ——— Foundations ———
export const PATH_FOUNDATIONS_OVERVIEW = `${FOUNDATIONS}/overview`
export const PATH_COLOR_BASE = `${FOUNDATIONS}/color`
export const PATH_TYPOGRAPHY_BASE = `${FOUNDATIONS}/typography`
export const PATH_SPACING = `${FOUNDATIONS}/spacing`
export const PATH_BORDERS = `${FOUNDATIONS}/borders`
export const PATH_EFFECTS = `${FOUNDATIONS}/effects`
export const PATH_ICONS_BASE = `${FOUNDATIONS}/icons`
export const PATH_ILLUSTRATIONS_BASE = `${FOUNDATIONS}/illustrations`
export const PATH_SYMBOL = `${FOUNDATIONS}/symbol`
export const PATH_MOTION = `${FOUNDATIONS}/motion`
export const PATH_COLOR_DATA_VIZ = `${FOUNDATIONS}/color/data-viz`

// ——— Components ———
export const PATH_COMPONENTS_OVERVIEW = `${COMPONENTS}/overview`

export function componentDocBase(slug) {
  return `${COMPONENTS}/${slug}`
}

// ——— Accessibility ———
export const PATH_A11Y_OVERVIEW = `${ACCESSIBILITY}/overview`
export const PATH_A11Y_INTRODUCTION = `${ACCESSIBILITY}/introduction`
export const PATH_A11Y_STANDARDS = `${ACCESSIBILITY}/standards-and-principles`
export const PATH_A11Y_ASSISTIVE = `${ACCESSIBILITY}/assistive-technology`
export const PATH_A11Y_SCREEN_READER_BASE = `${ACCESSIBILITY}/screen-reader-and-aria`
export const PATH_A11Y_KEYBOARD = `${ACCESSIBILITY}/keyboard-and-focus`
export const PATH_A11Y_SHORTCUTS = `${ACCESSIBILITY}/shortcuts`
export const PATH_A11Y_VISUAL = `${ACCESSIBILITY}/visual-accessibility`
export const PATH_A11Y_TESTING = `${ACCESSIBILITY}/testing-and-qa`

// ——— Content & Patterns ———
export const PATH_CONTENT_OVERVIEW = `${CONTENT}/overview`
export const PATH_PATTERNS_OVERVIEW = `${PATTERNS}/overview`

export function patternTopicPath(slug) {
  return `${PATTERNS}/${slug}`
}

export function contentTopicPath(slug) {
  return `${CONTENT}/${slug}`
}

export const PATH_GRAMMAR_STYLE_BASE = `${CONTENT}/grammar-style`

export function grammarStyleTopicPath(slug) {
  return `${PATH_GRAMMAR_STYLE_BASE}/${slug}`
}

export function devRefTopicPath(slug) {
  return `${PATH_DEV_REF_BASE}/${slug}`
}

export function devUsageTopicPath(slug) {
  return slug ? `${PATH_DEV_USAGE_BASE}/${slug}` : `${PATH_DEV_USAGE_BASE}/overview`
}

/**
 * Legacy pathname (+ optional tab) → canonical pathname.
 * Used for `<Navigate replace />` routes.
 */
export const LEGACY_PATH_REDIRECTS = {
  '/overview': PATH_ABOUT_ARVO,
  '/resources': PATH_RESOURCES,
  '/principles': `${PATH_ABOUT_ARVO}#principles`,
  '/figma-make': docPagePath(PATH_FIGMA_MAKE_BASE, 'Overview'),
  '/designers': PATH_DESIGNERS,
  '/developers': docPagePath(PATH_DEV_INTRO_BASE, 'Overview'),
  '/arvo-mcp-other-mcps': PATH_ARVO_MCP,
  '/contribute': PATH_CONTRIBUTE,
  '/faqs': PATH_FAQS,
  '/vibe-coders': docPagePath(PATH_FIGMA_MAKE_BASE, 'Overview'),
  '/foundations': PATH_FOUNDATIONS_OVERVIEW,
  '/colors': docPagePath(PATH_COLOR_BASE, 'Overview'),
  '/typography': docPagePath(PATH_TYPOGRAPHY_BASE, 'Overview'),
  '/spacing': PATH_SPACING,
  '/borders': PATH_BORDERS,
  '/effects': PATH_EFFECTS,
  '/elevation': PATH_EFFECTS,
  '/icons': docPagePath(PATH_ICONS_BASE, 'Overview'),
  '/illustrations': docPagePath(PATH_ILLUSTRATIONS_BASE, 'Overview'),
  '/symbol': PATH_SYMBOL,
  '/motion': PATH_MOTION,
  '/colors/data-viz': PATH_COLOR_DATA_VIZ,
  '/components': PATH_COMPONENTS_OVERVIEW,
  '/accessibility': PATH_A11Y_OVERVIEW,
  '/accessibility/overview': PATH_A11Y_INTRODUCTION,
  '/accessibility/glossary': PATH_A11Y_INTRODUCTION,
  '/accessibility/component-accessibility-template': PATH_A11Y_INTRODUCTION,
  '/accessibility/semantics-and-aria': docPagePath(PATH_A11Y_SCREEN_READER_BASE, 'Overview'),
  '/accessibility/labels-errors-and-content': docPagePath(PATH_A11Y_SCREEN_READER_BASE, 'Overview'),
  '/content': PATH_CONTENT_OVERVIEW,
  '/patterns': PATH_PATTERNS_OVERVIEW,
  '/usage': devUsageTopicPath('overview'),
  '/developer-reference': devRefTopicPath('agentic-pipeline'),
}
