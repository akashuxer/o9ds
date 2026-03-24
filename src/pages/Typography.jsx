import PageHeader from '../LayoutComponents/PageHeader'
import PageWithToc from '../LayoutComponents/PageWithToc'

const TYPOGRAPHY_SECTIONS = [
  { id: 'type-scale', label: 'Type Scale' },
  { id: 'font-stack', label: 'Font Stack' },
]

const typographyIcon = (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7-6v12m7-6v12" />
  </svg>
)

const typeScale = [
  { name: 'Display', class: 'text-5xl font-bold', sample: 'The quick brown fox' },
  { name: 'H1', class: 'text-4xl font-bold', sample: 'The quick brown fox' },
  { name: 'H2', class: 'text-3xl font-bold', sample: 'The quick brown fox' },
  { name: 'H3', class: 'text-2xl font-semibold', sample: 'The quick brown fox' },
  { name: 'H4', class: 'text-xl font-semibold', sample: 'The quick brown fox' },
  { name: 'Body Large', class: 'text-lg', sample: 'The quick brown fox jumps over the lazy dog.' },
  { name: 'Body', class: 'text-base', sample: 'The quick brown fox jumps over the lazy dog.' },
  { name: 'Body Small', class: 'text-sm', sample: 'The quick brown fox jumps over the lazy dog.' },
  { name: 'Caption', class: 'text-xs', sample: 'The quick brown fox jumps over the lazy dog.' },
]

export default function Typography() {
  return (
    <PageWithToc sections={TYPOGRAPHY_SECTIONS}>
    <div className="space-y-12">
      <PageHeader
        title="Typography"
        description="Built on :o9 Sans — a Swiss-inspired grotesque designed for high contrast hierarchies and clear visual communication. Using DM Sans as a web fallback."
        icon={typographyIcon}
        descClassName="text-lg"
      />

      <section id="type-scale">
        <h2 className="text-2xl font-bold mb-6 text-o9ds-light-primary dark:text-white">Type Scale</h2>
        <div className="space-y-8">
          {typeScale.map(({ name, class: cls, sample }) => (
            <div key={name} className="border-b border-o9ds-light-border dark:border-neutral-700 pb-6 last:border-0">
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-500 mb-2 font-mono">{name}</p>
              <p className={`${cls} text-o9ds-light-primary dark:text-white`}>{sample}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="font-stack">
        <h2 className="text-2xl font-bold mb-6 text-o9ds-light-primary dark:text-white">Font Stack</h2>
        <div className=" border border-o9ds-light-border dark:border-neutral-700 bg-o9ds-light-surface dark:bg-neutral-800/50 p-6 space-y-4">
          <div>
            <p className="text-sm text-o9ds-light-secondary dark:text-neutral-500 font-mono">font-sans</p>
            <p className="text-lg font-sans text-o9ds-light-primary dark:text-white">DM Sans, system-ui, sans-serif</p>
          </div>
          <div>
            <p className="text-sm text-o9ds-light-secondary dark:text-neutral-500 font-mono">font-mono</p>
            <p className="text-lg font-mono text-o9ds-light-primary dark:text-neutral-300">JetBrains Mono, ui-monospace, monospace</p>
          </div>
        </div>
      </section>
    </div>
    </PageWithToc>
  )
}
