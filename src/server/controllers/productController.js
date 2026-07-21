
// const { wooService } = require('../services/wooService');
// const { wpService } = require('../services/wpService');

// function injectUserMeta(body, userId) {
//   if (!userId) return body;
//   const existingMeta = Array.isArray(body.meta_data)
//     ? body.meta_data.filter((m) => m.key !== '_monetizer_user_id')
//     : [];
//   return {
//     ...body,
//     meta_data: [...existingMeta, { key: '_monetizer_user_id', value: String(userId) }],
//   };
// }

// function wrap(fn) {
//   return async (req, res, next) => {
//     try {
//       res.json(await fn(req));
//     } catch (e) {
//       next(e);
//     }
//   };
// }

// // Normalise la pagination : on envoie tous les alias courants
// // pour que le plugin WP prenne celui qu'il comprend (page/paged/per_page/limit/offset)
// function buildParams(query) {
//   const { page, limit, per_page, offset, ...rest } = query;

//   const p = Math.max(1, Number(page) || 1);
//   const pp = Math.max(1, Number(limit ?? per_page) || 50);

//   return {
//     ...rest,
//     page: p,
//     paged: p,
//     per_page: pp,
//     limit: pp,
//     offset: (p - 1) * pp,
//   };
// }

// const findAll = wrap((req) => {
//   const { brand } = req.query;
//   const params = buildParams(req.query);

//   if (typeof brand === 'string' && brand.trim()) {
//     // buildParams garde déjà les autres champs (dont category/categories)
//     const { brand: _b, ...rest } = params;
//     return wooService.getProductsByBrand(brand.trim(), rest);
//   }

//   const { brand: _b, ...rest } = params;
//   return wooService.getProducts(rest);
// });

// const findOne = wrap((req) => wooService.getProductById(Number(req.params.id)));

// const create = wrap((req) => {
//   const body = injectUserMeta(req.body, req.userId);
//   return wooService.createProduct(body);
// });

// const update = wrap((req) => wooService.updateProduct(Number(req.params.id), req.body));

// const remove = wrap((req) => wooService.deleteProduct(Number(req.params.id)));

// const duplicate = wrap((req) => wooService.duplicateProduct(Number(req.params.id)));

// // ── Alertes catalogue (cache mémoire 30 min) ──────────────────────────────────
// // (désactivé pour l'instant)


// const getVariations = wrap((req) =>
//   wooService.getVariations(Number(req.params.id), req.query),
// );

// const getVariation = wrap((req) =>
//   wooService.getVariation(Number(req.params.id), Number(req.params.vid)),
// );

// const createVariation = wrap((req) =>
//   wooService.createVariation(Number(req.params.id), req.body),
// );

// const updateVariation = wrap((req) =>
//   wooService.updateVariation(Number(req.params.id), Number(req.params.vid), req.body),
// );

// const deleteVariation = wrap((req) =>
//   wooService.deleteVariation(Number(req.params.id), Number(req.params.vid)),
// );


// const getBrands = wrap((_req) => wpService.getBrands());

// const getBrandById = wrap((req) => wooService.getBrandById(Number(req.params.id)));

// const getCategories = wrap((req) => wooService.getCategories(req.query));


// const getCategoryById = wrap((req) => wooService.getCategoryById(Number(req.params.id)));

// const getTags = wrap((req) => wooService.getTags(req.query));

// const getTagById = wrap((req) => wooService.getTagById(Number(req.params.id)));

// // ── Attributs ────────────────────────────────────────────────────────────────

// const getAttributes = wrap((req) => wooService.getAttributes(req.query));

// const getAttributeById = wrap((req) => wooService.getAttributeById(Number(req.params.id)));

// const createAttribute = wrap((req) => wooService.createAttribute(req.body));

// const updateAttribute = wrap((req) =>
//   wooService.updateAttribute(Number(req.params.id), req.body),
// );

// const deleteAttribute = wrap((req) => wooService.deleteAttribute(Number(req.params.id)));

// const getAttributeTerms = wrap((req) =>
//   wooService.getAttributeTerms(Number(req.params.id), req.query),
// );

// const getAttributeTermById = wrap((req) =>
//   wooService.getAttributeTermById(Number(req.params.id), Number(req.params.termId)),
// );

// const createAttributeTerm = wrap((req) =>
//   wooService.createAttributeTerm(Number(req.params.id), req.body),
// );

// const updateAttributeTerm = wrap((req) =>
//   wooService.updateAttributeTerm(Number(req.params.id), Number(req.params.termId), req.body),
// );

// const deleteAttributeTerm = wrap((req) =>
//   wooService.deleteAttributeTerm(Number(req.params.id), Number(req.params.termId)),
// );

// // ── Produit complet ──────────────────────────────────────────────────────────

// const createFull = wrap((req) => {
//   const body = req.body;
//   const product = body.product;
//   const bodyWithMeta = {
//     ...body,
//     product: product ? injectUserMeta(product, req.userId) : product,
//   };
//   return wooService.createProductFull(bodyWithMeta);
// });

// // ── Exports ───────────────────────────────────────────────────────────────────

// module.exports = {
//   findAll,
//   findOne,
//   create,
//   update,
//   remove,
//   duplicate,
//   getVariations,
//   getVariation,
//   createVariation,
//   updateVariation,
//   deleteVariation,
//   getBrands,
//   getBrandById,
//   getCategories,
//   getCategoryById,
//   getTags,
//   getTagById,
//   getAttributes,
//   getAttributeById,
//   createAttribute,
//   updateAttribute,
//   deleteAttribute,
//   getAttributeTerms,
//   getAttributeTermById,
//   createAttributeTerm,
//   updateAttributeTerm,
//   deleteAttributeTerm,
//   createFull,
// };