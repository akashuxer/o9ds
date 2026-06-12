import DocChecklist from '../../LayoutComponents/DocChecklist'
import DocTable from '../../LayoutComponents/DocTable'
import DocSection, {
  DocCallout,
  DocList,
  DocParagraph,
  DocStrong,
} from '../../LayoutComponents/DocSection'
import {
  DESIGNER_CONTRIBUTION_COLUMNS,
  DESIGNER_CHECKLIST_ITEMS,
  DESIGNER_CONTRIBUTIONS,
  DESIGNER_WORKFLOW_COLUMNS,
  DESIGNER_WORKFLOWS,
} from './contributeData'
import { FeedbackCard } from './contributeShared'

export default function ContributeDesignersTab() {
  return (
    <div className="space-y-12">
      <DocParagraph>
        Arvo grows through real product needs, shared UX thinking, and reusable patterns. You do not need to write
        code to contribute. Whether you want to improve an existing component, propose a new interaction, identify
        inconsistencies, improve accessibility, or share a product use case — this guide explains how designers can
        contribute to Arvo.
      </DocParagraph>

      <DocSection id="designer-ways-to-contribute" title="Ways to contribute">
        <DocParagraph>Anyone can contribute, regardless of team or experience level.</DocParagraph>
        <DocParagraph>Choose the path based on what you want to improve.</DocParagraph>
        <DocTable
          columns={DESIGNER_CONTRIBUTION_COLUMNS}
          rows={DESIGNER_CONTRIBUTIONS}
          highlightFirstColumnIdentifier
        />
      </DocSection>

      <DocSection id="designer-quick-contribution" title="Quick contribution (5 minutes)">
        <DocParagraph>Most contributions start here. You do not need a polished proposal.</DocParagraph>
        <DocParagraph>Use the feedback form to:</DocParagraph>
        <DocList
          items={[
            'Request a new feature',
            'Suggest a component enhancement',
            'Share a product use case',
            'Report UX inconsistencies',
            'Propose interaction improvements',
            'Raise accessibility concerns',
            'Share ideas or opportunities',
          ]}
        />
        <DocParagraph>Helpful things to include:</DocParagraph>
        <DocList
          items={[
            'Screenshot',
            'Figma link',
            'Workflow recording',
            'User pain point',
            'Requirements',
            'Product context',
          ]}
        />
        <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white mt-6">What makes good feedback?</h3>
        <DocList
          items={[
            <span key="avoid">Instead of: &ldquo;Need a new component&rdquo;</span>,
            <span key="prefer">
              Try: &ldquo;Users struggle to compare selections quickly in this workflow, causing repeated
              navigation.&rdquo;
            </span>,
          ]}
        />
        <DocParagraph>Focus on the problem first.</DocParagraph>
        <div className="mt-6">
          <FeedbackCard
            title="Open the feedback form"
            description="Share feedback, ideas, and product use cases in minutes — no polished proposal required."
          />
        </div>
      </DocSection>

      <DocSection id="designer-before-proposing" title="Before proposing something new">
        <DocParagraph>
          Before requesting a new component or interaction, check whether Arvo already solves the problem.
        </DocParagraph>
        <DocParagraph>Ask these questions:</DocParagraph>

        <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white mt-6">
          1. Does something already exist?
        </h3>
        <DocParagraph>Check:</DocParagraph>
        <DocList
          items={[
            'Existing components',
            'Variants',
            'Properties',
            'Composition patterns',
            'UX guidelines',
          ]}
        />
        <DocParagraph>Sometimes the solution already exists through composition.</DocParagraph>
        <DocCallout tone="note" title="Example">
          Instead of creating a new &ldquo;Dropdown Action Button&rdquo;, you may already have{' '}
          <DocStrong>Button + Action Menu</DocStrong>, <DocStrong>Button + HybridPopover</DocStrong>, or{' '}
          <DocStrong>Button + Date Picker</DocStrong>. Prefer extension over duplication.
        </DocCallout>

        <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white mt-6">2. Is this reusable?</h3>
        <DocParagraph>Arvo is built for reusable platform patterns.</DocParagraph>
        <DocParagraph>Good contributions solve:</DocParagraph>
        <DocList items={['Multiple workflows', 'Multiple products', 'Repeated problems']} />
        <DocParagraph>Avoid solutions for:</DocParagraph>
        <DocList items={['One screen', 'One product edge case', 'One-off customization']} />
        <DocParagraph>A helpful rule: Would other teams realistically use this?</DocParagraph>

        <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white mt-6">
          3. What user problem does this solve?
        </h3>
        <DocParagraph>Start with the problem.</DocParagraph>
        <DocList
          items={[
            <span key="avoid">Avoid: &ldquo;Need a new timeline component.&rdquo;</span>,
            <span key="better">
              Better: &ldquo;Users cannot quickly compare progress across multiple stages without opening multiple
              screens.&rdquo;
            </span>,
          ]}
        />
        <DocParagraph>Focus on:</DocParagraph>
        <DocList items={['User pain point', 'Current friction', 'Existing workaround', 'Expected improvement']} />
      </DocSection>

      <DocSection id="designer-workflows" title="Contribution workflows">
        <DocParagraph>Choose the workflow that matches your need.</DocParagraph>
        <DocTable
          columns={DESIGNER_WORKFLOW_COLUMNS}
          rows={DESIGNER_WORKFLOWS}
          highlightFirstColumnIdentifier
        />
      </DocSection>

      <DocSection id="designer-component-enhancement" title="Component enhancement">
        <DocParagraph>Use when you want to improve an existing component.</DocParagraph>
        <DocParagraph>Examples:</DocParagraph>
        <DocList
          items={[
            'New variant',
            'New size',
            'Additional property',
            'New interaction behavior',
            'Missing state',
          ]}
        />
        <DocCallout tone="note" title="Good enhancement">
          Add horizontal orientation to Empty State for dashboard layouts.
        </DocCallout>
        <DocCallout tone="note" title="Poor enhancement">
          Create another Empty State component. Prefer extending existing components where possible.
        </DocCallout>
      </DocSection>

      <DocSection id="designer-new-component" title="New component proposal">
        <DocParagraph>Use when no existing component or composition solves the problem.</DocParagraph>
        <DocParagraph>Before proposing, ask:</DocParagraph>
        <DocList
          items={[
            <span key="comp">
              <DocStrong>Can composition solve this?</DocStrong> Can existing components work together?
            </span>,
            <span key="reuse">
              <DocStrong>Is it reusable?</DocStrong> Will multiple workflows benefit?
            </span>,
            <span key="platform">
              <DocStrong>Is this platform-wide?</DocStrong> Or is it specific to one product team?
            </span>,
          ]}
        />
        <DocParagraph>A new component should solve:</DocParagraph>
        <DocList items={['Repeated workflows', 'Shared product needs', 'Consistent interaction patterns']} />
      </DocSection>

      <DocSection id="designer-pattern" title="Pattern contribution">
        <DocParagraph>Sometimes the issue is not a component — it is a repeated workflow pattern.</DocParagraph>
        <DocParagraph>Examples:</DocParagraph>
        <DocList
          items={[
            'Nested overlay behavior',
            'Bulk selection',
            'Progressive disclosure',
            'Loading experience',
            'Empty state behavior',
            'Inline actions',
          ]}
        />
        <DocParagraph>Patterns help teams build consistently.</DocParagraph>
      </DocSection>

      <DocSection id="designer-accessibility" title="Accessibility contribution">
        <DocParagraph>Accessibility feedback is always valuable.</DocParagraph>
        <DocParagraph>Examples:</DocParagraph>
        <DocList
          items={[
            'Focus issues',
            'Keyboard traps',
            'Missing screen reader announcement',
            'Poor contrast',
            'Too many tab stops',
            'Interaction confusion',
          ]}
        />
        <DocParagraph>Helpful details:</DocParagraph>
        <DocList
          items={[
            <span key="current">
              <DocStrong>Current behavior:</DocStrong> What happens today?
            </span>,
            <span key="expected">
              <DocStrong>Expected behavior:</DocStrong> What should happen?
            </span>,
            <span key="why">
              <DocStrong>Why it matters:</DocStrong> What usability or accessibility issue exists?
            </span>,
          ]}
        />
      </DocSection>

      <DocSection id="designer-documentation" title="Documentation contribution">
        <DocParagraph>Help improve:</DocParagraph>
        <DocList
          items={[
            'Usage guidance',
            'Do / Don&apos;t examples',
            'Accessibility notes',
            'Edge cases',
            'Naming clarity',
            'UX rationale',
          ]}
        />
        <DocParagraph>Good documentation reduces misuse and rework.</DocParagraph>
      </DocSection>

      <DocSection id="designer-principles" title="Contribution principles">
        <DocParagraph>Every contribution should follow these principles.</DocParagraph>

        <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white mt-4">Reuse over reinvention</h3>
        <DocParagraph>Prefer extending existing systems before creating something new.</DocParagraph>

        <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white mt-4">Accessibility by default</h3>
        <DocParagraph>Consider:</DocParagraph>
        <DocList
          items={[
            'Keyboard navigation',
            'Screen readers',
            'Focus behavior',
            'Reduced motion',
            'Dense enterprise layouts',
          ]}
        />

        <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white mt-4">Consistency over novelty</h3>
        <DocParagraph>
          Arvo prioritizes predictable experiences. Avoid interactions that feel different without strong UX value.
        </DocParagraph>

        <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white mt-4">Solve problems, not screens</h3>
        <DocParagraph>Think reusable workflows.</DocParagraph>
        <DocList
          items={[
            <span key="avoid">Instead of: &ldquo;This page needs X&rdquo;</span>,
            <span key="think">
              Think: &ldquo;Users repeatedly struggle with Y across workflows&rdquo;
            </span>,
          ]}
        />
      </DocSection>

      <DocSection id="designer-checklist" title="Contribution checklist">
        <DocParagraph>Before submitting, ask:</DocParagraph>
        <DocChecklist
          items={DESIGNER_CHECKLIST_ITEMS}
          completionMessage="If yes — submit your contribution."
        />
      </DocSection>

      <DocSection id="designer-need-help" title="Need help first?">
        <DocParagraph>Not sure whether your idea should be:</DocParagraph>
        <DocList
          items={[
            'A new component',
            'A component enhancement',
            'A UX pattern',
            'An accessibility fix',
            'Documentation improvement',
          ]}
        />
        <DocParagraph>Start with the feedback form.</DocParagraph>
        <DocParagraph>
          Even rough ideas are welcome — strong systems grow through shared product thinking.
        </DocParagraph>
        <div className="mt-6">
          <FeedbackCard />
        </div>
      </DocSection>
    </div>
  )
}
