import DosDontCards from '../../../LayoutComponents/DosDontCards'
import GrayBgCard from '../../../LayoutComponents/GrayBgCard'
import DocSection, { DocCallout, DocCode, DocList, DocParagraph, DocStrong, DocSubsection } from '../../../LayoutComponents/DocSection'
import { KeyboardTable, AriaTable, SimpleTable, LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'

/**
 * @typedef {import('../../../data/expertDocContent').ExpertDocContent} ExpertDocContent
 */

/**
 * @param {{ content?: ExpertDocContent, children?: import('react').ReactNode }} props
 */
export function ExpertOverviewTab({ content, children }) {
  if (!content) return null

  return (
    <div className="space-y-12">
      {content.purpose?.length ? (
        <DocSection id="purpose" title="Purpose">
          {content.purpose.map((p, i) => (
            <DocParagraph key={i}>{p}</DocParagraph>
          ))}
        </DocSection>
      ) : null}

      {content.anatomy ? (
        <DocSection id="anatomy" title="Anatomy">
          {content.anatomy.paragraphs?.map((p, i) => (
            <DocParagraph key={i}>{p}</DocParagraph>
          ))}
          {content.anatomy.parts?.length ? (
            <DocList
              items={content.anatomy.parts.map(({ name, desc }) => (
                <span key={name}>
                  <DocStrong>{name}</DocStrong> — {desc}
                </span>
              ))}
            />
          ) : null}
          {content.anatomy.demo ? <LiveReference>{content.anatomy.demo}</LiveReference> : null}
        </DocSection>
      ) : null}

      {content.behavior ? (
        <DocSection id="behavior" title="Expand behavior">
          <ul className="list-disc pl-5 space-y-2 text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
            {content.behavior.map(({ name, desc }) => (
              <li key={name}>
                <DocStrong>{name}</DocStrong> — {desc}
              </li>
            ))}
          </ul>
        </DocSection>
      ) : null}

      {content.modes ? (
        <DocSection id="modes" title="Selection modes">
          <DocList
            items={content.modes.map(({ name, desc }) => (
              <span key={name}>
                <DocStrong>{name}</DocStrong> — {desc}
              </span>
            ))}
          />
        </DocSection>
      ) : null}

      {content.variants ? (
        <DocSection id="variants" title="Variants">
          {content.variants.intro ? <DocParagraph>{content.variants.intro}</DocParagraph> : null}
          {content.variants.rows?.length ? (
            <SimpleTable columns={content.variants.columns ?? ['Variant', 'Use when']} rows={content.variants.rows} />
          ) : null}
          {content.variants.demo ? <LiveReference>{content.variants.demo}</LiveReference> : null}
        </DocSection>
      ) : null}

      {content.states ? (
        <DocSection id="states" title="States">
          {content.states.intro ? <DocParagraph>{content.states.intro}</DocParagraph> : null}
          {content.states.rows?.length ? (
            <ul className="list-disc pl-5 space-y-2 text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
              {content.states.rows.map(([name, desc]) => (
                <li key={name}>
                  <DocStrong>{name}</DocStrong> — {desc}
                </li>
              ))}
            </ul>
          ) : null}
        </DocSection>
      ) : null}

      {content.sizes ? (
        <DocSection id="sizes" title="Sizes">
          {content.sizes.intro ? <DocParagraph>{content.sizes.intro}</DocParagraph> : null}
          {content.sizes.rows?.length ? (
            <SimpleTable
              columns={content.sizes.columns ?? ['Token', 'Height', 'Use when']}
              rows={content.sizes.rows}
            />
          ) : null}
          {content.sizes.demo ? <LiveReference>{content.sizes.demo}</LiveReference> : null}
        </DocSection>
      ) : null}

      {content.alignmentRules ? (
        <DocSection id="alignment-rules" title="Alignment rules">
          <DocList items={content.alignmentRules} />
        </DocSection>
      ) : null}

      {content.iconOnly ? (
        <DocSection id="icon-only" title="Icon-only">
          {content.iconOnly.paragraphs?.map((p, i) => (
            <DocParagraph key={i}>{p}</DocParagraph>
          ))}
          {content.iconOnly.demo ? <LiveReference>{content.iconOnly.demo}</LiveReference> : null}
        </DocSection>
      ) : null}

      {content.vsRelated ? (
        <DocSection id="vs-related" title="vs Related patterns">
          {content.vsRelated.paragraphs?.map((p, i) => (
            <DocParagraph key={i}>{p}</DocParagraph>
          ))}
          {content.vsRelated.rows?.length ? (
            <SimpleTable columns={content.vsRelated.columns ?? ['Pattern', 'Use when']} rows={content.vsRelated.rows} />
          ) : null}
        </DocSection>
      ) : null}

      {content.vsSegCtrl ? (
        <DocSection id="vs-seg-ctrl" title="Button Group vs Segmented Control">
          <DocParagraph>{content.vsSegCtrl.intro}</DocParagraph>
          {content.vsSegCtrl.rows?.length ? (
            <SimpleTable columns={['Use …', 'When the control behaves like …']} rows={content.vsSegCtrl.rows} />
          ) : null}
          {content.vsSegCtrl.callout ? (
            <DocCallout title={content.vsSegCtrl.callout.title}>{content.vsSegCtrl.callout.body}</DocCallout>
          ) : null}
        </DocSection>
      ) : null}

      {content.vsBtnGrp ? (
        <DocSection id="vs-btn-grp" title="Segmented Control vs Button Group">
          <DocParagraph>{content.vsBtnGrp.intro}</DocParagraph>
          {content.vsBtnGrp.rows?.length ? (
            <SimpleTable columns={['Use …', 'When the control behaves like …']} rows={content.vsBtnGrp.rows} />
          ) : null}
        </DocSection>
      ) : null}

      {content.contentGuidelines ? (
        <DocSection id="content-guidelines" title="Content guidelines">
          {content.contentGuidelines.intro ? <DocParagraph>{content.contentGuidelines.intro}</DocParagraph> : null}
          <DosDontCards
            stacked
            goodTitle="Good copy"
            avoidTitle="Avoid"
            goodItems={content.contentGuidelines.good ?? []}
            avoidItems={content.contentGuidelines.avoid ?? []}
          />
        </DocSection>
      ) : null}

      {content.dosDonts ? (
        <DocSection id="dos-donts" title="Dos & Don'ts">
          <DosDontCards doItems={content.dosDonts.do ?? []} dontItems={content.dosDonts.dont ?? []} />
        </DocSection>
      ) : null}

      {content.hasLiveDemo && children ? (
        <DocSection id="demo" title="Live demo">
          <LiveReference>{children}</LiveReference>
        </DocSection>
      ) : null}

      {children && !content.hasLiveDemo ? children : null}
    </div>
  )
}

/** @param {{ content?: ExpertDocContent }} props */
export function ExpertUsageTab({ content }) {
  const usage = content?.usage
  if (!usage) return null

  return (
    <div className="space-y-12">
      {usage.when?.length ? (
        <DocSection id="when" title="When to use">
          <DocList items={usage.when} />
        </DocSection>
      ) : null}

      {usage.whenNot?.length ? (
        <DocSection id="when-not" title="When not to use">
          <DocList items={usage.whenNot} />
        </DocSection>
      ) : null}

      {usage.scenarios?.length ? (
        <DocSection id="scenarios" title="Scenarios">
          <ul className="space-y-3 text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
            {usage.scenarios.map(({ title, desc }) => (
              <li key={title}>
                <DocStrong>{title}</DocStrong> — {desc}
              </li>
            ))}
          </ul>
        </DocSection>
      ) : null}

      {usage.bestPractices?.length ? (
        <DocSection id="best-practices" title="Best practices">
          <DocList items={usage.bestPractices} />
        </DocSection>
      ) : null}

      {usage.layout?.length ? (
        <DocSection id="layout" title="Layout & placement">
          <DocList items={usage.layout} />
        </DocSection>
      ) : null}

      {usage.vsBtnGrp ? (
        <DocSection id="vs-btn-grp" title="Segmented Control vs Button Group">
          <DocParagraph>{usage.vsBtnGrp.intro}</DocParagraph>
          {usage.vsBtnGrp.rows?.length ? (
            <SimpleTable columns={['Use …', 'When the control behaves like …']} rows={usage.vsBtnGrp.rows} />
          ) : null}
          {usage.vsBtnGrp.callout ? <DocCallout>{usage.vsBtnGrp.callout}</DocCallout> : null}
        </DocSection>
      ) : null}

      {usage.examples?.length ? (
        <DocSection id="examples" title="Examples">
          <ul className="space-y-3 text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
            {usage.examples.map(({ title, desc }) => (
              <li key={title}>
                <DocStrong>{title}</DocStrong> — {desc}
              </li>
            ))}
          </ul>
        </DocSection>
      ) : null}
    </div>
  )
}

/**
 * @param {{
 *   content?: ExpertDocContent,
 *   keyboard?: { key: string, action: string }[],
 *   aria?: { attr: string, when: string }[],
 * }} props
 */
export function ExpertAccessibilityTab({ content, keyboard = [], aria = [] }) {
  const a11y = content?.a11y ?? {}

  return (
    <div className="space-y-12">
      {a11y.roles?.length ? (
        <DocSection id="roles" title="Roles & live regions">
          <DocList items={a11y.roles} />
        </DocSection>
      ) : null}

      {(keyboard.length || a11y.keyboard?.length) ? (
        <DocSection id="keyboard" title="Keyboard interactions">
          <KeyboardTable rows={keyboard.length ? keyboard : a11y.keyboard} />
          {a11y.keyboardCallout ? <DocCallout>{a11y.keyboardCallout}</DocCallout> : null}
        </DocSection>
      ) : null}

      {(aria.length || a11y.aria?.length) ? (
        <DocSection id="aria" title="ARIA attributes">
          {a11y.ariaIntro ? <DocParagraph>{a11y.ariaIntro}</DocParagraph> : null}
          <AriaTable rows={aria.length ? aria : a11y.aria} />
        </DocSection>
      ) : null}

      {a11y.focus?.length ? (
        <DocSection id="focus" title="Focus">
          <DocList items={a11y.focus} />
        </DocSection>
      ) : null}

      {a11y.screenReaders?.length ? (
        <DocSection id="screen-readers" title="Screen readers">
          <DocList items={a11y.screenReaders} />
        </DocSection>
      ) : null}

      {a11y.dosDonts ? (
        <DocSection id="dos-donts-a11y" title="Accessibility dos & don'ts">
          <DosDontCards doItems={a11y.dosDonts.do ?? []} dontItems={a11y.dosDonts.dont ?? []} />
        </DocSection>
      ) : null}
    </div>
  )
}

/** Fallback when no descriptor/API is published yet. */
export function ExpertImplementationPlaceholder({ slug, label }) {
  return (
    <DocSection id="implementation" title="Implementation">
      <GrayBgCard
        title="API reference in progress"
        desc={`${label} follows Arvo design tokens and interaction patterns documented on this page. React and Vanilla JS APIs will be published here when the component ships in @arvo/react and @arvo/js.`}
      />
      <DocParagraph>
        Until then, align implementations with the Overview and Usage guidance above, reuse related primitives where noted, and validate against the Accessibility tab before release.
      </DocParagraph>
    </DocSection>
  )
}
