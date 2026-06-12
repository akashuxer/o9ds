import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as te}from"./iframe-BaOp0t6F.js";import{A as a}from"./Switch-BDE_dn2p.js";const{expect:oe,fn:ie,userEvent:ce,within:de}=__STORYBOOK_MODULE_TEST__,ue={title:"Inputs/Switch",component:a,tags:["!dev","stable"],argTypes:{label:{control:{type:"text"}},isChecked:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isDisabled:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isRequired:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isLoading:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},labelPosition:{control:{type:"radio"},options:["start","end"],table:{defaultValue:{summary:"end"}}},value:{control:{type:"text"},table:{defaultValue:{summary:"on"}}},name:{control:{type:"text"}},onChange:{action:"changed",table:{category:"Events"}}},args:{label:"Switch label",isChecked:!1,isDisabled:!1,isRequired:!1,isLoading:!1,labelPosition:"end",value:"on"},parameters:{docs:{description:{component:"Consolidated CSF for ArvoSwitch. All stories are docs-only (`tags: ['!dev', ...]`):\r\nthey render on the attached `Switch.mdx` page (the single sidebar node for this\r\ncomponent), not as their own sidebar leaves. `Switch.mdx` references these stories\r\nwith Doc Blocks."}}}},l={args:{label:"Try every prop"}},o={args:{label:"Switch"}},i={args:{label:"Toggle me",onChange:ie()},play:async({args:s,canvasElement:r})=>{const t=de(r);await ce.click(t.getByRole("switch")),await oe(s.onChange).toHaveBeenCalled()}},c={args:{label:"On",isChecked:!0}},d={args:{label:"Disabled",isDisabled:!0}},u={name:"Disabled Checked",args:{label:"Disabled on",isDisabled:!0,isChecked:!0}},m={args:{label:"Required toggle",isRequired:!0}},b={args:{label:"Loading toggle",isLoading:!0}},g={name:"Label Start",args:{label:"Label on the start",labelPosition:"start"}},p={name:"No Label",args:{label:null}},h={name:"Interactive (stateful)",args:{label:""},render:()=>{const[s,r]=te.useState(!1);return e.jsx(a,{label:`Notifications: ${s?"On":"Off"}`,isChecked:s,onChange:({isChecked:t})=>r(t)})}},f={args:{label:""},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(a,{label:"Default"}),e.jsx(a,{label:"Checked",isChecked:!0}),e.jsx(a,{label:"Disabled",isDisabled:!0}),e.jsx(a,{label:"Disabled Checked",isDisabled:!0,isChecked:!0}),e.jsx(a,{label:"Required",isRequired:!0}),e.jsx(a,{label:"Loading",isLoading:!0}),e.jsx(a,{label:"Label start",labelPosition:"start"})]})},y={args:{label:""},render:()=>{const s=[{id:"email",label:"Email notifications",desc:"Receive an email when someone mentions you."},{id:"sms",label:"SMS notifications",desc:"Get a text message for high-priority alerts."},{id:"digest",label:"Weekly digest",desc:"Summary of activity, every Monday at 9am."}],[r,t]=te.useState({email:!0,sms:!1,digest:!0});return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:480},children:s.map(n=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:12,gap:12},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx("span",{children:n.label}),e.jsx("span",{children:n.desc})]}),e.jsx(a,{label:null,isChecked:r[n.id],onChange:({isChecked:ne})=>t(le=>({...le,[n.id]:ne}))})]},n.id))})}};var S,v,x;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Try every prop'
  }
}`,...(x=(v=l.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var C,w,D;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Switch'
  }
}`,...(D=(w=o.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var k,L,j;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Toggle me',
    onChange: fn()
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('switch'));
    await expect(args.onChange).toHaveBeenCalled();
  }
}`,...(j=(L=i.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var R,A,O;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'On',
    isChecked: true
  }
}`,...(O=(A=c.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var q,E,_;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    isDisabled: true
  }
}`,...(_=(E=d.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var T,I,P;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Disabled Checked',
  args: {
    label: 'Disabled on',
    isDisabled: true,
    isChecked: true
  }
}`,...(P=(I=u.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var N,B,M;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Required toggle',
    isRequired: true
  }
}`,...(M=(B=m.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var V,W,G;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Loading toggle',
    isLoading: true
  }
}`,...(G=(W=b.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var H,$,z;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Label Start',
  args: {
    label: 'Label on the start',
    labelPosition: 'start'
  }
}`,...(z=($=g.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var F,K,U;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'No Label',
  args: {
    label: null
  }
}`,...(U=(K=p.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var Y,J,Q;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Interactive (stateful)',
  args: {
    label: ''
  },
  render: () => {
    const [on, setOn] = useState(false);
    return <ArvoSwitch label={\`Notifications: \${on ? 'On' : 'Off'}\`} isChecked={on} onChange={({
      isChecked
    }) => setOn(isChecked)} />;
  }
}`,...(Q=(J=h.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,ee;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: ''
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>\r
      <ArvoSwitch label="Default" />\r
      <ArvoSwitch label="Checked" isChecked />\r
      <ArvoSwitch label="Disabled" isDisabled />\r
      <ArvoSwitch label="Disabled Checked" isDisabled isChecked />\r
      <ArvoSwitch label="Required" isRequired />\r
      <ArvoSwitch label="Loading" isLoading />\r
      <ArvoSwitch label="Label start" labelPosition="start" />\r
    </div>
}`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,se,re;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    label: ''
  },
  render: () => {
    const rows = [{
      id: 'email',
      label: 'Email notifications',
      desc: 'Receive an email when someone mentions you.'
    }, {
      id: 'sms',
      label: 'SMS notifications',
      desc: 'Get a text message for high-priority alerts.'
    }, {
      id: 'digest',
      label: 'Weekly digest',
      desc: 'Summary of activity, every Monday at 9am.'
    }];
    const [state, setState] = useState<Record<string, boolean>>({
      email: true,
      sms: false,
      digest: true
    });
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      maxWidth: 480
    }}>\r
        {rows.map(r => <div key={r.id} style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        gap: 12
      }}>\r
            <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4
        }}>\r
              <span>{r.label}</span>\r
              <span>{r.desc}</span>\r
            </div>\r
            <ArvoSwitch label={null} isChecked={state[r.id]} onChange={({
          isChecked
        }) => setState(s => ({
          ...s,
          [r.id]: isChecked
        }))} />\r
          </div>)}\r
      </div>;
  }
}`,...(re=(se=y.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};const me=["Playground","Default","ToggleInteraction","Checked","Disabled","DisabledChecked","Required","Loading","LabelStart","NoLabel","Interactive","AllStates","SettingsRow"],he=Object.freeze(Object.defineProperty({__proto__:null,AllStates:f,Checked:c,Default:o,Disabled:d,DisabledChecked:u,Interactive:h,LabelStart:g,Loading:b,NoLabel:p,Playground:l,Required:m,SettingsRow:y,ToggleInteraction:i,__namedExportsOrder:me,default:ue},Symbol.toStringTag,{value:"Module"}));export{f as A,h as I,g as L,p as N,l as P,he as S,y as a};
