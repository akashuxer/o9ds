import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./iframe-BaOp0t6F.js";import{r as Ea}from"./index-BbVYX0ZH.js";import{c as Va}from"./index17-CEY5xPko.js";import{A as d}from"./Button-B8O_kk1m.js";import{A as La}from"./IconButton-BgwDUYzG.js";import{A as Ba}from"./Checkbox-k9WMnmR3.js";import{A as _a}from"./Textbox-BjaSSAvr.js";import{A as Ra}from"./Textarea-DHmHzhmJ.js";import{A as Ce}from"./Combobox-BRLEGBie.js";import{A as qa}from"./Select-BLh_A-b9.js";import{A as Na}from"./BannerAlert-DwOPtWj_.js";import{r as Fa}from"./inline-content-CllLfblQ.js";import{u as Pa}from"./useControllableState-BcENo7ec.js";import{u as Wa}from"./useOverlay-Bo9f1g6f.js";import{u as za}from"./useFocusTrap-BePVbEUc.js";import{r as Ma}from"./loading-flag-DkqmYwgU.js";const we={label:"OK"},Ya={label:"Cancel"};function Ia(n){return n==null||n===!1?null:n===!0?{}:n}const u=a.forwardRef(function({variant:t="warning",title:m,message:g,content:f,bannerAlert:M,isOpen:ua,defaultOpen:pa=!1,hasDangerAction:oe=!1,primaryAction:ma=we,secondaryAction:se,hasSecondaryBtn:ga=!0,hasPrimaryBtn:fa=!0,isClosable:le=!1,hasBackdrop:U=!0,closeOnBackdrop:ie=!1,closeOnEscape:ce=!0,confirmInput:o=null,dontShowAgain:va=null,isLoading:Ga=!1,isDisabled:D=!1,container:O=null,className:ba,onOpenChange:X,onOpen:G,onClose:Y,onConfirmInputChange:x,onDontShowAgainChange:I},ya){const de=Ma(),J=a.useId(),K=`arvo-alert-dlg-${J}`,ue=`arvo-alert-dlg-title-${J}`,pe=`arvo-alert-dlg-body-${J}`,H=a.useRef(null),Z=a.useRef(null),me=a.useRef(null);a.useImperativeHandle(ya,()=>H.current,[]);const[c,Q]=Pa(ua,pa),ee=(o==null?void 0:o.type)??"textbox",ae=ee==="multi-select",[$,ge]=a.useState(""),[re,fe]=a.useState([]),[ve,be]=a.useState(null),te=a.useMemo(()=>{if(!o)return{blocked:!1,error:null};const r=ae?re:$;if(ae){const i=o.expectedValues;if(i){const y=re;if(!(y.length===i.length&&i.every(T=>y.includes(T))))return{blocked:!0,error:null}}}else{const i=o.expectedValue;if(i!=null&&r!==i)return{blocked:!0,error:null}}const l=o.validate;if(l){const i=l(r);if(i===!1)return{blocked:!0,error:null};if(typeof i=="string")return{blocked:!0,error:i}}return{blocked:!1,error:null}},[o,$,re,ae]);a.useEffect(()=>{be(te.error)},[te.error]);const S=!!o&&te.blocked;a.useEffect(()=>{c||(ge(""),fe([]),be(null))},[c]);const ha=!fa&&t==="warning",p=Ia(va),[Aa,Da]=a.useState((p==null?void 0:p.defaultChecked)??!1),ne=Wa(),A=a.useCallback(r=>{c&&(Y==null?void 0:Y({reason:r}))!==!1&&Q(!1)},[c,Y,Q]),ye=a.useRef(c);a.useEffect(()=>{if(!ye.current&&c&&(G==null?void 0:G())===!1){Q(!1);return}ye.current=c},[c]);const he=a.useRef(!0);a.useEffect(()=>{if(he.current){he.current=!1;return}X==null||X(c)},[c]),a.useEffect(()=>{if(!(!c||!H.current))return ne.open({id:K,type:"modal",element:H.current,priority:10,config:{autoCloseOnOutsideClick:!1,managesOwnFocus:!0,managesOwnBackdrop:!0},onClose:()=>A("programmatic")}),()=>{ne.close(K)}},[c]),a.useEffect(()=>{if(!c||!U)return;const r=Va({blur:!0,zIndex:ne.getZIndex(K)-1,closeOnClick:ie,onOutside:()=>A("backdrop"),className:"arvo-alert-dlg__overlay-mask"});return me.current=r,r.show(),()=>{r.hide(),me.current=null}},[c,U,ie,A]),za(Z,{active:c,initialFocus:o?"none":"first",escapeDeactivates:!1,returnFocusOnDeactivate:!0,allowOutsideClick:!1}),a.useEffect(()=>{if(!c||!o)return;const r=window.setTimeout(()=>{var i;const l=(i=Z.current)==null?void 0:i.querySelector('.arvo-alert-dlg__confirm-input input, .arvo-alert-dlg__confirm-input textarea, .arvo-alert-dlg__confirm-input [role="combobox"]');l==null||l.focus({preventScroll:!0})},0);return()=>window.clearTimeout(r)},[c,o]),a.useEffect(()=>{if(!c)return;const r=l=>{l.key==="Escape"&&(l.stopPropagation(),ce&&A("escape"))};return document.addEventListener("keydown",r,!0),()=>document.removeEventListener("keydown",r,!0)},[c,ce,A]);const w=a.useCallback((r,l,i)=>{var h;((h=r.onClick)==null?void 0:h.call(r,i))!==!1&&r.closeOnClick!==!1&&A(l)},[A]),v=ma??we,b=se===null?null:se??Ya,xa=ga&&b!==null,Ca=a.useCallback(r=>{D||v.isDisabled||S||w(v,"primary",r)},[de,D,S,v,w]),wa=a.useCallback(r=>{b&&w(b,"secondary",r)},[b,w]),k=a.useCallback(r=>{ge(r);const l=o==null?void 0:o.onChange;l==null||l(r),x==null||x(r)},[o,x]),ka=a.useCallback(r=>{k(r.target.value)},[k]),Oa=a.useCallback(r=>{k(r.target.value)},[k]),Ae=a.useCallback(r=>{if(r.key==="Enter"&&!S){if(ee==="textarea"&&r.shiftKey)return;r.preventDefault(),w(v,"primary",r)}},[ee,S,v,w]),Sa=a.useCallback(r=>{var i;const l=r.isChecked;Da(l),(i=p==null?void 0:p.onChange)==null||i.call(p,l),I==null||I(l)},[p,I]),De=a.useMemo(()=>typeof document>"u"?null:O?typeof O=="string"?document.querySelector(O)??document.body:O:document.body,[O]);if(!c||!De)return null;const Ta=["arvo-alert-dlg",`arvo-alert-dlg--${t}`,U&&"arvo-alert-dlg--with-backdrop",oe&&"arvo-alert-dlg--danger",le&&"arvo-alert-dlg--closable","open",de,ba].filter(Boolean).join(" "),ja=(p==null?void 0:p.label)??"Don't show this again";let C=null;if(o){const r=o.label,l=o.placeholder,i=D,y=o.size??"lg";switch(o.type){case"textarea":{C=e.jsx(Ra,{size:y,isFullWidth:!0,label:r,placeholder:l,maxLength:o.maxLength,rows:o.rows,value:$,isDisabled:i,onChange:Oa,onKeyDown:Ae});break}case"combobox":{const h=o.options.map(s=>({id:s.id,label:s.label,value:s.value??s.id}));C=e.jsx(Ce,{size:y,isFullWidth:!0,label:r,placeholder:l,items:h,isDisabled:i,onChange:s=>k(s?String(s.value??s.id):"")});break}case"select":{const h=o.options.map(s=>({id:s.id,label:s.label,value:s.value??s.id}));C=e.jsx(qa,{size:y,isFullWidth:!0,label:r,placeholder:l,items:h,isDisabled:i,onChange:s=>k(s?String(s.value??s.id):"")});break}case"multi-select":{const h=o.options.map(s=>({id:s.id,label:s.label,value:s.value??s.id}));C=e.jsx(Ce,{size:y,isFullWidth:!0,label:r,placeholder:l,items:h,isDisabled:i,onChange:s=>{var xe;const T=s?[String(s.value??s.id)]:[];fe(T),(xe=o.onChange)==null||xe.call(o,T),x==null||x(T)}});break}case"textbox":default:{C=e.jsx(_a,{size:y,isFullWidth:!0,label:r,placeholder:l,maxLength:o.maxLength,value:$,isDisabled:i,onChange:ka,onKeyDown:Ae});break}}}return Ea.createPortal(e.jsx("div",{ref:H,className:Ta,children:e.jsxs("div",{ref:Z,id:K,className:"arvo-alert-dlg__panel",role:"alertdialog","aria-modal":"true","aria-labelledby":ue,"aria-describedby":pe,"aria-busy":void 0,tabIndex:-1,children:[e.jsxs("div",{className:"arvo-alert-dlg__header",children:[e.jsx("span",{className:"arvo-alert-dlg__ico o9con","aria-hidden":"true"}),e.jsx("p",{id:ue,className:"arvo-alert-dlg__title",children:m}),le&&e.jsx("span",{className:"arvo-alert-dlg__close-btn",children:e.jsx(La,{icon:"close",variant:"tertiary",size:"sm",tooltip:"Close","aria-label":"Close dialog",isDisabled:D,onClick:()=>A("close-button")})})]}),M&&e.jsx("div",{className:"arvo-alert-dlg__banner",children:e.jsx(Na,{...M})}),e.jsxs("div",{id:pe,className:"arvo-alert-dlg__body",children:[f??(g&&e.jsx("p",{className:"arvo-alert-dlg__msg",children:typeof g=="string"?g:Fa(g,{profile:"basic-inline"})})),C&&e.jsxs("div",{className:"arvo-alert-dlg__confirm-input",children:[C,ve&&e.jsx("p",{className:"arvo-alert-dlg__confirm-error",role:"alert",children:ve})]})]}),e.jsxs("div",{className:"arvo-alert-dlg__footer",children:[p&&e.jsx("div",{className:"arvo-alert-dlg__dont-show",children:e.jsx(Ba,{size:"sm",label:ja,isChecked:Aa,isDisabled:D,onChange:Sa})}),e.jsxs("div",{className:"arvo-alert-dlg__actions",children:[xa&&b&&e.jsx(d,{label:b.label,icon:b.icon,variant:"secondary",size:"md",isDisabled:D||b.isDisabled,isLoading:b.isLoading,onClick:wa}),!ha&&e.jsx(d,{label:v.label,icon:v.icon,variant:oe?"danger":"primary",size:"md",isDisabled:D||v.isDisabled||S,isLoading:v.isLoading,onClick:Ca})]})]})]})}),De)});u.__docgenInfo={description:"",methods:[],displayName:"ArvoAlertDialog",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'warning'
| 'info'
| 'positive'
| 'negative'
| 'block'`,elements:[{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'positive'"},{name:"literal",value:"'negative'"},{name:"literal",value:"'block'"}]},description:"",defaultValue:{value:"'warning'",computed:!1}},title:{required:!0,tsType:{name:"string"},description:""},message:{required:!1,tsType:{name:"BasicInlineContent"},description:"Body message. Plain string OR a `BasicInlineContent` array\n(`InlineNode[]`) from `@arvo/core/inline-content`. Allowed inline runs:\ntext, em, strong, link, code, kbd. Ignored when `content` is set."},content:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},bannerAlert:{required:!1,tsType:{name:"ArvoBannerAlertProps"},description:"Optional `ArvoBannerAlert` rendered between the header and the body.\nPass an `ArvoBannerAlertProps` object; the dialog renders the banner\ninternally (consumers do not construct JSX)."},isOpen:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasDangerAction:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},primaryAction:{required:!1,tsType:{name:"ArvoAlertDialogAction"},description:"",defaultValue:{value:"{ label: 'OK' }",computed:!1}},secondaryAction:{required:!1,tsType:{name:"union",raw:"ArvoAlertDialogAction | null",elements:[{name:"ArvoAlertDialogAction"},{name:"null"}]},description:""},hasSecondaryBtn:{required:!1,tsType:{name:"boolean"},description:"Whether the secondary (cancel-style) button is rendered. Defaults to\n`true`.",defaultValue:{value:"true",computed:!1}},hasPrimaryBtn:{required:!1,tsType:{name:"boolean"},description:"Whether the primary (confirm) button is rendered. Defaults to `true`.\nOnly honored when `variant: 'warning'`; ignored for other variants\nwith a one-shot dev warning.",defaultValue:{value:"true",computed:!1}},isClosable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasBackdrop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnBackdrop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},confirmInput:{required:!1,tsType:{name:"union",raw:"ArvoAlertDialogConfirmInput | null",elements:[{name:"union",raw:`| ArvoAlertDialogConfirmInputTextbox
| ArvoAlertDialogConfirmInputTextarea
| ArvoAlertDialogConfirmInputCombobox
| ArvoAlertDialogConfirmInputSelect
| ArvoAlertDialogConfirmInputMultiSelect`,elements:[{name:"ArvoAlertDialogConfirmInputTextbox"},{name:"ArvoAlertDialogConfirmInputTextarea"},{name:"ArvoAlertDialogConfirmInputCombobox"},{name:"ArvoAlertDialogConfirmInputSelect"},{name:"ArvoAlertDialogConfirmInputMultiSelect"}]},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},dontShowAgain:{required:!1,tsType:{name:"union",raw:"ArvoAlertDialogDontShow | boolean | null",elements:[{name:"ArvoAlertDialogDontShow"},{name:"boolean"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},container:{required:!1,tsType:{name:"union",raw:"HTMLElement | string | null",elements:[{name:"HTMLElement"},{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void | false",signature:{arguments:[],return:{name:"union",raw:"void | false",elements:[{name:"void"},{name:"literal",value:"false"}]}}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: { reason: ArvoAlertDialogCloseReason }) => void | false",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ reason: ArvoAlertDialogCloseReason }",signature:{properties:[{key:"reason",value:{name:"union",raw:`| 'primary'
| 'secondary'
| 'close-button'
| 'escape'
| 'backdrop'
| 'programmatic'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'close-button'"},{name:"literal",value:"'escape'"},{name:"literal",value:"'backdrop'"},{name:"literal",value:"'programmatic'"}],required:!0}}]}},name:"detail"}],return:{name:"union",raw:"void | false",elements:[{name:"void"},{name:"literal",value:"false"}]}}},description:""},onConfirmInputChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},onDontShowAgainChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""}}};const Ka={title:"Overlays/AlertDialog",component:u,tags:["!dev","beta"],argTypes:{variant:{control:{type:"select"},options:["warning","info","success","error","block"],description:"Semantic variant controlling the header icon glyph and color",table:{defaultValue:{summary:"warning"}}},title:{control:{type:"text"},description:"Header title text. Sets aria-labelledby on the panel."},message:{control:{type:"text"},description:"Body message text."},hasDangerAction:{control:{type:"boolean"},description:"Render primary action as a danger (red) button",table:{defaultValue:{summary:"false"}}},hasSecondaryBtn:{control:{type:"boolean"},description:"Show the secondary (Cancel) button",table:{defaultValue:{summary:"true"}}},isClosable:{control:{type:"boolean"},description:"Render an X close icon button in the header",table:{defaultValue:{summary:"false"}}},hasBackdrop:{control:{type:"boolean"},description:"Render the backdrop scrim behind the panel",table:{defaultValue:{summary:"true"}}},closeOnBackdrop:{control:{type:"boolean"},description:"Close dialog when backdrop is clicked",table:{defaultValue:{summary:"false"}}},closeOnEscape:{control:{type:"boolean"},description:"Close dialog when Escape key is pressed",table:{defaultValue:{summary:"true"}}},isLoading:{control:{type:"boolean"},description:"Pattern B structured skeleton loading state",table:{defaultValue:{summary:"false"}}},isDisabled:{control:{type:"boolean"},description:"Disable all action buttons and confirm input",table:{defaultValue:{summary:"false"}}},onOpenChange:{action:"openChanged",description:"`(open: boolean) => void` -- fires whenever open state changes",table:{category:"Events"}},onClose:{action:"closed",description:"`(detail: { reason }) => void | false` -- fires before closing; return false to cancel",table:{category:"Events"}}},args:{variant:"warning",title:"Confirm Action",message:"Are you sure you want to proceed?",hasDangerAction:!1,hasSecondaryBtn:!0,isClosable:!1,hasBackdrop:!0,closeOnBackdrop:!1,closeOnEscape:!0,isLoading:!1,isDisabled:!1},parameters:{docs:{description:{component:`Consolidated CSF for ArvoAlertDialog. All stories are docs-only\r
(\`tags: ['!dev', ...]\`): they render on the attached \`AlertDialog.mdx\` page\r
(the single sidebar node), not as their own sidebar leaves.\r

Buckets within this file:\r
  - Playground / Default            -- live controls + the basic recipe\r
  - Features (variants, danger, confirm input, don't show again)\r
  - Examples (destructive delete, info + don't show, loading)`}}}},da=n=>{const[t,m]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{label:"Open Alert Dialog",variant:"secondary",onClick:()=>m(!0)}),e.jsx(u,{...n,isOpen:t,onOpenChange:m,onClose:g=>{var f;m(!1),(f=n.onClose)==null||f.call(n,g)}})]})},j={render:n=>e.jsx(da,{...n})},E={args:{title:"Confirm Action",message:"Are you sure you want to proceed?"},render:n=>e.jsx(da,{...n})},V={name:"Warning Variant",args:{title:""},render:()=>{const[n,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{label:"Warning",variant:"secondary",onClick:()=>t(!0)}),e.jsx(u,{variant:"warning",title:"Confirm Change",message:"This change will affect all users in your organisation. Are you sure you want to continue?",primaryAction:{label:"Continue"},secondaryAction:{label:"Cancel"},isOpen:n,onOpenChange:t})]})}},L={name:"Info Variant",args:{title:""},render:()=>{const[n,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{label:"Info",variant:"secondary",onClick:()=>t(!0)}),e.jsx(u,{variant:"info",title:"Data Sync Required",message:"Your data will be synchronised with the server. This may take a few minutes during which the application will be read-only.",primaryAction:{label:"OK"},secondaryAction:{label:"Cancel"},isOpen:n,onOpenChange:t})]})}},B={name:"Success Variant",args:{title:""},render:()=>{const[n,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{label:"Positive",variant:"secondary",onClick:()=>t(!0)}),e.jsx(u,{variant:"positive",title:"Changes Saved",message:"Your settings have been saved successfully and will take effect on the next login.",primaryAction:{label:"Done"},hasSecondaryBtn:!1,isOpen:n,onOpenChange:t})]})}},_={name:"Error Variant",args:{title:""},render:()=>{const[n,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{label:"Negative",variant:"secondary",onClick:()=>t(!0)}),e.jsx(u,{variant:"negative",title:"Operation Failed",message:"The operation could not be completed due to a server error. Please try again later or contact support if the problem persists.",primaryAction:{label:"Close"},hasSecondaryBtn:!1,isOpen:n,onOpenChange:t})]})}},R={name:"Block Variant",args:{title:""},render:()=>{const[n,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{label:"Block",variant:"secondary",onClick:()=>t(!0)}),e.jsx(u,{variant:"block",title:"Access Restricted",message:"You do not have the required permissions to perform this action. Contact your administrator to request access.",primaryAction:{label:"Acknowledge"},hasSecondaryBtn:!1,isOpen:n,onOpenChange:t})]})}},q={name:"Danger Action",args:{title:""},render:()=>{const[n,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{label:"Delete Record",variant:"secondary",onClick:()=>t(!0)}),e.jsx(u,{variant:"warning",title:"Delete Record",message:"This record will be permanently deleted and cannot be recovered. All linked reports and integrations will be removed.",hasDangerAction:!0,primaryAction:{label:"Delete"},secondaryAction:{label:"Cancel"},isOpen:n,onOpenChange:t})]})}},N={name:"Confirm Input",args:{title:""},render:()=>{const[n,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{label:"Delete Workspace",variant:"secondary",onClick:()=>t(!0)}),e.jsx(u,{variant:"warning",title:"Delete Workspace",message:"This workspace and all its projects will be permanently deleted. Type DELETE to confirm.",hasDangerAction:!0,primaryAction:{label:"Delete"},secondaryAction:{label:"Cancel"},confirmInput:{label:"Type DELETE to confirm",placeholder:"DELETE",expectedValue:"DELETE"},isOpen:n,onOpenChange:t})]})}},F={name:"Don't Show Again",args:{title:""},render:()=>{const[n,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{label:"Export Data",variant:"secondary",onClick:()=>t(!0)}),e.jsx(u,{variant:"info",title:"Export Notice",message:"Large exports may take several minutes to process. You will receive an email notification when the export is complete and ready to download.",primaryAction:{label:"Export"},secondaryAction:{label:"Cancel"},dontShowAgain:{label:"Don't show this again"},isOpen:n,onOpenChange:t})]})}},Ha=()=>{const[n,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{label:"Delete Project",variant:"danger",onClick:()=>t(!0)}),e.jsx(u,{variant:"warning",title:"Delete Project",message:"Type DELETE to confirm that you want to permanently remove this project and all associated data. This action cannot be undone.",hasDangerAction:!0,primaryAction:{label:"Delete"},secondaryAction:{label:"Cancel"},confirmInput:{label:"Type DELETE to confirm",placeholder:"DELETE",expectedValue:"DELETE"},isOpen:n,onOpenChange:t})]})},P={args:{title:""},render:()=>e.jsx(Ha,{})},$a=()=>{const[n,t]=a.useState(!1),[m,g]=a.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:[e.jsx(d,{label:m?"Schedule Maintenance (suppressed)":"Schedule Maintenance",variant:"secondary",isDisabled:m,onClick:()=>t(!0)}),m&&e.jsx(d,{label:"Reset preference",variant:"tertiary",onClick:()=>g(!1)}),e.jsx(u,{variant:"info",title:"Scheduled Maintenance",message:"The system will be unavailable Sunday 02:00 - 04:00 UTC for scheduled maintenance. Save your work before this window begins.",primaryAction:{label:"Got it"},hasSecondaryBtn:!1,dontShowAgain:{label:"Don't show this again"},isOpen:n,onOpenChange:t,onDontShowAgainChange:f=>g(f)})]})},W={name:"Info + Don't Show Again",args:{title:""},render:()=>e.jsx($a,{})},Ua=()=>{const[n,t]=a.useState(!1),[m,g]=a.useState(!1),f=()=>{g(!0),setTimeout(()=>{g(!1),t(!1)},2e3)};return e.jsxs(e.Fragment,{children:[e.jsx(d,{label:"Delete Record",variant:"secondary",onClick:()=>t(!0)}),e.jsx(u,{variant:"warning",title:"Delete Record",message:"This record will be permanently deleted. Click Delete to confirm.",hasDangerAction:!0,primaryAction:{label:"Delete",onClick:f,closeOnClick:!1},secondaryAction:{label:"Cancel"},isLoading:m,isOpen:n,onOpenChange:M=>{m||t(M)}})]})},z={args:{title:""},render:()=>e.jsx(Ua,{})};var ke,Oe,Se;j.parameters={...j.parameters,docs:{...(ke=j.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: args => <AlertDialogStory {...args} />
}`,...(Se=(Oe=j.parameters)==null?void 0:Oe.docs)==null?void 0:Se.source}}};var Te,je,Ee;E.parameters={...E.parameters,docs:{...(Te=E.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    title: 'Confirm Action',
    message: 'Are you sure you want to proceed?'
  },
  render: args => <AlertDialogStory {...args} />
}`,...(Ee=(je=E.parameters)==null?void 0:je.docs)==null?void 0:Ee.source}}};var Ve,Le,Be;V.parameters={...V.parameters,docs:{...(Ve=V.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  name: 'Warning Variant',
  args: {
    title: ''
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <ArvoButton label="Warning" variant="secondary" onClick={() => setOpen(true)} />\r
        <ArvoAlertDialog variant="warning" title="Confirm Change" message="This change will affect all users in your organisation. Are you sure you want to continue?" primaryAction={{
        label: 'Continue'
      }} secondaryAction={{
        label: 'Cancel'
      }} isOpen={open} onOpenChange={setOpen} />\r
      </>;
  }
}`,...(Be=(Le=V.parameters)==null?void 0:Le.docs)==null?void 0:Be.source}}};var _e,Re,qe;L.parameters={...L.parameters,docs:{...(_e=L.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  name: 'Info Variant',
  args: {
    title: ''
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <ArvoButton label="Info" variant="secondary" onClick={() => setOpen(true)} />\r
        <ArvoAlertDialog variant="info" title="Data Sync Required" message="Your data will be synchronised with the server. This may take a few minutes during which the application will be read-only." primaryAction={{
        label: 'OK'
      }} secondaryAction={{
        label: 'Cancel'
      }} isOpen={open} onOpenChange={setOpen} />\r
      </>;
  }
}`,...(qe=(Re=L.parameters)==null?void 0:Re.docs)==null?void 0:qe.source}}};var Ne,Fe,Pe;B.parameters={...B.parameters,docs:{...(Ne=B.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  name: 'Success Variant',
  args: {
    title: ''
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <ArvoButton label="Positive" variant="secondary" onClick={() => setOpen(true)} />\r
        <ArvoAlertDialog variant="positive" title="Changes Saved" message="Your settings have been saved successfully and will take effect on the next login." primaryAction={{
        label: 'Done'
      }} hasSecondaryBtn={false} isOpen={open} onOpenChange={setOpen} />\r
      </>;
  }
}`,...(Pe=(Fe=B.parameters)==null?void 0:Fe.docs)==null?void 0:Pe.source}}};var We,ze,Me;_.parameters={..._.parameters,docs:{...(We=_.parameters)==null?void 0:We.docs,source:{originalSource:`{
  name: 'Error Variant',
  args: {
    title: ''
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <ArvoButton label="Negative" variant="secondary" onClick={() => setOpen(true)} />\r
        <ArvoAlertDialog variant="negative" title="Operation Failed" message="The operation could not be completed due to a server error. Please try again later or contact support if the problem persists." primaryAction={{
        label: 'Close'
      }} hasSecondaryBtn={false} isOpen={open} onOpenChange={setOpen} />\r
      </>;
  }
}`,...(Me=(ze=_.parameters)==null?void 0:ze.docs)==null?void 0:Me.source}}};var Ye,Ie,Ke;R.parameters={...R.parameters,docs:{...(Ye=R.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  name: 'Block Variant',
  args: {
    title: ''
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <ArvoButton label="Block" variant="secondary" onClick={() => setOpen(true)} />\r
        <ArvoAlertDialog variant="block" title="Access Restricted" message="You do not have the required permissions to perform this action. Contact your administrator to request access." primaryAction={{
        label: 'Acknowledge'
      }} hasSecondaryBtn={false} isOpen={open} onOpenChange={setOpen} />\r
      </>;
  }
}`,...(Ke=(Ie=R.parameters)==null?void 0:Ie.docs)==null?void 0:Ke.source}}};var He,$e,Ue;q.parameters={...q.parameters,docs:{...(He=q.parameters)==null?void 0:He.docs,source:{originalSource:`{
  name: 'Danger Action',
  args: {
    title: ''
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <ArvoButton label="Delete Record" variant="secondary" onClick={() => setOpen(true)} />\r
        <ArvoAlertDialog variant="warning" title="Delete Record" message="This record will be permanently deleted and cannot be recovered. All linked reports and integrations will be removed." hasDangerAction primaryAction={{
        label: 'Delete'
      }} secondaryAction={{
        label: 'Cancel'
      }} isOpen={open} onOpenChange={setOpen} />\r
      </>;
  }
}`,...(Ue=($e=q.parameters)==null?void 0:$e.docs)==null?void 0:Ue.source}}};var Xe,Ge,Je;N.parameters={...N.parameters,docs:{...(Xe=N.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  name: 'Confirm Input',
  args: {
    title: ''
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <ArvoButton label="Delete Workspace" variant="secondary" onClick={() => setOpen(true)} />\r
        <ArvoAlertDialog variant="warning" title="Delete Workspace" message="This workspace and all its projects will be permanently deleted. Type DELETE to confirm." hasDangerAction primaryAction={{
        label: 'Delete'
      }} secondaryAction={{
        label: 'Cancel'
      }} confirmInput={{
        label: 'Type DELETE to confirm',
        placeholder: 'DELETE',
        expectedValue: 'DELETE'
      }} isOpen={open} onOpenChange={setOpen} />\r
      </>;
  }
}`,...(Je=(Ge=N.parameters)==null?void 0:Ge.docs)==null?void 0:Je.source}}};var Ze,Qe,ea;F.parameters={...F.parameters,docs:{...(Ze=F.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  name: "Don't Show Again",
  args: {
    title: ''
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <ArvoButton label="Export Data" variant="secondary" onClick={() => setOpen(true)} />\r
        <ArvoAlertDialog variant="info" title="Export Notice" message="Large exports may take several minutes to process. You will receive an email notification when the export is complete and ready to download." primaryAction={{
        label: 'Export'
      }} secondaryAction={{
        label: 'Cancel'
      }} dontShowAgain={{
        label: "Don't show this again"
      }} isOpen={open} onOpenChange={setOpen} />\r
      </>;
  }
}`,...(ea=(Qe=F.parameters)==null?void 0:Qe.docs)==null?void 0:ea.source}}};var aa,ra,ta;P.parameters={...P.parameters,docs:{...(aa=P.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  args: {
    title: ''
  },
  render: () => <DestructiveDeleteDemo />
}`,...(ta=(ra=P.parameters)==null?void 0:ra.docs)==null?void 0:ta.source}}};var na,oa,sa;W.parameters={...W.parameters,docs:{...(na=W.parameters)==null?void 0:na.docs,source:{originalSource:`{
  name: "Info + Don't Show Again",
  args: {
    title: ''
  },
  render: () => <InfoWithDontShowDemo />
}`,...(sa=(oa=W.parameters)==null?void 0:oa.docs)==null?void 0:sa.source}}};var la,ia,ca;z.parameters={...z.parameters,docs:{...(la=z.parameters)==null?void 0:la.docs,source:{originalSource:`{
  args: {
    title: ''
  },
  render: () => <LoadingStateDemo />
}`,...(ca=(ia=z.parameters)==null?void 0:ia.docs)==null?void 0:ca.source}}};const Xa=["Playground","Default","WarningVariant","InfoVariant","PositiveVariant","NegativeVariant","BlockVariant","DangerAction","ConfirmInput","DontShowAgain","DestructiveDelete","InfoWithDontShow","LoadingState"],gr=Object.freeze(Object.defineProperty({__proto__:null,BlockVariant:R,ConfirmInput:N,DangerAction:q,Default:E,DestructiveDelete:P,DontShowAgain:F,InfoVariant:L,InfoWithDontShow:W,LoadingState:z,NegativeVariant:_,Playground:j,PositiveVariant:B,WarningVariant:V,__namedExportsOrder:Xa,default:Ka},Symbol.toStringTag,{value:"Module"}));export{gr as A,R as B,N as C,q as D,L as I,z as L,_ as N,j as P,V as W,B as a,F as b,P as c,W as d};
