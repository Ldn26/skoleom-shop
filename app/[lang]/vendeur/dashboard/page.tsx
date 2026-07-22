
'use client';
import { useState } from 'react';
import {
  AreaChart, Area, PieChart, Pie, Cell,
  ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line,
} from 'recharts';
import {
  LayoutDashboard, Package, PlusCircle, ShoppingCart, BarChart3,
  Settings, LogOut, TrendingUp, TrendingDown, Boxes, Wallet, Receipt,
  Menu, X,
} from 'lucide-react';
import {useVendeurProducts   , useVendeurOrders } from '../../../../src/api/vendeur';

const C = {
  bg: '#060606',
  panel: 'rgba(255,255,255,0.035)',
  panelSoft: 'rgba(255,255,255,0.02)',
  border: 'rgba(255,255,255,0.09)',
  borderSoft: 'rgba(255,255,255,0.05)',
  lime: '#a8ff35',
  limeDim: 'rgba(168,255,53,0.12)',
  amber: '#f5b544',
  red: '#f87171',
  w90: 'rgba(255,255,255,0.9)',
  w70: 'rgba(255,255,255,0.7)',
  w50: 'rgba(255,255,255,0.5)',
  w40: 'rgba(255,255,255,0.4)',
};

/* Mock data */
const REVENUE = [
  { m: 'Jan', v: 3200 }, { m: 'Fév', v: 4100 }, { m: 'Mar', v: 3800 },
  { m: 'Avr', v: 5200 }, { m: 'Mai', v: 4900 }, { m: 'Juin', v: 6400 },
  { m: 'Juil', v: 7100 }, { m: 'Août', v: 6800 }, { m: 'Sep', v: 8200 },
];
const STOCK = [
  { name: 'En stock', value: 39, color: C.lime },
  { name: 'Rupture', value: 9, color: C.amber },
];
const TOP = [
  { name: 'Veste bomber en cuir', sales: 42, revenue: 8399 },
  { name: 'Jean slim stretch', sales: 38, revenue: 3039 },
  { name: 'Hoodie laine mélangée', sales: 27, revenue: 1754 },
  { name: 'T-shirt coton bio', sales: 629, revenue: 629 },
];
const SPARK = (seed: number) =>
  Array.from({ length: 8 }, (_, i) => ({ i, v: 20 + ((Math.sin(seed + i) + 1) * 30) + i * 4 }));

const eur = (n: number) => n.toLocaleString('fr-FR') + ' €';

export default function VendeurDashboard({
  vendorName = 'Youcef Merabet',
  vendorEmail = 'v2@gmail.com',
}: {
  vendorName?: string;
  vendorEmail?: string;
}) {

  

  const  { data: products } = useVendeurProducts();

  const { data: orders } = useVendeurOrders();
  
const productsCount = products?.meta?.total || 0;

const ordersCount = orders?.length || 0;



// const inStokcCount = products?.filter((p: any) => p.stock_quantity > 0).length || 0;

  console.log('orders' , orders);

  const inStockPct = Math.round((STOCK[0].value / (STOCK[0].value + STOCK[1].value)) * 100);

  return (
    <div style={{ background: C.bg, color: C.w90, minHeight: '100vh' }} className="relative font-sans overflow-x-hidden">
      <style>{`
        @keyframes rise { from { opacity:0; transform: translateY(14px); } to { opacity:1; transform:none; } }
        @keyframes glow { 0%,100% { opacity:.35 } 50% { opacity:.6 } }
        .rise { animation: rise .55s cubic-bezier(.22,.61,.36,1) both; }
        .navitem { transition: background .2s ease, color .2s ease; }
        .card { transition: border-color .25s ease, transform .25s ease, background .25s ease; }
        .card:hover { transform: translateY(-2px); }
        @media (prefers-reduced-motion: reduce){ .rise{animation:none!important} }
        .dash-scroll::-webkit-scrollbar{width:6px}
        .dash-scroll::-webkit-scrollbar-thumb{background:rgba(255,255,255,.08);border-radius:8px}
      `}</style>

 
        <div className="mx-auto max-w-[1400px]">
          {/* header */}
          <div className="rise mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p style={{ fontSize: 11, letterSpacing: '0.2em', color: C.lime, fontWeight: 700 }}>
                BONJOUR, {vendorName.split(' ')[0].toUpperCase()}
              </p>
              <h1 className="mt-1 font-extrabold tracking-tight" style={{ fontSize: 30 }}>Tableau de bord</h1>
              <p className="mt-1" style={{ fontSize: 13.5, color: C.w50 }}>Vue d’ensemble de votre boutique · Septembre 2026</p>
            </div>
            <button
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-bold transition-all"
              style={{ background: C.lime, color: '#000', fontSize: 13.5 }}
              onMouseEnter={(e) => (e.currentTarget.style.filter = 'brightness(1.08)')}
              onMouseLeave={(e) => (e.currentTarget.style.filter = 'none')}
            >
              <PlusCircle size={17} />
              Ajouter un produit
            </button>
          </div>

          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard delay={40} icon={Package} label="Produits" value={productsCount} trend="+6" up sparkSeed={1} />
            {/* <StatCard delay={110} icon={Boxes} label="En stock" value={"inStockCount"} trend={`${inStockPct}%`} up sparkSeed={2} /> */}
            <StatCard delay={180} icon={Wallet} label="Chiffre d’affaires" value={eur(0)} trend="+18%" up sparkSeed={3} />
            <StatCard delay={250} icon={Receipt} label="Commandes" value={ordersCount} trend="-3%" up={false} sparkSeed={4} />
          </div>

          {/* revenue + stock donut */}
          <div className="mb-6 grid grid-cols-1 gap-4 xl:grid-cols-3">
            {/* revenue */}
            {/* <div className="rise card xl:col-span-2 rounded-3xl p-6" style={{ background: C.panel, border: `1px solid ${C.border}`, animationDelay: '300ms' }}>
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="font-bold" style={{ fontSize: 16 }}>Revenus</h2>
                  <p style={{ fontSize: 12.5, color: C.w50 }}>9 derniers mois</p>
                </div>
                <div className="flex items-center gap-1.5 rounded-full px-3 py-1" style={{ background: C.limeDim, color: C.lime, fontSize: 12, fontWeight: 700 }}>
                  <TrendingUp size={13} /> +18,4 %
                </div>
              </div>
              <div style={{ height: 260 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={REVENUE} margin={{ top: 4, right: 6, left: -18, bottom: 0 }}>
                    <defs>
                      <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={C.lime} stopOpacity={0.45} />
                        <stop offset="100%" stopColor={C.lime} stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis dataKey="m" tick={{ fill: C.w40, fontSize: 12 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: C.w40, fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v / 1000}k`} />
                    <Tooltip
                      cursor={{ stroke: C.lime, strokeOpacity: 0.25 }}
                      contentStyle={{ background: '#0d0d0d', border: `1px solid ${C.border}`, borderRadius: 14, color: '#fff', fontSize: 13 }}
                      formatter={(v) => [eur(v as number), 'Revenus']}
                      labelStyle={{ color: C.w50 }}
                    />
                    <Area type="monotone" dataKey="v" stroke={C.lime} strokeWidth={2.5} fill="url(#rev)" animationDuration={900} dot={{ r: 0 }} activeDot={{ r: 5, fill: C.lime, stroke: '#000', strokeWidth: 2 }} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div> */}

            {/* stock donut */}
            <div className="rise card rounded-3xl p-6" style={{ background: C.panel, border: `1px solid ${C.border}`, animationDelay: '370ms' }}>
              <h2 className="font-bold" style={{ fontSize: 16 }}>État du stock</h2>
              <p className="mb-2" style={{ fontSize: 12.5, color: C.w50 }}>Produits disponibles</p>
              <div className="relative" style={{ height: 210 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={STOCK} dataKey="value" nameKey="name" innerRadius={68} outerRadius={92} paddingAngle={3} stroke="none" animationDuration={900} startAngle={90} endAngle={-270}>
                      {STOCK.map((s) => <Cell key={s.name} fill={s.color} />)}
                    </Pie>
                    <Tooltip contentStyle={{ background: '#0d0d0d', border: `1px solid ${C.border}`, borderRadius: 14, color: '#fff', fontSize: 13 }} formatter={(v, n) => [`${v} produits`, n]} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-extrabold" style={{ fontSize: 30, color: C.lime, lineHeight: 1 }}>{inStockPct}%</span>
                  <span style={{ fontSize: 11.5, color: C.w40 }}>en stock</span>
                </div>
              </div>
              <div className="mt-3 space-y-2">
                {STOCK.map((s) => (
                  <div key={s.name} className="flex items-center justify-between" style={{ fontSize: 13 }}>
                    <span className="flex items-center gap-2" style={{ color: C.w70 }}>
                      <span className="rounded-full" style={{ width: 9, height: 9, background: s.color }} />
                      {s.name}
                    </span>
                    <span className="font-semibold">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* top products */}
          {/* <div className="rise card rounded-3xl p-6" style={{ background: C.panel, border: `1px solid ${C.border}`, animationDelay: '440ms' }}>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="font-bold" style={{ fontSize: 16 }}>Meilleures ventes</h2>
                <p style={{ fontSize: 12.5, color: C.w50 }}>Classé par revenus générés</p>
              </div>
              <button style={{ fontSize: 12.5, color: C.lime, fontWeight: 700 }}>Tout voir</button>
            </div>
            <div className="space-y-3">
              {TOP.map((p, i) => {
                const max = TOP[0].revenue;
                const pct = Math.round((p.revenue / max) * 100);
                return (
                  <div key={p.name} className="flex items-center gap-4 rounded-2xl px-3 py-2.5" style={{ background: C.panelSoft }}>
                    <span className="grid shrink-0 place-items-center rounded-lg font-bold" style={{ width: 26, height: 26, background: i === 0 ? C.lime : 'rgba(255,255,255,0.06)', color: i === 0 ? '#000' : C.w50, fontSize: 12 }}>
                      {i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="mb-1.5 flex items-center justify-between gap-3">
                        <span className="truncate font-medium" style={{ fontSize: 13.5 }}>{p.name}</span>
                        <span className="shrink-0 font-semibold" style={{ fontSize: 13, color: C.lime }}>{eur(p.revenue)}</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: C.lime, transition: 'width 1s ease' }} />
                      </div>
                    </div>
                    <span className="hidden shrink-0 sm:block" style={{ fontSize: 12, color: C.w40 }}>{p.sales} ventes</span>
                  </div>
                );
              })}
            </div>
          </div> */}
        </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, trend, up, sparkSeed, delay }: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  trend: string;
  up: boolean;
  sparkSeed: number;
  delay: number;
}) {
  const data = SPARK(sparkSeed);
  return (
    <div className="rise card rounded-3xl p-5" style={{ background: C.panel, border: `1px solid ${C.border}`, animationDelay: `${delay}ms` }}>
      <div className="flex items-start justify-between">
        <div className="grid place-items-center rounded-2xl" style={{ width: 44, height: 44, background: C.limeDim, color: C.lime }}>
          <Icon size={20} />
        </div>
        <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-bold" style={{ fontSize: 11, background: up ? C.limeDim : 'rgba(248,113,113,0.12)', color: up ? C.lime : C.red }}>
          {up ? <TrendingUp size={11} /> : <TrendingDown size={11} />}{trend}
        </span>
      </div>
      <p className="mt-4 font-bold uppercase" style={{ fontSize: 10.5, letterSpacing: '0.16em', color: C.w40 }}>{label}</p>
      <div className="mt-0.5 flex items-end justify-between gap-2">
        <p className="font-extrabold" style={{ fontSize: 24 }}>{value}</p>
        <div style={{ width: 66, height: 30 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line type="monotone" dataKey="v" stroke={up ? C.lime : C.red} strokeWidth={2} dot={false} animationDuration={800} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}