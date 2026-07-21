import { run, wooService } from '@/server/wooRoute';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(_request: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return run(() => wooService.getProductById(Number(id)));
}

export async function PATCH(request: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  const body = await request.json().catch(() => ({}));
  return run(() => wooService.updateProduct(Number(id), body));
}

export async function DELETE(_request: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return run(() => wooService.deleteProduct(Number(id)));
}
