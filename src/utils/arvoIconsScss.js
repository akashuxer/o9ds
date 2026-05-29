import { ICON_SIZE_TOKEN_ROWS } from '../tokens/iconTokens'
import { downloadScssFile } from './downloadScssFile'

export const ARVO_ICONS_SCSS_FILENAME = '_icon-size.scss'

export function buildArvoIconsScss() {
  const lines = [
    '// Icon Size Tokens (o9con)',
    ...ICON_SIZE_TOKEN_ROWS.map((row) => `${row.name}: ${row.valueRem}; // ${row.pxComment}`),
    '',
  ]
  return `${lines.join('\n').trimEnd()}\n`
}

export function downloadArvoIconsScss() {
  downloadScssFile(ARVO_ICONS_SCSS_FILENAME, buildArvoIconsScss())
}
