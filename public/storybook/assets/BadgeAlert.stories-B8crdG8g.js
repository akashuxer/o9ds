import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as Le}from"./iframe-BaOp0t6F.js";import{A as Ue}from"./Textbox-BjaSSAvr.js";const a=Le.forwardRef(function({message:Ie,type:Oe="positive",variant:Ne="primary",size:ze="lg",hasIcon:Ve=!0,customIcon:S,className:De,role:qe="status"},_e){const Fe=["arvo-bdg-alert",`arvo-bdg-alert--${Ne}`,`arvo-bdg-alert--${Oe}`,`arvo-bdg-alert--${ze}`,De??""].filter(Boolean).join(" "),Ce=["arvo-bdg-alert__ico","o9con",S?`o9con-${S}`:""].filter(Boolean).join(" ");return e.jsxs("div",{ref:_e,role:qe,className:Fe,children:[Ve&&e.jsx("span",{className:Ce,"aria-hidden":"true"}),e.jsx("span",{className:"arvo-bdg-alert__msg",children:Ie})]})});a.__docgenInfo={description:"",methods:[],displayName:"ArvoBadgeAlert",props:{message:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:"'positive' | 'info' | 'neutral' | 'warning' | 'negative' | 'block'",elements:[{name:"literal",value:"'positive'"},{name:"literal",value:"'info'"},{name:"literal",value:"'neutral'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'negative'"},{name:"literal",value:"'block'"}]},description:"",defaultValue:{value:"'positive'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'outline'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'outline'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'lg'",computed:!1}},hasIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},customIcon:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},role:{required:!1,tsType:{name:"union",raw:"'status' | 'alert'",elements:[{name:"literal",value:"'status'"},{name:"literal",value:"'alert'"}]},description:"",defaultValue:{value:"'status'",computed:!1}}}};const We={title:"Feedback/BadgeAlert",component:a,tags:["!dev","stable"],argTypes:{message:{control:{type:"text"}},type:{control:{type:"select"},options:["positive","info","neutral","warning","negative","block"],table:{defaultValue:{summary:"positive"}}},variant:{control:{type:"radio"},options:["primary","outline"],table:{defaultValue:{summary:"primary"}}},size:{control:{type:"radio"},options:["sm","lg"],table:{defaultValue:{summary:"lg"}}},hasIcon:{control:{type:"boolean"},table:{defaultValue:{summary:"true"}}},customIcon:{control:{type:"text"}},role:{control:{type:"radio"},options:["status","alert"],table:{defaultValue:{summary:"status"}}}},args:{message:"Operation completed successfully.",type:"positive",variant:"primary",size:"lg",hasIcon:!0,role:"status"},parameters:{docs:{description:{component:"Consolidated CSF for ArvoBadgeAlert.\r\n\nAll stories are docs-only (`tags: ['!dev', ...]`): they render on the attached\r\n`BadgeAlert.mdx` page (the single sidebar node for this component), not as\r\ntheir own sidebar leaves. `BadgeAlert.mdx` references these stories with Doc\r\nBlocks."}}}},r={args:{message:"Operation completed successfully."}},s={args:{message:"Try every prop"}},t={args:{message:"Saved successfully",type:"positive"}},o={args:{message:"New version available",type:"info"}},n={args:{message:"No changes detected",type:"neutral"}},i={args:{message:"Approaching quota limit",type:"warning"}},l={args:{message:"Failed to save",type:"negative"}},c={args:{message:"Action blocked",type:"block"}},m={args:{message:"Primary variant",type:"positive",variant:"primary"}},p={args:{message:"Outline variant",type:"positive",variant:"outline"}},g={args:{message:"Small badge",type:"info",size:"sm"}},d={args:{message:"Large badge",type:"info",size:"lg"}},u={args:{message:"Just text",type:"info",hasIcon:!1}},v={args:{message:"Time-sensitive notice",type:"warning",customIcon:"clock-o"}},y={name:'Urgent (role="alert")',args:{message:"Server unreachable",type:"negative",role:"alert"}},f={args:{message:""},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(a,{type:"positive",message:"Operation completed"}),e.jsx(a,{type:"info",message:"New version available"}),e.jsx(a,{type:"neutral",message:"No changes detected"}),e.jsx(a,{type:"warning",message:"Approaching quota limit"}),e.jsx(a,{type:"negative",message:"Failed to save"}),e.jsx(a,{type:"block",message:"Action blocked"})]})},x={args:{message:""},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:8},children:[e.jsx(a,{variant:"primary",type:"positive",message:"Primary"}),e.jsx(a,{variant:"outline",type:"positive",message:"Outline"}),e.jsx(a,{variant:"primary",type:"negative",message:"Primary error"}),e.jsx(a,{variant:"outline",type:"negative",message:"Outline error"})]})},A={args:{message:""},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(a,{size:"sm",type:"info",message:"Small badge"}),e.jsx(a,{size:"lg",type:"info",message:"Large badge (default)"})]})},b={args:{message:""},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,padding:16},children:[e.jsx(a,{type:"warning",message:"Your trial ends in 3 days. Upgrade now to keep your data.",role:"alert"}),e.jsx("h1",{children:"Dashboard"}),e.jsx("p",{children:"Page content goes here."})]})},h={args:{message:""},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,maxWidth:360},children:[e.jsx(Ue,{label:"API token",placeholder:"Paste a token",isInvalid:!0,value:"abc123"}),e.jsx(a,{size:"sm",type:"negative",message:"Token must be at least 32 characters."})]})};var j,B,k;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    message: 'Operation completed successfully.'
  }
}`,...(k=(B=r.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var w,P,T;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    message: 'Try every prop'
  }
}`,...(T=(P=s.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var I,O,N;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    message: 'Saved successfully',
    type: 'positive'
  }
}`,...(N=(O=t.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var z,V,D;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    message: 'New version available',
    type: 'info'
  }
}`,...(D=(V=o.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var q,_,F;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    message: 'No changes detected',
    type: 'neutral'
  }
}`,...(F=(_=n.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var C,L,U;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    message: 'Approaching quota limit',
    type: 'warning'
  }
}`,...(U=(L=i.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var W,R,$;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    message: 'Failed to save',
    type: 'negative'
  }
}`,...($=(R=l.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var E,H,J;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    message: 'Action blocked',
    type: 'block'
  }
}`,...(J=(H=c.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var Y,M,G;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    message: 'Primary variant',
    type: 'positive',
    variant: 'primary'
  }
}`,...(G=(M=m.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var K,Q,X;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    message: 'Outline variant',
    type: 'positive',
    variant: 'outline'
  }
}`,...(X=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,ae;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    message: 'Small badge',
    type: 'info',
    size: 'sm'
  }
}`,...(ae=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,se,te;d.parameters={...d.parameters,docs:{...(re=d.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    message: 'Large badge',
    type: 'info',
    size: 'lg'
  }
}`,...(te=(se=d.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var oe,ne,ie;u.parameters={...u.parameters,docs:{...(oe=u.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    message: 'Just text',
    type: 'info',
    hasIcon: false
  }
}`,...(ie=(ne=u.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var le,ce,me;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    message: 'Time-sensitive notice',
    type: 'warning',
    customIcon: 'clock-o'
  }
}`,...(me=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var pe,ge,de;y.parameters={...y.parameters,docs:{...(pe=y.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'Urgent (role="alert")',
  args: {
    message: 'Server unreachable',
    type: 'negative',
    role: 'alert'
  }
}`,...(de=(ge=y.parameters)==null?void 0:ge.docs)==null?void 0:de.source}}};var ue,ve,ye;f.parameters={...f.parameters,docs:{...(ue=f.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    message: ''
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>\r
      <ArvoBadgeAlert type="positive" message="Operation completed" />\r
      <ArvoBadgeAlert type="info" message="New version available" />\r
      <ArvoBadgeAlert type="neutral" message="No changes detected" />\r
      <ArvoBadgeAlert type="warning" message="Approaching quota limit" />\r
      <ArvoBadgeAlert type="negative" message="Failed to save" />\r
      <ArvoBadgeAlert type="block" message="Action blocked" />\r
    </div>
}`,...(ye=(ve=f.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var fe,xe,Ae;x.parameters={...x.parameters,docs:{...(fe=x.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    message: ''
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: 8
  }}>\r
      <ArvoBadgeAlert variant="primary" type="positive" message="Primary" />\r
      <ArvoBadgeAlert variant="outline" type="positive" message="Outline" />\r
      <ArvoBadgeAlert variant="primary" type="negative" message="Primary error" />\r
      <ArvoBadgeAlert variant="outline" type="negative" message="Outline error" />\r
    </div>
}`,...(Ae=(xe=x.parameters)==null?void 0:xe.docs)==null?void 0:Ae.source}}};var be,he,Se;A.parameters={...A.parameters,docs:{...(be=A.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    message: ''
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>\r
      <ArvoBadgeAlert size="sm" type="info" message="Small badge" />\r
      <ArvoBadgeAlert size="lg" type="info" message="Large badge (default)" />\r
    </div>
}`,...(Se=(he=A.parameters)==null?void 0:he.docs)==null?void 0:Se.source}}};var je,Be,ke;b.parameters={...b.parameters,docs:{...(je=b.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    message: ''
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    padding: 16
  }}>\r
      <ArvoBadgeAlert type="warning" message="Your trial ends in 3 days. Upgrade now to keep your data." role="alert" />\r
      <h1>Dashboard</h1>\r
      <p>Page content goes here.</p>\r
    </div>
}`,...(ke=(Be=b.parameters)==null?void 0:Be.docs)==null?void 0:ke.source}}};var we,Pe,Te;h.parameters={...h.parameters,docs:{...(we=h.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    message: ''
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    maxWidth: 360
  }}>\r
      <ArvoTextbox label="API token" placeholder="Paste a token" isInvalid value="abc123" />\r
      <ArvoBadgeAlert size="sm" type="negative" message="Token must be at least 32 characters." />\r
    </div>
}`,...(Te=(Pe=h.parameters)==null?void 0:Pe.docs)==null?void 0:Te.source}}};const Re=["Default","Playground","Positive","Info","Neutral","Warning","Negative","Block","PrimaryVariant","OutlineVariant","Small","Large","WithoutIcon","CustomIcon","UrgentRole","AllTypes","PrimaryVsOutline","Sizes","PageBanner","FormFieldHelp"],Ye=Object.freeze(Object.defineProperty({__proto__:null,AllTypes:f,Block:c,CustomIcon:v,Default:r,FormFieldHelp:h,Info:o,Large:d,Negative:l,Neutral:n,OutlineVariant:p,PageBanner:b,Playground:s,Positive:t,PrimaryVariant:m,PrimaryVsOutline:x,Sizes:A,Small:g,UrgentRole:y,Warning:i,WithoutIcon:u,__namedExportsOrder:Re,default:We},Symbol.toStringTag,{value:"Module"}));export{f as A,Ye as B,h as F,s as P,A as S,x as a,b};
