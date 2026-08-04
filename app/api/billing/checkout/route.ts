import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import User from '../../../../src/server/sequelize/schemas/user';
import { getAuth, verifyRefresh, readCookie } from '@/server/auth';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    let userId = getAuth(req)?.id ?? null;
    if (!userId) {
      const rt = readCookie(req, 'refreshToken');
      if (rt) {
        try {
          userId = verifyRefresh(rt).id;
        } catch {
          userId = null;
        }
      }
    }

    if (!userId) {
      return NextResponse.json({ message: 'Non autorisé' }, { status: 401 });
    }

    const user = await User.findByPk(userId);
    if (!user) {
      return NextResponse.json({ message: 'Utilisateur introuvable' }, { status: 404 });
    }

    if (user.role === 'admin') {
      return NextResponse.json(
        { message: 'Les comptes administrateurs n\'ont pas besoin d\'abonnement' },
        { status: 400 }
      );
    }

    const priceId =
      user.role === 'vendeur'
        ? process.env.STRIPE_PRICE_VENDEUR
        : process.env.STRIPE_PRICE_ACHETEUR;

    if (!priceId) {
      console.error(`PRICE_ID manquant pour le rôle: ${user.role}`);
      return NextResponse.json(
        { message: 'Configuration du tarif Stripe invalide' },
        { status: 500 }
      );
    }

    const baseUrl = process.env.FRONTEND_URL || 'http://localhost:3039';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      customer_email: user.email,
      client_reference_id: String(user.id),
      line_items: [{ price: priceId, quantity: 1 }],
      metadata: {
        role: user.role,
        userId: String(user.id),
      },
      subscription_data: {
        metadata: {
          role: user.role,
          userId: String(user.id),
        },
      },
      success_url: `${baseUrl}/compte?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/compte?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Erreur lors du checkout Stripe:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}