import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as be}from"./iframe-BaOp0t6F.js";import{A as s}from"./BannerAlert-DwOPtWj_.js";import{A as Ae}from"./Select-BLh_A-b9.js";const{action:Se}=__STORYBOOK_MODULE_ACTIONS__,ke={title:"Feedback/BannerAlert",component:s,tags:["!dev","new"],argTypes:{type:{control:{type:"select"},options:["positive","info","neutral","warning","negative","block"],table:{defaultValue:{summary:"info"}}},title:{control:{type:"text"}},message:{control:{type:"text"}},isCompact:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isDismissible:{control:{type:"boolean"},table:{defaultValue:{summary:"true"}}},isLoading:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},role:{control:{type:"radio"},options:["status","alert"],table:{defaultValue:{summary:"auto (type-derived)"}}}},args:{type:"info",title:"System update",message:"A new version is available.",isCompact:!1,isDismissible:!0,isLoading:!1},parameters:{docs:{description:{component:"Consolidated CSF for ArvoBannerAlert.\r\n\nAll stories are docs-only (`tags: ['!dev', ...]`): they render on the attached\r\n`BannerAlert.mdx` page (the single sidebar node for this component), not as\r\ntheir own sidebar leaves. `BannerAlert.mdx` references these stories with Doc\r\nBlocks."}}}},t={label:"Read more about this",href:"#"},a={args:{type:"info",title:"System update",message:"A new version is available."}},r={args:{type:"info",title:"System update",message:"A new version is available.",link:{label:"Learn more",href:"#"},onDismiss:Se("onDismiss")}},i={args:{message:""},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:560},children:[e.jsx(s,{type:"positive",title:"Success",message:"Operation completed successfully.",link:t}),e.jsx(s,{type:"info",title:"Information",message:"A new version is available for download.",link:t}),e.jsx(s,{type:"neutral",title:"Notice",message:"No changes were detected in this cycle.",link:t}),e.jsx(s,{type:"warning",title:"Warning",message:"You are approaching your storage quota.",link:t}),e.jsx(s,{type:"negative",title:"Error",message:"Failed to save your changes. Please try again.",link:t}),e.jsx(s,{type:"block",title:"Blocked",message:"This action is blocked by an admin policy.",link:t})]})},o={args:{message:""},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:560},children:[e.jsx(s,{type:"positive",message:"Operation completed successfully.",isCompact:!0}),e.jsx(s,{type:"info",message:"A new version is available for download.",isCompact:!0}),e.jsx(s,{type:"neutral",message:"No changes were detected in this cycle.",isCompact:!0}),e.jsx(s,{type:"warning",message:"You are approaching your storage quota.",isCompact:!0}),e.jsx(s,{type:"negative",message:"Failed to save your changes.",isCompact:!0}),e.jsx(s,{type:"block",message:"This action is blocked by an admin policy.",isCompact:!0})]})},n={args:{message:""},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:560},children:e.jsx(s,{type:"warning",title:"Storage low",message:"Less than 10% remaining.",button:{label:"Manage storage"}})})},l={args:{message:""},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:560},children:e.jsx(s,{type:"negative",title:"Sync failed",message:"Some changes could not be synchronized. Retry now or read the recovery guide for next steps.",button:{label:"Retry sync"},link:{label:"Recovery guide",href:"#recovery"}})})},c={args:{message:""},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:560},children:[e.jsx(s,{type:"info",title:"Update available",message:[{type:"strong",children:"Version 2.5"},{type:"text",value:" is now available. Read the "},{type:"link",label:"release notes",href:"https://example.com/release",target:"_blank"},{type:"text",value:" for details."}]}),e.jsx(s,{type:"neutral",title:"Keyboard hint",message:[{type:"text",value:"Press "},{type:"kbd",value:"Cmd"},{type:"text",value:" + "},{type:"kbd",value:"K"},{type:"text",value:" to open the command palette."}]})]})},d={args:{message:""},render:()=>e.jsx("div",{style:{maxWidth:320},children:e.jsx(s,{type:"info",title:"A very long banner title that exceeds the two-line clamp threshold and triggers the truncation-tooltip helper so the full text remains discoverable on hover",message:"Hover the title to see the full text in a tooltip."})})},m={args:{message:""},render:()=>e.jsx("div",{style:{maxWidth:560},children:e.jsx(s,{type:"warning",message:"Your session will expire in 5 minutes. Save your work to avoid losing changes.",link:t})})},p={args:{message:""},render:()=>e.jsx("div",{style:{maxWidth:560},children:e.jsx(s,{type:"positive",title:"Saved",message:"Your changes have been saved successfully."})})},g={args:{message:""},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:560},children:[e.jsx(s,{type:"info",title:"Dismissible",message:"This banner has a close button.",isDismissible:!0}),e.jsx(s,{type:"info",title:"Not dismissible",message:"This banner cannot be dismissed by the user.",isDismissible:!1})]})},u={args:{message:""},render:()=>e.jsx("div",{style:{maxWidth:560},children:e.jsx(s,{type:"info",title:"Checking status",message:"Verifying system connectivity...",isLoading:!0})})},we=[{id:"positive",label:"Positive",value:"positive"},{id:"info",label:"Info",value:"info"},{id:"neutral",label:"Neutral",value:"neutral"},{id:"warning",label:"Warning",value:"warning"},{id:"negative",label:"Negative",value:"negative"},{id:"block",label:"Block",value:"block"}];function je(){const[xe,fe]=be.useState("info");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:560},children:[e.jsx(Ae,{items:we,defaultValue:"info",label:"Select type",onChange:b=>{b&&fe(b.value)}}),e.jsx(s,{type:xe,title:"Dynamic type demo",message:"Border, background, title color, icon color, and icon glyph all update when you change the type.",link:t})]})}const y={args:{message:""},render:()=>e.jsx(je,{})},v={args:{message:""},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:560},children:[e.jsx(s,{type:"negative",title:"Auto role=alert",message:"Negative type auto-resolves to role=alert (assertive)."}),e.jsx(s,{type:"info",title:"Auto role=status",message:"Info type auto-resolves to role=status (polite)."}),e.jsx(s,{type:"info",title:"Explicit role=alert",message:"Info type with explicit role override to alert.",role:"alert"})]})},h={args:{message:""},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",maxWidth:560},children:e.jsx(s,{type:"info",message:"Scheduled maintenance tonight at 11:00 PM PST.",isCompact:!0,isDismissible:!0})})},x={args:{message:""},render:()=>e.jsx("div",{style:{maxWidth:560},children:e.jsx(s,{type:"negative",title:"Connection lost",message:"We can't reach the server. Check your network and try again.",button:{label:"Retry"},link:{label:"View status",href:"#"},isDismissible:!0})})},f={args:{message:""},render:()=>e.jsx("div",{style:{maxWidth:560},children:e.jsx(s,{type:"positive",title:"Saved",message:"Your changes have been saved successfully.",isDismissible:!0})})};var A,S,k;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    type: 'info',
    title: 'System update',
    message: 'A new version is available.'
  }
}`,...(k=(S=a.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var w,j,B;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    type: 'info',
    title: 'System update',
    message: 'A new version is available.',
    link: {
      label: 'Learn more',
      href: '#'
    },
    onDismiss: action('onDismiss')
  }
}`,...(B=(j=r.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var D,W,T;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    message: ''
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    maxWidth: 560
  }}>\r
      <ArvoBannerAlert type="positive" title="Success" message="Operation completed successfully." link={LINK} />\r
      <ArvoBannerAlert type="info" title="Information" message="A new version is available for download." link={LINK} />\r
      <ArvoBannerAlert type="neutral" title="Notice" message="No changes were detected in this cycle." link={LINK} />\r
      <ArvoBannerAlert type="warning" title="Warning" message="You are approaching your storage quota." link={LINK} />\r
      <ArvoBannerAlert type="negative" title="Error" message="Failed to save your changes. Please try again." link={LINK} />\r
      <ArvoBannerAlert type="block" title="Blocked" message="This action is blocked by an admin policy." link={LINK} />\r
    </div>
}`,...(T=(W=i.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var C,L,N;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    message: ''
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    maxWidth: 560
  }}>\r
      <ArvoBannerAlert type="positive" message="Operation completed successfully." isCompact />\r
      <ArvoBannerAlert type="info" message="A new version is available for download." isCompact />\r
      <ArvoBannerAlert type="neutral" message="No changes were detected in this cycle." isCompact />\r
      <ArvoBannerAlert type="warning" message="You are approaching your storage quota." isCompact />\r
      <ArvoBannerAlert type="negative" message="Failed to save your changes." isCompact />\r
      <ArvoBannerAlert type="block" message="This action is blocked by an admin policy." isCompact />\r
    </div>
}`,...(N=(L=o.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var R,I,O;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    message: ''
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    maxWidth: 560
  }}>\r
      <ArvoBannerAlert type="warning" title="Storage low" message="Less than 10% remaining." button={{
      label: 'Manage storage'
    }} />\r
    </div>
}`,...(O=(I=n.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var P,_,K;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    message: ''
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    maxWidth: 560
  }}>\r
      <ArvoBannerAlert type="negative" title="Sync failed" message="Some changes could not be synchronized. Retry now or read the recovery guide for next steps." button={{
      label: 'Retry sync'
    }} link={{
      label: 'Recovery guide',
      href: '#recovery'
    }} />\r
    </div>
}`,...(K=(_=l.parameters)==null?void 0:_.docs)==null?void 0:K.source}}};var E,V,Y;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    message: ''
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    maxWidth: 560
  }}>\r
      <ArvoBannerAlert type="info" title="Update available" message={[{
      type: 'strong',
      children: 'Version 2.5'
    }, {
      type: 'text',
      value: ' is now available. Read the '
    }, {
      type: 'link',
      label: 'release notes',
      href: 'https://example.com/release',
      target: '_blank'
    }, {
      type: 'text',
      value: ' for details.'
    }]} />\r
      <ArvoBannerAlert type="neutral" title="Keyboard hint" message={[{
      type: 'text',
      value: 'Press '
    }, {
      type: 'kbd',
      value: 'Cmd'
    }, {
      type: 'text',
      value: ' + '
    }, {
      type: 'kbd',
      value: 'K'
    }, {
      type: 'text',
      value: ' to open the command palette.'
    }]} />\r
    </div>
}`,...(Y=(V=c.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var M,F,q;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    message: ''
  },
  render: () => <div style={{
    maxWidth: 320
  }}>\r
      <ArvoBannerAlert type="info" title="A very long banner title that exceeds the two-line clamp threshold and triggers the truncation-tooltip helper so the full text remains discoverable on hover" message="Hover the title to see the full text in a tooltip." />\r
    </div>
}`,...(q=(F=d.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var z,U,H;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    message: ''
  },
  render: () => <div style={{
    maxWidth: 560
  }}>\r
      <ArvoBannerAlert type="warning" message="Your session will expire in 5 minutes. Save your work to avoid losing changes." link={LINK} />\r
    </div>
}`,...(H=(U=m.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var G,J,Q;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    message: ''
  },
  render: () => <div style={{
    maxWidth: 560
  }}>\r
      <ArvoBannerAlert type="positive" title="Saved" message="Your changes have been saved successfully." />\r
    </div>
}`,...(Q=(J=p.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,$;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    message: ''
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    maxWidth: 560
  }}>\r
      <ArvoBannerAlert type="info" title="Dismissible" message="This banner has a close button." isDismissible />\r
      <ArvoBannerAlert type="info" title="Not dismissible" message="This banner cannot be dismissed by the user." isDismissible={false} />\r
    </div>
}`,...($=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,se,te;u.parameters={...u.parameters,docs:{...(ee=u.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    message: ''
  },
  render: () => <div style={{
    maxWidth: 560
  }}>\r
      <ArvoBannerAlert type="info" title="Checking status" message="Verifying system connectivity..." isLoading />\r
    </div>
}`,...(te=(se=u.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var ae,re,ie;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    message: ''
  },
  render: () => <DynamicTypeSwitchRender />
}`,...(ie=(re=y.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var oe,ne,le;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    message: ''
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    maxWidth: 560
  }}>\r
      <ArvoBannerAlert type="negative" title="Auto role=alert" message="Negative type auto-resolves to role=alert (assertive)." />\r
      <ArvoBannerAlert type="info" title="Auto role=status" message="Info type auto-resolves to role=status (polite)." />\r
      <ArvoBannerAlert type="info" title="Explicit role=alert" message="Info type with explicit role override to alert." role="alert" />\r
    </div>
}`,...(le=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var ce,de,me;h.parameters={...h.parameters,docs:{...(ce=h.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    message: ''
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 560
  }}>\r
      <ArvoBannerAlert type="info" message="Scheduled maintenance tonight at 11:00 PM PST." isCompact isDismissible />\r
    </div>
}`,...(me=(de=h.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,ge,ue;x.parameters={...x.parameters,docs:{...(pe=x.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    message: ''
  },
  render: () => <div style={{
    maxWidth: 560
  }}>\r
      <ArvoBannerAlert type="negative" title="Connection lost" message="We can't reach the server. Check your network and try again." button={{
      label: 'Retry'
    }} link={{
      label: 'View status',
      href: '#'
    }} isDismissible />\r
    </div>
}`,...(ue=(ge=x.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var ye,ve,he;f.parameters={...f.parameters,docs:{...(ye=f.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    message: ''
  },
  render: () => <div style={{
    maxWidth: 560
  }}>\r
      <ArvoBannerAlert type="positive" title="Saved" message="Your changes have been saved successfully." isDismissible />\r
    </div>
}`,...(he=(ve=f.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};const Be=["Default","Playground","AllTypesDefault","AllTypesCompact","WithButton","WithButtonAndLink","RichTextMessage","TruncatedTitleTooltip","WithoutTitle","WithoutLink","Dismissible","Loading","DynamicTypeSwitch","RoleOverride","SystemStatusBanner","ErrorBannerWithAction","SuccessConfirmation"],Le=Object.freeze(Object.defineProperty({__proto__:null,AllTypesCompact:o,AllTypesDefault:i,Default:a,Dismissible:g,DynamicTypeSwitch:y,ErrorBannerWithAction:x,Loading:u,Playground:r,RichTextMessage:c,RoleOverride:v,SuccessConfirmation:f,SystemStatusBanner:h,TruncatedTitleTooltip:d,WithButton:n,WithButtonAndLink:l,WithoutLink:p,WithoutTitle:m,__namedExportsOrder:Be,default:ke},Symbol.toStringTag,{value:"Module"}));export{i as A,Le as B,g as D,x as E,u as L,r as P,c as R,h as S,l as W,o as a};
