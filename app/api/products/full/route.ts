import { getAuth } from '@/server/auth';
import { injectUserMeta, run, wooService } from '@/server/wooRoute';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const auth = getAuth(request);
  const body = (await request.json().catch(() => ({}))) as any;
  const bodyWithMeta = {
    ...body,
    product: body.product ? injectUserMeta(body.product, auth?.id) : body.product,
  };
  return run(() => wooService.createProductFull(bodyWithMeta));
}
