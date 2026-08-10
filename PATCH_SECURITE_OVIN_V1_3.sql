-- AUDIT OVIN GDS 32-65 — installation Supabase v1.3
-- Utilise les comptes Supabase Auth + la table public.profiles déjà utilisée par les autres applications.
-- La table ovin_backups reste totalement séparée des données bovines/parage.

create table if not exists public.ovin_backups (
  id text primary key,
  payload jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.ovin_backups enable row level security;

drop policy if exists "ovin public backup read" on public.ovin_backups;
drop policy if exists "ovin public backup insert" on public.ovin_backups;
drop policy if exists "ovin public backup update" on public.ovin_backups;
drop policy if exists "ovin authenticated backup read" on public.ovin_backups;
drop policy if exists "ovin authenticated backup insert" on public.ovin_backups;
drop policy if exists "ovin authenticated backup update" on public.ovin_backups;

create policy "ovin authenticated backup read"
on public.ovin_backups for select
to authenticated
using (true);

create policy "ovin authenticated backup insert"
on public.ovin_backups for insert
to authenticated
with check (true);

create policy "ovin authenticated backup update"
on public.ovin_backups for update
to authenticated
using (true)
with check (true);

revoke all on public.ovin_backups from anon;
grant select, insert, update on public.ovin_backups to authenticated;
