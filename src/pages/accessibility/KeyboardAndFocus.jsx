import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import AccessibilityDocPage from './AccessibilityDocPage'
import CodeBlock from '../../LayoutComponents/CodeBlock'
import DocTable from '../../LayoutComponents/DocTable'

const toc = [
  { id: 'a11y-kb-intro', label: 'Introduction' },
  { id: 'a11y-kb-principle', label: 'Core principle' },
  { id: 'a11y-kb-layout', label: 'Single vs multi-column layouts' },
  { id: 'a11y-kb-standard', label: 'Standard keys' },
  { id: 'a11y-kb-focus-visible', label: ':focus vs :focus-visible' },
  { id: 'a11y-kb-order', label: 'Focus order and DOM' },
  { id: 'a11y-kb-submit-invalid', label: 'Forms: focus first error' },
  { id: 'a11y-kb-tabindex', label: 'tabindex' },
  { id: 'a11y-kb-initial', label: 'Initial focus and tab order' },
  { id: 'a11y-kb-trap', label: 'Focus trapping' },
  { id: 'a11y-kb-return', label: 'Focus return' },
  { id: 'a11y-kb-esc', label: 'Single vs multi Esc' },
  { id: 'a11y-kb-nested', label: 'Nested overlays' },
  { id: 'a11y-kb-roving', label: 'Roving tabindex' },
  { id: 'a11y-kb-active', label: 'aria-activedescendant' },
  { id: 'a11y-kb-delete', label: 'Focus after deletion (lists)' },
]

const focusCss = `button:focus-visible,
a:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}`

/** o9ds-font-l12-r — label token (12px / 400) for interactive form labels. */
const tokenLabelL12RClassName =
  'mb-1 block text-xs font-normal text-[var(--o9ds-text-primary)] dark:text-white'

/** Bottom border only (default: --o9ds-color-b-form); focus emphasizes bottom edge. 8px horizontal padding. */
const tokenFieldClassName =
  'w-full rounded-none border-0 border-b border-[color:var(--o9ds-color-b-form)] px-2 py-2 text-sm bg-white text-[var(--o9ds-text-primary)] placeholder:text-[var(--o9ds-color-t-placeholder)] focus:outline-none focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-b-[#010101] dark:bg-[#010101] dark:text-white dark:placeholder:text-neutral-500 dark:focus-visible:border-b-white'

/** Same as default field, but error border/focus use --o9ds-color-b-negative. */
const tokenFieldErrorClassName =
  'w-full rounded-none border-0 border-b-2 border-[color:var(--o9ds-color-b-negative)] px-2 py-2 text-sm bg-white text-[var(--o9ds-text-primary)] placeholder:text-[var(--o9ds-color-t-placeholder)] focus:outline-none focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-b-[color:var(--o9ds-color-b-negative)] dark:bg-[#010101] dark:text-white dark:placeholder:text-neutral-500'

/** Card surface: #F2F2F2 in light; dark panel unchanged for contrast with #010101 inputs. */
const tokenFormDemoSurfaceClassName =
  'space-y-4 overflow-hidden border border-o9ds-light-border bg-[#F2F2F2] p-4 dark:border-neutral-700 dark:bg-[rgba(38,38,38,0.5)]'

const tokenButtonSecondaryClassName =
  'rounded-none border border-o9ds-light-border dark:border-neutral-600 bg-transparent px-4 py-2 text-sm font-medium text-o9ds-light-primary dark:text-white'

const tokenButtonPrimaryClassName =
  'rounded-none border border-o9ds-light-primary dark:border-white bg-o9ds-light-primary dark:bg-white px-4 py-2 text-sm font-medium text-white dark:text-o9ds-light-primary'

/** o9ds-font-h16-m + color-t-primary — dialog titles on Keyboard & focus demos */
const kbDialogTitleClassName = 'text-base font-medium text-[color:var(--o9ds-color-t-primary)]'

/** Labels inside a11y demo dialogs */
const kbDialogLabelClassName =
  'mb-1 block text-xs font-normal text-[color:var(--o9ds-color-t-primary)]'

/** Underline inputs: field fill s-layer-04 (index.css); focus = b-theme-focus bottom border only */
const kbDialogFieldClassName =
  'kb-a11y-dialog-field w-full rounded-none border-0 px-2 py-2 text-sm text-[color:var(--o9ds-color-t-primary)] placeholder:text-[var(--o9ds-color-t-placeholder)]'

const kbDialogHowToClassName =
  'mt-2 max-w-xl text-xs leading-relaxed text-o9ds-light-secondary dark:text-neutral-500'

function KbDialogHowTo({ children }) {
  return (
    <p className={kbDialogHowToClassName}>
      <strong className="font-semibold text-o9ds-light-primary dark:text-white">How to try it: </strong>
      {children}
    </p>
  )
}

const escColumns = [
  { key: 'scenario', label: 'Scenario', primary: true },
  { key: 'behavior', label: 'Esc key and focus behavior' },
]

const TAB_INITIAL_FOCUS_TABS = ['Overview', 'Settings', 'Activity']

function getFocusableInDialog(container) {
  if (!container) return []
  const sel = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled])'
  return Array.from(container.querySelectorAll(sel)).filter((el) => {
    if (el.getAttribute('tabindex') === '-1') return false
    return el.tabIndex >= 0
  })
}

function handleDialogFocusTrapKeyDown(dialogRef, close) {
  return (e) => {
    if (e.key === 'Escape') {
      e.stopPropagation()
      close()
      return
    }
    if (e.key !== 'Tab') return
    const root = dialogRef.current
    if (!root) return
    const focusables = getFocusableInDialog(root)
    if (focusables.length === 0) return
    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    const active = document.activeElement
    if (!root.contains(active)) {
      e.preventDefault()
      first.focus()
      return
    }
    if (active !== root && !focusables.includes(active)) {
      e.preventDefault()
      e.shiftKey ? last.focus() : first.focus()
      return
    }
    if (active === root) {
      e.preventDefault()
      e.shiftKey ? last.focus() : first.focus()
      return
    }
    if (first === last) {
      e.preventDefault()
      first.focus()
      return
    }
    if (e.shiftKey) {
      if (active === first) {
        e.preventDefault()
        last.focus()
      }
    } else if (active === last) {
      e.preventDefault()
      first.focus()
    }
  }
}

/**
 * Shared modal shell: header, body, and footer all on s-layer-03; form controls use s-layer-04 on the field only.
 * Optional: footer off (f), initial focus on dialog container (tabIndex -1), or on primary footer control (e).
 */
function KeyboardA11yDemoDialog({
  open,
  close,
  triggerRef,
  dialogRef,
  titleId,
  children,
  showFooter = true,
  primaryFooterRef = null,
  containerInitialFocus = false,
}) {
  const wasOpenRef = useRef(false)

  useEffect(() => {
    if (wasOpenRef.current && !open) {
      triggerRef.current?.focus()
    }
    wasOpenRef.current = open
  }, [open, triggerRef])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  useLayoutEffect(() => {
    if (!open) return
    if (containerInitialFocus) {
      dialogRef.current?.focus()
      return
    }
    if (primaryFooterRef?.current) {
      primaryFooterRef.current.focus()
    }
  }, [open, containerInitialFocus, primaryFooterRef, dialogRef])

  if (!open) return null

  return createPortal(
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
      <div
        className="o9ds-mask-overlay absolute inset-0 cursor-default"
        onClick={close}
        aria-hidden="true"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={containerInitialFocus ? -1 : undefined}
        data-o9ds-kb-a11y-dialog
        className="relative z-10 flex w-full max-w-lg flex-col border border-o9ds-light-border bg-[color:var(--o9ds-color-s-layer-03)] shadow-lg dark:border-neutral-600"
        onKeyDown={handleDialogFocusTrapKeyDown(dialogRef, close)}
      >
        <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5">
          <h2 id={titleId} className={kbDialogTitleClassName}>
            Demo Example
          </h2>
          <button
            type="button"
            onClick={close}
            className="flex h-9 w-9 shrink-0 items-center justify-center border border-[color:var(--o9ds-color-b-form)] text-[color:var(--o9ds-color-t-primary)] transition-opacity hover:opacity-80"
            aria-label="Close"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="px-4 pb-4 sm:px-5">{children}</div>
        {showFooter ? (
          <div className="flex flex-wrap justify-end gap-2 px-4 py-3 sm:px-5">
            <button type="button" onClick={close} className={tokenButtonSecondaryClassName}>
              Cancel
            </button>
            <button
              ref={primaryFooterRef ?? undefined}
              type="button"
              onClick={close}
              className={tokenButtonPrimaryClassName}
            >
              OK
            </button>
          </div>
        ) : null}
      </div>
    </div>,
    document.body
  )
}

/** Dialog with tab strip: opening moves initial focus to the active tab. */
function TabStripInitialFocusDemo() {
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState(TAB_INITIAL_FOCUS_TABS[0])
  const [tabIndicator, setTabIndicator] = useState({ left: 0, width: 0 })
  const openBtnRef = useRef(null)
  const dialogRef = useRef(null)
  const tabListRef = useRef(null)
  const titleId = 'a11y-kb-tab-initial-demo-title'

  const close = () => setOpen(false)

  useEffect(() => {
    if (!open) return
    const id = window.requestAnimationFrame(() => {
      tabListRef.current?.querySelector('[role="tab"][aria-selected="true"]')?.focus()
    })
    return () => window.cancelAnimationFrame(id)
  }, [open])

  useEffect(() => {
    if (!open) return
    const list = tabListRef.current
    if (!list) return
    const idx = TAB_INITIAL_FOCUS_TABS.indexOf(activeTab)
    if (idx < 0) return
    const tabs = list.querySelectorAll('[role="tab"]')
    const btn = tabs[idx]
    if (!btn) return
    const listRect = list.getBoundingClientRect()
    const btnRect = btn.getBoundingClientRect()
    setTabIndicator({
      left: btnRect.left - listRect.left,
      width: btnRect.width,
    })
  }, [open, activeTab])

  const handleTabListKeyDown = (e) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return
    const idx = TAB_INITIAL_FOCUS_TABS.indexOf(activeTab)
    if (idx < 0) return
    e.preventDefault()
    const next =
      e.key === 'ArrowRight' ? (idx + 1) % TAB_INITIAL_FOCUS_TABS.length : (idx - 1 + TAB_INITIAL_FOCUS_TABS.length) % TAB_INITIAL_FOCUS_TABS.length
    setActiveTab(TAB_INITIAL_FOCUS_TABS[next])
    window.setTimeout(() => tabListRef.current?.querySelectorAll('[role="tab"]')[next]?.focus(), 0)
  }

  return (
    <>
      <button
        ref={openBtnRef}
        type="button"
        className={tokenButtonSecondaryClassName}
        onClick={() => {
          setActiveTab(TAB_INITIAL_FOCUS_TABS[0])
          setOpen(true)
        }}
      >
        View Example
      </button>
      <KbDialogHowTo>
        Activate <strong className="text-o9ds-light-primary dark:text-white">View Example</strong> (click or when the button is focused, press{' '}
        <strong className="text-o9ds-light-primary dark:text-white">Enter</strong> or <strong className="text-o9ds-light-primary dark:text-white">Space</strong>
        ). On open, focus should land on the <strong className="text-o9ds-light-primary dark:text-white">Overview</strong> tab. Use{' '}
        <strong className="text-o9ds-light-primary dark:text-white">Left Arrow</strong> / <strong className="text-o9ds-light-primary dark:text-white">Right Arrow</strong> to
        change tabs; use <strong className="text-o9ds-light-primary dark:text-white">Tab</strong> / <strong className="text-o9ds-light-primary dark:text-white">Shift+Tab</strong> to
        move through the dialog. Press <strong className="text-o9ds-light-primary dark:text-white">Esc</strong> or use the close control / footer buttons to dismiss.
      </KbDialogHowTo>
      <KeyboardA11yDemoDialog
        open={open}
        close={close}
        triggerRef={openBtnRef}
        dialogRef={dialogRef}
        titleId={titleId}
      >
        <div
          ref={tabListRef}
          role="tablist"
          aria-label="Example tabs"
          className="relative mt-1 flex gap-6"
          data-o9ds-tabs
          onKeyDown={handleTabListKeyDown}
        >
          {TAB_INITIAL_FOCUS_TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              aria-controls={`a11y-kb-tab-panel-${tab}`}
              id={`a11y-kb-tab-${tab}`}
              tabIndex={activeTab === tab ? 0 : -1}
              data-o9ds-tab-active={activeTab === tab ? '' : undefined}
              onClick={() => {
                setActiveTab(tab)
                window.setTimeout(() => document.getElementById(`a11y-kb-tab-${tab}`)?.focus(), 0)
              }}
              className={`relative z-10 pb-3 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'text-[color:var(--o9ds-color-t-primary)]'
                  : 'text-[color:var(--o9ds-color-t-secondary)] hover:text-[color:var(--o9ds-color-t-primary)]'
              }`}
            >
              {tab}
            </button>
          ))}
          <span
            className="pointer-events-none absolute -bottom-px z-20 h-0.5 bg-[color:var(--o9ds-color-b-theme-focus)] transition-[left,width] duration-300 ease-out"
            style={{
              left: tabIndicator.left,
              width: tabIndicator.width,
            }}
            aria-hidden
          />
        </div>
        {TAB_INITIAL_FOCUS_TABS.map((tab) => (
          <div
            key={tab}
            role="tabpanel"
            id={`a11y-kb-tab-panel-${tab}`}
            aria-labelledby={`a11y-kb-tab-${tab}`}
            hidden={activeTab !== tab}
            className="pt-3 text-sm text-[color:var(--o9ds-color-t-secondary)]"
          >
            <p>
              Panel for <strong className="text-[color:var(--o9ds-color-t-primary)]">{tab}</strong>. On open, initial focus moves to the{' '}
              <strong className="text-[color:var(--o9ds-color-t-primary)]">active tab</strong> in the tab list (not the header close control).
            </p>
          </div>
        ))}
      </KeyboardA11yDemoDialog>
    </>
  )
}

/** Same dialog shell; opening moves initial focus to the first field in the body. */
function FormBodyInitialFocusDemo({ howToPurpose = 'initial' }) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const openBtnRef = useRef(null)
  const dialogRef = useRef(null)
  const firstFieldRef = useRef(null)
  const titleId = 'a11y-kb-form-body-initial-demo-title'

  const close = () => setOpen(false)

  useEffect(() => {
    if (!open) return
    const id = window.requestAnimationFrame(() => {
      firstFieldRef.current?.focus()
    })
    return () => window.cancelAnimationFrame(id)
  }, [open])

  const howTo =
    howToPurpose === 'trap' ? (
      <>
        Open the dialog, then press <strong className="text-o9ds-light-primary dark:text-white">Tab</strong> and{' '}
        <strong className="text-o9ds-light-primary dark:text-white">Shift+Tab</strong> many times—focus should stay inside the dialog (close control, fields, footer) and
        never jump to the page behind the overlay. Press <strong className="text-o9ds-light-primary dark:text-white">Esc</strong> to close.
      </>
    ) : howToPurpose === 'return' ? (
      <>
        Open the dialog, then close with <strong className="text-o9ds-light-primary dark:text-white">Esc</strong>,{' '}
        <strong className="text-o9ds-light-primary dark:text-white">OK</strong>, <strong className="text-o9ds-light-primary dark:text-white">Cancel</strong>, or the header
        close control—keyboard focus should move back to this <strong className="text-o9ds-light-primary dark:text-white">View Example</strong> button.
      </>
    ) : (
      <>
        Open with a click or, when <strong className="text-o9ds-light-primary dark:text-white">View Example</strong> is focused,{' '}
        <strong className="text-o9ds-light-primary dark:text-white">Enter</strong> / <strong className="text-o9ds-light-primary dark:text-white">Space</strong>. Initial focus
        should land in the <strong className="text-o9ds-light-primary dark:text-white">Name</strong> field; <strong className="text-o9ds-light-primary dark:text-white">Tab</strong>{' '}
        through <strong className="text-o9ds-light-primary dark:text-white">Email</strong> and the footer. <strong className="text-o9ds-light-primary dark:text-white">Esc</strong>{' '}
        closes the dialog.
      </>
    )

  return (
    <>
      <button ref={openBtnRef} type="button" className={tokenButtonSecondaryClassName} onClick={() => setOpen(true)}>
        View Example
      </button>
      <KbDialogHowTo>{howTo}</KbDialogHowTo>
      <KeyboardA11yDemoDialog
        open={open}
        close={close}
        triggerRef={openBtnRef}
        dialogRef={dialogRef}
        titleId={titleId}
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="a11y-kb-form-body-name" className={kbDialogLabelClassName}>
              Name
            </label>
            <input
              ref={firstFieldRef}
              id="a11y-kb-form-body-name"
              name="demoName"
              type="text"
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={kbDialogFieldClassName}
            />
          </div>
          <div>
            <label htmlFor="a11y-kb-form-body-email" className={kbDialogLabelClassName}>
              Email
            </label>
            <input
              id="a11y-kb-form-body-email"
              name="demoEmail"
              type="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={kbDialogFieldClassName}
            />
          </div>
        </div>
      </KeyboardA11yDemoDialog>
    </>
  )
}

/** Body is static copy only; initial focus on primary (OK) in the footer. */
function FooterOnlyInitialFocusDemo() {
  const [open, setOpen] = useState(false)
  const openBtnRef = useRef(null)
  const dialogRef = useRef(null)
  const okRef = useRef(null)
  const titleId = 'a11y-kb-footer-only-initial-demo-title'
  const close = () => setOpen(false)

  return (
    <>
      <button ref={openBtnRef} type="button" className={tokenButtonSecondaryClassName} onClick={() => setOpen(true)}>
        View Example
      </button>
      <KbDialogHowTo>
        Open the dialog; initial focus should be on <strong className="text-o9ds-light-primary dark:text-white">OK</strong>. Use{' '}
        <strong className="text-o9ds-light-primary dark:text-white">Tab</strong> / <strong className="text-o9ds-light-primary dark:text-white">Shift+Tab</strong> to move between{' '}
        <strong className="text-o9ds-light-primary dark:text-white">OK</strong>, <strong className="text-o9ds-light-primary dark:text-white">Cancel</strong>, and the header
        close control. <strong className="text-o9ds-light-primary dark:text-white">Esc</strong> closes.
      </KbDialogHowTo>
      <KeyboardA11yDemoDialog
        open={open}
        close={close}
        triggerRef={openBtnRef}
        dialogRef={dialogRef}
        titleId={titleId}
        primaryFooterRef={okRef}
      >
        <p className="text-sm leading-relaxed text-[color:var(--o9ds-color-t-secondary)]">
          No tab strip or inputs here—only this message and the footer actions. Initial focus is on <strong className="text-[color:var(--o9ds-color-t-primary)]">OK</strong>.
        </p>
      </KeyboardA11yDemoDialog>
    </>
  )
}

/** No footer actions; initial focus on the dialog surface (tabIndex -1); Tab moves to the header close control. */
function ContainerInitialFocusDemo() {
  const [open, setOpen] = useState(false)
  const openBtnRef = useRef(null)
  const dialogRef = useRef(null)
  const titleId = 'a11y-kb-container-initial-demo-title'
  const close = () => setOpen(false)

  return (
    <>
      <button ref={openBtnRef} type="button" className={tokenButtonSecondaryClassName} onClick={() => setOpen(true)}>
        View Example
      </button>
      <KbDialogHowTo>
        Open the dialog; initial focus is on the dialog surface (not the close button). Press{' '}
        <strong className="text-o9ds-light-primary dark:text-white">Tab</strong> once to move focus to the header close control; there are no footer buttons in this variant.{' '}
        <strong className="text-o9ds-light-primary dark:text-white">Esc</strong> closes.
      </KbDialogHowTo>
      <KeyboardA11yDemoDialog
        open={open}
        close={close}
        triggerRef={openBtnRef}
        dialogRef={dialogRef}
        titleId={titleId}
        showFooter={false}
        containerInitialFocus
      >
        <p className="text-sm leading-relaxed text-[color:var(--o9ds-color-t-secondary)]">
          Message-only content. The dialog container receives initial focus; use <strong className="text-[color:var(--o9ds-color-t-primary)]">Tab</strong> to reach
          the close control.
        </p>
      </KeyboardA11yDemoDialog>
    </>
  )
}

/** Interactive: submit validates required fields in DOM order and focuses the first missing value. */
function SubmitInvalidDemo() {
  const [field1, setField1] = useState('')
  const [field2, setField2] = useState('')
  const [attempted, setAttempted] = useState(false)
  const firstRef = useRef(null)
  const secondRef = useRef(null)

  const showErr1 = attempted && !field1.trim()
  const showErr2 = attempted && !field2.trim()

  const handleSubmit = (e) => {
    e.preventDefault()
    setAttempted(true)
    if (!field1.trim()) {
      window.setTimeout(() => firstRef.current?.focus(), 0)
      return
    }
    if (!field2.trim()) {
      window.setTimeout(() => secondRef.current?.focus(), 0)
      return
    }
    setAttempted(false)
  }

  return (
    <form
      data-o9ds-kb-form-demo
      className={`${tokenFormDemoSurfaceClassName} max-w-xl`}
      onSubmit={handleSubmit}
      aria-label="Example: focus first invalid field on submit"
      noValidate
    >
      <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
        Press <strong className="text-o9ds-light-primary dark:text-white">Submit</strong> with empty values: focus moves to the first required field in DOM order; if the first is filled and the second is empty, focus moves to the second.
      </p>
      <div className="space-y-4">
        <div>
          <label htmlFor="kb-submit-inv-1" className={tokenLabelL12RClassName}>
            Required field 1
          </label>
          <input
            ref={firstRef}
            id="kb-submit-inv-1"
            name="req1"
            type="text"
            autoComplete="off"
            value={field1}
            onChange={(e) => setField1(e.target.value)}
            aria-invalid={showErr1 || undefined}
            aria-describedby={showErr1 ? 'kb-submit-inv-err-1' : undefined}
            className={showErr1 ? tokenFieldErrorClassName : tokenFieldClassName}
          />
          {showErr1 ? (
            <p id="kb-submit-inv-err-1" className="mt-1 text-xs text-[color:var(--o9ds-color-t-negative)]" role="alert">
              This field is required.
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="kb-submit-inv-2" className={tokenLabelL12RClassName}>
            Required field 2
          </label>
          <input
            ref={secondRef}
            id="kb-submit-inv-2"
            name="req2"
            type="text"
            autoComplete="off"
            value={field2}
            onChange={(e) => setField2(e.target.value)}
            aria-invalid={showErr2 || undefined}
            aria-describedby={showErr2 ? 'kb-submit-inv-err-2' : undefined}
            className={showErr2 ? tokenFieldErrorClassName : tokenFieldClassName}
          />
          {showErr2 ? (
            <p id="kb-submit-inv-err-2" className="mt-1 text-xs text-[color:var(--o9ds-color-t-negative)]" role="alert">
              This field is required.
            </p>
          ) : null}
        </div>
      </div>
      <div className="flex flex-wrap gap-3 border-t border-o9ds-light-border pt-4 dark:border-neutral-600">
        <button type="submit" className={tokenButtonPrimaryClassName}>
          Submit
        </button>
      </div>
    </form>
  )
}

const escRows = [
  {
    scenario: 'Dropdown or listbox open inside a modal, popover, or other container',
    behavior:
      'First Esc closes the inner overlay (dropdown). Second Esc closes the parent container. After each close, move focus appropriately—when the dropdown closes, focus typically returns to its trigger; when the container closes, focus returns to the element that opened the container.',
  },
  {
    scenario: 'Only a modal, popover, window, or dialog is open (no nested dropdown active)',
    behavior:
      'A single Esc closes that container. Focus returns to the element that triggered the overlay.',
  },
  {
    scenario: 'Outer overlay is open but the inner dropdown is not active',
    behavior:
      'First Esc closes the visible overlay and returns focus to the triggering element. Users should not need multiple Esc presses when there is only one dismissible layer.',
  },
]

export default function KeyboardAndFocus() {
  return (
    <AccessibilityDocPage
      title="Keyboard and focus"
      description="Keyboard operability, focus order, initial focus, focus-visible, trapping, Esc behavior, focus return, and list deletion—aligned with WCAG-style keyboard expectations."
      tocSections={toc}
    >
      <section id="a11y-kb-intro" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Introduction</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
          Keyboard accessibility ensures users can operate every interactive part of the experience without a mouse. This is essential for users with motor impairments, screen reader users, keyboard-only users, power users, and people in temporary or situational constraints.
        </p>
      </section>

      <section id="a11y-kb-principle" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Core keyboard principle</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed font-medium">
          If a user can perform an action with a mouse, they must also be able to perform it with a keyboard.
        </p>
      </section>

      <section id="a11y-kb-layout" className="space-y-6 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Keyboard operability: single-column vs multi-column layouts</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
          Keyboard users move through the page in <strong className="text-o9ds-light-primary dark:text-white">DOM order</strong>, not necessarily in the order the layout “looks” when scanned visually. That relationship is straightforward in a single-column, linear layout: reading order and tab order usually match if the DOM follows the same top-to-bottom sequence.
        </p>

        <div className="space-y-4 border border-o9ds-light-border dark:border-neutral-700 p-5">
          <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Single-column (linear) layouts</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400">
            <li>Tab typically follows one vertical flow; fewer opportunities for visual order to disagree with DOM order.</li>
            <li>Still validate reading order for responsive breakpoints—content that reorders at different widths must keep a sensible tab sequence.</li>
          </ul>
          <p className="pt-2 text-sm font-medium text-o9ds-light-primary dark:text-white">Example</p>
          <p className="text-xs text-o9ds-light-secondary dark:text-neutral-500">
            DOM order for single column (top → bottom), then the footer actions—Tab follows that sequence.
          </p>
          <form
            className={tokenFormDemoSurfaceClassName}
            data-o9ds-kb-form-demo
            onSubmit={(e) => e.preventDefault()}
            aria-label="Demo single-column form"
          >
            <div className="space-y-3">
              <div>
                <label htmlFor="kb-demo-linear-1" className={tokenLabelL12RClassName}>
                  Project name
                </label>
                <input id="kb-demo-linear-1" name="linear1" type="text" autoComplete="off" className={tokenFieldClassName} placeholder="e.g. North America rollout" />
              </div>
              <div>
                <label htmlFor="kb-demo-linear-2" className={tokenLabelL12RClassName}>
                  Owner
                </label>
                <input id="kb-demo-linear-2" name="linear2" type="text" autoComplete="off" className={tokenFieldClassName} placeholder="Team or person" />
              </div>
              <div>
                <label htmlFor="kb-demo-linear-3" className={tokenLabelL12RClassName}>
                  Description
                </label>
                <input id="kb-demo-linear-3" name="linear3" type="text" autoComplete="off" className={tokenFieldClassName} placeholder="Short summary" />
              </div>
            </div>
            <div className="flex flex-wrap gap-3 border-t border-o9ds-light-border pt-4 dark:border-neutral-600">
              <button type="button" className={tokenButtonSecondaryClassName}>
                Cancel
              </button>
              <button type="submit" className={tokenButtonPrimaryClassName}>
                Save
              </button>
            </div>
          </form>
        </div>

        <div className="space-y-4 border border-o9ds-light-border dark:border-neutral-700 p-5">
          <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Multi-column layouts (e.g. two columns)</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400">
            <li>
              Visual reading order may be left column then right column, or main column then rail—keyboard focus follows the <strong className="text-o9ds-light-primary dark:text-white">order of elements in the DOM</strong>.
            </li>
            <li>
              If the DOM is ordered incorrectly (for example, sidebar before main in the DOM but main appears first visually), Tab will jump in a way that feels broken. Structure the DOM to match the intended task and reading order, then use CSS for placement.
            </li>
            <li>
              Avoid positive <code className="px-1" data-o9ds-inline-code>tabindex</code> values to “patch” order—fix document structure instead.
            </li>
            <li>
              At narrow widths, multi-column layouts often stack into a single column; test keyboard order in both stacked and side-by-side states.
            </li>
          </ul>
          <p className="pt-2 text-sm font-medium text-o9ds-light-primary dark:text-white">Example</p>
          <p className="text-xs text-o9ds-light-secondary dark:text-neutral-500">
            DOM order is <strong className="text-o9ds-light-primary dark:text-white">left column (top → bottom)</strong>, then{' '}
            <strong className="text-o9ds-light-primary dark:text-white">right column (top → bottom)</strong>, then the footer actions—Tab follows that sequence.
          </p>
          <form
            className={tokenFormDemoSurfaceClassName}
            data-o9ds-kb-form-demo
            onSubmit={(e) => e.preventDefault()}
            aria-label="Demo two-column form"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              <div className="space-y-3">
                <div>
                  <label htmlFor="kb-demo-mc-l1" className={tokenLabelL12RClassName}>
                    Account
                  </label>
                  <input id="kb-demo-mc-l1" name="mcL1" type="text" autoComplete="off" className={tokenFieldClassName} />
                </div>
                <div>
                  <label htmlFor="kb-demo-mc-l2" className={tokenLabelL12RClassName}>
                    Region
                  </label>
                  <input id="kb-demo-mc-l2" name="mcL2" type="text" autoComplete="off" className={tokenFieldClassName} />
                </div>
                <div>
                  <label htmlFor="kb-demo-mc-l3" className={tokenLabelL12RClassName}>
                    Segment
                  </label>
                  <input id="kb-demo-mc-l3" name="mcL3" type="text" autoComplete="off" className={tokenFieldClassName} />
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <label htmlFor="kb-demo-mc-r1" className={tokenLabelL12RClassName}>
                    Start date
                  </label>
                  <input id="kb-demo-mc-r1" name="mcR1" type="text" autoComplete="off" className={tokenFieldClassName} placeholder="YYYY-MM-DD" />
                </div>
                <div>
                  <label htmlFor="kb-demo-mc-r2" className={tokenLabelL12RClassName}>
                    End date
                  </label>
                  <input id="kb-demo-mc-r2" name="mcR2" type="text" autoComplete="off" className={tokenFieldClassName} placeholder="YYYY-MM-DD" />
                </div>
                <div>
                  <label htmlFor="kb-demo-mc-r3" className={tokenLabelL12RClassName}>
                    Notes
                  </label>
                  <input id="kb-demo-mc-r3" name="mcR3" type="text" autoComplete="off" className={tokenFieldClassName} />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 border-t border-o9ds-light-border pt-4 dark:border-neutral-600">
              <button type="button" className={tokenButtonSecondaryClassName}>
                Cancel
              </button>
              <button type="submit" className={tokenButtonPrimaryClassName}>
                Save
              </button>
            </div>
          </form>
        </div>
      </section>

      <section id="a11y-kb-standard" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Standard expectations</h2>
        <ul className="list-disc list-inside space-y-2 text-o9ds-light-secondary dark:text-neutral-400 text-sm">
          <li>
            <strong className="text-o9ds-light-primary dark:text-white">Tab / Shift+Tab</strong> — Move forward and backward between tab stops.
          </li>
          <li>
            <strong className="text-o9ds-light-primary dark:text-white">Enter / Space</strong> — Activate controls according to native behavior.
          </li>
          <li>
            <strong className="text-o9ds-light-primary dark:text-white">Arrow keys</strong> — Move within composite widgets (menus, tablists, radio groups, listboxes, toolbars).
          </li>
          <li>
            <strong className="text-o9ds-light-primary dark:text-white">Esc</strong> — Close the topmost dismissible layer (see the section <em>Single vs multi Esc</em> below).
          </li>
        </ul>
      </section>

      <section id="a11y-kb-focus-visible" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Keyboard-only focus: <code className="text-base px-1" data-o9ds-inline-code>:focus</code> vs <code className="text-base px-1" data-o9ds-inline-code>:focus-visible</code></h2>
        <div className="space-y-3 text-sm text-o9ds-light-secondary dark:text-neutral-400">
          <p>
            <strong className="text-o9ds-light-primary dark:text-white">:focus</strong> matches when an element receives focus from <em>any</em> input modality—keyboard, mouse, programmatic focus, etc. Styling every focus with a strong ring can mean users see a focus ring after clicking with a mouse, which some teams find visually noisy.
          </p>
          <p>
            <strong className="text-o9ds-light-primary dark:text-white">:focus-visible</strong> is designed so the browser shows the focus indicator when it is most relevant—typically when focus arrives via keyboard (or when keyboard-like navigation is used), and often <em>not</em> for simple mouse clicks on buttons and links. This reduces visual clutter for pointer users while preserving a clear indicator for keyboard users.
          </p>
        </div>
        <div className="border border-o9ds-light-border dark:border-neutral-700 p-5 space-y-2">
          <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Best practice for this design system</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400">
            <li>Avoid showing a prominent focus ring on every mouse click when the platform supports <code className="px-1" data-o9ds-inline-code>:focus-visible</code>.</li>
            <li>Ensure keyboard users still get a <strong className="text-o9ds-light-primary dark:text-white">strong, high-contrast</strong> visible indicator—meet contrast requirements against adjacent colors.</li>
          </ul>
          <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 pt-2">
            This balances accessibility with visual cleanliness: keyboard users get an unambiguous focus location; pointer users are not overwhelmed by rings on every click.
          </p>
        </div>
        <div className="space-y-4 border border-o9ds-light-border dark:border-neutral-700 p-5" data-o9ds-kb-focus-demo>
          <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Live comparison</h3>
          <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
            <strong className="text-o9ds-light-primary dark:text-white">:focus btn</strong> — the demo outline uses{' '}
            <code className="px-1" data-o9ds-inline-code>:focus</code> only (#010101 in light, white in dark): you should see the ring after a <em>mouse click</em> and when the control is focused.{' '}
            <strong className="text-o9ds-light-primary dark:text-white">:focus-visible btn</strong> — outline only on{' '}
            <code className="px-1" data-o9ds-inline-code>:focus-visible</code> with the same colors: many browsers hide the ring on a simple click but show it when focus moves with the keyboard.
          </p>
          <div className="flex flex-wrap items-start gap-4">
            <button type="button" className={`o9ds-a11y-focus-only ${tokenButtonSecondaryClassName}`}>
              :focus btn
            </button>
            <button type="button" className={`o9ds-a11y-focus-visible-only ${tokenButtonSecondaryClassName}`}>
              :focus-visible btn
            </button>
          </div>
        </div>
        <CodeBlock code={focusCss} label="Example: focus-visible outline on interactive elements" />
      </section>

      <section id="a11y-kb-order" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Focus order and DOM order</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
          Focus order must follow a logical sequence aligned with reading and task completion. In most interfaces that means top-to-bottom, left-to-right <em>as reflected in the DOM</em> for multi-column pages. Do not create a visual order that conflicts with DOM order—keyboard users will follow Tab through the DOM, not through the visual scan path unless the two match.
        </p>
      </section>

      <section id="a11y-kb-submit-invalid" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Forms: move focus to the first invalid field on submit</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
          When the user activates the <strong className="text-o9ds-light-primary dark:text-white">primary submit action</strong> and validation fails, move <strong className="text-o9ds-light-primary dark:text-white">keyboard focus to the first field in error</strong> (usually in DOM order). That matches how sighted users scan for errors and lets screen reader users land on the control that needs correction. Optionally pair with a polite live region for an error count—see <strong className="text-o9ds-light-primary dark:text-white">Screen reader and ARIA</strong> → <em>Live regions</em>.
        </p>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
          For very long forms, an alternative is moving focus to an <strong className="text-o9ds-light-primary dark:text-white">error summary</strong> at the top with links to each field; pick one pattern and use it consistently.
        </p>
        <p className="text-sm font-semibold text-o9ds-light-primary dark:text-white">Example</p>
        <SubmitInvalidDemo />
        <CodeBlock
          code={`form.addEventListener('submit', (event) => {
  const firstInvalid = form.querySelector(':invalid');
  if (firstInvalid) {
    event.preventDefault();
    firstInvalid.focus();
  }
});`}
          label="Example: prevent submit and focus first invalid control"
        />
      </section>

      <section id="a11y-kb-tabindex" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Focusable vs programmatically focusable</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
          <strong className="text-o9ds-light-primary dark:text-white">tabindex=&quot;0&quot;</strong> — Inserts the element in the normal tab order (for custom controls that are not natively focusable).{' '}
          <strong className="text-o9ds-light-primary dark:text-white">tabindex=&quot;-1&quot;</strong> — Removes the element from the tab sequence but allows programmatic focus (dialog containers, managed targets, roving tabindex siblings).{' '}
          <strong className="text-o9ds-light-primary dark:text-white">tabindex &gt; 0</strong> — Avoid: it overrides natural order and almost always harms predictability.
        </p>
      </section>

      <section id="a11y-kb-initial" className="space-y-8 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Define initial focus and tab order</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
          Establishing clear <strong className="text-o9ds-light-primary dark:text-white">initial focus</strong> when opening interactive containers (popups, modals, side panels, popovers, drawers, dropdown lists) is essential for accessibility and for a predictable experience. The first focused element should match the user’s task and reduce unnecessary Tab presses.
        </p>

        <div className="space-y-4 border border-o9ds-light-border dark:border-neutral-700 p-5">
          <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">a. Tab component present</h3>
          <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
            When a modal, side panel, popover, or similar container includes a tab strip, move <strong className="text-o9ds-light-primary dark:text-white">initial focus to the active tab</strong> (the selected tab panel’s corresponding tab). That aligns with user expectation that the tab interface controls the view.
          </p>
          <TabStripInitialFocusDemo />
        </div>

        <div className="space-y-4 border border-o9ds-light-border dark:border-neutral-700 p-5">
          <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">b. Form elements or buttons in the body</h3>
          <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
            If the body contains form fields or actionable buttons, move initial focus to the <strong className="text-o9ds-light-primary dark:text-white">first meaningful form element or button</strong> so keyboard and screen reader users can start interacting immediately. Order fields logically (labels, required indicators, and errors must remain programmatically associated).
          </p>
          <FormBodyInitialFocusDemo />
        </div>

        <div className="space-y-3 border border-o9ds-light-border dark:border-neutral-700 p-5">
          <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">c. Dropdown or select menu opens</h3>
          <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
            When a dropdown or select list opens, move initial focus to the <strong className="text-o9ds-light-primary dark:text-white">first option</strong> (or the currently selected option, depending on pattern) inside the menu. That supports quick selection and predictable arrow-key navigation within the list.
          </p>
        </div>

        <div className="space-y-3 border border-o9ds-light-border dark:border-neutral-700 p-5">
          <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">d. Alert or high-stakes confirmation dialog</h3>
          <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
            For warning or destructive confirmations, move initial focus to the <strong className="text-o9ds-light-primary dark:text-white">secondary (safer) action first</strong>—for example Cancel or Dismiss—so users do not accidentally activate Delete or OK on the first keypress. This is a common pattern to reduce accidental destructive actions.
          </p>
        </div>

        <div className="space-y-4 border border-o9ds-light-border dark:border-neutral-700 p-5">
          <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">e. No tabs and no form controls in the body—footer actions only</h3>
          <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
            If the body has no tab strip and no form fields, move initial focus to the <strong className="text-o9ds-light-primary dark:text-white">primary button in the footer</strong> (when that is the main affordance), so users can complete or dismiss without hunting for focus.
          </p>
          <FooterOnlyInitialFocusDemo />
        </div>

        <div className="space-y-4 border border-o9ds-light-border dark:border-neutral-700 p-5">
          <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">f. No interactive elements in the body or footer</h3>
          <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
            If there are no focusable controls in the body or footer (rare), set initial focus to the <strong className="text-o9ds-light-primary dark:text-white">container element</strong> using <code className="px-1" data-o9ds-inline-code>tabindex=&quot;-1&quot;</code> and appropriate dialog labeling. The first <strong className="text-o9ds-light-primary dark:text-white">Tab</strong> press should move focus to the <strong className="text-o9ds-light-primary dark:text-white">close control</strong> (for example the “X” in the header), so users are never stranded without a path to dismiss.
          </p>
          <ContainerInitialFocusDemo />
        </div>

        <CodeBlock
          code={`<div role="dialog" aria-labelledby="dialogTitle" aria-modal="true">
  <h2 id="dialogTitle">Create user</h2>
  <label for="userName">Name</label>
  <input id="userName" type="text" />
  <button type="button">Cancel</button>
  <button type="submit">Create</button>
</div>`}
          label="Example: dialog where initial focus moves to the first field"
        />
      </section>

      <section id="a11y-kb-trap" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Focus trapping</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed text-sm">
          Focus trapping keeps keyboard focus <strong className="text-o9ds-light-primary dark:text-white">inside an active overlay</strong> until the user dismisses it. While the overlay is open, Tab and Shift+Tab should cycle within that container—not move to links and buttons in the background. That prevents accidental interaction outside the intended context and reduces confusion.
        </p>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">Applies to:</p>
        <ul className="list-disc list-inside space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400">
          <li>Modal dialogs and alert dialogs</li>
          <li>Modal popovers and blocking panels</li>
          <li>Side panels and drawers that capture focus</li>
          <li>Open dropdown or listbox surfaces while they are expanded (focus may be managed inside the list or on the trigger, depending on pattern—consistency matters)</li>
        </ul>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm pt-2">
          <strong className="text-o9ds-light-primary dark:text-white">Behavior:</strong> Tab from the last focusable element moves to the first inside the trap; Shift+Tab from the first moves to the last. Background content should not be interactive while a modal layer blocks the page.
        </p>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
          Non-modal panels that do not block the page may not use a full trap; still document focus behavior so keyboard users are not dropped into an inconsistent state.
        </p>
        <FormBodyInitialFocusDemo howToPurpose="trap" />
      </section>

      <section id="a11y-kb-return" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Focus return</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed text-sm">
          After closing dialogs, windows, side panels, or dropdowns, <strong className="text-o9ds-light-primary dark:text-white">focus should return to the element that triggered the action</strong> (the opener), unless the workflow intentionally moves the user elsewhere (for example after successful submit). This preserves a clear navigation path and reduces disorientation.
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400">
          <li>When selecting an option from a dropdown, return focus to the trigger (or follow platform pattern) so the next Tab continues predictably.</li>
          <li>If opening a control spawns another overlay, move focus into the new layer and return it to the appropriate trigger when that layer closes.</li>
          <li>Chains of overlays should unwind focus in reverse order of opening when possible.</li>
        </ul>
        <FormBodyInitialFocusDemo howToPurpose="return" />
      </section>

      <section id="a11y-kb-esc" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Single vs multi Esc behavior</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm leading-relaxed mb-4">
          When multiple dismissible layers are stacked (for example a dropdown inside a modal), <strong className="text-o9ds-light-primary dark:text-white">Esc should dismiss the topmost layer first</strong>. A second Esc dismisses the next layer down. After closing, restore focus as described in focus return—typically to the trigger of the layer that just closed.
        </p>
        <DocTable columns={escColumns} rows={escRows} />
      </section>

      <section id="a11y-kb-nested" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Nested overlays (detail)</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm leading-relaxed">
          The same principles apply to menus inside dialogs, typeahead lists inside modals, and secondary popovers: <strong className="text-o9ds-light-primary dark:text-white">close the innermost interactive layer first</strong>, return focus to its trigger, then allow the next Esc (or explicit close) to close the parent. Document the behavior per component so QA can test predictable Esc stacks.
        </p>
      </section>

      <section id="a11y-kb-roving" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Roving tabindex</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
          One item in a composite widget uses <code className="px-1" data-o9ds-inline-code>tabindex=&quot;0&quot;</code>; siblings use <code className="px-1" data-o9ds-inline-code>tabindex=&quot;-1&quot;</code>. Arrow keys move within the set; Tab moves into and out of the widget. Use for tablists, menus, toolbars, custom radio groups, and chip lists modeled as one composite.
        </p>
        <CodeBlock
          code={`<div role="tablist" aria-label="Views">
  <button role="tab" tabindex="0" aria-selected="true">Overview</button>
  <button role="tab" tabindex="-1" aria-selected="false">Data</button>
  <button role="tab" tabindex="-1" aria-selected="false">Activity</button>
</div>`}
          label="Tablist pattern"
        />
      </section>

      <section id="a11y-kb-active" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">aria-activedescendant</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
          Use when focus remains on a single input or container while the active descendant changes—common for combobox, autocomplete, listbox, and tag inputs with suggestions.
        </p>
        <CodeBlock
          code={`<input id="countryInput" role="combobox" aria-expanded="true" aria-controls="countryList" aria-activedescendant="country-2" />
<ul id="countryList" role="listbox">
  <li id="country-1" role="option">India</li>
  <li id="country-2" role="option" aria-selected="true">Indonesia</li>
</ul>`}
          label="Combobox-style pattern"
        />
      </section>

      <section id="a11y-kb-delete" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Focus shift on element deletion (screen reader friendly)</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed text-sm">
          In interactive lists—filter chips, selected members, tag lists—when the user deletes item <strong className="text-o9ds-light-primary dark:text-white">N</strong>, move focus to the <strong className="text-o9ds-light-primary dark:text-white">preceding item (N−1)</strong>, not to the following item (N+1).
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400">
          <li>
            Focusing <strong className="text-o9ds-light-primary dark:text-white">N−1</strong> keeps users near where the removal happened; screen readers can announce the updated list context without skipping the fact that an item was removed.
          </li>
          <li>
            Moving immediately to <strong className="text-o9ds-light-primary dark:text-white">N+1</strong> can confuse users: the list length changed and focus jumps forward in a way that may obscure that an item at the previous position was deleted.
          </li>
          <li>
            If there is <strong className="text-o9ds-light-primary dark:text-white">no previous item</strong> (N was first), move focus to the <strong className="text-o9ds-light-primary dark:text-white">next remaining item</strong>, or to a sensible container fallback (for example the related input or “add” control).
          </li>
          <li>If the list becomes empty, move focus to the control used to add items or to the parent region.</li>
        </ul>
      </section>
    </AccessibilityDocPage>
  )
}
