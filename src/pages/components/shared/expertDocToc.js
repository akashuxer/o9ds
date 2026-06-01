/**
 * On-this-page TOC builders for expert component documentation tabs.
 * @param {import('../../../data/expertDocContent').ExpertDocContent | undefined} content
 */

const OVERVIEW_SECTION_MAP = {
  purpose: 'Purpose',
  anatomy: 'Anatomy',
  behavior: 'Expand behavior',
  modes: 'Selection modes',
  variants: 'Variants',
  states: 'States',
  sizes: 'Sizes',
  'alignment-rules': 'Alignment rules',
  'icon-only': 'Icon-only',
  'vs-related': 'vs Related patterns',
  'vs-seg-ctrl': 'vs Segmented Control',
  'vs-btn-grp': 'vs Button Group',
  'content-guidelines': 'Content guidelines',
  'dos-donts': "Dos & Don'ts",
  demo: 'Live demo',
}

const USAGE_SECTION_MAP = {
  when: 'When to use',
  'when-not': 'When not to use',
  scenarios: 'Scenarios',
  'best-practices': 'Best practices',
  'vs-btn-grp': 'vs Button Group',
  'vs-seg-ctrl': 'vs Segmented Control',
  layout: 'Layout & placement',
  examples: 'Examples',
}

const A11Y_SECTION_MAP = {
  keyboard: 'Keyboard interactions',
  aria: 'ARIA attributes',
  focus: 'Focus',
  roles: 'Roles & live regions',
  'screen-readers': 'Screen readers',
  'dos-donts-a11y': "Accessibility dos & don'ts",
}

const CODE_SECTION_MAP = {
  react: 'React',
  js: 'Vanilla JS',
  props: 'Props',
  'css-vars': 'CSS variables',
  'sizes-table': 'Size reference',
  methods: 'Methods (JS)',
  events: 'Custom events (JS)',
}

/** @param {string[]} ids @param {Record<string, string>} map */
function sectionsFromIds(ids, map) {
  return ids
    .filter((id) => map[id])
    .map((id) => ({ id, label: map[id] }))
}

/**
 * @param {import('../../../data/expertDocContent').ExpertDocContent | undefined} content
 * @param {string[]} [extraIds]
 */
export function getExpertOverviewToc(content, extraIds = []) {
  const ids = content?.overviewSectionIds ?? [
    ...(content?.purpose ? ['purpose'] : []),
    ...(content?.anatomy ? ['anatomy'] : []),
    ...(content?.behavior ? ['behavior'] : []),
    ...(content?.modes ? ['modes'] : []),
    ...(content?.variants ? ['variants'] : []),
    ...(content?.states ? ['states'] : []),
    ...(content?.sizes ? ['sizes'] : []),
    ...(content?.alignmentRules ? ['alignment-rules'] : []),
    ...(content?.iconOnly ? ['icon-only'] : []),
    ...(content?.vsRelated ? ['vs-related'] : []),
    ...(content?.vsSegCtrl ? ['vs-seg-ctrl'] : []),
    ...(content?.vsBtnGrp ? ['vs-btn-grp'] : []),
    ...(content?.contentGuidelines ? ['content-guidelines'] : []),
    ...(content?.dosDonts ? ['dos-donts'] : []),
    ...(content?.hasLiveDemo ? ['demo'] : []),
  ]
  return sectionsFromIds([...ids, ...extraIds], OVERVIEW_SECTION_MAP)
}

/** @param {import('../../../data/expertDocContent').ExpertDocContent | undefined} content */
export function getExpertUsageToc(content) {
  const usage = content?.usage ?? {}
  const ids = content?.usageSectionIds ?? [
    ...(usage.when?.length ? ['when'] : []),
    ...(usage.whenNot?.length ? ['when-not'] : []),
    ...(usage.scenarios?.length ? ['scenarios'] : []),
    ...(usage.bestPractices?.length ? ['best-practices'] : []),
    ...(usage.vsBtnGrp ? ['vs-btn-grp'] : []),
    ...(usage.vsSegCtrl ? ['vs-seg-ctrl'] : []),
    ...(usage.layout?.length ? ['layout'] : []),
    ...(usage.examples?.length ? ['examples'] : []),
  ]
  return sectionsFromIds(ids, USAGE_SECTION_MAP)
}

/**
 * @param {import('../../../data/expertDocContent').ExpertDocContent | undefined} content
 * @param {{ keyboard?: unknown[], aria?: unknown[] } | null} descriptor
 */
export function getExpertA11yToc(content, descriptor) {
  const a11y = content?.a11y ?? {}
  const ids = content?.a11ySectionIds ?? [
    ...(a11y.roles?.length ? ['roles'] : []),
    ...(descriptor?.keyboard?.length || a11y.keyboard?.length ? ['keyboard'] : []),
    ...(descriptor?.aria?.length || a11y.aria?.length ? ['aria'] : []),
    ...(a11y.focus?.length ? ['focus'] : []),
    ...(a11y.screenReaders?.length ? ['screen-readers'] : []),
    ...(a11y.dosDonts ? ['dos-donts-a11y'] : []),
  ]
  return sectionsFromIds(ids, A11Y_SECTION_MAP)
}

/** @param {{ cssVarGroups?: unknown[], methods?: unknown[], events?: unknown[] } | null} descriptor @param {{ react?: string, js?: string }} [code] */
export function getExpertCodeToc(descriptor, code = {}) {
  const ids = [
    ...(code.react ? ['react'] : []),
    ...(code.js ? ['js'] : []),
    ...(descriptor?.props?.length ? ['props'] : []),
    ...(descriptor?.cssVarGroups?.length ? ['css-vars'] : []),
    ...(descriptor?.methods?.length ? ['methods'] : []),
    ...(descriptor?.events?.length ? ['events'] : []),
  ]
  if (!ids.length) {
    return [{ id: 'implementation', label: 'Implementation' }]
  }
  return sectionsFromIds(ids, CODE_SECTION_MAP)
}
