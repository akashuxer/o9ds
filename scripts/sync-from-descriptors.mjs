/**
 * Sync component doc tables from the canonical Arvo descriptors.
 *
 * Reads every JSON file under `../o9-design-system/descriptors/` and emits a
 * single JS module at `src/data/componentDescriptors.generated.js` that
 * documentation pages import to render their PropsTable, CssVarsGrid,
 * MethodsTable, EventsTable, AriaTable, KeyboardTable, and BEM tables.
 *
 * Run: npm run sync:descriptors
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const DESCRIPTORS_DIR = path.resolve(ROOT, '..', 'o9-design-system', 'descriptors')
const OUT_FILE = path.resolve(ROOT, 'src', 'data', 'componentDescriptors.generated.js')

/**
 * Catalog slug -> descriptor base name mapping. Slugs that match the descriptor
 * filename (e.g. `button` -> `button.json`) don't need an entry here.
 */
const SLUG_TO_DESCRIPTOR = {
  badge: 'badge-alert',
  'select-dropdown': 'select',
}

/**
 * Pick a stable example value for a property type when we want to show a
 * default of "—" if the descriptor leaves it null/undefined.
 */
function fmtDefault(value) {
  if (value === null || value === undefined) return '—'
  if (typeof value === 'string') return value === '' ? '""' : value
  if (typeof value === 'boolean') return value ? 'true' : 'false'
  if (typeof value === 'number') return String(value)
  return String(value)
}

function fmtType(prop) {
  if (typeof prop.type === 'string' && prop.type !== 'enum') return prop.type
  if (prop.type === 'enum' && Array.isArray(prop.values)) {
    return prop.values.map((v) => `'${v}'`).join(' | ')
  }
  return 'unknown'
}

function fmtPayload(payload) {
  if (!payload || typeof payload !== 'object') return '—'
  const parts = Object.entries(payload).map(([k, v]) => `${k}: ${v}`)
  return `{ ${parts.join(', ')} }`
}

function methodSignature(method) {
  const params = (method.parameters ?? [])
    .map((p) => `${p.name}: ${p.type ?? 'any'}`)
    .join(', ')
  return `${method.name}(${params})`
}

function buildPropsRows(descriptor) {
  if (!Array.isArray(descriptor.props)) return []
  return descriptor.props.map((p) => ({
    prop: p.name,
    type: fmtType(p),
    default: fmtDefault(p.default),
    required: p.required ? 'Yes' : 'No',
    desc: p.description ?? '',
  }))
}

function buildEventsRows(descriptor) {
  if (!Array.isArray(descriptor.events)) return []
  return descriptor.events.map((e) => ({
    event: e.name,
    payload: fmtPayload(e.payload),
    desc: e.description ?? '',
  }))
}

function buildMethodsRows(descriptor) {
  if (!Array.isArray(descriptor.methods)) return []
  return descriptor.methods.map((m) => ({
    method: methodSignature(m),
    returns: m.returnType ?? 'void',
    desc: m.description ?? '',
  }))
}

function buildAriaRows(descriptor) {
  const a11y = descriptor.accessibility
  if (!a11y) return []
  const notes = a11y.ariaAttributeNotes ?? {}
  const list = Array.isArray(a11y.ariaAttributes) ? a11y.ariaAttributes : []
  return list.map((attr) => ({
    attr,
    when: notes[attr] ?? 'See component spec.',
  }))
}

function buildKeyboardRows(descriptor) {
  const a11y = descriptor.accessibility
  if (!a11y || !Array.isArray(a11y.keyboardInteractions)) return []
  return a11y.keyboardInteractions.map((k) => ({
    key: k.key,
    action: k.action,
  }))
}

function buildCssVarGroups(descriptor) {
  const cssVars = descriptor.cssVariables
  if (!cssVars || typeof cssVars !== 'object') return []
  const groups = []
  for (const [category, group] of Object.entries(cssVars)) {
    if (!group || typeof group !== 'object') continue
    const vars = Object.keys(group)
    if (vars.length === 0) continue
    // Categorize labels: capitalize and humanize.
    const label = category.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase()).trim()
    groups.push({ category: label, vars })
  }
  return groups
}

function buildVariantRows(descriptor) {
  const mods = descriptor.bem?.modifiers
  if (!Array.isArray(mods)) return []
  return mods
    .filter((m) => m.type === 'variant')
    .map((m) => ({ name: m.name, desc: m.description ?? '' }))
}

function buildSizeRows(descriptor) {
  const mods = descriptor.bem?.modifiers
  if (!Array.isArray(mods)) return []
  return mods
    .filter((m) => m.type === 'size')
    .map((m) => ({ name: m.name, desc: m.description ?? '' }))
}

function buildLayoutRows(descriptor) {
  const mods = descriptor.bem?.modifiers
  if (!Array.isArray(mods)) return []
  return mods
    .filter((m) => m.type === 'layout')
    .map((m) => ({ name: m.name, desc: m.description ?? '' }))
}

function buildStateRows(descriptor) {
  const states = descriptor.bem?.stateClasses
  if (!Array.isArray(states)) return []
  return states.map((s) => ({ name: s.name, desc: s.description ?? '' }))
}

function buildElementRows(descriptor) {
  const els = descriptor.bem?.elements
  if (!Array.isArray(els)) return []
  return els.map((e) => ({
    name: e.name,
    optional: e.optional ? 'Yes' : 'No',
    desc: e.description ?? '',
  }))
}

function buildOne(slug, descriptor) {
  return {
    slug,
    name: descriptor.name,
    abbreviation: descriptor.abbreviation ?? null,
    category: descriptor.category ?? null,
    status: descriptor.status ?? null,
    description: descriptor.description ?? '',
    bem: {
      block: descriptor.bem?.block ?? null,
      elements: buildElementRows(descriptor),
      variants: buildVariantRows(descriptor),
      sizes: buildSizeRows(descriptor),
      layouts: buildLayoutRows(descriptor),
      states: buildStateRows(descriptor),
    },
    props: buildPropsRows(descriptor),
    events: buildEventsRows(descriptor),
    methods: buildMethodsRows(descriptor),
    aria: buildAriaRows(descriptor),
    keyboard: buildKeyboardRows(descriptor),
    cssVarGroups: buildCssVarGroups(descriptor),
    figma: descriptor.figmaUrl ?? null,
  }
}

function loadDescriptor(name) {
  const file = path.join(DESCRIPTORS_DIR, `${name}.json`)
  if (!fs.existsSync(file)) return null
  return JSON.parse(fs.readFileSync(file, 'utf8'))
}

function discoverSlugs() {
  const out = new Map()
  // Map descriptors by their kebab filename
  const descriptorFiles = fs
    .readdirSync(DESCRIPTORS_DIR)
    .filter((f) => f.endsWith('.json'))
    .map((f) => f.replace(/\.json$/, ''))
  for (const base of descriptorFiles) {
    out.set(base, base)
  }
  // Add slug aliases
  for (const [slug, base] of Object.entries(SLUG_TO_DESCRIPTOR)) {
    out.set(slug, base)
  }
  return out
}

const slugToBase = discoverSlugs()
const all = {}

for (const [slug, base] of slugToBase.entries()) {
  const desc = loadDescriptor(base)
  if (!desc) {
    console.warn(`[sync] descriptor not found for slug=${slug} base=${base}`)
    continue
  }
  all[slug] = buildOne(slug, desc)
}

const out = `/**
 * AUTO-GENERATED by scripts/sync-from-descriptors.mjs — do not edit by hand.
 * Re-run with: npm run sync:descriptors
 *
 * Source: ../o9-design-system/descriptors/*.json
 *
 * Each entry is keyed by component slug (matches /components/:slug routes) and
 * exposes pre-shaped row arrays for the table primitives in
 * src/LayoutComponents/ComponentDocPrimitives.jsx.
 */
export const COMPONENT_DESCRIPTORS = ${JSON.stringify(all, null, 2)}

export function getDescriptor(slug) {
  return COMPONENT_DESCRIPTORS[slug] ?? null
}
`

fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true })
fs.writeFileSync(OUT_FILE, out, 'utf8')

const slugCount = Object.keys(all).length
console.log(`[sync] wrote ${slugCount} descriptor entries to ${path.relative(ROOT, OUT_FILE)}`)
