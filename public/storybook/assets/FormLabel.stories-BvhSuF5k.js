import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as b,A as r}from"./FormLabel-Dn-HbpfA.js";import{A as oe}from"./Textbox-BjaSSAvr.js";const ne={title:"Inputs/FormLabel",component:b,tags:["!dev","stable"],argTypes:{children:{control:{type:"text"}},htmlFor:{control:{type:"text"}},size:{control:{type:"radio"},options:["sm","lg"],table:{defaultValue:{summary:"sm"}}},isRequired:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isDisabled:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isInvalid:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},requiredIndicator:{control:!1}},args:{children:"Email address",size:"sm",isRequired:!1,isDisabled:!1,isInvalid:!1},parameters:{docs:{description:{component:"Consolidated CSF for ArvoFormLabel. All stories are docs-only (`tags: ['!dev', ...]`):\r\nthey render on the attached `FormLabel.mdx` page (the single sidebar node for this\r\ncomponent), not as their own sidebar leaves. `FormLabel.mdx` references these stories\r\nwith Doc Blocks."}}}},a={args:{children:"Try every prop",htmlFor:"demo-input"}},s={args:{children:"Email address"}},i={args:{children:"Large label",size:"lg"}},o={args:{children:"Small label",size:"sm"}},n={args:{children:"Required field",isRequired:!0}},t={args:{children:"Disabled label",isDisabled:!0}},l={args:{children:"Invalid label",isInvalid:!0}},d={name:"Required (custom indicator)",args:{children:"Custom indicator",isRequired:!0,requiredIndicator:e.jsx("span",{"aria-hidden":"true",children:" (required)"})}},c={args:{children:""},name:"FormLabelText (span)",render:()=>e.jsx(r,{children:"Inner caption"})},m={args:{children:""},name:"FormLabelText required",render:()=>e.jsx(r,{isRequired:!0,children:"Required caption"})},u={args:{children:""},name:"FormLabelText invalid",render:()=>e.jsx(r,{isInvalid:!0,children:"Invalid caption"})},p={args:{children:""},name:"Composed with Textbox (htmlFor)",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[e.jsx(b,{htmlFor:"email-input",size:"sm",isRequired:!0,children:"Email address"}),e.jsx(oe,{id:"email-input",placeholder:"you@example.com",isRequired:!0})]})},x={args:{children:""},name:"FormLabelText standalone (rare)",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[e.jsx(r,{size:"sm",isRequired:!0,children:"Inner caption with required indicator"}),e.jsx(r,{size:"lg",isInvalid:!0,children:"Inner caption in invalid state"}),e.jsx(r,{size:"lg",isDisabled:!0,children:"Inner caption disabled"})]})},g={args:{children:""},name:"Invalid state propagation",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[e.jsx(b,{htmlFor:"invalid-input",size:"sm",isRequired:!0,isInvalid:!0,children:"Invalid field"}),e.jsx(oe,{id:"invalid-input",isInvalid:!0,errorMsg:"This field is required"})]})};var h,v,T;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Try every prop',
    htmlFor: 'demo-input'
  }
}`,...(T=(v=a.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var f,F,I;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Email address'
  }
}`,...(I=(F=s.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var q,L,y;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: 'Large label',
    size: 'lg'
  }
}`,...(y=(L=i.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var R,S,A;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: 'Small label',
    size: 'sm'
  }
}`,...(A=(S=o.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var D,j,z;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: 'Required field',
    isRequired: true
  }
}`,...(z=(j=n.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var C,V,E;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: 'Disabled label',
    isDisabled: true
  }
}`,...(E=(V=t.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var w,P,_;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'Invalid label',
    isInvalid: true
  }
}`,...(_=(P=l.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var M,O,W;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Required (custom indicator)',
  args: {
    children: 'Custom indicator',
    isRequired: true,
    requiredIndicator: <span aria-hidden="true"> (required)</span>
  }
}`,...(W=(O=d.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var k,B,G;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: ''
  },
  name: 'FormLabelText (span)',
  render: () => <ArvoFormLabelText>Inner caption</ArvoFormLabelText>
}`,...(G=(B=c.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var H,J,K;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: ''
  },
  name: 'FormLabelText required',
  render: () => <ArvoFormLabelText isRequired>Required caption</ArvoFormLabelText>
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,Q,U;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: ''
  },
  name: 'FormLabelText invalid',
  render: () => <ArvoFormLabelText isInvalid>Invalid caption</ArvoFormLabelText>
}`,...(U=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    children: ''
  },
  name: 'Composed with Textbox (htmlFor)',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  }}>\r
      <ArvoFormLabel htmlFor="email-input" size="sm" isRequired>\r
        Email address\r
      </ArvoFormLabel>\r
      <ArvoTextbox id="email-input" placeholder="you@example.com" isRequired />\r
    </div>
}`,...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    children: ''
  },
  name: 'FormLabelText standalone (rare)',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  }}>\r
      <ArvoFormLabelText size="sm" isRequired>\r
        Inner caption with required indicator\r
      </ArvoFormLabelText>\r
      <ArvoFormLabelText size="lg" isInvalid>\r
        Inner caption in invalid state\r
      </ArvoFormLabelText>\r
      <ArvoFormLabelText size="lg" isDisabled>\r
        Inner caption disabled\r
      </ArvoFormLabelText>\r
    </div>
}`,...(re=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,se,ie;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    children: ''
  },
  name: 'Invalid state propagation',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  }}>\r
      <ArvoFormLabel htmlFor="invalid-input" size="sm" isRequired isInvalid>\r
        Invalid field\r
      </ArvoFormLabel>\r
      <ArvoTextbox id="invalid-input" isInvalid errorMsg="This field is required" />\r
    </div>
}`,...(ie=(se=g.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};const te=["Playground","Default","Large","Small","Required","Disabled","Invalid","RequiredCustomIndicator","TextVariantDefault","TextVariantRequired","TextVariantInvalid","StandaloneWithTextbox","TextCaptionStandalone","InvalidStatePropagation"],me=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Disabled:t,Invalid:l,InvalidStatePropagation:g,Large:i,Playground:a,Required:n,RequiredCustomIndicator:d,Small:o,StandaloneWithTextbox:p,TextCaptionStandalone:x,TextVariantDefault:c,TextVariantInvalid:u,TextVariantRequired:m,__namedExportsOrder:te,default:ne},Symbol.toStringTag,{value:"Module"}));export{t as D,me as F,l as I,i as L,a as P,n as R,o as S,x as T,d as a,p as b,g as c};
