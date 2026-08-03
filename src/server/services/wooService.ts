

// const axios = require('axios');
// const { env } = require('../config/env');
// const {
//   clientGet,
//   clientPost,
//   clientPatch,
//   clientDelete,
//   normalizeBrand,
// } = require('../helpers/woohelper');



// const wooClient = axios.create({
//   baseURL: `${env.WOO_BASE_URI}/wp-json/wc/v3/`,
//   headers: {
//     Authorization: `Basic ${Buffer.from(
//       `${env.WOO_CLIENT_ID}:${env.WOO_SECRET_KEY}`,
//     ).toString('base64')}`,
//   },
// });

// // service/v1 — listes allégées avec meta (pagination, total, etc.)
// const serviceClient = axios.create({
//   baseURL: `${env.WOO_BASE_URI}/wp-json/service/v1/`,
// });

// const wooGet = (path, p) => clientGet(wooClient, path, p);
// const wooPost = (path, b) => clientPost(wooClient, path, b);
// const wooPatch = (path, b) => clientPatch(wooClient, path, b);
// const wooDelete = (path) => clientDelete(wooClient, path);
// const svcGet = (path, p) => clientGet(serviceClient, path, p);

// // ─────────────────────────────────────────────────────────────────────────────
// // Service
// // ─────────────────────────────────────────────────────────────────────────────

// const wooService = {
//   getProducts: (params = {}) => svcGet('products', params),

//   getProductsByIds: async (ids, params = {}) => {
//     const result = await wooGet('products', {
//       ...params,
//       include: ids.join(','),
//       per_page: ids.length,
//     });
//     // wc/v3 renvoie directement un tableau
//     return Array.isArray(result) ? result : (result?.data ?? []);
//   },


//   getProductsByBrand: async (brand, params = {}) => {
//     const parsed = normalizeBrand(brand);

//     if (parsed.type === 'slug') {
//       return svcGet('products', { ...params, brand: parsed.slug });
//     }

//     // ID numérique → wc/v3 (pas de meta pagination mais on garde la cohérence)
//     return wooGet('products', { ...params, brand: parsed.id });
//   },

//   getProductsByCategory: (categorySlug, params = {}) =>
//     svcGet('products', { ...params, categories: categorySlug }),

//   /** Recherche par nom / SKU */
//   searchProducts: (q, params = {}) =>
//     svcGet('products', { ...params, search: q }),

//   /** Produits en promotion — wc/v3 (service/v1 n'a pas ce filtre) */
//   getProductsOnSale: (params = {}) =>
//     wooGet('products', { ...params, on_sale: true }),

//   /** Produits en stock */
//   getProductsInStock: (params = {}) =>
//     wooGet('products', { ...params, stock_status: 'instock' }),

//   // ── Produit unique — wc/v3 (données complètes) ────────────────────────────

//   getProductById: (id) => wooGet(`products/${id}`),

//   // ── CRUD — wc/v3 ──────────────────────────────────────────────────────────

//   createProduct: (body) => wooPost('products', body),

//   updateProduct: (id, body) => wooPatch(`products/${id}`, body),

//   batchUpdateProductsMeta: async (updates) => {
//     const CHUNK = 100;
//     for (let i = 0; i < updates.length; i += CHUNK) {
//       await wooPost('products/batch', { update: updates.slice(i, i + CHUNK) });
//     }
//   },

//   deleteProduct: (id) => wooDelete(`products/${id}`),

//   duplicateProduct: (id) => wooPost(`products/${id}/duplicate`),


//   getVariations: (productId, params = {}) =>
//     wooGet(`products/${productId}/variations`, { per_page: 100, ...params }),

//   getVariation: (productId, variationId) =>
//     wooGet(`products/${productId}/variations/${variationId}`),

//   createVariation: (productId, body) =>
//     wooPost(`products/${productId}/variations`, body),

//   updateVariation: (productId, variationId, body) =>
//     wooPatch(`products/${productId}/variations/${variationId}`, body),

//   deleteVariation: (productId, variationId) =>
//     wooDelete(`products/${productId}/variations/${variationId}`),

//   // ── Taxonomies — wc/v3 ────────────────────────────────────────────────────

//   getBrands: (params = {}) => wooGet('products/brands', params),

//   getBrandById: (id) => wooGet(`products/brands/${id}`),

//   updateBrand: (id, body) => wooPatch(`products/brands/${id}`, body),

//   getCategories: (params = {}) => wooGet('products/categories', params),
  
//   getCategoryById: (id) => wooGet(`products/categories/${id}`),

//   getTags: (params = {}) => wooGet('products/tags', params),

//   getTagById: (id) => wooGet(`products/tags/${id}`),

//   // ── Attributs produit — wc/v3 ─────────────────────────────────────────────

//   getAttributes: (params = {}) => wooGet('products/attributes', params),

//   getAttributeById: (id) => wooGet(`products/attributes/${id}`),

//   createAttribute: (body) => wooPost('products/attributes', body),

//   updateAttribute: (id, body) => wooPatch(`products/attributes/${id}`, body),

//   deleteAttribute: (id) => wooDelete(`products/attributes/${id}`),

//   getAttributeTerms: (attributeId, params = {}) =>
//     wooGet(`products/attributes/${attributeId}/terms`, params),

//   getAttributeTermById: (attributeId, termId) =>
//     wooGet(`products/attributes/${attributeId}/terms/${termId}`),

//   createAttributeTerm: (attributeId, body) =>
//     wooPost(`products/attributes/${attributeId}/terms`, body),

//   updateAttributeTerm: (attributeId, termId, body) =>
//     wooPatch(`products/attributes/${attributeId}/terms/${termId}`, body),

//   deleteAttributeTerm: (attributeId, termId) =>
//     wooDelete(`products/attributes/${attributeId}/terms/${termId}`),

//   // ── Produit complet (création orchestrée) ──────────────────────────────────


//   createProductFull: async (body) => {
//     const safeBody = body ?? {};
//     const { attributes_to_create = [], product, variations = [] } = safeBody;

//     const createdAttributesMap = new Map();

//     // 1) créer les attributs globaux et leurs termes si demandés
//     for (const attr of attributes_to_create) {
//       let attributeId = null;

//       if (attr?.id) {
//         attributeId = Number(attr.id);
//       } else {
//         const createdAttribute = await wooPost('products/attributes', {
//           name: attr.name,
//           slug: attr.slug,
//           type: attr.type,
//           order_by: attr.order_by,
//           has_archives: attr.has_archives,
//         });

//         attributeId = Number(createdAttribute?.id);
//       }

//       if (!attributeId) {
//         throw new Error(`Impossible de créer l'attribut ${attr?.name ?? ''}`);
//       }

//       const terms = Array.isArray(attr?.terms) ? attr.terms : [];

//       for (const termName of terms) {
//         await wooPost(`products/attributes/${attributeId}/terms`, {
//           name: termName,
//         }).catch(() => null);
//       }

//       createdAttributesMap.set(attr.name, {
//         id: attributeId,
//         name: attr.name,
//         slug: attr.slug,
//         terms,
//       });
//     }

//     // 2) préparer les attributs du produit
//     const productPayload = { ...(product ?? {}) };

//     if (Array.isArray(productPayload.attributes)) {
//       productPayload.attributes = productPayload.attributes.map((attr) => {
//         if (attr?.id) return attr;

//         const created = createdAttributesMap.get(attr?.name ?? '');
//         if (!created) return attr;

//         return {
//           id: created.id,
//           name: attr?.name ?? created.name,
//           position: attr?.position ?? 0,
//           visible: attr?.visible ?? true,
//           variation: attr?.variation ?? false,
//           options: Array.isArray(attr?.options) ? attr.options : (created.terms ?? []),
//         };
//       });
//     }

//     // 3) créer le produit
//     const createdProduct = await wooPost('products', productPayload);
//     const productId = Number(createdProduct?.id);

//     if (!productId) {
//       throw new Error('Impossible de créer le produit.');
//     }

//     // 4) créer les variations si présentes
//     const createdVariations = [];

//     for (const variation of variations) {
//       const payload = { ...variation };

//       if (Array.isArray(payload.attributes)) {
//         payload.attributes = payload.attributes.map((attr) => {
//           if (attr?.id) return attr;

//           const created = createdAttributesMap.get(attr?.name ?? '');
//           if (!created) return attr;

//           return {
//             id: created.id,
//             name: attr?.name ?? created.name,
//             option: attr?.option,
//           };
//         });
//       }

//       const createdVariation = await wooPost(
//         `products/${productId}/variations`,
//         payload,
//       );

//       createdVariations.push(createdVariation);
//     }

//     const full = await Promise.all([
//       wooGet(`products/${productId}`),
//       wooGet(`products/${productId}/variations`, { per_page: 100 }),
//     ]);

//     return {
//       product: full[0],
//       variations: full[1],
//       createdVariations,
//     };
//   },






//   createOrFindBrand: async (data) => {
//     // Chercher par slug
//     const existing = await wooGet('products/brands', { slug: data.slug });
//     if (Array.isArray(existing) && existing.length > 0) {
//       return {
//         id: existing[0].id,
//         name: existing[0].name,
//         slug: existing[0].slug,
//       };
//     }
//     // Créer si non trouvé
//     const created = await wooPost('products/brands', {
//       name: data.name,
//       slug: data.slug,
//     });
//     return { id: created.id, name: created.name, slug: created.slug };
//   },



//   getProductsRaw: (params = {}) => wooGet('products', params),

  
// getOrders: (params = {}) => wooGet('orders', params),



// };

// module.exports = { wooService };

import axios from 'axios';
import { env } from '../config/env';
import {
  clientGet,
  clientPost,
  clientPatch,
  clientDelete,
  normalizeBrand,
} from '../helpers/woohelper';

export type QueryParams = Record<string, unknown>;

const wooClient = axios.create({
  baseURL: `${env.WOO_BASE_URI}/wp-json/wc/v3/`,
  headers: {
    Authorization: `Basic ${Buffer.from(
      `${env.WOO_CLIENT_ID}:${env.WOO_SECRET_KEY}`,
    ).toString('base64')}`,
  },
});

const serviceClient = axios.create({
  baseURL: `${env.WOO_BASE_URI}/wp-json/service/v1/`,
});

const wooGet = <T = unknown>(path: string, p?: QueryParams): Promise<T> =>
  clientGet(wooClient, path, p) as Promise<T>;

const wooPost = <T = unknown>(path: string, b?: unknown): Promise<T> =>
  clientPost(wooClient, path, b) as Promise<T>;

const wooPatch = <T = unknown>(path: string, b?: unknown): Promise<T> =>
  clientPatch(wooClient, path, b) as Promise<T>;

const wooDelete = <T = unknown>(path: string): Promise<T> =>
  clientDelete(wooClient, path) as Promise<T>;

const svcGet = <T = unknown>(path: string, p?: QueryParams): Promise<T> =>
  clientGet(serviceClient, path, p) as Promise<T>;

export interface AttributeToCreate {
  id?: number | string;
  name: string;
  slug?: string;
  type?: string;
  order_by?: string;
  has_archives?: boolean;
  terms?: string[];
}

export interface ProductAttributePayload {
  id?: number | string;
  name?: string;
  position?: number;
  visible?: boolean;
  variation?: boolean;
  options?: string[];
  option?: string;
}

export interface CreateProductFullPayload {
  attributes_to_create?: AttributeToCreate[];
  product?: Record<string, unknown> & { attributes?: ProductAttributePayload[] };
  variations?: (Record<string, unknown> & { attributes?: ProductAttributePayload[] })[];
}

export const wooService = {
  getProducts: (params: QueryParams = {}) => svcGet('products', params),

  getProductsByIds: async (ids: (number | string)[], params: QueryParams = {}) => {
    const result = await wooGet<unknown>('products', {
      ...params,
      include: ids.join(','),
      per_page: ids.length,
    });
    return Array.isArray(result) ? result : ((result as { data?: unknown[] })?.data ?? []);
  },

  getProductsByBrand: async (brand: unknown, params: QueryParams = {}) => {
    const parsed = normalizeBrand(brand);

    if (parsed.type === 'slug') {
      return svcGet('products', { ...params, brand: parsed.slug });
    }

    return wooGet('products', { ...params, brand: parsed.id });
  },

  getProductsByCategory: (categorySlug: string, params: QueryParams = {}) =>
    svcGet('products', { ...params, categories: categorySlug }),

  searchProducts: (q: string, params: QueryParams = {}) =>
    svcGet('products', { ...params, search: q }),

  getProductsOnSale: (params: QueryParams = {}) =>
    wooGet('products', { ...params, on_sale: true }),

  getProductsInStock: (params: QueryParams = {}) =>
    wooGet('products', { ...params, stock_status: 'instock' }),

  getProductById: (id: number | string) => wooGet(`products/${id}`),

  createProduct: (body: unknown) => wooPost('products', body),

  updateProduct: (id: number | string, body: unknown) => wooPatch(`products/${id}`, body),

  batchUpdateProductsMeta: async (updates: unknown[]) => {
    const CHUNK = 100;
    for (let i = 0; i < updates.length; i += CHUNK) {
      await wooPost('products/batch', { update: updates.slice(i, i + CHUNK) });
    }
  },

  deleteProduct: (id: number | string) => wooDelete(`products/${id}`),

  duplicateProduct: (id: number | string) => wooPost(`products/${id}/duplicate`),

  getVariations: (productId: number | string, params: QueryParams = {}) =>
    wooGet(`products/${productId}/variations`, { per_page: 100, ...params }),

  getVariation: (productId: number | string, variationId: number | string) =>
    wooGet(`products/${productId}/variations/${variationId}`),

  createVariation: (productId: number | string, body: unknown) =>
    wooPost(`products/${productId}/variations`, body),

  updateVariation: (productId: number | string, variationId: number | string, body: unknown) =>
    wooPatch(`products/${productId}/variations/${variationId}`, body),

  deleteVariation: (productId: number | string, variationId: number | string) =>
    wooDelete(`products/${productId}/variations/${variationId}`),

  getBrands: (params: QueryParams = {}) => wooGet('products/brands', params),

  getBrandById: (id: number | string) => wooGet(`products/brands/${id}`),

  updateBrand: (id: number | string, body: unknown) => wooPatch(`products/brands/${id}`, body),

  getCategories: (params: QueryParams = {}) => wooGet('products/categories', params),

  getCategoryById: (id: number | string) => wooGet(`products/categories/${id}`),

  getTags: (params: QueryParams = {}) => wooGet('products/tags', params),

  getTagById: (id: number | string) => wooGet(`products/tags/${id}`),

  getAttributes: (params: QueryParams = {}) => wooGet('products/attributes', params),

  getAttributeById: (id: number | string) => wooGet(`products/attributes/${id}`),

  createAttribute: (body: unknown) => wooPost('products/attributes', body),

  updateAttribute: (id: number | string, body: unknown) => wooPatch(`products/attributes/${id}`, body),

  deleteAttribute: (id: number | string) => wooDelete(`products/attributes/${id}`),

  getAttributeTerms: (attributeId: number | string, params: QueryParams = {}) =>
    wooGet(`products/attributes/${attributeId}/terms`, params),

  getAttributeTermById: (attributeId: number | string, termId: number | string) =>
    wooGet(`products/attributes/${attributeId}/terms/${termId}`),

  createAttributeTerm: (attributeId: number | string, body: unknown) =>
    wooPost(`products/attributes/${attributeId}/terms`, body),

  updateAttributeTerm: (
    attributeId: number | string,
    termId: number | string,
    body: unknown,
  ) => wooPatch(`products/attributes/${attributeId}/terms/${termId}`, body),

  deleteAttributeTerm: (attributeId: number | string, termId: number | string) =>
    wooDelete(`products/attributes/${attributeId}/terms/${termId}`),

  createProductFull: async (body?: CreateProductFullPayload) => {
    const safeBody = body ?? {};
    const { attributes_to_create = [], product, variations = [] } = safeBody;

    const createdAttributesMap = new Map<
      string,
      { id: number; name: string; slug?: string; terms: string[] }
    >();

    for (const attr of attributes_to_create) {
      let attributeId: number | null = null;

      if (attr?.id) {
        attributeId = Number(attr.id);
      } else {
        const createdAttribute = await wooPost<{ id?: number | string }>('products/attributes', {
          name: attr.name,
          slug: attr.slug,
          type: attr.type,
          order_by: attr.order_by,
          has_archives: attr.has_archives,
        });

        attributeId = Number(createdAttribute?.id);
      }

      if (!attributeId) {
        throw new Error(`Impossible de créer l'attribut ${attr?.name ?? ''}`);
      }

      const terms = Array.isArray(attr?.terms) ? attr.terms : [];

      for (const termName of terms) {
        await wooPost(`products/attributes/${attributeId}/terms`, {
          name: termName,
        }).catch(() => null);
      }

      createdAttributesMap.set(attr.name, {
        id: attributeId,
        name: attr.name,
        slug: attr.slug,
        terms,
      });
    }

    const productPayload = { ...(product ?? {}) };

    if (Array.isArray(productPayload.attributes)) {
      productPayload.attributes = productPayload.attributes.map((attr) => {
        if (attr?.id) return attr;

        const created = createdAttributesMap.get(attr?.name ?? '');
        if (!created) return attr;

        return {
          id: created.id,
          name: attr?.name ?? created.name,
          position: attr?.position ?? 0,
          visible: attr?.visible ?? true,
          variation: attr?.variation ?? false,
          options: Array.isArray(attr?.options) ? attr.options : (created.terms ?? []),
        };
      });
    }

    const createdProduct = await wooPost<{ id?: number | string }>('products', productPayload);
    const productId = Number(createdProduct?.id);

    if (!productId) {
      throw new Error('Impossible de créer le produit.');
    }

    const createdVariations: unknown[] = [];

    for (const variation of variations) {
      const payload = { ...variation };

      if (Array.isArray(payload.attributes)) {
        payload.attributes = payload.attributes.map((attr) => {
          if (attr?.id) return attr;

          const created = createdAttributesMap.get(attr?.name ?? '');
          if (!created) return attr;

          return {
            id: created.id,
            name: attr?.name ?? created.name,
            option: attr?.option,
          };
        });
      }

      const createdVariation = await wooPost(
        `products/${productId}/variations`,
        payload,
      );

      createdVariations.push(createdVariation);
    }

    const full = await Promise.all([
      wooGet(`products/${productId}`),
      wooGet(`products/${productId}/variations`, { per_page: 100 }),
    ]);

    return {
      product: full[0],
      variations: full[1],
      createdVariations,
    };
  },

  createOrFindBrand: async (data: { slug?: string; name?: string }) => {
    const existing = await wooGet<{ id: number; name: string; slug: string }[]>(
      'products/brands',
      { slug: data.slug },
    );
    if (Array.isArray(existing) && existing.length > 0) {
      return {
        id: existing[0].id,
        name: existing[0].name,
        slug: existing[0].slug,
      };
    }
    const created = await wooPost<{ id: number; name: string; slug: string }>('products/brands', {
      name: data.name,
      slug: data.slug,
    });
    return { id: created.id, name: created.name, slug: created.slug };
  },

  getProductsRaw: (params: QueryParams = {}) => wooGet('products', params),

  getOrders: (params: QueryParams = {}) => wooGet('orders', params),
};

export default { wooService };