import GenericComponentDoc from './GenericComponentDoc'
import { getComponentPageDescription } from '../../data/componentPageMeta'

/**
 * Factory for catalog stub pages. Each generated file calls this with its slug.
 * @param {string} slug
 */
export function stubComponentPage(slug) {
  function StubComponentDoc() {
    return <GenericComponentDoc slug={slug} description={getComponentPageDescription(slug)} />
  }
  StubComponentDoc.displayName = `${slugToDisplayName(slug)}Doc`
  return StubComponentDoc
}

function slugToDisplayName(slug) {
  return slug
    .split('-')
    .map((p) => p[0].toUpperCase() + p.slice(1))
    .join('')
}
