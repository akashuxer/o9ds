import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./iframe-BaOp0t6F.js";import{f as xa,a as Sa}from"./index18-B-vHVXJV.js";import{n as ka,u as wa}from"./menu-search-C2FCcKsr.js";import{F as La}from"./FormLabel-Dn-HbpfA.js";import{A as Da}from"./Search-B0ooNraj.js";import{r as Ca}from"./loading-flag-DkqmYwgU.js";import{A as ne}from"./IconButton-BgwDUYzG.js";function ee(l){return l.length>0&&"items"in l[0]}function le(l){return ee(l)?l.flatMap(i=>i.items):l}const B=s.forwardRef(function({items:i,value:g,defaultValue:J,label:b,isMultiple:d=!1,search:v,isLoading:X=!1,isDisabled:m=!1,isRequired:$=!1,emptyMessage:o="No options",hasGroupDividers:Z=!0,onChange:h,onHighlight:K,onFilter:F,className:ra},ta){const k=`arvo-listbox-${s.useId()}`,ae=`${k}-lbl`,z=s.useCallback(e=>`${k}-opt-${e}`,[k]),r=s.useMemo(()=>ka(v,{shortcut:"/"}),[v]),se=s.useRef(null),oa=s.useRef(null),w=Ca(),Q=g!==void 0,[na,re]=s.useState(()=>J??(d?[]:void 0)),y=Q?g:na,la=s.useCallback(e=>d?(Array.isArray(y)?y:[]).includes(e):y===e,[y,d]),[p,te]=s.useState(""),D=s.useMemo(()=>!r||!p?i:ee(i)?xa(i,{query:p}):Sa(i,{query:p}),[i,r,p]),n=s.useMemo(()=>le(D),[D]),ia=s.useMemo(()=>le(i).length,[i]);s.useEffect(()=>{var e;r&&p&&((e=r.onFilter)==null||e.call(r,p,n.length),F==null||F(p,n.length))},[r,p,n.length,F]);const L=s.useCallback(e=>{if(!e.isDisabled)if(d){const a=Array.isArray(y)?[...y]:[],u=a.indexOf(e.value);u>=0?a.splice(u,1):a.push(e.value),Q||re(a),h==null||h(a,e)}else Q||re(e.value),h==null||h(e.value,e)},[y,d,Q,h]),ca=s.useCallback(e=>{var u;const a=(u=se.current)==null?void 0:u.querySelector(`[id="${z(e)}"]`);a==null||a.scrollIntoView({block:"nearest"})},[z]),ua=s.useCallback((e,a)=>{L(e)},[L]),{activeIndex:c,setActiveIndex:f,handleKeyDown:U}=wa({items:n,onSelect:ua,wrap:!0,enabled:!m&&!w,scrollToIndex:ca});s.useEffect(()=>{if(c>=0&&c<n.length){const e=n[c];K==null||K(e.value,e)}},[c,n,K]),s.useEffect(()=>{const e=n.findIndex(a=>!a.isDisabled);f(e>=0?e:0)},[n,f]);const da=s.useCallback(e=>{m||w||U(e)},[m,w,U]),ma=s.useCallback(e=>{te(e),f(0)},[f]),pa=s.useCallback(()=>{var e;te(""),f(0),(e=r==null?void 0:r.onClear)==null||e.call(r)},[f,r]),ba=s.useCallback(e=>{switch(e.key){case"ArrowDown":case"ArrowUp":case"Home":case"End":e.preventDefault(),U(e);break;case"Enter":if(e.preventDefault(),c>=0&&c<n.length){const a=n[c];a.isDisabled||L(a)}break}},[U,c,n,L]),fa=s.useCallback((e,a)=>{e.isDisabled||w||(f(a),L(e))},[w,f,L]),ga=["arvo-listbox",d&&"arvo-listbox--multiple",r&&"arvo-listbox--searchable",w,m&&"is-disabled",ra].filter(Boolean).join(" "),oe=(e,a)=>{const u=la(e.value),Y=a===c,H=["arvo-listbox__opt",e.isDisabled&&"is-disabled",Y&&"highlighted",u&&"active"].filter(Boolean).join(" ");return t.jsxs("div",{id:z(a),className:H,role:"option","aria-selected":u,"aria-disabled":e.isDisabled||void 0,onClick:()=>fa(e,a),children:[e.icon&&t.jsx("span",{className:`arvo-listbox__opt__ico o9con o9con-${e.icon}`,"aria-hidden":"true"}),t.jsx("span",{className:"arvo-listbox__opt__lbl",children:e.label})]},e.id)},va=()=>{if(n.length===0)return t.jsx("div",{className:"arvo-listbox__empty",role:"status",children:o});if(ee(D)){let e=0;return D.map((a,u)=>{const Y=`${k}-grp-${u}`;return t.jsxs("div",{children:[u>0&&Z&&t.jsx("hr",{className:"arvo-listbox__divider",role:"separator"}),t.jsxs("div",{role:"group","aria-labelledby":a.label?Y:void 0,className:"arvo-listbox__grp",children:[a.label&&t.jsx("div",{id:Y,className:"arvo-listbox__grp-hdr",children:a.label}),a.items.map(H=>{const ya=oe(H,e);return e++,ya})]})]},a.id)})}return D.map((e,a)=>oe(e,a))},ha=c>=0&&c<n.length?z(c):void 0;return t.jsxs("div",{ref:ta,className:ga,children:[b&&t.jsx(La,{htmlFor:k,id:ae,isRequired:$,isDisabled:m,className:"arvo-listbox__lbl",children:b}),r&&t.jsx("div",{ref:oa,className:["arvo-listbox__search",r.className].filter(Boolean).join(" "),onKeyDown:ba,children:t.jsx(Da,{variant:"filter",value:p,placeholder:r.placeholder,searchMode:r.searchMode,minChars:r.minChars,isClearable:r.isClearable,shortcut:r.shortcut,errorMsg:r.errorMsg,errorDisplay:"tooltip",counter:r.counter&&p?{current:n.length,total:ia}:null,onSearch:ma,onClear:pa,isDisabled:m,"aria-label":"Filter options"})}),t.jsx("div",{ref:se,id:k,className:"arvo-listbox__list",role:"listbox",tabIndex:m?-1:0,"aria-multiselectable":d||void 0,"aria-activedescendant":ha,"aria-busy":void 0,"aria-labelledby":b?ae:void 0,"aria-disabled":m||void 0,"aria-required":$||void 0,onKeyDown:da,children:va()})]})});B.__docgenInfo={description:"",methods:[],displayName:"ArvoListbox",props:{items:{required:!0,tsType:{name:"union",raw:"ListboxOptionData[] | ListGroup<ListboxOptionData>[]",elements:[{name:"Array",elements:[{name:"ListboxOptionData"}],raw:"ListboxOptionData[]"},{name:"Array",elements:[{name:"ListGroup",elements:[{name:"ListboxOptionData"}],raw:"ListGroup<ListboxOptionData>"}],raw:"ListGroup<ListboxOptionData>[]"}]},description:""},value:{required:!1,tsType:{name:"union",raw:"unknown | unknown[]",elements:[{name:"unknown"},{name:"Array",elements:[{name:"unknown"}],raw:"unknown[]"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"unknown | unknown[]",elements:[{name:"unknown"},{name:"Array",elements:[{name:"unknown"}],raw:"unknown[]"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},isMultiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},search:{required:!1,tsType:{name:"union",raw:"boolean | MenuSearchConfig",elements:[{name:"boolean"},{name:"MenuSearchConfig"}]},description:"Enable search with defaults (`true`) or pass a config object."},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'No options'",computed:!1}},hasGroupDividers:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: unknown | unknown[], option: ListboxOptionData) => void",signature:{arguments:[{type:{name:"union",raw:"unknown | unknown[]",elements:[{name:"unknown"},{name:"Array",elements:[{name:"unknown"}],raw:"unknown[]"}]},name:"value"},{type:{name:"ListboxOptionData"},name:"option"}],return:{name:"void"}}},description:""},onHighlight:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: unknown, option: ListboxOptionData) => void",signature:{arguments:[{type:{name:"unknown"},name:"value"},{type:{name:"ListboxOptionData"},name:"option"}],return:{name:"void"}}},description:""},onFilter:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string, matchCount: number) => void",signature:{arguments:[{type:{name:"string"},name:"query"},{type:{name:"number"},name:"matchCount"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const x=[{id:"red",label:"Red",value:"red"},{id:"green",label:"Green",value:"green"},{id:"blue",label:"Blue",value:"blue"},{id:"yellow",label:"Yellow",value:"yellow"}],S=[{id:"red",label:"Red",value:"red"},{id:"green",label:"Green",value:"green"},{id:"blue",label:"Blue",value:"blue"}],sa=[{id:"warm",label:"Warm",items:[{id:"red",label:"Red",value:"red"},{id:"orange",label:"Orange",value:"orange"}]},{id:"cool",label:"Cool",items:[{id:"blue",label:"Blue",value:"blue"},{id:"green",label:"Green",value:"green"}]}],Pa=S.map(l=>({...l,icon:"circle"})),_a={title:"Inputs/Listbox",component:B,tags:["!dev","stable"],argTypes:{label:{control:{type:"text"}},isMultiple:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},search:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isDisabled:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isRequired:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},hasGroupDividers:{control:{type:"boolean"},table:{defaultValue:{summary:"true"}}},emptyMessage:{control:{type:"text"}},onChange:{action:"changed",table:{category:"Events"}}},args:{items:x,isMultiple:!1,isLoading:!1,isDisabled:!1,isRequired:!1,hasGroupDividers:!0},parameters:{docs:{description:{component:"Consolidated CSF for ArvoListbox. Every story is docs-only\r\n(`tags: ['!dev', ...]`): they render on the attached `Listbox.mdx` page (the\r\nsingle sidebar node for this component), not as their own sidebar leaves."}}}},C={args:{items:x,label:"Pick a color"}},P={args:{items:x,label:"Pick a color"}},_={args:{items:S,label:"Colors",isMultiple:!0}},j={name:"With Label",args:{items:S,label:"Pick"}},I={name:"With Groups",args:{items:sa,label:"Color groups",hasGroupDividers:!0}},A={name:"Groups (No Dividers)",args:{items:sa,label:"Color groups"}},G={args:{items:S,label:"Search",search:!0}},O={name:"With Icons",args:{items:Pa,label:"Color"}},N={name:"Disabled Options",args:{items:[{id:"red",label:"Red",value:"red"},{id:"green",label:"Green",value:"green",isDisabled:!0},{id:"blue",label:"Blue",value:"blue"}],label:"Color"}},q={name:"Disabled Listbox",args:{items:S,label:"Color",isDisabled:!0}},M={args:{items:S,label:"Color",isLoading:!0}},R={name:"Empty State",args:{items:[],label:"Color"}},T={name:"Custom Empty Message",args:{items:[],label:"Color",emptyMessage:"Nothing to show."}},V={args:{items:S,label:"Color",defaultValue:"green"}},E={args:{items:[]},render:()=>{const[l,i]=s.useState("green");return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,maxWidth:320},children:[t.jsx(B,{items:x,label:"Pick a color",value:l,onChange:g=>i(g)}),t.jsxs("span",{children:["Selected: ",String(l)]})]})}},W={args:{items:[]},render:()=>{const l=x.map(o=>o.id),[i,g]=s.useState([]),J=l.filter(o=>!i.includes(o)),[b,d]=s.useState(null),[v,X]=s.useState(null),m=()=>{typeof b=="string"&&(g(o=>[...o,b]),d(null))},$=()=>{typeof v=="string"&&(g(o=>o.filter(Z=>Z!==v)),X(null))};return t.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[t.jsx(B,{items:x.filter(o=>J.includes(o.id)),label:"Available",value:b,onChange:o=>d(o)}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[t.jsx(ne,{variant:"secondary",icon:"chevron-right",tooltip:"Add",onClick:m,isDisabled:b==null}),t.jsx(ne,{variant:"secondary",icon:"chevron-left",tooltip:"Remove",onClick:$,isDisabled:v==null})]}),t.jsx(B,{items:x.filter(o=>i.includes(o.id)),label:"Selected",value:v,onChange:o=>X(o)})]})}};var ie,ce,ue;C.parameters={...C.parameters,docs:{...(ie=C.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    items: colors,
    label: 'Pick a color'
  }
}`,...(ue=(ce=C.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,me,pe;P.parameters={...P.parameters,docs:{...(de=P.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    items: colors,
    label: 'Pick a color'
  }
}`,...(pe=(me=P.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var be,fe,ge;_.parameters={..._.parameters,docs:{...(be=_.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    items: colorsShort,
    label: 'Colors',
    isMultiple: true
  }
}`,...(ge=(fe=_.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var ve,he,ye;j.parameters={...j.parameters,docs:{...(ve=j.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: 'With Label',
  args: {
    items: colorsShort,
    label: 'Pick'
  }
}`,...(ye=(he=j.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var xe,Se,ke;I.parameters={...I.parameters,docs:{...(xe=I.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: 'With Groups',
  args: {
    items: grouped,
    label: 'Color groups',
    hasGroupDividers: true
  }
}`,...(ke=(Se=I.parameters)==null?void 0:Se.docs)==null?void 0:ke.source}}};var we,Le,De;A.parameters={...A.parameters,docs:{...(we=A.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: 'Groups (No Dividers)',
  args: {
    items: grouped,
    label: 'Color groups'
  }
}`,...(De=(Le=A.parameters)==null?void 0:Le.docs)==null?void 0:De.source}}};var Ce,Pe,_e;G.parameters={...G.parameters,docs:{...(Ce=G.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    items: colorsShort,
    label: 'Search',
    search: true
  }
}`,...(_e=(Pe=G.parameters)==null?void 0:Pe.docs)==null?void 0:_e.source}}};var je,Ie,Ae;O.parameters={...O.parameters,docs:{...(je=O.parameters)==null?void 0:je.docs,source:{originalSource:`{
  name: 'With Icons',
  args: {
    items: withIcons,
    label: 'Color'
  }
}`,...(Ae=(Ie=O.parameters)==null?void 0:Ie.docs)==null?void 0:Ae.source}}};var Ge,Oe,Ne;N.parameters={...N.parameters,docs:{...(Ge=N.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  name: 'Disabled Options',
  args: {
    items: [{
      id: 'red',
      label: 'Red',
      value: 'red'
    }, {
      id: 'green',
      label: 'Green',
      value: 'green',
      isDisabled: true
    }, {
      id: 'blue',
      label: 'Blue',
      value: 'blue'
    }],
    label: 'Color'
  }
}`,...(Ne=(Oe=N.parameters)==null?void 0:Oe.docs)==null?void 0:Ne.source}}};var qe,Me,Re;q.parameters={...q.parameters,docs:{...(qe=q.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  name: 'Disabled Listbox',
  args: {
    items: colorsShort,
    label: 'Color',
    isDisabled: true
  }
}`,...(Re=(Me=q.parameters)==null?void 0:Me.docs)==null?void 0:Re.source}}};var Te,Ve,Ee;M.parameters={...M.parameters,docs:{...(Te=M.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    items: colorsShort,
    label: 'Color',
    isLoading: true
  }
}`,...(Ee=(Ve=M.parameters)==null?void 0:Ve.docs)==null?void 0:Ee.source}}};var We,Be,$e;R.parameters={...R.parameters,docs:{...(We=R.parameters)==null?void 0:We.docs,source:{originalSource:`{
  name: 'Empty State',
  args: {
    items: [],
    label: 'Color'
  }
}`,...($e=(Be=R.parameters)==null?void 0:Be.docs)==null?void 0:$e.source}}};var Ke,Fe,ze;T.parameters={...T.parameters,docs:{...(Ke=T.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  name: 'Custom Empty Message',
  args: {
    items: [],
    label: 'Color',
    emptyMessage: 'Nothing to show.'
  }
}`,...(ze=(Fe=T.parameters)==null?void 0:Fe.docs)==null?void 0:ze.source}}};var Qe,Ue,Ye;V.parameters={...V.parameters,docs:{...(Qe=V.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  args: {
    items: colorsShort,
    label: 'Color',
    defaultValue: 'green'
  }
}`,...(Ye=(Ue=V.parameters)==null?void 0:Ue.docs)==null?void 0:Ye.source}}};var Je,Xe,Ze;E.parameters={...E.parameters,docs:{...(Je=E.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  args: {
    items: []
  },
  render: () => {
    const [value, setValue] = useState<unknown>('green');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      maxWidth: 320
    }}>\r
        <ArvoListbox items={colors} label="Pick a color" value={value} onChange={v => setValue(v)} />\r
        <span>Selected: {String(value)}</span>\r
      </div>;
  }
}`,...(Ze=(Xe=E.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var He,ea,aa;W.parameters={...W.parameters,docs:{...(He=W.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    items: []
  },
  render: () => {
    const all = colors.map(i => i.id);
    const [selected, setSelected] = useState<string[]>([]);
    const available = all.filter(id => !selected.includes(id));
    const [leftPick, setLeftPick] = useState<unknown>(null);
    const [rightPick, setRightPick] = useState<unknown>(null);
    const moveRight = () => {
      if (typeof leftPick === 'string') {
        setSelected(s => [...s, leftPick]);
        setLeftPick(null);
      }
    };
    const moveLeft = () => {
      if (typeof rightPick === 'string') {
        setSelected(s => s.filter(id => id !== rightPick));
        setRightPick(null);
      }
    };
    return <div style={{
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }}>\r
        <ArvoListbox items={colors.filter(i => available.includes(i.id))} label="Available" value={leftPick} onChange={v => setLeftPick(v)} />\r
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }}>\r
          <ArvoIconButton variant="secondary" icon="chevron-right" tooltip="Add" onClick={moveRight} isDisabled={leftPick == null} />\r
          <ArvoIconButton variant="secondary" icon="chevron-left" tooltip="Remove" onClick={moveLeft} isDisabled={rightPick == null} />\r
        </div>\r
        <ArvoListbox items={colors.filter(i => selected.includes(i.id))} label="Selected" value={rightPick} onChange={v => setRightPick(v)} />\r
      </div>;
  }
}`,...(aa=(ea=W.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};const ja=["Playground","Default","MultipleSelection","WithLabel","WithGroups","GroupsNoDividers","Searchable","WithIcons","DisabledOptions","DisabledListbox","Loading","EmptyState","CustomEmptyMessage","PreSelected","Controlled","TransferList"],Va=Object.freeze(Object.defineProperty({__proto__:null,Controlled:E,CustomEmptyMessage:T,Default:P,DisabledListbox:q,DisabledOptions:N,EmptyState:R,GroupsNoDividers:A,Loading:M,MultipleSelection:_,Playground:C,PreSelected:V,Searchable:G,TransferList:W,WithGroups:I,WithIcons:O,WithLabel:j,__namedExportsOrder:ja,default:_a},Symbol.toStringTag,{value:"Module"}));export{T as C,N as D,R as E,A as G,Va as L,_ as M,C as P,G as S,W as T,I as W,V as a,O as b,q as c,M as d,E as e};
