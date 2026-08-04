import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getAuth, verifyRefresh, readCookie } from '@/server/auth';
import Subscription from '@/server/sequelize/schemas/subscription';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

async function resolveUserId(req: Request): Promise<number | null> {
  const fromAccess = getAuth(req)?.id;
  if (fromAccess) return Number(fromAccess);
  const rt = readCookie(req, 'refreshToken');
  if (rt) {
    try {
      return Number(verifyRefresh(rt).id);
    } catch {
      return null;
    }
  }
  return null;
}

export async function POST(req: Request) {
  try {
    const userId = await resolveUserId(req);
    if (!userId) {
      return NextResponse.json({ success: false, message: 'Non autorisé' }, { status: 401 });
    }

    const subscription = await Subscription.findOne({ where: { userId } });
    if (!subscription) {
      return NextResponse.json({ success: false, message: 'Aucun abonnement actif' }, { status: 404 });
    }

    const body = await req.json().catch(() => ({}));
    const resume = body?.resume === true;

    const updated = await stripe.subscriptions.update(subscription.stripeSubscriptionId, {
      cancel_at_period_end: !resume,
    });

    try {
      subscription.set('cancelAtPeriodEnd' as never, !resume as never);
      await subscription.save();
    } catch {
      /* column optional */
    }

    const periodEnd = (updated as unknown as { current_period_end?: number }).current_period_end;

    return NextResponse.json({
      success: true,
      message: resume ? 'Abonnement réactivé' : 'Résiliation programmée à la fin de la période',
      data: {
        cancelAtPeriodEnd: !resume,
        status: updated.status,
        currentPeriodEnd: periodEnd ? new Date(periodEnd * 1000).toISOString() : null,
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Erreur serveur';
    console.error('Cancel subscription failed:', error);
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
