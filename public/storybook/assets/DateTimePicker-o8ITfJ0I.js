import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as i,M as o,C as d,a as l}from"./blocks-DLeo0hIy.js";import{D as c,P as s,A as a,a as h,F as x,L as j,M as p,S as m,b as v,c as u,B as g,d as f,C as b,e as y}from"./DateTimePicker.stories-CdrAXnZG.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./useOverlay-Bo9f1g6f.js";import"./OverlayContext-C5RootgB.js";import"./Calendar-kkFVIcSH.js";import"./useTooltip-DZu1XpnP.js";import"./index28-DgjIRxoq.js";import"./useArvoLocale-z-KisV4q.js";import"./useFocusTrap-BePVbEUc.js";import"./loading-flag-DkqmYwgU.js";import"./IconButton-BgwDUYzG.js";import"./useControllableState-BcENo7ec.js";import"./FormLabel-Dn-HbpfA.js";import"./MessageAlert-DBQwY950.js";import"./Button-B8O_kk1m.js";import"./TimeDropdown-DX9WbY98.js";import"./ButtonGroup-Bky2dG1G.js";import"./CalendarNav-C-WBh-a1.js";function t(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
`,e.jsx(n.h1,{id:"datetimepicker",children:"DateTimePicker"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Combines a calendar and a time dropdown in one overlay behind a single
form-input trigger. Supports locale-aware combined formatting, full-datetime
`,e.jsx(n.code,{children:"min"}),"/",e.jsx(n.code,{children:"max"})," bounds, time-only ",e.jsx(n.code,{children:"startTime"}),"/",e.jsx(n.code,{children:"endTime"}),` (business hours) bounds,
segmented editing, anchor (overlay-only) mode, and a loading state that swaps
the trigger icon for a spinner.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Capture a single date together with a time of day (appointments, event
starts, deadlines).`}),`
`,e.jsxs(n.li,{children:["Bound the full datetime with ",e.jsx(n.code,{children:"min"})," / ",e.jsx(n.code,{children:"max"}),`, or constrain the time of day
across every date with `,e.jsx(n.code,{children:"startTime"})," / ",e.jsx(n.code,{children:"endTime"}),"; set ",e.jsx(n.code,{children:"interval"}),` for the time
dropdown granularity.`]}),`
`,e.jsxs(n.li,{children:["For date only use ",e.jsx(n.code,{children:"DatePicker"}),"; for time only use ",e.jsx(n.code,{children:"TimePicker"}),`; for a
start/end pair use `,e.jsx(n.code,{children:"DateRangePicker"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(d,{of:s,sourceState:"shown"}),`
`,e.jsx(l,{of:s}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.p,{children:["Two trigger sizes are available: ",e.jsx(n.code,{children:"sm"})," (24px field) and ",e.jsx(n.code,{children:"lg"}),` (32px field, the
default).`]}),`
`,e.jsx(d,{of:a}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(n.p,{children:`Disabled removes the field from interaction; read-only shows a value but
prevents editing; invalid surfaces an error message; loading swaps the trigger
for a spinner and blocks the popover.`}),`
`,e.jsx(d,{of:h}),`
`,e.jsx(n.h2,{id:"formatting--locale",children:"Formatting & locale"}),`
`,e.jsxs(n.p,{children:["Drive the combined display with a ",e.jsx(n.code,{children:".NET"})," / Kendo ",e.jsx(n.code,{children:"format"}),", or let ",e.jsx(n.code,{children:"locale"}),`
resolve the default.`]}),`
`,e.jsx(d,{of:x}),`
`,e.jsx(d,{of:j}),`
`,e.jsx(n.h2,{id:"constraints",children:"Constraints"}),`
`,e.jsxs(n.p,{children:["Bound the whole datetime with ",e.jsx(n.code,{children:"min"})," / ",e.jsx(n.code,{children:"max"}),`, or constrain the time of day on
every date with `,e.jsx(n.code,{children:"startTime"})," / ",e.jsx(n.code,{children:"endTime"}),"."]}),`
`,e.jsx(d,{of:p}),`
`,e.jsx(d,{of:m}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"isAutoClose"})," defaults to ",e.jsx(n.code,{children:"false"}),` here (both date and time are usually chosen
before committing); set it to `,e.jsx(n.code,{children:"true"}),` to close after both are touched. Turn off
`,e.jsx(n.code,{children:"isSegmented"})," for free-text entry."]}),`
`,e.jsx(d,{of:v}),`
`,e.jsx(d,{of:u}),`
`,e.jsx(n.h2,{id:"recipes",children:"Recipes"}),`
`,e.jsx(d,{of:g}),`
`,e.jsx(d,{of:f}),`
`,e.jsx(d,{of:b}),`
`,e.jsx(d,{of:y}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ArvoDateTimePicker"}),` is a combined date and time picker with a form-input-styled trigger field
and a composed overlay holding ArvoCalendar (344px) plus ArvoTimeDropdown (144px) side by side.
It supports locale-aware combined formatting, full-datetime min/max constraints (time enforced
only on boundary date), time-only startTime/endTime constraints (business hours across all dates),
isSegmented input editing, anchor mode (overlay-only), and Loading Pattern C where the trigger icon
swaps for a spinner and the popover cannot open.`]}),`
`,e.jsx(n.h2,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoDateTimePicker } from '@arvo/js/components/DateTimePicker';

const el = document.querySelector('#dtp-1');
const dtp = ArvoDateTimePicker.initialize(el, {
  label: 'Pick a date and time',
  format: 'MM/dd/yyyy hh:mm a',
  locale: 'en-US',
  interval: 15,
  isSegmented: true,
  isAutoClose: false,
  startTime: '08:00',
  endTime: '17:00',
  onChange: ({ value, formattedValue }) => {
    console.log('changed', formattedValue, value);
  },
  onOpen: () => console.log('opened'),
  onClose: () => console.log('closed'),
});

// Imperative API
dtp.open();
dtp.close();
dtp.toggle();

const current = dtp.value();          // Date | null
dtp.value(new Date(2026, 5, 1, 14, 30));
dtp.value('2026-06-01 14:30');        // parsed via format + locale

const fmt = dtp.formattedValue();     // e.g. "06/01/2026 02:30 PM"

dtp.clear();
dtp.disabled(true);
dtp.disabled(false);
dtp.setError('Please select a date and time');
dtp.setError(false);                  // clear error
dtp.setLoading(true);
dtp.focus();
dtp.destroy();

// Custom events
el.addEventListener('dtp:change', (e) => {
  console.log('datetime changed:', e.detail.formattedValue);
});
el.addEventListener('dtp:open', (e) => {
  // e.preventDefault() cancels the open
});
el.addEventListener('dtp:close', (e) => {
  // e.preventDefault() cancels the close
});
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Input mode (default) -->
<div class="arvo-dtp arvo-dtp--lg" id="dtp-1">
  <label class="arvo-dtp__lbl" for="dtp-1-input">Pick a date and time</label>
  <div class="arvo-dtp__field">
    <input
      class="arvo-dtp__input"
      id="dtp-1-input"
      type="text"
      role="combobox"
      aria-haspopup="dialog"
      aria-expanded="false"
      aria-controls="dtp-1-popover"
      autocomplete="off"
    />
    <div class="arvo-dtp__actions">
      <!-- clear button (visible when has-value, not disabled/readonly/loading) -->
      <button class="arvo-dtp__clear-btn arvo-icon-btn" tabindex="-1" aria-label="Clear">
        <span class="arvo-btn__ico o9con o9con-close" aria-hidden="true"></span>
      </button>
      <!-- error tooltip icon (visible when has-error + errorDisplay="tooltip") -->
      <div class="arvo-dtp__err-ico arvo-msg-alert arvo-msg-alert--error arvo-msg-alert--inline"></div>
      <!-- calendar trigger button (hidden when loading -- spinner via CSS) -->
      <button
        class="arvo-dtp__trigger-btn arvo-icon-btn"
        tabindex="-1"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="dtp-1-popover"
        aria-label="Select date and time"
      >
        <span class="arvo-btn__ico o9con o9con-calendar" aria-hidden="true"></span>
      </button>
    </div>
    <div class="arvo-dtp__border"></div>
  </div>
  <!-- inline error message (visible when has-error + errorDisplay="inline") -->
  <div class="arvo-dtp__err-msg arvo-msg-alert arvo-msg-alert--error" role="alert" id="dtp-1-err"></div>
</div>

<!-- Popover (portaled to document.body, position: fixed) -->
<div class="arvo-dtp arvo-dtp--lg open" style="display: contents">
  <div
    class="arvo-dtp__popover open"
    id="dtp-1-popover"
    role="dialog"
    aria-label="Choose a date and time"
    aria-modal="false"
    style="position: fixed; top: 0; left: 0; transform: translate(Xpx, Ypx)"
  >
    <div class="arvo-dtp__cal">
      <div class="arvo-dtp__header"><!-- CalendarNav (single variant) --></div>
      <div class="arvo-dtp__cal-grid"><!-- ArvoCalendar --></div>
    </div>
    <div class="arvo-dtp__time"><!-- ArvoTimeDropdown (144px) --></div>
  </div>
</div>

<!-- Anchor mode (arvo-dtp--anchor-mode) -->
<div class="arvo-dtp arvo-dtp--lg arvo-dtp--anchor-mode" id="dtp-2"></div>
<!-- field / label / border are suppressed; popover portal only -->
`})}),`
`,e.jsx(n.h3,{id:"bem-reference",children:"BEM reference"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Selector"}),e.jsx("th",{children:"Role"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dtp"})}),e.jsx("td",{children:"Block root element"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dtp__lbl"})}),e.jsx("td",{children:"Form label (ArvoFormLabel)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dtp__field"})}),e.jsx("td",{children:"Trigger field container (position: relative)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dtp__input"})}),e.jsx("td",{children:'Text input (role="combobox")'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dtp__actions"})}),e.jsx("td",{children:"Absolutely-positioned right-side action buttons overlay"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dtp__clear-btn"})}),e.jsx("td",{children:"Clear value button (ArvoIconButton icon=close)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dtp__trigger-btn"})}),e.jsx("td",{children:"Calendar icon button (ArvoIconButton icon=calendar)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dtp__err-ico"})}),e.jsx("td",{children:"Inline error icon (ArvoMessageAlert isInline, errorDisplay=tooltip)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dtp__err-msg"})}),e.jsx("td",{children:"Inline error message below field (ArvoMessageAlert, errorDisplay=inline)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dtp__border"})}),e.jsx("td",{children:"Animated bottom border accent"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dtp__popover"})}),e.jsx("td",{children:"Floating panel (portaled, role=dialog) -- horizontal flex container with arvo-color-s-base background and 2px gap that surfaces as the divider"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dtp__cal"})}),e.jsx("td",{children:"Calendar column (layer-03 surface, p-12) holding the header above the calendar grid"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dtp__header"})}),e.jsx("td",{children:"CalendarNav header rendered inside the calendar column"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dtp__cal-grid"})}),e.jsx("td",{children:"ArvoCalendar host inside the calendar column"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dtp__time"})}),e.jsx("td",{children:"Time column (layer-03 surface, pt-8, 144px) hosting ArvoTimeDropdown -- AM/PM toggle stays static while the option list flex-grows to fill the column height"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dtp--sm"})}),e.jsx("td",{children:"Size modifier: 24px input field height (46px label+field total), 12px font"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dtp--lg"})}),e.jsx("td",{children:"Size modifier: 32px input field height (54px label+field total), 14px font (default)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dtp--full-width"})}),e.jsx("td",{children:"Layout: trigger stretches to 100%"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dtp--show-weeks"})}),e.jsx("td",{children:"Passed to Calendar: shows ISO week numbers column"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dtp--anchor-mode"})}),e.jsx("td",{children:"Overlay-only mode; field / label / error hidden"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"scoped-escape-hatch-bags-calendarprops-popoverprops",children:["Scoped escape-hatch bags (",e.jsx(n.code,{children:"calendarProps"}),", ",e.jsx(n.code,{children:"popoverProps"}),")"]}),`
`,e.jsx(n.p,{children:`Long-tail config the parent does not curate as flat props is reachable
through scoped escape-hatch bags (React + JS, identical shape):`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"calendarProps?: Pick<ArvoCalendarProps, 'hasOutsideDays' | 'isKeyboardEnabled' | 'size'>"}),`
-- spread first into the inner `,e.jsx(n.code,{children:"ArvoCalendar"}),"; flat props win on overlap."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"popoverProps?: { width?: string; offset?: number }"}),` -- DateTimePicker
uses a custom portal (not `,e.jsx(n.code,{children:"ArvoPopover"}),`). Flat overlay options
(`,e.jsx(n.code,{children:"placement"}),", ",e.jsx(n.code,{children:"zIndex"}),") win on overlap."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Note: a ",e.jsx(n.code,{children:"timeProps"}),` bag is intentionally omitted in this pass -- the inner
`,e.jsx(n.code,{children:"ArvoTimeDropdown"}),` has no parity-safe long-tail option today. Add when
a real escape-hatch knob emerges. See the
`,e.jsx(n.a,{href:"/docs/usage/composition#scoped-configuration-props-for-composed-internals",children:"Composition page"}),`
for the design-system-wide rule.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,e.jsxs(n.p,{children:["These callbacks work in both frameworks. In React they are props; in JS they are options passed to ",e.jsx(n.code,{children:"initialize()"}),"."]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(payload: { value: Date | null; formattedValue: string }) => void"})}),e.jsx("td",{children:"Called when the committed datetime value changes (day click + time click, Enter, or close-commit)."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onOpen"})}),e.jsx("td",{children:e.jsx("code",{children:"() => boolean | void"})}),e.jsxs("td",{children:["Called before the popover opens. Return ",e.jsx("code",{children:"false"})," to cancel (also cancelable via ",e.jsx("code",{children:"dtp:open"})," custom event)."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onClose"})}),e.jsx("td",{children:e.jsx("code",{children:"() => boolean | void"})}),e.jsxs("td",{children:["Called before the popover closes. Return ",e.jsx("code",{children:"false"})," to cancel (also cancelable via ",e.jsx("code",{children:"dtp:close"})," custom event)."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onBlur"})}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"Called when the trigger input loses focus."})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"js-only",children:"JS only"}),`
`,e.jsx(n.h3,{id:"methods",children:"Methods"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["In React, use props and the forwarded ",e.jsx(n.code,{children:"ref"})," (",e.jsx(n.code,{children:"ArvoDateTimePickerRef"}),") instead of imperative methods where possible."]}),`
`]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoDateTimePicker.initialize(element, options)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLElement"}),", ",e.jsx("code",{children:"ArvoDateTimePickerOptions"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoDateTimePicker"})}),e.jsx("td",{children:"Factory -- initializes the picker on a DOM element and returns the instance."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"open()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Programmatically open the popover. No-op when disabled, read-only, or loading."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"close()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Programmatically close the popover. Returns focus to trigger on close."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"toggle(force?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsxs("td",{children:["Toggle open/closed. Pass ",e.jsx("code",{children:"true"})," to force open, ",e.jsx("code",{children:"false"})," to force close."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"value()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"Date | null"})}),e.jsx("td",{children:"Get the currently committed datetime value."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"value(v)"})}),e.jsx("td",{children:e.jsx("code",{children:"Date | string | null"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Set the datetime programmatically. String is parsed via the active format and locale."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"formattedValue()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsxs("td",{children:["Returns the display string for the current value. Returns ",e.jsx("code",{children:'""'})," when value is null."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"clear()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Clear the committed value and reset the input display."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"Get the current disabled state."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled(state)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Enable or disable the component. Closes the popover if currently open when disabling."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setError(message)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | false"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsxs("td",{children:["Set (",e.jsx("code",{children:"string"}),") or clear (",e.jsx("code",{children:"false"}),") an imperative error message override."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLoading(loading)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Toggle loading state (Pattern C). Closes popover when enabling loading."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"focus()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Move keyboard focus to the trigger input (or anchor element in anchor mode)."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Remove event listeners, detach popover from DOM, and clean up all instances. Idempotent."})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"custom-events",children:"Custom Events"}),`
`,e.jsxs(n.p,{children:["Dispatched on the host DOM element (the element passed to ",e.jsx(n.code,{children:"initialize()"}),"). Listen with ",e.jsx(n.code,{children:"el.addEventListener()"}),"."]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Cancelable"}),e.jsx("th",{children:"Payload"}),e.jsx("th",{children:"When fired"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"dtp:change"})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:e.jsx("code",{children:"{ value: Date | null; formattedValue: string }"})}),e.jsx("td",{children:"Committed datetime value changed (date selected, time selected, Enter, or close-commit)."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"dtp:open"})}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:e.jsx("code",{children:"{}"})}),e.jsxs("td",{children:["Popover is about to open. Call ",e.jsx("code",{children:"e.preventDefault()"})," to cancel."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"dtp:close"})}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:e.jsx("code",{children:"{}"})}),e.jsxs("td",{children:["Popover is about to close. Call ",e.jsx("code",{children:"e.preventDefault()"})," to cancel."]})]})]})]})]})}function G(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{G as default};
