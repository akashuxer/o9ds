import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./iframe-BaOp0t6F.js";import{u as V}from"./useTooltip-DZu1XpnP.js";import{A as v}from"./Button-B8O_kk1m.js";import{A as n}from"./IconButton-BgwDUYzG.js";const o=y.forwardRef(function({content:Z,placement:L,shortcut:M,children:h},g){const f=y.useRef(null);return V({triggerRef:f,tooltip:{content:Z,placement:L,shortcut:M}}),y.isValidElement(h)?y.cloneElement(h,{ref:a=>{f.current=a,typeof g=="function"?g(a):g&&(g.current=a);const r=h.ref;typeof r=="function"?r(a):r&&typeof r=="object"&&"current"in r&&(r.current=a)}}):h});o.__docgenInfo={description:'Standalone tooltip wrapper component. Wraps a single interactive child\nand attaches tooltip behavior (hover/focus display, ARIA, positioning).\n\n```tsx\n<ArvoTooltip content="Save document" shortcut="Ctrl+S">\n  <button>Save</button>\n</ArvoTooltip>\n```\n\n**Tooltips are disabled by default.** The shared `tooltipManager` ships\nwith `enabled: false`, so this component is a no-op until the host app\ncalls `tooltipManager.configure({ enabled: true })` (typically once at\nboot). The same gate applies to the `tooltip` prop on `ArvoButton`,\n`ArvoIconButton`, `ArvoLink`, etc. See the **Overlays/Tooltip/JS API**\ndocs page for the full configuration surface.',methods:[],displayName:"ArvoTooltip",props:{content:{required:!0,tsType:{name:"string"},description:"Text content displayed in the tooltip"},placement:{required:!1,tsType:{name:"TooltipPlacement"},description:"Preferred placement relative to the trigger element"},shortcut:{required:!1,tsType:{name:"string"},description:"Keyboard shortcut hint displayed alongside the content"},children:{required:!0,tsType:{name:"ReactElement"},description:"Single interactive child element that serves as the tooltip trigger"}}};const $={title:"Overlays/Tooltip",component:o,tags:["!dev","stable"],argTypes:{content:{control:{type:"text"},description:"Tooltip content text. Should describe what the trigger does."},placement:{control:{type:"select"},options:["bottom-center","bottom-start","bottom-end","top-center","top-start","top-end","left-center","left-start","left-end","right-center","right-start","right-end"],table:{defaultValue:{summary:"bottom-center"}}},shortcut:{control:{type:"text"},description:'Optional keyboard shortcut shown after the content (e.g. "Ctrl+S")'}},args:{content:"Save the current document",placement:"bottom-center"},parameters:{docs:{description:{component:"Consolidated CSF for ArvoTooltip. All stories are docs-only\r\n(`tags: ['!dev', ...]`): they render on the attached `Tooltip.mdx` page\r\n(the single sidebar node), not as their own sidebar leaves."}}}},s={args:{content:"Tooltip content",shortcut:"Ctrl+S"},render:e=>t.jsx(o,{...e,children:t.jsx(v,{variant:"secondary",label:"Hover me"})})},i={args:{content:"Save the current document"},render:e=>t.jsx(o,{...e,children:t.jsx(v,{variant:"secondary",label:"Save"})})},l={name:"With Shortcut",args:{content:"Save the current document",shortcut:"Ctrl+S"},render:e=>t.jsx(o,{...e,children:t.jsx(n,{variant:"secondary",icon:"save",tooltip:"Save"})})},c={name:"On Disabled Element",args:{content:"Submit is disabled until you fill all required fields."},render:e=>t.jsx(o,{...e,children:t.jsx(v,{variant:"primary",label:"Submit",isDisabled:!0})})},d={name:"Truncation Auto-Show",args:{content:"A very long button label that does not fit in the available space and gets truncated by CSS."},render:e=>t.jsx("div",{style:{width:160},children:t.jsx(o,{...e,children:t.jsx(v,{variant:"secondary",isFullWidth:!0,label:"A very long button label that does not fit in the available space and gets truncated by CSS."})})})},p={args:{content:""},render:()=>t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:24,padding:48},children:["bottom-center","bottom-start","bottom-end","top-center","top-start","top-end","left-center","left-start","left-end","right-center","right-start","right-end"].map(e=>t.jsx(o,{content:`Placement: ${e}`,placement:e,children:t.jsx(v,{variant:"secondary",label:e})},e))})},u={args:{content:""},render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:360},children:[t.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[t.jsx("span",{children:"API key"}),t.jsx(o,{content:"Found under Account > API. Treat as a password.",children:t.jsx(n,{variant:"tertiary",size:"sm",icon:"info-circle",tooltip:"Help"})})]}),t.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[t.jsx("span",{children:"Webhook URL"}),t.jsx(o,{content:"HTTPS endpoint that receives POST notifications when events fire.",children:t.jsx(n,{variant:"tertiary",size:"sm",icon:"info-circle",tooltip:"Help"})})]})]})},m={args:{content:""},render:()=>t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsx(o,{content:"Save the current document",shortcut:"Ctrl+S",children:t.jsx(n,{variant:"secondary",icon:"save",tooltip:"Save"})}),t.jsx(o,{content:"Undo last change",shortcut:"Ctrl+Z",children:t.jsx(n,{variant:"secondary",icon:"undo",tooltip:"Undo"})}),t.jsx(o,{content:"Redo last change",shortcut:"Ctrl+Shift+Z",children:t.jsx(n,{variant:"secondary",icon:"redo",tooltip:"Redo"})})]})};var b,S,A;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip content',
    shortcut: 'Ctrl+S'
  },
  render: args => <ArvoTooltip {...args}>\r
      <ArvoButton variant="secondary" label="Hover me" />\r
    </ArvoTooltip>
}`,...(A=(S=s.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var T,x,j;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    content: 'Save the current document'
  },
  render: args => <ArvoTooltip {...args}>\r
      <ArvoButton variant="secondary" label="Save" />\r
    </ArvoTooltip>
}`,...(j=(x=i.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var C,I,P;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'With Shortcut',
  args: {
    content: 'Save the current document',
    shortcut: 'Ctrl+S'
  },
  render: args => <ArvoTooltip {...args}>\r
      <ArvoIconButton variant="secondary" icon="save" tooltip="Save" />\r
    </ArvoTooltip>
}`,...(P=(I=l.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var B,H,w;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'On Disabled Element',
  args: {
    content: 'Submit is disabled until you fill all required fields.'
  },
  render: args => <ArvoTooltip {...args}>\r
      <ArvoButton variant="primary" label="Submit" isDisabled />\r
    </ArvoTooltip>
}`,...(w=(H=c.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};var O,W,R;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Truncation Auto-Show',
  args: {
    content: 'A very long button label that does not fit in the available space and gets truncated by CSS.'
  },
  render: args => <div style={{
    width: 160
  }}>\r
      <ArvoTooltip {...args}>\r
        <ArvoButton variant="secondary" isFullWidth label="A very long button label that does not fit in the available space and gets truncated by CSS." />\r
      </ArvoTooltip>\r
    </div>
}`,...(R=(W=d.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var D,E,_;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    content: ''
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: 24,
    padding: 48
  }}>\r
      {(['bottom-center', 'bottom-start', 'bottom-end', 'top-center', 'top-start', 'top-end', 'left-center', 'left-start', 'left-end', 'right-center', 'right-start', 'right-end'] as const).map(p => <ArvoTooltip key={p} content={\`Placement: \${p}\`} placement={p}>\r
          <ArvoButton variant="secondary" label={p} />\r
        </ArvoTooltip>)}\r
    </div>
}`,...(_=(E=p.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var k,q,U;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    content: ''
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    maxWidth: 360
  }}>\r
      <div style={{
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }}>\r
        <span>API key</span>\r
        <ArvoTooltip content="Found under Account > API. Treat as a password.">\r
          <ArvoIconButton variant="tertiary" size="sm" icon="info-circle" tooltip="Help" />\r
        </ArvoTooltip>\r
      </div>\r
      <div style={{
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }}>\r
        <span>Webhook URL</span>\r
        <ArvoTooltip content="HTTPS endpoint that receives POST notifications when events fire.">\r
          <ArvoIconButton variant="tertiary" size="sm" icon="info-circle" tooltip="Help" />\r
        </ArvoTooltip>\r
      </div>\r
    </div>
}`,...(U=(q=u.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var z,F,K;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    content: ''
  },
  render: () => <div style={{
    display: 'flex',
    gap: 8
  }}>\r
      <ArvoTooltip content="Save the current document" shortcut="Ctrl+S">\r
        <ArvoIconButton variant="secondary" icon="save" tooltip="Save" />\r
      </ArvoTooltip>\r
      <ArvoTooltip content="Undo last change" shortcut="Ctrl+Z">\r
        <ArvoIconButton variant="secondary" icon="undo" tooltip="Undo" />\r
      </ArvoTooltip>\r
      <ArvoTooltip content="Redo last change" shortcut="Ctrl+Shift+Z">\r
        <ArvoIconButton variant="secondary" icon="redo" tooltip="Redo" />\r
      </ArvoTooltip>\r
    </div>
}`,...(K=(F=m.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};const J=["Playground","Default","WithShortcut","OnDisabledElement","TruncationAutoShow","AllPlacements","HelpHints","KeyboardShortcutHint"],et=Object.freeze(Object.defineProperty({__proto__:null,AllPlacements:p,Default:i,HelpHints:u,KeyboardShortcutHint:m,OnDisabledElement:c,Playground:s,TruncationAutoShow:d,WithShortcut:l,__namedExportsOrder:J,default:$},Symbol.toStringTag,{value:"Module"}));export{p as A,u as H,m as K,c as O,s as P,et as T,l as W,d as a};
