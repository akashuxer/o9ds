import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as c,M as l,C as s,a as t}from"./blocks-DLeo0hIy.js";import{C as o,P as r,A as h,I as a,R as j,M as x,W as m}from"./Calendar.stories-BHB6-hYl.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BaOp0t6F.js";import"./index-BbVYX0ZH.js";import"./index-OXO_9Rtf.js";import"./Calendar-kkFVIcSH.js";import"./useTooltip-DZu1XpnP.js";import"./index28-DgjIRxoq.js";import"./IconButton-BgwDUYzG.js";import"./useControllableState-BcENo7ec.js";import"./loading-flag-DkqmYwgU.js";function i(n){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:o}),`
`,e.jsx(d.h1,{id:"calendar-internal",children:"Calendar (internal)"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsxs(d.p,{children:[e.jsx(d.strong,{children:"Internal composition primitive -- not for direct application use."}),`
`,e.jsx(d.code,{children:"ArvoCalendar"}),` is the rendering engine consumed by the public date/time
pickers. Application code MUST NOT initialize `,e.jsx(d.code,{children:"ArvoCalendar"}),` directly; the
design system reserves the right to change its API at any time. These stories
exist for design-system contributors and visual regression only.`]}),`
`]}),`
`,e.jsx(d.p,{children:e.jsx(d.strong,{children:"Use one of these public components instead:"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Use"}),e.jsx("th",{children:"When"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoDatePicker"})}),e.jsx("td",{children:"Single date selection"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoDateRangePicker"})}),e.jsx("td",{children:"Date range selection"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoDateTimePicker"})}),e.jsx("td",{children:"Combined date + time selection"})]})]})]}),`
`,e.jsxs(d.p,{children:[`When fine-grained inner-calendar configuration is required, the pickers expose a
scoped `,e.jsx(d.code,{children:"calendarProps"})," escape-hatch bag rather than direct consumption."]}),`
`,e.jsx(d.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(s,{of:r,sourceState:"shown"}),`
`,e.jsx(t,{of:r}),`
`,e.jsx(d.h2,{id:"view-modes",children:"View modes"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(d.h2,{id:"interactive-single-select",children:"Interactive (single select)"}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(d.h2,{id:"range-selection",children:"Range selection"}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(d.h2,{id:"member-view",children:"Member view"}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(d.h2,{id:"composing-a-header-calendarnav-sibling",children:"Composing a header (CalendarNav sibling)"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"ArvoCalendar"}),` does not own header chrome; consumers compose a header as a
sibling above the grid. In production the pickers compose `,e.jsx(d.code,{children:"ArvoCalendarNav"}),`
internally (also internal, not exported).`]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(d.h2,{id:"javascript-usage",children:"JavaScript usage"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsxs(d.p,{children:["Internal primitive -- calls to ",e.jsx(d.code,{children:"ArvoCalendar.initialize(...)"}),` must not appear
in product code. The snippet below is for design-system contributors only.`]}),`
`]}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-js",children:`import { ArvoCalendar } from '@arvo/js/components/Calendar';

const el = document.querySelector('#my-calendar');
const cal = ArvoCalendar.initialize(el, {
  visibleYear: 2026,
  visibleMonth: 0,
  viewMode: 'days',
  weekStart: 0,
  hasWeeks: false,
  hasOutsideDays: false,
  onCellSelect: (payload) => console.log('selected', payload),
  onMonthChange: (payload) => console.log('month changed', payload),
});

cal.next(); // forward one period
cal.prev(); // back one period
cal.today(); // jump to today
cal.setViewMode('months');
cal.focusCell(new Date(2026, 0, 15));
cal.restoreFocus();
cal.update({ visibleYear: 2026, visibleMonth: 5, selectedDate: new Date(2026, 5, 10) });
cal.destroy();

el.addEventListener('cal:select', (e) => console.log('selected:', e.detail));
el.addEventListener('cal:viewmode-change', (e) => {
  if (shouldPreventZoom) e.preventDefault();
});
`})}),`
`,e.jsx(d.h3,{id:"shared-api-react--js",children:"Shared API (React + JS)"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Prop / Option"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Default"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"visibleYear"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:"Currently displayed year (required)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"visibleMonth"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:"Currently displayed month 0..11 (required)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"viewMode"})}),e.jsx("td",{children:e.jsx("code",{children:"'days' | 'months' | 'quarters' | 'years' | 'members'"})}),e.jsx("td",{children:e.jsx("code",{children:"'days'"})}),e.jsx("td",{children:"Active grid view mode"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"weekStart"})}),e.jsx("td",{children:e.jsx("code",{children:"0..6"})}),e.jsx("td",{children:e.jsx("code",{children:"0"})}),e.jsx("td",{children:"First day of week (0=Sun)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"hasWeeks"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"Show weeks column in days view"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"hasOutsideDays"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"Render adjacent-period cells"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"selectedDate"})," / ",e.jsx("code",{children:"rangeStart"})," / ",e.jsx("code",{children:"rangeEnd"})," / ",e.jsx("code",{children:"hoverDate"})]}),e.jsx("td",{children:e.jsx("code",{children:"Date | null"})}),e.jsx("td",{children:e.jsx("code",{children:"null"})}),e.jsx("td",{children:"Selection + range endpoints"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"minDate"})," / ",e.jsx("code",{children:"maxDate"})]}),e.jsx("td",{children:e.jsx("code",{children:"Date | null"})}),e.jsx("td",{children:e.jsx("code",{children:"null"})}),e.jsx("td",{children:"Inclusive selectable bounds"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isKeyboardEnabled"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:"Enable keyboard navigation"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"onCellSelect"})," / ",e.jsx("code",{children:"onCellHover"})," / ",e.jsx("code",{children:"onViewModeChange"})," / ",e.jsx("code",{children:"onMonthChange"})," / ",e.jsx("code",{children:"onDismiss"})]}),e.jsx("td",{children:e.jsx("code",{children:"(payload) => void"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:"Event callbacks"})]})]})]}),`
`,e.jsx(d.h3,{id:"js-methods",children:"JS methods"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Returns"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArvoCalendar.initialize(element, options)"})}),e.jsxs("td",{children:[e.jsx("code",{children:"HTMLElement"}),", ",e.jsx("code",{children:"ArvoCalendarOptions"})]}),e.jsx("td",{children:e.jsx("code",{children:"ArvoCalendar"})}),e.jsx("td",{children:"Factory -- initializes calendar on a DOM element"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"focusCell(target)"})}),e.jsx("td",{children:e.jsx("code",{children:"Date | NormalizedMember"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Move roving focus to the matching cell"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"restoreFocus()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Restore focus to the last focused cell"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setViewMode(mode)"})}),e.jsx("td",{children:e.jsx("code",{children:"ViewMode"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Switch grid view"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"next()"})," / ",e.jsx("code",{children:"prev()"})," / ",e.jsx("code",{children:"today()"})]}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Period navigation"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"update(partial)"})}),e.jsx("td",{children:e.jsx("code",{children:"Partial<ArvoCalendarOptions>"})}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Bulk update options and re-render (JS only)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"destroy()"})}),e.jsx("td",{children:"--"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"Remove listeners and clean up"})]})]})]}),`
`,e.jsx(d.h3,{id:"js-custom-events",children:"JS custom events"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Payload"}),e.jsx("th",{children:"Cancelable"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"cal:select"})}),e.jsx("td",{children:e.jsx("code",{children:"{ date?: Date; member?: NormalizedMember; mode: string }"})}),e.jsx("td",{children:"No"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"cal:hover"})}),e.jsx("td",{children:e.jsx("code",{children:"{ date?: Date; member?: NormalizedMember }"})}),e.jsx("td",{children:"No"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"cal:viewmode-change"})}),e.jsx("td",{children:e.jsx("code",{children:"{ mode: string }"})}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"cal:month-change"})}),e.jsx("td",{children:e.jsx("code",{children:"{ year: number; month: number }"})}),e.jsx("td",{children:"No"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"cal:dismiss"})}),e.jsx("td",{children:e.jsx("code",{children:"{}"})}),e.jsx("td",{children:"No"})]})]})]})]})}function A(n={}){const{wrapper:d}={...c(),...n.components};return d?e.jsx(d,{...n,children:e.jsx(i,{...n})}):i(n)}export{A as default};
