import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as l,M as o,C as t,a as d}from"./blocks-DLeo0hIy.js";import{B as c,P as i,A as a,a as h,M as x,E as j,b as u,F as p,T as g}from"./ButtonGroup.stories-CT8r1APZ.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./ButtonGroup-Bky2dG1G.js";import"./Button-B8O_kk1m.js";import"./useControllableState-BcENo7ec.js";import"./loading-flag-DkqmYwgU.js";import"./IconButton-BgwDUYzG.js";import"./useTooltip-DZu1XpnP.js";import"./index28-DgjIRxoq.js";function r(s){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
`,e.jsx(n.h1,{id:"buttongroup",children:"ButtonGroup"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Horizontal grouping of ",e.jsx(n.code,{children:"Button"})," / ",e.jsx(n.code,{children:"IconButton"}),` items acting as a unified
selection control. Supports single-select (default) and multi-select modes,
icon-only display, overflow with an action menu, and animated label expansion.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Group related toolbar commands or toggles behind one unified control (text
formatting, alignment, view switch).`}),`
`,e.jsxs(n.li,{children:["Use single-select for a one-of-N choice; enable ",e.jsx(n.code,{children:"isMultiSelect"}),` for
independent toggles (filters, bulk actions).`]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"isIconOnly"}),", ",e.jsx(n.code,{children:"expandOnSelect"}),", or ",e.jsx(n.code,{children:"hasOverflow"})," for dense toolbars."]}),`
`,e.jsxs(n.li,{children:["ButtonGroup uses button / toggle (",e.jsx(n.code,{children:"aria-pressed"}),`) semantics. For peer-value
selection (radio semantics, `,e.jsx(n.code,{children:"aria-checked"}),`) like List / Grid or AND / OR, use
`,e.jsx(n.code,{children:"SegmentedControl"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(t,{of:i,sourceState:"shown"}),`
`,e.jsx(d,{of:i}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(t,{of:a}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(n.h2,{id:"multi-select",children:"Multi-select"}),`
`,e.jsxs(n.p,{children:["Set ",e.jsx(n.code,{children:"isMultiSelect"})," so several items can be active at once; ",e.jsx(n.code,{children:"value"}),` becomes a
string array.`]}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(n.h2,{id:"expand-label-on-select",children:"Expand label on select"}),`
`,e.jsxs(n.p,{children:["In single-select mode, ",e.jsx(n.code,{children:"expandOnSelect"}),` animates the active item open to reveal
its label while the others collapse to icon-only.`]}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(n.h2,{id:"recipes",children:"Recipes"}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(t,{of:g}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:["The vanilla JS version of ",e.jsx(n.code,{children:"ArvoButtonGroup"}),` is a 1:1 visual match for the React
component. Internally composes `,e.jsx(n.code,{children:"ArvoButton"})," (with-label items) or ",e.jsx(n.code,{children:"ArvoIconButton"}),`
(icon-only items), applying contextual SCSS overrides for the unified group
appearance. Supports single-select (default) and multi-select modes.`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"ButtonGroup vs SegmentedControl"}),` -- ButtonGroup uses button / toggle-button
semantics (`,e.jsx(n.code,{children:"aria-pressed"}),") for command-style toolbars; ",e.jsx(n.code,{children:"ArvoSegmentedControl"}),`
uses radio-group semantics (`,e.jsx(n.code,{children:"aria-checked"}),`) for peer-value selection (List /
Grid, Day / Week / Month, AND / OR). If the control behaves like a toolbar
command, use ButtonGroup. If it behaves like choosing a setting / value /
view / operator, use SegmentedControl.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoButtonGroup } from '@arvo/js/components/ButtonGroup';

const el = document.querySelector('#my-btn-grp');
const grp = ArvoButtonGroup.initialize(el, {
  items: [
    { value: 'bold', label: 'Bold', icon: 'bold' },
    { value: 'italic', label: 'Italic', icon: 'italic' },
    { value: 'underline', label: 'Underline', icon: 'underline' },
  ],
  value: 'bold',
  ariaLabel: 'Text formatting',
  onChange: (detail) => console.log(detail),
});

// Update items at runtime
grp.setItems([
  { value: 'left', label: 'Left', icon: 'align-left' },
  { value: 'center', label: 'Center', icon: 'align-center' },
  { value: 'right', label: 'Right', icon: 'align-right' },
]);

// Programmatic selection
grp.value('center');
grp.value();              // => current value (string | string[] | null)

// Toggle a single item without re-rendering
grp.select('left');
grp.deselect('left');

// Disabled / loading
grp.disabled(true);
grp.setLoading(true);

// Custom event
el.addEventListener('btn-grp:change', (e) => {
  console.log('changed:', e.detail);
});

// Tear down
grp.destroy();
`})}),`
`,e.jsx(n.h2,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="arvo-btn-grp arvo-btn-grp--primary arvo-btn-grp--lg" role="toolbar" aria-label="Text formatting">
  <button class="arvo-btn arvo-btn--primary arvo-btn--md active" type="button" data-value="bold" aria-pressed="true">
    <span class="arvo-btn__ico o9con o9con-bold" aria-hidden="true"></span>
    <span class="arvo-btn__lbl">Bold</span>
  </button>
  <button class="arvo-btn arvo-btn--primary arvo-btn--md" type="button" data-value="italic" aria-pressed="false">
    <span class="arvo-btn__ico o9con o9con-italic" aria-hidden="true"></span>
    <span class="arvo-btn__lbl">Italic</span>
  </button>
</div>
`})}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"hasOverflow"})," is ",e.jsx(n.code,{children:"true"}),", an ",e.jsx(n.code,{children:"ArvoIconButton"})," (icon ",e.jsx(n.code,{children:"ellipsis-v"}),`, tertiary
variant) is appended at the inline end with `,e.jsx(n.code,{children:'aria-haspopup="menu"'}),`. Clicking
opens an action menu of clipped items.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Signature"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(detail: ButtonGroupChangeDetail) => void"})}),e.jsxs("td",{children:["Fires on selection change. ",e.jsx("code",{children:"detail"})," carries ",e.jsx("code",{children:"value"}),", ",e.jsx("code",{children:"previousValue"}),", ",e.jsx("code",{children:"changedValue"}),", and ",e.jsx("code",{children:"isSelected"}),"."]})]})})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"js-only",children:"JS only"}),`
`,e.jsx(n.h3,{id:"methods",children:"Methods"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoButtonGroup.initialize(element, options)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLElement"}),", ",e.jsx("code",{children:"ArvoButtonGroupOptions"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoButtonGroup"})}),e.jsx("td",{children:"Factory"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setItems(items)"})}),e.jsx("td",{children:e.jsx("code",{children:"ButtonGroupItem[]"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Replace the item set"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"value(next?)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | string[] | null | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"string | string[] | null | void"})}),e.jsx("td",{children:"Get or set selection"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"select(value)"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Select a specific item"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"deselect(value)"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Deselect a specific item"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLoading(loading)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Toggle loading state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set disabled state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Remove listeners + clean up DOM"})]})]})]}),`
`,e.jsx(n.h3,{id:"custom-events",children:"Custom Events"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"btn-grp:change"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: CustomEvent<ButtonGroupChangeDetail>) => void"})}),e.jsx("td",{children:"Fires on selection change"})]})})]})]})}function D(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{D as default};
