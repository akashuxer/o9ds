import { ArvoBadgeAlert } from '@arvo/react'
import { createExpertComponentPage } from '../shared/createExpertComponentPage'

export default createExpertComponentPage({
  slug: 'badge',
  title: 'Badge Alert',
  description:
    'Compact badge-style status indicator with four tones (info, success, warning, danger), two visual weights, optional title, actions, and dismissal. Live-region wired so screen readers hear changes.',
  componentSlug: 'badge',
  icon: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  liveDemo: (
    <>
      <ArvoBadgeAlert type="info" message="Heads up — the system will be down on Sunday." />
      <ArvoBadgeAlert type="positive" message="Changes saved successfully." />
      <ArvoBadgeAlert type="warning" message="Your session expires in 5 minutes." />
      <ArvoBadgeAlert type="negative" message="Failed to save changes." />
    </>
  ),
  reactCode: `import { ArvoBadgeAlert } from '@arvo/react';

<ArvoBadgeAlert type="info" message="The system will be down on Sunday." />

<ArvoBadgeAlert type="positive" message="Changes saved successfully." />

<ArvoBadgeAlert
  type="negative"
  message="Failed to save changes."
  maxWidth={320}
/>`,
  jsCode: `import { ArvoBadgeAlert } from '@arvo/js';

const alert = ArvoBadgeAlert.initialize(el, {
  type: 'positive',
  message: 'Changes saved successfully.',
});

alert.update({ type: 'negative', message: 'Failed to save changes.' });
alert.destroy();`,
})
