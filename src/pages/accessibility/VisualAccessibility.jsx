import AccessibilityDocPage from './AccessibilityDocPage'
import CodeBlock from '../../LayoutComponents/CodeBlock'

const toc = [
  { id: 'a11y-vis-intro', label: 'Introduction' },
  { id: 'a11y-vis-contrast', label: 'Color contrast' },
  { id: 'a11y-vis-color-alone', label: 'Color alone' },
  { id: 'a11y-vis-focus', label: 'Focus visibility' },
  { id: 'a11y-vis-zoom', label: 'Zoom and reflow' },
  { id: 'a11y-vis-layout', label: 'Layout' },
  { id: 'a11y-vis-images', label: 'Images' },
  { id: 'a11y-vis-dataviz', label: 'Data visualization' },
  { id: 'a11y-vis-theme', label: 'Themes' },
]

export default function VisualAccessibility() {
  return (
    <AccessibilityDocPage
      title="Visual accessibility"
      description="Contrast, color use, focus visibility, zoom, and visual communication rules."
      tocSections={toc}
    >
      <section id="a11y-vis-intro" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Introduction</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
          Visual accessibility ensures content remains perceivable and understandable for users with different vision needs, zoom preferences, and environmental conditions.
        </p>
      </section>

      <section id="a11y-vis-contrast" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Color contrast</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">Minimum guidance (WCAG 2.2 AA):</p>
        <ul className="list-disc list-inside space-y-2 text-o9ds-light-secondary dark:text-neutral-400 text-sm">
          <li>normal text: at least 4.5:1</li>
          <li>large text: at least 3:1</li>
          <li>graphical objects and UI components: at least 3:1</li>
          <li>focus indicators: at least 3:1 against adjacent colors</li>
        </ul>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm font-medium">Common failures:</p>
        <ul className="list-disc list-inside space-y-1 text-o9ds-light-secondary dark:text-neutral-400 text-sm">
          <li>low-contrast placeholder text</li>
          <li>disabled text that becomes unreadable</li>
          <li>status chips with insufficient contrast</li>
          <li>borders or icons that disappear in dark mode</li>
          <li>focus outlines that blend into the background</li>
        </ul>
      </section>

      <section id="a11y-vis-color-alone" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Do not use color alone</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
          Color may reinforce meaning but must not be the only signal. Pair color with text, icon, shape, pattern, underline, or label. For errors: add message, icon, and programmatic invalid state—not only a red border.
        </p>
      </section>

      <section id="a11y-vis-focus" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Focus visibility</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
          Focused elements must be visually distinct: use design tokens for focus rings, ensure contrast in light and dark themes, do not remove outlines without an accessible replacement, and prefer <code className="px-1" data-o9ds-inline-code>:focus-visible</code> where appropriate.
        </p>
      </section>

      <section id="a11y-vis-zoom" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Zoom and reflow</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
          Interfaces must remain usable when zoomed up to 200%. Content should stay readable, functionality available, and critical content visible; dialogs and popovers must remain usable. Watch for clipped popovers, off-screen actions, overlapping fixed headers, and horizontal scroll that blocks tasks.
        </p>
      </section>

      <section id="a11y-vis-layout" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Layout guidance for zoom</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
          Prefer flexible layouts and relative units (<code className="px-1" data-o9ds-inline-code>rem</code>, <code className="px-1" data-o9ds-inline-code>%</code>), responsive containers, min/max constraints, and wrapping. Avoid rigid pixel-only layouts that break under zoom.
        </p>
      </section>

      <section id="a11y-vis-images" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Images</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">Meaningful images: descriptive <code className="px-1" data-o9ds-inline-code>alt</code> text. Decorative images: empty <code className="px-1" data-o9ds-inline-code>alt</code>.</p>
        <CodeBlock
          code={`<img src="/charts/q4-growth.png" alt="Quarterly revenue increased steadily from Q1 to Q4." />
<img src="/decorative-divider.svg" alt="" />`}
          label="Meaningful vs decorative"
        />
        <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mt-4">
          Decorative icons inside buttons: <code className="px-1" data-o9ds-inline-code>aria-hidden=&quot;true&quot;</code> on the SVG when visible text provides the name; icon-only buttons need <code className="px-1" data-o9ds-inline-code>aria-label</code>.
        </p>
      </section>

      <section id="a11y-vis-dataviz" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Data visualization</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
          Charts must not rely on color alone—use labels, patterns, markers, legends with clear text, and table or text summaries when needed. A short text summary (what changed, highs, lows, exceptions) helps everyone.
        </p>
      </section>

      <section id="a11y-vis-theme" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Theme considerations</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
          Validate contrast in light mode, dark mode, and high-contrast contexts where applicable. Do not assume a token is accessible on every background combination.
        </p>
      </section>
    </AccessibilityDocPage>
  )
}
