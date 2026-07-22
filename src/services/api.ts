import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type InternalAxiosRequestConfig,
} from 'axios';
import offlinePublicSeed from '../data/offlinePublicSeed.json';
import { STORAGE_KEYS } from '../constants/app';
import { getStorageItem, removeStorageItem, setStorageItem } from '../utils/browserStorage';
import type {
  AuthResponse,
  Cart,
  CartItem,
  LoginPayload,
  Order,
  RegisterPayload,
  User,
} from '../types';


export function usesHttpBackend(): boolean {
  const url = process.env.NEXT_PUBLIC_API_URL;
  return typeof url === 'string' && url.trim().length > 0;
}

const API_BASE: string = process.env.NEXT_PUBLIC_API_URL || '/api/v1';
const API_TIMEOUT_MS = 15_000;

const api: AxiosInstance = axios.create({
  baseURL: API_BASE,
  timeout: API_TIMEOUT_MS,
});

/* ------------------------------------------------------------------------- */
/* Intercepteurs : injection du token + rafraîchissement automatique         */
/* ------------------------------------------------------------------------- */

// Injecte le Bearer token sur chaque requête sortante si présent
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = getStorageItem(STORAGE_KEYS.access);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Type interne pour marquer une requête déjà rejouée après refresh
type RetryableRequest = AxiosRequestConfig & { _retry?: boolean };

// Rejoue automatiquement la requête après rafraîchissement du token (HTTP 401)
api.interceptors.response.use(
  (res) => res,
  async (error: AxiosError) => {
    const original = error.config as RetryableRequest | undefined;
    if (error.response?.status !== 401 || !original || original._retry) {
      return Promise.reject(error);
    }
    original._retry = true;
    const refreshToken = getStorageItem(STORAGE_KEYS.refresh);
    if (!refreshToken) return Promise.reject(error);

    try {
      const { data } = await axios.post(`${API_BASE}/auth/refresh`, { refreshToken });
      const newToken: string = data.data.accessToken;
      setStorageItem(STORAGE_KEYS.access, newToken);
      if (original.headers) {
        original.headers.Authorization = `Bearer ${newToken}`;
      }
      return api(original);
    } catch {
      removeStorageItem(STORAGE_KEYS.access);
      removeStorageItem(STORAGE_KEYS.refresh);
      return Promise.reject(error);
    }
  },
);

/* ------------------------------------------------------------------------- */
/* Mode hors-ligne : utilise le seed JSON quand aucun backend n'est défini   */
/* ------------------------------------------------------------------------- */

interface OfflineSeed {
  stats: Record<string, string>;
  brands: unknown[];
  businessUnitItems: Array<Record<string, unknown> & { category?: string }>;
  contents: Array<Record<string, unknown>>;
  capsules: Array<Record<string, unknown> & { contentId?: string; productId?: string }>;
  products: Array<Record<string, unknown> & { id?: string }>;
}

const seed = offlinePublicSeed as OfflineSeed;

/** Regroupe les business units offline par catégorie attendue par l'UI. */
function offlineGroupedBusinessUnits() {
  const byCategory = (cat: string) => seed.businessUnitItems.filter((u) => u.category === cat);
  return {
    satellites: byCategory('satellite'),
    platformInc: byCategory('platform'),
    nexusPark: byCategory('nexus'),
  };
}

/** Réponse offline simulant l'endpoint /ecosystem/business-units. */
function offlineBusinessUnitsResponse(params?: { category?: string }) {
  const filtered = params?.category
    ? seed.businessUnitItems.filter((b) => b.category === params.category)
    : [...seed.businessUnitItems];
  return {
    success: true,
    items: filtered,
    grouped: offlineGroupedBusinessUnits(),
  };
}

/** Réponse offline simulant l'endpoint paginé /content. */
function offlineContentList(params?: Record<string, unknown>) {
  let items = [...seed.contents];
  const category = params?.category as string | undefined;
  const type = params?.type as string | undefined;
  const featured = params?.featured;
  const search = (params?.search as string | undefined)?.toLowerCase();
  const limit = params?.limit !== undefined && params?.limit !== null ? Number(params.limit) : 24;
  const offset =
    params?.offset !== undefined && params?.offset !== null ? Number(params.offset) : 0;

  if (category) items = items.filter((c) => c.category === category);
  if (type) items = items.filter((c) => c.type === type);
  if (featured !== undefined) {
    const want = featured === true || featured === 'true';
    items = items.filter((c) => c.featured === want);
  }
  if (search) {
    items = items.filter((c) => {
      const inTitle = String(c.title ?? '')
        .toLowerCase()
        .includes(search);
      const inDesc = String(c.description ?? '')
        .toLowerCase()
        .includes(search);
      const genres = Array.isArray(c.genres) ? c.genres : [];
      const inGenres = genres.some((g: string) => String(g).toLowerCase().includes(search));
      return inTitle || inDesc || inGenres;
    });
  }

  return {
    success: true,
    total: items.length,
    items: items.slice(offset, offset + limit),
  };
}

/** Réponse offline simulant /content/:id avec ses capsules hydratées. */
function offlineContentDetail(id: string | undefined) {
  if (!id) return Promise.reject(new Error('MISSING_ID'));
  const content = seed.contents.find((c) => c.id === id);
  if (!content) return Promise.reject(new Error('NOT_FOUND'));

  const productById = Object.fromEntries(seed.products.map((p) => [p.id, p]));
  const capsules = seed.capsules
    .filter((cap) => cap.contentId === id)
    .map((cap) => ({ ...cap, product: productById[cap.productId as string] }));

  return Promise.resolve({ ...(content as object), capsules });
}

/* ------------------------------------------------------------------------- */
/* Endpoints publics                                                          */
/* ------------------------------------------------------------------------- */

/** API d'authentification : register / login / me / logout. */
export const authAPI = {
  register: (payload: RegisterPayload): Promise<AuthResponse> =>
    api.post('/auth/register', payload).then((r) => r.data.data),
  login: (payload: LoginPayload): Promise<AuthResponse> =>
    api.post('/auth/login', payload).then((r) => r.data.data),
  me: (): Promise<User> => api.get('/auth/me').then((r) => r.data.data),
  logout: () => api.post('/auth/logout'),
};

/** API des contenus : liste, mise en avant, détail. */
export const contentAPI = {
  list: (params?: Record<string, unknown>) =>
    usesHttpBackend()
      ? api.get('/content', { params }).then((r) => r.data)
      : Promise.resolve(offlineContentList(params)),
  featured: () =>
    usesHttpBackend()
      ? api.get('/content/featured').then((r) => r.data.items)
      : Promise.resolve(seed.contents.filter((c) => c.featured === true)),
  detail: (id: string | undefined) =>
    usesHttpBackend()
      ? api.get(`/content/${id}`).then((r) => r.data.data)
      : offlineContentDetail(id),
};

/** API des produits. */
export const productAPI = {
  list: (params?: Record<string, unknown>) => api.get('/products', { params }).then((r) => r.data),
  detail: (id: string) => api.get(`/products/${id}`).then((r) => r.data.data),
};

/** API des capsules interactives (overlay vidéo). */
export const capsuleAPI = {
  byContent: (contentId: string) =>
    api.get(`/capsules/by-content/${contentId}`).then((r) => r.data.items),
  click: (id: string) =>
    usesHttpBackend()
      ? api.post(`/capsules/${id}/click`).then((r) => r.data.data)
      : Promise.resolve({ id, ok: true }),
};

/** API panier + commandes. */
export const cartAPI = {
  get: (): Promise<Cart> => api.get('/orders/cart').then((r) => r.data.data),
  add: (payload: {
    productId: string;
    quantity: number;
    capsuleId?: string | null;
  }): Promise<Cart> => api.post('/orders/cart', payload).then((r) => r.data.data),
  update: (id: string, payload: Partial<CartItem>): Promise<Cart> =>
    api.patch(`/orders/cart/${id}`, payload).then((r) => r.data.data),
  remove: (id: string): Promise<Cart> => api.delete(`/orders/cart/${id}`).then((r) => r.data.data),
  clear: (): Promise<Cart> => api.delete('/orders/cart').then((r) => r.data.data),
  checkout: (payload: { paymentMethod: string }): Promise<Order> =>
    api.post('/orders/checkout', payload).then((r) => r.data.data),
  myOrders: (): Promise<Order[]> => api.get('/orders/me').then((r) => r.data.items),
};

/** API écosystème (business units / stats / brands). */
export const ecosystemAPI = {
  businessUnits: (params?: { category?: string }) =>
    usesHttpBackend()
      ? api.get('/ecosystem/business-units', { params }).then((r) => r.data)
      : Promise.resolve(offlineBusinessUnitsResponse(params)),
  stats: () =>
    usesHttpBackend()
      ? api.get('/ecosystem/stats').then((r) => r.data.data)
      : Promise.resolve(seed.stats),
  brands: () =>
    usesHttpBackend()
      ? api.get('/ecosystem/brands').then((r) => r.data.items)
      : Promise.resolve(seed.brands),
};

/** API analytics (tracking + dashboard admin). */
export const analyticsAPI = {
  track: (event: Record<string, unknown>) =>
    usesHttpBackend()
      ? api.post('/analytics/track', event).catch(() => null)
      : Promise.resolve(null),
  dashboard: () => api.get('/analytics/dashboard').then((r) => r.data.data),
};

/** API admin : récapitulatif des données globales. */
export const adminAPI = {
  overview: () => api.get('/admin/overview').then((r) => r.data.data),
};

export default api;
