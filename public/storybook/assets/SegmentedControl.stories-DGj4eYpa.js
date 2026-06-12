import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-BaOp0t6F.js";import{u as ra}from"./useControllableState-BcENo7ec.js";import{r as sa}from"./loading-flag-DkqmYwgU.js";const _=n.forwardRef(function({items:r,value:m,defaultValue:p=null,variant:H="primary",size:Y="lg",isIconOnly:N=!1,isDisabled:o=!1,isLoading:ua=!1,ariaLabel:Be,onChange:W,className:B,...Je},Qe){const u=sa(),[i,J]=ra(m,p),Q=n.useRef([]),Xe=n.useMemo(()=>["arvo-seg-ctrl",`arvo-seg-ctrl--${H}`,`arvo-seg-ctrl--${Y}`,N&&"arvo-seg-ctrl--icon-only",o&&"is-disabled",u,B].filter(Boolean).join(" "),[H,Y,N,o,u,B]),q=n.useCallback(e=>{if(o||u||e===i)return;const a=r.find(c=>c.value===e);if(!a||a.isDisabled)return;const l=i??null;J(e),W==null||W({value:e,previousValue:l})},[o,u,r,i,J,W]),Ze=n.useCallback(e=>{if(o||u)return;const{key:a}=e,l=a==="ArrowLeft"||a==="ArrowUp",c=a==="ArrowRight"||a==="ArrowDown",F=a==="Home",z=a==="End",K=a==="Enter"||a===" ";if(!l&&!c&&!F&&!z&&!K)return;const s=r.map((f,M)=>({item:f,idx:M,el:Q.current[M]})).filter(({item:f,el:M})=>M&&!f.isDisabled);if(s.length===0)return;const aa=document.activeElement,d=s.findIndex(({el:f})=>f===aa);if(K){if(d===-1)return;e.preventDefault(),q(s[d].item.value);return}e.preventDefault();let g;F?g=0:z?g=s.length-1:c?g=d===-1?0:(d+1)%s.length:g=d===-1?s.length-1:(d-1+s.length)%s.length;const b=s[g];b!=null&&b.el&&(b.el.focus(),q(b.item.value))},[o,u,r,q]),G=n.useMemo(()=>r.filter(e=>!e.isDisabled),[r]),ea=n.useMemo(()=>{var e;if(typeof i=="string"){const a=G.find(l=>l.value===i);if(a)return a.value}return((e=G[0])==null?void 0:e.value)??null},[G,i]);return t.jsx("div",{ref:Qe,className:Xe,role:"radiogroup","aria-label":Be,"aria-busy":void 0,"aria-disabled":o||void 0,onKeyDown:Ze,...Je,children:r.map((e,a)=>{const l=o||(e.isDisabled??!1),c=i===e.value,F=e.value===ea&&!l?0:-1,z=s=>{Q.current[a]=s},K=e.label??e.value;return t.jsxs("button",{ref:z,type:"button",role:"radio",className:"arvo-seg-ctrl__opt","aria-checked":c,"aria-disabled":l||void 0,"aria-label":N?K:void 0,tabIndex:F,disabled:l,"data-value":e.value,onClick:()=>q(e.value),children:[e.icon&&t.jsx("span",{className:`arvo-seg-ctrl__ico o9con o9con-${e.icon}`,"aria-hidden":"true"}),!N&&e.label&&t.jsx("span",{className:"arvo-seg-ctrl__lbl",children:e.label})]},e.value)})})});_.__docgenInfo={description:"",methods:[],displayName:"ArvoSegmentedControl",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"SegmentedControlItem"}],raw:"SegmentedControlItem[]"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'lg'",computed:!1}},isIconOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},ariaLabel:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: SegmentedControlChangeDetail) => void",signature:{arguments:[{type:{name:"SegmentedControlChangeDetail"},name:"detail"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const ta=[{value:"list",label:"List"},{value:"grid",label:"Grid"},{value:"kanban",label:"Kanban"}],R=[{value:"list",label:"List"},{value:"grid",label:"Grid"}],la=[{value:"compact",label:"Compact"},{value:"comfortable",label:"Comfortable"},{value:"spacious",label:"Spacious"}],U=[{value:"day",label:"Day"},{value:"week",label:"Week"},{value:"month",label:"Month"}],na=[{value:"and",label:"AND"},{value:"or",label:"OR"}],$=[{value:"list",label:"List",icon:"list"},{value:"grid",label:"Grid",icon:"th"},{value:"kanban",label:"Kanban",icon:"columns"}],oa={title:"Actions/SegmentedControl",component:_,tags:["!dev","stable"],argTypes:{items:{control:{type:"object"}},ariaLabel:{control:{type:"text"}},value:{control:{type:"text"}},defaultValue:{control:{type:"text"}},variant:{control:{type:"radio"},options:["primary","secondary"],table:{defaultValue:{summary:"primary"}}},size:{control:{type:"radio"},options:["sm","lg"],table:{defaultValue:{summary:"lg"}}},isIconOnly:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isDisabled:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},isLoading:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}}},args:{items:ta,ariaLabel:"View type",defaultValue:"list",variant:"primary",size:"lg",isIconOnly:!1,isDisabled:!1,isLoading:!1}},v={args:{defaultValue:"list"}},y={args:{defaultValue:"list"}},V={args:{items:R,defaultValue:"list",ariaLabel:"View type"}},L={args:{items:la,defaultValue:"comfortable",ariaLabel:"Density"}},S={args:{items:U,defaultValue:"week",ariaLabel:"Time period"}},w={args:{items:na,defaultValue:"and",ariaLabel:"Filter operator"}},I={args:{items:U,defaultValue:"week",ariaLabel:"Primary",variant:"primary"}},O={args:{items:U,defaultValue:"week",ariaLabel:"Secondary",variant:"secondary"}},D={args:{items:R,defaultValue:"list",ariaLabel:"Small",size:"sm"}},h={args:{items:R,defaultValue:"list",ariaLabel:"Large",size:"lg"}},C={args:{items:$,defaultValue:"list",ariaLabel:"View",isIconOnly:!0}},T={args:{ariaLabel:"View",items:[{value:"list",label:"List"},{value:"grid",label:"Grid",isDisabled:!0},{value:"kanban",label:"Kanban"}],defaultValue:"list"}},x={args:{items:R,defaultValue:"list",ariaLabel:"View",isDisabled:!0}},E={args:{items:R,defaultValue:"list",ariaLabel:"View",isLoading:!0}},A={args:{items:[],ariaLabel:""},name:"Controlled view switcher",render:()=>{function j(){const[r,m]=n.useState("list");return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[t.jsx(_,{ariaLabel:"View type",items:$,value:r,onChange:({value:p})=>m(p)}),t.jsxs("span",{children:["Selected: ",r]})]})}return t.jsx(j,{})}},P={args:{items:[],ariaLabel:""},name:"AND / OR operator",render:()=>{function j(){const[r,m]=n.useState("and");return t.jsx(_,{ariaLabel:"Filter operator",items:[{value:"and",label:"AND"},{value:"or",label:"OR"}],value:r,onChange:({value:p})=>m(p)})}return t.jsx(j,{})}},k={args:{items:[],ariaLabel:""},name:"Icon-only segmented control",render:()=>t.jsx(_,{ariaLabel:"View type",items:$,defaultValue:"grid",isIconOnly:!0})};var X,Z,ee;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    defaultValue: 'list'
  }
}`,...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,se;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    defaultValue: 'list'
  }
}`,...(se=(re=y.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var te,le,ne;V.parameters={...V.parameters,docs:{...(te=V.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    items: VIEW,
    defaultValue: 'list',
    ariaLabel: 'View type'
  }
}`,...(ne=(le=V.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var oe,ie,ue;L.parameters={...L.parameters,docs:{...(oe=L.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    items: DENSITY,
    defaultValue: 'comfortable',
    ariaLabel: 'Density'
  }
}`,...(ue=(ie=L.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var ce,de,me;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    items: PERIOD,
    defaultValue: 'week',
    ariaLabel: 'Time period'
  }
}`,...(me=(de=S.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,ge,be;w.parameters={...w.parameters,docs:{...(pe=w.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    items: OPERATOR,
    defaultValue: 'and',
    ariaLabel: 'Filter operator'
  }
}`,...(be=(ge=w.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var fe,ve,ye;I.parameters={...I.parameters,docs:{...(fe=I.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    items: PERIOD,
    defaultValue: 'week',
    ariaLabel: 'Primary',
    variant: 'primary'
  }
}`,...(ye=(ve=I.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var Ve,Le,Se;O.parameters={...O.parameters,docs:{...(Ve=O.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    items: PERIOD,
    defaultValue: 'week',
    ariaLabel: 'Secondary',
    variant: 'secondary'
  }
}`,...(Se=(Le=O.parameters)==null?void 0:Le.docs)==null?void 0:Se.source}}};var we,Ie,Oe;D.parameters={...D.parameters,docs:{...(we=D.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    items: VIEW,
    defaultValue: 'list',
    ariaLabel: 'Small',
    size: 'sm'
  }
}`,...(Oe=(Ie=D.parameters)==null?void 0:Ie.docs)==null?void 0:Oe.source}}};var De,he,Ce;h.parameters={...h.parameters,docs:{...(De=h.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    items: VIEW,
    defaultValue: 'list',
    ariaLabel: 'Large',
    size: 'lg'
  }
}`,...(Ce=(he=h.parameters)==null?void 0:he.docs)==null?void 0:Ce.source}}};var Te,xe,Ee;C.parameters={...C.parameters,docs:{...(Te=C.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    items: VIEW_ICONS,
    defaultValue: 'list',
    ariaLabel: 'View',
    isIconOnly: true
  }
}`,...(Ee=(xe=C.parameters)==null?void 0:xe.docs)==null?void 0:Ee.source}}};var Ae,Pe,ke;T.parameters={...T.parameters,docs:{...(Ae=T.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    ariaLabel: 'View',
    items: [{
      value: 'list',
      label: 'List'
    }, {
      value: 'grid',
      label: 'Grid',
      isDisabled: true
    }, {
      value: 'kanban',
      label: 'Kanban'
    }],
    defaultValue: 'list'
  }
}`,...(ke=(Pe=T.parameters)==null?void 0:Pe.docs)==null?void 0:ke.source}}};var _e,Re,je;x.parameters={...x.parameters,docs:{...(_e=x.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    items: VIEW,
    defaultValue: 'list',
    ariaLabel: 'View',
    isDisabled: true
  }
}`,...(je=(Re=x.parameters)==null?void 0:Re.docs)==null?void 0:je.source}}};var Ne,We,qe;E.parameters={...E.parameters,docs:{...(Ne=E.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    items: VIEW,
    defaultValue: 'list',
    ariaLabel: 'View',
    isLoading: true
  }
}`,...(qe=(We=E.parameters)==null?void 0:We.docs)==null?void 0:qe.source}}};var Fe,ze,Ke;A.parameters={...A.parameters,docs:{...(Fe=A.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    items: [],
    ariaLabel: ''
  },
  name: 'Controlled view switcher',
  render: () => {
    function ViewSwitcher() {
      const [view, setView] = useState<string>('list');
      return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>\r
          <ArvoSegmentedControl ariaLabel="View type" items={VIEW_ICONS} value={view} onChange={({
          value
        }) => setView(value)} />\r
          <span>Selected: {view}</span>\r
        </div>;
    }
    return <ViewSwitcher />;
  }
}`,...(Ke=(ze=A.parameters)==null?void 0:ze.docs)==null?void 0:Ke.source}}};var Me,Ge,Ue;P.parameters={...P.parameters,docs:{...(Me=P.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    items: [],
    ariaLabel: ''
  },
  name: 'AND / OR operator',
  render: () => {
    function Operator() {
      const [op, setOp] = useState<'and' | 'or'>('and');
      return <ArvoSegmentedControl ariaLabel="Filter operator" items={[{
        value: 'and',
        label: 'AND'
      }, {
        value: 'or',
        label: 'OR'
      }]} value={op} onChange={({
        value
      }) => setOp(value as 'and' | 'or')} />;
    }
    return <Operator />;
  }
}`,...(Ue=(Ge=P.parameters)==null?void 0:Ge.docs)==null?void 0:Ue.source}}};var $e,He,Ye;k.parameters={...k.parameters,docs:{...($e=k.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  args: {
    items: [],
    ariaLabel: ''
  },
  name: 'Icon-only segmented control',
  render: () => <ArvoSegmentedControl ariaLabel="View type" items={VIEW_ICONS} defaultValue="grid" isIconOnly />
}`,...(Ye=(He=k.parameters)==null?void 0:He.docs)==null?void 0:Ye.source}}};const ia=["Default","Playground","TwoOptions","ThreeOptionsDensity","TimePeriod","FilterOperator","PrimaryVariant","SecondaryVariant","Small","Large","IconOnly","DisabledItem","Disabled","Loading","ControlledViewSwitcher","FilterOperatorPair","IconOnlyToolbarUse"],ga=Object.freeze(Object.defineProperty({__proto__:null,ControlledViewSwitcher:A,Default:v,Disabled:x,DisabledItem:T,FilterOperator:w,FilterOperatorPair:P,IconOnly:C,IconOnlyToolbarUse:k,Large:h,Loading:E,Playground:y,PrimaryVariant:I,SecondaryVariant:O,Small:D,ThreeOptionsDensity:L,TimePeriod:S,TwoOptions:V,__namedExportsOrder:ia,default:oa},Symbol.toStringTag,{value:"Module"}));export{A as C,w as F,k as I,h as L,y as P,ga as S,S as T,I as a,O as b,D as c,L as d,P as e};
