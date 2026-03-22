import { useState, useRef } from 'react'
import CodeBlock from '../components/CodeBlock'

const variants = [
  { name: 'Primary', variant: 'default', className: 'bg-o9ds-light-surface dark:bg-white text-o9ds-light-primary dark:text-black hover:bg-o9ds-light-border dark:hover:bg-neutral-200' },
  { name: 'Secondary', variant: 'secondary', className: 'bg-o9ds-light-primary dark:bg-neutral-700 text-white hover:opacity-90 dark:hover:bg-neutral-600' },
  { name: 'Outline', variant: 'outline', className: 'border border-o9ds-light-border dark:border-neutral-500 bg-transparent text-o9ds-light-primary dark:text-white hover:bg-o9ds-light-surface dark:hover:bg-neutral-800' },
  { name: 'Ghost', variant: 'ghost', className: 'bg-transparent text-o9ds-light-primary dark:text-white hover:bg-o9ds-light-surface dark:hover:bg-neutral-800' },
  { name: 'Destructive', variant: 'destructive', className: 'bg-red-600 text-white hover:bg-red-500' },
]

const buttonTabs = ['Overview', 'Accessibility', 'Code']

export default function Button() {
  const [activeTab, setActiveTab] = useState('Overview')
  const tabListRef = useRef(null)

  const handleTabKeyDown = (e) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return
    const idx = buttonTabs.indexOf(activeTab)
    if (idx < 0) return
    let next
    if (e.key === 'ArrowRight') next = (idx + 1) % buttonTabs.length
    else next = (idx - 1 + buttonTabs.length) % buttonTabs.length
    e.preventDefault()
    setActiveTab(buttonTabs[next])
    setTimeout(() => tabListRef.current?.children?.[next]?.focus(), 0)
  }

  return (
    <div className="max-w-4xl space-y-8">
      <section>
        <h1 className="group flex items-center gap-2 text-[30px] font-bold text-o9ds-light-primary dark:text-white mb-4">
          <span className="flex h-8 w-8 items-center justify-center bg-o9ds-light-surface dark:bg-neutral-700" data-o9ds-avatar data-o9ds-avatar-header>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
          </span>
          Button
        </h1>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed">
          A versatile button component that triggers actions or navigates users through the application.
          Supports multiple variants, sizes, and states to provide clear visual hierarchy and excellent user experience.
        </p>

        <div
          ref={tabListRef}
          role="tablist"
          className="mt-6 flex gap-6 border-b border-o9ds-light-border dark:border-neutral-700"
          data-o9ds-tabs
          onKeyDown={handleTabKeyDown}
        >
          {buttonTabs.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              tabIndex={activeTab === tab ? 0 : -1}
              onClick={() => setActiveTab(tab)}
              data-o9ds-tab-active={activeTab === tab ? '' : undefined}
              className={`pb-3 text-sm font-medium transition-colors border-b-2 ${
                activeTab === tab
                  ? 'border-o9ds-light-primary dark:border-white text-o9ds-light-primary dark:text-white'
                  : 'border-transparent text-o9ds-light-secondary hover:text-o9ds-light-primary dark:text-neutral-400 dark:hover:text-neutral-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {activeTab === 'Overview' && (
        <>
          <section>
            <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white mb-4">Usage Guidelines</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold text-emerald-400 mb-4">Do</h3>
                <ul className="space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                  <li>• Use primary buttons for main actions.</li>
                  <li>• Keep button text concise and action-oriented.</li>
                  <li>• Provide adequate touch targets (minimum 44px).</li>
                  <li>• Use consistent button placement.</li>
                </ul>
              </div>
              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold text-red-400 mb-4">Don't</h3>
                <ul className="space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                  <li>• Use too many primary buttons in one view.</li>
                  <li>• Make buttons too small for touch interaction.</li>
                  <li>• Use ambiguous button labels.</li>
                  <li>• Disable buttons without explanation.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white mb-6">Variants</h2>
            <div className="flex flex-wrap gap-4 mb-8">
              {variants.map(({ name, className }) => (
                <button
                  key={name}
                  className={`px-4 py-2.5 text-sm font-medium transition-colors ${className}`}
                >
                  {name}
                </button>
              ))}
            </div>

            <CodeBlock
              code={`<Button variant="default">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>`}
              label="button-variants.jsx"
            />

          </section>
        </>
      )}

      {activeTab === 'Accessibility' && (
        <section>
          <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-6">
            Buttons are focusable, keyboard navigable, and support proper ARIA attributes for screen readers.
          </p>
          <ul className="space-y-2 text-o9ds-light-secondary dark:text-neutral-400">
            <li>• Use <code className="px-1.5 py-0.5 font-mono text-sm" data-o9ds-inline-code>role="button"</code> when using non-button elements</li>
            <li>• Ensure focus visible states for keyboard users</li>
            <li>• Minimum 44×44px touch target for mobile</li>
          </ul>
        </section>
      )}

      {activeTab === 'Code' && (
        <section>
          <CodeBlock
            code={`import { Button } from '@o9ds/react'

<Button variant="default" size="md">
  Primary
</Button>`}
          />
        </section>
      )}
    </div>
  )
}
