/** Motion & Animation SCSS tokens — documentation tables. */

export const MOTION_DURATION_ROWS = [
  { token: '$arvo-duration-instant', value: '120ms' },
  { token: '$arvo-duration-fast', value: '150ms' },
  { token: '$arvo-duration-base', value: '180ms' },
  { token: '$arvo-duration-medium', value: '220ms' },
  { token: '$arvo-duration-slow', value: '300ms' },
]

export const MOTION_EASING_ROWS = [
  { token: '$arvo-ease-standard', value: 'cubic-bezier(0.4, 0, 0.2, 1)' },
  { token: '$arvo-ease-emphasized', value: 'cubic-bezier(0.2, 0, 0, 1)' },
  { token: '$arvo-ease-simple', value: 'ease' },
  { token: '$arvo-ease-in-out', value: 'ease-in-out' },
]

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
        value: 'opacity 280ms $arvo-ease-standard, transform 280ms $arvo-ease-standard',
      },
      { token: '$arvo-transition-dialog-backdrop', value: 'background-color 280ms $arvo-ease-simple' },
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
    ],
  },
  {
    id: 'motion-form-input',
    title: 'Form input',
    description: 'Textbox, Textarea, Select, Combobox, bottom border',
    rows: [
      {
        token: '$arvo-motion-form-input',
        value:
          'border-color $arvo-duration-fast $arvo-ease-simple, background-color $arvo-duration-fast $arvo-ease-simple, box-shadow $arvo-duration-fast $arvo-ease-simple',
      },
    ],
  },
  {
    id: 'motion-focus-ring',
    title: 'Focus ring',
    rows: [
      {
        token: '$arvo-motion-focus-ring',
        value:
          'outline-color $arvo-duration-fast $arvo-ease-simple, box-shadow $arvo-duration-fast $arvo-ease-simple',
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
        value: 'transform 250ms $arvo-ease-standard, width 250ms $arvo-ease-standard',
      },
      {
        token: '$arvo-motion-segmented-control',
        value:
          'transform $arvo-duration-medium $arvo-ease-emphasized, width $arvo-duration-medium $arvo-ease-emphasized',
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
    description: 'Unsaved dot, dirty state, pending indicator',
    rows: [
      {
        token: '$arvo-motion-status-indicator',
        value:
          'opacity $arvo-duration-base $arvo-ease-simple, transform $arvo-duration-base $arvo-ease-simple',
      },
      { token: '$arvo-transform-status-hidden', value: 'scale(0.6)' },
      { token: '$arvo-transform-status-visible', value: 'scale(1)' },
    ],
  },
  {
    id: 'motion-chip-remove',
    title: 'Chip remove',
    description: 'Filter chip clear, tag remove',
    rows: [
      {
        token: '$arvo-motion-chip-remove',
        value:
          'opacity $arvo-duration-base $arvo-ease-simple, transform $arvo-duration-base $arvo-ease-simple',
      },
      { token: '$arvo-transform-chip-remove', value: 'scale(0.92)' },
    ],
  },
  {
    id: 'motion-search-highlight',
    title: 'Search result highlight',
    rows: [{ token: '$arvo-motion-search-highlight', value: 'background-color $arvo-duration-base $arvo-ease-simple' }],
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
    id: 'motion-toggle-switch',
    title: 'Toggle switch',
    rows: [
      {
        token: '$arvo-transition-switch-slide',
        value: 'transform 220ms cubic-bezier(0.2, 0, 0, 1), background-color 180ms ease, opacity 180ms ease',
      },
    ],
  },
]

/** On-this-page sections — Motion Overview tab. */
export const MOTION_OVERVIEW_TOC = [{ id: 'motion-counter-animation', label: 'Direction-based counter animation' }]

/** On-this-page sections — Motion Tokens tab. */
export const MOTION_TOKENS_TOC = [
  { id: 'motion-core-durations', label: 'Core durations' },
  { id: 'motion-core-easing', label: 'Core easing' },
  ...MOTION_SEMANTIC_SECTIONS.map(({ id, title }) => ({ id, label: title })),
]
