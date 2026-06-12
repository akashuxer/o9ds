import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as se}from"./iframe-BaOp0t6F.js";import{A as a}from"./Checkbox-k9WMnmR3.js";import{A as te}from"./Button-B8O_kk1m.js";const{expect:oe,fn:ce,userEvent:le,within:ne}=__STORYBOOK_MODULE_TEST__,ie={title:"Inputs/Checkbox",component:a,tags:["!dev","stable"],argTypes:{label:{control:{type:"text"},description:"Visible label text beside the checkbox"},isChecked:{control:{type:"boolean"},description:"Whether the checkbox is checked",table:{defaultValue:{summary:"false"}}},isIndeterminate:{control:{type:"boolean"},description:"Partially checked state for parent checkboxes",table:{defaultValue:{summary:"false"}}},isDisabled:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isRequired:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isInvalid:{control:{type:"boolean"},description:"Shows validation error state",table:{defaultValue:{summary:"false"}}},value:{control:{type:"text"},table:{defaultValue:{summary:'""'}}},name:{control:{type:"text"}},isLoading:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},onChange:{action:"changed",description:"`(detail: { isChecked: boolean; value: string }) => void`",table:{category:"Events"}}},args:{label:"Checkbox label",isChecked:!1,isIndeterminate:!1,isDisabled:!1,isRequired:!1,isInvalid:!1,value:"",isLoading:!1},parameters:{docs:{description:{component:"Consolidated CSF for ArvoCheckbox. All stories are docs-only (`tags: ['!dev', ...]`):\r\nthey render on the attached `Checkbox.mdx` page (the single sidebar node for this\r\ncomponent), not as their own sidebar leaves. `Checkbox.mdx` references these stories\r\nwith Doc Blocks."}}}},o={args:{label:"Try every prop"}},c={args:{label:"Default checkbox"}},l={args:{label:"Accept terms",onChange:ce()},play:async({args:r,canvasElement:s})=>{const t=ne(s);await le.click(t.getByRole("checkbox")),await oe(r.onChange).toHaveBeenCalled()}},n={args:{label:"Checked checkbox",isChecked:!0}},i={args:{label:"Indeterminate checkbox",isIndeterminate:!0}},d={args:{label:"Disabled checkbox",isDisabled:!0}},b={name:"Disabled Checked",args:{label:"Disabled checked",isDisabled:!0,isChecked:!0}},u={args:{label:"Invalid checkbox",isInvalid:!0}},m={args:{label:"Required checkbox",isRequired:!0}},p={args:{label:"Loading checkbox",isLoading:!0}},h={name:"Interactive (stateful)",args:{label:""},render:()=>{const[r,s]=se.useState(!1);return e.jsx(a,{label:"Click to toggle",isChecked:r,onChange:({isChecked:t})=>s(t)})}},g={args:{label:""},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(a,{label:"Default"}),e.jsx(a,{label:"Checked",isChecked:!0}),e.jsx(a,{label:"Indeterminate",isIndeterminate:!0}),e.jsx(a,{label:"Disabled",isDisabled:!0}),e.jsx(a,{label:"Disabled Checked",isDisabled:!0,isChecked:!0}),e.jsx(a,{label:"Error",isInvalid:!0}),e.jsx(a,{label:"Required",isRequired:!0}),e.jsx(a,{label:"Loading",isLoading:!0})]})},k={args:{label:""},render:()=>{const[r,s]=se.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:400},children:[e.jsx(a,{label:"I have read and accept the Terms of Service and Privacy Policy.",isChecked:r,isRequired:!0,onChange:({isChecked:t})=>s(t)}),e.jsx(te,{label:"Continue",variant:"primary",isDisabled:!r})]})}};var x,C,v;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Try every prop'
  }
}`,...(v=(C=o.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var f,y,D;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Default checkbox'
  }
}`,...(D=(y=c.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var I,S,A;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms',
    onChange: fn()
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('checkbox'));
    await expect(args.onChange).toHaveBeenCalled();
  }
}`,...(A=(S=l.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var R,j,q;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Checked checkbox',
    isChecked: true
  }
}`,...(q=(j=n.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var E,T,L;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Indeterminate checkbox',
    isIndeterminate: true
  }
}`,...(L=(T=i.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var _,w,P;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Disabled checkbox',
    isDisabled: true
  }
}`,...(P=(w=d.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var B,V,O;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Disabled Checked',
  args: {
    label: 'Disabled checked',
    isDisabled: true,
    isChecked: true
  }
}`,...(O=(V=b.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var W,H,M;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Invalid checkbox',
    isInvalid: true
  }
}`,...(M=(H=u.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var z,F,K;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Required checkbox',
    isRequired: true
  }
}`,...(K=(F=m.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var U,Y,G;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Loading checkbox',
    isLoading: true
  }
}`,...(G=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var J,N,Q;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Interactive (stateful)',
  args: {
    label: ''
  },
  render: () => {
    const [isChecked, setChecked] = useState(false);
    return <ArvoCheckbox label="Click to toggle" isChecked={isChecked} onChange={({
      isChecked: next
    }) => setChecked(next)} />;
  }
}`,...(Q=(N=h.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var X,Z,$;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: ''
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>\r
      <ArvoCheckbox label="Default" />\r
      <ArvoCheckbox label="Checked" isChecked />\r
      <ArvoCheckbox label="Indeterminate" isIndeterminate />\r
      <ArvoCheckbox label="Disabled" isDisabled />\r
      <ArvoCheckbox label="Disabled Checked" isDisabled isChecked />\r
      <ArvoCheckbox label="Error" isInvalid />\r
      <ArvoCheckbox label="Required" isRequired />\r
      <ArvoCheckbox label="Loading" isLoading />\r
    </div>
}`,...($=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,re;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    label: ''
  },
  render: () => {
    const [accepted, setAccepted] = useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      maxWidth: 400
    }}>\r
        <ArvoCheckbox label="I have read and accept the Terms of Service and Privacy Policy." isChecked={accepted} isRequired onChange={({
        isChecked
      }) => setAccepted(isChecked)} />\r
        <ArvoButton label="Continue" variant="primary" isDisabled={!accepted} />\r
      </div>;
  }
}`,...(re=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};const de=["Playground","Default","ToggleInteraction","Checked","Indeterminate","Disabled","DisabledChecked","Error","Required","Loading","Interactive","AllStates","TermsAndConditions"],he=Object.freeze(Object.defineProperty({__proto__:null,AllStates:g,Checked:n,Default:c,Disabled:d,DisabledChecked:b,Error:u,Indeterminate:i,Interactive:h,Loading:p,Playground:o,Required:m,TermsAndConditions:k,ToggleInteraction:l,__namedExportsOrder:de,default:ie},Symbol.toStringTag,{value:"Module"}));export{g as A,he as C,i as I,o as P,k as T,h as a};
