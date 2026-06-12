import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as ne}from"./iframe-BaOp0t6F.js";import{a as r,A as l}from"./Radio-0NcOE_jm.js";const te={title:"Inputs/RadioGroup",component:r,tags:["!dev","stable"],argTypes:{name:{control:{type:"text"}},label:{control:{type:"text"}},orientation:{control:{type:"radio"},options:["vertical","horizontal"],table:{defaultValue:{summary:"vertical"}}},labelPosition:{control:{type:"radio"},options:["top","start"],table:{defaultValue:{summary:"top"}}},size:{control:{type:"select"},options:["sm","lg"],table:{defaultValue:{summary:"lg"}}},isDisabled:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isReadOnly:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isRequired:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isInvalid:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isLoading:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},errorMsg:{control:{type:"text"}},value:{control:{type:"text"}}},args:{name:"plan",label:"Subscription plan",orientation:"vertical",labelPosition:"top",size:"lg",isDisabled:!1,isReadOnly:!1,isRequired:!1,isInvalid:!1,isLoading:!1},parameters:{docs:{description:{component:"Consolidated CSF for ArvoRadioGroup. All stories are docs-only (`tags: ['!dev', ...]`):\r\nthey render on the attached `RadioGroup.mdx` page (the single sidebar node for this\r\ncomponent), not as their own sidebar leaves. `RadioGroup.mdx` references these stories\r\nwith Doc Blocks."}}}},s=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{value:"free",name:"plan",label:"Free"}),e.jsx(l,{value:"pro",name:"plan",label:"Pro"}),e.jsx(l,{value:"enterprise",name:"plan",label:"Enterprise"})]}),n={args:{name:"plan",label:"Subscription plan"},render:a=>e.jsx(r,{...a,children:e.jsx(s,{})})},t={args:{name:"plan",label:"Subscription plan"},render:a=>e.jsx(r,{...a,children:e.jsx(s,{})})},d={args:{name:"plan",label:"Plan",orientation:"horizontal"},render:a=>e.jsx(r,{...a,children:e.jsx(s,{})})},i={name:"Label Start",args:{name:"plan",label:"Plan",labelPosition:"start"},render:a=>e.jsx(r,{...a,children:e.jsx(s,{})})},p={args:{name:"plan",label:"Plan",size:"sm"},render:a=>e.jsx(r,{...a,children:e.jsx(s,{})})},u={args:{name:"plan",label:"Plan",isDisabled:!0},render:a=>e.jsx(r,{...a,children:e.jsx(s,{})})},c={args:{name:"plan",label:"Plan",isReadOnly:!0,value:"pro"},render:a=>e.jsx(r,{...a,children:e.jsx(s,{})})},m={args:{name:"plan",label:"Plan",isInvalid:!0,errorMsg:"Please select a plan"},render:a=>e.jsx(r,{...a,children:e.jsx(s,{})})},b={args:{name:"plan",label:"Plan",isRequired:!0},render:a=>e.jsx(r,{...a,children:e.jsx(s,{})})},v={args:{name:"plan",label:"Plan",isLoading:!0},render:a=>e.jsx(r,{...a,children:e.jsx(s,{})})},g={name:"Interactive (stateful)",args:{name:"plan"},render:()=>{const[a,A]=ne.useState("pro");return e.jsxs(r,{name:"plan",label:`Selected: ${a}`,value:a,onChange:({value:f})=>A(f),children:[e.jsx(l,{value:"free",name:"plan",label:"Free"}),e.jsx(l,{value:"pro",name:"plan",label:"Pro"}),e.jsx(l,{value:"enterprise",name:"plan",label:"Enterprise"})]})}},x={args:{name:"states"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:360},children:[e.jsxs(r,{name:"default",label:"Default",children:[e.jsx(l,{value:"a",name:"default",label:"A"}),e.jsx(l,{value:"b",name:"default",label:"B",isChecked:!0})]}),e.jsxs(r,{name:"disabled",label:"Disabled",isDisabled:!0,children:[e.jsx(l,{value:"a",name:"disabled",label:"A"}),e.jsx(l,{value:"b",name:"disabled",label:"B"})]}),e.jsxs(r,{name:"error",label:"Error",isInvalid:!0,errorMsg:"Pick one",children:[e.jsx(l,{value:"a",name:"error",label:"A"}),e.jsx(l,{value:"b",name:"error",label:"B"})]})]})},R={args:{name:"sidebar"},render:()=>{const[a,A]=ne.useState("expanded"),f=[{v:"expanded",l:"Expanded sidebar",d:"Show full labels next to icons."},{v:"collapsed",l:"Collapsed sidebar",d:"Icons only; labels appear on hover."},{v:"auto",l:"Auto",d:"Collapse on small screens; expand on large screens."}];return e.jsx(r,{name:"sidebar",label:"Sidebar layout",value:a,onChange:({value:o})=>A(o),children:f.map(o=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx(l,{value:o.v,name:"sidebar",label:o.l}),e.jsx("div",{style:{marginLeft:28},children:o.d})]},o.v))})}};var y,j,S;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    name: 'plan',
    label: 'Subscription plan'
  },
  render: args => <ArvoRadioGroup {...args}><Items /></ArvoRadioGroup>
}`,...(S=(j=n.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var h,G,P;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    name: 'plan',
    label: 'Subscription plan'
  },
  render: args => <ArvoRadioGroup {...args}><Items /></ArvoRadioGroup>
}`,...(P=(G=t.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var I,D,L;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    name: 'plan',
    label: 'Plan',
    orientation: 'horizontal'
  },
  render: args => <ArvoRadioGroup {...args}><Items /></ArvoRadioGroup>
}`,...(L=(D=d.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var C,E,V;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Label Start',
  args: {
    name: 'plan',
    label: 'Plan',
    labelPosition: 'start'
  },
  render: args => <ArvoRadioGroup {...args}><Items /></ArvoRadioGroup>
}`,...(V=(E=i.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var z,B,O;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    name: 'plan',
    label: 'Plan',
    size: 'sm'
  },
  render: args => <ArvoRadioGroup {...args}><Items /></ArvoRadioGroup>
}`,...(O=(B=p.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var k,q,w;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    name: 'plan',
    label: 'Plan',
    isDisabled: true
  },
  render: args => <ArvoRadioGroup {...args}><Items /></ArvoRadioGroup>
}`,...(w=(q=u.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var M,_,F;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    name: 'plan',
    label: 'Plan',
    isReadOnly: true,
    value: 'pro'
  },
  render: args => <ArvoRadioGroup {...args}><Items /></ArvoRadioGroup>
}`,...(F=(_=c.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var H,T,W;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    name: 'plan',
    label: 'Plan',
    isInvalid: true,
    errorMsg: 'Please select a plan'
  },
  render: args => <ArvoRadioGroup {...args}><Items /></ArvoRadioGroup>
}`,...(W=(T=m.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var $,J,K;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    name: 'plan',
    label: 'Plan',
    isRequired: true
  },
  render: args => <ArvoRadioGroup {...args}><Items /></ArvoRadioGroup>
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,Q,U;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    name: 'plan',
    label: 'Plan',
    isLoading: true
  },
  render: args => <ArvoRadioGroup {...args}><Items /></ArvoRadioGroup>
}`,...(U=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Interactive (stateful)',
  args: {
    name: 'plan'
  },
  render: () => {
    const [plan, setPlan] = useState<string | null>('pro');
    return <ArvoRadioGroup name="plan" label={\`Selected: \${plan}\`} value={plan} onChange={({
      value
    }) => setPlan(value)}>\r
        <ArvoRadio value="free" name="plan" label="Free" />\r
        <ArvoRadio value="pro" name="plan" label="Pro" />\r
        <ArvoRadio value="enterprise" name="plan" label="Enterprise" />\r
      </ArvoRadioGroup>;
  }
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,re;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    name: 'states'
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    maxWidth: 360
  }}>\r
      <ArvoRadioGroup name="default" label="Default">\r
        <ArvoRadio value="a" name="default" label="A" />\r
        <ArvoRadio value="b" name="default" label="B" isChecked />\r
      </ArvoRadioGroup>\r
      <ArvoRadioGroup name="disabled" label="Disabled" isDisabled>\r
        <ArvoRadio value="a" name="disabled" label="A" />\r
        <ArvoRadio value="b" name="disabled" label="B" />\r
      </ArvoRadioGroup>\r
      <ArvoRadioGroup name="error" label="Error" isInvalid errorMsg="Pick one">\r
        <ArvoRadio value="a" name="error" label="A" />\r
        <ArvoRadio value="b" name="error" label="B" />\r
      </ArvoRadioGroup>\r
    </div>
}`,...(re=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var le,se,oe;R.parameters={...R.parameters,docs:{...(le=R.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    name: 'sidebar'
  },
  render: () => {
    const [v, setV] = useState<string | null>('expanded');
    const opts = [{
      v: 'expanded',
      l: 'Expanded sidebar',
      d: 'Show full labels next to icons.'
    }, {
      v: 'collapsed',
      l: 'Collapsed sidebar',
      d: 'Icons only; labels appear on hover.'
    }, {
      v: 'auto',
      l: 'Auto',
      d: 'Collapse on small screens; expand on large screens.'
    }];
    return <ArvoRadioGroup name="sidebar" label="Sidebar layout" value={v} onChange={({
      value
    }) => setV(value)}>\r
        {opts.map(o => <div key={o.v} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }}>\r
            <ArvoRadio value={o.v} name="sidebar" label={o.l} />\r
            <div style={{
          marginLeft: 28
        }}>{o.d}</div>\r
          </div>)}\r
      </ArvoRadioGroup>;
  }
}`,...(oe=(se=R.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};const de=["Playground","Default","Horizontal","LabelStart","Small","Disabled","Readonly","Error","Required","Loading","Interactive","AllStates","SettingsRadioRow"],ce=Object.freeze(Object.defineProperty({__proto__:null,AllStates:x,Default:t,Disabled:u,Error:m,Horizontal:d,Interactive:g,LabelStart:i,Loading:v,Playground:n,Readonly:c,Required:b,SettingsRadioRow:R,Small:p,__namedExportsOrder:de,default:te},Symbol.toStringTag,{value:"Module"}));export{x as A,d as H,g as I,i as L,n as P,ce as R,R as S};
