import { query, run, wooService } from '@/server/wooRoute';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return run(() => wooService.getAttributeTerms(Number(id), query(request)));
}

export async function POST(request: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  const body = await request.json().catch(() => ({}));
  return run(() => wooService.createAttributeTerm(Number(id), body));
}
