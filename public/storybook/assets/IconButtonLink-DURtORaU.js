import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{u as d,M as c,C as s,a as l}from"./blocks-DLeo0hIy.js";import{I as o,P as t,A as a,a as h,D as x,L as j,S as p}from"./IconButtonLink.stories-BadMFsto.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./useTooltip-DZu1XpnP.js";import"./index28-DgjIRxoq.js";import"./loading-flag-DkqmYwgU.js";function r(i){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:o}),`
`,n.jsx(e.h1,{id:"iconbuttonlink",children:"IconButtonLink"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,n.jsxs(e.p,{children:["An anchor element styled identically to ",n.jsx(e.code,{children:"ArvoIconButton"}),` -- a square, icon-only
control that navigates like a link. A `,n.jsx(e.code,{children:"tooltip"}),` is required and also provides the
accessible name. Renders a native `,n.jsx(e.code,{children:"<a>"})," with IconButton's variants and sizes."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"When to use"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Compact, icon-only navigation affordances (external-link icons, social/nav shortcuts)."}),`
`,n.jsxs(e.li,{children:["Always provide a ",n.jsx(e.code,{children:"tooltip"}),"; it sets ",n.jsx(e.code,{children:"aria-label"})," because there is no visible text label."]}),`
`,n.jsxs(e.li,{children:["Because it renders a real ",n.jsx(e.code,{children:"<a>"}),", right-click and open-in-new-tab behave correctly."]}),`
`,n.jsxs(e.li,{children:["For an icon-only action that does not navigate, use ",n.jsx(e.code,{children:"IconButton"})," instead."]}),`
`]}),`
`,n.jsx(e.h2,{id:"playground",children:"Playground"}),`
`,n.jsx(e.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,n.jsx(s,{of:t,sourceState:"shown"}),`
`,n.jsx(l,{of:t}),`
`,n.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(s,{of:a}),`
`,n.jsx(e.h2,{id:"sizes",children:"Sizes"}),`
`,n.jsx(s,{of:h}),`
`,n.jsx(e.h2,{id:"states",children:"States"}),`
`,n.jsxs(e.p,{children:[`Loading shows a skeleton shimmer overlay and blocks interaction; disabled removes
the `,n.jsx(e.code,{children:"href"})," while keeping the element discoverable."]}),`
`,n.jsx(s,{of:x}),`
`,n.jsx(s,{of:j}),`
`,n.jsx(e.h2,{id:"in-an-icon-link-bar",children:"In an icon link bar"}),`
`,n.jsx(s,{of:p}),`
`,n.jsx(e.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,n.jsxs(e.p,{children:["The vanilla JS version of ",n.jsx(e.code,{children:"ArvoIconButtonLink"}),". An ",n.jsx(e.code,{children:"<a>"}),` styled identically to
`,n.jsx(e.code,{children:"ArvoIconButton"}),". Use when the action is ",n.jsx(e.strong,{children:"navigation"}),` (right-click, open in
new tab, etc.).`]}),`
`,n.jsx(e.h2,{id:"installation-snippet",children:"Installation snippet"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { ArvoIconButtonLink } from '@arvo/js/components/IconButtonLink';

const el = document.querySelector('#my-icon-link');
const link = ArvoIconButtonLink.initialize(el, {
  icon: 'external-link',
  href: 'https://example.com',
  tooltip: 'Open external',
  variant: 'tertiary',
});

link.setIcon('plus');
link.setHref('/elsewhere');
link.disabled(true);
link.destroy();
`})}),`
`,n.jsx(e.h2,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<a class="arvo-icon-btn arvo-btn--tertiary arvo-btn--md" href="https://example.com" aria-label="Open external" title="Open external">
  <span class="arvo-btn__ico o9con o9con-external-link" aria-hidden="true"></span>
</a>
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Callback"}),n.jsx("th",{children:"Signature"}),n.jsx("th",{children:"Description"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"onClick"})}),n.jsx("td",{children:n.jsx("code",{children:"(event: MouseEvent) => void"})}),n.jsx("td",{children:"Click handler"})]})})]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"js-only",children:"JS only"}),`
`,n.jsx(e.h3,{id:"methods",children:"Methods"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Method"}),n.jsx("th",{children:"Parameters"}),n.jsx("th",{children:"Returns"}),n.jsx("th",{children:"Description"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"ArvoIconButtonLink.initialize(element, options)"})}),n.jsxs("td",{children:[n.jsx("code",{children:"HTMLAnchorElement"}),", ",n.jsx("code",{children:"ArvoIconButtonLinkOptions"})]}),n.jsx("td",{children:n.jsx("code",{children:"ArvoIconButtonLink"})}),n.jsx("td",{children:"Factory"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"setIcon(name)"})}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:n.jsx("code",{children:"void"})}),n.jsx("td",{children:"Swap the icon"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"setHref(href)"})}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:n.jsx("code",{children:"void"})}),n.jsx("td",{children:"Update navigation target"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"setTooltip(text)"})}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:n.jsx("code",{children:"void"})}),n.jsx("td",{children:"Update tooltip + aria-label"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"disabled(state?)"})}),n.jsx("td",{children:n.jsx("code",{children:"boolean | undefined"})}),n.jsx("td",{children:n.jsx("code",{children:"boolean | void"})}),n.jsx("td",{children:"Get or set disabled state"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"destroy()"})}),n.jsx("td",{children:"--"}),n.jsx("td",{children:n.jsx("code",{children:"void"})}),n.jsx("td",{children:"Remove listeners + clean up DOM"})]})]})]})]})}function S(i={}){const{wrapper:e}={...d(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{S as default};
