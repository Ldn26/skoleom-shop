/**
 * GTM / dataLayer event utilities.
 *
 * Every push clears `ecommerce: null` first (Google best-practice) to prevent
 * data from a previous event leaking into the next one.
 *
 * Usage:
 *   import { pushAddToCart } from '@/analytics/gtm';
 *   pushAddToCart({ item_id: '42', item_name: 'Air Max', price: 129.99 }, 129.99);
 */

// ─── Types ────────────────────────────────────────────────────────────────────

export interface GtmItem {
  item_id: string;
  item_name: string;
  item_brand?: string;
  item_category?: string;
  item_variant?: string;
  price?: number;
  quantity?: number;
}

export interface EcommercePayload {
  currency?: string;
  value?: number;
  items: GtmItem[];
  transaction_id?: string;
  coupon?: string;
}

// ─── Core push ────────────────────────────────────────────────────────────────

/** Low-level push — clears ecommerce before every event. */
export function pushEvent(event: string, params?: Record<string, unknown>): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ ecommerce: null }); // prevent data bleed
  window.dataLayer.push({ event, ...params });
}

/** Push an ecommerce event with a structured `ecommerce` object. */
function pushEcommerce(event: string, payload: EcommercePayload): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ ecommerce: null });
  window.dataLayer.push({ event, ecommerce: { currency: 'USD', ...payload } });
}

// ─── Ecommerce events (GA4 schema) ────────────────────────────────────────────

/** Fired when a product is added to the cart. */
export function pushAddToCart(item: GtmItem, value: number): void {
  pushEcommerce('add_to_cart', { value, items: [{ ...item, quantity: item.quantity ?? 1 }] });
}

/** Fired when a product is removed from the cart. */
export function pushRemoveFromCart(item: GtmItem, value: number): void {
  pushEcommerce('remove_from_cart', { value, items: [{ ...item, quantity: item.quantity ?? 1 }] });
}

/** Fired when the cart drawer is opened and items are visible. */
export function pushViewCart(items: GtmItem[], value: number): void {
  pushEcommerce('view_cart', { value, items });
}

/** Fired when the user views a single product detail. */
export function pushViewItem(item: GtmItem): void {
  pushEcommerce('view_item', { value: item.price, items: [item] });
}

/** Fired when the user initiates checkout (clicks the checkout CTA). */
export function pushBeginCheckout(items: GtmItem[], value: number): void {
  pushEcommerce('begin_checkout', { value, items });
}

/** Fired after a successful purchase. */
export function pushPurchase(
  transactionId: string,
  items: GtmItem[],
  value: number,
  coupon?: string,
): void {
  pushEcommerce('purchase', { transaction_id: transactionId, value, coupon, items });
}

// ─── Navigation & engagement events ───────────────────────────────────────────

/** Fired on every SPA route change (virtual page view for GTM triggers). */
export function pushPageView(pagePath: string, pageTitle: string): void {
  pushEvent('page_view', { page_path: pagePath, page_title: pageTitle });
}

/** Generic CTA / button click tracker. */
export function pushCtaClick(label: string, location: string): void {
  pushEvent('cta_click', { cta_label: label, cta_location: location });
}

/** Fired when the user submits or interacts with the search bar. */
export function pushSearch(searchTerm: string): void {
  pushEvent('search', { search_term: searchTerm });
}

/** Fired when a video starts playing (Watch page). */
export function pushVideoPlay(videoId: string, videoTitle?: string): void {
  pushEvent('video_play', { video_id: videoId, video_title: videoTitle });
}

/** Fired when the user opens a login or register modal/page. */
export function pushLoginStart(method: 'email' | 'google' | string): void {
  pushEvent('login_start', { method });
}

/** Fired on successful login. */
export function pushLogin(method: 'email' | 'google' | string): void {
  pushEvent('login', { method });
}

/** Fired on successful registration. */
export function pushSignUp(method: 'email' | string): void {
  pushEvent('sign_up', { method });
}

/** Fired when a user clicks an external outbound link. */
export function pushOutboundClick(url: string, label?: string): void {
  pushEvent('outbound_click', { outbound_url: url, link_label: label });
}
