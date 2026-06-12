import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as r}from"./Link-NIjDRzO0.js";const ge={title:"Navigation/Link",component:r,tags:["!dev","stable"],argTypes:{label:{control:{type:"text"}},href:{control:{type:"text"}},variant:{control:{type:"select"},options:["primary","secondary"],table:{defaultValue:{summary:"primary"}}},size:{control:{type:"select"},options:["sm","lg"],table:{defaultValue:{summary:"lg"}}},icon:{control:{type:"text"}},isExternal:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isDisabled:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isVisited:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isLoading:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},onClick:{action:"clicked",table:{category:"Events"}}},args:{label:"Link text",href:"#",variant:"primary",size:"lg",isExternal:!1,isDisabled:!1,isVisited:!1,isLoading:!1},parameters:{docs:{description:{component:"Consolidated CSF for ArvoLink. All stories are docs-only (`tags: ['!dev', ...]`)\r\nand render on the attached `Link.mdx` page (the single sidebar node for this\r\ncomponent) via Doc Blocks, not as their own sidebar leaves."}}}},a={args:{label:"Link",href:"#"}},s={args:{label:"Link",href:"#"}},l={args:{variant:"primary",label:"Primary link",href:"#"}},n={args:{variant:"secondary",label:"Secondary link",href:"#"}},t={args:{size:"sm",label:"Small link",href:"#"}},o={args:{size:"lg",label:"Large link",href:"#"}},i={name:"With Icon",args:{label:"Download report",href:"#",icon:"download"}},c={args:{label:"Open in new tab",href:"https://example.com",isExternal:!0}},d={args:{label:"Visited link",href:"#",isVisited:!0}},p={args:{label:"Disabled link",href:"#",isDisabled:!0}},m={args:{label:"Loading link",href:"#",isLoading:!0}},g={args:{label:"",href:"#"},render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center",flexWrap:"wrap"},children:[e.jsx(r,{variant:"primary",href:"#",label:"Primary"}),e.jsx(r,{variant:"secondary",href:"#",label:"Secondary"})]})},f={args:{label:"",href:"#"},render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(r,{size:"sm",href:"#",label:"Small"}),e.jsx(r,{size:"lg",href:"#",label:"Large"})]})},h={args:{label:"",href:"#"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(r,{href:"#",label:"Default"}),e.jsx(r,{href:"#",label:"With icon",icon:"download"}),e.jsx(r,{href:"https://example.com",label:"External",isExternal:!0}),e.jsx(r,{href:"#",label:"Visited",isVisited:!0}),e.jsx(r,{href:"#",label:"Disabled",isDisabled:!0}),e.jsx(r,{href:"#",label:"Loading",isLoading:!0})]})},u={args:{label:"",href:"#"},render:()=>e.jsxs("p",{style:{maxWidth:480},children:["Read the ",e.jsx(r,{href:"#",label:"getting started guide"})," or jump straight to the",e.jsx(r,{href:"#",label:"API reference",icon:"external-link",isExternal:!0})," for technical details."]})},b={args:{label:"",href:"#"},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,maxWidth:480},children:["Acme Corp","Globex Inc","Initech LLC"].map(x=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:8},children:[e.jsx("span",{style:{flexGrow:1},children:x}),e.jsx(r,{href:`#row-${x}`,label:"View details",icon:"arrow-right"})]},x))})};var y,L,k;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Link',
    href: '#'
  }
}`,...(k=(L=a.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var v,S,A;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Link',
    href: '#'
  }
}`,...(A=(S=s.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var j,D,V;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: 'Primary link',
    href: '#'
  }
}`,...(V=(D=l.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var w,I,E;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    label: 'Secondary link',
    href: '#'
  }
}`,...(E=(I=n.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var P,z,W;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Small link',
    href: '#'
  }
}`,...(W=(z=t.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var C,_,O;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Large link',
    href: '#'
  }
}`,...(O=(_=o.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var T,G,R;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'With Icon',
  args: {
    label: 'Download report',
    href: '#',
    icon: 'download'
  }
}`,...(R=(G=i.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var $,B,F;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Open in new tab',
    href: 'https://example.com',
    isExternal: true
  }
}`,...(F=(B=c.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var M,N,q;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Visited link',
    href: '#',
    isVisited: true
  }
}`,...(q=(N=d.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var H,J,K;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Disabled link',
    href: '#',
    isDisabled: true
  }
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: 'Loading link',
    href: '#',
    isLoading: true
  }
}`,...(X=(U=m.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    label: '',
    href: '#'
  },
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>\r
      <ArvoLink variant="primary" href="#" label="Primary" />\r
      <ArvoLink variant="secondary" href="#" label="Secondary" />\r
    </div>
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ae,se;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    label: '',
    href: '#'
  },
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>\r
      <ArvoLink size="sm" href="#" label="Small" />\r
      <ArvoLink size="lg" href="#" label="Large" />\r
    </div>
}`,...(se=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var le,ne,te;h.parameters={...h.parameters,docs:{...(le=h.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    label: '',
    href: '#'
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>\r
      <ArvoLink href="#" label="Default" />\r
      <ArvoLink href="#" label="With icon" icon="download" />\r
      <ArvoLink href="https://example.com" label="External" isExternal />\r
      <ArvoLink href="#" label="Visited" isVisited />\r
      <ArvoLink href="#" label="Disabled" isDisabled />\r
      <ArvoLink href="#" label="Loading" isLoading />\r
    </div>
}`,...(te=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var oe,ie,ce;u.parameters={...u.parameters,docs:{...(oe=u.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    label: '',
    href: '#'
  },
  render: () => <p style={{
    maxWidth: 480
  }}>\r
      Read the <ArvoLink href="#" label="getting started guide" /> or jump straight to the\r
      <ArvoLink href="#" label="API reference" icon="external-link" isExternal /> for technical details.\r
    </p>
}`,...(ce=(ie=u.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,pe,me;b.parameters={...b.parameters,docs:{...(de=b.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    label: '',
    href: '#'
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    maxWidth: 480
  }}>\r
      {['Acme Corp', 'Globex Inc', 'Initech LLC'].map(row => <div key={row} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: 8
    }}>\r
          <span style={{
        flexGrow: 1
      }}>{row}</span>\r
          <ArvoLink href={\`#row-\${row}\`} label="View details" icon="arrow-right" />\r
        </div>)}\r
    </div>
}`,...(me=(pe=b.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};const fe=["Default","Playground","Primary","Secondary","Small","Large","WithIcon","External","Visited","Disabled","Loading","AllVariants","AllSizes","AllStates","InProseLink","TableActionLink"],be=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:f,AllStates:h,AllVariants:g,Default:a,Disabled:p,External:c,InProseLink:u,Large:o,Loading:m,Playground:s,Primary:l,Secondary:n,Small:t,TableActionLink:b,Visited:d,WithIcon:i,__namedExportsOrder:fe,default:ge},Symbol.toStringTag,{value:"Module"}));export{g as A,c as E,u as I,be as L,s as P,b as T,i as W,f as a,h as b};
