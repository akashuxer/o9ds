// Simple SVG icons in o9ds style — geometric, minimal
const icons = [
  {
    name: 'Arrow Right',
    svg: <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />,
  },
  {
    name: 'Check',
    svg: <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L19 7" />,
  },
  {
    name: 'Close',
    svg: <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />,
  },
  {
    name: 'Search',
    svg: <><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" fill="none" /><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M21 21l-4.35-4.35" /></>,
  },
  {
    name: 'Settings',
    svg: <><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none" /><path stroke="currentColor" strokeWidth="2" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></>,
  },
  {
    name: 'User',
    svg: <><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" fill="none" /><path stroke="currentColor" strokeWidth="2" d="M4 20c0-4 4-6 8-6s8 2 8 6" /></>,
  },
  {
    name: 'Calendar',
    svg: <><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none" /><path stroke="currentColor" strokeWidth="2" d="M3 10h18M8 2v4M16 2v4" /></>,
  },
  {
    name: 'Chart',
    svg: <><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 18v-6M9 18V6M14 18v-4M19 18V10" /></>,
  },
]

export default function Icons() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="group flex items-center gap-2 text-[30px] font-bold mb-4 text-o9ds-light-primary dark:text-white">
          <span className="flex h-8 w-8 items-center justify-center bg-o9ds-light-surface dark:bg-neutral-700" data-o9ds-avatar data-o9ds-avatar-header>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343L12.657 5.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </span>
          Iconography
        </h1>
        <p className="text-lg text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl">
          Geometric, minimal iconography that complements the o9ds aesthetic. 
          Stroke-based, 24×24 viewbox.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-o9ds-light-primary dark:text-white">Icon Set</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {icons.map(({ name, svg }) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center border border-o9ds-light-border dark:border-neutral-700 p-6 hover:border-o9ds-light-primary dark:hover:border-neutral-600 transition-colors"
            >
              <div className="h-12 w-12 text-o9ds-light-primary dark:text-white mb-3 [&>svg]:w-full [&>svg]:h-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  {svg}
                </svg>
              </div>
              <p className="text-sm font-medium text-o9ds-light-primary dark:text-white">{name}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-o9ds-light-primary dark:text-white">Product Icons</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-6">Use product colors for context-specific icons.</p>
        <div className="flex flex-wrap gap-8">
          {[
            { color: '#0037ff', label: 'Retail' },
            { color: '#7433cc', label: 'Supply Chain' },
            { color: '#00c278', label: 'IBP' },
            { color: '#ff7311', label: 'Demand' },
            { color: '#ff1e39', label: 'RGM' },
          ].map(({ color, label }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="h-10 w-10 flex items-center justify-center text-o9-white" style={{ backgroundColor: color }}>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-sm font-medium text-o9ds-light-primary dark:text-white">{label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
