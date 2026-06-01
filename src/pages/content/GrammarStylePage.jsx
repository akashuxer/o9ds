import { Link, Navigate, useParams } from 'react-router-dom'
import { GRAMMAR_STYLE_TOPICS, getGrammarStyleTopic } from '../../data/contentGrammarNav'
import { grammarStyleTopicPath } from '../../data/docPaths'
import GrayBgCard from '../../LayoutComponents/GrayBgCard'
import ContentDocPage from './ContentDocPage'

function GrammarStyleIntro() {
  return (
    <div className="space-y-6">
      <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
        Grammar &amp; Style defines mechanical rules for product copy—capitalization, punctuation, numbers, dates, URLs, and other conventions that keep o9 experiences consistent.
      </p>
      <p className="text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
        Use these rules together with{' '}
        <Link to="/content/voice-and-tone" className="text-arvo-light-primary dark:text-white underline underline-offset-2 hover:opacity-80">
          Voice and Tone
        </Link>{' '}
        and{' '}
        <Link to="/content/writing-principles" className="text-arvo-light-primary dark:text-white underline underline-offset-2 hover:opacity-80">
          Writing Principles
        </Link>
        . Voice and principles guide what to say; grammar and style guide how to format it.
      </p>
      <GrayBgCard
        title="Topics in this section"
        desc="Select a topic from the sidebar or the list below. Detailed guidance for each topic is published as it becomes available."
      >
        <ul className="grid gap-2 sm:grid-cols-2 m-0 p-0 list-none text-sm">
          {GRAMMAR_STYLE_TOPICS.filter((t) => t.slug !== 'intro').map((topic) => (
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
    </div>
  )
}

function GrammarStylePlaceholder({ label }) {
  return (
    <GrayBgCard
      title="Coming soon"
      desc={`Detailed guidance for ${label} is not published yet. Check back as the Content Guidelines section expands.`}
    />
  )
}

export default function GrammarStylePage() {
  const { topic: topicSlug } = useParams()
  const topic = getGrammarStyleTopic(topicSlug ?? '')

  if (!topic) {
    return <Navigate to={grammarStyleTopicPath('intro')} replace />
  }

  const isIntro = topic.slug === 'intro'

  return (
    <ContentDocPage
      title={isIntro ? 'Grammar & style' : topic.label}
      description={
        topic.description ??
        (isIntro
          ? 'Mechanical writing rules for consistent product copy across o9 experiences.'
          : `Grammar and style guidance for ${topic.label.toLowerCase()} in product UI.`)
      }
      tocSections={isIntro ? [{ id: 'grammar-style-intro', label: 'Intro' }] : []}
    >
      <section id={isIntro ? 'grammar-style-intro' : undefined} className="scroll-mt-24">
        {isIntro ? <GrammarStyleIntro /> : <GrammarStylePlaceholder label={topic.label} />}
      </section>
    </ContentDocPage>
  )
}
