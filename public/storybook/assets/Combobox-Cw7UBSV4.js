import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as t,M as o,C as s,a as l}from"./blocks-DLeo0hIy.js";import{C as c,P as i,W as h,a,R as x,S as j,b as p,G as u,c as b,D as m,L as v,d as g,F as f,e as C,f as y,A as S,T as w}from"./Combobox.stories-ClWXUfHr.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./Combobox-BRLEGBie.js";import"./useOverlay-Bo9f1g6f.js";import"./OverlayContext-C5RootgB.js";import"./index18-B-vHVXJV.js";import"./useTooltip-DZu1XpnP.js";import"./index28-DgjIRxoq.js";import"./FormLabel-Dn-HbpfA.js";import"./IconButton-BgwDUYzG.js";import"./useControllableState-BcENo7ec.js";import"./loading-flag-DkqmYwgU.js";import"./MessageAlert-DBQwY950.js";import"./Button-B8O_kk1m.js";function r(d){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
`,e.jsx(n.h1,{id:"combobox",children:"Combobox"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Like ",e.jsx(n.code,{children:"Select"}),` but with a free-text input that filters the dropdown. Supports
custom filter functions, grouped options with dividers, a clear button, and
inline or tooltip error display. Defaults to 300px wide; pass `,e.jsx(n.code,{children:"width"}),` or
`,e.jsx(n.code,{children:"isFullWidth"})," to change."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Pick a single value from a list while letting the user type to filter."}),`
`,e.jsxs(n.li,{children:["Provide a ",e.jsx(n.code,{children:"filterFn"})," for custom matching, or group options with ",e.jsx(n.code,{children:"hasGroupDividers"}),"."]}),`
`,e.jsxs(n.li,{children:["For a fixed list with no free typing use ",e.jsx(n.code,{children:"Select"}),"; for a bare option list without a trigger use ",e.jsx(n.code,{children:"Listbox"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(s,{of:i,sourceState:"shown"}),`
`,e.jsx(l,{of:i}),`
`,e.jsx(n.h2,{id:"label--value",children:"Label & value"}),`
`,e.jsxs(n.p,{children:["Add a ",e.jsx(n.code,{children:"label"}),", a starting ",e.jsx(n.code,{children:"value"}),", and mark mandatory fields with ",e.jsx(n.code,{children:"isRequired"}),"."]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.p,{children:["Two heights are available: ",e.jsx(n.code,{children:"sm"})," (24px) and ",e.jsx(n.code,{children:"lg"})," (32px, default)."]}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h2,{id:"clearable--groups",children:"Clearable & groups"}),`
`,e.jsxs(n.p,{children:["A clear button (",e.jsx(n.code,{children:"isClearable"}),`) resets the value, and grouped items render with
`,e.jsx(n.code,{children:"hasGroupDividers"}),"."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(s,{of:v}),`
`,e.jsx(n.h2,{id:"controlled",children:"Controlled"}),`
`,e.jsxs(n.p,{children:["Own both the selected ",e.jsx(n.code,{children:"value"})," and the typed ",e.jsx(n.code,{children:"inputValue"})," in React state."]}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.h2,{id:"layout",children:"Layout"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"isFullWidth"})," stretches the field to its container; ",e.jsx(n.code,{children:"width"})," sets an explicit CSS width."]}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(s,{of:C}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(s,{of:y}),`
`,e.jsx(s,{of:S}),`
`,e.jsx(s,{of:w}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:["The vanilla JS version of ",e.jsx(n.code,{children:"ArvoCombobox"}),". Like ",e.jsx(n.code,{children:"ArvoSelect"}),` but with a free-text
input that filters the dropdown. Supports custom filter functions, group
dividers, `,e.jsx(n.code,{children:"isClearable"}),", and inline error."]}),`
`,e.jsx(n.h2,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoCombobox } from '@arvo/js/components/Combobox';

const el = document.querySelector('#my-cb');
const c = ArvoCombobox.initialize(el, {
  label: 'Fruit',
  items: [
    { id: 'apple', label: 'Apple', value: 'apple' },
    { id: 'banana', label: 'Banana', value: 'banana' },
  ],
  isClearable: true,
  onChange: (item) => console.log(item),
  onInputChange: (text) => console.log('typed:', text),
});

c.value('banana');
c.inputValue('app');
c.setItems([...]);
c.clear();
c.disabled(true);
c.setLoading(true);
c.setError('Required');
c.destroy();
`})}),`
`,e.jsx(n.h2,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="arvo-combobox arvo-combobox--lg">
  <label class="arvo-combobox__lbl">Fruit</label>
  <div class="arvo-combobox__field">
    <input class="arvo-combobox__input" type="text" role="combobox" aria-expanded="false" />
    <button class="arvo-icon-btn arvo-btn--tertiary arvo-btn--sm arvo-combobox__clear" type="button" aria-label="Clear">
      <span class="arvo-btn__ico o9con o9con-times-circle" aria-hidden="true"></span>
    </button>
    <span class="arvo-combobox__caret o9con o9con-caret-down" aria-hidden="true"></span>
  </div>
</div>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Signature"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(item: ComboboxOptionData, index: number) => boolean | void"})}),e.jsxs("td",{children:["Fires on selection. Return ",e.jsx("code",{children:"false"})," to suppress."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onInputChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(value: string) => void"})}),e.jsx("td",{children:"Fires per keystroke"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"js-only",children:"JS only"}),`
`,e.jsx(n.h3,{id:"methods",children:"Methods"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoCombobox.initialize(element, options)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLElement"}),", ",e.jsx("code",{children:"ArvoComboboxOptions"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoCombobox"})}),e.jsx("td",{children:"Factory"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"value(next?)"})}),e.jsx("td",{children:e.jsx("code",{children:"unknown"})}),e.jsx("td",{children:e.jsx("code",{children:"unknown | void"})}),e.jsx("td",{children:"Get or set selected value"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"inputValue(next?)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"string | void"})}),e.jsx("td",{children:"Get or set the text-input value"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setItems(items)"})}),e.jsx("td",{children:e.jsx("code",{children:"ComboboxOptionData[] | ListGroup<...>[]"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Replace the item set"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"clear()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Clear value + input"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setError(msg)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | false"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Set or clear inline error message"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLoading(loading)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Toggle loading state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set disabled state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Remove listeners + clean up DOM"})]})]})]}),`
`,e.jsx(n.h3,{id:"custom-events",children:"Custom Events"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"combobox:change"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: CustomEvent<{ item: ComboboxOptionData; index: number }>) => void"})}),e.jsx("td",{children:"Fires on selection"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"combobox:input"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: CustomEvent<{ value: string }>) => void"})}),e.jsx("td",{children:"Per keystroke"})]})]})]})]})}function X(d={}){const{wrapper:n}={...t(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(r,{...d})}):r(d)}export{X as default};
