import { Link, Navigate, useParams } from 'react-router-dom'
import GrayBgCard from '../../LayoutComponents/GrayBgCard'
import WhiteBgCard from '../../LayoutComponents/WhiteBgCard'
import {
  GRAMMAR_STYLE_APPLIES_TO,
  GRAMMAR_STYLE_INTRO_TOC,
  GRAMMAR_STYLE_PRINCIPLES,
  GRAMMAR_STYLE_QUALITIES,
  getGrammarStyleTopicContent,
} from '../../data/grammarStyleContent'
import { GRAMMAR_STYLE_TOPICS } from '../../data/contentGrammarNav'
import { grammarStyleTopicPath } from '../../data/docPaths'
import ContentDocPage from './ContentDocPage'
import { WriteAvoidBlock } from './contentDocBlocks'

function BulletList({ items, className = '' }) {
  return (
    <ul className={`list-disc list-inside space-y-2 text-arvo-light-secondary dark:text-neutral-400 m-0 ${className}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function GrammarStyleIntro() {
  const topicLinks = GRAMMAR_STYLE_TOPICS.filter((t) => t.slug !== 'intro')

  return (
    <div className="space-y-10">
      <section id="grammar-style-overview" className="space-y-6 scroll-mt-24">
        <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed m-0">
          Grammar and style guidance establishes consistent writing standards across o9 experiences.
        </p>
        <div>
          <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed mb-3 m-0">
            These standards ensure content feels:
          </p>
          <ul className="list-disc list-inside space-y-2 text-arvo-light-secondary dark:text-neutral-400 m-0">
            {GRAMMAR_STYLE_QUALITIES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed m-0">
          Consistent writing reduces cognitive load and improves recognition across workflows. Users should not have to
          relearn writing patterns between modules, planning experiences, or product areas.
        </p>
        <div>
          <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed mb-3 m-0">
            This guidance applies to all user-facing content, including:
          </p>
          <div className="flex flex-wrap gap-2">
            {GRAMMAR_STYLE_APPLIES_TO.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full border border-arvo-light-border dark:border-neutral-600 px-3 py-1.5 text-sm text-arvo-light-primary dark:text-neutral-200 bg-arvo-light-surface dark:bg-neutral-900/50"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <p className="text-arvo-light-primary dark:text-white leading-relaxed m-0">
          <strong className="font-semibold">The objective is simple:</strong>
          <br />
          <span className="text-arvo-light-secondary dark:text-neutral-400">
            Make complex planning workflows easier to understand and easier to act on.
          </span>
        </p>
        <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed m-0">
          This section defines platform-wide language mechanics, grammar rules, and writing standards.
        </p>
        <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed m-0">
          Select a topic to learn more.
        </p>
      </section>

      <section id="grammar-style-principles" className="space-y-6 scroll-mt-24">
        <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white m-0">Grammar &amp; style principles</h2>
        <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed m-0">
          All grammar and style guidance follows these principles.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {GRAMMAR_STYLE_PRINCIPLES.map(({ title, desc }) => (
            <WhiteBgCard key={title} title={title} desc={desc} />
          ))}
        </div>
      </section>

      <section id="grammar-style-structure" className="space-y-6 scroll-mt-24">
        <h2 className="text-xl font-bold text-arvo-light-primary dark:text-white m-0">Documentation structure</h2>
        <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed m-0">
          This page introduces Grammar &amp; Style at a high level. Detailed guidance is documented within individual
          topic pages, including:
        </p>
        <GrayBgCard title="Topics in this section" desc="Select a topic from the sidebar or the list below.">
          <ul className="grid gap-2 sm:grid-cols-2 m-0 p-0 list-none text-sm">
            {topicLinks.map((topic) => (
              <li key={topic.slug}>
                <Link
                  to={grammarStyleTopicPath(topic.slug)}
                  className="text-arvo-light-primary dark:text-white underline underline-offset-2 hover:opacity-80"
                >
                  {topic.label}
                </Link>
              </li>
            ))}
          </ul>
        </GrayBgCard>
        <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed m-0">
          Use these rules together with{' '}
          <Link
            to="/content/voice-and-tone"
            className="text-arvo-light-primary dark:text-white underline underline-offset-2 hover:opacity-80"
          >
            Voice and Tone
          </Link>{' '}
          and{' '}
          <Link
            to="/content/writing-principles"
            className="text-arvo-light-primary dark:text-white underline underline-offset-2 hover:opacity-80"
          >
            Writing Principles
          </Link>
          . Voice and principles guide what to say; grammar and style guide how to format it.
        </p>
      </section>
    </div>
  )
}

function GrammarStyleTopicSection({ section }) {
  if (section.type === 'writeAvoid') {
    const { id, label: _label, type: _type, ...block } = section
    return (
      <section id={id} className="scroll-mt-24">
        <WriteAvoidBlock {...block} />
      </section>
    )
  }

  if (section.type === 'examples') {
    return (
      <section id={section.id} className="scroll-mt-24 space-y-3">
        <h3 className="text-lg font-semibold text-arvo-light-primary dark:text-white m-0">{section.label}</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-arvo-light-secondary dark:text-neutral-400 m-0">
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    )
  }

  if (section.type === 'bullets') {
    return (
      <section id={section.id} className="scroll-mt-24 space-y-3">
        <h3 className="text-lg font-semibold text-arvo-light-primary dark:text-white m-0">{section.label}</h3>
        <BulletList items={section.items} className="text-sm" />
      </section>
    )
  }

  if (section.type === 'exampleGroups') {
    return (
      <section id={section.id} className="scroll-mt-24 space-y-6">
        <h3 className="text-lg font-semibold text-arvo-light-primary dark:text-white m-0">{section.label}</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {section.groups.map((group) => (
            <GrayBgCard key={group.title} title={group.title}>
              <ul className="list-disc list-inside space-y-1.5 text-sm text-arvo-light-secondary dark:text-neutral-400 m-0 p-0">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </GrayBgCard>
          ))}
        </div>
      </section>
    )
  }

  return null
}

function GrammarStyleTopic({ content }) {
  const overviewId = content.toc.find((item) => item.label === 'Overview')?.id ?? `gs-${content.id}-overview`

  return (
    <div className="space-y-10">
      <section id={overviewId} className="space-y-4 scroll-mt-24">
        <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed m-0">{content.overview}</p>
        {content.covers?.length ? (
          <div>
            <p className="text-sm font-medium text-arvo-light-primary dark:text-white mb-2 m-0">Covers</p>
            <BulletList items={content.covers} className="text-sm" />
          </div>
        ) : null}
      </section>

      {content.sections.map((section) => (
        <GrammarStyleTopicSection key={section.id} section={section} />
      ))}
    </div>
  )
}

export default function GrammarStylePage() {
  const { topic: topicSlug } = useParams()
  const navTopic = GRAMMAR_STYLE_TOPICS.find((t) => t.slug === topicSlug)
  const topicContent = topicSlug && topicSlug !== 'intro' ? getGrammarStyleTopicContent(topicSlug) : undefined

  if (!navTopic) {
    return <Navigate to={grammarStyleTopicPath('intro')} replace />
  }

  const isIntro = navTopic.slug === 'intro'

  if (!isIntro && !topicContent) {
    return <Navigate to={grammarStyleTopicPath('intro')} replace />
  }

  const tocSections = isIntro ? GRAMMAR_STYLE_INTRO_TOC : (topicContent?.toc ?? [])

  return (
    <ContentDocPage
      title={isIntro ? 'Grammar & style' : navTopic.label}
      description={
        navTopic.description ??
        (isIntro
          ? 'Mechanical writing rules for consistent product copy across o9 experiences.'
          : topicContent?.overview)
      }
      tocSections={tocSections}
    >
      {isIntro ? <GrammarStyleIntro /> : topicContent ? <GrammarStyleTopic content={topicContent} /> : null}
    </ContentDocPage>
  )
}
