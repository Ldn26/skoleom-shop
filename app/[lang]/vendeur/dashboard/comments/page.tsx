'use client';

import { Star } from 'lucide-react';
import { useVendeurComments } from '@/api/vendeur';
import { Badge, Card, PageHeader, StateBlock } from '@/components/vendeur/ui';

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          size={13}
          className={n <= rating ? 'fill-[#a8ff35] text-[#a8ff35]' : 'text-white/20'}
        />
      ))}
    </div>
  );
}

export default function VendeurCommentsPage() {
  const { data, isLoading, isError } = useVendeurComments({ per_page: 20 });
  const reviews = data ?? [];

  return (
    <>
      <PageHeader title="Avis clients" subtitle="Les avis laissés sur vos produits." />
      {isLoading ? (
        <Card><StateBlock state="loading" /></Card>
      ) : isError ? (
        <Card><StateBlock state="error" /></Card>
      ) : reviews.length === 0 ? (
        <Card><StateBlock state="empty" emptyLabel="Aucun avis pour l'instant." /></Card>
      ) : (
        <div className="grid gap-3">
          {reviews.map((r) => (
            <Card key={r.id} className="p-5">
              <div className="mb-2 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-white">{r.reviewer || 'Anonyme'}</span>
                  <Stars rating={Number(r.rating) || 0} />
                </div>
                <Badge tone={r.status === 'approved' ? 'green' : 'amber'}>{r.status}</Badge>
              </div>
              <p className="text-sm leading-relaxed text-white/70">{r.review}</p>
              <p className="mt-3 text-[11px] text-white/35">
                Produit #{r.product_id}
                {r.date_created ? ` · ${new Date(r.date_created).toLocaleDateString()}` : ''}
              </p>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
