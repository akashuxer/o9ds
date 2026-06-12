import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as n,b as Dn,l as Tn,n as Bt,q as wn,u as et,m as xn,v as pt,a as Sn,w as kn}from"./iframe-BaOp0t6F.js";import{r as Cn}from"./index-BbVYX0ZH.js";import{u as An,c as Mn}from"./useOverlay-Bo9f1g6f.js";import{a as Ht,A as Pn,i as Rr}from"./Calendar-kkFVIcSH.js";import{u as En}from"./useArvoLocale-z-KisV4q.js";import{u as Rn}from"./useFocusTrap-BePVbEUc.js";import{r as Vn}from"./loading-flag-DkqmYwgU.js";import{A as Kt}from"./IconButton-BgwDUYzG.js";import{a as Ln}from"./FormLabel-Dn-HbpfA.js";import{A as Yt}from"./MessageAlert-DBQwY950.js";import{A as Fn}from"./TimeDropdown-DX9WbY98.js";import{C as qn}from"./CalendarNav-C-WBh-a1.js";import{A as ft}from"./Button-B8O_kk1m.js";const In={hours:0,minutes:0,seconds:0,milliseconds:0};function fe(t,s,d){return t==null?null:t instanceof Date?Number.isNaN(t.getTime())?null:t:typeof t=="string"?t.length===0?null:pt(t,s,d):null}function jn(t){const s=Math.trunc(t.hours),d=Math.trunc(t.minutes),x=t.seconds==null?0:Math.trunc(t.seconds),M=t.milliseconds==null?0:Math.trunc(t.milliseconds);return s<0||s>23||d<0||d>59||x<0||x>59||M<0||M>999?null:{hours:s,minutes:d,seconds:x,milliseconds:M}}function $t(t,s){return t==null?null:typeof t=="string"?t.length===0?null:kn(t,s):jn(t)}function mt(t,s){return t==null&&s==null?!0:t==null||s==null?!1:t.getTime()===s.getTime()}function Ke(t){return!t||Number.isNaN(t.getTime())?null:{hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds(),milliseconds:t.getMilliseconds()}}function tt(t,s){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),s.hours,s.minutes,s.seconds??0,s.milliseconds??0)}function Ut(t){return t?new Date(t.getFullYear(),t.getMonth(),t.getDate()):null}function B(t){return((t.hours*60+t.minutes)*60+(t.seconds??0))*1e3+(t.milliseconds??0)}function _n(t,s){return t?s?B(t)>=B(s)?t:s:t:s}function On(t,s){return t?s?B(t)<=B(s)?t:s:t:s}function Vr(t,s,d){const M=t&&s&&Rr(t,s)?Ke(s):null;return _n(M,d)}function Lr(t,s,d){const M=t&&s&&Rr(t,s)?Ke(s):null;return On(M,d)}function ee(t,s,d,x,M){if(!t)return null;let y=new Date(t.getTime());s&&y.getTime()<s.getTime()&&(y=new Date(s.getTime())),d&&y.getTime()>d.getTime()&&(y=new Date(d.getTime()));const H=Vr(y,s,x),K=Lr(y,d,M),Y=Ke(y);return H&&Y&&B(Y)<B(H)&&(y=tt(y,H)),K&&Y&&B(Y)>B(K)&&(y=tt(y,K)),s&&y.getTime()<s.getTime()&&(y=new Date(s.getTime())),d&&y.getTime()>d.getTime()&&(y=new Date(d.getTime())),y}function zn(t){return t===!1||t==null||t===!0?null:typeof t=="string"?typeof document>"u"?null:document.querySelector(t):t instanceof HTMLElement?t:t.current??null}const S=n.forwardRef(function({value:s,defaultValue:d,format:x,locale:M,weekStart:y=0,hasWeeks:H=!1,interval:K=15,min:Y,max:gt,startTime:yt,endTime:vt,placeholder:Fr,label:at,size:bt="lg",width:qr,isFullWidth:rt=!1,isDisabled:Ir=!1,isReadOnly:E=!1,isRequired:ht=!1,isInvalid:Dt=!1,errorMsg:jr,errorDisplay:nt="inline",isLoading:Bn=!1,isClearable:_r=!1,isAutoClose:$=!1,isStrictParsing:Hn=!1,isSegmented:g=!0,anchor:le=!1,placement:Tt="bottom-end",zIndex:wt,calendarProps:Or,popoverProps:L,onChange:oe,onOpen:Ye,onClose:$e,onBlur:Ue,className:zr,id:Wr,style:Nr,...xt},Br){const Hr=n.useId(),j=Wr??`arvo-dtp-${Hr}`,St=`${j}-input`,kt=`${j}-lbl`,Ct=`${j}-err`,ie=`${j}-popover`,At=En(),u=n.useMemo(()=>Dn(M??At),[M,At]),m=n.useMemo(()=>x&&x.length>0?x:`${Tn(u)} ${Bt(u)}`,[x,u]),ue=n.useMemo(()=>{const e=wn(m);return e.timePart&&e.timePart.length>0?e.timePart:Bt(u)},[m,u]),v=n.useMemo(()=>fe(Y,m,u),[Y,m,u]),b=n.useMemo(()=>fe(gt,m,u),[gt,m,u]),k=n.useMemo(()=>$t(yt,ue),[yt,ue]),P=n.useMemo(()=>$t(vt,ue),[vt,ue]),Mt=n.useMemo(()=>Ut(v),[v]),Pt=n.useMemo(()=>Ut(b),[b]),U=s!==void 0,[_,st]=n.useState(()=>ee(fe(s??d??null,m,u),v,b,k,P)),[i,Et]=n.useState(!1),Rt=n.useMemo(()=>{const e=_??new Date;return{year:e.getFullYear(),month:e.getMonth()}},[]),[O,R]=n.useState(Rt.year),[z,G]=n.useState(Rt.month),[C,te]=n.useState("days"),[Kr,Yr]=n.useState(null),[Kn,$r]=n.useState(null),[Ur,Vt]=n.useState(!1),[Gr,Z]=n.useState(null),[ae,re]=n.useState(()=>_?et(_,m,u):""),[Zr,Jr]=n.useState(0),J=n.useRef(null),ce=n.useRef(null),de=n.useRef(null),Ge=n.useRef(null),W=n.useRef(null),Lt=n.useRef(null),D=n.useRef(null),N=n.useRef(null),Ze=n.useRef(null),me=n.useRef(!1),f=n.useRef(_);n.useEffect(()=>{f.current=_},[_]);const lt=n.useRef(!1),ot=n.useRef(!1),T=Ir,F=Vn(),pe=Kr??(Dt?jr??null:null),ne=pe!=null,Ft=_!=null,Q=Gr??_,qt=Q??new Date(O,z,1),Qr=Ke(Q),Xr=Vr(qt,v,k),en=Lr(qt,b,P),tn=le!==!1&&le!=null,It=le===!0,jt=n.useRef(!1);It&&!jt.current&&(console.warn("[ArvoDateTimePicker] anchor={true} requires a host element in React; falling back to input mode."),jt.current=!0);const X=tn&&!It,h=n.useCallback(()=>{const e=D.current;if(g&&e){re(e.getFormattedDisplay(me.current));return}re(f.current?et(f.current,m,u):"")},[g,m,u]),A=n.useCallback(e=>{var l;const r=ee(e,v,b,k,P);if(Z(null),mt(r,f.current))return!1;U||st(r),f.current=r;const a=r?et(r,m,u):"";return oe==null||oe({value:r,formattedValue:a}),(l=J.current)==null||l.dispatchEvent(new CustomEvent("dtp:change",{bubbles:!0,detail:{value:r,formattedValue:a}})),!0},[U,v,b,k,P,oe,m,u]);n.useEffect(()=>{var p;if(!g){(p=D.current)==null||p.destroy(),D.current=null,h();return}const e=xn({format:m,locale:u,value:f.current,min:v,max:b,commit:"blur",minuteInterval:K});D.current=e;const r=e.on("commit",w=>{const q=w.date;Z(null),A(q),h()}),a=e.on("segment",()=>{Vt(e.getFocusedSegment()!=null),Jr(w=>w+1)}),l=e.on("change",()=>{const w=e.getValue().date;Z(w?ee(w,v,b,k,P):null),h()});return h(),()=>{r(),a(),l(),e.destroy(),D.current=null}},[g,m,u,v==null?void 0:v.getTime(),b==null?void 0:b.getTime(),K]),n.useEffect(()=>{var r;if(!U)return;const e=ee(fe(s,m,u),v,b,k,P);st(e),f.current=e,Z(null),(r=D.current)==null||r.setValue(e,{silent:!0}),h()},[s,m,u,U]),n.useEffect(()=>{const e=Q;e&&(e.getFullYear()===O&&e.getMonth()===z||(R(e.getFullYear()),G(e.getMonth())))},[Q==null?void 0:Q.getTime()]);const V=n.useCallback(()=>{var a;if(i||T||F||E||(Ye==null?void 0:Ye())===!1)return;const e=new CustomEvent("dtp:open",{bubbles:!0,cancelable:!0});if((a=J.current)==null||a.dispatchEvent(e),e.defaultPrevented)return;const r=f.current??new Date;R(r.getFullYear()),G(r.getMonth()),te("days"),lt.current=!1,ot.current=!1,Et(!0),requestAnimationFrame(()=>{var l;(l=Lt.current)==null||l.focusCell(f.current??new Date)})},[i,T,F,E,Ye]),c=n.useCallback(()=>{var r;if(!i||($e==null?void 0:$e())===!1)return;const e=new CustomEvent("dtp:close",{bubbles:!0,cancelable:!0});(r=J.current)==null||r.dispatchEvent(e),!e.defaultPrevented&&(Et(!1),requestAnimationFrame(()=>{const a=N.current??de.current;a==null||a.focus({preventScroll:!0})}))},[i,$e]);n.useEffect(()=>{},[F,i,c]);const an=n.useCallback(()=>{T||E||(i?c():V())},[F,T,E,i,V,c]),Je=n.useCallback(()=>{var r;(r=D.current)==null||r.setValue(null,{silent:!0}),(A(null)||f.current==null)&&h()},[A,h]),rn=n.useCallback(e=>{e.stopPropagation(),Je()},[Je]),nn=n.useCallback(e=>{re(e.target.value)},[]),it=n.useRef(null),sn=n.useCallback(()=>{const e=de.current;e&&requestAnimationFrame(()=>{if(document.activeElement!==e)return;it.current=e.selectionStart??null;const r=D.current;if(!r||!g)return;const a=it.current;if(it.current=null,a===null)return;const l=r.findSegmentForOffset(a);l!==null&&r.focusSegment(l)})},[g]),ln=n.useCallback(()=>{me.current=!0,Ze.current=f.current;const e=D.current;g&&e&&(re(e.getFormattedDisplay(!0)),e.focusSegment(0))},[g]),on=n.useCallback(()=>{me.current=!1;const e=D.current;if(g&&e)re(e.getFormattedDisplay(!1)),Z(null);else if(!g){const r=pt(ae,m,u);r&&A(r),h()}Vt(!1),Ue==null||Ue()},[g,ae,m,u,A,h,Ue]),un=n.useCallback(e=>{if(e.altKey&&e.key==="ArrowDown"){e.preventDefault(),i||V();return}if(e.altKey&&e.key==="ArrowUp"){e.preventDefault(),i&&c();return}if(g){const r=D.current;if(!r)return;const a=e.key;if(a==="Escape"){e.preventDefault(),r.handleKey({key:"Escape"}),me.current?(re(r.getFormattedDisplay(!0)),r.focusSegment(0)):h(),Z(null),i&&c();return}if(a==="Tab"){r.handleKey({key:"Tab",shiftKey:e.shiftKey}).consumed&&e.preventDefault();return}if(a==="Enter"){e.preventDefault();const l=f.current;r.handleKey({key:"Enter"});const p=!mt(l,f.current);i&&$&&p&&c();return}if(a==="ArrowLeft"||a==="ArrowRight"||a==="ArrowUp"||a==="ArrowDown"||a==="Home"||a==="End"||a==="Backspace"||a==="Delete"){r.handleKey({key:a}).consumed&&e.preventDefault();return}if(a.length===1&&!e.ctrlKey&&!e.metaKey){if(/^[0-9]$/.test(a)){r.handleDigit(a).consumed&&e.preventDefault();return}if(/^[A-Za-z]$/.test(a)){r.handleLetter(a).consumed&&e.preventDefault();return}}return}if(e.key==="Enter"){e.preventDefault();const r=pt(ae,m,u);if(r){const a=f.current,l=A(r);i&&$&&l&&!mt(a,f.current)&&c()}return}e.key==="Escape"&&(e.preventDefault(),Ze.current!==f.current&&(U||st(Ze.current),f.current=Ze.current),h(),i&&c())},[g,i,$,V,c,ae,m,u,A,h,U]),cn=n.useCallback(e=>{const r=D.current;if(!g||!r)return;const a=e.clipboardData.getData("text");r.handlePaste(a).consumed&&e.preventDefault()},[g]),dn=n.useCallback(e=>{var l;const{date:r,mode:a}=e;if(r){if(a==="days"){const p=Ke(f.current)??k??In,w=tt(r,p),q=ee(w,v,b,k,P);q&&((l=D.current)==null||l.setValue(q,{silent:!0}),A(q),h()),lt.current=!0,$&&ot.current&&c();return}R(r.getFullYear()),G(r.getMonth()),a==="months"?te("days"):a==="years"&&te("months")}},[v,b,k,P,A,h,$,c]),mn=n.useCallback(e=>{var p;const r=f.current??new Date,a=tt(r,e),l=ee(a,v,b,k,P);l&&((p=D.current)==null||p.setValue(l,{silent:!0}),A(l),h()),ot.current=!0,$&&lt.current&&c()},[v,b,k,P,A,h,$,c]),pn=n.useCallback(()=>{if(C==="days"){const e=Ht(new Date(O,z,1),-1);R(e.getFullYear()),G(e.getMonth())}else R(C==="months"?e=>e-1:e=>e-10)},[C,O,z]),fn=n.useCallback(()=>{if(C==="days"){const e=Ht(new Date(O,z,1),1);R(e.getFullYear()),G(e.getMonth())}else R(C==="months"?e=>e+1:e=>e+10)},[C,O,z]),gn=n.useCallback(()=>{const e=new Date;R(e.getFullYear()),G(e.getMonth())},[]);n.useLayoutEffect(()=>{if(!X){N.current=null;return}const e=zn(le);if(N.current=e,!e)return;const r=()=>{T||F||E||(i?c():V())},a=l=>{l.altKey&&l.key==="ArrowDown"?(l.preventDefault(),i||V()):l.altKey&&l.key==="ArrowUp"?(l.preventDefault(),i&&c()):l.key==="Escape"?i&&(l.preventDefault(),c()):(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),r())};return e.setAttribute("aria-haspopup","dialog"),e.setAttribute("aria-expanded",i?"true":"false"),e.setAttribute("aria-controls",ie),e.addEventListener("click",r),e.addEventListener("keydown",a),()=>{e.removeEventListener("click",r),e.removeEventListener("keydown",a),e.removeAttribute("aria-haspopup"),e.removeAttribute("aria-expanded"),e.removeAttribute("aria-controls")}},[X,le,i,T,F,E,V,c,ie]);const yn=n.useCallback(()=>{const e=W.current;if(!e)return[];const r=e.querySelector('.arvo-cal__cell[tabindex="0"]'),a=e.querySelector('.arvo-tdrop__opt[tabindex="0"]'),l=e.querySelector(".arvo-cal-nav__prev"),p=e.querySelector(".arvo-cal-nav__month-btn"),w=e.querySelector(".arvo-cal-nav__year-btn"),q=e.querySelector(".arvo-cal-nav__next"),I=e.querySelector(".arvo-cal-nav__today");return[r,a,l,p,w,q,I]},[]);Rn(W,{active:i,initialFocus:"none",returnFocusOnDeactivate:!1,escapeDeactivates:!1,allowOutsideClick:!0,getOrderedElements:yn});const se=An();n.useEffect(()=>{if(!i||!W.current)return;const e=(X?N.current:ce.current)??void 0;return se.open({id:j,type:"dropdown",element:W.current,triggerElement:e,priority:20,config:{autoCloseOnOutsideClick:!0},onClose:c}),()=>{se.close(j)}},[i]);const Qe=n.useRef(null),Xe=n.useRef(null),[,vn]=n.useState(0);n.useLayoutEffect(()=>{var q;if(!i){Qe.current=null,(q=Xe.current)==null||q.destroy(),Xe.current=null;return}const e=(X?N.current:ce.current)??null,r=W.current;if(!e||!r)return;const a={placement:Tt,gap:(L==null?void 0:L.offset)??4,width:"auto"},l=I=>{r.style.transform=`translate(${I.x}px, ${I.y}px)`},p=Sn(e,r,a);Qe.current=p,l(p),r.style.visibility="",vn(I=>I+1);const w=Mn(e,r,a,I=>{Qe.current=I,l(I)});return Xe.current=w,()=>{w.destroy(),Xe.current=null}},[i,Tt,X,L==null?void 0:L.offset]),n.useEffect(()=>{if(!i)return;const e=r=>{var l,p;const a=r.target;se.isOverlayClickInside(W.current,a)||(l=J.current)!=null&&l.contains(a)||(p=N.current)!=null&&p.contains(a)||c()};return document.addEventListener("pointerdown",e,!0),()=>{document.removeEventListener("pointerdown",e,!0)}},[i,c,se]),n.useEffect(()=>{if(!i)return;const e=r=>{var l,p;const a=r.target;(l=J.current)!=null&&l.contains(a)||se.isOverlayClickInside(W.current,a)||(p=N.current)!=null&&p.contains(a)||c()};return document.addEventListener("focusin",e),()=>document.removeEventListener("focusin",e)},[i,c,se]),n.useLayoutEffect(()=>{if(!g||!me.current)return;const e=D.current,r=de.current;if(!e||!r)return;const a=e.getFocusedSegment();if(a)try{r.setSelectionRange(a.startOffset,a.endOffset)}catch{}},[Zr,ae,g]);const ut=n.useCallback(()=>{if(!Ge.current||!ce.current)return;const e=Ge.current.offsetWidth,r=e>0?e+4:0;ce.current.style.setProperty("--arvo-form-input-pad-r",`${r}px`)},[]);n.useEffect(()=>{ut()}),n.useEffect(()=>{const e=Ge.current;if(!e)return;const r=new ResizeObserver(ut);return r.observe(e),()=>r.disconnect()},[ut]),n.useImperativeHandle(Br,()=>{const e=Symbol("NO_ARG");return{open:()=>V(),close:()=>c(),toggle:a=>{a===void 0?i?c():V():a?V():c()},value:((a=e)=>{var w;if(a===e)return f.current;const l=fe(a,m,u),p=ee(l,v,b,k,P);(w=D.current)==null||w.setValue(p,{silent:!0}),A(p),h()}),formattedValue:()=>f.current?et(f.current,m,u):"",clear:()=>Je(),disabled:((a=e)=>{if(a===e)return T;console.warn("[ArvoDateTimePicker] disabled() setter is a noop in React; pass isDisabled prop.")}),setError:a=>{Yr(a===!1?null:a)},setLoading:a=>{$r(a),a&&c()},focus:()=>{var a;(a=N.current??de.current)==null||a.focus()},destroy:()=>{}}},[T,m,u,V,c,i,U,v,b,k,P,oe,h,A,Je]);const _t=["arvo-dtp",`arvo-dtp--${bt}`,rt&&"arvo-dtp--full-width",H&&"arvo-dtp--show-weeks",X&&"arvo-dtp--anchor-mode",T&&"is-disabled",E&&"is-readonly",ne&&"has-error",ne&&nt==="tooltip"&&"error-tooltip",Ft&&"has-value",Ur&&"has-text-selected",i&&"open",F,zr].filter(Boolean).join(" "),Ot=rt?"100%":qr??void 0,zt={...Nr,...Ot?{"--arvo-form-input-width":Ot}:{}},ct=Qe.current,bn={position:"fixed",top:0,left:0,margin:0,...L!=null&&L.width?{width:L.width}:{},...ct?{transform:`translate(${ct.x}px, ${ct.y}px)`}:{visibility:"hidden"},...wt!=null?{zIndex:wt}:{}},Wt=ne&&nt==="inline"&&pe!=null,dt=ne&&nt==="tooltip"&&pe!=null,hn=["arvo-dtp",`arvo-dtp--${bt}`,rt&&"arvo-dtp--full-width",H&&"arvo-dtp--show-weeks","open",F].filter(Boolean).join(" "),Nt=i?Cn.createPortal(o.jsx("div",{className:hn,style:{display:"contents"},children:o.jsxs("div",{ref:W,id:ie,className:"arvo-dtp__popover open",role:"dialog","aria-label":"Choose a date and time","aria-modal":!1,style:bn,children:[o.jsxs("div",{className:"arvo-dtp__cal",children:[o.jsx("div",{className:"arvo-dtp__header",children:o.jsx(qn,{visibleYear:O,visibleMonth:z,viewMode:C==="days"||C==="months"||C==="years"?C:"days",locale:u,minDate:Mt,maxDate:Pt,isDisabled:T,onPrev:pn,onNext:fn,onToday:gn,onMonthButtonClick:()=>te(C==="months"?"days":"months"),onYearButtonClick:()=>te(C==="years"?"days":"years")})}),o.jsx("div",{className:"arvo-dtp__cal-grid",children:o.jsx(Pn,{...Or,ref:Lt,visibleYear:O,visibleMonth:z,viewMode:C,locale:u,weekStart:y,hasWeeks:H,selectedDate:Q,minDate:Mt,maxDate:Pt,onCellSelect:dn,onMonthChange:e=>{R(e.year),G(e.month)},onViewModeChange:e=>te(e.mode),onDismiss:c})})]}),o.jsx("div",{className:"arvo-dtp__time",children:o.jsx(Fn,{value:Qr,format:ue,locale:u,interval:K,minTime:Xr,maxTime:en,isDisabled:T||E||F,onChange:mn,onDismiss:c})})]})}),document.body):null;return X?o.jsx("div",{...xt,ref:J,id:j,className:_t,style:zt,children:Nt}):o.jsxs("div",{...xt,ref:J,id:j,className:_t,style:zt,children:[at&&o.jsx(Ln,{htmlFor:St,id:kt,isRequired:ht,isDisabled:T,isInvalid:ne,className:"arvo-dtp__lbl",children:at}),o.jsxs("div",{ref:ce,className:"arvo-dtp__field",children:[o.jsx("input",{ref:de,id:St,type:"text",className:"arvo-dtp__input",role:"combobox",value:ae,placeholder:Fr??void 0,disabled:T,readOnly:E||g,autoComplete:"off","aria-haspopup":"dialog","aria-expanded":i,"aria-controls":ie,"aria-required":ht||void 0,"aria-invalid":Dt||ne||void 0,"aria-disabled":T||void 0,"aria-busy":void 0,"aria-labelledby":at?kt:void 0,"aria-describedby":Wt?Ct:void 0,onKeyDown:un,onFocus:ln,onBlur:on,onMouseDown:g?sn:void 0,onPaste:g?cn:void 0,onChange:g?void 0:nn}),(()=>{const e=_r&&Ft&&!T&&!E&&!F&&!dt,r=e||dt;return o.jsxs("div",{ref:Ge,className:"arvo-dtp__actions",children:[e&&o.jsx(Kt,{size:"sm",variant:"tertiary",icon:"close",tooltip:"Clear",tabIndex:-1,onClick:rn,className:"arvo-dtp__clear-btn"}),dt&&o.jsx(Yt,{type:"negative",isInline:!0,message:pe??"",className:"arvo-dtp__err-ico"}),r&&o.jsx("span",{className:"arvo-dtp__sep","aria-hidden":"true"}),o.jsx(Kt,{size:"sm",variant:"tertiary",icon:"calendar-o",tooltip:"Select date and time",isDisabled:T||E,isSelected:i,onClick:an,className:"arvo-dtp__trigger-btn","aria-haspopup":"dialog","aria-expanded":i,"aria-controls":ie})]})})(),o.jsx("div",{className:"arvo-dtp__border"})]}),Wt&&o.jsx(Yt,{type:"negative",id:Ct,message:pe,className:"arvo-dtp__err-msg"}),Nt]})});S.displayName="ArvoDateTimePicker";S.__docgenInfo={description:"",methods:[{name:"open",docblock:null,modifiers:[],params:[],returns:null},{name:"close",docblock:null,modifiers:[],params:[],returns:null},{name:"toggle",docblock:null,modifiers:[],params:[{name:"force",optional:!0,type:{name:"boolean"}}],returns:null},{name:"value",docblock:null,modifiers:[],params:[{name:"v",optional:!0,type:null}],returns:null},{name:"formattedValue",docblock:null,modifiers:[],params:[],returns:null},{name:"clear",docblock:null,modifiers:[],params:[],returns:null},{name:"disabled",docblock:null,modifiers:[],params:[{name:"state",optional:!0,type:null}],returns:null},{name:"setError",docblock:null,modifiers:[],params:[{name:"message",optional:!1,type:{name:"union",raw:"string | false",elements:[{name:"string"},{name:"literal",value:"false"}]}}],returns:null},{name:"setLoading",docblock:null,modifiers:[],params:[{name:"loading",optional:!1,type:{name:"boolean"}}],returns:null},{name:"focus",docblock:null,modifiers:[],params:[],returns:null},{name:"destroy",docblock:null,modifiers:[],params:[],returns:null}],displayName:"ArvoDateTimePicker",props:{value:{required:!1,tsType:{name:"union",raw:"Date | string | null",elements:[{name:"Date"},{name:"string"},{name:"null"}]},description:"Current datetime value. Parsed via parseDateTime(value, format, locale)."},defaultValue:{required:!1,tsType:{name:"union",raw:"Date | string | null",elements:[{name:"Date"},{name:"string"},{name:"null"}]},description:"Initial value for uncontrolled mode."},format:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:".NET / Kendo combined date+time format. Empty resolves to locale default."},locale:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"BCP-47 locale."},weekStart:{required:!1,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:"First day of week. 0=Sunday, 1=Monday, ... 6=Saturday.",defaultValue:{value:"0",computed:!1}},hasWeeks:{required:!1,tsType:{name:"boolean"},description:"Show weeks column in the calendar. Adds arvo-dtp--show-weeks modifier.",defaultValue:{value:"false",computed:!1}},interval:{required:!1,tsType:{name:"number"},description:"TimeDropdown interval in minutes. Default 15.",defaultValue:{value:"15",computed:!1}},min:{required:!1,tsType:{name:"union",raw:"Date | string | null",elements:[{name:"Date"},{name:"string"},{name:"null"}]},description:`Full datetime min (inclusive). The time portion is enforced ONLY on the
boundary date; other dates accept any time.`},max:{required:!1,tsType:{name:"union",raw:"Date | string | null",elements:[{name:"Date"},{name:"string"},{name:"null"}]},description:"Full datetime max (inclusive). Same boundary semantics as `min`."},startTime:{required:!1,tsType:{name:"union",raw:"TimeObject | string | null",elements:[{name:"TimeObject"},{name:"string"},{name:"null"}]},description:"Time-only floor applied across ALL dates (e.g. business hours start)."},endTime:{required:!1,tsType:{name:"union",raw:"TimeObject | string | null",elements:[{name:"TimeObject"},{name:"string"},{name:"null"}]},description:"Time-only ceiling applied across ALL dates (e.g. business hours end)."},placeholder:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Placeholder text shown when value is null."},label:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Form label text. Uses form-label shared pattern."},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'lg'"}]},description:"Trigger size. Applies arvo-dtp--sm or arvo-dtp--lg modifier.",defaultValue:{value:"'lg'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:'CSS width on the trigger (e.g. "200px", "50%"). Defaults to 300px.'},isFullWidth:{required:!1,tsType:{name:"boolean"},description:'Shorthand for width="100%". Applies arvo-dtp--full-width modifier.',defaultValue:{value:"false",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state. Applies is-disabled class and aria-disabled.",defaultValue:{value:"false",computed:!1}},isReadOnly:{required:!1,tsType:{name:"boolean"},description:"Read-only. Applies is-readonly class.",defaultValue:{value:"false",computed:!1}},isRequired:{required:!1,tsType:{name:"boolean"},description:"Required for forms. Applies aria-required.",defaultValue:{value:"false",computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:"Validation invalid. Applies has-error class and aria-invalid.",defaultValue:{value:"false",computed:!1}},errorMsg:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Error message text. Used by msg-alert shared pattern."},errorDisplay:{required:!1,tsType:{name:"union",raw:"'inline' | 'tooltip' | 'none'",elements:[{name:"literal",value:"'inline'"},{name:"literal",value:"'tooltip'"},{name:"literal",value:"'none'"}]},description:"How to render error feedback.",defaultValue:{value:"'inline'",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"Loading state (Pattern C). Applies loading class and aria-busy.",defaultValue:{value:"false",computed:!1}},isClearable:{required:!1,tsType:{name:"boolean"},description:"When true and a value is set, renders a clear icon button in the action\noverlay to clear the current date and time. Defaults to `false`.",defaultValue:{value:"false",computed:!1}},isAutoClose:{required:!1,tsType:{name:"boolean"},description:`Auto-close on selection. Defaults to FALSE for DateTimePicker (different
from Date/Time Picker) so users can set both portions before closing.
When true, closes ONLY when BOTH date AND time have been touched since
the last open.`,defaultValue:{value:"false",computed:!1}},isStrictParsing:{required:!1,tsType:{name:"boolean"},description:"Reject partial format parses.",defaultValue:{value:"false",computed:!1}},isSegmented:{required:!1,tsType:{name:"boolean"},description:"Use combined isSegmented input editing in the trigger.",defaultValue:{value:"true",computed:!1}},anchor:{required:!1,tsType:{name:"union",raw:"false | true | HTMLElement | RefObject<HTMLElement> | string",elements:[{name:"literal",value:"false"},{name:"literal",value:"true"},{name:"HTMLElement"},{name:"RefObject",elements:[{name:"HTMLElement"}],raw:"RefObject<HTMLElement>"},{name:"string"}]},description:`Overlay-only mode. Pass a host element / ref / CSS selector to bind
without rendering an input. Applies arvo-dtp--anchor-mode modifier.`,defaultValue:{value:"false",computed:!1}},placement:{required:!1,tsType:{name:"union",raw:"'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'auto'",elements:[{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'auto'"}]},description:"Popover placement relative to the trigger.",defaultValue:{value:"'bottom-end'",computed:!1}},zIndex:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:"Popover z-index override."},calendarProps:{required:!1,tsType:{name:"Pick",elements:[{name:"ArvoCalendarProps"},{name:"union",raw:"'hasOutsideDays' | 'isKeyboardEnabled' | 'size'",elements:[{name:"literal",value:"'hasOutsideDays'"},{name:"literal",value:"'isKeyboardEnabled'"},{name:"literal",value:"'size'"}]}],raw:`Pick<
  ArvoCalendarProps,
  'hasOutsideDays' | 'isKeyboardEnabled' | 'size'
>`},description:"Inner `ArvoCalendar` config the parent doesn't expose flat. Bag-only\nkeys (`hasOutsideDays`, `isKeyboardEnabled`, `size`) flow through."},popoverProps:{required:!1,tsType:{name:"DateTimePickerPopoverProps"},description:"Popover surface options (custom portal, not `ArvoPopover`). Bag-only\nkeys (`width`, `offset`) flow through; flat options (`placement`,\n`zIndex`) always win on overlap.\n\nNote: a `timeProps` bag is intentionally omitted in this pass --\n`ArvoTimeDropdown` has no parity-safe long-tail option today.\nAdd when a real escape-hatch knob emerges."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(payload: { value: Date | null; formattedValue: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ value: Date | null; formattedValue: string }",signature:{properties:[{key:"value",value:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}],required:!0}},{key:"formattedValue",value:{name:"string",required:!0}}]}},name:"payload"}],return:{name:"void"}}},description:"Called when the committed datetime value changes."},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => boolean | void",signature:{arguments:[],return:{name:"union",raw:"boolean | void",elements:[{name:"boolean"},{name:"void"}]}}},description:"Called when popover is about to open. Return false to cancel."},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => boolean | void",signature:{arguments:[],return:{name:"union",raw:"boolean | void",elements:[{name:"boolean"},{name:"void"}]}}},description:"Called when popover is about to close. Return false to cancel."},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called on trigger blur."},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}},composes:["Omit"]};const Wn={title:"Date & Time/DateTimePicker",component:S,tags:["!dev","stable"],argTypes:{value:{control:{type:"text"},description:"Controlled datetime value. Accepts Date, ISO string, or null."},defaultValue:{control:{type:"text"},description:"Initial value for uncontrolled mode."},format:{control:{type:"text"},description:".NET / Kendo combined date+time format. Empty resolves to locale default."},locale:{control:{type:"text"},description:'BCP-47 locale (e.g. "en-US", "de-DE"). Defaults to navigator locale.'},weekStart:{control:{type:"select"},options:[0,1,2,3,4,5,6],description:"First day of week. 0=Sunday, 1=Monday, ... 6=Saturday.",table:{defaultValue:{summary:"0"}}},hasWeeks:{control:{type:"boolean"},description:"Show ISO-8601 week numbers column in the calendar.",table:{defaultValue:{summary:"false"}}},interval:{control:{type:"number",min:1,max:120,step:1},description:"Time dropdown interval in minutes.",table:{defaultValue:{summary:"15"}}},min:{control:{type:"text"},description:"Full datetime min (inclusive). Time enforced only on boundary date."},max:{control:{type:"text"},description:"Full datetime max (inclusive). Time enforced only on boundary date."},startTime:{control:{type:"text"},description:"Time-only floor across all dates (e.g. business hours start)."},endTime:{control:{type:"text"},description:"Time-only ceiling across all dates (e.g. business hours end)."},placeholder:{control:{type:"text"},description:"Placeholder text shown when no value is selected."},label:{control:{type:"text"},description:"Field label rendered above the trigger input."},size:{control:{type:"select"},options:["sm","lg"],description:"Trigger size. sm: 24px input field (46px total); lg: 32px (54px total).",table:{defaultValue:{summary:"lg"}}},width:{control:{type:"text"},description:'CSS width on the trigger field (e.g. "200px", "50%"). Default: 300px.'},isFullWidth:{control:{type:"boolean"},description:'Shorthand for width="100%". Applies arvo-dtp--full-width modifier.',table:{defaultValue:{summary:"false"}}},isDisabled:{control:{type:"boolean"},description:"Disable the picker. Applies is-disabled and aria-disabled.",table:{defaultValue:{summary:"false"}}},isReadOnly:{control:{type:"boolean"},description:"Read-only mode. Shows value but prevents editing.",table:{defaultValue:{summary:"false"}}},isRequired:{control:{type:"boolean"},description:"Required field indicator. Applies aria-required.",table:{defaultValue:{summary:"false"}}},isInvalid:{control:{type:"boolean"},description:"Validation error state. Applies has-error and aria-invalid.",table:{defaultValue:{summary:"false"}}},errorMsg:{control:{type:"text"},description:"Error message shown when isInvalid is true."},errorDisplay:{control:{type:"select"},options:["inline","tooltip","none"],description:"How to render error feedback: inline message, tooltip icon, or none.",table:{defaultValue:{summary:"inline"}}},isLoading:{control:{type:"boolean"},description:"Loading state (Pattern C). Spinner replaces trigger button; popover cannot open.",table:{defaultValue:{summary:"false"}}},isAutoClose:{control:{type:"boolean"},description:"Close popover after both date and time are touched. Defaults false for DateTimePicker.",table:{defaultValue:{summary:"false"}}},isStrictParsing:{control:{type:"boolean"},description:"Reject partial format parses (reserved for future engine pass).",table:{defaultValue:{summary:"false"}}},isSegmented:{control:{type:"boolean"},description:"Use isSegmented input editing (date + time segments) in the trigger.",table:{defaultValue:{summary:"true"}}},placement:{control:{type:"select"},options:["top-start","top-end","bottom-start","bottom-end","auto"],description:"Popover placement relative to the trigger field.",table:{defaultValue:{summary:"bottom-start"}}},onChange:{action:"changed",table:{category:"Events"}},onOpen:{action:"opened",table:{category:"Events"}},onClose:{action:"closed",table:{category:"Events"}},onBlur:{action:"blurred",table:{category:"Events"}}},args:{size:"lg",isDisabled:!1,isReadOnly:!1,isRequired:!1,isInvalid:!1,isLoading:!1,isFullWidth:!1,hasWeeks:!1,isAutoClose:!1,isStrictParsing:!1,isSegmented:!0,errorDisplay:"inline",placement:"bottom-start",weekStart:0,interval:15},parameters:{docs:{description:{component:`Consolidated CSF for ArvoDateTimePicker.\r

All stories are docs-only (\`tags: ['!dev', 'stable']\`): they render on the\r
attached \`DateTimePicker.mdx\` page (the single sidebar node for this\r
component), not as their own sidebar leaves. \`DateTimePicker.mdx\` references\r
these stories with Doc Blocks.\r

Buckets within this file:\r
  - Default / Playground -- live controls for every prop (drives the docs page)\r
  - Sizes / Layout / Calendar / States / Format / Behavior / Constraints / Anchor / Scoped -- frozen single-prop snapshots\r
  - Examples             -- composition recipes`}}}},ge={args:{label:"Pick a date and time"}},ye={args:{label:"Date & Time",placeholder:"Select date and time",size:"lg",isSegmented:!0,isAutoClose:!1,weekStart:0,hasWeeks:!1,interval:15,placement:"bottom-start",errorDisplay:"inline"}},ve={name:"Size: sm",args:{label:"Date & Time",size:"sm"}},be={name:"Size: lg (default)",args:{label:"Date & Time",size:"lg"}},he={name:"Full Width",args:{label:"Date & Time",isFullWidth:!0}},De={name:"Show Weeks Column",args:{label:"Date & Time",hasWeeks:!0}},Te={args:{label:"Date & Time",isDisabled:!0}},we={args:{label:"Date & Time",isReadOnly:!0,defaultValue:new Date(2026,5,1,14,30)}},xe={args:{label:"Date & Time",isRequired:!0}},Se={name:"Invalid (inline)",args:{label:"Date & Time",isInvalid:!0,errorMsg:"Please select a valid date and time",errorDisplay:"inline"}},ke={name:"Invalid (tooltip)",args:{label:"Date & Time",size:"sm",isInvalid:!0,errorMsg:"Please select a valid date and time",errorDisplay:"tooltip"}},Ce={args:{label:"Date & Time",isLoading:!0}},Ae={name:"Format: yyyy-MM-dd HH:mm",args:{label:"Date & Time",format:"yyyy-MM-dd HH:mm"}},Me={name:"Locale: de-DE",args:{label:"Datum & Zeit",locale:"de-DE"}},Pe={name:"isAutoClose: true",args:{label:"Date & Time",isAutoClose:!0}},Ee={name:"isSegmented: false (free-text)",args:{label:"Date & Time",isSegmented:!1}},Re={name:"Min only",args:{label:"Date & Time",min:new Date(2026,5,1,8,0)}},Ve={name:"Max only",args:{label:"Date & Time",max:new Date(2026,5,30,17,0)}},Le={name:"Min + Max",args:{label:"Date & Time",min:new Date(2026,5,1,8,0),max:new Date(2026,5,30,17,0),defaultValue:new Date(2026,5,15,12,0)}},Fe={name:"startTime + endTime (business hours)",args:{label:"Date & Time",startTime:"08:00",endTime:"17:00"}},qe={name:"Min + startTime combined",args:{label:"Date & Time",min:new Date(2026,5,1,9,0),startTime:"08:00"}},Ie={name:"Anchor mode",args:{anchor:"#dtp-anchor-demo"},decorators:[t=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,alignItems:"flex-start"},children:[o.jsx(ft,{id:"dtp-anchor-demo",label:"Pick date & time",icon:"calendar"}),o.jsx(t,{})]})]},je={name:"Scoped Calendar Config (calendarProps)",args:{label:"Date & Time",calendarProps:{hasOutsideDays:!0,isKeyboardEnabled:!0,size:"sm"}}},_e={name:"Scoped Popover Config (popoverProps)",args:{label:"Date & Time",popoverProps:{width:"520px",offset:12}}},Oe={name:"All Sizes",args:{},render:()=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,maxWidth:360},children:[o.jsx(S,{label:"Small (sm)",size:"sm"}),o.jsx(S,{label:"Large (lg)",size:"lg"})]})},ze={name:"All States",args:{},render:()=>o.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:16,maxWidth:720},children:[o.jsx(S,{label:"Default"}),o.jsx(S,{label:"Disabled",isDisabled:!0}),o.jsx(S,{label:"Read Only",isReadOnly:!0,defaultValue:new Date(2026,5,1,14,30)}),o.jsx(S,{label:"Invalid",isInvalid:!0,errorMsg:"Please select a valid date and time"}),o.jsx(S,{label:"Loading",isLoading:!0})]})},We={name:"Recipe: Business Hours",args:{},render:()=>{const[t,s]=n.useState(null);return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,maxWidth:360},children:[o.jsx(S,{label:"Meeting time",startTime:"08:00",endTime:"17:00",interval:30,value:t,onChange:d=>s(d.value)}),o.jsxs("span",{children:["Selected:"," ",t?t.toLocaleString(void 0,{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"none"]})]})}},Ne={name:"Recipe: Booking Window",args:{},render:()=>{const t=new Date,s=new Date(t.getFullYear(),t.getMonth(),t.getDate()+14,17,0);return o.jsx(S,{label:"Appointment",min:t,max:s,startTime:"09:00",endTime:"16:30",interval:15,placeholder:"Choose an available slot"})}},Be={name:"Recipe: Controlled with Form",args:{},render:()=>{const[t,s]=n.useState(null),d=t?t.toLocaleString(void 0,{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"";return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:400},children:[o.jsx(S,{label:"Event start",value:t,onChange:x=>s(x.value),isRequired:!0}),o.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[o.jsxs("span",{children:["Formatted: ",d||"(none)"]}),o.jsx(ft,{label:"Clear",variant:"tertiary",size:"sm",onClick:()=>s(null)})]})]})}},He={name:"Recipe: Anchor Mode",args:{},render:()=>{const[t,s]=n.useState(null);return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,alignItems:"flex-start"},children:[o.jsx(ft,{id:"dtp-anchor-recipe-btn",label:"Schedule",icon:"calendar"}),o.jsx(S,{anchor:"#dtp-anchor-recipe-btn",startTime:"08:00",endTime:"18:00",onChange:d=>s(d.value)}),o.jsxs("span",{children:["Selected:"," ",t?t.toLocaleString(void 0,{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"none"]})]})}};var Gt,Zt,Jt;ge.parameters={...ge.parameters,docs:{...(Gt=ge.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
  args: {
    label: 'Pick a date and time'
  }
}`,...(Jt=(Zt=ge.parameters)==null?void 0:Zt.docs)==null?void 0:Jt.source}}};var Qt,Xt,ea;ye.parameters={...ye.parameters,docs:{...(Qt=ye.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
  args: {
    label: 'Date & Time',
    placeholder: 'Select date and time',
    size: 'lg',
    isSegmented: true,
    isAutoClose: false,
    weekStart: 0,
    hasWeeks: false,
    interval: 15,
    placement: 'bottom-start',
    errorDisplay: 'inline'
  }
}`,...(ea=(Xt=ye.parameters)==null?void 0:Xt.docs)==null?void 0:ea.source}}};var ta,aa,ra;ve.parameters={...ve.parameters,docs:{...(ta=ve.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  name: 'Size: sm',
  args: {
    label: 'Date & Time',
    size: 'sm'
  }
}`,...(ra=(aa=ve.parameters)==null?void 0:aa.docs)==null?void 0:ra.source}}};var na,sa,la;be.parameters={...be.parameters,docs:{...(na=be.parameters)==null?void 0:na.docs,source:{originalSource:`{
  name: 'Size: lg (default)',
  args: {
    label: 'Date & Time',
    size: 'lg'
  }
}`,...(la=(sa=be.parameters)==null?void 0:sa.docs)==null?void 0:la.source}}};var oa,ia,ua;he.parameters={...he.parameters,docs:{...(oa=he.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  name: 'Full Width',
  args: {
    label: 'Date & Time',
    isFullWidth: true
  }
}`,...(ua=(ia=he.parameters)==null?void 0:ia.docs)==null?void 0:ua.source}}};var ca,da,ma;De.parameters={...De.parameters,docs:{...(ca=De.parameters)==null?void 0:ca.docs,source:{originalSource:`{
  name: 'Show Weeks Column',
  args: {
    label: 'Date & Time',
    hasWeeks: true
  }
}`,...(ma=(da=De.parameters)==null?void 0:da.docs)==null?void 0:ma.source}}};var pa,fa,ga;Te.parameters={...Te.parameters,docs:{...(pa=Te.parameters)==null?void 0:pa.docs,source:{originalSource:`{
  args: {
    label: 'Date & Time',
    isDisabled: true
  }
}`,...(ga=(fa=Te.parameters)==null?void 0:fa.docs)==null?void 0:ga.source}}};var ya,va,ba;we.parameters={...we.parameters,docs:{...(ya=we.parameters)==null?void 0:ya.docs,source:{originalSource:`{
  args: {
    label: 'Date & Time',
    isReadOnly: true,
    defaultValue: new Date(2026, 5, 1, 14, 30)
  }
}`,...(ba=(va=we.parameters)==null?void 0:va.docs)==null?void 0:ba.source}}};var ha,Da,Ta;xe.parameters={...xe.parameters,docs:{...(ha=xe.parameters)==null?void 0:ha.docs,source:{originalSource:`{
  args: {
    label: 'Date & Time',
    isRequired: true
  }
}`,...(Ta=(Da=xe.parameters)==null?void 0:Da.docs)==null?void 0:Ta.source}}};var wa,xa,Sa;Se.parameters={...Se.parameters,docs:{...(wa=Se.parameters)==null?void 0:wa.docs,source:{originalSource:`{
  name: 'Invalid (inline)',
  args: {
    label: 'Date & Time',
    isInvalid: true,
    errorMsg: 'Please select a valid date and time',
    errorDisplay: 'inline'
  }
}`,...(Sa=(xa=Se.parameters)==null?void 0:xa.docs)==null?void 0:Sa.source}}};var ka,Ca,Aa;ke.parameters={...ke.parameters,docs:{...(ka=ke.parameters)==null?void 0:ka.docs,source:{originalSource:`{
  name: 'Invalid (tooltip)',
  args: {
    label: 'Date & Time',
    size: 'sm',
    isInvalid: true,
    errorMsg: 'Please select a valid date and time',
    errorDisplay: 'tooltip'
  }
}`,...(Aa=(Ca=ke.parameters)==null?void 0:Ca.docs)==null?void 0:Aa.source}}};var Ma,Pa,Ea;Ce.parameters={...Ce.parameters,docs:{...(Ma=Ce.parameters)==null?void 0:Ma.docs,source:{originalSource:`{
  args: {
    label: 'Date & Time',
    isLoading: true
  }
}`,...(Ea=(Pa=Ce.parameters)==null?void 0:Pa.docs)==null?void 0:Ea.source}}};var Ra,Va,La;Ae.parameters={...Ae.parameters,docs:{...(Ra=Ae.parameters)==null?void 0:Ra.docs,source:{originalSource:`{
  name: 'Format: yyyy-MM-dd HH:mm',
  args: {
    label: 'Date & Time',
    format: 'yyyy-MM-dd HH:mm'
  }
}`,...(La=(Va=Ae.parameters)==null?void 0:Va.docs)==null?void 0:La.source}}};var Fa,qa,Ia;Me.parameters={...Me.parameters,docs:{...(Fa=Me.parameters)==null?void 0:Fa.docs,source:{originalSource:`{
  name: 'Locale: de-DE',
  args: {
    label: 'Datum & Zeit',
    locale: 'de-DE'
  }
}`,...(Ia=(qa=Me.parameters)==null?void 0:qa.docs)==null?void 0:Ia.source}}};var ja,_a,Oa;Pe.parameters={...Pe.parameters,docs:{...(ja=Pe.parameters)==null?void 0:ja.docs,source:{originalSource:`{
  name: 'isAutoClose: true',
  args: {
    label: 'Date & Time',
    isAutoClose: true
  }
}`,...(Oa=(_a=Pe.parameters)==null?void 0:_a.docs)==null?void 0:Oa.source}}};var za,Wa,Na;Ee.parameters={...Ee.parameters,docs:{...(za=Ee.parameters)==null?void 0:za.docs,source:{originalSource:`{
  name: 'isSegmented: false (free-text)',
  args: {
    label: 'Date & Time',
    isSegmented: false
  }
}`,...(Na=(Wa=Ee.parameters)==null?void 0:Wa.docs)==null?void 0:Na.source}}};var Ba,Ha,Ka;Re.parameters={...Re.parameters,docs:{...(Ba=Re.parameters)==null?void 0:Ba.docs,source:{originalSource:`{
  name: 'Min only',
  args: {
    label: 'Date & Time',
    min: new Date(2026, 5, 1, 8, 0)
  }
}`,...(Ka=(Ha=Re.parameters)==null?void 0:Ha.docs)==null?void 0:Ka.source}}};var Ya,$a,Ua;Ve.parameters={...Ve.parameters,docs:{...(Ya=Ve.parameters)==null?void 0:Ya.docs,source:{originalSource:`{
  name: 'Max only',
  args: {
    label: 'Date & Time',
    max: new Date(2026, 5, 30, 17, 0)
  }
}`,...(Ua=($a=Ve.parameters)==null?void 0:$a.docs)==null?void 0:Ua.source}}};var Ga,Za,Ja;Le.parameters={...Le.parameters,docs:{...(Ga=Le.parameters)==null?void 0:Ga.docs,source:{originalSource:`{
  name: 'Min + Max',
  args: {
    label: 'Date & Time',
    min: new Date(2026, 5, 1, 8, 0),
    max: new Date(2026, 5, 30, 17, 0),
    defaultValue: new Date(2026, 5, 15, 12, 0)
  }
}`,...(Ja=(Za=Le.parameters)==null?void 0:Za.docs)==null?void 0:Ja.source}}};var Qa,Xa,er;Fe.parameters={...Fe.parameters,docs:{...(Qa=Fe.parameters)==null?void 0:Qa.docs,source:{originalSource:`{
  name: 'startTime + endTime (business hours)',
  args: {
    label: 'Date & Time',
    startTime: '08:00',
    endTime: '17:00'
  }
}`,...(er=(Xa=Fe.parameters)==null?void 0:Xa.docs)==null?void 0:er.source}}};var tr,ar,rr;qe.parameters={...qe.parameters,docs:{...(tr=qe.parameters)==null?void 0:tr.docs,source:{originalSource:`{
  name: 'Min + startTime combined',
  args: {
    label: 'Date & Time',
    min: new Date(2026, 5, 1, 9, 0),
    startTime: '08:00'
  }
}`,...(rr=(ar=qe.parameters)==null?void 0:ar.docs)==null?void 0:rr.source}}};var nr,sr,lr;Ie.parameters={...Ie.parameters,docs:{...(nr=Ie.parameters)==null?void 0:nr.docs,source:{originalSource:`{
  name: 'Anchor mode',
  args: {
    anchor: '#dtp-anchor-demo'
  },
  decorators: [Story => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    alignItems: 'flex-start'
  }}>\r
        <ArvoButton id="dtp-anchor-demo" label="Pick date & time" icon="calendar" />\r
        <Story />\r
      </div>]
}`,...(lr=(sr=Ie.parameters)==null?void 0:sr.docs)==null?void 0:lr.source}}};var or,ir,ur;je.parameters={...je.parameters,docs:{...(or=je.parameters)==null?void 0:or.docs,source:{originalSource:`{
  name: 'Scoped Calendar Config (calendarProps)',
  args: {
    label: 'Date & Time',
    calendarProps: {
      hasOutsideDays: true,
      isKeyboardEnabled: true,
      size: 'sm'
    }
  }
}`,...(ur=(ir=je.parameters)==null?void 0:ir.docs)==null?void 0:ur.source}}};var cr,dr,mr;_e.parameters={..._e.parameters,docs:{...(cr=_e.parameters)==null?void 0:cr.docs,source:{originalSource:`{
  name: 'Scoped Popover Config (popoverProps)',
  args: {
    label: 'Date & Time',
    popoverProps: {
      width: '520px',
      offset: 12
    }
  }
}`,...(mr=(dr=_e.parameters)==null?void 0:dr.docs)==null?void 0:mr.source}}};var pr,fr,gr;Oe.parameters={...Oe.parameters,docs:{...(pr=Oe.parameters)==null?void 0:pr.docs,source:{originalSource:`{
  name: 'All Sizes',
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    maxWidth: 360
  }}>\r
      <ArvoDateTimePicker label="Small (sm)" size="sm" />\r
      <ArvoDateTimePicker label="Large (lg)" size="lg" />\r
    </div>
}`,...(gr=(fr=Oe.parameters)==null?void 0:fr.docs)==null?void 0:gr.source}}};var yr,vr,br;ze.parameters={...ze.parameters,docs:{...(yr=ze.parameters)==null?void 0:yr.docs,source:{originalSource:`{
  name: 'All States',
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 16,
    maxWidth: 720
  }}>\r
      <ArvoDateTimePicker label="Default" />\r
      <ArvoDateTimePicker label="Disabled" isDisabled />\r
      <ArvoDateTimePicker label="Read Only" isReadOnly defaultValue={new Date(2026, 5, 1, 14, 30)} />\r
      <ArvoDateTimePicker label="Invalid" isInvalid errorMsg="Please select a valid date and time" />\r
      <ArvoDateTimePicker label="Loading" isLoading />\r
    </div>
}`,...(br=(vr=ze.parameters)==null?void 0:vr.docs)==null?void 0:br.source}}};var hr,Dr,Tr;We.parameters={...We.parameters,docs:{...(hr=We.parameters)==null?void 0:hr.docs,source:{originalSource:`{
  name: 'Recipe: Business Hours',
  args: {},
  render: () => {
    const [dt, setDt] = useState<Date | null>(null);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      maxWidth: 360
    }}>\r
        <ArvoDateTimePicker label="Meeting time" startTime="08:00" endTime="17:00" interval={30} value={dt} onChange={payload => setDt(payload.value)} />\r
        <span>\r
          Selected:{' '}\r
          {dt ? dt.toLocaleString(undefined, {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }) : 'none'}\r
        </span>\r
      </div>;
  }
}`,...(Tr=(Dr=We.parameters)==null?void 0:Dr.docs)==null?void 0:Tr.source}}};var wr,xr,Sr;Ne.parameters={...Ne.parameters,docs:{...(wr=Ne.parameters)==null?void 0:wr.docs,source:{originalSource:`{
  name: 'Recipe: Booking Window',
  args: {},
  render: () => {
    const now = new Date();
    const twoWeeksLater = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 14, 17, 0);
    return <ArvoDateTimePicker label="Appointment" min={now} max={twoWeeksLater} startTime="09:00" endTime="16:30" interval={15} placeholder="Choose an available slot" />;
  }
}`,...(Sr=(xr=Ne.parameters)==null?void 0:xr.docs)==null?void 0:Sr.source}}};var kr,Cr,Ar;Be.parameters={...Be.parameters,docs:{...(kr=Be.parameters)==null?void 0:kr.docs,source:{originalSource:`{
  name: 'Recipe: Controlled with Form',
  args: {},
  render: () => {
    const [value, setValue] = useState<Date | null>(null);
    const formatted = value ? value.toLocaleString(undefined, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }) : '';
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      maxWidth: 400
    }}>\r
        <ArvoDateTimePicker label="Event start" value={value} onChange={payload => setValue(payload.value)} isRequired />\r
        <div style={{
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }}>\r
          <span>Formatted: {formatted || '(none)'}</span>\r
          <ArvoButton label="Clear" variant="tertiary" size="sm" onClick={() => setValue(null)} />\r
        </div>\r
      </div>;
  }
}`,...(Ar=(Cr=Be.parameters)==null?void 0:Cr.docs)==null?void 0:Ar.source}}};var Mr,Pr,Er;He.parameters={...He.parameters,docs:{...(Mr=He.parameters)==null?void 0:Mr.docs,source:{originalSource:`{
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
        <ArvoButton id="dtp-anchor-recipe-btn" label="Schedule" icon="calendar" />\r
        <ArvoDateTimePicker anchor="#dtp-anchor-recipe-btn" startTime="08:00" endTime="18:00" onChange={payload => setSelected(payload.value)} />\r
        <span>\r
          Selected:{' '}\r
          {selected ? selected.toLocaleString(undefined, {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }) : 'none'}\r
        </span>\r
      </div>;
  }
}`,...(Er=(Pr=He.parameters)==null?void 0:Pr.docs)==null?void 0:Er.source}}};const Nn=["Default","Playground","SizeSm","SizeLg","FullWidth","ShowWeeksColumn","Disabled","ReadOnly","Required","InvalidInline","InvalidTooltip","Loading","FormatCustom","LocaleGerman","AutoCloseEnabled","SegmentedDisabled","MinOnly","MaxOnly","MinMaxRange","StartTimeEndTime","MinPlusStartTime","AnchorMode","ScopedCalendarConfig","ScopedPopoverConfig","AllSizes","AllStates","BusinessHoursDatetime","BookingWindow","ControlledFormIntegration","AnchorModeCustomTrigger"],ls=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:Oe,AllStates:ze,AnchorMode:Ie,AnchorModeCustomTrigger:He,AutoCloseEnabled:Pe,BookingWindow:Ne,BusinessHoursDatetime:We,ControlledFormIntegration:Be,Default:ge,Disabled:Te,FormatCustom:Ae,FullWidth:he,InvalidInline:Se,InvalidTooltip:ke,Loading:Ce,LocaleGerman:Me,MaxOnly:Ve,MinMaxRange:Le,MinOnly:Re,MinPlusStartTime:qe,Playground:ye,ReadOnly:we,Required:xe,ScopedCalendarConfig:je,ScopedPopoverConfig:_e,SegmentedDisabled:Ee,ShowWeeksColumn:De,SizeLg:be,SizeSm:ve,StartTimeEndTime:Fe,__namedExportsOrder:Nn,default:Wn},Symbol.toStringTag,{value:"Module"}));export{Oe as A,We as B,Be as C,ls as D,Ae as F,Me as L,Le as M,ye as P,Fe as S,ze as a,Pe as b,Ee as c,Ne as d,He as e};
