-- Mi Mesa — add optional second price for items with two portion sizes
-- (e.g. "Az / Tam" or "1 Porsiyon / 1.5 Porsiyon").
--
-- Backwards compatible: existing rows keep their single `price`.
-- When `price_alt` is null, the menu shows one price as before.
-- When `price_alt` is set, the menu shows "{label} {price} ₺ / {alt_label} {alt_price} ₺".

alter table public.items
  add column if not exists price_label     text,
  add column if not exists price_alt       numeric(10,2),
  add column if not exists price_alt_label text;

-- Guardrail: if you set price_alt, you must also label both sides (otherwise
-- the menu would render "180 ₺ / 300 ₺" with no context).
alter table public.items
  drop constraint if exists items_price_alt_labels_required;
alter table public.items
  add constraint items_price_alt_labels_required
  check (
    price_alt is null
    or (price_label is not null and price_alt_label is not null)
  );
