import { useState } from 'react'
import { ArvoTabstrip } from '@arvo/react'
import { LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'
import { createExpertComponentPage } from '../shared/createExpertComponentPage'

const TABS_DATA = [
  { id: 'overview', label: 'Overview', icon: 'home' },
  { id: 'details', label: 'Details', icon: 'info-circle' },
  { id: 'settings', label: 'Settings', icon: 'gear' },
]

function TabstripLiveDemo() {
  const [selected, setSelected] = useState('overview')
  return (
    <ArvoTabstrip tabs={TABS_DATA} selectedId={selected} onSelect={({ id }) => setSelected(id)} />
  )
}

export default createExpertComponentPage({
  slug: 'tabstrip',
  title: 'Tabstrip',
  description:
    'Horizontal strip of selectable tabs for switching between views or panels. Two variants, two sizes, optional tab icons, closable and pinnable tabs, full WAI-ARIA Tabs Pattern keyboard navigation.',
  componentSlug: 'tabstrip',
  icon: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
    </svg>
  ),
  liveDemo: (
    <LiveReference>
      <TabstripLiveDemo />
    </LiveReference>
  ),
  reactCode: `import { ArvoTabstrip } from '@arvo/react';

const tabs = [
  { id: 'overview', label: 'Overview', icon: 'home' },
  { id: 'details', label: 'Details', icon: 'info-circle' },
  { id: 'settings', label: 'Settings', icon: 'gear' },
];

<ArvoTabstrip
  tabs={tabs}
  selectedId="overview"
  onSelect={({ id }) => setActiveTab(id)}
/>

<ArvoTabstrip
  tabs={tabs}
  closable
  pinnable
  onClose={({ id }) => removeTab(id)}
  onPin={({ id, pinned }) => togglePin(id, pinned)}
/>

<ArvoTabstrip tabs={tabs} variant="primary" />
<ArvoTabstrip tabs={tabs} variant="secondary" size="sm" />`,
  jsCode: `import { ArvoTabstrip } from '@arvo/js';

const strip = ArvoTabstrip.initialize(el, {
  variant: 'primary',
  size: 'lg',
  tabs,
  closable: true,
  pinnable: true,
  onSelect: ({ id }) => console.log('selected', id),
  onClose: ({ id }) => console.log('closed', id),
  onPin: ({ id, pinned }) => console.log('pinned', id, pinned),
});

strip.select('details');
strip.selectedId();          // => 'details'
strip.addTab({ id: 'new', label: 'New Tab' });
strip.removeTab('settings');
strip.disabled(true);
strip.setLoading(true);
strip.destroy();`,
})
