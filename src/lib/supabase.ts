import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const url = import.meta.env.PUBLIC_SUPABASE_URL;
const anonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!url || !anonKey) {
  throw new Error(
    'Missing Supabase environment variables. Copy .env.example to .env and fill PUBLIC_SUPABASE_URL and PUBLIC_SUPABASE_ANON_KEY.'
  );
}

export type Translated = { tr: string; en: string; ar: string };

export interface DbCategory {
  id: string;
  slug: string;
  name: Translated;
  tagline: Translated;
  description: Translated;
  cover: string | null;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface DbItem {
  id: string;
  slug: string;
  category_slug: string;
  name: Translated;
  description: Translated;
  price: number;
  currency: string;
  image: string | null;
  flags: string[];
  sort_order: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface Database {
  public: {
    Tables: {
      categories: { Row: DbCategory; Insert: Omit<DbCategory, 'id' | 'created_at' | 'updated_at'> & { id?: string }; Update: Partial<DbCategory> };
      items:      { Row: DbItem;     Insert: Omit<DbItem, 'id' | 'created_at' | 'updated_at'>     & { id?: string }; Update: Partial<DbItem> };
    };
  };
}

export const supabase: SupabaseClient<Database> = createClient<Database>(url, anonKey, {
  auth: { persistSession: false },
});
