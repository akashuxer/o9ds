import { useTheme } from '../../context/ThemeContext'
import CodeBlock from '../../LayoutComponents/CodeBlock'

/** Lightweight bordered table for inline reference data (matching site doc tables). */
export function SimpleTable({ headers, rows, dense = false }) {
  const { theme } = useTheme()
  const isLight = theme === 'light'
  const border = isLight ? '#E5E5E5' : '#404040'
  const headBg = isLight ? '#FAFAFA' : 'rgba(23,23,23,0.6)'

  return (
    <div className="overflow-x-auto border" style={{ borderColor: border }}>
      <table className="w-full border-collapse text-sm">
        <thead style={{ backgroundColor: headBg }}>
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                className={`text-left font-semibold text-arvo-light-primary dark:text-white ${
                  dense ? 'px-3 py-2' : 'px-4 py-3'
                }`}
                style={{ borderBottom: `1px solid ${border}` }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r} style={r < rows.length - 1 ? { borderBottom: `1px solid ${border}` } : undefined}>
              {row.map((cell, c) => (
                <td
                  key={c}
                  className={`align-top text-arvo-light-secondary dark:text-neutral-300 ${
                    dense ? 'px-3 py-2' : 'px-4 py-3'
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/** Reusable prompt card: title + meta line + CodeBlock + optional notes. */
export function PromptCard({ title, useCase, tokens, savings, prompt, notes }) {
  return (
    <div className="border border-arvo-light-border dark:border-neutral-700 p-5 space-y-3">
      <div className="space-y-1">
        <h4 className="text-base font-semibold text-arvo-light-primary dark:text-white m-0">{title}</h4>
        {useCase && (
          <p className="text-sm text-arvo-light-secondary dark:text-neutral-400 m-0 leading-relaxed">{useCase}</p>
        )}
      </div>
      {(tokens || savings) && (
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-arvo-light-secondary dark:text-neutral-400">
          {tokens && (
            <span>
              <span className="font-semibold text-arvo-light-primary dark:text-white">Expected tokens:</span> {tokens}
            </span>
          )}
          {savings && (
            <span>
              <span className="font-semibold text-arvo-light-primary dark:text-white">Savings:</span> {savings}
            </span>
          )}
        </div>
      )}
      <CodeBlock code={prompt} language="text" label="Prompt" />
      {notes && (
        <p className="text-sm text-arvo-light-secondary dark:text-neutral-400 leading-relaxed m-0">{notes}</p>
      )}
    </div>
  )
}

/** Two-column "Do / Don't" comparison strip used in optimization sections. Pass stacked for single-column layout (full-width lists). */
export function DoDontPair({
  doTitle = 'Do',
  dontTitle = "Don't",
  doItems,
  dontItems,
  stacked = false,
}) {
  return (
    <div className={stacked ? 'grid grid-cols-1 gap-4' : 'grid gap-4 md:grid-cols-2'}>
      <div className="border border-arvo-light-border dark:border-neutral-700 p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-arvo-light-primary dark:text-white mb-2">
          {doTitle}
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
          {doItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="border border-arvo-light-border dark:border-neutral-700 p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-arvo-light-primary dark:text-white mb-2">
          {dontTitle}
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
          {dontItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/** Stat row for KPI-style numbers. */
export function StatGrid({ stats }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s, i) => (
        <div key={i} className="border border-arvo-light-border dark:border-neutral-700 p-4">
          <p className="text-2xl font-bold text-arvo-light-primary dark:text-white m-0 leading-tight">{s.value}</p>
          <p className="text-xs uppercase tracking-wider text-arvo-light-secondary dark:text-neutral-400 mt-2 m-0">
            {s.label}
          </p>
          {s.hint && (
            <p className="text-xs text-arvo-light-secondary dark:text-neutral-500 mt-1 m-0 leading-relaxed">{s.hint}</p>
          )}
        </div>
      ))}
    </div>
  )
}
