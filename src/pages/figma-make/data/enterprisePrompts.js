/** Golden Prompts library entry template — see Prompts Library tab. */

export const GOLDEN_TEMPLATE = `=== KPI Dashboard Template ===

Use Case: Demand planning dashboard showing 4–6 key metrics

When to Use:
✓ Executive dashboards
✓ Operations monitoring
✓ Analytics tools
✓ Management reporting

When NOT to Use:
✗ Very simple single metrics
✗ Real-time streaming data
✗ Complex analysis dashboards (use Analytics template)

Template Prompt:
---
Use Arvo Design System components and follow o9PageLayout.md.

Create [dashboard name] KPI section with [N] report tiles:

[For each KPI:]
- [KPI Name]: value=[X], trend=[+/-]%, icon=o9con-[icon]

Arvo components per KPI:
- Arvo Report Tile
- Arvo Text variant='heading' for value
- Arvo Badge for trend
- Arvo Icon for visual

Layout: Grid [N] columns desktop, [N] tablet, [N] mobile
Spacing: --spacing-lg between tiles
Colors: Use Arvo tokens, positive=--color-success, negative=--color-error

Responsive breakpoints: 1200px (desktop), 768px (tablet), 480px (mobile)
---

Expected Tokens: 110–140
Expected Development Time: 20–25 minutes
Team Velocity: 85% token savings

Verified By: @champion
Last Updated: 2026-05-10`
