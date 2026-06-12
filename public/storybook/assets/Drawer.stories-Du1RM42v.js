import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as t,y as Ds,z as Ts}from"./iframe-BaOp0t6F.js";import{r as Rs}from"./index-BbVYX0ZH.js";import{c as Ps}from"./index17-CEY5xPko.js";import{P as Ms,s as Ls,a as js,m as l,b as xe,c as Es,d as Fs}from"./sample-content-DZHJz4uL.js";import{u as Hs}from"./useControllableState-BcENo7ec.js";import{u as Bs}from"./useFocusTrap-BePVbEUc.js";import{u as qs}from"./useOverlay-Bo9f1g6f.js";import{r as Is}from"./loading-flag-DkqmYwgU.js";import{A as O}from"./Button-B8O_kk1m.js";import{A as Le}from"./Textbox-BjaSSAvr.js";import{A as es}from"./Select-BLh_A-b9.js";import{A as je}from"./Switch-BDE_dn2p.js";import{A as Ns}from"./Checkbox-k9WMnmR3.js";function Ws(){if(typeof document>"u")return()=>{};if(B+=1,B===1){const i=document.documentElement,n=document.body;R.htmlOverflow=i.style.overflow,R.bodyOverflow=n.style.overflow,i.style.overflow="hidden",n.style.overflow="hidden"}let s=!1;return function(){if(!s&&(s=!0,B=Math.max(0,B-1),B===0)){const n=document.documentElement,c=document.body;n.style.overflow=R.htmlOverflow,c.style.overflow=R.bodyOverflow,R.htmlOverflow="",R.bodyOverflow=""}}}let B=0;const R={htmlOverflow:"",bodyOverflow:""};function Oe(s){if(s!=null)return typeof s=="number"?`${s}px`:s}function Vs(s,i){return s===void 0||s===!1?{hasMask:!1,opacity:null,blur:!1,closeOnClick:i}:s===!0?{hasMask:!0,opacity:null,blur:!1,closeOnClick:i}:{hasMask:!0,opacity:typeof s.opacity=="number"?s.opacity:null,blur:s.blur===!0,closeOnClick:s.closeOnClick??i}}function Ks(s){return s==="top"||s==="bottom"?"right":s}function $e(s){return typeof document>"u"?null:s==null?document.body:typeof s=="function"?s():s}function _s(s,i){const{side:n="right",isOpen:c,defaultOpen:m=!1,onOpenChange:h,onOpen:y,onClose:k,hasMask:v=!1,closeOnEscape:u=!0,closeOnOutsideClick:f,closeOnMaskClick:S=!0,lockScroll:ye="auto",container:g,width:fe=320,minWidth:ge=280,maxWidth:Ee="80vw",height:Fe=null,animationDuration:x,ariaLabel:He,ariaLabelledBy:ts,isClosable:Be=!0,isDisabled:D=!1,isLoading:Gs=!1,className:ss,children:rs,instanceRef:ns,title:De=null,hasHeader:os=!0,hasBackButton:is=!1,onBack:ls,headerActions:cs,stickyHeader:ds=!1,actions:us=!1,hasFooter:zs,searchQuery:ps,defaultSearchQuery:ms,onSearchChange:hs,onTabSelect:ys,...fs}=s,be=Is(),gs=Ks(n),qe=f!==void 0?f:S,p=t.useMemo(()=>Vs(v,qe),[v,qe]),Ie=ye==="auto"?p.hasMask:ye===!0,T=t.useRef(null),ke=t.useRef(null),b=t.useRef(null),ve=t.useRef(null),Se=t.useRef(null),Ne=t.useRef(null),F=qs(),Te=`arvo-drw-${t.useId()}`;t.useImperativeHandle(i,()=>T.current,[]);const[bs,Re]=t.useState(!1),[o,We]=Hs(c,m),Ve=t.useRef(o);Ve.current=o;const we=t.useCallback(a=>{a!==o&&(We(a),h==null||h(a))},[o,h,We]),[Ke,ks]=t.useState(()=>$e(g));t.useEffect(()=>{ks($e(g))},[g]);const Ce=t.useCallback(()=>{o||(y==null?void 0:y())!==!1&&(typeof document<"u"&&(ve.current=document.activeElement),we(!0))},[o,y,we]),w=t.useCallback((a="programmatic")=>{!o||k!==void 0&&k(a)===!1||(Pe.current=a,we(!1))},[o,k,we]),Pe=t.useRef("programmatic"),_e=t.useCallback(()=>{o?w("programmatic"):Ce()},[o,Ce,w]),Qe=t.useRef(o);t.useEffect(()=>{const a=Qe.current;if(Qe.current=o,o===a)return;const r=T.current,d=ke.current;if(o)x&&d&&d.style.setProperty("--arvo-drw-slide-duration",`${x}ms`),r?Ds({element:r,type:"fade"}).then(()=>{Re(!0),d==null||d.dispatchEvent(new CustomEvent("drw:open",{bubbles:!0}))}):Re(!0);else{Re(!1);const A=Pe.current;Pe.current="programmatic";const H=()=>{d==null||d.dispatchEvent(new CustomEvent("drw:close",{bubbles:!0,detail:{reason:A}}));const Me=ve.current;if(ve.current=null,Me&&typeof Me.focus=="function")try{Me.focus({preventScroll:!0})}catch{}};r?Ts({element:r,type:"fade"}).then(H):H()}},[o,x]),t.useEffect(()=>(o&&Ie&&(Se.current=Ws()),()=>{Se.current&&(Se.current(),Se.current=null)}),[o,Ie]),Bs(ke,{active:o&&bs&&!D,initialFocus:"first",escapeDeactivates:!1,returnFocusOnDeactivate:!1,allowOutsideClick:!0}),t.useEffect(()=>{if(!o||!u)return;const a=r=>{r.key==="Escape"&&(r.stopPropagation(),w("escape"))};return document.addEventListener("keydown",a,!0),()=>document.removeEventListener("keydown",a,!0)},[o,u,w]);const Ae=t.useCallback(()=>{const a=ke.current;a==null||a.dispatchEvent(new CustomEvent("drw:mask-click",{bubbles:!0})),p.closeOnClick&&w("mask-click")},[p.closeOnClick,w]);t.useEffect(()=>{if(!(!o||!T.current))return F.open({id:Te,type:"side-panel",element:T.current,priority:0,config:{autoCloseOnOutsideClick:!1,managesOwnFocus:!0,managesOwnBackdrop:!0},onClose:()=>{Ve.current&&w("programmatic")}}),()=>{F.close(Te)}},[o]),t.useEffect(()=>{if(!o||!p.hasMask)return;const a=Ps({blur:p.blur,opacity:p.opacity??void 0,zIndex:F.getZIndex(Te)-1,closeOnClick:p.closeOnClick,onOutside:()=>Ae(),className:"arvo-drw__overlay-mask"});return Ne.current=a,a.show(),()=>{a.hide(),Ne.current=null}},[o,p.hasMask,p.blur,p.opacity,p.closeOnClick,Ae]),t.useEffect(()=>{if(!o||p.hasMask||!p.closeOnClick)return;const a=r=>{var A;const d=r.target;d&&(F.isOverlayClickInside(T.current,d)||(A=ve.current)!=null&&A.contains(d)||Ae())};return document.addEventListener("pointerdown",a,!0),()=>{document.removeEventListener("pointerdown",a,!0)}},[o,p.hasMask,p.closeOnClick,Ae,F]),t.useImperativeHandle(ns,()=>({open:()=>Ce(),close:a=>w(a??"programmatic"),toggle:()=>_e(),isOpen:()=>o,setStickyHeader:a=>{var r;return(r=b.current)==null?void 0:r.setStickyHeader(a)},setHeaderActions:a=>{var r;return(r=b.current)==null?void 0:r.setHeaderActions(a)},setActions:a=>{var r;return(r=b.current)==null?void 0:r.setActions(a)},setInfo:a=>{var r;return(r=b.current)==null?void 0:r.setInfo(a)},updateAction:(a,r)=>{var d;return(d=b.current)==null?void 0:d.updateAction(a,r)},search(a){var r,d;if(a===void 0)return((r=b.current)==null?void 0:r.search())??"";(d=b.current)==null||d.search(a)},selectedTab(a){var r,d;if(a===void 0)return((r=b.current)==null?void 0:r.selectedTab())??null;(d=b.current)==null||d.selectedTab(a)},setTitle:a=>{var r;return(r=b.current)==null?void 0:r.setTitle(a)},loading(a){var r;if(a===void 0)return be;(r=b.current)==null||r.loading(a)},disabled(a){var r;if(a===void 0)return D;(r=b.current)==null||r.disabled(a)},focus:a=>{var r;return(r=b.current)==null?void 0:r.focus(a)}}),[Ce,w,_e,o,be,D]);const vs=["arvo-drw",`arvo-drw--side-${gs}`,p.hasMask&&"arvo-drw--with-mask",o&&"open",be,D&&"is-disabled",ss].filter(Boolean).join(" "),Ss=t.useMemo(()=>{const a={},r=Oe(fe),d=Oe(ge),A=Oe(Ee),H=Oe(Fe);return r&&(a["--arvo-drw-width"]=r),d&&(a["--arvo-drw-min-width"]=d),A&&(a["--arvo-drw-max-width"]=A),H&&(a["--arvo-drw-height"]=H),x&&(a["--arvo-drw-slide-duration"]=`${x}ms`),a},[fe,ge,Ee,Fe,x]),ws=p.hasMask?"true":"false",Cs=o?void 0:!0,As=!De&&He?He:void 0,Os=ts;if(!Ke)return null;const xs=e.jsx(e.Fragment,{children:e.jsx("div",{ref:T,className:vs,style:Ss,...fs,children:e.jsx("div",{ref:ke,className:"arvo-drw__pane",role:"dialog","aria-modal":ws,"aria-hidden":Cs,"aria-busy":void 0,"aria-disabled":D||void 0,"aria-label":As,"aria-labelledby":Os,children:e.jsx(Ms,{ref:b,parentBlock:"arvo-drw",title:De,hasHeader:os,hasBackButton:is,onBack:ls,headerActions:cs,stickyHeader:ds,actions:us,isClosable:Be,onClose:()=>w("close-button"),isLoading:be,isDisabled:D,isClosableCount:Be?1:0,searchQuery:ps,defaultSearchQuery:ms,onSearchChange:hs,onTabSelect:ys,children:rs})})})});return Rs.createPortal(xs,Ke)}const C=t.forwardRef(_s);C.displayName="ArvoDrawer";C.__docgenInfo={description:"",methods:[],displayName:"ArvoDrawer",props:{side:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""},isOpen:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => boolean | void",signature:{arguments:[],return:{name:"union",raw:"boolean | void",elements:[{name:"boolean"},{name:"void"}]}}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: ArvoDrawerCloseReason) => boolean | void",signature:{arguments:[{type:{name:"union",raw:`| 'escape'
| 'mask-click'
| 'close-button'
| 'programmatic'`,elements:[{name:"literal",value:"'escape'"},{name:"literal",value:"'mask-click'"},{name:"literal",value:"'close-button'"},{name:"literal",value:"'programmatic'"}]},name:"reason"}],return:{name:"union",raw:"boolean | void",elements:[{name:"boolean"},{name:"void"}]}}},description:""},hasMask:{required:!1,tsType:{name:"union",raw:"boolean | ArvoDrawerMaskConfig",elements:[{name:"boolean"},{name:"ArvoDrawerMaskConfig"}]},description:""},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:""},closeOnOutsideClick:{required:!1,tsType:{name:"boolean"},description:"Whether clicking outside the drawer pane closes it. Defaults to `true`\nand applies in BOTH masked and mask-less configurations -- the prop\ncontrols dismissal behavior, not whether a scrim is painted. The\nlegacy `closeOnMaskClick` name is preserved for source compatibility;\n`closeOnOutsideClick` is the new canonical name."},closeOnMaskClick:{required:!1,tsType:{name:"boolean"},description:"@deprecated Use `closeOnOutsideClick`; both are honored, this is the older name."},lockScroll:{required:!1,tsType:{name:"union",raw:"boolean | 'auto'",elements:[{name:"boolean"},{name:"literal",value:"'auto'"}]},description:""},container:{required:!1,tsType:{name:"union",raw:"HTMLElement | (() => HTMLElement) | null",elements:[{name:"HTMLElement"},{name:"unknown"},{name:"null"}]},description:""},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},minWidth:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number | null",elements:[{name:"string"},{name:"number"},{name:"null"}]},description:""},animationDuration:{required:!1,tsType:{name:"number"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},isClosable:{required:!1,tsType:{name:"boolean"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},instanceRef:{required:!1,tsType:{name:"Ref",elements:[{name:"ArvoDrawerHandle"}],raw:"Ref<ArvoDrawerHandle>"},description:"Forwarded to the imperative handle. The forwarded `ref` always points to\nthe host `.arvo-drw` element; use `instanceRef` for the imperative API."},title:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},hasHeader:{required:!1,tsType:{name:"boolean"},description:""},hasBackButton:{required:!1,tsType:{name:"boolean"},description:""},onBack:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},headerActions:{required:!1,tsType:{name:"Array",elements:[{name:"ArvoPanelHeaderAction"}],raw:"ArvoPanelHeaderAction[]"},description:""},stickyHeader:{required:!1,tsType:{name:"union",raw:"ArvoPanelStickyHeaderConfig | false",elements:[{name:"ArvoPanelStickyHeaderConfig"},{name:"literal",value:"false"}]},description:""},actions:{required:!1,tsType:{name:"union",raw:"ArvoPanelAction[] | false",elements:[{name:"Array",elements:[{name:"ArvoPanelAction"}],raw:"ArvoPanelAction[]"},{name:"literal",value:"false"}]},description:""},hasFooter:{required:!1,tsType:{name:"boolean"},description:""},searchQuery:{required:!1,tsType:{name:"string"},description:""},defaultSearchQuery:{required:!1,tsType:{name:"string"},description:""},onSearchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string, matchedCount: number | null) => void",signature:{arguments:[{type:{name:"string"},name:"query"},{type:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},name:"matchedCount"}],return:{name:"void"}}},description:"Fired when the search query changes. `matchedCount` is `null` (the drawer\ndoes not own the body content); compute and surface your own filtered\ncount via the `setInfo()` handle method or a reactive `stickyHeader`."},onTabSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}},composes:["Omit"]};function as(){const s=["Q1 Demand Forecast","Q2 Revenue Projection","Annual Capacity Plan","Holiday Lift Adjustment","Supplier Risk Heatmap","Pricing Sensitivity Model","Account Plan Review"];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:16},children:s.map(i=>e.jsx("div",{style:{padding:8},children:i},i))})}const E={banner:{type:"info",message:"Plan locked. Edits will require approval before publishing.",isDismissible:!0},tabs:[{id:"all",label:"All",icon:"globe"},{id:"mine",label:"Mine"},{id:"shared",label:"Shared with me"},{id:"archive",label:"Archive",icon:"history"}],search:{placeholder:"Search forecasts...",shortcut:"Ctrl+K"},info:{type:"info",message:"Type in the search field to filter the list."}},Ue=[{id:"sku-1",name:"Atlas Trail Runner - Mens 9",status:"flagged"},{id:"sku-2",name:"Nimbus Rain Shell - Large",status:"open"},{id:"sku-3",name:"Summit Insulated Bottle 1L",status:"approved"},{id:"sku-4",name:"Cirrus Lightweight Tent 2P",status:"flagged"},{id:"sku-5",name:"Vector Carbon Trekking Poles",status:"open"},{id:"sku-6",name:"Harbor Merino Base Layer - M",status:"approved"},{id:"sku-7",name:"Drift Packable Daypack 22L",status:"open"},{id:"sku-8",name:"Forge Cast Iron Skillet 10in",status:"approved"},{id:"sku-9",name:"Glacier Cooler Tote 30 Can",status:"flagged"},{id:"sku-10",name:"Meridian GPS Watch Series 4",status:"open"},{id:"sku-11",name:"Pioneer Camp Chair - Folding",status:"approved"},{id:"sku-12",name:"Solstice Headlamp 400 Lumen",status:"open"}];function Qs(s){return s==="flagged"?"flag":s==="approved"?"check-circle":"circle-o"}const $s={title:"Overlays/Drawer",component:C,tags:["!dev","stable"],argTypes:{side:{control:{type:"select"},options:["left","right","top","bottom"],description:"Edge the pane slides in from. (top/bottom fall back to right in v1.)",table:{defaultValue:{summary:"right"}}},isOpen:{control:{type:"boolean"},description:"Controlled open state"},defaultOpen:{control:{type:"boolean"},description:"Initial open state when uncontrolled",table:{defaultValue:{summary:"false"}}},hasMask:{control:{type:"boolean"},description:"Render a backdrop behind the pane (sibling of __pane)",table:{defaultValue:{summary:"true"}}},closeOnEscape:{control:{type:"boolean"},description:"Close when Escape is pressed",table:{defaultValue:{summary:"true"}}},closeOnOutsideClick:{control:{type:"boolean"},description:"Close on outside click. Applies in BOTH masked and mask-less configurations -- the prop controls dismissal, not whether a scrim is rendered.",table:{defaultValue:{summary:"true"}}},closeOnMaskClick:{control:{type:"boolean"},description:"Deprecated alias of `closeOnOutsideClick`; honored when the new prop is undefined.",table:{defaultValue:{summary:"true"}}},lockScroll:{control:{type:"select"},options:["auto",!0,!1],description:"Lock document scroll when open (auto = on iff hasMask is truthy)",table:{defaultValue:{summary:"auto"}}},width:{control:{type:"text"},description:"Pane width as CSS length (number = px)",table:{defaultValue:{summary:"320"}}},minWidth:{control:{type:"text"},description:"Pane min-width as CSS length",table:{defaultValue:{summary:"280"}}},maxWidth:{control:{type:"text"},description:"Pane max-width as CSS length",table:{defaultValue:{summary:"80vw"}}},title:{control:{type:"text"},description:"Panel title text"},isClosable:{control:{type:"boolean"},description:"Show the close button in the header",table:{defaultValue:{summary:"true"}}},hasBackButton:{control:{type:"boolean"},description:"Show a back arrow button in the header",table:{defaultValue:{summary:"false"}}},isLoading:{control:{type:"boolean"},description:"Pattern B skeleton loading state",table:{defaultValue:{summary:"false"}}},isDisabled:{control:{type:"boolean"},description:"Whole-panel disabled state",table:{defaultValue:{summary:"false"}}},animationDuration:{control:{type:"number"},description:"Slide animation duration (ms)",table:{defaultValue:{summary:"200"}}}},args:{side:"right",defaultOpen:!0,hasMask:!0,closeOnEscape:!0,closeOnOutsideClick:!0,lockScroll:"auto",width:480,minWidth:320,maxWidth:"80vw",title:"Edit Forecast",isClosable:!0,hasBackButton:!0,isLoading:!1,isDisabled:!1,children:e.jsx(as,{})}},P={args:{title:"Try every prop",isClosable:!0,hasMask:!0,headerActions:xe(),stickyHeader:E,actions:l()}},q={name:"Kitchen sink",render:function(){const[i,n]=t.useState(!0),[c,m]=t.useState(""),[h,y]=t.useState("all"),k=Ue.length,v=c.trim().toLowerCase(),u=Ue.filter(g=>{const fe=h==="all"||g.status===h,ge=!v||g.name.toLowerCase().includes(v);return fe&&ge}),f=[{id:"refresh",type:"btn",icon:"refresh",label:"Refresh data"},{id:"sort",type:"dropdown",icon:"sort",label:"Sort",items:[{id:"name",label:"Name (A-Z)"},{id:"status",label:"Status"},{id:"recent",label:"Recently updated"}]},{id:"export",type:"split",icon:"download",label:"Export",items:[{id:"csv",label:"Export as CSV"},{id:"xlsx",label:"Export as Excel"},{id:"pdf",label:"Export as PDF"}]},{id:"archived",type:"switch",label:"Show archived"},{id:"select-all",type:"checkbox",label:"Select all"}],S={banner:{type:"warning",title:"Review needed",message:"3 SKUs are flagged and must be reviewed before the Friday lock.",isCompact:!0,isDismissible:!0},tabs:[{id:"all",label:"All"},{id:"flagged",label:"Flagged"},{id:"approved",label:"Approved"}],search:{placeholder:"Search SKUs",shortcut:"Ctrl+K"},info:{type:"info",message:`Showing ${u.length} of ${k} SKUs`,showWhen:"filtered"}},ye=[{id:"reset",label:"Reset",icon:"undo",isIconOnly:!0,variant:"tertiary",onClick:()=>{m(""),y("all")}},{id:"cancel",label:"Cancel",variant:"secondary",onClick:()=>n(!1)},{id:"apply",label:"Apply",variant:"primary",onClick:()=>n(!1)}];return e.jsxs("div",{style:{display:"flex",height:480,padding:16},children:[e.jsx(O,{label:"Open Demand Review",variant:"primary",onClick:()=>n(!0)}),e.jsx(C,{isOpen:i,onOpenChange:n,title:"Demand Review",side:"right",width:"380px",hasMask:!0,hasBackButton:!0,isClosable:!0,headerActions:f,stickyHeader:S,actions:ye,onSearchChange:g=>m(g),onTabSelect:g=>y(g),children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:2,padding:8},children:u.length===0?e.jsx("div",{style:{padding:24},children:"No SKUs match your filters."}):u.map(g=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:8},children:[e.jsx("i",{className:`o9con o9con-${Qs(g.status)}`,"aria-hidden":"true"}),e.jsx("span",{style:{flex:"1 1 auto",minWidth:0},children:g.name}),g.status==="flagged"&&e.jsx("i",{className:"o9con o9con-flag","aria-hidden":"true",style:{flex:"0 0 auto"}})]},g.id))})})]})}},M={args:{title:"Edit Forecast",hasBackButton:!0,isClosable:!0,headerActions:xe(),stickyHeader:E,actions:l()}},I={name:"Side: Right (Default)",args:{side:"right",title:"Right Drawer",actions:l()}},N={name:"Side: Left",args:{side:"left",title:"Left Drawer",actions:l()}},W={name:"Mask: None (hasMask=false)",args:{hasMask:!1,title:"No backdrop",actions:l()}},V={name:"Mask: Default",args:{hasMask:!0,title:"Default mask",actions:l()}},K={name:"Mask: Blur",args:{hasMask:{blur:!0},title:"Blurred mask",actions:l()}},_={name:"Mask: Custom opacity 0.7",args:{hasMask:{opacity:.7},title:"Custom opacity",actions:l()}},Q={name:"closeOnEscape=false",args:{closeOnEscape:!1,title:"Escape disabled",actions:l()}},$={name:"closeOnOutsideClick=false (with mask)",args:{hasMask:!0,closeOnOutsideClick:!1,title:"Outside click disabled",actions:l()}},U={name:"no mask + closeOnOutsideClick (default)",args:{hasMask:!1,title:"No mask, click outside to close",actions:l()}},G={name:"no mask + closeOnOutsideClick=false",args:{hasMask:!1,closeOnOutsideClick:!1,title:"No mask, outside click ignored",actions:l()}},z={name:"closeOnMaskClick=false (legacy alias)",args:{closeOnMaskClick:!1,title:"Legacy alias (deprecated)",actions:l()}},Z={name:"lockScroll=auto (default)",args:{lockScroll:"auto",title:"Auto scroll lock",actions:l()}},J={name:"lockScroll=true",args:{lockScroll:!0,hasMask:!1,title:"Forced scroll lock",actions:l()}},X={name:"lockScroll=false",args:{lockScroll:!1,title:"Scroll unlocked",actions:l()}},L={args:{title:"Header Actions (all types)",headerActions:[...xe({onBtn:()=>console.log("btn click"),onDropdownSelect:s=>console.log("dropdown select:",s),onSplitAction:()=>console.log("split action click"),onSplitSelect:s=>console.log("split select:",s),onSwitchChange:s=>console.log("switch change:",s)}),{id:"select-all",type:"checkbox",label:"Select all rows",defaultChecked:!1,onChange:s=>console.log("checkbox change:",s)}],actions:l()}},Y={name:"Back + Close buttons",args:{hasBackButton:!0,isClosable:!0,title:"Back + Close",onBack:()=>console.log("back clicked"),actions:l()}},ee={name:"isClosable=false",args:{isClosable:!1,title:"Not closable",actions:l()}},ae={name:"Sticky Header (banner + tabs + search + info)",args:{title:"Sticky Header Full",stickyHeader:E,actions:l()}},te={args:{title:"Tabs only",stickyHeader:js,actions:l()}},se={args:{title:"Search only",stickyHeader:Ls,actions:l()}},j={name:"Footer: primary right / secondary left",args:{title:"Footer order",actions:Fs()}},re={name:"Footer suppressed (actions=false)",args:{title:"No footer",actions:!1}},ne={name:"Narrow (320px)",args:{width:320,title:"Narrow",actions:l()}},oe={name:"Wide (640px)",args:{width:640,title:"Wide",actions:l()}},ie={name:"Loading (Pattern B skeleton)",args:{isLoading:!0,title:"Loading Drawer",stickyHeader:E,actions:l()}},le={name:"Loading toggle (runtime)",render:function(){const[i,n]=t.useState(!1);return t.useEffect(()=>{const c=window.setInterval(()=>n(m=>!m),1500);return()=>window.clearInterval(c)},[]),e.jsx(C,{defaultOpen:!0,title:i?"Loading...":"Ready",isClosable:!0,isLoading:i,stickyHeader:E,actions:l(),children:e.jsx(as,{})})}},ce={args:{isDisabled:!0,title:"Disabled Drawer",headerActions:xe(),stickyHeader:E,actions:l()}},de={name:"Edit Drawer",render:function(){const[i,n]=t.useState(!0),[c,m]=t.useState("Q1 Demand Forecast"),[h,y]=t.useState("maya-chen"),[k,v]=t.useState(!0),u=[{id:"save-as",type:"split",icon:"save",label:"Save",tooltip:"Save",triggerLabel:"Save options",items:[{id:"save-copy",label:"Save as copy"},{id:"save-template",label:"Save as template"}],onClick:()=>console.log("save"),onSelect:f=>console.log("save-as:",f)},{id:"activity",type:"btn",icon:"history",label:"Activity",tooltip:"Activity history"}];return e.jsxs("div",{style:{display:"flex",height:480,padding:16},children:[e.jsx(O,{label:"Open Edit Drawer",variant:"primary",onClick:()=>n(!0)}),e.jsx(C,{isOpen:i,onOpenChange:n,title:"Edit Forecast",side:"right",width:520,isClosable:!0,headerActions:u,actions:[{id:"cancel",label:"Cancel",variant:"secondary",onClick:()=>n(!1)},{id:"save",label:"Save",variant:"primary",icon:"save",onClick:()=>{console.log("saved:",{name:c,owner:h,isLive:k}),n(!1)}}],children:e.jsxs("div",{style:{padding:16,display:"flex",flexDirection:"column",gap:16},children:[e.jsx(Le,{label:"Forecast name",value:c,onChange:f=>m(f.target.value),isFullWidth:!0,isRequired:!0}),e.jsx(es,{label:"Owner",value:h,isFullWidth:!0,items:[{id:"maya-chen",label:"Maya Chen",value:"maya-chen"},{id:"aaron-patel",label:"Aaron Patel",value:"aaron-patel"},{id:"priya-iyer",label:"Priya Iyer",value:"priya-iyer"},{id:"jordan-rey",label:"Jordan Reyes",value:"jordan-rey"}],onChange:f=>{f&&y(String(f.id))}}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsxs("span",{children:[e.jsx("strong",{children:"Auto-publish updates"}),e.jsx("br",{}),e.jsx("span",{children:"Push changes to subscribers immediately."})]}),e.jsx(je,{isChecked:k,onChange:({isChecked:f})=>v(f),"aria-label":"Auto-publish updates"})]})]})})]})}},Ge=["Region","Product","Channel","Time range","Currency","Segment","Account","Category"],ue={name:"Filter Drawer",render:function(){const[i,n]=t.useState(!0),[c,m]=t.useState(""),h=c.trim().toLowerCase(),y=Ge.filter(u=>!h||u.toLowerCase().includes(h)),k=[{id:"saved",type:"dropdown",icon:"bookmark",label:"Saved views",tooltip:"Saved views",items:[{id:"mine",label:"My views"},{id:"shared",label:"Shared with me"},{id:"archive",label:"Archived"}]},{id:"clear",type:"btn",icon:"eraser",label:"Clear all",tooltip:"Clear all filters"}],v={search:{placeholder:"Search filters..."},info:{type:"info",message:`${y.length} of ${Ge.length} filters match`,showWhen:"filtered"}};return e.jsxs("div",{style:{display:"flex",height:480,padding:16},children:[e.jsx(O,{label:"Open Filter Drawer",variant:"primary",onClick:()=>n(!0)}),e.jsx(C,{isOpen:i,onOpenChange:n,title:"Filters",side:"right",width:420,isClosable:!0,headerActions:k,stickyHeader:v,onSearchChange:u=>m(u),actions:Es({onReset:()=>{console.log("reset filters"),m("")},onApply:()=>{console.log("apply filters"),n(!1)}}),children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,padding:16},children:y.length===0?e.jsx("div",{style:{padding:8},children:"No filters match your search."}):y.map(u=>e.jsx(Ns,{label:u},u))})})]})}},pe={name:"Settings Drawer",render:function(){const[i,n]=t.useState(!0),[c,m]=t.useState("general"),[h,y]=t.useState("system"),[k,v]=t.useState(!0),[u,f]=t.useState(!1);return e.jsxs("div",{style:{display:"flex",height:480,padding:16},children:[e.jsx(O,{label:"Open Settings Drawer",variant:"primary",onClick:()=>n(!0)}),e.jsx(C,{isOpen:i,onOpenChange:n,title:"Settings",side:"right",width:480,isClosable:!0,stickyHeader:{tabs:[{id:"general",label:"General",icon:"cog"},{id:"appearance",label:"Appearance"},{id:"notifications",label:"Notifications",icon:"bell-o"}]},onTabSelect:m,actions:!1,children:e.jsxs("div",{style:{padding:16,display:"flex",flexDirection:"column",gap:16},children:[c==="general"&&e.jsxs(e.Fragment,{children:[e.jsx(Le,{label:"Display name",defaultValue:"Maya Chen",isFullWidth:!0}),e.jsx(Le,{label:"Email",defaultValue:"maya@example.com",isFullWidth:!0})]}),c==="appearance"&&e.jsx(es,{label:"Theme",value:h,isFullWidth:!0,items:[{id:"system",label:"Match system",value:"system"},{id:"light",label:"Light",value:"light"},{id:"dark",label:"Dark",value:"dark"}],onChange:S=>{S&&y(String(S.id))}}),c==="notifications"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsxs("span",{children:[e.jsx("strong",{children:"Email digest"}),e.jsx("br",{}),e.jsx("span",{children:"Daily summary delivered at 7:00 AM local time."})]}),e.jsx(je,{isChecked:k,onChange:({isChecked:S})=>v(S),"aria-label":"Email digest"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsxs("span",{children:[e.jsx("strong",{children:"Push alerts"}),e.jsx("br",{}),e.jsx("span",{children:"Real-time desktop and mobile notifications."})]}),e.jsx(je,{isChecked:u,onChange:({isChecked:S})=>f(S),"aria-label":"Push alerts"})]})]})]})})]})}},me={name:"Custom Container (scoped portal)",render:function(){const i=t.useRef(null),[n,c]=t.useState(!0);return e.jsxs("div",{ref:i,style:{position:"relative",display:"flex",height:360,width:"100%",overflow:"hidden",padding:16},children:[e.jsx(O,{label:n?"Close":"Open",variant:"primary",onClick:()=>c(!n)}),e.jsx(C,{isOpen:n,onOpenChange:c,title:"Scoped Drawer",side:"right",container:()=>i.current,hasMask:!0,width:300,isClosable:!0,actions:l({onCancel:()=>c(!1),onApply:()=>c(!1)}),children:e.jsx("div",{style:{padding:16},children:e.jsxs("p",{style:{margin:0},children:["This drawer is portaled into the relative-positioned anchor instead of ",e.jsx("code",{children:"document.body"}),". The backdrop and pane are scoped to this card."]})})})]})}},he={name:"Focus Return on Close",render:function(){const i=t.useRef(null),[n,c]=t.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,padding:16},children:[e.jsx("p",{style:{margin:0},children:"Click the trigger below to open the drawer. After it closes (via Escape, mask click, close button, or programmatically), focus returns to the trigger that opened it."}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(O,{label:"Open Drawer",variant:"primary",onClick:()=>c(!0)}),e.jsx(O,{label:"Close via API",variant:"outline",onClick:()=>{var m;return(m=i.current)==null?void 0:m.close("programmatic")}})]}),e.jsx(C,{isOpen:n,onOpenChange:c,instanceRef:i,title:"Focus Return",side:"right",isClosable:!0,actions:!1,children:e.jsx("div",{style:{padding:16},children:e.jsx("p",{style:{margin:0},children:"Press Escape, click the backdrop, or click the close button. Focus will return to the trigger that opened this drawer."})})})]})}};var ze,Ze,Je,Xe,Ye;P.parameters={...P.parameters,docs:{...(ze=P.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    title: 'Try every prop',
    isClosable: true,
    hasMask: true,
    headerActions: makeSampleHeaderActionsAllTypes(),
    stickyHeader: stickyHeaderShowcase,
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(Je=(Ze=P.parameters)==null?void 0:Ze.docs)==null?void 0:Je.source},description:{story:`Playground keeps a fully-loaded composition (header actions, sticky region,\r
custom body, footer) and exposes Storybook controls for live tweaking every\r
prop.`,...(Ye=(Xe=P.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.description}}};var ea,aa,ta;q.parameters={...q.parameters,docs:{...(ea=q.parameters)==null?void 0:ea.docs,source:{originalSource:`{
  name: 'Kitchen sink',
  render: function KitchenSinkStory() {
    const [open, setOpen] = useState(true);
    const [query, setQuery] = useState('');
    const [tab, setTab] = useState('all');
    const total = KS_ROWS.length;
    const q = query.trim().toLowerCase();
    const visibleRows = KS_ROWS.filter(row => {
      const matchesTab = tab === 'all' || row.status === tab;
      const matchesQuery = !q || row.name.toLowerCase().includes(q);
      return matchesTab && matchesQuery;
    });
    const headerActions: ArvoPanelHeaderAction[] = [{
      id: 'refresh',
      type: 'btn',
      icon: 'refresh',
      label: 'Refresh data'
    }, {
      id: 'sort',
      type: 'dropdown',
      icon: 'sort',
      label: 'Sort',
      items: [{
        id: 'name',
        label: 'Name (A-Z)'
      }, {
        id: 'status',
        label: 'Status'
      }, {
        id: 'recent',
        label: 'Recently updated'
      }]
    }, {
      id: 'export',
      type: 'split',
      icon: 'download',
      label: 'Export',
      items: [{
        id: 'csv',
        label: 'Export as CSV'
      }, {
        id: 'xlsx',
        label: 'Export as Excel'
      }, {
        id: 'pdf',
        label: 'Export as PDF'
      }]
    }, {
      id: 'archived',
      type: 'switch',
      label: 'Show archived'
    }, {
      id: 'select-all',
      type: 'checkbox',
      label: 'Select all'
    }];

    // Reactive sticky header: passing a fresh object on each render keeps the
    // search input focused (PanelShell reconciles in place). \`showWhen:
    // 'filtered'\` hides the info row until a query is active.
    const stickyHeader: ArvoPanelStickyHeaderConfig = {
      banner: {
        type: 'warning',
        title: 'Review needed',
        message: '3 SKUs are flagged and must be reviewed before the Friday lock.',
        isCompact: true,
        isDismissible: true
      },
      tabs: [{
        id: 'all',
        label: 'All'
      }, {
        id: 'flagged',
        label: 'Flagged'
      }, {
        id: 'approved',
        label: 'Approved'
      }],
      search: {
        placeholder: 'Search SKUs',
        shortcut: 'Ctrl+K'
      },
      info: {
        type: 'info',
        message: \`Showing \${visibleRows.length} of \${total} SKUs\`,
        showWhen: 'filtered'
      }
    };
    const footerActions: ArvoPanelAction[] = [{
      id: 'reset',
      label: 'Reset',
      icon: 'undo',
      isIconOnly: true,
      variant: 'tertiary',
      onClick: () => {
        setQuery('');
        setTab('all');
      }
    }, {
      id: 'cancel',
      label: 'Cancel',
      variant: 'secondary',
      onClick: () => setOpen(false)
    }, {
      id: 'apply',
      label: 'Apply',
      variant: 'primary',
      onClick: () => setOpen(false)
    }];
    return <div style={{
      display: 'flex',
      height: 480,
      padding: 16
    }}>\r
        <ArvoButton label="Open Demand Review" variant="primary" onClick={() => setOpen(true)} />\r
        <ArvoDrawer isOpen={open} onOpenChange={setOpen} title="Demand Review" side="right" width="380px" hasMask hasBackButton isClosable headerActions={headerActions} stickyHeader={stickyHeader} actions={footerActions} onSearchChange={value => setQuery(value)} onTabSelect={id => setTab(id)}>\r
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          padding: 8
        }}>\r
            {visibleRows.length === 0 ? <div style={{
            padding: 24
          }}>No SKUs match your filters.</div> : visibleRows.map(row => <div key={row.id} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: 8
          }}>\r
                  <i className={\`o9con o9con-\${statusIcon(row.status)}\`} aria-hidden="true" />\r
                  <span style={{
              flex: '1 1 auto',
              minWidth: 0
            }}>{row.name}</span>\r
                  {row.status === 'flagged' && <i className="o9con o9con-flag" aria-hidden="true" style={{
              flex: '0 0 auto'
            }} />}\r
                </div>)}\r
          </div>\r
        </ArvoDrawer>\r
      </div>;
  }
}`,...(ta=(aa=q.parameters)==null?void 0:aa.docs)==null?void 0:ta.source}}};var sa,ra,na,oa,ia;M.parameters={...M.parameters,docs:{...(sa=M.parameters)==null?void 0:sa.docs,source:{originalSource:`{
  args: {
    title: 'Edit Forecast',
    hasBackButton: true,
    isClosable: true,
    headerActions: makeSampleHeaderActionsAllTypes(),
    stickyHeader: stickyHeaderShowcase,
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(na=(ra=M.parameters)==null?void 0:ra.docs)==null?void 0:na.source},description:{story:`Default exercises every visible surface: back + close, four header-action\r
types, banner + tabs + search + info, a custom body, and a primary/secondary\r
footer in primary-right order.`,...(ia=(oa=M.parameters)==null?void 0:oa.docs)==null?void 0:ia.description}}};var la,ca,da;I.parameters={...I.parameters,docs:{...(la=I.parameters)==null?void 0:la.docs,source:{originalSource:`{
  name: 'Side: Right (Default)',
  args: {
    side: 'right',
    title: 'Right Drawer',
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(da=(ca=I.parameters)==null?void 0:ca.docs)==null?void 0:da.source}}};var ua,pa,ma;N.parameters={...N.parameters,docs:{...(ua=N.parameters)==null?void 0:ua.docs,source:{originalSource:`{
  name: 'Side: Left',
  args: {
    side: 'left',
    title: 'Left Drawer',
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(ma=(pa=N.parameters)==null?void 0:pa.docs)==null?void 0:ma.source}}};var ha,ya,fa;W.parameters={...W.parameters,docs:{...(ha=W.parameters)==null?void 0:ha.docs,source:{originalSource:`{
  name: 'Mask: None (hasMask=false)',
  args: {
    hasMask: false,
    title: 'No backdrop',
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(fa=(ya=W.parameters)==null?void 0:ya.docs)==null?void 0:fa.source}}};var ga,ba,ka;V.parameters={...V.parameters,docs:{...(ga=V.parameters)==null?void 0:ga.docs,source:{originalSource:`{
  name: 'Mask: Default',
  args: {
    hasMask: true,
    title: 'Default mask',
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(ka=(ba=V.parameters)==null?void 0:ba.docs)==null?void 0:ka.source}}};var va,Sa,wa;K.parameters={...K.parameters,docs:{...(va=K.parameters)==null?void 0:va.docs,source:{originalSource:`{
  name: 'Mask: Blur',
  args: {
    hasMask: {
      blur: true
    },
    title: 'Blurred mask',
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(wa=(Sa=K.parameters)==null?void 0:Sa.docs)==null?void 0:wa.source}}};var Ca,Aa,Oa;_.parameters={..._.parameters,docs:{...(Ca=_.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
  name: 'Mask: Custom opacity 0.7',
  args: {
    hasMask: {
      opacity: 0.7
    },
    title: 'Custom opacity',
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(Oa=(Aa=_.parameters)==null?void 0:Aa.docs)==null?void 0:Oa.source}}};var xa,Da,Ta;Q.parameters={...Q.parameters,docs:{...(xa=Q.parameters)==null?void 0:xa.docs,source:{originalSource:`{
  name: 'closeOnEscape=false',
  args: {
    closeOnEscape: false,
    title: 'Escape disabled',
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(Ta=(Da=Q.parameters)==null?void 0:Da.docs)==null?void 0:Ta.source}}};var Ra,Pa,Ma;$.parameters={...$.parameters,docs:{...(Ra=$.parameters)==null?void 0:Ra.docs,source:{originalSource:`{
  name: 'closeOnOutsideClick=false (with mask)',
  args: {
    hasMask: true,
    closeOnOutsideClick: false,
    title: 'Outside click disabled',
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(Ma=(Pa=$.parameters)==null?void 0:Pa.docs)==null?void 0:Ma.source}}};var La,ja,Ea;U.parameters={...U.parameters,docs:{...(La=U.parameters)==null?void 0:La.docs,source:{originalSource:`{
  name: 'no mask + closeOnOutsideClick (default)',
  args: {
    hasMask: false,
    title: 'No mask, click outside to close',
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(Ea=(ja=U.parameters)==null?void 0:ja.docs)==null?void 0:Ea.source}}};var Fa,Ha,Ba;G.parameters={...G.parameters,docs:{...(Fa=G.parameters)==null?void 0:Fa.docs,source:{originalSource:`{
  name: 'no mask + closeOnOutsideClick=false',
  args: {
    hasMask: false,
    closeOnOutsideClick: false,
    title: 'No mask, outside click ignored',
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(Ba=(Ha=G.parameters)==null?void 0:Ha.docs)==null?void 0:Ba.source}}};var qa,Ia,Na;z.parameters={...z.parameters,docs:{...(qa=z.parameters)==null?void 0:qa.docs,source:{originalSource:`{
  name: 'closeOnMaskClick=false (legacy alias)',
  args: {
    closeOnMaskClick: false,
    title: 'Legacy alias (deprecated)',
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(Na=(Ia=z.parameters)==null?void 0:Ia.docs)==null?void 0:Na.source}}};var Wa,Va,Ka;Z.parameters={...Z.parameters,docs:{...(Wa=Z.parameters)==null?void 0:Wa.docs,source:{originalSource:`{
  name: 'lockScroll=auto (default)',
  args: {
    lockScroll: 'auto',
    title: 'Auto scroll lock',
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(Ka=(Va=Z.parameters)==null?void 0:Va.docs)==null?void 0:Ka.source}}};var _a,Qa,$a;J.parameters={...J.parameters,docs:{...(_a=J.parameters)==null?void 0:_a.docs,source:{originalSource:`{
  name: 'lockScroll=true',
  args: {
    lockScroll: true,
    hasMask: false,
    title: 'Forced scroll lock',
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...($a=(Qa=J.parameters)==null?void 0:Qa.docs)==null?void 0:$a.source}}};var Ua,Ga,za;X.parameters={...X.parameters,docs:{...(Ua=X.parameters)==null?void 0:Ua.docs,source:{originalSource:`{
  name: 'lockScroll=false',
  args: {
    lockScroll: false,
    title: 'Scroll unlocked',
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(za=(Ga=X.parameters)==null?void 0:Ga.docs)==null?void 0:za.source}}};var Za,Ja,Xa,Ya,et;L.parameters={...L.parameters,docs:{...(Za=L.parameters)==null?void 0:Za.docs,source:{originalSource:`{
  args: {
    title: 'Header Actions (all types)',
    headerActions: [...makeSampleHeaderActionsAllTypes({
      // eslint-disable-next-line no-console
      onBtn: () => console.log('btn click'),
      // eslint-disable-next-line no-console
      onDropdownSelect: id => console.log('dropdown select:', id),
      // eslint-disable-next-line no-console
      onSplitAction: () => console.log('split action click'),
      // eslint-disable-next-line no-console
      onSplitSelect: id => console.log('split select:', id),
      // eslint-disable-next-line no-console
      onSwitchChange: v => console.log('switch change:', v)
    }), {
      id: 'select-all',
      type: 'checkbox',
      label: 'Select all rows',
      defaultChecked: false,
      // eslint-disable-next-line no-console
      onChange: v => console.log('checkbox change:', v)
    } satisfies ArvoPanelHeaderAction],
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(Xa=(Ja=L.parameters)==null?void 0:Ja.docs)==null?void 0:Xa.source},description:{story:`Demonstrates the full header-action whitelist. One of each type renders\r
the matching Arvo primitive: ArvoIconButton, ArvoDropdownIconButton,\r
ArvoSplitIconButton, ArvoSwitch, and ArvoCheckbox. Each is keyboard\r
accessible and wired to a console-logging callback.`,...(et=(Ya=L.parameters)==null?void 0:Ya.docs)==null?void 0:et.description}}};var at,tt,st;Y.parameters={...Y.parameters,docs:{...(at=Y.parameters)==null?void 0:at.docs,source:{originalSource:`{
  name: 'Back + Close buttons',
  args: {
    hasBackButton: true,
    isClosable: true,
    title: 'Back + Close',
    // eslint-disable-next-line no-console
    onBack: () => console.log('back clicked'),
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(st=(tt=Y.parameters)==null?void 0:tt.docs)==null?void 0:st.source}}};var rt,nt,ot;ee.parameters={...ee.parameters,docs:{...(rt=ee.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  name: 'isClosable=false',
  args: {
    isClosable: false,
    title: 'Not closable',
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(ot=(nt=ee.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var it,lt,ct;ae.parameters={...ae.parameters,docs:{...(it=ae.parameters)==null?void 0:it.docs,source:{originalSource:`{
  name: 'Sticky Header (banner + tabs + search + info)',
  args: {
    title: 'Sticky Header Full',
    stickyHeader: stickyHeaderShowcase,
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(ct=(lt=ae.parameters)==null?void 0:lt.docs)==null?void 0:ct.source}}};var dt,ut,pt;te.parameters={...te.parameters,docs:{...(dt=te.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  args: {
    title: 'Tabs only',
    stickyHeader: sampleStickyTabsOnly,
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(pt=(ut=te.parameters)==null?void 0:ut.docs)==null?void 0:pt.source}}};var mt,ht,yt;se.parameters={...se.parameters,docs:{...(mt=se.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  args: {
    title: 'Search only',
    stickyHeader: sampleStickySearchOnly,
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(yt=(ht=se.parameters)==null?void 0:ht.docs)==null?void 0:yt.source}}};var ft,gt,bt,kt,vt;j.parameters={...j.parameters,docs:{...(ft=j.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  name: 'Footer: primary right / secondary left',
  args: {
    title: 'Footer order',
    actions: makePrimaryFirstActions()
  }
}`,...(bt=(gt=j.parameters)==null?void 0:gt.docs)==null?void 0:bt.source},description:{story:`Asserts the variant-driven footer order rule: even when actions are passed\r
primary-first in source order, the primary button still renders on the\r
right and the secondary on the left.`,...(vt=(kt=j.parameters)==null?void 0:kt.docs)==null?void 0:vt.description}}};var St,wt,Ct;re.parameters={...re.parameters,docs:{...(St=re.parameters)==null?void 0:St.docs,source:{originalSource:`{
  name: 'Footer suppressed (actions=false)',
  args: {
    title: 'No footer',
    actions: false
  }
}`,...(Ct=(wt=re.parameters)==null?void 0:wt.docs)==null?void 0:Ct.source}}};var At,Ot,xt;ne.parameters={...ne.parameters,docs:{...(At=ne.parameters)==null?void 0:At.docs,source:{originalSource:`{
  name: 'Narrow (320px)',
  args: {
    width: 320,
    title: 'Narrow',
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(xt=(Ot=ne.parameters)==null?void 0:Ot.docs)==null?void 0:xt.source}}};var Dt,Tt,Rt;oe.parameters={...oe.parameters,docs:{...(Dt=oe.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
  name: 'Wide (640px)',
  args: {
    width: 640,
    title: 'Wide',
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(Rt=(Tt=oe.parameters)==null?void 0:Tt.docs)==null?void 0:Rt.source}}};var Pt,Mt,Lt;ie.parameters={...ie.parameters,docs:{...(Pt=ie.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
  name: 'Loading (Pattern B skeleton)',
  args: {
    isLoading: true,
    title: 'Loading Drawer',
    stickyHeader: stickyHeaderShowcase,
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(Lt=(Mt=ie.parameters)==null?void 0:Mt.docs)==null?void 0:Lt.source}}};var jt,Et,Ft;le.parameters={...le.parameters,docs:{...(jt=le.parameters)==null?void 0:jt.docs,source:{originalSource:`{
  name: 'Loading toggle (runtime)',
  render: function LoadingToggleStory() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      const id = window.setInterval(() => setLoading(v => !v), 1500);
      return () => window.clearInterval(id);
    }, []);
    return <ArvoDrawer defaultOpen title={loading ? 'Loading...' : 'Ready'} isClosable isLoading={loading} stickyHeader={stickyHeaderShowcase} actions={makeSamplePrimarySecondaryActions()}>\r
        <SampleBody />\r
      </ArvoDrawer>;
  }
}`,...(Ft=(Et=le.parameters)==null?void 0:Et.docs)==null?void 0:Ft.source}}};var Ht,Bt,qt;ce.parameters={...ce.parameters,docs:{...(Ht=ce.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    title: 'Disabled Drawer',
    headerActions: makeSampleHeaderActionsAllTypes(),
    stickyHeader: stickyHeaderShowcase,
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(qt=(Bt=ce.parameters)==null?void 0:Bt.docs)==null?void 0:qt.source}}};var It,Nt,Wt;de.parameters={...de.parameters,docs:{...(It=de.parameters)==null?void 0:It.docs,source:{originalSource:`{
  name: 'Edit Drawer',
  render: function EditDrawerStory() {
    const [open, setOpen] = useState(true);
    const [name, setName] = useState('Q1 Demand Forecast');
    const [owner, setOwner] = useState<string>('maya-chen');
    const [isLive, setIsLive] = useState(true);
    const headerActions: ArvoPanelHeaderAction[] = [{
      id: 'save-as',
      type: 'split',
      icon: 'save',
      label: 'Save',
      tooltip: 'Save',
      triggerLabel: 'Save options',
      items: [{
        id: 'save-copy',
        label: 'Save as copy'
      }, {
        id: 'save-template',
        label: 'Save as template'
      }],
      // eslint-disable-next-line no-console
      onClick: () => console.log('save'),
      // eslint-disable-next-line no-console
      onSelect: id => console.log('save-as:', id)
    }, {
      id: 'activity',
      type: 'btn',
      icon: 'history',
      label: 'Activity',
      tooltip: 'Activity history'
    }];
    return <div style={{
      display: 'flex',
      height: 480,
      padding: 16
    }}>\r
        <ArvoButton label="Open Edit Drawer" variant="primary" onClick={() => setOpen(true)} />\r
        <ArvoDrawer isOpen={open} onOpenChange={setOpen} title="Edit Forecast" side="right" width={520} isClosable headerActions={headerActions} actions={[{
        id: 'cancel',
        label: 'Cancel',
        variant: 'secondary',
        onClick: () => setOpen(false)
      },
      // eslint-disable-next-line no-console
      {
        id: 'save',
        label: 'Save',
        variant: 'primary',
        icon: 'save',
        onClick: () => {
          console.log('saved:', {
            name,
            owner,
            isLive
          });
          setOpen(false);
        }
      }]}>\r
          <div style={{
          padding: 16,
          display: 'flex',
          flexDirection: 'column',
          gap: 16
        }}>\r
            <ArvoTextbox label="Forecast name" value={name} onChange={e => setName(e.target.value)} isFullWidth isRequired />\r
            <ArvoSelect label="Owner" value={owner} isFullWidth items={[{
            id: 'maya-chen',
            label: 'Maya Chen',
            value: 'maya-chen'
          }, {
            id: 'aaron-patel',
            label: 'Aaron Patel',
            value: 'aaron-patel'
          }, {
            id: 'priya-iyer',
            label: 'Priya Iyer',
            value: 'priya-iyer'
          }, {
            id: 'jordan-rey',
            label: 'Jordan Reyes',
            value: 'jordan-rey'
          }]} onChange={item => {
            if (item) setOwner(String(item.id));
          }} />\r
            <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>\r
              <span>\r
                <strong>Auto-publish updates</strong>\r
                <br />\r
                <span>\r
                  Push changes to subscribers immediately.\r
                </span>\r
              </span>\r
              <ArvoSwitch isChecked={isLive} onChange={({
              isChecked
            }) => setIsLive(isChecked)} aria-label="Auto-publish updates" />\r
            </div>\r
          </div>\r
        </ArvoDrawer>\r
      </div>;
  }
}`,...(Wt=(Nt=de.parameters)==null?void 0:Nt.docs)==null?void 0:Wt.source}}};var Vt,Kt,_t;ue.parameters={...ue.parameters,docs:{...(Vt=ue.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
  name: 'Filter Drawer',
  render: function FilterDrawerStory() {
    const [open, setOpen] = useState(true);
    const [query, setQuery] = useState('');
    const q = query.trim().toLowerCase();
    const visible = FILTER_FIELDS.filter(f => !q || f.toLowerCase().includes(q));
    const headerActions: ArvoPanelHeaderAction[] = [{
      id: 'saved',
      type: 'dropdown',
      icon: 'bookmark',
      label: 'Saved views',
      tooltip: 'Saved views',
      items: [{
        id: 'mine',
        label: 'My views'
      }, {
        id: 'shared',
        label: 'Shared with me'
      }, {
        id: 'archive',
        label: 'Archived'
      }]
    }, {
      id: 'clear',
      type: 'btn',
      icon: 'eraser',
      label: 'Clear all',
      tooltip: 'Clear all filters'
    }];
    const stickyHeader: ArvoPanelStickyHeaderConfig = {
      search: {
        placeholder: 'Search filters...'
      },
      info: {
        type: 'info',
        message: \`\${visible.length} of \${FILTER_FIELDS.length} filters match\`,
        showWhen: 'filtered'
      }
    };
    return <div style={{
      display: 'flex',
      height: 480,
      padding: 16
    }}>\r
        <ArvoButton label="Open Filter Drawer" variant="primary" onClick={() => setOpen(true)} />\r
        <ArvoDrawer isOpen={open} onOpenChange={setOpen} title="Filters" side="right" width={420} isClosable headerActions={headerActions} stickyHeader={stickyHeader} onSearchChange={value => setQuery(value)} actions={makeSampleResetApplyActions({
        // eslint-disable-next-line no-console
        onReset: () => {
          console.log('reset filters');
          setQuery('');
        },
        // eslint-disable-next-line no-console
        onApply: () => {
          console.log('apply filters');
          setOpen(false);
        }
      })}>\r
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          padding: 16
        }}>\r
            {visible.length === 0 ? <div style={{
            padding: 8
          }}>No filters match your search.</div> : visible.map(field => <ArvoCheckbox key={field} label={field} />)}\r
          </div>\r
        </ArvoDrawer>\r
      </div>;
  }
}`,...(_t=(Kt=ue.parameters)==null?void 0:Kt.docs)==null?void 0:_t.source}}};var Qt,$t,Ut;pe.parameters={...pe.parameters,docs:{...(Qt=pe.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
  name: 'Settings Drawer',
  render: function SettingsDrawerStory() {
    const [open, setOpen] = useState(true);
    const [tab, setTab] = useState('general');
    const [theme, setTheme] = useState('system');
    const [emailDigest, setEmailDigest] = useState(true);
    const [pushAlerts, setPushAlerts] = useState(false);
    return <div style={{
      display: 'flex',
      height: 480,
      padding: 16
    }}>\r
        <ArvoButton label="Open Settings Drawer" variant="primary" onClick={() => setOpen(true)} />\r
        <ArvoDrawer isOpen={open} onOpenChange={setOpen} title="Settings" side="right" width={480} isClosable stickyHeader={{
        tabs: [{
          id: 'general',
          label: 'General',
          icon: 'cog'
        }, {
          id: 'appearance',
          label: 'Appearance'
        }, {
          id: 'notifications',
          label: 'Notifications',
          icon: 'bell-o'
        }]
      }} onTabSelect={setTab} actions={false}>\r
          <div style={{
          padding: 16,
          display: 'flex',
          flexDirection: 'column',
          gap: 16
        }}>\r
            {tab === 'general' && <>\r
                <ArvoTextbox label="Display name" defaultValue="Maya Chen" isFullWidth />\r
                <ArvoTextbox label="Email" defaultValue="maya@example.com" isFullWidth />\r
              </>}\r
            {tab === 'appearance' && <ArvoSelect label="Theme" value={theme} isFullWidth items={[{
            id: 'system',
            label: 'Match system',
            value: 'system'
          }, {
            id: 'light',
            label: 'Light',
            value: 'light'
          }, {
            id: 'dark',
            label: 'Dark',
            value: 'dark'
          }]} onChange={item => {
            if (item) setTheme(String(item.id));
          }} />}\r
            {tab === 'notifications' && <>\r
                <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>\r
                  <span>\r
                    <strong>Email digest</strong>\r
                    <br />\r
                    <span>\r
                      Daily summary delivered at 7:00 AM local time.\r
                    </span>\r
                  </span>\r
                  <ArvoSwitch isChecked={emailDigest} onChange={({
                isChecked
              }) => setEmailDigest(isChecked)} aria-label="Email digest" />\r
                </div>\r
                <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>\r
                  <span>\r
                    <strong>Push alerts</strong>\r
                    <br />\r
                    <span>\r
                      Real-time desktop and mobile notifications.\r
                    </span>\r
                  </span>\r
                  <ArvoSwitch isChecked={pushAlerts} onChange={({
                isChecked
              }) => setPushAlerts(isChecked)} aria-label="Push alerts" />\r
                </div>\r
              </>}\r
          </div>\r
        </ArvoDrawer>\r
      </div>;
  }
}`,...(Ut=($t=pe.parameters)==null?void 0:$t.docs)==null?void 0:Ut.source}}};var Gt,zt,Zt;me.parameters={...me.parameters,docs:{...(Gt=me.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
  name: 'Custom Container (scoped portal)',
  render: function CustomContainerStory() {
    const anchorRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(true);
    return <div ref={anchorRef} style={{
      position: 'relative',
      display: 'flex',
      height: 360,
      width: '100%',
      overflow: 'hidden',
      padding: 16
    }}>\r
        <ArvoButton label={open ? 'Close' : 'Open'} variant="primary" onClick={() => setOpen(!open)} />\r
        <ArvoDrawer isOpen={open} onOpenChange={setOpen} title="Scoped Drawer" side="right" container={() => anchorRef.current!} hasMask width={300} isClosable actions={makeSamplePrimarySecondaryActions({
        onCancel: () => setOpen(false),
        onApply: () => setOpen(false)
      })}>\r
          <div style={{
          padding: 16
        }}>\r
            <p style={{
            margin: 0
          }}>\r
              This drawer is portaled into the relative-positioned anchor\r
              instead of <code>document.body</code>. The backdrop and pane\r
              are scoped to this card.\r
            </p>\r
          </div>\r
        </ArvoDrawer>\r
      </div>;
  }
}`,...(Zt=(zt=me.parameters)==null?void 0:zt.docs)==null?void 0:Zt.source}}};var Jt,Xt,Yt;he.parameters={...he.parameters,docs:{...(Jt=he.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
  name: 'Focus Return on Close',
  render: function FocusReturnStory() {
    const handleRef = useRef<ArvoDrawerHandle>(null);
    const [open, setOpen] = useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      padding: 16
    }}>\r
        <p style={{
        margin: 0
      }}>\r
          Click the trigger below to open the drawer. After it closes (via\r
          Escape, mask click, close button, or programmatically), focus\r
          returns to the trigger that opened it.\r
        </p>\r
        <div style={{
        display: 'flex',
        gap: 8
      }}>\r
          <ArvoButton label="Open Drawer" variant="primary" onClick={() => setOpen(true)} />\r
          <ArvoButton label="Close via API" variant="outline" onClick={() => handleRef.current?.close('programmatic')} />\r
        </div>\r
        <ArvoDrawer isOpen={open} onOpenChange={setOpen} instanceRef={handleRef} title="Focus Return" side="right" isClosable actions={false}>\r
          <div style={{
          padding: 16
        }}>\r
            <p style={{
            margin: 0
          }}>\r
              Press Escape, click the backdrop, or click the close button.\r
              Focus will return to the trigger that opened this drawer.\r
            </p>\r
          </div>\r
        </ArvoDrawer>\r
      </div>;
  }
}`,...(Yt=(Xt=he.parameters)==null?void 0:Xt.docs)==null?void 0:Yt.source}}};const Us=["Playground","KitchenSink","Default","SideRight","SideLeft","NoMask","MaskDefault","MaskBlur","MaskCustomOpacity","CloseOnEscapeOff","CloseOnOutsideClickOff","NoMaskClosesOnOutsideClick","NoMaskIgnoresOutsideClick","CloseOnMaskClickOffLegacy","LockScrollAuto","LockScrollOn","LockScrollOff","HeaderActionsAllTypes","WithBackAndClose","NotClosable","StickyHeaderFull","StickyTabsOnly","StickySearchOnly","FooterPrimaryAndSecondary","FooterSuppressed","Narrow","Wide","LoadingSkeleton","LoadingToggle","Disabled","EditDrawer","FilterDrawer","SettingsDrawer","CustomContainer","FocusReturnDemo"],dr=Object.freeze(Object.defineProperty({__proto__:null,CloseOnEscapeOff:Q,CloseOnMaskClickOffLegacy:z,CloseOnOutsideClickOff:$,CustomContainer:me,Default:M,Disabled:ce,EditDrawer:de,FilterDrawer:ue,FocusReturnDemo:he,FooterPrimaryAndSecondary:j,FooterSuppressed:re,HeaderActionsAllTypes:L,KitchenSink:q,LoadingSkeleton:ie,LoadingToggle:le,LockScrollAuto:Z,LockScrollOff:X,LockScrollOn:J,MaskBlur:K,MaskCustomOpacity:_,MaskDefault:V,Narrow:ne,NoMask:W,NoMaskClosesOnOutsideClick:U,NoMaskIgnoresOutsideClick:G,NotClosable:ee,Playground:P,SettingsDrawer:pe,SideLeft:N,SideRight:I,StickyHeaderFull:ae,StickySearchOnly:se,StickyTabsOnly:te,Wide:oe,WithBackAndClose:Y,__namedExportsOrder:Us,default:$s},Symbol.toStringTag,{value:"Module"}));export{Q as C,dr as D,de as E,ue as F,L as H,q as K,Z as L,V as M,W as N,P,I as S,Y as W,N as a,K as b,_ as c,$ as d,U as e,G as f,J as g,X as h,ee as i,ae as j,te as k,se as l,j as m,re as n,ne as o,oe as p,ie as q,le as r,ce as s,pe as t,me as u,he as v};
