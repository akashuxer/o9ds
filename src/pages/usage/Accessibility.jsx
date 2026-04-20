import PageHeader from '../../LayoutComponents/PageHeader'
import PageWithToc from '../../LayoutComponents/PageWithToc'
import CodeBlock from '../../LayoutComponents/CodeBlock'
import DocSection, { DocCallout, DocCode, DocList, DocParagraph, DocStrong } from '../../LayoutComponents/DocSection'

const sections = [
  { id: 'guarantees', label: 'What components guarantee' },
  { id: 'consumer-provides', label: 'What you must provide' },
  { id: 'donts', label: "Don'ts" },
  { id: 'composition', label: 'Composition rules' },
  { id: 'testing', label: 'Testing accessibility' },
  { id: 'high-contrast', label: 'High-contrast & forced-colors' },
  { id: 'tldr', label: 'TL;DR' },
]

const LABEL_ROWS = [
  ['Textbox, Textarea, NumberInput, Search, Select, Combobox', 'label prop (renders a <label>) OR aria-label / aria-labelledby'],
  ['Checkbox, Radio, Switch', 'label prop OR wrapped in a CheckboxGroup/RadioGroup with a group label'],
  ['CheckboxGroup, RadioGroup', 'label prop'],
  ['Listbox', 'label prop or aria-label'],
  ['IconButton, FabButton, IconButtonLink', 'label prop (renders aria-label) — MANDATORY'],
  ['Button, ButtonLink, Link', 'label prop (the visible text)'],
  ['Tooltip', 'the trigger element supplies the accessible name; tooltip is supplemental'],
  ['BadgeAlert', 'content text serves as the label'],
  ['Toast', 'title plus description; live-region announces both'],
  ['Dialog / overlay', 'title (or aria-labelledby to the title element)'],
]

export default function UsageAccessibility() {
  return (
    <PageWithToc sections={sections}>
      <div className="space-y-12">
        <PageHeader
          title="Accessibility contract"
          description="@o9ds/* components ship in an accessible state by default — correct roles, ARIA, focus management, and keyboard support. That guarantee depends on consumers preserving the contract."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
        />

        <DocCallout title="Rule">
          Use components in the accessible pattern they were built for. Provide required labels and descriptions. Don't strip <DocCode>aria-*</DocCode>, <DocCode>role</DocCode>, focus styles, or focus management; don't recreate accessibility behavior the component already provides.
        </DocCallout>

        <DocSection id="guarantees" title="What the components guarantee">
          <DocParagraph>When used as documented, every <DocCode>O9*</DocCode> component guarantees:</DocParagraph>
          <DocList items={[
            'Correct semantic role (button, checkbox, combobox, dialog, listbox, menu, tab, …).',
            <span key="2">Required ARIA wiring for its widget pattern (e.g., <DocCode>aria-haspopup</DocCode>, <DocCode>aria-expanded</DocCode>, <DocCode>aria-controls</DocCode>, <DocCode>aria-activedescendant</DocCode>, <DocCode>aria-selected</DocCode>, <DocCode>aria-checked</DocCode>).</span>,
            'Keyboard support per the WAI-ARIA Authoring Practices for that pattern.',
            'Visible focus styles on every interactive element.',
            'Focus management for overlay components (focus trap inside open dialogs/popovers, focus return on close).',
            'Live region announcements where applicable (toasts, inline alerts, error messages).',
            <span key="7"><DocCode>aria-busy="true"</DocCode> while in a loading state.</span>,
            <span key="8"><DocCode>disabled</DocCode> / <DocCode>aria-disabled</DocCode> semantics on disabled controls.</span>,
          ]} />
          <DocParagraph>The component-specific keyboard map and ARIA table are documented on each component's docs page.</DocParagraph>
        </DocSection>

        <DocSection id="consumer-provides" title="What you must provide">
          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Labels</h3>
          <DocParagraph>Every form input and every icon-only control needs an accessible name.</DocParagraph>
          <div className="border overflow-hidden dark:border-neutral-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="dark:bg-neutral-800/50">
                  <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Component family</th>
                  <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Required label source</th>
                </tr>
              </thead>
              <tbody>
                {LABEL_ROWS.map(([family, source]) => (
                  <tr key={family} className="border-t dark:border-neutral-700">
                    <td className="py-2 px-3 text-o9ds-light-primary dark:text-white">{family}</td>
                    <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <DocParagraph>Don't use placeholder text as a label substitute. Placeholders disappear on input and are not announced as labels.</DocParagraph>

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Descriptions and help text</h3>
          <DocParagraph>
            Use the <DocCode>description</DocCode> / <DocCode>helpText</DocCode> / <DocCode>error</DocCode> props (per component) for supplemental content. The component wires <DocCode>aria-describedby</DocCode> correctly. Don't roll your own <DocCode>{`<p>`}</DocCode> linked manually unless the component has no description prop.
          </DocParagraph>

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Required and invalid states</h3>
          <DocList items={[
            <span key="1"><DocCode>isRequired</DocCode> — adds <DocCode>aria-required="true"</DocCode>. Show your visible required indicator via the prop, not by appending <DocCode>*</DocCode> to the label string.</span>,
            <span key="2"><DocCode>hasError</DocCode> / <DocCode>setError(msg)</DocCode> — renders the error message and sets <DocCode>aria-invalid="true"</DocCode> plus <DocCode>aria-describedby</DocCode> to the message.</span>,
          ]} />
        </DocSection>

        <DocSection id="donts" title="Don'ts">
          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Don't strip labels or roles</h3>
          <CodeBlock
            language="tsx"
            label="Forbidden"
            code={`// FORBIDDEN — icon button with no accessible name.
<O9IconButton icon="trash" />              // missing label

// FORBIDDEN — overriding the component's role.
<O9Combobox role="textbox" />              // breaks the combobox pattern`}
          />

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Don't kill the focus ring</h3>
          <CodeBlock
            language="scss"
            label="Forbidden"
            code={`/* FORBIDDEN. */
.o9ds-btn { outline: none !important; }
*:focus { outline: 0; }`}
          />
          <DocParagraph>
            If the focus ring overlaps an adjacent element in a dense layout, use the documented <DocCode>.focus-border</DocCode> utility (already applied automatically by <DocCode>O9ButtonGroup</DocCode>), which inverts the offset to <DocCode>-1px</DocCode>. Don't remove it.
          </DocParagraph>

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Don't re-implement keyboard behavior</h3>
          <DocParagraph>
            The component already implements the WAI-ARIA pattern. Adding your own keydown handler interferes with it. If you need additional shortcuts, add them at a higher container scope and ensure they don't conflict.
          </DocParagraph>

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Don't break focus trap and return</h3>
          <DocList items={[
            'Don\'t portal the overlay yourself (use the component, don\'t bypass it).',
            <span key="2">Don't programmatically <DocCode>el.focus()</DocCode> something else while the overlay is open.</span>,
            <span key="3">Don't close the overlay by removing it from the DOM (always call <DocCode>close()</DocCode> / <DocCode>onOpenChange(false)</DocCode>).</span>,
          ]} />

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Don't mix multiple labelling sources</h3>
          <DocParagraph>
            Pick one of <DocCode>label</DocCode>, <DocCode>aria-label</DocCode>, or <DocCode>aria-labelledby</DocCode>. Setting more than one creates conflicting accessible names; screen readers may pick the worse one.
          </DocParagraph>

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Don't change the rendered tag</h3>
          <DocParagraph>
            The library does not support tag swapping (<DocCode>{`<O9Button as="div" />`}</DocCode> / <DocCode>{`<O9Link as="span" />`}</DocCode>). The chosen element type is part of the accessibility contract — a <DocCode>Button</DocCode> is a <DocCode>{`<button>`}</DocCode> because that gives keyboard activation and form participation for free.
          </DocParagraph>
        </DocSection>

        <DocSection id="composition" title="Composition rules">
          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Disclosures (button + popover/menu/dialog)</h3>
          <DocParagraph>
            Use the dedicated component (<DocCode>O9DropdownButton</DocCode>, <DocCode>O9DropdownIconButton</DocCode>, <DocCode>O9ActionMenu</DocCode>, <DocCode>O9HybridPopover</DocCode>, …) rather than wiring <DocCode>O9Button</DocCode> to <DocCode>O9Popover</DocCode> manually. The dedicated component sets <DocCode>aria-haspopup</DocCode>, <DocCode>aria-expanded</DocCode>, <DocCode>aria-controls</DocCode>, and focus return for you.
          </DocParagraph>
          <CodeBlock
            language="tsx"
            label="Manual composition (only when necessary)"
            code={`<O9Button
  aria-haspopup="dialog"
  aria-expanded={isOpen}
  aria-controls={popId}
  onClick={() => setOpen(o => !o)}
/>
<O9Popover id={popId} isOpen={isOpen} onOpenChange={setOpen} ... />`}
          />

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Tooltips</h3>
          <CodeBlock
            language="tsx"
            label="Icon button still needs label — tooltip is supplemental"
            code={`<O9Tooltip label="Delete">
  <O9IconButton icon="trash" label="Delete row" />
</O9Tooltip>`}
          />

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Radio / Checkbox groups</h3>
          <DocParagraph>
            Always use <DocCode>O9RadioGroup</DocCode> / <DocCode>O9CheckboxGroup</DocCode> to wrap individual radios/checkboxes that share a question. The group provides the legend-equivalent and arrow-key roving focus that single inputs cannot.
          </DocParagraph>

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Loading state</h3>
          <DocParagraph>
            <DocCode>isLoading</DocCode> automatically sets <DocCode>aria-busy="true"</DocCode> on the element. Don't add it yourself; don't override it. While loading, the component suppresses interaction at the API level, so callbacks won't fire.
          </DocParagraph>

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Modal vs non-modal overlays</h3>
          <DocParagraph>
            Popover / HybridPopover / ActionMenu include a <DocCode>modal</DocCode> mode. Use modal when the underlying page should be inert; use non-modal for casual disclosures. Don't simulate modality by manually adding an overlay backdrop.
          </DocParagraph>

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Reduced motion</h3>
          <DocParagraph>
            <DocCode>@o9ds/styles/base</DocCode> respects <DocCode>prefers-reduced-motion</DocCode>. Don't add motion to your wrappers without the same guard.
          </DocParagraph>
          <CodeBlock
            language="scss"
            code={`@media (prefers-reduced-motion: no-preference) {
  .my-card { transition: transform var(--o9ds-duration-fast) var(--o9ds-easing-standard); }
}`}
          />
        </DocSection>

        <DocSection id="testing" title="Testing accessibility">
          <DocList items={[
            <span key="1">Use <DocStrong>role + name</DocStrong> queries in tests (<DocCode>{`getByRole('button', { name: 'Save' })`}</DocCode>). They are the same queries assistive tech uses.</span>,
            <span key="2">Run automated checks (<DocCode>@axe-core/react</DocCode>, <DocCode>vitest-axe</DocCode>, Storybook a11y addon) on every change.</span>,
            'Manually keyboard-test new flows. Tab through; confirm focus order, focus-visible ring, and focus return after overlays close.',
            'Use a real screen reader (NVDA, VoiceOver, JAWS) for new patterns — automation cannot detect every regression.',
          ]} />
        </DocSection>

        <DocSection id="high-contrast" title="High-contrast and forced-colors">
          <DocList items={[
            "Don't paint backgrounds and borders with the same color value — both will be replaced under Windows High Contrast and the result will lose visual structure.",
            "Don't rely on color alone to convey state (use icons + text alongside color).",
            'Test in Forced Colors mode at least once per release.',
          ]} />
        </DocSection>

        <DocSection id="tldr" title="TL;DR">
          <DocList items={[
            <span key="1">Provide <DocCode>label</DocCode> (or <DocCode>aria-label</DocCode> for icon-only) on every interactive component.</span>,
            <span key="2">Never override <DocCode>role</DocCode>, <DocCode>aria-*</DocCode>, focus management, or keyboard handlers.</span>,
            'Compose disclosures via the dedicated dropdown/menu/popover components.',
            'Test with role/name queries and an automated a11y scanner.',
            <span key="5">Respect <DocCode>prefers-reduced-motion</DocCode> and forced-colors.</span>,
          ]} />
        </DocSection>
      </div>
    </PageWithToc>
  )
}
