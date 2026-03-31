# o9 Design System Website

Design system documentation for **o9 Design Lab** — built from the o9 brand identity and [o9ds.figma.site](https://o9ds.figma.site/) inspiration.

---

## Getting Started (Run from GitHub)

**Prerequisites:** Node.js 18+ and npm.

1. Clone the repo:
   ```bash
   git clone https://github.com/akashuxer/o9ds.git
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
│   └── generate-component-stubs.mjs  # Regenerate stub pages + allStubComponents.js
│
├── public/                 # Static assets (served as-is)
│   ├── o9DocGraphics/      # Documentation graphics (architecture PNG, home hero SVG, component anatomy SVGs)
│   ├── o9illus/
│   │   ├── light/          # Light-mode illustration SVGs
│   │   └── dark/           # Dark-mode illustration SVGs
│   ├── o9ClientLogos/
│   │   ├── light/          # Client logos — light (SVG, /logos page)
│   │   └── dark/           # Client logos — dark (SVG)
│   ├── fonts/              # o9con icon font (woff2, woff, o9con.css)
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
│   │   ├── ColorSwatch.jsx # Color preview tile
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
│   │   ├── borderTokens.js
│   │   ├── iconTokens.js
│   │   ├── illustrationTokens.js
│   │   └── o9conIcons.js
│   │
│   ├── pages/
│   │   ├── Home.jsx, Overview.jsx, Components.jsx, Developers.jsx, Placeholder.jsx
│   │   ├── foundation/                 # Foundations (tokens, type, spacing, assets)
│   │   │   ├── Colors.jsx, Typography.jsx, Spacing.jsx, Borders.jsx
│   │   │   ├── Icons.jsx, Illustrations.jsx, Logos.jsx, Principles.jsx
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
│   │   └── componentPageMeta.js        # Stub page titles / descriptions
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
| `src/tokens/spacingTokens.js` | Spacing scale (`o9ds-space-*`) |
| `src/tokens/borderTokens.js` | Border radius and width |
| `src/tokens/iconTokens.js` | Icon size tokens (o9con) |
| `src/tokens/illustrationTokens.js` | Illustration size tokens (o9Illus) |
| `src/tokens/o9conIcons.js` | o9con icon class names and metadata |
| `src/tokens/clientLogos.js` | Client logo filenames (`o9ClientLogos/light/` and `dark/`) |
| `src/index.css` | Global styles, 0-radius policy, `data-o9ds-*` rules |
| `src/App.jsx` | Route definitions |
| `src/data/componentsNav.js` | Component catalog tree and `/components/:slug` slugs |
| `src/data/componentPageMeta.js` | Intro copy for generated component stub pages |
| `vercel.json` | SPA fallback for production hosting |
| `src/LayoutComponents/Layout.jsx` | Sidebar nav, page titles |

### Sidebar structure

- **FOUNDATIONS** → Colors, Typography, Spacing, Borders, **Assets** (Iconography, Illustrations, Logos), Motion, Elevation

---

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/colors` | Colors (brand, global, semantic tokens) |
| `/typography` | Typography |
| `/spacing` | Spacing scale and tokens |
| `/borders` | Border radius and width tokens |
| `/icons` | Assets → Iconography (o9con gallery) |
| `/illustrations` | Assets → Illustrations (o9Illus gallery) |
| `/logos` | Assets → Logos (client logos, download as SVG) |
| `/components` | Components overview |
| `/components/:slug` | Component doc (full pages for e.g. `button`, `cards`; stubs for others) |
| `/components/button` | Button docs (`src/pages/components/buttons-actions/Button.jsx`) |
| `/components/cards` | Cards — Storybook embeds (`src/pages/components/data-display/Cards.jsx`) |
| `/principles` | Principles and guidelines |
| `/overview` | Overview |
| `/developers` | Developers |
| `/changelog` | Changelog |

---

## Clipboard / Copy Behavior

- **Spacing:** Copy button per row → `var(--o9ds-space-1)` etc.
- **Borders:** Copy button per row →
  - Radius: `border-radius: var(--o9ds-radius-16);`
  - Width: `border-width: var(--o9ds-border-1);`
- **Code blocks:** Copy button → full snippet (SCSS variables, HTML, etc.)

---

## Adding or Changing Tokens

1. **Colors** — Edit `globalColorTokens.js` or `semanticColorTokens.js`
2. **Spacing / borders / icons / illustrations** — Edit the matching file in `src/tokens/`
3. Save; dev server reloads automatically

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
