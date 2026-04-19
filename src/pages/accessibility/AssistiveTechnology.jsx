import ExpandableDocImage from '../../LayoutComponents/ExpandableDocImage'
import AccessibilityDocPage from './AccessibilityDocPage'

const toc = [
  { id: 'a11y-at-intro', label: 'Introduction' },
  { id: 'a11y-at-common', label: 'Common assistive technologies' },
  { id: 'a11y-at-ds', label: 'Why this matters for design systems' },
  { id: 'a11y-at-tree', label: 'Screen readers and the UI' },
  { id: 'a11y-at-modes', label: 'Browse mode vs focus mode' },
  { id: 'a11y-at-expect', label: 'What screen reader users expect' },
  { id: 'a11y-at-rule', label: 'Good design system rule' },
]

export default function AssistiveTechnology() {
  return (
    <AccessibilityDocPage
      title="Assistive technology"
      description="How users navigate products with screen readers, magnifiers, keyboards, and other assistive tools."
      tocSections={toc}
    >
      <section id="a11y-at-intro" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Introduction</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
          Assistive technology includes products, software, and devices that help people perceive, navigate, and interact with digital interfaces.
        </p>
        <figure className="border border-o9ds-light-border dark:border-neutral-700 p-4 md:p-6 bg-o9ds-light-surface dark:bg-neutral-900/40">
          <ExpandableDocImage
            src="/o9DocGraphics/AccessibilityGraphic/assistive-technologies-infographic.png"
            alt="Assistive technologies: eighteen topics in a grid—Screen readers; Magnification software; Speech recognition; Trackball mouse; Keyboard alternatives; Eye tracking; Braille displays and keyboards; Captions and subtitles; Captioned telephone; Video relay services; Text-to-speech and read aloud; Switch devices; Voice control software; Accessible ebooks and apps; Alternative input devices; Focus and readability tools; Gesture recognition; Built-in accessibility features in OS and devices. Footer: different tools, one goal—a digital world that works for everyone; themes of inclusion, independence, equity, and accessibility."
            className="w-full max-w-4xl mx-auto h-auto block"
            width={1024}
            height={682}
            loading="lazy"
            decoding="async"
          />
          <figcaption className="mt-4 text-xs text-o9ds-light-secondary dark:text-neutral-500 text-center leading-relaxed max-w-3xl mx-auto">
            Assistive technology removes barriers and supports independent access—many tools, one aim: interfaces that work for everyone.
          </figcaption>
        </figure>
      </section>

      <section id="a11y-at-common" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Common assistive technologies</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white mb-2">Screen readers</h3>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-2">Screen readers convert content into speech or braille output.</p>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">Common examples: NVDA (Windows), JAWS (Windows), VoiceOver (macOS, iOS), TalkBack (Android).</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white mb-2">Screen magnifiers</h3>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">Magnifiers enlarge content for users with low vision.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white mb-2">Braille displays</h3>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">Braille displays present digital content through tactile output.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white mb-2">Speech recognition</h3>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">Speech tools allow users to control interfaces with voice commands.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white mb-2">Keyboard-only access</h3>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">Some users rely entirely on a keyboard instead of a mouse.</p>
          </div>
        </div>
      </section>

      <section id="a11y-at-ds" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Why this matters for design systems</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
          Assistive technologies do not interpret visual styling the way sighted users do. They depend on:
        </p>
        <ul className="list-disc list-inside space-y-2 text-o9ds-light-secondary dark:text-neutral-400">
          <li>semantic HTML</li>
          <li>accessible names</li>
          <li>correct roles</li>
          <li>current states</li>
          <li>clear relationships between labels, controls, and messages</li>
          <li>predictable focus order</li>
        </ul>
      </section>

      <section id="a11y-at-tree" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Screen readers do not “see” the UI</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
          A screen reader does not understand visual layout the way a designer does. It reads what is exposed through the <strong className="text-o9ds-light-primary dark:text-white">accessibility tree</strong>.
        </p>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
          If the accessibility tree is wrong, the user experience is wrong—even if the screen looks correct visually.
        </p>
      </section>

      <section id="a11y-at-modes" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Browse mode vs focus mode</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
          Screen readers often use two different interaction models. <strong className="text-o9ds-light-primary dark:text-white">Browse mode</strong> is used to read and navigate content—users may jump by headings, links, buttons, landmarks, or form fields.{' '}
          <strong className="text-o9ds-light-primary dark:text-white">Focus mode</strong> (or forms mode) is used to interact with controls such as inputs, dropdowns, buttons, and custom widgets.
        </p>
        <figure className="border border-o9ds-light-border dark:border-neutral-700 p-4 md:p-6 bg-o9ds-light-surface dark:bg-neutral-900/40">
          <ExpandableDocImage
            src="/o9DocGraphics/AccessibilityGraphic/screen-reader-modes-infographic.png"
            alt="Screen reader modes: Browse mode reads and navigates the page sequentially and with shortcuts such as H for next heading and K for next link. Focus mode interacts with form fields and controls; the screen reader announces role, state, and properties of the focused element. Many screen readers let you switch modes with Insert plus Space. Summary: browse to explore content; focus to operate controls."
            className="w-full max-w-4xl mx-auto h-auto block"
            width={1024}
            height={682}
            loading="lazy"
            decoding="async"
          />
          <figcaption className="mt-4 text-xs text-o9ds-light-secondary dark:text-neutral-500 text-center leading-relaxed max-w-3xl mx-auto">
            Use browse mode to read and move through the page; use focus mode to type, select, and activate widgets. Exact mode keys depend on the screen reader and platform.
          </figcaption>
        </figure>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
          Components must support both discoverability in reading/navigation mode and correct behavior in interaction mode.
        </p>
      </section>

      <section id="a11y-at-expect" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">What screen reader users expect</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
          When focusing an interactive control, users expect to hear: accessible name, role, state, value when relevant, position in set when relevant, and whether it is disabled or required when relevant.
        </p>
        <ul className="list-disc list-inside space-y-2 text-o9ds-light-secondary dark:text-neutral-400 text-sm">
          <li>
            <strong className="text-o9ds-light-primary dark:text-white">Checkbox:</strong> “Email notifications, checkbox, checked”
          </li>
          <li>
            <strong className="text-o9ds-light-primary dark:text-white">Tab:</strong> “Overview, tab, selected, 1 of 4”
          </li>
        </ul>
      </section>

      <section id="a11y-at-rule" className="space-y-4 scroll-mt-24 border border-o9ds-light-border dark:border-neutral-700 p-6">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Good design system rule</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">For every component, define:</p>
        <ul className="list-disc list-inside space-y-2 text-o9ds-light-secondary dark:text-neutral-400">
          <li>what the user should hear when focus lands on it</li>
          <li>what changes should be announced</li>
          <li>what happens when the component expands, collapses, validates, loads, or fails</li>
        </ul>
      </section>
    </AccessibilityDocPage>
  )
}
