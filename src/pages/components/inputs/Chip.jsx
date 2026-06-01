import { createExpertComponentPage } from '../shared/createExpertComponentPage'

export default createExpertComponentPage({
  slug: 'chip',
  title: 'Chip',
  description:
    'Compact interactive label representing an attribute, filter token, or selection. Supports icon, count badge, removability, and selection states. Use ChipList for collections.',
  componentSlug: 'chip',
  icon: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10v10H7z" />
    </svg>
  ),
  reactCode: `// Chip is currently shipped via @arvo/js. The React wrapper will follow
// the same prop shape documented in the Props table below.`,
  jsCode: `import { ArvoChip } from '@arvo/js';

const chip = ArvoChip.initialize(el, {
  label: 'Q3',
  variant: 'filter',
  isRemovable: true,
  onRemove: () => removeFilter('q3'),
});

chip.toggle();         // toggles selected state
chip.toggle(true);     // explicit set
chip.disabled(true);
chip.destroy();`,
})
