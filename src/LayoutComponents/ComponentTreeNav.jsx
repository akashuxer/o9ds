import { useCallback, useEffect, useMemo, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {
  COMPONENTS_NAV_TREE,
  COMPONENT_DOC_ROUTES,
  findOpenGroupIds,
  filterComponentNavTree,
} from '../data/componentsNav'

function Chevron({ open }) {
  return (
    <svg
      className="h-4 w-4 shrink-0 transition-transform"
      style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )
}

function collectGroupIds(nodes) {
  let ids = []
  for (const n of nodes) {
    if ('children' in n && n.children && n.id) {
      ids.push(n.id)
      ids = ids.concat(collectGroupIds(n.children))
    }
  }
  return ids
}

/**
 * Recursive collapsible nav for /components/* — used in Layout sidebar.
 */
export default function ComponentTreeNav({ searchQuery, isDark, onNavigate }) {
  const { pathname } = useLocation()
  const [openIds, setOpenIds] = useState(() => new Set())

  const tree = useMemo(() => filterComponentNavTree(COMPONENTS_NAV_TREE, searchQuery), [searchQuery])

  const applyPathDefaults = useCallback(() => {
    const ids = findOpenGroupIds(pathname, COMPONENTS_NAV_TREE)
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (ids) ids.forEach((id) => next.add(id))
      return next
    })
  }, [pathname])

  useEffect(() => {
    const q = searchQuery.trim()
    if (q) {
      setOpenIds(new Set(collectGroupIds(tree)))
    } else {
      applyPathDefaults()
    }
  }, [pathname, searchQuery, tree, applyPathDefaults])

  const toggle = (id) => {
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const linkClass = ({ isActive }) =>
    `flex items-center justify-between gap-2 pl-2 pr-2 py-1.5 text-sm transition-colors border-l-2 ${
      isActive
        ? isDark
          ? 'bg-neutral-800 text-white border-white'
          : 'bg-[#E5E5E5] text-[#010101] border-[#010101]'
        : 'border-transparent hover:opacity-90 ' +
          (isDark ? 'text-neutral-400 hover:bg-neutral-800/50 hover:text-white' : 'text-[#303030] hover:bg-[#E5E5E5]/80 hover:text-[#010101]')
    }`

  const renderNodes = (nodes, depth) => (
    <ul
      className={depth === 0 ? 'space-y-0.5' : 'ml-1 mt-0.5 space-y-0.5 border-l pl-2'}
      style={depth > 0 ? { borderColor: isDark ? '#404040' : '#E5E5E5' } : undefined}
    >
      {nodes.map((node) => {
        if (node.path) {
          const hasDoc = COMPONENT_DOC_ROUTES.has(node.path)
          return (
            <li key={node.path}>
              <NavLink to={node.path} end className={linkClass} onClick={onNavigate}>
                <span className="flex items-center gap-2 min-w-0">
                  {hasDoc && (
                    <span className="shrink-0 w-2 h-2 rounded-full bg-[#00c278]" aria-hidden title="Documentation available" />
                  )}
                  {node.label}
                </span>
              </NavLink>
            </li>
          )
        }
        const open = openIds.has(node.id)
        return (
          <li key={node.id}>
            <button
              type="button"
              onClick={() => toggle(node.id)}
              aria-expanded={open}
              className="flex w-full items-center gap-1 px-2 py-1.5 text-left text-sm font-medium transition-colors hover:opacity-90"
              style={{ color: isDark ? '#a3a3a3' : '#303030' }}
            >
              <Chevron open={open} />
              <span className="min-w-0 leading-snug">{node.label}</span>
            </button>
            {open && node.children && renderNodes(node.children, depth + 1)}
          </li>
        )
      })}
    </ul>
  )

  if (tree.length === 0) {
    return (
      <ul className="space-y-0.5">
        <li>
          <NavLink to="/components" end className={linkClass} onClick={onNavigate}>
            <span className="flex items-center gap-2 min-w-0">Overview</span>
          </NavLink>
        </li>
      </ul>
    )
  }

  return (
    <ul className="space-y-0.5">
      <li>
        <NavLink to="/components" end className={linkClass} onClick={onNavigate}>
          <span className="flex items-center gap-2 min-w-0">Overview</span>
        </NavLink>
      </li>
      <li className="pt-1">{renderNodes(tree, 0)}</li>
    </ul>
  )
}
