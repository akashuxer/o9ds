import {
  SEMANTIC_SURFACE,
  SEMANTIC_BORDER,
  SEMANTIC_TEXT,
  SEMANTIC_ICON,
  LIGHT_THEMES,
  THEME_LABELS,
} from '../tokens/semanticColorTokens'
import { downloadScssFile } from './downloadScssFile'

export const ARVO_SEMANTIC_COLORS_SCSS_FILENAME = '_semantic-colors.scss'
export const ARVO_SEMANTIC_COLORS_SCSS_REPLACE_PATH = 'packages/tokens/src/scss/_semantic-colors.scss'

const NOVA_GRADIENT_SCSS =
  'linear-gradient(61deg, $arvo-global-nova-start 0.88%, $arvo-global-nova-end 60.13%)'

function toScssVar(token) {
  return `$${token}`
}

function toGlobalRef(globalToken) {
  return `$${globalToken}`
}

function resolveLightGlobal(row) {
  if (row.lightGradient) return null
  if (typeof row.lightGlobal === 'string') return row.lightGlobal
  return row.lightGlobal.o9theme
}

function mappingLine(token, globalToken) {
  return `${toScssVar(token)}: ${toGlobalRef(globalToken)};`
}

function appendModeCategory(lines, categoryLabel, rows, mode) {
  lines.push(`/* ${categoryLabel} */`)
  for (const row of rows) {
    if (row.lightGradient || row.darkGradient) {
      lines.push(`${toScssVar(row.token)}: ${NOVA_GRADIENT_SCSS};`)
      continue
    }
    const globalToken = mode === 'light' ? resolveLightGlobal(row) : row.darkGlobal
    if (globalToken) lines.push(mappingLine(row.token, globalToken))
  }
  lines.push('')
}

function appendThemeSpecificAppendix(lines, rows, categoryLabel) {
  const themeRows = rows.filter((row) => typeof row.lightGlobal === 'object')
  if (themeRows.length === 0) return

  lines.push(`/* ${categoryLabel} — theme-specific (light mode) */`)
  for (const theme of LIGHT_THEMES) {
    lines.push(`/* ${THEME_LABELS[theme]} */`)
    for (const row of themeRows) {
      const globalToken = row.lightGlobal[theme]
      if (globalToken) lines.push(`${toScssVar(row.token)}: ${toGlobalRef(globalToken)};`)
    }
    lines.push('')
  }
}

/** SCSS source for `packages/tokens/src/scss/_semantic-colors.scss`. */
export function buildO9dsSemanticColorsScss() {
  const lines = [
    '/* All Semantic Color Token Mappings */',
    '/* Maps semantic tokens to global tokens. Import _colors.scss first. */',
    '',
    '/* =====================================',
    '   Light mode (default — o9 Theme)',
    '   ===================================== */',
    '',
  ]

  appendModeCategory(lines, 'Surface', SEMANTIC_SURFACE, 'light')
  appendModeCategory(lines, 'Border', SEMANTIC_BORDER, 'light')
  appendModeCategory(lines, 'Text', SEMANTIC_TEXT, 'light')
  appendModeCategory(lines, 'Icon', SEMANTIC_ICON, 'light')

  lines.push(
    '/* =====================================',
    '   Dark mode',
    '   ===================================== */',
    '',
  )

  appendModeCategory(lines, 'Surface', SEMANTIC_SURFACE, 'dark')
  appendModeCategory(lines, 'Border', SEMANTIC_BORDER, 'dark')
  appendModeCategory(lines, 'Text', SEMANTIC_TEXT, 'dark')
  appendModeCategory(lines, 'Icon', SEMANTIC_ICON, 'dark')

  lines.push(
    '/* =====================================',
    '   Theme-specific light mappings',
    '   ===================================== */',
    '',
  )

  appendThemeSpecificAppendix(lines, SEMANTIC_SURFACE, 'Surface')
  appendThemeSpecificAppendix(lines, SEMANTIC_BORDER, 'Border')
  appendThemeSpecificAppendix(lines, SEMANTIC_TEXT, 'Text')
  appendThemeSpecificAppendix(lines, SEMANTIC_ICON, 'Icon')

  return `${lines.join('\n').trimEnd()}\n`
}

export function downloadO9dsSemanticColorsScss() {
  downloadScssFile(ARVO_SEMANTIC_COLORS_SCSS_FILENAME, buildO9dsSemanticColorsScss())
}
