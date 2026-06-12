import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as t,M as d,C as r,a as c}from"./blocks-DLeo0hIy.js";import{B as a,P as i,T as o,a as h,W as x,C as j,A as m,b as p}from"./Breadcrumb.stories-bBvOo1lm.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./loading-flag-DkqmYwgU.js";import"./Button-B8O_kk1m.js";import"./useControllableState-BcENo7ec.js";function l(s){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:a}),`
`,e.jsx(n.h1,{id:"breadcrumb",children:"Breadcrumb"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsx(n.p,{children:`Horizontal trail of navigational links showing the user's current location within
a page hierarchy. The last item is the current page (non-navigable, bold); earlier
items are links, optionally led by a home icon.`}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Show the user's position in a multi-level hierarchy and let them jump back up."}),`
`,e.jsx(n.li,{children:"Keep it on a single line; the last item is the current page and is not a link."}),`
`,e.jsx(n.li,{children:"Optionally lead with a home icon as the first item for a quick return to the root."}),`
`,e.jsxs(n.li,{children:["For switching between sibling views, use ",e.jsx(n.code,{children:"Tabstrip"})," instead."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(r,{of:i,sourceState:"shown"}),`
`,e.jsx(c,{of:i}),`
`,e.jsx(n.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(r,{of:o}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(n.h2,{id:"custom-separator",children:"Custom separator"}),`
`,e.jsxs(n.p,{children:["The separator between items defaults to ",e.jsx(n.code,{children:"/"})," and can be overridden."]}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(n.p,{children:`Disabled removes navigation from every link while keeping them discoverable;
loading shows a shimmer overlay.`}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.h2,{id:"in-a-page-header",children:"In a page header"}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:["The vanilla JS version of ",e.jsx(n.code,{children:"ArvoBreadcrumb"}),`. Trail of links/labels indicating the
user's current location in a hierarchy.`]}),`
`,e.jsx(n.h2,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoBreadcrumb } from '@arvo/js';

const el = document.querySelector('#my-bc');
const bc = ArvoBreadcrumb.initialize(el, {
  items: [
    { label: 'Home', href: '/' },
    { label: 'Reports', href: '/reports' },
    { label: 'Q4 2025' },
  ],
  onNavigate: ({ href, index, label }) => console.log(href, index, label),
});

bc.setItems([...]);
bc.disabled(true);
bc.destroy();
`})}),`
`,e.jsx(n.h2,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<nav class="arvo-bc" aria-label="Breadcrumb">
  <ol class="arvo-bc__list">
    <li class="arvo-bc__item">
      <a class="arvo-bc__lnk" href="/">Home</a>
    </li>
    <li class="arvo-bc__item">
      <a class="arvo-bc__lnk" href="/reports">Reports</a>
    </li>
    <li class="arvo-bc__item">
      <span class="arvo-bc__lbl" aria-current="page">Q4 2025</span>
    </li>
  </ol>
</nav>
`})}),`
`,e.jsxs(n.p,{children:["Separators are rendered via the ",e.jsx(n.code,{children:"::before"}),` pseudo-element on
`,e.jsx(n.code,{children:".arvo-bc__item:not(:first-child)"})," -- there is no explicit ",e.jsx(n.code,{children:"arvo-bc__sep"}),`
element. The current (last) item is a `,e.jsx(n.code,{children:'<span class="arvo-bc__lbl">'}),` with
`,e.jsx(n.code,{children:'aria-current="page"'}),"; intermediate items use ",e.jsx(n.code,{children:'<a class="arvo-bc__lnk">'}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Signature"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onNavigate"})}),e.jsx("td",{children:e.jsx("code",{children:"(detail: { href: string; index: number; label: string }) => void"})}),e.jsx("td",{children:"Fires on item click"})]})})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"js-only",children:"JS only"}),`
`,e.jsx(n.h3,{id:"methods",children:"Methods"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoBreadcrumb.initialize(element, options)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLElement"}),", ",e.jsx("code",{children:"ArvoBreadcrumbOptions"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoBreadcrumb"})}),e.jsx("td",{children:"Factory"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setItems(items)"})}),e.jsx("td",{children:e.jsx("code",{children:"ArvoBreadcrumbItem[]"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Replace the trail items"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set disabled state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLoading(loading)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Toggle loading state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Remove listeners + clean up DOM"})]})]})]})]})}function T(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}export{T as default};
