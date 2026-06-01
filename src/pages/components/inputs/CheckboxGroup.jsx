import { ArvoCheckboxGroup, ArvoCheckbox } from '@arvo/react'
import { LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'
import { createExpertComponentPage } from '../shared/createExpertComponentPage'

export default createExpertComponentPage({
  slug: 'checkbox-group',
  title: 'Checkbox Group',
  description:
    'A labeled group of checkboxes that read as a single multi-select control. Provides the legend-equivalent and ensures the group has a single accessible name.',
  componentSlug: 'checkbox-group',
  icon: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M5 13l4 4L19 7" />
    </svg>
  ),
  liveDemo: (
    <LiveReference>
      <ArvoCheckboxGroup label="Notifications">
        <ArvoCheckbox value="email" label="Email" defaultChecked />
        <ArvoCheckbox value="sms" label="SMS" />
        <ArvoCheckbox value="push" label="Push" />
      </ArvoCheckboxGroup>
    </LiveReference>
  ),
  reactCode: `import { ArvoCheckboxGroup } from '@arvo/react';

const items = [
  { value: 'email', label: 'Email' },
  { value: 'sms', label: 'SMS' },
  { value: 'push', label: 'Push' },
];

<ArvoCheckboxGroup label="Notifications" items={items} defaultValue={['email']} />

// Controlled
const [v, setV] = useState(['email']);
<ArvoCheckboxGroup label="Notifications" items={items} value={v} onChange={setV} />

// Horizontal layout
<ArvoCheckboxGroup label="Permissions" items={items} orientation="horizontal" />`,
  jsCode: `import { ArvoCheckboxGroup } from '@arvo/js';

const grp = ArvoCheckboxGroup.initialize(el, {
  label: 'Notifications',
  items,
  defaultValue: ['email'],
  onChange: (values) => console.log(values),
});

grp.value(['email', 'sms']);
grp.value();              // => ['email', 'sms']
grp.disabled(true);
grp.destroy();`,
})
