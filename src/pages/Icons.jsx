import { useState, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'
import { o9conIcons } from '../tokens/o9conIcons'
import { ICON_SIZE_TOKENS_SCSS } from '../tokens/iconTokens'
import CodeBlock from '../LayoutComponents/CodeBlock'

const tabs = ['Overview', 'o9con Gallery', 'Accessibility', 'Code']
const SIZES = [14, 16, 20, 24, 32]

function CopyIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  )
}

function CheckDoubleIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l4 4 9-9" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 16l3 3 7-7" />
    </svg>
  )
}

function O9conIconCard({ icon, size, isLight }) {
  const [copied, setCopied] = useState(false)
  const snippet = `<span class="o9con ${icon.class} o9ds-icon-${size}" aria-hidden="true"></span>`

  const handleCopy = (e) => {
    e.stopPropagation()
    navigator.clipboard.writeText(snippet).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  return (
    <div
      className="group border dark:border-neutral-700 overflow-hidden transition-all"
      style={{ borderColor: isLight ? '#E5E5E5' : undefined }}
      data-o9ds-card={isLight ? 'light-white' : 'dark'}
    >
      <div className="flex flex-col items-center p-6">
        <div className="flex items-center justify-center shrink-0" style={{ width: size, height: size, minWidth: size, minHeight: size }}>
          <span
            className={`o9con ${icon.class} o9ds-icon-${size} dark:text-white`}
            style={isLight ? { color: '#010101' } : undefined}
            aria-hidden
          />
        </div>
        <div className="mt-4 flex flex-col items-center gap-1 w-full">
          <span
            className="text-sm font-medium dark:text-white truncate text-center"
            style={isLight ? { color: '#010101' } : undefined}
          >
            {icon.name}
          </span>
          <button
            onClick={handleCopy}
            className="p-1.5 border opacity-0 group-hover:opacity-100 transition-opacity"
            style={
              copied
                ? { borderColor: '#00c278', backgroundColor: '#00c278', color: '#fff' }
                : isLight ? { borderColor: '#E5E5E5', color: '#303030' } : { borderColor: '#404040', color: '#a3a3a3' }
            }
            title="Copy code"
            aria-label="Copy icon code"
          >
            {copied ? <CheckDoubleIcon className="h-3.5 w-3.5" style={{ color: '#fff' }} /> : <CopyIcon className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Icons() {
  const [activeTab, setActiveTab] = useState('Overview')
  const [selectedSize, setSelectedSize] = useState(24)
  const [o9conSearch, setO9conSearch] = useState('')
  const tabListRef = useRef(null)
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const handleTabKeyDown = (e) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return
    const idx = tabs.indexOf(activeTab)
    if (idx < 0) return
    const next = e.key === 'ArrowRight' ? (idx + 1) % tabs.length : (idx - 1 + tabs.length) % tabs.length
    e.preventDefault()
    setActiveTab(tabs[next])
    setTimeout(() => tabListRef.current?.children?.[next]?.focus(), 0)
  }

  const filteredO9con = o9conIcons.filter(
    (icon) =>
      !o9conSearch.trim() ||
      icon.name.toLowerCase().includes(o9conSearch.toLowerCase()) ||
      icon.class.toLowerCase().includes(o9conSearch.toLowerCase())
  )

  return (
    <div className="max-w-4xl space-y-8">
      <section>
        <h1 className="group flex items-center gap-2 text-[30px] font-bold text-o9ds-light-primary dark:text-white pb-2">
          <span
            className="flex h-8 w-8 items-center justify-center dark:bg-neutral-700"
            data-o9ds-avatar
            data-o9ds-avatar-header
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343L12.657 5.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </span>
          Iconography &quot;o9con&quot;
        </h1>
        <p className="mt-4 text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed">
          The o9Con icon library provides a comprehensive set of carefully crafted icons designed for user interfaces. Built as an icon font, ensuring crisp rendering at any size while maintaining small file sizes. Each icon must retain clarity and visual impact across different resolutions and usage contexts.
        </p>

        <div
          ref={tabListRef}
          role="tablist"
          className="mt-6 flex gap-6 border-b border-o9ds-light-border dark:border-neutral-700"
          data-o9ds-tabs
          onKeyDown={handleTabKeyDown}
        >
          {tabs.map((tab) => (
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
        <section>
          <p className="text-o9ds-light-secondary dark:text-neutral-400">Content coming soon.</p>
        </section>
      )}

      {activeTab === 'o9con Gallery' && (
        <>
          <section>
            <h2 className="text-lg font-semibold text-o9ds-light-primary dark:text-white mb-2">Display Options</h2>
            <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 mb-4">Customize how icons are displayed in the gallery</p>
            <div className="flex flex-wrap items-center gap-4 mb-2">
              <span className="text-sm dark:text-neutral-400" style={isLight ? { color: '#303030' } : undefined}>Icon Size:</span>
              <div className="flex gap-2">
                {SIZES.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    data-o9ds-size-selected={selectedSize === s ? '' : undefined}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      selectedSize === s ? 'dark:text-black dark:bg-white' : 'border dark:border-neutral-600 dark:text-neutral-400 hover:text-o9ds-light-primary dark:hover:text-white'
                    }`}
                    style={
                      selectedSize === s
                        ? { backgroundColor: isLight ? '#010101' : undefined, color: isLight ? '#FFFFFF' : undefined }
                        : { borderColor: isLight ? '#E5E5E5' : undefined, color: isLight ? '#303030' : undefined }
                    }
                  >
                    {s}
                  </button>
                ))}
              </div>
              <span className="text-sm dark:text-neutral-400" style={isLight ? { color: '#303030' } : undefined}>Current: {selectedSize}px</span>
            </div>
          </section>

          <section>
            <div className="mb-4">
              <input
                type="search"
                placeholder="Search documentation..."
                value={o9conSearch}
                onChange={(e) => setO9conSearch(e.target.value)}
                className="w-full max-w-md border px-3 py-2 text-sm focus:outline-none"
                style={{
                  borderColor: isLight ? '#E5E5E5' : '#404040',
                  backgroundColor: isLight ? '#FFFFFF' : '#171717',
                  color: isLight ? '#010101' : '#fff',
                }}
              />
            </div>
            <h2 className="text-lg font-semibold text-o9ds-light-primary dark:text-white mb-2">
              o9con Library
              <span
                className="ml-2 inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium dark:bg-neutral-700 dark:text-neutral-400"
                style={isLight ? { backgroundColor: '#010101', color: '#FFFFFF' } : undefined}
              >
                {filteredO9con.length}
              </span>
            </h2>
            <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 mb-6">
              Click the clipboard icon on each icon to copy the HTML code.
            </p>
            <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {filteredO9con.map((icon) => (
                <O9conIconCard key={icon.class} icon={icon} size={selectedSize} isLight={isLight} />
              ))}
            </div>
            {filteredO9con.length === 0 && (
              <p className="text-o9ds-light-secondary dark:text-neutral-400 py-8 text-center">No icons match your search.</p>
            )}
          </section>
        </>
      )}

      {activeTab === 'Accessibility' && (
        <section
          className="border dark:border-neutral-700 p-6 md:p-8 shadow-sm dark:bg-transparent"
          style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#FFFFFF' } : undefined}
        >
          <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white mb-2">Accessibility Guidelines</h2>
          <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-6">Best practices for accessible icon implementation</p>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-o9ds-light-primary dark:text-white mb-3">ARIA Attributes</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>Use <code className="px-1 py-0.5" data-o9ds-inline-code>aria-hidden=&quot;true&quot;</code> for decorative icons that don&apos;t convey meaning</li>
                <li>Use <code className="px-1 py-0.5" data-o9ds-inline-code>aria-label</code> for icons that have semantic meaning</li>
                <li>Provide alternative text for icons used without accompanying text</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-o9ds-light-primary dark:text-white mb-3">Visual Accessibility</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>Ensure sufficient color contrast (4.5:1 for normal text, 3:1 for large text)</li>
                <li>Icons should be at least 16px for comfortable viewing</li>
                <li>Don&apos;t rely solely on icons to convey important information</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-o9ds-light-primary dark:text-white mb-3">Interactive Icons</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>Ensure interactive icons have adequate click/touch targets (minimum 44×44px)</li>
                <li>Provide clear focus indicators for keyboard navigation</li>
                <li>Include descriptive labels or tooltips for icon-only buttons</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'Code' && (
        <section className="space-y-8">
          <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white">Implementation</h2>
          <p className="text-o9ds-light-secondary dark:text-neutral-400">Use the following HTML structure to render o9con icons:</p>

          <CodeBlock
            code={`<!-- Basic icon usage -->
<span class="o9con o9con-chevron-right o9ds-icon-24" aria-hidden="true"></span>

<!-- Icon with semantic meaning - include aria-label -->
<button type="button" aria-label="Navigate to next page">
  <span class="o9con o9con-chevron-right o9ds-icon-16" aria-hidden="true"></span>
</button>

<!-- Icon sizes available -->
<span class="o9con o9con-arrow-left o9ds-icon-14"></span> <!-- 14px -->
<span class="o9con o9con-arrow-left o9ds-icon-16"></span> <!-- 16px -->
<span class="o9con o9con-arrow-left o9ds-icon-20"></span> <!-- 20px -->
<span class="o9con o9con-arrow-left o9ds-icon-24"></span> <!-- 24px -->
<span class="o9con o9con-arrow-left o9ds-icon-32"></span> <!-- 32px -->`}
            label="o9con usage examples"
          />

          <div>
            <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white mb-3">Icon Size Tokens</h3>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-4">Copy the SCSS variables for icon sizes:</p>
            <CodeBlock code={ICON_SIZE_TOKENS_SCSS} label="o9con icon size tokens" />
          </div>
        </section>
      )}
    </div>
  )
}
