import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import DocTable from '../LayoutComponents/DocTable'
import PageHeader from '../LayoutComponents/PageHeader'
import PageWithToc from '../LayoutComponents/PageWithToc'
import { RESOURCES_DEVELOPMENT, RESOURCES_DOCS, RESOURCES_FIGMA } from '../data/resourcesLinks'
import { RESOURCES_TEAM_GROUPS } from '../data/resourcesTeam'

const tocSections = [
  { id: 'docs', label: 'Docs' },
  { id: 'development', label: 'Development' },
  { id: 'figma', label: 'Figma' },
  { id: 'team', label: 'Team' },
  { id: 'on-this-site', label: 'On this site' },
]

/** Match DocTable secondary column — no accent color on links */
const RESOURCE_LINK_CLASS =
  'text-o9ds-light-secondary underline decoration-neutral-400/90 underline-offset-[3px] transition hover:text-o9ds-light-primary hover:decoration-o9ds-light-primary dark:text-neutral-400 dark:decoration-neutral-600 dark:hover:text-neutral-200 dark:hover:decoration-neutral-300'

function resourceLabelColumn(label, hint) {
  if (!hint) return label
  return (
    <>
      {label}{' '}
      <span className="font-normal text-o9ds-light-secondary dark:text-neutral-500">({hint})</span>
    </>
  )
}

function LinksCell({ items }) {
  return (
    <span className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-o9ds-light-secondary dark:text-neutral-400">
      {items.map((item, i) => (
        <Fragment key={`${item.text}-${i}`}>
          {i > 0 && (
            <span className="select-none text-neutral-300 dark:text-neutral-600" aria-hidden>
              |
            </span>
          )}
          {item.href ? (
            <a href={item.href} target="_blank" rel="noopener noreferrer" className={RESOURCE_LINK_CLASS}>
              {item.text}
            </a>
          ) : (
            <span className="text-o9ds-light-secondary dark:text-neutral-500">{item.text}</span>
          )}
        </Fragment>
      ))}
    </span>
  )
}

function resourceRowsFromSpec(spec) {
  return spec.map((row) => ({
    label: resourceLabelColumn(row.label, row.hint),
    links: <LinksCell items={row.links} />,
  }))
}

function SectionIntro({ kicker, title, id }) {
  return (
    <div id={id} className="scroll-mt-24 space-y-2">
      <p className="m-0 text-sm italic text-o9ds-light-secondary dark:text-neutral-500">{kicker}</p>
      <h2 className="m-0 text-xl font-bold tracking-tight text-o9ds-light-primary dark:text-white sm:text-2xl">{title}</h2>
    </div>
  )
}

export default function Resources() {
  const docsColumns = [
    { key: 'label', label: 'Resource', mono: true, tone: 'code' },
    { key: 'links', label: 'Links' },
  ]
  const devColumns = [
    { key: 'label', label: 'Resource', mono: true, tone: 'code' },
    { key: 'links', label: 'Links' },
  ]
  const figmaColumns = [
    { key: 'label', label: 'Resource', mono: true, tone: 'code' },
    { key: 'links', label: 'Links' },
  ]

  return (
    <PageWithToc sections={tocSections}>
      <div className="max-w-6xl space-y-16">
        <PageHeader
          title="Resources / Links"
          description="Canonical entry points for documentation, engineering, and Figma."
          icon={
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
          }
        />

        <section className="space-y-4">
          <SectionIntro kicker="Docs" title="Documentation & references" id="docs" />
          <DocTable columns={docsColumns} rows={resourceRowsFromSpec(RESOURCES_DOCS)} />
        </section>

        <section className="space-y-4">
          <SectionIntro kicker="Development" title="Repository, registry & tracking" id="development" />
          <DocTable columns={devColumns} rows={resourceRowsFromSpec(RESOURCES_DEVELOPMENT)} />
        </section>

        <section className="space-y-4">
          <SectionIntro kicker="Figma" title="Libraries & assets" id="figma" />
          <DocTable columns={figmaColumns} rows={resourceRowsFromSpec(RESOURCES_FIGMA)} />
        </section>

        <section id="team" className="scroll-mt-24 space-y-6 border-t border-neutral-200 pt-12 dark:border-neutral-800">
          <div className="space-y-2">
            <SectionIntro kicker="People" title="Design system contacts" />
            <p className="m-0 max-w-3xl text-base leading-relaxed text-o9ds-light-secondary dark:text-neutral-400">
              For anything related to the design system (o9ds), reach out to these members.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {RESOURCES_TEAM_GROUPS.map((group) => (
              <div key={group.title} className="border p-6 dark:border-neutral-700" data-o9ds-card="light">
                <h3 className="m-0 text-base font-semibold uppercase tracking-wider text-o9ds-light-secondary dark:text-neutral-500">
                  {group.title}
                </h3>
                <ul className="mt-5 list-none space-y-4 p-0 m-0">
                  {group.members.map(({ name, description }) => (
                    <li key={name} className="m-0">
                      <p className="m-0">
                        <span className="font-semibold text-o9ds-light-primary dark:text-white">{name}</span>
                        <span className="text-o9ds-light-secondary dark:text-neutral-400"> — {description}</span>
                      </p>
                    </li>
                  ))}
                  <li className="m-0 pt-1 text-sm italic text-o9ds-light-secondary dark:text-neutral-500">{group.moreLabel}</li>
                </ul>
              </div>
            ))}
          </div>
          <p className="m-0 mt-8 max-w-3xl text-sm leading-relaxed text-o9ds-light-secondary dark:text-neutral-400">
            Thank you to everyone who has supported o9ds—in every role, every review, and every small win along the way.
            Your help is what keeps this system moving forward. ❤️
          </p>
        </section>

        <section id="on-this-site" className="scroll-mt-24 border-t border-neutral-200 pt-12 dark:border-neutral-800">
          <h2 className="text-lg font-semibold text-o9ds-light-primary dark:text-white">Also on this site</h2>
          <p className="mt-2 max-w-2xl text-sm text-o9ds-light-secondary dark:text-neutral-400">
            Deeper narrative guides—these complement the external links above.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { to: '/overview', label: 'Overview' },
              { to: '/foundations', label: 'Foundations' },
              { to: '/components', label: 'Components' },
              { to: '/usage', label: 'Usage standards' },
              { to: '/developers', label: 'For developers' },
              { to: '/usage/checklist', label: 'PR checklist' },
            ].map(({ to, label }) => (
              <li key={to} className="m-0">
                <Link
                  to={to}
                  className="flex items-center justify-between gap-3 border p-4 text-sm font-medium text-o9ds-light-primary transition hover:border-neutral-400 dark:border-neutral-700 dark:text-white dark:hover:border-neutral-500"
                  data-o9ds-card="light"
                >
                  {label}
                  <span className="text-o9ds-light-secondary dark:text-neutral-500" aria-hidden>
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </PageWithToc>
  )
}
