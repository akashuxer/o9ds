import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as l,M as t,C as s,a as o}from"./blocks-DLeo0hIy.js";import{S as c,P as i,W as h,a,R as x,b as j,F as p,G as u,c as m,I as v,C as g,d as f,e as b,D as S,f as w}from"./Select.stories-DfotZVyR.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./Select-BLh_A-b9.js";import"./useOverlay-Bo9f1g6f.js";import"./OverlayContext-C5RootgB.js";import"./index18-B-vHVXJV.js";import"./menu-search-C2FCcKsr.js";import"./useTooltip-DZu1XpnP.js";import"./index28-DgjIRxoq.js";import"./FormLabel-Dn-HbpfA.js";import"./Search-B0ooNraj.js";import"./loading-flag-DkqmYwgU.js";import"./IconButton-BgwDUYzG.js";import"./useControllableState-BcENo7ec.js";import"./MessageAlert-DBQwY950.js";import"./Button-B8O_kk1m.js";function r(d){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c}),`
`,e.jsx(n.h1,{id:"select",children:"Select"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Single-select dropdown with an optional search/filter field, grouped options
with dividers, inline or tooltip error display, and full form integration.
Defaults to 300px wide; pass `,e.jsx(n.code,{children:"width"})," or ",e.jsx(n.code,{children:"isFullWidth"})," to change."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Choose a single value from a known list of options."}),`
`,e.jsxs(n.li,{children:["Enable ",e.jsx(n.code,{children:"search"})," to filter long option lists, and group options with ",e.jsx(n.code,{children:"hasGroupDividers"}),"."]}),`
`,e.jsxs(n.li,{children:["For free typing with suggestions use ",e.jsx(n.code,{children:"Combobox"}),"; for a bare option list without a trigger use ",e.jsx(n.code,{children:"Listbox"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(s,{of:i,sourceState:"shown"}),`
`,e.jsx(o,{of:i}),`
`,e.jsx(n.h2,{id:"label--value",children:"Label & value"}),`
`,e.jsxs(n.p,{children:["Add a ",e.jsx(n.code,{children:"label"}),", a starting ",e.jsx(n.code,{children:"value"}),", and mark mandatory fields with ",e.jsx(n.code,{children:"isRequired"}),"."]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.p,{children:["Two heights are available: ",e.jsx(n.code,{children:"sm"})," (24px) and ",e.jsx(n.code,{children:"lg"})," (32px, default)."]}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h2,{id:"search--groups",children:"Search & groups"}),`
`,e.jsxs(n.p,{children:["Set ",e.jsx(n.code,{children:"search"}),` to add a filter field inside the popover, and pass grouped items
with `,e.jsx(n.code,{children:"hasGroupDividers"})," to separate sections."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h2,{id:"validation",children:"Validation"}),`
`,e.jsxs(n.p,{children:["Set ",e.jsx(n.code,{children:"isInvalid"})," to show the error border. ",e.jsx(n.code,{children:"errorDisplay"}),` controls whether the
message renders inline below the field or as a tooltip on a trailing icon.`]}),`
`,e.jsx(s,{of:v}),`
`,e.jsx(n.h2,{id:"controlled",children:"Controlled"}),`
`,e.jsxs(n.p,{children:["Pass ",e.jsx(n.code,{children:"value"})," and handle ",e.jsx(n.code,{children:"onChange"})," to own the selection in React state."]}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.h2,{id:"layout",children:"Layout"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"isFullWidth"})," stretches the field to its container; ",e.jsx(n.code,{children:"width"})," sets an explicit CSS width."]}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(s,{of:S}),`
`,e.jsx(s,{of:w}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:["The vanilla JS version of ",e.jsx(n.code,{children:"ArvoSelect"}),`. Single-select dropdown with optional
search/filter, group dividers, inline error, and full form integration. Defaults
to 300px wide; pass `,e.jsx(n.code,{children:"width"})," or ",e.jsx(n.code,{children:"isFullWidth"})," to change."]}),`
`,e.jsx(n.h2,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoSelect } from '@arvo/js/components/Select';

const el = document.querySelector('#my-sel');
const sel = ArvoSelect.initialize(el, {
  label: 'Fruit',
  items: [
    { id: 'apple', label: 'Apple', value: 'apple' },
    { id: 'banana', label: 'Banana', value: 'banana' },
  ],
  onChange: (item) => console.log(item),
});

sel.value('banana');
sel.value();          // => current value (unknown)
sel.setItems([...]);
sel.open();
sel.close();
sel.disabled(true);
sel.setError('Required');
sel.destroy();
`})}),`
`,e.jsx(n.h2,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="arvo-sel arvo-sel--lg">
  <label class="arvo-sel__lbl">Fruit</label>
  <button class="arvo-sel__trigger" type="button" aria-haspopup="listbox" aria-expanded="false">
    <span class="arvo-sel__value">Apple</span>
    <span class="arvo-sel__caret o9con o9con-caret-down" aria-hidden="true"></span>
  </button>
</div>
`})}),`
`,e.jsxs(n.p,{children:["The popover surface uses the same DOM as ",e.jsx(n.code,{children:"ArvoListbox"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Signature"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(item: SelectOptionData | null, index: number) => boolean | void"})}),e.jsxs("td",{children:["Fires on selection. Return ",e.jsx("code",{children:"false"})," to suppress."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onOpen"})}),e.jsx("td",{children:e.jsx("code",{children:"() => boolean | void"})}),e.jsx("td",{children:"Fires when popover opens"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onClose"})}),e.jsx("td",{children:e.jsx("code",{children:"() => boolean | void"})}),e.jsx("td",{children:"Fires when popover closes"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"js-only",children:"JS only"}),`
`,e.jsx(n.h3,{id:"methods",children:"Methods"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoSelect.initialize(element, options)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLElement"}),", ",e.jsx("code",{children:"ArvoSelectOptions"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoSelect"})}),e.jsx("td",{children:"Factory"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"value(next?)"})}),e.jsx("td",{children:e.jsx("code",{children:"unknown"})}),e.jsx("td",{children:e.jsx("code",{children:"unknown | void"})}),e.jsx("td",{children:"Get or set selection"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setItems(items)"})}),e.jsx("td",{children:e.jsx("code",{children:"SelectOptionData[] | ListGroup<SelectOptionData>[]"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Replace item set"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"open()"})," / ",e.jsx("code",{children:"close()"})]}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Open or close popover"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setError(msg)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | false"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Set or clear inline error message"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLoading(loading)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Toggle loading state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set disabled state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Remove listeners + clean up DOM"})]})]})]}),`
`,e.jsx(n.h3,{id:"custom-events",children:"Custom Events"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"sel:change"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: CustomEvent<{ item: SelectOptionData | null; index: number }>) => void"})}),e.jsx("td",{children:"Fires on selection"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"sel:open"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: CustomEvent) => void"})}),e.jsx("td",{children:"Fires when popover opens"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"sel:close"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: CustomEvent) => void"})}),e.jsx("td",{children:"Fires when popover closes"})]})]})]})]})}function H(d={}){const{wrapper:n}={...l(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(r,{...d})}):r(d)}export{H as default};
