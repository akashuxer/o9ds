import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./iframe-BaOp0t6F.js";import{A as t}from"./ButtonGroup-Bky2dG1G.js";import{A as Se}from"./Button-B8O_kk1m.js";const Te={title:"Actions/ButtonGroup",component:t,tags:["!dev","stable"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary"],description:"Visual variant controlling active item colors",table:{defaultValue:{summary:"primary"}}},size:{control:{type:"select"},options:["sm","lg"],description:"Group size (sm: 24px, lg: 32px)",table:{defaultValue:{summary:"lg"}}},isMultiSelect:{control:{type:"boolean"},description:"Allow multiple items to be selected simultaneously",table:{defaultValue:{summary:"false"}}},isIconOnly:{control:{type:"boolean"},description:"All items render as icon-only buttons",table:{defaultValue:{summary:"false"}}},hasOverflow:{control:{type:"boolean"},description:"Enable overflow detection with ellipsis menu",table:{defaultValue:{summary:"false"}}},expandOnSelect:{control:{type:"boolean"},description:"Selected item expands to show label; others collapse to icon-only (single-select only)",table:{defaultValue:{summary:"false"}}},isDisabled:{control:{type:"boolean"},description:"Disable the entire group",table:{defaultValue:{summary:"false"}}},isLoading:{control:{type:"boolean"},description:"Loading state (Pattern C)",table:{defaultValue:{summary:"false"}}},ariaLabel:{control:{type:"text"},description:"Accessible label for the toolbar"},onChange:{action:"changed",description:"Selection change handler",table:{category:"Events"}}},args:{variant:"primary",size:"lg",isMultiSelect:!1,isIconOnly:!1,hasOverflow:!1,expandOnSelect:!1,isDisabled:!1,isLoading:!1,ariaLabel:"Button group"}},r=[{value:"bold",label:"Bold",icon:"bold"},{value:"italic",label:"Italic",icon:"italic"},{value:"underline",label:"Underline",icon:"underline"}],A=[{value:"left",label:"Left",icon:"align-left"},{value:"center",label:"Center",icon:"align-center"},{value:"right",label:"Right",icon:"align-right"},{value:"justify",label:"Justify",icon:"align-justify"}],Le=[{value:"list",label:"List",icon:"list"},{value:"grid",label:"Grid",icon:"grid"},{value:"tiles",label:"Tiles",icon:"th-large"}],n={args:{items:r,value:"bold",ariaLabel:"Text formatting"}},o={args:{items:r,value:"bold",ariaLabel:"Text formatting"}},c={args:{items:r,value:"bold",variant:"primary",ariaLabel:"Text formatting"}},u={args:{items:r,value:"italic",variant:"secondary",ariaLabel:"Text formatting"}},d={args:{items:A,value:"left",size:"sm",ariaLabel:"Text alignment"}},m={args:{items:A,value:"center",isIconOnly:!0,ariaLabel:"Text alignment"}},g={args:{items:r,value:"bold",isDisabled:!0,ariaLabel:"Text formatting"}},p={args:{items:r,value:"bold",isLoading:!0,ariaLabel:"Text formatting"}},b={name:"Item Disabled",args:{items:[{value:"bold",label:"Bold",icon:"bold"},{value:"italic",label:"Italic",icon:"italic",isDisabled:!0},{value:"underline",label:"Underline",icon:"underline"}],value:"bold",ariaLabel:"Text formatting with disabled item"}},v={args:{items:r,ariaLabel:"Text formatting"},render:l=>{const[s,a]=h.useState(["bold"]);return e.jsx(t,{...l,isMultiSelect:!0,value:s,onChange:i=>{"changedValue"in i&&Array.isArray(i.value)&&a(i.value)}})}},f={args:{items:Le,ariaLabel:"View mode"},render:l=>{const[s,a]=h.useState("list");return e.jsx(t,{...l,expandOnSelect:!0,value:s,onChange:i=>{typeof i.value=="string"&&a(i.value)}})}},y={args:{items:r,ariaLabel:""},render:()=>{const[l,s]=h.useState("on");return e.jsx(t,{items:[{value:"on",label:"On"},{value:"off",label:"Off"}],value:l,ariaLabel:"Toggle state",onChange:a=>{typeof a.value=="string"&&s(a.value)}})}},S={args:{items:r,ariaLabel:""},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(t,{items:r,value:"bold",variant:"primary",ariaLabel:"Primary"}),e.jsx(t,{items:r,value:"bold",variant:"secondary",ariaLabel:"Secondary"})]})},T={args:{items:A,ariaLabel:""},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(t,{items:A,value:"left",size:"sm",ariaLabel:"Small"}),e.jsx(t,{items:A,value:"left",size:"lg",ariaLabel:"Large"})]})},L={args:{items:[],ariaLabel:""},render:()=>{const[l,s]=h.useState([]);return e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center",padding:8},children:[e.jsx("span",{children:"3 items selected"}),e.jsx(t,{items:[{value:"archive",label:"Archive",icon:"archive"},{value:"export",label:"Export",icon:"download"},{value:"tag",label:"Tag",icon:"tag"}],isMultiSelect:!0,value:l,ariaLabel:"Bulk actions",onChange:a=>{Array.isArray(a.value)&&s(a.value)}}),e.jsx(Se,{variant:"danger",icon:"bin",label:"Delete"})]})}},x={args:{items:[],ariaLabel:""},render:()=>{const[l,s]=h.useState(["active"]);return e.jsx(t,{items:[{value:"active",label:"Active",icon:"check-circle"},{value:"pending",label:"Pending",icon:"clock-o"},{value:"archived",label:"Archived",icon:"archive"},{value:"flagged",label:"Flagged",icon:"flag"}],isMultiSelect:!0,value:l,ariaLabel:"Filter status",onChange:a=>{Array.isArray(a.value)&&s(a.value)}})}};var E,I,M;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    items: TEXT_ITEMS,
    value: 'bold',
    ariaLabel: 'Text formatting'
  }
}`,...(M=(I=n.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var V,_,B;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    items: TEXT_ITEMS,
    value: 'bold',
    ariaLabel: 'Text formatting'
  }
}`,...(B=(_=o.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var D,O,j;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    items: TEXT_ITEMS,
    value: 'bold',
    variant: 'primary',
    ariaLabel: 'Text formatting'
  }
}`,...(j=(O=c.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var G,C,w;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    items: TEXT_ITEMS,
    value: 'italic',
    variant: 'secondary',
    ariaLabel: 'Text formatting'
  }
}`,...(w=(C=u.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var z,X,P;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    items: ALIGN_ITEMS,
    value: 'left',
    size: 'sm',
    ariaLabel: 'Text alignment'
  }
}`,...(P=(X=d.parameters)==null?void 0:X.docs)==null?void 0:P.source}}};var F,k,N;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    items: ALIGN_ITEMS,
    value: 'center',
    isIconOnly: true,
    ariaLabel: 'Text alignment'
  }
}`,...(N=(k=m.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var U,R,W;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    items: TEXT_ITEMS,
    value: 'bold',
    isDisabled: true,
    ariaLabel: 'Text formatting'
  }
}`,...(W=(R=g.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var J,q,H;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    items: TEXT_ITEMS,
    value: 'bold',
    isLoading: true,
    ariaLabel: 'Text formatting'
  }
}`,...(H=(q=p.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var K,Q,Y;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Item Disabled',
  args: {
    items: [{
      value: 'bold',
      label: 'Bold',
      icon: 'bold'
    }, {
      value: 'italic',
      label: 'Italic',
      icon: 'italic',
      isDisabled: true
    }, {
      value: 'underline',
      label: 'Underline',
      icon: 'underline'
    }],
    value: 'bold',
    ariaLabel: 'Text formatting with disabled item'
  }
}`,...(Y=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,$,ee;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    items: TEXT_ITEMS,
    ariaLabel: 'Text formatting'
  },
  render: args => {
    const [value, setValue] = useState<string[]>(['bold']);
    return <ArvoButtonGroup {...args} isMultiSelect value={value} onChange={detail => {
      if ('changedValue' in detail && Array.isArray(detail.value)) setValue(detail.value as string[]);
    }} />;
  }
}`,...(ee=($=v.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,re,te;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    items: VIEW_ITEMS,
    ariaLabel: 'View mode'
  },
  render: args => {
    const [value, setValue] = useState<string | null>('list');
    return <ArvoButtonGroup {...args} expandOnSelect value={value} onChange={detail => {
      if (typeof detail.value === 'string') setValue(detail.value);
    }} />;
  }
}`,...(te=(re=f.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var le,se,ie;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    items: TEXT_ITEMS,
    ariaLabel: ''
  },
  render: () => {
    const [value, setValue] = useState<string | null>('on');
    return <ArvoButtonGroup items={[{
      value: 'on',
      label: 'On'
    }, {
      value: 'off',
      label: 'Off'
    }]} value={value} ariaLabel="Toggle state" onChange={detail => {
      if (typeof detail.value === 'string') setValue(detail.value);
    }} />;
  }
}`,...(ie=(se=y.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ne,oe,ce;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    items: TEXT_ITEMS,
    ariaLabel: ''
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>\r
      <ArvoButtonGroup items={TEXT_ITEMS} value="bold" variant="primary" ariaLabel="Primary" />\r
      <ArvoButtonGroup items={TEXT_ITEMS} value="bold" variant="secondary" ariaLabel="Secondary" />\r
    </div>
}`,...(ce=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var ue,de,me;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    items: ALIGN_ITEMS,
    ariaLabel: ''
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>\r
      <ArvoButtonGroup items={ALIGN_ITEMS} value="left" size="sm" ariaLabel="Small" />\r
      <ArvoButtonGroup items={ALIGN_ITEMS} value="left" size="lg" ariaLabel="Large" />\r
    </div>
}`,...(me=(de=T.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ge,pe,be;L.parameters={...L.parameters,docs:{...(ge=L.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    items: [],
    ariaLabel: ''
  },
  render: () => {
    const [actions, setActions] = useState<string[]>([]);
    return <div style={{
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      padding: 8
    }}>\r
        <span>3 items selected</span>\r
        <ArvoButtonGroup items={[{
        value: 'archive',
        label: 'Archive',
        icon: 'archive'
      }, {
        value: 'export',
        label: 'Export',
        icon: 'download'
      }, {
        value: 'tag',
        label: 'Tag',
        icon: 'tag'
      }]} isMultiSelect value={actions} ariaLabel="Bulk actions" onChange={detail => {
        if (Array.isArray(detail.value)) setActions(detail.value as string[]);
      }} />\r
        <ArvoButton variant="danger" icon="bin" label="Delete" />\r
      </div>;
  }
}`,...(be=(pe=L.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var ve,fe,ye;x.parameters={...x.parameters,docs:{...(ve=x.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    items: [],
    ariaLabel: ''
  },
  render: () => {
    const [filters, setFilters] = useState<string[]>(['active']);
    return <ArvoButtonGroup items={[{
      value: 'active',
      label: 'Active',
      icon: 'check-circle'
    }, {
      value: 'pending',
      label: 'Pending',
      icon: 'clock-o'
    }, {
      value: 'archived',
      label: 'Archived',
      icon: 'archive'
    }, {
      value: 'flagged',
      label: 'Flagged',
      icon: 'flag'
    }]} isMultiSelect value={filters} ariaLabel="Filter status" onChange={detail => {
      if (Array.isArray(detail.value)) setFilters(detail.value as string[]);
    }} />;
  }
}`,...(ye=(fe=x.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};const xe=["Default","Playground","Primary","Secondary","Small","IconOnly","Disabled","Loading","ItemDisabled","MultiSelect","ExpandLabelOnSelect","Toggle","AllVariants","AllSizes","BulkActionToolbar","FilterChips"],Me=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:T,AllVariants:S,BulkActionToolbar:L,Default:n,Disabled:g,ExpandLabelOnSelect:f,FilterChips:x,IconOnly:m,ItemDisabled:b,Loading:p,MultiSelect:v,Playground:o,Primary:c,Secondary:u,Small:d,Toggle:y,__namedExportsOrder:xe,default:Te},Symbol.toStringTag,{value:"Module"}));export{S as A,Me as B,f as E,x as F,v as M,o as P,y as T,T as a,L as b};
