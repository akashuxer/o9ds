export default function Placeholder({ title }) {
  return (
    <div className="space-y-6">
      <h1 className="group flex items-center gap-2 text-[30px] font-bold text-o9ds-light-primary dark:text-white">
        <span className="flex h-8 w-8 items-center justify-center bg-o9ds-light-surface dark:bg-neutral-700" data-o9ds-avatar data-o9ds-avatar-header>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </span>
        {title}
      </h1>
      <p className="text-o9ds-light-secondary dark:text-neutral-400">This section is coming soon.</p>
    </div>
  )
}
