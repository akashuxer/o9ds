import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as l,M as o,C as s,a as r}from"./blocks-DLeo0hIy.js";import{L as c,P as d,M as h,a,W as x,G as j,S as p,b as u,D as m,c as b,d as v,E as g,C as f,e as y,T as w}from"./Listbox.stories-ccQjhE8B.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./index18-B-vHVXJV.js";import"./menu-search-C2FCcKsr.js";import"./FormLabel-Dn-HbpfA.js";import"./Search-B0ooNraj.js";import"./useTooltip-DZu1XpnP.js";import"./index28-DgjIRxoq.js";import"./loading-flag-DkqmYwgU.js";import"./IconButton-BgwDUYzG.js";import"./useControllableState-BcENo7ec.js";import"./MessageAlert-DBQwY950.js";import"./Button-B8O_kk1m.js";function t(i){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
`,e.jsx(n.h1,{id:"listbox",children:"Listbox"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsx(n.p,{children:`Inline, always-visible option list with single- or multi-select, optional
search, grouped options with dividers, item icons, and full keyboard
navigation.`}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Present an always-visible list of options for single- or multi-select (",e.jsx(n.code,{children:"isMultiple"}),")."]}),`
`,e.jsxs(n.li,{children:["Enable ",e.jsx(n.code,{children:"search"})," to filter long lists, and group options with ",e.jsx(n.code,{children:"hasGroupDividers"}),"."]}),`
`,e.jsxs(n.li,{children:["When you need a trigger that opens the list in a popover, use ",e.jsx(n.code,{children:"Select"})," (or ",e.jsx(n.code,{children:"Combobox"})," for free typing)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(s,{of:d,sourceState:"shown"}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(n.h2,{id:"selection",children:"Selection"}),`
`,e.jsxs(n.p,{children:["Single-select by default; set ",e.jsx(n.code,{children:"isMultiple"}),` for multi-select, or seed an initial
choice with `,e.jsx(n.code,{children:"defaultValue"}),"."]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.h2,{id:"groups",children:"Groups"}),`
`,e.jsxs(n.p,{children:[`Pass grouped items to render sections, optionally separated with
`,e.jsx(n.code,{children:"hasGroupDividers"}),"."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h2,{id:"search",children:"Search"}),`
`,e.jsxs(n.p,{children:["Set ",e.jsx(n.code,{children:"search"})," to add a filter field above the options."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h2,{id:"icons",children:"Icons"}),`
`,e.jsxs(n.p,{children:["Items may carry a leading ",e.jsx(n.code,{children:"icon"}),"."]}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.p,{children:["Three densities are available: ",e.jsx(n.code,{children:"sm"}),", ",e.jsx(n.code,{children:"md"})," (default), and ",e.jsx(n.code,{children:"lg"}),"."]}),`
`,e.jsx(s,{of:void 0}),`
`,e.jsx(s,{of:void 0}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(n.p,{children:`Individual options or the whole list can be disabled, and the list shows a
skeleton overlay while loading.`}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(s,{of:v}),`
`,e.jsx(n.h2,{id:"empty",children:"Empty"}),`
`,e.jsxs(n.p,{children:["When there are no items, an empty message is shown. Override it with ",e.jsx(n.code,{children:"emptyMessage"}),"."]}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.h2,{id:"controlled",children:"Controlled"}),`
`,e.jsxs(n.p,{children:["Pass ",e.jsx(n.code,{children:"value"})," and handle ",e.jsx(n.code,{children:"onChange"})," to own the selection in React state."]}),`
`,e.jsx(s,{of:y}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(s,{of:w}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:["The vanilla JS version of ",e.jsx(n.code,{children:"ArvoListbox"}),`. Inline option list with single- or
multi-select, optional search, group dividers, and keyboard navigation.`]}),`
`,e.jsx(n.h2,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoListbox } from '@arvo/js/components/Listbox';

const el = document.querySelector('#my-lb');
const lb = ArvoListbox.initialize(el, {
  label: 'Color',
  items: [
    { id: 'red', label: 'Red', value: 'red' },
    { id: 'green', label: 'Green', value: 'green' },
  ],
  isMultiple: false,
  onChange: (value) => console.log(value),
});

lb.value('green');
lb.setItems([...]);
lb.disabled(true);
lb.setLoading(true);
lb.destroy();
`})}),`
`,e.jsx(n.h2,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="arvo-listbox" role="listbox" aria-label="Color">
  <div class="arvo-listbox__option" role="option" data-value="red">Red</div>
  <div class="arvo-listbox__option active" role="option" data-value="green" aria-selected="true">Green</div>
</div>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Signature"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(value: unknown | unknown[], option: ListboxOptionData) => void"})}),e.jsx("td",{children:"Fires on selection"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onHighlight"})}),e.jsx("td",{children:e.jsx("code",{children:"(value: unknown, option: ListboxOptionData) => void"})}),e.jsx("td",{children:"Fires on highlight"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onFilter"})}),e.jsx("td",{children:e.jsx("code",{children:"(query: string, matchCount: number) => void"})}),e.jsx("td",{children:"Fires on search input"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"js-only",children:"JS only"}),`
`,e.jsx(n.h3,{id:"methods",children:"Methods"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoListbox.initialize(element, options)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLElement"}),", ",e.jsx("code",{children:"ArvoListboxOptions"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoListbox"})}),e.jsx("td",{children:"Factory"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"value(next?)"})}),e.jsx("td",{children:e.jsx("code",{children:"unknown | unknown[]"})}),e.jsx("td",{children:e.jsx("code",{children:"unknown | unknown[] | void"})}),e.jsx("td",{children:"Get or set selection"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setItems(items)"})}),e.jsx("td",{children:e.jsx("code",{children:"ListboxOptionData[] | ListGroup<...>[]"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Replace the item set"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLoading(loading)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Toggle loading state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set disabled state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Remove listeners + clean up DOM"})]})]})]}),`
`,e.jsx(n.h3,{id:"custom-events",children:"Custom Events"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"listbox:change"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: CustomEvent<{ value: unknown | unknown[]; option: ListboxOptionData }>) => void"})}),e.jsx("td",{children:"Fires on selection"})]})})]})]})}function z(i={}){const{wrapper:n}={...l(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{z as default};
