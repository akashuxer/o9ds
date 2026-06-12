import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./iframe-BaOp0t6F.js";import{A as T}from"./TimeDropdown-DX9WbY98.js";const je={title:"Advanced/Composition Primitives/TimeDropdown",component:T,tags:["!dev","stable","internal"],argTypes:{format:{control:{type:"text"},description:".NET / Kendo time format string. Determines 12 vs 24-hour mode via shouldUse12Hour(). Required.",table:{defaultValue:{summary:"HH:mm"}}},locale:{control:{type:"text"},description:"BCP-47 locale. Fallback 12/24-hour determinator and source for localized AM/PM tab labels."},interval:{control:{type:"number",min:1,max:60},description:"Minutes between generated time options.",table:{defaultValue:{summary:"15"}}},isDisabled:{control:{type:"boolean"},description:"When true, the whole component is non-interactive.",table:{defaultValue:{summary:"false"}}},onChange:{description:"Called when the user selects a time option.",table:{category:"Events"}},onDismiss:{description:"Called when Escape is pressed.",table:{category:"Events"}}},args:{format:"HH:mm",interval:15,isDisabled:!1},parameters:{docs:{description:{component:"INTERNAL composition primitive. `ArvoTimeDropdown` is the rendering engine\r\nconsumed by ArvoTimePicker / ArvoDateTimePicker. Application code MUST NOT\r\ninitialize it directly. Stories live under `Advanced/Composition Primitives`\r\nand carry the `internal` tag; they are docs-only (`!dev`) and render on the\r\nattached `TimeDropdown.mdx` page."}}}},o={args:{format:"HH:mm"}},a={args:{format:"HH:mm"}},s={args:{format:"hh:mm tt",locale:"en-US"}},t={args:{format:"HH:mm",interval:30}},i={args:{format:"HH:mm",interval:60}},m={args:{format:"HH:mm",interval:5}},d={args:{format:"HH:mm",minTime:{hours:9,minutes:0}}},c={args:{format:"HH:mm",maxTime:{hours:18,minutes:0}}},l={args:{format:"HH:mm",minTime:{hours:9,minutes:0},maxTime:{hours:17,minutes:0}}},u={args:{format:"hh:mm tt",locale:"en-US",minTime:{hours:8,minutes:0},maxTime:{hours:12,minutes:0}}},p={args:{format:"hh:mm tt",locale:"en-US",minTime:{hours:13,minutes:0},maxTime:{hours:18,minutes:0}}},h={args:{format:"HH:mm",value:{hours:14,minutes:30}}},g={args:{format:"HH:mm",isDisabled:!0}},v={args:{format:"HH:mm",locale:"de-DE"}},f={args:{format:"HH:mm"},render:function(){const[r,n]=b.useState(null),S=b.useCallback(D=>{n(D)},[]),y=D=>String(D).padStart(2,"0"),j=r?`${y(r.hours)}:${y(r.minutes)}`:"none";return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Selected:"})," ",j]}),e.jsx(T,{format:"HH:mm",value:r,onChange:S})]})}},H={args:{format:"HH:mm"},render:function(){const[r,n]=b.useState(null);return e.jsx("div",{style:{display:"inline-block",padding:4},children:e.jsx(T,{format:"HH:mm",value:r,onChange:n})})}},x={args:{format:"HH:mm"},render:function(){const[r,n]=b.useState(null),S=j=>String(j).padStart(2,"0"),y=r?`${S(r.hours)}:${S(r.minutes)}`:"none";return e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"flex-start"},children:[e.jsx(T,{format:"HH:mm",value:r,onChange:n}),e.jsxs("div",{style:{padding:"8px 0"},children:[e.jsx("div",{style:{marginBottom:8},children:e.jsx("strong",{children:"Keyboard shortcuts"})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsxs("div",{children:[e.jsx("code",{children:"ArrowUp"})," — Previous option"]}),e.jsxs("div",{children:[e.jsx("code",{children:"ArrowDown"})," — Next option"]}),e.jsxs("div",{children:[e.jsx("code",{children:"Home"})," — First option"]}),e.jsxs("div",{children:[e.jsx("code",{children:"End"})," — Last option"]}),e.jsxs("div",{children:[e.jsx("code",{children:"Enter"})," / ",e.jsx("code",{children:"Space"})," — Select focused option"]}),e.jsxs("div",{children:[e.jsx("code",{children:"ArrowLeft"})," — Switch to AM tab (12-hour mode)"]}),e.jsxs("div",{children:[e.jsx("code",{children:"ArrowRight"})," — Switch to PM tab (12-hour mode)"]}),e.jsxs("div",{children:[e.jsx("code",{children:"Escape"})," — Dismiss"]})]}),e.jsxs("div",{style:{marginTop:12},children:[e.jsx("strong",{children:"Selected:"})," ",y]})]})]})}};var w,M,C;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    format: 'HH:mm'
  }
}`,...(C=(M=o.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var E,P,V;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    format: 'HH:mm'
  }
}`,...(V=(P=a.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var I,O,k;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    format: 'hh:mm tt',
    locale: 'en-US'
  }
}`,...(k=(O=s.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var L,U,K;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    format: 'HH:mm',
    interval: 30
  }
}`,...(K=(U=t.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var $,W,N;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    format: 'HH:mm',
    interval: 60
  }
}`,...(N=(W=i.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var _,R,z;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    format: 'HH:mm',
    interval: 5
  }
}`,...(z=(R=m.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var B,F,q;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    format: 'HH:mm',
    minTime: {
      hours: 9,
      minutes: 0
    }
  }
}`,...(q=(F=d.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var G,J,Q;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    format: 'HH:mm',
    maxTime: {
      hours: 18,
      minutes: 0
    }
  }
}`,...(Q=(J=c.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    format: 'HH:mm',
    minTime: {
      hours: 9,
      minutes: 0
    },
    maxTime: {
      hours: 17,
      minutes: 0
    }
  }
}`,...(Z=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,ne;u.parameters={...u.parameters,docs:{...(ee=u.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    format: 'hh:mm tt',
    locale: 'en-US',
    minTime: {
      hours: 8,
      minutes: 0
    },
    maxTime: {
      hours: 12,
      minutes: 0
    }
  }
}`,...(ne=(re=u.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var oe,ae,se;p.parameters={...p.parameters,docs:{...(oe=p.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    format: 'hh:mm tt',
    locale: 'en-US',
    minTime: {
      hours: 13,
      minutes: 0
    },
    maxTime: {
      hours: 18,
      minutes: 0
    }
  }
}`,...(se=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var te,ie,me;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    format: 'HH:mm',
    value: {
      hours: 14,
      minutes: 30
    }
  }
}`,...(me=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:me.source}}};var de,ce,le;g.parameters={...g.parameters,docs:{...(de=g.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    format: 'HH:mm',
    isDisabled: true
  }
}`,...(le=(ce=g.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var ue,pe,he;v.parameters={...v.parameters,docs:{...(ue=v.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    format: 'HH:mm',
    locale: 'de-DE'
  }
}`,...(he=(pe=v.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var ge,ve,fe;f.parameters={...f.parameters,docs:{...(ge=f.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    format: 'HH:mm'
  },
  render: function ControlledSelectionDemo() {
    const [value, setValue] = useState<TimeObject | null>(null);
    const handleChange = useCallback((time: TimeObject) => {
      setValue(time);
    }, []);
    const pad = (n: number) => String(n).padStart(2, '0');
    const display = value ? \`\${pad(value.hours)}:\${pad(value.minutes)}\` : 'none';
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }}>\r
        <div>\r
          <strong>Selected:</strong> {display}\r
        </div>\r
        <ArvoTimeDropdown format="HH:mm" value={value} onChange={handleChange} />\r
      </div>;
  }
}`,...(fe=(ve=f.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var He,xe,Se;H.parameters={...H.parameters,docs:{...(He=H.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    format: 'HH:mm'
  },
  render: function EmbeddedDemo() {
    const [value, setValue] = useState<TimeObject | null>(null);
    return <div style={{
      display: 'inline-block',
      padding: 4
    }}>\r
        <ArvoTimeDropdown format="HH:mm" value={value} onChange={setValue} />\r
      </div>;
  }
}`,...(Se=(xe=H.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};var ye,be,Te;x.parameters={...x.parameters,docs:{...(ye=x.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    format: 'HH:mm'
  },
  render: function KeyboardWalkthroughDemo() {
    const [value, setValue] = useState<TimeObject | null>(null);
    const pad = (n: number) => String(n).padStart(2, '0');
    const display = value ? \`\${pad(value.hours)}:\${pad(value.minutes)}\` : 'none';
    return <div style={{
      display: 'flex',
      gap: 24,
      alignItems: 'flex-start'
    }}>\r
        <ArvoTimeDropdown format="HH:mm" value={value} onChange={setValue} />\r
        <div style={{
        padding: '8px 0'
      }}>\r
          <div style={{
          marginBottom: 8
        }}>\r
            <strong>Keyboard shortcuts</strong>\r
          </div>\r
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4
        }}>\r
            <div><code>ArrowUp</code> &mdash; Previous option</div>\r
            <div><code>ArrowDown</code> &mdash; Next option</div>\r
            <div><code>Home</code> &mdash; First option</div>\r
            <div><code>End</code> &mdash; Last option</div>\r
            <div><code>Enter</code> / <code>Space</code> &mdash; Select focused option</div>\r
            <div><code>ArrowLeft</code> &mdash; Switch to AM tab (12-hour mode)</div>\r
            <div><code>ArrowRight</code> &mdash; Switch to PM tab (12-hour mode)</div>\r
            <div><code>Escape</code> &mdash; Dismiss</div>\r
          </div>\r
          <div style={{
          marginTop: 12
        }}>\r
            <strong>Selected:</strong> {display}\r
          </div>\r
        </div>\r
      </div>;
  }
}`,...(Te=(be=x.parameters)==null?void 0:be.docs)==null?void 0:Te.source}}};const De=["Playground","Mode24h","Mode12h","Interval30","Interval60","Interval5","MinTimeOnly","MaxTimeOnly","MinAndMax","MinAndMax12h","AmTabDisabled","WithSelectedValue","IsDisabled","LongLocaleLabels","ControlledSelection","EmbeddedInPopover","KeyboardWalkthrough"],Ce=Object.freeze(Object.defineProperty({__proto__:null,AmTabDisabled:p,ControlledSelection:f,EmbeddedInPopover:H,Interval30:t,Interval5:m,Interval60:i,IsDisabled:g,KeyboardWalkthrough:x,LongLocaleLabels:v,MaxTimeOnly:c,MinAndMax:l,MinAndMax12h:u,MinTimeOnly:d,Mode12h:s,Mode24h:a,Playground:o,WithSelectedValue:h,__namedExportsOrder:De,default:je},Symbol.toStringTag,{value:"Module"}));export{f as C,H as E,x as K,a as M,o as P,Ce as T,s as a};
