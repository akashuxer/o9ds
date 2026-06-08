import { lazy, Suspense } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { devUsageTopicPath } from '../../data/docPaths'

const USAGE_TOPICS = {
  overview: { label: 'Usage Standards', Component: lazy(() => import('./Index')) },
  'public-api': { label: 'Public API', Component: lazy(() => import('./PublicApi')) },
  components: { label: 'Components Contract', Component: lazy(() => import('./Components')) },
  styling: { label: 'Styling', Component: lazy(() => import('./Styling')) },
  composition: { label: 'Composition', Component: lazy(() => import('./Composition')) },
  accessibility: { label: 'Accessibility', Component: lazy(() => import('./Accessibility')) },
  testing: { label: 'Testing', Component: lazy(() => import('./Testing')) },
  versioning: { label: 'Versioning', Component: lazy(() => import('./Versioning')) },
  'anti-patterns': { label: 'Anti-Patterns', Component: lazy(() => import('./AntiPatterns')) },
  checklist: { label: 'PR Checklist', Component: lazy(() => import('./Checklist')) },
}

export const USAGE_TOPIC_SLUGS = Object.keys(USAGE_TOPICS)

export function getUsageTopicLabel(slug) {
  return USAGE_TOPICS[slug]?.label
}

export default function UsageTopicPage() {
  const { topic } = useParams()
  const entry = topic ? USAGE_TOPICS[topic] : null

  if (!entry) {
    return <Navigate to={devUsageTopicPath('overview')} replace />
  }

  const { Component } = entry
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  )
}
