import { ARVO_MOTION_COUNTER_TOKEN } from '../data/motionTokens'
import CodeBlock from './CodeBlock'
import { DocParagraph } from './DocSection'

export { ARVO_MOTION_COUNTER_TOKEN }

export const BADGE_COUNTER_CODEPEN_FULL_URL = 'https://codepen.io/Akash-Upadhyay-the-selector/full/dPOmgNP'

export const BADGE_COUNTER_CODEPEN_EMBED_URL =
  'https://codepen.io/Akash-Upadhyay-the-selector/embed/dPOmgNP?default-tab=result'

const EMBED_HEIGHT = 480

/**
 * Direction-based counter animation demo (CodePen) + Arvo motion token.
 * Used on Badge docs and Motion & Animation foundations.
 */
export default function CounterAnimationCodePen() {
  return (
    <>
      <DocParagraph>
        Use this CodePen example for direction-based counter animation (increment vs decrement). Timing should align with
        the Arvo motion token:
      </DocParagraph>
      <CodeBlock language="scss" label="Motion token" code={ARVO_MOTION_COUNTER_TOKEN} />
      <div className="space-y-3">
        <p className="text-sm text-arvo-light-secondary dark:text-neutral-400 m-0">
          If the preview does not load,{' '}
          <a
            href={BADGE_COUNTER_CODEPEN_FULL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-arvo-light-primary dark:text-white underline hover:no-underline font-medium"
          >
            open the CodePen in a new tab
          </a>
          .
        </p>
        <div
          className="border border-arvo-light-border dark:border-neutral-700 overflow-hidden w-full max-w-[800px] bg-arvo-light-surface dark:bg-neutral-950"
          data-arvo-codepen-embed
        >
          <iframe
            title="Direction-based counter animation (CodePen)"
            src={BADGE_COUNTER_CODEPEN_EMBED_URL}
            width="800"
            height={EMBED_HEIGHT}
            className="w-full max-w-full block"
            style={{ minHeight: EMBED_HEIGHT, height: EMBED_HEIGHT }}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-modals"
          />
        </div>
      </div>
    </>
  )
}
