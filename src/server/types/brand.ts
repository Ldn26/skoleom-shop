export interface Brand {
  id: string;
  name: string;
  slug: string;
  image: string | null;
  description: string | null;
  website_url: string | null;
  is_active: boolean;
  woo_brand_id: number | null;
  created_at: Date;
  updated_at: Date;
}

export type CreateBrandInput = {
  name: string;
  slug: string;
  image?: string | null;
  description?: string | null;
  website_url?: string | null;
  woo_brand_id?: number | null;
  is_active?: boolean;
};

export type UpdateBrandInput = Partial<CreateBrandInput>;

export type WpBrand = {
  id: number;
  name: string;
  slug: string;
  logo: string;
  description: string;
  url: string;
};

export interface SearchBrandsParams {
  q?: string; // recherche sur name + slug + description
  active?: boolean; // filtrer par is_active
  page?: number; // défaut 1
  limit?: number; // défaut 20, max 100
}

export interface SearchBrandsResult {
  items: Brand[];
  count: number;
  page: number;
  limit: number;
}