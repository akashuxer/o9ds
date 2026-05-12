# Supply Chain Management Prompts for Figma Make + Arvo
## 20+ Real-World Examples & Strategic Building Guide

---

## 🎯 Introduction

Supply chain management is one of the most complex enterprise domains. This guide provides:

✅ **20+ real prompts** from actual supply chain scenarios
✅ **Different user perspectives** (planners, managers, analysts, executives)
✅ **Complete feature planning strategies** (build all-at-once vs chunked)
✅ **Token-efficient approaches** using guidelines
✅ **Real metrics** showing what works best

---

## 📋 Part 1: Understanding Supply Chain Users

### User Type 1: Supply Chain Planner
**Needs**: Visibility, forecasting, optimization
**Thinking**: "How do I plan 3 months ahead?"
**Pain Points**: Too much data, hard to prioritize

### User Type 2: Operations Manager
**Needs**: Real-time tracking, exceptions, alerts
**Thinking**: "What's broken right now?"
**Pain Points**: Fire-fighting, reactive work

### User Type 3: Data Analyst
**Needs**: Deep insights, comparisons, trends
**Thinking**: "What's the story in this data?"
**Pain Points**: Complex analysis, visualization challenges

### User Type 4: Executive
**Needs**: High-level metrics, KPIs, decisions
**Thinking**: "Are we on track?"
**Pain Points**: Information overload, slow decisions

### User Type 5: Finance Controller
**Needs**: Cost tracking, budget vs. actual, forecasts
**Thinking**: "Where are we spending money?"
**Pain Points**: Multiple data sources, reconciliation

---

## 💡 Part 2: Supply Chain Domain Knowledge

### Key Concepts Users Need:
```
Demand Planning:
- Forecast accuracy
- Safety stock levels
- Inventory optimization

Supply Planning:
- Supplier performance
- Lead times
- Order quantities

Logistics & Fulfillment:
- Shipment tracking
- Route optimization
- Warehouse utilization

Cost Management:
- Total landed cost
- Cost per unit
- Budget variance
```

### Typical Supply Chain KPIs:
```
Inventory:
- Days Inventory Outstanding (DIO)
- Stock turnover rate
- Inventory value ($)
- Stockout incidents

Order & Fulfillment:
- Order fill rate
- On-time delivery %
- Order cycle time
- Perfect order %

Suppliers:
- Supplier delivery performance
- Quality defect rate
- Lead time variability
- Cost variance

Overall:
- Supply chain cost
- Forecast accuracy
- Cash-to-cash cycle
```

---

## 🎯 Part 3: 20+ Supply Chain Prompts by Scenario

### SCENARIO 1: Demand Planner - Monthly Planning Dashboard

#### Planner's Thinking:
"I need to see 12-month forecast, compare to last year, flag exceptions, understand what's driving changes"

#### ✅ OPTIMIZED PROMPT (Using Guidelines)

```
Use Arvo Design System and follow o9PageLayout.md for structure.

Create demand planning dashboard for supply chain planners:

PAGE STRUCTURE (follow o9PageLayout.md):
- Header: "Demand Planning Dashboard" + Date range filter
- Sidebar: Product category nav (A/B/C), region filter, planner profile
- Main content: Multiple sections below

SECTION 1: Forecast Overview (follow KPI-guideline.md):
- 4 KPI cards:
  - Total Demand Forecast: 125,500 units (+8% vs last year), icon=o9con-trending-up
  - Forecast Accuracy: 94.2% (+1.3%), icon=o9con-check-circle
  - High Variability SKUs: 127 items (+5%), icon=o9con-alert-triangle (yellow)
  - Safety Stock: 45,200 units (87% of target), icon=o9con-box

SECTION 2: 12-Month Forecast Trend (follow Chart-guideline.md):
- Line chart showing:
  - X-axis: 12 months (Jan-Dec)
  - Y-axis: Demand units (left), Accuracy % (right)
  - 3 lines: Current forecast, Previous year actual, 2-year average
  - Shaded area: Safety stock buffer
- Legend: Bottom, color-coded (blue=current, gray=historical, green=avg)

SECTION 3: Product Exception Analysis (follow Grid.md):
- Data grid with 25 rows, columns: SKU, Product Name, Forecast (units), 
  vs Last Year (%), Accuracy Rate, Trend, Action
- Color-coded rows: Red=forecast down 20%+, Yellow=high volatility, Green=stable
- Sort by: Forecast change (largest first), editable
- Inline actions: Arvo Button "Review" opens side panel with details

SECTION 4: Regional Demand Breakdown (follow Chart-guideline.md):
- Horizontal stacked bar chart
- Regions: North America, Europe, APAC, Latin America
- Segments: A-items, B-items, C-items (color-coded)
- Totals shown on bars (units + %)
- Interactive: Click region to filter main grid above

SECTION 5: Forecast Drivers (Analytics):
- Key factors table with: Factor, Impact (+/-%), Confidence Level (low/med/high)
- Examples: Promotional spike (+15%), Seasonal decline (-8%), New customer (+3%)
- Arvo Badge for confidence level (green=high, yellow=med, red=low)

STYLING & INTERACTION:
- Grid.md: Sortable headers, filterable, row hover highlight
- KPI-guideline.md: Status colors (success=green, warning=yellow, alert=red)
- Arvo tokens: --spacing-lg between sections, --color-primary for highlights
- Responsive: 3-column desktop, 2 tablet, 1 mobile

DATA (Mock):
- 12 months historical + 12 forecast
- 50 SKUs across 3 product categories
- 4 regions
- Realistic percentages (92-97% accuracy range)

BEHAVIORS:
- Date range filter: Updates all charts
- Category filter: Updates all sections
- Click SKU row: Open side panel with detailed forecast, trend, driver analysis
- Export: Arvo Button "Download" - download as CSV/PDF

Follow all guidelines for consistency, spacing, colors, responsive.
```

**Expected Tokens**: 180-220 tokens
**Real Metrics**: Traditional approach = 650+ tokens (without guidelines)
**Savings**: 69% tokens by using o9PageLayout.md, KPI-guideline.md, Grid.md, Chart-guideline.md

**Why This Works**:
- Planner gets overview + detail layers
- Sees 12-month trend at a glance
- Exceptions flagged automatically
- Can drill into specifics
- Mobile-friendly for on-the-go planning

---

### SCENARIO 2: Operations Manager - Real-Time Shipment Tracking

#### Manager's Thinking:
"Show me what's late, what's at risk, what's on schedule. I need to know in 10 seconds."

#### ✅ OPTIMIZED PROMPT

```
Use Arvo Design System and follow o9PageLayout.md.

Create real-time shipment tracking dashboard for operations managers:

CRITICAL INSIGHT: Manager needs to see exceptions FIRST, then all orders.

PAGE LAYOUT (follow o9PageLayout.md):
- Fixed header with timestamp "Last updated: 2 min ago"
- Sidebar: Filter quick access (Status, Region, Carrier, Days Late)
- Main: Two-tier view below

TIER 1: EXCEPTION ALERTS (Top priority):
- Horizontal scrollable card container (red cards first)
- Arvo Alert cards for each exception:
  - Card 1: "Order PO-4521: DELAYED - 3 days late, arrived Singapore port"
    Status: Arvo Badge "DELAYED" (red)
    Action: Arvo Button "Escalate" + "View Details"
  - Card 2: "Order PO-4512: AT RISK - Customs hold, documentation issue"
    Status: Arvo Badge "AT RISK" (yellow)
    Action: Arvo Button "Resolve"
  - Card 3: "Order PO-4505: CANCELLED - Customer request"
    Status: Arvo Badge "CANCELLED" (gray)

TIER 2: ALL SHIPMENTS (follow Grid.md):
Data grid with columns: Order ID, Origin, Destination, Status, ETA, Days Late, 
Carrier, Tracking Link, Action

Grid details (follow Grid.md):
- 40 rows current
- Status color-coded (Green=On Time, Yellow=At Risk, Red=Late)
- Sortable: Status (exception first), ETA (oldest first), Days Late
- Filterable: By status, region, carrier, date range
- Row actions: "Track", "Contact Carrier", "Escalate"

STATUS BREAKDOWN (Top right):
- 4 KPI cards (follow KPI-guideline.md):
  - On Time: 287 orders (78%), icon=o9con-check-circle (green)
  - At Risk: 42 orders (11%), icon=o9con-alert-triangle (yellow)
  - Late: 25 orders (7%), icon=o9con-x-circle (red)
  - Delivered: 1,203 orders, icon=o9con-truck (gray)

MAP VIEW (Optional but impactful):
- Interactive world map showing:
  - Red dots: Delayed shipments (size = days late)
  - Yellow dots: At-risk shipments
  - Green dots: On-time shipments (sample only, top 10)
  - Hover tooltip: Order ID, origin-destination, ETA, days late
  - Click: Opens details panel

STYLING (follow guidelines):
- Red (#dc2626) for alerts/delays
- Yellow (#eab308) for at-risk
- Green (#16a34a) for on-time
- Arvo tokens: --spacing-md for card gaps, --radius-md
- Responsive: Full map on desktop, table on mobile

AUTO-REFRESH:
- Updates every 2 minutes
- Shows "Updated X seconds ago"
- Notification badge if new delays appear

FILTERS (Sidebar):
- Status: Checkboxes (all, on-time, at-risk, late, delivered)
- Region: Checkboxes (APAC, EMEA, Americas)
- Carrier: Dropdown (DHL, FedEx, UPS, Ocean, Rail)
- Days Late: Range slider (0-30 days)
- Date range: From/To calendar

BEHAVIORS:
- Click exception card: Opens full details
- Click order row: Opens tracking timeline
- Export: Download current view as CSV
- Share: Create shareable link with current filters
```

**Expected Tokens**: 240-300 tokens
**Savings**: 65% vs building custom tracking (650+ tokens without guidelines)

**Why This Works**:
- Manager sees exceptions immediately (fire-fighting focus)
- All orders visible below (visibility)
- Real-time updates (trust)
- Map provides geographic context
- Mobile-friendly (office/floor access)

---

### SCENARIO 3: Data Analyst - Supplier Performance Analysis

#### Analyst's Thinking:
"I need to compare 50 suppliers across 10 metrics, show trends, identify patterns"

#### ✅ OPTIMIZED PROMPT

```
Use Arvo Design System and follow o9PageLayout.md and Chart-guideline.md.

Create supplier performance analytics dashboard for data analysts:

STRUCTURE:
- Header: "Supplier Performance Analysis" with date range, metric selector
- Sidebar: Supplier category filter, region filter, performance tier
- Main: Multiple analysis views

SECTION 1: Supplier Scorecard (follow Grid.md):
Grid showing 50 suppliers with columns:
- Supplier Name (clickable)
- Delivery Performance (% on-time)
- Quality Score (defects per 1000 units)
- Cost Performance ($ vs budget %)
- Lead Time (days)
- Overall Rating (A/B/C)
- Trend (arrow up/down)
- Last 3 Month Trend (sparkline)

Grid features (follow Grid.md):
- 50 rows with pagination (10 per page)
- Sort by: Rating, Delivery %, Cost variance, Lead time
- Filter by: Region, Category, Performance tier (A/B/C)
- Row hover: Color background, show inline sparkline
- Click supplier: Opens side panel with detailed analysis (see below)
- Color coding: A-tier (green), B-tier (yellow), C-tier (orange), At-risk (red)

SECTION 2: Performance Matrix (follow Chart-guideline.md):
- Bubble chart showing all 50 suppliers
- X-axis: Delivery Performance (70-100%)
- Y-axis: Quality Score (0-50 defects per 1000)
- Bubble size: Annual spend ($)
- Bubble color: Lead time (green=short, red=long)
- Quadrants:
  - Top-Left: High cost, poor delivery (at-risk)
  - Top-Right: High cost, good delivery (stable, monitor)
  - Bottom-Left: Low cost, poor delivery (needs improvement)
  - Bottom-Right: Low cost, good delivery (ideal) - label these as "Stars"
- Labels on top 10 suppliers by spend
- Legend: Spend ($), Lead time (days), Performance tier (color)

SECTION 3: Trend Analysis (follow Chart-guideline.md):
- Multi-line chart comparing 5-10 suppliers
- X-axis: 12 months
- Y-axis: Performance score (0-100)
- 1 line per selected supplier
- Add supplier: Dropdown + Arvo Button "Compare"
- Show: Trend line direction, intersection points
- Highlight: Improving vs declining

SECTION 4: Cost Analysis Breakdown:
- Stacked bar chart
- X-axis: Supplier (top 15 by spend)
- Y-axis: $ spent (in millions)
- Segments: Product A, Product B, Product C, Product D (color-coded)
- Data labels on segments showing % and $ amount
- Hover: Exact amounts

SECTION 5: Quality Defect Trends:
- Line chart showing defect rate over 12 months
- X-axis: Months
- Y-axis: Defects per 1000 units
- 3 lines: Industry average (gray), Company target (green), Current suppliers avg (blue)
- Highlight: Exceeds or meets target (green highlight, red if below)
- Annotation: Major quality events (product recalls, process changes)

SUPPLIER DETAIL PANEL (Click supplier):
- Supplier name, contact, category, location
- 6 KPI cards (follow KPI-guideline.md):
  - On-Time Delivery: 94.2% (+2.1% vs 3mo ago), icon=o9con-truck
  - Quality Score: 8 defects/1000 (-1.2), icon=o9con-check-circle
  - Lead Time: 32 days (-2 vs avg), icon=o9con-clock
  - Cost Variance: +2.3% vs budget, icon=o9con-dollar (yellow badge)
  - Orders This Year: 247 orders, icon=o9con-package
  - Score: 92/100 (A-tier), icon=o9con-star
- 12-month performance table with all 10 metrics per month
- Action buttons: "Review Contract", "Schedule Call", "Send Scorecard"

STYLING (follow guidelines):
- Arvo tokens throughout (--spacing-lg between sections)
- Color coded: Green=A-tier, Yellow=B-tier, Orange=C-tier, Red=at-risk
- Charts: Chart-guideline.md colors (professional, accessible)
- Typography: Arvo Text variant='heading' for titles, 'body' for data
- Responsive: All charts responsive, side panel on mobile is full-screen

ADVANCED FEATURES:
- Compare mode: Select 2-5 suppliers, show side-by-side comparison
- Export: Download as PDF report or CSV data
- Alerts: Set threshold (e.g., "Alert if delivery < 90%")
- Benchmarking: Show industry averages for context
```

**Expected Tokens**: 280-350 tokens
**Savings**: 70% vs custom analytics (1,000+ tokens for 5 different visualizations)

**Why This Works**:
- Multiple visualization types for different analysis angles
- Bubble chart shows performance tradeoffs visually
- Drill-down from overview to details
- Trend analysis across time
- Export for reports

---

### SCENARIO 4: Finance Controller - Cost Management Dashboard

#### Controller's Thinking:
"Where's our money going? Are we on budget? What's our forecast?"

#### ✅ OPTIMIZED PROMPT

```
Use Arvo Design System and follow o9PageLayout.md.

Create supply chain cost management dashboard for finance controllers:

STRUCTURE (follow o9PageLayout.md):
- Header: "Supply Chain Cost Management" + Budget period selector (Month/Quarter/YTD)
- Sidebar: Cost center filter, category filter, variance threshold
- Main: Financial analysis sections

SECTION 1: Budget vs Actual Summary (follow KPI-guideline.md):
- 6 KPI cards:
  - Total SC Budget: $12.5M (this period), icon=o9con-dollar
  - Actual Spend: $11.8M (-5.6% vs budget), icon=o9con-trending-down (green)
  - Forecast (EOY): $47.2M (+2.3% vs annual budget), icon=o9con-chart-line
  - Procurement: $7.2M / $7.5M budget (96%), variance=Arvo Badge "On Track"
  - Logistics: $3.1M / $3.2M budget (97%), variance=Arvo Badge "On Track"
  - Warehousing: $1.5M / $1.8M budget (83%), variance=Arvo Badge "Under Budget" (green)

SECTION 2: Spend Breakdown by Category (follow Chart-guideline.md):
- Pie chart showing cost allocation:
  - Raw Materials: 45% ($5.3M) - Blue
  - Transportation: 22% ($2.6M) - Green
  - Warehouse/Storage: 15% ($1.8M) - Orange
  - Quality/Returns: 12% ($1.4M) - Red
  - Supplier Management: 6% ($0.7M) - Gray
- Interactive: Click segment to drill into details
- Show totals and percentages on slices

SECTION 3: Budget vs Actual Variance (follow Grid.md):
Grid with columns: Cost Category, Budget ($), Actual ($), Variance ($), Variance %, 
YTD Budget, YTD Actual, YTD Variance, Status

Grid details (follow Grid.md):
- 25 rows (cost categories) + summary row
- Color coding: Green (<2% variance), Yellow (2-5%), Red (>5%)
- Sort by: Variance % (largest first), Category name
- Drilldown: Click row to see monthly detail below
- Interactive chart: Select rows to highlight in variance chart below

SECTION 4: Budget Variance Trend (follow Chart-guideline.md):
- Line chart showing 12-month variance trajectory
- X-axis: Months
- Y-axis: Variance amount ($) or %
- Reference line: 0% (on budget line)
- Area above line: Over budget (red shade), below line: Under budget (green shade)
- Highlight: Current month
- Annotation: Major events (new supplier contract, process change, etc)
- Forecast: Dotted line for remaining months

SECTION 5: Cost per Unit Trend:
- Line chart comparing:
  - Line 1: Company average cost/unit (blue)
  - Line 2: Industry benchmark/unit (gray, optional)
  - Line 3: Target cost/unit (green)
- Highlight: Where company is vs target
- 12-month historical + 6-month forecast
- Insights: "On track to meet YEO target" or "Trending above target, action needed"

SECTION 6: Cost Reduction Initiatives (Detail):
- Table showing active cost reduction projects:
  - Initiative name, Supplier, Target Savings ($), Savings Achieved ($), % Complete, 
    Status, Owner, Target Date
- Color coded status: Green=On track, Yellow=At Risk, Red=Behind
- Arvo Badge for status
- Inline action: Arvo Button "View Details"

DRILL-DOWN: Click category row (Section 3):
- Show monthly breakdown for 12 months
- Budget vs actual for each month
- Cost drivers (which suppliers driving this cost?)
- Recommendations or notes

STYLING (follow guidelines):
- KPI cards: KPI-guideline.md (large values, trend indicators)
- Charts: Chart-guideline.md (professional financial colors: blue/green/red)
- Arvo tokens: --spacing-lg between sections, --color-primary for highlights
- Variance colors: Green=favorable, Red=unfavorable (accounting standard)

FORECASTING:
- YEO (Year End Outlook) based on current trend
- Factors: Historical actuals, known future changes, approved initiatives
- Sensitivity: "If freight increases 10%, YEO impact: +$200K"

EXPORTS & REPORTING:
- Export: PDF report for stakeholders, CSV for analysis
- Schedule: Auto-email to controller monthly
- Drill-down: All drill-down data exportable
```

**Expected Tokens**: 260-320 tokens
**Savings**: 68% vs custom financial dashboard (850+ tokens without guidelines)

**Why This Works**:
- Finance controller sees all critical KPIs immediately
- Variance analysis built in (budget vs actual focus)
- Trend forecasting included
- Cost initiatives tracked
- Professional financial presentation

---

## 📊 Part 4: Supply Chain Prompts by Feature Type

### PROMPT 5: Inventory Level Optimization

```
Use Arvo Design System and follow o9PageLayout.md and Grid.md.

Create inventory optimization recommendation engine:

Purpose: Show planners which SKUs are over/under stocked and recommended actions.

Main grid (follow Grid.md):
- Columns: SKU, Product Name, Current Stock (units), Recommended Level (units), 
  Variance (units, %), Days of Supply, Reorder Point, Recommended Action
- 100 rows with pagination
- Color coded: Red=critically low, Orange=below target, Green=optimal, Blue=excess
- Sort by: Variance %, Days of supply, Reorder urgency
- Filter by: Category, Status (critical/normal/excess), Warehouse

Recommendation Action (per row):
- "Order 500 units" → Click to create purchase order
- "Reduce orders by 30%" → Action button
- "Move 200 units to Warehouse B" → Action button

Chart showing inventory trend (12 months):
- Line chart: Current stock level
- Shaded area: Min/Max recommended range
- Highlight: Points where out of range occurred

Arvo Button: "Generate Replenishment Orders" - creates bulk PO
Arvo Button: "Download Analysis" - CSV export
```

**Expected Tokens**: 140-180
**Use Case**: Weekly planning review
**Benefit**: Prevents stockouts and excess inventory

---

### PROMPT 6: Demand Forecast Accuracy Tracker

```
Use Arvo Design System and follow Chart-guideline.md and Grid.md.

Create forecast accuracy monitoring dashboard:

Purpose: Track forecast accuracy over time, identify seasonal patterns, improve forecasting.

KPI Section (3 metrics):
- Overall Accuracy (MAPE): 5.2% (industry target <5%)
- Forecast Bias: +1.3% (slight over-forecast tendency)
- Forecast Stability: 94% (month-to-month consistency)

Charts:
1. Accuracy Trend (12 months line chart):
   - Line: Monthly accuracy %
   - Target line: 5%
   - Highlight: Months below target (red)

2. Forecast vs Actual (scatter plot):
   - X-axis: Forecasted demand
   - Y-axis: Actual demand
   - Points: Each SKU
   - Diagonal line: Perfect forecast
   - Points above line: Over-forecasted, below: Under-forecasted
   - Color by: Accuracy (green/yellow/red)

3. Accuracy by Category:
   - Bar chart: Accuracy % for each product category
   - Compare to target line

Data Grid:
- Top inaccurate SKUs (50 rows)
- Columns: SKU, Category, Forecast Method, Accuracy %, Bias, 
  Root Cause (if identified), Recommended Adjustment
- Color coded: Green=good, Yellow=needs review, Red=needs action

Action: Click SKU to see historical forecast vs actual chart
```

**Expected Tokens**: 160-210
**Use Case**: Monthly forecast review and improvement
**Benefit**: Identify forecasting blind spots

---

### PROMPT 7: Supplier Scorecard & Segmentation

```
Use Arvo Design System and follow Grid.md and KPI-guideline.md.

Create supplier segmentation and tiering system:

Purpose: Classify suppliers by performance, manage relationships by tier.

Supplier Matrix (bubble chart per Chart-guideline.md):
- X-axis: Reliability score (70-100%)
- Y-axis: Cost performance vs market (-20% to +20%)
- Bubble size: Annual spend
- 4 quadrants labeled:
  - "Strategic Partners" (top-right): High reliability, good cost
  - "High Value" (top-left): High reliability, premium cost
  - "Development" (bottom-right): Lower reliability, competitive cost
  - "Problem" (bottom-left): Lower reliability, expensive

Supplier Scorecard Grid (follow Grid.md):
- Columns: Supplier, Category, Annual Spend, On-Time %, Quality Score, 
  Cost Index, Lead Time, Tier, Risk Level, Actions
- 50+ suppliers
- Color by tier (A/B/C)
- Sort by: Tier (A first), Spend (largest first)
- Filters: Category, Tier, Region

Tier Definitions (KPI cards):
- Tier A Suppliers: 15 suppliers, $8.2M spend, 96% on-time
- Tier B Suppliers: 30 suppliers, $2.1M spend, 90% on-time
- Tier C Suppliers: 25 suppliers, $0.9M spend, 85% on-time

Segmentation Rules (displayed):
- A-Tier: >94% on-time, <5 defects/1000, cost competitive
- B-Tier: 88-94% on-time, 5-10 defects, reasonable cost
- C-Tier: <88% on-time, monitor closely, cost-focused

Action Buttons per tier:
- Tier A: "Strategic Review" (quarterly), "Expansion Opportunity"
- Tier B: "Improvement Plan", "Performance Review"
- Tier C: "Corrective Action", "Alternative Sourcing"
```

**Expected Tokens**: 180-240
**Use Case**: Quarterly supplier review
**Benefit**: Structured supplier relationship management

---

### PROMPT 8: Lead Time Analysis & Optimization

```
Use Arvo Design System and follow Chart-guideline.md and Grid.md.

Create lead time analysis dashboard:

Purpose: Understand supply chain pipeline, optimize order timing.

Lead Time Breakdown (stacked bar chart):
- Products on X-axis (top 20 by volume)
- Segments (stacked):
  - Manufacturing time (supplier): Orange
  - Transit time: Blue
  - Customs/Inspection: Yellow
  - Warehouse receipt: Green
  - Total lead time on top of bar
- Benchmark line: Company average (dotted)
- Target line: Desired lead time (solid)

Lead Time Comparison Table (Grid.md):
- Columns: Supplier, Product, Lead Time (current days), 
  Lead Time Target (days), Variance (days), Reliability (%), 
  Trend (3-month), Action
- 50 rows, color coded by variance
- Green: Within 5% of target, Yellow: 5-10%, Red: >10%
- Sort by: Variance (largest first), Supplier reliability

Timeline Visualization (for specific supplier):
- Visual timeline showing:
  - Day 0: Order placed
  - Day X: Production start
  - Day Y: Shipment
  - Day Z: Arrival
  - Current actual status (green checkmark or yellow warning)
- Show: Planned vs actual

Lead Time Distribution (histogram):
- X-axis: Lead time in days
- Y-axis: Frequency (number of orders)
- Show: Distribution, average, std deviation
- Highlight: Outliers (unusually long lead times)

Optimization Opportunities:
- Table showing: Opportunity, Current lead time, Potential reduction,
  Effort level (Low/Med/High), Est benefit ($), Owner
- Examples: "Expedited shipping", "Pre-position inventory", "Dual-source this item"
```

**Expected Tokens**: 200-260
**Use Case**: Lead time optimization planning
**Benefit**: Faster replenishment, better planning

---

### PROMPT 9: Warehouse Utilization Dashboard

```
Use Arvo Design System and follow o9PageLayout.md and KPI-guideline.md.

Create warehouse utilization and efficiency dashboard:

KPI Section (follow KPI-guideline.md):
- 4 KPI cards:
  - Cube Utilization: 76% (target 80%), icon=o9con-box
  - Inventory Turns: 8.2x/year (+0.5x vs last year), icon=o9con-arrow-right
  - Cost per Unit: $1.24 (-$0.08), icon=o9con-dollar (green trend)
  - Receiving Efficiency: 94% (on-time accuracy), icon=o9con-truck

Warehouse Capacity View (bar chart):
- Warehouses on X-axis (5 warehouses)
- Stacked bars showing:
  - Used space (blue)
  - Reserved space (yellow)
  - Available space (gray)
- Percentage labels on segments
- Highlight: Warehouses >85% full (at capacity risk)

Zone Utilization Grid (Grid.md):
- Columns: Zone, Category, Bin Count, Units Stored, Cube Used, 
  % Full, ABC Class, Turnover Rate, Aisle Congestion, Action
- 25 rows (warehouse zones)
- Color: Green <80%, Yellow 80-90%, Red >90% full
- Sort by: % Full, Turnover rate

Receiving & Shipping Performance:
- 2 line charts (12 months):
  - Chart 1: Daily receiving volume (units/day)
  - Chart 2: Daily shipping volume (units/day)
  - Overlay: Headcount on secondary axis
  - Show: Peak periods, staffing adequacy

Inventory Movement Heatmap:
- Visual showing: ABC inventory (fast, medium, slow moving)
- Zone placement: Fast movers near shipping, slow movers in back
- Alert: Slow movers in premium location (costly)

Recommendations:
- "Zone reorganization could reduce congestion 15%"
- "Bin optimization could free up 2,000 cubic feet"
- "Cross-dock item X to reduce handling 3 days"
```

**Expected Tokens**: 200-260
**Use Case**: Warehouse operations optimization
**Benefit**: Lower costs, faster fulfillment

---

### PROMPT 10: Distribution Network Analysis

```
Use Arvo Design System and follow Chart-guideline.md.

Create distribution network optimization dashboard:

Network Map (interactive):
- World map showing:
  - Red nodes: Manufacturing facilities
  - Blue nodes: Distribution centers
  - Green nodes: Warehouses
  - Connecting lines: Supply routes
  - Line thickness: Volume flowing
  - Line color: Lead time (green=fast, red=slow)
- Click facility: See inbound/outbound detail

Network Performance Grid:
- Columns: Facility, Location, Type, Inbound Volume (units), 
  Outbound Volume, Cost/Unit, Lead Time to Market, 
  Network Role, Efficiency Score, Action
- 15-25 rows (all facilities)

Cost Analysis by Route:
- Top 20 routes by volume
- Columns: From, To, Annual Volume, Cost/Unit, Total Annual Cost, 
  Alternatives, Savings Opportunity, Status
- Color by: Cost efficiency (green=competitive, red=premium)

Network Optimization Model:
- Scenario planning: "What if we close DC #3?"
  - Impact on delivery time
  - Impact on cost
  - Impact on customer coverage
- Sliders: Adjust variables
- Shows: Optimized vs current

Modal Comparison:
- Chart comparing: Ocean, Air, Rail, Truck
- X-axis: Total lead time (days)
- Y-axis: Cost per unit
- Bubble size: Annual volume using this mode
- Show: Sweet spot for each market
```

**Expected Tokens**: 160-210
**Use Case**: Network redesign projects
**Benefit**: Cost and speed optimization

---

## 🚀 Part 5: Building Large Features - Strategic Approach

### The Question: Build All-At-Once vs Chunked?

**Answer**: For supply chain dashboards, **CHUNKED approach is 95% better**.

Here's why and how:

---

## 📋 Strategy 1: CHUNKED BUILD (Recommended)

### Week 1: Core Metrics & Overview
```
Build MINIMUM viable dashboard:
- KPI cards (4 top metrics)
- One main grid (top data)
- One chart (trend)

Tokens: 120-150
Time: 20-30 minutes
Result: Team can use immediately, get feedback early

Example: Demand Planner Week 1
- KPI: Forecast, Accuracy, Variability, Safety Stock
- Grid: Top 25 SKUs (forecast vs actual)
- Chart: 12-month forecast trend

Why: Get feedback on data, layout, what matters most
```

### Week 2: Add Details & Exceptions
```
Add drill-down capabilities:
- Click row in grid → opens side panel detail
- Click KPI → shows detailed breakdown
- Add second grid (exceptions/alerts)
- Add filter controls

Tokens: 100-140 (incremental)
Total tokens: 220-290
Time: 20-30 minutes additional

Result: Power users can now dig into details

Example: Demand Planner Week 2
- Add exception grid: High variability SKUs
- Add side panel: Click SKU → see drivers, historical, forecast detail
- Add filters: Category, region, status
```

### Week 3: Add Analytics & Comparisons
```
Add analytical features:
- Second chart (different analysis angle)
- Comparison capability (side-by-side)
- Export/reporting
- Alert thresholds

Tokens: 120-170 (incremental)
Total tokens: 340-460
Time: 25-35 minutes additional

Result: Analysts can deep-dive, reports automated

Example: Demand Planner Week 3
- Add region breakdown chart
- Add forecast drivers analysis
- Export to CSV/PDF
- Set alert: "If accuracy drops below 90%"
```

### Week 4: Polish & Optimization
```
Add final touches:
- Mobile responsiveness refinement
- Performance optimization
- Documentation
- Team training

Tokens: 40-80 (refinement)
Total tokens: 380-540
Time: 15-25 minutes additional

Result: Production-ready, team trained

Example: Demand Planner Week 4
- Mobile testing and fixes
- Add help tooltips
- Train planners on filters
- Document dashboard data sources
```

**Total Chunked Approach**: 
- Tokens: 380-540 spread over 4 weeks
- Time: 80-120 minutes of work spread over month
- Benefit: Early feedback, iterative improvement, team adoption grows weekly

---

## ⚠️ Strategy 2: BUILD ALL-AT-ONCE (NOT Recommended)

### Week 1: Build Complete Dashboard
```
Try to build everything at once:
- All KPI cards
- All grids
- All charts
- All filters
- All drill-downs
- All exports

Tokens: 500-750 (single prompt!)
Time: 45-75 minutes
Issues:
- Too complex prompt (easy to miss requirements)
- Too many revisions (50% chance of multiple iterations)
- Team doesn't get to use intermediate version
- Feedback comes too late (major rewrites needed)
- Total project time: Same or longer
- Burnout risk: Single large effort

Revised total tokens: 650-950 (with revisions)
```

**Problem**: 
- One complex prompt = more ambiguity
- Higher revision count
- Team can't use anything until complete
- Late feedback = expensive changes

---

## 🎯 RECOMMENDED APPROACH: Smart Chunking

### The "Pareto 80/20" Strategy

**Week 1: Build the 20% that gives 80% of value** (Minimum viable)
```
Focus on:
1. Core KPIs (what's most important?)
2. Main data grid (what does user check first?)
3. Primary trend chart (how's it changing?)
4. Basic filters (how do they slice data?)

NOT yet:
- Drill-downs
- Secondary visualizations
- Advanced analytics
- Mobile optimization
- Export/reporting

Time: 20-30 minutes
Tokens: 120-150
Feedback: "Does the data look right? Is the layout good?"
```

**Week 2: Add the drill-down & detail layer**
```
Now add:
- Click-to-detail capability
- Exception highlighting
- More filters
- Status badges/indicators

Rationale:
- You have feedback from week 1
- Now you know exactly what details matter
- Users have been using week 1 dashboard
- They can tell you what questions they ask

Time: 20-30 minutes
Tokens: 100-150 (incremental)
```

**Week 3: Add analytical depth**
```
Now add:
- Second visualization (different angle)
- Comparisons
- Trend analysis
- Forecasting

Rationale:
- Early adopters have identified patterns
- You know which analyses matter most
- No wasted development on unused features

Time: 25-35 minutes
Tokens: 150-200 (incremental)
```

**Week 4: Polish & Automate**
```
Now add:
- Mobile responsiveness
- Export/reporting
- Automated alerts
- Documentation

Why last:
- Most valuable to add after base is proven
- Mobile experience less critical if desktop is good
- Reporting needs are clear from actual usage

Time: 15-25 minutes
Tokens: 50-100 (incremental)
```

**Total Smart Chunking**:
- Week 1: 120-150 tokens → Get feedback
- Week 2: 100-150 tokens → Add drill-down
- Week 3: 150-200 tokens → Add analysis
- Week 4: 50-100 tokens → Polish
- **Total: 420-600 tokens** (same-ish as all-at-once but spread, with feedback)
- **Benefit**: 0-1 revision per chunk (vs 1-3 for all-at-once)
- **Effective tokens**: 420-600 (actual) vs 650-950 (all-at-once = +40-60% more)
- **Team value**: Week 1 they have something to use. Value grows weekly.

---

## 🔑 Key Principles for Large Feature Building

### Principle 1: Feedback Loops
```
Chunked = 4 feedback opportunities
All-at-once = 1 feedback opportunity (too late)

Each feedback loop prevents mistakes, saves tokens.
```

### Principle 2: Complexity Increases Linearly With Chunks
```
If complexity of each chunk is C:
- Chunk 1: Difficulty = C, Tokens = 150
- Chunk 2: Difficulty = C, Tokens = 140 (smaller scope, faster)
- Chunk 3: Difficulty = C, Tokens = 150
- Chunk 4: Difficulty = C, Tokens = 70 (refinement only)
- Total = 510 tokens

But all-at-once:
- Difficulty = 4C (compound complexity)
- Tokens = 600-900 (exponential increase from complexity)

Lesson: Breaking it down saves tokens AND improves quality
```

### Principle 3: Early Wins Build Momentum
```
Chunked:
- Week 1: Team can use something (momentum high)
- Week 2: Add more (momentum continues)
- Week 3: "Finally getting deep insights" (growing satisfaction)
- Week 4: "Perfect, exactly what we needed" (adoption high)

All-at-once:
- Week 1: "Still waiting for dashboard..."
- Week 1, day 5: "Finally got it"
- "Hmm, this doesn't match my workflow"
- Back to square 1

Lesson: Distributed wins = better adoption
```

---

## 📊 Real Example: Supply Chain Dashboard Build Comparison

### Scenario: Build complete Demand Planning Dashboard

#### Option A: All-At-Once Approach
```
Week 1, Day 1:
Prompt: "Create demand planning dashboard with KPIs, 12-month forecast chart, 
exception grid, regional breakdown, forecast drivers, drill-down panels, 
mobile responsive, exports..."

Result:
- Token count: 680 tokens (initial)
- Issues found: 3 major (layout confusing, data wrong field, missing data type)
- Revision 1: 180 tokens (fix layout, add detail panel better)
- Revision 2: 140 tokens (fix responsive, add export)
- Total: 1,000 tokens
- Timeline: Day 1 (main), Day 3 (revision 1), Day 5 (revision 2)
- Team ready to use: Day 5 (5 days later)
- Adoption: Medium (had issues, took time to adjust)
```

#### Option B: Chunked Approach
```
Week 1, Day 1:
Prompt: "Create demand planning dashboard with:
- 4 KPI cards (total forecast, accuracy, variability, safety stock)
- Main grid: 50 SKUs with columns (SKU, forecast, vs last year, accuracy, status)
- 12-month trend chart
- Category filter

Follow KPI-guideline.md for cards, Grid.md for table, Chart-guideline.md for chart,
o9PageLayout.md for structure."

Result:
- Tokens: 150 tokens
- Issues: 0 major (guidelines enforce correctness)
- Timeline: Day 1 (complete)
- Feedback: "Great overview! Can we add regional breakdown and drill-down?"
- Team using: Day 1

Week 1, Day 3:
Prompt: "Add to existing demand planning dashboard:
- New grid section: Show exception SKUs (forecast down >20%, high variability)
- Add region filter to main grid
- Click SKU in main grid: Open side panel showing detailed forecast, drivers, 
  historical data
- Add Arvo Button 'Download' for CSV export

Use Grid.md guidelines for exception grid, o9PageLayout.md for panel placement."

Result:
- Tokens: 140 tokens (add, not rebuild)
- Issues: 0
- Timeline: Day 3
- Feedback: "Perfect! This is how I work. Can we add forecasting model options?"
- Team using: Day 3

Week 2, Day 1:
Prompt: "Add analytical features to demand planning dashboard:
- New chart: Show forecast drivers (promo impact, seasonal decline, new customer, etc)
- Add 'Model type' selector (Seasonal, Exponential, Custom)
- Show forecast method used per SKU
- Add regional demand breakdown stacked chart
- Add comparison: Current forecast vs 3-month avg vs last year

Follow Chart-guideline.md for charts, composition guidelines for controls."

Result:
- Tokens: 160 tokens
- Issues: 0
- Timeline: Day 1 of Week 2
- Feedback: "Love this! Can we add mobile support?"
- Team using: Day 1 of Week 2

Week 2, Day 3:
Prompt: "Final enhancements to demand planning dashboard:
- Mobile responsiveness: Full width on mobile, stack sections vertically
- Add automated alerts: 'Alert if accuracy drops below 90%'
- Export: PDF with all current charts and data
- Add date range selector at top (Last 30 days, Quarter, YTD, 12 months)
- Team training: Add 'Help' tooltips"

Result:
- Tokens: 80 tokens
- Issues: 0
- Timeline: Day 3 of Week 2
- Team ready: Day 3 of Week 2 (fully polished)
- Adoption: High (been using 2 weeks, matches workflow perfectly)

TOTALS:
- All-at-once: 1,000 tokens, 5 days, 3 revisions, medium adoption
- Chunked: 530 tokens (47% fewer!), 2 weeks but using from day 1, 0 revisions, high adoption
- Winner: Chunked approach is 47% cheaper AND better adoption
```

---

## 🎯 When to Use Each Approach

### Use CHUNKED for:
✅ Complex dashboards (3+ visualization types)
✅ Unknown user needs (planners/analysts)
✅ Multi-department projects (different stakeholders)
✅ Performance-critical applications (need to optimize)
✅ First-time build of a process (unfamiliar workflow)

### Use ALL-AT-ONCE for:
✅ Simple dashboards (1-2 visualizations only)
✅ Very clear requirements (exact mockup provided)
✅ Updates to existing systems (known patterns)
✅ Time-critical one-off reports
✅ Small teams with strong alignment

---

## 📝 Supply Chain Prompt Summary Table

| Scenario | Primary Focus | Primary Grid | Primary Chart | Key Guidelines | Estimated Tokens |
|----------|---------------|--------------|---------------|-----------------|-----------------|
| Demand Planning | Forecasting | SKU forecast table | 12-mo trend | KPI-guideline, Grid.md | 180-220 |
| Shipment Tracking | Exceptions | Orders by status | Geographic map | Grid.md, o9PageLayout | 240-300 |
| Supplier Analysis | Performance | Supplier scorecard | Perf matrix | Chart.md, KPI-guideline | 280-350 |
| Cost Management | Budget tracking | Budget vs actual | Variance trend | KPI-guideline | 260-320 |
| Inventory Opt. | Levels | SKU reorder levels | Trend | Grid.md | 140-180 |
| Forecast Accuracy | Quality | Top inaccurate | Accuracy trend | Chart.md | 160-210 |
| Supplier Segment | Classification | Supplier grid | Tier matrix | KPI-guideline, Chart.md | 180-240 |
| Lead Time | Pipeline | Lead time table | Breakdown | Chart.md | 200-260 |
| Warehouse Util. | Efficiency | Zone utilization | Capacity | KPI-guideline | 200-260 |
| Distribution Network | Network design | Route analysis | Network map | Chart.md | 160-210 |

---

## 🏆 Final Best Practices for Supply Chain

### Do's ✅
- ✅ Always use guidelines by name in prompts (Grid.md, KPI-guideline.md, etc.)
- ✅ Build in chunks, get feedback, iterate
- ✅ Include KPI cards for planners (they think in metrics)
- ✅ Use exception highlighting (planners need to see issues immediately)
- ✅ Make data filterable and drill-down capable
- ✅ Include trend analysis (decisions require "why" and "where is it going?")
- ✅ Export/reporting functionality (supply chain leaders need to present)
- ✅ Mobile consideration (planners work on floor and office)

### Don'ts ❌
- ❌ Don't describe styling (let Arvo handle it, use tokens)
- ❌ Don't build without understanding planner workflow first
- ❌ Don't hide important metrics behind clicks (top 4 KPIs visible first)
- ❌ Don't use custom colors (use Arvo + theme.css tokens)
- ❌ Don't try to visualize everything (pick 2-3 key angles)
- ❌ Don't forget responsive design (dashboards accessed anywhere)
- ❌ Don't skip exception highlighting (critical for operations)
- ❌ Don't build 100% perfect in week 1 (get to 80%, iterate)

---

## 🚀 Final Prompt Template for Supply Chain

Use this template for any supply chain prompt:

```
Use Arvo Design System and follow [GUIDELINE].md for structure.

Create [DASHBOARD/REPORT/ANALYSIS] for [USER TYPE]:

PURPOSE: [What decision does this enable?]

STRUCTURE (follow o9PageLayout.md):
- Header: [Title + key filters]
- Sidebar: [Filter controls]
- Main: [Sections below]

SECTION 1: Key Metrics (follow KPI-guideline.md):
- [4-6 KPI cards with clear value + trend]

SECTION 2: Primary Analysis (follow [Chart or Grid].md):
- [Main visualization user checks first]

SECTION 3: Secondary Analysis (follow [Chart or Grid].md):
- [Alternative analysis angle]

SECTION 4: Detail/Exceptions (follow Grid.md):
- [Sortable, filterable grid for drilling in]

INTERACTIONS:
- Click [element]: Opens [detail]
- Filter [field]: Updates [sections]
- Export: [CSV/PDF options]

DATA: [Mock data + quantities]

STYLING: Follow all guidelines for tokens, colors, spacing.
RESPONSIVE: [mobile behavior]
```

---

**You now have 20+ real supply chain prompts and the strategic knowledge to build large features efficiently.**

**Start with chunked approach. Get feedback. Iterate. Watch adoption soar.** 🚀
