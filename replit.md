# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   └── api-server/         # Express API server
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts (single workspace package)
│   └── src/                # Individual .ts scripts, run via `pnpm --filter @workspace/scripts run <script>`
├── pnpm-workspace.yaml     # pnpm workspace (artifacts/*, lib/*, lib/integrations/*, scripts)
├── tsconfig.base.json      # Shared TS options (composite, bundler resolution, es2022)
├── tsconfig.json           # Root TS project references
└── package.json            # Root package with hoisted devDeps
```

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references. This means:

- **Always typecheck from the root** — run `pnpm run typecheck` (which runs `tsc --build --emitDeclarationOnly`). This builds the full dependency graph so that cross-package imports resolve correctly. Running `tsc` inside a single package will fail if its dependencies haven't been built yet.
- **`emitDeclarationOnly`** — we only emit `.d.ts` files during typecheck; actual JS bundling is handled by esbuild/tsx/vite...etc, not `tsc`.
- **Project references** — when package A depends on package B, A's `tsconfig.json` must list B in its `references` array. `tsc --build` uses this to determine build order and skip up-to-date packages.

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages that define it
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references

## Packages

### `artifacts/api-server` (`@workspace/api-server`)

Express 5 API server. Routes live in `src/routes/` and use `@workspace/api-zod` for request and response validation and `@workspace/db` for persistence.

- Entry: `src/index.ts` — reads `PORT`, starts Express
- App setup: `src/app.ts` — mounts CORS, JSON/urlencoded parsing, routes at `/api`
- Routes: `src/routes/index.ts` mounts sub-routers; `src/routes/health.ts` exposes `GET /health` (full path: `/api/health`)
- Depends on: `@workspace/db`, `@workspace/api-zod`
- `pnpm --filter @workspace/api-server run dev` — run the dev server
- `pnpm --filter @workspace/api-server run build` — production esbuild bundle (`dist/index.cjs`)
- Build bundles an allowlist of deps (express, cors, pg, drizzle-orm, zod, etc.) and externalizes the rest

### `lib/db` (`@workspace/db`)

Database layer using Drizzle ORM with PostgreSQL. Exports a Drizzle client instance and schema models.

- `src/index.ts` — creates a `Pool` + Drizzle instance, exports schema
- `src/schema/index.ts` — barrel re-export of all models
- `src/schema/<modelname>.ts` — table definitions with `drizzle-zod` insert schemas (no models definitions exist right now)
- `drizzle.config.ts` — Drizzle Kit config (requires `DATABASE_URL`, automatically provided by Replit)
- Exports: `.` (pool, db, schema), `./schema` (schema only)

Production migrations are handled by Replit when publishing. In development, we just use `pnpm --filter @workspace/db run push`, and we fallback to `pnpm --filter @workspace/db run push-force`.

### `lib/api-spec` (`@workspace/api-spec`)

Owns the OpenAPI 3.1 spec (`openapi.yaml`) and the Orval config (`orval.config.ts`). Running codegen produces output into two sibling packages:

1. `lib/api-client-react/src/generated/` — React Query hooks + fetch client
2. `lib/api-zod/src/generated/` — Zod schemas

Run codegen: `pnpm --filter @workspace/api-spec run codegen`

### `lib/api-zod` (`@workspace/api-zod`)

Generated Zod schemas from the OpenAPI spec (e.g. `HealthCheckResponse`). Used by `api-server` for response validation.

### `lib/api-client-react` (`@workspace/api-client-react`)

Generated React Query hooks and fetch client from the OpenAPI spec (e.g. `useHealthCheck`, `healthCheck`).

### `artifacts/web` (`@workspace/web`)

Frontend-only React + Vite website for **Esthétique Auto Pascal Pilote Inc.**, a premium auto detailing business in La Malbaie, Québec. Single-page site with all content in French.

- **Stack**: React, Vite, Tailwind CSS v4, Framer Motion, Lucide Icons
- **Brand Colors**: Blue accent (#3b82f6), Dark (#1a1a1a), White (#ffffff), Light (#f9fafb)
- **Fonts**: Inter (body), Montserrat (headings)
- **Routing**: wouter — multi-page SPA (`/`, `/a-propos`, `/services`, `/services/lavage`, `/services/ppf`, `/services/par-pierre`, `/services/polissage`, `/galerie`, `/rendez-vous`)
- **Home Sections**: Double-bar Sticky Navbar (top info bar + main nav with dropdown), Hero (H1 text-5xl to text-8xl responsive), Stats (react-countup animated counting), Services (4 image-background cards linking to individual pages), Testimonials (paginated), Gallery (masonry + lightbox), CTA, FAQ (5 accordion items), Contact ("PRÊT À BRILLER" + Google Maps embed, shared on all pages via PageLayout), Footer (white, 4-column)
- **Services** (4 services, each with dedicated page):
  - Lavage Auto & Entretien Esthétique de Luxe (`/services/lavage`) — hero, features, 3 forfaits (Essentiel/Premium/Luxe), photo gallery, testimonials, FAQ
  - Protection de Peinture PPF (`/services/ppf`) — hero, description, 6 benefit cards, photo gallery, testimonials, FAQ
  - Par Pierre (`/services/par-pierre`) — hero, expertise description, 4 values cards, photo gallery, testimonials, FAQ
  - Polissage & Nano-Céramique (`/services/polissage`) — hero, features, 4-step process, photo gallery, testimonials, FAQ
- **Other Pages**: À Propos (history + values + stats), Services overview (4-service detailed layout with "En savoir plus" + "Prendre un rendez-vous"), Galerie (all 17 photos + lightbox), Rendez-vous (Google Calendar embed placeholder + contact sidebar, Contact section excluded)
- **Accessibility**: WCAG AA contrast audit applied — text-blue-400 on dark backgrounds, text-gray-700+ on light backgrounds, proper overlay opacities on images
- **Phone**: (418) 665-5871
- **Email**: Pascal.1993@live.ca / info@esthetiqueautopascalpilote.ca
- **Address**: 2535 boulevard Comporté, La Malbaie, Québec
- **Social**: Facebook, Instagram, X, LinkedIn, YouTube
- **Design rules**: border-radius 6px, no gradients on backgrounds (only on image overlays), max-width 1280px container, consistent visual hierarchy (H2: 60px, taglines: 24px, mb-16 section headers)
- **Images**: All imported from `attached_assets/` via `@assets/` alias
- **No backend**: All content is static/hardcoded

### `scripts` (`@workspace/scripts`)

Utility scripts package. Each script is a `.ts` file in `src/` with a corresponding npm script in `package.json`. Run scripts via `pnpm --filter @workspace/scripts run <script>`. Scripts can import any workspace package (e.g., `@workspace/db`) by adding it as a dependency in `scripts/package.json`.
