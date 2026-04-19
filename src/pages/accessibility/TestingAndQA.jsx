import AccessibilityDocPage from './AccessibilityDocPage'
import DocTable from '../../LayoutComponents/DocTable'

const toc = [
  { id: 'a11y-test-intro', label: 'Introduction' },
  { id: 'a11y-test-modes', label: 'Interaction modes' },
  { id: 'a11y-test-checklist', label: 'Core checklist' },
  { id: 'a11y-test-sr', label: 'Screen reader environments' },
  { id: 'a11y-test-failures', label: 'Common failures' },
  { id: 'a11y-test-qa-table', label: 'QA checklist format' },
  { id: 'a11y-test-bugs', label: 'Reporting bugs' },
]

const qaColumns = [
  { key: 'check', label: 'Check', primary: true },
  { key: 'pass', label: 'Pass criteria' },
]

const qaRows = [
  { check: 'Keyboard reachable', pass: 'Every interactive control is reachable with keyboard' },
  { check: 'Focus visible', pass: 'Current focus is always visible' },
  { check: 'Logical order', pass: 'Focus order matches task flow' },
  { check: 'Name / role / state', pass: 'Screen reader announces correct information' },
  { check: 'Zoom 200%', pass: 'No critical loss of content or function' },
  { check: 'Contrast', pass: 'Required contrast ratios pass' },
  { check: 'Error handling', pass: 'Errors are clear, linked, and recoverable' },
  { check: 'Disabled behavior', pass: 'Disabled state is understandable' },
  { check: 'Tooltip behavior', pass: 'Additional info is available on focus as needed' },
  { check: 'Dynamic updates', pass: 'Meaningful changes are announced appropriately' },
]

export default function TestingAndQA() {
  return (
    <AccessibilityDocPage
      title="Testing and QA"
      description="How to verify accessibility through keyboard, screen reader, zoom, and semantic testing."
      tocSections={toc}
    >
      <section id="a11y-test-intro" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Introduction</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
          Accessibility must be tested, not assumed. Every component and workflow should be checked through multiple interaction modes.
        </p>
      </section>

      <section id="a11y-test-modes" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Required interaction combinations</h2>
        <ul className="list-disc list-inside space-y-2 text-o9ds-light-secondary dark:text-neutral-400 text-sm">
          <li>mouse only</li>
          <li>keyboard only</li>
          <li>mouse + keyboard</li>
          <li>keyboard + screen reader</li>
        </ul>
      </section>

      <section id="a11y-test-checklist" className="space-y-6 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Core testing checklist</h2>

        <div>
          <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white mb-2">1. Keyboard-only</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400">
            <li>All interactive elements reachable; logical focus order; visible indicators</li>
            <li>All actions work without a mouse; overlays open/close; focus return; arrow keys in composites</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white mb-2">2. Screen reader</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400">
            <li>Names, roles, states; descriptions when needed; required/invalid announced</li>
            <li>Dynamic updates announced; no redundant duplicate labels</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white mb-2">3. Zoom (200%)</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400">
            <li>No content disappears; dialogs usable; popovers not clipped; controls reachable; layouts do not break tasks</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white mb-2">4. Contrast</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400">
            <li>Text, placeholders, icons, borders, focus rings, state tokens—in light and dark themes</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white mb-2">5. Semantic inspection</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400">
            <li>DevTools: role, name, state, description, focusability, tree relationships</li>
          </ul>
        </div>
      </section>

      <section id="a11y-test-sr" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Screen reader test environments</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">Recommended baseline: NVDA + Chrome or Firefox on Windows; VoiceOver + Safari on macOS.</p>
      </section>

      <section id="a11y-test-failures" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Common failures to watch for</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400">
          <li>Clickable div without keyboard support</li>
          <li>Icon-only buttons without accessible name</li>
          <li>Missing labels; broken tab order; hidden focus</li>
          <li>Color-only status</li>
          <li>Non-modal overlays trapping focus incorrectly; modals not trapping focus</li>
          <li>Tooltips only on hover</li>
          <li>Invalid fields without associated error text</li>
          <li>Popovers clipped at high zoom</li>
          <li>Charts conveying meaning only through color</li>
        </ul>
      </section>

      <section id="a11y-test-qa-table" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Suggested QA checklist format</h2>
        <DocTable columns={qaColumns} rows={qaRows} />
      </section>

      <section id="a11y-test-bugs" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Report accessibility bugs with context</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-2">Include: affected page or component; expected vs actual behavior; browser and OS; assistive technology; steps to reproduce; screenshots or recordings; screen reader output; code reference if known.</p>
        <div className="border border-o9ds-light-border dark:border-neutral-700 p-4 text-sm text-o9ds-light-secondary dark:text-neutral-400">
          <p className="font-medium text-o9ds-light-primary dark:text-white mb-1">Good bug example</p>
          <p>
            “Keyboard focus moves behind the modal after opening the overflow menu inside the dialog. Reproducible in Chrome on Windows with keyboard only. Expected: focus remains inside modal. Actual: Tab moves to background page links.”
          </p>
        </div>
      </section>
    </AccessibilityDocPage>
  )
}
