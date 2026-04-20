# o9 Design System — Page Structure & Conventions

This document defines the structure to follow for all pages in the design system docs.

---

## Hero (Home Page)

- Large headline + tagline.
- Hero image: scale up on hover (`group-hover:scale-105`), 500ms ease-out.
- Fade-darken gradient from bottom: `linear-gradient(to top, rgba(0,0,0,0.12), transparent)` (light) / `rgba(0,0,0,0.4)` (dark).
- Container: `overflow-hidden`, `#E5E5E5` border (light), `#F2F2F2` bg (light).

---

## Main Body

- No background vertical lines (removed to reduce noise).

---

## Layout

- **Header**: Sticky, full-width. Logo + "Design System" + ALPHA badge, theme toggle, High Contrast.
- **Sidebar**: Fixed left, 256px (`w-64`). Search, nav sections, collapsible groups.
- **Main**: `ml-64`, `max-w-4xl` centered content, `px-8 py-10`.

---

## Page Header Pattern

Use the **PageHeader** layout component:

```jsx
import PageHeader from '../LayoutComponents/PageHeader'

<PageHeader
  title="Page Title"
  description="Optional description text."
  icon={<svg className="h-4 w-4" ...>...</svg>}
>
  <DocTabs ... />  {/* optional: tabs below header */}
</PageHeader>
```

- **Avatar**: 32×32px, `#F2F2F2` bg (light) / `neutral-700` (dark). No hover on headers.
- **Heading**: 30px, bold.
- **Description**: Secondary color, `max-w-2xl`.

---

## Tabs

Pages with tabs (Colors, Illustrations, Button):

```jsx
<div className="mt-6 flex gap-6 border-b dark:border-neutral-700" data-o9ds-tabs>
  {tabs.map((tab) => (
    <button
      data-o9ds-tab-active={activeTab === tab ? '' : undefined}
      className="pb-3 text-sm font-medium border-b-2 ..."
    >
      {tab}
    </button>
  ))}
</div>
```

- Tab bar border: `#E5E5E5` (light).
- Active tab: `#010101` bottom border + text (light); white (dark).

---

## Cards

### Light mode
- **Default white** (`#FFFFFF`): hover → `#F2F2F2` bg + `#010101` border. Use `data-o9ds-card="light-white"`.
- **Default surface** (`#F2F2F2`): hover → `#010101` border only. Use `data-o9ds-card="light"`.

### Dark mode
- Hover → `#FFFFFF` border. Avatar hover → `#FFFFFF` bg, `#010101` icon.

### Borders
- Default: `#E5E5E5` (light). No `#010101` borders in default state.

---

## Code Blocks

Use `CodeBlock` component:

```jsx
import CodeBlock from '../components/CodeBlock'

<CodeBlock code={`...`} label="Optional label" />
```

- Background: `#F2F2F2`, border: `#E5E5E5`.
- Includes clipboard copy button.

---

## Color Palette (Light)

| Token    | Hex       | Usage              |
|----------|-----------|--------------------|
| Primary  | `#010101` | Headings, borders   |
| Secondary| `#303030` | Body, labels        |
| Surface  | `#F2F2F2` | Cards, avatars     |
| Border   | `#E5E5E5` | Dividers, borders  |
| White    | `#FFFFFF`  | Page bg, cards     |

---

## Data Attributes

- `data-o9ds-card` — Card hover behavior (`light` | `light-white` | `dark`).
- `data-o9ds-avatar` — Avatar styling (F2F2F2 default, invert on hover).
- `data-o9ds-avatar-header` — Excludes avatar from hover.
- `data-o9ds-tabs` — Tab bar.
- `data-o9ds-tab-active` — Active tab.
- `data-o9ds-code` — Code block pre.
- `data-o9ds-inline-code` — Inline code.
- `data-o9ds-size-selected` — Illustration size selector.
---

## Layout Components (`src/LayoutComponents/`)

| Component | Use for |
|-----------|---------|
| `DocTable` | Any structured table (props, tokens, keyboard, ARIA) |
| `WhiteBgCard` | Principle cards, callouts — white bg, light border |
| `GrayBgCard` | Principle cards, callouts — gray bg, dark border |
| `DocTabs` | Overview / Usage / API / Accessibility tabs |
| `CodeBlock` | Code snippets with copy |
| `PageWithToc` | Pages with "On This Page" TOC |

**Do not recreate components if they exist in LayoutComponents.**

---

## Principles Cards (Overview)

- On **Overview** (`/overview#principles`), the five principles use `WhiteBgCard` with `unified` in a `sm:grid-cols-2` grid. Copy lives in `src/data/principlesContent.js`.

---

## Components — Development Guidelines

All design system components must be **implemented from scratch**. No third-party UI libraries.

### Constraint
- Do not import or use any third-party UI/component libraries (MUI, Ant Design, Chakra, Radix, etc.).
- Build all components from scratch using only internal design tokens, styles, and architecture.

### Allowed
- Native HTML elements
- Internal design tokens (`index.css`, `tailwind.config.js`)
- Internal utility functions / hooks
- Utility libraries (e.g. classnames, date handling) if approved — **no UI component libraries**

### Goal
- Full control over behavior, accessibility, theming, scalability
- Consistency with o9 Design System

### Development Order
1. **Foundations first** — tokens, spacing, typography, colors
2. **Components second** — using only those tokens, no libraries

---

## Colors Page

- Palette cards: `#F2F2F2` bg, `#E5E5E5` border.
- Color group headers (Plum, Scarlet, etc.): No background (transparent).
