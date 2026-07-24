// // =============================================================
// //  src/pages/Compte.jsx
// // =============================================================
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import { useShop } from '../store.jsx';
// // import { api } from '../api.js';

// export default function Compte() {
//   // const { user } = useShop();
//   const nav = useNavigate();
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     // démo : on illustre quelques commandes à partir du catalogue
//     api
//       .products('')
//       .then((r) => {
//         const ids = [0, 5, 2, 4];
//         const sts = [
//           ['exp', 'Expédié'],
//           ['done', 'Livré'],
//           ['done', 'Livré'],
//           ['pend', 'Préparation'],
//         ];
//         setOrders(
//           ids.map((id, i) => ({ p: r.products[id], st: sts[i][0], stl: sts[i][1], no: 29481 - i })),
//         );
//       })
//       .catch(() => {});
//   }, []);

//   return (
//     <section className="view on">
//       <div className="wrap">
//         <div className="sec-head" style={{ marginTop: 24 }}>
//           <div>
//             <h2>
//               Mon <b>compte</b>
//             </h2>
//             <p>Bonjour {user.name} — voici votre espace personnel Skoleom.</p>
//           </div>
//         </div>
//         <div className="split">
//           <aside className="sidemenu">
//             {[
//               "Vue d'ensemble",
//               'Mes commandes',
//               'Mon avatar IA',
//               'Favoris',
//               'Adresses',
//               'Paramètres',
//             ].map((t, i) => (
//               <div key={t} className={`smi${i === 0 ? ' on' : ''}`}>
//                 {t}
//               </div>
//             ))}
//             <div
//               className="smi"
//               onClick={() => nav('/vendeur')}
//               style={{
//                 color: 'var(--lime)',
//                 marginTop: 8,
//                 borderTop: '1px solid var(--stroke)',
//                 paddingTop: 16,
//               }}
//             >
//               Espace vendeur
//             </div>
//           </aside>
//           <div>
//             <div className="kpis" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
//               <div className="kpi">
//                 <div className="l">Commandes</div>
//                 <div className="v">14</div>
//                 <div className="c">2 en cours de livraison</div>
//               </div>
//               <div className="kpi">
//                 <div className="l">Points Skoleom</div>
//                 {/* <div className="v">{user.points?.toLocaleString('fr-FR')}</div> */}
//                 {/* <div className="c">Niveau {user.tier}</div> */}
//               </div>
//               <div className="kpi">
//                 <div className="l">Essayages IA</div>
//                 <div className="v">87</div>
//                 <div className="c">Avatar à jour</div>
//               </div>
//             </div>
//             <div className="panelbox">
//               <h3>Commandes récentes</h3>
//               <div className="desc">Suivi en temps réel sur tout le réseau Skoleom.</div>
//               <div className="ord-list">
//                 {orders.map(
//                   (o) =>
//                     o.p && (
//                       <div className="ord" key={o.no}>
//                         <img src={o.p.image} alt="" />
//                         <div className="bd">
//                           <div className="n">{o.p.name}</div>
//                           <div className="m">
//                             #SK-{o.no} · {o.p.price} €
//                           </div>
//                         </div>
//                         <span className={`stt ${o.st}`}>{o.stl}</span>
//                       </div>
//                     ),
//                 )}
//               </div>
//             </div>
//             <div className="panelbox ai-insight">
//               <h4>
//                 <svg viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M12 2 9.5 8.5 3 11l6.5 2.5L12 20l2.5-6.5L21 11z" />
//                 </svg>
//                 Recommandation de Skoleom AI
//               </h4>
//               <p>
//                 D'après vos derniers essayages, la <b>Veste Aurora</b> irait parfaitement avec votre
//                 morphologie (ajustement 97 %).{' '}
//                 <b
//                   style={{ color: 'var(--lime)', cursor: 'pointer' }}
//                   onClick={() => nav('/produit/0')}
//                 >
//                   Essayer maintenant →
//                 </b>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
