/** Motion Playground — continuous preview: discover and drive interactive demo targets. */

/** Global wave interval — all visible cards step together on this beat. */
export const AUTOPLAY_STEP_MS = 1050

/** Idle waves at end states so motion can be read before reset. */
export const AUTOPLAY_HOLD_WAVES = {
  default: 2,
  sequential: 3,
  showMore: 3,
  popup: 6,
  searchExpand: 3,
  link: 4,
  toastGap: 3,
  nested: 2,
  transfer: 3,
  checkbox: 4,
  radio: 2,
  chipToggle: 4,
  banner: 5,
  reorder: 4,
}

/** Examples excluded from continuous preview (modal blocks page / manual only). */
export const MOTION_AUTOPLAY_EXCLUDED = new Set(['motion-pg-dialog'])

/** CSS-only loops — no interaction cycling needed. */
export const MOTION_AUTOPLAY_STATIC = new Set(['motion-pg-loader', 'motion-pg-empty-state'])

/** Sub-demo regions — parallel groups; specialized profiles override grouping. */
const AUTOPLAY_REGION_SELECTORS = [
  '.mp-chip-filter-demo',
  '.mp-tabs-demo',
  '.mp-popup-row > div',
  '.mp-popup-wrap',
  '.mp-tooltip-wrap',
  '.mp-progress-section',
  '.mp-button-group-demo',
  '.mp-search-expand-demo',
  '.mp-toggle-demo',
  '.mp-show-more-demo',
  '.mp-status-demo',
  '.mp-checkbox-group',
  '.mp-radio-group',
  '.mp-slider',
  '.mp-counter-wrap',
  '.mp-switch',
  '.mp-form-input-wrap',
  '.mp-nav-scene',
  '.mp-transfer-list-wrap',
  '.mp-transfer-controls',
  '.mp-reorder-panel',
  '.mp-split-view',
  '.mp-carousel',
  '.mp-stepper-demo',
  '.mp-drawer-scene',
  '.mp-nested-content-demo',
  '.mp-nested-surface-wrap',
  '.mp-drop-zone',
]

const AUTOPLAY_PROFILE = {
  'motion-pg-expand': 'sequential',
  'motion-pg-accordion': 'sequential',
  'motion-pg-show-more': 'showMore',
  'motion-pg-popup': 'popup',
  'motion-pg-search-expand': 'searchExpand',
  'motion-pg-link': 'link',
  'motion-pg-feedback': 'toast',
  'motion-pg-nested-content': 'nestedContent',
  'motion-pg-nested-footer': 'nestedSurface',
  'motion-pg-launchbar-drawer': 'launchbar',
  'motion-pg-focus-ring': 'focusRing',
  'motion-pg-checkbox': 'checkbox',
  'motion-pg-radio': 'radio',
  'motion-pg-switch': 'switch',
  'motion-pg-form-input': 'formInput',
  'motion-pg-search-highlight': 'searchHighlight',
  'motion-pg-avatar-uplift': 'avatar',
  'motion-pg-list-reorder': 'reorder',
  'motion-pg-transfer': 'transfer',
  'motion-pg-chip-toggle': 'chipToggle',
  'motion-pg-banner-dismiss': 'bannerDismiss',
  'motion-pg-scrollspy': 'scrollspy',
}

const RANGE_VALUES = [12, 28, 45, 62, 78, 92, 38]
const TEXT_SAMPLES = ['', 'dem', 'demand', 'plan', 'demand plan']
const SEARCH_HIGHLIGHT_SAMPLES = ['', 'd', 'de', 'dem', 'dema', 'deman', 'demand']
const TOAST_BURST_COUNT = 5

export function createAutoplayState() {
  return {
    rangeIndex: new Map(),
    textIndex: new Map(),
    activeLink: null,
    tooltipHovered: false,
    focusSegments: [],
    activeAvatar: null,
    reorderItemId: null,
  }
}

function isEligible(el, container) {
  if (!container.contains(el)) return false
  if (el.closest('[data-mp-autoplay-skip]')) return false
  if (el.closest('dialog[open]')) return false
  if (el.closest('.mg-preview-actions, .mg-code-toggle')) return false

  const style = window.getComputedStyle(el)
  if (style.display === 'none' || style.visibility === 'hidden' || style.pointerEvents === 'none') {
    return false
  }

  const rect = el.getBoundingClientRect()
  if (rect.width < 2 && rect.height < 2) return false

  return true
}

function compareDocumentOrder(a, b) {
  if (a === b) return 0
  const position = a.compareDocumentPosition(b)
  if (position & Node.DOCUMENT_POSITION_FOLLOWING) return -1
  if (position & Node.DOCUMENT_POSITION_PRECEDING) return 1
  return 0
}

function findAutoplayRegion(el, container) {
  for (const selector of AUTOPLAY_REGION_SELECTORS) {
    const region = el.closest(selector)
    if (region instanceof HTMLElement && container.contains(region)) {
      return region
    }
  }
  return container
}

function clickElement(el) {
  if (!(el instanceof HTMLElement)) return
  el.focus({ preventScroll: true })
  el.click()
}

function hoverEnter(el) {
  if (!(el instanceof HTMLElement)) return
  const opts = { bubbles: true, cancelable: true, view: window }
  el.dispatchEvent(new MouseEvent('pointerenter', opts))
  el.dispatchEvent(new MouseEvent('mouseenter', opts))
  el.dispatchEvent(new MouseEvent('mouseover', opts))
}

function hoverLeave(el) {
  if (!(el instanceof HTMLElement)) return
  const opts = { bubbles: true, cancelable: true, view: window }
  el.dispatchEvent(new MouseEvent('mouseleave', opts))
  el.dispatchEvent(new MouseEvent('mouseout', opts))
  el.dispatchEvent(new MouseEvent('pointerleave', opts))
}

function setNativeInputValue(input, value) {
  const prototype =
    input instanceof HTMLTextAreaElement
      ? window.HTMLTextAreaElement.prototype
      : window.HTMLInputElement.prototype
  const descriptor = Object.getOwnPropertyDescriptor(prototype, 'value')
  descriptor?.set?.call(input, value)
  input.dispatchEvent(new Event('input', { bubbles: true }))
  input.dispatchEvent(new Event('change', { bubbles: true }))
}

function idleStep(step) {
  return { nextStep: step + 1, reset: false }
}

/**
 * @param {HTMLElement} container
 * @returns {Array<{ el: Element, kind: string }>}
 */
export function collectAutoplayTargets(container) {
  /** @type {Array<{ el: Element, kind: string }>} */
  const targets = []
  const seen = new Set()

  const add = (el, kind) => {
    if (!(el instanceof HTMLElement) || seen.has(el) || !isEligible(el, container)) return
    seen.add(el)
    targets.push({ el, kind })
  }

  container.querySelectorAll('.mp-tooltip-wrap').forEach((el) => add(el, 'hover'))

  container.querySelectorAll('input:not([disabled])').forEach((el) => {
    if (el instanceof HTMLInputElement) {
      if (el.type === 'range') add(el, 'range')
      else if (el.type === 'checkbox' || el.type === 'radio') add(el, 'click')
      else if (el.type === 'text' || el.type === 'search' || el.type === 'number') add(el, 'text')
    }
  })

  container.querySelectorAll('textarea:not([disabled])').forEach((el) => add(el, 'text'))

  container.querySelectorAll('button:not([disabled])').forEach((el) => {
    if (el.closest('.mp-tooltip-wrap')) return
    if (el.classList.contains('mp-reorder-handle') || el.classList.contains('mp-transfer-handle')) return
    if (el.closest('.mp-launchbar-scene')) return
    if (el.closest('.mp-avatar-group')) return
    if (el.closest('.mp-focus-ring-demo')) return
    add(el, 'click')
  })

  container.querySelectorAll('[role="tab"]:not([aria-disabled="true"])').forEach((el) => add(el, 'click'))

  targets.sort((a, b) => compareDocumentOrder(a.el, b.el))

  return targets
}

/**
 * @param {HTMLElement} container
 * @returns {Array<{ region: HTMLElement, targets: Array<{ el: Element, kind: string }> }>}
 */
export function collectAutoplayGroups(container) {
  const flat = collectAutoplayTargets(container)
  /** @type {Map<HTMLElement, Array<{ el: Element, kind: string }>>} */
  const groupMap = new Map()

  for (const target of flat) {
    const region = findAutoplayRegion(target.el, container)
    if (!groupMap.has(region)) groupMap.set(region, [])
    groupMap.get(region).push(target)
  }

  return [...groupMap.entries()]
    .map(([region, targets]) => ({ region, targets }))
    .sort((a, b) => compareDocumentOrder(a.region, b.region))
}

function collectSequentialExpandTargets(container) {
  /** @type {Array<{ el: Element, kind: string }>} */
  const targets = []
  container
    .querySelectorAll('.mp-tree-node.is-parent > .mp-tree-item, .mp-accordion-item > .mp-accordion-header')
    .forEach((el) => {
      if (isEligible(el, container)) targets.push({ el, kind: 'click' })
    })
  targets.sort((a, b) => compareDocumentOrder(a.el, b.el))
  return targets
}

function collectShowMoreToggles(container) {
  return [...container.querySelectorAll('.mp-show-more-demo .mp-expand-toggle')].filter(
    (el) => el instanceof HTMLElement && isEligible(el, container),
  )
}

function collectSearchExpandRoots(container) {
  return [...container.querySelectorAll('.mp-search-expand-demo .mp-search-expand')].filter(
    (el) => el instanceof HTMLElement && isEligible(el, container),
  )
}

function collectLinks(container) {
  return [...container.querySelectorAll('a.mp-link')].filter(
    (el) => el instanceof HTMLElement && isEligible(el, container),
  )
}

function isExpandedToggle(el) {
  return el.getAttribute('aria-expanded') === 'true'
}

function isSearchExpanded(root) {
  return root.classList.contains('is-expanded') && !root.classList.contains('is-collapsing')
}

function isPopupOpen(wrap) {
  return wrap.classList.contains('is-open')
}

/**
 * @param {{ el: Element, kind: string }} target
 * @param {ReturnType<typeof createAutoplayState>} state
 */
export function performAutoplayStep(target, state) {
  const { el, kind } = target

  switch (kind) {
    case 'hover':
      hoverEnter(el)
      break
    case 'range': {
      if (!(el instanceof HTMLInputElement)) break
      const idx = state.rangeIndex.get(el) ?? 0
      const value = RANGE_VALUES[idx % RANGE_VALUES.length]
      state.rangeIndex.set(el, idx + 1)
      el.value = String(value)
      el.dispatchEvent(new Event('input', { bubbles: true }))
      el.dispatchEvent(new Event('change', { bubbles: true }))
      break
    }
    case 'text': {
      if (!(el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement)) break
      const idx = state.textIndex.get(el) ?? 0
      const value = TEXT_SAMPLES[idx % TEXT_SAMPLES.length]
      state.textIndex.set(el, idx + 1)
      setNativeInputValue(el, value)
      break
    }
    case 'click':
    default:
      clickElement(el)
      break
  }
}

export function performParallelAutoplay(groups, stepIndex, state) {
  for (const group of groups) {
    if (!group.targets.length) continue
    const index = stepIndex % group.targets.length
    performAutoplayStep(group.targets[index], state)
  }
}

function runSequentialWave(container, step) {
  const targets = collectSequentialExpandTargets(container)
  const n = targets.length
  const hold = AUTOPLAY_HOLD_WAVES.sequential

  if (!n) return { nextStep: 0, reset: true }

  // Expand one by one
  if (step < n) {
    if (targets[step].el.getAttribute('aria-expanded') === 'false') clickElement(targets[step].el)
    return idleStep(step)
  }

  const holdExpandedEnd = n + hold
  if (step < holdExpandedEnd) return idleStep(step)

  // Collapse one by one (reverse order)
  const collapseStart = holdExpandedEnd
  const collapseEnd = collapseStart + n
  if (step < collapseEnd) {
    const reverseIndex = n - 1 - (step - collapseStart)
    const target = targets[reverseIndex]
    if (target.el.getAttribute('aria-expanded') === 'true') clickElement(target.el)
    return idleStep(step)
  }

  const holdCollapsedEnd = collapseEnd + hold
  if (step < holdCollapsedEnd) return idleStep(step)

  return { nextStep: 0, reset: false }
}

function runShowMoreWave(container, step) {
  const hold = AUTOPLAY_HOLD_WAVES.showMore
  const toggles = collectShowMoreToggles(container)
  if (!toggles.length) return { nextStep: 0, reset: true }

  if (step === 0) {
    collectShowMoreToggles(container)
      .filter((el) => !isExpandedToggle(el))
      .forEach(clickElement)
    return idleStep(step)
  }

  if (step <= hold) return idleStep(step)

  const collapseStep = hold + 1
  if (step === collapseStep) {
    collectShowMoreToggles(container).filter(isExpandedToggle).forEach(clickElement)
    return idleStep(step)
  }

  if (step <= collapseStep + hold) return idleStep(step)

  return { nextStep: 0, reset: true }
}

function runPopupWave(container, step, state) {
  const holds = AUTOPLAY_HOLD_WAVES.popup
  const wraps = [...container.querySelectorAll('.mp-popup-wrap')].filter(
    (el) => el instanceof HTMLElement && isEligible(el, container),
  )
  const tooltips = [...container.querySelectorAll('.mp-tooltip-wrap')].filter(
    (el) => el instanceof HTMLElement && isEligible(el, container),
  )

  if (!wraps.length && !tooltips.length) return { nextStep: 0, reset: true }

  if (step === 0) {
    wraps.forEach((wrap) => {
      if (!isPopupOpen(wrap)) {
        const trigger = wrap.querySelector('.mp-popup-trigger')
        if (trigger instanceof HTMLElement) clickElement(trigger)
      }
    })
    tooltips.forEach((wrap) => {
      wrap.classList.add('is-autoplay-hover')
      hoverEnter(wrap)
      state.tooltipHovered = true
    })
    return idleStep(step)
  }

  if (step <= holds) return idleStep(step)

  const closeStep = holds + 1
  if (step === closeStep) {
    wraps.forEach((wrap) => {
      if (isPopupOpen(wrap)) {
        const trigger = wrap.querySelector('.mp-popup-trigger')
        if (trigger instanceof HTMLElement) clickElement(trigger)
      }
    })
    if (state.tooltipHovered) {
      tooltips.forEach((wrap) => {
        wrap.classList.remove('is-autoplay-hover')
        hoverLeave(wrap)
      })
      state.tooltipHovered = false
    }
    return idleStep(step)
  }

  if (step <= closeStep + holds) return idleStep(step)

  return { nextStep: 0, reset: true }
}

function runSearchExpandWave(container, step) {
  const roots = collectSearchExpandRoots(container)
  const hold = AUTOPLAY_HOLD_WAVES.searchExpand
  if (!roots.length) return { nextStep: 0, reset: true }

  if (step === 0) {
    roots.forEach((root) => {
      if (!isSearchExpanded(root)) {
        const box = root.querySelector('.mp-search-box')
        if (box instanceof HTMLElement) clickElement(box)
      }
    })
    return idleStep(step)
  }

  if (step <= hold) return idleStep(step)

  const collapseStep = hold + 1
  if (step === collapseStep) {
    roots.forEach((root) => {
      if (isSearchExpanded(root)) {
        const closeBtn = root.querySelector('.mp-search-close')
        if (closeBtn instanceof HTMLElement) clickElement(closeBtn)
      }
    })
    return idleStep(step)
  }

  if (step <= collapseStep + hold) return idleStep(step)

  return { nextStep: 0, reset: true }
}

function setLinkHover(link, active) {
  if (!(link instanceof HTMLElement)) return
  link.classList.toggle('is-autoplay-hover', active)
  if (active) hoverEnter(link)
  else hoverLeave(link)
}

function runLinkWave(container, step) {
  const links = collectLinks(container)
  const hold = AUTOPLAY_HOLD_WAVES.link
  if (!links.length) return { nextStep: 0, reset: true }

  if (step === 0) {
    links.forEach((link) => setLinkHover(link, true))
    return idleStep(step)
  }

  if (step <= hold) return idleStep(step)

  const offStep = hold + 1
  if (step === offStep) {
    links.forEach((link) => setLinkHover(link, false))
    return idleStep(step)
  }

  if (step <= offStep + hold) return idleStep(step)

  return { nextStep: 0, reset: false }
}

function runToastWave(container, step) {
  const showBtn = container.querySelector('.mp-toast-scene .mp-btn')
  if (!(showBtn instanceof HTMLElement)) return { nextStep: 0, reset: true }

  if (step < TOAST_BURST_COUNT) {
    clickElement(showBtn)
    return idleStep(step)
  }

  const toastCount = container.querySelectorAll('.mp-toast:not(.is-removing)').length
  if (toastCount > 0) return idleStep(step)

  const gapEnd = TOAST_BURST_COUNT + AUTOPLAY_HOLD_WAVES.toastGap
  if (step <= gapEnd) return idleStep(step)

  return { nextStep: 0, reset: true }
}

function getNestedContentPanel(container) {
  return container.querySelector('.mp-nested-content-demo:not([data-mp-autoplay-skip]) .mp-nested-popover')
}

function clickNestedListItem(panel, labelText) {
  const buttons = [...panel.querySelectorAll('.mp-nested-list-item')]
  const match = buttons.find((btn) => btn.textContent?.trim() === labelText)
  if (match instanceof HTMLElement) clickElement(match)
}

function runNestedContentWave(container, step) {
  const panel = getNestedContentPanel(container)
  const hold = AUTOPLAY_HOLD_WAVES.nested
  if (!panel) return { nextStep: 0, reset: true }

  const views = [
    { id: 'edit', label: 'Edit filter set' },
    { id: 'share', label: 'Share filter set' },
    { id: 'delete', label: 'Delete filter set' },
  ]
  const segment = 1 + hold + 1 + hold
  const total = views.length * segment

  if (step >= total) return { nextStep: 0, reset: true }

  const viewIndex = Math.floor(step / segment)
  const phase = step % segment
  const { label } = views[viewIndex]

  if (phase === 0) {
    clickNestedListItem(panel, label)
    return idleStep(step)
  }

  if (phase <= hold) return idleStep(step)

  if (phase === hold + 1) {
    const back = panel.querySelector('.mp-nested-back')
    if (back instanceof HTMLElement) clickElement(back)
    return idleStep(step)
  }

  return idleStep(step)
}

function runNestedSurfaceWave(container, step) {
  const wrap = container.querySelector('.mp-nested-surface-wrap')
  const hold = AUTOPLAY_HOLD_WAVES.nested
  if (!wrap) return { nextStep: 0, reset: true }

  const trigger = wrap.querySelector('.mp-popup-trigger')
  const views = [
    { label: 'Edit option' },
    { label: 'Share option' },
    { label: 'New option' },
  ]
  const openSegment = 1 + hold
  const viewSegment = 1 + hold + 1 + hold
  const closeSegment = 1 + hold
  const total = openSegment + views.length * viewSegment + closeSegment

  if (step >= total) return { nextStep: 0, reset: true }

  if (step === 0) {
    const menu = wrap.querySelector('.mp-nested-surface--menu')
    const menuHidden = menu?.classList.contains('is-hidden')
    if (menuHidden && trigger instanceof HTMLElement) clickElement(trigger)
    return idleStep(step)
  }

  if (step < openSegment) return idleStep(step)

  const viewStep = step - openSegment
  const viewIndex = Math.floor(viewStep / viewSegment)
  const viewPhase = viewStep % viewSegment

  if (viewIndex < views.length) {
    if (viewPhase === 0) {
      clickNestedListItem(wrap.querySelector('.mp-nested-surface--menu'), views[viewIndex].label)
      return idleStep(step)
    }
    if (viewPhase <= hold) return idleStep(step)
    if (viewPhase === hold + 1) {
      const back = wrap.querySelector('.mp-nested-surface--popover .mp-nested-back')
      if (back instanceof HTMLElement) clickElement(back)
      return idleStep(step)
    }
    return idleStep(step)
  }

  const closeStep = openSegment + views.length * viewSegment
  if (step === closeStep && trigger instanceof HTMLElement) {
    clickElement(trigger)
    return idleStep(step)
  }

  return idleStep(step)
}

function runLaunchbarWave(container, step) {
  const items = [...container.querySelectorAll('.mp-launchbar-item')].filter(
    (el) => el instanceof HTMLElement && isEligible(el, container),
  )
  const hold = AUTOPLAY_HOLD_WAVES.default
  if (!items.length) return { nextStep: 0, reset: true }

  const segment = 1 + hold
  const total = items.length * segment

  if (step >= total) {
    const active = container.querySelector('.mp-launchbar-item.is-active')
    if (active instanceof HTMLElement) clickElement(active)
    return { nextStep: 0, reset: true }
  }

  const index = Math.floor(step / segment)
  const phase = step % segment

  if (phase === 0) clickElement(items[index])
  return idleStep(step)
}

function clearFocusRing(state) {
  state.focusSegments.forEach((el) => {
    if (el instanceof HTMLElement) {
      el.classList.remove('is-autoplay-focus')
      el.blur()
    }
  })
  state.focusSegments = []
}

function runFocusRingWave(container, step, state) {
  const groups = [...container.querySelectorAll('.mp-focus-ring-demo .mp-button-group')]
  const segmentsPerGroup = groups.map((group) =>
    [...group.querySelectorAll('.mp-button-group-segment')].filter(
      (el) => el instanceof HTMLElement && isEligible(el, container),
    ),
  )
  const count = Math.max(...segmentsPerGroup.map((list) => list.length), 0)
  const hold = AUTOPLAY_HOLD_WAVES.default
  if (!count) return { nextStep: 0, reset: true }

  const segment = 1 + hold
  const total = count * segment

  if (step >= total) {
    clearFocusRing(state)
    return { nextStep: 0, reset: false }
  }

  const index = Math.floor(step / segment)
  const phase = step % segment

  if (phase === 0) {
    clearFocusRing(state)
    segmentsPerGroup.forEach((segments) => {
      const el = segments[index]
      if (el instanceof HTMLElement) {
        el.classList.add('is-autoplay-focus')
        el.focus({ preventScroll: true })
        state.focusSegments.push(el)
      }
    })
  }

  return idleStep(step)
}

function runLabelToggleWave(container, selector, step, hold = 1) {
  const labels = [...container.querySelectorAll(selector)].filter(
    (el) => el instanceof HTMLElement && isEligible(el, container),
  )
  if (!labels.length) return { nextStep: 0, reset: true }

  const segment = 1 + hold
  const total = labels.length * segment

  if (step >= total) return { nextStep: 0, reset: false }

  const index = Math.floor(step / segment)
  const phase = step % segment

  if (phase === 0) clickElement(labels[index])
  return idleStep(step)
}

function runCheckboxWave(container, step) {
  const labels = [...container.querySelectorAll('.mp-checkbox-group .mp-checkbox-item')].filter(
    (el) => el instanceof HTMLElement && isEligible(el, container),
  )
  const hold = AUTOPLAY_HOLD_WAVES.checkbox
  const n = labels.length
  if (!n) return { nextStep: 0, reset: true }

  const segment = 1 + hold
  const checkTotal = n * segment
  const uncheckTotal = n * segment
  const endHold = hold
  const total = checkTotal + uncheckTotal + endHold

  if (step >= total) return { nextStep: 0, reset: false }

  if (step < checkTotal) {
    const index = Math.floor(step / segment)
    const phase = step % segment
    if (phase === 0) {
      const input = labels[index]?.querySelector('input[type="checkbox"]')
      if (input instanceof HTMLInputElement && !input.checked) clickElement(labels[index])
    }
    return idleStep(step)
  }

  const uncheckStep = step - checkTotal
  if (uncheckStep < uncheckTotal) {
    const index = Math.floor(uncheckStep / segment)
    const phase = uncheckStep % segment
    if (phase === 0) {
      const input = labels[index]?.querySelector('input[type="checkbox"]')
      if (input instanceof HTMLInputElement && input.checked) clickElement(labels[index])
    }
    return idleStep(step)
  }

  return idleStep(step)
}

function runRadioWave(container, step) {
  const labels = [...container.querySelectorAll('.mp-radio-group .mp-radio-item')].filter(
    (el) => el instanceof HTMLElement && isEligible(el, container),
  )
  const hold = AUTOPLAY_HOLD_WAVES.radio
  if (!labels.length) return { nextStep: 0, reset: true }

  const segment = 1 + hold
  const total = labels.length * segment + hold

  if (step >= total) return { nextStep: 0, reset: false }

  const index = Math.floor(step / segment)
  const phase = step % segment

  if (index < labels.length && phase === 0) clickElement(labels[index])

  return idleStep(step)
}

function runSwitchWave(container, step) {
  const label = container.querySelector('.mp-switch')
  const hold = AUTOPLAY_HOLD_WAVES.default
  if (!(label instanceof HTMLElement)) return { nextStep: 0, reset: true }

  if (step === 0) {
    clickElement(label)
    return idleStep(step)
  }

  if (step <= hold) return idleStep(step)

  if (step === hold + 1) {
    clickElement(label)
    return idleStep(step)
  }

  if (step <= hold + 1 + hold) return idleStep(step)

  return { nextStep: 0, reset: false }
}

function runFormInputWave(container, step, state) {
  const input = container.querySelector('.mp-form-input')
  const hold = AUTOPLAY_HOLD_WAVES.default
  if (!(input instanceof HTMLInputElement)) return { nextStep: 0, reset: true }

  const typeStep = 1 + hold
  const total = TEXT_SAMPLES.length * typeStep

  if (step >= total) {
    input.blur()
    setNativeInputValue(input, '')
    return { nextStep: 0, reset: false }
  }

  const sampleIndex = Math.floor(step / typeStep)
  const phase = step % typeStep

  if (phase === 0) {
    input.focus({ preventScroll: true })
    setNativeInputValue(input, TEXT_SAMPLES[sampleIndex])
  }

  return idleStep(step)
}

function runSearchHighlightWave(container, step, state) {
  const input = container.querySelector('.mp-form-input[type="search"], input[type="search"]')
  const hold = AUTOPLAY_HOLD_WAVES.default
  if (!(input instanceof HTMLInputElement)) return { nextStep: 0, reset: true }

  const typeStep = 1 + hold
  const total = SEARCH_HIGHLIGHT_SAMPLES.length * typeStep

  if (step >= total) {
    input.blur()
    setNativeInputValue(input, '')
    return { nextStep: 0, reset: false }
  }

  const sampleIndex = Math.floor(step / typeStep)
  const phase = step % typeStep

  if (phase === 0) {
    input.focus({ preventScroll: true })
    setNativeInputValue(input, SEARCH_HIGHLIGHT_SAMPLES[sampleIndex])
  }

  return idleStep(step)
}

function setAvatarHover(avatar, active) {
  if (!(avatar instanceof HTMLElement)) return
  avatar.classList.toggle('is-autoplay-hover', active)
  if (active) hoverEnter(avatar)
  else hoverLeave(avatar)
}

function runAvatarWave(container, step, state) {
  const avatars = [...container.querySelectorAll('.mp-avatar-group-item')].filter(
    (el) => el instanceof HTMLElement && isEligible(el, container),
  )
  const hold = AUTOPLAY_HOLD_WAVES.default
  if (!avatars.length) return { nextStep: 0, reset: true }

  const segment = 1 + hold + 1
  const total = avatars.length * segment

  if (step >= total) {
    if (state.activeAvatar) setAvatarHover(state.activeAvatar, false)
    state.activeAvatar = null
    return { nextStep: 0, reset: false }
  }

  const index = Math.floor(step / segment)
  const phase = step % segment
  const avatar = avatars[index]

  if (phase === 0) {
    if (state.activeAvatar) setAvatarHover(state.activeAvatar, false)
    setAvatarHover(avatar, true)
    state.activeAvatar = avatar
  } else if (phase === 1 + hold) {
    setAvatarHover(avatar, false)
    state.activeAvatar = null
  }

  return idleStep(step)
}

function clickReorderMove(row, direction) {
  if (!(row instanceof HTMLElement)) return false
  const buttons = row.querySelectorAll('.mp-reorder-move-btn')
  const btn = direction < 0 ? buttons[0] : buttons[1]
  if (!(btn instanceof HTMLButtonElement) || btn.disabled) return false
  clickElement(btn)
  return true
}

function runReorderWave(container, step, state) {
  const hold = AUTOPLAY_HOLD_WAVES.reorder
  const moves = 2
  const downSegment = moves + hold
  const upSegment = moves + hold
  const total = downSegment + upSegment + hold

  if (!state.reorderItemId) {
    state.reorderItemId = container.querySelector('[data-reorder-id]')?.getAttribute('data-reorder-id') ?? null
  }
  if (!state.reorderItemId) return { nextStep: 0, reset: true }

  if (step >= total) return { nextStep: 0, reset: true }

  const row = container.querySelector(`[data-reorder-id="${state.reorderItemId}"]`)

  if (step < moves) {
    clickReorderMove(row, 1)
    return idleStep(step)
  }

  if (step < downSegment) return idleStep(step)

  const upStep = step - downSegment
  if (upStep < moves) {
    clickReorderMove(row, -1)
    return idleStep(step)
  }

  return idleStep(step)
}

function runChipToggleWave(container, step) {
  const hold = AUTOPLAY_HOLD_WAVES.chipToggle
  const regions = [...container.querySelectorAll('.mp-chip-filter-demo')].filter(
    (el) => el instanceof HTMLElement && isEligible(el, container),
  )
  const chipSets = regions.map((region) =>
    [...region.querySelectorAll('.mp-filter-chip')].filter(
      (el) => el instanceof HTMLElement && isEligible(el, container),
    ),
  )
  const cycleLength = Math.max(...chipSets.map((chips) => chips.length), 1)
  const total = cycleLength * (1 + hold) + hold

  if (step >= total) return { nextStep: 0, reset: false }

  const segment = 1 + hold
  const chipIndex = Math.floor(step / segment)
  const phase = step % segment

  if (chipIndex < cycleLength && phase === 0) {
    chipSets.forEach((chips) => {
      const chip = chips[chipIndex % chips.length]
      if (chip instanceof HTMLElement) clickElement(chip)
    })
  }

  return idleStep(step)
}

function runScrollspyWave(container, step) {
  const hold = AUTOPLAY_HOLD_WAVES.default
  const navItems = [...container.querySelectorAll('.mp-scrollspy-nav-item')].filter(
    (el) => el instanceof HTMLElement && isEligible(el, container),
  )

  const navSegment = navItems.length * (1 + hold)
  const total = navSegment + hold

  if (step >= total) return { nextStep: 0, reset: true }

  const navIndex = Math.floor(step / (1 + hold))
  const navPhase = step % (1 + hold)

  if (navIndex < navItems.length && navPhase === 0) {
    clickElement(navItems[navIndex])
  }

  return idleStep(step)
}

function runBannerDismissWave(container, step) {
  const hold = AUTOPLAY_HOLD_WAVES.banner
  const banners = [...container.querySelectorAll('.mp-banner-dismiss:not(.is-closing)')].filter(
    (el) => el instanceof HTMLElement && isEligible(el, container),
  )
  const resetBtn = container.querySelector('.mp-banner-stack ~ div .mp-btn, .mt-3 .mp-btn')

  if (!banners.length) {
    if (step === 0 && resetBtn instanceof HTMLElement) {
      clickElement(resetBtn)
      return idleStep(step)
    }
    if (step <= hold) return idleStep(step)
    return { nextStep: 0, reset: true }
  }

  const segment = 1 + hold
  const dismissIndex = Math.floor(step / segment)
  const phase = step % segment

  if (dismissIndex < banners.length) {
    if (phase === 0) {
      const banner = banners[dismissIndex]
      const close =
        banner.querySelector('.arvo-bnr-alert__close button') ??
        banner.querySelector('.arvo-bnr-alert__close')
      if (close instanceof HTMLElement) clickElement(close)
    }
    return idleStep(step)
  }

  if (step < banners.length * segment + hold) return idleStep(step)

  return { nextStep: 0, reset: false }
}

function getLeftTransferLabels(container) {
  const leftList = container.querySelector('.mp-transfer-list[aria-label="Available items"]')
  return [...(leftList?.querySelectorAll('.mp-checkbox-item') ?? [])].filter(
    (el) => el instanceof HTMLElement && isEligible(el, container),
  )
}

function runTransferWave(container, step) {
  const hold = AUTOPLAY_HOLD_WAVES.transfer
  const leftLabels = getLeftTransferLabels(container)
  const selectedBtn = container.querySelector('.mp-transfer-btn[aria-label="Move selected to right"]')
  const allBtn = container.querySelector('.mp-transfer-btn[aria-label="Move all to right"]')

  if (!leftLabels.length) return { nextStep: 0, reset: true }

  if (step === 0) {
    clickElement(leftLabels[0])
    return idleStep(step)
  }

  if (step <= hold) return idleStep(step)

  if (step === hold + 1 && selectedBtn instanceof HTMLElement) {
    clickElement(selectedBtn)
    return idleStep(step)
  }

  if (step <= hold + 1 + hold + 2) return idleStep(step)

  const allStep = hold + 1 + hold + 3
  if (step === allStep && allBtn instanceof HTMLElement && !allBtn.disabled) {
    clickElement(allBtn)
    return idleStep(step)
  }

  if (step <= allStep + hold + 2) return idleStep(step)

  return { nextStep: 0, reset: true }
}

function runParallelWave(container, step, state) {
  const groups = collectAutoplayGroups(container)
  const hold = AUTOPLAY_HOLD_WAVES.default

  if (!groups.length) return { nextStep: 0, reset: true }

  const cycleLength = Math.max(...groups.map((group) => group.targets.length), 1)

  if (step < cycleLength) {
    performParallelAutoplay(groups, step, state)
    return idleStep(step)
  }

  const holdStep = step - cycleLength
  if (holdStep < hold) return idleStep(step)

  return { nextStep: 0, reset: true }
}

/**
 * Advance one global wave for a card — returns next step index and whether to remount.
 * @param {HTMLElement} container
 * @param {string} exampleId
 * @param {number} step
 * @param {ReturnType<typeof createAutoplayState>} state
 */
export function runAutoplayWave(container, exampleId, step, state) {
  const profile = AUTOPLAY_PROFILE[exampleId] ?? 'parallel'

  switch (profile) {
    case 'sequential':
      return runSequentialWave(container, step)
    case 'showMore':
      return runShowMoreWave(container, step)
    case 'popup':
      return runPopupWave(container, step, state)
    case 'searchExpand':
      return runSearchExpandWave(container, step)
    case 'link':
      return runLinkWave(container, step)
    case 'toast':
      return runToastWave(container, step)
    case 'nestedContent':
      return runNestedContentWave(container, step)
    case 'nestedSurface':
      return runNestedSurfaceWave(container, step)
    case 'launchbar':
      return runLaunchbarWave(container, step)
    case 'focusRing':
      return runFocusRingWave(container, step, state)
    case 'checkbox':
      return runCheckboxWave(container, step)
    case 'radio':
      return runRadioWave(container, step)
    case 'switch':
      return runSwitchWave(container, step)
    case 'formInput':
      return runFormInputWave(container, step, state)
    case 'searchHighlight':
      return runSearchHighlightWave(container, step, state)
    case 'avatar':
      return runAvatarWave(container, step, state)
    case 'reorder':
      return runReorderWave(container, step, state)
    case 'transfer':
      return runTransferWave(container, step)
    case 'chipToggle':
      return runChipToggleWave(container, step)
    case 'scrollspy':
      return runScrollspyWave(container, step)
    case 'bannerDismiss':
      return runBannerDismissWave(container, step)
    default:
      return runParallelWave(container, step, state)
  }
}

export function isAutoplayExcluded(exampleId) {
  return MOTION_AUTOPLAY_EXCLUDED.has(exampleId)
}

export function isAutoplayStatic(exampleId) {
  return MOTION_AUTOPLAY_STATIC.has(exampleId)
}
