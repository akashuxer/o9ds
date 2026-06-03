import DocSection, { DocCallout, DocCode, DocParagraph, DocStrong, DocSubsection } from '../../../LayoutComponents/DocSection'
import DocTable from '../../../LayoutComponents/DocTable'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DosDontCards from '../../../LayoutComponents/DosDontCards'
import { BADGE_PRIORITY_LABEL_ROWS, BADGE_STATUS_TERMINOLOGY_ROWS } from '../../../data/badgeDocData'

const PRIORITY_COLUMNS = [
  { key: 'type', label: 'Type' },
  { key: 'label', label: 'Recommended label', mono: true },
]

const STATUS_COLUMNS = [
  { key: 'state', label: 'State' },
  { key: 'label', label: 'Recommended label' },
]

/** Badge UX Copy tab — writing guidelines for labels and counters. */
export default function BadgeUxCopy() {
  return (
    <div className="space-y-12">
      <DocSection id="badge-ux-writing" title="UX writing guidelines">
        <DocParagraph>
          Badge content should remain concise, scannable, and meaningful. Since badges are used in dense enterprise
          interfaces, users should understand meaning within a quick glance.
        </DocParagraph>
      </DocSection>

      <DocSection id="badge-writing-principles" title="Writing principles" className="space-y-8">
        <DocSubsection title="Keep badge text short">
          <DocParagraph>Badges should ideally remain:</DocParagraph>
          <CodeBlock code="1–3 words" label="Length" language="text" />
          <DocParagraph>Avoid long descriptions.</DocParagraph>
          <DocParagraph>
            <DocStrong>Good:</DocStrong>
          </DocParagraph>
          <CodeBlock
            code={`Critical
Blocked
Draft
In Review
Stable
Low Risk`}
            label="Examples"
            language="text"
          />
          <DocParagraph>
            <DocStrong>Avoid:</DocStrong>
          </DocParagraph>
          <CodeBlock
            code={`This process is currently blocked
Needs immediate attention from admin
Waiting for manager review`}
            label="Examples"
            language="text"
          />
        </DocSubsection>

        <DocSubsection title="Use Title Case">
          <DocParagraph>Badge labels should follow:</DocParagraph>
          <CodeBlock code="Title Case" label="Casing" language="text" />
          <DocParagraph>
            <DocStrong>Good:</DocStrong>
          </DocParagraph>
          <CodeBlock
            code={`In Review
High Priority
Low Risk
Access Denied
Not Available`}
            label="Examples"
            language="text"
          />
          <DocParagraph>
            <DocStrong>Avoid:</DocStrong>
          </DocParagraph>
          <CodeBlock
            code={`IN REVIEW
in review
In review`}
            label="Examples"
            language="text"
          />
        </DocSubsection>

        <DocSubsection title="Prioritize meaning over technical language">
          <DocParagraph>Prefer human-readable labels.</DocParagraph>
          <DocParagraph>
            <DocStrong>Good:</DocStrong>
          </DocParagraph>
          <CodeBlock
            code={`Blocked
Failed
Connected
Pending
Draft`}
            label="Examples"
            language="text"
          />
          <DocParagraph>
            <DocStrong>Avoid:</DocStrong>
          </DocParagraph>
          <CodeBlock
            code={`Error 500
Auth Failure
Sync Exception
Pipeline Disabled`}
            label="Examples"
            language="text"
          />
          <DocCallout>
            Use supporting UI (tooltip, popover, details panel) for technical explanation.
          </DocCallout>
        </DocSubsection>

        <DocSubsection title="Prefer short semantic labels">
          <DocParagraph>Use clear semantic meaning instead of long descriptions.</DocParagraph>
          <DocParagraph>
            <DocStrong>Good:</DocStrong>
          </DocParagraph>
          <CodeBlock
            code={`Critical
High
Medium
Low
Unknown
Stable
Draft`}
            label="Examples"
            language="text"
          />
          <DocParagraph>
            <DocStrong>Avoid:</DocStrong>
          </DocParagraph>
          <CodeBlock
            code={`High Priority Issue
Critical Risk Detected
Unknown Current State`}
            label="Examples"
            language="text"
          />
        </DocSubsection>

        <DocSubsection title="Keep terminology consistent">
          <DocParagraph>Use the same wording across the platform.</DocParagraph>
          <DocParagraph>
            <DocStrong>Example:</DocStrong> If using:
          </DocParagraph>
          <CodeBlock code="Blocked" label="Example" language="text" />
          <DocParagraph>avoid mixing with:</DocParagraph>
          <CodeBlock
            code={`Restricted
Disabled
Unavailable`}
            label="Examples"
            language="text"
          />
          <DocParagraph>unless meaning intentionally differs.</DocParagraph>
        </DocSubsection>
      </DocSection>

      <DocSection id="badge-counter-writing" title="Counter writing guidelines">
        <DocParagraph>Counters should prioritize readability and scanability.</DocParagraph>
        <DocParagraph>
          <DocStrong>Good:</DocStrong>
        </DocParagraph>
        <CodeBlock
          code={`99+
2/100
50K/1M
4.5K`}
          label="Examples"
          language="text"
        />
        <DocParagraph>Avoid excessive precision in compact UI:</DocParagraph>
        <DocParagraph>
          <DocStrong>Avoid:</DocStrong>
        </DocParagraph>
        <CodeBlock
          code={`49,923
523,194`}
          label="Examples"
          language="text"
        />
        <DocParagraph>
          <DocStrong>Prefer:</DocStrong>
        </DocParagraph>
        <CodeBlock
          code={`50K
523K`}
          label="Examples"
          language="text"
        />
        <DocParagraph>unless precision matters.</DocParagraph>
        <DocParagraph>
          Maps to <DocCode>counterMode</DocCode> (<DocCode>single</DocCode> or <DocCode>ratio</DocCode>),{' '}
          <DocCode>overflowCount</DocCode> (default 99, displays as <DocCode>99+</DocCode>), and abbreviated thousands
          (K/M) for large values.
        </DocParagraph>
      </DocSection>

      <DocSection id="badge-priority-labels" title="Priority labels">
        <DocParagraph>Recommended terminology — keep labels short and scannable.</DocParagraph>
        <DocTable columns={PRIORITY_COLUMNS} rows={BADGE_PRIORITY_LABEL_ROWS} highlightFirstColumnIdentifier />
      </DocSection>

      <DocSection id="badge-status-terminology" title="Status terminology">
        <DocParagraph>
          Recommended semantic wording — choose labels based on user understanding rather than internal system
          terminology.
        </DocParagraph>
        <DocTable columns={STATUS_COLUMNS} rows={BADGE_STATUS_TERMINOLOGY_ROWS} />
      </DocSection>

      <DocSection id="badge-writing-dos-donts" title="Do & Avoid">
        <DosDontCards
          doItems={['Critical', 'Blocked', 'Draft', 'Stable', 'In Review', '50K/1M', '99+']}
          dontItems={[
            'CRITICAL',
            'critical issue detected',
            'This request is blocked',
            'Waiting for manual intervention',
            '49,923/999,231',
          ]}
        />
        <DocParagraph>
          Badge content should remain compact, readable, and scannable in dense enterprise layouts.
        </DocParagraph>
      </DocSection>
    </div>
  )
}
