# /storybook — static Storybook drop-in

This directory hosts the **static Storybook build from `o9-design-system`**, served
at `https://<site>/storybook/` by the Arvo docs site.

## Why it works here

- Vite copies everything inside `public/` to the build output verbatim, so files
  dropped here end up at `<dist>/storybook/...` and are served as static assets.
- The Storybook build (`pnpm --filter @arvo/react build-storybook` in the
  `o9-design-system` repo, output: `storybook-static/`) emits **relative**
  asset paths (`./sb-manager/...`, `./assets/...`, etc.), so it runs correctly
  from any sub-path without rebuilding.
- `vercel.json` is configured so the SPA catch-all rewrite (`/(.*)` →
  `/index.html`) **skips** `/storybook/*`, and `/storybook` (no trailing slash)
  resolves to `/storybook/index.html`. Hashed asset folders
  (`assets`, `sb-addons`, `sb-manager`, `sb-common-assets`, `fonts`, `o9con`,
  `o9illus`) get long `Cache-Control: immutable` headers.
- The `images:webp` and `images:audit` build steps explicitly skip
  `public/storybook/`, so raster files inside the Storybook bundle do not
  trip the WebP-sibling / oversized-PNG guardrails.

## Update workflow (manual)

1. In the `o9-design-system` repo, build Storybook:
   ```
   pnpm --filter @arvo/react build-storybook
   ```
2. Delete everything inside `public/storybook/` **except this `README.md`**.
3. Copy the **contents** of `o9-design-system/storybook-static/` into
   `public/storybook/` (so `public/storybook/index.html`,
   `public/storybook/iframe.html`, `public/storybook/assets/...`, etc.).
4. Commit and push. Vercel will deploy `/storybook` automatically.

> Do **not** add a transfer script for this — it is intentionally manual so
> the two repos stay decoupled. See the project-level rule about not creating
> persisted cross-repo automation.
