import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as R}from"./iframe-BaOp0t6F.js";import{c as t}from"./ActionMenu-Bz8nuUE_.js";import{A as i}from"./Button-B8O_kk1m.js";const o=[{id:"red",label:"Red"},{id:"green",label:"Green"},{id:"blue",label:"Blue"},{id:"yellow",label:"Yellow"}],ve=[{id:"warm",label:"Warm",items:[{id:"red",label:"Red"},{id:"orange",label:"Orange"}]},{id:"cool",label:"Cool",items:[{id:"blue",label:"Blue"},{id:"green",label:"Green"}]}],l=e=>({ref:s,onClick:r})=>a.jsx(i,{ref:s,variant:"secondary",label:e,onClick:r}),ye={title:"Overlays/HybridPopover",component:t,tags:["!dev","stable"],argTypes:{selectionMode:{control:{type:"radio"},options:["multi","single","none"],table:{defaultValue:{summary:"multi"}}},commitOn:{control:{type:"radio"},options:["apply","change"],table:{defaultValue:{summary:"apply"}}},hasGlobalSelectAll:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},enableReorder:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isResizable:{control:{type:"boolean"},table:{defaultValue:{summary:"true"}}},title:{control:{type:"text"}},onChange:{action:"changed",table:{category:"Events"}}},args:{items:o,selectionMode:"multi",commitOn:"apply",hasGlobalSelectAll:!1,enableReorder:!1,isResizable:!0}},d={args:{items:o,selectionMode:"multi"},render:e=>a.jsx(t,{...e,renderTrigger:({ref:s,onClick:r})=>a.jsx(i,{ref:s,variant:"secondary",label:"Open",onClick:r})})},c={args:{items:o,selectionMode:"multi"},render:e=>a.jsx(t,{...e,renderTrigger:({ref:s,onClick:r})=>a.jsx(i,{ref:s,variant:"secondary",label:"Filter colors",onClick:r})})},u={name:"Multi Select",args:{items:o,selectionMode:"multi"},render:e=>a.jsx(t,{...e,renderTrigger:l("Multi-select")})},m={name:"Single Select",args:{items:o,selectionMode:"single"},render:e=>a.jsx(t,{...e,renderTrigger:l("Single-select")})},g={args:{items:ve,selectionMode:"multi"},render:e=>a.jsx(t,{...e,renderTrigger:l("Grouped")})},p={name:"With Global Select All",args:{items:o,selectionMode:"multi",hasGlobalSelectAll:!0},render:e=>a.jsx(t,{...e,renderTrigger:l("With select-all")})},b={name:"With Search",args:{items:o,selectionMode:"multi",search:{placeholder:"Filter colors"}},render:e=>a.jsx(t,{...e,renderTrigger:l("With search")})},v={args:{selectionMode:"multi",enableReorder:!0,defaultItems:o},render:e=>a.jsx(t,{...e,renderTrigger:l("Reorderable")})},y={args:{items:o,selectionMode:"multi",isLoading:!0},render:e=>a.jsx(t,{...e,renderTrigger:l("Loading")})},h={name:"No Data",args:{items:[],selectionMode:"multi"},render:e=>a.jsx(t,{...e,renderTrigger:l("No data")})},f={args:{items:o,selectionMode:"multi",isResizable:!0,width:320,height:320},render:e=>a.jsx(t,{...e,renderTrigger:l("Resizable")})},S={args:{items:o,selectionMode:"multi"},render:()=>{const[e,s]=R.useState(["red"]);return a.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[a.jsx(t,{items:o,selectionMode:"multi",commitOn:"change",value:e,onChange:r=>Array.isArray(r)&&s(r),renderTrigger:({ref:r,onClick:n})=>a.jsx(i,{ref:r,variant:"secondary",label:`Filter (${e.length})`,onClick:n})}),a.jsxs("span",{children:["Selected: ",e.join(", ")||"none"]})]})}},C={args:{items:o,selectionMode:"multi"},render:()=>{const[e,s]=R.useState([]);return a.jsx(t,{title:"Filter columns",hasHeader:!0,items:[{id:"name",label:"Name"},{id:"owner",label:"Owner"},{id:"created",label:"Created"},{id:"updated",label:"Updated"},{id:"status",label:"Status"}],selectionMode:"multi",hasGlobalSelectAll:!0,search:{placeholder:"Find a column"},value:e,onChange:r=>Array.isArray(r)&&s(r),renderTrigger:({ref:r,onClick:n})=>a.jsx(i,{ref:r,variant:"secondary",icon:"filter",label:`Columns (${e.length})`,onClick:n})})}},M={args:{items:o,selectionMode:"multi"},render:()=>{const[e,s]=R.useState(["name","owner","updated"]);return a.jsx(t,{title:"Configure columns",hasHeader:!0,defaultItems:[{id:"name",label:"Name"},{id:"owner",label:"Owner"},{id:"created",label:"Created"},{id:"updated",label:"Updated"},{id:"status",label:"Status"}],selectionMode:"multi",enableReorder:!0,value:e,onChange:r=>Array.isArray(r)&&s(r),renderTrigger:({ref:r,onClick:n})=>a.jsx(i,{ref:r,variant:"secondary",icon:"cog",label:"Configure",onClick:n})})}},A={args:{items:o,selectionMode:"multi"},render:()=>{const[e,s]=R.useState([{id:"name",label:"Name"},{id:"owner",label:"Owner"},{id:"created",label:"Created"},{id:"updated",label:"Updated"},{id:"status",label:"Status"}]);return a.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[a.jsx(t,{title:"Reorder columns",hasHeader:!0,items:e,selectionMode:"none",enableReorder:!0,onReorder:r=>{s(r.items)},renderTrigger:({ref:r,onClick:n})=>a.jsx(i,{ref:r,variant:"secondary",icon:"cog",label:"Reorder",onClick:n})}),a.jsxs("span",{children:["Order: ",e.map(r=>r.label).join(" -> ")]})]})}};var T,x,j;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    items,
    selectionMode: 'multi'
  },
  render: args => <ArvoHybridPopover {...args} renderTrigger={({
    ref,
    onClick
  }) => <ArvoButton ref={ref as Ref<HTMLButtonElement>} variant="secondary" label="Open" onClick={onClick} />} />
}`,...(j=(x=d.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var H,P,k;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    items,
    selectionMode: 'multi'
  },
  render: args => <ArvoHybridPopover {...args} renderTrigger={({
    ref,
    onClick
  }) => <ArvoButton ref={ref as Ref<HTMLButtonElement>} variant="secondary" label="Filter colors" onClick={onClick} />} />
}`,...(k=(P=c.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var w,O,G;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Multi Select',
  args: {
    items,
    selectionMode: 'multi'
  },
  render: args => <ArvoHybridPopover {...args} renderTrigger={trigger('Multi-select')} />
}`,...(G=(O=u.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var B,N,W;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Single Select',
  args: {
    items,
    selectionMode: 'single'
  },
  render: args => <ArvoHybridPopover {...args} renderTrigger={trigger('Single-select')} />
}`,...(W=(N=m.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var F,L,E;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    items: grouped,
    selectionMode: 'multi'
  },
  render: args => <ArvoHybridPopover {...args} renderTrigger={trigger('Grouped')} />
}`,...(E=(L=g.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var z,I,V;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'With Global Select All',
  args: {
    items,
    selectionMode: 'multi',
    hasGlobalSelectAll: true
  },
  render: args => <ArvoHybridPopover {...args} renderTrigger={trigger('With select-all')} />
}`,...(V=(I=p.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var D,U,_;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'With Search',
  args: {
    items,
    selectionMode: 'multi',
    search: {
      placeholder: 'Filter colors'
    }
  },
  render: args => <ArvoHybridPopover {...args} renderTrigger={trigger('With search')} />
}`,...(_=(U=b.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var $,Y,q;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  // No \`value\` / \`onReorder\` is wired here on purpose -- uncontrolled mode
  // (defaultItems / no items) lets HybridPopover persist drag order
  // internally so the panel reflects the new order on the next render.
  args: {
    selectionMode: 'multi',
    enableReorder: true,
    defaultItems: items
  } satisfies Partial<ArvoHybridPopoverProps>,
  render: args => <ArvoHybridPopover {...args} renderTrigger={trigger('Reorderable')} />
}`,...(q=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var J,K,Q;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    items,
    selectionMode: 'multi',
    isLoading: true
  } satisfies Partial<ArvoHybridPopoverProps>,
  render: args => <ArvoHybridPopover {...args} renderTrigger={trigger('Loading')} />
}`,...(Q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,ee;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'No Data',
  args: {
    items: [],
    selectionMode: 'multi'
  },
  render: args => <ArvoHybridPopover {...args} renderTrigger={trigger('No data')} />
}`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ae,te;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    items,
    selectionMode: 'multi',
    isResizable: true,
    width: 320,
    height: 320
  },
  render: args => <ArvoHybridPopover {...args} renderTrigger={trigger('Resizable')} />
}`,...(te=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var oe,se,le;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    items,
    selectionMode: 'multi'
  },
  render: () => {
    const [value, setValue] = useState<string[]>(['red']);
    return <div style={{
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }}>\r
        <ArvoHybridPopover items={items} selectionMode="multi" commitOn="change" value={value} onChange={v => Array.isArray(v) && setValue(v)} renderTrigger={({
        ref,
        onClick
      }) => <ArvoButton ref={ref as Ref<HTMLButtonElement>} variant="secondary" label={\`Filter (\${value.length})\`} onClick={onClick} />} />\r
        <span>Selected: {value.join(', ') || 'none'}</span>\r
      </div>;
  }
}`,...(le=(se=S.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ne,ie,de;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    items,
    selectionMode: 'multi'
  },
  render: () => {
    const [pick, setPick] = useState<string[]>([]);
    return <ArvoHybridPopover title="Filter columns" hasHeader items={[{
      id: 'name',
      label: 'Name'
    }, {
      id: 'owner',
      label: 'Owner'
    }, {
      id: 'created',
      label: 'Created'
    }, {
      id: 'updated',
      label: 'Updated'
    }, {
      id: 'status',
      label: 'Status'
    }]} selectionMode="multi" hasGlobalSelectAll search={{
      placeholder: 'Find a column'
    }} value={pick} onChange={v => Array.isArray(v) && setPick(v)} renderTrigger={({
      ref,
      onClick
    }) => <ArvoButton ref={ref as Ref<HTMLButtonElement>} variant="secondary" icon="filter" label={\`Columns (\${pick.length})\`} onClick={onClick} />} />;
  }
}`,...(de=(ie=C.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ce,ue,me;M.parameters={...M.parameters,docs:{...(ce=M.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    items,
    selectionMode: 'multi'
  },
  render: () => {
    const [columns, setColumns] = useState<string[]>(['name', 'owner', 'updated']);
    return <ArvoHybridPopover title="Configure columns" hasHeader defaultItems={[{
      id: 'name',
      label: 'Name'
    }, {
      id: 'owner',
      label: 'Owner'
    }, {
      id: 'created',
      label: 'Created'
    }, {
      id: 'updated',
      label: 'Updated'
    }, {
      id: 'status',
      label: 'Status'
    }]} selectionMode="multi" enableReorder value={columns} onChange={v => Array.isArray(v) && setColumns(v)} renderTrigger={({
      ref,
      onClick
    }) => <ArvoButton ref={ref as Ref<HTMLButtonElement>} variant="secondary" icon="cog" label="Configure" onClick={onClick} />} />;
  }
}`,...(me=(ue=M.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var ge,pe,be;A.parameters={...A.parameters,docs:{...(ge=A.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    items,
    selectionMode: 'multi'
  },
  render: () => {
    const [columns, setColumns] = useState([{
      id: 'name',
      label: 'Name'
    }, {
      id: 'owner',
      label: 'Owner'
    }, {
      id: 'created',
      label: 'Created'
    }, {
      id: 'updated',
      label: 'Updated'
    }, {
      id: 'status',
      label: 'Status'
    }]);
    return <div style={{
      display: 'flex',
      gap: 16,
      alignItems: 'center'
    }}>\r
        <ArvoHybridPopover title="Reorder columns" hasHeader items={columns} selectionMode="none" enableReorder onReorder={detail => {
        // Consumer mirrors the post-reorder array into its own state.
        setColumns(detail.items as typeof columns);
      }} renderTrigger={({
        ref,
        onClick
      }) => <ArvoButton ref={ref as Ref<HTMLButtonElement>} variant="secondary" icon="cog" label="Reorder" onClick={onClick} />} />\r
        <span>Order: {columns.map(c => c.label).join(' -> ')}</span>\r
      </div>;
  }
}`,...(be=(pe=A.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};const he=["Playground","Default","MultiSelect","SingleSelect","Grouped","WithGlobalSelectAll","WithSearch","Reorderable","Loading","NoData","Resizable","CommitOnChange","FilterPanel","ColumnConfigurator","ControlledReorder"],Ae=Object.freeze(Object.defineProperty({__proto__:null,ColumnConfigurator:M,CommitOnChange:S,ControlledReorder:A,Default:c,FilterPanel:C,Grouped:g,Loading:y,MultiSelect:u,NoData:h,Playground:d,Reorderable:v,Resizable:f,SingleSelect:m,WithGlobalSelectAll:p,WithSearch:b,__namedExportsOrder:he,default:ye},Symbol.toStringTag,{value:"Module"}));export{S as C,C as F,g as G,Ae as H,y as L,u as M,h as N,d as P,v as R,m as S,p as W,b as a,f as b,M as c,A as d};
