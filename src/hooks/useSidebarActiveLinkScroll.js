import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Keeps the active sidebar link visible inside the scrollable `<aside>` after navigation or refresh.
 *
 * @param {import('react').RefObject<HTMLElement | null>} sidebarRef — scroll container (`overflow-y-auto`)
 * @param {import('react').RefObject<HTMLElement | null>} navRef — nav root containing `a[aria-current="page"]`
 * @param {unknown[]} deps — extra deps (e.g. accordion open state) to re-run after children mount
 */
export function useSidebarActiveLinkScroll(sidebarRef, navRef, deps = []) {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    const sidebar = sidebarRef.current
    const nav = navRef.current
    if (!sidebar || !nav) return

    const scrollActiveIntoView = () => {
      const active = nav.querySelector('a[aria-current="page"]')
      if (!active) return

      const stickyHeader = sidebar.querySelector('[data-arvo-sidebar-sticky]')
      const stickyHeight = stickyHeader?.offsetHeight ?? 0
      const padding = 12

      const sidebarRect = sidebar.getBoundingClientRect()
      const linkRect = active.getBoundingClientRect()
      const linkTop = linkRect.top - sidebarRect.top + sidebar.scrollTop
      const linkBottom = linkTop + linkRect.height

      const viewTop = sidebar.scrollTop + stickyHeight + padding
      const viewBottom = sidebar.scrollTop + sidebar.clientHeight - padding

      if (linkTop < viewTop) {
        sidebar.scrollTo({ top: Math.max(0, linkTop - stickyHeight - padding), behavior: 'auto' })
      } else if (linkBottom > viewBottom) {
        sidebar.scrollTo({ top: linkBottom - sidebar.clientHeight + padding, behavior: 'auto' })
      }
    }

    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(scrollActiveIntoView)
    })
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- pathname + caller deps intentionally drive re-scroll
  }, [pathname, sidebarRef, navRef, ...deps])
}
