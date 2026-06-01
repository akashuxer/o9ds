/** Expert design-system documentation — utility components. */

export const UTILITIES_EXPERT_DOC = {
  avatar: {
    purpose: [
      'Avatar represents a person, team, or system actor as a compact circular or rounded graphic — photograph, initials fallback, or generic placeholder icon. It anchors identity in headers, comment threads, assignment pickers, and activity feeds across collaborative B2B workflows.',
      'When photo URLs fail or are unavailable, initials derived from display name provide recognizable fallback without broken-image icons. Size tokens scale Avatar from dense table rows to profile headers while preserving legible initials and status badge placement.',
    ],
    anatomy: {
      paragraphs: [
        'Avatar is a single circular surface containing image, initials, or icon, with optional status badge overlapped at the bottom-trailing edge.',
      ],
      parts: [
        { name: 'Image', desc: 'User or entity photo scaled with object-fit cover inside the circular mask.' },
        { name: 'Initials fallback', desc: 'One or two characters from display name when image absent or failed to load.' },
        { name: 'Placeholder icon', desc: 'Generic user glyph when neither image nor name is available — last resort only.' },
        { name: 'Status badge', desc: 'Small dot or icon indicating online, busy, away, or verification — must not be sole identity cue.' },
      ],
    },
    variants: {
      intro: 'Size tokens and shape variants adapt Avatar to context from 24px table rows to 64px profile headers.',
      rows: [
        ['xs / sm', 'Dense tables, comment lists, and compact metadata rows.'],
        ['md', 'Default cards, list items, and form assignee fields.'],
        ['lg / xl', 'Profile headers, account settings hero, and empty-state illustrations.'],
        ['Square (optional)', 'Product or workspace logos where circle metaphor does not apply — use sparingly for non-person entities.'],
      ],
    },
    states: {
      intro: 'Avatar surfaces loading, error, and interactive states when used as a button or link.',
      rows: [
        ['Image loaded', 'Photo visible with alt text derived from display name when Avatar is informative.' ],
        ['Initials fallback', 'Shown when no src or image onError — background color may hash from name for distinction.' ],
        ['Loading', 'Skeleton circle while profile photo fetches — avoid layout shift with fixed dimensions.' ],
        ['Interactive', 'Hover/focus ring when Avatar opens profile menu or Popover — cursor and aria attributes reflect action.' ],
        ['Disabled', 'Reduced opacity non-interactive — use when assignee field locked.' ],
      ],
    },
    dosDonts: {
      do: [
        'Provide meaningful display name for initials fallback and accessible naming.',
        'Use consistent size tokens within a UI region — do not mix xs and xl avatars in one list without reason.',
        'Reserve status badges for live presence or verified accounts — not arbitrary decoration.',
      ],
      dont: [
        'Use Avatar as the only label for a person — pair with name text except in ultra-compact repeated lists with tooltip.',
        'Load full-resolution photos into sm avatars — serve appropriately sized assets.',
        'Show sensitive profile photos in audit logs without consent considerations.',
      ],
    },
    usage: {
      when: [
        'Identifying users in comments, mentions, assignments, and approval chains.',
        'Profile menu trigger in application header.',
        'Visual differentiation of owners on shared workspace objects.',
      ],
      whenNot: [
        'Representing abstract categories or file types — use Icon instead.',
        'Large hero marketing photography — use responsive image component, not Avatar token.',
        'Replacing organization logos in formal branding contexts — use dedicated logo component.',
      ],
      scenarios: [
        { title: 'Comment thread', desc: 'sm Avatar beside author name and timestamp in planning discussion panel.' },
        { title: 'Assignee field', desc: 'md Avatar with initials in combobox chip showing selected planner.' },
        { title: 'Profile trigger', desc: 'Header Avatar opens account menu — keyboard focusable with aria-haspopup.' },
      ],
      bestPractices: [
        'Hash background colors from user id for initials avatars — improves scanability in multi-user lists.',
        'Lazy-load offscreen avatars in long virtualized lists.',
        'When Avatar is decorative in a row that already names the user in text, mark image alt="" or aria-hidden.',
      ],
      layout: [
        'Align Avatar center vertically with first line of adjacent text.',
        'Status badge offset must not clip outside touch targets in interactive avatars.',
      ],
    },
    a11y: {
      roles: [
        'Informative Avatar image: alt text with person name ("Jane Chen").',
        'Decorative Avatar adjacent to visible name: alt="" on image; name in text satisfies naming.',
        'Interactive Avatar: button or link with aria-label ("Open account menu for Jane Chen").',
      ],
      focus: [
        'Interactive avatars must show visible focus ring meeting contrast requirements.',
        'Non-interactive avatars are not tab stops.',
      ],
      keyboard: [
        { key: 'Tab', action: 'Focus interactive Avatar button/link in natural order.' },
        { key: 'Enter / Space', action: 'Activate profile menu or navigation when Avatar is interactive.' },
      ],
      aria: [
        { attr: 'alt', when: 'On img — person name when informative; empty when decorative with adjacent text.' },
        { attr: 'aria-label', when: 'On interactive Avatar without visible text label.' },
        { attr: 'aria-haspopup', when: 'When Avatar opens menu or Popover.' },
      ],
      screenReaders: [
        'Status badge meaning merges into accessible name when essential ("Jane Chen, away").',
        'Initials fallback should still expose full name via adjacent text or aria-label.',
      ],
      dosDonts: {
        do: [
          'Always associate Avatar with a human-readable name somewhere in the UI or accessible name.',
          'Use button element for Avatar that opens menus.',
        ],
        dont: [
          'Use initials alone in audit-critical UI without tooltip or full name access.',
          'Make every Avatar tabbable when only one row action exists — use row focus instead.',
        ],
      },
    },
  },

  'avatar-group': {
    purpose: [
      'Avatar Group stacks or overlaps multiple Avatars to represent a set of people — project members, approvers, shared collaborators — within constrained horizontal space. Overflow count ("+3") communicates additional participants without rendering every face.',
      'Use Avatar Group in summary rows, table cells, and card metadata where full participant lists would clutter dense enterprise grids. Click or hover may expand to full list via Tooltip or Popover.',
    ],
    anatomy: {
      paragraphs: [
        'Avatars render in a horizontal stack with negative margin overlap; z-index increases left-to-right or by recency. Trailing overflow badge shows remaining count.',
      ],
      parts: [
        { name: 'Stack container', desc: 'Flex row with overlap spacing token — prevents excessive width growth.' },
        { name: 'Member Avatar', desc: 'Individual Avatar at group size token — typically sm in tables, md in cards.' },
        { name: 'Overflow indicator', desc: '+N badge or ellipsis Avatar representing hidden members.' },
        { name: 'Tooltip / Popover (optional)', desc: 'Reveals full name list on hover or click of group or overflow badge.' },
      ],
    },
    variants: {
      intro: 'Layout and overflow behavior variants tune density for tables vs cards.',
      rows: [
        ['Stacked overlap', 'Default — avatars overlap 25–30% for compact footprint.'],
        ['Spaced row', 'No overlap — use when status badges must remain fully visible.'],
        ['Max visible', 'Configurable cap (e.g., 3 faces + overflow) — consistent across product surfaces.'],
        ['Interactive group', 'Click opens member management Popover or navigates to team page.' ],
      ],
    },
    states: {
      intro: 'Group reflects member loading and interactive expansion states.',
      rows: [
        ['Default', 'Visible avatars plus overflow count when members exceed max.' ],
        ['Loading', 'Skeleton circles in stack while member list resolves.' ],
        ['Empty', 'Placeholder or "Unassigned" text — do not show empty overlap stack.' ],
        ['Hover / focus', 'Optional elevation or tooltip listing all names on group focus.' ],
      ],
    },
    dosDonts: {
      do: [
        'Cap visible avatars (3–5) and show +N for remainder.',
        'Expose full participant list on hover/focus via accessible tooltip or Popover.',
        'Sort avatars consistently — alphabetical, role priority, or most recently active — document the rule.',
      ],
      dont: [
        'Show twelve overlapping avatars — unreadable and fails WCAG target size for interactive members.',
        'Use Avatar Group for non-person entities mixed without distinction.',
        'Hide overflow count — users cannot discover full membership.',
      ],
    },
    usage: {
      when: [
        'Table column showing owners or collaborators on a scenario or order.',
        'Card footer summarizing review participants before opening detail.',
        'Workspace header showing active editors in collaborative sessions.',
      ],
      whenNot: [
        'Single assignee — use lone Avatar with name.',
        'Full roster management UI — use List or Table with checkboxes.',
        'More than eight members where names matter — link to dedicated team view instead of stack alone.',
      ],
      scenarios: [
        { title: 'Scenario owners column', desc: 'Three sm avatars + "+2" in grid cell; tooltip lists all five names on overflow focus.' },
        { title: 'Approval chain', desc: 'Ordered Avatar Group reflects sign-off sequence — tooltip shows pending vs approved status.' },
        { title: 'Click to manage', desc: 'Interactive group opens Popover to add/remove members without leaving grid.' },
      ],
      bestPractices: [
        'Tooltip overflow list should use comma-separated names or structured list for screen readers.',
        'When removing members dynamically, animate respectfully with prefers-reduced-motion.',
        'Keep z-order stable so the most relevant member (owner) is not fully obscured.',
      ],
      layout: [
        'Right-align in numeric/table columns; left-align in card metadata.',
        'Ensure overflow badge meets minimum touch target when interactive.',
      ],
    },
    a11y: {
      roles: [
        'Group container may use role="group" with aria-label ("Project members, 5 people").',
        'Individual avatars retain img alt or aria-hidden rules from Avatar guidance.',
      ],
      focus: [
        'If group is single interactive unit, one tab stop with label describing full set.',
        'If each Avatar is interactive, maintain separate focus stops — rare; prefer single group action.',
      ],
      keyboard: [
        { key: 'Tab', action: 'Focus group trigger or overflow badge when interactive.' },
        { key: 'Enter / Space', action: 'Open member list Popover or tooltip with full roster.' },
      ],
      aria: [
        { attr: 'aria-label', when: 'On group — summarizes count and purpose ("5 collaborators").' },
        { attr: 'aria-describedby', when: 'Links to visually hidden full name list when truncated.' },
      ],
      screenReaders: [
        'Announce total count even when only subset visible ("3 of 5 members shown").',
        'Overflow +N badge text included in group label ("Plus 2 more members").',
      ],
      dosDonts: {
        do: [
          'Provide accessible name for the group beyond individual face images.',
          'Make overflow indicator keyboard reachable when it reveals essential names.',
        ],
        dont: [
          'Leave screen reader users with only "image, image, image" and no roster context.',
          'Use title attribute alone for full name list — insufficient for keyboard users.',
        ],
      },
    },
  },

  'scroll-bar': {
    purpose: [
      'Scroll Bar provides styled, theme-aware scrollbars for overflow regions — data grids, tree panels, code viewers, and side rails — replacing inconsistent native OS scrollbars with tokens aligned to Arvo light and dark themes.',
      'Custom scrollbars improve visual integration in dense B2B layouts where scrollable regions are primary working surfaces, not afterthoughts. The component preserves native scrolling behavior, keyboard scroll, and assistive technology access while customizing thumb and track appearance.',
    ],
    anatomy: {
      paragraphs: [
        'Scroll Bar wraps or styles a scrollable container with track, thumb, and optional corner pieces for dual-axis overflow.',
      ],
      parts: [
        { name: 'Scroll container', desc: 'Element with overflow auto or scroll — owns scrollHeight/scrollWidth semantics.' },
        { name: 'Track', desc: 'Static rail along edge — subtle background indicating scrollable axis exists.' },
        { name: 'Thumb', desc: 'Draggable indicator proportional to visible-to-total content ratio.' },
        { name: 'Buttons (optional)', desc: 'Line up/down arrows — rarely used in modern DS; prefer wheel and drag.' },
      ],
    },
    variants: {
      intro: 'Axis, visibility, and sizing variants adapt to panel type and platform expectations.',
      rows: [
        ['Vertical', 'Default for lists, trees, and long form sections.'],
        ['Horizontal', 'Wide grids and timeline views — often paired with vertical.' ],
        ['Auto-hide', 'Thumb appears on hover or scroll — maximizes content pixels in grids; must remain keyboard operable.' ],
        ['Persistent', 'Thumb always visible — recommended for accessibility audits and discoverability.' ],
      ],
    },
    states: {
      intro: 'Scrollbar thumb and track reflect interaction and scroll position.',
      rows: [
        ['Idle', 'Track visible per variant; thumb shows current scroll proportion.' ],
        ['Hover', 'Thumb darkens or widens slightly on pointer over track — fine-pointer only.' ],
        ['Dragging', 'Thumb follows pointer; content scrolls synchronously.' ],
        ['Scrolling (keyboard/wheel)', 'Thumb position updates; optional flash animation on track.' ],
        ['Disabled / no overflow', 'Scrollbar hidden when content fits — overflow auto collapses gracefully.' ],
      ],
    },
    dosDonts: {
      do: [
        'Apply to intentional overflow regions with clear boundaries — not the entire page unless designed.',
        'Maintain native scroll chaining rules — nested regions should not trap wheel unintentionally.',
        'Test keyboard Page Up/Down and Home/End inside scroll regions.',
      ],
      dont: [
        'Hide scrollability entirely — users must discover overflow via cut-off content cues too.',
        'Replace scroll with horizontal-only drag on desktop without keyboard alternative.',
        'Style scrollbars so thumb falls below minimum grab target (WCAG 2.2 target size).',
      ],
    },
    usage: {
      when: [
        'Data grid bodies, tree side panels, and inspector rails with fixed height.',
        'Modal or Drawer content areas that must not expand viewport.',
        'Code or log viewers with monospace overflow.',
      ],
      whenNot: [
        'Whole-page document scroll — use browser default unless brand requires global styling.',
        'Tiny dropdown lists — native overflow sufficient.',
        'Replacing pagination for large datasets — virtualize and paginate, do not rely on mile-long scroll alone.',
      ],
      scenarios: [
        { title: 'Grid body', desc: 'Persistent vertical Scroll Bar on grid with 500 rows virtualized inside fixed viewport.' },
        { title: 'Side tree', desc: 'Auto-hide vertical bar in navigation tree panel — shows on hover over panel edge.' },
        { title: 'Dual axis', desc: 'Wide timeline with horizontal and vertical bars — corner square styled consistently.' },
      ],
      bestPractices: [
        'Prefer overlay scrollbars that do not consume layout width in tight tables when platform allows.',
        'Respect prefers-reduced-motion for thumb fade animations.',
        'Pair with scroll shadows or fade masks at edges to hint additional content.',
      ],
      layout: [
        'Scroll region must have explicit max-height or flex-shrink constraint — otherwise no overflow occurs.',
        'Align track inset with panel padding tokens — avoid misalignment with grid borders.',
      ],
    },
    a11y: {
      roles: [
        'Scrollable container remains a generic div or region — no role="scrollbar" on container unless implementing custom aria scrollbar pattern completely.',
        'Prefer native overflow scrolling — custom widgets must implement full keyboard spec if replacing native behavior.',
      ],
      focus: [
        'Scrollable region should be focusable (tabindex=0) when keyboard users must scroll non-focusable content — e.g., wide data tables.',
        'Do not steal focus from inputs inside scroll area on scroll events.',
      ],
      keyboard: [
        { key: 'Arrow keys', action: 'Scroll focused scrollable region when tabindex=0 and pattern applies.' },
        { key: 'Page Up / Page Down', action: 'Native scroll by viewport page increment inside region.' },
        { key: 'Home / End', action: 'Jump to start/end of scrollable content when region focused.' },
        { key: 'Space', action: 'On focused scrollbar thumb in custom implementations — drag alternative.' },
      ],
      aria: [
        { attr: 'tabindex="0"', when: 'On scrollable panel when content is not otherwise keyboard scrollable.' },
        { attr: 'aria-orientation', when: 'On custom scrollbar role elements if implementing full ARIA scrollbar widget.' },
      ],
      screenReaders: [
        'Native overflow regions announce scrollability through browse mode — ensure content is not aria-hidden incorrectly.',
        'Virtualized lists must maintain aria-rowcount or live updates when rows enter/leave DOM.',
      ],
      dosDonts: {
        do: [
          'Keep native scroll behavior unless fully reimplementing accessibility for custom thumbs.',
          'Provide visible focus on scrollable panels that require tabindex.',
        ],
        dont: [
          'Block wheel events from reaching nested scroll areas — common bug in nested grids.',
          'Use overflow:hidden on body to trap users without escape — modal patterns excepted.',
        ],
      },
    },
  },

  splitter: {
    purpose: [
      'Splitter divides adjacent panes in a layout — master-detail, tree + content, grid + inspector — with a draggable handle users adjust to allocate horizontal or vertical space. It is essential in power-user B2B interfaces where users persistently prefer wider grids or taller log panels.',
      'Splitter enforces minimum and maximum pane sizes, double-click reset to defaults, and optional collapse-to-edge behavior. Persist user-adjusted sizes per module in local storage or user preferences when workflows benefit.',
    ],
    anatomy: {
      paragraphs: [
        'A split layout contains two (or more) panes separated by a focusable drag handle with hit area wider than the visible divider line.',
      ],
      parts: [
        { name: 'Pane A / Pane B', desc: 'Independent scroll regions — each maintains its own overflow and focus context.' },
        { name: 'Divider handle', desc: 'Draggable grip with resize cursor — includes invisible expanded hit target for touch.' },
        { name: 'Collapse affordance (optional)', desc: 'Chevron or double-click collapses pane to minimum width ribbon.' },
        { name: 'Size constraint', desc: 'Min/max pixels or percentages preventing panes from disappearing entirely.' },
      ],
    },
    variants: {
      intro: 'Orientation and persistence variants cover common enterprise layout shells.',
      rows: [
        ['Horizontal split', 'Left/right panes — navigation + content, grid + inspector.'],
        ['Vertical split', 'Top/bottom — chart + table, form + preview log.'],
        ['Nested split', 'Horizontal within vertical — use sparingly; test keyboard complexity.'],
        ['Collapsible pane', 'One pane collapses to icon rail — handle remains for restore.' ],
      ],
    },
    states: {
      intro: 'Splitter handle and panes reflect drag, collapse, and constraint states.',
      rows: [
        ['Idle', 'Handle visible at rest; cursor indicates resize direction on hover.' ],
        ['Dragging', 'Active resize — live preview or deferred layout update per performance budget.' ],
        ['Collapsed', 'Pane at minimum — handle still operable to restore; aria-valuenow reflects ratio.' ],
        ['Disabled', 'Fixed layout — handle hidden when resize not permitted for role or viewport.' ],
      ],
    },
    dosDonts: {
      do: [
        'Set sensible defaults (40/60) based on primary task emphasis.',
        'Persist sizes when users repeatedly adjust — reduces daily friction.',
        'Provide double-click handle to reset default ratio.',
      ],
      dont: [
        'Allow panes to resize to zero without explicit collapse — users lose restore affordance.',
        'Nest more than two split levels without strong IA justification.',
        'Use Splitter for cosmetic spacing — use layout grid tokens instead.',
      ],
    },
    usage: {
      when: [
        'Master-detail modules: object list + detail, tree navigation + workspace.',
        'Configurable analytics layouts where users balance chart vs table height.',
        'IDE-style panels: source, preview, and log stacks.',
      ],
      whenNot: [
        'Fixed marketing layouts with no user preference benefit.',
        'Mobile single-column views — use responsive stack instead of draggable split.',
        'Separating unrelated pages — use routing, not split panes.',
      ],
      scenarios: [
        { title: 'Grid + inspector', desc: 'Horizontal split: 70% grid, 30% detail inspector; min width on inspector preserves form readability.' },
        { title: 'Tree navigation', desc: 'Left pane 280px default collapsible to icon rail; right pane flex-grow workspace.' },
        { title: 'Persisted layout', desc: 'User widens log panel to 40% height — saved to preferences for next session.' },
      ],
      bestPractices: [
        'Show resize cursor on handle hover — discoverability drops without it.',
        'Debounce persistence writes during drag; save on pointerup.',
        'On small viewports, disable split and stack panes with Tabstrip or accordion instead.',
      ],
      layout: [
        'Handle hit area minimum 8px (16px touch) orthogonal to split direction.',
        'Each pane scrolls independently — do not propagate overflow to parent incorrectly.',
      ],
    },
    a11y: {
      roles: [
        'Handle implements role="separator" with aria-orientation horizontal or vertical when following separator pattern.',
        'Alternatively role="slider" with aria-valuemin, aria-valuemax, aria-valuenow for proportional split.',
      ],
      focus: [
        'Handle must be keyboard focusable — not mouse-only resize.',
        'Focus remains in content pane during drag unless focus explicitly moved to handle.',
      ],
      keyboard: [
        { key: 'Arrow keys', action: 'Move split ratio incrementally when handle focused — Left/Right or Up/Down per orientation.' },
        { key: 'Home / End', action: 'Jump to min or max allowed ratio.' },
        { key: 'Enter', action: 'Optional reset to default ratio when focused on handle.' },
      ],
      aria: [
        { attr: 'aria-valuenow', when: 'On separator/slider handle — current split percentage.' },
        { attr: 'aria-valuemin / aria-valuemax', when: 'Reflect min/max pane constraints.' },
        { attr: 'aria-label', when: 'Describes action ("Resize panels", "Navigation pane width").' },
      ],
      screenReaders: [
        'Announce value changes on keyboard adjust — aria-valuetext human-readable ("Navigation 280 pixels").',
        'Collapsed pane state exposed via aria-expanded on collapse control if separate from handle.',
      ],
      dosDonts: {
        do: [
          'Implement keyboard resize — mouse-only splitters fail WCAG 2.1.1 Keyboard.',
          'Expose current size in aria-valuetext during adjustment.',
        ],
        dont: [
          'Hide handle entirely without programmatic alternative to reach collapsed pane.',
          'Trap focus inside one pane after resize — Tab order must cross split boundary.',
        ],
      },
    },
  },
}
