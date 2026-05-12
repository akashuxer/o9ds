# Enterprise Workflows & Team Implementation
## Scaling Figma Make Across Your Organization

---

## Welcome to Enterprise Scale

You've mastered individual optimization. Now it's time to scale Figma Make across your team, establish team standards, and build enterprise workflows that work at production scale.

This guide covers:
- ✅ Team onboarding strategies
- ✅ Design system standardization
- ✅ Code review and quality gates
- ✅ Production deployment patterns
- ✅ Cost tracking and ROI measurement
- ✅ Real team structures that work

**Expected time**: 35 minutes
**Skill level**: Advanced / Leadership
**Prerequisite**: All previous guides completed

---

## Why Enterprise Workflows Matter

```
Individual User:
- Saves 60-75% tokens
- Builds 5-10 components/day
- Perfect design consistency
- Low error rate

Team (10 people) Without Workflows:
- Inconsistent patterns (each person different)
- Conflicting approaches
- Design system misuse (Arvo used incorrectly)
- Code quality varies wildly
- 50% slower than parallel individuals
- High debugging/review overhead

Team (10 people) With Workflows:
- Unified approach across team
- Design system perfectly applied
- Consistent code quality
- Faster development (50% faster than sum)
- Lower review overhead
- Predictable shipping schedule
- Clear escalation paths
```

**Result**: Workflows can 2-3x your team's effectiveness

---

## Team Maturity Model

Understand where your team is in the adoption journey:

### Level 1: Isolated Users (Weeks 1-2)

```
Status: Individual users learning
- 3-5 people trying Figma Make
- No shared standards
- Ad hoc prompting
- Variable quality

Symptoms:
❌ Different prompt structures
❌ Inconsistent Arvo usage
❌ Individual optimization tricks
❌ No shared knowledge

Actions:
✅ Assign one "Figma Make champion"
✅ Create shared prompt templates (in docs)
✅ Weekly 15-min sync on learnings
✅ Build "anti-patterns" list (what NOT to do)
```

### Level 2: Standardized Basics (Weeks 3-4)

```
Status: Team using common patterns
- 5-10 people trained
- Basic standards established
- Common prompts documented
- Code review process started

Symptoms:
✅ Consistent prompt structure
✅ Team uses Arvo components
❌ Some design system misuse still
❌ Code review catching mistakes

Actions:
✅ Design system training session
✅ "Golden prompts" library created
✅ Code quality checklist
✅ Shared Figma Make template file
```

### Level 3: Optimized Operations (Weeks 5-8)

```
Status: Team operating efficiently
- 10-15 people proficient
- Clear standards enforced
- Quality gates automated
- Cost tracking in place

Symptoms:
✅ 75% token savings across team
✅ Consistent code quality
✅ Rare design system errors
✅ Predictable velocity

Actions:
✅ Monthly optimization review
✅ Rotating "code review lead" role
✅ ROI metrics dashboard
✅ Team rotations/mentoring
```

### Level 4: Strategic Scale (Weeks 9+)

```
Status: Figma Make is core to operations
- 20+ people trained
- Embedded in development workflow
- Significant cost savings
- Measurable business impact

Symptoms:
✅ 80-85% token savings consistent
✅ 2x shipping velocity
✅ Zero design system bugs
✅ Team innovation on patterns

Actions:
✅ Enterprise governance established
✅ Tool customization/scripting
✅ Executive reporting on ROI
✅ Cross-team standards
```

---

## Building Your Team's Standards

### The "Golden Prompts" Library

Create a shared document with proven prompts your team reuses.

#### Structure

```
Golden Prompts Library
(Shared document: Confluence, Notion, GitHub Wiki)

Organization:
├─ KPI/Metrics Prompts
│   ├─ KPI Dashboard (template)
│   ├─ Single Metric Card (template)
│   └─ Metrics Comparison (template)
│
├─ Data Table Prompts
│   ├─ User Management Table (template)
│   ├─ Inventory Grid (template)
│   └─ Order History Table (template)
│
├─ Form Prompts
│   ├─ User Signup Form (template)
│   ├─ Contact Form (template)
│   └─ Settings Form (template)
│
├─ Dashboard Prompts
│   ├─ Admin Dashboard (template)
│   ├─ Analytics Dashboard (template)
│   └─ Personal Dashboard (template)
│
└─ Advanced Patterns
    ├─ Map Visualization (template)
    ├─ Multi-Chart Analytics (template)
    └─ Complex Workflows (template)

Each template includes:
- Description of use case
- When to use (and when NOT to)
- Complete prompt text (copy-paste ready)
- Expected tokens
- Expected output
- Common modifications
- Team member who verified it
- Last updated date
```

#### Example Template Entry

```
=== KPI Dashboard Template ===

Use Case: Demand planning dashboard showing 4-6 key metrics

When to Use:
✅ Executive dashboards
✅ Operations monitoring
✅ Analytics tools
✅ Management reporting

When NOT to Use:
❌ Very simple single metrics
❌ Real-time streaming data (use different approach)
❌ Complex analysis dashboards (use Analytics template)

Template Prompt:
---
Use Arvo Design System components and follow o9PageLayout.md.

Create [dashboard name] KPI section with [N] report tiles:

[For each KPI:]
- [KPI Name]: value=[X], trend=[+/-]%, icon=o9con-[icon]

Arvo components per KPI:
- Arvo Report Tile
- Arvo Text variant='heading' for value
- Arvo Badge for trend
- Arvo Icon for visual

Layout: Grid [N] columns desktop, [N] tablet, [N] mobile
Spacing: --spacing-lg between tiles
Colors: Use Arvo tokens, positive=--color-success, negative=--color-error

Responsive breakpoints: 1200px (desktop), 768px (tablet), 480px (mobile)
---

Expected Tokens: 110-140
Expected Development Time: 20-25 minutes
Team Velocity: 85% token savings

Verified By: @john.doe
Last Updated: 2026-05-10
Variations: See variations.md
```

#### Managing the Library

```
Ownership: Rotating "Library Maintainer" role (1 person, 1 week)

Weekly Process:
1. Monday: Review new prompts added
2. Tuesday-Thursday: Team tests new prompts
3. Thursday: Update library based on feedback
4. Friday: Share highlights in team sync

Quality Gate:
- ✅ Prompt tested by 2+ team members
- ✅ Tokens documented with actual results
- ✅ Works on first try (no revisions needed)
- ✅ Covers the use case completely

New Prompt Submission:
1. Test extensively (batch with similar requests)
2. Document results (tokens, time, quality)
3. Create GitHub PR or doc update
4. Get 1 review approval
5. Merge to main library
```

---

## Code Review Process for Figma Make

### Review Checklist

Create a shared code review checklist to ensure quality:

```
☐ DESIGN SYSTEM COMPLIANCE
  ☐ All UI components use Arvo components (not custom)
  ☐ No hardcoded colors (all use --color-* tokens)
  ☐ No hardcoded spacing (all use --spacing-* tokens)
  ☐ No hardcoded border radius (all use --radius-* tokens)
  ☐ No direct CSS overrides of Arvo components
  ☐ If O9 design system: Uses o9con icons, not lucide
  ☐ If O9 design system: References guideline files (Grid.md, etc.)

☐ COMPONENT STRUCTURE
  ☐ Components are reusable (not single-use)
  ☐ Props are used correctly (variant names, sizes, states)
  ☐ Component composition is logical
  ☐ No unnecessary nesting

☐ DATA HANDLING
  ☐ Data structure matches requirements
  ☐ Handles empty state
  ☐ Handles loading state
  ☐ Handles error state
  ☐ Mock data is realistic and sufficient (25+ rows for tables)

☐ RESPONSIVE DESIGN
  ☐ Tested on mobile (375px)
  ☐ Tested on tablet (768px)
  ☐ Tested on desktop (1200px+)
  ☐ Layout adjusts appropriately per breakpoint
  ☐ Text is readable on all sizes
  ☐ Touch targets are 44px+ on mobile

☐ ACCESSIBILITY
  ☐ All interactive elements are keyboard accessible
  ☐ Focus states are visible
  ☐ Color not only indicator of state
  ☐ Images have alt text
  ☐ Form labels associated with inputs

☐ PERFORMANCE
  ☐ No inline styles (use design tokens)
  ☐ No unnecessary re-renders
  ☐ Images optimized or use placeholders
  ☐ Component is performant (< 3s render)

☐ CODE QUALITY
  ☐ TypeScript types defined for props
  ☐ No console errors/warnings
  ☐ Follows naming conventions
  ☐ Comments explain complex logic
  ☐ Functions are under 50 lines

☐ TOKEN EFFICIENCY
  ☐ Component tokens: < 100 per component
  ☐ Feature tokens: < 400 per feature
  ☐ Revisions needed: < 2
  ☐ Prompt is specific and clear

☐ TESTING
  ☐ Works on first render
  ☐ No broken states
  ☐ Data displays correctly
  ☐ No console errors

Failed Review? Don't approve. Create specific feedback:
"Line 45: This is using hardcoded padding (24px). 
Use --spacing-lg instead for consistency with design system.
See theme.css for available tokens."

Quick Approvals? Use emoji:
✅ LGTM (Looks Good To Merge)
🎉 Perfect! (Exceeds expectations)
```

### Review Workflow

```
Developer Flow:
1. Build component in Figma Make
2. Create pull request with checklist in description
3. Tag reviewer (@reviewer)
4. Wait for review

Reviewer Flow:
1. Check out branch
2. Run through checklist (~5 min)
3. Leave specific feedback OR
4. Approve with checkmark

Expected time: 5-10 minutes per review
Approval rate: 70% first review, 100% second
```

---

## Team Roles and Responsibilities

### Role 1: Figma Make Champion (Team Lead)

**Responsibilities**:
- ✅ Owns team Figma Make strategy
- ✅ Trains new team members (1:1 sessions)
- ✅ Maintains "Golden Prompts" library
- ✅ Establishes code review standards
- ✅ Tracks team metrics and ROI
- ✅ Represents team in executive meetings

**Skills needed**:
- Figma Make mastery (all 4 guides)
- Team leadership
- Design system knowledge
- Communication

**Time commitment**: 20-30% of their time

**Success metrics**:
- Team 75%+ token savings
- <80 avg tokens per component
- 95%+ code review pass rate

---

### Role 2: Code Review Lead (Rotating Weekly)

**Responsibilities**:
- ✅ Reviews PRs using checklist
- ✅ Provides specific feedback
- ✅ Approves or requests changes
- ✅ Documents common issues found
- ✅ Updates checklist if needed

**Skills needed**:
- Figma Make proficiency
- Design system knowledge
- Attention to detail
- Good communication

**Time commitment**: 5-10 hours per week

**Success metrics**:
- Reviews completed within 24 hours
- Feedback is specific and helpful
- Common issues documented

---

### Role 3: Library Maintainer (Rotating Weekly)

**Responsibilities**:
- ✅ Adds new Golden Prompts
- ✅ Tests community submissions
- ✅ Updates documentation
- ✅ Gathers weekly feedback
- ✅ Publishes weekly summary

**Skills needed**:
- Figma Make proficiency
- Documentation skills
- Organization

**Time commitment**: 3-5 hours per week

**Success metrics**:
- Library grows 2-3 prompts/week
- Each prompt verified by 2 people
- 95%+ success rate on library prompts

---

### Role 4: Optimization Officer (Quarterly)

**Responsibilities**:
- ✅ Analyzes team metrics
- ✅ Identifies optimization opportunities
- ✅ Runs quarterly "optimization workshops"
- ✅ Reports ROI to leadership
- ✅ Benchmarks against external teams (if possible)

**Skills needed**:
- Advanced optimization knowledge
- Data analysis
- Presentation skills

**Time commitment**: 5-10 hours per quarter

**Success metrics**:
- Team tokens trending down 5-10%/month
- Cost per feature decreasing
- Development velocity increasing

---

## Onboarding New Team Members

### Week 1: Foundations

**Day 1-2**: Setup & Basics
```
Duration: 4 hours
1. Install Figma Make, verify setup (15 min)
2. Read: 01_GETTING_STARTED_FIGMA_MAKE.md (30 min)
3. Champion walks through: Arvo Design System (30 min)
4. First build: Product card component (45 min)
5. Review with Champion, get feedback (15 min)

Outcome: Build first component with guidance
```

**Day 3**: Hands-On Practice
```
Duration: 4 hours
1. Build 3 components from Golden Prompts library (2 hours)
2. Code review practice (1 hour)
3. Questions and troubleshooting (1 hour)

Outcome: Comfortable with basic patterns
```

**Day 4-5**: Arvo Mastery
```
Duration: 4 hours each
Day 4:
1. Read: 02_ARVO_MASTERY_GUIDE.md (60 min)
2. Build 2 complex components (KPI, User table) (90 min)
3. Review + feedback (30 min)

Day 5:
1. Build complete feature (dashboard) (120 min)
2. Final code review with Champion (30 min)
3. Questions and wrap-up (30 min)

Outcome: Proficient in Arvo composition
```

**Week 1 Outcome**:
- ✅ Figma Make installed and working
- ✅ Understanding of Arvo Design System
- ✅ 5+ components built
- ✅ Can handle basic patterns
- ✅ Ready for team workflows

---

### Week 2-3: Independence

**Daily**: Build real features
```
1. Pick feature from backlog
2. Use Golden Prompts as template
3. Get code review approval
4. Deploy to development
5. Iterate on feedback
```

**Goals**:
- ✅ 10-15 components total
- ✅ Average tokens: 100-120 per component
- ✅ 1-2 revisions per feature
- ✅ All components pass code review

**Checkpoint** (End of Week 2):
- Champion reviews progress
- Provides 1:1 optimization coaching
- Clears to work independently

---

### Week 4: Full Independence

**Expectations**:
- ✅ Building components without guidance
- ✅ Participating in code reviews
- ✅ Following all team standards
- ✅ Contributing to Golden Prompts library

**Milestone**:
- Team member is now productive contributor
- Time to production: 4 weeks
- ROI positive after week 2 (reduced overhead)

---

## Establishing Team Standards

### Standard 1: Prompt Structure

```
All team prompts follow this structure:

┌─────────────────────────────────────────┐
│  TEAM STANDARD PROMPT FORMAT            │
├─────────────────────────────────────────┤
│                                         │
│  1. CONTEXT LINE                        │
│  "Use Arvo Design System, theme.css"   │
│                                         │
│  2. COMPONENT DESCRIPTION               │
│  "Create [Feature] with:                │
│   - [Item 1]                            │
│   - [Item 2]"                           │
│                                         │
│  3. ARVO COMPONENTS                     │
│  "Use Arvo components:                  │
│   - [Component 1] for [purpose]        │
│   - [Component 2] for [purpose]"       │
│                                         │
│  4. STYLING                             │
│  "Spacing: [tokens]                     │
│   Colors: [tokens]                      │
│   Radius: [tokens]"                     │
│                                         │
│  5. DATA                                │
│  "[N] items with fields: [list]"       │
│                                         │
│  6. RESPONSIVE                          │
│  "Grid: [desktop], [tablet], [mobile]" │
│                                         │
│  TOTAL: 100-150 tokens                  │
│                                         │
└─────────────────────────────────────────┘

Why this structure?
- Consistent across team
- Minimum variance in quality
- Easy to review
- Proven to work
```

### Standard 2: Naming Conventions

```
Components:
- UserCard (not: userCard, user_card, usersComponent)
- ProductTable (not: productList, products)
- HeaderNav (not: header, navigationBar)

Props:
- variant="primary" (not: type="main", kind="primary")
- size="lg" (not: scale="large", dimension="l")
- isLoading (not: loading, showLoading)

Files:
- UserCard.tsx (not: UserCard.jsx, user-card.ts)
- useUserData.ts (not: user-hook.ts, fetchUser.ts)

Folders:
- components/cards/ (not: UI, components/user/)
- hooks/ (not: custom-hooks, logic/)
- styles/ (not: css, design-tokens/)
```

### Standard 3: Typescript Types

```
Every component must have types:

✅ CORRECT:
interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  onAddToCart: (id: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  onAddToCart
}) => {
  // Implementation
}

❌ WRONG:
export const ProductCard = ({ id, name, price, image, onAddToCart }) => {
  // No types
}

Why types matter?
- Self-documenting
- Prevents bugs
- Better IDE support
- Team consistency
```

### Standard 4: Error Handling

```
Every component must handle states:

✅ DATA STATES:
- Loading: Show Arvo Spinner
- Empty: Show "No items found" with Arvo Text
- Error: Show error message with Arvo Alert
- Success: Show data with proper state

✅ FORM STATES:
- Pristine: Show default form
- Filled: Show complete form
- Invalid: Show validation errors below fields
- Submitting: Disable submit, show spinner
- Submitted: Show success message

✅ ACCESSIBILITY:
- aria-label on interactive elements
- aria-describedby for error messages
- role="alert" for error states
- tabindex management
```

### Standard 5: Testing

```
Unit tests for:
- Component renders with default props
- Component renders with all prop variations
- Click handlers are called correctly
- Error states display correctly
- Data updates correctly

Integration tests for:
- Component works with real data
- Works with Arvo components
- Responsive layout works correctly
- Keyboard navigation works

Test coverage target: 80%+

Example test:
describe('ProductCard', () => {
  it('renders with correct data', () => {
    const props = { id: '1', name: 'Product', price: 99, image: 'url' };
    render(<ProductCard {...props} />);
    expect(screen.getByText('Product')).toBeInTheDocument();
  });
});
```

---

## Cost Tracking and ROI

### Metric 1: Token Efficiency

```
Track weekly:

Week 1: 
- Total tokens spent: 4,500
- Components built: 30
- Avg tokens/component: 150
- Baseline established

Week 2:
- Total tokens spent: 3,200
- Components built: 32
- Avg tokens/component: 100
- Savings: 33%

Week 3:
- Total tokens spent: 2,800
- Components built: 35
- Avg tokens/component: 80
- Savings: 47%

Week 4:
- Total tokens spent: 2,600
- Components built: 40
- Avg tokens/component: 65
- Savings: 57%

Trend: Avg tokens per component trending down 15% per week
Target: Stabilize at 60-80 tokens/component
```

### Metric 2: Development Velocity

```
Track: Components/features built per team member per week

Baseline (without Figma Make): 10-15 components/week
Week 1 with Figma Make: 8-12 (learning overhead)
Week 2: 15-20 (patterns emerging)
Week 3: 25-35 (optimization working)
Week 4+: 35-50 (mastery achieved)

Your team of 5:
- Traditional approach: 50-75 components/week
- Figma Make week 1: 40-60 (learning)
- Figma Make week 4: 175-250 (3x faster!)
```

### Metric 3: Cost per Component

```
Assumptions:
- Token cost: $0.03 per token (Sonnet)
- Developer time: $100/hour
- Build time average: 30 minutes

Traditional Approach:
- Tokens per component: 400
- Token cost: $12
- Developer time: $50
- Total: $62/component
- Team 5 people: 60 components/week = $3,720/week

Figma Make Approach:
- Tokens per component: 80 (optimized)
- Token cost: $2.40
- Developer time: 15 minutes = $25
- Total: $27.40/component
- Team 5 people: 200 components/week = $5,480/week

But shipping 3.3x more features!

Effective cost per deployed feature: $1.47 (vs $62)
Savings: 97.6%
```

### ROI Dashboard (Executive Summary)

```
Dashboard for leadership (monthly):

┌─────────────────────────────────────────┐
│  FIGMA MAKE ROI DASHBOARD               │
├─────────────────────────────────────────┤
│                                         │
│  Components Built This Month: 640      │
│  Previous Approach: 250                 │
│  Productivity Gain: 156%                │
│                                         │
│  Average Tokens/Component: 78           │
│  Previous Approach: 350                 │
│  Efficiency Gain: 78%                   │
│                                         │
│  Development Time: 15 min/component     │
│  Previous Approach: 45 min              │
│  Time Savings: 67%                      │
│                                         │
│  Token Cost This Month: $1,536          │
│  Previous Approach: $44,800             │
│  Cost Savings: $43,264                  │
│                                         │
│  Development Cost This Month: $32,000   │
│  Previous Approach: $96,000             │
│  Savings: $64,000                       │
│                                         │
│  TOTAL MONTHLY SAVINGS: $107,264        │
│                                         │
│  Features Shipped: 12 (vs 4 previously) │
│  Business Impact: 3x faster shipping    │
│                                         │
└─────────────────────────────────────────┘
```

---

## Common Team Challenges and Solutions

### Challenge 1: Inconsistent Arvo Usage

**Problem**:
```
Some team members building custom components instead of using Arvo
Result: 75% token waste, design inconsistency
```

**Solution**:
```
1. Code review gate: REJECT anything not using Arvo
2. Training: "Arvo First" workshop (1 hour)
3. Reference: Update Golden Prompts with Arvo-only examples
4. Check: Add to code review checklist

Enforce with: "All UI must use Arvo components"
Result: 100% compliance within week
```

### Challenge 2: Slow Code Review

**Problem**:
```
Code review taking 2-3 days per PR
Blocking development
```

**Solution**:
```
1. Automate checklist (GitHub Actions can partially check)
2. Rotating review lead (distribute load)
3. 24-hour SLA (reviews within business day)
4. Weekly review metrics (track and improve)

Template:
"New PR reviews prioritized
Reviews should take <10 minutes with checklist
24-hour max before requiring response"

Result: <24 hour reviews, faster development
```

### Challenge 3: Prompt Quality Variation

**Problem**:
```
Different team members writing very different quality prompts
Some need 2+ revisions, some work first time
```

**Solution**:
```
1. Require prompt template use (non-negotiable)
2. Champion reviews first 10 prompts from each new member
3. Golden Prompts library required for common patterns
4. Code review includes prompt quality check

Checklist item:
"☐ Prompt follows team structure
 ☐ Prompt references Golden Prompts or pattern
 ☐ Requirements are specific, not vague"

Result: 95% of prompts work first try
```

### Challenge 4: Model Selection Mistakes

**Problem**:
```
Team members using Opus for simple changes (wasting tokens)
Or using Flash for complex logic (getting poor results)
```

**Solution**:
```
1. Decision matrix laminated and posted (visual reminder)
2. Code review checks model appropriateness
3. Weekly optimization review highlights wrong choices
4. Training: "Model Selection Workshop" (30 min)

Checklist item:
"☐ Model choice appropriate for task complexity
 ☐ If unsure, used Sonnet"

Result: Optimal model selection 90%+ of time
```

### Challenge 5: Design System Violations

**Problem**:
```
Some components using hardcoded colors/spacing
Result: Design inconsistency, maintenance nightmare
```

**Solution**:
```
1. Automated check: Eslint rule for hardcoded values
2. Code review: Reject any hardcoded colors/spacing
3. Reference: Post common theme.css tokens in Slack
4. Testing: Component must pass design system audit

Enforcement:
"Hardcoded values (px, #colors) not permitted
Use theme.css tokens: --spacing-lg, --color-primary, etc."

Result: 100% token-based design system compliance
```

---

## Monthly Rituals for Ongoing Excellence

### Monday: Weekly Standup (30 minutes)

```
Format: Video call, rotating facilitator

Agenda:
1. Token metrics review (5 min)
   - Avg tokens last week
   - Trend (up/down/stable)
   - Outliers (components > 150 tokens analyzed)

2. Code review summary (5 min)
   - PRs completed
   - Most common issues found
   - Checklist update (if needed)

3. Golden Prompts updates (5 min)
   - New prompts added
   - Usage stats
   - Feedback from team

4. Roadblock resolution (10 min)
   - Blockers from last week
   - New blockers this week
   - Champion help offered

5. Optimization spotlight (5 min)
   - One team member's optimization win
   - Share technique with team
```

### Friday: Optimization Review (1 hour)

```
Format: In-person or video, all team members

Agenda:
1. Weekly metrics deep dive (15 min)
   - Token trends
   - Velocity
   - Quality metrics

2. Prompt analysis (20 min)
   - Review 3-4 interesting prompts from week
   - Discuss what worked well
   - What could be optimized

3. Escalations/blockers (15 min)
   - Technical blockers
   - Design system questions
   - Training gaps

4. Next week planning (10 min)
   - Projects for next week
   - Resource allocation
   - Champions for support
```

### Monthly: Full Team Optimization Workshop (2 hours)

```
Format: Full team, in-person preferred

Agenda:
1. Metrics review & trend analysis (30 min)
   - What's working
   - What needs improvement
   - Benchmarks vs previous months

2. Success story sharing (20 min)
   - 2-3 team members share recent wins
   - What optimization technique used
   - Lessons learned

3. Hands-on workshop (45 min)
   - One advanced technique deep dive
   - Practical exercise
   - Peer coaching

4. Library curation (15 min)
   - Review new prompts
   - Vote on additions
   - Update team standards

5. Q&A & closing (10 min)
```

### Quarterly: Strategic Review (Half day)

```
Format: Team + leadership, full day optional

Agenda:
1. ROI and business impact (30 min)
   - Cost savings realized
   - Velocity improvements
   - Business features shipped

2. Design system evolution (30 min)
   - New Arvo patterns available
   - Team standards updates
   - Roadmap for next quarter

3. Team growth & skills (30 min)
   - Training completed
   - New proficiencies gained
   - Career development paths

4. Opportunities & challenges (30 min)
   - What's working exceptionally well
   - Where we're struggling
   - Changes needed

5. Roadmap for next quarter (30 min)
   - Goals for team
   - Stretches to attempt
   - Support needed from leadership
```

---

## Scaling to Multiple Teams

When your organization grows beyond 1 team using Figma Make:

### Hub-and-Spoke Model

```
┌──────────────────────────────────┐
│      ORGANIZATION LEVEL          │
│  ├─ Enterprise Standards         │
│  ├─ Global Golden Prompts        │
│  ├─ Shared Arvo Guidelines       │
│  └─ Cross-team Sync (Monthly)    │
└──────────────────────────────────┘
         ↑         ↑         ↑
    ┌────┴───┐ ┌───┴────┐ ┌─┴───────┐
    │ Team A │ │ Team B │ │ Team C  │
    │(5 ppl) │ │(5 ppl) │ │(3 ppl)  │
    └────────┘ └────────┘ └─────────┘

Each team has:
- Local champion
- Local golden prompts
- Rotating code review
- Weekly optimization sync

Organization level:
- Enterprise standards (required)
- Shared prompt library (optional)
- Quarterly cross-team summit
- Executive dashboard
```

### Governance Model

```
Each team follows base standards:

REQUIRED (non-negotiable):
- ✅ Arvo components for all UI
- ✅ theme.css tokens (no hardcoded values)
- ✅ Code review process
- ✅ TypeScript types
- ✅ Testing requirements

RECOMMENDED (strong guidance):
- ✅ Team naming conventions
- ✅ Prompt templates
- ✅ Model selection guidelines
- ✅ Monthly reviews

OPTIONAL (team flexibility):
- ✅ Specific Golden Prompts
- ✅ Local tooling/automation
- ✅ Team-specific patterns
```

---

## Your Implementation Plan

### Month 1: Single Team Mastery

```
Week 1: Foundation
- You complete all 4 guides
- Select team champion (yourself or delegate)
- Identify 5-person pilot team

Week 2-3: Onboarding
- Train 5-person team on fundamentals
- Each person builds 10+ components
- Champion coaches 1:1

Week 4: Standardization
- Create Golden Prompts library
- Establish code review checklist
- Begin metrics tracking

Outcome: 5-person team shipping 40-50 components/week (vs 12-15)
```

### Month 2: Expansion

```
Week 1-2: New team members
- Onboard 5 more team members
- Cross-mentoring between early and new members
- Expand Golden Prompts library

Week 3-4: Optimization
- Run first monthly workshop
- Analyze metrics, adjust standards
- Expand to new project types

Outcome: 10-person team shipping 80-100 components/week
```

### Month 3: Enterprise Integration

```
Week 1-2: Process integration
- Integrate with CI/CD pipeline
- Add automated design system checks
- Connect to project management

Week 3-4: Scaling for multiple teams
- Document enterprise standards
- Create training program for other teams
- Begin multi-team monthly sync

Outcome: Process becomes standard way of working
```

---

## Key Takeaways

```
┌────────────────────────────────────────┐
│                                        │
│  ENTERPRISE PRINCIPLES                 │
│                                        │
│  1. STANDARDS BEFORE SCALE             │
│     Get one team perfect first         │
│                                        │
│  2. PEER ACCOUNTABILITY                │
│     Code review + metrics = quality    │
│                                        │
│  3. KNOWLEDGE REUSE                    │
│     Golden Prompts library accelerates │
│     growth exponentially               │
│                                        │
│  4. CONTINUOUS IMPROVEMENT             │
│     Monthly workshops keep team sharp  │
│                                        │
│  5. METRICS DRIVE BEHAVIOR             │
│     Track tokens, velocity, quality    │
│     What gets measured gets improved   │
│                                        │
│  6. LEADERSHIP ALIGNMENT               │
│     Executive support enables adoption │
│                                        │
│  Result: Sustainable 3x+ productivity  │
│          at scale across organization  │
│                                        │
└────────────────────────────────────────┘
```

---

## Your Next Actions

### This Week:
1. ✅ Complete this guide
2. ✅ Identify your team champion (or become one)
3. ✅ Create shared folder for Golden Prompts
4. ✅ Schedule first team onboarding session

### This Month:
1. ✅ Onboard 5-10 team members
2. ✅ Build Golden Prompts library (10-15 prompts)
3. ✅ Establish code review process
4. ✅ Start metrics tracking

### This Quarter:
1. ✅ Team shipping 2-3x more features
2. ✅ 75%+ token savings achieved
3. ✅ Expand to additional teams
4. ✅ Establish enterprise standards

### This Year:
1. ✅ Organization-wide adoption
2. ✅ Measurable business impact
3. ✅ Figma Make core to development
4. ✅ Significant cost savings

---

## Document Info

- **Type**: Enterprise Guide - Phase 4
- **Audience**: Team leads, engineering managers, architects
- **Read Time**: 35 minutes
- **Level**: Advanced / Leadership
- **Prerequisites**: All 3 previous guides
- **Next**: Team implementation

---

## The Complete Learning Path

You've now completed the full Figma Make & Arvo mastery journey:

**01_GETTING_STARTED** (Phase 1)
- Foundation concepts
- Your first component
- Basic optimization rules
- Expected: 30-50% token savings

**02_ARVO_MASTERY** (Phase 2)
- Component hierarchy
- 6 proven patterns
- Advanced composition
- Expected: 65-85% token savings

**03_ADVANCED_OPTIMIZATION** (Phase 3)
- Model selection mastery
- Prompt optimization
- Measurement & metrics
- Expected: 75-85% token savings + 3x faster

**04_ENTERPRISE_WORKFLOWS** (Phase 4)
- Team scaling
- Code review processes
- Standards and governance
- Expected: Sustainable adoption at scale

---

**Congratulations. You're now a Figma Make + Arvo Expert.** 🚀

Time to transform your organization.

---

**Last Updated**: May 2026
**Status**: Production Ready
**Version**: 1.0

**Questions or feedback?** Share this guide with your team and iterate based on real-world usage.

**Your success is our success.** Figma Make works. Now let's prove it at your organization.
