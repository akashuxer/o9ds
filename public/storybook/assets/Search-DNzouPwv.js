import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as c,M as t,C as r,a as l}from"./blocks-DLeo0hIy.js";import{S as h,P as d,A as o,F as a,W as x,a as j,b as u,M as v,c as p,D as m,L as f,E as g,d as b,e as y,f as S,g as w}from"./Search.stories-Do0OYdux.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./Search-B0ooNraj.js";import"./useTooltip-DZu1XpnP.js";import"./index28-DgjIRxoq.js";import"./loading-flag-DkqmYwgU.js";import"./IconButton-BgwDUYzG.js";import"./useControllableState-BcENo7ec.js";import"./MessageAlert-DBQwY950.js";import"./Button-B8O_kk1m.js";function i(s){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:h}),`
`,e.jsx(n.h1,{id:"search",children:"Search"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status:"})," Stable"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Search input with two variants -- ",e.jsx(n.code,{children:"filter"}),` (filters a list, with optional
multi-line entry) and `,e.jsx(n.code,{children:"find"}),` (navigates matches with a counter and prev/next
controls). Borderless by default with an animated focus border, a leading
search icon, and an absolutely-positioned actions area for the clear button,
shortcut badge, and counter.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Provide a query field for filtering a list (",e.jsx(n.code,{children:"filter"}),") or navigating matches within content (",e.jsx(n.code,{children:"find"}),")."]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"shortcut"})," to register a global keyboard shortcut (e.g. ",e.jsx(n.code,{children:"Ctrl+K"}),") that focuses the field."]}),`
`,e.jsxs(n.li,{children:["Enable ",e.jsx(n.code,{children:"isMultiLine"})," on the ",e.jsx(n.code,{children:"filter"})," variant for multi-term entry."]}),`
`,e.jsxs(n.li,{children:["For a labeled free-form text field use ",e.jsx(n.code,{children:"Textbox"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Adjust any prop live. This is the canonical interactive example."}),`
`,e.jsx(r,{of:d,sourceState:"shown"}),`
`,e.jsx(l,{of:d}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"filter"})," filters a list as you type; ",e.jsx(n.code,{children:"find"})," steps through matches."]}),`
`,e.jsx(r,{of:o}),`
`,e.jsx(n.h2,{id:"find-mode",children:"Find mode"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"find"}),` variant shows a match counter and prev/next navigation. The counter
reflects the current and total matches.`]}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(n.h2,{id:"shortcut",children:"Shortcut"}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.code,{children:"shortcut"}),` renders a badge and registers a global keydown listener that
focuses the field.`]}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(n.h2,{id:"multi-line",children:"Multi-line"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"filter"}),` variant supports a multi-line textarea mode for entering several
terms at once.`]}),`
`,e.jsx(r,{of:v}),`
`,e.jsx(n.h2,{id:"search-mode",children:"Search mode"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"input"})," mode fires ",e.jsx(n.code,{children:"onSearch"})," as you type; ",e.jsx(n.code,{children:"submit"})," mode fires only on Enter."]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(n.p,{children:`Disabled blocks interaction, loading renders a skeleton overlay, and the error
state shows a persistent red border.`}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(r,{of:f}),`
`,e.jsx(r,{of:g}),`
`,e.jsx(r,{of:b}),`
`,e.jsx(n.h2,{id:"layout",children:"Layout"}),`
`,e.jsxs(n.p,{children:["The field defaults to 300px; set an explicit ",e.jsx(n.code,{children:"width"})," or use ",e.jsx(n.code,{children:"isFullWidth"}),"."]}),`
`,e.jsx(r,{of:y}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(r,{of:S}),`
`,e.jsx(r,{of:w}),`
`,e.jsx(n.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(n.p,{children:["The vanilla JS version of ",e.jsx(n.code,{children:"ArvoSearch"}),". Two variants:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"filter"})," -- live filter input (default), commits as the user types."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"find"})," -- in-page find with prev/next counter and step controls."]}),`
`]}),`
`,e.jsx(n.h2,{id:"installation-snippet",children:"Installation snippet"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ArvoSearch } from '@arvo/js';

const el = document.querySelector('#my-search');
const s = ArvoSearch.initialize(el, {
  variant: 'filter',
  placeholder: 'Search products',
  shortcut: 'Ctrl+K',
  defaultValue: 'apples',
  onChange: (value) => console.log(value),
  onSearch: (value, values) => console.log(value, values),
});

s.value('apples');
s.clear();
s.disabled(true);
s.setLoading(true);
s.destroy();
`})}),`
`,e.jsx(n.h2,{id:"rendered-html-reference",children:"Rendered HTML reference"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="arvo-search arvo-search--filter" role="search">
  <div class="arvo-search__field">
    <i class="arvo-search__ico o9con o9con-search" aria-hidden="true"></i>
    <input class="arvo-search__input" type="search" placeholder="Search products" aria-label="Search" />
    <div class="arvo-search__actions">
      <!-- The clear button is an ArvoIconButton (size sm, variant tertiary). -->
      <button class="arvo-icon-btn arvo-btn arvo-btn--tertiary arvo-btn--sm arvo-search__clear" type="button" tabindex="-1" aria-label="Clear">
        <span class="arvo-btn__ico o9con o9con-close" aria-hidden="true"></span>
      </button>
    </div>
    <div class="arvo-search__border"></div>
  </div>
</div>
`})}),`
`,e.jsxs(n.p,{children:["The input lives inside ",e.jsx(n.code,{children:"arvo-search__field"}),", the leading icon is an ",e.jsx(n.code,{children:"<i>"}),` with
`,e.jsx(n.code,{children:"arvo-search__ico"}),`, and dynamic chrome (clear button, shortcut badge, counter,
prev/next, error icon) lives in `,e.jsx(n.code,{children:"arvo-search__actions"}),`. There is no size
modifier on the root.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Callback"}),e.jsx("th",{children:"Signature"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onSearch"})}),e.jsx("td",{children:e.jsx("code",{children:"(value: string, values?: string[]) => void"})}),e.jsx("td",{children:"Commit (Enter / submit)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(value: string) => void"})}),e.jsx("td",{children:"Per-keystroke"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onClear"})}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"Clear button pressed"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"js-only",children:"JS only"}),`
`,e.jsx(n.h3,{id:"methods",children:"Methods"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoSearch.initialize(element, options)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLDivElement"}),", ",e.jsx("code",{children:"ArvoSearchOptions"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoSearch"})}),e.jsx("td",{children:"Static factory."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"value()"})," / ",e.jsx("code",{children:"value(next)"})]}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"string | void"})}),e.jsxs("td",{children:["Get or set the search query. Fires ",e.jsx("code",{children:"search:change"})," when the value differs from the previous value."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"clear()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsxs("td",{children:["Empty the input, fire ",e.jsx("code",{children:"search:clear"})," + ",e.jsx("code",{children:"onClear"}),", refocus the input."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"search()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsxs("td",{children:["Programmatically fire ",e.jsx("code",{children:"search:search"})," and ",e.jsx("code",{children:"onSearch"})," with the current value."]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"counter()"})," / ",e.jsx("code",{children:"counter(current, total)"})]}),e.jsx("td",{children:e.jsx("code",{children:"number, number"})}),e.jsx("td",{children:e.jsx("code",{children:"{ current, total } | null | void"})}),e.jsx("td",{children:"Get or set the find-mode counter badge."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"next()"})," / ",e.jsx("code",{children:"previous()"})]}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsxs("td",{children:["Find-mode step controls. Dispatch ",e.jsx("code",{children:"search:next"})," / ",e.jsx("code",{children:"search:previous"}),"."]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"shortcut()"})," / ",e.jsx("code",{children:"shortcut(combo | null)"})]}),e.jsx("td",{children:e.jsx("code",{children:"string | null"})}),e.jsx("td",{children:e.jsx("code",{children:"string | null | void"})}),e.jsxs("td",{children:["Get or set the global keyboard shortcut (e.g. ",e.jsx("code",{children:"'Ctrl+K'"}),")."]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"width()"})," / ",e.jsx("code",{children:"width(value | null)"})]}),e.jsx("td",{children:e.jsx("code",{children:"string | null"})}),e.jsx("td",{children:e.jsx("code",{children:"string | null | void"})}),e.jsxs("td",{children:["Get or set the CSS width (drives ",e.jsx("code",{children:"--arvo-form-input-width"}),")."]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"fullWidth()"})," / ",e.jsx("code",{children:"fullWidth(state)"})]}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set the full-width modifier."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setError(message | false)"})}),e.jsx("td",{children:e.jsx("code",{children:"string | false"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsxs("td",{children:["Apply an error message (string) or clear (",e.jsx("code",{children:"false"}),")."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"focus()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Focus the input (no-op when disabled or loading)."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLoading(loading)"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Toggle the loading skeleton."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"disabled()"})," / ",e.jsx("code",{children:"disabled(state)"})]}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | void"})}),e.jsx("td",{children:"Get or set the disabled state."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Remove listeners and tear down inner components."})]})]})]}),`
`,e.jsx(n.h3,{id:"custom-events",children:"Custom Events"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Detail"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"search:input"})}),e.jsx("td",{children:e.jsx("code",{children:"{ value: string }"})}),e.jsx("td",{children:"Per-keystroke (any input event)."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"search:change"})}),e.jsx("td",{children:e.jsx("code",{children:"{ value: string; previousValue: string }"})}),e.jsxs("td",{children:["Fires on commit (blur or programmatic ",e.jsx("code",{children:"value()"})," setter) when the value changed."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"search:search"})}),e.jsx("td",{children:e.jsx("code",{children:"{ value: string; values?: string[] }"})}),e.jsxs("td",{children:["Commit via Enter / submit-mode. Multi-line variant includes ",e.jsx("code",{children:"values"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"search:clear"})}),e.jsx("td",{children:e.jsx("code",{children:"{}"})}),e.jsx("td",{children:"Fires when the clear button is pressed."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"search:next"})," / ",e.jsx("code",{children:"search:previous"})]}),e.jsx("td",{children:e.jsx("code",{children:"{}"})}),e.jsx("td",{children:"Find-mode step events."})]})]})]})]})}function R(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{R as default};
