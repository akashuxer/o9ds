import { useState, useMemo } from 'react'
import { useTheme } from '../../../context/ThemeContext'
import CodeBlock from '../../../LayoutComponents/CodeBlock'
import DocTabs from '../../../LayoutComponents/DocTabs'
import PageWithToc from '../../../LayoutComponents/PageWithToc'
import DocTable from '../../../LayoutComponents/DocTable'
import GrayBgCard from '../../../LayoutComponents/GrayBgCard'
import WhiteBgCard from '../../../LayoutComponents/WhiteBgCard'
import { getComponentPageDescription } from '../../../data/componentPageMeta'

const tabs = ['Overview', 'Usage', 'Code/APIs', 'Accessibility']

const PROPS = [
  { prop: 'items', type: 'O9BreadcrumbItem[]', default: '[]', required: 'Yes', desc: 'Array of breadcrumb items; last item is the current page' },
  { prop: 'separator', type: 'string', default: "'/'", required: 'No', desc: 'Separator character (CSS-generated via ::before)' },
  { prop: 'disabled', type: 'boolean', default: 'false', required: 'No', desc: 'Disable all navigable links' },
  { prop: 'loading', type: 'boolean', default: 'false', required: 'No', desc: 'Show skeleton shimmer overlay' },
  { prop: 'ariaLabel', type: 'string', default: "'Breadcrumb'", required: 'No', desc: 'Accessible label for the <nav> element' },
  { prop: 'onNavigate', type: '({ href, index, label }) => void', default: '—', required: 'No', desc: 'Navigation handler; fires when a link is clicked' },
]

const ITEM_PROPS = [
  { prop: 'label', type: 'string', required: 'Yes', desc: 'Item text; empty string for icon-only items' },
  { prop: 'href', type: 'string', required: 'No', desc: 'Destination URL; omit for the current page item' },
  { prop: 'icon', type: 'string', required: 'No', desc: "Icon name without o9con- prefix; typically 'home' for the first item" },
]

const ARIA_ATTRS = [
  { attr: 'aria-label', when: 'Set to "Breadcrumb" on the <nav> element to identify the landmark' },
  { attr: 'aria-current', when: 'Set to "page" on the last breadcrumb item (current page)' },
  { attr: 'aria-disabled', when: 'Set to "true" on disabled links' },
  { attr: 'aria-busy', when: 'Set to "true" during loading state' },
]

export default function Breadcrumb() {
  const [activeTab, setActiveTab] = useState('Overview')
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const onThisPageSections = useMemo(() => {
    if (activeTab === 'Overview') {
      return [
        { id: 'overview-purpose', label: 'Purpose' },
        { id: 'overview-definition', label: 'Definition & role' },
        { id: 'overview-anatomy', label: 'Anatomy' },
        { id: 'overview-states', label: 'States' },
        { id: 'overview-naming', label: 'Naming' },
        { id: 'overview-dos-donts', label: 'Dos & don\u2019ts' },
      ]
    }
    if (activeTab === 'Usage') {
      return [
        { id: 'usage-when', label: 'When to use' },
        { id: 'usage-when-not', label: 'When not to use' },
        { id: 'usage-scenarios', label: 'Scenarios' },
        { id: 'usage-best-practices', label: 'Best practices' },
        { id: 'usage-layout', label: 'Layout & placement' },
      ]
    }
    if (activeTab === 'Code/APIs') {
      return [
        { id: 'code-props', label: 'Props' },
        { id: 'code-item-props', label: 'Item shape' },
        { id: 'code-scenarios', label: 'Implementation scenarios' },
        { id: 'code-tokens', label: 'Tokens & mapping' },
        { id: 'code-css', label: 'CSS variables' },
      ]
    }
    if (activeTab === 'Accessibility') {
      return [
        { id: 'a11y-intro', label: 'Overview' },
        { id: 'a11y-keyboard', label: 'Keyboard interaction' },
        { id: 'a11y-focus', label: 'Focus behavior' },
        { id: 'a11y-disabled', label: 'Disabled state' },
        { id: 'a11y-wai-aria', label: 'WAI-ARIA pattern' },
        { id: 'a11y-notes', label: 'Accessibility notes' },
        { id: 'a11y-supported-aria', label: 'Supported ARIA attributes' },
      ]
    }
    return []
  }, [activeTab])

  return (
    <PageWithToc sections={onThisPageSections}>
      <div className="max-w-4xl space-y-8">
        <section>
          <h1 className="group flex items-center gap-2 text-[30px] font-bold text-o9ds-light-primary dark:text-white mb-4">
            <span className="flex h-8 w-8 items-center justify-center bg-o9ds-light-surface dark:bg-neutral-700" data-o9ds-avatar data-o9ds-avatar-header>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </span>
            Breadcrumb
          </h1>
          <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed mb-2">
            {getComponentPageDescription('breadcrumb')}
          </p>
          <p className="text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed">
            Horizontal trail of navigational links showing the user's current location within a page hierarchy. The first item is typically a home icon link, intermediate items are page links, and the final item represents the current page.
          </p>

          <DocTabs tabs={tabs} activeTab={activeTab} onSelect={setActiveTab} />
        </section>

        {activeTab === 'Overview' && (
          <div className="space-y-12">
            <section id="overview-purpose" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Purpose</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The Breadcrumb component displays the user's position within a multi-level site structure and provides quick navigation back to parent pages. It helps users understand the information architecture and navigate efficiently without relying on the browser's back button.
              </p>
            </section>

            <section id="overview-definition" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Definition & role</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                A <strong className="text-o9ds-light-primary dark:text-white font-medium">breadcrumb</strong> is a horizontal trail rendered as an ordered list inside a <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;nav&gt;</code> landmark. Each item represents a level in the hierarchy. Navigable items render as <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;a&gt;</code> elements; the final item (current page) renders as a non-interactive <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;span&gt;</code> with <code className="px-1 py-0.5" data-o9ds-inline-code>aria-current="page"</code>.
              </p>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Breadcrumb uses the <code className="px-1 py-0.5" data-o9ds-inline-code>o9ds-bc</code> BEM block. Items are separated by <code className="px-1 py-0.5" data-o9ds-inline-code>/</code> dividers generated via CSS <code className="px-1 py-0.5" data-o9ds-inline-code>::before</code> pseudo-elements (hidden from assistive technology).
              </p>
            </section>

            <section id="overview-anatomy" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Anatomy</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                A breadcrumb trail consists of:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">1 — Nav container</strong> — <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;nav aria-label="Breadcrumb"&gt;</code> landmark wrapping the entire trail.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">2 — Ordered list</strong> — <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;ol&gt;</code> providing semantic ordering of breadcrumb items.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">3 — Home item</strong> — first item, typically an icon-only link (<code className="px-1 py-0.5" data-o9ds-inline-code>o9con-home</code>) with <code className="px-1 py-0.5" data-o9ds-inline-code>aria-label="Home"</code>.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">4 — Intermediate links</strong> — <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;a&gt;</code> elements linking to parent pages, displayed in placeholder text color.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">5 — Separator</strong> — <code className="px-1 py-0.5" data-o9ds-inline-code>/</code> character between items, CSS-generated and hidden from screen readers.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">6 — Current page</strong> — final item as <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;span&gt;</code> with bold weight and secondary text color, not clickable.
                </li>
              </ul>
            </section>

            <section id="overview-states" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">States</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Default</strong> — links in placeholder color, no underline; current page in secondary color with medium weight.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Hover</strong> — link text turns info-light blue, underline appears.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Focus</strong> — info-light blue text with focus ring outline.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Disabled</strong> — all links disabled with muted text color, cursor not-allowed.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Loading</strong> — shimmer overlay on the entire breadcrumb trail.</li>
              </ul>
            </section>

            <section id="overview-naming" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Naming guidance</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Use concise page names that reflect the hierarchy. Breadcrumb labels should match the page titles they represent. The last item should exactly match the current page's heading for consistency.
              </p>
            </section>

            <section id="overview-dos-donts" className="scroll-mt-24">
              <div className="grid gap-4 sm:grid-cols-2">
                <GrayBgCard title="Do" bullets={['Use semantic <nav> + <ol> structure', 'Mark the last item with aria-current="page"', 'Use home icon for the first item when applicable', 'Keep labels concise — use page titles not descriptions']} />
                <WhiteBgCard title="Don't" bullets={['Make the current page item clickable — it should be static text', 'Use breadcrumbs for flat navigation (use Tabstrip instead)', 'Add more than one breadcrumb trail per page', 'Duplicate the current page as a navigable link']} />
              </div>
            </section>
          </div>
        )}

        {activeTab === 'Usage' && (
          <div className="space-y-12">
            <section id="usage-when" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Display the user's location within a multi-level site structure.</li>
                <li>Provide quick navigation back to parent pages.</li>
                <li>Help users understand the information architecture and hierarchy depth.</li>
                <li>Pages with three or more levels of nesting where back navigation is common.</li>
              </ul>
            </section>

            <section id="usage-when-not" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When not to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Flat navigation with no hierarchy. Use <strong className="text-o9ds-light-primary dark:text-white font-medium">Tabstrip</strong> for switching between sibling views.</li>
                <li>Standalone inline navigation. Use <strong className="text-o9ds-light-primary dark:text-white font-medium">Link</strong>.</li>
                <li>Single-level pages where a breadcrumb would show only <code className="px-1 py-0.5" data-o9ds-inline-code>Home &gt; Current Page</code>.</li>
              </ul>
            </section>

            <section id="usage-scenarios" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Scenarios</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Product detail page</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Home → Products → Category → Product Name. The user can quickly jump to Products or Category to browse alternatives.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Settings hierarchy</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Home → Settings → Account → Security. Helps users understand which settings section they are in and navigate back.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Home icon as first item</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    When the first item uses an icon (e.g. home) with an empty label, it renders as an icon-only link with <code className="px-1 py-0.5" data-o9ds-inline-code>aria-label="Home"</code> for accessibility.
                  </p>
                </div>
              </div>
            </section>

            <section id="usage-best-practices" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Best practices</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Place the breadcrumb at the top of the page, below the global header and above the page content.</li>
                <li>Keep labels short — use page titles, not full descriptions.</li>
                <li>The current page should always be the last item and should not be a link.</li>
                <li>For very deep hierarchies, consider truncating middle items with an ellipsis menu in future iterations.</li>
              </ul>
            </section>

            <section id="usage-layout" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Layout & placement</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Position</strong> — top of page content area, full width or left-aligned.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Height</strong> — fixed at 32px with 6px vertical padding.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Spacing</strong> — 4px gap between items and separator.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Single size</strong> — breadcrumb has one size (14px text, 16px icon). No size variants.</li>
              </ul>
            </section>
          </div>
        )}

        {activeTab === 'Code/APIs' && (
          <div className="space-y-12">
            <section id="code-props" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Component API</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
                O9Breadcrumb renders a <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;nav&gt;</code> landmark containing an ordered list of breadcrumb items.
              </p>
              <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Prop</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Type</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Default</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Required</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PROPS.map((row) => (
                      <tr key={row.prop} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{row.prop}</td>
                        <td className="py-2 px-3 font-mono text-o9ds-light-secondary dark:text-neutral-400">{row.type}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.default}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.required}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="code-item-props" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">O9BreadcrumbItem</h2>
              <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Property</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Type</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Required</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ITEM_PROPS.map((row) => (
                      <tr key={row.prop} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{row.prop}</td>
                        <td className="py-2 px-3 font-mono text-o9ds-light-secondary dark:text-neutral-400">{row.type}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.required}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="code-scenarios" className="scroll-mt-24 space-y-10">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Implementation scenarios</h2>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Basic with home icon — React</h3>
                <CodeBlock
                  code={`import { O9Breadcrumb } from '@o9ds/react';

<O9Breadcrumb
  items={[
    { label: '', icon: 'home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Category', href: '/products/category' },
    { label: 'Current Item' },
  ]}
/>`}
                  label="React"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Basic — HTML</h3>
                <CodeBlock
                  code={`<nav aria-label="Breadcrumb" class="o9ds-bc">
  <ol class="o9ds-bc__list">
    <li class="o9ds-bc__item">
      <a class="o9ds-bc__lnk" href="/" aria-label="Home">
        <span class="o9ds-bc__ico o9con o9con-home" aria-hidden="true"></span>
      </a>
    </li>
    <li class="o9ds-bc__item">
      <a class="o9ds-bc__lnk" href="/products">Products</a>
    </li>
    <li class="o9ds-bc__item">
      <a class="o9ds-bc__lnk" href="/products/category">Category</a>
    </li>
    <li class="o9ds-bc__item">
      <span class="o9ds-bc__lbl" aria-current="page">Current Item</span>
    </li>
  </ol>
</nav>`}
                  label="HTML"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">With navigation handler</h3>
                <CodeBlock
                  code={`<O9Breadcrumb
  items={items}
  onNavigate={({ href, index, label }) => router.push(href)}
/>`}
                  label="Navigation handler"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Disabled</h3>
                <CodeBlock
                  code={`<O9Breadcrumb items={items} disabled />

<nav aria-label="Breadcrumb" class="o9ds-bc is-disabled">
  <ol class="o9ds-bc__list">
    <li class="o9ds-bc__item">
      <a class="o9ds-bc__lnk" aria-disabled="true" tabindex="0" aria-label="Home">
        <span class="o9ds-bc__ico o9con o9con-home" aria-hidden="true"></span>
      </a>
    </li>
    <li class="o9ds-bc__item">
      <a class="o9ds-bc__lnk" aria-disabled="true" tabindex="0">Products</a>
    </li>
    <li class="o9ds-bc__item">
      <span class="o9ds-bc__lbl" aria-current="page">Current Item</span>
    </li>
  </ol>
</nav>`}
                  label="Disabled"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Loading</h3>
                <CodeBlock
                  code={`<O9Breadcrumb items={items} loading />

<nav aria-label="Breadcrumb" class="o9ds-bc loading" aria-busy="true">
  <!-- items render but shimmer overlay covers content -->
</nav>`}
                  label="Loading"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Vanilla JS</h3>
                <CodeBlock
                  code={`import { O9Breadcrumb } from '@o9ds/js';

const el = document.querySelector('#my-breadcrumb');
const bc = O9Breadcrumb.initialize(el, {
  items: [
    { label: '', icon: 'home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Current Page' },
  ],
  onNavigate: ({ href }) => console.log('Navigating to', href),
});

bc.setItems([
  { label: 'Home', href: '/' },
  { label: 'New Page' },
]);
bc.disabled(true);
bc.setLoading(true);
bc.destroy();`}
                  label="Vanilla JS"
                />
              </div>
            </section>

            <section id="code-tokens" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Tokens & mapping</h2>
              <DocTable
                columns={[
                  { key: 'map', label: 'Mapping' },
                  { key: 'detail', label: 'Notes' },
                ]}
                rows={[
                  { map: 'loading → class + aria-busy', detail: '.loading + aria-busy="true"' },
                  { map: 'disabled → class + aria', detail: '.is-disabled on root; aria-disabled="true" on each link' },
                  { map: 'current page → aria', detail: 'aria-current="page" on last <span> item' },
                  { map: 'separator → CSS', detail: '::before pseudo-element with "/" content (hidden from AT)' },
                ]}
              />
            </section>

            <section id="code-css" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">CSS variables</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                Override on <code className="px-1 py-0.5" data-o9ds-inline-code>.o9ds-bc</code> or a parent to theme the breadcrumb.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { cat: 'Layout', vars: ['--o9ds-bc-height', '--o9ds-bc-padding-block', '--o9ds-bc-gap'] },
                  { cat: 'Typography', vars: ['--o9ds-bc-font-size', '--o9ds-bc-font-weight', '--o9ds-bc-font-weight-current'] },
                  { cat: 'Icon', vars: ['--o9ds-bc-icon-size'] },
                  { cat: 'Color', vars: ['--o9ds-bc-link-color', '--o9ds-bc-link-color-hover', '--o9ds-bc-current-color', '--o9ds-bc-separator-color', '--o9ds-bc-disabled-color'] },
                  { cat: 'Focus', vars: ['--o9ds-bc-focus-border'] },
                ].map(({ cat, vars }) => (
                  <div key={cat} className="border p-4 dark:border-neutral-700" style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#FAFAFA' } : undefined}>
                    <h3 className="text-sm font-semibold text-o9ds-light-primary dark:text-white mb-2">{cat}</h3>
                    <ul className="space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                      {vars.map((v) => (
                        <li key={v}>{v}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'Accessibility' && (
          <section id="breadcrumb-accessibility" className="space-y-12">
            <div id="a11y-intro" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Breadcrumb accessibility</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Breadcrumb follows the{' '}
                <strong className="text-o9ds-light-primary dark:text-white font-medium">WAI-ARIA Breadcrumb Pattern</strong>. It uses a <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;nav&gt;</code> landmark with <code className="px-1 py-0.5" data-o9ds-inline-code>aria-label="Breadcrumb"</code>, an ordered list for hierarchy, and <code className="px-1 py-0.5" data-o9ds-inline-code>aria-current="page"</code> on the last item.
              </p>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                Screen readers announce the <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;nav&gt;</code> as a "Breadcrumb navigation" landmark with a list of links followed by the current page.
              </p>
            </div>

            <div id="a11y-keyboard" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Keyboard interaction</h3>
              <DocTable
                columns={[
                  { key: 'key', label: 'Keys', mono: true },
                  { key: 'behavior', label: 'Purpose' },
                ]}
                rows={[
                  { key: 'Tab', behavior: 'Moves focus to the next navigable breadcrumb link. The current page (last item) is not focusable since it is a <span>.' },
                  { key: 'Shift+Tab', behavior: 'Moves focus to the previous navigable breadcrumb link.' },
                  { key: 'Enter', behavior: 'Activates the focused breadcrumb link (navigates to href).' },
                ]}
              />
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                Space does NOT activate breadcrumb links — they are <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;a&gt;</code> elements with standard link activation.
              </p>
            </div>

            <div id="a11y-focus" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Focus behavior</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <strong className="text-o9ds-light-primary dark:text-white font-medium">Focus visible:</strong> <code className="px-1 py-0.5" data-o9ds-inline-code>outline: 1px solid var(--o9ds-color-b-theme-focus)</code> around the link content area.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>Disabled links remain focusable via <code className="px-1 py-0.5" data-o9ds-inline-code>aria-disabled</code> for accessibility discovery.</li>
                <li>Hover styles scoped to <code className="px-1 py-0.5" data-o9ds-inline-code>.no-touch</code> to prevent sticky hover on touch devices.</li>
              </ul>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <strong className="text-o9ds-light-primary dark:text-white font-normal">WCAG:</strong> 2.4.7 Focus Visible · 2.4.8 Location
              </p>
            </div>

            <div id="a11y-disabled" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Disabled state</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                When the breadcrumb is disabled, all navigable links receive <code className="px-1 py-0.5" data-o9ds-inline-code>aria-disabled="true"</code> and their <code className="px-1 py-0.5" data-o9ds-inline-code>href</code> is removed. The <code className="px-1 py-0.5" data-o9ds-inline-code>.is-disabled</code> class is added to the root. Links remain focusable for accessibility discovery.
              </p>
            </div>

            <div id="a11y-wai-aria" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">WAI-ARIA Breadcrumb pattern</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li><code className="px-1 py-0.5" data-o9ds-inline-code>&lt;nav&gt;</code> landmark with <code className="px-1 py-0.5" data-o9ds-inline-code>aria-label="Breadcrumb"</code>.</li>
                <li><code className="px-1 py-0.5" data-o9ds-inline-code>&lt;ol&gt;</code> provides ordered list semantics.</li>
                <li>Last item uses <code className="px-1 py-0.5" data-o9ds-inline-code>aria-current="page"</code> and is a non-interactive <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;span&gt;</code>.</li>
                <li>Separator <code className="px-1 py-0.5" data-o9ds-inline-code>/</code> is CSS-generated and hidden from assistive technology.</li>
                <li>Links use native <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;a&gt;</code> semantics — Enter activates, Space does not.</li>
              </ul>
            </div>

            <div id="a11y-notes" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Accessibility notes</h3>
              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
                <WhiteBgCard title="Home icon">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    When the first item is an icon-only link, provide <code className="px-1 py-0.5" data-o9ds-inline-code>aria-label="Home"</code> since there is no visible text label.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Separator">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    The <code className="px-1 py-0.5" data-o9ds-inline-code>/</code> separator is decorative — it is CSS-generated via <code className="px-1 py-0.5" data-o9ds-inline-code>::before</code> and hidden from screen readers.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Current page">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    The last item is a <code className="px-1 py-0.5" data-o9ds-inline-code>&lt;span&gt;</code> with <code className="px-1 py-0.5" data-o9ds-inline-code>aria-current="page"</code>. It is not interactive and not in the tab order.
                  </p>
                </WhiteBgCard>
              </div>
            </div>

            <div id="a11y-supported-aria" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Supported ARIA attributes</h3>
              <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Attribute</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">When to use</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ARIA_ATTRS.map(({ attr, when }) => (
                      <tr key={attr} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{attr}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{when}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}
      </div>
    </PageWithToc>
  )
}
