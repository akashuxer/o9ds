/** Additional copy-paste prompts — Prompts Library tab (pl-additional). */

export const USER_MGMT_COMPACT_GRID_PROMPT = `Generate a User Management workspace by creating a compact enterprise data grid with the following columns:
Name, Email, Role, Department, Status, Last Active, Actions.

Use status badges such as: Active, Inactive, Pending.

Add inline row actions for edit and delete using Arvo icon buttons.

Use Arvo Design System guidelines, components, typography, spacing, icons, assets, and tokens consistently throughout the experience. Follow the o9PageLayout.md guidelines for overall page structure, layout behavior, spacing, navigation, report tile alignment, and workspace composition.`

export const USER_MGMT_GRID_SIDE_PANEL_PROMPT = `Generate a User Management workspace by creating a compact enterprise data grid with the following columns:
Name, Email, Role, Department, Status, Last Active, Actions.

Use status badges such as: Active, Inactive, Pending.

Add inline row actions for edit and delete using Arvo icon buttons.

Clicking on a row should open a contextual side panel or drawer showing detailed user information.

The drawer should include:
- User profile information
- Contact details
- Role and permissions
- Department information
- Account activity
- Status history
- Recent actions and logs
- Edit actions and management controls

Use Arvo Design System guidelines, components, typography, spacing, icons, assets, and tokens consistently throughout the experience. Follow the o9PageLayout.md guidelines for overall page structure, layout behavior, spacing, navigation, report tile alignment, and workspace composition.`

export const EMPLOYEE_ADOPTION_ANALYTICS_DASHBOARD_PROMPT = `Create an enterprise analytics dashboard with multiple report tiles, where each report tile contains a different chart type for analyzing employee system adoption and engagement trends.

Bubble chart shows:
- Department-wise engagement vs user count vs churn rate
- Bubble size represents total employees
- Bubble color represents engagement health score

Line and bar chart shows:
- Monthly active user trends
- Login frequency over time
- User growth vs churn comparison
- Historical engagement analysis

Donut chart shows:
- Active vs inactive vs pending users
- Role-based user distribution
- Department contribution breakdown

Horizontal bar chart shows:
- Top inactive departments
- Most active teams
- Department-wise adoption comparison
- Users requiring action or intervention

Use Arvo Design System guidelines, tokens, spacing, typography, and color palettes consistently throughout the experience. Follow Charts.md and o9PageLayout.md guidelines for report tile structure, chart behavior, spacing, legends, responsiveness, accessibility, and enterprise density patterns.`

export const GLOBAL_SHIPMENT_MAP_BUBBLES_PROMPT = `Show global shipment distribution on a world map using maps or geo map bubble markers.

Data pointers:
- Bubble size = shipment volume
- Bubble color intensity = congestion level

Tooltip should include:
- Active shipments
- Delayed shipments
- Inventory in transit
- Port congestion %
- Average delivery delay

Focus regions (examples):
- USA → 12.4K shipments
- China → 18.1K shipments
- India → 9.8K shipments
- Germany → 7.2K shipments
- Singapore → 6.4K shipments
- Brazil → 5.1K shipments
- UAE → 4.7K shipments

Use Arvo containers, typography tokens, spacing tokens, color tokens, report tile patterns, and Chart guidelines throughout the experience.`

export const DEMAND_PLANNING_KPI_VARIETY_PROMPT = `Create 3 different KPI cards for a demand planning dashboard:
Total Forecast · Forecast Accuracy · Inventory Health · Fill Rate · Demand Variance

Use different KPI styles like:
- Trend indicators
- Badges
- Progress indicators
- Comparison values
- Positive and negative states
- Mini line chart trend
- Comparison indicator

Each KPI should look visually different and showcase a unique enterprise KPI pattern.

Use only Arvo Design System components, tokens, assets, and guidelines and KPI-guideline.md. No Tailwind, no hardcoded colors, and no random raw values.`

export const SINGLE_VIEW_SC_OPS_WORKSPACE_PROMPT = `Generate a single-view supply chain operations workspace for planners and operations teams using Arvo components and the design system.

The experience should include:
- KPI cards at the top for operational metrics such as inventory health, fulfillment status, supplier performance, transportation delays, and forecast accuracy
- Clicking a KPI should open a contextual side panel with detailed analysis, trends, contributing factors, alerts, and recommendations
- A central grid or table for operational records, shipments, inventory movements, or supply-demand analysis
- One Gantt chart for planning, scheduling, execution timelines, dependencies, and operational tracking
- Filters, search, sorting, and quick actions for operational workflows

The experience should help users:
- Monitor operational health
- Identify bottlenecks and delays
- Track execution timelines
- Compare planned vs actual performance
- Investigate issues through detailed contextual panels
- Manage large operational datasets efficiently

Do not create multiple tabs or separate views. Keep everything within a single integrated workspace.

Use Arvo Design System guidelines, components, typography, spacing, icons, assets, and tokens consistently throughout the experience.`

export const SUPPLY_CHAIN_ANALYTICS_MONITORING_PROMPT = `Generate a supply chain analytics experience for planners and operations teams to monitor inventory health, demand fluctuations, fulfillment performance, supplier efficiency, transportation movement, and regional operational risks.

The experience should help users:
- Quickly understand overall supply chain health
- Identify delays, shortages, bottlenecks, and disruptions
- Compare forecast vs actual performance
- Monitor warehouse and transportation efficiency
- Analyze regional demand and supply imbalances
- Track operational KPIs and trends over time
- Identify high-risk areas requiring immediate attention
- Drill into detailed operational insights and contributing factors

Include a combination of:
- KPI summaries
- Trend analysis
- Operational comparisons
- Utilization and performance monitoring
- Contribution and distribution insights
- Regional or network-level visibility

The interface should feel:
- Enterprise-grade
- Operationally focused
- Data-dense but readable
- Analytical and actionable
- Scalable for large datasets
- Responsive and accessibility-friendly

Use Arvo Design System guidelines, components, assets, and tokens throughout the experience.`
