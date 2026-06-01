import { ArvoLink } from '@arvo/react'
import { LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'
import { createExpertComponentPage } from '../shared/createExpertComponentPage'

export default createExpertComponentPage({
  slug: 'link',
  title: 'Link',
  description:
    'Inline navigational anchor for linking to internal pages, external URLs, or downloadable resources. Renders as an <a> element with optional leading icon and trailing external-link indicator.',
  componentSlug: 'link',
  icon: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  ),
  liveDemo: (
    <LiveReference>
      <ArvoLink href="#" label="Primary link" />
      <ArvoLink href="#" label="Secondary link" variant="secondary" />
      <ArvoLink href="#" label="With icon" icon="settings" />
      <ArvoLink href="https://example.com" label="External link" isExternal />
      <ArvoLink href="#" label="Small (12px)" size="sm" />
      <ArvoLink href="#" label="Large (14px)" size="lg" />
    </LiveReference>
  ),
  reactCode: `import { ArvoLink } from '@arvo/react';

<ArvoLink href="/page" label="Learn more" />
<ArvoLink href="/page" label="Settings" icon="settings" />
<ArvoLink href="https://example.com" label="Visit site" external />
<ArvoLink href="/page" label="Details" variant="secondary" />
<ArvoLink href="/page" label="Unavailable" isDisabled />`,
  jsCode: `import { ArvoLink } from '@arvo/js';

const lnk = ArvoLink.initialize(el, {
  variant: 'primary',
  href: '/page',
  label: 'Learn more',
});

lnk.setLabel('Updated');
lnk.setVariant('secondary');
lnk.setHref('/new-page');
lnk.disabled(true);
lnk.destroy();`,
})
