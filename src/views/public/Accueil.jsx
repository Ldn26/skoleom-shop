

import { useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, Shirt, BrainCircuit, MonitorPlay, ArrowRight, ArrowUpRight, ChevronRight, Ruler } from 'lucide-react';
import { stripePromise } from '../../lib/stripe';
import { BackRoute } from '../../api/MyAxios';
import { useProducts,  flattenProducts } from '../../api/product';
import ProductCard from '../../components/shop/ProductCard';
import Hero from '@/components/layout/Hero';
import PageAurora from '@/components/layout/PageAurora';
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack';

export default function Accueil() {
  const navigate = useNavigate();
  const productsQuery = useProducts();
  const allProducts = useMemo(() => flattenProducts(productsQuery.data), [productsQuery.data]);

  const featured = useMemo(() => allProducts.slice(0, 8), [allProducts]);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = document.querySelectorAll('.sk-reveal');
    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('sk-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('sk-in')),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [featured.length]);

  const handleCheckout = async (priceId) => {
    try {
      const stripe = await stripePromise;
      const { data } = await BackRoute.post('/stripe/create-checkout-session', { priceId });
      const { error } = await stripe.redirectToCheckout({ sessionId: data.sessionId });
      if (error) console.error(error.message);
    } catch (err) {
      console.error(err);
      alert('Impossible de démarrer le paiement.');
    }
  };

  const features = [
    { title: 'Cabine d’essayage virtuelle', desc: 'Votre avatar IA porte chaque article — indice d’ajustement 98,4 %.', icon: <Shirt className="h-6 w-6" /> },
    { title: 'Taille intelligente', desc: 'La bonne taille, marque par marque. Fini les allers-retours.', icon: <Ruler className="h-6 w-6" /> },
    { title: 'Concierge IA 24/7', desc: 'Un personal shopper conversationnel sur chaque page.', icon: <BrainCircuit className="h-6 w-6" /> },
    { title: 'Watch. Touch. Buy.®', desc: 'Achetez la pièce vue à l’écran, sans quitter la vidéo.', icon: <MonitorPlay className="h-6 w-6" /> },
  ];

  const steps = [
    { n: '01', title: 'Ajoutez votre photo', desc: 'Une seule fois. Traitée localement, hébergée en Europe.' },
    { n: '02', title: 'Essayez sur votre avatar', desc: 'Chaque article, chaque taille, en quelques secondes.' },
    { n: '03', title: 'Achetez, même depuis une vidéo', desc: 'En un geste, sur 2 138 plateformes OTT.' },
  ];

  const pricingPlans = [
    {
      title: 'Acheteur',
      price: '9,99€',
      period: '/mois',
      description: 'Essayage virtuel illimité avec votre avatar IA.',
      features: ['Avatar IA', 'Essayages illimités', 'Recommandations IA', 'Historique des looks', 'Support prioritaire'],
      stripePriceId: 'price_xxxxxxxxx_buyer',
      button: 'Commencer',
      featured: false,
    },
    {
      title: 'Vendeur',
      price: '49€',
      period: '/mois',
      description: 'Pour les marques et boutiques qui intègrent Skoleom.',
      features: ['Catalogue illimité', 'Essayage IA intégré', 'Dashboard analytics', 'API Skoleom', 'Support Premium'],
      stripePriceId: 'price_xxxxxxxxx_seller',
      button: 'Devenir partenaire',
      featured: true,
    },
  ];

 

  return (
    <main className="sk">
      <style>{`
        .sk{--ink:#0A0A0B;--panel:#131315;--line:rgba(255,255,255,.10);--text:#EDECE8;--muted:#8E8E8A;--lime:#a8ff35;
             background:transparent;color:var(--text);min-height:100vh;
             font-family:'Poppins',ui-sans-serif,system-ui,-apple-system,'Segoe UI',sans-serif;-webkit-font-smoothing:antialiased;}
        .sk .disp{font-family:'Anton',sans-serif;font-weight:400;letter-spacing:.005em;line-height:1.02;}
        .sk .eyebrow{font-size:.72rem;letter-spacing:.28em;text-transform:uppercase;color:var(--muted);font-weight:600;}
        .sk .rule{height:1px;background:var(--line);}
        .sk .sk-reveal{opacity:0;transform:translateY(18px);transition:opacity .7s ease,transform .7s cubic-bezier(.2,.7,.2,1);}
        .sk .sk-in{opacity:1;transform:none;}
        @media (prefers-reduced-motion: reduce){.sk .sk-reveal{opacity:1;transform:none;transition:none;}}
        .sk a:focus-visible,.sk button:focus-visible{outline:2px solid var(--lime);outline-offset:3px;border-radius:4px;}
        .sk .lift{transition:transform .5s cubic-bezier(.2,.7,.2,1),border-color .5s,background .5s,box-shadow .5s;}
        .sk .lift:hover{transform:translateY(-6px);border-color:rgba(168,255,53,.45);box-shadow:0 24px 60px -30px rgba(168,255,53,.4);}
        .sk .sk-tile{overflow:hidden;}
        .sk .sk-tile img{transition:transform .6s cubic-bezier(.2,.7,.2,1);}
        .sk .sk-card:hover .sk-tile img{transform:scale(1.07);}
        .sk .sk-shimmer{background:linear-gradient(100deg,rgba(255,255,255,.03) 30%,rgba(255,255,255,.08) 50%,rgba(255,255,255,.03) 70%);background-size:200% 100%;animation:sk-sh 1.4s infinite;}
        @keyframes sk-sh{0%{background-position:200% 0}100%{background-position:-200% 0}}
      `}</style>

      <PageAurora />

      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-16 md:grid-cols-2">
          <div className="sk-reveal">
            <p className="eyebrow">Le problème</p>
            <p className="disp mt-6 text-4xl leading-tight md:text-5xl">
              22 % des articles mode<br />sont <span className="text-zinc-500">renvoyés.</span>
            </p>
            <p className="mt-6 max-w-md font-light leading-8 text-zinc-400">
              Une commande sur trois repart faute de pouvoir juger la taille et le rendu avant l’achat.
              La transaction vidéo, elle, fuit vers des sites tiers : conversion perdue, audience mal monétisée.
            </p>
          </div>
          <div className="sk-reveal md:pt-14">
            <p className="eyebrow">La réponse Skoleom</p>
            <p className="disp mt-6 text-4xl leading-tight md:text-5xl">
              Des retours réduits<br />jusqu’à <span className="text-[#a8ff35]">80 %.</span>
            </p>
            <p className="mt-6 max-w-md font-light leading-8 text-zinc-400">
              L’acheteur essaie virtuellement chaque pièce, reçoit la taille juste, et achète depuis
              l’écran. Vous gardez la transaction, la donnée et la marge.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/30 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-32">
          <div className="sk-reveal max-w-2xl">
            <p className="eyebrow">Propulsé par Skoleom AI</p>
            <h2 className="disp mt-6 text-5xl">QUATRE BRIQUES D’INTELLIGENCE</h2>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:grid-cols-2 xl:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                onClick={() => navigate('/essayage')}
                className="lift sk-reveal group cursor-pointer bg-black/40 p-9"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#a8ff35]/30 text-[#a8ff35]">
                  {f.icon}
                </div>
                <h3 className="mt-7 text-xl font-semibold">{f.title}</h3>
                <p className="mt-3 font-light leading-7 text-zinc-400">{f.desc}</p>
                <ArrowUpRight className="mt-6 h-5 w-5 text-zinc-600 transition group-hover:text-[#a8ff35]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-32">
        <div className="sk-reveal mx-auto max-w-7xl">
          <p className="eyebrow">Comment ça marche</p>
          <h2 className="disp mt-6 text-5xl">TROIS GESTES - ZÉRO DOUTE</h2>
        </div>

        <style>{`
          .steps-stack .scroll-stack-inner { padding: 6vh 0.5rem 14rem; min-height: 0; }
          .steps-stack .scroll-stack-card { height: 17rem; width: 100%; }
          .steps-stack .scroll-stack-scroller { scrollbar-width: none; -ms-overflow-style: none; }
          .steps-stack .scroll-stack-scroller::-webkit-scrollbar { width: 0; height: 0; display: none; }
        `}</style>
        <div
          style={{ perspective: '1000px' }}
          className="steps-stack mx-auto  h-[460px] max-w-7xl"
        >
          <ScrollStack
            itemDistance={60}
            itemStackDistance={24}
            itemScale={0.04}
            baseScale={0.88}
            blurAmount={0}
          >
            {steps.map((s) => (
              <ScrollStackItem
                key={s.n}
                itemClassName="border border-white/10 bg-[#0C0C0D]/85 backdrop-blur-xl"
              >
                <div className="flex h-full flex-col justify-center">
                  <div className="disp text-6xl text-[#a8ff35]">{s.n}</div>
                  <h3 className="mt-4 text-3xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-3 max-w-xl text-lg font-light leading-8 text-zinc-300">{s.desc}</p>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </section>

      <section id="tarifs" className="mx-auto max-w-7xl px-6 py-32">
        <div className="sk-reveal max-w-2xl">
          <p className="eyebrow">Abonnements</p>
          <h2 className="disp mt-6 text-5xl">CHOISISSEZ VOTRE ACCÈS</h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {pricingPlans.map((plan) => (
            <div
              key={plan.title}
              className={`sk-reveal relative rounded-3xl border p-10 transition ${
                plan.featured ? 'border-[#a8ff35]/40 bg-[#a8ff35]/[.04]' : 'border-white/10 bg-white/[.03] hover:border-white/25'
              }`}
            >
              {plan.featured && (
                <span className="absolute right-8 top-8 rounded-full bg-[#a8ff35] px-3 py-1 text-xs font-semibold text-black">
                  Partenaire
                </span>
              )}
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-[#a8ff35]" />
                <h3 className="disp text-3xl">{plan.title}</h3>
              </div>
              <p className="mt-5 font-light text-zinc-400">{plan.description}</p>
              <div className="mt-8 flex items-end gap-1">
                <span className="disp text-6xl">{plan.price}</span>
                <span className="mb-2 text-zinc-500">{plan.period}</span>
              </div>
              <div className="mt-9 space-y-3">
                {plan.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-3 text-zinc-300">
                    <ChevronRight className="h-4 w-4 text-[#a8ff35]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => handleCheckout(plan.stripePriceId)}
                className={`mt-10 w-full rounded-2xl py-4 text-lg font-bold transition ${
                  plan.featured ? 'bg-[#a8ff35] text-black hover:opacity-90' : 'border border-white/20 text-white hover:border-[#a8ff35] hover:text-[#a8ff35]'
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="sk-reveal flex items-end justify-between">
          <div>
            <p className="eyebrow">Sélection Skoleom AI</p>
            <h2 className="disp mt-6 text-5xl">TENDANCES DANS VOTRE UNIVERS</h2>
          </div>
          <Link to="/catalogue" className="hidden items-center gap-2 font-medium text-[#a8ff35] transition hover:opacity-80 md:flex">
            Tout voir <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4">
          {productsQuery.isLoading && featured.length === 0
            ? Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="overflow-hidden rounded-2xl border border-white/10">
                  <div className="sk-shimmer aspect-square w-full" />
                  <div className="space-y-2 p-3">
                    <div className="sk-shimmer h-4 w-2/3 rounded" />
                    <div className="sk-shimmer h-4 w-1/3 rounded" />
                  </div>
                </div>
              ))
            : featured.map((p) => (
                <div key={p.id} className="sk-reveal">
                  <ProductCard
                    id={p.id}
                    title={p.name}
                    image={p.photos?.[0]}
                    category={p.type}
                    price={p.price}
                    regularPrice={p.regularPrice}
                    onSale={p.onSale}
                    sku={p.sku}
                    inStock={p.inStock}
                  />
                </div>
              ))}
        </div>
      </section>

   
      <section className="relative overflow-hidden px-6 py-40 text-center">
        <div className="sk-reveal relative z-10 mx-auto max-w-3xl">
          <h2 className="disp text-[clamp(2.5rem,6vw,5rem)] leading-tight">
            L'ESSEYAGE DEVIENT<br />LE NOUVEAU STANDARD
          </h2>
          <button
            onClick={() => navigate('/essayage')}
            className="mt-12 inline-flex items-center gap-2 rounded-full bg-[#a8ff35] px-9 py-5 text-lg font-bold text-black transition hover:opacity-90"
          >
            Créer mon avatar IA <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </main>
  );
}