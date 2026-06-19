import DocSection, { DocParagraph } from '../../LayoutComponents/DocSection'
import DocTable from '../../LayoutComponents/DocTable'
import MotionDurationStrip from '../../LayoutComponents/MotionDurationStrip'
import MotionEasingStrip from '../../LayoutComponents/MotionEasingStrip'
import {
  MOTION_DURATION_ROWS,
  MOTION_EASING_ROWS,
  MOTION_SEMANTIC_SECTIONS,
  motionTokenClipboard,
} from '../../data/motionTokens'

const TOKEN_COLUMNS = [
  { key: 'token', label: 'Token', mono: true },
  { key: 'value', label: 'Value', mono: true },
]

const CORE_TOKEN_COLUMNS = [
  { key: 'token', label: 'Token', mono: true },
  { key: 'value', label: 'Value', mono: true },
  { key: 'meaning', label: 'Use when' },
]

/** Motion & Animation — Tokens tab. */
export default function MotionTokensTab() {
  return (
    <div className="space-y-12">
      <DocSection id="motion-core-durations" title="Core durations">
        <DocParagraph>
          Base duration scale for transitions and animations across Arvo components. Most interaction motion finishes
          between 120ms and 300ms.
        </DocParagraph>
        <MotionDurationStrip />
        <DocTable
          columns={CORE_TOKEN_COLUMNS}
          rows={MOTION_DURATION_ROWS}
          highlightFirstColumnIdentifier
          rowCopy={motionTokenClipboard}
          rowCopyAlwaysVisible
        />
      </DocSection>

      <DocSection id="motion-core-easing" title="Core easing">
        <DocParagraph>
          Easing curves control acceleration — whether motion eases in, eases out, or both. Semantic motion tokens
          reference one of these curves; pick based on how decisive or gentle the interaction should feel.
        </DocParagraph>
        <MotionEasingStrip />
        <DocTable
          columns={CORE_TOKEN_COLUMNS}
          rows={MOTION_EASING_ROWS}
          highlightFirstColumnIdentifier
          rowCopy={motionTokenClipboard}
          rowCopyAlwaysVisible
        />
      </DocSection>

      {MOTION_SEMANTIC_SECTIONS.map(({ id, title, description, rows }) => (
        <DocSection key={id} id={id} title={title}>
          {description && <DocParagraph>{description}</DocParagraph>}
          <DocTable
            columns={TOKEN_COLUMNS}
            rows={rows}
            highlightFirstColumnIdentifier
            rowCopy={motionTokenClipboard}
            rowCopyAlwaysVisible
          />
        </DocSection>
      ))}
    </div>
  )
}
