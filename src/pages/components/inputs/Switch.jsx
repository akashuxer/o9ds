import { ArvoSwitch } from '@arvo/react'
import { LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'
import { createExpertComponentPage } from '../shared/createExpertComponentPage'

export default createExpertComponentPage({
  slug: 'switch',
  title: 'Switch',
  description:
    'On/off toggle for binary settings. Effect should be immediate — switches do not require a separate Save action.',
  componentSlug: 'switch',
  icon: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12a7 7 0 0114 0M9 12a3 3 0 116 0 3 3 0 01-6 0z" />
    </svg>
  ),
  liveDemo: (
    <LiveReference>
      <ArvoSwitch label="Wi-Fi" defaultChecked />
      <ArvoSwitch label="Notifications" />
      <ArvoSwitch label="Disabled" isDisabled />
    </LiveReference>
  ),
  reactCode: `import { ArvoSwitch } from '@arvo/react';

<ArvoSwitch label="Wi-Fi" defaultChecked />

// Controlled
const [on, setOn] = useState(true);
<ArvoSwitch label="Dark mode" isChecked={on} onChange={setOn} />`,
  jsCode: `import { ArvoSwitch } from '@arvo/js';

const sw = ArvoSwitch.initialize(el, {
  label: 'Wi-Fi',
  defaultChecked: true,
  onChange: (checked) => console.log(checked),
});

sw.toggle();           // flip
sw.toggle(false);      // force off
sw.checked();          // => boolean
sw.disabled(true);
sw.destroy();`,
})
