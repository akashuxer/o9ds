import { COMPONENTS_NAV_TREE } from '../data/componentsNav'
import { GRAMMAR_STYLE_TOPICS } from '../data/contentGrammarNav'
import { CONTRIBUTE_TABS } from '../pages/contribute/contributeData'
import {
  LEGACY_PATH_REDIRECTS,
  PATH_A11Y_ASSISTIVE,
  PATH_A11Y_INTRODUCTION,
  PATH_A11Y_KEYBOARD,
  PATH_A11Y_OVERVIEW,
  PATH_A11Y_SCREEN_READER_BASE,
  PATH_A11Y_SHORTCUTS,
  PATH_A11Y_STANDARDS,
  PATH_A11Y_TESTING,
  PATH_A11Y_VISUAL,
  PATH_ABOUT_ARVO,
  PATH_ARVO_MCP,
  PATH_ARVO_NOVA_AI_AGENT,
  PATH_BORDERS,
  PATH_CHANGELOG,
  PATH_COLOR_BASE,
  PATH_COLOR_DATA_VIZ,
  PATH_COMPONENTS_OVERVIEW,
  PATH_CONTENT_OVERVIEW,
  PATH_CONTRIBUTE,
  PATH_DESIGNERS,
  PATH_FAQS,
  PATH_DEV_INTRO_BASE,
  PATH_DEV_REF_BASE,
  PATH_DEV_USAGE_BASE,
  PATH_EFFECTS,
  PATH_FIGMA_MAKE_BASE,
  PATH_FOUNDATIONS_OVERVIEW,
  PATH_GRAMMAR_STYLE_BASE,
  PATH_HOME,
  PATH_ICONS_BASE,
  PATH_ILLUSTRATIONS_BASE,
  PATH_MOTION,
  PATH_PATTERNS_OVERVIEW,
  PATH_RESOURCES,
  PATH_SPACING,
  PATH_SYMBOL,
  PATH_LOGOS_BASE,
  PATH_TYPOGRAPHY_BASE,
  contentTopicPath,
} from '../data/docPaths'
import { resolveTabFromSlug, tabLabelToSlug } from './docTabUrl'

export const HOME_DOCUMENT_TITLE = 'Arvo - o9 Platform Design System'

const COMPONENT_DOC_TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']
const DEV_INTRO_TABS = ['Overview', 'Usage', 'Architecture']
const FIGMA_MAKE_TABS = ['Overview', 'Make Templates', 'Reference Library', 'Make Demos', 'Prompts Library']
const COLOR_TABS = ['Overview', 'Brand Colors', 'Global Tokens', 'Semantic Tokens']
const TYPOGRAPHY_TABS = ['Overview', 'Tokens']
const ICONS_TABS = ['Overview', 'o9con Gallery', 'Accessibility', 'Code']
const ILLUSTRATIONS_TABS = ['Overview', 'o9Illus Gallery', 'Accessibility', 'Code']
const LOGOS_TABS = ['Overview', 'Logo Gallery']
const MOTION_TABS = ['Overview', 'Tokens', 'Playground']
const SCREEN_READER_TABS = ['Overview', 'Labels', 'Live regions', 'Heading & page title']

const USAGE_TOPIC_LABELS = {
  overview: 'Usage Standards',
  'public-api': 'Public API',
  components: 'Components Contract',
  styling: 'Styling',
  composition: 'Composition',
  accessibility: 'Accessibility',
  testing: 'Testing',
  versioning: 'Versioning',
  'anti-patterns': 'Anti-Patterns',
  checklist: 'PR Checklist',
}

const DEV_REF_TOPIC_LABELS = {
  'agentic-pipeline': 'Agentic Pipeline',
  'component-pipeline': 'Component Pipeline',
  'token-pipeline': 'Token Pipeline',
  'shared-patterns': 'Shared Patterns',
  'testing-and-drift': 'Testing & Drift',
  workflows: 'Contributor Workflows',
}

const PATTERN_LABELS = {
  forms: 'Forms',
  search: 'Search',
  'application-layouts': 'Application Layouts',
  'notifications-alerts': 'Notifications / Alerts',
  truncation: 'Truncation',
  loading: 'Loading',
  export: 'Export',
  'destructive-action': 'Destructive Action',
  navigation: 'Navigation',
  'on-hover-always-visible': 'On Hover / Always Visible',
  filters: 'Filters',
  'bulk-actions': 'Bulk Actions',
}

const STATIC_PAGES = {
  [PATH_CHANGELOG]: 'Changelog',
  [PATH_ABOUT_ARVO]: 'About Arvo',
  [PATH_RESOURCES]: 'Resources',
  [PATH_ARVO_NOVA_AI_AGENT]: 'Arvo — Nova AI Agent',
  [PATH_ARVO_MCP]: 'Arvo MCP/Other MCPs',
  [PATH_DESIGNERS]: 'For Designers',
  [PATH_FAQS]: 'FAQs',
  [PATH_FOUNDATIONS_OVERVIEW]: 'Foundations',
  [PATH_SPACING]: 'Spacing',
  [PATH_BORDERS]: 'Borders & Radius',
  [PATH_EFFECTS]: 'Effects',
  [PATH_SYMBOL]: 'Symbol',
  [PATH_COLOR_DATA_VIZ]: 'Data Visualization Colors',
  [PATH_COMPONENTS_OVERVIEW]: 'Components',
  [PATH_A11Y_OVERVIEW]: 'Accessibility',
  [PATH_A11Y_INTRODUCTION]: 'Introduction',
  [PATH_A11Y_STANDARDS]: 'Standards and principles',
  [PATH_A11Y_ASSISTIVE]: 'Assistive technology',
  [PATH_A11Y_KEYBOARD]: 'Keyboard and focus',
  [PATH_A11Y_SHORTCUTS]: 'Shortcuts',
  [PATH_A11Y_VISUAL]: 'Visual accessibility',
  [PATH_A11Y_TESTING]: 'Testing and QA',
  [PATH_CONTENT_OVERVIEW]: 'Content Guidelines',
  [contentTopicPath('voice-and-tone')]: 'Voice and Tone',
  [contentTopicPath('writing-principles')]: 'Writing Principles',
  [PATH_PATTERNS_OVERVIEW]: 'Patterns',
}

function buildComponentSlugLabels() {
  const map = {}
  for (const group of COMPONENTS_NAV_TREE) {
    for (const leaf of group.children) {
      const match = leaf.path.match(/^\/components\/([^/]+)\//)
      if (match) map[match[1]] = leaf.label
    }
  }
  return map
}

const COMPONENT_SLUG_LABELS = buildComponentSlugLabels()

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function titleizeSlug(slug) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function appendTab(pageLabel, tabSlug, tabs) {
  if (!tabSlug) return pageLabel
  const overviewSlug = tabLabelToSlug(tabs[0])
  if (tabSlug === overviewSlug) return pageLabel
  return `${pageLabel} — ${resolveTabFromSlug(tabSlug, tabs)}`
}

function matchTabbedBase(path, basePath, pageLabel, tabs) {
  const base = basePath.replace(/\/$/, '')
  if (path === base) return pageLabel
  const prefix = `${base}/`
  if (!path.startsWith(prefix)) return null
  const tabSlug = path.slice(prefix.length).split('/')[0]
  return appendTab(pageLabel, tabSlug, tabs)
}

/**
 * Human-readable page name for the current route (null on home).
 */
export function getPageTitleFromPathname(pathname) {
  const path = pathname.replace(/\/$/, '') || '/'
  if (path === PATH_HOME) return null

  const legacyTarget = LEGACY_PATH_REDIRECTS[path]
  if (legacyTarget && !legacyTarget.includes('#')) {
    return getPageTitleFromPathname(legacyTarget)
  }

  if (STATIC_PAGES[path]) return STATIC_PAGES[path]

  let title =
    matchTabbedBase(path, PATH_DEV_INTRO_BASE, 'For Developers', DEV_INTRO_TABS) ??
    matchTabbedBase(path, PATH_CONTRIBUTE, 'How to Contribute', CONTRIBUTE_TABS) ??
    matchTabbedBase(path, PATH_FIGMA_MAKE_BASE, 'For Figma Make Users', FIGMA_MAKE_TABS) ??
    matchTabbedBase(path, PATH_COLOR_BASE, 'Colors', COLOR_TABS) ??
    matchTabbedBase(path, PATH_TYPOGRAPHY_BASE, 'Typography', TYPOGRAPHY_TABS) ??
    matchTabbedBase(path, PATH_ICONS_BASE, 'Iconography', ICONS_TABS) ??
    matchTabbedBase(path, PATH_ILLUSTRATIONS_BASE, 'Illustrations', ILLUSTRATIONS_TABS) ??
    matchTabbedBase(path, PATH_LOGOS_BASE, 'Logos', LOGOS_TABS) ??
    matchTabbedBase(path, PATH_MOTION, 'Motion & Animation', MOTION_TABS) ??
    matchTabbedBase(path, PATH_A11Y_SCREEN_READER_BASE, 'Screen reader and ARIA', SCREEN_READER_TABS)
  if (title) return title

  let match = path.match(new RegExp(`^${escapeRegExp(PATH_DEV_USAGE_BASE)}/([^/]+)`))
  if (match) return USAGE_TOPIC_LABELS[match[1]] ?? titleizeSlug(match[1])

  match = path.match(new RegExp(`^${escapeRegExp(PATH_DEV_REF_BASE)}/([^/]+)`))
  if (match) return DEV_REF_TOPIC_LABELS[match[1]] ?? titleizeSlug(match[1])

  match = path.match(/^\/components\/([^/]+)(?:\/([^/]+))?$/)
  if (match) {
    const [, slug, tabSlug] = match
    if (slug === 'overview') return 'Components'
    const label = COMPONENT_SLUG_LABELS[slug] ?? titleizeSlug(slug)
    return appendTab(label, tabSlug ?? tabLabelToSlug(COMPONENT_DOC_TABS[0]), COMPONENT_DOC_TABS)
  }

  match = path.match(new RegExp(`^${escapeRegExp(PATH_GRAMMAR_STYLE_BASE)}/([^/]+)`))
  if (match) {
    const topic = GRAMMAR_STYLE_TOPICS.find((item) => item.slug === match[1])
    if (topic?.slug === 'intro') return 'Grammar & Style'
    return topic?.label ?? titleizeSlug(match[1])
  }

  match = path.match(/^\/patterns\/([^/]+)/)
  if (match) return PATTERN_LABELS[match[1]] ?? titleizeSlug(match[1])

  const lastSegment = path.split('/').pop()
  return lastSegment ? titleizeSlug(lastSegment) : 'Page'
}

export function getDocumentTitle(pathname) {
  const pageName = getPageTitleFromPathname(pathname)
  if (pageName === null) return HOME_DOCUMENT_TITLE
  return `Arvo DS - ${pageName}`
}

export function applyDocumentTitle(pathname) {
  document.title = getDocumentTitle(pathname)
}
