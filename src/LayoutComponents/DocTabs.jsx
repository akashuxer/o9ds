import { useRef, useEffect, useState } from 'react'

/**
 * Reusable tab bar for documentation pages (Overview, Usage, API, Accessibility, etc.).
 * Parent controls activeTab and passes onSelect. Handles arrow-key navigation.
 * Active tab border slides smoothly to newly clicked tab.
 */
export default function DocTabs({ tabs, activeTab, onSelect }) {
  const tabListRef = useRef(null)
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })

  const activeIdx = tabs.indexOf(activeTab)

  useEffect(() => {
    const list = tabListRef.current
    if (!list) return
    const btn = list.children[activeIdx]
    if (!btn) return
    const listRect = list.getBoundingClientRect()
    const btnRect = btn.getBoundingClientRect()
    setIndicator({
      left: btnRect.left - listRect.left,
      width: btnRect.width,
    })
  }, [activeTab, activeIdx, tabs])

  const handleKeyDown = (e) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return
    const idx = tabs.indexOf(activeTab)
    if (idx < 0) return
    const next = e.key === 'ArrowRight' ? (idx + 1) % tabs.length : (idx - 1 + tabs.length) % tabs.length
    e.preventDefault()
    onSelect(tabs[next])
    setTimeout(() => tabListRef.current?.children?.[next]?.focus(), 0)
  }

  return (
    <div
      ref={tabListRef}
      role="tablist"
      className="relative mt-6 flex gap-6 border-b border-o9ds-light-border dark:border-neutral-700"
      data-o9ds-tabs
      onKeyDown={handleKeyDown}
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          role="tab"
          aria-selected={activeTab === tab}
          tabIndex={activeTab === tab ? 0 : -1}
          onClick={() => onSelect(tab)}
          data-o9ds-tab-active={activeTab === tab ? '' : undefined}
          className={`relative z-10 pb-3 text-sm font-medium transition-colors ${
            activeTab === tab
              ? 'text-o9ds-light-primary dark:text-white'
              : 'text-o9ds-light-secondary hover:text-o9ds-light-primary dark:text-neutral-400 dark:hover:text-neutral-300'
          }`}
        >
          {tab}
        </button>
      ))}
      <span
        className="absolute -bottom-px z-20 h-0.5 bg-o9ds-light-primary dark:bg-white transition-[left,width] duration-300 ease-out"
        style={{
          left: indicator.left,
          width: indicator.width,
        }}
        aria-hidden
      />
    </div>
  )
}
