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

---

## Folder Structure

```
o9ds Website/
├── index.html              # Entry HTML
├── package.json            # Scripts and dependencies
├── vite.config.js          # Build config
├── tailwind.config.js      # Design tokens, colors
├── postcss.config.js
│
├── public/                 # Static assets (served as-is)
│   ├── o9illus/
│   │   ├── light/          # Light-mode illustration SVGs
│   │   └── dark/           # Dark-mode illustration SVGs
│   ├── fonts/              # o9con icon font (woff2, woff, o9con.css)
│   └── favicon.svg
│
├── src/
│   ├── main.jsx            # App bootstrap
│   ├── App.jsx             # Routes and layout wrapper
│   ├── index.css           # Global styles, tokens, light/dark rules
│   │
│   ├── LayoutComponents/   # Layout & shared UI
│   │   ├── Layout.jsx      # Header, sidebar, nav, theme toggle
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
│   ├── pages/              # Documentation pages (one per route)
│   │   ├── Home.jsx
│   │   ├── Colors.jsx
│   │   ├── Typography.jsx
│   │   ├── Spacing.jsx
│   │   ├── Borders.jsx
│   │   ├── Icons.jsx
│   │   ├── Illustrations.jsx
│   │   ├── Components.jsx
│   │   ├── Principles.jsx
│   │   ├── Overview.jsx
│   │   ├── Placeholder.jsx
│   │   └── components/     # Component documentation
│   │       └── Button.jsx
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
| `src/index.css` | Global styles, 0-radius policy, `data-o9ds-*` rules |
| `src/App.jsx` | Route definitions |
| `src/LayoutComponents/Layout.jsx` | Sidebar nav, page titles |

---

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/colors` | Colors (brand, global, semantic tokens) |
| `/typography` | Typography |
| `/spacing` | Spacing scale and tokens |
| `/borders` | Border radius and width tokens |
| `/icons` | o9con gallery, accessibility, code |
| `/illustrations` | o9Illus gallery, code |
| `/components` | Components overview |
| `/components/button` | Button docs |
| `/principles` | Principles and guidelines |
| `/overview` | Overview |
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

## Embedding Storybook Stories in Components

To show Storybook stories inside component pages:

### Option 1: Iframe embed

1. Build Storybook as a static site:
   ```bash
   npx storybook build
   ```
   Output goes to `storybook-static/`.

2. Host that build (e.g. on GitHub Pages, Netlify, or alongside this app).

3. Embed in a component page:
   ```jsx
   <iframe
     src="/storybook/iframe.html?id=button--primary"
     title="Button Primary story"
     className="w-full border h-[400px]"
     style={{ borderColor: isLight ? '#E5E5E5' : undefined }}
   />
   ```

4. Adjust `src` to the URL where Storybook is served (e.g. `/storybook/` if you copy `storybook-static` into `public/storybook`).

### Option 2: Storybook in the same project

1. Add Storybook to this repo (if not already present):
   ```bash
   npx storybook init
   ```

2. Add a route in `App.jsx` for a page that embeds stories.

3. Use `@storybook/react` to render the story inside your doc page, or keep using an iframe to your Storybook build.

### Option 3: `storybook-addon-embed`

1. Add the addon and configure it in `.storybook/main.js`.

2. Use the embed block in your MDX or component docs to reference stories by ID.

**What you need:**
- Storybook in this repo or in a separate package
- A built Storybook output (static HTML) or Storybook dev server URL
- An `<iframe>` or embed component in `src/pages/` (e.g. in `Button.jsx`) pointing to the story URL

---

## Brand References

- [o9 Design Lab Brand Library](https://www.figma.com/community/file/987382411861395545/o9-design-lab-brand-library)
- [o9 Design Lab](https://o9designlab.com/)
