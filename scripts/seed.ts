/**
 * Mi Mesa — Supabase seed script
 *
 * Reads the static seed data from src/data/menu.ts, downloads each image,
 * uploads it to the public `menu-images` storage bucket, and upserts the
 * category/item rows into Postgres.
 *
 * Run with: npm run seed
 *
 * Requires the following in .env at the project root:
 *   PUBLIC_SUPABASE_URL
 *   SUPABASE_SERVICE_ROLE_KEY     # bypasses RLS — never commit
 */

import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import { menuData } from '../src/data/menu';

const url = process.env.PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  console.error('Missing PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env');
  process.exit(1);
}

const admin = createClient(url, serviceKey, { auth: { persistSession: false } });
const BUCKET = 'menu-images';

async function migrateImage(sourceUrl: string, storagePath: string): Promise<string> {
  const res = await fetch(sourceUrl);
  if (!res.ok) {
    throw new Error(`fetch ${sourceUrl} → ${res.status} ${res.statusText}`);
  }
  const buffer = new Uint8Array(await res.arrayBuffer());

  const { error: uploadError } = await admin.storage.from(BUCKET).upload(storagePath, buffer, {
    contentType: 'image/jpeg',
    upsert: true,
    cacheControl: '31536000',
  });
  if (uploadError) {
    throw new Error(`upload ${storagePath}: ${uploadError.message}`);
  }

  const { data } = admin.storage.from(BUCKET).getPublicUrl(storagePath);
  return data.publicUrl;
}

async function seedCategories() {
  console.log(`\nSeeding ${menuData.categories.length} categories…`);
  for (const c of menuData.categories) {
    let cover: string | null = null;
    if (c.cover) {
      process.stdout.write(`  ↳ ${c.slug.padEnd(22)} image… `);
      cover = await migrateImage(c.cover, `categories/${c.slug}.jpg`);
      process.stdout.write('ok\n');
    }
    const { error } = await admin.from('categories').upsert(
      {
        slug: c.slug,
        name: c.name,
        tagline: c.tagline,
        description: c.description,
        cover,
        sort_order: c.order,
      },
      { onConflict: 'slug' }
    );
    if (error) throw new Error(`upsert category ${c.slug}: ${error.message}`);
    console.log(`  ✓ ${c.slug}`);
  }
}

async function seedItems() {
  console.log(`\nSeeding ${menuData.items.length} items…`);
  for (const it of menuData.items) {
    let image: string | null = null;
    if (it.image) {
      process.stdout.write(`  ↳ ${it.slug.padEnd(28)} image… `);
      image = await migrateImage(it.image, `items/${it.slug}.jpg`);
      process.stdout.write('ok\n');
    }
    const { error } = await admin.from('items').upsert(
      {
        slug: it.slug,
        category_slug: it.category,
        name: it.name,
        description: it.description,
        price: it.price,
        currency: it.currency,
        image,
        flags: it.flags ?? [],
        sort_order: 0,
        is_published: true,
      },
      { onConflict: 'slug' }
    );
    if (error) throw new Error(`upsert item ${it.slug}: ${error.message}`);
    console.log(`  ✓ ${it.slug}`);
  }
}

async function main() {
  console.log(`Connecting to ${url}`);
  await seedCategories();
  await seedItems();
  console.log('\nDone.');
}

main().catch((err) => {
  console.error('\nSeed failed:');
  console.error(err);
  process.exit(1);
});
