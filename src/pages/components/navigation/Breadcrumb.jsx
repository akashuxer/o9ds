import { ArvoBreadcrumb } from '@arvo/react'
import { LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'
import { createExpertComponentPage } from '../shared/createExpertComponentPage'

const BREADCRUMB_ITEMS = [
  { label: '', icon: 'home', href: '#' },
  { label: 'Products', href: '#' },
  { label: 'Category', href: '#' },
  { label: 'Current Item' },
]

export default createExpertComponentPage({
  slug: 'breadcrumb',
  title: 'Breadcrumb',
  description:
    "Horizontal trail of navigational links showing the user's current location within a page hierarchy. The last item is non-navigable, bold text representing the current page.",
  componentSlug: 'breadcrumb',
  icon: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  ),
  liveDemo: (
    <LiveReference>
      <ArvoBreadcrumb items={BREADCRUMB_ITEMS} />
    </LiveReference>
  ),
  reactCode: `import { ArvoBreadcrumb } from '@arvo/react';

<ArvoBreadcrumb
  items={[
    { label: '', icon: 'home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Category', href: '/products/category' },
    { label: 'Current Item' },
  ]}
  onNavigate={({ href, index, label }) => router.push(href)}
/>`,
  jsCode: `import { ArvoBreadcrumb } from '@arvo/js';

const bc = ArvoBreadcrumb.initialize(el, {
  items: [
    { label: '', icon: 'home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Current Page' },
  ],
  onNavigate: ({ href }) => console.log('navigate', href),
});

bc.setItems([{ label: 'Home', href: '/' }, { label: 'New Page' }]);
bc.disabled(true);
bc.setLoading(true);
bc.destroy();`,
})
