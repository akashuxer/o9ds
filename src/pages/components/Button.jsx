import { useState, useMemo } from 'react'
import { useTheme } from '../../context/ThemeContext'
import CodeBlock from '../../LayoutComponents/CodeBlock'
import DocTabs from '../../LayoutComponents/DocTabs'
import PageWithToc from '../../LayoutComponents/PageWithToc'
import DocTable from '../../LayoutComponents/DocTable'
import GrayBgCard from '../../LayoutComponents/GrayBgCard'
import WhiteBgCard from '../../LayoutComponents/WhiteBgCard'
import { SPACING_TOKENS } from '../../tokens/spacingTokens'

const buttonTabs = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const VARIANTS = [
  { name: 'Primary', desc: 'Main call-to-action; use sparingly (one per viewport region)' },
  { name: 'Secondary', desc: 'Supporting actions that are important but not primary' },
  { name: 'Tertiary', desc: 'Low-emphasis actions, dense toolbars or inline contexts' },
  { name: 'Outline', desc: 'Actions needing brand-color emphasis without filled background' },
  { name: 'Danger', desc: 'Destructive actions (delete, remove); always pair with confirmation' },
]

const PROPS = [
  { prop: 'label', type: 'string', default: '—', required: 'Yes', desc: 'Button text content' },
  { prop: 'variant', type: "'primary' | 'secondary' | 'tertiary' | 'outline' | 'danger'", default: "'primary'", required: 'No', desc: 'Visual style variant' },
  { prop: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", required: 'No', desc: 'Button size (height, padding, font, icon)' },
  { prop: 'type', type: "'button' | 'submit' | 'reset'", default: "'button'", required: 'No', desc: 'Native HTML button type' },
  { prop: 'icon', type: 'string', default: 'undefined', required: 'No', desc: 'Leading icon name without o9con- prefix' },
  { prop: 'disabled', type: 'boolean', default: 'false', required: 'No', desc: 'Prevents all interaction' },
  { prop: 'selected', type: 'boolean', default: 'undefined', required: 'No', desc: 'Persistent active/selected state for toggle buttons' },
  { prop: 'fullWidth', type: 'boolean', default: 'false', required: 'No', desc: 'Expands button to fill container width' },
  { prop: 'loading', type: 'boolean', default: 'false', required: 'No', desc: 'Shows skeleton shimmer overlay; prevents interaction' },
  { prop: 'tooltip', type: 'string', default: 'undefined', required: 'No', desc: 'Supplementary text via title attribute' },
  { prop: 'onClick', type: '(event) => void', default: 'undefined', required: 'No', desc: 'Click handler; suppressed when disabled or loading' },
]

const SIZES = [
  { size: 'sm', height: '24px', font: '12px', icon: '16px', padding: '4px 8px' },
  { size: 'md', height: '32px', font: '14px', icon: '20px', padding: '6px 12px' },
  { size: 'lg', height: '40px', font: '16px', icon: '24px', padding: '10px 12px' },
]

const ARIA_ATTRS = [
  { attr: 'aria-label', when: 'Icon-only buttons; optional when visible label is sufficient' },
  { attr: 'aria-disabled', when: 'Only when the button must stay focusable while logically disabled' },
  { attr: 'aria-pressed', when: 'Toggle buttons (selected prop)' },
  { attr: 'aria-expanded', when: 'Button opens/closes content (menus, disclosures)' },
  { attr: 'aria-haspopup', when: 'Opens menu, listbox, or dialog' },
  { attr: 'aria-busy', when: 'Loading state (set automatically when loading)' },
  { attr: 'aria-describedby', when: 'Links to helper text, shortcut hint, or disabled reason' },
]

const BUTTON_SPACING_TOKENS = SPACING_TOKENS.filter((t) => ['o9ds-space-4', 'o9ds-space-6', 'o9ds-space-8', 'o9ds-space-10', 'o9ds-space-12'].includes(t.token))

export default function Button() {
  const [activeTab, setActiveTab] = useState('Overview')
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const onThisPageSections = useMemo(() => {
    if (activeTab === 'Overview') {
      return [
        { id: 'overview-purpose', label: 'Purpose' },
        { id: 'overview-definition', label: 'Definition & role' },
        { id: 'overview-anatomy', label: 'Anatomy' },
        { id: 'overview-variants', label: 'Variants' },
        { id: 'overview-states', label: 'States' },
        { id: 'overview-naming', label: 'Naming' },
        { id: 'overview-dos-donts', label: 'Dos & don’ts' },
      ]
    }
    if (activeTab === 'Usage') {
      return [
        { id: 'usage-when', label: 'When to use' },
        { id: 'usage-when-not', label: 'When not to use' },
        { id: 'usage-scenarios', label: 'Scenarios' },
        { id: 'usage-best-practices', label: 'Best practices' },
        { id: 'usage-layout', label: 'Layout & grouping' },
      ]
    }
    if (activeTab === 'Code/APIs') {
      return [
        { id: 'code-props', label: 'Props' },
        { id: 'code-scenarios', label: 'Implementation scenarios' },
        { id: 'code-tokens', label: 'Tokens & mapping' },
        { id: 'code-css', label: 'CSS variables' },
        { id: 'code-size', label: 'Size & spacing' },
        { id: 'code-o9ds-styling', label: 'o9ds focus & hover' },
      ]
    }
    if (activeTab === 'Accessibility') {
      return [
        { id: 'a11y-intro', label: 'Overview' },
        { id: 'a11y-keyboard', label: 'Keyboard' },
        { id: 'a11y-screen-readers', label: 'Screen readers' },
        { id: 'a11y-aria', label: 'ARIA' },
        { id: 'a11y-states', label: 'States & announcements' },
        { id: 'a11y-focus', label: 'Focus' },
        { id: 'a11y-rules', label: 'Rules & WCAG' },
        { id: 'a11y-checklist', label: 'Checklist' },
      ]
    }
    return []
  }, [activeTab])

  const variantPreview = (name) => ({
    ...(name === 'Primary' && { backgroundColor: isLight ? '#010101' : '#fff', color: isLight ? '#fff' : '#000', borderColor: 'transparent' }),
    ...(name === 'Secondary' && { backgroundColor: isLight ? '#F2F2F2' : '#404040', color: isLight ? '#010101' : '#fff', borderColor: 'transparent' }),
    ...(name === 'Tertiary' && { backgroundColor: 'transparent', color: isLight ? '#010101' : '#fff', borderColor: 'transparent' }),
    ...(name === 'Outline' && { backgroundColor: 'transparent', borderColor: isLight ? '#010101' : '#fff', color: isLight ? '#010101' : '#fff' }),
    ...(name === 'Danger' && { backgroundColor: '#ff1e39', color: '#fff', borderColor: 'transparent' }),
  })

  return (
    <PageWithToc sections={onThisPageSections}>
      <div className="max-w-4xl space-y-8">
        <section>
          <h1 className="group flex items-center gap-2 text-[30px] font-bold text-o9ds-light-primary dark:text-white mb-4">
            <span className="flex h-8 w-8 items-center justify-center bg-o9ds-light-surface dark:bg-neutral-700" data-o9ds-avatar data-o9ds-avatar-header>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </span>
            Button
          </h1>
          <p className="text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed">
            The primary control for triggering actions in the o9 platform. Use this page to understand the component conceptually, when to use it, how to implement it, and how to keep it accessible.
          </p>

          <DocTabs tabs={buttonTabs} activeTab={activeTab} onSelect={setActiveTab} />
        </section>

        {/* — TAB 1: Overview (conceptual only; no code) — */}
        {activeTab === 'Overview' && (
          <div className="space-y-12">
            <section id="overview-purpose" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Purpose</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The Button gives users a clear, consistent way to confirm choices, submit data, or move a workflow forward. It is the default action control for tasks that should be explicit and reversible (where destructive work is paired with confirmation).
              </p>
            </section>

            <section id="overview-definition" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Definition & role</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                A <strong className="text-o9ds-light-primary dark:text-white font-medium">text button</strong> is a labeled control that performs an action on a single activation. It is not for navigation to another page (use a link in that case); it is for doing something in context—save, apply, cancel, delete, or open a related UI.
              </p>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                In the product UI system, buttons establish visual hierarchy (primary vs secondary), density (toolbar vs form), and state (loading, disabled, toggled). They align with platform tokens so spacing and type stay consistent across modules.
              </p>
            </section>

            <section id="overview-anatomy" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Visual anatomy</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Label</strong> — short verb or verb + object (e.g. Save changes, Apply filters).</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Optional leading icon</strong> — reinforces meaning without replacing the label.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Surface</strong> — container sized by variant and size token; loading state uses a shimmer overlay across the surface.</li>
              </ul>
            </section>

            <section id="overview-variants" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Variants</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed mb-4">
                Five variants communicate importance and risk. Use one primary action per region; secondary and tertiary actions support the task without competing.
              </p>
              <ul className="space-y-0.5 text-[10px] font-semibold uppercase tracking-wider text-o9ds-light-secondary dark:text-neutral-500 mb-2">Reference</ul>
              <ul className="space-y-3 text-o9ds-light-secondary dark:text-neutral-400 mb-6">
                {VARIANTS.map(({ name, desc }) => (
                  <li key={name}>
                    <strong className="text-o9ds-light-primary dark:text-white">{name}</strong> — {desc}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                {['Primary', 'Secondary', 'Tertiary', 'Outline', 'Danger'].map((name) => (
                  <button
                    key={name}
                    type="button"
                    className="px-4 py-2.5 text-sm font-medium border transition-colors"
                    style={variantPreview(name)}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </section>

            <section id="overview-states" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">States</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Default</strong> — ready to activate.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Hover</strong> — confirms interactivity (desktop); touch uses separate affordance).</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Focus</strong> — visible focus ring for keyboard users.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Active / pressed</strong> — optional for toggle-style actions.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Disabled</strong> — not actionable; must be explainable in context.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Loading</strong> — action in progress; blocks repeat activation.</li>
              </ul>
            </section>

            <section id="overview-naming" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Naming guidance</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Use specific, outcome-oriented labels. Prefer “Save changes” over “Save” when multiple saves exist; prefer “Delete row” over “Delete” in dense tables.
              </p>
            </section>

            <section id="overview-dos-donts" className="scroll-mt-24">
              <div className="grid gap-4 sm:grid-cols-2">
                <GrayBgCard title="Do" bullets={['Use one primary action per viewport or modal', 'Pair destructive actions with confirmation', 'Match label to the outcome users expect', 'Reserve loading for real async work']} />
                <WhiteBgCard title="Don’t" bullets={['Style plain text as a link if the control performs an action', 'Stack multiple primary buttons in one row', 'Use vague labels (“OK”, “Submit”) without context', 'Enable loading without blocking duplicate submits']} />
              </div>
            </section>
          </div>
        )}

        {/* — TAB 2: Usage (decisions & scenarios; no code) — */}
        {activeTab === 'Usage' && (
          <div className="space-y-12">
            <section id="usage-when" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Confirming or saving a user decision in a form, dialog, or panel.</li>
                <li>Running a single primary action (e.g. export, run planning) where the action is clear from the label.</li>
                <li>Choosing between a small set of actions in a footer or toolbar (e.g. Cancel vs Save).</li>
                <li>Triggering destructive work when paired with a confirmation step.</li>
                <li>Showing a busy state while the system completes a request.</li>
              </ul>
            </section>

            <section id="usage-when-not" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When not to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Navigating to another destination—use a <strong className="text-o9ds-light-primary dark:text-white font-medium">link</strong> so users get a URL and predictable browser behavior.</li>
                <li>Picking among many options—use <strong className="text-o9ds-light-primary dark:text-white font-medium">select</strong>, menu, or list patterns.</li>
                <li>Binary settings that should read as on/off—consider a <strong className="text-o9ds-light-primary dark:text-white font-medium">switch</strong> or checkbox with clear semantics.</li>
                <li>Icon-only affordances in dense tools—use an <strong className="text-o9ds-light-primary dark:text-white font-medium">icon button</strong> with an accessible name.</li>
              </ul>
            </section>

            <section id="usage-scenarios" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Scenarios</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Form footer</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Place secondary (Cancel) to the left, primary (Save) on the right in LTR locales. One primary action per footer.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Toolbar</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Use tertiary or outline for frequent actions; keep primary for the single most important workflow step in the view.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Destructive</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Use the danger variant; never rely on color alone—add confirmation copy or a confirmation dialog.
                  </p>
                </div>
              </div>
            </section>

            <section id="usage-best-practices" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Best practices</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Align primary vs secondary: one clear “forward” action per screen region.</li>
                <li>Use full width on mobile for primary flows when space is constrained.</li>
                <li>Group related actions; separate unrelated actions with spacing or alignment.</li>
                <li>If a button is disabled, explain why nearby or in the pattern—never rely on a dimmed state alone.</li>
              </ul>
            </section>

            <section id="usage-layout" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Layout & grouping</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Spacing</strong> — use system spacing between adjacent buttons so they read as separate targets.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Alignment</strong> — align footers to a grid; avoid orphan buttons.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Multiple buttons</strong> — pair Cancel + Save; avoid three or more competing actions in one row.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Inline vs block</strong> — inline for toolbars and inline edits; full width for primary CTAs in narrow layouts.</li>
              </ul>
            </section>
          </div>
        )}

        {/* — TAB 3: Code/APIs — */}
        {activeTab === 'Code/APIs' && (
          <div className="space-y-12">
            <section id="code-props" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Component API</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
                O9Button accepts standard <code className="px-1 py-0.5" data-o9ds-inline-code>HTMLButtonElement</code> attributes via spread (including focus and keyboard handlers).
              </p>
              <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Prop</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Type</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Default</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Required</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PROPS.map((row) => (
                      <tr key={row.prop} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{row.prop}</td>
                        <td className="py-2 px-3 font-mono text-o9ds-light-secondary dark:text-neutral-400">{row.type}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.default}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.required}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="code-scenarios" className="scroll-mt-24 space-y-10">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Implementation scenarios</h2>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Basic — React</h3>
                <CodeBlock
                  code={`import { O9Button } from '@o9ds/react';

<O9Button label="Save Changes" variant="primary" />
<O9Button label="Add Item" variant="primary" icon="add" />`}
                  label="React"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Basic — HTML</h3>
                <CodeBlock
                  code={`<button class="o9ds-btn o9ds-btn--primary o9ds-btn--md" type="button">
  <span class="o9ds-btn__lbl">Save Changes</span>
</button>`}
                  label="HTML"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Disabled</h3>
                <CodeBlock
                  code={`<O9Button label="Submit" variant="primary" disabled />

<button class="o9ds-btn o9ds-btn--primary o9ds-btn--md" type="button" disabled>
  <span class="o9ds-btn__lbl">Unavailable</span>
</button>`}
                  label="Disabled"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Loading & async</h3>
                <CodeBlock
                  code={`const [loading, setLoading] = React.useState(false);

const handleSave = async () => {
  setLoading(true);
  await saveData();
  setLoading(false);
};

<O9Button label="Save" loading={loading} onClick={handleSave} />`}
                  label="React async + loading"
                />
                <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                  A parent with <code className="px-1 py-0.5" data-o9ds-inline-code>data-loading="true"</code> can force loading on children; use <code className="px-1 py-0.5" data-o9ds-inline-code>data-loading-ignore="true"</code> on a button to opt out.
                </p>
                <CodeBlock
                  code={`<!-- HTML loading -->
<button class="o9ds-btn o9ds-btn--primary o9ds-btn--md loading" type="button" aria-busy="true">
  <span class="o9ds-btn__lbl">Saving...</span>
</button>`}
                  label="HTML loading"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Dynamic labels & toggle</h3>
                <CodeBlock
                  code={`<O9Button label="Bold" variant="secondary" selected aria-pressed="true" />

<button class="o9ds-btn o9ds-btn--secondary o9ds-btn--md active" type="button" aria-pressed="true">
  <span class="o9ds-btn__lbl">Bold</span>
</button>`}
                  label="Toggle / selected"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Layout — full width</h3>
                <CodeBlock
                  code={`<O9Button label="Continue" variant="primary" fullWidth />`}
                  label="Full width"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Accessibility wiring</h3>
                <CodeBlock
                  code={`<button type="button" aria-describedby="save-shortcut">
  Save
</button>
<div id="save-shortcut" class="visually-hidden">Shortcut: Control + S</div>`}
                  label="aria-describedby (shortcut)"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Event handling</h3>
                <CodeBlock
                  code={`function onClick(e: React.MouseEvent<HTMLButtonElement>) {
  e.preventDefault();
  if (submitting) return;
  void submit();
}`}
                  label="Guard duplicate actions"
                />
              </div>
            </section>

            <section id="code-tokens" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Tokens & mapping</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                Variants map to CSS custom properties on <code className="px-1 py-0.5" data-o9ds-inline-code>.o9ds-btn</code>; sizes map height, font, padding, and icon size. Spacing uses <code className="px-1 py-0.5" data-o9ds-inline-code>--o9ds-space-*</code> for padding.
              </p>
              <DocTable
                columns={[
                  { key: 'map', label: 'Mapping' },
                  { key: 'detail', label: 'Notes' },
                ]}
                rows={[
                  { map: 'variant → BEM modifier', detail: 'o9ds-btn--primary | secondary | tertiary | outline | danger' },
                  { map: 'size → BEM modifier', detail: 'o9ds-btn--sm | md | lg' },
                  { map: 'loading → class + aria-busy', detail: '.loading + aria-busy="true"' },
                  { map: 'selected → pressed', detail: '.active + aria-pressed for toggles' },
                ]}
              />
            </section>

            <section id="code-css" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">CSS variables</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                Override on <code className="px-1 py-0.5" data-o9ds-inline-code>.o9ds-btn</code> or a parent to theme the button.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { cat: 'Layout', vars: ['--o9ds-btn-height', '--o9ds-btn-padding-block', '--o9ds-btn-padding-inline', '--o9ds-btn-gap'] },
                  { cat: 'Typography', vars: ['--o9ds-btn-font-size', '--o9ds-btn-font-weight', '--o9ds-btn-line-height'] },
                  { cat: 'Icon', vars: ['--o9ds-btn-icon-size'] },
                  { cat: 'Color', vars: ['--o9ds-btn-bg-color', '--o9ds-btn-text-color', '--o9ds-btn-icon-color', '--o9ds-btn-border-color'] },
                  { cat: 'Border', vars: ['--o9ds-btn-border-width'] },
                ].map(({ cat, vars }) => (
                  <div key={cat} className="border p-4 dark:border-neutral-700" style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#FAFAFA' } : undefined}>
                    <h3 className="text-sm font-semibold text-o9ds-light-primary dark:text-white mb-2">{cat}</h3>
                    <ul className="space-y-1 text-sm font-mono text-o9ds-light-secondary dark:text-neutral-400">
                      {vars.map((v) => (
                        <li key={v}>{v}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section id="code-size" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Size reference</h2>
              <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Size</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Height</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Font</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Icon</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Padding</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SIZES.map((row) => (
                      <tr key={row.size} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{row.size}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.height}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.font}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.icon}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.padding}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white mt-8 mb-2">Spacing tokens</h3>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                Button padding uses these spacing tokens. Use <code className="px-1 py-0.5" data-o9ds-inline-code>var(--o9ds-space-*)</code> for consistency.
              </p>
              <DocTable tokens={BUTTON_SPACING_TOKENS} showCopy={false} />
            </section>

            <section id="code-o9ds-styling" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">o9ds focus & hover</h2>
              <ul className="space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>Focus ring uses <code className="px-1 py-0.5" data-o9ds-inline-code>outline</code> with offset; global <code className="px-1 py-0.5" data-o9ds-inline-code>:focus-visible</code> applies.</li>
                <li><code className="px-1 py-0.5" data-o9ds-inline-code>.focus-border</code> tightens outline offset in tight groups (toolbars, table cells).</li>
                <li><code className="px-1 py-0.5" data-o9ds-inline-code>.no-touch</code> scopes hover so touch devices avoid sticky hover.</li>
              </ul>
            </section>
          </div>
        )}

        {/* — TAB 4: Accessibility — */}
        {activeTab === 'Accessibility' && (
          <section id="button-accessibility" className="space-y-12">
            <div id="a11y-intro" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Button accessibility</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                A text button must be operable with keyboard and assistive technologies. Prefer native <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;button&gt;</code> via <strong className="text-o9ds-light-primary dark:text-white font-medium">O9Button</strong> or documented markup so semantics and activation behavior are inherited.
              </p>
            </div>

            <div id="a11y-keyboard" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Keyboard interaction</h3>
              <DocTable
                columns={[
                  { key: 'key', label: 'Key', mono: true },
                  { key: 'behavior', label: 'Behavior' },
                ]}
                rows={[
                  { key: 'Tab', behavior: 'Moves focus to the button' },
                  { key: 'Shift + Tab', behavior: 'Moves focus backward' },
                  { key: 'Enter', behavior: 'Activates the button' },
                  { key: 'Space', behavior: 'Activates the button' },
                ]}
              />
              <ul className="list-disc pl-5 space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>Reachable via keyboard; one activation per key press; no focus trap.</li>
              </ul>
            </div>

            <div id="a11y-screen-readers" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Screen reader behavior</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                Typical pattern: <code className="px-1 py-0.5" data-o9ds-inline-code>[Accessible Name], button</code>
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>Disabled: e.g. “button, dimmed” or “unavailable” (varies by AT).</li>
                <li>Toggle: expose <code className="px-1 py-0.5" data-o9ds-inline-code>aria-pressed</code>.</li>
                <li>Loading: expose busy (e.g. <code className="px-1 py-0.5" data-o9ds-inline-code>aria-busy=&quot;true&quot;</code>).</li>
              </ul>
            </div>

            <div id="a11y-aria" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">ARIA (when needed)</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 mb-4">
                Do not add ARIA that duplicates native semantics. Use attributes below only when the scenario requires it.
              </p>
              <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Attribute</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">When to use</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ARIA_ATTRS.map(({ attr, when }) => (
                      <tr key={attr} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{attr}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{when}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div id="a11y-states" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">States & announcements</h3>
              <DocTable
                columns={[
                  { key: 'scenario', label: 'Scenario' },
                  { key: 'announcement', label: 'Typical announcement' },
                ]}
                rows={[
                  { scenario: 'Default', announcement: 'Apply, button' },
                  { scenario: 'Disabled', announcement: 'Checkout, button, dimmed' },
                  { scenario: 'With count', announcement: 'View cart 3 items, button' },
                  { scenario: 'Shortcut', announcement: 'Save, button; description: Shortcut Control S' },
                ]}
              />
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                For dynamic labels, update the accessible name when counts or eligibility change. When disabled, explain why if it is not obvious (helper text or <code className="px-1 py-0.5" data-o9ds-inline-code>aria-describedby</code>). Use live regions sparingly for meaningful status changes only.
              </p>
            </div>

            <div id="a11y-focus" className="scroll-mt-24 space-y-3">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Focus behavior</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Visible focus indicator; prefer <code className="px-1 py-0.5" data-o9ds-inline-code>:focus-visible</code> for keyboard users.</li>
                <li>Logical tab order; return focus to the trigger after closing overlays when appropriate.</li>
                <li>After inline updates, often keep focus; after navigation, move focus to a meaningful start.</li>
              </ul>
            </div>

            <div id="a11y-rules" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Rules & WCAG</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>Do not replace the visible label with only a shortcut string.</li>
                <li>Expose shortcut hints on hover <strong className="text-o9ds-light-primary dark:text-white font-medium">and</strong> keyboard focus.</li>
                <li>WCAG: <strong className="text-o9ds-light-primary dark:text-white font-normal">2.4.7 Focus Visible</strong>, <strong className="text-o9ds-light-primary dark:text-white font-normal">2.4.13 Focus Appearance</strong>.</li>
              </ul>
            </div>

            <div id="a11y-checklist" className="scroll-mt-24">
              <GrayBgCard
                title="Accessible text button"
                desc="Users can:"
                bullets={[
                  'Find the control and understand its purpose',
                  'Know if it is available and why it is disabled',
                  'Use it with keyboard and see focus',
                  'Understand dynamic updates and meaningful feedback',
                ]}
              />
            </div>

            <div className="p-4 border dark:border-neutral-700" style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#F2F2F2' } : undefined}>
              <h3 className="text-sm font-semibold text-o9ds-light-primary dark:text-white mb-2">Related components</h3>
              <ul className="text-sm text-o9ds-light-secondary dark:text-neutral-400 space-y-1">
                <li><strong className="text-o9ds-light-primary dark:text-white">Icon Button</strong> — icon-only; requires accessible name</li>
                <li><strong className="text-o9ds-light-primary dark:text-white">Dropdown Button</strong> — <code className="px-1 py-0.5" data-o9ds-inline-code>aria-haspopup</code> / <code className="px-1 py-0.5" data-o9ds-inline-code>aria-expanded</code></li>
                <li><strong className="text-o9ds-light-primary dark:text-white">Button Group</strong> — may use <code className="px-1 py-0.5" data-o9ds-inline-code>.focus-border</code></li>
              </ul>
            </div>
          </section>
        )}
      </div>
    </PageWithToc>
  )
}
