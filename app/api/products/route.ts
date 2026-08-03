
import { NextResponse } from 'next/server';
import axios from 'axios';
import { buildParams, injectUserMeta, query, run, wooService } from '@/server/wooRoute';
import { getAuth } from '@/server/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const q = query(request);
  const params = buildParams(q);
  const {  limit, page, ...rest } = params as Record<string, unknown>;

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

export async function POST(request: Request) {
  try {
    const auth = getAuth(request);
    if (!auth) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const reqBody: Record<string, unknown> = await request.json();
    const {  ...productPayload } = reqBody;
    const payloadWithMeta = injectUserMeta(productPayload, auth.id);

    return run(() => wooService.createProductFull(payloadWithMeta));
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        { error: error.response?.data?.message || error.message },
        { status: error.response?.status || 500 }
      );
    }
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}