import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as i,M as l,C as t,a as d}from"./blocks-DLeo0hIy.js";import{T as c,P as r,A as a,W as h,O as p,a as x,H as j,K as u}from"./Tooltip.stories-CLt3B0R2.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./useTooltip-DZu1XpnP.js";import"./index28-DgjIRxoq.js";import"./Button-B8O_kk1m.js";import"./useControllableState-BcENo7ec.js";import"./loading-flag-DkqmYwgU.js";import"./IconButton-BgwDUYzG.js";function s(o){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(n.h1,{id:"tooltip",children:"Tooltip"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Hover and focus tooltip that reveals a short hint for the element it wraps, with
an optional keyboard-shortcut hint. Most arvo components (Button, IconButton,
Link, etc.) expose a `,e.jsx(n.code,{children:"tooltip"})," prop that uses this component internally."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Reveal a short, non-essential hint for a control on hover or focus."}),`
`,e.jsx(n.li,{children:"Clarify an icon-only or otherwise ambiguous trigger."}),`
`,e.jsxs(n.li,{children:["Add an optional ",e.jsx(n.code,{children:"shortcut"})," to surface a keyboard accelerator."]}),`
`,e.jsxs(n.li,{children:["For interactive content or actions, use ",e.jsx(n.code,{children:"Popover"}),` instead. Never place
essential information in a tooltip alone.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(t,{of:r,sourceState:"shown"}),`
`,e.jsx(d,{of:r}),`
`,e.jsx(n.h2,{id:"placement",children:"Placement"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"placement"})," chooses the preferred side and alignment relative to the trigger."]}),`
`,e.jsx(t,{of:a}),`
`,e.jsx(n.h2,{id:"with-a-shortcut",children:"With a shortcut"}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(n.h2,{id:"on-a-disabled-element",children:"On a disabled element"}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.h2,{id:"truncation",children:"Truncation"}),`
`,e.jsx(n.p,{children:"A truncation-aware trigger shows the full text automatically when it overflows."}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:["The vanilla JS version of ",e.jsx(n.code,{children:"ArvoTooltip"}),`. Hover/focus tooltip with optional
keyboard shortcut hint. Most arvo components (Button, IconButton, Link, etc.)
expose a `,e.jsx(n.code,{children:"tooltip"})," prop that uses this component internally."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tooltips are disabled by default."})," The shared ",e.jsx(n.code,{children:"tooltipManager"}),` ships with
`,e.jsx(n.code,{children:"enabled: false"}),` so apps that don't want hover tooltips don't pay the
overhead. To turn them on globally for an app, call
`,e.jsx(n.code,{children:"tooltipManager.configure({ enabled: true })"}),` once at boot. Until that call
is made, `,e.jsx(n.code,{children:"ArvoTooltip"})," instances (and the ",e.jsx(n.code,{children:"tooltip"}),` prop on Button, IconButton,
Link, etc.) attach correctly but never display.`]}),`
`]}),`
`,e.jsx(n.h3,{id:"enabling-tooltips",children:"Enabling tooltips"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// JS apps -- the @arvo/js setup helper.
import { setupTooltips } from '@arvo/js';

setupTooltips({
  enabled: true,
  // Optional global tuning -- shown values are the defaults.
  hoverDelay: 400,
  hideDelay: 100,
  gap: 4,
  defaultPlacement: 'bottom-center',
});
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// React or framework-agnostic apps -- the underlying @arvo/core manager.
import { tooltipManager } from '@arvo/core';

tooltipManager.configure({ enabled: true });
`})}),`
`,e.jsx(n.p,{children:`Call this once at app boot, before any tooltip-emitting component renders.
Until the manager is enabled, every tooltip-emitting component (Button,
IconButton, Link, Search, Textbox, Textarea, NumberInput, etc.) attaches its
trigger correctly but the tip itself never displays.`}),`
`,e.jsx(n.h3,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoTooltip } from '@arvo/js/components/Tooltip';

const trigger = document.querySelector('#my-btn');
const tip = ArvoTooltip.initialize(trigger, {
  content: 'Save the current document',
  shortcut: 'Ctrl+S',
  placement: 'top-center',
});

// Update content, shortcut, or placement at runtime.
tip.update({ content: 'Updated tooltip text' });
tip.update({ shortcut: 'Ctrl+Shift+S' });

// Remove the tooltip wiring (does not destroy the trigger element).
tip.destroy();
`})}),`
`,e.jsx(n.h3,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- The tooltip trigger keeps its native markup -->
<button class="arvo-btn arvo-btn--primary arvo-btn--md" type="button" aria-describedby="arvo-tip-1">
  <span class="arvo-btn__lbl">Save</span>
</button>

<!-- The tip itself is portaled to the document body when shown -->
<div class="arvo-tip" role="tooltip" id="arvo-tip-1">
  <span class="arvo-tip__txt">Save the current document</span>
  <span class="arvo-tip__shortcut">Ctrl+S</span>
</div>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"js-only",children:"JS only"}),`
`,e.jsx(n.h4,{id:"static-methods",children:"Static methods"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoTooltip.initialize(element, options, manager?)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLElement"}),", ",e.jsx("code",{children:"ArvoTooltipOptions"}),", ",e.jsx("code",{children:"TooltipManager?"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoTooltip"})}),e.jsxs("td",{children:["Attach a tooltip to an existing element. Defaults to the shared ",e.jsx("code",{children:"tooltipManager"})," from ",e.jsx("code",{children:"@arvo/core"}),"; pass a custom manager to scope the tooltip to a separate hub."]})]})})]}),`
`,e.jsx(n.h4,{id:"instance-methods",children:"Instance methods"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"update(options)"})}),e.jsx("td",{children:e.jsx("code",{children:"Partial<ArvoTooltipOptions>"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsxs("td",{children:["Update ",e.jsx("code",{children:"content"}),", ",e.jsx("code",{children:"shortcut"}),", and/or ",e.jsx("code",{children:"placement"})," in place. Omitted keys are left unchanged."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Detach the hover/focus listeners and remove the portaled tip element. The trigger element is untouched."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"get element"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"HTMLElement"})}),e.jsx("td",{children:"The trigger element the tooltip is attached to."})]})]})]}),`
`,e.jsx(n.h4,{id:"manager-configuration",children:"Manager configuration"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"tooltipManager.configure(config)"})," accepts a partial of these fields:"]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Field"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Default"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"enabled"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsxs("td",{children:["Master kill-switch. When ",e.jsx("code",{children:"false"}),", every tooltip stays hidden regardless of hover/focus."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"hoverDelay"})}),e.jsxs("td",{children:[e.jsx("code",{children:"number"})," (ms)"]}),e.jsx("td",{children:e.jsx("code",{children:"400"})}),e.jsx("td",{children:"Delay before showing on mouse hover. Focus shows immediately."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"hideDelay"})}),e.jsxs("td",{children:[e.jsx("code",{children:"number"})," (ms)"]}),e.jsx("td",{children:e.jsx("code",{children:"100"})}),e.jsx("td",{children:"Delay before hiding after mouse leave / blur."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"gap"})}),e.jsxs("td",{children:[e.jsx("code",{children:"number"})," (px)"]}),e.jsx("td",{children:e.jsx("code",{children:"4"})}),e.jsx("td",{children:"Distance between the trigger and the tip."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"defaultPlacement"})}),e.jsx("td",{children:e.jsx("code",{children:"TooltipPlacement"})}),e.jsx("td",{children:e.jsx("code",{children:'"bottom-center"'})}),e.jsx("td",{children:"Placement used when an individual tooltip omits its own."})]})]})]})]})}function P(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{P as default};
