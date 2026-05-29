import { SPACING_TOKENS } from '../tokens/spacingTokens'
import { downloadScssFile } from './downloadScssFile'

export const ARVO_SPACING_SCSS_FILENAME = '_spacing.scss'

export function buildArvoSpacingScss() {
  const lines = [
    '// Spacing tokens',
    ...SPACING_TOKENS.map((t) => `$${t.token}: ${t.value}; // ${t.px}`),
    '',
  ]
  return `${lines.join('\n').trimEnd()}\n`
}

export function downloadArvoSpacingScss() {
  downloadScssFile(ARVO_SPACING_SCSS_FILENAME, buildArvoSpacingScss())
}
