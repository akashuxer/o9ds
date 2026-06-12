import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r,b as $r,l as Ur,f as ne,m as Gr,p as ta,a as Zr}from"./iframe-BaOp0t6F.js";import{r as Jr}from"./index-BbVYX0ZH.js";import{u as Qr,c as Xr}from"./useOverlay-Bo9f1g6f.js";import{a as Ca,A as en,i as an}from"./Calendar-kkFVIcSH.js";import{u as tn}from"./useArvoLocale-z-KisV4q.js";import{u as rn}from"./useFocusTrap-BePVbEUc.js";import{r as nn}from"./loading-flag-DkqmYwgU.js";import{A as Aa}from"./IconButton-BgwDUYzG.js";import{a as sn}from"./FormLabel-Dn-HbpfA.js";import{A as Ma}from"./MessageAlert-DBQwY950.js";import{C as ln}from"./CalendarNav-C-WBh-a1.js";import{A as on}from"./Button-B8O_kk1m.js";function se(l,f,g){return l==null?null:l instanceof Date?Number.isNaN(l.getTime())?null:l:typeof l=="string"?l.length===0?null:ta(l,f,g):null}function aa(l,f){return l==null&&f==null?!0:l==null||f==null?!1:an(l,f)}function Pa(l,f,g){return l==null?null:f&&l.getTime()<f.getTime()?new Date(f.getTime()):g&&l.getTime()>g.getTime()?new Date(g.getTime()):l}function cn(l){return l===!1||l==null||l===!0?null:typeof l=="string"?typeof document>"u"?null:document.querySelector(l):l instanceof HTMLElement?l:l.current??null}const h=r.forwardRef(function({value:f,defaultValue:g,format:G,locale:z,weekStart:Z=0,hasWeeks:$e=!1,minDate:ra,maxDate:na,placeholder:fr,label:Ue,size:sa="lg",width:gr,isFullWidth:Ge=!1,isDisabled:yr=!1,isReadOnly:x=!1,isRequired:la=!1,isInvalid:oa=!1,errorMsg:vr,errorDisplay:Ze="inline",isLoading:mn=!1,isClearable:br=!1,isAutoClose:J=!0,isStrictParsing:pn=!1,isSegmented:m=!0,anchor:Q=!1,placement:ia="bottom-end",zIndex:ca,calendarProps:hr,popoverProps:C,onChange:V,onOpen:Oe,onClose:je,onBlur:We,className:Dr,id:Sr},wr){const kr=r.useId(),T=Sr??`arvo-dp-${kr}`,ua=`${T}-input`,da=`${T}-lbl`,ma=`${T}-err`,X=`${T}-popover`,pa=tn(),i=r.useMemo(()=>$r(z??pa),[z,pa]),c=r.useMemo(()=>G||Ur(i),[G,i]),A=r.useMemo(()=>se(ra,c,i),[ra,c,i]),M=r.useMemo(()=>se(na,c,i),[na,c,i]),R=f!==void 0,[D,_e]=r.useState(()=>se(f??g??null,c,i)),[o,ze]=r.useState(!1),fa=r.useMemo(()=>{const e=D??new Date;return{year:e.getFullYear(),month:e.getMonth()}},[]),[I,w]=r.useState(fa.year),[q,O]=r.useState(fa.month),[S,N]=r.useState("days"),[xr,Cr]=r.useState(null),[fn,Ar]=r.useState(null),[Mr,ga]=r.useState(!1),[B,K]=r.useState(()=>D?ne(D,c,i):""),[Pr,Er]=r.useState(0),Y=r.useRef(null),ee=r.useRef(null),ae=r.useRef(null),Ne=r.useRef(null),F=r.useRef(null),ya=r.useRef(null),v=r.useRef(null),j=r.useRef(null),Be=r.useRef(null),te=r.useRef(!1),p=r.useRef(D);r.useEffect(()=>{p.current=D},[D]);const b=yr,L=nn(),re=xr??(oa?vr??null:null),H=re!=null,va=D!=null,Vr=Q!==!1&&Q!=null,ba=Q===!0,ha=r.useRef(!1);ba&&!ha.current&&(console.warn("[ArvoDatePicker] anchor={true} requires a host element in React; falling back to input mode."),ha.current=!0);const W=Vr&&!ba,y=r.useCallback(()=>{const e=v.current;if(m&&e){K(e.getFormattedDisplay(te.current));return}K(p.current?ne(p.current,c,i):"")},[m,c,i]),P=r.useCallback(e=>{const a=Pa(e,A,M);return aa(a,p.current)?!1:(R||_e(a),p.current=a,V==null||V({value:a,formattedValue:a?ne(a,c,i):""}),!0)},[R,A,M,V,c,i]);r.useEffect(()=>{var d;if(!m){(d=v.current)==null||d.destroy(),v.current=null,y();return}const e=Gr({format:c,locale:i,value:p.current,min:A,max:M,commit:"blur"});v.current=e;const a=e.on("commit",k=>{const U=k.date;P(U),y()}),t=e.on("segment",()=>{ga(e.getFocusedSegment()!=null),Er(k=>k+1)}),n=e.on("change",()=>{y()});return y(),()=>{a(),t(),n(),e.destroy(),v.current=null}},[m,c,i,A==null?void 0:A.getTime(),M==null?void 0:M.getTime()]),r.useEffect(()=>{var a;if(!R)return;const e=se(f,c,i);_e(e),p.current=e,(a=v.current)==null||a.setValue(e,{silent:!0}),y()},[f,c,i,R]),r.useEffect(()=>{D&&(D.getFullYear()===I&&D.getMonth()===q||(w(D.getFullYear()),O(D.getMonth())))},[D]);const E=r.useCallback(()=>{var t;if(o||b||L||x||(Oe==null?void 0:Oe())===!1)return;const e=new CustomEvent("dp:open",{bubbles:!0,cancelable:!0});if((t=Y.current)==null||t.dispatchEvent(e),e.defaultPrevented)return;const a=p.current??new Date;w(a.getFullYear()),O(a.getMonth()),N("days"),ze(!0)},[o,b,L,x,Oe]),u=r.useCallback(()=>{var a;if(!o||(je==null?void 0:je())===!1)return;const e=new CustomEvent("dp:close",{bubbles:!0,cancelable:!0});(a=Y.current)==null||a.dispatchEvent(e),!e.defaultPrevented&&(ze(!1),requestAnimationFrame(()=>{const t=j.current??ae.current;t==null||t.focus({preventScroll:!0})}))},[o,je]),Tr=r.useCallback(()=>{b||x||(o?u():E())},[L,b,x,o,E,u]),Ke=r.useCallback(()=>{var a;(a=v.current)==null||a.setValue(null,{silent:!0}),(P(null)||p.current==null)&&y()},[P,y]),Rr=r.useCallback(e=>{e.stopPropagation(),Ke()},[Ke]),Fr=r.useCallback(e=>{K(e.target.value)},[]),Je=r.useRef(null),Lr=r.useCallback(()=>{const e=ae.current;e&&requestAnimationFrame(()=>{if(document.activeElement!==e)return;Je.current=e.selectionStart??null;const a=v.current;if(!a||!m)return;const t=Je.current;if(Je.current=null,t===null)return;const n=a.findSegmentForOffset(t);n!==null&&a.focusSegment(n)})},[m]),Ir=r.useCallback(()=>{te.current=!0,Be.current=p.current;const e=v.current;m&&e&&(K(e.getFormattedDisplay(!0)),e.focusSegment(0))},[m]),qr=r.useCallback(()=>{te.current=!1;const e=v.current;if(m&&e)K(e.getFormattedDisplay(!1));else if(!m){const a=ta(B,c,i);a&&P(a),y()}ga(!1),We==null||We()},[m,B,c,i,P,y,We]),Or=r.useCallback(e=>{if(e.altKey&&e.key==="ArrowDown"){e.preventDefault(),o||E();return}if(e.altKey&&e.key==="ArrowUp"){e.preventDefault(),o&&u();return}if(m){const a=v.current;if(!a)return;const t=e.key;if(t==="Escape"){e.preventDefault(),a.handleKey({key:"Escape"}),te.current?(K(a.getFormattedDisplay(!0)),a.focusSegment(0)):y(),o&&u();return}if(t==="Tab"){a.handleKey({key:"Tab",shiftKey:e.shiftKey}).consumed&&e.preventDefault();return}if(t==="Enter"){e.preventDefault();const n=p.current;a.handleKey({key:"Enter"});const d=!aa(n,p.current);o&&J&&d&&u();return}if(t==="ArrowLeft"||t==="ArrowRight"||t==="ArrowUp"||t==="ArrowDown"||t==="Home"||t==="End"||t==="Backspace"||t==="Delete"){a.handleKey({key:t}).consumed&&e.preventDefault();return}if(t.length===1&&!e.ctrlKey&&!e.metaKey){if(/^[0-9]$/.test(t)){a.handleDigit(t).consumed&&e.preventDefault();return}if(/^[A-Za-z]$/.test(t)){a.handleLetter(t).consumed&&e.preventDefault();return}}return}if(e.key==="Enter"){e.preventDefault();const a=ta(B,c,i);if(a){const t=p.current,n=P(a);o&&J&&n&&!aa(t,p.current)&&u()}return}if(e.key==="Escape"){e.preventDefault(),Be.current!==p.current&&(R||_e(Be.current),p.current=Be.current),y(),o&&u();return}},[m,o,J,E,u,B,c,i,P,y,R]),jr=r.useCallback(e=>{const a=v.current;if(!m||!a)return;const t=e.clipboardData.getData("text");a.handlePaste(t).consumed&&e.preventDefault()},[m]),Wr=r.useCallback(e=>{var n;const{date:a,mode:t}=e;if(a){if(t==="days"){(n=v.current)==null||n.setValue(a,{silent:!0}),P(a),y(),J&&u();return}w(a.getFullYear()),O(a.getMonth()),t==="months"?N("days"):t==="years"&&N("months")}},[P,y,J,u]),_r=r.useCallback(()=>{if(S==="days"){const e=Ca(new Date(I,q,1),-1);w(e.getFullYear()),O(e.getMonth())}else w(S==="months"?e=>e-1:e=>e-10)},[S,I,q]),zr=r.useCallback(()=>{if(S==="days"){const e=Ca(new Date(I,q,1),1);w(e.getFullYear()),O(e.getMonth())}else w(S==="months"?e=>e+1:e=>e+10)},[S,I,q]),Nr=r.useCallback(()=>{const e=new Date;w(e.getFullYear()),O(e.getMonth())},[]);r.useLayoutEffect(()=>{if(!W){j.current=null;return}const e=cn(Q);if(j.current=e,!e)return;const a=()=>{b||L||x||(o?u():E())},t=n=>{n.altKey&&n.key==="ArrowDown"?(n.preventDefault(),o||E()):n.altKey&&n.key==="ArrowUp"?(n.preventDefault(),o&&u()):n.key==="Escape"?o&&(n.preventDefault(),u()):(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),a())};return e.setAttribute("aria-haspopup","dialog"),e.setAttribute("aria-expanded",o?"true":"false"),e.setAttribute("aria-controls",X),e.addEventListener("click",a),e.addEventListener("keydown",t),()=>{e.removeEventListener("click",a),e.removeEventListener("keydown",t),e.removeAttribute("aria-haspopup"),e.removeAttribute("aria-expanded"),e.removeAttribute("aria-controls")}},[W,Q,o,b,L,x,E,u,X]);const Br=r.useCallback(()=>{const e=F.current;if(!e)return[];const a=e.querySelector('.arvo-cal__cell[tabindex="0"]'),t=e.querySelector(".arvo-cal-nav__prev"),n=e.querySelector(".arvo-cal-nav__month-btn"),d=e.querySelector(".arvo-cal-nav__year-btn"),k=e.querySelector(".arvo-cal-nav__next"),U=e.querySelector(".arvo-cal-nav__today");return[a,t,n,d,k,U]},[]);rn(F,{active:o,initialFocus:"none",returnFocusOnDeactivate:!1,escapeDeactivates:!1,allowOutsideClick:!0,getOrderedElements:Br}),r.useEffect(()=>{if(!o)return;const e=p.current??new Date,a=requestAnimationFrame(()=>{var t;(t=ya.current)==null||t.focusCell(e)});return()=>cancelAnimationFrame(a)},[o]);const $=Qr();r.useEffect(()=>{if(!o||!F.current)return;const e=(W?j.current:ee.current)??void 0;return $.open({id:T,type:"dropdown",element:F.current,triggerElement:e,priority:20,config:{autoCloseOnOutsideClick:!0},onClose:u}),()=>{$.close(T)}},[o]);const Ye=r.useRef(null),He=r.useRef(null),[gn,Kr]=r.useState(0);r.useLayoutEffect(()=>{var U;if(!o){Ye.current=null,(U=He.current)==null||U.destroy(),He.current=null;return}const e=(W?j.current:ee.current)??null,a=F.current;if(!e||!a)return;const t={placement:ia,gap:(C==null?void 0:C.offset)??4,width:"auto"},n=_=>{a.style.transform=`translate(${_.x}px, ${_.y}px)`},d=Zr(e,a,t);Ye.current=d,n(d),a.style.visibility="",Kr(_=>_+1);const k=Xr(e,a,t,_=>{Ye.current=_,n(_)});return He.current=k,()=>{k.destroy(),He.current=null}},[o,ia,W,C==null?void 0:C.offset]),r.useEffect(()=>{if(!o)return;const e=a=>{var n,d;const t=a.target;$.isOverlayClickInside(F.current,t)||(n=Y.current)!=null&&n.contains(t)||(d=j.current)!=null&&d.contains(t)||u()};return document.addEventListener("pointerdown",e,!0),()=>{document.removeEventListener("pointerdown",e,!0)}},[o,u,$]),r.useEffect(()=>{if(!o)return;const e=a=>{var n,d;const t=a.target;(n=Y.current)!=null&&n.contains(t)||$.isOverlayClickInside(F.current,t)||(d=j.current)!=null&&d.contains(t)||u()};return document.addEventListener("focusin",e),()=>document.removeEventListener("focusin",e)},[o,u,$]),r.useLayoutEffect(()=>{if(!m||!te.current)return;const e=v.current,a=ae.current;if(!e||!a)return;const t=e.getFocusedSegment();if(t)try{a.setSelectionRange(t.startOffset,t.endOffset)}catch{}},[Pr,B,m]);const Qe=r.useCallback(()=>{if(!Ne.current||!ee.current)return;const e=Ne.current.offsetWidth,a=e>0?e+4:0;ee.current.style.setProperty("--arvo-form-input-pad-r",`${a}px`)},[]);r.useEffect(()=>{Qe()}),r.useEffect(()=>{const e=Ne.current;if(!e)return;const a=new ResizeObserver(Qe);return a.observe(e),()=>a.disconnect()},[Qe]),r.useImperativeHandle(wr,()=>{const e=Symbol("NO_ARG");return{open:()=>E(),close:()=>u(),toggle:t=>{ze(t===void 0?n=>!n:t)},value:((t=e)=>{var k;if(t===e)return p.current;const n=se(t,c,i),d=Pa(n,A,M);R||_e(d),p.current=d,(k=v.current)==null||k.setValue(d,{silent:!0}),V==null||V({value:d,formattedValue:d?ne(d,c,i):""}),y()}),formattedValue:()=>p.current?ne(p.current,c,i):"",clear:()=>Ke(),disabled:((t=e)=>{if(t===e)return b;console.warn("[ArvoDatePicker] disabled() setter is a noop in React; pass isDisabled prop.")}),setError:t=>{Cr(t===!1?null:t)},setLoading:t=>{Ar(t)},focus:()=>{var t;(t=ae.current)==null||t.focus()},destroy:()=>{}}},[b,c,i,E,u,R,V,y,Ke]);const Da=["arvo-dp",`arvo-dp--${sa}`,Ge&&"arvo-dp--full-width",$e&&"arvo-dp--show-weeks",W&&"arvo-dp--anchor-mode",b&&"is-disabled",x&&"is-readonly",H&&"has-error",H&&Ze==="tooltip"&&"error-tooltip",va&&"has-value",Mr&&"has-text-selected",o&&"open",L,Dr].filter(Boolean).join(" "),Sa=Ge?"100%":gr??void 0,wa=Sa?{"--arvo-form-input-width":Sa}:void 0,Xe=Ye.current,Yr={position:"fixed",top:0,left:0,margin:0,...C!=null&&C.width?{width:C.width}:{},...Xe?{transform:`translate(${Xe.x}px, ${Xe.y}px)`}:{visibility:"hidden"},...ca!=null?{zIndex:ca}:{}},ka=H&&Ze==="inline"&&re!=null,ea=H&&Ze==="tooltip"&&re!=null,Hr=["arvo-dp",`arvo-dp--${sa}`,Ge&&"arvo-dp--full-width",$e&&"arvo-dp--show-weeks","open",L].filter(Boolean).join(" "),xa=o?Jr.createPortal(s.jsx("div",{className:Hr,style:{display:"contents"},children:s.jsxs("div",{ref:F,id:X,className:"arvo-dp__popover open",role:"dialog","aria-label":"Choose a date","aria-modal":!1,style:Yr,children:[s.jsx("div",{className:"arvo-dp__header",children:s.jsx(ln,{visibleYear:I,visibleMonth:q,viewMode:S==="days"||S==="months"||S==="years"?S:"days",locale:i,minDate:A,maxDate:M,isDisabled:b,onPrev:_r,onNext:zr,onToday:Nr,onMonthButtonClick:()=>N(S==="months"?"days":"months"),onYearButtonClick:()=>N(S==="years"?"days":"years")})}),s.jsx("div",{className:"arvo-dp__body",children:s.jsx(en,{...hr,ref:ya,visibleYear:I,visibleMonth:q,viewMode:S,locale:i,weekStart:Z,hasWeeks:$e,selectedDate:D,minDate:A,maxDate:M,onCellSelect:Wr,onMonthChange:e=>{w(e.year),O(e.month)},onViewModeChange:e=>N(e.mode),onDismiss:u})})]})}),document.body):null;return W?s.jsx("div",{ref:Y,id:T,className:Da,style:wa,children:xa}):s.jsxs("div",{ref:Y,id:T,className:Da,style:wa,children:[Ue&&s.jsx(sn,{htmlFor:ua,id:da,isRequired:la,isDisabled:b,isInvalid:H,className:"arvo-dp__lbl",children:Ue}),s.jsxs("div",{ref:ee,className:"arvo-dp__field",children:[s.jsx("input",{ref:ae,id:ua,type:"text",className:"arvo-dp__input",role:"combobox",value:B,placeholder:fr??void 0,disabled:b,readOnly:x||m,autoComplete:"off","aria-haspopup":"dialog","aria-expanded":o,"aria-controls":X,"aria-required":la||void 0,"aria-invalid":oa||H||void 0,"aria-disabled":b||void 0,"aria-busy":void 0,"aria-labelledby":Ue?da:void 0,"aria-describedby":ka?ma:void 0,onKeyDown:Or,onFocus:Ir,onBlur:qr,onMouseDown:m?Lr:void 0,onPaste:m?jr:void 0,onChange:m?void 0:Fr}),(()=>{const e=br&&va&&!b&&!x&&!L&&!ea,a=e||ea;return s.jsxs("div",{ref:Ne,className:"arvo-dp__actions",children:[e&&s.jsx(Aa,{size:"sm",variant:"tertiary",icon:"close",tooltip:"Clear",tabIndex:-1,onClick:Rr,className:"arvo-dp__clear-btn"}),ea&&s.jsx(Ma,{type:"negative",isInline:!0,message:re??"",className:"arvo-dp__err-ico"}),a&&s.jsx("span",{className:"arvo-dp__sep","aria-hidden":"true"}),s.jsx(Aa,{size:"sm",variant:"tertiary",icon:"calendar-o",tooltip:"Select date",isDisabled:b||x,isSelected:o,onClick:Tr,className:"arvo-dp__trigger-btn","aria-haspopup":"dialog","aria-expanded":o,"aria-controls":X})]})})(),s.jsx("div",{className:"arvo-dp__border"})]}),ka&&s.jsx(Ma,{type:"negative",id:ma,message:re,className:"arvo-dp__err-msg"}),xa]})});h.displayName="ArvoDatePicker";h.__docgenInfo={description:"",methods:[{name:"open",docblock:null,modifiers:[],params:[],returns:null},{name:"close",docblock:null,modifiers:[],params:[],returns:null},{name:"toggle",docblock:null,modifiers:[],params:[{name:"force",optional:!0,type:{name:"boolean"}}],returns:null},{name:"value",docblock:null,modifiers:[],params:[{name:"v",optional:!0,type:null}],returns:null},{name:"formattedValue",docblock:null,modifiers:[],params:[],returns:null},{name:"clear",docblock:null,modifiers:[],params:[],returns:null},{name:"disabled",docblock:null,modifiers:[],params:[{name:"state",optional:!0,type:null}],returns:null},{name:"setError",docblock:null,modifiers:[],params:[{name:"message",optional:!1,type:{name:"union",raw:"string | false",elements:[{name:"string"},{name:"literal",value:"false"}]}}],returns:null},{name:"setLoading",docblock:null,modifiers:[],params:[{name:"loading",optional:!1,type:{name:"boolean"}}],returns:null},{name:"focus",docblock:null,modifiers:[],params:[],returns:null},{name:"destroy",docblock:null,modifiers:[],params:[],returns:null}],displayName:"ArvoDatePicker",props:{value:{required:!1,tsType:{name:"union",raw:"Date | string | null",elements:[{name:"Date"},{name:"string"},{name:"null"}]},description:"Current date value. Parsed via parseDate(value, format, locale)."},defaultValue:{required:!1,tsType:{name:"union",raw:"Date | string | null",elements:[{name:"Date"},{name:"string"},{name:"null"}]},description:"Initial value for uncontrolled mode."},format:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:".NET / Kendo date format. Empty resolves to locale default."},locale:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"BCP-47 locale."},weekStart:{required:!1,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:"First day of week. 0=Sunday, 1=Monday, ... 6=Saturday.",defaultValue:{value:"0",computed:!1}},hasWeeks:{required:!1,tsType:{name:"boolean"},description:"Show weeks column in calendar. Adds arvo-dp--show-weeks modifier.",defaultValue:{value:"false",computed:!1}},minDate:{required:!1,tsType:{name:"union",raw:"Date | string | null",elements:[{name:"Date"},{name:"string"},{name:"null"}]},description:"Min selectable date (inclusive)."},maxDate:{required:!1,tsType:{name:"union",raw:"Date | string | null",elements:[{name:"Date"},{name:"string"},{name:"null"}]},description:"Max selectable date (inclusive)."},placeholder:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Placeholder text shown when value is null."},label:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Form label text. Uses form-label shared pattern."},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'lg'"}]},description:"Trigger size. Applies arvo-dp--sm or arvo-dp--lg modifier.",defaultValue:{value:"'lg'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:'CSS width on the trigger (e.g. "200px", "50%"). Defaults to 300px.'},isFullWidth:{required:!1,tsType:{name:"boolean"},description:'Shorthand for width="100%". Applies arvo-dp--full-width modifier.',defaultValue:{value:"false",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state. Applies is-disabled class and aria-disabled.",defaultValue:{value:"false",computed:!1}},isReadOnly:{required:!1,tsType:{name:"boolean"},description:"Read-only. Applies is-readonly class.",defaultValue:{value:"false",computed:!1}},isRequired:{required:!1,tsType:{name:"boolean"},description:"Required for forms. Applies aria-required.",defaultValue:{value:"false",computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:"Validation invalid. Applies has-error class and aria-invalid.",defaultValue:{value:"false",computed:!1}},errorMsg:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Error message text. Used by msg-alert shared pattern."},errorDisplay:{required:!1,tsType:{name:"union",raw:"'inline' | 'tooltip' | 'none'",elements:[{name:"literal",value:"'inline'"},{name:"literal",value:"'tooltip'"},{name:"literal",value:"'none'"}]},description:"How to render error feedback.",defaultValue:{value:"'inline'",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"Loading state (Pattern C). Applies loading class and aria-busy.",defaultValue:{value:"false",computed:!1}},isClearable:{required:!1,tsType:{name:"boolean"},description:`When true and a value is set, renders a clear icon button in the action
overlay to clear the current date. Defaults to \`false\` so the field
mirrors TextBox-style opt-in clearing. The clear button is hidden when
the field is disabled, readOnly, loading, or showing an inline error
tooltip icon (the icon occupies the same slot).`,defaultValue:{value:"false",computed:!1}},isAutoClose:{required:!1,tsType:{name:"boolean"},description:"Close popover on day select.",defaultValue:{value:"true",computed:!1}},isStrictParsing:{required:!1,tsType:{name:"boolean"},description:"Reject partial format parses.",defaultValue:{value:"false",computed:!1}},isSegmented:{required:!1,tsType:{name:"boolean"},description:"Use isSegmented input editing in the trigger.",defaultValue:{value:"true",computed:!1}},anchor:{required:!1,tsType:{name:"union",raw:"false | true | HTMLElement | RefObject<HTMLElement> | string",elements:[{name:"literal",value:"false"},{name:"literal",value:"true"},{name:"HTMLElement"},{name:"RefObject",elements:[{name:"HTMLElement"}],raw:"RefObject<HTMLElement>"},{name:"string"}]},description:`Overlay-only mode. Pass a host element / ref / CSS selector to bind
without rendering an input. Applies arvo-dp--anchor-mode modifier.`,defaultValue:{value:"false",computed:!1}},placement:{required:!1,tsType:{name:"union",raw:"'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'auto'",elements:[{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'auto'"}]},description:"Popover placement relative to the trigger.",defaultValue:{value:"'bottom-end'",computed:!1}},zIndex:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:"Popover z-index override."},calendarProps:{required:!1,tsType:{name:"Pick",elements:[{name:"ArvoCalendarProps"},{name:"union",raw:"'hasOutsideDays' | 'isKeyboardEnabled' | 'size'",elements:[{name:"literal",value:"'hasOutsideDays'"},{name:"literal",value:"'isKeyboardEnabled'"},{name:"literal",value:"'size'"}]}],raw:`Pick<
  ArvoCalendarProps,
  'hasOutsideDays' | 'isKeyboardEnabled' | 'size'
>`},description:"Escape hatch for inner `ArvoCalendar` config the parent doesn't expose\nflat. Bag-only knobs (`hasOutsideDays`, `isKeyboardEnabled`, `size`)\nflow through. On any conflict with a flat prop, the flat prop wins."},popoverProps:{required:!1,tsType:{name:"DatePickerPopoverProps"},description:"Escape hatch for popover surface options the parent doesn't expose\nflat. Bag-only knobs (`width`, `offset`) flow through. Flat overlay\noptions (`placement`, `zIndex`) always win on overlap."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(payload: { value: Date | null; formattedValue: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ value: Date | null; formattedValue: string }",signature:{properties:[{key:"value",value:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}],required:!0}},{key:"formattedValue",value:{name:"string",required:!0}}]}},name:"payload"}],return:{name:"void"}}},description:"Called when the committed date value changes."},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => boolean | void",signature:{arguments:[],return:{name:"union",raw:"boolean | void",elements:[{name:"boolean"},{name:"void"}]}}},description:"Called when popover is about to open. Return false to cancel."},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => boolean | void",signature:{arguments:[],return:{name:"union",raw:"boolean | void",elements:[{name:"boolean"},{name:"void"}]}}},description:"Called when popover is about to close. Return false to cancel."},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called on trigger blur."},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""}}};const un={title:"Date & Time/DatePicker",component:h,tags:["!dev","stable"],argTypes:{value:{control:{type:"text"},description:"Controlled date value. Accepts Date, ISO string, or null."},defaultValue:{control:{type:"text"},description:"Initial value for uncontrolled mode."},format:{control:{type:"text"},description:".NET / Kendo date format string. Empty resolves to locale default."},locale:{control:{type:"text"},description:'BCP-47 locale (e.g. "en-US", "de-DE"). Defaults to navigator locale.'},weekStart:{control:{type:"select"},options:[0,1,2,3,4,5,6],description:"First day of week. 0=Sunday, 1=Monday, ... 6=Saturday.",table:{defaultValue:{summary:"0"}}},hasWeeks:{control:{type:"boolean"},description:"Show ISO-8601 week numbers column in the calendar.",table:{defaultValue:{summary:"false"}}},minDate:{control:{type:"text"},description:"Min selectable date (inclusive). Accepts Date or string."},maxDate:{control:{type:"text"},description:"Max selectable date (inclusive). Accepts Date or string."},placeholder:{control:{type:"text"},description:"Placeholder text shown when no value is selected."},label:{control:{type:"text"},description:"Field label rendered above the trigger input."},size:{control:{type:"select"},options:["sm","lg"],description:"Trigger size. sm: 24px input field (46px label+field total); lg: 32px (54px total).",table:{defaultValue:{summary:"lg"}}},width:{control:{type:"text"},description:'CSS width on the trigger field (e.g. "200px", "50%"). Default: 300px.'},isFullWidth:{control:{type:"boolean"},description:'Shorthand for width="100%". Applies arvo-dp--full-width modifier.',table:{defaultValue:{summary:"false"}}},isDisabled:{control:{type:"boolean"},description:"Disable the picker. Applies is-disabled and aria-disabled.",table:{defaultValue:{summary:"false"}}},isReadOnly:{control:{type:"boolean"},description:"Read-only mode. Shows value but prevents editing.",table:{defaultValue:{summary:"false"}}},isRequired:{control:{type:"boolean"},description:"Required field indicator. Applies aria-required.",table:{defaultValue:{summary:"false"}}},isInvalid:{control:{type:"boolean"},description:"Validation error state. Applies has-error and aria-invalid.",table:{defaultValue:{summary:"false"}}},errorMsg:{control:{type:"text"},description:"Error message shown when isInvalid is true."},errorDisplay:{control:{type:"select"},options:["inline","tooltip","none"],description:"How to render error feedback: inline message, tooltip icon, or none.",table:{defaultValue:{summary:"inline"}}},isLoading:{control:{type:"boolean"},description:"Loading state (Pattern C). Spinner replaces trigger button; popover cannot open.",table:{defaultValue:{summary:"false"}}},isAutoClose:{control:{type:"boolean"},description:"Close popover automatically after a day is selected.",table:{defaultValue:{summary:"true"}}},isStrictParsing:{control:{type:"boolean"},description:"Reject partial format parses (reserved for future engine pass).",table:{defaultValue:{summary:"false"}}},isSegmented:{control:{type:"boolean"},description:"Use isSegmented input editing (month/day/year segments) in the trigger.",table:{defaultValue:{summary:"true"}}},placement:{control:{type:"select"},options:["top-start","top-end","bottom-start","bottom-end","auto"],description:"Popover placement relative to the trigger field.",table:{defaultValue:{summary:"bottom-start"}}},onChange:{action:"changed",table:{category:"Events"}},onOpen:{action:"opened",table:{category:"Events"}},onClose:{action:"closed",table:{category:"Events"}},onBlur:{action:"blurred",table:{category:"Events"}}},args:{size:"lg",isDisabled:!1,isReadOnly:!1,isRequired:!1,isInvalid:!1,isLoading:!1,isFullWidth:!1,hasWeeks:!1,isAutoClose:!0,isStrictParsing:!1,isSegmented:!0,errorDisplay:"inline",placement:"bottom-start",weekStart:0},parameters:{docs:{description:{component:`Consolidated CSF for ArvoDatePicker.\r

All stories are docs-only (\`tags: ['!dev', 'stable']\`): they render on the\r
attached \`DatePicker.mdx\` page (the single sidebar node for this component),\r
not as their own sidebar leaves. \`DatePicker.mdx\` references these stories\r
with Doc Blocks.\r

Buckets within this file:\r
  - Default / Playground -- live controls for every prop (drives the docs page)\r
  - Sizes / Layout / Calendar / Format / Locale / States / Value / Constraints / Placement / Scoped -- frozen single-prop snapshots\r
  - Examples             -- composition recipes`}}}},le={args:{label:"Pick a date"}},oe={args:{label:"Date",placeholder:"Select a date",size:"lg",isSegmented:!0,isAutoClose:!0,weekStart:0,hasWeeks:!1,placement:"bottom-start",errorDisplay:"inline"}},ie={name:"Size: sm",args:{label:"Date",size:"sm"}},ce={name:"Size: lg (default)",args:{label:"Date",size:"lg"}},ue={name:"Full Width",args:{label:"Date",isFullWidth:!0}},de={name:"Width: 200px",args:{label:"Date",width:"200px"}},me={name:"Show Weeks Column",args:{label:"Date",hasWeeks:!0}},pe={name:"Format: ISO (yyyy-MM-dd)",args:{label:"Date",format:"yyyy-MM-dd"}},fe={name:"Format: Long",args:{label:"Date",format:"dddd, MMMM d, yyyy"}},ge={name:"Locale: de-DE",args:{label:"Datum",locale:"de-DE"}},ye={name:"Week Start: Monday",args:{label:"Date",weekStart:1}},ve={args:{label:"Date",isDisabled:!0}},be={args:{label:"Date",isReadOnly:!0,defaultValue:new Date(2026,5,1)}},he={args:{label:"Date",isRequired:!0}},De={args:{label:"Date",isInvalid:!0,errorMsg:"Please pick a date"}},Se={name:"Invalid (tooltip)",args:{label:"Date",size:"sm",isInvalid:!0,errorMsg:"Please pick a date",errorDisplay:"tooltip"}},we={args:{label:"Date",isLoading:!0}},ke={name:"With Value (free-text)",args:{label:"Date",value:new Date(2026,5,1),isSegmented:!1}},xe={name:"With Value (isSegmented)",args:{label:"Date",value:new Date(2026,5,1)}},Ce={name:"Min / Max Range",args:{label:"Date",minDate:new Date(2026,5,1),maxDate:new Date(2026,5,30),defaultValue:new Date(2026,5,15)}},Ae={name:"Free-text Input",args:{label:"Date",isSegmented:!1}},Me={name:"Placement: top-start",args:{label:"Date",placement:"top-start"}},Pe={name:"Placement: bottom-end",args:{label:"Date",placement:"bottom-end"}},Ee={name:"Scoped Calendar Config (calendarProps)",args:{label:"Date",calendarProps:{hasOutsideDays:!0,isKeyboardEnabled:!0,size:"sm"}}},Ve={name:"Scoped Popover Config (popoverProps)",args:{label:"Date",popoverProps:{width:"360px",offset:12}}},Te={name:"All Sizes",args:{},render:()=>s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,maxWidth:360},children:[s.jsx(h,{label:"Small (sm)",size:"sm"}),s.jsx(h,{label:"Large (lg)",size:"lg"})]})},Re={name:"All States",args:{},render:()=>s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:16,maxWidth:720},children:[s.jsx(h,{label:"Default"}),s.jsx(h,{label:"Disabled",isDisabled:!0}),s.jsx(h,{label:"Read Only",isReadOnly:!0,defaultValue:new Date(2026,5,1)}),s.jsx(h,{label:"Invalid",isInvalid:!0,errorMsg:"Please pick a date"}),s.jsx(h,{label:"Loading",isLoading:!0})]})},Fe={name:"Controlled Value",args:{},render:()=>{const[l,f]=r.useState(null);return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,maxWidth:360},children:[s.jsx(h,{label:"Date",value:l,onChange:g=>f(g.value)}),s.jsxs("span",{children:["Selected:"," ",l?l.toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"}):"none"]})]})}},Le={name:"Recipe: Booking Date",args:{},render:()=>{const[l,f]=r.useState(null),[g,G]=r.useState(null);return s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:16},children:[s.jsx(h,{label:"Check-in",value:l,maxDate:g??void 0,onChange:z=>{const Z=z.value;f(Z),g&&Z&&g<=Z&&G(null)}}),s.jsx(h,{label:"Check-out",value:g,minDate:l??void 0,onChange:z=>G(z.value)})]})}},Ie={name:"Recipe: Birthday Field",args:{},render:()=>s.jsx(h,{label:"Date of birth",format:"MM/dd/yyyy",maxDate:new Date,weekStart:1,placeholder:"MM/DD/YYYY"})},qe={name:"Recipe: Anchor Mode",args:{},render:()=>{const[l,f]=r.useState(null);return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,alignItems:"flex-start"},children:[s.jsx(on,{id:"dp-anchor-demo-btn",label:"Pick a date",icon:"calendar"}),s.jsx(h,{anchor:"#dp-anchor-demo-btn",onChange:g=>f(g.value)}),s.jsxs("span",{children:["Selected:"," ",l?l.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"}):"none"]})]})}};var Ea,Va,Ta;le.parameters={...le.parameters,docs:{...(Ea=le.parameters)==null?void 0:Ea.docs,source:{originalSource:`{
  args: {
    label: 'Pick a date'
  }
}`,...(Ta=(Va=le.parameters)==null?void 0:Va.docs)==null?void 0:Ta.source}}};var Ra,Fa,La;oe.parameters={...oe.parameters,docs:{...(Ra=oe.parameters)==null?void 0:Ra.docs,source:{originalSource:`{
  args: {
    label: 'Date',
    placeholder: 'Select a date',
    size: 'lg',
    isSegmented: true,
    isAutoClose: true,
    weekStart: 0,
    hasWeeks: false,
    placement: 'bottom-start',
    errorDisplay: 'inline'
  }
}`,...(La=(Fa=oe.parameters)==null?void 0:Fa.docs)==null?void 0:La.source}}};var Ia,qa,Oa;ie.parameters={...ie.parameters,docs:{...(Ia=ie.parameters)==null?void 0:Ia.docs,source:{originalSource:`{
  name: 'Size: sm',
  args: {
    label: 'Date',
    size: 'sm'
  }
}`,...(Oa=(qa=ie.parameters)==null?void 0:qa.docs)==null?void 0:Oa.source}}};var ja,Wa,_a;ce.parameters={...ce.parameters,docs:{...(ja=ce.parameters)==null?void 0:ja.docs,source:{originalSource:`{
  name: 'Size: lg (default)',
  args: {
    label: 'Date',
    size: 'lg'
  }
}`,...(_a=(Wa=ce.parameters)==null?void 0:Wa.docs)==null?void 0:_a.source}}};var za,Na,Ba;ue.parameters={...ue.parameters,docs:{...(za=ue.parameters)==null?void 0:za.docs,source:{originalSource:`{
  name: 'Full Width',
  args: {
    label: 'Date',
    isFullWidth: true
  }
}`,...(Ba=(Na=ue.parameters)==null?void 0:Na.docs)==null?void 0:Ba.source}}};var Ka,Ya,Ha;de.parameters={...de.parameters,docs:{...(Ka=de.parameters)==null?void 0:Ka.docs,source:{originalSource:`{
  name: 'Width: 200px',
  args: {
    label: 'Date',
    width: '200px'
  }
}`,...(Ha=(Ya=de.parameters)==null?void 0:Ya.docs)==null?void 0:Ha.source}}};var $a,Ua,Ga;me.parameters={...me.parameters,docs:{...($a=me.parameters)==null?void 0:$a.docs,source:{originalSource:`{
  name: 'Show Weeks Column',
  args: {
    label: 'Date',
    hasWeeks: true
  }
}`,...(Ga=(Ua=me.parameters)==null?void 0:Ua.docs)==null?void 0:Ga.source}}};var Za,Ja,Qa;pe.parameters={...pe.parameters,docs:{...(Za=pe.parameters)==null?void 0:Za.docs,source:{originalSource:`{
  name: 'Format: ISO (yyyy-MM-dd)',
  args: {
    label: 'Date',
    format: 'yyyy-MM-dd'
  }
}`,...(Qa=(Ja=pe.parameters)==null?void 0:Ja.docs)==null?void 0:Qa.source}}};var Xa,et,at;fe.parameters={...fe.parameters,docs:{...(Xa=fe.parameters)==null?void 0:Xa.docs,source:{originalSource:`{
  name: 'Format: Long',
  args: {
    label: 'Date',
    format: 'dddd, MMMM d, yyyy'
  }
}`,...(at=(et=fe.parameters)==null?void 0:et.docs)==null?void 0:at.source}}};var tt,rt,nt;ge.parameters={...ge.parameters,docs:{...(tt=ge.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  name: 'Locale: de-DE',
  args: {
    label: 'Datum',
    locale: 'de-DE'
  }
}`,...(nt=(rt=ge.parameters)==null?void 0:rt.docs)==null?void 0:nt.source}}};var st,lt,ot;ye.parameters={...ye.parameters,docs:{...(st=ye.parameters)==null?void 0:st.docs,source:{originalSource:`{
  name: 'Week Start: Monday',
  args: {
    label: 'Date',
    weekStart: 1
  }
}`,...(ot=(lt=ye.parameters)==null?void 0:lt.docs)==null?void 0:ot.source}}};var it,ct,ut;ve.parameters={...ve.parameters,docs:{...(it=ve.parameters)==null?void 0:it.docs,source:{originalSource:`{
  args: {
    label: 'Date',
    isDisabled: true
  }
}`,...(ut=(ct=ve.parameters)==null?void 0:ct.docs)==null?void 0:ut.source}}};var dt,mt,pt;be.parameters={...be.parameters,docs:{...(dt=be.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  args: {
    label: 'Date',
    isReadOnly: true,
    defaultValue: new Date(2026, 5, 1)
  }
}`,...(pt=(mt=be.parameters)==null?void 0:mt.docs)==null?void 0:pt.source}}};var ft,gt,yt;he.parameters={...he.parameters,docs:{...(ft=he.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  args: {
    label: 'Date',
    isRequired: true
  }
}`,...(yt=(gt=he.parameters)==null?void 0:gt.docs)==null?void 0:yt.source}}};var vt,bt,ht;De.parameters={...De.parameters,docs:{...(vt=De.parameters)==null?void 0:vt.docs,source:{originalSource:`{
  args: {
    label: 'Date',
    isInvalid: true,
    errorMsg: 'Please pick a date'
  }
}`,...(ht=(bt=De.parameters)==null?void 0:bt.docs)==null?void 0:ht.source}}};var Dt,St,wt;Se.parameters={...Se.parameters,docs:{...(Dt=Se.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
  name: 'Invalid (tooltip)',
  args: {
    label: 'Date',
    size: 'sm',
    isInvalid: true,
    errorMsg: 'Please pick a date',
    errorDisplay: 'tooltip'
  }
}`,...(wt=(St=Se.parameters)==null?void 0:St.docs)==null?void 0:wt.source}}};var kt,xt,Ct;we.parameters={...we.parameters,docs:{...(kt=we.parameters)==null?void 0:kt.docs,source:{originalSource:`{
  args: {
    label: 'Date',
    isLoading: true
  }
}`,...(Ct=(xt=we.parameters)==null?void 0:xt.docs)==null?void 0:Ct.source}}};var At,Mt,Pt;ke.parameters={...ke.parameters,docs:{...(At=ke.parameters)==null?void 0:At.docs,source:{originalSource:`{
  name: 'With Value (free-text)',
  args: {
    label: 'Date',
    value: new Date(2026, 5, 1),
    isSegmented: false
  }
}`,...(Pt=(Mt=ke.parameters)==null?void 0:Mt.docs)==null?void 0:Pt.source}}};var Et,Vt,Tt;xe.parameters={...xe.parameters,docs:{...(Et=xe.parameters)==null?void 0:Et.docs,source:{originalSource:`{
  name: 'With Value (isSegmented)',
  args: {
    label: 'Date',
    value: new Date(2026, 5, 1)
  }
}`,...(Tt=(Vt=xe.parameters)==null?void 0:Vt.docs)==null?void 0:Tt.source}}};var Rt,Ft,Lt;Ce.parameters={...Ce.parameters,docs:{...(Rt=Ce.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
  name: 'Min / Max Range',
  args: {
    label: 'Date',
    minDate: new Date(2026, 5, 1),
    maxDate: new Date(2026, 5, 30),
    defaultValue: new Date(2026, 5, 15)
  }
}`,...(Lt=(Ft=Ce.parameters)==null?void 0:Ft.docs)==null?void 0:Lt.source}}};var It,qt,Ot;Ae.parameters={...Ae.parameters,docs:{...(It=Ae.parameters)==null?void 0:It.docs,source:{originalSource:`{
  name: 'Free-text Input',
  args: {
    label: 'Date',
    isSegmented: false
  }
}`,...(Ot=(qt=Ae.parameters)==null?void 0:qt.docs)==null?void 0:Ot.source}}};var jt,Wt,_t;Me.parameters={...Me.parameters,docs:{...(jt=Me.parameters)==null?void 0:jt.docs,source:{originalSource:`{
  name: 'Placement: top-start',
  args: {
    label: 'Date',
    placement: 'top-start'
  }
}`,...(_t=(Wt=Me.parameters)==null?void 0:Wt.docs)==null?void 0:_t.source}}};var zt,Nt,Bt;Pe.parameters={...Pe.parameters,docs:{...(zt=Pe.parameters)==null?void 0:zt.docs,source:{originalSource:`{
  name: 'Placement: bottom-end',
  args: {
    label: 'Date',
    placement: 'bottom-end'
  }
}`,...(Bt=(Nt=Pe.parameters)==null?void 0:Nt.docs)==null?void 0:Bt.source}}};var Kt,Yt,Ht;Ee.parameters={...Ee.parameters,docs:{...(Kt=Ee.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
  name: 'Scoped Calendar Config (calendarProps)',
  args: {
    label: 'Date',
    calendarProps: {
      hasOutsideDays: true,
      isKeyboardEnabled: true,
      size: 'sm'
    }
  }
}`,...(Ht=(Yt=Ee.parameters)==null?void 0:Yt.docs)==null?void 0:Ht.source}}};var $t,Ut,Gt;Ve.parameters={...Ve.parameters,docs:{...($t=Ve.parameters)==null?void 0:$t.docs,source:{originalSource:`{
  name: 'Scoped Popover Config (popoverProps)',
  args: {
    label: 'Date',
    popoverProps: {
      width: '360px',
      offset: 12
    }
  }
}`,...(Gt=(Ut=Ve.parameters)==null?void 0:Ut.docs)==null?void 0:Gt.source}}};var Zt,Jt,Qt;Te.parameters={...Te.parameters,docs:{...(Zt=Te.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
  name: 'All Sizes',
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    maxWidth: 360
  }}>\r
      <ArvoDatePicker label="Small (sm)" size="sm" />\r
      <ArvoDatePicker label="Large (lg)" size="lg" />\r
    </div>
}`,...(Qt=(Jt=Te.parameters)==null?void 0:Jt.docs)==null?void 0:Qt.source}}};var Xt,er,ar;Re.parameters={...Re.parameters,docs:{...(Xt=Re.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
  name: 'All States',
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 16,
    maxWidth: 720
  }}>\r
      <ArvoDatePicker label="Default" />\r
      <ArvoDatePicker label="Disabled" isDisabled />\r
      <ArvoDatePicker label="Read Only" isReadOnly defaultValue={new Date(2026, 5, 1)} />\r
      <ArvoDatePicker label="Invalid" isInvalid errorMsg="Please pick a date" />\r
      <ArvoDatePicker label="Loading" isLoading />\r
    </div>
}`,...(ar=(er=Re.parameters)==null?void 0:er.docs)==null?void 0:ar.source}}};var tr,rr,nr;Fe.parameters={...Fe.parameters,docs:{...(tr=Fe.parameters)==null?void 0:tr.docs,source:{originalSource:`{
  name: 'Controlled Value',
  args: {},
  render: () => {
    const [date, setDate] = useState<Date | null>(null);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      maxWidth: 360
    }}>\r
        <ArvoDatePicker label="Date" value={date} onChange={payload => setDate(payload.value)} />\r
        <span>\r
          Selected:{' '}\r
          {date ? date.toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }) : 'none'}\r
        </span>\r
      </div>;
  }
}`,...(nr=(rr=Fe.parameters)==null?void 0:rr.docs)==null?void 0:nr.source}}};var sr,lr,or;Le.parameters={...Le.parameters,docs:{...(sr=Le.parameters)==null?void 0:sr.docs,source:{originalSource:`{
  name: 'Recipe: Booking Date',
  args: {},
  render: () => {
    const [checkIn, setCheckIn] = useState<Date | null>(null);
    const [checkOut, setCheckOut] = useState<Date | null>(null);
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 16
    }}>\r
        <ArvoDatePicker label="Check-in" value={checkIn} maxDate={checkOut ?? undefined} onChange={payload => {
        const next = payload.value;
        setCheckIn(next);
        if (checkOut && next && checkOut <= next) setCheckOut(null);
      }} />\r
        <ArvoDatePicker label="Check-out" value={checkOut} minDate={checkIn ?? undefined} onChange={payload => setCheckOut(payload.value)} />\r
      </div>;
  }
}`,...(or=(lr=Le.parameters)==null?void 0:lr.docs)==null?void 0:or.source}}};var ir,cr,ur;Ie.parameters={...Ie.parameters,docs:{...(ir=Ie.parameters)==null?void 0:ir.docs,source:{originalSource:`{
  name: 'Recipe: Birthday Field',
  args: {},
  render: () => <ArvoDatePicker label="Date of birth" format="MM/dd/yyyy" maxDate={new Date()} weekStart={1} placeholder="MM/DD/YYYY" />
}`,...(ur=(cr=Ie.parameters)==null?void 0:cr.docs)==null?void 0:ur.source}}};var dr,mr,pr;qe.parameters={...qe.parameters,docs:{...(dr=qe.parameters)==null?void 0:dr.docs,source:{originalSource:`{
  name: 'Recipe: Anchor Mode',
  args: {},
  render: () => {
    const [selected, setSelected] = useState<Date | null>(null);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'flex-start'
    }}>\r
        <ArvoButton id="dp-anchor-demo-btn" label="Pick a date" icon="calendar" />\r
        <ArvoDatePicker anchor="#dp-anchor-demo-btn" onChange={payload => setSelected(payload.value)} />\r
        <span>\r
          Selected:{' '}\r
          {selected ? selected.toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        }) : 'none'}\r
        </span>\r
      </div>;
  }
}`,...(pr=(mr=qe.parameters)==null?void 0:mr.docs)==null?void 0:pr.source}}};const dn=["Default","Playground","SizeSm","SizeLg","FullWidth","WidthCustom","ShowWeeksColumn","FormatIso","FormatLong","LocaleGerman","WeekStartMonday","Disabled","ReadOnly","Required","Invalid","InvalidTooltip","Loading","WithValue","WithValueSegmented","MinMaxRange","FreeText","PlacementTopStart","PlacementBottomEnd","ScopedCalendarConfig","ScopedPopoverConfig","AllSizes","AllStates","ControlledValue","RecipeBookingDate","RecipeBirthdayField","RecipeAnchorMode"],En=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:Te,AllStates:Re,ControlledValue:Fe,Default:le,Disabled:ve,FormatIso:pe,FormatLong:fe,FreeText:Ae,FullWidth:ue,Invalid:De,InvalidTooltip:Se,Loading:we,LocaleGerman:ge,MinMaxRange:Ce,PlacementBottomEnd:Pe,PlacementTopStart:Me,Playground:oe,ReadOnly:be,RecipeAnchorMode:qe,RecipeBirthdayField:Ie,RecipeBookingDate:Le,Required:he,ScopedCalendarConfig:Ee,ScopedPopoverConfig:Ve,ShowWeeksColumn:me,SizeLg:ce,SizeSm:ie,WeekStartMonday:ye,WidthCustom:de,WithValue:ke,WithValueSegmented:xe,__namedExportsOrder:dn,default:un},Symbol.toStringTag,{value:"Module"}));export{Te as A,Fe as C,En as D,pe as F,ge as L,Ce as M,oe as P,Le as R,me as S,ye as W,Re as a,fe as b,Ie as c,qe as d};
