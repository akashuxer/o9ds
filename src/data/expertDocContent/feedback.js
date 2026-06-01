/** @typedef {import('./index').ExpertDocContent} ExpertDocContent */

/** @type {Record<string, ExpertDocContent>} */
export const FEEDBACK_EXPERT_DOC = {
  badge: {
    purpose: [
      'Badge Alert is a compact, inline status indicator for short contextual messages that need to stay visible next to the content they describe. It communicates system state, validation summaries, quota notices, and workflow status without occupying full page width.',
      'Unlike Banner Alert, Badge Alert is self-contained with its own background or border and fits inline in toolbars, table headers, card footers, and dense B2B layouts. Unlike Toast, it is persistent — it does not auto-dismiss and is not portaled to an overlay stack.',
      'Use Badge Alert when the message is tied to a specific region or object and should remain readable while the user continues working in that area.',
    ],
    anatomy: {
      paragraphs: [
        'Badge Alert renders as a horizontal inline-flex row. All parts share a single semantic type that drives icon glyph, text color, and surface treatment.',
      ],
      parts: [
        { name: 'Container', desc: 'The root inline-flex surface. Applies variant (primary filled or outline bordered) and size modifiers.' },
        { name: 'Status icon (optional)', desc: 'Leading o9con glyph determined by type. Decorative — hidden from assistive technology via aria-hidden. Can be suppressed with hasIcon=false or overridden with a custom icon name.' },
        { name: 'Message (required)', desc: 'Short status text. Truncates with ellipsis when maxWidth is set.' },
      ],
    },
    variants: {
      intro: 'Badge Alert exposes two visual weights (primary and outline) and six semantic types. The four core feedback tones — info, success, warning, and danger — cover most B2B scenarios. Neutral and block extend the vocabulary for announcements and hard-stop states.',
      columns: ['Type / variant', 'Use when'],
      rows: [
        ['Info', 'Neutral guidance, tips, or contextual notes that do not require immediate action.'],
        ['Success (positive)', 'Completed actions, saved state, or confirmed outcomes adjacent to the affected content.'],
        ['Warning', 'Approaching limits, degraded performance, expiring sessions, or reversible risk.'],
        ['Danger (negative)', 'Failed operations, data loss risk, or errors that need attention but are not page-blocking.'],
        ['Neutral', 'Informational announcements without a strong positive or negative valence — maintenance notices, feature flags.'],
        ['Block', 'Hard-stop states where the user cannot proceed — permission denied, locked records, policy blocks.'],
        ['Primary (visual variant)', 'Default filled surface on layer-04 background. Best when the badge must stand out against white or gray content areas.'],
        ['Outline (visual variant)', 'Layer-01 background with a 1px divider border. Best on tinted surfaces or when multiple badges sit close together.'],
      ],
    },
    states: {
      intro: 'Badge Alert is a static, non-interactive component by default. Its visible state is determined by type, variant, and size — there are no hover or focus states on the badge itself.',
      rows: [
        ['Default', 'Visible with type-appropriate icon, text color, and surface treatment.'],
        ['Icon hidden', 'Message-only mode when hasIcon is false — use sparingly; the icon reinforces semantic meaning.'],
        ['Truncated', 'When maxWidth is set, overflowing message text ellipsizes. Provide full text via aria-label if truncation hides meaning.'],
        ['Dynamic update', 'When message or type changes programmatically, the live region re-announces based on role (status or alert).'],
      ],
    },
    sizes: {
      intro: 'Two sizes align Badge Alert with surrounding density. Match badge size to adjacent controls and typography.',
      columns: ['Size', 'Height', 'Use when'],
      rows: [
        ['sm', '20px', 'Table headers, compact toolbars, inline metadata rows, and high-density grids.'],
        ['lg (default)', '24px', 'Standard page content, card footers, form sections, and widget headers.'],
      ],
    },
    contentGuidelines: {
      intro: 'Badge Alert copy must be scannable in a single glance. Users encounter badges while performing other tasks — keep messages short, specific, and action-oriented when a next step exists.',
      good: [
        '3 items failed validation',
        'Saved',
        'Session expires in 5 min',
        'Read-only until 03:00 UTC',
        'Sync paused — retrying',
      ],
      avoid: [
        'Error: An unexpected error occurred while attempting to save your changes. Please try again later.',
        'Warning!!!',
        'Click here for more info',
        'Status: OK',
        'Something went wrong',
      ],
    },
    dosDonts: {
      do: [
        'Keep messages to one short sentence or a compact phrase (ideally under 60 characters).',
        'Pick the semantic type by user impact — not by which color you prefer.',
        'Place the badge adjacent to the content or control it describes.',
        'Use outline variant when the badge sits on a tinted or layered background.',
        'Set maxWidth in constrained layouts and provide aria-label when truncation is likely.',
        'Use role="alert" only for critical errors that require immediate attention.',
      ],
      dont: [
        'Use Badge Alert for page-wide system messages — use Banner Alert.',
        'Use Badge Alert for transient post-action confirmations — use Toast.',
        'Stack multiple badges in the same row without grouping related messages.',
        'Rely on color alone — the icon and message text must convey meaning.',
        'Write paragraph-length copy inside a badge.',
        'Use danger type for non-error emphasis.',
      ],
    },
    hasLiveDemo: true,
    usage: {
      when: [
        'Inline status next to a widget title, table column, or card header.',
        'Compact validation summaries above a form section (e.g., "2 fields need attention").',
        'Quota, license, or plan-limit indicators in admin views.',
        'Workflow state labels (Draft, Pending approval, Syncing) that update in place.',
        'System notices in toolbars where a full-width banner would break layout.',
      ],
      whenNot: [
        'Per-field validation errors below an input — use Message Alert via the field component errorMsg prop.',
        'Persistent page-level announcements — use Banner Alert.',
        'Ephemeral confirmations after Save or Send — use Toast.',
        'Decisions that require user confirmation — use Alert Dialog.',
        'Long explanatory content with links — use Banner Alert with a title and link.',
      ],
      scenarios: [
        { title: 'Widget header status', desc: 'Place a success Badge Alert next to the widget title after a refresh completes ("Updated 2 min ago"). Use info for stale-data warnings.' },
        { title: 'Form section summary', desc: 'When multiple fields fail validation, show one danger Badge Alert above the section listing the count, with per-field Message Alerts below each input.' },
        { title: 'Table row metadata', desc: 'Use sm size outline badges in status columns — success for Active, warning for Pending, danger for Failed.' },
        { title: 'Permission indicator', desc: 'Use block type when the user lacks access to an action; pair with disabled controls rather than hiding them without explanation.' },
      ],
      bestPractices: [
        'One badge per logical status — combine related facts into a single message.',
        'Update badge type and message together when state transitions (e.g., warning to danger as quota fills).',
        'In dark mode, rely on design tokens — do not override colors for contrast.',
        'When the badge appears dynamically, ensure role matches urgency so screen readers announce appropriately.',
        'Prefer lg size unless space is genuinely constrained — sm reduces readability for longer phrases.',
      ],
      layout: [
        'Align badges to the start of the content they describe — trailing placement is acceptable in table cells.',
        'Leave at least 8px gap between a badge and adjacent interactive controls.',
        'Do not center badges in full-width containers unless the entire region is the subject.',
        'In flex rows, allow the badge to shrink (maxWidth) rather than wrapping to multiple lines.',
      ],
    },
    a11y: {
      roles: [
        'Default role is role="status" (implicit aria-live="polite") for non-urgent feedback — info, success, neutral, and warning types.',
        'Set role="alert" (implicit aria-live="assertive") for critical errors that require immediate attention.',
        'Badge Alert is not focusable — it does not participate in tab order.',
        'The status icon is decorative; meaning is conveyed by the message text and role.',
      ],
      focus: [
        'Badge Alert does not receive focus — there are no interactive elements inside the default component.',
        'If a badge is placed inside a focusable container, ensure the container accessible name is not duplicated by the badge live region.',
      ],
      keyboard: [],
      aria: [
        { attr: 'role="status"', when: 'Default for positive, info, neutral, and warning types — announces when the user is idle.' },
        { attr: 'role="alert"', when: 'For negative and block types, or when explicitly set for critical messages.' },
        { attr: 'aria-label', when: 'When the visible message is abbreviated or icon-only context is insufficient — provide the full descriptive text.' },
        { attr: 'aria-hidden="true"', when: 'Applied to the decorative status icon element.' },
      ],
      screenReaders: [
        'When the badge mounts or its message changes, the live region announces the full message text.',
        'Polite (status) announcements wait for the user to finish current speech; assertive (alert) interrupts.',
        'Do not mount multiple assertive badges simultaneously — users will hear overlapping announcements.',
        'If the badge replaces visible text elsewhere, remove redundant live regions to avoid duplicate announcements.',
      ],
      dosDonts: {
        do: [
          'Use role="alert" sparingly — reserve for errors the user must address before continuing.',
          'Provide aria-label when maxWidth truncation may hide critical details.',
          'Keep message text human-readable — it is what screen readers announce.',
        ],
        dont: [
          'Add redundant aria-live regions on parent containers when Badge Alert already has a role.',
          'Use role="alert" for informational updates that are not urgent.',
          'Hide the message visually and rely only on aria-label — sighted users need the text too.',
        ],
      },
    },
  },

  'banner-alerts': {
    purpose: [
      'Banner Alert delivers persistent, full-width contextual feedback at the page, panel, or section level. It keeps important messages visible until the user reads them, dismisses them, or the underlying condition resolves.',
      'Banner Alert occupies the full width of its container with a colored left border, type-specific background tint, leading icon, and a content area for title, message, and optional link. It is the right choice when the message affects the entire view or workflow — not just a single field or widget.',
      'Compared to Toast, Banner Alert does not auto-dismiss and is not portaled to an overlay stack. Compared to Badge Alert, it supports richer copy (title + message + link) and higher visual prominence. It also appears in the panel-shell banner slot inside Side Panel and Drawer.',
    ],
    anatomy: {
      paragraphs: [
        'Banner Alert is a horizontal bar anchored to the top of its container. Interactive elements (link, close button) sit at the trailing edge in default layout mode.',
      ],
      parts: [
        { name: 'Left border', desc: '2px accent strip colored by semantic type — the primary visual anchor.' },
        { name: 'Status icon', desc: 'Leading o9con glyph aligned to the top of the content area. Decorative (aria-hidden).' },
        { name: 'Content area', desc: 'Flex column containing copy and optional link in default mode; message only in compact mode.' },
        { name: 'Title (optional)', desc: 'Medium-weight headline, single-line truncated. Omitted in compact mode.' },
        { name: 'Message (required)', desc: 'Body copy in secondary text color. Multi-line in default mode; single-line truncated in compact mode.' },
        { name: 'Link (optional)', desc: 'Configured Link component for a next step — "View status", "Learn more", "Upgrade plan". Omitted in compact mode.' },
        { name: 'Close button (optional)', desc: '16px dismiss control when isDismissible is true. Fires onDismiss and bnr-alert:dismiss — consumer removes the banner.' },
      ],
    },
    variants: {
      intro: 'Six semantic types share the same anatomy. The four core tones — info, success, warning, and danger — map to operational feedback. Block indicates a hard stop. Layout mode (default vs compact) is independent of type.',
      columns: ['Type', 'Use when'],
      rows: [
        ['Info', 'System updates, feature announcements, non-urgent guidance affecting the current view.'],
        ['Success (positive)', 'Persistent confirmation after navigation — "Plan saved", "Export complete".'],
        ['Warning', 'Degraded service, approaching quotas, expiring credentials, reversible risk.'],
        ['Danger (negative)', 'Connection failures, save errors, or data issues that block part of the workflow.'],
        ['Neutral', 'Scheduled maintenance, read-only windows, policy notices without strong valence.'],
        ['Block', 'Permission denied, policy enforcement, or actions the user cannot take in this context.'],
        ['Default layout', 'Title + multi-line message + optional link. 16px vertical padding. Standard page-level alerts.'],
        ['Compact layout (isCompact)', 'Message only, tighter padding. Panel-shell banner slot, Side Panel, Drawer headers.'],
      ],
    },
    states: {
      intro: 'Banner Alert persists until dismissed or removed programmatically. Loading state temporarily blocks interaction.',
      rows: [
        ['Visible (default)', 'Banner is rendered and readable. Negative and block types use assertive live regions by default.'],
        ['Dismissible', 'Close button visible; clicking fires onDismiss — consumer must remove the element from DOM or state.'],
        ['Non-dismissible', 'No close button — use when the condition must remain visible (e.g., read-only mode enforced by policy).'],
        ['Loading', 'Pattern A shimmer overlay covers the banner; pointer-events suppressed; aria-busy="true".'],
        ['Dismissed', 'Consumer handles removal after dismiss event — the component does not self-destruct.'],
      ],
    },
    contentGuidelines: {
      intro: 'Banner copy follows a title + message + action pattern. The title states what happened; the message explains impact and next steps; the link provides the primary recovery or learn-more path.',
      good: [
        'Title: Connection lost — Message: We cannot reach the planning server. Check your network or view system status.',
        'Title: Plan saved — Message: Your changes are live for all collaborators.',
        'Title: Read-only mode — Message: Editing is disabled until maintenance completes at 03:00 UTC.',
        'Link label: View status',
        'Link label: Upgrade plan',
      ],
      avoid: [
        'Title: Error — Message: Something went wrong.',
        'Title: Warning!!! — Message: Please be advised that...',
        'Burying the action inside the message paragraph instead of a link.',
        'Stacking three banners each saying a variant of the same outage message.',
        'Using danger type for informational release notes.',
      ],
    },
    dosDonts: {
      do: [
        'Place one banner per page or panel region — combine related messages.',
        'Lead with the title (what happened), then the message (impact + next step).',
        'Pair negative and block banners with a clear link to recovery or support.',
        'Use compact mode inside Side Panel, Drawer, and other constrained surfaces.',
        'Persist dismissal at the correct scope (session, user preference, release version).',
        'Use non-dismissible mode when ignoring the banner would cause data loss or policy violation.',
      ],
      dont: [
        'Stack three or more banners — merge into one or show only the most critical.',
        'Use Banner Alert for transient Save confirmations — use Toast.',
        'Use Banner Alert for per-field validation — use Message Alert.',
        'Replace Alert Dialog with a dismissible danger banner for destructive confirmations.',
        'Place banners inside scrollable content where they scroll out of view.',
        'Auto-remove negative banners on a timer — errors must stay until resolved or dismissed.',
      ],
    },
    hasLiveDemo: true,
    usage: {
      when: [
        'Page-level system messages — incidents, scheduled maintenance, version mismatches.',
        'Persistent confirmations after navigation (e.g., "Plan saved" on the planning view).',
        'Blocked workflows that need explanation and a next step.',
        'Quota, license, or expiry warnings that should stay visible until acted upon.',
        'Panel-level status in Side Panel or Drawer via the panel-shell banner slot.',
      ],
      whenNot: [
        'Transient feedback after a button click — use Toast.',
        'Inline form-field validation — use Message Alert via the field errorMsg prop.',
        'Compact status next to a label or table cell — use Badge Alert.',
        'Decisions requiring explicit Confirm/Cancel — use Alert Dialog.',
        'Loading placeholders — use Skeleton Loader or component-level loading state.',
      ],
      scenarios: [
        { title: 'Page header banner', desc: 'Render directly below PageHeader, above primary content. One banner maximum. Use info for releases, warning for degraded service, danger for outage.' },
        { title: 'Side Panel compact banner', desc: 'Use isCompact inside the panel-shell __banner slot. Message-only copy — no title or link unless space allows default mode.' },
        { title: 'Post-save persistence', desc: 'After navigating away from a form, show a success banner on the destination page so the user knows the save succeeded even after context switch.' },
        { title: 'Blocked publish workflow', desc: 'Use block type with title "Cannot publish", message explaining the policy, and a link to request access or view documentation.' },
      ],
      bestPractices: [
        'Default role resolution already picks polite vs assertive — override role only when the default mismatches urgency.',
        'When dismissing, store preference server-side if the message should not reappear every session.',
        'For loading banners, show them only while verifying status — replace with the resolved type when the check completes.',
        'Keep title under ~50 characters; message can be two to three lines in default mode.',
        'Ensure the link destination opens in the same tab unless external documentation warrants a new tab.',
      ],
      layout: [
        'Page level: directly under the page header, above primary content — full container width.',
        'Panel level: pinned to the top of the panel above the scroll area — prefer compact mode.',
        'Never nest banners inside cards that scroll independently — the banner should not scroll away.',
        'Maintain 16px spacing below the banner before primary content begins.',
      ],
    },
    a11y: {
      roles: [
        'role="status" (polite) for positive, info, neutral, and warning types — announces when idle.',
        'role="alert" (assertive) for negative and block types — interrupts to signal urgency.',
        'role prop accepts "auto" (default) to resolve from type, or explicit "status" / "alert" override.',
        'The icon is decorative — title and message convey meaning to all users.',
      ],
      focus: [
        'Tab moves focus to the link (if present), then to the close button (if dismissible).',
        'The banner root is not focusable — focus lands on interactive children only.',
        'Close button shows a visible :focus-visible ring for keyboard users.',
        'Do not trap focus inside the banner — it is not a modal.',
      ],
      keyboard: [
        { key: 'Tab', action: 'Moves focus to the link (if present), then to the close button (if dismissible).' },
        { key: 'Shift+Tab', action: 'Moves focus backward through link and close button.' },
        { key: 'Enter', action: 'Activates the focused link or close button.' },
        { key: 'Space', action: 'Activates the focused close button.' },
      ],
      aria: [
        { attr: 'role="status" / role="alert"', when: 'Set automatically from type when role is "auto". Override via role prop when needed.' },
        { attr: 'aria-live (implicit)', when: 'Polite for status, assertive for alert — derived from role.' },
        { attr: 'aria-busy="true"', when: 'During isLoading — indicates content is not yet final.' },
        { attr: 'aria-hidden="true"', when: 'On the decorative status icon.' },
        { attr: 'aria-label="Dismiss alert"', when: 'On the close button when no visible text label is present.' },
      ],
      screenReaders: [
        'On mount, the entire banner content (title + message) is announced based on live region politeness.',
        'Dynamic message updates re-announce — avoid rapid type/message churn that causes announcement fatigue.',
        'The link is a separate focusable control with its own accessible name — do not duplicate link text in the message.',
        'Loading state sets aria-busy — screen readers may suppress partial announcements until loading completes.',
      ],
      keyboardCallout: 'Banner Alert is not modal — users can Tab past it into page content. Only the link and close button are in the tab order.',
      ariaIntro: 'Banner Alert uses implicit live regions via role. Avoid adding redundant aria-live on parent containers.',
      dosDonts: {
        do: [
          'Keep one assertive banner visible at a time to prevent announcement collisions.',
          'Provide a descriptive link label — not "Click here".',
          'Use aria-busy during loading so assistive tech knows content is provisional.',
        ],
        dont: [
          'Nest another live region inside the banner message text.',
          'Use role="alert" for informational release notes.',
          'Remove the close button without providing another way to dismiss for keyboard users when isDismissible is true.',
        ],
      },
    },
  },

  'inline-alert': {
    purpose: [
      'Message Alert is the atomic status primitive for compact icon + message rows across the o9 platform. It renders below form fields for validation, inside panel info slots, beside selection controls, and as an in-field error icon when isInline is true.',
      'One component, two display modes: full mode (icon + message + optional dismiss) for below-field and panel contexts; inline mode (icon only, 16×16) for in-field tooltip errors on Textbox, Search, Select, Combobox, and similar inputs.',
      'Message Alert deliberately uses error (not negative) as its danger type to match form-validation vocabulary. For page-level feedback, use Banner Alert or Toast instead.',
    ],
    anatomy: {
      paragraphs: [
        'In full mode, the icon and message sit inside a __body wrapper so an optional dismiss button can align at the trailing edge without breaking icon-to-message spacing.',
      ],
      parts: [
        { name: 'Status icon', desc: '16×16 o9con glyph driven by type modifier. Always rendered; aria-hidden. In inline mode, this is the only visible element.' },
        { name: 'Message', desc: 'Alert text in full mode. Wraps naturally on long validation copy. Not rendered when isInline is true — but mirrored to aria-label for assistive tech.' },
        { name: 'Body wrapper', desc: 'Flex row around icon + message in full mode. Provides flex: 1 so the dismiss button aligns correctly.' },
        { name: 'Dismiss button (optional)', desc: 'Secondary sm Button labeled "Close" when isDismissable is true and isInline is false. Does not auto-remove — consumer controls visibility.' },
      ],
    },
    variants: {
      intro: 'Six semantic types drive icon and color. The four core tones — error (danger), success, warning, and info — cover validation and status. Block indicates hard stops; neutral handles low-emphasis announcements.',
      columns: ['Type', 'Use when'],
      rows: [
        ['Error', 'Validation failures, missing required fields, format mismatches, failed saves tied to a specific field or group.'],
        ['Success', 'Inline confirmation near a field or control — "Saved", "Verified", "Copied".'],
        ['Warning', 'Non-blocking cautions — approaching character limit, deprecated value, soft quota notice.'],
        ['Info', 'Supplementary context — "24 matching results", "Optional field", panel info slot counts.'],
        ['Neutral', 'Low-emphasis announcements — "No new activity", generic notices without strong valence.'],
        ['Block', 'Permission or policy blocks tied to a specific control group — "You cannot edit this record".'],
        ['Full mode (default)', 'Icon + message + optional dismiss. Below-field validation, panel __info slot, selection-control errors.'],
        ['Inline mode (isInline)', 'Icon-only 16×16. In-field error icon when errorDisplay is "tooltip" on form inputs.'],
      ],
    },
    states: {
      intro: 'Message Alert is static except for the optional dismiss interaction. Type and mode determine color, icon, and live-region behavior.',
      rows: [
        ['Full + default', 'Icon and message visible; no dismiss button. Standard below-field validation.' ],
        ['Full + dismissable', 'Close button visible at trailing edge; fires msg-alert:dismiss and onDismiss.' ],
        ['Inline', 'Icon only; message stored in aria-label for screen readers; used inside field chrome.' ],
        ['Hidden', 'Consumer removes from DOM or stops rendering — common after validation passes.' ],
        ['Custom icon override', 'Consumer icon replaces type-default glyph; color still follows type modifier.' ],
      ],
    },
    contentGuidelines: {
      intro: 'Validation messages must tell the user what is wrong and how to fix it. Prefer specific, field-level copy over generic errors. In inline mode, the message is not visible but must still be complete — it powers aria-label.',
      good: [
        'Enter an email address in the format name@company.com',
        'Password must be at least 8 characters',
        'Select at least one region',
        'End date must be after start date',
        'Saved',
      ],
      avoid: [
        'Invalid input',
        'Error',
        'Required',
        'This field is wrong',
        'Please fix the errors below',
      ],
    },
    dosDonts: {
      do: [
        'Pass a stable id and wire aria-describedby from the related field — form inputs do this automatically via errorMsg.',
        'In inline mode, always pass the full message string even though only the icon shows.',
        'Use one message per field — collapse multiple rules into the most actionable error.',
        'Pick type by intent: error for blocking validation, warning for soft limits, info for supplementary context.',
        'Use dismissable mode only when the user can meaningfully dismiss without fixing the underlying issue.',
      ],
      dont: [
        'Stack multiple Message Alerts under one field — show one combined message.',
        'Use Message Alert for page-level system outages — use Banner Alert.',
        'Use inline mode with visible message text — that is what full mode is for.',
        'Instantiate Message Alert manually for standard field validation — use the field errorMsg prop.',
        'Use success type for page-level save confirmation — use Toast or Banner Alert.',
        'Omit the message in inline mode — screen readers lose all context.',
      ],
    },
    hasLiveDemo: true,
    usage: {
      when: [
        'Form-field validation errors rendered below Textbox, Textarea, Number Input, Search, Select, or Combobox.',
        'In-field tooltip error icons (inline mode) when errorDisplay is "tooltip".',
        'Panel info slot (info type, role="status") inside Side Panel or Drawer headers.',
        'Selection-control errors below Checkbox, Radio, or Group components.',
        'Dismissable inline info rows that are not page-level.',
        'Block type when a specific control group cannot proceed due to permissions.',
      ],
      whenNot: [
        'Page- or section-level persistent feedback — use Banner Alert.',
        'Transient post-action confirmations — use Toast.',
        'Compact inline status badges in toolbars — use Badge Alert.',
        'Modal decisions — use Alert Dialog.',
        'Loading states — use Skeleton Loader or component isLoading.',
      ],
      scenarios: [
        { title: 'Below-field validation', desc: 'Textbox errorMsg prop renders Message Alert automatically, sets aria-invalid on the input, and wires aria-describedby. You rarely instantiate Message Alert directly for this case.' },
        { title: 'Tooltip error icon', desc: 'When errorDisplay is "tooltip", the field renders Message Alert with isInline=true inside the field chrome. Hover/focus shows Tooltip with the message; aria-label carries the text for screen readers.' },
        { title: 'Panel info row', desc: 'Side Panel __info slot renders info type with role="status" — e.g., "24 filters applied". Non-assertive; updates when filter count changes.' },
        { title: 'Checkbox group error', desc: 'When no option is selected, show one error Message Alert below the group (not under each checkbox) with id referenced by aria-describedby on the group container.' },
      ],
      bestPractices: [
        'Validate on blur or submit — not on every keystroke — to avoid announcement fatigue.',
        'When the error clears, remove the Message Alert and aria-invalid in the same render cycle.',
        'For inline icons, ensure Tooltip content matches the message prop exactly.',
        'Use ARVO_MSG_ALERT_DEFAULT_ERROR constant when surfacing generic failures — then replace with specific copy when known.',
        'Override role only when auto-resolution (error/warning/block → alert) mismatches the real urgency.',
      ],
      layout: [
        'Below-field: 4px gap between field bottom and alert top — handled by form-input patterns.',
        'Inline icon: positioned inside the field trailing area — do not overlap the input text.',
        'Panel info slot: full width of the info row, left-aligned icon + message.',
        'Dismiss button: trailing edge of the row; message wraps without pushing the button off-screen.',
      ],
    },
    a11y: {
      roles: [
        'error, warning, and block types → role="alert" (assertive) by default.',
        'info, success, and neutral types → role="status" (polite) by default.',
        'role="auto" (default) resolves from type; pass role explicitly to override.',
        'Role applies in both full and inline modes — inline icons are not exempt from live-region behavior.',
      ],
      focus: [
        'Full non-dismissable mode: nothing in the alert is focusable — Tab skips it.',
        'Dismissable full mode: Tab reaches the Close button after the associated field in natural document order.',
        'Inline mode: the icon is not independently focusable — the parent field receives focus; Tooltip provides hover/focus discovery for sighted users.',
      ],
      keyboard: [
        { key: 'Tab', action: 'In dismissable full mode, moves focus to the Close button after preceding content.' },
        { key: 'Enter / Space', action: 'Activates the focused Close button in dismissable full mode.' },
      ],
      aria: [
        { attr: 'role="alert"', when: 'Auto-set for error, warning, and block types — assertive announcement.' },
        { attr: 'role="status"', when: 'Auto-set for info, success, and neutral types — polite announcement.' },
        { attr: 'aria-label', when: 'In inline mode, mirrors the message prop so icon-only display remains accessible.' },
        { attr: 'aria-hidden="true"', when: 'On the decorative status icon — message or aria-label carries meaning.' },
        { attr: 'id', when: 'Stable id referenced by the related field aria-describedby — critical for below-field validation.' },
        { attr: 'aria-describedby (on field)', when: 'Form inputs set this to the Message Alert id when errorMsg is present.' },
        { attr: 'aria-invalid (on field)', when: 'Form inputs set to true when error type Message Alert is shown.' },
      ],
      screenReaders: [
        'When validation fails, the assertive alert interrupts with the error message — announce once per failure, not per keystroke.',
        'In inline mode, focus on the field exposes the error via aria-invalid and aria-describedby/aria-label — test with NVDA and VoiceOver.',
        'Clearing the error must remove aria-invalid and the describedby reference in the same update.',
        'Do not mount multiple assertive alerts simultaneously under one form — validate holistically on submit when possible.',
      ],
      ariaIntro: 'Message Alert is the accessible surface behind form validation. Prefer wiring through field errorMsg rather than manual aria attributes.',
      dosDonts: {
        do: [
          'Pass id + errorMsg through field components — let them wire aria-describedby.',
          'Keep inline mode message text identical to Tooltip content.',
          'Remove the alert from DOM when validation passes.',
        ],
        dont: [
          'Set aria-live on the parent form when Message Alert already uses role="alert".',
          'Use inline mode without a message — aria-label will be empty.',
          'Leave aria-invalid=true after the error is resolved.',
        ],
      },
    },
  },

  toast: {
    purpose: [
      'Toast provides lightweight, non-blocking overlay feedback for confirmations and status updates that should not interrupt the user\'s current task. Toasts stack in a managed container (default top-right), auto-dismiss for non-critical types, and sit above page content without seizing focus.',
      'Use Toast when the user triggered an action and needs brief confirmation — Saved, Sent, Copied — or when a background process completes. The Toast manager handles stacking, z-index, timing, and removal; consumers only push messages.',
      'Negative and block toasts never auto-dismiss — they require explicit dismissal because they signal failures or blocked operations the user must acknowledge.',
    ],
    anatomy: {
      paragraphs: [
        'Each toast is a self-contained card in the overlay hub (z-index band 1300–1399). New toasts insert at the top of the stack, pushing older toasts down.',
      ],
      parts: [
        { name: 'Left border', desc: 'Type-colored accent strip matching Banner Alert vocabulary.' },
        { name: 'Status icon', desc: 'Leading o9con glyph per type. aria-hidden. Overridable for neutral type.' },
        { name: 'Content area', desc: 'Flex column with optional title, required message, and optional link.' },
        { name: 'Title (optional)', desc: 'Medium-weight, type-colored, truncated at two lines. Use widget or report name in multi-widget views.' },
        { name: 'Message (required)', desc: 'Secondary body text describing the outcome or detail.' },
        { name: 'Link (optional)', desc: 'Configured Link for follow-up action — "Undo", "View log", "Retry".' },
        { name: 'Close button', desc: 'Always visible 16×16 control. Fires toast:close with reason click, escape, fade, or programmatic.' },
      ],
    },
    variants: {
      intro: 'Six semantic types control color and dismiss behavior. The four core tones — info, success, warning, and danger — cover operational feedback. fadeAway defaults to true for all types except negative and block.',
      columns: ['Type', 'Use when'],
      rows: [
        ['Info', 'Background updates, sync status, non-urgent system notices with optional action link.'],
        ['Success (positive)', 'Completed actions — saved, sent, exported, copied — that do not need persistent page presence.'],
        ['Warning', 'Reversible issues — "Some rows skipped", "Connection unstable" — with optional retry link.'],
        ['Danger (negative)', 'Failed operations the user must acknowledge. Never auto-dismisses regardless of fadeAway prop.'],
        ['Neutral', 'Generic notifications with custom icon — feature tips, onboarding nudges.'],
        ['Block', 'Hard failures or policy blocks surfaced as toast — rare; prefer Banner Alert for persistence. Never auto-dismisses.'],
      ],
    },
    states: {
      intro: 'Toasts progress through a lifecycle managed by the toast manager. Hover pauses auto-dismiss for eligible types.',
      rows: [
        ['Entering', 'Toast mounts at top of stack with enter animation. Live region announces content.'],
        ['Visible', 'Fully opaque; timeout countdown running when fadeAway is true.'],
        ['Paused (is-paused)', 'Hover pauses timer and fade; opacity restored to 100%. Timer restarts from full timeout on mouse leave.'],
        ['Fading (is-fading)', 'Opacity transitions to 0 after timeout elapses. On completion, toast removes and fires toast:close with reason fade.'],
        ['Dismissed', 'Removed via close button, Escape, or programmatic close — toast:close fires with appropriate reason.'],
        ['Persistent', 'negative and block types, or fadeAway=false — remain until manual close.'],
      ],
    },
    contentGuidelines: {
      intro: 'Toast copy is brief — the user glances and continues. Title is optional but helps in multi-widget contexts. Message carries the outcome; link carries the action.',
      good: [
        'Title: Demand plan — Message: Export complete.',
        'Message: Changes saved.',
        'Title: Upload — Message: 3 files skipped. Link: View details',
        'Message: New version available. Link: Refresh now',
        'Title: Save failed — Message: Could not reach the server. Try again.',
      ],
      avoid: [
        'Title: Success!!! — Message: Your request has been successfully processed by the system.',
        'Message: Error occurred.',
        'Long paragraph explaining root cause — use Banner Alert instead.',
        'Multiple sentences with bullet lists inside a toast.',
        'Using danger toast for non-error emphasis.',
      ],
    },
    dosDonts: {
      do: [
        'Use success toast for async confirmations that do not need to persist on the page.',
        'Include the widget or report name in the title when multiple contexts can fire toasts.',
        'Set fadeAway=false when the user must read the message but it is not an error (e.g., undo window).',
        'Use the link slot for Undo, Retry, or View details — not buried in message text.',
        'Limit visible stack depth — configure max on the provider to queue excess toasts.',
        'Use negative toast for failures; keep the message actionable.',
      ],
      dont: [
        'Use toast for critical page-level outages — use Banner Alert.',
        'Fire five success toasts in rapid succession — debounce or consolidate.',
        'Rely on toast as the only save confirmation when the user navigates away immediately — pair with Banner Alert or persistent UI state.',
        'Auto-dismiss negative or block toasts — the component prevents this; do not fight it with workarounds.',
        'Put required reading or legal consent in a toast.',
        'Stack toasts across all four screen corners — pick one position per app shell.',
      ],
    },
    hasLiveDemo: true,
    usage: {
      when: [
        'Confirmations of completed async actions — Saved, Sent, Copied, Exported.',
        'Background process completion that should not block the UI.',
        'Undo windows with a short-lived success toast and Undo link (fadeAway=false).',
        'Non-critical system notices — "New data available", "Sync complete".',
        'Multi-step workflow step completion where the page should not reload.',
      ],
      whenNot: [
        'Persistent errors or outages — use Banner Alert.',
        'Form-field validation — use Message Alert via field errorMsg.',
        'Decisions requiring Confirm/Cancel — use Alert Dialog.',
        'Content that must remain visible after navigation — use Banner Alert or inline page state.',
        'More than one critical failure at once — consolidate into one Banner Alert.',
      ],
      scenarios: [
        { title: 'Save confirmation', desc: 'After Save on a dense grid, show success toast "Changes saved." Do not reload the view. If save fails, show negative toast with Retry link — no auto-dismiss.' },
        { title: 'Bulk export', desc: 'Title names the report; message states row count. Warning toast if partial failure with link to error log.' },
        { title: 'Undo window', desc: 'Success toast with fadeAway=false and link label "Undo" for 8–10 seconds. Pause on hover so users can reach the link.' },
        { title: 'Background sync', desc: 'Info toast when sync completes in another tab context — low urgency, auto-dismiss after 5s.' },
      ],
      bestPractices: [
        'Configure one Toast provider at app shell root with consistent position (top-right default).',
        'Default timeout 5000ms — extend only when a link action is present and fadeAway is false.',
        'Debounce duplicate toasts (same message within 2s) to prevent stack spam.',
        'On mobile, respect safe areas — top-right may need offset below app chrome.',
        'Log toast:close reason in analytics to distinguish user dismiss vs auto-fade.',
      ],
      layout: [
        'Position: top-right default; bottom-right for apps with persistent top toolbars.',
        'Stack gap: 8px between toasts — managed by provider.',
        'Max visible: 5 default — queue or drop oldest beyond max.',
        'Toasts float above content — they must not push layout or obscure primary actions permanently.',
      ],
    },
    a11y: {
      roles: [
        'Each toast uses role="status" (polite) for info, success, warning, and neutral types.',
        'negative and block toasts use role="alert" (assertive).',
        'aria-atomic="true" ensures the entire toast content is announced, not just changed portions.',
        'Toasts are not modal — focus remains in the underlying page unless the user Tabs into a toast.',
      ],
      focus: [
        'Tab moves into the toast stack: link (if present) → close button.',
        'Escape closes the currently focused toast.',
        'Focus is not trapped — users can Tab through and continue working.',
        'Do not move focus to toast on show — it would disrupt data entry workflows.',
      ],
      keyboard: [
        { key: 'Tab', action: 'Moves focus into the toast — link first, then close button.' },
        { key: 'Shift+Tab', action: 'Moves focus backward out of the toast.' },
        { key: 'Escape', action: 'Closes the currently focused toast.' },
        { key: 'Enter', action: 'Activates the focused link or close button.' },
      ],
      aria: [
        { attr: 'role="status" / role="alert"', when: 'Resolved from toast type — assertive for negative and block.' },
        { attr: 'aria-live (implicit)', when: 'Polite for status, assertive for alert.' },
        { attr: 'aria-atomic="true"', when: 'Always set so title + message announce together.' },
        { attr: 'aria-label', when: 'Optional full descriptive label when content is abbreviated.' },
      ],
      screenReaders: [
        'Polite toasts announce when the user is idle — they do not interrupt typing.',
        'Assertive toasts interrupt for failures — use sparingly to avoid fatigue.',
        'Rapid toast sequences queue announcements — debounce duplicate messages.',
        'Auto-dismiss does not remove the announcement mid-speech — fade starts after timeout, not during announcement.',
      ],
      keyboardCallout: 'Toasts do not steal focus on appear. Keyboard users must Tab to reach the link or close button — keep messages short enough that this is acceptable, or use Banner Alert for critical content.',
      dosDonts: {
        do: [
          'Keep negative toast messages concise and actionable.',
          'Use aria-atomic so title and message announce as one unit.',
          'Allow Escape to dismiss the focused toast.',
        ],
        dont: [
          'Move focus to toast automatically on show.',
          'Fire multiple assertive toasts simultaneously.',
          'Use toast as the only surface for error details needed to fix a problem.',
        ],
      },
    },
  },

  'empty-state': {
    purpose: [
      'Empty State communicates that a content region has no data to show or that a search/filter returned no results. It replaces a blank area with illustration, title, message, and an optional action so users understand why the area is empty and what to do next.',
      'Empty State reduces anxiety in data-heavy B2B workflows — an empty grid is ambiguous (loading? error? no permission?) unless explicitly explained. A well-written empty state clarifies the situation and offers a recovery path.',
      'Two primary kinds — no-data (nothing exists yet) and no-results (filters/search excluded everything) — drive different copy and actions.',
    ],
    anatomy: {
      paragraphs: [
        'Empty State centers content vertically and horizontally within its host region (panel body, list container, table viewport). The illustration is decorative; title and message carry semantic meaning.',
      ],
      parts: [
        { name: 'Illustration', desc: 'o9illus glyph — no-filters-found for no-data, no-results-found for no-results. aria-hidden decorative.' },
        { name: 'Title', desc: 'Short headline stating the situation — "No data available", "No results found".' },
        { name: 'Message', desc: 'Supporting sentence explaining why or what to try next.' },
        { name: 'Action (optional)', desc: 'Outline sm Button — typically "Clear Search" for no-results. Primary creation actions for no-data when appropriate.' },
      ],
    },
    variants: {
      intro: 'Empty State variants are semantic, not visual tones — there are no info/success/warning/danger types. Pick kind by whether data exists vs filters exclude it.',
      columns: ['Kind', 'Use when'],
      rows: [
        ['No data', 'The dataset is genuinely empty — first use, no records created, no items assigned.'],
        ['No results', 'Data exists but the current search, filter, or query returned zero matches.'],
      ],
    },
    states: {
      intro: 'Empty State is static display content. It replaces list/table body when the item count is zero for the current kind.',
      rows: [
        ['No data', 'Illustration + title + message. Optional primary action to create or import first item.'],
        ['No results', 'Illustration + title + message + Clear Search action when onClear handler is provided.'],
        ['Loading → empty', 'Never flash empty state while fetching — show Skeleton Loader until data resolves.'],
        ['Error → empty', 'Do not use empty state for fetch failures — show error Banner Alert or Message Alert instead.'],
      ],
    },
    contentGuidelines: {
      intro: 'Differentiate "nothing here yet" from "your filters are too narrow". Offer one clear next step — create, import, adjust filters, or clear search.',
      good: [
        'Title: No plans yet — Message: Create a plan to start forecasting.',
        'Title: No results found — Message: Try different keywords or clear filters.',
        'Action: Clear Search',
        'Action: Create item',
        'Title: No collaborators — Message: Invite team members to share this workspace.',
      ],
      avoid: [
        'Title: Empty — Message: No items.',
        'Title: Oops! — Message: Nothing here.',
        'Blaming the user — "You searched wrong".',
        'Showing empty state while data is still loading.',
        'Using empty state for permission denied — use block Banner Alert or Empty State with block messaging explicitly.',
      ],
    },
    dosDonts: {
      do: [
        'Show empty state only after loading completes with zero items.',
        'Use no-results kind when filters/search are active; no-data when the collection is empty.',
        'Provide a Clear Search action for no-results when the user can reset filters.',
        'Center empty state in the content region with adequate vertical padding.',
        'Match action button variant to importance — outline for secondary clear, primary for create-first-item.',
        'Customize title and message via config for domain-specific copy.',
      ],
      dont: [
        'Show empty state during initial load — use Skeleton Loader.',
        'Use empty state for API errors — show error feedback instead.',
        'Show both empty state and pagination controls simultaneously.',
        'Use generic "No data" when the real issue is permissions — say so explicitly.',
        'Hide empty state behind a tab the user is not viewing.',
        'Stack empty state with Banner Alert saying the same thing.',
      ],
    },
    usage: {
      when: [
        'List, table, or grid viewport has zero items after successful load.',
        'Search or filter returns zero matches but the underlying dataset is non-empty.',
        'Panel body (Side Panel, Drawer, Hybrid Popover) has no items to render.',
        'First-run experiences where the user has not created content yet.',
        'Filtered views in planning, supply chain, or admin modules with no matching records.',
      ],
      whenNot: [
        'While data is loading — use Skeleton Loader or component loading state.',
        'When the API returns an error — use Banner Alert or Message Alert.',
        'When the user lacks permission to view data — use block-type messaging with explanation.',
        'For inline field placeholders — use input placeholder text.',
        'When items exist but are collapsed — fix the expand state, not empty state.',
      ],
      scenarios: [
        { title: 'First-run module', desc: 'No-data kind with title "No scenarios yet", message explaining value prop, primary action "Create scenario".' },
        { title: 'Filtered grid', desc: 'No-results kind after user applies filters that match nothing. Clear Search resets filters via onClear callback.' },
        { title: 'Hybrid Popover filter list', desc: 'Empty state inside popover panel when filter items array is empty vs when search excludes all items — pick kind accordingly.' },
        { title: 'Side Panel list', desc: 'Centered empty state in panel __body when list returns []. Use compact copy — less vertical space than full page.' },
      ],
      bestPractices: [
        'Transition smoothly from skeleton to empty — no flash of empty during loading.',
        'Keep illustration decorative — never convey meaning by illustration alone.',
        'Limit to one action button — if multiple paths exist, pick the most common.',
        'Localize title and message for global deployments.',
        'Track empty state views in analytics to identify UX friction (over-filtering, onboarding gaps).',
      ],
      layout: [
        'Center horizontally and vertically in the content viewport.',
        'Minimum padding 24px from container edges.',
        'Illustration above title above message above action — vertical stack with 8–16px gaps.',
        'Do not render empty state in a one-row table shell — expand the tbody area to full height.',
      ],
    },
    a11y: {
      roles: [
        'Root element uses role="status" — the empty condition is informational, not an alert.',
        'Illustration is aria-hidden — title and message provide the accessible description.',
        'Action button is a standard Button — fully keyboard accessible with visible label.',
      ],
      focus: [
        'Empty State itself is not focusable.',
        'When action button is present, it is in natural tab order after preceding content.',
        'On transition to empty state, do not move focus unless the user triggered the action that caused emptiness (e.g., cleared last item — optional focus to action button).',
      ],
      keyboard: [
        { key: 'Tab', action: 'Moves focus to the action button when present.' },
        { key: 'Enter / Space', action: 'Activates the focused action button.' },
      ],
      aria: [
        { attr: 'role="status"', when: 'On the root empty state container — polite informational region.' },
        { attr: 'aria-hidden="true"', when: 'On the decorative illustration element.' },
      ],
      screenReaders: [
        'When empty state appears after loading, title and message are announced via status role.',
        'Do not duplicate announcement with a separate live region on the parent.',
        'Action button accessible name must match visible label — "Clear Search", not "Click here".',
        'If empty state replaces a live table, ensure aria-rowcount updates or the table is removed from accessibility tree.',
      ],
      dosDonts: {
        do: [
          'Use role="status" for the empty container.',
          'Provide meaningful title and message text — not illustration alt text.',
          'Ensure the action button has a descriptive visible label.',
        ],
        dont: [
          'Use role="alert" for empty states — nothing urgent happened.',
          'Put essential instructions only in the illustration.',
          'Leave focus on a row that no longer exists after delete-to-empty.',
        ],
      },
    },
  },

  'skeleton-loader': {
    purpose: [
      'Skeleton Loader provides perceived-performance feedback while content or components are fetching. It preserves layout dimensions with shimmer placeholders so the interface does not jump when real content arrives — critical in data-dense B2B views with tables, panels, and cards.',
      'Arvo defines three loading patterns: Pattern A (shimmer overlay on atomic components), Pattern B (structured skeleton rows mimicking content layout), and Pattern C (inline spinner replacing a chevron or icon). Skeleton Loader documentation covers Patterns A and B; Spinner covers Pattern C.',
      'Skeleton loading also acts as a double-click guard — interaction is blocked while loading. Do not add separate debounce on top.',
    ],
    anatomy: {
      paragraphs: [
        'Pattern A overlays the existing component chrome with a shimmer. Pattern B replaces body content with skeleton rows while hiding sticky headers/footers as defined per component.',
      ],
      parts: [
        { name: 'Shimmer overlay (Pattern A)', desc: 'Full-surface gradient animation over buttons, inputs, banners, and atomic components. Preserves host dimensions.' },
        { name: 'Skeleton container (Pattern B)', desc: 'Flex column of placeholder rows inside panel, list, or card body.' },
        { name: 'Skeleton row', desc: 'Rounded bar with shimmer — wide (80%), medium (60%), or narrow (40%) width variants mimicking text lines.' },
        { name: 'Skeleton row with icon', desc: 'Circle + bar combo mimicking list items with avatars or icons.' },
      ],
    },
    variants: {
      intro: 'Skeleton Loader is not semantic feedback — there are no info/success/warning/danger tones. Variants describe loading pattern and shape, not alert type.',
      columns: ['Pattern', 'Use when'],
      rows: [
        ['Pattern A — overlay shimmer', 'Atomic components: Button, Textbox, Banner Alert, Icon Button, Checkbox. Covers existing chrome; blocks pointer-events.'],
        ['Pattern B — structured skeleton', 'Complex regions: Side Panel body, Drawer list, Hybrid Popover options, Alert Dialog body, Listbox menu.'],
        ['Parent propagation', 'data-arvo-loading="true" on a container triggers loading on all descendant Arvo components unless data-arvo-loading-ignore="true".'],
        ['Per-component isLoading', 'Preferred for single-component async — React isLoading prop or JS setLoading(true).'],
      ],
    },
    states: {
      intro: 'Loading is binary — loading or not. Components set aria-busy="true" and suppress interaction while loading.',
      rows: [
        ['Loading active', 'Shimmer visible; pointer-events: none on host; aria-busy="true". Content may be visually hidden or replaced.' ],
        ['Loading complete', 'Shimmer removed; real content shown; aria-busy removed; interaction restored in same frame as content swap.' ],
        ['Pattern B — sticky hidden', 'Panel-shell hides __sticky and __footer during loading; skeleton rows fill __body.' ],
        ['Reduced motion', 'Shimmer animation respects prefers-reduced-motion — static disabled surface instead of animation.' ],
      ],
    },
    sizes: {
      intro: 'Skeleton shapes inherit host component dimensions — there is no standalone size token. Match skeleton host to the loaded content footprint.',
      columns: ['Context', 'Typical footprint', 'Use when'],
      rows: [
        ['Button loading', 'Matches button sm/md/lg height', 'Async submit, save, or apply actions.'],
        ['Input loading', 'Full field width × field height', 'Fetching autocomplete options or validating async.'],
        ['Panel body (Pattern B)', '3–5 rows, 16px height each, varied widths', 'Loading Side Panel or Drawer list content.'],
        ['Banner loading', 'Full banner width × banner height', 'Verifying status before showing resolved Banner Alert type.'],
      ],
    },
    contentGuidelines: {
      intro: 'Skeleton Loader has no user-facing copy — the shimmer communicates "loading". Ensure surrounding context (page title, panel header) tells users what is loading.',
      good: [
        'Panel header stays visible: "Filters" while body skeleton loads.',
        'Button label remains visible under shimmer during save.',
        'Table column headers visible while row skeletons load.',
      ],
      avoid: [
        'Replacing the entire page with skeleton with no heading context.',
        'Showing skeleton for less than 300ms then flashing content — consider skipping skeleton for fast responses.',
        'Custom gray boxes that do not match Arvo shimmer tokens.',
        'Loading skeleton with no eventual content (infinite load with no error fallback).',
      ],
    },
    dosDonts: {
      do: [
        'Use Pattern A for single controls; Pattern B for lists, panels, and multi-row content.',
        'Keep layout stable — skeleton footprint should match loaded content dimensions.',
        'Set aria-busy on the loading region — components do this automatically via isLoading.',
        'Transition from skeleton directly to content or empty state — not skeleton → blank → content.',
        'Respect prefers-reduced-motion — shimmer degrades gracefully.',
        'Use parent data-arvo-loading for coordinated multi-component fetches.',
      ],
      dont: [
        'Replace Arvo shimmer with custom spinners on buttons — use built-in loading.',
        'Add manual debounce on top of loading state — shimmer is the double-click guard.',
        'Show skeleton and empty state simultaneously.',
        'Manage aria-busy manually when using isLoading — it is set automatically.',
        'Use skeleton for indeterminate progress with known duration — consider progress indicator patterns.',
        'Leave loading state on after fetch fails — switch to error Banner Alert or Message Alert.',
      ],
    },
    usage: {
      when: [
        'Initial page or panel load where structure is known but data is async.',
        'Button or input async operations that take longer than ~300ms.',
        'Refreshing list content inside Side Panel, Drawer, or Hybrid Popover.',
        'Banner Alert verifying connectivity before showing resolved message.',
        'Coordinated fetch affecting multiple inputs — parent data-arvo-loading.',
      ],
      whenNot: [
        'Instant synchronous operations — skeleton flashes cause visual noise.',
        'Indeterminate long-running batch jobs with known progress — use progress UI if available.',
        'Full-page blocking authentication or routing — use app-level splash if needed, not per-component skeleton.',
        'When content layout is unknown — generic spinner may be less misleading than wrong-shaped skeleton.',
        'Error states — show error feedback, not perpetual skeleton.',
      ],
      scenarios: [
        { title: 'Side Panel filter load', desc: 'Pattern B skeleton rows in panel __body while fetch runs. Header "Filters" stays visible. On complete, render list or Empty State.' },
        { title: 'Save button async', desc: 'Pattern A on primary Button during save API call. Button stays same size; label visible under shimmer. Clear loading on success or error.' },
        { title: 'Select dropdown fetch', desc: 'Pattern C spinner in field (see Spinner) while options load — panel stays closed. Switch to list or empty when done.' },
        { title: 'Banner status check', desc: 'Banner Alert isLoading true with Pattern A overlay until health check returns, then swap to resolved type.' },
      ],
      bestPractices: [
        'Minimum display threshold: avoid skeleton for sub-300ms loads to prevent flash.',
        'Error path: always exit loading state — never infinite shimmer on 500 responses.',
        'Match row count in Pattern B to expected item count when predictable (3–5 rows typical).',
        'Do not nest loading states — one level per region.',
        'Test with slow 3G to verify layout shift is minimal when content arrives.',
      ],
      layout: [
        'Pattern A: shimmer inherits border-radius of host — do not override.',
        'Pattern B: skeleton rows left-aligned with 12–16px padding matching real list items.',
        'Maintain scroll container height during load to prevent page jump.',
        'Hide scrollbars on empty skeleton bodies if no overflow yet.',
      ],
    },
    a11y: {
      roles: [
        'Loading regions use aria-busy="true" on the host component — not role="alert".',
        'Skeleton placeholders are decorative — no aria-label on individual shimmer bars.',
        'Do not use aria-live to announce "Loading…" on every skeleton mount — causes noise.',
      ],
      focus: [
        'While loading, pointer-events: none prevents interaction — focus cannot enter disabled controls.',
        'If a control had focus when loading started, blur it when entering loading on inputs (Textbox pattern).',
        'When loading completes, restore focus logically — e.g., first item in loaded list if user opened panel.',
      ],
      keyboard: [],
      aria: [
        { attr: 'aria-busy="true"', when: 'Set automatically on host during isLoading / .loading class / data-arvo-loading.' },
        { attr: 'aria-busy removed', when: 'When loading completes in the same update as content render.' },
        { attr: 'aria-hidden on content', when: 'Some Pattern B implementations hide real rows while skeleton shows — ensure only one is exposed.' },
      ],
      screenReaders: [
        'aria-busy signals that content is updating — screen readers may suppress interim reads.',
        'Do not announce "Loading" via live region unless the operation exceeds 5s — then use a polite status update.',
        'When loading finishes, new content is discovered on next navigation — no automatic announcement unless focus moves to new content intentionally.',
        'Reduced motion: shimmer may appear static — aria-busy still applies.',
      ],
      dosDonts: {
        do: [
          'Rely on aria-busy set by the component loading API.',
          'Pair long loads (>5s) with visible status text outside the skeleton if needed.',
          'Remove aria-busy when showing error states.',
        ],
        dont: [
          'Add role="alert" skeleton regions.',
          'Label every shimmer bar with aria-label="Loading".',
          'Leave aria-busy=true after fetch failure.',
        ],
      },
    },
  },

  spinner: {
    purpose: [
      'Spinner is a compact, indeterminate progress indicator for inline loading where a full skeleton would be disproportionate — typically replacing a chevron, trailing icon, or small affordance while async work completes (Pattern C loading).',
      'Unlike Skeleton Loader shimmer overlays, Spinner communicates activity in a fixed 16×16 footprint without obscuring the host label or value. It appears in Select, Combobox, and similar fields during option fetch.',
      'Spinner is not a page-level loading pattern — use Skeleton Loader for panels and lists, or app-level loading for route transitions.',
    ],
    anatomy: {
      paragraphs: [
        'Spinner is a CSS-animated circular border — 16×16 default — using theme color on the top arc and disabled border color on the remainder. Animation uses arvo-spin keyframes (0.7s linear infinite).',
      ],
      parts: [
        { name: 'Spin ring', desc: 'Circular border segment rotating continuously. No internal icon glyph.' },
        { name: 'Host slot', desc: 'Replaces chevron or trailing icon inside field chrome — not a standalone page widget.' },
      ],
    },
    variants: {
      intro: 'Spinner has no semantic feedback tones. It indicates activity only — not success, warning, or error. Error states replace spinner with Message Alert or field error.',
      columns: ['Context', 'Use when'],
      rows: [
        ['Select / Combobox field (Pattern C)', 'Options are fetching; dropdown stays closed; chevron replaced by spinner.'],
        ['Inline action pending', 'Small footprint load beside a label when skeleton overlay would hide critical text.'],
        ['Custom 16×16 slot', 'Trailing indicator in dense toolbar cell — rare; prefer Button isLoading for actions.'],
      ],
    },
    states: {
      intro: 'Spinner visibility is binary. Host field is non-interactive for open/toggle while spinner shows.',
      rows: [
        ['Active', 'Rotating ring visible; field typing or open gestures disabled per component rules.'],
        ['Complete', 'Spinner removed; chevron or default trailing icon restored; interaction enabled.'],
        ['Reduced motion', 'Animation may degrade to static indicator or slower rotation per prefers-reduced-motion.'],
        ['Error', 'Spinner removed; error Message Alert or tooltip error shown — never spinner + error simultaneously.'],
      ],
    },
    sizes: {
      intro: 'Default spinner is 16×16 to match form field icon slots. Do not scale arbitrarily — misalignment breaks field layout.',
      columns: ['Size', 'Footprint', 'Use when'],
      rows: [
        ['Default (16px)', '16×16 px', 'Select, Combobox, Search trailing slot — matches o9con icon box.'],
        ['Large (24px)', '24×24 px', 'Rare standalone use in empty regions — prefer Skeleton Loader instead.'],
      ],
    },
    contentGuidelines: {
      intro: 'Spinner carries no text. The host component label and context must explain what is loading. For screen readers, aria-busy on the host is sufficient — do not add visible "Loading…" beside every spinner.',
      good: [
        'Select with label "Region" shows spinner while options load — label context is clear.',
        'Combobox retains typed value visible while spinner replaces chevron.',
      ],
      avoid: [
        'Spinner alone in center of page with no heading.',
        'Replacing button label with spinner only — use Button isLoading which preserves label under shimmer.',
        'Spinner visible for >10s with no error fallback.',
      ],
    },
    dosDonts: {
      do: [
        'Use Pattern C spinner inside fields during option fetch.',
        'Keep the field label and current value visible while spinner shows.',
        'Replace spinner with error state if fetch fails.',
        'Respect prefers-reduced-motion for animation.',
        'Use aria-busy on the host field during spinner display.',
      ],
      dont: [
        'Use spinner as a page-level loading indicator — use Skeleton Loader.',
        'Show spinner and open the dropdown simultaneously.',
        'Replace primary button content with spinner only — use Button isLoading Pattern A.',
        'Use multiple spinners in one table cell when one host loading state suffices.',
        'Leave spinner running after error — show Message Alert.',
      ],
    },
    usage: {
      when: [
        'Select or Combobox fetching options from API before first open.',
        'Search field running async lookup where chevron/slot exists.',
        'Inline 16px activity indicator when shimmer overlay would obscure critical text.',
        'Short indeterminate waits (<10s expected) tied to a specific control.',
      ],
      whenNot: [
        'Button submit loading — use Button isLoading (Pattern A shimmer).',
        'Panel or list body loading — use Skeleton Loader Pattern B.',
        'Known progress percentage — use determinate progress if available.',
        'Full-page route transition — use route-level skeleton or splash.',
        'Operations requiring explanation — show Banner Alert with message instead.',
      ],
      scenarios: [
        { title: 'Select options fetch', desc: 'User focuses Select; options not yet cached. Spinner replaces chevron; panel blocked from opening until fetch completes or fails.' },
        { title: 'Combobox typeahead', desc: 'Spinner shows during debounced search API call; input remains editable; results replace spinner when returned.' },
        { title: 'Failed fetch', desc: 'Remove spinner; set field error via errorMsg Message Alert; aria-invalid on input.' },
      ],
      bestPractices: [
        'Cache options after first successful fetch to avoid spinner on every open.',
        'Timeout long fetches — show error after agreed SLA (e.g., 15s).',
        'Do not open popover while spinner active — prevents empty panel flash.',
        'Match spinner color tokens — theme top arc, disabled base ring.',
        'Test keyboard open attempt during load — panel must not open empty.',
      ],
      layout: [
        'Spinner occupies the exact box of the icon it replaces — no layout shift.',
        'Align to trailing edge of field per Select/Combobox patterns.',
        'Do not add extra padding around spinner beyond icon slot.',
      ],
    },
    a11y: {
      roles: [
        'Spinner visual is decorative when host has aria-busy="true" and an accessible name from label.',
        'Optional standalone spinner uses role="status" with aria-label="Loading" — only when no host label exists.',
        'Never use role="alert" for spinner — loading is not an error.',
      ],
      focus: [
        'Host field may retain focus during load (Combobox typing) or block open (Select) — follow per-component spec.',
        'Do not move focus to spinner — it is not focusable.',
        'On error, focus stays on field; error Message Alert receives announcement.',
      ],
      keyboard: [],
      aria: [
        { attr: 'aria-busy="true"', when: 'On host field/component during spinner display — set by loading API.' },
        { attr: 'aria-label="Loading"', when: 'Standalone spinner without host label — rare.' },
        { attr: 'role="status"', when: 'Standalone spinner only — polite, not assertive.' },
      ],
      screenReaders: [
        'aria-busy on host indicates update in progress — no separate "Loading" live region needed for short fetches.',
        'For loads exceeding 5 seconds, consider polite aria-live status text near the field.',
        'When spinner clears, newly loaded options appear in listbox — ensure count is reflected if aria-setsize is used.',
        'Reduced motion users still get aria-busy semantics even if animation is static.',
      ],
      dosDonts: {
        do: [
          'Set aria-busy on the loading host component.',
          'Provide error feedback when load fails — spinner alone is insufficient.',
          'Keep label association via htmlFor/id on labeled fields.',
        ],
        dont: [
          'Announce "Loading" assertively on every spinner mount.',
          'Use spinner as the only error indicator.',
          'Make spinner focusable.',
        ],
      },
    },
  },
}
