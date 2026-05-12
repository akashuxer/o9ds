import CodeBlock from '../../LayoutComponents/CodeBlock'
import DocSection, { DocParagraph } from '../../LayoutComponents/DocSection'
import O9conExternalLinkIcon from './O9conExternalLinkIcon'

function PromptFigmaMakeLink({ href, ariaLabel }) {
  return (
    <DocParagraph className="mt-6">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className="inline-flex items-center gap-2 font-medium text-arvo-light-primary hover:opacity-90 dark:text-white"
      >
        <span className="underline underline-offset-2">View</span>
        <O9conExternalLinkIcon />
      </a>
    </DocParagraph>
  )
}

const USER_MANAGEMENT_WORKSPACE_PROMPT = `Generate a User Management workspace by creating a compact enterprise data grid with the following columns:

Name Email Role Department Status Last Active Actions

Use status badges such as:

Active Inactive Pending

Add inline row actions for edit and delete using Arvo icon buttons.

Clicking on a row should open a contextual side panel/drawer showing detailed user information. The drawer should include:

User profile information Contact details Role and permissions Department information Account activity Status history Recent actions/logs Edit actions and management controls

Use Arvo Design System guidelines, components, typography, spacing, icons, assets, and tokens consistently throughout the experience. Follow the o9PageLayout.md guidelines for overall page structure, layout behavior, spacing, navigation, report tile alignment, and workspace composition.`

const USER_MANAGEMENT_FIGMA_MAKE_URL =
  'https://www.figma.com/make/ZC11AkxJimjwhBjLRcajiW/Create-User-Management-Workspace?code-node-id=0-9&p=f&t=JhnrwbOk4S3kFKxU-0'

const USER_MANAGEMENT_COMPACT_GRID_PROMPT = `Generate a User Management workspace by creating a compact enterprise data grid with the following columns:

Name Email Role Department Status Last Active Actions

Use status badges such as:

Active Inactive Pending

Add inline row actions for edit and delete using Arvo icon buttons.

Use Arvo Design System guidelines, components, typography, spacing, icons, assets, and tokens consistently throughout the experience. Follow the o9PageLayout.md guidelines for overall page structure, layout behavior, spacing, navigation, report tile alignment, and workspace composition.`

const USER_MANAGEMENT_COMPACT_GRID_FIGMA_MAKE_URL =
  'https://www.figma.com/make/2lW6MhBfypVm8iaB9AAFu8/Create-User-Management-Workspace?code-node-id=0-9&p=f&t=iQRLBtDMlVJ1xYae-0'

const USER_MANAGEMENT_ADMIN_SCREEN_PROMPT = `Create user management admin screen using Arvo components and design system:

Action Bar:

Arvo Container with flex justify-between
Left: Arvo Text variant='heading' "User Management"
Right: Arvo Button group - variant='primary' "Add User", variant='secondary' "Save Changes" + "Send Verification"
Filters Row:

Arvo Input with icon='search' placeholder="Search users"
Arvo Select for "Authorization Groups" (All, Admin, Editor, Viewer)
Arvo Select for "Status" (All, Active, Inactive, Pending)
Users Table:

Arvo Card as container
Columns: Avatar (Arvo Avatar), Name (Arvo Text), Email (Arvo Text), Groups (Arvo Badge array), Status (Arvo Badge), Actions
30 rows mock user data
Row hover: bg-[--color-primary-light]
Actions per row: Arvo Button icon='edit', icon='trash', icon='check' (verify)
Modals:

Delete: Arvo alert dialog with title="Confirm Delete", Arvo Text warning, Arvo Button 'Cancel' + 'Delete' (variant='error')
Toast: Use Arvo Toast for success messages ("User verified", "Changes saved")
States:

Loading: Arvo Spinner in table center
Empty: Arvo Text "No users found" with illustration
Spacing: follow spacing arvo guide`

const USER_MANAGEMENT_ADMIN_SCREEN_FIGMA_MAKE_URL =
  'https://www.figma.com/make/QC4K9w7f1Ho8NOT4taEHUP/User-Management-Admin-Screen?code-node-id=0-9&p=f&t=oN0aaF0sctaGZ2XK-0'

const ENTERPRISE_ANALYTICS_DASHBOARD_PROMPT = `Create an enterprise analytics dashboard with multiple report tiles, where each report tile contains a different chart type for analyzing employee system adoption and engagement trends.

Bubble Chart shows:

Department-wise engagement vs user count vs churn rate
Bubble size represents total employees
Bubble color represents engagement health score
Line/Bar Chart shows:

Monthly active user trends
Login frequency over time
User growth vs churn comparison
Historical engagement analysis
Donut Chart shows:

Active vs inactive vs pending users
Role-based user distribution
Department contribution breakdown
Horizontal Bar Chart shows:

Top inactive departments
Most active teams
Department-wise adoption comparison
Users requiring action/intervention
Use Arvo Design System guidelines, tokens, spacing, typography, and color palettes consistently throughout the experience. Follow chart.md and o9PageLayout.md guidelines for report tile structure, chart behavior, spacing, legends, responsiveness, accessibility, and enterprise density patterns.`

const ENTERPRISE_ANALYTICS_FIGMA_MAKE_URL =
  'https://www.figma.com/make/ZK27ZOpMHQslERc4ooRd3R/Enterprise-Analytics-Dashboard?code-node-id=1-8&p=f&t=2TEJh2SOTULlnLtL-0'

const SINGLE_VIEW_SUPPLY_CHAIN_OPS_PROMPT = `Generate a single-view supply chain operations workspace for planners and operations teams using Arvo components and design system:

The experience should include:

KPI cards at the top for operational metrics such as inventory health, fulfillment status, supplier performance, transportation delays, and forecast accuracy. Clicking a KPI should open a contextual side panel with detailed analysis, trends, contributing factors, alerts, and recommendations.

A central grid/table for operational records, shipments, inventory movements, or supply-demand analysis.

Gantt chart for planning, scheduling, execution timelines, dependencies, and operational tracking.

Filters, search, sorting, and quick actions for operational workflows.

The experience should help users:
monitor operational health
identify bottlenecks and delays
track execution timelines
compare planned vs actual performance
investigate issues through detailed contextual panels
manage large operational datasets efficiently

Do not create multiple tabs or separate views. Keep everything within a single integrated workspace.

Use Arvo Design System guidelines, charts.md, grid.md, components, typography, spacing, icons, assets, and tokens consistently throughout the experience.`

const SINGLE_VIEW_SUPPLY_CHAIN_FIGMA_MAKE_URL =
  'https://www.figma.com/make/YroCaucv4HKxretSdAQTdo/Single-View-Supply-Chain-Workspace?code-node-id=0-9&p=f&t=E8QsJ9RgpKh5rvHa-0'

export const promptsLibrarySections = [
  { id: 'pl-intro', label: 'Prompts Library' },
  { id: 'pl-user-management-workspace', label: 'User Management workspace' },
  { id: 'pl-user-management-compact-grid', label: 'User Management workspace (compact grid)' },
  { id: 'pl-user-management-admin-screen', label: 'User Management admin screen' },
  { id: 'pl-enterprise-analytics-dashboard', label: 'Enterprise analytics dashboard' },
  { id: 'pl-single-view-supply-chain-ops', label: 'Single-view supply chain workspace' },
]

export default function PromptsLibraryTab() {
  return (
    <div className="space-y-12">
      <DocSection id="pl-intro">
        <DocParagraph>
          Every copy-paste example prompt from this guide lives here in one place. The other tabs explain concepts,
          patterns, and workflows; open this tab when you are ready to grab text for Figma Make.
        </DocParagraph>
      </DocSection>

      <DocSection id="pl-user-management-workspace" title="User Management workspace">
        <CodeBlock code={USER_MANAGEMENT_WORKSPACE_PROMPT} language="text" label="Prompt" />
        <PromptFigmaMakeLink
          href={USER_MANAGEMENT_FIGMA_MAKE_URL}
          ariaLabel="View User Management workspace in Figma Make (opens in new tab)"
        />
      </DocSection>

      <DocSection id="pl-user-management-compact-grid" title="User Management workspace (compact grid)">
        <CodeBlock code={USER_MANAGEMENT_COMPACT_GRID_PROMPT} language="text" label="Prompt" />
        <PromptFigmaMakeLink
          href={USER_MANAGEMENT_COMPACT_GRID_FIGMA_MAKE_URL}
          ariaLabel="View compact grid User Management workspace in Figma Make (opens in new tab)"
        />
      </DocSection>

      <DocSection id="pl-user-management-admin-screen" title="User Management admin screen">
        <CodeBlock code={USER_MANAGEMENT_ADMIN_SCREEN_PROMPT} language="text" label="Prompt" />
        <PromptFigmaMakeLink
          href={USER_MANAGEMENT_ADMIN_SCREEN_FIGMA_MAKE_URL}
          ariaLabel="View User Management admin screen in Figma Make (opens in new tab)"
        />
      </DocSection>

      <DocSection id="pl-enterprise-analytics-dashboard" title="Enterprise analytics dashboard">
        <CodeBlock code={ENTERPRISE_ANALYTICS_DASHBOARD_PROMPT} language="text" label="Prompt" />
        <PromptFigmaMakeLink
          href={ENTERPRISE_ANALYTICS_FIGMA_MAKE_URL}
          ariaLabel="View Enterprise analytics dashboard in Figma Make (opens in new tab)"
        />
      </DocSection>

      <DocSection id="pl-single-view-supply-chain-ops" title="Single-view supply chain workspace">
        <CodeBlock code={SINGLE_VIEW_SUPPLY_CHAIN_OPS_PROMPT} language="text" label="Prompt" />
        <PromptFigmaMakeLink
          href={SINGLE_VIEW_SUPPLY_CHAIN_FIGMA_MAKE_URL}
          ariaLabel="View Single-view supply chain workspace in Figma Make (opens in new tab)"
        />
      </DocSection>
    </div>
  )
}
