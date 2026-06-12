import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as t,M as l,C as s,a as o}from"./blocks-DLeo0hIy.js";import{T as c,P as r,W as a,a as h,S as x,L as j,b as u,C as p,c as m,E as b,d as v,e as f,D as g,R as y,f as C,F as E,g as S,A as w,h as T,I as F}from"./Textbox.stories-FNzNr-Ml.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./Textbox-BjaSSAvr.js";import"./index2-HSp4ZJrG.js";import"./useTooltip-DZu1XpnP.js";import"./index28-DgjIRxoq.js";import"./FormLabel-Dn-HbpfA.js";import"./IconButton-BgwDUYzG.js";import"./useControllableState-BcENo7ec.js";import"./loading-flag-DkqmYwgU.js";import"./MessageAlert-DBQwY950.js";import"./Button-B8O_kk1m.js";function i(d){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(n.h1,{id:"textbox",children:"Textbox"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Single-line text input with an animated bottom border, optional leading icon,
clearable button, character counter, and inline or tooltip error display.
Defaults to 300px wide; pass `,e.jsx(n.code,{children:"width"})," or ",e.jsx(n.code,{children:"isFullWidth"})," to change."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Capture a single line of free-form text such as a name, email, URL, or phone number."}),`
`,e.jsxs(n.li,{children:["Pair with a ",e.jsx(n.code,{children:"label"})," and use ",e.jsx(n.code,{children:"isRequired"})," / ",e.jsx(n.code,{children:"isInvalid"})," + ",e.jsx(n.code,{children:"errorMsg"})," for form validation."]}),`
`,e.jsxs(n.li,{children:["For multi-line input use ",e.jsx(n.code,{children:"Textarea"}),"; for numeric input use ",e.jsx(n.code,{children:"NumberInput"}),"."]}),`
`,e.jsxs(n.li,{children:["For a query field with a search affordance use ",e.jsx(n.code,{children:"Search"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(s,{of:r,sourceState:"shown"}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(n.h2,{id:"label",children:"Label"}),`
`,e.jsxs(n.p,{children:["Add a ",e.jsx(n.code,{children:"label"})," above the field, and mark mandatory fields with ",e.jsx(n.code,{children:"isRequired"}),"."]}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.p,{children:["Two heights are available: ",e.jsx(n.code,{children:"sm"})," (24px) and ",e.jsx(n.code,{children:"lg"})," (32px, default)."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h2,{id:"affordances",children:"Affordances"}),`
`,e.jsxs(n.p,{children:["A leading icon, a clear button (",e.jsx(n.code,{children:"isClearable"}),`), and a character counter
(`,e.jsx(n.code,{children:"hasCounter"})," + ",e.jsx(n.code,{children:"maxLength"}),") are optional extras."]}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h2,{id:"validation",children:"Validation"}),`
`,e.jsxs(n.p,{children:["Set ",e.jsx(n.code,{children:"isInvalid"})," to show the error border. ",e.jsx(n.code,{children:"errorDisplay"}),` controls whether the
message renders inline below the field or as a tooltip on a trailing icon.`]}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(s,{of:v}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(n.p,{children:`Disabled blocks interaction, read-only shows a dashed border, and loading
renders a skeleton overlay.`}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(s,{of:y}),`
`,e.jsx(s,{of:C}),`
`,e.jsx(n.h2,{id:"layout",children:"Layout"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"isFullWidth"})," stretches the field to its container; ",e.jsx(n.code,{children:"width"})," sets an explicit CSS width."]}),`
`,e.jsx(s,{of:E}),`
`,e.jsx(s,{of:S}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(s,{of:w}),`
`,e.jsx(s,{of:T}),`
`,e.jsx(s,{of:F}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:["The vanilla JS version of ",e.jsx(n.code,{children:"ArvoTextbox"}),`. Single-line text input with built-in
label, counter, `,e.jsx(n.code,{children:"isClearable"}),`, leading icon, error message, and loading
affordances. Defaults to 300px wide; pass `,e.jsx(n.code,{children:"width"})," or ",e.jsx(n.code,{children:"isFullWidth"})," to change."]}),`
`,e.jsx(n.h2,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoTextbox } from '@arvo/js/components/Textbox';

const el = document.querySelector('#my-tb');
const tb = ArvoTextbox.initialize(el, {
  label: 'Email',
  type: 'email',
  placeholder: 'jane@example.com',
  isRequired: true,
  hasCounter: false,
  onChange: (e) => console.log(e.target.value),
});

tb.value('hello');
tb.disabled(true);
tb.setError('Email is required');
tb.setError(false);
tb.focus();
tb.destroy();
`})}),`
`,e.jsx(n.h2,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="arvo-txt arvo-txt--lg">
  <label class="arvo-txt__lbl">Email <span class="arvo-txt__req">*</span></label>
  <div class="arvo-txt__field">
    <span class="arvo-txt__lead-ico o9con o9con-envelope" aria-hidden="true"></span>
    <input class="arvo-txt__input" type="email" required />
    <button class="arvo-icon-btn arvo-btn--tertiary arvo-btn--sm arvo-txt__clear" type="button" aria-label="Clear">
      <span class="arvo-btn__ico o9con o9con-times-circle" aria-hidden="true"></span>
    </button>
  </div>
</div>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Signature"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onInput"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: Event) => void"})}),e.jsx("td",{children:"Per-keystroke"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: Event) => void"})}),e.jsx("td",{children:"Commit (blur)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onFocus"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: FocusEvent) => void"})}),e.jsx("td",{children:"Focus"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onBlur"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: FocusEvent) => void"})}),e.jsx("td",{children:"Blur"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"js-only",children:"JS only"}),`
`,e.jsx(n.h3,{id:"methods",children:"Methods"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoTextbox.initialize(element, options)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLElement"}),", ",e.jsx("code",{children:"ArvoTextboxOptions"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoTextbox"})}),e.jsx("td",{children:"Factory"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"value(next?)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"string | void"})}),e.jsx("td",{children:"Get or set the input value"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLabel(text)"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Update label text"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setError(msg)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | false"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Set or clear inline error message"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLoading(loading)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Toggle loading state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set disabled state"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"focus()"})," / ",e.jsx("code",{children:"blur()"})]}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Programmatically focus/blur input"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Remove listeners + clean up DOM"})]})]})]}),`
`,e.jsx(n.h3,{id:"custom-events",children:"Custom Events"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"txt:input"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: CustomEvent<{ value: string }>) => void"})}),e.jsx("td",{children:"Per-keystroke"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"txt:change"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: CustomEvent<{ value: string }>) => void"})}),e.jsx("td",{children:"Commit (blur)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"txt:clear"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: CustomEvent) => void"})}),e.jsx("td",{children:"Clear button pressed"})]})]})]})]})}function H(d={}){const{wrapper:n}={...t(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(i,{...d})}):i(d)}export{H as default};
