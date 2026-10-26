# Continue in Antigravity

Open this project folder in Antigravity. Read README.md first. To preview, run `npm run dev` and open the printed local URL. Node.js and npm are installed system-wide. Official Git for Windows is now installed at `C:\Program Files\Git\cmd\git.exe`. Restart Antigravity to pick up its updated PATH. If it still cannot find Git, configure that executable path in the editor's Git setting.

Paste this task into the agent:

> Continue HomeServiceFinder from this repository. Read AGENTS.md, docs/product-spec.md, docs/build-plan.md, and docs/progress.md. Preserve the current visual design and working filters. Inspect the local/production boundary. Implement milestone 2: Supabase authentication and authorized database-backed listings. First inspect .env.local without printing secrets, identify missing configuration names only, and explain what I need to set in my development Supabase project. Review the migration before using it. Do not pretend integration works when credentials are absent. Use current official Supabase server-side Next.js Auth guidance, test row-level security with multiple accounts, and keep the development console unavailable in production. Do not deploy or buy services. End with tests, build verification, an updated progress file and a Git checkpoint.

## What the owner needs to do next

Create a development project in their own Supabase account and enter the URL and publishable key in `.env.local`, based on `.env.example`. No credentials or account access were supplied in this session. Do not paste secret keys into prompts.

## Important

The current local approval flow is a developer aid, not a production administrator system. The foundation SQL is not a complete production schema for all future features. Do not expose this preview to a local network or internet before integrating and verifying authorization.
