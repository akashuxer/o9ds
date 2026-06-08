import { lazy, Suspense } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { devRefTopicPath } from '../../data/docPaths'

const DEV_REF_TOPICS = {
  'agentic-pipeline': { label: 'Agentic Pipeline', Component: lazy(() => import('./AgenticPipeline')) },
  'component-pipeline': { label: 'Component Pipeline', Component: lazy(() => import('./ComponentPipeline')) },
  'token-pipeline': { label: 'Token Pipeline', Component: lazy(() => import('./TokenPipeline')) },
  'shared-patterns': { label: 'Shared Patterns', Component: lazy(() => import('./SharedPatterns')) },
  'testing-and-drift': { label: 'Testing & Drift', Component: lazy(() => import('./TestingAndDrift')) },
  workflows: { label: 'Contributor Workflows', Component: lazy(() => import('./Workflows')) },
}

export const DEV_REF_TOPIC_SLUGS = Object.keys(DEV_REF_TOPICS)

export function getDevRefTopicLabel(slug) {
  return DEV_REF_TOPICS[slug]?.label
}

const DEFAULT_TOPIC = 'agentic-pipeline'

export default function DevRefTopicPage() {
  const { topic } = useParams()
  const entry = topic ? DEV_REF_TOPICS[topic] : null

  if (!entry) {
    return <Navigate to={devRefTopicPath(DEFAULT_TOPIC)} replace />
  }

  const { Component } = entry
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  )
}
