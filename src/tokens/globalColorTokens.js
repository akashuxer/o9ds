/**
 * Arvo Global Color Tokens — from design system specification
 * Token naming: arvo-global-{name}-{variant}
 */

// Neutral Colors — Base grayscale from black to white (Arvo global neutral scale)
export const NEUTRAL_TOKENS = [
  { token: 'arvo-global-black', hex: '#010101', branding: 'Off Black Accent' },
  { token: 'arvo-global-gray-11', hex: '#949494', branding: 'Off Black L1' },
  { token: 'arvo-global-gray-10', hex: '#121212', branding: 'Off Black L3' },
  { token: 'arvo-global-gray-09', hex: '#202020', branding: 'Off Black L4' },
  { token: 'arvo-global-gray-08', hex: '#303030', branding: 'Off Black L5' },
  { token: 'arvo-global-gray-07', hex: '#4C4C4C', branding: 'Off Black L6' },
  { token: 'arvo-global-gray-06', hex: '#666666', branding: 'Off White L5' },
  { token: 'arvo-global-gray-05', hex: '#808080', branding: 'Off White L4' },
  { token: 'arvo-global-gray-04', hex: '#B2B2B2', branding: 'Off White L3' },
  { token: 'arvo-global-gray-03', hex: '#CCCCCC', branding: 'Off White L3' },
  { token: 'arvo-global-gray-02', hex: '#E5E5E5', branding: 'Off White L2' },
  { token: 'arvo-global-gray-01', hex: '#F2F2F2', branding: 'Off White L1' },
  { token: 'arvo-global-white', hex: '#FFFFFF', branding: 'Off White Accent' },
]

// o9 Theme — Default theme in light mode
export const o9THEME_TOKENS = [
  { token: 'arvo-global-o9theme-11', hex: '#303030' },
  { token: 'arvo-global-o9theme-10', hex: '#010101', primary: true },
  { token: 'arvo-global-o9theme-09', hex: '#4C4C4C' },
  { token: 'arvo-global-o9theme-08', hex: '#CCCCCC' },
  { token: 'arvo-global-o9theme-07', hex: '#E5E5E5' },
  { token: 'arvo-global-o9theme-06', hex: '#F2F2F2' },
]

// Dark Mode Theme — o9 theme in dark mode
export const DARK_THEME_TOKENS = [
  { token: 'arvo-global-dark-13', hex: '#666666' },
  { token: 'arvo-global-dark-05', hex: '#737373' },
  { token: 'arvo-global-dark-04', hex: '#525252' },
  { token: 'arvo-global-dark-03', hex: '#B2B2B2' },
  { token: 'arvo-global-dark-12', hex: '#303030' },
  { token: 'arvo-global-dark-11', hex: '#010101' },
  { token: 'arvo-global-dark-10', hex: '#121212' },
  { token: 'arvo-global-dark-09', hex: '#4C4C4C' },
  { token: 'arvo-global-dark-08', hex: '#E5E5E5' },
  { token: 'arvo-global-dark-07', hex: '#FFFFFF', primary: true },
  { token: 'arvo-global-dark-06', hex: '#CCCCCC' },
]

// Secondary themes
export const ONYXBLACK_TOKENS = [
  { token: 'arvo-global-onyxblack-11', hex: '#303030' },
  { token: 'arvo-global-onyxblack-10', hex: '#111111', primary: true },
  { token: 'arvo-global-onyxblack-09', hex: '#424242' },
  { token: 'arvo-global-onyxblack-08', hex: '#CCCCCC' },
  { token: 'arvo-global-onyxblack-07', hex: '#E5E5E5' },
  { token: 'arvo-global-onyxblack-06', hex: '#F2F2F2' },
]

export const SKYBLUE_TOKENS = [
  { token: 'arvo-global-skyblue-11', hex: '#204DA5' },
  { token: 'arvo-global-skyblue-10', hex: '#2758BA' },
  { token: 'arvo-global-skyblue-09', hex: '#3D6DCC', primary: true },
  { token: 'arvo-global-skyblue-08', hex: '#BBDDFF' },
  { token: 'arvo-global-skyblue-07', hex: '#E3F2FF' },
  { token: 'arvo-global-skyblue-06', hex: '#EFF8FF' },
]

export const FORESTGREEN_TOKENS = [
  { token: 'arvo-global-forestgreen-11', hex: '#2A5C44' },
  { token: 'arvo-global-forestgreen-10', hex: '#3A684E' },
  { token: 'arvo-global-forestgreen-09', hex: '#2E8B57', primary: true },
  { token: 'arvo-global-forestgreen-08', hex: '#BFE2CB' },
  { token: 'arvo-global-forestgreen-07', hex: '#E5F3EA' },
  { token: 'arvo-global-forestgreen-06', hex: '#EEF7F1' },
]

export const MIDNIGHTINDIGO_TOKENS = [
  { token: 'arvo-global-midnightindigo-11', hex: '#1E344D' },
  { token: 'arvo-global-midnightindigo-10', hex: '#041E3A', primary: true },
  { token: 'arvo-global-midnightindigo-09', hex: '#2A4058' },
  { token: 'arvo-global-midnightindigo-08', hex: '#C3D6EB' },
  { token: 'arvo-global-midnightindigo-07', hex: '#E4EEFF' },
  { token: 'arvo-global-midnightindigo-06', hex: '#F0F5FF' },
]

// Feedback Colors
export const FEEDBACK_BLUISH = [
  { token: 'arvo-global-bluish-10', hex: '#002ED2', branding: 'Shock D1' },
  { token: 'arvo-global-bluish-09', hex: '#0037FF', branding: 'Shock Accent' },
  { token: 'arvo-global-bluish-08', hex: '#8AA3FF', branding: 'Shock L3' },
  { token: 'arvo-global-bluish-07', hex: '#B8C7FF', branding: 'Shock L4' },
]

export const FEEDBACK_GREENISH = [
  { token: 'arvo-global-greenish-10', hex: '#0C7951', branding: 'Grass D2' },
  { token: 'arvo-global-greenish-09', hex: '#2FE09D', branding: 'Grass L1' },
]

export const FEEDBACK_REDISH = [
  { token: 'arvo-global-redish-11', hex: '#660914', branding: 'Scarlet D3' },
  { token: 'arvo-global-redish-10', hex: '#931D07', branding: 'Sienna D2' },
  { token: 'arvo-global-redish-09', hex: '#BC1227', branding: 'Scarlet D1' },
  { token: 'arvo-global-redish-08', hex: '#D9311B', branding: 'Sienna Accent' },
  { token: 'arvo-global-redish-07', hex: '#EB5436', branding: 'Sienna L1' },
  { token: 'arvo-global-redish-06', hex: '#F07A62', branding: 'Sienna L2' },
]

export const FEEDBACK_ORANGISH = [
  { token: 'arvo-global-orangish-10', hex: '#926200' },
  { token: 'arvo-global-orangish-09', hex: '#FFEF5C', branding: 'Sun L2' },
  { token: 'arvo-global-orangish-08', hex: '#D25F0C', branding: 'Ocra D1' },
  { token: 'arvo-global-orangish-07', hex: '#E39600' },
]

// Utility Colors — used less frequently
export const UTILITY_TOKENS = [
  { token: 'arvo-global-purple-dark', hex: '#7433CC', branding: 'Indigo Accent' },
  { token: 'arvo-global-purple-light', hex: '#A67DDE', branding: 'Indigo L2' },
  { token: 'arvo-global-opacity-1', hex: '#01010199' },
  { token: 'arvo-global-opacity-2', hex: '#4C4C4C33' },
  { token: 'arvo-global-opacity-3', hex: '#4C4C4C0F' },
  { token: 'arvo-global-green-10', hex: '#073725' },
  { token: 'arvo-global-green-09', hex: '#015132' },
  { token: 'arvo-global-green-08', hex: '#00804F' },
  { token: 'arvo-global-green-07', hex: '#26A644' },
  { token: 'arvo-global-green-06', hex: '#6EDE8A' },
  { token: 'arvo-global-green-05', hex: '#E1F3E4' },
  { token: 'arvo-global-dark-gray-10', hex: '#1A1A1A' },
]

/** Build a flat lookup map: global token name -> hex */
const ALL_GLOBAL = [
  ...NEUTRAL_TOKENS,
  ...o9THEME_TOKENS,
  ...DARK_THEME_TOKENS,
  ...ONYXBLACK_TOKENS,
  ...SKYBLUE_TOKENS,
  ...FORESTGREEN_TOKENS,
  ...MIDNIGHTINDIGO_TOKENS,
  ...FEEDBACK_BLUISH,
  ...FEEDBACK_GREENISH,
  ...FEEDBACK_REDISH,
  ...FEEDBACK_ORANGISH,
  ...UTILITY_TOKENS,
]

export const GLOBAL_TOKEN_HEX = Object.fromEntries(ALL_GLOBAL.map((t) => [t.token, t.hex]))
