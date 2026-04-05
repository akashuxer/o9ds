import { useState, useMemo } from 'react'
import { useTheme } from '../../../context/ThemeContext'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocTabs from '../../../LayoutComponents/DocTabs'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTable from '../../../LayoutComponents/DocTable'
import GrayBgCard from '../../../LayoutComponents/GrayBgCard'
import WhiteBgCard from '../../../LayoutComponents/WhiteBgCard'
import { getComponentPageDescription } from '../../../data/componentPageMeta'

const toastTabs = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const TYPES = [
  { name: 'positive', desc: 'Confirmation of a successful action (saved, published, synced)', autoDismiss: 'Yes', role: 'status' },
  { name: 'info', desc: 'Informational updates that are useful but non-urgent (default)', autoDismiss: 'Yes', role: 'status' },
  { name: 'warning', desc: 'Something needs attention but is not blocking', autoDismiss: 'Yes', role: 'status' },
  { name: 'neutral', desc: 'General system messages with no particular urgency', autoDismiss: 'Yes', role: 'status' },
  { name: 'negative', desc: 'An error has occurred; never auto-dismisses', autoDismiss: 'No', role: 'alert' },
  { name: 'block', desc: 'A hard blocker preventing the user from proceeding; never auto-dismisses', autoDismiss: 'No', role: 'alert' },
]

const TOAST_PROPS = [
  { prop: 'type', type: "'negative' | 'warning' | 'info' | 'positive' | 'block' | 'neutral'", default: "'info'", required: 'No', desc: 'Semantic type controlling border color, title/icon color, icon glyph, and ARIA role' },
  { prop: 'title', type: 'string | null', default: 'null', required: 'No', desc: 'Optional title text above the message; truncated at 2 lines' },
  { prop: 'message', type: 'string', default: '—', required: 'Yes', desc: 'Body message text' },
  { prop: 'fadeAway', type: 'boolean', default: 'true', required: 'No', desc: 'Auto-dismiss after timeout; forced false for negative/block' },
  { prop: 'timeout', type: 'number', default: '5000', required: 'No', desc: 'Milliseconds before fade begins (only when fadeAway is true)' },
  { prop: 'pauseOnHover', type: 'boolean', default: 'true', required: 'No', desc: 'Pause timer on hover; on leave, timer resets from beginning' },
  { prop: 'icon', type: 'string | null', default: 'null', required: 'No', desc: 'Custom o9con icon name (without prefix) to override the default' },
  { prop: 'link', type: 'ReactNode', default: 'null', required: 'No', desc: 'Optional link element rendered below the message' },
  { prop: 'className', type: 'string', default: '—', required: 'No', desc: 'Additional CSS classes on the root toast element' },
  { prop: 'onClose', type: '() => void', default: '—', required: 'No', desc: 'Callback when toast is dismissed (click, Escape, or fade)' },
  { prop: 'onMouseEnter', type: '() => void', default: '—', required: 'No', desc: 'Callback when mouse enters the toast (React only)' },
  { prop: 'onMouseLeave', type: '() => void', default: '—', required: 'No', desc: 'Callback when mouse leaves the toast (React only)' },
]

const PROVIDER_PROPS = [
  { prop: 'position', type: "'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'", default: "'top-right'", required: 'No', desc: 'Screen position for the toast stack' },
  { prop: 'children', type: 'ReactNode', default: '—', required: 'Yes', desc: 'Application content' },
]

const JS_METHODS = [
  { method: 'initialize(container?, options?)', returns: 'instance', desc: 'Create a toast manager; container defaults to document.body' },
  { method: 'show(options)', returns: 'string', desc: 'Display a toast and return its unique ID' },
  { method: 'close(id)', returns: 'void', desc: 'Close a specific toast by ID' },
  { method: 'closeAll()', returns: 'void', desc: 'Close all active toasts' },
  { method: 'destroy()', returns: 'void', desc: 'Close all, remove container, clean up listeners' },
]

const ARIA_ATTRS = [
  { attr: 'role="status"', when: 'Default for info, positive, warning, neutral — polite announcement' },
  { attr: 'role="alert"', when: 'Negative and block types — assertive, immediate announcement' },
  { attr: 'aria-atomic="true"', when: 'Always — ensures full toast content is announced' },
  { attr: 'aria-live', when: 'Implied by role; polite for status, assertive for alert' },
  { attr: 'aria-label', when: 'Optional; when icon-only or abbreviated content needs a full label' },
  { attr: 'aria-hidden="true"', when: 'On the icon element — title + message convey the information' },
  { attr: 'aria-label="Close notification"', when: 'On the close button' },
]

export default function Toast() {
  const [activeTab, setActiveTab] = useState('Overview')
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const onThisPageSections = useMemo(() => {
    if (activeTab === 'Overview') {
      return [
        { id: 'overview-purpose', label: 'Purpose' },
        { id: 'overview-definition', label: 'Definition & role' },
        { id: 'overview-anatomy', label: 'Anatomy' },
        { id: 'overview-types', label: 'Types' },
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
        { id: 'usage-positioning', label: 'Positioning' },
      ]
    }
    if (activeTab === 'Code/APIs') {
      return [
        { id: 'code-props', label: 'Toast props' },
        { id: 'code-provider', label: 'Provider props' },
        { id: 'code-js-api', label: 'JS API & methods' },
        { id: 'code-events', label: 'Events' },
        { id: 'code-scenarios', label: 'Implementation scenarios' },
        { id: 'code-css', label: 'CSS variables' },
        { id: 'code-tokens', label: 'Tokens & mapping' },
      ]
    }
    if (activeTab === 'Accessibility') {
      return [
        { id: 'a11y-intro', label: 'Overview' },
        { id: 'a11y-roles', label: 'Roles & live regions' },
        { id: 'a11y-keyboard', label: 'Keyboard interaction' },
        { id: 'a11y-focus', label: 'Focus behavior' },
        { id: 'a11y-screen-reader', label: 'Screen reader' },
        { id: 'a11y-reduced-motion', label: 'Reduced motion' },
        { id: 'a11y-notes', label: 'Accessibility notes' },
        { id: 'a11y-supported-aria', label: 'Supported ARIA attributes' },
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
            Toast
          </h1>
          <p className="text-lg text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed mb-2">
            {getComponentPageDescription('toast')}
          </p>
          <p className="text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed">
            Lightweight, non-blocking overlay alert for contextual feedback. Toasts auto-stack vertically, support fade-away auto-dismissal, and use semantic types for visual styling. Error and block types require explicit user dismissal.
          </p>

          <DocTabs tabs={toastTabs} activeTab={activeTab} onSelect={setActiveTab} />
        </section>

        {activeTab === 'Overview' && (
          <div className="space-y-12">
            <section id="overview-purpose" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Purpose</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The Toast provides transient, contextual feedback after user actions or system events. It communicates success, warnings, errors, and informational messages without interrupting the user's workflow or requiring navigation away from the current view.
              </p>
            </section>

            <section id="overview-definition" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Definition & role</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                A <strong className="text-o9ds-light-primary dark:text-white font-medium">toast</strong> is a non-modal notification that appears in a fixed corner of the viewport, overlaying page content without blocking interaction. It is not for inline validation (use inline alerts) or user decisions (use dialogs). Toasts confirm that something happened and then fade away.
              </p>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                In the platform UI system, toasts occupy the highest z-index band (1300–1399) so they remain visible above dialogs and modals. They use a manager pattern: a single container stacks all toasts, and each toast is self-contained with an icon, optional title, message, optional link, and a close button.
              </p>
            </section>

            <section id="overview-anatomy" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Anatomy</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                A toast combines a <strong className="text-o9ds-light-primary dark:text-white font-medium">colored left border</strong>, a{' '}
                <strong className="text-o9ds-light-primary dark:text-white font-medium">status icon</strong>, a{' '}
                <strong className="text-o9ds-light-primary dark:text-white font-medium">content area</strong> (title + message + optional link), and a{' '}
                <strong className="text-o9ds-light-primary dark:text-white font-medium">close button</strong>.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">Left border</strong> — 2px colored stripe indicating the semantic type.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">Icon</strong> — leading glyph from the o9con icon font; determined by type (overridable for neutral).
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">Title</strong> — optional heading text (14px medium weight); truncated at 2 lines with ellipsis.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">Message</strong> — body text (12px regular weight, secondary color).
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">Link</strong> — optional action link below the message.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">Close button</strong> — always visible; 16px o9con-close icon.
                </li>
              </ul>
            </section>

            <section id="overview-types" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Types</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed mb-4">
                Six semantic types control the left border color, title/icon color, icon glyph, and auto-dismiss behavior.
              </p>
              <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Type</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Purpose</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Auto-dismiss</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">ARIA role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TYPES.map((row) => (
                      <tr key={row.name} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{row.name}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.desc}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.autoDismiss}</td>
                        <td className="py-2 px-3 font-mono text-o9ds-light-secondary dark:text-neutral-400">{row.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="overview-states" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">States</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Default</strong> — fully visible (opacity 1); timeout timer counting down if fadeAway is enabled.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Fading</strong> — opacity transitions from 100% to 0% over the fade duration; toast is removed on transition end.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Paused</strong> — hover freezes the timer and restores opacity to 100%; on leave, timer resets from the beginning.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Close hover</strong> — close button shows icon color change on hover.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Close focus</strong> — close button shows a focus ring via <code className="px-1 py-0.5" data-o9ds-inline-code>:focus-visible</code>.</li>
              </ul>
            </section>

            <section id="overview-naming" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Naming guidance</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Keep messages short and outcome-oriented. Use a title when the toast relates to a specific report or widget name. Prefer past-tense confirmations ("Changes saved") over imperative ("Save complete"). For errors, state what happened and what the user can do.
              </p>
            </section>

            <section id="overview-dos-donts" className="scroll-mt-24">
              <div className="grid gap-4 sm:grid-cols-2">
                <GrayBgCard title="Do" bullets={['Use toasts for brief, non-blocking feedback after actions', 'Let positive/info/warning toasts auto-dismiss', 'Force manual close for negative and block types', 'Keep messages concise — one or two sentences maximum', 'Pair a title with the message in multi-widget views']} />
                <WhiteBgCard title="Don't" bullets={['Use toasts for inline form validation (use inline alerts)', 'Auto-dismiss error toasts — users may miss critical information', 'Stack excessive toasts — limit concurrent visible notifications', 'Use toasts for decisions or confirmations (use a dialog)', 'Rely on color alone to convey meaning — icon + text are required']} />
              </div>
            </section>
          </div>
        )}

        {activeTab === 'Usage' && (
          <div className="space-y-12">
            <section id="usage-when" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Confirming a successful save, publish, sync, or export action.</li>
                <li>Informing the user of a background event (new data available, system update).</li>
                <li>Warning about a non-blocking issue that needs attention (low disk space, expiring session).</li>
                <li>Reporting an error that occurred during an operation (connection lost, save failed).</li>
                <li>Surfacing a hard blocker that prevents the user from proceeding.</li>
                <li>Providing a link to a resource generated asynchronously (report ready, export available).</li>
              </ul>
            </section>

            <section id="usage-when-not" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When not to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Inline form validation — use <strong className="text-o9ds-light-primary dark:text-white font-medium">inline alerts</strong> below the input.</li>
                <li>Decisions or confirmations — use a <strong className="text-o9ds-light-primary dark:text-white font-medium">dialog</strong> or <strong className="text-o9ds-light-primary dark:text-white font-medium">alert dialog</strong>.</li>
                <li>Persistent status indicators — use a <strong className="text-o9ds-light-primary dark:text-white font-medium">badge alert</strong> or <strong className="text-o9ds-light-primary dark:text-white font-medium">banner</strong>.</li>
                <li>Long-form content or multi-step instructions — use a <strong className="text-o9ds-light-primary dark:text-white font-medium">notification panel</strong>.</li>
                <li>Marketing or promotional messages — toasts are for system feedback, not campaigns.</li>
              </ul>
            </section>

            <section id="usage-scenarios" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Scenarios</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Save confirmation</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Show a positive toast after a successful save. Auto-dismisses after 5 seconds. Keep the label past-tense: "Changes saved successfully."
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Error with retry</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Show a negative toast when an API call fails. Include a title ("Save failed") and a message with guidance ("Unable to save changes. Please try again."). This type never auto-dismisses.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Async export ready</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Show an info toast with a link when a background export completes. The link navigates to the download. Use a title like "Report generated" and a message "Your export is ready."
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Blocking error</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Use the block type when the user cannot proceed (e.g., license expired, critical dependency missing). This type uses role="alert" for immediate screen reader announcement and never auto-dismisses.
                  </p>
                </div>
              </div>
            </section>

            <section id="usage-best-practices" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Best practices</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Limit the number of visible toasts — avoid overwhelming users with a wall of notifications.</li>
                <li>Match the type to severity: positive for success, negative for errors, warning for caution, info for neutral updates.</li>
                <li>Never auto-dismiss error or block toasts — users must explicitly acknowledge critical messages.</li>
                <li>Use the hover-pause behavior so users can read a toast before it fades.</li>
                <li>Provide an action link when there is a clear next step (download, retry, navigate).</li>
                <li>Use titles sparingly — only when context is needed (multi-widget views, report names).</li>
              </ul>
            </section>

            <section id="usage-positioning" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Positioning</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">top-right</strong> — default; the most common position for application notifications.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">top-left</strong> — use in RTL locales or when the right side has competing content.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">bottom-right / bottom-left</strong> — use when the top of the viewport is occupied by persistent toolbars or headers.</li>
              </ul>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                All toasts from the same manager share one position. Newer toasts appear at the top, pushing existing toasts down. The container uses an 8px gap between stacked toasts.
              </p>
            </section>
          </div>
        )}

        {activeTab === 'Code/APIs' && (
          <div className="space-y-12">
            <section id="code-props" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Toast props (O9ToastOptions)</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
                Passed to <code className="px-1 py-0.5" data-o9ds-inline-code>show()</code> in both React and JS APIs.
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
                    {TOAST_PROPS.map((row) => (
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

            <section id="code-provider" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Provider props (O9ToastProviderProps)</h2>
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
                    {PROVIDER_PROPS.map((row) => (
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

            <section id="code-js-api" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">JS API & methods</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                Vanilla JS uses <code className="px-1 py-0.5" data-o9ds-inline-code>O9Toast.initialize()</code> to create a manager instance.
              </p>
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

            <section id="code-events" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Events</h2>
              <DocTable
                columns={[
                  { key: 'event', label: 'Event', mono: true },
                  { key: 'payload', label: 'Payload' },
                  { key: 'desc', label: 'Description' },
                ]}
                rows={[
                  { event: 'toast:close', payload: "{ id: string, reason: 'click' | 'escape' | 'fade' | 'programmatic' }", desc: 'Fires on the container when a toast is removed. Reason indicates how it was closed.' },
                ]}
              />
            </section>

            <section id="code-scenarios" className="scroll-mt-24 space-y-10">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Implementation scenarios</h2>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">React — Provider + hook</h3>
                <CodeBlock
                  code={`import { O9ToastProvider, useToast } from '@o9ds/react';

function App() {
  return (
    <O9ToastProvider position="top-right">
      <MyComponent />
    </O9ToastProvider>
  );
}

function MyComponent() {
  const { show, close, closeAll } = useToast();

  const handleSave = () => {
    show({ type: 'positive', message: 'Changes saved successfully.' });
  };

  return <button onClick={handleSave}>Save</button>;
}`}
                  label="React"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">React — all types</h3>
                <CodeBlock
                  code={`const { show } = useToast();

show({ type: 'positive', message: 'Saved!' });
show({ type: 'info', message: 'New data available.' });
show({ type: 'warning', message: 'Low disk space.' });
show({ type: 'negative', message: 'Connection lost.' });
show({ type: 'block', message: 'Action blocked.' });
show({ type: 'neutral', message: 'FYI: system update.' });`}
                  label="All types"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">React — with title and link</h3>
                <CodeBlock
                  code={`show({
  type: 'info',
  title: 'Report generated',
  message: 'Your export is ready.',
  link: <O9Link href="/reports">Download report</O9Link>,
});`}
                  label="Title + link"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">React — custom timeout & persistent</h3>
                <CodeBlock
                  code={`// Custom timeout (3 seconds)
show({ message: 'Auto-dismiss in 3s', timeout: 3000 });

// Persistent — stays until manually closed
show({ message: 'Stays until closed', fadeAway: false });`}
                  label="Timeout & persistent"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">React — programmatic close</h3>
                <CodeBlock
                  code={`const { show, close, closeAll } = useToast();

const id = show({ message: 'Closeable', fadeAway: false });
close(id);     // close specific toast
closeAll();    // close all toasts`}
                  label="Programmatic close"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Vanilla JS</h3>
                <CodeBlock
                  code={`import { O9Toast } from '@o9ds/js';

const toasts = O9Toast.initialize(document.body, {
  position: 'top-right',
  timeout: 5000,
});

const id = toasts.show({
  type: 'positive',
  message: 'Saved successfully!',
});

toasts.show({
  type: 'info',
  title: 'Report ready',
  message: 'Your export is available for download.',
  link: myLinkElement,
});

toasts.close(id);
toasts.closeAll();
toasts.destroy();`}
                  label="Vanilla JS"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">HTML — DOM structure</h3>
                <CodeBlock
                  code={`<div class="o9ds-toast-container o9ds-toast-container--top-right"
     role="region" aria-label="Notifications">

  <div class="o9ds-toast o9ds-toast--positive" role="status" aria-atomic="true">
    <span class="o9ds-toast__ico o9con" aria-hidden="true"></span>
    <div class="o9ds-toast__content">
      <p class="o9ds-toast__title">Changes saved</p>
      <p class="o9ds-toast__msg">Your data has been persisted.</p>
    </div>
    <button class="o9ds-toast__close" aria-label="Close notification">
      <span class="o9con o9con-close"></span>
    </button>
  </div>

</div>`}
                  label="HTML"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">HTML — error toast (role="alert")</h3>
                <CodeBlock
                  code={`<div class="o9ds-toast o9ds-toast--negative" role="alert" aria-atomic="true">
  <span class="o9ds-toast__ico o9con" aria-hidden="true"></span>
  <div class="o9ds-toast__content">
    <p class="o9ds-toast__title">Save failed</p>
    <p class="o9ds-toast__msg">Unable to save changes. Please try again.</p>
  </div>
  <button class="o9ds-toast__close" aria-label="Close notification">
    <span class="o9con o9con-close"></span>
  </button>
</div>`}
                  label="HTML error"
                />
              </div>
            </section>

            <section id="code-css" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">CSS variables</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                Override on <code className="px-1 py-0.5" data-o9ds-inline-code>.o9ds-toast</code> or a parent scope to customize.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { cat: 'Container', vars: ['--o9ds-toast-width', '--o9ds-toast-gap', '--o9ds-toast-z-index'] },
                  { cat: 'Layout', vars: ['--o9ds-toast-padding', '--o9ds-toast-border-left-width', '--o9ds-toast-content-gap', '--o9ds-toast-link-gap'] },
                  { cat: 'Icon', vars: ['--o9ds-toast-icon-size'] },
                  { cat: 'Colors', vars: ['--o9ds-toast-bg', '--o9ds-toast-msg-color', '--o9ds-toast-border-color', '--o9ds-toast-title-color', '--o9ds-toast-icon-color', '--o9ds-toast-close-color'] },
                  { cat: 'Shadow', vars: ['--o9ds-toast-shadow'] },
                  { cat: 'Animation', vars: ['--o9ds-toast-fade-duration', '--o9ds-toast-fade-timing', '--o9ds-toast-enter-duration', '--o9ds-toast-exit-duration'] },
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

            <section id="code-tokens" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Tokens & mapping</h2>
              <DocTable
                columns={[
                  { key: 'map', label: 'Mapping' },
                  { key: 'detail', label: 'Notes' },
                ]}
                rows={[
                  { map: 'type → BEM modifier', detail: 'o9ds-toast--positive | info | warning | neutral | negative | block' },
                  { map: 'position → container modifier', detail: 'o9ds-toast-container--top-right | top-left | bottom-right | bottom-left' },
                  { map: 'fading → state class', detail: '.is-fading on the toast element during fade-out' },
                  { map: 'paused → state class', detail: '.is-paused during hover — timer and fade frozen' },
                  { map: 'title typography', detail: 'o9ds-font-h14-m (14px, medium, line-height: 1)' },
                  { map: 'message typography', detail: 'o9ds-font-p12-r (12px, regular, line-height: 1)' },
                  { map: 'link typography', detail: 'o9ds-font-l12-ru (12px, regular, underline)' },
                ]}
              />
            </section>
          </div>
        )}

        {activeTab === 'Accessibility' && (
          <section id="toast-accessibility" className="space-y-12">
            <div id="a11y-intro" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Toast accessibility</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Toasts are non-modal notifications that must be perceivable by assistive technology without stealing focus. They use ARIA live regions to announce content, with the urgency level determined by the semantic type. Prefer the React <code className="px-1 py-0.5" data-o9ds-inline-code>O9ToastProvider</code> or the documented HTML structure so roles, live regions, and labeling stay correct.
              </p>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                The toast container has <code className="px-1 py-0.5" data-o9ds-inline-code>role="region"</code> and <code className="px-1 py-0.5" data-o9ds-inline-code>aria-label="Notifications"</code>.
              </p>
            </div>

            <div id="a11y-roles" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Roles & live regions</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The ARIA role on each toast determines how urgently screen readers announce it.
              </p>
              <DocTable
                columns={[
                  { key: 'role', label: 'Role', mono: true },
                  { key: 'types', label: 'Types' },
                  { key: 'behavior', label: 'Behavior' },
                ]}
                rows={[
                  { role: 'status', types: 'info, positive, warning, neutral', behavior: 'Implicit aria-live="polite" — announced at the next pause in speech' },
                  { role: 'alert', types: 'negative, block', behavior: 'Implicit aria-live="assertive" — announced immediately, interrupting current speech' },
                ]}
              />
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                Each toast also carries <code className="px-1 py-0.5" data-o9ds-inline-code>aria-atomic="true"</code> so the full content (title + message) is announced as a unit, not just the changed portions.
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
                  { key: 'Tab', behavior: 'Moves focus into the toast; focus order: link (if present) → close button' },
                  { key: 'Escape', behavior: 'Closes the currently focused toast' },
                  { key: 'Enter', behavior: 'Activates the focused link within the toast' },
                ]}
              />
            </div>

            <div id="a11y-focus" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Focus behavior</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">On appear:</strong> Toast does not steal focus. Screen readers announce via the live region.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">On close:</strong> If the closed toast had focus, focus moves to the next toast in the stack. If no toasts remain, focus returns to the previously focused element.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Close button:</strong> Always visible and tappable (no hover-dependent visibility). Shows a focus ring via <code className="px-1 py-0.5" data-o9ds-inline-code>:focus-visible</code>.</li>
              </ul>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <strong className="text-o9ds-light-primary dark:text-white font-normal">WCAG:</strong> 2.4.7 Focus Visible · 2.4.3 Focus Order
              </p>
            </div>

            <div id="a11y-screen-reader" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Screen reader announcements</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Screen readers announce the toast content based on the role. The icon element has <code className="px-1 py-0.5" data-o9ds-inline-code>aria-hidden="true"</code> since the title and message convey the information. The close button has <code className="px-1 py-0.5" data-o9ds-inline-code>aria-label="Close notification"</code>.
              </p>
              <p className="text-sm font-medium text-o9ds-light-primary dark:text-white">Example announcements</p>
              <ul className="list-none space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400 pl-0">
                <li>"Changes saved successfully" (positive, polite)</li>
                <li>"Error: Save failed — Unable to save changes. Please try again." (negative, assertive)</li>
                <li>"Report generated — Your export is ready." (info, polite)</li>
              </ul>
            </div>

            <div id="a11y-reduced-motion" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Reduced motion</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                When <code className="px-1 py-0.5" data-o9ds-inline-code>prefers-reduced-motion</code> is active, skip the fade animation entirely and remove the toast immediately after timeout. Enter and exit slide animations are also disabled.
              </p>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <strong className="text-o9ds-light-primary dark:text-white font-normal">WCAG:</strong> 2.3.3 Animation from Interactions
              </p>
            </div>

            <div id="a11y-notes" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Accessibility notes</h3>
              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
                <WhiteBgCard title="Live region behavior">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Info, positive, warning, and neutral toasts use <code className="px-1 py-0.5" data-o9ds-inline-code>role="status"</code> for polite announcement. Negative and block toasts use <code className="px-1 py-0.5" data-o9ds-inline-code>role="alert"</code> for immediate, assertive announcement.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="No focus theft">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Toasts never steal focus when they appear. They announce via the live region while the user continues their current task. Focus only enters a toast when the user explicitly tabs to it.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Icon semantics">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    The icon element carries <code className="px-1 py-0.5" data-o9ds-inline-code>aria-hidden="true"</code> because the title and message text fully convey the toast's meaning. Do not rely on the icon alone for meaning.
                  </p>
                </WhiteBgCard>
              </div>
            </div>

            <div id="a11y-supported-aria" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Supported ARIA attributes</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 mb-4">
                Do not add ARIA that duplicates native semantics provided by the role.
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
          </section>
        )}
      </div>
    </PageWithToc>
  )
}
