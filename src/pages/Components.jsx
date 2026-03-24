import { Link } from 'react-router-dom'
import PageWithToc from '../LayoutComponents/PageWithToc'
import { COMPONENTS_NAV_TREE, COMPONENT_DOC_ROUTES } from '../data/componentsNav'

const TOC_SECTIONS = COMPONENTS_NAV_TREE.map((g) => ({
  id: g.id,
  label: g.label,
}))

function CatalogNode({ node, depth = 0 }) {
  if (node.path) {
    const hasDoc = COMPONENT_DOC_ROUTES.has(node.path)
    return (
      <div
        className="flex flex-wrap items-center gap-x-2 gap-y-0.5 py-1.5 text-sm"
        style={{ paddingLeft: depth > 0 ? Math.min(depth * 12, 48) : 0 }}
      >
        <Link
          to={node.path}
          className="text-o9ds-light-primary dark:text-white font-medium underline-offset-2 hover:underline"
        >
          {node.label}
        </Link>
        {hasDoc && (
          <span className="text-[10px] font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">Doc</span>
        )}
      </div>
    )
  }

  return (
    <details className="group border border-o9ds-light-border dark:border-neutral-700 mb-2 open:bg-o9ds-light-surface/50 dark:open:bg-neutral-900/40">
      <summary className="cursor-pointer list-none px-3 py-2.5 font-semibold text-o9ds-light-primary dark:text-white [&::-webkit-details-marker]:hidden flex items-center gap-2">
        <span className="text-neutral-500 dark:text-neutral-500 text-xs transition-transform group-open:rotate-90">▸</span>
        {node.label}
      </summary>
      <div className="px-3 pb-3 pt-0 space-y-1 border-t border-o9ds-light-border/80 dark:border-neutral-800">
        {node.children.map((child) => (
          <CatalogNode key={child.id || child.path} node={child} depth={depth + 1} />
        ))}
      </div>
    </details>
  )
}

export default function Components() {
  return (
    <PageWithToc sections={TOC_SECTIONS}>
      <div className="space-y-10">
        <section>
          <h1 className="text-[30px] font-bold mb-4 text-o9ds-light-primary dark:text-white">Components</h1>
          <p className="text-lg text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed">
            Browse the component catalog by category. Expand each group to see subcategories and links to documentation pages. Items marked{' '}
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm">Doc</span> have full documentation; others are placeholders until their pages ship.
          </p>
          <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 mt-4">
            For spacing tokens used across components, see{' '}
            <Link to="/spacing" className="text-o9ds-light-primary dark:text-white underline hover:no-underline font-medium">
              Spacing
            </Link>
            .
          </p>
        </section>

        {COMPONENTS_NAV_TREE.map((group) => (
          <section key={group.id} id={group.id} className="scroll-mt-24 space-y-3">
            <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white border-b border-o9ds-light-border dark:border-neutral-700 pb-2">
              {group.label}
            </h2>
            <div className="space-y-1">
              {group.children.map((child) => (
                <CatalogNode key={child.id || child.path} node={child} depth={0} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageWithToc>
  )
}
