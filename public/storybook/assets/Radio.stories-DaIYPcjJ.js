import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as ce}from"./iframe-BaOp0t6F.js";import{A as s}from"./Radio-0NcOE_jm.js";const ue={title:"Inputs/Radio",component:s,tags:["!dev","stable"],argTypes:{label:{control:{type:"text"}},value:{control:{type:"text"}},name:{control:{type:"text"}},isChecked:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isDisabled:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isRequired:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isInvalid:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isLoading:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},size:{control:{type:"select"},options:["sm","lg"],table:{defaultValue:{summary:"lg"}}},onChange:{action:"changed",table:{category:"Events"}}},args:{label:"Radio option",value:"option-1",name:"group-a",isChecked:!1,isDisabled:!1,isRequired:!1,isInvalid:!1,isLoading:!1,size:"lg"},parameters:{docs:{description:{component:"Consolidated CSF for ArvoRadio. All stories are docs-only (`tags: ['!dev', ...]`):\r\nthey render on the attached `Radio.mdx` page (the single sidebar node for this\r\ncomponent), not as their own sidebar leaves. `Radio.mdx` references these stories\r\nwith Doc Blocks."}}}},o={args:{label:"Try every prop"}},l={args:{label:"Default radio"}},r={value:"option-a",name:"demo"},t={args:{...r,label:"Unchecked option"}},n={args:{...r,label:"Checked option",isChecked:!0}},i={args:{...r,label:"Disabled option",isDisabled:!0}},d={name:"Disabled + Checked",args:{...r,label:"Disabled checked option",isDisabled:!0,isChecked:!0}},c={args:{...r,label:"Error option",isInvalid:!0}},u={args:{...r,label:"Required option",isRequired:!0}},m={args:{...r,label:"Loading option",isLoading:!0}},p={name:"Size: Small",args:{...r,label:"Small option",size:"sm"}},v={name:"Size: Large",args:{...r,label:"Large option",size:"lg"}},g={args:{value:"x",label:""},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(s,{value:"a",name:"states",label:"Unchecked"}),e.jsx(s,{value:"b",name:"states",label:"Checked",isChecked:!0}),e.jsx(s,{value:"c",name:"states",label:"Disabled",isDisabled:!0}),e.jsx(s,{value:"d",name:"states",label:"Disabled + Checked",isDisabled:!0,isChecked:!0}),e.jsx(s,{value:"e",name:"states",label:"Error",isInvalid:!0}),e.jsx(s,{value:"f",name:"states",label:"Required",isRequired:!0}),e.jsx(s,{value:"g",name:"states",label:"Loading",isLoading:!0})]})},b={name:"Radio Group Example",args:{value:"x",label:""},render:()=>{const[y,x]=ce.useState("day"),f=[{v:"day",l:"Day view"},{v:"week",l:"Week view"},{v:"month",l:"Month view"}];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:f.map(a=>e.jsx(s,{value:a.v,name:"view",label:a.l,isChecked:y===a.v,onChange:({value:k})=>x(k)},a.v))})}},h={args:{value:"x",label:""},render:()=>{const[y,x]=ce.useState("credit-card"),f=[{v:"credit-card",l:"Credit / debit card",d:"Visa, Mastercard, AmEx"},{v:"paypal",l:"PayPal",d:"Sign in to PayPal at checkout"},{v:"invoice",l:"Invoice",d:"Net-30 billing for verified accounts"}];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:420},children:f.map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx(s,{value:a.v,name:"payment",label:a.l,isChecked:y===a.v,onChange:({value:k})=>x(k)}),e.jsx("div",{style:{marginLeft:28},children:a.d})]},a.v))})}};var S,D,C;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Try every prop'
  }
}`,...(C=(D=o.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var R,A,L;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Default radio'
  }
}`,...(L=(A=l.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var j,P,z;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    label: 'Unchecked option'
  }
}`,...(z=(P=t.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var E,M,q;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    label: 'Checked option',
    isChecked: true
  }
}`,...(q=(M=n.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var w,V,I;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    label: 'Disabled option',
    isDisabled: true
  }
}`,...(I=(V=i.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var U,_,G;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Disabled + Checked',
  args: {
    ...baseArgs,
    label: 'Disabled checked option',
    isDisabled: true,
    isChecked: true
  }
}`,...(G=(_=d.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var T,W,O;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    label: 'Error option',
    isInvalid: true
  }
}`,...(O=(W=c.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var N,B,F;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    label: 'Required option',
    isRequired: true
  }
}`,...(F=(B=u.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var H,J,K;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    label: 'Loading option',
    isLoading: true
  }
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Size: Small',
  args: {
    ...baseArgs,
    label: 'Small option',
    size: 'sm'
  }
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Size: Large',
  args: {
    ...baseArgs,
    label: 'Large option',
    size: 'lg'
  }
}`,...(ee=($=v.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,se,re;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    value: 'x',
    label: ''
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>\r
      <ArvoRadio value="a" name="states" label="Unchecked" />\r
      <ArvoRadio value="b" name="states" label="Checked" isChecked />\r
      <ArvoRadio value="c" name="states" label="Disabled" isDisabled />\r
      <ArvoRadio value="d" name="states" label="Disabled + Checked" isDisabled isChecked />\r
      <ArvoRadio value="e" name="states" label="Error" isInvalid />\r
      <ArvoRadio value="f" name="states" label="Required" isRequired />\r
      <ArvoRadio value="g" name="states" label="Loading" isLoading />\r
    </div>
}`,...(re=(se=g.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var oe,le,te;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Radio Group Example',
  args: {
    value: 'x',
    label: ''
  },
  render: () => {
    const [value, setValue] = useState('day');
    const opts = [{
      v: 'day',
      l: 'Day view'
    }, {
      v: 'week',
      l: 'Week view'
    }, {
      v: 'month',
      l: 'Month view'
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>\r
        {opts.map(o => <ArvoRadio key={o.v} value={o.v} name="view" label={o.l} isChecked={value === o.v} onChange={({
        value: next
      }) => setValue(next)} />)}\r
      </div>;
  }
}`,...(te=(le=b.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};var ne,ie,de;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    value: 'x',
    label: ''
  },
  render: () => {
    const [method, setMethod] = useState('credit-card');
    const opts = [{
      v: 'credit-card',
      l: 'Credit / debit card',
      d: 'Visa, Mastercard, AmEx'
    }, {
      v: 'paypal',
      l: 'PayPal',
      d: 'Sign in to PayPal at checkout'
    }, {
      v: 'invoice',
      l: 'Invoice',
      d: 'Net-30 billing for verified accounts'
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      maxWidth: 420
    }}>\r
        {opts.map(o => <div key={o.v} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }}>\r
            <ArvoRadio value={o.v} name="payment" label={o.l} isChecked={method === o.v} onChange={({
          value: next
        }) => setMethod(next)} />\r
            <div style={{
          marginLeft: 28
        }}>{o.d}</div>\r
          </div>)}\r
      </div>;
  }
}`,...(de=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};const me=["Playground","Default","Unchecked","Checked","Disabled","DisabledChecked","Error","Required","Loading","SizeSmall","SizeLarge","AllStates","ManualGroup","PaymentMethodPicker"],be=Object.freeze(Object.defineProperty({__proto__:null,AllStates:g,Checked:n,Default:l,Disabled:i,DisabledChecked:d,Error:c,Loading:m,ManualGroup:b,PaymentMethodPicker:h,Playground:o,Required:u,SizeLarge:v,SizeSmall:p,Unchecked:t,__namedExportsOrder:me,default:ue},Symbol.toStringTag,{value:"Module"}));export{g as A,b as M,o as P,be as R,p as S,v as a,h as b};
