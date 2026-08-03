// const axios = require('axios');

// function handleWooError(error) {
//   if (axios.isAxiosError(error)) {
//     const e = error;
//     throw Object.assign(new Error(e.response?.data?.message ?? e.message), {
//       status: e.response?.status ?? 500,
//     });
//   }
//   throw error;
// }

// async function clientGet(client, path, params) {
//   try {
//     const { data } = await client.get(path, { params });
//     return data;
//   } catch (e) {
//     handleWooError(e);
//   }
// }

// async function clientPost(client, path, body) {
//   try {
//     const { data } = await client.post(path, body);
//     return data;
//   } catch (e) {
//     handleWooError(e);
//   }
// }

// async function clientPatch(client, path, body) {
//   try {
//     const { data } = await client.patch(path, body);
//     return data;
//   } catch (e) {
//     handleWooError(e);
//   }
// }

// async function clientDelete(client, path) {
//   try {
//     const { data } = await client.delete(path, { params: { force: true } });
//     return data;
//   } catch (e) {
//     handleWooError(e);
//   }
// }

// const BRAND_TTL_MS = 10 * 60 * 1000;
// const brandCache = new Map();

// function getCachedBrandId(slug) {
//   const cached = brandCache.get(slug);
//   if (!cached) return null;
//   if (Date.now() > cached.expiresAt) {
//     brandCache.delete(slug);
//     return null;
//   }
//   return cached.id;
// }

// function setCachedBrandId(slug, id) {
//   brandCache.set(slug, { id, expiresAt: Date.now() + BRAND_TTL_MS });
// }

// function isNumeric(value) {
//   return /^\d+$/.test(value.trim());
// }

// function normalizeBrand(value) {
//   if (typeof value === 'number') return { type: 'id', id: value };
//   const trimmed = value.trim().toLowerCase();
//   if (isNumeric(trimmed)) return { type: 'id', id: Number(trimmed) };
//   return { type: 'slug', slug: trimmed };
// }

// module.exports = {
//   handleWooError,
//   clientGet,
//   clientPost,
//   clientPatch,
//   clientDelete,
//   getCachedBrandId,
//   setCachedBrandId,
//   isNumeric,
//   normalizeBrand,
// };

import axios, { AxiosInstance } from 'axios';

// ── Types ───────────────────────────────────────────────────────────────────

export type QueryParams = Record<string, unknown>;

export interface BrandCacheEntry {
  id: number;
  expiresAt: number;
}

export type NormalizedBrand = { type: 'id'; id: number } | { type: 'slug'; slug: string };

// ── Helper Functions ────────────────────────────────────────────────────────

export function handleWooError(error: unknown): never {
  if (axios.isAxiosError(error)) {
    const message = error.response?.data?.message ?? error.message;
    const status = error.response?.status ?? 500;
    throw Object.assign(new Error(message), { status });
  }
  throw error;
}

export async function clientGet<T = unknown>(
  client: AxiosInstance,
  path: string,
  params?: QueryParams,
): Promise<T> {
  try {
    const { data } = await client.get<T>(path, { params });
    return data;
  } catch (e) {
    return handleWooError(e);
  }
}

export async function clientPost<T = unknown>(
  client: AxiosInstance,
  path: string,
  body?: unknown,
): Promise<T> {
  try {
    const { data } = await client.post<T>(path, body);
    return data;
  } catch (e) {
    return handleWooError(e);
  }
}

export async function clientPatch<T = unknown>(
  client: AxiosInstance,
  path: string,
  body?: unknown,
): Promise<T> {
  try {
    const { data } = await client.patch<T>(path, body);
    return data;
  } catch (e) {
    return handleWooError(e);
  }
}

export async function clientDelete<T = unknown>(client: AxiosInstance, path: string): Promise<T> {
  try {
    const { data } = await client.delete<T>(path, { params: { force: true } });
    return data;
  } catch (e) {
    return handleWooError(e);
  }
}

// ── Cache in-memory (10m) ───────────────────────────────────────────────────

const BRAND_TTL_MS = 10 * 60 * 1000;
const brandCache = new Map<string, BrandCacheEntry>();

export function getCachedBrandId(slug: string): number | null {
  const cached = brandCache.get(slug);
  if (!cached) return null;
  if (Date.now() > cached.expiresAt) {
    brandCache.delete(slug);
    return null;
  }
  return cached.id;
}

export function setCachedBrandId(slug: string, id: number): void {
  brandCache.set(slug, { id, expiresAt: Date.now() + BRAND_TTL_MS });
}

export function isNumeric(value: string): boolean {
  return /^\d+$/.test(value.trim());
}

export function normalizeBrand(value: string | number): NormalizedBrand {
  if (typeof value === 'number') return { type: 'id', id: value };
  const trimmed = value.trim().toLowerCase();
  if (isNumeric(trimmed)) return { type: 'id', id: Number(trimmed) };
  return { type: 'slug', slug: trimmed };
}

export default {
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
