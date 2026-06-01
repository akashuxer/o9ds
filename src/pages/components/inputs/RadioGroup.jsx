import { ArvoRadioGroup, ArvoRadio } from '@arvo/react'
import { LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'
import { createExpertComponentPage } from '../shared/createExpertComponentPage'

export default createExpertComponentPage({
  slug: 'radio-group',
  title: 'Radio Group',
  description:
    'A labeled group of radios that read as a single mutually-exclusive control. Implements arrow-key roving focus per the WAI-ARIA Radio Group pattern.',
  componentSlug: 'radio-group',
  icon: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="4" fill="currentColor" />
    </svg>
  ),
  liveDemo: (
    <LiveReference>
      <ArvoRadioGroup name="theme" label="Theme" defaultValue="light">
        <ArvoRadio value="light" label="Light" />
        <ArvoRadio value="dark" label="Dark" />
        <ArvoRadio value="system" label="System" />
      </ArvoRadioGroup>
    </LiveReference>
  ),
  reactCode: `import { ArvoRadioGroup } from '@arvo/react';

const items = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'system', label: 'System' },
];

<ArvoRadioGroup label="Theme" items={items} defaultValue="light" />

// Controlled
const [theme, setTheme] = useState('light');
<ArvoRadioGroup label="Theme" items={items} value={theme} onChange={setTheme} />

// Horizontal
<ArvoRadioGroup label="Density" items={items} orientation="horizontal" />`,
  jsCode: `import { ArvoRadioGroup } from '@arvo/js';

const grp = ArvoRadioGroup.initialize(el, {
  label: 'Theme',
  items,
  defaultValue: 'light',
  onChange: (value) => console.log(value),
});

grp.value('dark');
grp.value();              // => 'dark'
grp.disabled(true);
grp.destroy();`,
})
