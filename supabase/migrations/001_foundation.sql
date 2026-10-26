-- REVIEW BEFORE APPLYING. New development project only.
-- Foundation for milestone 2; not yet connected to the running local prototype.
begin;
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default '',
  created_at timestamptz not null default now()
);
-- No client write policy for roles. Provision admins through a trusted server/operator.
create table public.admin_users (user_id uuid primary key references auth.users(id) on delete cascade);
create or replace function public.is_admin() returns boolean language sql stable security definer set search_path = '' as $$
  select exists(select 1 from public.admin_users where user_id = auth.uid());
$$;
revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to authenticated;

create table public.services (id bigint generated always as identity primary key, name text not null unique, slug text not null unique);
create table public.locations (id bigint generated always as identity primary key, city text not null, state_code text not null, slug text not null unique);
create table public.businesses (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id),
  name text not null check (length(name) between 2 and 100),
  slug text not null unique,
  description text not null default '',
  status text not null default 'pending' check(status in ('pending','approved','rejected')),
  is_demo boolean not null default false,
  created_at timestamptz not null default now()
);
-- Private contact data is kept out of public business rows.
create table public.business_contacts (
  business_id uuid primary key references public.businesses(id) on delete cascade,
  private_email text not null,
  private_address text
);
create table public.business_services (
  business_id uuid references public.businesses(id) on delete cascade,
  service_id bigint references public.services(id),
  primary key(business_id,service_id)
);
create table public.service_areas (
  business_id uuid references public.businesses(id) on delete cascade,
  location_id bigint references public.locations(id),
  primary key(business_id,location_id)
);
alter table public.profiles enable row level security;
alter table public.admin_users enable row level security;
alter table public.services enable row level security;
alter table public.locations enable row level security;
alter table public.businesses enable row level security;
alter table public.business_contacts enable row level security;
alter table public.business_services enable row level security;
alter table public.service_areas enable row level security;

create policy profile_self_read on public.profiles for select to authenticated using(id=auth.uid());
create policy profile_self_insert on public.profiles for insert to authenticated with check(id=auth.uid());
create policy profile_self_update on public.profiles for update to authenticated using(id=auth.uid()) with check(id=auth.uid());
create policy services_read on public.services for select to anon,authenticated using(true);
create policy locations_read on public.locations for select to anon,authenticated using(true);
create policy approved_businesses_read on public.businesses for select to anon using(status='approved' and not is_demo);
create policy business_member_read on public.businesses for select to authenticated using((status='approved' and not is_demo) or owner_id=auth.uid() or public.is_admin());
create policy owner_submit_pending on public.businesses for insert to authenticated with check(owner_id=auth.uid() and status='pending' and not is_demo);
-- Owners may edit only pending drafts. Approved edits need a reviewed revision workflow in milestone 3.
create policy owner_edit_pending on public.businesses for update to authenticated using(owner_id=auth.uid() and status='pending') with check(owner_id=auth.uid() and status='pending' and not is_demo);
create policy admin_review on public.businesses for update to authenticated using(public.is_admin()) with check(public.is_admin());
create policy contacts_private_read on public.business_contacts for select to authenticated using(exists(select 1 from public.businesses b where b.id=business_id and (b.owner_id=auth.uid() or public.is_admin())));
create policy contacts_private_insert on public.business_contacts for insert to authenticated with check(exists(select 1 from public.businesses b where b.id=business_id and b.owner_id=auth.uid()));
create policy contacts_private_update on public.business_contacts for update to authenticated using(exists(select 1 from public.businesses b where b.id=business_id and b.owner_id=auth.uid())) with check(exists(select 1 from public.businesses b where b.id=business_id and b.owner_id=auth.uid()));
create policy business_services_read on public.business_services for select to anon,authenticated using(exists(select 1 from public.businesses b where b.id=business_id));
create policy service_areas_read on public.service_areas for select to anon,authenticated using(exists(select 1 from public.businesses b where b.id=business_id));
-- Relationships deliberately have no client write policies yet. Add tested owner/admin
-- policies when implementing the transactional submission workflow. No permissive fallback.
insert into public.services(name,slug) values ('Plumbing','plumbing'),('HVAC','hvac'),('Electrical','electrical'),('Roofing','roofing'),('Appliance Repair','appliance-repair');
insert into public.locations(city,state_code,slug) values ('Houston','TX','houston'),('Dallas','TX','dallas'),('Phoenix','AZ','phoenix'),('Las Vegas','NV','las-vegas'),('Seattle','WA','seattle');
commit;
