import { ArvoTextarea } from '@arvo/react'
import { LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'
import { createExpertComponentPage } from '../shared/createExpertComponentPage'

export default createExpertComponentPage({
  slug: 'textarea',
  title: 'Textarea',
  description:
    'Multi-line text input with optional auto-resize, character counter, and the same validation/error/required wiring as Textbox.',
  componentSlug: 'textarea',
  icon: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  liveDemo: (
    <LiveReference>
      <div style={{ minWidth: 280 }}>
        <ArvoTextarea label="Notes" placeholder="Type a few words..." rows={3} />
      </div>
      <div style={{ minWidth: 280 }}>
        <ArvoTextarea label="With counter" maxLength={120} rows={3} />
      </div>
      <div style={{ minWidth: 280 }}>
        <ArvoTextarea label="Disabled" isDisabled rows={3} />
      </div>
    </LiveReference>
  ),
  reactCode: `import { ArvoTextarea } from '@arvo/react';

<ArvoTextarea label="Notes" placeholder="Type here..." rows={4} />
<ArvoTextarea label="Bio" maxLength={200} autoResize maxRows={8} />
<ArvoTextarea label="Description" defaultValue="" isRequired />
<ArvoTextarea label="Read-only" defaultValue="Locked content" isReadonly />`,
  jsCode: `import { ArvoTextarea } from '@arvo/js';

const ta = ArvoTextarea.initialize(el, {
  label: 'Notes',
  rows: 4,
  onChange: (value) => console.log(value),
});

ta.value('hello');
ta.value();
ta.setError('Required');
ta.disabled(true);
ta.destroy();`,
})
