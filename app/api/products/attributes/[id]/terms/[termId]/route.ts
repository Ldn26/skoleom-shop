import { run, wooService } from '@/server/wooRoute';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(_request: Request, ctx: { params: Promise<{ id: string; termId: string }> }) {
  const { id, termId } = await ctx.params;
  return run(() => wooService.getAttributeTermById(Number(id), Number(termId)));
}

export async function PATCH(request: Request, ctx: { params: Promise<{ id: string; termId: string }> }) {
  const { id, termId } = await ctx.params;
  const body = await request.json().catch(() => ({}));
  return run(() => wooService.updateAttributeTerm(Number(id), Number(termId), body));
}

export async function DELETE(_request: Request, ctx: { params: Promise<{ id: string; termId: string }> }) {
  const { id, termId } = await ctx.params;
  return run(() => wooService.deleteAttributeTerm(Number(id), Number(termId)));
}
