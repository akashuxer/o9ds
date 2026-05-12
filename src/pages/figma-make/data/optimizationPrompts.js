/** Example prompt from Optimization tab — see Prompts Library tab. */

export const OPTIMIZATION_EFFICIENT_PROMPT = `Use Arvo Design System and theme.css tokens.

Create product listing with:
- Arvo Grid: 3 columns (2 tablet, 1 mobile)
- 25 × Arvo Card product components:
  - Image (16:9 ratio)
  - Arvo Text variant='heading' for name
  - Arvo Text for price
  - Arvo Button variant='primary' "Add"
- Filters: Arvo Select (category, price range)
- Sort: Arvo Button group (newest, price: low-high)

Spacing: --spacing-lg between products
Colors: Use Arvo tokens
Data: 25 mock products with name, price, image URL
Responsive: Grid adjusts for screen size`
