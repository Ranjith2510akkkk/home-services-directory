# Project instructions

Read `docs/product-spec.md`, `docs/progress.md`, and `docs/build-plan.md` first.

This repository is currently a local prototype. Do not describe development approval as real business verification. Do not deploy the unauthenticated local console. Preserve the local/production boundary until Supabase accounts and authorization are tested.

Build one complete milestone at a time. Keep a clear working/pending list. Preserve the existing responsive visual direction. Use the current official Next.js and Supabase documentation for authentication integration. Never use browser-local storage to simulate real business submissions or messaging.

Do not commit `.env.local`, credentials, local SQLite data, user uploads, or build output. Do not create paid services or deploy without explicit user instruction. Add migrations and access-policy tests for backend changes. Keep demo data labelled and out of production indexing.

After meaningful changes, run relevant tests, typecheck, and build. Update progress and create a local Git checkpoint. Report setup dependencies honestly.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
