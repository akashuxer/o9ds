import '../../styles/motion-playground.css'
import DocSection, { DocParagraph } from '../../LayoutComponents/DocSection'
import { MOTION_PLAYGROUND_EXAMPLES } from '../../data/motionPlayground'
import MotionPlaygroundExample from './motionPlayground/MotionPlaygroundExample'
import { MOTION_PLAYGROUND_DEMOS } from './motionPlayground/MotionPlaygroundDemos'

/** Motion & Animation — Playground tab (live token demos). */
export default function MotionPlaygroundTab() {
  return (
    <div className="space-y-12 max-w-4xl">
      <DocSection id="motion-playground-intro" title="Animation Playground">
        <DocParagraph>
          See how Arvo motion tokens behave in real interactions. Each example includes a live preview, the semantic
          token, and expandable code. Token definitions live on the <strong>Tokens</strong> tab.
        </DocParagraph>
        <DocParagraph>
          Use this when designing a new interaction, reviewing motion with developers, or checking whether a token feels
          right in context — not for one-off animations.
        </DocParagraph>
      </DocSection>

      {MOTION_PLAYGROUND_EXAMPLES.map((example) => {
        const Demo = MOTION_PLAYGROUND_DEMOS[example.id]
        return (
          <MotionPlaygroundExample key={example.id} {...example}>
            {Demo ? <Demo /> : null}
          </MotionPlaygroundExample>
        )
      })}
    </div>
  )
}
