import { useMemo } from 'react'
import PageHeader from '../../../LayoutComponents/PageHeader'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTabs, { useDocTabUrl } from '../../../LayoutComponents/DocTabs'
import DosDontCards from '../../../LayoutComponents/DosDontCards'
import DocSection, { DocCallout, DocCode, DocList, DocParagraph, DocStrong } from '../../../LayoutComponents/DocSection'
import { KeyboardTable, AriaTable } from '../../../LayoutComponents/ComponentDocPrimitives'
import { getExpertDoc } from '../../../data/expertDocContent'
import { ExpertUsageTab, ExpertImplementationPlaceholder } from '../shared/ExpertDocSections'
import { getExpertUsageToc } from '../shared/expertDocToc'

const TABS = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const EXPERT = getExpertDoc('accordion')

const EXPAND_BEHAVIOR = [
  { name: 'Single expand', desc: 'Opening one panel closes the others. Best for FAQs and settings where only one section needs focus at a time.' },
  { name: 'Multiple expand', desc: 'Panels open and close independently. Use when users compare content across sections or need several open while configuring.' },
]

const STATES = [
  { name: 'Collapsed', desc: 'Default resting state; header visible, panel content hidden from view and removed from tab order.' },
  { name: 'Expanded', desc: 'Panel content visible; header shows expanded affordance (chevron rotation or similar).' },
  { name: 'Disabled', desc: 'Header non-interactive; use sparingly and explain why the section is unavailable.' },
]

const KEYBOARD = [
  { key: 'Enter / Space', action: 'Toggle the focused panel header open or closed.' },
  { key: 'ArrowDown', action: 'Move focus to the next accordion header (when header navigation is enabled).' },
  { key: 'ArrowUp', action: 'Move focus to the previous accordion header.' },
  { key: 'Home', action: 'Move focus to the first header in the set.' },
  { key: 'End', action: 'Move focus to the last header in the set.' },
  { key: 'Tab', action: 'Move focus into expanded panel content, then to the next focusable element on the page.' },
]

const ARIA = [
  { attr: 'aria-expanded', when: 'On each header button — "true" when its panel is open, "false" when collapsed.' },
  { attr: 'aria-controls', when: 'On each header — references the id of the panel it toggles.' },
  { attr: 'id (panel)', when: 'Each panel has a stable id matched by the header\'s aria-controls.' },
  { attr: 'aria-disabled', when: 'On a header when that section cannot be opened.' },
  { attr: 'aria-labelledby', when: 'Optional on the panel — references the header id when the header text is the section title.' },
]

const docIcon = (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
  </svg>
)

export default function Accordion() {
  const [tab, setTab] = useDocTabUrl(TABS)

  const sections = useMemo(() => {
    if (tab === 'Overview') return [
      { id: 'purpose', label: 'Purpose' },
      { id: 'anatomy', label: 'Anatomy' },
      { id: 'behavior', label: 'Expand behavior' },
      { id: 'states', label: 'States' },
      { id: 'vs-related', label: 'vs Related patterns' },
      { id: 'dos-donts', label: 'Dos & Don\'ts' },
    ]
    if (tab === 'Usage') return getExpertUsageToc(EXPERT)
    if (tab === 'Code/APIs') return [{ id: 'implementation', label: 'Implementation' }]
    if (tab === 'Accessibility') return [
      { id: 'keyboard', label: 'Keyboard interactions' },
      { id: 'aria', label: 'ARIA attributes' },
      { id: 'focus', label: 'Focus & screen readers' },
      { id: 'dos-donts-a11y', label: 'Accessibility dos & don\'ts' },
    ]
    return []
  }, [tab])

  return (
    <PageWithToc sections={sections}>
      <div className="space-y-8">
        <PageHeader
          title="Accordion"
          description="Progressive disclosure for grouped content — collapsible sections that let users scan headings and expand only what they need."
          componentSlug="accordion"
          icon={docIcon}
        />

        <DocTabs tabs={TABS} activeTab={tab} onSelect={setTab} />

        {tab === 'Overview' && (
          <div className="space-y-12">
            <DocSection id="purpose" title="Purpose">
              <DocParagraph>
                Accordion organizes content into stacked, collapsible sections so users can scan section titles at a glance and reveal detail on demand. It reduces vertical scroll and cognitive load when only one or a few sections are relevant at a time — common in FAQs, filter panels, settings groups, and dense documentation.
              </DocParagraph>
              <DocParagraph>
                Each section has a persistent <DocStrong>header</DocStrong> (always visible) and a <DocStrong>panel</DocStrong> (shown or hidden). Headers must read as independent topics; panel content should stand alone once expanded.
              </DocParagraph>
            </DocSection>

            <DocSection id="anatomy" title="Anatomy">
              <DocParagraph>
                An accordion item combines a <DocStrong>header button</DocStrong> (clickable/tappable region with title text and expand indicator), an optional <DocStrong>leading icon</DocStrong> or metadata (badge, count), and a <DocStrong>content panel</DocStrong> (the region revealed on expand). A group of items shares one container with consistent dividers between sections.
              </DocParagraph>
              <DocParagraph>
                The expand indicator (typically a chevron) rotates or flips to reflect state. Do not rely on color alone — the icon motion and <DocCode>aria-expanded</DocCode> communicate open vs closed.
              </DocParagraph>
            </DocSection>

            <DocSection id="behavior" title="Expand behavior">
              <DocParagraph>Choose single or multiple expand based on whether users need parallel access to section content.</DocParagraph>
              <ul className="space-y-2 text-arvo-light-secondary dark:text-neutral-400">
                {EXPAND_BEHAVIOR.map(({ name, desc }) => (
                  <li key={name}><DocStrong>{name}</DocStrong> — {desc}</li>
                ))}
              </ul>
              <DocCallout>
                Default to <DocStrong>single expand</DocStrong> unless user research shows comparison across sections is common. Multiple open panels increase page height and can disorient screen-reader users if not announced clearly.
              </DocCallout>
            </DocSection>

            <DocSection id="states" title="States">
              <ul className="list-disc pl-5 space-y-2 text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
                {STATES.map(({ name, desc }) => (
                  <li key={name}><DocStrong>{name}</DocStrong> — {desc}</li>
                ))}
              </ul>
            </DocSection>

            <DocSection id="vs-related" title="vs Related patterns">
              <DocList items={[
                <span key="1"><DocStrong>Tabs</DocStrong> — use when sections are peers of equal weight and users switch frequently between them; only one panel visible, headers stay in a horizontal tab list.</span>,
                <span key="2"><DocStrong>Side Panel / Drawer</DocStrong> — use when the hidden content is a full workflow or form, not a short supplementary block.</span>,
                <span key="3"><DocStrong>Card</DocStrong> — use when all content should remain visible without an extra interaction to reveal it.</span>,
                <span key="4"><DocStrong>Details / native disclosure</DocStrong> — for a single collapsible block, a lone accordion item or native <DocCode>&lt;details&gt;</DocCode> may suffice.</span>,
              ]} />
            </DocSection>

            <DocSection id="dos-donts" title="Dos & Don'ts">
              <DosDontCards
                doItems={['Write header text as clear section titles — scannable in a list', 'Keep panel content focused; link out for long auxiliary material', 'Allow the first section to open by default when it holds primary task content', 'Use consistent header height and divider rhythm across items']}
                dontItems={['Nest accordions more than one level deep — restructure or use a tree', 'Hide critical actions or required fields inside collapsed panels by default', 'Use accordion for primary page navigation', 'Animate panel height so aggressively that it causes motion sickness — respect prefers-reduced-motion']}
              />
            </DocSection>
          </div>
        )}

        {tab === 'Usage' && <ExpertUsageTab content={EXPERT} />}

        {tab === 'Code/APIs' && (
          <div className="space-y-12">
            <ExpertImplementationPlaceholder slug="accordion" label="Accordion" />
          </div>
        )}

        {tab === 'Accessibility' && (
          <div className="space-y-12">
            <DocSection id="keyboard" title="Keyboard interactions">
              <DocParagraph>
                Accordion headers are native <DocCode>&lt;button&gt;</DocCode> elements (or elements with <DocCode>role="button"</DocCode> and keyboard support). Follow the WAI-ARIA Accordion pattern: headers are in the tab order; panel content becomes reachable when expanded.
              </DocParagraph>
              <KeyboardTable rows={KEYBOARD} />
            </DocSection>

            <DocSection id="aria" title="ARIA attributes">
              <DocParagraph>
                Prefer native button semantics with <DocCode>aria-expanded</DocCode> and <DocCode>aria-controls</DocCode>. Do not add redundant roles when the header is already a button controlling a named panel.
              </DocParagraph>
              <AriaTable rows={ARIA} />
            </DocSection>

            <DocSection id="focus" title="Focus & screen readers">
              <DocList items={[
                <span key="1">When a panel opens, focus stays on the header unless moving focus into the panel is required for the task (e.g. first field in an settings section).</span>,
                <span key="2">When a panel closes, focus returns to its header — never strand focus on hidden content.</span>,
                <span key="3">Hidden panels should use <DocCode>hidden</DocCode> attribute or <DocCode>display: none</DocCode> — not merely zero height — so content is removed from the accessibility tree and tab order.</span>,
                <span key="4">Screen readers announce the header text and expanded/collapsed state via <DocCode>aria-expanded</DocCode>. Avoid duplicating the title in visually hidden live regions on every toggle.</span>,
                <span key="5">If panel content loads asynchronously, set <DocCode>aria-busy</DocCode> on the panel until content is ready and avoid focus moves into an empty region.</span>,
              ]} />
            </DocSection>

            <DocSection id="dos-donts-a11y" title="Accessibility dos & don'ts">
              <DosDontCards
                doItems={['Use a real button element for each header', 'Pair every aria-controls with a matching panel id', 'Ensure header text is the accessible name — no duplicate aria-label unless adding context', 'Respect prefers-reduced-motion for expand/collapse animation']}
                dontItems={['Use div click handlers without keyboard support', 'Leave focus inside a panel that was just collapsed', 'Use aria-hidden on headers — only on decorative icons inside headers', 'Auto-expand sections on timer or without user intent']}
              />
            </DocSection>
          </div>
        )}
      </div>
    </PageWithToc>
  )
}
