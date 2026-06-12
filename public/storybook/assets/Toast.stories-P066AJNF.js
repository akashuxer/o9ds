import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o,o as Ar,x as Z}from"./iframe-BaOp0t6F.js";import{r as jr}from"./index-BbVYX0ZH.js";import{a as br,r as wr}from"./inline-content-CllLfblQ.js";import{O as kr}from"./OverlayContext-C5RootgB.js";import{A as Pr}from"./Link-NIjDRzO0.js";import{A as c}from"./Button-B8O_kk1m.js";const gr=o.createContext(null);function u(){const r=o.useContext(gr);if(!r)throw new Error("useToast must be used within an ArvoToastProvider");return r}const Cr=new Set(["negative","block"]),Sr=new Set(["negative","block"]),Rr={negative:"Error",block:"Blocked",warning:"Warning",info:"Info",positive:"Success",neutral:"Notification"};let Er=0;function Nr({entry:r,onRemove:s}){const{id:n,type:v="info",title:l,message:A,fadeAway:j=!0,timeout:f=5e3,pauseOnHover:h=!0,icon:T,link:y,className:J,onMouseEnter:w,onMouseLeave:k}=r,t=Cr.has(v)?!1:j,p=Sr.has(v)?"alert":"status",d=o.useRef(null),b=o.useRef(null),C=o.useRef(null),g=o.useRef(null),G=o.useRef(!1),m=o.useCallback(i=>{G.current||(G.current=!0,s(n,i))},[n,s]);o.useEffect(()=>{const i=b.current;if(!i||!l)return;const x=br({element:i,content:l,placement:"bottom-center"});return C.current=x,()=>{x.destroy(),C.current=null}},[l]),o.useEffect(()=>{if(t)return g.current=setTimeout(()=>{const i=d.current;if(!i){m("fade");return}if(Z()){m("fade");return}i.classList.add("is-fading"),i.classList.remove("is-paused");const x=()=>{i.removeEventListener("transitionend",x),m("fade")};i.addEventListener("transitionend",x)},f),()=>{g.current&&clearTimeout(g.current)}},[]);const vr=o.useCallback(()=>{if(w==null||w(),!t||!h)return;g.current&&(clearTimeout(g.current),g.current=null);const i=d.current;i&&(i.classList.add("is-paused"),i.classList.remove("is-fading"))},[t,h,w]),fr=o.useCallback(()=>{if(k==null||k(),!t||!h)return;const i=d.current;i&&i.classList.remove("is-paused"),g.current=setTimeout(()=>{if(!d.current){m("fade");return}if(Z()){m("fade");return}d.current.classList.add("is-fading");const x=()=>{var X;(X=d.current)==null||X.removeEventListener("transitionend",x),m("fade")};d.current.addEventListener("transitionend",x)},f)},[t,h,f,m,k]),hr=o.useCallback(()=>{m("click")},[m]),Tr=o.useCallback(i=>{i.key==="Escape"&&(i.stopPropagation(),m("escape"))},[m]),yr=["arvo-toast",`arvo-toast--${v}`,J].filter(Boolean).join(" "),xr=["arvo-toast__ico","o9con",T?`o9con-${T}`:""].filter(Boolean).join(" ");return e.jsxs("div",{ref:d,className:yr,role:p,"aria-atomic":"true",tabIndex:0,onMouseEnter:vr,onMouseLeave:fr,onKeyDown:Tr,children:[e.jsxs("span",{className:"arvo-sr-only",children:[Rr[v],": "]}),e.jsx("span",{className:xr,"aria-hidden":"true"}),e.jsxs("div",{className:"arvo-toast__content",children:[e.jsxs("div",{children:[l&&e.jsx("p",{ref:b,className:"arvo-toast__title",children:l}),e.jsx("p",{className:"arvo-toast__msg",children:typeof A=="string"?A:wr(A,{profile:"basic-inline"})})]}),y&&e.jsx("div",{className:"arvo-toast__link",children:e.jsx(Pr,{size:"sm",variant:"primary",label:y.label,href:y.href,icon:y.icon,isExternal:y.isExternal,onClick:y.onClick})})]}),e.jsx("button",{className:"arvo-toast__close","aria-label":"Close notification",onClick:hr,type:"button",children:e.jsx("span",{className:"o9con o9con-close"})})]})}const ee="arvo-toast-container";function a({position:r="top-right",children:s}){const[n,v]=o.useState([]),l=o.useRef(null),A=o.useRef(!1),j=o.useRef([]),f=o.useRef(new Set),h=o.useContext(kr)??Ar;if(!l.current&&typeof document<"u"){const t=document.createElement("div");t.className=`arvo-toast-container arvo-toast-container--${r}`,t.setAttribute("role","region"),t.setAttribute("aria-label","Notifications"),l.current=t}o.useEffect(()=>{const t=l.current;if(t)return document.body.appendChild(t),h.open({id:ee,type:"toast",element:t,priority:0,config:{autoCloseOnOutsideClick:!1}}),A.current=!0,()=>{A.current&&(h.close(ee),A.current=!1),t.remove()}},[h]),o.useEffect(()=>{const t=l.current;t&&(t.className=`arvo-toast-container arvo-toast-container--${r}`)},[r]),o.useEffect(()=>{j.current=n;const t=new Set(n.map(p=>p.id));for(const p of f.current)t.has(p)||f.current.delete(p)},[n]);const T=o.useCallback((t,p)=>{var C;if(f.current.has(t))return;const d=j.current.find(g=>g.id===t);if(!d)return;f.current.add(t);try{(C=d.onClose)==null||C.call(d)}catch(g){console.error(g)}const b=l.current;b&&b.dispatchEvent(new CustomEvent("toast:close",{bubbles:!0,cancelable:!1,detail:{id:t,reason:p}})),v(g=>g.filter(G=>G.id!==t))},[]),y=o.useCallback(t=>{const p=`arvo-toast-${++Er}`,d={...t,id:p};return v(b=>[d,...b]),j.current=[d,...j.current],p},[]),J=o.useCallback(t=>{T(t,"programmatic")},[T]),w=o.useCallback(()=>{const t=j.current.map(p=>p.id);for(const p of t)T(p,"programmatic")},[T]),k={show:y,close:J,closeAll:w};return e.jsxs(gr.Provider,{value:k,children:[s,l.current&&jr.createPortal(n.map(t=>e.jsx(Nr,{entry:t,onRemove:T},t.id)),l.current)]})}a.__docgenInfo={description:"",methods:[],displayName:"ArvoToastProvider",props:{position:{required:!1,tsType:{name:"union",raw:"'top-right' | 'bottom-right'",elements:[{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom-right'"}]},description:"",defaultValue:{value:"'top-right'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const mr=()=>{const{show:r}=u();return e.jsx(c,{variant:"primary",label:"Show toast",onClick:()=>r({type:"positive",message:"Saved successfully"})})},_r={title:"Feedback/Toast",component:a,tags:["!dev","stable"],argTypes:{position:{control:{type:"select"},options:["top-right","bottom-right"],table:{defaultValue:{summary:"top-right"}}}},args:{position:"top-right"}},S={args:{position:"top-right"},render:r=>e.jsx(a,{...r,children:e.jsx(mr,{})})},R={args:{position:"top-right"},render:r=>e.jsx(a,{...r,children:e.jsx(mr,{})})},P=({type:r})=>{const{show:s}=u();return e.jsx(c,{variant:"secondary",label:`Show ${r}`,onClick:()=>s({type:r,message:`${r[0].toUpperCase()}${r.slice(1)} message`,title:r})})},E={args:{},render:()=>e.jsx(a,{children:e.jsx(P,{type:"positive"})})},N={args:{},render:()=>e.jsx(a,{children:e.jsx(P,{type:"negative"})})},_={args:{},render:()=>e.jsx(a,{children:e.jsx(P,{type:"warning"})})},L={args:{},render:()=>e.jsx(a,{children:e.jsx(P,{type:"info"})})},H={args:{},render:()=>e.jsx(a,{children:e.jsx(P,{type:"neutral"})})},I={args:{},render:()=>e.jsx(a,{children:e.jsx(P,{type:"block"})})},O={name:"Without Title",args:{},render:()=>{const r=()=>{const{show:s}=u();return e.jsx(c,{variant:"secondary",label:"Show toast",onClick:()=>s({type:"info",message:"Single-line toast without a title"})})};return e.jsx(a,{children:e.jsx(r,{})})}},W={name:"With Link",args:{},render:()=>{const r=()=>{const{show:s}=u();return e.jsx(c,{variant:"secondary",label:"Toast with link",onClick:()=>s({type:"info",title:"New release",message:"Version 2.5 is available.",link:{label:"View changelog",href:"#changelog"}})})};return e.jsx(a,{children:e.jsx(r,{})})}},B={name:"Fade Away (3s timeout)",args:{},render:()=>{const r=()=>{const{show:s}=u();return e.jsx(c,{variant:"secondary",label:"3s toast",onClick:()=>s({type:"positive",message:"Auto-fades in 3 seconds",fadeAway:!0,timeout:3e3})})};return e.jsx(a,{children:e.jsx(r,{})})}},M={name:"No Fade Away (persistent)",args:{},render:()=>{const r=()=>{const{show:s}=u();return e.jsx(c,{variant:"secondary",label:"Persistent toast",onClick:()=>s({type:"warning",message:"Stays until dismissed",fadeAway:!1})})};return e.jsx(a,{children:e.jsx(r,{})})}},D={args:{},render:()=>{const r=()=>{const{show:s}=u();return e.jsx(c,{variant:"secondary",label:"Custom icon",onClick:()=>s({type:"info",icon:"rocket",title:"Launched",message:"Your feature is now live."})})};return e.jsx(a,{children:e.jsx(r,{})})}},$={name:"Hover Pause",args:{},render:()=>{const r=()=>{const{show:s}=u();return e.jsx(c,{variant:"secondary",label:"Hover to pause",onClick:()=>s({type:"info",message:"Hover the toast to pause its timer",fadeAway:!0,timeout:5e3,pauseOnHover:!0})})};return e.jsx(a,{children:e.jsx(r,{})})}},Lr=()=>{const{show:r}=u(),s=["positive","info","neutral","warning","negative","block"];return e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:s.map(n=>e.jsx(c,{variant:"secondary",label:n,onClick:()=>r({type:n,title:n,message:`${n} toast`})},n))})},F={args:{},render:()=>e.jsx(a,{children:e.jsx(Lr,{})})},Hr=()=>{const{show:r}=u(),s=o.useRef(0);return e.jsx(c,{variant:"primary",label:"Push toast",onClick:()=>{s.current+=1,r({type:"info",title:`Toast #${s.current}`,message:"Stacked above the previous one"})}})},V={args:{},render:()=>e.jsx(a,{children:e.jsx(Hr,{})})},Ir=({position:r})=>{const{show:s}=u();return e.jsx(c,{variant:"secondary",label:r,onClick:()=>s({type:"info",message:`Position: ${r}`})})},U={args:{},render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:12},children:["top-right","bottom-right"].map(r=>e.jsx(a,{position:r,children:e.jsx(Ir,{position:r})},r))})},Or=()=>{const{show:r}=u();return e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(c,{variant:"secondary",label:"kbd shortcut",onClick:()=>r({type:"info",title:"Keyboard hint",message:[{type:"text",value:"Press "},{type:"kbd",value:"Esc"},{type:"text",value:" to dismiss this toast."}]})}),e.jsx(c,{variant:"secondary",label:"strong + text",onClick:()=>r({type:"warning",title:"Quota update",message:[{type:"strong",children:"Heads up"},{type:"text",value:" -- you have used "},{type:"strong",children:"85%"},{type:"text",value:" of your storage."}]})}),e.jsx(c,{variant:"secondary",label:"inline link",onClick:()=>r({type:"positive",title:"Update available",message:[{type:"text",value:"Read the "},{type:"link",label:"release notes",href:"https://example.com/release",target:"_blank"},{type:"text",value:" for details."}]})}),e.jsx(c,{variant:"secondary",label:"inline code",onClick:()=>r({type:"neutral",title:"API change",message:[{type:"text",value:"Use the "},{type:"code",value:"data-arvo-loading"},{type:"text",value:" attribute to suspend descendants."}]})})]})},Y={args:{},render:()=>e.jsx(a,{children:e.jsx(Or,{})})},Wr=()=>{const{show:r}=u();return e.jsx(c,{variant:"secondary",label:"Show long title",onClick:()=>r({type:"info",title:"A very long alert title that exceeds the two-line clamp threshold and triggers the tooltip-on-truncation helper so the full text is still readable on hover",message:"Hover the title to see the full text in a tooltip."})})},K={args:{},render:()=>e.jsx(a,{children:e.jsx(Wr,{})})},Br=()=>{const{show:r,close:s}=u(),n=o.useRef(null);return e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(c,{variant:"primary",label:"Show",onClick:()=>{n.current=r({type:"info",message:'Click "Close" to dismiss programmatically',fadeAway:!1})}}),e.jsx(c,{variant:"secondary",label:"Close",onClick:()=>{n.current&&s(n.current)}})]})},q={args:{},render:()=>e.jsx(a,{children:e.jsx(Br,{})})},Mr=()=>{const{show:r}=u(),s=()=>{let n=0;const v=["Connecting...","Authenticated","Sync complete"],l=()=>{n<v.length&&(r({type:n===2?"positive":"info",message:v[n],fadeAway:!0,timeout:1800}),n+=1,setTimeout(l,800))};l()};return e.jsx(c,{variant:"primary",label:"Start sync",onClick:s})},z={args:{},render:()=>e.jsx(a,{children:e.jsx(Mr,{})})},Dr=()=>{const{show:r}=u();return e.jsx(c,{variant:"primary",label:"Trigger error toast",onClick:()=>r({type:"negative",title:"Save failed",message:"Unable to save changes -- check your connection.",fadeAway:!1,link:{label:"Retry",href:"#",onClick:s=>{s.preventDefault()}}})})},Q={args:{},render:()=>e.jsx(a,{children:e.jsx(Dr,{})})};var re,te,se;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    position: 'top-right'
  },
  render: args => <ArvoToastProvider {...args}>\r
      <Demo />\r
    </ArvoToastProvider>
}`,...(se=(te=S.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var oe,ae,ne;R.parameters={...R.parameters,docs:{...(oe=R.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    position: 'top-right'
  },
  render: args => <ArvoToastProvider {...args}>\r
      <Demo />\r
    </ArvoToastProvider>
}`,...(ne=(ae=R.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var ie,ce,le;E.parameters={...E.parameters,docs:{...(ie=E.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {},
  render: () => <ArvoToastProvider><TypeTrigger type="positive" /></ArvoToastProvider>
}`,...(le=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var de,ue,pe;N.parameters={...N.parameters,docs:{...(de=N.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {},
  render: () => <ArvoToastProvider><TypeTrigger type="negative" /></ArvoToastProvider>
}`,...(pe=(ue=N.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var ge,me,ve;_.parameters={..._.parameters,docs:{...(ge=_.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {},
  render: () => <ArvoToastProvider><TypeTrigger type="warning" /></ArvoToastProvider>
}`,...(ve=(me=_.parameters)==null?void 0:me.docs)==null?void 0:ve.source}}};var fe,he,Te;L.parameters={...L.parameters,docs:{...(fe=L.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {},
  render: () => <ArvoToastProvider><TypeTrigger type="info" /></ArvoToastProvider>
}`,...(Te=(he=L.parameters)==null?void 0:he.docs)==null?void 0:Te.source}}};var ye,xe,Ae;H.parameters={...H.parameters,docs:{...(ye=H.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {},
  render: () => <ArvoToastProvider><TypeTrigger type="neutral" /></ArvoToastProvider>
}`,...(Ae=(xe=H.parameters)==null?void 0:xe.docs)==null?void 0:Ae.source}}};var je,be,we;I.parameters={...I.parameters,docs:{...(je=I.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {},
  render: () => <ArvoToastProvider><TypeTrigger type="block" /></ArvoToastProvider>
}`,...(we=(be=I.parameters)==null?void 0:be.docs)==null?void 0:we.source}}};var ke,Pe,Ce;O.parameters={...O.parameters,docs:{...(ke=O.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  name: 'Without Title',
  args: {},
  render: () => {
    const Trigger = () => {
      const {
        show
      } = useToast();
      return <ArvoButton variant="secondary" label="Show toast" onClick={() => show({
        type: 'info',
        message: 'Single-line toast without a title'
      })} />;
    };
    return <ArvoToastProvider><Trigger /></ArvoToastProvider>;
  }
}`,...(Ce=(Pe=O.parameters)==null?void 0:Pe.docs)==null?void 0:Ce.source}}};var Se,Re,Ee;W.parameters={...W.parameters,docs:{...(Se=W.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'With Link',
  args: {},
  render: () => {
    const Trigger = () => {
      const {
        show
      } = useToast();
      return <ArvoButton variant="secondary" label="Toast with link" onClick={() => show({
        type: 'info',
        title: 'New release',
        message: 'Version 2.5 is available.',
        link: {
          label: 'View changelog',
          href: '#changelog'
        }
      })} />;
    };
    return <ArvoToastProvider><Trigger /></ArvoToastProvider>;
  }
}`,...(Ee=(Re=W.parameters)==null?void 0:Re.docs)==null?void 0:Ee.source}}};var Ne,_e,Le;B.parameters={...B.parameters,docs:{...(Ne=B.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  name: 'Fade Away (3s timeout)',
  args: {},
  render: () => {
    const Trigger = () => {
      const {
        show
      } = useToast();
      return <ArvoButton variant="secondary" label="3s toast" onClick={() => show({
        type: 'positive',
        message: 'Auto-fades in 3 seconds',
        fadeAway: true,
        timeout: 3000
      })} />;
    };
    return <ArvoToastProvider><Trigger /></ArvoToastProvider>;
  }
}`,...(Le=(_e=B.parameters)==null?void 0:_e.docs)==null?void 0:Le.source}}};var He,Ie,Oe;M.parameters={...M.parameters,docs:{...(He=M.parameters)==null?void 0:He.docs,source:{originalSource:`{
  name: 'No Fade Away (persistent)',
  args: {},
  render: () => {
    const Trigger = () => {
      const {
        show
      } = useToast();
      return <ArvoButton variant="secondary" label="Persistent toast" onClick={() => show({
        type: 'warning',
        message: 'Stays until dismissed',
        fadeAway: false
      })} />;
    };
    return <ArvoToastProvider><Trigger /></ArvoToastProvider>;
  }
}`,...(Oe=(Ie=M.parameters)==null?void 0:Ie.docs)==null?void 0:Oe.source}}};var We,Be,Me;D.parameters={...D.parameters,docs:{...(We=D.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const Trigger = () => {
      const {
        show
      } = useToast();
      return <ArvoButton variant="secondary" label="Custom icon" onClick={() => show({
        type: 'info',
        icon: 'rocket',
        title: 'Launched',
        message: 'Your feature is now live.'
      })} />;
    };
    return <ArvoToastProvider><Trigger /></ArvoToastProvider>;
  }
}`,...(Me=(Be=D.parameters)==null?void 0:Be.docs)==null?void 0:Me.source}}};var De,$e,Fe;$.parameters={...$.parameters,docs:{...(De=$.parameters)==null?void 0:De.docs,source:{originalSource:`{
  name: 'Hover Pause',
  args: {},
  render: () => {
    const Trigger = () => {
      const {
        show
      } = useToast();
      return <ArvoButton variant="secondary" label="Hover to pause" onClick={() => show({
        type: 'info',
        message: 'Hover the toast to pause its timer',
        fadeAway: true,
        timeout: 5000,
        pauseOnHover: true
      })} />;
    };
    return <ArvoToastProvider><Trigger /></ArvoToastProvider>;
  }
}`,...(Fe=($e=$.parameters)==null?void 0:$e.docs)==null?void 0:Fe.source}}};var Ve,Ue,Ye;F.parameters={...F.parameters,docs:{...(Ve=F.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {},
  render: () => <ArvoToastProvider><AllTypesTrigger /></ArvoToastProvider>
}`,...(Ye=(Ue=F.parameters)==null?void 0:Ue.docs)==null?void 0:Ye.source}}};var Ke,qe,ze;V.parameters={...V.parameters,docs:{...(Ke=V.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  args: {},
  render: () => <ArvoToastProvider><StackedTrigger /></ArvoToastProvider>
}`,...(ze=(qe=V.parameters)==null?void 0:qe.docs)==null?void 0:ze.source}}};var Qe,Ge,Je;U.parameters={...U.parameters,docs:{...(Qe=U.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: 12
  }}>\r
      {(['top-right', 'bottom-right'] as const).map(p => <ArvoToastProvider key={p} position={p}>\r
          <PositionTrigger position={p} />\r
        </ArvoToastProvider>)}\r
    </div>
}`,...(Je=(Ge=U.parameters)==null?void 0:Ge.docs)==null?void 0:Je.source}}};var Xe,Ze,er;Y.parameters={...Y.parameters,docs:{...(Xe=Y.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  args: {},
  render: () => <ArvoToastProvider>\r
      <RichTextTrigger />\r
    </ArvoToastProvider>
}`,...(er=(Ze=Y.parameters)==null?void 0:Ze.docs)==null?void 0:er.source}}};var rr,tr,sr;K.parameters={...K.parameters,docs:{...(rr=K.parameters)==null?void 0:rr.docs,source:{originalSource:`{
  args: {},
  render: () => <ArvoToastProvider>\r
      <TruncatedTitleTrigger />\r
    </ArvoToastProvider>
}`,...(sr=(tr=K.parameters)==null?void 0:tr.docs)==null?void 0:sr.source}}};var or,ar,nr;q.parameters={...q.parameters,docs:{...(or=q.parameters)==null?void 0:or.docs,source:{originalSource:`{
  args: {},
  render: () => <ArvoToastProvider><ProgrammaticTrigger /></ArvoToastProvider>
}`,...(nr=(ar=q.parameters)==null?void 0:ar.docs)==null?void 0:nr.source}}};var ir,cr,lr;z.parameters={...z.parameters,docs:{...(ir=z.parameters)==null?void 0:ir.docs,source:{originalSource:`{
  args: {},
  render: () => <ArvoToastProvider><NotificationStreamTrigger /></ArvoToastProvider>
}`,...(lr=(cr=z.parameters)==null?void 0:cr.docs)==null?void 0:lr.source}}};var dr,ur,pr;Q.parameters={...Q.parameters,docs:{...(dr=Q.parameters)==null?void 0:dr.docs,source:{originalSource:`{
  args: {},
  render: () => <ArvoToastProvider><ErrorRecoveryTrigger /></ArvoToastProvider>
}`,...(pr=(ur=Q.parameters)==null?void 0:ur.docs)==null?void 0:pr.source}}};const $r=["Default","Playground","Positive","Negative","Warning","Info","Neutral","Block","WithoutTitle","WithLink","FadeAway","Persistent","CustomIcon","HoverPause","AllTypes","MultipleStacked","AllPositions","RichTextMessages","TruncatedTitleTooltip","ProgrammaticClose","NotificationStream","ErrorRecoveryToast"],Qr=Object.freeze(Object.defineProperty({__proto__:null,AllPositions:U,AllTypes:F,Block:I,CustomIcon:D,Default:S,ErrorRecoveryToast:Q,FadeAway:B,HoverPause:$,Info:L,MultipleStacked:V,Negative:N,Neutral:H,NotificationStream:z,Persistent:M,Playground:R,Positive:E,ProgrammaticClose:q,RichTextMessages:Y,TruncatedTitleTooltip:K,Warning:_,WithLink:W,WithoutTitle:O,__namedExportsOrder:$r,default:_r},Symbol.toStringTag,{value:"Module"}));export{F as A,D as C,Q as E,B as F,$ as H,V as M,z as N,R as P,Y as R,Qr as T,W,M as a,U as b,q as c};
