import { ArvoIconButtonLink } from '@arvo/react'
import { LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'
import { createExpertComponentPage } from '../shared/createExpertComponentPage'

export default createExpertComponentPage({
  slug: 'icon-button-link',
  title: 'Icon Button Link',
  description:
    'An anchor element styled identically to Icon Button — visually a square icon-only button but navigates like a link. Uses the same variants, sizes, and visual states as Icon Button.',
  componentSlug: 'icon-button-link',
  icon: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  ),
  liveDemo: (
    <LiveReference>
      <ArvoIconButtonLink href="#" icon="external-link" tooltip="Open" />
      <ArvoIconButtonLink href="#" icon="arrow-right" tooltip="Navigate" variant="secondary" />
      <ArvoIconButtonLink href="#" icon="settings" tooltip="Settings" variant="tertiary" size="sm" />
      <ArvoIconButtonLink href="https://example.com" icon="external-link" tooltip="External" target="_blank" />
    </LiveReference>
  ),
  reactCode: `import { ArvoIconButtonLink } from '@arvo/react';

<ArvoIconButtonLink href="/page" icon="external-link" tooltip="Open" />
<ArvoIconButtonLink href="/page" icon="arrow-right" tooltip="Navigate" variant="secondary" />
<ArvoIconButtonLink href="/page" icon="external-link" tooltip="Disabled" isDisabled />
<ArvoIconButtonLink href="https://example.com" icon="external-link" tooltip="External" target="_blank" />`,
  jsCode: `import { ArvoIconButtonLink } from '@arvo/js';

const lnk = ArvoIconButtonLink.initialize(el, {
  variant: 'secondary',
  icon: 'external-link',
  href: '/page',
  tooltip: 'Open link',
});

lnk.setIcon('arrow-right');
lnk.setTooltip('Navigate');
lnk.disabled(true);
lnk.destroy();`,
})
