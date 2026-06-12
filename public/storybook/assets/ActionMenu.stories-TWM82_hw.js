import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as w}from"./iframe-BaOp0t6F.js";import{a as t,b as We}from"./ActionMenu-Bz8nuUE_.js";import{A as a}from"./Button-B8O_kk1m.js";import{A as Ce}from"./IconButton-BgwDUYzG.js";import{A as Te}from"./Textbox-BjaSSAvr.js";const s=[{id:"edit",label:"Edit",icon:"pencil"},{id:"duplicate",label:"Duplicate",icon:"duplicate"},{id:"archive",label:"Archive",icon:"archive"},{id:"delete",label:"Delete",icon:"bin",destructive:!0}],f=[{id:"edit",label:"Edit",icon:"pencil"},{id:"duplicate",label:"Duplicate",icon:"duplicate"},{id:"archive",label:"Archive",icon:"archive"}],je=[{id:"view",label:"View",items:[{id:"open",label:"Open",icon:"folder-open"},{id:"preview",label:"Preview",icon:"eye"}]},{id:"manage",label:"Manage",items:[{id:"rename",label:"Rename",icon:"rename"},{id:"delete",label:"Delete",icon:"bin",destructive:!0}]}],Oe=[{id:"new",label:"New file",icon:"plus",shortcut:"Ctrl+N"},{id:"save",label:"Save",icon:"save",shortcut:"Ctrl+S"},{id:"close",label:"Close",icon:"close",shortcut:"Ctrl+W"}],De=[{id:"export",label:"Export",icon:"download",submenu:[{id:"csv",label:"CSV"},{id:"json",label:"JSON"}]},{id:"import",label:"Import",icon:"upload"}],Me={title:"Overlays/ActionMenu",component:t,tags:["!dev","stable"],argTypes:{placement:{control:{type:"select"},options:["top-start","top-end","bottom-start","bottom-end","left-start","left-end","right-start","right-end","auto"],table:{defaultValue:{summary:"bottom-start"}}},isLoading:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},search:{control:{type:"boolean"}},hasGroupDividers:{control:{type:"boolean"},table:{defaultValue:{summary:"true"}}},actionsVisibility:{control:{type:"radio"},options:["always","hover"],table:{defaultValue:{summary:"always"}}},submenuTrigger:{control:{type:"radio"},options:["hover","click"],table:{defaultValue:{summary:"hover"}}},closeOnSelect:{control:{type:"boolean"},table:{defaultValue:{summary:"true"}}},isDisabled:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},maxHeight:{control:{type:"text"}},onOpen:{action:"opened",table:{category:"Events"}},onClose:{action:"closed",table:{category:"Events"}},onSelect:{action:"selected",table:{category:"Events"}}},args:{items:s,placement:"bottom-start",isLoading:!1,hasGroupDividers:!0,actionsVisibility:"always",submenuTrigger:"hover",closeOnSelect:!0,isDisabled:!1}},i={args:{items:s},render:r=>e.jsx(t,{...r,trigger:e.jsx(a,{variant:"secondary",label:"Actions"})})},o={args:{items:s},render:r=>e.jsx(t,{...r,trigger:e.jsx(a,{variant:"secondary",label:"Actions"})})},n={name:"Grouped With Headers",args:{items:je,hasGroupDividers:!0},render:r=>e.jsx(t,{...r,trigger:e.jsx(a,{variant:"secondary",label:"Grouped"})})},l={name:"Grouped With Dividers Only",args:{items:je.map(r=>({...r,label:void 0})),hasGroupDividers:!0},render:r=>e.jsx(t,{...r,trigger:e.jsx(a,{variant:"secondary",label:"Dividers"})})},c={name:"With Search Filter",args:{items:f,search:!0},render:r=>e.jsx(t,{...r,trigger:e.jsx(a,{variant:"secondary",label:"With search"})})},d={name:"With Keyboard Shortcuts",args:{items:Oe},render:r=>e.jsx(t,{...r,trigger:e.jsx(a,{variant:"secondary",label:"File"})})},u={name:"With Submenu",args:{items:De,submenuTrigger:"hover"},render:r=>e.jsx(t,{...r,trigger:e.jsx(a,{variant:"secondary",label:"Submenu"})})},m={name:"With Submenu (Click)",args:{items:De,submenuTrigger:"click"},render:r=>e.jsx(t,{...r,trigger:e.jsx(a,{variant:"secondary",label:"Submenu (click)"})})},g={name:"Destructive Items",args:{items:[...f,{id:"delete",label:"Delete",icon:"bin",destructive:!0}]},render:r=>e.jsx(t,{...r,trigger:e.jsx(a,{variant:"secondary",label:"Manage"})})},p={args:{items:f,isLoading:!0},render:r=>e.jsx(t,{...r,trigger:e.jsx(a,{variant:"secondary",label:"Loading"})})},b={name:"Trailing Actions -- Always Visible",args:{items:f.map(r=>({...r,actions:[{id:"edit",icon:"pencil",ariaLabel:"Edit",onClick:()=>{}}]})),actionsVisibility:"always"},render:r=>e.jsx(t,{...r,trigger:e.jsx(a,{variant:"secondary",label:"Trailing always"})})},v={name:"Trailing Actions -- Hover Only",args:{items:f.map(r=>({...r,actions:[{id:"edit",icon:"pencil",ariaLabel:"Edit",onClick:()=>{}}]})),actionsVisibility:"hover"},render:r=>e.jsx(t,{...r,trigger:e.jsx(a,{variant:"secondary",label:"Trailing hover"})})},y={name:"Disabled Items",args:{items:[{id:"a",label:"Available"},{id:"b",label:"Disabled",isDisabled:!0},{id:"c",label:"Available"}]},render:r=>e.jsx(t,{...r,trigger:e.jsx(a,{variant:"secondary",label:"With disabled"})})},h={args:{items:s},render:()=>{const[r,j]=w.useState(!1);return e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(a,{variant:"primary",label:r?"Close menu":"Open menu",onClick:()=>j(D=>!D)}),e.jsx(t,{items:s,isOpen:r,onOpenChange:j,trigger:e.jsx(a,{variant:"secondary",label:"Anchor"})})]})}},A={args:{items:s},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:["Acme Corp","Globex Inc","Initech LLC"].map(r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:8},children:[e.jsx("span",{style:{flexGrow:1},children:r}),e.jsx(t,{items:s,trigger:e.jsx(Ce,{variant:"tertiary",icon:"ellipsis-v",tooltip:`Actions for ${r}`})})]},r))})},x={args:{items:s},render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:8},children:[e.jsx("span",{children:"3 items selected"}),e.jsx(t,{items:[{id:"tag",label:"Tag",icon:"tag"},{id:"export",label:"Export",icon:"download"},{id:"archive",label:"Archive",icon:"archive"},{id:"delete",label:"Delete",icon:"bin",destructive:!0}],trigger:e.jsx(a,{variant:"primary",label:"Bulk actions",icon:"caret-down"})})]})},S={args:{items:s},render:()=>{const r=w.useRef(null),[j,D]=w.useState("");return e.jsxs(e.Fragment,{children:[e.jsx(a,{ref:r,variant:"secondary",label:"Open menu"}),e.jsx(We,{triggerRef:r,title:"Quick rename",hasHeader:!0,isClosable:!0,width:"280px",children:e.jsx(Te,{label:"New name",value:j,onChange:we=>D(we.currentTarget.value),isFullWidth:!0})})]})}};var W,C,T;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    items
  },
  render: args => <ArvoActionMenu {...args} trigger={<ArvoButton variant="secondary" label="Actions" />} />
}`,...(T=(C=i.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var O,M,B;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    items
  },
  render: args => <ArvoActionMenu {...args} trigger={<ArvoButton variant="secondary" label="Actions" />} />
}`,...(B=(M=o.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var I,k,G;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Grouped With Headers',
  args: {
    items: grouped,
    hasGroupDividers: true
  },
  render: args => <ArvoActionMenu {...args} trigger={<ArvoButton variant="secondary" label="Grouped" />} />
}`,...(G=(k=n.parameters)==null?void 0:k.docs)==null?void 0:G.source}}};var L,V,E;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Grouped With Dividers Only',
  args: {
    items: grouped.map(g => ({
      ...g,
      label: undefined
    }) as ListGroup<MenuItemData>),
    hasGroupDividers: true
  },
  render: args => <ArvoActionMenu {...args} trigger={<ArvoButton variant="secondary" label="Dividers" />} />
}`,...(E=(V=l.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var H,P,F;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'With Search Filter',
  args: {
    items: basic,
    search: true
  },
  render: args => <ArvoActionMenu {...args} trigger={<ArvoButton variant="secondary" label="With search" />} />
}`,...(F=(P=c.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var N,R,_;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'With Keyboard Shortcuts',
  args: {
    items: withShortcuts
  },
  render: args => <ArvoActionMenu {...args} trigger={<ArvoButton variant="secondary" label="File" />} />
}`,...(_=(R=d.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var K,Q,$;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'With Submenu',
  args: {
    items: withSubmenu,
    submenuTrigger: 'hover'
  },
  render: args => <ArvoActionMenu {...args} trigger={<ArvoButton variant="secondary" label="Submenu" />} />
}`,...($=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:$.source}}};var z,J,q;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'With Submenu (Click)',
  args: {
    items: withSubmenu,
    submenuTrigger: 'click'
  },
  render: args => <ArvoActionMenu {...args} trigger={<ArvoButton variant="secondary" label="Submenu (click)" />} />
}`,...(q=(J=m.parameters)==null?void 0:J.docs)==null?void 0:q.source}}};var U,X,Y;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Destructive Items',
  args: {
    items: [...basic, {
      id: 'delete',
      label: 'Delete',
      icon: 'bin',
      destructive: true
    }]
  },
  render: args => <ArvoActionMenu {...args} trigger={<ArvoButton variant="secondary" label="Manage" />} />
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    items: basic,
    isLoading: true
  },
  render: args => <ArvoActionMenu {...args} trigger={<ArvoButton variant="secondary" label="Loading" />} />
}`,...(re=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,se;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Trailing Actions -- Always Visible',
  args: {
    items: basic.map(i => ({
      ...i,
      actions: [{
        id: 'edit',
        icon: 'pencil',
        ariaLabel: 'Edit',
        onClick: () => {}
      }]
    })),
    actionsVisibility: 'always'
  },
  render: args => <ArvoActionMenu {...args} trigger={<ArvoButton variant="secondary" label="Trailing always" />} />
}`,...(se=(te=b.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ie,oe,ne;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Trailing Actions -- Hover Only',
  args: {
    items: basic.map(i => ({
      ...i,
      actions: [{
        id: 'edit',
        icon: 'pencil',
        ariaLabel: 'Edit',
        onClick: () => {}
      }]
    })),
    actionsVisibility: 'hover'
  },
  render: args => <ArvoActionMenu {...args} trigger={<ArvoButton variant="secondary" label="Trailing hover" />} />
}`,...(ne=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var le,ce,de;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Disabled Items',
  args: {
    items: [{
      id: 'a',
      label: 'Available'
    }, {
      id: 'b',
      label: 'Disabled',
      isDisabled: true
    }, {
      id: 'c',
      label: 'Available'
    }]
  },
  render: args => <ArvoActionMenu {...args} trigger={<ArvoButton variant="secondary" label="With disabled" />} />
}`,...(de=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,me,ge;h.parameters={...h.parameters,docs:{...(ue=h.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    items
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <div style={{
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }}>\r
        <ArvoButton variant="primary" label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(o => !o)} />\r
        <ArvoActionMenu items={items} isOpen={open} onOpenChange={setOpen} trigger={<ArvoButton variant="secondary" label="Anchor" />} />\r
      </div>;
  }
}`,...(ge=(me=h.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var pe,be,ve;A.parameters={...A.parameters,docs:{...(pe=A.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    items
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>\r
      {['Acme Corp', 'Globex Inc', 'Initech LLC'].map(row => <div key={row} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: 8
    }}>\r
          <span style={{
        flexGrow: 1
      }}>{row}</span>\r
          <ArvoActionMenu items={items} trigger={<ArvoIconButton variant="tertiary" icon="ellipsis-v" tooltip={\`Actions for \${row}\`} />} />\r
        </div>)}\r
    </div>
}`,...(ve=(be=A.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var ye,he,Ae;x.parameters={...x.parameters,docs:{...(ye=x.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    items
  },
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: 8
  }}>\r
      <span>3 items selected</span>\r
      <ArvoActionMenu items={[{
      id: 'tag',
      label: 'Tag',
      icon: 'tag'
    }, {
      id: 'export',
      label: 'Export',
      icon: 'download'
    }, {
      id: 'archive',
      label: 'Archive',
      icon: 'archive'
    }, {
      id: 'delete',
      label: 'Delete',
      icon: 'bin',
      destructive: true
    }]} trigger={<ArvoButton variant="primary" label="Bulk actions" icon="caret-down" />} />\r
    </div>
}`,...(Ae=(he=x.parameters)==null?void 0:he.docs)==null?void 0:Ae.source}}};var xe,Se,fe;S.parameters={...S.parameters,docs:{...(xe=S.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    items
  },
  render: () => {
    const ref = useRef<HTMLButtonElement>(null);
    const [name, setName] = useState('');
    return <>\r
        <ArvoButton ref={ref} variant="secondary" label="Open menu" />\r
        <ArvoPopover triggerRef={ref} title="Quick rename" hasHeader isClosable width="280px">\r
          <ArvoTextbox label="New name" value={name} onChange={e => setName(e.currentTarget.value)} isFullWidth />\r
        </ArvoPopover>\r
      </>;
  }
}`,...(fe=(Se=S.parameters)==null?void 0:Se.docs)==null?void 0:fe.source}}};const Be=["Playground","Default","GroupedWithHeaders","GroupedWithDividersOnly","WithSearchFilter","WithKeyboardShortcuts","WithSubmenu","WithSubmenuClick","DestructiveItems","Loading","TrailingAlways","TrailingHover","DisabledItems","ControlledOpen","TableRowActions","BulkActionMenu","WithInlinePopover"],He=Object.freeze(Object.defineProperty({__proto__:null,BulkActionMenu:x,ControlledOpen:h,Default:o,DestructiveItems:g,DisabledItems:y,GroupedWithDividersOnly:l,GroupedWithHeaders:n,Loading:p,Playground:i,TableRowActions:A,TrailingAlways:b,TrailingHover:v,WithInlinePopover:S,WithKeyboardShortcuts:d,WithSearchFilter:c,WithSubmenu:u,WithSubmenuClick:m,__namedExportsOrder:Be,default:Me},Symbol.toStringTag,{value:"Module"}));export{He as A,x as B,h as C,g as D,n as G,p as L,i as P,b as T,c as W,l as a,d as b,u as c,m as d,v as e,y as f,A as g,S as h};
