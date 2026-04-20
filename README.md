# o9 Design System Website

Design system documentation for **o9 Design Lab** — built from the o9 brand identity and [o9ds.figma.site](https://o9ds.figma.site/) inspiration.

---

## Getting Started (Run from GitHub)

**Prerequisites:** Node.js 18+ and npm.

1. Clone the repo:
   ```bash
   git clone https://github.com/akashUxer-12/o9ds.git
   cd o9ds
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the dev server:
   ```bash
   npm run dev
   ```
   Open the URL in the terminal (e.g. `http://localhost:5173`).

4. Build for production:
   ```bash
   npm run build
   ```
   Output goes to `dist/`.

**Deploy (Vercel):** `vercel.json` rewrites all paths to `index.html` so client-side routes (e.g. `/components/button`) work on refresh and direct URL entry.

**Regenerate component stubs:** After editing `src/data/componentsNav.js`, run `npm run generate:component-stubs` to refresh `allStubComponents.js` and the per-slug files under `src/pages/components/<category>/`.

**Regenerate o9con icon catalog:** After replacing `public/o9ConIconFont/o9con.css` and font files (`.woff2`, `.woff`, `.ttf`) from a new export, run `npm run generate:o9con-icons` to rebuild `src/tokens/o9conIcons.js` from the CSS so **Assets → Iconography** lists every icon class. Ensure `@font-face` in `o9con.css` uses URLs **relative to that file** (e.g. `url('./o9con.woff2')`) so fonts load from `/o9ConIconFont/`; some generators emit `../fonts/...`, which will 404 unless you add matching files under `public/fonts/`.

---

## Folder Structure

```
o9ds Website/
├── index.html              # Entry HTML
├── package.json            # Scripts and dependencies
├── vite.config.js          # Build config
├── tailwind.config.js      # Design tokens, colors
├── postcss.config.js
├── vercel.json             # SPA rewrites: all routes → index.html (deep links / refresh)
│
├── scripts/
│   ├── generate-component-stubs.mjs  # Regenerate stub pages + allStubComponents.js
│   └── generate-o9con-icons.mjs      # Regenerate src/tokens/o9conIcons.js from public/o9ConIconFont/o9con.css
│
├── public/                 # Static assets (served as-is)
│   ├── placeholder.svg       # Effects blur preview (mask overlay demo)
│   ├── o9DocGraphics/      # Documentation graphics (architecture PNG, home hero SVG, component anatomy SVGs)
│   ├── o9illus/
│   │   ├── light/          # Light-mode illustration SVGs
│   │   └── dark/           # Dark-mode illustration SVGs
│   ├── o9SansFont/         # o9 Sans: o9Sans.css + font files (.woff2 / .woff / .ttf) for UI body text
│   ├── o9ConIconFont/      # o9con icon font: o9con.css + o9con.woff2 / .woff / .ttf (same folder; @font-face paths must resolve here)
│   └── favicon.svg
│
├── src/
│   ├── main.jsx            # App bootstrap
│   ├── App.jsx             # Routes and layout wrapper
│   ├── index.css           # Global styles, tokens, light/dark rules
│   │
│   ├── LayoutComponents/   # Layout & shared UI (reuse — do not recreate)
│   │   ├── Layout.jsx      # Header, sidebar, nav, theme toggle
│   │   ├── PageHeader.jsx  # Page title + avatar icon + description
│   │   ├── PageWithToc.jsx # Main wrapper with "On This Page" TOC
│   │   ├── OnThisPage.jsx  # Right-side section nav
│   │   ├── DocTabs.jsx     # Tabs with slide animation (Overview/Usage/API)
│   │   ├── DocTable.jsx    # Structured tables (props, tokens, ARIA)
│   │   ├── WhiteBgCard.jsx # Cards — white bg, subtle border
│   │   ├── GrayBgCard.jsx  # Cards — gray bg, dark border
│   │   ├── CodeBlock.jsx   # Code snippet with copy
│   │   ├── ExpandableDocImage.jsx # Doc infographic: click opens full-size lightbox
│   │   ├── ColorSwatch.jsx # Color preview tile
│   │   ├── ComponentOverviewCard.jsx # Components catalog tiles (fixed light surfaces)
│   │   ├── SectionOverviewPage.jsx   # Foundations / Patterns / Accessibility / Content grids
│   │   └── ScrollToTop.jsx
│   │
│   ├── context/
│   │   └── ThemeContext.jsx # Light/dark theme state
│   │
│   ├── tokens/             # Design token definitions
│   │   ├── brandColors.js
│   │   ├── globalColorTokens.js
│   │   ├── semanticColorTokens.js
│   │   ├── spacingTokens.js
│   │   ├── effectsTokens.js        # Shadow, blur, opacity (Effects page tables)
│   │   ├── typographyTokens.js
│   │   ├── o9ds.typography.scss    # Typography reference SCSS
│   │   ├── borderTokens.js
│   │   ├── iconTokens.js
│   │   ├── illustrationTokens.js
│   │   └── o9conIcons.js
│   │
│   ├── pages/
│   │   ├── Home.jsx, Overview.jsx, Components.jsx, Developers.jsx, Placeholder.jsx
│   │   ├── FoundationsOverview.jsx, PatternsOverview.jsx, AccessibilityOverview.jsx, ContentOverview.jsx
│   │   ├── foundation/                 # Foundations (tokens, type, spacing, effects, assets)
│   │   │   ├── Colors.jsx, Typography.jsx, Spacing.jsx, Effects.jsx, Borders.jsx
│   │   │   ├── Icons.jsx, Illustrations.jsx, Principles.jsx
│   │   └── components/                 # Component docs — `/components/:slug`
│   │       ├── ComponentDocPage.jsx    # Routes slug → page module
│   │       ├── GenericComponentDoc.jsx # Four-tab stub for catalog items
│   │       ├── stubComponentPage.jsx, allStubComponents.js (generated)
│   │       ├── buttons-actions/        # e.g. Button.jsx
│   │       ├── data-display/           # e.g. Cards.jsx (Storybook embeds)
│   │       ├── inputs/, navigation/, file-handling/, overlays/, feedback/
│   │       ├── loading-empty/, layout-structure/, identity/
│   │       └── …                       # one folder per top-level nav group id
│   │
│   ├── data/
│   │   ├── componentsNav.js            # Sidebar tree, slugs, COMPONENT_DOC_ROUTES
│   │   ├── componentPageMeta.js        # Stub page titles / descriptions
│   │   ├── pathsWithContent.js         # Sidebar + section overview green dots (ready docs)
│   │   ├── overviewCatalog.js          # Card lists for Foundations / Patterns / Accessibility / Content
│   │   ├── sectionOverviewIllustrations.js
│   │   └── componentOverviewIllustrations.js
│   │
│   └── utils/
│       └── colorUtils.js
│
├── .cursor/rules/          # Cursor/IDE rules
├── STRUCTURE.md            # Page structure and conventions
└── README.md
```

---

## Where Things Are Stored

| Location | Contents |
|----------|----------|
| `src/tokens/brandColors.js` | Brand palettes, neutrals |
| `src/tokens/globalColorTokens.js` | Global colors (neutral, theme, dark, feedback, utility) |
| `src/tokens/semanticColorTokens.js` | Semantic mappings (surface, border, text, icon) |
| `src/tokens/spacingTokens.js` | Spacing scale (`$o9ds-space-*`) |
| `src/tokens/effectsTokens.js` | Shadow, blur, opacity tokens (Effects page) |
| `src/tokens/borderTokens.js` | Border radius and width |
| `src/tokens/iconTokens.js` | Icon size tokens (o9con) |
| `src/tokens/illustrationTokens.js` | Illustration size tokens (o9Illus) |
| `src/tokens/o9conIcons.js` | o9con icon class names and metadata (**generated** — run `npm run generate:o9con-icons` after updating `public/o9ConIconFont/o9con.css`) |
| `src/index.css` | Global styles, 0-radius policy, `data-o9ds-*` rules |
| `src/App.jsx` | Route definitions |
| `src/data/componentsNav.js` | Component catalog tree and `/components/:slug` slugs |
| `src/data/componentPageMeta.js` | Intro copy for generated component stub pages |
| `src/data/pathsWithContent.js` | Routes with ready docs (green dot in nav + section overviews) |
| `src/data/overviewCatalog.js` | Overview card lists for Foundations, Patterns, Accessibility, Content |
| `vercel.json` | SPA fallback for production hosting |
| `src/LayoutComponents/Layout.jsx` | Sidebar nav, page titles |

### Sidebar structure

- **FOUNDATIONS** → **Overview** (`/foundations`), Colors, Typography, Spacing, Borders, **Assets** (Iconography, Illustrations), Motion, Effects

---

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/foundations` | Foundations overview (grid of foundation topics) |
| `/colors` | Colors (brand, global, semantic tokens) |
| `/typography` | Typography |
| `/spacing` | Spacing scale / tokens (table + SCSS examples for padding, margin, gap) |
| `/borders` | Border radius and width tokens |
| `/effects` | Effects — shadow, blur, and opacity tokens (previews + SCSS) |
| `/elevation` | Redirects to `/effects` (legacy path) |
| `/icons` | Assets → Iconography (o9con gallery) |
| `/illustrations` | Assets → Illustrations (o9Illus gallery) |
| `/components` | Components overview (search, Ready status, category) |
| `/patterns` | Patterns overview (grid) |
| `/accessibility` | Accessibility overview (grid) |
| `/content` | Content guidelines overview (grid) |
| `/components/:slug` | Component doc (full pages for e.g. `button`, `cards`; stubs for others) |
| `/components/button` | Button docs (`src/pages/components/buttons-actions/Button.jsx`) |
| `/components/cards` | Cards — Storybook embeds (`src/pages/components/data-display/Cards.jsx`) |
| `/principles` | Principles and guidelines |
| `/overview` | Overview |
| `/developers` | Developers |
| `/changelog` | Changelog |

---

## Clipboard / Copy Behavior

- **Spacing:** Copy button per row → SCSS token name (e.g. `$o9ds-space-16`).
- **Effects:** Copy button per row → full SCSS snippet where defined (e.g. `box-shadow: $o9ds-shadow-down;`, mask overlay `background` + `backdrop-filter` for blur, `opacity: $o9ds-opacity-80;`).
- **Borders:** Copy button per row →
  - Radius: `border-radius: var(--o9ds-radius-16);`
  - Width: `border-width: var(--o9ds-border-1);`
- **Code blocks:** Copy button → full snippet (SCSS variables, HTML, etc.)

---

## Adding or Changing Tokens

1. **Colors** — Edit `globalColorTokens.js` or `semanticColorTokens.js`
2. **Spacing / borders / effects / icons / illustrations** — Edit the matching file in `src/tokens/`
3. Save; dev server reloads automatically

### o9con icon font (Iconography gallery)

1. Drop updated `o9con.css` and font files into `public/o9ConIconFont/` (keep `@font-face` `url()` paths pointing at files in that folder).
2. Run `npm run generate:o9con-icons` to refresh `src/tokens/o9conIcons.js`.
3. Commit both the font assets and the regenerated `o9conIcons.js`.

---

## Integrating Storybook / Chromatic embeds

This site documents components under `src/pages/components/` (organized by category folder, e.g. `data-display/`). When stories are published to **Chromatic** (or any hosted Storybook), you can embed them in a doc page with an `<iframe>`.

**Reference implementation:** `src/pages/components/data-display/Cards.jsx` — exports URL constants and shows three embed patterns for the same Chromatic project.

### 1. Embed documentation (`viewMode=docs`)

Use the auto-generated **documentation** entry for a story (not `viewMode=story`). In the iframe URL, set `viewMode=docs` and point `id` at the docs story (e.g. `mycomponent--docs`).

- **Rule of thumb:** replace `viewMode=story` with the documentation entry Chromatic generates for that component’s docs page.

Example (Shadowbox CTA):

```
https://<your-chromatic>.chromatic.com/iframe.html?id=shadowboxcta--docs&viewMode=docs&shortcuts=false&singleStory=true
```

Typical iframe size: `width="800"` `height="400"` (adjust as needed).

### 2. Embed a story **with** the Storybook toolbar

Paste the **published story URL** from Chromatic (sidebar + toolbar). Add query params as needed, e.g. `full=1`, `shortcuts=false`, `singleStory=true`.

Example:

```
https://<your-chromatic>.chromatic.com/?path=/story/shadowboxcta--default
```

Iframe `src` example:

```
https://<your-chromatic>.chromatic.com/?path=/story/shadowboxcta--default&full=1&shortcuts=false&singleStory=true
```

Suggested iframe: `width="800"` `height="260"`.

### 3. Embed a story **without** the toolbar (canvas only)

In Storybook, use **“Open canvas in new tab”** (top-right) to get the **iframe** canvas URL, or build it as:

```
https://<your-chromatic>.chromatic.com/iframe.html?id=<story-id>&viewMode=story&shortcuts=false&singleStory=true
```

Example oEmbed-style link (path-style id):

```
https://<your-chromatic>.chromatic.com/iframe.html?id=/story/shadowboxcta--default&viewMode=story
```

Suggested iframe: `width="800"` `height="200"`.

### Implementation notes

- Use a **descriptive** `title` on every `<iframe>` for accessibility.
- Third-party embeds may need `sandbox` (see `data-display/Cards.jsx`) and a **fallback link** to open the same URL in a new tab if the iframe is blocked.
- Replace `shadowboxcta` / story ids with your component’s ids when copying patterns.

### Self-hosted Storybook (optional)

If you build Storybook locally and host static output (e.g. `npx storybook build` → `storybook-static/`), serve it and point iframe `src` at `/storybook/iframe.html?id=...` the same way—only the origin changes.

---
