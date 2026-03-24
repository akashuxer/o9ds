import { useParams } from 'react-router-dom'
import Button from './Button'
import Cards from './Cards'
import GenericComponentDoc from './GenericComponentDoc'

/** Full documentation implementations (all other slugs use GenericComponentDoc). */
const FULL_DOC_BY_SLUG = {
  button: Button,
  cards: Cards,
}

export default function ComponentDocPage() {
  const { slug } = useParams()
  const Cmp = slug ? FULL_DOC_BY_SLUG[slug] : null
  if (Cmp) return <Cmp />
  return <GenericComponentDoc slug={slug} />
}
