import { lazy, Suspense } from 'react'
import '../../styles/motion-gallery.css'
import DocSection from '../../LayoutComponents/DocSection'
import { MOTION_PRINCIPLES } from '../../data/motionOverview'

const MotionPlaygroundTab = lazy(() => import('./MotionPlaygroundTab'))

/** Motion & Animation — Overview tab (principles + live pattern gallery). */
export default function MotionOverviewTab() {
  return (
    <div className="motion-docs space-y-12 max-w-5xl">
      <DocSection id="motion-principles" title="Principles">
        <div className="motion-principles-grid">
          {MOTION_PRINCIPLES.map((principle, index) => (
            <div key={principle.title} className="motion-principle-card">
              <p className="motion-principle-card__title">
                <span className="motion-principle-card__index">{String(index + 1).padStart(2, '0')}</span>
                {principle.title}
              </p>
              <p className="motion-principle-card__body">{principle.body}</p>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection id="motion-playground-patterns" title="Patterns">
        <Suspense fallback={null}>
          <MotionPlaygroundTab />
        </Suspense>
      </DocSection>
    </div>
  )
}
