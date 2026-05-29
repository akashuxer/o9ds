import { useState, useMemo } from 'react'
import { ArvoFormLabel, ArvoFormLabelText, ArvoTextbox } from '@arvo/react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs, { useDocTabUrl } from '../../../LayoutComponents/DocTabs'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import GrayBgCard from '../../../LayoutComponents/GrayBgCard'
import WhiteBgCard from '../../../LayoutComponents/WhiteBgCard'
import DocSection, { DocCallout, DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import {
  PropsTable,
  CssVarsGrid,
  AriaTable,
  SimpleTable,
  LiveReference,
} from '../../../LayoutComponents/ComponentDocPrimitives'
import { getDescriptor } from '../../../data/componentDescriptors.generated'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const DESCRIPTOR = getDescriptor('form-label') ?? getDescriptor('label')
const PROPS = DESCRIPTOR?.props ?? []
const CSS_VARS = DESCRIPTOR?.cssVarGroups ?? []
const ARIA = DESCRIPTOR?.aria ?? []

const VARIANT_ROWS = [
  ['ArvoFormLabel', '<label>', 'Sibling-association labels for text inputs, select, combobox, listbox, search, and number-input. Honors htmlFor.'],
  ['ArvoFormLabelText', '<span>', 'Inner caption nested inside an outer wrapping <label> (Radio, Switch, Checkbox). Cannot accept htmlFor because nested <label> elements are invalid HTML.'],
]

const SIZE_ROWS = [
  ['lg (default)', '14px'],
  ['sm', '12px'],
]

export default function Label() {
  const [tab, setTab] = useDocTabUrl(TABS)

  const sections = useMemo(() => {
    if (tab === 'Overview') return [
      { id: 'purpose', label: 'Purpose' },
      { id: 'variants', label: 'Variants' },
      { id: 'sizes', label: 'Sizes' },
      { id: 'states', label: 'States' },
      { id: 'dos-donts', label: 'Dos & Don\'ts' },
    ]
    if (tab === 'Usage') return [
      { id: 'when', label: 'When to use' },
      { id: 'when-not', label: 'When not to use' },
      { id: 'composition', label: 'Composition' },
    ]
    if (tab === 'Code/APIs') return [
      { id: 'react', label: 'React' },
      { id: 'js', label: 'Vanilla JS' },
      { id: 'props', label: 'Props' },
      { id: 'css-vars', label: 'CSS variables' },
    ]
    if (tab === 'Accessibility') return [
      { id: 'aria', label: 'ARIA & semantics' },
      { id: 'required', label: 'Required indicator' },
    ]
    return []
  }, [tab])

  return (
    <PageWithToc sections={sections}>
      <div className="space-y-8">
        <PageHeader
          title="Form Label"
          description="Atomic form-label primitive used by every labelled form control. Two variants — ArvoFormLabel (sibling-association) and ArvoFormLabelText (inner caption)."
          componentSlug="label"
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10M7 12h10M7 17h6" /></svg>}
        />

        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>
                Form Label is the atomic primitive shared by every labelled form control in the design system. <DocCode>ArvoFormLabel</DocCode> renders a <DocCode>{`<label htmlFor>`}</DocCode> for sibling-association fields; <DocCode>ArvoFormLabelText</DocCode> renders a <DocCode>{`<span>`}</DocCode> for the inner caption used by selection controls (Radio, Switch, Checkbox) where the visible caption is nested inside an outer wrapping <DocCode>{`<label>`}</DocCode>.
              </DocParagraph>
              <DocCallout>
                Use the parent control's <DocCode>label</DocCode> prop for typical fields. Reach for <DocCode>ArvoFormLabel</DocCode> directly only for advanced compositions where the label is not adjacent to the control in the DOM but still references it via <DocCode>htmlFor</DocCode>.
              </DocCallout>
            </DocSection>

            <DocSection id="variants" title="Variants">
              <SimpleTable columns={['Variant', 'Element', 'Purpose']} rows={VARIANT_ROWS} />
              <LiveReference>
                <ArvoFormLabel htmlFor="email-input" isRequired>Email</ArvoFormLabel>
                <ArvoFormLabelText>Inner caption (span)</ArvoFormLabelText>
              </LiveReference>
            </DocSection>

            <DocSection id="sizes" title="Sizes">
              <SimpleTable columns={['Size', 'Font']} rows={SIZE_ROWS} />
              <DocParagraph>
                Form-input components (Textbox, Textarea, Number Input, etc.) render their label at <DocCode>sm</DocCode> to match field metrics. Group controls (Radio Group, Checkbox Group) inherit the group's <DocCode>size</DocCode> prop.
              </DocParagraph>
            </DocSection>

            <DocSection id="states" title="States">
              <ul className="list-disc pl-5 space-y-2 text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><DocStrong>Default</DocStrong> — standard form-label color and weight.</li>
                <li><DocStrong>Required</DocStrong> — adds the required indicator (default <DocCode>*</DocCode>) via the <DocCode>__req</DocCode> element.</li>
                <li><DocStrong>Disabled</DocStrong> — dimmed via the <DocCode>is-disabled</DocCode> class. Visual only; the underlying control owns semantics.</li>
                <li><DocStrong>Invalid</DocStrong> — error-tinted via the <DocCode>is-invalid</DocCode> class. Visual only.</li>
              </ul>
              <LiveReference>
                <ArvoFormLabel htmlFor="lbl-default">Default</ArvoFormLabel>
                <ArvoFormLabel htmlFor="lbl-required" isRequired>Required</ArvoFormLabel>
                <ArvoFormLabel htmlFor="lbl-disabled" isDisabled>Disabled</ArvoFormLabel>
                <ArvoFormLabel htmlFor="lbl-invalid" isInvalid>Invalid</ArvoFormLabel>
              </LiveReference>
            </DocSection>

            <DocSection id="dos-donts" title="Dos & Don'ts">
              <div className="grid gap-4 sm:grid-cols-2">
                <GrayBgCard title="Do" bullets={[
                  'Prefer the parent component\'s label prop for ergonomics and correct ARIA wiring.',
                  'Pair ArvoFormLabel with the field\'s id via htmlFor when composing manually.',
                  'Use ArvoFormLabelText only inside a wrapping <label> (selection controls).',
                ]} />
                <WhiteBgCard title="Don't" bullets={[
                  'Nest a <label> inside another <label> — invalid HTML.',
                  'Rely on the asterisk alone to communicate required — pair with aria-required on the input.',
                  'Use this primitive for non-form titles or section headings.',
                ]} />
              </div>
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && (
          <div className="space-y-12">
            <DocSection id="when" title="When to use">
              <DocList items={[
                'Reaching for ArvoFormLabel directly when the label needs to live elsewhere in the DOM but still reference the field via htmlFor.',
                'Building custom required indicators (e.g. " (required)" suffix instead of an asterisk).',
                'Composing labels with custom layouts (description below the label, inline help icon, etc.).',
              ]} />
            </DocSection>
            <DocSection id="when-not" title="When not to use">
              <DocList items={[
                <span key="1">For typical labelled fields — use the parent component's <DocCode>label</DocCode> prop. The parent renders this primitive internally with correct ARIA wiring.</span>,
                <span key="2">For selection controls (Checkbox, Radio, Switch) — use the parent's <DocCode>label</DocCode> prop, which renders <DocCode>ArvoFormLabelText</DocCode> in the right slot.</span>,
                <span key="3">For non-form titles, section headings, or display-only captions — use a heading or paragraph element.</span>,
              ]} />
            </DocSection>
            <DocSection id="composition" title="Composition">
              <DocParagraph>
                When composing manually, set <DocCode>id</DocCode> on the field and pass it as <DocCode>htmlFor</DocCode> on the label so the browser routes click-to-focus correctly.
              </DocParagraph>
              <LiveReference>
                <div className="space-y-1">
                  <ArvoFormLabel htmlFor="email-compose" isRequired size="sm">Email</ArvoFormLabel>
                  <ArvoTextbox id="email-compose" placeholder="you@example.com" />
                </div>
              </LiveReference>
            </DocSection>
          </div>
        )}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <DocSection id="react" title="React">
              <CodeBlock language="tsx" label="@arvo/react" code={`import { ArvoFormLabel, ArvoFormLabelText, ArvoTextbox } from '@arvo/react';

// Default ergonomic path — the field renders FormLabel internally.
<ArvoTextbox label="Email" isRequired />

// Advanced composition — standalone FormLabel paired with the field by htmlFor.
<ArvoFormLabel htmlFor="email-input" size="sm" isRequired>
  Email
</ArvoFormLabel>
<ArvoTextbox id="email-input" />

// Invalid state propagation
<ArvoFormLabel htmlFor="email-input" isRequired isInvalid>
  Email
</ArvoFormLabel>

// Custom required indicator
<ArvoFormLabel
  htmlFor="email-input"
  isRequired
  requiredIndicator={<span aria-hidden="true"> (required)</span>}
>
  Email
</ArvoFormLabel>`} />
            </DocSection>
            <DocSection id="js" title="Vanilla JS">
              <CodeBlock language="js" label="@arvo/utils" code={`import { createFormLabel } from '@arvo/utils';

// <label> (default)
const lbl = createFormLabel({
  text: 'Email',
  for: 'email-input',
  isRequired: true,
});
field.insertBefore(lbl, field.firstChild);

// <span> for inner-caption use inside a wrapping <label>
const caption = createFormLabel({
  text: 'I agree to the terms',
  as: 'span',
});
caption.classList.add('arvo-checkbox__lbl');
fieldLabel.appendChild(caption);`} />
            </DocSection>
            <DocSection id="props" title="Props"><PropsTable rows={PROPS} /></DocSection>
            <DocSection id="css-vars" title="CSS variables"><CssVarsGrid groups={CSS_VARS} /></DocSection>
          </div>
        )}

        {tab === 'Accessibility' && (
          <div className="space-y-12">
            <DocSection id="aria" title="ARIA & semantics">
              <AriaTable rows={ARIA.length ? ARIA : [
                { attr: '<label for="…">', when: 'ArvoFormLabel renders a real label and provides implicit click-to-focus association with the field.' },
                { attr: '<span>', when: 'ArvoFormLabelText is purely visual. Click-to-toggle association is provided by the wrapping <label>.' },
                { attr: 'aria-hidden (on __req)', when: 'The required indicator (asterisk) is hidden from screen readers — set aria-required on the input itself.' },
              ]} />
            </DocSection>
            <DocSection id="required" title="Required indicator">
              <DocList items={[
                <span key="1">The required indicator <DocCode>{`<span class="arvo-form-lbl__req">`}</DocCode> is <DocCode>aria-hidden="true"</DocCode> so screen readers do not read the asterisk.</span>,
                <span key="2">Set <DocCode>aria-required</DocCode> on the underlying input to convey required-ness to assistive tech (the parent component's <DocCode>isRequired</DocCode> prop does this automatically).</span>,
                <span key="3">Disabled and invalid styling is visual only; the underlying control's <DocCode>disabled</DocCode> and <DocCode>aria-invalid</DocCode> attributes drive semantics.</span>,
              ]} />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
