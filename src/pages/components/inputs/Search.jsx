import { ArvoSearch } from '@arvo/react'
import { LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'
import { createExpertComponentPage } from '../shared/createExpertComponentPage'

export default createExpertComponentPage({
  slug: 'search',
  title: 'Search',
  description:
    'Single-line search input with a leading magnifier icon, clearable affordance, and optional shortcut hint. Built on the same form-input pattern as Textbox.',
  componentSlug: 'search',
  icon: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  liveDemo: (
    <LiveReference>
      <div style={{ minWidth: 280 }}>
        <ArvoSearch aria-label="Search" />
      </div>
      <div style={{ minWidth: 280 }}>
        <ArvoSearch aria-label="With shortcut" shortcut="Ctrl+K" />
      </div>
      <div style={{ minWidth: 280 }}>
        <ArvoSearch aria-label="Disabled" isDisabled />
      </div>
    </LiveReference>
  ),
  reactCode: `import { ArvoSearch } from '@arvo/react';

<ArvoSearch label="Search items" onChange={(v) => filter(v)} />
<ArvoSearch label="Search" shortcut="Ctrl+K" onSubmit={(v) => runSearch(v)} />
<ArvoSearch label="Filter" defaultValue="" clearable />`,
  jsCode: `import { ArvoSearch } from '@arvo/js';

const search = ArvoSearch.initialize(el, {
  label: 'Search',
  shortcut: 'Ctrl+K',
  onChange: (value) => filter(value),
  onSubmit: (value) => runSearch(value),
});

search.value('hello');
search.value();
search.disabled(true);
search.destroy();`,
})
