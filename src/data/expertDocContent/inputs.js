/**
 * Expert design-system documentation for Inputs category components.
 * Consumed by createExpertComponentPage via getExpertDoc().
 */

/** @type {Record<string, import('./index').ExpertDocContent>} */
export const INPUTS_EXPERT_DOC = {
  checkbox: {
    purpose: [
      'Checkbox lets users make a single binary choice or express partial selection in hierarchical lists. In enterprise planning and configuration workflows, checkboxes gate permissions, include or exclude data dimensions, and opt users into policies without leaving the current task.',
      'Unlike Radio or Switch, Checkbox supports independent on/off states and an indeterminate state for parent rows that partially reflect child selections. Use Checkbox Group when several related options share a fieldset and need collective validation.',
    ],
    anatomy: {
      paragraphs: [
        'Each Checkbox pairs a native checkbox input with an inline label. The clickable area includes both the box and label text for a generous touch target.',
      ],
      parts: [
        { name: 'Field container', desc: 'Wraps the input and label; carries hover, focus, and disabled styling.' },
        { name: 'Checkbox input', desc: 'Native input type checkbox. Checkmark or dash is rendered visually on the box surface.' },
        { name: 'Label', desc: 'Required for standalone use. Describes what checking the box means.' },
        { name: 'Error message', desc: 'Optional inline validation text below the field when the form reports an error.' },
      ],
    },
    variants: {
      intro: 'Checkbox has no visual tone variants. Size is the primary configurable dimension.',
      rows: [
        ['Default', 'Standard density for forms, filters, and settings panels.'],
        ['Small', 'Compact tables, dense property panels, and inline grid editors.'],
      ],
    },
    states: {
      intro: 'States must be distinguishable by shape and label contrast, not color alone.',
      rows: [
        ['Unchecked', 'Default idle state; no selection applied.'],
        ['Checked', 'Selection is active; checkmark visible inside the box.'],
        ['Indeterminate', 'Partial selection in a hierarchy; horizontal dash replaces the checkmark.'],
        ['Hover', 'Pointer feedback on the field container when interactive.'],
        ['Focus', 'Visible focus ring on keyboard navigation; not shown on mouse click.'],
        ['Disabled', 'Non-interactive; removed from tab order; label uses muted styling.'],
        ['Read-only', 'Value visible but cannot be toggled by the user.'],
        ['Error', 'Validation failed; error message and error styling applied.'],
      ],
    },
    sizes: {
      intro: 'Match checkbox size to adjacent inputs and table row density.',
      rows: [
        ['Small', '24px box', 'Dense grids, inline filters, secondary panels.'],
        ['Large (default)', '32px box', 'Standard forms, dialogs, and configuration wizards.'],
      ],
    },
    contentGuidelines: {
      intro: 'Labels should state what happens when the box is checked, not restate the field name alone.',
      good: [
        'Include archived records in export',
        'Notify me when the plan is published',
        'Apply filter to all worksheets',
      ],
      avoid: [
        'Checkbox (no verb or outcome)',
        'Yes (ambiguous without context)',
        'Click here to enable the thing',
      ],
    },
    dosDonts: {
      do: [
        'Use positive, action-oriented label copy that describes the enabled state.',
        'Place the parent Checkbox above nested child checkboxes when using indeterminate.',
        'Group related checkboxes in a Checkbox Group with a visible legend.',
        'Preserve checked state when the user navigates away and returns within the same session.',
        'Align checkbox columns in tables for scannability.',
      ],
      dont: [
        'Use a lone Checkbox for mutually exclusive options — use Radio Group instead.',
        'Rely on color alone to indicate checked or error states.',
        'Nest more than two levels of indeterminate hierarchies without clear labels.',
        'Disable a Checkbox without explaining why nearby when the reason is not obvious.',
        'Use Checkbox for immediate system-wide irreversible actions without confirmation.',
      ],
    },
    usage: {
      when: [
        'Users may select zero, one, or many independent options.',
        'A parent control must reflect partial selection of child rows.',
        'Opt-in consent, feature flags, or inclusion toggles in forms and filters.',
        'Bulk selection in data grids where each row is independent.',
      ],
      whenNot: [
        'Only one option may be selected from a set — use Radio Group.',
        'The setting should read as an immediate on/off system state — use Switch.',
        'Choosing from a long searchable list — use Multi-Select or Combobox.',
      ],
      scenarios: [
        { title: 'Export options', desc: 'Let planners choose which dimensions, measures, and formatting to include before generating a file.' },
        { title: 'Column visibility', desc: 'Toggle which columns appear in a grid; parent checkbox selects all visible columns with indeterminate when some are hidden.' },
        { title: 'Terms acceptance', desc: 'Single required Checkbox on registration or compliance flows; pair with inline validation.' },
        { title: 'Filter chips precursor', desc: 'Multiple checkboxes in a filter panel that later collapse into Chip selections in the toolbar.' },
      ],
      bestPractices: [
        'Default unchecked unless the choice reflects an existing saved preference.',
        'Keep labels concise; move long explanations to helper text below the group legend.',
        'In tables, put the header Checkbox in the first column with indeterminate for partial page selection.',
        'Submit grouped values as an array or map; do not require one Checkbox per API field when a group suffices.',
        'When a Checkbox enables dependent fields, reveal those fields immediately on check without a separate Apply step when safe.',
      ],
      layout: [
        'Stack checkboxes vertically with consistent 8px spacing in forms.',
        'In horizontal toolbars, separate Checkbox groups with dividers or section labels.',
        'Right-align checkbox columns in numeric tables only when it aids comparison with row actions.',
      ],
    },
    a11y: {
      roles: [
        'Native checkbox input — no role override required.',
        'Indeterminate is exposed to assistive technology via the indeterminate IDL property, not aria-checked="mixed" alone on a div.',
      ],
      focus: [
        'Checkbox receives focus in document order via Tab.',
        'Focus ring must meet 3:1 contrast against adjacent surfaces.',
        'Disabled checkboxes are skipped in the tab order.',
      ],
      keyboard: [
        { key: 'Space', action: 'Toggle checked state when focus is on the checkbox.' },
        { key: 'Tab', action: 'Move focus to the next focusable control.' },
        { key: 'Shift+Tab', action: 'Move focus to the previous focusable control.' },
      ],
      aria: [
        { attr: 'aria-describedby', when: 'Link helper text or error message elements when present.' },
        { attr: 'aria-invalid', when: 'Set to true when validation fails.' },
        { attr: 'aria-required', when: 'The checkbox must be checked before submit.' },
      ],
      screenReaders: [
        'Announce label, checked/unchecked/indeterminate, disabled, and required state.',
        'Error messages linked via aria-describedby are read after the label when focus moves to the field.',
      ],
      dosDonts: {
        do: [
          'Use a native input type checkbox wherever possible.',
          'Ensure the label is programmatically associated with the input.',
        ],
        dont: [
          'Build custom toggle divs without equivalent semantics.',
          'Use indeterminate as a permanent stored value — it is a visual sync state for hierarchies.',
        ],
      },
    },
  },

  'checkbox-group': {
    purpose: [
      'Checkbox Group organizes related checkboxes under one legend so users understand they are choosing among complementary options, not unrelated toggles scattered on the page.',
      'In B2B configuration UIs, groups bundle feature entitlements, notification channels, or data scope selections with shared validation, error messaging, and keyboard navigation patterns.',
    ],
    anatomy: {
      paragraphs: [
        'The group wraps multiple Checkbox instances in a fieldset-like structure with a group label and optional helper or error text.',
      ],
      parts: [
        { name: 'Legend / group label', desc: 'Names the set of options; required for accessibility and scanability.' },
        { name: 'Helper text', desc: 'Optional guidance above or below the legend explaining constraints.' },
        { name: 'Checkbox list', desc: 'Vertical or horizontal list of Checkbox components sharing group context.' },
        { name: 'Group error', desc: 'Summary error when at least one selection is required or a business rule fails.' },
        { name: 'Select-all control', desc: 'Optional parent Checkbox with indeterminate state for bulk toggle.' },
      ],
    },
    variants: {
      intro: 'Layout orientation is the main variant.',
      rows: [
        ['Vertical stack', 'Default for forms and settings; best for long labels and mobile widths.'],
        ['Horizontal row', 'Short labels and two to four options; wrap on narrow viewports.'],
        ['With select-all', 'Parent row above children for bulk enable/disable in tables or permission matrices.'],
      ],
    },
    states: {
      intro: 'Group-level states complement individual checkbox states.',
      rows: [
        ['Default', 'No selection constraints active; individual boxes reflect their own state.'],
        ['Required incomplete', 'Submit attempted without meeting minimum selection; group error shown.'],
        ['Partial selection', 'Select-all parent shows indeterminate when some children are checked.'],
        ['Disabled group', 'All children disabled; legend remains readable with muted styling.'],
        ['Read-only group', 'Values visible; toggling blocked at group or item level.'],
      ],
    },
    contentGuidelines: {
      intro: 'Legend text frames the decision; option labels stay parallel in grammar and length.',
      good: [
        'Legend: Notification channels — Options: Email, In-app, Mobile push',
        'Legend: Include in forecast — parallel verb phrases on each option',
      ],
      avoid: [
        'Legend: Options (too generic)',
        'Mixing questions and statements across options in one group',
        'Repeating the legend text in every checkbox label',
      ],
    },
    dosDonts: {
      do: [
        'Use one legend per logical decision.',
        'Keep option labels grammatically parallel.',
        'Validate minimum and maximum selections at the group level with clear error copy.',
        'Use select-all only when every child option is visible without scrolling.',
      ],
      dont: [
        'Split one decision across multiple groups without reason.',
        'Mix Radio and Checkbox in the same group.',
        'Hide required group errors only on individual items when the rule applies to the set.',
      ],
    },
    usage: {
      when: [
        'Two or more related options may be selected independently.',
        'The form must enforce at least one or at most N selections from the set.',
        'Permissions, scopes, or dimensions are configured as a bundle.',
      ],
      whenNot: [
        'Exactly one choice is required — use Radio Group.',
        'A single binary opt-in suffices — use one Checkbox.',
        'Options exceed roughly twelve visible items — use Multi-Select or Listbox.',
      ],
      scenarios: [
        { title: 'Role permissions', desc: 'Administrators grant read, write, and admin capabilities per module; at least one module must remain selected.' },
        { title: 'Report dimensions', desc: 'Planners pick which hierarchies to include; select-all toggles entire category with indeterminate on partial picks.' },
        { title: 'Alert subscriptions', desc: 'Users choose channels; group validates that enterprise policy allows the combination.' },
      ],
      bestPractices: [
        'Order options logically: alphabetical, frequency of use, or domain hierarchy — not random API order.',
        'Show selection count in the legend when max selections apply, e.g. Choose up to 3.',
        'Persist group state in URL or session when filters are shareable.',
        'Disable incompatible combinations with inline explanation rather than silent omission when possible.',
      ],
      layout: [
        'Prefer vertical stacking for labels longer than three words.',
        'Use horizontal layout only when all labels are short and the group fits above the fold.',
        'Separate unrelated groups with 24px vertical spacing minimum.',
      ],
    },
    a11y: {
      roles: [
        'Group is exposed via fieldset and legend or aria-labelledby on a container with role group.',
        'Each child remains a native checkbox with its own label.',
      ],
      focus: [
        'Tab moves through each checkbox in DOM order.',
        'Optional roving tabindex pattern for arrow-key navigation within the group in dense matrices.',
      ],
      keyboard: [
        { key: 'Tab / Shift+Tab', action: 'Move between checkboxes and other controls.' },
        { key: 'Space', action: 'Toggle the focused checkbox.' },
        { key: 'Arrow keys (optional pattern)', action: 'Move between options when roving tabindex is implemented for horizontal groups.' },
      ],
      aria: [
        { attr: 'aria-labelledby', when: 'Legend element ids the group when fieldset is not used.' },
        { attr: 'aria-describedby', when: 'Helper or error text applies to the whole group.' },
        { attr: 'aria-invalid', when: 'Group-level validation fails.' },
      ],
      screenReaders: [
        'Legend is announced when focus enters the first checkbox or when navigating by group.',
        'Select-all indeterminate state is announced on the parent checkbox.',
      ],
      dosDonts: {
        do: ['Provide a visible legend for every checkbox group.'],
        dont: ['Rely on placeholder spacing alone to imply grouping.'],
      },
    },
  },

  chip: {
    purpose: [
      'Chip represents a compact, removable token for a selected value, filter, tag, or entity. Chips make active constraints visible at a glance in toolbars, search headers, and multi-select fields.',
      'In enterprise data applications, Chips surface applied filters, assigned owners, or chosen dimensions without reopening the picker. They reduce cognitive load by showing what the system will act on before the user runs a query or saves.',
    ],
    anatomy: {
      paragraphs: [
        'A Chip is a pill-shaped container with a text label and optional leading icon, trailing remove control, or status indicator.',
      ],
      parts: [
        { name: 'Container', desc: 'Rounded pill background carrying hover and focus styles.' },
        { name: 'Leading icon', desc: 'Optional visual cue for entity type or severity.' },
        { name: 'Label', desc: 'Primary text; often truncated with tooltip for long values.' },
        { name: 'Remove button', desc: 'Icon button to dismiss the chip when the selection is editable.' },
        { name: 'Overflow counter', desc: 'Optional +N chip when many selections collapse in constrained space.' },
      ],
    },
    variants: {
      intro: 'Chips differ by interactivity and emphasis.',
      rows: [
        ['Input chip', 'Removable selection inside Multi-Select, Combobox, or filter bars.'],
        ['Filter chip', 'Represents an active filter; remove clears that constraint.'],
        ['Static chip', 'Read-only tag for status or category; no remove control.'],
        ['Avatar chip', 'Shows person or team with optional remove for assignee lists.'],
      ],
    },
    states: {
      intro: 'Interactive chips need clear hover, focus, and disabled treatment on the remove affordance.',
      rows: [
        ['Default', 'Selection is active and removable if editable.'],
        ['Hover', 'Background shift on chip or remove button for pointer users.'],
        ['Focus', 'Focus ring on remove button or entire chip when keyboard activatable.'],
        ['Disabled', 'Non-interactive; muted styling; remove hidden or inert.'],
        ['Error', 'Invalid selection flagged before submit, e.g. deprecated dimension.'],
        ['Overflow', 'Collapsed into +N summary chip with popover listing items.'],
      ],
    },
    sizes: {
      intro: 'Chip height should align with the input or toolbar it accompanies.',
      rows: [
        ['Small', '24px', 'Dense filter bars and table inline editors.'],
        ['Medium', '32px', 'Default for multi-select fields and page headers.'],
      ],
    },
    contentGuidelines: {
      intro: 'Chip labels should be scannable abbreviations of the full value, not sentences.',
      good: [
        'Region: EMEA',
        'Owner: J. Patel',
        'Status: Approved',
      ],
      avoid: [
        'Full paragraph descriptions inside a chip',
        'Duplicate field name when context is obvious: Filter Filter Region EMEA',
        'Cryptic codes without tooltip when users need the expanded name',
      ],
    },
    dosDonts: {
      do: [
        'Truncate long values with tooltip showing the full string.',
        'Provide remove affordance on editable selections.',
        'Collapse excess chips into +N with accessible overflow panel.',
        'Keep chip order stable when new selections append.',
      ],
      dont: [
        'Use Chips as primary navigation.',
        'Remove chips silently without updating dependent queries or counts.',
        'Show more than one row of chips without a clear clear-all action in filter contexts.',
      ],
    },
    usage: {
      when: [
        'Selected values must remain visible while the user continues editing.',
        'Filters or tags need quick removal without opening a dropdown.',
        'Multi-Select or Combobox needs inline representation of choices.',
      ],
      whenNot: [
        'A single static label suffices — use Badge or text.',
        'The user picks one value only — show it in the Select trigger instead.',
        'Long prose tags — use a list with remove actions.',
      ],
      scenarios: [
        { title: 'Filter bar', desc: 'Each applied dimension appears as a removable Chip; clearing one refreshes the grid.' },
        { title: 'Multi-Select field', desc: 'Chosen options render as Chips inside the input area with keyboard-accessible remove.' },
        { title: 'Assignee list', desc: 'Avatar Chips show who owns a task; remove updates permissions immediately or on save depending on pattern.' },
      ],
      bestPractices: [
        'Offer Clear all when three or more filter chips are active.',
        'Animate chip exit subtly; avoid layout jumps that shift primary actions.',
        'Sync chip removal with URL query params on shareable views.',
        'Use consistent label pattern: Attribute: Value when multiple chip types mix in one bar.',
      ],
      layout: [
        'Wrap chips within the input footprint; expand field height before overflowing horizontally off-screen.',
        'Place filter chips below the search field or inline per product convention — stay consistent app-wide.',
      ],
    },
    a11y: {
      roles: [
        'Removable chips expose remove as a button with an accessible name referencing the chip value.',
        'Static chips may use list item semantics when grouped in a list of tags.',
      ],
      focus: [
        'Remove buttons are focusable; Tab order flows through chips left to right.',
        'Overflow +N control receives focus and opens a list of hidden selections.',
      ],
      keyboard: [
        { key: 'Tab', action: 'Move to next chip remove button or field control.' },
        { key: 'Delete / Backspace', action: 'Remove focused chip when focus is in the hosting input per pattern.' },
        { key: 'Enter / Space', action: 'Activate remove button when focused.' },
      ],
      aria: [
        { attr: 'aria-label on remove', when: 'Name the action, e.g. Remove Region EMEA.' },
        { attr: 'aria-describedby', when: 'Overflow chip lists count of hidden items.' },
      ],
      screenReaders: [
        'Announce chip label and removable state.',
        'Removing a chip should trigger a polite live region update when filter results change.',
      ],
      dosDonts: {
        do: ['Give each remove button a unique accessible name.'],
        dont: ['Make the entire chip a single div with no keyboard path to remove.'],
      },
    },
  },

  combobox: {
    purpose: [
      'Combobox combines a text input with a suggestion list so users can type, filter, and pick from structured options or enter a valid custom value when allowed.',
      'Use it when the option set is large or search-dependent — product catalogs, customer accounts, SKU lookup — where Select Dropdown alone would force excessive scrolling.',
    ],
    anatomy: {
      paragraphs: [
        'The control merges an editable or read-only input, optional leading icon, clear button, and an anchored listbox panel.',
      ],
      parts: [
        { name: 'Label', desc: 'Field label above the input identifying the data being chosen.' },
        { name: 'Input', desc: 'Text field showing the current value or filter string.' },
        { name: 'Toggle / clear', desc: 'Optional chevron to open list and clear to reset selection.' },
        { name: 'Listbox panel', desc: 'Overlay with filtered options, groups, empty state, and loading indicator.' },
        { name: 'Option row', desc: 'Single selectable item; may include icons, secondary text, or disabled state.' },
        { name: 'Error message', desc: 'Validation feedback when free text or selection fails rules.' },
      ],
    },
    variants: {
      intro: 'Behavior variants define whether free text is permitted.',
      rows: [
        ['Strict selection', 'User must pick a list option; free text is rejected on blur.'],
        ['Creatable', 'User may enter a value not in the list when business rules allow.'],
        ['Async', 'Options load from server as the user types; show loading and empty states.'],
        ['Multi-value', 'Prefer Multi-Select when multiple tokens are required; Combobox stays single-value primary.'],
      ],
    },
    states: {
      intro: 'Combobox states span the input, panel, and async fetch lifecycle.',
      rows: [
        ['Closed', 'Value displayed; panel hidden.' ],
        ['Open', 'Panel visible; active option highlighted.' ],
        ['Filtering', 'Input text narrows visible options in real time.' ],
        ['Loading', 'Spinner or skeleton in panel while fetching suggestions.' ],
        ['Empty results', 'No matches; guide user to refine search or create if allowed.' ],
        ['Disabled / read-only', 'Input non-interactive; panel cannot open.' ],
        ['Error', 'Invalid value or required field empty on submit.' ],
      ],
    },
    sizes: {
      intro: 'Align Combobox height with adjacent form fields.',
      rows: [
        ['Small', '24px', 'Dense toolbars and inline grid editors.'],
        ['Medium', '32px', 'Default forms and dialogs.'],
        ['Large', '40px', 'Marketing-style flows and low-density layouts.'],
      ],
    },
    contentGuidelines: {
      intro: 'Placeholder and empty-state copy should teach what can be searched.',
      good: [
        'Search by customer name or ID',
        'No matches — try a different SKU or create a request',
      ],
      avoid: [
        'Type here (no domain hint)',
        'Showing raw internal codes as the only visible label without human-readable text',
      ],
    },
    dosDonts: {
      do: [
        'Debounce async queries to reduce server load.',
        'Highlight matching substring in option labels.',
        'Select text in input on focus when replacing an existing value is common.',
        'Close panel on selection and move focus appropriately.',
      ],
      dont: [
        'Use Combobox for fewer than seven static options — use Select Dropdown or Radio Group.',
        'Open the panel on every keystroke without minimum character threshold on huge datasets.',
        'Allow creatable values when downstream systems require strict master data keys.',
      ],
    },
    usage: {
      when: [
        'Users know part of the value and need typeahead to find the rest.',
        'Option lists exceed practical scroll length or are server-paginated.',
        'Secondary metadata in options helps disambiguate similar names.',
      ],
      whenNot: [
        'Small fixed enums — use Select Dropdown.',
        'Multiple simultaneous selections — use Multi-Select.',
        'Pure date or numeric entry — use specialized pickers.',
      ],
      scenarios: [
        { title: 'Customer lookup', desc: 'Planner types a name fragment; list shows account ID and region for disambiguation.' },
        { title: 'SKU entry', desc: 'Strict selection from catalog; invalid free text blocked with inline error.' },
        { title: 'Async reference data', desc: 'Options load after three characters; recent selections appear before remote results when helpful.' },
      ],
      bestPractices: [
        'Show recent or favorite options when the panel opens with an empty filter.',
        'Preserve scroll position when reopening within the same session.',
        'Submit the canonical option value, not just display text.',
        'Cap panel height and virtualize very long result sets.',
      ],
      layout: [
        'Full-width in forms; fixed width in toolbars when paired with Search.',
        'Anchor panel to input width minimum; widen for long secondary lines when needed.',
      ],
    },
    a11y: {
      roles: [
        'Input paired with listbox popup following combobox pattern.',
        'Active option uses aria-activedescendant or roving focus within the list.',
      ],
      focus: [
        'Focus remains in input while navigating options with arrows in aria-activedescendant pattern.',
        'Return focus to input after selection; trap is not used inside the panel.',
      ],
      keyboard: [
        { key: 'Arrow Down / Up', action: 'Open panel or move active option.' },
        { key: 'Enter', action: 'Select active option.' },
        { key: 'Escape', action: 'Close panel without changing value.' },
        { key: 'Home / End', action: 'Jump to first or last option when open.' },
        { key: 'Tab', action: 'Close panel and move focus forward.' },
      ],
      aria: [
        { attr: 'aria-expanded', when: 'Reflects whether listbox is open.' },
        { attr: 'aria-controls', when: 'Links input to listbox element id.' },
        { attr: 'aria-autocomplete', when: 'Set to list when filtering predefined options.' },
        { attr: 'aria-activedescendant', when: 'Points to highlighted option while typing.' },
      ],
      screenReaders: [
        'Announce number of results when filter changes if count is stable and performant.',
        'Loading and empty states should use polite live regions.',
      ],
      keyboardCallout: 'Do not steal standard text-editing shortcuts such as Ctrl+A when focus is in the input.',
      dosDonts: {
        do: ['Label the input with the same field label as other form controls.'],
        dont: ['Use a div without combobox semantics for typeahead behavior.'],
      },
    },
  },

  'date-picker': {
    purpose: [
      'Date Picker lets users choose a single calendar date with a constrained, locale-aware control instead of typing ambiguous date strings.',
      'In planning and supply-chain workflows, dates gate horizons, validity windows, and as-of snapshots. The picker reduces format errors and supports keyboard and screen-reader friendly calendar navigation.',
    ],
    anatomy: {
      paragraphs: [
        'Date Picker pairs a formatted text input or trigger with a calendar overlay for point-and-click selection.',
      ],
      parts: [
        { name: 'Label', desc: 'Identifies the date field meaning, e.g. Start date or As-of date.' },
        { name: 'Input / trigger', desc: 'Shows selected date in locale format; opens calendar on focus or icon click.' },
        { name: 'Calendar icon', desc: 'Optional affordance to open the picker for mouse users.' },
        { name: 'Calendar panel', desc: 'Month grid with navigation, today shortcut, and disabled out-of-range days.' },
        { name: 'Clear control', desc: 'Optional reset when date is optional.' },
        { name: 'Error message', desc: 'Invalid manual entry or required field empty.' },
      ],
    },
    variants: {
      intro: 'Variants reflect input strictness and display granularity.',
      rows: [
        ['Input + calendar', 'Default — typed entry validated against allowed formats.'],
        ['Calendar-only trigger', 'Read-only input; selection only via calendar — use when free typing causes errors.'],
        ['With min/max', 'Business rules disable dates outside the allowable window.'],
      ],
    },
    states: {
      intro: 'Communicate selection, navigation month, and constraint clearly.',
      rows: [
        ['Empty', 'Placeholder shows expected format hint.' ],
        ['Filled', 'Formatted date in input; calendar highlights selected day.' ],
        ['Open', 'Calendar visible; focus managed inside panel.' ],
        ['Hover / focus day', 'Preview selection target in grid.' ],
        ['Disabled day', 'Outside min/max or non-business day — not selectable.' ],
        ['Error', 'Parse failure or required missing on submit.' ],
        ['Disabled field', 'Entire control inert.' ],
      ],
    },
    sizes: {
      intro: 'Match other form inputs in the same row.',
      rows: [
        ['Small', '24px', 'Inline grid date columns.'],
        ['Medium', '32px', 'Standard forms.'],
      ],
    },
    contentGuidelines: {
      intro: 'Labels name the business meaning of the date; placeholders show format, not the label.',
      good: [
        'Label: Effective date — Placeholder: MM/DD/YYYY per locale',
        'Helper: Must be within the current planning horizon',
      ],
      avoid: [
        'Label: Date (ambiguous in multi-date forms)',
        'Allowing multiple locale formats without validation feedback',
      ],
    },
    dosDonts: {
      do: [
        'Respect user locale for display while storing ISO 8601 internally.',
        'Disable impossible dates rather than erroring after selection when rules are known upfront.',
        'Provide Today shortcut when relevant to operational workflows.',
        'Close calendar on selection for single-date fields.',
      ],
      dont: [
        'Force US-only format in global deployments without locale config.',
        'Use Date Picker for full timestamps — use Date Time Picker.',
        'Hide min/max rules — surface them in helper text when non-obvious.',
      ],
    },
    usage: {
      when: [
        'Exact calendar date is required with validation against business calendars.',
        'Typed dates historically cause support burden or import errors.',
        'Users benefit from visual month context for weekday/weekend choices.',
      ],
      whenNot: [
        'Relative ranges like Last 30 days — use presets or Date Range Picker.',
        'Time-of-day matters — use Date Time Picker or Time Picker.',
        'Birth-year-only or month-year alone — use specialized partial date inputs.',
      ],
      scenarios: [
        { title: 'Plan start', desc: 'Planner sets horizon start; weekends disabled per calendar config.' },
        { title: 'Contract effective date', desc: 'Required field; cannot precede today; clear error on violation.' },
        { title: 'Filter as-of', desc: 'Optional date in toolbar; defaults to today; clears to run live data.' },
      ],
      bestPractices: [
        'Default sensible values when business rules allow, e.g. today or period start.',
        'Keep calendar aligned to input on scroll and resize.',
        'Validate manual entry on blur with specific error messages.',
        'Sync picker timezone with data timezone in global apps.',
      ],
      layout: [
        'Place date fields in logical order: start before end in paired layouts.',
        'Avoid nesting calendar inside small popovers without collision detection.',
      ],
    },
    a11y: {
      roles: [
        'Calendar grid uses role grid with row and gridcell for days.',
        'Selected day exposed with aria-selected.',
      ],
      focus: [
        'Focus moves into calendar on open; returns to input on close and select.',
        'Disabled days skipped in keyboard navigation.',
      ],
      keyboard: [
        { key: 'Arrow keys', action: 'Move between days in the grid.' },
        { key: 'Page Up / Down', action: 'Change month.' },
        { key: 'Enter / Space', action: 'Select focused day.' },
        { key: 'Escape', action: 'Close calendar without change.' },
        { key: 'Tab', action: 'Exit calendar per focus trap rules of the implementation.' },
      ],
      aria: [
        { attr: 'aria-label on navigation', when: 'Previous month and next month buttons named explicitly.' },
        { attr: 'aria-disabled', when: 'Non-selectable days.' },
        { attr: 'aria-invalid', when: 'Input validation fails.' },
      ],
      screenReaders: [
        'Announce selected date and visible month when calendar opens.',
        'Read disabled state for out-of-range days when focused.',
      ],
      dosDonts: {
        do: ['Provide text input alternative for users who prefer typing dates.'],
        dont: ['Rely on color alone for selected and today indicators.'],
      },
    },
  },

  'date-range-picker': {
    purpose: [
      'Date Range Picker selects a start and end date as one logical value for filters, reporting windows, and validity periods.',
      'Enterprise users constantly bound analyses — fiscal periods, shipment windows, promotion ranges. A unified control prevents inverted ranges and ambiguous partial entry.',
    ],
    anatomy: {
      paragraphs: [
        'The component combines two linked inputs or a single summary trigger with a dual-calendar or range-highlighted calendar panel.',
      ],
      parts: [
        { name: 'Range label', desc: 'Describes the bounded period, e.g. Reporting period.' },
        { name: 'Start input', desc: 'Beginning of range; may share one visual field with separator.' },
        { name: 'End input', desc: 'End of range; auto-adjusts if before start per product rules.' },
        { name: 'Calendar panel', desc: 'Highlights inclusive range; may show two months side by side.' },
        { name: 'Presets', desc: 'Optional shortcuts: Last 7 days, This quarter, Custom.' },
        { name: 'Error message', desc: 'Invalid range, empty required half, or exceeds max span.' },
      ],
    },
    variants: {
      intro: 'Preset-driven vs fully custom selection.',
      rows: [
        ['Dual input', 'Separate start and end fields opening one shared calendar.'],
        ['Single trigger', 'Compact toolbar control showing formatted range summary.'],
        ['With presets', 'Quick ranges plus custom calendar for exceptions.'],
        ['Max span enforced', 'Disables end dates that exceed allowed window length.' ],
      ],
    },
    states: {
      intro: 'Range selection is a multi-step interaction; show progress in the calendar highlight.',
      rows: [
        ['Empty', 'Both halves unset; placeholder describes expected span.' ],
        ['Start only', 'First click set; awaiting end date; intermediate highlight.' ],
        ['Complete', 'Start and end set; inclusive highlight across grid.' ],
        ['Inverted prevented', 'End before start auto-swaps or blocks with message.' ],
        ['Preset active', 'Shortcut selected; custom calendar reflects preset bounds.' ],
        ['Error', 'Span too long, required range missing, or policy violation.' ],
      ],
    },
    contentGuidelines: {
      intro: 'Summarize ranges clearly in filters and chips.',
      good: [
        'Jan 1, 2025 – Jan 31, 2025',
        'Preset label: Last 30 days with tooltip showing exact bounds',
      ],
      avoid: [
        '01/01–01/31 without year in cross-year contexts',
        'Exclusive end dates without documenting whether end day is included',
      ],
    },
    dosDonts: {
      do: [
        'Document whether range endpoints are inclusive in helper text when ambiguous.',
        'Swap start/end automatically if user picks reverse order when that aids completion.',
        'Offer presets aligned to fiscal calendar for finance users.',
        'Emit one structured range object to APIs.',
      ],
      dont: [
        'Use two unrelated Date Pickers without linking validation.',
        'Allow unbounded historical queries without warning on performance impact.',
        'Clear only one half silently on preset change without updating the summary.',
      ],
    },
    usage: {
      when: [
        'Reports, exports, and dashboards filter by a continuous time window.',
        'Business rules apply to the span length or alignment to period boundaries.',
        'Users frequently reuse common relative ranges.',
      ],
      whenNot: [
        'Single moment in time — use Date Time Picker.',
        'Non-contiguous dates — use multiple checkboxes or multi-select calendar pattern.',
      ],
      scenarios: [
        { title: 'Sales report filter', desc: 'Preset This quarter selected; custom range available for ad hoc analysis.' },
        { title: 'Promotion scheduling', desc: 'Start/end required; max 90-day span; weekends allowed.' },
        { title: 'Audit export', desc: 'Range capped at 31 days; error explains limit before run.' },
      ],
      bestPractices: [
        'Show selected range as Chips in the filter bar when space is tight.',
        'Persist last-used range per user for repeat workflows.',
        'Validate timezone boundaries for global teams on overnight ranges.',
        'Highlight today and fiscal period boundaries when configured.',
      ],
      layout: [
        'Side-by-side calendars on wide viewports; stacked on narrow.',
        'Place presets left or top of calendar per platform convention consistently.',
      ],
    },
    a11y: {
      roles: [
        'Each input retains date field semantics; calendar may expose range selection state on gridcells.',
      ],
      focus: [
        'Logical focus order: start, end, then calendar when opened from either field.',
        'Presets are buttons or radio group with visible selection state.',
      ],
      keyboard: [
        { key: 'Arrow keys', action: 'Navigate days; extend range per interaction model.' },
        { key: 'Enter', action: 'Confirm day in range selection sequence.' },
        { key: 'Escape', action: 'Close panel preserving last committed range.' },
        { key: 'Tab', action: 'Move between start, end, presets, and calendar controls.' },
      ],
      aria: [
        { attr: 'aria-describedby', when: 'Explain inclusive/exclusive endpoints on the group.' },
        { attr: 'aria-live polite', when: 'Announce completed range after second date chosen.' },
      ],
      screenReaders: [
        'Announce start date, end date, and preset name when selection completes.',
        'Read errors tying to the range group, not only one input.',
      ],
      dosDonts: {
        do: ['Label start and end fields distinctly even in compact single-trigger layouts.'],
        dont: ['Expose range only through color highlight without text summary in the input.'],
      },
    },
  },

  'date-time-picker': {
    purpose: [
      'Date Time Picker captures a specific moment — calendar date plus time — for timestamps, deadlines, and scheduled jobs in operational systems.',
      'When timezone, cutoffs, or SLA windows matter, combining date and time in one labeled control reduces mismatch between separately edited fields.',
    ],
    anatomy: {
      paragraphs: [
        'The control sequences date selection and time selection in one field group or stepped panel.',
      ],
      parts: [
        { name: 'Label', desc: 'Names the event or deadline being scheduled.' },
        { name: 'Date segment', desc: 'Date Picker input or readonly segment.' },
        { name: 'Time segment', desc: 'Time Picker input, steppers, or list.' },
        { name: 'Timezone indicator', desc: 'Optional badge showing zone when not implicit.' },
        { name: 'Combined summary', desc: 'Single line display in compact mode.' },
        { name: 'Error message', desc: 'Cross-field validation for impossible or past timestamps.' },
      ],
    },
    variants: {
      intro: 'Layout variants balance precision and compactness.',
      rows: [
        ['Split fields', 'Date and time side by side — clearest for forms.'],
        ['Sequential panel', 'Pick date in calendar then time in same overlay.'],
        ['UTC vs local', 'Explicit mode switch for global operations teams.'],
      ],
    },
    states: {
      intro: 'Validate the composed instant, not only individual segments.',
      rows: [
        ['Partial', 'Date set, time empty or vice versa when both required.' ],
        ['Complete', 'Full timestamp displayed in locale format.' ],
        ['Past disabled', 'Historical scheduling blocked for future-only events.' ],
        ['Timezone active', 'Display reflects selected zone.' ],
        ['Error', 'Invalid combination or outside allowed window.' ],
      ],
    },
    contentGuidelines: {
      intro: 'State timezone expectations explicitly in global products.',
      good: [
        'Publish at — helper: Times shown in your workspace timezone (IST)',
        'Deadline — Mar 15, 2025, 5:00 PM',
      ],
      avoid: [
        'Ambiguous 03/04/05 12:00 without AM/PM or zone',
        'Mixing 24h display with AM/PM picker without locale consistency',
      ],
    },
    dosDonts: {
      do: [
        'Store UTC internally; display in user or workspace timezone.',
        'Disable incoherent times on selected date, e.g. past times today.',
        'Keep date and time segments visually grouped under one legend.',
      ],
      dont: [
        'Use separate unlabeled date and time fields on different form sections.',
        'Allow submission when only half of a required datetime is set.',
      ],
    },
    usage: {
      when: [
        'Exact moment matters: releases, cutoffs, batch job schedules.',
        'Audit trails require timestamp precision beyond date alone.',
        'Users think in event time, not separate date and clock fields mentally.',
      ],
      whenNot: [
        'Date without time suffices — use Date Picker.',
        'Relative scheduling like in 2 hours — use duration or separate workflow.',
      ],
      scenarios: [
        { title: 'Plan publish', desc: 'Planner schedules scenario go-live; past times disabled on current day.' },
        { title: 'Maintenance window', desc: 'Start datetime and end datetime pairs validated for ordering and max duration.' },
        { title: 'Global handoff', desc: 'UTC storage with local display for regional coordinators.' },
      ],
      bestPractices: [
        'Default time segment to business-meaningful value, e.g. end of day or next hour boundary.',
        'Show ISO or tooltip with zone on hover for power users when needed.',
        'Revalidate when timezone context changes mid-edit.',
      ],
      layout: [
        'Group date and time with 8px gap; share one error region below.',
        'In compact toolbars, use popover with sequential steps rather than cramped inline segments.',
      ],
    },
    a11y: {
      roles: [
        'Composite field announced as one group with date and time parts labeled.',
      ],
      focus: [
        'Tab order flows date then time then auxiliary controls.',
        'Calendar and time list manage focus return on close.',
      ],
      keyboard: [
        { key: 'Tab', action: 'Move between date and time segments.' },
        { key: 'Arrow keys', action: 'Adjust time segments or calendar per focused part.' },
        { key: 'Enter', action: 'Commit segment selection in overlay steps.' },
        { key: 'Escape', action: 'Dismiss open segment without losing committed values.' },
      ],
      aria: [
        { attr: 'aria-labelledby on group', when: 'Single label covers both segments.' },
        { attr: 'aria-describedby', when: 'Timezone helper linked to composite field.' },
      ],
      screenReaders: [
        'Read full datetime when either segment changes if composition is complete.',
        'Announce timezone when it affects interpreted value.',
      ],
      dosDonts: {
        do: ['Label time segment distinctly, e.g. Time, even when grouped.'],
        dont: ['Force screen reader users through calendar for time-only adjustments.'],
      },
    },
  },

  'text-editor': {
    purpose: [
      'Text Editor provides rich formatted content entry — headings, lists, links, emphasis — for long-form descriptions, comments, and knowledge base articles in enterprise applications.',
      'Use it when plain Textarea is insufficient for structure and scanability, but full document authoring belongs in dedicated tools. The editor balances formatting power with constrained toolbar scope appropriate to B2B workflows.',
    ],
    anatomy: {
      paragraphs: [
        'The editor combines a toolbar, editable content region, optional character counter, and validation messaging.',
      ],
      parts: [
        { name: 'Toolbar', desc: 'Formatting actions grouped by text style, lists, links, and inserts allowed by policy.' },
        { name: 'Content area', desc: 'contenteditable or equivalent region with semantic output, often HTML or markdown.' },
        { name: 'Placeholder', desc: 'Shown when empty to guide first input.' },
        { name: 'Footer', desc: 'Optional word count, autosave status, or last edited timestamp.' },
        { name: 'Error message', desc: 'Validation for length, forbidden content, or required body.' },
      ],
    },
    variants: {
      intro: 'Toolbar depth defines the variant.',
      rows: [
        ['Minimal', 'Bold, italic, lists, links — comments and notes.'],
        ['Standard', 'Adds headings, blockquote, code inline — knowledge articles.'],
        ['Restricted', 'Paste sanitized; limited formats for regulated environments.'],
      ],
    },
    states: {
      intro: 'Editor states include content, selection, and async save lifecycle.',
      rows: [
        ['Empty', 'Placeholder visible; toolbar actions may disable when not applicable.'],
        ['Focused', 'Caret in content; toolbar reflects selection context.' ],
        ['Dirty', 'Unsaved changes; indicate in footer or page-level save bar.' ],
        ['Saving', 'Async persist in flight; disable destructive navigation if needed.' ],
        ['Read-only', 'Content viewable; toolbar hidden or disabled.' ],
        ['Error', 'Validation or upload failure in embedded media when supported.' ],
      ],
    },
    contentGuidelines: {
      intro: 'Placeholder should model acceptable tone and length, not repeat the field label.',
      good: [
        'Describe the issue, steps to reproduce, and expected outcome…',
        'Use headings to separate sections in longer entries',
      ],
      avoid: [
        'Enter text here',
        'Allowing pasted rich content that breaks downstream email or PDF rendering without sanitization',
      ],
    },
    dosDonts: {
      do: [
        'Sanitize pasted HTML to prevent XSS in stored content.',
        'Expose keyboard shortcuts mirroring toolbar actions with documented modifiers.',
        'Autosave drafts on long forms to prevent data loss.',
        'Output semantic markup accessible to screen readers in read mode.',
      ],
      dont: [
        'Offer full WYSIWYG tables when grid components handle structured data better.',
        'Hide formatting behind hover-only toolbar with no keyboard path.',
        'Store only presentation HTML without a plain-text fallback for search.',
      ],
    },
    usage: {
      when: [
        'Users need emphasis, lists, or links in persisted narrative content.',
        'Comments, runbooks, or policy notes appear in mixed-format views.',
        'Moderate formatting improves clarity without a separate CMS.',
      ],
      whenNot: [
        'Single-line titles — use Textbox.',
        'Code or JSON — use Code Block or monospace Textarea.',
        'Structured tabular data — use Grid or form fields.',
      ],
      scenarios: [
        { title: 'Incident notes', desc: 'Minimal toolbar; autosave; plain export for audit.' },
        { title: 'Product description', desc: 'Standard toolbar; character limit with counter; preview mode.' },
        { title: 'Approval comment', desc: 'Required rich comment on reject action; validated non-empty beyond whitespace.' },
      ],
      bestPractices: [
        'Show toolbar buttons as toggle state when selection already has that format.',
        'Link insertion dialog requires descriptive link text, not raw URLs alone as label.',
        'Provide view/read mode that renders stored content with same semantic structure.',
        'Debounce autosave; surface last saved time quietly.',
      ],
      layout: [
        'Full-width in forms; min-height 120px for comment fields, taller for articles.',
        'Pin toolbar on scroll for long content only when it does not obscure other chrome.',
      ],
    },
    a11y: {
      roles: [
        'Editable region uses textbox with aria-multiline true or equivalent semantic mapping.',
        'Toolbar buttons are toggle buttons where format is applied to selection.',
      ],
      focus: [
        'Tab enters toolbar then content or content first per platform convention — stay consistent.',
        'Focus visible on toolbar controls and within content caret.',
      ],
      keyboard: [
        { key: 'Ctrl/Cmd+B/I/U', action: 'Apply bold, italic, underline when supported.' },
        { key: 'Tab', action: 'Move between toolbar and content; indent lists inside content per editor rules.' },
        { key: 'Escape', action: 'Close link dialog or exit nested widget.' },
        { key: 'Arrow keys', action: 'Navigate text; with modifiers, extend selection for formatting.' },
      ],
      aria: [
        { attr: 'aria-label on content', when: 'No visible label when embedded inline.' },
        { attr: 'aria-pressed on toggles', when: 'Toolbar format buttons reflect active state.' },
        { attr: 'aria-describedby', when: 'Character limit or formatting policy helper linked.' },
      ],
      screenReaders: [
        'Announce applied formats when selection moves into formatted spans if exposed by the implementation.',
        'Read-only rendered HTML should use real headings and lists, not div-only styling.',
      ],
      dosDonts: {
        do: ['Provide a plain-text paste option or automatic strip for accessibility-first consumers.'],
        dont: ['Depend on color alone for inline meaning without semantic tags.'],
      },
    },
  },

  'number-input': {
    purpose: [
      'Number Input captures numeric values with optional stepping, bounds, and formatting for quantities, percentages, currency, and planning parameters.',
      'Enterprise forms often mix units and precision rules. A dedicated number control prevents invalid characters, clarifies increment behavior, and aligns with locale-specific decimal separators in display while keeping canonical numeric values for calculation.',
    ],
    anatomy: {
      paragraphs: [
        'Number Input wraps a native or semantic numeric field with optional stepper buttons, prefix/suffix units, and validation feedback.',
      ],
      parts: [
        { name: 'Label', desc: 'Identifies the metric or parameter being edited.' },
        { name: 'Input', desc: 'Accepts numeric entry; may filter non-numeric keys.' },
        { name: 'Stepper buttons', desc: 'Optional increment and decrement controls.' },
        { name: 'Prefix / suffix', desc: 'Unit or currency symbol clarifying scale.' },
        { name: 'Error message', desc: 'Out of range, invalid precision, or required empty.' },
      ],
    },
    variants: {
      intro: 'Formatting and interaction variants match data type.',
      rows: [
        ['Integer', 'Whole numbers only; steppers step by 1.' ],
        ['Decimal', 'Configurable precision; validates fraction length.' ],
        ['Percentage', 'Suffix %; may store 0–100 or 0–1 internally — document behavior.' ],
        ['Currency display', 'Locale grouping in display; store decimal number without symbol.' ],
        ['Stepper-only', 'Buttons without free typing for coarse adjustments on touch devices.' ],
      ],
    },
    states: {
      intro: 'Numeric validation should occur on blur and on stepper use, not on every keystroke unless necessary.',
      rows: [
        ['Empty', 'Placeholder or unit hint visible.' ],
        ['Valid', 'Value within min, max, and precision rules.' ],
        ['Focus', 'Full value editable; optional select-all on focus for replacement workflows.' ],
        ['Out of range', 'Clamped or errored per product policy — be consistent app-wide.' ],
        ['Disabled / read-only', 'Value visible; steppers inert.' ],
        ['Error', 'Required missing or business rule failure.' ],
      ],
    },
    sizes: {
      intro: 'Right-align numeric text in table columns; left-align in standard form labels layout.',
      rows: [
        ['Small', '24px', 'Grid cells and compact property panels.' ],
        ['Medium', '32px', 'Default form density.' ],
      ],
    },
    contentGuidelines: {
      intro: 'Labels name the metric; units live in suffix or helper, not duplicated in the label.',
      good: [
        'Label: Safety stock — Suffix: units',
        'Helper: Enter a value between 0 and 100',
      ],
      avoid: [
        'Label: Number',
        'Mixing unit systems without explicit conversion or suffix',
      ],
    },
    dosDonts: {
      do: [
        'Set min, max, and step aligned to domain granularity.',
        'Use thousand separators in display for large magnitudes.',
        'Preserve trailing decimal entry while typing before blur validation.',
        'Pair with Slider when users benefit from visual magnitude context.',
      ],
      dont: [
        'Use Number Input for phone numbers or IDs — use Textbox with input mode.',
        'Silently clamp without feedback when user typed an out-of-range value.',
        'Show excessive precision copied from floating-point artifacts.',
      ],
    },
    usage: {
      when: [
        'Values participate in calculation, aggregation, or API numeric types.',
        'Increment/decrement is meaningful and safe within bounds.',
        'Locale-specific decimal and grouping improve readability.',
      ],
      whenNot: [
        'Free-form alphanumeric codes — use Textbox.',
        'Large bounded range where approximate selection suffices — consider Slider.',
        'Multi-value numeric lists — use repeatable field groups or grid columns.',
      ],
      scenarios: [
        { title: 'MOQ entry', desc: 'Integer minimum order quantity with min 1 and step 1.' },
        { title: 'Discount percent', desc: '0–100 with one decimal; suffix %; validates on save.' },
        { title: 'Grid inline edit', desc: 'Small size; commit on blur; tab moves to next cell.' },
      ],
      bestPractices: [
        'Align decimal places with backend schema to avoid surprise rounding on save.',
        'Disable steppers at min/max rather than wrapping.',
        'Show unit conversion in helper when users work across regions.',
        'Use scientific notation only in specialized analytics views, not general forms.',
      ],
      layout: [
        'Right-align values in numeric columns for comparison.',
        'Place suffix units outside the editable area to avoid accidental deletion.',
      ],
    },
    a11y: {
      roles: [
        'Prefer input type number or text with inputmode decimal and explicit validation when type number limitations block needed behavior.',
      ],
      focus: [
        'Stepper buttons follow input in tab order when present.',
        'Announce value changes from steppers if they do not move focus.',
      ],
      keyboard: [
        { key: 'Arrow Up / Down', action: 'Increment or decrement when steppers focused or per field convention.' },
        { key: 'Page Up / Down', action: 'Large step when configured.' },
        { key: 'Tab', action: 'Leave field; commit formatted value on blur.' },
      ],
      aria: [
        { attr: 'aria-valuemin / max / now', when: 'When implemented as spinbutton pattern.' },
        { attr: 'aria-describedby', when: 'Range helper or unit explanation linked.' },
        { attr: 'aria-invalid', when: 'Validation fails.' },
      ],
      screenReaders: [
        'Read label, current value, and unit suffix.',
        'Announce out-of-range errors when focus leaves invalid field.',
      ],
      dosDonts: {
        do: ['Expose min and max in accessible description when not obvious.'],
        dont: ['Use spinbutton role without keyboard increment support.'],
      },
    },
  },

  'multi-select': {
    purpose: [
      'Multi-Select lets users choose multiple options from a list with inline Chip representation of selections and an expandable option panel.',
      'It fits tagging workflows, scope assignment, and filter construction where chosen items must stay visible while the user continues searching and adding more values.',
    ],
    anatomy: {
      paragraphs: [
        'Multi-Select combines a combobox-like input, selected Chips, dropdown listbox, and optional select-all row.',
      ],
      parts: [
        { name: 'Label', desc: 'Names the set of entities being chosen.' },
        { name: 'Input area', desc: 'Hosts Chips and filter text for searching options.' },
        { name: 'Chip list', desc: 'Removable tokens for each selected value.' },
        { name: 'Dropdown panel', desc: 'Scrollable options with checkmarks or checkboxes per row.' },
        { name: 'Select all', desc: 'Optional header row to toggle all visible options.' },
        { name: 'Error message', desc: 'Required selection empty or over max count.' },
      ],
    },
    variants: {
      intro: 'Selection model and data loading define variants.',
      rows: [
        ['Static list', 'All options available client-side with filter.' ],
        ['Async', 'Options load on search; selected Chips retain resolved labels.' ],
        ['With groups', 'Section headers and dividers in the panel.' ],
        ['Checkbox rows', 'Explicit checkbox per option vs checkmark on selected row only.' ],
      ],
    },
    states: {
      intro: 'Multi-Select must handle partial loading and label resolution for async values.',
      rows: [
        ['Empty', 'Placeholder prompts search or selection.' ],
        ['Partial selection', 'Some Chips present; input available for more.' ],
        ['Open panel', 'Filter text active; options reflect query.' ],
        ['Max reached', 'Further selection blocked with inline message.' ],
        ['Loading options', 'Skeleton or spinner in panel.' ],
        ['Error', 'Validation or failed fetch of option metadata.' ],
      ],
    },
    sizes: {
      intro: 'Field grows vertically as Chips wrap.',
      rows: [
        ['Small', '24px min height', 'Dense filters.' ],
        ['Medium', '32px min height', 'Standard forms.' ],
      ],
    },
    contentGuidelines: {
      intro: 'Placeholder should invite search when lists are long.',
      good: [
        'Search and select regions…',
        'Select up to 5 owners',
      ],
      avoid: [
        'Select (no hint of multi or search)',
        'Truncating every chip without tooltip on critical identifiers',
      ],
    },
    dosDonts: {
      do: [
        'Resolve and display human-readable labels for selected ids.',
        'Enforce max selection with clear legend copy.',
        'Keep selected items in the list, marked as selected, when panel reopens.',
        'Support keyboard removal of last chip via Backspace when input empty.',
      ],
      dont: [
        'Use Multi-Select for single choice — use Select Dropdown.',
        'Drop selections silently when async reload returns a smaller option set.',
        'Require more selections than visible options without explanation.',
      ],
    },
    usage: {
      when: [
        'Users pick many items from a searchable catalog.',
        'Selected values must remain visible as removable tokens.',
        'Optional caps or required minimum selections apply to the set.',
      ],
      whenNot: [
        'Mutually exclusive single value — use Select Dropdown or Combobox.',
        'Two to five fixed options — use Checkbox Group.',
        'Hierarchical tree selection — use Dropdown Tree or Listbox with tree semantics.',
      ],
      scenarios: [
        { title: 'Assign reviewers', desc: 'Search people; Chips show names; max five selections.' },
        { title: 'Dimension filter', desc: 'Multiple hierarchies selected; chips sync to query string.' },
        { title: 'Tagging records', desc: 'Creatable tags when allowed; otherwise strict list only.' },
      ],
      bestPractices: [
        'Virtualize long option lists.',
        'Show count in label when max applies.',
        'Debounce search; show recent selections when filter empty.',
        'Commit on blur or explicit Apply depending on filter vs form context — stay consistent.',
      ],
      layout: [
        'Allow vertical growth up to max height then scroll internal chip area.',
        'Full-width in forms; constrain width in side filters with overflow popover.',
      ],
    },
    a11y: {
      roles: [
        'Combobox or listbox multi-select pattern with aria-multiselectable on list when appropriate.',
        'Chips use removable button pattern per Chip guidance.',
      ],
      focus: [
        'Focus in input; arrow keys navigate options; chips reachable via Tab to remove buttons.',
      ],
      keyboard: [
        { key: 'Arrow Down / Up', action: 'Highlight options in open panel.' },
        { key: 'Space / Enter', action: 'Toggle selection on highlighted option.' },
        { key: 'Backspace', action: 'Remove last chip when input is empty.' },
        { key: 'Escape', action: 'Close panel.' },
      ],
      aria: [
        { attr: 'aria-multiselectable', when: 'On listbox element.' },
        { attr: 'aria-selected', when: 'On each selected option.' },
        { attr: 'aria-describedby', when: 'Max selection helper linked.' },
      ],
      screenReaders: [
        'Announce count of selected items when focus enters field.',
        'Announce option selected or deselected when toggled.',
      ],
      dosDonts: {
        do: ['Ensure each chip remove action is named with the value.'],
        dont: ['Announce entire chip list on every keystroke in the filter input.'],
      },
    },
  },

  'otp-input': {
    purpose: [
      'OTP Input collects one-time verification codes — SMS, email, or authenticator — as separate digit cells for fast, error-resistant entry on login and step-up authentication flows.',
      'Splitting digits reduces transposition errors and enables auto-advance as users type or paste full codes from mobile messages.',
    ],
    anatomy: {
      paragraphs: [
        'OTP Input renders a row of single-character fields with shared group label and optional resend or timer actions.',
      ],
      parts: [
        { name: 'Group label', desc: 'Explains what code is expected, e.g. Enter the 6-digit code sent to your email.' },
        { name: 'Digit cells', desc: 'Fixed-count inputs accepting one character each.' },
        { name: 'Separator', desc: 'Optional visual dash between digit groups for readability.' },
        { name: 'Resend / timer', desc: 'Secondary action to request new code with cooldown.' },
        { name: 'Error message', desc: 'Invalid or expired code feedback.' },
      ],
    },
    variants: {
      intro: 'Length and input mode follow security policy.',
      rows: [
        ['Numeric 6-digit', 'Common SMS OTP length.' ],
        ['Numeric 4-digit', 'Shorter PIN-style verification.' ],
        ['Alphanumeric', 'When codes include letters; less common.' ],
        ['Masked', 'Optional concealment like password dots for shoulder-surfing contexts.' ],
      ],
    },
    states: {
      intro: 'Support paste, auto-fill, and error recovery without losing prior digits unnecessarily.',
      rows: [
        ['Empty', 'First cell focused or awaiting input.' ],
        ['Partial', 'Some digits entered; focus on next empty cell.' ],
        ['Complete', 'All cells filled; auto-submit or explicit verify button enabled.' ],
        ['Error', 'Shake or border error; optionally clear all or retain for correction per policy.' ],
        ['Disabled', 'During verify request in flight.' ],
        ['Expired', 'Timer elapsed; resend required.' ],
      ],
    },
    contentGuidelines: {
      intro: 'Instruction copy should state channel, expiry, and next step if code fails.',
      good: [
        'Enter the 6-digit code we sent to a***@company.com',
        'Code expires in 9:42 — Resend code',
      ],
      avoid: [
        'Enter OTP (no length or channel)',
        'Blaming the user in error copy: You typed it wrong',
      ],
    },
    dosDonts: {
      do: [
        'Support pasting full code into first cell with auto-distribution.',
        'Move focus forward on digit entry and backward on Backspace.',
        'Disable verify until all cells complete when auto-submit is not used.',
        'Offer resend with visible cooldown timer.',
      ],
      dont: [
        'Use OTP Input for general numeric IDs or phone numbers.',
        'Auto-submit without user confirmation on shared devices when policy requires explicit confirm.',
        'Log or persist OTP values in analytics.',
      ],
    },
    usage: {
      when: [
        'Multi-factor authentication or email verification steps.',
        'Short fixed-length codes with per-digit validation.',
        'Mobile-first flows where paste from SMS is common.',
      ],
      whenNot: [
        'Long passwords — use password field with show/hide.',
        'Non-secret identifiers — use Textbox or Number Input.',
      ],
      scenarios: [
        { title: 'Login MFA', desc: 'Six numeric cells; auto-advance; verify on completion.' },
        { title: 'Email confirmation', desc: 'Resend after 60 seconds; error clears on new attempt.' },
        { title: 'Step-up for sensitive action', desc: 'Inline OTP in dialog before export confirmation.' },
      ],
      bestPractices: [
        'Use inputmode numeric and autocomplete one-time-code where supported.',
        'Focus first cell on mount.',
        'Announce errors politely without clearing channel hint.',
        'Rate-limit verify attempts server-side; reflect lockout in UI copy.',
      ],
      layout: [
        'Center OTP group on auth pages; inline left-aligned in embedded dialogs.',
        'Keep resend action below cells with adequate touch spacing.',
      ],
    },
    a11y: {
      roles: [
        'Group labeled via fieldset legend or aria-labelledby on container.',
        'Each cell remains a single-character text input.',
      ],
      focus: [
        'Only one cell focused at a time; programmatic focus advance on input.',
        'Do not trap focus in OTP unless entire view is modal step.',
      ],
      keyboard: [
        { key: 'Digit keys', action: 'Fill cell and advance.' },
        { key: 'Backspace', action: 'Clear cell and move to previous.' },
        { key: 'Arrow Left / Right', action: 'Move between cells for correction.' },
        { key: 'Paste', action: 'Distribute full code across cells when valid length.' },
      ],
      aria: [
        { attr: 'aria-label per cell', when: 'Digit 1 of 6 when group label insufficient alone.' },
        { attr: 'aria-invalid', when: 'Verification failed on group.' },
        { attr: 'autocomplete one-time-code', when: 'On first cell or hidden companion input per platform guidance.' },
      ],
      screenReaders: [
        'Announce group purpose once on entry, not per cell on every focus move unless needed.',
        'Announce verification failure and whether user should retry or resend.',
      ],
      dosDonts: {
        do: ['Link timer and resend status via aria-live polite when countdown ends.'],
        dont: ['Use password type on cells without explaining masking behavior.'],
      },
    },
  },

  radio: {
    purpose: [
      'Radio represents one option within a mutually exclusive set. Only one Radio in a group may be selected at a time.',
      'Use standalone Radio only when it is the single control in a Radio Group context. For isolated binary decisions that take effect immediately, Switch may be clearer; for visible option lists, prefer Radio Group with a legend.',
    ],
    anatomy: {
      paragraphs: [
        'Each Radio pairs a native radio input with an inline label. The visual circle indicates selection state within the group.',
      ],
      parts: [
        { name: 'Field container', desc: 'Click target wrapping input and label.' },
        { name: 'Radio input', desc: 'Native input type radio sharing a name within the group.' },
        { name: 'Label', desc: 'Describes this specific option.' },
        { name: 'Helper on option', desc: 'Optional secondary line clarifying impact of this choice.' },
        { name: 'Error message', desc: 'Shown at group level when validation requires a selection.' },
      ],
    },
    variants: {
      intro: 'Radio has minimal visual variants; size aligns with Checkbox.',
      rows: [
        ['Default', 'Standard form density.' ],
        ['Small', 'Compact lists and comparison tables.' ],
        ['With option description', 'Label plus muted secondary text for enterprise tier explanations.' ],
      ],
    },
    states: {
      intro: 'Selection is exclusive within the named group.',
      rows: [
        ['Unselected', 'Empty circle; sibling may be selected.' ],
        ['Selected', 'Filled indicator; only one per group.' ],
        ['Hover / focus', 'Interactive feedback on unselected and selected alike.' ],
        ['Disabled', 'Option visible but not choosable; entire group may be disabled.' ],
        ['Read-only', 'Selection visible; change blocked.' ],
        ['Error', 'Group-level required validation failed.' ],
      ],
    },
    sizes: {
      intro: 'Match Radio size to Checkbox and form field density in the same view.',
      rows: [
        ['Small', '24px', 'Dense option lists.' ],
        ['Large (default)', '32px', 'Standard forms and wizards.' ],
      ],
    },
    contentGuidelines: {
      intro: 'Option labels should be parallel statements or nouns, not questions mixed with answers.',
      good: [
        'Standard plan — Up to 50 users',
        'Express shipping — Delivery in 1–2 business days',
      ],
      avoid: [
        'Option 1 / Option 2',
        'Long legal paragraphs as the primary label — use option description instead',
      ],
    },
    dosDonts: {
      do: [
        'Wrap related Radios in Radio Group with shared name and legend.',
        'Pre-select the safest or most common option when no user preference exists.',
        'Show all options when count is seven or fewer visible without scroll.',
      ],
      dont: [
        'Use Radio for multi-select — use Checkbox Group.',
        'Present a single Radio alone without siblings — use Switch or Checkbox.',
        'Change selection on hover without explicit click or keyboard commit.',
      ],
    },
    usage: {
      when: [
        'User must pick exactly one from a small, visible set.',
        'All options should be comparable at a glance.',
        'Default or recommended option should be easy to identify.',
      ],
      whenNot: [
        'Multiple selections allowed — use Checkbox Group.',
        'More than roughly seven options — use Select Dropdown or Listbox.',
        'Immediate on/off setting — use Switch.',
      ],
      scenarios: [
        { title: 'Pricing tier', desc: 'Three mutually exclusive plans with secondary feature lines.' },
        { title: 'Export format', desc: 'CSV vs XLSX vs PDF — one required before download.' },
        { title: 'Sort order', desc: 'Short vertical list replacing ambiguous dropdown when options are few.' },
      ],
      bestPractices: [
        'Keep option count low; move long tail to Select Dropdown.',
        'Align radio columns in comparison layouts for scanability.',
        'Submit the selected value on form save; avoid auto-submit on change unless context is low-risk settings.',
      ],
      layout: [
        'Vertical stack default; horizontal only for two short options.',
        'Place recommended option first or mark with helper, not only with pre-selection.',
      ],
    },
    a11y: {
      roles: [
        'Native radio input — do not override role.',
        'Group shares name attribute or aria naming via Radio Group container.',
      ],
      focus: [
        'Arrow keys move selection within group per HTML radio group behavior.',
        'Tab moves into and out of the group.',
      ],
      keyboard: [
        { key: 'Arrow keys', action: 'Change selected radio within the group.' },
        { key: 'Space', action: 'Select focused radio if not already selected.' },
        { key: 'Tab', action: 'Leave the group to next control.' },
      ],
      aria: [
        { attr: 'aria-describedby on option', when: 'Secondary description text linked per option.' },
        { attr: 'aria-invalid on group', when: 'Required selection missing.' },
      ],
      screenReaders: [
        'Announce option label, selected state, and position in set when focused.',
        'Group legend read when entering the group.',
      ],
      dosDonts: {
        do: ['Use fieldset and legend or aria-labelledby for the group.'],
        dont: ['Style divs as radios without native input semantics.'],
      },
    },
  },

  'radio-group': {
    purpose: [
      'Radio Group bundles mutually exclusive Radios under one legend with shared validation, layout, and keyboard navigation.',
      'It is the correct container for exclusive choices in forms, wizards, and settings where the decision set is small enough to remain expanded.',
    ],
    anatomy: {
      paragraphs: [
        'Radio Group provides legend, optional helper, vertical or horizontal layout of Radio options, and group-level error messaging.',
      ],
      parts: [
        { name: 'Legend', desc: 'Required label for the exclusive choice being made.' },
        { name: 'Helper text', desc: 'Optional guidance on consequences or default recommendation.' },
        { name: 'Radio options', desc: 'Two or more Radio components with the same group name.' },
        { name: 'Option descriptions', desc: 'Optional secondary text per option for enterprise detail.' },
        { name: 'Group error', desc: 'Displayed when no selection and field is required.' },
      ],
    },
    variants: {
      intro: 'Layout and presentation variants.',
      rows: [
        ['Vertical', 'Default stacked list for three or more options.' ],
        ['Horizontal', 'Two to three short labels on one row with wrap.' ],
        ['Card-style options', 'Each radio embedded in a selectable card for plan comparison — maintain radio semantics inside.' ],
        ['Segmented appearance', 'Use Segmented Control when options are navigation-like toggles; Radio Group when form submission values are required.' ],
      ],
    },
    states: {
      intro: 'Group state reflects validation and whether a default is pre-selected.',
      rows: [
        ['No selection', 'Valid only when optional; otherwise shows error on submit.' ],
        ['Selected', 'One option active; others unselected.' ],
        ['Disabled group', 'All options inert with readable legend.' ],
        ['Read-only', 'Current selection visible; change blocked.' ],
        ['Error', 'Required legend-level error message.' ],
      ],
    },
    contentGuidelines: {
      intro: 'Legend is the question or decision frame; options are answers.',
      good: [
        'Legend: Billing cycle — Options: Monthly, Annual (save 15%)',
        'Parallel noun phrases across options',
      ],
      avoid: [
        'Legend: Please select (no domain context)',
        'Different grammatical structures that hide comparison',
      ],
    },
    dosDonts: {
      do: [
        'Include at least two options; use Switch for single binary on/off.',
        'Mark recommended option in helper text if pre-selected for a reason.',
        'Validate at group level for required exclusive choice.',
      ],
      dont: [
        'Mix checkboxes into the same exclusive group.',
        'Reset selection silently when unrelated form fields change.',
      ],
    },
    usage: {
      when: [
        'Two to seven options should remain visible without opening a menu.',
        'Users benefit from comparing options side by side.',
        'Form POST needs exactly one scalar value from the set.',
      ],
      whenNot: [
        'Long or searchable lists — use Select Dropdown.',
        'Multiple independent toggles — use Checkbox Group.',
        'Toolbar view switching with no form field — consider Segmented Control.',
      ],
      scenarios: [
        { title: 'Deployment target', desc: 'Dev, staging, production exclusive; production option includes warning description.' },
        { title: 'Notification frequency', desc: 'Immediate, daily digest, weekly — vertical Radio Group in settings.' },
        { title: 'Wizard branch', desc: 'Choice determines next step; selection required before Continue.' },
      ],
      bestPractices: [
        'Order options by frequency, severity, or natural domain order.',
        'Avoid pre-selecting destructive options.',
        'When options have very different descriptions, use card layout with consistent hit targets.',
      ],
      layout: [
        '24px spacing between vertical options; 16px between horizontal pairs.',
        'Align group with other form fields; legend uses same label styling as Textbox labels.',
      ],
    },
    a11y: {
      roles: [
        'fieldset and legend preferred; alternatively role radiogroup with aria-labelledby.',
      ],
      focus: [
        'First Tab into group focuses selected radio or first radio if none selected.',
        'Arrow keys circulate selection within group.',
      ],
      keyboard: [
        { key: 'Arrow keys', action: 'Move selection among radios in the group.' },
        { key: 'Tab / Shift+Tab', action: 'Enter and leave the group.' },
        { key: 'Space', action: 'Select focused radio.' },
      ],
      aria: [
        { attr: 'aria-required on group', when: 'Selection mandatory before submit.' },
        { attr: 'aria-describedby', when: 'Group helper or error linked.' },
        { attr: 'aria-invalid', when: 'Validation failed.' },
      ],
      screenReaders: [
        'Legend announced when focus enters group.',
        'Selected option state updates announced on change.',
      ],
      dosDonts: {
        do: ['Keep legend visible — do not rely on placeholder inside a dropdown duplicate.'],
        dont: ['Duplicate group legend as every option label.'],
      },
    },
  },

  search: {
    purpose: [
      'Search is a specialized text input for querying datasets, navigation indexes, or catalog content with optional clear, loading, and results panel integration.',
      'In data-heavy B2B products, Search is the primary entry to filters, global find, and entity lookup. It should feel immediate, forgiving of typos where fuzzy match exists, and clearly distinct from generic Textbox fields on the same page.',
    ],
    anatomy: {
      paragraphs: [
        'Search combines a labeled or aria-labeled input, leading search icon, optional trailing clear and filter affordances, and connection to results UI.',
      ],
      parts: [
        { name: 'Input', desc: 'Text field optimized for query strings; often with search icon embedded.' },
        { name: 'Clear button', desc: 'Resets query and results when present.' },
        { name: 'Loading indicator', desc: 'Shows async query in flight in field or results region.' },
        { name: 'Results region', desc: 'Listbox, grid, or page region updated by query — may be external to the component.' },
        { name: 'Scope selector', desc: 'Optional dropdown narrowing search domain.' },
      ],
    },
    variants: {
      intro: 'Scope and results placement define search patterns.',
      rows: [
        ['Global header search', 'Persistent; opens command palette or results overlay.' ],
        ['Scoped list search', 'Filters visible table or tree client-side or server-side.' ],
        ['Autocomplete search', 'Inline suggestions before full search submit.' ],
        ['Advanced search', 'Opens panel with field-specific criteria beyond single input.' ],
      ],
    },
    states: {
      intro: 'Search feedback loop must cover idle, active, empty results, and error.',
      rows: [
        ['Idle', 'Placeholder describes searchable scope.' ],
        ['Typing', 'Debounced query; optional instant filter.' ],
        ['Loading', 'Spinner; avoid layout shift in results.' ],
        ['Results', 'Hits displayed with count when helpful.' ],
        ['Empty', 'Zero hits with guidance to broaden query.' ],
        ['Error', 'Service failure with retry affordance.' ],
      ],
    },
    sizes: {
      intro: 'Header search may be medium; inline table search often small.',
      rows: [
        ['Small', '24px', 'Toolbar and grid-embedded filter.' ],
        ['Medium', '32px', 'Page-level and dialog search.' ],
        ['Expandable', 'Icon collapses to full field on activate in dense headers.' ],
      ],
    },
    contentGuidelines: {
      intro: 'Placeholder names what is searchable, not the word Search alone.',
      good: [
        'Search products, SKUs, or descriptions',
        'Empty state: No results for "titanium bolt" — try fewer keywords',
      ],
      avoid: [
        'Search… (only) on a page with many searchable entities',
        'Showing stale result count after clear without updating',
      ],
    },
    dosDonts: {
      do: [
        'Debounce server queries; show loading for operations over 300ms.',
        'Preserve query in input when results panel closes unless user clears.',
        'Support Escape to clear overlay focus trap and return to input.',
        'Highlight matched terms in results when performant.',
      ],
      dont: [
        'Use Search input for non-search form values like name or email on submit forms.',
        'Submit full page reload on every keystroke without user expectation.',
        'Hide clear affordance when text is present.',
      ],
    },
    usage: {
      when: [
        'Users explore large collections by keyword or partial match.',
        'Filter applies across multiple columns or entities.',
        'Global discovery is a primary navigation pattern.',
      ],
      whenNot: [
        'Single known pick from master list — use Combobox or Select Dropdown.',
        'Structured filter only on enumerated fields — use filter panel with specific controls.',
      ],
      scenarios: [
        { title: 'Grid filter', desc: 'Search narrows rows client-side with instant feedback.' },
        { title: 'Global command search', desc: 'Modal palette; arrows navigate hits; Enter opens selection.' },
        { title: 'Catalog lookup', desc: 'Server search with pagination; empty state suggests synonyms.' },
      ],
      bestPractices: [
        'Expose keyboard shortcut to focus search when global, e.g. slash or Ctrl+K, documented in helper.',
        'Trim whitespace; normalize case per backend contract.',
        'Announce result updates for async search in live region when focus remains in input.',
        'Reset pagination when query changes.',
      ],
      layout: [
        'Full-width below page title for list views; compact in toolbars with min 240px width.',
        'Place scope selector left of input when multiple indexes exist.',
      ],
    },
    a11y: {
      roles: [
        'Search input uses search role or textbox with type search when appropriate.',
        'Results linked via aria-controls or aria-owns to listbox when inline.',
      ],
      focus: [
        'Focus stays in input during arrow navigation of suggestions in combobox-style search.',
        'Clear button is focusable and labeled.',
      ],
      keyboard: [
        { key: 'Enter', action: 'Submit search or activate highlighted result.' },
        { key: 'Escape', action: 'Clear query or close results per pattern.' },
        { key: 'Arrow Down / Up', action: 'Navigate suggestions when present.' },
        { key: 'Tab', action: 'Move to results or next control; do not trap unexpectedly.' },
      ],
      aria: [
        { attr: 'aria-label or visible label', when: 'Required — icon alone is insufficient.' },
        { attr: 'aria-autocomplete list', when: 'Inline suggestions while typing.' },
        { attr: 'aria-live polite on results', when: 'Async result count updates.' },
      ],
      screenReaders: [
        'Announce loading and result count changes without stealing focus from input.',
        'Empty and error states read when results region updates.',
      ],
      dosDonts: {
        do: ['Name the search scope in label or aria-label.'],
        dont: ['Use placeholder as the only accessible name.'],
      },
    },
  },

  'select-dropdown': {
    purpose: [
      'Select Dropdown (Select) lets users choose one option from a predefined list via a form-styled trigger and overlay panel. It conserves space when the full option set does not need to stay visible.',
      'Use it for stable enumerations — status, region, owner role — where typing search is optional and lists are moderate in length. Pair with filter search inside the panel when options exceed practical scroll length.',
    ],
    anatomy: {
      paragraphs: [
        'Select Dropdown consists of a label, trigger showing selected label or placeholder, chevron, animated border, and anchored option panel with scroll.',
      ],
      parts: [
        { name: 'Label', desc: 'Identifies the field value being chosen.' },
        { name: 'Trigger', desc: 'Displays selected option text or placeholder; opens panel on click or keyboard.' },
        { name: 'Chevron', desc: 'Indicates expand/collapse; rotates when open.' },
        { name: 'Panel', desc: 'Overlay list with options, optional groups, dividers, and filter search.' },
        { name: 'Option', desc: 'Selectable row with optional checkmark on selected item.' },
        { name: 'Error message', desc: 'Required empty or invalid selection on submit.' },
      ],
    },
    variants: {
      intro: 'Panel content and filter behavior differentiate variants.',
      rows: [
        ['Basic', 'Static sorted list without search.' ],
        ['Filterable', 'Search input at top of panel narrows options.' ],
        ['Grouped', 'Headers and dividers separate related option sets.' ],
        ['With placeholder option', 'First row resets to unset null value when allowed.' ],
      ],
    },
    states: {
      intro: 'Trigger and panel each carry distinct interaction states.',
      rows: [
        ['Closed empty', 'Placeholder visible; no value committed.' ],
        ['Closed filled', 'Selected label on trigger.' ],
        ['Open', 'Panel visible; highlight follows keyboard.' ],
        ['Hover option', 'Pointer preview on rows.' ],
        ['Disabled option', 'Visible but not selectable when policy blocks.' ],
        ['Disabled field', 'Trigger inert.' ],
        ['Error', 'Validation failed; error message below.' ],
      ],
    },
    sizes: {
      intro: 'Align Select height with Textbox and other inputs in the same form row.',
      rows: [
        ['Small', '24px', 'Dense tables and inline editors.' ],
        ['Medium', '32px', 'Default forms and dialogs.' ],
        ['Large', '40px', 'Low-density marketing or onboarding flows.' ],
      ],
    },
    contentGuidelines: {
      intro: 'Placeholder indicates unset state; option labels are the canonical display strings stored values map to.',
      good: [
        'Placeholder: Select a region',
        'Options: North America, EMEA, APAC — sorted alphabetically',
      ],
      avoid: [
        'Please select (overused without field context)',
        'Duplicate placeholder text as a selectable real option unless reset behavior is intentional and documented',
      ],
    },
    dosDonts: {
      do: [
        'Sort options predictably unless domain order is fixed, e.g. Small, Medium, Large.',
        'Show selected checkmark on current option in panel.',
        'Close panel on selection and return focus to trigger.',
        'Virtualize or filter when lists exceed roughly fifty visible rows.',
      ],
      dont: [
        'Use Select for two options only — consider Radio Group.',
        'Use Select for multi-value — use Multi-Select.',
        'Change available options without updating invalid stale selection.',
      ],
    },
    usage: {
      when: [
        'One value from a known enumeration is required.',
        'Space is limited and listing all options always visible is wasteful.',
        'Optional filter search helps moderate-length lists.',
      ],
      whenNot: [
        'User must see all options compared at once — use Radio Group.',
        'Free text or creatable values — use Combobox.',
        'Tree hierarchy — use Dropdown Tree or Listbox tree.',
      ],
      scenarios: [
        { title: 'Status field', desc: 'Draft, In review, Approved — grouped none for unset on optional fields.' },
        { title: 'Currency', desc: 'Long list with filter search by code and name.' },
        { title: 'Form dependency', desc: 'Country select filters downstream state select options.' },
      ],
      bestPractices: [
        'Load dependent options before opening child select when possible to avoid empty flash.',
        'Display human-readable label while submitting stable value id.',
        'Mark required fields in label; validate on submit with specific error.',
        'Match panel width to trigger minimum; expand for long labels.',
      ],
      layout: [
        'Full-width in forms; fixed width in toolbars when label is external.',
        'Avoid placing trigger flush against viewport edge without collision-aware panel flip.',
      ],
    },
    a11y: {
      roles: [
        'Trigger implements combobox or button opens listbox pattern with listbox popup.',
        'Options use role option with aria-selected on current choice.',
      ],
      focus: [
        'Focus on trigger when closed; moves into list on open per implementation pattern.',
        'Typeahead may jump to matching option when panel open.',
      ],
      keyboard: [
        { key: 'Enter / Space / Arrow Down', action: 'Open panel and highlight selection.' },
        { key: 'Arrow Up / Down', action: 'Move highlighted option.' },
        { key: 'Enter / Space', action: 'Select highlighted option and close.' },
        { key: 'Escape', action: 'Close without change.' },
        { key: 'Home / End', action: 'First or last option when open.' },
        { key: 'Type characters', action: 'Typeahead to matching option label.' },
      ],
      aria: [
        { attr: 'aria-expanded', when: 'On trigger reflecting panel state.' },
        { attr: 'aria-controls', when: 'Links trigger to listbox id.' },
        { attr: 'aria-activedescendant', when: 'Highlights option while focus on trigger.' },
        { attr: 'aria-invalid', when: 'Validation error on field.' },
      ],
      screenReaders: [
        'Announce selected option when panel closes after change.',
        'Read option count when filter narrows list if stable.',
      ],
      keyboardCallout: 'When filter search is inside the panel, Tab should reach the filter input without losing list navigation expectations.',
      dosDonts: {
        do: ['Label the trigger with the same visible label as other form fields.'],
        dont: ['Use a native select element styled invisibly without equivalent keyboard behavior if replacing with custom markup.'],
      },
    },
  },

  slider: {
    purpose: [
      'Slider lets users choose a numeric value along a continuous or stepped range by dragging a thumb or using keyboard increments on a track.',
      'It excels when approximate magnitude matters and the allowed range is bounded — opacity, priority weight, threshold percentages — especially when paired with Number Input for precise entry.',
    ],
    anatomy: {
      paragraphs: [
        'Slider includes label, optional current value display, track, filled range segment, thumb control, and optional tick marks for steps.',
      ],
      parts: [
        { name: 'Label', desc: 'Names the parameter being adjusted.' },
        { name: 'Value readout', desc: 'Optional numeric or textual display of current value.' },
        { name: 'Track', desc: 'Full allowable range background.' },
        { name: 'Fill', desc: 'Portion from min to current value.' },
        { name: 'Thumb', desc: 'Draggable handle setting value.' },
        { name: 'Tick marks', desc: 'Optional indicators for discrete steps.' },
      ],
    },
    variants: {
      intro: 'Single-value vs range and orientation.',
      rows: [
        ['Continuous', 'Smooth drag along range; value rounded on commit if needed.' ],
        ['Discrete steps', 'Snaps to defined increments.' ],
        ['Range slider', 'Two thumbs for min-max band selection.' ],
        ['Vertical', 'Rare; height-constrained panels like audio or priority stacks.' ],
      ],
    },
    states: {
      intro: 'Thumb and track communicate interaction and bounds.',
      rows: [
        ['Default', 'Thumb at current value on track.' ],
        ['Hover / active drag', 'Thumb enlarges or shows active styling.' ],
        ['Focus', 'Visible focus ring on thumb for keyboard users.' ],
        ['Disabled', 'Track and thumb muted; value not changeable.' ],
        ['At min / max', 'Thumb stops; do not wrap.' ],
      ],
    },
    contentGuidelines: {
      intro: 'Label names the setting; value readout shows unit when applicable.',
      good: [
        'Label: Confidence threshold — Readout: 75%',
        'Tick labels at 0, 50, 100 for percentage sliders',
      ],
      avoid: [
        'Slider (generic label)',
        'Hidden current value with no readout or aria value text',
      ],
    },
    dosDonts: {
      do: [
        'Pair with Number Input when exact values are required.',
        'Choose step size matching meaningful business increments.',
        'Show min and max labels on track for infrequent adjustments.',
        'Update value readout live during drag.',
      ],
      dont: [
        'Use Slider for unbounded or very large numeric ranges.',
        'Use Slider alone for currency amounts requiring cents precision without text input.',
        'Stack many sliders without grouping related parameters.',
      ],
    },
    usage: {
      when: [
        'Users benefit from visual tuning within known min and max.',
        'Approximate adjustment is common; exact entry is secondary.',
        'Setting is exploratory, e.g. preview updates as slider moves.',
      ],
      whenNot: [
        'Exact numeric entry is primary — use Number Input.',
        'Binary choice — use Switch or Checkbox.',
        'More than roughly twenty discrete enum values — use Select Dropdown.',
      ],
      scenarios: [
        { title: 'Filter threshold', desc: 'Adjust minimum fill rate; grid updates on release or live debounced.' },
        { title: 'Priority weight', desc: 'Stepped slider 1–5 with tick labels.' },
        { title: 'Accessibility volume', desc: 'Slider with audible value change announcement on commit.' },
      ],
      bestPractices: [
        'Debounce expensive preview updates while dragging.',
        'Commit final value on pointer up or Enter for keyboard.',
        'Ensure touch target for thumb meets minimum 44px effective area.',
        'Align horizontal sliders full-width within form field column.',
      ],
      layout: [
        'Place value readout right of label or above thumb per density.',
        'Group related sliders under subsection headings in settings panels.',
      ],
    },
    a11y: {
      roles: [
        'Implement as slider role or input type range with associated label.',
      ],
      focus: [
        'Thumb is focusable; track click moves value and should move focus to thumb.',
      ],
      keyboard: [
        { key: 'Arrow Left / Down', action: 'Decrease value by step.' },
        { key: 'Arrow Right / Up', action: 'Increase value by step.' },
        { key: 'Home / End', action: 'Jump to min or max.' },
        { key: 'Page Up / Down', action: 'Large increment when supported.' },
      ],
      aria: [
        { attr: 'aria-valuemin / valuemax / valuenow', when: 'Required on slider element.' },
        { attr: 'aria-valuetext', when: 'Human-readable value when number alone is insufficient, e.g. Low.' },
        { attr: 'aria-orientation', when: 'Vertical sliders.' },
      ],
      screenReaders: [
        'Announce value changes on keyboard adjust; optionally on drag end for pointer users to reduce chatter.',
        'Read label and range bounds when focus enters control.',
      ],
      dosDonts: {
        do: ['Provide text alternative for precise entry when slider is primary control.'],
        dont: ['Rely on color-only fill without position indicator for thumb.'],
      },
    },
  },

  switch: {
    purpose: [
      'Switch toggles a single setting between on and off states with immediate effect or form commit, modeled as activation rather than selection from a list.',
      'Use Switch for settings that take effect right away — enable notifications, show advanced columns — not for choices that require Submit on a larger form unless the pattern is consistent across settings pages.',
    ],
    anatomy: {
      paragraphs: [
        'Switch pairs a pill track and sliding thumb with an inline label describing the setting when enabled.',
      ],
      parts: [
        { name: 'Track', desc: 'Background showing on/off state.' },
        { name: 'Thumb', desc: 'Moves between positions; carries focus ring.' },
        { name: 'Label', desc: 'Describes what is enabled when switch is on.' },
        { name: 'Helper text', desc: 'Optional clarification of side effects.' },
        { name: 'Loading state', desc: 'Optional spinner when async persist runs on toggle.' },
      ],
    },
    variants: {
      intro: 'Visual size variants align with form density.',
      rows: [
        ['Default', 'Standard settings panels and forms.' ],
        ['Small', 'Dense tables enabling row-level flags inline.' ],
        ['With icons', 'Optional check/close inside track — decorative only; state also conveyed non-color.' ],
      ],
    },
    states: {
      intro: 'On and off must be distinguishable by thumb position and text, not color alone.',
      rows: [
        ['Off', 'Default inactive setting.' ],
        ['On', 'Active setting; label meaning applies.' ],
        ['Hover / focus', 'Interactive feedback on track or thumb.' ],
        ['Disabled', 'Non-interactive; state still readable.' ],
        ['Loading', 'Toggle in flight; prevent double submit.' ],
        ['Read-only', 'State visible; toggle blocked.' ],
      ],
    },
    sizes: {
      intro: 'Small switches in tables must still meet minimum touch target via padding.',
      rows: [
        ['Small', 'Compact inline in grids.' ],
        ['Medium', 'Default settings forms.' ],
      ],
    },
    contentGuidelines: {
      intro: 'Label describes the positive on state; avoid negated labels that confuse when off.',
      good: [
        'Enable email alerts',
        'Show inactive SKUs',
      ],
      avoid: [
        'Disable email alerts (double negative when off)',
        'On / Off without setting name',
      ],
    },
    dosDonts: {
      do: [
        'Use verb phrases that describe enabled behavior.',
        'Confirm destructive on toggles or revert on failure with toast feedback.',
        'Persist state optimistically only when rollback on error is handled.',
      ],
      dont: [
        'Use Switch for mutually exclusive options among three or more — use Radio Group.',
        'Use Switch inside multi-select lists — use Checkbox.',
        'Toggle without label visible or programmatically associated.',
      ],
    },
    usage: {
      when: [
        'Binary setting enables or disables a feature or visibility.',
        'Change may apply immediately or on explicit settings Save per page pattern.',
        'Visual metaphor of power or activation fits user mental model.',
      ],
      whenNot: [
        'User picks one of several modes — use Radio Group or Segmented Control.',
        'Acceptance of legal terms — use Checkbox.',
        'Multiple independent selections — use Checkbox Group.',
      ],
      scenarios: [
        { title: 'Column visibility', desc: 'Switch shows optional measure column; grid updates immediately.' },
        { title: 'Admin feature flag', desc: 'Switch with helper explaining tenant impact; confirm dialog on enable.' },
        { title: 'Notification preference', desc: 'Switch off disables channel; saved with Save settings bar.' },
      ],
      bestPractices: [
        'Place helper text below label for side effects longer than one line.',
        'Align switches in settings lists with label left, control right for scanability.',
        'Disable during API call; show error and revert if save fails on immediate mode.',
      ],
      layout: [
        'Settings list: label block left, switch right, full-width row clickable only if entire row toggles — ensure one control semantics.',
        'Avoid nesting switches without vertical spacing between unrelated settings.',
      ],
    },
    a11y: {
      roles: [
        'Use switch role or checkbox pattern only when switch semantics match — prefer switch for on/off settings.',
      ],
      focus: [
        'Switch receives focus in tab order; visible focus on thumb or track.',
      ],
      keyboard: [
        { key: 'Space', action: 'Toggle switch when focused.' },
        { key: 'Enter', action: 'Toggle when implemented on clickable row wrapper — avoid duplicate toggles.' },
        { key: 'Tab', action: 'Move to next control.' },
      ],
      aria: [
        { attr: 'aria-checked', when: 'Reflects on/off on switch element.' },
        { attr: 'aria-labelledby', when: 'External label associated with control.' },
        { attr: 'aria-describedby', when: 'Helper text linked.' },
        { attr: 'aria-busy', when: 'Loading persist in flight.' },
      ],
      screenReaders: [
        'Announce on or off and label on toggle.',
        'Announce failure if toggle reverts after error.',
      ],
      dosDonts: {
        do: ['Label the setting, not the control type Switch.'],
        dont: ['Use only green/red color to mean on/off without position or text state.'],
      },
    },
  },

  textarea: {
    purpose: [
      'Textarea collects multi-line plain text for descriptions, notes, addresses, and comments where formatting is not required.',
      'It supports longer content than Textbox with vertical resize or auto-grow behavior, character limits, and validation integrated with standard form patterns.',
    ],
    anatomy: {
      paragraphs: [
        'Textarea includes label, multi-line input, optional character counter, resize handle, and error messaging.',
      ],
      parts: [
        { name: 'Label', desc: 'Identifies the free-text field purpose.' },
        { name: 'Text area', desc: 'Native textarea element or equivalent with multi-line editing.' },
        { name: 'Placeholder', desc: 'Example content tone; disappears on input.' },
        { name: 'Character counter', desc: 'Shows remaining or used count when maxLength enforced.' },
        { name: 'Error message', desc: 'Validation or required empty feedback.' },
      ],
    },
    variants: {
      intro: 'Resize and growth behavior variants.',
      rows: [
        ['Fixed height', 'Scroll internal when content exceeds height.' ],
        ['Auto-grow', 'Expands vertically with content up to max height.' ],
        ['User resizable', 'Drag handle allows manual height adjust within bounds.' ],
        ['Read-only display', 'Shows stored text without edit affordance.' ],
      ],
    },
    states: {
      intro: 'Standard form field states apply.',
      rows: [
        ['Empty', 'Placeholder or helper visible.' ],
        ['Filled', 'User or default content present.' ],
        ['Focus', 'Border emphasis; caret visible.' ],
        ['Disabled', 'Non-interactive muted styling.' ],
        ['Read-only', 'Text selectable; edit blocked.' ],
        ['Error', 'Invalid or over limit on submit or live when configured.' ],
      ],
    },
    sizes: {
      intro: 'Default min-height signals expected content length.',
      rows: [
        ['Compact', '3 rows', 'Short notes and rejection reasons.' ],
        ['Standard', '5 rows', 'Default descriptions.' ],
        ['Expanded', '8+ rows', 'Long-form internal documentation fields.' ],
      ],
    },
    contentGuidelines: {
      intro: 'Placeholder demonstrates acceptable length and tone; label states required business purpose.',
      good: [
        'Label: Resolution notes — Placeholder: Describe root cause and corrective action…',
        'Helper: Visible to account administrators only',
      ],
      avoid: [
        'Enter description here (empty filler)',
        'Character limit without counter when limit is strict',
      ],
    },
    dosDonts: {
      do: [
        'Set sensible min-height for expected content volume.',
        'Validate max length with counter before submit.',
        'Preserve line breaks in stored and displayed value.',
        'Use auto-grow cautiously with max-height scroll fallback.',
      ],
      dont: [
        'Use Textarea for single-line values — use Textbox.',
        'Use Textarea for rich formatting — use Text Editor.',
        'Disable resize without providing adequate default height for task.',
      ],
    },
    usage: {
      when: [
        'Plain multi-line text is stored and displayed without rich formatting.',
        'Users need more than one sentence but not full document structure.',
        'Copy-paste from email or tickets is common.',
      ],
      whenNot: [
        'Formatted content with lists and links — use Text Editor.',
        'Code or logs — use monospace Code Block pattern.',
        'Single identifier — use Textbox.',
      ],
      scenarios: [
        { title: 'Approval comment', desc: 'Required on reject; max 500 characters with counter.' },
        { title: 'Shipping notes', desc: 'Optional; 3-row auto-grow; prints on packing slip.' },
        { title: 'API payload JSON', desc: 'Avoid Textarea without monospace and validation — prefer dedicated editor.' },
      ],
      bestPractices: [
        'Sanitize on display if content accepts pasted markup unexpectedly.',
        'Save draft on long forms to prevent navigation loss.',
        'Align width with form column; avoid full viewport width on ultra-wide monitors.',
      ],
      layout: [
        'Full-width within form max-width container.',
        'Place counter right-aligned below field when used.',
      ],
    },
    a11y: {
      roles: [
        'Native textarea with associated label — no role override.',
      ],
      focus: [
        'Textarea in natural tab order; focus ring visible.',
      ],
      keyboard: [
        { key: 'Tab', action: 'Move to next control; Shift+Tab previous — allow normal tab inside only if intentionally trapping for code editors, not default Textarea.' },
        { key: 'Standard text shortcuts', action: 'Preserve platform copy, paste, and line break behavior.' },
      ],
      aria: [
        { attr: 'aria-describedby', when: 'Helper, counter, or error linked.' },
        { attr: 'aria-invalid', when: 'Validation fails.' },
        { attr: 'aria-required', when: 'Field mandatory.' },
      ],
      screenReaders: [
        'Announce label, required state, and describedby content on focus.',
        'Counter updates may use aria-live polite when approaching limit if implemented.',
      ],
      dosDonts: {
        do: ['Programmatically associate label with textarea.'],
        dont: ['Use placeholder as sole label for required fields.'],
      },
    },
  },

  'time-picker': {
    purpose: [
      'Time Picker selects time of day — hours and minutes, optionally seconds — without forcing users to parse ambiguous typed strings.',
      'Use alongside Date Picker or inside Date Time Picker for schedules, shift planning, and cutoffs where locale-specific 12h or 24h display matters.',
    ],
    anatomy: {
      paragraphs: [
        'Time Picker combines a formatted input or trigger with a panel of lists, steppers, or clock UI for choosing time components.',
      ],
      parts: [
        { name: 'Label', desc: 'Identifies the time being set, e.g. Start time.' },
        { name: 'Input / trigger', desc: 'Shows selected time in locale format.' },
        { name: 'Time panel', desc: 'Scrollable columns or steppers for hour, minute, AM/PM.' },
        { name: 'Now shortcut', desc: 'Optional jump to current time.' },
        { name: 'Clear', desc: 'Reset when time is optional.' },
        { name: 'Error message', desc: 'Invalid manual entry or required empty.' },
      ],
    },
    variants: {
      intro: 'Format and granularity variants.',
      rows: [
        ['12-hour', 'With AM/PM selector for locales using 12h clock.'],
        ['24-hour', 'Hours 0–23 without AM/PM.'],
        ['With seconds', 'When sub-minute precision required.'],
        ['Stepped minutes', 'Only 0, 15, 30, 45 selectable for slot booking.'],
      ],
    },
    states: {
      intro: 'Validate partial entry and respect min/max time windows on selected date.',
      rows: [
        ['Empty', 'Placeholder shows format hint.'],
        ['Filled', 'Formatted time in input.'],
        ['Open panel', 'Lists highlight selected hour, minute, and period segments.'],
        ['Disabled slot', 'Times outside allowed window not selectable.'],
        ['Error', 'Parse failure or required missing on submit.'],
        ['Disabled field', 'Entire control inert.'],
      ],
    },
    sizes: {
      intro: 'Match Date Picker and Textbox sizes in combined datetime rows.',
      rows: [
        ['Small', '24px', 'Inline scheduling in grids.'],
        ['Medium', '32px', 'Standard forms and dialogs.'],
      ],
    },
    contentGuidelines: {
      intro: 'Show format in placeholder or helper consistent with locale; label names the business event time.',
      good: [
        'Label: Shift start — Placeholder: HH:MM per workspace locale',
        'Helper: Times use 24-hour clock in this workspace',
      ],
      avoid: [
        'Label: Time (ambiguous with multiple time fields)',
        'Mixing 12h display with 24h entry without AM/PM control',
      ],
    },
    dosDonts: {
      do: [
        'Respect locale for 12h vs 24h display.',
        'Disable past times on current date when scheduling future-only events.',
        'Close panel on complete selection for single-step pickers.',
        'Allow typed entry with strict parse validation as alternative to panel.',
      ],
      dont: [
        'Use Time Picker for duration length — use Number Input with unit.',
        'Offer second precision when business rules only need minutes.',
        'Omit timezone context when users collaborate across regions on the same date.',
      ],
    },
    usage: {
      when: [
        'Time of day must be chosen with format validation.',
        'Minute stepping reflects real slots, e.g. meetings on quarter hours.',
        'Combined with date in scheduling workflows.',
      ],
      whenNot: [
        'Full timestamp with timezone politics — use Date Time Picker with explicit zone.',
        'Relative time like in 30 minutes — use different pattern.',
        'Duration — use Number Input or dedicated duration control.',
      ],
      scenarios: [
        { title: 'Shift start', desc: 'Stepped 15-minute increments; 24h display for plant operators.' },
        { title: 'Meeting invite', desc: '12h with AM/PM; min time today enforced.' },
        { title: 'Batch job schedule', desc: 'Optional seconds; pairs with Date Picker in wizard step.' },
      ],
      bestPractices: [
        'Default to next sensible slot, e.g. next quarter hour, when empty.',
        'Scroll lists to selected value when panel opens.',
        'Validate manual blur entry with specific format error.',
        'Keep AM/PM control keyboard reachable in 12h mode.',
      ],
      layout: [
        'Place time segment adjacent to date in datetime rows with shared group label.',
        'Panel columns wide enough for touch; avoid ultra-narrow scroll lists.',
      ],
    },
    a11y: {
      roles: [
        'Time lists may use listbox or spinbutton columns for hour and minute.',
        'AM/PM control uses radio group or toggle with clear selected state.',
      ],
      focus: [
        'Focus moves into panel on open; returns to input on select and close.',
        'Keyboard users can complete selection without pointer.',
      ],
      keyboard: [
        { key: 'Arrow Up / Down', action: 'Increment or decrement focused hour, minute, or period column.' },
        { key: 'Tab', action: 'Move between hour, minute, AM/PM, and action buttons.' },
        { key: 'Enter', action: 'Commit selection and close panel.' },
        { key: 'Escape', action: 'Close panel without change.' },
        { key: 'Home / End', action: 'Jump to min or max in focused column when applicable.' },
      ],
      aria: [
        { attr: 'aria-label on columns', when: 'Hour, Minute, and AM/PM columns named explicitly.' },
        { attr: 'aria-invalid', when: 'Manual entry validation fails.' },
        { attr: 'aria-describedby', when: 'Format or timezone helper linked.' },
      ],
      screenReaders: [
        'Announce selected time when panel closes after change.',
        'Read disabled state for out-of-range times in lists.',
      ],
      dosDonts: {
        do: ['Expose selected values in input with accessible name matching visible label.'],
        dont: ['Rely on clock-only UI with no keyboard-equivalent adjustment.'],
      },
    },
  },
}
