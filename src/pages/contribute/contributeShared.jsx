import { FEEDBACK_FORM_URL } from './contributeData'

export { FEEDBACK_FORM_URL, REPO_URL } from './contributeData'

export const headerIcon = (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
)

export function FeedbackCard({ title = 'Share feedback, ideas, and requests', description }) {
  return (
    <div className="border border-l-4 border-l-[#010101] dark:border-l-white p-6 bg-arvo-light-surface dark:bg-neutral-800/40">
      <h3 className="text-lg font-semibold text-arvo-light-primary dark:text-white m-0 mb-2">{title}</h3>
      <p className="text-sm text-arvo-light-secondary dark:text-neutral-400 leading-relaxed m-0 mb-4 max-w-2xl">
        {description}
      </p>
      <a
        href={FEEDBACK_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border border-[#010101] bg-[#010101] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#010101] dark:border-white dark:bg-white dark:text-[#010101] dark:focus-visible:ring-white dark:focus-visible:ring-offset-neutral-900"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        Open the feedback form
      </a>
    </div>
  )
}
