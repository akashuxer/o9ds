import { ArvoRadio } from '@arvo/react'
import { LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'
import { createExpertComponentPage } from '../shared/createExpertComponentPage'

export default createExpertComponentPage({
  slug: 'radio',
  title: 'Radio',
  description:
    'A single radio control. Always wrap one or more radios in a RadioGroup so the group provides legend semantics and arrow-key roving focus.',
  componentSlug: 'radio',
  icon: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="4" fill="currentColor" />
    </svg>
  ),
  liveDemo: (
    <LiveReference>
      <ArvoRadio value="opt-1" label="Default" />
      <ArvoRadio value="opt-2" label="Checked" defaultChecked />
      <ArvoRadio value="opt-3" label="Disabled" isDisabled />
    </LiveReference>
  ),
  reactCode: `import { ArvoRadioGroup, ArvoRadio } from '@arvo/react';

<ArvoRadioGroup label="Theme" defaultValue="light">
  <ArvoRadio value="light" label="Light" />
  <ArvoRadio value="dark" label="Dark" />
  <ArvoRadio value="system" label="System" />
</ArvoRadioGroup>`,
  jsCode: `import { ArvoRadio } from '@arvo/js';

const rb = ArvoRadio.initialize(el, {
  value: 'light',
  label: 'Light',
  onChange: (value) => console.log(value),
});

rb.checked(true);
rb.disabled(true);
rb.destroy();`,
})
