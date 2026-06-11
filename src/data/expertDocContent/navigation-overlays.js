/** Expert design-system documentation — navigation & overlay components. */

export const NAV_OVERLAY_EXPERT_DOC = {
  breadcrumb: {
    purpose: [
      'Breadcrumb shows where the user is within a multi-level hierarchy and offers one-click navigation back to parent levels. In enterprise applications with deep object models — plans, orders, workspaces, configuration trees — it reduces disorientation and supports wayfinding without forcing users to rely on browser back alone.',
      'The trail is read left-to-right from broadest context to the current page. The final item represents the current location and is non-navigable; preceding items are links. A home icon on the first item is the conventional entry point to the product root or workspace home.',
    ],
    anatomy: {
      paragraphs: [
        'A breadcrumb group is a horizontal list of items separated by a visual divider (chevron or slash). Each navigable item is an anchor; the current page item is plain text styled as the active terminus.',
      ],
      parts: [
        { name: 'Container', desc: 'Landmark navigation region wrapping the full trail. Uses nav semantics with an accessible name such as "Breadcrumb".' },
        { name: 'Item link', desc: 'Clickable ancestor label (and optional leading icon). Truncates gracefully when space is tight; full label available on hover via Tooltip when truncated.' },
        { name: 'Separator', desc: 'Decorative divider between items. Hidden from assistive technology via aria-hidden.' },
        { name: 'Current item', desc: 'Final segment — bold or emphasized text with no href. Identifies the page the user is on without duplicating the page H1.' },
      ],
    },
    variants: {
      intro: 'Breadcrumb supports a compact density for toolbars and a default density for page headers. Icon-only first items (typically home) conserve horizontal space in dense layouts.',
      rows: [
        ['Default', 'Standard page-header placement below the title bar or above page content.'],
        ['With home icon', 'First item is an icon-only link to root; subsequent items show text labels.'],
        ['Truncated trail', 'Middle segments collapse into an overflow menu when the path exceeds available width — preserve the first, last, and current items.'],
      ],
    },
    states: {
      intro: 'Individual items and the group as a whole expose interaction and loading states.',
      rows: [
        ['Default', 'All ancestor links are interactive; current item is static text.'],
        ['Hover / focus', 'Link items show underline or color shift; focus ring meets contrast requirements.'],
        ['Disabled', 'Entire trail or individual links non-interactive during async navigation or permission lockout.'],
        ['Loading', 'Skeleton or shimmer on items while route metadata resolves — avoid empty trails that flash content.'],
      ],
    },
    dosDonts: {
      do: [
        'Mirror the real information architecture — each segment should correspond to a navigable parent route.',
        'Keep labels short and scannable; use the same naming as parent page titles.',
        'Place breadcrumbs below global chrome and above the page H1 so the hierarchy reads naturally.',
        'Provide a home or root link as the first item when the product has a clear landing point.',
      ],
      dont: [
        'Use Breadcrumb for sibling view switching — Tabstrip is the correct pattern.',
        'Make the current page item a link — it creates redundant navigation and confuses screen reader users.',
        'Invent synthetic intermediate levels that do not exist as routes.',
        'Replace primary navigation or a well-designed sidebar with breadcrumbs alone.',
      ],
    },
    usage: {
      when: [
        'The user navigated three or more levels deep into content (catalog → category → SKU detail).',
        'Parent pages exist and users frequently jump back one or two levels during workflows.',
        'The page title alone does not convey enough context about where the object lives in the hierarchy.',
      ],
      whenNot: [
        'Flat applications with one or two levels — breadcrumbs add noise without value.',
        'Switching between peer views at the same level — use Tabstrip instead.',
        'Wizard or stepper flows where linear progress matters more than hierarchy — use Stepper.',
      ],
      scenarios: [
        { title: 'Supply chain workspace', desc: 'Home → Planning → Region → Scenario shows planners where a scenario lives and lets them jump back to Region without losing context.' },
        { title: 'Admin configuration', desc: 'Settings → Integrations → SAP Connector helps admins retreat to the integrations list after drilling into connector credentials.' },
        { title: 'Truncated deep paths', desc: 'When a path has six or more levels, collapse middle segments into "…" with a menu exposing skipped ancestors.' },
      ],
      bestPractices: [
        'Align breadcrumb labels with route segments and page titles — inconsistency erodes trust.',
        'Update the trail synchronously on client-side navigation; stale breadcrumbs are worse than none.',
        'Do not include the current page in document title duplication — breadcrumb current item and H1 should complement, not repeat verbatim.',
      ],
      layout: [
        'Left-align under the page header; avoid centering in full-width layouts.',
        'Allow horizontal overflow with truncation rather than wrapping to multiple lines.',
        'Separate from Tabstrip — breadcrumbs show hierarchy; tabs show sibling views.',
      ],
    },
    a11y: {
      roles: [
        'Wrap the list in a nav element with aria-label="Breadcrumb" (or a translated equivalent).',
        'Use an ordered list (ol) so screen readers announce item count and position in the trail.',
      ],
      focus: [
        'Each link is a single tab stop in document order.',
        'Current item is not focusable — it is plain text, not a disabled link.',
      ],
      keyboard: [
        { key: 'Tab', action: 'Move focus through navigable breadcrumb links in left-to-right order.' },
        { key: 'Enter', action: 'Activate the focused link and navigate to the parent page.' },
      ],
      aria: [
        { attr: 'aria-current="page"', when: 'On the current (non-link) list item — marks the terminus of the trail.' },
        { attr: 'aria-hidden="true"', when: 'On decorative separators between items.' },
        { attr: 'aria-label', when: 'On icon-only home link — provide "Home" or product-specific root label.' },
      ],
      screenReaders: [
        'Screen readers announce "Breadcrumb navigation" followed by each item; the current page is identified by aria-current.',
        'Truncated items should expose full labels via accessible name or title when visually clipped.',
      ],
      dosDonts: {
        do: [
          'Use native anchor elements for navigable segments.',
          'Mark the current page with aria-current="page" on the list item or span wrapper.',
        ],
        dont: [
          'Use buttons styled as links for ancestor navigation — href semantics matter for open-in-new-tab and copy-link affordances.',
          'Omit the nav landmark — without it, the trail is indistinguishable from inline text links.',
        ],
      },
    },
  },

  'button-link': {
    purpose: [
      'Button Link presents navigation as a button-shaped control — filled or outlined affordance with padding — while still performing route changes or anchor navigation. Use it when the action is primarily navigational but must visually align with Button groups, toolbars, or card footers where text-style Link would look underweighted.',
      'Unlike Button, Button Link never submits forms or fires destructive mutations directly; its job is to take the user somewhere. Pair with routing libraries via href or onNavigate handlers in SPA contexts.',
    ],
    anatomy: {
      paragraphs: [
        'Button Link inherits Button sizing, variant tokens, and icon slots but renders as an anchor (or router-aware link) under the hood.',
      ],
      parts: [
        { name: 'Anchor surface', desc: 'Interactive region with button visual treatment — background, border, radius, and min touch target.' },
        { name: 'Label', desc: 'Required visible text describing the destination or action-oriented navigation ("View details", "Open workspace").' },
        { name: 'Leading / trailing icon', desc: 'Optional o9con icon for direction (arrow) or context (external). Icons are decorative unless they carry unique meaning.' },
        { name: 'External indicator', desc: 'Trailing external-link icon when href leaves the application — paired with target and rel security attributes.' },
      ],
    },
    variants: {
      intro: 'Button Link shares the Button variant set so navigation controls sit flush beside action buttons without visual mismatch.',
      rows: [
        ['Primary', 'High-emphasis navigation in empty states, cards, or modal footers ("Go to dashboard").'],
        ['Secondary', 'Default toolbar and panel navigation where multiple destinations compete for attention.'],
        ['Tertiary / ghost', 'Low-emphasis escape hatches ("Learn more") in dense forms or settings rows.'],
        ['Danger', 'Rare — navigates to a destructive review page; do not use for inline delete — use Button with confirmation.'],
      ],
    },
    states: {
      intro: 'Visual states match Button so mixed toolbars feel cohesive.',
      rows: [
        ['Default', 'Resting appearance with clear affordance as a navigational control.'],
        ['Hover / active', 'Background or border shift confirms interactivity on pointer devices.'],
        ['Focus', 'Visible focus ring — never suppress for anchor-styled controls.'],
        ['Disabled', 'Non-interactive; use aria-disabled and remove href navigation rather than pointer-events alone.'],
        ['Loading', 'Optional shimmer when destination readiness depends on async prefetch.'],
      ],
    },
    dosDonts: {
      do: [
        'Use when navigation must match Button sizing in a button row (modal footer: Cancel + View report).',
        'Set isExternal and appropriate rel values for outbound URLs.',
        'Write destination-oriented labels ("Open order #1042") not generic "Click here".',
      ],
      dont: [
        'Use Button Link to submit forms or save data — use Button.',
        'Place inline in body copy — use Link for prose-embedded references.',
        'Stack more than two Button Links side by side without hierarchy — designate primary vs secondary.',
      ],
    },
    usage: {
      when: [
        'Card or empty-state footers where a single prominent navigation action is needed.',
        'Toolbars that mix navigation ("Back to list") with operational buttons.',
        'SPA route transitions that need button affordance for visual parity with adjacent actions.',
      ],
      whenNot: [
        'Inline hyperlinks within paragraphs — use Link.',
        'Icon-only navigation — use Icon Button Link.',
        'Actions that mutate server state without leaving the page — use Button.',
      ],
      scenarios: [
        { title: 'Empty state CTA', desc: '"No scenarios yet" with a primary Button Link "Create scenario" routing to the creation flow.' },
        { title: 'Modal footer', desc: 'Secondary Button Link "View documentation" beside primary Button "Confirm" — navigation vs action distinction preserved.' },
        { title: 'External report', desc: 'Secondary Button Link with external icon opens analytics in a new tab with rel="noopener noreferrer".' },
      ],
      bestPractices: [
        'Limit one primary Button Link per view region; additional destinations should be secondary or text Link.',
        'Ensure the hit target meets 44×44 CSS px where touch is expected, even for compact sizes.',
        'When disabled, explain why navigation is blocked (tooltip or adjacent helper text).',
      ],
    },
    a11y: {
      roles: [
        'Renders as a native anchor with button styling — no role="button" override.',
        'Disabled navigation uses aria-disabled="true" and tabindex="-1" while keeping the element perceivable for tooltips.',
      ],
      focus: [
        'Receives focus in document order like any link.',
        'Focus ring must remain visible on keyboard focus — do not remove outline without a compliant replacement.',
      ],
      keyboard: [
        { key: 'Tab', action: 'Move focus to the Button Link in natural tab order.' },
        { key: 'Enter', action: 'Activate navigation to the href destination.' },
        { key: 'Shift+Tab', action: 'Move focus to the previous focusable element.' },
      ],
      aria: [
        { attr: 'aria-disabled="true"', when: 'Navigation is temporarily unavailable — prefer over native disabled on anchors.' },
        { attr: 'aria-label', when: 'Visible label is truncated but destination must be fully announced.' },
      ],
      screenReaders: [
        'Announced as a link (or "button" only if incorrectly roled — avoid that).',
        'External links should announce that they open a new window when target="_blank" — via visible text or accessible name.',
      ],
      dosDonts: {
        do: [
          'Keep semantic anchor behavior for "Open in new tab" context menu support.',
          'Provide accessible names that describe the destination, not the shape ("Button").',
        ],
        dont: [
          'Attach onClick navigation without an href — breaks middle-click, copy-link, and SEO patterns.',
          'Use role="button" on an anchor — mixed semantics confuse assistive technology.',
        ],
      },
    },
  },

  'icon-button-link': {
    purpose: [
      'Icon Button Link is the compact navigational counterpart to Icon Button — a square, icon-only control that routes to another page or external URL. It preserves the same hit target and tooltip patterns as Icon Button while performing anchor navigation instead of command actions.',
      'Every icon-only link must expose an accessible name via tooltip/aria-label because there is no visible text label. The tooltip prop doubles as the accessible name in the Arvo implementation.',
    ],
    anatomy: {
      paragraphs: [
        'A single icon glyph centered in a square anchor surface, optionally with badge or notification dot overlays for unread counts.',
      ],
      parts: [
        { name: 'Icon', desc: 'o9con glyph communicating destination context (home, settings, external). Must map to a recognizable metaphor.' },
        { name: 'Anchor wrapper', desc: 'Square touch target meeting minimum size tokens; applies variant background on hover/focus.' },
        { name: 'Tooltip', desc: 'Required accessible name surfaced on hover and focus — same string drives aria-label.' },
        { name: 'Badge (optional)', desc: 'Notification count or status dot — must not be the only indicator of meaning; icon + tooltip still required.' },
      ],
    },
    variants: {
      intro: 'Variants mirror Icon Button so navigation and command icon controls can coexist in one toolbar.',
      rows: [
        ['Primary / secondary / tertiary', 'Match emphasis of adjacent Icon Buttons in the same bar.'],
        ['Ghost', 'Minimal chrome for dense data grids or table row actions.'],
        ['External', 'Adds external-link affordance or distinct styling when leaving the application.'],
      ],
    },
    states: {
      intro: 'States align with Icon Button for predictable toolbar behavior.',
      rows: [
        ['Default', 'Icon visible with sufficient contrast against surface.'],
        ['Hover / focus', 'Background fill or ring confirms target; tooltip appears on focus without delay.'],
        ['Active', 'Pressed state during click — brief visual feedback before navigation.'],
        ['Disabled', 'Reduced opacity with aria-disabled; tooltip explains blocked navigation when helpful.'],
      ],
    },
    dosDonts: {
      do: [
        'Always provide a tooltip/aria-label that names the destination ("Open help center").',
        'Use familiar icons — home, gear, question-circle — before inventing custom metaphors.',
        'Group related icon links in a toolbar with shared spacing tokens.',
      ],
      dont: [
        'Use icon-only links for primary page CTAs — users need visible text labels for critical paths.',
        'Rely on icon shape alone without tooltip — fails WCAG 4.1.2 Name, Role, Value.',
        'Mix navigation icon links and command Icon Buttons without visual or spatial grouping.',
      ],
    },
    usage: {
      when: [
        'Header chrome: help, settings, profile shortcuts where space is constrained.',
        'Table row actions that navigate to detail views (open in full page).',
        'Compact card headers linking to related objects.',
      ],
      whenNot: [
        'Primary navigation to unfamiliar destinations — use labeled Button Link or Link.',
        'Actions that mutate data — use Icon Button instead.',
        'More than five icon links in a row without labels — cognitive overload; use a menu.',
      ],
      scenarios: [
        { title: 'App header', desc: 'Help (question-circle) and Settings (gear) icon links in the global bar.' },
        { title: 'Row drill-down', desc: 'Open-in-new (external-link) icon link on a grid row navigates to object detail.' },
        { title: 'Disabled during load', desc: 'Icon link to report dashboard disabled until user permissions resolve — tooltip states "Loading access…".' },
      ],
      bestPractices: [
        'Keep icon semantics stable across the product — do not reuse the same icon for different destinations in adjacent regions.',
        'Place high-frequency icon links at consistent screen locations between modules.',
        'When badge counts are shown, include the count in the accessible name ("Notifications, 3 unread").',
      ],
    },
    a11y: {
      roles: [
        'Native anchor element — not role="button".',
        'Accessible name required via aria-label or aria-labelledby — tooltip integration supplies this in Arvo.',
      ],
      focus: [
        'Tooltip must appear on keyboard focus immediately (no hover-only delay).',
        'Visible focus indicator on the square target at all times.',
      ],
      keyboard: [
        { key: 'Tab', action: 'Focus moves to the icon link in toolbar order.' },
        { key: 'Enter', action: 'Navigate to href destination.' },
      ],
      aria: [
        { attr: 'aria-label', when: 'Always — icon-only links have no visible text; label describes destination.' },
        { attr: 'aria-disabled="true"', when: 'Navigation blocked — element remains focusable for explanation tooltip.' },
        { attr: 'aria-describedby', when: 'Optional badge count reference when count is in a separate element.' },
      ],
      screenReaders: [
        'Announced as link with accessible name — never as unlabeled "link" or "button".',
        'Badge counts merge into the accessible name when they convey essential status.',
      ],
      dosDonts: {
        do: [
          'Test with screen reader — verify name, role (link), and state.',
          'Use aria-disabled instead of native disabled on anchors when explaining why navigation is blocked.',
        ],
        dont: [
          'Leave icon links unlabeled — automatic failure in audits.',
          'Hide focus outlines for aesthetic alignment with Icon Button — both need visible focus.',
        ],
      },
    },
  },

  link: {
    purpose: [
      'Link is the inline text anchor for navigation embedded in prose, tables, helper text, and metadata rows. It uses typographic styling (color, underline on hover) rather than button chrome, so reading flow stays uninterrupted in dense B2B interfaces.',
      'Use Link for references users expect to scan quickly: documentation references, related record IDs, "Learn more" inline, and secondary paths that should not compete visually with primary Buttons.',
    ],
    anatomy: {
      paragraphs: [
        'Link renders a native anchor with optional leading icon and trailing external indicator.',
      ],
      parts: [
        { name: 'Anchor text', desc: 'Visible label — should describe destination or action in context ("View audit log").' },
        { name: 'Leading icon', desc: 'Optional small icon before text for category hints (document, link chain).' },
        { name: 'External indicator', desc: 'Trailing icon when isExternal — signals new tab/window behavior.' },
        { name: 'Underline affordance', desc: 'Hover/focus underline reinforces interactivity without permanent underline in all themes.' },
      ],
    },
    variants: {
      intro: 'Primary and secondary variants control emphasis within content blocks.',
      rows: [
        ['Primary', 'Default emphasis for actionable inline references in body text.'],
        ['Secondary', 'Subdued color for tertiary references, footnotes, and metadata ("Last updated by…").'],
        ['External', 'Primary or secondary plus external icon and safe target/rel for outbound URLs.'],
        ['With icon', 'Leading icon variant for file types, settings, or documentation links.'],
      ],
    },
    states: {
      intro: 'Link states are lightweight compared to buttons — typography shifts carry most feedback.',
      rows: [
        ['Default', 'Distinct link color meeting contrast against body text and background.'],
        ['Hover', 'Underline or color shift on pointer hover — gated behind fine-pointer when appropriate.'],
        ['Focus', 'Visible focus ring or outline — critical in keyboard-heavy enterprise workflows.'],
        ['Visited', 'Optional visited styling where repeat navigation context matters (documentation indexes).'],
        ['Disabled', 'Non-interactive with aria-disabled; maintain readable color — do not fade below contrast minimums.'],
      ],
    },
    dosDonts: {
      do: [
        'Write link text that makes sense out of context — avoid "click here" and bare URLs in UI copy.',
        'Use secondary variant in dense tables so links do not overpower data values.',
        'Mark external links with isExternal and rel="noopener noreferrer" when target="_blank".',
      ],
      dont: [
        'Style Link as a primary call-to-action when Button or Button Link is appropriate.',
        'Open internal routes in new tabs without explicit user intent.',
        'Chain multiple inline links in one sentence without clear separation — restructure copy instead.',
      ],
    },
    usage: {
      when: [
        'Inline references inside paragraphs, alert bodies, or helper text.',
        'Secondary navigation in tables (order ID links to detail page).',
        'Documentation and policy references within forms.',
      ],
      whenNot: [
        'Toolbar or footer primary actions — use Button or Button Link.',
        'Icon-only navigation — use Icon Button Link.',
        'Destructive confirmations — use Button with Alert Dialog.',
      ],
      scenarios: [
        { title: 'Inline help', desc: '"Configure API keys in the integration panel" with Link on "integration panel".' },
        { title: 'Table cell', desc: 'Secondary Link variant on SKU code in a grid — navigates to product detail without button weight.' },
        { title: 'External policy', desc: 'External Link to GDPR policy opens new tab with visible external icon.' },
      ],
      bestPractices: [
        'Prefer sentence-case labels aligned with content guidelines.',
        'Do not underline every link permanently if design tokens use color alone — always provide a non-color focus/hover cue.',
        'Keep link density per paragraph low — if everything is linked, nothing stands out.',
      ],
      layout: [
        'Inline with text baseline — do not increase line height disproportionately.',
        'In tables, right-align or truncate with tooltip when labels exceed column width.',
      ],
    },
    a11y: {
      roles: [
        'Native anchor — no redundant role attribute.',
        'External links that open new windows should warn users via visible text or accessible name suffix.',
      ],
      focus: [
        'Must be reachable and visible via keyboard Tab order.',
        'Focus indicator contrast ratio meets WCAG 2.2 focus appearance requirements.',
      ],
      keyboard: [
        { key: 'Tab', action: 'Focus the link in document order.' },
        { key: 'Enter', action: 'Activate navigation.' },
        { key: 'Shift+Enter', action: 'Some browsers open in new tab — do not rely on this; use explicit external pattern instead.' },
      ],
      aria: [
        { attr: 'aria-disabled="true"', when: 'Link is present but navigation is blocked.' },
        { attr: 'aria-label', when: 'Visible text is abbreviated but spoken name needs expansion ("Order 1042, open details").' },
      ],
      screenReaders: [
        'Announced as link with visible or aria label.',
        'Icons marked aria-hidden unless they add unique information not in link text.',
      ],
      dosDonts: {
        do: [
          'Use meaningful link text — top accessibility heuristic for hyperlinks.',
          'Ensure disabled links remain perceivable with explanation nearby or in tooltip.',
        ],
        dont: [
          'Use javascript:void(0) hrefs — breaks open-in-new-tab and confuses assistive tech.',
          'Remove focus styles — keyboard users lose track of position in long forms.',
        ],
      },
    },
  },

  tabstrip: {
    purpose: [
      'Tabstrip lets users switch between sibling views, panels, or object facets at the same hierarchy level without full page navigation. It is the primary pattern for module interiors: Overview / Details / History on an order, or Configuration / Permissions / Audit on an admin screen.',
      'The component implements the WAI-ARIA Tabs pattern with roving tabindex — only the selected tab is in the sequential tab order, while arrow keys move focus among tabs. Tab panels associate with tabs via aria-controls for screen reader context.',
    ],
    anatomy: {
      paragraphs: [
        'A horizontal list of tab items sits above (or beside, in vertical configurations) the active panel content. Optional icons, close buttons, and pin affordances extend the base pattern for document-style or workspace UIs.',
      ],
      parts: [
        { name: 'Tab list', desc: 'Container with role="tablist" holding selectable tab elements.' },
        { name: 'Tab item', desc: 'Selectable control with label and optional icon; selected state shows indicator (underline or fill).' },
        { name: 'Close / pin (optional)', desc: 'Affordances for closable document tabs or pinned favorites — must not shrink touch target below minimum.' },
        { name: 'Tab panel', desc: 'Content region tied to the selected tab via id reference; hidden panels are inert and non-visible.' },
      ],
    },
    variants: {
      intro: 'Two visual variants support different chrome densities from module headers to compact inspector panels.',
      rows: [
        ['Primary', 'Flat tabs with bottom-border indicator on the selected tab — default module header.'],
        ['Secondary', 'Filled background on selected tab — higher contrast on gray surfaces.'],
      ],
    },
    states: {
      intro: 'Tabs and individual items expose selection, interaction, and lifecycle states.',
      rows: [
        ['Selected', 'Active tab with indicator; associated panel visible; tabindex 0 on tab.' ],
        ['Unselected', 'Inactive tabs visible but panels hidden; tabindex -1 with roving focus.'],
        ['Hover / focus', 'Preview interactivity; focus ring on keyboard navigation between tabs.'],
        ['Disabled', 'Tab cannot be selected — use when panel content is unavailable pending permissions or data.' ],
        ['Closable', 'Tab shows close icon; closing updates selection to an adjacent tab and announces change.'],
      ],
    },
    dosDonts: {
      do: [
        'Keep tab labels short (1–2 words) and mutually exclusive in scope.',
        'Preserve selected tab across refresh when it reflects user workflow state.',
        'Lazy-load heavy panel content on first selection to improve initial paint.',
      ],
      dont: [
        'Use tabs for sequential wizard steps — use Stepper or Wizard.',
        'Nest Tabstrip inside Tabstrip — flatten information architecture instead.',
        'Disable the only selected tab without moving selection — leaves users stranded.',
      ],
    },
    usage: {
      when: [
        'Two to seven peer views share one screen real estate (details, related lists, activity).',
        'Users switch contexts frequently within a single object or workspace.',
        'Content in each panel is substantial enough to warrant separation — not a single scrollable page.',
      ],
      whenNot: [
        'Hierarchy navigation across levels — use Breadcrumb or Tree.',
        'More than seven tabs — consolidate, use a dropdown overflow, or restructure IA.',
        'Linear mandatory steps — use Stepper.',
      ],
      scenarios: [
        { title: 'Order workspace', desc: 'Overview | Line items | Shipments | Audit — planners jump facets without route changes.' },
        { title: 'Document tabs', desc: 'Closable Tabstrip in an analytics canvas where users open multiple scenarios like browser tabs.' },
        { title: 'Permissions gating', desc: 'Audit tab disabled with tooltip "Requires admin role" until authorization resolves.' },
      ],
      bestPractices: [
        'Default-select the most common or first-run tab; persist last selection in user preferences when appropriate.',
        'Align tab order with task frequency — primary workflow tab left-most for LTR locales.',
        'When tabs overflow horizontally, provide scroll arrows or a menu — never silently clip labels.',
      ],
      layout: [
        'Place Tabstrip directly above panel content with consistent spacing token.',
        'Separate from page-level Breadcrumb — tabs are siblings, breadcrumbs are ancestors.',
      ],
    },
    a11y: {
      roles: [
        'Tab list: role="tablist" with optional aria-label describing the group ("Order sections").',
        'Each tab: role="tab" with aria-selected true/false.',
        'Each panel: role="tabpanel" with aria-labelledby pointing to tab id.',
      ],
      focus: [
        'Roving tabindex: selected tab tabindex 0, others -1.',
        'When selection changes via arrow keys, move focus to the newly selected tab.',
        'Tab into panel content after the tab list — do not trap focus in the tab bar.',
      ],
      keyboard: [
        { key: 'ArrowLeft / ArrowRight', action: 'Move focus and optionally selection between tabs (horizontal orientation).' },
        { key: 'Home / End', action: 'Focus first or last tab in the list.' },
        { key: 'Enter / Space', action: 'Activate focused tab if selection follows focus separately.' },
        { key: 'Tab', action: 'Exit tab list into panel content or next page control.' },
      ],
      aria: [
        { attr: 'aria-selected', when: 'true on active tab, false on inactive tabs.' },
        { attr: 'aria-controls', when: 'On each tab — id of associated tabpanel.' },
        { attr: 'aria-disabled', when: 'Tab cannot be activated — panel unavailable.' },
      ],
      screenReaders: [
        'Changing tabs should move screen reader focus to panel heading or first focusable control when appropriate.',
        'Hidden panels use hidden or inert — content must not be reachable while tab is unselected.',
      ],
      dosDonts: {
        do: [
          'Follow WAI-ARIA Tabs Authoring Practices for keyboard and roles.',
          'Provide visible selected state plus aria-selected — do not rely on color alone.',
        ],
        dont: [
          'Render all panels visible at once while using tab semantics — breaks the pattern.',
          'Remove arrow-key navigation — enterprise power users depend on it.',
        ],
      },
    },
  },

  tree: {
    purpose: [
      'Tree presents hierarchical data — org structures, folder systems, BOMs, navigation menus — as an expandable nested list. Users scan parent nodes, expand branches on demand, and select one or many nodes depending on configuration.',
      'In B2B applications, Tree is the workhorse for master-data pickers, side navigation, and configuration browsers where flat lists would overwhelm. Virtualization support is expected at scale (thousands of nodes).',
    ],
    anatomy: {
      paragraphs: [
        'Each row is a treeitem with optional expand/collapse toggle, icon, label, and trailing metadata. Indentation conveys depth; aria-level and aria-setsize communicate hierarchy to assistive technology.',
      ],
      parts: [
        { name: 'Tree container', desc: 'Root role="tree" or treegrid when cells are tabular — single scroll region.' },
        { name: 'Tree item row', desc: 'Expand toggle, icon, label, optional checkbox for multi-select.' },
        { name: 'Expand toggle', desc: 'Disclosure control rotating chevron — separate hit target from selection when both exist.' },
        { name: 'Group', desc: 'Nested role="group" containing child treeitems — hidden when parent collapsed.' },
      ],
    },
    variants: {
      intro: 'Tree supports selection modes and visual densities for navigation vs picker contexts.',
      rows: [
        ['Single-select', 'One active node — sidebar navigation or single object picker.' ],
        ['Multi-select with checkbox', 'Checkboxes on rows for bulk assignment (roles, categories).' ],
        ['Lazy-load', 'Expand fetches children asynchronously — show loading on expander.' ],
        ['Treegrid', 'Tabular columns (name, owner, status) with tree first column — use treegrid role.' ],
      ],
    },
    states: {
      intro: 'Nodes and the tree expose expansion, selection, and async loading states.',
      rows: [
        ['Collapsed', 'Children hidden; expander shows closed affordance.' ],
        ['Expanded', 'Children visible; expander rotated; aria-expanded true on parent row.' ],
        ['Selected', 'Row highlighted; aria-selected true for single-select modes.' ],
        ['Indeterminate (multi)', 'Checkbox partial state when some descendants selected.' ],
        ['Disabled', 'Row non-interactive — gray label with aria-disabled.' ],
        ['Loading children', 'Spinner on expander while fetch in flight — block duplicate expand clicks.' ],
      ],
    },
    dosDonts: {
      do: [
        'Default-expand nodes on the path to the current selection so users see context.',
        'Virtualize long lists — render only visible rows.',
        'Keep node labels concise; put metadata in secondary columns or tooltips.',
      ],
      dont: [
        'Deep nesting beyond six levels without search — flatten or provide filter.',
        'Use Tree for flat enumerations — use Select or List.',
        'Mix unrelated hierarchies in one tree — split by root or use forest pattern with headings.',
      ],
    },
    usage: {
      when: [
        'Data has natural parent-child relationships users already mental-model as a hierarchy.',
        'Side navigation for modules with nested sections.',
        'Picker dialogs choosing one or many nodes from org or folder structures.',
      ],
      whenNot: [
        'Small flat sets (< 8 items) — use Radio Group or List.',
        'Sequential process steps — use Stepper.',
        'Sibling view switching without hierarchy — use Tabstrip.',
      ],
      scenarios: [
        { title: 'Org picker', desc: 'Multi-select Tree with checkboxes assigns users to departments in admin workflows.' },
        { title: 'Module nav', desc: 'Single-select Tree in a left rail expands Planning → Scenarios → Active scenarios.' },
        { title: 'Lazy BOM', desc: 'Expanding a manufacturing node fetches child parts on demand with loading indicator.' },
      ],
      bestPractices: [
        'Provide typeahead search or filter above the tree for structures over ~50 visible nodes.',
        'Persist expansion state per user session where it aids repeat tasks.',
        'Align icons by node type (folder, leaf, user) consistently across the product.',
      ],
      layout: [
        'Fixed-width side panel (240–320px) for navigation trees; flexible width in modals.',
        'Pair with a detail pane on selection — master-detail layout.',
      ],
    },
    a11y: {
      roles: [
        'Container: role="tree" (or treegrid with column headers).',
        'Rows: role="treeitem" with aria-level, aria-setsize, aria-posinset for position in level.',
        'Child collections: role="group" owned by expanded treeitem.',
      ],
      focus: [
        'Roving tabindex within tree — focused item tabindex 0.',
        'Focus preserved when expanding/collapsing — do not jump to root unexpectedly.',
      ],
      keyboard: [
        { key: 'ArrowDown / ArrowUp', action: 'Move focus to next/previous visible treeitem.' },
        { key: 'ArrowRight', action: 'Expand collapsed node or move to first child.' },
        { key: 'ArrowLeft', action: 'Collapse expanded node or move to parent.' },
        { key: 'Enter / Space', action: 'Select node or toggle expand when focus on expander.' },
        { key: 'Home / End', action: 'Focus first or last visible item.' },
        { key: 'Typeahead', action: 'Jump to next node matching typed prefix — essential for long trees.' },
      ],
      aria: [
        { attr: 'aria-expanded', when: 'On parent nodes — true when children visible.' },
        { attr: 'aria-selected', when: 'On selectable rows — true for selected node(s).' },
        { attr: 'aria-checked', when: 'Mixed/true/false on checkbox multi-select rows.' },
      ],
      screenReaders: [
        'Announce level and position ("Item 2 of 5, level 2").',
        'Lazy-loaded expansion should announce loading state and result count when children appear.',
      ],
      dosDonts: {
        do: [
          'Implement WAI-ARIA TreeView keyboard spec completely — partial support frustrates power users.',
          'Expose search that filters visible nodes and updates aria-setsize accordingly.',
        ],
        dont: [
          'Use div click handlers without treeitem roles — screen readers see flat text.',
          'Remove focus indicators on selected row — selection color is not a focus substitute.',
        ],
      },
    },
  },

  popover: {
    purpose: [
      'Popover surfaces contextual, interactive content anchored to a trigger element — filters, quick forms, action menus with rich content, preview cards. Unlike Tooltip, Popover accepts focusable controls and persists until the user dismisses it or clicks outside.',
      'Use Popover when the user needs to complete a short task or review supplementary information without leaving the current view — adjusting column filters on a grid, picking a color, or confirming a non-destructive option.',
    ],
    anatomy: {
      paragraphs: [
        'A trigger (button, icon button, link) opens a floating panel positioned via the collision-aware engine. The panel has padding, optional header/footer, and a focus trap while open.',
      ],
      parts: [
        { name: 'Trigger', desc: 'Element that toggles open state — must be keyboard activatable and aria-expanded aware.' },
        { name: 'Surface', desc: 'Floating container with shadow, border, and max dimensions; scrolls internally when content overflows.' },
        { name: 'Header (optional)', desc: 'Title and close button — use for multi-step or titled tasks.' },
        { name: 'Body', desc: 'Interactive content — inputs, lists, toggles — receives initial focus on open.' },
        { name: 'Arrow (optional)', desc: 'Visual pointer to anchor — decorative; position announced via context not arrow.' },
      ],
    },
    variants: {
      intro: 'Placement and density variants adapt Popover to triggers at viewport edges and dense toolbars.',
      rows: [
        ['Placement', 'top, bottom, start, end, and center-aligned combinations — auto-flip on collision.'],
        ['With header/footer', 'Structured layout for titled tasks and action buttons ("Apply", "Cancel").'],
        ['Hybrid / hover+click', 'Opens on click for primary interaction; hover preview variant for read-only summaries only.'],
        ['Controlled vs uncontrolled', 'Parent owns open state for coordinated multi-popover UIs.' ],
      ],
    },
    states: {
      intro: 'Popover and trigger share open/closed lifecycle with optional loading inside the panel.',
      rows: [
        ['Closed', 'Panel not in DOM or hidden; trigger aria-expanded false.' ],
        ['Open', 'Panel visible, focus trapped (when modal) or focus managed (non-modal); aria-expanded true.' ],
        ['Loading', 'Skeleton inside panel while async content loads — keep panel open with progress feedback.' ],
        ['Disabled trigger', 'Cannot open — aria-disabled on trigger with explanation tooltip if needed.' ],
      ],
    },
    dosDonts: {
      do: [
        'Return focus to trigger on close — critical for keyboard users.',
        'Limit content to tasks completable in under 30 seconds — otherwise use Drawer or Side Panel.',
        'Provide explicit dismiss: Escape, close button, or outside click per pattern guidelines.',
      ],
      dont: [
        'Put essential-only information solely in Popover — progressive enhancement, not hiding required labels.',
        'Nest Popover inside Popover beyond one level — restructure or use modal.',
        'Use Popover for destructive confirmations — use Alert Dialog.',
      ],
    },
    usage: {
      when: [
        'Contextual filters or sort controls anchored to a toolbar button.',
        'Compact forms (date range preset, assignee picker) near the triggering cell.',
        'Rich action menus beyond simple Action Menu lists — icons, descriptions, toggles.',
      ],
      whenNot: [
        'Static supplementary labels — use Tooltip.',
        'Blocking confirmations or legal consent — use Alert Dialog.',
        'Large multi-section workflows — use Drawer or full page.',
      ],
      scenarios: [
        { title: 'Column filter', desc: 'Filter icon on grid header opens Popover with checkbox list and Apply button.' },
        { title: 'Quick assign', desc: 'Avatar click opens Popover user picker with search field and recent users list.' },
        { title: 'Preview card', desc: 'Hover hybrid Popover shows read-only KPI summary; click opens editable form in Drawer instead.' },
      ],
      bestPractices: [
        'Initial focus lands on first meaningful control — not the close button unless it is the only control.',
        'Keep width consistent with design tokens; avoid full-viewport popovers on desktop.',
        'Announce open state to screen readers when content loads asynchronously.',
      ],
      layout: [
        'Anchor to trigger with 8px offset minimum; respect viewport padding on flip.',
        'Max height with internal scroll — do not extend popover beyond viewport bottom.',
      ],
    },
    a11y: {
      roles: [
        'Non-modal popover: aria-expanded on trigger; panel id referenced by aria-controls.',
        'Modal popover (focus trap): consider role="dialog" when interaction must complete before returning.',
      ],
      focus: [
        'On open, move focus into panel — first focusable or designated autofocus control.',
        'On close, restore focus to trigger that opened the popover.',
        'Tab cycles within trapped modal popovers; Shift+Tab wraps.',
      ],
      keyboard: [
        { key: 'Escape', action: 'Close popover and return focus to trigger.' },
        { key: 'Tab', action: 'Move focus among controls inside panel; trap when modal.' },
        { key: 'Enter / Space', action: 'Activate trigger to toggle open state.' },
      ],
      aria: [
        { attr: 'aria-expanded', when: 'On trigger — mirrors open/closed state.' },
        { attr: 'aria-controls', when: 'On trigger — id of popover panel.' },
        { attr: 'aria-modal', when: 'true when focus is trapped and background inert.' },
      ],
      screenReaders: [
        'Title text in header should be associated via aria-labelledby on dialog role when used.',
        'Loading states should use aria-busy on panel until content ready.',
      ],
      dosDonts: {
        do: [
          'Implement focus restoration on every dismiss path — Escape, outside click, close button.',
          'Use aria-expanded on trigger for all click-open popovers.',
        ],
        dont: [
          'Leave focus in the void after close — keyboard users lose context.',
          'Open popover on hover only when content includes inputs — hover cannot hold focus.',
        ],
      },
    },
  },

  tooltip: {
    purpose: [
      'Tooltip displays brief, non-interactive supplementary text anchored to a trigger — clarifying icon-only controls, exposing keyboard shortcuts, or revealing full truncated strings. It is transient by design and must never be the sole carrier of essential information.',
      'Arvo manages Tooltips as a singleton: only one visible at a time, with hover delay on pointer devices and immediate show on keyboard focus. For interactive content, use Popover instead.',
    ],
    anatomy: {
      paragraphs: [
        'A trigger element (wrapped or icon-only with built-in tooltip prop) connects to a floating label surface. Optional shortcut badge appears trailing the text.',
      ],
      parts: [
        { name: 'Trigger', desc: 'Focusable element that owns the tooltip relationship — button, link, or icon control.' },
        { name: 'Label text', desc: 'Short phrase — ideally under 80 characters; no paragraphs or links.' },
        { name: 'Shortcut badge (optional)', desc: 'Keyboard shortcut hint (Ctrl+S) styled distinctly from label text.' },
        { name: 'Positioning layer', desc: 'Collision-aware placement with viewport flip and reduced-motion instant show/hide.' },
      ],
    },
    variants: {
      intro: 'Placement variants and integration patterns cover the two Arvo tooltip models: wrapper vs built-in icon-only prop.',
      rows: [
        ['Wrapper pattern', 'ArvoTooltip wraps label-bearing components (Button, Link) — standard across DS.'],
        ['Built-in prop', 'Icon-only components (Icon Button, Fab) use tooltip/label prop — same string drives aria-label.'],
        ['With shortcut', 'Label plus shortcut badge for command discovery in power-user workflows.'],
        ['Truncation-aware', 'showTooltipOnOverflow on tables/labels — only shows when text is clipped.'],
      ],
    },
    states: {
      intro: 'Tooltip visibility is ephemeral; triggers carry persistent disabled and focus states.',
      rows: [
        ['Hidden', 'Default — no tooltip in DOM or aria-describedby inactive.' ],
        ['Visible', 'Shown on hover (after delay) or focus — singleton dismisses others.' ],
        ['Disabled trigger', 'Use aria-disabled not native disabled so tooltip can explain why control is inactive.' ],
        ['Reduced motion', 'Instant show/hide when prefers-reduced-motion — no animation delay.' ],
      ],
    },
    dosDonts: {
      do: [
        'Wrap label-bearing controls with ArvoTooltip when extra hint is needed — do not add tooltip props to Button.',
        'Keep copy concise — one line for icon labels, two max for truncation reveal.',
        'Show tooltips on keyboard focus immediately with no hover delay.',
      ],
      dont: [
        'Put interactive elements (links, buttons) inside tooltip content — use Popover.',
        'Use tooltip as the only accessible name for icon buttons — set aria-label/tooltip prop on the control.',
        'Show redundant tooltips on controls with visible text labels unless adding non-obvious shortcut info.',
      ],
    },
    usage: {
      when: [
        'Icon-only toolbar controls need accessible names surfaced on hover/focus.',
        'Keyboard shortcut hints on frequently used commands.',
        'Truncated table cells or labels where full value helps verification.',
      ],
      whenNot: [
        'Interactive forms or filters — use Popover.',
        'Error messages — use Inline Alert or field validation pattern.',
        'Content required to complete a task — place inline, not in tooltip.',
      ],
      scenarios: [
        { title: 'Icon button save', desc: 'Icon Button tooltip "Save scenario" plus shortcut Ctrl+S.' },
        { title: 'Disabled control hint', desc: 'aria-disabled export button tooltip "Complete required fields before exporting".' },
        { title: 'Clipped SKU', desc: 'Truncated cell shows full SKU on focus via overflow tooltip only when ellipsis active.' },
      ],
      bestPractices: [
        'Respect WCAG 1.4.13 — hoverable tooltip must remain visible while pointer moves onto it (100ms grace).',
        'Do not tooltip every grid cell by default — performance and noise suffer; use on overflow or icon triggers.',
        'Singleton behavior prevents stacked tooltip clutter in dense UIs.',
      ],
    },
    a11y: {
      roles: [
        'Tooltip container typically role="tooltip" referenced by aria-describedby on trigger.',
        'Icon-only triggers must have aria-label matching tooltip content.',
      ],
      focus: [
        'Tooltip appears on focus without delay — keyboard users must see hints immediately.',
        'Disabled controls use aria-disabled so they remain focusable for explanatory tooltip.',
      ],
      keyboard: [
        { key: 'Tab', action: 'Focus trigger shows tooltip; moving away dismisses.' },
        { key: 'Escape', action: 'Dismiss visible tooltip without moving focus (when persistent hover path used).' },
      ],
      aria: [
        { attr: 'aria-describedby', when: 'Links trigger to tooltip id when visible — optional pattern; aria-label often sufficient for icon-only.' },
        { attr: 'aria-label', when: 'On icon-only triggers — required accessible name.' },
        { attr: 'aria-disabled', when: 'On disabled triggers that still expose tooltip explanation.' },
      ],
      screenReaders: [
        'Prefer aria-label on icon-only controls over relying on tooltip alone — tooltip may not persist in all AT browse modes.',
        'Shortcut text included in accessible name when it is essential ("Save, Control S").',
      ],
      dosDonts: {
        do: [
          'Pair icon-only tooltip prop with aria-label in Arvo icon components automatically.',
          'Test disabled-button tooltips with keyboard-only focus path.',
        ],
        dont: [
          'Use native disabled on buttons that need tooltip — blocks focus and explanation.',
          'Hide critical errors only in tooltips — violates WCAG 3.3.1.',
        ],
      },
    },
  },

  'alert-dialog': {
    purpose: [
      'Alert Dialog interrupts the user flow to demand an explicit decision before continuing — confirm destructive actions, acknowledge irreversible outcomes, or resolve blocking errors. It modalizes the entire application surface with backdrop, focus trap, and suspended background interaction until dismissed.',
      'In enterprise B2B contexts, Alert Dialog prevents costly mistakes: deleting scenarios, revoking access, abandoning unsaved configuration, or confirming bulk operations affecting thousands of records. The pattern is intentionally heavy — overuse causes alert fatigue.',
    ],
    anatomy: {
      paragraphs: [
        'Built on the overlay hub: backdrop dimming, centered dialog surface, semantic header/body/footer regions, and a button row for confirm/cancel actions.',
      ],
      parts: [
        { name: 'Backdrop', desc: 'Semi-transparent layer blocking interaction with page content; click may or may not dismiss per severity.' },
        { name: 'Dialog surface', desc: 'Card with title, descriptive body, and action footer — max width token for readability.' },
        { name: 'Title', desc: 'Short imperative or question ("Delete scenario?") — referenced by aria-labelledby.' },
        { name: 'Body', desc: 'Consequences spelled out plainly — what happens, what cannot be undone, affected scope.' },
        { name: 'Actions', desc: 'Primary confirm and secondary cancel — destructive variant uses danger styling on confirm.' },
      ],
    },
    variants: {
      intro: 'Semantic variants communicate severity and guide default focus.',
      rows: [
        ['Default / info', 'Neutral confirmation — unsaved changes, proceed anyway.'],
        ['Warning', 'Caution — operation has significant but recoverable impact.'],
        ['Danger / destructive', 'Irreversible or high-impact delete — danger button, explicit object naming in copy.'],
        ['Acknowledge-only', 'Single OK button for critical alerts user must read before continuing.'],
      ],
    },
    states: {
      intro: 'Dialog lifecycle spans closed, open, and in-flight confirmation.',
      rows: [
        ['Closed', 'Not mounted or hidden; trigger available; no focus trap active.' ],
        ['Open', 'Focus trapped inside dialog; background inert; initial focus on least destructive action or first focusable per variant rules.' ],
        ['Confirm loading', 'Primary action shows loading — disable double-submit; keep cancel available unless operation must complete.' ],
        ['Error in dialog', 'Inline alert inside body when server rejects confirmation — do not close dialog silently.' ],
      ],
    },
    dosDonts: {
      do: [
        'Name the affected object in title and body ("Delete scenario Q4 Baseline?").',
        'Place cancel/secondary action as safe default focus for destructive dialogs.',
        'Use danger variant styling only when action is destructive — not for neutral confirmations.',
      ],
      dont: [
        'Stack multiple Alert Dialogs — queue or merge messages instead.',
        'Use Alert Dialog for non-blocking info — use Banner Alert or Toast.',
        'Make backdrop click dismiss destructive dialogs without explicit cancel — accidental dismiss risks wrong assumption.',
      ],
    },
    usage: {
      when: [
        'Destructive or irreversible operations (delete, revoke, reset).',
        'Abandoning unsaved work with data loss risk.',
        'Legal or compliance acknowledgment before proceeding.',
      ],
      whenNot: [
        'Routine navigation — use unsaved inline banner with save action instead when possible.',
        'Complex multi-field input — use Drawer or full page modal form.',
        'Non-blocking status updates — use Toast.',
      ],
      scenarios: [
        { title: 'Delete scenario', desc: 'Danger dialog names scenario, warns dependent plans affected, Cancel focused by default.' },
        { title: 'Unsaved changes', desc: 'Warning dialog on route leave: Save, Discard, Cancel with Save as primary but not pre-selected focus.' },
        { title: 'Bulk revoke', desc: 'Body states count ("Revoke access for 12 users") — confirm requires explicit click, no shortcut key binding.' },
      ],
      bestPractices: [
        'Limit primary action label to verb + object ("Delete scenario") — avoid vague "OK" on destructive flows.',
        'Keep body copy scannable: one short paragraph plus bullet list of consequences when needed.',
        'After confirm success, close dialog and show Toast confirmation — do not stack another dialog.',
      ],
    },
    a11y: {
      roles: [
        'role="alertdialog" for confirmations requiring response — or role="dialog" with aria-modal true when pattern aligns.',
        'aria-labelledby pointing to title id; aria-describedby pointing to body text.',
      ],
      focus: [
        'Focus trap: Tab cycles within dialog only while open.',
        'Initial focus on least destructive button for danger dialogs (Cancel) unless legal ack requires OK focus.',
        'Restore focus to triggering element on close.',
      ],
      keyboard: [
        { key: 'Tab / Shift+Tab', action: 'Cycle focus among dialog controls — trapped.' },
        { key: 'Escape', action: 'Cancel/close when ESC dismissal enabled — disable for critical ack-only dialogs if policy requires.' },
        { key: 'Enter', action: 'Must not auto-trigger destructive confirm without explicit focus on confirm button.' },
      ],
      aria: [
        { attr: 'aria-modal="true"', when: 'Background content inert while dialog open.' },
        { attr: 'aria-labelledby', when: 'References visible dialog title element.' },
        { attr: 'aria-describedby', when: 'References body text explaining consequences.' },
      ],
      screenReaders: [
        'Dialog open should announce title and description on entry.',
        'Loading state on confirm button uses aria-busy or disabled with aria-live status for result.',
      ],
      dosDonts: {
        do: [
          'Implement focus trap and restoration — non-negotiable for modal dialogs.',
          'Use alertdialog role for interruptive confirmations per WAI-ARIA.',
        ],
        dont: [
          'Auto-focus destructive confirm button — mis-clicks have real cost.',
          'Leave background focusable — breaks modal semantics and WCAG 2.4.3.',
        ],
      },
    },
  },

  accordion: {
    purpose: [
      'Accordion organizes content into stacked collapsible sections so users scan headings at a glance and expand only what they need. It reduces vertical scroll and cognitive load when one or few sections matter at a time — FAQs, filter groups, settings categories, and dense documentation.',
      'Each section pairs a persistent header (always visible) with a panel (shown on demand). Headers must represent independent topics; panel content should stand alone once expanded without requiring other sections open.',
    ],
    anatomy: {
      paragraphs: [
        'An accordion group is a vertical stack of items separated by dividers. Each item header is a button controlling its panel visibility.',
      ],
      parts: [
        { name: 'Header button', desc: 'Full-width clickable region with title text and expand indicator (chevron). Implemented as button, not div.' },
        { name: 'Leading icon / metadata', desc: 'Optional icon, badge, or count reinforcing section topic — must not replace title text.' },
        { name: 'Expand indicator', desc: 'Chevron rotation reflects state — motion plus aria-expanded, not color alone.' },
        { name: 'Panel region', desc: 'Content container revealed on expand; id referenced by header aria-controls.' },
      ],
    },
    behavior: [
      { name: 'Single expand', desc: 'Opening one panel closes others. Best for FAQs and settings where only one section needs focus at a time and vertical space is limited.' },
      { name: 'Multiple expand', desc: 'Panels open and close independently. Use when users compare content across sections or need several open while configuring related options.' },
    ],
    variants: {
      intro: 'Visual variants align accordion with surrounding surface density.',
      rows: [
        ['Default bordered', 'Dividers between items on white or gray surfaces — standard settings panels.'],
        ['Flush / embedded', 'No outer border — sits inside Drawer or Side Panel content.' ],
        ['Compact', 'Reduced header padding for filter sidebars with many sections.' ],
      ],
    },
    states: {
      intro: 'Each item and the group expose expansion and availability states.',
      rows: [
        ['Collapsed', 'Default — panel hidden from view and removed from tab order; header shows closed chevron.' ],
        ['Expanded', 'Panel visible; chevron rotated; header aria-expanded true.' ],
        ['Disabled', 'Header non-interactive — use when section unavailable; explain in header suffix or tooltip.' ],
        ['Loading panel', 'Skeleton inside panel on first expand while async content loads.' ],
      ],
    },
    dosDonts: {
      do: [
        'Write header titles as clear nouns or questions users would scan for.',
        'Default-expand the section most users need on first visit.',
        'Keep panel content focused — if a section needs tabs inside, reconsider IA.',
      ],
      dont: [
        'Nest accordions more than one level deep — flatten hierarchy or use Tree.',
        'Hide required form fields exclusively inside collapsed panels without error summary.',
        'Use accordion for primary page navigation — use Tree or sidebar nav.',
      ],
    },
    usage: {
      when: [
        'Grouped optional detail where users need one section at a time (FAQ, advanced settings).',
        'Filter panels with multiple independent categories.',
        'Mobile-friendly compression of long policy or help text.',
      ],
      whenNot: [
        'All content equally important and short — use single scroll page.',
        'Sequential required steps — use Stepper.',
        'Real-time comparison across all sections — avoid single-expand mode.',
      ],
      scenarios: [
        { title: 'Settings groups', desc: 'Single-expand accordion for Notifications, Security, Appearance — one category edited at a time.' },
        { title: 'Advanced filters', desc: 'Multiple-expand accordion in grid sidebar — users open Date, Region, and Status simultaneously.' },
        { title: 'FAQ', desc: 'Single-expand FAQ on support page — question headers, answers in panels.' },
      ],
      bestPractices: [
        'Choose single vs multiple expand based on whether cross-section comparison is a task — document the choice in design specs.',
        'Animate panel open with height transition respecting prefers-reduced-motion.',
        'When a panel contains forms, validate on submit — expanding invalid section on error.',
      ],
      layout: [
        'Full-width within container — headers span readable line length.',
        'Minimum 48px header height for touch targets in mobile filter drawers.',
      ],
    },
    a11y: {
      roles: [
        'Header: button element (or role="button" with keyboard support — native button preferred).',
        'Optional grouping container with heading elements for each section title — preserve heading hierarchy.',
      ],
      focus: [
        'Tab moves through headers; expanded panel content follows in tab order.',
        'Optional arrow-key navigation between headers when aria-orientation vertical accordion pattern enabled.',
        'Focus remains on header after toggle unless moving into panel is intentional.',
      ],
      keyboard: [
        { key: 'Enter / Space', action: 'Toggle focused panel header open or closed.' },
        { key: 'ArrowDown / ArrowUp', action: 'Move focus between headers when header navigation enabled.' },
        { key: 'Home / End', action: 'Focus first or last header in the set.' },
        { key: 'Tab', action: 'Enter expanded panel content, then continue page tab order.' },
      ],
      aria: [
        { attr: 'aria-expanded', when: 'On each header — true when its panel open.' },
        { attr: 'aria-controls', when: 'On header — id of associated panel element.' },
        { attr: 'aria-disabled', when: 'On header when section cannot be opened.' },
        { attr: 'aria-labelledby', when: 'On panel referencing header id when header text is section title.' },
      ],
      screenReaders: [
        'Announce expanded/collapsed state on toggle — aria-expanded change is sufficient when button name is clear.',
        'Do not hide panel content with display:none without also removing from focus order.',
      ],
      dosDonts: {
        do: [
          'Wire every header to its panel with matching id and aria-controls.',
          'Use button elements for headers — automatic Space/Enter handling.',
        ],
        dont: [
          'Use heading click on div without button semantics — fails keyboard and SR.',
          'Collapse panel while focus is inside without moving focus to header — focus loss bug.',
        ],
      },
    },
  },
}
