import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as r,M as c,C as s,a as d}from"./blocks-DLeo0hIy.js";import{T as a,P as o,A as l,W as h,C as x,R as j,F as p,a as u,H as m,M as v,b as g,c as f,N as y,E as b}from"./Toast.stories-P066AJNF.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./inline-content-CllLfblQ.js";import"./index28-DgjIRxoq.js";import"./OverlayContext-C5RootgB.js";import"./Link-NIjDRzO0.js";import"./loading-flag-DkqmYwgU.js";import"./Button-B8O_kk1m.js";import"./useControllableState-BcENo7ec.js";function i(t){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:a}),`
`,e.jsx(n.h1,{id:"toast",children:"Toast"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Lightweight, non-blocking overlay notification. Toasts auto-stack vertically
(newest on top), support fade-away auto-dismissal, and use semantic types for
styling. In React, mount `,e.jsx(n.code,{children:"<ArvoToastProvider>"}),` once and call
`,e.jsx(n.code,{children:"useToast().show(...)"})," from any descendant."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Give transient, non-blocking feedback after an action (save, sync, error)."}),`
`,e.jsxs(n.li,{children:["Mount one ",e.jsx(n.code,{children:"<ArvoToastProvider>"}),` near the app root and trigger toasts with the
`,e.jsx(n.code,{children:"useToast().show(...)"})," hook from anywhere below it."]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"negative"})," and ",e.jsx(n.code,{children:"block"}),` for messages that require explicit dismissal;
every other type auto-fades after its timeout.`]}),`
`,e.jsxs(n.li,{children:["For a persistent in-page banner use ",e.jsx(n.code,{children:"BannerAlert"}),`; for a self-contained
inline status badge use `,e.jsx(n.code,{children:"BadgeAlert"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:`Adjust the provider props live, then press the button to push a toast. This is
the canonical interactive example.`}),`
`,e.jsx(s,{of:o,sourceState:"shown"}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(n.h2,{id:"types",children:"Types"}),`
`,e.jsx(n.p,{children:"Six semantic types drive the icon glyph and color."}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(n.h2,{id:"content",children:"Content"}),`
`,e.jsx(n.p,{children:`A toast can carry a title, an inline link action, a custom icon, and rich-text
message runs.`}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h2,{id:"dismissal",children:"Dismissal"}),`
`,e.jsxs(n.p,{children:["Most types fade away on a timer (hover to pause); ",e.jsx(n.code,{children:"negative"}),"/",e.jsx(n.code,{children:"block"}),` persist
until dismissed.`]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h2,{id:"stacking-and-position",children:"Stacking and position"}),`
`,e.jsx(s,{of:v}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.h2,{id:"in-context",children:"In context"}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(s,{of:y}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:["The vanilla JS version of ",e.jsx(n.code,{children:"ArvoToast"}),". Call ",e.jsx(n.code,{children:"ArvoToast.initialize(container?, options?)"})," once to create a toast manager bound to a container element. The returned instance exposes ",e.jsx(n.code,{children:"show()"}),", ",e.jsx(n.code,{children:"close()"}),", ",e.jsx(n.code,{children:"closeAll()"}),", and ",e.jsx(n.code,{children:"destroy()"}),". The manager mounts its own container DOM and registers with the overlay hub -- no provider is required."]}),`
`,e.jsx(n.h2,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoToast } from '@arvo/js';

// Create a manager. Position is set on the container, not per toast.
const toasts = ArvoToast.initialize(document.body, {
  position: 'top-right',
  timeout: 5000,
  pauseOnHover: true,
});

// Push a toast; returns its id
const id = toasts.show({
  type: 'positive',
  title: 'Saved',
  message: 'Changes synced to the server.',
  fadeAway: true,
  timeout: 4000,
});

// Programmatic close (fires toast:close with reason='programmatic')
toasts.close(id);
toasts.closeAll();

// Custom icon (most useful on type: 'neutral')
toasts.show({ type: 'neutral', icon: 'star', message: 'Custom icon' });

// Persistent (no auto-fade) -- info/positive/warning/neutral
toasts.show({ type: 'warning', message: 'Action required', fadeAway: false });

// Toast with a structured link action -- the toast renders an internal
// ArvoLink (size='sm', variant='primary'). You never construct an anchor.
toasts.show({
  type: 'info',
  title: 'New release',
  message: 'Version 2.5 is available.',
  link: { label: 'View changelog', href: '/changelog' },
});

// External link with an icon
toasts.show({
  type: 'positive',
  title: 'Report ready',
  message: 'Your export is ready to download.',
  link: {
    label: 'Open report',
    href: 'https://example.com/report',
    icon: 'external-link',
    isExternal: true,
  },
});

// Tear down (closes all + removes container + unregisters from overlay hub)
toasts.destroy();
`})}),`
`,e.jsx(n.h2,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="arvo-toast-container arvo-toast-container--top-right" role="region" aria-label="Notifications">
  <div class="arvo-toast arvo-toast--info" role="status" aria-atomic="true">
    <span class="arvo-toast__ico o9con o9con-info-circle-filled" aria-hidden="true"></span>
    <div class="arvo-toast__content">
      <div>
        <p class="arvo-toast__title">New release</p>
        <p class="arvo-toast__msg">Version 2.5 is available.</p>
      </div>
      <div class="arvo-toast__link">
        <a class="arvo-lnk arvo-lnk--primary arvo-lnk--sm" href="/changelog">
          <span class="arvo-lnk__lbl">View changelog</span>
        </a>
      </div>
    </div>
    <button class="arvo-toast__close" type="button" aria-label="Close notification">
      <span class="o9con o9con-close" aria-hidden="true"></span>
    </button>
  </div>
</div>
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:'<a class="arvo-lnk ...">'})," inside ",e.jsx(n.code,{children:"arvo-toast__link"}),` is rendered by the
toast itself from the structured `,e.jsx(n.code,{children:"link"})," action you pass to ",e.jsx(n.code,{children:"show()"}),`. You do
NOT pass an anchor element or a React node -- pass `,e.jsx(n.code,{children:"{ label, href, ... }"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"negative"})," and ",e.jsx(n.code,{children:"block"})," toasts get ",e.jsx(n.code,{children:'role="alert"'}),` automatically (assertive). All
other types use `,e.jsx(n.code,{children:'role="status"'})," (polite). The close button is a plain ",e.jsx(n.code,{children:"<button>"}),`
styled to look like a 16px icon -- it does NOT use `,e.jsx(n.code,{children:"ArvoIconButton"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"js-only",children:"JS only"}),`
`,e.jsx(n.h3,{id:"static-factory",children:"Static factory"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoToast.initialize(container?, options?)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLElement | string | null"}),", ",e.jsx("code",{children:"ArvoToastManagerOptions"})]}),e.jsxs("td",{children:[e.jsx("code",{children:"ArvoToast"})," instance"]}),e.jsxs("td",{children:["Create a toast manager. ",e.jsx("code",{children:"container"})," may be an element, a CSS selector, or ",e.jsx("code",{children:"null"})," (defaults to ",e.jsx("code",{children:"document.body"}),")."]})]})})]}),`
`,e.jsx(n.h3,{id:"instance-methods",children:"Instance methods"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"show(options)"})}),e.jsx("td",{children:e.jsx("code",{children:"ArvoToastOptions"})}),e.jsxs("td",{children:[e.jsx("code",{children:"string"})," (id)"]}),e.jsx("td",{children:"Push a new toast; returns its id."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"close(id)"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsxs("td",{children:["Close a specific toast. Fires ",e.jsx("code",{children:"onClose"})," and dispatches ",e.jsx("code",{children:"toast:close"})," with ",e.jsx("code",{children:"reason: 'programmatic'"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"closeAll()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsxs("td",{children:["Close every active toast. Fires each toast's ",e.jsx("code",{children:"onClose"})," and dispatches one ",e.jsx("code",{children:"toast:close"})," per toast."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Close all toasts, unregister from the overlay hub, and remove the container element."})]})]})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Position is configured at construction via ",e.jsx(n.code,{children:"ArvoToastManagerOptions.position"}),`.
There is no per-toast `,e.jsx(n.code,{children:"position"})," option and no ",e.jsx(n.code,{children:"setPosition()"}),` method --
create a separate manager when you need a different position.`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"manager-options-arvotoastmanageroptions",children:["Manager options (",e.jsx(n.code,{children:"ArvoToastManagerOptions"}),")"]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Default"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"position"})}),e.jsx("td",{children:e.jsx("code",{children:"'top-right' | 'bottom-right'"})}),e.jsx("td",{children:e.jsx("code",{children:"'top-right'"})}),e.jsx("td",{children:"Screen position for the stack. Right-anchored only; left-side placements are not supported."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"timeout"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:e.jsx("code",{children:"5000"})}),e.jsxs("td",{children:["Default fade timeout (ms) used when an individual ",e.jsx("code",{children:"show()"})," call omits ",e.jsx("code",{children:"timeout"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"pauseOnHover"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsxs("td",{children:["Default hover-pause behavior used when ",e.jsx("code",{children:"show()"})," omits ",e.jsx("code",{children:"pauseOnHover"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"hub"})}),e.jsx("td",{children:e.jsx("code",{children:"OverlayHub"})}),e.jsx("td",{children:"module singleton"}),e.jsx("td",{children:"Override the overlay hub. Most apps use the default."})]})]})]}),`
`,e.jsxs(n.h3,{id:"link-action-shape-arvotoastlinkaction",children:["Link action shape (",e.jsx(n.code,{children:"ArvoToastLinkAction"}),")"]}),`
`,e.jsxs(n.p,{children:["Pass the ",e.jsx(n.code,{children:"link"}),` field as a plain options object -- the toast renders an
internal `,e.jsx(n.code,{children:"ArvoLink"}),` from it. Only the fields below are part of the public
contract; `,e.jsx(n.code,{children:"size"})," and ",e.jsx(n.code,{children:"variant"}),` are curated by the toast itself for visual
consistency.`]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Default"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"label"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"--"}),e.jsxs("td",{children:[e.jsx("strong",{children:"Required."})," Visible link text."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"href"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"--"}),e.jsxs("td",{children:[e.jsx("strong",{children:"Required."})," Anchor target. Use ",e.jsx("code",{children:"'#'"})," + ",e.jsx("code",{children:"onClick"})," for a programmatic CTA."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"icon"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"--"}),e.jsxs("td",{children:["Optional leading ",e.jsx("code",{children:"o9con"})," icon glyph (no ",e.jsx("code",{children:"o9con-"})," prefix)."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isExternal"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"Open in a new tab and append the external-link affordance."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onClick"})}),e.jsx("td",{children:e.jsx("code",{children:"(event) => void"})}),e.jsx("td",{children:"--"}),e.jsxs("td",{children:["React: ",e.jsx("code",{children:"React.MouseEvent<HTMLAnchorElement>"}),". JS: ",e.jsx("code",{children:"Event"}),"."]})]})]})]}),`
`,e.jsxs(n.h3,{id:"rich-text-message-basicinlinecontent",children:["Rich-text ",e.jsx(n.code,{children:"message"})," (",e.jsx(n.code,{children:"BasicInlineContent"}),")"]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"message"})," field accepts either a plain string (treated as a single text run) or a ",e.jsx(n.code,{children:"BasicInlineContent"})," array from ",e.jsx(n.code,{children:"@arvo/core/inline-content"}),". Allowed inline runs: ",e.jsx(n.code,{children:"text"}),", ",e.jsx(n.code,{children:"em"}),", ",e.jsx(n.code,{children:"strong"}),", ",e.jsx(n.code,{children:"link"}),", ",e.jsx(n.code,{children:"code"}),", ",e.jsx(n.code,{children:"kbd"}),". Raw HTML strings, event handlers, and arbitrary attributes are not representable -- the contract is the security guarantee."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import type { BasicInlineContent } from '@arvo/react';

const message: BasicInlineContent = [
  { type: 'text', value: 'Press ' },
  { type: 'kbd', value: 'Esc' },
  { type: 'text', value: ' to dismiss. Read the ' },
  {
    type: 'link',
    label: 'release notes',
    href: 'https://example.com/release',
    target: '_blank',
  },
  { type: 'text', value: '.' },
];

toasts.show({ type: 'info', title: 'Update available', message });
`})}),`
`,e.jsxs(n.p,{children:["The shared SCSS ",e.jsx(n.code,{children:"inline-content"})," mixin styles the published ",e.jsx(n.code,{children:".arvo-inline__*"}),' classes. Strong runs use weight 500 to match the Figma "with strong" toast. Links with ',e.jsx(n.code,{children:'target="_blank"'})," automatically receive ",e.jsx(n.code,{children:'rel="noopener noreferrer"'}),"."]}),`
`,e.jsx(n.h3,{id:"custom-events",children:"Custom Events"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Detail"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"toast:close"})}),e.jsx("td",{children:e.jsx("code",{children:"{ id: string; reason: 'click' | 'escape' | 'fade' | 'programmatic' }"})}),e.jsx("td",{children:"Fires on the toast container after a toast is removed. Bubbles; not cancelable."})]})})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"react-usage",children:"React usage"}),`
`,e.jsxs(n.p,{children:["For React, mount ",e.jsx(n.code,{children:"<ArvoToastProvider>"})," once at the app root and call ",e.jsx(n.code,{children:"useToast()"}),`
from any descendant:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ArvoToastProvider, useToast, ArvoButton } from '@arvo/react';

function App() {
  return (
    <ArvoToastProvider position="top-right">
      <Page />
    </ArvoToastProvider>
  );
}

function SaveButton() {
  const { show, close, closeAll } = useToast();
  return (
    <ArvoButton
      variant="primary"
      label="Save"
      onClick={() => show({ type: 'positive', message: 'Saved' })}
    />
  );
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useToast().close(id)"})," and ",e.jsx(n.code,{children:"closeAll()"})," fire each toast's ",e.jsx(n.code,{children:"onClose"}),` callback and
dispatch `,e.jsx(n.code,{children:"toast:close"})," on the container with ",e.jsx(n.code,{children:"reason: 'programmatic'"}),`, matching
the JS API. React adds two extra hover hooks (`,e.jsx(n.code,{children:"onMouseEnter"}),", ",e.jsx(n.code,{children:"onMouseLeave"}),`)
on `,e.jsx(n.code,{children:"ArvoToastOptions"})," that the JS surface does not expose."]})]})}function N(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{N as default};
