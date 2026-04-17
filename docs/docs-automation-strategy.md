---
name: Docs automation strategy
overview: Full integration options (including Docusaurus-sourced MDX), efficiency notes, and the recommended hybrid for the o9ds Vite site—plus CI and realistic AI boundaries.
todos:
  - id: choose-format
    content: "Confirm hybrid: JSON/YAML or token-derived data for tables; MDX or markdown fields for prose"
    status: pending
  - id: vertical-slice
    content: "Add one /docs/:slug DocPage + manifest; one sample MDX or JSON page"
    status: pending
  - id: ci-pipeline
    content: "GitHub Actions (or host CI): npm ci, validate schema, vite build, optional preview deploy"
    status: pending
isProject: false
---

# Docs automation (full guide + o9ds recommendation)

Stack: **[Vite](vite.config.js) + React + [react-router-dom](src/App.jsx)** + layout components ([`PageWithToc`](src/LayoutComponents/), [`DocTable`](src/LayoutComponents/DocTable.jsx), [`CodeBlock`](src/LayoutComponents/CodeBlock.jsx)). Tokens: [`src/tokens/`](src/tokens/). Existing codegen: [`scripts/generate-component-stubs.mjs`](scripts/generate-component-stubs.mjs).

**Docusaurus** is a **separate** doc-site generator (its own build, routing, theme). You do **not** embed Docusaurus inside this app as a second SPA unless you intentionally want two UIs. You **can** still **reuse the same MDX files or ideas** via the paths below.

---

## What “smart and efficient” usually means

| Goal | Approach |
|------|----------|
| **Single source of truth** | One place for docs (Markdown/MDX + frontmatter, or JSON), not two parallel copies. |
| **Stable layout** | Your existing layout components stay the **shell**; content fills slots. |
| **Deterministic builds** | CI runs **validate** + **generate** (optional) + **`vite build`**. |
| **No drift** | Lint MDX, validate frontmatter schema, optional link check in CI. |

---

## Path A — MDX inside Vite (author in MDX, ship one app)

1. Add **MDX support** to Vite (`@mdx-js/rollup` or `vite-plugin-mdx`) with **React** as the provider.
2. Create **layout wrappers** that mirror your doc chrome: import `PageWithToc`, `DocTable`, etc., from MDX via default layout or shortcodes.
3. **Route** each doc: static `import` per MDX file **or** a **dynamic route** (e.g. `/docs/:slug`) with a **glob import** / manifest map.
4. **Automate:** edit MDX in repo → **git push** → CI **`vite build`** → deploy static site.

**Pros:** Close to Docusaurus-style authoring. **Cons:** You maintain MDX components and parity with your JSX design.

---

## Path B — Build-time MDX → JSX (or manifest + one page)

1. Authors keep **`.mdx`** (or `.md`) under e.g. `docs/` (could mirror a Docusaurus `docs/` tree).
2. A **Node script** (similar to [`scripts/generate-component-stubs.mjs`](scripts/generate-component-stubs.mjs)) runs in CI or pre-commit:
   - Parse MDX with **MDX compiler** or **unified** (`remark`, `mdx`, `rehype`).
   - Emit **per-page `.jsx`** **or** one **`docs-manifest.json`** + chunks consumed by a single **`DocPage.jsx`**.
3. Map **frontmatter** (`title`, `toc`, `sidebar`) to `PageWithToc` `sections` and metadata.
4. **Routes:** script emits **`routes.docs.js`** imported by [`App.jsx`](src/App.jsx), **or** one **`/docs/:slug`** route only.

**Pros:** Reviewable output in PRs if you emit JSX; runtime can stay thin. **Cons:** Extra build step to own and debug.

---

## Path C — Shared “docs package” + this app (monorepo or npm package)

1. Package **`@o9ds/docs-content`** (or a monorepo folder) holds **MDX + assets**.
2. This website **depends** on that package version.
3. Path B generator runs in **website** `postinstall`/`build` or in the **package** `prepare` script.

**Pros:** Clear ownership; docs can ship on their own cadence. **Cons:** Versioning and release overhead.

---

## Path D — Structured data + template (no MDX required for tables)

For **API tables, props, tokens** (like semantic colors), **MDX is optional**. **YAML/JSON** per page (or generated from token `.js` files) + **`DocPageTemplate.jsx`** can render:

- Title, intro, TOC from schema
- Tables from arrays via `DocTable`
- Optional prose via **one** `react-markdown` field **or** a single MDX body import

**Pros:** Strong validation; fewer custom MDX components. **Cons:** Less flexibility for long narrative than full MDX everywhere.

---

## Paths ranked by operational efficiency (for reference)

| Rank | Path | Notes |
|------|------|--------|
| 1 | **D + dynamic route** | One template + manifest; least file churn. |
| 2 | **A (MDX in Vite)** | No separate codegen; Vite compiles MDX at build. |
| 3 | **B (MDX → many JSX files)** | Higher PR noise unless you only emit manifest. |
| 4 | **C (package)** | Best when multiple repos consume the same docs. |

---

## Docusaurus: how integration is possible (without replacing this site)

- **Do not** run Docusaurus **inside** this Vite app as the main UI unless you want two frameworks and duplicated styling.
- **Do** treat Docusaurus as **optional upstream**:
  - **Export / copy** `docs/**/*.mdx` into this repo’s `content/` and replace `@theme/`, `@site/`, and Docusaurus-only components with **your** imports (`PageWithToc`, `DocTable`, etc.).
  - **Monorepo:** `packages/docs-mdx` consumed by both Docusaurus (preview) and Vite (production)—only if you still want a Docusaurus preview site.
  - **CI:** same MDX files; **two** build jobs (Docusaurus `build` for preview, `vite build` for production) — only if you keep both; otherwise **Vite-only** after migration.
- **Automation:** Docusaurus does **not** “push” to this site automatically unless you **script** it (copy, transform imports, run generator). That script is **your** pipeline step, not a built-in Docusaurus feature.

---

## Practical integration steps (generic order)

1. **Pick source format:** MDX-only vs JSON/YAML vs **hybrid** (frontmatter + MDX body + JSON blocks for tables).
2. **Define a frontmatter / JSON schema** (`title`, `slug`, `toc`, `status`) and validate in CI (Zod / JSON Schema).
3. **Vertical slice:** one doc page (e.g. “Test doc”) through MDX-in-Vite **or** manifest + `DocPage`.
4. **Routing:** static imports, **or** `/docs/:slug` + manifest; keep URLs stable.
5. **CI:** `npm ci` → validate → optional `generate` → **`vite build`**; fail if dirty generated output when required.
6. **Optional:** PR preview deploy (Netlify/Vercel).

---

## Summary recommendation (general)

**Path B + Path D hybrid** is a strong default: **MDX (or MD) for prose**, **build script or Vite** to bundle, **tokens/tables from structured data** where possible, **CI** to validate. **Path A** is simpler if you prefer **no** separate codegen and only Vite MDX.

---

## Which approach fits **this** site (o9ds) best?

**Recommended: hybrid (structured data + optional MDX prose).**

| Part of the site | Best fit |
|------------------|----------|
| **Colors, typography, tokens, props tables** | **JSON/YAML** or **import from existing `.js` token files** + template + `DocTable`. |
| **Guides, long-form copy** | **MDX or Markdown** (Vite build), inside `PageWithToc`. |
| **Routing** | **`/docs/:slug` + manifest** to avoid a new `Route` per page in [`App.jsx`](src/App.jsx). |
| **Hero / marketing** | Keep **hand-written `.jsx`**. |

---

## Can MDX files be used here?

**Yes** — typically **MDX in Vite** (`@mdx-js/rollup`) + **default layout** + components mapping to your design system. **Docusaurus `.mdx`** files work after **import swaps** (see Docusaurus section above).

---

## Automation and AI (what “automatic” means)

- **Automation:** **GitHub Actions** (or host CI) on push/PR: **`vite build`**; optional **validate** + **generate manifest**. **Deploy** publishes `dist/`.
- **AI:** assists **authors** drafting MDX/YAML; it does **not** replace CI config or deploy secrets.

---

## Quick reference table

| Question | Answer |
|----------|--------|
| **Best for o9ds?** | **Hybrid** + **dynamic doc route** + **data for tables**. |
| **MDX?** | **Yes** (Vite plugin); Docusaurus MDX usable after **component path** alignment. |
| **Docusaurus?** | **Source or preview**, not embedded runtime; integrate via **shared files** + **scripts**. |
| **Automation?** | **CI + optional scripts**; not self-configuring AI. |

---

## What authors do day to day

1. Edit **`content/...`** (MDX/JSON/YAML).
2. **Push** → CI builds.
3. Merge → deploy.

Optional: run `npm run generate:…` locally if you add a generator.

No application code was changed for this plan iteration.
