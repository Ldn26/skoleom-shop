// import { useEffect, useState } from 'react';
// import {
//   LayoutDashboard, Package, ShoppingCart, Users,
//   Tv2, Zap, TrendingUp, TrendingDown, Plus,
//   Upload, ExternalLink, AlertTriangle, Star,
// } from 'lucide-react';

// const Badge = ({ status }) => {
//   const map = {
//     'Expédié':    'bg-lime-400/10 text-lime-400',
//     'Livré':      'bg-[#7FE3FF]/10 text-[#7FE3FF]',
//     'En attente': 'bg-[#FFB84D]/10 text-[#FFB84D]',
//     'En ligne':   'bg-lime-400/10 text-lime-400',
//   };
//   return (
//     <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${map[status] ?? 'bg-white/5 text-zinc-400'}`}>
//       {status}
//     </span>
//   );
// };

// const KpiCard = ({ label, value, change, trend }) => (
//   <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-5">
//     <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-3">{label}</p>
//     <p className="text-2xl font-black text-white">{value}</p>
//     <p className={`text-xs mt-2 flex items-center gap-1 ${trend === 'down' ? 'text-red-400' : 'text-lime-400'}`}>
//       {trend === 'down' ? <TrendingDown className="w-3 h-3" /> : <TrendingUp className="w-3 h-3" />}
//       {change}
//     </p>
//   </div>
// );

// const TABS = [
//   { id: 'apercu',    label: "Vue d'ensemble", icon: LayoutDashboard },
//   { id: 'produits',  label: 'Produits',        icon: Package },
//   { id: 'commandes', label: 'Commandes',        icon: ShoppingCart },
//   { id: 'clients',   label: 'Clients',          icon: Users },
//   { id: 'wtb',       label: 'Watch.Touch.Buy',  icon: Tv2 },
//   { id: 'ia',        label: 'Studio IA',        icon: Zap, lime: true },
// ];

// const SPARK = "M0,160 L40,140 L80,150 L120,100 L160,110 L200,80 L240,90 L280,60 L320,70 L360,40 L400,50 L440,30 L480,45 L520,25 L560,35 L600,18";

// export default function Vendeur() {
//   const [tab, setTab]             = useState('apercu');
//   const [dash, setDash]           = useState(null);
//   const [products, setProducts]   = useState([]);
//   const [wtb, setWtb]             = useState([]);
//   const [aiInput, setAiInput]     = useState('');
//   const [mobileNav, setMobileNav] = useState(false);

//   // useEffect(() => {
//   //   api.sellerDashboard().then(setDash).catch(() => {});
//   //   api.sellerProducts().then(setProducts).catch(() => {});
//   //   api.watchTouchBuy().then(setWtb).catch(() => {});
//   // }, []);

//   const handleTab = (id) => { setTab(id); setMobileNav(false); };

//   const Sidebar = () => (
//     <nav className="flex flex-col gap-1">
//       {TABS.map(({ id, label, icon: Icon, lime }) => (
//         <button
//           key={id}
//           onClick={() => handleTab(id)}
//           className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all text-left w-full
//             ${tab === id
//               ? 'bg-lime-400/10 text-lime-400 font-semibold'
//               : lime
//                 ? 'text-lime-400/70 hover:bg-white/5 hover:text-lime-400'
//                 : 'text-zinc-400 hover:bg-white/5 hover:text-white'}`}
//         >
//           <Icon className="w-4 h-4 shrink-0" />
//           {label}
//         </button>
//       ))}
//     </nav>
//   );

//   const PanelApercu = () => (
//     <div className="space-y-4">
//       {dash && (
//         <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
//           {dash.kpis.map((k) => <KpiCard key={k.label} {...k} />)}
//         </div>
//       )}
//       <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
//         {/* <div className="lg:col-span-3 bg-white/[0.04] border border-white/[0.07] rounded-2xl p-5">
//           <p className="text-sm font-semibold mb-4">Performance CA <span className="text-zinc-500 font-normal">(7 derniers jours)</span></p>
//           <div className="h-[180px] rounded-xl overflow-hidden bg-gradient-to-b from-lime-400/5 to-transparent p-2">
//             <svg viewBox="0 0 600 200" preserveAspectRatio="none" className="w-full h-full">
//               <defs>
//                 <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="0%" stopColor="#a3e635" stopOpacity=".35" />
//                   <stop offset="100%" stopColor="#a3e635" stopOpacity="0" />
//                 </linearGradient>
//               </defs>
//               <path d={`${SPARK} L600,200 L0,200Z`} fill="url(#g1)" />
//               <path d={SPARK} fill="none" stroke="#a3e635" strokeWidth="2.5" />
//             </svg>
//           </div>
//         </div> */}
//         <div className="lg:col-span-2 bg-white/[0.04] border border-white/[0.07] rounded-2xl p-5">
//           <p className="text-sm font-semibold mb-4">Dernières commandes</p>
//           <div className="flex flex-col gap-2">
//             {dash?.recentOrders?.map((o) => (
//               <div key={o.number} className="flex items-center justify-between gap-3 p-3 bg-white/[0.03] border border-white/[0.05] rounded-xl">
//                 <div className="min-w-0">
//                   <p className="text-sm font-medium truncate">{o.product}</p>
//                   <p className="text-[11px] text-zinc-500 mt-0.5">#{o.number} · {o.ago}</p>
//                 </div>
//                 <Badge status={o.status} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       {dash?.stockAlerts?.length > 0 && (
//         <div className="bg-[#FFB84D]/5 border border-[#FFB84D]/20 rounded-2xl p-5">
//           <p className="flex items-center gap-2 text-sm font-semibold text-[#FFB84D] mb-3">
//             <AlertTriangle className="w-4 h-4" /> Alertes de stock
//           </p>
//           <div className="flex flex-wrap gap-2">
//             {dash.stockAlerts.map((a) => (
//               <span key={a} className="text-xs px-3 py-1 bg-[#FFB84D]/10 text-[#FFB84D] rounded-full">{a}</span>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );

//   const PanelProduits = () => (
//     <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-5">
//       <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
//         <div>
//           <h3 className="text-lg font-bold">Mes produits</h3>
//           <p className="text-zinc-500 text-sm mt-0.5">{products.length} produits en ligne</p>
//         </div>
//         <div className="flex gap-2">
//           <button className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-xl text-sm text-zinc-300 hover:bg-white/5 transition">
//             <Upload className="w-4 h-4" /> Importer CSV
//           </button>
//           <button className="flex items-center gap-2 px-4 py-2 bg-lime-400 text-black rounded-xl text-sm font-bold hover:opacity-90 transition">
//             <Plus className="w-4 h-4" /> Nouveau produit
//           </button>
//         </div>
//       </div>
//       <div className="overflow-x-auto">
//         <table className="w-full text-sm">
//           <thead>
//             <tr className="border-b border-white/[0.07]">
//               {['Produit', 'Catégorie', 'Prix', 'Stock', 'Statut', 'Essayage IA'].map((h) => (
//                 <th key={h} className="text-left py-3 px-3 text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">{h}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((p) => (
//               <tr key={p.id} className="border-b border-white/[0.04] hover:bg-white/[0.02] transition">
//                 <td className="py-3 px-3">
//                   <div className="flex items-center gap-3">
//                     <img src={p.image} alt="" className="w-10 h-11 rounded-lg object-cover shrink-0" />
//                     <span className="font-semibold text-white truncate max-w-[160px]">{p.name}</span>
//                   </div>
//                 </td>
//                 <td className="py-3 px-3 text-zinc-400">{p.category}</td>
//                 <td className="py-3 px-3 font-bold text-white">{p.price} €</td>
//                 <td className="py-3 px-3 text-zinc-400">{p.stock}</td>
//                 <td className="py-3 px-3"><Badge status={p.status} /></td>
//                 <td className="py-3 px-3">
//                   {p.tryon ? <span className="text-lime-400 text-xs font-semibold">✓ Actif</span> : <span className="text-zinc-600">—</span>}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );

//   const PanelCommandes = () => (
//     <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-5">
//       <h3 className="text-lg font-bold mb-1">Commandes</h3>
//       <p className="text-zinc-500 text-sm mb-5">Toutes vos commandes, en temps réel.</p>
//       <div className="overflow-x-auto">
//         <table className="w-full text-sm">
//           <thead>
//             <tr className="border-b border-white/[0.07]">
//               {['N°', 'Client', 'Montant', 'Statut'].map((h) => (
//                 <th key={h} className="text-left py-3 px-3 text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">{h}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {Array.from({ length: 6 }).map((_, i) => {
//               const statuses = ['Expédié', 'Livré', 'En attente'];
//               return (
//                 <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02] transition">
//                   <td className="py-3 px-3 font-bold text-white">#SK-294{80 - i}</td>
//                   <td className="py-3 px-3 text-zinc-400">Client {i + 1}</td>
//                   <td className="py-3 px-3 font-bold text-white">{420 - i * 40} €</td>
//                   <td className="py-3 px-3"><Badge status={statuses[i % 3]} /></td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );

//   const PanelClients = () => (
//     <div className="space-y-4">
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
//         {[
//           { label: 'Clients total', value: '8 942', change: '+312 ce mois', trend: 'up' },
//           { label: 'Panier moyen',  value: '187 €',  change: '+9 %',        trend: 'up' },
//           { label: 'Fidélité',      value: '64 %',   change: 'clients récurrents', trend: 'up' },
//         ].map((k) => <KpiCard key={k.label} {...k} />)}
//       </div>
//       <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-5">
//         <h3 className="text-lg font-bold mb-1">Top clients</h3>
//         <p className="text-zinc-500 text-sm mb-5">Segmentation par panier moyen.</p>
//         <div className="flex flex-col gap-2">
//           {['Marie L.', 'Thomas B.', 'Clara M.', 'Antoine R.', 'Sophie K.'].map((name, i) => (
//             <div key={name} className="flex items-center justify-between p-3 bg-white/[0.03] border border-white/[0.05] rounded-xl">
//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 rounded-full bg-lime-400/10 flex items-center justify-center text-lime-400 text-xs font-bold">
//                   {name[0]}
//                 </div>
//                 <span className="text-sm font-medium">{name}</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <span className="text-lime-400 text-sm font-bold">{420 - i * 35} €</span>
//                 <div className="flex gap-0.5">
//                   {[...Array(5 - i % 2)].map((_, s) => (
//                     <Star key={s} className="w-3 h-3 fill-[#FFB84D] text-[#FFB84D]" />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );

//   const PanelWTB = () => (
//     <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-5">
//       <div className="flex items-start justify-between gap-4 mb-5 flex-wrap">
//         <div>
//           <h3 className="text-lg font-bold">Watch.Touch.Buy</h3>
//           <p className="text-zinc-500 text-sm mt-1 max-w-lg">
//             Vos produits liés aux scènes de films & séries sur 2 138 plateformes OTT. Vu à l'écran = acheté en un tap.
//           </p>
//         </div>
//         <button className="flex items-center gap-2 px-4 py-2 bg-lime-400 text-black rounded-xl text-sm font-bold hover:opacity-90 transition">
//           <Tv2 className="w-4 h-4" /> Lier un produit
//         </button>
//       </div>
//       <div className="overflow-x-auto">
//         <table className="w-full text-sm">
//           <thead>
//             <tr className="border-b border-white/[0.07]">
//               {['Produit', 'Apparaît dans', 'Vues', 'Clics', 'Ventes'].map((h) => (
//                 <th key={h} className="text-left py-3 px-3 text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">{h}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {wtb.map((w) => (
//               <tr key={w.product} className="border-b border-white/[0.04] hover:bg-white/[0.02] transition">
//                 <td className="py-3 px-3 font-semibold text-white">{w.product}</td>
//                 <td className="py-3 px-3 text-zinc-400">{w.show}</td>
//                 <td className="py-3 px-3 text-zinc-400">{w.views?.toLocaleString('fr-FR')}</td>
//                 <td className="py-3 px-3 text-zinc-400">{w.clicks?.toLocaleString('fr-FR')}</td>
//                 <td className="py-3 px-3 font-bold text-lime-400">{w.sales?.toLocaleString('fr-FR')}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );

//   const PanelIA = () => (
//     <div className="bg-gradient-to-br from-lime-400/[0.07] to-[#7FE3FF]/[0.04] border border-lime-400/20 rounded-2xl p-6">
//       <div className="flex items-center gap-2 text-lime-400 text-sm font-semibold mb-2">
//         <Zap className="w-4 h-4" /> Studio IA Skoleom
//       </div>
//       <p className="text-zinc-300 text-sm leading-relaxed mb-6">
//         Générez fiches produits, visuels et recommandez automatiquement les meilleures tailles. Propulsé par le même moteur que Watch.Touch.Buy.
//       </p>
//       <div className="space-y-4 max-w-lg">
//         <div>
//           <label className="text-[11px] uppercase tracking-widest text-zinc-500 block mb-2">Nom du produit</label>
//           <input value={aiInput} onChange={(e) => setAiInput(e.target.value)} placeholder="Ex : Veste matelassée hiver"
//             className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-lime-400 placeholder:text-zinc-600" />
//         </div>
//         <div>
//           <label className="text-[11px] uppercase tracking-widest text-zinc-500 block mb-2">Catégorie</label>
//           <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-lime-400 text-zinc-300">
//             <option>Mode — Manteaux & vestes</option>
//             <option>Mode — Hauts & t-shirts</option>
//             <option>Chaussures</option>
//             <option>Accessoires</option>
//             <option>Maison & déco</option>
//           </select>
//         </div>
//         <button className="flex items-center gap-2 px-6 py-3 bg-lime-400 text-black rounded-xl font-bold text-sm hover:opacity-90 transition">
//           <Zap className="w-4 h-4" /> Générer description + tags + prix optimal
//         </button>
//       </div>
//       <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-white/[0.07]">
//         {['Fiche produit auto', 'Tags SEO', 'Prix optimal', 'Photos IA', 'Tailles recommandées', 'Description marketing'].map((f) => (
//           <span key={f} className="text-xs px-3 py-1.5 bg-lime-400/10 text-lime-400 border border-lime-400/20 rounded-full">{f}</span>
//         ))}
//       </div>
//     </div>
//   );

//   const panels = { apercu: <PanelApercu />, produits: <PanelProduits />, commandes: <PanelCommandes />, clients: <PanelClients />, wtb: <PanelWTB />, ia: <PanelIA /> };
//   const currentTab = TABS.find((t) => t.id === tab);

//   return (
//     <div className="min-h-screen bg-black      text-white">
//       <div className="max-w-[1400px] mt-16 mx-auto px-4 sm:px-6 py-6">

//         <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
//           <div>
//             <h1 className="text-2xl font-black">Tableau de bord <span className="text-lime-400">vendeur</span></h1>
//             <p className="text-zinc-500 text-sm mt-1">Bienvenue, {dash?.shop ?? 'Atelier Aurora'} — performances d'aujourd'hui.</p>
//           </div>
//           <div className="flex gap-2">
//             <button onClick={() => setTab('produits')} className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-xl text-sm text-zinc-300 hover:bg-white/5 transition">
//               <Plus className="w-4 h-4" /> Ajouter un produit
//             </button>
//             <button className="flex items-center gap-2 px-4 py-2 bg-lime-400 text-black rounded-xl text-sm font-bold hover:opacity-90 transition">
//               <ExternalLink className="w-4 h-4" /> Voir ma boutique
//             </button>
//           </div>
//         </div>

//         <div className="lg:hidden mb-4">
//           <button onClick={() => setMobileNav(!mobileNav)} className="flex items-center gap-2 w-full px-4 py-3 bg-white/[0.04] border border-white/[0.07] rounded-xl text-sm">
//             {currentTab && <currentTab.icon className="w-4 h-4 text-lime-400" />}
//             <span className="font-medium">{currentTab?.label}</span>
//             <span className="ml-auto text-zinc-500">▾</span>
//           </button>
//           {mobileNav && (
//             <div className="mt-1 bg-zinc-900 border border-white/[0.07] rounded-xl overflow-hidden">
//               <Sidebar />
//             </div>
//           )}
//         </div>

//         <div className="flex gap-5">
//           <aside className="hidden lg:block w-52 shrink-0 sticky top-24 self-start">
//             <div className="bg-zinc-900 border border-white/[0.07] rounded-2xl p-3">
//               <Sidebar />
//             </div>
//           </aside>
//           <div className="flex-1 min-w-0">{panels[tab]}</div>
//         </div>
//       </div>
//     </div>
//   );
// }