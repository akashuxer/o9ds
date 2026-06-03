/** @typedef {'ready' | 'notStarted' | 'inProgress'} ComponentResourceStatusValue */

/** @typedef {{ figma?: ComponentResourceStatusValue, storybook?: ComponentResourceStatusValue, azureGit?: ComponentResourceStatusValue, documentation?: ComponentResourceStatusValue }} ComponentResourceStatusMap */

/** @type {Record<ComponentResourceStatusValue, string>} */
export const COMPONENT_RESOURCE_STATUS_LABEL = {
  ready: 'Ready',
  notStarted: 'Not started',
  inProgress: 'In progress',
}

/** @type {Record<ComponentResourceStatusValue, { light: { border: string; bg: string; text: string }; dark: { border: string; bg: string; text: string } }>} */
export const COMPONENT_RESOURCE_STATUS_THEME = {
  ready: {
    light: { border: '#B8E6C8', bg: '#E8F8EE', text: '#006B3F' },
    dark: { border: '#1A4D32', bg: '#0D2818', text: '#6EE7A8' },
  },
  inProgress: {
    light: { border: '#F5D9A8', bg: '#FFF8E8', text: '#8A5A00' },
    dark: { border: '#5C4A1A', bg: '#2A2208', text: '#F5C842' },
  },
  notStarted: {
    light: { border: '#E5E5E5', bg: '#F5F5F5', text: '#525252' },
    dark: { border: '#404040', bg: '#262626', text: '#A3A3A3' },
  },
}

/** Pipeline status for Avatar — shown via resource chip color coding. */
export const AVATAR_RESOURCE_STATUS = {
  figma: 'ready',
  storybook: 'notStarted',
  azureGit: 'notStarted',
  documentation: 'inProgress',
}

/** Pipeline status for Avatar Group — same as Avatar. */
export const AVATAR_GROUP_RESOURCE_STATUS = {
  figma: 'ready',
  storybook: 'notStarted',
  azureGit: 'notStarted',
  documentation: 'inProgress',
}

/** Pipeline status for Badge. */
export const BADGE_RESOURCE_STATUS = {
  figma: 'ready',
  storybook: 'notStarted',
  azureGit: 'notStarted',
  documentation: 'inProgress',
}

/**
 * @param {ComponentResourceStatusValue} status
 * @param {boolean} isDark
 */
export function getComponentResourceStatusColors(status, isDark) {
  const theme = COMPONENT_RESOURCE_STATUS_THEME[status] ?? COMPONENT_RESOURCE_STATUS_THEME.notStarted
  return isDark ? theme.dark : theme.light
}
