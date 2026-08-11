create table if not exists public.wind_alert_preferences (
  user_id uuid primary key references auth.users(id) on delete cascade,
  enabled boolean not null default false,
  min_wind_ms numeric(4,1) not null default 4 check (min_wind_ms >= 0 and min_wind_ms <= 40),
  max_wind_ms numeric(4,1) not null default 8 check (max_wind_ms >= 0 and max_wind_ms <= 40),
  winter_start_hour smallint not null default 8 check (winter_start_hour between 0 and 23),
  winter_end_hour smallint not null default 16 check (winter_end_hour between 1 and 24),
  summer_start_hour smallint not null default 8 check (summer_start_hour between 0 and 23),
  summer_end_hour smallint not null default 20 check (summer_end_hour between 1 and 24),
  last_notified_key text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (min_wind_ms <= max_wind_ms),
  check (winter_start_hour < winter_end_hour),
  check (summer_start_hour < summer_end_hour)
);

create table if not exists public.push_subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  endpoint text not null unique,
  subscription jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists push_subscriptions_user_id_idx on public.push_subscriptions(user_id);
alter table public.wind_alert_preferences enable row level security;
alter table public.push_subscriptions enable row level security;

create policy "members_manage_own_wind_alerts" on public.wind_alert_preferences
  for all to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "members_manage_own_push_subscriptions" on public.push_subscriptions
  for all to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());

grant select, insert, update, delete on public.wind_alert_preferences to authenticated;
grant select, insert, update, delete on public.push_subscriptions to authenticated;
