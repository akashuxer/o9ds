import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as r,M as o,C as s,a as c}from"./blocks-DLeo0hIy.js";import{S as l,P as t,V as h,a,W as x,G as j,b as p,A as u,T as m,F as b,C as g,K as v}from"./SplitIconButton.stories-78igIMEz.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./SplitIconButton-CKjlqb8i.js";import"./ActionMenu-Bz8nuUE_.js";import"./client-DfB1ehiO.js";import"./index18-B-vHVXJV.js";import"./Button-B8O_kk1m.js";import"./useControllableState-BcENo7ec.js";import"./loading-flag-DkqmYwgU.js";import"./IconButton-BgwDUYzG.js";import"./useTooltip-DZu1XpnP.js";import"./index28-DgjIRxoq.js";import"./Search-B0ooNraj.js";import"./MessageAlert-DBQwY950.js";import"./ButtonGroup-Bky2dG1G.js";import"./BannerAlert-DwOPtWj_.js";import"./inline-content-CllLfblQ.js";import"./Link-NIjDRzO0.js";import"./EmptyState-B01eqtyy.js";import"./Checkbox-k9WMnmR3.js";import"./FormLabel-Dn-HbpfA.js";import"./Radio-0NcOE_jm.js";import"./Switch-BDE_dn2p.js";import"./useOverlay-Bo9f1g6f.js";import"./OverlayContext-C5RootgB.js";import"./useFocusTrap-BePVbEUc.js";import"./menu-search-C2FCcKsr.js";import"./Indicator-DI-QBEWN.js";function d(i){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l}),`
`,e.jsx(n.h1,{id:"spliticonbutton",children:"SplitIconButton"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," New"]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Icon-only two-segment action control: a square icon-only action button and a
separate caret trigger that opens an `,e.jsx(n.code,{children:"ActionMenu"}),`. The same composition as
`,e.jsx(n.code,{children:"SplitButton"}),", with no label."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Surface a primary icon action with its alternatives one click away, in
toolbars and dense surfaces.`}),`
`,e.jsxs(n.li,{children:["Provide a ",e.jsx(n.code,{children:"tooltip"})," for the action segment and a ",e.jsx(n.code,{children:"triggerLabel"}),` for the caret
-- both supply accessible names since there is no visible text.`]}),`
`,e.jsxs(n.li,{children:["Disable segments independently (",e.jsx(n.code,{children:"isActionDisabled"})," / ",e.jsx(n.code,{children:"isTriggerDisabled"}),")."]}),`
`,e.jsxs(n.li,{children:[`There is no selection mode -- the action icon is fixed. For a labeled split
use `,e.jsx(n.code,{children:"SplitButton"}),"; for a single icon trigger use ",e.jsx(n.code,{children:"DropdownIconButton"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(s,{of:t,sourceState:"shown"}),`
`,e.jsx(c,{of:t}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.h2,{id:"menu-features",children:"Menu features"}),`
`,e.jsxs(n.p,{children:[`Enable an inline search field, render grouped items with dividers, or nest
submenus -- all passed through to the composed `,e.jsx(n.code,{children:"ActionMenu"}),"."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h2,{id:"per-segment-disabled",children:"Per-segment disabled"}),`
`,e.jsx(n.p,{children:"Each segment can be disabled independently while the other stays operational."}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h2,{id:"recipes",children:"Recipes"}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(s,{of:v}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:["The vanilla JS version of ",e.jsx(n.code,{children:"ArvoSplitIconButton"}),` is a 1:1 visual match for the
React component. It composes a two-segment icon-only control: a fixed-square
`,e.jsx(n.code,{children:"arvo-icon-btn"}),` action segment on the left and a narrow caret trigger segment
on the right that opens an `,e.jsx(n.code,{children:"ArvoActionMenu"}),` overlay. Each segment is its own
`,e.jsx(n.code,{children:"<button>"}),` and reports its own click. There is no selection mode -- the action
segment's icon is always the `,e.jsx(n.code,{children:"icon"})," option."]}),`
`,e.jsx(n.h2,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import &#123; ArvoSplitIconButton &#125; from '@arvo/js/components/SplitIconButton';

const el = document.querySelector('#my-split-icon-btn');
const splitIcoBtn = ArvoSplitIconButton.initialize(el, &#123;
  icon: 'filter',
  tooltip: 'Filter',
  variant: 'primary',
  triggerLabel: 'Filter options',
  items: [
    &#123; id: 'all', label: 'All filters', icon: 'filter' &#125;,
    &#123; id: 'recent', label: 'Recent', icon: 'clock-o' &#125;,
    &#123; id: 'pinned', label: 'Pinned', icon: 'thumb-tack' &#125;,
    &#123; id: 'clear', label: 'Clear filters', icon: 'clear' &#125;,
  ],
  onAction: (event) => console.log('action clicked', event),
  onSelect: (item) => console.log('picked', item),
&#125;);

// Programmatic open / close
splitIcoBtn.open();
splitIcoBtn.close();

// Disabled / loading
splitIcoBtn.disabled(true);
splitIcoBtn.actionDisabled(true);
splitIcoBtn.triggerDisabled(true);
splitIcoBtn.setLoading(true);

// Swap the action icon (no selection mode -- consumers do this manually)
splitIcoBtn.setIcon('filter');

// Tear down
splitIcoBtn.destroy();
`})}),`
`,e.jsx(n.h2,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="arvo-split-icon-btn arvo-split-icon-btn--primary arvo-split-icon-btn--md" role="group">
  <button class="arvo-icon-btn arvo-btn--primary arvo-btn--md arvo-split-icon-btn__action"
          type="button" aria-label="Filter">
    <span class="arvo-split-icon-btn__icon o9con o9con-filter"></span>
  </button>
  <button class="arvo-btn arvo-btn--primary arvo-btn--md arvo-split-icon-btn__trigger"
          type="button" aria-haspopup="menu" aria-expanded="false" aria-label="Filter options">
    <span class="arvo-split-icon-btn__caret o9con o9con-angle-down"></span>
  </button>
</div>
`})}),`
`,e.jsxs(n.p,{children:["The popover surface and menu items use the same DOM as ",e.jsx(n.code,{children:"ArvoActionMenu"}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Note: the action segment carries ",e.jsx(n.code,{children:"arvo-icon-btn"}),` (square dimensions, padding,
hover/focus/active/disabled all inherited from the icon-button base). The
trigger segment carries `,e.jsx(n.code,{children:"arvo-btn"}),` for color tokens but uses
`,e.jsx(n.code,{children:"arvo-split-icon-btn"}),"-specific layout for its narrow rectangular caret strip."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"scoped-menu-config-menuprops",children:["Scoped menu config (",e.jsx(n.code,{children:"menuProps"}),")"]}),`
`,e.jsxs(n.p,{children:["Long-tail ",e.jsx(n.code,{children:"ArvoActionMenu"}),` options the parent does not curate as flat
options are reachable through the `,e.jsx(n.code,{children:"menuProps"}),` escape-hatch bag (React +
JS, identical shape). Typed
`,e.jsx(n.code,{children:"Pick<ArvoActionMenuOptions, 'actionsVisibility' | 'submenuTrigger'>"}),`.
The bag is spread first when constructing inner menu options; flat /
parent-computed values always win on overlap. See the `,e.jsx(n.a,{href:"/docs/usage/composition#scoped-configuration-props-for-composed-internals",children:"Composition page"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Signature"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onAction"})}),e.jsx("td",{children:e.jsx("code",{children:"(event) => void"})}),e.jsx("td",{children:"Fires when the action segment is clicked. Suppressed when disabled or loading."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onSelect"})}),e.jsx("td",{children:e.jsx("code",{children:"(item: MenuItemData, index: number) => boolean | void"})}),e.jsxs("td",{children:["Fires when a menu item is picked. Return ",e.jsx("code",{children:"false"})," to suppress close-on-select."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onOpen"})}),e.jsx("td",{children:e.jsx("code",{children:"() => boolean | void"})}),e.jsxs("td",{children:["Fires before the menu opens. Return ",e.jsx("code",{children:"false"})," to cancel."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onClose"})}),e.jsx("td",{children:e.jsx("code",{children:"() => boolean | void"})}),e.jsxs("td",{children:["Fires before the menu closes. Return ",e.jsx("code",{children:"false"})," to cancel."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onOpenChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(isOpen: boolean) => void"})}),e.jsx("td",{children:"Fires after the open state changes."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"onFocus"})," / ",e.jsx("code",{children:"onBlur"})]}),e.jsx("td",{children:e.jsx("code",{children:"(event: FocusEvent) => void"})}),e.jsx("td",{children:"Native focus / blur passthroughs forwarded from the action segment. The caret segment is internal and does not expose a separate focus contract."})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"js-only",children:"JS only"}),`
`,e.jsx(n.h3,{id:"methods",children:"Methods"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoSplitIconButton.initialize(element, options)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLElement"}),", ",e.jsx("code",{children:"ArvoSplitIconButtonOptions"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoSplitIconButton"})}),e.jsx("td",{children:"Factory -- builds the two-segment structure and wires events."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"open()"})," / ",e.jsx("code",{children:"close()"})]}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Open or close the menu."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"toggle(force?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsxs("td",{children:["Toggle menu. ",e.jsx("code",{children:"true"})," = open, ",e.jsx("code",{children:"false"})," = close, omit = flip."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"updateItems(items)"})}),e.jsx("td",{children:e.jsx("code",{children:"MenuItemData[] | ListGroup<MenuItemData>[]"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Replace the item set."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setIcon(iconName)"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Swap the icon on the action segment."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setVariant(variant)"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsxs("td",{children:["Change visual variant (",e.jsx("code",{children:"primary"}),", ",e.jsx("code",{children:"secondary"}),", ",e.jsx("code",{children:"tertiary"}),")."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setSize(size)"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsxs("td",{children:["Change segment size (",e.jsx("code",{children:"sm"}),", ",e.jsx("code",{children:"md"}),", ",e.jsx("code",{children:"lg"}),")."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLoading(loading)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Toggle loading state (Pattern A overlay)."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setTooltip(tooltip)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | null"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Update or remove the action segment tooltip + aria-label."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set whole-component disabled state."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"actionDisabled(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set action-segment-only disabled state."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"triggerDisabled(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set trigger-segment-only disabled state."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isOpen()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"Returns whether the menu is currently open."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"focus(target?)"})}),e.jsx("td",{children:e.jsx("code",{children:"'action' | 'trigger' | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsxs("td",{children:["Programmatically focus a segment. Defaults to ",e.jsx("code",{children:"'action'"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Remove listeners, destroy internal ActionMenu, clean up DOM."})]})]})]}),`
`,e.jsx(n.h3,{id:"custom-events",children:"Custom Events"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Cancelable"}),e.jsx("th",{children:"Payload"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"split-icon-btn:action"})}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"--"}),e.jsx("td",{children:"Action segment activated."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"split-icon-btn:select"})}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:e.jsx("code",{children:"{ item: MenuItemData; index: number }"})}),e.jsx("td",{children:"Menu item selected. Cancelable to prevent close-on-select."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"split-icon-btn:open"})}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"--"}),e.jsx("td",{children:"Menu opened."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"split-icon-btn:close"})}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"--"}),e.jsx("td",{children:"Menu closed."})]})]})]})]})}function $(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(d,{...i})}):d(i)}export{$ as default};
