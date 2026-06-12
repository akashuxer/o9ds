import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as t,M as l,C as r,a as o}from"./blocks-DLeo0hIy.js";import{B as c,P as i,A as a,a as h,S as x,b as j,F as p}from"./BadgeAlert.stories-B8crdG8g.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./Textbox-BjaSSAvr.js";import"./index2-HSp4ZJrG.js";import"./useTooltip-DZu1XpnP.js";import"./index28-DgjIRxoq.js";import"./FormLabel-Dn-HbpfA.js";import"./IconButton-BgwDUYzG.js";import"./useControllableState-BcENo7ec.js";import"./loading-flag-DkqmYwgU.js";import"./MessageAlert-DBQwY950.js";import"./Button-B8O_kk1m.js";function d(s){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(n.h1,{id:"badgealert",children:"BadgeAlert"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsx(n.p,{children:`Compact status badge for short, self-contained alert messages with semantic
color coding. Renders as an inline-flex container with an optional status icon
and a text message. Supports six semantic types, two visual variants (primary
filled / outline), and two sizes.`}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Surface a short, self-contained status message in any layout -- a page
banner, a card header, or a form-field hint.`}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:'role="alert"'}),` for attention-critical messages; the default
`,e.jsx(n.code,{children:'role="status"'})," is announced politely."]}),`
`,e.jsxs(n.li,{children:[`For a full-width banner with a title, action button, and inline link, use
`,e.jsx(n.code,{children:"BannerAlert"})," instead."]}),`
`,e.jsxs(n.li,{children:[`For an icon-only in-field error or a below-field validation message tied to a
form control, use `,e.jsx(n.code,{children:"MessageAlert"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(r,{of:i,sourceState:"shown"}),`
`,e.jsx(o,{of:i}),`
`,e.jsx(n.h2,{id:"types",children:"Types"}),`
`,e.jsx(n.p,{children:"Six semantic types map to the standard feedback colors."}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"primary"})," uses a filled background; ",e.jsx(n.code,{children:"outline"})," uses a border with no fill."]}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(n.h2,{id:"in-context",children:"In context"}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:["The vanilla JS version of ",e.jsx(n.code,{children:"ArvoBadgeAlert"}),`. Compact static feedback element for
message alerts, banners, and form-field hints. Use `,e.jsx(n.code,{children:'role="alert"'}),` for
attention-critical messages; default `,e.jsx(n.code,{children:'role="status"'})," is announced politely."]}),`
`,e.jsx(n.h2,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoBadgeAlert } from '@arvo/js/components/BadgeAlert';

const el = document.querySelector('#my-bdg');
const bdg = ArvoBadgeAlert.initialize(el, {
  message: 'Operation completed successfully',
  type: 'positive',
  variant: 'primary',
  size: 'lg',
});

bdg.setMessage('Updated message');
bdg.setType('warning');
bdg.destroy();
`})}),`
`,e.jsx(n.h2,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="arvo-bdg-alert arvo-bdg-alert--primary arvo-bdg-alert--positive arvo-bdg-alert--lg" role="status">
  <span class="arvo-bdg-alert__ico o9con o9con-check-circle" aria-hidden="true"></span>
  <span class="arvo-bdg-alert__msg">Operation completed</span>
</div>
`})}),`
`,e.jsxs(n.p,{children:["Type modifiers: ",e.jsx(n.code,{children:"--positive"}),", ",e.jsx(n.code,{children:"--info"}),", ",e.jsx(n.code,{children:"--neutral"}),", ",e.jsx(n.code,{children:"--warning"}),", ",e.jsx(n.code,{children:"--negative"}),", ",e.jsx(n.code,{children:"--block"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"js-only",children:"JS only"}),`
`,e.jsx(n.h3,{id:"methods",children:"Methods"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoBadgeAlert.initialize(element, options)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLElement"}),", ",e.jsx("code",{children:"ArvoBadgeAlertOptions"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoBadgeAlert"})}),e.jsx("td",{children:"Factory"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setMessage(text)"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Update the message"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setType(type)"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Change the type / color tone"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setVariant(variant)"})}),e.jsx("td",{children:e.jsx("code",{children:"'primary' | 'secondary'"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Switch visual variant."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setSize(size)"})}),e.jsx("td",{children:e.jsx("code",{children:"'sm' | 'lg'"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Switch size."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setIcon(show)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsxs("td",{children:["Toggle visibility of the default type icon. Pass a custom icon via ",e.jsx("code",{children:"customIcon"})," at construction."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Remove the element + listeners"})]})]})]})]})}function P(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(d,{...s})}):d(s)}export{P as default};
