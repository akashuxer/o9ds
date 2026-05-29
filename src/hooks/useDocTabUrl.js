import { useCallback, useEffect, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDocTabBasePath } from '../context/DocTabRouteContext'
import {
  buildDocTabPath,
  getDocTabFromPathname,
  resolveTabFromSlug,
  tabLabelToSlug,
} from '../utils/docTabUrl'

/**
 * Sync DocTabs with URL: `{basePath}/{tab-slug}` (Overview → `overview`).
 * Pass `basePath` in options or wrap the page in `DocTabRouteProvider`.
 */
export function useDocTabUrl(tabs, options = {}) {
  const { scrollToTop = true, legacyHashToTab, basePath: basePathOption } = options
  const basePathFromContext = useDocTabBasePath()
  const basePath = basePathOption ?? basePathFromContext
  const navigate = useNavigate()
  const location = useLocation()

  if (!basePath) {
    throw new Error('useDocTabUrl requires basePath via options or DocTabRouteProvider')
  }

  const { tabSlug } = useMemo(
    () => getDocTabFromPathname(location.pathname, tabs, basePath),
    [location.pathname, tabs, basePath],
  )

  const hashTab = useMemo(() => {
    if (!legacyHashToTab) return null
    const hash = location.hash.replace(/^#/, '')
    return hash ? legacyHashToTab[hash] ?? null : null
  }, [location.hash, legacyHashToTab])

  const activeTab = useMemo(() => {
    if (hashTab && tabs.includes(hashTab)) return hashTab
    return resolveTabFromSlug(tabSlug, tabs)
  }, [hashTab, tabSlug, tabs])

  const overviewPath = useMemo(() => buildDocTabPath(basePath, tabs[0]), [basePath, tabs])

  useEffect(() => {
    const normalized = location.pathname.replace(/\/$/, '')
    const base = basePath.replace(/\/$/, '')
    if (normalized === base) {
      navigate(overviewPath, { replace: true })
      return
    }
    if (!tabSlug) return
    const valid = tabs.some((t) => tabLabelToSlug(t) === tabSlug)
    if (!valid) {
      navigate(overviewPath, { replace: true })
    }
  }, [tabSlug, tabs, basePath, location.pathname, navigate, overviewPath])

  useEffect(() => {
    if (!legacyHashToTab || !location.hash) return
    const hash = location.hash.replace(/^#/, '')
    const tab = legacyHashToTab[hash]
    if (!tab || !tabs.includes(tab)) return
    const nextPath = buildDocTabPath(basePath, tab)
    navigate({ pathname: nextPath, hash: '' }, { replace: true })
  }, [legacyHashToTab, location.hash, location.pathname, basePath, tabs, navigate])

  const setActiveTab = useCallback(
    (tab) => {
      if (!tabs.includes(tab)) return
      const nextPath = buildDocTabPath(basePath, tab)
      if (location.pathname !== nextPath) {
        navigate(nextPath)
      }
      if (scrollToTop) {
        window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
      }
    },
    [basePath, location.pathname, navigate, scrollToTop, tabs],
  )

  return [activeTab, setActiveTab]
}
