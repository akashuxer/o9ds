import { useState } from 'react'
import DocSection, { DocParagraph } from '../../../LayoutComponents/DocSection'
import CodeBlock from '../../../LayoutComponents/CodeBlock'

/** Single playground example — preview, tokens, expandable code. */
export default function MotionPlaygroundExample({ id, title, purpose, behavior, tokens, code, children }) {
  const [showCode, setShowCode] = useState(false)

  return (
    <DocSection id={id} title={title}>
      <DocParagraph>{purpose}</DocParagraph>
      {behavior ? (
        <p className="text-sm text-arvo-light-secondary dark:text-neutral-500 m-0 leading-relaxed">{behavior}</p>
      ) : null}

      <div className="motion-playground mp-preview-frame" data-mp-example>
        {children}
      </div>

      <div className="flex flex-wrap gap-2 pt-1">
        {tokens.map((token) => (
          <code
            key={token}
            className="text-xs font-mono px-2 py-1 border border-arvo-light-border dark:border-neutral-700 text-arvo-light-primary dark:text-neutral-200"
          >
            {token}
          </code>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setShowCode((open) => !open)}
        className="text-sm font-medium text-arvo-light-primary dark:text-white hover:underline"
        aria-expanded={showCode}
      >
        {showCode ? 'Hide code' : 'Show code'}
      </button>

      {showCode ? <CodeBlock code={code} language="scss" label="SCSS" /> : null}
    </DocSection>
  )
}
