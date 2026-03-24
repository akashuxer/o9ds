import { useState, useMemo } from 'react'
import { useTheme } from '../../context/ThemeContext'
import CodeBlock from '../../LayoutComponents/CodeBlock'
import DocTabs from '../../LayoutComponents/DocTabs'
import PageWithToc from '../../LayoutComponents/PageWithToc'
import DocTable from '../../LayoutComponents/DocTable'
import { SPACING_TOKENS } from '../../tokens/spacingTokens'

const buttonTabs = ['Overview', 'Usage', 'API', 'Accessibility']

const VARIANTS = [
  { name: 'Primary', desc: 'Main call-to-action; use sparingly (one per viewport region)' },
  { name: 'Secondary', desc: 'Supporting actions that are important but not primary' },
  { name: 'Tertiary', desc: 'Low-emphasis actions, dense toolbars or inline contexts' },
  { name: 'Outline', desc: 'Actions needing brand-color emphasis without filled background' },
  { name: 'Danger', desc: 'Destructive actions (delete, remove); always pair with confirmation' },
]

const PROPS = [
  { prop: 'label', type: 'string', default: '—', required: 'Yes', desc: 'Button text content' },
  { prop: 'variant', type: "'primary' | 'secondary' | 'tertiary' | 'outline' | 'danger'", default: "'primary'", required: 'No', desc: 'Visual style variant' },
  { prop: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", required: 'No', desc: 'Button size (height, padding, font, icon)' },
  { prop: 'type', type: "'button' | 'submit' | 'reset'", default: "'button'", required: 'No', desc: 'Native HTML button type' },
  { prop: 'icon', type: 'string', default: 'undefined', required: 'No', desc: 'Leading icon name without o9con- prefix' },
  { prop: 'disabled', type: 'boolean', default: 'false', required: 'No', desc: 'Prevents all interaction' },
  { prop: 'selected', type: 'boolean', default: 'undefined', required: 'No', desc: 'Persistent active/selected state for toggle buttons' },
  { prop: 'fullWidth', type: 'boolean', default: 'false', required: 'No', desc: 'Expands button to fill container width' },
  { prop: 'loading', type: 'boolean', default: 'false', required: 'No', desc: 'Shows skeleton shimmer overlay; prevents interaction' },
  { prop: 'tooltip', type: 'string', default: 'undefined', required: 'No', desc: 'Supplementary text via title attribute' },
  { prop: 'onClick', type: '(event) => void', default: 'undefined', required: 'No', desc: 'Click handler; suppressed when disabled or loading' },
]

const SIZES = [
  { size: 'sm', height: '24px', font: '12px', icon: '16px', padding: '4px 8px' },
  { size: 'md', height: '32px', font: '14px', icon: '20px', padding: '6px 12px' },
  { size: 'lg', height: '40px', font: '16px', icon: '24px', padding: '10px 12px' },
]

const ARIA_ATTRS = [
  { attr: 'aria-label', when: 'Required for icon-only buttons; optional when label is descriptive' },
  { attr: 'aria-disabled', when: 'Only when button must remain focusable while disabled' },
  { attr: 'aria-pressed', when: 'Set to "true"/"false" for toggle buttons (selected prop)' },
  { attr: 'aria-expanded', when: 'Set to "true" when button has opened associated content' },
  { attr: 'aria-haspopup', when: 'Set to "menu", "listbox", or "dialog" when button opens overlay' },
  { attr: 'aria-busy', when: 'Automatically set to "true" during loading state' },
  { attr: 'aria-describedby', when: 'Links to supplementary description (e.g., tooltip)' },
]

// Spacing tokens used by Button (from size padding: 4, 6, 8, 10, 12)
const BUTTON_SPACING_TOKENS = SPACING_TOKENS.filter((t) => ['o9ds-space-4', 'o9ds-space-6', 'o9ds-space-8', 'o9ds-space-10', 'o9ds-space-12'].includes(t.token))

export default function Button() {
  const [activeTab, setActiveTab] = useState('Overview')
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const onThisPageSections = useMemo(() => {
    if (activeTab === 'Overview') {
      return [
        { id: 'when-to-use', label: 'When to Use' },
        { id: 'variants', label: 'Variants' },
      ]
    }
    if (activeTab === 'Usage') {
      return [
        { id: 'usage-react', label: 'React' },
        { id: 'usage-html', label: 'HTML' },
        { id: 'usage-loading', label: 'Loading State' },
      ]
    }
    if (activeTab === 'API') {
      return [
        { id: 'api-props', label: 'Props' },
        { id: 'api-css', label: 'CSS Variables' },
        { id: 'api-size', label: 'Size Reference' },
        { id: 'api-spacing', label: 'Spacing Tokens' },
      ]
    }
    if (activeTab === 'Accessibility') {
      return [
        { id: 'a11y-keyboard', label: 'Keyboard Interactions' },
        { id: 'a11y-aria', label: 'ARIA Attributes' },
        { id: 'a11y-focus', label: 'Focus' },
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
          Button
        </h1>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed">
          Interactive element for triggering actions, submitting forms, or opening associated content. Supports five visual variants, three sizes, an optional leading icon, and a skeleton shimmer loading state.
        </p>

        <DocTabs tabs={buttonTabs} activeTab={activeTab} onSelect={setActiveTab} />
      </section>

      {activeTab === 'Overview' && (
        <>
          <section id="when-to-use">
            <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white mb-4">When to Use</h2>
            <ul className="space-y-3 text-o9ds-light-secondary dark:text-neutral-400">
              {VARIANTS.map(({ name, desc }) => (
                <li key={name}>
                  <strong className="text-o9ds-light-primary dark:text-white">{name}</strong> — {desc}
                </li>
              ))}
            </ul>
          </section>

          <section id="variants">
            <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white mb-4">Variants</h2>
            <div className="flex flex-wrap gap-4">
              {['Primary', 'Secondary', 'Tertiary', 'Outline', 'Danger'].map((name) => (
                <button
                  key={name}
                  className="px-4 py-2.5 text-sm font-medium border transition-colors"
                  style={{
                    ...(name === 'Primary' && { backgroundColor: isLight ? '#010101' : '#fff', color: isLight ? '#fff' : '#000', borderColor: 'transparent' }),
                    ...(name === 'Secondary' && { backgroundColor: isLight ? '#F2F2F2' : '#404040', color: isLight ? '#010101' : '#fff', borderColor: 'transparent' }),
                    ...(name === 'Tertiary' && { backgroundColor: 'transparent', color: isLight ? '#010101' : '#fff', borderColor: 'transparent' }),
                    ...(name === 'Outline' && { backgroundColor: 'transparent', borderColor: isLight ? '#010101' : '#fff', color: isLight ? '#010101' : '#fff' }),
                    ...(name === 'Danger' && { backgroundColor: '#ff1e39', color: '#fff', borderColor: 'transparent' }),
                  }}
                >
                  {name}
                </button>
              ))}
            </div>
          </section>
        </>
      )}

      {activeTab === 'Usage' && (
        <>
          <section id="usage-react">
            <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white mb-4">React</h2>
            <CodeBlock
              code={`import { O9Button } from '@o9ds/react';

// Basic
<O9Button label="Save Changes" variant="primary" />

// With leading icon
<O9Button label="Add Item" variant="primary" icon="add" />

// Disabled
<O9Button label="Submit" variant="primary" disabled />

// Loading
<O9Button label="Saving..." variant="primary" loading />

// Toggle / selected state
<O9Button label="Bold" variant="secondary" selected aria-pressed="true" />

// Full width
<O9Button label="Continue" variant="primary" fullWidth />`}
              label="O9Button React"
            />
          </section>

          <section id="usage-html">
            <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white mb-4">HTML</h2>
            <CodeBlock
              code={`<!-- Primary (md) -->
<button class="o9ds-btn o9ds-btn--primary o9ds-btn--md" type="button">
  <span class="o9ds-btn__lbl">Save Changes</span>
</button>

<!-- Secondary with leading icon -->
<button class="o9ds-btn o9ds-btn--secondary o9ds-btn--md" type="button">
  <span class="o9ds-btn__ico o9con o9con-download" aria-hidden="true"></span>
  <span class="o9ds-btn__lbl">Download</span>
</button>

<!-- Outline, small -->
<button class="o9ds-btn o9ds-btn--outline o9ds-btn--sm" type="button">
  <span class="o9ds-btn__lbl">Filter</span>
</button>

<!-- Danger -->
<button class="o9ds-btn o9ds-btn--danger o9ds-btn--md" type="button">
  <span class="o9ds-btn__lbl">Delete</span>
</button>

<!-- Disabled -->
<button class="o9ds-btn o9ds-btn--primary o9ds-btn--md" type="button" disabled>
  <span class="o9ds-btn__lbl">Unavailable</span>
</button>

<!-- Loading -->
<button class="o9ds-btn o9ds-btn--primary o9ds-btn--md loading" type="button" aria-busy="true">
  <span class="o9ds-btn__lbl">Saving...</span>
</button>

<!-- Toggle (selected) -->
<button class="o9ds-btn o9ds-btn--secondary o9ds-btn--md active" type="button" aria-pressed="true">
  <span class="o9ds-btn__lbl">Bold</span>
</button>`}
              label="HTML markup"
            />
          </section>

          <section id="usage-loading">
            <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white mb-4">Loading State</h2>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-4">
              The Button uses a full skeleton shimmer overlay that covers the entire surface while maintaining dimensions. No separate debounce is needed.
            </p>
            <CodeBlock
              code={`// React — toggle loading on async action
const [loading, setLoading] = React.useState(false);

const handleSave = async () => {
  setLoading(true);
  await saveData();
  setLoading(false);
};

<O9Button label="Save" loading={loading} onClick={handleSave} />`}
              label="React loading"
            />
            <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 mt-4">
              Buttons inside a container with <code className="px-1 py-0.5" data-o9ds-inline-code>data-loading="true"</code> automatically enter loading state. Use <code className="px-1 py-0.5" data-o9ds-inline-code>data-loading-ignore="true"</code> on a button to opt out.
            </p>
          </section>
        </>
      )}

      {activeTab === 'API' && (
        <>
          <section id="api-props">
            <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white mb-4">Props</h2>
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
            <p className="mt-3 text-sm text-o9ds-light-secondary dark:text-neutral-400">
              The O9Button React component accepts all standard <code className="px-1 py-0.5" data-o9ds-inline-code>HTMLButtonElement</code> attributes via spread (including onFocus, onBlur, onKeyDown).
            </p>
          </section>

          <section id="api-css">
            <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white mb-4">CSS Variables</h2>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-4">
              Override these on <code className="px-1 py-0.5" data-o9ds-inline-code>.o9ds-btn</code> or a parent to theme the button.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { cat: 'Layout', vars: ['--o9ds-btn-height', '--o9ds-btn-padding-block', '--o9ds-btn-padding-inline', '--o9ds-btn-gap'] },
                { cat: 'Typography', vars: ['--o9ds-btn-font-size', '--o9ds-btn-font-weight', '--o9ds-btn-line-height'] },
                { cat: 'Icon', vars: ['--o9ds-btn-icon-size'] },
                { cat: 'Color', vars: ['--o9ds-btn-bg-color', '--o9ds-btn-text-color', '--o9ds-btn-icon-color', '--o9ds-btn-border-color'] },
                { cat: 'Border', vars: ['--o9ds-btn-border-width'] },
              ].map(({ cat, vars }) => (
                <div key={cat} className="border p-4 dark:border-neutral-700" style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#FFFFFF' } : undefined}>
                  <h3 className="text-sm font-semibold text-o9ds-light-primary dark:text-white mb-2">{cat}</h3>
                  <ul className="space-y-1 text-sm font-mono text-o9ds-light-secondary dark:text-neutral-400">
                    {vars.map((v) => (
                      <li key={v}>{v}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="api-size">
            <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white mb-4">Size Reference</h2>
            <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                    <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Size</th>
                    <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Height</th>
                    <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Font</th>
                    <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Icon</th>
                    <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Padding</th>
                  </tr>
                </thead>
                <tbody>
                  {SIZES.map((row) => (
                    <tr key={row.size} className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                      <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{row.size}</td>
                      <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.height}</td>
                      <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.font}</td>
                      <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.icon}</td>
                      <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{row.padding}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="api-spacing">
            <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white mb-4">Spacing Tokens</h2>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-4">
              Button padding uses these spacing tokens. Use <code className="px-1 py-0.5" data-o9ds-inline-code>var(--o9ds-space-*)</code> for consistency.
            </p>
            <DocTable tokens={BUTTON_SPACING_TOKENS} showCopy={false} />
          </section>
        </>
      )}

      {activeTab === 'Accessibility' && (
        <section id="button-accessibility">
          <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white mb-6">Accessibility</h2>

          <div id="a11y-keyboard" className="mb-8">
            <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white mb-3">Keyboard Interactions</h3>
            <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                    <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Key</th>
                    <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                    <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">Enter</td>
                    <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">Activate the button</td>
                  </tr>
                  <tr className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                    <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">Space</td>
                    <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">Activate the button</td>
                  </tr>
                  <tr className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                    <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">Tab</td>
                    <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">Move focus to next focusable element</td>
                  </tr>
                  <tr className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                    <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">Shift+Tab</td>
                    <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">Move focus to previous focusable element</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div id="a11y-aria" className="mb-8">
            <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white mb-3">ARIA Attributes</h3>
            <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                    <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Attribute</th>
                    <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">When to Use</th>
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

          <div id="a11y-focus">
            <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white mb-3">Focus</h3>
            <ul className="space-y-2 text-o9ds-light-secondary dark:text-neutral-400">
              <li>Focus ring uses <code className="px-1 py-0.5" data-o9ds-inline-code>outline: 1px solid</code> with <code className="px-1 py-0.5" data-o9ds-inline-code>outline-offset: 2px</code>.</li>
              <li>When <code className="px-1 py-0.5" data-o9ds-inline-code>.focus-border</code> utility is applied, <code className="px-1 py-0.5" data-o9ds-inline-code>outline-offset</code> becomes <code className="px-1 py-0.5" data-o9ds-inline-code>-1px</code> — use in dense layouts (button groups, toolbars, table cells) where an outer ring would overlap adjacent elements.</li>
              <li>Hover styles are scoped to <code className="px-1 py-0.5" data-o9ds-inline-code>.no-touch</code> to prevent sticky hover states on touch devices.</li>
            </ul>
          </div>

          <div className="mt-8 p-4 border dark:border-neutral-700" style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#F2F2F2' } : undefined}>
            <h3 className="text-sm font-semibold text-o9ds-light-primary dark:text-white mb-2">Related Components</h3>
            <ul className="text-sm text-o9ds-light-secondary dark:text-neutral-400 space-y-1">
              <li><strong className="text-o9ds-light-primary dark:text-white">Icon Button</strong> (o9ds-icon-btn) — icon-only variant, square dimensions</li>
              <li><strong className="text-o9ds-light-primary dark:text-white">Dropdown Button</strong> (o9ds-dd-btn) — opens dropdown; extends Button with aria-haspopup and aria-expanded</li>
              <li><strong className="text-o9ds-light-primary dark:text-white">Button Group</strong> — wraps multiple buttons; applies .focus-border to inner buttons</li>
            </ul>
          </div>
        </section>
      )}
    </div>
    </PageWithToc>
  )
}
