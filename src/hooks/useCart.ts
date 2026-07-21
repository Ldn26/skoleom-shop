import { useCallback } from 'react';

/**
 * Hook d'ajout au panier — compatible avec l'extension SeSync v2.
 *
 * L'extension écoute deux mécanismes :
 *  - Pour les produits Skoleom (WooCommerce) : event `skoleom:add-to-cart`
 *    avec `{detail: {productId, quantity}}`. L'extension appelle l'API,
 *    met à jour le panier et dispatch `skoleom:cart-updated`.
 *  - Pour les produits Amazon/affiliate : event `skoleom:add-amazon`
 *    avec `{detail: {asin, title, price, image, url}}` — géré par l'extension.
 *
 * Dans les deux cas on dispatch `skoleom:open-sidepage` avec
 * `{detail: {page: "basket"}}` pour ouvrir la sidebar.
 */
export function useCart() {
  const addToCart = useCallback(async (id: number, quantity: number = 1) => {
    if (typeof window === 'undefined') return;

    window.dispatchEvent(
      new CustomEvent('skoleom:add-to-cart', {
        detail: { productId: id, quantity },
      }),
    );

    // Petit délai pour que l'extension ait le temps d'enregistrer l'item
    // avant d'ouvrir la sidebar (l'extension fait elle-même la requête).
    setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent('skoleom:open-sidepage', { detail: { page: 'basket' } }),
      );
    }, 150);
  }, []);
  return { addToCart };
}
