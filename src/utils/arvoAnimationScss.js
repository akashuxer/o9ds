import { ARVO_MOTION_COUNTER_TOKEN } from '../LayoutComponents/CounterAnimationCodePen'
import {
  MOTION_DURATION_ROWS,
  MOTION_EASING_ROWS,
  MOTION_SEMANTIC_SECTIONS,
} from '../data/motionTokens'
import { downloadScssFile } from './downloadScssFile'

export const ARVO_ANIMATION_SCSS_FILENAME = '_animation.scss'
export const ARVO_ANIMATION_SCSS_REPLACE_PATH = 'packages/tokens/src/scss/_animation.scss'

function sectionBanner(title) {
  return ['/* -------------------------------- */', `/* ${title} */`, '/* -------------------------------- */', '']
}

function tokenLine({ token, value }) {
  return `${token}: ${value};`
}

/** SCSS source for `packages/tokens/src/scss/_animation.scss`. */
export function buildArvoAnimationScss() {
  const lines = ['/* Arvo motion & animation tokens */', '']

  lines.push(...sectionBanner('Core Durations'))
  lines.push(...MOTION_DURATION_ROWS.map(tokenLine))
  lines.push('')

  lines.push(...sectionBanner('Core Easing'))
  lines.push(...MOTION_EASING_ROWS.map(tokenLine))
  lines.push('')

  for (const { title, description, rows } of MOTION_SEMANTIC_SECTIONS) {
    lines.push(...sectionBanner(title))
    if (description) {
      lines.push(`/* ${description} */`)
    }
    lines.push(...rows.map(tokenLine))
    lines.push('')
  }

  lines.push(...sectionBanner('Badge counter'))
  lines.push(ARVO_MOTION_COUNTER_TOKEN)
  lines.push('')

  return `${lines.join('\n').trimEnd()}\n`
}

export function downloadArvoAnimationScss() {
  downloadScssFile(ARVO_ANIMATION_SCSS_FILENAME, buildArvoAnimationScss())
}
