import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as t,M as l,C as s,a as o}from"./blocks-DLeo0hIy.js";import{L as c,P as r,A as a,a as h,b as x,W as j,E as p,I as u,T as m}from"./Link.stories-DzLkjB0o.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./Link-NIjDRzO0.js";import"./loading-flag-DkqmYwgU.js";function d(i){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(n.h1,{id:"link",children:"Link"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Inline navigational anchor for internal pages, external URLs, or downloadable
resources. Renders as a native `,e.jsx(n.code,{children:"<a>"}),` with an optional leading icon and a trailing
external-link indicator, in two visual variants and two sizes.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Navigate inline to another page, section, or external resource within text or a list."}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"primary"})," for prominent navigation and ",e.jsx(n.code,{children:"secondary"})," for subdued, contextual links."]}),`
`,e.jsxs(n.li,{children:["Set ",e.jsx(n.code,{children:"isExternal"})," for links that open in a new tab (adds the trailing icon and ",e.jsx(n.code,{children:'rel="noopener noreferrer"'}),")."]}),`
`,e.jsxs(n.li,{children:["For an action that does not change the URL, use ",e.jsx(n.code,{children:"Button"})," instead."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(s,{of:r,sourceState:"shown"}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsx(n.p,{children:"The icon stays 16px at both sizes; only the font size changes."}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsxs(n.p,{children:[`Default and visited links are underlined; hover and active remove the underline.
Disabled links drop their `,e.jsx(n.code,{children:"href"}),` but stay discoverable; loading shows a shimmer
overlay.`]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h2,{id:"with-an-icon",children:"With an icon"}),`
`,e.jsxs(n.p,{children:["A leading icon is set with the ",e.jsx(n.code,{children:"icon"})," prop (o9con name without the ",e.jsx(n.code,{children:"o9con-"}),`
prefix). `,e.jsx(n.code,{children:"isExternal"})," adds a trailing external-link indicator."]}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h2,{id:"in-context",children:"In context"}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:["The vanilla JS version of ",e.jsx(n.code,{children:"ArvoLink"}),`. Inline anchor styled to match the design
system. Use for navigation; for action triggers use `,e.jsx(n.code,{children:"ArvoButton"}),"."]}),`
`,e.jsx(n.h2,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoLink } from '@arvo/js/components/Link';

const el = document.querySelector('#my-link');
const link = ArvoLink.initialize(el, {
  label: 'Read the docs',
  href: 'https://example.com',
  isExternal: true,
});

link.setLabel('New label');
link.setHref('/somewhere');
link.disabled(true);
link.destroy();
`})}),`
`,e.jsx(n.h2,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<a class="arvo-lnk arvo-lnk--primary arvo-lnk--lg" href="https://example.com" target="_blank" rel="noopener noreferrer">
  <span class="arvo-lnk__lbl">Read the docs</span>
  <span class="arvo-lnk__ico o9con o9con-external-link" aria-hidden="true"></span>
</a>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Signature"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onClick"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: MouseEvent) => void"})}),e.jsx("td",{children:"Click handler"})]})})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"js-only",children:"JS only"}),`
`,e.jsx(n.h3,{id:"methods",children:"Methods"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoLink.initialize(element, options)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLAnchorElement"}),", ",e.jsx("code",{children:"ArvoLinkOptions"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoLink"})}),e.jsx("td",{children:"Factory"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLabel(text)"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Update label text"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setHref(href)"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Update navigation target"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setIcon(name)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | null"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Set or remove the trailing icon"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLoading(loading)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Toggle loading state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set disabled state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Remove listeners + clean up DOM"})]})]})]})]})}function w(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(d,{...i})}):d(i)}export{w as default};
