import { ArvoTooltip, ArvoButton } from '@arvo/react'
import { LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'
import { createExpertComponentPage } from '../shared/createExpertComponentPage'

export default createExpertComponentPage({
  slug: 'tooltip',
  title: 'Tooltip',
  description:
    'Transient supplementary label for a trigger element. Singleton-managed (only one tooltip visible at a time), positioned via the core position engine, with optional keyboard shortcut indicator.',
  componentSlug: 'tooltip',
  icon: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  liveDemo: (
    <LiveReference>
      <ArvoTooltip content="Save document">
        <ArvoButton label="Save" />
      </ArvoTooltip>
      <ArvoTooltip content="Save document" shortcut="Ctrl+S">
        <ArvoButton label="With shortcut" />
      </ArvoTooltip>
      <ArvoTooltip content="Top placement" placement="top-center">
        <ArvoButton label="Top" variant="secondary" />
      </ArvoTooltip>
    </LiveReference>
  ),
  reactCode: `import { ArvoTooltip } from '@arvo/react';

<ArvoTooltip content="Save document">
  <button>Save</button>
</ArvoTooltip>

// With shortcut
<ArvoTooltip content="Save document" shortcut="Ctrl+S">
  <button>Save</button>
</ArvoTooltip>

// Custom placement
<ArvoTooltip content="More options" placement="top-end">
  <button aria-label="More options">…</button>
</ArvoTooltip>

// On a disabled element (keep it focusable)
<ArvoTooltip content="You do not have permission to delete">
  <button aria-disabled="true" tabIndex={0}>Delete</button>
</ArvoTooltip>`,
  jsCode: `import { ArvoTooltip, setupTooltips } from '@arvo/js';

setupTooltips({ hoverDelay: 500, gap: 6 });

const tip = ArvoTooltip.initialize(triggerEl, {
  content: 'Save document',
  placement: 'bottom-center',
  shortcut: 'Ctrl+S',
});

tip.update({ content: 'Document saved!' });
tip.update({ placement: 'top-center' });
tip.destroy();`,
})
