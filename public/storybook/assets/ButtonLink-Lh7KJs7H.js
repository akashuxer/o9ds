import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as t,M as l,C as i,a as c}from"./blocks-DLeo0hIy.js";import{B as o,P as d,A as h,a,D as x,L as j,W as u,F as p,N as v}from"./ButtonLink.stories-DENFIzLp.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./loading-flag-DkqmYwgU.js";function r(s){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:o}),`
`,e.jsx(n.h1,{id:"buttonlink",children:"ButtonLink"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsxs(n.p,{children:["An anchor element styled identically to ",e.jsx(n.code,{children:"ArvoButton"}),` -- it looks like a button
but navigates like a link. Renders a native `,e.jsx(n.code,{children:"<a>"}),` with Button's five variants,
three sizes, optional leading icon, and loading state.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use when the primary action is navigation but you want the visual affordance of a button (CTAs, nav cards)."}),`
`,e.jsxs(n.li,{children:["Because it renders a real ",e.jsx(n.code,{children:"<a>"}),", right-click, open-in-new-tab, and copy-URL all behave correctly."]}),`
`,e.jsxs(n.li,{children:["For an action that does not change the URL, use ",e.jsx(n.code,{children:"Button"}),". For an inline text link, use ",e.jsx(n.code,{children:"Link"}),"."]}),`
`,e.jsxs(n.li,{children:["Does not support toggle, ",e.jsx(n.code,{children:"aria-pressed"}),", or a form ",e.jsx(n.code,{children:"type"})," -- those are Button concerns."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(i,{of:d,sourceState:"shown"}),`
`,e.jsx(c,{of:d}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsxs(n.p,{children:[`Loading shows a skeleton shimmer overlay and blocks interaction; disabled removes
the `,e.jsx(n.code,{children:"href"})," while keeping the element discoverable."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.h2,{id:"with-an-icon",children:"With an icon"}),`
`,e.jsxs(n.p,{children:["A leading icon is set with the ",e.jsx(n.code,{children:"icon"})," prop (o9con name without the ",e.jsx(n.code,{children:"o9con-"}),`
prefix).`]}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h2,{id:"full-width",children:"Full width"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h2,{id:"in-a-navigation-bar",children:"In a navigation bar"}),`
`,e.jsx(i,{of:v}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:["The vanilla JS version of ",e.jsx(n.code,{children:"ArvoButtonLink"}),". An ",e.jsx(n.code,{children:"<a>"}),` styled identically to
`,e.jsx(n.code,{children:"ArvoButton"}),". Use when the action is ",e.jsx(n.strong,{children:"navigation"}),` (right-click, open in new
tab, share URL all behave correctly).`]}),`
`,e.jsx(n.h2,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoButtonLink } from '@arvo/js/components/ButtonLink';

const el = document.querySelector('#my-btn-link');
const link = ArvoButtonLink.initialize(el, {
  label: 'View report',
  href: '/reports/42',
  variant: 'primary',
});

link.setLabel('Updated label');
link.setHref('/reports/43');
link.disabled(true);
link.destroy();
`})}),`
`,e.jsx(n.h2,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<a class="arvo-btn arvo-btn--primary arvo-btn--md arvo-btn-link" href="/reports/42" role="button">
  <span class="arvo-btn__lbl">View report</span>
</a>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Signature"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onClick"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: MouseEvent) => void"})}),e.jsx("td",{children:"Click handler"})]})})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"js-only",children:"JS only"}),`
`,e.jsx(n.h3,{id:"methods",children:"Methods"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoButtonLink.initialize(element, options)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLAnchorElement"}),", ",e.jsx("code",{children:"ArvoButtonLinkOptions"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoButtonLink"})}),e.jsx("td",{children:"Factory"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLabel(text)"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Update label text"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setIcon(name)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | null"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Set or remove the leading icon"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setHref(href)"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Update navigation target"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setVariant(v)"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Change visual variant"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setSize(s)"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Change button size"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLoading(loading)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Toggle loading state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set disabled state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Remove listeners + clean up DOM"})]})]})]})]})}function w(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{w as default};
