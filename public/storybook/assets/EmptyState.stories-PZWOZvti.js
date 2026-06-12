import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as t}from"./EmptyState-B01eqtyy.js";const E={title:"Feedback/EmptyState",component:t,tags:["!dev","stable"],argTypes:{size:{control:{type:"select"},options:["sm","md","lg","xl"],description:"Visual scale (illustration cap, typography, gaps)",table:{defaultValue:{summary:"md"}}},orientation:{control:{type:"select"},options:["vertical","horizontal"],description:"Layout direction",table:{defaultValue:{summary:"vertical"}}},illustration:{control:{type:"select"},options:["no-results","no-data","no-tasks","no-notifications","no-report","dashboard","server-error","restricted-access"],description:"Illustration token (`no-results`, `no-data`, or any `o9illus-*` name)",table:{defaultValue:{summary:"no-results"}}},title:{control:{type:"text"},description:"Heading text"},message:{control:{type:"text"},description:"Supporting message text"},isAnimated:{control:{type:"boolean"},description:"Float animation on the illustration",table:{defaultValue:{summary:"true"}}}},args:{size:"md",orientation:"vertical",illustration:"no-results",title:"No results found",message:"Adjust your filters or try a different search term.",isAnimated:!0},decorators:[s=>e.jsx("div",{style:{minHeight:320,minWidth:280,padding:16,display:"flex"},children:e.jsx(s,{})})],parameters:{docs:{description:{component:"Consolidated CSF for ArvoEmptyState. All stories are docs-only\r\n(`tags: ['!dev', ...]`) and render on the attached `EmptyState.mdx` page --\r\nthe single sidebar node for this component."}}}},r={},a={args:{illustration:"no-results",title:"No results found",message:"No invoices match your filters. Try widening the date range or clearing the search.",primaryAction:{label:"Reset filters",onClick:()=>{}},secondaryAction:{label:"Clear search",onClick:()=>{}}}},o={args:{title:"",message:""},render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:16},children:["sm","md","lg","xl"].map(s=>e.jsx(t,{size:s,illustration:"no-results",title:`Size ${s}`,message:"Adjust your filters or try a different search term.",primaryAction:{label:"Reset filters",onClick:()=>{}}},s))})},i={args:{orientation:"horizontal",illustration:"no-data",title:"No data yet",message:"Once records start flowing in, they will appear here.",primaryAction:{label:"Import data",onClick:()=>{}},secondaryAction:{label:"Cancel",onClick:()=>{}}}},l={args:{title:"",message:""},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:16},children:[e.jsx(t,{illustration:"no-results",title:"No results found",message:"Try a different search term."}),e.jsx(t,{illustration:"no-data",title:"No data available",message:"Nothing to display yet."}),e.jsx(t,{illustration:"no-tasks",title:"No open tasks",message:"Create one to get started."}),e.jsx(t,{illustration:"no-notifications",title:"All caught up",message:"No notifications right now."}),e.jsx(t,{illustration:"dashboard",title:"Build your dashboard",message:"Add widgets to populate this view."}),e.jsx(t,{illustration:"restricted-access",title:"Restricted access",message:"You do not have permission to view this content."})]})},n={args:{title:"",message:""},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:16},children:[e.jsx(t,{illustration:"no-results",title:"No actions",message:"Title and message only."}),e.jsx(t,{illustration:"no-results",title:"Primary only",message:"A single recovery action.",primaryAction:{label:"Reset filters",onClick:()=>{}}}),e.jsx(t,{illustration:"no-results",title:"Primary + secondary",message:"Two recovery actions.",primaryAction:{label:"Reset filters",onClick:()=>{}},secondaryAction:{label:"Clear search",onClick:()=>{}}}),e.jsx(t,{illustration:"no-results",title:"With a link",message:"A supporting link below the buttons.",primaryAction:{label:"Reset filters",onClick:()=>{}},link:{label:"Learn more",href:"#",isExternal:!0}})]})};var c,d,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    illustration: 'no-results',
    title: 'No results found',
    message: 'No invoices match your filters. Try widening the date range or clearing the search.',
    primaryAction: {
      label: 'Reset filters',
      onClick: () => {}
    },
    secondaryAction: {
      label: 'Clear search',
      onClick: () => {}
    }
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var y,h,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: '',
    message: ''
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 16
  }}>\r
      {(['sm', 'md', 'lg', 'xl'] as const).map(size => <ArvoEmptyState key={size} size={size} illustration="no-results" title={\`Size \${size}\`} message="Adjust your filters or try a different search term." primaryAction={{
      label: 'Reset filters',
      onClick: () => {}
    }} />)}\r
    </div>
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var A,v,b;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    illustration: 'no-data',
    title: 'No data yet',
    message: 'Once records start flowing in, they will appear here.',
    primaryAction: {
      label: 'Import data',
      onClick: () => {}
    },
    secondaryAction: {
      label: 'Cancel',
      onClick: () => {}
    }
  }
}`,...(b=(v=i.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var C,S,k;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: '',
    message: ''
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 16
  }}>\r
      <ArvoEmptyState illustration="no-results" title="No results found" message="Try a different search term." />\r
      <ArvoEmptyState illustration="no-data" title="No data available" message="Nothing to display yet." />\r
      <ArvoEmptyState illustration="no-tasks" title="No open tasks" message="Create one to get started." />\r
      <ArvoEmptyState illustration="no-notifications" title="All caught up" message="No notifications right now." />\r
      <ArvoEmptyState illustration="dashboard" title="Build your dashboard" message="Add widgets to populate this view." />\r
      <ArvoEmptyState illustration="restricted-access" title="Restricted access" message="You do not have permission to view this content." />\r
    </div>
}`,...(k=(S=l.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var x,j,N;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: '',
    message: ''
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 16
  }}>\r
      <ArvoEmptyState illustration="no-results" title="No actions" message="Title and message only." />\r
      <ArvoEmptyState illustration="no-results" title="Primary only" message="A single recovery action." primaryAction={{
      label: 'Reset filters',
      onClick: () => {}
    }} />\r
      <ArvoEmptyState illustration="no-results" title="Primary + secondary" message="Two recovery actions." primaryAction={{
      label: 'Reset filters',
      onClick: () => {}
    }} secondaryAction={{
      label: 'Clear search',
      onClick: () => {}
    }} />\r
      <ArvoEmptyState illustration="no-results" title="With a link" message="A supporting link below the buttons." primaryAction={{
      label: 'Reset filters',
      onClick: () => {}
    }} link={{
      label: 'Learn more',
      href: '#',
      isExternal: true
    }} />\r
    </div>
}`,...(N=(j=n.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const w=["Playground","NoSearchResults","Sizes","Horizontal","IllustrationVariants","ActionPermutations"],R=Object.freeze(Object.defineProperty({__proto__:null,ActionPermutations:n,Horizontal:i,IllustrationVariants:l,NoSearchResults:a,Playground:r,Sizes:o,__namedExportsOrder:w,default:E},Symbol.toStringTag,{value:"Module"}));export{n as A,R as E,i as H,l as I,a as N,r as P,o as S};
