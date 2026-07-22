'use client';

import { Package, ShoppingBag, Star } from 'lucide-react';
import {  useVendeurOrders, useVendeurProducts } from '@/api/vendeur';
import { PageHeader, StatCard } from '@/components/vendeur/ui';

export default function DashboardOverviewPage() {
  const products = useVendeurProducts({ per_page: 1 }); 
  const orders = useVendeurOrders({ per_page: 100 });

  const productCount = products.data?.meta?.total ?? '0';
  
  const orderCount = orders.data ? orders.data.length : '0';
      console.log('productCount', productCount);
  console.log('orderCount', orderCount);
  return (
    <>
      <PageHeader title="Tableau de bord" subtitle="Vue d'ensemble de votre boutique." />
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Produits" value={productCount} icon={Package} />
        <StatCard label="Commandes" value={orderCount} icon={ShoppingBag} />
        {/* <StatCard label="Avis" value={reviewCount} icon={Star} /> */}
      </div>
    </>
  );
}
