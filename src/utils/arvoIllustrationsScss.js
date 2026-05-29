import { ILLUSTRATION_SIZE_TOKEN_ROWS } from '../tokens/illustrationTokens'
import { downloadScssFile } from './downloadScssFile'

export const ARVO_ILLUSTRATIONS_SCSS_FILENAME = '_illustration-size.scss'

export function buildArvoIllustrationsScss() {
  const lines = [
    '// Illustration Size Tokens (o9Illus)',
    ...ILLUSTRATION_SIZE_TOKEN_ROWS.map((row) => `${row.name}: ${row.valueRem}; // ${row.pxComment}`),
    '',
  ]
  return `${lines.join('\n').trimEnd()}\n`
}

export function downloadArvoIllustrationsScss() {
  downloadScssFile(ARVO_ILLUSTRATIONS_SCSS_FILENAME, buildArvoIllustrationsScss())
}
