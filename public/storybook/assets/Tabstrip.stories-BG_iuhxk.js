import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./iframe-BaOp0t6F.js";import{A as t}from"./Tabstrip-B41dlssz.js";import{A as Te}from"./ActionMenu-Bz8nuUE_.js";const a=[{id:"overview",label:"Overview"},{id:"analytics",label:"Analytics"},{id:"settings",label:"Settings"}],n=a,he={title:"Navigation/Tabstrip",component:t,tags:["!dev","stable"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","tertiary"],table:{defaultValue:{summary:"primary"}}},size:{control:{type:"select"},options:["sm","lg"],table:{defaultValue:{summary:"lg"}}},isClosable:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isPinnable:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},actionsVisibility:{control:{type:"radio"},options:["hover","always"],table:{defaultValue:{summary:"hover"}}},isDisabled:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isLoading:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},onSelect:{action:"selected",table:{category:"Events"}},onClose:{action:"closed",table:{category:"Events"}},onPin:{action:"pinned",table:{category:"Events"}}},args:{tabs:a,variant:"primary",size:"lg",defaultSelectedId:"overview",isClosable:!1,isPinnable:!1,actionsVisibility:"hover",isDisabled:!1,isLoading:!1}},o={args:{tabs:a,defaultSelectedId:"overview"}},l={args:{tabs:a,defaultSelectedId:"overview"}},d={args:{tabs:a,variant:"secondary",defaultSelectedId:"overview"}},c={args:{tabs:a,variant:"primary",defaultSelectedId:"overview"}},b={args:{tabs:a,size:"sm",defaultSelectedId:"overview"}},u={name:"With Close Buttons",args:{tabs:a,isClosable:!0,defaultSelectedId:"overview"}},p={name:"With Pin Buttons",args:{tabs:a,isPinnable:!0,defaultSelectedId:"overview"}},v={name:"Actions Always Visible",args:{tabs:a,isClosable:!0,actionsVisibility:"always",defaultSelectedId:"overview"}},m={name:"Pinned Tabs",args:{tabs:[{id:"a",label:"Pinned 1",pinned:!0},{id:"b",label:"Pinned 2",pinned:!0},{id:"c",label:"Other"}],isPinnable:!0,defaultSelectedId:"a"}},g={name:"With Disabled Tab",args:{tabs:[{id:"a",label:"Active"},{id:"b",label:"Disabled",isDisabled:!0},{id:"c",label:"Other"}],defaultSelectedId:"a"}},f={args:{tabs:a,isDisabled:!0,defaultSelectedId:"overview"}},S={args:{tabs:a,isLoading:!0,defaultSelectedId:"overview"}},y={name:"Interactive (stateful)",args:{tabs:[]},render:()=>{const[s,i]=x.useState([...n]),[r,ye]=x.useState("overview");return e.jsx(t,{tabs:s,selectedId:r,isClosable:!0,onSelect:({id:h})=>ye(h),onClose:({id:h})=>i(we=>we.filter(Ie=>Ie.id!==h))})}},w={args:{tabs:[]},render:()=>{const[s,i]=x.useState("overview");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(t,{tabs:n,selectedId:s,onSelect:({id:r})=>i(r)}),e.jsxs("div",{style:{padding:16},children:[s==="overview"&&e.jsx("p",{children:"Overview content -- summary cards, charts, KPIs."}),s==="analytics"&&e.jsx("p",{children:"Analytics content -- detailed reports."}),s==="settings"&&e.jsx("p",{children:"Settings content -- preferences and integrations."})]})]})}},I={args:{tabs:[]},render:()=>{const s=n,i=[{id:"integrations",label:"Integrations"},{id:"billing",label:"Billing"}];return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[e.jsx(t,{tabs:s,defaultSelectedId:"overview"}),e.jsx(Te,{icon:"ellipsis-h",tooltip:"More tabs",variant:"primary",isCompact:!0,items:i.map(r=>({id:r.id,label:r.label}))})]})}},T={args:{tabs:[]},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(t,{variant:"primary",tabs:n,defaultSelectedId:"overview"}),e.jsx(t,{variant:"secondary",tabs:n,defaultSelectedId:"overview"}),e.jsx(t,{variant:"primary",tabs:n,defaultSelectedId:"overview"})]})};var A,P,D;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    tabs,
    defaultSelectedId: 'overview'
  }
}`,...(D=(P=o.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var C,j,V;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    tabs,
    defaultSelectedId: 'overview'
  }
}`,...(V=(j=l.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var W,O,B;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    tabs,
    variant: 'secondary',
    defaultSelectedId: 'overview'
  }
}`,...(B=(O=d.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var L,E,_;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    tabs,
    variant: 'primary',
    defaultSelectedId: 'overview'
  }
}`,...(_=(E=c.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var z,M,K;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    tabs,
    size: 'sm',
    defaultSelectedId: 'overview'
  }
}`,...(K=(M=b.parameters)==null?void 0:M.docs)==null?void 0:K.source}}};var N,R,k;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'With Close Buttons',
  args: {
    tabs,
    isClosable: true,
    defaultSelectedId: 'overview'
  }
}`,...(k=(R=u.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var q,F,G;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'With Pin Buttons',
  args: {
    tabs,
    isPinnable: true,
    defaultSelectedId: 'overview'
  }
}`,...(G=(F=p.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var H,J,Q;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Actions Always Visible',
  args: {
    tabs,
    isClosable: true,
    actionsVisibility: 'always',
    defaultSelectedId: 'overview'
  }
}`,...(Q=(J=v.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,Y;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Pinned Tabs',
  args: {
    tabs: [{
      id: 'a',
      label: 'Pinned 1',
      pinned: true
    }, {
      id: 'b',
      label: 'Pinned 2',
      pinned: true
    }, {
      id: 'c',
      label: 'Other'
    }],
    isPinnable: true,
    defaultSelectedId: 'a'
  }
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'With Disabled Tab',
  args: {
    tabs: [{
      id: 'a',
      label: 'Active'
    }, {
      id: 'b',
      label: 'Disabled',
      isDisabled: true
    }, {
      id: 'c',
      label: 'Other'
    }],
    defaultSelectedId: 'a'
  }
}`,...(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,se,te;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    tabs,
    isDisabled: true,
    defaultSelectedId: 'overview'
  }
}`,...(te=(se=f.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var re,ne,ie;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    tabs,
    isLoading: true,
    defaultSelectedId: 'overview'
  }
}`,...(ie=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var oe,le,de;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Interactive (stateful)',
  args: {
    tabs: []
  },
  render: () => {
    const [tabs, setTabs] = useState([...baseTabs]);
    const [selected, setSelected] = useState('overview');
    return <ArvoTabstrip tabs={tabs} selectedId={selected} isClosable onSelect={({
      id
    }) => setSelected(id)} onClose={({
      id
    }) => setTabs(t => t.filter(x => x.id !== id))} />;
  }
}`,...(de=(le=y.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,be,ue;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    tabs: []
  },
  render: () => {
    const [selected, setSelected] = useState('overview');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }}>\r
        <ArvoTabstrip tabs={baseTabs} selectedId={selected} onSelect={({
        id
      }) => setSelected(id)} />\r
        <div style={{
        padding: 16
      }}>\r
          {selected === 'overview' && <p>Overview content -- summary cards, charts, KPIs.</p>}\r
          {selected === 'analytics' && <p>Analytics content -- detailed reports.</p>}\r
          {selected === 'settings' && <p>Settings content -- preferences and integrations.</p>}\r
        </div>\r
      </div>;
  }
}`,...(ue=(be=w.parameters)==null?void 0:be.docs)==null?void 0:ue.source}}};var pe,ve,me;I.parameters={...I.parameters,docs:{...(pe=I.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    tabs: []
  },
  render: () => {
    const visible = baseTabs;
    const overflow = [{
      id: 'integrations',
      label: 'Integrations'
    }, {
      id: 'billing',
      label: 'Billing'
    }];
    return <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }}>\r
        <ArvoTabstrip tabs={visible} defaultSelectedId="overview" />\r
        <ArvoDropdownIconButton icon="ellipsis-h" tooltip="More tabs" variant="primary" isCompact items={overflow.map(t => ({
        id: t.id,
        label: t.label
      }))} />\r
      </div>;
  }
}`,...(me=(ve=I.parameters)==null?void 0:ve.docs)==null?void 0:me.source}}};var ge,fe,Se;T.parameters={...T.parameters,docs:{...(ge=T.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    tabs: []
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>\r
      <ArvoTabstrip variant="primary" tabs={baseTabs} defaultSelectedId="overview" />\r
      <ArvoTabstrip variant="secondary" tabs={baseTabs} defaultSelectedId="overview" />\r
      <ArvoTabstrip variant="primary" tabs={baseTabs} defaultSelectedId="overview" />\r
    </div>
}`,...(Se=(fe=T.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};const xe=["Default","Playground","Secondary","Tertiary","Small","WithCloseButtons","WithPinButtons","ActionsAlwaysVisible","PinnedTabs","WithDisabledTab","Disabled","Loading","Interactive","TabsWithContent","OverflowToActionMenu","AllVariants"],je=Object.freeze(Object.defineProperty({__proto__:null,ActionsAlwaysVisible:v,AllVariants:T,Default:o,Disabled:f,Interactive:y,Loading:S,OverflowToActionMenu:I,PinnedTabs:m,Playground:l,Secondary:d,Small:b,TabsWithContent:w,Tertiary:c,WithCloseButtons:u,WithDisabledTab:g,WithPinButtons:p,__namedExportsOrder:xe,default:he},Symbol.toStringTag,{value:"Module"}));export{T as A,f as D,y as I,S as L,I as O,l as P,b as S,je as T,u as W,p as a,v as b,m as c,g as d,w as e};
