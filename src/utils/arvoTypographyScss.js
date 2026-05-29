import { ARVO_TYPOGRAPHY_SCSS, FONT_SIZE_TOKENS, FONT_WEIGHT_ROWS } from '../tokens/typographyTokens'
import { downloadScssFile } from './downloadScssFile'

export const ARVO_TYPOGRAPHY_SCSS_FILENAME = '_typography.scss'
export const ARVO_SEMANTIC_TYPOGRAPHY_SCSS_FILENAME = '_semantictypography.scss'

export const ARVO_TYPOGRAPHY_SCSS_REPLACE_PATH = 'packages/tokens/src/scss/_typography.scss'
export const ARVO_SEMANTIC_TYPOGRAPHY_SCSS_REPLACE_PATH =
  'packages/tokens/src/scss/_semantictypography.scss'

const SEMANTIC_MIXINS_START = '// TYPOGRAPHY TOKENS'
const SEMANTIC_MIXINS_END = '/*  ---------------------------------------------- IMPORTANT'

/** Font weights, sizes, o9con/mono references — `packages/tokens/src/scss/_typography.scss`. */
export function buildArvoTypographyScss() {
  const lines = [
    '$o9-mono: monospace;',
    '$o9con: "o9con";',
    '$o9-icon-old: "FontAwesome";',
    '$mono-font: $o9-mono;',
    '',
    '// Font weight tokens',
    ...FONT_WEIGHT_ROWS.map((t) => `${t.token}: ${t.value};`),
    '',
    '// Font size tokens',
    ...FONT_SIZE_TOKENS.map((t) => `${t.token}: ${t.value}; // ${t.px}`),
    '',
    '// o9con icon base font',
    '$o9con-reg-em-1: normal normal normal 1em/1 $o9con;',
    '',
    '// Font family references',
    '$o9-mono: monospace;',
    '$o9con: "o9con";',
    '',
  ]
  return `${lines.join('\n').trimEnd()}\n`
}

/** Heading, paragraph, and label mixins — `packages/tokens/src/scss/_semantictypography.scss`. */
export function buildArvoSemanticTypographyScss() {
  const start = ARVO_TYPOGRAPHY_SCSS.indexOf(SEMANTIC_MIXINS_START)
  const end = ARVO_TYPOGRAPHY_SCSS.indexOf(SEMANTIC_MIXINS_END)
  if (start === -1 || end === -1) {
    throw new Error('Could not extract semantic typography mixins from arvo.typography.scss')
  }
  return `${ARVO_TYPOGRAPHY_SCSS.slice(start, end).trimEnd()}\n`
}

export function downloadArvoTypographyScss() {
  downloadScssFile(ARVO_TYPOGRAPHY_SCSS_FILENAME, buildArvoTypographyScss())
  window.setTimeout(() => {
    downloadScssFile(ARVO_SEMANTIC_TYPOGRAPHY_SCSS_FILENAME, buildArvoSemanticTypographyScss())
  }, 120)
}
