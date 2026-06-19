import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ArvoIconButton } from '@arvo/react'
import { useTheme } from '../../../context/ThemeContext'
import { MOTION_DURATION_MS, MOTION_LAYOUT_SHIFT } from '../../../data/motionTokens'
import { o9illusAssetUrl } from '../../../utils/o9illusAsset'

/** o9con glyph — `name` is the suffix after `o9con-` (e.g. `search` → `o9con-search`). */
function O9Icon({ name, size = 16, className = '' }) {
  return <span className={`o9con o9con-${name} arvo-icon-${size} ${className}`.trim()} aria-hidden="true" />
}

function DemoBtn({ children, onClick, ...props }) {
  return (
    <button type="button" className="mp-btn" data-mp-motion onClick={onClick} {...props}>
      {children}
    </button>
  )
}

const TREE_NODES = [
  {
    id: 'planning',
    label: 'Planning',
    children: ['Demand Planning', 'Supply Planning', 'Inventory Planning'],
  },
  {
    id: 'analytics',
    label: 'Analytics',
    children: ['Dashboards', 'Reports', 'Insights'],
  },
]

function TreeBranch({ node }) {
  const [expanded, setExpanded] = useState(false)
  const childrenRef = useRef(null)

  const toggle = () => {
    const el = childrenRef.current
    if (!el) return

    if (!expanded) {
      setExpanded(true)
      requestAnimationFrame(() => {
        el.style.height = `${el.scrollHeight}px`
      })
      return
    }

    el.style.height = `${el.scrollHeight}px`
    requestAnimationFrame(() => {
      el.style.height = '0px'
      setExpanded(false)
    })
  }

  return (
    <div className={`mp-tree-node is-parent${expanded ? ' is-expanded' : ''}`}>
      <button type="button" className="mp-tree-item" aria-expanded={expanded} onClick={toggle}>
        <span className="mp-tree-caret" data-mp-motion aria-hidden>
          <O9Icon name={expanded ? 'angle-down' : 'angle-right'} size={14} />
        </span>
        <span>{node.label}</span>
      </button>
      <div ref={childrenRef} className="mp-tree-children" data-mp-motion>
        {node.children.map((child) => (
          <button key={child} type="button" className="mp-tree-item mp-tree-child">
            {child}
          </button>
        ))}
      </div>
    </div>
  )
}

/* 1. Tree view expand / collapse */
export function ExpandCollapseDemo() {
  return (
    <div className="mp-tree" role="tree">
      {TREE_NODES.map((node) => (
        <TreeBranch key={node.id} node={node} />
      ))}
    </div>
  )
}

/* 2. Popup / menu / popover / tooltip */
function usePopupDismiss(open, onClose, wrapRef) {
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    const onClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) onClose()
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [open, onClose, wrapRef])
}

function PopupMenuDemo() {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)
  usePopupDismiss(open, () => setOpen(false), wrapRef)

  return (
    <div className={`mp-popup-wrap${open ? ' is-open' : ''}`} ref={wrapRef}>
      <button
        type="button"
        className="mp-popup-trigger"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        Actions
        <O9Icon name="angle-down" size={12} className="mp-popup-trigger-chevron" />
      </button>
      <div className="mp-popup-surface mp-popup-surface--menu" data-mp-motion role="menu">
        {['Edit', 'Duplicate', 'Share', 'Delete'].map((label) => (
          <button key={label} type="button" role="menuitem" onClick={() => setOpen(false)}>
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}

function PopupPopoverDemo() {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)
  usePopupDismiss(open, () => setOpen(false), wrapRef)

  return (
    <div className={`mp-popup-wrap${open ? ' is-open' : ''}`} ref={wrapRef}>
      <button
        type="button"
        className="mp-popup-trigger"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        Popover
        <O9Icon name="angle-down" size={12} className="mp-popup-trigger-chevron" />
      </button>
      <div className="mp-popup-surface mp-popup-surface--popover" data-mp-motion>
        <p className="mp-popup-popover-title">Filter Options</p>
        <p className="mp-popup-popover-body">
          Configure settings, apply filters, or review contextual actions here.
        </p>
      </div>
    </div>
  )
}

function PopupTooltipDemo() {
  return (
    <div className="mp-tooltip-wrap">
      <button type="button" className="mp-popup-trigger">
        Tooltip
        <O9Icon name="info-circle" size={14} />
      </button>
      <div className="mp-tooltip" data-mp-motion role="tooltip">
        Helpful information
      </div>
    </div>
  )
}

export function PopupDemo() {
  return (
    <div className="mp-popup-row">
      <div>
        <p className="mp-popup-demo-label">Menu</p>
        <PopupMenuDemo />
      </div>
      <div>
        <p className="mp-popup-demo-label">Popover</p>
        <PopupPopoverDemo />
      </div>
      <div>
        <p className="mp-popup-demo-label">Tooltip</p>
        <PopupTooltipDemo />
      </div>
    </div>
  )
}

const ACCORDION_ITEMS = [
  {
    id: 'filters',
    title: 'Filter Configuration',
    body: 'Configure filters, apply advanced criteria, manage saved filter sets, and customize planner workflows based on selected attributes and hierarchy levels.',
  },
  {
    id: 'display',
    title: 'Display Settings',
    body: 'Control density, visibility, table layouts, sticky headers, and workspace preferences across planner views.',
  },
  {
    id: 'accessibility',
    title: 'Accessibility',
    body: 'Supports keyboard navigation, screen reader announcements, focus visibility, and logical interaction patterns aligned with WCAG standards.',
  },
]

function AccordionItem({ title, body }) {
  const [expanded, setExpanded] = useState(false)
  const wrapperRef = useRef(null)

  const toggle = () => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    if (!expanded) {
      setExpanded(true)
      requestAnimationFrame(() => {
        wrapper.style.height = `${wrapper.scrollHeight}px`
      })
      return
    }

    wrapper.style.height = `${wrapper.scrollHeight}px`
    requestAnimationFrame(() => {
      wrapper.style.height = '0px'
      setExpanded(false)
    })
  }

  return (
    <div className={`mp-accordion-item${expanded ? ' is-expanded' : ''}`}>
      <button
        type="button"
        className="mp-accordion-header"
        aria-expanded={expanded}
        onClick={toggle}
      >
        <span className="mp-accordion-title">{title}</span>
        <O9Icon
          name={expanded ? 'angle-down' : 'angle-right'}
          size={16}
          className="mp-accordion-icon"
          data-mp-motion
        />
      </button>
      <div className="mp-accordion-body-wrapper" ref={wrapperRef} data-mp-motion>
        <div className="mp-accordion-body">{body}</div>
      </div>
    </div>
  )
}

/* 2b. Accordion */
export function AccordionDemo() {
  return (
    <div className="mp-accordion">
      {ACCORDION_ITEMS.map((item) => (
        <AccordionItem key={item.id} title={item.title} body={item.body} />
      ))}
    </div>
  )
}

/* 3. Dialog */
export function DialogDemo() {
  const dialogRef = useRef(null)

  const open = () => dialogRef.current?.showModal()
  const close = () => dialogRef.current?.close()

  return (
    <div className="mp-dialog-scene">
      <DemoBtn onClick={open}>Open dialog</DemoBtn>
      <dialog ref={dialogRef} className="mp-arvo-dialog">
        <div className="mp-dialog-content">
          <h3>Delete Filter Set?</h3>
          <p>
            This action cannot be undone. Once deleted, the filter set will be removed permanently.
          </p>
          <div className="mp-dialog-actions">
            <button type="button" className="mp-dialog-secondary" onClick={close}>
              Cancel
            </button>
            <button type="button" className="mp-dialog-primary" onClick={close}>
              Delete
            </button>
          </div>
        </div>
      </dialog>
    </div>
  )
}

const TOAST_DURATION_POSITIVE = 4000

const PROGRESS_CIRCULAR_RADIUS = 34
const PROGRESS_CIRCULAR_SIZE = 80
const PROGRESS_CIRCULAR_C = 2 * Math.PI * PROGRESS_CIRCULAR_RADIUS

const PROGRESS_GAUGE_WIDTH = 160
const PROGRESS_GAUGE_HEIGHT = 100
const PROGRESS_GAUGE_RADIUS = 64
const PROGRESS_GAUGE_STROKE = 8
const PROGRESS_GAUGE_CX = PROGRESS_GAUGE_WIDTH / 2
const PROGRESS_GAUGE_CY = 88
const PROGRESS_GAUGE_VALUE_Y = PROGRESS_GAUGE_CY
const PROGRESS_GAUGE_VALUE_BOTTOM = `${((PROGRESS_GAUGE_HEIGHT - PROGRESS_GAUGE_VALUE_Y) / PROGRESS_GAUGE_HEIGHT) * 100}%`
const PROGRESS_GAUGE_ARC = Math.PI * PROGRESS_GAUGE_RADIUS
const PROGRESS_GAUGE_PATH = `M ${PROGRESS_GAUGE_CX - PROGRESS_GAUGE_RADIUS} ${PROGRESS_GAUGE_CY} A ${PROGRESS_GAUGE_RADIUS} ${PROGRESS_GAUGE_RADIUS} 0 0 1 ${PROGRESS_GAUGE_CX + PROGRESS_GAUGE_RADIUS} ${PROGRESS_GAUGE_CY}`

function easeStandardProgress(t) {
  return 1 - (1 - t) ** 3
}

function useAnimatedPercent(target) {
  const [display, setDisplay] = useState(target)
  const fromRef = useRef(target)

  useEffect(() => {
    const from = fromRef.current
    if (from === target) return undefined

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      fromRef.current = target
      setDisplay(target)
      return undefined
    }

    const duration = MOTION_DURATION_MS.base
    const start = performance.now()
    let frame

    const step = (now) => {
      const t = Math.min(1, (now - start) / duration)
      const next = from + (target - from) * easeStandardProgress(t)
      setDisplay(next)
      if (t < 1) {
        frame = requestAnimationFrame(step)
      } else {
        fromRef.current = target
      }
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [target])

  return Math.round(display)
}

function captureLayoutShift(containerRef) {
  const container = containerRef.current
  if (!container) return () => {}
  const nodes = [...container.children]
  const firstPositions = new Map(nodes.map((node) => [node, node.getBoundingClientRect()]))
  return () => {
    nodes.forEach((node) => {
      if (!node.isConnected) return
      const first = firstPositions.get(node)
      const last = node.getBoundingClientRect()
      if (!first || !last) return
      const deltaX = first.left - last.left
      const deltaY = first.top - last.top
      if (deltaX === 0 && deltaY === 0) return
      node.animate(
        [{ transform: `translate(${deltaX}px, ${deltaY}px)` }, { transform: 'translate(0, 0)' }],
        { duration: MOTION_LAYOUT_SHIFT.durationMs, easing: MOTION_LAYOUT_SHIFT.easing },
      )
    })
  }
}

function captureToastShift(regionRef) {
  return captureLayoutShift(regionRef)
}

function ToastItem({ toast, onRemove }) {
  const timerRef = useRef(null)
  const startRef = useRef(0)
  const remainingRef = useRef(TOAST_DURATION_POSITIVE)

  const clearTimer = () => {
    if (timerRef.current) window.clearTimeout(timerRef.current)
  }

  const remove = useCallback(() => {
    clearTimer()
    onRemove(toast.id)
  }, [onRemove, toast.id])

  const startTimer = useCallback(() => {
    startRef.current = Date.now()
    timerRef.current = window.setTimeout(remove, remainingRef.current)
  }, [remove])

  const pauseTimer = () => {
    clearTimer()
    remainingRef.current -= Date.now() - startRef.current
  }

  const resumeTimer = () => {
    startTimer()
  }

  useEffect(() => {
    startTimer()
    return clearTimer
  }, [startTimer])

  return (
    <div
      className={`mp-toast${toast.visible ? ' is-visible' : ''}${toast.removing ? ' is-removing' : ''}`}
      data-mp-motion
      role="status"
      onMouseEnter={pauseTimer}
      onMouseLeave={resumeTimer}
    >
      <button type="button" className="mp-toast-close" aria-label="Close notification" onClick={remove}>
        <O9Icon name="close" size={16} />
      </button>
      <p className="mp-toast-title">Filter set saved {toast.count}</p>
      <p className="mp-toast-message">Your changes have been saved successfully.</p>
    </div>
  )
}

/* 4. Feedback / toast */
export function FeedbackDemo() {
  const [toasts, setToasts] = useState([])
  const [toastCount, setToastCount] = useState(0)
  const regionRef = useRef(null)

  const addToast = () => {
    const animateShift = captureToastShift(regionRef)
    const id = crypto.randomUUID()
    const count = toastCount + 1
    setToastCount(count)
    setToasts((prev) => [{ id, count, visible: false, removing: false }, ...prev])
    requestAnimationFrame(() => {
      animateShift()
      setToasts((prev) => prev.map((t) => (t.id === id ? { ...t, visible: true } : t)))
    })
  }

  const removeToast = useCallback((id) => {
    const animateShift = captureToastShift(regionRef)
    setToasts((prev) => prev.map((t) => (t.id === id ? { ...t, removing: true } : t)))
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
      requestAnimationFrame(animateShift)
    }, MOTION_DURATION_MS.medium)
  }, [])

  return (
    <div className="mp-toast-scene">
      <DemoBtn onClick={addToast}>Show toast</DemoBtn>
      <div className="mp-toast-region" ref={regionRef} aria-live="polite" aria-atomic="false">
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onRemove={removeToast} />
        ))}
      </div>
    </div>
  )
}

const INITIAL_BANNERS = [
  {
    id: 'positive',
    type: 'positive',
    role: 'status',
    title: 'Filter set saved',
    message: 'Your filter changes have been saved successfully.',
  },
  {
    id: 'warning',
    type: 'warning',
    role: 'status',
    title: 'Warning',
    message: 'Some filters could not be applied due to missing permissions.',
  },
  {
    id: 'negative',
    type: 'negative',
    role: 'alert',
    title: 'Failed to save',
    message: 'Something went wrong while saving your configuration.',
  },
]

function BannerDismissItem({ banner, onRemoved }) {
  const ref = useRef(null)
  const [closing, setClosing] = useState(false)

  const handleClose = () => {
    if (closing) return
    setClosing(true)
  }

  useEffect(() => {
    if (!closing) return undefined
    const el = ref.current
    if (!el) return undefined

    const timeout = window.setTimeout(() => onRemoved(banner.id), MOTION_DURATION_MS.slow)
    const onTransitionEnd = () => {
      window.clearTimeout(timeout)
      onRemoved(banner.id)
    }
    el.addEventListener('transitionend', onTransitionEnd)
    return () => {
      window.clearTimeout(timeout)
      el.removeEventListener('transitionend', onTransitionEnd)
    }
  }, [closing, banner.id, onRemoved])

  return (
    <div
      ref={ref}
      className={`arvo-bnr-alert arvo-bnr-alert--${banner.type} mp-banner-dismiss${closing ? ' is-closing' : ''}`}
      role={banner.role}
      data-mp-motion
    >
      <span className="arvo-bnr-alert__ico o9con" aria-hidden="true" />
      <div className="arvo-bnr-alert__content">
        <div className="arvo-bnr-alert__copy">
          <p className="arvo-bnr-alert__title">{banner.title}</p>
          <p className="arvo-bnr-alert__msg">{banner.message}</p>
        </div>
      </div>
      <ArvoIconButton
        className="arvo-bnr-alert__close"
        variant="tertiary"
        size="xs"
        icon="close"
        tooltip="Dismiss alert"
        onClick={handleClose}
      />
    </div>
  )
}

/* 4b. Banner alert dismiss */
export function BannerDismissDemo() {
  const [banners, setBanners] = useState(INITIAL_BANNERS)

  const removeBanner = useCallback((id) => {
    setBanners((prev) => prev.filter((b) => b.id !== id))
  }, [])

  const reset = () => setBanners(INITIAL_BANNERS)

  return (
    <div>
      <div className="mp-banner-stack">
        {banners.map((banner) => (
          <BannerDismissItem key={banner.id} banner={banner} onRemoved={removeBanner} />
        ))}
      </div>
      {banners.length === 0 ? (
        <div className="mt-3">
          <DemoBtn onClick={reset}>Reset banners</DemoBtn>
        </div>
      ) : null}
    </div>
  )
}

/* 5. Focus ring */
export function FocusRingDemo() {
  return (
    <div className="mp-button-group-demos mp-focus-ring-demo">
      <div className="mp-button-group-demo">
        <p className="mp-button-group-demo-label">4 selected</p>
        <MotionButtonGroupMulti
          options={BUTTON_GROUP_LABELS}
          defaultSelected={['Data', 'Display', 'Layout', 'Options']}
          ariaLabel="Button group — four selected"
        />
      </div>
      <div className="mp-button-group-demo">
        <p className="mp-button-group-demo-label">1 selected</p>
        <MotionButtonGroupMulti
          options={BUTTON_GROUP_LABELS}
          defaultSelected={['Display']}
          ariaLabel="Button group — one selected"
        />
      </div>
    </div>
  )
}

/* 6. Form input */
function FormInputField({ type = 'text', className = '', ...props }) {
  return (
    <div className="mp-form-input-wrap">
      <div className="mp-form-input-field">
        <input type={type} className={`mp-form-input ${className}`.trim()} {...props} />
        <span className="mp-form-input-border-animation" aria-hidden="true" />
      </div>
    </div>
  )
}

export function FormInputDemo() {
  return <FormInputField placeholder="Enter value" />
}

const CHECKBOX_ITEMS = [
  { id: 'notifications', label: 'Enable notifications', defaultChecked: true },
  { id: 'filters', label: 'Auto-apply filters' },
  { id: 'advanced', label: 'Show advanced options' },
]

function CheckboxCheckIcon() {
  return (
    <svg className="mp-checkbox-icon" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3.5 8.5L6.5 11.5L12.5 4.5" />
    </svg>
  )
}

/* 6b. Checkbox group */
export function CheckboxDemo() {
  const [checked, setChecked] = useState(() =>
    Object.fromEntries(CHECKBOX_ITEMS.map((item) => [item.id, Boolean(item.defaultChecked)])),
  )

  return (
    <div className="mp-checkbox-group">
      {CHECKBOX_ITEMS.map((item) => (
        <label key={item.id} className="mp-checkbox-item">
          <input
            type="checkbox"
            checked={checked[item.id]}
            onChange={(e) => setChecked((prev) => ({ ...prev, [item.id]: e.target.checked }))}
          />
          <span className="mp-checkbox-box" data-mp-motion>
            <CheckboxCheckIcon />
          </span>
          {item.label}
        </label>
      ))}
    </div>
  )
}

/* 6c. Radio group */
const RADIO_ITEMS = [
  { id: 'grid', label: 'Grid View', defaultChecked: true },
  { id: 'list', label: 'List View' },
  { id: 'compact', label: 'Compact View' },
]

export function RadioDemo() {
  const groupName = useId()
  const [selected, setSelected] = useState(RADIO_ITEMS.find((item) => item.defaultChecked)?.id ?? RADIO_ITEMS[0].id)

  return (
    <div className="mp-radio-group" role="radiogroup" aria-label="View Type">
      {RADIO_ITEMS.map((item) => (
        <label key={item.id} className="mp-radio-item">
          <input
            type="radio"
            name={groupName}
            checked={selected === item.id}
            onChange={() => setSelected(item.id)}
          />
          <span className="mp-radio-box" data-mp-motion>
            <span className="mp-radio-fill" aria-hidden="true" />
          </span>
          {item.label}
        </label>
      ))}
    </div>
  )
}

const SLIDER_MIN = 0
const SLIDER_MAX = 250
const SLIDER_STEP = 50
const SLIDER_TICKS = [0, 50, 100, 150, 200, 250]

function sliderPercent(value) {
  return ((value - SLIDER_MIN) / (SLIDER_MAX - SLIDER_MIN)) * 100
}

/* 6d. Slider */
export function SliderDemo() {
  const sliderId = useId()
  const [value, setValue] = useState(155)
  const [dragging, setDragging] = useState(false)
  const fillPct = sliderPercent(value)

  const stopDragging = () => setDragging(false)

  return (
    <div className="mp-slider">
      <div className="mp-slider-label-row">
        <label htmlFor={sliderId}>
          Form Label<span className="mp-slider-required" aria-hidden="true">
            *
          </span>
        </label>
        <button type="button" className="mp-slider-info" aria-label="More information">
          <O9Icon name="info-circle" size={14} />
        </button>
      </div>
      <div className="mp-slider-control">
        <div className="mp-slider-track-row">
          <button
            type="button"
            className="mp-slider-step"
            aria-label="Decrease value"
            disabled={value <= SLIDER_MIN}
            onClick={() => setValue((current) => Math.max(SLIDER_MIN, current - SLIDER_STEP))}
          >
            −
          </button>
          <div className="mp-slider-rail-wrap">
            <div className="mp-slider-rail">
              <span className="mp-slider-track-line" aria-hidden="true" />
              <span
                className={`mp-slider-fill${dragging ? ' is-dragging' : ''}`}
                data-mp-motion
                style={{ width: `${fillPct}%` }}
                aria-hidden="true"
              />
              <input
                id={sliderId}
                type="range"
                className="mp-slider-input"
                min={SLIDER_MIN}
                max={SLIDER_MAX}
                step={1}
                value={value}
                aria-valuemin={SLIDER_MIN}
                aria-valuemax={SLIDER_MAX}
                aria-valuenow={value}
                onChange={(event) => setValue(Number(event.target.value))}
                onPointerDown={() => setDragging(true)}
                onPointerUp={stopDragging}
                onPointerCancel={stopDragging}
                onBlur={stopDragging}
              />
              <span
                className={`mp-slider-thumb${dragging ? ' is-dragging is-active' : ''}`}
                data-mp-motion
                style={{ left: `${fillPct}%` }}
                aria-hidden="true"
              />
            </div>
          </div>
          <button
            type="button"
            className="mp-slider-step"
            aria-label="Increase value"
            disabled={value >= SLIDER_MAX}
            onClick={() => setValue((current) => Math.min(SLIDER_MAX, current + SLIDER_STEP))}
          >
            +
          </button>
        </div>
        <div className="mp-slider-ticks" aria-hidden="true">
          {SLIDER_TICKS.map((tick) => (
            <span key={tick} className="mp-slider-tick">
              <span className="mp-slider-tick-mark" />
              {tick}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* 7. Tabs */
const TAB_LABELS = ['Overview', 'Details', 'Settings']

function useTabIndicator(active, orientation) {
  const stripRef = useRef(null)
  const [indicator, setIndicator] = useState(() =>
    orientation === 'vertical' ? { height: 0, top: 0 } : { width: 0, left: 0 },
  )

  const moveIndicator = useCallback(() => {
    const strip = stripRef.current
    if (!strip) return
    const tab = strip.querySelectorAll('[role="tab"]')[active]
    if (!tab) return
    const stripRect = strip.getBoundingClientRect()
    const tabRect = tab.getBoundingClientRect()
    if (orientation === 'vertical') {
      setIndicator({ top: tabRect.top - stripRect.top, height: tabRect.height })
    } else {
      setIndicator({ left: tabRect.left - stripRect.left, width: tabRect.width })
    }
  }, [active, orientation])

  useLayoutEffect(() => {
    moveIndicator()
  }, [moveIndicator])

  useEffect(() => {
    const strip = stripRef.current
    if (!strip) return
    const observer = new ResizeObserver(moveIndicator)
    observer.observe(strip)
    strip.querySelectorAll('[role="tab"]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [moveIndicator])

  return { stripRef, indicator }
}

function TabStrip({ orientation = 'horizontal' }) {
  const [active, setActive] = useState(0)
  const { stripRef, indicator } = useTabIndicator(active, orientation)
  const isVertical = orientation === 'vertical'

  return (
    <div
      className={`mp-tabstrip${isVertical ? ' mp-tabstrip--vertical' : ''}`}
      ref={stripRef}
      role="tablist"
      aria-orientation={orientation}
    >
      <span
        className={`mp-tab-indicator${isVertical ? ' mp-tab-indicator--vertical' : ''}`}
        data-mp-motion
        style={
          isVertical
            ? { height: indicator.height, transform: `translateY(${indicator.top}px)` }
            : { width: indicator.width, transform: `translateX(${indicator.left}px)` }
        }
        aria-hidden
      />
      {TAB_LABELS.map((tab, i) => (
        <button
          key={tab}
          type="button"
          role="tab"
          aria-selected={active === i}
          onClick={() => setActive(i)}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

export function TabsDemo() {
  return (
    <div className="mp-tabs-demos">
      <div className="mp-tabs-demo">
        <p className="mp-button-group-demo-label">Horizontal</p>
        <TabStrip orientation="horizontal" />
      </div>
      <div className="mp-tabs-demo">
        <p className="mp-button-group-demo-label">Vertical</p>
        <TabStrip orientation="vertical" />
      </div>
    </div>
  )
}

const NAV_INDICATOR_ITEMS = [
  { id: 'tenants', label: 'Tenants', icon: 'globe' },
  { id: 'users', label: 'Users', icon: 'user' },
  { id: 'user-management', label: 'User Management', icon: 'user-management' },
  { id: 'usage-reports', label: 'Usage Reports', icon: 'monitor' },
  { id: 'integrations', label: 'Integrations', icon: 'flow-chart' },
  { id: 'ssis', label: 'SSIS', icon: 'pipeline' },
  { id: 'deployment', label: 'Deployment', icon: 'line-chart' },
  { id: 'data-management', label: 'Data Management', icon: 'data-management' },
  { id: 'designer', label: 'Designer', icon: 'designer' },
]

function useNavIndicator(active) {
  const listRef = useRef(null)
  const [indicator, setIndicator] = useState({ top: 0, height: 0 })

  const moveIndicator = useCallback(() => {
    const list = listRef.current
    if (!list) return
    const item = list.querySelectorAll('.mp-nav-item')[active]
    if (!item) return
    const listRect = list.getBoundingClientRect()
    const itemRect = item.getBoundingClientRect()
    setIndicator({ top: itemRect.top - listRect.top, height: itemRect.height })
  }, [active])

  useLayoutEffect(() => {
    moveIndicator()
  }, [moveIndicator])

  useEffect(() => {
    const list = listRef.current
    if (!list) return
    const observer = new ResizeObserver(moveIndicator)
    observer.observe(list)
    list.querySelectorAll('.mp-nav-item').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [moveIndicator])

  return { listRef, indicator }
}

/* 7b. Navigation active indicator */
export function NavActiveIndicatorDemo() {
  const [active, setActive] = useState(3)
  const { listRef, indicator } = useNavIndicator(active)
  const [transitionsEnabled, setTransitionsEnabled] = useState(false)

  useLayoutEffect(() => {
    const frame = requestAnimationFrame(() => setTransitionsEnabled(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  const indicatorStyle = {
    height: indicator.height,
    transform: `translateY(${indicator.top}px)`,
  }

  return (
    <nav className="mp-nav-list" ref={listRef} aria-label="Administration navigation">
      <span
        className={`mp-nav-indicator${transitionsEnabled ? '' : ' is-instant'}`}
        data-mp-motion
        style={indicatorStyle}
        aria-hidden="true"
      />
      <span
        className={`mp-nav-highlight${transitionsEnabled ? '' : ' is-instant'}`}
        data-mp-motion
        style={indicatorStyle}
        aria-hidden="true"
      />
      {NAV_INDICATOR_ITEMS.map((item, index) => (
        <button
          key={item.id}
          type="button"
          className={`mp-nav-item${active === index ? ' is-active' : ''}`}
          aria-current={active === index ? 'page' : undefined}
          onClick={() => setActive(index)}
        >
          <O9Icon name={item.icon} size={16} className="mp-nav-icon" />
          <span className="mp-nav-label">{item.label}</span>
        </button>
      ))}
    </nav>
  )
}

const BUTTON_GROUP_LABELS = ['Data', 'Display', 'Layout', 'Options', 'Controls']

const BUTTON_GROUP_ICONS = [
  { id: 'bold', label: 'Bold', icon: 'bold' },
  { id: 'italic', label: 'Italic', icon: 'italic' },
  { id: 'underline', label: 'Underline', icon: 'underline' },
]

function useButtonGroupIndicator(active) {
  const wrapRef = useRef(null)
  const [indicator, setIndicator] = useState({ width: 0, left: 0 })

  const moveIndicator = useCallback(() => {
    const wrap = wrapRef.current
    if (!wrap) return
    const segment = wrap.querySelectorAll('.mp-button-group-segment')[active]
    if (!segment) return
    const wrapRect = wrap.getBoundingClientRect()
    const segmentRect = segment.getBoundingClientRect()
    setIndicator({ left: segmentRect.left - wrapRect.left, width: segmentRect.width })
  }, [active])

  useLayoutEffect(() => {
    moveIndicator()
  }, [moveIndicator])

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return
    const observer = new ResizeObserver(moveIndicator)
    observer.observe(wrap)
    wrap.querySelectorAll('.mp-button-group-segment').forEach((segment) => observer.observe(segment))
    return () => observer.disconnect()
  }, [moveIndicator])

  return { wrapRef, indicator }
}

function MotionButtonGroup({ options, defaultActive = 0, iconOnly = false, ariaLabel }) {
  const [active, setActive] = useState(defaultActive)
  const { wrapRef, indicator } = useButtonGroupIndicator(active)

  return (
    <div
      className={`mp-button-group${iconOnly ? ' mp-button-group--icon-only' : ''}`}
      ref={wrapRef}
      role="radiogroup"
      aria-label={ariaLabel}
    >
      <span
        className="mp-button-group-indicator"
        data-mp-motion
        style={{ width: indicator.width, transform: `translateX(${indicator.left}px)` }}
        aria-hidden
      />
      {options.map((opt, i) => {
        const label = typeof opt === 'string' ? opt : opt.label
        const key = typeof opt === 'string' ? opt : opt.id
        return (
          <button
            key={key}
            type="button"
            className={`mp-button-group-segment${active === i ? ' is-active' : ''}`}
            role="radio"
            aria-checked={active === i}
            aria-label={label}
            title={iconOnly ? label : undefined}
            onClick={() => setActive(i)}
          >
            {iconOnly ? <O9Icon name={opt.icon} size={16} /> : label}
          </button>
        )
      })}
    </div>
  )
}

function MotionButtonGroupExpandOnSelect({ options, defaultActive = 0, ariaLabel }) {
  const [active, setActive] = useState(defaultActive)
  const { wrapRef, indicator } = useButtonGroupIndicator(active)

  return (
    <div className="mp-button-group mp-button-group--expand-on-select" ref={wrapRef} role="radiogroup" aria-label={ariaLabel}>
      <span
        className="mp-button-group-indicator"
        data-mp-motion
        style={{ width: indicator.width, transform: `translateX(${indicator.left}px)` }}
        aria-hidden
      />
      {options.map((opt, i) => (
        <button
          key={opt.id}
          type="button"
          className={`mp-button-group-segment${active === i ? ' is-active' : ''}`}
          role="radio"
          aria-checked={active === i}
          aria-label={opt.label}
          onClick={() => setActive(i)}
        >
          <span className="mp-button-group-segment-inner">
            <O9Icon name={opt.icon} size={16} />
            <span className="mp-button-group-segment-label" data-mp-motion aria-hidden={active !== i}>
              {opt.label}
            </span>
          </span>
        </button>
      ))}
    </div>
  )
}

function MotionButtonGroupExpandOnSelectMulti({ options, ariaLabel }) {
  const [selected, setSelected] = useState(() => new Set())

  const toggle = (id) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <div
      className="mp-button-group mp-button-group--multi-select mp-button-group--expand-on-select"
      role="group"
      aria-label={ariaLabel}
    >
      {options.map((opt) => {
        const isActive = selected.has(opt.id)
        return (
          <button
            key={opt.id}
            type="button"
            className={`mp-button-group-segment${isActive ? ' is-active' : ''}`}
            data-mp-motion
            aria-pressed={isActive}
            aria-label={opt.label}
            onClick={() => toggle(opt.id)}
          >
            <span className="mp-button-group-segment-inner">
              <O9Icon name={opt.icon} size={16} />
              <span className="mp-button-group-segment-label" data-mp-motion aria-hidden={!isActive}>
                {opt.label}
              </span>
            </span>
          </button>
        )
      })}
    </div>
  )
}

function MotionButtonGroupMulti({ options, iconOnly = false, ariaLabel, defaultSelected }) {
  const [selected, setSelected] = useState(() => {
    if (defaultSelected instanceof Set) return new Set(defaultSelected)
    if (Array.isArray(defaultSelected)) return new Set(defaultSelected)
    return new Set()
  })

  const toggle = (id) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <div
      className={`mp-button-group mp-button-group--multi-select${iconOnly ? ' mp-button-group--icon-only' : ''}`}
      role="group"
      aria-label={ariaLabel}
    >
      {options.map((opt) => {
        const label = typeof opt === 'string' ? opt : opt.label
        const key = typeof opt === 'string' ? opt : opt.id
        const isActive = selected.has(key)
        return (
          <button
            key={key}
            type="button"
            className={`mp-button-group-segment${isActive ? ' is-active' : ''}`}
            data-mp-motion
            aria-pressed={isActive}
            aria-label={label}
            title={iconOnly ? label : undefined}
            onClick={() => toggle(key)}
          >
            {iconOnly ? <O9Icon name={opt.icon} size={16} /> : label}
          </button>
        )
      })}
    </div>
  )
}

/* 8. Button group — single select */
export function ButtonGroupDemo() {
  return (
    <div className="mp-button-group-demos">
      <div className="mp-button-group-demo">
        <p className="mp-button-group-demo-label">With labels</p>
        <MotionButtonGroup options={BUTTON_GROUP_LABELS} defaultActive={1} ariaLabel="Button group" />
      </div>
      <div className="mp-button-group-demo">
        <p className="mp-button-group-demo-label">Icon only</p>
        <MotionButtonGroup
          options={BUTTON_GROUP_ICONS}
          defaultActive={0}
          iconOnly
          ariaLabel="Text formatting"
        />
      </div>
      <div className="mp-button-group-demo">
        <p className="mp-button-group-demo-label">Expand on select</p>
        <MotionButtonGroupExpandOnSelect
          options={BUTTON_GROUP_ICONS}
          defaultActive={0}
          ariaLabel="Text formatting"
        />
      </div>
    </div>
  )
}

/* 8b. Button group — multi select */
export function ButtonGroupMultiSelectDemo() {
  return (
    <div className="mp-button-group-demos">
      <div className="mp-button-group-demo">
        <p className="mp-button-group-demo-label">With labels</p>
        <MotionButtonGroupMulti options={BUTTON_GROUP_ICONS} ariaLabel="Text formatting" />
      </div>
      <div className="mp-button-group-demo">
        <p className="mp-button-group-demo-label">Icon only</p>
        <MotionButtonGroupMulti options={BUTTON_GROUP_ICONS} iconOnly ariaLabel="Text formatting" />
      </div>
      <div className="mp-button-group-demo">
        <p className="mp-button-group-demo-label">Expand on select</p>
        <MotionButtonGroupExpandOnSelectMulti options={BUTTON_GROUP_ICONS} ariaLabel="Text formatting" />
      </div>
    </div>
  )
}

/* 9. Search expand */
function SearchExpandControl() {
  const [expanded, setExpanded] = useState(false)
  const [collapsing, setCollapsing] = useState(false)
  const inputRef = useRef(null)

  const expandSearch = useCallback(() => {
    setExpanded(true)
    requestAnimationFrame(() => inputRef.current?.focus())
  }, [])

  const collapseSearch = useCallback(() => {
    setCollapsing(true)
    if (inputRef.current) inputRef.current.value = ''
    window.setTimeout(() => {
      setExpanded(false)
      setCollapsing(false)
      inputRef.current?.blur()
    }, MOTION_DURATION_MS.base)
  }, [])

  const handleBoxClick = () => {
    if (!expanded) expandSearch()
    else inputRef.current?.focus()
  }

  const handleCloseClick = (event) => {
    event.stopPropagation()
    collapseSearch()
  }

  const handleInputKeyDown = (event) => {
    if (event.key === 'Escape') collapseSearch()
  }

  const rootClass = [
    'mp-search-expand',
    expanded ? 'is-expanded' : '',
    collapsing ? 'is-collapsing' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={rootClass}>
      <div
        className="mp-search-box"
        role="button"
        tabIndex={expanded ? -1 : 0}
        aria-label="Search"
        onClick={handleBoxClick}
        onKeyDown={(event) => {
          if (event.key === 'Enter' && !expanded) expandSearch()
        }}
        data-mp-motion
      >
        <O9Icon name="search" size={14} className="mp-search-box-icon" />
        <input
          ref={inputRef}
          className="mp-search-input"
          type="text"
          placeholder="Search"
          aria-label="Search query"
          onClick={(event) => event.stopPropagation()}
          onKeyDown={handleInputKeyDown}
        />
        <button
          type="button"
          className="mp-search-close"
          aria-label="Clear and close search"
          onClick={handleCloseClick}
          tabIndex={expanded ? 0 : -1}
        >
          <O9Icon name="close" size={14} />
        </button>
        <span className="mp-search-box-border" aria-hidden="true" />
      </div>
    </div>
  )
}

export function SearchExpandDemo() {
  return (
    <div className="mp-search-expand-demos">
      <div className="mp-search-expand-demo">
        <p className="mp-button-group-demo-label">Expands right</p>
        <div className="mp-search-expand-card">
          <div className="mp-search-expand-header mp-search-expand-header--compact">
            <h3 className="mp-search-expand-heading">Heading</h3>
            <SearchExpandControl />
          </div>
        </div>
      </div>
      <div className="mp-search-expand-demo">
        <p className="mp-button-group-demo-label">Expands left</p>
        <div className="mp-search-expand-card">
          <div className="mp-search-expand-header mp-search-expand-header--space-between">
            <h3 className="mp-search-expand-heading">Heading</h3>
            <SearchExpandControl />
          </div>
        </div>
      </div>
    </div>
  )
}

/* 10. Toggle icon */
const TOGGLE_ITEMS = [
  { id: 'bookmark', label: 'Bookmark item', line: 'bookmark-o', fill: 'bookmark', inactive: 'Bookmark', active: 'Bookmarked' },
  { id: 'heart', label: 'Favorite item', line: 'heart-o', fill: 'heart', inactive: 'Favorite', active: 'Favorited' },
  { id: 'like', label: 'Like item', line: 'thumbs-up', fill: 'thumbs-up-filled', inactive: 'Like', active: 'Liked' },
  { id: 'star', label: 'Star item', line: 'star-o', fill: 'star', inactive: 'Star', active: 'Starred' },
  { id: 'pin', label: 'Pin item', line: 'push-pin', fill: 'push-pinned', inactive: 'Pin', active: 'Pinned' },
]

function IconToggleButton({ line, fill, label }) {
  const [active, setActive] = useState(false)
  return (
    <button
      type="button"
      className={`mp-icon-toggle${active ? ' is-active' : ''}`}
      data-mp-motion
      aria-pressed={active}
      aria-label={label}
      onClick={() => setActive((value) => !value)}
    >
      <span className="mp-icon-line" aria-hidden>
        <O9Icon name={line} size={20} />
      </span>
      <span className="mp-icon-fill" aria-hidden>
        <O9Icon name={fill} size={20} />
      </span>
    </button>
  )
}

function TextToggleButton({ line, fill, inactive, active, label }) {
  const [isActive, setIsActive] = useState(false)
  return (
    <button
      type="button"
      className={`mp-text-toggle${isActive ? ' is-active' : ''}`}
      data-mp-motion
      aria-pressed={isActive}
      aria-label={label}
      onClick={() => setIsActive((value) => !value)}
    >
      <span className="mp-text-toggle-line">
        <O9Icon name={line} size={16} className="mp-text-toggle-icon" />
        <span>{inactive}</span>
      </span>
      <span className="mp-text-toggle-fill">
        <O9Icon name={fill} size={16} className="mp-text-toggle-icon" />
        <span>{active}</span>
      </span>
    </button>
  )
}

export function ToggleIconDemo() {
  return (
    <div className="mp-toggle-demos">
      <div className="mp-toggle-demo">
        <p className="mp-button-group-demo-label">Icon toggle</p>
        <div className="mp-icon-toggle-row">
          {TOGGLE_ITEMS.map((item) => (
            <IconToggleButton key={item.id} line={item.line} fill={item.fill} label={item.label} />
          ))}
        </div>
      </div>
      <div className="mp-toggle-demo">
        <p className="mp-button-group-demo-label">Button toggle</p>
        <div className="mp-text-toggle-row">
          {TOGGLE_ITEMS.map((item) => (
            <TextToggleButton
              key={item.id}
              line={item.line}
              fill={item.fill}
              inactive={item.inactive}
              active={item.active}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const SHOW_MORE_PARAGRAPH =
  'Arvo motion tokens define duration, easing, and semantic transitions for expand, feedback, and nested surfaces. Apply them consistently so tree views, accordions, and inline truncation feel cohesive across planner experiences.'

const SHOW_MORE_COLLAPSED_HEIGHT = 24
const SHOW_MORE_MS = MOTION_DURATION_MS.slow

function ExpandToggleButton({ expanded, onClick, label, className = '' }) {
  return (
    <button
      type="button"
      className={`mp-expand-toggle ${className}`.trim()}
      aria-expanded={expanded}
      onClick={onClick}
    >
      <span>{label}</span>
      <O9Icon name="angle-down" size={12} className="mp-expand-toggle-icon" />
    </button>
  )
}

function ShowMoreInlineDemo() {
  const [expanded, setExpanded] = useState(false)
  const [clamped, setClamped] = useState(true)
  const [animating, setAnimating] = useState(null)
  const wrapperRef = useRef(null)
  const bodyRef = useRef(null)

  const collapsedLayout = !expanded && clamped

  useLayoutEffect(() => {
    if (wrapperRef.current) wrapperRef.current.style.height = `${SHOW_MORE_COLLAPSED_HEIGHT}px`
  }, [])

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current
    const body = bodyRef.current
    if (!wrapper || !body) return

    if (animating === 'expand' && !clamped) {
      const expandedHeight = body.scrollHeight
      wrapper.style.height = `${SHOW_MORE_COLLAPSED_HEIGHT}px`
      requestAnimationFrame(() => {
        setExpanded(true)
        wrapper.style.height = `${expandedHeight}px`
        setAnimating(null)
      })
      return
    }

    if (animating === 'collapse' && !expanded) {
      wrapper.style.height = `${wrapper.scrollHeight}px`
      requestAnimationFrame(() => {
        wrapper.style.height = `${SHOW_MORE_COLLAPSED_HEIGHT}px`
      })
      const timer = window.setTimeout(() => {
        setClamped(true)
        setAnimating(null)
      }, SHOW_MORE_MS)
      return () => window.clearTimeout(timer)
    }
  }, [animating, clamped, expanded])

  const toggle = () => {
    if (!expanded) {
      setClamped(false)
      setAnimating('expand')
      return
    }

    setExpanded(false)
    setAnimating('collapse')
  }

  return (
    <div className={`mp-expand-inline${expanded ? ' is-expanded' : ''}`}>
      <div className="mp-expand-inline-wrapper" ref={wrapperRef}>
        <p
          ref={bodyRef}
          className={[
            'mp-expand-inline-body',
            expanded ? 'is-expanded' : '',
            collapsedLayout ? 'is-collapsed' : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <span className={`mp-expand-text${collapsedLayout ? ' is-clamped' : ''}`}>{SHOW_MORE_PARAGRAPH}</span>
          <ExpandToggleButton
            className="mp-expand-toggle--inline"
            expanded={expanded}
            label={expanded ? 'Show less' : 'Show more'}
            onClick={toggle}
          />
        </p>
      </div>
    </div>
  )
}

function ShowMoreBlockDemo() {
  const [expanded, setExpanded] = useState(false)
  const [clamped, setClamped] = useState(true)
  const wrapperRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    if (wrapperRef.current) wrapperRef.current.style.height = `${SHOW_MORE_COLLAPSED_HEIGHT}px`
  }, [])

  const toggle = () => {
    const wrapper = wrapperRef.current
    const text = textRef.current
    if (!wrapper || !text) return

    if (!expanded) {
      setClamped(false)
      requestAnimationFrame(() => {
        const expandedHeight = text.scrollHeight
        wrapper.style.height = `${SHOW_MORE_COLLAPSED_HEIGHT}px`
        requestAnimationFrame(() => {
          setExpanded(true)
          wrapper.style.height = `${expandedHeight}px`
        })
      })
      return
    }

    wrapper.style.height = `${wrapper.scrollHeight}px`
    requestAnimationFrame(() => {
      setExpanded(false)
      wrapper.style.height = `${SHOW_MORE_COLLAPSED_HEIGHT}px`
    })
    window.setTimeout(() => setClamped(true), SHOW_MORE_MS)
  }

  return (
    <div className={`mp-expand-card${expanded ? ' is-expanded' : ''}`}>
      <div className="mp-expand-text-wrapper" ref={wrapperRef}>
        <p ref={textRef} className={`mp-expand-text${clamped ? ' is-clamped' : ''}`}>
          {SHOW_MORE_PARAGRAPH}
        </p>
      </div>
      <ExpandToggleButton
        expanded={expanded}
        label={expanded ? 'Show less' : 'Show more'}
        onClick={toggle}
      />
    </div>
  )
}

const SHOW_MORE_CHIPS = [
  'Region: North America',
  'Status: Active',
  'Category: Electronics',
  'Owner: Planning team',
  'Updated: This week',
  'Scope: Global',
  'Priority: High',
  'Version: 3',
]
const SHOW_MORE_CHIPS_VISIBLE = 3

function ShowMoreChipsDemo() {
  const [expanded, setExpanded] = useState(false)
  const wrapperRef = useRef(null)
  const listRef = useRef(null)
  const hiddenCount = SHOW_MORE_CHIPS.length - SHOW_MORE_CHIPS_VISIBLE
  const chips = expanded ? SHOW_MORE_CHIPS : SHOW_MORE_CHIPS.slice(0, SHOW_MORE_CHIPS_VISIBLE)

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current
    const list = listRef.current
    if (!wrapper || !list) return
    wrapper.style.height = `${list.scrollHeight}px`
  }, [expanded, chips.length])

  const toggle = () => {
    const wrapper = wrapperRef.current
    const list = listRef.current
    if (!wrapper || !list) return

    if (!expanded) {
      wrapper.style.height = `${list.scrollHeight}px`
      setExpanded(true)
      return
    }

    wrapper.style.height = `${list.scrollHeight}px`
    requestAnimationFrame(() => setExpanded(false))
  }

  return (
    <div className={`mp-expand-chips${expanded ? ' is-expanded' : ''}`}>
      <div className="mp-expand-chips-wrapper" ref={wrapperRef}>
        <div className="mp-expand-chips-list" ref={listRef}>
          {chips.map((label) => (
            <span key={label} className="mp-expand-chip">
              {label}
            </span>
          ))}
        </div>
      </div>
      <ExpandToggleButton
        className="mp-expand-chips-toggle"
        expanded={expanded}
        label={expanded ? 'Show less' : `+${hiddenCount} more`}
        onClick={toggle}
      />
    </div>
  )
}

/* 10b. Show more / show less */
export function ShowMoreDemo() {
  return (
    <div className="mp-show-more-demos">
      <div className="mp-show-more-demo">
        <p className="mp-button-group-demo-label">Inline</p>
        <ShowMoreInlineDemo />
      </div>
      <div className="mp-show-more-demo">
        <p className="mp-button-group-demo-label">Below paragraph</p>
        <ShowMoreBlockDemo />
      </div>
      <div className="mp-show-more-demo">
        <p className="mp-button-group-demo-label">Chip list (+N more)</p>
        <ShowMoreChipsDemo />
      </div>
    </div>
  )
}

/* 11. Status indicator */
export function StatusIndicatorDemo() {
  const [dirty, setDirty] = useState(false)

  return (
    <div className="mp-status-demos">
      <div className="mp-status-demo">
        <p className="mp-button-group-demo-label">Appear / fade</p>
        <button type="button" className="mp-status-btn" onClick={() => setDirty((v) => !v)}>
          Click me to watch Arvo states appear and fade
          <span className={`mp-dot-indicator${dirty ? ' is-visible' : ''}`} data-mp-motion aria-hidden />
          <span className="o9-msg-sr-only">{dirty ? ' — unsaved changes' : ''}</span>
        </button>
      </div>
      <div className="mp-status-demo">
        <p className="mp-button-group-demo-label">Pulsating</p>
        <span className="mp-status-pulse" role="status" aria-label="Active status">
          <span className="mp-status-pulse-ring" data-mp-motion aria-hidden="true" />
          <span className="mp-status-pulse-dot" aria-hidden="true" />
        </span>
      </div>
    </div>
  )
}

/* 12. Counter */
export function CounterDemo() {
  const [count, setCount] = useState(5)
  const [animTick, setAnimTick] = useState(0)
  const [animClass, setAnimClass] = useState('')

  const updateCounter = (newValue) => {
    if (newValue === count) return
    setAnimClass(newValue > count ? 'is-increasing' : 'is-decreasing')
    setCount(newValue)
    setAnimTick((tick) => tick + 1)
  }

  return (
    <div className="mp-counter-wrap">
      <button
        type="button"
        className="mp-counter-btn"
        aria-label="Decrease count"
        onClick={() => count > 0 && updateCounter(count - 1)}
      >
        −
      </button>
      <div className="mp-counter" aria-live="polite">
        <span key={animTick} className={`mp-counter-number ${animClass}`.trim()}>
          {count}
        </span>
      </div>
      <button
        type="button"
        className="mp-counter-btn"
        aria-label="Increase count"
        onClick={() => updateCounter(count + 1)}
      >
        +
      </button>
    </div>
  )
}

const CHIP_REMOVE_MS = MOTION_DURATION_MS.medium

const INITIAL_CHIPS = [
  { id: '1', label: 'Region: North America', removing: false },
  { id: '2', label: 'Status: Active', removing: false },
  { id: '3', label: 'Category: Electronics', removing: false },
]

/* 13. Chip remove */
export function ChipRemoveDemo() {
  const listRef = useRef(null)
  const [chips, setChips] = useState(INITIAL_CHIPS)

  const remove = (id) => {
    setChips((prev) => prev.map((c) => (c.id === id ? { ...c, removing: true } : c)))
    window.setTimeout(() => {
      const animateShift = captureLayoutShift(listRef)
      setChips((prev) => prev.filter((c) => c.id !== id))
      requestAnimationFrame(animateShift)
    }, CHIP_REMOVE_MS)
  }

  const resetChips = () => setChips(INITIAL_CHIPS.map((chip) => ({ ...chip })))

  if (chips.length === 0) {
    return (
      <div className="mp-chip-empty">
        <p className="mp-chip-empty-text">All filters removed.</p>
        <DemoBtn onClick={resetChips}>Reset chips</DemoBtn>
      </div>
    )
  }

  return (
    <div className="mp-chip-list" ref={listRef}>
      {chips.map((chip) => (
        <span key={chip.id} className={`mp-chip${chip.removing ? ' is-removing' : ''}`} data-mp-motion>
          <span className="mp-chip-label">{chip.label}</span>
          <button type="button" aria-label={`Remove ${chip.label}`} onClick={() => remove(chip.id)}>
            <O9Icon name="close" size={14} />
          </button>
        </span>
      ))}
    </div>
  )
}

const FILTER_CHIP_ITEMS = [
  { id: 'imported', label: 'Imported', icon: 'check-circle' },
  { id: 'scheduled', label: 'Scheduled', icon: 'calendar' },
  { id: 'review', label: 'Needs review', icon: 'exclamation-triangle' },
  { id: 'blocked', label: 'Blocked', icon: 'blocker-action-filled-alt' },
]

const FILTER_RECORDS = [
  {
    id: 'na-demand',
    title: 'North America demand',
    meta: '1,248 rows · Imported 2m ago',
    category: 'imported',
  },
  {
    id: 'emea-pricing',
    title: 'EMEA pricing sync',
    meta: 'Scheduled refresh · Every 6h',
    category: 'scheduled',
  },
  {
    id: 'apac-supply',
    title: 'APAC supply plan',
    meta: '842 rows · Updated 18m ago',
    category: 'scheduled',
  },
  {
    id: 'column-map',
    title: 'Column mapping review',
    meta: '3 unmapped fields · Needs review',
    category: 'review',
  },
  {
    id: 'vendor-master',
    title: 'Vendor master import',
    meta: '12 validation errors · Blocked',
    category: 'blocked',
  },
  {
    id: 'inventory-snap',
    title: 'Inventory snapshot',
    meta: '506 rows · Imported 1h ago',
    category: 'imported',
  },
]

function FilterRecordCard({ title, meta }) {
  return (
    <div className="mp-chip-filter-record">
      <div className="mp-chip-filter-record-copy">
        <p className="mp-chip-filter-record-title">{title}</p>
        <p className="mp-chip-filter-record-meta">{meta}</p>
      </div>
    </div>
  )
}

function FilterChipResults({ activeIds, layout }) {
  const showEmpty = activeIds.length === 0
  const visibleCount = FILTER_RECORDS.filter((record) => activeIds.includes(record.category)).length
  const ResultTag = layout === 'list' ? 'li' : 'div'

  return (
    <div className="mp-chip-filter-results" aria-live="polite">
      {!showEmpty ? (
        <p className="mp-chip-filter-results-count">
          Showing {visibleCount} of {FILTER_RECORDS.length}
        </p>
      ) : null}
      <div className={`mp-chip-filter-empty-wrap${showEmpty ? ' is-visible' : ''}`} data-mp-motion>
        <div className="mp-chip-filter-empty-inner">
          <p className="mp-chip-filter-empty">Select a filter to view records.</p>
        </div>
      </div>
      {layout === 'list' ? (
        <ul className="mp-chip-filter-list" role="list" aria-label="Filtered import jobs">
          {FILTER_RECORDS.map((record) => (
            <ResultTag
              key={record.id}
              className={`mp-chip-filter-result${activeIds.includes(record.category) ? ' is-visible' : ''}`}
              data-mp-motion
              aria-hidden={!activeIds.includes(record.category)}
            >
              <div className="mp-chip-filter-result-inner">
                <FilterRecordCard {...record} />
              </div>
            </ResultTag>
          ))}
        </ul>
      ) : (
        <div className="mp-chip-filter-grid" role="list" aria-label="Filtered import jobs">
          {FILTER_RECORDS.map((record) => (
            <ResultTag
              key={record.id}
              className={`mp-chip-filter-result${activeIds.includes(record.category) ? ' is-visible' : ''}`}
              data-mp-motion
              role="listitem"
              aria-hidden={!activeIds.includes(record.category)}
            >
              <div className="mp-chip-filter-result-inner">
                <FilterRecordCard {...record} />
              </div>
            </ResultTag>
          ))}
        </div>
      )}
    </div>
  )
}

function FilterChipContentPanel({ activeIds, layout = 'list' }) {
  return <FilterChipResults activeIds={activeIds} layout={layout} />
}

function MotionFilterChips({ mode, layout = 'list', defaultSelected }) {
  const [selected, setSelected] = useState(defaultSelected)

  const activeIds =
    mode === 'single'
      ? selected
        ? [selected]
        : []
      : selected

  const toggleChip = (id) => {
    if (mode === 'single') {
      setSelected((current) => (current === id ? null : id))
      return
    }
    setSelected((current) =>
      current.includes(id) ? current.filter((chipId) => chipId !== id) : [...current, id],
    )
  }

  const isSelected = (id) => (mode === 'single' ? selected === id : selected.includes(id))

  return (
    <div className="mp-chip-filter-stack">
      <div className="mp-filter-chip-row" role={mode === 'single' ? 'radiogroup' : 'group'} aria-label="Import job filters">
        {FILTER_CHIP_ITEMS.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`mp-filter-chip${isSelected(item.id) ? ' is-selected' : ''}`}
            aria-pressed={isSelected(item.id)}
            role={mode === 'single' ? 'radio' : undefined}
            aria-checked={mode === 'single' ? isSelected(item.id) : undefined}
            onClick={() => toggleChip(item.id)}
            data-mp-motion
          >
            <O9Icon name={item.icon} size={16} className="mp-filter-chip-icon" />
            <span className="mp-filter-chip-label">{item.label}</span>
          </button>
        ))}
      </div>
      <FilterChipResults activeIds={activeIds} layout={layout} />
    </div>
  )
}

/* 13b. Chip toggle / filter */
export function ChipToggleDemo() {
  return (
    <div className="mp-chip-toggle-demos">
      <div className="mp-chip-filter-demo">
        <p className="mp-button-group-demo-label">Single select · list</p>
        <MotionFilterChips mode="single" layout="list" defaultSelected="scheduled" />
      </div>
      <div className="mp-chip-filter-demo">
        <p className="mp-button-group-demo-label">Multi select · grid</p>
        <MotionFilterChips mode="multi" layout="grid" defaultSelected={['imported', 'scheduled']} />
      </div>
    </div>
  )
}

/* 14. Search highlight */
export function SearchHighlightDemo() {
  const [query, setQuery] = useState('')
  const text = 'Demand planning improves forecast accuracy across regions.'
  const parts = query.trim()
    ? text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'))
    : [text]

  return (
    <div className="space-y-3 max-w-md">
      <FormInputField
        type="search"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p className="mp-highlight-text text-sm m-0 text-arvo-light-secondary dark:text-neutral-400">
        {parts.map((part, i) =>
          query && part.toLowerCase() === query.toLowerCase() ? (
            <mark key={i}>{part}</mark>
          ) : (
            <span key={i}>{part}</span>
          ),
        )}
      </p>
    </div>
  )
}

const AVATAR_GROUP_DEMO_USERS = [
  { id: 'john', name: 'John Taylor', src: 'https://i.pravatar.cc/96?img=12' },
  { id: 'sarah', name: 'Sarah Williams', src: 'https://i.pravatar.cc/96?img=5' },
  { id: 'alex', name: 'Alex Chen', src: 'https://i.pravatar.cc/96?img=9' },
  { id: 'marcus', name: 'Marcus Lee', src: 'https://i.pravatar.cc/96?img=33' },
]

const AVATAR_GROUP_OVERFLOW_COUNT = 14

/* 15. Avatar group uplift */
export function AvatarGroupUpliftDemo() {
  return (
    <div className="mp-avatar-group" role="group" aria-label="Project collaborators">
      {AVATAR_GROUP_DEMO_USERS.map((user) => (
        <button
          key={user.id}
          type="button"
          className="mp-avatar-group-item"
          data-mp-motion
          title={user.name}
          aria-label={user.name}
        >
          <img src={user.src} alt="" width={40} height={40} loading="lazy" decoding="async" />
        </button>
      ))}
      <button
        type="button"
        className="mp-avatar-group-item mp-avatar-group-overflow"
        data-mp-motion
        aria-label={`${AVATAR_GROUP_OVERFLOW_COUNT} additional collaborators`}
        title={`${AVATAR_GROUP_OVERFLOW_COUNT} additional collaborators`}
      >
        +{AVATAR_GROUP_OVERFLOW_COUNT}
      </button>
    </div>
  )
}

/* 16. Empty state */
export function EmptyStateDemo() {
  const { theme } = useTheme()

  return (
    <div className="mp-empty-state" role="status">
      <div className="mp-empty-illustration-wrap" data-mp-motion>
        <img
          src={o9illusAssetUrl('no-notifications', theme)}
          alt=""
          className="mp-empty-illustration"
          width={124}
          height={124}
        />
      </div>
      <h3 className="mp-empty-state-title">No Results Found</h3>
      <p className="mp-empty-state-message">
        Try adjusting filters or modifying your search criteria.
      </p>
    </div>
  )
}

/* 16. Drawer */
export function DrawerDemo() {
  const [open, setOpen] = useState(false)
  return (
    <div className="mp-drawer-scene">
      <DemoBtn onClick={() => setOpen(true)}>Open drawer</DemoBtn>
      <aside className={`mp-drawer${open ? ' is-open' : ''}`} data-mp-motion aria-hidden={!open}>
        <p className="text-sm font-medium m-0 mb-2">Inspector</p>
        <p className="text-xs text-arvo-light-secondary dark:text-neutral-400 m-0 mb-3">
          Member details and properties.
        </p>
        <DemoBtn onClick={() => setOpen(false)}>Close</DemoBtn>
      </aside>
    </div>
  )
}

const LAUNCHBAR_OPEN_DELAY = 300
const LAUNCHBAR_SWITCH_DELAY = 150
const LAUNCHBAR_CLOSE_DELAY = 250

const LAUNCHBAR_ITEMS = [
  {
    id: 'menu',
    icon: 'bars',
    label: 'Main menu',
    drawer: {
      title: 'Navigation',
      items: [
        { icon: 'home', label: 'Home' },
        { icon: 'cog', label: 'Settings' },
        { icon: 'user', label: 'Profile' },
      ],
    },
  },
  {
    id: 'apps',
    icon: 'grid',
    label: 'Applications',
    drawer: {
      title: 'Applications',
      search: true,
      items: [
        { icon: 'desktop', label: 'Planning' },
        { icon: 'chart-progress', label: 'Analytics' },
        { icon: 'monitor', label: 'Control Tower' },
      ],
    },
  },
  {
    id: 'workspaces',
    icon: 'monitor',
    label: 'System Workspaces',
    drawer: {
      title: 'System Workspaces',
      search: true,
      items: [
        { icon: 'cog', label: 'o9 AI' },
        { icon: 'chart-progress', label: 'Reports' },
        { icon: 'desktop', label: 'Online Meetings' },
      ],
    },
  },
  {
    id: 'admin',
    icon: 'user-setting',
    label: 'Administration',
    drawer: {
      title: 'Administration',
      items: [
        { icon: 'user-management', label: 'Users' },
        { icon: 'cogs', label: 'System config' },
      ],
    },
  },
  {
    id: 'models',
    icon: 'cube',
    label: 'Models',
    drawer: {
      title: 'Models',
      search: true,
      items: [
        { icon: 'cube-node', label: 'Demand model' },
        { icon: 'cubes', label: 'Supply model' },
      ],
    },
  },
  {
    id: 'goals',
    icon: 'target',
    label: 'Goals',
    drawer: {
      title: 'Goals',
      items: [
        { icon: 'target', label: 'Q1 targets' },
        { icon: 'chart-progress', label: 'KPI dashboard' },
      ],
    },
  },
]

function LaunchbarDrawerPanel({ config }) {
  return (
    <>
      <h3 className="mp-launchbar-drawer-title">{config.title}</h3>
      {config.search ? (
        <div className="mp-launchbar-drawer-search">
          <O9Icon name="search" size={14} className="mp-launchbar-drawer-search-icon" aria-hidden="true" />
          <input type="search" placeholder="Search" aria-label={`Search ${config.title}`} />
        </div>
      ) : null}
      <ul className="mp-launchbar-drawer-list">
        {config.items.map((item) => (
          <li key={item.label}>
            <button type="button" className="mp-launchbar-drawer-link">
              <O9Icon name={item.icon} size={16} aria-hidden="true" />
              <span>{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

/* 16b. Launchbar drawer */
export function LaunchbarDrawerDemo() {
  const shellRef = useRef(null)
  const drawerRef = useRef(null)
  const openTimerRef = useRef(null)
  const closeTimerRef = useRef(null)
  const activeIdRef = useRef(null)
  const isOpenRef = useRef(false)

  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState(null)
  const [hoverId, setHoverId] = useState(null)

  activeIdRef.current = activeId
  isOpenRef.current = isOpen

  const canHover =
    typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches

  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const revealDrawer = useCallback(() => {
    if (prefersReducedMotion) {
      setIsOpen(true)
      return
    }
    requestAnimationFrame(() => setIsOpen(true))
  }, [prefersReducedMotion])

  const clearOpenTimer = () => {
    if (openTimerRef.current) {
      window.clearTimeout(openTimerRef.current)
      openTimerRef.current = null
    }
  }

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }

  const openImmediate = useCallback((id) => {
    clearOpenTimer()
    clearCloseTimer()
    setActiveId(id)
    if (!isOpenRef.current) {
      setMounted(true)
      revealDrawer()
    }
  }, [revealDrawer])

  const scheduleClose = useCallback(() => {
    clearCloseTimer()
    closeTimerRef.current = window.setTimeout(() => {
      setIsOpen(false)
    }, LAUNCHBAR_CLOSE_DELAY)
  }, [])

  const scheduleOpen = useCallback(
    (id) => {
      clearOpenTimer()
      clearCloseTimer()
      const delay =
        isOpenRef.current && activeIdRef.current !== id ? LAUNCHBAR_SWITCH_DELAY : LAUNCHBAR_OPEN_DELAY

      openTimerRef.current = window.setTimeout(() => {
        setActiveId(id)
        if (!isOpenRef.current) {
          setMounted(true)
          revealDrawer()
        }
      }, delay)
    },
    [revealDrawer],
  )

  const handleItemEnter = (id) => {
    if (!canHover) return
    setHoverId(id)
    scheduleOpen(id)
  }

  const handleItemLeave = (event) => {
    if (!canHover) return
    setHoverId(null)
    clearOpenTimer()
    const next = event.relatedTarget
    if (next instanceof Node && shellRef.current?.contains(next)) return
    scheduleClose()
  }

  const handleShellLeave = (event) => {
    if (!canHover) return
    setHoverId(null)
    clearOpenTimer()
    const next = event.relatedTarget
    if (next instanceof Node && shellRef.current?.contains(next)) return
    scheduleClose()
  }

  const handleFocusOut = (event) => {
    const next = event.relatedTarget
    if (next instanceof Node && shellRef.current?.contains(next)) return
    clearOpenTimer()
    scheduleClose()
  }

  const handleDrawerEnter = () => {
    if (!canHover) return
    clearCloseTimer()
  }

  const handleItemClick = (id) => {
    openImmediate(id)
  }

  const handleItemFocus = (id) => {
    openImmediate(id)
  }

  const handleDrawerTransitionEnd = (event) => {
    if (event.propertyName !== 'transform' && event.propertyName !== 'opacity') return
    if (!isOpenRef.current) {
      setMounted(false)
      setActiveId(null)
    }
  }

  useEffect(() => {
    if (!isOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        clearOpenTimer()
        clearCloseTimer()
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  useEffect(() => {
    if (isOpen || !mounted || !prefersReducedMotion) return
    setMounted(false)
    setActiveId(null)
  }, [isOpen, mounted, prefersReducedMotion])

  useEffect(
    () => () => {
      clearOpenTimer()
      clearCloseTimer()
    },
    [],
  )

  const activeItem = LAUNCHBAR_ITEMS.find((item) => item.id === activeId)
  const activeDrawer = activeItem?.drawer

  return (
    <div className="mp-launchbar-scene" role="presentation">
      <div
        className="mp-launchbar-app"
        ref={shellRef}
        onPointerLeave={canHover ? handleShellLeave : undefined}
        onFocusOut={handleFocusOut}
      >
        <nav className="mp-launchbar" aria-label="Launchbar">
          {LAUNCHBAR_ITEMS.map((item) => (
            <div key={item.id} className="mp-launchbar-item-wrap">
              <button
                type="button"
                className={`mp-launchbar-item${activeId === item.id && isOpen ? ' is-active' : ''}${
                  hoverId === item.id ? ' is-hovered' : ''
                }`}
                aria-label={item.label}
                aria-expanded={activeId === item.id && isOpen}
                aria-controls={mounted ? 'mp-launchbar-drawer-panel' : undefined}
                onPointerEnter={canHover ? () => handleItemEnter(item.id) : undefined}
                onPointerLeave={canHover ? handleItemLeave : undefined}
                onFocus={() => handleItemFocus(item.id)}
                onClick={() => handleItemClick(item.id)}
              >
                <O9Icon name={item.icon} size={18} />
              </button>
              <span className="mp-launchbar-tooltip" role="tooltip">
                {item.label}
              </span>
            </div>
          ))}
        </nav>

        {mounted && activeDrawer ? (
          <aside
            id="mp-launchbar-drawer-panel"
            ref={drawerRef}
            className={`mp-launchbar-drawer${isOpen ? ' is-open' : ''}`}
            data-mp-motion
            aria-label={activeDrawer.title}
            onPointerEnter={canHover ? handleDrawerEnter : undefined}
            onTransitionEnd={handleDrawerTransitionEnd}
          >
            <LaunchbarDrawerPanel key={activeId} config={activeDrawer} />
          </aside>
        ) : null}

        <div className="mp-launchbar-main" aria-hidden="true">
          <div className="mp-launchbar-main-block" />
          <div className="mp-launchbar-main-block mp-launchbar-main-block--short" />
          <div className="mp-launchbar-main-block" />
        </div>
      </div>
    </div>
  )
}

/* 17. Switch */
export function SwitchDemo() {
  const id = useId()
  return (
    <label className="mp-switch" htmlFor={id}>
      <input id={id} type="checkbox" />
      <span className="mp-switch-track">
        <span className="mp-switch-thumb" data-mp-motion>
          <O9Icon name="check" size={12} className="mp-switch-check" />
        </span>
      </span>
    </label>
  )
}

/* 18. Link */
export function LinkDemo() {
  return (
    <div className="flex flex-wrap gap-6">
      <a href="#motion-pg-link" className="mp-link mp-link--primary" data-mp-motion>
        Primary
      </a>
      <a href="#motion-pg-link" className="mp-link mp-link--secondary" data-mp-motion>
        Secondary
      </a>
      <a href="#motion-pg-link" className="mp-link mp-link--tertiary" data-mp-motion>
        Tertiary
      </a>
    </div>
  )
}

/* 19. Nested content */
const NESTED_VIEW_CONFIG = {
  root: {
    title: 'Manage filters',
    footer: [{ label: 'Done', primary: true }],
    list: [
      { id: 'edit', label: 'Edit filter set' },
      { id: 'share', label: 'Share filter set' },
      { id: 'delete', label: 'Delete filter set' },
      { id: 'details', label: 'View details' },
    ],
  },
  edit: {
    title: 'Edit filter set',
    body: 'Update the name, description, and visibility of this filter set.',
    footer: [
      { label: 'Cancel' },
      { label: 'Save', primary: true },
    ],
  },
  share: {
    title: 'Share filter set',
    body: 'Choose users or teams who can access this filter set.',
    footer: [
      { label: 'Cancel' },
      { label: 'Share', primary: true },
    ],
  },
  delete: {
    title: 'Delete filter set',
    body: 'This action cannot be undone. Deleting this filter set removes it from the current view.',
    footer: [
      { label: 'Cancel' },
      { label: 'Delete', primary: true },
    ],
  },
  details: {
    title: 'Filter details',
    body: 'This view is read-only and does not require footer actions.',
    footer: null,
  },
}

function NestedContentPanel() {
  const [activeView, setActiveView] = useState('root')
  const [displayTitle, setDisplayTitle] = useState(NESTED_VIEW_CONFIG.root.title)
  const [viewClasses, setViewClasses] = useState({ root: 'is-active' })
  const [titleVisible, setTitleVisible] = useState(true)
  const [footerChanging, setFooterChanging] = useState(false)
  const isAnimatingRef = useRef(false)
  const animTimeoutRef = useRef(null)

  const config = NESTED_VIEW_CONFIG[activeView]
  const hasBack = activeView !== 'root'

  const switchView = useCallback(
    (nextView, direction) => {
      if (isAnimatingRef.current || nextView === activeView) return
      isAnimatingRef.current = true

      setTitleVisible(false)
      setFooterChanging(true)
      window.setTimeout(() => {
        setDisplayTitle(NESTED_VIEW_CONFIG[nextView].title)
        setTitleVisible(true)
        setFooterChanging(false)
      }, MOTION_DURATION_MS.instant)

      setViewClasses({
        [activeView]: `is-exiting-${direction}`,
        [nextView]: `is-entering-${direction}`,
      })

      requestAnimationFrame(() => {
        setActiveView(nextView)
        setViewClasses({
          [activeView]: `is-exiting-${direction}`,
          [nextView]: 'is-active',
        })
      })

      if (animTimeoutRef.current) window.clearTimeout(animTimeoutRef.current)
      animTimeoutRef.current = window.setTimeout(() => {
        setViewClasses({ [nextView]: 'is-active' })
        isAnimatingRef.current = false
      }, MOTION_DURATION_MS.medium)
    },
    [activeView],
  )

  useEffect(
    () => () => {
      if (animTimeoutRef.current) window.clearTimeout(animTimeoutRef.current)
    },
    [],
  )

  return (
    <div className="mp-nested-popover">
      <header className={`mp-nested-header${hasBack ? ' has-back' : ''}`}>
        <button
          type="button"
          className={`mp-nested-back${hasBack ? ' is-visible' : ''}`}
          aria-label="Back"
          onClick={() => switchView('root', 'back')}
        >
          <O9Icon name="angle-left" size={16} />
        </button>
        <h3 className="mp-nested-title" style={{ opacity: titleVisible ? 1 : 0 }}>
          {displayTitle}
        </h3>
      </header>
      <section className="mp-nested-viewport">
        {Object.entries(NESTED_VIEW_CONFIG).map(([id, view]) => (
          <div
            key={id}
            className={['mp-nested-view', viewClasses[id]].filter(Boolean).join(' ')}
            data-mp-motion
          >
            {'list' in view ? (
              view.list.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="mp-nested-list-item"
                  onClick={() => switchView(item.id, 'forward')}
                >
                  <span className="mp-nested-list-item-label">{item.label}</span>
                  <O9Icon name="angle-right" size={12} className="mp-nested-list-item-chevron" />
                </button>
              ))
            ) : (
              <p className="mp-nested-view-text">{view.body}</p>
            )}
          </div>
        ))}
      </section>
      <footer className={`mp-nested-footer${config.footer ? '' : ' is-hidden'}`} data-mp-motion>
        <div className={`mp-nested-footer-actions${footerChanging ? ' is-changing' : ''}`}>
          {config.footer?.map((btn) => (
            <button
              key={btn.label}
              type="button"
              className={`mp-nested-footer-btn${btn.primary ? ' mp-nested-footer-btn--primary' : ''}`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </footer>
    </div>
  )
}

export function NestedContentDemo() {
  const dialogRef = useRef(null)
  const [dialogKey, setDialogKey] = useState(0)

  const openDialog = () => {
    setDialogKey((key) => key + 1)
    dialogRef.current?.showModal()
  }

  return (
    <div className="mp-nested-content-demos">
      <div className="mp-nested-content-demo">
        <p className="mp-button-group-demo-label">In popover</p>
        <NestedContentPanel />
      </div>
      <div className="mp-nested-content-demo">
        <p className="mp-button-group-demo-label">In dialog</p>
        <DemoBtn onClick={openDialog}>Open dialog</DemoBtn>
        <dialog ref={dialogRef} className="mp-arvo-dialog mp-nested-dialog">
          <NestedContentPanel key={dialogKey} />
        </dialog>
      </div>
    </div>
  )
}

const NESTED_SURFACE_VIEWS = {
  edit: {
    title: 'Edit option',
    body: 'Edit this option and update its configuration.',
    footer: [{ label: 'Cancel' }, { label: 'Save', primary: true }],
  },
  share: {
    title: 'Share option',
    body: 'Choose users or teams who can access this option.',
    footer: [{ label: 'Cancel' }, { label: 'Share', primary: true }],
  },
  new: {
    title: 'New option',
    body: 'Create a new option and define its default behavior.',
    footer: [{ label: 'Create', primary: true }],
  },
}

const NESTED_SURFACE_MS = MOTION_DURATION_MS.medium

/* 20. Nested surface (menu → popover) */
export function NestedSurfaceDemo() {
  const [menuClass, setMenuClass] = useState('is-hidden')
  const [popoverClass, setPopoverClass] = useState('is-hidden')
  const [popoverView, setPopoverView] = useState('edit')
  const [footerChanging, setFooterChanging] = useState(false)
  const wrapRef = useRef(null)
  const switchTimeoutRef = useRef(null)
  const isSwitchingRef = useRef(false)

  const view = NESTED_SURFACE_VIEWS[popoverView]
  const isOpen = menuClass !== 'is-hidden' || popoverClass !== 'is-hidden'

  const switchSurface = useCallback((from, to, direction) => {
    if (isSwitchingRef.current) return
    isSwitchingRef.current = true

    const setFrom = from === 'menu' ? setMenuClass : setPopoverClass
    const setTo = to === 'menu' ? setMenuClass : setPopoverClass

    setFrom(`is-exiting-${direction}`)
    setTo(`is-entering-${direction}`)

    requestAnimationFrame(() => {
      setFrom(`is-exiting-${direction}`)
      setTo('is-active')
    })

    if (switchTimeoutRef.current) window.clearTimeout(switchTimeoutRef.current)
    switchTimeoutRef.current = window.setTimeout(() => {
      setFrom('is-hidden')
      setTo('is-active')
      isSwitchingRef.current = false
    }, NESTED_SURFACE_MS)
  }, [])

  const openMenu = () => {
    setPopoverClass('is-hidden')
    setMenuClass('is-hidden')
    requestAnimationFrame(() => setMenuClass('is-open'))
  }

  const closeAll = () => {
    if (switchTimeoutRef.current) window.clearTimeout(switchTimeoutRef.current)
    isSwitchingRef.current = false
    setMenuClass('is-hidden')
    setPopoverClass('is-hidden')
  }

  const switchToPopover = (key) => {
    setPopoverView(key)
    setFooterChanging(true)
    window.setTimeout(() => setFooterChanging(false), MOTION_DURATION_MS.instant)
    switchSurface('menu', 'popover', 'forward')
  }

  const switchToMenu = () => {
    switchSurface('popover', 'menu', 'back')
  }

  useEffect(
    () => () => {
      if (switchTimeoutRef.current) window.clearTimeout(switchTimeoutRef.current)
    },
    [],
  )

  useEffect(() => {
    if (!isOpen) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') closeAll()
    }
    const onClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) closeAll()
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [isOpen])

  return (
    <div className="mp-nested-surface-wrap" ref={wrapRef}>
      <button
        type="button"
        className="mp-popup-trigger"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => (isOpen ? closeAll() : openMenu())}
      >
        Open actions
      </button>

      <div
        className={`mp-nested-surface mp-nested-surface--menu ${menuClass}`.trim()}
        data-mp-motion
        role="menu"
        aria-hidden={menuClass === 'is-hidden'}
      >
        {Object.entries(NESTED_SURFACE_VIEWS).map(([key, item]) => (
          <button
            key={key}
            type="button"
            className="mp-nested-list-item"
            onClick={() => switchToPopover(key)}
          >
            <span className="mp-nested-list-item-label">{item.title}</span>
            <O9Icon name="angle-right" size={12} className="mp-nested-list-item-chevron" />
          </button>
        ))}
      </div>

      <div
        className={`mp-nested-surface mp-nested-surface--popover ${popoverClass}`.trim()}
        data-mp-motion
        aria-hidden={popoverClass === 'is-hidden'}
      >
        <header className="mp-nested-header has-back">
          <button type="button" className="mp-nested-back is-visible" aria-label="Back to menu" onClick={switchToMenu}>
            <O9Icon name="angle-left" size={16} />
          </button>
          <h3 className="mp-nested-title">{view.title}</h3>
        </header>
        <section className="mp-nested-surface-content" data-mp-motion>
          {view.body}
        </section>
        <footer className="mp-nested-footer" data-mp-motion>
          <div className={`mp-nested-footer-actions${footerChanging ? ' is-changing' : ''}`}>
            {view.footer.map((btn) => (
              <button
                key={btn.label}
                type="button"
                className={`mp-nested-footer-btn${btn.primary ? ' mp-nested-footer-btn--primary' : ''}`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </footer>
      </div>
    </div>
  )
}

/* 21. Invalid drop */
export function InvalidDropDemo() {
  const [invalid, setInvalid] = useState(false)
  const [shaking, setShaking] = useState(false)

  const trigger = () => {
    setInvalid(true)
    setShaking(true)
    setTimeout(() => setShaking(false), MOTION_DURATION_MS.medium)
  }

  return (
    <div>
      <div className="mp-drop-scene">
        <div className="mp-drop-zone">
          <strong>Supply Chain Block</strong>
          <div className="mp-drop-block" data-mp-motion>
            <O9Icon name="drag-handle" size={14} />
            Revenue Forecast
          </div>
        </div>
        <div className="mp-drop-zone">
          <strong>Demand Chain Block</strong>
          <div
            className={`mp-drop-block${invalid ? ' is-invalid' : ''}${shaking ? ' is-shaking' : ''}`}
            data-mp-motion
            role="status"
            aria-live="polite"
          >
            <O9Icon name="drag-handle" size={14} />
            {invalid ? 'Revenue Forecast' : 'DP Forecasting'}
            {invalid ? (
              <span className="mp-invalid-badge" aria-hidden>
                <O9Icon name="close" size={12} />
              </span>
            ) : null}
          </div>
        </div>
      </div>
      <p className="text-xs text-arvo-light-secondary dark:text-neutral-500 mt-2 mb-2">
        {invalid ? 'Invalid placement — duplicate block name.' : 'Simulate an invalid drop.'}
      </p>
      <DemoBtn onClick={trigger}>Drop into Demand Chain</DemoBtn>
      {invalid ? (
        <span className="inline-block ml-2">
          <DemoBtn onClick={() => setInvalid(false)}>Reset</DemoBtn>
        </span>
      ) : null}
    </div>
  )
}

const REORDER_LIST_ITEMS = [
  { id: 'version', label: 'Version', checked: true },
  { id: 'product', label: 'Product', checked: true },
  { id: 'sales-account', label: 'SalesAccount', checked: true },
  { id: 'time', label: 'Time', checked: true },
]

function getReorderShift(index, fromIndex, overIndex, rowHeight) {
  if (fromIndex === null || overIndex === null || fromIndex === overIndex) return 0
  if (index === fromIndex) return 0
  if (fromIndex < overIndex && index > fromIndex && index <= overIndex) return -rowHeight
  if (fromIndex > overIndex && index >= overIndex && index < fromIndex) return rowHeight
  return 0
}

function ReorderRowContent({
  item,
  checked,
  onCheckChange,
  handleProps = null,
  showMoveButtons = true,
  canMoveUp = false,
  canMoveDown = false,
  onMoveUp,
  onMoveDown,
}) {
  return (
    <>
      {handleProps ? (
        <button type="button" className="mp-reorder-handle" {...handleProps}>
          <O9Icon name="drag-handle" size={16} />
        </button>
      ) : (
        <span className="mp-reorder-handle mp-reorder-handle--visual" aria-hidden="true">
          <O9Icon name="drag-handle" size={16} />
        </span>
      )}
      <label className="mp-reorder-row mp-checkbox-item">
        <input
          type="checkbox"
          checked={checked}
          disabled={!onCheckChange}
          onChange={onCheckChange}
        />
        <span className="mp-checkbox-box" data-mp-motion>
          <CheckboxCheckIcon />
        </span>
        <span className="mp-reorder-label">{item.label}</span>
      </label>
      {showMoveButtons ? (
        <div className="mp-reorder-move">
          <button
            type="button"
            className="mp-reorder-move-btn"
            aria-label={`Move ${item.label} up`}
            disabled={!canMoveUp}
            onClick={onMoveUp}
          >
            <O9Icon name="angle-up" size={12} />
          </button>
          <button
            type="button"
            className="mp-reorder-move-btn"
            aria-label={`Move ${item.label} down`}
            disabled={!canMoveDown}
            onClick={onMoveDown}
          >
            <O9Icon name="angle-down" size={12} />
          </button>
        </div>
      ) : null}
    </>
  )
}

/* 22. List reorder */
export function ListReorderDemo() {
  const listRef = useRef(null)
  const floatRef = useRef(null)
  const itemsRef = useRef(REORDER_LIST_ITEMS)
  const dragRef = useRef(null)
  const [items, setItems] = useState(REORDER_LIST_ITEMS)
  const [draggingId, setDraggingId] = useState(null)
  const [overIndex, setOverIndex] = useState(null)
  const [floatStyle, setFloatStyle] = useState(null)
  const [checked, setChecked] = useState(() =>
    Object.fromEntries(REORDER_LIST_ITEMS.map((item) => [item.id, item.checked])),
  )

  itemsRef.current = items

  const draggedItem = draggingId ? items.find((item) => item.id === draggingId) : null
  const fromIndex =
    draggingId !== null ? items.findIndex((item) => item.id === draggingId) : null
  const activeOverIndex =
    draggingId && overIndex !== null ? overIndex : fromIndex !== null ? fromIndex : 0
  const rowHeight = floatStyle?.height ?? 36

  const moveFloat = useCallback((clientY) => {
    const drag = dragRef.current
    const floatEl = floatRef.current
    if (!drag || !floatEl) return
    drag.lastClientY = clientY
    floatEl.style.transform = `translateY(${clientY - drag.offsetY - drag.startTop}px)`
  }, [])

  useLayoutEffect(() => {
    const drag = dragRef.current
    if (!floatRef.current || !drag?.lastClientY) return
    moveFloat(drag.lastClientY)
  }, [floatStyle, moveFloat])

  useEffect(() => {
    if (!draggingId) return undefined

    const onPointerMove = (event) => {
      const drag = dragRef.current
      const list = listRef.current
      if (!drag || !list) return

      moveFloat(event.clientY)

      const restEls = itemsRef.current
        .filter((item) => item.id !== drag.id)
        .map((item) => list.querySelector(`[data-reorder-id="${item.id}"]`))
        .filter(Boolean)

      let nextIndex = restEls.length
      for (let i = 0; i < restEls.length; i += 1) {
        const rect = restEls[i].getBoundingClientRect()
        if (event.clientY < rect.top + rect.height / 2) {
          nextIndex = i
          break
        }
        nextIndex = i + 1
      }

      if (nextIndex === drag.overIndex) return

      drag.overIndex = nextIndex
      setOverIndex(nextIndex)
    }

    const finishDrag = () => {
      const drag = dragRef.current
      dragRef.current = null
      setDraggingId(null)
      setFloatStyle(null)
      setOverIndex(null)

      if (!drag) return

      const { id, overIndex: targetIndex } = drag
      const fromIndex = itemsRef.current.findIndex((item) => item.id === id)
      if (fromIndex === -1 || targetIndex === null || fromIndex === targetIndex) return

      setItems((prev) => {
        const next = [...prev]
        const [moved] = next.splice(fromIndex, 1)
        next.splice(targetIndex, 0, moved)
        return next
      })
    }

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', finishDrag)
    window.addEventListener('pointercancel', finishDrag)

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', finishDrag)
      window.removeEventListener('pointercancel', finishDrag)
    }
  }, [draggingId, moveFloat])

  const startDrag = (event, id) => {
    if (event.button !== 0) return
    event.preventDefault()

    const row = event.currentTarget.closest('[data-reorder-id]')
    if (!row) return

    event.currentTarget.setPointerCapture(event.pointerId)

    const rect = row.getBoundingClientRect()
    const from = itemsRef.current.findIndex((item) => item.id === id)

    dragRef.current = {
      id,
      overIndex: from,
      offsetY: event.clientY - rect.top,
      startTop: rect.top,
    }

    setDraggingId(id)
    setOverIndex(from)
    setFloatStyle({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    })
  }

  const moveItem = (id, direction) => {
    if (draggingId) return
    const animateShift = captureLayoutShift(listRef)
    setItems((prev) => {
      const index = prev.findIndex((item) => item.id === id)
      const nextIndex = index + direction
      if (nextIndex < 0 || nextIndex >= prev.length) return prev
      const next = [...prev]
      const [moved] = next.splice(index, 1)
      next.splice(nextIndex, 0, moved)
      return next
    })
    requestAnimationFrame(animateShift)
  }

  return (
    <div className="mp-reorder-panel">
      <p className="mp-reorder-header">Header</p>
      <ul
        className={`mp-reorder-list${draggingId ? ' is-dragging' : ''}`}
        ref={listRef}
        aria-label="Reorderable filter list"
      >
        {items.map((item, index) => {
          const isDraggingSource = item.id === draggingId
          const shiftPx =
            draggingId && !isDraggingSource
              ? getReorderShift(index, fromIndex, activeOverIndex, rowHeight)
              : 0

          return (
            <li
              key={item.id}
              data-reorder-id={item.id}
              className={`mp-reorder-item${isDraggingSource ? ' is-dragging-source' : ''}`}
              style={
                shiftPx
                  ? { transform: `translateY(${shiftPx}px)` }
                  : shiftPx === 0 && draggingId
                    ? { transform: 'translateY(0)' }
                    : undefined
              }
            >
              <ReorderRowContent
                item={item}
                checked={checked[item.id]}
                onCheckChange={(event) =>
                  setChecked((prev) => ({ ...prev, [item.id]: event.target.checked }))
                }
                canMoveUp={index > 0}
                canMoveDown={index < items.length - 1}
                onMoveUp={() => moveItem(item.id, -1)}
                onMoveDown={() => moveItem(item.id, 1)}
                handleProps={{
                  'aria-label': `Reorder ${item.label}`,
                  onPointerDown: (event) => startDrag(event, item.id),
                }}
              />
            </li>
          )
        })}
      </ul>

      {draggingId && floatStyle && draggedItem
        ? createPortal(
            <div className="motion-playground">
              <div
                ref={floatRef}
                className="mp-reorder-item is-dragging mp-reorder-item--float"
                style={{
                  top: floatStyle.top,
                  left: floatStyle.left,
                  width: floatStyle.width,
                  height: floatStyle.height,
                  transform: 'translateY(0)',
                }}
                aria-hidden="true"
              >
                <ReorderRowContent
                  item={draggedItem}
                  checked={checked[draggedItem.id]}
                  showMoveButtons={false}
                />
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  )
}

const TRANSFER_INITIAL_LEFT = [
  { id: '5', label: 'List item 5' },
  { id: '2', label: 'List item 2' },
  { id: '1', label: 'List item 1' },
  { id: '3', label: 'List item 3' },
  { id: '4', label: 'List item 4' },
]

const TRANSFER_INITIAL_RIGHT = [
  { id: '6', label: 'List item 6' },
  { id: '8', label: 'List item 8' },
]

function waitMs(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms)
  })
}

function getDestShift(index, insertIndex, groupHeight) {
  if (insertIndex === null) return 0
  if (index >= insertIndex) return groupHeight
  return 0
}

function TransferListRow({
  item,
  checked,
  disabled,
  onChange,
  phase = 'idle',
  onDragStart = null,
  style = undefined,
}) {
  return (
    <li
      data-transfer-id={item.id}
      className={`mp-transfer-item${
        phase === 'transferring' ? ' is-transferring' : ''
      }${phase === 'flying' ? ' is-flying' : ''}${phase === 'incoming' ? ' is-incoming' : ''}${
        phase === 'incoming-visible' ? ' is-incoming is-visible' : ''
      }${phase === 'dragging' ? ' is-dragging-source' : ''}`}
      style={style}
    >
      {onDragStart ? (
        <button
          type="button"
          className="mp-transfer-handle"
          aria-label={`Drag ${item.label}`}
          disabled={disabled}
          onPointerDown={(event) => onDragStart(event, item.id)}
        >
          <O9Icon name="drag-handle" size={16} />
        </button>
      ) : (
        <span className="mp-transfer-handle mp-transfer-handle--visual" aria-hidden="true">
          <O9Icon name="drag-handle" size={16} />
        </span>
      )}
      <label className="mp-transfer-row mp-checkbox-item">
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={onChange}
        />
        <span className="mp-checkbox-box" data-mp-motion>
          <CheckboxCheckIcon />
        </span>
        <span className="mp-transfer-label">{item.label}</span>
      </label>
    </li>
  )
}

function TransferFlyLayer({ layer, layerRef = null, className = '' }) {
  if (!layer) return null

  return createPortal(
    <div className="motion-playground">
      <div
        ref={layerRef}
        className={`mp-transfer-fly is-dragging${className}`}
        data-mp-motion
        style={{
          top: layer.top,
          left: layer.left,
          width: layer.width,
          height: layer.height,
          transform: layer.transform,
          opacity: layer.opacity,
        }}
        aria-hidden="true"
      >
        {layer.rows.map((row) => (
          <div
            key={row.id}
            className="mp-transfer-fly-row"
            style={{ top: row.offsetTop, height: row.height }}
          >
            <span className="mp-transfer-fly-box" aria-hidden="true" />
            <span className="mp-transfer-fly-label">{row.label}</span>
          </div>
        ))}
      </div>
    </div>,
    document.body,
  )
}

/* 24. Transfer between containers */
export function TransferListDemo() {
  const leftListRef = useRef(null)
  const rightListRef = useRef(null)
  const transferLockRef = useRef(false)
  const dragRef = useRef(null)
  const dragFloatRef = useRef(null)
  const leftItemsRef = useRef(TRANSFER_INITIAL_LEFT)
  const rightItemsRef = useRef(TRANSFER_INITIAL_RIGHT)
  const selectedLeftRef = useRef(new Set())
  const selectedRightRef = useRef(new Set())

  const [leftItems, setLeftItems] = useState(TRANSFER_INITIAL_LEFT)
  const [rightItems, setRightItems] = useState(TRANSFER_INITIAL_RIGHT)
  const [selectedLeft, setSelectedLeft] = useState(() => new Set())
  const [selectedRight, setSelectedRight] = useState(() => new Set())
  const [transferringIds, setTransferringIds] = useState(() => new Set())
  const [incomingIds, setIncomingIds] = useState(() => new Set())
  const [incomingVisible, setIncomingVisible] = useState(false)
  const [flyLayer, setFlyLayer] = useState(null)
  const [dragLayer, setDragLayer] = useState(null)
  const [dragLayerClass, setDragLayerClass] = useState('')
  const [destReserve, setDestReserve] = useState(null)
  const [dropTarget, setDropTarget] = useState(null)
  const [dragFromSide, setDragFromSide] = useState(null)
  const [isTransferring, setIsTransferring] = useState(false)

  leftItemsRef.current = leftItems
  rightItemsRef.current = rightItems
  selectedLeftRef.current = selectedLeft
  selectedRightRef.current = selectedRight

  const toggleSelected = (side, id, checked) => {
    const setter = side === 'left' ? setSelectedLeft : setSelectedRight
    setter((prev) => {
      const next = new Set(prev)
      if (checked) next.add(id)
      else next.delete(id)
      return next
    })
  }

  const measureTransferGroup = (sourceList, idsToMove, movingItems) => {
    const rowEls = idsToMove
      .map((id) => sourceList.querySelector(`[data-transfer-id="${id}"]`))
      .filter(Boolean)
    if (rowEls.length === 0) return null

    const rects = rowEls.map((el) => el.getBoundingClientRect())
    const groupTop = Math.min(...rects.map((rect) => rect.top))
    const groupLeft = Math.min(...rects.map((rect) => rect.left))
    const groupWidth = Math.max(...rects.map((rect) => rect.width))
    const groupHeight = Math.max(...rects.map((rect) => rect.bottom)) - groupTop

    return {
      top: groupTop,
      left: groupLeft,
      width: groupWidth,
      height: groupHeight,
      rows: movingItems.map((item, index) => ({
        id: item.id,
        label: item.label,
        offsetTop: rects[index].top - groupTop,
        height: rects[index].height,
      })),
    }
  }

  const getDestInsertIndex = (destList, clientY) => {
    const destRows = [...destList.querySelectorAll('[data-transfer-id]')]
    let nextIndex = destRows.length
    for (let i = 0; i < destRows.length; i += 1) {
      const rect = destRows[i].getBoundingClientRect()
      if (clientY < rect.top + rect.height / 2) {
        nextIndex = i
        break
      }
      nextIndex = i + 1
    }
    return nextIndex
  }

  const getDestInsertTop = (destList, insertIndex = null) => {
    const destRows = [...destList.querySelectorAll('[data-transfer-id]')]
    const destRect = destList.getBoundingClientRect()
    if (destRows.length === 0) return destRect.top + 8

    const index = insertIndex ?? destRows.length
    if (index >= destRows.length) {
      return destRows[destRows.length - 1].getBoundingClientRect().bottom
    }
    return destRows[index].getBoundingClientRect().top
  }

  const commitTransfer = async (fromSide, idsToMove, movingItems, insertAt = null) => {
    const isFromLeft = fromSide === 'left'
    const sourceRef = isFromLeft ? leftListRef : rightListRef
    const destRef = isFromLeft ? rightListRef : leftListRef

    const animateSource = captureLayoutShift(sourceRef)
    const animateDest = captureLayoutShift(destRef)

    if (isFromLeft) {
      setLeftItems((prev) => prev.filter((item) => !idsToMove.includes(item.id)))
      setRightItems((prev) => {
        const next = [...prev]
        next.splice(insertAt ?? next.length, 0, ...movingItems)
        return next
      })
      setSelectedLeft(new Set())
    } else {
      setRightItems((prev) => prev.filter((item) => !idsToMove.includes(item.id)))
      setLeftItems((prev) => {
        const next = [...prev]
        next.splice(insertAt ?? next.length, 0, ...movingItems)
        return next
      })
      setSelectedRight(new Set())
    }

    setTransferringIds(new Set())
    setFlyLayer(null)
    setDragLayer(null)
    setDragLayerClass('')
    setIncomingVisible(false)
    setIncomingIds(new Set(idsToMove))

    requestAnimationFrame(() => {
      animateSource()
      animateDest()
      requestAnimationFrame(() => setIncomingVisible(true))
    })

    await waitMs(MOTION_DURATION_MS.base)
    setIncomingIds(new Set())
    setIncomingVisible(false)
    setDestReserve(null)
    setDropTarget(null)
    setDragFromSide(null)
  }

  const executeTransfer = async (fromSide, idsToMove) => {
    if (transferLockRef.current || idsToMove.length === 0) return

    const isFromLeft = fromSide === 'left'
    const sourceItems = isFromLeft ? leftItemsRef.current : rightItemsRef.current
    const movingItems = sourceItems.filter((item) => idsToMove.includes(item.id))
    const sourceRef = isFromLeft ? leftListRef : rightListRef
    const destRef = isFromLeft ? rightListRef : leftListRef
    const destSide = isFromLeft ? 'right' : 'left'

    transferLockRef.current = true
    setIsTransferring(true)
    setTransferringIds(new Set(idsToMove))

    await waitMs(MOTION_DURATION_MS.fast)

    const sourceList = sourceRef.current
    const destList = destRef.current
    if (!sourceList || !destList) {
      transferLockRef.current = false
      setIsTransferring(false)
      setTransferringIds(new Set())
      return
    }

    const group = measureTransferGroup(sourceList, idsToMove, movingItems)
    if (!group) {
      transferLockRef.current = false
      setIsTransferring(false)
      setTransferringIds(new Set())
      return
    }

    const destInsertIndex = isFromLeft ? rightItemsRef.current.length : leftItemsRef.current.length
    const destInsertTop = getDestInsertTop(destList, destInsertIndex)
    const destRect = destList.getBoundingClientRect()
    const deltaX = destRect.left - group.left
    const deltaY = destInsertTop - group.top

    setDestReserve({ side: destSide, height: group.height, insertIndex: destInsertIndex })
    setDropTarget(destSide)
    setDragFromSide(fromSide)
    setFlyLayer({
      ...group,
      transform: 'translate(0px, 0px)',
      opacity: 0.95,
    })

    await waitMs(16)

    setFlyLayer((prev) =>
      prev
        ? {
            ...prev,
            transform: `translate(${deltaX}px, ${deltaY}px)`,
            opacity: 0.88,
          }
        : prev,
    )

    await waitMs(MOTION_DURATION_MS.moderate)
    await commitTransfer(fromSide, idsToMove, movingItems)

    transferLockRef.current = false
    setIsTransferring(false)
  }

  const runTransfer = (from, mode) => {
    const isFromLeft = from === 'left'
    const sourceItems = isFromLeft ? leftItemsRef.current : rightItemsRef.current
    const selected = isFromLeft ? selectedLeftRef.current : selectedRightRef.current
    const idsToMove =
      mode === 'all'
        ? sourceItems.map((item) => item.id)
        : sourceItems.filter((item) => selected.has(item.id)).map((item) => item.id)

    return executeTransfer(from, idsToMove)
  }

  const resolveDragIds = (fromSide, id) => {
    const selected = fromSide === 'left' ? selectedLeftRef.current : selectedRightRef.current
    const sourceItems = fromSide === 'left' ? leftItemsRef.current : rightItemsRef.current
    if (selected.has(id)) {
      return sourceItems.filter((item) => selected.has(item.id)).map((item) => item.id)
    }
    return [id]
  }

  const getDropSide = (clientX, clientY, fromSide) => {
    const leftList = leftListRef.current
    const rightList = rightListRef.current
    if (!leftList || !rightList) return null

    const leftRect = leftList.getBoundingClientRect()
    const rightRect = rightList.getBoundingClientRect()
    const overLeft =
      clientX >= leftRect.left &&
      clientX <= leftRect.right &&
      clientY >= leftRect.top &&
      clientY <= leftRect.bottom
    const overRight =
      clientX >= rightRect.left &&
      clientX <= rightRect.right &&
      clientY >= rightRect.top &&
      clientY <= rightRect.bottom

    if (fromSide === 'left' && overRight) return 'right'
    if (fromSide === 'right' && overLeft) return 'left'
    return null
  }

  const moveDragFloat = useCallback((clientX, clientY) => {
    const drag = dragRef.current
    const floatEl = dragFloatRef.current
    if (!drag || !floatEl) return
    drag.lastClientX = clientX
    drag.lastClientY = clientY
    floatEl.style.transform = `translate(${clientX - drag.offsetX - drag.startLeft}px, ${clientY - drag.offsetY - drag.startTop}px)`
  }, [])

  useLayoutEffect(() => {
    const drag = dragRef.current
    if (!dragFloatRef.current || !drag?.lastClientX) return
    moveDragFloat(drag.lastClientX, drag.lastClientY)
  }, [dragLayer, moveDragFloat])

  useEffect(() => {
    if (!dragLayer) return undefined

    const onPointerMove = (event) => {
      const drag = dragRef.current
      if (!drag) return

      moveDragFloat(event.clientX, event.clientY)

      const nextDrop = getDropSide(event.clientX, event.clientY, drag.fromSide)
      if (!nextDrop) {
        if (drag.dropSide) {
          drag.dropSide = null
          drag.insertIndex = null
          setDropTarget(null)
          setDestReserve(null)
        }
        return
      }

      const destRef = nextDrop === 'left' ? leftListRef : rightListRef
      const destList = destRef.current
      if (!destList) return

      const nextIndex = getDestInsertIndex(destList, event.clientY)
      if (nextDrop === drag.dropSide && nextIndex === drag.insertIndex) return

      drag.dropSide = nextDrop
      drag.insertIndex = nextIndex
      setDropTarget(nextDrop)
      setDestReserve({ side: nextDrop, height: drag.groupHeight, insertIndex: nextIndex })
    }

    const finishDrag = async () => {
      const drag = dragRef.current
      dragRef.current = null
      if (!drag) return

      const { fromSide, idsToMove, movingItems, group, startLeft, startTop } = drag
      const validDrop = drag.dropSide && drag.dropSide !== fromSide

      setDragLayerClass(' mp-transfer-fly--snap')
      if (validDrop) {
        setDropTarget(drag.dropSide)
        setDestReserve({
          side: drag.dropSide,
          height: drag.groupHeight,
          insertIndex: drag.insertIndex ?? 0,
        })
      }

      if (validDrop) {
        const destRef = fromSide === 'left' ? rightListRef : leftListRef
        const destList = destRef.current
        if (destList) {
          const destInsertTop = getDestInsertTop(destList, drag.insertIndex)
          const destRect = destList.getBoundingClientRect()
          const deltaX = destRect.left - startLeft
          const deltaY = destInsertTop - startTop
          if (dragFloatRef.current) {
            dragFloatRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`
          }
          setDragLayer((prev) =>
            prev
              ? {
                  ...prev,
                  transform: `translate(${deltaX}px, ${deltaY}px)`,
                  opacity: 0.88,
                }
              : prev,
          )
        }

        await waitMs(MOTION_DURATION_MS.moderate)
        await commitTransfer(fromSide, idsToMove, movingItems, drag.insertIndex)
      } else {
        if (dragFloatRef.current) {
          dragFloatRef.current.style.transform = 'translate(0px, 0px)'
        }
        setDragLayer((prev) => (prev ? { ...prev, transform: 'translate(0px, 0px)', opacity: 0.95 } : prev))
        await waitMs(MOTION_DURATION_MS.fast)
        setTransferringIds(new Set())
        setDragLayer(null)
        setDragLayerClass('')
        setDestReserve(null)
        setDropTarget(null)
        setDragFromSide(null)
      }

      transferLockRef.current = false
      setIsTransferring(false)
    }

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', finishDrag)
    window.addEventListener('pointercancel', finishDrag)

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', finishDrag)
      window.removeEventListener('pointercancel', finishDrag)
    }
  }, [dragLayer, moveDragFloat])

  const startDrag = (event, fromSide, id) => {
    if (transferLockRef.current || event.button !== 0) return
    event.preventDefault()

    const row = event.currentTarget.closest('[data-transfer-id]')
    const sourceList = (fromSide === 'left' ? leftListRef : rightListRef).current
    if (!row || !sourceList) return

    event.currentTarget.setPointerCapture(event.pointerId)

    const idsToMove = resolveDragIds(fromSide, id)
    const sourceItems = fromSide === 'left' ? leftItemsRef.current : rightItemsRef.current
    const movingItems = sourceItems.filter((item) => idsToMove.includes(item.id))
    const group = measureTransferGroup(sourceList, idsToMove, movingItems)
    if (!group) return

    transferLockRef.current = true
    setIsTransferring(true)
    setTransferringIds(new Set(idsToMove))
    setDropTarget(null)
    setDragFromSide(fromSide)
    setDragLayerClass(' mp-transfer-fly--dragging')

    dragRef.current = {
      fromSide,
      idsToMove,
      movingItems,
      group,
      groupHeight: group.height,
      dropSide: null,
      insertIndex: null,
      startLeft: group.left,
      startTop: group.top,
      offsetX: event.clientX - group.left,
      offsetY: event.clientY - group.top,
      lastClientX: event.clientX,
      lastClientY: event.clientY,
    }

    setDragLayer({
      ...group,
      transform: 'translate(0px, 0px)',
      opacity: 0.95,
    })
  }

  const getRowPhase = (id) => {
    if (dragLayer && transferringIds.has(id)) return 'dragging'
    if (transferringIds.has(id)) return flyLayer ? 'flying' : 'transferring'
    if (incomingIds.has(id)) return incomingVisible ? 'incoming-visible' : 'incoming'
    return 'idle'
  }

  const isBusy = isTransferring
  const hasLeftSelection = selectedLeft.size > 0
  const hasRightSelection = selectedRight.size > 0

  const renderTransferListItems = (items, side) => {
    const isActiveDropTarget = dropTarget === side && dragLayer
    const insertIndex = isActiveDropTarget ? (destReserve?.insertIndex ?? items.length) : null
    const groupHeight = isActiveDropTarget ? destReserve?.height : 0

    return items.map((item, index) => {
      const shiftPx = isActiveDropTarget ? getDestShift(index, insertIndex, groupHeight) : 0

      return (
        <TransferListRow
          key={item.id}
          item={item}
          checked={side === 'left' ? selectedLeft.has(item.id) : selectedRight.has(item.id)}
          disabled={isBusy}
          phase={getRowPhase(item.id)}
          onDragStart={(event) => startDrag(event, side, item.id)}
          onChange={(event) => toggleSelected(side, item.id, event.target.checked)}
          style={
            shiftPx
              ? { transform: `translateY(${shiftPx}px)` }
              : isActiveDropTarget
                ? { transform: 'translateY(0)' }
                : undefined
          }
        />
      )
    })
  }

  return (
    <div className="mp-transfer" role="group" aria-label="Transfer items between lists">
      <div className="mp-transfer-list-wrap">
        <ul
          className={`mp-transfer-list${dropTarget === 'left' ? ' is-drop-target' : ''}${
            dragFromSide === 'left' ? ' is-drag-source-panel' : ''
          }${dragLayer ? ' is-dragging' : ''}`}
          ref={leftListRef}
          aria-label="Available items"
        >
          {renderTransferListItems(leftItems, 'left')}
        </ul>
      </div>

      <div className="mp-transfer-controls" aria-label="Transfer actions">
        <button
          type="button"
          className="mp-transfer-btn"
          aria-label="Move all to right"
          disabled={leftItems.length === 0 || isBusy}
          onClick={() => runTransfer('left', 'all')}
        >
          <O9Icon name="angle-double-right" size={16} />
        </button>
        <button
          type="button"
          className="mp-transfer-btn"
          aria-label="Move selected to right"
          disabled={!hasLeftSelection || isBusy}
          onClick={() => runTransfer('left', 'selected')}
        >
          <O9Icon name="angle-right" size={16} />
        </button>
        <button
          type="button"
          className="mp-transfer-btn"
          aria-label="Move selected to left"
          disabled={!hasRightSelection || isBusy}
          onClick={() => runTransfer('right', 'selected')}
        >
          <O9Icon name="angle-left" size={16} />
        </button>
        <button
          type="button"
          className="mp-transfer-btn"
          aria-label="Move all to left"
          disabled={rightItems.length === 0 || isBusy}
          onClick={() => runTransfer('right', 'all')}
        >
          <O9Icon name="angle-double-left" size={16} />
        </button>
      </div>

      <div className="mp-transfer-list-wrap">
        <ul
          className={`mp-transfer-list${dropTarget === 'right' ? ' is-drop-target' : ''}${
            dragFromSide === 'right' ? ' is-drag-source-panel' : ''
          }${dragLayer ? ' is-dragging' : ''}`}
          ref={rightListRef}
          aria-label="Selected items"
        >
          {renderTransferListItems(rightItems, 'right')}
        </ul>
      </div>

      <TransferFlyLayer layer={flyLayer} />
      <TransferFlyLayer
        layer={dragLayer}
        layerRef={dragFloatRef}
        className={dragLayerClass}
      />
    </div>
  )
}

/* 25. Progress indicator */
export function ProgressDemo() {
  const [linearValue, setLinearValue] = useState(60)
  const [linearIndeterminate, setLinearIndeterminate] = useState(false)
  const [circularValue, setCircularValue] = useState(80)
  const [circularIndeterminate, setCircularIndeterminate] = useState(false)
  const [gaugeValue, setGaugeValue] = useState(71)
  const [gaugeIndeterminate, setGaugeIndeterminate] = useState(false)

  const animatedLinear = useAnimatedPercent(linearValue)
  const animatedCircular = useAnimatedPercent(circularValue)
  const animatedGauge = useAnimatedPercent(gaugeValue)

  const bumpLinear = (delta) => {
    setLinearIndeterminate(false)
    setLinearValue((value) => Math.max(0, Math.min(100, value + delta)))
  }

  const bumpCircular = (delta) => {
    setCircularIndeterminate(false)
    setCircularValue((value) => Math.max(0, Math.min(100, value + delta)))
  }

  const bumpGauge = (delta) => {
    setGaugeIndeterminate(false)
    setGaugeValue((value) => Math.max(0, Math.min(100, value + delta)))
  }

  return (
    <div className="mp-progress-demos" role="group" aria-label="Progress indicator variants">
      <section className="mp-progress-section">
        <h3 className="mp-progress-section-title">Linear progress</h3>
        <p className="mp-progress-section-desc">
          Horizontal track with label and percentage. Fill animates left-to-right; indeterminate mode slides a
          segment until a value is available.
        </p>
        <div className="mp-progress-card">
          <p className="mp-progress-label">Uploading photos...</p>
          <div className="mp-progress-linear-row">
            <div
              className="mp-progress-linear-track"
              role="progressbar"
              aria-label="Uploading photos"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={linearIndeterminate ? undefined : linearValue}
            >
              {linearIndeterminate ? (
                <span className="mp-progress-linear-indeterminate" data-mp-motion aria-hidden="true">
                  <span className="mp-progress-linear-indeterminate-bar" />
                </span>
              ) : (
                <span
                  className="mp-progress-linear-fill"
                  data-mp-motion
                  style={{ width: `${linearValue}%` }}
                />
              )}
            </div>
            {!linearIndeterminate ? (
              <span className="mp-progress-linear-value" aria-hidden="true">
                {animatedLinear}%
              </span>
            ) : null}
          </div>
        </div>
        <div className="mp-progress-controls">
          <DemoBtn onClick={() => bumpLinear(10)} disabled={linearIndeterminate}>
            +10%
          </DemoBtn>
          <DemoBtn onClick={() => bumpLinear(-10)} disabled={linearIndeterminate}>
            −10%
          </DemoBtn>
          <DemoBtn onClick={() => { setLinearIndeterminate(false); setLinearValue(100) }}>
            Complete
          </DemoBtn>
          <DemoBtn
            onClick={() => setLinearIndeterminate((on) => !on)}
            aria-pressed={linearIndeterminate}
          >
            {linearIndeterminate ? 'Determinate' : 'Indeterminate'}
          </DemoBtn>
        </div>
      </section>

      <section className="mp-progress-section">
        <h3 className="mp-progress-section-title">Circular with label</h3>
        <p className="mp-progress-section-desc">
          Circular track with arc progressing clockwise from 12 o&apos;clock. Value is centered inside the ring.
        </p>
        <div className="mp-progress-card mp-progress-card--circular">
          <svg
            className="mp-progress-circular"
            viewBox={`0 0 ${PROGRESS_CIRCULAR_SIZE} ${PROGRESS_CIRCULAR_SIZE}`}
            role="progressbar"
            aria-label="Upload progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={circularIndeterminate ? undefined : circularValue}
          >
            <circle
              className="mp-progress-circular-track"
              cx={PROGRESS_CIRCULAR_SIZE / 2}
              cy={PROGRESS_CIRCULAR_SIZE / 2}
              r={PROGRESS_CIRCULAR_RADIUS}
            />
            {circularIndeterminate ? (
              <circle
                className="mp-progress-circular-indeterminate"
                cx={PROGRESS_CIRCULAR_SIZE / 2}
                cy={PROGRESS_CIRCULAR_SIZE / 2}
                r={PROGRESS_CIRCULAR_RADIUS}
                data-mp-motion
              />
            ) : (
              <circle
                className="mp-progress-circular-arc"
                cx={PROGRESS_CIRCULAR_SIZE / 2}
                cy={PROGRESS_CIRCULAR_SIZE / 2}
                r={PROGRESS_CIRCULAR_RADIUS}
                data-mp-motion
                transform={`rotate(-90 ${PROGRESS_CIRCULAR_SIZE / 2} ${PROGRESS_CIRCULAR_SIZE / 2})`}
                style={{
                  strokeDasharray: PROGRESS_CIRCULAR_C,
                  strokeDashoffset: PROGRESS_CIRCULAR_C * (1 - circularValue / 100),
                }}
              />
            )}
            {!circularIndeterminate ? (
              <text
                className="mp-progress-circular-value"
                x={PROGRESS_CIRCULAR_SIZE / 2}
                y={PROGRESS_CIRCULAR_SIZE / 2}
                aria-hidden="true"
              >
                {animatedCircular}%
              </text>
            ) : null}
          </svg>
        </div>
        <div className="mp-progress-controls">
          <DemoBtn onClick={() => bumpCircular(10)} disabled={circularIndeterminate}>
            +10%
          </DemoBtn>
          <DemoBtn onClick={() => bumpCircular(-10)} disabled={circularIndeterminate}>
            −10%
          </DemoBtn>
          <DemoBtn onClick={() => { setCircularIndeterminate(false); setCircularValue(100) }}>
            Complete
          </DemoBtn>
          <DemoBtn
            onClick={() => setCircularIndeterminate((on) => !on)}
            aria-pressed={circularIndeterminate}
          >
            {circularIndeterminate ? 'Determinate' : 'Indeterminate'}
          </DemoBtn>
        </div>
      </section>

      <section className="mp-progress-section">
        <h3 className="mp-progress-section-title">Half gauge</h3>
        <p className="mp-progress-section-desc">
          Semi-circular track with sharp butt caps — fill advances from left to right with a flat leading edge. Value sits on the baseline aligned with the arc corners.
        </p>
        <div className="mp-progress-card mp-progress-card--gauge">
          <div
            className="mp-progress-gauge-shell"
            role="progressbar"
            aria-label="Gauge progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={gaugeIndeterminate ? undefined : gaugeValue}
          >
            <svg
              className="mp-progress-gauge"
              viewBox={`0 0 ${PROGRESS_GAUGE_WIDTH} ${PROGRESS_GAUGE_HEIGHT}`}
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              <path className="mp-progress-gauge-track" d={PROGRESS_GAUGE_PATH} />
              {gaugeIndeterminate ? (
                <path
                  className="mp-progress-gauge-indeterminate"
                  d={PROGRESS_GAUGE_PATH}
                  pathLength={100}
                  data-mp-motion
                />
              ) : (
                <path
                  className="mp-progress-gauge-arc"
                  d={PROGRESS_GAUGE_PATH}
                  data-mp-motion
                  style={{
                    strokeDasharray: PROGRESS_GAUGE_ARC,
                    strokeDashoffset: PROGRESS_GAUGE_ARC * (1 - animatedGauge / 100),
                  }}
                />
              )}
            </svg>
            {!gaugeIndeterminate ? (
              <span
                className="mp-progress-gauge-value"
                style={{ bottom: PROGRESS_GAUGE_VALUE_BOTTOM }}
                aria-hidden="true"
              >
                {animatedGauge}%
              </span>
            ) : null}
          </div>
        </div>
        <div className="mp-progress-controls">
          <DemoBtn onClick={() => bumpGauge(10)} disabled={gaugeIndeterminate}>
            +10%
          </DemoBtn>
          <DemoBtn onClick={() => bumpGauge(-10)} disabled={gaugeIndeterminate}>
            −10%
          </DemoBtn>
          <DemoBtn onClick={() => { setGaugeIndeterminate(false); setGaugeValue(100) }}>
            Complete
          </DemoBtn>
          <DemoBtn
            onClick={() => setGaugeIndeterminate((on) => !on)}
            aria-pressed={gaugeIndeterminate}
          >
            {gaugeIndeterminate ? 'Determinate' : 'Indeterminate'}
          </DemoBtn>
        </div>
      </section>
    </div>
  )
}

/* 26. Carousel pagination */
const CAROUSEL_SLIDES = [
  { id: '1', label: 'Overview', tone: '#f5f5f5', accent: '#010101' },
  { id: '2', label: 'Details', tone: '#eef4ff', accent: '#1d4ed8' },
  { id: '3', label: 'Gallery', tone: '#f0fdf4', accent: '#15803d' },
  { id: '4', label: 'Summary', tone: '#fef3c7', accent: '#b45309' },
]

const CAROUSEL_SWIPE_THRESHOLD = 0.22

export function CarouselDemo() {
  const viewportRef = useRef(null)
  const trackRef = useRef(null)
  const indexRef = useRef(0)
  const dragRef = useRef(null)
  const [index, setIndex] = useState(0)
  const [dragPx, setDragPx] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  indexRef.current = index
  const isLocked = isAnimating || isDragging

  const finishAnimation = useCallback(() => {
    setIsAnimating(false)
  }, [])

  const navigateTo = useCallback((targetIndex) => {
    if (dragRef.current?.active) return
    if (targetIndex === indexRef.current) return
    if (targetIndex < 0 || targetIndex >= CAROUSEL_SLIDES.length) return
    setDragPx(0)
    setIsAnimating(true)
    setIndex(targetIndex)
  }, [])

  const goNext = () => navigateTo(indexRef.current + 1)
  const goPrev = () => navigateTo(indexRef.current - 1)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return undefined

    const onTransitionEnd = (event) => {
      if (event.propertyName !== 'transform') return
      finishAnimation()
    }

    track.addEventListener('transitionend', onTransitionEnd)
    return () => track.removeEventListener('transitionend', onTransitionEnd)
  }, [finishAnimation])

  useEffect(() => {
    if (!isAnimating) return undefined
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timer = window.setTimeout(
      finishAnimation,
      reduced ? 0 : MOTION_DURATION_MS.medium + 40,
    )
    return () => window.clearTimeout(timer)
  }, [index, isAnimating, finishAnimation])

  useEffect(() => {
    if (!isDragging) return undefined

    const onPointerMove = (event) => {
      const drag = dragRef.current
      if (!drag?.active) return

      let delta = event.clientX - drag.startX
      const atStart = indexRef.current === 0 && delta > 0
      const atEnd = indexRef.current === CAROUSEL_SLIDES.length - 1 && delta < 0
      if (atStart || atEnd) delta *= 0.35

      setDragPx(delta)
    }

    const onPointerUp = (event) => {
      const drag = dragRef.current
      dragRef.current = null
      setIsDragging(false)

      if (!drag?.active) return

      const viewport = viewportRef.current
      const width = viewport?.offsetWidth ?? 0
      const delta = event.clientX - drag.startX
      const threshold = width * CAROUSEL_SWIPE_THRESHOLD

      if (delta <= -threshold) {
        navigateTo(indexRef.current + 1)
      } else if (delta >= threshold) {
        navigateTo(indexRef.current - 1)
      } else {
        setIsAnimating(true)
        setDragPx(0)
      }
    }

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
    window.addEventListener('pointercancel', onPointerUp)

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
      window.removeEventListener('pointercancel', onPointerUp)
    }
  }, [isDragging, navigateTo])

  const startDrag = (event) => {
    if (isAnimating || event.button !== 0) return
    event.preventDefault()

    dragRef.current = { startX: event.clientX, active: true }
    setIsDragging(true)
    setDragPx(0)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const translateX = `calc(${-index * 100}% + ${dragPx}px)`

  return (
    <div className="mp-carousel" role="region" aria-label="Carousel with square dot pagination" aria-roledescription="carousel">
      <div className="mp-carousel-frame">
        <button
          type="button"
          className="mp-carousel-arrow"
          aria-label="Previous slide"
          disabled={isLocked || index === 0}
          onClick={goPrev}
        >
          <O9Icon name="angle-left" size={16} />
        </button>

        <div
          className="mp-carousel-viewport"
          ref={viewportRef}
          onPointerDown={startDrag}
        >
          <div
            ref={trackRef}
            className={`mp-carousel-track${isDragging ? ' is-dragging' : ''}`}
            data-mp-motion
            style={{ transform: `translateX(${translateX})` }}
          >
            {CAROUSEL_SLIDES.map((slide, slideIndex) => (
              <article
                key={slide.id}
                className="mp-carousel-slide"
                aria-hidden={slideIndex !== index}
                style={{ backgroundColor: slide.tone, color: slide.accent }}
              >
                <span className="mp-carousel-slide-index">{slideIndex + 1}</span>
                <p className="mp-carousel-slide-label">{slide.label}</p>
              </article>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="mp-carousel-arrow"
          aria-label="Next slide"
          disabled={isLocked || index === CAROUSEL_SLIDES.length - 1}
          onClick={goNext}
        >
          <O9Icon name="angle-right" size={16} />
        </button>
      </div>

      <div className="mp-carousel-dots" role="tablist" aria-label="Choose slide">
        {CAROUSEL_SLIDES.map((slide, dotIndex) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            className={`mp-carousel-dot${dotIndex === index ? ' is-active' : ''}`}
            data-mp-motion
            aria-label={`Go to ${slide.label}`}
            aria-selected={dotIndex === index}
            disabled={isLocked}
            onClick={() => navigateTo(dotIndex)}
          />
        ))}
      </div>
    </div>
  )
}

const STEPPER_STEP_DEFS = [
  { title: 'Upload dataset' },
  { title: 'Map columns' },
  { title: 'Validate rows' },
  { title: 'Approve import' },
  { title: 'Publish' },
]

const STEPPER_STATUS_LABEL = {
  completed: 'Complete',
  current: 'In progress',
  warning: 'Needs review',
  error: 'Blocked',
  inactive: 'Upcoming',
}

function stepperLabel(status) {
  return STEPPER_STATUS_LABEL[status]
}

function StepperMarker({ index, status }) {
  const isCompleted = status === 'completed'

  return (
    <span className={`mp-stepper-marker mp-stepper-marker--${status}`} data-mp-motion aria-hidden="true">
      <span className={`mp-stepper-number${isCompleted ? ' is-hidden' : ''}`}>{index + 1}</span>
      <span className={`mp-stepper-check${isCompleted ? ' is-visible' : ''}`}>
        <span className="o9con o9con-check-circle o9con-20" aria-hidden="true" />
      </span>
    </span>
  )
}

function buildInitialStepperState() {
  return {
    currentIndex: 0,
    lineStep: 0,
    statuses: ['current', 'inactive', 'inactive', 'inactive', 'inactive'],
  }
}

/* 27. Stepper */
export function StepperDemo() {
  const railRef = useRef(null)
  const pendingNavRef = useRef(null)
  const initial = buildInitialStepperState()
  const [currentIndex, setCurrentIndex] = useState(initial.currentIndex)
  const [lineStep, setLineStep] = useState(initial.lineStep)
  const [statuses, setStatuses] = useState(initial.statuses)
  const [isAnimating, setIsAnimating] = useState(false)

  const stepCount = STEPPER_STEP_DEFS.length
  const fillPercent = stepCount > 1 ? (lineStep / (stepCount - 1)) * 100 : 0

  const applyForward = (fromIndex) => {
    setStatuses((prev) => {
      const next = [...prev]
      next[fromIndex] = 'completed'
      next[fromIndex + 1] = 'current'
      return next
    })
    setCurrentIndex(fromIndex + 1)
  }

  const applyBackward = (fromIndex) => {
    setStatuses((prev) => {
      const next = [...prev]
      next[fromIndex] = 'inactive'
      next[fromIndex - 1] = 'current'
      return next
    })
    setCurrentIndex(fromIndex - 1)
  }

  const finishConnectorAnimation = useCallback(() => {
    const pending = pendingNavRef.current
    pendingNavRef.current = null
    if (!pending) {
      setIsAnimating(false)
      return
    }
    if (pending.direction === 'forward') {
      applyForward(pending.fromIndex)
    } else {
      applyBackward(pending.fromIndex)
    }
    setIsAnimating(false)
  }, [])

  useEffect(() => {
    const rail = railRef.current
    if (!rail || !isAnimating) return undefined

    const onTransitionEnd = (event) => {
      if (event.propertyName !== 'width') return
      finishConnectorAnimation()
    }

    rail.addEventListener('transitionend', onTransitionEnd)
    return () => rail.removeEventListener('transitionend', onTransitionEnd)
  }, [isAnimating, lineStep, finishConnectorAnimation])

  useEffect(() => {
    if (!isAnimating) return undefined
    const timer = window.setTimeout(finishConnectorAnimation, MOTION_DURATION_MS.base + 40)
    return () => window.clearTimeout(timer)
  }, [isAnimating, lineStep, finishConnectorAnimation])

  const goNext = () => {
    if (isAnimating || currentIndex >= stepCount - 1) return

    pendingNavRef.current = { direction: 'forward', fromIndex: currentIndex }
    setIsAnimating(true)
    setLineStep(currentIndex + 1)
  }

  const goPrevious = () => {
    if (isAnimating || currentIndex <= 0) return

    pendingNavRef.current = { direction: 'backward', fromIndex: currentIndex }
    setIsAnimating(true)
    setLineStep(currentIndex - 1)
  }

  return (
    <div className="mp-stepper-demo">
      <div
        className="mp-stepper"
        role="list"
        aria-label="Import workflow steps"
        aria-busy={isAnimating}
      >
        <div className="mp-stepper-rail" aria-hidden="true">
          <div className="mp-stepper-rail-track" />
          <div
            ref={railRef}
            className="mp-stepper-rail-fill"
            data-mp-motion
            style={{ '--stepper-fill': fillPercent }}
          />
        </div>

        <div className="mp-stepper-steps">
          {STEPPER_STEP_DEFS.map((step, index) => {
            const status = statuses[index]
            const isMuted = status === 'inactive'

            return (
              <div key={step.title} className="mp-stepper-step" role="listitem">
                <StepperMarker index={index} status={status} />
                <p
                  className={`mp-stepper-step-title${isMuted ? ' is-muted' : ''}`}
                  data-mp-motion
                >
                  {step.title}
                </p>
                <p
                  className={`mp-stepper-step-label${isMuted ? ' is-muted' : ''}`}
                  data-mp-motion
                >
                  {stepperLabel(status)}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mp-stepper-controls">
        <DemoBtn disabled={isAnimating || currentIndex === 0} onClick={goPrevious}>
          Previous
        </DemoBtn>
        <DemoBtn disabled={isAnimating || currentIndex >= stepCount - 1} onClick={goNext}>
          Next
        </DemoBtn>
      </div>
    </div>
  )
}

const SPLIT_LIST_ITEMS = [
  {
    id: 'forecast',
    title: 'Demand forecast',
    subtitle: 'Updated 2 hours ago',
    description: 'Adjust horizon, seasonality, and baseline model inputs for this workspace.',
  },
  {
    id: 'inventory',
    title: 'Inventory policy',
    subtitle: 'Updated yesterday',
    description: 'Configure safety stock, replenishment thresholds, and exception alerts.',
  },
  {
    id: 'pricing',
    title: 'Pricing rules',
    subtitle: 'Updated 3 days ago',
    description: 'Edit lane pricing, discount tiers, and approval workflow settings.',
  },
  {
    id: 'suppliers',
    title: 'Supplier list',
    subtitle: 'Updated last week',
    description: 'Manage vendor contacts, lead times, and capacity limits for sourcing.',
  },
]

/* 28. List split view */
export function ListSplitViewDemo() {
  const switchTimerRef = useRef(null)
  const [selectedId, setSelectedId] = useState(null)
  const [contentFading, setContentFading] = useState(false)

  const isSplit = selectedId !== null
  const selectedItem = SPLIT_LIST_ITEMS.find((item) => item.id === selectedId)

  useEffect(
    () => () => {
      if (switchTimerRef.current) window.clearTimeout(switchTimerRef.current)
    },
    [],
  )

  const openEdit = (id) => {
    if (selectedId === id) return

    if (selectedId === null) {
      setSelectedId(id)
      return
    }

    setContentFading(true)
    if (switchTimerRef.current) window.clearTimeout(switchTimerRef.current)
    switchTimerRef.current = window.setTimeout(() => {
      setSelectedId(id)
      setContentFading(false)
    }, MOTION_DURATION_MS.fast)
  }

  const closeDetail = () => {
    if (switchTimerRef.current) window.clearTimeout(switchTimerRef.current)
    setContentFading(false)
    setSelectedId(null)
  }

  return (
    <div className={`mp-split-view${isSplit ? ' is-split' : ''}`} data-mp-motion>
      <div className="mp-split-view-list">
        <ul className="mp-split-view-items" role="list" aria-label="Configuration items">
          {SPLIT_LIST_ITEMS.map((item) => (
            <li
              key={item.id}
              className={`mp-split-view-item${selectedId === item.id ? ' is-selected' : ''}`}
            >
              <div className="mp-split-view-item-body">
                <p className="mp-split-view-item-title">{item.title}</p>
                <p className="mp-split-view-item-sub">{item.subtitle}</p>
              </div>
              <button
                type="button"
                className="mp-split-view-edit"
                aria-label={`Edit ${item.title}`}
                aria-pressed={selectedId === item.id}
                onClick={() => openEdit(item.id)}
              >
                <O9Icon name="pencil" size={16} />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mp-split-view-detail" aria-hidden={!isSplit}>
        {selectedItem ? (
          <div
            className={`mp-split-view-detail-inner${contentFading ? ' is-fading' : ''}`}
            role="region"
            aria-label={`Edit ${selectedItem.title}`}
          >
            <div className="mp-split-view-detail-header">
              <h4 className="mp-split-view-detail-title">{selectedItem.title}</h4>
              <button
                type="button"
                className="mp-split-view-close"
                aria-label="Close detail"
                onClick={closeDetail}
              >
                <O9Icon name="close" size={16} />
              </button>
            </div>
            <p className="mp-split-view-detail-desc">{selectedItem.description}</p>
            <label className="mp-split-view-field">
              <span>Name</span>
              <input type="text" defaultValue={selectedItem.title} />
            </label>
            <div className="mp-split-view-actions">
              <DemoBtn onClick={closeDetail}>Cancel</DemoBtn>
              <DemoBtn onClick={closeDetail}>Save</DemoBtn>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

/* 29. Loader */
export function LoaderDemo() {
  return (
    <div className="mp-loaders" role="group" aria-label="Loader variants">
      <div className="mp-loader-group mp-loader-group--skeleton">
        <div className="mp-skeleton-card" aria-hidden="true">
          <div className="mp-skeleton mp-skeleton--avatar" data-mp-motion />
          <div className="mp-skeleton-lines">
            <div className="mp-skeleton mp-skeleton--line mp-skeleton--wide" data-mp-motion />
            <div className="mp-skeleton mp-skeleton--line" data-mp-motion />
            <div className="mp-skeleton mp-skeleton--line mp-skeleton--narrow" data-mp-motion />
          </div>
        </div>
        <p className="mp-loader-label">Skeleton loader</p>
      </div>
      <div className="mp-loader-group">
        <div className="mp-dot-loader" data-mp-motion aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p className="mp-loader-label">Dot Loader</p>
      </div>
      <div className="mp-loader-group">
        <div className="mp-circle-loader" data-mp-motion aria-hidden="true" />
        <p className="mp-loader-label">Circular Loader</p>
      </div>
      <div className="mp-loader-group">
        <span className="mp-square-loader" data-mp-motion aria-hidden="true" />
        <p className="mp-loader-label">Square Loader</p>
      </div>
    </div>
  )
}

/** Map playground section id → demo component. */
export const MOTION_PLAYGROUND_DEMOS = {
  'motion-pg-expand': ExpandCollapseDemo,
  'motion-pg-accordion': AccordionDemo,
  'motion-pg-popup': PopupDemo,
  'motion-pg-dialog': DialogDemo,
  'motion-pg-feedback': FeedbackDemo,
  'motion-pg-banner-dismiss': BannerDismissDemo,
  'motion-pg-focus-ring': FocusRingDemo,
  'motion-pg-form-input': FormInputDemo,
  'motion-pg-checkbox': CheckboxDemo,
  'motion-pg-radio': RadioDemo,
  'motion-pg-slider': SliderDemo,
  'motion-pg-progress': ProgressDemo,
  'motion-pg-carousel': CarouselDemo,
  'motion-pg-stepper': StepperDemo,
  'motion-pg-tabs': TabsDemo,
  'motion-pg-nav-indicator': NavActiveIndicatorDemo,
  'motion-pg-button-group': ButtonGroupDemo,
  'motion-pg-button-group-multi': ButtonGroupMultiSelectDemo,
  'motion-pg-search-expand': SearchExpandDemo,
  'motion-pg-toggle': ToggleIconDemo,
  'motion-pg-show-more': ShowMoreDemo,
  'motion-pg-status': StatusIndicatorDemo,
  'motion-pg-counter': CounterDemo,
  'motion-pg-chip-remove': ChipRemoveDemo,
  'motion-pg-chip-toggle': ChipToggleDemo,
  'motion-pg-search-highlight': SearchHighlightDemo,
  'motion-pg-avatar-uplift': AvatarGroupUpliftDemo,
  'motion-pg-empty-state': EmptyStateDemo,
  'motion-pg-pane': DrawerDemo,
  'motion-pg-launchbar-drawer': LaunchbarDrawerDemo,
  'motion-pg-switch': SwitchDemo,
  'motion-pg-link': LinkDemo,
  'motion-pg-nested-content': NestedContentDemo,
  'motion-pg-nested-footer': NestedSurfaceDemo,
  'motion-pg-loader': LoaderDemo,
  'motion-pg-list-reorder': ListReorderDemo,
  'motion-pg-list-split': ListSplitViewDemo,
  'motion-pg-transfer': TransferListDemo,
  'motion-pg-invalid-drop': InvalidDropDemo,
}
