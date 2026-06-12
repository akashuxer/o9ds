import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./iframe-BaOp0t6F.js";import{A as r}from"./Combobox-BRLEGBie.js";const s=[{id:"apple",label:"Apple",value:"apple"},{id:"banana",label:"Banana",value:"banana"},{id:"cherry",label:"Cherry",value:"cherry"},{id:"date",label:"Date",value:"date"}],t=[{id:"apple",label:"Apple",value:"apple"},{id:"banana",label:"Banana",value:"banana"},{id:"cherry",label:"Cherry",value:"cherry"}],Fe=[{id:"citrus",label:"Citrus",items:[{id:"lemon",label:"Lemon",value:"lemon"},{id:"lime",label:"Lime",value:"lime"}]},{id:"berry",label:"Berries",items:[{id:"strawberry",label:"Strawberry",value:"strawberry"}]}],Le={title:"Inputs/Combobox",component:r,tags:["!dev","stable"],argTypes:{label:{control:{type:"text"}},placeholder:{control:{type:"text"}},size:{control:{type:"select"},options:["sm","lg"],table:{defaultValue:{summary:"lg"}}},width:{control:{type:"text"}},isFullWidth:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isDisabled:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isReadOnly:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isRequired:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isInvalid:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isLoading:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isClearable:{control:{type:"boolean"},table:{defaultValue:{summary:"true"}}},errorDisplay:{control:{type:"select"},options:["inline","tooltip","none"],table:{defaultValue:{summary:"inline"}}},onChange:{action:"changed",table:{category:"Events"}},onInputChange:{action:"inputChanged",table:{category:"Events"}}},args:{items:s,placeholder:"Type or pick a fruit",size:"lg",isDisabled:!1,isReadOnly:!1,isRequired:!1,isInvalid:!1,isLoading:!1,isClearable:!0,isFullWidth:!1,errorDisplay:"inline"},parameters:{docs:{description:{component:"Consolidated CSF for ArvoCombobox. Every story is docs-only\r\n(`tags: ['!dev', ...]`): they render on the attached `Combobox.mdx` page (the\r\nsingle sidebar node for this component), not as their own sidebar leaves."}}}},d={args:{items:s,label:"Fruit",placeholder:"Type or pick"}},c={args:{items:s,placeholder:"Pick a fruit"}},m={name:"With Value",args:{items:t,label:"Fruit",value:"banana"}},p={name:"With Label",args:{items:t,label:"Fruit"}},b={args:{items:t,label:"Fruit",isRequired:!0}},g={args:{items:[],label:""},render:()=>e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"flex-end"},children:[e.jsx(r,{items:t,label:"Small",size:"sm"}),e.jsx(r,{items:t,label:"Large",size:"lg"})]})},f={args:{items:t,label:"Fruit",isClearable:!0,value:"apple"}},h={args:{items:Fe,label:"Fruit",hasGroupDividers:!0}},y={name:"Full Width",args:{items:t,label:"Full width",isFullWidth:!0}},v={name:"Custom Width",args:{items:t,label:"Custom width",width:"420px"}},x={args:{items:t,label:"Disabled",isDisabled:!0}},S={args:{items:t,label:"Loading",isLoading:!0}},C={args:{items:[]},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:12,maxWidth:640},children:[e.jsx(r,{items:s,label:"Default"}),e.jsx(r,{items:s,label:"With value",value:"banana"}),e.jsx(r,{items:s,label:"Disabled",isDisabled:!0}),e.jsx(r,{items:s,label:"Error",isInvalid:!0,value:"apple",errorMsg:"Invalid selection"})]})},W={args:{items:[]},render:()=>{const[l,i]=u.useState("banana"),[a,n]=u.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,maxWidth:360},children:[e.jsx(r,{items:s,label:"Pick a fruit",value:l,inputValue:a,isClearable:!0,onChange:o=>{i((o==null?void 0:o.value)??null),n((o==null?void 0:o.label)??"")},onInputChange:n}),e.jsxs("span",{children:["Selected: ",String(l??"none")]})]})}},F={args:{items:[]},render:()=>e.jsx(r,{items:s,label:"Match anywhere (case-insensitive)",filterFn:(l,i)=>l.label.toLowerCase().includes(i.toLowerCase())})},L={args:{items:[]},render:()=>{const[l,i]=u.useState([]),[a,n]=u.useState(!0);return u.useEffect(()=>{const o=setTimeout(()=>{i(s),n(!1)},1200);return()=>clearTimeout(o)},[]),e.jsx(r,{items:l,label:"Fruits (async)",placeholder:"Loading...",isLoading:a})}},D={args:{items:[]},render:()=>{const[l,i]=u.useState([]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,maxWidth:360},children:[e.jsx(r,{items:s.filter(a=>!l.includes(String(a.value))),label:"Add a fruit",isClearable:!0,onChange:a=>i(n=>[...n,String(a==null?void 0:a.value)])}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4},children:l.map(a=>e.jsxs("span",{style:{padding:4},children:["#",a]},a))})]})}};var j,w,A;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    items: fruits,
    label: 'Fruit',
    placeholder: 'Type or pick'
  }
}`,...(A=(w=d.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var T,V,k;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    items: fruits,
    placeholder: 'Pick a fruit'
  }
}`,...(k=(V=c.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var I,P,E;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'With Value',
  args: {
    items: fruitsShort,
    label: 'Fruit',
    value: 'banana'
  }
}`,...(E=(P=m.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var R,z,q;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'With Label',
  args: {
    items: fruitsShort,
    label: 'Fruit'
  }
}`,...(q=(z=p.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var O,_,G;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    items: fruitsShort,
    label: 'Fruit',
    isRequired: true
  }
}`,...(G=(_=b.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var M,B,H;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    items: [],
    label: ''
  },
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'flex-end'
  }}>\r
      <ArvoCombobox items={fruitsShort} label="Small" size="sm" />\r
      <ArvoCombobox items={fruitsShort} label="Large" size="lg" />\r
    </div>
}`,...(H=(B=g.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var J,K,N;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    items: fruitsShort,
    label: 'Fruit',
    isClearable: true,
    value: 'apple'
  }
}`,...(N=(K=f.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var Q,U,X;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    items: grouped,
    label: 'Fruit',
    hasGroupDividers: true
  }
}`,...(X=(U=h.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Full Width',
  args: {
    items: fruitsShort,
    label: 'Full width',
    isFullWidth: true
  }
}`,...($=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,re;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Custom Width',
  args: {
    items: fruitsShort,
    label: 'Custom width',
    width: '420px'
  }
}`,...(re=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,te,le;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    items: fruitsShort,
    label: 'Disabled',
    isDisabled: true
  }
}`,...(le=(te=x.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var oe,ie,ne;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    items: fruitsShort,
    label: 'Loading',
    isLoading: true
  }
}`,...(ne=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};var ue,de,ce;C.parameters={...C.parameters,docs:{...(ue=C.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    items: []
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: 12,
    maxWidth: 640
  }}>\r
      <ArvoCombobox items={fruits} label="Default" />\r
      <ArvoCombobox items={fruits} label="With value" value="banana" />\r
      <ArvoCombobox items={fruits} label="Disabled" isDisabled />\r
      <ArvoCombobox items={fruits} label="Error" isInvalid value="apple" errorMsg="Invalid selection" />\r
    </div>
}`,...(ce=(de=C.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var me,pe,be;W.parameters={...W.parameters,docs:{...(me=W.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    items: []
  },
  render: () => {
    const [value, setValue] = useState<unknown>('banana');
    const [text, setText] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      maxWidth: 360
    }}>\r
        <ArvoCombobox items={fruits} label="Pick a fruit" value={value} inputValue={text} isClearable onChange={item => {
        setValue(item?.value ?? null);
        setText(item?.label ?? '');
      }} onInputChange={setText} />\r
        <span>Selected: {String(value ?? 'none')}</span>\r
      </div>;
  }
}`,...(be=(pe=W.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var ge,fe,he;F.parameters={...F.parameters,docs:{...(ge=F.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    items: []
  },
  render: () => <ArvoCombobox items={fruits} label="Match anywhere (case-insensitive)" filterFn={(item, query) => item.label.toLowerCase().includes(query.toLowerCase())} />
}`,...(he=(fe=F.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var ye,ve,xe;L.parameters={...L.parameters,docs:{...(ye=L.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    items: []
  },
  render: () => {
    const [items, setItems] = useState<typeof fruits>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const t = setTimeout(() => {
        setItems(fruits);
        setLoading(false);
      }, 1200);
      return () => clearTimeout(t);
    }, []);
    return <ArvoCombobox items={items} label="Fruits (async)" placeholder="Loading..." isLoading={loading} />;
  }
}`,...(xe=(ve=L.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var Se,Ce,We;D.parameters={...D.parameters,docs:{...(Se=D.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    items: []
  },
  render: () => {
    const [picked, setPicked] = useState<string[]>([]);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      maxWidth: 360
    }}>\r
        <ArvoCombobox items={fruits.filter(f => !picked.includes(String(f.value)))} label="Add a fruit" isClearable onChange={item => setPicked(p => [...p, String(item?.value)])} />\r
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 4
      }}>\r
          {picked.map(p => <span key={p} style={{
          padding: 4
        }}>#{p}</span>)}\r
        </div>\r
      </div>;
  }
}`,...(We=(Ce=D.parameters)==null?void 0:Ce.docs)==null?void 0:We.source}}};const De=["Playground","Default","WithValue","WithLabel","Required","Sizes","Clearable","Grouped","FullWidth","CustomWidth","Disabled","Loading","States","Controlled","CustomFilter","AsyncOptions","TaggedSelection"],Te=Object.freeze(Object.defineProperty({__proto__:null,AsyncOptions:L,Clearable:f,Controlled:W,CustomFilter:F,CustomWidth:v,Default:c,Disabled:x,FullWidth:y,Grouped:h,Loading:S,Playground:d,Required:b,Sizes:g,States:C,TaggedSelection:D,WithLabel:p,WithValue:m,__namedExportsOrder:De,default:Le},Symbol.toStringTag,{value:"Module"}));export{L as A,Te as C,x as D,y as F,h as G,S as L,d as P,b as R,g as S,D as T,p as W,m as a,f as b,C as c,W as d,v as e,F as f};
