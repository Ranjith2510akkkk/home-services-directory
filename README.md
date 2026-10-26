# HomeServiceFinder

A locally runnable home-services directory starter, ready to continue in Antigravity.

## Start here

Open this folder in Antigravity. Run `npm run dev`, or double-click `START-PREVIEW.cmd`. Open the Local address printed in the terminal, normally http://127.0.0.1:3000.

Requirements: Node.js 24+, npm, and Git. All three were available on this computer during setup. Project packages have already been installed. If restoring elsewhere, run `npm ci` first.

## Working now

- Responsive homepage, service and city browsing, provider cards and detail pages.
- Keyword/specialty, city, service, and emergency-specialty filters; pagination and empty states.
- Saved providers stored in this browser. This is a preference feature, not account authentication.
- General homeowner checklist pages, clearly marked as editorial samples.
- A local listing submission form backed by SQLite, including validation and private email storage.
- A **local-only, unauthenticated test console** for approval and rejection. Approved test listings appear in search and have profiles. Rejected or pending ones remain out of public results.
- Fictional example profiles, no invented reviews or credentials, noindex throughout, and honest contact-preview states.

## Try the local workflow

1. Start the development server bound to `127.0.0.1`.
2. Open `/list-your-business` and submit fictional test information.
3. Check `/explore`: the pending listing must not appear.
4. Open `/local-admin` and approve it.
5. Search by its name or service/city and open its profile.
6. Reject it in the console: it must disappear from search and return 404 at its former profile URL.

Local submissions are stored in `.local/directory.sqlite`, excluded from Git. The console has no login and is **not suitable for deployment or network exposure**. Local write endpoints check same-origin requests and loopback hostnames. These checks are development safeguards, not a substitute for authentication. The provided start scripts bind only to loopback.

The production build intentionally disables local submission storage and the test console. Do not deploy this milestone as a live marketplace.

## Not implemented yet

Supabase account registration, email verification, password reset, secure ownership/claiming, persistent account shortlists, real quote delivery, uploads, reviews, editorial admin, CSV imports, analytics collection, maps, payments, and production deployment. There are no production integrations or external messages sent by this starter.

## Next milestone

Read `docs/ANTIGRAVITY-NEXT.md` and `docs/build-plan.md`. Add your development Supabase project settings to `.env.local` using `.env.example` as a guide. Keep secrets out of Git and chat messages.

`supabase/migrations/001_foundation.sql` is a **reviewable foundation migration**, not a fully integrated backend. It has restrictive policies for the first account/listing milestone. Review and apply it only to a new development project. Implement the Supabase data adapter and authentication before replacing SQLite.

## Checks

- `npm test` — search/filter and seed consistency tests.
- `npm run typecheck` — TypeScript checks (run after Next has generated its types).
- `npm run build` — production compilation.

Images in the hero are CSS illustrations; no image API is needed. Fonts use Google Fonts when available, with system fallbacks. Styling is plain CSS to keep the initial design dependency-light.

No hosting, database account, domain, API subscription, or billable resource was purchased or created.
