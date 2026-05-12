/** Five production prompts + templates + nesting reference — see Prompts Library tab. */

export const NESTING_EXAMPLE = `Arvo Dashboard (Tier 3)
  ├─ Arvo Header (Tier 2)
  │   ├─ Arvo Text (Tier 1) — title
  │   └─ Arvo Button (Tier 1) — add user
  ├─ Arvo Sidebar (Tier 2)
  │   └─ 5 × Arvo Button (Tier 1) — nav items
  └─ Arvo Container (Tier 2) — main area
      ├─ Arvo Input (Tier 2) — search
      │   └─ Arvo Icon (Tier 1) — search icon
      └─ Arvo Table (Tier 2) — user list
          └─ 30 × Table Row
              ├─ Arvo Avatar (Tier 1)
              ├─ Arvo Text (Tier 1) — name + email
              ├─ Arvo Badge (Tier 1) — role
              └─ Arvo Button Group (Tier 2)
                  ├─ Arvo Button (Tier 1) — edit
                  └─ Arvo Button (Tier 1) — delete

Hand-built from scratch: 3,000+ tokens
Composed from Arvo: ~200 tokens · 93% savings`

export const KPI_PROMPT = `Use Arvo Design System components and follow theme.css tokens.

Create a demand planning dashboard KPI section with:

KPI Cards:
- Total Forecast: Value=2,850 units, Trend indicator=+12%
- Forecast Accuracy: Value=94.3%, Trend indicator=+2.1%
- Inventory Health: Value=78%, Progress bar 0-100%
- Fill Rate: Value=96.2%, Comparison value (prev=94.8%)

Arvo components per card:
- Arvo Card as container
- Arvo Text variant='heading' for value (36px)
- Arvo Text variant='caption' for label
- Arvo Badge for trend indicator (green/red based on +/-)
- Arvo Progress bar (if applicable)
- Arvo Icon (o9con-trending-up for positive, o9con-trending-down for negative)

Layout: Grid 4 columns (2 columns on tablet, 1 on mobile)
Spacing: --spacing-lg between cards, --spacing-md inside card
Colors:
  - Card background: --color-surface
  - Value text: --color-text-primary
  - Positive trend: --color-success
  - Negative trend: --color-error
Border radius: --radius-md on cards

Responsive: Full-width mobile layout, stack on small screens
Data: Mock numbers for each KPI`

export const USER_MGMT_PROMPT = `Use Arvo Design System components and follow theme.css tokens.

Create user management admin screen with three sections:

ACTION BAR:
- Arvo Container with flexbox justify-between
- Left: Arvo Text variant='heading' "User Management"
- Right: Arvo Button group
  - variant='primary' "Add User"
  - variant='secondary' "Save Changes"
  - variant='secondary' "Send Verification"

FILTERS ROW:
- Arvo Input with icon='search' placeholder="Search users..."
- Arvo Select: "Authorization Groups" options=[All, Admin, Editor, Viewer]
- Arvo Select: "Status" options=[All, Active, Inactive, Pending]

USERS TABLE:
- Arvo Table with columns:
  - Avatar: Arvo Avatar component
  - Name: Arvo Text
  - Email: Arvo Text
  - Groups: Array of Arvo Badge
  - Status: Arvo Badge (green=Active, gray=Inactive, yellow=Pending)
  - Actions: Arvo Button group (icon='edit', icon='trash', icon='check')

Table details:
- 30 rows mock user data
- Row hover: --color-hover background
- Column sorting via clickable headers
- Optional Arvo Checkbox in first column for row selection

MODALS:
- Delete confirmation: Arvo Modal with title "Confirm Delete",
  buttons "Cancel" + variant='error' "Delete"
- Success toast: Arvo Toast with auto-dismiss

STATES:
- Loading: Arvo Spinner centered in table
- Empty: Arvo Text "No users found" with placeholder illustration

Spacing: --spacing-xl page sections, --spacing-md rows, --spacing-sm in groups
Colors: Arvo tokens (--color-surface, --color-text-primary, --color-error)
Responsive: Full table desktop · compact tablet · stacked / horizontal scroll mobile
Icons: Arvo only (edit, trash, check, search)`

export const DATA_GRID_PROMPT = `Use Arvo Design System components and follow o9PageLayout.md guidelines.

Create enterprise user management workspace:

PAGE LAYOUT (follow o9PageLayout.md):
- Header: Arvo Header with title and Avatar dropdown user menu
- Sidebar: Arvo Sidebar with navigation icons (users, settings, etc.)
- Main: Arvo Container

DATA GRID (Arvo Table) columns:
- Name, Email, Role (Arvo Badge), Department, Status (Badge),
  Last Active (date), Actions (Arvo Button group: edit, delete)

Grid features:
- 50 rows mock data, sortable, multi-select via Arvo Checkbox in first column
- Compact row height using --spacing-sm
- Hover highlight using --color-surface-hover

ROW INTERACTION — SIDE PANEL:
On row click, open a 320px side panel (full-width on mobile) with sections:
- Profile (Avatar + name/title)
- Contact details (email, phone)
- Role and permissions (Badges)
- Department info
- Account activity (created, last login)
- Recent actions timeline
- Management controls: variant='primary' Edit, variant='secondary' Deactivate,
  variant='error' Delete

Spacing: --spacing-lg grid padding, --spacing-md column gap, --spacing-lg between panel sections
Colors: --color-background (grid), --color-surface (panel), --color-text-secondary (labels)
Responsive: side-by-side desktop · stacked tablet · overlay mobile`

export const ANALYTICS_PROMPT = `Use Arvo Design System components and follow o9PageLayout.md and Charts.md guidelines.

Create enterprise analytics dashboard "Employee Adoption Analytics":

PAGE LAYOUT (o9PageLayout.md): Header + 6-item Sidebar + Container.
DASHBOARD GRID: 2 columns (1 on mobile), --spacing-lg between tiles.

REPORT TILE 1 — Bubble chart "Department Engagement Analysis":
- X = engagement score, Y = user count, bubble size = total employees
- Color = engagement health (red/yellow/green)
- Departments: Sales, Engineering, Marketing, Support, HR

REPORT TILE 2 — Line chart "Monthly Adoption Trends":
- Lines: monthly active users + login frequency
- Compare current year vs previous; Arvo Button group "Line"/"Bar"

REPORT TILE 3 — Donut chart "User Distribution":
- Active 45 / Inactive 35 / Pending 20; total in center

REPORT TILE 4 — Horizontal bar chart "Department Performance":
- Adoption percentage per department, color by --color-success/warning/error

COMMON STYLING:
- Tile: Arvo Card, --radius-md, --spacing-lg padding, optional download Button
- Spacing: --spacing-lg between tiles, --spacing-md chart padding
- Colors: --color-surface tile bg, transparent chart bg, semantic palette per Charts.md
- Legend: bottom or right (per chart), Arvo Text variant='caption'
- Tooltip: --color-surface-overlay bg, --radius-sm

EXPORT/ACTIONS: Top-right of each tile — Arvo Button icon='download' (PNG/CSV).
DATA: realistic mock numbers and date ranges.`

export const GEO_PROMPT = `Use Arvo Design System components and follow o9PageLayout.md guidelines.

Create global shipment distribution dashboard:

PAGE LAYOUT (o9PageLayout.md): Header + 5-item Sidebar + Container.

TOP SUMMARY (4 Report Tiles):
1. Total Shipments 63,700 (+8%) icon=o9con-shipping
2. Active Shipments 28,400 (45%) icon=o9con-truck
3. Delayed Shipments 3,200 (5%) icon=o9con-alert-triangle (red)
4. Avg Delivery Time 4.2 days (-0.3) icon=o9con-clock

MAP VISUALIZATION (Arvo Card, full width, "Active Shipment Routes"):
Bubble markers (region: bubble size = volume, color = congestion):
- USA Los Angeles 12,400 / 42% orange
- China Shanghai 18,100 / 68% red
- India Mumbai 9,800 / 35% yellow
- Germany Hamburg 7,200 / 18% green
- Singapore 6,400 / 38% orange
- Brazil Rio 5,100 / 45% yellow
- UAE Dubai 4,700 / 22% green

Hover tooltip shows active / delayed / congestion / avg delay.
Color mapping: 0–25 green, 25–50 yellow, 50–75 orange, 75+ red.

CONTROL BAR (above map):
- Arvo Button group "View Mode": Map | List | Analytics
- Arvo Button group "Time Period": Today | Week | Month
- Filters button (region / status / congestion)
- Export button

DETAILS PANEL (tabs):
- Tab 1 Focus Regions: Arvo Table 7 rows with region, shipments, congestion, avg delay, status
- Tab 2 Top Routes: top 5 origin → destination
- Tab 3 Alerts: severity Badges, click to filter map

SPACING: summary 120px, map 400px desktop / responsive mobile, --spacing-md cards.
RESPONSIVE: summary + map + details desktop · stacked tablet · full-width interactive mobile.`

export const PROMPT_TEMPLATES = [
  {
    title: 'KPI / dashboard',
    code: `Use Arvo Design System and follow theme.css tokens.

Create [dashboard name] with:
- [N] Report Tiles with metrics:
  - [Metric 1]: [value], trend=[%], icon=[name]
  - [Metric 2]: [value], trend=[%], icon=[name]

Grid: [N] columns desktop, [N] tablet, [N] mobile
Spacing: --spacing-lg between tiles
Colors: Use Arvo tokens
Icons: [o9con-* or Arvo icon names]`,
  },
  {
    title: 'Data table',
    code: `Use Arvo Design System and follow o9PageLayout.md.

Create admin interface with:
- Header: Title + action buttons
- Filters: [Filter 1], [Filter 2]
- Table columns: [Column list]
- [N] rows mock data
- Row actions: Edit, Delete

Arvo components:
- Arvo Table for grid
- Arvo Button for actions
- Arvo Badge for status
- Arvo Modal for dialogs

Spacing: --spacing-lg sections, --spacing-md rows
Colors: Use Arvo tokens
Responsive: [mobile behavior]`,
  },
  {
    title: 'Analytics',
    code: `Use Arvo Design System and follow Charts.md guidelines.

Create analytics dashboard with:
- Summary metrics: [metric list]
- Charts: [Chart 1 — type], [Chart 2 — type], etc.
- Detailed data: [table or list]

Arvo components:
- Arvo Report Tile for metrics
- Arvo Chart for visualizations
- Arvo Table for details
- Arvo Legend for chart legends

Spacing: --spacing-lg between sections
Colors: Use Arvo tokens for chart colors
Responsive: [mobile behavior]`,
  },
]
