import {
  MOTION_DURATION_ROWS,
  MOTION_EASING_ROWS,
  MOTION_SEMANTIC_SECTIONS,
} from '../data/motionTokens.js'
import { downloadScssFile } from './downloadScssFile.js'

export const ARVO_ANIMATION_SCSS_FILENAME = '_animation.scss'
export const ARVO_ANIMATION_SCSS_REPLACE_PATH = 'packages/tokens/src/scss/_animation.scss'

function sectionBanner(title) {
  return ['/* -------------------------------- */', `/* ${title} */`, '/* -------------------------------- */', '']
}

function tokenLines(row) {
  if (row.scss) {
    return row.scss.split('\n')
  }
  return [`${row.token}: ${row.value};`]
}

/** SCSS source for `packages/tokens/src/scss/_animation.scss`. */
export function buildArvoAnimationScss() {
  const lines = ['/* Arvo motion & animation tokens */', '']

  lines.push(...sectionBanner('Core Durations'))
  lines.push(...MOTION_DURATION_ROWS.flatMap(tokenLines))
  lines.push('')

  lines.push(...sectionBanner('Core Easing'))
  lines.push(...MOTION_EASING_ROWS.flatMap(tokenLines))
  lines.push('')

  for (const { title, description, rows } of MOTION_SEMANTIC_SECTIONS) {
    lines.push(...sectionBanner(title))
    if (description) {
      lines.push(`/* ${description} */`)
    }
    lines.push(...rows.flatMap(tokenLines))
    lines.push('')
  }

  return `${lines.join('\n').trimEnd()}\n`
}

export function downloadArvoAnimationScss() {
  downloadScssFile(ARVO_ANIMATION_SCSS_FILENAME, buildArvoAnimationScss())
}
