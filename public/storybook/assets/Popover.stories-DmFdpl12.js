import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./iframe-BaOp0t6F.js";import{b as s}from"./ActionMenu-Bz8nuUE_.js";import{A as l}from"./Button-B8O_kk1m.js";import{A as he}from"./Textbox-BjaSSAvr.js";const fe={title:"Overlays/Popover",component:s,tags:["!dev","stable"],argTypes:{variant:{control:{type:"select"},options:["space","edge"],table:{defaultValue:{summary:"space"}}},placement:{control:{type:"select"},options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end","auto"],table:{defaultValue:{summary:"auto"}}},title:{control:{type:"text"}},hasHeader:{control:{type:"boolean"}},isClosable:{control:{type:"boolean"}},hasBackButton:{control:{type:"boolean"}},hasFooter:{control:{type:"boolean"}},hasArrow:{control:{type:"boolean"}},isInteractive:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"}},width:{control:{type:"text"}},trigger:{control:{type:"select"},options:["click","hover","focus"],table:{defaultValue:{summary:"click"}}},onOpenChange:{action:"openChanged",table:{category:"Events"}}},args:{variant:"space",placement:"auto",title:"Popover",hasHeader:!0,isClosable:!0,hasFooter:!1,hasArrow:!1,isInteractive:!0,isLoading:!1,trigger:"click"},parameters:{docs:{description:{component:`Consolidated CSF for ArvoPopover. All stories are docs-only (\`tags: ['!dev', ...]\`):\r
they render on the attached \`Popover.mdx\` page (the single sidebar node), not as\r
their own sidebar leaves.\r

Buckets within this file:\r
  - Playground / Default            -- live controls + the basic recipe\r
  - Features (header, footer, arrow, triggers, states) -- frozen single-prop snapshots\r
  - Examples (placements, controlled, recipes)         -- composition recipes`}}}},i={args:{title:"Popover"},render:r=>{const t=o.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(l,{ref:t,variant:"secondary",label:"Open popover"}),e.jsx(s,{...r,triggerRef:t,children:e.jsx("p",{children:"Try every prop in the Controls panel."})})]})}},c={args:{title:"Quick info"},render:r=>{const t=o.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(l,{ref:t,variant:"secondary",label:"Open popover"}),e.jsx(s,{...r,triggerRef:t,children:e.jsx("p",{children:"Use a popover for short, contextual information."})})]})}},n=({args:r,label:t="Open"})=>{const a=o.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(l,{ref:a,variant:"secondary",label:t}),e.jsx(s,{...r,triggerRef:a})]})},p={args:{title:"Account",defaultOpen:!0,children:e.jsx("p",{children:"Manage your account here."})},render:r=>e.jsx(n,{args:r,label:"Account"})},d={name:"With Footer Actions",args:{title:"Confirm",hasFooter:!0,actions:[{label:"Cancel",variant:"tertiary",onClick:()=>{}},{label:"Confirm",variant:"primary",onClick:()=>{}}],defaultOpen:!0,children:e.jsx("p",{children:"Are you sure?"})},render:r=>e.jsx(n,{args:r,label:"Confirm"})},u={name:"Edge Variant",args:{variant:"edge",title:"Edge",defaultOpen:!0,children:e.jsx("p",{children:"Edge variant has no internal padding -- the body fills the surface."})},render:r=>e.jsx(n,{args:r,label:"Edge"})},g={name:"With Back Button",args:{title:"Detail",hasBackButton:!0,defaultOpen:!0,children:e.jsx("p",{children:"Use back to return to a previous panel."})},render:r=>e.jsx(n,{args:r,label:"Detail"})},m={name:"With Arrow",args:{title:"Tip",hasArrow:!0,defaultOpen:!0,children:e.jsx("p",{children:"The arrow points back to the trigger."})},render:r=>e.jsx(n,{args:r,label:"Tip"})},h={name:"Hover Trigger",args:{trigger:"hover",title:"On hover",children:e.jsx("p",{children:"Hover the button to open."})},render:r=>e.jsx(n,{args:r,label:"Hover me"})},f={name:"Focus Trigger",args:{trigger:"focus",title:"On focus",children:e.jsx("p",{children:"Tab to the button to open."})},render:r=>e.jsx(n,{args:r,label:"Focus me"})},v={args:{title:"Loading",isLoading:!0,defaultOpen:!0,children:null},render:r=>e.jsx(n,{args:r,label:"Loading"})},b={name:"Non-Interactive",args:{title:"Read-only",isInteractive:!1,defaultOpen:!0,children:e.jsx("p",{children:"Text is selectable; controls are not active."})},render:r=>e.jsx(n,{args:r,label:"Read-only"})},y={args:{children:null},render:()=>{const r=["top","right","bottom","left","auto"];return e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:24,padding:64},children:r.map(t=>{const a=o.useRef(null);return e.jsxs("div",{children:[e.jsx(l,{ref:a,variant:"secondary",label:t}),e.jsx(s,{defaultOpen:!1,placement:t,title:t,triggerRef:a,children:e.jsxs("p",{children:["Placement: ",t]})})]},t)})})}},x={args:{children:null},render:()=>{const r=o.useRef(null),[t,a]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{ref:r,variant:"secondary",label:t?"Close":"Open",onClick:()=>a(A=>!A)}),e.jsx(s,{triggerRef:r,title:"Controlled",isOpen:t,onOpenChange:a,children:e.jsx("p",{children:"Open is driven by parent state."})})]})}},C={args:{children:null},render:()=>{const r=o.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(l,{ref:r,variant:"danger",icon:"bin",label:"Delete project"}),e.jsx(s,{triggerRef:r,title:"Delete this project?",hasHeader:!0,hasFooter:!0,isClosable:!0,actions:[{label:"Cancel",variant:"tertiary",onClick:()=>{}},{label:"Delete",variant:"danger",onClick:()=>{}}],children:e.jsx("p",{children:"This action cannot be undone. All reports and integrations will be removed."})})]})}},j={args:{children:null},render:()=>{const r=o.useRef(null),[t,a]=o.useState("");return e.jsxs(e.Fragment,{children:[e.jsx(l,{ref:r,variant:"primary",icon:"plus",label:"New label"}),e.jsx(s,{triggerRef:r,title:"Create label",hasHeader:!0,hasFooter:!0,isClosable:!0,actions:[{label:"Cancel",variant:"tertiary",onClick:()=>{}},{label:"Create",variant:"primary",onClick:()=>{},isDisabled:t.length===0}],width:"320px",children:e.jsx(he,{label:"Label name",value:t,onChange:A=>a(A.currentTarget.value),isFullWidth:!0})})]})}};var T,O,k;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: 'Popover'
  },
  render: args => {
    const ref = useRef<HTMLButtonElement>(null);
    return <>\r
        <ArvoButton ref={ref} variant="secondary" label="Open popover" />\r
        <ArvoPopover {...args} triggerRef={ref}>\r
          <p>Try every prop in the Controls panel.</p>\r
        </ArvoPopover>\r
      </>;
  }
}`,...(k=(O=i.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var F,P,R;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    title: 'Quick info'
  },
  render: args => {
    const ref = useRef<HTMLButtonElement>(null);
    return <>\r
        <ArvoButton ref={ref} variant="secondary" label="Open popover" />\r
        <ArvoPopover {...args} triggerRef={ref}>\r
          <p>Use a popover for short, contextual information.</p>\r
        </ArvoPopover>\r
      </>;
  }
}`,...(R=(P=c.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var B,W,S;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: 'Account',
    defaultOpen: true,
    children: <p>Manage your account here.</p>
  },
  render: args => <TriggerWith args={args} label="Account" />
}`,...(S=(W=p.parameters)==null?void 0:W.docs)==null?void 0:S.source}}};var E,H,w;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'With Footer Actions',
  args: {
    title: 'Confirm',
    hasFooter: true,
    actions: [{
      label: 'Cancel',
      variant: 'tertiary',
      onClick: () => {}
    }, {
      label: 'Confirm',
      variant: 'primary',
      onClick: () => {}
    }],
    defaultOpen: true,
    children: <p>Are you sure?</p>
  },
  render: args => <TriggerWith args={args} label="Confirm" />
}`,...(w=(H=d.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};var L,D,N;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Edge Variant',
  args: {
    variant: 'edge',
    title: 'Edge',
    defaultOpen: true,
    children: <p>Edge variant has no internal padding -- the body fills the surface.</p>
  },
  render: args => <TriggerWith args={args} label="Edge" />
}`,...(N=(D=u.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var M,I,V;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'With Back Button',
  args: {
    title: 'Detail',
    hasBackButton: true,
    defaultOpen: true,
    children: <p>Use back to return to a previous panel.</p>
  },
  render: args => <TriggerWith args={args} label="Detail" />
}`,...(V=(I=g.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var _,U,z;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'With Arrow',
  args: {
    title: 'Tip',
    hasArrow: true,
    defaultOpen: true,
    children: <p>The arrow points back to the trigger.</p>
  },
  render: args => <TriggerWith args={args} label="Tip" />
}`,...(z=(U=m.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var Q,q,G;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Hover Trigger',
  args: {
    trigger: 'hover',
    title: 'On hover',
    children: <p>Hover the button to open.</p>
  },
  render: args => <TriggerWith args={args} label="Hover me" />
}`,...(G=(q=h.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,X;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Focus Trigger',
  args: {
    trigger: 'focus',
    title: 'On focus',
    children: <p>Tab to the button to open.</p>
  },
  render: args => <TriggerWith args={args} label="Focus me" />
}`,...(X=(K=f.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Y,Z,$;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    title: 'Loading',
    isLoading: true,
    defaultOpen: true,
    children: null
  },
  render: args => <TriggerWith args={args} label="Loading" />
}`,...($=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,te;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Non-Interactive',
  args: {
    title: 'Read-only',
    isInteractive: false,
    defaultOpen: true,
    children: <p>Text is selectable; controls are not active.</p>
  },
  render: args => <TriggerWith args={args} label="Read-only" />
}`,...(te=(re=b.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ae,oe,ne;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => {
    const placements = ['top', 'right', 'bottom', 'left', 'auto'] as const;
    return <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      gap: 24,
      padding: 64
    }}>\r
        {placements.map(p => {
        const ref = useRef<HTMLButtonElement>(null);
        return <div key={p}>\r
              <ArvoButton ref={ref} variant="secondary" label={p} />\r
              <ArvoPopover defaultOpen={false} placement={p} title={p} triggerRef={ref}>\r
                <p>Placement: {p}</p>\r
              </ArvoPopover>\r
            </div>;
      })}\r
      </div>;
  }
}`,...(ne=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var se,le,ie;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => {
    const ref = useRef<HTMLButtonElement>(null);
    const [open, setOpen] = useState(false);
    return <>\r
        <ArvoButton ref={ref} variant="secondary" label={open ? 'Close' : 'Open'} onClick={() => setOpen(o => !o)} />\r
        <ArvoPopover triggerRef={ref} title="Controlled" isOpen={open} onOpenChange={setOpen}>\r
          <p>Open is driven by parent state.</p>\r
        </ArvoPopover>\r
      </>;
  }
}`,...(ie=(le=x.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,pe,de;C.parameters={...C.parameters,docs:{...(ce=C.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => {
    const ref = useRef<HTMLButtonElement>(null);
    return <>\r
        <ArvoButton ref={ref} variant="danger" icon="bin" label="Delete project" />\r
        <ArvoPopover triggerRef={ref} title="Delete this project?" hasHeader hasFooter isClosable actions={[{
        label: 'Cancel',
        variant: 'tertiary',
        onClick: () => {}
      }, {
        label: 'Delete',
        variant: 'danger',
        onClick: () => {}
      }]}>\r
          <p>This action cannot be undone. All reports and integrations will be removed.</p>\r
        </ArvoPopover>\r
      </>;
  }
}`,...(de=(pe=C.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var ue,ge,me;j.parameters={...j.parameters,docs:{...(ue=j.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => {
    const ref = useRef<HTMLButtonElement>(null);
    const [name, setName] = useState('');
    return <>\r
        <ArvoButton ref={ref} variant="primary" icon="plus" label="New label" />\r
        <ArvoPopover triggerRef={ref} title="Create label" hasHeader hasFooter isClosable actions={[{
        label: 'Cancel',
        variant: 'tertiary',
        onClick: () => {}
      }, {
        label: 'Create',
        variant: 'primary',
        onClick: () => {},
        isDisabled: name.length === 0
      }]} width="320px">\r
          <ArvoTextbox label="Label name" value={name} onChange={e => setName(e.currentTarget.value)} isFullWidth />\r
        </ArvoPopover>\r
      </>;
  }
}`,...(me=(ge=j.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};const ve=["Playground","Default","WithTitle","WithFooterActions","EdgeVariant","WithBackButton","WithArrow","HoverTrigger","FocusTrigger","Loading","NonInteractive","AllPlacements","Controlled","ConfirmDelete","FormPopover"],Ae=Object.freeze(Object.defineProperty({__proto__:null,AllPlacements:y,ConfirmDelete:C,Controlled:x,Default:c,EdgeVariant:u,FocusTrigger:f,FormPopover:j,HoverTrigger:h,Loading:v,NonInteractive:b,Playground:i,WithArrow:m,WithBackButton:g,WithFooterActions:d,WithTitle:p,__namedExportsOrder:ve,default:fe},Symbol.toStringTag,{value:"Module"}));export{y as A,x as C,u as E,f as F,h as H,v as L,b as N,Ae as P,p as W,i as a,g as b,m as c,d,C as e,j as f};
