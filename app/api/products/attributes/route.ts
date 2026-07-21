import { query, run, wooService } from '@/server/wooRoute';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  return run(() => wooService.getAttributes(query(request)));
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  return run(() => wooService.createAttribute(body));
}
