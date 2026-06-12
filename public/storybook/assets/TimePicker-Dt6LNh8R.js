import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as s,M as t,C as o,a as l}from"./blocks-DLeo0hIy.js";import{T as c,P as i,A as a,a as h,b as p,F as x,M as j,C as m,R as u,c as v,d as g}from"./TimePicker.stories-BI8W4lzt.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./Button-B8O_kk1m.js";import"./useControllableState-BcENo7ec.js";import"./loading-flag-DkqmYwgU.js";import"./useOverlay-Bo9f1g6f.js";import"./OverlayContext-C5RootgB.js";import"./useArvoLocale-z-KisV4q.js";import"./useTooltip-DZu1XpnP.js";import"./index28-DgjIRxoq.js";import"./useFocusTrap-BePVbEUc.js";import"./IconButton-BgwDUYzG.js";import"./FormLabel-Dn-HbpfA.js";import"./MessageAlert-DBQwY950.js";import"./TimeDropdown-DX9WbY98.js";import"./ButtonGroup-Bky2dG1G.js";function d(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c}),`
`,e.jsx(n.h1,{id:"timepicker",children:"TimePicker"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsxs(n.p,{children:[`A time-only form field with a segmented or free-text trigger and a
time-dropdown popover. 12-hour vs 24-hour mode is always derived from `,e.jsx(n.code,{children:"format"}),`
and `,e.jsx(n.code,{children:"locale"})," (there is no ",e.jsx(n.code,{children:"use12Hour"}),` prop), so the trigger and dropdown stay
in sync across React and vanilla JS.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Capture a time of day in a form, filter, or scheduling UI."}),`
`,e.jsxs(n.li,{children:["Set ",e.jsx(n.code,{children:"interval"})," for dropdown granularity and ",e.jsx(n.code,{children:"minTime"})," / ",e.jsx(n.code,{children:"maxTime"}),` to bound the
selectable times.`]}),`
`,e.jsxs(n.li,{children:["Control 12h vs 24h presentation through ",e.jsx(n.code,{children:"format"})," + ",e.jsx(n.code,{children:"locale"}),` rather than a
boolean flag.`]}),`
`,e.jsxs(n.li,{children:["For a date use ",e.jsx(n.code,{children:"DatePicker"}),"; for date + time use ",e.jsx(n.code,{children:"DateTimePicker"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(o,{of:i,sourceState:"shown"}),`
`,e.jsx(l,{of:i}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.p,{children:["Two trigger sizes are available: ",e.jsx(n.code,{children:"sm"})," (24px field) and ",e.jsx(n.code,{children:"lg"}),` (32px field, the
default).`]}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(n.p,{children:`Disabled removes the field from interaction; read-only shows a value but
prevents editing; invalid surfaces an error message; loading swaps the trigger
for a spinner and blocks the popover.`}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.h2,{id:"12-hour--24-hour-modes",children:"12-hour & 24-hour modes"}),`
`,e.jsxs(n.p,{children:["Mode is derived from ",e.jsx(n.code,{children:"format"})," + ",e.jsx(n.code,{children:"locale"}),`. Free-text entry can opt into strict
parsing.`]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h2,{id:"intervals--constraints",children:"Intervals & constraints"}),`
`,e.jsxs(n.p,{children:["Tune the dropdown step with ",e.jsx(n.code,{children:"interval"}),`, and bound selectable times with
`,e.jsx(n.code,{children:"minTime"})," / ",e.jsx(n.code,{children:"maxTime"}),"."]}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(n.h2,{id:"controlled-value",children:"Controlled value"}),`
`,e.jsxs(n.p,{children:["Drive the value with ",e.jsx(n.code,{children:"value"})," + ",e.jsx(n.code,{children:"onChange"})," to react to the committed time."]}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.h2,{id:"recipes",children:"Recipes"}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(o,{of:v}),`
`,e.jsx(o,{of:g}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ArvoTimePicker"}),` is a time-only form field with a isSegmented or free-text trigger and a composed
`,e.jsx(n.code,{children:"ArvoTimeDropdown"})," popover. It never exposes a ",e.jsx(n.code,{children:"use12Hour"}),` prop. Instead, 12-hour vs 24-hour mode
is always derived from `,e.jsx(n.code,{children:"format"})," and ",e.jsx(n.code,{children:"locale"}),`, so the trigger and dropdown stay in sync across both
React and vanilla JS.`]}),`
`,e.jsx(n.h2,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoTimePicker } from '@arvo/js/components/TimePicker';

const el = document.querySelector('#tp-1');
const tp = ArvoTimePicker.initialize(el, {
  label: 'Appointment time',
  format: 'hh:mm tt',
  locale: 'en-US',
  interval: 15,
  isAutoClose: true,
  minTime: { hours: 9, minutes: 0, seconds: 0, milliseconds: 0 },
  maxTime: { hours: 17, minutes: 0, seconds: 0, milliseconds: 0 },
  onChange: ({ value, formattedValue }) => {
    console.log('changed', formattedValue, value);
  },
  onOpen: () => console.log('opened'),
  onClose: () => console.log('closed'),
});

tp.open();
tp.close();
tp.toggle();
tp.toggle(true);

const current = tp.value();
tp.value({ hours: 10, minutes: 30, seconds: 0, milliseconds: 0 });
tp.value('03:45 PM');

const label = tp.formattedValue();

tp.clear();
tp.disabled(true);
tp.disabled(false);
tp.setError('Please select a time.');
tp.setError(false);
tp.setLoading(true);
tp.setLoading(false);
tp.focus();
tp.destroy();

el.addEventListener('tp:change', (event) => {
  console.log('time changed:', event.detail.formattedValue);
});
el.addEventListener('tp:open', (event) => {
  // event.preventDefault() cancels the open.
});
el.addEventListener('tp:close', (event) => {
  // event.preventDefault() cancels the close.
});
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Input mode (default) -->
<div class="arvo-tp arvo-tp--default arvo-tp--lg" id="tp-1">
  <label class="arvo-tp__lbl" for="tp-1-input">Appointment time</label>
  <div class="arvo-tp__field">
    <input
      class="arvo-tp__input"
      id="tp-1-input"
      type="text"
      role="combobox"
      aria-haspopup="dialog"
      aria-expanded="false"
      aria-controls="tp-1-popover"
      autocomplete="off"
    />
    <div class="arvo-tp__actions">
      <button class="arvo-tp__clear-btn arvo-icon-btn" tabindex="-1" aria-label="Clear">
        <span class="arvo-btn__ico o9con o9con-close" aria-hidden="true"></span>
      </button>
      <button
        class="arvo-tp__trigger-btn arvo-icon-btn"
        tabindex="-1"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="tp-1-popover"
        aria-label="Select time"
      >
        <span class="arvo-btn__ico o9con o9con-clock-o" aria-hidden="true"></span>
      </button>
    </div>
    <div class="arvo-tp__border"></div>
  </div>
</div>

<!-- Popover (portaled to document.body) -->
<div class="arvo-tp arvo-tp--default arvo-tp--lg" style="display: contents">
  <div
    class="arvo-tp__popover open"
    id="tp-1-popover"
    role="dialog"
    aria-label="Choose a time"
    aria-modal="false"
    style="position: fixed; top: 0; left: 0; transform: translate(Xpx, Ypx)"
  >
    <div class="arvo-tp__body">
      <div class="arvo-tdrop"><!-- ArvoTimeDropdown --></div>
    </div>
  </div>
</div>

<!-- Anchor mode -->
<div class="arvo-tp arvo-tp--default arvo-tp--lg arvo-tp--anchor-mode" id="tp-2"></div>
<!-- field / label / border are suppressed; only the portal popover renders -->
`})}),`
`,e.jsx(n.h3,{id:"bem-reference",children:"BEM reference"}),`
`,e.jsxs(n.p,{children:[`| Selector | Role |
|----------|------|
| `,e.jsx(n.code,{children:".arvo-tp"}),` | Block root element |
| `,e.jsx(n.code,{children:".arvo-tp__lbl"})," | Form label (",e.jsx(n.code,{children:"ArvoFormLabel"}),`) |
| `,e.jsx(n.code,{children:".arvo-tp__field"}),` | Trigger field container |
| `,e.jsx(n.code,{children:".arvo-tp__input"}),` | Trigger input with isSegmented or free-text editing |
| `,e.jsx(n.code,{children:".arvo-tp__actions"}),` | Right-side overlay for clear, error, and trigger affordances |
| `,e.jsx(n.code,{children:".arvo-tp__clear-btn"})," | Clear action button (",e.jsx(n.code,{children:"ArvoIconButton"})," icon=",e.jsx(n.code,{children:"close"}),`) |
| `,e.jsx(n.code,{children:".arvo-tp__trigger-btn"})," | Clock trigger button (",e.jsx(n.code,{children:"ArvoIconButton"})," icon=",e.jsx(n.code,{children:"clock-o"}),`) |
| `,e.jsx(n.code,{children:".arvo-tp__err-ico"})," | Tooltip-style inline error icon (",e.jsx(n.code,{children:"ArvoMessageAlert"}),`) |
| `,e.jsx(n.code,{children:".arvo-tp__err-msg"}),` | Inline error message below the field |
| `,e.jsx(n.code,{children:".arvo-tp__border"}),` | Animated bottom border accent |
| `,e.jsx(n.code,{children:".arvo-tp__popover"}),` | Floating popover dialog |
| `,e.jsx(n.code,{children:".arvo-tp__body"})," | Popover body hosting ",e.jsx(n.code,{children:"ArvoTimeDropdown"}),` |
| `,e.jsx(n.code,{children:".arvo-tp--default"}),` | Default visual variant |
| `,e.jsx(n.code,{children:".arvo-tp--sm"}),` | Small size modifier |
| `,e.jsx(n.code,{children:".arvo-tp--lg"}),` | Large size modifier |
| `,e.jsx(n.code,{children:".arvo-tp--full-width"}),` | Full-width layout modifier |
| `,e.jsx(n.code,{children:".arvo-tp--anchor-mode"})," | Overlay-only anchor rendering mode |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"scoped-escape-hatch-bag-popoverprops",children:["Scoped escape-hatch bag (",e.jsx(n.code,{children:"popoverProps"}),")"]}),`
`,e.jsxs(n.p,{children:["Long-tail popover surface options are reachable through the ",e.jsx(n.code,{children:"popoverProps"}),`
escape-hatch bag (React + JS, identical shape):`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"popoverProps?: { width?: string; offset?: number }"}),` -- TimePicker uses
a custom portal (not `,e.jsx(n.code,{children:"ArvoPopover"}),"). Flat overlay options (",e.jsx(n.code,{children:"placement"}),`,
`,e.jsx(n.code,{children:"zIndex"}),") win on overlap."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Note: a ",e.jsx(n.code,{children:"timeProps"}),` bag is intentionally omitted in this pass -- the inner
`,e.jsx(n.code,{children:"ArvoTimeDropdown"}),` has no parity-safe long-tail option today. See the
`,e.jsx(n.a,{href:"/docs/usage/composition#scoped-configuration-props-for-composed-internals",children:"Composition page"}),`
for the design-system-wide rule.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,e.jsxs(n.p,{children:[`These callbacks work in both frameworks. In React they are props; in JS they are options passed to
`,e.jsx(n.code,{children:"initialize()"}),"."]}),`
`,e.jsxs(n.p,{children:[`| Callback | Type | Description |
|----------|------|-------------|
| `,e.jsx(n.code,{children:"onChange"})," | ",e.jsx(n.code,{children:"(payload: { value: TimeObject \\| null; formattedValue: string }) => void"}),` | Called when the committed time changes after dropdown selection, Enter, or blur-commit. |
| `,e.jsx(n.code,{children:"onOpen"})," | ",e.jsx(n.code,{children:"() => boolean \\| void"})," | Called before the popover opens. Return ",e.jsx(n.code,{children:"false"}),` to cancel. |
| `,e.jsx(n.code,{children:"onClose"})," | ",e.jsx(n.code,{children:"() => boolean \\| void"})," | Called before the popover closes. Return ",e.jsx(n.code,{children:"false"}),` to cancel. |
| `,e.jsx(n.code,{children:"onBlur"})," | ",e.jsx(n.code,{children:"() => void"})," | Called when the trigger input loses focus. |"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["In React, the forwarded ",e.jsx(n.code,{children:"ArvoTimePickerRef"}),` exposes the same imperative surface as the JS class,
except `,e.jsx(n.code,{children:"disabled(state)"})," is intentionally a no-op setter and should be driven via ",e.jsx(n.code,{children:"isDisabled"}),"."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `,e.jsx(n.code,{children:"value"})," | ",e.jsx(n.code,{children:"TimeObject \\| Date \\| string \\| null"})," | -- | No | Controlled value. Strings parse through the active ",e.jsx(n.code,{children:"format"}),"; ",e.jsx(n.code,{children:"Date"}),` values contribute only their time fields. |
| `,e.jsx(n.code,{children:"defaultValue"})," | ",e.jsx(n.code,{children:"TimeObject \\| Date \\| string \\| null"}),` | -- | No | Initial value for uncontrolled mode. |
| `,e.jsx(n.code,{children:"format"})," | ",e.jsx(n.code,{children:"string \\| null"})," | locale-derived | No | .NET / Kendo time format. Determines 12-hour vs 24-hour mode together with ",e.jsx(n.code,{children:"locale"}),`. |
| `,e.jsx(n.code,{children:"locale"})," | ",e.jsx(n.code,{children:"string \\| null"}),` | navigator / provider locale | No | BCP-47 locale used for parsing, formatting, and AM/PM labels. |
| `,e.jsx(n.code,{children:"interval"})," | ",e.jsx(n.code,{children:"number"})," | ",e.jsx(n.code,{children:"15"}),` | No | Minutes between generated dropdown options. |
| `,e.jsx(n.code,{children:"minTime"})," | ",e.jsx(n.code,{children:"TimeObject \\| string \\| null"}),` | -- | No | Inclusive minimum. Out-of-range dropdown options are hidden and typed commits clamp up to this bound. |
| `,e.jsx(n.code,{children:"maxTime"})," | ",e.jsx(n.code,{children:"TimeObject \\| string \\| null"}),` | -- | No | Inclusive maximum. Out-of-range dropdown options are hidden and typed commits clamp down to this bound. |
| `,e.jsx(n.code,{children:"placeholder"})," | ",e.jsx(n.code,{children:"string \\| null"}),` | -- | No | Placeholder text shown when no value is selected. |
| `,e.jsx(n.code,{children:"label"})," | ",e.jsx(n.code,{children:"string \\| null"}),` | -- | No | Form label text rendered above the trigger field. |
| `,e.jsx(n.code,{children:"variant"})," | ",e.jsx(n.code,{children:"'default'"})," | ",e.jsx(n.code,{children:"'default'"}),` | No | Visual variant. TimePicker currently uses the default form-input treatment. |
| `,e.jsx(n.code,{children:"size"})," | ",e.jsx(n.code,{children:"'sm' \\| 'lg'"})," | ",e.jsx(n.code,{children:"'lg'"})," | No | Trigger size. ",e.jsx(n.code,{children:"sm"})," is a 24px input field (46px label+field total); ",e.jsx(n.code,{children:"lg"}),` is 32px (54px total). |
| `,e.jsx(n.code,{children:"width"})," | ",e.jsx(n.code,{children:"string \\| null"})," | ",e.jsx(n.code,{children:"300px"})," | No | CSS width for the trigger field. Sets ",e.jsx(n.code,{children:"--arvo-form-input-width"}),`. |
| `,e.jsx(n.code,{children:"isFullWidth"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"})," | No | Shorthand for ",e.jsx(n.code,{children:'width="100%"'}),". Adds the ",e.jsx(n.code,{children:"arvo-tp--full-width"}),` modifier. |
| `,e.jsx(n.code,{children:"isDisabled"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | No | Disables the input and prevents the popover from opening. |
| `,e.jsx(n.code,{children:"isReadOnly"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | No | Keeps the current value visible but prevents editing, clearing, and opening. |
| `,e.jsx(n.code,{children:"isRequired"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"})," | No | Shows the required indicator and sets ",e.jsx(n.code,{children:"aria-required"}),`. |
| `,e.jsx(n.code,{children:"isInvalid"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"})," | No | Applies error state styling and sets ",e.jsx(n.code,{children:"aria-invalid"}),`. |
| `,e.jsx(n.code,{children:"errorMsg"})," | ",e.jsx(n.code,{children:"string \\| null"}),` | -- | No | Error message used when invalid or set imperatively. |
| `,e.jsx(n.code,{children:"errorDisplay"})," | ",e.jsx(n.code,{children:"'inline' \\| 'tooltip' \\| 'none'"})," | ",e.jsx(n.code,{children:"'inline'"}),` | No | Controls whether errors render below the field, as a tooltip icon, or with no visible message chrome. |
| `,e.jsx(n.code,{children:"isLoading"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | No | Loading Pattern C. Hides the trigger button, shows a spinner, and prevents opening. |
| `,e.jsx(n.code,{children:"isAutoClose"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"true"}),` | No | Closes the popover after dropdown selection by default. |
| `,e.jsx(n.code,{children:"isStrictParsing"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"})," | No | Rejects partial free-text parses when ",e.jsx(n.code,{children:"isSegmented={false}"}),`. |
| `,e.jsx(n.code,{children:"isSegmented"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"true"}),` | No | Enables isSegmented input editing for keyboard-first hour / minute / meridiem changes. |
| `,e.jsx(n.code,{children:"anchor"})," | ",e.jsx(n.code,{children:"false \\| true \\| HTMLElement \\| RefObject<HTMLElement> \\| string"})," | ",e.jsx(n.code,{children:"false"})," | No | Overlay-only mode. In React pass an ",e.jsx(n.code,{children:"HTMLElement"}),", ",e.jsx(n.code,{children:"RefObject"}),", or selector string. ",e.jsx(n.code,{children:"true"}),` is intended for the JS host-element pattern. |
| `,e.jsx(n.code,{children:"placement"})," | ",e.jsx(n.code,{children:"'top-start' \\| 'top-end' \\| 'bottom-start' \\| 'bottom-end' \\| 'auto'"})," | ",e.jsx(n.code,{children:"'bottom-start'"}),` | No | Preferred popover placement relative to the trigger field or anchor. |
| `,e.jsx(n.code,{children:"zIndex"})," | ",e.jsx(n.code,{children:"number \\| null"}),` | -- | No | Optional z-index override for the popover. |
| `,e.jsx(n.code,{children:"onChange"})," | ",e.jsx(n.code,{children:"(payload: { value: TimeObject \\| null; formattedValue: string }) => void"}),` | -- | No | Called when the committed time changes. |
| `,e.jsx(n.code,{children:"onOpen"})," | ",e.jsx(n.code,{children:"() => boolean \\| void"})," | -- | No | Called before the popover opens. Return ",e.jsx(n.code,{children:"false"}),` to cancel. |
| `,e.jsx(n.code,{children:"onClose"})," | ",e.jsx(n.code,{children:"() => boolean \\| void"})," | -- | No | Called before the popover closes. Return ",e.jsx(n.code,{children:"false"}),` to cancel. |
| `,e.jsx(n.code,{children:"onBlur"})," | ",e.jsx(n.code,{children:"() => void"}),` | -- | No | Called when the trigger input loses focus. |
| `,e.jsx(n.code,{children:"className"})," | ",e.jsx(n.code,{children:"string"}),` | -- | No | Extra classes merged onto the root element. React only. |
| `,e.jsx(n.code,{children:"id"})," | ",e.jsx(n.code,{children:"string"})," | auto | No | Optional root id used to derive related element ids. React only. |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"js-only",children:"JS only"}),`
`,e.jsx(n.h3,{id:"methods",children:"Methods"}),`
`,e.jsxs(n.p,{children:[`| Method | Parameters | Returns | Description |
|--------|------------|---------|-------------|
| `,e.jsx(n.code,{children:"ArvoTimePicker.initialize(element, options)"})," | ",e.jsx(n.code,{children:"HTMLElement"}),", ",e.jsx(n.code,{children:"ArvoTimePickerOptions"})," | ",e.jsx(n.code,{children:"ArvoTimePicker"}),` | Factory that initializes the picker on a DOM element and returns the instance. |
| `,e.jsx(n.code,{children:"open()"})," | -- | ",e.jsx(n.code,{children:"void"}),` | Open the popover. No-op when disabled, read-only, or loading. |
| `,e.jsx(n.code,{children:"close()"})," | -- | ",e.jsx(n.code,{children:"void"}),` | Close the popover and return focus to the trigger or anchor. |
| `,e.jsx(n.code,{children:"toggle(force?)"})," | ",e.jsx(n.code,{children:"boolean \\| undefined"})," | ",e.jsx(n.code,{children:"void"})," | Toggle the popover. Pass ",e.jsx(n.code,{children:"true"})," to force open or ",e.jsx(n.code,{children:"false"}),` to force close. |
| `,e.jsx(n.code,{children:"value()"})," | -- | ",e.jsx(n.code,{children:"TimeObject \\| null"}),` | Get the currently committed value. |
| `,e.jsx(n.code,{children:"value(v)"})," | ",e.jsx(n.code,{children:"TimeObject \\| Date \\| string \\| null"})," | ",e.jsx(n.code,{children:"void"}),` | Set the value programmatically. Dates contribute only their time fields; strings parse through the active format. |
| `,e.jsx(n.code,{children:"formattedValue()"})," | -- | ",e.jsx(n.code,{children:"string"})," | Return the formatted display value. Returns ",e.jsx(n.code,{children:'""'}),` when the value is null. |
| `,e.jsx(n.code,{children:"clear()"})," | -- | ",e.jsx(n.code,{children:"void"}),` | Clear the current value and reset the trigger display. |
| `,e.jsx(n.code,{children:"disabled()"})," | -- | ",e.jsx(n.code,{children:"boolean"}),` | Get the current disabled state. |
| `,e.jsx(n.code,{children:"disabled(state)"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"void"}),` | Enable or disable the component. Closes the popover if disabling while open. |
| `,e.jsx(n.code,{children:"setError(message)"})," | ",e.jsx(n.code,{children:"string \\| false"})," | ",e.jsx(n.code,{children:"void"})," | Set an imperative error override, or clear it with ",e.jsx(n.code,{children:"false"}),`. |
| `,e.jsx(n.code,{children:"setLoading(loading)"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"void"}),` | Toggle loading state. Enabling loading closes the popover immediately. |
| `,e.jsx(n.code,{children:"focus()"})," | -- | ",e.jsx(n.code,{children:"void"}),` | Move focus to the trigger input, or the anchor element in anchor mode. |
| `,e.jsx(n.code,{children:"destroy()"})," | -- | ",e.jsx(n.code,{children:"void"})," | Remove listeners, destroy the composed dropdown, and detach popover DOM. |"]}),`
`,e.jsx(n.h3,{id:"custom-events",children:"Custom Events"}),`
`,e.jsxs(n.p,{children:[`| Event | Payload | Cancelable | Description |
|-------|---------|------------|-------------|
| `,e.jsx(n.code,{children:"tp:change"})," | ",e.jsx(n.code,{children:"{ value: TimeObject \\| null; formattedValue: string }"}),` | No | Fired when the committed time changes. |
| `,e.jsx(n.code,{children:"tp:open"})," | ",e.jsx(n.code,{children:"{}"})," | Yes | Fired before the popover opens. Call ",e.jsx(n.code,{children:"event.preventDefault()"}),` to cancel. |
| `,e.jsx(n.code,{children:"tp:close"})," | ",e.jsx(n.code,{children:"{}"})," | Yes | Fired before the popover closes. Call ",e.jsx(n.code,{children:"event.preventDefault()"})," to cancel. |"]})]})}function V(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(d,{...r})}):d(r)}export{V as default};
