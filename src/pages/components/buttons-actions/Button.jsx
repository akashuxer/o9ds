import { useState, useMemo } from 'react'
import { O9Button } from '@o9ds/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import GrayBgCard from '../../../LayoutComponents/GrayBgCard'
import WhiteBgCard from '../../../LayoutComponents/WhiteBgCard'
import DocSection, { DocCallout, DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
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

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const VARIANTS = [
  { name: 'Primary', desc: 'Main call-to-action; use sparingly (one per viewport region).' },
  { name: 'Secondary', desc: 'Supporting actions that are important but not primary.' },
  { name: 'Tertiary', desc: 'Low-emphasis actions, dense toolbars, or inline contexts.' },
  { name: 'Outline', desc: 'Actions needing brand-color emphasis without filled background.' },
  { name: 'Danger', desc: 'Destructive actions (delete, remove); always pair with confirmation.' },
]

const STATES = [
  { name: 'Default', desc: 'Ready to activate.' },
  { name: 'Hover', desc: 'Confirms interactivity (desktop). Touch uses separate affordance.' },
  { name: 'Focus', desc: 'Visible focus ring for keyboard users.' },
  { name: 'Active / pressed', desc: 'Optional for toggle-style actions.' },
  { name: 'Disabled', desc: 'Not actionable; must be explainable in context.' },
  { name: 'Loading', desc: 'Action in progress; blocks repeat activation.' },
]

const PROPS = [
  { prop: 'label', type: 'string', default: '—', required: 'Yes', desc: 'Button text content' },
  { prop: 'variant', type: "'primary' | 'secondary' | 'tertiary' | 'outline' | 'danger'", default: "'primary'", desc: 'Visual style variant' },
  { prop: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", desc: 'Button size (height, padding, font, icon)' },
  { prop: 'type', type: "'button' | 'submit' | 'reset'", default: "'button'", desc: 'Native HTML button type' },
  { prop: 'icon', type: 'string', default: 'undefined', desc: 'Leading icon name without o9con- prefix' },
  { prop: 'isDisabled', type: 'boolean', default: 'false', desc: 'Prevents all interaction' },
  { prop: 'isSelected', type: 'boolean', default: 'undefined', desc: 'Persistent active/selected state for toggle buttons' },
  { prop: 'isFullWidth', type: 'boolean', default: 'false', desc: 'Expands button to fill container width' },
  { prop: 'isLoading', type: 'boolean', default: 'false', desc: 'Shows skeleton shimmer overlay; prevents interaction' },
  { prop: 'tooltip', type: 'string', default: 'undefined', desc: 'Supplementary text via title attribute' },
  { prop: 'onClick', type: '(event) => void', default: 'undefined', desc: 'Click handler; suppressed when disabled or loading' },
]

const CSS_VARS = [
  { category: 'Layout', vars: ['--o9ds-btn-height', '--o9ds-btn-padding-block', '--o9ds-btn-padding-inline', '--o9ds-btn-gap'] },
  { category: 'Typography', vars: ['--o9ds-btn-font-size', '--o9ds-btn-font-weight', '--o9ds-btn-line-height'] },
  { category: 'Icon', vars: ['--o9ds-btn-icon-size'] },
  { category: 'Color', vars: ['--o9ds-btn-bg-color', '--o9ds-btn-text-color', '--o9ds-btn-icon-color', '--o9ds-btn-border-color'] },
  { category: 'Border', vars: ['--o9ds-btn-border-width'] },
]

const SIZES = [
  ['sm', '24px', '12px', '16px', '4px 8px'],
  ['md', '32px', '14px', '20px', '6px 12px'],
  ['lg', '40px', '16px', '24px', '10px 12px'],
]

const KEYBOARD = [
  { key: 'Enter', action: 'Activate the button' },
  { key: 'Space', action: 'Activate the button' },
  { key: 'Tab', action: 'Move focus to next focusable element' },
  { key: 'Shift+Tab', action: 'Move focus to previous focusable element' },
]

const ARIA = [
  { attr: 'aria-label', when: 'Icon-only buttons; optional when a visible label is sufficient' },
  { attr: 'aria-disabled', when: 'Only when the button must stay focusable while logically disabled' },
  { attr: 'aria-pressed', when: 'Toggle buttons (isSelected prop)' },
  { attr: 'aria-expanded', when: 'Button opens/closes content (menus, disclosures)' },
  { attr: 'aria-haspopup', when: 'Opens menu, listbox, or dialog' },
  { attr: 'aria-busy', when: 'Loading state (set automatically when isLoading)' },
  { attr: 'aria-describedby', when: 'Links to helper text, shortcut hint, or disabled reason' },
]

export default function Button() {
  const [tab, setTab] = useState('Overview')

  const sections = useMemo(() => {
    if (tab === 'Overview') return [
      { id: 'purpose', label: 'Purpose' },
      { id: 'anatomy', label: 'Anatomy' },
      { id: 'variants', label: 'Variants' },
      { id: 'sizes', label: 'Sizes' },
      { id: 'states', label: 'States' },
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
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" /></svg>}
        />

        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>
                A text button is a labeled control that performs an action on a single activation. It is not for navigation to another page (use a <DocStrong>link</DocStrong> in that case); it is for doing something in context — save, apply, cancel, delete, or open a related UI.
              </DocParagraph>
            </DocSection>

            <DocSection id="anatomy" title="Anatomy">
              <DocParagraph>
                A text button combines a <DocStrong>surface</DocStrong> (the clickable container), an optional <DocStrong>leading icon</DocStrong>, and a <DocStrong>label</DocStrong>.
              </DocParagraph>
              <LiveReference>
                <O9Button label="Save Changes" variant="primary" />
                <O9Button label="Add Item" variant="primary" icon="plus" />
              </LiveReference>
            </DocSection>

            <DocSection id="variants" title="Variants">
              <DocParagraph>Five variants communicate importance and risk. Use one primary action per region; secondary and tertiary support the task without competing.</DocParagraph>
              <ul className="space-y-2 text-o9ds-light-secondary dark:text-neutral-400">
                {VARIANTS.map(({ name, desc }) => (
                  <li key={name}><DocStrong>{name}</DocStrong> — {desc}</li>
                ))}
              </ul>
              <LiveReference>
                <O9Button label="Primary" variant="primary" />
                <O9Button label="Secondary" variant="secondary" />
                <O9Button label="Tertiary" variant="tertiary" />
                <O9Button label="Outline" variant="outline" />
                <O9Button label="Danger" variant="danger" />
              </LiveReference>
            </DocSection>

            <DocSection id="sizes" title="Sizes">
              <DocParagraph>Three sizes scale height, padding, font, and icon together.</DocParagraph>
              <LiveReference>
                <O9Button label="Small" variant="primary" size="sm" />
                <O9Button label="Medium" variant="primary" size="md" />
                <O9Button label="Large" variant="primary" size="lg" />
              </LiveReference>
            </DocSection>

            <DocSection id="states" title="States">
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                {STATES.map(({ name, desc }) => (
                  <li key={name}><DocStrong>{name}</DocStrong> — {desc}</li>
                ))}
              </ul>
              <LiveReference>
                <O9Button label="Default" variant="primary" />
                <O9Button label="Disabled" variant="primary" isDisabled />
                <O9Button label="Loading" variant="primary" isLoading />
                <O9Button label="Selected" variant="secondary" isSelected />
              </LiveReference>
            </DocSection>

            <DocSection id="dos-donts" title="Dos & Don'ts">
              <div className="grid gap-4 sm:grid-cols-2">
                <GrayBgCard title="Do" bullets={['Use one primary action per viewport or modal', 'Pair destructive actions with confirmation', 'Match label to the outcome users expect', 'Reserve loading for real async work']} />
                <WhiteBgCard title="Don't" bullets={['Style plain text as a link if the control performs an action', 'Stack multiple primary buttons in one row', "Use vague labels ('OK', 'Submit') without context", 'Enable loading without blocking duplicate submits']} />
              </div>
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
              <ul className="space-y-3 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
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
                label="@o9ds/react"
                code={`import { O9Button } from '@o9ds/react';

<O9Button label="Save Changes" variant="primary" />
<O9Button label="Add Item" variant="primary" icon="plus" />
<O9Button label="Submit" variant="primary" isDisabled />
<O9Button label="Saving..." variant="primary" isLoading />
<O9Button label="Bold" variant="secondary" isSelected />
<O9Button label="Continue" variant="primary" isFullWidth />`}
              />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock
                language="js"
                label="@o9ds/js"
                code={`import { O9Button } from '@o9ds/js';

const btn = O9Button.initialize(el, {
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
              <DocParagraph><DocCode>O9Button</DocCode> also accepts standard <DocCode>HTMLButtonElement</DocCode> attributes via spread.</DocParagraph>
              <PropsTable rows={PROPS} />
            </DocSection>
            <DocSection id="css-vars" title="CSS variables">
              <DocParagraph>Override on <DocCode>.o9ds-btn</DocCode> or a parent to theme the button.</DocParagraph>
              <CssVarsGrid groups={CSS_VARS} />
            </DocSection>
            <DocSection id="sizes-table" title="Size reference">
              <SimpleTable columns={['Size', 'Height', 'Font', 'Icon', 'Padding']} rows={SIZES} />
            </DocSection>
            <DocSection id="methods" title="Methods (JS)">
              <MethodsTable rows={[
                { method: 'O9Button.initialize(el, options)', returns: 'O9Button', desc: 'Factory — initializes component on a DOM element.' },
                { method: 'setLabel(text)', desc: 'Update button label text.' },
                { method: 'setIcon(name | null)', desc: 'Set or remove the leading icon.' },
                { method: 'setVariant(variant)', desc: 'Change visual variant.' },
                { method: 'setSize(size)', desc: 'Change button size.' },
                { method: 'setLoading(loading)', desc: 'Toggle loading state.' },
                { method: 'selected(state?)', returns: 'boolean | void', desc: 'Get or set selected/active state.' },
                { method: 'disabled(state?)', returns: 'boolean | void', desc: 'Get or set disabled state.' },
                { method: 'focus()', desc: 'Programmatically focus the button.' },
                { method: 'destroy()', desc: 'Remove listeners and restore original state.' },
              ]} />
            </DocSection>
            <DocSection id="events" title="Custom events (JS)">
              <EventsTable rows={[
                { event: 'btn:loading', payload: '{ loading: boolean }', desc: 'Fires when loading state changes.' },
                { event: 'btn:disabled', payload: '{ disabled: boolean }', desc: 'Fires when disabled state changes programmatically.' },
              ]} />
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
                <span key="3">Hover styles are scoped to <DocCode>.no-touch</DocCode> to prevent sticky hover states on touch devices.</span>,
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
