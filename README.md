# Next.js + Supabase SaaS Boilerplate

Production-ready starter for SaaS apps built on Next.js, Supabase, Stripe, Tailwind CSS, and TanStack Query.

## Stack

- **Next.js 15** — App Router, React Server Components, `async` request APIs
- **React 19**
- **TypeScript 5**
- **Supabase** — `@supabase/ssr` with the `getAll`/`setAll` cookie pattern
- **Stripe** — subscriptions, Billing Portal, signed + idempotent webhooks
- **Tailwind CSS 4** — CSS-first, `@theme` tokens, no config file
- **shadcn/ui** — Radix + Tailwind components
- **TanStack Query 5** — client state, auth-aware invalidation
- **Zod** — runtime-validated environment schema
- **ESLint 9** — flat config
- **Vercel Analytics + Speed Insights**

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy environment variables and fill them in:

   ```bash
   cp .env.sample .env.local
   ```

3. Apply database migrations (requires the Supabase CLI):

   ```bash
   supabase db push
   ```

   Or run the SQL under `supabase/migrations/` against your database directly.

4. Regenerate Supabase types after schema changes:

   ```bash
   supabase gen types typescript --project-id <id> --schema public > lib/types/supabase.ts
   ```

5. Start the dev server:

   ```bash
   npm run dev
   ```

## Scripts

| Command              | What it does                        |
| -------------------- | ----------------------------------- |
| `npm run dev`        | Start the dev server                |
| `npm run build`      | Production build                    |
| `npm start`          | Serve the production build          |
| `npm run lint`       | ESLint                              |
| `npm run typecheck`  | `tsc --noEmit`                      |

## Project layout

- `/app` — App Router pages, layouts, route handlers
- `/components` — UI components (shadcn + app-specific)
- `/lib` — Shared logic: `env.ts`, `supabase/`, `actions/`, `utils.ts`
- `/public` — Static assets (including markdown docs rendered at `/documentation`)
- `/supabase/migrations` — Database migrations

## Security

- Stripe webhook verifies signatures and is idempotent (processed event IDs stored in `stripe_events`).
- Checkout and billing-portal server actions re-verify the authenticated user server-side — the client never supplies the email or customer ID used against Stripe.
- Auth callback refuses any `next` parameter that isn't a single-leading-slash relative path.
- `/documentation` reads local markdown files with a slug whitelist and renders through `react-markdown` + `rehype-sanitize`.
- CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Permissions-Policy, Referrer-Policy configured in `next.config.mjs`.
- Service-role key is imported via `"server-only"` in `lib/supabase/admin.ts`.

## Environment variables

See `.env.sample`. All variables are validated at boot via `lib/env.ts` — a missing or malformed value is a hard startup error.

## Customization

- **Pricing**: set `NEXT_PUBLIC_STRIPE_PRICE_ID_PRO` in `.env.local`, then edit `components/subscription/price.tsx`.
- **Theme tokens**: edit the CSS variables in `app/globals.css` (`:root` / `.dark`).
- **SEO**: `components/SEO.tsx`.
- **Protected routes**: `lib/constant/index.ts`.
