import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as l,M as t,C as s,a as c}from"./blocks-DLeo0hIy.js";import{R as o,P as r,A as a,S as h,a as x,M as j,b as u}from"./Radio.stories-DaIYPcjJ.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./Radio-0NcOE_jm.js";import"./useControllableState-BcENo7ec.js";import"./FormLabel-Dn-HbpfA.js";import"./MessageAlert-DBQwY950.js";import"./Button-B8O_kk1m.js";import"./loading-flag-DkqmYwgU.js";function i(d){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:o}),`
`,e.jsx(n.h1,{id:"radio",children:"Radio"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsx(n.p,{children:`Single-selection control within a mutual-exclusion group, displayed as a circular
button with an inner dot and a visible inline label. Supports two sizes plus error,
disabled, required, and read-only states.`}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Let users choose exactly one option from a short, mutually exclusive set
(roughly 2-7 visible choices).`}),`
`,e.jsxs(n.li,{children:["Give every radio in the same set the same ",e.jsx(n.code,{children:"name"}),` so selecting one clears the
others (native grouping).`]}),`
`,e.jsxs(n.li,{children:[`For a managed group with a shared label, group-level validation, and roving
focus, use `,e.jsx(n.code,{children:"RadioGroup"}),"."]}),`
`,e.jsxs(n.li,{children:["For independent on/off choices use ",e.jsx(n.code,{children:"Checkbox"}),`; for a single binary toggle use
`,e.jsx(n.code,{children:"Switch"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(s,{of:r,sourceState:"shown"}),`
`,e.jsx(c,{of:r}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(n.p,{children:"Unchecked, checked, disabled, error, required, and loading states."}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.p,{children:["Two sizes scale the circle, dot, and label font. ",e.jsx(n.code,{children:"lg"})," is the default."]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h2,{id:"in-a-group",children:"In a group"}),`
`,e.jsxs(n.p,{children:["Radios that share a ",e.jsx(n.code,{children:"name"}),` form a native mutual-exclusion group -- selecting one
clears the rest. Drive the selected value with `,e.jsx(n.code,{children:"isChecked"})," + ",e.jsx(n.code,{children:"onChange"}),"."]}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h2,{id:"example-payment-method",children:"Example: payment method"}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:["The vanilla JS version of ",e.jsx(n.code,{children:"ArvoRadio"}),`. Single radio control. For grouped radios
with shared state and unified validation, use `,e.jsx(n.code,{children:"ArvoRadioGroup"}),". Multiple ",e.jsx(n.code,{children:"ArvoRadio"}),`
instances sharing the same `,e.jsx(n.code,{children:"name"})," form an implicit native group."]}),`
`,e.jsx(n.h3,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoRadio } from '@arvo/js/components/Radio';

const el = document.querySelector('#my-radio');
const r = ArvoRadio.initialize(el, {
  value: 'option-1',
  name: 'group-a',
  label: 'Option 1',
  onChange: ({ value, name }) => console.log(value, name),
});

// Programmatic
r.select();             // make this radio the selected one in its name group
r.deselect();           // clear checked state on this radio
r.checked();            // read current state (getter only)
r.disabled(true);
r.setLoading(true);
r.setError('Required');
r.setError(false);

r.destroy();
`})}),`
`,e.jsx(n.h3,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="arvo-radio arvo-radio--lg">
  <label class="arvo-radio__field">
    <input class="arvo-radio__input" type="radio" name="group-a" value="option-1" />
    <span class="arvo-radio__control" aria-hidden="true"></span>
    <span class="arvo-form-lbl arvo-radio__text">Option 1</span>
  </label>
</div>
`})}),`
`,e.jsxs(n.p,{children:["State classes on the root ",e.jsx(n.code,{children:"<div>"}),": ",e.jsx(n.code,{children:".is-disabled"}),", ",e.jsx(n.code,{children:".is-readonly"}),", ",e.jsx(n.code,{children:".has-error"}),`,
`,e.jsx(n.code,{children:".loading"}),". The native input drives ",e.jsx(n.code,{children:"name"}),", ",e.jsx(n.code,{children:"value"}),", ",e.jsx(n.code,{children:"aria-checked"}),`, and form
integration. The radio circle / dot are rendered via CSS pseudo-elements on the
`,e.jsx(n.code,{children:".arvo-radio__control"})," sibling -- there is no ",e.jsx(n.code,{children:"__dot"})," element in the DOM."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Signature"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(detail: { value: string; name: string }) => void"})}),e.jsx("td",{children:"Fires when this radio is selected"})]})})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"js-only",children:"JS only"}),`
`,e.jsx(n.h4,{id:"methods",children:"Methods"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoRadio.initialize(element, options)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLElement"}),", ",e.jsx("code",{children:"ArvoRadioOptions"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoRadio"})}),e.jsx("td",{children:"Factory"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"checked()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsxs("td",{children:["Returns current checked state. Getter only -- use ",e.jsx("code",{children:"select()"})," / ",e.jsx("code",{children:"deselect()"})," to change."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"select()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsxs("td",{children:["Programmatically select this radio. Fires ",e.jsx("code",{children:"radio:change"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"deselect()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Programmatically deselect this radio."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLabel(text)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | null"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Update label text"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLoading(loading)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Toggle loading state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set disabled state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setError(msg)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | false"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Set or clear inline error"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Remove listeners + clean up DOM"})]})]})]}),`
`,e.jsx(n.h4,{id:"custom-events",children:"Custom Events"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"radio:change"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: CustomEvent<{ value: string; name: string }>) => void"})}),e.jsx("td",{children:"Fires when this radio is selected"})]})})]})]})}function w(d={}){const{wrapper:n}={...l(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(i,{...d})}):i(d)}export{w as default};
