import DocSection, { DocCallout, DocCode, DocList, DocParagraph, DocStrong, DocSubsection } from '../../../LayoutComponents/DocSection'
import DocTable from '../../../LayoutComponents/DocTable'
import DosDontCards from '../../../LayoutComponents/DosDontCards'
import {
  AVATAR_GROUP_PROPS_TABLE_ROWS,
  AVATAR_GROUP_SIZE_TABLE_ROWS,
  AVATAR_GROUP_STACKING_TABLE_ROWS,
  AVATAR_GROUP_STATE_TABLE_ROWS,
} from '../../../data/avatarGroupDocData'

const SIZE_COLUMNS = [
  { key: 'size', label: 'Size', mono: true },
  { key: 'useCase', label: 'Use case' },
]

const STATE_COLUMNS = [
  { key: 'state', label: 'State', mono: true },
  { key: 'behavior', label: 'Behavior' },
]

const STACKING_COLUMNS = [
  { key: 'size', label: 'Avatar size', mono: true },
  { key: 'overlap', label: 'Overlap', mono: true },
]

const PROPS_COLUMNS = [
  { key: 'prop', label: 'Prop', mono: true },
  { key: 'type', label: 'Type', mono: true },
  { key: 'default', label: 'Default', mono: true },
  { key: 'appliesTo', label: 'Applies to' },
  { key: 'desc', label: 'Description' },
]

/** Full Avatar Group documentation — rendered only on the Overview tab. */
export default function AvatarGroupOverview() {
  return (
    <div className="space-y-12">
      <DocSection id="avatar-group-when-to-use" title="When to use">
        <DocParagraph>Use Avatar Group when you need to:</DocParagraph>
        <DocList
          items={[
            'Represent multiple people or entities',
            'Show shared ownership or responsibility',
            'Display collaborators or contributors',
            'Show reviewers or approvers',
            'Represent participants in workflows',
            'Save horizontal space while preserving recognition',
          ]}
        />
        <DocSubsection title="Common use cases">
          <DocList
            items={[
              'Assigned users',
              'Team ownership',
              'Contributors',
              'Watchers',
              'Reviewers',
              'Approvers',
              'Collaborators',
              'Discussion participants',
            ]}
          />
        </DocSubsection>
      </DocSection>

      <DocSection id="avatar-group-when-not-to-use" title="When not to use">
        <DocParagraph>Avoid Avatar Group when:</DocParagraph>
        <DocList
          items={[
            'Every identity must remain fully visible',
            'User names are more important than recognition',
            'Space is sufficient for a full user list',
            'The number of users becomes too large to meaningfully preview',
          ]}
        />
      </DocSection>

      <DocSection id="avatar-group-anatomy" title="Anatomy">
        <DocParagraph>Avatar Group consists of:</DocParagraph>

        <DocSubsection title="1. Avatar stack">
          <DocParagraph>Displays visible avatars in a compact horizontal arrangement.</DocParagraph>
          <DocParagraph>
            <DocStrong>Supports:</DocStrong>
          </DocParagraph>
          <DocList
            items={[
              'Image avatars',
              'Initials avatars',
              'Icon avatars',
              'Logo avatars',
              'o9logo',
              'NovAI identity',
            ]}
          />
        </DocSubsection>

        <DocSubsection title="2. Overflow avatar (+N)">
          <DocParagraph>
            When the number of users exceeds the visible limit, remaining users collapse into an overflow avatar.
          </DocParagraph>
          <DocParagraph>
            <DocStrong>Example:</DocStrong> Avatar Avatar Avatar Avatar <DocCode>+14</DocCode>
          </DocParagraph>
          <DocParagraph>
            The overflow avatar communicates hidden participant count while keeping the layout compact.
          </DocParagraph>
        </DocSubsection>

        <DocSubsection title="3. Tooltip">
          <DocParagraph>Tooltip provides contextual information for:</DocParagraph>
          <DocList items={['Individual avatars', 'Overflow avatar (+N)']} />
        </DocSubsection>

        <DocSubsection title="4. Overflow action">
          <DocParagraph>
            Selecting or activating the overflow avatar (<DocCode>+N</DocCode>) reveals hidden users via{' '}
            <DocCode>overflowAction</DocCode>.
          </DocParagraph>
          <DocParagraph>
            <DocStrong>Supported patterns:</DocStrong> <DocCode>actionMenu</DocCode>, <DocCode>popover</DocCode>,{' '}
            <DocCode>tooltip</DocCode>
          </DocParagraph>
          <DocParagraph>
            <DocStrong>Recommended:</DocStrong> <DocCode>actionMenu</DocCode> — lists hidden participants with avatar,
            primary label, and optional secondary label. Use <DocCode>popover</DocCode> for richer content; use{' '}
            <DocCode>tooltip</DocCode> for count-only or short name previews without opening a menu.
          </DocParagraph>
        </DocSubsection>
      </DocSection>

      <DocSection id="avatar-group-behavior" title="Behavior" className="space-y-8">
        <DocSubsection title="Visible avatar logic">
          <DocParagraph>Avatar Group displays users up to the configured visible limit.</DocParagraph>
          <DocParagraph>
            <DocStrong>Examples:</DocStrong>
          </DocParagraph>
          <DocList
            ordered={false}
            items={[
              <>
                <DocCode>maxVisible = 5</DocCode>, 2 users → two avatars
              </>,
              <>
                <DocCode>maxVisible = 5</DocCode>, 4 users → four avatars
              </>,
              <>
                <DocCode>maxVisible = 5</DocCode>, 8 users → five avatars + <DocCode>+3</DocCode>
              </>,
              <>
                <DocCode>maxVisible = 5</DocCode>, 19 users → five avatars + <DocCode>+14</DocCode>
              </>,
            ]}
          />
        </DocSubsection>

        <DocSubsection title="Overflow logic">
          <DocParagraph>
            When <DocCode>avatars.length &gt; maxVisible</DocCode>, the remaining users collapse into <DocCode>+N</DocCode>.
          </DocParagraph>
          <DocParagraph>
            <DocStrong>Example:</DocStrong>
          </DocParagraph>
          <DocList
            ordered={false}
            items={[
              <>
                <DocCode>avatars = 12</DocCode>, <DocCode>maxVisible = 5</DocCode>
              </>,
              <>Result: five avatars + <DocCode>+7</DocCode></>,
            ]}
          />
          <DocParagraph>The overflow avatar behaves as an interactive trigger.</DocParagraph>
        </DocSubsection>
      </DocSection>

      <DocSection id="avatar-group-tooltip" title="Tooltip behavior" className="space-y-8">
        <DocSubsection title="Individual avatar tooltip">
          <DocParagraph>Hovering or focusing an avatar displays contextual information.</DocParagraph>
          <DocParagraph>
            <DocStrong>Primary label</DocStrong> — used for name, identity, or user label.
          </DocParagraph>
          <DocParagraph>
            <DocStrong>Example:</DocStrong> John Taylor
          </DocParagraph>
          <DocParagraph>
            <DocStrong>Secondary label (optional)</DocStrong> — used for role, department, email, status, or team.
          </DocParagraph>
          <DocParagraph>
            <DocStrong>Example:</DocStrong>
          </DocParagraph>
          <DocList
            ordered={false}
            items={[
              'John Taylor',
              'Senior Planner',
            ]}
          />
          <DocParagraph>Tooltip should appear on hover and focus for keyboard accessibility.</DocParagraph>
        </DocSubsection>

        <DocSubsection title="Overflow tooltip (+N)">
          <DocParagraph>
            <DocStrong>Simple example:</DocStrong> 14 additional collaborators
          </DocParagraph>
          <DocParagraph>
            <DocStrong>Detailed example:</DocStrong>
          </DocParagraph>
          <DocList
            ordered={false}
            items={['John Taylor', 'Sarah Williams', 'Alex Chen', '+11 more']}
          />
          <DocCallout>Use detailed tooltip only when meaningful.</DocCallout>
        </DocSubsection>
      </DocSection>

      <DocSection id="avatar-group-overflow" title="Overflow interaction">
        <DocParagraph>
          The overflow avatar (<DocCode>+N</DocCode>) supports interaction. When selected, <DocCode>state = active</DocCode>{' '}
          and Avatar Group triggers <DocCode>overflowAction</DocCode> to reveal hidden users.
        </DocParagraph>
        <DocParagraph>
          <DocStrong>Recommended interaction:</DocStrong> <DocCode>overflowAction = actionMenu</DocCode>
        </DocParagraph>
        <DocParagraph>
          <DocStrong>Example:</DocStrong> <DocCode>+14</DocCode> opens an action menu listing hidden users with avatar,
          primary label, and optional secondary label (role, title). Each item may include avatar, primary label, and
          secondary label; a trailing <DocCode>+11 more</DocCode> row can summarize the remainder.
        </DocParagraph>
      </DocSection>

      <DocSection id="avatar-group-states" title="States">
        <DocParagraph>The overflow avatar supports interaction states.</DocParagraph>
        <DocTable columns={STATE_COLUMNS} rows={AVATAR_GROUP_STATE_TABLE_ROWS} highlightFirstColumnIdentifier />
      </DocSection>

      <DocSection id="avatar-group-sizes" title="Sizes">
        <DocParagraph>Avatar Group follows Avatar sizing tokens. All avatars inside the group should use a consistent size.</DocParagraph>
        <DocTable columns={SIZE_COLUMNS} rows={AVATAR_GROUP_SIZE_TABLE_ROWS} highlightFirstColumnIdentifier />
      </DocSection>

      <DocSection id="avatar-group-stacking" title="Stacking guidelines">
        <DocParagraph>
          Avatars stack left-to-right with a fixed negative horizontal offset so each face remains recognizable without
          widening the row. Apply the overlap for the group&apos;s <DocCode>size</DocCode> to every avatar after the first
          (for example, <DocCode>margin-inline-start: -6px</DocCode> when <DocCode>size="md"</DocCode>). The overflow{' '}
          <DocCode>+N</DocCode> avatar uses the same offset so the rhythm stays even.
        </DocParagraph>
        <DocTable columns={STACKING_COLUMNS} rows={AVATAR_GROUP_STACKING_TABLE_ROWS} highlightFirstColumnIdentifier />
        <DocParagraph>
          <DocStrong>Guidelines:</DocStrong>
        </DocParagraph>
        <DocList
          items={[
            'Use the overlap token that matches the group size — do not mix overlap values in one stack',
            'Preserve visual recognition — enough of each avatar should remain visible to identify the person or entity',
            'Avoid overlap tighter than the table values — denser stacks obscure faces and status badges',
            'Maintain clickability — overlap must not block pointer targets when avatars are interactive',
            'Keep z-order consistent (typically increasing left-to-right) so the most relevant member is not fully hidden',
          ]}
        />
      </DocSection>

      <DocSection id="avatar-group-accessibility" title="Accessibility">
        <DocParagraph>Avatar Group should:</DocParagraph>
        <DocList
          items={[
            'Support keyboard focus',
            'Expose tooltip content to screen readers',
            'Maintain accessible naming',
            'Preserve focus visibility',
            'Return focus to the trigger when overflow closes',
          ]}
        />
        <DocParagraph>
          The overflow avatar should include <DocCode>aria-label</DocCode> and <DocCode>title</DocCode>. Example:{' '}
          <DocCode>14 additional collaborators</DocCode>.
        </DocParagraph>
        <DocParagraph>
          When overflow opens, focus should move into the action menu or popover and return to the trigger when dismissed.
          Tooltip content must be available to keyboard users on focus, not hover only.
        </DocParagraph>
      </DocSection>

      <DocSection id="avatar-group-props" title="API props">
        <DocParagraph>Complete prop contract for Avatar Group (React and JS APIs share this surface).</DocParagraph>
        <DocTable columns={PROPS_COLUMNS} rows={AVATAR_GROUP_PROPS_TABLE_ROWS} highlightFirstColumnIdentifier />
      </DocSection>

      <DocSection id="avatar-group-best-practices" title="Best practices">
        <DosDontCards
          doItems={[
            'Keep visible avatars between 3–5 for dense enterprise layouts',
            'Use tooltips for identity clarity',
            'Keep avatar sizes consistent',
            'Use overflow for scalability',
            'Show most relevant users first',
          ]}
          dontItems={[
            'Displaying too many visible avatars',
            'Excessive overlap',
            'Hiding critical participants inside overflow',
            'Using Avatar Group without tooltip support',
            'Mixing avatar sizes within the same group',
          ]}
        />
      </DocSection>
    </div>
  )
}
