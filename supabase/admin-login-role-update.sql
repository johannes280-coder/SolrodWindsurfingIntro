drop function if exists public.admin_list_members();

create or replace function public.admin_list_members()
returns table (id uuid, full_name text, email text, access_status text, is_admin boolean, created_at timestamptz, last_sign_in_at timestamptz)
language sql security definer set search_path = public
as $$
  select p.id, p.full_name, p.email, p.access_status, p.is_admin, p.created_at, u.last_sign_in_at
  from public.member_profiles p
  join auth.users u on u.id = p.id
  where public.current_member_is_admin()
  order by p.is_admin desc, p.created_at desc;
$$;

create or replace function public.admin_set_member_admin(target_user_id uuid, new_is_admin boolean)
returns void
language plpgsql security definer set search_path = public
as $$
begin
  if not public.current_member_is_admin() then raise exception 'Ikke tilladt'; end if;
  if not new_is_admin and exists (
    select 1 from public.member_profiles
    where id = target_user_id and lower(email) = 'johannes280@gmail.com'
  ) then raise exception 'Hovedadministratoren kan ikke miste rollen'; end if;
  update public.member_profiles
  set is_admin = new_is_admin,
      access_status = case when new_is_admin then 'approved' else access_status end
  where id = target_user_id;
end;
$$;

revoke all on function public.admin_list_members() from public;
revoke all on function public.admin_set_member_admin(uuid, boolean) from public;
grant execute on function public.admin_list_members() to authenticated;
grant execute on function public.admin_set_member_admin(uuid, boolean) to authenticated;
