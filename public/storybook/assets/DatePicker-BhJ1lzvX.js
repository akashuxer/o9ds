import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as l,M as i,C as d,a as t}from"./blocks-DLeo0hIy.js";import{D as c,P as s,A as a,a as h,S as x,W as j,F as p,b as v,L as m,M as u,C as g,R as f,c as b,d as y}from"./DatePicker.stories-CNi-5WNt.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./useOverlay-Bo9f1g6f.js";import"./OverlayContext-C5RootgB.js";import"./Calendar-kkFVIcSH.js";import"./useTooltip-DZu1XpnP.js";import"./index28-DgjIRxoq.js";import"./useArvoLocale-z-KisV4q.js";import"./useFocusTrap-BePVbEUc.js";import"./loading-flag-DkqmYwgU.js";import"./IconButton-BgwDUYzG.js";import"./useControllableState-BcENo7ec.js";import"./FormLabel-Dn-HbpfA.js";import"./MessageAlert-DBQwY950.js";import"./Button-B8O_kk1m.js";import"./CalendarNav-C-WBh-a1.js";function o(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
`,e.jsx(n.h1,{id:"datepicker",children:"DatePicker"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsx(n.p,{children:`A form-input-styled date field with a segmented or free-text trigger and a
calendar popover. Supports locale-aware formatting, min/max constraints,
ISO week numbers, anchor (overlay-only) mode, and a loading state that swaps
the trigger icon for a spinner while blocking the popover.`}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Let a user pick a single calendar date in a form, filter, or toolbar."}),`
`,e.jsxs(n.li,{children:["Set ",e.jsx(n.code,{children:"format"})," and ",e.jsx(n.code,{children:"locale"}),` to match the surrounding locale or a fixed display
format; constrain selection with `,e.jsx(n.code,{children:"minDate"})," / ",e.jsx(n.code,{children:"maxDate"}),"."]}),`
`,e.jsxs(n.li,{children:["For a start/end pair use ",e.jsx(n.code,{children:"DateRangePicker"}),`; for date + time use
`,e.jsx(n.code,{children:"DateTimePicker"}),"; for time only use ",e.jsx(n.code,{children:"TimePicker"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(d,{of:s,sourceState:"shown"}),`
`,e.jsx(t,{of:s}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.p,{children:["Two trigger sizes are available: ",e.jsx(n.code,{children:"sm"})," (24px field) and ",e.jsx(n.code,{children:"lg"}),` (32px field, the
default).`]}),`
`,e.jsx(d,{of:a}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(n.p,{children:`Disabled removes the field from interaction; read-only shows a value but
prevents editing; invalid surfaces an error message; loading swaps the trigger
for a spinner and blocks the popover.`}),`
`,e.jsx(d,{of:h}),`
`,e.jsx(n.h2,{id:"calendar-options",children:"Calendar options"}),`
`,e.jsx(n.p,{children:"Show the ISO week-number column or change the first day of the week."}),`
`,e.jsx(d,{of:x}),`
`,e.jsx(d,{of:j}),`
`,e.jsx(n.h2,{id:"formatting--locale",children:"Formatting & locale"}),`
`,e.jsxs(n.p,{children:["Drive the display string with a ",e.jsx(n.code,{children:".NET"})," / Kendo ",e.jsx(n.code,{children:"format"}),", or let ",e.jsx(n.code,{children:"locale"}),`
resolve the default.`]}),`
`,e.jsx(d,{of:p}),`
`,e.jsx(d,{of:v}),`
`,e.jsx(d,{of:m}),`
`,e.jsx(n.h2,{id:"constraints",children:"Constraints"}),`
`,e.jsxs(n.p,{children:["Bound the selectable range with ",e.jsx(n.code,{children:"minDate"})," and ",e.jsx(n.code,{children:"maxDate"}),"."]}),`
`,e.jsx(d,{of:u}),`
`,e.jsx(n.h2,{id:"controlled-value",children:"Controlled value"}),`
`,e.jsxs(n.p,{children:["Drive the value with ",e.jsx(n.code,{children:"value"})," + ",e.jsx(n.code,{children:"onChange"})," to react to the committed date."]}),`
`,e.jsx(d,{of:g}),`
`,e.jsx(n.h2,{id:"recipes",children:"Recipes"}),`
`,e.jsx(d,{of:f}),`
`,e.jsx(d,{of:b}),`
`,e.jsx(d,{of:y}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ArvoDatePicker"}),` is a form-input-styled date picker with a isSegmented or free-text trigger field
and a Calendar popover. It supports locale-aware formatting, min/max constraints, anchor mode
(overlay-only), and Loading Pattern C where the trigger icon swaps for a spinner and the popover
cannot open.`]}),`
`,e.jsx(n.h2,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoDatePicker } from '@arvo/js/components/DatePicker';

const el = document.querySelector('#dp-1');
const dp = ArvoDatePicker.initialize(el, {
  label: 'Pick a date',
  format: 'MM/dd/yyyy',
  locale: 'en-US',
  isSegmented: true,
  isAutoClose: true,
  onChange: ({ value, formattedValue }) => {
    console.log('changed', formattedValue, value);
  },
  onOpen: () => console.log('opened'),
  onClose: () => console.log('closed'),
});

// Imperative API
dp.open();
dp.close();
dp.toggle();

const current = dp.value();          // Date | null
dp.value(new Date(2026, 5, 1));      // set programmatically
dp.value('2026-06-01');              // parsed via format + locale

const fmt = dp.formattedValue();     // e.g. "06/01/2026"

dp.clear();
dp.disabled(true);
dp.disabled(false);
dp.setError('Please select a date');
dp.setError(false);                  // clear error
dp.setLoading(true);
dp.focus();
dp.destroy();

// Custom events
el.addEventListener('dp:change', (e) => {
  console.log('date changed:', e.detail.formattedValue);
});
el.addEventListener('dp:open', (e) => {
  // e.preventDefault() cancels the open
});
el.addEventListener('dp:close', (e) => {
  // e.preventDefault() cancels the close
});
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Input mode (default) -->
<div class="arvo-dp arvo-dp--lg" id="dp-1">
  <label class="arvo-dp__lbl" for="dp-1-input">Pick a date</label>
  <div class="arvo-dp__field">
    <input
      class="arvo-dp__input"
      id="dp-1-input"
      type="text"
      role="combobox"
      aria-haspopup="dialog"
      aria-expanded="false"
      aria-controls="dp-1-popover"
      autocomplete="off"
    />
    <div class="arvo-dp__actions">
      <!-- clear button (visible when has-value, not disabled/readonly/loading) -->
      <button class="arvo-dp__clear-btn arvo-icon-btn" tabindex="-1" aria-label="Clear">
        <span class="arvo-btn__ico o9con o9con-close" aria-hidden="true"></span>
      </button>
      <!-- error tooltip icon (visible when has-error + errorDisplay="tooltip") -->
      <div class="arvo-dp__err-ico arvo-msg-alert arvo-msg-alert--error arvo-msg-alert--inline"></div>
      <!-- calendar trigger button (hidden when loading -- spinner via CSS) -->
      <button
        class="arvo-dp__trigger-btn arvo-icon-btn"
        tabindex="-1"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="dp-1-popover"
        aria-label="Select date"
      >
        <span class="arvo-btn__ico o9con o9con-calendar" aria-hidden="true"></span>
      </button>
    </div>
    <div class="arvo-dp__border"></div>
  </div>
  <!-- inline error message (visible when has-error + errorDisplay="inline") -->
  <div class="arvo-dp__err-msg arvo-msg-alert arvo-msg-alert--error" role="alert" id="dp-1-err"></div>
</div>

<!-- Popover (portaled to document.body, position: fixed) -->
<div class="arvo-dp arvo-dp--lg" style="display: contents">
  <div
    class="arvo-dp__popover open"
    id="dp-1-popover"
    role="dialog"
    aria-label="Choose a date"
    aria-modal="false"
    style="position: fixed; top: 0; left: 0; transform: translate(Xpx, Ypx)"
  >
    <div class="arvo-dp__header"><!-- CalendarNav --></div>
    <div class="arvo-dp__body"><!-- ArvoCalendar --></div>
  </div>
</div>

<!-- Anchor mode (arvo-dp--anchor-mode) -->
<div class="arvo-dp arvo-dp--lg arvo-dp--anchor-mode" id="dp-2"></div>
<!-- field / label / border are suppressed; popover portal only -->
`})}),`
`,e.jsx(n.h3,{id:"bem-reference",children:"BEM reference"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Selector"}),e.jsx("th",{children:"Role"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dp"})}),e.jsx("td",{children:"Block root element"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dp__lbl"})}),e.jsx("td",{children:"Form label (ArvoFormLabel)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dp__field"})}),e.jsx("td",{children:"Trigger field container (position: relative)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dp__input"})}),e.jsx("td",{children:'Text input (role="combobox")'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dp__actions"})}),e.jsx("td",{children:"Absolutely-positioned right-side action buttons overlay"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dp__clear-btn"})}),e.jsx("td",{children:"Clear value button (ArvoIconButton icon=close)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dp__trigger-btn"})}),e.jsx("td",{children:"Calendar icon button (ArvoIconButton icon=calendar)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dp__err-ico"})}),e.jsx("td",{children:"Inline error icon (ArvoMessageAlert isInline, errorDisplay=tooltip)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dp__err-msg"})}),e.jsx("td",{children:"Inline error message below field (ArvoMessageAlert, errorDisplay=inline)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dp__border"})}),e.jsx("td",{children:"Animated bottom border accent"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dp__popover"})}),e.jsx("td",{children:"Floating calendar panel (portaled, role=dialog)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dp__header"})}),e.jsx("td",{children:"CalendarNav header inside popover"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dp__body"})}),e.jsx("td",{children:"ArvoCalendar grid inside popover"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dp--sm"})}),e.jsx("td",{children:"Size modifier: 24px input field height (46px label+field total), 12px font"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dp--lg"})}),e.jsx("td",{children:"Size modifier: 32px input field height (54px label+field total), 14px font (default)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dp--full-width"})}),e.jsx("td",{children:"Layout: trigger stretches to 100%"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dp--show-weeks"})}),e.jsx("td",{children:"Passed to Calendar: shows ISO week numbers column"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:".arvo-dp--anchor-mode"})}),e.jsx("td",{children:"Overlay-only mode; field / label / error hidden"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"scoped-escape-hatch-bags-calendarprops-popoverprops",children:["Scoped escape-hatch bags (",e.jsx(n.code,{children:"calendarProps"}),", ",e.jsx(n.code,{children:"popoverProps"}),")"]}),`
`,e.jsx(n.p,{children:`Long-tail config the parent does not curate as flat props is reachable
through scoped escape-hatch bags (React + JS, identical shape):`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"calendarProps?: Pick<ArvoCalendarProps, 'hasOutsideDays' | 'isKeyboardEnabled' | 'size'>"}),`
-- spread first into the inner `,e.jsx(n.code,{children:"ArvoCalendar"}),"; flat props win on overlap."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"popoverProps?: { width?: string; offset?: number }"}),` -- DatePicker portals
a custom overlay (not `,e.jsx(n.code,{children:"ArvoPopover"}),`), so this bag exposes parent-defined
visual knobs. Flat overlay props (`,e.jsx(n.code,{children:"placement"}),", ",e.jsx(n.code,{children:"zIndex"}),") win on overlap."]}),`
`]}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.a,{href:"/docs/usage/composition#scoped-configuration-props-for-composed-internals",children:"Composition page"}),`
for the design-system-wide rule.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,e.jsxs(n.p,{children:["These callbacks work in both frameworks. In React they are props; in JS they are options passed to ",e.jsx(n.code,{children:"initialize()"}),"."]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(payload: { value: Date | null; formattedValue: string }) => void"})}),e.jsx("td",{children:"Called when the committed date value changes (day click, Enter, or blur-commit)."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onOpen"})}),e.jsx("td",{children:e.jsx("code",{children:"() => boolean | void"})}),e.jsxs("td",{children:["Called before the popover opens. Return ",e.jsx("code",{children:"false"})," to cancel (also cancelable via ",e.jsx("code",{children:"dp:open"})," custom event)."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onClose"})}),e.jsx("td",{children:e.jsx("code",{children:"() => boolean | void"})}),e.jsxs("td",{children:["Called before the popover closes. Return ",e.jsx("code",{children:"false"})," to cancel (also cancelable via ",e.jsx("code",{children:"dp:close"})," custom event)."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onBlur"})}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"Called when the trigger input loses focus."})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"js-only",children:"JS only"}),`
`,e.jsx(n.h3,{id:"methods",children:"Methods"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["In React, use props and the forwarded ",e.jsx(n.code,{children:"ref"})," (",e.jsx(n.code,{children:"ArvoDatePickerRef"}),") instead of imperative methods where possible."]}),`
`]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoDatePicker.initialize(element, options)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLElement"}),", ",e.jsx("code",{children:"ArvoDatePickerOptions"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoDatePicker"})}),e.jsx("td",{children:"Factory -- initializes the picker on a DOM element and returns the instance."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"open()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Programmatically open the calendar popover. No-op when disabled, read-only, or loading."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"close()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Programmatically close the calendar popover. Returns focus to trigger on close."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"toggle(force?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsxs("td",{children:["Toggle open/closed. Pass ",e.jsx("code",{children:"true"})," to force open, ",e.jsx("code",{children:"false"})," to force close."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"value()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"Date | null"})}),e.jsx("td",{children:"Get the currently committed date value."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"value(v)"})}),e.jsx("td",{children:e.jsx("code",{children:"Date | string | null"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Set the date programmatically. String is parsed via the active format and locale."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"formattedValue()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsxs("td",{children:["Returns the display string for the current value. Returns ",e.jsx("code",{children:'""'})," when value is null."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"clear()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Clear the committed date value and reset the input display."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"Get the current disabled state."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled(state)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Enable or disable the component. Closing the popover if currently open when disabling."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setError(message)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | false"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsxs("td",{children:["Set (",e.jsx("code",{children:"string"}),") or clear (",e.jsx("code",{children:"false"}),") an imperative error message override."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLoading(loading)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Toggle loading state (Pattern C). Closes popover when enabling loading."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"focus()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Move keyboard focus to the trigger input (or anchor element in anchor mode)."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Remove event listeners, detach popover from DOM, and clean up all instances. Idempotent."})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"custom-events",children:"Custom Events"}),`
`,e.jsxs(n.p,{children:["Dispatched on the host DOM element (the element passed to ",e.jsx(n.code,{children:"initialize()"}),"). Listen with ",e.jsx(n.code,{children:"el.addEventListener()"}),"."]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Cancelable"}),e.jsx("th",{children:"Payload"}),e.jsx("th",{children:"When fired"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"dp:change"})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:e.jsx("code",{children:"{ value: Date | null; formattedValue: string }"})}),e.jsx("td",{children:"Committed date value changed (day selected, Enter, or blur-commit)."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"dp:open"})}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:e.jsx("code",{children:"{}"})}),e.jsxs("td",{children:["Popover is about to open. Call ",e.jsx("code",{children:"e.preventDefault()"})," to cancel."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"dp:close"})}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:e.jsx("code",{children:"{}"})}),e.jsxs("td",{children:["Popover is about to close. Call ",e.jsx("code",{children:"e.preventDefault()"})," to cancel."]})]})]})]})]})}function J(r={}){const{wrapper:n}={...l(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{J as default};
