import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b as Ws,r as t,l as gl,h as yl,A as bl,B as gt,f as na,a as vl,p as hl,m as kl}from"./iframe-BaOp0t6F.js";import{r as Dl}from"./index-BbVYX0ZH.js";import{u as Wl,c as xl}from"./useOverlay-Bo9f1g6f.js";import{b as kr,a as ar,A as yt,c as wl,i as Sl}from"./Calendar-kkFVIcSH.js";import{u as Rl}from"./useArvoLocale-z-KisV4q.js";import{u as Cl}from"./useFocusTrap-BePVbEUc.js";import{A as rr}from"./IconButton-BgwDUYzG.js";import{A as Va}from"./Button-B8O_kk1m.js";import{A as bt}from"./ButtonGroup-Bky2dG1G.js";import{A as Nl}from"./Switch-BDE_dn2p.js";import{a as Ml}from"./FormLabel-Dn-HbpfA.js";import{A as br}from"./MessageAlert-DBQwY950.js";import{A as vt}from"./NumberInput-Iv_u_Hxn.js";import{A as Al}from"./Indicator-DI-QBEWN.js";import{C as tr}from"./CalendarNav-C-WBh-a1.js";import{r as El}from"./loading-flag-DkqmYwgU.js";function xs(l){return l.currentIndex===null?null:l.members[l.currentIndex]??null}function nr(l,c){if(!xs(l)||l.currentIndex===null)return{start:null,end:null,included:[]};const x=l.currentIndex,T=l.count,q=x+c.startOffset,K=x+c.endOffset,Se=q>=0&&q<T?l.members[q]:null,Re=K>=0&&K<T?l.members[K]:null,Ce=Math.max(0,q),Ne=Math.min(T-1,K),Fa=q<=K&&Ce<=Ne?l.members.slice(Ce,Ne+1):[];return{start:Se,end:Re,included:Fa}}function _l(l,c){return nr(l,c).included.length}function ht(l){return l===0?"Current":l>0?`Current +${l}`:`Current − ${Math.abs(l)}`}function Tl(l,c,y,x){const T=Ws(x),q=new Intl.NumberFormat(T),K=q.format(_l(l,c)),Se=q.format(l.count),Re=ht(c.startOffset),Ce=ht(c.endOffset);return`${K} of ${Se} members included (${Re} to ${Ce})`}function ze(l,c,y){return l==null?null:l instanceof Date?Number.isNaN(l.getTime())?null:l:typeof l=="string"?l.length===0?null:hl(l,c,y):null}function kt(l,c){return l==null&&c==null?!0:l==null||c==null?!1:Sl(l,c)}function vr(l,c){return kt(l.start,c.start)&&kt(l.end,c.end)}function he(l,c,y){return l==null?null:c&&l.getTime()<c.getTime()?new Date(c.getTime()):y&&l.getTime()>y.getTime()?new Date(y.getTime()):l}function Dt(l,c){return kr(l,c)?[c,l]:[l,c]}function Ll(l){return l===!1||l==null||l===!0?null:typeof l=="string"?typeof document>"u"?null:document.querySelector(l):l instanceof HTMLElement?l:l.current??null}const hr={startOffset:0,endOffset:0};function Wt(l,c){return l==null&&c==null?!0:l==null||c==null?!1:l.startOffset===c.startOffset&&l.endOffset===c.endOffset}const Il="→",xt=()=>{},O=t.forwardRef(function({startValue:c,endValue:y,format:x,locale:T,weekStart:q=0,hasWeeks:K=!0,minDate:Se,maxDate:Re,placeholder:Ce,label:Ne,size:Fa="lg",width:ws,isFullWidth:sr=!1,isDisabled:Ss=!1,isReadOnly:Y=!1,isRequired:Dr=!1,isInvalid:lr=!1,errorMsg:Rs,errorDisplay:or="inline",isLoading:jl=!1,isClearable:Cs=!1,isAutoClose:Me=!0,isStrictParsing:Ol=!1,isSegmented:Ns=!0,frequency:X=null,memberData:Be=null,currentMemberIndex:Wr=null,hasModeToggle:Ms=!0,hasRolling:As=!1,rollingPrefix:oe=null,rollingValue:ie=null,indicator:Es,anchor:$e=!1,placement:xr="bottom-end",zIndex:wr,calendarProps:Sr,popoverProps:se,onChange:ye,onModeChange:be,onOpen:za,onClose:Ba,onCancel:$a,onSave:Ka,className:_s,id:Ts},Ls){var dt,mt,pt,ft;const Is=t.useId(),H=Ts??`arvo-drp-${Is}`,ir=`${H}-input`,qs=`${H}-lbl`,Rr=`${H}-err`,Ae=`${H}-popover`,Cr=Rl(),b=t.useMemo(()=>Ws(T??Cr),[T,Cr]),R=t.useMemo(()=>x&&x.length>0?x:gl(b),[x,b]),Nr=t.useMemo(()=>ze(Se,R,b),[Se,R,b]),Mr=t.useMemo(()=>ze(Re,R,b),[Re,R,b]),S=!!(Be&&Be.length>0&&X),V=!!(As&&S),p=t.useMemo(()=>!S||!Be||!X?null:yl(Be,{frequency:X,currentMemberIndex:Wr??null}),[S,Be,X,Wr]),N=t.useMemo(()=>{const e=Nr,a=(p==null?void 0:p.minDate)??null;return a&&e?e.getTime()>a.getTime()?e:a:a??e},[Nr,p]),M=t.useMemo(()=>{const e=Mr,a=(p==null?void 0:p.maxDate)??null;return a&&e?e.getTime()<a.getTime()?e:a:a??e},[Mr,p]),E=t.useCallback(e=>!e||!p?null:bl(p,e),[p]),Ya=t.useCallback((e,a)=>{const r=E(e);return r?a==="start"?r.keyDate:r.endDate:null},[E]),Ha=t.useCallback((e,a)=>{if(!p||e.key!==a.key)return{start:e,end:a};const r=gt(p,e,"next");if(r)return{start:e,end:r};const n=gt(p,e,"prev");return n?{start:n,end:a}:{start:e,end:a}},[p]),ee=c!==void 0,ae=y!==void 0,[C,Ee]=t.useState(()=>({start:he(ze(c??null,R,b),N,M),end:he(ze(y??null,R,b),N,M)})),h=t.useRef(C);t.useEffect(()=>{h.current=C},[C]),t.useEffect(()=>{if(!ee&&!ae)return;const e={start:ee?he(ze(c,R,b),N,M):h.current.start,end:ae?he(ze(y,R,b),N,M):h.current.end};vr(e,h.current)||(Ee(e),h.current=e)},[c,y,R,b,ee,ae]);const[Ke,ue]=t.useState(C),U=t.useRef(Ke);t.useEffect(()=>{U.current=Ke},[Ke]);const[G,ce]=t.useState(!1),[ur,re]=t.useState(null),[_e,cr]=t.useState(S),[Ye,He]=t.useState(V&&ie?"rolling":"absolute"),m=V&&Ye==="rolling"?"rolling":S&&_e?"member":"absolute",[Z,Ue]=t.useState(ie??null),F=t.useRef(Z);t.useEffect(()=>{F.current=Z},[Z]);const[de,ke]=t.useState(ie??hr);t.useEffect(()=>{ie!==void 0&&(Ue(ie??null),F.current=ie??null,ie&&ke(ie))},[ie]);const[Ar,Ps]=t.useState(void 0),Te=Ar!==void 0?Ar:Es??null,[f,Er]=t.useState(!1),_r=t.useMemo(()=>{const e=C.start??C.end??new Date;return{year:e.getFullYear(),month:e.getMonth()}},[]),[z,B]=t.useState(_r.year),[$,me]=t.useState(_r.month),[k,pe]=t.useState("days"),[js,Os]=t.useState(null),[Vl,Vs]=t.useState(null),Q=t.useRef(null),Ge=t.useRef(null),Le=t.useRef(null),Ua=t.useRef(null),P=t.useRef(null),j=t.useRef(null),J=t.useRef(null),Ga=t.useRef(null),fe=t.useRef(null),De=t.useRef(null),dr=t.useRef(null),[Tr,Ie]=t.useState(""),[Lr,qe]=t.useState(""),[Fs,Ir]=t.useState(null),[zs,Bs]=t.useState(0),[Pe,$s]=t.useState(null),[je,Ks]=t.useState(null),W=Ss,ge=El(),Ze=js??(lr?Rs??null:null),We=Ze!=null,qr=C.start!=null||C.end!=null,w=Ns&&m==="absolute"&&!Y&&!W,Ys=$e!==!1&&$e!=null,Pr=$e===!0,jr=t.useRef(!1);Pr&&!jr.current&&(console.warn("[ArvoDateRangePicker] anchor={true} requires a host element in React; falling back to input mode."),jr.current=!0);const xe=Ys&&!Pr,Za=t.useCallback(e=>{if(!e)return"";if(S){const a=E(e);if(a)return a.displayName}return na(e,R,b)},[R,b,S,E]),Qa=t.useCallback(e=>{const a=oe??"";return e>0?`${a} +${e}`:`${a} ${e}`},[oe]),Qe=t.useMemo(()=>Z&&!C.start&&!C.end?Qa(Z.startOffset):Za(C.start),[C,Z,Za,Qa]),Je=t.useMemo(()=>Z&&!C.start&&!C.end?Qa(Z.endOffset):Za(C.end),[C,Z,Za,Qa]),te=t.useCallback(()=>{var r;if(f||W||ge||Y||(za==null?void 0:za())===!1)return;const e=new CustomEvent("drp:open",{bubbles:!0,cancelable:!0});if((r=Q.current)==null||r.dispatchEvent(e),e.defaultPrevented)return;V&&F.current?(He("rolling"),ke(F.current)):(!V||F.current==null)&&He("absolute");const a=h.current.start??h.current.end??new Date;B(a.getFullYear()),me(a.getMonth()),pe("days"),ue(h.current),U.current=h.current,ce(!1),re(null),Er(!0)},[f,W,ge,Y,za,V]),g=t.useCallback(()=>{var a;if(!f||(Ba==null?void 0:Ba())===!1)return;const e=new CustomEvent("drp:close",{bubbles:!0,cancelable:!0});(a=Q.current)==null||a.dispatchEvent(e),!e.defaultPrevented&&(ue(h.current),U.current=h.current,ce(!1),re(null),Er(!1),requestAnimationFrame(()=>{const r=De.current??Le.current;r==null||r.focus({preventScroll:!0})}))},[f,Ba]);t.useEffect(()=>{},[ge,f,g]);const le=t.useCallback((e,a)=>{var L;const r={start:he(e.start,N,M),end:he(e.end,N,M)};if(r.start&&r.end&&kr(r.start,r.end)){const[I,_]=Dt(r.start,r.end);r.start=I,r.end=_}const n=!vr(r,h.current),d=F.current;if(a!=="rolling"&&(Ue(null),F.current=null),!n&&!d)return!1;!ee&&!ae&&Ee(r),h.current=r;const i=r.start?na(r.start,R,b):"",u=r.end?na(r.end,R,b):"",o=S&&p?{start:E(r.start),end:E(r.end)}:void 0,v={start:r.start,end:r.end,formatted:{start:i,end:u},mode:a,memberRange:o};return ye==null||ye(v),(L=Q.current)==null||L.dispatchEvent(new CustomEvent("drp:change",{bubbles:!0,detail:v})),!0},[N,M,ee,ae,R,b,S,p,E,ye]),Or=t.useCallback(e=>{var u,o,v;if(!p)return!1;const a=nr(p,e),r={start:((u=a.start)==null?void 0:u.keyDate)??null,end:((o=a.end)==null?void 0:o.keyDate)??null},n=!vr(r,h.current)||!Wt(e,F.current);!ee&&!ae&&Ee(r),h.current=r,Ue(e),F.current=e;const d={start:a.start,end:a.end},i={start:r.start,end:r.end,formatted:{start:r.start?na(r.start,R,b):"",end:r.end?na(r.end,R,b):""},mode:"rolling",memberRange:d,rollingValue:e};return n&&(ye==null||ye(i),(v=Q.current)==null||v.dispatchEvent(new CustomEvent("drp:change",{bubbles:!0,detail:i}))),n},[p,ee,ae,R,b,ye]),Xe=t.useCallback(()=>{const e=P.current;e&&Ie(e.getFormattedDisplay(J.current==="start"))},[]),ea=t.useCallback(()=>{const e=j.current;e&&qe(e.getFormattedDisplay(J.current==="end"))},[]),Hs=t.useCallback((e,a)=>{const r=h.current;let n=a;if(S&&a!=null){const i=Ya(a,e);if(i==null){const u=e==="start"?P.current:j.current,o=e==="start"?r.start:r.end;u&&u.setValue(o,{silent:!0}),(e==="start"?Xe:ea)();return}n=i}const d=e==="start"?{start:n,end:r.end}:{start:r.start,end:n};le(d,"absolute")},[le,S,Ya,Xe,ea]);t.useEffect(()=>{var n,d;if(!w){(n=P.current)==null||n.destroy(),(d=j.current)==null||d.destroy(),P.current=null,j.current=null;return}const e=i=>{const u=kl({format:R,locale:b,value:i==="start"?h.current.start:h.current.end,min:N,max:M,commit:"blur"}),o=i==="start"?Xe:ea,v=u.on("commit",_=>{Hs(i,_.date)}),L=u.on("segment",()=>{Ir(J.current),Bs(_=>_+1)}),I=u.on("change",()=>o());return{ctrl:u,off:()=>{v(),L(),I(),u.destroy()}}},a=e("start"),r=e("end");return P.current=a.ctrl,j.current=r.ctrl,Xe(),ea(),()=>{a.off(),r.off(),P.current=null,j.current=null}},[w,R,b,N==null?void 0:N.getTime(),M==null?void 0:M.getTime()]),t.useEffect(()=>{var a,r;const e=S;w&&((a=P.current)==null||a.setValue(C.start,{silent:!0}),(r=j.current)==null||r.setValue(C.end,{silent:!0})),e?(J.current!=="start"&&Ie(Qe),J.current!=="end"&&qe(Je)):w?(J.current!=="start"&&Xe(),J.current!=="end"&&ea()):(Ie(Qe),qe(Je))},[w,S,Qe,Je,(dt=C.start)==null?void 0:dt.getTime(),(mt=C.end)==null?void 0:mt.getTime()]);const mr=t.useCallback(()=>{var e,a;(e=Ua.current)==null||e.focus(),(a=j.current)==null||a.focusSegment(0)},[]),Vr=t.useCallback(()=>{var a,r,n;(a=Le.current)==null||a.focus();const e=((r=P.current)==null?void 0:r.getValue().segments)??[];(n=P.current)==null||n.focusSegment(Math.max(0,e.length-1))},[]),Fr=t.useCallback(e=>()=>{if(J.current=e,!w)return;const a=e==="start"?P.current:j.current;if(!a)return;(e==="start"?Ie:qe)(a.getFormattedDisplay(!0)),a.focusSegment(0)},[w]),zr=t.useCallback(e=>()=>{if(!w)return;const a=e==="start"?Le.current:Ua.current;a&&requestAnimationFrame(()=>{if(document.activeElement!==a)return;const r=e==="start"?P.current:j.current;if(!r)return;const n=a.selectionStart??null;if(n===null)return;const d=r.findSegmentForOffset(n);d!==null&&r.focusSegment(d)})},[w]),Br=t.useCallback(e=>()=>{J.current===e&&(J.current=null);const a=e==="start"?P.current:j.current,r=e==="start"?Ie:qe;S?r(e==="start"?Qe:Je):w&&a&&r(a.getFormattedDisplay(!1)),Ir(null)},[w,S,Qe,Je]),$r=t.useCallback(e=>a=>{const r=e==="start"?P.current:j.current;if(!w||!r)return;r.handlePaste(a.clipboardData.getData("text")).consumed&&a.preventDefault()},[w]),Kr=t.useCallback(e=>a=>{if(a.altKey&&a.key==="ArrowDown"){a.preventDefault(),f||te();return}if(a.altKey&&a.key==="ArrowUp"){a.preventDefault(),f&&g();return}if(!w){a.key==="Escape"&&f&&(a.preventDefault(),g());return}const r=e==="start"?P.current:j.current;if(!r)return;const n=a.key,d=r.getValue().segments,i=r.getFocusedSegment(),u=d.length-1;if(n==="Escape"){a.preventDefault(),r.handleKey({key:"Escape"}),J.current===e&&((e==="start"?Ie:qe)(r.getFormattedDisplay(!0)),r.focusSegment(0)),f&&g();return}if(n==="ArrowRight"&&e==="start"&&i&&i.index===u){a.preventDefault(),mr();return}if(n==="ArrowLeft"&&e==="end"&&i&&i.index===0){a.preventDefault(),Vr();return}if(n==="Tab"){r.handleKey({key:"Tab",shiftKey:a.shiftKey}).consumed&&a.preventDefault();return}if(n==="Enter"){a.preventDefault(),r.handleKey({key:"Enter"}),f&&Me&&g();return}if(n==="ArrowLeft"||n==="ArrowRight"||n==="ArrowUp"||n==="ArrowDown"||n==="Home"||n==="End"||n==="Backspace"||n==="Delete"){r.handleKey({key:n}).consumed&&a.preventDefault();return}if(n.length===1&&!a.ctrlKey&&!a.metaKey){if(/^[0-9]$/.test(n)){const o=e==="start"&&i!=null&&i.index===u,v=r.handleDigit(n);v.consumed&&a.preventDefault(),v.advance&&o&&mr();return}if(/^[A-Za-z]$/.test(n)){r.handleLetter(n).consumed&&a.preventDefault();return}}},[w,f,Me,te,g,mr,Vr]);t.useLayoutEffect(()=>{if(!w)return;const e=J.current;if(!e)return;const a=e==="start"?P.current:j.current,r=e==="start"?Le.current:Ua.current;if(!a||!r)return;const n=a.getFocusedSegment();if(n)try{r.setSelectionRange(n.startOffset,n.endOffset)}catch{}},[zs,Tr,Lr,w]);const Us=t.useCallback(()=>{W||Y||(f?g():te())},[ge,W,Y,f,te,g]),Gs=t.useCallback(e=>{e.stopPropagation(),le({start:null,end:null},m)},[le,m]),Zs=t.useCallback(e=>{var n;cr(e),ce(!1),re(null),ue(h.current),U.current=h.current;const a=e?"member":"absolute";be==null||be({mode:a});const r=new CustomEvent("drp:mode-change",{bubbles:!0,cancelable:!0,detail:{mode:a}});(n=Q.current)==null||n.dispatchEvent(r)},[be]),Yr=t.useCallback(e=>{var n;if(e===Ye)return;He(e),e==="rolling"?ke(F.current??hr):(ue(h.current),U.current=h.current),ce(!1),re(null);const a=e==="rolling"?"rolling":_e?"member":"absolute";be==null||be({mode:a});const r=new CustomEvent("drp:mode-change",{bubbles:!0,cancelable:!0,detail:{mode:a}});(n=Q.current)==null||n.dispatchEvent(r)},[Ye,_e,be]),Hr=t.useCallback(e=>{const{date:a,mode:r}=e;if(!a)return;if(r!=="days"){B(a.getFullYear()),me(a.getMonth()),r==="months"?pe("days"):r==="years"&&pe("months");return}const n=S&&p!=null;if(!G){const u=n?Ya(a,"start")??a:a;ue({start:u,end:null}),U.current={start:u,end:null},ce(!0),re(u);return}const d=U.current.start??a;let i;if(n){const u=E(d),o=E(a);if(!u||!o)return;let v,L;u.keyDate.getTime()<=o.keyDate.getTime()?(v=u,L=o):(v=o,L=u);const I=Ha(v,L);i={start:I.start.keyDate,end:I.end.endDate}}else{const[u,o]=Dt(d,a);i={start:u,end:o}}ue(i),U.current=i,ce(!1),re(null),le(i,m),Me&&m!=="rolling"&&g()},[G,le,m,Me,g,S,p,Ya,E,Ha]),Ur=t.useCallback(e=>{G&&re(e.date??null)},[G]),Qs=t.useCallback(e=>{if(m==="rolling")return;if(!G){ue({start:e.keyDate,end:null}),U.current={start:e.keyDate,end:null},ce(!0),re(e.keyDate);return}const a=U.current.start,r=a?E(a):null;if(!r){ue({start:e.keyDate,end:null}),U.current={start:e.keyDate,end:null},ce(!0),re(e.keyDate);return}let n,d;r.keyDate.getTime()<=e.keyDate.getTime()?(n=r,d=e):(n=e,d=r);const i=Ha(n,d),u={start:i.start.keyDate,end:i.end.endDate};ue(u),U.current=u,ce(!1),re(null),le(u,"member"),Me&&g()},[m,G,le,Me,g,E,Ha]),Gr=t.useCallback(e=>{Js()&&re((e==null?void 0:e.keyDate)??null)},[]),Zr=t.useRef(G);t.useEffect(()=>{Zr.current=G},[G]);function Js(){return Zr.current}const Qr=e=>{const a=e.target.value;if(!a)return 0;const r=Number.parseInt(a,10);return Number.isFinite(r)?r:0},Xs=t.useCallback(e=>{const a=Qr(e);ke(r=>{let n={...r,startOffset:a};return n.startOffset>n.endOffset&&(n={...n,endOffset:a}),n})},[]),el=t.useCallback(e=>{const a=Qr(e);ke(r=>{let n={...r,endOffset:a};return n.endOffset<n.startOffset&&(n={...n,startOffset:a}),n})},[]),al=!Wt(de,Z),rl=t.useCallback(()=>{var e;V&&(Or(de),Ka==null||Ka(),(e=Q.current)==null||e.dispatchEvent(new CustomEvent("drp:save",{bubbles:!0,detail:{}})),g())},[V,Or,de,Ka,g]),aa=t.useCallback(()=>{var e;$a==null||$a(),(e=Q.current)==null||e.dispatchEvent(new CustomEvent("drp:cancel",{bubbles:!0,detail:{}})),ke(Z??hr),g()},[$a,Z,g]),Ja=t.useCallback(e=>{const a=dr.current;if(!a)return!1;const r=a.clientHeight||240,n=e==="prev"?-r:r;return a.scrollBy({top:n,behavior:"smooth"}),!0},[]),Jr=t.useCallback(()=>{if(!((m==="member"||m==="rolling")&&Ja("prev")))if(k==="days"){const e=ar(new Date(z,$,1),-1);B(e.getFullYear()),me(e.getMonth())}else B(k==="months"?e=>e-1:e=>e-10)},[k,z,$,m,Ja]),Xr=t.useCallback(()=>{if(!((m==="member"||m==="rolling")&&Ja("next")))if(k==="days"){const e=ar(new Date(z,$,1),1);B(e.getFullYear()),me(e.getMonth())}else B(k==="months"?e=>e+1:e=>e+10)},[k,z,$,m,Ja]),tl=t.useCallback(()=>{const e=new Date;B(e.getFullYear()),me(e.getMonth())},[]),Oe=t.useMemo(()=>{if(k==="months"||k==="quarters")return{year:z+1,month:$};if(k==="years")return{year:z+10,month:$};const e=ar(new Date(z,$,1),1);return{year:e.getFullYear(),month:e.getMonth()}},[z,$,k]);t.useLayoutEffect(()=>{if(!xe){De.current=null;return}const e=Ll($e);if(De.current=e,!e)return;const a=()=>{W||ge||Y||(f?g():te())},r=n=>{n.altKey&&n.key==="ArrowDown"?(n.preventDefault(),f||te()):n.altKey&&n.key==="ArrowUp"?(n.preventDefault(),f&&g()):n.key==="Escape"?f&&(n.preventDefault(),g()):(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),a())};return e.setAttribute("aria-haspopup","dialog"),e.setAttribute("aria-expanded",f?"true":"false"),e.setAttribute("aria-controls",Ae),e.addEventListener("click",a),e.addEventListener("keydown",r),()=>{e.removeEventListener("click",a),e.removeEventListener("keydown",r),e.removeAttribute("aria-haspopup"),e.removeAttribute("aria-expanded"),e.removeAttribute("aria-controls")}},[xe,$e,f,W,ge,Y,te,g,Ae]);const nl=t.useCallback(()=>{const e=fe.current;if(!e)return[];const a=Array.from(e.querySelectorAll('.arvo-cal__cell[tabindex="0"]')),r=e.querySelector('.arvo-drp__mtg-tile[tabindex="0"]'),n=Array.from(e.querySelectorAll(".arvo-cal-nav__month-btn")),d=Array.from(e.querySelectorAll(".arvo-cal-nav__year-btn")),i=[],u=Math.max(n.length,d.length);for(let ne=0;ne<u;ne+=1)n[ne]&&i.push(n[ne]),d[ne]&&i.push(d[ne]);const o=e.querySelector(".arvo-cal-nav__prev"),v=e.querySelector(".arvo-cal-nav__next"),L=e.querySelector(".arvo-cal-nav__today"),I=e.querySelector(".arvo-drp__hdr-switch input"),_=Array.from(e.querySelectorAll(".arvo-drp__hdr-tabs button[data-value]")),D=Array.from(e.querySelectorAll(".arvo-drp__rolling-block input")),ve=e.querySelector(".arvo-drp__footer-cancel"),yr=e.querySelector(".arvo-drp__footer-save");let Fe;return D.length>0?Fe=[..._,...D,ve,yr]:r?Fe=[r,I,o,v,..._]:Fe=[...a,o,...i,v,L,I,..._],Fe.filter(ne=>!(!ne||ne.disabled===!0||ne.hasAttribute("disabled")||ne.getAttribute("aria-disabled")==="true"))},[]);Cl(fe,{active:f,initialFocus:"none",returnFocusOnDeactivate:!1,escapeDeactivates:!1,allowOutsideClick:!0,getOrderedElements:nl});const Ve=Wl();t.useEffect(()=>{if(!f||!fe.current)return;const e=(xe?De.current:Ge.current)??void 0;return Ve.open({id:H,type:"dropdown",element:fe.current,triggerElement:e,priority:20,config:{autoCloseOnOutsideClick:!0},onClose:g}),()=>{Ve.close(H)}},[f]);const Xa=t.useRef(null),er=t.useRef(null),[Fl,sl]=t.useState(0);t.useLayoutEffect(()=>{var u;if(!f){Xa.current=null,(u=er.current)==null||u.destroy(),er.current=null;return}const e=(xe?De.current:Ge.current)??null,a=fe.current;if(!e||!a)return;const r={placement:xr,gap:(se==null?void 0:se.offset)??4,width:"auto"},n=o=>{a.style.transform=`translate(${o.x}px, ${o.y}px)`},d=vl(e,a,r);Xa.current=d,n(d),a.style.visibility="",sl(o=>o+1);const i=xl(e,a,r,o=>{Xa.current=o,n(o)});return er.current=i,()=>{i.destroy(),er.current=null}},[f,xr,xe,m,se==null?void 0:se.offset]),t.useEffect(()=>{if(!f)return;const e=a=>{var n,d;const r=a.target;Ve.isOverlayClickInside(fe.current,r)||(n=Q.current)!=null&&n.contains(r)||(d=De.current)!=null&&d.contains(r)||(m==="rolling"?aa():g())};return document.addEventListener("pointerdown",e,!0),()=>document.removeEventListener("pointerdown",e,!0)},[f,m,g,aa,Ve]),t.useEffect(()=>{if(!f)return;const e=a=>{var n,d;const r=a.target;(n=Q.current)!=null&&n.contains(r)||Ve.isOverlayClickInside(fe.current,r)||(d=De.current)!=null&&d.contains(r)||g()};return document.addEventListener("focusin",e),()=>document.removeEventListener("focusin",e)},[f,g,Ve]),t.useEffect(()=>{if(!f)return;const e=r=>{r.key==="Escape"&&(r.preventDefault(),m==="rolling"?aa():g())},a=fe.current;return a==null||a.addEventListener("keydown",e),()=>a==null?void 0:a.removeEventListener("keydown",e)},[f,m,g,aa]);const pr=t.useCallback(()=>{if(!Ga.current||!Ge.current)return;const e=Ga.current.offsetWidth,a=e>0?e+4:0;Ge.current.style.setProperty("--arvo-form-input-pad-r",`${a}px`)},[]);t.useEffect(()=>{pr()}),t.useEffect(()=>{const e=Ga.current;if(!e)return;const a=new ResizeObserver(pr);return a.observe(e),()=>a.disconnect()},[pr]),t.useEffect(()=>{if(!f||m!=="member"&&m!=="rolling")return;const e=dr.current;if(!e||!p)return;let a=null;const r=()=>{a=null;const i=e.querySelectorAll(".arvo-drp__mtg-tile");if(i.length===0)return;const u=e.getBoundingClientRect();let o=-1,v=-1;for(let D=0;D<i.length;D+=1){const ve=i[D].getBoundingClientRect();ve.top>=u.top-1&&ve.bottom<=u.bottom+1&&(o===-1&&(o=D),v=D)}if(o===-1){for(let D=0;D<i.length;D+=1)if(i[D].getBoundingClientRect().bottom>u.top){o=D;break}v=o}const L=p.members,I=o>=0?L[o]??null:null,_=v>=0?L[v]??null:null;$s(D=>(D==null?void 0:D.key)===(I==null?void 0:I.key)?D:I),Ks(D=>(D==null?void 0:D.key)===(_==null?void 0:_.key)?D:_)},n=()=>{a==null&&(a=requestAnimationFrame(r))};e.addEventListener("scroll",n,{passive:!0});const d=new ResizeObserver(()=>{a!=null&&cancelAnimationFrame(a),a=requestAnimationFrame(r)});return d.observe(e),a=requestAnimationFrame(r),()=>{e.removeEventListener("scroll",n),d.disconnect(),a!=null&&cancelAnimationFrame(a)}},[f,m,p]),t.useImperativeHandle(Ls,()=>{const e=Symbol("NO_ARG");return{open:()=>te(),close:()=>g(),toggle:r=>{r===void 0?f?g():te():r?te():g()},range:((r=e)=>{if(r===e)return h.current;const n={start:he(r.start,N,M),end:he(r.end,N,M)};!ee&&!ae&&Ee(n),h.current=n}),memberRange:((r=e)=>{var i,u;if(r===e)return{start:E(h.current.start),end:E(h.current.end)};const n=r,d={start:((i=n.start)==null?void 0:i.keyDate)??null,end:((u=n.end)==null?void 0:u.keyDate)??null};!ee&&!ae&&Ee(d),h.current=d}),rolling:((r=e)=>{var d,i;if(r===e)return F.current;const n=r;if(Ue(n),F.current=n,ke(n),p){const u=nr(p,n),o={start:((d=u.start)==null?void 0:d.keyDate)??null,end:((i=u.end)==null?void 0:i.keyDate)??null};!ee&&!ae&&Ee(o),h.current=o}}),mode:((r=e)=>{if(r===e)return m;r==="rolling"?V&&He("rolling"):(He("absolute"),cr(r==="member"&&S))}),memberToggle:((r=e)=>{if(r===e)return _e;cr(!!r)}),clear:()=>{le({start:null,end:null},m),Ue(null),F.current=null},disabled:((r=e)=>{if(r===e)return W;console.warn("[ArvoDateRangePicker] disabled() setter is a noop in React; pass isDisabled prop.")}),setError:r=>{Os(r===!1?null:r)},setLoading:r=>Vs(r),indicator:((r=e)=>{if(r===e)return Te;Ps(r)}),focus:()=>{var r;(r=Le.current)==null||r.focus()},destroy:()=>{}}},[te,g,f,_e,m,S,V,p,E,N,M,ee,ae,le,W,Te]);const et=["arvo-drp",`arvo-drp--${Fa}`,`arvo-drp--${m}`,sr&&"arvo-drp--full-width",K&&"arvo-drp--show-weeks",xe&&"arvo-drp--anchor-mode",W&&"is-disabled",Y&&"is-readonly",We&&"has-error",We&&or==="tooltip"&&"error-tooltip",qr&&"has-value",Fs&&"has-text-selected",f&&"open",ge,Te&&"has-indicator",_s].filter(Boolean).join(" "),at=sr?"100%":ws??void 0,rt=at?{"--arvo-form-input-width":at}:void 0,fr=Xa.current,ll={position:"fixed",top:0,left:0,margin:0,...se!=null&&se.width?{width:se.width}:{},...fr?{transform:`translate(${fr.x}px, ${fr.y}px)`}:{visibility:"hidden"},...wr!=null?{zIndex:wr}:{}},tt=We&&or==="inline"&&Ze!=null,gr=We&&or==="tooltip"&&Ze!=null,nt=Ce??R,st=Ne??"Date range",ra=Ke.start,ta=Ke.end??(G?ur:null),A=t.useMemo(()=>m!=="rolling"||!p?null:nr(p,de),[m,p,de]),ol=((pt=A==null?void 0:A.start)==null?void 0:pt.keyDate)??null,il=((ft=A==null?void 0:A.end)==null?void 0:ft.keyDate)??null,lt=t.useMemo(()=>!p||m!=="rolling"?null:Tl(p,de,void 0,b),[m,p,de,b]),ot=t.useMemo(()=>{if(!p||!V)return null;const e=xs(p);if(!e)return null;const a=X==="day"?"Day":X==="week"?"Week":X==="month"?"Month":X==="quarter"?"Quarter":"Year",r=oe?` (${oe})`:"";return s.jsxs(s.Fragment,{children:["Current ",a,r,":"," ",s.jsx("span",{className:"arvo-drp__current-ind-value",children:e.displayName})]})},[p,V,X,oe]),it=t.useMemo(()=>[{value:"absolute",label:"Absolute"},{value:"rolling",label:"Rolling"}],[]),ul=(()=>{var i,u;if(m==="absolute")return s.jsxs("div",{className:"arvo-drp__body",children:[s.jsx("div",{className:"arvo-drp__cal",children:s.jsx(yt,{...Sr,visibleYear:z,visibleMonth:$,viewMode:k,locale:b,weekStart:q,hasWeeks:K,rangeStart:ra,rangeEnd:ta,hoverDate:ur,isRangeComplete:!G,minDate:N,maxDate:M,memberIndex:p,frequency:X??void 0,onCellSelect:Hr,onCellHover:Ur,onMonthChange:o=>{B(o.year),me(o.month)},onViewModeChange:o=>pe(o.mode),onDismiss:g})}),s.jsx("div",{className:"arvo-drp__cal",children:s.jsx(yt,{...Sr,visibleYear:Oe.year,visibleMonth:Oe.month,viewMode:k,locale:b,weekStart:q,hasWeeks:K,rangeStart:ra,rangeEnd:ta,hoverDate:ur,isRangeComplete:!G,minDate:N,maxDate:M,memberIndex:p,frequency:X??void 0,onCellSelect:Hr,onCellHover:Ur,onMonthChange:o=>{if(k==="months"||k==="quarters")B(o.year-1),me(o.month);else if(k==="years")B(o.year-10),me(o.month);else{const v=ar(new Date(o.year,o.month,1),-1);B(v.getFullYear()),me(v.getMonth())}},onViewModeChange:o=>pe(o.mode),onDismiss:g})})]});const e=ra?E(ra):null,a=ta?E(ta):null,r=m==="rolling"?((i=A==null?void 0:A.start)==null?void 0:i.key)??null:(e==null?void 0:e.key)??null,n=m==="rolling"?((u=A==null?void 0:A.end)==null?void 0:u.key)??null:(a==null?void 0:a.key)??null,d=p?s.jsx("div",{className:"arvo-drp__tile-panel",children:s.jsx("div",{ref:dr,className:"arvo-drp__mtg-scroll",children:s.jsx("div",{className:"arvo-drp__mtg-grid",role:"grid",children:p.members.map(o=>{const v=m==="rolling"?ol:ra,L=m==="rolling"?il:ta,I=v&&L?!wl(o.keyDate,v)&&!kr(o.keyDate,L):!1,_=r!=null&&o.key===r,D=n!=null&&o.key===n,ve=p.currentIndex!=null&&o.index===p.currentIndex,yr=["arvo-drp__mtg-tile",I&&"in-range",(_||D)&&"selected",ve&&"current-member"].filter(Boolean).join(" "),Fe=o.displayName;return s.jsx("div",{role:"gridcell",tabIndex:ve?0:-1,"aria-selected":_||D,"aria-label":o.displayName,"data-arvo-tooltip":Fe,className:yr,onClick:()=>Qs(o),onPointerEnter:()=>Gr(o),onPointerLeave:()=>Gr(null),children:s.jsx("span",{className:"arvo-drp__mtg-tile-label",children:o.displayName})},o.key)})})})}):null;return m==="member"?s.jsx("div",{className:"arvo-drp__body",children:d}):s.jsxs("div",{className:"arvo-drp__body",children:[s.jsx("div",{className:"arvo-drp__rolling-setting",children:s.jsxs("div",{className:"arvo-drp__rolling-row",children:[s.jsxs("div",{className:"arvo-drp__rolling-block",children:[s.jsx("label",{className:"arvo-drp__rolling-lbl",htmlFor:`${H}-rolling-start`,children:"Start"}),s.jsx(vt,{id:`${H}-rolling-start`,value:de.startOffset,prefix:oe??void 0,prefixTooltip:oe??void 0,isDisabled:W||Y,onChange:Xs})]}),s.jsxs("div",{className:"arvo-drp__rolling-block",children:[s.jsx("label",{className:"arvo-drp__rolling-lbl",htmlFor:`${H}-rolling-end`,children:"End"}),s.jsx(vt,{id:`${H}-rolling-end`,value:de.endOffset,prefix:oe??void 0,prefixTooltip:oe??void 0,isDisabled:W||Y,onChange:el})]})]})}),lt&&s.jsx("div",{className:"arvo-drp__info-alert","aria-live":"polite",children:s.jsx(br,{type:"info",message:lt})}),d]})})(),ut=s.jsxs(s.Fragment,{children:[S&&Ms&&s.jsxs(s.Fragment,{children:[s.jsx(Nl,{label:"Member",isChecked:_e,onChange:e=>Zs(e.isChecked),className:"arvo-drp__hdr-switch"}),s.jsx("span",{className:"arvo-cal-nav__divider","aria-hidden":"true"})]}),s.jsx(rr,{icon:"angle-up",size:"md",variant:"tertiary",tooltip:"Previous",isDisabled:W,onClick:Jr,className:"arvo-cal-nav__prev"}),s.jsx(rr,{icon:"angle-down",size:"md",variant:"tertiary",tooltip:"Next",isDisabled:W,onClick:Xr,className:"arvo-cal-nav__next"}),V&&s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"arvo-cal-nav__divider","aria-hidden":"true"}),s.jsx(bt,{size:"lg",items:it,value:Ye,ariaLabel:"Absolute or Rolling range",onChange:e=>{const a=Array.isArray(e.value)?e.value[0]:e.value;(a==="absolute"||a==="rolling")&&Yr(a)},className:"arvo-drp__hdr-tabs"})]})]}),cl=()=>{var n,d;if(m==="absolute")return S?s.jsx(tr,{className:"arvo-drp__header arvo-drp__header--member-absolute",variant:"range",visibleYear:z,visibleMonth:$,rangeEndYear:Oe.year,rangeEndMonth:Oe.month,viewMode:k==="days"||k==="months"||k==="years"?k:"days",locale:b,minDate:N,maxDate:M,isDisabled:W,onMonthButtonClick:()=>pe(k==="months"?"days":"months"),onYearButtonClick:()=>pe(k==="years"?"days":"years"),rightExtra:ut}):s.jsx(tr,{className:"arvo-drp__header",variant:"range",visibleYear:z,visibleMonth:$,rangeEndYear:Oe.year,rangeEndMonth:Oe.month,viewMode:k==="days"||k==="months"||k==="years"?k:"days",locale:b,minDate:N,maxDate:M,isDisabled:W,onPrev:Jr,onNext:Xr,onToday:tl,onMonthButtonClick:()=>pe(k==="months"?"days":"months"),onYearButtonClick:()=>pe(k==="years"?"days":"years")});if(m==="member")return s.jsx(tr,{className:"arvo-drp__header",variant:"member",visibleYear:z,visibleMonth:$,leftPrimaryLabel:(Pe==null?void 0:Pe.displayName)??"",leftSecondaryLabel:(je==null?void 0:je.displayName)??"",locale:b,isDisabled:W,rightExtra:ut});const e=(Pe==null?void 0:Pe.displayName)??((n=A==null?void 0:A.start)==null?void 0:n.displayName)??"",a=(je==null?void 0:je.displayName)??((d=A==null?void 0:A.end)==null?void 0:d.displayName)??"",r=V?s.jsx(bt,{size:"lg",items:it,value:Ye,ariaLabel:"Absolute or Rolling range",onChange:i=>{const u=Array.isArray(i.value)?i.value[0]:i.value;(u==="absolute"||u==="rolling")&&Yr(u)},className:"arvo-drp__hdr-tabs"}):null;return s.jsx(tr,{className:"arvo-drp__header",variant:"member",visibleYear:z,visibleMonth:$,leftPrimaryLabel:e,leftSecondaryLabel:a,locale:b,isDisabled:W,rightExtra:r})},dl=m==="rolling"?s.jsxs("div",{className:"arvo-drp__footer",children:[ot&&s.jsx("span",{className:"arvo-drp__current-ind",children:ot}),s.jsx(Va,{size:"md",variant:"tertiary",label:"Cancel",onClick:aa,className:"arvo-drp__footer-cancel"}),s.jsx(Va,{size:"md",variant:"primary",label:"Save",isDisabled:!al,onClick:rl,className:"arvo-drp__footer-save"})]}):null,ml=["arvo-drp",`arvo-drp--${Fa}`,`arvo-drp--${m}`,sr&&"arvo-drp--full-width",K&&"arvo-drp--show-weeks","open",ge].filter(Boolean).join(" "),pl=m==="rolling"?"Choose a rolling time range":m==="member"?"Choose a time period range":"Choose a date range",fl=m==="rolling"?"Rolling time range mode":m==="member"?"Time period range mode":"Date range mode",ct=f?Dl.createPortal(s.jsx("div",{className:ml,style:{display:"contents"},children:s.jsxs("div",{ref:fe,id:Ae,className:"arvo-drp__popover open",role:"dialog","aria-label":pl,"aria-modal":!1,style:ll,tabIndex:-1,children:[s.jsx("span",{className:"arvo-sr-only","aria-live":"polite","aria-atomic":"true",children:fl}),cl(),ul,dl]})}),document.body):null;return xe?s.jsx("div",{ref:Q,id:H,className:et,style:rt,children:ct}):s.jsxs("div",{ref:Q,id:H,className:et,style:rt,children:[Ne&&s.jsx(Ml,{htmlFor:`${ir}-start`,id:qs,isRequired:Dr,isDisabled:W,isInvalid:We,className:"arvo-drp__lbl",children:Ne}),s.jsxs("div",{ref:Ge,className:"arvo-drp__field",children:[s.jsxs("div",{className:"arvo-drp__value",children:[s.jsx("input",{ref:Le,id:`${ir}-start`,type:"text",className:"arvo-drp__seg arvo-drp__seg--start",role:"combobox",value:Tr,placeholder:nt,disabled:W,readOnly:!w,autoComplete:"off","aria-haspopup":"dialog","aria-expanded":f,"aria-controls":Ae,"aria-required":Dr||void 0,"aria-invalid":lr||We||void 0,"aria-disabled":W||void 0,"aria-busy":void 0,"aria-label":`${st} start`,"aria-describedby":tt?Rr:void 0,onChange:xt,onKeyDown:Kr("start"),onFocus:Fr("start"),onBlur:Br("start"),onMouseDown:w?zr("start"):void 0,onPaste:w?$r("start"):void 0}),s.jsx("span",{className:"arvo-drp__arrow","aria-hidden":"true",children:Il}),s.jsx("input",{ref:Ua,id:`${ir}-end`,type:"text",className:"arvo-drp__seg arvo-drp__seg--end",role:"combobox",value:Lr,placeholder:nt,disabled:W,readOnly:!w,autoComplete:"off","aria-haspopup":"dialog","aria-expanded":f,"aria-controls":Ae,"aria-invalid":lr||We||void 0,"aria-disabled":W||void 0,"aria-label":`${st} end`,onChange:xt,onKeyDown:Kr("end"),onFocus:Fr("end"),onBlur:Br("end"),onMouseDown:w?zr("end"):void 0,onPaste:w?$r("end"):void 0})]}),(()=>{const e=Cs&&qr&&!W&&!Y&&!ge&&!gr,a=e||gr;return s.jsxs("div",{ref:Ga,className:"arvo-drp__actions",children:[e&&s.jsx(rr,{size:"sm",variant:"tertiary",icon:"close",tooltip:"Clear",tabIndex:-1,onClick:Gs,className:"arvo-drp__clear-btn"}),gr&&s.jsx(br,{type:"negative",isInline:!0,message:Ze??"",className:"arvo-drp__err-ico"}),a&&s.jsx("span",{className:"arvo-drp__seg-divider","aria-hidden":"true"}),s.jsx(rr,{size:"sm",variant:"tertiary",icon:"calendar-o",tooltip:"Select start and end date",isDisabled:W||Y,isSelected:f,onClick:Us,className:"arvo-drp__trigger-btn","aria-haspopup":"dialog","aria-expanded":f,"aria-controls":Ae})]})})(),s.jsx("div",{className:"arvo-drp__border"}),Te&&s.jsx(Al,{variant:Te.variant,size:Te.size??"sm",className:"arvo-drp__indicator"})]}),tt&&s.jsx(br,{type:"negative",id:Rr,message:Ze,className:"arvo-drp__err-msg"}),ct]})});O.displayName="ArvoDateRangePicker";O.__docgenInfo={description:"",methods:[{name:"open",docblock:null,modifiers:[],params:[],returns:null},{name:"close",docblock:null,modifiers:[],params:[],returns:null},{name:"toggle",docblock:null,modifiers:[],params:[{name:"force",optional:!0,type:{name:"boolean"}}],returns:null},{name:"range",docblock:null,modifiers:[],params:[{name:"v",optional:!0,type:null}],returns:null},{name:"memberRange",docblock:null,modifiers:[],params:[{name:"v",optional:!0,type:null}],returns:null},{name:"rolling",docblock:null,modifiers:[],params:[{name:"v",optional:!0,type:null}],returns:null},{name:"mode",docblock:null,modifiers:[],params:[{name:"m",optional:!0,type:null}],returns:null},{name:"memberToggle",docblock:null,modifiers:[],params:[{name:"v",optional:!0,type:null}],returns:null},{name:"clear",docblock:null,modifiers:[],params:[],returns:null},{name:"disabled",docblock:null,modifiers:[],params:[{name:"state",optional:!0,type:null}],returns:null},{name:"setError",docblock:null,modifiers:[],params:[{name:"message",optional:!1,type:{name:"union",raw:"string | false",elements:[{name:"string"},{name:"literal",value:"false"}]}}],returns:null},{name:"setLoading",docblock:null,modifiers:[],params:[{name:"loading",optional:!1,type:{name:"boolean"}}],returns:null},{name:"indicator",docblock:null,modifiers:[],params:[{name:"v",optional:!0,type:null}],returns:null},{name:"focus",docblock:null,modifiers:[],params:[],returns:null},{name:"destroy",docblock:null,modifiers:[],params:[],returns:null}],displayName:"ArvoDateRangePicker",props:{startValue:{required:!1,tsType:{name:"union",raw:"Date | string | null",elements:[{name:"Date"},{name:"string"},{name:"null"}]},description:"Range start. Parsed via parseDate(value, format, locale)."},endValue:{required:!1,tsType:{name:"union",raw:"Date | string | null",elements:[{name:"Date"},{name:"string"},{name:"null"}]},description:"Range end. Parsed via parseDate(value, format, locale)."},format:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:".NET / Kendo date format. Empty resolves to locale default."},locale:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"BCP-47 locale."},weekStart:{required:!1,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:"First day of week. 0=Sunday, 1=Monday, ... 6=Saturday.",defaultValue:{value:"0",computed:!1}},hasWeeks:{required:!1,tsType:{name:"boolean"},description:"Show ISO week numbers column. Defaults to true for range picker.",defaultValue:{value:"true",computed:!1}},minDate:{required:!1,tsType:{name:"union",raw:"Date | string | null",elements:[{name:"Date"},{name:"string"},{name:"null"}]},description:"Min selectable date (inclusive)."},maxDate:{required:!1,tsType:{name:"union",raw:"Date | string | null",elements:[{name:"Date"},{name:"string"},{name:"null"}]},description:"Max selectable date (inclusive)."},placeholder:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Placeholder text shown when no range is set."},label:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Form label text. Uses form-label shared pattern."},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'lg'"}]},description:"Trigger size. Applies arvo-drp--sm or arvo-drp--lg modifier.",defaultValue:{value:"'lg'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:'CSS width on the trigger (e.g. "200px", "50%"). Defaults to 300px.'},isFullWidth:{required:!1,tsType:{name:"boolean"},description:'Shorthand for width="100%". Applies arvo-drp--full-width modifier.',defaultValue:{value:"false",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state. Applies is-disabled class and aria-disabled.",defaultValue:{value:"false",computed:!1}},isReadOnly:{required:!1,tsType:{name:"boolean"},description:"Read-only. Applies is-readonly class.",defaultValue:{value:"false",computed:!1}},isRequired:{required:!1,tsType:{name:"boolean"},description:"Required for forms. Applies aria-required.",defaultValue:{value:"false",computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:"Validation invalid. Applies has-error class and aria-invalid.",defaultValue:{value:"false",computed:!1}},errorMsg:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Error message text. Used by msg-alert shared pattern."},errorDisplay:{required:!1,tsType:{name:"union",raw:"'inline' | 'tooltip' | 'none'",elements:[{name:"literal",value:"'inline'"},{name:"literal",value:"'tooltip'"},{name:"literal",value:"'none'"}]},description:"How to render error feedback.",defaultValue:{value:"'inline'",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"Loading state (Pattern C). Applies loading class and aria-busy.",defaultValue:{value:"false",computed:!1}},isClearable:{required:!1,tsType:{name:"boolean"},description:"When true and a range is set, renders a clear icon button in the action\noverlay to clear both start and end. Defaults to `false`.",defaultValue:{value:"false",computed:!1}},isAutoClose:{required:!1,tsType:{name:"boolean"},description:`Auto-close on commit. Applies to absolute / member modes only; rolling is
always footer-controlled regardless of this flag.`,defaultValue:{value:"true",computed:!1}},isStrictParsing:{required:!1,tsType:{name:"boolean"},description:"Reject partial format parses (reserved for future engine pass).",defaultValue:{value:"false",computed:!1}},isSegmented:{required:!1,tsType:{name:"boolean"},description:"Use isSegmented input editing in the trigger (dual-range segments).",defaultValue:{value:"true",computed:!1}},frequency:{required:!1,tsType:{name:"union",raw:"Frequency | null",elements:[{name:"Frequency"},{name:"null"}]},description:`Frequency for member data. With memberData provided, enables the member
capability (toggle + tile panel).`,defaultValue:{value:"null",computed:!1}},memberData:{required:!1,tsType:{name:"union",raw:"MemberItem[] | null",elements:[{name:"Array",elements:[{name:"MemberItem"}],raw:"MemberItem[]"},{name:"null"}]},description:"Generic member data (key/name/displayName/index).",defaultValue:{value:"null",computed:!1}},currentMemberIndex:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:`Index of the current member in the timeline. Consumer maps platform-
specific IsCurrentBucketIndex (ADR-5). Required for rolling math; the
member-tile panel uses it to draw the current-member highlight.`,defaultValue:{value:"null",computed:!1}},hasModeToggle:{required:!1,tsType:{name:"boolean"},description:"Show the member-mode switch when member capability is active.",defaultValue:{value:"true",computed:!1}},hasRolling:{required:!1,tsType:{name:"boolean"},description:"Enable the Rolling tab and rolling popover layer.",defaultValue:{value:"false",computed:!1}},rollingPrefix:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:`Prefix label shown on the rolling stepper (e.g. "CW", "CY", "FY", "CM").
Required when rolling=true.`,defaultValue:{value:"null",computed:!1}},rollingValue:{required:!1,tsType:{name:"union",raw:"RollingRange | null",elements:[{name:"RollingRange"},{name:"null"}]},description:"Current rolling offsets {startOffset, endOffset}.",defaultValue:{value:"null",computed:!1}},indicator:{required:!1,tsType:{name:"union",raw:"ArvoIndicatorDescriptor | null",elements:[{name:"ArvoIndicatorDescriptor"},{name:"null"}]},description:`Optional indicator pinned to the top-right corner of the trigger field.
Pass an indicator descriptor to render; pass null (or omit) to hide.

The indicator slot is fully consumer-controlled: the picker never sets
it implicitly. This includes the rolling Save flow -- the consumer is
responsible for showing an \`unsaved\` indicator after Save fires (e.g.
by setting state in the onChange/onSave handler) and clearing it once
the host application has processed the apply.

Establishes the indicator-on-component contract that other Arvo
components will adopt: the same \`indicator\` prop shape will be exposed
across the design system so consumers learn one pattern.`},anchor:{required:!1,tsType:{name:"union",raw:"false | true | HTMLElement | RefObject<HTMLElement> | string",elements:[{name:"literal",value:"false"},{name:"literal",value:"true"},{name:"HTMLElement"},{name:"RefObject",elements:[{name:"HTMLElement"}],raw:"RefObject<HTMLElement>"},{name:"string"}]},description:"Overlay-only mode (ADR-10).",defaultValue:{value:"false",computed:!1}},placement:{required:!1,tsType:{name:"union",raw:"'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'auto'",elements:[{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'auto'"}]},description:"Popover placement relative to the trigger.",defaultValue:{value:"'bottom-end'",computed:!1}},zIndex:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:"Popover z-index override."},calendarProps:{required:!1,tsType:{name:"Pick",elements:[{name:"ArvoCalendarProps"},{name:"union",raw:"'hasOutsideDays' | 'isKeyboardEnabled' | 'size'",elements:[{name:"literal",value:"'hasOutsideDays'"},{name:"literal",value:"'isKeyboardEnabled'"},{name:"literal",value:"'size'"}]}],raw:`Pick<
  ArvoCalendarProps,
  'hasOutsideDays' | 'isKeyboardEnabled' | 'size'
>`},description:"Escape hatch for inner `ArvoCalendar` config the parent doesn't\nexpose flat. Applies to BOTH absolute-mode calendars (member-mode\ntile panel is parent-owned and not affected). Bag-only knobs\n(`hasOutsideDays`, `isKeyboardEnabled`, `size`) flow through. Flat\nprops always win on overlap. See\n`apps/docs/docs/usage/composition.mdx` (Scoped configuration props)."},popoverProps:{required:!1,tsType:{name:"DateRangePickerPopoverProps"},description:"Escape hatch for popover surface options the parent doesn't expose\nflat. DateRangePicker portals a custom overlay (not `ArvoPopover`).\nBag-only knobs (`width`, `offset`) flow through; flat options\n(`placement`, `zIndex`) always win on overlap."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(payload: {
  start: Date | null;
  end: Date | null;
  formatted: { start: string; end: string };
  mode: ArvoDateRangePickerMode;
  memberRange?: { start: NormalizedMember | null; end: NormalizedMember | null };
  rollingValue?: RollingRange;
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  start: Date | null;
  end: Date | null;
  formatted: { start: string; end: string };
  mode: ArvoDateRangePickerMode;
  memberRange?: { start: NormalizedMember | null; end: NormalizedMember | null };
  rollingValue?: RollingRange;
}`,signature:{properties:[{key:"start",value:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}],required:!0}},{key:"end",value:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}],required:!0}},{key:"formatted",value:{name:"signature",type:"object",raw:"{ start: string; end: string }",signature:{properties:[{key:"start",value:{name:"string",required:!0}},{key:"end",value:{name:"string",required:!0}}]},required:!0}},{key:"mode",value:{name:"union",raw:"'absolute' | 'member' | 'rolling'",elements:[{name:"literal",value:"'absolute'"},{name:"literal",value:"'member'"},{name:"literal",value:"'rolling'"}],required:!0}},{key:"memberRange",value:{name:"signature",type:"object",raw:"{ start: NormalizedMember | null; end: NormalizedMember | null }",signature:{properties:[{key:"start",value:{name:"union",raw:"NormalizedMember | null",elements:[{name:"NormalizedMember"},{name:"null"}],required:!0}},{key:"end",value:{name:"union",raw:"NormalizedMember | null",elements:[{name:"NormalizedMember"},{name:"null"}],required:!0}}]},required:!1}},{key:"rollingValue",value:{name:"RollingRange",required:!1}}]}},name:"payload"}],return:{name:"void"}}},description:"Called when the committed range or rolling value changes."},onModeChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(payload: { mode: ArvoDateRangePickerMode }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ mode: ArvoDateRangePickerMode }",signature:{properties:[{key:"mode",value:{name:"union",raw:"'absolute' | 'member' | 'rolling'",elements:[{name:"literal",value:"'absolute'"},{name:"literal",value:"'member'"},{name:"literal",value:"'rolling'"}],required:!0}}]}},name:"payload"}],return:{name:"void"}}},description:"Called when active mode changes (switch or tab)."},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => boolean | void",signature:{arguments:[],return:{name:"union",raw:"boolean | void",elements:[{name:"boolean"},{name:"void"}]}}},description:"Called when popover is about to open. Return false to cancel."},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => boolean | void",signature:{arguments:[],return:{name:"union",raw:"boolean | void",elements:[{name:"boolean"},{name:"void"}]}}},description:"Called when popover is about to close. Return false to cancel."},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when rolling Cancel is activated."},onSave:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when rolling Save is activated."},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""}}};const ql={title:"Date & Time/DateRangePicker",component:O,tags:["!dev","stable"],argTypes:{startValue:{control:{type:"text"},description:"Controlled start date. Accepts Date, ISO string, or null."},endValue:{control:{type:"text"},description:"Controlled end date. Accepts Date, ISO string, or null."},format:{control:{type:"text"},description:".NET / Kendo date format string. Empty resolves to locale default."},locale:{control:{type:"text"},description:'BCP-47 locale (e.g. "en-US", "de-DE").'},weekStart:{control:{type:"select"},options:[0,1,2,3,4,5,6],description:"First day of week. 0=Sunday, 1=Monday, ... 6=Saturday.",table:{defaultValue:{summary:"0"}}},hasWeeks:{control:{type:"boolean"},description:"Show ISO-8601 week numbers column. Defaults true for range picker.",table:{defaultValue:{summary:"true"}}},minDate:{control:{type:"text"},description:"Min selectable date (inclusive)."},maxDate:{control:{type:"text"},description:"Max selectable date (inclusive)."},placeholder:{control:{type:"text"},description:"Placeholder text shown when no range is set."},label:{control:{type:"text"},description:"Field label rendered above the trigger."},size:{control:{type:"select"},options:["sm","lg"],description:"Trigger size. sm: 24px input field; lg: 32px (default).",table:{defaultValue:{summary:"lg"}}},width:{control:{type:"text"},description:"CSS width on the trigger field. Default: 300px."},isFullWidth:{control:{type:"boolean"},description:'Shorthand for width="100%".',table:{defaultValue:{summary:"false"}}},isDisabled:{control:{type:"boolean"},description:"Disable the picker.",table:{defaultValue:{summary:"false"}}},isReadOnly:{control:{type:"boolean"},description:"Read-only mode. Shows value but prevents editing.",table:{defaultValue:{summary:"false"}}},isRequired:{control:{type:"boolean"},description:"Required field indicator.",table:{defaultValue:{summary:"false"}}},isInvalid:{control:{type:"boolean"},description:"Validation error state.",table:{defaultValue:{summary:"false"}}},errorMsg:{control:{type:"text"},description:"Error message shown when isInvalid is true."},errorDisplay:{control:{type:"select"},options:["inline","tooltip","none"],description:"How to render error feedback.",table:{defaultValue:{summary:"inline"}}},isLoading:{control:{type:"boolean"},description:"Loading state (Pattern C). Spinner replaces trigger; popover cannot open.",table:{defaultValue:{summary:"false"}}},isAutoClose:{control:{type:"boolean"},description:"Close popover automatically on commit (absolute / member only).",table:{defaultValue:{summary:"true"}}},frequency:{control:{type:"select"},options:[void 0,"day","week","month","quarter","year"],description:"Frequency for member data. Combined with memberData, enables the member capability."},hasRolling:{control:{type:"boolean"},description:"Enable the Rolling tab and rolling popover layer.",table:{defaultValue:{summary:"false"}}},rollingPrefix:{control:{type:"text"},description:'Prefix label shown on the rolling stepper (e.g. "CW", "FY", "CM").'},hasModeToggle:{control:{type:"boolean"},description:"Show the absolute/member switch when member capability is active.",table:{defaultValue:{summary:"true"}}},placement:{control:{type:"select"},options:["top-start","top-end","bottom-start","bottom-end","auto"],description:"Popover placement relative to the trigger field.",table:{defaultValue:{summary:"bottom-start"}}},onChange:{action:"changed",table:{category:"Events"}},onModeChange:{action:"mode-changed",table:{category:"Events"}},onOpen:{action:"opened",table:{category:"Events"}},onClose:{action:"closed",table:{category:"Events"}},onSave:{action:"saved",table:{category:"Events"}},onCancel:{action:"canceled",table:{category:"Events"}}},args:{size:"lg",isDisabled:!1,isReadOnly:!1,isRequired:!1,isInvalid:!1,isLoading:!1,isFullWidth:!1,hasWeeks:!0,isAutoClose:!0,errorDisplay:"inline",placement:"bottom-start",weekStart:0,hasRolling:!1,hasModeToggle:!0},parameters:{docs:{description:{component:`Consolidated CSF for ArvoDateRangePicker.\r

All stories are docs-only (\`tags: ['!dev', 'stable']\`): they render on the\r
attached \`DateRangePicker.mdx\` page (the single sidebar node for this\r
component), not as their own sidebar leaves. \`DateRangePicker.mdx\` references\r
these stories with Doc Blocks.\r

Buckets within this file:\r
  - Default / Playground -- live controls for every prop (drives the docs page)\r
  - Sizes / Layout / States / Applied / Format / Constraints / Layers / Indicator / Behavior / Anchor / Scoped -- frozen single-prop snapshots\r
  - Examples             -- composition recipes (absolute / member / rolling)`}}}},we=[{key:"2026/05/04",name:"W18",displayName:"W18-2026"},{key:"2026/05/11",name:"W19",displayName:"W19-2026"},{key:"2026/05/18",name:"W20",displayName:"W20-2026"},{key:"2026/05/25",name:"W21",displayName:"W21-2026"},{key:"2026/06/01",name:"W22",displayName:"W22-2026"},{key:"2026/06/08",name:"W23",displayName:"W23-2026"},{key:"2026/06/15",name:"W24",displayName:"W24-2026"},{key:"2026/06/22",name:"W25",displayName:"W25-2026"},{key:"2026/06/29",name:"W26",displayName:"W26-2026"},{key:"2026/07/06",name:"W27",displayName:"W27-2026"},{key:"2026/07/13",name:"W28",displayName:"W28-2026"},{key:"2026/07/20",name:"W29",displayName:"W29-2026"},{key:"2026/07/27",name:"W30",displayName:"W30-2026"},{key:"2026/08/03",name:"W31",displayName:"W31-2026"},{key:"2026/08/10",name:"W32",displayName:"W32-2026"},{key:"2026/08/17",name:"W33",displayName:"W33-2026"},{key:"2026/08/24",name:"W34",displayName:"W34-2026"},{key:"2026/08/31",name:"W35",displayName:"W35-2026"},{key:"2026/09/07",name:"W36",displayName:"W36-2026"},{key:"2026/09/14",name:"W37",displayName:"W37-2026"},{key:"2026/09/21",name:"W38",displayName:"W38-2026"},{key:"2026/09/28",name:"W39",displayName:"W39-2026"},{key:"2026/10/05",name:"W40",displayName:"W40-2026"},{key:"2026/10/12",name:"W41",displayName:"W41-2026"},{key:"2026/10/19",name:"W42",displayName:"W42-2026"},{key:"2026/10/26",name:"W43",displayName:"W43-2026"},{key:"2026/11/02",name:"W44",displayName:"W44-2026"},{key:"2026/11/09",name:"W45",displayName:"W45-2026"},{key:"2026/11/16",name:"W46",displayName:"W46-2026"},{key:"2026/11/23",name:"W47",displayName:"W47-2026"},{key:"2026/11/30",name:"W48",displayName:"W48-2026"},{key:"2026/12/07",name:"W49",displayName:"W49-2026"},{key:"2026/12/14",name:"W50",displayName:"W50-2026"},{key:"2026/12/21",name:"W51",displayName:"W51-2026"},{key:"2026/12/28",name:"W52",displayName:"W52-2026"},{key:"2027/01/04",name:"W1",displayName:"W1-2027"},{key:"2027/01/11",name:"W2",displayName:"W2-2027"},{key:"2027/01/18",name:"W3",displayName:"W3-2027"},{key:"2027/01/25",name:"W4",displayName:"W4-2027"},{key:"2027/02/01",name:"W5",displayName:"W5-2027"},{key:"2027/02/08",name:"W6",displayName:"W6-2027"},{key:"2027/02/15",name:"W7",displayName:"W7-2027"},{key:"2027/02/22",name:"W8",displayName:"W8-2027"},{key:"2027/03/01",name:"W9",displayName:"W9-2027"},{key:"2027/03/08",name:"W10",displayName:"W10-2027"},{key:"2027/03/15",name:"W11",displayName:"W11-2027"},{key:"2027/03/22",name:"W12",displayName:"W12-2027"},{key:"2027/03/29",name:"W13",displayName:"W13-2027"},{key:"2027/04/05",name:"W14",displayName:"W14-2027"},{key:"2027/04/12",name:"W15",displayName:"W15-2027"},{key:"2027/04/19",name:"W16",displayName:"W16-2027"},{key:"2027/04/26",name:"W17",displayName:"W17-2027"},{key:"2027/05/03",name:"W18",displayName:"W18-2027"},{key:"2027/05/10",name:"W19",displayName:"W19-2027"},{key:"2027/05/17",name:"W20",displayName:"W20-2027"},{key:"2027/05/24",name:"W21",displayName:"W21-2027"},{key:"2027/05/31",name:"W22",displayName:"W22-2027"},{key:"2027/06/07",name:"W23",displayName:"W23-2027"},{key:"2027/06/14",name:"W24",displayName:"W24-2027"},{key:"2027/06/21",name:"W25",displayName:"W25-2027"},{key:"2027/06/28",name:"W26",displayName:"W26-2027"},{key:"2027/07/05",name:"W27",displayName:"W27-2027"},{key:"2027/07/12",name:"W28",displayName:"W28-2027"},{key:"2027/07/19",name:"W29",displayName:"W29-2027"},{key:"2027/07/26",name:"W30",displayName:"W30-2027"},{key:"2027/08/02",name:"W31",displayName:"W31-2027"},{key:"2027/08/09",name:"W32",displayName:"W32-2027"},{key:"2027/08/16",name:"W33",displayName:"W33-2027"},{key:"2027/08/23",name:"W34",displayName:"W34-2027"},{key:"2027/08/30",name:"W35",displayName:"W35-2027"},{key:"2027/09/06",name:"W36",displayName:"W36-2027"},{key:"2027/09/13",name:"W37",displayName:"W37-2027"},{key:"2027/09/20",name:"W38",displayName:"W38-2027"},{key:"2027/09/27",name:"W39",displayName:"W39-2027"},{key:"2027/10/04",name:"W40",displayName:"W40-2027"},{key:"2027/10/11",name:"W41",displayName:"W41-2027"},{key:"2027/10/18",name:"W42",displayName:"W42-2027"},{key:"2027/10/25",name:"W43",displayName:"W43-2027"},{key:"2027/11/01",name:"W44",displayName:"W44-2027"},{key:"2027/11/08",name:"W45",displayName:"W45-2027"},{key:"2027/11/15",name:"W46",displayName:"W46-2027"},{key:"2027/11/22",name:"W47",displayName:"W47-2027"},{key:"2027/11/29",name:"W48",displayName:"W48-2027"},{key:"2027/12/06",name:"W49",displayName:"W49-2027"},{key:"2027/12/13",name:"W50",displayName:"W50-2027"},{key:"2027/12/20",name:"W51",displayName:"W51-2027"},{key:"2027/12/27",name:"W52",displayName:"W52-2027"},{key:"2028/01/03",name:"W1",displayName:"W1-2028"},{key:"2028/01/10",name:"W2",displayName:"W2-2028"},{key:"2028/01/17",name:"W3",displayName:"W3-2028"},{key:"2028/01/24",name:"W4",displayName:"W4-2028"},{key:"2028/01/31",name:"W5",displayName:"W5-2028"},{key:"2028/02/07",name:"W6",displayName:"W6-2028"},{key:"2028/02/14",name:"W7",displayName:"W7-2028"},{key:"2028/02/21",name:"W8",displayName:"W8-2028"},{key:"2028/02/28",name:"W9",displayName:"W9-2028"},{key:"2028/03/06",name:"W10",displayName:"W10-2028"},{key:"2028/03/13",name:"W11",displayName:"W11-2028"},{key:"2028/03/20",name:"W12",displayName:"W12-2028"},{key:"2028/03/27",name:"W13",displayName:"W13-2028"},{key:"2028/04/03",name:"W14",displayName:"W14-2028"},{key:"2028/04/10",name:"W15",displayName:"W15-2028"},{key:"2028/04/17",name:"W16",displayName:"W16-2028"},{key:"2028/04/24",name:"W17",displayName:"W17-2028"},{key:"2028/05/01",name:"W18",displayName:"W18-2028"}],sa={args:{label:"Pick a date range"}},la={args:{label:"Date range",placeholder:"Select a date range",size:"lg",isAutoClose:!0,weekStart:0,hasWeeks:!0,placement:"bottom-start",errorDisplay:"inline"}},oa={name:"Size: sm",args:{label:"Date range",size:"sm"}},ia={name:"Size: lg (default)",args:{label:"Date range",size:"lg"}},ua={name:"Full Width",args:{label:"Date range",isFullWidth:!0}},ca={name:"Show Weeks Column",args:{label:"Date range",hasWeeks:!0}},da={name:"Hide Weeks Column",args:{label:"Date range",hasWeeks:!1}},ma={args:{label:"Date range",isDisabled:!0}},pa={args:{label:"Date range",isReadOnly:!0,startValue:new Date(2026,5,10),endValue:new Date(2026,5,20)}},fa={args:{label:"Date range",isRequired:!0}},ga={name:"Invalid (inline)",args:{label:"Date range",isInvalid:!0,errorMsg:"Please select a valid date range",errorDisplay:"inline"}},ya={name:"Invalid (tooltip)",args:{label:"Date range",size:"sm",isInvalid:!0,errorMsg:"Please select a valid date range",errorDisplay:"tooltip"}},ba={args:{label:"Date range",isLoading:!0}},va={name:"With Applied Range",args:{label:"Date range",startValue:new Date(2026,5,10),endValue:new Date(2026,5,20)}},ha={name:"Format: yyyy-MM-dd",args:{label:"Date range",format:"yyyy-MM-dd"}},ka={name:"Locale: de-DE",args:{label:"Datumsbereich",locale:"de-DE"}},Da={name:"Min + Max",args:{label:"Date range",minDate:new Date(2026,5,1),maxDate:new Date(2026,5,30),startValue:new Date(2026,5,10),endValue:new Date(2026,5,20)}},Wa={name:"Layer: Absolute (default)",args:{label:"Absolute range"}},xa={name:"Layer: Member",args:{label:"Time period range",frequency:"week",memberData:we,currentMemberIndex:5}},wa={name:"Layer: Member-aware Absolute",args:{label:"Time period range",frequency:"week",memberData:we,currentMemberIndex:5,startValue:new Date(2026,4,4),endValue:new Date(2026,4,17)},play:async({canvasElement:l})=>{const c=l.querySelector(".arvo-drp__trigger-btn");c==null||c.click()}},Sa={name:"Layer: Rolling",args:{label:"Rolling time range",frequency:"week",memberData:we,currentMemberIndex:5,hasRolling:!0,rollingPrefix:"CW",rollingValue:{startOffset:-2,endOffset:2}}},Ra={name:"hasModeToggle: false",args:{label:"Member range (forced)",frequency:"week",memberData:we,currentMemberIndex:5,hasModeToggle:!1}},Ca={name:"Indicator: unsaved (consumer-driven)",args:{label:"Date range",indicator:{variant:"unsaved"}}},Na={name:"Indicator: new (large)",args:{label:"Date range",indicator:{variant:"new",size:"lg"}}},Ma={name:"Indicator + rolling layer",args:{label:"Rolling time range",frequency:"week",memberData:we,currentMemberIndex:5,hasRolling:!0,rollingPrefix:"CW",rollingValue:{startOffset:-2,endOffset:2},indicator:{variant:"unsaved"}}},Aa={name:"isAutoClose: false",args:{label:"Date range",isAutoClose:!1}},Ea={name:"Anchor mode",args:{anchor:"#drp-anchor-demo"},decorators:[l=>s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,alignItems:"flex-start"},children:[s.jsx(Va,{id:"drp-anchor-demo",label:"Pick range",icon:"calendar"}),s.jsx(l,{})]})]},_a={name:"Scoped Calendar Config (calendarProps)",args:{label:"Date range",calendarProps:{hasOutsideDays:!0,isKeyboardEnabled:!0,size:"sm"}}},Ta={name:"Scoped Popover Config (popoverProps)",args:{label:"Date range",popoverProps:{width:"720px",offset:12}}},La={name:"All Sizes",args:{},render:()=>s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,maxWidth:360},children:[s.jsx(O,{label:"Small (sm)",size:"sm"}),s.jsx(O,{label:"Large (lg)",size:"lg"})]})},Ia={name:"All States",args:{},render:()=>s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:16,maxWidth:800},children:[s.jsx(O,{label:"Default"}),s.jsx(O,{label:"Disabled",isDisabled:!0}),s.jsx(O,{label:"Read Only",isReadOnly:!0,startValue:new Date(2026,5,10),endValue:new Date(2026,5,20)}),s.jsx(O,{label:"Invalid",isInvalid:!0,errorMsg:"Please select a valid date range"}),s.jsx(O,{label:"Loading",isLoading:!0})]})},qa={name:"Recipe: Controlled Absolute Range",args:{},render:()=>{const[l,c]=t.useState({start:null,end:null}),y=x=>x?x.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"}):"(none)";return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:400},children:[s.jsx(O,{label:"Reporting period",startValue:l.start,endValue:l.end,onChange:x=>c({start:x.start,end:x.end})}),s.jsxs("span",{children:["Selected: ",y(l.start)," ","—"," ",y(l.end)]}),s.jsx(Va,{label:"Clear",variant:"tertiary",size:"sm",onClick:()=>c({start:null,end:null})})]})}},Pa={name:"Recipe: Member / Timeframe",args:{},render:()=>{var y,x;const[l,c]=t.useState({start:null,end:null});return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:400},children:[s.jsx(O,{label:"Plan period",frequency:"week",memberData:we,currentMemberIndex:5,startValue:l.start,endValue:l.end,onChange:T=>c({start:T.start,end:T.end})}),s.jsxs("span",{children:["Member range: ",((y=l.start)==null?void 0:y.toDateString())??"(none)"," ","—"," ",((x=l.end)==null?void 0:x.toDateString())??"(none)"]})]})}},ja={name:"Recipe: Rolling Time Filter",args:{},render:()=>{const[l,c]=t.useState({start:null,end:null}),[y,x]=t.useState(null),T=y?`CW ${y.startOffset>=0?`+${y.startOffset}`:y.startOffset} — CW ${y.endOffset>=0?`+${y.endOffset}`:y.endOffset}`:"(none)";return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:400},children:[s.jsx(O,{label:"Live forecast window",frequency:"week",memberData:we,currentMemberIndex:5,hasRolling:!0,rollingPrefix:"CW",startValue:l.start,endValue:l.end,rollingValue:y,onChange:q=>{c({start:q.start,end:q.end}),x(q.rollingValue??null)}}),s.jsxs("span",{children:["Rolling expression: ",T]})]})}},Oa={name:"Recipe: Anchor Mode",args:{},render:()=>{var y,x;const[l,c]=t.useState({start:null,end:null});return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,alignItems:"flex-start"},children:[s.jsx(Va,{id:"drp-anchor-recipe-btn",label:"Choose range",icon:"calendar"}),s.jsx(O,{anchor:"#drp-anchor-recipe-btn",onChange:T=>c({start:T.start,end:T.end})}),s.jsxs("span",{children:["Selected: ",((y=l.start)==null?void 0:y.toDateString())??"(none)"," ","—"," ",((x=l.end)==null?void 0:x.toDateString())??"(none)"]})]})}};var wt,St,Rt;sa.parameters={...sa.parameters,docs:{...(wt=sa.parameters)==null?void 0:wt.docs,source:{originalSource:`{
  args: {
    label: 'Pick a date range'
  }
}`,...(Rt=(St=sa.parameters)==null?void 0:St.docs)==null?void 0:Rt.source}}};var Ct,Nt,Mt;la.parameters={...la.parameters,docs:{...(Ct=la.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
  args: {
    label: 'Date range',
    placeholder: 'Select a date range',
    size: 'lg',
    isAutoClose: true,
    weekStart: 0,
    hasWeeks: true,
    placement: 'bottom-start',
    errorDisplay: 'inline'
  }
}`,...(Mt=(Nt=la.parameters)==null?void 0:Nt.docs)==null?void 0:Mt.source}}};var At,Et,_t;oa.parameters={...oa.parameters,docs:{...(At=oa.parameters)==null?void 0:At.docs,source:{originalSource:`{
  name: 'Size: sm',
  args: {
    label: 'Date range',
    size: 'sm'
  }
}`,...(_t=(Et=oa.parameters)==null?void 0:Et.docs)==null?void 0:_t.source}}};var Tt,Lt,It;ia.parameters={...ia.parameters,docs:{...(Tt=ia.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
  name: 'Size: lg (default)',
  args: {
    label: 'Date range',
    size: 'lg'
  }
}`,...(It=(Lt=ia.parameters)==null?void 0:Lt.docs)==null?void 0:It.source}}};var qt,Pt,jt;ua.parameters={...ua.parameters,docs:{...(qt=ua.parameters)==null?void 0:qt.docs,source:{originalSource:`{
  name: 'Full Width',
  args: {
    label: 'Date range',
    isFullWidth: true
  }
}`,...(jt=(Pt=ua.parameters)==null?void 0:Pt.docs)==null?void 0:jt.source}}};var Ot,Vt,Ft;ca.parameters={...ca.parameters,docs:{...(Ot=ca.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
  name: 'Show Weeks Column',
  args: {
    label: 'Date range',
    hasWeeks: true
  }
}`,...(Ft=(Vt=ca.parameters)==null?void 0:Vt.docs)==null?void 0:Ft.source}}};var zt,Bt,$t;da.parameters={...da.parameters,docs:{...(zt=da.parameters)==null?void 0:zt.docs,source:{originalSource:`{
  name: 'Hide Weeks Column',
  args: {
    label: 'Date range',
    hasWeeks: false
  }
}`,...($t=(Bt=da.parameters)==null?void 0:Bt.docs)==null?void 0:$t.source}}};var Kt,Yt,Ht;ma.parameters={...ma.parameters,docs:{...(Kt=ma.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
  args: {
    label: 'Date range',
    isDisabled: true
  }
}`,...(Ht=(Yt=ma.parameters)==null?void 0:Yt.docs)==null?void 0:Ht.source}}};var Ut,Gt,Zt;pa.parameters={...pa.parameters,docs:{...(Ut=pa.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
  args: {
    label: 'Date range',
    isReadOnly: true,
    startValue: new Date(2026, 5, 10),
    endValue: new Date(2026, 5, 20)
  }
}`,...(Zt=(Gt=pa.parameters)==null?void 0:Gt.docs)==null?void 0:Zt.source}}};var Qt,Jt,Xt;fa.parameters={...fa.parameters,docs:{...(Qt=fa.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
  args: {
    label: 'Date range',
    isRequired: true
  }
}`,...(Xt=(Jt=fa.parameters)==null?void 0:Jt.docs)==null?void 0:Xt.source}}};var en,an,rn;ga.parameters={...ga.parameters,docs:{...(en=ga.parameters)==null?void 0:en.docs,source:{originalSource:`{
  name: 'Invalid (inline)',
  args: {
    label: 'Date range',
    isInvalid: true,
    errorMsg: 'Please select a valid date range',
    errorDisplay: 'inline'
  }
}`,...(rn=(an=ga.parameters)==null?void 0:an.docs)==null?void 0:rn.source}}};var tn,nn,sn;ya.parameters={...ya.parameters,docs:{...(tn=ya.parameters)==null?void 0:tn.docs,source:{originalSource:`{
  name: 'Invalid (tooltip)',
  args: {
    label: 'Date range',
    size: 'sm',
    isInvalid: true,
    errorMsg: 'Please select a valid date range',
    errorDisplay: 'tooltip'
  }
}`,...(sn=(nn=ya.parameters)==null?void 0:nn.docs)==null?void 0:sn.source}}};var ln,on,un;ba.parameters={...ba.parameters,docs:{...(ln=ba.parameters)==null?void 0:ln.docs,source:{originalSource:`{
  args: {
    label: 'Date range',
    isLoading: true
  }
}`,...(un=(on=ba.parameters)==null?void 0:on.docs)==null?void 0:un.source}}};var cn,dn,mn;va.parameters={...va.parameters,docs:{...(cn=va.parameters)==null?void 0:cn.docs,source:{originalSource:`{
  name: 'With Applied Range',
  args: {
    label: 'Date range',
    startValue: new Date(2026, 5, 10),
    endValue: new Date(2026, 5, 20)
  }
}`,...(mn=(dn=va.parameters)==null?void 0:dn.docs)==null?void 0:mn.source}}};var pn,fn,gn;ha.parameters={...ha.parameters,docs:{...(pn=ha.parameters)==null?void 0:pn.docs,source:{originalSource:`{
  name: 'Format: yyyy-MM-dd',
  args: {
    label: 'Date range',
    format: 'yyyy-MM-dd'
  }
}`,...(gn=(fn=ha.parameters)==null?void 0:fn.docs)==null?void 0:gn.source}}};var yn,bn,vn;ka.parameters={...ka.parameters,docs:{...(yn=ka.parameters)==null?void 0:yn.docs,source:{originalSource:`{
  name: 'Locale: de-DE',
  args: {
    label: 'Datumsbereich',
    locale: 'de-DE'
  }
}`,...(vn=(bn=ka.parameters)==null?void 0:bn.docs)==null?void 0:vn.source}}};var hn,kn,Dn;Da.parameters={...Da.parameters,docs:{...(hn=Da.parameters)==null?void 0:hn.docs,source:{originalSource:`{
  name: 'Min + Max',
  args: {
    label: 'Date range',
    minDate: new Date(2026, 5, 1),
    maxDate: new Date(2026, 5, 30),
    startValue: new Date(2026, 5, 10),
    endValue: new Date(2026, 5, 20)
  }
}`,...(Dn=(kn=Da.parameters)==null?void 0:kn.docs)==null?void 0:Dn.source}}};var Wn,xn,wn;Wa.parameters={...Wa.parameters,docs:{...(Wn=Wa.parameters)==null?void 0:Wn.docs,source:{originalSource:`{
  name: 'Layer: Absolute (default)',
  args: {
    label: 'Absolute range'
  }
}`,...(wn=(xn=Wa.parameters)==null?void 0:xn.docs)==null?void 0:wn.source}}};var Sn,Rn,Cn;xa.parameters={...xa.parameters,docs:{...(Sn=xa.parameters)==null?void 0:Sn.docs,source:{originalSource:`{
  name: 'Layer: Member',
  args: {
    label: 'Time period range',
    frequency: 'week',
    memberData: SAMPLE_WEEKLY_MEMBERS,
    currentMemberIndex: 5
  }
}`,...(Cn=(Rn=xa.parameters)==null?void 0:Rn.docs)==null?void 0:Cn.source}}};var Nn,Mn,An;wa.parameters={...wa.parameters,docs:{...(Nn=wa.parameters)==null?void 0:Nn.docs,source:{originalSource:`{
  // Demonstrates absolute mode with member capability still configured: the
  // calendar key-highlights member.keyDate cells, day-cells show the member
  // displayName as a tooltip on hover, and start / end inputs always read
  // back as the displayName when not focused.
  name: 'Layer: Member-aware Absolute',
  args: {
    label: 'Time period range',
    frequency: 'week',
    memberData: SAMPLE_WEEKLY_MEMBERS,
    currentMemberIndex: 5,
    startValue: new Date(2026, 4, 4),
    endValue: new Date(2026, 4, 17)
  },
  play: async ({
    canvasElement
  }) => {
    // Open the popover so the calendars + key-highlight cells are visible
    // immediately in the snapshot.
    const trigger = canvasElement.querySelector<HTMLButtonElement>('.arvo-drp__trigger-btn');
    trigger?.click();
  }
}`,...(An=(Mn=wa.parameters)==null?void 0:Mn.docs)==null?void 0:An.source}}};var En,_n,Tn;Sa.parameters={...Sa.parameters,docs:{...(En=Sa.parameters)==null?void 0:En.docs,source:{originalSource:`{
  name: 'Layer: Rolling',
  args: {
    label: 'Rolling time range',
    frequency: 'week',
    memberData: SAMPLE_WEEKLY_MEMBERS,
    currentMemberIndex: 5,
    hasRolling: true,
    rollingPrefix: 'CW',
    rollingValue: {
      startOffset: -2,
      endOffset: 2
    }
  }
}`,...(Tn=(_n=Sa.parameters)==null?void 0:_n.docs)==null?void 0:Tn.source}}};var Ln,In,qn;Ra.parameters={...Ra.parameters,docs:{...(Ln=Ra.parameters)==null?void 0:Ln.docs,source:{originalSource:`{
  name: 'hasModeToggle: false',
  args: {
    label: 'Member range (forced)',
    frequency: 'week',
    memberData: SAMPLE_WEEKLY_MEMBERS,
    currentMemberIndex: 5,
    hasModeToggle: false
  }
}`,...(qn=(In=Ra.parameters)==null?void 0:In.docs)==null?void 0:qn.source}}};var Pn,jn,On;Ca.parameters={...Ca.parameters,docs:{...(Pn=Ca.parameters)==null?void 0:Pn.docs,source:{originalSource:`{
  name: 'Indicator: unsaved (consumer-driven)',
  args: {
    label: 'Date range',
    indicator: {
      variant: 'unsaved'
    }
  }
}`,...(On=(jn=Ca.parameters)==null?void 0:jn.docs)==null?void 0:On.source}}};var Vn,Fn,zn;Na.parameters={...Na.parameters,docs:{...(Vn=Na.parameters)==null?void 0:Vn.docs,source:{originalSource:`{
  name: 'Indicator: new (large)',
  args: {
    label: 'Date range',
    indicator: {
      variant: 'new',
      size: 'lg'
    }
  }
}`,...(zn=(Fn=Na.parameters)==null?void 0:Fn.docs)==null?void 0:zn.source}}};var Bn,$n,Kn;Ma.parameters={...Ma.parameters,docs:{...(Bn=Ma.parameters)==null?void 0:Bn.docs,source:{originalSource:`{
  name: 'Indicator + rolling layer',
  args: {
    label: 'Rolling time range',
    frequency: 'week',
    memberData: SAMPLE_WEEKLY_MEMBERS,
    currentMemberIndex: 5,
    hasRolling: true,
    rollingPrefix: 'CW',
    rollingValue: {
      startOffset: -2,
      endOffset: 2
    },
    indicator: {
      variant: 'unsaved'
    }
  }
}`,...(Kn=($n=Ma.parameters)==null?void 0:$n.docs)==null?void 0:Kn.source}}};var Yn,Hn,Un;Aa.parameters={...Aa.parameters,docs:{...(Yn=Aa.parameters)==null?void 0:Yn.docs,source:{originalSource:`{
  name: 'isAutoClose: false',
  args: {
    label: 'Date range',
    isAutoClose: false
  }
}`,...(Un=(Hn=Aa.parameters)==null?void 0:Hn.docs)==null?void 0:Un.source}}};var Gn,Zn,Qn;Ea.parameters={...Ea.parameters,docs:{...(Gn=Ea.parameters)==null?void 0:Gn.docs,source:{originalSource:`{
  name: 'Anchor mode',
  args: {
    anchor: '#drp-anchor-demo'
  },
  decorators: [Story => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    alignItems: 'flex-start'
  }}>\r
        <ArvoButton id="drp-anchor-demo" label="Pick range" icon="calendar" />\r
        <Story />\r
      </div>]
}`,...(Qn=(Zn=Ea.parameters)==null?void 0:Zn.docs)==null?void 0:Qn.source}}};var Jn,Xn,es;_a.parameters={..._a.parameters,docs:{...(Jn=_a.parameters)==null?void 0:Jn.docs,source:{originalSource:`{
  name: 'Scoped Calendar Config (calendarProps)',
  args: {
    label: 'Date range',
    calendarProps: {
      hasOutsideDays: true,
      isKeyboardEnabled: true,
      size: 'sm'
    }
  }
}`,...(es=(Xn=_a.parameters)==null?void 0:Xn.docs)==null?void 0:es.source}}};var as,rs,ts;Ta.parameters={...Ta.parameters,docs:{...(as=Ta.parameters)==null?void 0:as.docs,source:{originalSource:`{
  name: 'Scoped Popover Config (popoverProps)',
  args: {
    label: 'Date range',
    popoverProps: {
      width: '720px',
      offset: 12
    }
  }
}`,...(ts=(rs=Ta.parameters)==null?void 0:rs.docs)==null?void 0:ts.source}}};var ns,ss,ls;La.parameters={...La.parameters,docs:{...(ns=La.parameters)==null?void 0:ns.docs,source:{originalSource:`{
  name: 'All Sizes',
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    maxWidth: 360
  }}>\r
      <ArvoDateRangePicker label="Small (sm)" size="sm" />\r
      <ArvoDateRangePicker label="Large (lg)" size="lg" />\r
    </div>
}`,...(ls=(ss=La.parameters)==null?void 0:ss.docs)==null?void 0:ls.source}}};var os,is,us;Ia.parameters={...Ia.parameters,docs:{...(os=Ia.parameters)==null?void 0:os.docs,source:{originalSource:`{
  name: 'All States',
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 16,
    maxWidth: 800
  }}>\r
      <ArvoDateRangePicker label="Default" />\r
      <ArvoDateRangePicker label="Disabled" isDisabled />\r
      <ArvoDateRangePicker label="Read Only" isReadOnly startValue={new Date(2026, 5, 10)} endValue={new Date(2026, 5, 20)} />\r
      <ArvoDateRangePicker label="Invalid" isInvalid errorMsg="Please select a valid date range" />\r
      <ArvoDateRangePicker label="Loading" isLoading />\r
    </div>
}`,...(us=(is=Ia.parameters)==null?void 0:is.docs)==null?void 0:us.source}}};var cs,ds,ms;qa.parameters={...qa.parameters,docs:{...(cs=qa.parameters)==null?void 0:cs.docs,source:{originalSource:`{
  name: 'Recipe: Controlled Absolute Range',
  args: {},
  render: () => {
    const [range, setRange] = useState<DateRangeValue>({
      start: null,
      end: null
    });
    const fmt = (d: Date | null): string => d ? d.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }) : '(none)';
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      maxWidth: 400
    }}>\r
        <ArvoDateRangePicker label="Reporting period" startValue={range.start} endValue={range.end} onChange={p => setRange({
        start: p.start,
        end: p.end
      })} />\r
        <span>\r
          Selected: {fmt(range.start)} {'\\u2014'} {fmt(range.end)}\r
        </span>\r
        <ArvoButton label="Clear" variant="tertiary" size="sm" onClick={() => setRange({
        start: null,
        end: null
      })} />\r
      </div>;
  }
}`,...(ms=(ds=qa.parameters)==null?void 0:ds.docs)==null?void 0:ms.source}}};var ps,fs,gs;Pa.parameters={...Pa.parameters,docs:{...(ps=Pa.parameters)==null?void 0:ps.docs,source:{originalSource:`{
  name: 'Recipe: Member / Timeframe',
  args: {},
  render: () => {
    const [range, setRange] = useState<DateRangeValue>({
      start: null,
      end: null
    });
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      maxWidth: 400
    }}>\r
        <ArvoDateRangePicker label="Plan period" frequency="week" memberData={SAMPLE_WEEKLY_MEMBERS} currentMemberIndex={5} startValue={range.start} endValue={range.end} onChange={p => setRange({
        start: p.start,
        end: p.end
      })} />\r
        <span>\r
          Member range: {range.start?.toDateString() ?? '(none)'} {'\\u2014'}{' '}\r
          {range.end?.toDateString() ?? '(none)'}\r
        </span>\r
      </div>;
  }
}`,...(gs=(fs=Pa.parameters)==null?void 0:fs.docs)==null?void 0:gs.source}}};var ys,bs,vs;ja.parameters={...ja.parameters,docs:{...(ys=ja.parameters)==null?void 0:ys.docs,source:{originalSource:`{
  name: 'Recipe: Rolling Time Filter',
  args: {},
  render: () => {
    const [range, setRange] = useState<DateRangeValue>({
      start: null,
      end: null
    });
    const [rolling, setRolling] = useState<RollingRange | null>(null);
    const summary = rolling ? \`CW \${rolling.startOffset >= 0 ? \`+\${rolling.startOffset}\` : rolling.startOffset} \\u2014 CW \${rolling.endOffset >= 0 ? \`+\${rolling.endOffset}\` : rolling.endOffset}\` : '(none)';
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      maxWidth: 400
    }}>\r
        <ArvoDateRangePicker label="Live forecast window" frequency="week" memberData={SAMPLE_WEEKLY_MEMBERS} currentMemberIndex={5} hasRolling rollingPrefix="CW" startValue={range.start} endValue={range.end} rollingValue={rolling} onChange={p => {
        setRange({
          start: p.start,
          end: p.end
        });
        setRolling(p.rollingValue ?? null);
      }} />\r
        <span>Rolling expression: {summary}</span>\r
      </div>;
  }
}`,...(vs=(bs=ja.parameters)==null?void 0:bs.docs)==null?void 0:vs.source}}};var hs,ks,Ds;Oa.parameters={...Oa.parameters,docs:{...(hs=Oa.parameters)==null?void 0:hs.docs,source:{originalSource:`{
  name: 'Recipe: Anchor Mode',
  args: {},
  render: () => {
    const [range, setRange] = useState<DateRangeValue>({
      start: null,
      end: null
    });
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'flex-start'
    }}>\r
        <ArvoButton id="drp-anchor-recipe-btn" label="Choose range" icon="calendar" />\r
        <ArvoDateRangePicker anchor="#drp-anchor-recipe-btn" onChange={p => setRange({
        start: p.start,
        end: p.end
      })} />\r
        <span>\r
          Selected: {range.start?.toDateString() ?? '(none)'} {'\\u2014'}{' '}\r
          {range.end?.toDateString() ?? '(none)'}\r
        </span>\r
      </div>;
  }
}`,...(Ds=(ks=Oa.parameters)==null?void 0:ks.docs)==null?void 0:Ds.source}}};const Pl=["Default","Playground","SizeSm","SizeLg","FullWidth","ShowWeeksColumn","HideWeeksColumn","Disabled","ReadOnly","Required","InvalidInline","InvalidTooltip","Loading","WithAppliedRange","FormatCustom","LocaleGerman","MinMax","AbsoluteLayer","MemberLayer","MemberAbsoluteToggleOff","RollingLayer","ModeToggleDisabled","IndicatorUnsaved","IndicatorNew","IndicatorWithRolling","AutoCloseDisabled","AnchorMode","ScopedCalendarConfig","ScopedPopoverConfig","AllSizes","AllStates","ControlledRange","MemberTimeframe","RollingTimeFilter","AnchorModeCustomTrigger"],lo=Object.freeze(Object.defineProperty({__proto__:null,AbsoluteLayer:Wa,AllSizes:La,AllStates:Ia,AnchorMode:Ea,AnchorModeCustomTrigger:Oa,AutoCloseDisabled:Aa,ControlledRange:qa,Default:sa,Disabled:ma,FormatCustom:ha,FullWidth:ua,HideWeeksColumn:da,IndicatorNew:Na,IndicatorUnsaved:Ca,IndicatorWithRolling:Ma,InvalidInline:ga,InvalidTooltip:ya,Loading:ba,LocaleGerman:ka,MemberAbsoluteToggleOff:wa,MemberLayer:xa,MemberTimeframe:Pa,MinMax:Da,ModeToggleDisabled:Ra,Playground:la,ReadOnly:pa,Required:fa,RollingLayer:Sa,RollingTimeFilter:ja,ScopedCalendarConfig:_a,ScopedPopoverConfig:Ta,ShowWeeksColumn:ca,SizeLg:ia,SizeSm:oa,WithAppliedRange:va,__namedExportsOrder:Pl,default:ql},Symbol.toStringTag,{value:"Module"}));export{La as A,qa as C,lo as D,Ca as I,xa as M,la as P,Sa as R,Ia as a,Wa as b,Da as c,Na as d,Pa as e,ja as f,Oa as g};
