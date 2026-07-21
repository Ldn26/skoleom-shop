import { NextResponse } from 'next/server';
import wooModule from '@/server/services/wooService';
import wpModule from '@/server/services/wpService';

export const wooService = wooModule.wooService;
export const wpService = wpModule.wpService;

export async function run(fn: () => Promise<any>): Promise<Response> {
  try {
    return NextResponse.json(await fn());
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: err?.response?.status || 500 });
  }
}

export function query(request: Request): Record<string, string> {
  return Object.fromEntries(new URL(request.url).searchParams.entries());
}

export function buildParams(q: any) {
  const { page, limit, per_page, offset, ...rest } = q;
  const p = Math.max(1, Number(page) || 1);
  const pp = Math.max(1, Number(limit ?? per_page) || 50);
  return { ...rest, page: p, paged: p, per_page: pp, limit: pp, offset: (p - 1) * pp };
}

export function injectUserMeta(body: any, userId?: number | string) {
  if (!userId) return body;
  const existing = Array.isArray(body?.meta_data)
    ? body.meta_data.filter((m: any) => m.key !== '_monetizer_user_id')
    : [];
  return { ...body, meta_data: [...existing, { key: '_monetizer_user_id', value: String(userId) }] };
}
