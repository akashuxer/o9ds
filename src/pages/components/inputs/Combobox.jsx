import { ArvoCombobox } from '@arvo/react'
import { LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'
import { createExpertComponentPage } from '../shared/createExpertComponentPage'

const OPTIONS = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
]

export default createExpertComponentPage({
  slug: 'combobox',
  title: 'Combobox',
  description:
    'Single-select picker with type-to-filter input. Shows a listbox dropdown of matching options. Supports creatable items and grouped options.',
  componentSlug: 'combobox',
  icon: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  liveDemo: (
    <LiveReference>
      <div style={{ minWidth: 240 }}>
        <ArvoCombobox label="Fruit" items={OPTIONS} placeholder="Type to filter" />
      </div>
      <div style={{ minWidth: 240 }}>
        <ArvoCombobox label="With default" items={OPTIONS} defaultValue="banana" />
      </div>
      <div style={{ minWidth: 240 }}>
        <ArvoCombobox label="Disabled" items={OPTIONS} isDisabled />
      </div>
    </LiveReference>
  ),
  reactCode: `import { ArvoCombobox } from '@arvo/react';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
];

<ArvoCombobox label="Fruit" options={options} placeholder="Type to filter" />

// Controlled
const [v, setV] = useState(null);
<ArvoCombobox
  label="Fruit"
  options={options}
  value={v}
  onChange={(value) => setV(value)}
  onInputChange={(text) => fetchSuggestions(text)}
/>

// Creatable
<ArvoCombobox label="Tag" options={options} creatable />`,
  jsCode: `import { ArvoCombobox } from '@arvo/js';

const cb = ArvoCombobox.initialize(el, {
  label: 'Fruit',
  options,
  onChange: (value, option) => console.log(value),
  onInputChange: (text) => fetchSuggestions(text),
});

cb.value('banana');
cb.value();              // => 'banana'
cb.setOptions(newOptions);
cb.open();
cb.disabled(true);
cb.destroy();`,
})
