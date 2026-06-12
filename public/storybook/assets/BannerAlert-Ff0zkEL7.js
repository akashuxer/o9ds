import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as o,M as l,C as s,a as d}from"./blocks-DLeo0hIy.js";import{B as c,P as r,A as a,a as h,W as x,R as j,D as m,L as p,E as u,S as b}from"./BannerAlert.stories-9E_P9MHQ.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./BannerAlert-DwOPtWj_.js";import"./inline-content-CllLfblQ.js";import"./index28-DgjIRxoq.js";import"./IconButton-BgwDUYzG.js";import"./useTooltip-DZu1XpnP.js";import"./useControllableState-BcENo7ec.js";import"./loading-flag-DkqmYwgU.js";import"./Button-B8O_kk1m.js";import"./Link-NIjDRzO0.js";import"./Select-BLh_A-b9.js";import"./useOverlay-Bo9f1g6f.js";import"./OverlayContext-C5RootgB.js";import"./index18-B-vHVXJV.js";import"./menu-search-C2FCcKsr.js";import"./FormLabel-Dn-HbpfA.js";import"./Search-B0ooNraj.js";import"./MessageAlert-DBQwY950.js";function i(t){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(n.h1,{id:"banneralert",children:"BannerAlert"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," New"]}),`
`]}),`
`,e.jsx(n.p,{children:`Full-width inline alert banner for persistent contextual feedback. A horizontal
bar with a colored left border, a type-tinted background, a leading status icon,
and a content area holding an optional title, a message, and an optional action
row (button + inline link). Six semantic types and two layout modes (default and
compact); optionally dismissible.`}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Surface a persistent, full-width contextual message at the top of a page,
panel, or section.`}),`
`,e.jsxs(n.li,{children:[`Use the default mode for a title plus message plus an optional action button
and link; use `,e.jsx(n.code,{children:"isCompact"})," for a single-line, message-only banner."]}),`
`,e.jsxs(n.li,{children:["Choose the semantic ",e.jsx(n.code,{children:"type"})," to match intent -- ",e.jsx(n.code,{children:"negative"})," and ",e.jsx(n.code,{children:"block"}),`
auto-resolve to `,e.jsx(n.code,{children:'role="alert"'})," (assertive); the rest announce politely."]}),`
`,e.jsxs(n.li,{children:["For a short, self-contained inline status badge use ",e.jsx(n.code,{children:"BadgeAlert"}),`; for
transient pop-up notifications use `,e.jsx(n.code,{children:"Toast"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(s,{of:r,sourceState:"shown"}),`
`,e.jsx(d,{of:r}),`
`,e.jsx(n.h2,{id:"types",children:"Types"}),`
`,e.jsx(n.p,{children:`Six semantic types drive the border color, background tint, title/icon color,
and icon glyph -- in both default and compact layout modes.`}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h2,{id:"actions",children:"Actions"}),`
`,e.jsx(n.p,{children:"A banner can pair an outline button with an inline link in its action row."}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h2,{id:"rich-text",children:"Rich text"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"message"})," accepts the shared ",e.jsx(n.code,{children:"BasicInlineContent"}),` contract, so it can embed
strong, code, kbd, and inline link runs.`]}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(n.p,{children:"Banners can be dismissible (close button) or show a Pattern A loading overlay."}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h2,{id:"in-context",children:"In context"}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsx(n.p,{children:`Full-width banner alert for persistent contextual feedback. Six semantic
types (positive, info, neutral, warning, negative, block) drive border color,
background tint, title/icon color, and icon glyph. Two layout modes: default
(title + multi-line message + optional link) and compact (message only, tighter
padding). Optionally dismissible via a 16px close button.`}),`
`,e.jsx(n.h2,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoBannerAlert } from '@arvo/js';

const host = document.querySelector('#my-banner');
const banner = ArvoBannerAlert.initialize(host, {
  type: 'negative',
  title: 'Connection lost',
  message: 'We cannot reach the server. Check your network.',
  isDismissible: true,
  // Dismissing removes the banner from the DOM automatically; use
  // onDismiss only to react to the dismissal (e.g. persist a preference).
  onDismiss: () => console.log('dismissed'),
});

// Listen for the custom dismiss event
host.addEventListener('bnr-alert:dismiss', () => {
  console.log('Banner dismissed');
});

// Programmatic updates
banner.type('warning');
banner.message('Network unstable');
banner.title('Degraded connectivity');
banner.loading(true);

// Clean up
banner.destroy();
`})}),`
`,e.jsx(n.h2,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(n.h3,{id:"default-mode",children:"Default mode"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="arvo-bnr-alert arvo-bnr-alert--negative" role="alert">
  <span class="arvo-bnr-alert__ico o9con" aria-hidden="true"></span>
  <div class="arvo-bnr-alert__content">
    <div class="arvo-bnr-alert__copy">
      <p class="arvo-bnr-alert__title">Connection lost</p>
      <p class="arvo-bnr-alert__msg">We cannot reach the server.</p>
    </div>
    <div class="arvo-bnr-alert__link">
      <a class="arvo-link arvo-link--sm" href="#">View status</a>
    </div>
  </div>
  <button class="arvo-icon-btn arvo-btn--tertiary arvo-btn--xs arvo-bnr-alert__close" type="button" aria-label="Dismiss alert">
    <span class="arvo-btn__ico o9con o9con-close" aria-hidden="true"></span>
  </button>
</div>
`})}),`
`,e.jsx(n.h3,{id:"compact-mode",children:"Compact mode"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="arvo-bnr-alert arvo-bnr-alert--info arvo-bnr-alert--compact" role="status">
  <span class="arvo-bnr-alert__ico o9con" aria-hidden="true"></span>
  <div class="arvo-bnr-alert__content">
    <p class="arvo-bnr-alert__msg">Scheduled maintenance tonight.</p>
  </div>
  <button class="arvo-icon-btn arvo-btn--tertiary arvo-btn--xs arvo-bnr-alert__close" type="button" aria-label="Dismiss alert">
    <span class="arvo-btn__ico o9con o9con-close" aria-hidden="true"></span>
  </button>
</div>
`})}),`
`,e.jsxs(n.p,{children:["Type modifiers: ",e.jsx(n.code,{children:"--positive"}),", ",e.jsx(n.code,{children:"--info"}),", ",e.jsx(n.code,{children:"--neutral"}),", ",e.jsx(n.code,{children:"--warning"}),", ",e.jsx(n.code,{children:"--negative"}),", ",e.jsx(n.code,{children:"--block"}),`.
Layout modifier: `,e.jsx(n.code,{children:"--compact"}),`.
State class: `,e.jsx(n.code,{children:".loading"})," (Pattern A shimmer overlay)."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"js-only",children:"JS only"}),`
`,e.jsx(n.h3,{id:"methods",children:"Methods"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoBannerAlert.initialize(element, options)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLElement"}),", ",e.jsx("code",{children:"ArvoBannerAlertOptions"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoBannerAlert"})}),e.jsx("td",{children:"Factory -- builds DOM structure inside the host element."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"type()"})," / ",e.jsx("code",{children:"type(newType)"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoBannerAlertType?"})}),e.jsx("td",{children:e.jsx("code",{children:"string | void"})}),e.jsx("td",{children:"Get or set the semantic type. Updates border, background, icon, and role."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"message()"})," / ",e.jsx("code",{children:"message(text)"})]}),e.jsx("td",{children:e.jsx("code",{children:"string?"})}),e.jsx("td",{children:e.jsx("code",{children:"string | void"})}),e.jsx("td",{children:"Get or set the message text."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"title()"})," / ",e.jsx("code",{children:"title(text)"})]}),e.jsx("td",{children:e.jsx("code",{children:"string | null?"})}),e.jsx("td",{children:e.jsx("code",{children:"string | null | void"})}),e.jsxs("td",{children:["Get, set, or remove the title. Pass ",e.jsx("code",{children:"null"})," to hide. No-op in compact mode."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLink(element)"})}),e.jsx("td",{children:e.jsx("code",{children:"HTMLElement | null"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Set or remove the link element. No-op in compact mode."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"loading()"})," / ",e.jsx("code",{children:"loading(state)"})]}),e.jsx("td",{children:e.jsx("code",{children:"boolean?"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set Pattern A loading state."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"dismiss()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsxs("td",{children:["Programmatically dismiss. Fires ",e.jsx("code",{children:"bnr-alert:dismiss"}),", calls ",e.jsx("code",{children:"onDismiss"}),", then removes the banner from the DOM."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Clean up DOM, unbind listeners, restore host element."})]})]})]}),`
`,e.jsx(n.h3,{id:"custom-events",children:"Custom Events"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Bubbles"}),e.jsx("th",{children:"Cancelable"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"bnr-alert:dismiss"})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"No"}),e.jsxs("td",{children:["Fired when the close button is clicked or ",e.jsx("code",{children:"dismiss()"})," is called. Consumer is responsible for removing the element."]})]})})]})]})}function z(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{z as default};
