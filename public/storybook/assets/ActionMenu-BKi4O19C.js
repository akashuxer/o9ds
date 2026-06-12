import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as d,M as o,C as s,a as c}from"./blocks-DLeo0hIy.js";import{A as l,P as r,G as a,a as h,W as x,b as j,c as m,d as u,T as p,e as v,D as b,f as g,L as f,C as _,g as S,B as y,h as M}from"./ActionMenu.stories-TWM82_hw.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./ActionMenu-Bz8nuUE_.js";import"./client-DfB1ehiO.js";import"./index18-B-vHVXJV.js";import"./Button-B8O_kk1m.js";import"./useControllableState-BcENo7ec.js";import"./loading-flag-DkqmYwgU.js";import"./IconButton-BgwDUYzG.js";import"./useTooltip-DZu1XpnP.js";import"./index28-DgjIRxoq.js";import"./Search-B0ooNraj.js";import"./MessageAlert-DBQwY950.js";import"./ButtonGroup-Bky2dG1G.js";import"./BannerAlert-DwOPtWj_.js";import"./inline-content-CllLfblQ.js";import"./Link-NIjDRzO0.js";import"./EmptyState-B01eqtyy.js";import"./Checkbox-k9WMnmR3.js";import"./FormLabel-Dn-HbpfA.js";import"./Radio-0NcOE_jm.js";import"./Switch-BDE_dn2p.js";import"./useOverlay-Bo9f1g6f.js";import"./OverlayContext-C5RootgB.js";import"./useFocusTrap-BePVbEUc.js";import"./menu-search-C2FCcKsr.js";import"./Indicator-DI-QBEWN.js";import"./Textbox-BjaSSAvr.js";import"./index2-HSp4ZJrG.js";function t(i){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l}),`
`,e.jsx(n.h1,{id:"actionmenu",children:"ActionMenu"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsx(n.p,{children:`Floating menu of actions or selectable items anchored to a trigger. Supports
search, group headers and dividers, submenus, keyboard shortcuts, per-item
trailing actions, destructive items, and a loading state.`}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Present a list of one-off commands tied to a trigger button, icon button, or
table row.`}),`
`,e.jsxs(n.li,{children:[`Group related actions with headers or dividers, and flag irreversible actions
as `,e.jsx(n.code,{children:"destructive"}),"."]}),`
`,e.jsxs(n.li,{children:["Enable ",e.jsx(n.code,{children:"search"})," for long menus and ",e.jsx(n.code,{children:"submenu"})," for nested actions."]}),`
`,e.jsxs(n.li,{children:["For a selectable filter list (multi/single), use ",e.jsx(n.code,{children:"HybridPopover"}),`. For
free-form panel content, use `,e.jsx(n.code,{children:"Popover"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(s,{of:r,sourceState:"shown"}),`
`,e.jsx(c,{of:r}),`
`,e.jsx(n.h2,{id:"grouping",children:"Grouping"}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h2,{id:"search",children:"Search"}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h2,{id:"keyboard-shortcuts",children:"Keyboard shortcuts"}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h2,{id:"submenus",children:"Submenus"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h2,{id:"trailing-actions",children:"Trailing actions"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(s,{of:v}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(s,{of:_}),`
`,e.jsx(s,{of:S}),`
`,e.jsx(s,{of:y}),`
`,e.jsx(s,{of:M}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:["The vanilla JS version of ",e.jsx(n.code,{children:"ArvoActionMenu"}),`. Floating menu of actions or
selectable items. Supports search, group dividers, submenus, keyboard shortcuts,
trailing actions per item, and destructive items.`]}),`
`,e.jsx(n.h3,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoActionMenu } from '@arvo/js';

const trigger = document.querySelector('#my-menu-trigger');
const menu = ArvoActionMenu.initialize(trigger, {
  items: [
    { id: 'edit', label: 'Edit', icon: 'pencil' },
    { id: 'delete', label: 'Delete', icon: 'bin', isDestructive: true },
  ],
  placement: 'bottom-start',
  closeOnSelect: true,
  onSelect: (item) => console.log('picked', item),
});

menu.open();
menu.close();
menu.updateItems([...]);
menu.destroy();
`})}),`
`,e.jsx(n.h3,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="arvo-action-menu open" role="menu" tabindex="-1">
  <!-- When search is enabled the panel begins with an ArvoSearch wrapper -->
  <div class="arvo-action-menu__search">
    <div class="arvo-search arvo-search--filter" role="search">
      <div class="arvo-search__field">
        <i class="arvo-search__ico o9con o9con-search" aria-hidden="true"></i>
        <input class="arvo-search__input" type="search" placeholder="Search..." aria-label="Filter menu items" />
        <div class="arvo-search__actions"></div>
        <div class="arvo-search__border"></div>
      </div>
    </div>
  </div>

  <div class="arvo-action-menu__scroll">
    <div class="arvo-menu-item" role="menuitem" tabindex="0" data-index="0">
      <span class="arvo-menu-item__ico o9con o9con-pencil" aria-hidden="true"></span>
      <div class="arvo-menu-item__txt">
        <span class="arvo-menu-item__lbl">Edit</span>
      </div>
    </div>
    <div class="arvo-menu-item arvo-menu-item--destructive" role="menuitem" tabindex="-1" data-index="1">
      <span class="arvo-menu-item__ico o9con o9con-bin" aria-hidden="true"></span>
      <div class="arvo-menu-item__txt">
        <span class="arvo-menu-item__lbl">Delete</span>
      </div>
    </div>
  </div>
</div>
`})}),`
`,e.jsxs(n.p,{children:["Each item is a ",e.jsx(n.code,{children:'<div role="menuitem">'})," (not ",e.jsx(n.code,{children:"<button>"}),`). The block uses
`,e.jsx(n.code,{children:"arvo-menu-item"})," as a separate BEM block from the panel (",e.jsx(n.code,{children:"arvo-action-menu"}),`).
Items appear inside `,e.jsx(n.code,{children:"arvo-action-menu__scroll"})," rather than a ",e.jsx(n.code,{children:"<ul>"}),`. Group
headers render as `,e.jsx(n.code,{children:'<div class="arvo-action-menu__hdr">'}),` and dividers as
`,e.jsx(n.code,{children:'<div class="arvo-action-menu__divider" role="separator">'}),`. Items with trailing
actions or shortcuts wrap them in `,e.jsx(n.code,{children:"arvo-menu-item__trailing"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Signature"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onSelect"})}),e.jsx("td",{children:e.jsx("code",{children:"(item: MenuItemData, index: number) => boolean | void"})}),e.jsxs("td",{children:["Fires when an item is picked. Return ",e.jsx("code",{children:"false"})," to keep the menu open."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onOpen"})}),e.jsx("td",{children:e.jsx("code",{children:"() => boolean | void"})}),e.jsxs("td",{children:["Fires when the menu is about to open. Return ",e.jsx("code",{children:"false"})," to cancel."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onClose"})}),e.jsx("td",{children:e.jsx("code",{children:"() => boolean | void"})}),e.jsxs("td",{children:["Fires when the menu is about to close. Return ",e.jsx("code",{children:"false"})," to cancel."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onOpenChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(isOpen: boolean) => void"})}),e.jsx("td",{children:"Fires after the open state changes."})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"js-only",children:"JS only"}),`
`,e.jsx(n.h4,{id:"methods",children:"Methods"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoActionMenu.initialize(trigger, options)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLElement"}),", ",e.jsx("code",{children:"ArvoActionMenuOptions"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoActionMenu"})}),e.jsx("td",{children:"Attach a portaled menu to the trigger element."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"open()"})," / ",e.jsx("code",{children:"close()"})]}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Open or close the menu."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"toggle(force?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean?"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Flip open state, or force to a specific value."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isOpen()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"Returns whether the panel is currently open."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"updateItems(items)"})}),e.jsx("td",{children:e.jsx("code",{children:"MenuItemData[] | ListGroup<...>[]"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Replace the menu's item set in place."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLoading(isLoading)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Toggle the panel's loading skeleton."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set the disabled state."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Detach listeners and remove the portaled element."})]})]})]}),`
`,e.jsx(n.h4,{id:"custom-events",children:"Custom Events"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Detail"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"action-menu:select"})}),e.jsx("td",{children:e.jsx("code",{children:"{ item: MenuItemData; index: number }"})}),e.jsx("td",{children:"Fires on item selection."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"action-menu:open"})}),e.jsx("td",{children:e.jsx("code",{children:"{}"})}),e.jsx("td",{children:"Fires when the menu opens."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"action-menu:close"})}),e.jsx("td",{children:e.jsx("code",{children:"{}"})}),e.jsx("td",{children:"Fires when the menu closes."})]})]})]})]})}function te(i={}){const{wrapper:n}={...d(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{te as default};
