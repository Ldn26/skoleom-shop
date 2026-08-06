import { NextResponse } from 'next/server';
import { getAuth } from '@/server/auth';
import Subscription from '@/server/sequelize/schemas/subscription';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  try {
    const userId = getAuth(req)?.id ?? null;

    if (!userId) {
      return NextResponse.json({ message: 'Non autorisé' }, { status: 401 });
    }

    const subscription = await Subscription.findOne({
      where: { userId },
      attributes: ['id', 'planRole', 'amount', 'status', 'currentPeriodStart', 'currentPeriodEnd'],
    });

    if (!subscription) {
      return NextResponse.json(
        { message: 'Aucune souscription trouvée pour cet utilisateur' },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { message: 'Souscriptions récupérée avec succès', data: subscription },
      { status: 200 },
    );
  } catch (error) {
    console.error('Erreur lors de la récupération de la souscription :', error);
    return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 });
  }
}
