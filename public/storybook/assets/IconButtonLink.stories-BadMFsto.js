import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as j}from"./iframe-BaOp0t6F.js";import{u as Re}from"./useTooltip-DZu1XpnP.js";import{r as _e}from"./loading-flag-DkqmYwgU.js";const r=j.forwardRef(function({variant:ke="primary",size:Le="md",icon:Ae,href:Ie,tooltip:S,isDisabled:a=!1,isLoading:Ce=!1,target:A,rel:I,className:Be,onClick:L,...je},k){const B=j.useRef(null),ze=_e(),Te=typeof S=="string"?S:S.content;Re({triggerRef:B,tooltip:S});const Oe=A==="_blank"?I??"noopener noreferrer":I,Ee=["arvo-icon-btn",`arvo-btn--${ke}`,`arvo-btn--${Le}`,a?"is-disabled":"","",Be??""].filter(Boolean).join(" "),we=a||ze,De=t=>{if(we){t.preventDefault(),t.stopPropagation();return}L==null||L(t)},Ve=t=>{B.current=t,typeof k=="function"?k(t):k&&(k.current=t)};return e.jsx("a",{ref:Ve,href:a?void 0:Ie,target:a?void 0:A,rel:a?void 0:Oe,className:Ee,"aria-label":Te,"aria-disabled":a?!0:void 0,"aria-busy":void 0,tabIndex:a?0:void 0,onClick:De,...je,children:e.jsx("span",{className:`arvo-btn__ico o9con o9con-${Ae}`,"aria-hidden":"true"})})});r.__docgenInfo={description:"",methods:[],displayName:"ArvoIconButtonLink",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary' | 'outline' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},icon:{required:!0,tsType:{name:"string"},description:""},href:{required:!0,tsType:{name:"string"},description:""},tooltip:{required:!0,tsType:{name:"union",raw:"string | TooltipConfig",elements:[{name:"string"},{name:"TooltipConfig"}]},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const Pe={title:"Navigation/IconButtonLink",component:r,tags:["!dev","stable"],argTypes:{icon:{control:{type:"text"}},href:{control:{type:"text"}},tooltip:{control:{type:"text"}},variant:{control:{type:"select"},options:["primary","secondary","tertiary","outline","danger"],table:{defaultValue:{summary:"primary"}}},size:{control:{type:"select"},options:["xs","sm","md","lg"],table:{defaultValue:{summary:"md"}}},isDisabled:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isLoading:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},onClick:{action:"clicked",table:{category:"Events"}}},args:{icon:"external-link",href:"https://example.com",tooltip:"Open external",variant:"tertiary",size:"md",isDisabled:!1,isLoading:!1},parameters:{docs:{description:{component:"Consolidated CSF for ArvoIconButtonLink. All stories are docs-only\r\n(`tags: ['!dev', ...]`) and render on the attached `IconButtonLink.mdx` page\r\n(the single sidebar node for this component) via Doc Blocks."}}}},o={href:"#",tooltip:"Action"},n={args:{icon:"external-link",href:"https://example.com",tooltip:"Open in new tab"}},s={args:{icon:"external-link",href:"https://example.com",tooltip:"Open in new tab"}},i={args:{...o,variant:"primary",icon:"external-link",tooltip:"Open"}},l={args:{...o,variant:"secondary",icon:"edit",tooltip:"Edit"}},c={args:{...o,variant:"tertiary",icon:"ellipsis-v",tooltip:"More"}},p={args:{...o,variant:"outline",icon:"filter",tooltip:"Filter"}},d={args:{...o,variant:"danger",icon:"bin",tooltip:"Delete"}},m={name:"Extra Small (xs)",args:{...o,size:"xs",icon:"close",tooltip:"Close"}},u={args:{...o,size:"sm",icon:"plus",tooltip:"Add"}},g={args:{...o,size:"md",icon:"plus",tooltip:"Add"}},f={args:{...o,size:"lg",icon:"plus",tooltip:"Add"}},v={args:{...o,icon:"plus",tooltip:"Add",isDisabled:!0}},y={args:{...o,icon:"plus",tooltip:"Add",isLoading:!0}},x={args:{icon:"plus",href:"#",tooltip:""},render:()=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[e.jsx(r,{variant:"primary",icon:"plus",href:"#",tooltip:"Primary"}),e.jsx(r,{variant:"secondary",icon:"edit",href:"#",tooltip:"Secondary"}),e.jsx(r,{variant:"tertiary",icon:"ellipsis-v",href:"#",tooltip:"Tertiary"}),e.jsx(r,{variant:"outline",icon:"filter",href:"#",tooltip:"Outline"}),e.jsx(r,{variant:"danger",icon:"bin",href:"#",tooltip:"Danger"})]})},h={args:{icon:"plus",href:"#",tooltip:""},render:()=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(r,{size:"xs",variant:"secondary",icon:"close",href:"#",tooltip:"Extra small"}),e.jsx(r,{size:"sm",variant:"secondary",icon:"plus",href:"#",tooltip:"Small"}),e.jsx(r,{size:"md",variant:"secondary",icon:"plus",href:"#",tooltip:"Medium"}),e.jsx(r,{size:"lg",variant:"secondary",icon:"plus",href:"#",tooltip:"Large"})]})},b={args:{icon:"plus",href:"#",tooltip:""},render:()=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(r,{variant:"tertiary",icon:"webhook",href:"https://example.com",tooltip:"Webhooks"}),e.jsx(r,{variant:"tertiary",icon:"rss",href:"https://example.com/feed.xml",tooltip:"RSS feed"}),e.jsx(r,{variant:"tertiary",icon:"envelope",href:"mailto:hello@example.com",tooltip:"Email us"}),e.jsx(r,{variant:"tertiary",icon:"external-link",href:"https://example.com",tooltip:"Visit our site"})]})};var z,T,O;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    icon: 'external-link',
    href: 'https://example.com',
    tooltip: 'Open in new tab'
  }
}`,...(O=(T=n.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var E,w,D;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    icon: 'external-link',
    href: 'https://example.com',
    tooltip: 'Open in new tab'
  }
}`,...(D=(w=s.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var V,R,_;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...base,
    variant: 'primary',
    icon: 'external-link',
    tooltip: 'Open'
  }
}`,...(_=(R=i.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var P,q,M;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...base,
    variant: 'secondary',
    icon: 'edit',
    tooltip: 'Edit'
  }
}`,...(M=(q=l.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var C,N,W;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...base,
    variant: 'tertiary',
    icon: 'ellipsis-v',
    tooltip: 'More'
  }
}`,...(W=(N=c.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var F,$,G;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...base,
    variant: 'outline',
    icon: 'filter',
    tooltip: 'Filter'
  }
}`,...(G=($=p.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var H,J,K;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...base,
    variant: 'danger',
    icon: 'bin',
    tooltip: 'Delete'
  }
}`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Extra Small (xs)',
  args: {
    ...base,
    size: 'xs',
    icon: 'close',
    tooltip: 'Close'
  }
}`,...(X=(U=m.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...base,
    size: 'sm',
    icon: 'plus',
    tooltip: 'Add'
  }
}`,...(ee=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,oe,ae;g.parameters={...g.parameters,docs:{...(re=g.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    ...base,
    size: 'md',
    icon: 'plus',
    tooltip: 'Add'
  }
}`,...(ae=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var te,ne,se;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...base,
    size: 'lg',
    icon: 'plus',
    tooltip: 'Add'
  }
}`,...(se=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ie,le,ce;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    ...base,
    icon: 'plus',
    tooltip: 'Add',
    isDisabled: true
  }
}`,...(ce=(le=v.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var pe,de,me;y.parameters={...y.parameters,docs:{...(pe=y.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    ...base,
    icon: 'plus',
    tooltip: 'Add',
    isLoading: true
  }
}`,...(me=(de=y.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ue,ge,fe;x.parameters={...x.parameters,docs:{...(ue=x.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    icon: 'plus',
    href: '#',
    tooltip: ''
  },
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>\r
      <ArvoIconButtonLink variant="primary" icon="plus" href="#" tooltip="Primary" />\r
      <ArvoIconButtonLink variant="secondary" icon="edit" href="#" tooltip="Secondary" />\r
      <ArvoIconButtonLink variant="tertiary" icon="ellipsis-v" href="#" tooltip="Tertiary" />\r
      <ArvoIconButtonLink variant="outline" icon="filter" href="#" tooltip="Outline" />\r
      <ArvoIconButtonLink variant="danger" icon="bin" href="#" tooltip="Danger" />\r
    </div>
}`,...(fe=(ge=x.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var ve,ye,xe;h.parameters={...h.parameters,docs:{...(ve=h.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    icon: 'plus',
    href: '#',
    tooltip: ''
  },
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center'
  }}>\r
      <ArvoIconButtonLink size="xs" variant="secondary" icon="close" href="#" tooltip="Extra small" />\r
      <ArvoIconButtonLink size="sm" variant="secondary" icon="plus" href="#" tooltip="Small" />\r
      <ArvoIconButtonLink size="md" variant="secondary" icon="plus" href="#" tooltip="Medium" />\r
      <ArvoIconButtonLink size="lg" variant="secondary" icon="plus" href="#" tooltip="Large" />\r
    </div>
}`,...(xe=(ye=h.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var he,be,Se;b.parameters={...b.parameters,docs:{...(he=b.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    icon: 'plus',
    href: '#',
    tooltip: ''
  },
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center'
  }}>\r
      <ArvoIconButtonLink variant="tertiary" icon="webhook" href="https://example.com" tooltip="Webhooks" />\r
      <ArvoIconButtonLink variant="tertiary" icon="rss" href="https://example.com/feed.xml" tooltip="RSS feed" />\r
      <ArvoIconButtonLink variant="tertiary" icon="envelope" href="mailto:hello@example.com" tooltip="Email us" />\r
      <ArvoIconButtonLink variant="tertiary" icon="external-link" href="https://example.com" tooltip="Visit our site" />\r
    </div>
}`,...(Se=(be=b.parameters)==null?void 0:be.docs)==null?void 0:Se.source}}};const qe=["Default","Playground","Primary","Secondary","Tertiary","Outline","Danger","ExtraSmall","Small","Medium","Large","Disabled","Loading","AllVariants","AllSizes","SocialIconBar"],He=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:h,AllVariants:x,Danger:d,Default:n,Disabled:v,ExtraSmall:m,Large:f,Loading:y,Medium:g,Outline:p,Playground:s,Primary:i,Secondary:l,Small:u,SocialIconBar:b,Tertiary:c,__namedExportsOrder:qe,default:Pe},Symbol.toStringTag,{value:"Module"}));export{x as A,v as D,He as I,y as L,s as P,b as S,h as a};
