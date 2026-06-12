import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as D}from"./iframe-BaOp0t6F.js";import{A as r}from"./Select-BLh_A-b9.js";import{A as We}from"./Search-B0ooNraj.js";import{A as Ae}from"./Button-B8O_kk1m.js";const a=[{id:"apple",label:"Apple",value:"apple"},{id:"banana",label:"Banana",value:"banana"},{id:"cherry",label:"Cherry",value:"cherry"}],Ie=[{id:"citrus",label:"Citrus",items:[{id:"lemon",label:"Lemon",value:"lemon"},{id:"lime",label:"Lime",value:"lime"}]},{id:"berry",label:"Berries",items:[{id:"strawberry",label:"Strawberry",value:"strawberry"},{id:"blueberry",label:"Blueberry",value:"blueberry"}]}],je={us:[{id:"ca",label:"California",value:"ca"},{id:"tx",label:"Texas",value:"tx"},{id:"ny",label:"New York",value:"ny"}],ca:[{id:"on",label:"Ontario",value:"on"},{id:"qc",label:"Quebec",value:"qc"},{id:"bc",label:"British Columbia",value:"bc"}]},Fe={title:"Inputs/Select",component:r,tags:["!dev","stable"],argTypes:{label:{control:{type:"text"}},placeholder:{control:{type:"text"}},size:{control:{type:"select"},options:["sm","lg"],table:{defaultValue:{summary:"lg"}}},width:{control:{type:"text"}},isFullWidth:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isDisabled:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isReadOnly:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isRequired:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isInvalid:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isLoading:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},errorDisplay:{control:{type:"select"},options:["inline","tooltip","none"],table:{defaultValue:{summary:"inline"}}},onChange:{action:"changed",table:{category:"Events"}},onOpen:{action:"opened",table:{category:"Events"}},onClose:{action:"closed",table:{category:"Events"}}},args:{items:a,placeholder:"Choose a fruit",size:"lg",isDisabled:!1,isReadOnly:!1,isRequired:!1,isInvalid:!1,isLoading:!1,errorDisplay:"inline",isFullWidth:!1},parameters:{docs:{description:{component:"Consolidated CSF for ArvoSelect. Every story is docs-only\r\n(`tags: ['!dev', ...]`): they render on the attached `Select.mdx` page (the\r\nsingle sidebar node for this component), not as their own sidebar leaves."}}}},o={args:{items:a,label:"Fruit",placeholder:"Choose one"}},n={args:{items:a,placeholder:"Choose a fruit"}},u={name:"With Value",args:{items:a,value:"banana",label:"Fruit"}},d={name:"With Label",args:{items:a,label:"Pick a fruit",placeholder:"Select"}},c={args:{items:a,label:"Fruit",isRequired:!0}},m={args:{items:[],label:""},render:()=>e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"flex-end"},children:[e.jsx(r,{items:a,label:"Small",size:"sm",placeholder:"sm"}),e.jsx(r,{items:a,label:"Large",size:"lg",placeholder:"lg"})]})},p={args:{items:a,label:"Fruit",search:!0}},b={args:{items:Ie,label:"Grouped",hasGroupDividers:!0}},g={args:{items:a,label:"Disabled",isDisabled:!0}},v={args:{items:a,label:"Loading",isLoading:!0}},h={name:"Full Width",args:{items:a,label:"Full width",isFullWidth:!0}},f={name:"Custom Width",args:{items:a,label:"Custom width",width:"420px"}},y={args:{items:[]},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:12,maxWidth:640},children:[e.jsx(r,{items:a,label:"Default",placeholder:"Select"}),e.jsx(r,{items:a,label:"With value",value:"banana"}),e.jsx(r,{items:a,label:"Disabled",isDisabled:!0}),e.jsx(r,{items:a,label:"Error",isInvalid:!0,value:"apple",errorMsg:"Invalid selection"})]})},S={args:{items:[]},render:()=>{const[t,i]=D.useState("banana");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,maxWidth:360},children:[e.jsx(r,{items:a,label:"Pick a fruit",value:t,onChange:s=>i((s==null?void 0:s.value)??null)}),e.jsxs("span",{children:["Selected: ",String(t??"none")]})]})}},x={args:{items:[]},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:12,maxWidth:640},children:[e.jsx(r,{items:a,label:"Inline error",isInvalid:!0,errorDisplay:"tooltip",value:"apple"}),e.jsx(r,{items:a,label:"Alert error (default)",isInvalid:!0,value:"apple",errorMsg:"Pick another option"})]})},C={args:{items:[]},render:()=>{const[t,i]=D.useState("us"),[s,W]=D.useState("ca"),A=je[t]??[];return e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"flex-end"},children:[e.jsx(r,{items:[{id:"us",label:"United States",value:"us"},{id:"ca",label:"Canada",value:"ca"}],label:"Country",value:t,onChange:l=>{const De=(l==null?void 0:l.value)??"us";i(De),W(null)}}),e.jsx(r,{items:A,label:"State / Province",value:s,isDisabled:A.length===0,onChange:l=>W((l==null?void 0:l.value)??null)})]})}},w={args:{items:[]},render:()=>{const[t,i]=D.useState("newest");return e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"flex-end"},children:[e.jsx(We,{variant:"filter",placeholder:"Search",width:"280px"}),e.jsx(r,{items:[{id:"newest",label:"Newest",value:"newest"},{id:"oldest",label:"Oldest",value:"oldest"},{id:"az",label:"A-Z",value:"az"}],label:"Sort by",value:t,onChange:s=>i((s==null?void 0:s.value)??"newest")}),e.jsx(Ae,{variant:"secondary",icon:"plus",label:"New"})]})}};var I,j,F;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    items: fruits,
    label: 'Fruit',
    placeholder: 'Choose one'
  }
}`,...(F=(j=o.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var L,V,R;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    items: fruits,
    placeholder: 'Choose a fruit'
  }
}`,...(R=(V=n.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var z,E,P;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'With Value',
  args: {
    items: fruits,
    value: 'banana',
    label: 'Fruit'
  }
}`,...(P=(E=u.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var O,T,k;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'With Label',
  args: {
    items: fruits,
    label: 'Pick a fruit',
    placeholder: 'Select'
  }
}`,...(k=(T=d.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var q,G,N;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    items: fruits,
    label: 'Fruit',
    isRequired: true
  }
}`,...(N=(G=c.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var B,_,M;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    items: [],
    label: ''
  },
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'flex-end'
  }}>\r
      <ArvoSelect items={fruits} label="Small" size="sm" placeholder="sm" />\r
      <ArvoSelect items={fruits} label="Large" size="lg" placeholder="lg" />\r
    </div>
}`,...(M=(_=m.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var U,Z,Q;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    items: fruits,
    label: 'Fruit',
    search: true
  }
}`,...(Q=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:Q.source}}};var Y,H,J;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    items: groupedItems,
    label: 'Grouped',
    hasGroupDividers: true
  }
}`,...(J=(H=b.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,X,$;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    items: fruits,
    label: 'Disabled',
    isDisabled: true
  }
}`,...($=(X=g.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var ee,ae,re;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    items: fruits,
    label: 'Loading',
    isLoading: true
  }
}`,...(re=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,te,le;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'Full Width',
  args: {
    items: fruits,
    label: 'Full width',
    isFullWidth: true
  }
}`,...(le=(te=h.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var ie,oe,ne;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Custom Width',
  args: {
    items: fruits,
    label: 'Custom width',
    width: '420px'
  }
}`,...(ne=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ue,de,ce;y.parameters={...y.parameters,docs:{...(ue=y.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    items: []
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: 12,
    maxWidth: 640
  }}>\r
      <ArvoSelect items={fruits} label="Default" placeholder="Select" />\r
      <ArvoSelect items={fruits} label="With value" value="banana" />\r
      <ArvoSelect items={fruits} label="Disabled" isDisabled />\r
      <ArvoSelect items={fruits} label="Error" isInvalid value="apple" errorMsg="Invalid selection" />\r
    </div>
}`,...(ce=(de=y.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var me,pe,be;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    items: []
  },
  render: () => {
    const [value, setValue] = useState<unknown>('banana');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      maxWidth: 360
    }}>\r
        <ArvoSelect items={fruits} label="Pick a fruit" value={value} onChange={item => setValue(item?.value ?? null)} />\r
        <span>Selected: {String(value ?? 'none')}</span>\r
      </div>;
  }
}`,...(be=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var ge,ve,he;x.parameters={...x.parameters,docs:{...(ge=x.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    items: []
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: 12,
    maxWidth: 640
  }}>\r
      <ArvoSelect items={fruits} label="Inline error" isInvalid errorDisplay="tooltip" value="apple" />\r
      <ArvoSelect items={fruits} label="Alert error (default)" isInvalid value="apple" errorMsg="Pick another option" />\r
    </div>
}`,...(he=(ve=x.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};var fe,ye,Se;C.parameters={...C.parameters,docs:{...(fe=C.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    items: []
  },
  render: () => {
    const [country, setCountry] = useState<string>('us');
    const [state, setState] = useState<string | null>('ca');
    const states = COUNTRIES[country] ?? [];
    return <div style={{
      display: 'flex',
      gap: 12,
      alignItems: 'flex-end'
    }}>\r
        <ArvoSelect items={[{
        id: 'us',
        label: 'United States',
        value: 'us'
      }, {
        id: 'ca',
        label: 'Canada',
        value: 'ca'
      }]} label="Country" value={country} onChange={item => {
        const next = item?.value as string ?? 'us';
        setCountry(next);
        setState(null);
      }} />\r
        <ArvoSelect items={states} label="State / Province" value={state} isDisabled={states.length === 0} onChange={item => setState(item?.value as string ?? null)} />\r
      </div>;
  }
}`,...(Se=(ye=C.parameters)==null?void 0:ye.docs)==null?void 0:Se.source}}};var xe,Ce,we;w.parameters={...w.parameters,docs:{...(xe=w.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    items: []
  },
  render: () => {
    const [sort, setSort] = useState<string>('newest');
    return <div style={{
      display: 'flex',
      gap: 12,
      alignItems: 'flex-end'
    }}>\r
        <ArvoSearch variant="filter" placeholder="Search" width="280px" />\r
        <ArvoSelect items={[{
        id: 'newest',
        label: 'Newest',
        value: 'newest'
      }, {
        id: 'oldest',
        label: 'Oldest',
        value: 'oldest'
      }, {
        id: 'az',
        label: 'A-Z',
        value: 'az'
      }]} label="Sort by" value={sort} onChange={item => setSort(item?.value as string ?? 'newest')} />\r
        <ArvoButton variant="secondary" icon="plus" label="New" />\r
      </div>;
  }
}`,...(we=(Ce=w.parameters)==null?void 0:Ce.docs)==null?void 0:we.source}}};const Le=["Playground","Default","WithValue","WithLabel","Required","Sizes","Filterable","Grouped","Disabled","Loading","FullWidth","CustomWidth","States","Controlled","InlineError","DependentSelects","SortAndFilterRow"],Oe=Object.freeze(Object.defineProperty({__proto__:null,Controlled:S,CustomWidth:f,Default:n,DependentSelects:C,Disabled:g,Filterable:p,FullWidth:h,Grouped:b,InlineError:x,Loading:v,Playground:o,Required:c,Sizes:m,SortAndFilterRow:w,States:y,WithLabel:d,WithValue:u,__namedExportsOrder:Le,default:Fe},Symbol.toStringTag,{value:"Module"}));export{S as C,C as D,p as F,b as G,x as I,o as P,c as R,Oe as S,d as W,u as a,m as b,y as c,h as d,f as e,w as f};
