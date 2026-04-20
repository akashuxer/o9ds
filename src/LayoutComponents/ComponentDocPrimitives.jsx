/**
 * Compact primitives for the component documentation pages.
 * Use alongside PageWithToc, DocTabs, CodeBlock, GrayBgCard, WhiteBgCard.
 */

export function PropsTable({ rows }) {
  return (
    <div className="border overflow-hidden dark:border-neutral-700">
      <table className="w-full text-sm">
        <thead>
          <tr className="dark:bg-neutral-800/50">
            <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Prop</th>
            <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Type</th>
            <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Default</th>
            <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Required</th>
            <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.prop} className="border-t dark:border-neutral-700">
              <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{row.prop}</td>
              <td className="py-2 px-3 font-mono text-o9ds-light-secondary dark:text-neutral-400">{row.type}</td>
              <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.default ?? '—'}</td>
              <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.required ?? 'No'}</td>
              <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function CssVarsGrid({ groups }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {groups.map(({ category, vars }) => (
        <div key={category} className="border p-4 dark:border-neutral-700" data-o9ds-card="light">
          <h3 className="text-sm font-semibold text-o9ds-light-primary dark:text-white mb-2 m-0">{category}</h3>
          <ul className="space-y-1 text-sm font-mono text-o9ds-light-secondary dark:text-neutral-400 m-0 pl-0 list-none">
            {vars.map((v) => <li key={v}>{v}</li>)}
          </ul>
        </div>
      ))}
    </div>
  )
}

export function KeyboardTable({ rows }) {
  return (
    <div className="border overflow-hidden dark:border-neutral-700">
      <table className="w-full text-sm">
        <thead>
          <tr className="dark:bg-neutral-800/50">
            <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Key</th>
            <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ key, action }) => (
            <tr key={key} className="border-t dark:border-neutral-700">
              <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{key}</td>
              <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function AriaTable({ rows }) {
  return (
    <div className="border overflow-hidden dark:border-neutral-700">
      <table className="w-full text-sm">
        <thead>
          <tr className="dark:bg-neutral-800/50">
            <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Attribute</th>
            <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">When to use</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ attr, when }) => (
            <tr key={attr} className="border-t dark:border-neutral-700">
              <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{attr}</td>
              <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{when}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function MethodsTable({ rows }) {
  return (
    <div className="border overflow-hidden dark:border-neutral-700">
      <table className="w-full text-sm">
        <thead>
          <tr className="dark:bg-neutral-800/50">
            <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Method</th>
            <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Returns</th>
            <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ method, returns, desc }) => (
            <tr key={method} className="border-t dark:border-neutral-700">
              <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{method}</td>
              <td className="py-2 px-3 font-mono text-o9ds-light-secondary dark:text-neutral-400">{returns ?? 'void'}</td>
              <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function EventsTable({ rows }) {
  return (
    <div className="border overflow-hidden dark:border-neutral-700">
      <table className="w-full text-sm">
        <thead>
          <tr className="dark:bg-neutral-800/50">
            <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Event</th>
            <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Payload</th>
            <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ event, payload, desc }) => (
            <tr key={event} className="border-t dark:border-neutral-700">
              <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{event}</td>
              <td className="py-2 px-3 font-mono text-o9ds-light-secondary dark:text-neutral-400">{payload ?? '—'}</td>
              <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function SimpleTable({ columns, rows }) {
  return (
    <div className="border overflow-hidden dark:border-neutral-700">
      <table className="w-full text-sm">
        <thead>
          <tr className="dark:bg-neutral-800/50">
            {columns.map((c) => (
              <th key={c} className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t dark:border-neutral-700">
              {row.map((cell, j) => (
                <td key={j} className={`py-2 px-3 ${j === 0 ? 'text-o9ds-light-primary dark:text-white' : 'text-o9ds-light-secondary dark:text-neutral-400'}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/** Visual reference frame for live component instances on the Overview tab. */
export function LiveReference({ children, className = '' }) {
  return (
    <div className={`border p-6 md:p-8 flex flex-wrap items-center gap-3 ${className}`} data-o9ds-doc-figure>
      {children}
    </div>
  )
}
