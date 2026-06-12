import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as l,M as t,C as s,a as c}from"./blocks-DLeo0hIy.js";import{F as o,P as r,L as a,S as h,R as x,D as j,I as p,a as m,T as b,b as u,c as f}from"./FormLabel.stories-BvhSuF5k.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./FormLabel-Dn-HbpfA.js";import"./Textbox-BjaSSAvr.js";import"./index2-HSp4ZJrG.js";import"./useTooltip-DZu1XpnP.js";import"./index28-DgjIRxoq.js";import"./IconButton-BgwDUYzG.js";import"./useControllableState-BcENo7ec.js";import"./loading-flag-DkqmYwgU.js";import"./MessageAlert-DBQwY950.js";import"./Button-B8O_kk1m.js";function d(i){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:o}),`
`,e.jsx(n.h1,{id:"formlabel",children:"FormLabel"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Public atomic form label primitive shared by every labelled form control.
`,e.jsx(n.code,{children:"ArvoFormLabel"})," renders a ",e.jsx(n.code,{children:"<label htmlFor>"}),` for sibling-associated fields, while
`,e.jsx(n.code,{children:"ArvoFormLabelText"})," renders the same primitive as a ",e.jsx(n.code,{children:"<span>"}),` for the inner
caption nested inside a wrapping `,e.jsx(n.code,{children:"<label>"})," (radio, switch, checkbox)."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["For typical fields, prefer the control's own ",e.jsx(n.code,{children:"label"}),` prop. Reach for
`,e.jsx(n.code,{children:"ArvoFormLabel"}),` directly only for advanced composition (custom layouts, custom
required indicators, or separate field positioning).`]}),`
`,e.jsxs(n.li,{children:["Use the ",e.jsx(n.code,{children:"<label>"})," variant (",e.jsx(n.code,{children:"ArvoFormLabel"}),") with ",e.jsx(n.code,{children:"htmlFor"}),` to associate a
caption with a sibling input.`]}),`
`,e.jsxs(n.li,{children:["Use the ",e.jsx(n.code,{children:"<span>"})," variant (",e.jsx(n.code,{children:"ArvoFormLabelText"}),`) for an inner caption inside a
wrapping `,e.jsx(n.code,{children:"<label>"})," on selection controls."]}),`
`,e.jsxs(n.li,{children:["Default size is ",e.jsx(n.code,{children:"sm"})," (12px); ",e.jsx(n.code,{children:"lg"}),` (14px) is reserved for selection controls
in their large variant.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(s,{of:r,sourceState:"shown"}),`
`,e.jsx(c,{of:r}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"sm"})," (12px) is the default for input-style controls; ",e.jsx(n.code,{children:"lg"}),` (14px) is reserved for
selection controls in their large variant.`]}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(n.p,{children:"Required (with default or custom indicator), disabled, and invalid."}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h2,{id:"text-variant-span",children:"Text variant (span)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ArvoFormLabelText"})," renders the same primitive as a ",e.jsx(n.code,{children:"<span>"}),` for captions nested
inside a wrapping `,e.jsx(n.code,{children:"<label>"}),"."]}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(n.h2,{id:"composition",children:"Composition"}),`
`,e.jsxs(n.p,{children:["Pair ",e.jsx(n.code,{children:"ArvoFormLabel"})," with a sibling field via ",e.jsx(n.code,{children:"htmlFor"}),`, and propagate invalid
state to both.`]}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ArvoFormLabel"}),` is the public atomic form label primitive shipped from both
`,e.jsx(n.code,{children:"@arvo/react"})," and ",e.jsx(n.code,{children:"@arvo/js"}),`. Every labelled form control in the design system
renders the same primitive for its caption, so labelling, required indicators,
disabled / invalid states, spacing, and accessibility stay consistent across
the system.`]}),`
`,e.jsx(n.p,{children:"Two render targets:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"<label>"})," (default)"]}),` -- sibling-association for input-style controls
(Textbox, Textarea, NumberInput, Select, Combobox, Listbox, the four pickers).`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"<span>"})," (",e.jsx(n.code,{children:"as: 'span'"}),")"]})," -- inner caption inside a wrapping ",e.jsx(n.code,{children:"<label>"}),` on
selection controls (Radio, Switch, Checkbox). React additionally exports
`,e.jsx(n.code,{children:"ArvoFormLabelText"})," as a span-only alias for consumer ergonomics."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Higher-level components expose a convenient ",e.jsx(n.code,{children:"label"}),` prop that internally
renders this primitive at 12px. Reach for `,e.jsx(n.code,{children:"ArvoFormLabel"}),` directly only when
you need the advanced composition path (custom layouts, custom required
indicators, separate field positioning).`]}),`
`,e.jsx(n.h3,{id:"size",children:"Size"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Default: ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"sm"})}),` (12px). All input-style form controls render their labels
at 12px regardless of field size.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"lg"})," (14px) is reserved for selection controls (",e.jsx(n.code,{children:"Checkbox"}),", ",e.jsx(n.code,{children:"Radio"}),` and
their groups) where the caption scales with the control size.`]}),`
`]}),`
`,e.jsx(n.h3,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.p,{children:"Vanilla JS uses the class factory:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoFormLabel } from '@arvo/js';

// Sibling-association <label> for a text input
const lbl = ArvoFormLabel.initialize(null, {
  text: 'Email address',
  for: 'email-input',
  isRequired: true,
});
field.insertBefore(lbl.el, fieldChild);

// Inner caption <span> for a Radio / Switch / Checkbox
const caption = ArvoFormLabel.initialize(null, {
  text: 'I agree to the terms',
  as: 'span',
});
caption.el.classList.add('arvo-cb__lbl');
field.appendChild(caption.el);
`})}),`
`,e.jsx(n.h3,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Sibling-association label (default, 12px) -->
<label class="arvo-form-lbl" for="email-input">
  Email address
  <span class="arvo-form-lbl__req" aria-hidden="true">*</span>
</label>

<!-- Inner caption (as: 'span', 14px) -->
<span class="arvo-form-lbl arvo-form-lbl--lg arvo-form-lbl--required is-invalid">
  Inner caption
  <span class="arvo-form-lbl__req" aria-hidden="true">*</span>
</span>
`})}),`
`,e.jsxs(n.p,{children:["State classes: ",e.jsx(n.code,{children:"is-disabled"}),", ",e.jsx(n.code,{children:"is-invalid"}),". Size modifier: ",e.jsx(n.code,{children:"arvo-form-lbl--lg"}),`
(the absence of `,e.jsx(n.code,{children:"--lg"})," is the 12px default)."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"js-api",children:"JS API"}),`
`,e.jsx(n.h4,{id:"factory",children:"Factory"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoFormLabel.initialize(element, options)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLElement | null"}),", ",e.jsx("code",{children:"ArvoFormLabelOptions"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoFormLabel"})}),e.jsxs("td",{children:["Initializes a label instance on the given element. Pass ",e.jsx("code",{children:"null"})," to create a fresh element matching the configured ",e.jsx("code",{children:"as"}),"."]})]})})]}),`
`,e.jsx(n.h4,{id:"options",children:"Options"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Option"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Default"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"text"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:"Caption text. Required."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"as"})}),e.jsx("td",{children:e.jsx("code",{children:"'label' | 'span'"})}),e.jsx("td",{children:e.jsx("code",{children:"'label'"})}),e.jsx("td",{children:"Rendered tag. When initializing on an existing element, the element's tag overrides this option."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"for"})}),e.jsx("td",{children:e.jsx("code",{children:"string | null"})}),e.jsx("td",{children:"--"}),e.jsxs("td",{children:["id of the associated control. Honored only when rendered as a ",e.jsx("code",{children:"<label>"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"size"})}),e.jsx("td",{children:e.jsx("code",{children:"'sm' | 'lg'"})}),e.jsx("td",{children:e.jsx("code",{children:"'sm'"})}),e.jsx("td",{children:"Label size. 12px / 14px. Reserved for selection controls in their lg variant."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isRequired"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsxs("td",{children:["Appends the required indicator ",e.jsx("code",{children:"<span>"})," and adds ",e.jsx("code",{children:"arvo-form-lbl--required"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isDisabled"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsxs("td",{children:["Adds ",e.jsx("code",{children:"is-disabled"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isInvalid"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsxs("td",{children:["Adds ",e.jsx("code",{children:"is-invalid"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"requiredIndicator"})}),e.jsx("td",{children:e.jsx("code",{children:"string | HTMLElement | null"})}),e.jsx("td",{children:e.jsx("code",{children:"'*'"})}),e.jsx("td",{children:"Optional override for the required indicator content."})]})]})]}),`
`,e.jsx(n.h4,{id:"methods",children:"Methods"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"text()"})," / ",e.jsx("code",{children:"text(next)"})]}),e.jsx("td",{children:"Get or set the caption text."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"size()"})," / ",e.jsx("code",{children:"size(next)"})]}),e.jsx("td",{children:"Get or set the size."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"required()"})," / ",e.jsx("code",{children:"required(next)"})]}),e.jsx("td",{children:"Get or set the required state."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"disabled()"})," / ",e.jsx("code",{children:"disabled(next)"})]}),e.jsx("td",{children:"Get or set the disabled state."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"invalid()"})," / ",e.jsx("code",{children:"invalid(next)"})]}),e.jsx("td",{children:"Get or set the invalid state."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"for()"})," / ",e.jsx("code",{children:"for(next)"})]}),e.jsxs("td",{children:["Get or set the ",e.jsx("code",{children:"for"})," attribute. No-op on ",e.jsx("code",{children:"<span>"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"as()"})}),e.jsx("td",{children:"Returns the rendered tag. Read-only after construction."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"Removes all child nodes and detaches internal references."})]})]})]}),`
`,e.jsx(n.h3,{id:"custom-events",children:"Custom events"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ArvoFormLabel"})," is purely presentational and dispatches no custom events."]})]})}function k(i={}){const{wrapper:n}={...l(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(d,{...i})}):d(i)}export{k as default};
