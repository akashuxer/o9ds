import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as d,M as o,C as l,a as c}from"./blocks-DLeo0hIy.js";import{C as t,P as r,W as a,H as h,L as x,A as j,I as p,a as u}from"./CheckboxGroup.stories-BlzODwmA.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./Checkbox-k9WMnmR3.js";import"./useControllableState-BcENo7ec.js";import"./FormLabel-Dn-HbpfA.js";import"./MessageAlert-DBQwY950.js";import"./Button-B8O_kk1m.js";import"./loading-flag-DkqmYwgU.js";function i(s){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:t}),`
`,e.jsx(n.h1,{id:"checkboxgroup",children:"CheckboxGroup"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Container managing multiple ",e.jsx(n.code,{children:"Checkbox"}),` children with a group-level label,
validation, optional select-all capability, orientation control, and size
propagation.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Group several related boolean options under one label with shared validation."}),`
`,e.jsxs(n.li,{children:["Enable ",e.jsx(n.code,{children:"hasSelectAll"}),` to add a parent checkbox that checks or unchecks the
whole set (and reflects an indeterminate state when partially selected).`]}),`
`,e.jsxs(n.li,{children:["Lay options out vertically (default) or ",e.jsx(n.code,{children:"horizontal"}),"; pair ",e.jsx(n.code,{children:"horizontal"}),` with
`,e.jsx(n.code,{children:'labelPosition="start"'})," to place the label beside the options."]}),`
`,e.jsxs(n.li,{children:["For a single boolean use ",e.jsx(n.code,{children:"Checkbox"}),`; for one mutually exclusive choice use
`,e.jsx(n.code,{children:"RadioGroup"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(l,{of:r,sourceState:"shown"}),`
`,e.jsx(c,{of:r}),`
`,e.jsx(n.h2,{id:"select-all",children:"Select all"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"hasSelectAll"}),` prepends a parent checkbox that toggles every child and shows an
indeterminate dash when only some children are checked.`]}),`
`,e.jsx(l,{of:a}),`
`,e.jsx(n.h2,{id:"layout",children:"Layout"}),`
`,e.jsxs(n.p,{children:["Orientation controls row vs. column; ",e.jsx(n.code,{children:'labelPosition="start"'}),` moves the label
beside a horizontal group.`]}),`
`,e.jsx(l,{of:h}),`
`,e.jsx(l,{of:x}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(n.p,{children:"Default, disabled, and group-level error."}),`
`,e.jsx(l,{of:j}),`
`,e.jsx(n.h2,{id:"interactive",children:"Interactive"}),`
`,e.jsx(n.p,{children:"A controlled group with select-all tracking its children."}),`
`,e.jsx(l,{of:p}),`
`,e.jsx(n.h2,{id:"example-permissions-matrix",children:"Example: permissions matrix"}),`
`,e.jsx(l,{of:u}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:["The vanilla JS version of ",e.jsx(n.code,{children:"ArvoCheckboxGroup"}),". Composes child ",e.jsx(n.code,{children:"ArvoCheckbox"}),`
instances with shared name, label, validation, and an optional select-all
parent. Use for related boolean choices (notification channels, feature flags,
permission scopes).`]}),`
`,e.jsx(n.h3,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoCheckboxGroup } from '@arvo/js/components/CheckboxGroup';

const el = document.querySelector('#my-cb-grp');
const grp = ArvoCheckboxGroup.initialize(el, {
  label: 'Notifications',
  hasSelectAll: true,
  name: 'notify',
  onChange: (detail) => console.log(detail),
});

grp.value(['email', 'sms']);
grp.value();           // => string[]
grp.toggleAll(true);   // check all
grp.toggleAll(false);  // uncheck all
grp.toggleAll();       // flip
grp.disabled(true);
grp.setError('Pick at least one');
grp.destroy();
`})}),`
`,e.jsx(n.h3,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="arvo-cb-grp">
  <label class="arvo-cb-grp__lbl">Notifications</label>
  <div class="arvo-cb-grp__items">
    <label class="arvo-cb-grp__select-all"><!-- ArvoCheckbox: "All" --></label>
    <label class="arvo-cb"><input type="checkbox" name="notify" value="email" /><!-- ... --></label>
    <label class="arvo-cb"><input type="checkbox" name="notify" value="sms" /></label>
  </div>
</div>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Signature"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(detail: { values: string[]; allChecked: boolean }) => void"})}),e.jsx("td",{children:"Fires on any toggle"})]})})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"js-only",children:"JS only"}),`
`,e.jsx(n.h4,{id:"methods",children:"Methods"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoCheckboxGroup.initialize(element, options)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLElement"}),", ",e.jsx("code",{children:"ArvoCheckboxGroupOptions"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoCheckboxGroup"})}),e.jsx("td",{children:"Factory"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"value(next?)"})}),e.jsx("td",{children:e.jsx("code",{children:"string[] | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"string[] | void"})}),e.jsx("td",{children:"Get or set selected values"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"toggleAll(force?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsxs("td",{children:["Check all (",e.jsx("code",{children:"true"}),"), uncheck all (",e.jsx("code",{children:"false"}),"), or flip (omit). No-op when disabled / readonly / loading."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setError(msg)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | false"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Set or clear inline error message"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLoading(loading)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Toggle loading state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set disabled state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Remove listeners + clean up DOM"})]})]})]}),`
`,e.jsx(n.h4,{id:"custom-events",children:"Custom Events"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"cb-grp:change"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: CustomEvent<{ values: string[]; allChecked: boolean }>) => void"})}),e.jsx("td",{children:"Fires on any toggle"})]})})]})]})}function E(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{E as default};
