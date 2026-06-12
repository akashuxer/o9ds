import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{u as o,M as t,C as d,a as c}from"./blocks-DLeo0hIy.js";import{F as l,P as r,A as a,I as h,a as x,L as j,D as p,C as b}from"./FabButton.stories-BWqtNyz8.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./Button-B8O_kk1m.js";import"./useControllableState-BcENo7ec.js";import"./loading-flag-DkqmYwgU.js";import"./IconButton-BgwDUYzG.js";import"./useTooltip-DZu1XpnP.js";import"./index28-DgjIRxoq.js";import"./Indicator-DI-QBEWN.js";function i(s){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:l}),`
`,n.jsx(e.h1,{id:"fabbutton",children:"FabButton"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,n.jsxs(e.p,{children:[`Floating Action Button -- a persistent, elevated button that floats above page
content for a primary or secondary contextual action. Composes an inner
`,n.jsx(e.code,{children:"Button"})," (extended) or ",n.jsx(e.code,{children:"IconButton"})," (icon-only) plus an optional indicator badge."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"When to use"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:`Provide one persistent, elevated primary action on a page (compose, create,
scroll-to-top).`}),`
`,n.jsxs(e.li,{children:["Use icon-only for the canonical FAB; provide a ",n.jsx(e.code,{children:"label"})," for an extended FAB."]}),`
`,n.jsxs(e.li,{children:["Always provide a ",n.jsx(e.code,{children:"tooltip"})," in icon-only mode -- it supplies the ",n.jsx(e.code,{children:"aria-label"}),"."]}),`
`,n.jsxs(e.li,{children:["Show an ",n.jsx(e.code,{children:"indicator"})," badge for unsaved / new / unread status. Only ",n.jsx(e.code,{children:"primary"}),`
and `,n.jsx(e.code,{children:"secondary"})," variants are supported."]}),`
`]}),`
`,n.jsx(e.h2,{id:"playground",children:"Playground"}),`
`,n.jsx(e.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,n.jsx(d,{of:r,sourceState:"shown"}),`
`,n.jsx(c,{of:r}),`
`,n.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(d,{of:a}),`
`,n.jsx(e.h2,{id:"icon-only-vs-extended",children:"Icon-only vs extended"}),`
`,n.jsxs(e.p,{children:["Omit ",n.jsx(e.code,{children:"label"})," for the canonical square FAB; provide ",n.jsx(e.code,{children:"label"}),` for an extended FAB
with icon and text.`]}),`
`,n.jsx(d,{of:h}),`
`,n.jsx(e.h2,{id:"indicators",children:"Indicators"}),`
`,n.jsx(e.p,{children:"A corner indicator badge signals unsaved, new, or unread status."}),`
`,n.jsx(d,{of:x}),`
`,n.jsx(e.h2,{id:"states",children:"States"}),`
`,n.jsx(d,{of:j}),`
`,n.jsx(d,{of:p}),`
`,n.jsx(e.h2,{id:"recipes",children:"Recipes"}),`
`,n.jsx(d,{of:b}),`
`,n.jsx(e.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,n.jsxs(e.p,{children:["The vanilla JS version of ",n.jsx(e.code,{children:"ArvoFabButton"}),` is a 1:1 visual match for the React
component. It composes an inner `,n.jsx(e.code,{children:"ArvoButton"})," (with-label mode) or ",n.jsx(e.code,{children:"ArvoIconButton"}),`
(icon-only mode) plus an optional `,n.jsx(e.code,{children:"ArvoIndicator"}),` badge. Use it for the
primary persistent action on a page (compose, create, scroll-to-top).`]}),`
`,n.jsx(e.h2,{id:"installation-snippet",children:"Installation snippet"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { ArvoFabButton } from '@arvo/js/components/FabButton';

const el = document.querySelector('#my-fab');
const fab = ArvoFabButton.initialize(el, {
  variant: 'primary',
  icon: 'plus',
  label: 'Compose',
  tooltip: 'Compose new message',
  onClick: () => console.log('clicked'),
});

// Toggle indicator
fab.setIndicator('unsaved');
fab.setIndicator(false);

// Loading and disabled
fab.setLoading(true);
fab.disabled(true);

// Tear down
fab.destroy();
`})}),`
`,n.jsx(e.h2,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!-- Icon-only -->
<div class="arvo-fab-btn arvo-fab-btn--primary arvo-fab-btn--icon-only">
  <button class="arvo-icon-btn arvo-btn--primary arvo-btn--lg" type="button" aria-label="Add">
    <span class="arvo-btn__ico o9con o9con-plus" aria-hidden="true"></span>
  </button>
</div>

<!-- With label (extended FAB) -->
<div class="arvo-fab-btn arvo-fab-btn--primary arvo-fab-btn--with-label">
  <button class="arvo-btn arvo-btn--primary arvo-btn--md" type="button">
    <span class="arvo-btn__ico o9con o9con-plus" aria-hidden="true"></span>
    <span class="arvo-btn__lbl">Add</span>
  </button>
</div>
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Callback"}),n.jsx("th",{children:"Signature"}),n.jsx("th",{children:"Description"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"onClick"})}),n.jsx("td",{children:n.jsx("code",{children:"(event: MouseEvent) => void"})}),n.jsxs("td",{children:["Click handler. Suppressed when ",n.jsx("code",{children:"isDisabled"}),"/",n.jsx("code",{children:"isLoading"}),"."]})]})})]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"js-only",children:"JS only"}),`
`,n.jsx(e.h3,{id:"methods",children:"Methods"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Method"}),n.jsx("th",{children:"Parameters"}),n.jsx("th",{children:"Returns"}),n.jsx("th",{children:"Description"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"ArvoFabButton.initialize(element, options)"})}),n.jsxs("td",{children:[n.jsx("code",{children:"HTMLElement"}),", ",n.jsx("code",{children:"ArvoFabButtonOptions"})]}),n.jsx("td",{children:n.jsx("code",{children:"ArvoFabButton"})}),n.jsx("td",{children:"Factory"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"setIcon(name)"})}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:n.jsx("code",{children:"void"})}),n.jsx("td",{children:"Update inner button icon"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"setLabel(text)"})}),n.jsx("td",{children:n.jsx("code",{children:"string | null"})}),n.jsx("td",{children:n.jsx("code",{children:"void"})}),n.jsx("td",{children:"Switch between icon-only and extended"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"setVariant(v)"})}),n.jsx("td",{children:n.jsx("code",{children:"'primary' | 'secondary'"})}),n.jsx("td",{children:n.jsx("code",{children:"void"})}),n.jsx("td",{children:"Change variant"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"setIndicator(v)"})}),n.jsx("td",{children:n.jsx("code",{children:"'unsaved' | 'new' | 'unread' | false"})}),n.jsx("td",{children:n.jsx("code",{children:"void"})}),n.jsx("td",{children:"Show or hide the indicator badge"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"setLoading(loading)"})}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:n.jsx("code",{children:"void"})}),n.jsx("td",{children:"Toggle loading state"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"disabled(state?)"})}),n.jsx("td",{children:n.jsx("code",{children:"boolean | undefined"})}),n.jsx("td",{children:n.jsx("code",{children:"boolean | void"})}),n.jsx("td",{children:"Get or set disabled state"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"focus()"})}),n.jsx("td",{children:"--"}),n.jsx("td",{children:n.jsx("code",{children:"void"})}),n.jsx("td",{children:"Programmatically focus the inner button"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"destroy()"})}),n.jsx("td",{children:"--"}),n.jsx("td",{children:n.jsx("code",{children:"void"})}),n.jsx("td",{children:"Remove listeners + clean up DOM"})]})]})]})]})}function L(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{L as default};
