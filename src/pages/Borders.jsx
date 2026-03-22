import CodeBlock from '../components/CodeBlock'

export default function Borders() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="group flex items-center gap-2 text-[30px] font-bold mb-4 text-o9ds-light-primary dark:text-white">
          <span className="flex h-8 w-8 items-center justify-center bg-o9ds-light-surface dark:bg-neutral-700" data-o9ds-avatar data-o9ds-avatar-header>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </span>
          Borders & Radius
        </h1>
        <p className="text-lg text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl">
          o9ds follows a <strong className="text-o9ds-light-primary dark:text-white">0 radius policy</strong> — all UI elements use sharp corners with no border radius.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-o9ds-light-primary dark:text-white">Policy</h2>
        <div>
          <p className="text-o9ds-light-secondary dark:text-neutral-300 mb-4">
            Border radius is set to 0 across the design system. Buttons, inputs, cards, badges, and all components use sharp (90°) corners only.
          </p>
          <CodeBlock
            code={`/* All elements */
border-radius: 0;

/* Tailwind: borderRadius plugin disabled */`}
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-o9ds-light-primary dark:text-white">Border Widths</h2>
        <div className="space-y-4">
          {[
            { token: 'border', width: '1px', usage: 'Default borders' },
            { token: 'border-2', width: '2px', usage: 'Emphasis' },
          ].map(({ token, width, usage }) => (
            <div key={token} className="flex items-center gap-6">
              <div className="w-24 font-mono text-sm text-o9ds-light-secondary dark:text-neutral-500">{token}</div>
              <div className="w-16 font-mono text-sm text-o9ds-light-secondary dark:text-neutral-400">{width}</div>
              <div className="h-12 w-32 border border-o9ds-light-primary dark:border-white" style={token === 'border-2' ? { borderWidth: '2px' } : undefined} />
              <span className="text-sm text-o9ds-light-secondary dark:text-neutral-500">{usage}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
