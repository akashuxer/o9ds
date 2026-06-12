import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./iframe-BaOp0t6F.js";import{A as Pe}from"./Button-B8O_kk1m.js";import{A as ze}from"./IconButton-BgwDUYzG.js";import{A as He}from"./Indicator-DI-QBEWN.js";import{r as Oe}from"./loading-flag-DkqmYwgU.js";const qe=["primary","secondary"],a=S.forwardRef(function({variant:h="primary",icon:w,label:L,isDisabled:f=!1,isLoading:Ce=!1,indicator:B=!1,indicatorSize:Fe="lg",zIndex:F,tooltip:Te,onClick:T,onFocus:j,onBlur:E},je){const I=Oe(),A=S.useRef(null);S.useImperativeHandle(je,()=>({focus:()=>{var W;return(W=A.current)==null?void 0:W.focus()},buttonElement:A.current}));const x=qe.includes(h)?h:"primary",V=!!L,Ee=B!==!1&&!(f||I),Ve=["arvo-fab-btn",`arvo-fab-btn--${x}`,V?"arvo-fab-btn--with-label":"arvo-fab-btn--icon-only",f?"is-disabled":"",""].filter(Boolean).join(" "),We=F!==void 0?{zIndex:F}:void 0;return e.jsxs("div",{className:Ve,style:We,"aria-busy":void 0,children:[V?e.jsx(Pe,{ref:A,variant:x,size:"md",icon:w,label:L,isDisabled:f,isLoading:I,onClick:T,onFocus:j,onBlur:E}):e.jsx(ze,{ref:A,variant:x,size:"lg",icon:w,tooltip:Te??"",isDisabled:f,isLoading:I,onClick:T,onFocus:j,onBlur:E}),Ee&&e.jsx(He,{variant:B,size:Fe})]})});a.__docgenInfo={description:"",methods:[{name:"focus",docblock:null,modifiers:[],params:[],returns:null}],displayName:"ArvoFabButton",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},icon:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},indicator:{required:!1,tsType:{name:"union",raw:"IndicatorVariant | false",elements:[{name:"union",raw:"'unsaved' | 'new' | 'unread'",elements:[{name:"literal",value:"'unsaved'"},{name:"literal",value:"'new'"},{name:"literal",value:"'unread'"}]},{name:"literal",value:"false"}]},description:"",defaultValue:{value:"false",computed:!1}},indicatorSize:{required:!1,tsType:{name:"union",raw:"'sm' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'lg'",computed:!1}},zIndex:{required:!1,tsType:{name:"number"},description:""},tooltip:{required:!1,tsType:{name:"string"},description:"Tooltip content for the icon-only FAB. Doubles as `aria-label` because\nthe icon-only FAB has no visible text. Honored only in icon-only mode\n(when no `label` is passed). For an extended FAB with a visible label,\nwrap the component with `<ArvoTooltip>` if a supplementary tooltip is\nneeded."},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""},onFocus:{required:!1,tsType:{name:"ReactFocusEventHandler",raw:"React.FocusEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""},onBlur:{required:!1,tsType:{name:"ReactFocusEventHandler",raw:"React.FocusEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""}}};const Ue={title:"Actions/FabButton",component:a,tags:["!dev","stable"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary"],description:"Visual variant -- only primary and secondary are supported",table:{defaultValue:{summary:"primary"}}},icon:{control:{type:"text"},description:"Icon name without o9con- prefix (always required)"},label:{control:{type:"text"},description:"Optional label text. When provided, renders extended FAB with icon + label."},isDisabled:{control:{type:"boolean"},description:"Prevent all interaction",table:{defaultValue:{summary:"false"}}},isLoading:{control:{type:"boolean"},description:"Show skeleton shimmer loading overlay on inner button",table:{defaultValue:{summary:"false"}}},indicator:{control:{type:"select"},options:[!1,"unsaved","new","unread"],description:"Indicator badge variant (false = hidden)",table:{defaultValue:{summary:"false"}}},indicatorSize:{control:{type:"select"},options:["sm","lg"],description:"Indicator dot size",table:{defaultValue:{summary:"lg"}}},zIndex:{control:{type:"number"},description:"Explicit z-index override"},tooltip:{control:{type:"text"},description:"Tooltip text. Also used as aria-label in icon-only mode."},onClick:{action:"clicked",description:"Click handler callback. Suppressed when disabled or loading.",table:{category:"Events"}}},args:{icon:"plus",variant:"primary",isDisabled:!1,isLoading:!1,indicator:!1,indicatorSize:"lg",tooltip:"Add item"}},r={args:{variant:"primary",icon:"plus",tooltip:"Add item"}},n={args:{variant:"primary",icon:"plus",tooltip:"Try every prop"}},t={name:"Primary (Icon-Only)",args:{variant:"primary",icon:"plus",tooltip:"Add item"}},o={name:"Secondary (Icon-Only)",args:{variant:"secondary",icon:"edit",tooltip:"Edit"}},i={name:"Primary (With Label)",args:{variant:"primary",icon:"plus",label:"Create"}},s={name:"Secondary (With Label)",args:{variant:"secondary",icon:"edit",label:"Edit"}},l={args:{variant:"primary",icon:"plus",label:"Saving",isLoading:!0}},c={args:{variant:"primary",icon:"plus",label:"Add",isDisabled:!0}},d={name:"Indicator (Unsaved)",args:{variant:"primary",icon:"edit",tooltip:"Edit",indicator:"unsaved"}},p={name:"Indicator (New)",args:{variant:"primary",icon:"bell-o",tooltip:"Notifications",indicator:"new"}},m={name:"Indicator (Unread)",args:{variant:"primary",icon:"envelope",tooltip:"Inbox",indicator:"unread"}},u={name:"Indicator (Small)",args:{variant:"primary",icon:"plus",tooltip:"Add",indicator:"unsaved",indicatorSize:"sm"}},y={args:{icon:"plus",tooltip:""},render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center",flexWrap:"wrap"},children:[e.jsx(a,{variant:"primary",icon:"plus",tooltip:"Primary"}),e.jsx(a,{variant:"secondary",icon:"edit",tooltip:"Secondary"})]})},v={args:{icon:"plus",tooltip:""},render:()=>e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center",flexWrap:"wrap"},children:[e.jsx(a,{variant:"primary",icon:"plus",tooltip:"Add item"}),e.jsx(a,{variant:"primary",icon:"plus",label:"Add item",tooltip:"Add item"})]})},g={args:{icon:"plus",tooltip:""},render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center",flexWrap:"wrap"},children:[e.jsx(a,{variant:"primary",icon:"edit",tooltip:"Unsaved changes",indicator:"unsaved"}),e.jsx(a,{variant:"primary",icon:"bell-o",tooltip:"New alerts",indicator:"new"}),e.jsx(a,{variant:"primary",icon:"envelope",tooltip:"Unread mail",indicator:"unread"}),e.jsx(a,{variant:"primary",icon:"plus",tooltip:"Add (small dot)",indicator:"unsaved",indicatorSize:"sm"})]})},b={args:{icon:"plus",tooltip:""},render:()=>e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",padding:12},children:[e.jsx(a,{variant:"secondary",icon:"paperclip",tooltip:"Attach file"}),e.jsx(a,{variant:"secondary",icon:"picture",tooltip:"Insert image"}),e.jsx(a,{variant:"primary",icon:"paper-plane-send",label:"Send",tooltip:"Send message"})]})};var P,z,H;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    icon: 'plus',
    tooltip: 'Add item'
  }
}`,...(H=(z=r.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var O,q,U;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    icon: 'plus',
    tooltip: 'Try every prop'
  }
}`,...(U=(q=n.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var N,R,C;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Primary (Icon-Only)',
  args: {
    variant: 'primary',
    icon: 'plus',
    tooltip: 'Add item'
  }
}`,...(C=(R=t.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var D,M,_;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Secondary (Icon-Only)',
  args: {
    variant: 'secondary',
    icon: 'edit',
    tooltip: 'Edit'
  }
}`,...(_=(M=o.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var k,$,G;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Primary (With Label)',
  args: {
    variant: 'primary',
    icon: 'plus',
    label: 'Create'
  }
}`,...(G=($=i.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var J,K,Q;s.parameters={...s.parameters,docs:{...(J=s.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Secondary (With Label)',
  args: {
    variant: 'secondary',
    icon: 'edit',
    label: 'Edit'
  }
}`,...(Q=(K=s.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    icon: 'plus',
    label: 'Saving',
    isLoading: true
  }
}`,...(Z=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,re;c.parameters={...c.parameters,docs:{...(ee=c.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    icon: 'plus',
    label: 'Add',
    isDisabled: true
  }
}`,...(re=(ae=c.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ne,te,oe;d.parameters={...d.parameters,docs:{...(ne=d.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Indicator (Unsaved)',
  args: {
    variant: 'primary',
    icon: 'edit',
    tooltip: 'Edit',
    indicator: 'unsaved'
  }
}`,...(oe=(te=d.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ie,se,le;p.parameters={...p.parameters,docs:{...(ie=p.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Indicator (New)',
  args: {
    variant: 'primary',
    icon: 'bell-o',
    tooltip: 'Notifications',
    indicator: 'new'
  }
}`,...(le=(se=p.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ce,de,pe;m.parameters={...m.parameters,docs:{...(ce=m.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'Indicator (Unread)',
  args: {
    variant: 'primary',
    icon: 'envelope',
    tooltip: 'Inbox',
    indicator: 'unread'
  }
}`,...(pe=(de=m.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,ue,ye;u.parameters={...u.parameters,docs:{...(me=u.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'Indicator (Small)',
  args: {
    variant: 'primary',
    icon: 'plus',
    tooltip: 'Add',
    indicator: 'unsaved',
    indicatorSize: 'sm'
  }
}`,...(ye=(ue=u.parameters)==null?void 0:ue.docs)==null?void 0:ye.source}}};var ve,ge,be;y.parameters={...y.parameters,docs:{...(ve=y.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    icon: 'plus',
    tooltip: ''
  },
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>\r
      <ArvoFabButton variant="primary" icon="plus" tooltip="Primary" />\r
      <ArvoFabButton variant="secondary" icon="edit" tooltip="Secondary" />\r
    </div>
}`,...(be=(ge=y.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var fe,Ae,Ie;v.parameters={...v.parameters,docs:{...(fe=v.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    icon: 'plus',
    tooltip: ''
  },
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>\r
      <ArvoFabButton variant="primary" icon="plus" tooltip="Add item" />\r
      <ArvoFabButton variant="primary" icon="plus" label="Add item" tooltip="Add item" />\r
    </div>
}`,...(Ie=(Ae=v.parameters)==null?void 0:Ae.docs)==null?void 0:Ie.source}}};var xe,Se,he;g.parameters={...g.parameters,docs:{...(xe=g.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    icon: 'plus',
    tooltip: ''
  },
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>\r
      <ArvoFabButton variant="primary" icon="edit" tooltip="Unsaved changes" indicator="unsaved" />\r
      <ArvoFabButton variant="primary" icon="bell-o" tooltip="New alerts" indicator="new" />\r
      <ArvoFabButton variant="primary" icon="envelope" tooltip="Unread mail" indicator="unread" />\r
      <ArvoFabButton variant="primary" icon="plus" tooltip="Add (small dot)" indicator="unsaved" indicatorSize="sm" />\r
    </div>
}`,...(he=(Se=g.parameters)==null?void 0:Se.docs)==null?void 0:he.source}}};var we,Le,Be;b.parameters={...b.parameters,docs:{...(we=b.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    icon: 'plus',
    tooltip: ''
  },
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center',
    padding: 12
  }}>\r
      <ArvoFabButton variant="secondary" icon="paperclip" tooltip="Attach file" />\r
      <ArvoFabButton variant="secondary" icon="picture" tooltip="Insert image" />\r
      <ArvoFabButton variant="primary" icon="paper-plane-send" label="Send" tooltip="Send message" />\r
    </div>
}`,...(Be=(Le=b.parameters)==null?void 0:Le.docs)==null?void 0:Be.source}}};const Ne=["Default","Playground","PrimaryIconOnly","SecondaryIconOnly","PrimaryWithLabel","SecondaryWithLabel","Loading","Disabled","IndicatorUnsaved","IndicatorNew","IndicatorUnread","IndicatorSmall","AllVariants","IconOnlyVsWithLabel","AllIndicators","ChatComposerActions"],Ke=Object.freeze(Object.defineProperty({__proto__:null,AllIndicators:g,AllVariants:y,ChatComposerActions:b,Default:r,Disabled:c,IconOnlyVsWithLabel:v,IndicatorNew:p,IndicatorSmall:u,IndicatorUnread:m,IndicatorUnsaved:d,Loading:l,Playground:n,PrimaryIconOnly:t,PrimaryWithLabel:i,SecondaryIconOnly:o,SecondaryWithLabel:s,__namedExportsOrder:Ne,default:Ue},Symbol.toStringTag,{value:"Module"}));export{y as A,b as C,c as D,Ke as F,v as I,l as L,n as P,g as a};
