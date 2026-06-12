import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as jt}from"./iframe-BaOp0t6F.js";import{A as e}from"./IconButton-BgwDUYzG.js";const Bt={title:"Actions/IconButton",component:e,tags:["!dev","stable"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","tertiary","outline","danger"],description:"Visual style variant",table:{defaultValue:{summary:"primary"}}},size:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Button size. xs (16px) is exclusive to IconButton.",table:{defaultValue:{summary:"md"}}},type:{control:{type:"select"},options:["button","submit","reset"],description:"Native HTML button type",table:{defaultValue:{summary:"button"}}},icon:{control:{type:"text"},description:"Icon name without o9con- prefix. Required."},tooltip:{control:{type:"text"},description:"Accessible label and native tooltip. Maps to both aria-label and title. Required."},isDisabled:{control:{type:"boolean"},description:"Prevent all interaction",table:{defaultValue:{summary:"false"}}},isSelected:{control:{type:"boolean"},description:"Toggle/active state. Sets aria-pressed and .active class."},isLoading:{control:{type:"boolean"},description:"Show skeleton shimmer loading overlay",table:{defaultValue:{summary:"false"}}},onClick:{action:"clicked",description:"`(event: MouseEvent) => void` -- Click handler callback. Suppressed when disabled or loading.",table:{category:"Events"}}},args:{icon:"plus",tooltip:"Add",variant:"primary",size:"md",type:"button",isDisabled:!1,isLoading:!1}},o={args:{icon:"plus",tooltip:"Add"}},a={args:{icon:"plus",tooltip:"Try every prop"}},i={args:{variant:"primary",icon:"plus",tooltip:"Add"}},s={args:{variant:"secondary",icon:"edit",tooltip:"Edit"}},n={args:{variant:"tertiary",icon:"ellipsis-v",tooltip:"More options"}},l={args:{variant:"outline",icon:"filter",tooltip:"Filter"}},c={args:{variant:"danger",icon:"bin",tooltip:"Delete"}},p={name:"Extra Small (xs)",args:{size:"xs",icon:"close",tooltip:"Close"}},d={args:{size:"sm",icon:"plus",tooltip:"Add"}},u={args:{size:"md",icon:"plus",tooltip:"Add"}},m={args:{size:"lg",icon:"plus",tooltip:"Add"}},g={args:{isLoading:!0,icon:"plus",tooltip:"Saving"}},v={args:{isDisabled:!0,icon:"plus",tooltip:"Add"}},y={args:{isSelected:!0,variant:"secondary",icon:"star",tooltip:"Favorite"}},S={args:{icon:"plus",tooltip:""},render:()=>t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,alignItems:"center"},children:[t.jsx(e,{variant:"primary",icon:"plus",tooltip:"Primary"}),t.jsx(e,{variant:"secondary",icon:"edit",tooltip:"Secondary"}),t.jsx(e,{variant:"tertiary",icon:"ellipsis-v",tooltip:"Tertiary"}),t.jsx(e,{variant:"outline",icon:"filter",tooltip:"Outline"}),t.jsx(e,{variant:"danger",icon:"bin",tooltip:"Danger"})]})},x={args:{icon:"plus",tooltip:""},render:()=>t.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[t.jsx(e,{size:"xs",variant:"secondary",icon:"close",tooltip:"Extra Small"}),t.jsx(e,{size:"sm",variant:"secondary",icon:"plus",tooltip:"Small"}),t.jsx(e,{size:"md",variant:"secondary",icon:"plus",tooltip:"Medium"}),t.jsx(e,{size:"lg",variant:"secondary",icon:"plus",tooltip:"Large"})]})},b={args:{icon:"plus",tooltip:""},render:()=>t.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center",padding:8},children:[t.jsx(e,{variant:"tertiary",icon:"bold",tooltip:"Bold"}),t.jsx(e,{variant:"tertiary",icon:"italic",tooltip:"Italic"}),t.jsx(e,{variant:"tertiary",icon:"underline",tooltip:"Underline"}),t.jsx(e,{variant:"tertiary",icon:"strikethrough",tooltip:"Strikethrough"}),t.jsx("span",{style:{width:1,height:20,display:"inline-block"},"aria-hidden":"true"}),t.jsx(e,{variant:"tertiary",icon:"align-left",tooltip:"Align left"}),t.jsx(e,{variant:"tertiary",icon:"align-center",tooltip:"Align center"}),t.jsx(e,{variant:"tertiary",icon:"align-right",tooltip:"Align right"})]})},A={args:{icon:"plus",tooltip:""},render:()=>{const[ft,It]=jt.useState("grid"),ht=[{id:"grid",icon:"grid",label:"Grid view"},{id:"list",icon:"list",label:"List view"},{id:"map",icon:"map",label:"Map view"}];return t.jsx("div",{style:{display:"flex",gap:4,alignItems:"center"},children:ht.map(r=>t.jsx(e,{variant:"secondary",icon:r.icon,tooltip:r.label,isSelected:ft===r.id,onClick:()=>It(r.id)},r.id))})}};var f,I,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    icon: 'plus',
    tooltip: 'Add'
  }
}`,...(h=(I=o.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};var j,B,z;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    icon: 'plus',
    tooltip: 'Try every prop'
  }
}`,...(z=(B=a.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var w,D,T;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    icon: 'plus',
    tooltip: 'Add'
  }
}`,...(T=(D=i.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var k,L,E;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    icon: 'edit',
    tooltip: 'Edit'
  }
}`,...(E=(L=s.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var M,P,V;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    icon: 'ellipsis-v',
    tooltip: 'More options'
  }
}`,...(V=(P=n.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var O,C,_;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    icon: 'filter',
    tooltip: 'Filter'
  }
}`,...(_=(C=l.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var R,F,G;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    icon: 'bin',
    tooltip: 'Delete'
  }
}`,...(G=(F=c.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var q,U,W;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Extra Small (xs)',
  args: {
    size: 'xs',
    icon: 'close',
    tooltip: 'Close'
  }
}`,...(W=(U=p.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var H,N,J;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    icon: 'plus',
    tooltip: 'Add'
  }
}`,...(J=(N=d.parameters)==null?void 0:N.docs)==null?void 0:J.source}}};var K,Q,X;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    size: 'md',
    icon: 'plus',
    tooltip: 'Add'
  }
}`,...(X=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    icon: 'plus',
    tooltip: 'Add'
  }
}`,...($=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var tt,et,rt;g.parameters={...g.parameters,docs:{...(tt=g.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    icon: 'plus',
    tooltip: 'Saving'
  }
}`,...(rt=(et=g.parameters)==null?void 0:et.docs)==null?void 0:rt.source}}};var ot,at,it;v.parameters={...v.parameters,docs:{...(ot=v.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    icon: 'plus',
    tooltip: 'Add'
  }
}`,...(it=(at=v.parameters)==null?void 0:at.docs)==null?void 0:it.source}}};var st,nt,lt;y.parameters={...y.parameters,docs:{...(st=y.parameters)==null?void 0:st.docs,source:{originalSource:`{
  args: {
    isSelected: true,
    variant: 'secondary',
    icon: 'star',
    tooltip: 'Favorite'
  }
}`,...(lt=(nt=y.parameters)==null?void 0:nt.docs)==null?void 0:lt.source}}};var ct,pt,dt;S.parameters={...S.parameters,docs:{...(ct=S.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  args: {
    icon: 'plus',
    tooltip: ''
  },
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    alignItems: 'center'
  }}>\r
      <ArvoIconButton variant="primary" icon="plus" tooltip="Primary" />\r
      <ArvoIconButton variant="secondary" icon="edit" tooltip="Secondary" />\r
      <ArvoIconButton variant="tertiary" icon="ellipsis-v" tooltip="Tertiary" />\r
      <ArvoIconButton variant="outline" icon="filter" tooltip="Outline" />\r
      <ArvoIconButton variant="danger" icon="bin" tooltip="Danger" />\r
    </div>
}`,...(dt=(pt=S.parameters)==null?void 0:pt.docs)==null?void 0:dt.source}}};var ut,mt,gt;x.parameters={...x.parameters,docs:{...(ut=x.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  args: {
    icon: 'plus',
    tooltip: ''
  },
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center'
  }}>\r
      <ArvoIconButton size="xs" variant="secondary" icon="close" tooltip="Extra Small" />\r
      <ArvoIconButton size="sm" variant="secondary" icon="plus" tooltip="Small" />\r
      <ArvoIconButton size="md" variant="secondary" icon="plus" tooltip="Medium" />\r
      <ArvoIconButton size="lg" variant="secondary" icon="plus" tooltip="Large" />\r
    </div>
}`,...(gt=(mt=x.parameters)==null?void 0:mt.docs)==null?void 0:gt.source}}};var vt,yt,St;b.parameters={...b.parameters,docs:{...(vt=b.parameters)==null?void 0:vt.docs,source:{originalSource:`{
  args: {
    icon: 'plus',
    tooltip: ''
  },
  render: () => <div style={{
    display: 'flex',
    gap: 4,
    alignItems: 'center',
    padding: 8
  }}>\r
      <ArvoIconButton variant="tertiary" icon="bold" tooltip="Bold" />\r
      <ArvoIconButton variant="tertiary" icon="italic" tooltip="Italic" />\r
      <ArvoIconButton variant="tertiary" icon="underline" tooltip="Underline" />\r
      <ArvoIconButton variant="tertiary" icon="strikethrough" tooltip="Strikethrough" />\r
      <span style={{
      width: 1,
      height: 20,
      display: 'inline-block'
    }} aria-hidden="true" />\r
      <ArvoIconButton variant="tertiary" icon="align-left" tooltip="Align left" />\r
      <ArvoIconButton variant="tertiary" icon="align-center" tooltip="Align center" />\r
      <ArvoIconButton variant="tertiary" icon="align-right" tooltip="Align right" />\r
    </div>
}`,...(St=(yt=b.parameters)==null?void 0:yt.docs)==null?void 0:St.source}}};var xt,bt,At;A.parameters={...A.parameters,docs:{...(xt=A.parameters)==null?void 0:xt.docs,source:{originalSource:`{
  args: {
    icon: 'plus',
    tooltip: ''
  },
  render: () => {
    const [selected, setSelected] = useState<string | null>('grid');
    const opts: Array<{
      id: string;
      icon: string;
      label: string;
    }> = [{
      id: 'grid',
      icon: 'grid',
      label: 'Grid view'
    }, {
      id: 'list',
      icon: 'list',
      label: 'List view'
    }, {
      id: 'map',
      icon: 'map',
      label: 'Map view'
    }];
    return <div style={{
      display: 'flex',
      gap: 4,
      alignItems: 'center'
    }}>\r
        {opts.map(o => <ArvoIconButton key={o.id} variant="secondary" icon={o.icon} tooltip={o.label} isSelected={selected === o.id} onClick={() => setSelected(o.id)} />)}\r
      </div>;
  }
}`,...(At=(bt=A.parameters)==null?void 0:bt.docs)==null?void 0:At.source}}};const zt=["Default","Playground","Primary","Secondary","Tertiary","Outline","Danger","ExtraSmall","Small","Medium","Large","Loading","Disabled","Selected","AllVariants","AllSizes","ToolbarRow","ToggleGroup"],kt=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:x,AllVariants:S,Danger:c,Default:o,Disabled:v,ExtraSmall:p,Large:m,Loading:g,Medium:u,Outline:l,Playground:a,Primary:i,Secondary:s,Selected:y,Small:d,Tertiary:n,ToggleGroup:A,ToolbarRow:b,__namedExportsOrder:zt,default:Bt},Symbol.toStringTag,{value:"Module"}));export{S as A,v as D,kt as I,g as L,a as P,y as S,b as T,x as a,A as b};
