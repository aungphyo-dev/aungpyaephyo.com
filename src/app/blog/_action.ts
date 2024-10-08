'use server';

import { sql } from '@/db/postgres';
import { unstable_noStore as noStore } from 'next/cache';

export async function increment(slug: string) {
  noStore();
  await sql`
    INSERT INTO views (slug, count)
    VALUES (${slug}, 1)
    ON CONFLICT (slug)
    DO UPDATE SET count = views.count + 1
  `;
}

export async function getBlogViews() {
  if (!process.env.POSTGRES_URL) {
    return [];
  }

  noStore();
  const views = await sql`
    SELECT *
    FROM views
  `;

  return views.map((view) => ({
    slug: view.slug,
    count: view.count,
  }));
}

export async function getViewsCount(): Promise<
  { slug: string; count: number }[]
> {
  if (!process.env.POSTGRES_URL) {
    return [];
  }
  noStore();
  return sql`
    SELECT slug, count
    FROM views
  `;
}
