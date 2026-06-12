import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as s,M as r}from"./blocks-DLeo0hIy.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Introduction"}),`
`,e.jsx(n.h1,{id:"arvo-design-system",children:"Arvo Design System"}),`
`,e.jsx(n.p,{children:`A framework-agnostic design system distributed as React and vanilla JavaScript
component libraries that share one set of design tokens, styles, and core logic.`}),`
`,e.jsxs(n.p,{children:["This Storybook documents the ",e.jsx(n.strong,{children:"public React surface"}),`. Each component has a
single page with a live, interactive `,e.jsx(n.strong,{children:"Playground"}),`, curated variant and
composition examples, a props reference, and a `,e.jsx(n.strong,{children:"JavaScript usage"}),` section for
the matching `,e.jsx(n.code,{children:"@arvo/js"})," API."]}),`
`,e.jsx(n.h2,{id:"how-this-storybook-is-organized",children:"How this Storybook is organized"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"One page per component."}),` The sidebar lists components by functional
category (Actions, Navigation, Inputs, Date & Time, Data Display, Feedback,
Overlays). Open a component to reach its docs page; variants and examples are
shown inline rather than as separate sidebar entries.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Public surface only."}),` Internal composition primitives live under
`,e.jsx(n.strong,{children:"Advanced / Composition primitives"}),` and are clearly marked. Build with the
public components they route you to -- never consume an internal directly.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"theming-and-color-modes",children:"Theming and color modes"}),`
`,e.jsxs(n.p,{children:["Arvo theming has ",e.jsx(n.strong,{children:"two independent axes"}),", both controllable from the toolbar:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Theme"}),` (the paintbrush menu) selects the brand accent -- Sky Blue (default),
o9 Theme, Forest Green, Midnight Indigo, or Onyx Black. This maps to
`,e.jsx(n.code,{children:"data-theme"})," on the document root."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Color mode"}),` (the sun/moon toggle) switches between light and dark surfaces.
This maps to `,e.jsx(n.code,{children:"data-mode"}),` and themes both the component canvas and the
Storybook chrome.`]}),`
`]}),`
`,e.jsxs(n.p,{children:[`The two combine freely (for example, Forest Green + dark). In an application you
set the same attributes on `,e.jsx(n.code,{children:"<html>"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<html data-theme="o9default" data-mode="dark">
`})}),`
`,e.jsx(n.h2,{id:"using-a-component",children:"Using a component"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Open the component page and adjust props live in the ",e.jsx(n.strong,{children:"Playground"})," controls."]}),`
`,e.jsx(n.li,{children:"Scan the variant and example sections for the pattern you need."}),`
`,e.jsxs(n.li,{children:["Copy the React snippet, or use the ",e.jsx(n.strong,{children:"JavaScript usage"}),` section for the
`,e.jsx(n.code,{children:"@arvo/js"})," equivalent."]}),`
`]})]})}function m(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{m as default};
