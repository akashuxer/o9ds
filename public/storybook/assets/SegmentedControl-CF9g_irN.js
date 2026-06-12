import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as l,M as i,C as s,a as d}from"./blocks-DLeo0hIy.js";import{S as c,P as t,a,b as h,c as x,L as j,T as u,F as p,d as m,C as g,I as v,e as b}from"./SegmentedControl.stories-DGj4eYpa.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./useControllableState-BcENo7ec.js";import"./loading-flag-DkqmYwgU.js";function o(r){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
`,e.jsx(n.h1,{id:"segmentedcontrol",children:"SegmentedControl"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsx(n.p,{children:`Compact single-select control for choosing between peer values that set a
setting, view, filter, preference, or boolean / operator (List / Grid,
Day / Week / Month, AND / OR). Renders radio-group semantics.`}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Choose between a small set of mutually exclusive peer values (List / Grid /
Kanban, Day / Week / Month, AND / OR).`}),`
`,e.jsxs(n.li,{children:["Prefer it over ",e.jsx(n.code,{children:"ButtonGroup"}),` when the control selects a setting or value
rather than firing toolbar commands -- it uses radio-group semantics
(`,e.jsx(n.code,{children:"aria-checked"}),"), and arrow keys move and select in one step."]}),`
`,e.jsxs(n.li,{children:["Keep option counts small (2-5) with short labels; use ",e.jsx(n.code,{children:"isIconOnly"}),` for very
compact toolbars.`]}),`
`,e.jsxs(n.li,{children:["For multi-select toggles or command toolbars, use ",e.jsx(n.code,{children:"ButtonGroup"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(s,{of:t,sourceState:"shown"}),`
`,e.jsx(d,{of:t}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h2,{id:"option-patterns",children:"Option patterns"}),`
`,e.jsx(n.p,{children:"Segmented controls suit short, mutually exclusive value sets."}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h2,{id:"controlled",children:"Controlled"}),`
`,e.jsxs(n.p,{children:["Drive ",e.jsx(n.code,{children:"value"})," from state and react to ",e.jsx(n.code,{children:"onChange"}),"."]}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.h2,{id:"icon-only",children:"Icon only"}),`
`,e.jsxs(n.p,{children:["Set ",e.jsx(n.code,{children:"isIconOnly"}),"; the item ",e.jsx(n.code,{children:"label"})," still drives the tooltip and ",e.jsx(n.code,{children:"aria-label"}),"."]}),`
`,e.jsx(s,{of:v}),`
`,e.jsx(n.h2,{id:"recipes",children:"Recipes"}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:[`Compact single-select control for choosing between peer values that set a
setting, view, filter, preference, or boolean / operator (List / Grid,
Day / Week / Month, Compact / Comfortable / Spacious, AND / OR). Renders
`,e.jsx(n.strong,{children:"radio-group semantics"})," (",e.jsx(n.code,{children:'role="radiogroup"'})," with ",e.jsx(n.code,{children:'role="radio"'})," + ",e.jsx(n.code,{children:"aria-checked"}),`
on each option) and arrow-key navigation that moves and selects in one step.`]}),`
`,e.jsx(n.h2,{id:"when-to-use-segmentedcontrol-vs-buttongroup",children:"When to use SegmentedControl vs ButtonGroup"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`ButtonGroup       toolbar commands   button / toggle-button semantics
SegmentedControl  peer-value choice  radio-group semantics
`})}),`
`,e.jsxs(n.p,{children:["If it behaves like a toolbar command, reach for ",e.jsx(n.code,{children:"ArvoButtonGroup"}),`. If it behaves
like choosing a setting / value / view / operator, reach for `,e.jsx(n.code,{children:"ArvoSegmentedControl"}),"."]}),`
`,e.jsx(n.h2,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoSegmentedControl } from '@arvo/js/components/SegmentedControl';

const el = document.querySelector('#view-switcher');
const ctrl = ArvoSegmentedControl.initialize(el, {
  ariaLabel: 'View type',
  items: [
    { value: 'list', label: 'List' },
    { value: 'grid', label: 'Grid' },
    { value: 'kanban', label: 'Kanban' },
  ],
  value: 'list',
  onChange: ({ value, previousValue }) => {
    console.log('Switched from', previousValue, 'to', value);
  },
});

ctrl.value('grid');
ctrl.disabled(true);
ctrl.destroy();
`})}),`
`,e.jsx(n.h2,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="arvo-seg-ctrl arvo-seg-ctrl--primary arvo-seg-ctrl--lg" role="radiogroup" aria-label="View type">
  <button type="button" role="radio" class="arvo-seg-ctrl__opt" aria-checked="true" tabindex="0" data-value="list">
    <span class="arvo-seg-ctrl__lbl">List</span>
  </button>
  <button type="button" role="radio" class="arvo-seg-ctrl__opt" aria-checked="false" tabindex="-1" data-value="grid">
    <span class="arvo-seg-ctrl__lbl">Grid</span>
  </button>
</div>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"js-only",children:"JS only"}),`
`,e.jsx(n.h3,{id:"methods",children:"Methods"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoSegmentedControl.initialize(element, options)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLElement"}),", ",e.jsx("code",{children:"ArvoSegmentedControlOptions"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoSegmentedControl"})}),e.jsx("td",{children:"Factory."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"value()"})," / ",e.jsx("code",{children:"value(next)"})]}),e.jsx("td",{children:e.jsx("code",{children:"string?"})}),e.jsx("td",{children:e.jsx("code",{children:"string | null | void"})}),e.jsx("td",{children:"Get / set the selected value."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"disabled()"})," / ",e.jsx("code",{children:"disabled(state)"})]}),e.jsx("td",{children:e.jsx("code",{children:"boolean?"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get / set disabled state."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLoading(loading)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Toggle loading state."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Remove listeners + DOM."})]})]})]}),`
`,e.jsx(n.h3,{id:"custom-events",children:"Custom events"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Detail"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"seg-ctrl:change"})}),e.jsx("td",{children:"{ value: string, previousValue: string | null }"}),e.jsx("td",{children:"Selection changed (click or keyboard)."})]})})]})]})}function L(r={}){const{wrapper:n}={...l(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{L as default};
