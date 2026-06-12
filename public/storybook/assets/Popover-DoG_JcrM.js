import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as i,M as d,C as r,a as c}from"./blocks-DLeo0hIy.js";import{P as l,a as s,E as h,A as a,W as x,b as j,c as p,d as m,H as v,F as g,L as u,N as b,C as f,e as y,f as C}from"./Popover.stories-DmFdpl12.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./ActionMenu-Bz8nuUE_.js";import"./client-DfB1ehiO.js";import"./index18-B-vHVXJV.js";import"./Button-B8O_kk1m.js";import"./useControllableState-BcENo7ec.js";import"./loading-flag-DkqmYwgU.js";import"./IconButton-BgwDUYzG.js";import"./useTooltip-DZu1XpnP.js";import"./index28-DgjIRxoq.js";import"./Search-B0ooNraj.js";import"./MessageAlert-DBQwY950.js";import"./ButtonGroup-Bky2dG1G.js";import"./BannerAlert-DwOPtWj_.js";import"./inline-content-CllLfblQ.js";import"./Link-NIjDRzO0.js";import"./EmptyState-B01eqtyy.js";import"./Checkbox-k9WMnmR3.js";import"./FormLabel-Dn-HbpfA.js";import"./Radio-0NcOE_jm.js";import"./Switch-BDE_dn2p.js";import"./useOverlay-Bo9f1g6f.js";import"./OverlayContext-C5RootgB.js";import"./useFocusTrap-BePVbEUc.js";import"./menu-search-C2FCcKsr.js";import"./Indicator-DI-QBEWN.js";import"./Textbox-BjaSSAvr.js";import"./index2-HSp4ZJrG.js";function t(o){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:l}),`
`,e.jsx(n.h1,{id:"popover",children:"Popover"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsx(n.p,{children:`Floating overlay panel anchored to a trigger element for displaying contextual
content, short forms, or actions. Supports click, hover, and focus trigger
modes, an optional header (title, back button, close button), a sticky header
slot, a scrollable body, and an action footer.`}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Show short, contextual content, a small form, or confirm an action right next
to the element that opened it.`}),`
`,e.jsxs(n.li,{children:["Pick the trigger mode that fits the interaction: ",e.jsx(n.code,{children:"click"})," (default), ",e.jsx(n.code,{children:"hover"}),`,
or `,e.jsx(n.code,{children:"focus"}),"."]}),`
`,e.jsxs(n.li,{children:["For a non-interactive hint on hover or focus, use ",e.jsx(n.code,{children:"Tooltip"})," instead."]}),`
`,e.jsxs(n.li,{children:["For a large, modal task or a multi-step flow, use ",e.jsx(n.code,{children:"Drawer"}),", ",e.jsx(n.code,{children:"SidePanel"}),`, or
`,e.jsx(n.code,{children:"AlertDialog"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(r,{of:s,sourceState:"shown"}),`
`,e.jsx(c,{of:s}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"edge"}),` variant removes the body's horizontal padding so content can run
edge to edge.`]}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h2,{id:"placement",children:"Placement"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"placement"})," sets the preferred side; ",e.jsx(n.code,{children:"auto"})," lets the positioning engine choose."]}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(n.h2,{id:"header-options",children:"Header options"}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.h2,{id:"footer-actions",children:"Footer actions"}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.h2,{id:"trigger-modes",children:"Trigger modes"}),`
`,e.jsx(r,{of:v}),`
`,e.jsx(r,{of:g}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsxs(n.p,{children:[`Loading shows a structured skeleton; a non-interactive popover uses
`,e.jsx(n.code,{children:'role="tooltip"'})," with no focus trap."]}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(r,{of:b}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(r,{of:f}),`
`,e.jsx(r,{of:y}),`
`,e.jsx(r,{of:C}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:["The vanilla JS version of ",e.jsx(n.code,{children:"ArvoPopover"}),`. Floating panel anchored to a trigger
element, with optional header, sticky header, body, and footer actions.`]}),`
`,e.jsx(n.h3,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoPopover } from '@arvo/js/components/Popover';

const trigger = document.querySelector('#my-btn');
const pop = ArvoPopover.attach(trigger, {
  title: 'Account',
  trigger: 'click',
  placement: 'bottom-start',
  hasHeader: true,
  isClosable: true,
  body: '<p>Manage your account here.</p>',
  actions: [
    { label: 'Cancel', variant: 'tertiary', onClick: () => pop.close() },
    { label: 'Save', variant: 'primary', onClick: () => save() },
  ],
});

pop.open();
pop.close();
pop.setTitle('Updated');
pop.setBody('<p>New body</p>');
pop.destroy();
`})}),`
`,e.jsx(n.h3,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="arvo-pop arvo-pop--space" role="dialog" aria-modal="false">
  <header class="arvo-pop__hdr">
    <h2 class="arvo-pop__ttl">Account</h2>
    <button class="arvo-icon-btn arvo-btn--tertiary arvo-btn--sm arvo-pop__close" type="button" aria-label="Close">
      <span class="arvo-btn__ico o9con o9con-close" aria-hidden="true"></span>
    </button>
  </header>
  <div class="arvo-pop__bdy">...</div>
  <footer class="arvo-pop__ftr">
    <button class="arvo-btn arvo-btn--tertiary arvo-btn--md" type="button"><span class="arvo-btn__lbl">Cancel</span></button>
    <button class="arvo-btn arvo-btn--primary arvo-btn--md" type="button"><span class="arvo-btn__lbl">Save</span></button>
  </footer>
</div>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Signature"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onOpen"})}),e.jsx("td",{children:e.jsx("code",{children:"() => boolean | void"})}),e.jsxs("td",{children:["Fires when opening (return ",e.jsx("code",{children:"false"})," to cancel)"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onClose"})}),e.jsx("td",{children:e.jsx("code",{children:"() => boolean | void"})}),e.jsx("td",{children:"Fires when closing"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onOpenChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(isOpen: boolean) => void"})}),e.jsx("td",{children:"Fires after open changes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onBack"})}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"Fires when back button is pressed"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"js-only",children:"JS only"}),`
`,e.jsx(n.h4,{id:"methods",children:"Methods"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoPopover.attach(trigger, config)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLElement"}),", ",e.jsx("code",{children:"ArvoPopoverConfig"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoPopover"})}),e.jsx("td",{children:"Attach to existing trigger"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"open()"})," / ",e.jsx("code",{children:"close()"})]}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Open or close the popover"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isOpen()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"Get current open state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setTitle(text)"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Update header title"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setBody(html)"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Replace body HTML"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setActions(actions)"})}),e.jsx("td",{children:e.jsx("code",{children:"ArvoPopoverAction[]"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Replace footer actions"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLoading(loading)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Toggle loading skeleton"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Remove listeners + portaled element"})]})]})]}),`
`,e.jsx(n.h4,{id:"custom-events",children:"Custom Events"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"pop:open"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: CustomEvent) => void"})}),e.jsx("td",{children:"Fires when opening"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"pop:close"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: CustomEvent) => void"})}),e.jsx("td",{children:"Fires when closing"})]})]})]})]})}function oe(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{oe as default};
