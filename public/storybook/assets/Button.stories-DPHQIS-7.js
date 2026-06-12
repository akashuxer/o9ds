import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as a}from"./Button-B8O_kk1m.js";const{expect:Ke,fn:A,userEvent:Ue,within:Ye}=__STORYBOOK_MODULE_TEST__,qe={title:"Actions/Button",component:a,tags:["!dev","stable"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","tertiary","outline","danger"],description:"Visual style variant",table:{defaultValue:{summary:"primary"}}},size:{control:{type:"select"},options:["sm","md","lg"],description:"Button size",table:{defaultValue:{summary:"md"}}},type:{control:{type:"select"},options:["button","submit","reset"],description:"Native HTML button type",table:{defaultValue:{summary:"button"}}},label:{control:{type:"text"},description:"Button text content"},icon:{control:{type:"text"},description:"Leading icon name (without o9con- prefix)"},isDisabled:{control:{type:"boolean"},description:"Prevent all interaction",table:{defaultValue:{summary:"false"}}},isSelected:{control:{type:"boolean"},description:"Active state. Controlled active/selected indicator, or the controlled value when `isToggle` is true."},isToggle:{control:{type:"boolean"},description:"When true, click toggles `isSelected` and renders `aria-pressed`. Fires `onSelectionChange`.",table:{defaultValue:{summary:"false"}}},defaultSelected:{control:{type:"boolean"},description:"Initial selected value when `isToggle` is true and `isSelected` is undefined.",table:{defaultValue:{summary:"false"}}},isFullWidth:{control:{type:"boolean"},description:"Expand button to fill container width",table:{defaultValue:{summary:"false"}}},isLoading:{control:{type:"boolean"},description:"Show skeleton shimmer loading overlay",table:{defaultValue:{summary:"false"}}},onSelectionChange:{description:"`(isSelected: boolean) => void` -- fired when toggle flips. Only emitted when `isToggle` is true.",table:{category:"Events"}},onClick:{description:"`(event: MouseEvent)` -- click handler. Suppressed when disabled or loading.",table:{category:"Events"}}},args:{label:"Button",variant:"primary",size:"md",type:"button",isDisabled:!1,isFullWidth:!1,isLoading:!1,onClick:A(),onSelectionChange:A()},parameters:{docs:{description:{component:`Canonical CSF for ArvoButton -- the reference every component follows.\r

All stories are docs-only (\`tags: ['!dev', ...]\`): they render on the attached\r
\`Button.mdx\` page (the single sidebar node for this component), not as their\r
own sidebar leaves. \`Button.mdx\` references these stories with Doc Blocks.\r

Buckets within this file:\r
  - Playground          -- live controls for every prop (drives the docs page)\r
  - Variants / Sizes / States / Icon / Layout -- frozen single-prop snapshots\r
  - Examples            -- composition recipes\r
  - Interaction         -- a play() smoke test for the primary behavior`}}}},r={args:{label:"Button"}},t={args:{variant:"primary",label:"Primary"}},n={args:{variant:"secondary",label:"Secondary"}},s={args:{variant:"tertiary",label:"Tertiary"}},o={args:{variant:"outline",label:"Outline"}},l={args:{variant:"danger",label:"Danger"}},i={args:{size:"sm",label:"Small"}},c={args:{size:"md",label:"Medium"}},d={args:{size:"lg",label:"Large"}},u={args:{isLoading:!0,label:"Saving..."}},m={args:{isDisabled:!0,label:"Disabled"}},g={args:{isSelected:!0,label:"Selected"}},p={args:{isToggle:!0,defaultSelected:!1,label:"Toggle"}},b={args:{isToggle:!0,defaultSelected:!0,label:"Toggle"}},y={args:{icon:"plus",label:"Add Item"}},v={name:"With Icon (Secondary)",args:{variant:"secondary",icon:"download",label:"Download"}},S={name:"With Icon (Danger)",args:{variant:"danger",icon:"bin",label:"Delete"}},f={args:{isFullWidth:!0,label:"Full Width Button"},decorators:[w=>e.jsx("div",{style:{width:320},children:e.jsx(w,{})})]},h={args:{label:""},render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,alignItems:"center"},children:[e.jsx(a,{variant:"primary",label:"Primary"}),e.jsx(a,{variant:"secondary",label:"Secondary"}),e.jsx(a,{variant:"tertiary",label:"Tertiary"}),e.jsx(a,{variant:"outline",label:"Outline"}),e.jsx(a,{variant:"danger",label:"Danger"})]})},x={args:{label:""},render:()=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(a,{variant:"secondary",size:"sm",label:"Small"}),e.jsx(a,{variant:"secondary",size:"md",label:"Medium"}),e.jsx(a,{variant:"secondary",size:"lg",label:"Large"})]})},B={args:{label:""},render:()=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(a,{variant:"primary",icon:"plus",label:"New"}),e.jsx(a,{variant:"secondary",icon:"download",label:"Export"}),e.jsx(a,{variant:"tertiary",icon:"filter",label:"Filter"}),e.jsx(a,{variant:"danger",icon:"bin",label:"Delete"})]})},T={args:{label:""},render:()=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(a,{variant:"secondary",icon:"bookmark-o",label:"Bookmark",isToggle:!0}),e.jsx(a,{variant:"secondary",icon:"bookmark-o",label:"Bookmarked",isToggle:!0,defaultSelected:!0})]})},k={args:{label:"Click me"},play:async({args:w,canvasElement:He})=>{const Ne=Ye(He).getByRole("button",{name:"Click me"});await Ue.click(Ne),await Ke(w.onClick).toHaveBeenCalled()}};var D,I,j;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(j=(I=r.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var W,z,C;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: 'Primary'
  }
}`,...(C=(z=t.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var O,L,E;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    label: 'Secondary'
  }
}`,...(E=(L=n.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var F,P,V;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    label: 'Tertiary'
  }
}`,...(V=(P=s.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var _,M,R;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    label: 'Outline'
  }
}`,...(R=(M=o.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var H,N,K;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    label: 'Danger'
  }
}`,...(K=(N=l.parameters)==null?void 0:N.docs)==null?void 0:K.source}}};var U,Y,q;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Small'
  }
}`,...(q=(Y=i.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var G,J,Q;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    size: 'md',
    label: 'Medium'
  }
}`,...(Q=(J=c.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,$;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Large'
  }
}`,...($=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,re;u.parameters={...u.parameters,docs:{...(ee=u.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    label: 'Saving...'
  }
}`,...(re=(ae=u.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,ne,se;m.parameters={...m.parameters,docs:{...(te=m.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    label: 'Disabled'
  }
}`,...(se=(ne=m.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,le,ie;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    isSelected: true,
    label: 'Selected'
  }
}`,...(ie=(le=g.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,de,ue;p.parameters={...p.parameters,docs:{...(ce=p.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    isToggle: true,
    defaultSelected: false,
    label: 'Toggle'
  }
}`,...(ue=(de=p.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,ge,pe;b.parameters={...b.parameters,docs:{...(me=b.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    isToggle: true,
    defaultSelected: true,
    label: 'Toggle'
  }
}`,...(pe=(ge=b.parameters)==null?void 0:ge.docs)==null?void 0:pe.source}}};var be,ye,ve;y.parameters={...y.parameters,docs:{...(be=y.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    icon: 'plus',
    label: 'Add Item'
  }
}`,...(ve=(ye=y.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var Se,fe,he;v.parameters={...v.parameters,docs:{...(Se=v.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'With Icon (Secondary)',
  args: {
    variant: 'secondary',
    icon: 'download',
    label: 'Download'
  }
}`,...(he=(fe=v.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var xe,Be,Te;S.parameters={...S.parameters,docs:{...(xe=S.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: 'With Icon (Danger)',
  args: {
    variant: 'danger',
    icon: 'bin',
    label: 'Delete'
  }
}`,...(Te=(Be=S.parameters)==null?void 0:Be.docs)==null?void 0:Te.source}}};var ke,we,Ae;f.parameters={...f.parameters,docs:{...(ke=f.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    isFullWidth: true,
    label: 'Full Width Button'
  },
  decorators: [Story => <div style={{
    width: 320
  }}>\r
        <Story />\r
      </div>]
}`,...(Ae=(we=f.parameters)==null?void 0:we.docs)==null?void 0:Ae.source}}};var De,Ie,je;h.parameters={...h.parameters,docs:{...(De=h.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    label: ''
  },
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    alignItems: 'center'
  }}>\r
      <ArvoButton variant="primary" label="Primary" />\r
      <ArvoButton variant="secondary" label="Secondary" />\r
      <ArvoButton variant="tertiary" label="Tertiary" />\r
      <ArvoButton variant="outline" label="Outline" />\r
      <ArvoButton variant="danger" label="Danger" />\r
    </div>
}`,...(je=(Ie=h.parameters)==null?void 0:Ie.docs)==null?void 0:je.source}}};var We,ze,Ce;x.parameters={...x.parameters,docs:{...(We=x.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    label: ''
  },
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center'
  }}>\r
      <ArvoButton variant="secondary" size="sm" label="Small" />\r
      <ArvoButton variant="secondary" size="md" label="Medium" />\r
      <ArvoButton variant="secondary" size="lg" label="Large" />\r
    </div>
}`,...(Ce=(ze=x.parameters)==null?void 0:ze.docs)==null?void 0:Ce.source}}};var Oe,Le,Ee;B.parameters={...B.parameters,docs:{...(Oe=B.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    label: ''
  },
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center'
  }}>\r
      <ArvoButton variant="primary" icon="plus" label="New" />\r
      <ArvoButton variant="secondary" icon="download" label="Export" />\r
      <ArvoButton variant="tertiary" icon="filter" label="Filter" />\r
      <ArvoButton variant="danger" icon="bin" label="Delete" />\r
    </div>
}`,...(Ee=(Le=B.parameters)==null?void 0:Le.docs)==null?void 0:Ee.source}}};var Fe,Pe,Ve;T.parameters={...T.parameters,docs:{...(Fe=T.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    label: ''
  },
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center'
  }}>\r
      <ArvoButton variant="secondary" icon="bookmark-o" label="Bookmark" isToggle />\r
      <ArvoButton variant="secondary" icon="bookmark-o" label="Bookmarked" isToggle defaultSelected />\r
    </div>
}`,...(Ve=(Pe=T.parameters)==null?void 0:Pe.docs)==null?void 0:Ve.source}}};var _e,Me,Re;k.parameters={...k.parameters,docs:{...(_e=k.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    label: 'Click me'
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'Click me'
    });
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  }
}`,...(Re=(Me=k.parameters)==null?void 0:Me.docs)==null?void 0:Re.source}}};const Ge=["Playground","Primary","Secondary","Tertiary","Outline","Danger","Small","Medium","Large","Loading","Disabled","Selected","ToggleOff","ToggleOn","WithIcon","WithIconSecondary","WithIconDanger","FullWidth","AllVariants","AllSizes","ToolbarRow","ToggleButton","ClickInteraction"],Ze=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:x,AllVariants:h,ClickInteraction:k,Danger:l,Disabled:m,FullWidth:f,Large:d,Loading:u,Medium:c,Outline:o,Playground:r,Primary:t,Secondary:n,Selected:g,Small:i,Tertiary:s,ToggleButton:T,ToggleOff:p,ToggleOn:b,ToolbarRow:B,WithIcon:y,WithIconDanger:S,WithIconSecondary:v,__namedExportsOrder:Ge,default:qe},Symbol.toStringTag,{value:"Module"}));export{h as A,Ze as B,m as D,u as L,r as P,T,x as a,B as b};
