import { grammarStyleTopicPath } from './docPaths'

/** @typedef {{ slug: string, label: string, description?: string }} GrammarStyleTopic */

/** @type {GrammarStyleTopic[]} */
export const GRAMMAR_STYLE_TOPICS = [
  {
    slug: 'intro',
    label: 'Intro',
    description:
      'Platform-wide grammar, formatting, and style standards for clear, consistent product copy across o9 experiences.',
  },
  { slug: 'acronyms', label: 'Acronyms' },
  { slug: 'ages', label: 'Ages' },
  { slug: 'american-english', label: 'American English' },
  { slug: 'byte-sizes', label: 'Byte Sizes' },
  { slug: 'capitalization', label: 'Capitalization' },
  { slug: 'command-names-and-keys', label: 'Command Names and Keys' },
  { slug: 'dates-and-times', label: 'Dates and Times' },
  { slug: 'file-names-types-and-extensions', label: 'File Names, Types, and Extensions' },
  { slug: 'fiscal-years', label: 'Fiscal Years' },
  { slug: 'folders-drives-and-paths', label: 'Folders, Drives, and Paths' },
  { slug: 'fractions', label: 'Fractions' },
  { slug: 'jargon', label: 'Jargon' },
  { slug: 'lists', label: 'Lists' },
  { slug: 'numerals', label: 'Numerals' },
  { slug: 'numeric-abbreviations', label: 'Numeric Abbreviations' },
  { slug: 'percentages', label: 'Percentages' },
  { slug: 'person-and-pronouns', label: 'Person and Pronouns' },
  { slug: 'personal-titles', label: 'Personal Titles' },
  { slug: 'phone-numbers', label: 'Phone Numbers' },
  { slug: 'product-references', label: 'Product References' },
  { slug: 'punctuation', label: 'Punctuation' },
  { slug: 'sentence-structure', label: 'Sentence Structure' },
  { slug: 'special-characters', label: 'Special Characters' },
  { slug: 'state-and-city-names', label: 'State and City Names' },
  { slug: 'urls', label: 'URLs' },
]

/** Sidebar + route lookup */
export const GRAMMAR_STYLE_NAV_ITEMS = GRAMMAR_STYLE_TOPICS.map((topic) => ({
  path: grammarStyleTopicPath(topic.slug),
  label: topic.label,
}))

/**
 * @param {string} slug
 * @returns {GrammarStyleTopic | undefined}
 */
export function getGrammarStyleTopic(slug) {
  return GRAMMAR_STYLE_TOPICS.find((t) => t.slug === slug)
}
