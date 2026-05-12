# Advanced Token Optimization Guide
## Mastering Efficiency at Scale

---

## Welcome to Optimization

You've learned the fundamentals (Phase 1) and mastered Arvo composition (Phase 2).

Now it's time to become a **Token Efficiency Expert** - knowing not just *how* to use Arvo, but *when* to use each model, *how* to structure prompts for minimal tokens, and *how* to measure and improve continuously.

**Expected time**: 40 minutes
**Skill level**: Advanced
**Prerequisite**: 01_GETTING_STARTED_FIGMA_MAKE.md + 02_ARVO_MASTERY_GUIDE.md

---

## The Token Economy: Where Every Token Counts

Understanding Figma Make's token economy is essential for scaling your work.

### What is a Token?

```
1 token ≈ 4 characters or ~0.75 words

Examples:
- "Hello world" = 3 tokens
- A typical component prompt = 80-150 tokens
- A full dashboard = 200-400 tokens
```

### Your Token Budget

Every Figma Make request has a token budget:

```
┌──────────────────────────────────────────┐
│  Typical Request Token Distribution       │
├──────────────────────────────────────────┤
│                                          │
│  Your Prompt (Input)        40-60%       │
│  ├─ Description and structure            │
│  ├─ Component requirements               │
│  └─ Data specifications                  │
│                                          │
│  AI Response (Output)       40-60%       │
│  ├─ Generated code                       │
│  ├─ Explanations                         │
│  └─ State management                     │
│                                          │
│  Total per request         ~150-300      │
│                                          │
└──────────────────────────────────────────┘
```

### Your Optimization Opportunities

```
Input Tokens (You control 100%):
- ✅ Being specific (reduces AI guessing = fewer output tokens)
- ✅ Using design system references (fewer descriptions needed)
- ✅ Selecting code first (AI scans less context)
- ✅ Batching changes (fewer separate requests)
- ✅ Clear data structure (AI generates precisely)

Output Tokens (You influence 70%):
- ✅ Clear requirements (AI generates exact code, not alternatives)
- ✅ Correct model selection (simpler models generate less)
- ✅ Design system constraints (Arvo handles complexity)
```

---

## Model Selection Mastery

Model selection is your biggest lever for token efficiency.

### The Four Models: When to Use Each

#### Model 1: Gemini 3 Flash (⚡ Fastest)

**Use for**: Simple, straightforward changes (5% of work)

**Best for**:
- Color changes
- Text updates
- Spacing adjustments
- Icon swaps
- Minor CSS tweaks
- Small additions

**Token cost**: 30-50 tokens
**Speed**: Fastest
**Accuracy**: Very good for simple tasks

**Example prompts**:
```
"Change button color from --color-primary to --color-secondary"
→ Flash (⚡)
→ ~35 tokens
→ Instant response

"Update hero section heading text to 'Welcome Back'"
→ Flash (⚡)
→ ~40 tokens
→ Done in seconds
```

**When NOT to use**:
- ❌ New component creation
- ❌ Complex logic changes
- ❌ Multiple interdependent features
- ❌ Ambiguous requirements

---

#### Model 2: Claude Sonnet 4 (✓ Default)

**Use for**: Standard UI and most work (80% of work)

**Best for**:
- Component creation
- Data tables
- Forms with validation
- Dashboards with multiple elements
- Moderate complexity logic
- Responsive layouts
- Integration of 3-5 components

**Token cost**: 80-150 tokens
**Speed**: Fast
**Accuracy**: Excellent, balanced

**Example prompts**:
```
"Create product card with image, title, price, rating, Add to Cart button using Arvo components"
→ Sonnet (✓)
→ ~100 tokens
→ Perfect result first time

"Build user form with email, password, confirm password, validation, submit button"
→ Sonnet (✓)
→ ~120 tokens
→ Complete with error handling
```

**When to use Sonnet**:
- ✅ You're unsure which model to pick (always safe bet)
- ✅ Component creation from scratch
- ✅ Moderate complexity features
- ✅ Most business logic

**When NOT to use**:
- ❌ Very simple color/text changes (use Flash)
- ❌ Complex AI logic (use Opus)
- ❌ API integrations (use Gemini 3.1 Pro)

---

#### Model 3: Claude Opus (🧠 Most Powerful)

**Use for**: Complex logic and tricky problems (10-15% of work)

**Best for**:
- Drag-and-drop interfaces
- Complex state management
- Advanced animations
- Algorithm implementation
- Custom form behaviors
- Complex data transformations
- Edge case handling

**Token cost**: 150-250 tokens
**Speed**: Slower than Sonnet
**Accuracy**: Highest, handles complexity

**Example prompts**:
```
"Create drag-and-drop kanban board with move animations, persistence, and undo"
→ Opus (🧠)
→ ~200 tokens
→ Complex state handling included

"Build auto-complete search with debouncing, API calls, and caching"
→ Opus (🧠)
→ ~180 tokens
→ All edge cases handled
```

**When to use Opus**:
- ✅ You need perfect quality for critical features
- ✅ Complex state/logic needed
- ✅ You're stuck with Sonnet
- ✅ Advanced animations or interactions

**When NOT to use**:
- ❌ Simple UI changes (use Flash)
- ❌ Standard components (use Sonnet)
- ❌ API integrations (use Gemini 3.1 Pro)
- ❌ Most work (saves tokens with Sonnet)

---

#### Model 4: Gemini 3.1 Pro (🎓 Integration Specialist)

**Use for**: API integrations and backend work (5-10% of work)

**Best for**:
- Database integrations
- API client creation
- Authentication implementation
- Payment processing
- Third-party service integration
- Complex data fetching

**Token cost**: 100-200 tokens
**Speed**: Fast
**Accuracy**: Excellent for integrations

**Example prompts**:
```
"Integrate Stripe payment processing with Arvo Button and success notification"
→ Gemini 3.1 Pro (🎓)
→ ~150 tokens
→ Complete payment flow

"Create Supabase authentication flow with login, signup, password reset"
→ Gemini 3.1 Pro (🎓)
→ ~180 tokens
→ All auth states handled
```

**When to use Gemini 3.1 Pro**:
- ✅ Working with external APIs
- ✅ Database operations
- ✅ Authentication/authorization
- ✅ Server integrations

**When NOT to use**:
- ❌ Frontend UI only (use Sonnet)
- ❌ Simple state logic (use Opus)
- ❌ Minor tweaks (use Flash)

---

### Model Selection Decision Matrix

Keep this visible and reference for every request:

```
┌─────────────────────────────────────────────────────────────┐
│                  MODEL SELECTION MATRIX                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  COMPLEXITY  │ FLASH │ SONNET │ OPUS │ GEMINI 3.1 PRO    │
│  ═════════════════════════════════════════════════════════ │
│              │       │        │      │                    │
│  Trivial     │ ✅✅✅ │  ❌    │  ❌  │  ❌                │
│  (color,     │ USE   │        │      │                    │
│   text)      │       │        │      │                    │
│              │       │        │      │                    │
│  Simple      │ ✅✅  │ ✅✅✅  │  ❌  │  ❌                │
│  (forms,     │ OK    │ BEST   │      │                    │
│   cards)     │       │        │      │                    │
│              │       │        │      │                    │
│  Moderate    │ ❌    │ ✅✅✅  │ ✅   │  ❌                │
│  (dashboard, │       │ BEST   │ OK   │                    │
│   complex    │       │        │      │                    │
│   UI)        │       │        │      │                    │
│              │       │        │      │                    │
│  Complex     │ ❌    │ ✅     │ ✅✅✅│  ❌                │
│  (state,     │       │ OK     │ BEST │                    │
│   logic)     │       │        │      │                    │
│              │       │        │      │                    │
│  Integration │ ❌    │ ❌     │ ❌   │  ✅✅✅             │
│  (API, DB)   │       │        │      │  BEST              │
│              │       │        │      │                    │
└─────────────────────────────────────────────────────────────┘

Reading guide:
✅✅✅ = Perfect choice, use this
✅✅  = Good choice, will work well
✅   = Acceptable choice, will work
❌    = Poor choice, inefficient or wrong
```

---

## Prompt Structure for Maximum Efficiency

The structure of your prompt directly impacts token usage.

### Optimal Prompt Structure

```
┌─────────────────────────────────────────────────────┐
│          EFFICIENT PROMPT STRUCTURE                  │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Section 1: Context (1-2 lines)                    │
│  "Use Arvo Design System and theme.css tokens"     │
│                                                     │
│  Section 2: Components (Specific list)             │
│  "Create:                                          │
│   - [Component 1] with [specific details]         │
│   - [Component 2] with [specific details]"        │
│                                                     │
│  Section 3: Arvo Components (Precise)              │
│  "Use Arvo components:                             │
│   - Arvo [ComponentName] with [props]"            │
│                                                     │
│  Section 4: Styling (Tokens only)                  │
│  "Spacing: --spacing-lg                            │
│   Colors: --color-primary                          │
│   Radius: --radius-md"                             │
│                                                     │
│  Section 5: Data (Quantities)                      │
│  "[N] rows with columns: [list]"                   │
│                                                     │
│  Total: ~100-120 tokens                            │
│  Result: Perfect component, first time             │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Efficiency Comparison: Same Feature

**Feature**: Product listing page with 25 products

#### ❌ Inefficient Prompt (450 tokens)

```
"Hi, I need to create a product listing page. I'm not sure exactly what it 
should look like, but maybe something like what I've seen on other sites. 
It should display products with their information, and there should be some 
kind of filtering capability. The design should be nice and modern. Also, 
users should be able to sort the products somehow. I'd like the page to 
be responsive too. Can you help me create this? Maybe we can start with 
a basic version and then I'll give you feedback on how to improve it?"
```

**Issues**:
- ❌ Vague requirements (long description)
- ❌ Multiple revision rounds needed
- ❌ No design system reference
- ❌ Slow feedback loop
- ❌ High token waste

---

#### ✅ Efficient Prompt (95 tokens)

```
Use Arvo Design System and theme.css tokens.

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
Responsive: Grid adjusts for screen size
```

**Benefits**:
- ✅ Specific requirements (no guessing)
- ✅ Single revision (usually perfect first time)
- ✅ Design system enforced consistency
- ✅ Fast feedback
- ✅ 79% fewer tokens needed

**Token savings**: 355 tokens (79%)

---

## The 7 Laws of Token Efficiency

### Law 1: Specificity Saves Tokens

```
VAGUE: "Create a nice form"
Tokens: 200-300 (multiple revisions likely)

SPECIFIC: "Create login form with email field (required, validate format), 
password field (min 8 chars), 'Forgot password' link, 'Sign Up' link, 
'Remember me' checkbox, submit button. Use Arvo components."
Tokens: 90-110 (probably perfect first time)

Savings: 60-70%
Key: The more specific the requirement, the fewer tokens needed
```

### Law 2: Arvo Usage Saves Tokens

```
WITHOUT ARVO: "Create a blue button with white text, padding, rounded 
corners, hover effect that darkens the background..."
Tokens: 180-200

WITH ARVO: "Use Arvo Button variant='primary'"
Tokens: 25-35

Savings: 85%
Key: Design system references are incredibly efficient
```

### Law 3: Token Count Compounds in Changes

```
Original request: 100 tokens
Change 1: "Update button color" → 80 tokens (selecting code first)
Change 2: "Add validation" → 90 tokens
Change 3: "Make responsive" → 85 tokens

Total: 355 tokens

BETTER: Single request with all requirements
"Create form with email field (validate), password, submit button, 
responsive layout"
Tokens: 110

Savings: 69%
Key: Batch related requirements into one request
```

### Law 4: Model Mismatch Wastes Tokens

```
Using Opus for simple color change:
- Input tokens: 50
- Output tokens: 150-200
- Total: 200-250 tokens

Using Flash for same task:
- Input tokens: 50
- Output tokens: 20-30
- Total: 70-80 tokens

Waste: 130-180 tokens (62%)
Key: Pick the right model for the task complexity
```

### Law 5: Selection Before Editing Saves 70-90%

```
❌ WITHOUT SELECTION:
"Find the button component in my code and change the color to blue"
Tokens: 200-300 (Claude scans entire codebase)

✅ WITH SELECTION:
[Select button code]
"Change to --color-primary"
Tokens: 40-50 (Claude focuses on selection)

Savings: 80-90%
Key: Always select code before asking for edits
```

### Law 6: Data Structure Clarity Reduces Iterations

```
UNCLEAR: "Show user data"
→ Requires clarification: Which fields? How many rows? Format?
→ Multiple back-and-forths: 400-500 tokens

CLEAR: "Table with 30 rows, columns: name, email, role, status. 
Status badges: Active (green), Inactive (gray), Pending (yellow)"
→ Single response: 110-130 tokens

Savings: 70%
Key: Specify data structure precisely upfront
```

### Law 7: Constraint Clarity Reduces Revisions

```
UNCLEAR: "Make it responsive"
→ Requires clarification: Breakpoints? Behavior? Stacking?
→ Multiple revision rounds: 600+ tokens

CLEAR: "Grid: 4 columns desktop, 2 tablet, 1 mobile. Sidebar collapses 
at 768px breakpoint. Header stays fixed."
→ Single response: 120 tokens

Savings: 80%
Key: Clear constraints = fewer revisions
```

---

## Real Token Budgets: Project Level

### Project Type 1: Simple Landing Page

```
Components needed:
- Hero section with CTA
- Features grid (4 features)
- Testimonials section
- Footer
- Navigation header

Budget breakdown:
- Hero: 70 tokens
- Features: 80 tokens
- Testimonials: 75 tokens
- Footer + Nav: 65 tokens

Total: ~290 tokens
Real-world comparison: 800-1,200 tokens (non-Arvo)
Savings: 75%
Development time: 1.5-2 hours
```

### Project Type 2: Admin Dashboard

```
Components needed:
- Page layout (header + sidebar)
- 4 KPI metric cards
- Data table (30 rows)
- 2 charts
- Filter controls
- Modal dialogs

Budget breakdown:
- Layout: 100 tokens
- KPIs: 80 tokens
- Table: 110 tokens
- Charts: 120 tokens
- Filters + Modals: 90 tokens

Total: ~500 tokens
Real-world comparison: 2,500-3,500 tokens (non-Arvo)
Savings: 82%
Development time: 3-4 hours
```

### Project Type 3: E-Commerce Product Page

```
Components needed:
- Product image gallery
- Product details
- Specifications table
- Pricing and options
- Add to cart form
- Related products (grid)
- Reviews section
- Navigation

Budget breakdown:
- Gallery: 100 tokens
- Details: 85 tokens
- Specs: 80 tokens
- Pricing + Cart: 95 tokens
- Related: 90 tokens
- Reviews: 85 tokens
- Nav: 70 tokens

Total: ~605 tokens
Real-world comparison: 2,000-3,000 tokens (non-Arvo)
Savings: 70-80%
Development time: 4-5 hours
```

### Project Type 4: Full Application (Small)

```
Components: 15-20 major features
- User auth (login, signup, forgot password)
- Dashboard with 8-10 sections
- Data management (CRUD interfaces)
- Settings page
- User profile
- Navigation/layout

Realistic budget: 3,000-4,000 tokens
Non-Arvo approach: 12,000-18,000 tokens
Savings: 75%
Development time: 40-60 hours
Feature count: 50+ individual UI components
Cost per component: 60-80 tokens (Arvo) vs 240-360 (non-Arvo)
```

---

## Optimization Techniques at Scale

### Technique 1: Code Selection Strategy

**Scenario**: Need to update 5 components in existing page

```
❌ INEFFICIENT:
Request 1: "Update button colors" → 200 tokens
Request 2: "Update form spacing" → 180 tokens
Request 3: "Update card styling" → 190 tokens
Request 4: "Update table rows" → 200 tokens
Request 5: "Update modal sizing" → 210 tokens
Total: 980 tokens

✅ EFFICIENT (with selection):
Select each component, one request per component
Request 1: [Select button] "Change color" → 50 tokens
Request 2: [Select form] "Update spacing" → 55 tokens
Request 3: [Select card] "Update styling" → 50 tokens
Request 4: [Select table] "Update rows" → 50 tokens
Request 5: [Select modal] "Update sizing" → 50 tokens
Total: 255 tokens

Savings: 74% (725 tokens saved)
Time: Same (still 5 requests, but vastly faster)
```

### Technique 2: Batch Optimization

**Scenario**: Need to make 5 related changes to one component

```
❌ INEFFICIENT (5 separate requests):
"Change button color" → 60 tokens
"Add icon to button" → 70 tokens
"Make button larger" → 65 tokens
"Add loading state" → 75 tokens
"Add hover animation" → 70 tokens
Total: 340 tokens

✅ EFFICIENT (single batched request):
[Select button component]
"Update to: --color-primary, add icon=o9con-plus, size=lg, 
include loading spinner state, add smooth hover animation"
Total: 85 tokens

Savings: 75% (255 tokens saved)
Time: 5x faster (1 request vs 5)
```

### Technique 3: Composition Optimization

**Scenario**: Building data dashboard with 8 different data tables

```
❌ INEFFICIENT (build each table from scratch):
Table 1: "Create user table with columns..." → 120 tokens
Table 2: "Create product table with columns..." → 120 tokens
Table 3: "Create order table with columns..." → 120 tokens
... (5 more tables)
Total: 960 tokens

✅ EFFICIENT (build reusable table component):
Step 1: "Create reusable Arvo DataTable component with sortable, 
filterable, paginated behavior" → 140 tokens

Step 2: Use the component 8 times with different data
"Create [table name] using DataTable component with columns: [list]"
Each: 50-60 tokens × 8 = 440 tokens

Total: 580 tokens

Savings: 40% (380 tokens saved)
Benefit: Future tables cost 60 tokens each (75% savings vs building new)
```

---

## Advanced Prompt Patterns

### Pattern 1: Dependency Injection

**Problem**: Components depend on other components, but you need flexibility

```
✅ EFFICIENT APPROACH:
"Create [ComponentA] that accepts [ComponentB] as a prop. 
Use Arvo default for [ComponentB] if not provided."

Benefits:
- Flexible composition
- Reusable across projects
- Fewer custom versions
- Easier to maintain
```

### Pattern 2: Progressive Enhancement

**Problem**: Need basic version now, advanced features later

```
✅ EFFICIENT APPROACH:
"Create basic [Feature] with [core requirements].
Structure for future enhancements: [where advanced features would go]"

Benefits:
- Launch faster (fewer tokens now)
- Growth path clear
- Later additions cost less (know exactly where to add)
- Team alignment on design
```

### Pattern 3: Configuration over Customization

**Problem**: Multiple variations of similar component

```
❌ INEFFICIENT:
Create ButtonPrimary (100 tokens)
Create ButtonSecondary (100 tokens)
Create ButtonGhost (100 tokens)
Create ButtonError (100 tokens)
Total: 400 tokens

✅ EFFICIENT (using Arvo):
"Use Arvo Button component, it accepts variant prop"
"Arvo Button with variant='primary'"
"Arvo Button with variant='secondary'"
"Arvo Button with variant='ghost'"
"Arvo Button with variant='error'"
Total: 60-80 tokens

Savings: 80%
```

---

## Measurement and Continuous Improvement

### Metric 1: Tokens per Component

```
Track: Average tokens spent on each component

Goal: < 100 tokens per component
Benchmark: 
- Week 1: 150-200 (learning phase)
- Week 2: 100-130 (applying patterns)
- Week 3: 80-100 (optimization phase)
- Week 4: 60-80 (mastery phase)

Improvement signal:
If going up: Components too complex, break them down
If going down: Successfully optimizing
If stable: Consistent approach (good)

Action: When average exceeds 120, review last 5 requests for inefficiencies
```

### Metric 2: Token Efficiency Ratio

```
Calculation: 
  Non-Arvo Tokens / Arvo Tokens = Efficiency Ratio

Target: 3:1 to 5:1 ratio
- 3:1 = 66% savings
- 4:1 = 75% savings (target)
- 5:1 = 80% savings

Example: 
- Traditional approach: 400 tokens
- Arvo approach: 100 tokens
- Ratio: 4:1 = 75% savings

Track weekly and trend upward
```

### Metric 3: Revision Rounds per Feature

```
Track: How many times you ask for changes per feature

Goal: 1-1.5 revisions average
- 0 revisions: Perfect spec (rare)
- 1 revision: Good spec (target)
- 2 revisions: Need more clarity
- 3+ revisions: Major specification issues

Cost per revision: 50-100 tokens
Solution: Clearer requirements reduce revisions

Action: If revisions increasing, review prompt specification process
```

### Metric 4: Development Velocity

```
Track: Components/features completed per hour

Benchmark:
- Without Arvo: 1-2 components per hour
- With Arvo (week 1): 2-3 components per hour
- With Arvo (week 2+): 5-8 components per hour
- With Arvo + optimization: 10-15 components per hour

Improvement is exponential (experience curve effect)

Target: Double your velocity within 3 weeks
```

### Dashboard to Track

Create a simple tracking spreadsheet:

```
Date      | Feature           | Tokens | Revisions | Time | Notes
----------|------------------|--------|-----------|------|--------
2026-05-10| Product Card     | 95     | 0         | 15m  | Nailed it
2026-05-10| Data Table       | 145    | 1         | 25m  | Good pattern
2026-05-11| Form Page        | 110    | 0         | 18m  | Efficient
2026-05-11| Dashboard        | 280    | 2         | 45m  | Complex, multiple fixes
2026-05-12| Modal Dialog     | 85     | 0         | 12m  | Simple, fast

Trends:
- Average tokens: 143 → Target: < 100
- Average revisions: 0.6 → Target: < 1
- Average time: 23m → Target: < 20m
```

---

## Common Optimization Mistakes

### Mistake 1: Over-Optimization (Analysis Paralysis)

```
❌ WRONG:
"Let me think about the absolute best way to phrase this prompt..."
[30 minutes later, still thinking]

✅ RIGHT:
Write prompt using the patterns in this guide (2 minutes)
Build it (5 minutes)
Optimize based on actual results (not theory)

Key: Done > Perfect
Optimize based on measurements, not speculation
```

### Mistake 2: Premature Micro-Optimization

```
❌ WRONG:
Spending 20 tokens to save 5 tokens

✅ RIGHT:
Focus on 60-80% token savings first (big wins)
Then optimize remaining 20-40% later

Pareto principle: 80% of savings from 20% of efforts
Focus on high-impact first
```

### Mistake 3: Wrong Model for the Job

```
❌ WRONG:
"I'll always use Sonnet because it's safest"
Result: Using 3x tokens on simple tasks

✅ RIGHT:
Use the decision matrix (earlier in this guide)
Flash for trivial tasks (saves 70% tokens)
Opus only when needed (saves time, not tokens)
Gemini 3.1 Pro for integrations

Savings: 30-40% across entire project
```

### Mistake 4: Ignoring Data Structure

```
❌ WRONG:
"Create a table with user data"
[Claude asks: What columns? How many rows? What format?]
[Back-and-forth for 4 exchanges]
Total: 500 tokens

✅ RIGHT:
"Create table: 30 rows, columns: name, email, role, status, actions"
[Single response]
Total: 110 tokens

Savings: 78%
```

---

## The Optimization Workflow

Use this workflow for every significant feature:

### Step 1: Requirements Definition (5 minutes)

```
Ask yourself:
- What is this component/feature?
- Exactly what data does it show?
- What interactions does it support?
- What are the constraints (responsive, accessibility)?
- Does Arvo have patterns for this?

Write down specific answers (not vague thoughts)
```

### Step 2: Pattern Selection (2 minutes)

```
Which pattern from 02_ARVO_MASTERY_GUIDE.md matches?
- KPI/Dashboard? → Use Report Tile pattern
- Data management? → Use CRUD pattern
- Form? → Use Form Page pattern
- Map/Visualization? → Use Geo pattern

Pick the closest match
```

### Step 3: Model Selection (1 minute)

```
Use decision matrix:
- Simple UI? → Flash or Sonnet
- Complex logic? → Opus
- Integration? → Gemini 3.1 Pro
- Unsure? → Sonnet

Default: Sonnet (unless clearly one of the others)
```

### Step 4: Prompt Writing (5 minutes)

```
Use template:
1. Context: "Use Arvo Design System and theme.css"
2. Components: Specific list with details
3. Arvo: Which Arvo components used
4. Styling: Token references only
5. Data: Specific quantities and structure

Write with specificity (no vague language)
```

### Step 5: Build and Measure (10-20 minutes)

```
1. Submit prompt with chosen model
2. Track tokens used (see measurement section)
3. Test result for accuracy
4. If perfect: Note the approach for next time
5. If not: Plan minimal revision (selection-based)
```

### Step 6: Continuous Improvement (Ongoing)

```
Track metric: Average tokens decreasing?
- No → Review specification process
- Yes → You're optimizing successfully

Share learnings with team
Refine your patterns monthly
```

---

## Your Optimization Challenge

### Week 1 Goal: Establish Baseline

```
Build 10 features using Figma Make + Arvo

Track:
- Total tokens used
- Features completed
- Development time
- Revision rounds

Calculate average:
- Tokens per feature
- Features per hour
- Revisions needed

This is your baseline
```

### Week 2 Goal: Optimize 20%

```
Using techniques from this guide:
- Better requirement specifications
- Model selection optimization
- Code selection before editing
- Batching related changes

Target: Reduce average tokens by 20%
- Week 1 average: 150 tokens
- Week 2 target: 120 tokens

Build same 10 features (or similar) with optimization
Compare results
```

### Week 3 Goal: Optimize 50%

```
Using all advanced techniques:
- Perfect prompt structure
- Optimal model selection
- Pattern reuse
- Careful requirements

Target: Reduce average tokens by 50%
- Week 1 average: 150 tokens
- Week 3 target: 75 tokens

Build 10 new features with full optimization
Compare to week 1
```

### Week 4 Goal: Optimization Mastery

```
You now have:
- Personal optimization playbook (what works for you)
- Efficiency metrics and targets
- Pattern library
- Prompt templates
- Measurement dashboard

You're a Figma Make optimization expert

Share your playbook with team
Teach others your techniques
Establish team standards
```

---

## Key Takeaways

```
┌────────────────────────────────────────────────┐
│                                                │
│  OPTIMIZATION PRINCIPLES                       │
│                                                │
│  1. TOKEN MATH                                 │
│     Every token costs money. Optimize.         │
│                                                │
│  2. MODEL MATTERS                              │
│     Right model for task = huge savings        │
│                                                │
│  3. SPECIFICATION CLARITY                      │
│     More specific = fewer revisions            │
│                                                │
│  4. PATTERN REUSE                              │
│     Proven patterns = faster, cheaper          │
│                                                │
│  5. CONTINUOUS MEASUREMENT                     │
│     What gets measured gets improved           │
│                                                │
│  6. SELECTION FIRST                            │
│     Select code, then edit = 70-90% savings    │
│                                                │
│  Target: 75% token savings + 3x faster        │
│                                                │
└────────────────────────────────────────────────┘
```

---

## Your Next Steps

### This Week:
1. ✅ Read this guide completely
2. ✅ Establish your baseline metrics
3. ✅ Build 10 features tracking tokens
4. ✅ Identify your personal optimization gaps

### Next Week:
1. ✅ Apply one optimization technique per day
2. ✅ Measure impact each day
3. ✅ Double your development velocity
4. ✅ Share results with team

### Ongoing:
1. ✅ Maintain measurement dashboard
2. ✅ Review metrics monthly
3. ✅ Refine your playbook
4. ✅ Help team members optimize

---

## Document Info

- **Type**: Advanced Guide - Phase 3
- **Audience**: All Figma Make users (but focus on advanced optimization)
- **Read Time**: 40 minutes (with examples)
- **Level**: Advanced
- **Prerequisites**: 01_GETTING_STARTED + 02_ARVO_MASTERY
- **Next Document**: 04_ENTERPRISE_WORKFLOWS.md

---

**You're now equipped to optimize like an expert. Time to scale with your team.** 🚀

---

**Last Updated**: May 2026
**Status**: Production Ready
**Version**: 1.0
