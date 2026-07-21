// /* ── Helpers partagés WooCommerce ── */

// import axios, { AxiosError, type AxiosInstance } from 'axios';
// import type { WpQueryParams } from '../types/wp';

// export function handleWooError(error: unknown): never {
//   if (axios.isAxiosError(error)) {
//     const e = error as AxiosError<{ message?: string }>;
//     throw Object.assign(new Error(e.response?.data?.message ?? e.message), {
//       status: e.response?.status ?? 500,
//     });
//   }
//   throw error;
// }

// export async function clientGet(client: AxiosInstance, path: string, params?: WpQueryParams) {
//   try {
//     const { data } = await client.get(path, { params });
//     return data;
//   } catch (e) {
//     handleWooError(e);
//   }
// }

// export async function clientPost(client: AxiosInstance, path: string, body?: unknown) {
//   try {
//     const { data } = await client.post(path, body);
//     return data;
//   } catch (e) {
//     handleWooError(e);
//   }
// }

// export async function clientPatch(client: AxiosInstance, path: string, body?: unknown) {
//   try {
//     const { data } = await client.patch(path, body);
//     return data;
//   } catch (e) {
//     handleWooError(e);
//   }
// }

// export async function clientDelete(client: AxiosInstance, path: string) {
//   try {
//     const { data } = await client.delete(path, { params: { force: true } });
//     return data;
//   } catch (e) {
//     handleWooError(e);
//   }
// }

// const BRAND_TTL_MS = 10 * 60 * 1000;
// const brandCache = new Map<string, { id: number; expiresAt: number }>();

// export function getCachedBrandId(slug: string): number | null {
//   const cached = brandCache.get(slug);
//   if (!cached) return null;
//   if (Date.now() > cached.expiresAt) {
//     brandCache.delete(slug);
//     return null;
//   }
//   return cached.id;
// }

// export function setCachedBrandId(slug: string, id: number): void {
//   brandCache.set(slug, { id, expiresAt: Date.now() + BRAND_TTL_MS });
// }

// export function isNumeric(value: string): boolean {
//   return /^\d+$/.test(value.trim());
// }

// export function normalizeBrand(
//   value: string | number,
// ): { type: 'id'; id: number } | { type: 'slug'; slug: string } {
//   if (typeof value === 'number') return { type: 'id', id: value };
//   const trimmed = value.trim().toLowerCase();
//   if (isNumeric(trimmed)) return { type: 'id', id: Number(trimmed) };
//   return { type: 'slug', slug: trimmed };
// }



/* ── Helpers partagés WooCommerce ── */

const axios = require('axios');

function handleWooError(error) {
  if (axios.isAxiosError(error)) {
    const e = error;
    throw Object.assign(new Error(e.response?.data?.message ?? e.message), {
      status: e.response?.status ?? 500,
    });
  }
  throw error;
}

async function clientGet(client, path, params) {
  try {
    const { data } = await client.get(path, { params });
    return data;
  } catch (e) {
    handleWooError(e);
  }
}

async function clientPost(client, path, body) {
  try {
    const { data } = await client.post(path, body);
    return data;
  } catch (e) {
    handleWooError(e);
  }
}

async function clientPatch(client, path, body) {
  try {
    const { data } = await client.patch(path, body);
    return data;
  } catch (e) {
    handleWooError(e);
  }
}

async function clientDelete(client, path) {
  try {
    const { data } = await client.delete(path, { params: { force: true } });
    return data;
  } catch (e) {
    handleWooError(e);
  }
}

const BRAND_TTL_MS = 10 * 60 * 1000;
const brandCache = new Map();

function getCachedBrandId(slug) {
  const cached = brandCache.get(slug);
  if (!cached) return null;
  if (Date.now() > cached.expiresAt) {
    brandCache.delete(slug);
    return null;
  }
  return cached.id;
}

function setCachedBrandId(slug, id) {
  brandCache.set(slug, { id, expiresAt: Date.now() + BRAND_TTL_MS });
}

function isNumeric(value) {
  return /^\d+$/.test(value.trim());
}

function normalizeBrand(value) {
  if (typeof value === 'number') return { type: 'id', id: value };
  const trimmed = value.trim().toLowerCase();
  if (isNumeric(trimmed)) return { type: 'id', id: Number(trimmed) };
  return { type: 'slug', slug: trimmed };
}

module.exports = {
  handleWooError,
  clientGet,
  clientPost,
  clientPatch,
  clientDelete,
  getCachedBrandId,
  setCachedBrandId,
  isNumeric,
  normalizeBrand,
};