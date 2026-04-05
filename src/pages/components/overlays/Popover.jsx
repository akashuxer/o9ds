import { useState, useMemo } from 'react'
import { useTheme } from '../../../context/ThemeContext'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocTabs from '../../../LayoutComponents/DocTabs'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTable from '../../../LayoutComponents/DocTable'
import GrayBgCard from '../../../LayoutComponents/GrayBgCard'
import WhiteBgCard from '../../../LayoutComponents/WhiteBgCard'
import { getComponentPageDescription } from '../../../data/componentPageMeta'

const tabs = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const PROPS = [
  { prop: 'triggerRef', type: 'React.RefObject<HTMLElement>', default: '—', required: 'No', desc: 'Ref to the trigger element for positioning and ARIA' },
  { prop: 'renderTrigger', type: '(props) => ReactNode', default: '—', required: 'No', desc: 'Render prop alternative to triggerRef; receives ARIA props' },
  { prop: 'variant', type: "'space' | 'edge'", default: "'space'", required: 'No', desc: "Body padding variant. 'edge' removes horizontal padding" },
  { prop: 'placement', type: 'Placement (13 values)', default: "'auto'", required: 'No', desc: "Preferred placement relative to the trigger. 'auto' selects best position" },
  { prop: 'title', type: 'string', default: '—', required: 'No', desc: 'Heading text in the header; sets aria-labelledby on the panel' },
  { prop: 'showHeader', type: 'boolean', default: 'true', required: 'No', desc: 'Show or hide the header section' },
  { prop: 'closable', type: 'boolean', default: 'true', required: 'No', desc: 'Show a close icon button in the header' },
  { prop: 'backButton', type: 'boolean', default: 'false', required: 'No', desc: 'Show a back navigation arrow in the header' },
  { prop: 'headerActions', type: 'O9PopoverHeaderAction[]', default: '[]', required: 'No', desc: 'Additional icon buttons in the header actions area' },
  { prop: 'stickyHeader', type: 'ReactNode', default: '—', required: 'No', desc: 'Sticky slot between header and body (e.g. search input)' },
  { prop: 'children', type: 'ReactNode', default: '—', required: 'No', desc: 'Body content of the popover' },
  { prop: 'actions', type: 'O9PopoverAction[]', default: '[]', required: 'No', desc: 'Footer action buttons. Empty array hides the footer' },
  { prop: 'showFooter', type: 'boolean', default: 'true', required: 'No', desc: 'Show or hide the footer section' },
  { prop: 'width', type: "string | number | 'anchor' | null", default: 'null', required: 'No', desc: "Panel width. 'anchor' matches trigger width" },
  { prop: 'offset', type: 'number', default: '2', required: 'No', desc: 'Pixel gap between trigger and panel edge' },
  { prop: 'trigger', type: "'click' | 'hover' | 'focus'", default: "'click'", required: 'No', desc: 'Interaction mode that opens the popover' },
  { prop: 'closeOnOutside', type: 'boolean', default: 'true', required: 'No', desc: 'Close when the user clicks outside the panel' },
  { prop: 'showArrow', type: 'boolean', default: 'false', required: 'No', desc: 'Show a triangular pointer arrow toward the trigger' },
  { prop: 'loading', type: 'boolean', default: 'false', required: 'No', desc: 'Show Pattern B skeleton loading state' },
  { prop: 'interactive', type: 'boolean', default: 'true', required: 'No', desc: 'When true: role="dialog" with focus trap. When false: role="tooltip"' },
  { prop: 'open', type: 'boolean', default: '—', required: 'No', desc: 'Controlled open state' },
  { prop: 'defaultOpen', type: 'boolean', default: 'false', required: 'No', desc: 'Initial open state (uncontrolled)' },
  { prop: 'onOpenChange', type: '(open: boolean) => void', default: '—', required: 'No', desc: 'Called when open state changes' },
  { prop: 'onOpen', type: '() => boolean | void', default: '—', required: 'No', desc: 'Called before opening. Return false to cancel' },
  { prop: 'onClose', type: '() => boolean | void', default: '—', required: 'No', desc: 'Called before closing. Return false to cancel' },
  { prop: 'onBack', type: '() => void', default: '—', required: 'No', desc: 'Called when the back button is clicked' },
  { prop: 'inline', type: 'boolean', default: 'false', required: 'No', desc: 'Render inline (no portal, no absolute positioning)' },
]

const KEYBOARD = [
  { key: 'Enter / Space', behavior: 'Activate the trigger to open or close the popover' },
  { key: 'Escape', behavior: 'Close the popover and return focus to the trigger' },
  { key: 'Tab', behavior: 'Move focus to the next focusable element inside the panel' },
  { key: 'Shift+Tab', behavior: 'Move focus to the previous focusable element inside the panel' },
]

const ARIA_ATTRS = [
  { attr: 'role="dialog"', where: 'Panel', when: 'Applied when interactive={true} (default)' },
  { attr: 'role="tooltip"', where: 'Panel', when: 'Applied when interactive={false}' },
  { attr: 'aria-labelledby', where: 'Panel', when: 'References the title element when title is provided' },
  { attr: 'aria-busy', where: 'Panel', when: 'Set to "true" during loading state' },
  { attr: 'tabindex="-1"', where: 'Panel', when: 'Applied when interactive so the panel is programmatically focusable' },
  { attr: 'aria-haspopup="dialog"', where: 'Trigger', when: 'Set automatically on the trigger element' },
  { attr: 'aria-expanded', where: 'Trigger', when: 'Reflects open state ("true" or "false")' },
  { attr: 'aria-controls', where: 'Trigger', when: "References the panel's unique id" },
  { attr: 'aria-label="Close"', where: 'Close button', when: 'Announces close button purpose' },
  { attr: 'aria-label="Back"', where: 'Back button', when: 'Announces back button purpose' },
  { attr: 'aria-hidden="true"', where: 'Arrow element', when: 'Excludes decorative arrow from accessibility tree' },
]

const JS_METHODS = [
  { method: 'O9Popover.initialize(el, options)', returns: 'O9Popover', desc: 'Factory — initializes popover on a trigger element' },
  { method: 'open()', returns: 'void', desc: 'Open the popover panel' },
  { method: 'close()', returns: 'void', desc: 'Close the popover panel' },
  { method: 'toggle()', returns: 'void', desc: 'Toggle between open and closed' },
  { method: 'isOpen()', returns: 'boolean', desc: 'Return current open state' },
  { method: 'renderBody(content)', returns: 'void', desc: 'Replace the body content' },
  { method: 'setLoading(loading)', returns: 'void', desc: 'Toggle skeleton loading state' },
  { method: 'setFooterVisible(visible)', returns: 'void', desc: 'Show or hide the footer section' },
  { method: 'updateFooterAction(id, props)', returns: 'void', desc: 'Update a specific footer action button by ID' },
  { method: 'reposition()', returns: 'void', desc: 'Force a position recalculation' },
  { method: 'destroy()', returns: 'void', desc: 'Remove event listeners, clean up DOM, destroy inner instances' },
]

const JS_EVENTS = [
  { event: 'popover:open', payload: '—', desc: 'Fires after the panel has opened' },
  { event: 'popover:close', payload: '—', desc: 'Fires after the panel has closed' },
]

export default function Popover() {
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
        { id: 'overview-dos-donts', label: 'Dos & don\u2019ts' },
      ]
    }
    if (activeTab === 'Usage') {
      return [
        { id: 'usage-when', label: 'When to use' },
        { id: 'usage-when-not', label: 'When not to use' },
        { id: 'usage-scenarios', label: 'Scenarios' },
        { id: 'usage-best-practices', label: 'Best practices' },
        { id: 'usage-related', label: 'Related components' },
      ]
    }
    if (activeTab === 'Code/APIs') {
      return [
        { id: 'code-props', label: 'Props' },
        { id: 'code-scenarios', label: 'Implementation scenarios' },
        { id: 'code-js-methods', label: 'JS methods' },
        { id: 'code-js-events', label: 'JS custom events' },
        { id: 'code-css', label: 'CSS variables' },
      ]
    }
    if (activeTab === 'Accessibility') {
      return [
        { id: 'a11y-intro', label: 'Overview' },
        { id: 'a11y-keyboard', label: 'Keyboard interaction' },
        { id: 'a11y-focus', label: 'Focus management' },
        { id: 'a11y-aria', label: 'ARIA attributes' },
        { id: 'a11y-loading', label: 'Loading state' },
        { id: 'a11y-notes', label: 'Accessibility notes' },
      ]
    }
    return []
  }, [activeTab])

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
            Popover
          </h1>
          <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed mb-2">
            {getComponentPageDescription('popover')}
          </p>
          <p className="text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed">
            Floating panel anchored to a trigger element, with structured header, scrollable body, and optional footer sections. Supports 13 placement positions, optional pointer arrow, three trigger modes, back navigation, configurable footer actions, and a structured skeleton loading state.
          </p>
          <DocTabs tabs={tabs} activeTab={activeTab} onSelect={setActiveTab} />
        </section>

        {activeTab === 'Overview' && (
          <div className="space-y-12">
            <section id="overview-purpose" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Purpose</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The Popover provides a floating panel for displaying contextual content, inline forms, or action confirmations directly adjacent to the element that triggered it. It keeps users in context without navigating away or opening a full modal dialog.
              </p>
            </section>

            <section id="overview-definition" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Definition & role</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                A <strong className="text-o9ds-light-primary dark:text-white font-medium">popover</strong> is a non-modal overlay anchored to a trigger element. It can contain any content — text, forms, lists, or other components. Unlike a dialog, it does not block the rest of the page and can be dismissed by clicking outside or pressing Escape.
              </p>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The popover supports an <strong className="text-o9ds-light-primary dark:text-white font-medium">interactive</strong> mode (default) that acts as a dialog with a focus trap, and a <strong className="text-o9ds-light-primary dark:text-white font-medium">non-interactive</strong> mode that behaves like a rich tooltip without focus trapping.
              </p>
            </section>

            <section id="overview-anatomy" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Anatomy</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The popover panel is composed of several optional sections arranged vertically.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">Arrow</strong> — optional triangular pointer toward the trigger, decorative (<code className="px-1 py-0.5" data-o9ds-inline-code>aria-hidden</code>).
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">Header</strong> — contains the title, optional back button, and header action buttons (including close).
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">Sticky header</strong> — fixed slot below the header for search inputs or filters.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">Body</strong> — scrollable content area. The <code className="px-1 py-0.5" data-o9ds-inline-code>edge</code> variant removes horizontal padding for full-bleed content.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">Footer</strong> — action buttons at the bottom (Cancel, Save, etc.).
                </li>
              </ul>
            </section>

            <section id="overview-variants" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Variants</h2>
              <ul className="space-y-3 text-o9ds-light-secondary dark:text-neutral-400">
                <li><strong className="text-o9ds-light-primary dark:text-white">Space (default)</strong> — standard body padding for text content and forms.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white">Edge</strong> — removes horizontal body padding for edge-to-edge content like lists or tables.</li>
              </ul>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed mt-4">
                Additional feature modifiers control the presence of the arrow (<code className="px-1 py-0.5" data-o9ds-inline-code>--with-arrow</code>), footer (<code className="px-1 py-0.5" data-o9ds-inline-code>--with-footer</code>), close button (<code className="px-1 py-0.5" data-o9ds-inline-code>--closable</code>), and inline positioning (<code className="px-1 py-0.5" data-o9ds-inline-code>--inline</code>).
              </p>
            </section>

            <section id="overview-states" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">States</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Hidden</strong> — panel is not rendered (<code className="px-1 py-0.5" data-o9ds-inline-code>display: none</code>).</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Open</strong> — panel is visible and positioned; trigger has <code className="px-1 py-0.5" data-o9ds-inline-code>aria-expanded="true"</code>.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Loading</strong> — Pattern B skeleton; pointer events disabled, footer hidden, shimmer placeholders in title and body.</li>
              </ul>
            </section>

            <section id="overview-naming" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Naming guidance</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Use a clear, descriptive title that tells the user what the popover contains — "Filter options", "Notification settings", "Confirm deletion". Footer actions should use outcome-oriented labels such as "Apply", "Save", or "Delete" rather than generic "OK" or "Submit".
              </p>
            </section>

            <section id="overview-dos-donts" className="scroll-mt-24">
              <div className="grid gap-4 sm:grid-cols-2">
                <GrayBgCard title="Do" bullets={['Use for contextual content that relates to a specific trigger', 'Provide a title so screen readers can announce the popover purpose', 'Use footer actions for confirmation workflows', 'Use the edge variant for list-based content', 'Return focus to the trigger when the popover closes']} />
                <WhiteBgCard title="Don't" bullets={['Use as a replacement for a full dialog when the content is complex', 'Stack multiple popovers on screen simultaneously', 'Use non-interactive mode for content that contains links or buttons', 'Omit the close button unless an alternative dismiss mechanism exists', 'Rely solely on outside click for dismissal — always support Escape']} />
              </div>
            </section>
          </div>
        )}

        {activeTab === 'Usage' && (
          <div className="space-y-12">
            <section id="usage-when" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Contextual details</strong> — display supplementary information related to a specific trigger without navigating away.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Inline forms</strong> — present short forms, filters, or settings directly adjacent to the control that opens them.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Action confirmations</strong> — use footer actions to confirm or cancel a destructive or important operation.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Rich tooltips</strong> — show interactive content on hover or focus (use <code className="px-1 py-0.5" data-o9ds-inline-code>interactive={'{false}'}</code> for non-interactive tooltip-like content).</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Nested navigation</strong> — use the back button to implement multi-level panel flows within a single popover.</li>
              </ul>
            </section>

            <section id="usage-when-not" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When not to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Full-page or complex multi-step workflows — use a <strong className="text-o9ds-light-primary dark:text-white font-medium">Dialog</strong> for larger modal flows.</li>
                <li>Simple single-line descriptions — use a <strong className="text-o9ds-light-primary dark:text-white font-medium">Tooltip</strong> for transient, non-interactive text.</li>
                <li>Selecting from a list of actions — use an <strong className="text-o9ds-light-primary dark:text-white font-medium">Action Menu</strong> with proper menu semantics.</li>
                <li>Single-value selection — use a <strong className="text-o9ds-light-primary dark:text-white font-medium">Dropdown</strong> component.</li>
              </ul>
            </section>

            <section id="usage-scenarios" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Scenarios</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Filter panel</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Open a popover from a "Filter" button to let users configure filter criteria. Use the sticky header for a search input, the body for filter checkboxes, and footer actions for "Apply" and "Reset".
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Confirmation</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Use the popover for lightweight confirmations (e.g. "Are you sure you want to delete?") with Cancel and Delete footer actions. Reserve Dialog for higher-stakes confirmations that need more context.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Detail preview</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Show a preview of an entity's details on hover using <code className="px-1 py-0.5" data-o9ds-inline-code>trigger="hover"</code>. Set <code className="px-1 py-0.5" data-o9ds-inline-code>interactive={'{false}'}</code> if the content is read-only and doesn't need focus trapping.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Nested navigation</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Enable the back button to implement drill-down navigation within a single popover panel. Each level replaces the body content and updates the title.
                  </p>
                </div>
              </div>
            </section>

            <section id="usage-best-practices" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Best practices</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Always provide a title for interactive popovers so screen readers can identify the dialog context.</li>
                <li>Use the <code className="px-1 py-0.5" data-o9ds-inline-code>edge</code> variant when the body contains lists or tables that should extend to the panel edges.</li>
                <li>Keep popover content focused and concise — if it grows too large, consider a Dialog instead.</li>
                <li>Use controlled mode (<code className="px-1 py-0.5" data-o9ds-inline-code>open</code> + <code className="px-1 py-0.5" data-o9ds-inline-code>onOpenChange</code>) when the popover state needs to be synchronized with external logic.</li>
                <li>Use the <code className="px-1 py-0.5" data-o9ds-inline-code>onOpen</code> callback to fetch async content and show loading state while data arrives.</li>
              </ul>
            </section>

            <section id="usage-related" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Related components</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Dialog</strong> — use for large modal flows that require full viewport blocking and stronger focus enforcement.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Dropdown</strong> — single-selection list variant; simpler structure, no header or footer.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Tooltip</strong> — use for transient, non-interactive text descriptions.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Action Menu</strong> — use for lists of actions with menu semantics.</li>
              </ul>
            </section>
          </div>
        )}

        {activeTab === 'Code/APIs' && (
          <div className="space-y-12">
            <section id="code-props" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Component API</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
                O9Popover accepts standard <code className="px-1 py-0.5" data-o9ds-inline-code>HTMLDivElement</code> attributes via spread (including <code className="px-1 py-0.5" data-o9ds-inline-code>onFocus</code>, <code className="px-1 py-0.5" data-o9ds-inline-code>onBlur</code>, <code className="px-1 py-0.5" data-o9ds-inline-code>onKeyDown</code>).
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
                  code={`import { O9Popover } from '@o9ds/react';
import { useRef } from 'react';

const triggerRef = useRef(null);

<button ref={triggerRef}>Open</button>
<O9Popover triggerRef={triggerRef} title="Settings">
  <p>Popover content</p>
</O9Popover>`}
                  label="React — basic"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">With footer actions — React</h3>
                <CodeBlock
                  code={`<O9Popover
  triggerRef={triggerRef}
  title="Confirm"
  actions={[
    { id: 'cancel', label: 'Cancel', variant: 'secondary' },
    { id: 'save', label: 'Save', variant: 'primary', action: () => handleSave() },
  ]}
>
  <p>Are you sure you want to save these changes?</p>
</O9Popover>`}
                  label="React — footer actions"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Controlled & hover trigger — React</h3>
                <CodeBlock
                  code={`const [isOpen, setIsOpen] = useState(false);

<O9Popover
  open={isOpen}
  onOpenChange={setIsOpen}
  triggerRef={triggerRef}
  title="Controlled"
>
  <p>Controlled popover content</p>
</O9Popover>

// Hover trigger
<O9Popover triggerRef={triggerRef} trigger="hover" title="Hover Info">
  <p>Opens on pointer enter, closes on pointer leave.</p>
</O9Popover>`}
                  label="React — controlled & hover"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Basic — HTML</h3>
                <CodeBlock
                  code={`<div
  class="o9ds-popover o9ds-popover--closable open"
  role="dialog"
  tabindex="-1"
  aria-labelledby="pop-title-1"
>
  <div class="o9ds-popover__header">
    <div class="o9ds-popover__header-left">
      <span id="pop-title-1" class="o9ds-popover__title">Settings</span>
    </div>
    <div class="o9ds-popover__header-actions">
      <span class="o9ds-popover__close-btn"><!-- close icon button --></span>
    </div>
  </div>
  <div class="o9ds-popover__body">
    <p>Popover content goes here.</p>
  </div>
</div>`}
                  label="HTML — basic"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">With footer & arrow — HTML</h3>
                <CodeBlock
                  code={`<div class="o9ds-popover o9ds-popover--closable o9ds-popover--with-footer o9ds-popover--with-arrow open"
  role="dialog" tabindex="-1">
  <div class="o9ds-popover__arrow" aria-hidden="true"></div>
  <div class="o9ds-popover__header">...</div>
  <div class="o9ds-popover__body"><p>Are you sure?</p></div>
  <div class="o9ds-popover__footer">
    <button class="o9ds-btn o9ds-btn--secondary o9ds-btn--md">
      <span class="o9ds-btn__lbl">Cancel</span>
    </button>
    <button class="o9ds-btn o9ds-btn--primary o9ds-btn--md">
      <span class="o9ds-btn__lbl">Save</span>
    </button>
  </div>
</div>`}
                  label="HTML — footer & arrow"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Async loading — React</h3>
                <CodeBlock
                  code={`const [loading, setLoading] = React.useState(true);

React.useEffect(() => {
  fetchData().then((data) => {
    setContent(data);
    setLoading(false);
  });
}, []);

<O9Popover triggerRef={triggerRef} title="Settings" loading={loading}>
  <p>{content}</p>
</O9Popover>`}
                  label="React — async loading"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Vanilla JS</h3>
                <CodeBlock
                  code={`import { O9Popover } from '@o9ds/js';

const trigger = document.querySelector('#trigger');
const popover = O9Popover.initialize(trigger, {
  title: 'Settings',
  content: '<p>Popover content</p>',
  closable: true,
  actions: [
    { id: 'cancel', label: 'Cancel', variant: 'secondary' },
    { id: 'save', label: 'Save', variant: 'primary', action: () => handleSave() },
  ],
});

popover.open();
popover.close();
popover.toggle();
popover.renderBody('<p>New content</p>');
popover.setLoading(true);
popover.reposition();
popover.destroy();`}
                  label="Vanilla JS"
                />
              </div>
            </section>

            <section id="code-js-methods" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">JS methods</h2>
              <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Method</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Returns</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {JS_METHODS.map((row) => (
                      <tr key={row.method} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{row.method}</td>
                        <td className="py-2 px-3 font-mono text-o9ds-light-secondary dark:text-neutral-400">{row.returns}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="code-js-events" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">JS custom events</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                Dispatched on the trigger DOM element.
              </p>
              <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Event</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Payload</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {JS_EVENTS.map((row) => (
                      <tr key={row.event} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{row.event}</td>
                        <td className="py-2 px-3 font-mono text-o9ds-light-secondary dark:text-neutral-400">{row.payload}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="code-css" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">CSS variables</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                Override on <code className="px-1 py-0.5" data-o9ds-inline-code>.o9ds-popover</code> or a parent to theme the popover.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { cat: 'Panel', vars: ['--o9ds-popover-bg', '--o9ds-popover-max-w', '--o9ds-popover-max-h', '--o9ds-popover-z-index'] },
                  { cat: 'Header', vars: ['--o9ds-popover-hdr-px', '--o9ds-popover-hdr-py', '--o9ds-popover-hdr-gap', '--o9ds-popover-hdr-left-gap', '--o9ds-popover-hdr-actions-gap', '--o9ds-popover-title-color'] },
                  { cat: 'Body', vars: ['--o9ds-popover-body-px', '--o9ds-popover-body-pt', '--o9ds-popover-body-pb'] },
                  { cat: 'Footer', vars: ['--o9ds-popover-ftr-px', '--o9ds-popover-ftr-py', '--o9ds-popover-ftr-pb', '--o9ds-popover-ftr-gap'] },
                  { cat: 'Arrow', vars: ['--o9ds-popover-arrow-size', '--o9ds-popover-arrow-bg'] },
                  { cat: 'Loading skeleton', vars: ['--o9ds-popover-shimmer-color', '--o9ds-popover-shimmer-bg'] },
                ].map(({ cat, vars }) => (
                  <div key={cat} className="border p-4 dark:border-neutral-700" style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#FAFAFA' } : undefined}>
                    <h3 className="text-sm font-semibold text-o9ds-light-primary dark:text-white mb-2">{cat}</h3>
                    <ul className="space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                      {vars.map((v) => (
                        <li key={v}>{v}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'Accessibility' && (
          <section id="popover-accessibility" className="space-y-12">
            <div id="a11y-intro" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Popover accessibility</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                In interactive mode (default), the Popover uses <code className="px-1 py-0.5" data-o9ds-inline-code>role="dialog"</code> with a focus trap so keyboard users remain within the panel until they dismiss it. In non-interactive mode, it uses <code className="px-1 py-0.5" data-o9ds-inline-code>role="tooltip"</code> with no focus trapping — suitable for rich read-only content.
              </p>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                The trigger element receives <code className="px-1 py-0.5" data-o9ds-inline-code>aria-haspopup="dialog"</code>, <code className="px-1 py-0.5" data-o9ds-inline-code>aria-expanded</code>, and <code className="px-1 py-0.5" data-o9ds-inline-code>aria-controls</code> automatically.
              </p>
            </div>

            <div id="a11y-keyboard" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Keyboard interaction</h3>
              <DocTable
                columns={[
                  { key: 'key', label: 'Key', mono: true },
                  { key: 'behavior', label: 'Action' },
                ]}
                rows={KEYBOARD}
              />
            </div>

            <div id="a11y-focus" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Focus management</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">On open (interactive):</strong> Focus trap activates after positioning resolves. First focusable element inside the panel receives focus.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">On close:</strong> Focus returns to the trigger element via <code className="px-1 py-0.5" data-o9ds-inline-code>element.focus({'{ preventScroll: true }'})</code>.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Outside click:</strong> The focus trap allows outside clicks (<code className="px-1 py-0.5" data-o9ds-inline-code>allowOutsideClick: true</code>) so users can dismiss the panel by clicking away.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Non-interactive:</strong> Focus trap is disabled entirely. The panel does not receive focus. Use only for read-only content.</li>
              </ul>
            </div>

            <div id="a11y-aria" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">ARIA attributes</h3>
              <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Attribute</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Applied to</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ARIA_ATTRS.map(({ attr, where, when }) => (
                      <tr key={attr} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{attr}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{where}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{when}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div id="a11y-loading" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Loading state</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                When loading, the panel sets <code className="px-1 py-0.5" data-o9ds-inline-code>aria-busy="true"</code>, hides the footer, and replaces the title and body with shimmer placeholders. Pointer events are disabled. Close and back buttons are also disabled during loading.
              </p>
              <CodeBlock
                code={`<div class="o9ds-popover o9ds-popover--closable open loading"
  role="dialog" aria-busy="true" tabindex="-1">
  <div class="o9ds-popover__header">
    <div class="o9ds-popover__header-left">
      <span class="o9ds-popover__title"><!-- skeleton shimmer --></span>
    </div>
  </div>
  <div class="o9ds-popover__body"><!-- skeleton blocks --></div>
</div>`}
                label="Loading state"
              />
            </div>

            <div id="a11y-notes" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Accessibility notes</h3>
              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
                <WhiteBgCard title="Dialog vs tooltip role">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Use <code className="px-1 py-0.5" data-o9ds-inline-code>interactive={'{true}'}</code> (default) for content with focusable elements — the panel gets <code className="px-1 py-0.5" data-o9ds-inline-code>role="dialog"</code>. Use <code className="px-1 py-0.5" data-o9ds-inline-code>interactive={'{false}'}</code> for read-only previews — the panel gets <code className="px-1 py-0.5" data-o9ds-inline-code>role="tooltip"</code>.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Trigger ARIA">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    The component automatically sets <code className="px-1 py-0.5" data-o9ds-inline-code>aria-haspopup="dialog"</code>, <code className="px-1 py-0.5" data-o9ds-inline-code>aria-expanded</code>, and <code className="px-1 py-0.5" data-o9ds-inline-code>aria-controls</code> on the trigger element. Do not set these manually.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Parent-controlled loading">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Popovers inside a container with <code className="px-1 py-0.5" data-o9ds-inline-code>data-loading="true"</code> automatically enter the skeleton state. Use <code className="px-1 py-0.5" data-o9ds-inline-code>data-loading-ignore="true"</code> to opt out a specific popover.
                  </p>
                </WhiteBgCard>
              </div>
            </div>
          </section>
        )}
      </div>
    </PageWithToc>
  )
}
