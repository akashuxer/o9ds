# Arvo — Design system guidelines (Figma Make & AI)

**Before you create any new design** — new screens, flows, components, or Figma frames — **read this whole `guideline.md` file first.** It is the shared rule set for tokens, type, interactive states, overlays, and components; skipping it causes drift from Arvo.

**Arvo** is the o9 platform design system. Use this file as **product UI** guidance: **tokens**, **semantics**, and **React components** from **`@arvo/react`** (vanilla **`@arvo/js`** where applicable). Prefer **named API components** over rebuilding primitives.

---

## Rules every generation must follow

* **No ad-hoc visuals for system UI:** map fills, text, icons, strokes, gaps, radii, and border widths to **named tokens** below (SCSS **`$arvo-*`** / CSS **`var(--arvo-*)`**). Values in tables are for **reference**; implementation should still use **token names** so themes and modes stay correct.
* **Typography:** **body baseline 16px** (`$arvo-font-size-16`) — express UI type through **semantic mixins** **`h` / `p` / `l`**, not orphan sizes.
* **Icons:** **o9con** only. Default UI uses **four** sizes: **`$arvo-icon-12`** … **`$arvo-icon-24`** (full icon scale listed below includes legacy **`14`** and **`32`** where specs require them).
* **Corners:** **sharp by default** (`border-radius: 0`); tokenized circle where listed.
* **React:** use **`@arvo/react`**; use **hover / active / focus** semantic color tokens for states — not manual darkening of hex.

---

## Interactive states: hover, active, focus

**Principle:** **Hover**, **active** (pressed / selected), and **focus** (keyboard or programmatic focus ring) each have **semantic tokens** on **`s`** (surface), **`t`** (text), **`i`** (icon), and **`b`** (border). Swap tokens by state; do not Approximate with opacity overlays unless the spec calls for **`$arvo-opacity-*`**.

### Hover

| Prefix | Token pattern (examples) | Use |
|--------|--------------------------|-----|
| **s** | `arvo-color-s-theme-hover-1` … `-4`, `arvo-color-s-hover`, `arvo-color-s-negative-hover` | **Surface** fill on hover — e.g. primary btn (`…-hover-1`), secondary/outline (`…-hover-2`), tabs (`…-hover-3`), menus (`…-hover-4`), scroll thumb (`s-hover`), danger (`s-negative-hover`). |
| **t** | `arvo-color-t-theme-hover`, `arvo-color-t-hover` | **Text** on hover — theme controls / chips / menu rows (`t-theme-hover`); neutral chrome (`t-hover`). |
| **i** | `arvo-color-i-theme-hover`, `arvo-color-i-hover` | **Icon** color — pair with the same role as adjacent text (`i-theme-hover`, `i-hover`). |
| **b** | `arvo-color-b-hover`, `arvo-color-b-theme-hover` | **Border** on hover — inactive tabs (`b-hover`); theme tab stroke (`b-theme-hover`). |

### Active (pressed / selected)

| Prefix | Token pattern (examples) | Use |
|--------|--------------------------|-----|
| **s** | `arvo-color-s-theme-active-1` … `-5`, `arvo-color-s-active`, `arvo-color-s-negative-active` | **Surface** for pressed or held state — check/radio (`…-active-1`), secondary/outline btn (`…-active-2`), secondary tab (`…-active-3`), dropdown (`…-active-4`), **primary pressed** (`…-active-5`), sidebar icon slot (`s-active`), danger pressed (`s-negative-active`). |
| **t** | `arvo-color-t-theme-active`, `arvo-color-t-active`, `arvo-color-t-active-inverse` | **Text** — selected / pressed on controls (`t-theme-active`); neutral active (`t-active`); **on primary fill** (`t-active-inverse`). |
| **i** | `arvo-color-i-theme-active`, `arvo-color-i-active`, `arvo-color-i-active-inverse` | **Icon** — same pairing rules as text. |
| **b** | `arvo-color-b-theme-active`, `arvo-color-b-active-static`, `arvo-color-b-theme-hover-2` | **Border** — tab active emphasis (`b-theme-active`); filter/title bars (`b-active-static`); **selected chips / cards / tabs** (`b-theme-hover-2`). |

### Focus

| Prefix | Token (examples) | Use |
|--------|------------------|-----|
| **b** | `arvo-color-b-theme-focus` | **Theme focus ring** on standard controls (inputs, buttons where spec uses theme outline). |
| **b** | `arvo-color-b-focus-inverse` | **Focus on inverse / theme-filled surfaces** (e.g. primary button) — high-contrast ring; often combined with **`s-theme`** background per component notes. |

**Focus practices:** use **border** semantic tokens for the visible ring; keep **:focus-visible** (not-only-mouse) where components implement it. Do not invent ad-hoc `outline` colors — use **`b-theme-focus`** or **`b-focus-inverse`**. Error fields may use **`arvo-color-b-negative`** on focus/hover per field spec.

---

## Semantic colors: `s`, `t`, `i`, `b` (roles)

All UI colors: **`arvo-color-{s|t|i|b}-…`** (`var(--arvo-color-…)` in CSS).

| Prefix | Role | Apply to |
|--------|------|----------|
| **s** | **Surface** | Backgrounds / fills: base, layers, inputs, buttons, cards, overlays, status. |
| **t** | **Text** | Typography: primary/secondary/tertiary, placeholders, links, theme label text, disabled/readonly, form label/value, status messages. |
| **i** | **Icon** | o9con / glyph color — **mirror `t`** role (e.g. `i-secondary` with `t-secondary`). |
| **b** | **Border** | Dividers, field borders, **hover/active/focus** strokes, theme outlines, semantic error/warning/success outlines. |

**Shadow / overlay:** `arvo-color-s-shadow-static-1`, `arvo-color-s-shadow-static-2`, `arvo-color-s-overlay-static` (with **`$arvo-shadow-blur`** for scrims).

**Disabled (example pairing):** `arvo-color-s-disabled`, `arvo-color-t-disabled`, `arvo-color-i-disabled`, `arvo-color-b-disabled` — use together per component spec.

---

## Spacing tokens (`$arvo-space-*`)

| Token | Value (rem) | Reference (px) |
|-------|-------------|----------------|
| `$arvo-space-1` | 0.0625rem | 1px |
| `$arvo-space-2` | 0.125rem | 2px |
| `$arvo-space-4` | 0.25rem | 4px |
| `$arvo-space-6` | 0.375rem | 6px |
| `$arvo-space-8` | 0.5rem | 8px |
| `$arvo-space-10` | 0.625rem | 10px |
| `$arvo-space-12` | 0.75rem | 12px |
| `$arvo-space-16` | 1rem | 16px |
| `$arvo-space-20` | 1.25rem | 20px |
| `$arvo-space-24` | 1.5rem | 24px |
| `$arvo-space-32` | 2rem | 32px |
| `$arvo-space-40` | 2.5rem | 40px |
| `$arvo-space-48` | 3rem | 48px |
| `$arvo-space-64` | 4rem | 64px |
| `$arvo-space-80` | 5rem | 80px |

Use only these steps for padding, margin, and gap.

---

## Icon size tokens (`$arvo-icon-*`)

| Token | Value (rem) | Reference (px) |
|-------|-------------|----------------|
| `$arvo-icon-12` | 0.75rem | 12px |
| `$arvo-icon-14` | 0.875rem | 14px |
| `$arvo-icon-16` | 1rem | 16px |
| `$arvo-icon-20` | 1.25rem | 20px |
| `$arvo-icon-24` | 1.5rem | 24px |
| `$arvo-icon-32` | 2rem | 32px |

**Figma Make default set:** **`12`, `16`, `20`, `24`** — use **`14`** / **`32`** only when a component spec requires them.

---

## Border & radius tokens

**Radius**

| Token | Value (rem) | Reference | When to use |
|-------|-------------|-----------|-------------|
| *(default)* | — | **0** | Sharp corners everywhere unless below applies. |
| `$arvo-radius-circle` | 62.438rem | 999px (circle) | Small circular indicators (e.g. status dots); true pill/circle per spec. |

**Border width**

| Token | Value (rem) | Reference (px) | Role |
|-------|-------------|----------------|------|
| `$arvo-border-1` | 0.063rem | 1px | Default borders |
| `$arvo-border-2` | 0.125rem | 2px | Emphasis (component specs may use **2px** / **3px** solid semantic borders) |
| `$arvo-border-3` | 0.094rem | 1.5px | Subtle |

**Border color:** always **`arvo-color-b-*`** (e.g. `b-divider`, `b-form`, `b-theme`, `b-theme-focus`, `b-disabled`, `b-negative`, …).

---

## Effects tokens

**Box shadow** (each uses **`$arvo-color-s-shadow-static-*`** inside the preset):

| Token | Definition (reference) | Typical use |
|-------|------------------------|-------------|
| `$arvo-shadow-left` | `-10px 0px 10px 0px` + shadow static 2 | Right-edge drawer / panel shadow |
| `$arvo-shadow-right` | `10px 0px 10px 0px` + shadow static 2 | Left-edge drawer / panel shadow |
| `$arvo-shadow-down` | `0px 10px 20px 0px` + shadow static 1 | Dropdowns, menus, popovers |
| `$arvo-shadow-up` | `0px -10px 20px 0px` + shadow static 1 | Bottom toolbars, bottom sheets |
| `$arvo-shadow-center` | `0px 4px 40px 0px` + shadow static 1 | Windows, alert dialogs, toast |
| `$arvo-shadow-fab` | `0px -10px 20px 0px` + shadow static 1 | FAB and floating toolbars |

**Backdrop blur**

| Token | Value | Typical use |
|-------|-------|-------------|
| `$arvo-shadow-blur` | `blur(4px)` | With **`arvo-color-s-overlay-static`** on mask overlays (`backdrop-filter`) |

**Opacity**

| Token | Decimal | Percent | Typical use |
|-------|---------|---------|-------------|
| `$arvo-opacity-80` | 0.8 | 80% | Image hover |
| `$arvo-opacity-60` | 0.6 | 60% | Chart selected |
| `$arvo-opacity-40` | 0.4 | 40% | (per spec) |
| `$arvo-opacity-20` | 0.2 | 20% | Disabled scenarios |

---

## Typography: font size & weight tokens

**Font sizes** (used by **`arvo-font-{h|p|l}…`** mixins):

| Token | Value | Reference (px) |
|-------|-------|----------------|
| `$arvo-font-size-64` | 4rem | 64px |
| `$arvo-font-size-40` | 2.5rem | 40px |
| `$arvo-font-size-32` | 2rem | 32px |
| `$arvo-font-size-24` | 1.5rem | 24px |
| `$arvo-font-size-20` | 1.25rem | 20px |
| `$arvo-font-size-18` | 1.125rem | 18px |
| `$arvo-font-size-16` | 1rem | **16px** (body baseline) |
| `$arvo-font-size-14` | 0.875rem | 14px |
| `$arvo-font-size-12` | 0.75rem | 12px |
| `$arvo-font-size-10` | 0.625rem | 10px |

**Font weights**

| Token | Value |
|-------|--------|
| `$arvo-regular` | 400 |
| `$arvo-medium` | 500 |
| `$arvo-bold` | 700 |

**Families:** `$default-font` (o9 Sans); `$mono-font` (monospace — code / data only).

**Semantic families:** **`h`** heading, **`p`** paragraph, **`l`** label (interactive). Pick **mixins** `arvo-font-{h|p|l}{size}-{weight…}`; do not attach orphan sizes.

### Section headings — Side Panel, Popover, Window, Alert Dialog

Title / header lines for **Side Panel**, **Popover**, **Window** (popup), and **Alert Dialog** must use the **`h16-m`** style: SCSS mixin **`@include arvo-font-h16-m`** ( **`$arvo-font-size-16`** + **`$arvo-medium` / 500** ). In Figma, mirror the same text style for those overlay headers.

---

## React components (`@arvo/react`)

* **Import:** `import { ArvoButton, ArvoLink, … } from '@arvo/react'`.
* **States:** rely on component props and built-in **hover / active / focus** token wiring; override only when the design system documents `style` / CSS variables.

---

## Component categorization

| Category | Purpose | Examples |
|----------|---------|----------|
| **Actions** | Primary actions, toolbars, FAB | Button, Icon Button, Button Group, Dropdown Button, Toolbar, FAB, Split Button |
| **Data Display** | Structured content, media | Card, Accordion, Grid, Tree Widget, Carousel, Code block, Comments |
| **Feedback** | Status, async, empty, alerts | Toast, Banner Alert, Badge Alert, Inline alert, Skeleton, Spinner, Empty State, Notifications |
| **Inputs** | Data entry | Textbox, Textarea, Number Input, Search, Select, Combobox, Listbox, Checkbox/Radio/Switch, Date/Time pickers, Chip, Slider, File/Upload, … |
| **Navigation** | Wayfinding | Link, Button Link, Breadcrumb, Tabs, Pagination, Stepper, Wizard, Tree |
| **Overlays** | Floating UI, dialogs | Popover, Action Menu, Tooltip, Alert Dialog, Drawer, Window, Mask Overlay, Calendar |
| **Utilities** | Chrome | Avatar, Form Label, Indicator, Scrollbar, Splitter |

---

## Buttons (semantic roles)

* **Primary** — one main forward action per region (theme **surface** + **`t-active-inverse` / `i-active-inverse`** where spec applies).
* **Secondary / Tertiary / Outline** — supporting actions; use **`s-theme-hover-*`**, **`t-theme-hover`**, **`b-*`** per variant spec.
* **Danger** — **`s-negative*`**, **`t-negative`**, **`i-negative`**, **`b-negative`** + confirmation.

---

## Links vs actions

* **Link** — URLs; typography **`l`**; **`arvo-color-t-info-dark`** + underline when needed.
* **Button** — state-changing actions; not link-styled.

---

## Layout (general)

Prefer **flex** and **grid**. **Absolute** positioning only for overlays and popovers.

---

## Figma libraries

* [Arvo Platform Design System — Figma project](https://www.figma.com/files/953513455932500110/project/250726221?fuid=1020089521679916452)
* [arvo Foundation Library](https://www.figma.com/design/rjhpdeZqzdnJas17N4PqzY/arvo-Foundation-Library?m=auto)
* [arvo Component Library](https://www.figma.com/design/g8S6ueJqluUt9kN8uZLprN/-NEW--arvo-Component-Library--in-progress-?m=auto)
* [arvo Icon and Illustrations Library](https://www.figma.com/design/KG4bUj8RekcQiRDrfjjJzf/arvo-Icon-and-Illustrations-Library?m=auto)

---

## Implementation note

Bind UI to **token names** (`$arvo-*`, `var(--arvo-*)`). **Hover / active / focus** must use the **semantic state tokens** above so light/dark and brand themes stay aligned. Full token lists and `useCase` strings: `semanticColorTokens.js` in the Arvo repo.
