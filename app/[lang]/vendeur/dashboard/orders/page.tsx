'use client';

import { useVendeurOrders } from '@/api/vendeur';
import { Badge, Card, PageHeader, StateBlock } from '@/components/vendeur/ui';

const STATUS_TONE: Record<string, 'green' | 'amber' | 'red' | 'neutral'> = {
  completed: 'green',
  processing: 'amber',
  'on-hold': 'amber',
  pending: 'neutral',
  cancelled: 'red',
  refunded: 'red',
  failed: 'red',
};

export default function VendeurOrdersPage() {
  const { data, isLoading, isError } = useVendeurOrders({ per_page: 20 });
  const orders = data ?? [];

  return (
    <div className="mx-auto max-w-[1400px]">
      <PageHeader title="Commandes" subtitle="Les commandes de votre boutique." />
      <Card className="overflow-hidden">
        {isLoading ? (
          <StateBlock state="loading" />
        ) : isError ? (
          <StateBlock state="error" />
        ) : orders.length === 0 ? (
          <StateBlock state="empty" emptyLabel="Aucune commande." />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-[11px] uppercase tracking-wider text-white/40">
                  <th className="px-5 py-3 font-semibold">Commande</th>
                  <th className="px-5 py-3 font-semibold">Client</th>
                  <th className="px-5 py-3 font-semibold">Date</th>
                  <th className="px-5 py-3 font-semibold">Total</th>
                  <th className="px-5 py-3 font-semibold">Statut</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.id} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]">
                    <td className="px-5 py-3 font-medium text-white">#{o.number || o.id}</td>
                    <td className="px-5 py-3 text-white/70">
                      {[o.billing?.first_name, o.billing?.last_name].filter(Boolean).join(' ') ||
                        o.billing?.email ||
                        '—'}
                    </td>
                    <td className="px-5 py-3 text-white/50">
                      {o.date_created ? new Date(o.date_created).toLocaleDateString() : '—'}
                    </td>
                    <td className="px-5 py-3 text-white/80">
                      {o.total} {o.currency}
                    </td>
                    <td className="px-5 py-3">
                      <Badge tone={STATUS_TONE[o.status] || 'neutral'}>{o.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
}
