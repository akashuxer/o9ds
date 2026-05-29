import { Navigate, useParams } from 'react-router-dom'
import {
  COMPONENTS,
  PATH_DEV_INTRO_BASE,
  contentTopicPath,
  devRefTopicPath,
  devUsageTopicPath,
  docPagePath,
  patternTopicPath,
} from '../data/docPaths'

/** Redirect `/old-base` or `/old-base/:tab` → `newBase/{tab|overview}`. */
export function LegacyDocTabRedirect({ newBase, defaultTab = 'Overview' }) {
  const { tab } = useParams()
  const base = newBase.replace(/\/$/, '')
  const to = tab ? `${base}/${tab}` : docPagePath(base, defaultTab)
  return <Navigate to={to} replace />
}

export function LegacyRedirect({ to }) {
  return <Navigate to={to} replace />
}

export function LegacyComponentRedirect() {
  const { slug, tab } = useParams()
  const base = `${COMPONENTS}/${slug}`
  const to = tab ? `${base}/${tab}` : docPagePath(base, 'Overview')
  return <Navigate to={to} replace />
}

export function LegacyUsageRedirect() {
  const { topic } = useParams()
  const to = topic ? devUsageTopicPath(topic) : devUsageTopicPath('overview')
  return <Navigate to={to} replace />
}

export function LegacyDevRefRedirect() {
  const { topic } = useParams()
  const to = topic ? devRefTopicPath(topic) : docPagePath(PATH_DEV_INTRO_BASE, 'Architecture')
  return <Navigate to={to} replace />
}

export function LegacyPatternRedirect() {
  const { topic } = useParams()
  return <Navigate to={patternTopicPath(topic)} replace />
}

export function LegacyContentRedirect() {
  const { topic } = useParams()
  return <Navigate to={contentTopicPath(topic)} replace />
}
