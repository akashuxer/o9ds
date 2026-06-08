import DocSection, { DocParagraph } from '../../LayoutComponents/DocSection'
import DocTable from '../../LayoutComponents/DocTable'
import {
  MOTION_DURATION_ROWS,
  MOTION_EASING_ROWS,
  MOTION_SEMANTIC_SECTIONS,
} from '../../data/motionTokens'

const TOKEN_COLUMNS = [
  { key: 'token', label: 'Token', mono: true },
  { key: 'value', label: 'Value', mono: true },
]

/** Motion & Animation — Tokens tab. */
export default function MotionTokensTab() {
  return (
    <div className="space-y-12">
      <DocSection id="motion-core-durations" title="Core durations">
        <DocParagraph>Base duration scale for transitions and animations across Arvo components.</DocParagraph>
        <DocTable columns={TOKEN_COLUMNS} rows={MOTION_DURATION_ROWS} highlightFirstColumnIdentifier />
      </DocSection>

      <DocSection id="motion-core-easing" title="Core easing">
        <DocParagraph>Standard easing curves referenced by semantic motion tokens.</DocParagraph>
        <DocTable columns={TOKEN_COLUMNS} rows={MOTION_EASING_ROWS} highlightFirstColumnIdentifier />
      </DocSection>

      {MOTION_SEMANTIC_SECTIONS.map(({ id, title, description, rows }) => (
        <DocSection key={id} id={id} title={title}>
          {description && <DocParagraph>{description}</DocParagraph>}
          <DocTable columns={TOKEN_COLUMNS} rows={rows} highlightFirstColumnIdentifier />
        </DocSection>
      ))}
    </div>
  )
}
