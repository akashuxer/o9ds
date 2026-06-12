import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as t,M as l,C as s,a as c}from"./blocks-DLeo0hIy.js";import{N as o,P as i,W as a,a as h,b as x,c as j,S as u,L as p,A as m,d as b,e as v,f,g,E as y,h as C,i as S,D as w,R as M,j as _,F as D,C as I,Q as A,M as E}from"./NumberInput.stories-CJk9Zv1H.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./NumberInput-Iv_u_Hxn.js";import"./useTooltip-DZu1XpnP.js";import"./index28-DgjIRxoq.js";import"./FormLabel-Dn-HbpfA.js";import"./IconButton-BgwDUYzG.js";import"./useControllableState-BcENo7ec.js";import"./loading-flag-DkqmYwgU.js";import"./MessageAlert-DBQwY950.js";import"./Button-B8O_kk1m.js";function d(r){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:o}),`
`,e.jsx(n.h1,{id:"numberinput",children:"NumberInput"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Numeric input with stepper buttons, configurable ",e.jsx(n.code,{children:"min"})," / ",e.jsx(n.code,{children:"max"})," / ",e.jsx(n.code,{children:"step"}),`, decimal
precision, an optional static prefix, and inline or tooltip error display.
Defaults to 300px wide; pass `,e.jsx(n.code,{children:"width"})," or ",e.jsx(n.code,{children:"isFullWidth"})," to change."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Capture a bounded numeric value such as a quantity, age, price, or percentage."}),`
`,e.jsxs(n.li,{children:["Configure ",e.jsx(n.code,{children:"min"})," / ",e.jsx(n.code,{children:"max"})," / ",e.jsx(n.code,{children:"step"})," to constrain input and drive the stepper buttons."]}),`
`,e.jsxs(n.li,{children:["Add a ",e.jsx(n.code,{children:"prefix"})," for a static unit or currency label that never becomes part of the value."]}),`
`,e.jsxs(n.li,{children:["For free-form text use ",e.jsx(n.code,{children:"Textbox"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(s,{of:i,sourceState:"shown"}),`
`,e.jsx(c,{of:i}),`
`,e.jsx(n.h2,{id:"label",children:"Label"}),`
`,e.jsxs(n.p,{children:["Add a ",e.jsx(n.code,{children:"label"})," above the field, and mark mandatory fields with ",e.jsx(n.code,{children:"isRequired"}),"."]}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h2,{id:"range--step",children:"Range & step"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"min"})," / ",e.jsx(n.code,{children:"max"})," clamp the value and toggle the stepper buttons; ",e.jsx(n.code,{children:"step"}),` sets the
increment and decimal precision.`]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.p,{children:["Two heights are available: ",e.jsx(n.code,{children:"sm"})," (24px) and ",e.jsx(n.code,{children:"lg"})," (32px, default)."]}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h2,{id:"boundaries",children:"Boundaries"}),`
`,e.jsx(n.p,{children:`The relevant stepper button is disabled once the value reaches the configured
minimum or maximum.`}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(n.h2,{id:"prefix",children:"Prefix"}),`
`,e.jsx(n.p,{children:`A static prefix renders a cosmetic unit or currency label at the leading edge.
It is purely visual and never part of the emitted numeric value.`}),`
`,e.jsx(s,{of:v}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.h2,{id:"validation",children:"Validation"}),`
`,e.jsxs(n.p,{children:["Set ",e.jsx(n.code,{children:"isInvalid"})," to show the error border. ",e.jsx(n.code,{children:"errorDisplay"}),` controls whether the
message renders inline below the field or as a tooltip on a trailing icon.`]}),`
`,e.jsx(s,{of:y}),`
`,e.jsx(s,{of:C}),`
`,e.jsx(s,{of:S}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(n.p,{children:`Disabled blocks interaction, read-only shows a dashed border, and loading
renders a skeleton overlay.`}),`
`,e.jsx(s,{of:w}),`
`,e.jsx(s,{of:M}),`
`,e.jsx(s,{of:_}),`
`,e.jsx(n.h2,{id:"layout",children:"Layout"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"isFullWidth"})," stretches the field to its container; ",e.jsx(n.code,{children:"width"})," sets an explicit CSS width."]}),`
`,e.jsx(s,{of:D}),`
`,e.jsx(s,{of:I}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(s,{of:A}),`
`,e.jsx(s,{of:E}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:["The vanilla JS version of ",e.jsx(n.code,{children:"ArvoNumberInput"}),`. Numeric input with stepper buttons,
configurable min/max/step, decimal precision, and full form integration.
Defaults to 300px wide; pass `,e.jsx(n.code,{children:"width"})," or ",e.jsx(n.code,{children:"isFullWidth"})," to change."]}),`
`,e.jsx(n.h2,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoNumberInput } from '@arvo/js/components/NumberInput';

const el = document.querySelector('#my-num');
const num = ArvoNumberInput.initialize(el, {
  label: 'Quantity',
  value: 1,
  min: 0,
  max: 99,
  step: 1,
  onChange: (e) => console.log(e.target.valueAsNumber),
});

num.value(5);
num.value();        // => current numeric value
num.disabled(true);
num.setError('Out of stock');
num.destroy();
`})}),`
`,e.jsx(n.h2,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="arvo-num arvo-num--lg">
  <label class="arvo-num__lbl">Quantity</label>
  <div class="arvo-num__field">
    <input class="arvo-num__input" type="number" value="1" min="0" max="99" step="1" />
    <div class="arvo-num__steppers">
      <button class="arvo-icon-btn arvo-btn--tertiary arvo-btn--xs arvo-num__step-up" type="button" aria-label="Increment">
        <span class="arvo-btn__ico o9con o9con-caret-up" aria-hidden="true"></span>
      </button>
      <button class="arvo-icon-btn arvo-btn--tertiary arvo-btn--xs arvo-num__step-down" type="button" aria-label="Decrement">
        <span class="arvo-btn__ico o9con o9con-caret-down" aria-hidden="true"></span>
      </button>
    </div>
  </div>
</div>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Signature"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onInput"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: Event) => void"})}),e.jsx("td",{children:"Per-keystroke"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: Event) => void"})}),e.jsx("td",{children:"Commit (blur)"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"js-only",children:"JS only"}),`
`,e.jsx(n.h3,{id:"methods",children:"Methods"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoNumberInput.initialize(element, options)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLElement"}),", ",e.jsx("code",{children:"ArvoNumberInputOptions"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoNumberInput"})}),e.jsx("td",{children:"Factory"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"value(next?)"})}),e.jsx("td",{children:e.jsx("code",{children:"number | null | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"number | null | void"})}),e.jsx("td",{children:"Get or set value"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"step(direction)"})}),e.jsx("td",{children:e.jsx("code",{children:"1 | -1"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Increment or decrement"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setError(msg)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | false"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Set or clear inline error message"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLoading(loading)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Toggle loading state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set disabled state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Remove listeners + clean up DOM"})]})]})]}),`
`,e.jsx(n.h3,{id:"custom-events",children:"Custom Events"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"num:input"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: CustomEvent<{ value: number | null }>) => void"})}),e.jsx("td",{children:"Per-keystroke"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"num:change"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: CustomEvent<{ value: number | null }>) => void"})}),e.jsx("td",{children:"Commit (blur)"})]})]})]})]})}function H(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(d,{...r})}):d(r)}export{H as default};
