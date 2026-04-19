import AccessibilityDocPage from './AccessibilityDocPage'

const tocSections = [
  { id: 'a11y-shortcuts-intro', label: 'Introduction' },
  { id: 'a11y-shortcuts-at', label: 'Assistive technology' },
  { id: 'a11y-shortcuts-product', label: 'Product and browser' },
]

export default function Shortcuts() {
  return (
    <AccessibilityDocPage
      title="Shortcuts"
      description="Keyboard shortcuts for navigation, assistive technologies, and the product. Exact keys depend on operating system, browser, and screen reader."
      tocSections={tocSections}
    >
      <section id="a11y-shortcuts-intro" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Introduction</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed text-sm">
          Shortcuts improve efficiency for power users and are often essential for people who rely on the keyboard or assistive technology. Document the shortcuts your product supports, avoid conflicts with browser and assistive technology defaults where possible, and test with real AT when you advertise a shortcut.
        </p>
      </section>

      <section id="a11y-shortcuts-at" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Assistive technology</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed text-sm">
          Screen readers and other assistive tools define their own keys (for example browse vs focus mode, rotor, landmarks). These are not controlled by the web page. For patterns such as moving by heading or landmark, see{' '}
          <strong className="text-o9ds-light-primary dark:text-white">Screen reader and ARIA</strong> and your AT vendor documentation.
        </p>
      </section>

      <section id="a11y-shortcuts-product" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Product and browser</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed text-sm">
          Expose application shortcuts in help or settings, ensure they do not trap focus, and provide alternatives where a chord is hard to perform. Follow platform conventions (Windows, macOS, web) for modifier keys and document them next to the relevant actions in your design system.
        </p>
      </section>
    </AccessibilityDocPage>
  )
}
