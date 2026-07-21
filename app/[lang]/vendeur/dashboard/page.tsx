'use client';

import { Package, ShoppingBag, Star } from 'lucide-react';
import { useVendeurComments, useVendeurOrders, useVendeurProducts } from '@/api/vendeur';
import { PageHeader, StatCard } from '@/components/vendeur/ui';

export default function DashboardOverviewPage() {
  const products = useVendeurProducts({ per_page: 1 });
  const orders = useVendeurOrders({ per_page: 100 });
  const comments = useVendeurComments({ per_page: 100 });

  const productCount = products.data?.meta?.total ?? '—';
  const orderCount = orders.data ? orders.data.length : '—';
  const reviewCount = comments.data ? comments.data.length : '—';

  return (
    <>
      <PageHeader title="Tableau de bord" subtitle="Vue d'ensemble de votre boutique." />
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Produits" value={productCount} icon={Package} />
        <StatCard label="Commandes" value={orderCount} icon={ShoppingBag} />
        <StatCard label="Avis" value={reviewCount} icon={Star} />
      </div>
    </>
  );
}
