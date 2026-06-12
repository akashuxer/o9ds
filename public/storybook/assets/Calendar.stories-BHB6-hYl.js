import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n,h as Ne}from"./iframe-BaOp0t6F.js";import{A as v}from"./Calendar-kkFVIcSH.js";import{A as W}from"./IconButton-BgwDUYzG.js";const Le={title:"Advanced/Composition Primitives/Calendar",component:v,tags:["!dev","stable","internal"],argTypes:{viewMode:{control:{type:"select"},options:["days","months","quarters","years","members"],description:"Active grid view mode",table:{defaultValue:{summary:"days"}}},weekStart:{control:{type:"select"},options:[0,1,2,3,4,5,6],description:"0=Sun..6=Sat. Drives column rotation in days view.",table:{defaultValue:{summary:"0"}}},hasWeeks:{control:{type:"boolean"},description:"Show weeks column (days view) and widen non-day cells to 80x80",table:{defaultValue:{summary:"false"}}},hasOutsideDays:{control:{type:"boolean"},description:"Render adjacent-month days in the day grid and the leading / trailing year in the years grid. Defaults to false so the calendar shows only the active period.",table:{defaultValue:{summary:"false"}}},isKeyboardEnabled:{control:{type:"boolean"},description:"Enable keyboard navigation",table:{defaultValue:{summary:"true"}}},size:{control:{type:"select"},options:["sm","md","lg"],description:"Reserved for future scale support",table:{defaultValue:{summary:"md"}}},visibleYear:{control:{type:"number"},description:"Currently displayed year"},visibleMonth:{control:{type:"number",min:0,max:11},description:"Currently displayed month (0..11)"},onCellSelect:{description:"Cell selected (click or Enter/Space)",table:{category:"Events"}},onCellHover:{description:"Cell hover (range mode preview)",table:{category:"Events"}},onViewModeChange:{description:"Requested view-mode change (Alt+Down/Up)",table:{category:"Events"}},onMonthChange:{description:"Visible month/year changed (Page Up/Down nav)",table:{category:"Events"}},onDismiss:{description:"Escape pressed",table:{category:"Events"}}},args:{visibleYear:2026,visibleMonth:0,viewMode:"days",weekStart:0,hasWeeks:!1,hasOutsideDays:!1,isKeyboardEnabled:!0,size:"md"},parameters:{docs:{description:{component:"INTERNAL composition primitive. `ArvoCalendar` is the rendering engine\r\nconsumed by ArvoDatePicker / ArvoDateRangePicker / ArvoDateTimePicker.\r\nApplication code MUST NOT initialize it directly. Stories live under\r\n`Advanced/Composition Primitives` and carry the `internal` tag; they are\r\ndocs-only (`!dev`) and render on the attached `Calendar.mdx` page."}}}},p={args:{visibleYear:2026,visibleMonth:0}},M={args:{visibleYear:2026,visibleMonth:0,viewMode:"days"}},y={args:{visibleYear:2026,visibleMonth:0,viewMode:"months"}},S={args:{visibleYear:2026,visibleMonth:0,viewMode:"quarters"}},C={args:{visibleYear:2026,visibleMonth:0,viewMode:"years"}},Oe=Array.from({length:6},(m,a)=>{const t=new Date(2026,0,5+a*7),r=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0"),s=`${t.getFullYear()}/${r}/${o} 00:00:00`,l=`W${String(a+1).padStart(2,"0")}`;return{key:s,name:l,displayName:l,index:a}}),ze=Ne(Oe,{frequency:"week"}),w={args:{visibleYear:2026,visibleMonth:0,viewMode:"members",frequency:"week",memberIndex:ze,currentMemberIndex:1}},Y={args:{visibleYear:2026,visibleMonth:0,weekStart:1}},x={args:{visibleYear:2026,visibleMonth:0,hasWeeks:!0}},D={args:{visibleYear:2026,visibleMonth:0,hasOutsideDays:!1}},f={args:{visibleYear:2026,visibleMonth:0,rangeStart:new Date(2026,0,10),rangeEnd:new Date(2026,0,18),isRangeComplete:!0}},k={args:{visibleYear:2026,visibleMonth:0,rangeStart:new Date(2026,0,10),hoverDate:new Date(2026,0,15)}},V={args:{visibleYear:2026,visibleMonth:0,minDate:new Date(2026,0,5),maxDate:new Date(2026,0,25)}},j={args:{visibleYear:2026,visibleMonth:0},decorators:[m=>e.jsx("div",{className:"is-disabled",style:{display:"inline-block"},children:e.jsx(m,{})})]},R={args:{visibleYear:2026,visibleMonth:0},render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:24},children:[e.jsx(v,{visibleYear:2026,visibleMonth:0,viewMode:"days"}),e.jsx(v,{visibleYear:2026,visibleMonth:0,viewMode:"months"}),e.jsx(v,{visibleYear:2026,visibleMonth:0,viewMode:"quarters"}),e.jsx(v,{visibleYear:2026,visibleMonth:0,viewMode:"years"})]})},A={args:{visibleYear:2026,visibleMonth:0},render:function(){const[a,t]=n.useState("days"),[r,o]=n.useState(2026),[s,l]=n.useState(0),[d,u]=n.useState(null),i=n.useCallback(c=>{c.date&&u(c.date)},[]),h=n.useCallback(c=>{t(c.mode)},[]),g=n.useCallback(c=>{o(c.year),l(c.month)},[]);return e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:8},children:[e.jsx("strong",{children:"View:"})," ",a," | ",e.jsx("strong",{children:"Period:"})," ",s+1,"/",r," |"," ",e.jsx("strong",{children:"Selected:"})," ",d?d.toLocaleDateString():"none"]}),e.jsx(v,{visibleYear:r,visibleMonth:s,viewMode:a,selectedDate:d,onCellSelect:i,onViewModeChange:h,onMonthChange:g})]})}},I={args:{visibleYear:2026,visibleMonth:0},render:function(){const[a,t]=n.useState(2026),[r,o]=n.useState(0),[s,l]=n.useState(null),[d,u]=n.useState(null),[i,h]=n.useState(null),g=s!=null&&d!=null,c=n.useCallback(b=>{b.date&&(!s||g?(l(b.date),u(null),h(null)):(u(b.date),h(null)))},[s,g]),He=n.useCallback(b=>{h(b.date??null)},[]),qe=n.useCallback(b=>{t(b.year),o(b.month)},[]);return e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:8},children:[e.jsx("strong",{children:"Start:"})," ",s?s.toLocaleDateString():"-"," | ",e.jsx("strong",{children:"End:"})," ",d?d.toLocaleDateString():"-"]}),e.jsx(v,{visibleYear:a,visibleMonth:r,rangeStart:s,rangeEnd:d,hoverDate:i,isRangeComplete:g,onCellSelect:c,onCellHover:He,onMonthChange:qe})]})}},_e=Array.from({length:6},(m,a)=>{const t=new Date(2026,0,5+a*7),r=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0"),s=`${t.getFullYear()}/${r}/${o} 00:00:00`,l=`W${String(a+1).padStart(2,"0")}`;return{key:s,name:l,displayName:l,index:a}}),$e=Ne(_e,{frequency:"week"}),E={args:{visibleYear:2026,visibleMonth:0},render:function(){const[a,t]=n.useState(2),r=n.useCallback(o=>{o.member!=null&&t(o.member.index)},[]);return e.jsx(v,{visibleYear:2026,visibleMonth:0,viewMode:"members",frequency:"week",memberIndex:$e,currentMemberIndex:a,onCellSelect:r})}},P={args:{visibleYear:2026,visibleMonth:0},render:function(){const[a,t]=n.useState(2026),[r,o]=n.useState(0),s=new Date(a,r,1).toLocaleString("en-US",{month:"long",year:"numeric"}),l=n.useCallback(()=>{const i=new Date(a,r-1,1);t(i.getFullYear()),o(i.getMonth())},[a,r]),d=n.useCallback(()=>{const i=new Date(a,r+1,1);t(i.getFullYear()),o(i.getMonth())},[a,r]),u=n.useCallback(i=>{t(i.year),o(i.month)},[]);return e.jsxs("div",{style:{display:"inline-flex",flexDirection:"column"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 0"},children:[e.jsx(W,{icon:"chevron-left",size:"sm",variant:"tertiary",tooltip:"Previous month","aria-label":"Previous month",onClick:l}),e.jsx("span",{children:s}),e.jsx(W,{icon:"chevron-right",size:"sm",variant:"tertiary",tooltip:"Next month","aria-label":"Next month",onClick:d})]}),e.jsx(v,{visibleYear:a,visibleMonth:r,onMonthChange:u})]})}};var N,H,q;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    visibleYear: 2026,
    visibleMonth: 0
  }
}`,...(q=(H=p.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var L,O,z;M.parameters={...M.parameters,docs:{...(L=M.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    visibleYear: 2026,
    visibleMonth: 0,
    viewMode: 'days'
  }
}`,...(z=(O=M.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var _,$,B;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    visibleYear: 2026,
    visibleMonth: 0,
    viewMode: 'months'
  }
}`,...(B=($=y.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var F,T,U;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    visibleYear: 2026,
    visibleMonth: 0,
    viewMode: 'quarters'
  }
}`,...(U=(T=S.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};var K,Q,G;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    visibleYear: 2026,
    visibleMonth: 0,
    viewMode: 'years'
  }
}`,...(G=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:G.source}}};var J,X,Z;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    visibleYear: 2026,
    visibleMonth: 0,
    viewMode: 'members',
    frequency: 'week',
    memberIndex: weeklyMemberIndex,
    currentMemberIndex: 1
  }
}`,...(Z=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ne,ae;Y.parameters={...Y.parameters,docs:{...(ee=Y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    visibleYear: 2026,
    visibleMonth: 0,
    weekStart: 1
  }
}`,...(ae=(ne=Y.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var te,re,se;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    visibleYear: 2026,
    visibleMonth: 0,
    hasWeeks: true
  }
}`,...(se=(re=x.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var oe,ie,le;D.parameters={...D.parameters,docs:{...(oe=D.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    visibleYear: 2026,
    visibleMonth: 0,
    hasOutsideDays: false
  }
}`,...(le=(ie=D.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var de,ce,ve;f.parameters={...f.parameters,docs:{...(de=f.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    visibleYear: 2026,
    visibleMonth: 0,
    rangeStart: new Date(2026, 0, 10),
    rangeEnd: new Date(2026, 0, 18),
    isRangeComplete: true
  }
}`,...(ve=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:ve.source}}};var be,me,ue;k.parameters={...k.parameters,docs:{...(be=k.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    visibleYear: 2026,
    visibleMonth: 0,
    rangeStart: new Date(2026, 0, 10),
    hoverDate: new Date(2026, 0, 15)
  }
}`,...(ue=(me=k.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var he,ge,pe;V.parameters={...V.parameters,docs:{...(he=V.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    visibleYear: 2026,
    visibleMonth: 0,
    minDate: new Date(2026, 0, 5),
    maxDate: new Date(2026, 0, 25)
  }
}`,...(pe=(ge=V.parameters)==null?void 0:ge.docs)==null?void 0:pe.source}}};var Me,ye,Se;j.parameters={...j.parameters,docs:{...(Me=j.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    visibleYear: 2026,
    visibleMonth: 0
  },
  decorators: [Story => <div className="is-disabled" style={{
    display: 'inline-block'
  }}>\r
        <Story />\r
      </div>]
}`,...(Se=(ye=j.parameters)==null?void 0:ye.docs)==null?void 0:Se.source}}};var Ce,we,Ye;R.parameters={...R.parameters,docs:{...(Ce=R.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    visibleYear: 2026,
    visibleMonth: 0
  },
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 24
  }}>\r
      <ArvoCalendar visibleYear={2026} visibleMonth={0} viewMode="days" />\r
      <ArvoCalendar visibleYear={2026} visibleMonth={0} viewMode="months" />\r
      <ArvoCalendar visibleYear={2026} visibleMonth={0} viewMode="quarters" />\r
      <ArvoCalendar visibleYear={2026} visibleMonth={0} viewMode="years" />\r
    </div>
}`,...(Ye=(we=R.parameters)==null?void 0:we.docs)==null?void 0:Ye.source}}};var xe,De,fe;A.parameters={...A.parameters,docs:{...(xe=A.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    visibleYear: 2026,
    visibleMonth: 0
  },
  render: function InteractiveCalendar() {
    const [viewMode, setViewMode] = useState<ArvoCalendarViewMode>('days');
    const [visibleYear, setVisibleYear] = useState(2026);
    const [visibleMonth, setVisibleMonth] = useState(0);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const handleCellSelect = useCallback((payload: {
      date?: Date;
      mode: string;
    }) => {
      if (payload.date) setSelectedDate(payload.date);
    }, []);
    const handleViewModeChange = useCallback((payload: {
      mode: ArvoCalendarViewMode;
    }) => {
      setViewMode(payload.mode);
    }, []);
    const handleMonthChange = useCallback((payload: {
      year: number;
      month: number;
    }) => {
      setVisibleYear(payload.year);
      setVisibleMonth(payload.month);
    }, []);
    return <div>\r
        <div style={{
        marginBottom: 8
      }}>\r
          <strong>View:</strong> {viewMode} | <strong>Period:</strong> {visibleMonth + 1}/{visibleYear} |{' '}\r
          <strong>Selected:</strong> {selectedDate ? selectedDate.toLocaleDateString() : 'none'}\r
        </div>\r
        <ArvoCalendar visibleYear={visibleYear} visibleMonth={visibleMonth} viewMode={viewMode} selectedDate={selectedDate} onCellSelect={handleCellSelect} onViewModeChange={handleViewModeChange} onMonthChange={handleMonthChange} />\r
      </div>;
  }
}`,...(fe=(De=A.parameters)==null?void 0:De.docs)==null?void 0:fe.source}}};var ke,Ve,je;I.parameters={...I.parameters,docs:{...(ke=I.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    visibleYear: 2026,
    visibleMonth: 0
  },
  render: function RangeSelectionCalendar() {
    const [visibleYear, setVisibleYear] = useState(2026);
    const [visibleMonth, setVisibleMonth] = useState(0);
    const [rangeStart, setRangeStart] = useState<Date | null>(null);
    const [rangeEnd, setRangeEnd] = useState<Date | null>(null);
    const [hoverDate, setHoverDate] = useState<Date | null>(null);
    const isRangeComplete = rangeStart != null && rangeEnd != null;
    const handleCellSelect = useCallback((payload: {
      date?: Date;
    }) => {
      if (!payload.date) return;
      if (!rangeStart || isRangeComplete) {
        setRangeStart(payload.date);
        setRangeEnd(null);
        setHoverDate(null);
      } else {
        setRangeEnd(payload.date);
        setHoverDate(null);
      }
    }, [rangeStart, isRangeComplete]);
    const handleCellHover = useCallback((payload: {
      date?: Date;
    }) => {
      setHoverDate(payload.date ?? null);
    }, []);
    const handleMonthChange = useCallback((payload: {
      year: number;
      month: number;
    }) => {
      setVisibleYear(payload.year);
      setVisibleMonth(payload.month);
    }, []);
    return <div>\r
        <div style={{
        marginBottom: 8
      }}>\r
          <strong>Start:</strong> {rangeStart ? rangeStart.toLocaleDateString() : '-'} | <strong>End:</strong>{' '}\r
          {rangeEnd ? rangeEnd.toLocaleDateString() : '-'}\r
        </div>\r
        <ArvoCalendar visibleYear={visibleYear} visibleMonth={visibleMonth} rangeStart={rangeStart} rangeEnd={rangeEnd} hoverDate={hoverDate} isRangeComplete={isRangeComplete} onCellSelect={handleCellSelect} onCellHover={handleCellHover} onMonthChange={handleMonthChange} />\r
      </div>;
  }
}`,...(je=(Ve=I.parameters)==null?void 0:Ve.docs)==null?void 0:je.source}}};var Re,Ae,Ie;E.parameters={...E.parameters,docs:{...(Re=E.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    visibleYear: 2026,
    visibleMonth: 0
  },
  render: function MemberViewCalendar() {
    const [currentIdx, setCurrentIdx] = useState(2);
    const handleCellSelect = useCallback((payload: {
      member?: {
        index: number;
      };
    }) => {
      if (payload.member != null) setCurrentIdx(payload.member.index);
    }, []);
    return <ArvoCalendar visibleYear={2026} visibleMonth={0} viewMode="members" frequency="week" memberIndex={demoMemberIndex} currentMemberIndex={currentIdx} onCellSelect={handleCellSelect} />;
  }
}`,...(Ie=(Ae=E.parameters)==null?void 0:Ae.docs)==null?void 0:Ie.source}}};var Ee,Pe,We;P.parameters={...P.parameters,docs:{...(Ee=P.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    visibleYear: 2026,
    visibleMonth: 0
  },
  render: function WithNavCalendar() {
    const [visibleYear, setVisibleYear] = useState(2026);
    const [visibleMonth, setVisibleMonth] = useState(0);
    const monthLabel = new Date(visibleYear, visibleMonth, 1).toLocaleString('en-US', {
      month: 'long',
      year: 'numeric'
    });
    const handlePrev = useCallback(() => {
      const d = new Date(visibleYear, visibleMonth - 1, 1);
      setVisibleYear(d.getFullYear());
      setVisibleMonth(d.getMonth());
    }, [visibleYear, visibleMonth]);
    const handleNext = useCallback(() => {
      const d = new Date(visibleYear, visibleMonth + 1, 1);
      setVisibleYear(d.getFullYear());
      setVisibleMonth(d.getMonth());
    }, [visibleYear, visibleMonth]);
    const handleMonthChange = useCallback((payload: {
      year: number;
      month: number;
    }) => {
      setVisibleYear(payload.year);
      setVisibleMonth(payload.month);
    }, []);
    return <div style={{
      display: 'inline-flex',
      flexDirection: 'column'
    }}>\r
        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '4px 0'
      }}>\r
          <ArvoIconButton icon="chevron-left" size="sm" variant="tertiary" tooltip="Previous month" aria-label="Previous month" onClick={handlePrev} />\r
          <span>{monthLabel}</span>\r
          <ArvoIconButton icon="chevron-right" size="sm" variant="tertiary" tooltip="Next month" aria-label="Next month" onClick={handleNext} />\r
        </div>\r
        <ArvoCalendar visibleYear={visibleYear} visibleMonth={visibleMonth} onMonthChange={handleMonthChange} />\r
      </div>;
  }
}`,...(We=(Pe=P.parameters)==null?void 0:Pe.docs)==null?void 0:We.source}}};const Be=["Playground","Days","Months","Quarters","Years","Members","WeekStartMonday","ShowWeeks","HideOutsideDays","RangeMode","RangePreview","WithMinMax","DisabledRoot","AllViewModes","Interactive","RangeSelection","MemberView","WithCalendarNavSibling"],Qe=Object.freeze(Object.defineProperty({__proto__:null,AllViewModes:R,Days:M,DisabledRoot:j,HideOutsideDays:D,Interactive:A,MemberView:E,Members:w,Months:y,Playground:p,Quarters:S,RangeMode:f,RangePreview:k,RangeSelection:I,ShowWeeks:x,WeekStartMonday:Y,WithCalendarNavSibling:P,WithMinMax:V,Years:C,__namedExportsOrder:Be,default:Le},Symbol.toStringTag,{value:"Module"}));export{R as A,Qe as C,A as I,E as M,p as P,I as R,P as W};
