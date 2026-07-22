import { getAuth } from '@/server/auth';
import { buildParams, injectUserMeta, query, run, wooService } from '@/server/wooRoute';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const q = query(request);
  const params = buildParams(q);
  const { brand, ...rest } = params as any;
  return run(() => {
    if (typeof q.brand === 'string' && q.brand.trim()) {
      return wooService.getProductsByBrand(q.brand.trim(), rest);
    }
    return wooService.getProducts(rest);
  });
}
