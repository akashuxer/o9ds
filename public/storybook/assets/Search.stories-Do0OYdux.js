import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as D}from"./iframe-BaOp0t6F.js";import{A as r}from"./Search-B0ooNraj.js";const Te={title:"Inputs/Search",component:r,tags:["!dev","stable"],argTypes:{variant:{control:{type:"select"},options:["filter","find"],table:{defaultValue:{summary:"filter"}}},value:{control:{type:"text"}},placeholder:{control:{type:"text"}},searchMode:{control:{type:"select"},options:["input","submit"],table:{defaultValue:{summary:"input"}}},isDisabled:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isInvalid:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isLoading:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isClearable:{control:{type:"boolean"},table:{defaultValue:{summary:"true"}}},isMultiLine:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isFullWidth:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},errorDisplay:{control:{type:"select"},options:["inline","tooltip","none"],table:{defaultValue:{summary:"inline"}}},shortcut:{control:{type:"text"}},width:{control:{type:"text"}},onSearch:{action:"searched",table:{category:"Events"}},onChange:{action:"changed",table:{category:"Events"}},onClear:{action:"cleared",table:{category:"Events"}}},args:{variant:"filter",placeholder:"Search...",searchMode:"input",isDisabled:!1,isInvalid:!1,isLoading:!1,isClearable:!0,isMultiLine:!1,isFullWidth:!1},parameters:{docs:{description:{component:"Consolidated CSF for ArvoSearch. Every story is docs-only\r\n(`tags: ['!dev', ...]`): they render on the attached `Search.mdx` page (the\r\nsingle sidebar node for this component), not as their own sidebar leaves."}}}},a={args:{placeholder:"Try every prop"}},t={args:{placeholder:"Search..."}},s={name:"Filter with Value",args:{variant:"filter",value:"apples",placeholder:"Search products"}},o={name:"Find Variant",args:{variant:"find",placeholder:"Find on page",counter:{current:1,total:5}}},l={name:"With Shortcut",args:{variant:"filter",placeholder:"Quick search",shortcut:"Ctrl+K"}},n={name:"With Counter",args:{variant:"find",placeholder:"Find",value:"foo",counter:{current:3,total:12}}},i={name:"Multi-Line",args:{variant:"filter",placeholder:"One term per line",isMultiLine:!0}},c={args:{isDisabled:!0,placeholder:"Disabled"}},d={args:{isLoading:!0,placeholder:"Searching..."}},p={args:{isInvalid:!0,value:"bad"}},u={name:"Inline Error",args:{isInvalid:!0,errorDisplay:"tooltip",value:"bad"}},m={name:"Search Mode: Submit",args:{searchMode:"submit",placeholder:"Press Enter to search"}},h={args:{value:"Hello",isClearable:!0}},g={name:"Find (No Matches)",args:{variant:"find",value:"xyz",counter:{current:0,total:0}}},f={name:"Custom ARIA Label",args:{placeholder:"Search","aria-label":"Search articles"}},v={name:"Full Width",args:{isFullWidth:!0}},S={name:"Custom Width",args:{width:"420px"}},x={args:{},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:360},children:[e.jsx(r,{variant:"filter",placeholder:"Filter list"}),e.jsx(r,{variant:"find",placeholder:"Find on page",counter:{current:1,total:5}})]})},y={args:{},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:720},children:[e.jsx(r,{placeholder:"Default (300px)"}),e.jsx(r,{placeholder:"Custom 200px",width:"200px"}),e.jsx(r,{placeholder:"Full width",isFullWidth:!0})]})},b={args:{},render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center",padding:12},children:[e.jsx("span",{children:"Acme App"}),e.jsx(r,{variant:"filter",placeholder:"Search reports",shortcut:"Ctrl+K",width:"320px"}),e.jsx("span",{style:{flexGrow:1}}),e.jsx("span",{children:"jane@acme.io"})]})},F={args:{},render:()=>{const[W,Pe]=D.useState(""),A=D.useMemo(()=>["Alpha","Bravo","Charlie","Delta","Echo","Foxtrot","Golf","Hotel"],[]).filter(C=>C.toLowerCase().includes(W.toLowerCase()));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,maxWidth:360},children:[e.jsx(r,{variant:"filter",placeholder:"Filter items",value:W,isFullWidth:!0,onChange:Pe}),e.jsx("ul",{style:{display:"flex",flexDirection:"column",gap:4,padding:8,margin:0},children:A.length===0?e.jsx("li",{children:"No matches"}):A.map(C=>e.jsx("li",{children:C},C))})]})}};var M,j,L;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    placeholder: 'Try every prop'
  }
}`,...(L=(j=a.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var V,w,E;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...'
  }
}`,...(E=(w=t.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var I,H,N;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Filter with Value',
  args: {
    variant: 'filter',
    value: 'apples',
    placeholder: 'Search products'
  }
}`,...(N=(H=s.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var P,T,_;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Find Variant',
  args: {
    variant: 'find',
    placeholder: 'Find on page',
    counter: {
      current: 1,
      total: 5
    }
  }
}`,...(_=(T=o.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var O,Q,q;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'With Shortcut',
  args: {
    variant: 'filter',
    placeholder: 'Quick search',
    shortcut: 'Ctrl+K'
  }
}`,...(q=(Q=l.parameters)==null?void 0:Q.docs)==null?void 0:q.source}}};var G,K,k;n.parameters={...n.parameters,docs:{...(G=n.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'With Counter',
  args: {
    variant: 'find',
    placeholder: 'Find',
    value: 'foo',
    counter: {
      current: 3,
      total: 12
    }
  }
}`,...(k=(K=n.parameters)==null?void 0:K.docs)==null?void 0:k.source}}};var z,R,B;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Multi-Line',
  args: {
    variant: 'filter',
    placeholder: 'One term per line',
    isMultiLine: true
  }
}`,...(B=(R=i.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var J,U,X;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    placeholder: 'Disabled'
  }
}`,...(X=(U=c.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    placeholder: 'Searching...'
  }
}`,...($=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ae;p.parameters={...p.parameters,docs:{...(ee=p.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    value: 'bad'
  }
}`,...(ae=(re=p.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,se,oe;u.parameters={...u.parameters,docs:{...(te=u.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Inline Error',
  args: {
    isInvalid: true,
    errorDisplay: 'tooltip',
    value: 'bad'
  }
}`,...(oe=(se=u.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var le,ne,ie;m.parameters={...m.parameters,docs:{...(le=m.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Search Mode: Submit',
  args: {
    searchMode: 'submit',
    placeholder: 'Press Enter to search'
  }
}`,...(ie=(ne=m.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var ce,de,pe;h.parameters={...h.parameters,docs:{...(ce=h.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    value: 'Hello',
    isClearable: true
  }
}`,...(pe=(de=h.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ue,me,he;g.parameters={...g.parameters,docs:{...(ue=g.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'Find (No Matches)',
  args: {
    variant: 'find',
    value: 'xyz',
    counter: {
      current: 0,
      total: 0
    }
  }
}`,...(he=(me=g.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var ge,fe,ve;f.parameters={...f.parameters,docs:{...(ge=f.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: 'Custom ARIA Label',
  args: {
    placeholder: 'Search',
    'aria-label': 'Search articles' as never
  }
}`,...(ve=(fe=f.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var Se,xe,ye;v.parameters={...v.parameters,docs:{...(Se=v.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'Full Width',
  args: {
    isFullWidth: true
  }
}`,...(ye=(xe=v.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var be,Fe,Ce;S.parameters={...S.parameters,docs:{...(be=S.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: 'Custom Width',
  args: {
    width: '420px'
  }
}`,...(Ce=(Fe=S.parameters)==null?void 0:Fe.docs)==null?void 0:Ce.source}}};var We,Ae,De;x.parameters={...x.parameters,docs:{...(We=x.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    maxWidth: 360
  }}>\r
      <ArvoSearch variant="filter" placeholder="Filter list" />\r
      <ArvoSearch variant="find" placeholder="Find on page" counter={{
      current: 1,
      total: 5
    }} />\r
    </div>
}`,...(De=(Ae=x.parameters)==null?void 0:Ae.docs)==null?void 0:De.source}}};var Me,je,Le;y.parameters={...y.parameters,docs:{...(Me=y.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    maxWidth: 720
  }}>\r
      <ArvoSearch placeholder="Default (300px)" />\r
      <ArvoSearch placeholder="Custom 200px" width="200px" />\r
      <ArvoSearch placeholder="Full width" isFullWidth />\r
    </div>
}`,...(Le=(je=y.parameters)==null?void 0:je.docs)==null?void 0:Le.source}}};var Ve,we,Ee;b.parameters={...b.parameters,docs:{...(Ve=b.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center',
    padding: 12
  }}>\r
      <span>Acme App</span>\r
      <ArvoSearch variant="filter" placeholder="Search reports" shortcut="Ctrl+K" width="320px" />\r
      <span style={{
      flexGrow: 1
    }} />\r
      <span>jane@acme.io</span>\r
    </div>
}`,...(Ee=(we=b.parameters)==null?void 0:we.docs)==null?void 0:Ee.source}}};var Ie,He,Ne;F.parameters={...F.parameters,docs:{...(Ie=F.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [q, setQ] = useState('');
    const items = useMemo(() => ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel'], []);
    const filtered = items.filter(i => i.toLowerCase().includes(q.toLowerCase()));
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      maxWidth: 360
    }}>\r
        <ArvoSearch variant="filter" placeholder="Filter items" value={q} isFullWidth onChange={setQ} />\r
        <ul style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        padding: 8,
        margin: 0
      }}>\r
          {filtered.length === 0 ? <li>No matches</li> : filtered.map(i => <li key={i}>{i}</li>)}\r
        </ul>\r
      </div>;
  }
}`,...(Ne=(He=F.parameters)==null?void 0:He.docs)==null?void 0:Ne.source}}};const _e=["Playground","Default","FilterWithValue","FindVariant","WithShortcut","WithCounter","MultiLine","Disabled","Loading","Error","ErrorInline","SearchModeSubmit","Clearable","FindNoMatches","CustomAriaLabel","FullWidth","CustomWidth","AllVariants","WidthVariations","AppHeaderSearch","FilterableTable"],Ke=Object.freeze(Object.defineProperty({__proto__:null,AllVariants:x,AppHeaderSearch:b,Clearable:h,CustomAriaLabel:f,CustomWidth:S,Default:t,Disabled:c,Error:p,ErrorInline:u,FilterWithValue:s,FilterableTable:F,FindNoMatches:g,FindVariant:o,FullWidth:v,Loading:d,MultiLine:i,Playground:a,SearchModeSubmit:m,WidthVariations:y,WithCounter:n,WithShortcut:l,__namedExportsOrder:_e,default:Te},Symbol.toStringTag,{value:"Module"}));export{x as A,c as D,p as E,o as F,d as L,i as M,a as P,Ke as S,n as W,g as a,l as b,m as c,u as d,y as e,b as f,F as g};
