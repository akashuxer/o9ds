import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as o,M as l,C as t,a as d}from"./blocks-DLeo0hIy.js";import{E as c,P as r,N as a,S as h,H as x,I as j,A as u}from"./EmptyState.stories-PZWOZvti.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./EmptyState-B01eqtyy.js";import"./Button-B8O_kk1m.js";import"./useControllableState-BcENo7ec.js";import"./loading-flag-DkqmYwgU.js";import"./Link-NIjDRzO0.js";function i(s){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(n.h1,{id:"emptystate",children:"EmptyState"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsx(n.p,{children:`A centered figure -- illustration, title, message, and optional primary /
secondary buttons plus a link -- shown when a view has no content to display.
The illustration scales up to the size cap and shrinks with its host.`}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`A search or filter returned nothing, and you can offer a way back (reset
filters, clear the search).`}),`
`,e.jsx(n.li,{children:`A list, table, or dashboard has no records yet and you want to guide the user
toward the first action.`}),`
`,e.jsx(n.li,{children:"A restricted or error view needs a friendly explanation instead of a blank area."}),`
`,e.jsxs(n.li,{children:["For transient confirmations or dismissible notices, use ",e.jsx(n.code,{children:"Toast"}),`,
`,e.jsx(n.code,{children:"BannerAlert"}),", or ",e.jsx(n.code,{children:"MessageAlert"})," instead."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(t,{of:r,sourceState:"shown"}),`
`,e.jsx(d,{of:r}),`
`,e.jsx(n.h2,{id:"real-world-no-search-results",children:"Real-world: no search results"}),`
`,e.jsx(n.p,{children:`The most common use -- a search or filter returned nothing; offer recovery
actions.`}),`
`,e.jsx(t,{of:a}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.p,{children:["The illustration cap grows from ",e.jsx(n.code,{children:"sm"})," to ",e.jsx(n.code,{children:"xl"}),"; typography scales with size."]}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(n.h2,{id:"orientation",children:"Orientation"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"horizontal"})," places the illustration to the left of a left-aligned body."]}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(n.h2,{id:"illustration-variants",children:"Illustration variants"}),`
`,e.jsxs(n.p,{children:["Pass a semantic token (",e.jsx(n.code,{children:"no-results"}),", ",e.jsx(n.code,{children:"no-data"}),") or any ",e.jsx(n.code,{children:"o9illus-*"})," name."]}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(n.h2,{id:"action-permutations",children:"Action permutations"}),`
`,e.jsx(n.p,{children:"Primary, secondary, and link actions are all optional and composable."}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:["The vanilla JS ",e.jsx(n.code,{children:"ArvoEmptyState"}),` mounts into a host element and accepts the same
options as the React props.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoEmptyState } from '@arvo/js';

const host = document.querySelector('#results');
ArvoEmptyState.initialize(host, {
  illustration: 'no-results',
  title: 'No results found',
  message: 'No invoices match your filters. Try widening the date range or clearing the search.',
  primaryAction: { label: 'Reset filters', onClick: () => resetFilters() },
  secondaryAction: { label: 'Clear search', onClick: () => clearSearch() },
});
`})}),`
`,e.jsx(n.h3,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Option"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"size"})}),e.jsx("td",{children:e.jsx("code",{children:"'sm' | 'md' | 'lg' | 'xl'"})}),e.jsxs("td",{children:["Visual scale. Defaults to ",e.jsx("code",{children:"md"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"orientation"})}),e.jsx("td",{children:e.jsx("code",{children:"'vertical' | 'horizontal'"})}),e.jsxs("td",{children:["Layout direction. Defaults to ",e.jsx("code",{children:"vertical"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"illustration"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsxs("td",{children:[e.jsx("code",{children:"no-results"}),", ",e.jsx("code",{children:"no-data"}),", or any ",e.jsx("code",{children:"o9illus-*"})," name."]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"title"})," / ",e.jsx("code",{children:"message"})]}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"Heading and supporting text."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"primaryAction"})," / ",e.jsx("code",{children:"secondaryAction"})]}),e.jsx("td",{children:e.jsx("code",{children:"{ label, onClick, variant?, icon?, isDisabled? }"})}),e.jsx("td",{children:"Optional action buttons."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"link"})}),e.jsx("td",{children:e.jsx("code",{children:"{ label, href, onClick?, icon?, isExternal? }"})}),e.jsx("td",{children:"Optional below-buttons link."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isAnimated"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsxs("td",{children:["Float animation on the illustration. Defaults to ",e.jsx("code",{children:"true"}),"."]})]})]})]})]})}function z(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{z as default};
