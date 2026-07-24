


import { buildParams, query, run, wooService } from '@/server/wooRoute';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const q = query(request);
  const params = buildParams(q);
  const { brand, limit, page, ...rest } = params as any;

  const queryParams = {
    ...rest,
    page: page || 1,
    per_page: limit || 24, 
  };

  return run(() => {
    if (typeof q.brand === 'string' && q.brand.trim()) {
      return wooService.getProductsByBrand(q.brand.trim(), queryParams);
    }
    return wooService.getProducts(queryParams);
  });
}