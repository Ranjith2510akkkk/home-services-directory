# Product specification

## Purpose

A U.S. home-services directory where homeowners discover and compare professionals, and businesses or independent tradespeople create and claim free profiles. Later phases add expert guides and qualified enquiries; monetization follows demonstrated value.

## Markets

Houston, Dallas, Phoenix, Las Vegas, Seattle. Initial services: Plumbing, HVAC, Electrical, Roofing, Appliance Repair. Database-driven categories and locations must allow expansion and many-to-many service/coverage relationships.

## Design

Professional, welcoming, mobile-friendly. White and warm cream surfaces, dark navy text, forest-teal accents, readable typography, intentional spacing. Clear service/location search, useful cards, accessible filters. Distinct demo labels. Never fabricate reviews, credentials, verification, prices, or live availability.

## Roles and journeys

Homeowner: search, filter, compare profiles, save, and submit a consent-based enquiry to a chosen provider.

Business owner: verified account, moderated free listing, service areas, specialties, permitted contact information, photos, ownership claims, enquiries and real engagement data. Separate a business from an individual professional. Private residential addresses must not be exposed.

Administrator: review listings, material edits, claims, verification evidence, reviews, reported content, contributor articles, and validated CSV imports. Keep audit logs. Account owners cannot assign themselves admin roles.

## Production backend

Next.js App Router and TypeScript. Supabase PostgreSQL, Auth and Storage. PostgreSQL search initially; PostGIS when accurate geographic queries are implemented. Simple editorial management first; no mandatory external CMS. Start with CSS styling already in this repository. Add Tailwind only if it improves maintainability without redesigning working screens.

Database entities: profiles/users, businesses, services, locations, business_services, service_areas, licenses, claims, reviews, saved providers, articles, leads, audit logs, and future subscriptions.

## Trust and privacy

Profile claimed and license checked are separate statuses. Store license jurisdiction, checked date, source, and evidence. Publishing or editing such evidence requires admin permissions. Reviews must be genuine, authenticated, reportable, and consistently moderated. A verified-review label requires supporting evidence.

Collect explicit consent identifying the enquiry recipient; do not broadcast contact data. Restrict leads to their sender, intended business owner, and authorized administrator. Restrict uploads, validate server-side, rate-limit actions, and prevent role escalation.

## Editorial and SEO

Public directory pages server-rendered with unique metadata, canonical URLs, breadcrumbs and accurate structured data. Approved indexable pages only in sitemaps. No indexing private data, internal search or duplicate filters. Quality gates before indexing city/service pages. Explained methodology for editorial rankings and clearly labelled sponsorships. Expert review and official sources for technical, cost or regulatory guidance. No automated contributor publication or followed-link marketplace.

## Exclusions at first launch

No scraping Maps or copying competitor listings. No payments, complex matching, live maps, hosted search or public chatbot until needed. No billable services or publication without user instruction.
