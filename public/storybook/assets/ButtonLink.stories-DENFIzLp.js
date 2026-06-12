import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as A}from"./iframe-BaOp0t6F.js";import{r as Re}from"./loading-flag-DkqmYwgU.js";const r=A.forwardRef(function({variant:ke="primary",size:Be="md",label:Ae,href:we,icon:j,isDisabled:a=!1,isFullWidth:Ve=!1,isLoading:Ee=!1,target:k,rel:B,className:ze,onClick:S,...De},x){const Te=A.useRef(null),We=Re(),Fe=k==="_blank"?B??"noopener noreferrer":B,_e=["arvo-btn",`arvo-btn--${ke}`,`arvo-btn--${Be}`,Ve?"arvo-btn--full-width":"",a?"is-disabled":"","",ze??""].filter(Boolean).join(" "),Ie=a||We,Pe=s=>{if(Ie){s.preventDefault(),s.stopPropagation();return}S==null||S(s)},Oe=s=>{Te.current=s,typeof x=="function"?x(s):x&&(x.current=s)};return e.jsxs("a",{ref:Oe,href:a?void 0:we,target:a?void 0:k,rel:a?void 0:Fe,className:_e,"aria-disabled":a?!0:void 0,"aria-busy":void 0,tabIndex:a?0:void 0,onClick:Pe,...De,children:[j&&e.jsx("span",{className:`arvo-btn__ico o9con o9con-${j}`,"aria-hidden":"true"}),e.jsx("span",{className:"arvo-btn__lbl",children:Ae})]})});r.__docgenInfo={description:"",methods:[],displayName:"ArvoButtonLink",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary' | 'outline' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},href:{required:!0,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"string"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isFullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const qe={title:"Navigation/ButtonLink",component:r,tags:["!dev","stable"],argTypes:{label:{control:{type:"text"}},href:{control:{type:"text"}},variant:{control:{type:"select"},options:["primary","secondary","tertiary","outline","danger"],table:{defaultValue:{summary:"primary"}}},size:{control:{type:"select"},options:["sm","md","lg"],table:{defaultValue:{summary:"md"}}},icon:{control:{type:"text"}},isDisabled:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isFullWidth:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isLoading:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},onClick:{action:"clicked",table:{category:"Events"}}},args:{label:"View report",href:"#",variant:"primary",size:"md",isDisabled:!1,isFullWidth:!1,isLoading:!1},parameters:{docs:{description:{component:"Consolidated CSF for ArvoButtonLink. All stories are docs-only\r\n(`tags: ['!dev', ...]`) and render on the attached `ButtonLink.mdx` page (the\r\nsingle sidebar node for this component) via Doc Blocks."}}}},n={args:{label:"View report",href:"#"}},t={args:{label:"View report",href:"#"}},l={args:{variant:"primary",label:"Primary",href:"#"}},o={args:{variant:"secondary",label:"Secondary",href:"#"}},i={args:{variant:"tertiary",label:"Tertiary",href:"#"}},d={args:{variant:"outline",label:"Outline",href:"#"}},c={args:{variant:"danger",label:"Danger",href:"#"}},m={args:{size:"sm",label:"Small",href:"#"}},u={args:{size:"md",label:"Medium",href:"#"}},p={args:{size:"lg",label:"Large",href:"#"}},g={args:{label:"Disabled",href:"#",isDisabled:!0}},f={args:{label:"Loading",href:"#",isLoading:!0}},y={name:"With Icon",args:{label:"View report",href:"#",icon:"arrow-right"}},b={name:"Full Width",args:{label:"Full width",href:"#",isFullWidth:!0}},v={args:{label:"",href:"#"},render:()=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[e.jsx(r,{variant:"primary",label:"Primary",href:"#"}),e.jsx(r,{variant:"secondary",label:"Secondary",href:"#"}),e.jsx(r,{variant:"tertiary",label:"Tertiary",href:"#"}),e.jsx(r,{variant:"outline",label:"Outline",href:"#"}),e.jsx(r,{variant:"danger",label:"Danger",href:"#"})]})},h={args:{label:"",href:"#"},render:()=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(r,{size:"sm",variant:"secondary",label:"Small",href:"#"}),e.jsx(r,{size:"md",variant:"secondary",label:"Medium",href:"#"}),e.jsx(r,{size:"lg",variant:"secondary",label:"Large",href:"#"})]})},L={args:{label:"",href:"#"},render:()=>e.jsxs("nav",{style:{display:"flex",gap:8,alignItems:"center",padding:8},children:[e.jsx(r,{variant:"tertiary",label:"Dashboard",href:"/dashboard"}),e.jsx(r,{variant:"tertiary",label:"Reports",href:"/reports"}),e.jsx(r,{variant:"tertiary",label:"Settings",href:"/settings"}),e.jsx("span",{style:{flexGrow:1}}),e.jsx(r,{variant:"primary",label:"Sign in",href:"/sign-in"})]})};var w,V,z;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'View report',
    href: '#'
  }
}`,...(z=(V=n.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var D,T,W;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'View report',
    href: '#'
  }
}`,...(W=(T=t.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var F,_,I;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: 'Primary',
    href: '#'
  }
}`,...(I=(_=l.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var P,O,R;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    label: 'Secondary',
    href: '#'
  }
}`,...(R=(O=o.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var q,N,M;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    label: 'Tertiary',
    href: '#'
  }
}`,...(M=(N=i.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var E,$,G;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    label: 'Outline',
    href: '#'
  }
}`,...(G=($=d.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var C,H,J;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    label: 'Danger',
    href: '#'
  }
}`,...(J=(H=c.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Small',
    href: '#'
  }
}`,...(U=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    size: 'md',
    label: 'Medium',
    href: '#'
  }
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,ae;p.parameters={...p.parameters,docs:{...(ee=p.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Large',
    href: '#'
  }
}`,...(ae=(re=p.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,ne,te;g.parameters={...g.parameters,docs:{...(se=g.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    href: '#',
    isDisabled: true
  }
}`,...(te=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var le,oe,ie;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    label: 'Loading',
    href: '#',
    isLoading: true
  }
}`,...(ie=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var de,ce,me;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'With Icon',
  args: {
    label: 'View report',
    href: '#',
    icon: 'arrow-right'
  }
}`,...(me=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var ue,pe,ge;b.parameters={...b.parameters,docs:{...(ue=b.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'Full Width',
  args: {
    label: 'Full width',
    href: '#',
    isFullWidth: true
  }
}`,...(ge=(pe=b.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var fe,ye,be;v.parameters={...v.parameters,docs:{...(fe=v.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    label: '',
    href: '#'
  },
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>\r
      <ArvoButtonLink variant="primary" label="Primary" href="#" />\r
      <ArvoButtonLink variant="secondary" label="Secondary" href="#" />\r
      <ArvoButtonLink variant="tertiary" label="Tertiary" href="#" />\r
      <ArvoButtonLink variant="outline" label="Outline" href="#" />\r
      <ArvoButtonLink variant="danger" label="Danger" href="#" />\r
    </div>
}`,...(be=(ye=v.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var ve,he,Le;h.parameters={...h.parameters,docs:{...(ve=h.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    label: '',
    href: '#'
  },
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center'
  }}>\r
      <ArvoButtonLink size="sm" variant="secondary" label="Small" href="#" />\r
      <ArvoButtonLink size="md" variant="secondary" label="Medium" href="#" />\r
      <ArvoButtonLink size="lg" variant="secondary" label="Large" href="#" />\r
    </div>
}`,...(Le=(he=h.parameters)==null?void 0:he.docs)==null?void 0:Le.source}}};var xe,Se,je;L.parameters={...L.parameters,docs:{...(xe=L.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    label: '',
    href: '#'
  },
  render: () => <nav style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center',
    padding: 8
  }}>\r
      <ArvoButtonLink variant="tertiary" label="Dashboard" href="/dashboard" />\r
      <ArvoButtonLink variant="tertiary" label="Reports" href="/reports" />\r
      <ArvoButtonLink variant="tertiary" label="Settings" href="/settings" />\r
      <span style={{
      flexGrow: 1
    }} />\r
      <ArvoButtonLink variant="primary" label="Sign in" href="/sign-in" />\r
    </nav>
}`,...(je=(Se=L.parameters)==null?void 0:Se.docs)==null?void 0:je.source}}};const Ne=["Default","Playground","Primary","Secondary","Tertiary","Outline","Danger","Small","Medium","Large","Disabled","Loading","WithIcon","FullWidth","AllVariants","AllSizes","NavBarLinks"],Je=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:h,AllVariants:v,Danger:c,Default:n,Disabled:g,FullWidth:b,Large:p,Loading:f,Medium:u,NavBarLinks:L,Outline:d,Playground:t,Primary:l,Secondary:o,Small:m,Tertiary:i,WithIcon:y,__namedExportsOrder:Ne,default:qe},Symbol.toStringTag,{value:"Module"}));export{v as A,Je as B,g as D,b as F,f as L,L as N,t as P,y as W,h as a};
