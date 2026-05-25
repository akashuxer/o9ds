import PublicRasterPicture from '@/components/media/PublicRasterPicture'
import { useTheme } from '../context/ThemeContext'
import { getComponentResourceLinks } from '../data/componentResourceLinks'

const ICONS = {
  figma: '/componentOverview/figma.png',
  storybook: '/componentOverview/storybook.png',
  azureGit: '/componentOverview/azure-git.png',
}

const CHIPS = [
  { key: 'figma', label: 'Figma', hrefKey: 'figma', iconSize: 28 },
  { key: 'storybook', label: 'Storybook', hrefKey: 'storybook', iconSize: 20 },
  { key: 'azureGit', label: 'Azure Git', hrefKey: 'azureGit', iconSize: 28 },
]

/**
 * Figma / Storybook / Azure Git link chips below the page description.
 * @param {{ slug: string, className?: string }} props
 */
export default function ComponentResourceChips({ slug, className = '' }) {
  const { theme } = useTheme()
  const isLight = theme === 'light'
  const links = getComponentResourceLinks(slug)

  const visible = CHIPS.filter((chip) => links[chip.hrefKey])
  if (visible.length === 0) return null

  const borderColor = isLight ? '#E5E5E5' : '#404040'
  const bg = isLight ? '#FFFFFF' : '#171717'
  const textColor = isLight ? '#010101' : '#fafafa'

  return (
    <div className={`flex flex-wrap items-center gap-2 mt-4 ${className}`} data-arvo-component-resource-chips>
      {visible.map((chip) => (
        <a
          key={chip.key}
          href={links[chip.hrefKey]}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 pl-2 pr-3.5 py-1.5 text-sm font-medium transition-colors hover:opacity-90"
          style={{
            border: `1px solid ${borderColor}`,
            backgroundColor: bg,
            color: textColor,
            borderRadius: '9999px',
          }}
        >
          <PublicRasterPicture
            src={ICONS[chip.key]}
            alt=""
            width={chip.iconSize}
            height={chip.iconSize}
            className="shrink-0 object-contain"
            aria-hidden
          />
          {chip.label}
        </a>
      ))}
    </div>
  )
}
