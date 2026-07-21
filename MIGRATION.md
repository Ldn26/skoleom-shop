# Skoleom Univershop — Next.js 16 migration

Single Next.js 16 (App Router) application. The former Vite frontend and the Express
backend now live in one project: pages under `app/[lang]/**`, the API under `app/api/**`.

## Run

```bash
npm install
cp .env.example .env      # fill in values
npm run dev               # http://localhost:3039
```

Production:

```bash
npm run build
npm run start
```

A Node.js host is required (Sequelize/Postgres, Cloudinary, Replicate, and the in-process
API server are not compatible with edge/serverless-only targets).

## Architecture

- **Routing** — App Router with an `app/[lang]/**` tree that mirrors the original React
  Router map one-to-one. `middleware.ts` rewrites unprefixed paths to the default language
  (`fr`) internally, so both `/catalogue` and `/en/catalogue` resolve exactly as before.
- **Router compatibility** — `src/compat/react-router-dom.tsx` re-implements `useNavigate`,
  `useLocation`, `useParams`, `useSearchParams`, `Link`, `NavLink`, and `matchPath` on top of
  `next/navigation`. It is aliased in `next.config.ts` and `tsconfig.json`, so every existing
  component that imports `react-router-dom` keeps working unchanged.
- **App shell** — `src/app-shell/Providers.tsx` reproduces the original provider order
  (Helmet, React Query, Theme, Accessibility, SiteChoices, Language) and the i18n bootstrap.
  `GlobalChrome.tsx` holds the always-on overlays; `SiteChrome.tsx` reproduces the header/
  footer layout including the immersive-page behavior.
- **Rendering** — server components render the document shell, metadata, and layout; each
  page is a thin client boundary that renders the original page component. The i18n gate keeps
  page rendering client-side (matching the prior SPA), which also avoids SSR `window` issues.
- **API** — `app/api/[...slug]/route.ts` runs the original Express app in-process (started
  once on an ephemeral local port) and proxies every request to it. All controllers,
  middleware, Sequelize models, cookies, and error handling run unchanged.
- **Auth** — route protection moved to `middleware.ts` using the `accessToken` cookie
  (`/compte`, `/essayage`, and role-gated `/admin`, `/vendeur/dashboard`). The API proxy
  forwards that cookie as `Authorization: Bearer` so the existing `authMiddleware` still
  performs the cryptographic verification.
- **Env** — `import.meta.env.VITE_*` → `process.env.NEXT_PUBLIC_*` (client) and plain server
  vars. See `.env.example`.

## One activation step for cookie auth

Login/refresh currently return the access token in the response body (used client-side).
To fully activate middleware gating, set the token as a cookie in the two auth controllers:

```js
res.cookie('accessToken', token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
  maxAge: 15 * 60 * 60 * 1000,
});
```

Add this next to each existing `res.cookie('refreshToken', ...)` in
`src/server/controllers/userController.js` and `src/server/controllers/acheteurController.js`,
and clear it wherever `refreshToken` is cleared on logout.

## Follow-ups (next stage)

- Multipart uploads (Cloudinary) and long-running Replicate jobs work through the proxy on a
  Node host; for serverless deployment they should be rewritten as native route handlers.
- Optional: migrate `react-helmet-async` (still used by `RouteSeo` and `StaticPages`) to the
  native Next Metadata API for per-route SSR SEO.
- Optional: promote high-traffic pages to server components for full SSR.
