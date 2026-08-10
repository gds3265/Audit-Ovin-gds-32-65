-- AUDIT OVIN GDS 32-65 — installation Supabase v1.1
-- A exécuter UNE FOIS dans le nouveau projet Supabase.
-- Cette table est dédiée à l'application Ovin et ne touche pas aux données Parage/Bovin.

create table if not exists public.ovin_backups (
  id text primary key,
  payload jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.ovin_backups enable row level security;

drop policy if exists "ovin public backup read" on public.ovin_backups;
drop policy if exists "ovin public backup insert" on public.ovin_backups;
drop policy if exists "ovin public backup update" on public.ovin_backups;

create policy "ovin public backup read"
on public.ovin_backups for select
to anon, authenticated
using (true);

create policy "ovin public backup insert"
on public.ovin_backups for insert
to anon, authenticated
with check (true);

create policy "ovin public backup update"
on public.ovin_backups for update
to anon, authenticated
using (true)
with check (true);

grant select, insert, update on public.ovin_backups to anon, authenticated;
