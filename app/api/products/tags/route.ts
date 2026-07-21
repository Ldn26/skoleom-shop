import { query, run, wooService } from '@/server/wooRoute';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  return run(() => wooService.getTags(query(request)));
}
