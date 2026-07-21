import type { WooProduct } from '../api/product';

/* ─── Fit score → color ──────────────────────────────────────── */
export const fitColor = (score: number | null): string => {
  if (!score) return '#a3e635';
  if (score >= 93) return '#a3e635';
  if (score >= 85) return '#facc15';
  return '#f87171';
};

/* ─── First image (tolerant of `photos[]` or `images[{src}]`) ── */
export const getProductImage = (p: WooProduct): string => {
  const anyP = p as unknown as { photos?: string[]; images?: { src?: string }[] };
  return anyP.photos?.[0] ?? anyP.images?.[0]?.src ?? '';
};

/* ─── Category names (tolerant) ──────────────────────────────────
   Supports, in order:
     categories: WooCategory[]  →  [{ name }]
     categories: string[]
     category:   string | { name }
     type:       string         (fallback)
──────────────────────────────────────────────────────────────── */
export const getProductCategories = (p: WooProduct): string[] => {
  const anyP = p as any;
  const out: string[] = [];

  if (Array.isArray(anyP.categories)) {
    for (const c of anyP.categories) {
      if (typeof c === 'string') out.push(c);
      else if (c?.name) out.push(String(c.name));
    }
  } else if (typeof anyP.category === 'string') {
    out.push(anyP.category);
  } else if (anyP.category?.name) {
    out.push(String(anyP.category.name));
  }

  if (out.length === 0 && p.type) out.push(p.type);
  return out;
};

export const productPath = (p: WooProduct): string => `/produit/${p.id}`;