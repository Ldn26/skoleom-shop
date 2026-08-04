import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import User from '../../../../src/server/sequelize/schemas/user';
import Subscription from '../../../../src/server/sequelize/schemas/subscription';


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!,);

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature');

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature!,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    return new Response(`Webhook Signature Error: ${err.message}`, { status: 400 });
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      const userId = Number(session.client_reference_id);
      const stripeSubId = session.subscription as string;
      const customerId = session.customer as string;

      const stripeSub = await stripe.subscriptions.retrieve(stripeSubId);
      const user = await User.findByPk(userId);

      if (user) {
        await user.update({ isActive: true });

        await Subscription.upsert({
          userId: user.id,
          stripeCustomerId: customerId,
          stripeSubscriptionId: stripeSubId,
          planRole: user.role as 'acheteur' | 'vendeur',
          amount: user.role === 'vendeur' ? 40.0 : 9.99,
          status: 'active',
          currentPeriodStart: new Date(stripeSub.current_period_start * 1000),
          currentPeriodEnd: new Date(stripeSub.current_period_end * 1000),
        });
      }
      break;
    }

    case 'customer.subscription.deleted':
    case 'customer.subscription.updated': {
      const stripeSub = event.data.object as Stripe.Subscription;
      const sub = await Subscription.findOne({
        where: { stripeSubscriptionId: stripeSub.id },
      });

      if (sub) {
        const isActive = stripeSub.status === 'active';
        await sub.update({
          status: stripeSub.status as any,
          currentPeriodStart: new Date(stripeSub.current_period_start * 1000),
          currentPeriodEnd: new Date(stripeSub.current_period_end * 1000),
        });

        const user = await User.findByPk(sub.userId);
        if (user) {
          await user.update({ isActive });
        }
      }
      break;
    }
  }

  return NextResponse.json({ received: true });
}