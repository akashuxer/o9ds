import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as t,M as c,C as s,a as l}from"./blocks-DLeo0hIy.js";import{C as o,P as i,A as h,I as a,a as x,T as j}from"./Checkbox.stories-C0dtuLH6.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./Checkbox-k9WMnmR3.js";import"./useControllableState-BcENo7ec.js";import"./FormLabel-Dn-HbpfA.js";import"./MessageAlert-DBQwY950.js";import"./Button-B8O_kk1m.js";import"./loading-flag-DkqmYwgU.js";function r(d){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:o}),`
`,e.jsx(n.h1,{id:"checkbox",children:"Checkbox"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsx(n.p,{children:`Boolean selection control supporting checked, unchecked, indeterminate, and
excluded states with a visible inline label and optional size variants.`}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Toggle a single independent boolean option on or off."}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"isIndeterminate"}),` on a parent checkbox that aggregates a set of child
checkboxes (some, but not all, selected).`]}),`
`,e.jsxs(n.li,{children:[`For several related checkboxes with a shared label and group validation, use
`,e.jsx(n.code,{children:"CheckboxGroup"}),"."]}),`
`,e.jsxs(n.li,{children:["For one mutually exclusive choice from a set use ",e.jsx(n.code,{children:"Radio"}),`; for an immediate
on/off setting use `,e.jsx(n.code,{children:"Switch"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(s,{of:i,sourceState:"shown"}),`
`,e.jsx(l,{of:i}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(n.p,{children:"Default, checked, indeterminate, disabled, error, required, and loading."}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h2,{id:"indeterminate",children:"Indeterminate"}),`
`,e.jsx(n.p,{children:`The indeterminate state is visual-only -- it represents a parent checkbox whose
children are partially selected. Clicking clears indeterminate and sets checked.`}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.h2,{id:"interactive",children:"Interactive"}),`
`,e.jsx(n.p,{children:"A controlled checkbox that tracks its own checked state."}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h2,{id:"example-terms-and-conditions",children:"Example: terms and conditions"}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:["The vanilla JS version of ",e.jsx(n.code,{children:"ArvoCheckbox"}),` is a 1:1 visual match for the React
component. Use it as a single boolean control or as a child of `,e.jsx(n.code,{children:"ArvoCheckboxGroup"}),`.
Supports `,e.jsx(n.code,{children:"isIndeterminate"})," for parent/aggregate checkboxes."]}),`
`,e.jsx(n.h3,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoCheckbox } from '@arvo/js/components/Checkbox';

const el = document.querySelector('#my-cb');
const cb = ArvoCheckbox.initialize(el, {
  label: 'Subscribe to newsletter',
  value: 'newsletter',
  onChange: (detail) => console.log(detail),
});

// Toggle
cb.toggle();          // flip
cb.toggle(true);      // force on
cb.toggle(false);     // force off

// Indeterminate
cb.indeterminate(true);

// Loading / disabled
cb.setLoading(true);
cb.disabled(true);

// Update label
cb.setLabel('New label');

// Tear down
cb.destroy();
`})}),`
`,e.jsx(n.h3,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="arvo-cb arvo-cb--lg">
  <label class="arvo-cb__field">
    <input class="arvo-cb__input" type="checkbox" value="" />
    <span class="arvo-form-lbl arvo-cb__lbl">Subscribe to newsletter</span>
  </label>
</div>
`})}),`
`,e.jsxs(n.p,{children:["State on the root ",e.jsx(n.code,{children:"<div>"}),": ",e.jsx(n.code,{children:".is-disabled"}),", ",e.jsx(n.code,{children:".is-readonly"}),", ",e.jsx(n.code,{children:".has-error"}),", ",e.jsx(n.code,{children:".loading"}),`,
plus `,e.jsx(n.code,{children:'data-indeterminate="true"'}),` for partial checks (CSS selects on the attribute,
not a class). The `,e.jsx(n.code,{children:":checked"}),` / indeterminate / focus visuals are rendered via the
input's own `,e.jsx(n.code,{children:"::before"})," / ",e.jsx(n.code,{children:"::after"})," pseudo-elements -- there is no ",e.jsx(n.code,{children:"__box"}),` /
`,e.jsx(n.code,{children:"__checkmark"})," element in the DOM. ",e.jsx(n.code,{children:"aria-checked"})," is inherent on the native input."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Signature"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(detail: { isChecked: boolean; value: string }) => void"})}),e.jsx("td",{children:"Fires on toggle"})]})})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"js-only",children:"JS only"}),`
`,e.jsx(n.h4,{id:"methods",children:"Methods"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoCheckbox.initialize(element, options)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLElement"}),", ",e.jsx("code",{children:"ArvoCheckboxOptions"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoCheckbox"})}),e.jsx("td",{children:"Factory"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"toggle(force?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Flip or force checked state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"indeterminate(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set indeterminate state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"value(next?)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"string | void"})}),e.jsx("td",{children:"Get or set the form value"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLabel(text)"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Update the label text"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLoading(loading)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Toggle loading state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set disabled state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setError(msg)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | false"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Set or clear inline error message"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Remove listeners + clean up DOM"})]})]})]}),`
`,e.jsx(n.h4,{id:"custom-events",children:"Custom Events"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"checkbox:change"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: CustomEvent<{ isChecked: boolean; value: string }>) => void"})}),e.jsx("td",{children:"Fires on toggle"})]})})]})]})}function M(d={}){const{wrapper:n}={...t(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(r,{...d})}):r(d)}export{M as default};
