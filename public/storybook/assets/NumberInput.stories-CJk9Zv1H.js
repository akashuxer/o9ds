import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as aa}from"./iframe-BaOp0t6F.js";import{A as k}from"./NumberInput-Iv_u_Hxn.js";import{A as ra}from"./Button-B8O_kk1m.js";const sa={title:"Inputs/NumberInput",component:k,tags:["!dev","stable"],argTypes:{label:{control:{type:"text"}},value:{control:{type:"number"}},placeholder:{control:{type:"text"}},min:{control:{type:"number"}},max:{control:{type:"number"}},step:{control:{type:"number"},table:{defaultValue:{summary:"1"}}},size:{control:{type:"select"},options:["sm","lg"],table:{defaultValue:{summary:"lg"}}},width:{control:{type:"text"}},isFullWidth:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isDisabled:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isReadOnly:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isRequired:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isInvalid:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isLoading:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},errorDisplay:{control:{type:"select"},options:["inline","tooltip","none"],table:{defaultValue:{summary:"inline"}}},errorMsg:{control:{type:"text"}},prefix:{control:{type:"text"}},prefixTooltip:{control:{type:"text"}},onChange:{action:"changed",table:{category:"Events"}}},args:{placeholder:"0",size:"lg",step:1,isDisabled:!1,isReadOnly:!1,isRequired:!1,isInvalid:!1,isLoading:!1,isFullWidth:!1,errorDisplay:"inline"},parameters:{docs:{description:{component:"Consolidated CSF for ArvoNumberInput. Every story is docs-only\r\n(`tags: ['!dev', ...]`): they render on the attached `NumberInput.mdx` page\r\n(the single sidebar node for this component), not as their own sidebar leaves."}}}},r={args:{label:"Quantity",placeholder:"0"}},s={args:{placeholder:"0"}},t={name:"With Label",args:{label:"Quantity",value:1}},n={name:"With Label (Required)",args:{label:"Age",value:18,isRequired:!0}},l={name:"With Min / Max",args:{label:"Volume",value:50,min:0,max:100}},o={name:"With Decimal Step",args:{label:"Price",value:9.99,step:.01}},i={args:{size:"sm",label:"Small",value:1}},u={name:"Large (Default)",args:{size:"lg",label:"Large",value:1}},m={args:{label:"Disabled",value:5,isDisabled:!0}},c={args:{label:"Readonly",value:5,isReadOnly:!0}},d={args:{label:"Loading",isLoading:!0}},p={name:"At Minimum",args:{label:"At min",value:0,min:0,max:10}},g={name:"At Maximum",args:{label:"At max",value:10,min:0,max:10}},b={name:"Error (Default)",args:{label:"Age",value:-1,isInvalid:!0}},f={name:"Error (Custom Message)",args:{label:"Age",value:200,isInvalid:!0,errorMsg:"Must be 1-120."}},x={name:"Error (Inline)",args:{label:"Age",value:-1,isInvalid:!0,errorDisplay:"tooltip"}},v={name:"Full Width",args:{label:"Full width",isFullWidth:!0}},h={name:"Custom Width",args:{label:"Custom width",width:"180px"}},y={name:"With Prefix",args:{label:"Week offset",value:-2,prefix:"Wk"}},W={name:"With Prefix Tooltip",args:{label:"Week offset",value:-2,prefix:"Wk",prefixTooltip:"Weeks"}},S={name:"With Prefix (Disabled)",args:{label:"Week offset",value:-2,prefix:"Wk",isDisabled:!0}},D={name:"With Prefix (Readonly)",args:{label:"Week offset",value:-2,prefix:"Wk",isReadOnly:!0}},A={name:"With Prefix (Invalid)",args:{label:"Week offset",value:-2,prefix:"Wk",isInvalid:!0,errorMsg:"Out of range"}},P={name:"With Prefix (Currency)",args:{label:"Price",value:99.99,step:.01,prefix:"$",prefixTooltip:"US Dollars"}},M={args:{},render:()=>{const[a,R]=aa.useState(1);return e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"flex-end",maxWidth:320},children:[e.jsx(k,{label:"Quantity",value:a,min:1,max:99,onChange:L=>R(Number(L.currentTarget.value)||0)}),e.jsx(ra,{variant:"primary",icon:"cart-plus",label:"Add to cart",isDisabled:a<1})]})}},I={args:{},render:()=>{const[a,R]=aa.useState(5);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,maxWidth:320},children:[e.jsx(k,{label:"0 to 10",value:a,min:0,max:10,onChange:L=>R(Number(L.currentTarget.value)||0)}),e.jsxs("div",{children:[a<=0&&e.jsx("span",{children:"At minimum -- decrement disabled."}),a>=10&&e.jsx("span",{children:"At maximum -- increment disabled."}),a>0&&a<10&&e.jsx("span",{children:"Within range."})]})]})}};var C,E,T;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Quantity',
    placeholder: '0'
  }
}`,...(T=(E=r.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var j,V,q;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    placeholder: '0'
  }
}`,...(q=(V=s.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var F,N,Q;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'With Label',
  args: {
    label: 'Quantity',
    value: 1
  }
}`,...(Q=(N=t.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var O,w,z;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'With Label (Required)',
  args: {
    label: 'Age',
    value: 18,
    isRequired: true
  }
}`,...(z=(w=n.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var _,B,U;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'With Min / Max',
  args: {
    label: 'Volume',
    value: 50,
    min: 0,
    max: 100
  }
}`,...(U=(B=l.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};var $,G,H;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'With Decimal Step',
  args: {
    label: 'Price',
    value: 9.99,
    step: 0.01
  }
}`,...(H=(G=o.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,X;i.parameters={...i.parameters,docs:{...(J=i.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Small',
    value: 1
  }
}`,...(X=(K=i.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Y,Z,ee;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Large (Default)',
  args: {
    size: 'lg',
    label: 'Large',
    value: 1
  }
}`,...(ee=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,se;m.parameters={...m.parameters,docs:{...(ae=m.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    value: 5,
    isDisabled: true
  }
}`,...(se=(re=m.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var te,ne,le;c.parameters={...c.parameters,docs:{...(te=c.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    label: 'Readonly',
    value: 5,
    isReadOnly: true
  }
}`,...(le=(ne=c.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var oe,ie,ue;d.parameters={...d.parameters,docs:{...(oe=d.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    label: 'Loading',
    isLoading: true
  }
}`,...(ue=(ie=d.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var me,ce,de;p.parameters={...p.parameters,docs:{...(me=p.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'At Minimum',
  args: {
    label: 'At min',
    value: 0,
    min: 0,
    max: 10
  }
}`,...(de=(ce=p.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,ge,be;g.parameters={...g.parameters,docs:{...(pe=g.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'At Maximum',
  args: {
    label: 'At max',
    value: 10,
    min: 0,
    max: 10
  }
}`,...(be=(ge=g.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var fe,xe,ve;b.parameters={...b.parameters,docs:{...(fe=b.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: 'Error (Default)',
  args: {
    label: 'Age',
    value: -1,
    isInvalid: true
  }
}`,...(ve=(xe=b.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var he,ye,We;f.parameters={...f.parameters,docs:{...(he=f.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'Error (Custom Message)',
  args: {
    label: 'Age',
    value: 200,
    isInvalid: true,
    errorMsg: 'Must be 1-120.'
  }
}`,...(We=(ye=f.parameters)==null?void 0:ye.docs)==null?void 0:We.source}}};var Se,De,Ae;x.parameters={...x.parameters,docs:{...(Se=x.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'Error (Inline)',
  args: {
    label: 'Age',
    value: -1,
    isInvalid: true,
    errorDisplay: 'tooltip'
  }
}`,...(Ae=(De=x.parameters)==null?void 0:De.docs)==null?void 0:Ae.source}}};var Pe,Me,Ie;v.parameters={...v.parameters,docs:{...(Pe=v.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  name: 'Full Width',
  args: {
    label: 'Full width',
    isFullWidth: true
  }
}`,...(Ie=(Me=v.parameters)==null?void 0:Me.docs)==null?void 0:Ie.source}}};var Re,Le,ke;h.parameters={...h.parameters,docs:{...(Re=h.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  name: 'Custom Width',
  args: {
    label: 'Custom width',
    width: '180px'
  }
}`,...(ke=(Le=h.parameters)==null?void 0:Le.docs)==null?void 0:ke.source}}};var Ce,Ee,Te;y.parameters={...y.parameters,docs:{...(Ce=y.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: 'With Prefix',
  args: {
    label: 'Week offset',
    value: -2,
    prefix: 'Wk'
  }
}`,...(Te=(Ee=y.parameters)==null?void 0:Ee.docs)==null?void 0:Te.source}}};var je,Ve,qe;W.parameters={...W.parameters,docs:{...(je=W.parameters)==null?void 0:je.docs,source:{originalSource:`{
  name: 'With Prefix Tooltip',
  args: {
    label: 'Week offset',
    value: -2,
    prefix: 'Wk',
    prefixTooltip: 'Weeks'
  }
}`,...(qe=(Ve=W.parameters)==null?void 0:Ve.docs)==null?void 0:qe.source}}};var Fe,Ne,Qe;S.parameters={...S.parameters,docs:{...(Fe=S.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  name: 'With Prefix (Disabled)',
  args: {
    label: 'Week offset',
    value: -2,
    prefix: 'Wk',
    isDisabled: true
  }
}`,...(Qe=(Ne=S.parameters)==null?void 0:Ne.docs)==null?void 0:Qe.source}}};var Oe,we,ze;D.parameters={...D.parameters,docs:{...(Oe=D.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  name: 'With Prefix (Readonly)',
  args: {
    label: 'Week offset',
    value: -2,
    prefix: 'Wk',
    isReadOnly: true
  }
}`,...(ze=(we=D.parameters)==null?void 0:we.docs)==null?void 0:ze.source}}};var _e,Be,Ue;A.parameters={...A.parameters,docs:{...(_e=A.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  name: 'With Prefix (Invalid)',
  args: {
    label: 'Week offset',
    value: -2,
    prefix: 'Wk',
    isInvalid: true,
    errorMsg: 'Out of range'
  }
}`,...(Ue=(Be=A.parameters)==null?void 0:Be.docs)==null?void 0:Ue.source}}};var $e,Ge,He;P.parameters={...P.parameters,docs:{...($e=P.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  name: 'With Prefix (Currency)',
  args: {
    label: 'Price',
    value: 99.99,
    step: 0.01,
    prefix: '$',
    prefixTooltip: 'US Dollars'
  }
}`,...(He=(Ge=P.parameters)==null?void 0:Ge.docs)==null?void 0:He.source}}};var Je,Ke,Xe;M.parameters={...M.parameters,docs:{...(Je=M.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [qty, setQty] = useState(1);
    return <div style={{
      display: 'flex',
      gap: 8,
      alignItems: 'flex-end',
      maxWidth: 320
    }}>\r
        <ArvoNumberInput label="Quantity" value={qty} min={1} max={99} onChange={e => setQty(Number(e.currentTarget.value) || 0)} />\r
        <ArvoButton variant="primary" icon="cart-plus" label="Add to cart" isDisabled={qty < 1} />\r
      </div>;
  }
}`,...(Xe=(Ke=M.parameters)==null?void 0:Ke.docs)==null?void 0:Xe.source}}};var Ye,Ze,ea;I.parameters={...I.parameters,docs:{...(Ye=I.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [v, setV] = useState(5);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      maxWidth: 320
    }}>\r
        <ArvoNumberInput label="0 to 10" value={v} min={0} max={10} onChange={e => setV(Number(e.currentTarget.value) || 0)} />\r
        <div>\r
          {v <= 0 && <span>At minimum -- decrement disabled.</span>}\r
          {v >= 10 && <span>At maximum -- increment disabled.</span>}\r
          {v > 0 && v < 10 && <span>Within range.</span>}\r
        </div>\r
      </div>;
  }
}`,...(ea=(Ze=I.parameters)==null?void 0:Ze.docs)==null?void 0:ea.source}}};const ta=["Playground","Default","WithLabel","WithLabelRequired","WithMinMax","WithDecimalStep","Small","LargeDefault","Disabled","Readonly","Loading","AtMinimum","AtMaximum","ErrorDefault","ErrorCustom","ErrorInline","FullWidth","CustomWidth","WithPrefix","WithPrefixTooltip","WithPrefixDisabled","WithPrefixReadonly","WithPrefixInvalid","WithPrefixCurrency","QuantityStepper","MinMaxBoundary"],ua=Object.freeze(Object.defineProperty({__proto__:null,AtMaximum:g,AtMinimum:p,CustomWidth:h,Default:s,Disabled:m,ErrorCustom:f,ErrorDefault:b,ErrorInline:x,FullWidth:v,LargeDefault:u,Loading:d,MinMaxBoundary:I,Playground:r,QuantityStepper:M,Readonly:c,Small:i,WithDecimalStep:o,WithLabel:t,WithLabelRequired:n,WithMinMax:l,WithPrefix:y,WithPrefixCurrency:P,WithPrefixDisabled:S,WithPrefixInvalid:A,WithPrefixReadonly:D,WithPrefixTooltip:W,__namedExportsOrder:ta,default:sa},Symbol.toStringTag,{value:"Module"}));export{p as A,h as C,m as D,b as E,v as F,u as L,I as M,ua as N,r as P,M as Q,c as R,i as S,t as W,n as a,l as b,o as c,g as d,y as e,W as f,P as g,f as h,x as i,d as j};
