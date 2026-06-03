import { Link } from 'react-router-dom'
import PublicRasterPicture from '@/components/media/PublicRasterPicture'
import { useTheme } from '../context/ThemeContext'
import { getComponentResourceLinks } from '../data/componentResourceLinks'
import {
  COMPONENT_RESOURCE_STATUS_LABEL,
  getComponentResourceStatusColors,
} from '../data/componentResourceStatus'

const ICONS = {
  figma: '/componentOverview/figma.png',
  storybook: '/componentOverview/storybook.png',
  azureGit: '/componentOverview/azure-git.png',
}

const CHIPS = [
  { key: 'azureGit', label: 'Azure Git', hrefKey: 'azureGit', iconSize: 28 },
  { key: 'storybook', label: 'Storybook', hrefKey: 'storybook', iconSize: 20 },
  { key: 'figma', label: 'Figma', hrefKey: 'figma', iconSize: 28 },
  { key: 'documentation', label: 'Documentation', hrefKey: null, iconSize: 20, useDocIcon: true },
]

function ReadyCheckIcon() {
  return (
    <span
      className="o9con o9con-check-circle shrink-0 leading-none"
      style={{ fontSize: '16px' }}
      aria-hidden
    />
  )
}

/**
 * @param {{
 *   label: string,
 *   icon: import('react').ReactNode,
 *   href?: string | null,
 *   internalTo?: string,
 *   status?: import('../data/componentResourceStatus').ComponentResourceStatusValue,
 *   isDark: boolean,
 * }} props
 */
function ResourceChip({ label, icon, href, internalTo, status, isDark }) {
  const borderColor = isDark ? '#404040' : '#E5E5E5'
  const bg = isDark ? '#171717' : '#FFFFFF'
  const textColor = isDark ? '#fafafa' : '#010101'

  const colors = status ? getComponentResourceStatusColors(status, isDark) : null
  const statusLabel = status ? COMPONENT_RESOURCE_STATUS_LABEL[status] : null
  const ariaLabel = statusLabel ? `${label} — ${statusLabel}` : label

  const style = colors
    ? {
        border: `1px solid ${colors.border}`,
        backgroundColor: colors.bg,
        color: colors.text,
        borderRadius: '9999px',
      }
    : {
        border: `1px solid ${borderColor}`,
        backgroundColor: bg,
        color: textColor,
        borderRadius: '9999px',
      }

  const className =
    'inline-flex items-center gap-1.5 pl-2 pr-3.5 py-1.5 text-sm font-medium transition-colors hover:opacity-90'

  const chipContent = (
    <>
      {icon}
      {label}
      {status === 'ready' && <ReadyCheckIcon />}
    </>
  )

  const chipProps = {
    className,
    style,
    'aria-label': ariaLabel,
    title: ariaLabel,
    'data-arvo-resource-chip': true,
    'data-arvo-resource-status': status,
  }

  if (internalTo) {
    return (
      <Link to={internalTo} {...chipProps}>
        {chipContent}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...chipProps}>
        {chipContent}
      </a>
    )
  }

  return <span {...chipProps}>{chipContent}</span>
}

/**
 * Figma / Storybook / Azure Git / Documentation chips below the page description.
 * Pass `resourceStatus` to always show all four chips with ready / not started / in progress color coding.
 *
 * @param {{ slug: string, className?: string, resourceStatus?: import('../data/componentResourceStatus').ComponentResourceStatusMap }} props
 */
export default function ComponentResourceChips({ slug, className = '', resourceStatus }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const links = getComponentResourceLinks(slug)
  const docsPath = `/components/${slug}/overview`

  const chipsToRender = resourceStatus
    ? CHIPS
    : CHIPS.filter((chip) => (chip.hrefKey ? links[chip.hrefKey] : false))

  if (chipsToRender.length === 0) return null

  return (
    <div
      className={`flex flex-wrap items-center gap-2 mt-4 ${className}`}
      data-arvo-component-resource-chips
      aria-label={resourceStatus ? 'Component resources and pipeline status' : undefined}
    >
      {chipsToRender.map((chip) => {
        const status = resourceStatus?.[chip.key]
        const href = chip.hrefKey ? links[chip.hrefKey] : null
        const internalTo = chip.key === 'documentation' && resourceStatus ? docsPath : undefined

        let icon
        if (chip.useDocIcon) {
          icon = (
            <span
              className="o9con o9con-book shrink-0 leading-none"
              style={{ fontSize: chip.iconSize }}
              aria-hidden
            />
          )
        } else {
          icon = (
            <PublicRasterPicture
              src={ICONS[chip.key]}
              alt=""
              width={chip.iconSize}
              height={chip.iconSize}
              className="shrink-0 object-contain"
              aria-hidden
            />
          )
        }

        return (
          <ResourceChip
            key={chip.key}
            label={chip.label}
            icon={icon}
            href={chip.key === 'documentation' ? null : href}
            internalTo={internalTo}
            status={status}
            isDark={isDark}
          />
        )
      })}
    </div>
  )
}
