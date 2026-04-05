/**
 * o9DS effects documentation — SCSS shadow variables and opacity tokens.
 * Shadow color tokens reference semantic surface shadows (e.g. $o9ds-color-s-shadow-static-1).
 */

/** Box-shadow presets (six directions / surfaces). */
export const SHADOW_BOX_TOKEN_ROWS = [
  {
    name: '$o9ds-shadow-left',
    value: '-10px 0px 10px 0px $o9ds-color-s-shadow-static-2;',
    usage: 'Right side panel or drawer that opens as an overlay.',
    clipboard: 'box-shadow: $o9ds-shadow-left;',
  },
  {
    name: '$o9ds-shadow-right',
    value: '10px 0px 10px 0px $o9ds-color-s-shadow-static-2;',
    usage: 'Left side panel or drawer that opens as an overlay.',
    clipboard: 'box-shadow: $o9ds-shadow-right;',
  },
  {
    name: '$o9ds-shadow-down',
    value: '0px 10px 20px 0px $o9ds-color-s-shadow-static-1;',
    usage: 'Dropdowns: date, time, date range, action menu, hybrid popover, and popover.',
    clipboard: 'box-shadow: $o9ds-shadow-down;',
  },
  {
    name: '$o9ds-shadow-up',
    value: '0px -10px 20px 0px $o9ds-color-s-shadow-static-1;',
    usage: 'Fixed footer toolbars and bottom sheet–style surfaces.',
    clipboard: 'box-shadow: $o9ds-shadow-up;',
  },
  {
    name: '$o9ds-shadow-center',
    value: '0px 4px 40px 0px $o9ds-color-s-shadow-static-1;',
    usage: 'Windows, alert dialogs, and toast alerts.',
    clipboard: 'box-shadow: $o9ds-shadow-center;',
  },
  {
    name: '$o9ds-shadow-fab',
    value: '0px -10px 20px 0px $o9ds-color-s-shadow-static-1;',
    usage: 'Floating action buttons and toolbars only.',
    clipboard: 'box-shadow: $o9ds-shadow-fab;',
  },
]

/** Blur token (CSS blur(), typically for backdrop overlays). */
export const BLUR_TOKEN_ROWS = [
  {
    name: '$o9ds-shadow-blur',
    value: 'blur(4px);',
    usage: 'Mask overlay scrim: set background to $o9ds-color-s-overlay-static, then backdrop-filter: $o9ds-shadow-blur;',
    /** Full mask-overlay scrim (SCSS). */
    clipboard:
      'background: $o9ds-color-s-overlay-static;\nbackdrop-filter: $o9ds-shadow-blur;',
  },
]

/** Decimal 0–1 for opacity previews */
export const OPACITY_TOKEN_ROWS = [
  {
    name: '$o9ds-opacity-80',
    pct: '80%',
    value: '0.8',
    decimal: 0.8,
    usage: 'Image hover states.',
    clipboard: 'opacity: $o9ds-opacity-80;',
  },
  {
    name: '$o9ds-opacity-60',
    pct: '60%',
    value: '0.6',
    decimal: 0.6,
    usage: 'Chart selected state.',
    clipboard: 'opacity: $o9ds-opacity-60;',
  },
  {
    name: '$o9ds-opacity-40',
    pct: '40%',
    value: '0.4',
    decimal: 0.4,
    usage: '—',
    clipboard: 'opacity: $o9ds-opacity-40;',
  },
  {
    name: '$o9ds-opacity-20',
    pct: '20%',
    value: '0.2',
    decimal: 0.2,
    usage: 'Disabled scenarios.',
    clipboard: 'opacity: $o9ds-opacity-20;',
  },
]
