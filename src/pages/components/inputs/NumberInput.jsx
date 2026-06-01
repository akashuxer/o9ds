import { ArvoNumberInput } from '@arvo/react'
import { LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'
import { createExpertComponentPage } from '../shared/createExpertComponentPage'

export default createExpertComponentPage({
  slug: 'number-input',
  title: 'Number Input',
  description:
    'Numeric input with optional min/max/step constraints, stepper buttons, and decimal precision. Renders the spinbutton role for assistive tech.',
  componentSlug: 'number-input',
  icon: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
    </svg>
  ),
  liveDemo: (
    <LiveReference>
      <div style={{ minWidth: 220 }}>
        <ArvoNumberInput label="Quantity" defaultValue={1} min={0} max={100} />
      </div>
      <div style={{ minWidth: 220 }}>
        <ArvoNumberInput label="Price" defaultValue={9.99} step={0.01} />
      </div>
      <div style={{ minWidth: 220 }}>
        <ArvoNumberInput label="Disabled" defaultValue={5} isDisabled />
      </div>
    </LiveReference>
  ),
  reactCode: `import { ArvoNumberInput } from '@arvo/react';

<ArvoNumberInput label="Quantity" defaultValue={1} min={0} max={100} />
<ArvoNumberInput label="Price" defaultValue={9.99} step={0.01} precision={2} />
<ArvoNumberInput label="Read-only" defaultValue={42} isReadonly />`,
  jsCode: `import { ArvoNumberInput } from '@arvo/js';

const num = ArvoNumberInput.initialize(el, {
  label: 'Quantity',
  min: 0,
  max: 100,
  defaultValue: 1,
  onChange: (value) => console.log(value),
});

num.value(5);
num.value();         // => 5
num.setError('Out of range');
num.disabled(true);
num.destroy();`,
})
