import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as j}from"./iframe-BaOp0t6F.js";import{A as a}from"./Textbox-BjaSSAvr.js";import{A as w}from"./Button-B8O_kk1m.js";const{expect:Ue,fn:He,userEvent:Ge,within:Je}=__STORYBOOK_MODULE_TEST__,Ke={title:"Inputs/Textbox",component:a,tags:["!dev","stable"],argTypes:{label:{control:{type:"text"}},value:{control:{type:"text"}},placeholder:{control:{type:"text"}},type:{control:{type:"select"},options:["text","email","tel","url"],table:{defaultValue:{summary:"text"}}},size:{control:{type:"select"},options:["sm","lg"],table:{defaultValue:{summary:"lg"}}},width:{control:{type:"text"},description:'CSS width override (e.g. "200px", "50%")'},isFullWidth:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isDisabled:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isReadOnly:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isRequired:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isInvalid:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isLoading:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isClearable:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},errorDisplay:{control:{type:"select"},options:["inline","tooltip","none"],table:{defaultValue:{summary:"inline"}}},hasCounter:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},maxLength:{control:{type:"number"}},errorMsg:{control:{type:"text"}},leadingIcon:{control:{type:"text"}},onChange:{action:"changed",table:{category:"Events"}},onInput:{action:"input",table:{category:"Events"}}},args:{placeholder:"Type something...",size:"lg",type:"text",isDisabled:!1,isReadOnly:!1,isRequired:!1,isInvalid:!1,isLoading:!1,isClearable:!1,isFullWidth:!1,errorDisplay:"inline",hasCounter:!1},parameters:{docs:{description:{component:"Consolidated CSF for ArvoTextbox. Every story is docs-only\r\n(`tags: ['!dev', ...]`): they render on the attached `Textbox.mdx` page (the\r\nsingle sidebar node for this component), not as their own sidebar leaves."}}}},n={args:{label:"Label",placeholder:"Try every prop"}},i={args:{label:"Label",onChange:He()},play:async({args:r,canvasElement:s})=>{const l=Je(s);await Ge.type(l.getByRole("textbox"),"hello"),await Ue(r.onChange).toHaveBeenCalled()}},c={args:{placeholder:"Enter text"}},d={name:"With Label",args:{label:"Full name",placeholder:"Jane Doe"}},u={name:"With Label (Required)",args:{label:"Email",placeholder:"jane@example.com",isRequired:!0}},m={args:{size:"sm",label:"Small",placeholder:"Compact"}},p={args:{size:"lg",label:"Large",placeholder:"Default"}},g={name:"With Leading Icon",args:{leadingIcon:"search",placeholder:"Search"}},b={args:{value:"Some value",isClearable:!0,label:"Clearable"}},h={name:"With Counter",args:{label:"Bio",maxLength:80,hasCounter:!0,value:"Hello world!"}},y={name:"Error (Default)",args:{label:"Email",isInvalid:!0,value:"invalid"}},v={name:"Error (Custom Message)",args:{label:"Username",isInvalid:!0,errorMsg:"Username is already taken."}},x={name:"Error (Inline)",args:{label:"Email",isInvalid:!0,errorDisplay:"tooltip",value:"invalid"}},f={args:{label:"Disabled",isDisabled:!0,value:"Cannot edit"}},C={args:{label:"Readonly",isReadOnly:!0,value:"Display only"}},E={args:{label:"Loading",isLoading:!0}},S={name:"Full Width",args:{label:"Full width",isFullWidth:!0}},W={name:"Custom Width",args:{label:"Custom width",width:"420px"}},L={name:"Email Type",args:{type:"email",label:"Email",placeholder:"jane@example.com"}},D={args:{},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:360},children:[e.jsx(a,{label:"Email",type:"email",placeholder:"jane@example.com",leadingIcon:"envelope",isRequired:!0,isClearable:!0}),e.jsx(a,{label:"Bio",placeholder:"Tell us about yourself",maxLength:120,hasCounter:!0}),e.jsx(a,{label:"Disabled",value:"Read-only value",isDisabled:!0}),e.jsx(a,{label:"With error",value:"bad-value",isInvalid:!0,errorMsg:"Use a real value"})]})},T={args:{},render:()=>{const[r,s]=j.useState(""),[l,t]=j.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:320},children:[e.jsx(a,{label:"Email",type:"email",value:r,onChange:o=>s(o.currentTarget.value)}),e.jsx(a,{label:"Password",type:"text",value:l,onChange:o=>t(o.currentTarget.value),placeholder:"(use type=password in production)"}),e.jsx(w,{variant:"primary",label:"Sign in",isFullWidth:!0,isDisabled:!r||!l})]})}},I={args:{},render:()=>{const[r,s]=j.useState("Project Phoenix"),[l,t]=j.useState(!1);return e.jsx("div",{style:{display:"flex",gap:8,alignItems:"center",maxWidth:360},children:l?e.jsxs(e.Fragment,{children:[e.jsx(a,{value:r,onChange:o=>s(o.currentTarget.value),isFullWidth:!0}),e.jsx(w,{variant:"primary",size:"sm",label:"Save",onClick:()=>t(!1)}),e.jsx(w,{variant:"tertiary",size:"sm",label:"Cancel",onClick:()=>t(!1)})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{flexGrow:1},children:r}),e.jsx(w,{variant:"tertiary",size:"sm",icon:"pencil",label:"Edit",onClick:()=>t(!0)})]})})}};var F,R,A;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Try every prop'
  }
}`,...(A=(R=n.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var B,V,z;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    onChange: fn()
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole('textbox'), 'hello');
    await expect(args.onChange).toHaveBeenCalled();
  }
}`,...(z=(V=i.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var P,_,M;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text'
  }
}`,...(M=(_=c.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var O,q,k;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'With Label',
  args: {
    label: 'Full name',
    placeholder: 'Jane Doe'
  }
}`,...(k=(q=d.parameters)==null?void 0:q.docs)==null?void 0:k.source}}};var U,H,G;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'With Label (Required)',
  args: {
    label: 'Email',
    placeholder: 'jane@example.com',
    isRequired: true
  }
}`,...(G=(H=u.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var J,K,Y;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Small',
    placeholder: 'Compact'
  }
}`,...(Y=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var N,Q,X;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Large',
    placeholder: 'Default'
  }
}`,...(X=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,$,ee;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'With Leading Icon',
  args: {
    leadingIcon: 'search',
    placeholder: 'Search'
  }
}`,...(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,re,le;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    value: 'Some value',
    isClearable: true,
    label: 'Clearable'
  }
}`,...(le=(re=b.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var se,te,oe;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'With Counter',
  args: {
    label: 'Bio',
    maxLength: 80,
    hasCounter: true,
    value: 'Hello world!'
  }
}`,...(oe=(te=h.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ne,ie,ce;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Error (Default)',
  args: {
    label: 'Email',
    isInvalid: true,
    value: 'invalid'
  }
}`,...(ce=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,ue,me;v.parameters={...v.parameters,docs:{...(de=v.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'Error (Custom Message)',
  args: {
    label: 'Username',
    isInvalid: true,
    errorMsg: 'Username is already taken.'
  }
}`,...(me=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,ge,be;x.parameters={...x.parameters,docs:{...(pe=x.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'Error (Inline)',
  args: {
    label: 'Email',
    isInvalid: true,
    errorDisplay: 'tooltip',
    value: 'invalid'
  }
}`,...(be=(ge=x.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var he,ye,ve;f.parameters={...f.parameters,docs:{...(he=f.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    isDisabled: true,
    value: 'Cannot edit'
  }
}`,...(ve=(ye=f.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var xe,fe,Ce;C.parameters={...C.parameters,docs:{...(xe=C.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    label: 'Readonly',
    isReadOnly: true,
    value: 'Display only'
  }
}`,...(Ce=(fe=C.parameters)==null?void 0:fe.docs)==null?void 0:Ce.source}}};var Ee,Se,We;E.parameters={...E.parameters,docs:{...(Ee=E.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    label: 'Loading',
    isLoading: true
  }
}`,...(We=(Se=E.parameters)==null?void 0:Se.docs)==null?void 0:We.source}}};var Le,De,Te;S.parameters={...S.parameters,docs:{...(Le=S.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  name: 'Full Width',
  args: {
    label: 'Full width',
    isFullWidth: true
  }
}`,...(Te=(De=S.parameters)==null?void 0:De.docs)==null?void 0:Te.source}}};var Ie,we,je;W.parameters={...W.parameters,docs:{...(Ie=W.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: 'Custom Width',
  args: {
    label: 'Custom width',
    width: '420px'
  }
}`,...(je=(we=W.parameters)==null?void 0:we.docs)==null?void 0:je.source}}};var Fe,Re,Ae;L.parameters={...L.parameters,docs:{...(Fe=L.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  name: 'Email Type',
  args: {
    type: 'email',
    label: 'Email',
    placeholder: 'jane@example.com'
  }
}`,...(Ae=(Re=L.parameters)==null?void 0:Re.docs)==null?void 0:Ae.source}}};var Be,Ve,ze;D.parameters={...D.parameters,docs:{...(Be=D.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    maxWidth: 360
  }}>\r
      <ArvoTextbox label="Email" type="email" placeholder="jane@example.com" leadingIcon="envelope" isRequired isClearable />\r
      <ArvoTextbox label="Bio" placeholder="Tell us about yourself" maxLength={120} hasCounter />\r
      <ArvoTextbox label="Disabled" value="Read-only value" isDisabled />\r
      <ArvoTextbox label="With error" value="bad-value" isInvalid errorMsg="Use a real value" />\r
    </div>
}`,...(ze=(Ve=D.parameters)==null?void 0:Ve.docs)==null?void 0:ze.source}}};var Pe,_e,Me;T.parameters={...T.parameters,docs:{...(Pe=T.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      maxWidth: 320
    }}>\r
        <ArvoTextbox label="Email" type="email" value={email} onChange={e => setEmail(e.currentTarget.value)} />\r
        <ArvoTextbox label="Password" type="text" value={pwd} onChange={e => setPwd(e.currentTarget.value)} placeholder="(use type=password in production)" />\r
        <ArvoButton variant="primary" label="Sign in" isFullWidth isDisabled={!email || !pwd} />\r
      </div>;
  }
}`,...(Me=(_e=T.parameters)==null?void 0:_e.docs)==null?void 0:Me.source}}};var Oe,qe,ke;I.parameters={...I.parameters,docs:{...(Oe=I.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [value, setValue] = useState('Project Phoenix');
    const [editing, setEditing] = useState(false);
    return <div style={{
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      maxWidth: 360
    }}>\r
        {editing ? <>\r
            <ArvoTextbox value={value} onChange={e => setValue(e.currentTarget.value)} isFullWidth />\r
            <ArvoButton variant="primary" size="sm" label="Save" onClick={() => setEditing(false)} />\r
            <ArvoButton variant="tertiary" size="sm" label="Cancel" onClick={() => setEditing(false)} />\r
          </> : <>\r
            <span style={{
          flexGrow: 1
        }}>{value}</span>\r
            <ArvoButton variant="tertiary" size="sm" icon="pencil" label="Edit" onClick={() => setEditing(true)} />\r
          </>}\r
      </div>;
  }
}`,...(ke=(qe=I.parameters)==null?void 0:qe.docs)==null?void 0:ke.source}}};const Ye=["Playground","TypeInteraction","Default","WithLabel","WithLabelRequired","Small","Large","WithLeadingIcon","Clearable","WithCounter","ErrorDefault","ErrorCustomMessage","ErrorInline","Disabled","Readonly","Loading","FullWidth","CustomWidth","EmailType","AllFeatures","LoginForm","InlineEditableField"],$e=Object.freeze(Object.defineProperty({__proto__:null,AllFeatures:D,Clearable:b,CustomWidth:W,Default:c,Disabled:f,EmailType:L,ErrorCustomMessage:v,ErrorDefault:y,ErrorInline:x,FullWidth:S,InlineEditableField:I,Large:p,Loading:E,LoginForm:T,Playground:n,Readonly:C,Small:m,TypeInteraction:i,WithCounter:h,WithLabel:d,WithLabelRequired:u,WithLeadingIcon:g,__namedExportsOrder:Ye,default:Ke},Symbol.toStringTag,{value:"Module"}));export{D as A,b as C,f as D,y as E,S as F,I,p as L,n as P,C as R,m as S,$e as T,d as W,u as a,g as b,h as c,v as d,x as e,E as f,W as g,T as h};
