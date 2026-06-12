import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as l,M as o,C as n,a as c}from"./blocks-DLeo0hIy.js";import{M as t,P as i,E as a,S as h,W as x,I as j,N as m,B as p,a as u,b as g,D as v,c as f,d as b,e as y,f as A}from"./MessageAlert.stories-BKOJvczF.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./MessageAlert-DBQwY950.js";import"./Button-B8O_kk1m.js";import"./useControllableState-BcENo7ec.js";import"./loading-flag-DkqmYwgU.js";import"./Textbox-BjaSSAvr.js";import"./index2-HSp4ZJrG.js";import"./useTooltip-DZu1XpnP.js";import"./index28-DgjIRxoq.js";import"./FormLabel-Dn-HbpfA.js";import"./IconButton-BgwDUYzG.js";import"./Checkbox-k9WMnmR3.js";function d(r){const s={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:t}),`
`,e.jsx(s.h1,{id:"messagealert",children:"MessageAlert"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsx(s.p,{children:`Atomic message-alert primitive: a compact icon plus an optional message status
row. Two display modes -- full mode (icon + message + optional dismiss button,
used below form inputs and inside selection-control errors) and inline mode
(icon-only, 16x16, used as an in-field tooltip-error icon). Six semantic types
drive the icon glyph and color.`}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"When to use"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`Show a compact validation or status message directly below a form field
(full mode), wired to the control via `,e.jsx(s.code,{children:"id"})," + ",e.jsx(s.code,{children:"aria-describedby"}),"."]}),`
`,e.jsxs(s.li,{children:[`Use inline mode for an icon-only in-field error indicator (for example the
tooltip-error icon inside a `,e.jsx(s.code,{children:"Textbox"}),", ",e.jsx(s.code,{children:"Textarea"}),", or ",e.jsx(s.code,{children:"Select"}),")."]}),`
`,e.jsx(s.li,{children:`Reuse it inside selection-control errors, panel info slots, and stacked
notification rows.`}),`
`,e.jsxs(s.li,{children:["For a self-contained badge with its own background, use ",e.jsx(s.code,{children:"BadgeAlert"}),`; for a
full-width page banner, use `,e.jsx(s.code,{children:"BannerAlert"}),"; for transient pop-ups, use ",e.jsx(s.code,{children:"Toast"}),"."]}),`
`]}),`
`,e.jsx(s.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(s.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(n,{of:i,sourceState:"shown"}),`
`,e.jsx(c,{of:i}),`
`,e.jsx(s.h2,{id:"types-full-mode",children:"Types (full mode)"}),`
`,e.jsx(s.p,{children:"Six semantic types drive the icon glyph and color."}),`
`,e.jsx(n,{of:a}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(s.h2,{id:"inline-mode",children:"Inline mode"}),`
`,e.jsxs(s.p,{children:[`Inline mode renders the icon only (16x16). The message is mirrored to
`,e.jsx(s.code,{children:"aria-label"}),` instead of being shown visually -- ideal for an in-field error
icon.`]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(s.h2,{id:"dismissable",children:"Dismissable"}),`
`,e.jsx(s.p,{children:"In full mode the alert can render a close button."}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(s.h2,{id:"rich-message-content",children:"Rich message content"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"message"})," accepts any ",e.jsx(s.code,{children:"ReactNode"}),", so it can embed inline emphasis."]}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(s.h2,{id:"in-context",children:"In context"}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(n,{of:y}),`
`,e.jsx(n,{of:A}),`
`,e.jsx(s.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(s.p,{children:[`Public atomic message-alert primitive used everywhere a compact icon + (optional)
message status row needs to render. Two display modes: `,e.jsx(s.strong,{children:"full mode"}),` (icon +
message + optional dismiss button) and `,e.jsx(s.strong,{children:"inline mode"}),` (icon-only, 16x16).
Six semantic types drive the icon glyph and color.`]}),`
`,e.jsx(s.h2,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`import { ArvoMessageAlert, ARVO_MSG_ALERT_DEFAULT_ERROR } from '@arvo/js';

// Full mode -- below-field validation error
const alert = ArvoMessageAlert.initialize(document.createElement('div'), {
  type: 'negative',
  message: 'Email is required',
  id: 'email-error',
});
field.appendChild(alert.el);

// Inline mode -- in-field tooltip error icon
const errIcon = ArvoMessageAlert.initialize(document.createElement('span'), {
  type: 'negative',
  isInline: true,
  message: 'Email is required',
});
errIcon.el.classList.add('arvo-textbox__err-ico');
inputWrapper.appendChild(errIcon.el);

// Update message dynamically
alert.message('New error message');

// Change type
alert.type('success');

// Toggle inline mode
alert.inline(true);   // switch to icon-only
alert.inline(false);  // switch to full

// Toggle dismissable
alert.dismissable(true);

// Programmatic dismiss
alert.dismiss();

// Custom icon override
alert.icon('bell-o');   // set custom icon
alert.icon(null);       // revert to type-default

// Default error message constant
console.log(ARVO_MSG_ALERT_DEFAULT_ERROR); // 'Form field value is invalid'
console.log(ArvoMessageAlert.defaultErrorMessage); // same value

// Destroy
alert.destroy();
`})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"html-reference-full-mode",children:"HTML reference (full mode)"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<div class="arvo-msg-alert arvo-msg-alert--error" role="alert" id="email-error">
  <div class="arvo-msg-alert__body">
    <span class="arvo-msg-alert__ico" aria-hidden="true"></span>
    <span class="arvo-msg-alert__msg">Email is required</span>
  </div>
</div>

<!-- With dismiss button -->
<div class="arvo-msg-alert arvo-msg-alert--info arvo-msg-alert--dismissable" role="status">
  <div class="arvo-msg-alert__body">
    <span class="arvo-msg-alert__ico" aria-hidden="true"></span>
    <span class="arvo-msg-alert__msg">24 matching results</span>
  </div>
  <button class="arvo-btn arvo-btn--secondary arvo-btn--sm arvo-msg-alert__close" type="button">
    <span class="arvo-btn__lbl">Close</span>
  </button>
</div>

<!-- With icon override -->
<div class="arvo-msg-alert arvo-msg-alert--neutral has-icon-override" role="status">
  <div class="arvo-msg-alert__body">
    <span class="arvo-msg-alert__ico" aria-hidden="true">
      <i class="o9con o9con-bell-o"></i>
    </span>
    <span class="arvo-msg-alert__msg">New notification</span>
  </div>
</div>
`})}),`
`,e.jsx(s.h2,{id:"html-reference-inline-mode",children:"HTML reference (inline mode)"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<div class="arvo-msg-alert arvo-msg-alert--error arvo-msg-alert--inline" role="alert" aria-label="Email is required">
  <span class="arvo-msg-alert__ico" aria-hidden="true"></span>
</div>
`})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,e.jsx(s.p,{children:"Props (React) / Options (JS) accepted by both framework layers."}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Default"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"type"})}),e.jsx("td",{children:e.jsx("code",{children:"'error' | 'success' | 'warning' | 'info' | 'neutral' | 'block'"})}),e.jsx("td",{children:e.jsx("code",{children:"'error'"})}),e.jsx("td",{children:"Semantic type. Drives icon glyph + color via SCSS pattern."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isInline"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"When true, renders icon-only (16x16) in-field mode. Hides message and dismiss button."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"message"})}),e.jsxs("td",{children:[e.jsx("code",{children:"ReactNode"})," (React) / ",e.jsx("code",{children:"string | null"})," (JS)"]}),e.jsx("td",{children:e.jsx("code",{children:"null"})}),e.jsxs("td",{children:["Alert text. In inline mode, mirrored to ",e.jsx("code",{children:"aria-label"})," instead of being rendered visually."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"icon"})}),e.jsx("td",{children:e.jsx("code",{children:"string | null"})}),e.jsx("td",{children:e.jsx("code",{children:"null"})}),e.jsxs("td",{children:["o9con icon name override. Suppresses the type-default ",e.jsx("code",{children:"::before"})," glyph."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isDismissable"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsxs("td",{children:["When true and ",e.jsx("code",{children:"isInline=false"}),", renders a close button. Ignored in inline mode."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onDismiss"})}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:e.jsx("code",{children:"null"})}),e.jsx("td",{children:"Callback fired when close button is clicked."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"id"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"undefined"})}),e.jsxs("td",{children:["DOM id for ",e.jsx("code",{children:"aria-describedby"})," wiring on the associated form control."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"role"})}),e.jsx("td",{children:e.jsx("code",{children:"'alert' | 'status'"})}),e.jsx("td",{children:"auto"}),e.jsxs("td",{children:["ARIA role. Auto-resolves: ",e.jsx("code",{children:"error|warning|block"})," → ",e.jsx("code",{children:"alert"}),"; ",e.jsx("code",{children:"info|success|neutral"})," → ",e.jsx("code",{children:"status"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"className"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{children:"Additional CSS classes merged with the base classes."})]})]})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"js-only-methods",children:"JS-only methods"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"In React, use props instead of imperative methods."}),`
`]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Signature"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoMessageAlert.initialize(element, options)"})}),e.jsx("td",{children:e.jsx("code",{children:"(HTMLElement | null, ArvoMessageAlertOptions?) => ArvoMessageAlert"})}),e.jsxs("td",{children:["Factory. When ",e.jsx("code",{children:"element"})," is ",e.jsx("code",{children:"null"}),", creates a fresh ",e.jsx("code",{children:"<div>"}),"."]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"type()"})," / ",e.jsx("code",{children:"type(next)"})]}),e.jsxs("td",{children:[e.jsx("code",{children:"() => ArvoMessageAlertType"})," / ",e.jsx("code",{children:"(next: ArvoMessageAlertType) => void"})]}),e.jsx("td",{children:"Get or set the semantic type. Swaps modifier class and re-resolves auto role."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"message()"})," / ",e.jsx("code",{children:"message(next)"})]}),e.jsxs("td",{children:[e.jsx("code",{children:"() => string"})," / ",e.jsx("code",{children:"(next: string | null) => void"})]}),e.jsxs("td",{children:["Get or set the message text. Updates rendered text (full) or ",e.jsx("code",{children:"aria-label"})," (inline)."]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"inline()"})," / ",e.jsx("code",{children:"inline(next)"})]}),e.jsxs("td",{children:[e.jsx("code",{children:"() => boolean"})," / ",e.jsx("code",{children:"(next: boolean) => void"})]}),e.jsx("td",{children:"Get or set the inline layout toggle. Rebuilds DOM when flipping."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"dismissable()"})," / ",e.jsx("code",{children:"dismissable(next)"})]}),e.jsxs("td",{children:[e.jsx("code",{children:"() => boolean"})," / ",e.jsx("code",{children:"(next: boolean) => void"})]}),e.jsx("td",{children:"Get or set the dismissable state. Creates/destroys the close button."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"icon()"})," / ",e.jsx("code",{children:"icon(next)"})]}),e.jsxs("td",{children:[e.jsx("code",{children:"() => string | null"})," / ",e.jsx("code",{children:"(next: string | null) => void"})]}),e.jsxs("td",{children:["Get or set the icon override. Pass ",e.jsx("code",{children:"null"})," to revert to type-default."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"dismiss()"})}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsxs("td",{children:["Programmatically fires ",e.jsx("code",{children:"msg-alert:dismiss"})," event and calls ",e.jsx("code",{children:"onDismiss"}),". Does NOT remove the element."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"Tears down listeners, destroys inner close button, clears inner DOM. Host element stays."})]})]})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"custom-events",children:"Custom events"}),`
`,e.jsxs(s.p,{children:["Dispatched on the root DOM element. Listen with ",e.jsx(s.code,{children:"el.addEventListener()"}),"."]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Bubbles"}),e.jsx("th",{children:"Detail"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"msg-alert:dismiss"})}),e.jsx("td",{children:"Yes"}),e.jsxs("td",{children:[e.jsx("code",{})," (empty)"]}),e.jsxs("td",{children:["Fired when the close button is clicked (only when ",e.jsx("code",{children:"isDismissable=true"})," and ",e.jsx("code",{children:"isInline=false"}),")."]})]})})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"static-exports",children:"Static exports"}),`
`,e.jsxs(s.p,{children:[`| Export | Value | Description |
|--------|-------|-------------|
| `,e.jsx(s.code,{children:"ArvoMessageAlert.defaultErrorMessage"})," | ",e.jsx(s.code,{children:"'Form field value is invalid'"}),` | Static field on the class. |
| `,e.jsx(s.code,{children:"ARVO_MSG_ALERT_DEFAULT_ERROR"})," | ",e.jsx(s.code,{children:"'Form field value is invalid'"})," | Named constant export from both ",e.jsx(s.code,{children:"@arvo/react"})," and ",e.jsx(s.code,{children:"@arvo/js"}),". |"]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Role auto-resolution:"})," When ",e.jsx(s.code,{children:"role"})," is omitted, the component resolves it from ",e.jsx(s.code,{children:"type"}),": ",e.jsx(s.code,{children:"error"}),", ",e.jsx(s.code,{children:"warning"}),", ",e.jsx(s.code,{children:"block"})," use ",e.jsx(s.code,{children:'role="alert"'})," (assertive announcement); ",e.jsx(s.code,{children:"info"}),", ",e.jsx(s.code,{children:"success"}),", ",e.jsx(s.code,{children:"neutral"})," use ",e.jsx(s.code,{children:'role="status"'})," (polite). Pass ",e.jsx(s.code,{children:"role"})," explicitly to override."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Inline mode aria-label:"})," When ",e.jsx(s.code,{children:"isInline=true"}),", the alert text is not visible. A string ",e.jsx(s.code,{children:"message"})," is mirrored to ",e.jsx(s.code,{children:"aria-label"})," on the root. If ",e.jsx(s.code,{children:"message"})," is a non-string ReactNode or omitted, the fallback is the type-default label (",e.jsx(s.code,{children:"'Error'"}),", ",e.jsx(s.code,{children:"'Warning'"}),", ",e.jsx(s.code,{children:"'Blocked'"}),", ",e.jsx(s.code,{children:"'Information'"}),", ",e.jsx(s.code,{children:"'Success'"}),", ",e.jsx(s.code,{children:"'Notice'"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Keyboard:"})," The close button (when ",e.jsx(s.code,{children:"isDismissable=true"}),") inherits ArvoButton's keyboard contract -- ",e.jsx(s.code,{children:"Enter"})," and ",e.jsx(s.code,{children:"Space"})," activate dismiss."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.code,{children:"aria-describedby"})," wiring:"]})," Pass an ",e.jsx(s.code,{children:"id"})," to the alert and reference it from the associated form control's ",e.jsx(s.code,{children:"aria-describedby"})," attribute for programmatic association."]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"migration-from-inline-alert",children:"Migration from inline-alert"}),`
`,e.jsxs(s.p,{children:[`| Before | After | Notes |
|--------|-------|-------|
| `,e.jsx(s.code,{children:"arvo-inline-alert"})," BEM block | ",e.jsx(s.code,{children:"arvo-msg-alert"}),` BEM block | Project-wide rename |
| `,e.jsx(s.code,{children:"arvo-inline-alert__ico"}),", ",e.jsx(s.code,{children:"__msg"})," | ",e.jsx(s.code,{children:"arvo-msg-alert__ico"}),", ",e.jsx(s.code,{children:"__msg"}),", ",e.jsx(s.code,{children:"__body"})," | New ",e.jsx(s.code,{children:"__body"}),` wrapper in full mode |
| `,e.jsx(s.code,{children:"arvo-err-ico"})," (form-input in-field) | ",e.jsx(s.code,{children:"<ArvoMessageAlert isInline />"})," with per-component ",e.jsx(s.code,{children:"__err-ico"}),` class | Unified API |
| `,e.jsx(s.code,{children:"createInlineAlert({ type, message, id })"})," | ",e.jsx(s.code,{children:"ArvoMessageAlert.initialize(el, { type, message, id })"}),` | JS factory |
| `,e.jsx(s.code,{children:"updateInlineAlert(el, { type, message })"})," | ",e.jsx(s.code,{children:"instance.type(t); instance.message(m)"}),` | Dual-purpose getter/setter |
| `,e.jsx(s.code,{children:"createErrorTooltipIcon({ tooltip })"})," | ",e.jsx(s.code,{children:"ArvoMessageAlert.initialize(el, { type: 'negative', isInline: true, message: tooltip })"}),` | Unified API |
| `,e.jsx(s.code,{children:"updateErrorTooltipIcon(el, msg)"})," | ",e.jsx(s.code,{children:"instance.message(msg)"}),` | |
| `,e.jsx(s.code,{children:"getDefaultErrorMsg()"})," | ",e.jsx(s.code,{children:"ARVO_MSG_ALERT_DEFAULT_ERROR"}),` | Named const |
| `,e.jsx(s.code,{children:"InlineAlertType"})," | ",e.jsx(s.code,{children:"ArvoMessageAlertType"}),` | Type alias |
| `,e.jsx(s.code,{children:"InlineAlertOptions"})," | ",e.jsx(s.code,{children:"ArvoMessageAlertOptions"}),` | Type alias |
| `,e.jsx(s.code,{children:"ErrorTooltipIconOptions"})," | (removed) | Merged into ",e.jsx(s.code,{children:"ArvoMessageAlertOptions"})," via ",e.jsx(s.code,{children:"isInline"})," |"]})]})}function G(r={}){const{wrapper:s}={...l(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(d,{...r})}):d(r)}export{G as default};
