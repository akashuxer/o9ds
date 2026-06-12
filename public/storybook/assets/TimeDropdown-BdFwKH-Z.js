import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as t,M as o,C as s,a as c}from"./blocks-DLeo0hIy.js";import{T as l,P as i,M as h,a as j,C as x,E as a,K as m}from"./TimeDropdown.stories-DDErM4ww.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./TimeDropdown-DX9WbY98.js";import"./ButtonGroup-Bky2dG1G.js";import"./Button-B8O_kk1m.js";import"./useControllableState-BcENo7ec.js";import"./loading-flag-DkqmYwgU.js";import"./IconButton-BgwDUYzG.js";import"./useTooltip-DZu1XpnP.js";import"./index28-DgjIRxoq.js";function r(d){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...t(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l}),`
`,e.jsx(n.h1,{id:"timedropdown-internal",children:"TimeDropdown (internal)"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Internal composition primitive -- not for direct application use."}),`
`,e.jsx(n.code,{children:"ArvoTimeDropdown"}),` is the rendering engine consumed by the public time
pickers. Application code MUST NOT initialize `,e.jsx(n.code,{children:"ArvoTimeDropdown"}),` directly; the
design system reserves the right to change its API at any time. These stories
exist for design-system contributors and visual regression only.`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Use one of these public components instead:"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Use"}),e.jsx("th",{children:"When"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoTimePicker"})}),e.jsx("td",{children:"Time-only selection"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoDateTimePicker"})}),e.jsx("td",{children:"Combined date + time selection"})]})]})]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(s,{of:i,sourceState:"shown"}),`
`,e.jsx(c,{of:i}),`
`,e.jsx(n.h2,{id:"format-modes",children:"Format modes"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h2,{id:"controlled-selection",children:"Controlled selection"}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h2,{id:"embedded-in-a-host-panel",children:"Embedded in a host panel"}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.h2,{id:"keyboard-walkthrough",children:"Keyboard walkthrough"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Internal primitive -- calls to ",e.jsx(n.code,{children:"ArvoTimeDropdown.initialize(...)"}),` must not
appear in product code. The snippet below is for design-system contributors.`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoTimeDropdown } from '@arvo/js/components/TimeDropdown';

const el = document.querySelector('#my-time-dropdown');
const tdrop = ArvoTimeDropdown.initialize(el, {
  format: 'HH:mm',
  locale: 'en-US',
  interval: 15,
  minTime: { hours: 9, minutes: 0 },
  maxTime: { hours: 17, minutes: 0 },
  onChange: (time) => console.log('selected', time),
  onDismiss: () => console.log('dismissed'),
});

const current = tdrop.value(); // TimeObject | null
tdrop.value({ hours: 10, minutes: 30 }); // set (does NOT emit tdrop:change)
const label = tdrop.formattedValue(); // e.g. "10:30"
tdrop.disabled(true);
tdrop.destroy();

el.addEventListener('tdrop:change', (e) => console.log('time changed:', e.detail.value));
el.addEventListener('tdrop:dismiss', () => console.log('escape pressed'));
`})}),`
`,e.jsx(n.h3,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Prop / Option"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Default"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"value"})}),e.jsx("td",{children:e.jsx("code",{children:"TimeObject | null"})}),e.jsx("td",{children:e.jsx("code",{children:"null"})}),e.jsxs("td",{children:["Selected time. ",e.jsx("code",{children:"TimeObject = { hours, minutes, seconds?, ... }"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"format"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"--"}),e.jsxs("td",{children:[e.jsx("strong",{children:"Required."})," .NET / Kendo format string; sets 12 vs 24-hour mode."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"locale"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:"BCP-47 locale; fallback mode determinator + AM/PM labels."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"interval"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:e.jsx("code",{children:"15"})}),e.jsx("td",{children:"Minutes between generated options."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"minTime"})," / ",e.jsx("code",{children:"maxTime"})]}),e.jsx("td",{children:e.jsx("code",{children:"TimeObject | null"})}),e.jsx("td",{children:e.jsx("code",{children:"null"})}),e.jsx("td",{children:"Inclusive bounds. Out-of-range options are hidden (not disabled)."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isDisabled"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"Disables the whole component."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"onChange"})," / ",e.jsx("code",{children:"onDismiss"})]}),e.jsx("td",{children:e.jsx("code",{children:"(time?) => void"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:"Selection / escape callbacks."})]})]})]}),`
`,e.jsx(n.h3,{id:"js-methods",children:"JS methods"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoTimeDropdown.initialize(element, options)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLElement"}),", ",e.jsx("code",{children:"ArvoTimeDropdownOptions"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoTimeDropdown"})}),e.jsx("td",{children:"Factory -- initializes on a DOM element."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"value(v?)"})}),e.jsx("td",{children:e.jsx("code",{children:"TimeObject?"})}),e.jsx("td",{children:e.jsx("code",{children:"TimeObject | null | void"})}),e.jsxs("td",{children:["Get or set the selected time. Setting does NOT emit ",e.jsx("code",{children:"tdrop:change"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"formattedValue()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"Display string for the current value."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean?"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set disabled state."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Remove listeners and clean up (idempotent)."})]})]})]}),`
`,e.jsx(n.h3,{id:"js-custom-events",children:"JS custom events"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Payload"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"tdrop:change"})}),e.jsx("td",{children:e.jsx("code",{children:"{ value: TimeObject }"})}),e.jsx("td",{children:"A time option was selected."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"tdrop:dismiss"})}),e.jsx("td",{children:e.jsx("code",{children:"{}"})}),e.jsx("td",{children:"Escape was pressed; host overlay closes."})]})]})]})]})}function C(d={}){const{wrapper:n}={...t(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(r,{...d})}):r(d)}export{C as default};
