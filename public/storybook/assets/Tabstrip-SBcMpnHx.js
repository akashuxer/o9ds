import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as r,M as l,C as s,a as o}from"./blocks-DLeo0hIy.js";import{T as a,P as t,A as c,S as h,W as x,a as j,b,c as p,d as v,D as m,L as u,e as g,I as f,O as w}from"./Tabstrip.stories-BG_iuhxk.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./Tabstrip-B41dlssz.js";import"./IconButton-BgwDUYzG.js";import"./useTooltip-DZu1XpnP.js";import"./index28-DgjIRxoq.js";import"./useControllableState-BcENo7ec.js";import"./loading-flag-DkqmYwgU.js";import"./ActionMenu-Bz8nuUE_.js";import"./client-DfB1ehiO.js";import"./index18-B-vHVXJV.js";import"./Button-B8O_kk1m.js";import"./Search-B0ooNraj.js";import"./MessageAlert-DBQwY950.js";import"./ButtonGroup-Bky2dG1G.js";import"./BannerAlert-DwOPtWj_.js";import"./inline-content-CllLfblQ.js";import"./Link-NIjDRzO0.js";import"./EmptyState-B01eqtyy.js";import"./Checkbox-k9WMnmR3.js";import"./FormLabel-Dn-HbpfA.js";import"./Radio-0NcOE_jm.js";import"./Switch-BDE_dn2p.js";import"./useOverlay-Bo9f1g6f.js";import"./OverlayContext-C5RootgB.js";import"./useFocusTrap-BePVbEUc.js";import"./menu-search-C2FCcKsr.js";import"./Indicator-DI-QBEWN.js";function d(i){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:a}),`
`,e.jsx(n.h1,{id:"tabstrip",children:"Tabstrip"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Horizontal tab navigation for switching between related content panels. Supports
`,e.jsx(n.code,{children:"primary"})," and ",e.jsx(n.code,{children:"secondary"}),` variants, two sizes, optional tab icons, closable and
pinnable tabs, and an overflow menu for constrained widths.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Switch between sibling views or panels that share the same surrounding context."}),`
`,e.jsxs(n.li,{children:["Keep labels short; associate each tab with its content via ",e.jsx(n.code,{children:"panelId"})," / ",e.jsx(n.code,{children:"aria-controls"}),"."]}),`
`,e.jsxs(n.li,{children:["Enable ",e.jsx(n.code,{children:"isClosable"})," and/or ",e.jsx(n.code,{children:"isPinnable"})," for document-style tab management."]}),`
`,e.jsx(n.li,{children:"For navigation that changes the URL, use links or a side nav instead."}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(s,{of:t,sourceState:"shown"}),`
`,e.jsx(o,{of:t}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.p,{children:["The default size is large (",e.jsx(n.code,{children:"lg"}),"); ",e.jsx(n.code,{children:"sm"})," produces a more compact strip."]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h2,{id:"closable-and-pinnable-tabs",children:"Closable and pinnable tabs"}),`
`,e.jsxs(n.p,{children:[`Closable tabs show a close button; pinnable tabs show a pin toggle. Set
`,e.jsx(n.code,{children:'actionsVisibility="always"'})," to keep the actions visible instead of on hover."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(n.p,{children:"A single tab can be disabled, or the whole strip can be disabled or shown loading."}),`
`,e.jsx(s,{of:v}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h2,{id:"with-content-panels",children:"With content panels"}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.h2,{id:"interactive",children:"Interactive"}),`
`,e.jsx(n.p,{children:"Controlled selection with closable tabs."}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.h2,{id:"overflow",children:"Overflow"}),`
`,e.jsx(n.p,{children:"When tabs exceed the available width, surface the remainder in a dropdown."}),`
`,e.jsx(s,{of:w}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:["The vanilla JS version of ",e.jsx(n.code,{children:"ArvoTabstrip"}),`. Horizontal tab list with optional
close buttons, pin buttons, and overflow handling via `,e.jsx(n.code,{children:"ArvoActionMenu"}),"."]}),`
`,e.jsx(n.h2,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoTabstrip } from '@arvo/js';

const el = document.querySelector('#my-tabs');
const ts = ArvoTabstrip.initialize(el, {
  tabs: [
    { id: 'overview', label: 'Overview' },
    { id: 'analytics', label: 'Analytics' },
  ],
  isClosable: true,
  defaultSelectedId: 'overview',
  onSelect: ({ id }) => console.log(id),
  onClose: ({ id }) => console.log('close', id),
});

ts.select('analytics');
ts.addTab({ id: 'reports', label: 'Reports' });
ts.removeTab('analytics');
ts.disabled(true);
ts.destroy();
`})}),`
`,e.jsx(n.h2,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="arvo-tabs arvo-tabs--primary arvo-tabs--lg">
  <div class="arvo-tabs__list" role="tablist" aria-orientation="horizontal" aria-label="Tabs">
    <div class="arvo-tabs__tab active" role="tab" data-tab-id="overview" aria-selected="true" tabindex="0">
      <span class="arvo-tabs__tab-lft">
        <span class="arvo-tabs__tab-lbl">Overview</span>
      </span>
    </div>
    <div class="arvo-tabs__tab" role="tab" data-tab-id="analytics" aria-selected="false" tabindex="-1">
      <span class="arvo-tabs__tab-lft">
        <span class="arvo-tabs__tab-lbl">Analytics</span>
      </span>
    </div>
  </div>
  <!-- Overflow trigger appears when .has-overflow is set on the root -->
  <div class="arvo-tabs__overflow-btn"></div>
</div>
`})}),`
`,e.jsxs(n.p,{children:["Each tab is a ",e.jsx(n.code,{children:'<div role="tab">'})," (not ",e.jsx(n.code,{children:"<button>"}),"). The ",e.jsx(n.code,{children:"__list"}),` element owns
`,e.jsx(n.code,{children:'role="tablist"'}),". Closable / pinnable tabs render an ",e.jsx(n.code,{children:"__tab-actions"}),` slot with
`,e.jsx(n.code,{children:"ArvoIconButton"})," children inside ",e.jsx(n.code,{children:"__tab-lft"}),`'s sibling position. Leading icons
appear inside `,e.jsx(n.code,{children:"__tab-lft"})," as ",e.jsx(n.code,{children:'<span class="arvo-tabs__tab-ico o9con ...">'}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Signature"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onSelect"})}),e.jsx("td",{children:e.jsx("code",{children:"(detail: { id: string; index: number }) => void"})}),e.jsx("td",{children:"Fires on tab select"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onClose"})}),e.jsx("td",{children:e.jsx("code",{children:"(detail: { id: string; index: number }) => void"})}),e.jsx("td",{children:"Fires on close button"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onPin"})}),e.jsx("td",{children:e.jsx("code",{children:"(detail: { id: string; pinned: boolean; tabOrder: string[] }) => void"})}),e.jsx("td",{children:"Fires on pin toggle"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"js-only",children:"JS only"}),`
`,e.jsx(n.h3,{id:"methods",children:"Methods"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoTabstrip.initialize(element, options)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLElement"}),", ",e.jsx("code",{children:"ArvoTabstripOptions"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoTabstrip"})}),e.jsx("td",{children:"Static factory."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"select(id)"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Select a tab by id. No-op if the tab is disabled."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"selectedId()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"string | null"})}),e.jsx("td",{children:"Returns the currently selected tab id (or null)."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"addTab(tab, index?)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"TabItem"}),", ",e.jsx("code",{children:"number?"})]}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsxs("td",{children:["Append (or insert at ",e.jsx("code",{children:"index"}),") a new tab."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"removeTab(id)"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Remove a tab by id. If it was selected, the next enabled tab is auto-selected."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLoading(isLoading)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Toggle the parent-controlled loading state."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set the disabled state of the whole strip."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Remove listeners, tear down inner components, and clean up DOM."})]})]})]}),`
`,e.jsx(n.h3,{id:"custom-events",children:"Custom Events"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Detail"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"tabs:select"})}),e.jsx("td",{children:e.jsx("code",{children:"{ id: string; index: number }"})}),e.jsx("td",{children:"Fires on tab select"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"tabs:close"})}),e.jsx("td",{children:e.jsx("code",{children:"{ id: string; index: number }"})}),e.jsx("td",{children:"Fires on close button click"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"tabs:pin"})}),e.jsx("td",{children:e.jsx("code",{children:"{ id: string; pinned: boolean; tabOrder: string[] }"})}),e.jsxs("td",{children:["Fires on pin toggle. ",e.jsx("code",{children:"tabOrder"})," is the new display order."]})]})]})]})]})}function ne(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(d,{...i})}):d(i)}export{ne as default};
