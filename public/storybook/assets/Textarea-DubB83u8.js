import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as t,M as l,C as s,a as o}from"./blocks-DLeo0hIy.js";import{T as c,P as i,A as a,W as h,a as x,b as j,c as u,d as p,e as m,E as v,f as g,D as b,R as f,L as y,F as C,g as A,C as T}from"./Textarea.stories-DECtF7-Y.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./Textarea-DHmHzhmJ.js";import"./index2-HSp4ZJrG.js";import"./useTooltip-DZu1XpnP.js";import"./index28-DgjIRxoq.js";import"./loading-flag-DkqmYwgU.js";import"./FormLabel-Dn-HbpfA.js";import"./MessageAlert-DBQwY950.js";import"./Button-B8O_kk1m.js";import"./useControllableState-BcENo7ec.js";function d(r){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(n.h1,{id:"textarea",children:"Textarea"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsx(n.p,{children:`Multi-line text input with an animated bottom border, optional character
counter, auto-resize, leading icon, and inline or tooltip error display.`}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Capture multi-line free-form text such as comments, descriptions, or notes."}),`
`,e.jsxs(n.li,{children:["Enable ",e.jsx(n.code,{children:"hasCounter"})," + ",e.jsx(n.code,{children:"maxLength"})," to communicate length limits, and ",e.jsx(n.code,{children:"autoResize"})," to grow the field with content."]}),`
`,e.jsxs(n.li,{children:["Pair with a ",e.jsx(n.code,{children:"label"})," and use ",e.jsx(n.code,{children:"isRequired"})," / ",e.jsx(n.code,{children:"isInvalid"})," + ",e.jsx(n.code,{children:"errorMsg"})," for form validation."]}),`
`,e.jsxs(n.li,{children:["For a single line of text use ",e.jsx(n.code,{children:"Textbox"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(s,{of:i,sourceState:"shown"}),`
`,e.jsx(o,{of:i}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"size"}),` prop controls the label size only; the field dimensions are identical
at both sizes.`]}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.h2,{id:"label",children:"Label"}),`
`,e.jsxs(n.p,{children:["Add a ",e.jsx(n.code,{children:"label"})," above the field, and mark mandatory fields with ",e.jsx(n.code,{children:"isRequired"}),"."]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h2,{id:"counter--auto-resize",children:"Counter & auto-resize"}),`
`,e.jsxs(n.p,{children:["A character counter (",e.jsx(n.code,{children:"hasCounter"})," + ",e.jsx(n.code,{children:"maxLength"}),") and ",e.jsx(n.code,{children:"autoResize"}),` (grows with
content) are optional extras.`]}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h2,{id:"leading-icon",children:"Leading icon"}),`
`,e.jsx(n.p,{children:"A leading icon is rendered inside the field before the textarea."}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h2,{id:"validation",children:"Validation"}),`
`,e.jsxs(n.p,{children:["Set ",e.jsx(n.code,{children:"isInvalid"})," to show the error border. ",e.jsx(n.code,{children:"errorDisplay"}),` controls whether the
message renders inline below the field or as a tooltip on a trailing icon.`]}),`
`,e.jsx(s,{of:v}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(n.p,{children:`Disabled blocks interaction, read-only shows a dashed border, and loading
renders a skeleton overlay.`}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(s,{of:y}),`
`,e.jsx(n.h2,{id:"layout",children:"Layout"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"isFullWidth"})," stretches the field to fill its container."]}),`
`,e.jsx(s,{of:C}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(s,{of:A}),`
`,e.jsx(s,{of:T}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:["The vanilla JS version of ",e.jsx(n.code,{children:"ArvoTextarea"}),`. Multi-line text input with optional
character counter, auto-resize, leading icon, and inline error.`]}),`
`,e.jsx(n.h2,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoTextarea } from '@arvo/js/components/Textarea';

const el = document.querySelector('#my-ta');
const ta = ArvoTextarea.initialize(el, {
  label: 'Bio',
  maxLength: 200,
  hasCounter: true,
  autoResize: true,
  onChange: (e) => console.log(e.target.value),
});

ta.value('Updated text');
ta.disabled(true);
ta.setError('Please describe yourself');
ta.setError(false);
ta.destroy();
`})}),`
`,e.jsx(n.h2,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="arvo-txa arvo-txa--lg">
  <label class="arvo-txa__lbl">Bio</label>
  <div class="arvo-txa__field">
    <textarea class="arvo-txa__input" rows="3"></textarea>
  </div>
  <div class="arvo-txa__counter">0 / 200</div>
</div>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Signature"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onInput"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: Event) => void"})}),e.jsx("td",{children:"Per-keystroke"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: Event) => void"})}),e.jsx("td",{children:"Commit (blur)"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"js-only",children:"JS only"}),`
`,e.jsx(n.h3,{id:"methods",children:"Methods"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoTextarea.initialize(element, options)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLElement"}),", ",e.jsx("code",{children:"ArvoTextareaOptions"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoTextarea"})}),e.jsx("td",{children:"Factory"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"value(next?)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"string | void"})}),e.jsx("td",{children:"Get or set the textarea value"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLabel(text)"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Update label text"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setError(msg)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | false"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Set or clear inline error message"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLoading(loading)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Toggle loading state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set disabled state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Remove listeners + clean up DOM"})]})]})]}),`
`,e.jsx(n.h3,{id:"custom-events",children:"Custom Events"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"txa:input"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: CustomEvent<{ value: string }>) => void"})}),e.jsx("td",{children:"Per-keystroke"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"txa:change"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: CustomEvent<ArvoTextareaChangeDetail>) => void"})}),e.jsx("td",{children:"Commit (blur)"})]})]})]})]})}function X(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(d,{...r})}):d(r)}export{X as default};
