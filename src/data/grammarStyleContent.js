/** @typedef {{ id: string, label: string }} GrammarTocItem */

/** @typedef {{
 *   title?: string,
 *   intro?: string,
 *   prefer?: string[],
 *   write: string[],
 *   avoid: string[],
 *   why?: string,
 *   footnote?: string,
 *   doTitle?: string,
 *   dontTitle?: string,
 * }} WriteAvoidSection */

/** @typedef {{
 *   id: string,
 *   label: string,
 *   overview: string,
 *   covers?: string[],
 *   toc: GrammarTocItem[],
 *   sections: Array<
 *     | { id: string, type: 'writeAvoid', label?: string } & WriteAvoidSection
 *     | { id: string, type: 'examples', label: string, items: string[] }
 *     | { id: string, type: 'bullets', label: string, items: string[] }
 *     | { id: string, type: 'exampleGroups', label: string, groups: Array<{ title: string, items: string[] }> }
 *   >,
 * }} GrammarTopicContent */

export const GRAMMAR_STYLE_INTRO_TOC = [
  { id: 'grammar-style-overview', label: 'Overview' },
  { id: 'grammar-style-principles', label: 'Grammar & style principles' },
  { id: 'grammar-style-structure', label: 'Documentation structure' },
]

export const GRAMMAR_STYLE_QUALITIES = [
  'clear',
  'professional',
  'consistent',
  'easy to scan',
  'easy to understand',
]

export const GRAMMAR_STYLE_APPLIES_TO = [
  'planning workflows',
  'forecasting',
  'scenario analysis',
  'supplier collaboration',
  'control tower experiences',
  'AI recommendations',
  'forms',
  'buttons',
  'dialogs',
  'tables',
  'notifications',
  'onboarding',
  'system messaging',
]

export const GRAMMAR_STYLE_PRINCIPLES = [
  {
    title: 'Be consistent',
    desc: 'Use repeatable writing patterns across products, workflows, and components. The same interaction should use the same language, formatting, and terminology.',
  },
  {
    title: 'Be readable',
    desc: 'Optimize content for quick scanning. Prefer short sentences, clear structure, and familiar wording.',
  },
  {
    title: 'Be concise',
    desc: 'Keep content lightweight. Remove unnecessary words, repetition, and filler.',
  },
  {
    title: 'Be predictable',
    desc: 'Follow established writing patterns. Users should know what to expect across the platform.',
  },
  {
    title: 'Be professional',
    desc: 'Write for enterprise planning users. Content should feel knowledgeable, trustworthy, and business-focused.',
  },
  {
    title: 'Reduce effort',
    desc: 'Help users understand information quickly and take action with confidence. Complex workflows should feel easier to navigate through clear writing.',
  },
]

/** @type {Record<string, GrammarTopicContent>} */
export const GRAMMAR_STYLE_TOPIC_CONTENT = {
  acronyms: {
    id: 'acronyms',
    label: 'Acronyms',
    overview:
      'Defines how acronyms and abbreviations should be written. Supply chain, planning, and enterprise products rely heavily on acronyms. Use them consistently.',
    covers: ['first mention rules', 'plural acronyms', 'capitalization', 'approved abbreviations'],
    toc: [
      { id: 'gs-acronyms-overview', label: 'Overview' },
      { id: 'gs-acronyms-first-mention', label: 'First mention' },
      { id: 'gs-acronyms-plurals', label: 'Plural acronyms' },
    ],
    sections: [
      {
        id: 'gs-acronyms-first-mention',
        type: 'writeAvoid',
        title: 'First mention',
        intro: 'Spell out acronyms on first mention when the audience may not know them.',
        write: [
          'Integrated Business Planning (IBP)',
          'Machine Learning (ML)',
          'Role-Based Access Control (RBAC)',
          'Enterprise Knowledge Graph (EKG)',
          'Revenue Growth Management (RGM)',
          'Supply Chain Planning (SCP)',
        ],
        avoid: ['RBAC without explanation on first mention'],
      },
      {
        id: 'gs-acronyms-plurals',
        type: 'writeAvoid',
        title: 'Plural acronyms',
        write: ['KPIs', 'SKUs', 'BOMs', 'DCs', 'OTIF'],
        avoid: ["KPI's", "SKU's"],
      },
    ],
  },
  ages: {
    id: 'ages',
    label: 'Ages',
    overview: 'Defines how ages should be written.',
    toc: [
      { id: 'gs-ages-overview', label: 'Overview' },
      { id: 'gs-ages-rules', label: 'Rules' },
    ],
    sections: [
      {
        id: 'gs-ages-rules',
        type: 'writeAvoid',
        title: 'Ages',
        write: ['5 years old', '10-year contract', 'A 3-year planning horizon', 'Users aged 18–24'],
        avoid: ['5 yrs old', '10 year contract', '18 to 24 years old'],
      },
    ],
  },
  'american-english': {
    id: 'american-english',
    label: 'American English',
    overview: 'o9 uses American English across products and documentation.',
    toc: [
      { id: 'gs-american-overview', label: 'Overview' },
      { id: 'gs-american-rules', label: 'Rules' },
    ],
    sections: [
      {
        id: 'gs-american-rules',
        type: 'writeAvoid',
        title: 'American English',
        write: ['Color', 'Organize', 'Finalize', 'Traveling', 'Forecasting', 'Optimization'],
        avoid: ['Colour', 'Organise', 'Finalise', 'Travelling', 'Optimisation'],
      },
    ],
  },
  'byte-sizes': {
    id: 'byte-sizes',
    label: 'Byte Sizes',
    overview: 'Defines file and storage size formatting.',
    toc: [
      { id: 'gs-byte-overview', label: 'Overview' },
      { id: 'gs-byte-rules', label: 'Rules' },
      { id: 'gs-byte-examples', label: 'Examples' },
    ],
    sections: [
      {
        id: 'gs-byte-rules',
        type: 'writeAvoid',
        title: 'Byte sizes',
        write: ['2 MB', '250 GB', '1.5 TB', '512 KB', '10 GB forecast export'],
        avoid: ['2Mb', '250gb', '1.5tb', '512kb'],
      },
      {
        id: 'gs-byte-examples',
        type: 'examples',
        label: 'o9 examples',
        items: ['Export exceeds 10 GB.', 'Upload a 5 MB file or smaller.'],
      },
    ],
  },
  capitalization: {
    id: 'capitalization',
    label: 'Capitalization',
    overview: 'Defines capitalization rules across the platform.',
    covers: ['Title Case', 'Sentence case', 'ALL CAPS', 'headings', 'buttons', 'menus', 'labels', 'tabs'],
    toc: [
      { id: 'gs-cap-overview', label: 'Overview' },
      { id: 'gs-cap-examples', label: 'Examples' },
    ],
    sections: [
      {
        id: 'gs-cap-examples',
        type: 'exampleGroups',
        label: 'Examples',
        groups: [
          {
            title: 'Title Case',
            items: ['Demand Planning', 'Publish Forecast', 'Revenue Growth Management'],
          },
          {
            title: 'Sentence case',
            items: ['Planning horizon', 'Review supplier responses', 'Forecast published'],
          },
          {
            title: 'ALL CAPS',
            items: ['FILTERS', 'ADVANCED', 'SUPPLY RISKS'],
          },
        ],
      },
    ],
  },
  'command-names-and-keys': {
    id: 'command-names-and-keys',
    label: 'Command Names and Keys',
    overview: 'Defines keyboard shortcuts and commands. Always capitalize command names and keys. Use "+" between combined keys.',
    toc: [
      { id: 'gs-keys-overview', label: 'Overview' },
      { id: 'gs-keys-rules', label: 'Rules' },
      { id: 'gs-keys-examples', label: 'o9 examples' },
    ],
    sections: [
      {
        id: 'gs-keys-rules',
        type: 'writeAvoid',
        title: 'Command names and keys',
        write: [
          'Press Enter',
          'Press Esc to close',
          'Press Ctrl + Enter',
          'Press Cmd + K',
          'Press Shift + Click',
          'Use Alt + O + F to open filters',
        ],
        avoid: ['press enter', 'CTRL + enter', 'esc key', 'command+k'],
      },
      {
        id: 'gs-keys-examples',
        type: 'examples',
        label: 'o9 examples',
        items: [
          'Press Esc to close the filter panel.',
          'Use Ctrl + Enter to publish.',
          'Press Shift + Click to select a range.',
        ],
      },
    ],
  },
  'dates-and-times': {
    id: 'dates-and-times',
    label: 'Dates and Times',
    overview: 'Defines date and time formatting. Use a globally understandable format.',
    toc: [
      { id: 'gs-dates-overview', label: 'Overview' },
      { id: 'gs-dates-rules', label: 'Rules' },
      { id: 'gs-dates-timezones', label: 'Time zones' },
      { id: 'gs-dates-examples', label: 'o9 examples' },
    ],
    sections: [
      {
        id: 'gs-dates-rules',
        type: 'writeAvoid',
        title: 'Dates and times',
        write: [
          'Wednesday, February 15',
          'February 15, 2026',
          'Wednesday, February 15, 9:00 AM IST',
          'Thursday, March 12, 4:00 PM UTC',
        ],
        avoid: ['15/02/26', '02/15/26', '15 Feb 26'],
      },
      {
        id: 'gs-dates-timezones',
        type: 'bullets',
        label: 'Time zones',
        items: [
          'Always capitalize timezone abbreviations.',
          'Examples: IST, EST, CST, UTC, GMT',
        ],
      },
      {
        id: 'gs-dates-examples',
        type: 'examples',
        label: 'o9 examples',
        items: [
          'Forecast refresh scheduled for Wednesday, February 15, 9:00 AM IST.',
          'Supplier review starts Thursday, March 12, 4:00 PM UTC.',
        ],
      },
    ],
  },
  'file-names-types-and-extensions': {
    id: 'file-names-types-and-extensions',
    label: 'File Names, Types, and Extensions',
    overview: 'Defines file references. Always include the file extension when relevant.',
    toc: [
      { id: 'gs-files-overview', label: 'Overview' },
      { id: 'gs-files-rules', label: 'Rules' },
      { id: 'gs-files-examples', label: 'o9 examples' },
    ],
    sections: [
      {
        id: 'gs-files-rules',
        type: 'writeAvoid',
        title: 'File names, types, and extensions',
        write: [
          'Upload a .csv file',
          'Export as .xlsx',
          'Download forecast_report.pdf',
          'Import supplier_capacity.csv',
        ],
        avoid: ['Upload csv', 'Export excel file', 'Download PDF'],
      },
      {
        id: 'gs-files-examples',
        type: 'examples',
        label: 'o9 examples',
        items: ['Import demand_forecast.csv to continue.', 'Download inventory_plan.xlsx.'],
      },
    ],
  },
  'fiscal-years': {
    id: 'fiscal-years',
    label: 'Fiscal Years',
    overview: 'Defines fiscal year formatting.',
    toc: [
      { id: 'gs-fy-overview', label: 'Overview' },
      { id: 'gs-fy-rules', label: 'Rules' },
      { id: 'gs-fy-examples', label: 'o9 examples' },
    ],
    sections: [
      {
        id: 'gs-fy-rules',
        type: 'writeAvoid',
        title: 'Fiscal years',
        write: ['FY25', 'FY2025', 'FY24–FY25', 'FY26 demand plan'],
        avoid: ['F.Y.25', 'Fiscal Year 25', 'fy25'],
      },
      {
        id: 'gs-fy-examples',
        type: 'examples',
        label: 'o9 examples',
        items: ['Revenue forecast updated for FY26.', 'Compare supply plans across FY24–FY25.'],
      },
    ],
  },
  'folders-drives-and-paths': {
    id: 'folders-drives-and-paths',
    label: 'Folders, Drives, and Paths',
    overview: 'Defines navigation paths and file references. Use > to show hierarchy.',
    toc: [
      { id: 'gs-paths-overview', label: 'Overview' },
      { id: 'gs-paths-rules', label: 'Rules' },
      { id: 'gs-paths-examples', label: 'o9 examples' },
    ],
    sections: [
      {
        id: 'gs-paths-rules',
        type: 'writeAvoid',
        title: 'Folders, drives, and paths',
        write: [
          'Reports > Forecasts',
          'Control Tower > Exceptions',
          'Supply Planning > Constraints',
          'Shared Drive',
          'C:\\Planning\\Forecasts',
        ],
        avoid: ['Reports/Forecasts', 'Control Tower/Exceptions'],
      },
      {
        id: 'gs-paths-examples',
        type: 'examples',
        label: 'o9 examples',
        items: ['Go to Demand Planning > Forecast Comparison.', 'Open Supply Planning > Constraints.'],
      },
    ],
  },
  fractions: {
    id: 'fractions',
    label: 'Fractions',
    overview: 'Defines fraction formatting. Prefer numerals for readability.',
    toc: [
      { id: 'gs-fractions-overview', label: 'Overview' },
      { id: 'gs-fractions-rules', label: 'Rules' },
      { id: 'gs-fractions-examples', label: 'Example' },
    ],
    sections: [
      {
        id: 'gs-fractions-rules',
        type: 'writeAvoid',
        title: 'Fractions',
        write: ['1/2', '3/4', 'One-half', 'Two-thirds'],
        avoid: ['½ inside UI labels'],
      },
      {
        id: 'gs-fractions-examples',
        type: 'examples',
        label: 'Example',
        items: ['Only 1/3 of suppliers responded.'],
      },
    ],
  },
  jargon: {
    id: 'jargon',
    label: 'Jargon',
    overview:
      'Defines restricted language. Avoid vague business buzzwords and unnecessary technical language.',
    toc: [
      { id: 'gs-jargon-overview', label: 'Overview' },
      { id: 'gs-jargon-rules', label: 'Avoid' },
      { id: 'gs-jargon-examples', label: 'o9 product examples' },
    ],
    sections: [
      {
        id: 'gs-jargon-rules',
        type: 'writeAvoid',
        title: 'Jargon',
        doTitle: 'Write instead',
        dontTitle: 'Avoid',
        write: [
          'Work together',
          'Major change',
          'Discuss later',
          'Reliable',
          'Improve',
          'Use insights',
        ],
        avoid: [
          'Synergy',
          'Paradigm shift',
          'Circle back',
          'Touch base',
          'Game-changing',
          'Revolutionary',
          'Seamless',
          'Cutting-edge',
          'Leverage',
          'Transform',
          'Unlock value',
        ],
      },
      {
        id: 'gs-jargon-examples',
        type: 'writeAvoid',
        label: 'o9 product examples',
        title: 'o9 product examples',
        doTitle: 'Write',
        dontTitle: 'Avoid',
        write: ['Improve supply visibility', 'Use forecast insights'],
        avoid: ['Unlock supply chain value', 'Leverage forecast intelligence'],
      },
    ],
  },
  lists: {
    id: 'lists',
    label: 'Lists',
    overview: 'Defines list formatting. Lists should be grammatically consistent.',
    toc: [
      { id: 'gs-lists-overview', label: 'Overview' },
      { id: 'gs-lists-rules', label: 'Rules' },
      { id: 'gs-lists-example', label: 'o9 example' },
      { id: 'gs-lists-notes', label: 'Notes' },
    ],
    sections: [
      {
        id: 'gs-lists-rules',
        type: 'writeAvoid',
        title: 'Lists',
        intro: 'If one bullet starts with a verb, all bullets should start with verbs.',
        doTitle: 'Correct',
        dontTitle: 'Avoid',
        write: ['Review forecasts', 'Compare scenarios', 'Publish supply plans'],
        avoid: ['Review forecasts', 'Scenario comparison', 'Publishing supply plans'],
      },
      {
        id: 'gs-lists-example',
        type: 'examples',
        label: 'o9 example',
        items: [
          'Before publishing:',
          'Review demand changes',
          'Compare inventory impact',
          'Validate supplier responses',
        ],
      },
      {
        id: 'gs-lists-notes',
        type: 'writeAvoid',
        label: 'Notes',
        title: 'Notes',
        intro: 'Use notes only when information is useful and contextual. Avoid long instructional paragraphs.',
        write: [
          'Note: Publishing affects connected supply plans.',
          'Tip: Use filters to narrow supplier responses.',
        ],
        avoid: ['Long explanatory blocks.'],
      },
    ],
  },
  numerals: {
    id: 'numerals',
    label: 'Numerals',
    overview: 'Defines number formatting. Spell out numbers below 10. Use numerals for 10 and above.',
    toc: [
      { id: 'gs-numerals-overview', label: 'Overview' },
      { id: 'gs-numerals-rules', label: 'Rules' },
      { id: 'gs-numerals-exceptions', label: 'Exceptions' },
    ],
    sections: [
      {
        id: 'gs-numerals-rules',
        type: 'writeAvoid',
        title: 'Numerals',
        intro: 'Spell out numbers below 10. Use numerals for 10 and above.',
        write: ['three planners', 'eight suppliers', '12 forecasts', '24 scenarios'],
        avoid: ['twelve forecasts', 'twenty-four scenarios'],
      },
      {
        id: 'gs-numerals-exceptions',
        type: 'bullets',
        label: 'Exceptions',
        items: [
          'Always use numerals for KPIs, analytics, tables, percentages, and measurements.',
          'Examples: 4 regions, 12% increase, 3 suppliers delayed',
        ],
      },
    ],
  },
  'numeric-abbreviations': {
    id: 'numeric-abbreviations',
    label: 'Numeric Abbreviations',
    overview: 'Defines short forms for large numbers.',
    toc: [
      { id: 'gs-numabbr-overview', label: 'Overview' },
      { id: 'gs-numabbr-rules', label: 'Rules' },
      { id: 'gs-numabbr-examples', label: 'o9 examples' },
    ],
    sections: [
      {
        id: 'gs-numabbr-rules',
        type: 'writeAvoid',
        title: 'Numeric abbreviations',
        write: ['1.2K', '4.5M', '2.3B'],
        avoid: ['1,200 (in compact KPI cards)', '4500000'],
      },
      {
        id: 'gs-numabbr-examples',
        type: 'examples',
        label: 'o9 examples',
        items: ['Revenue impact: $2.3M', 'Affected shipments: 1.2K'],
      },
    ],
  },
  percentages: {
    id: 'percentages',
    label: 'Percentages',
    overview: 'Defines percentage formatting. Always use %.',
    toc: [
      { id: 'gs-pct-overview', label: 'Overview' },
      { id: 'gs-pct-rules', label: 'Rules' },
      { id: 'gs-pct-examples', label: 'o9 examples' },
    ],
    sections: [
      {
        id: 'gs-pct-rules',
        type: 'writeAvoid',
        title: 'Percentages',
        write: ['12%', 'Forecast accuracy increased by 18%.', 'Inventory declined by 5%.'],
        avoid: ['12 percent', 'eighteen percent'],
      },
      {
        id: 'gs-pct-examples',
        type: 'examples',
        label: 'o9 examples',
        items: ['Revenue risk increased by 8%.', 'Service level dropped by 3%.'],
      },
    ],
  },
  'person-and-pronouns': {
    id: 'person-and-pronouns',
    label: 'Person and Pronouns',
    overview: 'Defines grammatical perspective. Preferred: second person (you, your).',
    toc: [
      { id: 'gs-pronouns-overview', label: 'Overview' },
      { id: 'gs-pronouns-rules', label: 'Rules' },
    ],
    sections: [
      {
        id: 'gs-pronouns-rules',
        type: 'writeAvoid',
        title: 'Person and pronouns',
        write: [
          "You don't have access.",
          'Update your forecast preferences.',
          'Review your assigned regions.',
        ],
        avoid: ['We updated your settings.', 'Our system refreshed data.'],
      },
    ],
  },
  'personal-titles': {
    id: 'personal-titles',
    label: 'Personal Titles',
    overview: 'Defines title formatting.',
    toc: [
      { id: 'gs-titles-overview', label: 'Overview' },
      { id: 'gs-titles-rules', label: 'Rules' },
    ],
    sections: [
      {
        id: 'gs-titles-rules',
        type: 'writeAvoid',
        title: 'Personal titles',
        write: ['Dr. Smith', 'Mr. Johnson', 'Ms. Patel', 'Prof. Williams'],
        avoid: ['doctor Smith', 'mr. Johnson'],
      },
    ],
  },
  'phone-numbers': {
    id: 'phone-numbers',
    label: 'Phone Numbers',
    overview: 'Defines phone number formatting.',
    toc: [
      { id: 'gs-phone-overview', label: 'Overview' },
      { id: 'gs-phone-rules', label: 'Rules' },
    ],
    sections: [
      {
        id: 'gs-phone-rules',
        type: 'writeAvoid',
        title: 'Phone numbers',
        write: ['+1 555 123 4567', '+91 98765 43210'],
        avoid: ['9876543210', '+91-98765-43210'],
      },
    ],
  },
  'product-references': {
    id: 'product-references',
    label: 'Product References',
    overview: 'Defines product and feature naming. Always use official product terminology.',
    toc: [
      { id: 'gs-product-overview', label: 'Overview' },
      { id: 'gs-product-rules', label: 'Rules' },
    ],
    sections: [
      {
        id: 'gs-product-rules',
        type: 'writeAvoid',
        title: 'Product references',
        write: [
          'o9 Digital Brain',
          'Demand Planning',
          'Supply Chain Planning',
          'Revenue Growth Management',
          'Filter Sets',
          'Member Info',
          'Enterprise Knowledge Graph',
        ],
        avoid: ['Planning tool', 'Forecast module', 'Filter templates', 'Cell information popup'],
      },
    ],
  },
  punctuation: {
    id: 'punctuation',
    label: 'Punctuation',
    overview: 'Defines punctuation rules.',
    covers: ['commas', 'apostrophes', 'colons', 'ellipses', 'quotation marks'],
    toc: [
      { id: 'gs-punct-overview', label: 'Overview' },
      { id: 'gs-punct-rules', label: 'Rules' },
    ],
    sections: [
      {
        id: 'gs-punct-rules',
        type: 'writeAvoid',
        title: 'Punctuation',
        write: [
          'Planning, forecasting, and execution.',
          'Syncing data…',
          'Compare forecasts:',
          'Region A',
          'Region B',
        ],
        avoid: [
          'Planning, forecasting and execution.',
          'Save forecast… (unless action is in progress)',
        ],
      },
    ],
  },
  'sentence-structure': {
    id: 'sentence-structure',
    label: 'Sentence Structure',
    overview: 'Defines sentence readability. Prefer short sentences. Target 15 words or fewer.',
    toc: [
      { id: 'gs-sentence-overview', label: 'Overview' },
      { id: 'gs-sentence-rules', label: 'Rules' },
    ],
    sections: [
      {
        id: 'gs-sentence-rules',
        type: 'writeAvoid',
        title: 'Sentence structure',
        write: [
          'Compare scenario impact.',
          'Review affected suppliers.',
          'Demand increased in the Northeast region.',
        ],
        avoid: [
          'It is recommended that users review all impacted suppliers before continuing.',
        ],
      },
    ],
  },
  'special-characters': {
    id: 'special-characters',
    label: 'Special Characters',
    overview: 'Defines symbol usage.',
    toc: [
      { id: 'gs-special-overview', label: 'Overview' },
      { id: 'gs-special-rules', label: 'Rules' },
    ],
    sections: [
      {
        id: 'gs-special-rules',
        type: 'writeAvoid',
        title: 'Special characters',
        write: ['Risk & Opportunity', 'Role-Based Access Control (RBAC)', 'A/B comparison'],
        avoid: ['Overusing symbols in UI labels.'],
      },
    ],
  },
  'state-and-city-names': {
    id: 'state-and-city-names',
    label: 'State and City Names',
    overview: 'Defines geographic naming.',
    toc: [
      { id: 'gs-geo-overview', label: 'Overview' },
      { id: 'gs-geo-rules', label: 'Rules' },
    ],
    sections: [
      {
        id: 'gs-geo-rules',
        type: 'writeAvoid',
        title: 'State and city names',
        write: ['Austin, Texas', 'Bengaluru, Karnataka', 'San Francisco, California'],
        avoid: ['SF', 'BLR (unless already familiar in workflow context)'],
      },
    ],
  },
  urls: {
    id: 'urls',
    label: 'URLs',
    overview: 'Use descriptive link text. Avoid exposing raw URLs.',
    toc: [
      { id: 'gs-urls-overview', label: 'Overview' },
      { id: 'gs-urls-rules', label: 'Rules' },
    ],
    sections: [
      {
        id: 'gs-urls-rules',
        type: 'writeAvoid',
        title: 'URLs',
        write: ['View documentation', 'Open supplier report', 'Review forecast details'],
        avoid: ['Click here', 'Read more', 'https://platform.documentation.com/forecast'],
      },
    ],
  },
}

/**
 * @param {string} slug
 * @returns {GrammarTopicContent | undefined}
 */
export function getGrammarStyleTopicContent(slug) {
  return GRAMMAR_STYLE_TOPIC_CONTENT[slug]
}
