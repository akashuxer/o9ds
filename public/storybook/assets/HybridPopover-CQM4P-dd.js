import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as d,M as t,C as n,a as l}from"./blocks-DLeo0hIy.js";import{H as c,P as o,M as h,S as a,G as x,W as j,a as p,R as m,b as u,L as g,N as v,C as f,F as b,c as y,d as S}from"./HybridPopover.stories-DLPjjPCo.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./ActionMenu-Bz8nuUE_.js";import"./client-DfB1ehiO.js";import"./index18-B-vHVXJV.js";import"./Button-B8O_kk1m.js";import"./useControllableState-BcENo7ec.js";import"./loading-flag-DkqmYwgU.js";import"./IconButton-BgwDUYzG.js";import"./useTooltip-DZu1XpnP.js";import"./index28-DgjIRxoq.js";import"./Search-B0ooNraj.js";import"./MessageAlert-DBQwY950.js";import"./ButtonGroup-Bky2dG1G.js";import"./BannerAlert-DwOPtWj_.js";import"./inline-content-CllLfblQ.js";import"./Link-NIjDRzO0.js";import"./EmptyState-B01eqtyy.js";import"./Checkbox-k9WMnmR3.js";import"./FormLabel-Dn-HbpfA.js";import"./Radio-0NcOE_jm.js";import"./Switch-BDE_dn2p.js";import"./useOverlay-Bo9f1g6f.js";import"./OverlayContext-C5RootgB.js";import"./useFocusTrap-BePVbEUc.js";import"./menu-search-C2FCcKsr.js";import"./Indicator-DI-QBEWN.js";function i(s){const r={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c}),`
`,e.jsx(r.h1,{id:"hybridpopover",children:"HybridPopover"}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsxs(r.p,{children:["Configurable overlay panel that composes ",e.jsx(r.code,{children:"Popover"}),` to render rich,
structured list content. The primary variants are multi-select and
single-select filter lists with optional grouping, select-all (global and
per-group), search with a result counter, drag-reorder, an and/or conditional
toggle, and corner resize handles.`]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"When to use"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:`Build filter panels, column configurators, and other rich list pickers that
need selection plus search, grouping, or reordering in one popover.`}),`
`,e.jsxs(r.li,{children:["Choose ",e.jsx(r.code,{children:"multi"})," for checkboxes, ",e.jsx(r.code,{children:"single"})," for radios, or ",e.jsx(r.code,{children:"none"}),` for a
reorder-only list.`]}),`
`,e.jsxs(r.li,{children:["For a plain contextual panel with no list semantics, use ",e.jsx(r.code,{children:"Popover"}),"."]}),`
`,e.jsxs(r.li,{children:["For a flat list of one-off commands, use ",e.jsx(r.code,{children:"ActionMenu"}),"."]}),`
`]}),`
`,e.jsx(r.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(r.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(n,{of:o,sourceState:"shown"}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(r.h2,{id:"selection-modes",children:"Selection modes"}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(n,{of:a}),`
`,e.jsx(r.h2,{id:"grouping-and-select-all",children:"Grouping and select-all"}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(r.h2,{id:"search",children:"Search"}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(r.h2,{id:"reorder-and-resize",children:"Reorder and resize"}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(r.h2,{id:"states",children:"States"}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(r.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(n,{of:y}),`
`,e.jsx(n,{of:S}),`
`,e.jsx(r.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(r.p,{children:["The vanilla JS version of ",e.jsx(r.code,{children:"ArvoHybridPopover"}),`. A composite popover that combines
selection list, search, optional select-all, optional drag-reorder, optional
conditional logic, and a popover surface. Use for filter panels, column
configurators, and other rich list pickers.`]}),`
`,e.jsx(r.h3,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-js",children:`import { ArvoHybridPopover } from '@arvo/js/components/HybridPopover';

const trigger = document.querySelector('#filter-btn');
const hp = ArvoHybridPopover.attach(trigger, {
  title: 'Filter status',
  hasHeader: true,
  selectionMode: 'multi',
  hasGlobalSelectAll: true,
  search: { placeholder: 'Find...' },
  items: [
    { id: 'open', label: 'Open' },
    { id: 'closed', label: 'Closed' },
  ],
  onChange: (value) => console.log(value),
});

hp.open();
hp.close();
hp.value(['open']);
hp.setItems([...]);
hp.destroy();
`})}),`
`,e.jsx(r.h3,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<div class="arvo-hpop" role="dialog">
  <header class="arvo-hpop__hdr">
    <h2 class="arvo-hpop__ttl">Filter status</h2>
  </header>
  <div class="arvo-hpop__search"><!-- ArvoSearch --></div>
  <div class="arvo-hpop__list" role="listbox">
    <button class="arvo-hpop__item" role="option" data-value="open"><!-- ... --></button>
  </div>
</div>
`})}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h3,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Signature"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(value: string[] | string | null, meta) => void"})}),e.jsx("td",{children:"Fires on selection change"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onReorder"})}),e.jsx("td",{children:e.jsx("code",{children:"(detail: HybridPopoverReorderDetail) => void"})}),e.jsx("td",{children:"Fires on drag-reorder"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onResize"})}),e.jsx("td",{children:e.jsx("code",{children:"(detail: { width: number; height: number }) => void"})}),e.jsx("td",{children:"Fires on resize"})]})]})]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h3,{id:"js-only",children:"JS only"}),`
`,e.jsx(r.h4,{id:"methods",children:"Methods"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoHybridPopover.attach(trigger, cfg)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLElement"}),", ",e.jsx("code",{children:"ArvoHybridPopoverConfig"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoHybridPopover"})}),e.jsx("td",{children:"Attach to a trigger element"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"open()"})," / ",e.jsx("code",{children:"close()"})]}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Open or close the popover"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"value(next?)"})}),e.jsx("td",{children:e.jsx("code",{children:"string[] | string | null | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"string[] | string | null | void"})}),e.jsx("td",{children:"Get or set selection"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setItems(items)"})}),e.jsx("td",{children:e.jsx("code",{children:"HybridPopoverItem[] | HybridPopoverGroup[]"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Replace the item set"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Remove listeners + portaled element"})]})]})]})]})}function re(s={}){const{wrapper:r}={...d(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(i,{...s})}):i(s)}export{re as default};
