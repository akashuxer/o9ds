import AccessibilityDocPage from './AccessibilityDocPage'

const terms = [
  { term: 'Accessible name', def: 'The name announced by assistive technology for an element.' },
  { term: 'ARIA', def: 'Accessible Rich Internet Applications—a set of attributes that expose meaning and behavior to assistive technologies.' },
  { term: 'Assistive technology', def: 'Tools used by people with disabilities to interact with digital products, such as screen readers, magnifiers, and speech recognition.' },
  { term: 'Browse mode', def: 'A screen reader mode used mainly for reading and navigating content.' },
  { term: 'Focus', def: 'The current target of keyboard interaction.' },
  { term: 'Focus order', def: 'The sequence in which keyboard focus moves through interactive elements.' },
  { term: 'Focus trap', def: 'Behavior that keeps focus inside a blocking overlay until it is dismissed.' },
  { term: 'Focus return', def: 'Returning focus to the triggering element when a temporary UI layer closes.' },
  { term: 'Keyboard trap', def: 'A failure where focus can enter a component but cannot leave with keyboard controls.' },
  { term: 'Live region', def: 'A region that announces dynamic content changes to screen reader users.' },
  { term: 'Programmatically focusable', def: 'An element that can receive focus through script but is not in the normal tab order.' },
  { term: 'Roving tabindex', def: 'A pattern where only one item in a composite widget is in the tab order at a time.' },
  { term: 'Screen reader', def: 'Software that reads digital content aloud or outputs it to braille.' },
  { term: 'Semantic HTML', def: 'HTML that uses native elements to communicate meaning and structure.' },
  { term: 'State', def: 'Information about the current condition of a component—selected, checked, expanded, invalid, and so on.' },
  { term: 'WCAG', def: 'Web Content Accessibility Guidelines—the global standard for digital accessibility.' },
]

export default function Glossary() {
  return (
    <AccessibilityDocPage
      title="Accessibility glossary"
      description="Common accessibility terminology used across the design system."
      tocSections={[{ id: 'a11y-glossary-terms', label: 'Terms' }]}
    >
      <section id="a11y-glossary-terms" className="scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white mb-6">Terms</h2>
        <dl className="space-y-6">
          {terms.map(({ term, def }) => (
            <div key={term}>
              <dt className="font-semibold text-o9ds-light-primary dark:text-white">{term}</dt>
              <dd className="mt-1 text-o9ds-light-secondary dark:text-neutral-400 text-sm leading-relaxed pl-0">{def}</dd>
            </div>
          ))}
        </dl>
      </section>
    </AccessibilityDocPage>
  )
}
