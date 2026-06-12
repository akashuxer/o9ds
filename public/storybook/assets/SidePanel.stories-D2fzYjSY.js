import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n,y as en,z as tn}from"./iframe-BaOp0t6F.js";import{P as an,s as nn,a as rn,m,b as me,S as A,c as sn,d as on,e as ln}from"./sample-content-DZHJz4uL.js";import{A as dn}from"./IconButton-BgwDUYzG.js";import{u as Fe}from"./useControllableState-BcENo7ec.js";import{u as cn}from"./useFocusTrap-BePVbEUc.js";import{u as un}from"./useOverlay-Bo9f1g6f.js";import{r as pn}from"./loading-flag-DkqmYwgU.js";import{A as mn}from"./Button-B8O_kk1m.js";import{A as yn}from"./Textbox-BjaSSAvr.js";import{A as fn}from"./Checkbox-k9WMnmR3.js";const hn=n.forwardRef(function({isPinned:s,isDisabled:l,onClick:d},o){const b=s?"Unpin panel":"Pin panel";return e.jsx(dn,{ref:o,className:"arvo-sp__pin",size:"sm",variant:"tertiary",icon:"push-pin",tooltip:b,isDisabled:l,isSelected:s,onClick:d,"aria-label":b})});function we(r){if(r!=null)return typeof r=="number"?`${r}px`:r}function gn(r,s){const{variant:l="layout",side:d="right",isPinnable:o=!1,isPinned:b,defaultPinned:g=!0,onPinChange:c,hasSplitter:L=!1,width:ae=290,minWidth:ne=280,maxWidth:y=null,isOpen:ye,defaultOpen:fe=!0,onOpenChange:re,onOpen:se,onClose:ie,closeOnEscape:Ae=!0,closeOnOutside:Pe=!1,isDisabled:k=!1,isLoading:kn=!1,ariaLabel:Ca,className:Ta,children:Ha,instanceRef:ja,title:xe=null,hasHeader:Ra=!0,hasBackButton:Ce=!1,onBack:La,headerActions:Da,stickyHeader:Oa=!1,actions:Fa=!1,hasFooter:wn,isClosable:he=!1,searchQuery:Ba,defaultSearchQuery:qa,onSearchChange:Ia,onTabSelect:Wa,...Ea}=r,oe=pn(),D=n.useRef(null),ge=n.useRef(null),Te=n.useRef(null),le=un(),He=`arvo-sp-${n.useId()}`,f=n.useRef(null),be=n.useRef(null),ve=n.useRef(!1),Va=n.useRef(!1),[Na,Se]=n.useState(!1);n.useImperativeHandle(s,()=>D.current,[]);const[v,je]=Fe(b,g),[w,Re]=Fe(ye,fe),[Ua,_a]=n.useState(null),i=o?v?"layout":"overlay":Ua??l,u=i==="layout"?!0:w,Le=n.useRef(u);Le.current=u;const O=n.useCallback(t=>{t!==v&&(je(t),c==null||c(t))},[v,c,je]),de=n.useCallback(t=>{t!==w&&(Re(t),re==null||re(t))},[w,re,Re]),ce=n.useCallback(()=>{i==="overlay"&&(w||(se==null?void 0:se())!==!1&&de(!0))},[i,w,se,de]),S=n.useCallback(()=>{i==="overlay"&&!w||(ie==null?void 0:ie())!==!1&&i==="overlay"&&de(!1)},[i,w,ie,de]),De=n.useCallback(()=>{i==="overlay"&&(w?S():ce())},[i,w,ce,S]),Ka=n.useCallback(()=>{k||(ve.current=!0,O(!v))},[k,v,O]);n.useEffect(()=>{var t;ve.current&&(ve.current=!1,(t=Te.current)==null||t.focus({preventScroll:!0}))},[v]);const ke=n.useRef(u);n.useEffect(()=>{if(i!=="overlay"){ke.current=u,Se(!1);return}const t=ke.current;if(ke.current=u,u===t)return;const a=D.current;if(a)if(u)typeof document<"u"&&(be.current=document.activeElement),en({element:a,type:"fade"}).then(()=>{Se(!0)});else{Se(!1),tn({element:a,type:"fade"});const p=be.current;be.current=null,p&&typeof p.focus=="function"&&p.focus({preventScroll:!0})}},[u,i]),n.useEffect(()=>{if(!(i!=="overlay"||!u||!D.current))return le.open({id:He,type:"side-panel",element:D.current,priority:0,config:{autoCloseOnOutsideClick:!1,managesOwnFocus:!0,managesOwnBackdrop:!0},onClose:()=>{Le.current&&S()}}),()=>{le.close(He)}},[i,u]),cn(ge,{active:i==="overlay"&&u&&Na&&!k,initialFocus:"first",escapeDeactivates:!1,returnFocusOnDeactivate:!1,allowOutsideClick:!0}),n.useEffect(()=>{if(i!=="overlay"||!u||!Ae)return;const t=a=>{a.key==="Escape"&&(a.stopPropagation(),S())};return document.addEventListener("keydown",t,!0),()=>document.removeEventListener("keydown",t,!0)},[i,u,Ae,S]),n.useEffect(()=>{if(i!=="overlay"||!u||!Pe)return;const t=a=>{const p=a.target;p&&(le.isOverlayClickInside(ge.current,p)||S())};return document.addEventListener("mousedown",t,!0),()=>document.removeEventListener("mousedown",t,!0)},[i,u,Pe,S,le]);const ue=n.useMemo(()=>L==="auto"?i==="layout":L===!0,[L,i]);n.useEffect(()=>{ue&&!Va.current&&typeof process<"u"},[ue]),n.useImperativeHandle(ja,()=>({pinned(t){if(t===void 0)return v;o&&O(t)},setVariant(t){if(o){O(t==="layout");return}_a(t)},open:()=>ce(),close:()=>S(),toggle:()=>De(),isOpen:()=>u,setStickyHeader:t=>{var a;return(a=f.current)==null?void 0:a.setStickyHeader(t)},setHeaderActions:t=>{var a;return(a=f.current)==null?void 0:a.setHeaderActions(t)},setActions:t=>{var a;return(a=f.current)==null?void 0:a.setActions(t)},setInfo:t=>{var a;return(a=f.current)==null?void 0:a.setInfo(t)},updateAction:(t,a)=>{var p;return(p=f.current)==null?void 0:p.updateAction(t,a)},search(t){var a,p;if(t===void 0)return((a=f.current)==null?void 0:a.search())??"";(p=f.current)==null||p.search(t)},selectedTab(t){var a,p;if(t===void 0)return((a=f.current)==null?void 0:a.selectedTab())??null;(p=f.current)==null||p.selectedTab(t)},setTitle:t=>{var a;return(a=f.current)==null?void 0:a.setTitle(t)},loading(t){var a;if(t===void 0)return oe;(a=f.current)==null||a.loading(t)},disabled(t){var a;if(t===void 0)return k;(a=f.current)==null||a.disabled(t)},focus:t=>{var a;return(a=f.current)==null?void 0:a.focus(t)}}),[v,o,O,ce,S,De,u,oe,k]);const Ma=ue?d==="right"?"arvo-sp--with-splitter-l":"arvo-sp--with-splitter-r":null,Qa=["arvo-sp",`arvo-sp--${i}`,`arvo-sp--side-${d}`,o&&"arvo-sp--pinnable",he&&"arvo-sp--closable",Ce&&"arvo-sp--with-back",o&&(v?"is-pinned":"is-unpinned"),i==="overlay"&&u&&"open",oe,k&&"is-disabled",Ma,Ta].filter(Boolean).join(" "),$a=n.useMemo(()=>{const t=we(ae),a=we(ne),p=we(y),pe={};return t&&(pe["--arvo-sp-width"]=t),a&&(pe["--arvo-sp-min-width"]=a),p&&(pe["--arvo-sp-max-width"]=p),pe},[ae,ne,y]),Ga=i==="overlay"?"dialog":"region",za=i==="overlay"?"false":void 0,Ya=i==="overlay"&&!u?!0:void 0,Za=Ca??xe??void 0,Oe=ue?e.jsx("div",{className:"arvo-sp__splitter","aria-hidden":"true"}):null,Ja=d==="right"?Oe:null,Xa=d==="left"?Oe:null;return e.jsxs("div",{ref:D,className:Qa,style:$a,...Ea,children:[Ja,e.jsx("div",{ref:ge,className:"arvo-sp__pane",role:Ga,"aria-modal":za,"aria-hidden":Ya,"aria-busy":void 0,"aria-disabled":k||void 0,"aria-label":Za,children:e.jsx(an,{ref:f,parentBlock:"arvo-sp",title:xe,hasHeader:Ra,hasBackButton:Ce,onBack:La,headerActions:Da,stickyHeader:Oa,actions:Fa,isClosable:he,onClose:S,isLoading:oe,isDisabled:k,isPinnableCount:o?1:0,isClosableCount:he?1:0,searchQuery:Ba,defaultSearchQuery:qa,onSearchChange:Ia,onTabSelect:Wa,pinSlot:o?e.jsx(hn,{ref:Te,isPinned:v,isDisabled:k,onClick:Ka}):null,children:Ha})}),Xa]})}const h=n.forwardRef(gn);h.displayName="ArvoSidePanel";h.__docgenInfo={description:"",methods:[{name:"pinned",docblock:null,modifiers:[],params:[{name:"value",optional:!0,type:{name:"boolean"}}],returns:{type:{name:"union",raw:"boolean | void",elements:[{name:"boolean"},{name:"void"}]}}},{name:"setVariant",docblock:null,modifiers:[],params:[{name:"next",optional:!1,type:{name:"union",raw:"'layout' | 'overlay'",elements:[{name:"literal",value:"'layout'"},{name:"literal",value:"'overlay'"}],alias:"ArvoSidePanelVariant"}}],returns:{type:{name:"void"}}},{name:"open",docblock:null,modifiers:[],params:[],returns:null},{name:"close",docblock:null,modifiers:[],params:[],returns:null},{name:"toggle",docblock:null,modifiers:[],params:[],returns:null},{name:"isOpen",docblock:null,modifiers:[],params:[],returns:null},{name:"setStickyHeader",docblock:null,modifiers:[],params:[{name:"config",optional:!1,type:null}],returns:null},{name:"setHeaderActions",docblock:null,modifiers:[],params:[{name:"next",optional:!1,type:null}],returns:null},{name:"setActions",docblock:null,modifiers:[],params:[{name:"next",optional:!1,type:null}],returns:null},{name:"setInfo",docblock:null,modifiers:[],params:[{name:"config",optional:!1,type:null}],returns:null},{name:"updateAction",docblock:null,modifiers:[],params:[{name:"id",optional:!1,type:null},{name:"patch",optional:!1,type:null}],returns:null},{name:"search",docblock:null,modifiers:[],params:[{name:"query",optional:!0,type:{name:"string"}}],returns:{type:{name:"union",raw:"string | void",elements:[{name:"string"},{name:"void"}]}}},{name:"selectedTab",docblock:null,modifiers:[],params:[{name:"id",optional:!0,type:{name:"string"}}],returns:{type:{name:"union",raw:"string | null | void",elements:[{name:"string"},{name:"null"},{name:"void"}]}}},{name:"setTitle",docblock:null,modifiers:[],params:[{name:"next",optional:!1,type:null}],returns:null},{name:"loading",docblock:null,modifiers:[],params:[{name:"state",optional:!0,type:{name:"boolean"}}],returns:{type:{name:"union",raw:"boolean | void",elements:[{name:"boolean"},{name:"void"}]}}},{name:"disabled",docblock:null,modifiers:[],params:[{name:"state",optional:!0,type:{name:"boolean"}}],returns:{type:{name:"union",raw:"boolean | void",elements:[{name:"boolean"},{name:"void"}]}}},{name:"focus",docblock:null,modifiers:[],params:[{name:"target",optional:!1,type:null}],returns:null}],displayName:"ArvoSidePanel",props:{variant:{required:!1,tsType:{name:"union",raw:"'layout' | 'overlay'",elements:[{name:"literal",value:"'layout'"},{name:"literal",value:"'overlay'"}]},description:""},side:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""},isPinnable:{required:!1,tsType:{name:"boolean"},description:""},isPinned:{required:!1,tsType:{name:"boolean"},description:""},defaultPinned:{required:!1,tsType:{name:"boolean"},description:""},onPinChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(pinned: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"pinned"}],return:{name:"void"}}},description:""},hasSplitter:{required:!1,tsType:{name:"union",raw:"boolean | 'auto'",elements:[{name:"boolean"},{name:"literal",value:"'auto'"}]},description:""},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},minWidth:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:"string | number | null",elements:[{name:"string"},{name:"number"},{name:"null"}]},description:""},isOpen:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => boolean | void",signature:{arguments:[],return:{name:"union",raw:"boolean | void",elements:[{name:"boolean"},{name:"void"}]}}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => boolean | void",signature:{arguments:[],return:{name:"union",raw:"boolean | void",elements:[{name:"boolean"},{name:"void"}]}}},description:""},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:""},closeOnOutside:{required:!1,tsType:{name:"boolean"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},instanceRef:{required:!1,tsType:{name:"Ref",elements:[{name:"ArvoSidePanelHandle"}],raw:"Ref<ArvoSidePanelHandle>"},description:"Forwarded to the imperative handle. The forwarded `ref` always points to\nthe host `.arvo-sp` element; use `instanceRef` for the imperative API."},title:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},hasHeader:{required:!1,tsType:{name:"boolean"},description:""},hasBackButton:{required:!1,tsType:{name:"boolean"},description:""},onBack:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},headerActions:{required:!1,tsType:{name:"Array",elements:[{name:"ArvoPanelHeaderAction"}],raw:"ArvoPanelHeaderAction[]"},description:""},stickyHeader:{required:!1,tsType:{name:"union",raw:"ArvoPanelStickyHeaderConfig | false",elements:[{name:"ArvoPanelStickyHeaderConfig"},{name:"literal",value:"false"}]},description:""},actions:{required:!1,tsType:{name:"union",raw:"ArvoPanelAction[] | false",elements:[{name:"Array",elements:[{name:"ArvoPanelAction"}],raw:"ArvoPanelAction[]"},{name:"literal",value:"false"}]},description:""},hasFooter:{required:!1,tsType:{name:"boolean"},description:""},isClosable:{required:!1,tsType:{name:"boolean"},description:""},searchQuery:{required:!1,tsType:{name:"string"},description:""},defaultSearchQuery:{required:!1,tsType:{name:"string"},description:""},onSearchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string, matchedCount: number | null) => void",signature:{arguments:[{type:{name:"string"},name:"query"},{type:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},name:"matchedCount"}],return:{name:"void"}}},description:"Fired when the search query changes. `matchedCount` is `null` (the panel\ndoes not own the body content); compute and surface your own filtered\ncount via the `setInfo()` handle method or a reactive `stickyHeader`."},onTabSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}},composes:["Omit"]};function xa(){const r=["Q1 Demand Forecast","Q2 Revenue Projection","Annual Capacity Plan","Holiday Lift Adjustment","Supplier Risk Heatmap","Pricing Sensitivity Model","Account Plan Review"];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:16},children:r.map(s=>e.jsx("div",{style:{padding:8},children:s},s))})}const R={banner:{type:"info",message:"Plan locked. Edits will require approval before publishing.",isDismissible:!0},tabs:[{id:"all",label:"All",icon:"globe"},{id:"mine",label:"Mine"},{id:"shared",label:"Shared with me"},{id:"archive",label:"Archive",icon:"history"}],search:{placeholder:"Search forecasts...",shortcut:"Ctrl+K"},info:{type:"info",message:"Type in the search field to filter the list."}},Be=[{id:"sku-1",name:"Atlas Trail Runner - Mens 9",status:"flagged"},{id:"sku-2",name:"Nimbus Rain Shell - Large",status:"open"},{id:"sku-3",name:"Summit Insulated Bottle 1L",status:"approved"},{id:"sku-4",name:"Cirrus Lightweight Tent 2P",status:"flagged"},{id:"sku-5",name:"Vector Carbon Trekking Poles",status:"open"},{id:"sku-6",name:"Harbor Merino Base Layer - M",status:"approved"},{id:"sku-7",name:"Drift Packable Daypack 22L",status:"open"},{id:"sku-8",name:"Forge Cast Iron Skillet 10in",status:"approved"},{id:"sku-9",name:"Glacier Cooler Tote 30 Can",status:"flagged"},{id:"sku-10",name:"Meridian GPS Watch Series 4",status:"open"},{id:"sku-11",name:"Pioneer Camp Chair - Folding",status:"approved"},{id:"sku-12",name:"Solstice Headlamp 400 Lumen",status:"open"}];function bn(r){return r==="flagged"?"flag":r==="approved"?"check-circle":"circle-o"}const vn={title:"Overlays/SidePanel",component:h,tags:["!dev","stable"],argTypes:{variant:{control:{type:"select"},options:["layout","overlay"],description:"Position model: layout (inline) or overlay (slide-in)",table:{defaultValue:{summary:"layout"}}},side:{control:{type:"select"},options:["left","right"],description:"Edge the pane docks to",table:{defaultValue:{summary:"right"}}},isPinnable:{control:{type:"boolean"},description:"Enable pin/unpin toggle between layout and overlay variants",table:{defaultValue:{summary:"false"}}},isPinned:{control:{type:"boolean"},description:"Controlled pinned state (true = layout, false = overlay)"},hasSplitter:{control:{type:"select"},options:["auto",!0,!1],description:'Whether to render the splitter rail. Defaults to `false` until ArvoSplitter ships; pass `"auto"` to opt in to the placeholder splitter for layout-mode panels.',table:{defaultValue:{summary:"false"}}},width:{control:{type:"number"},description:"Pane width in px",table:{defaultValue:{summary:"290"}}},isLoading:{control:{type:"boolean"},description:"Pattern B skeleton loading state",table:{defaultValue:{summary:"false"}}},isDisabled:{control:{type:"boolean"},description:"Whole-panel disabled state",table:{defaultValue:{summary:"false"}}},title:{control:{type:"text"},description:"Panel title text"},isClosable:{control:{type:"boolean"},description:"Show the close button in the header",table:{defaultValue:{summary:"false"}}},hasBackButton:{control:{type:"boolean"},description:"Show a back arrow button in the header",table:{defaultValue:{summary:"false"}}}},args:{variant:"layout",side:"right",isPinnable:!1,hasSplitter:!1,width:290,isLoading:!1,isDisabled:!1,title:"Forecast Workspace",isClosable:!0,hasBackButton:!0,children:e.jsx(xa,{})},decorators:[r=>e.jsxs(A,{width:520,height:720,caption:"SidePanel host (520x720 sized canvas)",children:[e.jsx("div",{style:{flex:1,padding:16},children:"Page content"}),e.jsx(r,{})]})]},P={args:{title:"Try every prop",isPinnable:!0,isClosable:!0,hasBackButton:!0,headerActions:me(),stickyHeader:R,actions:m()}},F={name:"Kitchen sink",render:function(){const[s,l]=n.useState(""),[d,o]=n.useState("all"),b=Be.length,g=s.trim().toLowerCase(),c=Be.filter(y=>{const ye=d==="all"||y.status===d,fe=!g||y.name.toLowerCase().includes(g);return ye&&fe}),L=[{id:"refresh",type:"btn",icon:"refresh",label:"Refresh data"},{id:"sort",type:"dropdown",icon:"sort",label:"Sort",items:[{id:"name",label:"Name (A-Z)"},{id:"status",label:"Status"},{id:"recent",label:"Recently updated"}]},{id:"export",type:"split",icon:"download",label:"Export",items:[{id:"csv",label:"Export as CSV"},{id:"xlsx",label:"Export as Excel"},{id:"pdf",label:"Export as PDF"}]},{id:"archived",type:"switch",label:"Show archived"},{id:"select-all",type:"checkbox",label:"Select all"}],ae={banner:{type:"warning",title:"Review needed",message:"3 SKUs are flagged and must be reviewed before the Friday lock.",isCompact:!0,isDismissible:!0},tabs:[{id:"all",label:"All"},{id:"flagged",label:"Flagged"},{id:"approved",label:"Approved"}],search:{placeholder:"Search SKUs",shortcut:"Ctrl+K"},info:{type:"info",message:`Showing ${c.length} of ${b} SKUs`,showWhen:"filtered"}},ne=[{id:"reset",label:"Reset",icon:"undo",isIconOnly:!0,variant:"tertiary",onClick:()=>{l(""),o("all")}},{id:"cancel",label:"Cancel",variant:"secondary"},{id:"apply",label:"Apply",variant:"primary"}];return e.jsxs(A,{width:560,height:720,caption:"Kitchen sink -- type to reveal the filtered info row",children:[e.jsx("div",{style:{flex:1}}),e.jsx(h,{title:"Demand Review",side:"right",variant:"layout",width:"380px",hasBackButton:!0,isClosable:!0,headerActions:L,stickyHeader:ae,actions:ne,onSearchChange:y=>l(y),onTabSelect:y=>o(y),children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:2,padding:8},children:c.length===0?e.jsx("div",{style:{padding:24},children:"No SKUs match your filters."}):c.map(y=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:8},children:[e.jsx("i",{className:`o9con o9con-${bn(y.status)}`,"aria-hidden":"true"}),e.jsx("span",{style:{flex:"1 1 auto",minWidth:0},children:y.name}),y.status==="flagged"&&e.jsx("i",{className:"o9con o9con-flag","aria-hidden":"true",style:{flex:"0 0 auto"}})]},y.id))})})]})}},x={args:{title:"Forecast Workspace",hasBackButton:!0,isClosable:!0,headerActions:me(),stickyHeader:R,actions:m()}},B={args:{variant:"layout",title:"Layout Variant (default)",isClosable:!0,actions:m()}},q={args:{variant:"overlay",title:"Overlay Variant",isOpen:!0,isClosable:!0,actions:m()}},I={args:{side:"left",title:"Docked Left",isClosable:!0,actions:m()},decorators:[r=>e.jsxs(A,{width:520,height:720,children:[e.jsx(r,{}),e.jsx("div",{style:{flex:1}})]})]},W={args:{side:"right",title:"Docked Right (default)",isClosable:!0,actions:m()}},E={name:"Pinnable + Pinned (layout)",args:{isPinnable:!0,defaultPinned:!0,title:"Pinned Panel",isClosable:!0,actions:m()}},V={name:"Pinnable + Unpinned (overlay)",args:{isPinnable:!0,defaultPinned:!1,title:"Unpinned Panel",isClosable:!0,actions:m()}},N={name:"With Splitter (auto)",args:{hasSplitter:"auto",variant:"layout",title:"Splitter (auto)",isClosable:!0}},U={args:{hasSplitter:!1,title:"No Splitter",isClosable:!0}},C={args:{title:"Header Actions (all types)",isClosable:!0,headerActions:[...me({onBtn:()=>console.log("btn click"),onDropdownSelect:r=>console.log("dropdown select:",r),onSplitAction:()=>console.log("split action click"),onSplitSelect:r=>console.log("split select:",r),onSwitchChange:r=>console.log("switch change:",r)}),{id:"select-all",type:"checkbox",label:"Select all rows",defaultChecked:!1,onChange:r=>console.log("checkbox change:",r)}],actions:m()}},T={name:"Back + Close buttons",args:{hasBackButton:!0,isClosable:!0,title:"Back + Close",onBack:()=>console.log("back clicked"),onClose:()=>console.log("close clicked"),actions:m()}},_={name:"Sticky Header (banner + tabs + search + info)",args:{title:"Sticky Header Full",isClosable:!0,stickyHeader:R,actions:m()}},K={args:{title:"Tabs only",isClosable:!0,stickyHeader:rn,actions:m()}},M={args:{title:"Search only",isClosable:!0,stickyHeader:nn,actions:m()}},H={name:"Footer: primary right / secondary left",args:{title:"Footer order",isClosable:!0,actions:on()}},Q={name:"Footer suppressed (actions=false)",args:{title:"No footer",isClosable:!0,actions:!1}},$={name:"Loading (Pattern B skeleton)",args:{isLoading:!0,title:"Loading Panel",isClosable:!0,stickyHeader:R,actions:m()}},j={name:"Loading toggle (runtime)",render:function(){const[s,l]=n.useState(!1);return n.useEffect(()=>{const d=window.setInterval(()=>l(o=>!o),1500);return()=>window.clearInterval(d)},[]),e.jsx(h,{title:s?"Loading...":"Ready",isClosable:!0,isLoading:s,stickyHeader:R,actions:m(),children:e.jsx(xa,{})})}},G={args:{isDisabled:!0,title:"Disabled Panel",isClosable:!0,headerActions:me(),stickyHeader:R,actions:m()}},z={args:{title:"Panel Title",isClosable:!0}},Y={args:{title:"",isClosable:!0}},qe=["Region","Product","Channel","Time range","Currency","Segment","Account","Category"],Z={name:"Filter Pane",render:function(){const[s,l]=n.useState(""),d=s.trim().toLowerCase(),o=qe.filter(c=>!d||c.toLowerCase().includes(d)),b=[{id:"saved-views",type:"dropdown",icon:"bookmark",label:"Saved views",tooltip:"Saved views",items:[{id:"mine",label:"My views"},{id:"shared",label:"Shared with me"},{id:"archived",label:"Archived"}]},{id:"clear",type:"btn",icon:"eraser",label:"Clear all",tooltip:"Clear all filters"}],g={search:{placeholder:"Search filters..."},info:{type:"info",message:`${o.length} of ${qe.length} filters match`,showWhen:"filtered"}};return e.jsxs(A,{width:520,height:720,caption:"Filter Pane recipe",children:[e.jsx("div",{style:{flex:1}}),e.jsx(h,{title:"Filters",side:"right",variant:"layout",isClosable:!0,headerActions:b,stickyHeader:g,onSearchChange:c=>l(c),actions:sn(),children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,padding:16},children:o.length===0?e.jsx("div",{style:{padding:8},children:"No filters match your search."}):o.map(c=>e.jsx(fn,{label:c},c))})})]})}},J={name:"Workflow Pane",render:function(){const[s,l]=n.useState("overview"),d=[{id:"refresh",type:"btn",icon:"refresh",label:"Refresh",tooltip:"Refresh"},{id:"view",type:"dropdown",icon:"cog",label:"View options",tooltip:"View options",items:[{id:"compact",label:"Compact view"},{id:"detailed",label:"Detailed view"}]}];return e.jsxs(A,{width:520,height:720,caption:"Workflow Pane recipe",children:[e.jsx("div",{style:{flex:1}}),e.jsx(h,{title:"Workflow",side:"right",variant:"layout",isClosable:!0,headerActions:d,stickyHeader:{tabs:[{id:"overview",label:"Overview"},{id:"history",label:"History",icon:"history"},{id:"settings",label:"Settings",icon:"cog"}]},onTabSelect:l,actions:!1,children:e.jsxs("div",{style:{padding:16,display:"flex",flexDirection:"column",gap:12},children:[s==="overview"&&e.jsxs(e.Fragment,{children:[e.jsx("h4",{style:{margin:0},children:"Overview"}),e.jsx("p",{style:{margin:0},children:"Workflow status, current step, owners, and SLA breakdown."})]}),s==="history"&&e.jsxs(e.Fragment,{children:[e.jsx("h4",{style:{margin:0},children:"History"}),e.jsxs("ul",{style:{margin:0,paddingLeft:20},children:[e.jsx("li",{children:"2 hours ago -- Reviewed by Maya Chen"}),e.jsx("li",{children:"Yesterday -- Submitted by Aaron Patel"}),e.jsx("li",{children:"3 days ago -- Created by Priya Iyer"})]})]}),s==="settings"&&e.jsxs(e.Fragment,{children:[e.jsx("h4",{style:{margin:0},children:"Settings"}),e.jsx("p",{style:{margin:0},children:"Notification rules, escalation paths, and access scopes."})]})]})})]})}},X={name:"Gen AI Pane",render:function(){const[s,l]=n.useState(""),d=[{id:"model",type:"dropdown",icon:"flash",label:"Model",tooltip:"Choose model",items:[{id:"fast",label:"Fast"},{id:"balanced",label:"Balanced"},{id:"precise",label:"Precise"}]},{id:"history",type:"btn",icon:"history",label:"History",tooltip:"Conversation history"}];return e.jsxs(A,{width:520,height:720,caption:"Gen AI Pane recipe",children:[e.jsx("div",{style:{flex:1}}),e.jsx(h,{title:"AI Assistant",side:"right",variant:"layout",isClosable:!0,headerActions:d,stickyHeader:{info:{type:"info",message:"Responses may be inaccurate. Verify important information."}},actions:ln({onSend:()=>console.log("send draft:",s)}),children:e.jsxs("div",{style:{padding:16,display:"flex",flexDirection:"column",gap:8},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"You:"})," Summarize Q1 demand variance by region."]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Assistant:"})," Q1 demand exceeded plan by 4.2% across NA + LatAm; APAC tracked 1.8% under plan, driven by holiday lift normalization."]}),e.jsx("div",{style:{marginTop:8},children:e.jsx(yn,{size:"sm",isFullWidth:!0,value:s,placeholder:"Ask a follow-up...",onChange:o=>l(o.target.value),"aria-label":"Ask a follow-up"})})]})})]})}},ee={name:"Pin/Unpin Demo (DOM-invariant)",render:function(){const s=n.useRef(null),[l,d]=n.useState(!0),[o,b]=n.useState("initial");return n.useEffect(()=>{const g=window.setTimeout(()=>{const c=document.querySelector(".arvo-sp__pane");c&&(c.dataset.idTag||(c.dataset.idTag=String(Date.now())),b(c.dataset.idTag))},0);return()=>window.clearTimeout(g)},[l]),e.jsxs(A,{width:520,height:720,caption:`Pin/Unpin Demo -- paneId=${o}`,children:[e.jsxs("div",{style:{flex:1,display:"flex",alignItems:"flex-start",padding:16,gap:8},children:[e.jsx(mn,{label:l?"Unpin":"Pin",variant:"secondary",icon:l?"unlock":"lock",onClick:()=>{var g;return(g=s.current)==null?void 0:g.pinned(!l)}}),e.jsxs("span",{style:{padding:8},children:["Current: ",e.jsx("strong",{children:l?"Pinned (layout)":"Unpinned (overlay)"})]})]}),e.jsx(h,{title:"Pinnable Panel",isPinnable:!0,defaultPinned:!0,onPinChange:d,instanceRef:s,isClosable:!0,stickyHeader:{tabs:[{id:"home",label:"Home"},{id:"recents",label:"Recents",icon:"history"}]},actions:m(),children:e.jsx("div",{style:{padding:16},children:e.jsxs("p",{style:{margin:0},children:["Toggling pin flips between ",e.jsx("code",{children:"layout"})," and ",e.jsx("code",{children:"overlay"})," ","variants without remounting the DOM tree."]})})})]})}},te={name:"Splitter Resolution Demo",render:()=>e.jsxs("div",{style:{display:"flex",gap:24,height:480},children:[e.jsxs("div",{style:{display:"flex",flex:1,position:"relative"},children:[e.jsx(h,{title:"auto (layout=on)",side:"left",variant:"layout",hasSplitter:"auto",width:200}),e.jsx("div",{style:{flex:1}})]}),e.jsxs("div",{style:{display:"flex",flex:1,position:"relative"},children:[e.jsx(h,{title:"true (always on)",side:"left",variant:"layout",hasSplitter:!0,width:200}),e.jsx("div",{style:{flex:1}})]}),e.jsxs("div",{style:{display:"flex",flex:1,position:"relative"},children:[e.jsx(h,{title:"false (always off)",side:"left",variant:"layout",hasSplitter:!1,width:200}),e.jsx("div",{style:{flex:1}})]})]})};var Ie,We,Ee,Ve,Ne;P.parameters={...P.parameters,docs:{...(Ie=P.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    title: 'Try every prop',
    isPinnable: true,
    isClosable: true,
    hasBackButton: true,
    headerActions: makeSampleHeaderActionsAllTypes(),
    stickyHeader: stickyHeaderShowcase,
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(Ee=(We=P.parameters)==null?void 0:We.docs)==null?void 0:Ee.source},description:{story:`Playground keeps a fully-loaded composition (header actions, sticky region,\r
custom body, footer) and exposes Storybook controls for live tweaking every\r
prop.`,...(Ne=(Ve=P.parameters)==null?void 0:Ve.docs)==null?void 0:Ne.description}}};var Ue,_e,Ke;F.parameters={...F.parameters,docs:{...(Ue=F.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  name: 'Kitchen sink',
  render: function KitchenSinkStory() {
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
      variant: 'secondary'
    }, {
      id: 'apply',
      label: 'Apply',
      variant: 'primary'
    }];
    return <StoryShell width={560} height={720} caption="Kitchen sink -- type to reveal the filtered info row">\r
        <div style={{
        flex: 1
      }} />\r
        <ArvoSidePanel title="Demand Review" side="right" variant="layout" width="380px" hasBackButton isClosable headerActions={headerActions} stickyHeader={stickyHeader} actions={footerActions} onSearchChange={value => setQuery(value)} onTabSelect={id => setTab(id)}>\r
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
        </ArvoSidePanel>\r
      </StoryShell>;
  }
}`,...(Ke=(_e=F.parameters)==null?void 0:_e.docs)==null?void 0:Ke.source}}};var Me,Qe,$e,Ge,ze;x.parameters={...x.parameters,docs:{...(Me=x.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    title: 'Forecast Workspace',
    hasBackButton: true,
    isClosable: true,
    headerActions: makeSampleHeaderActionsAllTypes(),
    stickyHeader: stickyHeaderShowcase,
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...($e=(Qe=x.parameters)==null?void 0:Qe.docs)==null?void 0:$e.source},description:{story:`The Default story exercises every visible surface: a back button, four header\r
actions, a banner, an active tabstrip, a filter search, an info bar, a custom\r
body, and a primary / secondary footer in the correct primary-right order.`,...(ze=(Ge=x.parameters)==null?void 0:Ge.docs)==null?void 0:ze.description}}};var Ye,Ze,Je;B.parameters={...B.parameters,docs:{...(Ye=B.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  args: {
    variant: 'layout',
    title: 'Layout Variant (default)',
    isClosable: true,
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(Je=(Ze=B.parameters)==null?void 0:Ze.docs)==null?void 0:Je.source}}};var Xe,et,tt;q.parameters={...q.parameters,docs:{...(Xe=q.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  args: {
    variant: 'overlay',
    title: 'Overlay Variant',
    isOpen: true,
    isClosable: true,
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(tt=(et=q.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var at,nt,rt;I.parameters={...I.parameters,docs:{...(at=I.parameters)==null?void 0:at.docs,source:{originalSource:`{
  args: {
    side: 'left',
    title: 'Docked Left',
    isClosable: true,
    actions: makeSamplePrimarySecondaryActions()
  },
  decorators: [Story => <StoryShell width={520} height={720}>\r
        <Story />\r
        <div style={{
      flex: 1
    }} />\r
      </StoryShell>]
}`,...(rt=(nt=I.parameters)==null?void 0:nt.docs)==null?void 0:rt.source}}};var st,it,ot;W.parameters={...W.parameters,docs:{...(st=W.parameters)==null?void 0:st.docs,source:{originalSource:`{
  args: {
    side: 'right',
    title: 'Docked Right (default)',
    isClosable: true,
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(ot=(it=W.parameters)==null?void 0:it.docs)==null?void 0:ot.source}}};var lt,dt,ct;E.parameters={...E.parameters,docs:{...(lt=E.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  name: 'Pinnable + Pinned (layout)',
  args: {
    isPinnable: true,
    defaultPinned: true,
    title: 'Pinned Panel',
    isClosable: true,
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(ct=(dt=E.parameters)==null?void 0:dt.docs)==null?void 0:ct.source}}};var ut,pt,mt;V.parameters={...V.parameters,docs:{...(ut=V.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  name: 'Pinnable + Unpinned (overlay)',
  args: {
    isPinnable: true,
    defaultPinned: false,
    title: 'Unpinned Panel',
    isClosable: true,
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(mt=(pt=V.parameters)==null?void 0:pt.docs)==null?void 0:mt.source}}};var yt,ft,ht;N.parameters={...N.parameters,docs:{...(yt=N.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  name: 'With Splitter (auto)',
  args: {
    hasSplitter: 'auto',
    variant: 'layout',
    title: 'Splitter (auto)',
    isClosable: true
  }
}`,...(ht=(ft=N.parameters)==null?void 0:ft.docs)==null?void 0:ht.source}}};var gt,bt,vt;U.parameters={...U.parameters,docs:{...(gt=U.parameters)==null?void 0:gt.docs,source:{originalSource:`{
  args: {
    hasSplitter: false,
    title: 'No Splitter',
    isClosable: true
  }
}`,...(vt=(bt=U.parameters)==null?void 0:bt.docs)==null?void 0:vt.source}}};var St,kt,wt,At,Pt;C.parameters={...C.parameters,docs:{...(St=C.parameters)==null?void 0:St.docs,source:{originalSource:`{
  args: {
    title: 'Header Actions (all types)',
    isClosable: true,
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
    }),
    // Add the checkbox (intentionally omitted from the default factory).
    {
      id: 'select-all',
      type: 'checkbox',
      label: 'Select all rows',
      defaultChecked: false,
      // eslint-disable-next-line no-console
      onChange: v => console.log('checkbox change:', v)
    } satisfies ArvoPanelHeaderAction],
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(wt=(kt=C.parameters)==null?void 0:kt.docs)==null?void 0:wt.source},description:{story:`Demonstrates the full header-action whitelist. One of each type renders\r
the matching Arvo primitive: ArvoIconButton, ArvoDropdownIconButton,\r
ArvoSplitIconButton, ArvoSwitch, and ArvoCheckbox. Each is keyboard\r
accessible and wired to a console-logging callback.`,...(Pt=(At=C.parameters)==null?void 0:At.docs)==null?void 0:Pt.description}}};var xt,Ct,Tt,Ht,jt;T.parameters={...T.parameters,docs:{...(xt=T.parameters)==null?void 0:xt.docs,source:{originalSource:`{
  name: 'Back + Close buttons',
  args: {
    hasBackButton: true,
    isClosable: true,
    title: 'Back + Close',
    // eslint-disable-next-line no-console
    onBack: () => console.log('back clicked'),
    // eslint-disable-next-line no-console
    onClose: () => console.log('close clicked'),
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(Tt=(Ct=T.parameters)==null?void 0:Ct.docs)==null?void 0:Tt.source},description:{story:"Header with a Back button + Close button both visible and both wired.\r\nAsserts the back-button uses ArvoIconButton with `arrow-left` and the\r\nclose button uses ArvoIconButton with `close`.",...(jt=(Ht=T.parameters)==null?void 0:Ht.docs)==null?void 0:jt.description}}};var Rt,Lt,Dt;_.parameters={..._.parameters,docs:{...(Rt=_.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
  name: 'Sticky Header (banner + tabs + search + info)',
  args: {
    title: 'Sticky Header Full',
    isClosable: true,
    stickyHeader: stickyHeaderShowcase,
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(Dt=(Lt=_.parameters)==null?void 0:Lt.docs)==null?void 0:Dt.source}}};var Ot,Ft,Bt;K.parameters={...K.parameters,docs:{...(Ot=K.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
  args: {
    title: 'Tabs only',
    isClosable: true,
    stickyHeader: sampleStickyTabsOnly,
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(Bt=(Ft=K.parameters)==null?void 0:Ft.docs)==null?void 0:Bt.source}}};var qt,It,Wt;M.parameters={...M.parameters,docs:{...(qt=M.parameters)==null?void 0:qt.docs,source:{originalSource:`{
  args: {
    title: 'Search only',
    isClosable: true,
    stickyHeader: sampleStickySearchOnly,
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(Wt=(It=M.parameters)==null?void 0:It.docs)==null?void 0:Wt.source}}};var Et,Vt,Nt,Ut,_t;H.parameters={...H.parameters,docs:{...(Et=H.parameters)==null?void 0:Et.docs,source:{originalSource:`{
  name: 'Footer: primary right / secondary left',
  args: {
    title: 'Footer order',
    isClosable: true,
    actions: makePrimaryFirstActions()
  }
}`,...(Nt=(Vt=H.parameters)==null?void 0:Vt.docs)==null?void 0:Nt.source},description:{story:`Asserts the variant-driven footer order rule: even when actions are passed\r
primary-first in source order, the primary button still renders on the\r
right and the secondary on the left.`,...(_t=(Ut=H.parameters)==null?void 0:Ut.docs)==null?void 0:_t.description}}};var Kt,Mt,Qt;Q.parameters={...Q.parameters,docs:{...(Kt=Q.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
  name: 'Footer suppressed (actions=false)',
  args: {
    title: 'No footer',
    isClosable: true,
    actions: false
  }
}`,...(Qt=(Mt=Q.parameters)==null?void 0:Mt.docs)==null?void 0:Qt.source}}};var $t,Gt,zt;$.parameters={...$.parameters,docs:{...($t=$.parameters)==null?void 0:$t.docs,source:{originalSource:`{
  name: 'Loading (Pattern B skeleton)',
  args: {
    isLoading: true,
    title: 'Loading Panel',
    isClosable: true,
    stickyHeader: stickyHeaderShowcase,
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(zt=(Gt=$.parameters)==null?void 0:Gt.docs)==null?void 0:zt.source}}};var Yt,Zt,Jt,Xt,ea;j.parameters={...j.parameters,docs:{...(Yt=j.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
  name: 'Loading toggle (runtime)',
  render: function LoadingToggleStory() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      const id = window.setInterval(() => setLoading(v => !v), 1500);
      return () => window.clearInterval(id);
    }, []);
    return <ArvoSidePanel title={loading ? 'Loading...' : 'Ready'} isClosable isLoading={loading} stickyHeader={stickyHeaderShowcase} actions={makeSamplePrimarySecondaryActions()}>\r
        <SampleBody />\r
      </ArvoSidePanel>;
  }
}`,...(Jt=(Zt=j.parameters)==null?void 0:Zt.docs)==null?void 0:Jt.source},description:{story:`Verifies that toggling isLoading on at runtime swaps the body to skeleton\r
rows AND hides the sticky region + footer (per the panel-shell loading\r
contract).`,...(ea=(Xt=j.parameters)==null?void 0:Xt.docs)==null?void 0:ea.description}}};var ta,aa,na;G.parameters={...G.parameters,docs:{...(ta=G.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    title: 'Disabled Panel',
    isClosable: true,
    headerActions: makeSampleHeaderActionsAllTypes(),
    stickyHeader: stickyHeaderShowcase,
    actions: makeSamplePrimarySecondaryActions()
  }
}`,...(na=(aa=G.parameters)==null?void 0:aa.docs)==null?void 0:na.source}}};var ra,sa,ia;z.parameters={...z.parameters,docs:{...(ra=z.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  args: {
    title: 'Panel Title',
    isClosable: true
  }
}`,...(ia=(sa=z.parameters)==null?void 0:sa.docs)==null?void 0:ia.source}}};var oa,la,da;Y.parameters={...Y.parameters,docs:{...(oa=Y.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  args: {
    title: '',
    isClosable: true
  }
}`,...(da=(la=Y.parameters)==null?void 0:la.docs)==null?void 0:da.source}}};var ca,ua,pa;Z.parameters={...Z.parameters,docs:{...(ca=Z.parameters)==null?void 0:ca.docs,source:{originalSource:`{
  name: 'Filter Pane',
  render: function FilterPaneStory() {
    const [query, setQuery] = useState('');
    const q = query.trim().toLowerCase();
    const visible = FILTER_FIELDS.filter(f => !q || f.toLowerCase().includes(q));
    const headerActions: ArvoPanelHeaderAction[] = [{
      id: 'saved-views',
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
        id: 'archived',
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
    return <StoryShell width={520} height={720} caption="Filter Pane recipe">\r
        <div style={{
        flex: 1
      }} />\r
        <ArvoSidePanel title="Filters" side="right" variant="layout" isClosable headerActions={headerActions} stickyHeader={stickyHeader} onSearchChange={value => setQuery(value)} actions={makeSampleResetApplyActions()}>\r
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
        </ArvoSidePanel>\r
      </StoryShell>;
  }
}`,...(pa=(ua=Z.parameters)==null?void 0:ua.docs)==null?void 0:pa.source}}};var ma,ya,fa;J.parameters={...J.parameters,docs:{...(ma=J.parameters)==null?void 0:ma.docs,source:{originalSource:`{
  name: 'Workflow Pane',
  render: function WorkflowPaneStory() {
    const [tab, setTab] = useState<string>('overview');
    const headerActions: ArvoPanelHeaderAction[] = [{
      id: 'refresh',
      type: 'btn',
      icon: 'refresh',
      label: 'Refresh',
      tooltip: 'Refresh'
    }, {
      id: 'view',
      type: 'dropdown',
      icon: 'cog',
      label: 'View options',
      tooltip: 'View options',
      items: [{
        id: 'compact',
        label: 'Compact view'
      }, {
        id: 'detailed',
        label: 'Detailed view'
      }]
    }];
    return <StoryShell width={520} height={720} caption="Workflow Pane recipe">\r
        <div style={{
        flex: 1
      }} />\r
        <ArvoSidePanel title="Workflow" side="right" variant="layout" isClosable headerActions={headerActions} stickyHeader={{
        tabs: [{
          id: 'overview',
          label: 'Overview'
        }, {
          id: 'history',
          label: 'History',
          icon: 'history'
        }, {
          id: 'settings',
          label: 'Settings',
          icon: 'cog'
        }]
      }} onTabSelect={setTab} actions={false}>\r
          <div style={{
          padding: 16,
          display: 'flex',
          flexDirection: 'column',
          gap: 12
        }}>\r
            {tab === 'overview' && <>\r
                <h4 style={{
              margin: 0
            }}>Overview</h4>\r
                <p style={{
              margin: 0
            }}>\r
                  Workflow status, current step, owners, and SLA breakdown.\r
                </p>\r
              </>}\r
            {tab === 'history' && <>\r
                <h4 style={{
              margin: 0
            }}>History</h4>\r
                <ul style={{
              margin: 0,
              paddingLeft: 20
            }}>\r
                  <li>2 hours ago -- Reviewed by Maya Chen</li>\r
                  <li>Yesterday -- Submitted by Aaron Patel</li>\r
                  <li>3 days ago -- Created by Priya Iyer</li>\r
                </ul>\r
              </>}\r
            {tab === 'settings' && <>\r
                <h4 style={{
              margin: 0
            }}>Settings</h4>\r
                <p style={{
              margin: 0
            }}>\r
                  Notification rules, escalation paths, and access scopes.\r
                </p>\r
              </>}\r
          </div>\r
        </ArvoSidePanel>\r
      </StoryShell>;
  }
}`,...(fa=(ya=J.parameters)==null?void 0:ya.docs)==null?void 0:fa.source}}};var ha,ga,ba;X.parameters={...X.parameters,docs:{...(ha=X.parameters)==null?void 0:ha.docs,source:{originalSource:`{
  name: 'Gen AI Pane',
  render: function GenAiPaneStory() {
    const [draft, setDraft] = useState('');
    const headerActions: ArvoPanelHeaderAction[] = [{
      id: 'model',
      type: 'dropdown',
      icon: 'flash',
      label: 'Model',
      tooltip: 'Choose model',
      items: [{
        id: 'fast',
        label: 'Fast'
      }, {
        id: 'balanced',
        label: 'Balanced'
      }, {
        id: 'precise',
        label: 'Precise'
      }]
    }, {
      id: 'history',
      type: 'btn',
      icon: 'history',
      label: 'History',
      tooltip: 'Conversation history'
    }];
    return <StoryShell width={520} height={720} caption="Gen AI Pane recipe">\r
        <div style={{
        flex: 1
      }} />\r
        <ArvoSidePanel title="AI Assistant" side="right" variant="layout" isClosable headerActions={headerActions} stickyHeader={{
        info: {
          type: 'info',
          message: 'Responses may be inaccurate. Verify important information.'
        }
      }} actions={makeSampleSendActions({
        // eslint-disable-next-line no-console
        onSend: () => console.log('send draft:', draft)
      })}>\r
          <div style={{
          padding: 16,
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>\r
            <div>\r
              <strong>You:</strong> Summarize Q1 demand variance by region.\r
            </div>\r
            <div>\r
              <strong>Assistant:</strong> Q1 demand exceeded plan by 4.2% across NA + LatAm; APAC\r
              tracked 1.8% under plan, driven by holiday lift normalization.\r
            </div>\r
            <div style={{
            marginTop: 8
          }}>\r
              <ArvoTextbox size="sm" isFullWidth value={draft} placeholder="Ask a follow-up..." onChange={e => setDraft(e.target.value)} aria-label="Ask a follow-up" />\r
            </div>\r
          </div>\r
        </ArvoSidePanel>\r
      </StoryShell>;
  }
}`,...(ba=(ga=X.parameters)==null?void 0:ga.docs)==null?void 0:ba.source}}};var va,Sa,ka;ee.parameters={...ee.parameters,docs:{...(va=ee.parameters)==null?void 0:va.docs,source:{originalSource:`{
  name: 'Pin/Unpin Demo (DOM-invariant)',
  render: function PinUnpinStory() {
    const handleRef = useRef<ArvoSidePanelHandle>(null);
    const [pinned, setPinned] = useState(true);
    const [paneId, setPaneId] = useState<string>('initial');

    // Track that the underlying __pane element identity does NOT change when
    // pinning toggles -- the whole point of isPinnable is no remount.
    useEffect(() => {
      const t = window.setTimeout(() => {
        const el = document.querySelector<HTMLElement>('.arvo-sp__pane');
        if (el) {
          if (!el.dataset.idTag) el.dataset.idTag = String(Date.now());
          setPaneId(el.dataset.idTag);
        }
      }, 0);
      return () => window.clearTimeout(t);
    }, [pinned]);
    return <StoryShell width={520} height={720} caption={\`Pin/Unpin Demo -- paneId=\${paneId}\`}>\r
        <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'flex-start',
        padding: 16,
        gap: 8
      }}>\r
          <ArvoButton label={pinned ? 'Unpin' : 'Pin'} variant="secondary" icon={pinned ? 'unlock' : 'lock'} onClick={() => handleRef.current?.pinned(!pinned)} />\r
          <span style={{
          padding: 8
        }}>\r
            Current: <strong>{pinned ? 'Pinned (layout)' : 'Unpinned (overlay)'}</strong>\r
          </span>\r
        </div>\r
        <ArvoSidePanel title="Pinnable Panel" isPinnable defaultPinned onPinChange={setPinned} instanceRef={handleRef} isClosable stickyHeader={{
        tabs: [{
          id: 'home',
          label: 'Home'
        }, {
          id: 'recents',
          label: 'Recents',
          icon: 'history'
        }]
      }} actions={makeSamplePrimarySecondaryActions()}>\r
          <div style={{
          padding: 16
        }}>\r
            <p style={{
            margin: 0
          }}>\r
              Toggling pin flips between <code>layout</code> and <code>overlay</code>{' '}\r
              variants without remounting the DOM tree.\r
            </p>\r
          </div>\r
        </ArvoSidePanel>\r
      </StoryShell>;
  }
}`,...(ka=(Sa=ee.parameters)==null?void 0:Sa.docs)==null?void 0:ka.source}}};var wa,Aa,Pa;te.parameters={...te.parameters,docs:{...(wa=te.parameters)==null?void 0:wa.docs,source:{originalSource:`{
  name: 'Splitter Resolution Demo',
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    height: 480
  }}>\r
      <div style={{
      display: 'flex',
      flex: 1,
      position: 'relative'
    }}>\r
        <ArvoSidePanel title="auto (layout=on)" side="left" variant="layout" hasSplitter="auto" width={200} />\r
        <div style={{
        flex: 1
      }} />\r
      </div>\r
      <div style={{
      display: 'flex',
      flex: 1,
      position: 'relative'
    }}>\r
        <ArvoSidePanel title="true (always on)" side="left" variant="layout" hasSplitter width={200} />\r
        <div style={{
        flex: 1
      }} />\r
      </div>\r
      <div style={{
      display: 'flex',
      flex: 1,
      position: 'relative'
    }}>\r
        <ArvoSidePanel title="false (always off)" side="left" variant="layout" hasSplitter={false} width={200} />\r
        <div style={{
        flex: 1
      }} />\r
      </div>\r
    </div>
}`,...(Pa=(Aa=te.parameters)==null?void 0:Aa.docs)==null?void 0:Pa.source}}};const Sn=["Playground","KitchenSink","Default","LayoutVariant","OverlayVariant","SideLeft","SideRight","PinnableAndPinned","PinnableAndUnpinned","WithSplitter","WithoutSplitter","HeaderActionsAllTypes","WithBackAndClose","StickyHeaderFull","StickyTabsOnly","StickySearchOnly","FooterPrimaryAndSecondary","FooterSuppressed","LoadingSkeleton","LoadingToggle","Disabled","WithTitle","NoTitle","FilterPane","WorkflowPane","GenAiPane","PinUnpinDemo","SplitterResolutionDemo"],Fn=Object.freeze(Object.defineProperty({__proto__:null,Default:x,Disabled:G,FilterPane:Z,FooterPrimaryAndSecondary:H,FooterSuppressed:Q,GenAiPane:X,HeaderActionsAllTypes:C,KitchenSink:F,LayoutVariant:B,LoadingSkeleton:$,LoadingToggle:j,NoTitle:Y,OverlayVariant:q,PinUnpinDemo:ee,PinnableAndPinned:E,PinnableAndUnpinned:V,Playground:P,SideLeft:I,SideRight:W,SplitterResolutionDemo:te,StickyHeaderFull:_,StickySearchOnly:M,StickyTabsOnly:K,WithBackAndClose:T,WithSplitter:N,WithTitle:z,WithoutSplitter:U,WorkflowPane:J,__namedExportsOrder:Sn,default:vn},Symbol.toStringTag,{value:"Module"}));export{G as D,Z as F,X as G,C as H,F as K,B as L,q as O,P,Fn as S,N as W,I as a,W as b,E as c,V as d,ee as e,te as f,T as g,_ as h,K as i,M as j,H as k,Q as l,$ as m,j as n,J as o};
