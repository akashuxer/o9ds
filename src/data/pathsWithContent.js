/**
 * Sidebar green dot + section overview "ready" state: routes with real documentation
 * (not placeholder). Import this single source from Layout and overview pages.
 */
import {
  PATH_ABOUT_ARVO,
  PATH_A11Y_ASSISTIVE,
  PATH_A11Y_INTRODUCTION,
  PATH_A11Y_KEYBOARD,
  PATH_A11Y_OVERVIEW,
  PATH_A11Y_SCREEN_READER_BASE,
  PATH_A11Y_STANDARDS,
  PATH_A11Y_TESTING,
  PATH_A11Y_VISUAL,
  PATH_BORDERS,
  PATH_COLOR_BASE,
  PATH_COMPONENTS_OVERVIEW,
  PATH_DEV_INTRO_BASE,
  PATH_EFFECTS,
  PATH_FIGMA_MAKE_BASE,
  PATH_FOUNDATIONS_OVERVIEW,
  PATH_HOME,
  PATH_ICONS_BASE,
  PATH_ILLUSTRATIONS_BASE,
  PATH_RESOURCES,
  PATH_SPACING,
  PATH_SYMBOL,
  PATH_TYPOGRAPHY_BASE,
  PATH_CONTENT_OVERVIEW,
  componentDocBase,
  contentTopicPath,
  docPagePath,
  grammarStyleTopicPath,
} from './docPaths'
import { GRAMMAR_STYLE_TOPICS } from './contentGrammarNav'

/** Content Guidelines routes with published documentation (sidebar green dot + ready filter). */
const CONTENT_GUIDELINES_READY_PATHS = new Set([
  PATH_CONTENT_OVERVIEW,
  contentTopicPath('voice-and-tone'),
  contentTopicPath('writing-principles'),
  ...GRAMMAR_STYLE_TOPICS.map((topic) => grammarStyleTopicPath(topic.slug)),
])

export const PATHS_WITH_CONTENT = new Set([
  PATH_HOME,
  PATH_ABOUT_ARVO,
  PATH_RESOURCES,
  PATH_FOUNDATIONS_OVERVIEW,
  docPagePath(PATH_COLOR_BASE, 'Overview'),
  docPagePath(PATH_TYPOGRAPHY_BASE, 'Overview'),
  PATH_SPACING,
  PATH_BORDERS,
  PATH_EFFECTS,
  docPagePath(PATH_ICONS_BASE, 'Overview'),
  docPagePath(PATH_ILLUSTRATIONS_BASE, 'Overview'),
  PATH_SYMBOL,
  PATH_COMPONENTS_OVERVIEW,
  docPagePath(PATH_DEV_INTRO_BASE, 'Overview'),
  docPagePath(PATH_FIGMA_MAKE_BASE, 'Overview'),
  PATH_A11Y_OVERVIEW,
  PATH_A11Y_INTRODUCTION,
  PATH_A11Y_STANDARDS,
  PATH_A11Y_ASSISTIVE,
  docPagePath(PATH_A11Y_SCREEN_READER_BASE, 'Overview'),
  PATH_A11Y_KEYBOARD,
  PATH_A11Y_VISUAL,
  PATH_A11Y_TESTING,

  // Buttons & Actions
  componentDocBase('button') + '/overview',
  componentDocBase('icon-button') + '/overview',
  componentDocBase('button-group') + '/overview',
  componentDocBase('dropdown-button') + '/overview',
  componentDocBase('dropdown-icon-button') + '/overview',
  componentDocBase('fab-button') + '/overview',

  // Navigation
  componentDocBase('link') + '/overview',
  componentDocBase('button-link') + '/overview',
  componentDocBase('icon-button-link') + '/overview',
  componentDocBase('tabstrip') + '/overview',
  componentDocBase('breadcrumb') + '/overview',

  // Inputs — Text
  componentDocBase('textbox') + '/overview',
  componentDocBase('textarea') + '/overview',
  componentDocBase('number-input') + '/overview',

  // Inputs — Selection Controls
  componentDocBase('checkbox') + '/overview',
  componentDocBase('checkbox-group') + '/overview',
  componentDocBase('radio') + '/overview',
  componentDocBase('radio-group') + '/overview',
  componentDocBase('switch') + '/overview',

  // Inputs — Selection Inputs
  componentDocBase('select-dropdown') + '/overview',
  componentDocBase('combobox') + '/overview',
  componentDocBase('listbox') + '/overview',
  componentDocBase('search') + '/overview',

  // Inputs — Other
  componentDocBase('chip') + '/overview',

  // Overlays
  componentDocBase('popover') + '/overview',
  componentDocBase('hybrid-popover') + '/overview',
  componentDocBase('action-menu') + '/overview',
  componentDocBase('tooltip') + '/overview',
  componentDocBase('alert-dialog') + '/overview',
  componentDocBase('drawer') + '/overview',
  componentDocBase('side-panel') + '/overview',

  // Feedback
  componentDocBase('badge') + '/overview',
  componentDocBase('banner-alerts') + '/overview',
  componentDocBase('inline-alert') + '/overview',
  componentDocBase('toast') + '/overview',

  // Utilities
  componentDocBase('label') + '/overview',

  // Data display
  componentDocBase('cards') + '/overview',
  componentDocBase('accordion') + '/overview',

  // Buttons — more
  componentDocBase('segmented-control') + '/overview',
  componentDocBase('split-button') + '/overview',
  componentDocBase('split-icon-button') + '/overview',
  // Feedback — extended
  componentDocBase('empty-state') + '/overview',
  componentDocBase('skeleton-loader') + '/overview',
  componentDocBase('spinner') + '/overview',

  // Inputs — date & time
  componentDocBase('date-picker') + '/overview',
  componentDocBase('date-range-picker') + '/overview',
  componentDocBase('date-time-picker') + '/overview',
  componentDocBase('time-picker') + '/overview',
  componentDocBase('multi-select') + '/overview',
  componentDocBase('otp-input') + '/overview',
  componentDocBase('slider') + '/overview',
  componentDocBase('text-editor') + '/overview',

  // Navigation — extended
  componentDocBase('tree') + '/overview',

  // Utilities
  componentDocBase('avatar') + '/overview',
  componentDocBase('avatar-group') + '/overview',
  componentDocBase('scroll-bar') + '/overview',
  componentDocBase('splitter') + '/overview',
])

/** Match pathname to a ready route (supports tab suffixes under known bases). */
export function hasReadyDocumentation(pathname) {
  const normalized = pathname.replace(/\/$/, '') || '/'

  if (normalized === '/patterns' || normalized.startsWith('/patterns/')) return false

  if (normalized === '/content' || normalized.startsWith('/content/')) {
    return CONTENT_GUIDELINES_READY_PATHS.has(normalized)
  }

  if (PATHS_WITH_CONTENT.has(normalized)) return true

  for (const ready of PATHS_WITH_CONTENT) {
    if (normalized.startsWith(`${ready.replace(/\/overview$/, '')}/`)) return true
  }

  const componentMatch = normalized.match(/^\/components\/[^/]+\//)
  if (componentMatch && PATHS_WITH_CONTENT.has(`${componentMatch[0].slice(0, -1)}/overview`)) {
    return true
  }

  const tabbedBases = [
    PATH_COLOR_BASE,
    PATH_TYPOGRAPHY_BASE,
    PATH_ICONS_BASE,
    PATH_ILLUSTRATIONS_BASE,
    PATH_FIGMA_MAKE_BASE,
    PATH_DEV_INTRO_BASE,
    PATH_A11Y_SCREEN_READER_BASE,
  ]
  for (const base of tabbedBases) {
    if (normalized.startsWith(`${base}/`) && PATHS_WITH_CONTENT.has(docPagePath(base, 'Overview'))) {
      return true
    }
  }

  return false
}
