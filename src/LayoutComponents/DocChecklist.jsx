import { useCallback, useId, useState } from 'react'

function CheckIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.5 8.5 6.5 11.5 12.5 4.5" />
    </svg>
  )
}

/**
 * Interactive checkbox checklist for doc pages (contribution gates, pre-ship checks, etc.).
 * Checkboxes use sharp corners and arvo-color-s-theme / i-inverse when checked.
 *
 * @param {Object} props
 * @param {string[]} props.items
 * @param {string} [props.completionMessage] - Shown below the list
 */
export default function DocChecklist({ items, completionMessage }) {
  const baseId = useId()
  const [checked, setChecked] = useState(() => new Set())

  const toggle = useCallback((index) => {
    setChecked((prev) => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }, [])

  const allChecked = items.length > 0 && checked.size === items.length

  return (
    <div
      className="border p-5 dark:border-neutral-700"
      data-arvo-card="light"
      role="group"
      aria-label="Checklist"
    >
      <ul className="m-0 list-none space-y-3 p-0">
        {items.map((label, index) => {
          const isChecked = checked.has(index)
          const inputId = `${baseId}-${index}`
          return (
            <li key={label}>
              <label
                htmlFor={inputId}
                className={`flex cursor-pointer items-start gap-3 text-sm leading-relaxed transition-colors ${
                  isChecked
                    ? 'text-arvo-light-secondary/80 line-through dark:text-neutral-500'
                    : 'text-arvo-light-secondary dark:text-neutral-400'
                }`}
              >
                <input
                  id={inputId}
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggle(index)}
                  className="peer sr-only"
                />
                <span
                  className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-none border transition-colors peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-1 peer-focus-visible:outline-[var(--arvo-color-b-theme-focus)]"
                  style={{
                    borderColor: isChecked ? 'transparent' : 'var(--arvo-color-b-form)',
                    backgroundColor: isChecked ? 'var(--arvo-color-s-theme)' : 'transparent',
                  }}
                  aria-hidden
                >
                  <CheckIcon
                    className={`h-3 w-3 transition-opacity ${
                      isChecked ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ color: 'var(--arvo-color-i-inverse)' }}
                  />
                </span>
                <span>{label}</span>
              </label>
            </li>
          )
        })}
      </ul>
      {completionMessage && (
        <p
          className={`mb-0 mt-5 text-sm font-medium ${
            allChecked
              ? 'text-arvo-light-primary dark:text-white'
              : 'text-arvo-light-secondary dark:text-neutral-400'
          }`}
        >
          {completionMessage}
        </p>
      )}
    </div>
  )
}
