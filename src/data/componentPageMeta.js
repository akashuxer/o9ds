import { COMPONENTS_NAV_TREE } from './componentsNav.js'

/**
 * @typedef {{ slug: string, label: string, section: string, categoryId: string }} ComponentPageMeta
 */

/**
 * @param {import('./componentsNav').NavNode[]} nodes
 * @param {string} sectionLabel
 * @param {string} categoryId top-level nav group id (folder name under pages/components/)
 * @param {ComponentPageMeta[]} acc
 */
function collectLeaves(nodes, sectionLabel, categoryId, acc) {
  for (const node of nodes) {
    if ('path' in node && node.path) {
      const m = node.path.match(/^\/components\/(.+)$/)
      if (m) {
        acc.push({ slug: m[1], label: node.label, section: sectionLabel, categoryId })
      }
    } else if ('children' in node && node.children) {
      collectLeaves(node.children, sectionLabel, categoryId, acc)
    }
  }
}

/** Every catalog component with its nav label, section, and category folder id. */
export function getAllComponentPageMeta() {
  /** @type {ComponentPageMeta[]} */
  const acc = []
  for (const group of COMPONENTS_NAV_TREE) {
    collectLeaves(group.children, group.label, group.id, acc)
  }
  return acc
}

const DEFAULT_DESC =
  'o9DS component. Documentation will be expanded in a future iteration. Use design tokens and patterns from this design system until full guidance is published.'

/** One-line description shown under the page title (stub and generated pages). */
export function getComponentPageDescription(slug) {
  if (!slug) return DEFAULT_DESC
  const meta = getAllComponentPageMeta().find((x) => x.slug === slug)
  if (!meta) return DEFAULT_DESC
  return `${meta.label} — ${meta.section} component in the o9 Design System. Usage, API, and accessibility guidance will be added in an upcoming documentation pass.`
}

/** PascalCase export name for a slug (e.g. multi-select → MultiSelect). */
export function slugToComponentModuleName(slug) {
  return slug
    .split('-')
    .map((p) => p[0].toUpperCase() + p.slice(1))
    .join('')
}
