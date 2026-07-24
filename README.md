# SkOLEOM SHOP 
> AI-powered fashion marketplace — **Watch. Touch. Buy.®**
> Virtual try-on with an AI avatar, brand-aware smart sizing, and instant checkout, on top of a WooCommerce catalog.

Built with **Next.js 16 (App Router)**. Migrated from a React (Vite) + Express codebase to a single, unified Next.js application: the frontend and the API now live in the same project, with native Route Handlers replacing Express.

---

## ✨ Features

- **Virtual try-on** — users create an AI "digital twin" avatar (Google Gemini + Cloudinary) and try garments on it.
- **Smart catalog** — products, categories, brands, tags, attributes and variations served from **WooCommerce** (`wc/v3`) and a custom `service/v1` endpoint.
- **Vendor dashboard** — sellers manage products, orders and reviews, with live charts (recharts) and **CSV bulk import**.
- **Auth & roles** — JWT access/refresh cookies, roles `acheteur` (buyer), `vendeur` (seller), `admin`, enforced by middleware.
- **Internationalization** — 13 languages via a lightweight `react-i18next` shim and TypeScript locale files, with `/{lang}/…` routing.
- **Payments** — Stripe Checkout.
- **Immersive UI** — react-bits WebGL effects (LiquidEther aurora background, ScrollStack, CircularGallery), brand-lime design system.

---

## 🧱 Tech stack

| Area | Technology |
|------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React, Tailwind CSS v3, lucide-react, framer-motion |
| State / data | Zustand, TanStack React Query |
| Backend | Next.js Route Handlers (Node runtime) |
| Database | PostgreSQL (Supabase) via Sequelize |
| Commerce | WooCommerce REST API (`wc/v3` + custom `service/v1`) |
| Media / AI | Cloudinary, Google Gemini  for now  we will deploy our TRYON model haha |
| Payments | Stripe |
| Charts | Recharts |
| WebGL effects | react-bits (`three`, `ogl`, `lenis`) |

---

## 📁 Project structure

```
.
├── app/
│   └── [lang]/                 # Localized page routes (fr, en, es, …)
│   └── api/                    # Native API route handlers
│       ├── auth/               # signin, signup, refreshToken, logout
│       ├── products/           # WooCommerce catalog (products, categories, …)
│       ├── vendeur/            # Seller: products, orders, comments
│       ├── avatar/             # Digital-twin avatar CRUD
│       └── tryon/              # Virtual try-on
├── src/
│   ├── api/                    # Client-side hooks & axios instances (MyAxios)
│   ├── compat/                 # react-router-dom shim (Link, useNavigate, …)
│   ├── i18n/                   # react-i18next shim + locale helpers
│   ├── locales/                # Translation files (per language)
│   ├── components/             # UI (layout, shop, vendeur, react-bits)
│   ├── server/                 # DB, auth, services (woo/wp/avatar/tryon), helpers
│   ├── store/                  # Zustand stores (user, filters)
│   └── views/                  # Page components rendered by app routes
├── config/navigation.ts        # Role-based + guest navigation
├── middleware.ts               # Language rewrite, route guards, API CORS
└── .env
```

### Architecture notes

- **Compatibility shims.** `react-router-dom` and `react-i18next` are aliased (via `tsconfig` paths) to local shims so the migrated code keeps its original imports while running on the App Router.
- **Middleware** does three jobs: rewrites unprefixed paths to the default language (`fr`), guards protected routes by role (`/vendeur/**` → `vendeur`, `/essayage/**` → `acheteur`, `/profile`/`/compte` → any authenticated), and applies **CORS** to `/api/*` (including preflight).
- **API layer.** Route handlers are thin wrappers over service modules (`wooService`, `wpService`, `avatarService`, `tryonService`). No Express.

---

## 🚀 Getting started

### Prerequisites

- **Node.js 20+**
- npm
- A PostgreSQL database (e.g. Supabase)
- WooCommerce store with REST API keys, plus Cloudinary, Gemini, and Stripe accounts

### 1. Install dependencies

```bash
npm install
```

This project uses react-bits WebGL components that require peer libraries:

```bash
npm i three   # LiquidEther (aurora background)
npm i ogl     # CircularGallery
npm i lenis   # ScrollStack (smooth scroll)
```

### 2. Configure environment

Create a `.env` file in the project root (see the table below).

### 3. Run the dev server

```bash
npm run dev
```

App runs on **http://localhost:3039**.

---

## 🔐 Environment variables

> `NEXT_PUBLIC_*` variables are exposed to the browser and inlined at build time — never put secrets there. Everything else is server-only. Never commit `.env`.

### Public (client-safe)

| Variable | Example | Notes |
|----------|---------|-------|
| `NEXT_PUBLIC_SESYNC_URL` | `/api` | App's own API base. Keep it **relative** so calls are always same-origin (no CORS). |
| `NEXT_PUBLIC_SHOP_URL` | `` | Public storefront / WooCommerce site URL. |

### Server-only (secret)

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | Postgres connection string. URL-encode special chars (e.g. `@` → `%40`). |
| `JWT_SECRET` | Signs the access token (15h). |
| `REFRESH_TOKEN_SECRET` | Signs the refresh token (7d). |
| `WOO_BASE_URI` | WooCommerce base, e.g. ``. |
| `WOO_CLIENT_ID` | WooCommerce consumer key (`ck_…`). |
| `WOO_SECRET_KEY` | WooCommerce consumer secret (`cs_…`). |
| `GEMINI_API_KEY` | Google Gemini (avatar analysis + generation). |
| `CLOUDINARY_CLOUD_NAME` / `CLOUDINARY_API_KEY` / `CLOUDINARY_API_SECRET` | Cloudinary media storage. |
| `STRIPE_SECRET_KEY` | Stripe checkout sessions. |
| `ALLOWED_ORIGIN` | Comma-separated CORS allowlist, e.g. `localhost:5173`. Leave empty in dev to reflect any origin. |

---

## 📜 Scripts

```bash
npm run dev      # Start dev server on port 3039
npm run build    # Production build
npm run start    # Run the production build
npm run lint     # Lint
```

---

## 🛡️ Auth & roles

- Sign-in issues an `accessToken` (15h) and `refreshToken` (7d) as cookies, and returns the user + JWT.
- Sign-up creates the account, then the client auto-signs-in to obtain the token.
- `middleware.ts` reads the `accessToken` cookie, decodes the JWT payload, and redirects to `/{lang}/connection` on missing / expired / wrong-role access.

| Route | Access |
|-------|--------|
| `/vendeur/**` | `vendeur` |
| `/essayage/**` | `acheteur` |
| `/profile`, `/compte` | any authenticated user |
| everything else | public |

---

## ☁️ Deployment (Vercel)   only for now 

1. Import the repo into Vercel.
2. Add all environment variables under **Settings → Environment Variables** (Production + Preview). Keep secrets **without** the `NEXT_PUBLIC_` prefix.
3. Set `NEXT_PUBLIC_SESYNC_URL=/api` (relative — resolves to the deployed domain's own API).
4. Deploy. Changing an env var later requires a **redeploy** (`NEXT_PUBLIC_*` values are baked into the build).

---

## ⚠️ Notes & gotchas

- **Same-origin API.** Keep `r=/api`; an absolute `localhost` URL causes cross-origin (CORS) failures and breaks in production.
- **react-bits without shadcn.** Do not add these components via the shadcn CLI — it assumes Tailwind v4 and rewrites `src/styles/index.css`, breaking the v3 build. Copy the component files directly (or use `jsrepo`).
- **WooCommerce REST.** If you hit `rest_no_route`, check WordPress permalinks (set to "Post name") and that the `wc/v3` namespace isn't disabled by a security plugin.
- **Orders are store-wide.** WooCommerce doesn't scope orders per seller without a multi-vendor plugin.
- **Secrets rotation.** If any key was ever committed or shared, rotate it (Supabase password, Woo `ck`/`cs`, Gemini, Cloudinary, Stripe).

---

## 📄 License

Proprietary — © Skoleom. All rights reserved.