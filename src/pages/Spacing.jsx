import CodeBlock from '../components/CodeBlock'

const spacingScale = [
  { token: '1', value: '4px', usage: 'Tight gaps' },
  { token: '2', value: '8px', usage: 'Small padding' },
  { token: '3', value: '12px', usage: 'Default gaps' },
  { token: '4', value: '16px', usage: 'Standard padding' },
  { token: '5', value: '20px', usage: 'Medium spacing' },
  { token: '6', value: '24px', usage: 'Section padding' },
  { token: '8', value: '32px', usage: 'Large spacing' },
  { token: '10', value: '40px', usage: 'Section gaps' },
  { token: '12', value: '48px', usage: 'Page sections' },
  { token: '16', value: '64px', usage: 'Major sections' },
  { token: '24', value: '96px', usage: 'Page margins' },
]

export default function Spacing() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="group flex items-center gap-2 text-[30px] font-bold mb-4 text-o9ds-light-primary dark:text-white">
          <span className="flex h-8 w-8 items-center justify-center bg-o9ds-light-surface dark:bg-neutral-700" data-o9ds-avatar data-o9ds-avatar-header>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </span>
          Spacing
        </h1>
        <p className="text-lg text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl mt-4">
          A consistent 4px base unit for padding, margins, and gaps across layouts.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-o9ds-light-primary dark:text-white">Scale</h2>
        <div className="space-y-4">
          {spacingScale.map(({ token, value, usage }) => (
            <div key={token} className="flex items-center gap-6">
              <div className="w-20 font-mono text-sm text-o9ds-light-secondary dark:text-neutral-500">{token}</div>
              <div className="w-24 font-mono text-sm text-o9ds-light-secondary dark:text-neutral-400">{value}</div>
              <div
                className="h-8 bg-o9ds-light-border dark:bg-neutral-600"
                style={{ width: value }}
              />
              <span className="text-sm text-o9ds-light-secondary dark:text-neutral-500">{usage}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-o9ds-light-primary dark:text-white">Usage</h2>
        <CodeBlock
          code={`/* Tailwind */
p-4    /* padding: 1rem */
m-6    /* margin: 1.5rem */
gap-3  /* gap: 0.75rem */

/* CSS */
padding: var(--spacing-4);
margin: var(--spacing-8);`}
        />
      </section>
    </div>
  )
}
