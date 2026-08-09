create extension if not exists pgcrypto;

create table if not exists public.member_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  email text,
  access_status text not null default 'pending' check (access_status in ('pending', 'approved', 'blocked')),
  is_admin boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.member_profiles enable row level security;

create or replace function public.handle_new_member()
returns trigger
language plpgsql
security definer set search_path = public
as $$
declare
  admin_account boolean := lower(coalesce(new.email, '')) = 'johannes280@gmail.com';
begin
  insert into public.member_profiles (id, full_name, email, access_status, is_admin)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', split_part(coalesce(new.email, ''), '@', 1)),
    new.email,
    case when admin_account then 'approved' else 'pending' end,
    admin_account
  )
  on conflict (id) do update set email = excluded.email;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created_member_profile on auth.users;
create trigger on_auth_user_created_member_profile
  after insert or update of email on auth.users
  for each row execute procedure public.handle_new_member();

insert into public.member_profiles (id, full_name, email, access_status, is_admin)
select
  id,
  coalesce(raw_user_meta_data ->> 'full_name', split_part(coalesce(email, ''), '@', 1)),
  email,
  case when lower(coalesce(email, '')) = 'johannes280@gmail.com' then 'approved' else 'pending' end,
  lower(coalesce(email, '')) = 'johannes280@gmail.com'
from auth.users
on conflict (id) do update set email = excluded.email;

create or replace function public.current_member_is_admin()
returns boolean
language sql stable security definer set search_path = public
as $$
  select exists (
    select 1 from public.member_profiles
    where id = auth.uid() and is_admin and access_status = 'approved'
  );
$$;

drop policy if exists "members_read_own_profile" on public.member_profiles;
create policy "members_read_own_profile" on public.member_profiles
  for select to authenticated
  using (id = auth.uid() or public.current_member_is_admin());

create or replace function public.admin_list_members()
returns table (id uuid, full_name text, email text, access_status text, is_admin boolean, created_at timestamptz)
language sql security definer set search_path = public
as $$
  select p.id, p.full_name, p.email, p.access_status, p.is_admin, p.created_at
  from public.member_profiles p
  where public.current_member_is_admin()
  order by p.is_admin desc, p.created_at desc;
$$;

create or replace function public.admin_set_member_access(target_user_id uuid, new_status text)
returns void
language plpgsql security definer set search_path = public
as $$
begin
  if not public.current_member_is_admin() then raise exception 'Ikke tilladt'; end if;
  if new_status not in ('pending', 'approved', 'blocked') then raise exception 'Ugyldig status'; end if;
  if exists (select 1 from public.member_profiles where id = target_user_id and is_admin) then raise exception 'Administratoren kan ikke blokeres'; end if;
  update public.member_profiles set access_status = new_status where id = target_user_id;
end;
$$;

create or replace function public.admin_delete_member(target_user_id uuid)
returns void
language plpgsql security definer set search_path = public
as $$
begin
  if not public.current_member_is_admin() then raise exception 'Ikke tilladt'; end if;
  if exists (select 1 from public.member_profiles where id = target_user_id and is_admin) then raise exception 'Administratoren kan ikke slettes'; end if;
  delete from auth.users where id = target_user_id;
end;
$$;

revoke all on function public.admin_list_members() from public;
revoke all on function public.admin_set_member_access(uuid, text) from public;
revoke all on function public.admin_delete_member(uuid) from public;
grant execute on function public.admin_list_members() to authenticated;
grant execute on function public.admin_set_member_access(uuid, text) to authenticated;
grant execute on function public.admin_delete_member(uuid) to authenticated;

-- Gør en eksisterende konto til administrator, hvis den allerede er oprettet.
update public.member_profiles
set is_admin = true, access_status = 'approved'
where lower(email) = 'johannes280@gmail.com';
