create table if not exists public.user_skill_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  skill_id text not null,
  mastered boolean not null default true,
  updated_at timestamptz not null default now(),
  primary key (user_id, skill_id),
  constraint user_skill_progress_skill_id_not_blank check (length(trim(skill_id)) > 0)
);

alter table public.user_skill_progress enable row level security;

create policy "Members can read their own skill progress"
on public.user_skill_progress
for select
to authenticated
using (auth.uid() = user_id);

create policy "Members can insert their own skill progress"
on public.user_skill_progress
for insert
to authenticated
with check (auth.uid() = user_id);

create policy "Members can update their own skill progress"
on public.user_skill_progress
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "Members can delete their own skill progress"
on public.user_skill_progress
for delete
to authenticated
using (auth.uid() = user_id);

create index if not exists user_skill_progress_updated_at_idx
on public.user_skill_progress (updated_at desc);
