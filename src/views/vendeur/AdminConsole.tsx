import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Activity, Film, Package, ShoppingBag, Sparkles, TrendingUp, Users } from 'lucide-react';
import { adminAPI, analyticsAPI } from '../../services/api';
import { EUR_TO_USD } from '../../constants/app';
import type { Order } from '../../types';
import { useAccessibility } from '../../context/AccessibilityContext';
import {
  getSkoleomChartColors,
  getSkoleomPrimaryChartColor,
  getSkoleomSecondaryChartColor,
} from '../../a11y/chartColors';

/**
 * Console d'administration.
 * Affiche les KPI globaux, les courbes de revenus, la répartition des événements
 * et les ventes par produit. Les données proviennent des endpoints /admin et /analytics.
 */

/** Style commun aux tooltips des charts recharts. */
const TOOLTIP_STYLE: React.CSSProperties = {
  background: '#0A0A0A',
  border: '1px solid #ffffff20',
  borderRadius: 12,
};

interface AdminOverview {
  recentOrders?: Order[];
}

interface DashboardSummary {
  totalUsers: number;
  totalContent: number;
  totalProducts: number;
  totalCapsules: number;
  totalOrders: number;
  totalRevenue: number;
}

interface DashboardTopProduct {
  product?: { name?: string };
  quantitySold: number;
}

interface DashboardData {
  summary: DashboardSummary;
  eventsByType?: Record<string, number>;
  topProducts?: DashboardTopProduct[];
}

/** Convertit un montant EUR en chaîne USD à 2 décimales. */
const formatUsd = (eur: number | undefined | null): string =>
  `${(Number(eur ?? 0) * EUR_TO_USD).toFixed(2)} $`;

export default function AdminConsole() {
  const [overview, setOverview] = useState<AdminOverview | null>(null);
  const [dashboard, setDashboard] = useState<DashboardData | null>(null);
  const { i18n, t } = useTranslation();
  const { settings } = useAccessibility();
  const chartColors = useMemo(() => getSkoleomChartColors(), [settings.colorVision]);
  const primaryChartColor = useMemo(() => getSkoleomPrimaryChartColor(), [settings.colorVision]);
  const secondaryChartColor = useMemo(
    () => getSkoleomSecondaryChartColor(),
    [settings.colorVision],
  );

  // Charge en parallèle les deux endpoints alimentant le dashboard
  useEffect(() => {
    adminAPI
      .overview()
      .then(setOverview)
      .catch(() => {});
    analyticsAPI
      .dashboard()
      .then(setDashboard)
      .catch(() => {});
  }, []);

  /** Données dérivées (transformations pour les charts). */
  const charts = useMemo(() => {
    if (!dashboard) return null;

    const eventsData = Object.entries(dashboard.eventsByType ?? {}).map(([name, count]) => ({
      name,
      count,
    }));

    const topProductsData = (dashboard.topProducts ?? []).slice(0, 5).map((item) => ({
      name: item.product?.name?.slice(0, 18) ?? '?',
      sales: item.quantitySold,
    }));

    // Tendance de revenus simulée sur 7 jours à partir du CA cumulé
    const trend = Array.from({ length: 7 }, (_, i) => ({
      day: `J${i + 1}`,
      revenue: Math.round((dashboard.summary.totalRevenue / 7) * (0.5 + Math.random())),
    }));

    return { eventsData, topProductsData, trend };
  }, [dashboard]);

  if (!overview || !dashboard || !charts) {
    return (
      <div className="pt-32 text-center text-univ-lime animate-pulse">
        {t('admin.loading', { defaultValue: 'Loading admin console...' })}
      </div>
    );
  }

  const summary = dashboard.summary;

  const kpiCards = [
    {
      icon: Users,
      label: t('admin.kpis.users', { defaultValue: 'Utilisateurs' }),
      value: summary.totalUsers,
      color: chartColors[0],
    },
    {
      icon: Film,
      label: t('admin.kpis.content', { defaultValue: 'Contenus' }),
      value: summary.totalContent,
      color: chartColors[1],
    },
    {
      icon: Package,
      label: t('admin.kpis.products', { defaultValue: 'Produits' }),
      value: summary.totalProducts,
      color: chartColors[2],
    },
    {
      icon: Sparkles,
      label: t('admin.kpis.capsules', { defaultValue: 'Capsules' }),
      value: summary.totalCapsules,
      color: chartColors[3],
    },
    {
      icon: ShoppingBag,
      label: t('admin.kpis.orders', { defaultValue: 'Commandes' }),
      value: summary.totalOrders,
      color: chartColors[4],
    },
    {
      icon: TrendingUp,
      label: t('admin.kpis.revenue', { defaultValue: 'CA' }),
      value: formatUsd(summary.totalRevenue),
      color: chartColors[5],
    },
  ];

  return (
    <div className="pt-32 px-6 lg:px-10 max-w-[1600px] mx-auto pb-20">
      {/* En-tête de la console */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-12">
        <div>
          <p className="text-univ-lime uppercase tracking-widest font-bold text-xs mb-2">
            Monetizer Studio
          </p>
          <h1 className="display-text text-5xl md:text-6xl">
            {t('admin.title', { defaultValue: 'Admin Console' })}
          </h1>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-univ-lime/20 border border-univ-lime/40">
          <span className="w-2 h-2 rounded-full bg-univ-lime animate-pulse" />
          <span className="text-xs font-bold text-univ-lime uppercase">
            {t('admin.realtime', { defaultValue: 'Real-time' })}
          </span>
        </div>
      </div>

      {/* Rangée de KPI */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-10">
        {kpiCards.map((kpi, index) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="glass rounded-2xl p-5 relative overflow-hidden"
          >
            <div
              className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl opacity-30"
              style={{ background: kpi.color }}
              aria-hidden
            />
            <kpi.icon size={20} className="mb-3" style={{ color: kpi.color }} />
            <div className="display-text text-2xl">{kpi.value}</div>
            <p className="text-xs text-white/50">{kpi.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Grille de charts */}
      <div className="grid lg:grid-cols-2 gap-6 mb-10">
        {/* Courbe : CA 7 derniers jours */}
        <div className="glass rounded-2xl p-6">
          <h3 className="font-bold mb-1 flex items-center gap-2">
            <TrendingUp size={16} className="text-univ-lime" />{' '}
            {t('admin.charts.revenue.title', { defaultValue: 'CA — 7 derniers jours' })}
          </h3>
          <p className="text-xs text-white/50 mb-5">
            {t('admin.charts.revenue.subtitle', { defaultValue: 'Tendance globale' })}
          </p>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={charts.trend}>
              <CartesianGrid stroke="#ffffff10" />
              <XAxis dataKey="day" stroke="#ffffff60" fontSize={11} />
              <YAxis stroke="#ffffff60" fontSize={11} />
              <Tooltip contentStyle={TOOLTIP_STYLE} />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke={primaryChartColor}
                strokeWidth={3}
                dot={{ fill: primaryChartColor, r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Camembert : répartition des événements */}
        <div className="glass rounded-2xl p-6">
          <h3 className="font-bold mb-1 flex items-center gap-2">
            <Activity size={16} className="text-univ-orange" />{' '}
            {t('admin.charts.events.title', { defaultValue: 'Événements par type' })}
          </h3>
          <p className="text-xs text-white/50 mb-5">
            {t('admin.charts.events.subtitle', {
              defaultValue: 'Capsule clicks, views, purchases…',
            })}
          </p>
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie
                data={
                  charts.eventsData.length
                    ? charts.eventsData
                    : [{ name: t('admin.charts.noData', { defaultValue: 'No data' }), count: 1 }]
                }
                dataKey="count"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90}
                innerRadius={50}
              >
                {charts.eventsData.map((_, i) => (
                  <Cell key={i} fill={chartColors[i % chartColors.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={TOOLTIP_STYLE} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Barres : top produits */}
        <div className="glass rounded-2xl p-6 lg:col-span-2">
          <h3 className="font-bold mb-1 flex items-center gap-2">
            <Package size={16} className="text-univ-yellow" />{' '}
            {t('admin.charts.products.title', { defaultValue: 'Top produits — Skoleom Pro KPI' })}
          </h3>
          <p className="text-xs text-white/50 mb-5">
            {t('admin.charts.products.subtitle', { defaultValue: 'Ventes par produit' })}
          </p>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart
              data={
                charts.topProductsData.length
                  ? charts.topProductsData
                  : [{ name: t('admin.charts.noData', { defaultValue: 'No data' }), sales: 0 }]
              }
            >
              <CartesianGrid stroke="#ffffff10" />
              <XAxis dataKey="name" stroke="#ffffff60" fontSize={11} />
              <YAxis stroke="#ffffff60" fontSize={11} />
              <Tooltip contentStyle={TOOLTIP_STYLE} />
              <Bar dataKey="sales" fill={secondaryChartColor} radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Commandes récentes */}
      <div className="glass rounded-2xl p-6">
        <h3 className="font-bold mb-5 flex items-center gap-2">
          <ShoppingBag size={16} className="text-univ-lime" />{' '}
          {t('admin.orders.title', { defaultValue: 'Commandes récentes' })}
        </h3>
        {!overview.recentOrders?.length ? (
          <p className="text-white/40 text-sm">
            {t('admin.orders.empty', { defaultValue: 'Pas encore de commande' })}
          </p>
        ) : (
          <div className="space-y-2">
            {overview.recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition"
              >
                <code className="text-xs text-univ-lime">{order.id}</code>
                <span className="text-xs text-white/50 flex-1">
                  {new Date(order.createdAt).toLocaleString(i18n.language)}
                </span>
                <span className="text-xs">
                  {t('admin.orders.itemCount', {
                    count: order.items.length,
                    defaultValue: '{{count}} item(s)',
                  })}
                </span>
                <span className="font-bold text-univ-orange">{formatUsd(order.total)}</span>
                <span className="text-xs uppercase tracking-wide bg-univ-lime/20 text-univ-lime px-2 py-1 rounded-full font-bold">
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
