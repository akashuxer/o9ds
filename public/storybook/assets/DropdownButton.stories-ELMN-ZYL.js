import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./iframe-BaOp0t6F.js";import{a as Ga}from"./ActionMenu-Bz8nuUE_.js";import{r as Fa}from"./loading-flag-DkqmYwgU.js";function da(n){return n.length>0&&"items"in n[0]}function Na(n){return da(n)?n.flatMap(i=>i.items):n}const s=t.forwardRef(function({label:i,variant:c="primary",size:m="md",icon:J,mode:p="action",displaySelected:U="label",value:E,defaultValue:ba=null,isDisabled:_=!1,isLoading:Ha=!1,items:u,search:ga,placement:ya="bottom-end",maxHeight:va,hasGroupDividers:fa=!0,closeOnSelect:Sa=!0,menuProps:ha,className:Ia,onSelect:G,onOpen:wa,onClose:Aa,onOpenChange:F,onClick:Da,onFocus:Ma,onBlur:xa,onKeyDown:N,...Ta},g){const R=t.useRef(null),$=Fa(),[Va,ka]=t.useState(!1),Z=E!==void 0,[H,qa]=t.useState(ba),b=Z?E:H,Y=t.useMemo(()=>Na(u),[u]),y=t.useMemo(()=>{if(b==null)return null;const e=String(b);return Y.find(o=>o.id===e)??null},[Y,b]),Pa=t.useMemo(()=>{if(p==="action"||!y)return i;if(U==="value"){const e=y.value;return e!=null?String(e):y.id}return y.label},[p,y,i,U]),Ca=t.useCallback(e=>{ka(e),F==null||F(e)},[F]),ja=t.useMemo(()=>{if(p!=="selection"||b==null)return u;const e=String(b),o=l=>({...l,active:l.id===e});return da(u)?u.map(l=>({...l,items:l.items.map(o)})):u.map(o)},[u,p,b]),La=t.useCallback((e,o)=>{var l,Q;if(p==="selection"){const X=Z?E:H,Ea=X!=null?Y.find(_a=>_a.id===String(X))??null:null;Z||qa(e.id),(l=R.current)==null||l.dispatchEvent(new CustomEvent("dd-btn:change",{bubbles:!0,cancelable:!0,detail:{item:e,index:o,previousItem:Ea}}))}else(Q=R.current)==null||Q.dispatchEvent(new CustomEvent("dd-btn:select",{bubbles:!0,cancelable:!0,detail:{item:e,index:o}}));return G==null?void 0:G(e,o)},[p,Z,E,H,Y,G]),Wa=t.useCallback(e=>{R.current=e,typeof g=="function"?g(e):g&&(g.current=e)},[g]),za=["arvo-dd-btn","arvo-btn",`arvo-btn--${c}`,`arvo-btn--${m}`,Va&&"open",$,Ia].filter(Boolean).join(" "),Oa=t.useCallback(e=>{var o;N==null||N(e),!e.defaultPrevented&&e.altKey&&e.key==="ArrowDown"&&!_&&!$&&(e.preventDefault(),(o=R.current)==null||o.click())},[N,_,$]),Ba=a.jsxs("button",{ref:Wa,type:"button",...Ta,className:za,disabled:_,"aria-busy":void 0,onClick:Da,onFocus:Ma,onBlur:xa,onKeyDown:Oa,children:[J&&a.jsx("span",{className:`arvo-dd-btn__icon o9con o9con-${J}`,"aria-hidden":"true"}),a.jsx("span",{className:"arvo-dd-btn__lbl",children:Pa}),a.jsx("span",{className:"arvo-dd-btn__caret o9con o9con-angle-down","aria-hidden":"true"})]});return a.jsx(Ga,{...ha,trigger:Ba,items:ja,placement:ya,search:ga,maxHeight:va,hasGroupDividers:fa,closeOnSelect:Sa,isDisabled:_||$,isLoading:!1,onOpen:wa,onClose:Aa,onSelect:La,onOpenChange:Ca})});s.__docgenInfo={description:"",methods:[],displayName:"ArvoDropdownButton",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary' | 'outline'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'outline'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},icon:{required:!1,tsType:{name:"string"},description:""},mode:{required:!1,tsType:{name:"union",raw:"'action' | 'selection'",elements:[{name:"literal",value:"'action'"},{name:"literal",value:"'selection'"}]},description:"",defaultValue:{value:"'action'",computed:!1}},displaySelected:{required:!1,tsType:{name:"union",raw:"'label' | 'value'",elements:[{name:"literal",value:"'label'"},{name:"literal",value:"'value'"}]},description:"",defaultValue:{value:"'label'",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | number | null",elements:[{name:"string"},{name:"number"},{name:"null"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | number | null",elements:[{name:"string"},{name:"number"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},items:{required:!0,tsType:{name:"union",raw:"MenuItemData[] | ListGroup<MenuItemData>[]",elements:[{name:"Array",elements:[{name:"MenuItemData"}],raw:"MenuItemData[]"},{name:"Array",elements:[{name:"ListGroup",elements:[{name:"MenuItemData"}],raw:"ListGroup<MenuItemData>"}],raw:"ListGroup<MenuItemData>[]"}]},description:""},search:{required:!1,tsType:{name:"union",raw:"boolean | MenuSearchConfig",elements:[{name:"boolean"},{name:"MenuSearchConfig"}]},description:"Enable search with defaults (`true`) or pass a config object."},placement:{required:!1,tsType:{name:"union",raw:"'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'",elements:[{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"}]},description:"",defaultValue:{value:"'bottom-end'",computed:!1}},maxHeight:{required:!1,tsType:{name:"string"},description:""},hasGroupDividers:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},menuProps:{required:!1,tsType:{name:"Pick",elements:[{name:"ArvoActionMenuProps"},{name:"union",raw:"'actionsVisibility' | 'submenuTrigger'",elements:[{name:"literal",value:"'actionsVisibility'"},{name:"literal",value:"'submenuTrigger'"}]}],raw:`Pick<
  ArvoActionMenuProps,
  'actionsVisibility' | 'submenuTrigger'
>`},description:"Escape hatch for `ArvoActionMenu` config the parent doesn't expose\nflat. Bag-only knobs (`actionsVisibility`, `submenuTrigger`)\nflow through. On any conflict with a flat prop, the flat prop wins."},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: MenuItemData, index: number) => boolean | void",signature:{arguments:[{type:{name:"MenuItemData"},name:"item"},{type:{name:"number"},name:"index"}],return:{name:"union",raw:"boolean | void",elements:[{name:"boolean"},{name:"void"}]}}},description:""},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => boolean | void",signature:{arguments:[],return:{name:"union",raw:"boolean | void",elements:[{name:"boolean"},{name:"void"}]}}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => boolean | void",signature:{arguments:[],return:{name:"union",raw:"boolean | void",elements:[{name:"boolean"},{name:"void"}]}}},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const r=[{id:"edit",label:"Edit",icon:"pencil"},{id:"duplicate",label:"Duplicate",icon:"duplicate"},{id:"delete",label:"Delete",icon:"bin",destructive:!0}],pa=[{id:"daily",label:"Daily"},{id:"weekly",label:"Weekly"},{id:"monthly",label:"Monthly"},{id:"yearly",label:"Yearly"}],Ra=[{id:"file",label:"File",items:[{id:"new",label:"New",icon:"plus",shortcut:"Ctrl+N"},{id:"open",label:"Open",icon:"folder-open",shortcut:"Ctrl+O"},{id:"save",label:"Save",icon:"save",shortcut:"Ctrl+S"}]},{id:"edit-group",label:"Edit",items:[{id:"undo",label:"Undo",icon:"undo",shortcut:"Ctrl+Z"},{id:"redo",label:"Redo",icon:"redo",shortcut:"Ctrl+Y"}]}],$a=[{id:"export",label:"Export",icon:"download",submenu:[{id:"export-csv",label:"CSV"},{id:"export-json",label:"JSON"},{id:"export-pdf",label:"PDF"}]},{id:"import",label:"Import",icon:"upload"}],d=[{id:"edit",label:"Edit",icon:"pencil"},{id:"duplicate",label:"Duplicate",icon:"duplicate"},{id:"delete",label:"Delete",icon:"bin",destructive:!0}],K=[{id:"name-asc",label:"Name (A-Z)",icon:"sort-alpha-asc"},{id:"name-desc",label:"Name (Z-A)",icon:"sort-alpha-desc"},{id:"date-asc",label:"Date (oldest)",icon:"sort-amount-asc"},{id:"date-desc",label:"Date (newest)",icon:"sort-amount-desc"}],Za={title:"Actions/DropdownButton",component:s,tags:["!dev","stable"],argTypes:{label:{control:{type:"text"},description:"Text shown on the trigger button"},variant:{control:{type:"select"},options:["primary","secondary","tertiary","outline"],description:"Visual style variant",table:{defaultValue:{summary:"primary"}}},size:{control:{type:"select"},options:["sm","md","lg"],description:"Trigger button size",table:{defaultValue:{summary:"md"}}},icon:{control:{type:"text"},description:"Optional leading icon name"},mode:{control:{type:"radio"},options:["action","selection"],description:"Action mode fires onSelect; selection mode tracks the picked value",table:{defaultValue:{summary:"action"}}},placement:{control:{type:"select"},options:["top-start","top-end","bottom-start","bottom-end"],description:"Preferred placement for the menu",table:{defaultValue:{summary:"bottom-end"}}},isDisabled:{control:{type:"boolean"},description:"Prevent the trigger from opening the menu",table:{defaultValue:{summary:"false"}}},isLoading:{control:{type:"boolean"},description:"Skeleton shimmer overlay on the trigger",table:{defaultValue:{summary:"false"}}},closeOnSelect:{control:{type:"boolean"},description:"Close the menu when an item is selected",table:{defaultValue:{summary:"true"}}},onSelect:{action:"selected",table:{category:"Events"}},onOpen:{action:"opened",table:{category:"Events"}},onClose:{action:"closed",table:{category:"Events"}}},args:{label:"Actions",variant:"primary",size:"md",mode:"action",placement:"bottom-end",isDisabled:!1,isLoading:!1,closeOnSelect:!0,items:r}},v={args:{label:"Actions",items:r}},f={args:{label:"Actions",items:r}},S={args:{label:"Actions",variant:"primary",items:r}},h={args:{label:"Actions",variant:"secondary",items:r}},I={args:{label:"Actions",variant:"tertiary",items:r}},w={args:{label:"Actions",variant:"outline",items:r}},A={args:{label:"Actions",size:"sm",items:r}},D={args:{label:"Actions",size:"md",items:r}},M={args:{label:"Actions",size:"lg",items:r}},x={name:"With Icon",args:{label:"Actions",icon:"cog",items:r}},T={name:"Selection Mode",args:{label:"Frequency",mode:"selection",items:pa,defaultValue:"weekly"}},V={name:"With Search",args:{label:"Pick option",search:!0,items:pa}},k={name:"Grouped Items",args:{label:"Menu",items:Ra,hasGroupDividers:!0}},q={name:"With Submenus",args:{label:"File",items:$a}},P={name:"Scoped Menu Config (menuProps)",args:{label:"Tools",size:"md",items:r,menuProps:{actionsVisibility:"always",submenuTrigger:"click"}}},C={args:{label:"Actions",isDisabled:!0,items:r}},j={args:{label:"Actions",isLoading:!0,items:r}},L={args:{label:"",items:[]},render:()=>a.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[a.jsx(s,{label:"Primary",variant:"primary",items:d,"aria-label":"Primary actions"}),a.jsx(s,{label:"Secondary",variant:"secondary",items:d,"aria-label":"Secondary actions"}),a.jsx(s,{label:"Tertiary",variant:"tertiary",items:d,"aria-label":"Tertiary actions"}),a.jsx(s,{label:"Outline",variant:"outline",items:d,"aria-label":"Outline actions"})]})},W={args:{label:"",items:[]},render:()=>a.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[a.jsx(s,{label:"Small",size:"sm",items:d,"aria-label":"Small"}),a.jsx(s,{label:"Medium",size:"md",items:d,"aria-label":"Medium"}),a.jsx(s,{label:"Large",size:"lg",items:d,"aria-label":"Large"})]})},z={name:"Selection Mode (Controlled)",args:{label:"",items:[]},render:()=>{const[n,i]=t.useState("weekly"),c=[{id:"daily",label:"Daily"},{id:"weekly",label:"Weekly"},{id:"monthly",label:"Monthly"}];return a.jsx(s,{label:`Frequency: ${n}`,mode:"selection",value:n,items:c,onSelect:m=>i(m.id),"aria-label":"Frequency"})}},O={args:{label:"",items:[]},render:()=>{const[n,i]=t.useState("name-asc"),c=K.find(m=>m.id===n);return a.jsx(s,{label:`Sort: ${(c==null?void 0:c.label)??""}`,variant:"secondary",icon:"sort",mode:"selection",value:n,items:K,onSelect:m=>i(m.id),"aria-label":"Sort"})}},B={args:{label:"",items:[]},render:()=>a.jsx(s,{label:"Manage",variant:"secondary",icon:"cog",items:[{id:"rename",label:"Rename",icon:"rename"},{id:"duplicate",label:"Duplicate",icon:"duplicate"},{id:"archive",label:"Archive",icon:"archive"},{id:"delete",label:"Delete forever",icon:"bin",destructive:!0}],"aria-label":"Manage record"})};var ee,ae,te;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    label: 'Actions',
    items: basicItems
  }
}`,...(te=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var re,ne,se;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    label: 'Actions',
    items: basicItems
  }
}`,...(se=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,ie,le;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    label: 'Actions',
    variant: 'primary',
    items: basicItems
  }
}`,...(le=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,me,ue;h.parameters={...h.parameters,docs:{...(ce=h.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    label: 'Actions',
    variant: 'secondary',
    items: basicItems
  }
}`,...(ue=(me=h.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var de,pe,be;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    label: 'Actions',
    variant: 'tertiary',
    items: basicItems
  }
}`,...(be=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var ge,ye,ve;w.parameters={...w.parameters,docs:{...(ge=w.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    label: 'Actions',
    variant: 'outline',
    items: basicItems
  }
}`,...(ve=(ye=w.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var fe,Se,he;A.parameters={...A.parameters,docs:{...(fe=A.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    label: 'Actions',
    size: 'sm',
    items: basicItems
  }
}`,...(he=(Se=A.parameters)==null?void 0:Se.docs)==null?void 0:he.source}}};var Ie,we,Ae;D.parameters={...D.parameters,docs:{...(Ie=D.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    label: 'Actions',
    size: 'md',
    items: basicItems
  }
}`,...(Ae=(we=D.parameters)==null?void 0:we.docs)==null?void 0:Ae.source}}};var De,Me,xe;M.parameters={...M.parameters,docs:{...(De=M.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    label: 'Actions',
    size: 'lg',
    items: basicItems
  }
}`,...(xe=(Me=M.parameters)==null?void 0:Me.docs)==null?void 0:xe.source}}};var Te,Ve,ke;x.parameters={...x.parameters,docs:{...(Te=x.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  name: 'With Icon',
  args: {
    label: 'Actions',
    icon: 'cog',
    items: basicItems
  }
}`,...(ke=(Ve=x.parameters)==null?void 0:Ve.docs)==null?void 0:ke.source}}};var qe,Pe,Ce;T.parameters={...T.parameters,docs:{...(qe=T.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  name: 'Selection Mode',
  args: {
    label: 'Frequency',
    mode: 'selection',
    items: selectionItems,
    defaultValue: 'weekly'
  }
}`,...(Ce=(Pe=T.parameters)==null?void 0:Pe.docs)==null?void 0:Ce.source}}};var je,Le,We;V.parameters={...V.parameters,docs:{...(je=V.parameters)==null?void 0:je.docs,source:{originalSource:`{
  name: 'With Search',
  args: {
    label: 'Pick option',
    search: true,
    items: selectionItems
  }
}`,...(We=(Le=V.parameters)==null?void 0:Le.docs)==null?void 0:We.source}}};var ze,Oe,Be;k.parameters={...k.parameters,docs:{...(ze=k.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: 'Grouped Items',
  args: {
    label: 'Menu',
    items: groupedItems,
    hasGroupDividers: true
  }
}`,...(Be=(Oe=k.parameters)==null?void 0:Oe.docs)==null?void 0:Be.source}}};var Ee,_e,Ge;q.parameters={...q.parameters,docs:{...(Ee=q.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: 'With Submenus',
  args: {
    label: 'File',
    items: submenuItems
  }
}`,...(Ge=(_e=q.parameters)==null?void 0:_e.docs)==null?void 0:Ge.source}}};var Fe,Ne,Re;P.parameters={...P.parameters,docs:{...(Fe=P.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  name: 'Scoped Menu Config (menuProps)',
  args: {
    label: 'Tools',
    size: 'md',
    items: basicItems,
    menuProps: {
      actionsVisibility: 'always',
      submenuTrigger: 'click'
    }
  }
}`,...(Re=(Ne=P.parameters)==null?void 0:Ne.docs)==null?void 0:Re.source}}};var $e,Ze,Ye;C.parameters={...C.parameters,docs:{...($e=C.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  args: {
    label: 'Actions',
    isDisabled: true,
    items: basicItems
  }
}`,...(Ye=(Ze=C.parameters)==null?void 0:Ze.docs)==null?void 0:Ye.source}}};var He,Je,Ue;j.parameters={...j.parameters,docs:{...(He=j.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    label: 'Actions',
    isLoading: true,
    items: basicItems
  }
}`,...(Ue=(Je=j.parameters)==null?void 0:Je.docs)==null?void 0:Ue.source}}};var Qe,Xe,Ke;L.parameters={...L.parameters,docs:{...(Qe=L.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  args: {
    label: '',
    items: []
  },
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>\r
      <ArvoDropdownButton label="Primary" variant="primary" items={variantItems} aria-label="Primary actions" />\r
      <ArvoDropdownButton label="Secondary" variant="secondary" items={variantItems} aria-label="Secondary actions" />\r
      <ArvoDropdownButton label="Tertiary" variant="tertiary" items={variantItems} aria-label="Tertiary actions" />\r
      <ArvoDropdownButton label="Outline" variant="outline" items={variantItems} aria-label="Outline actions" />\r
    </div>
}`,...(Ke=(Xe=L.parameters)==null?void 0:Xe.docs)==null?void 0:Ke.source}}};var ea,aa,ta;W.parameters={...W.parameters,docs:{...(ea=W.parameters)==null?void 0:ea.docs,source:{originalSource:`{
  args: {
    label: '',
    items: []
  },
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>\r
      <ArvoDropdownButton label="Small" size="sm" items={variantItems} aria-label="Small" />\r
      <ArvoDropdownButton label="Medium" size="md" items={variantItems} aria-label="Medium" />\r
      <ArvoDropdownButton label="Large" size="lg" items={variantItems} aria-label="Large" />\r
    </div>
}`,...(ta=(aa=W.parameters)==null?void 0:aa.docs)==null?void 0:ta.source}}};var ra,na,sa;z.parameters={...z.parameters,docs:{...(ra=z.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  name: 'Selection Mode (Controlled)',
  args: {
    label: '',
    items: []
  },
  render: () => {
    const [value, setValue] = useState<string | number | null>('weekly');
    const items: MenuItemData[] = [{
      id: 'daily',
      label: 'Daily'
    }, {
      id: 'weekly',
      label: 'Weekly'
    }, {
      id: 'monthly',
      label: 'Monthly'
    }];
    return <ArvoDropdownButton label={\`Frequency: \${value}\`} mode="selection" value={value} items={items} onSelect={item => setValue(item.id)} aria-label="Frequency" />;
  }
}`,...(sa=(na=z.parameters)==null?void 0:na.docs)==null?void 0:sa.source}}};var oa,ia,la;O.parameters={...O.parameters,docs:{...(oa=O.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  args: {
    label: '',
    items: []
  },
  render: () => {
    const [sort, setSort] = useState<string>('name-asc');
    const current = sortItems.find(i => i.id === sort);
    return <ArvoDropdownButton label={\`Sort: \${current?.label ?? ''}\`} variant="secondary" icon="sort" mode="selection" value={sort} items={sortItems} onSelect={item => setSort(item.id as string)} aria-label="Sort" />;
  }
}`,...(la=(ia=O.parameters)==null?void 0:ia.docs)==null?void 0:la.source}}};var ca,ma,ua;B.parameters={...B.parameters,docs:{...(ca=B.parameters)==null?void 0:ca.docs,source:{originalSource:`{
  args: {
    label: '',
    items: []
  },
  render: () => <ArvoDropdownButton label="Manage" variant="secondary" icon="cog" items={[{
    id: 'rename',
    label: 'Rename',
    icon: 'rename'
  }, {
    id: 'duplicate',
    label: 'Duplicate',
    icon: 'duplicate'
  }, {
    id: 'archive',
    label: 'Archive',
    icon: 'archive'
  }, {
    id: 'delete',
    label: 'Delete forever',
    icon: 'bin',
    destructive: true
  }]} aria-label="Manage record" />
}`,...(ua=(ma=B.parameters)==null?void 0:ma.docs)==null?void 0:ua.source}}};const Ya=["Default","Playground","Primary","Secondary","Tertiary","Outline","Small","Medium","Large","WithIcon","SelectionMode","WithSearch","GroupedItems","WithSubmenus","ScopedMenuConfig","Disabled","Loading","Variants","Sizes","SelectionModeControlled","SortMenu","ActionsWithDestructive"],Ka=Object.freeze(Object.defineProperty({__proto__:null,ActionsWithDestructive:B,Default:v,Disabled:C,GroupedItems:k,Large:M,Loading:j,Medium:D,Outline:w,Playground:f,Primary:S,ScopedMenuConfig:P,Secondary:h,SelectionMode:T,SelectionModeControlled:z,Sizes:W,Small:A,SortMenu:O,Tertiary:I,Variants:L,WithIcon:x,WithSearch:V,WithSubmenus:q,__namedExportsOrder:Ya,default:Za},Symbol.toStringTag,{value:"Module"}));export{B as A,Ka as D,k as G,f as P,W as S,L as V,V as W,z as a,q as b,O as c};
