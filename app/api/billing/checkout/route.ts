import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import User from '../../../../src/server/sequelize/schemas/user';
import { getAuth } from '@/server/auth';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!
, {
    typescript: true,
    }
);

export async function POST(req: Request) {
  try {
    // get it from Coockie
      const auth = getAuth(req);
     console.log('auth', auth);
     const userId = auth?.id;
    const user = await User.findByPk(userId);
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    console.log('user', user);
    if (user.role === 'admin') {
      return NextResponse.json(
        { message: 'Admin accounts do not require a subscription' },
        { status: 400 }
      );
    }

    const priceId =
      user.role === 'vendeur'
        ? process.env.STRIPE_PRICE_VENDEUR
        : process.env.STRIPE_PRICE_ACHETEUR;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      customer_email: user.email,
      client_reference_id: String(user.id),
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      metadata: {
        role: user.role,
      },
      success_url: `${process.env.FRONTEND_URL}/compte?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/compte?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}