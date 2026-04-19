import { Link } from 'react-router-dom'
import ExpandableDocImage from '../../LayoutComponents/ExpandableDocImage'
import AccessibilityDocPage from './AccessibilityDocPage'

const toc = [
  { id: 'a11y-intro', label: 'Introduction' },
  { id: 'a11y-why', label: 'Why accessibility matters' },
  { id: 'a11y-curb-cut', label: 'The curb-cut effect' },
  { id: 'a11y-baseline', label: 'Our baseline' },
  { id: 'a11y-shared', label: 'Shared responsibility' },
  { id: 'a11y-principles', label: 'Principles we follow' },
  { id: 'a11y-next', label: 'What to read next' },
]

export default function OverviewArticle() {
  return (
    <AccessibilityDocPage
      title="Introduction"
      description="Foundations, principles, and expectations for building inclusive product experiences in the design system."
      tocSections={toc}
    >
      <section id="a11y-intro" className="space-y-4 scroll-mt-24">
        <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
          Accessibility is the practice of designing and building digital products that people with different abilities can perceive, understand, navigate, and operate.
        </p>
        <figure className="border border-o9ds-light-border dark:border-neutral-700 p-4 md:p-6 bg-o9ds-light-surface dark:bg-neutral-900/40">
          <ExpandableDocImage
            src="/o9DocGraphics/AccessibilityGraphic/accessibility-intro-infographic.png"
            alt="Infographic titled Accessibility: Making content, products, and environments usable by everyone. A grid summarizes twelve areas—Vision, Hearing, Mobility, Captions, Keyboard access, Readable text, Audio support, Device compatibility, Language support, Inclusive design, Easy to use, and Equal access—with short descriptions. A footer banner states Accessibility benefits everyone, with silhouettes of diverse people."
            className="w-full max-w-4xl mx-auto h-auto block"
            width={1024}
            height={682}
            loading="lazy"
            decoding="async"
          />
          <figcaption className="mt-4 text-xs text-o9ds-light-secondary dark:text-neutral-500 text-center leading-relaxed max-w-3xl mx-auto">
            Accessibility spans vision, hearing, mobility, captions, keyboard use, readable text, audio alternatives, devices, languages, inclusive design, ease of use, and equal access—often reinforcing one another.
          </figcaption>
        </figure>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
          It is not only for people with permanent disabilities. It also supports people with temporary injuries, situational limitations, aging-related changes, and different environmental conditions such as glare, noise, or one-handed use.
        </p>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
          Accessible design is good design. It removes barriers, improves usability, and creates better experiences for everyone.
        </p>
        <blockquote className="border-l-4 border-o9ds-light-primary dark:border-neutral-500 pl-4 py-1 my-4 text-o9ds-light-secondary dark:text-neutral-300 italic">
          Disability is not the problem. Barriers are the problem.
        </blockquote>
      </section>

      <section id="a11y-why" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Why accessibility matters</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
          Accessibility improves product quality for all users.
        </p>
        <ul className="list-disc list-inside space-y-2 text-o9ds-light-secondary dark:text-neutral-400">
          <li>Captions help Deaf and hard-of-hearing users, and also people in noisy environments.</li>
          <li>Clear focus states help keyboard and screen reader users, and also power users.</li>
          <li>Good contrast helps users with low vision, and also people using the product in bright light.</li>
          <li>Larger click targets help users with motor impairments, and also anyone using a trackpad, touch screen, or one hand.</li>
        </ul>
      </section>

      <section id="a11y-curb-cut" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">The curb-cut effect</h2>
        <figure className="border border-o9ds-light-border dark:border-neutral-700 p-4 md:p-6 bg-o9ds-light-surface dark:bg-neutral-900/40">
          <ExpandableDocImage
            src="/o9DocGraphics/AccessibilityGraphic/accessibility-curb-cut-effect.png"
            alt="The Curb-Cut Effect infographic. Before: a high curb blocks a wheelchair user and a stroller. After: a curb cut lets a wheelchair user, a delivery cart, a cyclist, and others pass. Subtitle: When we design for disabilities, we make things better for everyone. Icons show beneficiaries including wheelchair users, parents with strollers, travelers, older adults, cyclists, and more. Footer: Inclusion in design creates a better world for everyone."
            className="w-full max-w-4xl mx-auto h-auto block"
            width={1024}
            height={768}
            loading="lazy"
            decoding="async"
          />
          <figcaption className="mt-4 text-xs text-o9ds-light-secondary dark:text-neutral-500 text-center leading-relaxed max-w-3xl mx-auto">
            Inclusive physical design (like curb cuts) helps many groups beyond the original audience—the same idea applies to digital products.
          </figcaption>
        </figure>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
          This is often called the <strong className="text-o9ds-light-primary dark:text-white">curb-cut effect</strong>: solutions designed for accessibility end up benefiting a much wider group of users.
        </p>
      </section>

      <section id="a11y-baseline" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Our baseline</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
          Our design system targets <strong className="text-o9ds-light-primary dark:text-white">WCAG 2.2 AA</strong> as the baseline for accessible product experiences.
        </p>
        <p className="text-o9ds-light-secondary dark:text-neutral-400">Our accessibility expectations include:</p>
        <ul className="list-disc list-inside space-y-2 text-o9ds-light-secondary dark:text-neutral-400">
          <li>semantic HTML first</li>
          <li>keyboard accessibility for all interactive functionality</li>
          <li>visible focus indicators</li>
          <li>support for screen readers</li>
          <li>clear labels, descriptions, and error states</li>
          <li>sufficient color contrast</li>
          <li>zoom support up to 200%</li>
          <li>predictable focus and interaction patterns</li>
          <li>accessible custom components when native HTML is not enough</li>
        </ul>
      </section>

      <section id="a11y-shared" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Accessibility is a shared responsibility</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
          Accessibility is not a single feature or final QA step.
        </p>
        <p className="text-o9ds-light-secondary dark:text-neutral-400">It must be considered across:</p>
        <ul className="list-disc list-inside space-y-2 text-o9ds-light-secondary dark:text-neutral-400">
          <li>design</li>
          <li>content</li>
          <li>engineering</li>
          <li>QA</li>
          <li>product decisions</li>
        </ul>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
          The design system provides the foundation, but product teams must still implement components correctly in context.
        </p>
      </section>

      <section id="a11y-principles" className="space-y-6 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Accessibility principles we follow</h2>
        <ol className="list-decimal list-inside space-y-4 text-o9ds-light-secondary dark:text-neutral-400">
          <li>
            <strong className="text-o9ds-light-primary dark:text-white">Use semantic HTML first</strong> — Prefer native elements such as{' '}
            <code className="px-1 py-0.5 text-sm" data-o9ds-inline-code>button</code>,{' '}
            <code className="px-1 py-0.5 text-sm" data-o9ds-inline-code>a</code>,{' '}
            <code className="px-1 py-0.5 text-sm" data-o9ds-inline-code>input</code>,{' '}
            <code className="px-1 py-0.5 text-sm" data-o9ds-inline-code>select</code>,{' '}
            <code className="px-1 py-0.5 text-sm" data-o9ds-inline-code>textarea</code>,{' '}
            <code className="px-1 py-0.5 text-sm" data-o9ds-inline-code>table</code>, and heading tags before adding ARIA.
          </li>
          <li>
            <strong className="text-o9ds-light-primary dark:text-white">Make all functionality available by keyboard</strong> — If something can be done with a mouse, it must also be operable with a keyboard.
          </li>
          <li>
            <strong className="text-o9ds-light-primary dark:text-white">Preserve clear focus</strong> — Users must always know where keyboard focus is, where it moves, and how to return.
          </li>
          <li>
            <strong className="text-o9ds-light-primary dark:text-white">Expose meaning to assistive technology</strong> — Interactive elements must expose an accessible name, role, state, and value when relevant.
          </li>
          <li>
            <strong className="text-o9ds-light-primary dark:text-white">Do not rely on color alone</strong> — Color can support meaning, but it must not be the only way information is conveyed.
          </li>
          <li>
            <strong className="text-o9ds-light-primary dark:text-white">Keep behavior predictable</strong> — Components should behave consistently across the product so users do not need to relearn interactions.
          </li>
          <li>
            <strong className="text-o9ds-light-primary dark:text-white">Design for recovery</strong> — Required fields, validation, disabled actions, and dynamic updates must be understandable and recoverable.
          </li>
        </ol>
      </section>

      <section id="a11y-next" className="space-y-4 scroll-mt-24 border border-o9ds-light-border dark:border-neutral-700 p-6 md:p-8">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">What to read next</h2>
        <ul className="space-y-2 text-o9ds-light-secondary dark:text-neutral-400">
          <li>
            <Link to="/accessibility/standards-and-principles" className="underline font-medium text-o9ds-light-primary dark:text-white hover:opacity-90">
              Standards and principles
            </Link>
          </li>
          <li>
            <Link to="/accessibility/assistive-technology" className="underline font-medium text-o9ds-light-primary dark:text-white hover:opacity-90">
              Assistive technology
            </Link>
          </li>
          <li>
            <Link to="/accessibility/screen-reader-and-aria" className="underline font-medium text-o9ds-light-primary dark:text-white hover:opacity-90">
              Screen reader and ARIA
            </Link>
          </li>
          <li>
            <Link to="/accessibility/keyboard-and-focus" className="underline font-medium text-o9ds-light-primary dark:text-white hover:opacity-90">
              Keyboard and focus
            </Link>
          </li>
          <li>
            <Link to="/accessibility/shortcuts" className="underline font-medium text-o9ds-light-primary dark:text-white hover:opacity-90">
              Shortcuts
            </Link>
          </li>
          <li>
            <Link to="/accessibility/visual-accessibility" className="underline font-medium text-o9ds-light-primary dark:text-white hover:opacity-90">
              Visual accessibility
            </Link>
          </li>
          <li>
            <Link to="/accessibility/testing-and-qa" className="underline font-medium text-o9ds-light-primary dark:text-white hover:opacity-90">
              Testing and QA
            </Link>
          </li>
        </ul>
      </section>
    </AccessibilityDocPage>
  )
}
