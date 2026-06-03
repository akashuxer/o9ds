import PageHeader from '../../LayoutComponents/PageHeader'
import PageWithToc from '../../LayoutComponents/PageWithToc'
import DocSection from '../../LayoutComponents/DocSection'
import CounterAnimationCodePen from '../../LayoutComponents/CounterAnimationCodePen'

const MOTION_SECTIONS = [{ id: 'motion-counter-animation', label: 'Direction-based counter animation' }]

const motionIcon = (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
)

export default function Motion() {
  return (
    <PageWithToc sections={MOTION_SECTIONS}>
      <div className="space-y-8">
        <PageHeader
          title="Motion & Animation"
          icon={motionIcon}
          description="Duration, easing, and motion patterns for feedback, transitions, and reduced-motion respect across Arvo components."
        />

        <div className="space-y-12">
          <DocSection id="motion-counter-animation" title="Direction-based counter animation">
            <CounterAnimationCodePen />
          </DocSection>
        </div>
      </div>
    </PageWithToc>
  )
}
