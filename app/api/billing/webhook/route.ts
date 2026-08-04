import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import sequelize from '../../../../src/server/sequelize'; // adaptez selon votre dossier DB
import User from '../../../../src/server/sequelize/schemas/user';
import Subscription from '@/server/sequelize/schemas/subscription';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-07-29.dahlia',
});

export const dynamic = 'force-dynamic';

function sanitizeStatus(status: Stripe.Subscription.Status) {
  const allowedStatuses = ['active', 'canceled', 'past_due', 'unpaid', 'incomplete'] as const;
  if ((allowedStatuses as readonly string[]).includes(status)) {
    return status as (typeof allowedStatuses)[number];
  }
  return 'canceled';
}

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ error: 'Missing stripe-signature header' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    return NextResponse.json({ error: `Webhook Signature Error: ${err.message}` }, { status: 400 });
  }

  // Filtrer uniquement les événements gérés pour accélérer le traitement
  const handledEvents = [
    'checkout.session.completed',
    'customer.subscription.updated',
    'customer.subscription.deleted',
  ];

  if (!handledEvents.includes(event.type)) {
    return NextResponse.json({ received: true, ignored: true });
  }

  try {
    // S'assurer que le pool de connexion PostgreSQL est actif
    await sequelize.authenticate();

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        
        // Vérification de la présence de l'ID utilisateur
        if (!session.client_reference_id) {
          console.warn('Webhook Checkout Warning: missing client_reference_id on session', session.id);
          break;
        }

        const userId = Number(session.client_reference_id);
        const stripeSubId = session.subscription as string;
        const customerId = session.customer as string;

        if (isNaN(userId) || !stripeSubId) break;

        const stripeSub = await stripe.subscriptions.retrieve(stripeSubId);
        const firstItem = stripeSub.items.data[0];

        const user = await User.findByPk(userId);

        if (user) {
          await user.update({ isActive: true });

          await Subscription.upsert({
            userId: user.id,
            stripeCustomerId: customerId,
            stripeSubscriptionId: stripeSubId,
            planRole: user.role as 'acheteur' | 'vendeur',
            amount: user.role === 'vendeur' ? 40.0 : 9.99,
            status: sanitizeStatus(stripeSub.status),
            currentPeriodStart: firstItem?.current_period_start
              ? new Date(firstItem.current_period_start * 1000)
              : new Date(),
            currentPeriodEnd: firstItem?.current_period_end
              ? new Date(firstItem.current_period_end * 1000)
              : new Date(),
          });
        }
        break;
      }

      case 'customer.subscription.deleted':
      case 'customer.subscription.updated': {
        const stripeSub = event.data.object as Stripe.Subscription;
        const firstItem = stripeSub.items.data[0];

        const sub = await Subscription.findOne({
          where: { stripeSubscriptionId: stripeSub.id },
        });

        if (sub) {
          const isActive = stripeSub.status === 'active';
          await sub.update({
            status: sanitizeStatus(stripeSub.status),
            currentPeriodStart: firstItem?.current_period_start
              ? new Date(firstItem.current_period_start * 1000)
              : sub.currentPeriodStart,
            currentPeriodEnd: firstItem?.current_period_end
              ? new Date(firstItem.current_period_end * 1000)
              : sub.currentPeriodEnd,
          });

          const user = await User.findByPk(sub.userId);
          if (user) {
            await user.update({ isActive });
          }
        }
        break;
      }
    }
  } catch (error: any) {
    console.error('Webhook processing error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}