# Ordered build plan

1. **Local visual and functional prototype**: Homepage; directory; profile; responsive filters; shortlist; local durable listing submission and development-only moderation. Clearly label samples. Complete.
2. **Supabase accounts and access**: Connect development project; review foundation migration; registration/verification/reset; safe first admin setup; backend data adapter; policy tests. Remove dependency on unauthenticated local console for real workflows.
3. **Production listing moderation and ownership**: Owner submissions; admin approval/rejection; material-edit reviews; claims and evidence; image uploads; many-to-many services and service areas.
4. **Secure enquiries**: Sender identity, recipient consent, authorization, provider dashboard, transactional email, rate limits and abuse handling. Test cross-account denial.
5. **Trust and publishing**: Real reviews, reports, expert biographies, article management and contributor moderation.
6. **Imports and measurement**: CSV validation/duplicates/preview, real analytics and engagement reporting.
7. **Launch**: SEO/canonical/structured-data controls, production Supabase project, reviewed migrations, access tests, email delivery, backups, preview deployment, domain, no demo data, final launch instruction.

For each stage: implement a complete user journey; test it in the browser; verify negative permission cases; typecheck and build; record known limits; commit locally.
