import CodeBlock from '../../LayoutComponents/CodeBlock'
import DocTable from '../../LayoutComponents/DocTable'
import PageHeader from '../../LayoutComponents/PageHeader'
import PageWithToc from '../../LayoutComponents/PageWithToc'
import { SPACING_TOKENS, SPACING_TOKENS_SCSS } from '../../tokens/spacingTokens'

const SPACING_SECTIONS = [
  { id: 'scale', label: 'Scale' },
  { id: 'spacing-tokens', label: 'Spacing Tokens' },
]

const spacingIcon = (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
  </svg>
)

export default function Spacing() {
  return (
    <PageWithToc sections={SPACING_SECTIONS}>
    <div className="space-y-12">
      <PageHeader
        title="Spacing"
        description="A consistent 4px base unit for padding, margins, and gaps across layouts."
        icon={spacingIcon}
        descClassName="text-lg mt-4"
      />

      <section id="scale">
        <h2 className="text-2xl font-bold mb-6 text-o9ds-light-primary dark:text-white">Scale</h2>
        <DocTable tokens={SPACING_TOKENS} showCopy />
      </section>

      <section id="spacing-tokens">
        <h2 className="text-2xl font-bold mb-6 text-o9ds-light-primary dark:text-white">Spacing Tokens</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-4 max-w-2xl">
          Copy the SCSS variables below to use spacing tokens in your project.
        </p>
        <CodeBlock
          code={SPACING_TOKENS_SCSS}
          label="SCSS variables"
        />
      </section>
    </div>
    </PageWithToc>
  )
}
