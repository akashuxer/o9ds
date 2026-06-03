/** Avatar component documentation — props and initials fallback rules. */

export const AVATAR_PROPS = [
  {
    prop: 'variant',
    type: 'image | initials | icon | logo | o9logo | novai',
    default: 'icon',
    appliesTo: 'All',
    desc: 'Visual type: image (profile photo), initials (name fallback), icon (o9con), logo (third-party/connector), o9logo (o9 brand), novai (NovAI identity).',
  },
  {
    prop: 'size',
    type: 'sm | md | lg | xl',
    default: 'md',
    appliesTo: 'All',
    desc: 'Avatar scale for compact, standard, or prominent layouts.',
  },
  {
    prop: 'isInteractive',
    type: 'boolean',
    default: 'false',
    appliesTo: 'All',
    desc: 'Enables hover, focus, and active interaction states.',
  },
  {
    prop: 'appearance',
    type: 'filled | outline | subtle | none',
    default: 'filled',
    appliesTo: 'icon | initials | logo',
    desc: 'Surface treatment. Use none for fixed visuals: image, novai, o9logo.',
  },
  {
    prop: 'colorMode',
    type: 'default | semantic | custom',
    default: 'default',
    appliesTo: 'icon | initials',
    desc: 'default = design tokens; semantic = status meaning; custom = assigned utility color families.',
  },
  {
    prop: 'customColor',
    type: 'purple | pink | glacier | amber | greenish | bluish',
    default: 'purple',
    appliesTo: 'colorMode=custom',
    desc: 'Utility color family; filled/subtle/outline tokens are applied from appearance.',
  },
  {
    prop: 'semanticType',
    type: 'none | positive | negative | warning | info',
    default: 'none',
    appliesTo: 'colorMode=semantic',
    desc: 'Semantic color intent for icon and initials variants.',
  },
  {
    prop: 'state',
    type: 'enabled | hover | focus | active',
    default: 'enabled',
    appliesTo: 'isInteractive=true',
    desc: 'Interaction state when the avatar is interactive.',
  },
  {
    prop: 'isDisabled',
    type: 'boolean',
    default: 'false',
    appliesTo: 'All',
    desc: 'Disables interaction; suppresses hover, focus, and active states.',
  },
  {
    prop: 'name',
    type: 'string',
    default: '—',
    appliesTo: 'image | initials',
    desc: 'Display name for initials generation and accessible naming.',
  },
  {
    prop: 'src',
    type: 'string',
    default: '—',
    appliesTo: 'image',
    desc: 'Image URL for profile avatars.',
  },
  {
    prop: 'alt',
    type: 'string',
    default: 'Auto from name',
    appliesTo: 'image',
    desc: 'Accessible alternative text for image avatars.',
  },
  {
    prop: 'icon',
    type: 'o9con icon name',
    default: 'Auto from variant',
    appliesTo: 'icon',
    desc: 'o9con class suffix (without o9con- prefix) for icon avatars.',
  },
  {
    prop: 'tooltip',
    type: 'string',
    default: 'Auto from name or type',
    appliesTo: 'All',
    desc: 'Maps to aria-label and title. Use for names, status, or action context.',
  },
  {
    prop: 'isStatus',
    type: 'boolean',
    default: 'false',
    appliesTo: 'All',
    desc: 'Shows a status indicator overlay on the avatar.',
  },
  {
    prop: 'statusType',
    type:
      'available | notAvailable | partialComplete | busy | failed | blocked | attention | processing | paused | critical | high | medium | low | unknown | positive | negative | warning | info',
    default: 'available',
    appliesTo: 'isStatus=true',
    desc: 'Semantic meaning, icon, and color for the status badge.',
  },
  {
    prop: 'statusPosition',
    type: 'bottom-right | top-right',
    default: 'bottom-right',
    appliesTo: 'isStatus=true',
    desc: 'Placement of the status indicator on the avatar.',
  },
  {
    prop: 'actionType',
    type:
      'none | tooltip | popover | dropdown | sidepanel | drawer | window | link | fileUpload',
    default: 'none',
    appliesTo: 'isInteractive=true && state=active',
    desc: 'Behavior when the avatar is active (profile menu, navigation, upload, etc.).',
  },
]

export const AVATAR_VARIANTS = [
  ['image', 'Profile photo from src; falls back to initials or icon when src is missing or fails.'],
  ['initials', 'Letters derived from name (or email) using initials logic below.'],
  ['icon', 'Generic o9con glyph; default variant when no photo or valid initials.'],
  ['logo', 'Third-party or connector logo mark.'],
  ['o9logo', 'o9 brand logo; appearance is none.'],
  ['novai', 'NovAI identity; appearance is none.'],
]

export const AVATAR_SIZES = [
  ['sm', 'Compact rows, dense lists, table cells.'],
  ['md', 'Default — forms, comments, standard UI.'],
  ['lg', 'Cards, headers, emphasized identity.'],
  ['xl', 'Profile headers, hero identity blocks.'],
]

export const AVATAR_APPEARANCE_COLOR = [
  ['filled', 'Solid surface using theme or utility tokens.'],
  ['outline', 'Border emphasis; transparent or subtle fill.'],
  ['subtle', 'Low-contrast background for secondary presence.'],
  ['none', 'No token fill — required for image, o9logo, novai.'],
]

export const AVATAR_INITIALS_FALLBACK = [
  {
    nameFormat: 'singleWordName',
    example: 'John',
    displayedInitials: 'J',
    notes: 'Display the first character of the name.',
  },
  {
    nameFormat: 'twoWordName',
    example: 'John Taylor',
    displayedInitials: 'JT',
    notes: 'Display the first initials of the first and last names.',
  },
  {
    nameFormat: 'threeWordName',
    example: 'John Kennedy Taylor',
    displayedInitials: 'JT',
    notes: 'Use the first initial of the first and last names. Ignore the middle name.',
  },
  {
    nameFormat: 'multipleWords',
    example: 'John Kennedy David Taylor',
    displayedInitials: 'JT',
    notes: 'Use the first initial of the first and last names. Ignore all middle names.',
  },
  {
    nameFormat: 'hyphenatedName',
    example: 'John-Kennedy',
    displayedInitials: 'J',
    notes: 'Display only the first initial character.',
  },
  {
    nameFormat: 'hyphenatedFullName',
    example: 'John-Kennedy Taylor',
    displayedInitials: 'JT',
    notes: 'Use the first initial from the first name group and the first initial of the last name.',
  },
  {
    nameFormat: 'specialCharacters',
    example: 'John.Kennedy.Taylor',
    displayedInitials: 'J',
    notes: 'If the name is a single continuous string with special characters and no spaces, display only the first valid character.',
  },
  {
    nameFormat: 'singleWordNoSpaces',
    example: 'JohnKennedyTaylor',
    displayedInitials: 'J',
    notes: 'Display only the first character.',
  },
  {
    nameFormat: 'punctuationSeparatedName',
    example: 'Hello + Co',
    displayedInitials: 'HC',
    notes: 'Strip punctuation and symbols, then generate initials from valid words.',
  },
  {
    nameFormat: 'pipeSeparatedName',
    example: 'John | Taylor',
    displayedInitials: 'JT',
    notes: 'Treat pipe-separated words as separate name parts.',
  },
  {
    nameFormat: 'slashSeparatedName',
    example: 'John / Taylor',
    displayedInitials: 'JT',
    notes: 'Treat slash-separated words as separate name parts.',
  },
  {
    nameFormat: 'ampersandSeparatedName',
    example: 'Rut & Circle',
    displayedInitials: 'RC',
    notes: 'Treat ampersand-separated words as separate name parts.',
  },
  {
    nameFormat: 'nameWithParentheses',
    example: 'Kat (Airbnb)',
    displayedInitials: 'K',
    notes: 'Ignore words inside parentheses.',
  },
  {
    nameFormat: 'nameWithVia',
    example: 'Sydney Doctor (via Cliniko)',
    displayedInitials: 'SD',
    notes: 'Ignore words inside parentheses and generate initials from the remaining visible name.',
  },
  {
    nameFormat: 'prefixOrTitle',
    example: 'Dr. John Taylor',
    displayedInitials: 'JT',
    notes: 'Ignore honorifics and titles such as Mr, Mrs, Ms, Dr, Prof, Sir, Madam, Shri, Smt, and Mx.',
  },
  {
    nameFormat: 'nameWithSuffix',
    example: 'John Taylor Jr.',
    displayedInitials: 'JT',
    notes: 'Ignore suffixes such as Jr, Sr, II, III, IV, PhD, MD, and Esq.',
  },
  {
    nameFormat: 'nameWithStopWords',
    example: 'John van der Berg',
    displayedInitials: 'JB',
    notes: 'Ignore surname particles and stop words such as van, von, de, da, der, di, la, of, the, and.',
  },
  {
    nameFormat: 'nameWithNumbers',
    example: 'John Taylor 3',
    displayedInitials: 'JT',
    notes: 'Ignore trailing numbers when valid name words are available.',
  },
  {
    nameFormat: 'nameStartingWithNumber',
    example: '3 John Taylor',
    displayedInitials: 'JT',
    notes: 'Ignore leading numbers and generate initials from valid name words.',
  },
  {
    nameFormat: 'nameOnlyNumber',
    example: '123456',
    displayedInitials: '—',
    fallback: 'icon',
    notes: 'If the name contains only numbers, use the icon avatar fallback.',
  },
  {
    nameFormat: 'emptyName',
    example: '—',
    displayedInitials: '—',
    fallback: 'icon',
    notes: 'If the name is empty, use the icon avatar fallback.',
  },
  {
    nameFormat: 'symbolOnlyName',
    example: '@@@',
    displayedInitials: '—',
    fallback: 'icon',
    notes: 'If the name contains only symbols, use the icon avatar fallback.',
  },
  {
    nameFormat: 'emojiPrefixName',
    example: '🔥 John Taylor',
    displayedInitials: 'JT',
    notes: 'Ignore decorative emoji and generate initials from valid name words.',
  },
  {
    nameFormat: 'emojiOnlyName',
    example: '🔥😊',
    displayedInitials: '—',
    fallback: 'icon',
    notes: 'If only emoji are present, use the icon avatar fallback.',
  },
  {
    nameFormat: 'allLowercaseNames',
    example: 'john taylor',
    displayedInitials: 'JT',
    notes: 'Convert generated initials to uppercase.',
  },
  {
    nameFormat: 'allUppercaseNames',
    example: 'JOHN TAYLOR',
    displayedInitials: 'JT',
    notes: 'Retain uppercase initials.',
  },
  {
    nameFormat: 'multipleSpaces',
    example: 'John     Taylor',
    displayedInitials: 'JT',
    notes: 'Normalize extra spaces and generate initials from the first and last valid words.',
  },
  {
    nameFormat: 'singleCharacterName',
    example: 'J',
    displayedInitials: 'J',
    notes: 'Display the single character as is.',
  },
  {
    nameFormat: 'nameWithAccents',
    example: 'José López',
    displayedInitials: 'JL',
    notes: 'Retain accented characters in initials.',
  },
  {
    nameFormat: 'nonLatinChinese',
    example: '王大明',
    displayedInitials: '王',
    notes: 'For non-Latin scripts, use only the first character as the initial.',
  },
  {
    nameFormat: 'nonLatinJapanese',
    example: '田中一郎',
    displayedInitials: '田',
    notes: 'For non-Latin scripts, use only the first character as the initial.',
  },
  {
    nameFormat: 'nonLatinKorean',
    example: '김철수',
    displayedInitials: '김',
    notes: 'For non-Latin scripts, use only the first character as the initial.',
  },
  {
    nameFormat: 'nonLatinArabic',
    example: 'محمد علي',
    displayedInitials: 'م',
    notes: 'For non-Latin scripts, use only the first character as the initial.',
  },
  {
    nameFormat: 'emailSimple',
    example: 'john@example.com',
    displayedInitials: 'J',
    notes: 'If only email is available, use the first valid character before the @ symbol.',
  },
  {
    nameFormat: 'emailDotSeparated',
    example: 'john.taylor@example.com',
    displayedInitials: 'JT',
    notes: 'For email IDs without a name, treat dot-separated words before @ as name parts.',
  },
  {
    nameFormat: 'emailUnderscoreSeparated',
    example: 'john_taylor@example.com',
    displayedInitials: 'JT',
    notes: 'For email IDs without a name, treat underscore-separated words before @ as name parts.',
  },
  {
    nameFormat: 'emailHyphenSeparated',
    example: 'john-taylor@example.com',
    displayedInitials: 'JT',
    notes: 'For email IDs without a name, treat hyphen-separated words before @ as name parts.',
  },
  {
    nameFormat: 'emailWithNumbers',
    example: 'john123@example.com',
    displayedInitials: 'J',
    notes: 'Ignore numbers and use the first valid character from the email local part.',
  },
  {
    nameFormat: 'emailStartingWithNumber',
    example: '123456@example.com',
    displayedInitials: '—',
    fallback: 'icon',
    notes: 'If the email local part starts with numbers and contains no valid alphabetic name part, use the icon avatar fallback.',
  },
  {
    nameFormat: 'nameAndEmailAvailable',
    example: 'John Taylor, john.taylor@example.com',
    displayedInitials: 'JT',
    notes: 'When both name and email are available, prioritize name over email for generating initials.',
  },
  {
    nameFormat: 'companyName',
    example: '2nd Perfume Oil Company',
    displayedInitials: 'PC',
    notes: 'Ignore leading numbers and use the first and last valid words.',
  },
  {
    nameFormat: 'camelCaseName',
    example: 'JohnTaylor',
    displayedInitials: 'J',
    notes: 'Do not split camelCase names. Treat as a single word and display the first character only.',
  },
  {
    nameFormat: 'mixedValidAndInvalid',
    example: '### John Taylor 123',
    displayedInitials: 'JT',
    notes: 'Ignore invalid characters and numbers, then generate initials from valid name words.',
  },
]

export const AVATAR_VARIANT_TABLE_ROWS = AVATAR_VARIANTS.map(([variant, useWhen]) => ({ variant, useWhen }))
export const AVATAR_SIZE_TABLE_ROWS = AVATAR_SIZES.map(([size, useWhen]) => ({ size, useWhen }))
export const AVATAR_APPEARANCE_TABLE_ROWS = AVATAR_APPEARANCE_COLOR.map(([appearance, description]) => ({
  appearance,
  description,
}))

export const AVATAR_PROPS_TABLE_ROWS = AVATAR_PROPS.map((row) => ({
  prop: row.prop,
  type: row.type,
  default: row.default,
  appliesTo: row.appliesTo,
  desc: row.desc,
}))

export const AVATAR_INITIALS_TABLE_ROWS = AVATAR_INITIALS_FALLBACK.map((row) => ({
  nameFormat: row.nameFormat,
  example: row.example,
  displayedInitials: row.displayedInitials,
  fallback: row.fallback ?? '—',
  notes: row.notes,
}))

/** On-this-page sections for Avatar Overview tab. */
export const AVATAR_OVERVIEW_TOC = [
  { id: 'avatar-when-to-use', label: 'When to use' },
  { id: 'avatar-when-not-to-use', label: 'When not to use' },
  { id: 'avatar-anatomy', label: 'Anatomy' },
  { id: 'avatar-variants', label: 'Variants' },
  { id: 'avatar-sizes', label: 'Sizes' },
  { id: 'avatar-appearance', label: 'Appearance & color' },
  { id: 'avatar-status', label: 'Status indicator' },
  { id: 'avatar-props', label: 'API props' },
  { id: 'avatar-initials', label: 'Initials fallback logic' },
]
