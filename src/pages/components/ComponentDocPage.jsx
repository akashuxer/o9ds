import { useParams } from 'react-router-dom'
import Button from './buttons-actions/Button'
import Cards from './data-display/Cards'
import * as StubPages from './allStubComponents'
import GenericComponentDoc from './GenericComponentDoc'
import { getAllComponentPageMeta, slugToComponentModuleName } from '../../data/componentPageMeta'

/**
 * Slug → page component. Button and Cards are full docs; all other catalog items use generated stubs
 * (see `allStubComponents.js` + `scripts/generate-component-stubs.mjs`).
 */
const FULL_DOC_BY_SLUG = (() => {
  const map = {
    button: Button,
    cards: Cards,
  }
  for (const { slug } of getAllComponentPageMeta()) {
    if (slug === 'button' || slug === 'cards') continue
    const exportName = slugToComponentModuleName(slug)
    const Cmp = StubPages[exportName]
    if (Cmp) map[slug] = Cmp
  }
  return map
})()

export default function ComponentDocPage() {
  const { slug } = useParams()
  const Cmp = slug ? FULL_DOC_BY_SLUG[slug] : null
  if (Cmp) return <Cmp />
  return <GenericComponentDoc slug={slug} />
}
