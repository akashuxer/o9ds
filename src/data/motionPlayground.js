/** Motion Playground — example metadata (live demos on Playground tab). */

import {
  MOTION_EXAMPLE_META,
  MOTION_FEATURED_EXAMPLE_IDS,
  MOTION_PLAYGROUND_CATEGORIES,
  MOTION_COMPACT_EXAMPLE_IDS,
} from './motionPlaygroundCategories.js'

export { MOTION_PLAYGROUND_TOC } from './motionPlaygroundCategories.js'
export {
  MOTION_PLAYGROUND_CATEGORIES,
  MOTION_FEATURED_EXAMPLE_IDS,
  MOTION_EXAMPLE_META,
  MOTION_COMPACT_EXAMPLE_IDS,
} from './motionPlaygroundCategories.js'

/** @typedef {{ id: string, title: string, purpose: string, tokens: string[], code: string }} MotionPlaygroundExample */

/** @type {MotionPlaygroundExample[]} */
export const MOTION_PLAYGROUND_EXAMPLES = [
  {
    id: 'motion-pg-expand',
    title: 'Tree view expand / collapse',
    purpose: 'Branches unfold as you drill deeper, with the caret turning to mark what is open.',
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
    purpose: 'Sections open with a gentle height change and a caret that rotates to show expanded state.',
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
    purpose: 'Menus and popovers lift lightly into view — anchored enough to notice, calm enough to ignore.',
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
    purpose: 'Dialogs ease in with a soft rise while the backdrop fades, drawing focus without jarring the page.',
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
    purpose: 'New toasts arrive from the corner; dismissed ones slip away and the stack settles naturally.',
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
    purpose: 'Closing a banner lifts it away and the remaining alerts slide up to fill the space.',
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
    purpose: 'Tab through options and a crisp focus ring appears — a clear keyboard path with no guesswork.',
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
    purpose: 'Focus draws a line that grows beneath the field; blur pulls it back to mark where attention lives.',
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
    purpose: 'Selection fills the box and draws the check — a small, satisfying confirmation.',
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
    purpose: 'The chosen option blooms with a dot that scales in, making the single selection unmistakable.',
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
    purpose: 'Thumb and fill travel together as the value changes — continuous, tactile feedback on every step.',
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
    purpose: 'Bars and rings fill at a steady pace; when the wait continues, motion loops calmly until ready.',
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
    purpose: 'Slides glide in either direction while the active dot stretches to mark where you are.',
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
    purpose: 'Connectors fill and step markers advance — progress feels sequential, not sudden.',
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
    purpose: 'The active underline glides to the selected tab, with a quiet hover hint on the rest.',
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
    purpose: 'One accent bar travels down the rail as you switch items, keeping your place visible at a glance.',
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
    id: 'motion-pg-scrollspy',
    title: 'Scrollspy',
    purpose: 'Side links and content stay in sync — scroll or click, and the marker follows the section you are on.',
    tokens: ['$arvo-motion-scrollspy'],
    code: `.scrollspy-indicator {
  position: absolute;
  left: 0;
  width: 2px;
  transition: var(--arvo-motion-scrollspy);
}

.scrollspy-nav-item {
  transition: color $arvo-duration-base $arvo-ease-standard;
}`,
  },
  {
    id: 'motion-pg-button-group',
    title: 'Button group (single select) motion',
    purpose: 'The selected fill slides between options, or the segment widens to reveal a label when chosen.',
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
    purpose: 'Each option presses in on its own — combine states like Bold and Italic without one stealing the spotlight.',
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
    purpose: 'Search grows from a compact icon into a full field, with focus signaled underneath.',
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
    purpose: 'Icons shift from outline to filled with a brief pulse — state change you can feel.',
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
    purpose: 'Truncated content unfolds in place and the chevron turns to invite going back.',
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
    purpose: 'An unsaved dot appears quietly; warning states breathe with a gentle expanding ring.',
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
    purpose: 'Numbers rise when counts go up and fall when they drop — change is noticed, not shouted.',
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
    purpose: 'Removed chips shrink away and neighbors ease into place without a jolt.',
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
    purpose: 'Selecting a filter crossfades the chip while matching rows below appear or fade out.',
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
    purpose: 'Matched text warms with a highlight that fades in as you type — no layout jump.',
    tokens: ['$arvo-motion-search-highlight'],
    code: `mark {
  transition: $arvo-motion-search-highlight;
  background: #fff2a8;
}`,
  },
  {
    id: 'motion-pg-empty-state',
    title: 'Empty state illustration',
    purpose: 'Empty views get a slow, ambient float — quiet motion that says the space is ready.',
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
    purpose: 'Hover lifts one face from the stack with a soft shadow — individual focus in a crowd.',
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
    purpose: 'Side panels slide in from the edge, bringing inspectors and drawers without reloading the shell.',
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
    purpose: 'Hover or focus opens a secondary panel beside the launchbar; leave, and it glides away.',
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
    purpose: 'The thumb glides across the track as color shifts — on or off, instantly readable.',
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
    purpose: 'Underlines sweep in on hover while color shifts — links feel responsive, not static.',
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
    purpose: 'Drill forward and content slides ahead; step back and it returns — like pages in a single panel.',
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
    purpose: 'Menus hand off to nested surfaces with a smooth slide and crossfade between views.',
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
    purpose: 'Dots pulse, rings spin, skeletons shimmer — motion that says loading without demanding attention.',
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
    purpose: 'Drag a row and it lifts; siblings part smoothly to show exactly where it will land.',
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
    purpose: 'Choosing edit shrinks the list and a detail panel slides in — two views, one calm transition.',
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
    purpose: 'Selected items fly across to the other list while gaps close behind them.',
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
    purpose: 'A rejected drop tilts, marks the error, and shakes once — clear feedback until the issue is fixed.',
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

/** Motion/transform/duration chips only — exclude color (and border) foundation tokens from card chips. */
export function filterMotionPlaygroundTokenChips(tokens) {
  return (tokens ?? []).filter((token) => {
    if (token.startsWith('--arvo-color-')) return false
    if (token.startsWith('$arvo-color-')) return false
    if (token.startsWith('$arvo-border-')) return false
    return true
  })
}

/** Merge base example with gallery metadata (category, timing, guidance). */
export function enrichMotionExample(example) {
  const merged = {
    ...example,
    ...MOTION_EXAMPLE_META[example.id],
    fullWidth: !MOTION_COMPACT_EXAMPLE_IDS.has(example.id),
  }
  return {
    ...merged,
    tokens: filterMotionPlaygroundTokenChips(merged.tokens),
  }
}

export function getFeaturedMotionExamples() {
  return MOTION_FEATURED_EXAMPLE_IDS.map((id) =>
    enrichMotionExample(MOTION_PLAYGROUND_EXAMPLES.find((e) => e.id === id)),
  ).filter(Boolean)
}

export function getMotionExamplesByCategory(categoryId, { excludeFeatured = false } = {}) {
  const category = MOTION_PLAYGROUND_CATEGORIES.find((c) => c.categoryId === categoryId)
  if (!category) return []
  return category.exampleIds
    .filter((id) => !excludeFeatured || !MOTION_FEATURED_EXAMPLE_IDS.includes(id))
    .map((id) => MOTION_PLAYGROUND_EXAMPLES.find((e) => e.id === id))
    .filter(Boolean)
    .map(enrichMotionExample)
}

export function getAllMotionExamples() {
  const seen = new Set()
  /** @type {ReturnType<typeof enrichMotionExample>[]} */
  const result = []
  for (const category of MOTION_PLAYGROUND_CATEGORIES) {
    for (const id of category.exampleIds) {
      if (seen.has(id)) continue
      seen.add(id)
      const example = MOTION_PLAYGROUND_EXAMPLES.find((e) => e.id === id)
      if (example) result.push(enrichMotionExample(example))
    }
  }
  return result
}

/** Resolve Playground category filter from URL hash (category id, featured, or example id). */
export function resolvePlaygroundFilterFromHash(hash) {
  const id = (hash || '').replace(/^#/, '')
  if (
    !id ||
    id === 'motion-playground-patterns' ||
    id === 'motion-playground-all' ||
    id === 'motion-cat-all'
  ) {
    return 'all'
  }
  if (id === 'motion-playground-featured') {
    return 'featured'
  }
  const category = MOTION_PLAYGROUND_CATEGORIES.find((c) => c.id === id || c.categoryId === id)
  if (category) return category.categoryId
  if (MOTION_EXAMPLE_META[id]?.categoryId) return MOTION_EXAMPLE_META[id].categoryId
  const byExample = MOTION_PLAYGROUND_CATEGORIES.find((c) => c.exampleIds.includes(id))
  return byExample?.categoryId ?? 'all'
}
