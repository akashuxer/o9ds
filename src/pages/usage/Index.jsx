import { Link } from 'react-router-dom'
import PageHeader from '../../LayoutComponents/PageHeader'

const TILES = [
  { path: '/usage/public-api', title: 'Public API & imports', desc: 'Allowed entry points per @arvo/* package; banned deep imports.' },
  { path: '/usage/components', title: 'Component contract', desc: 'Props, options, methods, events, controlled vs uncontrolled state.' },
  { path: '/usage/styling', title: 'Styling & theming', desc: 'Tokens, CSS variables, BEM rules, override safety.' },
  { path: '/usage/composition', title: 'Composition & extension', desc: 'Wrappers, providers, parent loading, anti-fork rules.' },
  { path: '/usage/accessibility', title: 'Accessibility contract', desc: 'Required ARIA, focus, labels, keyboard expectations.' },
  { path: '/usage/testing', title: 'Testing discipline', desc: 'Public-behavior testing patterns and selector rules.' },
  { path: '/usage/versioning', title: 'Versioning & upgrades', desc: 'Lockstep semver and the upgrade checklist.' },
  { path: '/usage/anti-patterns', title: 'Anti-patterns', desc: 'The 12 patterns that break upgrades.' },
  { path: '/usage/checklist', title: 'PR checklist', desc: 'Reviewer checklist plus per-component customization matrix.' },
]

const PRINCIPLES = [
  { title: 'Contract-first consumption', body: 'Consume only documented surfaces — components, props, methods, events, tokens, mixins. Anything not listed in the docs is private.' },
  { title: 'Black-box components', body: 'Treat every O9* as a black box. Pass props/options in, listen for events/callbacks out. Never reach in.' },
  { title: 'Token-first styling', body: 'All visual customization goes through tokens or per-component CSS variables. No hardcoded hex codes, no !important, no internal selector overrides.' },
  { title: 'Behavior through APIs', body: 'State changes use the public method/option/event surface. Never simulate state by toggling internal classes or dispatching synthetic internal events.' },
  { title: 'Test public behavior', body: 'Tests assert what users see and do — visible labels, getByRole, aria-*. Not internal markup, classnames, or animation timing.' },
  { title: 'Upgrade-aware adoption', body: 'Every consuming team owns its compatibility testing. Read the changeset for every release. Run regression suites before adopting.' },
]

const QUICK_CHECK = [
  'Am I importing only from @arvo/<pkg> top-level (or a documented sub-export like @arvo/js/plugin, @arvo/styles/css, @arvo/tokens/scss)?',
  'Am I using only documented props/options/methods/events for the component?',
  'Am I styling only through documented --arvo-* CSS variables, tokens, or composition slots?',
  'Am I avoiding .arvo-* internal selector overrides, !important, and internal DOM assumptions?',
  'Am I preserving the accessibility wiring shown in the component docs page?',
  'Are my tests based on roles, labels, and visible behavior rather than arvo-* classnames?',
  'Would this still work if @arvo/* swapped its internal markup or state model in the next minor release?',
]

export default function UsageIndex() {
  return (
    <div className="space-y-12 max-w-6xl">
      <PageHeader
        title="Usage Standards"
        description="The canonical contract between @arvo/* and the applications consuming it. Every guideline here exists to keep your application upgrade-safe across @arvo/* releases."
        icon={
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        }
      />

      <section className="border-l-4 border-l-[#010101] dark:border-l-white pl-4 pr-4 py-3 bg-arvo-light-surface dark:bg-neutral-800/40">
        <p className="text-sm m-0 text-arvo-light-secondary dark:text-neutral-300 leading-relaxed">
          <strong className="text-arvo-light-primary dark:text-white font-semibold">If you read one rule:</strong>{' '}
          Only consume what <code data-arvo-inline-code className="px-1 py-0.5">@arvo/*</code> explicitly exposes. Never depend on how it happens to work internally today.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-arvo-light-primary dark:text-white">Why this exists</h2>
        <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
          <code data-arvo-inline-code className="px-1 py-0.5">@arvo/*</code> is published as a <strong className="font-medium text-arvo-light-primary dark:text-white">lockstep</strong> version set across eight packages
          (<code data-arvo-inline-code className="px-1 py-0.5">@arvo/react</code>, <code data-arvo-inline-code className="px-1 py-0.5">@arvo/js</code>, <code data-arvo-inline-code className="px-1 py-0.5">@arvo/core</code>,
          {' '}<code data-arvo-inline-code className="px-1 py-0.5">@arvo/styles</code>, <code data-arvo-inline-code className="px-1 py-0.5">@arvo/tokens</code>, <code data-arvo-inline-code className="px-1 py-0.5">@arvo/assets</code>,
          {' '}<code data-arvo-inline-code className="px-1 py-0.5">@arvo/utils</code>, <code data-arvo-inline-code className="px-1 py-0.5">@arvo/test-utils</code>). When one is bumped, all consumers move together. That model only works
          if every consuming app stays inside the public contract: documented components and props, methods, events, tokens, CSS variables, composition patterns, and upgrade paths.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-arvo-light-primary dark:text-white">The six enforcement principles</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map(({ title, body }, i) => (
            <div key={title} className="border p-4 dark:border-neutral-700" data-arvo-card="light">
              <p className="text-xs font-semibold uppercase tracking-wider text-arvo-light-secondary dark:text-neutral-500 m-0 mb-1">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white m-0 mb-2">{title}</h3>
              <p className="text-sm text-arvo-light-secondary dark:text-neutral-400 leading-relaxed m-0">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-arvo-light-primary dark:text-white">How this section is organized</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TILES.map(({ path, title, desc }) => (
            <Link
              key={path}
              to={path}
              className="group block border p-5 transition-colors hover:border-arvo-light-primary dark:hover:border-white"
              data-arvo-card="light"
            >
              <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white m-0 mb-2 group-hover:underline">
                {title}
              </h3>
              <p className="text-sm text-arvo-light-secondary dark:text-neutral-400 leading-relaxed m-0">{desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-arvo-light-primary dark:text-white">Quick "is this safe?" checklist</h2>
        <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
          Before merging any <code data-arvo-inline-code className="px-1 py-0.5">@arvo/*</code> usage, ask:
        </p>
        <ol className="list-decimal pl-5 space-y-2 text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
          {QUICK_CHECK.map((q, i) => <li key={i}>{q}</li>)}
        </ol>
        <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
          If any answer is "no", you are depending on private implementation detail. Rework, or open a request with the design system team for a supported extension point.
        </p>
      </section>
    </div>
  )
}
