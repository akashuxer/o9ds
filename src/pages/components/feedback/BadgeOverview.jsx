import DocSection, { DocCallout, DocCode, DocList, DocParagraph, DocStrong, DocSubsection } from '../../../LayoutComponents/DocSection'
import DocTable from '../../../LayoutComponents/DocTable'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DosDontCards from '../../../LayoutComponents/DosDontCards'
import CounterAnimationCodePen from '../../../LayoutComponents/CounterAnimationCodePen'
import {
  BADGE_A11Y_COUNTER_ROWS,
  BADGE_ANATOMY_ROWS,
  BADGE_APPEARANCE_ROWS,
  BADGE_COUNTER_MODE_ROWS,
  BADGE_CUSTOM_COLOR_ROWS,
  BADGE_FORMAT_CLEAN_ROWS,
  BADGE_FORMAT_PRECISE_ROWS,
  BADGE_INTERACTIVE_ACTION_ROWS,
  BADGE_INTERACTIVE_BEHAVIOR_ROWS,
  BADGE_LOCALE_EXAMPLE_ROWS,
  BADGE_LOCALE_TABLE_ROWS,
  BADGE_OVERFLOW_ROWS,
  BADGE_PROPS_TABLE_ROWS,
  BADGE_RECOMMENDED_SETUP_ROWS,
  BADGE_SEMANTIC_TYPE_ROWS,
  BADGE_SIZE_TABLE_ROWS,
  BADGE_VARIANT_ROWS,
  BADGE_WHEN_NOT_USE_ROWS,
} from '../../../data/badgeDocData'

const PROPS_COLUMNS = [
  { key: 'prop', label: 'Prop', mono: true },
  { key: 'type', label: 'Type', mono: true },
  { key: 'default', label: 'Default', mono: true },
  { key: 'appliesTo', label: 'Applies to' },
  { key: 'desc', label: 'Description' },
]

const SIZE_COLUMNS = [
  { key: 'size', label: 'Size', mono: true },
  { key: 'useCase', label: 'Recommended use' },
]

const LOCALE_COLUMNS = [
  { key: 'locale', label: 'Country / locale' },
  { key: 'format', label: 'Number format', mono: true },
]

const SEMANTIC_COLUMNS = [
  { key: 'semanticType', label: 'semanticType', mono: true },
  { key: 'useFor', label: 'Use for' },
]

const CUSTOM_COLOR_COLUMNS = [
  { key: 'color', label: 'customColor', mono: true },
  { key: 'useFor', label: 'Use for' },
]

const APPEARANCE_COLUMNS = [
  { key: 'appearance', label: 'Appearance', mono: true },
  { key: 'useWhen', label: 'Use when' },
  { key: 'bestFor', label: 'Best for' },
]

const VARIANT_COLUMNS = [
  { key: 'variant', label: 'variant', mono: true },
  { key: 'purpose', label: 'Purpose' },
  { key: 'bestFor', label: 'Best for' },
  { key: 'examples', label: 'Examples', mono: true },
]

const COUNTER_MODE_COLUMNS = [
  { key: 'counterMode', label: 'counterMode', mono: true },
  { key: 'description', label: 'Description' },
  { key: 'bestFor', label: 'Best for' },
  { key: 'overflow', label: 'Overflow' },
]

const INPUT_OUTPUT_COLUMNS = [
  { key: 'input', label: 'Input', mono: true },
  { key: 'output', label: 'Output', mono: true },
]

const OVERFLOW_COLUMNS = [
  { key: 'count', label: 'count', mono: true },
  { key: 'display', label: 'Display', mono: true },
]

const SETUP_COLUMNS = [
  { key: 'setup', label: 'Configuration', mono: true },
  { key: 'output', label: 'Output', mono: true },
]

const BEHAVIOR_COLUMNS = [
  { key: 'guideline', label: 'Guideline' },
  { key: 'behavior', label: 'Behavior' },
]

const ACTION_COLUMNS = [
  { key: 'action', label: 'Action' },
  { key: 'result', label: 'Result' },
]

const A11Y_COUNTER_COLUMNS = [
  { key: 'visible', label: 'Visible', mono: true },
  { key: 'screenReader', label: 'Screen reader' },
]

const ANATOMY_COLUMNS = [
  { key: 'element', label: 'Element' },
  { key: 'description', label: 'Description' },
]

const WHEN_NOT_COLUMNS = [
  { key: 'scenario', label: 'Avoid when' },
  { key: 'alternative', label: 'Instead use' },
]

const LOCALE_EXAMPLE_COLUMNS = [
  { key: 'locale', label: 'Locale' },
  { key: 'input', label: 'Input', mono: true },
  { key: 'output', label: 'Output', mono: true },
]

/** Badge documentation — Overview tab. */
export default function BadgeOverview() {
  return (
    <div className="space-y-12">
      <DocSection id="badge-when-to-use" title="When to use">
        <DocParagraph>Use Badge when you need to:</DocParagraph>
        <DocList
          items={[
            'Display semantic labels',
            'Show metadata or categorization',
            'Represent state or priority',
            'Surface notification counts',
            'Show progress or quotas',
            'Display quantities or workloads',
            'Communicate lightweight contextual information',
          ]}
        />
        <DocParagraph>
          <DocStrong>Examples:</DocStrong>
        </DocParagraph>
        <CodeBlock
          code={`Critical
Blocked
Draft
Stable
99+
2/100
50K/1M`}
          label="Examples"
          language="text"
        />
      </DocSection>

      <DocSection id="badge-when-not-to-use" title="When not to use">
        <DocParagraph>Avoid Badge when another pattern fits better:</DocParagraph>
        <DocTable columns={WHEN_NOT_COLUMNS} rows={BADGE_WHEN_NOT_USE_ROWS} highlightFirstColumnIdentifier />
      </DocSection>

      <DocSection id="badge-anatomy" title="Anatomy">
        <DocParagraph>A Badge can contain one or more of the following elements.</DocParagraph>
        <DocTable columns={ANATOMY_COLUMNS} rows={BADGE_ANATOMY_ROWS} highlightFirstColumnIdentifier />
        <DocParagraph>
          <DocStrong>Content examples:</DocStrong> Critical, Approved, <DocCode>99+</DocCode>, <DocCode>50K/1M</DocCode>
        </DocParagraph>
      </DocSection>

      <DocSection id="badge-variant" title="Variant">
        <DocParagraph>
          Badge supports two variants via <DocCode>variant</DocCode>: <DocCode>standard</DocCode> and{' '}
          <DocCode>counter</DocCode>.
        </DocParagraph>
        <DocTable columns={VARIANT_COLUMNS} rows={BADGE_VARIANT_ROWS} highlightFirstColumnIdentifier />
      </DocSection>

      <DocSection id="badge-appearance" title="Appearance">
        <DocParagraph>
          Badge supports three visual appearances via <DocCode>appearance</DocCode>: <DocCode>primary</DocCode> (default),{' '}
          <DocCode>outline</DocCode>, and <DocCode>filled</DocCode>.
        </DocParagraph>
        <DocTable columns={APPEARANCE_COLUMNS} rows={BADGE_APPEARANCE_ROWS} highlightFirstColumnIdentifier />
      </DocSection>

      <DocSection id="badge-size" title="Size">
        <DocParagraph>
          Badge supports <DocCode>sm</DocCode>, <DocCode>md</DocCode>, and <DocCode>lg</DocCode>. Use consistent badge
          sizing within the same interface.
        </DocParagraph>
        <DocTable columns={SIZE_COLUMNS} rows={BADGE_SIZE_TABLE_ROWS} highlightFirstColumnIdentifier />
      </DocSection>

      <DocSection id="badge-color-mode" title="Color mode" className="space-y-8">
        <DocParagraph>
          Badge color behavior follows Avatar for consistency. <DocCode>colorMode</DocCode> is{' '}
          <DocCode>semantic</DocCode> (default) or <DocCode>custom</DocCode>.
        </DocParagraph>

        <DocSubsection title="Semantic">
          <DocParagraph>
            Applies semantic meaning automatically when <DocCode>colorMode = semantic</DocCode> via{' '}
            <DocCode>semanticType</DocCode>.
          </DocParagraph>
          <DocTable columns={SEMANTIC_COLUMNS} rows={BADGE_SEMANTIC_TYPE_ROWS} highlightFirstColumnIdentifier />
        </DocSubsection>

        <DocSubsection title="Custom">
          <DocParagraph>
            Controlled color customization when <DocCode>colorMode = custom</DocCode> via <DocCode>customColor</DocCode>.
          </DocParagraph>
          <DocTable columns={CUSTOM_COLOR_COLUMNS} rows={BADGE_CUSTOM_COLOR_ROWS} highlightFirstColumnIdentifier />
        </DocSubsection>
      </DocSection>

      <DocSection id="badge-counter-patterns" title="Counter patterns" className="space-y-8">
        <DocParagraph>
          Counter badges use <DocCode>counterMode</DocCode>: <DocCode>single</DocCode> or <DocCode>ratio</DocCode>.
        </DocParagraph>
        <DocTable columns={COUNTER_MODE_COLUMNS} rows={BADGE_COUNTER_MODE_ROWS} highlightFirstColumnIdentifier />

        <DocSubsection title="Single counter examples">
          <CodeBlock
            code={`8
99
99+
1K
4.5K`}
            label="Examples"
            language="text"
          />
        </DocSubsection>

        <DocSubsection title="Overflow counter">
          <DocParagraph>
            Applies only when <DocCode>variant = counter</DocCode> and <DocCode>counterMode = single</DocCode>. Default{' '}
            <DocCode>overflowCount = 99</DocCode>. When <DocCode>count &gt; overflowCount</DocCode>, display{' '}
            <DocCode>{'{overflowCount}+'}</DocCode>.
          </DocParagraph>
          <DocTable columns={OVERFLOW_COLUMNS} rows={BADGE_OVERFLOW_ROWS} highlightFirstColumnIdentifier />
        </DocSubsection>

        <DocSubsection title="Ratio counter">
          <DocParagraph>
            Used for <DocCode>current / total</DocCode> scenarios — quota tracking, progress, capacity, usage,
            completion.
          </DocParagraph>
          <DocParagraph>
            <DocStrong>Example:</DocStrong> <DocCode>counterMode = ratio</DocCode>, <DocCode>count = 2</DocCode>,{' '}
            <DocCode>total = 100</DocCode> → <DocCode>2/100</DocCode>
          </DocParagraph>
          <CodeBlock
            code={`2/100
2/1K
50K/1M
49,999/1M
45K/50K
1,234/4,234`}
            label="Examples"
            language="text"
          />
          <DocCallout title="Important">
            Do not use overflow counter with ratio mode. Avoid <DocCode>99+/1M</DocCode>. Prefer{' '}
            <DocCode>50K/1M</DocCode>, <DocCode>49,999/1M</DocCode>, or <DocCode>1,234/4,234</DocCode> — ratio counters
            should preserve meaningful progress and readability.
          </DocCallout>
        </DocSubsection>

        <DocSubsection title="Automatic counter formatting">
          <DocParagraph>
            Badge automatically formats counter values — compacting clean values and preserving precision for
            non-clean values.
          </DocParagraph>
          <DocParagraph>
            <DocStrong>Clean values</DocStrong> (compacted):
          </DocParagraph>
          <DocTable columns={INPUT_OUTPUT_COLUMNS} rows={BADGE_FORMAT_CLEAN_ROWS} highlightFirstColumnIdentifier />
          <DocParagraph>
            <DocStrong>Non-clean values</DocStrong> (precise):
          </DocParagraph>
          <DocTable columns={INPUT_OUTPUT_COLUMNS} rows={BADGE_FORMAT_PRECISE_ROWS} highlightFirstColumnIdentifier />
        </DocSubsection>

        <DocSubsection title="Locale-aware formatting">
          <DocParagraph>Number grouping follows the application&apos;s configured locale.</DocParagraph>
          <DocTable columns={LOCALE_COLUMNS} rows={BADGE_LOCALE_TABLE_ROWS} />
          <DocParagraph>
            <DocStrong>Formatted output by locale:</DocStrong>
          </DocParagraph>
          <DocTable columns={LOCALE_EXAMPLE_COLUMNS} rows={BADGE_LOCALE_EXAMPLE_ROWS} highlightFirstColumnIdentifier />
        </DocSubsection>

        <DocSubsection title="Recommended setups">
          <DocTable columns={SETUP_COLUMNS} rows={BADGE_RECOMMENDED_SETUP_ROWS} highlightFirstColumnIdentifier />
        </DocSubsection>
      </DocSection>

      <DocSection id="badge-interactive-counter" title="Interactive counter" className="space-y-8">
        <DocParagraph>
          An interactive counter is a dynamic counter badge that updates in response to user actions. Unlike static
          counters, which are system-driven (for example, unread notifications or record counts), interactive counters
          are directly tied to user interactions such as adding, removing, selecting, or deselecting items.
        </DocParagraph>
        <DocParagraph>
          The counter automatically increases or decreases based on the associated action and provides immediate visual
          feedback to help users understand the impact of their interaction.
        </DocParagraph>

        <DocSubsection id="badge-interactive-animation" title="Direction-based counter animation">
          <CounterAnimationCodePen />
        </DocSubsection>

        <DocSubsection title="Common use cases">
          <DocParagraph>Interactive counters are commonly used in scenarios such as:</DocParagraph>
          <DocList
            items={[
              'Adding or removing items from a list or collection',
              'Product quantity selection using plus (+) and minus (–) actions',
              'Selected filters or selected member counts',
              'Cart or basket quantity updates',
              'Favorite, bookmark, or reaction counts',
              'Compare selection counts',
              'Multi-select patterns in enterprise workflows',
            ]}
          />
        </DocSubsection>

        <DocSubsection title="Behavior guidelines">
          <DocTable columns={BEHAVIOR_COLUMNS} rows={BADGE_INTERACTIVE_BEHAVIOR_ROWS} highlightFirstColumnIdentifier />
        </DocSubsection>

        <DocSubsection title="Example interaction logic">
          <DocTable columns={ACTION_COLUMNS} rows={BADGE_INTERACTIVE_ACTION_ROWS} highlightFirstColumnIdentifier />
        </DocSubsection>
      </DocSection>

      <DocSection id="badge-best-practices" title="Best practices">
        <DosDontCards
          doItems={[
            'Keep badge text short',
            'Use semantic meaning consistently',
            'Use filled appearance sparingly',
            'Prefer smart automatic formatting for counters',
            'Use status indicators when meaning is important',
            'Maintain consistency within the same interface',
          ]}
          dontItems={[
            'Long badge text',
            'Too many badge colors together',
            'Overusing filled badges',
            'Using badges as buttons',
            'Displaying precise large numbers in compact spaces',
            'Using ratio counters with overflow',
          ]}
        />
        <DocParagraph>
          Label and counter copy rules are on the <DocStrong>UX Copy</DocStrong> tab.
        </DocParagraph>
      </DocSection>

      <DocSection id="badge-accessibility" title="Accessibility">
        <DocParagraph>Badge should:</DocParagraph>
        <DocList
          items={[
            'Preserve minimum contrast ratios',
            'Avoid relying only on color',
            'Maintain readability at small sizes',
            'Support semantic meaning through status indicators',
          ]}
        />
        <DocParagraph>Counter badges should expose meaningful screen reader labels.</DocParagraph>
        <DocTable columns={A11Y_COUNTER_COLUMNS} rows={BADGE_A11Y_COUNTER_ROWS} highlightFirstColumnIdentifier />
        <DocParagraph>
          Tooltips should map to <DocCode>aria-label</DocCode> and <DocCode>title</DocCode> when contextual meaning is
          required.
        </DocParagraph>
      </DocSection>

      <DocSection id="badge-api-props" title="API props">
        <DocParagraph>Complete prop contract for Badge (React and JS APIs share this surface).</DocParagraph>
        <DocTable columns={PROPS_COLUMNS} rows={BADGE_PROPS_TABLE_ROWS} highlightFirstColumnIdentifier />
      </DocSection>
    </div>
  )
}
