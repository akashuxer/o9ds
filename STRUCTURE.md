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

- Vertical lines: 80px spacing, 1px wide, `rgba(0,0,0,0.04)` (light) / `rgba(255,255,255,0.03)` (dark).
- Applied via `.o9ds-main` class on main element.

---

## Layout

- **Header**: Sticky, full-width. Logo + "Design System" + ALPHA badge, theme toggle, High Contrast.
- **Sidebar**: Fixed left, 256px (`w-64`). Search, nav sections, collapsible groups.
- **Main**: `ml-64`, `max-w-4xl` centered content, `px-8 py-10`.

---

## Page Header Pattern

All content pages use a consistent header:

```jsx
<h1 className="group flex items-center gap-2 text-[30px] font-bold text-o9ds-light-primary dark:text-white [pb-2 if tabs]">
  <span
    className="flex h-8 w-8 items-center justify-center bg-o9ds-light-surface dark:bg-neutral-700"
    data-o9ds-avatar
    data-o9ds-avatar-header
  >
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">...</svg>
  </span>
  Page Title
</h1>
<p className="mt-4 text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl leading-relaxed">
  Description...
</p>
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
- `data-o9ds-principles-btn` — View principles button.

---

## Principles Cards

- Grid: `sm:grid-cols-2` (2 per row).
- White bg, `#E5E5E5` border (light).

---

## Colors Page

- Palette cards: `#F2F2F2` bg, `#E5E5E5` border.
- Color group headers (Plum, Scarlet, etc.): No background (transparent).
