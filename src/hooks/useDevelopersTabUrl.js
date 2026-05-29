import { useCallback, useEffect, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { PATH_DEV_INTRO_BASE, PATH_DEV_USAGE_BASE } from '../data/docPaths'
import { buildDocTabPath, tabLabelToSlug } from '../utils/docTabUrl'

const INTRO_TABS = ['Overview', 'Usage', 'Architecture']

const INTRO_TAB_BY_SLUG = {
  overview: 'Overview',
  usage: 'Usage',
  architecture: 'Architecture',
}

/** Intro Guide tabs on `/gettingstarted/developers/introguide/:tab`. */
export function useDevelopersIntroTabUrl() {
  const navigate = useNavigate()
  const location = useLocation()

  const tabSlug = useMemo(() => {
    const base = PATH_DEV_INTRO_BASE.replace(/\/$/, '')
    const normalized = location.pathname.replace(/\/$/, '')
    if (!normalized.startsWith(base)) return null
    const rest = normalized.slice(base.length).replace(/^\//, '')
    return rest.split('/')[0] || null
  }, [location.pathname])

  const activeTab = useMemo(() => {
    if (tabSlug && INTRO_TAB_BY_SLUG[tabSlug]) return INTRO_TAB_BY_SLUG[tabSlug]
    return 'Overview'
  }, [tabSlug])

  const overviewPath = buildDocTabPath(PATH_DEV_INTRO_BASE, 'Overview')

  useEffect(() => {
    const base = PATH_DEV_INTRO_BASE.replace(/\/$/, '')
    const normalized = location.pathname.replace(/\/$/, '')
    if (normalized === base) {
      navigate(overviewPath, { replace: true })
      return
    }
    if (!tabSlug || !INTRO_TAB_BY_SLUG[tabSlug]) {
      navigate(overviewPath, { replace: true })
    }
  }, [tabSlug, location.pathname, navigate, overviewPath])

  const setActiveTab = useCallback(
    (tab) => {
      if (!INTRO_TABS.includes(tab)) return
      const nextPath = buildDocTabPath(PATH_DEV_INTRO_BASE, tab)
      if (location.pathname !== nextPath) navigate(nextPath)
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
    },
    [location.pathname, navigate],
  )

  return [activeTab, setActiveTab]
}

/**
 * Usage nav → `/gettingstarted/developers/usage/overview` shows Intro Guide Usage tab.
 * Other usage topics redirect to the same until dedicated pages exist.
 */
export function useDevelopersUsageSection() {
  const navigate = useNavigate()
  const location = useLocation()
  const usageOverviewPath = buildDocTabPath(PATH_DEV_USAGE_BASE, 'Overview')
  const introUsagePath = buildDocTabPath(PATH_DEV_INTRO_BASE, 'Usage')

  useEffect(() => {
    const base = PATH_DEV_USAGE_BASE.replace(/\/$/, '')
    const normalized = location.pathname.replace(/\/$/, '')
    if (!normalized.startsWith(base)) return
    if (normalized === base) {
      navigate(usageOverviewPath, { replace: true })
      return
    }
    const slug = normalized.slice(base.length).replace(/^\//, '').split('/')[0]
    if (slug === tabLabelToSlug('Overview')) {
      if (normalized !== usageOverviewPath) navigate(usageOverviewPath, { replace: true })
      return
    }
    navigate(introUsagePath, { replace: true })
  }, [location.pathname, navigate, usageOverviewPath, introUsagePath])

  return { usageOverviewPath, introUsagePath }
}
