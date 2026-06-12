import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as r,M as o,C as s,a as l}from"./blocks-DLeo0hIy.js";import{I as c,P as d,A as a,a as h,L as x,D as j,S as u,T as b,b as p}from"./IconButton.stories-DZPZr0gP.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./IconButton-BgwDUYzG.js";import"./useTooltip-DZu1XpnP.js";import"./index28-DgjIRxoq.js";import"./useControllableState-BcENo7ec.js";import"./loading-flag-DkqmYwgU.js";function i(t){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
`,e.jsx(n.h1,{id:"iconbutton",children:"IconButton"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsx(n.p,{children:`Square, icon-only interactive element for compact actions where space is limited
or visual simplicity is preferred. Shares variant and size modifier classes with
Button but renders no visible text label.`}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Trigger a recognizable action in a dense surface (toolbar, table row, input
affordance) where a text label is unnecessary.`}),`
`,e.jsxs(n.li,{children:["Always provide a ",e.jsx(n.code,{children:"tooltip"})," -- it supplies the accessible name (",e.jsx(n.code,{children:"aria-label"}),`)
and the hover/focus tooltip, since there is no visible text.`]}),`
`,e.jsxs(n.li,{children:["Use the ",e.jsx(n.code,{children:"xs"})," size (16px) for very dense layouts; it is exclusive to IconButton."]}),`
`,e.jsxs(n.li,{children:["For an action that needs a visible text label, use ",e.jsx(n.code,{children:"Button"})," instead."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(s,{of:d,sourceState:"shown"}),`
`,e.jsx(l,{of:d}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsxs(n.p,{children:[`Loading shows a skeleton shimmer overlay and blocks interaction; disabled removes
the button from the tab order; selected toggle buttons render `,e.jsx(n.code,{children:"aria-pressed"}),"."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h2,{id:"in-a-toolbar",children:"In a toolbar"}),`
`,e.jsx(n.p,{children:"Group tertiary icon buttons for compact, label-free action rows."}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(n.h2,{id:"toggle-group",children:"Toggle group"}),`
`,e.jsxs(n.p,{children:["Drive ",e.jsx(n.code,{children:"isSelected"})," from state to build a single-select view switcher."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:["The vanilla JS version of ",e.jsx(n.code,{children:"ArvoIconButton"}),` is a 1:1 visual match for the React
component (same DOM, same classes). Use it for icon-only triggers in dense
toolbars, table-row actions, or any context where space prohibits a labeled
button. The `,e.jsx(n.code,{children:"tooltip"})," prop is required -- it doubles as the ",e.jsx(n.code,{children:"aria-label"}),` so
the control remains accessible to screen readers.`]}),`
`,e.jsx(n.h2,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoIconButton } from '@arvo/js/components/IconButton';

const el = document.querySelector('#my-icon-btn');
const btn = ArvoIconButton.initialize(el, {
  variant: 'secondary',
  size: 'md',
  icon: 'plus',
  tooltip: 'Add item',
  onClick: (event) => console.log('clicked', event),
});

// Swap icon at runtime
btn.setIcon('check');

// Update tooltip (also updates aria-label and title)
btn.setTooltip('Done');

// Change variant or size at runtime
btn.setVariant('primary');
btn.setSize('lg');

// Loading state (also prevents double-click)
btn.setLoading(true);
btn.setLoading(false);

// Disabled state
btn.disabled(true);
btn.disabled(false);
btn.disabled();         // => boolean

// Selected / toggle state
btn.selected(true);
btn.selected();         // => boolean

// Focus programmatically
btn.focus();

// Tear down
btn.destroy();

// Custom events
el.addEventListener('btn:loading', (e) => {
  console.log('loading:', e.detail.loading);
});
`})}),`
`,e.jsx(n.h2,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<button class="arvo-icon-btn arvo-btn--primary arvo-btn--md" type="button" aria-label="Add" title="Add">
  <span class="arvo-btn__ico o9con o9con-plus" aria-hidden="true"></span>
</button>
`})}),`
`,e.jsxs(n.p,{children:["Modifier classes follow the same pattern as ArvoButton: ",e.jsx(n.code,{children:"arvo-btn--&#123;variant&#125;"}),`,
`,e.jsx(n.code,{children:"arvo-btn--&#123;size&#125;"}),", and the state classes ",e.jsx(n.code,{children:"loading"})," and ",e.jsx(n.code,{children:"active"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Signature"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onClick"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: MouseEvent) => void"})}),e.jsxs("td",{children:["Click handler. Suppressed when ",e.jsx("code",{children:"isDisabled"})," or ",e.jsx("code",{children:"isLoading"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onKeyDown"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: KeyboardEvent) => void"})}),e.jsx("td",{children:"Keydown handler. Suppressed on Enter/Space when blocked."})]})]})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"React only:"})," All standard ",e.jsx(n.code,{children:"HTMLButtonElement"})," event callbacks (",e.jsx(n.code,{children:"onFocus"}),`,
`,e.jsx(n.code,{children:"onBlur"}),", etc.) are also available via the HTML element attribute spread."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"js-only",children:"JS only"}),`
`,e.jsx(n.h3,{id:"methods",children:"Methods"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["In React, use state instead of imperative methods -- e.g., ",e.jsx(n.code,{children:"isLoading=&#123;true&#125;"})," replaces ",e.jsx(n.code,{children:"setLoading(true)"}),"."]}),`
`]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoIconButton.initialize(element, options)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLButtonElement"}),", ",e.jsx("code",{children:"ArvoIconButtonOptions"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoIconButton"})}),e.jsx("td",{children:"Factory -- initializes component on a DOM element"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setIcon(iconName)"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Swap the displayed icon"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setTooltip(text)"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Update tooltip text, aria-label, and title attribute"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setVariant(variant)"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Change visual variant"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setSize(size)"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Change button size"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLoading(loading)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Toggle loading state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"selected(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set selected/active state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set disabled state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"focus()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Programmatically focus the button element"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Remove event listeners, clean up DOM, restore original state"})]})]})]}),`
`,e.jsx(n.h3,{id:"custom-events",children:"Custom Events"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"btn:loading"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: CustomEvent<{ loading: boolean }>) => void"})}),e.jsx("td",{children:"Fires when loading state changes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"btn:disabled"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: CustomEvent<{ disabled: boolean }>) => void"})}),e.jsx("td",{children:"Fires when disabled state changes programmatically"})]})]})]})]})}function z(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{z as default};
