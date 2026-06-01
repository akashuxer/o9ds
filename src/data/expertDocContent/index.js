import { FEEDBACK_EXPERT_DOC } from './feedback'
import { INPUTS_EXPERT_DOC } from './inputs'
import { NAV_OVERLAY_EXPERT_DOC } from './navigation-overlays'
import { UTILITIES_EXPERT_DOC } from './utilities'

/**
 * @typedef {import('./feedback').ExpertDocEntry} ExpertDocContent
 */

/** @type {Record<string, ExpertDocContent>} */
export const EXPERT_DOC = {
  ...FEEDBACK_EXPERT_DOC,
  ...INPUTS_EXPERT_DOC,
  ...NAV_OVERLAY_EXPERT_DOC,
  ...UTILITIES_EXPERT_DOC,
}

/** @param {string} slug @returns {ExpertDocContent | undefined} */
export function getExpertDoc(slug) {
  return EXPERT_DOC[slug]
}
