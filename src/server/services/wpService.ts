// const axios = require('axios');
// const { env } = require('../config/env');

// // ── Client ────────────────────────────────────────────────────────────────────

// function createWpClient() {
//   const url = `${env.WOO_BASE_URI.replace(/\/+$/, '')}/wp-json/service/v1`;
//   return axios.create({ baseURL: url, timeout: 10_000 });
// }

// const client = createWpClient();

// // ── Cache in-memory (60s) ─────────────────────────────────────────────────────

// const cache = new Map();
// const CACHE_TTL_MS = 60_000;

// function normalizeParams(query) {
//   return Object.entries(query).reduce((acc, [k, v]) => {
//     if (v !== undefined && v !== null && v !== '') acc[k] = v;
//     return acc;
//   }, {});
// }

// function buildCacheKey(path, params) {
//   const qs = Object.entries(params)
//     .sort(([a], [b]) => a.localeCompare(b))
//     .map(([k, v]) => `${k}=${v}`)
//     .join('&');
//   return qs ? `wp:${path}?${qs}` : `wp:${path}`;
// }

// async function wpGet(path, query = {}) {
//   const params = normalizeParams(query);
//   const key = buildCacheKey(path, params);
//   const cached = cache.get(key);

//   if (cached && cached.expiresAt > Date.now()) return cached.data;

//   try {
//     const { data } = await client.get(path, { params });
//     cache.set(key, { data, expiresAt: Date.now() + CACHE_TTL_MS });
//     return data;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       const e = error;
//       throw Object.assign(new Error(e.response?.data?.message ?? e.message), {
//         status: e.response?.status ?? 500,
//       });
//     }
//     throw error;
//   }
// }

// // ── Service ───────────────────────────────────────────────────────────────────

// const wpService = {
//   getVideos: (q = {}) => wpGet('videos', q),

//   getVideoById: (id) => wpGet(`videos/id/${id}`),

//   getVideoBySlug: (slug) => wpGet(`videos/${encodeURIComponent(slug)}`),

//   getTaxonomies: () => wpGet('taxonomies'),

//   getTaxonomyTerms: (taxonomy, q = {}) =>
//     wpGet(`taxonomies/${encodeURIComponent(taxonomy)}/terms`, q),

//   getTaxonomyTerm: (taxonomy, term, q = {}) =>
//     wpGet(`taxonomies/${encodeURIComponent(taxonomy)}/terms/${encodeURIComponent(term)}`, q),

//   getArtistById: (id) => wpGet(`artists/id/${id}`),
//   getArtistBySlug: (slug) => wpGet(`artists/${encodeURIComponent(slug)}`),
//   getSiteOptions: () => wpGet('site/options'),

//   getBrands: async () => {
//     const first = await wpGet('products/brands', { per_page: 100, page: 1 });
//     const allData = [...first.data];
//     const totalPages = first.meta?.total_pages ?? 1;
//     for (let page = 2; page <= totalPages; page++) {
//       const next = await wpGet('products/brands', { per_page: 100, page });
//       allData.push(...next.data);
//     }
//     return {
//       status: first.status,
//       meta: { ...first.meta, total_pages: 1, current_page: 1, per_page: allData.length },
//       data: allData,
//     };
//   },
// }

// module.exports = { wpService };

import axios from 'axios';
import { env } from '../config/env';

// ── Types ───────────────────────────────────────────────────────────────────

export type QueryParams = Record<string, unknown>;

export interface CacheEntry<T> {
  data: T;
  expiresAt: number;
}

export interface PaginatedResponse<T> {
  status: string | number;
  data: T[];
  meta?: {
    total_pages?: number;
    current_page?: number;
    per_page?: number;
    total?: number;
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

// ── Client ────────────────────────────────────────────────────────────────────

function createWpClient() {
  const url = `${env.WOO_BASE_URI.replace(/\/+$/, '')}/wp-json/service/v1`;
  return axios.create({ baseURL: url, timeout: 10_000 });
}

const client = createWpClient();

// ── Cache in-memory (60s) ─────────────────────────────────────────────────────

const cache = new Map<string, CacheEntry<unknown>>();
const CACHE_TTL_MS = 60_000;

function normalizeParams(query: QueryParams): Record<string, string | number | boolean> {
  return Object.entries(query).reduce<Record<string, string | number | boolean>>((acc, [k, v]) => {
    if (v !== undefined && v !== null && v !== '') {
      acc[k] = v as string | number | boolean;
    }
    return acc;
  }, {});
}

function buildCacheKey(path: string, params: Record<string, string | number | boolean>): string {
  const qs = Object.entries(params)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => `${k}=${v}`)
    .join('&');
  return qs ? `wp:${path}?${qs}` : `wp:${path}`;
}

async function wpGet<T = unknown>(path: string, query: QueryParams = {}): Promise<T> {
  const params = normalizeParams(query);
  const key = buildCacheKey(path, params);
  const cached = cache.get(key);

  if (cached && cached.expiresAt > Date.now()) {
    return cached.data as T;
  }

  try {
    const { data } = await client.get<T>(path, { params });
    cache.set(key, { data, expiresAt: Date.now() + CACHE_TTL_MS });
    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message ?? error.message;
      const status = error.response?.status ?? 500;
      throw Object.assign(new Error(message), { status });
    }
    throw error;
  }
}

// ── Service ───────────────────────────────────────────────────────────────────

export const wpService = {
  getVideos: (q: QueryParams = {}) => wpGet('videos', q),

  getVideoById: (id: number | string) => wpGet(`videos/id/${id}`),

  getVideoBySlug: (slug: string) => wpGet(`videos/${encodeURIComponent(slug)}`),

  getTaxonomies: () => wpGet('taxonomies'),

  getTaxonomyTerms: (taxonomy: string, q: QueryParams = {}) =>
    wpGet(`taxonomies/${encodeURIComponent(taxonomy)}/terms`, q),

  getTaxonomyTerm: (taxonomy: string, term: string, q: QueryParams = {}) =>
    wpGet(`taxonomies/${encodeURIComponent(taxonomy)}/terms/${encodeURIComponent(term)}`, q),

  getArtistById: (id: number | string) => wpGet(`artists/id/${id}`),

  getArtistBySlug: (slug: string) => wpGet(`artists/${encodeURIComponent(slug)}`),

  getSiteOptions: () => wpGet('site/options'),

  getBrands: async <T = unknown>(): Promise<PaginatedResponse<T>> => {
    const first = await wpGet<PaginatedResponse<T>>('products/brands', { per_page: 100, page: 1 });
    const allData = [...(first.data || [])];
    const totalPages = first.meta?.total_pages ?? 1;

    for (let page = 2; page <= totalPages; page++) {
      const next = await wpGet<PaginatedResponse<T>>('products/brands', { per_page: 100, page });
      if (next.data) {
        allData.push(...next.data);
      }
    }

    return {
      ...first,
      status: first.status,
      meta: { ...first.meta, total_pages: 1, current_page: 1, per_page: allData.length },
      data: allData,
    };
  },
};
