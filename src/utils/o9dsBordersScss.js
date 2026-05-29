import { BORDER_RADIUS_TOKEN_ROWS, BORDER_WIDTH_TOKEN_ROWS } from '../tokens/borderTokens'

export const ARVO_BORDERS_SCSS_FILENAME = '_arvo.borders.scss'

const O9DS_IMPORT_COMMENT =
  '// Imported in o9ds.tokens.mapping file due to dependency on token mapping variables'

/** $arvo-* → $o9ds-* for o9 Kibo token files. */
function toO9dsVariable(arvoName) {
  return arvoName.replace(/^\$arvo-/, '$o9ds-')
}

/** `$o9ds-radius-16: 1rem; // 16px` */
function scssLineWithPxComment(row) {
  const px = row.valuePx.replace(/\s*\(.*\)$/, '').trim()
  return `${toO9dsVariable(row.name)}: ${row.valueRem}; // ${px}`
}

function linesFromRows(rows) {
  return rows.map(scssLineWithPxComment)
}

/** SCSS source for o9 Kibo `tokens/_arvo.borders.scss` (radius + width, o9 comment style). */
export function buildO9dsBordersScss() {
  const lines = [
    O9DS_IMPORT_COMMENT,
    '',
    '// BORDER RADIUS TOKENS',
    ...linesFromRows(BORDER_RADIUS_TOKEN_ROWS),
    '',
    '// BORDER WIDTH TOKENS',
    ...linesFromRows(BORDER_WIDTH_TOKEN_ROWS),
    '',
  ]

  return `${lines.join('\n').trimEnd()}\n`
}

export function downloadO9dsBordersScss() {
  const content = buildO9dsBordersScss()
  const blob = new Blob([content], { type: 'text/x-scss;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = ARVO_BORDERS_SCSS_FILENAME
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
