import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as r,M as o,C as s,a as c}from"./blocks-DLeo0hIy.js";import{D as l,P as i,V as h,S as a,a as x,W as j,G as p,b as u,c as m,A as g}from"./DropdownButton.stories-ELMN-ZYL.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./ActionMenu-Bz8nuUE_.js";import"./client-DfB1ehiO.js";import"./index18-B-vHVXJV.js";import"./Button-B8O_kk1m.js";import"./useControllableState-BcENo7ec.js";import"./loading-flag-DkqmYwgU.js";import"./IconButton-BgwDUYzG.js";import"./useTooltip-DZu1XpnP.js";import"./index28-DgjIRxoq.js";import"./Search-B0ooNraj.js";import"./MessageAlert-DBQwY950.js";import"./ButtonGroup-Bky2dG1G.js";import"./BannerAlert-DwOPtWj_.js";import"./inline-content-CllLfblQ.js";import"./Link-NIjDRzO0.js";import"./EmptyState-B01eqtyy.js";import"./Checkbox-k9WMnmR3.js";import"./FormLabel-Dn-HbpfA.js";import"./Radio-0NcOE_jm.js";import"./Switch-BDE_dn2p.js";import"./useOverlay-Bo9f1g6f.js";import"./OverlayContext-C5RootgB.js";import"./useFocusTrap-BePVbEUc.js";import"./menu-search-C2FCcKsr.js";import"./Indicator-DI-QBEWN.js";function t(d){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l}),`
`,e.jsx(n.h1,{id:"dropdownbutton",children:"DropdownButton"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Button trigger that opens an ",e.jsx(n.code,{children:"ActionMenu"}),` overlay for presenting a list of
selectable actions or options. Composes an `,e.jsx(n.code,{children:"ArvoButton"}),` trigger with an
`,e.jsx(n.code,{children:"ArvoActionMenu"})," panel."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Group several related actions behind one labeled trigger (row actions, a
toolbar "Actions" menu, bulk operations).`}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.strong,{children:"action"})," mode for fire-and-forget commands; use ",e.jsx(n.strong,{children:"selection"}),` mode to
track a chosen value and surface it in the trigger label.`]}),`
`,e.jsxs(n.li,{children:["Enable ",e.jsx(n.code,{children:"search"})," for long lists and pass grouped items for sectioned menus."]}),`
`,e.jsxs(n.li,{children:["For an icon-only trigger use ",e.jsx(n.code,{children:"DropdownIconButton"}),`; to pair a primary action
with the menu use `,e.jsx(n.code,{children:"SplitButton"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(s,{of:i,sourceState:"shown"}),`
`,e.jsx(c,{of:i}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.h2,{id:"selection-mode",children:"Selection mode"}),`
`,e.jsxs(n.p,{children:[`In selection mode the picked value updates the trigger label and marks the item
active. Drive `,e.jsx(n.code,{children:"value"})," from state for controlled selection."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h2,{id:"menu-features",children:"Menu features"}),`
`,e.jsxs(n.p,{children:[`Enable an inline search field, render grouped items with dividers, or nest
submenus -- all passed through to the composed `,e.jsx(n.code,{children:"ActionMenu"}),"."]}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h2,{id:"recipes",children:"Recipes"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:["The vanilla JS version of ",e.jsx(n.code,{children:"ArvoDropdownButton"}),` is a 1:1 visual match for the
React component. It composes an `,e.jsx(n.code,{children:"ArvoButton"}),`-styled trigger and an
`,e.jsx(n.code,{children:"ArvoActionMenu"}),` overlay populated with the items array. Action mode fires
`,e.jsx(n.code,{children:"onSelect"}),` per click; selection mode tracks the picked value and surfaces it
via the trigger label.`]}),`
`,e.jsx(n.h2,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoDropdownButton } from '@arvo/js';

const el = document.querySelector('#my-dd-btn');
const dd = ArvoDropdownButton.initialize(el, {
  label: 'Actions',
  variant: 'primary',
  items: [
    { id: 'edit', label: 'Edit', icon: 'pencil' },
    { id: 'duplicate', label: 'Duplicate', icon: 'duplicate' },
    { id: 'delete', label: 'Delete', icon: 'bin', isDestructive: true },
  ],
  onSelect: (item) => console.log('picked', item),
});

// Update items
dd.updateItems([...]);

// Programmatic open / close
dd.open();
dd.close();
dd.toggle();
dd.isOpen();

// Selection mode (uncontrolled): seed with defaultValue
const sel = ArvoDropdownButton.initialize(el, {
  label: 'Range',
  mode: 'selection',
  items: [
    { id: 'daily', label: 'Daily' },
    { id: 'weekly', label: 'Weekly' },
    { id: 'monthly', label: 'Monthly' },
  ],
  defaultValue: 'monthly',
});
sel.value();           // => the MenuItemData for 'monthly'
sel.value('weekly');   // change selection programmatically

// Disabled / loading
dd.disabled(true);
dd.setLoading(true);

// Tear down
dd.destroy();
`})}),`
`,e.jsx(n.h2,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<button class="arvo-dd-btn arvo-btn arvo-btn--primary arvo-btn--md" type="button" aria-haspopup="menu" aria-expanded="false">
  <!-- Leading icon, optional -->
  <span class="arvo-dd-btn__icon o9con o9con-pencil" aria-hidden="true"></span>
  <span class="arvo-dd-btn__lbl">Actions</span>
  <span class="arvo-dd-btn__caret o9con o9con-angle-down" aria-hidden="true"></span>
</button>
`})}),`
`,e.jsxs(n.p,{children:["The trigger's label is ",e.jsx(n.code,{children:"arvo-dd-btn__lbl"})," (not ",e.jsx(n.code,{children:"arvo-btn__lbl"}),`) and the caret
is `,e.jsx(n.code,{children:"arvo-dd-btn__caret"})," with the ",e.jsx(n.code,{children:"o9con-angle-down"}),` glyph. The popover surface
and menu items use the same DOM as `,e.jsx(n.code,{children:"ArvoActionMenu"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"scoped-menu-config-menuprops",children:["Scoped menu config (",e.jsx(n.code,{children:"menuProps"}),")"]}),`
`,e.jsxs(n.p,{children:["Long-tail ",e.jsx(n.code,{children:"ArvoActionMenu"}),` options that the parent does not curate as flat
options are reachable through the `,e.jsx(n.code,{children:"menuProps"}),` escape-hatch bag (React +
JS, identical shape). The bag is typed
`,e.jsx(n.code,{children:"Pick<ArvoActionMenuOptions, 'actionsVisibility' | 'submenuTrigger'>"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const dd = ArvoDropdownButton.initialize(el, {
  label: 'Tools',
  size: 'md',
  items,
  menuProps: {
    actionsVisibility: 'always',
    submenuTrigger: 'click',
  },
});
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Merge rule."}),` The bag is spread first when constructing the inner menu's
options; the parent's flat options (`,e.jsx(n.code,{children:"placement"}),", ",e.jsx(n.code,{children:"maxHeight"}),", ",e.jsx(n.code,{children:"search"}),`,
`,e.jsx(n.code,{children:"hasGroupDividers"}),", ",e.jsx(n.code,{children:"closeOnSelect"}),`) always win on overlap. The bag's
TypeScript whitelist already excludes anything flat, so overlap is rare.`]}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.a,{href:"/docs/usage/composition#scoped-configuration-props-for-composed-internals",children:"Composition page"}),`
for the design-system-wide rule.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Signature"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onSelect"})}),e.jsx("td",{children:e.jsx("code",{children:"(item: MenuItemData, index: number) => boolean | void"})}),e.jsxs("td",{children:["Fires when an item is picked. Return ",e.jsx("code",{children:"false"})," to keep the menu open."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onOpen"})}),e.jsx("td",{children:e.jsx("code",{children:"() => boolean | void"})}),e.jsxs("td",{children:["Fires before the menu opens. Return ",e.jsx("code",{children:"false"})," to cancel."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onClose"})}),e.jsx("td",{children:e.jsx("code",{children:"() => boolean | void"})}),e.jsxs("td",{children:["Fires before the menu closes. Return ",e.jsx("code",{children:"false"})," to cancel."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onOpenChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(isOpen: boolean) => void"})}),e.jsx("td",{children:"Fires after the open state changes."})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"js-only",children:"JS only"}),`
`,e.jsx(n.h3,{id:"methods",children:"Methods"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoDropdownButton.initialize(element, options)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLElement"}),", ",e.jsx("code",{children:"ArvoDropdownButtonOptions"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoDropdownButton"})}),e.jsx("td",{children:"Static factory."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"updateItems(items)"})}),e.jsx("td",{children:e.jsx("code",{children:"MenuItemData[] | ListGroup<MenuItemData>[]"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Replace the menu's item set."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"open()"})," / ",e.jsx("code",{children:"close()"})," / ",e.jsx("code",{children:"toggle(force?)"})]}),e.jsxs("td",{children:[e.jsx("code",{children:"boolean?"})," for toggle"]}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Open, close, or flip the menu."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isOpen()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"Returns whether the menu is currently open."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"value()"})," / ",e.jsx("code",{children:"value(next)"})]}),e.jsx("td",{children:e.jsx("code",{children:"string | number | null"})}),e.jsx("td",{children:e.jsx("code",{children:"MenuItemData | null | void"})}),e.jsxs("td",{children:["Selection-mode getter/setter. The getter returns the full ",e.jsx("code",{children:"MenuItemData"})," for the selected id (or null). The setter accepts a value id (or null to clear)."]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"setLabel(text)"})," / ",e.jsx("code",{children:"setIcon(name | null)"})]}),e.jsxs("td",{children:[e.jsx("code",{children:"string"})," / ",e.jsx("code",{children:"string | null"})]}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Update the trigger label or leading icon."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"setVariant(v)"})," / ",e.jsx("code",{children:"setSize(s)"})]}),e.jsxs("td",{children:[e.jsx("code",{children:"variant"})," / ",e.jsx("code",{children:"size"})]}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Swap the trigger variant or size class."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLoading(loading)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Toggle loading state on the trigger."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set disabled state."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"focus()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Focus the trigger."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Remove listeners and tear down the menu."})]})]})]}),`
`,e.jsx(n.h3,{id:"custom-events",children:"Custom Events"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Detail"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"dd-btn:select"})}),e.jsx("td",{children:e.jsx("code",{children:"{ item: MenuItemData; index: number }"})}),e.jsx("td",{children:"Fires on item activation (both action and selection modes). Cancelable."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"dd-btn:change"})}),e.jsx("td",{children:e.jsx("code",{children:"{ item: MenuItemData; previousItem: MenuItemData | null; index: number }"})}),e.jsx("td",{children:"Fires only in selection mode when the picked value differs from the previous selection. Cancelable."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"dd-btn:open"})}),e.jsx("td",{children:e.jsx("code",{children:"{}"})}),e.jsx("td",{children:"Fires when the menu opens."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"dd-btn:close"})}),e.jsx("td",{children:e.jsx("code",{children:"{}"})}),e.jsx("td",{children:"Fires when the menu closes."})]})]})]})]})}function Q(d={}){const{wrapper:n}={...r(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(t,{...d})}):t(d)}export{Q as default};
