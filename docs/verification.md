# Verification

## Completed during initial setup

- Installed project dependencies successfully using npm; package-lock.json retained.
- Five search/data tests passed: service/city intersection, trimmed case-insensitive specialty search, emergency filter, empty results, unique URLs and supported seed markets.
- Production build and TypeScript compilation passed.
- Local server responded successfully at http://127.0.0.1:3000.
- Desktop homepage visually reviewed at 1366 x 950.
- Mobile homepage and directory filters visually reviewed at 390 x 844. DOM width checks showed no horizontal overflow.
- Browser service/city search returned the expected Houston plumbing profile.
- Saved provider appeared on the shortlist after navigation.
- Submitted fictional data through the browser: record saved to SQLite and returned a reference ID.
- Pending record excluded from directory search.
- Local approval changed status and made the listing searchable and its profile available.
- Private test email absent from the public directory HTML response.
- Contact action accurately explained that the provider is fictional and no message was sent.
- Contact notice traps keyboard focus, supports Escape, and restores focus to its trigger.
- Local rejection excluded the listing from search and its former profile returned HTTP 404.
- Cross-origin local submission rejected with HTTP 403.
- Invalid same-origin submission rejected with HTTP 400.
- Standalone Git for Windows installed and verified at C:\Program Files\Git\cmd\git.exe (version 2.55.0.windows.5); Node.js 24.21.0 and npm 11.19.0 were already installed.

The fictional QA record remains rejected in the ignored local development database as a workflow example. Saved-provider preference remains in the QA browser only.

## Limits

Supabase integration and SQL migration were not run against a real project. Real login, user-to-user permission tests, email delivery, production load, hosted deployment, and production data protection are pending later milestones. The local console has no authentication and must not be exposed publicly. See README.md.
