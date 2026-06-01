import { ArvoCheckbox } from '@arvo/react'
import { LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'
import { createExpertComponentPage } from '../shared/createExpertComponentPage'

export default createExpertComponentPage({
  slug: 'checkbox',
  title: 'Checkbox',
  description:
    'Single tri-state checkbox (checked, unchecked, indeterminate). For grouped selection, use Checkbox Group.',
  componentSlug: 'checkbox',
  icon: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  liveDemo: (
    <LiveReference>
      <ArvoCheckbox label="Default" />
      <ArvoCheckbox label="Checked" defaultChecked />
      <ArvoCheckbox label="Indeterminate" isIndeterminate />
      <ArvoCheckbox label="Disabled" isDisabled />
    </LiveReference>
  ),
  reactCode: `import { ArvoCheckbox } from '@arvo/react';

<ArvoCheckbox label="Subscribe" defaultChecked />

// Controlled
const [c, setC] = useState(false);
<ArvoCheckbox label="Agree" isChecked={c} onChange={setC} />

// Indeterminate (parent of nested checkboxes)
<ArvoCheckbox label="All items" isIndeterminate onChange={toggleAll} />`,
  jsCode: `import { ArvoCheckbox } from '@arvo/js';

const cb = ArvoCheckbox.initialize(el, {
  label: 'Agree',
  defaultChecked: false,
  onChange: (checked) => console.log(checked),
});

cb.toggle();          // flip
cb.toggle(true);      // force checked
cb.indeterminate(true);
cb.disabled(true);
cb.destroy();`,
})
