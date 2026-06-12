import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as r,M as l,C as s,a as c}from"./blocks-DLeo0hIy.js";import{S as o,P as i,V as a,a as h,b as x,W as j,G as p,c as m,A as u,T as v,C as b,K as g,I as f}from"./SplitButton.stories-8zBMCv1f.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./ActionMenu-Bz8nuUE_.js";import"./client-DfB1ehiO.js";import"./index18-B-vHVXJV.js";import"./Button-B8O_kk1m.js";import"./useControllableState-BcENo7ec.js";import"./loading-flag-DkqmYwgU.js";import"./IconButton-BgwDUYzG.js";import"./useTooltip-DZu1XpnP.js";import"./index28-DgjIRxoq.js";import"./Search-B0ooNraj.js";import"./MessageAlert-DBQwY950.js";import"./ButtonGroup-Bky2dG1G.js";import"./BannerAlert-DwOPtWj_.js";import"./inline-content-CllLfblQ.js";import"./Link-NIjDRzO0.js";import"./EmptyState-B01eqtyy.js";import"./Checkbox-k9WMnmR3.js";import"./FormLabel-Dn-HbpfA.js";import"./Radio-0NcOE_jm.js";import"./Switch-BDE_dn2p.js";import"./useOverlay-Bo9f1g6f.js";import"./OverlayContext-C5RootgB.js";import"./useFocusTrap-BePVbEUc.js";import"./menu-search-C2FCcKsr.js";import"./Indicator-DI-QBEWN.js";function d(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:o}),`
`,e.jsx(n.h1,{id:"splitbutton",children:"SplitButton"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," New"]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Two-segment action control: an executable action button on the left and a
separate dropdown trigger on the right that opens an `,e.jsx(n.code,{children:"ActionMenu"}),`. The most
common action stays one click away while related options live in the menu.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Surface the primary action directly while keeping related or alternative
actions in the caret menu (e.g. a toolbar "Save" with Save As / Save All).`}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.strong,{children:"selection"}),` mode for "Save / Save As / Save All" patterns where the
last-picked item becomes the new default action.`]}),`
`,e.jsxs(n.li,{children:["Disable segments independently (",e.jsx(n.code,{children:"isActionDisabled"})," / ",e.jsx(n.code,{children:"isTriggerDisabled"}),`) when
only one path is currently available.`]}),`
`,e.jsxs(n.li,{children:["For a single trigger that only opens a menu, use ",e.jsx(n.code,{children:"DropdownButton"}),`; for an
icon-only split, use `,e.jsx(n.code,{children:"SplitIconButton"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(s,{of:i,sourceState:"shown"}),`
`,e.jsx(c,{of:i}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h2,{id:"selection-mode",children:"Selection mode"}),`
`,e.jsxs(n.p,{children:[`The last-selected item becomes the default action -- its label and icon move to
the action segment. Drive `,e.jsx(n.code,{children:"value"})," from state for controlled selection."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h2,{id:"menu-features",children:"Menu features"}),`
`,e.jsxs(n.p,{children:[`Enable an inline search field, render grouped items with dividers, or nest
submenus -- all passed through to the composed `,e.jsx(n.code,{children:"ActionMenu"}),"."]}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h2,{id:"per-segment-disabled",children:"Per-segment disabled"}),`
`,e.jsx(n.p,{children:"Each segment can be disabled independently while the other stays operational."}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(s,{of:v}),`
`,e.jsx(n.h2,{id:"recipes",children:"Recipes"}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:["The vanilla JS version of ",e.jsx(n.code,{children:"ArvoSplitButton"}),` is a 1:1 visual match for the
React component. It composes a two-segment control: an executable action
button on the left and a dropdown trigger on the right that opens an
`,e.jsx(n.code,{children:"ArvoActionMenu"}),` overlay. Supports action mode (fixed label, menu items fire
`,e.jsx(n.code,{children:"onSelect"}),`) and selection mode (last-selected item becomes the default
action).`]}),`
`,e.jsx(n.h2,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import &#123; ArvoSplitButton &#125; from '@arvo/js/components/SplitButton';

const el = document.querySelector('#my-split-btn');
const splitBtn = ArvoSplitButton.initialize(el, &#123;
  label: 'Save',
  icon: 'save',
  variant: 'primary',
  items: [
    &#123; id: 'save', label: 'Save', icon: 'save' &#125;,
    &#123; id: 'save-as', label: 'Save As', icon: 'duplicate' &#125;,
    &#123; id: 'save-all', label: 'Save All', icon: 'floppy-o' &#125;,
  ],
  onAction: (event) => console.log('action clicked', event),
  onSelect: (item) => console.log('picked', item),
&#125;);

// Selection mode
const selSplitBtn = ArvoSplitButton.initialize(el, &#123;
  label: 'Save',
  icon: 'save',
  mode: 'selection',
  value: 'save',
  items: [
    &#123; id: 'save', label: 'Save' &#125;,
    &#123; id: 'save-as', label: 'Save As' &#125;,
    &#123; id: 'save-all', label: 'Save All' &#125;,
  ],
  onSelect: (item) => console.log('selected', item),
&#125;);

// Programmatic open / close
splitBtn.open();
splitBtn.close();

// Getter / setter
splitBtn.value();           // => current selected item or null
splitBtn.value('save-as');  // set selection

// Disabled / loading
splitBtn.disabled(true);
splitBtn.actionDisabled(true);
splitBtn.triggerDisabled(true);
splitBtn.setLoading(true);

// Tear down
splitBtn.destroy();
`})}),`
`,e.jsx(n.h2,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="arvo-split-btn arvo-split-btn--primary arvo-split-btn--md" role="group">
  <button class="arvo-btn arvo-btn--primary arvo-btn--md arvo-split-btn__action" type="button">
    <span class="arvo-split-btn__icon o9con o9con-save"></span>
    <span class="arvo-split-btn__lbl">Save</span>
  </button>
  <button class="arvo-btn arvo-btn--primary arvo-btn--md arvo-split-btn__trigger"
          type="button" aria-haspopup="menu" aria-expanded="false" aria-label="Save options">
    <span class="arvo-split-btn__caret o9con o9con-angle-down"></span>
  </button>
</div>
`})}),`
`,e.jsxs(n.p,{children:["The popover surface and menu items use the same DOM as ",e.jsx(n.code,{children:"ArvoActionMenu"}),"."]}),`
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
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Signature"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onAction"})}),e.jsx("td",{children:e.jsx("code",{children:"(event, selectedItem: MenuItemData | null) => void"})}),e.jsx("td",{children:"Fires when the action segment is clicked. In selection mode also receives the current item."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onSelect"})}),e.jsx("td",{children:e.jsx("code",{children:"(item: MenuItemData, index: number) => boolean | void"})}),e.jsxs("td",{children:["Fires when a menu item is picked. Return ",e.jsx("code",{children:"false"})," to suppress close-on-select."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onOpen"})}),e.jsx("td",{children:e.jsx("code",{children:"() => boolean | void"})}),e.jsxs("td",{children:["Fires before the menu opens. Return ",e.jsx("code",{children:"false"})," to cancel."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onClose"})}),e.jsx("td",{children:e.jsx("code",{children:"() => boolean | void"})}),e.jsxs("td",{children:["Fires before the menu closes. Return ",e.jsx("code",{children:"false"})," to cancel."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onOpenChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(isOpen: boolean) => void"})}),e.jsx("td",{children:"Fires after the open state changes."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"onFocus"})," / ",e.jsx("code",{children:"onBlur"})]}),e.jsx("td",{children:e.jsx("code",{children:"(event: FocusEvent) => void"})}),e.jsx("td",{children:"Native focus / blur passthroughs forwarded from the action segment. The caret segment is internal and does not expose a separate focus contract."})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"js-only",children:"JS only"}),`
`,e.jsx(n.h3,{id:"methods",children:"Methods"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoSplitButton.initialize(element, options)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLElement"}),", ",e.jsx("code",{children:"ArvoSplitButtonOptions"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoSplitButton"})}),e.jsx("td",{children:"Factory -- builds the two-segment structure and wires events."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"open()"})," / ",e.jsx("code",{children:"close()"})]}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Open or close the menu."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"toggle(force?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsxs("td",{children:["Toggle menu. ",e.jsx("code",{children:"true"})," = open, ",e.jsx("code",{children:"false"})," = close, omit = flip."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"value(itemId?)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | number | null | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"MenuItemData | null | void"})}),e.jsxs("td",{children:["Selection-mode getter/setter. Omit to get, pass to set, ",e.jsx("code",{children:"null"})," to clear."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"updateItems(items)"})}),e.jsx("td",{children:e.jsx("code",{children:"MenuItemData[] | ListGroup<MenuItemData>[]"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Replace the item set."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLabel(text)"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Update action segment label text."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setIcon(iconName)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | null"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Set or remove the leading icon on the action segment."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setVariant(variant)"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsxs("td",{children:["Change visual variant (",e.jsx("code",{children:"primary"}),", ",e.jsx("code",{children:"secondary"}),", ",e.jsx("code",{children:"tertiary"}),")."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setSize(size)"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsxs("td",{children:["Change segment size (",e.jsx("code",{children:"sm"}),", ",e.jsx("code",{children:"md"}),", ",e.jsx("code",{children:"lg"}),")."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLoading(loading)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Toggle loading state (Pattern A overlay)."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set whole-component disabled state."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"actionDisabled(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set action-segment-only disabled state."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"triggerDisabled(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set trigger-segment-only disabled state."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isOpen()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"Returns whether the menu is currently open."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"focus(target?)"})}),e.jsx("td",{children:e.jsx("code",{children:"'action' | 'trigger' | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsxs("td",{children:["Programmatically focus a segment. Defaults to ",e.jsx("code",{children:"'action'"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Remove listeners, destroy internal ActionMenu, clean up DOM."})]})]})]}),`
`,e.jsx(n.h3,{id:"custom-events",children:"Custom Events"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Cancelable"}),e.jsx("th",{children:"Payload"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"split-btn:action"})}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:e.jsx("code",{children:"{ selectedItem: MenuItemData | null }"})}),e.jsxs("td",{children:["Action segment activated. ",e.jsx("code",{children:"selectedItem"})," is null in action mode."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"split-btn:select"})}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:e.jsx("code",{children:"{ item: MenuItemData; index: number }"})}),e.jsx("td",{children:"Menu item selected (action mode). Cancelable to prevent close-on-select."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"split-btn:open"})}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"--"}),e.jsx("td",{children:"Menu opened."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"split-btn:close"})}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"--"}),e.jsx("td",{children:"Menu closed."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"split-btn:change"})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:e.jsx("code",{children:"{ item: MenuItemData | null; previousItem: MenuItemData | null }"})}),e.jsx("td",{children:"Selection changed (selection mode only)."})]})]})]})]})}function $(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(d,{...t})}):d(t)}export{$ as default};
