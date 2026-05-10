-- Mi Mesa — initial schema
-- Categories + items with JSONB translations, RLS for public read,
-- and a public storage bucket for menu images.

-- ============================================================
-- Tables
-- ============================================================

create table if not exists public.categories (
  id          uuid primary key default gen_random_uuid(),
  slug        text unique not null,
  name        jsonb not null,                       -- { tr, en, ar }
  tagline     jsonb not null,
  description jsonb not null,
  cover       text,                                 -- public URL
  sort_order  int  not null default 0,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create table if not exists public.items (
  id            uuid primary key default gen_random_uuid(),
  slug          text unique not null,
  category_slug text not null
                references public.categories(slug)
                on update cascade on delete restrict,
  name          jsonb not null,
  description   jsonb not null,
  price         numeric(10,2) not null,
  currency      text  not null default 'TRY',
  image         text,                              -- public URL
  flags         text[] not null default '{}',
  sort_order    int  not null default 0,
  is_published  boolean not null default true,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

create index if not exists items_category_slug_idx on public.items(category_slug);
create index if not exists items_published_idx     on public.items(is_published) where is_published = true;
create index if not exists categories_sort_idx     on public.categories(sort_order);
create index if not exists items_sort_idx          on public.items(sort_order);

-- ============================================================
-- updated_at trigger
-- ============================================================

create or replace function public.touch_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists categories_touch on public.categories;
create trigger categories_touch
  before update on public.categories
  for each row execute function public.touch_updated_at();

drop trigger if exists items_touch on public.items;
create trigger items_touch
  before update on public.items
  for each row execute function public.touch_updated_at();

-- ============================================================
-- Row Level Security
-- ============================================================

alter table public.categories enable row level security;
alter table public.items      enable row level security;

-- Public can read all categories
drop policy if exists "categories public read" on public.categories;
create policy "categories public read"
  on public.categories
  for select
  to anon, authenticated
  using (true);

-- Public can read only published items
drop policy if exists "items public read" on public.items;
create policy "items public read"
  on public.items
  for select
  to anon, authenticated
  using (is_published = true);

-- NOTE: write policies (insert/update/delete) are intentionally absent.
-- The seed and admin operations use the service_role key which bypasses RLS.
-- When the admin panel ships we will add scoped write policies for
-- authenticated admins.

-- ============================================================
-- Storage bucket for menu images
-- ============================================================

insert into storage.buckets (id, name, public)
values ('menu-images', 'menu-images', true)
on conflict (id) do update set public = excluded.public;
