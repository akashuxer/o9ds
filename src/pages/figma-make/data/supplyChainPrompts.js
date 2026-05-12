/** Supply-chain persona prompts — see Prompts Library tab. */

export const DEMAND_PLANNER_PROMPT = `Use Arvo Design System and follow o9PageLayout.md for structure.

Create demand planning dashboard for supply chain planners:

PAGE STRUCTURE (follow o9PageLayout.md):
- Header: "Demand Planning Dashboard" + Date range filter
- Sidebar: Product category nav (A/B/C), region filter, planner profile
- Main content: Multiple sections below

SECTION 1: Forecast Overview (follow KPI-guideline.md):
- 4 KPI cards:
  - Total Demand Forecast: 125,500 units (+8% vs last year)
  - Forecast Accuracy: 94.2% (+1.3%)
  - High Variability SKUs: 127 items (+5%)
  - Safety Stock: 45,200 units (87% of target)

SECTION 2: 12-Month Forecast Trend (Chart-guideline.md):
- Line chart, 3 lines: current forecast, prior year actual, 2-yr average
- Shaded area: safety stock buffer; legend bottom, color coded

SECTION 3: Product Exception Analysis (Grid.md):
- 25 rows · columns: SKU, Product, Forecast, vs LY %, Accuracy, Trend, Action
- Color rows by exception type; sortable; Review button opens side panel

SECTION 4: Regional Demand Breakdown (Chart-guideline.md):
- Horizontal stacked bars per region (NA, EMEA, APAC, LATAM)
- Segments by ABC class; click region to filter the grid above

SECTION 5: Forecast Drivers:
- Factor table with impact ± and Arvo Badge confidence (high/med/low)

STYLING & INTERACTION:
- Sortable / filterable grid · row hover · KPI guideline status colors
- Arvo tokens: --spacing-lg between sections, --color-primary highlights
- Responsive: 3-col desktop, 2 tablet, 1 mobile

DATA: 12 months historical + 12 forecast · 50 SKUs · 4 regions · 92–97% accuracy.

BEHAVIORS:
- Date / category filters update all sections
- Click SKU row: side panel with detailed forecast, drivers, history
- Export Arvo Button: CSV / PDF download`

export const OPS_MANAGER_PROMPT = `Use Arvo Design System and follow o9PageLayout.md.

Create real-time shipment tracking dashboard for operations managers.

CRITICAL: Manager must see exceptions FIRST, then all orders.

TIER 1 — EXCEPTION ALERTS:
- Horizontal scrollable Arvo Alert cards (red first):
  - "PO-4521 DELAYED — 3 days late, arrived Singapore port"
  - "PO-4512 AT RISK — Customs hold, documentation issue"
  - "PO-4505 CANCELLED — Customer request"
- Each card: Arvo Badge status + Arvo Buttons "Escalate" / "Resolve" / "View Details"

TIER 2 — ALL SHIPMENTS (Grid.md):
- 40 rows · columns: Order ID, Origin, Destination, Status, ETA, Days Late, Carrier, Tracking, Action
- Color-coded status, sortable (status / ETA / days late), filterable, row actions
- Auto-refresh every 2 minutes with "Updated X seconds ago"

STATUS BREAKDOWN (KPI-guideline.md, top-right):
- 4 cards: On Time / At Risk / Late / Delivered

MAP VIEW (optional but impactful):
- World map with red / yellow / green dots sized by lateness
- Hover tooltip with order detail; click opens side panel

FILTERS (sidebar):
- Status checkboxes · region · carrier dropdown · days-late slider · date range

BEHAVIORS:
- Click exception card or order row → details / timeline
- Export current view as CSV
- Share filter state via URL`

export const SUPPLY_CHAIN_ANALYST_PROMPT = `Use Arvo Design System and follow o9PageLayout.md and Chart-guideline.md.

Create supplier performance analytics dashboard for data analysts.

STRUCTURE:
- Header: title + date range + metric selector
- Sidebar: category / region / performance tier filters
- Main: stacked sections

SECTION 1 — Supplier scorecard (Grid.md):
- 50 rows with delivery %, quality (defects/1k), cost vs budget %, lead time, rating, trend, sparkline
- Pagination 10 per page; sortable; filter by tier / region / category
- Click row → side panel with deep detail

SECTION 2 — Performance matrix (bubble chart):
- X delivery % · Y defects · bubble size = annual spend · color = lead time
- Quadrants labelled "Strategic Partners" / "High Value" / "Development" / "Problem"
- Top 10 by spend labelled

SECTION 3 — Trend analysis (multi-line chart):
- Compare 5–10 selected suppliers across 12 months
- Add supplier via dropdown + Arvo Button "Compare"

SECTION 4 — Cost analysis stacked bar:
- Top 15 suppliers by spend · segments per product line

SECTION 5 — Quality defect trends:
- 12-month line chart vs industry average (gray) and target (green)

SUPPLIER DETAIL PANEL:
- Profile, contact, category, location
- 6 KPI cards (KPI-guideline.md): on-time, quality, lead time, cost, orders, score
- 12-month performance table; actions: review contract / schedule call / send scorecard

STYLING & ADVANCED:
- Arvo tokens · tier color coding · responsive (panels go full-screen on mobile)
- Compare 2–5 suppliers side-by-side · PDF / CSV export · alert thresholds`

export const FINANCE_PROMPT = `Use Arvo Design System and follow o9PageLayout.md.

Create supply chain cost management dashboard for finance controllers.

STRUCTURE: header (period selector) · sidebar (cost center / category / variance threshold) · main.

SECTION 1 — Budget vs actual summary (KPI-guideline.md):
- 6 KPI cards: total budget, actual spend, EOY forecast, procurement, logistics, warehousing
- Show variance Badge per card ("On Track" / "Under Budget")

SECTION 2 — Spend breakdown by category (pie chart):
- Raw materials 45% · transportation 22% · warehousing 15% · quality/returns 12% · supplier mgmt 6%
- Click slice → drill into details

SECTION 3 — Budget vs actual variance (Grid.md):
- 25 cost categories + summary row
- Color: green <2% · yellow 2–5% · red >5% variance
- Drilldown to monthly detail; selected rows highlight in chart below

SECTION 4 — Variance trend (line chart):
- 12 months · zero baseline · area shading above/below for over/under
- Forecast as dotted line; annotations on major events

SECTION 5 — Cost per unit:
- Company avg / industry benchmark / target lines
- 12-month historical + 6-month forecast + insight summary

SECTION 6 — Cost reduction initiatives (table):
- Initiative, supplier, target savings, achieved $, % complete, status, owner, target date
- Status Badge color-coded; Arvo Button "View Details"

DRILL-DOWN: row click reveals 12-month breakdown, drivers, recommendations.

STYLING: KPI guideline · Chart guideline (financial palette) · variance colors green favorable / red unfavorable.
EXPORTS: PDF stakeholder report, CSV, scheduled monthly auto-email.`

export const QUICK_PROMPTS = [
  {
    title: 'Inventory level optimization',
    useCase: 'Show planners which SKUs are over/under stocked and recommend actions.',
    tokens: '~140–180',
    prompt: `Use Arvo Design System and follow o9PageLayout.md and Grid.md.

Create inventory optimization recommendation engine:
- Grid (Grid.md): 100 rows with SKU, current stock, recommended level, variance, days of supply, reorder point, recommended action
- Color: red critically low · orange below target · green optimal · blue excess
- Sort by variance · filter by category / status / warehouse
- Per-row action buttons: "Order 500 units" · "Reduce orders 30%" · "Move 200 units to Warehouse B"
- 12-month trend chart with min/max recommended range
- Buttons: "Generate Replenishment Orders" (bulk PO) · "Download Analysis" (CSV)`,
  },
  {
    title: 'Demand forecast accuracy',
    useCase: 'Track forecast accuracy over time, identify patterns, improve forecasting.',
    tokens: '~160–210',
    prompt: `Use Arvo Design System and follow Chart-guideline.md and Grid.md.

Create forecast accuracy monitoring dashboard:
- KPIs: MAPE 5.2% (target <5%) · forecast bias +1.3% · stability 94%
- 12-month accuracy line chart with target and below-target highlights
- Forecast vs actual scatter plot with diagonal reference; color by accuracy
- Accuracy by category bar chart vs target
- 50-row inaccurate SKU grid with method, accuracy %, bias, root cause, recommended adjustment
- Click SKU → historical forecast vs actual chart`,
  },
  {
    title: 'Supplier scorecard & segmentation',
    useCase: 'Classify suppliers by performance and manage relationships by tier.',
    tokens: '~180–240',
    prompt: `Use Arvo Design System and follow Grid.md and KPI-guideline.md.

Create supplier segmentation system:
- Bubble chart (Chart-guideline.md): X reliability % · Y cost vs market · size = annual spend · 4 quadrants ("Strategic Partners" / "High Value" / "Development" / "Problem")
- Scorecard grid (Grid.md): 50+ suppliers with category, spend, on-time %, quality, cost index, lead time, tier, risk, actions
- Tier KPI cards: A · B · C with counts and aggregates
- Per-tier action buttons: Strategic Review / Improvement Plan / Corrective Action`,
  },
  {
    title: 'Lead time analysis',
    useCase: 'Understand the supply pipeline and optimize order timing.',
    tokens: '~200–260',
    prompt: `Use Arvo Design System and follow Chart-guideline.md and Grid.md.

Create lead time analysis dashboard:
- Stacked bar (top 20 products): manufacturing / transit / customs / receipt segments + total bar label
- Lead time table: 50 rows with current days, target, variance, reliability %, 3-mo trend, action
- Timeline visualization for selected supplier (planned vs actual)
- Histogram of lead time distribution with avg, std dev, outliers
- Optimization opportunities table with effort, est benefit, owner`,
  },
  {
    title: 'Warehouse utilization',
    useCase: 'Optimize space, throughput, and staffing across warehouses.',
    tokens: '~200–260',
    prompt: `Use Arvo Design System and follow o9PageLayout.md and KPI-guideline.md.

Create warehouse utilization dashboard:
- 4 KPI cards: cube utilization · inventory turns · cost per unit · receiving efficiency
- Capacity bar chart for 5 warehouses (used / reserved / available)
- Zone grid (Grid.md, 25 rows): zone, category, bin count, units, cube used, % full, ABC class, turnover, congestion, action
- Receiving + shipping line charts with headcount overlay
- ABC inventory heatmap and recommendations`,
  },
  {
    title: 'Distribution network',
    useCase: 'Visualize and optimize the distribution network end-to-end.',
    tokens: '~160–210',
    prompt: `Use Arvo Design System and follow Chart-guideline.md.

Create distribution network optimization dashboard:
- Interactive world map: red manufacturing · blue DC · green warehouse · supply lines (thickness = volume, color = lead time)
- Network performance grid: facility, location, type, inbound, outbound, cost/unit, lead time to market, role, efficiency, action
- Cost by route table (top 20) with alternatives and savings opportunity
- Scenario planner: "Close DC #3?" with delivery / cost / coverage impact via sliders
- Modal comparison chart: ocean / air / rail / truck (lead time vs cost, bubble = volume)`,
  },
]

export const SC_SUMMARY = [
  ['Demand planning', 'Forecasting', 'SKU forecast table', '12-mo trend', 'KPI-guideline · Grid', '180–220'],
  ['Shipment tracking', 'Exceptions', 'Orders by status', 'Geographic map', 'Grid · o9PageLayout', '240–300'],
  ['Supplier analysis', 'Performance', 'Supplier scorecard', 'Performance matrix', 'Chart · KPI-guideline', '280–350'],
  ['Cost management', 'Budget tracking', 'Budget vs actual', 'Variance trend', 'KPI-guideline', '260–320'],
  ['Inventory optimization', 'Levels', 'SKU reorder levels', 'Trend', 'Grid', '140–180'],
  ['Forecast accuracy', 'Quality', 'Top inaccurate', 'Accuracy trend', 'Chart', '160–210'],
  ['Supplier segmentation', 'Classification', 'Supplier grid', 'Tier matrix', 'KPI-guideline · Chart', '180–240'],
  ['Lead time', 'Pipeline', 'Lead time table', 'Breakdown', 'Chart', '200–260'],
  ['Warehouse utilization', 'Efficiency', 'Zone utilization', 'Capacity', 'KPI-guideline', '200–260'],
  ['Distribution network', 'Network', 'Route analysis', 'Network map', 'Chart', '160–210'],
]

export const UNIVERSAL_TEMPLATE = `Use Arvo Design System and follow [GUIDELINE].md for structure.

Create [DASHBOARD/REPORT/ANALYSIS] for [USER TYPE]:

PURPOSE: [What decision does this enable?]

STRUCTURE (follow o9PageLayout.md):
- Header: [Title + key filters]
- Sidebar: [Filter controls]
- Main: [Sections below]

SECTION 1 — Key metrics (KPI-guideline.md):
- [4–6 KPI cards with clear value + trend]

SECTION 2 — Primary analysis ([Chart or Grid].md):
- [Main visualization the user checks first]

SECTION 3 — Secondary analysis ([Chart or Grid].md):
- [Alternative analysis angle]

SECTION 4 — Detail / exceptions (Grid.md):
- [Sortable, filterable grid for drill-in]

INTERACTIONS:
- Click [element]: opens [detail]
- Filter [field]: updates [sections]
- Export: [CSV / PDF options]

DATA: [Mock data + quantities]
STYLING: Follow guidelines for tokens, colors, spacing.
RESPONSIVE: [mobile behavior]`
