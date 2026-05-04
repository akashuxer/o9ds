/**
 * External resources for Resources / Links page — aligned with architecture.md and team docs.
 * @typedef {{ text: string, href?: string | null }} ResourceLinkPiece
 * @typedef {{ label: string, hint?: string, links: ResourceLinkPiece[] }} ResourceRow
 */

/** Shared Google Doc (living index) */
export const RESOURCES_GOOGLE_DOC_INDEX =
  'https://docs.google.com/document/d/10f5ULiuXAm5XneXt3AHSY0ftBGE6F_De/edit?usp=sharing'

/** Arvo taxonomy (ideation) — same family of working doc as index */
export const ARVO_TAXONOMY_DOC_URL =
  'https://docs.google.com/document/d/10f5ULiuXAm5XneXt3AHSY0ftBGE6F_De/edit?usp=sharing&ouid=102674649323145107743&rtpof=true&sd=true'

/** Architecture reference (Google Doc) */
export const ARCHITECTURE_REFERENCE_DOC_URL =
  'https://docs.google.com/document/d/1Fee0iGNmnPYXcNPdHIR9KzVKSryll05J8__TNEUsfrw/edit?tab=t.0'

/** Docs — planning, compliance, taxonomy */
export const RESOURCES_DOCS = [
  {
    label: 'Document Site',
    hint: 'host pending',
    links: [{ text: 'arvo.vercel.app', href: 'https://arvo.vercel.app/' }],
  },
  {
    label: 'Arvo Taxonomy',
    hint: 'ideation',
    links: [{ text: 'Arvo Taxonomy (ideation)', href: ARVO_TAXONOMY_DOC_URL }],
  },
  {
    label: 'Tracks & Open Topics',
    links: [
      {
        text: 'Arvo Planning Tracks & Open Topics',
        href: 'https://docs.google.com/document/d/1eA1lUJNcqk5wNXt5IzwkbSZEoZ5giIHF7r48KlHH-Nc/edit?usp=sharing',
      },
    ],
  },
  {
    label: 'Compliance Metrics',
    hint: 'not migration',
    links: [
      {
        text: 'Arvo Compliance Metrics Reference',
        href: 'https://docs.google.com/document/d/1-qcyy_JLxsguomfFz9rO972wLKZeT-Wl2CwtQRGnx8k/edit?usp=sharing',
      },
    ],
  },
  {
    label: 'Arvo Design System Architecture Reference',
    links: [{ text: 'Architecture', href: ARCHITECTURE_REFERENCE_DOC_URL }],
  },
]

/** Development — repo, registry, tracking */
export const RESOURCES_DEVELOPMENT = [
  {
    label: 'Repository',
    links: [{ text: 'o9git — o9.DesignSystem', href: 'https://o9git.visualstudio.com/CoreDev/_git/o9.DesignSystem' }],
  },
  {
    label: 'Artifacts Feed',
    hint: 'registry',
    links: [{ text: 'o9git/CoreDev — o9UI', href: 'https://o9git.visualstudio.com/CoreDev/_artifacts/feed/o9UI' }],
  },
  {
    label: 'Component Status Tracking',
    links: [
      {
        text: 'Arvo Component Status',
        href: 'https://docs.google.com/document/d/1J1cHfuLgkYUP56dxKiCAAHOsdE4eQ8Q66wK3YS977IM/edit?usp=sharing',
      },
    ],
  },
  {
    label: 'Component Review Notes/Tasks',
    links: [
      {
        text: 'Arvo Component Review',
        href: 'https://docs.google.com/document/d/19-_NTyQS4y3ImONsvUXH4XT-s8zaH2NSoGXT-tRn7bg/edit?usp=sharing',
      },
    ],
  },
  {
    label: 'Kibo Migration',
    links: [
      {
        text: 'Arvo Kibo Migration (PR #666696)',
        href: 'https://o9git.visualstudio.com/CoreDev/_git/o9.Kibo/pullrequest/666696',
      },
    ],
  },
  {
    label: 'NovaAI Migration',
    hint: 'sample',
    links: [
      {
        text: 'Arvo NovaAI Migration — Sample',
        href: 'https://o9git.visualstudio.com/CoreDev/_git/o9.nova.ui/pullrequest/668492?path=/apps/nova.ui/src/features/reports/component/ViewReportDetails.tsx',
      },
    ],
  },
]

/** Figma — libraries and assets */
export const RESOURCES_FIGMA = [
  {
    label: 'Figma Project',
    links: [
      {
        text: 'Arvo Platform Design System | Figma Project',
        href: 'https://www.figma.com/files/953513455932500110/project/250726221?fuid=1020089521679916452',
      },
    ],
  },
  {
    label: 'Foundation Library',
    links: [
      {
        text: 'Arvo Foundation Library | Figma',
        href: 'https://www.figma.com/design/rjhpdeZqzdnJas17N4PqzY/arvo-Foundation-Library?m=auto&t=sZOcFEWwB08Rvp8Y-6',
      },
    ],
  },
  {
    label: 'Component Library',
    links: [
      {
        text: 'Arvo Component Library | Figma',
        href: 'https://www.figma.com/design/g8S6ueJqluUt9kN8uZLprN/-NEW--arvo-Component-Library--in-progress-?m=auto&t=sZOcFEWwB08Rvp8Y-6',
      },
    ],
  },
  {
    label: 'Arvo Assets',
    links: [
      {
        text: 'Arvo Icons and Illustrations',
        href: 'https://www.figma.com/design/KG4bUj8RekcQiRDrfjjJzf/arvo-Icon-and-Illustrations-Library?m=auto&t=sZOcFEWwB08Rvp8Y-6',
      },
    ],
  },
]
