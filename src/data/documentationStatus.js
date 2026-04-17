/** Shared copy for stub / not-yet-ready documentation (Q3 release). */

export const DOCUMENTATION_STATUS_TITLE = 'Documentation status'

const Q3_BODY =
  "This will be replaced with the dedicated documentation once it is ready for the Q3 release. We'll keep you posted about these releases."

/**
 * @typedef {'component' | 'contentWriting' | 'accessibility' | 'foundations' | 'patterns' | 'documentation'} DocumentationCatalogId
 */

/** @type {Record<DocumentationCatalogId, string>} */
const CATALOG_INTRO = {
  component: 'This route is wired and listed in the component catalog.',
  contentWriting: 'This route is wired and listed in the content writing catalog.',
  accessibility: 'This route is wired and listed in the accessibility catalog.',
  foundations: 'This route is wired and listed in the foundations catalog.',
  patterns: 'This route is wired and listed in the patterns catalog.',
  documentation: 'This route is wired and listed in the documentation.',
}

/**
 * @param {DocumentationCatalogId} [catalogId]
 * @returns {string}
 */
export function getDocumentationStatusDescription(catalogId = 'component') {
  const intro = CATALOG_INTRO[catalogId] ?? CATALOG_INTRO.component
  return `${intro} ${Q3_BODY}`
}
