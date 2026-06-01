import { ArvoBannerAlert, ArvoLink } from '@arvo/react'
import { createExpertComponentPage } from '../shared/createExpertComponentPage'

export default createExpertComponentPage({
  slug: 'banner-alerts',
  title: 'Banner Alert',
  description:
    'Full-width banner for persistent contextual feedback. Six semantic types, two layout modes, optional link, and an optional dismiss button.',
  componentSlug: 'banner-alert',
  descriptorSlug: 'banner-alert',
  icon: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6h18v4H3V6zm0 8h18v4H3v-4z" />
    </svg>
  ),
  liveDemo: (
    <>
      <ArvoBannerAlert
        type="info"
        title="System update"
        message="A new version of the planner is available."
        link={<ArvoLink label="See what's new" href="#" size="sm" />}
      />
      <ArvoBannerAlert type="positive" title="Saved" message="Your changes have been saved." />
      <ArvoBannerAlert type="info" title="Heads up" message="A new release rolls out tonight." />
      <ArvoBannerAlert type="neutral" title="Maintenance window" message="Read-only access between 02:00 and 03:00 UTC." />
      <ArvoBannerAlert type="warning" title="Low storage" message="You are approaching your storage quota." />
      <ArvoBannerAlert type="negative" title="Connection lost" message="We can't reach the server." />
      <ArvoBannerAlert type="block" title="Action blocked" message="You do not have permission to publish this scenario." />
      <ArvoBannerAlert type="warning" message="Compact: message only, tighter padding." isCompact />
    </>
  ),
  reactCode: `import { ArvoBannerAlert, ArvoLink } from '@arvo/react';

<ArvoBannerAlert
  type="info"
  title="System update"
  message="A new version is available."
/>

<ArvoBannerAlert
  type="negative"
  title="Connection lost"
  message="We can't reach the server."
  link={<ArvoLink label="View status" href="/status" size="sm" />}
  onDismiss={() => setVisible(false)}
/>

<ArvoBannerAlert type="warning" message="Approaching storage quota." isCompact />

<ArvoBannerAlert type="positive" title="Saved" message="Your changes have been saved." isDismissible={false} />

<ArvoBannerAlert type="info" title="Checking status" message="Verifying connectivity..." isLoading />`,
  jsCode: `import { ArvoBannerAlert } from '@arvo/js';

const banner = ArvoBannerAlert.initialize(host, {
  type: 'negative',
  title: 'Connection lost',
  message: 'We cannot reach the server. Check your network.',
  isDismissible: true,
  onDismiss: () => host.remove(),
});

host.addEventListener('bnr-alert:dismiss', () => {
  console.log('Banner dismissed');
});

banner.type('warning');
banner.message('Network unstable');
banner.title('Degraded connectivity');
banner.loading(true);
banner.destroy();`,
})
