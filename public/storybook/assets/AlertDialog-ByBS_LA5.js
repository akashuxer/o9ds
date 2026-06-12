import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as o,M as s,C as t,a as l}from"./blocks-DLeo0hIy.js";import{A as a,P as r,W as c,I as h,a as x,N as j,B as g,D as p,C as v,b as u,c as m,d as b,L as f}from"./AlertDialog.stories-Cis9-W4E.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./index17-CEY5xPko.js";import"./Button-B8O_kk1m.js";import"./useControllableState-BcENo7ec.js";import"./loading-flag-DkqmYwgU.js";import"./IconButton-BgwDUYzG.js";import"./useTooltip-DZu1XpnP.js";import"./index28-DgjIRxoq.js";import"./Checkbox-k9WMnmR3.js";import"./FormLabel-Dn-HbpfA.js";import"./MessageAlert-DBQwY950.js";import"./Textbox-BjaSSAvr.js";import"./index2-HSp4ZJrG.js";import"./Textarea-DHmHzhmJ.js";import"./Combobox-BRLEGBie.js";import"./useOverlay-Bo9f1g6f.js";import"./OverlayContext-C5RootgB.js";import"./index18-B-vHVXJV.js";import"./Select-BLh_A-b9.js";import"./menu-search-C2FCcKsr.js";import"./Search-B0ooNraj.js";import"./BannerAlert-DwOPtWj_.js";import"./inline-content-CllLfblQ.js";import"./Link-NIjDRzO0.js";import"./useFocusTrap-BePVbEUc.js";function i(d){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:a}),`
`,e.jsx(n.h1,{id:"alertdialog",children:"AlertDialog"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Beta"]}),`
`]}),`
`,e.jsx(n.p,{children:`Modal confirmation dialog for status feedback and destructive-action
confirmation. Renders a centred panel above a backdrop with a semantic icon,
title, message, optional confirmation textbox, optional "don't show again"
checkbox, and an action button row.`}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Confirm a consequential or destructive action, or surface a blocking status
message that requires acknowledgement.`}),`
`,e.jsxs(n.li,{children:["Match intent with the semantic ",e.jsx(n.code,{children:"variant"}),` (warning, info, positive, negative,
block).`]}),`
`,e.jsxs(n.li,{children:["Gate destructive confirmations with ",e.jsx(n.code,{children:"hasDangerAction"}),` and, for high-risk
actions, a `,e.jsx(n.code,{children:"confirmInput"}),"."]}),`
`,e.jsxs(n.li,{children:["For non-blocking, dismissible feedback use ",e.jsx(n.code,{children:"Toast"})," or ",e.jsx(n.code,{children:"BannerAlert"}),`. For
larger tasks or forms use `,e.jsx(n.code,{children:"Drawer"})," or ",e.jsx(n.code,{children:"SidePanel"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(t,{of:r,sourceState:"shown"}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"variant"})," sets the header icon glyph and color to match the message intent."]}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(t,{of:g}),`
`,e.jsx(n.h2,{id:"danger-action",children:"Danger action"}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.h2,{id:"confirm-input",children:"Confirm input"}),`
`,e.jsx(n.p,{children:"A typed confirmation gates the primary action until the expected value matches."}),`
`,e.jsx(t,{of:v}),`
`,e.jsx(n.h2,{id:"dont-show-again",children:"Don't show again"}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(t,{of:b}),`
`,e.jsx(t,{of:f}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:["The vanilla JS version of ",e.jsx(n.code,{children:"ArvoAlertDialog"}),`. Modal confirmation dialog used for
status feedback and destructive-action confirmation. Renders a centred fixed-width
panel above a blurred backdrop with a semantic icon, title, body message, optional
confirmation textbox, optional "don't show again" checkbox, and an action button row.`]}),`
`,e.jsx(n.h3,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoAlertDialog } from '@arvo/js/components/AlertDialog';

// Create and open a warning dialog
const dlg = ArvoAlertDialog.initialize({
  title: 'Delete Record',
  message: 'This record will be permanently deleted and cannot be recovered.',
  variant: 'warning',
  hasDangerAction: true,
  primaryAction: { label: 'Delete' },
  secondaryAction: { label: 'Cancel' },
  onClose: ({ reason }) => console.log('closed:', reason),
});

dlg.open();

// Update title / message at runtime
dlg.title('Updated Title');
dlg.message('Updated message text.');

// Change variant
dlg.setVariant('error');

// Toggle loading state
dlg.setLoading(true);
// ...async work...
dlg.setLoading(false);

// Read confirm input value
const typed = dlg.confirmValue();

// Don't-show-again state
const checked = dlg.dontShowAgainChecked(); // => boolean
dlg.dontShowAgainChecked(true);             // set programmatically

// Close programmatically
dlg.close('programmatic');

// Destroy when done
dlg.destroy();

// Listen to panel events
const panel = document.querySelector('.arvo-alert-dlg__panel');
panel.addEventListener('alert-dlg:open', () => console.log('opened'));
panel.addEventListener('alert-dlg:close', (e) => console.log('closed:', e.detail.reason));
panel.addEventListener('alert-dlg:action', (e) => {
  console.log('action:', e.detail.action, e.detail.confirmValue, e.detail.dontShowAgain);
});
`})}),`
`,e.jsx(n.h3,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Warning variant (open, with backdrop) -->
<div
  class="arvo-alert-dlg arvo-alert-dlg--warning arvo-alert-dlg--with-backdrop open"
  role="alertdialog"
  aria-modal="true"
  aria-labelledby="dlg-title"
  aria-describedby="dlg-body"
>
  <div class="arvo-alert-dlg__backdrop" aria-hidden="true"></div>
  <div class="arvo-alert-dlg__panel" tabindex="-1">
    <div class="arvo-alert-dlg__header">
      <span class="arvo-alert-dlg__ico o9con" aria-hidden="true"></span>
      <p class="arvo-alert-dlg__title" id="dlg-title">Confirm Action</p>
    </div>
    <div class="arvo-alert-dlg__body" id="dlg-body">
      <p class="arvo-alert-dlg__msg">Are you sure you want to continue?</p>
    </div>
    <div class="arvo-alert-dlg__footer">
      <div class="arvo-alert-dlg__actions">
        <button class="arvo-btn arvo-btn--secondary arvo-btn--md" type="button">
          <span class="arvo-btn__lbl">Cancel</span>
        </button>
        <button class="arvo-btn arvo-btn--primary arvo-btn--md" type="button">
          <span class="arvo-btn__lbl">OK</span>
        </button>
      </div>
    </div>
  </div>
</div>

<!-- Danger action modifier -->
<div class="arvo-alert-dlg arvo-alert-dlg--warning arvo-alert-dlg--danger arvo-alert-dlg--with-backdrop open">
  <!-- ... -->
  <div class="arvo-alert-dlg__actions">
    <button class="arvo-btn arvo-btn--secondary arvo-btn--md" type="button">
      <span class="arvo-btn__lbl">Cancel</span>
    </button>
    <button class="arvo-btn arvo-btn--danger arvo-btn--md" type="button">
      <span class="arvo-btn__lbl">Delete</span>
    </button>
  </div>
</div>

<!-- With confirm input and don't-show-again checkbox -->
<div class="arvo-alert-dlg arvo-alert-dlg--warning arvo-alert-dlg--with-backdrop open">
  <!-- ... header, body with __msg ... -->
  <div class="arvo-alert-dlg__confirm-input">
    <!-- ArvoTextbox rendered here (fullWidth) -->
  </div>
  <div class="arvo-alert-dlg__footer">
    <div class="arvo-alert-dlg__dont-show">
      <!-- ArvoCheckbox (size=sm) rendered here -->
    </div>
    <div class="arvo-alert-dlg__actions"><!-- ... --></div>
  </div>
</div>

<!-- With close button (isClosable) -->
<div class="arvo-alert-dlg arvo-alert-dlg--warning arvo-alert-dlg--closable arvo-alert-dlg--with-backdrop open">
  <div class="arvo-alert-dlg__header">
    <span class="arvo-alert-dlg__ico o9con" aria-hidden="true"></span>
    <p class="arvo-alert-dlg__title" id="dlg-title">Alert Title</p>
    <span class="arvo-alert-dlg__close-btn">
      <button class="arvo-icon-btn arvo-icon-btn--tertiary arvo-icon-btn--sm" type="button" aria-label="Close dialog">
        <span class="arvo-btn__ico o9con o9con-close" aria-hidden="true"></span>
      </button>
    </span>
  </div>
  <!-- ... -->
</div>

<!-- Loading state -->
<div class="arvo-alert-dlg arvo-alert-dlg--warning arvo-alert-dlg--with-backdrop open loading"
  aria-busy="true">
  <!-- title and body show CSS shimmer placeholders; action buttons are disabled -->
</div>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,e.jsxs(n.p,{children:[`The following callbacks work in both frameworks. In React they are props; in
JS they are options passed to `,e.jsx(n.code,{children:"initialize()"}),"."]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Signature"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onOpen"})}),e.jsx("td",{children:e.jsx("code",{children:"() => void | false"})}),e.jsxs("td",{children:["Fires before the dialog opens. Return ",e.jsx("code",{children:"false"})," to cancel opening."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onClose"})}),e.jsx("td",{children:e.jsx("code",{children:"(detail: { reason }) => void | false"})}),e.jsxs("td",{children:["Fires before the dialog closes. Return ",e.jsx("code",{children:"false"})," to cancel closing."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onOpenChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(open: boolean) => void"})}),e.jsx("td",{children:"Fires after open state changes (React only for controlled mode)."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onConfirmInputChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(value: string) => void"})}),e.jsx("td",{children:"Fires when the confirm input value changes."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onDontShowAgainChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(checked: boolean) => void"})}),e.jsx("td",{children:`Fires when the "Don't show again" checkbox is toggled.`})]})]})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"React only:"})," The component also spreads all standard ",e.jsx(n.code,{children:"HTMLDivElement"}),` attributes
(e.g. `,e.jsx(n.code,{children:"onFocus"}),", ",e.jsx(n.code,{children:"onKeyDown"}),") on the root element via ",e.jsx(n.code,{children:"...rest"}),"."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"js-only",children:"JS only"}),`
`,e.jsx(n.h4,{id:"methods",children:"Methods"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["In React, use state and props instead of imperative methods -- e.g., ",e.jsx(n.code,{children:"isLoading={true}"}),`
replaces `,e.jsx(n.code,{children:"setLoading(true)"}),"."]}),`
`]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoAlertDialog.initialize(options)"})}),e.jsx("td",{children:e.jsx("code",{children:"ArvoAlertDialogOptions"})}),e.jsx("td",{children:e.jsx("code",{children:"ArvoAlertDialog"})}),e.jsxs("td",{children:["Static factory. Creates the dialog DOM but does NOT mount it. Call ",e.jsx("code",{children:"open()"})," to show."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"open()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsxs("td",{children:["Mount to container, register with overlay hub, activate focus trap, play enter transition. Fires ",e.jsx("code",{children:"alert-dlg:open"}),". No-ops if already open."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"close(reason?)"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsxs("td",{children:["Play exit transition, deactivate focus trap, unmount, return focus. Fires ",e.jsx("code",{children:"alert-dlg:close"}),". Defaults to ",e.jsx("code",{children:"'programmatic'"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isOpen()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"Returns whether the dialog is currently open."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"toggle()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Toggle the dialog open/closed."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"title(value?)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"string | void"})}),e.jsx("td",{children:"Get or set the title text."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"message(value?)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"string | void"})}),e.jsx("td",{children:"Get or set the body message text."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"renderContent(content)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | HTMLElement | function"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Replace the rich body content. Bypasses the message paragraph."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setVariant(variant)"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Update the semantic variant. Updates the icon glyph and icon color."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setActions(actions)"})}),e.jsx("td",{children:e.jsx("code",{children:"{ primary?: ArvoAlertDialogAction; secondary?: ArvoAlertDialogAction | null }"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Update one or both action button configs without rebuilding the dialog."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLoading(loading)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsxs("td",{children:["Toggle loading state. Adds/removes ",e.jsx("code",{children:".loading"})," and ",e.jsx("code",{children:"aria-busy"}),". Disables action buttons."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"confirmValue()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"Get the current confirm input value (empty string if disabled)."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"dontShowAgainChecked(value?)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:`Get or set the "Don't show again" checkbox state.`})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Close if open, deactivate focus trap, unbind all listeners, destroy inner instances, remove panel from DOM."})]})]})]}),`
`,e.jsx(n.h4,{id:"custom-events",children:"Custom Events"}),`
`,e.jsxs(n.p,{children:["Dispatched on the panel element (",e.jsx("code",{children:".arvo-alert-dlg__panel"}),`). Listen with
`,e.jsx("code",{children:"panel.addEventListener()"}),"."]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Payload"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"alert-dlg:open"})}),e.jsx("td",{children:e.jsx("code",{children:"{}"})}),e.jsx("td",{children:"Fires when the dialog opens."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"alert-dlg:close"})}),e.jsx("td",{children:e.jsx("code",{children:"{ reason: 'primary' | 'secondary' | 'close-button' | 'escape' | 'backdrop' | 'programmatic' }"})}),e.jsxs("td",{children:["Fires when the dialog closes. The ",e.jsx("code",{children:"reason"})," field indicates how the close was triggered."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"alert-dlg:action"})}),e.jsx("td",{children:e.jsx("code",{children:"{ action: 'primary' | 'secondary'; confirmValue: string | null; dontShowAgain: boolean | null }"})}),e.jsx("td",{children:"Fires when an action button is clicked. Includes confirm input value and don't-show-again state if used."})]})]})]})]})}function Z(d={}){const{wrapper:n}={...o(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(i,{...d})}):i(d)}export{Z as default};
