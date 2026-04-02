/**
 * Sidebar green dot + section overview "ready" state: routes with real documentation
 * (not placeholder). Import this single source from Layout and overview pages.
 */
export const PATHS_WITH_CONTENT = new Set([
  '/',
  '/overview',
  '/principles',
  '/foundations',
  '/colors',
  '/typography',
  '/spacing',
  '/borders',
  '/icons',
  '/illustrations',
  '/components',
  '/components/button',
  '/components/cards',
  '/developers',
  '/patterns',
  '/accessibility',
  '/content',
])

/**
 * @param {string} path
 * @returns {boolean}
 */
export function hasReadyDocumentation(path) {
  return PATHS_WITH_CONTENT.has(path)
}
