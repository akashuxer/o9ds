import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as n,b as qn,n as On,e as K,m as Mn,a as Hn,w as tn}from"./iframe-BaOp0t6F.js";import{A as nn}from"./Button-B8O_kk1m.js";import{r as Fn}from"./index-BbVYX0ZH.js";import{u as _n,c as Wn}from"./useOverlay-Bo9f1g6f.js";import{u as zn}from"./useArvoLocale-z-KisV4q.js";import{u as Nn}from"./useTooltip-DZu1XpnP.js";import{u as $n}from"./useFocusTrap-BePVbEUc.js";import{A as wr}from"./IconButton-BgwDUYzG.js";import{a as Kn}from"./FormLabel-Dn-HbpfA.js";import{A as kr}from"./MessageAlert-DBQwY950.js";import{A as Bn}from"./TimeDropdown-DX9WbY98.js";import{r as Un}from"./loading-flag-DkqmYwgU.js";function B(t){return t?`${t.hours}:${t.minutes}:${t.seconds??0}:${t.milliseconds??0}:${t.timezone??""}`:""}function Je(t,u){return B(t)===B(u)}function Gn(t){const u=Math.trunc(t.hours),p=Math.trunc(t.minutes),y=t.seconds==null?void 0:Math.trunc(t.seconds),T=t.milliseconds==null?void 0:Math.trunc(t.milliseconds);if(u<0||u>23||p<0||p>59||y!=null&&(y<0||y>59)||T!=null&&(T<0||T>999))return null;const A={hours:u,minutes:p};return y!=null&&(A.seconds=y),T!=null&&(A.milliseconds=T),t.timezone!=null&&(A.timezone=t.timezone),A}function Qe(t){return!t||Number.isNaN(t.getTime())?null:{hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds(),milliseconds:t.getMilliseconds()}}function H(t){return t?new Date(2e3,0,1,t.hours,t.minutes,t.seconds??0,t.milliseconds??0):null}function ee(t,u){return t==null?null:t instanceof Date?Qe(t):typeof t=="string"?t.length===0?null:tn(t,u):Gn(t)}function Vr(t,u,p){const y=tn(t,u);return!y||p&&K(y,u)!==t.trim()?null:y}function ze(t){return((t.hours*60+t.minutes)*60+(t.seconds??0))*1e3+(t.milliseconds??0)}function re(t,u,p){return t?u&&ze(t)<ze(u)?{...u}:p&&ze(t)>ze(p)?{...p}:t:null}function Zn(t){return t===!1||t==null||t===!0?null:typeof t=="string"?typeof document>"u"?null:document.querySelector(t):t instanceof HTMLElement?t:t.current??null}const m=n.forwardRef(function({value:u,defaultValue:p,format:y,locale:T,interval:A=15,minTime:Xe,maxTime:Ye,placeholder:an,label:$e,variant:er="default",size:rr="lg",width:sn,isFullWidth:tr=!1,isDisabled:b=!1,isReadOnly:x=!1,isRequired:nr=!1,isInvalid:ar=!1,errorMsg:on,errorDisplay:Ke="inline",isLoading:Xn=!1,isClearable:ln=!1,isAutoClose:U=!0,isStrictParsing:Re=!1,isSegmented:d=!0,anchor:G=!1,placement:sr="bottom-end",popoverProps:j,zIndex:or,onChange:Ce,onOpen:Ee,onClose:Le,onBlur:Ie,className:un,id:cn,style:dn,...lr},mn){const pn=n.useId(),P=cn??`arvo-tp-${pn}`,ir=`${P}-input`,ur=`${P}-lbl`,cr=`${P}-err`,Z=`${P}-popover`,dr=zn(),J=n.useMemo(()=>qn(T??dr),[T,dr]),c=n.useMemo(()=>y||On(J),[y,J]),S=n.useMemo(()=>ee(Xe,c),[Xe,c]),w=n.useMemo(()=>ee(Ye,c),[Ye,c]),F=u!==void 0,[I,Be]=n.useState(()=>re(ee(u??p??null,c),S,w)),[o,mr]=n.useState(!1),[fn,gn]=n.useState(null),[Yn,vn]=n.useState(null),[ea,hn]=n.useState(!1),[bn,pr]=n.useState(!1),[_,W]=n.useState(()=>I?K(I,c):""),[yn,q]=n.useState(null),[Tn,xn]=n.useState(0),R=n.useRef(null),Q=n.useRef(null),X=n.useRef(null),qe=n.useRef(null),fr=n.useRef(null),C=n.useRef(null),g=n.useRef(null),E=n.useRef(null),v=n.useRef(I),Oe=n.useRef(null),Y=n.useRef(!1);n.useEffect(()=>{v.current=I},[I]);const D=Un(),z=fn??(ar?on??null:null),N=z!=null,gr=I!=null,vr=N&&Ke==="inline"&&z!=null,Me=N&&Ke==="tooltip"&&z!=null;Nn({triggerRef:fr,tooltip:Me?z:void 0}),n.useLayoutEffect(()=>{const e=R.current;if(!e)return;const r=()=>{const l=e.closest('[data-arvo-loading="true"]'),f=e.closest('[data-arvo-loading-ignore="true"]');hn(!!l&&!f)};r();const a=new MutationObserver(r);return a.observe(document.body,{attributes:!0,subtree:!0,attributeFilter:["data-arvo-loading","data-arvo-loading-ignore"]}),()=>a.disconnect()},[]);const Sn=G!==!1&&G!=null,hr=G===!0,br=n.useRef(!1);hr&&!br.current&&(console.warn("[ArvoTimePicker] anchor={true} requires a host element in React; falling back to input mode."),br.current=!0);const O=Sn&&!hr,h=n.useCallback(()=>{const e=g.current;if(d&&e){W(e.getFormattedDisplay(Y.current));return}W(v.current?K(v.current,c):"")},[d,c]),k=n.useCallback(e=>{var a,l,f;const r=re(e,S,w);return Je(r,v.current)?((a=g.current)==null||a.setValue(H(r),{silent:!0}),q(null),!1):(q(null),F||Be(r),v.current=r,(l=g.current)==null||l.setValue(H(r),{silent:!0}),Ce==null||Ce({value:r,formattedValue:r?K(r,c):""}),(f=R.current)==null||f.dispatchEvent(new CustomEvent("tp:change",{bubbles:!0,detail:{value:r,formattedValue:r?K(r,c):""}})),!0)},[F,S,w,Ce,c]);n.useEffect(()=>{var f;if(!d){(f=g.current)==null||f.destroy(),g.current=null,h();return}const e=Mn({format:c,locale:J,value:H(v.current),min:H(S),max:H(w),commit:"blur",minuteInterval:A});g.current=e;const r=e.on("commit",L=>{const We=Qe(L.date);q(null),k(We),h()}),a=e.on("segment",()=>{pr(e.getFocusedSegment()!=null),xn(L=>L+1)}),l=e.on("change",()=>{const L=Qe(e.getValue().date);q(re(L,S,w)),h()});return h(),()=>{r(),a(),l(),e.destroy(),g.current=null}},[d,c,J,B(S),B(w),A]),n.useEffect(()=>{var r;if(!F)return;const e=re(ee(u,c),S,w);Be(e),v.current=e,q(null),(r=g.current)==null||r.setValue(H(e),{silent:!0}),h()},[u,c,F,B(S),B(w)]);const V=n.useCallback(()=>{var r;if(o||b||D||x||(Ee==null?void 0:Ee())===!1)return;const e=new CustomEvent("tp:open",{bubbles:!0,cancelable:!0});(r=R.current)==null||r.dispatchEvent(e),!e.defaultPrevented&&mr(!0)},[o,b,D,x,Ee]),i=n.useCallback(()=>{var r;if(!o||(Le==null?void 0:Le())===!1)return;const e=new CustomEvent("tp:close",{bubbles:!0,cancelable:!0});(r=R.current)==null||r.dispatchEvent(e),!e.defaultPrevented&&(mr(!1),requestAnimationFrame(()=>{const a=E.current??X.current;a==null||a.focus({preventScroll:!0})}))},[o,Le]);n.useEffect(()=>{},[D,o,i]);const wn=n.useCallback(()=>{b||x||(o?i():V())},[D,b,x,o,V,i]),He=n.useCallback(()=>{var r;(r=g.current)==null||r.setValue(null,{silent:!0}),(k(null)||v.current==null)&&h()},[k,h]),kn=n.useCallback(e=>{e.stopPropagation(),He()},[He]),Vn=n.useCallback(e=>W(e.target.value),[]),Ue=n.useRef(null),jn=n.useCallback(()=>{const e=X.current;e&&requestAnimationFrame(()=>{if(document.activeElement!==e)return;Ue.current=e.selectionStart??null;const r=g.current;if(!r||!d)return;const a=Ue.current;if(Ue.current=null,a===null)return;const l=r.findSegmentForOffset(a);l!==null&&r.focusSegment(l)})},[d]),Dn=n.useCallback(()=>{Y.current=!0,Oe.current=v.current;const e=g.current;d&&e&&(W(e.getFormattedDisplay(!0)),e.focusSegment(0))},[d]),An=n.useCallback(()=>{Y.current=!1;const e=g.current;if(d&&e)W(e.getFormattedDisplay(!1)),q(null);else if(!d){const r=Vr(_,c,Re);r&&k(r),h()}pr(!1),Ie==null||Ie()},[d,_,c,Re,k,h,Ie]),Pn=n.useCallback(e=>{if(e.altKey&&e.key==="ArrowDown"){e.preventDefault(),o||V();return}if(e.altKey&&e.key==="ArrowUp"){e.preventDefault(),o&&i();return}if(d){const r=g.current;if(!r)return;const a=e.key;if(a==="Escape"){e.preventDefault(),r.handleKey({key:"Escape"}),Y.current?(W(r.getFormattedDisplay(!0)),r.focusSegment(0)):h(),q(null),o&&i();return}if(a==="Tab"){r.handleKey({key:"Tab",shiftKey:e.shiftKey}).consumed&&e.preventDefault();return}if(a==="Enter"){e.preventDefault();const l=v.current;r.handleKey({key:"Enter"});const f=!Je(l,v.current);o&&U&&f&&i();return}if(a==="ArrowLeft"||a==="ArrowRight"||a==="ArrowUp"||a==="ArrowDown"||a==="Home"||a==="End"||a==="Backspace"||a==="Delete"){r.handleKey({key:a}).consumed&&e.preventDefault();return}if(a.length===1&&!e.ctrlKey&&!e.metaKey){if(/^[0-9]$/.test(a)){r.handleDigit(a).consumed&&e.preventDefault();return}/^[A-Za-z]$/.test(a)&&r.handleLetter(a).consumed&&e.preventDefault()}return}if(e.key==="Enter"){e.preventDefault();const r=Vr(_,c,Re);if(r){const a=k(r);o&&U&&a&&i()}return}e.key==="Escape"&&(e.preventDefault(),Je(Oe.current,v.current)||(F||Be(Oe.current),v.current=Oe.current),h(),o&&i())},[d,o,U,V,i,_,c,Re,k,h,F]),Rn=n.useCallback(e=>{const r=g.current;if(!d||!r)return;r.handlePaste(e.clipboardData.getData("text")).consumed&&e.preventDefault()},[d]),Cn=n.useCallback(e=>{var a;const r=re(e,S,w);(a=g.current)==null||a.setValue(H(r),{silent:!0}),k(r),h(),U&&i()},[S,w,k,h,U,i]);n.useLayoutEffect(()=>{if(!O){E.current=null;return}const e=Zn(G);if(E.current=e,!e)return;const r=()=>{b||D||x||(o?i():V())},a=l=>{l.altKey&&l.key==="ArrowDown"?(l.preventDefault(),o||V()):l.altKey&&l.key==="ArrowUp"?(l.preventDefault(),o&&i()):l.key==="Escape"?o&&(l.preventDefault(),i()):(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),r())};return e.setAttribute("aria-haspopup","dialog"),e.setAttribute("aria-expanded",o?"true":"false"),e.setAttribute("aria-controls",Z),e.addEventListener("click",r),e.addEventListener("keydown",a),()=>{e.removeEventListener("click",r),e.removeEventListener("keydown",a),e.removeAttribute("aria-haspopup"),e.removeAttribute("aria-expanded"),e.removeAttribute("aria-controls")}},[O,G,o,b,D,x,V,i,Z]),$n(C,{active:o,initialFocus:"none",returnFocusOnDeactivate:!1,escapeDeactivates:!1,allowOutsideClick:!0});const $=_n();n.useEffect(()=>{if(!o||!C.current)return;const e=(O?E.current:Q.current)??void 0;return $.open({id:P,type:"dropdown",element:C.current,triggerElement:e,priority:20,config:{autoCloseOnOutsideClick:!0},onClose:i}),requestAnimationFrame(()=>{var a;const r=(a=C.current)==null?void 0:a.querySelector('[tabindex="0"]');r==null||r.focus({preventScroll:!0})}),()=>$.close(P)},[o]);const Fe=n.useRef(null),_e=n.useRef(null),[ra,En]=n.useState(0);n.useLayoutEffect(()=>{var We;if(!o){Fe.current=null,(We=_e.current)==null||We.destroy(),_e.current=null;return}const e=(O?E.current:Q.current)??null,r=C.current;if(!e||!r)return;const a={placement:sr,gap:(j==null?void 0:j.offset)??4,width:"auto"},l=M=>{r.style.transform=`translate(${M.x}px, ${M.y}px)`},f=Hn(e,r,a);Fe.current=f,l(f),r.style.visibility="",En(M=>M+1);const L=Wn(e,r,a,M=>{Fe.current=M,l(M)});return _e.current=L,()=>{L.destroy(),_e.current=null}},[o,sr,O,j==null?void 0:j.offset]),n.useEffect(()=>{if(!o)return;const e=r=>{var l,f;const a=r.target;$.isOverlayClickInside(C.current,a)||(l=R.current)!=null&&l.contains(a)||(f=E.current)!=null&&f.contains(a)||i()};return document.addEventListener("pointerdown",e,!0),()=>document.removeEventListener("pointerdown",e,!0)},[o,i,$]),n.useEffect(()=>{if(!o)return;const e=r=>{var l,f;const a=r.target;(l=R.current)!=null&&l.contains(a)||$.isOverlayClickInside(C.current,a)||(f=E.current)!=null&&f.contains(a)||i()};return document.addEventListener("focusin",e),()=>document.removeEventListener("focusin",e)},[o,i,$]),n.useLayoutEffect(()=>{if(!d||!Y.current)return;const e=g.current,r=X.current;if(!e||!r)return;const a=e.getFocusedSegment();if(a)try{r.setSelectionRange(a.startOffset,a.endOffset)}catch{}},[Tn,_,d]);const Ge=n.useCallback(()=>{if(!qe.current||!Q.current)return;const e=qe.current.offsetWidth;Q.current.style.setProperty("--arvo-form-input-pad-r",`${e>0?e+4:0}px`)},[]);n.useEffect(()=>{Ge()}),n.useEffect(()=>{const e=qe.current;if(!e)return;const r=new ResizeObserver(Ge);return r.observe(e),()=>r.disconnect()},[Ge]),n.useImperativeHandle(mn,()=>{const e=Symbol("NO_ARG");return{open:()=>V(),close:()=>i(),toggle:r=>{r===void 0?o?i():V():r?V():i()},value:((r=e)=>{if(r===e)return v.current;const a=ee(r,c);k(a),h()}),formattedValue:()=>v.current?K(v.current,c):"",clear:()=>He(),disabled:((r=e)=>{if(r===e)return b;console.warn("[ArvoTimePicker] disabled() setter is a noop in React; pass isDisabled prop.")}),setError:r=>gn(r===!1?null:r),setLoading:r=>{vn(r),r&&i()},focus:()=>{var r;(r=E.current??X.current)==null||r.focus()},destroy:()=>{}}},[V,i,o,c,k,b,h,He]);const yr=["arvo-tp",`arvo-tp--${er}`,`arvo-tp--${rr}`,tr&&"arvo-tp--full-width",O&&"arvo-tp--anchor-mode",b&&"is-disabled",x&&"is-readonly",N&&"has-error",N&&Ke==="tooltip"&&"error-tooltip",gr&&"has-value",bn&&"has-text-selected",o&&"open",D,un].filter(Boolean).join(" "),Tr=tr?"100%":sn??void 0,xr={...dn,...Tr?{"--arvo-form-input-width":Tr}:{}},Ze=Fe.current,Ln={position:"fixed",top:0,left:0,margin:0,...j!=null&&j.width?{width:j.width}:{},...Ze?{transform:`translate(${Ze.x}px, ${Ze.y}px)`}:{visibility:"hidden"},...or!=null?{zIndex:or}:{}},In=["arvo-tp",`arvo-tp--${er}`,`arvo-tp--${rr}`,"open",D].filter(Boolean).join(" "),Sr=o?Fn.createPortal(s.jsx("div",{className:In,style:{display:"contents"},children:s.jsx("div",{ref:C,id:Z,className:"arvo-tp__popover open",role:"dialog","aria-label":"Choose a time","aria-modal":!1,style:Ln,children:s.jsx("div",{className:"arvo-tp__body",children:s.jsx(Bn,{value:yn??I,format:c,locale:J,interval:A,minTime:S,maxTime:w,isDisabled:b||x||D,onChange:Cn,onDismiss:i})})})}),document.body):null;return O?s.jsx("div",{...lr,ref:R,id:P,className:yr,style:xr,children:Sr}):s.jsxs("div",{...lr,ref:R,id:P,className:yr,style:xr,children:[$e&&s.jsx(Kn,{htmlFor:ir,id:ur,isRequired:nr,isDisabled:b,isInvalid:N,className:"arvo-tp__lbl",children:$e}),s.jsxs("div",{ref:Q,className:"arvo-tp__field",children:[s.jsx("input",{ref:X,id:ir,type:"text",className:"arvo-tp__input",role:"combobox",value:_,placeholder:an??void 0,disabled:b,readOnly:x||d,autoComplete:"off","aria-haspopup":"dialog","aria-expanded":o,"aria-controls":Z,"aria-required":nr||void 0,"aria-invalid":ar||N||void 0,"aria-disabled":b||void 0,"aria-busy":void 0,"aria-labelledby":$e?ur:void 0,"aria-describedby":vr?cr:void 0,onKeyDown:Pn,onFocus:Dn,onBlur:An,onMouseDown:d?jn:void 0,onPaste:d?Rn:void 0,onChange:d?void 0:Vn}),(()=>{const e=ln&&gr&&!b&&!x&&!D&&!Me,r=e||Me;return s.jsxs("div",{ref:qe,className:"arvo-tp__actions",children:[e&&s.jsx(wr,{size:"sm",variant:"tertiary",icon:"close",tooltip:"Clear",tabIndex:-1,onClick:kn,className:"arvo-tp__clear-btn"}),Me&&s.jsx(kr,{ref:fr,type:"negative",isInline:!0,message:z??"",className:"arvo-tp__err-ico"}),r&&s.jsx("span",{className:"arvo-tp__sep","aria-hidden":"true"}),s.jsx(wr,{size:"sm",variant:"tertiary",icon:"clock-o",tooltip:"Select time",isDisabled:b||x,isSelected:o,onClick:wn,className:"arvo-tp__trigger-btn","aria-haspopup":"dialog","aria-expanded":o,"aria-controls":Z})]})})(),s.jsx("div",{className:"arvo-tp__border"})]}),vr&&s.jsx(kr,{type:"negative",id:cr,message:z,className:"arvo-tp__err-msg"}),Sr]})});m.displayName="ArvoTimePicker";m.__docgenInfo={description:"",methods:[{name:"open",docblock:null,modifiers:[],params:[],returns:null},{name:"close",docblock:null,modifiers:[],params:[],returns:null},{name:"toggle",docblock:null,modifiers:[],params:[{name:"force",optional:!0,type:{name:"boolean"}}],returns:null},{name:"value",docblock:null,modifiers:[],params:[{name:"v",optional:!0,type:null}],returns:null},{name:"formattedValue",docblock:null,modifiers:[],params:[],returns:null},{name:"clear",docblock:null,modifiers:[],params:[],returns:null},{name:"disabled",docblock:null,modifiers:[],params:[{name:"state",optional:!0,type:null}],returns:null},{name:"setError",docblock:null,modifiers:[],params:[{name:"message",optional:!1,type:{name:"union",raw:"string | false",elements:[{name:"string"},{name:"literal",value:"false"}]}}],returns:null},{name:"setLoading",docblock:null,modifiers:[],params:[{name:"loading",optional:!1,type:{name:"boolean"}}],returns:null},{name:"focus",docblock:null,modifiers:[],params:[],returns:null},{name:"destroy",docblock:null,modifiers:[],params:[],returns:null}],displayName:"ArvoTimePicker",props:{value:{required:!1,tsType:{name:"union",raw:"TimeObject | Date | string | null",elements:[{name:"TimeObject"},{name:"Date"},{name:"string"},{name:"null"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"TimeObject | Date | string | null",elements:[{name:"TimeObject"},{name:"Date"},{name:"string"},{name:"null"}]},description:""},format:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},locale:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},interval:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"15",computed:!1}},minTime:{required:!1,tsType:{name:"union",raw:"TimeObject | string | null",elements:[{name:"TimeObject"},{name:"string"},{name:"null"}]},description:""},maxTime:{required:!1,tsType:{name:"union",raw:"TimeObject | string | null",elements:[{name:"TimeObject"},{name:"string"},{name:"null"}]},description:""},placeholder:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},label:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},variant:{required:!1,tsType:{name:"literal",value:"'default'"},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'lg'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},isFullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isReadOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},errorMsg:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},errorDisplay:{required:!1,tsType:{name:"union",raw:"'inline' | 'tooltip' | 'none'",elements:[{name:"literal",value:"'inline'"},{name:"literal",value:"'tooltip'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'inline'",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isClearable:{required:!1,tsType:{name:"boolean"},description:"When true and a value is set, renders a clear icon button in the action\noverlay to clear the current time. Defaults to `false`.",defaultValue:{value:"false",computed:!1}},isAutoClose:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isStrictParsing:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isSegmented:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},anchor:{required:!1,tsType:{name:"union",raw:"false | true | HTMLElement | RefObject<HTMLElement> | string",elements:[{name:"literal",value:"false"},{name:"literal",value:"true"},{name:"HTMLElement"},{name:"RefObject",elements:[{name:"HTMLElement"}],raw:"RefObject<HTMLElement>"},{name:"string"}]},description:"",defaultValue:{value:"false",computed:!1}},placement:{required:!1,tsType:{name:"union",raw:"'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'auto'",elements:[{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'auto'"}]},description:"",defaultValue:{value:"'bottom-end'",computed:!1}},zIndex:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:""},popoverProps:{required:!1,tsType:{name:"TimePickerPopoverProps"},description:"Scoped escape-hatch bag for popover surface options. Bag-only keys\n(`width`, `offset`) flow through; flat options (`placement`, `zIndex`)\nalways win on overlap."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(payload: { value: TimeObject | null; formattedValue: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ value: TimeObject | null; formattedValue: string }",signature:{properties:[{key:"value",value:{name:"union",raw:"TimeObject | null",elements:[{name:"TimeObject"},{name:"null"}],required:!0}},{key:"formattedValue",value:{name:"string",required:!0}}]}},name:"payload"}],return:{name:"void"}}},description:""},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => boolean | void",signature:{arguments:[],return:{name:"union",raw:"boolean | void",elements:[{name:"boolean"},{name:"void"}]}}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => boolean | void",signature:{arguments:[],return:{name:"union",raw:"boolean | void",elements:[{name:"boolean"},{name:"void"}]}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const Jn={title:"Date & Time/TimePicker",component:m,tags:["!dev","stable"],argTypes:{value:{control:{type:"object"},description:"Controlled time value. Accepts TimeObject, Date, string, or null."},defaultValue:{control:{type:"object"},description:"Initial value for uncontrolled mode."},format:{control:{type:"text"},description:".NET / Kendo time format. TimePicker never exposes use12Hour; 12h vs 24h is derived from format and locale."},locale:{control:{type:"text"},description:"BCP-47 locale such as en-US or de-DE."},interval:{control:{type:"number",min:1,max:120,step:1},description:"Minutes between dropdown options.",table:{defaultValue:{summary:"15"}}},minTime:{control:{type:"object"},description:"Inclusive minimum. Out-of-range dropdown options are hidden and typed commits clamp up."},maxTime:{control:{type:"object"},description:"Inclusive maximum. Out-of-range dropdown options are hidden and typed commits clamp down."},placeholder:{control:{type:"text"},description:"Placeholder text when no value is selected."},label:{control:{type:"text"},description:"Field label rendered above the trigger input."},variant:{control:{type:"select"},options:["default"],description:"Visual variant. TimePicker currently exposes the default form-input treatment.",table:{defaultValue:{summary:"default"}}},size:{control:{type:"select"},options:["sm","lg"],description:"Trigger size. sm: 24px input field (46px label+field total); lg: 32px (54px total).",table:{defaultValue:{summary:"lg"}}},width:{control:{type:"text"},description:"CSS width for the trigger field."},isFullWidth:{control:{type:"boolean"},description:'Shorthand for width="100%".',table:{defaultValue:{summary:"false"}}},isDisabled:{control:{type:"boolean"},description:"Disable all interaction and prevent opening.",table:{defaultValue:{summary:"false"}}},isReadOnly:{control:{type:"boolean"},description:"Show the current value but prevent editing and opening.",table:{defaultValue:{summary:"false"}}},isRequired:{control:{type:"boolean"},description:"Show the required indicator and set aria-required.",table:{defaultValue:{summary:"false"}}},isInvalid:{control:{type:"boolean"},description:"Show validation state and set aria-invalid.",table:{defaultValue:{summary:"false"}}},errorMsg:{control:{type:"text"},description:"Error message shown when invalid or set imperatively."},errorDisplay:{control:{type:"select"},options:["inline","tooltip","none"],description:"Choose inline error text, tooltip icon, or no visible error chrome.",table:{defaultValue:{summary:"inline"}}},isLoading:{control:{type:"boolean"},description:"Pattern C loading state. Replaces the trigger button with a spinner and blocks open.",table:{defaultValue:{summary:"false"}}},isAutoClose:{control:{type:"boolean"},description:"Close the popover after a dropdown selection. Defaults to true.",table:{defaultValue:{summary:"true"}}},isStrictParsing:{control:{type:"boolean"},description:"Reject partial free-text parses on Enter / blur.",table:{defaultValue:{summary:"false"}}},isSegmented:{control:{type:"boolean"},description:"Use isSegmented input editing instead of free-text entry.",table:{defaultValue:{summary:"true"}}},anchor:{control:!1,description:"Overlay-only mode. Pass an HTMLElement, RefObject, or selector string in React. Configure this in code rather than Controls."},placement:{control:{type:"select"},options:["top-start","top-end","bottom-start","bottom-end","auto"],description:"Popover placement relative to the trigger field or anchor element.",table:{defaultValue:{summary:"bottom-start"}}},zIndex:{control:{type:"number"},description:"Optional popover z-index override."},onChange:{action:"changed",description:"`(payload: { value: TimeObject | null; formattedValue: string }) => void`",table:{category:"Events"}},onOpen:{action:"opened",description:"`() => boolean | void` -- return false to cancel open.",table:{category:"Events"}},onClose:{action:"closed",description:"`() => boolean | void` -- return false to cancel close.",table:{category:"Events"}},onBlur:{action:"blurred",description:"`() => void` -- fired when the trigger input loses focus.",table:{category:"Events"}}},args:{label:"Time",format:"HH:mm",interval:15,variant:"default",size:"lg",isDisabled:!1,isReadOnly:!1,isRequired:!1,isInvalid:!1,isLoading:!1,isFullWidth:!1,isAutoClose:!0,isStrictParsing:!1,isSegmented:!0,errorDisplay:"inline",placement:"bottom-start"},parameters:{docs:{description:{component:`Consolidated CSF for ArvoTimePicker.\r

All stories are docs-only (\`tags: ['!dev', 'stable']\`): they render on the\r
attached \`TimePicker.mdx\` page (the single sidebar node for this component),\r
not as their own sidebar leaves. \`TimePicker.mdx\` references these stories\r
with Doc Blocks.\r

Buckets within this file:\r
  - Default / Playground -- live controls for every prop (drives the docs page)\r
  - Variants / Sizes / Layout / Format / States / Scoped -- frozen single-prop snapshots\r
  - Examples             -- composition recipes`}}}};function Ne(t){return t?`${String(t.hours).padStart(2,"0")}:${String(t.minutes).padStart(2,"0")}`:"none"}const te={args:{label:"Time"}},ne={args:{label:"Meeting time",placeholder:"Select time",defaultValue:{hours:9,minutes:30,seconds:0,milliseconds:0}}},ae={name:"Variant: default",args:{label:"Time",variant:"default"}},se={args:{label:"Time",size:"sm"}},oe={args:{label:"Time",size:"lg"}},le={args:{label:"Time",isFullWidth:!0},decorators:[t=>s.jsx("div",{style:{width:320},children:s.jsx(t,{})})]},ie={args:{},render:()=>s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,alignItems:"flex-start"},children:[s.jsx(nn,{id:"tp-feature-anchor-btn",label:"Open time picker",icon:"clock-o"}),s.jsx(m,{anchor:"#tp-feature-anchor-btn",format:"HH:mm"})]})},ue={name:"24-hour Derived",args:{label:"Time",format:"HH:mm",defaultValue:{hours:14,minutes:30,seconds:0,milliseconds:0}}},ce={name:"12-hour Derived",args:{label:"Time",format:"hh:mm tt",locale:"en-US",defaultValue:{hours:14,minutes:30,seconds:0,milliseconds:0}}},de={args:{label:"Time",interval:5}},me={args:{label:"Business hours",interval:30,minTime:{hours:9,minutes:0,seconds:0,milliseconds:0},maxTime:{hours:17,minutes:0,seconds:0,milliseconds:0}}},pe={args:{label:"Time",isSegmented:!1,placeholder:"Enter time"}},fe={args:{label:"Time",isSegmented:!1,isStrictParsing:!0,placeholder:"HH:mm"}},ge={args:{label:"Time",isAutoClose:!1,defaultValue:{hours:9,minutes:30,seconds:0,milliseconds:0}}},ve={args:{label:"Time",isDisabled:!0}},he={args:{label:"Time",isReadOnly:!0,defaultValue:{hours:9,minutes:30,seconds:0,milliseconds:0}}},be={args:{label:"Time",isRequired:!0}},ye={args:{label:"Time",isInvalid:!0,errorMsg:"Please select a valid time."}},Te={name:"Invalid Tooltip",args:{label:"Time",isInvalid:!0,errorMsg:"Please select a valid time.",errorDisplay:"tooltip"}},xe={args:{label:"Time",isLoading:!0}},Se={name:"Scoped Popover Config (popoverProps)",args:{label:"Time",popoverProps:{width:"180px",offset:12}}},we={args:{},render:()=>s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,maxWidth:360},children:[s.jsx(m,{label:"Small (sm)",size:"sm"}),s.jsx(m,{label:"Large (lg)",size:"lg"})]})},ke={args:{},render:()=>s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:16,maxWidth:760},children:[s.jsx(m,{label:"Default"}),s.jsx(m,{label:"Required",isRequired:!0}),s.jsx(m,{label:"Disabled",isDisabled:!0}),s.jsx(m,{label:"Read only",isReadOnly:!0,defaultValue:{hours:9,minutes:30,seconds:0,milliseconds:0}}),s.jsx(m,{label:"Invalid",isInvalid:!0,errorMsg:"Please choose a valid time."}),s.jsx(m,{label:"Loading",isLoading:!0})]})},Ve={args:{},render:()=>s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:16,maxWidth:760},children:[s.jsx(m,{label:"24-hour",format:"HH:mm",defaultValue:{hours:14,minutes:30,seconds:0,milliseconds:0}}),s.jsx(m,{label:"12-hour",format:"hh:mm tt",locale:"en-US",defaultValue:{hours:14,minutes:30,seconds:0,milliseconds:0}}),s.jsx(m,{label:"Strict free-text",isSegmented:!1,isStrictParsing:!0,placeholder:"HH:mm"})]})},je={args:{},render:()=>{const[t,u]=n.useState({hours:9,minutes:30});return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,maxWidth:360},children:[s.jsx(m,{label:"Start time",value:t,onChange:p=>u(p.value)}),s.jsxs("div",{children:["Selected: ",Ne(t)]})]})}},De={name:"Recipe: Shift Planner",args:{},render:()=>{const[t,u]=n.useState({hours:9,minutes:0}),[p,y]=n.useState({hours:17,minutes:0});return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:420},children:[s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:16},children:[s.jsx(m,{label:"Shift start",interval:30,minTime:{hours:6,minutes:0,seconds:0,milliseconds:0},maxTime:{hours:22,minutes:0,seconds:0,milliseconds:0},value:t,onChange:T=>u(T.value)}),s.jsx(m,{label:"Shift end",interval:30,minTime:{hours:6,minutes:0,seconds:0,milliseconds:0},maxTime:{hours:22,minutes:0,seconds:0,milliseconds:0},value:p,onChange:T=>y(T.value)})]}),s.jsxs("div",{children:["Window: ",Ne(t)," - ",Ne(p)]})]})}},Ae={name:"Recipe: Support Hours",args:{},render:()=>s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:16,maxWidth:760},children:[s.jsx(m,{label:"Phone support starts",interval:15,minTime:{hours:8,minutes:0,seconds:0,milliseconds:0},maxTime:{hours:18,minutes:0,seconds:0,milliseconds:0},defaultValue:{hours:8,minutes:30,seconds:0,milliseconds:0}}),s.jsx(m,{label:"Phone support ends",interval:15,minTime:{hours:8,minutes:0,seconds:0,milliseconds:0},maxTime:{hours:18,minutes:0,seconds:0,milliseconds:0},defaultValue:{hours:17,minutes:30,seconds:0,milliseconds:0}})]})},Pe={name:"Recipe: Anchor Toolbar Trigger",args:{},render:()=>{const[t,u]=n.useState(null);return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,alignItems:"flex-start"},children:[s.jsx(nn,{id:"tp-anchor-demo-btn",label:"Pick a time",icon:"clock-o"}),s.jsx(m,{anchor:"#tp-anchor-demo-btn",format:"hh:mm tt",locale:"en-US",onChange:p=>u(p.value)}),s.jsxs("div",{children:["Selected: ",Ne(t)]})]})}};var jr,Dr,Ar;te.parameters={...te.parameters,docs:{...(jr=te.parameters)==null?void 0:jr.docs,source:{originalSource:`{
  args: {
    label: 'Time'
  }
}`,...(Ar=(Dr=te.parameters)==null?void 0:Dr.docs)==null?void 0:Ar.source}}};var Pr,Rr,Cr;ne.parameters={...ne.parameters,docs:{...(Pr=ne.parameters)==null?void 0:Pr.docs,source:{originalSource:`{
  args: {
    label: 'Meeting time',
    placeholder: 'Select time',
    defaultValue: {
      hours: 9,
      minutes: 30,
      seconds: 0,
      milliseconds: 0
    }
  }
}`,...(Cr=(Rr=ne.parameters)==null?void 0:Rr.docs)==null?void 0:Cr.source}}};var Er,Lr,Ir;ae.parameters={...ae.parameters,docs:{...(Er=ae.parameters)==null?void 0:Er.docs,source:{originalSource:`{
  name: 'Variant: default',
  args: {
    label: 'Time',
    variant: 'default'
  }
}`,...(Ir=(Lr=ae.parameters)==null?void 0:Lr.docs)==null?void 0:Ir.source}}};var qr,Or,Mr;se.parameters={...se.parameters,docs:{...(qr=se.parameters)==null?void 0:qr.docs,source:{originalSource:`{
  args: {
    label: 'Time',
    size: 'sm'
  }
}`,...(Mr=(Or=se.parameters)==null?void 0:Or.docs)==null?void 0:Mr.source}}};var Hr,Fr,_r;oe.parameters={...oe.parameters,docs:{...(Hr=oe.parameters)==null?void 0:Hr.docs,source:{originalSource:`{
  args: {
    label: 'Time',
    size: 'lg'
  }
}`,...(_r=(Fr=oe.parameters)==null?void 0:Fr.docs)==null?void 0:_r.source}}};var Wr,zr,Nr;le.parameters={...le.parameters,docs:{...(Wr=le.parameters)==null?void 0:Wr.docs,source:{originalSource:`{
  args: {
    label: 'Time',
    isFullWidth: true
  },
  decorators: [Story => <div style={{
    width: 320
  }}>\r
        <Story />\r
      </div>]
}`,...(Nr=(zr=le.parameters)==null?void 0:zr.docs)==null?void 0:Nr.source}}};var $r,Kr,Br;ie.parameters={...ie.parameters,docs:{...($r=ie.parameters)==null?void 0:$r.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    alignItems: 'flex-start'
  }}>\r
      <ArvoButton id="tp-feature-anchor-btn" label="Open time picker" icon="clock-o" />\r
      <ArvoTimePicker anchor="#tp-feature-anchor-btn" format="HH:mm" />\r
    </div>
}`,...(Br=(Kr=ie.parameters)==null?void 0:Kr.docs)==null?void 0:Br.source}}};var Ur,Gr,Zr;ue.parameters={...ue.parameters,docs:{...(Ur=ue.parameters)==null?void 0:Ur.docs,source:{originalSource:`{
  name: '24-hour Derived',
  args: {
    label: 'Time',
    format: 'HH:mm',
    defaultValue: {
      hours: 14,
      minutes: 30,
      seconds: 0,
      milliseconds: 0
    }
  }
}`,...(Zr=(Gr=ue.parameters)==null?void 0:Gr.docs)==null?void 0:Zr.source}}};var Jr,Qr,Xr;ce.parameters={...ce.parameters,docs:{...(Jr=ce.parameters)==null?void 0:Jr.docs,source:{originalSource:`{
  name: '12-hour Derived',
  args: {
    label: 'Time',
    format: 'hh:mm tt',
    locale: 'en-US',
    defaultValue: {
      hours: 14,
      minutes: 30,
      seconds: 0,
      milliseconds: 0
    }
  }
}`,...(Xr=(Qr=ce.parameters)==null?void 0:Qr.docs)==null?void 0:Xr.source}}};var Yr,et,rt;de.parameters={...de.parameters,docs:{...(Yr=de.parameters)==null?void 0:Yr.docs,source:{originalSource:`{
  args: {
    label: 'Time',
    interval: 5
  }
}`,...(rt=(et=de.parameters)==null?void 0:et.docs)==null?void 0:rt.source}}};var tt,nt,at;me.parameters={...me.parameters,docs:{...(tt=me.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  args: {
    label: 'Business hours',
    interval: 30,
    minTime: {
      hours: 9,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    },
    maxTime: {
      hours: 17,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }
  }
}`,...(at=(nt=me.parameters)==null?void 0:nt.docs)==null?void 0:at.source}}};var st,ot,lt;pe.parameters={...pe.parameters,docs:{...(st=pe.parameters)==null?void 0:st.docs,source:{originalSource:`{
  args: {
    label: 'Time',
    isSegmented: false,
    placeholder: 'Enter time'
  }
}`,...(lt=(ot=pe.parameters)==null?void 0:ot.docs)==null?void 0:lt.source}}};var it,ut,ct;fe.parameters={...fe.parameters,docs:{...(it=fe.parameters)==null?void 0:it.docs,source:{originalSource:`{
  args: {
    label: 'Time',
    isSegmented: false,
    isStrictParsing: true,
    placeholder: 'HH:mm'
  }
}`,...(ct=(ut=fe.parameters)==null?void 0:ut.docs)==null?void 0:ct.source}}};var dt,mt,pt;ge.parameters={...ge.parameters,docs:{...(dt=ge.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  args: {
    label: 'Time',
    isAutoClose: false,
    defaultValue: {
      hours: 9,
      minutes: 30,
      seconds: 0,
      milliseconds: 0
    }
  }
}`,...(pt=(mt=ge.parameters)==null?void 0:mt.docs)==null?void 0:pt.source}}};var ft,gt,vt;ve.parameters={...ve.parameters,docs:{...(ft=ve.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  args: {
    label: 'Time',
    isDisabled: true
  }
}`,...(vt=(gt=ve.parameters)==null?void 0:gt.docs)==null?void 0:vt.source}}};var ht,bt,yt;he.parameters={...he.parameters,docs:{...(ht=he.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  args: {
    label: 'Time',
    isReadOnly: true,
    defaultValue: {
      hours: 9,
      minutes: 30,
      seconds: 0,
      milliseconds: 0
    }
  }
}`,...(yt=(bt=he.parameters)==null?void 0:bt.docs)==null?void 0:yt.source}}};var Tt,xt,St;be.parameters={...be.parameters,docs:{...(Tt=be.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
  args: {
    label: 'Time',
    isRequired: true
  }
}`,...(St=(xt=be.parameters)==null?void 0:xt.docs)==null?void 0:St.source}}};var wt,kt,Vt;ye.parameters={...ye.parameters,docs:{...(wt=ye.parameters)==null?void 0:wt.docs,source:{originalSource:`{
  args: {
    label: 'Time',
    isInvalid: true,
    errorMsg: 'Please select a valid time.'
  }
}`,...(Vt=(kt=ye.parameters)==null?void 0:kt.docs)==null?void 0:Vt.source}}};var jt,Dt,At;Te.parameters={...Te.parameters,docs:{...(jt=Te.parameters)==null?void 0:jt.docs,source:{originalSource:`{
  name: 'Invalid Tooltip',
  args: {
    label: 'Time',
    isInvalid: true,
    errorMsg: 'Please select a valid time.',
    errorDisplay: 'tooltip'
  }
}`,...(At=(Dt=Te.parameters)==null?void 0:Dt.docs)==null?void 0:At.source}}};var Pt,Rt,Ct;xe.parameters={...xe.parameters,docs:{...(Pt=xe.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
  args: {
    label: 'Time',
    isLoading: true
  }
}`,...(Ct=(Rt=xe.parameters)==null?void 0:Rt.docs)==null?void 0:Ct.source}}};var Et,Lt,It;Se.parameters={...Se.parameters,docs:{...(Et=Se.parameters)==null?void 0:Et.docs,source:{originalSource:`{
  name: 'Scoped Popover Config (popoverProps)',
  args: {
    label: 'Time',
    popoverProps: {
      width: '180px',
      offset: 12
    }
  }
}`,...(It=(Lt=Se.parameters)==null?void 0:Lt.docs)==null?void 0:It.source}}};var qt,Ot,Mt;we.parameters={...we.parameters,docs:{...(qt=we.parameters)==null?void 0:qt.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    maxWidth: 360
  }}>\r
      <ArvoTimePicker label="Small (sm)" size="sm" />\r
      <ArvoTimePicker label="Large (lg)" size="lg" />\r
    </div>
}`,...(Mt=(Ot=we.parameters)==null?void 0:Ot.docs)==null?void 0:Mt.source}}};var Ht,Ft,_t;ke.parameters={...ke.parameters,docs:{...(Ht=ke.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 16,
    maxWidth: 760
  }}>\r
      <ArvoTimePicker label="Default" />\r
      <ArvoTimePicker label="Required" isRequired />\r
      <ArvoTimePicker label="Disabled" isDisabled />\r
      <ArvoTimePicker label="Read only" isReadOnly defaultValue={{
      hours: 9,
      minutes: 30,
      seconds: 0,
      milliseconds: 0
    }} />\r
      <ArvoTimePicker label="Invalid" isInvalid errorMsg="Please choose a valid time." />\r
      <ArvoTimePicker label="Loading" isLoading />\r
    </div>
}`,...(_t=(Ft=ke.parameters)==null?void 0:Ft.docs)==null?void 0:_t.source}}};var Wt,zt,Nt;Ve.parameters={...Ve.parameters,docs:{...(Wt=Ve.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 16,
    maxWidth: 760
  }}>\r
      <ArvoTimePicker label="24-hour" format="HH:mm" defaultValue={{
      hours: 14,
      minutes: 30,
      seconds: 0,
      milliseconds: 0
    }} />\r
      <ArvoTimePicker label="12-hour" format="hh:mm tt" locale="en-US" defaultValue={{
      hours: 14,
      minutes: 30,
      seconds: 0,
      milliseconds: 0
    }} />\r
      <ArvoTimePicker label="Strict free-text" isSegmented={false} isStrictParsing placeholder="HH:mm" />\r
    </div>
}`,...(Nt=(zt=Ve.parameters)==null?void 0:zt.docs)==null?void 0:Nt.source}}};var $t,Kt,Bt;je.parameters={...je.parameters,docs:{...($t=je.parameters)==null?void 0:$t.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [time, setTime] = useState<TimeObject | null>({
      hours: 9,
      minutes: 30
    });
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      maxWidth: 360
    }}>\r
        <ArvoTimePicker label="Start time" value={time} onChange={payload => setTime(payload.value)} />\r
        <div>Selected: {formatTimeLabel(time)}</div>\r
      </div>;
  }
}`,...(Bt=(Kt=je.parameters)==null?void 0:Kt.docs)==null?void 0:Bt.source}}};var Ut,Gt,Zt;De.parameters={...De.parameters,docs:{...(Ut=De.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
  name: 'Recipe: Shift Planner',
  args: {},
  render: () => {
    const [start, setStart] = useState<TimeObject | null>({
      hours: 9,
      minutes: 0
    });
    const [end, setEnd] = useState<TimeObject | null>({
      hours: 17,
      minutes: 0
    });
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      maxWidth: 420
    }}>\r
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 16
      }}>\r
          <ArvoTimePicker label="Shift start" interval={30} minTime={{
          hours: 6,
          minutes: 0,
          seconds: 0,
          milliseconds: 0
        }} maxTime={{
          hours: 22,
          minutes: 0,
          seconds: 0,
          milliseconds: 0
        }} value={start} onChange={payload => setStart(payload.value)} />\r
          <ArvoTimePicker label="Shift end" interval={30} minTime={{
          hours: 6,
          minutes: 0,
          seconds: 0,
          milliseconds: 0
        }} maxTime={{
          hours: 22,
          minutes: 0,
          seconds: 0,
          milliseconds: 0
        }} value={end} onChange={payload => setEnd(payload.value)} />\r
        </div>\r
        <div>\r
          Window: {formatTimeLabel(start)} - {formatTimeLabel(end)}\r
        </div>\r
      </div>;
  }
}`,...(Zt=(Gt=De.parameters)==null?void 0:Gt.docs)==null?void 0:Zt.source}}};var Jt,Qt,Xt;Ae.parameters={...Ae.parameters,docs:{...(Jt=Ae.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
  name: 'Recipe: Support Hours',
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 16,
    maxWidth: 760
  }}>\r
      <ArvoTimePicker label="Phone support starts" interval={15} minTime={{
      hours: 8,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }} maxTime={{
      hours: 18,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }} defaultValue={{
      hours: 8,
      minutes: 30,
      seconds: 0,
      milliseconds: 0
    }} />\r
      <ArvoTimePicker label="Phone support ends" interval={15} minTime={{
      hours: 8,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }} maxTime={{
      hours: 18,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }} defaultValue={{
      hours: 17,
      minutes: 30,
      seconds: 0,
      milliseconds: 0
    }} />\r
    </div>
}`,...(Xt=(Qt=Ae.parameters)==null?void 0:Qt.docs)==null?void 0:Xt.source}}};var Yt,en,rn;Pe.parameters={...Pe.parameters,docs:{...(Yt=Pe.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
  name: 'Recipe: Anchor Toolbar Trigger',
  args: {},
  render: () => {
    const [selected, setSelected] = useState<TimeObject | null>(null);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'flex-start'
    }}>\r
        <ArvoButton id="tp-anchor-demo-btn" label="Pick a time" icon="clock-o" />\r
        <ArvoTimePicker anchor="#tp-anchor-demo-btn" format="hh:mm tt" locale="en-US" onChange={payload => setSelected(payload.value)} />\r
        <div>Selected: {formatTimeLabel(selected)}</div>\r
      </div>;
  }
}`,...(rn=(en=Pe.parameters)==null?void 0:en.docs)==null?void 0:rn.source}}};const Qn=["Default","Playground","DefaultVariant","Small","Large","FullWidth","AnchorMode","TwentyFourHourDerived","TwelveHourDerived","FiveMinuteInterval","MinMaxRange","FreeTextInput","StrictParsing","AutoCloseOff","Disabled","ReadOnly","Required","Invalid","InvalidTooltip","Loading","ScopedPopoverConfig","AllSizes","AllStates","AllModes","ControlledValue","RecipeShiftPlanner","RecipeSupportHours","RecipeAnchorToolbarTrigger"],ga=Object.freeze(Object.defineProperty({__proto__:null,AllModes:Ve,AllSizes:we,AllStates:ke,AnchorMode:ie,AutoCloseOff:ge,ControlledValue:je,Default:te,DefaultVariant:ae,Disabled:ve,FiveMinuteInterval:de,FreeTextInput:pe,FullWidth:le,Invalid:ye,InvalidTooltip:Te,Large:oe,Loading:xe,MinMaxRange:me,Playground:ne,ReadOnly:he,RecipeAnchorToolbarTrigger:Pe,RecipeShiftPlanner:De,RecipeSupportHours:Ae,Required:be,ScopedPopoverConfig:Se,Small:se,StrictParsing:fe,TwelveHourDerived:ce,TwentyFourHourDerived:ue,__namedExportsOrder:Qn,default:Jn},Symbol.toStringTag,{value:"Module"}));export{we as A,je as C,de as F,me as M,ne as P,De as R,ga as T,ke as a,Ve as b,Ae as c,Pe as d};
