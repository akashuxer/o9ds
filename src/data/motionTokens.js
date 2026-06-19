/** Motion & Animation SCSS tokens — documentation tables. */

export const MOTION_DURATION_STRIP = [
  { label: '120ms', token: 'instant', scss: '$arvo-duration-instant' },
  { label: '150ms', token: 'fast', scss: '$arvo-duration-fast' },
  { label: '180ms', token: 'base', scss: '$arvo-duration-base' },
  { label: '220ms', token: 'medium', scss: '$arvo-duration-medium' },
  { label: '280ms', token: 'moderate', scss: '$arvo-duration-moderate' },
  { label: '300ms', token: 'slow', scss: '$arvo-duration-slow' },
]

export const MOTION_DURATION_ROWS = [
  {
    token: '$arvo-duration-instant',
    value: '120ms',
    meaning: 'Micro-feedback — orchestration offsets (title/footer crossfade), instant acknowledgment',
  },
  {
    token: '$arvo-duration-fast',
    value: '150ms',
    meaning: 'Quick property changes — link underline, form input border width, focus ring',
  },
  {
    token: '$arvo-duration-base',
    value: '180ms',
    meaning: 'Default UI transitions — status dot, checkmark draw, search highlight, counter',
  },
  {
    token: '$arvo-duration-medium',
    value: '220ms',
    meaning: 'Standard interaction — toast, tabs, chip remove, layout shift (FLIP), nested views',
  },
  {
    token: '$arvo-duration-moderate',
    value: '280ms',
    meaning: 'Between medium and slow — dialog enter/exit, overlay surfaces',
  },
  {
    token: '$arvo-duration-slow',
    value: '300ms',
    meaning: 'Layout and surface motion — accordion, drawer, popup, banner dismiss timeout',
  },
]

export const MOTION_EASING_ROWS = [
  {
    token: '$arvo-ease-standard',
    value: 'cubic-bezier(0.4, 0, 0.2, 1)',
    meaning: 'General UI motion — natural deceleration for enter/exit and layout shifts',
  },
  {
    token: '$arvo-ease-emphasized',
    value: 'cubic-bezier(0.2, 0, 0, 1)',
    meaning: 'Selection and emphasis — segmented control, switch thumb, icon toggle',
  },
  {
    token: '$arvo-ease-simple',
    value: 'ease',
    meaning: 'Opacity and color fades — tooltip, toast, backdrop, form states',
  },
  {
    token: '$arvo-ease-in-out',
    value: 'ease-in-out',
    meaning: 'Ambient or looping motion — optional empty-state illustration float',
  },
]

/** Labels + CSS timing for the easing explainer strip on the Tokens tab. */
export const MOTION_EASING_STRIP = [
  {
    id: 'standard',
    label: 'Standard',
    css: 'cubic-bezier(0.4, 0, 0.2, 1)',
    feel: 'Starts with intent, lands softly',
  },
  {
    id: 'emphasized',
    label: 'Emphasized',
    css: 'cubic-bezier(0.2, 0, 0, 1)',
    feel: 'Snappy start, confident finish',
  },
  {
    id: 'simple',
    label: 'Simple',
    css: 'ease',
    feel: 'Gentle and even — best for fades',
  },
  {
    id: 'in-out',
    label: 'Ease-in-out',
    css: 'ease-in-out',
    feel: 'Slow start and end — ambient loops',
    loop: true,
  },
]

export const MOTION_COUNTER_ROW = {
  token: '$arvo-motion-counter',
  value: '$arvo-duration-base $arvo-ease-standard',
}

/** Full SCSS declaration for counter badge motion — shared by docs and `_animation.scss` export. */
export const ARVO_MOTION_COUNTER_TOKEN = `${MOTION_COUNTER_ROW.token}: ${MOTION_COUNTER_ROW.value};`

/** Clipboard text for motion token table rows (full `$token: value;` line). */
export function motionTokenClipboard(row) {
  return row.clipboard ?? row.scss ?? `${row.token}: ${row.value};`
}

/** @typedef {{ id: string, title: string, description?: string, rows: Array<{ token: string, value: string }> }} MotionTokenSection */

/** @type {MotionTokenSection[]} */
export const MOTION_SEMANTIC_SECTIONS = [
  {
    id: 'motion-layout-expand',
    title: 'Layout expand / collapse',
    description: 'Accordion, Tree, Show More/Less, Disclosure',
    rows: [
      {
        token: '$arvo-motion-transition-expand',
        value:
          'height $arvo-duration-slow $arvo-ease-standard, transform $arvo-duration-slow $arvo-ease-standard',
      },
    ],
  },
  {
    id: 'motion-popup',
    title: 'Popup / floating surface',
    description: 'Menu, Popover, Tooltip, Context Menu, Select Menu',
    rows: [
      {
        token: '$arvo-transition-popup',
        value:
          'opacity $arvo-duration-slow $arvo-ease-simple, transform $arvo-duration-slow $arvo-ease-simple',
      },
      { token: '$arvo-transform-popup-enter', value: 'translateY(0) scale(1)' },
      { token: '$arvo-transform-popup-exit', value: 'translateY(-4px) scale(0.98)' },
    ],
  },
  {
    id: 'motion-dialog',
    title: 'Dialog / overlay surface',
    description: 'Window, Dialog, Modal, Alert Dialog, Confirm Dialog',
    rows: [
      {
        token: '$arvo-transition-dialog',
        value:
          'opacity $arvo-duration-moderate $arvo-ease-standard, transform $arvo-duration-moderate $arvo-ease-standard',
      },
      { token: '$arvo-transition-dialog-backdrop', value: 'background-color $arvo-duration-moderate $arvo-ease-simple' },
      { token: '$arvo-transform-dialog-enter', value: 'translateY(0) scale(1)' },
      { token: '$arvo-transform-dialog-exit', value: 'translateY(-8px) scale(0.98)' },
    ],
  },
  {
    id: 'motion-feedback',
    title: 'Feedback',
    description: 'Toast, Banner Alert, Inline Message',
    rows: [
      {
        token: '$arvo-motion-feedback',
        value:
          'opacity $arvo-duration-medium $arvo-ease-simple, transform $arvo-duration-medium $arvo-ease-simple',
      },
      { token: '$arvo-transform-feedback-enter', value: 'translateY(0) translateX(0)' },
      { token: '$arvo-transform-feedback-exit', value: 'translateY(-12px) translateX(8px)' },
      { token: '$arvo-transform-banner-dismiss-exit', value: 'translateY(-8px)' },
    ],
  },
  {
    id: 'motion-layout-shift',
    title: 'Layout shift (FLIP)',
    description: 'Toast stack reflow, chip list reflow — WAAPI compensation after DOM change',
    rows: [
      {
        token: '$arvo-motion-layout-shift',
        value: 'transform $arvo-duration-medium $arvo-ease-emphasized',
        scss: `$arvo-motion-layout-shift: transform $arvo-duration-medium $arvo-ease-emphasized;`,
      },
    ],
  },
  {
    id: 'motion-toast-duration',
    title: 'Toast visibility duration',
    description: 'Controls how long toast remains visible before auto-dismiss.',
    rows: [
      { token: '$arvo-toast-duration-positive', value: '4000ms' },
      { token: '$arvo-toast-duration-neutral', value: '4000ms' },
      { token: '$arvo-toast-duration-info', value: '5000ms' },
      { token: '$arvo-toast-duration-warning', value: '6000ms' },
      { token: '$arvo-toast-duration-negative', value: '8000ms' },
      { token: '$arvo-toast-duration-block', value: 'persistent' },
    ],
  },
  {
    id: 'motion-link',
    title: 'Link',
    description: 'Link underline enter / exit motion',
    rows: [
      {
        token: '$arvo-motion-link',
        value:
          'transform $arvo-duration-fast $arvo-ease-standard, opacity $arvo-duration-fast $arvo-ease-simple',
        scss: `$arvo-motion-link:
  transform $arvo-duration-fast $arvo-ease-standard,
  opacity $arvo-duration-fast $arvo-ease-simple;`,
      },
    ],
  },
  {
    id: 'motion-nested-content',
    title: 'Nested content transition',
    description: 'Popover, Window, Drawer, Settings, Nested View',
    rows: [
      {
        token: '$arvo-motion-nested-content',
        value:
          'opacity $arvo-duration-medium $arvo-ease-standard, transform $arvo-duration-medium $arvo-ease-standard',
        scss: `$arvo-motion-nested-content:
  opacity $arvo-duration-medium $arvo-ease-standard,
  transform $arvo-duration-medium $arvo-ease-standard;`,
      },
      { token: '$arvo-transform-nested-enter-forward', value: 'translateX(12px)' },
      { token: '$arvo-transform-nested-exit-forward', value: 'translateX(-12px)' },
      { token: '$arvo-transform-nested-enter-back', value: 'translateX(-12px)' },
      { token: '$arvo-transform-nested-exit-back', value: 'translateX(12px)' },
      { token: '$arvo-transform-nested-rest', value: 'translateX(0)' },
    ],
  },
  {
    id: 'motion-nested-footer',
    title: 'Nested footer transition',
    description: 'Footer action changes inside nested views',
    rows: [
      {
        token: '$arvo-motion-nested-footer',
        value:
          'opacity $arvo-duration-base $arvo-ease-simple, transform $arvo-duration-medium $arvo-ease-standard, max-height $arvo-duration-medium $arvo-ease-standard, padding $arvo-duration-medium $arvo-ease-standard',
        scss: `$arvo-motion-nested-footer:
  opacity $arvo-duration-base $arvo-ease-simple,
  transform $arvo-duration-medium $arvo-ease-standard,
  max-height $arvo-duration-medium $arvo-ease-standard,
  padding $arvo-duration-medium $arvo-ease-standard;`,
      },
    ],
  },
  {
    id: 'motion-invalid-drop',
    title: 'Invalid drop / constraint feedback',
    description: 'Duplicate block, invalid drop, rejected placement',
    rows: [
      {
        token: '$arvo-motion-invalid-drop',
        value: '$arvo-duration-medium $arvo-ease-standard',
      },
    ],
  },
  {
    id: 'motion-form-input',
    title: 'Form input',
    description: 'Textbox, Textarea, Select, Combobox — animated bottom border width',
    rows: [
      {
        token: '$arvo-motion-form-input',
        value: 'width $arvo-duration-fast $arvo-ease-simple',
        scss: `$arvo-motion-form-input: width $arvo-duration-fast $arvo-ease-simple;`,
      },
      {
        token: '$arvo-motion-form-input-field',
        value:
          'background-color $arvo-duration-fast $arvo-ease-simple, border-color $arvo-duration-fast $arvo-ease-simple',
        scss: `$arvo-motion-form-input-field:
  background-color $arvo-duration-fast $arvo-ease-simple,
  border-color $arvo-duration-fast $arvo-ease-simple;`,
      },
    ],
  },
  {
    id: 'motion-focus-ring',
    title: 'Focus ring',
    description: 'Inset focus frame on button group segments and theme-filled controls',
    rows: [
      {
        token: '$arvo-motion-focus-ring',
        value:
          'opacity $arvo-duration-fast $arvo-ease-simple, border-color $arvo-duration-fast $arvo-ease-simple',
        scss: `$arvo-motion-focus-ring:
  opacity $arvo-duration-fast $arvo-ease-simple,
  border-color $arvo-duration-fast $arvo-ease-simple;`,
      },
    ],
  },
  {
    id: 'motion-checkmark-draw',
    title: 'Checkmark draw',
    description: 'Checkbox, confirmation stroke reveal',
    rows: [
      {
        token: '$arvo-motion-checkmark-draw',
        value: 'stroke-dashoffset $arvo-duration-base $arvo-ease-standard',
        scss: `$arvo-motion-checkmark-draw: stroke-dashoffset $arvo-duration-base $arvo-ease-standard;`,
      },
    ],
  },
  {
    id: 'motion-tabs',
    title: 'Tabs / segmented control',
    description: 'Tabs, Scrollspy, Segmented Control, Button Group',
    rows: [
      {
        token: '$arvo-motion-tab',
        value:
          'transform $arvo-duration-medium $arvo-ease-standard, width $arvo-duration-medium $arvo-ease-standard',
      },
      {
        token: '$arvo-motion-segmented-control',
        value:
          'transform $arvo-duration-medium $arvo-ease-standard, width $arvo-duration-medium $arvo-ease-emphasized',
      },
    ],
  },
  {
    id: 'motion-search-expand',
    title: 'Search expand',
    description: 'Compact search icon → search input',
    rows: [
      {
        token: '$arvo-motion-search-expand',
        value:
          'width $arvo-duration-medium $arvo-ease-standard, opacity $arvo-duration-base $arvo-ease-simple',
      },
      { token: '$arvo-transform-search-enter', value: 'translateX(0)' },
    ],
  },
  {
    id: 'motion-toggle',
    title: 'Toggle / icon state change',
    description: 'Pin, Star, Favorite, Bookmark',
    rows: [
      {
        token: '$arvo-motion-toggle',
        value:
          'opacity $arvo-duration-medium $arvo-ease-emphasized, transform $arvo-duration-medium $arvo-ease-emphasized',
      },
      { token: '$arvo-transform-toggle-active', value: 'scale(1.12)' },
      { token: '$arvo-transform-toggle-rest', value: 'scale(1)' },
    ],
  },
  {
    id: 'motion-status-indicator',
    title: 'Status indicator',
    description: 'Unsaved dot, dirty state, pending marker, and pulsating active status.',
    rows: [
      {
        token: '$arvo-motion-status-indicator',
        value:
          'opacity $arvo-duration-base $arvo-ease-simple, transform $arvo-duration-base $arvo-ease-simple',
      },
      { token: '$arvo-transform-status-hidden', value: 'scale(0.6)' },
      { token: '$arvo-transform-status-visible', value: 'scale(1)' },
      { token: '$arvo-motion-status-pulse', value: '2s ease-out infinite' },
    ],
  },
  {
    id: 'motion-counter',
    title: 'Counter',
    description:
      'Interactive Counter is a dynamic counter badge that updates based on user actions. Add, Remove, Plus (+), Minus (–), Delete, Clear all, Select, Deselect. Used for lightweight numeric feedback when a count value changes.',
    rows: [MOTION_COUNTER_ROW],
  },
  {
    id: 'motion-chip-remove',
    title: 'Chip remove',
    description: 'Filter chip clear, tag remove',
    rows: [
      {
        token: '$arvo-motion-chip-remove',
        value:
          'opacity $arvo-duration-medium $arvo-ease-simple, transform $arvo-duration-medium $arvo-ease-emphasized, max-width $arvo-duration-medium $arvo-ease-emphasized, padding $arvo-duration-medium $arvo-ease-emphasized, border-width $arvo-duration-medium $arvo-ease-emphasized',
      },
      { token: '$arvo-transform-chip-remove', value: 'scale(0.96)' },
    ],
  },
  {
    id: 'motion-chip-toggle',
    title: 'Chip toggle / filter select',
    description: 'Selectable filter chips — selected state and filtered content below.',
    rows: [
      {
        token: '$arvo-motion-chip-toggle',
        value:
          'background-color $arvo-duration-base $arvo-ease-standard, color $arvo-duration-base $arvo-ease-standard, border-color $arvo-duration-base $arvo-ease-standard',
        scss: `$arvo-motion-chip-toggle:
  background-color $arvo-duration-base $arvo-ease-standard,
  color $arvo-duration-base $arvo-ease-standard,
  border-color $arvo-duration-base $arvo-ease-standard;`,
      },
      {
        token: '$arvo-motion-chip-filter-content',
        value:
          'opacity $arvo-duration-base $arvo-ease-standard, transform $arvo-duration-base $arvo-ease-standard, grid-template-rows $arvo-duration-medium $arvo-ease-standard, flex $arvo-duration-medium $arvo-ease-emphasized, max-width $arvo-duration-medium $arvo-ease-emphasized, margin $arvo-duration-medium $arvo-ease-emphasized',
        scss: `$arvo-motion-chip-filter-content:
  opacity $arvo-duration-base $arvo-ease-standard,
  transform $arvo-duration-base $arvo-ease-standard,
  grid-template-rows $arvo-duration-medium $arvo-ease-standard,
  flex $arvo-duration-medium $arvo-ease-emphasized,
  max-width $arvo-duration-medium $arvo-ease-emphasized,
  margin $arvo-duration-medium $arvo-ease-emphasized;`,
      },
    ],
  },
  {
    id: 'motion-search-highlight',
    title: 'Search result highlight',
    rows: [{ token: '$arvo-motion-search-highlight', value: 'background-color $arvo-duration-base $arvo-ease-simple' }],
  },
  {
    id: 'motion-scrollspy',
    title: 'Scrollspy',
    description: 'Scroll-linked section indicator',
    rows: [
      {
        token: '$arvo-motion-scrollspy',
        value: 'transform $arvo-duration-slow $arvo-ease-standard',
      },
    ],
  },
  {
    id: 'motion-nav-indicator',
    title: 'Navigation active indicator',
    description: 'Vertical nav — shared left border and highlight slide between items.',
    rows: [
      {
        token: '$arvo-motion-nav-indicator',
        value:
          'transform $arvo-duration-base $arvo-ease-standard, height $arvo-duration-base $arvo-ease-standard',
        scss: `$arvo-motion-nav-indicator:
  transform $arvo-duration-base $arvo-ease-standard,
  height $arvo-duration-base $arvo-ease-standard;`,
      },
      {
        token: '$arvo-motion-nav-item',
        value: 'color $arvo-duration-base $arvo-ease-standard',
        scss: `$arvo-motion-nav-item: color $arvo-duration-base $arvo-ease-standard;`,
      },
    ],
  },
  {
    id: 'motion-empty-state',
    title: 'Empty state illustration',
    rows: [
      { token: '$arvo-motion-empty-state', value: '2.8s ease-in-out infinite' },
      { token: '$arvo-transform-empty-state-float', value: 'translateY(-3px)' },
    ],
  },
  {
    id: 'motion-avatar-uplift',
    title: 'Avatar group uplift',
    description: 'Hover/focus elevation on stacked Avatar Group items — scale + shadow, no positional shift.',
    rows: [
      {
        token: '$arvo-motion-avatar-uplift',
        value:
          'transform $arvo-duration-fast $arvo-ease-standard, box-shadow $arvo-duration-fast $arvo-ease-standard',
      },
      { token: '$arvo-transform-avatar-uplift-hover', value: 'scale(1.1)' },
      { token: '$arvo-transform-avatar-uplift-rest', value: 'scale(1)' },
      { token: '$arvo-shadow-avatar-uplift-hover', value: '0 0 0 2px #fff, 0 0 10px 2px rgb(0 0 0 / 16%)' },
      { token: '$arvo-shadow-avatar-uplift-rest', value: 'none' },
    ],
  },
  {
    id: 'motion-slider',
    title: 'Slider',
    description: 'Slider thumb travel, filled track width, and thumb scale on hover/focus.',
    rows: [
      {
        token: '$arvo-motion-slider',
        value: 'left $arvo-duration-fast $arvo-ease-standard, width $arvo-duration-fast $arvo-ease-standard',
      },
      {
        token: '$arvo-motion-slider-thumb',
        value:
          'left $arvo-duration-fast $arvo-ease-standard, width $arvo-duration-fast $arvo-ease-standard, height $arvo-duration-fast $arvo-ease-standard, margin-top $arvo-duration-fast $arvo-ease-standard',
      },
    ],
  },
  {
    id: 'motion-progress',
    title: 'Progress indicator',
    description: 'Linear fill width and circular arc stroke — determinate value changes and indeterminate loops.',
    rows: [
      {
        token: '$arvo-motion-progress-linear',
        value: 'width $arvo-duration-base $arvo-ease-standard',
      },
      {
        token: '$arvo-motion-progress-circular',
        value: 'stroke-dashoffset $arvo-duration-base $arvo-ease-standard',
      },
      {
        token: '$arvo-motion-progress-gauge',
        value: 'stroke-dashoffset $arvo-duration-base $arvo-ease-standard',
      },
      {
        token: '$arvo-motion-progress-linear-indeterminate',
        value: '1.4s ease-in-out infinite',
      },
      {
        token: '$arvo-motion-progress-circular-indeterminate',
        value: '1.4s ease-in-out infinite',
      },
    ],
  },
  {
    id: 'motion-carousel',
    title: 'Carousel pagination',
    description: 'Slide track translation and square dot width for carousel view pagination.',
    rows: [
      {
        token: '$arvo-motion-carousel-slide',
        value: 'transform $arvo-duration-medium $arvo-ease-standard',
      },
      {
        token: '$arvo-motion-carousel-dot',
        value:
          'width $arvo-duration-base $arvo-ease-standard, background-color $arvo-duration-base $arvo-ease-standard',
      },
    ],
  },
  {
    id: 'motion-stepper',
    title: 'Stepper',
    description: 'Horizontal stepper connector fill and step marker / label state transitions.',
    rows: [
      {
        token: '$arvo-motion-stepper-connector',
        value: 'width $arvo-duration-base $arvo-ease-standard',
      },
      {
        token: '$arvo-motion-stepper-marker',
        value:
          'background-color $arvo-duration-base $arvo-ease-standard, color $arvo-duration-base $arvo-ease-standard, border-color $arvo-duration-base $arvo-ease-standard',
      },
      {
        token: '$arvo-motion-stepper-label',
        value: 'color $arvo-duration-base $arvo-ease-standard, opacity $arvo-duration-base $arvo-ease-standard',
      },
    ],
  },
  {
    id: 'motion-loader',
    title: 'Loader',
    description: 'Dot, circular, and square loading indicators.',
    rows: [
      { token: '$arvo-motion-loader-dot', value: '1s ease-in-out infinite' },
      { token: '$arvo-motion-loader-circle', value: '0.8s linear infinite' },
      { token: '$arvo-motion-loader-square', value: '2s linear infinite alternate' },
      { token: '$arvo-motion-loader-skeleton', value: '1.5s ease-in-out infinite' },
    ],
  },
  {
    id: 'motion-pane',
    title: 'Pane / drawer',
    description: 'Side Panel, Drawer, Member Info Panel',
    rows: [
      { token: '$arvo-motion-pane', value: 'transform $arvo-duration-slow $arvo-ease-standard' },
      { token: '$arvo-transform-pane-open', value: 'translateX(0)' },
      { token: '$arvo-transform-pane-closed-right', value: 'translateX(100%)' },
      { token: '$arvo-transform-pane-closed-left', value: 'translateX(-100%)' },
    ],
  },
  {
    id: 'motion-launchbar-drawer',
    title: 'Launchbar drawer',
    description: 'Hover-triggered launchbar secondary panel — open, close, and content switch timing.',
    rows: [
      {
        token: '$arvo-motion-launchbar-drawer-open',
        value:
          'transform $arvo-duration-medium $arvo-ease-emphasized, opacity $arvo-duration-medium $arvo-ease-emphasized',
      },
      {
        token: '$arvo-motion-launchbar-drawer-close',
        value:
          'transform $arvo-duration-base $arvo-ease-standard, opacity $arvo-duration-base $arvo-ease-standard',
      },
      { token: '$arvo-delay-launchbar-open', value: '300ms' },
      { token: '$arvo-delay-launchbar-switch', value: '150ms' },
      { token: '$arvo-delay-launchbar-close', value: '250ms' },
    ],
  },
  {
    id: 'motion-split-view',
    title: 'List split view',
    description:
      'List container resizing into an inline split-view — list shifts left, detail panel slides in, content crossfades on item switch.',
    rows: [
      {
        token: '$arvo-motion-split-layout',
        value: 'flex-basis $arvo-duration-medium $arvo-ease-emphasized',
        scss: `$arvo-motion-split-layout: flex-basis $arvo-duration-medium $arvo-ease-emphasized;`,
      },
      {
        token: '$arvo-motion-split-detail-panel',
        value:
          'flex-basis $arvo-duration-medium $arvo-ease-emphasized, opacity $arvo-duration-medium $arvo-ease-emphasized, transform $arvo-duration-medium $arvo-ease-emphasized, border-color $arvo-duration-base $arvo-ease-standard',
        scss: `$arvo-motion-split-detail-panel:
  flex-basis $arvo-duration-medium $arvo-ease-emphasized,
  opacity $arvo-duration-medium $arvo-ease-emphasized,
  transform $arvo-duration-medium $arvo-ease-emphasized,
  border-color $arvo-duration-base $arvo-ease-standard;`,
      },
      {
        token: '$arvo-motion-split-content',
        value: 'opacity $arvo-duration-fast $arvo-ease-simple',
        scss: `$arvo-motion-split-content: opacity $arvo-duration-fast $arvo-ease-simple;`,
      },
      { token: '$arvo-transform-split-detail-enter', value: 'translateX(10px)' },
      { token: '$arvo-transform-split-detail-rest', value: 'translateX(0)' },
    ],
  },
  {
    id: 'motion-toggle-switch',
    title: 'Toggle switch',
    rows: [
      {
        token: '$arvo-transition-switch-slide',
        value:
          'transform $arvo-duration-medium $arvo-ease-emphasized, background-color $arvo-duration-base $arvo-ease-simple, opacity $arvo-duration-base $arvo-ease-simple',
      },
      {
        token: '$arvo-transition-toggle-slide',
        value: '$arvo-transition-switch-slide',
      },
    ],
  },
]

/** Numeric duration values (ms) — keep JS timeouts in sync with $arvo-duration-* tokens. */
export const MOTION_DURATION_MS = {
  instant: 120,
  fast: 150,
  base: 180,
  medium: 220,
  moderate: 280,
  slow: 300,
}

/** CSS easing strings — mirrors $arvo-ease-* tokens. */
export const MOTION_EASING_CSS = {
  standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
  emphasized: 'cubic-bezier(0.2, 0, 0, 1)',
  simple: 'ease',
  inOut: 'ease-in-out',
}

/** WAAPI options for FLIP layout compensation — mirrors $arvo-motion-layout-shift. */
export const MOTION_LAYOUT_SHIFT = {
  durationMs: MOTION_DURATION_MS.medium,
  easing: MOTION_EASING_CSS.emphasized,
}

/** On-this-page sections — Motion Tokens tab. */
export const MOTION_TOKENS_TOC = [
  { id: 'motion-token-catalog', label: 'Find tokens' },
  { id: 'motion-core-durations', label: 'Core durations' },
  { id: 'motion-core-easing', label: 'Core easing' },
  ...MOTION_SEMANTIC_SECTIONS.map(({ id, title }) => ({ id, label: title })),
]
