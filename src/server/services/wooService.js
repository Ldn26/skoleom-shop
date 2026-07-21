// /* ── Proxy WooCommerce API ── */

// import axios, { type AxiosInstance } from 'axios';
// import { env } from '../config/env';
// import type { WpQueryParams, BrandTaxonomyItem } from '../types/wp';
// import {
//   clientGet,
//   clientPost,
//   clientPatch,
//   clientDelete,
//   normalizeBrand,
// } from '../helpers/woohelper';

// export type { WpQueryParams, BrandTaxonomyItem };

// // ─────────────────────────────────────────────────────────────────────────────
// // Clients axios
// // ─────────────────────────────────────────────────────────────────────────────

// // wc/v3 — CRUD, détails complets, variations, taxonomies
// const wooClient: AxiosInstance = axios.create({
//   baseURL: `${env.WOO_BASE_URI}/wp-json/wc/v3/`,
//   headers: {
//     Authorization: `Basic ${Buffer.from(`${env.WOO_CLIENT_ID}:${env.WOO_SECRET_KEY}`).toString(
//       'base64',
//     )}`,
//   },
// });

// // service/v1 — listes allégées avec meta (pagination, total, etc.)
// const serviceClient: AxiosInstance = axios.create({
//   baseURL: `${env.WOO_BASE_URI}/wp-json/service/v1/`,
// });

// // ── Types internes pour createProductFull ─────────────────────────────────
// interface AttributeToCreate {
//   id?: number | string;
//   name: string;
//   slug?: string;
//   type?: string;
//   order_by?: string;
//   has_archives?: boolean;
//   terms?: string[];
// }

// interface ProductAttributeInput {
//   id?: number | string;
//   name?: string;
//   position?: number;
//   visible?: boolean;
//   variation?: boolean;
//   options?: string[];
// }

// interface VariationInput {
//   attributes?: ProductAttributeInput[];
//   [key: string]: unknown;
// }

// const wooGet = (path: string, p?: WpQueryParams) => clientGet(wooClient, path, p);
// const wooPost = (path: string, b?: unknown) => clientPost(wooClient, path, b);
// const wooPatch = (path: string, b?: unknown) => clientPatch(wooClient, path, b);
// const wooDelete = (path: string) => clientDelete(wooClient, path);
// const svcGet = (path: string, p?: WpQueryParams) => clientGet(serviceClient, path, p);

// // ─────────────────────────────────────────────────────────────────────────────
// // Service
// // ─────────────────────────────────────────────────────────────────────────────

// export const wooService = {
//   getProducts: (params: WpQueryParams = {}) => svcGet('products', params),
//   getProductsByIds: async (ids: number[], params: WpQueryParams = {}) => {
//     const result = await wooGet('products', {
//       ...params,
//       include: ids.join(','),
//       per_page: ids.length,
//     });
//     // wc/v3 renvoie directement un tableau
//     return Array.isArray(result) ? result : ((result as { data?: unknown[] })?.data ?? []);
//   },

//   /**
//    * Produits par marque — accepte slug ("gulf") ou ID numérique (1397)
//    * slug → service/v1 ?marque=slug
//    * ID   → wc/v3 ?brand=id
//    */
//   getProductsByBrand: async (brand: string | number, params: WpQueryParams = {}) => {
//     const parsed = normalizeBrand(brand);

//     if (parsed.type === 'slug') {
//       return svcGet('products', { ...params, brand: parsed.slug });
//     }

//     // ID numérique → wc/v3 (pas de meta pagination mais on garde la cohérence)
//     return wooGet('products', { ...params, brand: parsed.id });
//   },

//   /** Produits par catégorie slug */
//   getProductsByCategory: (categorySlug: string, params: WpQueryParams = {}) =>
//     svcGet('products', { ...params, categories: categorySlug }),

//   /** Recherche par nom / SKU */
//   searchProducts: (q: string, params: WpQueryParams = {}) =>
//     svcGet('products', { ...params, search: q }),

//   /** Produits en promotion — wc/v3 (service/v1 n'a pas ce filtre) */
//   getProductsOnSale: (params: WpQueryParams = {}) =>
//     wooGet('products', { ...params, on_sale: true }),

//   /** Produits en stock */
//   getProductsInStock: (params: WpQueryParams = {}) =>
//     wooGet('products', { ...params, stock_status: 'instock' }),

//   // ── Produit unique — wc/v3 (données complètes) ────────────────────────────

//   getProductById: (id: number | string) => wooGet(`products/${id}`),

//   // ── CRUD — wc/v3 ──────────────────────────────────────────────────────────

//   createProduct: (body: Record<string, unknown>) => wooPost('products', body),

//   updateProduct: (id: number | string, body: Record<string, unknown>) =>
//     wooPatch(`products/${id}`, body),

//   batchUpdateProductsMeta: async (
//     updates: Array<{ id: number; meta_data: Array<{ key: string; value: string }> }>,
//   ): Promise<void> => {
//     const CHUNK = 100;
//     for (let i = 0; i < updates.length; i += CHUNK) {
//       await wooPost('products/batch', { update: updates.slice(i, i + CHUNK) });
//     }
//   },

//   deleteProduct: (id: number | string) => wooDelete(`products/${id}`),

//   duplicateProduct: (id: number | string) => wooPost(`products/${id}/duplicate`),

//   // ── Variations — wc/v3 ────────────────────────────────────────────────────

//   getVariations: (productId: number | string, params: WpQueryParams = {}) =>
//     wooGet(`products/${productId}/variations`, { per_page: 100, ...params }),

//   getVariation: (productId: number | string, variationId: number | string) =>
//     wooGet(`products/${productId}/variations/${variationId}`),

//   createVariation: (productId: number | string, body: Record<string, unknown>) =>
//     wooPost(`products/${productId}/variations`, body),

//   updateVariation: (
//     productId: number | string,
//     variationId: number | string,
//     body: Record<string, unknown>,
//   ) => wooPatch(`products/${productId}/variations/${variationId}`, body),

//   deleteVariation: (productId: number | string, variationId: number | string) =>
//     wooDelete(`products/${productId}/variations/${variationId}`),

//   // ── Taxonomies — wc/v3 ────────────────────────────────────────────────────

//   getBrands: (params: WpQueryParams = {}) => wooGet('products/brands', params),

//   getBrandById: (id: number | string) => wooGet(`products/brands/${id}`),

//   updateBrand: (id: number | string, body: Record<string, unknown>) =>
//     wooPatch(`products/brands/${id}`, body),

//   getCategories: (params: WpQueryParams = {}) => wooGet('products/categories', params),

//   getCategoryById: (id: number | string) => wooGet(`products/categories/${id}`),

//   getTags: (params: WpQueryParams = {}) => wooGet('products/tags', params),

//   getTagById: (id: number | string) => wooGet(`products/tags/${id}`),

//   // ── Attributs produit — wc/v3 ─────────────────────────────────────────────

//   getAttributes: (params: WpQueryParams = {}) => wooGet('products/attributes', params),

//   getAttributeById: (id: number | string) => wooGet(`products/attributes/${id}`),

//   createAttribute: (body: Record<string, unknown>) => wooPost('products/attributes', body),

//   updateAttribute: (id: number | string, body: Record<string, unknown>) =>
//     wooPatch(`products/attributes/${id}`, body),

//   deleteAttribute: (id: number | string) => wooDelete(`products/attributes/${id}`),

//   getAttributeTerms: (attributeId: number | string, params: WpQueryParams = {}) =>
//     wooGet(`products/attributes/${attributeId}/terms`, params),

//   getAttributeTermById: (attributeId: number | string, termId: number | string) =>
//     wooGet(`products/attributes/${attributeId}/terms/${termId}`),

//   createAttributeTerm: (attributeId: number | string, body: Record<string, unknown>) =>
//     wooPost(`products/attributes/${attributeId}/terms`, body),

//   updateAttributeTerm: (
//     attributeId: number | string,
//     termId: number | string,
//     body: Record<string, unknown>,
//   ) => wooPatch(`products/attributes/${attributeId}/terms/${termId}`, body),

//   deleteAttributeTerm: (attributeId: number | string, termId: number | string) =>
//     wooDelete(`products/attributes/${attributeId}/terms/${termId}`),

//   // ── Produit complet (création orchestrée) ──────────────────────────────────

//   createProductFull: async (body: Record<string, unknown>) => {
//     const safeBody = (body ?? {}) as {
//       attributes_to_create?: AttributeToCreate[];
//       product?: Record<string, unknown>;
//       variations?: VariationInput[];
//     };
//     const { attributes_to_create = [], product, variations = [] } = safeBody;

//     const createdAttributesMap = new Map<
//       string,
//       { id: number; name: string; slug?: string; terms?: string[] }
//     >();

//     // 1) créer les attributs globaux et leurs termes si demandés
//     for (const attr of attributes_to_create) {
//       let attributeId: number | null = null;

//       if (attr?.id) {
//         attributeId = Number(attr.id);
//       } else {
//         const createdAttribute = (await wooPost('products/attributes', {
//           name: attr.name,
//           slug: attr.slug,
//           type: attr.type,
//           order_by: attr.order_by,
//           has_archives: attr.has_archives,
//         })) as { id?: number | string } | null;

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
//       productPayload.attributes = (productPayload.attributes as ProductAttributeInput[]).map(
//         (attr: ProductAttributeInput) => {
//           if (attr?.id) return attr;

//           const created = createdAttributesMap.get(attr?.name ?? '');
//           if (!created) return attr;

//           return {
//             id: created.id,
//             name: attr?.name ?? created.name,
//             position: attr?.position ?? 0,
//             visible: attr?.visible ?? true,
//             variation: attr?.variation ?? false,
//             options: Array.isArray(attr?.options) ? attr.options : (created.terms ?? []),
//           };
//         },
//       );
//     }

//     // 3) créer le produit
//     const createdProduct = (await wooPost('products', productPayload)) as {
//       id?: number | string;
//     } | null;
//     const productId = Number(createdProduct?.id);

//     if (!productId) {
//       throw new Error('Impossible de créer le produit.');
//     }

//     // 4) créer les variations si présentes
//     const createdVariations = [];

//     for (const variation of variations) {
//       const payload: VariationInput & { attributes?: unknown } = { ...variation };

//       if (Array.isArray(payload.attributes)) {
//         payload.attributes = (payload.attributes as ProductAttributeInput[]).map(
//           (attr: ProductAttributeInput & { option?: string }) => {
//             if (attr?.id) return attr;

//             const created = createdAttributesMap.get(attr?.name ?? '');
//             if (!created) return attr;

//             return {
//               id: created.id,
//               name: attr?.name ?? created.name,
//               option: attr?.option,
//             };
//           },
//         );
//       }

//       const createdVariation = await wooPost(`products/${productId}/variations`, payload);

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

//   // Trouve ou crée un brand dans WooCommerce
//   createOrFindBrand: async (data: {
//     name: string;
//     slug: string;
//   }): Promise<{ id: number; name: string; slug: string }> => {
//     // Chercher par slug
//     const existing = (await wooGet('products/brands', {
//       slug: data.slug,
//     })) as Array<{ id: number; name: string; slug: string }>;
//     if (Array.isArray(existing) && existing.length > 0) {
//       return {
//         id: existing[0].id,
//         name: existing[0].name,
//         slug: existing[0].slug,
//       };
//     }
//     // Créer si non trouvé
//     const created = (await wooPost('products/brands', {
//       name: data.name,
//       slug: data.slug,
//     })) as { id: number; name: string; slug: string };
//     return { id: created.id, name: created.name, slug: created.slug };
//   },
// };


/* ── Proxy WooCommerce API ── */

const axios = require('axios');
const { env } = require('../config/env');
const {
  clientGet,
  clientPost,
  clientPatch,
  clientDelete,
  normalizeBrand,
} = require('../helpers/woohelper');

// ─────────────────────────────────────────────────────────────────────────────
// Clients axios
// ─────────────────────────────────────────────────────────────────────────────

// wc/v3 — CRUD, détails complets, variations, taxonomies
const wooClient = axios.create({
  baseURL: `${env.WOO_BASE_URI}/wp-json/wc/v3/`,
  headers: {
    Authorization: `Basic ${Buffer.from(
      `${env.WOO_CLIENT_ID}:${env.WOO_SECRET_KEY}`,
    ).toString('base64')}`,
  },
});

// service/v1 — listes allégées avec meta (pagination, total, etc.)
const serviceClient = axios.create({
  baseURL: `${env.WOO_BASE_URI}/wp-json/service/v1/`,
});

const wooGet = (path, p) => clientGet(wooClient, path, p);
const wooPost = (path, b) => clientPost(wooClient, path, b);
const wooPatch = (path, b) => clientPatch(wooClient, path, b);
const wooDelete = (path) => clientDelete(wooClient, path);
const svcGet = (path, p) => clientGet(serviceClient, path, p);

// ─────────────────────────────────────────────────────────────────────────────
// Service
// ─────────────────────────────────────────────────────────────────────────────

const wooService = {
  getProducts: (params = {}) => svcGet('products', params),

  getProductsByIds: async (ids, params = {}) => {
    const result = await wooGet('products', {
      ...params,
      include: ids.join(','),
      per_page: ids.length,
    });
    // wc/v3 renvoie directement un tableau
    return Array.isArray(result) ? result : (result?.data ?? []);
  },

  /**
   * Produits par marque — accepte slug ("gulf") ou ID numérique (1397)
   * slug → service/v1 ?marque=slug
   * ID   → wc/v3 ?brand=id
   */
  getProductsByBrand: async (brand, params = {}) => {
    const parsed = normalizeBrand(brand);

    if (parsed.type === 'slug') {
      return svcGet('products', { ...params, brand: parsed.slug });
    }

    // ID numérique → wc/v3 (pas de meta pagination mais on garde la cohérence)
    return wooGet('products', { ...params, brand: parsed.id });
  },

  /** Produits par catégorie slug */
  getProductsByCategory: (categorySlug, params = {}) =>
    svcGet('products', { ...params, categories: categorySlug }),

  /** Recherche par nom / SKU */
  searchProducts: (q, params = {}) =>
    svcGet('products', { ...params, search: q }),

  /** Produits en promotion — wc/v3 (service/v1 n'a pas ce filtre) */
  getProductsOnSale: (params = {}) =>
    wooGet('products', { ...params, on_sale: true }),

  /** Produits en stock */
  getProductsInStock: (params = {}) =>
    wooGet('products', { ...params, stock_status: 'instock' }),

  // ── Produit unique — wc/v3 (données complètes) ────────────────────────────

  getProductById: (id) => wooGet(`products/${id}`),

  // ── CRUD — wc/v3 ──────────────────────────────────────────────────────────

  createProduct: (body) => wooPost('products', body),

  updateProduct: (id, body) => wooPatch(`products/${id}`, body),

  batchUpdateProductsMeta: async (updates) => {
    const CHUNK = 100;
    for (let i = 0; i < updates.length; i += CHUNK) {
      await wooPost('products/batch', { update: updates.slice(i, i + CHUNK) });
    }
  },

  deleteProduct: (id) => wooDelete(`products/${id}`),

  duplicateProduct: (id) => wooPost(`products/${id}/duplicate`),


  getVariations: (productId, params = {}) =>
    wooGet(`products/${productId}/variations`, { per_page: 100, ...params }),

  getVariation: (productId, variationId) =>
    wooGet(`products/${productId}/variations/${variationId}`),

  createVariation: (productId, body) =>
    wooPost(`products/${productId}/variations`, body),

  updateVariation: (productId, variationId, body) =>
    wooPatch(`products/${productId}/variations/${variationId}`, body),

  deleteVariation: (productId, variationId) =>
    wooDelete(`products/${productId}/variations/${variationId}`),

  // ── Taxonomies — wc/v3 ────────────────────────────────────────────────────

  getBrands: (params = {}) => wooGet('products/brands', params),

  getBrandById: (id) => wooGet(`products/brands/${id}`),

  updateBrand: (id, body) => wooPatch(`products/brands/${id}`, body),

  getCategories: (params = {}) => wooGet('products/categories', params),
  
  getCategoryById: (id) => wooGet(`products/categories/${id}`),

  getTags: (params = {}) => wooGet('products/tags', params),

  getTagById: (id) => wooGet(`products/tags/${id}`),

  // ── Attributs produit — wc/v3 ─────────────────────────────────────────────

  getAttributes: (params = {}) => wooGet('products/attributes', params),

  getAttributeById: (id) => wooGet(`products/attributes/${id}`),

  createAttribute: (body) => wooPost('products/attributes', body),

  updateAttribute: (id, body) => wooPatch(`products/attributes/${id}`, body),

  deleteAttribute: (id) => wooDelete(`products/attributes/${id}`),

  getAttributeTerms: (attributeId, params = {}) =>
    wooGet(`products/attributes/${attributeId}/terms`, params),

  getAttributeTermById: (attributeId, termId) =>
    wooGet(`products/attributes/${attributeId}/terms/${termId}`),

  createAttributeTerm: (attributeId, body) =>
    wooPost(`products/attributes/${attributeId}/terms`, body),

  updateAttributeTerm: (attributeId, termId, body) =>
    wooPatch(`products/attributes/${attributeId}/terms/${termId}`, body),

  deleteAttributeTerm: (attributeId, termId) =>
    wooDelete(`products/attributes/${attributeId}/terms/${termId}`),

  // ── Produit complet (création orchestrée) ──────────────────────────────────

  createProductFull: async (body) => {
    const safeBody = body ?? {};
    const { attributes_to_create = [], product, variations = [] } = safeBody;

    const createdAttributesMap = new Map();

    // 1) créer les attributs globaux et leurs termes si demandés
    for (const attr of attributes_to_create) {
      let attributeId = null;

      if (attr?.id) {
        attributeId = Number(attr.id);
      } else {
        const createdAttribute = await wooPost('products/attributes', {
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

    // 2) préparer les attributs du produit
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

    // 3) créer le produit
    const createdProduct = await wooPost('products', productPayload);
    const productId = Number(createdProduct?.id);

    if (!productId) {
      throw new Error('Impossible de créer le produit.');
    }

    // 4) créer les variations si présentes
    const createdVariations = [];

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

  // Trouve ou crée un brand dans WooCommerce
  createOrFindBrand: async (data) => {
    // Chercher par slug
    const existing = await wooGet('products/brands', { slug: data.slug });
    if (Array.isArray(existing) && existing.length > 0) {
      return {
        id: existing[0].id,
        name: existing[0].name,
        slug: existing[0].slug,
      };
    }
    // Créer si non trouvé
    const created = await wooPost('products/brands', {
      name: data.name,
      slug: data.slug,
    });
    return { id: created.id, name: created.name, slug: created.slug };
  },
};

module.exports = { wooService };