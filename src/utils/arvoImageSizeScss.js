import { IMAGE_SIZE_TOKEN_ROWS } from '../tokens/imageSizeTokens'
import { downloadScssFile } from './downloadScssFile'

export const ARVO_IMAGE_SIZE_SCSS_FILENAME = '_image-size.scss'
export const ARVO_IMAGE_SIZE_SCSS_REPLACE_PATH = 'packages/tokens/src/scss/_image-size.scss'

/** SCSS source for integration logo / image size tokens. */
export function buildArvoImageSizeScss() {
  const lines = [
    '// Integration logo & image size tokens',
    '// Fixed scale — use width and height together; do not stretch marks.',
    '',
    ...IMAGE_SIZE_TOKEN_ROWS.map((row) => `${row.token}: ${row.value}; // ${row.px}px`),
    '',
  ]
  return `${lines.join('\n').trimEnd()}\n`
}

export function downloadArvoImageSizeScss() {
  downloadScssFile(ARVO_IMAGE_SIZE_SCSS_FILENAME, buildArvoImageSizeScss())
}
