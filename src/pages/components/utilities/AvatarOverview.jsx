import DocSection, { DocCallout, DocCode, DocList, DocParagraph, DocStrong, DocSubsection } from '../../../LayoutComponents/DocSection'
import DocTable from '../../../LayoutComponents/DocTable'
import {
  AVATAR_SIZE_TABLE_ROWS,
  AVATAR_APPEARANCE_TABLE_ROWS,
  AVATAR_PROPS_TABLE_ROWS,
  AVATAR_INITIALS_TABLE_ROWS,
} from '../../../data/avatarDocData'

const SIZE_COLUMNS = [
  { key: 'size', label: 'Size', mono: true },
  { key: 'useWhen', label: 'Use when' },
]

const APPEARANCE_COLUMNS = [
  { key: 'appearance', label: 'Appearance', mono: true },
  { key: 'description', label: 'Description' },
]

const PROPS_COLUMNS = [
  { key: 'prop', label: 'Prop', mono: true },
  { key: 'type', label: 'Type', mono: true },
  { key: 'default', label: 'Default', mono: true },
  { key: 'appliesTo', label: 'Applies to' },
  { key: 'desc', label: 'Description' },
]

const INITIALS_COLUMNS = [
  { key: 'nameFormat', label: 'Name format', mono: true },
  { key: 'example', label: 'Example' },
  { key: 'displayedInitials', label: 'Displayed initials', mono: true },
  { key: 'fallback', label: 'Fallback', mono: true },
  { key: 'notes', label: 'Notes' },
]

/** Full Avatar documentation — rendered only on the Overview tab. */
export default function AvatarOverview() {
  return (
    <div className="space-y-12">
      <DocSection id="avatar-when-to-use" title="When to use">
        <DocParagraph>Use Avatar when you need to:</DocParagraph>
        <DocList
          items={[
            'Represent a user, teammate, or owner',
            'Show profile identity or presence',
            'Display AI or assistant identity',
            'Represent connectors, integrations, or external platforms',
            'Show status or availability',
            'Provide quick access to profile actions or contextual interactions',
            'Create recognizable visual anchors in lists, cards, tables, workflows, or dashboards',
          ]}
        />
      </DocSection>

      <DocSection id="avatar-when-not-to-use" title="When not to use">
        <DocParagraph>Avoid Avatar when:</DocParagraph>
        <DocList
          items={[
            'Identity is not important to the workflow',
            'A simple icon is sufficient',
            'Space is extremely constrained and identity is secondary',
            'Multiple decorative avatars create unnecessary visual noise',
          ]}
        />
      </DocSection>

      <DocSection id="avatar-anatomy" title="Anatomy">
        <DocParagraph>An Avatar can contain one or more of the following elements:</DocParagraph>
        <DocList
          ordered={false}
          items={[
            <>
              <DocStrong>Container</DocStrong> — The visual surface holding the avatar content.
            </>,
            <>
              <DocStrong>Visual content</DocStrong> — The primary identity representation: Image, Initials, Icon, Logo, o9 Logo,
              or NovAI identity.
            </>,
            <>
              <DocStrong>Status indicator (optional)</DocStrong> — Displays presence, workflow, or system status when{' '}
              <DocCode>isStatus</DocCode> is enabled.
            </>,
            <>
              <DocStrong>Tooltip (optional)</DocStrong> — Provides accessible naming, context, or interaction meaning.
            </>,
            <>
              <DocStrong>Interaction layer (optional)</DocStrong> — Enables navigation, profile actions, menus, uploads, or
              contextual actions when <DocCode>isInteractive</DocCode> is true.
            </>,
          ]}
        />
      </DocSection>

      <DocSection id="avatar-variants" title="Variants" className="space-y-8">
        <DocParagraph>Avatar supports the following visual variants via the <DocCode>variant</DocCode> prop.</DocParagraph>

        <DocSubsection title="Image">
          <DocParagraph>Displays a user profile image.</DocParagraph>
          <DocParagraph>
            <DocStrong>Use when:</DocStrong>
          </DocParagraph>
          <DocList items={['User photo exists', 'Human identity recognition matters', 'Profile ownership is important']} />
          <DocParagraph>
            <DocStrong>Fallback:</DocStrong> If the image fails or is unavailable, Avatar automatically falls back to initials
            (see <a href="#avatar-initials" className="underline text-violet-600 dark:text-violet-400">Initials fallback logic</a>
            ).
          </DocParagraph>
          <DocParagraph>
            <DocStrong>Examples:</DocStrong> User profiles, comments, assigned owner, team members.
          </DocParagraph>
        </DocSubsection>

        <DocSubsection title="Initials">
          <DocParagraph>Displays generated initials from a <DocCode>name</DocCode> or email.</DocParagraph>
          <DocParagraph>
            <DocStrong>Use when:</DocStrong>
          </DocParagraph>
          <DocList
            items={[
              'Profile image is unavailable',
              'Human identity still matters',
              'Space is constrained',
            ]}
          />
          <DocParagraph>
            <DocStrong>Supports:</DocStrong> Single names, multi-word names, email fallback, non-Latin scripts, and enterprise
            naming edge cases (full rules in the initials table below).
          </DocParagraph>
          <DocParagraph>
            <DocStrong>Examples:</DocStrong> User assignment, collaborators, table ownership columns.
          </DocParagraph>
        </DocSubsection>

        <DocSubsection title="Icon">
          <DocParagraph>Displays an o9con icon inside an avatar container.</DocParagraph>
          <DocParagraph>
            <DocStrong>Use when:</DocStrong>
          </DocParagraph>
          <DocList
            items={[
              'Representing system entities',
              'Functional ownership',
              'Workflow identity',
              'Configuration modules',
            ]}
          />
          <DocParagraph>
            <DocStrong>Examples:</DocStrong> Workspace, button, model, environment, settings.
          </DocParagraph>
          <DocParagraph>
            <DocStrong>Supports:</DocStrong> Default styling, semantic styling, and custom dynamic styling via{' '}
            <DocCode>colorMode</DocCode> and <DocCode>customColor</DocCode>.
          </DocParagraph>
        </DocSubsection>

        <DocSubsection title="Logo">
          <DocParagraph>Displays connector, partner, or external platform logos.</DocParagraph>
          <DocParagraph>
            <DocStrong>Use when:</DocStrong>
          </DocParagraph>
          <DocList
            items={[
              'Showing integrations',
              'Representing external systems',
              'Displaying connector identity',
            ]}
          />
          <DocParagraph>
            <DocStrong>Examples:</DocStrong> Slack, Google, SAP, Salesforce, Jira.
          </DocParagraph>
        </DocSubsection>

        <DocSubsection title="o9logo">
          <DocParagraph>Displays the o9 brand identity.</DocParagraph>
          <DocParagraph>
            <DocStrong>Use when:</DocStrong>
          </DocParagraph>
          <DocList items={['Representing o9-owned entities', 'Internal platform identity']} />
        </DocSubsection>

        <DocSubsection title="NovAI">
          <DocParagraph>Displays NovAI identity.</DocParagraph>
          <DocParagraph>
            <DocStrong>Use when:</DocStrong>
          </DocParagraph>
          <DocList
            items={[
              'Showing AI-generated content',
              'Assistant ownership',
              'AI workflows or suggestions',
            ]}
          />
        </DocSubsection>
      </DocSection>

      <DocSection id="avatar-sizes" title="Sizes">
        <DocParagraph>
          Size tokens keep identity legible from dense tables to profile headers. Use one size per region — do not mix{' '}
          <DocCode>sm</DocCode> and <DocCode>xl</DocCode> in the same list without a documented reason.
        </DocParagraph>
        <DocTable columns={SIZE_COLUMNS} rows={AVATAR_SIZE_TABLE_ROWS} highlightFirstColumnIdentifier />
      </DocSection>

      <DocSection id="avatar-appearance" title="Appearance & color">
        <DocParagraph>
          <DocCode>appearance</DocCode> applies to <DocCode>icon</DocCode>, <DocCode>initials</DocCode>, and{' '}
          <DocCode>logo</DocCode> variants. Fixed visuals (<DocCode>image</DocCode>, <DocCode>o9logo</DocCode>,{' '}
          <DocCode>novai</DocCode>) use <DocCode>appearance="none"</DocCode>.
        </DocParagraph>
        <DocTable columns={APPEARANCE_COLUMNS} rows={AVATAR_APPEARANCE_TABLE_ROWS} highlightFirstColumnIdentifier />
        <DocParagraph>
          <DocStrong>colorMode</DocStrong> — <DocCode>default</DocCode> uses design-system tokens;{' '}
          <DocCode>semantic</DocCode> maps <DocCode>semanticType</DocCode> (positive, negative, warning, info);{' '}
          <DocCode>custom</DocCode> assigns a utility family via <DocCode>customColor</DocCode> (purple, pink, glacier, amber,
          greenish, bluish). The component resolves filled, subtle, or outline surface, border, text, and icon tokens from{' '}
          <DocCode>appearance</DocCode> and the selected mode.
        </DocParagraph>
      </DocSection>

      <DocSection id="avatar-status" title="Status indicator">
        <DocParagraph>
          Set <DocCode>isStatus</DocCode> to show a semantic badge on the avatar edge. <DocCode>statusType</DocCode> drives icon
          and color (availability, progress, severity, and feedback semantics). <DocCode>statusPosition</DocCode> is{' '}
          <DocCode>bottom-right</DocCode> (default) or <DocCode>top-right</DocCode>.
        </DocParagraph>
        <DocCallout>
          Supported <DocCode>statusType</DocCode> values include: available, notAvailable, partialComplete, busy, failed,
          blocked, attention, processing, paused, critical, high, medium, low, unknown, positive, negative, warning, and info.
        </DocCallout>
        <DocParagraph>
          When <DocCode>isInteractive</DocCode> is true, <DocCode>actionType</DocCode> on <DocCode>state="active"</DocCode> can
          open a tooltip, popover, dropdown, side panel, drawer, window, link, or file upload flow.
        </DocParagraph>
      </DocSection>

      <DocSection id="avatar-props" title="API props">
        <DocParagraph>Complete prop contract for Avatar (React and JS APIs share this surface).</DocParagraph>
        <DocTable columns={PROPS_COLUMNS} rows={AVATAR_PROPS_TABLE_ROWS} highlightFirstColumnIdentifier />
      </DocSection>

      <DocSection id="avatar-initials" title="Initials fallback logic">
        <DocParagraph>
          Initials are used as a fallback when the <DocCode>src</DocCode> prop is not provided or when the image fails to load.
          They are also the primary content for <DocCode>variant="initials"</DocCode>. Letters are generated from{' '}
          <DocCode>name</DocCode> when available; otherwise from email. Output is uppercase. When no valid initials can be
          produced, the avatar falls back to the <DocCode>icon</DocCode> variant.
        </DocParagraph>
        <DocCallout>
          Honorifics (Mr, Mrs, Ms, Dr, Prof, Sir, Madam, Shri, Smt, Mx), suffixes (Jr, Sr, II–IV, PhD, MD, Esq), and surname
          particles (van, von, de, da, der, di, la, of, the, and) are stripped before computing initials.
        </DocCallout>
        <DocTable columns={INITIALS_COLUMNS} rows={AVATAR_INITIALS_TABLE_ROWS} highlightFirstColumnIdentifier />
      </DocSection>
    </div>
  )
}
