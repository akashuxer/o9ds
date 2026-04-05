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

const VARIANTS = [
  { name: 'Primary', desc: 'Flat tabs with bottom border indicator on the selected tab' },
  { name: 'Secondary', desc: 'Background fill + bottom border on the selected tab; more visual weight' },
  { name: 'Tertiary', desc: 'Icon-only when unselected; expands to icon + label on selection' },
]

const PROPS = [
  { prop: 'variant', type: "'primary' | 'secondary' | 'tertiary'", default: "'primary'", required: 'No', desc: 'Visual style variant' },
  { prop: 'size', type: "'sm' | 'lg'", default: "'lg'", required: 'No', desc: 'Tab height and font size' },
  { prop: 'tabs', type: 'TabItem[]', default: '—', required: 'Yes', desc: 'Array of tab configurations' },
  { prop: 'selectedId', type: 'string | null', default: 'null', required: 'No', desc: 'ID of the selected tab' },
  { prop: 'closable', type: 'boolean', default: 'false', required: 'No', desc: 'Show close button on tabs' },
  { prop: 'pinnable', type: 'boolean', default: 'false', required: 'No', desc: 'Show pin button on tabs' },
  { prop: 'actionsVisibility', type: "'hover' | 'always'", default: "'hover'", required: 'No', desc: 'When tab action buttons are visible' },
  { prop: 'disabled', type: 'boolean', default: 'false', required: 'No', desc: 'Disable the entire tabstrip' },
  { prop: 'loading', type: 'boolean', default: 'false', required: 'No', desc: 'Pattern C loading state' },
  { prop: 'onSelect', type: '({ id, index }) => void', default: '—', required: 'No', desc: 'Selection callback' },
  { prop: 'onClose', type: '({ id, index }) => void', default: '—', required: 'No', desc: 'Close callback' },
  { prop: 'onPin', type: '({ id, pinned }) => void', default: '—', required: 'No', desc: 'Pin/unpin callback' },
]

const SIZES = [
  { size: 'sm', height: '24px', font: '12px', iconBtn: 'sm (24px)' },
  { size: 'lg', height: '32px', font: '14px', iconBtn: 'md (32px)' },
]

const ARIA_ATTRS = [
  { attr: 'aria-selected', when: 'Set to "true" on the active tab, "false" on all others' },
  { attr: 'aria-controls', when: 'Set on each tab to reference its associated panel ID (when panelId is provided)' },
  { attr: 'aria-disabled', when: 'Set to "true" on disabled tabs' },
  { attr: 'aria-orientation', when: 'Set to "horizontal" on the tablist container' },
  { attr: 'aria-busy', when: 'Set to "true" on the root element during loading state' },
  { attr: 'aria-label', when: 'Set to "Tabs" on the tablist container as a default accessible name' },
  { attr: 'aria-hidden', when: 'Set to "true" on decorative tab icon elements' },
]

export default function Tabstrip() {
  const [activeTab, setActiveTab] = useState('Overview')
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const onThisPageSections = useMemo(() => {
    if (activeTab === 'Overview') {
      return [
        { id: 'overview-purpose', label: 'Purpose' },
        { id: 'overview-definition', label: 'Definition & role' },
        { id: 'overview-anatomy', label: 'Anatomy' },
        { id: 'overview-variants', label: 'Variants' },
        { id: 'overview-states', label: 'States' },
        { id: 'overview-dos-donts', label: 'Dos & don\u2019ts' },
      ]
    }
    if (activeTab === 'Usage') {
      return [
        { id: 'usage-when', label: 'When to use' },
        { id: 'usage-when-not', label: 'When not to use' },
        { id: 'usage-scenarios', label: 'Scenarios' },
        { id: 'usage-best-practices', label: 'Best practices' },
        { id: 'usage-layout', label: 'Layout & sizing' },
      ]
    }
    if (activeTab === 'Code/APIs') {
      return [
        { id: 'code-props', label: 'Props' },
        { id: 'code-tab-item', label: 'TabItem shape' },
        { id: 'code-scenarios', label: 'Implementation scenarios' },
        { id: 'code-tokens', label: 'Tokens & mapping' },
        { id: 'code-css', label: 'CSS variables' },
        { id: 'code-size', label: 'Size reference' },
        { id: 'code-selectors', label: 'BEM selectors' },
      ]
    }
    if (activeTab === 'Accessibility') {
      return [
        { id: 'a11y-intro', label: 'Overview' },
        { id: 'a11y-keyboard', label: 'Keyboard interaction' },
        { id: 'a11y-focus', label: 'Focus management' },
        { id: 'a11y-disabled', label: 'Disabled state' },
        { id: 'a11y-loading', label: 'Loading state' },
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
            Tabstrip
          </h1>
          <p className="text-lg text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed mb-2">
            {getComponentPageDescription('tabstrip')}
          </p>
          <p className="text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed">
            Horizontal strip of selectable tabs for switching between views or panels. Supports three visual variants, two sizes, optional icons, closable tabs, pinnable tabs, and WAI-ARIA Tabs Pattern keyboard navigation.
          </p>

          <DocTabs tabs={tabs} activeTab={activeTab} onSelect={setActiveTab} />
        </section>

        {activeTab === 'Overview' && (
          <div className="space-y-12">
            <section id="overview-purpose" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Purpose</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                The Tabstrip organizes related content into switchable panels within a single view. Users select a tab to reveal its associated content without navigating to a new page. It is the primary control for switching between sibling views at the same hierarchy level.
              </p>
            </section>

            <section id="overview-definition" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Definition & role</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                A <strong className="text-o9ds-light-primary dark:text-white font-medium">tabstrip</strong> is a horizontal list of tab controls implementing the WAI-ARIA Tabs Pattern. The container uses <code className="px-1 py-0.5" data-o9ds-inline-code>role="tablist"</code>, and each tab uses <code className="px-1 py-0.5" data-o9ds-inline-code>role="tab"</code> with <code className="px-1 py-0.5" data-o9ds-inline-code>aria-selected</code>. Tabs can include icons, close buttons, and pin buttons.
              </p>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Tabstrip uses the <code className="px-1 py-0.5" data-o9ds-inline-code>o9ds-tabs</code> BEM block with elements for the list, individual tabs, icons, labels, actions, and an overflow button. It supports three visual variants and two sizes.
              </p>
            </section>

            <section id="overview-anatomy" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Anatomy</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                A tabstrip consists of:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">1 — Root container</strong> — <code className="px-1 py-0.5" data-o9ds-inline-code>.o9ds-tabs</code> wrapping the scrollable tab list.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">2 — Tab list</strong> — scrollable flex container with <code className="px-1 py-0.5" data-o9ds-inline-code>role="tablist"</code>.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">3 — Tab</strong> — individual tab element with <code className="px-1 py-0.5" data-o9ds-inline-code>role="tab"</code>. Contains a left section (icon + label) and optional action buttons.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">4 — Tab icon</strong> — optional leading icon via o9con font, <code className="px-1 py-0.5" data-o9ds-inline-code>aria-hidden="true"</code>.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">5 — Tab label</strong> — text label truncated with ellipsis at max-width.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">6 — Action buttons</strong> — optional pin and close buttons within each tab.
                </li>
                <li>
                  <strong className="text-o9ds-light-primary dark:text-white font-medium">7 — Overflow button</strong> — shown when tabs exceed available width.
                </li>
              </ul>
            </section>

            <section id="overview-variants" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Variants</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed mb-4">
                Three variants control the visual treatment of tabs and their selection indicator.
              </p>
              <ul className="space-y-3 text-o9ds-light-secondary dark:text-neutral-400 mb-6">
                {VARIANTS.map(({ name, desc }) => (
                  <li key={name}>
                    <strong className="text-o9ds-light-primary dark:text-white">{name}</strong> — {desc}
                  </li>
                ))}
              </ul>
            </section>

            <section id="overview-states" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">States</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Default</strong> — tertiary text/icon color, transparent background.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Hover</strong> — primary text/icon color, thicker bottom border.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Focus</strong> — primary text/icon color with 3px focus outline inset.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Active (selected)</strong> — primary text/icon, bottom border indicator, actions visible.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Disabled</strong> — disabled text/icon, not-allowed cursor, no border indicator.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Pinned</strong> — pinned tabs sorted to the start of the strip.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Loading</strong> — Pattern C shimmer overlay on each tab; content hidden.</li>
              </ul>
            </section>

            <section id="overview-dos-donts" className="scroll-mt-24">
              <div className="grid gap-4 sm:grid-cols-2">
                <GrayBgCard title="Do" bullets={['Use tabs to switch between related views at the same hierarchy level', 'Implement roving tabindex for keyboard navigation', 'Show a clear selection indicator (bottom border or background)', 'Use closable tabs for user-created or temporary views']} />
                <WhiteBgCard title="Don't" bullets={['Use tabs for hierarchical navigation (use Breadcrumb instead)', 'Stack multiple tabstrips without clear visual separation', 'Make tabs do things other than reveal content panels', 'Disable all tabs simultaneously — at least one should be selectable']} />
              </div>
            </section>
          </div>
        )}

        {activeTab === 'Usage' && (
          <div className="space-y-12">
            <section id="usage-when" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Switching between related content panels (Overview, Details, Settings).</li>
                <li>Organizing multiple views within a page without page-level navigation.</li>
                <li>Document-style interfaces where users open, close, and switch between items.</li>
                <li>Dense toolbars or side panels (tertiary variant for compact icon-only tabs).</li>
              </ul>
            </section>

            <section id="usage-when-not" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">When not to use</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Navigating a page hierarchy — use <strong className="text-o9ds-light-primary dark:text-white font-medium">Breadcrumb</strong>.</li>
                <li>Navigating to different pages — use <strong className="text-o9ds-light-primary dark:text-white font-medium">Link</strong> or <strong className="text-o9ds-light-primary dark:text-white font-medium">ButtonLink</strong>.</li>
                <li>Sequential steps (wizards) — use a stepper or progress indicator.</li>
                <li>Filtering content in place — use segmented controls or filter chips.</li>
              </ul>
            </section>

            <section id="usage-scenarios" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Scenarios</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Content panel switching</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Primary variant with 3-5 tabs, each revealing a different content panel. The selected tab's content is shown while others are hidden. Use <code className="px-1 py-0.5" data-o9ds-inline-code>aria-controls</code> to link tabs to their panels.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Document tabs</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Closable and pinnable tabs for document-style interfaces. Users can open, close, reorder, and pin tabs. Use the <code className="px-1 py-0.5" data-o9ds-inline-code>onClose</code> and <code className="px-1 py-0.5" data-o9ds-inline-code>onPin</code> callbacks.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Compact toolbar tabs</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Tertiary variant for dense side panels where only the selected tab shows its label. Inactive tabs display only their icon, expanding on selection.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Secondary emphasis</h3>
                  <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                    Secondary variant when tabs need more visual weight against busy backgrounds. The selected tab receives a background fill in addition to the bottom border.
                  </p>
                </div>
              </div>
            </section>

            <section id="usage-best-practices" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Best practices</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li>Keep tab labels concise — one or two words is ideal.</li>
                <li>Ensure at least one tab is always selectable; never disable all tabs.</li>
                <li>When a selected tab is removed, auto-select the nearest enabled tab.</li>
                <li>Use the overflow button for constrained widths rather than truncating tabs.</li>
                <li>In tertiary mode, use universally understood icons since labels are hidden on inactive tabs.</li>
              </ul>
            </section>

            <section id="usage-layout" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Layout & sizing</h2>
              <ul className="list-disc pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Small (sm)</strong> — 24px height, 12px font. Use in compact areas like sidebars or nested panels.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Large (lg)</strong> — 32px height, 14px font. Default size for page-level tab navigation.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Tab max-width</strong> — tabs truncate labels at 160px with ellipsis; overall tab max-width is 290px.</li>
                <li><strong className="text-o9ds-light-primary dark:text-white font-medium">Actions visibility</strong> — set to <code className="px-1 py-0.5" data-o9ds-inline-code>"always"</code> when hover is unreliable (touch devices or dense keyboard workflows).</li>
              </ul>
            </section>
          </div>
        )}

        {activeTab === 'Code/APIs' && (
          <div className="space-y-12">
            <section id="code-props" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Component API</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm">
                O9Tabstrip renders a tab list container with <code className="px-1 py-0.5" data-o9ds-inline-code>role="tablist"</code> and individual tabs with <code className="px-1 py-0.5" data-o9ds-inline-code>role="tab"</code>.
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

            <section id="code-tab-item" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">TabItem shape</h2>
              <CodeBlock
                code={`interface TabItem {
  id: string;        // unique tab identifier
  label: string;     // tab label text
  icon?: string;     // leading icon name (without o9con- prefix)
  disabled?: boolean; // individual tab disabled state
  pinned?: boolean;  // pinned state
  closable?: boolean; // override closable per tab
  panelId?: string;  // associated panel element ID for aria-controls
}`}
                label="TabItem"
              />
            </section>

            <section id="code-scenarios" className="scroll-mt-24 space-y-10">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Implementation scenarios</h2>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Basic — React</h3>
                <CodeBlock
                  code={`import { O9Tabstrip } from '@o9ds/react';

const tabs = [
  { id: 'overview', label: 'Overview', icon: 'home' },
  { id: 'details', label: 'Details', icon: 'info-circle' },
  { id: 'settings', label: 'Settings', icon: 'gear' },
];

<O9Tabstrip
  tabs={tabs}
  selectedId="overview"
  onSelect={({ id }) => setActiveTab(id)}
/>`}
                  label="React"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Basic — HTML</h3>
                <CodeBlock
                  code={`<div class="o9ds-tabs o9ds-tabs--primary o9ds-tabs--lg">
  <div class="o9ds-tabs__list" role="tablist" aria-label="Tabs" aria-orientation="horizontal">
    <div class="o9ds-tabs__tab active" role="tab" aria-selected="true" tabindex="0"
         aria-controls="panel-overview">
      <div class="o9ds-tabs__tab-lft">
        <span class="o9ds-tabs__tab-ico o9con o9con-home" aria-hidden="true"></span>
        <span class="o9ds-tabs__tab-lbl">Overview</span>
      </div>
    </div>
    <div class="o9ds-tabs__tab" role="tab" aria-selected="false" tabindex="-1"
         aria-controls="panel-details">
      <div class="o9ds-tabs__tab-lft">
        <span class="o9ds-tabs__tab-ico o9con o9con-info-circle" aria-hidden="true"></span>
        <span class="o9ds-tabs__tab-lbl">Details</span>
      </div>
    </div>
    <div class="o9ds-tabs__tab" role="tab" aria-selected="false" tabindex="-1"
         aria-controls="panel-settings">
      <div class="o9ds-tabs__tab-lft">
        <span class="o9ds-tabs__tab-ico o9con o9con-gear" aria-hidden="true"></span>
        <span class="o9ds-tabs__tab-lbl">Settings</span>
      </div>
    </div>
  </div>
</div>`}
                  label="HTML"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Closable & pinnable</h3>
                <CodeBlock
                  code={`<O9Tabstrip
  tabs={tabs}
  selectedId="overview"
  closable
  pinnable
  onSelect={({ id }) => setActiveTab(id)}
  onClose={({ id }) => removeTab(id)}
  onPin={({ id, pinned }) => togglePin(id, pinned)}
/>`}
                  label="Closable & pinnable"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Variants</h3>
                <CodeBlock
                  code={`// Secondary variant, small size
<O9Tabstrip tabs={tabs} variant="secondary" size="sm" />

// Tertiary (icon-only when unselected)
<O9Tabstrip tabs={tabs} variant="tertiary" />`}
                  label="Variants"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Disabled & loading</h3>
                <CodeBlock
                  code={`<O9Tabstrip tabs={tabs} disabled />
<O9Tabstrip tabs={tabs} loading />`}
                  label="Disabled & loading"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Vanilla JS</h3>
                <CodeBlock
                  code={`import { O9Tabstrip } from '@o9ds/js';

const el = document.querySelector('#my-tabstrip');
const strip = O9Tabstrip.initialize(el, {
  variant: 'primary',
  size: 'lg',
  tabs: [
    { id: 'overview', label: 'Overview', icon: 'home' },
    { id: 'details', label: 'Details', icon: 'info-circle' },
  ],
  closable: true,
  onSelect: ({ id }) => console.log('selected:', id),
  onClose: ({ id }) => console.log('closed:', id),
});

strip.select('details');
strip.selectedId();
strip.addTab({ id: 'new', label: 'New Tab' });
strip.removeTab('details');
strip.disabled(true);
strip.setLoading(true);
strip.destroy();`}
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
                  { map: 'variant → BEM modifier', detail: 'o9ds-tabs--primary | secondary | tertiary' },
                  { map: 'size → BEM modifier', detail: 'o9ds-tabs--sm | lg' },
                  { map: 'selected → state class', detail: '.active on the selected tab' },
                  { map: 'disabled → state class', detail: '.is-disabled on root and/or individual tabs' },
                  { map: 'pinned → state class', detail: '.is-pinned on pinned tabs' },
                  { map: 'loading → class + aria-busy', detail: '.loading on root + aria-busy="true"' },
                  { map: 'actionsVisibility → modifier', detail: 'o9ds-tabs--actions-always' },
                ]}
              />
            </section>

            <section id="code-css" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">CSS variables</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 text-sm mb-4">
                Override on <code className="px-1 py-0.5" data-o9ds-inline-code>.o9ds-tabs</code> or a parent to theme the tabstrip.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { cat: 'Layout', vars: ['--o9ds-tabs-height', '--o9ds-tab-padding-inline', '--o9ds-tab-gap', '--o9ds-tab-max-width', '--o9ds-tab-lbl-max-width', '--o9ds-tab-actions-gap'] },
                  { cat: 'Typography', vars: ['--o9ds-tab-font-size', '--o9ds-tab-font-weight', '--o9ds-tab-line-height'] },
                  { cat: 'Icon', vars: ['--o9ds-tab-icon-size'] },
                  { cat: 'Color', vars: ['--o9ds-tab-text-color', '--o9ds-tab-icon-color', '--o9ds-tab-bg'] },
                  { cat: 'Border', vars: ['--o9ds-tab-border-width', '--o9ds-tab-hover-border-width'] },
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

            <section id="code-size" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Size reference</h2>
              <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Size</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Height</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Font</th>
                      <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Icon Button Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SIZES.map((row) => (
                      <tr key={row.size} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                        <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{row.size}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.height}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.font}</td>
                        <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.iconBtn}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="code-selectors" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">BEM selectors</h2>
              <DocTable
                columns={[
                  { key: 'selector', label: 'Selector' },
                  { key: 'desc', label: 'Description' },
                ]}
                rows={[
                  { selector: '.o9ds-tabs', desc: 'Root tabstrip container' },
                  { selector: '.o9ds-tabs__list', desc: 'Scrollable tab container (role="tablist")' },
                  { selector: '.o9ds-tabs__tab', desc: 'Individual tab (role="tab")' },
                  { selector: '.o9ds-tabs__tab-lft', desc: 'Icon + label container' },
                  { selector: '.o9ds-tabs__tab-ico', desc: 'Tab leading icon' },
                  { selector: '.o9ds-tabs__tab-lbl', desc: 'Tab label text' },
                  { selector: '.o9ds-tabs__tab-actions', desc: 'Pin/close button container' },
                  { selector: '.o9ds-tabs__overflow-btn', desc: 'Overflow menu button' },
                ]}
              />
            </section>
          </div>
        )}

        {activeTab === 'Accessibility' && (
          <section id="tabstrip-accessibility" className="space-y-12">
            <div id="a11y-intro" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white">Tabstrip accessibility</h2>
              <p className="text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Tabstrip implements the <strong className="text-o9ds-light-primary dark:text-white font-medium">WAI-ARIA Tabs Pattern</strong>. The container uses <code className="px-1 py-0.5" data-o9ds-inline-code>role="tablist"</code> with <code className="px-1 py-0.5" data-o9ds-inline-code>aria-orientation="horizontal"</code>. Each tab uses <code className="px-1 py-0.5" data-o9ds-inline-code>role="tab"</code> with <code className="px-1 py-0.5" data-o9ds-inline-code>aria-selected</code>.
              </p>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                Screen readers announce the tablist as a group of tabs with the selected tab indicated. The roving tabindex ensures only the selected tab is in the page tab order.
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
                  { key: 'ArrowRight', behavior: 'Focus next enabled tab (wraps from last to first).' },
                  { key: 'ArrowLeft', behavior: 'Focus previous enabled tab (wraps from first to last).' },
                  { key: 'Home', behavior: 'Focus first non-disabled tab.' },
                  { key: 'End', behavior: 'Focus last non-disabled tab.' },
                  { key: 'Enter', behavior: 'Activate (select) the currently focused tab.' },
                  { key: 'Space', behavior: 'Activate (select) the currently focused tab.' },
                  { key: 'Delete', behavior: 'Close the focused tab if it is closable.' },
                  { key: 'Tab', behavior: 'Exit tabstrip to the next focusable element.' },
                  { key: 'Shift+Tab', behavior: 'Exit tabstrip to the previous focusable element.' },
                ]}
              />
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                Disabled tabs are skipped during arrow key navigation.
              </p>
            </div>

            <div id="a11y-focus" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Focus management</h3>
              <p className="text-sm font-medium text-o9ds-light-primary dark:text-white">Roving tabindex</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>The selected tab has <code className="px-1 py-0.5" data-o9ds-inline-code>tabindex="0"</code>; all other tabs have <code className="px-1 py-0.5" data-o9ds-inline-code>tabindex="-1"</code>.</li>
                <li>Arrow keys move focus between enabled tabs within the tablist.</li>
                <li>Tab key exits the tabstrip entirely; it does not cycle through tabs.</li>
              </ul>
              <p className="text-sm font-medium text-o9ds-light-primary dark:text-white pt-2">Focus visible</p>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <code className="px-1 py-0.5" data-o9ds-inline-code>outline: 1.5px solid</code> theme focus color around the entire tab on <code className="px-1 py-0.5" data-o9ds-inline-code>:focus-visible</code>.
              </p>
              <p className="text-sm font-medium text-o9ds-light-primary dark:text-white pt-2">Focus on remove</p>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                When the selected tab is removed (closed), focus moves to the nearest enabled tab.
              </p>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <strong className="text-o9ds-light-primary dark:text-white font-normal">WCAG:</strong> 2.4.7 Focus Visible · 2.1.1 Keyboard
              </p>
            </div>

            <div id="a11y-disabled" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Disabled state</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Disabled tabs have <code className="px-1 py-0.5" data-o9ds-inline-code>aria-disabled="true"</code> and the <code className="px-1 py-0.5" data-o9ds-inline-code>.is-disabled</code> class. They are skipped during keyboard navigation and cannot be activated. Entire tabstrip can be disabled via the root <code className="px-1 py-0.5" data-o9ds-inline-code>disabled</code> prop.
              </p>
            </div>

            <div id="a11y-loading" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Loading state</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
                Pattern C loading: <code className="px-1 py-0.5" data-o9ds-inline-code>aria-busy="true"</code> is set on the root element. The container disables interaction and individual tabs show shimmer overlay, hiding icons, labels, and actions while maintaining tab dimensions.
              </p>
            </div>

            <div id="a11y-notes" className="scroll-mt-24 space-y-4">
              <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Accessibility notes</h3>
              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
                <WhiteBgCard title="Panel association">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Use <code className="px-1 py-0.5" data-o9ds-inline-code>panelId</code> in TabItem to set <code className="px-1 py-0.5" data-o9ds-inline-code>aria-controls</code> on each tab. The associated panel should have <code className="px-1 py-0.5" data-o9ds-inline-code>role="tabpanel"</code> and <code className="px-1 py-0.5" data-o9ds-inline-code>aria-labelledby</code> pointing back to the tab.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Touch devices">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    Hover styles are scoped to <code className="px-1 py-0.5" data-o9ds-inline-code>.no-touch</code> to prevent sticky hover states. Set <code className="px-1 py-0.5" data-o9ds-inline-code>actionsVisibility="always"</code> on touch-primary interfaces.
                  </p>
                </WhiteBgCard>
                <WhiteBgCard title="Delete key">
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed m-0">
                    The Delete key closes the focused tab only if <code className="px-1 py-0.5" data-o9ds-inline-code>closable</code> is true. This matches common tab-based UI conventions (browsers, IDEs).
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
