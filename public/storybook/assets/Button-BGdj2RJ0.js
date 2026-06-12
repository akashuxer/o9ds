import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as r,M as o,C as s,a as l}from"./blocks-DLeo0hIy.js";import{B as c,P as d,A as h,a,L as j,D as x,T as b,b as u}from"./Button.stories-DPHQIS-7.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./Button-B8O_kk1m.js";import"./useControllableState-BcENo7ec.js";import"./loading-flag-DkqmYwgU.js";function i(t){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
`,e.jsx(n.h1,{id:"button",children:"Button"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsx(n.p,{children:`Interactive element for triggering actions, submitting forms, or opening
associated content. Supports five visual variants, three sizes, an optional
leading icon, loading and toggle states.`}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Trigger an action, submit, or reset within a form or toolbar."}),`
`,e.jsxs(n.li,{children:["Use exactly one ",e.jsx(n.code,{children:"primary"}),` button per view to signal the main action; pair it
with `,e.jsx(n.code,{children:"secondary"})," / ",e.jsx(n.code,{children:"tertiary"})," for supporting actions."]}),`
`,e.jsxs(n.li,{children:["For navigation that changes the URL, use ",e.jsx(n.code,{children:"ButtonLink"})," instead."]}),`
`,e.jsxs(n.li,{children:["For an icon with no visible label, use ",e.jsx(n.code,{children:"IconButton"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(s,{of:d,sourceState:"shown"}),`
`,e.jsx(l,{of:d}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsxs(n.p,{children:[`Loading shows a skeleton shimmer overlay and blocks interaction; disabled
removes the button from the tab order; toggle buttons render `,e.jsx(n.code,{children:"aria-pressed"}),"."]}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(n.h2,{id:"with-an-icon",children:"With an icon"}),`
`,e.jsxs(n.p,{children:["A leading icon is set with the ",e.jsx(n.code,{children:"icon"})," prop (o9con name without the ",e.jsx(n.code,{children:"o9con-"}),`
prefix).`]}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:["The vanilla JS ",e.jsx(n.code,{children:"ArvoButton"}),` is a 1:1 visual match for the React component (same
DOM, same classes). Use it for non-React hosts, server-rendered pages, or other
frameworks.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoButton } from '@arvo/js/components/Button';

const el = document.querySelector('#my-btn');
const btn = ArvoButton.initialize(el, {
  variant: 'secondary',
  size: 'md',
  label: 'JS Button',
  icon: 'plus',
  onClick: (event) => console.log('clicked', event),
});

// Update label / icon
btn.setLabel('Updated Label');
btn.setIcon('check'); // swap icon
btn.setIcon(null); // remove icon

// Change variant or size at runtime
btn.setVariant('primary');
btn.setSize('lg');

// Loading state (also prevents double-click)
btn.setLoading(true);
btn.setLoading(false);

// Disabled state
btn.disabled(true); // disable
btn.disabled(false); // enable
btn.disabled(); // => boolean

// Selected / toggle state
btn.selected(true);
btn.selected(); // => boolean
btn.toggle(); // flip (fires onSelectionChange when isToggle)
btn.toggle(true); // force on

// Focus / teardown
btn.focus();
btn.destroy();

// Custom events
el.addEventListener('btn:loading', (e) => console.log('loading:', e.detail.isLoading));
el.addEventListener('btn:disabled', (e) => console.log('disabled:', e.detail.isDisabled));
`})}),`
`,e.jsx(n.h3,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,e.jsxs(n.p,{children:[`The following callbacks work in both frameworks. In React they are props; in JS
they are options passed to `,e.jsx(n.code,{children:"initialize()"}),"."]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Signature"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onClick"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: MouseEvent) => void"})}),e.jsx("td",{children:"Click handler. Suppressed when disabled or loading."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onSelectionChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(isSelected: boolean) => void"})}),e.jsxs("td",{children:["Fired when a toggle button flips. Only emitted when ",e.jsx("code",{children:"isToggle"})," is true."]})]})]})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"React only:"})," All standard ",e.jsx(n.code,{children:"HTMLButtonElement"})," event callbacks (",e.jsx(n.code,{children:"onFocus"}),`,
`,e.jsx(n.code,{children:"onBlur"}),", ",e.jsx(n.code,{children:"onKeyDown"}),", etc.) are available via the HTML element attribute spread."]}),`
`]}),`
`,e.jsx(n.h3,{id:"js-methods",children:"JS methods"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["In React, use props/state instead of imperative methods -- e.g. ",e.jsx(n.code,{children:"isLoading"}),`
replaces `,e.jsx(n.code,{children:"setLoading(true)"}),"."]}),`
`]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoButton.initialize(element, options)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLButtonElement"}),", ",e.jsx("code",{children:"ArvoButtonOptions"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoButton"})}),e.jsx("td",{children:"Factory -- initializes the component on a DOM element"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLabel(text)"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Update button label text"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setIcon(iconName)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | null"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Set or remove the leading icon"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setVariant(variant)"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Change visual variant"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setSize(size)"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Change button size"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLoading(loading)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Toggle loading state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"selected(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set selected/active state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"toggle(force?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsxs("td",{children:["Flip the selected state (or force on/off). Fires ",e.jsx("code",{children:"onSelectionChange"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set disabled state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"focus()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Programmatically focus the button element"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Remove listeners, clean up DOM, restore original state"})]})]})]}),`
`,e.jsx(n.h3,{id:"js-custom-events",children:"JS custom events"}),`
`,e.jsxs(n.p,{children:["Dispatched on the DOM element. Listen with ",e.jsx(n.code,{children:"el.addEventListener()"}),"."]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Payload"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"btn:loading"})}),e.jsx("td",{children:e.jsx("code",{children:"{ isLoading: boolean }"})}),e.jsx("td",{children:"Fires when loading state changes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"btn:disabled"})}),e.jsx("td",{children:e.jsx("code",{children:"{ isDisabled: boolean }"})}),e.jsx("td",{children:"Fires when disabled state changes programmatically"})]})]})]})]})}function B(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{B as default};
