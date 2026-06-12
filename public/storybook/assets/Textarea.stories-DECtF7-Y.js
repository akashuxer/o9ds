import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as Te}from"./iframe-BaOp0t6F.js";import{A as a}from"./Textarea-DHmHzhmJ.js";import{A}from"./Button-B8O_kk1m.js";const ze={title:"Inputs/Textarea",component:a,tags:["!dev","stable"],argTypes:{label:{control:{type:"text"}},value:{control:{type:"text"}},placeholder:{control:{type:"text"}},size:{control:{type:"select"},options:["sm","lg"],table:{defaultValue:{summary:"sm"}}},rows:{control:{type:"number"},table:{defaultValue:{summary:"3"}}},maxLength:{control:{type:"number"}},hasCounter:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},autoResize:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},resizable:{control:{type:"select"},options:["none","vertical","both"],table:{defaultValue:{summary:"none"}}},isDisabled:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isReadOnly:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isRequired:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isInvalid:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isLoading:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isFullWidth:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},errorDisplay:{control:{type:"select"},options:["inline","tooltip","none"],table:{defaultValue:{summary:"inline"}}},icon:{control:{type:"text"}},onChange:{action:"changed",table:{category:"Events"}}},args:{placeholder:"Type something...",size:"sm",rows:3,isDisabled:!1,isReadOnly:!1,isRequired:!1,isInvalid:!1,isLoading:!1,isFullWidth:!1,autoResize:!1,hasCounter:!1},parameters:{docs:{description:{component:"Consolidated CSF for ArvoTextarea. Every story is docs-only\r\n(`tags: ['!dev', ...]`): they render on the attached `Textarea.mdx` page (the\r\nsingle sidebar node for this component), not as their own sidebar leaves."}}}},r={args:{label:"Description",placeholder:"Try every prop"}},s={args:{placeholder:"Enter multi-line text"}},t={args:{size:"sm",placeholder:"Small textarea"}},l={args:{size:"lg",placeholder:"Large textarea"}},o={name:"With Label",args:{label:"Description",placeholder:"Tell us more"}},n={name:"With Label (Required)",args:{label:"Description",placeholder:"Required",isRequired:!0}},i={name:"With Character Counter",args:{label:"Bio",maxLength:200,hasCounter:!0,value:"A short bio..."}},c={name:"Auto Resize",args:{label:"Auto-resize",placeholder:"Type to grow",autoResize:!0,maxLength:500}},d={args:{label:"Loading",isLoading:!0}},u={args:{label:"Disabled",isDisabled:!0,value:"Cannot edit"}},m={args:{label:"Read-only",isReadOnly:!0,value:"Display only"}},p={name:"Error (Inline Alert)",args:{label:"Bio",isInvalid:!0,value:"bad",errorMsg:"Please use at least 10 characters."}},g={name:"Error (Inline Icon)",args:{label:"Bio",isInvalid:!0,errorDisplay:"tooltip",value:"bad"}},h={name:"With Leading Icon",args:{label:"Comment",icon:"comment",placeholder:"Add a comment"}},b={name:"With Icon and Label",args:{label:"Note",icon:"sticky-note-o",placeholder:"Add a note"}},y={name:"Full Width",args:{label:"Full width",isFullWidth:!0}},x={args:{},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:360},children:[e.jsx(a,{size:"sm",label:"Small",placeholder:"Small (sm)"}),e.jsx(a,{size:"lg",label:"Large",placeholder:"Large (lg, default)"})]})},f={args:{},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:360},children:[e.jsx(a,{label:"Bio",placeholder:"Tell us about yourself",maxLength:200,hasCounter:!0}),e.jsx(a,{label:"Notes",placeholder:"Auto-grows",autoResize:!0,maxLength:400}),e.jsx(a,{label:"Disabled",value:"Cannot edit",isDisabled:!0}),e.jsx(a,{label:"Required",placeholder:"Required",isRequired:!0})]})},v={args:{},render:()=>{const[L,Ce]=Te.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:480},children:[e.jsx(a,{label:"Add a comment",placeholder:"Share your thoughts",value:L,maxLength:280,hasCounter:!0,autoResize:!0,onChange:De=>Ce(De.currentTarget.value)}),e.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[e.jsx(A,{variant:"tertiary",label:"Cancel"}),e.jsx(A,{variant:"primary",label:"Post comment",isDisabled:L.trim().length===0})]})]})}};var R,S,W;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'Try every prop'
  }
}`,...(W=(S=r.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var C,D,T;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter multi-line text'
  }
}`,...(T=(D=s.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var z,I,j;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    placeholder: 'Small textarea'
  }
}`,...(j=(I=t.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var q,E,F;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    placeholder: 'Large textarea'
  }
}`,...(F=(E=l.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var V,B,w;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'With Label',
  args: {
    label: 'Description',
    placeholder: 'Tell us more'
  }
}`,...(w=(B=o.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var P,O,_;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'With Label (Required)',
  args: {
    label: 'Description',
    placeholder: 'Required',
    isRequired: true
  }
}`,...(_=(O=n.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var N,M,k;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'With Character Counter',
  args: {
    label: 'Bio',
    maxLength: 200,
    hasCounter: true,
    value: 'A short bio...'
  }
}`,...(k=(M=i.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var G,H,J;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Auto Resize',
  args: {
    label: 'Auto-resize',
    placeholder: 'Type to grow',
    autoResize: true,
    maxLength: 500
  }
}`,...(J=(H=c.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    label: 'Loading',
    isLoading: true
  }
}`,...(U=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    isDisabled: true,
    value: 'Cannot edit'
  }
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ae;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Read-only',
    isReadOnly: true,
    value: 'Display only'
  }
}`,...(ae=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,se,te;p.parameters={...p.parameters,docs:{...(re=p.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Error (Inline Alert)',
  args: {
    label: 'Bio',
    isInvalid: true,
    value: 'bad',
    errorMsg: 'Please use at least 10 characters.'
  }
}`,...(te=(se=p.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var le,oe,ne;g.parameters={...g.parameters,docs:{...(le=g.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Error (Inline Icon)',
  args: {
    label: 'Bio',
    isInvalid: true,
    errorDisplay: 'tooltip',
    value: 'bad'
  }
}`,...(ne=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ie,ce,de;h.parameters={...h.parameters,docs:{...(ie=h.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'With Leading Icon',
  args: {
    label: 'Comment',
    icon: 'comment',
    placeholder: 'Add a comment'
  }
}`,...(de=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,me,pe;b.parameters={...b.parameters,docs:{...(ue=b.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'With Icon and Label',
  args: {
    label: 'Note',
    icon: 'sticky-note-o',
    placeholder: 'Add a note'
  }
}`,...(pe=(me=b.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ge,he,be;y.parameters={...y.parameters,docs:{...(ge=y.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: 'Full Width',
  args: {
    label: 'Full width',
    isFullWidth: true
  }
}`,...(be=(he=y.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var ye,xe,fe;x.parameters={...x.parameters,docs:{...(ye=x.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    maxWidth: 360
  }}>\r
      <ArvoTextarea size="sm" label="Small" placeholder="Small (sm)" />\r
      <ArvoTextarea size="lg" label="Large" placeholder="Large (lg, default)" />\r
    </div>
}`,...(fe=(xe=x.parameters)==null?void 0:xe.docs)==null?void 0:fe.source}}};var ve,Le,Ae;f.parameters={...f.parameters,docs:{...(ve=f.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    maxWidth: 360
  }}>\r
      <ArvoTextarea label="Bio" placeholder="Tell us about yourself" maxLength={200} hasCounter />\r
      <ArvoTextarea label="Notes" placeholder="Auto-grows" autoResize maxLength={400} />\r
      <ArvoTextarea label="Disabled" value="Cannot edit" isDisabled />\r
      <ArvoTextarea label="Required" placeholder="Required" isRequired />\r
    </div>
}`,...(Ae=(Le=f.parameters)==null?void 0:Le.docs)==null?void 0:Ae.source}}};var Re,Se,We;v.parameters={...v.parameters,docs:{...(Re=v.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [text, setText] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      maxWidth: 480
    }}>\r
        <ArvoTextarea label="Add a comment" placeholder="Share your thoughts" value={text} maxLength={280} hasCounter autoResize onChange={e => setText(e.currentTarget.value)} />\r
        <div style={{
        display: 'flex',
        gap: 8,
        justifyContent: 'flex-end'
      }}>\r
          <ArvoButton variant="tertiary" label="Cancel" />\r
          <ArvoButton variant="primary" label="Post comment" isDisabled={text.trim().length === 0} />\r
        </div>\r
      </div>;
  }
}`,...(We=(Se=v.parameters)==null?void 0:Se.docs)==null?void 0:We.source}}};const Ie=["Playground","Default","Small","Large","WithLabel","WithLabelRequired","WithCharacterCounter","AutoResize","Loading","Disabled","Readonly","ErrorInlineAlert","ErrorInlineIcon","WithLeadingIcon","WithIconAndLabel","FullWidth","AllSizes","AllFeatures","CommentForm"],Ve=Object.freeze(Object.defineProperty({__proto__:null,AllFeatures:f,AllSizes:x,AutoResize:c,CommentForm:v,Default:s,Disabled:u,ErrorInlineAlert:p,ErrorInlineIcon:g,FullWidth:y,Large:l,Loading:d,Playground:r,Readonly:m,Small:t,WithCharacterCounter:i,WithIconAndLabel:b,WithLabel:o,WithLabelRequired:n,WithLeadingIcon:h,__namedExportsOrder:Ie,default:ze},Symbol.toStringTag,{value:"Module"}));export{x as A,v as C,u as D,p as E,y as F,d as L,r as P,m as R,Ve as T,o as W,n as a,i as b,c,h as d,b as e,g as f,f as g};
