/** Motion Playground — example metadata & TOC (live demos on Playground tab). */

export const MOTION_PLAYGROUND_TOC = [
  { id: 'motion-playground-intro', label: 'Introduction' },
  { id: 'motion-pg-expand', label: 'Tree view expand' },
  { id: 'motion-pg-accordion', label: 'Accordion' },
  { id: 'motion-pg-popup', label: 'Popup / floating surface' },
  { id: 'motion-pg-dialog', label: 'Dialog / overlay' },
  { id: 'motion-pg-feedback', label: 'Toast feedback' },
  { id: 'motion-pg-banner-dismiss', label: 'Banner alert dismiss' },
  { id: 'motion-pg-focus-ring', label: 'Focus ring' },
  { id: 'motion-pg-form-input', label: 'Form input' },
  { id: 'motion-pg-checkbox', label: 'Checkbox' },
  { id: 'motion-pg-radio', label: 'Radio' },
  { id: 'motion-pg-slider', label: 'Slider' },
  { id: 'motion-pg-progress', label: 'Progress indicator' },
  { id: 'motion-pg-carousel', label: 'Carousel pagination' },
  { id: 'motion-pg-stepper', label: 'Stepper' },
  { id: 'motion-pg-tabs', label: 'Tabs' },
  { id: 'motion-pg-nav-indicator', label: 'Navigation active indicator' },
  { id: 'motion-pg-button-group', label: 'Button group (single select)' },
  { id: 'motion-pg-button-group-multi', label: 'Button group (multi select)' },
  { id: 'motion-pg-search-expand', label: 'Search expand' },
  { id: 'motion-pg-toggle', label: 'Toggle / icon state' },
  { id: 'motion-pg-show-more', label: 'Show more / show less' },
  { id: 'motion-pg-status', label: 'Status indicator' },
  { id: 'motion-pg-counter', label: 'Counter' },
  { id: 'motion-pg-chip-remove', label: 'Chip remove' },
  { id: 'motion-pg-chip-toggle', label: 'Chip toggle / filter' },
  { id: 'motion-pg-search-highlight', label: 'Search highlight' },
  { id: 'motion-pg-empty-state', label: 'Empty state' },
  { id: 'motion-pg-avatar-uplift', label: 'Avatar group uplift' },
  { id: 'motion-pg-pane', label: 'Pane / drawer' },
  { id: 'motion-pg-launchbar-drawer', label: 'Launchbar drawer' },
  { id: 'motion-pg-switch', label: 'Switch' },
  { id: 'motion-pg-link', label: 'Link' },
  { id: 'motion-pg-nested-content', label: 'Nested content' },
  { id: 'motion-pg-nested-footer', label: 'Nested footer' },
  { id: 'motion-pg-loader', label: 'Loader' },
  { id: 'motion-pg-list-reorder', label: 'List reorder' },
  { id: 'motion-pg-list-split', label: 'List split view' },
  { id: 'motion-pg-transfer', label: 'Transfer between containers' },
  { id: 'motion-pg-invalid-drop', label: 'Invalid drop' },
]

/** @typedef {{ id: string, title: string, purpose: string, behavior?: string, tokens: string[], code: string }} MotionPlaygroundExample */

/** @type {MotionPlaygroundExample[]} */
export const MOTION_PLAYGROUND_EXAMPLES = [
  {
    id: 'motion-pg-expand',
    title: 'Tree view expand / collapse',
    purpose: 'Reveals nested tree branches — TreeView, accordion, show more, disclosure.',
    behavior: 'Children height animates open; caret switches from angle-right to angle-down. Collapse reverses both.',
    tokens: ['$arvo-motion-transition-expand'],
    code: `.tree-children {
  height: 0;
  overflow: hidden;
  transition: height $arvo-duration-slow $arvo-ease-standard;
}

.tree-caret .o9con-angle-right,
.tree-caret .o9con-angle-down {
  transition: opacity $arvo-duration-slow $arvo-ease-standard;
}`,
  },
  {
    id: 'motion-pg-accordion',
    title: 'Accordion expand / collapse',
    purpose: 'Expandable sections with height animation and caret rotation.',
    behavior: 'Body height animates open; caret-right rotates 90° when expanded.',
    tokens: ['$arvo-motion-transition-expand'],
    code: `.accordion-body-wrapper {
  height: 0;
  overflow: hidden;
  transition: height $arvo-motion-transition-expand;
}

.accordion-item.is-expanded .accordion-icon {
  transform: rotate(90deg);
}`,
  },
  {
    id: 'motion-pg-popup',
    title: 'Popup / floating surface',
    purpose: 'Lightweight surfaces — menu, popover, tooltip.',
    behavior: 'Menu and popover fade in with slight upward movement; tooltip appears on hover/focus.',
    tokens: ['$arvo-transition-popup', '$arvo-transform-popup-enter', '$arvo-transform-popup-exit'],
    code: `.popup-surface {
  opacity: 0;
  transform: $arvo-transform-popup-exit;
  transition: $arvo-transition-popup;
}

.popup-wrapper.is-open .popup-surface {
  opacity: 1;
  transform: $arvo-transform-popup-enter;
}

.tooltip {
  opacity: 0;
  transform: translateX(-50%) translateY(4px) scale(0.98);
  transition: $arvo-transition-popup;
}`,
  },
  {
    id: 'motion-pg-dialog',
    title: 'Dialog / overlay surface',
    purpose: 'Blocking surfaces — dialog, modal, confirmation.',
    behavior: 'Dialog fades in with slight upward movement. Backdrop fades in parallel.',
    tokens: [
      '$arvo-transition-dialog',
      '$arvo-transition-dialog-backdrop',
      '$arvo-transform-dialog-enter',
      '$arvo-transform-dialog-exit',
    ],
    code: `.arvo-dialog {
  opacity: 0;
  transform: translateY(-8px) scale(0.98);
  transition: $arvo-transition-dialog;
}

.arvo-dialog[open] {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.arvo-dialog::backdrop {
  transition: $arvo-transition-dialog-backdrop;
}`,
  },
  {
    id: 'motion-pg-feedback',
    title: 'Toast feedback',
    purpose: 'Toast confirms a system message appeared or was dismissed.',
    behavior:
      'Toast enters from top-right; dismiss exits toward top-right. Stack reflow uses $arvo-motion-layout-shift (FLIP) on add/remove.',
    tokens: [
      '$arvo-motion-feedback',
      '$arvo-motion-layout-shift',
      '$arvo-transform-feedback-enter',
      '$arvo-transform-feedback-exit',
      '$arvo-toast-duration-positive',
    ],
    code: `.toast {
  opacity: 0;
  transform: $arvo-transform-feedback-exit;
  transition: $arvo-motion-feedback;
}

.toast.is-visible {
  opacity: 1;
  transform: $arvo-transform-feedback-enter;
}

.toast.is-removing {
  opacity: 0;
  transform: $arvo-transform-feedback-exit;
}`,
  },
  {
    id: 'motion-pg-banner-dismiss',
    title: 'Banner alert dismiss',
    purpose: 'Banner stack dismiss — remaining alerts reflow smoothly after close.',
    behavior:
      'Dismiss fades out, moves up slightly, and collapses height so banners below move up naturally.',
    tokens: ['$arvo-motion-feedback', '$arvo-transform-banner-dismiss-exit', '$arvo-duration-medium', '$arvo-ease-simple'],
    code: `.banner-alert {
  overflow: hidden;
  max-height: 180px;
  transition:
    opacity $arvo-duration-medium $arvo-ease-simple,
    transform $arvo-duration-medium $arvo-ease-simple,
    max-height $arvo-duration-medium $arvo-ease-simple,
    margin $arvo-duration-medium $arvo-ease-simple,
    padding $arvo-duration-medium $arvo-ease-simple;
}

.banner-alert.is-closing {
  opacity: 0;
  transform: $arvo-transform-banner-dismiss-exit;
  max-height: 0;
  margin: 0;
  padding-top: 0;
  padding-bottom: 0;
  pointer-events: none;
}`,
  },
  {
    id: 'motion-pg-focus-ring',
    title: 'Focus ring motion',
    purpose: 'Keyboard focus visibility on multi-select button group segments.',
    behavior:
      'Tab through segments to see the inset focus frame fade in and out ($arvo-motion-focus-ring). Unselected segments use var(--arvo-color-b-theme-focus); selected (theme-filled) segments use var(--arvo-color-b-focus-inverse).',
    tokens: ['$arvo-motion-focus-ring', '--arvo-color-b-theme-focus', '--arvo-color-b-focus-inverse'],
    code: `.button-group-segment:focus-visible:not(.is-active)::after {
  border-color: var(--arvo-color-b-theme-focus);
  opacity: 1;
}

.button-group-segment.is-active:focus-visible::after {
  border-color: var(--arvo-color-b-focus-inverse);
  opacity: 1;
}`,
  },
  {
    id: 'motion-pg-form-input',
    title: 'Form input motion',
    purpose: 'Animated bottom border on text fields using the form-input motion token.',
    behavior:
      'Resting state shows a static gray bottom border. On focus, a theme line grows left to right (width 0 → 100%). On blur, it retracts right to left. Transition uses $arvo-motion-form-input (150ms ease). Field padding-inline is 8px.',
    tokens: ['$arvo-motion-form-input'],
    code: `.border-animation {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  transition: $arvo-motion-form-input;
}

.custom-input:focus + .border-animation {
  width: 100%;
}`,
  },
  {
    id: 'motion-pg-checkbox',
    title: 'Checkbox motion',
    purpose: 'Checkbox box fill and checkmark draw on select.',
    behavior: 'Box uses $arvo-motion-form-input-field; checkmark stroke uses $arvo-motion-checkmark-draw.',
    tokens: ['$arvo-motion-form-input-field', '$arvo-motion-checkmark-draw'],
    code: `.checkbox-box {
  transition: $arvo-motion-form-input-field;
}

.checkbox-icon path {
  stroke-dasharray: 16;
  stroke-dashoffset: 16;
  transition: $arvo-motion-checkmark-draw;
}

.checkbox-item input:checked + .checkbox-box .checkbox-icon path {
  stroke-dashoffset: 0;
}`,
  },
  {
    id: 'motion-pg-radio',
    title: 'Radio motion',
    purpose: 'Circular radio control fill on select.',
    behavior:
      'Outer ring uses $arvo-motion-form-input-field; inner dot fades and scales in on selection. Hover darkens the ring border.',
    tokens: ['$arvo-motion-form-input-field'],
    code: `.radio-box {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  transition: $arvo-motion-form-input-field;
}

.radio-fill {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  opacity: 0;
  transform: scale(0.7);
  transition:
    opacity $arvo-duration-fast $arvo-ease-simple,
    transform $arvo-duration-fast $arvo-ease-simple;
}

.radio-item input:checked + .radio-box .radio-fill {
  opacity: 1;
  transform: scale(1);
}`,
  },
  {
    id: 'motion-pg-slider',
    title: 'Slider',
    purpose: 'Bounded numeric range — thumb travel and filled track follow value changes.',
    behavior:
      'Filled track is 4px; thumb is 8px at rest and scales to 10px on hover, focus, or drag. Fill width and thumb position animate on stepper/keyboard changes; dragging follows the pointer. Stepper buttons align to the track row.',
    tokens: ['$arvo-motion-slider', '$arvo-motion-slider-thumb'],
    code: `.slider-fill,
.slider-thumb {
  transition: $arvo-motion-slider;
}

.slider-thumb {
  width: 8px;
  height: 8px;
  transition: $arvo-motion-slider-thumb;
}

.slider-rail:hover .slider-thumb,
.slider-input:focus-visible + .slider-thumb,
.slider-thumb.is-active {
  width: 10px;
  height: 10px;
}

.slider-fill.is-dragging,
.slider-thumb.is-dragging {
  transition: none;
}`,
  },
  {
    id: 'motion-pg-progress',
    title: 'Progress indicator',
    purpose: 'Linear, circular, and half-gauge progress — determinate value updates and indeterminate loading.',
    behavior:
      'Linear fill grows left-to-right with $arvo-motion-progress-linear; percentage label updates in sync. Circular arc advances clockwise from 12 o’clock with $arvo-motion-progress-circular; value sits centered inside. Half gauge uses a semi-circular arc with butt caps (sharp ends) and $arvo-motion-progress-gauge; value sits inside the opening. Decreasing values animate backward on all variants. Indeterminate modes loop until a value is available. Track uses slider rail gray; fill uses b-theme.',
    tokens: [
      '$arvo-motion-progress-linear',
      '$arvo-motion-progress-circular',
      '$arvo-motion-progress-gauge',
      '$arvo-motion-progress-linear-indeterminate',
      '$arvo-motion-progress-circular-indeterminate',
    ],
    code: `.progress-linear-fill {
  transition: $arvo-motion-progress-linear;
}

.progress-circular-arc {
  transition: $arvo-motion-progress-circular;
}

.progress-gauge-arc {
  transition: $arvo-motion-progress-gauge;
}

.progress-linear-indeterminate-bar {
  animation: progress-linear-indeterminate $arvo-motion-progress-linear-indeterminate;
}

.progress-circular-indeterminate {
  animation: progress-circular-indeterminate $arvo-motion-progress-circular-indeterminate;
}`,
  },
  {
    id: 'motion-pg-carousel',
    title: 'Carousel pagination',
    purpose: 'Carousel view with square dot navigation — slide transitions and swipe.',
    behavior:
      'Next: current slide exits left while incoming enters from right; previous reverses direction. Outgoing and incoming move together inside an overflow-hidden viewport. Square dots expand into a pill when active; inactive dots return to default in sync. Non-adjacent dot selection jumps directly to the target slide. Navigation is disabled during transitions. Swipe follows the pointer and snaps to the nearest slide on release; below threshold, the view returns smoothly. Reduced motion uses an immediate update.',
    tokens: ['$arvo-motion-carousel-slide', '$arvo-motion-carousel-dot'],
    code: `.carousel-track {
  transition: $arvo-motion-carousel-slide;
}

.carousel-track.is-dragging {
  transition: none;
}

.carousel-dot {
  transition: $arvo-motion-carousel-dot;
}

.carousel-dot.is-active {
  width: 1.125rem;
}`,
  },
  {
    id: 'motion-pg-stepper',
    title: 'Stepper status transition',
    purpose: 'Horizontal stepper — connector line and step indicator state changes.',
    behavior:
      'Next: connector animates toward the next step, then the next step becomes current and the previous step completes with a check-circle icon. Previous reverses the connector and restores the prior step as current. Warning and error states update marker and label together without shake or flash. Only the affected connector segment and step indicators animate. Reduced motion applies final states immediately.',
    tokens: [
      '$arvo-motion-stepper-connector',
      '$arvo-motion-stepper-marker',
      '$arvo-motion-stepper-label',
    ],
    code: `.stepper-connector-fill {
  transition: $arvo-motion-stepper-connector;
}

.stepper-marker {
  transition: $arvo-motion-stepper-marker;
}

.stepper-step-label,
.stepper-step-title {
  transition: $arvo-motion-stepper-label;
}`,
  },
  {
    id: 'motion-pg-tabs',
    title: 'Tabs motion',
    purpose: 'Active tab indicator movement across horizontal or vertical tab strips.',
    behavior:
      'Horizontal: underline slides and resizes along the bottom edge. Vertical: left-edge indicator slides and resizes to match the selected tab. Strip separators and inactive hover use $arvo-border-3 with $arvo-color-b-hover.',
    tokens: ['$arvo-motion-tab', '$arvo-border-3', '$arvo-color-b-hover', '$arvo-color-b-theme-active'],
    code: `.tabstrip {
  border-bottom: $arvo-border-3 solid $arvo-color-b-hover;
}

.tabstrip--vertical {
  border-right: $arvo-border-3 solid $arvo-color-b-hover;
}

.tabstrip button:not([aria-selected="true"]):hover {
  box-shadow: inset 0 calc(-1 * $arvo-border-3) 0 0 $arvo-color-b-hover;
}

.tab-indicator {
  border-bottom: $arvo-border-3 solid $arvo-color-b-theme-active;
  transition: $arvo-motion-tab;
}

.tab-indicator--vertical {
  border-left: $arvo-border-3 solid $arvo-color-b-theme-active;
  transition: $arvo-motion-tab;
}`,
  },
  {
    id: 'motion-pg-nav-indicator',
    title: 'Navigation active indicator',
    purpose: 'Vertical navigation — shared left border slides between active rows.',
    behavior:
      'One shared left border and background highlight move directly to the selected row — position and height animate together in 180ms with standard easing. Active label and icon update in sync; inactive rows return to default. Hover uses s-theme-hover-4 on non-active items only. Initial load places the indicator without animation. Reduced motion snaps or uses a minimal fade.',
    tokens: [
      '$arvo-motion-nav-indicator',
      '$arvo-motion-nav-item',
      '$arvo-color-s-theme-hover-4',
      '$arvo-color-b-theme-active',
    ],
    code: `.nav-list {
  position: relative;
}

.nav-indicator,
.nav-highlight {
  position: absolute;
  left: 0;
  top: 0;
  transition: $arvo-motion-nav-indicator;
}

.nav-indicator {
  width: $arvo-border-3;
  background: $arvo-color-b-theme-active;
}

.nav-highlight {
  right: 0;
  background: $arvo-color-s-theme-hover-4;
}

.nav-item {
  transition: $arvo-motion-nav-item;
}

.nav-item:not(.is-active):hover {
  background: $arvo-color-s-theme-hover-4;
}`,
  },
  {
    id: 'motion-pg-button-group',
    title: 'Button group (single select) motion',
    purpose: 'Active background slides between grouped options — with text labels, icon-only, or expand-on-select.',
    behavior:
      'With labels and icon-only use a sliding indicator ($arvo-motion-segmented-control). Expand-on-select adds label width/opacity and segment width transitions ($arvo-duration-medium with standard easing). Selected labels use $arvo-font-l16-m.',
    tokens: ['$arvo-motion-segmented-control', '$arvo-duration-medium'],
    code: `/* With labels & icon only — sliding indicator */
.active-indicator {
  transform: translateX(var(--indicator-x));
  width: var(--indicator-width);
  transition: $arvo-motion-segmented-control;
}

.button-group .segment.is-active {
  @include arvo-font-l16-m;
}

/* Expand on select — label reveal + segment width */
.button-group--expand-on-select .segment {
  transition: width $arvo-duration-medium $arvo-ease-emphasized;
}

.button-group--expand-on-select .segment-label {
  max-width: 0;
  opacity: 0;
  overflow: hidden;
  transition:
    max-width $arvo-duration-medium $arvo-ease-simple,
    opacity $arvo-duration-medium $arvo-ease-simple;
}

.button-group--expand-on-select .segment.is-active .segment-label {
  max-width: 200px;
  opacity: 1;
}`,
  },
  {
    id: 'motion-pg-button-group-multi',
    title: 'Button group (multi select) motion',
    purpose:
      'Independent toggles for cumulative states (e.g. Bold + Italic). Nothing selected by default — each item animates its own pressed surface.',
    behavior:
      'With labels and icon-only use per-item press motion ($arvo-motion-toggle). Expand-on-select adds the same label width/opacity and segment width pattern as single-select ($arvo-duration-medium). Selected labels use $arvo-font-l16-m.',
    tokens: ['$arvo-motion-toggle', '$arvo-duration-medium'],
    code: `/* With labels & icon only — per-item press */
.button-group--multi .segment {
  transition: $arvo-motion-toggle;
}

.button-group--multi .segment.is-active {
  @include arvo-font-l16-m;
  background: var(--arvo-color-s-theme-active-1);
  color: var(--arvo-color-t-inverse);
}

/* Expand on select — label reveal + segment width (no sliding indicator) */
.button-group--multi.button-group--expand-on-select .segment {
  transition:
    $arvo-motion-toggle,
    width $arvo-duration-medium $arvo-ease-emphasized;
}

.button-group--multi.button-group--expand-on-select .segment-label {
  max-width: 0;
  opacity: 0;
  overflow: hidden;
  transition:
    max-width $arvo-duration-medium $arvo-ease-simple,
    opacity $arvo-duration-medium $arvo-ease-simple;
}

.button-group--multi.button-group--expand-on-select .segment.is-active .segment-label {
  max-width: 200px;
  opacity: 1;
}`,
  },
  {
    id: 'motion-pg-search-expand',
    title: 'Search expand motion',
    purpose: 'Compact search icon expands into a full input field beside a heading.',
    behavior:
      'Two layouts: expands right (compact header) or expands left (search aligned to the trailing edge). Width grows 36px → 240px; input and close icon fade in. Bottom focus line grows left to right on focus (same as form input) and retracts on blur or collapse.',
    tokens: ['$arvo-motion-search-expand', '$arvo-motion-form-input'],
    code: `.search-box {
  width: 36px;
  overflow: hidden;
  transition:
    width $arvo-duration-medium $arvo-ease-standard,
    background-color $arvo-duration-base $arvo-ease-simple;
}

.search-expand.is-expanded .search-box {
  width: 240px;
  background: #f2f2f2;
}

.search-box-border {
  width: 0;
  transition: $arvo-motion-form-input;
}

.search-expand.is-expanded .search-box:focus-within .search-box-border,
.search-expand.is-collapsing .search-box .search-box-border {
  width: 100%;
}`,
  },
  {
    id: 'motion-pg-toggle',
    title: 'Toggle / icon state',
    purpose: 'Confirms bookmark, favorite, star, or pin state change — icon or text button.',
    behavior:
      'Icon toggle: outline cross-fades to filled using --arvo-color-i-theme-active. Button toggle: same icon + label cross-fade — inactive uses secondary tokens, active uses theme-active. Brief scale pulse on activate.',
    tokens: [
      '$arvo-motion-toggle',
      '$arvo-transform-toggle-active',
      '$arvo-transform-toggle-rest',
      '--arvo-color-i-theme-active',
      '--arvo-color-t-theme-active',
    ],
    code: `.icon-toggle.is-active .icon-fill {
  color: var(--arvo-color-i-theme-active);
  opacity: 1;
  animation: toggle-grow $arvo-motion-toggle;
}

.text-toggle.is-active .text-fill {
  color: var(--arvo-color-t-theme-active);
  opacity: 1;
  animation: toggle-grow $arvo-motion-toggle;
}`,
  },
  {
    id: 'motion-pg-show-more',
    title: 'Show more / show less',
    purpose: 'Inline expand for truncated text — show more, show less, or +N more patterns.',
    behavior:
      'Three patterns: inline show more beside truncated text, show more below a clamped paragraph with animated height, and chip lists that reveal hidden items via +N more / show less. Chevron rotates 180° when expanded.',
    tokens: ['$arvo-motion-transition-expand'],
    code: `.text-wrapper {
  overflow: hidden;
  transition: height $arvo-motion-transition-expand;
}

.toggle-icon {
  transition: transform $arvo-motion-transition-expand;
}

.expand-card.is-expanded .toggle-icon {
  transform: rotate(180deg);
}`,
  },
  {
    id: 'motion-pg-status',
    title: 'Status indicator',
    purpose: 'Unsaved dot, dirty state, or pending marker without interrupting workflow.',
    behavior:
      'Dirty state: dot scales up and fades in when active. Pulsating status: solid warning core with a ring that expands and fades on loop — uses --arvo-color-i-warning-static and --arvo-color-s-warning-static.',
    tokens: [
      '$arvo-motion-status-indicator',
      '$arvo-motion-status-pulse',
      '$arvo-transform-status-hidden',
      '$arvo-transform-status-visible',
      '--arvo-color-i-warning-static',
    ],
    code: `.dot-indicator.is-visible {
  opacity: 1;
  transform: $arvo-transform-status-visible;
}

.status-pulse-ring {
  background-color: var(--arvo-color-s-warning-static);
  animation: status-pulse $arvo-motion-status-pulse;
}

.status-pulse-dot {
  background-color: var(--arvo-color-i-warning-static);
}

@keyframes status-pulse {
  0% {
    transform: scale(0.75);
    opacity: 0.55;
  }
  100% {
    transform: scale(1.65);
    opacity: 0;
  }
}`,
  },
  {
    id: 'motion-pg-counter',
    title: 'Counter motion',
    purpose: 'Notification badge or selection count — notice count changes without noise.',
    behavior: 'Increase slides upward; decrease slides downward. Uses animation retrigger via class reset.',
    tokens: ['$arvo-motion-counter'],
    code: `.counter-number.is-increasing {
  animation: counter-slide-up $arvo-motion-counter;
}

.counter-number.is-decreasing {
  animation: counter-slide-down $arvo-motion-counter;
}

@keyframes counter-slide-up {
  0% { transform: translateY(8px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}`,
  },
  {
    id: 'motion-pg-chip-remove',
    title: 'Chip remove',
    purpose: 'Filter chip or tag removal feels intentional, not abrupt.',
    behavior:
      'Dismissed chip fades and collapses width (max-width → 0) so siblings glide into place. FLIP reflow uses $arvo-motion-layout-shift after DOM removal.',
    tokens: ['$arvo-motion-chip-remove', '$arvo-transform-chip-remove', '$arvo-motion-layout-shift'],
    code: `.chip {
  max-width: 18rem;
  overflow: hidden;
  transition: $arvo-motion-chip-remove;
}

.chip.is-removing {
  opacity: 0;
  max-width: 0;
  padding-inline: 0;
  border-width: 0;
  transform: $arvo-transform-chip-remove;
}`,
  },
  {
    id: 'motion-pg-chip-toggle',
    title: 'Chip toggle / filter',
    purpose: 'Filter chips that toggle on/off and filter a list or grid below.',
    behavior:
      'Chip fill and label crossfade on toggle (180ms). List/grid rows below slide/fade and height-collapse (220ms) as filters change.',
    tokens: ['$arvo-motion-chip-toggle', '$arvo-motion-chip-filter-content'],
    code: `.filter-chip {
  gap: $arvo-space-4;
  transition: $arvo-motion-chip-toggle;
}

.filter-chip.is-selected {
  background: var(--arvo-color-s-theme-active-1);
  color: var(--arvo-color-t-inverse);
}

.filter-result {
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  transform: translateY(4px);
  transition: $arvo-motion-chip-filter-content;
}

.filter-result.is-visible {
  grid-template-rows: 1fr;
  opacity: 1;
  transform: translateY(0);
}`,
  },
  {
    id: 'motion-pg-search-highlight',
    title: 'Search result highlight',
    purpose: 'Matching text highlights while typing without layout shift.',
    behavior: 'Highlight background fades in on match.',
    tokens: ['$arvo-motion-search-highlight'],
    code: `mark {
  transition: $arvo-motion-search-highlight;
  background: #fff2a8;
}`,
  },
  {
    id: 'motion-pg-empty-state',
    title: 'Empty state illustration',
    purpose: 'Optional ambient motion for empty states — low priority.',
    behavior: 'Illustration floats slowly on a 2.8s loop with subtle opacity pulse.',
    tokens: ['$arvo-motion-empty-state', '$arvo-transform-empty-state-float', '$o9illus-124'],
    code: `.empty-illustration {
  margin-bottom: 24px;
  animation: arvo-empty-float $arvo-motion-empty-state;
  will-change: transform, opacity;
}

.empty-illus.o9illus.o9illus-no-notifications {
  width: $o9illus-124;
  height: $o9illus-124;
}

@keyframes arvo-empty-float {
  0% {
    transform: translateY(0);
    opacity: 0.97;
  }

  50% {
    transform: $arvo-transform-empty-state-float;
    opacity: 1;
  }

  100% {
    transform: translateY(0);
    opacity: 0.97;
  }
}`,
  },
  {
    id: 'motion-pg-avatar-uplift',
    title: 'Avatar group uplift',
    purpose: 'Individual avatar lift in a stacked group — Avatar Group hover feedback.',
    behavior:
      'Hovering or focusing one avatar scales it to 110% in place (image, border, and +N tile together) with a symmetric shadow — no translate. Stacked avatars overlap by 4px; z-index brings the active avatar forward.',
    tokens: [
      '$arvo-motion-avatar-uplift',
      '$arvo-transform-avatar-uplift-hover',
      '$arvo-transform-avatar-uplift-rest',
      '$arvo-shadow-avatar-uplift-hover',
      '$arvo-shadow-avatar-uplift-rest',
    ],
    code: `.avatar-group {
  display: inline-flex;
}

.avatar-group-item + .avatar-group-item {
  margin-inline-start: -4px;
}

.avatar-group-item {
  transform: $arvo-transform-avatar-uplift-rest;
  transform-origin: center;
  box-shadow: $arvo-shadow-avatar-uplift-rest;
  transition: $arvo-motion-avatar-uplift;
}

.avatar-group-item:hover,
.avatar-group-item:focus-visible {
  z-index: 1;
  transform: $arvo-transform-avatar-uplift-hover;
  box-shadow: $arvo-shadow-avatar-uplift-hover;
}`,
  },
  {
    id: 'motion-pg-pane',
    title: 'Pane / drawer',
    purpose: 'Large side surfaces — drawer, inspector, member info panel.',
    behavior: 'Panel slides in from the screen edge.',
    tokens: ['$arvo-motion-pane', '$arvo-transform-pane-open', '$arvo-transform-pane-closed-right'],
    code: `.drawer {
  transform: $arvo-transform-pane-closed-right;
  transition: $arvo-motion-pane;
}
.drawer.is-open {
  transform: $arvo-transform-pane-open;
}`,
  },
  {
    id: 'motion-pg-launchbar-drawer',
    title: 'Launchbar drawer',
    purpose: 'Hover-triggered secondary navigation — launchbar icon opens an adjacent drawer panel.',
    behavior:
      'Opens after 300ms hover (150ms when switching items with drawer already open). Closes 250ms after pointer leaves both launchbar item and drawer. Slides in from a small negative offset with subtle fade (220ms emphasized); closes with 180ms standard easing. Keyboard focus and click open immediately; touch uses tap. Esc dismisses. Launchbar stays fixed; main content is not pushed.',
    tokens: [
      '$arvo-motion-launchbar-drawer-open',
      '$arvo-motion-launchbar-drawer-close',
      '$arvo-duration-medium',
      '$arvo-duration-base',
      '$arvo-ease-emphasized',
      '$arvo-ease-standard',
    ],
    code: `.launchbar-drawer {
  transform: translateX(-0.5rem);
  opacity: 0;
  pointer-events: none;
  transition: $arvo-motion-launchbar-drawer-close;
}

.launchbar-drawer.is-open {
  transform: translateX(0);
  opacity: 1;
  pointer-events: auto;
  transition: $arvo-motion-launchbar-drawer-open;
}`,
  },
  {
    id: 'motion-pg-switch',
    title: 'Switch / toggle slide',
    purpose: 'Binary ON/OFF control with clear thumb movement.',
    behavior: 'Thumb slides with emphasized easing; track color transitions.',
    tokens: ['$arvo-transition-switch-slide'],
    code: `.switch-thumb {
  transition: $arvo-transition-switch-slide;
}
input:checked + .switch-track .switch-thumb {
  transform: translateX(24px) scale(1.04);
}`,
  },
  {
    id: 'motion-pg-link',
    title: 'Link motion',
    purpose: 'Underline enter/exit for primary, secondary, and tertiary links.',
    behavior:
      'Primary and secondary: --arvo-color-t-info-dark / --arvo-color-t-secondary with underline that exits on hover. Tertiary: --arvo-color-t-info-dark, no underline until hover. All variants use --arvo-color-t-info-light on hover.',
    tokens: ['$arvo-motion-link', '--arvo-color-t-info-dark', '--arvo-color-t-info-light', '--arvo-color-t-secondary'],
    code: `.arvo-link--primary {
  color: var(--arvo-color-t-info-dark);
}

.arvo-link--secondary {
  color: var(--arvo-color-t-secondary);
}

.arvo-link--tertiary {
  color: var(--arvo-color-t-info-dark);
}

.arvo-link:hover {
  color: var(--arvo-color-t-info-light);
}

.arvo-link--primary::after,
.arvo-link--secondary::after {
  transform: scaleX(1);
}

.arvo-link--primary:hover::after,
.arvo-link--secondary:hover::after {
  transform: scaleX(0);
}

.arvo-link--tertiary::after {
  transform: scaleX(0);
}

.arvo-link--tertiary:hover::after {
  transform: scaleX(1);
}`,
  },
  {
    id: 'motion-pg-nested-content',
    title: 'Nested content transition',
    purpose: 'Forward/back navigation inside popover, dialog, drawer, or settings flow.',
    behavior:
      'Forward: old content exits left, new enters from right. Back reverses. Header back button and footer crossfade. List rows with nested navigation show an inline chevron that shifts slightly right on hover and returns on leave. Same panel shown inline and inside a dialog.',
    tokens: [
      '$arvo-motion-nested-content',
      '$arvo-motion-nested-footer',
      '$arvo-transform-nested-enter-forward',
      '$arvo-transform-nested-exit-forward',
      '$arvo-transform-nested-rest',
    ],
    code: `.view {
  opacity: 0;
  transform: $arvo-transform-nested-enter-forward;
  transition: $arvo-motion-nested-content;
}

.view.is-active {
  opacity: 1;
  transform: $arvo-transform-nested-rest;
}

.popover-footer {
  transition: $arvo-motion-nested-footer;
}

.nested-list-item-chevron {
  transition:
    opacity $arvo-duration-fast $arvo-ease-simple,
    transform $arvo-duration-fast $arvo-ease-standard;
}

.nested-list-item:hover .nested-list-item-chevron {
  transform: translateX(2px);
}`,
  },
  {
    id: 'motion-pg-nested-footer',
    title: 'Nested surface transition',
    purpose: 'Action menu opens a nested popover surface with forward/back motion.',
    behavior:
      'Menu surface slides to nested popover; back returns to menu. Content and footer crossfade on view change. Menu rows with inline chevrons shift the arrow slightly right on hover.',
    tokens: ['$arvo-transition-popup', '$arvo-motion-nested-content', '$arvo-motion-nested-footer'],
    code: `.surface {
  opacity: 0;
  transform: translateY(-4px);
  transition: $arvo-transition-popup;
}

.surface.is-open {
  opacity: 1;
  transform: translateY(0);
}

.surface.is-exiting-forward {
  opacity: 0;
  transform: translateX(-12px);
}`,
  },
  {
    id: 'motion-pg-loader',
    title: 'Loader',
    purpose: 'Loading indicators — dot pulse, circular spin, square trail, and skeleton shimmer.',
    behavior:
      'Dot loader pulses three circles in sequence. Circular loader spins a partial ring. Square loader animates a block through a box-shadow trail. Skeleton loader uses s-pulse-dark as the base with a blurred s-pulse-light diagonal shimmer band. All loop until content resolves.',
    tokens: [
      '$arvo-motion-loader-dot',
      '$arvo-motion-loader-circle',
      '$arvo-motion-loader-square',
      '$arvo-motion-loader-skeleton',
      '$arvo-color-s-pulse-dark',
      '$arvo-color-s-pulse-light',
    ],
    code: `.skeleton {
  position: relative;
  overflow: hidden;
  background: var(--arvo-color-s-pulse-dark);
}

.skeleton::after {
  content: '';
  position: absolute;
  inset: -100%;
  background: var(--arvo-color-s-pulse-light);
  filter: blur(8px);
  transform: translateX(-60%) rotate(12deg);
  animation: skeleton-shimmer $arvo-motion-loader-skeleton;
}

@keyframes skeleton-shimmer {
  to {
    transform: translateX(60%) rotate(12deg);
  }
}`,
  },
  {
    id: 'motion-pg-list-reorder',
    title: 'Reordering within same list',
    purpose: 'Drag-handle reorder in filter lists, column pickers, and hybrid popover rows.',
    behavior:
      'Drag via o9con-drag-handle or use angle-up / angle-down to move a row. Picked row uses s-layer-05 surface, arvo-shadow-down, and a top border in b-theme. Siblings slide smoothly with $arvo-motion-layout-shift timing while dragging; button moves use FLIP.',
    tokens: [
      '$arvo-motion-layout-shift',
      '$arvo-shadow-down',
      '$arvo-border-2',
      '$arvo-color-s-layer-05',
      '$arvo-color-b-theme',
    ],
    code: `.reorder-item.is-dragging {
  background-color: var(--arvo-color-s-layer-05);
  box-shadow: $arvo-shadow-down;
  border-top: $arvo-border-2 solid $arvo-color-b-theme;
}

.reorder-handle {
  cursor: grab;
}

.reorder-item.is-dragging .reorder-handle {
  cursor: grabbing;
}`,
  },
  {
    id: 'motion-pg-list-split',
    title: 'List split view',
    purpose: 'Inline list-to-detail layout — edit opens a split view inside the same container.',
    behavior:
      'Edit on a list row resizes the list to the left and slides the detail panel in from the right within the same container — no modal or overlay. Edit on another row keeps split-view open and crossfades detail content only. Close collapses the detail panel and expands the list back to full width. Layout uses $arvo-motion-split-layout and $arvo-motion-split-detail-panel; content switches use $arvo-motion-split-content.',
    tokens: [
      '$arvo-motion-split-layout',
      '$arvo-motion-split-detail-panel',
      '$arvo-motion-split-content',
      '$arvo-transform-split-detail-enter',
      '$arvo-transform-split-detail-rest',
    ],
    code: `.split-view.is-split .split-view-list {
  flex-basis: 48%;
  transition: $arvo-motion-split-layout;
}

.split-view-detail {
  flex-basis: 0%;
  opacity: 0;
  transform: $arvo-transform-split-detail-enter;
  transition: $arvo-motion-split-detail-panel;
}

.split-view.is-split .split-view-detail {
  flex-basis: 52%;
  opacity: 1;
  transform: $arvo-transform-split-detail-rest;
}

.split-view-detail-content.is-fading {
  opacity: 0;
  transition: $arvo-motion-split-content;
}`,
  },
  {
    id: 'motion-pg-transfer',
    title: 'Transfer items between two containers',
    purpose: 'Dual-list pickers — move selected or all items between source and destination panels.',
    behavior:
      'Drag via o9con-drag-handle or use transfer buttons. Dragging moves selected rows as a group to the opposite container only — drops on the source list are rejected. Selected rows fade, fly horizontally, and land with fade-in; source gaps close with $arvo-motion-layout-shift. Selection clears when complete.',
    tokens: [
      '$arvo-motion-layout-shift',
      '$arvo-duration-fast',
      '$arvo-duration-base',
      '$arvo-duration-moderate',
      '$arvo-ease-standard',
      '$arvo-ease-emphasized',
    ],
    code: `.transfer-item.is-transferring {
  opacity: 0.35;
  transition: opacity $arvo-duration-fast $arvo-ease-simple;
}

.transfer-fly {
  transition:
    transform $arvo-duration-moderate $arvo-ease-standard,
    opacity $arvo-duration-fast $arvo-ease-simple;
}

.transfer-list.is-reserving {
  transition: padding-bottom $arvo-duration-moderate $arvo-ease-emphasized;
}

.transfer-item.is-incoming {
  opacity: 0;
  transition: opacity $arvo-duration-base $arvo-ease-simple;
}`,
  },
  {
    id: 'motion-pg-invalid-drop',
    title: 'Invalid drop / constraint feedback',
    purpose: 'Rejected placement — duplicate block, invalid target, max limit.',
    behavior: 'Block tilts, shows X, shakes once, stays invalid until fixed.',
    tokens: ['$arvo-motion-invalid-drop'],
    code: `.block.is-dropped-invalid {
  border-color: #d92d20;
  transform: rotate(-2deg);
}
.block.is-shaking {
  animation: arvo-invalid-drop-shake $arvo-motion-invalid-drop;
}`,
  },
]
