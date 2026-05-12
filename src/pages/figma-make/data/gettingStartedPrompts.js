/** Copy-paste prompts moved from Getting Started — see Prompts Library tab. */

export const PROMPT_ANATOMY_EXAMPLE = `Use Arvo Design System components and follow theme.css tokens.

Create a user signup form with:
- Email input field with validation
- Password input field (min 8 characters)
- Confirm password field
- "I agree to terms" checkbox
- Submit button
- "Already have an account?" link

Arvo components:
- Arvo Input for email, password fields
- Arvo Checkbox for terms agreement
- Arvo Button variant='primary' for signup
- Arvo Text variant='caption' for link

Layout: Vertical stack, centered, 400px max-width
Spacing: --spacing-lg between sections, --spacing-md between fields
Colors: Use Arvo tokens, primary action uses --color-primary
Responsive: Full-width on mobile, fixed 400px width on desktop

Validation states: Show error message below field if invalid
Success: Show toast notification on successful signup`

export const FIRST_COMPONENT_PROMPT = `Use Arvo Design System components and follow theme.css tokens.

Create a product card component displaying:
- Product image (16:9 aspect ratio)
- Product name
- Product price
- Product rating (1-5 stars)
- "Add to Cart" button

Arvo components:
- Arvo Card as container
- Arvo Text variant='heading' for product name
- Arvo Text variant='body' for price
- Arvo Rating for star display
- Arvo Button variant='primary' for Add to Cart

Styling:
- Card width: 280px, height: auto
- Image height: 160px
- Spacing: Use --spacing-md for card padding and element gaps
- Border radius: Use --radius-md on card and image
- Hover effect: Scale up slightly on card hover

Responsive: Full-width on mobile, fixed 280px on desktop`

export const GETTING_STARTED_PATTERNS = [
  {
    title: 'Data table / grid',
    code: `Use Arvo Design System and follow Grid.md guidelines.

Create data table with:
- Columns: Name, Email, Status, Actions
- 25 rows mock data
- Sortable columns
- Row hover highlight
- Inline edit/delete actions

Arvo components:
- Arvo Table for grid structure
- Arvo Badge for status indicators
- Arvo Button icon='edit' and icon='trash' for actions

Spacing: --spacing-md between rows
Icons: Use Arvo icons only (no external libraries)`,
  },
  {
    title: 'Form with validation',
    code: `Use Arvo Design System and follow theme.css.

Create contact form with:
- Name field (required)
- Email field (required, validate email format)
- Message field (required, textarea)
- Submit button
- Show validation errors below each field
- Success message on submit

Arvo components:
- Arvo Input for name and email
- Arvo Textarea for message
- Arvo Button variant='primary' for submit
- Arvo Text variant='error' for validation messages`,
  },
  {
    title: 'Dashboard layout',
    code: `Use Arvo Design System and follow o9PageLayout.md (if available).

Create dashboard layout with:
- Header: Logo, title, user menu
- Sidebar: 5 navigation items with icons
- Main content: 4 metric cards in a grid
- Footer: Optional, copyright info

Arvo components:
- Arvo Header for top bar
- Arvo Sidebar for navigation
- Arvo Container for main area
- Arvo Card for metric cards
- Arvo Button for actions

Layout: Sidebar collapsible on mobile
Spacing: Use theme.css for all gaps and padding
Colors: Use Arvo tokens consistently`,
  },
]
