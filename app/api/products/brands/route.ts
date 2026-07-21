import { run, wpService } from '@/server/wooRoute';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  return run(() => wpService.getBrands());
}
