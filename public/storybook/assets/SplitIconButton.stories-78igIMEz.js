import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as Ye}from"./iframe-BaOp0t6F.js";import{A as r}from"./SplitIconButton-CKjlqb8i.js";const e=[{id:"all",label:"All filters",icon:"filter"},{id:"recent",label:"Recent",icon:"clock-o"},{id:"pinned",label:"Pinned",icon:"thumb-tack"},{id:"clear",label:"Clear filters",icon:"clear"}],Ze=[{id:"presets",label:"Presets",items:[{id:"recent",label:"Recent",icon:"clock-o"},{id:"pinned",label:"Pinned",icon:"thumb-tack"}]},{id:"manage",label:"Manage",items:[{id:"edit",label:"Edit filters",icon:"edit"},{id:"clear",label:"Clear filters",icon:"clear"}]}],$e=[{id:"export",label:"Export",icon:"download",submenu:[{id:"export-csv",label:"CSV"},{id:"export-json",label:"JSON"},{id:"export-pdf",label:"PDF"}]},{id:"print",label:"Print",icon:"print"}],et={title:"Actions/SplitIconButton",component:r,tags:["!dev","new"],argTypes:{icon:{control:{type:"text"},description:"Icon name (without o9con- prefix) on the action segment"},tooltip:{control:{type:"text"},description:"Required: aria-label and visual tooltip for the action segment"},variant:{control:{type:"select"},options:["primary","secondary","tertiary"],description:"Visual style variant",table:{defaultValue:{summary:"primary"}}},size:{control:{type:"select"},options:["sm","md","lg"],description:"Segment size",table:{defaultValue:{summary:"md"}}},placement:{control:{type:"select"},options:["top-start","top-end","bottom-start","bottom-end"],description:"Menu placement relative to the trigger",table:{defaultValue:{summary:"bottom-end"}}},isDisabled:{control:{type:"boolean"},description:"Disable both segments",table:{defaultValue:{summary:"false"}}},isActionDisabled:{control:{type:"boolean"},description:"Disable only the action segment",table:{defaultValue:{summary:"false"}}},isTriggerDisabled:{control:{type:"boolean"},description:"Disable only the trigger segment",table:{defaultValue:{summary:"false"}}},isLoading:{control:{type:"boolean"},description:"Skeleton shimmer overlay across both segments",table:{defaultValue:{summary:"false"}}},hasGroupDividers:{control:{type:"boolean"},description:"Show dividers between grouped items",table:{defaultValue:{summary:"true"}}},closeOnSelect:{control:{type:"boolean"},description:"Close the menu after an item is selected",table:{defaultValue:{summary:"true"}}},search:{control:{type:"boolean"},description:"Enable search inside the menu",table:{defaultValue:{summary:"false"}}},triggerLabel:{control:{type:"text"},description:"Accessible label for the trigger (caret) segment",table:{defaultValue:{summary:"Show options"}}},onAction:{action:"action",table:{category:"Events"}},onSelect:{action:"selected",table:{category:"Events"}},onOpen:{action:"opened",table:{category:"Events"}},onClose:{action:"closed",table:{category:"Events"}},onOpenChange:{action:"openChange",table:{category:"Events"}}},args:{icon:"filter",tooltip:"Filter",variant:"primary",size:"md",placement:"bottom-end",isDisabled:!1,isActionDisabled:!1,isTriggerDisabled:!1,isLoading:!1,hasGroupDividers:!0,closeOnSelect:!0,triggerLabel:"Filter options",items:e}},o={args:{icon:"filter",tooltip:"Filter",items:e}},s={args:{icon:"filter",tooltip:"Filter",items:e}},a={args:{icon:"filter",tooltip:"Filter",variant:"primary",items:e,triggerLabel:"Filter options"}},n={args:{icon:"filter",tooltip:"Filter",variant:"secondary",items:e,triggerLabel:"Filter options"}},l={args:{icon:"filter",tooltip:"Filter",variant:"tertiary",items:e,triggerLabel:"Filter options"}},c={args:{icon:"filter",tooltip:"Filter",size:"sm",items:e,triggerLabel:"Filter options"}},p={args:{icon:"filter",tooltip:"Filter",size:"md",items:e,triggerLabel:"Filter options"}},m={args:{icon:"filter",tooltip:"Filter",size:"lg",items:e,triggerLabel:"Filter options"}},g={name:"With Search",args:{icon:"filter",tooltip:"Filter",search:!0,items:e,triggerLabel:"Filter options"}},d={name:"Grouped Items",args:{icon:"filter",tooltip:"Filter",items:Ze,hasGroupDividers:!0,triggerLabel:"Filter options"}},u={name:"With Submenus",args:{icon:"export",tooltip:"Export",items:$e,triggerLabel:"Export options"}},b={name:"Scoped Menu Config (menuProps)",args:{icon:"filter",tooltip:"Filter",size:"md",items:e,triggerLabel:"Filter options",menuProps:{actionsVisibility:"always",submenuTrigger:"click"}}},f={args:{icon:"filter",tooltip:"Filter",isDisabled:!0,items:e,triggerLabel:"Filter options"}},F={name:"Action Disabled",args:{icon:"filter",tooltip:"Filter",isActionDisabled:!0,items:e,triggerLabel:"Filter options"}},y={name:"Trigger Disabled",args:{icon:"filter",tooltip:"Filter",isTriggerDisabled:!0,items:e,triggerLabel:"Filter options"}},S={args:{icon:"filter",tooltip:"Filter",isLoading:!0,items:e,triggerLabel:"Filter options"}},v={name:"Action Focus Visible",args:{icon:"filter",tooltip:"Filter",items:e,triggerLabel:"Filter options"},render:V=>(Ye.useEffect(()=>{const i=document.querySelector(".arvo-split-icon-btn__action");i==null||i.focus()},[]),t.jsx(r,{...V}))},L={name:"Trigger Focus Visible",args:{icon:"filter",tooltip:"Filter",items:e,triggerLabel:"Filter options"},render:V=>(Ye.useEffect(()=>{const i=document.querySelector(".arvo-split-icon-btn__trigger");i==null||i.focus()},[]),t.jsx(r,{...V}))},I={args:{icon:"filter",tooltip:"Filter",items:[]},render:()=>t.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[t.jsx(r,{icon:"filter",tooltip:"Filter",variant:"primary",items:e,triggerLabel:"Filter options"}),t.jsx(r,{icon:"filter",tooltip:"Filter",variant:"secondary",items:e,triggerLabel:"Filter options"}),t.jsx(r,{icon:"filter",tooltip:"Filter",variant:"tertiary",items:e,triggerLabel:"Filter options"})]})},x={args:{icon:"filter",tooltip:"Filter",items:[]},render:()=>t.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[t.jsx(r,{icon:"filter",tooltip:"Filter",size:"sm",items:e,triggerLabel:"Filter options"}),t.jsx(r,{icon:"filter",tooltip:"Filter",size:"md",items:e,triggerLabel:"Filter options"}),t.jsx(r,{icon:"filter",tooltip:"Filter",size:"lg",items:e,triggerLabel:"Filter options"})]})},h={name:"Filter in Toolbar",args:{icon:"filter",tooltip:"Filter",items:[]},render:()=>t.jsxs("div",{className:"arvo-toolbar",style:{display:"flex",gap:8,alignItems:"center"},children:[t.jsx(r,{icon:"filter",tooltip:"Filter",variant:"secondary",items:e,triggerLabel:"Filter options"}),t.jsx(r,{icon:"sort",tooltip:"Sort",variant:"secondary",items:[{id:"asc",label:"Sort ascending",icon:"sort-asc"},{id:"desc",label:"Sort descending",icon:"sort-desc"},{id:"clear",label:"Clear sort",icon:"clear"}],triggerLabel:"Sort options"}),t.jsx(r,{icon:"export",tooltip:"Export",variant:"secondary",items:[{id:"csv",label:"Export CSV",icon:"download"},{id:"pdf",label:"Export PDF",icon:"download"}],triggerLabel:"Export options"})]})},D={name:"Action Disabled, Menu Usable",args:{icon:"filter",tooltip:"Filter",items:[]},render:()=>t.jsx(r,{icon:"filter",tooltip:"Filter",isActionDisabled:!0,items:e,triggerLabel:"Filter options"})},A={name:"Trigger Disabled, Action Usable",args:{icon:"filter",tooltip:"Filter",items:[]},render:()=>t.jsx(r,{icon:"filter",tooltip:"Filter",isTriggerDisabled:!0,items:e,triggerLabel:"Filter options"})},T={name:"Custom Trigger Label",args:{icon:"filter",tooltip:"Filter",items:[]},render:()=>t.jsx(r,{icon:"filter",tooltip:"Filter rows",items:e,triggerLabel:"Show alternative filter presets"})},E={name:"Keyboard Shortcut",args:{icon:"filter",tooltip:"Filter",items:[]},render:()=>t.jsxs("div",{children:[t.jsx(r,{icon:"filter",tooltip:"Filter",items:e,triggerLabel:"Filter options"}),t.jsx("span",{style:{display:"block",marginTop:8},children:"Tab to focus the action segment, then press ArrowDown to jump straight into the menu."})]})};var j,w,z;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    icon: 'filter',
    tooltip: 'Filter',
    items: filterItems
  }
}`,...(z=(w=o.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var B,C,P;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    icon: 'filter',
    tooltip: 'Filter',
    items: filterItems
  }
}`,...(P=(C=s.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var M,_,W;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    icon: 'filter',
    tooltip: 'Filter',
    variant: 'primary',
    items: filterItems,
    triggerLabel: 'Filter options'
  }
}`,...(W=(_=a.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var k,G,O;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    icon: 'filter',
    tooltip: 'Filter',
    variant: 'secondary',
    items: filterItems,
    triggerLabel: 'Filter options'
  }
}`,...(O=(G=n.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var U,q,K;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    icon: 'filter',
    tooltip: 'Filter',
    variant: 'tertiary',
    items: filterItems,
    triggerLabel: 'Filter options'
  }
}`,...(K=(q=l.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var R,N,H;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    icon: 'filter',
    tooltip: 'Filter',
    size: 'sm',
    items: filterItems,
    triggerLabel: 'Filter options'
  }
}`,...(H=(N=c.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var J,Q,X;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    icon: 'filter',
    tooltip: 'Filter',
    size: 'md',
    items: filterItems,
    triggerLabel: 'Filter options'
  }
}`,...(X=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    icon: 'filter',
    tooltip: 'Filter',
    size: 'lg',
    items: filterItems,
    triggerLabel: 'Filter options'
  }
}`,...($=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,re;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'With Search',
  args: {
    icon: 'filter',
    tooltip: 'Filter',
    search: true,
    items: filterItems,
    triggerLabel: 'Filter options'
  }
}`,...(re=(te=g.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ie,oe,se;d.parameters={...d.parameters,docs:{...(ie=d.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Grouped Items',
  args: {
    icon: 'filter',
    tooltip: 'Filter',
    items: groupedItems,
    hasGroupDividers: true,
    triggerLabel: 'Filter options'
  }
}`,...(se=(oe=d.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ae,ne,le;u.parameters={...u.parameters,docs:{...(ae=u.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'With Submenus',
  args: {
    icon: 'export',
    tooltip: 'Export',
    items: submenuItems,
    triggerLabel: 'Export options'
  }
}`,...(le=(ne=u.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var ce,pe,me;b.parameters={...b.parameters,docs:{...(ce=b.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'Scoped Menu Config (menuProps)',
  args: {
    icon: 'filter',
    tooltip: 'Filter',
    size: 'md',
    items: filterItems,
    triggerLabel: 'Filter options',
    menuProps: {
      actionsVisibility: 'always',
      submenuTrigger: 'click'
    }
  }
}`,...(me=(pe=b.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ge,de,ue;f.parameters={...f.parameters,docs:{...(ge=f.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    icon: 'filter',
    tooltip: 'Filter',
    isDisabled: true,
    items: filterItems,
    triggerLabel: 'Filter options'
  }
}`,...(ue=(de=f.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var be,fe,Fe;F.parameters={...F.parameters,docs:{...(be=F.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: 'Action Disabled',
  args: {
    icon: 'filter',
    tooltip: 'Filter',
    isActionDisabled: true,
    items: filterItems,
    triggerLabel: 'Filter options'
  }
}`,...(Fe=(fe=F.parameters)==null?void 0:fe.docs)==null?void 0:Fe.source}}};var ye,Se,ve;y.parameters={...y.parameters,docs:{...(ye=y.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'Trigger Disabled',
  args: {
    icon: 'filter',
    tooltip: 'Filter',
    isTriggerDisabled: true,
    items: filterItems,
    triggerLabel: 'Filter options'
  }
}`,...(ve=(Se=y.parameters)==null?void 0:Se.docs)==null?void 0:ve.source}}};var Le,Ie,xe;S.parameters={...S.parameters,docs:{...(Le=S.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    icon: 'filter',
    tooltip: 'Filter',
    isLoading: true,
    items: filterItems,
    triggerLabel: 'Filter options'
  }
}`,...(xe=(Ie=S.parameters)==null?void 0:Ie.docs)==null?void 0:xe.source}}};var he,De,Ae;v.parameters={...v.parameters,docs:{...(he=v.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'Action Focus Visible',
  args: {
    icon: 'filter',
    tooltip: 'Filter',
    items: filterItems,
    triggerLabel: 'Filter options'
  },
  render: args => {
    useEffect(() => {
      const el = document.querySelector<HTMLButtonElement>('.arvo-split-icon-btn__action');
      el?.focus();
    }, []);
    return <ArvoSplitIconButton {...args} />;
  }
}`,...(Ae=(De=v.parameters)==null?void 0:De.docs)==null?void 0:Ae.source}}};var Te,Ee,Ve;L.parameters={...L.parameters,docs:{...(Te=L.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  name: 'Trigger Focus Visible',
  args: {
    icon: 'filter',
    tooltip: 'Filter',
    items: filterItems,
    triggerLabel: 'Filter options'
  },
  render: args => {
    useEffect(() => {
      const el = document.querySelector<HTMLButtonElement>('.arvo-split-icon-btn__trigger');
      el?.focus();
    }, []);
    return <ArvoSplitIconButton {...args} />;
  }
}`,...(Ve=(Ee=L.parameters)==null?void 0:Ee.docs)==null?void 0:Ve.source}}};var je,we,ze;I.parameters={...I.parameters,docs:{...(je=I.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    icon: 'filter',
    tooltip: 'Filter',
    items: []
  },
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>\r
      <ArvoSplitIconButton icon="filter" tooltip="Filter" variant="primary" items={filterItems} triggerLabel="Filter options" />\r
      <ArvoSplitIconButton icon="filter" tooltip="Filter" variant="secondary" items={filterItems} triggerLabel="Filter options" />\r
      <ArvoSplitIconButton icon="filter" tooltip="Filter" variant="tertiary" items={filterItems} triggerLabel="Filter options" />\r
    </div>
}`,...(ze=(we=I.parameters)==null?void 0:we.docs)==null?void 0:ze.source}}};var Be,Ce,Pe;x.parameters={...x.parameters,docs:{...(Be=x.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    icon: 'filter',
    tooltip: 'Filter',
    items: []
  },
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>\r
      <ArvoSplitIconButton icon="filter" tooltip="Filter" size="sm" items={filterItems} triggerLabel="Filter options" />\r
      <ArvoSplitIconButton icon="filter" tooltip="Filter" size="md" items={filterItems} triggerLabel="Filter options" />\r
      <ArvoSplitIconButton icon="filter" tooltip="Filter" size="lg" items={filterItems} triggerLabel="Filter options" />\r
    </div>
}`,...(Pe=(Ce=x.parameters)==null?void 0:Ce.docs)==null?void 0:Pe.source}}};var Me,_e,We;h.parameters={...h.parameters,docs:{...(Me=h.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  name: 'Filter in Toolbar',
  args: {
    icon: 'filter',
    tooltip: 'Filter',
    items: []
  },
  render: () => <div className="arvo-toolbar" style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center'
  }}>\r
      <ArvoSplitIconButton icon="filter" tooltip="Filter" variant="secondary" items={filterItems} triggerLabel="Filter options" />\r
      <ArvoSplitIconButton icon="sort" tooltip="Sort" variant="secondary" items={[{
      id: 'asc',
      label: 'Sort ascending',
      icon: 'sort-asc'
    }, {
      id: 'desc',
      label: 'Sort descending',
      icon: 'sort-desc'
    }, {
      id: 'clear',
      label: 'Clear sort',
      icon: 'clear'
    }]} triggerLabel="Sort options" />\r
      <ArvoSplitIconButton icon="export" tooltip="Export" variant="secondary" items={[{
      id: 'csv',
      label: 'Export CSV',
      icon: 'download'
    }, {
      id: 'pdf',
      label: 'Export PDF',
      icon: 'download'
    }]} triggerLabel="Export options" />\r
    </div>
}`,...(We=(_e=h.parameters)==null?void 0:_e.docs)==null?void 0:We.source}}};var ke,Ge,Oe;D.parameters={...D.parameters,docs:{...(ke=D.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  name: 'Action Disabled, Menu Usable',
  args: {
    icon: 'filter',
    tooltip: 'Filter',
    items: []
  },
  render: () => <ArvoSplitIconButton icon="filter" tooltip="Filter" isActionDisabled items={filterItems} triggerLabel="Filter options" />
}`,...(Oe=(Ge=D.parameters)==null?void 0:Ge.docs)==null?void 0:Oe.source}}};var Ue,qe,Ke;A.parameters={...A.parameters,docs:{...(Ue=A.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  name: 'Trigger Disabled, Action Usable',
  args: {
    icon: 'filter',
    tooltip: 'Filter',
    items: []
  },
  render: () => <ArvoSplitIconButton icon="filter" tooltip="Filter" isTriggerDisabled items={filterItems} triggerLabel="Filter options" />
}`,...(Ke=(qe=A.parameters)==null?void 0:qe.docs)==null?void 0:Ke.source}}};var Re,Ne,He;T.parameters={...T.parameters,docs:{...(Re=T.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  name: 'Custom Trigger Label',
  args: {
    icon: 'filter',
    tooltip: 'Filter',
    items: []
  },
  render: () => <ArvoSplitIconButton icon="filter" tooltip="Filter rows" items={filterItems} triggerLabel="Show alternative filter presets" />
}`,...(He=(Ne=T.parameters)==null?void 0:Ne.docs)==null?void 0:He.source}}};var Je,Qe,Xe;E.parameters={...E.parameters,docs:{...(Je=E.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  name: 'Keyboard Shortcut',
  args: {
    icon: 'filter',
    tooltip: 'Filter',
    items: []
  },
  render: () => <div>\r
      <ArvoSplitIconButton icon="filter" tooltip="Filter" items={filterItems} triggerLabel="Filter options" />\r
      <span style={{
      display: 'block',
      marginTop: 8
    }}>\r
        Tab to focus the action segment, then press ArrowDown to jump straight into the menu.\r
      </span>\r
    </div>
}`,...(Xe=(Qe=E.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};const tt=["Default","Playground","Primary","Secondary","Tertiary","Small","Medium","Large","WithSearch","GroupedItems","WithSubmenus","ScopedMenuConfig","Disabled","ActionDisabled","TriggerDisabled","Loading","ActionFocusVisible","TriggerFocusVisible","Variants","Sizes","FilterInToolbar","ActionDisabledMenuUsable","TriggerDisabledActionUsable","CustomTriggerLabel","KeyboardShortcut"],st=Object.freeze(Object.defineProperty({__proto__:null,ActionDisabled:F,ActionDisabledMenuUsable:D,ActionFocusVisible:v,CustomTriggerLabel:T,Default:o,Disabled:f,FilterInToolbar:h,GroupedItems:d,KeyboardShortcut:E,Large:m,Loading:S,Medium:p,Playground:s,Primary:a,ScopedMenuConfig:b,Secondary:n,Sizes:x,Small:c,Tertiary:l,TriggerDisabled:y,TriggerDisabledActionUsable:A,TriggerFocusVisible:L,Variants:I,WithSearch:g,WithSubmenus:u,__namedExportsOrder:tt,default:et},Symbol.toStringTag,{value:"Module"}));export{D as A,T as C,h as F,d as G,E as K,s as P,st as S,A as T,I as V,g as W,x as a,u as b};
