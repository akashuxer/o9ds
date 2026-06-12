import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as d,M as o,C as s,a as t}from"./blocks-DLeo0hIy.js";import{R as c,P as i,H as a,L as h,A as x,I as j,S as p}from"./RadioGroup.stories-DxQ_o-Ow.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./Radio-0NcOE_jm.js";import"./useControllableState-BcENo7ec.js";import"./FormLabel-Dn-HbpfA.js";import"./MessageAlert-DBQwY950.js";import"./Button-B8O_kk1m.js";import"./loading-flag-DkqmYwgU.js";function l(r){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
`,e.jsx(n.h1,{id:"radiogroup",children:"RadioGroup"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Container managing mutual exclusion across multiple ",e.jsx(n.code,{children:"Radio"}),` children with a
group-level label, validation, orientation control, and size propagation. Only
one radio can be selected at a time.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Offer a single choice from a set of mutually exclusive options under one label."}),`
`,e.jsxs(n.li,{children:["Give the group and every child radio the same ",e.jsx(n.code,{children:"name"}),`; drive selection with
`,e.jsx(n.code,{children:"value"})," + ",e.jsx(n.code,{children:"onChange"}),"."]}),`
`,e.jsxs(n.li,{children:["Lay options out vertically (default) or ",e.jsx(n.code,{children:"horizontal"}),"; pair ",e.jsx(n.code,{children:"horizontal"}),` with
`,e.jsx(n.code,{children:'labelPosition="start"'})," to place the label beside the options."]}),`
`,e.jsxs(n.li,{children:["For multiple independent selections use ",e.jsx(n.code,{children:"CheckboxGroup"}),`; for a single binary
toggle use `,e.jsx(n.code,{children:"Switch"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(s,{of:i,sourceState:"shown"}),`
`,e.jsx(t,{of:i}),`
`,e.jsx(n.h2,{id:"layout",children:"Layout"}),`
`,e.jsxs(n.p,{children:["Orientation controls row vs. column; ",e.jsx(n.code,{children:'labelPosition="start"'}),` moves the label
beside a horizontal group.`]}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(n.p,{children:"Default, disabled, and group-level error."}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h2,{id:"interactive",children:"Interactive"}),`
`,e.jsx(n.p,{children:"A controlled group tracking its selected value."}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h2,{id:"example-settings-row",children:"Example: settings row"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:["The vanilla JS version of ",e.jsx(n.code,{children:"ArvoRadioGroup"}),". Composes child ",e.jsx(n.code,{children:"ArvoRadio"}),` instances
sharing a single `,e.jsx(n.code,{children:"name"}),", with shared label, validation, and value state."]}),`
`,e.jsx(n.h3,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoRadioGroup } from '@arvo/js/components/RadioGroup';

const el = document.querySelector('#my-rg');
const grp = ArvoRadioGroup.initialize(el, {
  name: 'plan',
  label: 'Plan',
  onChange: ({ value }) => console.log(value),
});

grp.value('pro');
grp.value();          // => current value
grp.disabled(true);
grp.setError('Pick a plan');
grp.destroy();
`})}),`
`,e.jsx(n.h3,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<fieldset class="arvo-rb-grp">
  <legend class="arvo-rb-grp__lbl">Plan</legend>
  <div class="arvo-rb-grp__items">
    <label class="arvo-radio"><input type="radio" name="plan" value="free" /></label>
    <label class="arvo-radio"><input type="radio" name="plan" value="pro" checked /></label>
  </div>
</fieldset>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Signature"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(detail: { value: string; previousValue: string | null }) => void"})}),e.jsx("td",{children:"Fires on selection change"})]})})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"js-only",children:"JS only"}),`
`,e.jsx(n.h4,{id:"methods",children:"Methods"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoRadioGroup.initialize(element, options)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLElement"}),", ",e.jsx("code",{children:"ArvoRadioGroupOptions"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoRadioGroup"})}),e.jsx("td",{children:"Factory"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"value(next?)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | null | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"string | null | void"})}),e.jsx("td",{children:"Get or set selected value"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setError(msg)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | false"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Set or clear inline error message"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLoading(loading)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Toggle loading state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set disabled state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Remove listeners + clean up DOM"})]})]})]}),`
`,e.jsx(n.h4,{id:"custom-events",children:"Custom Events"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"rb-grp:change"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: CustomEvent<{ value: string; previousValue: string | null }>) => void"})}),e.jsx("td",{children:"Fires on selection change"})]})})]})]})}function M(r={}){const{wrapper:n}={...d(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(l,{...r})}):l(r)}export{M as default};
