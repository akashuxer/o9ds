import { useState, useMemo } from 'react'
import { ArvoButton, ArvoTextbox } from '@arvo/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs, { useDocTabUrl } from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import GrayBgCard from '../../../LayoutComponents/GrayBgCard'
import DosDontCards from '../../../LayoutComponents/DosDontCards'
import ExpandableDocImage from '../../../LayoutComponents/ExpandableDocImage'
import DocSection, { DocCallout, DocCode, DocList, DocParagraph, DocStrong, DocSubsection } from '../../../LayoutComponents/DocSection'
import {
  PropsTable,
  CssVarsGrid,
  KeyboardTable,
  AriaTable,
  MethodsTable,
  EventsTable,
  SimpleTable,
  LiveReference,
} from '../../../LayoutComponents/ComponentDocPrimitives'
import { getDescriptor } from '../../../data/componentDescriptors.generated'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const DESCRIPTOR = getDescriptor('button')
const PROPS = DESCRIPTOR.props
const CSS_VARS = DESCRIPTOR.cssVarGroups
const METHODS = DESCRIPTOR.methods
const EVENTS = DESCRIPTOR.events
const KEYBOARD = DESCRIPTOR.keyboard
const ARIA = DESCRIPTOR.aria

// UX-level summaries for the Overview tab — aligned with o9UI design spec.
const VARIANT_ROWS = [
  ['Primary', 'The most important action on a page, form, or container. Designed to grab attention — use sparingly to avoid confusion.'],
  ['Secondary', 'Supporting or less critical actions that complement the primary button. Typically neutral; used for navigation, cancellation, or dismissing dialogs.'],
  ['Tertiary', 'Utility or least significant actions to keep the UI clean. Often used above widgets or for low-priority interactions.'],
  ['Outline', 'Important actions that are not primary but still need visibility. Common inside cards or for secondary tasks on a page.'],
  ['Danger (primary)', 'Destructive or irreversible outcomes (delete, remove, restore). Visually stands out to warn users before they act.'],
  ['Danger (outline)', 'When multiple destructive and neutral actions appear in one view — destructive with border emphasis, not filled.'],
  ['Danger (tertiary)', 'Subtle destructive actions in dense layouts where a filled or outlined danger button would compete visually.'],
]

const STATE_ROWS = [
  ['Enabled', 'The button is available and ready for interaction.'],
  ['Hover', 'Visual response to pointer interaction, confirming the control is interactive.'],
  ['Focus', 'Highlighted during keyboard navigation (not on mouse click) to show which control has focus.'],
  ['Active', 'Pressed state while the user is activating the control.'],
  ['Disabled', 'Non-interactive; cannot be triggered. Explain why nearby when possible.'],
]

const SIZE_DETAIL_ROWS = [
  [
    'Small',
    '24px',
    'Space-constrained and high-density layouts where compact actions are required without disrupting layout structure.',
    'Table row actions (Edit, Delete, View); grid and pivot cell actions; dense toolbars and inline controls; secondary actions inside compact components.',
  ],
  [
    'Medium (default)',
    '32px',
    'Standard size across the platform — balanced usability, readability, and layout consistency.',
    'Form actions (Save, Cancel, Apply); overlay footers (windows, dialogs, side panes); widget-level primary actions; filter panels and workflow controls.',
  ],
  [
    'Large',
    '40px',
    'High-emphasis spacious layouts where visibility and prominence are required.',
    'Empty states with illustrations; landing or onboarding sections; large modals or full-screen dialogs; primary actions in low-density layouts.',
  ],
]

const ALIGNMENT_RULES = [
  'Medium button height (32px) aligns with medium input fields for consistent form layouts.',
  'Small button height (24px) aligns with small input fields for compact sections.',
  'Maintain consistent vertical rhythm when mixing buttons and inputs in the same row or footer.',
]

const SIZE_TABLE_ROWS = [
  ['sm', '24px', '12px', '16px', '4px 8px'],
  ['md', '32px', '14px', '20px', '6px 12px'],
  ['lg', '40px', '16px', '24px', '10px 12px'],
]

export default function Button() {
  const [tab, setTab] = useDocTabUrl(TABS)

  const sections = useMemo(() => {
    if (tab === 'Overview') return [
      { id: 'purpose', label: 'Purpose' },
      { id: 'anatomy', label: 'Anatomy' },
      { id: 'variants', label: 'Variants' },
      { id: 'states', label: 'States' },
      { id: 'sizes', label: 'Sizes' },
      { id: 'alignment-rules', label: 'Alignment rules' },
      { id: 'content-guidelines', label: 'Content guidelines' },
      { id: 'dos-donts', label: 'Dos & Don\'ts' },
    ]
    if (tab === 'Usage') return [
      { id: 'when', label: 'When to use' },
      { id: 'when-not', label: 'When not to use' },
      { id: 'scenarios', label: 'Scenarios' },
      { id: 'best-practices', label: 'Best practices' },
    ]
    if (tab === 'Code/APIs') return [
      { id: 'react', label: 'React' },
      { id: 'js', label: 'Vanilla JS' },
      { id: 'props', label: 'Props' },
      { id: 'css-vars', label: 'CSS variables' },
      { id: 'sizes-table', label: 'Size reference' },
      { id: 'methods', label: 'Methods (JS)' },
      { id: 'events', label: 'Custom events (JS)' },
    ]
    if (tab === 'Accessibility') return [
      { id: 'keyboard', label: 'Keyboard interactions' },
      { id: 'aria', label: 'ARIA attributes' },
      { id: 'focus', label: 'Focus' },
    ]
    return []
  }, [tab])

  return (
    <PageWithToc sections={sections}>
      <div className="space-y-8">
        <PageHeader
          title="Button"
          description="The primary control for triggering actions in the o9 platform. Five variants, three sizes, optional leading icon, and a skeleton shimmer loading state."
          componentSlug="button"
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" /></svg>}
        />

        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>
                Buttons allow users to trigger actions such as submitting data, applying changes, progressing workflows, or executing system operations. They are the most critical interactive component in the system and define action hierarchy, intent clarity, and workflow progression — especially in data-heavy B2B environments.
              </DocParagraph>
              <DocParagraph>
                A button performs work in context; it does not navigate to another destination. Use a <DocStrong>link</DocStrong> when the user should get a URL, bookmark, or open-in-new-tab behavior.
              </DocParagraph>
            </DocSection>

            <DocSection id="anatomy" title="Anatomy">
              <DocParagraph>A button consists of:</DocParagraph>
              <ExpandableDocImage
                src="/o9DocGraphics/button-anatomy.svg"
                alt="Button anatomy diagram showing container, label, and optional leading icon"
                className="w-full max-w-2xl border border-arvo-light-border dark:border-neutral-700"
              />
              <ol className="list-decimal pl-5 space-y-2 text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><DocStrong>Container</DocStrong> — the clickable surface of the button.</li>
                <li><DocStrong>Label (required)</DocStrong> — descriptive text that indicates the action.</li>
                <li><DocStrong>Icon (optional)</DocStrong> — leading o9con icon to visually support the label.</li>
              </ol>
            </DocSection>

            <DocSection id="variants" title="Variants">
              <DocParagraph>
                Buttons are categorized into seven core variants based on visual priority, user intent, and action impact. The component API exposes five variants (<DocCode>primary</DocCode>, <DocCode>secondary</DocCode>, <DocCode>tertiary</DocCode>, <DocCode>outline</DocCode>, <DocCode>danger</DocCode>); danger outline and danger tertiary describe destructive emphasis levels used in product layouts when multiple negative actions share a view.
              </DocParagraph>
              <SimpleTable columns={['Variant', 'Purpose']} rows={VARIANT_ROWS} />
              <LiveReference>
                <ArvoButton label="Primary" variant="primary" icon="plus" />
                <ArvoButton label="Secondary" variant="secondary" icon="plus" />
                <ArvoButton label="Tertiary" variant="tertiary" icon="plus" />
                <ArvoButton label="Outline" variant="outline" icon="plus" />
                <ArvoButton label="Delete" variant="danger" icon="bin" />
              </LiveReference>
            </DocSection>

            <DocSection id="states" title="States">
              <DocParagraph>Interaction states communicate availability, feedback, and keyboard focus across all variants.</DocParagraph>
              <SimpleTable columns={['State', 'Purpose']} rows={STATE_ROWS} />
              <LiveReference>
                <ArvoButton label="Enabled" variant="primary" />
                <ArvoButton label="Disabled" variant="primary" isDisabled />
                <ArvoButton label="Loading" variant="primary" isLoading />
              </LiveReference>
              <DocCallout>
                Hover applies only on fine-pointer devices (<DocCode>@media (hover: hover)</DocCode>). Focus-visible shows a distinct ring for keyboard users — not on mouse click. Active reflects the pressed state during click. <DocStrong>Loading</DocStrong> and <DocStrong>toggle / selected</DocStrong> are additional Arvo states for async work and persistent on/off actions.
              </DocCallout>
            </DocSection>

            <DocSection id="sizes" title="Sizes">
              <DocParagraph>
                Buttons are available in three sizes, designed to support different density levels, interaction contexts, and touch-target requirements across the platform. Height, padding, font, and icon scale together.
              </DocParagraph>
              <SimpleTable columns={['Size', 'Height', 'Purpose', 'Typical use cases']} rows={SIZE_DETAIL_ROWS} />
              <LiveReference>
                <div className="flex flex-col items-center gap-1">
                  <ArvoButton label="Button" variant="primary" size="sm" icon="plus" />
                  <span className="text-xs text-arvo-light-secondary dark:text-neutral-500">24px</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <ArvoButton label="Button" variant="primary" size="md" icon="plus" />
                  <span className="text-xs text-arvo-light-secondary dark:text-neutral-500">32px</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <ArvoButton label="Button" variant="primary" size="lg" icon="plus" />
                  <span className="text-xs text-arvo-light-secondary dark:text-neutral-500">40px</span>
                </div>
              </LiveReference>
            </DocSection>

            <DocSection id="alignment-rules" title="Alignment rules">
              <DocParagraph>When buttons sit beside inputs or in form footers, match size to field density so baselines and touch targets stay consistent.</DocParagraph>
              <div className="grid gap-3">
                {ALIGNMENT_RULES.map((rule) => (
                  <GrayBgCard key={rule} desc={rule} />
                ))}
              </div>
              <DocSubsection title="Medium pairing (32px)">
                <LiveReference>
                  <div className="flex flex-wrap items-end gap-6">
                    <div className="min-w-[220px]">
                      <ArvoTextbox label="Medium (Default) Input Field" placeholder="Placeholder" />
                    </div>
                    <div className="flex flex-col items-start gap-1 pb-1">
                      <ArvoButton label="Medium (Default) Button" variant="primary" size="md" />
                      <span className="text-xs text-arvo-light-secondary dark:text-neutral-500">32px height</span>
                    </div>
                  </div>
                </LiveReference>
              </DocSubsection>
              <DocSubsection title="Small pairing (24px)">
                <LiveReference>
                  <div className="flex flex-wrap items-end gap-6">
                    <div className="min-w-[200px]">
                      <ArvoTextbox label="Small Input Field" placeholder="Placeholder" size="sm" />
                    </div>
                    <div className="flex flex-col items-start gap-1 pb-1">
                      <ArvoButton label="Small Button" variant="secondary" size="sm" />
                      <span className="text-xs text-arvo-light-secondary dark:text-neutral-500">24px height</span>
                    </div>
                  </div>
                </LiveReference>
              </DocSubsection>
              <DocSubsection title="Token reference">
                <SimpleTable columns={['Size', 'Height', 'Font', 'Icon', 'Padding']} rows={SIZE_TABLE_ROWS} />
              </DocSubsection>
            </DocSection>

            <DocSection id="content-guidelines" title="Content guidelines / UX copy">
              <DocParagraph>
                Button labels (calls to action) should be clear, concise, and action-oriented so users immediately understand what will happen on activation.
              </DocParagraph>
              <DocList items={[
                'Keep labels short — maximum 3 words, ideally 1–2.',
                'Use Title Case (capitalize key words; avoid capitalizing articles and prepositions unless necessary).',
                'Start with a strong verb (Save, Apply, Create, Delete).',
                'Remove unnecessary words like "a", "an", "the".',
                'Avoid "Click" or "Press" in labels.',
                'Add a noun after the verb when it improves clarity — e.g. "Submit Expenses" vs "Submit".',
                'Ensure labels are specific to the action and context — avoid generic "Proceed" or "Continue" unless meaning is obvious.',
                'Maintain consistency across similar actions — always use "Save", not "Save Changes" in one place and "Update" in another for the same action.',
              ]} />
              <DocSubsection title="Examples">
                <DosDontCards
                  stacked
                  doTitle="Good"
                  dontTitle="Avoid"
                  doItems={['Save', 'Apply Filters', 'Create Plan', 'Delete Item']}
                  dontItems={['Click Here', 'Submit Now', 'Proceed Further', 'OK']}
                />
              </DocSubsection>
              <DocParagraph>
                For language and tone standards, refer to the Buttons and Calls to Action guidance in the Content writing section.
              </DocParagraph>
            </DocSection>

            <DocSection id="dos-donts" title="Dos & Don'ts">
              <DosDontCards
                doItems={[
                  'Use one primary action per viewport, form, or modal footer.',
                  'Pair destructive actions with confirmation — never rely on color alone.',
                  'Match button size to surrounding input density in forms.',
                  'Write verb-first labels that describe the outcome (Save, Apply Filters).',
                  'Use loading state for real async work that blocks repeat submits.',
                  'Place secondary (Cancel) before primary (Save) in LTR footers.',
                ]}
                dontItems={[
                  'Stack multiple primary buttons in one row or footer.',
                  'Use vague labels ("OK", "Submit") without contextual meaning.',
                  'Style navigation as a button when a link is semantically correct.',
                  'Disable a button without explaining why nearby or in helper text.',
                  'Use danger variant for non-destructive actions to "make it stand out".',
                  'Trigger actions on focus alone or require hover to discover affordance.',
                ]}
              />
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'Confirming or saving a user decision in a form, dialog, or panel.',
                'Running a single primary action (e.g. export, run planning) where the action is clear from the label.',
                'Choosing between a small set of actions in a footer or toolbar (e.g. Cancel vs Save).',
                'Triggering destructive work when paired with a confirmation step.',
                'Showing a busy state while the system completes a request.',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">Navigating to another destination — use <DocStrong>Link</DocStrong> so users get a URL and predictable browser behavior.</span>,
                <span key="2">Picking among many options — use <DocStrong>Select</DocStrong>, menu, or list patterns.</span>,
                <span key="3">Binary settings that should read as on/off — consider a <DocStrong>Switch</DocStrong> or checkbox with clear semantics.</span>,
                <span key="4">Icon-only affordances in dense tools — use an <DocStrong>Icon Button</DocStrong> with an accessible name.</span>,
              ]} />
            </DocSection>
            <DocSection id="scenarios" title="Scenarios">
              <ul className="space-y-3 text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><DocStrong>Form footer.</DocStrong> Place secondary (Cancel) to the left, primary (Save) on the right in LTR locales. One primary action per footer.</li>
                <li><DocStrong>Toolbar.</DocStrong> Use tertiary or outline for frequent actions; keep primary for the single most important workflow step in the view.</li>
                <li><DocStrong>Destructive.</DocStrong> Use the danger variant; never rely on color alone — add confirmation copy or a confirmation dialog.</li>
              </ul>
            </DocSection>
            <DocSection id="best-practices" title="Best practices">
              <DocList items={[
                'Align primary vs secondary: one clear "forward" action per screen region.',
                'Use full width on mobile for primary flows when space is constrained.',
                'Group related actions; separate unrelated actions with spacing or alignment.',
                'If a button is disabled, explain why nearby or in the pattern — never rely on a dimmed state alone.',
              ]} />
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock
                language="tsx"
                label="@arvo/react"
                code={`import { ArvoButton } from '@arvo/react';

<ArvoButton label="Save Changes" variant="primary" />
<ArvoButton label="Add Item" variant="primary" icon="plus" />
<ArvoButton label="Submit" variant="primary" isDisabled />
<ArvoButton label="Saving..." variant="primary" isLoading />

// Toggle button — emits aria-pressed and fires onSelectionChange
<ArvoButton
  label="Bold"
  variant="secondary"
  isToggle
  defaultSelected
  onSelectionChange={(isSelected) => console.log(isSelected)}
/>

// Controlled active indicator (e.g. an open menu trigger)
<ArvoButton label="Filter" variant="secondary" isSelected={menuOpen} />

<ArvoButton label="Continue" variant="primary" isFullWidth />`}
              />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock
                language="js"
                label="@arvo/js"
                code={`import { ArvoButton } from '@arvo/js';

const btn = ArvoButton.initialize(el, {
  variant: 'primary',
  label: 'Save Changes',
  onClick: (event) => console.log('clicked', event),
});

btn.setLabel('Saved!');
btn.setIcon('check');
btn.setLoading(true);
btn.disabled(true);   // setter
btn.disabled();       // getter
btn.destroy();`}
              />
            </DocSection>
            <DocSection id="props" title="Props">
              <DocParagraph><DocCode>ArvoButton</DocCode> also accepts standard <DocCode>HTMLButtonElement</DocCode> attributes via spread (including <DocCode>onFocus</DocCode>, <DocCode>onBlur</DocCode>, <DocCode>onKeyDown</DocCode>).</DocParagraph>
              <PropsTable rows={PROPS} />
              <DocCallout>
                <DocCode>ArvoButton</DocCode> does not expose a <DocCode>tooltip</DocCode> prop — wrap with <DocCode>ArvoTooltip</DocCode> when a tooltip is needed.
              </DocCallout>
            </DocSection>
            <DocSection id="css-vars" title="CSS variables">
              <DocParagraph>Override on <DocCode>.arvo-btn</DocCode> or a parent to theme the button.</DocParagraph>
              <CssVarsGrid groups={CSS_VARS} />
            </DocSection>
            <DocSection id="sizes-table" title="Size reference">
              <SimpleTable columns={['Size', 'Height', 'Font', 'Icon', 'Padding']} rows={SIZE_TABLE_ROWS} />
            </DocSection>
            <DocSection id="methods" title="Methods (JS)">
              <MethodsTable rows={METHODS} />
            </DocSection>
            <DocSection id="events" title="Custom events (JS)">
              <EventsTable rows={EVENTS} />
            </DocSection>
          </div>
        )}

        {tab === 'Accessibility' && (
          <div className="space-y-12">
            <DocSection id="keyboard" title="Keyboard interactions">
              <KeyboardTable rows={KEYBOARD} />
              <DocCallout>
                Both <DocCode>Enter</DocCode> and <DocCode>Space</DocCode> activate the button. Don't trigger actions on focus alone or require hover to understand the action.
              </DocCallout>
            </DocSection>
            <DocSection id="aria" title="ARIA attributes">
              <DocParagraph>Don't add ARIA that duplicates native semantics.</DocParagraph>
              <AriaTable rows={ARIA} />
            </DocSection>
            <DocSection id="focus" title="Focus">
              <DocList items={[
                <span key="1">Focus ring uses <DocCode>outline: 1px solid</DocCode> with <DocCode>outline-offset: 2px</DocCode>.</span>,
                <span key="2">When the <DocCode>.focus-border</DocCode> utility class is applied, <DocCode>outline-offset</DocCode> becomes <DocCode>-1px</DocCode> — use this in dense layouts (button groups, toolbars, table cells).</span>,
                <span key="3">Hover styles are wrapped in <DocCode>@media (hover: hover) and (pointer: fine)</DocCode> to prevent sticky hover states on touch devices.</span>,
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
