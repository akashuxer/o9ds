/**
 * Parse hex color to { r, g, b }
 */
export function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

/**
 * Format RGB object as "rgb(r, g, b)" string
 */
export function rgbToString(rgb) {
  if (!rgb) return ''
  return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
}

/**
 * Convert RGB to hex
 */
export function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('')
}

/**
 * Get relative luminance (0–1) for WCAG contrast
 * https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
 */
function relativeLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const s = c / 255
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
}

/**
 * Compute contrast ratio (1–21) per WCAG
 * https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio
 */
function contrastRatio(lum1, lum2) {
  const [l1, l2] = lum1 >= lum2 ? [lum1, lum2] : [lum2, lum1]
  return (l1 + 0.05) / (l2 + 0.05)
}

/**
 * Return text color (#010101 or #ffffff) that meets contrast >= 4.5 on the given background.
 * Uses whichever passes; if both pass, prefers the one with higher contrast.
 */
export function getContrastTextColor(backgroundHex) {
  const bg = hexToRgb(backgroundHex)
  if (!bg) return '#010101'
  const bgLum = relativeLuminance(bg.r, bg.g, bg.b)
  const blackLum = relativeLuminance(1, 1, 1)   // #010101
  const whiteLum = relativeLuminance(255, 255, 255)
  const blackContrast = contrastRatio(blackLum, bgLum)
  const whiteContrast = contrastRatio(whiteLum, bgLum)
  const blackPasses = blackContrast >= 4.5
  const whitePasses = whiteContrast >= 4.5
  if (blackPasses && !whitePasses) return '#010101'
  if (whitePasses && !blackPasses) return '#ffffff'
  if (blackPasses && whitePasses) return blackContrast >= whiteContrast ? '#010101' : '#ffffff'
  return blackContrast >= whiteContrast ? '#010101' : '#ffffff'
}

/**
 * Blend two colors by amount (0 = color1, 1 = color2)
 */
function blend(color1, color2, amount) {
  amount = Math.max(0, Math.min(1, amount))
  const c1 = hexToRgb(color1)
  const c2 = hexToRgb(color2)
  if (!c1 || !c2) return color1
  const r = Math.round(c1.r + (c2.r - c1.r) * amount)
  const g = Math.round(c1.g + (c2.g - c1.g) * amount)
  const b = Math.round(c1.b + (c2.b - c1.b) * amount)
  return rgbToHex(r, g, b)
}

/**
 * Generate palette: Dark5, Dark4, Dark3, Dark2, Dark1, Accent, Light1, Light2, Light3, Light4, Light5
 */
export function generatePalette(accentHex) {
  const BLACK = '#000000'
  const WHITE = '#ffffff'
  return {
    'Dark 5': blend(accentHex, BLACK, 0.9),
    'Dark 4': blend(accentHex, BLACK, 0.7),
    'Dark 3': blend(accentHex, BLACK, 0.5),
    'Dark 2': blend(accentHex, BLACK, 0.3),
    'Dark 1': blend(accentHex, BLACK, 0.15),
    Accent: accentHex,
    'Light 1': blend(accentHex, WHITE, 0.15),
    'Light 2': blend(accentHex, WHITE, 0.3),
    'Light 3': blend(accentHex, WHITE, 0.5),
    'Light 4': blend(accentHex, WHITE, 0.7),
    'Light 5': blend(accentHex, WHITE, 0.9),
  }
}
