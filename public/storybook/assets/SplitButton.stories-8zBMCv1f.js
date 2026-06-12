import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./iframe-BaOp0t6F.js";import{a as ds}from"./ActionMenu-Bz8nuUE_.js";import{u as ps}from"./useControllableState-BcENo7ec.js";import{r as bs}from"./loading-flag-DkqmYwgU.js";function _a(o){return o.length>0&&"items"in o[0]}function vs(o){return _a(o)?o.flatMap(m=>m.items):o}const n=s.forwardRef(function({label:m,variant:U="primary",size:$="md",icon:ee,mode:u="action",displaySelected:ae="label",value:za,defaultValue:Wa=null,isDisabled:H=!1,isActionDisabled:ka=!1,isTriggerDisabled:se=!1,isLoading:As=!1,items:b,search:Ga,placement:Oa="bottom-end",maxHeight:Ra,hasGroupDividers:Na=!0,closeOnSelect:Fa=!0,menuProps:Ua,triggerLabel:$a="Show options",className:Ha,onAction:K,onSelect:p,onOpen:Ka,onClose:Ja,onOpenChange:J,onClick:Q,onFocus:Qa,onBlur:Xa,onKeyDown:X,...Ya},g){const te=s.useRef(null),Za=s.useRef(null),re=s.useRef(null),Y=bs(),[es,as]=s.useState(!1),[v,ne]=ps(za,Wa??null),Z=s.useMemo(()=>vs(b),[b]),r=s.useMemo(()=>{if(v==null)return null;const e=String(v);return Z.find(i=>i.id===e)??null},[Z,v]),ss=s.useMemo(()=>{if(u==="action"||!r)return m;if(ae==="value"){const e=r.value;return e!=null?String(e):r.id}return r.label},[u,r,m,ae]),ie=s.useMemo(()=>u==="action"?ee:(r==null?void 0:r.icon)??ee,[u,r,ee]),ts=s.useMemo(()=>{if(u!=="selection"||v==null)return b;const e=String(v),i=l=>({...l,active:l.id===e});return _a(b)?b.map(l=>({...l,items:l.items.map(i)})):b.map(i)},[b,u,v]),d=s.useCallback((e,i,l=!0)=>{var le;(le=te.current)==null||le.dispatchEvent(new CustomEvent(e,{bubbles:!0,cancelable:l,detail:i}))},[]),rs=s.useCallback(e=>{as(e),e?d("split-btn:open",{}):d("split-btn:close",{}),J==null||J(e)},[d,J]),ns=s.useCallback((e,i)=>{if(u==="selection"){const l=r;ne(e.id),d("split-btn:change",{item:e,previousItem:l},!1)}else d("split-btn:select",{item:e,index:i});return p==null?void 0:p(e,i)},[u,r,ne,d,p]),S=H||ka||Y,is=H||se||Y,os=s.useCallback(e=>{if(!S){if(u==="selection"&&r){const i=Z.findIndex(l=>l.id===r.id);d("split-btn:action",{selectedItem:r}),p==null||p(r,i)}else d("split-btn:action",{selectedItem:null}),K==null||K(e,null);Q==null||Q(e)}},[S,u,r,Z,d,K,p,Q]),ls=s.useCallback(e=>{var i;X==null||X(e),!e.defaultPrevented&&(e.key==="ArrowDown"||e.altKey&&e.key==="ArrowDown")&&!S&&(e.preventDefault(),(i=re.current)==null||i.click())},[S,X]),cs=s.useCallback(e=>{Za.current=e,typeof g=="function"?g(e):g&&(g.current=e)},[g]),ms=["arvo-split-btn",`arvo-split-btn--${U}`,`arvo-split-btn--${$}`,es&&"open",Y,Ha].filter(Boolean).join(" "),oe=["arvo-btn",`arvo-btn--${U}`,`arvo-btn--${$}`].join(" "),us=a.jsx("button",{ref:re,type:"button",className:`${oe} arvo-split-btn__trigger`,disabled:is,"aria-label":$a,children:a.jsx("span",{className:"arvo-split-btn__caret o9con o9con-angle-down","aria-hidden":"true"})});return a.jsxs("div",{ref:te,className:ms,role:"group","aria-disabled":H||void 0,"aria-busy":void 0,children:[a.jsxs("button",{...Ya,ref:cs,type:"button",className:`${oe} arvo-split-btn__action`,disabled:S,onClick:os,onKeyDown:ls,onFocus:Qa,onBlur:Xa,children:[ie&&a.jsx("span",{className:`arvo-split-btn__icon o9con o9con-${ie}`,"aria-hidden":"true"}),a.jsx("span",{className:"arvo-split-btn__lbl",children:ss})]}),a.jsx(ds,{...Ua,trigger:us,items:ts,placement:Oa,search:Ga,maxHeight:Ra,hasGroupDividers:Na,closeOnSelect:Fa,isDisabled:H||se||Y,isLoading:!1,onOpen:Ka,onClose:Ja,onSelect:ns,onOpenChange:rs})]})});n.__docgenInfo={description:"",methods:[],displayName:"ArvoSplitButton",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},icon:{required:!1,tsType:{name:"string"},description:""},mode:{required:!1,tsType:{name:"union",raw:"'action' | 'selection'",elements:[{name:"literal",value:"'action'"},{name:"literal",value:"'selection'"}]},description:"",defaultValue:{value:"'action'",computed:!1}},displaySelected:{required:!1,tsType:{name:"union",raw:"'label' | 'value'",elements:[{name:"literal",value:"'label'"},{name:"literal",value:"'value'"}]},description:"",defaultValue:{value:"'label'",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | number | null",elements:[{name:"string"},{name:"number"},{name:"null"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | number | null",elements:[{name:"string"},{name:"number"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isActionDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isTriggerDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},items:{required:!0,tsType:{name:"union",raw:"MenuItemData[] | ListGroup<MenuItemData>[]",elements:[{name:"Array",elements:[{name:"MenuItemData"}],raw:"MenuItemData[]"},{name:"Array",elements:[{name:"ListGroup",elements:[{name:"MenuItemData"}],raw:"ListGroup<MenuItemData>"}],raw:"ListGroup<MenuItemData>[]"}]},description:""},search:{required:!1,tsType:{name:"union",raw:"boolean | MenuSearchConfig",elements:[{name:"boolean"},{name:"MenuSearchConfig"}]},description:"Enable search with defaults (`true`) or pass a config object."},placement:{required:!1,tsType:{name:"union",raw:"'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'",elements:[{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"}]},description:"",defaultValue:{value:"'bottom-end'",computed:!1}},maxHeight:{required:!1,tsType:{name:"string"},description:""},hasGroupDividers:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},menuProps:{required:!1,tsType:{name:"Pick",elements:[{name:"ArvoActionMenuProps"},{name:"union",raw:"'actionsVisibility' | 'submenuTrigger'",elements:[{name:"literal",value:"'actionsVisibility'"},{name:"literal",value:"'submenuTrigger'"}]}],raw:`Pick<
  ArvoActionMenuProps,
  'actionsVisibility' | 'submenuTrigger'
>`},description:"Escape hatch for `ArvoActionMenu` config the parent doesn't expose\nflat. Bag-only knobs (`actionsVisibility`, `submenuTrigger`)\nflow through. On any conflict with a flat prop, the flat prop wins."},triggerLabel:{required:!1,tsType:{name:"string"},description:`Accessible name for the trigger (caret) segment, exposed via aria-label.
Default: "Show options".`,defaultValue:{value:"'Show options'",computed:!1}},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: React.MouseEvent<HTMLButtonElement>,
  selectedItem: MenuItemData | null,
) => void`,signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"},{type:{name:"union",raw:"MenuItemData | null",elements:[{name:"MenuItemData"},{name:"null"}]},name:"selectedItem"}],return:{name:"void"}}},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: MenuItemData, index: number) => boolean | void",signature:{arguments:[{type:{name:"MenuItemData"},name:"item"},{type:{name:"number"},name:"index"}],return:{name:"union",raw:"boolean | void",elements:[{name:"boolean"},{name:"void"}]}}},description:""},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => boolean | void",signature:{arguments:[],return:{name:"union",raw:"boolean | void",elements:[{name:"boolean"},{name:"void"}]}}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => boolean | void",signature:{arguments:[],return:{name:"union",raw:"boolean | void",elements:[{name:"boolean"},{name:"void"}]}}},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const t=[{id:"save",label:"Save",icon:"save"},{id:"save-as",label:"Save As",icon:"duplicate"},{id:"save-all",label:"Save All",icon:"floppy-o"}],gs=[{id:"save",label:"Save"},{id:"save-as",label:"Save As"},{id:"save-all",label:"Save All"}],Ss=[{id:"file",label:"File",items:[{id:"save",label:"Save",icon:"save",shortcut:"Ctrl+S"},{id:"save-as",label:"Save As",icon:"duplicate",shortcut:"Ctrl+Shift+S"}]},{id:"export-group",label:"Export",items:[{id:"export-csv",label:"Export CSV",icon:"download"},{id:"export-pdf",label:"Export PDF",icon:"download"}]}],fs=[{id:"export",label:"Export",icon:"download",submenu:[{id:"export-csv",label:"CSV"},{id:"export-json",label:"JSON"},{id:"export-pdf",label:"PDF"}]},{id:"print",label:"Print",icon:"print"}],c=[{id:"save",label:"Save",icon:"save"},{id:"save-as",label:"Save As",icon:"duplicate"},{id:"save-all",label:"Save All",icon:"floppy-o"}],ys={title:"Actions/SplitButton",component:n,tags:["!dev","new"],argTypes:{label:{control:{type:"text"},description:"Action segment label"},variant:{control:{type:"select"},options:["primary","secondary","tertiary"],description:"Visual style variant",table:{defaultValue:{summary:"primary"}}},size:{control:{type:"select"},options:["sm","md","lg"],description:"Segment size",table:{defaultValue:{summary:"md"}}},icon:{control:{type:"text"},description:"Leading icon on the action segment"},mode:{control:{type:"radio"},options:["action","selection"],description:"Action mode fires onAction; selection mode tracks the picked value",table:{defaultValue:{summary:"action"}}},displaySelected:{control:{type:"radio"},options:["label","value"],description:"Show label or value of selected item (selection mode only)",table:{defaultValue:{summary:"label"}}},placement:{control:{type:"select"},options:["top-start","top-end","bottom-start","bottom-end"],description:"Menu placement relative to the trigger",table:{defaultValue:{summary:"bottom-end"}}},isDisabled:{control:{type:"boolean"},description:"Disable both segments",table:{defaultValue:{summary:"false"}}},isActionDisabled:{control:{type:"boolean"},description:"Disable only the action segment",table:{defaultValue:{summary:"false"}}},isTriggerDisabled:{control:{type:"boolean"},description:"Disable only the trigger segment",table:{defaultValue:{summary:"false"}}},isLoading:{control:{type:"boolean"},description:"Skeleton shimmer overlay on both segments",table:{defaultValue:{summary:"false"}}},hasGroupDividers:{control:{type:"boolean"},description:"Show dividers between grouped items",table:{defaultValue:{summary:"true"}}},closeOnSelect:{control:{type:"boolean"},description:"Close the menu after an item is selected",table:{defaultValue:{summary:"true"}}},search:{control:{type:"boolean"},description:"Enable search inside the menu",table:{defaultValue:{summary:"false"}}},triggerLabel:{control:{type:"text"},description:"Accessible label for the trigger (caret) segment",table:{defaultValue:{summary:"Show options"}}},onAction:{action:"action",table:{category:"Events"}},onSelect:{action:"selected",table:{category:"Events"}},onOpen:{action:"opened",table:{category:"Events"}},onClose:{action:"closed",table:{category:"Events"}},onOpenChange:{action:"openChange",table:{category:"Events"}}},args:{label:"Save",variant:"primary",size:"md",icon:"save",mode:"action",placement:"bottom-end",isDisabled:!1,isActionDisabled:!1,isTriggerDisabled:!1,isLoading:!1,hasGroupDividers:!0,closeOnSelect:!0,triggerLabel:"Save options",items:t}},f={args:{label:"Save",icon:"save",items:t}},y={args:{label:"Save",icon:"save",items:t}},h={args:{label:"Save",variant:"primary",icon:"save",items:t}},A={args:{label:"Save",variant:"secondary",icon:"save",items:t}},I={args:{label:"Save",variant:"tertiary",icon:"save",items:t}},T={args:{label:"Save",size:"sm",icon:"save",items:t}},D={args:{label:"Save",size:"md",icon:"save",items:t}},w={args:{label:"Save",size:"lg",icon:"save",items:t}},L={name:"With Icon",args:{label:"Save",icon:"save",items:t}},x={name:"Selection Mode",args:{label:"Save",mode:"selection",items:gs,defaultValue:"save"}},M={name:"With Search",args:{label:"Save",icon:"save",search:!0,items:t}},V={name:"Grouped Items",args:{label:"Save",icon:"save",items:Ss,hasGroupDividers:!0}},j={name:"With Submenus",args:{label:"Save",icon:"save",items:fs}},P={name:"Scoped Menu Config (menuProps)",args:{label:"Tools",icon:"save",size:"md",items:t,menuProps:{actionsVisibility:"always",submenuTrigger:"click"}}},E={args:{label:"Save",icon:"save",isDisabled:!0,items:t}},q={name:"Action Disabled",args:{label:"Save",icon:"save",isActionDisabled:!0,items:t}},B={name:"Trigger Disabled",args:{label:"Save",icon:"save",isTriggerDisabled:!0,items:t}},C={args:{label:"Save",icon:"save",isLoading:!0,items:t}},_={name:"Action Focus Visible",args:{label:"Save",icon:"save",items:t},render:o=>(s.useEffect(()=>{const m=document.querySelector(".arvo-split-btn__action");m==null||m.focus()},[]),a.jsx(n,{...o,autoFocus:!0}))},z={args:{label:"",items:[]},render:()=>a.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[a.jsx(n,{label:"Primary",variant:"primary",icon:"save",items:c,triggerLabel:"Primary options"}),a.jsx(n,{label:"Secondary",variant:"secondary",icon:"save",items:c,triggerLabel:"Secondary options"}),a.jsx(n,{label:"Tertiary",variant:"tertiary",icon:"save",items:c,triggerLabel:"Tertiary options"})]})},W={args:{label:"",items:[]},render:()=>a.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[a.jsx(n,{label:"Small",size:"sm",icon:"save",items:c,triggerLabel:"Small options"}),a.jsx(n,{label:"Medium",size:"md",icon:"save",items:c,triggerLabel:"Medium options"}),a.jsx(n,{label:"Large",size:"lg",icon:"save",items:c,triggerLabel:"Large options"})]})},k={name:"Save / Save As / Save All",args:{label:"",items:[]},render:()=>{const o=[{id:"save",label:"Save",icon:"save"},{id:"save-as",label:"Save As",icon:"duplicate"},{id:"save-all",label:"Save All",icon:"floppy-o"}],[m,U]=s.useState("save");return a.jsx(n,{label:"Save",icon:"save",mode:"selection",value:m,items:o,onSelect:$=>U($.id),triggerLabel:"Save options"})}},G={name:"Action Disabled, Menu Usable",args:{label:"",items:[]},render:()=>a.jsx(n,{label:"Save",icon:"save",isActionDisabled:!0,items:c,triggerLabel:"Save options"})},O={name:"Trigger Disabled, Action Usable",args:{label:"",items:[]},render:()=>a.jsx(n,{label:"Save",icon:"save",isTriggerDisabled:!0,items:c,triggerLabel:"Save options"})},R={name:"Custom Trigger Label",args:{label:"",items:[]},render:()=>a.jsx(n,{label:"Save",icon:"save",triggerLabel:"Show alternative save actions",items:c})},N={name:"Keyboard Shortcut",args:{label:"",items:[]},render:()=>a.jsxs("div",{children:[a.jsx(n,{label:"Save",icon:"save",items:c,triggerLabel:"Save options"}),a.jsx("span",{style:{display:"block",marginTop:8},children:"Press ArrowDown on the action segment to jump straight to the menu."})]})},F={name:"In Toolbar",args:{label:"",items:[]},render:()=>a.jsxs("div",{className:"arvo-toolbar",style:{display:"flex",gap:8,alignItems:"center"},children:[a.jsx(n,{label:"Save",icon:"save",variant:"secondary",items:c,triggerLabel:"Save options"}),a.jsx(n,{label:"Print",icon:"print",variant:"secondary",items:[{id:"print",label:"Print",icon:"print"},{id:"print-preview",label:"Print Preview",icon:"search"}],triggerLabel:"Print options"})]})};var ce,me,ue;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    label: 'Save',
    icon: 'save',
    items: basicItems
  }
}`,...(ue=(me=f.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var de,pe,be;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    label: 'Save',
    icon: 'save',
    items: basicItems
  }
}`,...(be=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var ve,ge,Se;h.parameters={...h.parameters,docs:{...(ve=h.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    label: 'Save',
    variant: 'primary',
    icon: 'save',
    items: basicItems
  }
}`,...(Se=(ge=h.parameters)==null?void 0:ge.docs)==null?void 0:Se.source}}};var fe,ye,he;A.parameters={...A.parameters,docs:{...(fe=A.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    label: 'Save',
    variant: 'secondary',
    icon: 'save',
    items: basicItems
  }
}`,...(he=(ye=A.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var Ae,Ie,Te;I.parameters={...I.parameters,docs:{...(Ae=I.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    label: 'Save',
    variant: 'tertiary',
    icon: 'save',
    items: basicItems
  }
}`,...(Te=(Ie=I.parameters)==null?void 0:Ie.docs)==null?void 0:Te.source}}};var De,we,Le;T.parameters={...T.parameters,docs:{...(De=T.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    label: 'Save',
    size: 'sm',
    icon: 'save',
    items: basicItems
  }
}`,...(Le=(we=T.parameters)==null?void 0:we.docs)==null?void 0:Le.source}}};var xe,Me,Ve;D.parameters={...D.parameters,docs:{...(xe=D.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    label: 'Save',
    size: 'md',
    icon: 'save',
    items: basicItems
  }
}`,...(Ve=(Me=D.parameters)==null?void 0:Me.docs)==null?void 0:Ve.source}}};var je,Pe,Ee;w.parameters={...w.parameters,docs:{...(je=w.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    label: 'Save',
    size: 'lg',
    icon: 'save',
    items: basicItems
  }
}`,...(Ee=(Pe=w.parameters)==null?void 0:Pe.docs)==null?void 0:Ee.source}}};var qe,Be,Ce;L.parameters={...L.parameters,docs:{...(qe=L.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  name: 'With Icon',
  args: {
    label: 'Save',
    icon: 'save',
    items: basicItems
  }
}`,...(Ce=(Be=L.parameters)==null?void 0:Be.docs)==null?void 0:Ce.source}}};var _e,ze,We;x.parameters={...x.parameters,docs:{...(_e=x.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  name: 'Selection Mode',
  args: {
    label: 'Save',
    mode: 'selection',
    items: selectionItems,
    defaultValue: 'save'
  }
}`,...(We=(ze=x.parameters)==null?void 0:ze.docs)==null?void 0:We.source}}};var ke,Ge,Oe;M.parameters={...M.parameters,docs:{...(ke=M.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  name: 'With Search',
  args: {
    label: 'Save',
    icon: 'save',
    search: true,
    items: basicItems
  }
}`,...(Oe=(Ge=M.parameters)==null?void 0:Ge.docs)==null?void 0:Oe.source}}};var Re,Ne,Fe;V.parameters={...V.parameters,docs:{...(Re=V.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  name: 'Grouped Items',
  args: {
    label: 'Save',
    icon: 'save',
    items: groupedItems,
    hasGroupDividers: true
  }
}`,...(Fe=(Ne=V.parameters)==null?void 0:Ne.docs)==null?void 0:Fe.source}}};var Ue,$e,He;j.parameters={...j.parameters,docs:{...(Ue=j.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  name: 'With Submenus',
  args: {
    label: 'Save',
    icon: 'save',
    items: submenuItems
  }
}`,...(He=($e=j.parameters)==null?void 0:$e.docs)==null?void 0:He.source}}};var Ke,Je,Qe;P.parameters={...P.parameters,docs:{...(Ke=P.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  name: 'Scoped Menu Config (menuProps)',
  args: {
    label: 'Tools',
    icon: 'save',
    size: 'md',
    items: basicItems,
    menuProps: {
      actionsVisibility: 'always',
      submenuTrigger: 'click'
    }
  }
}`,...(Qe=(Je=P.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Xe,Ye,Ze;E.parameters={...E.parameters,docs:{...(Xe=E.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  args: {
    label: 'Save',
    icon: 'save',
    isDisabled: true,
    items: basicItems
  }
}`,...(Ze=(Ye=E.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var ea,aa,sa;q.parameters={...q.parameters,docs:{...(ea=q.parameters)==null?void 0:ea.docs,source:{originalSource:`{
  name: 'Action Disabled',
  args: {
    label: 'Save',
    icon: 'save',
    isActionDisabled: true,
    items: basicItems
  }
}`,...(sa=(aa=q.parameters)==null?void 0:aa.docs)==null?void 0:sa.source}}};var ta,ra,na;B.parameters={...B.parameters,docs:{...(ta=B.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  name: 'Trigger Disabled',
  args: {
    label: 'Save',
    icon: 'save',
    isTriggerDisabled: true,
    items: basicItems
  }
}`,...(na=(ra=B.parameters)==null?void 0:ra.docs)==null?void 0:na.source}}};var ia,oa,la;C.parameters={...C.parameters,docs:{...(ia=C.parameters)==null?void 0:ia.docs,source:{originalSource:`{
  args: {
    label: 'Save',
    icon: 'save',
    isLoading: true,
    items: basicItems
  }
}`,...(la=(oa=C.parameters)==null?void 0:oa.docs)==null?void 0:la.source}}};var ca,ma,ua;_.parameters={..._.parameters,docs:{...(ca=_.parameters)==null?void 0:ca.docs,source:{originalSource:`{
  name: 'Action Focus Visible',
  args: {
    label: 'Save',
    icon: 'save',
    items: basicItems
  },
  render: args => {
    useEffect(() => {
      const el = document.querySelector<HTMLButtonElement>('.arvo-split-btn__action');
      el?.focus();
    }, []);
    return <ArvoSplitButton {...args} autoFocus />;
  }
}`,...(ua=(ma=_.parameters)==null?void 0:ma.docs)==null?void 0:ua.source}}};var da,pa,ba;z.parameters={...z.parameters,docs:{...(da=z.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
      <ArvoSplitButton label="Primary" variant="primary" icon="save" items={variantItems} triggerLabel="Primary options" />\r
      <ArvoSplitButton label="Secondary" variant="secondary" icon="save" items={variantItems} triggerLabel="Secondary options" />\r
      <ArvoSplitButton label="Tertiary" variant="tertiary" icon="save" items={variantItems} triggerLabel="Tertiary options" />\r
    </div>
}`,...(ba=(pa=z.parameters)==null?void 0:pa.docs)==null?void 0:ba.source}}};var va,ga,Sa;W.parameters={...W.parameters,docs:{...(va=W.parameters)==null?void 0:va.docs,source:{originalSource:`{
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
      <ArvoSplitButton label="Small" size="sm" icon="save" items={variantItems} triggerLabel="Small options" />\r
      <ArvoSplitButton label="Medium" size="md" icon="save" items={variantItems} triggerLabel="Medium options" />\r
      <ArvoSplitButton label="Large" size="lg" icon="save" items={variantItems} triggerLabel="Large options" />\r
    </div>
}`,...(Sa=(ga=W.parameters)==null?void 0:ga.docs)==null?void 0:Sa.source}}};var fa,ya,ha;k.parameters={...k.parameters,docs:{...(fa=k.parameters)==null?void 0:fa.docs,source:{originalSource:`{
  name: 'Save / Save As / Save All',
  args: {
    label: '',
    items: []
  },
  render: () => {
    const items: MenuItemData[] = [{
      id: 'save',
      label: 'Save',
      icon: 'save'
    }, {
      id: 'save-as',
      label: 'Save As',
      icon: 'duplicate'
    }, {
      id: 'save-all',
      label: 'Save All',
      icon: 'floppy-o'
    }];
    const [value, setValue] = useState<string | number | null>('save');
    return <ArvoSplitButton label="Save" icon="save" mode="selection" value={value} items={items} onSelect={item => setValue(item.id)} triggerLabel="Save options" />;
  }
}`,...(ha=(ya=k.parameters)==null?void 0:ya.docs)==null?void 0:ha.source}}};var Aa,Ia,Ta;G.parameters={...G.parameters,docs:{...(Aa=G.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
  name: 'Action Disabled, Menu Usable',
  args: {
    label: '',
    items: []
  },
  render: () => <ArvoSplitButton label="Save" icon="save" isActionDisabled items={variantItems} triggerLabel="Save options" />
}`,...(Ta=(Ia=G.parameters)==null?void 0:Ia.docs)==null?void 0:Ta.source}}};var Da,wa,La;O.parameters={...O.parameters,docs:{...(Da=O.parameters)==null?void 0:Da.docs,source:{originalSource:`{
  name: 'Trigger Disabled, Action Usable',
  args: {
    label: '',
    items: []
  },
  render: () => <ArvoSplitButton label="Save" icon="save" isTriggerDisabled items={variantItems} triggerLabel="Save options" />
}`,...(La=(wa=O.parameters)==null?void 0:wa.docs)==null?void 0:La.source}}};var xa,Ma,Va;R.parameters={...R.parameters,docs:{...(xa=R.parameters)==null?void 0:xa.docs,source:{originalSource:`{
  name: 'Custom Trigger Label',
  args: {
    label: '',
    items: []
  },
  render: () => <ArvoSplitButton label="Save" icon="save" triggerLabel="Show alternative save actions" items={variantItems} />
}`,...(Va=(Ma=R.parameters)==null?void 0:Ma.docs)==null?void 0:Va.source}}};var ja,Pa,Ea;N.parameters={...N.parameters,docs:{...(ja=N.parameters)==null?void 0:ja.docs,source:{originalSource:`{
  name: 'Keyboard Shortcut',
  args: {
    label: '',
    items: []
  },
  render: () => <div>\r
      <ArvoSplitButton label="Save" icon="save" items={variantItems} triggerLabel="Save options" />\r
      <span style={{
      display: 'block',
      marginTop: 8
    }}>\r
        Press ArrowDown on the action segment to jump straight to the menu.\r
      </span>\r
    </div>
}`,...(Ea=(Pa=N.parameters)==null?void 0:Pa.docs)==null?void 0:Ea.source}}};var qa,Ba,Ca;F.parameters={...F.parameters,docs:{...(qa=F.parameters)==null?void 0:qa.docs,source:{originalSource:`{
  name: 'In Toolbar',
  args: {
    label: '',
    items: []
  },
  render: () => <div className="arvo-toolbar" style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center'
  }}>\r
      <ArvoSplitButton label="Save" icon="save" variant="secondary" items={variantItems} triggerLabel="Save options" />\r
      <ArvoSplitButton label="Print" icon="print" variant="secondary" items={[{
      id: 'print',
      label: 'Print',
      icon: 'print'
    }, {
      id: 'print-preview',
      label: 'Print Preview',
      icon: 'search'
    }]} triggerLabel="Print options" />\r
    </div>
}`,...(Ca=(Ba=F.parameters)==null?void 0:Ba.docs)==null?void 0:Ca.source}}};const hs=["Default","Playground","Primary","Secondary","Tertiary","Small","Medium","Large","WithIcon","SelectionMode","WithSearch","GroupedItems","WithSubmenus","ScopedMenuConfig","Disabled","ActionDisabled","TriggerDisabled","Loading","ActionFocusVisible","Variants","Sizes","SaveSaveAsSaveAll","ActionDisabledMenuUsable","TriggerDisabledActionUsable","CustomTriggerLabel","KeyboardShortcut","InToolbar"],xs=Object.freeze(Object.defineProperty({__proto__:null,ActionDisabled:q,ActionDisabledMenuUsable:G,ActionFocusVisible:_,CustomTriggerLabel:R,Default:f,Disabled:E,GroupedItems:V,InToolbar:F,KeyboardShortcut:N,Large:w,Loading:C,Medium:D,Playground:y,Primary:h,SaveSaveAsSaveAll:k,ScopedMenuConfig:P,Secondary:A,SelectionMode:x,Sizes:W,Small:T,Tertiary:I,TriggerDisabled:B,TriggerDisabledActionUsable:O,Variants:z,WithIcon:L,WithSearch:M,WithSubmenus:j,__namedExportsOrder:hs,default:ys},Symbol.toStringTag,{value:"Module"}));export{G as A,R as C,V as G,F as I,N as K,y as P,xs as S,O as T,z as V,M as W,W as a,k as b,j as c};
