import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as a,M as i,C as r,a as s}from"./blocks-DLeo0hIy.js";import{D as c,P as d,A as t,a as h,b as p,M as x,R as m,c as v,I as j,d as g,C as u,e as b,f,g as y}from"./DateRangePicker.stories-Bou5KiUB.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./useOverlay-Bo9f1g6f.js";import"./OverlayContext-C5RootgB.js";import"./Calendar-kkFVIcSH.js";import"./useTooltip-DZu1XpnP.js";import"./index28-DgjIRxoq.js";import"./useArvoLocale-z-KisV4q.js";import"./useFocusTrap-BePVbEUc.js";import"./IconButton-BgwDUYzG.js";import"./useControllableState-BcENo7ec.js";import"./loading-flag-DkqmYwgU.js";import"./Button-B8O_kk1m.js";import"./ButtonGroup-Bky2dG1G.js";import"./Switch-BDE_dn2p.js";import"./FormLabel-Dn-HbpfA.js";import"./MessageAlert-DBQwY950.js";import"./NumberInput-Iv_u_Hxn.js";import"./Indicator-DI-QBEWN.js";import"./CalendarNav-C-WBh-a1.js";function l(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
`,e.jsx(n.h1,{id:"daterangepicker",children:"DateRangePicker"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsxs(n.p,{children:[`A unified date-range picker with three capability layers gated by
configuration: `,e.jsx(n.strong,{children:"absolute"})," (the default dual-calendar selection), ",e.jsx(n.strong,{children:"member"}),`
(provide `,e.jsx(n.code,{children:"frequency"})," + ",e.jsx(n.code,{children:"memberData"}),` to pick named time buckets), and
`,e.jsx(n.strong,{children:"rolling"})," (set ",e.jsx(n.code,{children:"hasRolling"}),` to capture an offset expression that recomputes
on reopen). The trigger field, ARIA contract, keyboard map, and overlay
behavior are shared across all three layers.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Select a start/end date pair for reports, filters, or planning windows."}),`
`,e.jsxs(n.li,{children:["Enable the member layer (",e.jsx(n.code,{children:"frequency"})," + ",e.jsx(n.code,{children:"memberData"}),`) when users pick named
buckets (weeks, months, quarters) instead of raw calendar dates.`]}),`
`,e.jsxs(n.li,{children:["Enable ",e.jsx(n.code,{children:"hasRolling"}),` for a relative window (e.g. "current week -2 to +2") that
recomputes each time the popover opens.`]}),`
`,e.jsxs(n.li,{children:["For a single date use ",e.jsx(n.code,{children:"DatePicker"}),"; for date + time use ",e.jsx(n.code,{children:"DateTimePicker"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsxs(n.p,{children:[`Adjust any prop live. This is the canonical interactive example. The picker has
three capability layers gated by config: `,e.jsx(n.strong,{children:"absolute"})," (default), ",e.jsx(n.strong,{children:"member"}),`
(provide `,e.jsx(n.code,{children:"frequency"})," + ",e.jsx(n.code,{children:"memberData"}),"), and ",e.jsx(n.strong,{children:"rolling"}),` (additionally set
`,e.jsx(n.code,{children:"hasRolling"}),")."]}),`
`,e.jsx(r,{of:d,sourceState:"shown"}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.p,{children:["Two trigger sizes are available: ",e.jsx(n.code,{children:"sm"})," (24px field) and ",e.jsx(n.code,{children:"lg"}),` (32px field, the
default).`]}),`
`,e.jsx(r,{of:t}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(n.p,{children:`Disabled removes the field from interaction; read-only shows a value but
prevents editing; invalid surfaces an error message; loading swaps the trigger
for a spinner and blocks the popover.`}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h2,{id:"capability-layers",children:"Capability layers"}),`
`,e.jsxs(n.p,{children:[`The same component renders three layers depending on configuration: absolute
(always available), member (with `,e.jsx(n.code,{children:"frequency"})," + ",e.jsx(n.code,{children:"memberData"}),`), and rolling (with
`,e.jsx(n.code,{children:"hasRolling"}),")."]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.h2,{id:"constraints",children:"Constraints"}),`
`,e.jsxs(n.p,{children:["Bound the selectable range with ",e.jsx(n.code,{children:"minDate"})," and ",e.jsx(n.code,{children:"maxDate"}),"."]}),`
`,e.jsx(r,{of:v}),`
`,e.jsx(n.h2,{id:"indicator-slot",children:"Indicator slot"}),`
`,e.jsxs(n.p,{children:[`A consumer-controlled indicator can be pinned to the trigger's top-right
corner via the `,e.jsx(n.code,{children:"indicator"})," prop."]}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(r,{of:g}),`
`,e.jsx(n.h2,{id:"recipes",children:"Recipes"}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(r,{of:b}),`
`,e.jsx(r,{of:f}),`
`,e.jsx(r,{of:y}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ArvoDateRangePicker"}),` is the unified date range picker for all three Arvo
range-selection layers. Capabilities are gated by configuration so consumers
opt in to richer behavior without swapping components:`]}),`
`,e.jsxs(n.p,{children:[`| Layer                | Activation                                                                |
|----------------------|----------------------------------------------------------------------------|
| Absolute (default)   | Always available; renders the dual-calendar selection UI.                  |
| Member / Timeframe   | Provide `,e.jsx(n.code,{children:"frequency"})," + ",e.jsx(n.code,{children:"memberData"}),`; the absolute / member switch appears.  |
| Rolling Time         | Set `,e.jsx(n.code,{children:"rolling: true"})," (requires member capability); adds the Rolling tab and sticky Save/Cancel footer. |"]}),`
`,e.jsxs(n.p,{children:[`The trigger field, ARIA contract, keyboard map, and overlay behavior are
shared across layers. Rolling commits both the rolling expression
(`,e.jsx(n.code,{children:"{ startOffset, endOffset }"}),`) AND the derived absolute dates so downstream
consumers can use either projection.`]}),`
`,e.jsx(n.h2,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoDateRangePicker } from '@arvo/js/components/DateRangePicker';

const el = document.querySelector('#drp-1');
const drp = ArvoDateRangePicker.initialize(el, {
  label: 'Reporting period',
  format: 'MM/dd/yyyy',
  locale: 'en-US',
  hasWeeks: true,
  isAutoClose: true,
  onChange: ({ start, end, formatted, mode, memberRange, rollingValue }) => {
    console.log('range changed', mode, formatted.start, '-', formatted.end);
  },
  onOpen: () => console.log('opened'),
  onClose: () => console.log('closed'),
});

// Imperative API
drp.open();
drp.close();
drp.toggle();

// Dual-purpose getter/setters (omit the argument to read).
drp.range();                                   // { start: Date|null, end: Date|null }
drp.range({ start: new Date(2026, 5, 10), end: new Date(2026, 5, 20) });

drp.memberRange();                             // { start: NormalizedMember|null, end: NormalizedMember|null }
drp.memberRange({ start: w22, end: w26 });

drp.rolling();                                 // RollingRange | null
drp.rolling({ startOffset: -2, endOffset: 2 });

drp.mode();                                    // 'absolute' | 'member' | 'rolling'
drp.mode('rolling');                           // switch the active tab/mode

drp.memberToggle();                            // boolean
drp.memberToggle(false);                       // hide member panel; show absolute

drp.clear();
drp.disabled(true);
drp.disabled(false);
drp.setError('Range exceeds the allowed planning window');
drp.setError(false);                           // clear the error
drp.setLoading(true);
drp.focus();
drp.destroy();

// Custom events
el.addEventListener('drp:change', (e) => {
  // detail: { start, end, formatted: { start, end }, mode, memberRange?, rollingValue? }
});
el.addEventListener('drp:mode-change', (e) => {
  // detail: { mode }; call e.preventDefault() to cancel the switch
});
el.addEventListener('drp:open', (e) => {
  // e.preventDefault() cancels the open
});
el.addEventListener('drp:close', (e) => {
  // e.preventDefault() cancels the close
});
el.addEventListener('drp:save', (e) => {
  // rolling Save was clicked; the value is already committed via drp:change
});
el.addEventListener('drp:cancel', (e) => {
  // rolling Cancel was clicked; no commit was emitted
});
`})}),`
`,e.jsx(n.h2,{id:"member--rolling-configuration",children:"Member + rolling configuration"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const memberData = [
  { key: '2026/05/04', name: 'W18', displayName: 'W18-2026' },
  { key: '2026/05/11', name: 'W19', displayName: 'W19-2026' },
  { key: '2026/05/18', name: 'W20', displayName: 'W20-2026' },
  // ... 50+ more weekly entries
];

const drp = ArvoDateRangePicker.initialize(el, {
  label: 'Live forecast window',
  frequency: 'week',
  memberData,
  // Consumer maps platform-specific IsCurrentBucketIndex -> currentMemberIndex.
  currentMemberIndex: 5,
  hasModeToggle: true,
  hasRolling: true,
  rollingPrefix: 'CW',
  rollingValue: { startOffset: -2, endOffset: 2 },
});
`})}),`
`,e.jsx(n.h2,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Input mode, absolute layer (default), no value -->
<div class="arvo-drp arvo-drp--lg arvo-drp--absolute arvo-drp--show-weeks" id="drp-1">
  <label class="arvo-drp__lbl" for="drp-1-input">Reporting period</label>
  <div class="arvo-drp__field">
    <input
      class="arvo-drp__input"
      id="drp-1-input"
      type="text"
      role="combobox"
      aria-haspopup="dialog"
      aria-expanded="false"
      aria-controls="drp-1-popover"
      autocomplete="off"
      readonly
    />
    <div class="arvo-drp__actions">
      <!-- clear button when has-value -->
      <!-- error tooltip icon when has-error + errorDisplay=tooltip -->
      <!-- calendar trigger button -->
      <button class="arvo-drp__trigger-btn arvo-icon-btn" aria-label="Select start and end date">
        <span class="arvo-btn__ico o9con o9con-calendar" aria-hidden="true"></span>
      </button>
    </div>
    <div class="arvo-drp__border"></div>
    <!-- consumer-controlled indicator pinned to the field's top-right corner;
         rendered when the \`indicator\` prop / \`indicator()\` ref is non-null -->
    <span class="arvo-drp__indicator arvo-indicator arvo-indicator--unsaved arvo-indicator--sm" aria-hidden="true"></span>
  </div>
</div>

<!-- Popover (portaled to document.body) -->
<div class="arvo-drp arvo-drp--lg arvo-drp--absolute arvo-drp--show-weeks open" style="display:contents">
  <div class="arvo-drp__popover open" role="dialog" aria-label="Choose a date range">
    <div class="arvo-drp__header">
      <!-- CalendarNav variant: absolute => month/year buttons + em-dash + month/year buttons -->
      <!-- + prev / next / today icon buttons. Member switch / Absolute-Rolling tab when capabilities active. -->
    </div>
    <div class="arvo-drp__body">
      <div class="arvo-drp__cal"><!-- ArvoCalendar (left, days view) --></div>
      <span class="arvo-drp__cal-sep" aria-hidden="true">\\u2014</span>
      <div class="arvo-drp__cal"><!-- ArvoCalendar (right, days view) --></div>
    </div>
  </div>
</div>
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Member layer popover -->
<div class="arvo-drp__popover open" role="dialog" aria-label="Choose a time period range">
  <div class="arvo-cal-nav arvo-drp__header arvo-cal-nav--member">
    <div class="arvo-cal-nav__left">
      <span class="arvo-cal-nav__period-lbl" aria-disabled="true">W18-2026</span>
      <span class="arvo-cal-nav__range-sep" aria-hidden="true">&mdash;</span>
      <span class="arvo-cal-nav__period-lbl" aria-disabled="true">W20-2026</span>
    </div>
    <div class="arvo-cal-nav__right">
      <!-- Member switch sits at the LEFT of the right zone in BOTH absolute
           and member modes so its position never shifts with the toggle. -->
      <div class="arvo-drp__hdr-switch arvo-sw">
        <!-- ArvoSwitch label="Member" -->
      </div>
      <span class="arvo-cal-nav__divider" aria-hidden="true"></span>
      <button class="arvo-cal-nav__prev arvo-icon-btn"><!-- prev --></button>
      <button class="arvo-cal-nav__next arvo-icon-btn"><!-- next --></button>
    </div>
  </div>
  <div class="arvo-drp__body">
    <!-- Member mode does NOT render the inline alert. The "{N} of {total}
         members included (Current ... to Current ...)" copy is anchor-
         relative and only meaningful for the rolling layer. -->
    <div class="arvo-drp__tile-panel">
      <div class="arvo-drp__mtg-scroll">
        <div class="arvo-drp__mtg-grid" role="grid">
          <div class="arvo-drp__mtg-tile current-member" role="gridcell"
               tabindex="0" aria-label="W22-2026" data-arvo-tooltip="W22-2026">
            <span class="arvo-drp__mtg-tile-label">W22-2026</span>
          </div>
          <!-- ... more tiles -->
        </div>
      </div>
    </div>
  </div>
</div>
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Rolling layer popover -->
<div class="arvo-drp__popover open" role="dialog" aria-label="Choose a rolling time range">
  <div class="arvo-cal-nav arvo-drp__header arvo-cal-nav--rolling">
    <div class="arvo-cal-nav__left">
      <span class="arvo-cal-nav__period-lbl" aria-disabled="true">W18-2026</span>
      <span class="arvo-cal-nav__range-sep" aria-hidden="true">&mdash;</span>
      <span class="arvo-cal-nav__period-lbl" aria-disabled="true">W20-2026</span>
    </div>
    <div class="arvo-cal-nav__right">
      <!-- Absolute/Rolling ButtonGroup ONLY in rolling mode -->
      <div class="arvo-drp__hdr-tabs arvo-btn-grp">...</div>
    </div>
  </div>
  <div class="arvo-drp__body">
    <div class="arvo-drp__rolling-setting">
      <div class="arvo-drp__rolling-row">
        <div class="arvo-drp__rolling-block">
          <label class="arvo-drp__rolling-lbl" for="drp-1-rolling-start">Start</label>
          <!-- ArvoNumberInput with prefix="CW" -->
        </div>
        <div class="arvo-drp__rolling-block">
          <label class="arvo-drp__rolling-lbl" for="drp-1-rolling-end">End</label>
          <!-- ArvoNumberInput with prefix="CW" -->
        </div>
      </div>
    </div>
    <div class="arvo-drp__info-alert" aria-live="polite">
      <!-- "7 of 60 members included (Current &minus; 2 to Current +4)" -->
    </div>
    <div class="arvo-drp__tile-panel"><!-- Same member tile grid as member mode --></div>
  </div>
  <div class="arvo-drp__footer">
    <span class="arvo-drp__current-ind">Current Week (CW): W22-2026</span>
    <button class="arvo-drp__footer-cancel arvo-btn">Cancel</button>
    <button class="arvo-drp__footer-save arvo-btn">Save</button>
  </div>
</div>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props--options",children:"Props / Options"}),`
`,e.jsxs(n.p,{children:[`| Prop / Option        | Type                                       | Default   | Description |
|----------------------|--------------------------------------------|-----------|-------------|
| `,e.jsx(n.code,{children:"startValue"}),"         | ",e.jsx(n.code,{children:"Date \\| string \\| null"}),"                   | ",e.jsx(n.code,{children:"null"}),"    | Range start. Accepts ISO string parsed via ",e.jsx(n.code,{children:"format"})," + ",e.jsx(n.code,{children:"locale"}),`. |
| `,e.jsx(n.code,{children:"endValue"}),"           | ",e.jsx(n.code,{children:"Date \\| string \\| null"}),"                   | ",e.jsx(n.code,{children:"null"}),`    | Range end. |
| `,e.jsx(n.code,{children:"format"}),"             | ",e.jsx(n.code,{children:"string"}),`                                   | locale    | .NET/Kendo date format. |
| `,e.jsx(n.code,{children:"locale"}),"             | ",e.jsx(n.code,{children:"string"}),`                                   | navigator | BCP-47 locale. |
| `,e.jsx(n.code,{children:"weekStart"}),"          | ",e.jsx(n.code,{children:"0\\|1\\|2\\|3\\|4\\|5\\|6"}),"                      | ",e.jsx(n.code,{children:"0"}),`       | First day of week. |
| `,e.jsx(n.code,{children:"hasWeeks"}),"          | ",e.jsx(n.code,{children:"boolean"}),"                                  | ",e.jsx(n.code,{children:"true"}),`    | Show ISO week numbers (default true for range picker). |
| `,e.jsx(n.code,{children:"minDate"})," / ",e.jsx(n.code,{children:"maxDate"}),"| ",e.jsx(n.code,{children:"Date \\| string \\| null"}),"                   | ",e.jsx(n.code,{children:"null"}),`    | Date bounds. |
| `,e.jsx(n.code,{children:"placeholder"}),"        | ",e.jsx(n.code,{children:"string"}),"                                   | ",e.jsx(n.code,{children:"null"}),`    | Placeholder when empty. |
| `,e.jsx(n.code,{children:"label"}),"              | ",e.jsx(n.code,{children:"string"}),"                                   | ",e.jsx(n.code,{children:"null"}),`    | Form label. |
| `,e.jsx(n.code,{children:"size"}),"               | ",e.jsx(n.code,{children:"'sm' \\| 'lg'"}),"                             | ",e.jsx(n.code,{children:"'lg'"}),`    | Trigger size. |
| `,e.jsx(n.code,{children:"width"}),"              | ",e.jsx(n.code,{children:"string"}),"                                   | ",e.jsx(n.code,{children:"300px"}),`   | Trigger CSS width. |
| `,e.jsx(n.code,{children:"isFullWidth"}),"        | ",e.jsx(n.code,{children:"boolean"}),"                                  | ",e.jsx(n.code,{children:"false"}),"   | Shorthand for ",e.jsx(n.code,{children:"width: 100%"}),`. |
| `,e.jsx(n.code,{children:"isDisabled"}),"         | ",e.jsx(n.code,{children:"boolean"}),"                                  | ",e.jsx(n.code,{children:"false"}),`   | Disabled state. |
| `,e.jsx(n.code,{children:"isReadOnly"}),"         | ",e.jsx(n.code,{children:"boolean"}),"                                  | ",e.jsx(n.code,{children:"false"}),`   | Read-only state. |
| `,e.jsx(n.code,{children:"isRequired"}),"         | ",e.jsx(n.code,{children:"boolean"}),"                                  | ",e.jsx(n.code,{children:"false"}),`   | Required field. |
| `,e.jsx(n.code,{children:"isInvalid"}),"          | ",e.jsx(n.code,{children:"boolean"}),"                                  | ",e.jsx(n.code,{children:"false"}),`   | Validation invalid. |
| `,e.jsx(n.code,{children:"errorMsg"}),"           | ",e.jsx(n.code,{children:"string"}),"                                   | ",e.jsx(n.code,{children:"null"}),`    | Error message. |
| `,e.jsx(n.code,{children:"errorDisplay"}),"       | ",e.jsx(n.code,{children:"'inline' \\| 'tooltip' \\| 'none'"}),"          | ",e.jsx(n.code,{children:"'inline'"}),`| Error feedback presentation. |
| `,e.jsx(n.code,{children:"isLoading"}),"          | ",e.jsx(n.code,{children:"boolean"}),"                                  | ",e.jsx(n.code,{children:"false"}),`   | Loading state (Pattern C). |
| `,e.jsx(n.code,{children:"isAutoClose"}),"          | ",e.jsx(n.code,{children:"boolean"}),"                                  | ",e.jsx(n.code,{children:"true"}),`    | Auto-close on commit (absolute / member only). |
| `,e.jsx(n.code,{children:"frequency"}),"          | ",e.jsx(n.code,{children:"'day'\\|'week'\\|'month'\\|'quarter'\\|'year'"}),"| ",e.jsx(n.code,{children:"null"}),`    | Member-data cadence. |
| `,e.jsx(n.code,{children:"memberData"}),"         | ",e.jsx(n.code,{children:"MemberItem[]"}),"                             | ",e.jsx(n.code,{children:"null"}),`    | Generic member data. |
| `,e.jsx(n.code,{children:"currentMemberIndex"})," | ",e.jsx(n.code,{children:"number \\| null"}),"                           | ",e.jsx(n.code,{children:"null"}),`    | Maps platform-specific current-bucket; required for rolling math. |
| `,e.jsx(n.code,{children:"hasModeToggle"}),"   | ",e.jsx(n.code,{children:"boolean"}),"                                  | ",e.jsx(n.code,{children:"true"}),`    | Show the absolute/member switch when member capability is active. |
| `,e.jsx(n.code,{children:"hasRolling"}),"         | ",e.jsx(n.code,{children:"boolean"}),"                                  | ",e.jsx(n.code,{children:"false"}),`   | Enable the Rolling tab. |
| `,e.jsx(n.code,{children:"rollingPrefix"}),"      | ",e.jsx(n.code,{children:"string"}),"                                   | ",e.jsx(n.code,{children:"null"}),"    | Prefix shown on the rolling stepper (e.g. ",e.jsx(n.code,{children:"CW"}),`). |
| `,e.jsx(n.code,{children:"rollingValue"}),"       | ",e.jsx(n.code,{children:"RollingRange \\| null"}),"                     | ",e.jsx(n.code,{children:"null"}),`    | Current rolling offsets. |
| `,e.jsx(n.code,{children:"anchor"}),"             | ",e.jsx(n.code,{children:"false \\| true \\| HTMLElement \\| RefObject \\| string"})," | ",e.jsx(n.code,{children:"false"}),` | Overlay-only mode. |
| `,e.jsx(n.code,{children:"placement"}),"          | ",e.jsx(n.code,{children:"'top-start'\\|'top-end'\\|'bottom-start'\\|'bottom-end'\\|'auto'"})," | ",e.jsx(n.code,{children:"'bottom-start'"}),` | Popover placement. |
| `,e.jsx(n.code,{children:"zIndex"}),"             | ",e.jsx(n.code,{children:"number"}),"                                   | ",e.jsx(n.code,{children:"null"}),`    | Popover z-index override. |
| `,e.jsx(n.code,{children:"calendarProps"}),"      | ",e.jsx(n.code,{children:"Pick<ArvoCalendarOptions, 'hasOutsideDays' \\| 'isKeyboardEnabled' \\| 'size'>"})," | ",e.jsx(n.code,{children:"null"})," | Scoped escape-hatch bag for inner ",e.jsx(n.code,{children:"ArvoCalendar"})," config. Applies to BOTH absolute-mode calendars (member tile panel unaffected). Flat props always win on overlap. See ",e.jsx(n.a,{href:"/docs/usage/composition#scoped-configuration-props-for-composed-internals",children:"Composition"}),`. |
| `,e.jsx(n.code,{children:"popoverProps"}),"       | ",e.jsx(n.code,{children:"{ width?: string; offset?: number }"}),"     | ",e.jsx(n.code,{children:"null"}),"    | Scoped escape-hatch bag for popover surface options (custom portal, not ",e.jsx(n.code,{children:"ArvoPopover"}),"). Flat overlay options (",e.jsx(n.code,{children:"placement"}),", ",e.jsx(n.code,{children:"zIndex"}),") win on overlap. |"]}),`
`,e.jsx(n.h2,{id:"js-only-methods",children:"JS-only methods"}),`
`,e.jsxs(n.p,{children:[`| Method            | Signature                                                           | Description |
|-------------------|----------------------------------------------------------------------|-------------|
| `,e.jsx(n.code,{children:"open"}),"            | ",e.jsx(n.code,{children:"() => void"}),"                                                         | Open the popover (cancellable via ",e.jsx(n.code,{children:"onOpen"})," returning ",e.jsx(n.code,{children:"false"})," or ",e.jsx(n.code,{children:"drp:open.preventDefault()"}),`). |
| `,e.jsx(n.code,{children:"close"}),"           | ",e.jsx(n.code,{children:"() => void"}),"                                                         | Close the popover (cancellable via ",e.jsx(n.code,{children:"onClose"}),`). |
| `,e.jsx(n.code,{children:"toggle"}),"          | ",e.jsx(n.code,{children:"(force?: boolean) => void"}),`                                          | Toggle / force open or closed. |
| `,e.jsx(n.code,{children:"range"}),"           | ",e.jsx(n.code,{children:"() => { start, end } / (v) => void"}),`                                 | Get or set the committed absolute range. |
| `,e.jsx(n.code,{children:"memberRange"}),"     | ",e.jsx(n.code,{children:"() => { start, end } / (v) => void"}),`                                 | Get or set the equivalent member range. |
| `,e.jsx(n.code,{children:"rolling"}),"         | ",e.jsx(n.code,{children:"() => RollingRange \\| null / (v: RollingRange) => void"}),`             | Get or set the committed rolling expression. |
| `,e.jsx(n.code,{children:"mode"}),"            | ",e.jsx(n.code,{children:"() => mode / (m) => void"}),`                                           | Get or set the active mode. |
| `,e.jsx(n.code,{children:"memberToggle"}),"    | ",e.jsx(n.code,{children:"() => boolean / (v: boolean) => void"}),`                               | Get or set the absolute/member switch. |
| `,e.jsx(n.code,{children:"clear"}),"           | ",e.jsx(n.code,{children:"() => void"}),`                                                         | Clear the range and detach any rolling commit. |
| `,e.jsx(n.code,{children:"disabled"}),"        | ",e.jsx(n.code,{children:"() => boolean / (state: boolean) => void"}),`                           | Get or set disabled state. |
| `,e.jsx(n.code,{children:"setError"}),"        | ",e.jsx(n.code,{children:"(msg: string \\| false) => void"}),`                                     | Imperative error override. |
| `,e.jsx(n.code,{children:"setLoading"}),"      | ",e.jsx(n.code,{children:"(loading: boolean) => void"}),`                                         | Imperative loading override. |
| `,e.jsx(n.code,{children:"focus"}),"           | ",e.jsx(n.code,{children:"() => void"}),`                                                         | Focus the trigger. |
| `,e.jsx(n.code,{children:"destroy"}),"         | ",e.jsx(n.code,{children:"() => void"}),"                                                         | Tear down the instance. |"]}),`
`,e.jsx(n.h2,{id:"custom-events",children:"Custom events"}),`
`,e.jsxs(n.p,{children:[`| Event              | Cancelable | Detail                                                                                       |
|--------------------|------------|----------------------------------------------------------------------------------------------|
| `,e.jsx(n.code,{children:"drp:change"}),"       | no         | ",e.jsx(n.code,{children:"{ start, end, formatted: { start, end }, mode, memberRange?, rollingValue? }"}),`               |
| `,e.jsx(n.code,{children:"drp:mode-change"}),"  | yes        | ",e.jsx(n.code,{children:"{ mode }"}),`                                                                                   |
| `,e.jsx(n.code,{children:"drp:open"}),"         | yes        | ",e.jsx(n.code,{children:"{}"}),`                                                                                         |
| `,e.jsx(n.code,{children:"drp:close"}),"        | yes        | ",e.jsx(n.code,{children:"{}"}),`                                                                                         |
| `,e.jsx(n.code,{children:"drp:cancel"}),"       | no         | ",e.jsx(n.code,{children:"{}"}),` (rolling Cancel)                                                                        |
| `,e.jsx(n.code,{children:"drp:save"}),"         | no         | ",e.jsx(n.code,{children:"{}"})," (rolling Save -- the value is already committed via ",e.jsx(n.code,{children:"drp:change"}),")                       |"]}),`
`,e.jsx(n.h2,{id:"keyboard-interactions",children:"Keyboard interactions"}),`
`,e.jsxs(n.p,{children:[`| Key                           | Where                | Action                                                 |
|-------------------------------|----------------------|--------------------------------------------------------|
| `,e.jsx(n.code,{children:"Alt+ArrowDown"}),`               | Trigger              | Open the popover.                                      |
| `,e.jsx(n.code,{children:"Alt+ArrowUp"}),`                 | Trigger              | Close the popover.                                     |
| `,e.jsx(n.code,{children:"Escape"}),`                      | Trigger / Popover    | Close. Rolling: act as Cancel.                         |
| `,e.jsx(n.code,{children:"Tab"})," / ",e.jsx(n.code,{children:"Shift+Tab"}),`           | Popover              | Trigger -> header -> body -> footer (rolling only).    |
| `,e.jsx(n.code,{children:"Enter"})," / ",e.jsx(n.code,{children:"Space"}),`             | Cell / Tile          | Select.                                                |
| `,e.jsx(n.code,{children:"Arrow*"}),`                      | Cell / Tile          | Move within the grid.                                  |
| `,e.jsx(n.code,{children:"Shift+Arrow*"}),`                | Cell / Tile          | Extend the range (absolute / member only).             |
| `,e.jsx(n.code,{children:"ArrowUp"})," / ",e.jsx(n.code,{children:"ArrowDown"}),"       | Rolling stepper      | Increment / decrement the focused offset.              |"]}),`
`,e.jsx(n.h2,{id:"notes",children:"Notes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Rolling commits BOTH ",e.jsx(n.code,{children:"rollingValue"})," and the derived absolute ",e.jsx(n.code,{children:"start/end"}),`. If
the user later edits dates in absolute or member mode, the rolling
expression detaches (the next `,e.jsx(n.code,{children:"drp:change"})," carries ",e.jsx(n.code,{children:"rollingValue: undefined"}),")."]}),`
`,e.jsxs(n.li,{children:[`The optional indicator slot pinned to the trigger's top-right corner is
fully consumer-controlled. Pass an `,e.jsx(n.code,{children:"indicator"}),` descriptor (or call
`,e.jsx(n.code,{children:"ref.indicator({ variant: 'unsaved' })"}),") to show; pass ",e.jsx(n.code,{children:"null"}),` to hide. The
picker NEVER toggles the slot on its own -- the consumer decides when an
unsaved / new / unread state should appear based on its own apply state.
This shape is intentionally generic: future Arvo components will adopt the
same `,e.jsx(n.code,{children:"indicator: ArvoIndicatorDescriptor | null"})," prop / ",e.jsx(n.code,{children:"indicator()"}),` ref
contract so consumers learn one pattern.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"currentMemberIndex"})," and ",e.jsx(n.code,{children:"rollingPrefix"}),` are GENERIC props (ADR-5); the
picker never reads platform-specific properties such as
`,e.jsx(n.code,{children:"IsCurrentBucketIndex"})," from raw member data."]}),`
`]})]})}function K(o={}){const{wrapper:n}={...a(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(l,{...o})}):l(o)}export{K as default};
