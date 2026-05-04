import ExpandableDocImage from '../../LayoutComponents/ExpandableDocImage'
import AccessibilityDocPage from './AccessibilityDocPage'

const toc = [
  { id: 'a11y-digital', label: 'What is digital accessibility?' },
  { id: 'a11y-disability', label: 'Understanding disability' },
  { id: 'a11y-pour', label: 'The POUR principles' },
  { id: 'a11y-wcag', label: 'WCAG' },
  { id: 'a11y-baseline', label: 'Our baseline' },
  { id: 'a11y-ds', label: 'Design system implication' },
]

export default function StandardsAndPrinciples() {
  return (
    <AccessibilityDocPage
      title="Standards and principles"
      description="WCAG, POUR principles, and the core model behind accessible digital experiences."
      tocSections={toc}
    >
      <section id="a11y-digital" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">What is digital accessibility?</h2>
        <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
          Digital accessibility means making websites, applications, software, documents, and other digital content usable by everyone, including people with disabilities.
        </p>
        <p className="text-arvo-light-secondary dark:text-neutral-400">Accessibility is not limited to web pages. It applies across:</p>
        <ul className="list-disc list-inside space-y-2 text-arvo-light-secondary dark:text-neutral-400">
          <li>web apps</li>
          <li>desktop apps</li>
          <li>mobile apps</li>
          <li>PDFs</li>
          <li>emails</li>
          <li>documents</li>
          <li>audio and video content</li>
        </ul>
      </section>

      <section id="a11y-disability" className="space-y-6 scroll-mt-24">
        <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Understanding disability</h2>
        <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
          Disability is not a narrow category. The same kinds of barriers can affect people in permanent, temporary, or situational ways—designing for inclusion often helps everyone.
        </p>
        <figure className="border border-arvo-light-border dark:border-neutral-700 p-4 md:p-6 bg-arvo-light-surface dark:bg-neutral-900/40">
          <ExpandableDocImage
            src="/o9DocGraphics/AccessibilityGraphic/understanding-disability-infographic.png"
            alt="Understanding Disability infographic in four quadrants: Touch—Permanent one arm, Temporary arm injury, Situational new parent holding a baby. Speak—Permanent non-verbal, Temporary laryngitis, Situational heavy accent. Hear—Permanent Deaf, Temporary ear infection, Situational bartender in noise. See—Permanent blind with cane, Temporary cataract, Situational distracted driver. Footer: Accessibility is for everyone; Design with inclusion."
            className="w-full max-w-4xl mx-auto h-auto block"
            width={1024}
            height={682}
            loading="lazy"
            decoding="async"
          />
          <figcaption className="mt-4 text-xs text-arvo-light-secondary dark:text-neutral-500 text-center leading-relaxed max-w-3xl mx-auto">
            Permanent, temporary, and situational barriers show up across touch, speech, hearing, and sight—accessible design supports people in all of these contexts.
            <span className="block mt-2 text-arvo-light-primary dark:text-neutral-400">
              Accessibility is for everyone. Small inclusive choices have outsized impact.
            </span>
          </figcaption>
        </figure>
        <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
          In documentation we often group these as:
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-arvo-light-primary dark:text-white mb-2">Permanent</h3>
            <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm mb-2">A long-term condition that affects how someone interacts with digital products.</p>
            <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm">Examples: blindness, low vision, Deafness, mobility impairments, cognitive disabilities.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-arvo-light-primary dark:text-white mb-2">Temporary</h3>
            <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm mb-2">A short-term limitation.</p>
            <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm">Examples: broken arm, eye strain after surgery, temporary hearing loss, fatigue or concussion.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-arvo-light-primary dark:text-white mb-2">Situational</h3>
            <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm mb-2">A limitation caused by context rather than the person.</p>
            <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm">Examples: bright sunlight, noisy office, one-handed phone use, weak connection, distraction.</p>
          </div>
        </div>
      </section>

      <section id="a11y-pour" className="space-y-8 scroll-mt-24">
        <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">The POUR principles</h2>
        <p className="text-arvo-light-secondary dark:text-neutral-400">The four foundational accessibility principles are:</p>
        <figure className="border border-arvo-light-border dark:border-neutral-700 p-4 md:p-6 bg-arvo-light-surface dark:bg-neutral-900/40">
          <ExpandableDocImage
            src="/o9DocGraphics/AccessibilityGraphic/pour-principles-infographic.png"
            alt="POUR principles for web accessibility. Perceivable: information must be perceivable; examples include text alternatives, sufficient color contrast, resizable text. Operable: UI must be operable by all; keyboard access, enough time, avoid seizure-inducing content. Understandable: clear language, consistent navigation, help users correct mistakes. Robust: works with assistive tech and platforms; valid HTML and ARIA, test across browsers. Footer: inclusive experiences; accessible design improves usability and satisfaction."
            className="w-full max-w-4xl mx-auto h-auto block"
            width={1024}
            height={682}
            loading="lazy"
            decoding="async"
          />
          <figcaption className="mt-4 text-xs text-arvo-light-secondary dark:text-neutral-500 text-center leading-relaxed max-w-3xl mx-auto">
            POUR—Perceivable, Operable, Understandable, Robust—frames how we structure content, interactions, and technical quality for accessibility.
          </figcaption>
        </figure>

        <div className="space-y-4 border border-arvo-light-border dark:border-neutral-700 p-6">
          <h3 className="text-lg font-semibold text-arvo-light-primary dark:text-white">Perceivable</h3>
          <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm">Users must be able to perceive the content.</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-arvo-light-secondary dark:text-neutral-400">
            <li>text alternatives for non-text content</li>
            <li>sufficient contrast</li>
            <li>captions and transcripts</li>
            <li>zoom support</li>
            <li>meaningful structure and headings</li>
          </ul>
          <p className="text-sm text-arvo-light-secondary dark:text-neutral-400">
            <strong className="text-arvo-light-primary dark:text-white">Example:</strong> A chart shown only as colored shapes is not perceivable enough. Add labels, patterns, or a data table.
          </p>
        </div>

        <div className="space-y-4 border border-arvo-light-border dark:border-neutral-700 p-6">
          <h3 className="text-lg font-semibold text-arvo-light-primary dark:text-white">Operable</h3>
          <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm">Users must be able to operate the interface.</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-arvo-light-secondary dark:text-neutral-400">
            <li>full keyboard support</li>
            <li>predictable navigation</li>
            <li>no keyboard traps</li>
            <li>accessible alternatives for drag-and-drop</li>
            <li>enough time to complete actions where needed</li>
          </ul>
          <p className="text-sm text-arvo-light-secondary dark:text-neutral-400">
            <strong className="text-arvo-light-primary dark:text-white">Example:</strong> A dropdown that opens only on hover is not operable for keyboard users.
          </p>
        </div>

        <div className="space-y-4 border border-arvo-light-border dark:border-neutral-700 p-6">
          <h3 className="text-lg font-semibold text-arvo-light-primary dark:text-white">Understandable</h3>
          <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm">Users must be able to understand the content and interaction model.</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-arvo-light-secondary dark:text-neutral-400">
            <li>plain language</li>
            <li>clear labels</li>
            <li>helpful instructions</li>
            <li>predictable behavior</li>
            <li>actionable errors</li>
          </ul>
          <p className="text-sm text-arvo-light-secondary dark:text-neutral-400">
            <strong className="text-arvo-light-primary dark:text-white">Example:</strong> “Invalid input” is too vague. “Enter a valid email address” is understandable.
          </p>
        </div>

        <div className="space-y-4 border border-arvo-light-border dark:border-neutral-700 p-6">
          <h3 className="text-lg font-semibold text-arvo-light-primary dark:text-white">Robust</h3>
          <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm">Content must work with current and future browsers and assistive technologies.</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-arvo-light-secondary dark:text-neutral-400">
            <li>semantic HTML</li>
            <li>valid roles and states</li>
            <li>accessible custom components</li>
            <li>correct accessibility tree output</li>
          </ul>
          <p className="text-sm text-arvo-light-secondary dark:text-neutral-400">
            <strong className="text-arvo-light-primary dark:text-white">Example:</strong> A button built with a <code className="px-1" data-arvo-inline-code>div</code> may look correct visually, but without role and keyboard support it is not robust.
          </p>
        </div>
      </section>

      <section id="a11y-wcag" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">WCAG</h2>
        <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
          WCAG stands for <strong className="text-arvo-light-primary dark:text-white">Web Content Accessibility Guidelines</strong>. It is the most widely used global standard for digital accessibility.
        </p>
        <figure className="border border-arvo-light-border dark:border-neutral-700 p-4 md:p-6 bg-arvo-light-surface dark:bg-neutral-900/40">
          <ExpandableDocImage
            src="/o9DocGraphics/AccessibilityGraphic/wcag-timeline-infographic.png"
            alt="WCAG timeline: 1999 WCAG 1.0 first release; 2008 WCAG 2.0 usability and testability; 2018 WCAG 2.1 mobile and cognitive; 2023 WCAG 2.2 additional criteria. Banner: accessibility is an ongoing journey. o9 targets WCAG 2.2 Level AA. Table of levels: A minimal must-have barriers; AA recommended removes significant barriers; AAA highest good-to-have. Footer themes inclusion and evolving standards."
            className="w-full max-w-4xl mx-auto h-auto block"
            width={1024}
            height={682}
            loading="lazy"
            decoding="async"
          />
          <figcaption className="mt-4 text-xs text-arvo-light-secondary dark:text-neutral-500 text-center leading-relaxed max-w-3xl mx-auto">
            WCAG has evolved from 1.0 through 2.2; o9 aligns product and design system work to <strong className="text-arvo-light-primary dark:text-white">WCAG 2.2 AA</strong>.
          </figcaption>
        </figure>
        <h3 className="text-lg font-semibold text-arvo-light-primary dark:text-white">Conformance levels</h3>
        <ul className="list-disc list-inside space-y-2 text-arvo-light-secondary dark:text-neutral-400">
          <li>
            <strong className="text-arvo-light-primary dark:text-white">Level A</strong> — Minimum accessibility support.
          </li>
          <li>
            <strong className="text-arvo-light-primary dark:text-white">Level AA</strong> — The standard baseline for most production digital products.
          </li>
          <li>
            <strong className="text-arvo-light-primary dark:text-white">Level AAA</strong> — Highest level; usually not practical to meet everywhere.
          </li>
        </ul>
      </section>

      <section id="a11y-baseline" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Our baseline</h2>
        <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
          We follow <strong className="text-arvo-light-primary dark:text-white">WCAG 2.2 AA</strong>.
        </p>
        <p className="text-arvo-light-secondary dark:text-neutral-400">That means our design system components and patterns should support:</p>
        <ul className="list-disc list-inside space-y-2 text-arvo-light-secondary dark:text-neutral-400">
          <li>keyboard navigation</li>
          <li>focus visibility</li>
          <li>accessible names</li>
          <li>usable error handling</li>
          <li>sufficient contrast</li>
          <li>reflow and zoom support</li>
          <li>understandable interaction patterns</li>
        </ul>
      </section>

      <section id="a11y-ds" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Design system implication</h2>
        <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
          Not every WCAG requirement maps to a single component. Some requirements apply at page level, content level, workflow level, or product level.
        </p>
        <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
          The design system provides accessible building blocks, but teams must still assemble them correctly.
        </p>
      </section>
    </AccessibilityDocPage>
  )
}
