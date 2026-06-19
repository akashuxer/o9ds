import { Link } from 'react-router-dom'
import { docPagePath, PATH_MOTION } from '../../../data/docPaths'

/** Link to another Motion page tab, optionally with a hash anchor. */
export default function MotionTabLink({ tab, hash, children, className = '' }) {
  const to = `${docPagePath(PATH_MOTION, tab)}${hash ? `#${hash}` : ''}`
  return (
    <Link
      to={to}
      className={`motion-tab-link ${className}`.trim()}
    >
      {children}
    </Link>
  )
}
