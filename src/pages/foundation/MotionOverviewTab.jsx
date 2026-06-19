import { useTheme } from '../../context/ThemeContext'
import DocSection, { DocCallout, DocList, DocParagraph, DocStrong } from '../../LayoutComponents/DocSection'
import CodeBlock from '../../LayoutComponents/CodeBlock'
import GrayBgCard from '../../LayoutComponents/GrayBgCard'
import MotionDurationStrip from '../../LayoutComponents/MotionDurationStrip'
import {
  MOTION_AVOID,
  MOTION_CLARITY_CHIPS,
  MOTION_LANGUAGE,
  MOTION_PRINCIPLES,
  MOTION_USE,
  MOTION_WHY_PILLARS,
} from '../../data/motionOverview'

function MotionClarityChips() {
  const { theme } = useTheme()
  const isLight = theme === 'light'

  return (
    <div
      className="flex flex-wrap gap-2 border p-4 dark:border-neutral-700"
      style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#FAFAFA' } : undefined}
    >
      {MOTION_CLARITY_CHIPS.map((chip) => (
        <span
          key={chip}
          className="px-3 py-1.5 text-sm font-medium border dark:border-neutral-600 dark:text-neutral-200"
          style={
            isLight
              ? { borderColor: '#E5E5E5', backgroundColor: '#FFFFFF', color: '#010101' }
              : { backgroundColor: '#171717' }
          }
        >
          {chip}
        </span>
      ))}
    </div>
  )
}

/** Motion & Animation — Overview tab (principles & guidance). */
export default function MotionOverviewTab() {
  return (
    <div className="space-y-10 max-w-4xl">
      <DocSection id="motion-intro" title="Introduction">
        <DocParagraph>
          Animation in Arvo makes the <DocStrong>o9 Platform UI</DocStrong> feel clear, responsive, and refined —
          immediate feedback without slowing dense workflows.
        </DocParagraph>
        <DocParagraph>
          Motion is <DocStrong>functional, not decorative</DocStrong>. It guides attention and explains relationships.
          Clarity first — delight comes from polish, not extra movement.
        </DocParagraph>
        <DocParagraph>
          The o9 Platform UI is dense: filters, panels, tables, dialogs, and notifications. Without motion, state changes
          feel abrupt. Animation connects those moments.
        </DocParagraph>
        <MotionClarityChips />
        <MotionDurationStrip />
      </DocSection>

      <DocSection id="motion-why" title="Why motion">
        <div className="grid gap-3 sm:grid-cols-2">
          {MOTION_WHY_PILLARS.map((pillar) => (
            <GrayBgCard key={pillar.title} title={pillar.title} desc={pillar.desc} bullets={pillar.examples} />
          ))}
        </div>
      </DocSection>

      <DocSection id="motion-principles" title="Principles">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {MOTION_PRINCIPLES.map((principle, index) => (
            <div
              key={principle.title}
              className="border border-arvo-light-border dark:border-neutral-700 p-4 bg-white dark:bg-transparent hover:shadow-sm transition-shadow"
            >
              <p className="text-sm font-semibold text-arvo-light-primary dark:text-white m-0 mb-1">
                <span className="text-arvo-light-secondary dark:text-neutral-500 font-mono text-xs mr-1.5">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {principle.title}
              </p>
              <p className="text-sm text-arvo-light-secondary dark:text-neutral-400 m-0 leading-relaxed">
                {principle.body}
              </p>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection id="motion-when" title="When to animate">
        <div className="grid gap-4 sm:grid-cols-2">
          <div
            className="border border-arvo-light-border dark:border-neutral-700 p-5"
            data-arvo-card="light-white"
          >
            <h3 className="text-sm font-semibold text-arvo-light-primary dark:text-white mb-3">Use motion</h3>
            <DocList items={MOTION_USE.map((item) => <>{item}</>)} />
          </div>
          <div className="border border-arvo-light-border dark:border-neutral-700 p-5 dark:bg-transparent">
            <h3 className="text-sm font-semibold text-arvo-light-primary dark:text-white mb-3">Skip motion</h3>
            <DocList items={MOTION_AVOID.map((item) => <>{item}</>)} />
          </div>
        </div>
      </DocSection>

      <DocSection id="motion-language" title="Motion language">
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {MOTION_LANGUAGE.map((item) => (
            <div
              key={item.title}
              className="border border-arvo-light-border dark:border-neutral-700 p-4 text-center hover:-translate-y-0.5 transition-transform"
            >
              <p className="text-sm font-semibold text-arvo-light-primary dark:text-white m-0">{item.title}</p>
              <p className="text-xs text-arvo-light-secondary dark:text-neutral-500 mt-1 mb-2">{item.desc}</p>
              <p className="text-xs text-arvo-light-secondary dark:text-neutral-400 m-0 leading-snug">
                {item.examples.join(' · ')}
              </p>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection id="motion-handoff" title="Design & development">
        <DocParagraph>
          Designers: describe trigger, enter/exit, and semantic pattern — avoid custom timing. Developers: use tokens
          from the <DocStrong>Tokens</DocStrong> tab, not generic transitions.
        </DocParagraph>
        <CodeBlock
          code={`transition: $arvo-motion-feedback; /* not: transition: all 0.3s ease; */`}
          label="Prefer semantic motion tokens"
        />
        <DocCallout tone="note" title="Remember">
          Motion should feel clear, fast, and stable — users notice smoother UX, not animation as a layer on top.
        </DocCallout>
      </DocSection>
    </div>
  )
}
