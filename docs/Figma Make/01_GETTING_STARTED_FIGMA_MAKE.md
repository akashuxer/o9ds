# Figma Make: Getting Started Guide
## From Zero to Productive in 30 Minutes

---

## Welcome to Figma Make

Figma Make is an AI-powered code generation tool integrated with Figma that transforms design system specifications into production-ready React components. Combined with the Arvo Design System, it enables enterprise teams to build interfaces faster, with 60-85% token savings and guaranteed design consistency.

### What This Guide Covers

This is **Phase 1: Foundation** - you'll learn the mental model, core workflows, and build your first component.

**By the end of this guide** (30 minutes):
- ✅ Understand how Figma Make + Arvo works
- ✅ Set up your environment correctly
- ✅ Build your first optimized component
- ✅ Know your next steps

---

## The Three-Layer Mental Model

Figma Make success depends on understanding **three layers**:

### Layer 1: Figma Make Interface
The AI tool that generates code based on your prompts.

```
Your Prompt → Claude AI → React Code
```

### Layer 2: Arvo Design System
Pre-built, tested component library that handles all styling, consistency, and enterprise patterns.

```
Arvo Components → Props → Perfect UI
```

### Layer 3: Theme Tokens
Design decisions (colors, spacing, typography) stored as CSS variables for consistency and maintainability.

```
theme.css → --color-primary, --spacing-lg, --radius-md
```

### How They Work Together

```
┌─────────────────────────────────────────────────────┐
│  Your Request: "Create a user form"                 │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Figma Make interprets this and asks:              │
│  "Does Arvo have form components?"                 │
│  → YES: Use Arvo Input, Button, etc. (30 tokens)  │
│  → NO: Build with theme.css (70 tokens)           │
│                                                     │
│  Result: Perfect UI + 60% token savings            │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## Before You Start: Verify Your Setup

### Step 1: Check Arvo Installation

```bash
# Command to verify Arvo packages
npm list | grep @arvo
npm list | grep @make-kits
```

**Expected output**:
```
├─ @arvo/ui-components@1.2.3
├─ @arvo/tokens@1.1.0
├─ @arvo/assets@2.0.0
└─ @make-kits/o9-arvo-make-kit@2.1.0  (if using O9)
```

### Step 2: Verify Design Tokens

```bash
# Check your theme configuration
cat src/styles/theme.css | grep --color-primary
```

**Expected output**:
```css
@theme {
  --color-primary: #6366f1;
  --color-secondary: #ec4899;
  --spacing-sm: 8px;
  --spacing-md: 12px;
  --spacing-lg: 24px;
  /* ... more tokens ... */
}
```

### Step 3: Check Guidelines (If Using O9)

```bash
# Verify guideline files exist
ls -la node_modules/@make-kits/o9-arvo-make-kit/guidelines/
```

**Expected files**:
```
├── Guidelines.md (main component reference)
├── Grid.md (data grid patterns)
├── Charts.md (chart configurations)
├── kpi.md (KPI metric components)
└── o9PageLayout.md (o9 Application Outline Structure)
```

**If any step fails**: Stop here and run `npm install` to resolve dependencies.

---

## The Core Principle: Design System First

**Golden Rule**: Before writing ANY prompt, ask:

> "Does Arvo have a component or pattern for this?"

### Example Mindset Shift

**OLD Thinking** (No Design System):
```
"I need a button. Let me describe it: blue background, white text, 
12px padding, rounded corners, hover effect..."
→ 200 tokens
```

**NEW Thinking** (With Arvo):
```
"I need a button."
→ Check Arvo
→ "Use Arvo Button variant='primary'"
→ 30 tokens
```

**Result: 85% token savings on that single component**

---

## Anatomy of a Figma Make Prompt

A well-structured prompt has **four essential sections**:

### Section 1: Design System Reference (Required)
Tell Figma Make which design system rules to follow.

```
Use Arvo Design System components and guidelines.
Follow theme.css for spacing, colors, and radius.
```

### Section 2: Component Structure (Specific)
Define exactly what you want to build.

```
Create a user signup form with:
- Email input field
- Password input field
- Confirm password input field
- Submit button
- "Already have an account?" link
```

### Section 3: Component Details (Precise)
Specify Arvo components and their properties.

```
Use Arvo components:
- Arvo Input for email, password fields
- Arvo Button variant='primary' for submit
- Arvo Text variant='caption' for link text
```

### Section 4: Layout & Styling (Consistent)
Reference design tokens, not hardcoded values.

```
Layout: Vertical stack, centered on screen
Spacing: --spacing-lg between fields, --spacing-md between label and input
Colors: Use Arvo tokens, primary action uses --color-primary
Responsive: Full-width on mobile, 400px max-width on desktop
```

### Complete Example Prompt

```
Use Arvo Design System components and follow theme.css tokens.

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
Success: Show toast notification on successful signup
```

**This prompt**: ~120 tokens
**Result**: Perfect, production-ready signup form with validation
**Comparison**: Traditional non-Arvo approach = 500+ tokens

---

## Your First Component: Step-by-Step

### Build a Product Card

**Step 1: Create the Prompt** (2 minutes)

Copy and customize this template:

```
Use Arvo Design System components and follow theme.css tokens.

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

Responsive: Full-width on mobile, fixed 280px on desktop
```

**Step 2: Select Model** (1 minute)

For a standard UI component like this → Use **Default (Sonnet)**

### Step 3: Submit and Review (2 minutes)

Look for:
- ✅ All Arvo components used correctly
- ✅ No hardcoded colors (only design tokens)
- ✅ Proper spacing using --spacing-* variables
- ✅ Responsive breakpoints defined
- ✅ Proper TypeScript types

### Step 4: Measure Impact (1 minute)

Check the token counter:
- **Your result**: ~80-100 tokens
- **Expected**: < 120 tokens
- **Comparison**: Traditional approach = 400+ tokens

---

## Common Patterns You'll Use Repeatedly

### Pattern 1: Data Table/Grid

```
Use Arvo Design System and follow Grid.md guidelines.

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
Icons: Use Arvo icons only (no external libraries)
```

### Pattern 2: Form with Validation

```
Use Arvo Design System and follow theme.css.

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
- Arvo Text variant='error' for validation messages
```

### Pattern 3: Dashboard Layout

```
Use Arvo Design System and follow o9PageLayout.md (if available).

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
Colors: Use Arvo tokens consistently
```

---

## Token Optimization: The 5 Critical Rules

### Rule 1: Always Reference Your Design System

```
✅ DO THIS:
"Use Arvo Button with variant='primary'"

❌ DON'T DO THIS:
"Create a blue button with white text, 12px padding, rounded corners..."

Savings: 170 tokens per component
```

### Rule 2: Use Design Tokens, Never Hardcoded Values

```
✅ DO THIS:
"Spacing: --spacing-lg, Colors: --color-primary"

❌ DON'T DO THIS:
"24px padding, blue color #6366f1"

Savings: 80 tokens per request
```

### Rule 3: Be Specific About Data Quantities

```
✅ DO THIS:
"30 rows of user data with columns: name, email, role, status"

❌ DON'T DO THIS:
"Show some users"

Savings: 60-100 tokens per component
```

### Rule 4: Define Responsive Behavior Upfront

```
✅ DO THIS:
"Grid: 3 columns desktop, 2 columns tablet, 1 column mobile"

❌ DON'T DO THIS:
"Make it responsive"

Savings: 50-70 tokens per component
```

### Rule 5: Select Code Before Editing (For Updates)

```
✅ DO THIS:
[Select the specific code section]
"Change the button color to --color-secondary"

❌ DON'T DO THIS:
"Find the button in my code and change it to a different color"

Savings: 250-300 tokens per edit
```

---

## Model Selection: Quick Decision Tree

Use this every time you start a new request:

```
┌─ Is it a simple change? (color, spacing)
│  └─ YES → Use Flash (⚡ fastest, lowest tokens)
│
├─ Is it standard UI? (cards, forms, lists)
│  └─ YES → Use Sonnet (✓ default, most reliable)
│
├─ Is it complex logic? (drag-drop, animations, state)
│  └─ YES → Use Opus (🧠 most capable)
│
└─ Is it an integration? (API, database, auth)
   └─ YES → Use Gemini 3.1 Pro (🎓 integration specialist)

NOT SURE? → Default to Sonnet
```

### Token Impact by Model

| Model | Average Tokens | Best For |
|-------|-----------------|----------|
| Flash | 30-50 | Quick tweaks |
| Sonnet (Default) | 80-150 | Most UI work |
| Opus | 150-250 | Complex features |
| Gemini 3.1 Pro | 100-200 | Integrations |

**Recommendation**: Use Sonnet for 80% of your work. Switch models only when needed.

---

## Your First Week Workflow

### Day 1: Foundation (1 hour)

- [ ] Run setup verification steps (above)
- [ ] Read this entire guide
- [ ] Build your first product card component
- [ ] Track the token count
- [ ] Compare vs traditional approach

### Day 2-3: Practice (1 hour each)

- [ ] Build a simple data table
- [ ] Build a contact form with validation
- [ ] Practice using design tokens (no hardcoded values)
- [ ] Practice using Arvo components

### Day 4: Optimization (1 hour)

- [ ] Read "Token Optimization" section again
- [ ] Rebuild components from Day 2 with optimization
- [ ] Measure token savings
- [ ] Note patterns that work best

### Day 5: Real Project (2 hours)

- [ ] Start building an actual feature
- [ ] Apply all optimization techniques
- [ ] Track actual token usage
- [ ] Review and refine

**Expected Results by End of Week**:
- ✅ 50-60% token savings vs baseline
- ✅ Using Arvo for all standard components
- ✅ Consistent use of design tokens
- ✅ Building 5-10 components per day

---

## Troubleshooting: Common Issues

### Issue: "My component uses too many tokens"

**Solution**:
1. Are you referencing Arvo components? If not, use them.
2. Are you using design tokens? If not, switch to theme.css variables.
3. Is your request vague? Make it more specific.
4. Did you select code before editing? Always select first.

**Typical fix saves**: 50-80%

### Issue: "Component doesn't look right"

**Causes & Fixes**:
- ❌ Using custom className instead of Arvo props
  - ✅ Use `variant='primary'` instead of `className='bg-blue-600'`

- ❌ Hardcoded colors instead of design tokens
  - ✅ Use `--color-primary` instead of `#6366f1`

- ❌ Wrong Arvo component variant
  - ✅ Check Guidelines.md for correct prop names

### Issue: "Arvo component not found"

**Solution**:
1. Verify @arvo/* packages installed: `npm list | grep @arvo`
2. Check Guidelines.md for component name spelling
3. Verify correct import path
4. Run `npm install` to resolve any missing dependencies

### Issue: "Design tokens not applying"

**Solution**:
1. Verify theme.css exists: `cat src/styles/theme.css`
2. Check that @theme block is defined correctly
3. Ensure CSS is imported in your root component
4. Verify Tailwind is configured to use CSS variables

---

## Your Next Steps

### Immediate (Today):
1. ✅ Complete setup verification
2. ✅ Build your first product card
3. ✅ Track token usage
4. ✅ Review the Common Patterns section

### This Week:
1. ✅ Build 5-10 components using templates
2. ✅ Master the 5 optimization rules
3. ✅ Try model switching
4. ✅ Start tracking token savings

### Next Week:
1. ✅ Read: **02_ARVO_MASTERY_GUIDE.md** (Deep Arvo patterns)
2. ✅ Read: **03_ADVANCED_OPTIMIZATION.md** (Token strategies)
3. ✅ Start real project
4. ✅ Share learnings with team

---

## Key Metrics to Track

Keep these numbers visible:

- **Tokens per component**: Target < 100
- **Tokens per page**: Target < 500
- **Development speed**: Track vs baseline
- **Design consistency**: % using Arvo components
- **Revision rounds**: Ideally 1-2

### Week 1 Benchmark

| Metric | Target | Stretch |
|--------|--------|---------|
| Tokens/component | < 100 | < 80 |
| Tokens/page | < 500 | < 400 |
| Arvo usage | 80% | 95% |
| Development speed | 2x faster | 3x faster |
| Revisions needed | 2 | 1 |

---

## Key Takeaways

### The Three Principles of Figma Make

```
┌──────────────────────────────────────────────────┐
│                                                  │
│  1. DESIGN SYSTEM FIRST                          │
│     Always check Arvo before building custom     │
│                                                  │
│  2. TOKENS, NOT VALUES                           │
│     Reference design tokens, never hardcode      │
│                                                  │
│  3. SPECIFIC, NOT VAGUE                          │
│     Clear requirements = fewer tokens            │
│                                                  │
│  Result: 60-85% token savings + perfect UX       │
│                                                  │
└──────────────────────────────────────────────────┘
```

### What Success Looks Like

- ✅ Building components in minutes, not hours
- ✅ Consistent design across all interfaces
- ✅ 60%+ token savings on every project
- ✅ Fewer revisions and back-and-forth
- ✅ Team shipping features 2x faster

---

## Quick Reference Checklist

Save this checklist and use for every new request:

- [ ] Does Arvo have a component for this?
- [ ] Am I using Arvo components, not custom ones?
- [ ] Am I using design tokens, not hardcoded values?
- [ ] Have I specified data quantities clearly?
- [ ] Have I defined responsive behavior?
- [ ] Did I select code before editing?
- [ ] Am I using the right AI model?
- [ ] Is my prompt as concise as possible?
- [ ] Have I considered batching related changes?

**All ✅? Submit your prompt.**

---

## Getting Help

### Quick Questions:
- Check **Common Patterns** section
- Review **Troubleshooting** section
- Ask `/help` in Figma Make

### Design System Questions:
- See next guide: **02_ARVO_MASTERY_GUIDE.md**
- Check Guidelines.md (in your project)
- Review Arvo component documentation

### Token Optimization:
- See **03_ADVANCED_OPTIMIZATION.md**
- Review patterns in this guide
- Study your token counts

### Technical Issues:
- GitHub: https://github.com/anthropics/claude-code/issues
- Figma Support: Route to Fig (support bot)

---

## You're Ready

You now have:

✅ Understanding of how Figma Make + Arvo works
✅ Setup verification steps
✅ Your first component template
✅ 5 critical optimization rules
✅ Common patterns to reuse
✅ Troubleshooting guide
✅ Clear success metrics

**Next action**: Build your first product card using the template in "Your First Component" section.

**Time to build**: 15 minutes
**Expected tokens**: ~80-100
**Savings vs traditional**: 75%

---

**Welcome to efficient, consistent, and delightful component development with Figma Make and Arvo Design System.** 🚀

---

## Document Info

- **Type**: Getting Started Guide - Phase 1
- **Audience**: All Figma Make users
- **Read Time**: 30 minutes
- **Level**: Beginner
- **Prerequisites**: Figma Make installed, Arvo packages installed
- **Next Document**: 02_ARVO_MASTERY_GUIDE.md

---

**Last Updated**: May 2026
**Status**: Ready for Production
**Version**: 1.0
