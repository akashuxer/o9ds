import { getDescriptor } from './componentDescriptors.generated'

/** Route slug → descriptor key when they differ (mirrors scripts/sync-from-descriptors.mjs). */
const SLUG_TO_DESCRIPTOR = {
  badge: 'badge-alert',
  'select-dropdown': 'select',
  'inline-alert': 'message-alert',
  label: 'form-label',
  toolbar: 'button-group',
}

const STORYBOOK_BASE = '/storybook'
const AZURE_GIT_REPO = 'https://o9git.visualstudio.com/CoreDev/_git/o9.DesignSystem'

/** Map descriptor category labels to Storybook story id prefix. */
const CATEGORY_TO_STORYBOOK_PREFIX = {
  Actions: 'actions',
  Navigation: 'navigation',
  Inputs: 'inputs',
  Overlays: 'overlays',
  Feedback: 'feedback',
  'data-display': 'data-display',
  Utilities: 'utilities',
  'Loading & Empty': 'loading-empty',
  'File Handling': 'file-handling',
  'Layout & Structure': 'layout-structure',
  Identity: 'identity',
}

function categoryToStorybookPrefix(category) {
  if (!category) return null
  return CATEGORY_TO_STORYBOOK_PREFIX[category] ?? category.toLowerCase().replace(/\s+/g, '-')
}

/** Storybook uses concatenated slug (e.g. alert-dialog → alertdialog). */
function slugToStorybookComponentId(slug) {
  return slug.replace(/-/g, '')
}

/**
 * Build external resource URLs for a component doc page.
 * @param {string} slug — catalog slug (matches /components/:slug)
 * @returns {{ figma: string | null, storybook: string | null, azureGit: string | null }}
 */
function resolveDescriptor(slug) {
  const key = SLUG_TO_DESCRIPTOR[slug] ?? slug
  return getDescriptor(key) ?? getDescriptor(slug)
}

export function getComponentResourceLinks(slug) {
  const descriptorKey = SLUG_TO_DESCRIPTOR[slug] ?? slug
  const descriptor = resolveDescriptor(slug)
  if (!descriptor) {
    return { figma: null, storybook: null, azureGit: AZURE_GIT_REPO }
  }

  const prefix = categoryToStorybookPrefix(descriptor.category)
  const storySlug = descriptor.slug ?? descriptorKey
  const storyId = prefix ? `${prefix}-${slugToStorybookComponentId(storySlug)}` : null
  const storybook = storyId
    ? `${STORYBOOK_BASE}/?path=/docs/${storyId}--docs`
    : null

  return {
    figma: descriptor.figma ?? null,
    storybook,
    azureGit: AZURE_GIT_REPO,
  }
}
