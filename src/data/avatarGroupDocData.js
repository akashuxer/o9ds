/** Avatar Group component documentation — props and overview table rows. */

export const AVATAR_GROUP_PROPS = [
  {
    prop: 'avatars',
    type: 'Avatar[]',
    default: '[]',
    appliesTo: 'All',
    desc: 'Collection of avatar objects rendered in the group. Supports image, initials, icon, logo, o9logo, and novai variants.',
  },
  {
    prop: 'maxVisible',
    type: 'number',
    default: '4',
    appliesTo: 'All',
    desc: 'Maximum number of visible avatars before overflow is triggered. Remaining users collapse into a +N overflow avatar.',
  },
  {
    prop: 'size',
    type: 'sm | md | lg | xl',
    default: 'md',
    appliesTo: 'All',
    desc: 'Controls avatar size across the entire group. All avatars within a group maintain a consistent size.',
  },
  {
    prop: 'overflowAction',
    type: 'actionMenu | popover | tooltip',
    default: 'actionMenu',
    appliesTo: 'maxVisible exceeded',
    desc: 'Interaction when the overflow (+N) avatar is active: actionMenu (list hidden users), popover (richer content), or tooltip (hover/focus preview). Default actionMenu.',
  },
  {
    prop: 'state',
    type: 'enabled | hover | focus | active',
    default: 'enabled',
    appliesTo: 'overflow avatar',
    desc: 'Controls the interaction state of the overflow (+N) avatar.',
  },
  {
    prop: 'tooltip',
    type: 'string',
    default: 'Auto generated',
    appliesTo: 'overflow avatar',
    desc: 'Enables tooltip behavior for all visible avatars and the overflow (+N) avatar. Hovering or focusing shows contextual user information. Accessible label and native tooltip. Maps to both aria-label and title. Example: "14 additional collaborators".',
  },
]

export const AVATAR_GROUP_SIZES = [
  ['sm', 'Dense tables, compact layouts'],
  ['md', 'Standard UI patterns'],
  ['lg', 'Cards, workflows, dashboards'],
  ['xl', 'Profile-heavy or visually prominent surfaces'],
]

export const AVATAR_GROUP_STATE_ROWS = [
  ['enabled', 'Default appearance'],
  ['hover', 'Hover feedback'],
  ['focus', 'Keyboard focus'],
  ['active', 'Opens hidden user menu'],
]

/** Horizontal overlap (negative margin) between stacked avatars — matches Avatar Group size token. */
export const AVATAR_GROUP_STACKING_OVERLAP = [
  ['sm', '-4px'],
  ['md', '-6px'],
  ['lg', '-8px'],
  ['xl', '-10px'],
]

export const AVATAR_GROUP_PROPS_TABLE_ROWS = AVATAR_GROUP_PROPS.map((row) => ({
  prop: row.prop,
  type: row.type,
  default: row.default,
  appliesTo: row.appliesTo,
  desc: row.desc,
}))

export const AVATAR_GROUP_SIZE_TABLE_ROWS = AVATAR_GROUP_SIZES.map(([size, useCase]) => ({
  size,
  useCase,
}))

export const AVATAR_GROUP_STATE_TABLE_ROWS = AVATAR_GROUP_STATE_ROWS.map(([state, behavior]) => ({
  state,
  behavior,
}))

export const AVATAR_GROUP_STACKING_TABLE_ROWS = AVATAR_GROUP_STACKING_OVERLAP.map(([size, overlap]) => ({
  size,
  overlap,
}))

/** On-this-page sections for Avatar Group Overview tab. */
export const AVATAR_GROUP_OVERVIEW_TOC = [
  { id: 'avatar-group-when-to-use', label: 'When to use' },
  { id: 'avatar-group-when-not-to-use', label: 'When not to use' },
  { id: 'avatar-group-anatomy', label: 'Anatomy' },
  { id: 'avatar-group-behavior', label: 'Behavior' },
  { id: 'avatar-group-tooltip', label: 'Tooltip behavior' },
  { id: 'avatar-group-overflow', label: 'Overflow interaction' },
  { id: 'avatar-group-states', label: 'States' },
  { id: 'avatar-group-sizes', label: 'Sizes' },
  { id: 'avatar-group-stacking', label: 'Stacking guidelines' },
  { id: 'avatar-group-accessibility', label: 'Accessibility' },
  { id: 'avatar-group-props', label: 'API props' },
  { id: 'avatar-group-best-practices', label: 'Best practices' },
]
