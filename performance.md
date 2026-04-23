# o9ds website — performance & delivery

Living document. **Update this file** when you change bundling, images, fonts, caching, or deploy config.

## Stack (baseline)

- **Vite 5 + React 18 SPA** (client-rendered only; no SSR/hydration path today).
- **Deploy:** primarily **Vercel** (`vercel.json`); optional **Netlify** (`netlify.toml`).
- **Raster art:** PNG sources under `public/`; **WebP siblings** generated at build; **PNG remains fallback** in markup.

---

## What we optimized (summary)

| Area | Implementation |
|------|------------------|
| **Code splitting** | `React.lazy` + `Suspense` for route-level pages in `src/App.jsx`. |
| **Vendor chunks** | `vite.config.js` `manualChunks`: `react-vendor`, `router`, `o9ds-vendor` (includes `vendor/@o9ds/`), `vendor`. |
| **WebP** | `scripts/optimize-public-png-to-webp.mjs` (Sharp); hooked from Vite `buildStart` in `vite.config.js`. |
| **Markup** | `src/components/media/PublicRasterPicture.jsx` + `src/utils/publicRaster.js` — `<picture>` + WebP `<source>`, PNG on `<img>`, `display: contents` so layout matches a lone `<img>`. |
| **Wiring** | `ExpandableDocImage`, `ComponentOverviewCard`, `Home` card art use `PublicRasterPicture`. |
| **Duplicate CSS removed** | `index.html` no longer links `/o9SansFont/o9Sans.css` or `/o9ConIconFont/o9con.css`; fonts/icons load once via Vite bundle from `src/main.jsx`. |
| **Deps trimmed** | Removed unused `@mdx-js/*`, `rehype-slug`, `remark-gfm` (re-add if MDX is wired later). |
| **Guardrails** | `scripts/audit-public-images.mjs`; runs at end of `npm run build` via `images:audit`. |

---

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local dev; WebP used if `.webp` exists beside PNG. |
| `npm run images:webp` | Regenerate all `public/**/*.webp` from PNGs (no full build). |
| `npm run images:audit` | Check PNG↔WebP parity and size thresholds. |
| `npm run build` | Styles prebuild → `vite build` (runs WebP plugin) → `images:audit`. |
| `STRICT_IMAGES=1 npm run images:audit` | Treat size warnings as failures (e.g. release CI). |

---

## Image pipeline (conventions)

1. Add or edit **PNG** under `public/` (source of truth).
2. Run **`npm run images:webp`** or **`npm run build`** so a sibling `.webp` exists.
3. Keep **PNG + WebP** in git so clones and static hosts always have both.
4. In code/data, keep referencing **`/path/to/file.png`**; `PublicRasterPicture` negotiates WebP automatically.
5. **AVIF:** optional future addition; WebP is the maintained baseline (see below).

### Audit behavior

- **Error (exit 1):** missing WebP for a PNG; PNG **> 3 MiB**.
- **Warn:** PNG **≥ 800 KiB** (many catalog/home PNGs currently warn — shrink sources over time).
- **STRICT_IMAGES=1:** warnings also fail the process.

### Coverage

- All **`public/**/*.png`** should have a matching **`*.webp`**. Current inventory: **47 PNG / 47 WebP** (re-run audit after adds).

---

## Measured baselines (local / historical)

Values below are from **Vite build output** and **local Lighthouse 11** against `vite preview` (mobile simulation). Re-run after major changes and update this table.

### JavaScript (production build)

| Metric | Before (monolithic routes) | After (lazy + chunks) |
|--------|----------------------------|------------------------|
| Single app chunk (gzip) | ~**304.5 kB** one file | — |
| Entry `index` chunk (gzip) | (merged above) | ~**12.9 kB** |
| Initial route `/` (gzip sum, parallel) | ~**304.5 kB** | ~**113 kB** (index + react + o9ds + router + vendor + Home) |
| Heavy route example | merged | `ComponentDocPage` ~**42.7 kB gzip** when visited |

### CSS (production build)

| Metric | Before | After |
|--------|--------|--------|
| Total CSS (gzip) | ~**43 kB** one file | ~**43 kB** split: app CSS + `o9ds-vendor` CSS (better cache boundaries) |

### Raster (`public/`)

| Metric | Before | After |
|--------|--------|--------|
| PNG total | ~**49 MB** | unchanged (fallback) |
| WebP total | **0** | ~**5.6 MB** |

### Lighthouse (illustrative — re-run locally)

| Metric | Before | After |
|--------|--------|--------|
| Performance score | ~50 | ~53 |
| FCP (ms) | ~4222 | ~3664 |
| LCP (ms) | ~4374 | ~3792 |

**Note:** CLS ~**1.0** appeared in both before/after local runs — likely hero/carousel/fonts, not chunking. Treat Lighthouse on localhost as directional; production + RUM matters.

---

## Core Web Vitals — risks & owners

| Vital | Risk drivers here | Mitigations (non-layout) |
|-------|-------------------|---------------------------|
| **LCP** | Hero SVG/PNG, large fonts, JS parse | WebP, lazy routes, preload critical hero assets, future font subsetting |
| **INP** | Main-thread work, heavy doc pages | Lazy routes, defer non-critical work |
| **CLS** | Hero, web fonts, late images | Reserve space where we can **without** layout redesign; font metric tuning |
| **TTFB** | SPA shell, hosting region | CDN, caching headers, future hybrid/prerender for prose |

---

## Fonts (CJK & long-term)

**Reality:** `@o9ds/assets/fonts/css` bundles **large Noto Sans JP/KR/SC `.ttf`** files (multi‑MB each) into `dist/assets/`.

**Safest path (phased, preserve fidelity):**

1. **Now:** Avoid duplicate `@font-face` (done); prefer **not** preloading huge CJK files unless a page needs them immediately.
2. **Next:** Add **`unicode-range`** splits in vendor or forked `fonts.css` so Latin UI does not pull CJK files — QA with English + sample CJK strings.
3. **Later:** Subset CJK per locale (glyphhanger / pyftsubset) when i18n requirements are clear.

---

## Caching — production

**Principle (Vercel):** multiple header rules can match; **the last matching rule wins**. Put **broad `no-cache` first**, **immutable `/assets` last**.

| Asset | `Cache-Control` (recommended) |
|-------|----------------------------------|
| **`/assets/*`** (hashed JS/CSS) | `public, max-age=31536000, immutable` |
| **SPA `index.html` / HTML shell** | `public, max-age=0, must-revalidate` |
| **Unhashed `public/` images** (`/home/*`, `/o9DocGraphics/*`, …) | `public, max-age=604800, stale-while-revalidate=86400` (tune as needed) |
| **`/o9ConIconFont/*`** (if served) | long TTL or `immutable` if filenames are versioned |

**Compression:** Enable **Brotli/gzip** at the CDN (Vercel/Netlify default on).

**Config in repo:** `vercel.json`, optional `netlify.toml`.

---

## MDX & content

- MDX packages were **removed** while unused. To adopt MDX-in-Vite later: add `@mdx-js/rollup`, configure `vite.config.js`, and document routes in this file.

---

## AVIF

**Recommendation:** **Defer.** WebP covers most cases; AVIF adds build time, repo size, and QA surface. Revisit after PNG sources are slimmed and LCP is measured in production.

---

## Long-term architecture (no UI change required)

| Phase | Direction |
|-------|-----------|
| **1** | Stay SPA; grow **lazy routes**, content manifests, optional prefetch. |
| **2** | **Hybrid:** static prerender/SSG for long prose/MDX; SPA for interactive demos. |
| **3** | Broader SSR/SSG only if SEO/TTFB demand it; reuse same React components. |

---

## Changelog (maintain when you ship perf changes)

| Date | Change |
|------|--------|
| _YYYY-MM-DD_ | _e.g. Added lazy routes, WebP pipeline, vercel header order fix_ |

_Add a row whenever you merge performance-related PRs._

---

## References (code)

- `vite.config.js` — chunks, WebP plugin  
- `src/App.jsx` — lazy routes  
- `src/components/media/PublicRasterPicture.jsx`  
- `scripts/optimize-public-png-to-webp.mjs`, `scripts/audit-public-images.mjs`  
- `vercel.json`, `netlify.toml`  
- `index.html` — head resources (no duplicate o9Sans/o9con links)  
