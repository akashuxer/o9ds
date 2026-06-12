import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as l,M as c,C as s,a as o}from"./blocks-DLeo0hIy.js";import{S as a,P as d,K as h,L as x,O as j,a as p,b as u,c as y,d as v,e as f,W as g,f as b,H as m,g as w,h as k,i as S,j as P,F as r,k as _,l as A,m as T,n as C,D as M,o as H,G as O}from"./SidePanel.stories-D2fzYjSY.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./sample-content-DZHJz4uL.js";import"./useControllableState-BcENo7ec.js";import"./ActionMenu-Bz8nuUE_.js";import"./client-DfB1ehiO.js";import"./index18-B-vHVXJV.js";import"./Button-B8O_kk1m.js";import"./loading-flag-DkqmYwgU.js";import"./IconButton-BgwDUYzG.js";import"./useTooltip-DZu1XpnP.js";import"./index28-DgjIRxoq.js";import"./Search-B0ooNraj.js";import"./MessageAlert-DBQwY950.js";import"./ButtonGroup-Bky2dG1G.js";import"./BannerAlert-DwOPtWj_.js";import"./inline-content-CllLfblQ.js";import"./Link-NIjDRzO0.js";import"./EmptyState-B01eqtyy.js";import"./Checkbox-k9WMnmR3.js";import"./FormLabel-Dn-HbpfA.js";import"./Radio-0NcOE_jm.js";import"./Switch-BDE_dn2p.js";import"./useOverlay-Bo9f1g6f.js";import"./OverlayContext-C5RootgB.js";import"./useFocusTrap-BePVbEUc.js";import"./menu-search-C2FCcKsr.js";import"./Indicator-DI-QBEWN.js";import"./SplitIconButton-CKjlqb8i.js";import"./Tabstrip-B41dlssz.js";import"./Textbox-BjaSSAvr.js";import"./index2-HSp4ZJrG.js";function t(i){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:a}),`
`,e.jsx(n.h1,{id:"sidepanel",children:"SidePanel"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Content-area-scoped pane that docks at the layout level (default) or overlays
sibling content via a slide-in animation. Pin/unpin flips between the layout and
overlay variants WITHOUT remounting the DOM, preserving panel state, scroll
position, and child instances. The inner anatomy (header, sticky region, body,
footer, empty/skeleton states) is owned by the shared panel-shell pattern. The
body is arbitrary custom content you pass via `,e.jsx(n.code,{children:"children"}),` (like a Popover); the
panel ships no built-in item list. When you wire `,e.jsx(n.code,{children:"search"}),`, you own filtering and
surface a "Showing N of M" count via a reactive `,e.jsx(n.code,{children:"stickyHeader.info"}),` (or the
`,e.jsx(n.code,{children:"setInfo()"})," handle) gated by ",e.jsx(n.code,{children:"showWhen: 'filtered'"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Dock supporting content (filters, details, an assistant, a workflow) beside
the main work area without leaving the page.`}),`
`,e.jsxs(n.li,{children:["Use the ",e.jsx(n.code,{children:"layout"})," variant for a persistent inline pane, or ",e.jsx(n.code,{children:"overlay"}),` for a
slide-in that floats over sibling content; `,e.jsx(n.code,{children:"isPinnable"}),` lets users flip
between them.`]}),`
`,e.jsxs(n.li,{children:[`For a transient, page-level surface that slides from the viewport edge, use
`,e.jsx(n.code,{children:"Drawer"}),". For a blocking confirmation, use ",e.jsx(n.code,{children:"AlertDialog"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(s,{of:d,sourceState:"shown"}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(n.h2,{id:"kitchen-sink",children:"Kitchen sink"}),`
`,e.jsxs(n.p,{children:[`Everything at once: a 380px right-docked review pane with a title, back + close
buttons, every header-action type (button, dropdown, split, switch, checkbox), a
dismissible banner, tabs, search with a Ctrl+K shortcut, a filtered-only inline
info row ("Showing N of M" -- type to reveal it), a custom list of single-label
rows, and a Reset / Cancel / Apply footer. The list filters in place against the
search query and the active tab; the info message is driven by a reactive
`,e.jsx(n.code,{children:"stickyHeader.info"})," with ",e.jsx(n.code,{children:"showWhen: 'filtered'"}),"."]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"layout"})," docks inline; ",e.jsx(n.code,{children:"overlay"})," slides in over sibling content."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h2,{id:"docking-side",children:"Docking side"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h2,{id:"pinning",children:"Pinning"}),`
`,e.jsx(n.p,{children:"Pinning flips between layout and overlay without remounting the pane."}),`
`,e.jsx(s,{of:y}),`
`,e.jsx(s,{of:v}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.h2,{id:"splitter",children:"Splitter"}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(n.h2,{id:"header",children:"Header"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(s,{of:w}),`
`,e.jsx(n.h2,{id:"sticky-region",children:"Sticky region"}),`
`,e.jsx(s,{of:k}),`
`,e.jsx(s,{of:S}),`
`,e.jsx(s,{of:P}),`
`,e.jsx(n.h2,{id:"custom-content-and-filtering",children:"Custom content and filtering"}),`
`,e.jsxs(n.p,{children:["The body is whatever you pass via ",e.jsx(n.code,{children:"children"}),`. To filter it, hold the query in
state, filter your own content, and surface a "Showing N of M" message through a
reactive `,e.jsx(n.code,{children:"stickyHeader.info"})," (or the imperative ",e.jsx(n.code,{children:"setInfo()"}),` handle) gated by
`,e.jsx(n.code,{children:"showWhen: 'filtered'"})," so the row only appears while a query is active."]}),`
`,e.jsx(s,{of:r}),`
`,e.jsx(n.h2,{id:"footer",children:"Footer"}),`
`,e.jsx(n.p,{children:"The primary action always renders on the right regardless of source order."}),`
`,e.jsx(s,{of:_}),`
`,e.jsx(s,{of:A}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(s,{of:T}),`
`,e.jsx(s,{of:C}),`
`,e.jsx(s,{of:M}),`
`,e.jsx(n.h2,{id:"composition-recipes",children:"Composition recipes"}),`
`,e.jsx(s,{of:r}),`
`,e.jsx(s,{of:H}),`
`,e.jsx(s,{of:O}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsx(n.p,{children:`Content-area-scoped pane that docks at the layout level (default) or overlays
sibling content via slide-in animation. Pin/unpin flips between layout and
overlay variants WITHOUT remounting the DOM, preserving panel state, scroll
position, and child instances.`}),`
`,e.jsxs(n.p,{children:[`The inner anatomy (header, sticky region, body, footer, empty/skeleton states)
is owned by the `,e.jsx(n.strong,{children:"panel-shell"}),` shared pattern
(`,e.jsx(n.code,{children:"packages/styles/src/mixins/_panel-shell.scss"}),`). SidePanel adds only the
positional concerns: layout vs in-content overlay mounting, the pin button
(`,e.jsx(n.code,{children:"__pin"}),`), the side-aware splitter slot, and the variant flip lifecycle. The
body is arbitrary custom content -- pass an element / HTML string / callback via
the `,e.jsx(n.code,{children:"content"})," option (JS) or ",e.jsx(n.code,{children:"children"}),` (React). There is no built-in item list;
the consumer owns filtering and drives a "Showing N of M" message through
`,e.jsx(n.code,{children:"setInfo()"})," (or a reactive ",e.jsx(n.code,{children:"stickyHeader.info"}),") gated by ",e.jsx(n.code,{children:"showWhen: 'filtered'"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoSidePanel } from '@arvo/js/components/SidePanel';

const el = document.querySelector('#my-panel');
const panel = ArvoSidePanel.initialize(el, {
  variant: 'layout',
  side: 'right',
  title: 'Filters',
  isPinnable: true,
  defaultPinned: true,
  isClosable: true,
  // Splitter rail is opt-in until ArvoSplitter ships (currently inert 4px placeholder).
  // Defaults to false. Pass \`'auto'\` to render in layout mode only, or \`true\` to force.
  hasSplitter: false,
  stickyHeader: {
    search: true,
    // Only renders while a query is active; update the count via setInfo().
    info: { type: 'info', message: '', showWhen: 'filtered' },
  },
  // Build the body yourself -- pass an element, an HTML string, or a callback.
  content: filtersListEl,
  actions: [
    { id: 'clear', label: 'Clear', variant: 'outline' },
    { id: 'apply', label: 'Apply', variant: 'primary' },
  ],
  onPinChange: (pinned) => console.log('pinned:', pinned),
  // The consumer owns filtering -- recompute and surface the count yourself.
  onSearchChange: (query) => {
    const { visible, total } = filterMyContent(query);
    panel.setInfo({ type: 'info', message: \`Showing \${visible} of \${total}\`, showWhen: 'filtered' });
  },
});

// Toggle pin programmatically
panel.pinned(false);   // unpin (flips to overlay)
panel.pinned(true);    // pin (flips to layout)
panel.pinned();        // => boolean (current state)

// Overlay lifecycle
panel.open();
panel.close();
panel.toggle();
panel.isOpen();        // => boolean

// Update content at runtime
panel.setTitle('Updated Title');
panel.setContent(newBodyEl);
panel.setStickyHeader({ tabs: [{ id: 't1', label: 'Tab 1' }] });
// Update the sticky info row in place (preserves search focus).
panel.setInfo({ type: 'info', message: 'Showing 3 of 12', showWhen: 'filtered' });

// State
panel.loading(true);
panel.disabled(true);

// Destroy
panel.destroy();
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"pinunpin-dom-position-invariance",children:"Pin/unpin DOM-position invariance"}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"isPinnable"}),` is true and the user toggles the pin button (or the consumer
calls `,e.jsx(n.code,{children:"pinned(true|false)"})," / ",e.jsx(n.code,{children:"setVariant(...)"}),`), the active variant flips
between `,e.jsx(n.code,{children:"layout"})," and ",e.jsx(n.code,{children:"overlay"}),". The pane ",e.jsx(n.strong,{children:"stays at its current DOM position"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Child instances are NOT destroyed."}),`
`,e.jsx(n.li,{children:"Scroll position is preserved."}),`
`,e.jsx(n.li,{children:"Focus stays on the pin button."}),`
`,e.jsx(n.li,{children:"The inner panel-shell instance is NOT torn down."}),`
`,e.jsxs(n.li,{children:["Only CSS classes change (",e.jsx(n.code,{children:"arvo-sp--layout"})," / ",e.jsx(n.code,{children:"arvo-sp--overlay"}),`,
`,e.jsx(n.code,{children:"is-pinned"})," / ",e.jsx(n.code,{children:"is-unpinned"}),")."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"dom-scaffold-rendered-html-reference",children:"DOM scaffold (rendered HTML reference)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="arvo-sp arvo-sp--layout arvo-sp--side-right arvo-sp--pinnable arvo-sp--closable is-pinned">
  <div class="arvo-sp__pane" role="region" aria-labelledby="sp-title-1">
    <!-- Inner anatomy (__hdr/__sticky/__body/__footer) is rendered by panel-shell with parentBlock='arvo-sp' -->
    <div class="arvo-sp__hdr">
      <div class="arvo-sp__hdr-lft">
        <button class="arvo-icon-btn arvo-icon-btn--sm arvo-icon-btn--tertiary arvo-sp__back" type="button" aria-label="Back">
          <i class="o9con-arrow-left" aria-hidden="true"></i>
        </button>
        <h2 class="arvo-sp__title" id="sp-title-1">Panel Title</h2>
      </div>
      <div class="arvo-sp__hdr-actions">
        <span class="arvo-sp__action" data-action-id="filter" data-action-type="dropdown">
          <!-- ArvoDropdownIconButton instance -->
        </span>
        <!-- SidePanel-rendered __pin button (NOT in panel-shell) -->
        <button class="arvo-icon-btn arvo-icon-btn--sm arvo-icon-btn--tertiary arvo-sp__pin" type="button" aria-label="Unpin panel" aria-pressed="true">
          <i class="o9con-push-pin" aria-hidden="true"></i>
        </button>
        <button class="arvo-icon-btn arvo-icon-btn--sm arvo-icon-btn--tertiary arvo-sp__close" type="button" aria-label="Close panel">
          <i class="o9con-close" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <!-- Sticky / body / footer rendered by panel-shell -->
  </div>
</div>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,e.jsxs(n.p,{children:[`The following callbacks work in both frameworks. In React they are props; in JS
they are options passed to `,e.jsx(n.code,{children:"initialize()"}),"."]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Signature"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onPinChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(pinned: boolean) => void"})}),e.jsxs("td",{children:["Fires when the pinned state changes via the pin button or ",e.jsx("code",{children:"pinned()"})," method."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onOpenChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(open: boolean) => void"})}),e.jsx("td",{children:"Fires when overlay open state changes."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onOpen"})}),e.jsx("td",{children:e.jsx("code",{children:"() => boolean | void"})}),e.jsxs("td",{children:["Fires before overlay opens. Return ",e.jsx("code",{children:"false"})," to cancel."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onClose"})}),e.jsx("td",{children:e.jsx("code",{children:"() => boolean | void"})}),e.jsxs("td",{children:["Fires before overlay closes (or before close button is honored). Return ",e.jsx("code",{children:"false"})," to cancel."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onBack"})}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"Fires when the back button is clicked."})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"panel-shell-passthrough-props",children:"Panel-shell passthrough props"}),`
`,e.jsx(n.p,{children:`These props are forwarded verbatim to the embedded panel-shell. Their semantics
are defined by the panel-shell shared pattern.`}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Prop"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Default"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"title"})}),e.jsx("td",{children:e.jsx("code",{children:"string | null"})}),e.jsx("td",{children:e.jsx("code",{children:"null"})}),e.jsxs("td",{children:["Panel title text rendered in ",e.jsx("code",{children:"__title"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"hasHeader"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:"Whether to render the header section."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"hasBackButton"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"Show a back arrow button in the header."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onBack"})}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:"Callback when the back button is clicked."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"headerActions"})}),e.jsx("td",{children:e.jsx("code",{children:"ArvoPanelHeaderAction[]"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:"Header-action buttons (btn, dropdown, split, switch, checkbox)."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"stickyHeader"})}),e.jsx("td",{children:e.jsx("code",{children:"ArvoPanelStickyHeaderConfig | false"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"Sticky pre-body region config (search, tabs, banner, info, slot)."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"children"})," (React) / ",e.jsx("code",{children:"content"})," (JS)"]}),e.jsxs("td",{children:[e.jsx("code",{children:"ReactNode"})," / ",e.jsx("code",{children:"HTMLElement | string | ((el) => void)"})]}),e.jsx("td",{children:"--"}),e.jsx("td",{children:"Arbitrary custom body content. The panel ships no built-in item list -- build and filter the body yourself."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"actions"})}),e.jsx("td",{children:e.jsx("code",{children:"ArvoPanelAction[] | false"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsxs("td",{children:["Footer action buttons. Pass ",e.jsx("code",{children:"false"})," to suppress footer."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"hasFooter"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:"Explicit footer visibility override."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isClosable"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"Show the close button in the header."})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"sticky-info-row----arvomessagealert",children:"Sticky info row -- ArvoMessageAlert"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"__info"})," slot below the search renders the ",e.jsxs(n.strong,{children:["public ",e.jsx(n.code,{children:"ArvoMessageAlert"}),`
component`]}),`, not a SidePanel-specific element. The same BEM
(`,e.jsx(n.code,{children:".arvo-msg-alert .arvo-msg-alert--{type} .arvo-msg-alert__ico .arvo-msg-alert__msg"}),`) and icon glyphs that style form-input validation
messages flow through here, so visuals stay aligned across the design system.`]}),`
`,e.jsxs(n.p,{children:[`The consumer owns filtering, so drive the message yourself from a reactive
`,e.jsx(n.code,{children:"stickyHeader.info"})," (React) or the imperative ",e.jsx(n.code,{children:"setInfo()"}),` method (JS). Gate the
row with `,e.jsx(n.code,{children:"showWhen: 'filtered'"})," so it only appears while a query is active."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function FilterPanel() {
  const [query, setQuery] = useState('');
  const visible = myRows.filter((r) => r.includes(query));
  return (
    <ArvoSidePanel
      title="Filters"
      stickyHeader={{
        search: true,
        info: {
          // Type maps 1:1 to the ArvoMessageAlert type prop.
          type: 'info',
          message: \`Showing \${visible.length} of \${myRows.length}\`,
          showWhen: 'filtered',
        },
      }}
      onSearchChange={(q) => setQuery(q)}
    >
      {visible.map((r) => <div key={r}>{r}</div>)}
    </ArvoSidePanel>
  );
}
`})}),`
`,e.jsx(n.p,{children:"Rendered DOM inside the sticky region:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="arvo-sp__info">
  <div class="arvo-msg-alert arvo-msg-alert--info" role="status">
    <div class="arvo-msg-alert__body">
      <span class="arvo-msg-alert__ico" aria-hidden="true"></span>
      <span class="arvo-msg-alert__msg">24 matching results</span>
    </div>
  </div>
</div>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"role"})," is ",e.jsx(n.code,{children:"alert"})," for ",e.jsx(n.code,{children:"error"})," and ",e.jsx(n.code,{children:"warning"}),` types (assertive live region) and
`,e.jsx(n.code,{children:"status"})," for ",e.jsx(n.code,{children:"info"}),", ",e.jsx(n.code,{children:"success"}),", and ",e.jsx(n.code,{children:"neutral"}),` (polite live region). Both
the React and JS layers render an `,e.jsx(n.code,{children:"ArvoMessageAlert"})," instance directly."]}),`
`,e.jsx(n.p,{children:"Supported message-alert types:"}),`
`,e.jsxs(n.p,{children:["| ",e.jsx(n.code,{children:"type"}),` | Role | Glyph + colour |
|--------|------|----------------|
| `,e.jsx(n.code,{children:"info"})," (default) | ",e.jsx(n.code,{children:"status"}),` | info icon, info-dark text |
| `,e.jsx(n.code,{children:"success"})," | ",e.jsx(n.code,{children:"status"}),` | check icon, positive text |
| `,e.jsx(n.code,{children:"neutral"})," | ",e.jsx(n.code,{children:"status"}),` | dot icon, neutral text |
| `,e.jsx(n.code,{children:"warning"})," | ",e.jsx(n.code,{children:"alert"}),` | triangle icon, warning text |
| `,e.jsx(n.code,{children:"error"})," | ",e.jsx(n.code,{children:"alert"})," | block icon, negative text |"]}),`
`,e.jsxs(n.p,{children:["In both React and JS, the slot renders an ",e.jsx(n.code,{children:"ArvoMessageAlert"}),` instance. In React,
pass `,e.jsx(n.code,{children:"info={{ type: 'info', message: '...' }}"}),` on the SidePanel; internally
it renders `,e.jsx(n.code,{children:"<ArvoMessageAlert type={...} message={...} />"}),`. In JS,
the panel-shell creates an `,e.jsx(n.code,{children:"ArvoMessageAlert.initialize(...)"})," instance."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"custom-body-content",children:"Custom body content"}),`
`,e.jsx(n.p,{children:"The panel ships no built-in item list. Fill the body with whatever you need:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"React"})," -- pass ",e.jsx(n.code,{children:"children"}),". Triggers, fields, and links must be ",e.jsx(n.code,{children:"Arvo*"}),`
components; plain text rows can be `,e.jsx(n.code,{children:"<div>"})," / ",e.jsx(n.code,{children:"<span>"})," / ",e.jsx(n.code,{children:"<ul>"})," / ",e.jsx(n.code,{children:"<li>"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"JS"})," -- pass ",e.jsx(n.code,{children:"content"})," as an ",e.jsx(n.code,{children:"HTMLElement"}),`, an HTML string, or a callback
that receives the body container, exactly like `,e.jsx(n.code,{children:"ArvoPopover"}),"'s ",e.jsx(n.code,{children:"content"}),`.
Swap it later with `,e.jsx(n.code,{children:"panel.setContent(...)"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:["When you wire ",e.jsx(n.code,{children:"stickyHeader.search"}),`, you own filtering. Recompute your content
on each `,e.jsx(n.code,{children:"onSearchChange(query)"}),` and surface a "Showing N of M" count through a
reactive `,e.jsx(n.code,{children:"stickyHeader.info"})," (React) or ",e.jsx(n.code,{children:"panel.setInfo(...)"}),` (JS). Pair it with
`,e.jsx(n.code,{children:"showWhen: 'filtered'"}),` so the info row only appears while a query is active --
`,e.jsx(n.code,{children:"setInfo()"}),` updates the row in place without rebuilding the sticky region, so
search focus is preserved.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const content = buildFilterableList(); // your own element + apply(query) helper
const panel = ArvoSidePanel.initialize(el, {
  title: 'Demand Review',
  content: content.el,
  stickyHeader: {
    search: { placeholder: 'Search SKUs', shortcut: 'Ctrl+K' },
    info: { type: 'info', message: '', showWhen: 'filtered' },
  },
  onSearchChange: (query) => {
    const { visible, total } = content.apply(query);
    panel.setInfo({ type: 'info', message: \`Showing \${visible} of \${total}\`, showWhen: 'filtered' });
  },
});
`})}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.strong,{children:"Kitchen sink"})," and ",e.jsx(n.strong,{children:"Filter Pane"})," stories for live examples."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"js-only-methods",children:"JS-only methods"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"In React, use state props instead of imperative methods."}),`
`]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoSidePanel.initialize(el, options)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLElement"}),", ",e.jsx("code",{children:"ArvoSidePanelOptions"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoSidePanel"})}),e.jsx("td",{children:"Factory -- initialize component on a DOM element."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"open()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Open the overlay variant (slide-in). No-op in layout."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"close()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Close the overlay variant (slide-out)."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"toggle()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Toggle overlay open/closed."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isOpen()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsxs("td",{children:["Current open state (always ",e.jsx("code",{children:"true"})," for layout variant)."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"pinned(value?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set pinned state. Setting flips variant without remounting."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setVariant(variant)"})}),e.jsx("td",{children:e.jsx("code",{children:"'layout' | 'overlay'"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsxs("td",{children:["Imperative variant switch. Does not require ",e.jsx("code",{children:"isPinnable"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setContent(content)"})}),e.jsx("td",{children:e.jsx("code",{children:"HTMLElement | string | ((el) => void) | null"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Replace the custom body content."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setStickyHeader(config)"})}),e.jsx("td",{children:e.jsx("code",{children:"ArvoPanelStickyHeaderConfig | false"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Update the sticky-header config."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setInfo(config)"})}),e.jsx("td",{children:e.jsx("code",{children:"ArvoPanelInfoConfig | false"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsxs("td",{children:["Update the sticky ",e.jsx("code",{children:"__info"})," row in place (preserves search focus). Pass ",e.jsx("code",{children:"false"})," to hide it."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setHeaderActions(actions)"})}),e.jsx("td",{children:e.jsx("code",{children:"ArvoPanelHeaderAction[]"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Replace header-action buttons."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setActions(actions)"})}),e.jsx("td",{children:e.jsx("code",{children:"ArvoPanelAction[] | false"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Replace footer actions."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"updateAction(id, patch)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"string"}),", ",e.jsx("code",{children:"Partial<...>"})]}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Merge a partial update into a single action by id."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"search(query?)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"string | void"})}),e.jsx("td",{children:"Get or set the current search query."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"selectedTab(id?)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"string | null | void"})}),e.jsx("td",{children:"Get or set the active tab id."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setTitle(title)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | null"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Update the panel title."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"loading(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set Pattern B loading state."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set whole-panel disabled state."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"focus(target?)"})}),e.jsx("td",{children:e.jsx("code",{children:"'first' | 'title' | 'search' | 'list' | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Move focus into the panel."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Teardown: closes overlay, destroys shell and pin button, removes DOM."})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"custom-events",children:"Custom Events"}),`
`,e.jsxs(n.p,{children:["Dispatched on ",e.jsx(n.code,{children:"__pane"}),". Listen with ",e.jsx(n.code,{children:"el.addEventListener()"}),"."]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Payload"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"sp:open"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:"Overlay variant opened (slide-in complete)."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"sp:close"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:"Panel closed (overlay variant) or close button clicked (either variant)."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"sp:pin"})}),e.jsx("td",{children:e.jsx("code",{children:"{ pinned: boolean }"})}),e.jsxs("td",{children:["Pinned state changed via pin button or ",e.jsx("code",{children:"pinned()"})," method."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"sp:back"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:"Back button clicked."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"sp:action"})}),e.jsx("td",{children:e.jsx("code",{children:"{ id: string, type: string }"})}),e.jsx("td",{children:"Header-action activated."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"sp:tab-select"})}),e.jsx("td",{children:e.jsx("code",{children:"{ id: string, index: number }"})}),e.jsx("td",{children:"Sticky-header tab selected."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"sp:search"})}),e.jsx("td",{children:e.jsx("code",{children:"{ value: string, matchedCount: null }"})}),e.jsxs("td",{children:["Search query changed. ",e.jsx("code",{children:"matchedCount"})," is always ",e.jsx("code",{children:"null"})," -- the consumer owns filtering of the custom body."]})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"keyboard-interactions",children:"Keyboard Interactions"}),`
`,e.jsxs(n.p,{children:[`| Key | Action |
|-----|--------|
| `,e.jsx(n.code,{children:"Escape"}),` | Overlay variant only: closes panel, returns focus to previously-focused element. Layout variant ignores. |
| `,e.jsx(n.code,{children:"Tab"}),` | Cycles focus within the panel (overlay variant traps; layout variant flows naturally). |
| `,e.jsx(n.code,{children:"Shift+Tab"}),` | Cycles focus backwards. |
| `,e.jsx(n.code,{children:"Enter"}),` | On back / pin / close buttons: activates them. Custom body content handles its own activation. |
| `,e.jsx(n.code,{children:"Space"})," | On switch/checkbox header-actions: toggles them. |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["ARIA attributes live on ",e.jsx(n.code,{children:"__pane"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Layout variant:"})," ",e.jsx(n.code,{children:'role="region"'}),", no ",e.jsx(n.code,{children:"aria-modal"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Overlay variant:"})," ",e.jsx(n.code,{children:'role="dialog"'}),", ",e.jsx(n.code,{children:'aria-modal="false"'})," (side panels do NOT block the page)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'aria-busy="true"'})," during ",e.jsx(n.code,{children:"isLoading"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'aria-disabled="true"'})," when ",e.jsx(n.code,{children:"isDisabled"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'aria-hidden="true"'})," on overlay when closed."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-label"})," set when ",e.jsx(n.code,{children:"ariaLabel"})," prop is provided and no title exists."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-labelledby"})," references ",e.jsx(n.code,{children:"__title"})," id when title is provided."]}),`
`]}),`
`,e.jsxs(n.p,{children:["BEM block state classes go on the host ",e.jsx(n.code,{children:".arvo-sp"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".arvo-sp.is-disabled"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".arvo-sp.loading"})}),`
`]}),`
`,e.jsxs(n.p,{children:["Pin button (",e.jsx(n.code,{children:"__pin"}),"):"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-pressed"})," reflects pinned state (",e.jsx(n.code,{children:'"true"'})," = pinned/layout, ",e.jsx(n.code,{children:'"false"'})," = unpinned/overlay)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-label"})," toggles between ",e.jsx(n.code,{children:'"Pin panel"'})," and ",e.jsx(n.code,{children:'"Unpin panel"'}),"."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"loading-pattern-b",children:"Loading Pattern (B)"}),`
`,e.jsxs(n.p,{children:[`SidePanel inherits Pattern B (structured skeleton) via the panel-shell shared
pattern. When `,e.jsx(n.code,{children:"isLoading"})," is true:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".loading"})," class is set on the host ",e.jsx(n.code,{children:".arvo-sp"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'aria-busy="true"'})," is set on ",e.jsx(n.code,{children:"__pane"}),"."]}),`
`,e.jsxs(n.li,{children:["Panel-shell hides ",e.jsx(n.code,{children:"__sticky"})," and ",e.jsx(n.code,{children:"__footer"}),"."]}),`
`,e.jsxs(n.li,{children:["Panel-shell renders skeleton rows in ",e.jsx(n.code,{children:"__body"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// React
<ArvoSidePanel isLoading title="Loading..." />

// JS
panel.loading(true);
panel.loading(false);
panel.loading(); // => boolean
`})})]})}function ye(i={}){const{wrapper:n}={...l(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{ye as default};
