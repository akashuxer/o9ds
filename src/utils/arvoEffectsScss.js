import { SHADOW_BOX_TOKEN_ROWS, BLUR_TOKEN_ROWS, OPACITY_TOKEN_ROWS } from '../tokens/effectsTokens'

export const ARVO_EFFECTS_SCSS_FILENAME = '_effects.scss'

function scssLine(name, value) {
  const trimmed = value.trim()
  const declaration = trimmed.endsWith(';') ? trimmed : `${trimmed};`
  return `${name}: ${declaration}`
}

function linesFromRows(rows) {
  return rows.map((row) => scssLine(row.name, row.value))
}

/** SCSS source for `packages/tokens/src/scss/_effects.scss` (shadow, blur, opacity). */
export function buildArvoEffectsScss() {
  const lines = ['/* All Arvo Effect Tokens */', '']

  lines.push('/* Shadow */')
  lines.push(...linesFromRows(SHADOW_BOX_TOKEN_ROWS))
  lines.push('')

  lines.push('/* Blur */')
  lines.push(...linesFromRows(BLUR_TOKEN_ROWS))
  lines.push('')

  lines.push('/* Opacity */')
  lines.push(...linesFromRows(OPACITY_TOKEN_ROWS))
  lines.push('')

  return `${lines.join('\n').trimEnd()}\n`
}

export function downloadArvoEffectsScss() {
  const content = buildArvoEffectsScss()
  const blob = new Blob([content], { type: 'text/x-scss;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = ARVO_EFFECTS_SCSS_FILENAME
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
