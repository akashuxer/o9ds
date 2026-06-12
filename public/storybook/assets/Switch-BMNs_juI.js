import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as l,M as r,C as i,a as c}from"./blocks-DLeo0hIy.js";import{S as o,P as t,A as h,L as a,N as x,I as j,a as p}from"./Switch.stories-BKrIBiiI.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./Switch-BDE_dn2p.js";import"./useControllableState-BcENo7ec.js";import"./FormLabel-Dn-HbpfA.js";import"./loading-flag-DkqmYwgU.js";function d(s){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:o}),`
`,e.jsx(n.h1,{id:"switch",children:"Switch"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Toggle control for binary on/off states. Renders as a hidden native checkbox
with `,e.jsx(n.code,{children:'role="switch"'}),`, a styled track, and a sliding thumb with a check icon when
on. Supports an optional visible label and a label-position control.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Toggle a single setting on or off with an immediate effect (no submit needed)."}),`
`,e.jsxs(n.li,{children:["Provide a visible label, or an ",e.jsx(n.code,{children:"aria-label"}),` on the host element when the label
is omitted.`]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:'labelPosition="start"'})," to place the label before the track."]}),`
`,e.jsxs(n.li,{children:["For a choice confirmed only on form submit use ",e.jsx(n.code,{children:"Checkbox"}),`; for one of several
options use `,e.jsx(n.code,{children:"RadioGroup"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(i,{of:t,sourceState:"shown"}),`
`,e.jsx(c,{of:t}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(n.p,{children:"Default, checked, disabled, required, loading, and label-start variants."}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h2,{id:"label-position",children:"Label position"}),`
`,e.jsxs(n.p,{children:["The label sits after the track by default; ",e.jsx(n.code,{children:'labelPosition="start"'}),` moves it
before. Pass `,e.jsx(n.code,{children:"label={null}"})," for an icon-free, label-less toggle."]}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h2,{id:"interactive",children:"Interactive"}),`
`,e.jsx(n.p,{children:"A controlled switch that tracks its own on/off state."}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.h2,{id:"example-settings-row",children:"Example: settings row"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:["The vanilla JS version of ",e.jsx(n.code,{children:"ArvoSwitch"}),`. Use for binary on/off settings (preferences,
features). The native `,e.jsx(n.code,{children:'<input type="checkbox">'}),` drives form integration; switch
visuals are pure CSS.`]}),`
`,e.jsx(n.h3,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoSwitch } from '@arvo/js/components/Switch';

const el = document.querySelector('#my-switch');
const sw = ArvoSwitch.initialize(el, {
  label: 'Email notifications',
  value: 'on',
  onChange: ({ isChecked }) => console.log(isChecked),
});

sw.toggle();
sw.toggle(true);
sw.disabled(true);
sw.setLabel('SMS notifications');
sw.destroy();
`})}),`
`,e.jsx(n.h3,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<label class="arvo-switch">
  <input class="arvo-switch__input" type="checkbox" name="notify" value="on" />
  <span class="arvo-switch__track">
    <span class="arvo-switch__thumb"></span>
  </span>
  <span class="arvo-switch__lbl">Email notifications</span>
</label>
`})}),`
`,e.jsxs(n.p,{children:["Modifiers: ",e.jsx(n.code,{children:".arvo-switch--label-start"})," for inverted layout. State: ",e.jsx(n.code,{children:".is-disabled"}),`,
`,e.jsx(n.code,{children:".loading"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Signature"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(detail: { isChecked: boolean; value: string }) => void"})}),e.jsx("td",{children:"Fires on toggle"})]})})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"js-only",children:"JS only"}),`
`,e.jsx(n.h4,{id:"methods",children:"Methods"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoSwitch.initialize(element, options)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLElement"}),", ",e.jsx("code",{children:"ArvoSwitchOptions"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoSwitch"})}),e.jsx("td",{children:"Factory"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"toggle(force?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Flip or force on/off"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"value(next?)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"string | void"})}),e.jsx("td",{children:"Get or set form value"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLabel(text)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | null"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Update label text"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLoading(loading)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Toggle loading state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled(state?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set disabled state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Remove listeners + clean up DOM"})]})]})]}),`
`,e.jsx(n.h4,{id:"custom-events",children:"Custom Events"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"sw:change"})}),e.jsx("td",{children:e.jsx("code",{children:"(event: CustomEvent<{ isChecked: boolean; value: string }>) => void"})}),e.jsx("td",{children:"Fires on toggle"})]})})]})]})}function M(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(d,{...s})}):d(s)}export{M as default};
