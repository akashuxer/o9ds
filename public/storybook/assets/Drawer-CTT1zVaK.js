import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as c,M as o,C as s,a as l}from"./blocks-DLeo0hIy.js";import{D as t,P as d,K as a,S as h,a as x,N as j,M as p,b as u,c as f,C as m,d as b,e as g,f as w,L as v,g as y,h as k,H as S,W as A,i as C,j as _,k as D,l as M,F as T,m as E,n as P,o as O,p as R,q as H,r as L,s as F,E as B,t as I,u as W,v as N}from"./Drawer.stories-Du1RM42v.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./index17-CEY5xPko.js";import"./sample-content-DZHJz4uL.js";import"./useControllableState-BcENo7ec.js";import"./ActionMenu-Bz8nuUE_.js";import"./client-DfB1ehiO.js";import"./index18-B-vHVXJV.js";import"./Button-B8O_kk1m.js";import"./loading-flag-DkqmYwgU.js";import"./IconButton-BgwDUYzG.js";import"./useTooltip-DZu1XpnP.js";import"./index28-DgjIRxoq.js";import"./Search-B0ooNraj.js";import"./MessageAlert-DBQwY950.js";import"./ButtonGroup-Bky2dG1G.js";import"./BannerAlert-DwOPtWj_.js";import"./inline-content-CllLfblQ.js";import"./Link-NIjDRzO0.js";import"./EmptyState-B01eqtyy.js";import"./Checkbox-k9WMnmR3.js";import"./FormLabel-Dn-HbpfA.js";import"./Radio-0NcOE_jm.js";import"./Switch-BDE_dn2p.js";import"./useOverlay-Bo9f1g6f.js";import"./OverlayContext-C5RootgB.js";import"./useFocusTrap-BePVbEUc.js";import"./menu-search-C2FCcKsr.js";import"./Indicator-DI-QBEWN.js";import"./SplitIconButton-CKjlqb8i.js";import"./Tabstrip-B41dlssz.js";import"./Textbox-BjaSSAvr.js";import"./index2-HSp4ZJrG.js";import"./Select-BLh_A-b9.js";function i(r){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:t}),`
`,e.jsx(n.h1,{id:"drawer",children:"Drawer"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Viewport-anchored slide-in overlay panel. Always portaled (default
`,e.jsx(n.code,{children:"document.body"}),`, configurable container) and always overlay -- there is no
layout/pinned mode (use `,e.jsx(n.code,{children:"SidePanel"}),` when pinning into the layout is meaningful).
Composes the same content shell as `,e.jsx(n.code,{children:"SidePanel"}),` (header, sticky pre-body region,
scrollable custom-content body, footer) and adds the drawer-only concerns:
portal mounting, optional backdrop/mask, scroll lock, focus trap, slide-in
animation, and Escape / mask-click dismissal. The body is arbitrary custom
content you pass via `,e.jsx(n.code,{children:"children"}),`; the drawer ships no built-in item list. When
you wire `,e.jsx(n.code,{children:"search"}),`, you own filtering and surface a "Showing N of M" count via a
reactive `,e.jsx(n.code,{children:"stickyHeader.info"})," (or the ",e.jsx(n.code,{children:"setInfo()"}),` handle) gated by
`,e.jsx(n.code,{children:"showWhen: 'filtered'"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Open a transient, modal-style panel that slides in from a viewport edge for
forms, filters, settings, or item edits.`}),`
`,e.jsxs(n.li,{children:["Choose the ",e.jsx(n.code,{children:"side"})," it slides from, and use ",e.jsx(n.code,{children:"hasMask"}),` to scrim (and optionally
lock scroll) behind it.`]}),`
`,e.jsx(n.li,{children:"Let users dismiss via the close button, Escape, or an outside/mask click."}),`
`,e.jsxs(n.li,{children:[`For a panel that should dock into the layout (resizable, pinnable), use
`,e.jsx(n.code,{children:"SidePanel"}),". For a short confirmation, use ",e.jsx(n.code,{children:"AlertDialog"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(s,{of:d,sourceState:"shown"}),`
`,e.jsx(l,{of:d}),`
`,e.jsx(n.h2,{id:"kitchen-sink",children:"Kitchen sink"}),`
`,e.jsxs(n.p,{children:[`Everything at once: a 380px right-edge drawer with a mask, a title, back + close
buttons, every header-action type (button, dropdown, split, switch, checkbox), a
dismissible banner, tabs, search with a Ctrl+K shortcut, a filtered-only inline
info row ("Showing N of M" -- type to reveal it), a custom list of single-label
rows, and a Reset / Cancel / Apply footer. The list filters in place against the
search query and the active tab; the info message is driven by a reactive
`,e.jsx(n.code,{children:"stickyHeader.info"})," with ",e.jsx(n.code,{children:"showWhen: 'filtered'"}),"."]}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.h2,{id:"side",children:"Side"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h2,{id:"mask",children:"Mask"}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.h2,{id:"dismissal",children:"Dismissal"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(s,{of:w}),`
`,e.jsx(n.h2,{id:"scroll-lock",children:"Scroll lock"}),`
`,e.jsx(s,{of:v}),`
`,e.jsx(s,{of:y}),`
`,e.jsx(s,{of:k}),`
`,e.jsx(n.h2,{id:"header",children:"Header"}),`
`,e.jsx(s,{of:S}),`
`,e.jsx(s,{of:A}),`
`,e.jsx(s,{of:C}),`
`,e.jsx(n.h2,{id:"sticky-region",children:"Sticky region"}),`
`,e.jsx(s,{of:_}),`
`,e.jsx(s,{of:D}),`
`,e.jsx(s,{of:M}),`
`,e.jsx(n.h2,{id:"custom-content-and-filtering",children:"Custom content and filtering"}),`
`,e.jsxs(n.p,{children:["The body is whatever you pass via ",e.jsx(n.code,{children:"children"}),`. To filter it, hold the query in
state, filter your own content, and surface a "Showing N of M" message through a
reactive `,e.jsx(n.code,{children:"stickyHeader.info"})," (or the imperative ",e.jsx(n.code,{children:"setInfo()"}),` handle) gated by
`,e.jsx(n.code,{children:"showWhen: 'filtered'"})," so the row only appears while a query is active."]}),`
`,e.jsx(s,{of:T}),`
`,e.jsx(n.h2,{id:"footer",children:"Footer"}),`
`,e.jsx(n.p,{children:"The primary action always renders on the right regardless of source order."}),`
`,e.jsx(s,{of:E}),`
`,e.jsx(s,{of:P}),`
`,e.jsx(n.h2,{id:"sizing",children:"Sizing"}),`
`,e.jsx(s,{of:O}),`
`,e.jsx(s,{of:R}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(s,{of:H}),`
`,e.jsx(s,{of:L}),`
`,e.jsx(s,{of:F}),`
`,e.jsx(n.h2,{id:"composition-recipes",children:"Composition recipes"}),`
`,e.jsx(s,{of:B}),`
`,e.jsx(s,{of:I}),`
`,e.jsx(s,{of:W}),`
`,e.jsx(s,{of:N}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:[`Viewport-anchored slide-in overlay panel. Always portaled (default
`,e.jsx(n.code,{children:"document.body"}),`, configurable container) and always overlay -- there is no
layout/pinned mode (use `,e.jsx(n.strong,{children:"ArvoSidePanel"}),` when pinning into the layout is
meaningful). Composes the same content shell as ArvoSidePanel (header,
sticky pre-body region, scrollable custom-content body, footer) via the
`,e.jsx(n.code,{children:"panel-shell"}),` shared pattern, and adds Drawer-only positional concerns:
portal mounting, optional backdrop / mask, scroll lock, focus trap,
slide-in animation, and Escape / mask-click dismissal.`]}),`
`,e.jsxs(n.p,{children:[`The inner anatomy (header, sticky region, body, footer, empty/skeleton
states) is owned by the `,e.jsx(n.strong,{children:"panel-shell"}),` shared pattern
(`,e.jsx(n.code,{children:"packages/styles/src/mixins/_panel-shell.scss"}),`,
`,e.jsx(n.code,{children:"packages/utils/src/panel-shell.ts"}),`). See
`,e.jsx(n.code,{children:"architecture/14-SHARED-REFERENCE.md"}),` section 1.9 for the full pattern
contract. Drawer adds only the positional concerns listed above. The body is
arbitrary custom content -- pass an element / HTML string / callback via the
`,e.jsx(n.code,{children:"content"})," option (JS) or ",e.jsx(n.code,{children:"children"}),` (React). There is no built-in item list;
the consumer owns filtering and drives a "Showing N of M" message through
`,e.jsx(n.code,{children:"setInfo()"})," (or a reactive ",e.jsx(n.code,{children:"stickyHeader.info"}),") gated by ",e.jsx(n.code,{children:"showWhen: 'filtered'"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"when-to-use-drawer-vs-sidepanel",children:"When to use Drawer vs SidePanel"}),`
`,e.jsxs(n.p,{children:[`| Use case | Component |
| --- | --- |
| Pane that should dock at the layout level next to the page content (resizable, pin/unpin, splitter) | `,e.jsx(n.strong,{children:"ArvoSidePanel"}),` |
| Modal-style temporary slide-in from a viewport edge (forms, filters, settings, item-edit) | `,e.jsx(n.strong,{children:"ArvoDrawer"}),` |
| Pane that needs to participate in flex/grid layout flow | `,e.jsx(n.strong,{children:"ArvoSidePanel"})," (",e.jsx(n.code,{children:'variant="layout"'}),`) |
| Pane portaled to `,e.jsx(n.code,{children:"document.body"})," or a custom anchor, with optional backdrop and Escape/mask dismissal | ",e.jsx(n.strong,{children:"ArvoDrawer"}),` |
| Pane the user can pin into the layout when desired and overlay otherwise | `,e.jsx(n.strong,{children:"ArvoSidePanel"})," (",e.jsx(n.code,{children:"isPinnable"}),") |"]}),`
`,e.jsxs(n.p,{children:["If you are unsure, default to ",e.jsx(n.strong,{children:"ArvoSidePanel"}),` -- it has both layout and
overlay variants and can flip between them without remounting. Reach for
`,e.jsx(n.strong,{children:"ArvoDrawer"}),` only when the pane is purely transient (open from a
trigger, dismiss via Escape / backdrop / close, never a permanent fixture
of the layout).`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoDrawer } from '@arvo/js/components/Drawer';

const trigger = document.querySelector('#open-filters');
const marker = document.querySelector('#filters-marker');

const drawer = ArvoDrawer.initialize(marker, {
  side: 'right',
  title: 'Filters',
  hasMask: true,
  closeOnEscape: true,
  closeOnOutsideClick: true,
  lockScroll: 'auto',
  width: 360,
  stickyHeader: {
    search: true,
    // Only renders while a query is active; update the count via setInfo().
    info: { type: 'info', message: '', showWhen: 'filtered' },
  },
  // Build the body yourself -- pass an element, an HTML string, or a callback.
  content: filtersListEl,
  actions: [
    { id: 'reset', label: 'Reset', variant: 'outline' },
    { id: 'apply', label: 'Apply', variant: 'primary' },
  ],
  onOpenChange: (open) => console.log('drawer open:', open),
  onClose: (reason) => console.log('drawer close reason:', reason),
  // The consumer owns filtering -- recompute and surface the count yourself.
  onSearchChange: (query) => {
    const { visible, total } = filterMyContent(query);
    drawer.setInfo({ type: 'info', message: \`Showing \${visible} of \${total}\`, showWhen: 'filtered' });
  },
});

trigger.addEventListener('click', () => drawer.open());

// Imperative lifecycle
drawer.open();
drawer.close();             // reason defaults to 'programmatic'
drawer.close('mask-click'); // explicit reason
drawer.toggle();
drawer.isOpen();            // => boolean

// Update content at runtime
drawer.setTitle('Updated Title');
drawer.setContent(newBodyEl);
drawer.setStickyHeader({ tabs: [{ id: 't1', label: 'Tab 1' }] });
// Update the sticky info row in place (preserves search focus).
drawer.setInfo({ type: 'info', message: 'Showing 3 of 12', showWhen: 'filtered' });

// State
drawer.loading(true);
drawer.disabled(true);

// Destroy (closes if open, removes portaled DOM, hides backdrop, removes listeners)
drawer.destroy();
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"dom-scaffold-rendered-html-reference",children:"DOM scaffold (rendered HTML reference)"}),`
`,e.jsxs(n.p,{children:["The host ",e.jsx(n.code,{children:".arvo-drw"})," and an optional ",e.jsx(n.code,{children:".arvo-drw__backdrop"}),` are rendered as
`,e.jsx(n.strong,{children:"siblings"})," of the portal root (typically ",e.jsx(n.code,{children:"document.body"}),`). Inner anatomy
is rendered by panel-shell with `,e.jsx(n.code,{children:'parentBlock="arvo-drw"'}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- portaled into options.container || document.body -->
<div class="arvo-drw__backdrop arvo-backdrop arvo-backdrop--animated"
     style="background-color: rgba(0, 0, 0, 0.32);"
     aria-hidden="true"></div>
<div class="arvo-drw arvo-drw--side-right arvo-drw--with-mask arvo-drw--mask-light open"
     style="--arvo-drw-width: 360px;">
  <div class="arvo-drw__pane"
       role="dialog"
       aria-modal="true"
       aria-labelledby="drw-title-1">
    <!-- panel-shell renders __hdr, __sticky, __body, __footer with parentBlock='arvo-drw' -->
    <div class="arvo-drw__hdr">
      <div class="arvo-drw__hdr-lft">
        <h2 class="arvo-drw__title" id="drw-title-1">Filters</h2>
      </div>
      <div class="arvo-drw__hdr-actions">
        <button class="arvo-icon-btn arvo-icon-btn--sm arvo-icon-btn--tertiary arvo-drw__close"
                type="button" aria-label="Close drawer">
          <i class="o9con-close" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <!-- __sticky / __body / __footer rendered by panel-shell -->
  </div>
</div>
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"NO pin button."})," Drawer never renders ",e.jsx(n.code,{children:"__pin"}),`. If you need a pin
affordance, use ArvoSidePanel with `,e.jsx(n.code,{children:"isPinnable"}),"."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Backdrop is a sibling, not a child."}),` The backdrop element sits
alongside `,e.jsx(n.code,{children:".arvo-drw"}),` so the pane keeps a clean stacking context for
the slide animation and so SCSS can style each independently.`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"mask-configuration-arvodrawermaskconfig",children:["Mask configuration (",e.jsx(n.code,{children:"ArvoDrawerMaskConfig"}),")"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"hasMask"}),` accepts either a boolean or a configuration object that gives
fine control over the backdrop appearance and dismissal behaviour.`]}),`
`,e.jsxs(n.p,{children:[`| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `,e.jsx(n.code,{children:"variant"})," | ",e.jsx(n.code,{children:"'light' \\| 'dark'"})," | ",e.jsx(n.code,{children:"'light'"})," | Backdrop tone. Drives the ",e.jsx(n.code,{children:"arvo-drw--mask-{variant}"}),` host modifier. |
| `,e.jsx(n.code,{children:"opacity"})," | ",e.jsx(n.code,{children:"number"})," (0-1) | ",e.jsx(n.code,{children:"0.32"})," (light) / ",e.jsx(n.code,{children:"0.5"})," (dark) | Backdrop alpha. Set inline as ",e.jsx(n.code,{children:"rgba(0,0,0,opacity)"}),`. |
| `,e.jsx(n.code,{children:"blur"})," | ",e.jsx(n.code,{children:"number"})," (px) | ",e.jsx(n.code,{children:"0"})," | When > 0, applies ",e.jsx(n.code,{children:"backdrop-filter: blur(blur)px"}),` to the backdrop. |
| `,e.jsx(n.code,{children:"closeOnClick"})," | ",e.jsx(n.code,{children:"boolean"})," | inherits ",e.jsx(n.code,{children:"closeOnMaskClick"})," prop | Whether clicking the backdrop closes the drawer. The backdrop ALWAYS dispatches ",e.jsx(n.code,{children:"drw:mask-click"})," regardless. |"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// Boolean shorthand -- light mask, default opacity, dismiss on click
hasMask: true

// Explicit opt-out -- no backdrop at all, aria-modal="false"
hasMask: false

// Custom config -- dark theme, half-opacity, blur background, suppress click dismissal
hasMask: { variant: 'dark', opacity: 0.5, blur: 8, closeOnClick: false }
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"close-reason-payload",children:["Close ",e.jsx(n.code,{children:"reason"})," payload"]}),`
`,e.jsxs(n.p,{children:["Every close dispatches ",e.jsx(n.code,{children:"drw:close"})," with ",e.jsx(n.code,{children:"detail: { reason: ArvoDrawerCloseReason }"}),`,
and the `,e.jsx(n.code,{children:"onClose(reason)"}),` callback receives the same value. The reason
identifies which path triggered the close:`]}),`
`,e.jsxs(n.p,{children:[`| Reason | Source |
| --- | --- |
| `,e.jsx(n.code,{children:"'escape'"})," | User pressed Escape (when ",e.jsx(n.code,{children:"closeOnEscape"})," is ",e.jsx(n.code,{children:"true"}),`). |
| `,e.jsx(n.code,{children:"'mask-click'"})," | User clicked the backdrop (when ",e.jsx(n.code,{children:"closeOnClick"})," resolves ",e.jsx(n.code,{children:"true"}),"). The ",e.jsx(n.code,{children:"drw:mask-click"}),` event always fires first, regardless of whether the click closes. |
| `,e.jsx(n.code,{children:"'close-button'"})," | User clicked the panel-shell ",e.jsx(n.code,{children:"__close"}),` button. |
| `,e.jsx(n.code,{children:"'programmatic'"})," | Default for ",e.jsx(n.code,{children:"drawer.close()"})," / ",e.jsx(n.code,{children:"handle.close()"})," with no argument. |"]}),`
`,e.jsxs(n.p,{children:[`You can also override the reason explicitly:
`,e.jsx(n.code,{children:"drawer.close('mask-click')"}),". Returning ",e.jsx(n.code,{children:"false"})," from ",e.jsx(n.code,{children:"onClose(reason)"}),`
cancels the close.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,e.jsxs(n.p,{children:[`The following callbacks work in both frameworks. In React they are props;
in JS they are options passed to `,e.jsx(n.code,{children:"initialize()"}),"."]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Signature"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onOpenChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(open: boolean) => void"})}),e.jsx("td",{children:"Fires when open state changes (after slide animation begins)."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onOpen"})}),e.jsx("td",{children:e.jsx("code",{children:"() => boolean | void"})}),e.jsxs("td",{children:["Fires before the drawer opens. Return ",e.jsx("code",{children:"false"})," to cancel."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onClose"})}),e.jsx("td",{children:e.jsx("code",{children:"(reason: ArvoDrawerCloseReason) => boolean | void"})}),e.jsxs("td",{children:["Fires before the drawer closes. Return ",e.jsx("code",{children:"false"})," to cancel."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onBack"})}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsxs("td",{children:["Fires when the back button is clicked (when ",e.jsx("code",{children:"hasBackButton"}),")."]})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"drawer-specific-props--options",children:"Drawer-specific props / options"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Prop / option"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Default"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"side"})}),e.jsx("td",{children:e.jsx("code",{children:"'left' | 'right' | 'top' | 'bottom'"})}),e.jsx("td",{children:e.jsx("code",{children:"'right'"})}),e.jsxs("td",{children:["Edge the pane slides in from. ",e.jsx("code",{children:"'top'"})," and ",e.jsx("code",{children:"'bottom'"})," are reserved for v2 and currently fall back to ",e.jsx("code",{children:"'right'"})," with a dev ",e.jsx("code",{children:"console.warn"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"container"})}),e.jsx("td",{children:e.jsx("code",{children:"HTMLElement | (() => HTMLElement) | null"})}),e.jsx("td",{children:e.jsx("code",{children:"document.body"})}),e.jsx("td",{children:"Portal target. A function is invoked at open time so refs can be threaded in."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"hasMask"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | ArvoDrawerMaskConfig"})}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:'Render a backdrop sibling. See "Mask configuration" above.'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"closeOnEscape"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:"Close on Escape keydown. Top-level switch; cannot be overridden by mask config."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"closeOnMaskClick"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsxs("td",{children:["Default value for ",e.jsx("code",{children:"ArvoDrawerMaskConfig.closeOnClick"}),". Mask config wins when both are set."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"lockScroll"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | 'auto'"})}),e.jsx("td",{children:e.jsx("code",{children:"'auto'"})}),e.jsxs("td",{children:[e.jsx("code",{children:"'auto'"})," locks document scroll iff ",e.jsx("code",{children:"hasMask"})," is truthy. Explicit boolean overrides."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"width"})}),e.jsx("td",{children:e.jsx("code",{children:"string | number"})}),e.jsx("td",{children:e.jsx("code",{children:"320"})}),e.jsxs("td",{children:["Pane width as CSS length (number = px). Sets ",e.jsx("code",{children:"--arvo-drw-width"}),". Applies to left/right sides."]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"minWidth"})," / ",e.jsx("code",{children:"maxWidth"})]}),e.jsx("td",{children:e.jsx("code",{children:"string | number"})}),e.jsxs("td",{children:[e.jsx("code",{children:"280"})," / ",e.jsx("code",{children:"'80vw'"})]}),e.jsxs("td",{children:["Width constraints. Set ",e.jsx("code",{children:"--arvo-drw-min-width"})," / ",e.jsx("code",{children:"--arvo-drw-max-width"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"height"})}),e.jsx("td",{children:e.jsx("code",{children:"string | number | null"})}),e.jsx("td",{children:e.jsx("code",{children:"null"})}),e.jsx("td",{children:"Reserved for the v2 top/bottom variants. Currently a no-op."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"animationDuration"})}),e.jsxs("td",{children:[e.jsx("code",{children:"number"})," (ms)"]}),e.jsx("td",{children:e.jsx("code",{children:"200"})}),e.jsxs("td",{children:["Slide animation duration. Sets ",e.jsx("code",{children:"--arvo-drw-slide-duration"}),"."]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"ariaLabel"})," / ",e.jsx("code",{children:"ariaLabelledBy"})]}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"--"}),e.jsxs("td",{children:["ARIA label or labelledby for ",e.jsx("code",{children:"__pane"}),". Falls back to panel-shell ",e.jsx("code",{children:"__title"}),"'s id."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isClosable"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:"Show the panel-shell close button in the header."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isLoading"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"Pattern B skeleton loading state."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isDisabled"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"Disable the entire drawer (focus trap is suppressed when disabled)."})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"panel-shell-passthrough-props",children:"Panel-shell passthrough props"}),`
`,e.jsxs(n.p,{children:[`These props are forwarded verbatim to the embedded panel-shell. Their
semantics are defined by the panel-shell shared pattern (see
`,e.jsx(n.code,{children:"architecture/14-SHARED-REFERENCE.md"})," section 1.9 for the full contract)."]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Prop"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Default"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"title"})}),e.jsx("td",{children:e.jsx("code",{children:"string | null"})}),e.jsx("td",{children:e.jsx("code",{children:"null"})}),e.jsxs("td",{children:["Drawer title text rendered in ",e.jsx("code",{children:"__title"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"hasHeader"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:"Whether to render the header section."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"hasBackButton"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"Show a back arrow button in the header."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"headerActions"})}),e.jsx("td",{children:e.jsx("code",{children:"ArvoPanelHeaderAction[]"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:"Header-action buttons (btn, dropdown, split, switch, checkbox)."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"stickyHeader"})}),e.jsx("td",{children:e.jsx("code",{children:"ArvoPanelStickyHeaderConfig | false"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"Sticky pre-body region config (search, tabs, banner, info, slot)."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"children"})," (React) / ",e.jsx("code",{children:"content"})," (JS)"]}),e.jsxs("td",{children:[e.jsx("code",{children:"ReactNode"})," / ",e.jsx("code",{children:"HTMLElement | string | ((el) => void)"})]}),e.jsx("td",{children:"--"}),e.jsx("td",{children:"Arbitrary custom body content. The drawer ships no built-in item list -- build and filter the body yourself."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"actions"})}),e.jsx("td",{children:e.jsx("code",{children:"ArvoPanelAction[] | false"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsxs("td",{children:["Footer action buttons. Pass ",e.jsx("code",{children:"false"})," to suppress the footer."]})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"sticky-info-row----arvomessagealert",children:"Sticky info row -- ArvoMessageAlert"}),`
`,e.jsxs(n.p,{children:["Drawer composes the same ",e.jsx(n.code,{children:"panel-shell"}),` shared pattern as SidePanel, so the
`,e.jsx(n.code,{children:"__info"})," slot below the search renders the ",e.jsxs(n.strong,{children:["public ",e.jsx(n.code,{children:"ArvoMessageAlert"}),`
component`]})," (icon + message styled by the registered ",e.jsx(n.code,{children:"msg-alert"}),` variants),
NOT a Drawer-specific element. The rendered DOM is identical across both
panels:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="arvo-drw__info">
  <div class="arvo-msg-alert arvo-msg-alert--info" role="status">
    <div class="arvo-msg-alert__body">
      <span class="arvo-msg-alert__ico" aria-hidden="true"></span>
      <span class="arvo-msg-alert__msg">24 matching results</span>
    </div>
  </div>
</div>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"role"})," is ",e.jsx(n.code,{children:"alert"})," for ",e.jsx(n.code,{children:"error"}),", ",e.jsx(n.code,{children:"warning"}),", and ",e.jsx(n.code,{children:"block"})," types and ",e.jsx(n.code,{children:"status"})," for ",e.jsx(n.code,{children:"info"}),`,
`,e.jsx(n.code,{children:"success"}),", and ",e.jsx(n.code,{children:"neutral"}),". Both React and JS render an ",e.jsx(n.code,{children:"ArvoMessageAlert"})," instance."]}),`
`,e.jsx(n.p,{children:"Supported message-alert types:"}),`
`,e.jsxs(n.p,{children:["| ",e.jsx(n.code,{children:"type"}),` | Role | Glyph + colour |
|--------|------|----------------|
| `,e.jsx(n.code,{children:"info"})," (default) | ",e.jsx(n.code,{children:"status"}),` | info icon, info-dark text |
| `,e.jsx(n.code,{children:"success"})," | ",e.jsx(n.code,{children:"status"}),` | check icon, positive text |
| `,e.jsx(n.code,{children:"neutral"})," | ",e.jsx(n.code,{children:"status"}),` | dot icon, neutral text |
| `,e.jsx(n.code,{children:"warning"})," | ",e.jsx(n.code,{children:"alert"}),` | triangle icon, warning text |
| `,e.jsx(n.code,{children:"error"})," | ",e.jsx(n.code,{children:"alert"})," | block icon, negative text |"]}),`
`,e.jsxs(n.p,{children:["In both React and JS, the slot renders an ",e.jsx(n.code,{children:"ArvoMessageAlert"}),` instance. In React,
pass `,e.jsx(n.code,{children:"info={{ type: 'info', message: '...' }}"}),` on the Drawer; internally
it renders `,e.jsx(n.code,{children:"<ArvoMessageAlert type={...} message={...} />"}),`. In JS,
the panel-shell creates an `,e.jsx(n.code,{children:"ArvoMessageAlert.initialize(...)"})," instance."]}),`
`,e.jsxs(n.p,{children:[`The consumer owns filtering, so drive the message yourself from a reactive
`,e.jsx(n.code,{children:"stickyHeader.info"})," (React) or the imperative ",e.jsx(n.code,{children:"setInfo()"}),` method (JS). Gate the
row with `,e.jsx(n.code,{children:"showWhen: 'filtered'"}),` so it only appears while a query is active --
`,e.jsx(n.code,{children:"setInfo()"}),` updates the row in place without rebuilding the sticky region, so
search focus is preserved.`]}),`
`,e.jsx(n.h3,{id:"custom-body-content",children:"Custom body content"}),`
`,e.jsx(n.p,{children:"The drawer ships no built-in item list. Fill the body with whatever you need:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"React"})," -- pass ",e.jsx(n.code,{children:"children"}),". Triggers, fields, and links must be ",e.jsx(n.code,{children:"Arvo*"}),`
components; plain text rows can be `,e.jsx(n.code,{children:"<div>"})," / ",e.jsx(n.code,{children:"<span>"})," / ",e.jsx(n.code,{children:"<ul>"})," / ",e.jsx(n.code,{children:"<li>"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"JS"})," -- pass ",e.jsx(n.code,{children:"content"})," as an ",e.jsx(n.code,{children:"HTMLElement"}),`, an HTML string, or a callback
that receives the body container, exactly like `,e.jsx(n.code,{children:"ArvoPopover"}),"'s ",e.jsx(n.code,{children:"content"}),`.
Swap it later with `,e.jsx(n.code,{children:"drawer.setContent(...)"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.strong,{children:"Kitchen sink"})," and ",e.jsx(n.strong,{children:"Filter Drawer"})," stories for live examples."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"js-only-methods",children:"JS-only methods"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["In React, use props and the ",e.jsx(n.code,{children:"instanceRef"})," imperative handle instead."]}),`
`]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoDrawer.initialize(el, options)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLElement"}),", ",e.jsx("code",{children:"ArvoDrawerOptions"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoDrawer"})}),e.jsxs("td",{children:["Factory. The ",e.jsx("code",{children:"el"})," arg is a marker / cleanup anchor; the visual root is portaled to ",e.jsx("code",{children:"options.container || document.body"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"open()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"Promise<void>"})}),e.jsx("td",{children:"Open the drawer. Resolves after the slide-in animation completes."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"close(reason?)"})}),e.jsx("td",{children:e.jsx("code",{children:"ArvoDrawerCloseReason | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"Promise<void>"})}),e.jsxs("td",{children:["Close the drawer. ",e.jsx("code",{children:"reason"})," defaults to ",e.jsx("code",{children:"'programmatic'"})," and is included in the ",e.jsx("code",{children:"drw:close"})," detail."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"toggle()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Toggle open/closed."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isOpen()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"Current open state."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setContent(content)"})}),e.jsx("td",{children:e.jsx("code",{children:"HTMLElement | string | ((el) => void) | null"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Replace the custom body content."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setStickyHeader(config)"})}),e.jsx("td",{children:e.jsx("code",{children:"ArvoPanelStickyHeaderConfig | false"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Update the sticky-header config."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setInfo(config)"})}),e.jsx("td",{children:e.jsx("code",{children:"ArvoPanelInfoConfig | false"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsxs("td",{children:["Update the sticky ",e.jsx("code",{children:"__info"})," row in place (preserves search focus). Pass ",e.jsx("code",{children:"false"})," to hide it."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setHeaderActions(actions)"})}),e.jsx("td",{children:e.jsx("code",{children:"ArvoPanelHeaderAction[]"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Replace header-action buttons."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setActions(actions)"})}),e.jsx("td",{children:e.jsx("code",{children:"ArvoPanelAction[] | false"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Replace footer actions."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"updateAction(id, patch)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"string"}),", ",e.jsx("code",{children:"Partial<...>"})]}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Merge a partial update into a single action by id."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"search(query?)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"string | void"})}),e.jsx("td",{children:"Get or set the current search query."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"selectedTab(id?)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"string | null | void"})}),e.jsx("td",{children:"Get or set the active tab id."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setTitle(title)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | null"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Update the drawer title."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"loading(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set Pattern B loading state."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set whole-panel disabled state."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"focus(target?)"})}),e.jsx("td",{children:e.jsx("code",{children:"'first' | 'title' | 'search' | 'list' | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Move focus into the drawer."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Teardown: closes if open, removes portaled DOM, hides backdrop, removes listeners. Subsequent method calls are no-ops."})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"custom-events",children:"Custom Events"}),`
`,e.jsxs(n.p,{children:["Dispatched on ",e.jsx(n.code,{children:"__pane"}),` and bubble up through the portal. Listen with
`,e.jsx(n.code,{children:"paneEl.addEventListener()"})," or via document-level delegation."]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Payload"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"drw:open"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:"Drawer opened (slide-in complete, focus trap active)."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"drw:close"})}),e.jsx("td",{children:e.jsx("code",{children:"{ reason: ArvoDrawerCloseReason }"})}),e.jsx("td",{children:'Drawer closed (slide-out complete, focus restored). See "Close reason payload" above.'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"drw:mask-click"})}),e.jsx("td",{children:"--"}),e.jsxs("td",{children:["Backdrop was clicked. Always fires when the backdrop receives a direct mousedown -- the close that follows (if ",e.jsx("code",{children:"closeOnClick"}),") is dispatched as a separate ",e.jsx("code",{children:"drw:close"})," event with ",e.jsx("code",{children:"reason: 'mask-click'"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"drw:back"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:"Back button clicked."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"drw:action"})}),e.jsx("td",{children:e.jsx("code",{children:"{ id: string, type: string }"})}),e.jsx("td",{children:"Header-action activated."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"drw:tab-select"})}),e.jsx("td",{children:e.jsx("code",{children:"{ id: string, index: number }"})}),e.jsx("td",{children:"Sticky-header tab selected."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"drw:search"})}),e.jsx("td",{children:e.jsx("code",{children:"{ value: string, matchedCount: null }"})}),e.jsxs("td",{children:["Search query changed. ",e.jsx("code",{children:"matchedCount"})," is always ",e.jsx("code",{children:"null"})," -- the consumer owns filtering of the custom body."]})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"keyboard-interactions",children:"Keyboard Interactions"}),`
`,e.jsxs(n.p,{children:[`| Key | Action |
| --- | --- |
| `,e.jsx(n.code,{children:"Escape"})," | When ",e.jsx(n.code,{children:"closeOnEscape"})," is ",e.jsx(n.code,{children:"true"}),", closes the drawer with ",e.jsx(n.code,{children:"reason: 'escape'"}),`. The Escape listener does NOT deactivate the focus trap directly -- the drawer owns the dismissal path. |
| `,e.jsx(n.code,{children:"Tab"}),` | Cycles focus within the pane (focus trap activates after slide-in completes). |
| `,e.jsx(n.code,{children:"Shift+Tab"}),` | Cycles focus backwards. |
| `,e.jsx(n.code,{children:"Enter"}),` | On back / close buttons: activates them. Custom body content handles its own activation. |
| `,e.jsx(n.code,{children:"Space"})," | On switch / checkbox header-actions: toggles them. |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["ARIA attributes live on ",e.jsx(n.code,{children:"__pane"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'role="dialog"'})," always."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'aria-modal="true"'})," when ",e.jsx(n.code,{children:"hasMask"})," is truthy; ",e.jsx(n.code,{children:'aria-modal="false"'})," otherwise."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'aria-busy="true"'})," during ",e.jsx(n.code,{children:"isLoading"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'aria-disabled="true"'})," when ",e.jsx(n.code,{children:"isDisabled"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'aria-hidden="true"'}),` when closed (the drawer keeps the host mounted so the
slide-out animation can play).`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-label"})," set when ",e.jsx(n.code,{children:"ariaLabel"})," prop is provided and no title exists."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-labelledby"})," references ",e.jsx(n.code,{children:"__title"})," id when title is provided."]}),`
`]}),`
`,e.jsx(n.p,{children:"Focus management:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The previously-focused element is captured on ",e.jsx(n.code,{children:"open()"}),"."]}),`
`,e.jsx(n.li,{children:`Focus trap activates AFTER slide-in completes (so the consumer's trigger
isn't tabbed out from before the pane is interactive).`}),`
`,e.jsx(n.li,{children:"Focus trap deactivates BEFORE slide-out begins."}),`
`,e.jsxs(n.li,{children:["On ",e.jsx(n.code,{children:"close()"}),`, focus is restored to the previously-focused element via
`,e.jsx(n.code,{children:"element.focus({ preventScroll: true })"})," once slide-out completes."]}),`
`]}),`
`,e.jsxs(n.p,{children:["BEM block state classes go on the host ",e.jsx(n.code,{children:".arvo-drw"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".arvo-drw.open"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".arvo-drw.is-disabled"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".arvo-drw.loading"})}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"loading-pattern-b",children:"Loading Pattern (B)"}),`
`,e.jsxs(n.p,{children:[`Drawer inherits Pattern B (structured skeleton) via the panel-shell shared
pattern. When `,e.jsx(n.code,{children:"isLoading"})," is true:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".loading"})," class is set on the host ",e.jsx(n.code,{children:".arvo-drw"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'aria-busy="true"'})," is set on ",e.jsx(n.code,{children:"__pane"}),"."]}),`
`,e.jsxs(n.li,{children:["Panel-shell hides ",e.jsx(n.code,{children:"__sticky"})," and ",e.jsx(n.code,{children:"__footer"}),"."]}),`
`,e.jsxs(n.li,{children:["Panel-shell renders skeleton rows in ",e.jsx(n.code,{children:"__body"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// React
<ArvoDrawer isLoading title="Loading..." />

// JS
drawer.loading(true);
drawer.loading(false);
drawer.loading(); // => boolean
`})})]})}function _e(r={}){const{wrapper:n}={...c(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{_e as default};
