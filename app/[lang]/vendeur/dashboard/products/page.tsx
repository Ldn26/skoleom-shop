'use client';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle } from 'lucide-react';
import { useVendeurProducts } from '@/api/vendeur';
import { useLocalizedPath } from '@/i18n/useLocalizedPath';
import { Badge, Card, PageHeader, StateBlock } from '@/components/vendeur/ui';

export default function VendeurProductsPage() {
  const localizePath = useLocalizedPath();
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useVendeurProducts({ page, per_page: 20 });

  const products = data?.data ?? [];
  const totalPages = data?.meta?.total_pages ?? 1;

  return (
    <>
      <PageHeader
        title="Mes produits"
        subtitle={data?.meta ? `${data.meta.total} produit(s)` : 'Vos produits WooCommerce'}
        action={
          <Link
            to={localizePath('/vendeur/dashboard/products/new')}
            className="inline-flex items-center gap-2 rounded-xl bg-[#a8ff35] px-4 py-2.5 text-sm font-bold text-black transition hover:brightness-105"
          >
            <PlusCircle size={16} />
            Ajouter un produit
          </Link>
        }
      />

      <Card className="overflow-hidden">
        {isLoading ? (
          <StateBlock state="loading" />
        ) : isError ? (
          <StateBlock state="error" />
        ) : products.length === 0 ? (
          <StateBlock state="empty" emptyLabel="Aucun produit pour l'instant." />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-[11px] uppercase tracking-wider text-white/40">
                  <th className="px-5 py-3 font-semibold">Produit</th>
                  <th className="px-5 py-3 font-semibold">SKU</th>
                  <th className="px-5 py-3 font-semibold">Prix</th>
                  <th className="px-5 py-3 font-semibold">Stock</th>
                  <th className="px-5 py-3 font-semibold">Statut</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.id} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        {p.images?.[0]?.src ? (
                          <img src={p.images[0].src} alt="" className="h-10 w-10 rounded-lg object-cover" />
                        ) : (
                          <div className="h-10 w-10 rounded-lg bg-white/5" />
                        )}
                        <span className="font-medium text-white">{p.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-white/50">{(p as { sku?: string }).sku || '—'}</td>
                    <td className="px-5 py-3 text-white/80">{p.price || p.regular_price || '—'}</td>
                    <td className="px-5 py-3">
                      <Badge tone={p.stock_status === 'instock' ? 'green' : 'amber'}>
                        {p.stock_status || 'n/a'}
                      </Badge>
                    </td>
                    <td className="px-5 py-3">
                      <Badge tone={p.status === 'publish' ? 'green' : 'neutral'}>{p.status || '—'}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      {totalPages > 1 && (
        <div className="mt-4 flex items-center justify-center gap-3 text-sm">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page <= 1}
            className="rounded-lg border border-white/10 px-3 py-1.5 text-white/70 transition hover:bg-white/5 disabled:opacity-40"
          >
            Précédent
          </button>
          <span className="text-white/50">
            {page} / {totalPages}
          </span>
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page >= totalPages}
            className="rounded-lg border border-white/10 px-3 py-1.5 text-white/70 transition hover:bg-white/5 disabled:opacity-40"
          >
            Suivant
          </button>
        </div>
      )}
    </>
  );
}
