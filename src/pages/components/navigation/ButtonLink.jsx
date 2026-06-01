import { ArvoButtonLink } from '@arvo/react'
import { LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'
import { createExpertComponentPage } from '../shared/createExpertComponentPage'

export default createExpertComponentPage({
  slug: 'button-link',
  title: 'Button Link',
  description:
    'An anchor element styled identically to Button — visually appears as a button but navigates like a link. Uses the same variants, sizes, and visual states as Button.',
  componentSlug: 'button-link',
  icon: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  ),
  liveDemo: (
    <LiveReference>
      <ArvoButtonLink href="#" label="Primary" variant="primary" />
      <ArvoButtonLink href="#" label="Secondary" variant="secondary" />
      <ArvoButtonLink href="#" label="Tertiary" variant="tertiary" />
      <ArvoButtonLink href="#" label="With icon" icon="arrow-right" variant="primary" />
    </LiveReference>
  ),
  reactCode: `import { ArvoButtonLink } from '@arvo/react';

<ArvoButtonLink href="/page" label="Go to Page" variant="primary" />
<ArvoButtonLink href="/page" label="Navigate" icon="arrow-right" variant="secondary" />
<ArvoButtonLink href="/page" label="Unavailable" isDisabled />
<ArvoButtonLink href="/page" label="Loading..." isLoading />
<ArvoButtonLink href="https://example.com" label="External" target="_blank" />`,
  jsCode: `import { ArvoButtonLink } from '@arvo/js';

const lnk = ArvoButtonLink.initialize(el, {
  variant: 'primary',
  href: '/page',
  label: 'Go to Page',
});

lnk.setLabel('Updated');
lnk.setVariant('secondary');
lnk.setHref('/new-page');
lnk.disabled(true);
lnk.destroy();`,
})
