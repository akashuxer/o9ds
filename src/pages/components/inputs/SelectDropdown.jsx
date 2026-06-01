import { ArvoSelect } from '@arvo/react'
import { LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'
import { createExpertComponentPage } from '../shared/createExpertComponentPage'

const OPTIONS = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
]

export default createExpertComponentPage({
  slug: 'select-dropdown',
  title: 'Select Dropdown',
  description:
    'Single-select dropdown rendered as a combobox with a listbox popup. Use Combobox when the user should be able to filter the options by typing.',
  componentSlug: 'select-dropdown',
  icon: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  ),
  liveDemo: (
    <LiveReference>
      <div style={{ minWidth: 240 }}>
        <ArvoSelect label="Fruit" items={OPTIONS} placeholder="Pick one" />
      </div>
      <div style={{ minWidth: 240 }}>
        <ArvoSelect label="With default" items={OPTIONS} defaultValue="banana" />
      </div>
      <div style={{ minWidth: 240 }}>
        <ArvoSelect label="Disabled" items={OPTIONS} isDisabled />
      </div>
    </LiveReference>
  ),
  reactCode: `import { ArvoSelect } from '@arvo/react';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
];

<ArvoSelect label="Fruit" options={options} placeholder="Pick one" />

// Controlled
const [v, setV] = useState(null);
<ArvoSelect label="Fruit" options={options} value={v} onChange={(value) => setV(value)} />`,
  jsCode: `import { ArvoSelect } from '@arvo/js';

const sel = ArvoSelect.initialize(el, {
  label: 'Fruit',
  options,
  onChange: (value, option) => console.log(value),
});

sel.value('banana');
sel.value();              // => 'banana'
sel.open();
sel.close();
sel.disabled(true);
sel.destroy();`,
})
