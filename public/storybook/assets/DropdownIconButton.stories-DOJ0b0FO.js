import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as i}from"./ActionMenu-Bz8nuUE_.js";const s=[{id:"edit",label:"Edit",icon:"pencil"},{id:"duplicate",label:"Duplicate",icon:"duplicate"},{id:"archive",label:"Archive",icon:"archive"},{id:"delete",label:"Delete",icon:"bin",destructive:!0}],je=[{id:"view",label:"View",items:[{id:"open",label:"Open",icon:"folder-open"},{id:"preview",label:"Preview",icon:"eye"}]},{id:"manage",label:"Manage",items:[{id:"rename",label:"Rename",icon:"rename"},{id:"delete",label:"Delete",icon:"bin",destructive:!0}]}],o=[{id:"open",label:"Open",icon:"folder-open"},{id:"rename",label:"Rename",icon:"rename"},{id:"duplicate",label:"Duplicate",icon:"duplicate"},{id:"delete",label:"Delete",icon:"bin",destructive:!0}],ze={title:"Actions/DropdownIconButton",component:i,tags:["!dev","stable"],argTypes:{icon:{control:{type:"text"},description:"Trigger icon name (without o9con- prefix)"},tooltip:{control:{type:"text"},description:"Tooltip / aria-label for the icon trigger"},variant:{control:{type:"select"},options:["primary","secondary","tertiary","outline"],table:{defaultValue:{summary:"primary"}}},size:{control:{type:"select"},options:["sm","md","lg"],table:{defaultValue:{summary:"md"}}},isCompact:{control:{type:"boolean"},description:"Hide the dropdown chevron, showing icon only",table:{defaultValue:{summary:"false"}}},isDisabled:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isLoading:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},onSelect:{action:"selected",table:{category:"Events"}}},args:{icon:"ellipsis-v",tooltip:"More actions",variant:"primary",size:"md",isCompact:!1,isDisabled:!1,isLoading:!1,items:s}},t={args:{icon:"ellipsis-v",tooltip:"More actions",items:s}},r={args:{icon:"ellipsis-v",tooltip:"More actions",items:s}},a={args:{variant:"primary",icon:"ellipsis-v",tooltip:"Primary",items:s}},n={args:{variant:"secondary",icon:"ellipsis-v",tooltip:"Secondary",items:s}},l={args:{variant:"tertiary",icon:"ellipsis-v",tooltip:"Tertiary",items:s}},c={args:{variant:"outline",icon:"ellipsis-v",tooltip:"Outline",items:s}},p={args:{size:"sm",icon:"ellipsis-v",tooltip:"Small",items:s}},m={args:{size:"md",icon:"ellipsis-v",tooltip:"Medium",items:s}},d={args:{size:"lg",icon:"ellipsis-v",tooltip:"Large",items:s}},u={args:{icon:"ellipsis-v",tooltip:"More",isCompact:!0,items:s}},g={name:"With Search",args:{icon:"filter",tooltip:"Filter",search:!0,items:s}},v={name:"Grouped Items",args:{icon:"cog",tooltip:"Settings",items:je,hasGroupDividers:!0}},y={name:"Scoped Menu Config (menuProps)",args:{icon:"ellipsis-v",tooltip:"More",size:"md",items:s,menuProps:{actionsVisibility:"always",submenuTrigger:"click"}}},b={args:{icon:"ellipsis-v",tooltip:"More",isDisabled:!0,items:s}},I={args:{icon:"ellipsis-v",tooltip:"More",isLoading:!0,items:s}},S={args:{icon:"ellipsis-v",tooltip:"",items:[]},render:()=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[e.jsx(i,{variant:"primary",icon:"ellipsis-v",tooltip:"Primary",items:o}),e.jsx(i,{variant:"secondary",icon:"ellipsis-v",tooltip:"Secondary",items:o}),e.jsx(i,{variant:"tertiary",icon:"ellipsis-v",tooltip:"Tertiary",items:o}),e.jsx(i,{variant:"outline",icon:"ellipsis-v",tooltip:"Outline",items:o})]})},f={args:{icon:"ellipsis-v",tooltip:"",items:[]},render:()=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[e.jsx(i,{size:"sm",icon:"ellipsis-v",tooltip:"Small",items:o}),e.jsx(i,{size:"md",icon:"ellipsis-v",tooltip:"Medium",items:o}),e.jsx(i,{size:"lg",icon:"ellipsis-v",tooltip:"Large",items:o})]})},w={args:{icon:"ellipsis-v",tooltip:"",items:[]},render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(i,{icon:"cog",tooltip:"Settings (compact)",isCompact:!0,items:o}),e.jsx(i,{icon:"cog",tooltip:"Settings (non-compact)",items:o})]})},x={args:{icon:"ellipsis-v",tooltip:"",items:[]},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:["Acme Corp","Globex Inc","Initech LLC"].map(D=>e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",padding:8},children:[e.jsx("span",{style:{flexGrow:1},children:D}),e.jsx(i,{icon:"ellipsis-v",tooltip:`Actions for ${D}`,variant:"tertiary",isCompact:!0,items:o})]},D))})};var h,M,C;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    icon: 'ellipsis-v',
    tooltip: 'More actions',
    items: basicItems
  }
}`,...(C=(M=t.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var j,z,A;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    icon: 'ellipsis-v',
    tooltip: 'More actions',
    items: basicItems
  }
}`,...(A=(z=r.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var L,P,T;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    icon: 'ellipsis-v',
    tooltip: 'Primary',
    items: basicItems
  }
}`,...(T=(P=a.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var B,O,V;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    icon: 'ellipsis-v',
    tooltip: 'Secondary',
    items: basicItems
  }
}`,...(V=(O=n.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var G,W,_;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    icon: 'ellipsis-v',
    tooltip: 'Tertiary',
    items: basicItems
  }
}`,...(_=(W=l.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var R,E,k;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    icon: 'ellipsis-v',
    tooltip: 'Outline',
    items: basicItems
  }
}`,...(k=(E=c.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var F,N,$;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    icon: 'ellipsis-v',
    tooltip: 'Small',
    items: basicItems
  }
}`,...($=(N=p.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var H,q,J;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    size: 'md',
    icon: 'ellipsis-v',
    tooltip: 'Medium',
    items: basicItems
  }
}`,...(J=(q=m.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,U;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    icon: 'ellipsis-v',
    tooltip: 'Large',
    items: basicItems
  }
}`,...(U=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    icon: 'ellipsis-v',
    tooltip: 'More',
    isCompact: true,
    items: basicItems
  }
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,se,ie;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'With Search',
  args: {
    icon: 'filter',
    tooltip: 'Filter',
    search: true,
    items: basicItems
  }
}`,...(ie=(se=g.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var oe,te,re;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Grouped Items',
  args: {
    icon: 'cog',
    tooltip: 'Settings',
    items: groupedItems,
    hasGroupDividers: true
  }
}`,...(re=(te=v.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ae,ne,le;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Scoped Menu Config (menuProps)',
  args: {
    icon: 'ellipsis-v',
    tooltip: 'More',
    size: 'md',
    items: basicItems,
    menuProps: {
      actionsVisibility: 'always',
      submenuTrigger: 'click'
    }
  }
}`,...(le=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var ce,pe,me;b.parameters={...b.parameters,docs:{...(ce=b.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    icon: 'ellipsis-v',
    tooltip: 'More',
    isDisabled: true,
    items: basicItems
  }
}`,...(me=(pe=b.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var de,ue,ge;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    icon: 'ellipsis-v',
    tooltip: 'More',
    isLoading: true,
    items: basicItems
  }
}`,...(ge=(ue=I.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var ve,ye,be;S.parameters={...S.parameters,docs:{...(ve=S.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    icon: 'ellipsis-v',
    tooltip: '',
    items: []
  },
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>\r
      <ArvoDropdownIconButton variant="primary" icon="ellipsis-v" tooltip="Primary" items={rowItems} />\r
      <ArvoDropdownIconButton variant="secondary" icon="ellipsis-v" tooltip="Secondary" items={rowItems} />\r
      <ArvoDropdownIconButton variant="tertiary" icon="ellipsis-v" tooltip="Tertiary" items={rowItems} />\r
      <ArvoDropdownIconButton variant="outline" icon="ellipsis-v" tooltip="Outline" items={rowItems} />\r
    </div>
}`,...(be=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var Ie,Se,fe;f.parameters={...f.parameters,docs:{...(Ie=f.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    icon: 'ellipsis-v',
    tooltip: '',
    items: []
  },
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>\r
      <ArvoDropdownIconButton size="sm" icon="ellipsis-v" tooltip="Small" items={rowItems} />\r
      <ArvoDropdownIconButton size="md" icon="ellipsis-v" tooltip="Medium" items={rowItems} />\r
      <ArvoDropdownIconButton size="lg" icon="ellipsis-v" tooltip="Large" items={rowItems} />\r
    </div>
}`,...(fe=(Se=f.parameters)==null?void 0:Se.docs)==null?void 0:fe.source}}};var we,xe,De;w.parameters={...w.parameters,docs:{...(we=w.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    icon: 'ellipsis-v',
    tooltip: '',
    items: []
  },
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>\r
      <ArvoDropdownIconButton icon="cog" tooltip="Settings (compact)" isCompact items={rowItems} />\r
      <ArvoDropdownIconButton icon="cog" tooltip="Settings (non-compact)" items={rowItems} />\r
    </div>
}`,...(De=(xe=w.parameters)==null?void 0:xe.docs)==null?void 0:De.source}}};var he,Me,Ce;x.parameters={...x.parameters,docs:{...(he=x.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    icon: 'ellipsis-v',
    tooltip: '',
    items: []
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>\r
      {['Acme Corp', 'Globex Inc', 'Initech LLC'].map(row => <div key={row} style={{
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      padding: 8
    }}>\r
          <span style={{
        flexGrow: 1
      }}>{row}</span>\r
          <ArvoDropdownIconButton icon="ellipsis-v" tooltip={\`Actions for \${row}\`} variant="tertiary" isCompact items={rowItems} />\r
        </div>)}\r
    </div>
}`,...(Ce=(Me=x.parameters)==null?void 0:Me.docs)==null?void 0:Ce.source}}};const Ae=["Default","Playground","Primary","Secondary","Tertiary","Outline","Small","Medium","Large","Compact","WithSearch","GroupedItems","ScopedMenuConfig","Disabled","Loading","Variants","Sizes","CompactVsNonCompact","TableRowOverflow"],Te=Object.freeze(Object.defineProperty({__proto__:null,Compact:u,CompactVsNonCompact:w,Default:t,Disabled:b,GroupedItems:v,Large:d,Loading:I,Medium:m,Outline:c,Playground:r,Primary:a,ScopedMenuConfig:y,Secondary:n,Sizes:f,Small:p,TableRowOverflow:x,Tertiary:l,Variants:S,WithSearch:g,__namedExportsOrder:Ae,default:ze},Symbol.toStringTag,{value:"Module"}));export{w as C,Te as D,v as G,r as P,f as S,x as T,S as V,g as W};
