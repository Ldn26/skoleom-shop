import { run, wooService } from '@/server/wooRoute';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(_request: Request, ctx: { params: Promise<{ id: string; vid: string }> }) {
  const { id, vid } = await ctx.params;
  return run(() => wooService.getVariation(Number(id), Number(vid)));
}

export async function PATCH(request: Request, ctx: { params: Promise<{ id: string; vid: string }> }) {
  const { id, vid } = await ctx.params;
  const body = await request.json().catch(() => ({}));
  return run(() => wooService.updateVariation(Number(id), Number(vid), body));
}

export async function DELETE(_request: Request, ctx: { params: Promise<{ id: string; vid: string }> }) {
  const { id, vid } = await ctx.params;
  return run(() => wooService.deleteVariation(Number(id), Number(vid)));
}
