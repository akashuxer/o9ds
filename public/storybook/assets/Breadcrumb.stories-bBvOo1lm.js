import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as le}from"./iframe-BaOp0t6F.js";import{r as ie}from"./loading-flag-DkqmYwgU.js";import{A as h}from"./Button-B8O_kk1m.js";const t=le.forwardRef(function({items:v,isDisabled:o=!1,isLoading:pe=!1,ariaLabel:X="Breadcrumb",onNavigate:x,className:Y},Z){const ee=ie(),re=["arvo-bc",o?"is-disabled":"","",Y??""].filter(Boolean).join(" "),ae=o||ee,se=v.length-1,te=(r,a,y)=>{if(ae){r.preventDefault(),r.stopPropagation();return}x&&a.href&&x({href:a.href,index:y,label:a.label})};return e.jsx("nav",{ref:Z,"aria-label":X,"aria-busy":void 0,className:re,children:e.jsx("ol",{className:"arvo-bc__list",children:v.map((r,a)=>{const y=a===se,oe=!!r.icon&&!r.label;return e.jsx("li",{className:"arvo-bc__item",children:y?e.jsx("span",{className:"arvo-bc__lbl","aria-current":"page",children:r.label}):e.jsxs("a",{className:"arvo-bc__lnk",href:o?void 0:r.href,"aria-disabled":o?!0:void 0,"aria-label":oe?r.label||"Home":void 0,tabIndex:o?0:void 0,onClick:ne=>te(ne,r,a),children:[r.icon&&e.jsx("span",{className:`arvo-bc__ico o9con o9con-${r.icon}`,"aria-hidden":"true"}),r.label&&r.label]})},a)})})})});t.__docgenInfo={description:"",methods:[],displayName:"ArvoBreadcrumb",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"ArvoBreadcrumbItem"}],raw:"ArvoBreadcrumbItem[]"},description:""},separator:{required:!1,tsType:{name:"string"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Breadcrumb'",computed:!1}},onNavigate:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: { href: string; index: number; label: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ href: string; index: number; label: string }",signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"index",value:{name:"number",required:!0}},{key:"label",value:{name:"string",required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const s=[{label:"Home",href:"/"},{label:"Reports",href:"/reports"},{label:"Q4 2025"}],ce=[{label:"Home",href:"/",icon:"home"},{label:"Reports",href:"/reports"},{label:"Q4 2025"}],f=[{label:"Home",href:"/"},{label:"Reports",href:"/reports"},{label:"Q4 2025"}],de={title:"Navigation/Breadcrumb",component:t,tags:["!dev","stable"],argTypes:{items:{control:{type:"object"}},separator:{control:{type:"text"},description:"Separator string between items"},isDisabled:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isLoading:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},ariaLabel:{control:{type:"text"},table:{defaultValue:{summary:"Breadcrumb"}}},onNavigate:{action:"navigated",table:{category:"Events"}}},args:{items:s,isDisabled:!1,isLoading:!1,ariaLabel:"Breadcrumb"}},n={args:{items:s}},l={args:{items:s}},i={name:"Text Only",args:{items:f}},c={name:"Two Items",args:{items:f.slice(0,2)}},d={name:"With Icon",args:{items:ce}},m={name:"Custom Separator",args:{items:f,separator:">"}},u={args:{items:f,isDisabled:!0}},p={args:{items:f,isLoading:!0}},g={args:{items:[]},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(t,{items:s}),e.jsx(t,{items:s,isDisabled:!0}),e.jsx(t,{items:s,isLoading:!0})]})},b={args:{items:[]},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,padding:16},children:[e.jsx(t,{items:s}),e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx("h1",{style:{flexGrow:1},children:"Q4 2025 Report"}),e.jsx(h,{variant:"secondary",icon:"download",label:"Export"}),e.jsx(h,{variant:"primary",icon:"share",label:"Share"})]})]})};var j,S,B;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    items
  }
}`,...(B=(S=n.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var I,T,_;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    items
  }
}`,...(_=(T=l.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var A,L,O;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Text Only',
  args: {
    items: textOnly
  }
}`,...(O=(L=i.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var w,D,q;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Two Items',
  args: {
    items: textOnly.slice(0, 2)
  }
}`,...(q=(D=c.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var N,P,k;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'With Icon',
  args: {
    items: fullItems
  }
}`,...(k=(P=d.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var C,R,E;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Custom Separator',
  args: {
    items: textOnly,
    separator: '>'
  }
}`,...(E=(R=m.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var H,V,Q;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    items: textOnly,
    isDisabled: true
  }
}`,...(Q=(V=u.parameters)==null?void 0:V.docs)==null?void 0:Q.source}}};var W,G,z;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    items: textOnly,
    isLoading: true
  }
}`,...(z=(G=p.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var M,$,F;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    items: []
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>\r
      <ArvoBreadcrumb items={items} />\r
      <ArvoBreadcrumb items={items} isDisabled />\r
      <ArvoBreadcrumb items={items} isLoading />\r
    </div>
}`,...(F=($=g.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var J,K,U;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    items: []
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    padding: 16
  }}>\r
      <ArvoBreadcrumb items={items} />\r
      <div style={{
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }}>\r
        <h1 style={{
        flexGrow: 1
      }}>Q4 2025 Report</h1>\r
        <ArvoButton variant="secondary" icon="download" label="Export" />\r
        <ArvoButton variant="primary" icon="share" label="Share" />\r
      </div>\r
    </div>
}`,...(U=(K=b.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};const me=["Default","Playground","TextOnly","TwoItems","WithIcon","CustomSeparator","Disabled","Loading","AllStates","PageHeader"],ve=Object.freeze(Object.defineProperty({__proto__:null,AllStates:g,CustomSeparator:m,Default:n,Disabled:u,Loading:p,PageHeader:b,Playground:l,TextOnly:i,TwoItems:c,WithIcon:d,__namedExportsOrder:me,default:de},Symbol.toStringTag,{value:"Module"}));export{g as A,ve as B,m as C,l as P,i as T,d as W,c as a,b};
