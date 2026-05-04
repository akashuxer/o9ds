import { useMemo, useState } from 'react'
import AccessibilityDocPage from './AccessibilityDocPage'
import CodeBlock from '../../LayoutComponents/CodeBlock'
import DocTable from '../../LayoutComponents/DocTable'
import DocTabs from '../../LayoutComponents/DocTabs'
import ExpandableDocImage from '../../LayoutComponents/ExpandableDocImage'

const TABS = ['Overview', 'Labels', 'Live regions', 'Heading & page title']

const tocOverview = [
  { id: 'a11y-sem-tree', label: 'Accessibility Tree' },
  { id: 'a11y-semantic-coding', label: 'Semantic vs non-semantic coding' },
  { id: 'a11y-aria', label: 'ARIA overview' },
  { id: 'a11y-roles', label: 'Roles, states, properties' },
  { id: 'a11y-sr-modes', label: 'Screen reader modes' },
]

const rolePurposeColumns = [
  { key: 'name', label: 'Role', primary: true, mono: true, tone: 'code' },
  { key: 'purpose', label: 'Purpose' },
]
const statePurposeColumns = [
  { key: 'name', label: 'State', primary: true, mono: true, tone: 'code' },
  { key: 'purpose', label: 'Purpose' },
]
const propertyPurposeColumns = [
  { key: 'name', label: 'Property', primary: true, mono: true, tone: 'code' },
  { key: 'purpose', label: 'Purpose' },
]

const commonRoleRows = [
  { name: 'button', purpose: 'Activates a command; supports keyboard activation and an accessible name.' },
  { name: 'link', purpose: 'Navigates to a URL, route, or in-page target; name is usually the link text.' },
  { name: 'textbox', purpose: 'Single- or multi-line text input; paired with a label and optional description.' },
  { name: 'checkbox', purpose: 'Toggles checked/unchecked (or mixed); exposes checked state to assistive technologies.' },
  { name: 'radio', purpose: 'One choice in a set; only one radio in a group is selected.' },
  { name: 'group', purpose: 'Groups related controls; give the set a name with aria-label or aria-labelledby so screen readers announce context for each field.' },
  { name: 'radiogroup', purpose: 'Container for a set of radio buttons; exposes the group’s accessible name and coordinates which option is selected.' },
  { name: 'combobox', purpose: 'Text input combined with a popup list; supports selection and filtering patterns.' },
  { name: 'navigation', purpose: 'Landmark for major navigation blocks (e.g. primary nav, skip clusters of links).' },
  { name: 'main', purpose: 'Landmark for the primary content of the page or view.' },
  { name: 'region', purpose: 'Generic landmark for an important section when it needs a programmatic name.' },
  { name: 'dialog', purpose: 'Modal or non-modal dialog; should trap focus and restore it when closed.' },
  { name: 'tablist', purpose: 'Container for tab elements; manages which tab panel is shown.' },
  { name: 'tab', purpose: 'Selects a tab panel; works with tablist and keyboard arrow patterns.' },
  { name: 'listbox', purpose: 'Selectable list of options; supports multi-select patterns when configured.' },
  { name: 'heading', purpose: 'Section title with an implicit level (h1–h6); used for outline and navigation.' },
  { name: 'img', purpose: 'Image or meaningful graphic; accessible name usually comes from alt text.' },
]

const commonStateRows = [
  { name: 'aria-expanded', purpose: 'Whether the element is expanded (e.g. disclosure, row, menu).' },
  { name: 'aria-selected', purpose: 'Whether the item is selected within a listbox, tab list, grid, or similar.' },
  { name: 'aria-checked', purpose: 'Checked state for checkbox, switch, or tri-state (true/false/mixed).' },
  { name: 'aria-pressed', purpose: 'Pressed state for toggle buttons (pressed vs not pressed).' },
  { name: 'aria-current', purpose: 'Marks the current item in a set (page, step, true, location, date, time).' },
  { name: 'aria-invalid', purpose: 'Indicates the value does not pass validation; pair with an error message.' },
  { name: 'aria-busy', purpose: 'Indicates the element is being updated (e.g. loading content).' },
  { name: 'aria-disabled', purpose: 'Indicates the control is not operable while remaining in the tab order in some patterns.' },
  { name: 'aria-readonly', purpose: 'Value cannot be edited but remains focusable and readable.' },
  { name: 'aria-required', purpose: 'Indicates a value must be supplied before the form can succeed.' },
  { name: 'aria-sort', purpose: 'Indicates sort direction on a column header in a grid or table.' },
  { name: 'aria-hidden', purpose: 'Removes subtree from the accessibility tree when true; use only for truly redundant visuals.' },
]

const commonPropertyRows = [
  { name: 'aria-label', purpose: 'Defines an accessible name when no visible label is appropriate.' },
  { name: 'aria-labelledby', purpose: 'References IDs of elements whose text composes the accessible name.' },
  { name: 'aria-describedby', purpose: 'References IDs of elements that provide extra description (help text, errors).' },
  { name: 'aria-controls', purpose: 'References IDs of regions whose content is controlled by this element.' },
  { name: 'aria-owns', purpose: 'Declares parent/child relationships when DOM order does not match the intended tree.' },
  { name: 'aria-activedescendant', purpose: 'ID of the active descendant when focus stays on a composite container.' },
  { name: 'aria-live', purpose: 'Sets politeness for dynamic updates (off, polite, assertive).' },
  { name: 'aria-atomic', purpose: 'Whether the whole live region is announced when any part changes.' },
  { name: 'aria-relevant', purpose: 'Which changes in a live region trigger announcements (e.g. additions, text).' },
  { name: 'aria-haspopup', purpose: 'Indicates the element opens a menu, listbox, dialog, grid, or tree popup.' },
  { name: 'aria-level', purpose: 'Heading or tree depth level when native level is not available.' },
  { name: 'aria-modal', purpose: 'When true, indicates interaction should stay within the dialog until dismissed.' },
  { name: 'aria-orientation', purpose: 'Horizontal or vertical orientation for sliders, tab lists, toolbars.' },
  { name: 'aria-roledescription', purpose: 'Custom human-readable role description for specialized widgets (use sparingly).' },
  { name: 'aria-details', purpose: 'References an element with extended, collapsible details related to this control.' },
]

const tocLabels = [
  { id: 'a11y-names', label: 'Accessible names' },
  { id: 'a11y-sronly', label: 'Screen-reader-only text' },
  { id: 'a11y-describedby', label: 'aria-describedby' },
  { id: 'a11y-form-date', label: 'Date and time' },
  { id: 'a11y-form-required', label: 'Required fields' },
  { id: 'a11y-form-errors', label: 'Error handling' },
  { id: 'a11y-form-error-clarity', label: 'Clear errors & association' },
  { id: 'a11y-form-disabled', label: 'Disabled states' },
  { id: 'a11y-form-title', label: 'Tooltips vs title' },
  { id: 'a11y-form-ambiguous', label: 'Avoid ambiguous labels' },
  { id: 'a11y-group', label: 'Grouping controls' },
]

const tocLive = [
  { id: 'a11y-live-intro', label: 'Introduction' },
  { id: 'a11y-live-when', label: 'When to use live regions' },
  { id: 'a11y-live-polite', label: 'aria-live polite' },
  { id: 'a11y-live-assertive', label: 'aria-live assertive' },
  { id: 'a11y-live-status', label: 'role status' },
  { id: 'a11y-live-alert', label: 'role alert' },
  { id: 'a11y-live-log', label: 'role log' },
  { id: 'a11y-live-attrs', label: 'atomic & relevant' },
]

const tocHeading = [
  { id: 'a11y-heading-intro', label: 'Maintaining heading hierarchy' },
  { id: 'a11y-headings', label: 'Semantic headings' },
  { id: 'a11y-page-title', label: 'Page titles' },
]

export default function ScreenReaderAndAria() {
  const [activeTab, setActiveTab] = useState('Overview')

  const tocSections = useMemo(() => {
    if (activeTab === 'Labels') return tocLabels
    if (activeTab === 'Live regions') return tocLive
    if (activeTab === 'Heading & page title') return tocHeading
    return tocOverview
  }, [activeTab])

  return (
    <AccessibilityDocPage
      title="Screen reader and ARIA"
      description="How the accessibility tree and ARIA expose meaning to assistive technologies. Use the tabs to move between foundations, labels and forms, live regions, and document headings."
      tocSections={tocSections}
    >
      <DocTabs tabs={TABS} activeTab={activeTab} onSelect={setActiveTab} />

      {activeTab === 'Overview' && (
        <div className="space-y-10 pt-2" role="tabpanel" aria-label="Overview">
          <section id="a11y-sem-tree" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Accessibility Tree</h2>
            <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
              Browsers derive an <strong className="text-arvo-light-primary dark:text-white">accessibility tree</strong> from the DOM together with each element’s exposed accessibility properties. Assistive technologies use that tree—not the visual paint order—to learn names, roles, states, descriptions, focus behavior, and relationships to nearby content.
            </p>
            <h3 className="text-lg font-semibold text-arvo-light-primary dark:text-white">How the DOM and accessibility tree relate</h3>
            <figure className="border border-arvo-light-border dark:border-neutral-700 p-4 md:p-6 bg-arvo-light-surface dark:bg-neutral-900/40">
              <ExpandableDocImage
                src="/o9DocGraphics/AccessibilityGraphic/dom-vs-accessibility-tree-infographic.png"
                alt="Infographic: HTML is parsed into the DOM tree; the browser renders the visual UI and builds a separate accessibility tree with only meaningful, perceivable nodes and relationships—for example navigation, heading, button, and image names—while decorative or non-perceivable nodes may be omitted. Assistive technologies consume the accessibility tree to convey information to users. A comparison shows the DOM includes all elements for layout versus a smaller, semantics-focused tree for assistive tech. Takeaway: the accessibility tree is a filtered, enhanced view of the DOM for accessibility."
                className="w-full max-w-4xl mx-auto h-auto block"
                width={1024}
                height={682}
                loading="lazy"
                decoding="async"
              />
              <figcaption className="mt-4 text-xs text-arvo-light-secondary dark:text-neutral-500 text-center leading-relaxed max-w-3xl mx-auto">
                The accessibility tree is derived from the DOM but optimized for assistive technology: semantics, roles, and relationships—not every DOM node.
              </figcaption>
            </figure>
            <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed text-sm">
              The <strong className="text-arvo-light-primary dark:text-white">DOM</strong> (Document Object Model) is the browser’s structural representation of the document: elements, attributes, and text nodes. The accessibility tree builds on that structure by adding the semantics assistive technologies need—mapping native HTML roles, supplementing with ARIA when used correctly, and omitting or pruning nodes that are not meaningful to users of assistive tech.
            </p>
            <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed text-sm">
              That extra layer is what lets the same page be presented as spoken UI, braille, or other alternative formats: the tree carries the stable “what is this?” and “what is it doing?” data separate from layout and styling.
            </p>
            <h3 className="text-lg font-semibold text-arvo-light-primary dark:text-white">What the tree exposes</h3>
            <figure className="border border-arvo-light-border dark:border-neutral-700 p-4 md:p-6 bg-arvo-light-surface dark:bg-neutral-900/40">
              <ExpandableDocImage
                src="/o9DocGraphics/AccessibilityGraphic/what-the-tree-exposes-infographic.png"
                alt="Infographic comparing DOM tree and accessibility tree for a sample page: HTML includes headings, button, navigation with links, and a table. The browser builds the DOM from that markup, then derives an accessibility tree with only meaningful nodes—roles, names, levels, focusable, expanded, current link, and table structure—while omitting decorative or redundant layout, hidden content, and styling. Sidebar notes: semantics are exposed for assistive technology; redundant structure is excluded."
                className="w-full max-w-4xl mx-auto h-auto block"
                width={1024}
                height={682}
                loading="lazy"
                decoding="async"
              />
              <figcaption className="mt-4 text-xs text-arvo-light-secondary dark:text-neutral-500 text-center leading-relaxed max-w-3xl mx-auto">
                The same page yields a full DOM and a smaller semantic tree: roles, names, states, and structure that assistive technologies consume.
              </figcaption>
            </figure>
            <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed text-sm">
              Alongside roles and names, the platform exposes states, properties, descriptions, and relationships (for example label associations or “controlled by” links). Inspectors and some assistive features may also surface{' '}
              <strong className="text-arvo-light-primary dark:text-white">contrast</strong> or visibility-related signals where the browser makes them available. If this information is missing or wrong, users get the wrong label, state, or context—not just a cosmetic bug.
            </p>
            <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm">Commonly relevant fields include:</p>
            <ul className="list-disc list-inside space-y-2 text-arvo-light-secondary dark:text-neutral-400 text-sm">
              <li>
                <strong className="text-arvo-light-primary dark:text-white">Roles</strong> — what kind of object it is (link, button, text field, region, and so on).
              </li>
              <li>
                <strong className="text-arvo-light-primary dark:text-white">Names</strong> — the accessible name users hear or read for the control.
              </li>
              <li>
                <strong className="text-arvo-light-primary dark:text-white">States</strong> — current conditions such as checked, disabled, or busy.
              </li>
              <li>
                <strong className="text-arvo-light-primary dark:text-white">Properties</strong> — stable or semi-stable attributes such as expanded, haspopup, or level.
              </li>
              <li>
                <strong className="text-arvo-light-primary dark:text-white">Description</strong> — supplementary text (often from <code className="px-1" data-arvo-inline-code>aria-describedby</code> or similar) beyond the primary name.
              </li>
              <li>
                <strong className="text-arvo-light-primary dark:text-white">Contrast</strong> — where exposed, whether text/graphics meet contrast expectations against their background (often emphasized in developer tooling).
              </li>
              <li>
                <strong className="text-arvo-light-primary dark:text-white">Keyboard focusable</strong> — whether the element can receive keyboard focus and participate in focus order.
              </li>
            </ul>
            <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed text-sm">
              Assistive technologies rely on this data being complete and accurate. Insufficient or incorrect entries in the tree lead to missing announcements, wrong actions, or confusing navigation—not problems that CSS alone can fix.
            </p>
          </section>

          <section id="a11y-semantic-coding" className="space-y-6 scroll-mt-24">
            <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Semantic coding vs non-semantic coding</h2>
            <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
              <strong className="text-arvo-light-primary dark:text-white">Semantic</strong> markup uses elements for what they are meant for (for example <code className="px-1" data-arvo-inline-code>button</code> for actions).{' '}
              <strong className="text-arvo-light-primary dark:text-white">Non-semantic</strong> markup (often a <code className="px-1" data-arvo-inline-code>div</code> or <code className="px-1" data-arvo-inline-code>span</code> with click handlers) may look right visually but often lacks roles, keyboard support, and names in the accessibility tree until you add them manually.
            </p>
            <div className="space-y-3">
              <CodeBlock code={`<div onclick="saveChanges()">Save</div>`} label="Non-semantic: div as fake button" />
              <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm">This is visually clickable but not accessible by default.</p>
            </div>
            <div className="space-y-3">
              <CodeBlock code={`<button type="button">Save</button>`} label="Semantic: native button" />
            </div>
          </section>

          <section id="a11y-aria" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">ARIA: what it is</h2>
            <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
              ARIA (Accessible Rich Internet Applications) helps when native HTML is not enough—especially for custom components, dynamic UI, and complex composite widgets.
            </p>
            <blockquote className="border-l-4 border-arvo-light-primary dark:border-neutral-500 pl-4 italic text-arvo-light-secondary dark:text-neutral-300">
              No ARIA is better than bad ARIA.
            </blockquote>
            <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm">Use ARIA to enhance semantics, not to replace correct HTML unnecessarily.</p>
          </section>

          <section id="a11y-roles" className="space-y-8 scroll-mt-24">
            <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Roles, states, and properties</h2>
            <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
              Roles describe what something <em>is</em>; states describe its <em>current condition</em>; properties carry relationships, names, and live-region behavior. Native HTML maps to many roles automatically; ARIA fills gaps for custom widgets.
            </p>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-arvo-light-primary dark:text-white">Roles (common roles)</h3>
              <DocTable columns={rolePurposeColumns} rows={commonRoleRows} />
              <CodeBlock code={`<div role="button" tabindex="0">Open filters</div>`} label="Example: explicit role on a custom control" />
              <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm">
                Prefer a native <code className="px-1" data-arvo-inline-code>button</code> when possible; use explicit roles only when HTML cannot represent the control.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-arvo-light-primary dark:text-white">States (common states)</h3>
              <DocTable columns={statePurposeColumns} rows={commonStateRows} />
              <CodeBlock
                code={`<button type="button" aria-expanded="false" aria-controls="filters-panel">Filters</button>`}
                label="Example: expandable control with state"
              />
              <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm">
                When the panel opens, set <code className="px-1" data-arvo-inline-code>aria-expanded</code> to <code className="px-1" data-arvo-inline-code>true</code>.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-arvo-light-primary dark:text-white">Properties (common properties)</h3>
              <DocTable columns={propertyPurposeColumns} rows={commonPropertyRows} />
              <CodeBlock
                code={`<button type="button" aria-label="Close dialog">
  <span aria-hidden="true">×</span>
</button>`}
                label="Example: aria-label for an icon-only control"
              />
              <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm">
                Use <code className="px-1" data-arvo-inline-code>aria-label</code> when there is no visible text name—often icon-only buttons or a single control in a toolbar—so the accessible name is not left empty.
              </p>
            </div>
          </section>

          <section id="a11y-sr-modes" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Screen reader modes (Browser Mode vs Focus Mode)</h2>
            <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed text-sm">
              Assistive technology has two modes of operation: <strong className="text-arvo-light-primary dark:text-white">browse mode</strong> for navigating and reading the page, and <strong className="text-arvo-light-primary dark:text-white">focus mode</strong> (or forms mode) for interacting with controls such as form fields and buttons. Users can toggle between the two modes using <kbd className="px-1 font-mono text-xs border border-arvo-light-border dark:border-neutral-600 bg-arvo-light-surface dark:bg-neutral-800">Insert</kbd> +{' '}
              <kbd className="px-1 font-mono text-xs border border-arvo-light-border dark:border-neutral-600 bg-arvo-light-surface dark:bg-neutral-800">Space</kbd> on many screen readers (exact shortcuts depend on the product and platform).
            </p>
            <figure className="border border-arvo-light-border dark:border-neutral-700 p-4 md:p-6 bg-arvo-light-surface dark:bg-neutral-900/40">
              <ExpandableDocImage
                src="/o9DocGraphics/AccessibilityGraphic/screen-reader-modes-browser-vs-focus.png"
                alt="Infographic comparing browse mode and focus mode. Browse mode: read the page line by line, use H for next heading and K for next link, best for exploring content. Focus mode: interact with controls; screen reader announces role, state, and properties of the focused element, best for forms and tasks. Toggle with Insert plus Space on many screen readers. Key takeaway: browse to read and explore; focus to operate controls."
                className="w-full max-w-4xl mx-auto h-auto block"
                width={1024}
                height={683}
                loading="lazy"
                decoding="async"
              />
              <figcaption className="mt-4 text-xs text-arvo-light-secondary dark:text-neutral-500 text-center leading-relaxed max-w-3xl mx-auto">
                Use browse mode to read and move through content; use focus mode to type, select options, and activate widgets.
              </figcaption>
            </figure>
          </section>
        </div>
      )}

      {activeTab === 'Labels' && (
        <div className="space-y-10 pt-2" role="tabpanel" aria-label="Labels">
          <section id="a11y-names" className="space-y-6 scroll-mt-24">
            <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Accessible names</h2>
            <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed text-sm">
              Every interactive element needs one clear accessible name. When several techniques apply, prefer this order: a <strong className="text-arvo-light-primary dark:text-white">visible text label</strong> tied with <code className="px-1" data-arvo-inline-code>for</code>/<code className="px-1" data-arvo-inline-code>id</code>, then <code className="px-1" data-arvo-inline-code>aria-labelledby</code> pointing at visible text elsewhere, then <code className="px-1" data-arvo-inline-code>aria-label</code> when there is no suitable visible string.
            </p>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-arvo-light-primary dark:text-white">
                Visible label with <code className="px-1 text-base" data-arvo-inline-code>for</code> and <code className="px-1 text-base" data-arvo-inline-code>id</code>
              </h3>
              <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
                Use this for standard form controls whenever you can. The <code className="px-1" data-arvo-inline-code>label</code> text becomes the accessible name, clicking the label moves focus to the control, and you avoid maintaining the same string in two attributes. In React, use <code className="px-1" data-arvo-inline-code>htmlFor</code> instead of <code className="px-1" data-arvo-inline-code>for</code>.
              </p>
              <CodeBlock
                code={`<label for="username">Username</label>
<input id="username" type="text" autocomplete="username" />`}
                label="Label associated by id"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-arvo-light-primary dark:text-white">
                <code className="px-1 text-base" data-arvo-inline-code>aria-labelledby</code>
              </h3>
              <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
                Use when the name already exists as visible text in another element—for example a dialog title, a section heading, or a table caption—and you want the control’s name to match that text without duplicating it. List one or more element IDs in order; their text nodes are concatenated into the accessible name.
              </p>
              <CodeBlock
                code={`<h2 id="payment-heading">Payment</h2>
...
<button type="button" aria-labelledby="payment-heading">
  Edit
</button>`}
                label="Name from existing heading"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-arvo-light-primary dark:text-white">
                <code className="px-1 text-base" data-arvo-inline-code>aria-label</code>
              </h3>
              <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
                Use when there is no appropriate visible label string—icon-only buttons, a single control in a toolbar, or when visible text would be redundant for sighted users but you still need a short phrase for assistive technology. Keep labels concise; do not repeat the same text as a visible <code className="px-1" data-arvo-inline-code>label</code> or you risk double announcements.
              </p>
              <CodeBlock code={`<button type="button" aria-label="Close">×</button>`} label="Icon-only control" />
            </div>
            <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm">
              Avoid duplicate naming (for example a visible <code className="px-1" data-arvo-inline-code>label</code> plus the same string in <code className="px-1" data-arvo-inline-code>aria-label</code>)—screen readers may announce it twice.
            </p>
          </section>

          <section id="a11y-sronly" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Screen-reader-only text</h2>
            <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed text-sm">
              Use proper CSS for supplementary copy that should be read by assistive technologies but not shown on screen. Do not use <code className="px-1" data-arvo-inline-code>display: none</code> or <code className="px-1" data-arvo-inline-code>visibility: hidden</code> for that purpose—they remove the content from the accessibility tree. Use the <code className="px-1" data-arvo-inline-code>.o9-msg-sr-only</code> class: it visually hides the element while keeping it available to screen readers, typically by clipping to a 1×1 pixel and positioning off-screen.
            </p>
            <CodeBlock
              code={`.o9-msg-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}`}
              label="Arvo screen-reader-only utility"
            />
            <CodeBlock
              code={`<button type="button">
  <span aria-hidden="true">×</span>
  <span class="o9-msg-sr-only">Close dialog</span>
</button>`}
              label="Visible icon with sr-only name"
            />
          </section>

          <section id="a11y-describedby" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">When to use aria-describedby</h2>
            <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm">
              Use it for extra context, not the main label—helper text, format guidance, errors, destructive warnings, shortcuts, or dynamic instructions.
            </p>
            <CodeBlock
              code={`<label for="email">Email</label>
<input id="email" type="email" aria-describedby="emailHelp" />
<p id="emailHelp">Use your work email address.</p>`}
              label="Input with helper text"
            />
          </section>

          <section id="a11y-form-date" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Date and time formats</h2>
            <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
              Communicate the expected format clearly and keep visual and spoken guidance aligned—do not show one format on screen and expose a different one to assistive technology.
            </p>
          </section>

          <section id="a11y-form-required" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Required fields</h2>
            <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
              Communicate required state visually and programmatically; use native <code className="px-1" data-arvo-inline-code>required</code> when appropriate; do not rely on color alone.
            </p>
            <CodeBlock
              code={`<label for="email">Email <span aria-hidden="true">*</span></label>
<input id="email" type="email" required />`}
              label="Required field"
            />
          </section>

          <section id="a11y-form-errors" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Error handling principles</h2>
            <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
              Errors should be <strong className="text-arvo-light-primary dark:text-white">timely</strong>, <strong className="text-arvo-light-primary dark:text-white">specific</strong>, <strong className="text-arvo-light-primary dark:text-white">actionable</strong>, programmatically and visually <strong className="text-arvo-light-primary dark:text-white">associated</strong> with the relevant field, and easy to <strong className="text-arvo-light-primary dark:text-white">recover</strong> from.
            </p>
            <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
              <strong className="text-arvo-light-primary dark:text-white">Timing:</strong> validate on blur for simple format checks when it helps; validate on submit when rules depend on the whole form or when early validation would be noisy; hybrid patterns are common. When a value is invalid, set <code className="px-1" data-arvo-inline-code>aria-invalid=&quot;true&quot;</code> and associate the error message with the control (for example via <code className="px-1" data-arvo-inline-code>aria-describedby</code> pointing at the error element id).
            </p>
            <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
              When submit fails, move keyboard focus to the first invalid field—see <strong className="text-arvo-light-primary dark:text-white">Keyboard and focus</strong> → <em>Forms: focus first error</em>.
            </p>
            <CodeBlock
              code={`<label for="workEmail">Work email</label>
<input id="workEmail" type="email" aria-invalid="true" aria-describedby="workEmailError" />
<p id="workEmailError">Enter a valid work email address.</p>`}
              label="Invalid field with associated message"
            />
          </section>

          <section id="a11y-form-error-clarity" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Clear errors, required fields, and association</h2>
            <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
              Unclear error messages and missing identification of mandatory fields create frustration for everyone and can <strong className="text-arvo-light-primary dark:text-white">block task completion</strong> for people using assistive technologies. If users cannot tell which field failed or what to change, they may abandon the flow.
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-arvo-light-secondary dark:text-neutral-400">
              <li>Expose <strong className="text-arvo-light-primary dark:text-white">required</strong> state in the label text and programmatically (native <code className="px-1" data-arvo-inline-code>required</code> or equivalent), not only with color.</li>
              <li>Ensure each error message is <strong className="text-arvo-light-primary dark:text-white">programmatically tied</strong> to its field so screen readers hear the error in context when the field is focused.</li>
              <li>Avoid generic messages such as “Invalid input” without saying how to fix the problem.</li>
              <li>When multiple errors exist, it should still be possible to understand and fix them one by one—consider an error summary at the top for long forms, with links or focus management to each field.</li>
            </ul>
          </section>

          <section id="a11y-form-disabled" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Disabled states</h2>
            <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
              Native <code className="px-1" data-arvo-inline-code>disabled</code> when the control should be fully unavailable. <code className="px-1" data-arvo-inline-code>aria-disabled=&quot;true&quot;</code> when it should stay discoverable but not operable in managed widgets.
            </p>
            <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
              Do not disable a primary action without explaining why—often it is more usable to keep the action enabled, validate on attempt, surface clear errors, and move focus to the first issue.
            </p>
          </section>

          <section id="a11y-form-title" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Tooltips vs HTML title</h2>
            <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
              Do not rely on the HTML <code className="px-1" data-arvo-inline-code>title</code> attribute for important information—it is mouse-biased, unreliable for keyboard users, and inconsistently announced. Surface critical instructions visibly and programmatically.
            </p>
          </section>

          <section id="a11y-form-ambiguous" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Avoid ambiguous labels to reduce confusion</h2>
            <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
              Ambiguous labels do not provide clear or distinct context, which can lead to confusion—especially for screen reader users.
            </p>
            <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
              Ensure that labels, headings, or button labels with a similar look and feel are clearly differentiated by making them unique, descriptive, and contextually meaningful.
            </p>
            <figure className="border border-arvo-light-border dark:border-neutral-700 p-4 md:p-6 bg-arvo-light-surface dark:bg-neutral-900/40">
              <ExpandableDocImage
                src="/o9DocGraphics/AccessibilityGraphic/ambiguous-labels-problem-solution.png"
                alt="Infographic: Problem—multiple plus buttons in a Download dialog share the same vague label, so screen readers announce Expand button twice and users cannot tell which control does what. Solution—give each control a unique aria-label such as Expand Download As and Expand L3 so announcements are distinct and purposeful."
                className="w-full max-w-4xl mx-auto h-auto block"
                width={1024}
                height={682}
                loading="lazy"
                decoding="async"
              />
              <figcaption className="mt-4 text-xs text-arvo-light-secondary dark:text-neutral-500 text-center leading-relaxed max-w-3xl mx-auto">
                Prefer specific accessible names—for example “Expand ‘Download As’” vs “Expand L3”—instead of repeated identical controls with no context.
              </figcaption>
            </figure>
          </section>

          <section id="a11y-group" className="space-y-6 scroll-mt-24">
            <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Grouping related controls</h2>
            <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed text-sm">
              Related inputs should share a single programmatic group name so screen readers announce the set before each control. In Arvo we group with <code className="px-1" data-arvo-inline-code>role="group"</code> and <code className="px-1" data-arvo-inline-code>aria-label</code> or <code className="px-1" data-arvo-inline-code>aria-labelledby</code> instead of <code className="px-1" data-arvo-inline-code>fieldset</code>/<code className="px-1" data-arvo-inline-code>legend</code>.
            </p>
            <CodeBlock
              code={`<div role="group" aria-label="Notification channels">
  <label><input type="checkbox" name="chan-email" /> Email</label>
  <label><input type="checkbox" name="chan-sms" /> SMS</label>
  <label><input type="checkbox" name="chan-push" /> Push</label>
</div>`}
              label="Checkbox group"
            />
            <CodeBlock
              code={`<div role="group" aria-label="Feature toggles">
  <label>
    Auto-save drafts
    <input type="checkbox" role="switch" aria-checked="false" />
  </label>
  <label>
    Show line numbers
    <input type="checkbox" role="switch" aria-checked="true" />
  </label>
</div>`}
              label="Switch group"
            />
            <CodeBlock
              code={`<div role="radiogroup" aria-label="Billing cycle">
  <label><input type="radio" name="cycle" value="monthly" /> Monthly</label>
  <label><input type="radio" name="cycle" value="annual" /> Annual</label>
</div>`}
              label="Radio group"
            />
            <CodeBlock
              code={`<div role="group" aria-labelledby="addr-block-title">
  <p id="addr-block-title">Shipping address</p>
  <label>Street <input type="text" name="street" autocomplete="street-address" /></label>
  <label>City <input type="text" name="city" /></label>
  <label>ZIP <input type="text" name="zip" inputmode="numeric" /></label>
</div>`}
              label="Mixed fields with labelled group"
            />
          </section>
        </div>
      )}

      {activeTab === 'Live regions' && (
        <div className="space-y-10 pt-2" role="tabpanel" aria-label="Live regions">
          <section id="a11y-live-intro" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Live regions</h2>
            <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed text-sm">
              Screen readers expose changes to the accessibility tree. When text updates without moving focus—save confirmations, search result counts, new chat messages, validation summaries—use a <strong className="text-arvo-light-primary dark:text-white">live region</strong> so assistive technologies can announce the change. Choose politeness (polite vs assertive) and roles (<code className="px-1" data-arvo-inline-code>status</code>, <code className="px-1" data-arvo-inline-code>alert</code>, <code className="px-1" data-arvo-inline-code>log</code>) to match urgency and context.
            </p>
            <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
              <strong className="text-arvo-light-primary dark:text-white">Navigation vs announcement:</strong> if the user must act on an error immediately, prefer moving <strong className="text-arvo-light-primary dark:text-white">focus</strong> to the field or summary first; use live regions when focus should stay put or when the update is supplementary.
            </p>
          </section>

          <section id="a11y-live-when" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">When to use live regions</h2>
            <ul className="list-disc list-inside space-y-2 text-arvo-light-secondary dark:text-neutral-400 text-sm">
              <li>
                <strong className="text-arvo-light-primary dark:text-white">Polite</strong> — non-urgent status (saved, filtered, loading finished, cart updated).
              </li>
              <li>
                <strong className="text-arvo-light-primary dark:text-white">Assertive</strong> — time-sensitive problems (session ending, payment failed) where delay would harm the user.
              </li>
              <li>
                <strong className="text-arvo-light-primary dark:text-white">role=&quot;status&quot;</strong> — lightweight inline status (syncing, last saved).
              </li>
              <li>
                <strong className="text-arvo-light-primary dark:text-white">role=&quot;alert&quot;</strong> — critical messages that must interrupt (often with assertive behavior); prefer focus management for form errors when possible.
              </li>
              <li>
                <strong className="text-arvo-light-primary dark:text-white">role=&quot;log&quot;</strong> — append-only streams such as chat or activity feeds where new entries arrive at the end.
              </li>
            </ul>
            <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
              Elements without an explicit live region behave as <code className="px-1" data-arvo-inline-code>aria-live=&quot;off&quot;</code> (implicit): static content is not re-announced unless focus moves there.
            </p>
          </section>

          <section id="a11y-live-polite" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">
              <code className="text-base px-1" data-arvo-inline-code>aria-live=&quot;polite&quot;</code>
            </h2>
            <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
              <strong className="text-arvo-light-primary dark:text-white">When to use:</strong> routine updates that can wait until the screen reader finishes its current phrase—autosave, result counts, soft validation hints that are not blocking.
            </p>
            <CodeBlock
              code={`<div id="save-status" aria-live="polite" aria-atomic="true"></div>
<!-- After save: textContent = "Saved." -->`}
              label="Polite status container"
            />
            <CodeBlock
              code={`<p id="results-count" aria-live="polite" aria-atomic="true">12 results</p>`}
              label="Polite: updating a line of copy"
            />
          </section>

          <section id="a11y-live-assertive" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">
              <code className="text-base px-1" data-arvo-inline-code>aria-live=&quot;assertive&quot;</code>
            </h2>
            <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
              <strong className="text-arvo-light-primary dark:text-white">When to use:</strong> urgent interruptions—session timeout warnings, failed payment, destructive action could not complete. Use sparingly; overuse trains users to ignore announcements.
            </p>
            <CodeBlock
              code={`<div id="session-warning" aria-live="assertive" aria-atomic="true"></div>`}
              label="Assertive region shell"
            />
            <CodeBlock
              code={`<div aria-live="assertive" role="alert">
  Connection lost. Reconnecting…
</div>`}
              label="Assertive: connection loss"
            />
          </section>

          <section id="a11y-live-status" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">
              <code className="text-base px-1" data-arvo-inline-code>role=&quot;status&quot;</code>
            </h2>
            <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
              <strong className="text-arvo-light-primary dark:text-white">When to use:</strong> short, non-blocking status text where <code className="px-1" data-arvo-inline-code>role=&quot;status&quot;</code> matches the meaning (implicit polite live region). Pair with visible text or icons for sighted users.
            </p>
            <CodeBlock code={`<p role="status">Your changes are syncing…</p>`} label="Status role" />
            <CodeBlock
              code={`<span role="status" class="inline-flex items-center gap-1">
  <span aria-hidden="true">●</span> Live updating
</span>`}
              label="Inline polite status"
            />
          </section>

          <section id="a11y-live-alert" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">
              <code className="text-base px-1" data-arvo-inline-code>role=&quot;alert&quot;</code>
            </h2>
            <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
              <strong className="text-arvo-light-primary dark:text-white">When to use:</strong> important errors or blockers announced without requiring focus—often behaves like assertive. For in-form validation, moving focus to the first invalid field is usually better; use <code className="px-1" data-arvo-inline-code>alert</code> for page-level or async failures where focus cannot move.
            </p>
            <CodeBlock
              code={`<div role="alert">Payment could not be processed. Check your card details.</div>`}
              label="Alert for critical failure"
            />
          </section>

          <section id="a11y-live-log" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">
              <code className="text-base px-1" data-arvo-inline-code>role=&quot;log&quot;</code>
            </h2>
            <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
              <strong className="text-arvo-light-primary dark:text-white">When to use:</strong> sequential, append-only content—chat transcripts, audit trails, live comment threads. New nodes are typically announced without reading the whole history; combine with <code className="px-1" data-arvo-inline-code>aria-live=&quot;polite&quot;</code> when you need explicit control.
            </p>
            <CodeBlock
              code={`<div role="log" aria-live="polite" aria-relevant="additions" id="chat-transcript">
  <p><time>10:02</time> You: Hello</p>
  <p><time>10:03</time> Support: Hi, how can we help?</p>
</div>`}
              label="Chat-style log"
            />
          </section>

          <section id="a11y-live-attrs" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">
              <code className="px-1" data-arvo-inline-code>aria-atomic</code> and <code className="px-1" data-arvo-inline-code>aria-relevant</code>
            </h2>
            <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
              <strong className="text-arvo-light-primary dark:text-white">aria-atomic=&quot;true&quot;</strong> — announce the entire region when any part changes (good when partial updates would sound meaningless alone).
            </p>
            <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
              <strong className="text-arvo-light-primary dark:text-white">aria-relevant</strong> — refine what counts as a change: <code className="px-1" data-arvo-inline-code>additions</code> for new list items, <code className="px-1" data-arvo-inline-code>text</code> for text changes, or combinations. Helps noisy lists stay understandable.
            </p>
          </section>
        </div>
      )}

      {activeTab === 'Heading & page title' && (
        <div className="space-y-10 pt-2" role="tabpanel" aria-label="Heading and page title">
          <section id="a11y-heading-intro" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Maintaining proper heading hierarchy</h2>
            <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed text-sm">
              A well-structured heading hierarchy helps screen reader users navigate content efficiently and understand the structure and flow of the information.
            </p>
            <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed text-sm">
              <strong className="text-arvo-light-primary dark:text-white">No skipped levels:</strong> Maintain a nested structure (H1 → H2 → H3), avoiding jumps like H2 to H4, which breaks outline navigation for screen readers.
            </p>
            <figure className="border border-arvo-light-border dark:border-neutral-700 p-4 md:p-6 bg-arvo-light-surface dark:bg-neutral-900/40">
              <ExpandableDocImage
                src="/o9DocGraphics/AccessibilityGraphic/heading-hierarchy-importance-infographic.png"
                alt="Importance of heading hierarchy: screen readers use headings for navigation; levels should reflect progressively specific content. Wrong example skips h3 and h4 so the outline is confusing. Correct example uses h1, h2, h3 in order. Best practices: sequential order, semantic h1–h6 elements, one h1 per page, avoid level skips, correct nesting under parent headings. Key takeaway: logical order and semantic headings improve accessibility."
                className="w-full max-w-4xl mx-auto h-auto block"
                width={1024}
                height={682}
                loading="lazy"
                decoding="async"
              />
              <figcaption className="mt-4 text-xs text-arvo-light-secondary dark:text-neutral-500 text-center leading-relaxed max-w-3xl mx-auto">
                Compare skipped levels (confusing outline) with sequential h1 → h2 → h3 (clear structure for screen reader users).
              </figcaption>
            </figure>

            <div className="space-y-4 pt-2">
              <h3 className="text-lg font-semibold text-arvo-light-primary dark:text-white">Examples (headings only)</h3>
              <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
                The markup below shows heading levels only—no inputs, checkboxes, or other controls between headings. A real screen would place form content beside or under each heading as needed.
              </p>
              <CodeBlock
                label="Correct: sequential levels (h1 → h2 → h3 → h4)"
                code={`<!-- Page -->
<h1>Demand Plan</h1>

<!-- Modal: Display tab (structure only) -->
<h2>Pivot Layout</h2>
<h3>Column header</h3>
<h3>Column width</h3>
<h4>Members</h4>
<h4>Data</h4>
<h3>Row</h3>`}
              />
              <CodeBlock
                label="Wrong: skipped level (h2 → h4)"
                code={`<!-- Page -->
<h1>Demand Plan</h1>

<!-- Jumps from h2 to h4 — no intervening h3 -->
<h2>Pivot Layout</h2>
<h4>Members</h4>
<h4>Data</h4>
<h3>Column header</h3>`}
              />
            </div>
          </section>

          <section id="a11y-headings" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Headings must be semantic</h2>
            <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed text-sm">
              Do not style plain text to look like a heading without conveying heading semantics. Use one logical <code className="px-1" data-arvo-inline-code>h1</code> per page or view where appropriate; do not skip levels without reason. Prefer real <code className="px-1" data-arvo-inline-code>h1</code>–<code className="px-1" data-arvo-inline-code>h6</code> so the document outline and screen reader shortcuts stay correct.
            </p>
            <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
              If you cannot use a native heading element—for example a legacy wrapper forbids it—use <code className="px-1" data-arvo-inline-code>role=&quot;heading&quot;</code> with <code className="px-1" data-arvo-inline-code>aria-level</code> set to the equivalent level (1–6). This is a fallback, not the default.
            </p>
            <CodeBlock
              code={`<!-- Preferred: native heading -->
<section>
  <h2>Account settings</h2>
  <p>Update your profile.</p>
</section>

<!-- Fallback only: same level as h2 -->
<section>
  <div role="heading" aria-level="2">Account settings</div>
  <p>Update your profile.</p>
</section>`}
              label="Semantic h2 vs role=heading"
            />
          </section>

          <section id="a11y-page-title" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white">Page titles</h2>
            <p className="text-arvo-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
              Each page or view should have a meaningful <code className="px-1" data-arvo-inline-code>document.title</code> (and where applicable, a unique route title) reflecting content and context. That helps navigation, history, screen reader orientation when switching tabs, and task recovery.
            </p>
          </section>
        </div>
      )}
    </AccessibilityDocPage>
  )
}
