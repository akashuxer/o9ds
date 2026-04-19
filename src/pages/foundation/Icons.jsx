import { useState, useRef, useMemo } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { o9conIcons } from '../../tokens/o9conIcons'
import { ICON_SIZE_TOKENS_SCSS } from '../../tokens/iconTokens'
import CodeBlock from '../../LayoutComponents/CodeBlock'
import ExpandableDocImage from '../../LayoutComponents/ExpandableDocImage'
import PageWithToc from '../../LayoutComponents/PageWithToc'

/** Icon spec SVGs live in `public/IconGraphic/` (dot-grid surface matches ComponentOverviewCard). */
function iconGraphicSrc(filename) {
  return `/IconGraphic/${encodeURIComponent(filename)}`
}

/** Dot-band spec figure + click to enlarge (same neutral dot grid in light/dark as catalog cards). */
function IconSpecExpandableFigure({ illustrationSrc, imageAlt }) {
  return (
    <div
      className="overflow-hidden rounded-none border border-[#E5E5E5] shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow duration-200 hover:shadow-md dark:border-neutral-700"
      data-o9ds-icon-spec-figure
    >
      <div className="relative w-full shrink-0 overflow-hidden">
        <div className="absolute inset-0 bg-white dark:bg-white" aria-hidden />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(148, 163, 184, 0.35) 1px, transparent 1px)',
            backgroundSize: '14px 14px',
          }}
          aria-hidden
        />
        <div className="relative z-10 flex w-full items-center justify-center px-4 py-8 sm:py-10">
          <ExpandableDocImage
            src={illustrationSrc}
            alt={imageAlt}
            triggerClassName="!max-w-none flex w-full min-h-[120px] items-center justify-center"
            className="max-h-[min(70vh,560px)] w-auto max-w-full object-contain object-center"
          />
        </div>
      </div>
    </div>
  )
}

/**
 * Category preview SVGs use white fills (for dark UI). Light mode: invert to dark glyphs on light dot grid.
 * Dark mode: dark panel + no invert so strokes stay visible.
 */
function IconCategoryDotCard({ title, description, illustrationSrc, imageAlt }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-none border border-[#E5E5E5] shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow duration-200 hover:shadow-md dark:border-neutral-700">
      <div className="relative h-[168px] w-full shrink-0 overflow-hidden border-b border-[#E5E5E5] dark:border-neutral-700">
        <div className="absolute inset-0 bg-white dark:bg-[#0a0a0a]" aria-hidden />
        <div
          className="absolute inset-0 pointer-events-none dark:hidden"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(148, 163, 184, 0.35) 1px, transparent 1px)',
            backgroundSize: '14px 14px',
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 hidden dark:block"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '14px 14px',
          }}
          aria-hidden
        />
        <div className="relative z-10 flex h-full w-full items-center justify-center px-4 py-5">
          <ExpandableDocImage
            src={illustrationSrc}
            alt={imageAlt}
            triggerClassName="!max-w-none flex h-full min-h-[168px] w-full items-center justify-center"
            className="max-h-[120px] w-auto max-w-full object-contain invert dark:invert-0"
          />
        </div>
      </div>
      <div className="bg-[#FAFAFA] px-4 py-4 dark:bg-neutral-900">
        <h3 className="mb-1.5 text-base font-semibold text-[#010101] dark:text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-[#525252] dark:text-neutral-400">{description}</p>
      </div>
    </div>
  )
}

const ICON_TYPE_CATEGORIES = [
  {
    file: 'functional.svg',
    title: '1. Functional Icons',
    description:
      'Essential interface actions and system operations that users interact with frequently. These icons represent core functionality like save, edit, delete, and search.',
    imageAlt:
      'Functional icon category: settings, home, save or edit, search, filter, and calendar style glyphs in a grid.',
  },
  {
    file: 'navigational.svg',
    title: '2. Navigation Icons',
    description:
      'Directional and movement-based icons that guide users through the interface. Includes arrows, chevrons, and directional indicators for navigation flows.',
    imageAlt: 'Navigation icon category: chevrons, arrows, and directional indicators.',
  },
  {
    file: 'status.svg',
    title: '3. Status Icons',
    description:
      'Communication and feedback icons that convey system states, user notifications, and important information. Includes success, warning, error, and informational indicators.',
    imageAlt: 'Status icon category: checkmarks, clock, pause, and alert style glyphs.',
  },
  {
    file: 'custom-features.svg',
    title: '4. Custom Features Icons',
    description:
      'Specialized icons designed for specific product features and unique functionality. These icons are tailored to represent domain-specific actions and concepts within the o9 platform.',
    imageAlt: 'Custom feature icon category: domain-specific product and platform glyphs.',
  },
]

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

  const onThisPageSections = useMemo(() => {
    if (activeTab === 'Overview') {
      return [
        { id: 'design-philosophy', label: 'o9Con Design Philosophy' },
        { id: 'evolution', label: 'Evolution: Old vs New Icons' },
        { id: 'icon-types', label: 'Icon Types: Categorisation' },
        { id: 'pixel-grid', label: 'Pixel Grid' },
        { id: 'base-grid', label: 'Base Grid' },
        { id: 'padding', label: 'Padding' },
        { id: 'key-shapes', label: 'Key Shapes' },
        { id: 'shape-size', label: 'Shape Size' },
        { id: 'strokes', label: 'Strokes' },
        { id: 'angles', label: 'Angles' },
        { id: 'action', label: 'Action' },
        { id: 'combining-multiple-actions', label: 'Combining Multiple Actions' },
        { id: 'dos-and-donts', label: "Dos and Don'ts" },
        { id: 'icons-in-figma', label: 'Icons in Figma' },
        { id: 'illustrator-tips', label: 'Illustrator tips' },
        { id: 'available-sizes', label: 'Available Sizes' },
      ]
    }
    if (activeTab === 'o9con Gallery') {
      return [
        { id: 'display-options', label: 'Display Options' },
        { id: 'o9con-library', label: 'o9con Library' },
      ]
    }
    if (activeTab === 'Accessibility') {
      return [
        { id: 'aria-attributes', label: 'ARIA Attributes' },
        { id: 'visual-accessibility', label: 'Visual Accessibility' },
        { id: 'interactive-icons', label: 'Interactive Icons' },
      ]
    }
    if (activeTab === 'Code') {
      return [
        { id: 'implementation', label: 'Implementation' },
        { id: 'icon-size-tokens', label: 'Icon Size Tokens' },
      ]
    }
    return []
  }, [activeTab])

  return (
    <PageWithToc sections={onThisPageSections}>
    <div className="space-y-8">
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
          Our redesigned o9con icon library includes over 800 meticulously crafted icons. These modern visuals guide your journey with clarity and ease, combining functionality with a fresh, sophisticated aesthetic. The precision of these icons ensures intuitive interactions, enhancing the overall experience while reinforcing a visually cohesive and professional platform environment.
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
        <section className="space-y-12">
          {/* Design Philosophy */}
          <div id="design-philosophy">
            <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white mb-2">o9Con Design Philosophy</h2>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-6">Core principles that guide o9&apos;s icon design system and creation process</p>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-6 max-w-2xl">
              Our icon design philosophy is built on five fundamental principles that ensure consistency, clarity, and usability across all interface elements. These principles guide every aspect of our icon creation and selection process.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'Simplicity', desc: 'Avoid over-complicated designs. Each icon should communicate its purpose clearly without unnecessary visual elements.' },
                { title: 'Clarity', desc: 'Ensure icons are easily recognizable and their meaning is immediately understood by users.' },
                { title: 'Scalability', desc: 'Icons must work at various sizes while maintaining their clarity and visual impact.' },
                { title: 'Consistency', desc: 'Align with the visual language of the platform. Standardized stroke width, size, and corner radii across icons.' },
                { title: 'Accessibility', desc: 'High contrast and distinguishable shapes that work for all users, including those with visual impairments.' },
              ].map(({ title, desc }) => (
                <div
                  key={title}
                  className="border dark:border-neutral-700 p-6 dark:bg-neutral-800/50 shadow-sm"
                  style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#FFFFFF' } : undefined}
                >
                  <h3 className="font-semibold text-o9ds-light-primary dark:text-white mb-2">{title}</h3>
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Evolution */}
          <div id="evolution">
            <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white mb-2">Evolution: Old vs New Icons</h2>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-2">Continuous improvement in design quality and user experience</p>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-6 max-w-2xl">
              Our icon evolution reflects continuous improvement in design quality and user experience. The new icon set demonstrates enhanced visual balance, improved proportions, simplified design, better spacing, and adherence to our sharp corner philosophy with unified design approach and enhanced readability.
            </p>
            <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                    <th className="py-3 px-4 text-left font-medium text-o9ds-light-primary dark:text-white">Old</th>
                    <th className="py-3 px-4 text-left font-medium text-o9ds-light-primary dark:text-white">New Icons</th>
                    <th className="py-3 px-4 text-left font-medium text-o9ds-light-primary dark:text-white">Key Improvements</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                    <td className="py-3 px-4 text-o9ds-light-secondary dark:text-neutral-400">Thicker stroke, rounded exterior and interior corners</td>
                    <td className="py-3 px-4 text-o9ds-light-secondary dark:text-neutral-400">Thinner strokes, sharp right-angled corners, more geometric and refined</td>
                    <td className="py-3 px-4 text-o9ds-light-secondary dark:text-neutral-400">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Visually balanced</li>
                        <li>Improved proportions</li>
                        <li>Simplified design</li>
                        <li>Better spacing</li>
                        <li>Sharp corners</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                    <td className="py-3 px-4 text-o9ds-light-secondary dark:text-neutral-400">Thicker shapes, more compact composition</td>
                    <td className="py-3 px-4 text-o9ds-light-secondary dark:text-neutral-400">Thinner, cleaner lines, more whitespace for clarity</td>
                    <td className="py-3 px-4 text-o9ds-light-secondary dark:text-neutral-400">Unified Design Approach · Enhanced Readability</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Icon Types */}
          <div id="icon-types">
            <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white mb-2">Icon Types: Categorisation</h2>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-6">Organized icon categories that enhance user experience through logical grouping</p>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-6 max-w-2xl">
              Our icon library is systematically organized into four primary categories, each designed to serve specific interface functions while maintaining visual consistency across the entire system.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {ICON_TYPE_CATEGORIES.map(({ file, title, description, imageAlt }) => (
                <IconCategoryDotCard
                  key={file}
                  title={title}
                  description={description}
                  illustrationSrc={iconGraphicSrc(file)}
                  imageAlt={imageAlt}
                />
              ))}
            </div>
          </div>

          {/* Pixel Grid */}
          <div id="pixel-grid">
            <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white mb-2">Pixel Grid</h2>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-4 max-w-2xl">
              All icons are designed on a pixel-based grid with the following specifications:
            </p>
            <div className="border overflow-hidden mb-4 max-w-xl" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                    <th className="py-2 px-4 text-left font-medium text-o9ds-light-primary dark:text-white w-40">Grid size</th>
                    <td className="py-2 px-4 text-o9ds-light-secondary dark:text-neutral-400">20px × 20px</td>
                  </tr>
                  <tr>
                    <th className="py-2 px-4 text-left font-medium text-o9ds-light-primary dark:text-white">Padding</th>
                    <td className="py-2 px-4 text-o9ds-light-secondary dark:text-neutral-400">2px</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-6 max-w-2xl">
              This ensures consistent scaling, alignment, and visual balance.
            </p>
            <div className="space-y-6">
              <IconSpecExpandableFigure
                illustrationSrc={iconGraphicSrc('pixel-grid-01.svg')}
                imageAlt="Pixel grid specification diagram 1: 20 by 20 pixel grid with padding for o9con icons."
              />
              <IconSpecExpandableFigure
                illustrationSrc={iconGraphicSrc('pixel-grid-02.svg')}
                imageAlt="Pixel grid specification diagram 2: alignment and visual balance on the icon pixel grid."
              />
            </div>
          </div>

          {/* Base Grid */}
          <div id="base-grid">
            <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white mb-2">Base Grid</h2>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-2">The underlying foundation for all o9 icon design and construction</p>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-4 max-w-2xl">
              The square grid is the underlying fabric of all o9 icons. It is used as the foundation to determine line thickness, proportion, shape, and positioning across the entire set of icons. Icons are drawn on a pixel-based grid of 24×24px and scaled down linearly to different sizes.
            </p>
            <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 mb-4">Avoid random decimal points in the x- and y-coordinates. All icons are drawn on a pixel-based grid.</p>
            <div className="border overflow-hidden" style={isLight ? { borderColor: '#E5E5E5' } : undefined}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: isLight ? '#F2F2F2' : undefined }} className="dark:bg-neutral-800/50">
                    <th className="py-2 px-4 text-left font-medium text-o9ds-light-primary dark:text-white">Icon size</th>
                    <th className="py-2 px-4 text-left font-medium text-o9ds-light-primary dark:text-white">Stroke width</th>
                    <th className="py-2 px-4 text-left font-medium text-o9ds-light-primary dark:text-white">Padding</th>
                    <th className="py-2 px-4 text-left font-medium text-o9ds-light-primary dark:text-white">Live area</th>
                    <th className="py-2 px-4 text-left font-medium text-o9ds-light-primary dark:text-white">Corner radius</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t dark:border-neutral-700" style={{ borderColor: isLight ? '#E5E5E5' : undefined }}>
                    <td className="py-2 px-4 text-o9ds-light-secondary dark:text-neutral-400">24px</td>
                    <td className="py-2 px-4 text-o9ds-light-secondary dark:text-neutral-400">1.4px</td>
                    <td className="py-2 px-4 text-o9ds-light-secondary dark:text-neutral-400">2px</td>
                    <td className="py-2 px-4 text-o9ds-light-secondary dark:text-neutral-400">20px</td>
                    <td className="py-2 px-4 text-o9ds-light-secondary dark:text-neutral-400">0px</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6">
              <IconSpecExpandableFigure
                illustrationSrc={iconGraphicSrc('Base Grid.svg')}
                imageAlt="o9 icon base grid: 24 by 24 artboard with 20 by 20 live area, stroke width, and padding guides."
              />
            </div>
          </div>

          {/* Padding */}
          <div id="padding">
            <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white mb-2">Padding</h2>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-2">Essential spacing that ensures proper icon scaling and white space</p>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-4 max-w-2xl">
              The grid contains 2px padding. This ensures icons will retain their desired scale and surrounding white space when exported into their UI bounding box. Icons should remain inside the grid.
            </p>
            <IconSpecExpandableFigure
              illustrationSrc={iconGraphicSrc('Padding.svg')}
              imageAlt="Diagram showing 2px padding between the outer frame and the 20 by 20 live drawing area for o9 icons."
            />
          </div>

          {/* Key Shapes */}
          <div id="key-shapes">
            <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white mb-2">Key Shapes</h2>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-2">Consistent proportions and shapes that provide structural foundation for all icons</p>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-4 max-w-2xl">
              Key lines give you consistent sizes for basic shapes or proportions across the icon set. Make sure when creating new icons the focal point is in the middle. Do use the key shape that best demonstrates the proportion of the metaphor.
            </p>
            <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 font-medium mb-2">4 types of basic key shapes:</p>
            <ul className="list-disc list-inside text-o9ds-light-secondary dark:text-neutral-400 space-y-1 mb-6">
              <li>Circle</li>
              <li>Rectangle</li>
              <li>Square</li>
              <li>Triangle</li>
            </ul>
            <IconSpecExpandableFigure
              illustrationSrc={iconGraphicSrc('Keyshapes.svg')}
              imageAlt="Key shape templates: circle, square, rectangle, and triangle guides for consistent proportions on the icon grid."
            />
          </div>

          {/* Shape Size */}
          <div id="shape-size">
            <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white mb-2">Shape Size</h2>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-2">Minimum size requirements and outline behavior for consistent icon rendering</p>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-6 max-w-2xl">
              No shape within an icon should be smaller than 4.27×4.27px. Once a shape reaches the minimum size (defined as a &quot;small square&quot;), it must be a solid fill and can no longer be an outline. This ensures clarity and visibility at small scales.
            </p>
            <IconSpecExpandableFigure
              illustrationSrc={iconGraphicSrc('Shape Size.svg')}
              imageAlt="Minimum shape size rules: small square threshold and when outlines become solid fills on the grid."
            />
          </div>

          {/* Strokes */}
          <div id="strokes">
            <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white mb-2">Strokes</h2>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-2">Visual weight consistency and stroke specifications for all icons</p>
            <ul className="mb-6 max-w-2xl list-disc space-y-2 pl-5 text-o9ds-light-secondary dark:text-neutral-400 marker:text-o9ds-light-secondary dark:marker:text-neutral-400">
              <li className="pl-1">One icon should not look heavier or lighter than other icons of the same size.</li>
              <li className="pl-1">
                Maintain the same visual weight by using a 1.4pt base stroke for all icons on the 20×20px grid.
              </li>
              <li className="pl-1">There are a few exceptions when the icon is complex or has a certain line density.</li>
              <li className="pl-1">For full shapes, make sure the stroke is an &quot;inner&quot; stroke.</li>
              <li className="pl-1">We use sharp-edged icons as default. You may use curves only in circular elements.</li>
            </ul>
            <IconSpecExpandableFigure
              illustrationSrc={iconGraphicSrc('strokes.svg')}
              imageAlt="Stroke weight and inner versus outer stroke behavior for o9 icons on the grid."
            />
          </div>

          {/* Angles */}
          <div id="angles">
            <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white mb-2">Angles</h2>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-2">Consistent angle increments that create harmony across the icon set</p>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-6 max-w-2xl">
              Create harmony across the icon set by consistently making 90° angles sit on the same increments. Use increments of 9° for other angles when needed.
            </p>
            <IconSpecExpandableFigure
              illustrationSrc={iconGraphicSrc('angles.svg')}
              imageAlt="Angle construction: 90 degree alignment and 9 degree increments on the icon grid."
            />
          </div>

          {/* Action */}
          <div id="action">
            <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white mb-2">Action</h2>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-2">Step-by-step icon creation process following o9 design guidelines</p>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-6 max-w-2xl">
              Follow these systematic steps to create icons that align with o9 design principles. Each step builds upon the previous to ensure consistency and quality.
            </p>
            <ol className="list-decimal list-inside space-y-4 text-o9ds-light-secondary dark:text-neutral-400">
              <li><strong className="text-o9ds-light-primary dark:text-white">Move the angle grid</strong> — Place the angle grid on the side of the 20×20px grid.</li>
              <li><strong className="text-o9ds-light-primary dark:text-white">Design within 9° increments</strong> — Start the icon design; it doesn&apos;t have to be centered as long as the degrees are carefully designed first.</li>
              <li><strong className="text-o9ds-light-primary dark:text-white">Center the shape</strong> — When angles are defined, center the shape on the grid for perfect symmetry.</li>
            </ol>
            <ul className="mt-4 mb-6 list-disc list-inside text-sm text-o9ds-light-secondary dark:text-neutral-400 space-y-1">
              <li>Always start with the established grid system and angle guidelines</li>
              <li>Maintain consistency with existing icon angles and proportions</li>
              <li>Ensure symmetrical design where appropriate for visual balance</li>
              <li>Test the icon at different sizes to verify scalability</li>
            </ul>
            <IconSpecExpandableFigure
              illustrationSrc={iconGraphicSrc('Action-process.svg')}
              imageAlt="Step-by-step action diagram for placing the angle grid, designing on increments, and centering shapes on the o9 icon grid."
            />
          </div>

          {/* Combining Multiple Actions */}
          <div id="combining-multiple-actions">
            <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white mb-2">Combining Multiple Actions</h2>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-4 max-w-2xl">
              When combining icons with multiple actions, divide the initial icon into one quarter and add the action with the padding of two grid boxes. Please see the examples below.
            </p>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-6 max-w-2xl">
              When crossing over an icon, make sure the initial whitespace uses two grid boxes of padding with a 45° cut-off.
            </p>
            <div className="space-y-6">
              <IconSpecExpandableFigure
                illustrationSrc={iconGraphicSrc('Combining  Multiple Actions-spacing.png')}
                imageAlt="Spacing when combining multiple actions: secondary action aligned with two grid boxes of padding from a quarter segment of the base icon."
              />
              <IconSpecExpandableFigure
                illustrationSrc={iconGraphicSrc('Combining  Multiple Actions -crossovers.png')}
                imageAlt="Crossing actions over an icon: two grid boxes of padding and a 45 degree cut-off at the overlap."
              />
            </div>
          </div>

          {/* Dos and Don'ts */}
          <div id="dos-and-donts">
            <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white mb-2">Dos and Don&apos;ts</h2>
            <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mb-2">Dos:</h3>
            <ul className="mb-6 max-w-2xl list-disc space-y-2 pl-5 text-o9ds-light-secondary dark:text-neutral-400 marker:text-o9ds-light-secondary dark:marker:text-neutral-400">
              <li className="pl-1">Use the pixel-based grid (20px × 20px) and maintain 2px padding.</li>
              <li className="pl-1">Center the focal point and ensure alignment within the grid.</li>
              <li className="pl-1">Keep line thickness and proportions consistent across the icon set.</li>
              <li className="pl-1">Simplify designs to maintain clarity at smaller sizes.</li>
              <li className="pl-1">Use whole numbers for x- and y-coordinates to avoid misalignment.</li>
            </ul>
            <IconSpecExpandableFigure
              illustrationSrc={iconGraphicSrc('do.svg')}
              imageAlt="Icon design dos: grid, padding, focal point, consistent strokes, simplicity, and whole-number coordinates."
            />
            <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white mt-8 mb-2">Don&apos;ts:</h3>
            <ul className="mb-6 max-w-2xl list-disc space-y-2 pl-5 text-o9ds-light-secondary dark:text-neutral-400 marker:text-o9ds-light-secondary dark:marker:text-neutral-400">
              <li className="pl-1">Do not exceed or fall short of the grid boundaries.</li>
              <li className="pl-1">Avoid using random decimal points in coordinates or line thickness.</li>
              <li className="pl-1">Do not overcrowd the icon with unnecessary details.</li>
              <li className="pl-1">Avoid inconsistent styles or deviations from the brand&apos;s visual language.</li>
            </ul>
            <IconSpecExpandableFigure
              illustrationSrc={iconGraphicSrc('dont.svg')}
              imageAlt="Icon design don'ts: staying inside the grid, avoiding arbitrary decimals, clutter, and off-brand styles."
            />
            <p className="mt-6 text-sm text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl">
              <strong className="text-o9ds-light-primary dark:text-white">Tip:</strong> Always double-check these guidelines for a polished and cohesive icon set.
            </p>
          </div>

          {/* Icons in Figma */}
          <div id="icons-in-figma">
            <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white mb-2">Icons in Figma</h2>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-6 max-w-2xl">
              Use the shared Figma structure and components so icons stay aligned with grid, padding, and export settings across files.
            </p>
            <IconSpecExpandableFigure
              illustrationSrc={iconGraphicSrc('Icons in Figma.svg')}
              imageAlt="Figma setup for o9 icons: frames, components, and grid alignment in the design tool."
            />
          </div>

          {/* Illustrator */}
          <div id="illustrator-tips">
            <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white mb-2">Illustrator tips</h2>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-6 max-w-2xl">
              Checklist for drawing and exporting icons in Adobe Illustrator without losing pixel alignment or stroke behavior.
            </p>
            <IconSpecExpandableFigure
              illustrationSrc={iconGraphicSrc('Illustrator  Things to remember.svg')}
              imageAlt="Illustrator checklist: pixel preview, strokes, alignment, and export settings for o9 icons."
            />
          </div>

          {/* Available Sizes */}
          <div id="available-sizes">
            <h2 className="text-xl font-bold text-o9ds-light-primary dark:text-white mb-2">Available Sizes</h2>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-4">Icons are available in multiple predefined sizes for consistency</p>
            <div className="border p-4 flex flex-wrap items-center gap-6 dark:border-neutral-700 dark:bg-neutral-800/50" style={isLight ? { borderColor: '#E5E5E5', backgroundColor: '#F2F2F2' } : undefined}>
              {SIZES.map((s) => (
                <div key={s} className="flex flex-col items-center gap-2">
                  <span className={`o9con o9con-chevron-right o9ds-icon-${s} dark:text-white`} style={isLight ? { color: '#010101' } : undefined} aria-hidden />
                  <span className="text-sm font-medium text-o9ds-light-primary dark:text-white">{s}px</span>
                  <code className="text-xs font-mono text-o9ds-light-secondary dark:text-neutral-400">o9ds-icon-{s}</code>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'o9con Gallery' && (
        <>
          <section id="display-options">
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

          <section id="o9con-library">
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
            <div id="aria-attributes">
              <h3 className="font-semibold text-o9ds-light-primary dark:text-white mb-3">ARIA Attributes</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>Use <code className="px-1 py-0.5" data-o9ds-inline-code>aria-hidden=&quot;true&quot;</code> for decorative icons that don&apos;t convey meaning</li>
                <li>Use <code className="px-1 py-0.5" data-o9ds-inline-code>aria-label</code> for icons that have semantic meaning</li>
                <li>Provide alternative text for icons used without accompanying text</li>
              </ul>
            </div>
            <div id="visual-accessibility">
              <h3 className="font-semibold text-o9ds-light-primary dark:text-white mb-3">Visual Accessibility</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-o9ds-light-secondary dark:text-neutral-400">
                <li>Ensure sufficient color contrast (4.5:1 for normal text, 3:1 for large text)</li>
                <li>Icons should be at least 16px for comfortable viewing</li>
                <li>Don&apos;t rely solely on icons to convey important information</li>
              </ul>
            </div>
            <div id="interactive-icons">
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
        <section className="space-y-8" id="implementation">
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

          <div id="icon-size-tokens">
            <h3 className="text-lg font-semibold text-o9ds-light-primary dark:text-white mb-3">Icon Size Tokens</h3>
            <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-4">Copy the SCSS variables for icon sizes:</p>
            <CodeBlock code={ICON_SIZE_TOKENS_SCSS} label="o9con icon size tokens" />
          </div>
        </section>
      )}
    </div>
    </PageWithToc>
  )
}
