export type WpQueryParams = Record<string, string | number | boolean | undefined | null>;

export type BrandTaxonomyItem = {
  id: number;
  name: string;
  slug: string;
  description: string;
  count: number;
};

// ── Coupon Types ─────────────────────────────────────────────────────────────

export interface WooCoupon {
  id: number;
  code: string;
  amount: string;
  discount_type: 'percent' | 'fixed_cart' | 'fixed_product';
  description?: string;
  date_expires?: string | null;
  date_expires_gmt?: string | null;
  usage_count: number;
  individual_use: boolean;
  product_ids: number[];
  excluded_product_ids: number[];
  usage_limit?: number | null;
  usage_limit_per_user?: number | null;
  limit_usage_to_x_items?: number | null;
  free_shipping: boolean;
  product_categories: number[];
  excluded_product_categories: number[];
  exclude_sale_items: boolean;
  minimum_amount: string;
  maximum_amount: string;
  email_restrictions: string[];
  used_by: string[];
}

export interface CreateCouponInput {
  code: string; // required
  amount?: string; // "10" или "10.00"
  discount_type?: 'percent' | 'fixed_cart' | 'fixed_product'; // default: fixed_cart
  description?: string;
  date_expires?: string | null; // "2025-12-31T23:59:59"
  date_expires_gmt?: string | null;
  individual_use?: boolean;
  product_ids?: number[];
  excluded_product_ids?: number[];
  usage_limit?: number;
  usage_limit_per_user?: number;
  limit_usage_to_x_items?: number;
  free_shipping?: boolean;
  product_categories?: number[];
  excluded_product_categories?: number[];
  exclude_sale_items?: boolean;
  minimum_amount?: string;
  maximum_amount?: string;
  email_restrictions?: string[];
}

export type UpdateCouponInput = Partial<CreateCouponInput>;

export interface ListCouponsParams {
  page?: number;
  per_page?: number;
  search?: string;
  code?: string;
  order?: 'asc' | 'desc';
  orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
  after?: string;
  before?: string;
}