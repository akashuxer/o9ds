import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as is}from"./iframe-BaOp0t6F.js";import{A as s}from"./MessageAlert-DBQwY950.js";import{A as ts}from"./Textbox-BjaSSAvr.js";import{A as os}from"./Checkbox-k9WMnmR3.js";import{A as ls}from"./Button-B8O_kk1m.js";const{within:cs,userEvent:ms}=__STORYBOOK_MODULE_TEST__,ds={title:"Feedback/MessageAlert",component:s,tags:["!dev","stable"],argTypes:{type:{control:{type:"select"},options:["error","success","warning","info","neutral","block"],description:"Semantic type driving icon glyph + color",table:{defaultValue:{summary:"error"}}},isInline:{control:{type:"boolean"},description:"When true, renders icon-only (16x16 in-field mode)",table:{defaultValue:{summary:"false"}}},message:{control:{type:"text"},description:"Alert message text"},icon:{control:{type:"text"},description:"Optional o9con icon name override (without o9con- prefix)"},isDismissable:{control:{type:"boolean"},description:"Show close button (full mode only)",table:{defaultValue:{summary:"false"}}},id:{control:{type:"text"},description:"DOM id for aria-describedby wiring"},role:{control:{type:"select"},options:["alert","status"],description:"ARIA role override (auto-resolved from type when omitted)"},className:{control:{type:"text"},description:"Additional CSS classes"},onDismiss:{action:"dismiss",description:"Callback fired when close button is clicked",table:{category:"Events"}}},args:{type:"negative",message:"Form field value is invalid",isInline:!1,isDismissable:!1},parameters:{docs:{description:{component:"Consolidated CSF for ArvoMessageAlert.\r\n\nAll stories are docs-only (`tags: ['!dev', ...]`): they render on the attached\r\n`MessageAlert.mdx` page (the single sidebar node for this component), not as\r\ntheir own sidebar leaves. `MessageAlert.mdx` references these stories with Doc\r\nBlocks."}}}},r={args:{type:"negative",message:"Form field value is invalid"}},a={args:{type:"negative",message:"Try every prop"}},n={args:{type:"negative",message:"This field is required"}},t={args:{type:"positive",message:"Changes saved successfully"}},i={args:{type:"warning",message:"This action cannot be undone"}},o={args:{type:"info",message:"24 matching results"}},l={args:{type:"neutral",message:"No changes detected"}},c={args:{type:"block",message:"System is locked for maintenance"}},m={name:"Error (Inline)",args:{type:"negative",isInline:!0,message:"Field error"}},d={name:"Success (Inline)",args:{type:"positive",isInline:!0,message:"Valid"}},p={name:"Warning (Inline)",args:{type:"warning",isInline:!0,message:"Check value"}},g={name:"Info (Inline)",args:{type:"info",isInline:!0,message:"Informational"}},u={name:"Neutral (Inline)",args:{type:"neutral",isInline:!0,message:"Notice"}},y={name:"Block (Inline)",args:{type:"block",isInline:!0,message:"Blocked"}},v={args:{type:"negative",message:"Email is required",id:"email-error"}},f={args:{type:"negative",message:"Please fix this",role:"status"}},I={args:{type:"neutral",message:"New notification available",icon:"bell-o"}},b={args:{type:"info",message:"This alert can be dismissed",isDismissable:!0,onDismiss:()=>{}}},h={args:{type:"warning",message:"Click close to dismiss",isDismissable:!0,onDismiss:()=>{}},play:async({canvasElement:T})=>{const j=cs(T).getByRole("button",{name:"Close"});await ms.click(j)}},x={args:{type:"negative",message:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Required field."})," ","Please fill in your email."]})}},S={name:"Inline Aria-Label Fallback",args:{type:"negative",isInline:!0}},A={args:{message:""},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,width:300},children:[e.jsx(ts,{label:"Email",isRequired:!0,isInvalid:!0,"aria-describedby":"email-error-msg"}),e.jsx(s,{type:"negative",id:"email-error-msg",message:"Email address is required"})]})},D={name:"In-Field Tooltip Error",args:{message:""},render:()=>e.jsx("div",{style:{display:"flex",gap:8,alignItems:"center",width:300},children:e.jsx(ts,{label:"Username",isInvalid:!0,errorDisplay:"tooltip",errorMsg:"Username is taken"})})},w={name:"Panel Shell Info Slot",args:{message:""},render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:8,padding:8},children:e.jsx(s,{type:"info",role:"status",message:"24 matching results"})})},k={name:"Dismissable Notification Row",args:{message:""},render:function(){const[M,j]=is.useState(!0);return M?e.jsx(s,{type:"positive",message:"Operation completed successfully",isDismissable:!0,onDismiss:()=>j(!1)}):e.jsx("div",{style:{display:"flex",alignItems:"center",gap:8},children:e.jsx(ls,{variant:"secondary",size:"sm",label:"Show again",onClick:()=>j(!0)})})}},E={name:"Selection Control Error",args:{message:""},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx(os,{label:"I agree to the terms",isInvalid:!0}),e.jsx(s,{type:"negative",message:"You must accept the terms to continue"})]})},N={name:"Notification List Item",args:{message:""},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,width:360},children:[e.jsx(s,{type:"negative",message:"3 validation errors found"}),e.jsx(s,{type:"warning",message:"Export may take several minutes"}),e.jsx(s,{type:"info",message:"New version available"})]})};var B,C,R;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    type: 'negative',
    message: 'Form field value is invalid'
  }
}`,...(R=(C=r.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var F,W,O;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    type: 'negative',
    message: 'Try every prop'
  }
}`,...(O=(W=a.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var P,V,_;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    type: 'negative',
    message: 'This field is required'
  }
}`,...(_=(V=n.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var q,L,U;t.parameters={...t.parameters,docs:{...(q=t.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    type: 'positive',
    message: 'Changes saved successfully'
  }
}`,...(U=(L=t.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var z,Y,K;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    message: 'This action cannot be undone'
  }
}`,...(K=(Y=i.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};var G,H,J;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    type: 'info',
    message: '24 matching results'
  }
}`,...(J=(H=o.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var Q,X,Z;l.parameters={...l.parameters,docs:{...(Q=l.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    type: 'neutral',
    message: 'No changes detected'
  }
}`,...(Z=(X=l.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,se;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    type: 'block',
    message: 'System is locked for maintenance'
  }
}`,...(se=(ee=c.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var re,ae,ne;m.parameters={...m.parameters,docs:{...(re=m.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Error (Inline)',
  args: {
    type: 'negative',
    isInline: true,
    message: 'Field error'
  }
}`,...(ne=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,ie,oe;d.parameters={...d.parameters,docs:{...(te=d.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Success (Inline)',
  args: {
    type: 'positive',
    isInline: true,
    message: 'Valid'
  }
}`,...(oe=(ie=d.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var le,ce,me;p.parameters={...p.parameters,docs:{...(le=p.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Warning (Inline)',
  args: {
    type: 'warning',
    isInline: true,
    message: 'Check value'
  }
}`,...(me=(ce=p.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var de,pe,ge;g.parameters={...g.parameters,docs:{...(de=g.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'Info (Inline)',
  args: {
    type: 'info',
    isInline: true,
    message: 'Informational'
  }
}`,...(ge=(pe=g.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var ue,ye,ve;u.parameters={...u.parameters,docs:{...(ue=u.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'Neutral (Inline)',
  args: {
    type: 'neutral',
    isInline: true,
    message: 'Notice'
  }
}`,...(ve=(ye=u.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var fe,Ie,be;y.parameters={...y.parameters,docs:{...(fe=y.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: 'Block (Inline)',
  args: {
    type: 'block',
    isInline: true,
    message: 'Blocked'
  }
}`,...(be=(Ie=y.parameters)==null?void 0:Ie.docs)==null?void 0:be.source}}};var he,xe,Se;v.parameters={...v.parameters,docs:{...(he=v.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    type: 'negative',
    message: 'Email is required',
    id: 'email-error'
  }
}`,...(Se=(xe=v.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};var Ae,De,we;f.parameters={...f.parameters,docs:{...(Ae=f.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    type: 'negative',
    message: 'Please fix this',
    role: 'status'
  }
}`,...(we=(De=f.parameters)==null?void 0:De.docs)==null?void 0:we.source}}};var ke,Ee,Ne;I.parameters={...I.parameters,docs:{...(ke=I.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    type: 'neutral',
    message: 'New notification available',
    icon: 'bell-o'
  }
}`,...(Ne=(Ee=I.parameters)==null?void 0:Ee.docs)==null?void 0:Ne.source}}};var je,Te,Me;b.parameters={...b.parameters,docs:{...(je=b.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    type: 'info',
    message: 'This alert can be dismissed',
    isDismissable: true,
    onDismiss: () => {}
  }
}`,...(Me=(Te=b.parameters)==null?void 0:Te.docs)==null?void 0:Me.source}}};var Be,Ce,Re;h.parameters={...h.parameters,docs:{...(Be=h.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    message: 'Click close to dismiss',
    isDismissable: true,
    onDismiss: () => {}
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const closeButton = canvas.getByRole('button', {
      name: 'Close'
    });
    await userEvent.click(closeButton);
  }
}`,...(Re=(Ce=h.parameters)==null?void 0:Ce.docs)==null?void 0:Re.source}}};var Fe,We,Oe;x.parameters={...x.parameters,docs:{...(Fe=x.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    type: 'negative',
    message: <>\r
        <strong>Required field.</strong>{' '}Please fill in your email.\r
      </>
  }
}`,...(Oe=(We=x.parameters)==null?void 0:We.docs)==null?void 0:Oe.source}}};var Pe,Ve,_e;S.parameters={...S.parameters,docs:{...(Pe=S.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  name: 'Inline Aria-Label Fallback',
  args: {
    type: 'negative',
    isInline: true
  }
}`,...(_e=(Ve=S.parameters)==null?void 0:Ve.docs)==null?void 0:_e.source}}};var qe,Le,Ue;A.parameters={...A.parameters,docs:{...(qe=A.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    message: ''
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    width: 300
  }}>\r
      <ArvoTextbox label="Email" isRequired isInvalid aria-describedby="email-error-msg" />\r
      <ArvoMessageAlert type="negative" id="email-error-msg" message="Email address is required" />\r
    </div>
}`,...(Ue=(Le=A.parameters)==null?void 0:Le.docs)==null?void 0:Ue.source}}};var ze,Ye,Ke;D.parameters={...D.parameters,docs:{...(ze=D.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: 'In-Field Tooltip Error',
  args: {
    message: ''
  },
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center',
    width: 300
  }}>\r
      <ArvoTextbox label="Username" isInvalid errorDisplay="tooltip" errorMsg="Username is taken" />\r
    </div>
}`,...(Ke=(Ye=D.parameters)==null?void 0:Ye.docs)==null?void 0:Ke.source}}};var Ge,He,Je;w.parameters={...w.parameters,docs:{...(Ge=w.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  name: 'Panel Shell Info Slot',
  args: {
    message: ''
  },
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: 8
  }}>\r
      <ArvoMessageAlert type="info" role="status" message="24 matching results" />\r
    </div>
}`,...(Je=(He=w.parameters)==null?void 0:He.docs)==null?void 0:Je.source}}};var Qe,Xe,Ze;k.parameters={...k.parameters,docs:{...(Qe=k.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  name: 'Dismissable Notification Row',
  args: {
    message: ''
  },
  render: function DismissableDemo() {
    const [isVisible, setIsVisible] = useState(true);
    if (!isVisible) {
      return <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }}>\r
          <ArvoButton variant="secondary" size="sm" label="Show again" onClick={() => setIsVisible(true)} />\r
        </div>;
    }
    return <ArvoMessageAlert type="positive" message="Operation completed successfully" isDismissable onDismiss={() => setIsVisible(false)} />;
  }
}`,...(Ze=(Xe=k.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var $e,es,ss;E.parameters={...E.parameters,docs:{...($e=E.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  name: 'Selection Control Error',
  args: {
    message: ''
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 4
  }}>\r
      <ArvoCheckbox label="I agree to the terms" isInvalid />\r
      <ArvoMessageAlert type="negative" message="You must accept the terms to continue" />\r
    </div>
}`,...(ss=(es=E.parameters)==null?void 0:es.docs)==null?void 0:ss.source}}};var rs,as,ns;N.parameters={...N.parameters,docs:{...(rs=N.parameters)==null?void 0:rs.docs,source:{originalSource:`{
  name: 'Notification List Item',
  args: {
    message: ''
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    width: 360
  }}>\r
      <ArvoMessageAlert type="negative" message="3 validation errors found" />\r
      <ArvoMessageAlert type="warning" message="Export may take several minutes" />\r
      <ArvoMessageAlert type="info" message="New version available" />\r
    </div>
}`,...(ns=(as=N.parameters)==null?void 0:as.docs)==null?void 0:ns.source}}};const ps=["Default","Playground","Error","Success","Warning","Info","Neutral","Block","ErrorInline","SuccessInline","WarningInline","InfoInline","NeutralInline","BlockInline","WithId","WithRoleOverride","WithIconOverride","Dismissable","DismissableWithInteraction","MessageAsReactNode","InlineAriaLabelFallback","BelowTextbox","InFieldTooltipError","PanelShellInfo","DismissableNotificationRow","SelectionControlError","NotificationListItem"],bs=Object.freeze(Object.defineProperty({__proto__:null,BelowTextbox:A,Block:c,BlockInline:y,Default:r,Dismissable:b,DismissableNotificationRow:k,DismissableWithInteraction:h,Error:n,ErrorInline:m,InFieldTooltipError:D,Info:o,InfoInline:g,InlineAriaLabelFallback:S,MessageAsReactNode:x,Neutral:l,NeutralInline:u,NotificationListItem:N,PanelShellInfo:w,Playground:a,SelectionControlError:E,Success:t,SuccessInline:d,Warning:i,WarningInline:p,WithIconOverride:I,WithId:v,WithRoleOverride:f,__namedExportsOrder:ps,default:ds},Symbol.toStringTag,{value:"Module"}));export{c as B,b as D,n as E,o as I,bs as M,l as N,a as P,t as S,i as W,m as a,D as b,x as c,A as d,E as e,N as f};
