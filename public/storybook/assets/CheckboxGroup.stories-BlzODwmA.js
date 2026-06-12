import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as pe}from"./iframe-BaOp0t6F.js";import{a as s,A as a}from"./Checkbox-k9WMnmR3.js";const he={title:"Inputs/CheckboxGroup",component:s,tags:["!dev","stable"],argTypes:{label:{control:{type:"text"}},hasSelectAll:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},orientation:{control:{type:"radio"},options:["vertical","horizontal"],table:{defaultValue:{summary:"vertical"}}},labelPosition:{control:{type:"radio"},options:["top","start"],table:{defaultValue:{summary:"top"}}},size:{control:{type:"select"},options:["sm","lg"],table:{defaultValue:{summary:"lg"}}},isDisabled:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isReadOnly:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isRequired:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isInvalid:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isLoading:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},errorMsg:{control:{type:"text"}}},args:{label:"Notification preferences",hasSelectAll:!1,orientation:"vertical",labelPosition:"top",size:"lg",isDisabled:!1,isReadOnly:!1,isRequired:!1,isInvalid:!1,isLoading:!1},parameters:{docs:{description:{component:"Consolidated CSF for ArvoCheckboxGroup. All stories are docs-only (`tags: ['!dev', ...]`):\r\nthey render on the attached `CheckboxGroup.mdx` page (the single sidebar node for this\r\ncomponent), not as their own sidebar leaves. `CheckboxGroup.mdx` references these stories\r\nwith Doc Blocks."}}}},k=e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"Email",value:"email"}),e.jsx(a,{label:"SMS",value:"sms"}),e.jsx(a,{label:"Push",value:"push"})]}),o=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"Email",value:"email"}),e.jsx(a,{label:"SMS",value:"sms"}),e.jsx(a,{label:"Push",value:"push"})]}),t={args:{label:"Notification preferences",children:k},render:r=>e.jsx(s,{...r,children:k})},i={args:{label:"Notification preferences",children:k},render:r=>e.jsx(s,{...r,children:k})},n={name:"With Select All",args:{label:"Notifications",hasSelectAll:!0},render:r=>e.jsx(s,{...r,children:e.jsx(o,{})})},c={args:{label:"Notifications",orientation:"horizontal"},render:r=>e.jsx(s,{...r,children:e.jsx(o,{})})},u={name:"Label Start",args:{label:"Notifications",labelPosition:"start"},render:r=>e.jsx(s,{...r,children:e.jsx(o,{})})},d={args:{label:"Notifications",size:"sm"},render:r=>e.jsx(s,{...r,children:e.jsx(o,{})})},b={args:{label:"Disabled",isDisabled:!0},render:r=>e.jsx(s,{...r,children:e.jsx(o,{})})},p={args:{label:"Read-only",isReadOnly:!0},render:r=>e.jsx(s,{...r,children:e.jsx(o,{})})},h={args:{label:"Notifications",isInvalid:!0,errorMsg:"Pick at least one"},render:r=>e.jsx(s,{...r,children:e.jsx(o,{})})},m={args:{label:"Notifications",isRequired:!0},render:r=>e.jsx(s,{...r,children:e.jsx(o,{})})},x={args:{label:"Notifications",isLoading:!0},render:r=>e.jsx(s,{...r,children:e.jsx(o,{})})},v={name:"Interactive (stateful)",args:{},render:()=>{const[r,ue]=pe.useState({email:!1,sms:!1,push:!1}),A=(l,de)=>ue(be=>({...be,[l]:de}));return e.jsxs(s,{label:"Notifications",hasSelectAll:!0,children:[e.jsx(a,{label:"Email",value:"email",isChecked:r.email,onChange:({isChecked:l})=>A("email",l)}),e.jsx(a,{label:"SMS",value:"sms",isChecked:r.sms,onChange:({isChecked:l})=>A("sms",l)}),e.jsx(a,{label:"Push",value:"push",isChecked:r.push,onChange:({isChecked:l})=>A("push",l)})]})}},g={args:{},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:360},children:[e.jsxs(s,{label:"Default",children:[e.jsx(a,{label:"A",value:"a"}),e.jsx(a,{label:"B",value:"b",isChecked:!0}),e.jsx(a,{label:"C",value:"c"})]}),e.jsxs(s,{label:"Disabled",isDisabled:!0,children:[e.jsx(a,{label:"A",value:"a"}),e.jsx(a,{label:"B",value:"b"})]}),e.jsxs(s,{label:"Error",isInvalid:!0,errorMsg:"Pick at least one",children:[e.jsx(a,{label:"A",value:"a"}),e.jsx(a,{label:"B",value:"b"})]})]})},C={args:{},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:480},children:[e.jsxs(s,{label:"Reports",hasSelectAll:!0,children:[e.jsx(a,{label:"View",value:"reports.view"}),e.jsx(a,{label:"Edit",value:"reports.edit"}),e.jsx(a,{label:"Delete",value:"reports.delete"})]}),e.jsxs(s,{label:"Users",hasSelectAll:!0,children:[e.jsx(a,{label:"View",value:"users.view"}),e.jsx(a,{label:"Invite",value:"users.invite"}),e.jsx(a,{label:"Manage roles",value:"users.roles"})]}),e.jsxs(s,{label:"Billing",hasSelectAll:!0,children:[e.jsx(a,{label:"View invoices",value:"billing.view"}),e.jsx(a,{label:"Update payment method",value:"billing.update"})]})]})};var f,j,S;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Notification preferences',
    children: items
  },
  render: args => <ArvoCheckboxGroup {...args}>{items}</ArvoCheckboxGroup>
}`,...(S=(j=t.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var y,G,I;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Notification preferences',
    children: items
  },
  render: args => <ArvoCheckboxGroup {...args}>{items}</ArvoCheckboxGroup>
}`,...(I=(G=i.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var D,N,P;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'With Select All',
  args: {
    label: 'Notifications',
    hasSelectAll: true
  },
  render: args => <ArvoCheckboxGroup {...args}><Items /></ArvoCheckboxGroup>
}`,...(P=(N=n.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var R,V,w;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Notifications',
    orientation: 'horizontal'
  },
  render: args => <ArvoCheckboxGroup {...args}><Items /></ArvoCheckboxGroup>
}`,...(w=(V=c.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var M,E,L;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Label Start',
  args: {
    label: 'Notifications',
    labelPosition: 'start'
  },
  render: args => <ArvoCheckboxGroup {...args}><Items /></ArvoCheckboxGroup>
}`,...(L=(E=u.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var z,B,W;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Notifications',
    size: 'sm'
  },
  render: args => <ArvoCheckboxGroup {...args}><Items /></ArvoCheckboxGroup>
}`,...(W=(B=d.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var O,q,_;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    isDisabled: true
  },
  render: args => <ArvoCheckboxGroup {...args}><Items /></ArvoCheckboxGroup>
}`,...(_=(q=b.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};var U,F,H;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Read-only',
    isReadOnly: true
  },
  render: args => <ArvoCheckboxGroup {...args}><Items /></ArvoCheckboxGroup>
}`,...(H=(F=p.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var T,J,K;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Notifications',
    isInvalid: true,
    errorMsg: 'Pick at least one'
  },
  render: args => <ArvoCheckboxGroup {...args}><Items /></ArvoCheckboxGroup>
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: 'Notifications',
    isRequired: true
  },
  render: args => <ArvoCheckboxGroup {...args}><Items /></ArvoCheckboxGroup>
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    label: 'Notifications',
    isLoading: true
  },
  render: args => <ArvoCheckboxGroup {...args}><Items /></ArvoCheckboxGroup>
}`,...(ee=($=x.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ae,se;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Interactive (stateful)',
  args: {},
  render: () => {
    const [state, setState] = useState({
      email: false,
      sms: false,
      push: false
    });
    const update = (key: keyof typeof state, isChecked: boolean) => setState(s => ({
      ...s,
      [key]: isChecked
    }));
    return <ArvoCheckboxGroup label="Notifications" hasSelectAll>\r
        <ArvoCheckbox label="Email" value="email" isChecked={state.email} onChange={({
        isChecked
      }) => update('email', isChecked)} />\r
        <ArvoCheckbox label="SMS" value="sms" isChecked={state.sms} onChange={({
        isChecked
      }) => update('sms', isChecked)} />\r
        <ArvoCheckbox label="Push" value="push" isChecked={state.push} onChange={({
        isChecked
      }) => update('push', isChecked)} />\r
      </ArvoCheckboxGroup>;
  }
}`,...(se=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var oe,le,te;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    maxWidth: 360
  }}>\r
      <ArvoCheckboxGroup label="Default">\r
        <ArvoCheckbox label="A" value="a" />\r
        <ArvoCheckbox label="B" value="b" isChecked />\r
        <ArvoCheckbox label="C" value="c" />\r
      </ArvoCheckboxGroup>\r
      <ArvoCheckboxGroup label="Disabled" isDisabled>\r
        <ArvoCheckbox label="A" value="a" />\r
        <ArvoCheckbox label="B" value="b" />\r
      </ArvoCheckboxGroup>\r
      <ArvoCheckboxGroup label="Error" isInvalid errorMsg="Pick at least one">\r
        <ArvoCheckbox label="A" value="a" />\r
        <ArvoCheckbox label="B" value="b" />\r
      </ArvoCheckboxGroup>\r
    </div>
}`,...(te=(le=g.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};var ie,ne,ce;C.parameters={...C.parameters,docs:{...(ie=C.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    maxWidth: 480
  }}>\r
      <ArvoCheckboxGroup label="Reports" hasSelectAll>\r
        <ArvoCheckbox label="View" value="reports.view" />\r
        <ArvoCheckbox label="Edit" value="reports.edit" />\r
        <ArvoCheckbox label="Delete" value="reports.delete" />\r
      </ArvoCheckboxGroup>\r
      <ArvoCheckboxGroup label="Users" hasSelectAll>\r
        <ArvoCheckbox label="View" value="users.view" />\r
        <ArvoCheckbox label="Invite" value="users.invite" />\r
        <ArvoCheckbox label="Manage roles" value="users.roles" />\r
      </ArvoCheckboxGroup>\r
      <ArvoCheckboxGroup label="Billing" hasSelectAll>\r
        <ArvoCheckbox label="View invoices" value="billing.view" />\r
        <ArvoCheckbox label="Update payment method" value="billing.update" />\r
      </ArvoCheckboxGroup>\r
    </div>
}`,...(ce=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}};const me=["Playground","Default","WithSelectAll","Horizontal","LabelStart","Small","Disabled","Readonly","Error","Required","Loading","Interactive","AllStates","PermissionsMatrix"],Ce=Object.freeze(Object.defineProperty({__proto__:null,AllStates:g,Default:i,Disabled:b,Error:h,Horizontal:c,Interactive:v,LabelStart:u,Loading:x,PermissionsMatrix:C,Playground:t,Readonly:p,Required:m,Small:d,WithSelectAll:n,__namedExportsOrder:me,default:he},Symbol.toStringTag,{value:"Module"}));export{g as A,Ce as C,c as H,v as I,u as L,t as P,n as W,C as a};
