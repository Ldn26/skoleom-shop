// import { NextResponse } from 'next/server';
// import wooModule from '@/server/services/wooService';
// import wpModule from '@/server/services/wpService';

// export const wooService = wooModule.wooService;
// export const wpService = wpModule.wpService;

// export async function run(fn: () => Promise<any>): Promise<Response> {
//   try {
//     return NextResponse.json(await fn());
//   } catch (err: any) {
//     return NextResponse.json({ error: err.message }, { status: err?.response?.status || 500 });
//   }
// }

// export function query(request: Request): Record<string, string> {
//   return Object.fromEntries(new URL(request.url).searchParams.entries());
// }

// export function buildParams(q: any) {
//   const { page, limit, per_page, offset, ...rest } = q;
//   const p = Math.max(1, Number(page) || 1);
//   const pp = Math.max(1, Number(limit ?? per_page) || 50);
//   return { ...rest, page: p, paged: p, per_page: pp, limit: pp, offset: (p - 1) * pp };
// }

// export function injectUserMeta(body: any, userId?: number | string) {
//   if (!userId) return body;
//   const existing = Array.isArray(body?.meta_data)
//     ? body.meta_data.filter((m: any) => m.key !== '_monetizer_user_id')
//     : [];
//   return { ...body, meta_data: [...existing, { key: '_monetizer_user_id', value: String(userId) }] };
// }




import { NextResponse } from 'next/server';
import axios from 'axios';
import wooModule from '@/server/services/wooService';
import wpModule from '@/server/services/wpService';
import { env } from './config/env';

// ── Generic HTTP helpers (unchanged) ─────────────────────────────────────────

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

// ── WooCommerce customers client — reuses the WOO_CLIENT_ID / WOO_SECRET_KEY ──
// you ALREADY have in .env. No WordPress Application Password needed.
// Note: this endpoint always creates the user with role "customer".

const wooUserClient = axios.create({
  baseURL: `${env.WOO_BASE_URI.replace(/\/+$/, '')}/wp-json/wc/v3`,
  timeout: 15_000,
  auth: {
    username: env.WOO_CLIENT_ID,
    password: env.WOO_SECRET_KEY,
  },
});

type CreateUserInput = {
  username: string;
  email: string;
  password: string;
  role?: string; // accepted for compatibility, but Woo customers are always "customer"
};

/**
 * Create a WooCommerce customer. Uses your existing Woo keys.
 * Pass the PLAINTEXT password — WordPress hashes it itself.
 * Idempotent: if the email already exists, looks the customer up and returns it.
 */
async function createUser({ username, email, password }: CreateUserInput) {
  if (!email || !password) {
    throw Object.assign(new Error('email and password are required'), { status: 400 });
  }

  // WP logins can't contain spaces; derive a stable one.
  const login = String(username ?? '').trim().replace(/\s+/g, '') || email.split('@')[0];

  try {
    const { data } = await wooUserClient.post('customers', {
      email,
      username: login,
      password,
    });
    return { id: data.id, username: data.username ?? login, email, role: 'customer' };
  } catch (error: any) {
    const data = error.response?.data;

    // Email already registered → fetch the existing customer so we can still link it.
    if (data?.code === 'registration-error-email-exists') {
      const { data: found } = await wooUserClient
        .get('customers', { params: { email } })
        .catch(() => ({ data: [] }));
      if (Array.isArray(found) && found[0]?.id) {
        return { id: found[0].id, username: found[0].username, email, role: 'customer' };
      }
    }

    throw Object.assign(new Error(data?.message ?? error.message), {
      status: error.response?.status ?? 500,
      code: data?.code,
    });
  }
}

/** Best-effort cleanup for the registration rollback path. */
async function deleteUser(id: number | string) {
  const { data } = await wooUserClient.delete(`customers/${id}`, {
    params: { force: true },
  });
  return data;
}

// ── Exports ───────────────────────────────────────────────────────────────────

export const wooService = wooModule.wooService;

export const wpService = {
  ...wpModule.wpService,
  createUser,
  deleteUser,
};