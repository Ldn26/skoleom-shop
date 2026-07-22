
const axios = require('axios');
const { env } = require('../config/env');

// ── Client ────────────────────────────────────────────────────────────────────

function createWpClient() {
  const url = `${env.WOO_BASE_URI.replace(/\/+$/, '')}/wp-json/service/v1`;
  return axios.create({ baseURL: url, timeout: 10_000 });
}

const client = createWpClient();

// ── Cache in-memory (60s) ─────────────────────────────────────────────────────

const cache = new Map();
const CACHE_TTL_MS = 60_000;

function normalizeParams(query) {
  return Object.entries(query).reduce((acc, [k, v]) => {
    if (v !== undefined && v !== null && v !== '') acc[k] = v;
    return acc;
  }, {});
}

function buildCacheKey(path, params) {
  const qs = Object.entries(params)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => `${k}=${v}`)
    .join('&');
  return qs ? `wp:${path}?${qs}` : `wp:${path}`;
}

async function wpGet(path, query = {}) {
  const params = normalizeParams(query);
  const key = buildCacheKey(path, params);
  const cached = cache.get(key);

  if (cached && cached.expiresAt > Date.now()) return cached.data;

  try {
    const { data } = await client.get(path, { params });
    cache.set(key, { data, expiresAt: Date.now() + CACHE_TTL_MS });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const e = error;
      throw Object.assign(new Error(e.response?.data?.message ?? e.message), {
        status: e.response?.status ?? 500,
      });
    }
    throw error;
  }
}


function paginate(items, page, perPage) {
  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const start = (page - 1) * perPage;
  const end = start + perPage;

  return {
    data: items.slice(start, end),
    meta: {
      total,
      per_page: perPage,
      page,
      total_pages: totalPages,
      has_prev: page > 1,
      has_next: page < totalPages,
      prev_page: page > 1 ? page - 1 : null,
      next_page: page < totalPages ? page + 1 : null,
    },
  };
}

// ── Service ───────────────────────────────────────────────────────────────────

const wpService = {
  getVideos: (q = {}) => wpGet('videos', q),

  getVideoById: (id) => wpGet(`videos/id/${id}`),

  getVideoBySlug: (slug) => wpGet(`videos/${encodeURIComponent(slug)}`),

  getVideoCategories: async (q = {}) => {
    const { description, ...wpQuery } = q;
    const data = await wpGet('video-categories', wpQuery);
    const items = Array.isArray(data?.data)
      ? data.data
      : Object.values(data?.data ?? {});

    if (!description) return { ...data, data: items };

    const normalized = String(description).toLowerCase().trim();
    return {
      ...data,
      data: items.filter(
        (item) => item?.description?.toLowerCase().trim() === normalized,
      ),
    };
  },

  getVideosByProfile: async (slug, q = {}) => {
    const { page, per_page, limit, ...wpQuery } = q;
    const normalizedSlug = decodeURIComponent(slug).trim().toLowerCase();

    const data = await wpGet('videos', { ...wpQuery, limit: -1 });
    const all = Array.isArray(data?.data) ? data.data : [];

    const filtered = all.filter((item) => {
      const profile = item?.info_profile;
      if (!profile) return false;
      return (
        profile.slug?.toLowerCase()?.trim() === normalizedSlug ||
        profile.title?.toLowerCase()?.trim() === normalizedSlug
      );
    });

    const currentPage = Math.max(1, Number(page ?? 1));
    const resolvedPer = Math.max(1, Number(per_page ?? limit ?? filtered.length ?? 1));
    const { data: paginated, meta } = paginate(filtered, currentPage, resolvedPer);

    return { ...data, meta: { ...data?.meta, ...meta }, data: paginated };
  },

  getVideosAdvanced: async (q = {}) => {
    const { profile, category, search, page, per_page, limit, ...wpQuery } = q;

    const data = await wpGet('videos', { ...wpQuery, limit: -1 });
    let filtered = Array.isArray(data?.data) ? data.data : [];

    if (profile) {
      const n = String(profile).toLowerCase().trim();
      filtered = filtered.filter((item) => {
        const prof = item?.info_profile;
        if (!prof) return false;
        return prof.slug?.toLowerCase()?.trim() === n || prof.title?.toLowerCase()?.trim() === n;
      });
    }

    if (category) {
      const n = String(category).toLowerCase().trim();
      filtered = filtered.filter((item) =>
        (item?.genres ?? []).some(
          (g) => g?.slug?.toLowerCase()?.trim() === n || g?.name?.toLowerCase()?.trim() === n,
        ),
      );
    }

    if (search) {
      const n = String(search).toLowerCase().trim();
      filtered = filtered.filter((item) => item?.title?.toLowerCase()?.includes(n));
    }

    const currentPage = Math.max(1, Number(page ?? 1));
    const resolvedPer = Math.max(1, Number(per_page ?? limit ?? filtered.length ?? 1));
    const { data: paginated, meta } = paginate(filtered, currentPage, resolvedPer);

    return { ...data, meta: { ...data?.meta, ...meta }, data: paginated };
  },


  getTaxonomies: () => wpGet('taxonomies'),

  getTaxonomyTerms: (taxonomy, q = {}) =>
    wpGet(`taxonomies/${encodeURIComponent(taxonomy)}/terms`, q),

  getTaxonomyTerm: (taxonomy, term, q = {}) =>
    wpGet(`taxonomies/${encodeURIComponent(taxonomy)}/terms/${encodeURIComponent(term)}`, q),

  getArtistById: (id) => wpGet(`artists/id/${id}`),
  getArtistBySlug: (slug) => wpGet(`artists/${encodeURIComponent(slug)}`),
  getSiteOptions: () => wpGet('site/options'),

  getBrands: async () => {
    const first = await wpGet('products/brands', { per_page: 100, page: 1 });
    const allData = [...first.data];
    const totalPages = first.meta?.total_pages ?? 1;
    for (let page = 2; page <= totalPages; page++) {
      const next = await wpGet('products/brands', { per_page: 100, page });
      allData.push(...next.data);
    }
    return {
      status: first.status,
      meta: { ...first.meta, total_pages: 1, current_page: 1, per_page: allData.length },
      data: allData,
    };
  },
} 

module.exports = { wpService };