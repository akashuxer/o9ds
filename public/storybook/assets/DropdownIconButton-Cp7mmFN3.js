import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as t,M as r,C as d,a as c}from"./blocks-DLeo0hIy.js";import{D as l,P as s,V as h,S as a,C as x,W as j,G as p,T as m}from"./DropdownIconButton.stories-DOJ0b0FO.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./ActionMenu-Bz8nuUE_.js";import"./client-DfB1ehiO.js";import"./index18-B-vHVXJV.js";import"./Button-B8O_kk1m.js";import"./useControllableState-BcENo7ec.js";import"./loading-flag-DkqmYwgU.js";import"./IconButton-BgwDUYzG.js";import"./useTooltip-DZu1XpnP.js";import"./index28-DgjIRxoq.js";import"./Search-B0ooNraj.js";import"./MessageAlert-DBQwY950.js";import"./ButtonGroup-Bky2dG1G.js";import"./BannerAlert-DwOPtWj_.js";import"./inline-content-CllLfblQ.js";import"./Link-NIjDRzO0.js";import"./EmptyState-B01eqtyy.js";import"./Checkbox-k9WMnmR3.js";import"./FormLabel-Dn-HbpfA.js";import"./Radio-0NcOE_jm.js";import"./Switch-BDE_dn2p.js";import"./useOverlay-Bo9f1g6f.js";import"./OverlayContext-C5RootgB.js";import"./useFocusTrap-BePVbEUc.js";import"./menu-search-C2FCcKsr.js";import"./Indicator-DI-QBEWN.js";function o(i){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(n.h1,{id:"dropdowniconbutton",children:"DropdownIconButton"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Icon-only button trigger that opens an ",e.jsx(n.code,{children:"ActionMenu"}),` overlay. It has no text
label -- just a configured icon with an optional trailing caret. Shares
variant/size modifiers with `,e.jsx(n.code,{children:"DropdownButton"})," and reuses ",e.jsx(n.code,{children:"IconButton"})," styling."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Expose a contextual menu from a compact, icon-only trigger (table-row
overflow, toolbar actions, settings popovers).`}),`
`,e.jsxs(n.li,{children:["Always provide a ",e.jsx(n.code,{children:"tooltip"})," -- it supplies the accessible name (",e.jsx(n.code,{children:"aria-label"}),`)
since there is no visible text.`]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"isCompact"})," to hide the caret and render a square trigger in dense layouts."]}),`
`,e.jsxs(n.li,{children:["For a labeled trigger use ",e.jsx(n.code,{children:"DropdownButton"}),`; for a primary action paired with a
menu use `,e.jsx(n.code,{children:"SplitIconButton"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(d,{of:s,sourceState:"shown"}),`
`,e.jsx(c,{of:s}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(d,{of:h}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsx(d,{of:a}),`
`,e.jsx(n.h2,{id:"compact-mode",children:"Compact mode"}),`
`,e.jsxs(n.p,{children:[`Compact hides the caret and renders a square trigger identical in footprint to
an `,e.jsx(n.code,{children:"IconButton"})," -- ideal for dense toolbars and table rows."]}),`
`,e.jsx(d,{of:x}),`
`,e.jsx(n.h2,{id:"menu-features",children:"Menu features"}),`
`,e.jsxs(n.p,{children:[`Enable an inline search field or render grouped items with dividers -- both
passed through to the composed `,e.jsx(n.code,{children:"ActionMenu"}),"."]}),`
`,e.jsx(d,{of:j}),`
`,e.jsx(d,{of:p}),`
`,e.jsx(n.h2,{id:"recipes",children:"Recipes"}),`
`,e.jsx(n.p,{children:"A compact overflow menu per table row."}),`
`,e.jsx(d,{of:m}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:["The vanilla JS version of ",e.jsx(n.code,{children:"ArvoDropdownIconButton"}),` is a 1:1 visual match for the
React component. It composes an icon-only trigger and an `,e.jsx(n.code,{children:"ArvoActionMenu"}),`
overlay. Use it for compact contextual menus (table-row overflow, toolbar
actions, settings popovers).`]}),`
`,e.jsx(n.h2,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoDropdownIconButton } from '@arvo/js';

const el = document.querySelector('#my-dd-icon-btn');
const dd = ArvoDropdownIconButton.initialize(el, {
  icon: 'ellipsis-v',
  tooltip: 'Row actions',
  variant: 'tertiary',
  items: [
    { id: 'open', label: 'Open', icon: 'folder-open' },
    { id: 'rename', label: 'Rename', icon: 'rename' },
    { id: 'delete', label: 'Delete', icon: 'bin', isDestructive: true },
  ],
  onSelect: (item) => console.log('picked', item),
});

// Programmatic open / close / toggle
dd.open();
dd.close();
dd.toggle();
dd.isOpen();

// Update items / icon / tooltip
dd.updateItems([...]);
dd.setIcon('cog');
dd.setTooltip('Settings');

// Compact mode hides the trailing caret chevron.
dd.compact(true);

// Disabled / loading
dd.disabled(true);
dd.setLoading(true);

// Tear down
dd.destroy();
`})}),`
`,e.jsx(n.h2,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<button class="arvo-dd-icon-btn arvo-btn arvo-btn--tertiary arvo-btn--md" type="button" aria-label="Row actions" aria-haspopup="menu" aria-expanded="false">
  <span class="arvo-dd-icon-btn__icon o9con o9con-ellipsis-v" aria-hidden="true"></span>
  <span class="arvo-dd-icon-btn__caret o9con o9con-angle-down" aria-hidden="true"></span>
</button>
`})}),`
`,e.jsxs(n.p,{children:["The root carries ",e.jsx(n.code,{children:"arvo-dd-icon-btn"})," (not ",e.jsx(n.code,{children:"arvo-icon-btn"}),`), plus the standard
`,e.jsx(n.code,{children:"arvo-btn arvo-btn--{variant} arvo-btn--{size}"}),` modifiers. The trigger icon is
`,e.jsx(n.code,{children:"arvo-dd-icon-btn__icon"})," and the caret is ",e.jsx(n.code,{children:"arvo-dd-icon-btn__caret"}),`. Tooltip
text drives the button's `,e.jsx(n.code,{children:"aria-label"}),"; no native ",e.jsx(n.code,{children:"title"})," attribute is set."]}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"isCompact"})," is ",e.jsx(n.code,{children:"true"})," the root also receives ",e.jsx(n.code,{children:"arvo-dd-icon-btn--compact"}),`
and the caret span is omitted.`]}),`
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
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Signature"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onSelect"})}),e.jsx("td",{children:e.jsx("code",{children:"(item: MenuItemData, index: number) => boolean | void"})}),e.jsxs("td",{children:["Fires when an item is picked. Return ",e.jsx("code",{children:"false"})," to keep the menu open."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onOpen"})}),e.jsx("td",{children:e.jsx("code",{children:"() => boolean | void"})}),e.jsxs("td",{children:["Fires before the menu opens. Return ",e.jsx("code",{children:"false"})," to cancel."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onClose"})}),e.jsx("td",{children:e.jsx("code",{children:"() => boolean | void"})}),e.jsxs("td",{children:["Fires before the menu closes. Return ",e.jsx("code",{children:"false"})," to cancel."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onOpenChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(isOpen: boolean) => void"})}),e.jsx("td",{children:"Fires after the open state changes."})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"js-only",children:"JS only"}),`
`,e.jsx(n.h3,{id:"methods",children:"Methods"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoDropdownIconButton.initialize(element, options)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLElement"}),", ",e.jsx("code",{children:"ArvoDropdownIconButtonOptions"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoDropdownIconButton"})}),e.jsx("td",{children:"Static factory."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"updateItems(items)"})}),e.jsx("td",{children:e.jsx("code",{children:"MenuItemData[] | ListGroup<...>[]"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Replace the menu's item set."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setIcon(name)"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsxs("td",{children:["Swap the trigger icon (without the ",e.jsx("code",{children:"o9con-"})," prefix)."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setTooltip(text | null)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | null"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsxs("td",{children:["Update tooltip + ",e.jsx("code",{children:"aria-label"}),". Pass ",e.jsx("code",{children:"null"})," to drop the tooltip."]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"open()"})," / ",e.jsx("code",{children:"close()"})," / ",e.jsx("code",{children:"toggle(force?)"})]}),e.jsxs("td",{children:[e.jsx("code",{children:"boolean?"})," for toggle"]}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Open, close, or flip the menu."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isOpen()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"Returns whether the menu is currently open."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"compact(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsxs("td",{children:["Get or set the ",e.jsx("code",{children:"arvo-dd-icon-btn--compact"})," modifier (hides the caret)."]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"setVariant(v)"})," / ",e.jsx("code",{children:"setSize(s)"})]}),e.jsxs("td",{children:[e.jsx("code",{children:"variant"})," / ",e.jsx("code",{children:"size"})]}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Swap the trigger variant or size class."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLoading(loading)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Toggle loading state on the trigger."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set disabled state."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"focus()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Focus the trigger."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Remove listeners and tear down the menu."})]})]})]}),`
`,e.jsx(n.h3,{id:"custom-events",children:"Custom Events"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Detail"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"dd-icon-btn:select"})}),e.jsx("td",{children:e.jsx("code",{children:"{ item: MenuItemData; index: number }"})}),e.jsx("td",{children:"Fires on item selection. Cancelable."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"dd-icon-btn:open"})}),e.jsx("td",{children:e.jsx("code",{children:"{}"})}),e.jsx("td",{children:"Fires when the menu opens."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"dd-icon-btn:close"})}),e.jsx("td",{children:e.jsx("code",{children:"{}"})}),e.jsx("td",{children:"Fires when the menu closes."})]})]})]})]})}function H(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{H as default};
