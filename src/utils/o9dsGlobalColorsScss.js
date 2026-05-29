import {
  NEUTRAL_TOKENS,
  o9THEME_TOKENS,
  DARK_THEME_TOKENS,
  ONYXBLACK_TOKENS,
  SKYBLUE_TOKENS,
  FORESTGREEN_TOKENS,
  MIDNIGHTINDIGO_TOKENS,
  FEEDBACK_BLUISH,
  FEEDBACK_GREENISH,
  FEEDBACK_REDISH,
  FEEDBACK_ORANGISH,
  UTILITY_TOKENS,
  NOVA_BRAND_TOKENS,
} from '../tokens/globalColorTokens'

const ARVO_GLOBAL_COLORS_FILENAME = '_arvo.colors.scss'

/** arvo-global-* → $o9ds-global-* */
function toScssVariable(token) {
  return `$${token.replace(/^arvo-/, 'o9ds-')}`
}

function formatHex(hex) {
  return hex.length > 7 ? hex : hex.toUpperCase()
}

function linesForTokens(tokens) {
  return tokens.map(({ token, hex }) => `${toScssVariable(token)}: ${formatHex(hex)};`)
}

function appendSection(lines, title, tokens) {
  lines.push(`/* ${title} */`)
  lines.push(...linesForTokens(tokens))
  lines.push('')
}

function appendSubsection(lines, title, tokens) {
  lines.push(`/* ${title} */`)
  lines.push(...linesForTokens(tokens))
  lines.push('')
}

/** SCSS source for o9 Kibo `tokens/_arvo.colors.scss` (global palette only). */
export function buildO9dsGlobalColorsScss() {
  const lines = ['/* All Global Color Tokens */', '']

  appendSection(lines, 'Neutral', NEUTRAL_TOKENS)
  appendSection(lines, 'o9 Theme', o9THEME_TOKENS)
  appendSection(lines, 'Dark Mode Theme', DARK_THEME_TOKENS)

  lines.push('/* Secondary Themes */', '')
  appendSubsection(lines, 'Forest Green', FORESTGREEN_TOKENS)
  appendSubsection(lines, 'Onyx Black', ONYXBLACK_TOKENS)
  appendSubsection(lines, 'Midnight Indigo', MIDNIGHTINDIGO_TOKENS)
  appendSubsection(lines, 'Sky Blue', SKYBLUE_TOKENS)

  lines.push('/* Feedback Colors */', '')
  appendSubsection(lines, 'Bluish', FEEDBACK_BLUISH)
  appendSubsection(lines, 'Greenish', FEEDBACK_GREENISH)
  appendSubsection(lines, 'Redish', FEEDBACK_REDISH)
  appendSubsection(lines, 'Orangish', FEEDBACK_ORANGISH)

  appendSection(lines, 'Utility Colors', UTILITY_TOKENS)
  appendSection(lines, 'Nova AI Brand Colors', NOVA_BRAND_TOKENS)

  return `${lines.join('\n').trimEnd()}\n`
}

export function downloadO9dsGlobalColorsScss() {
  const content = buildO9dsGlobalColorsScss()
  const blob = new Blob([content], { type: 'text/x-scss;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = ARVO_GLOBAL_COLORS_FILENAME
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
