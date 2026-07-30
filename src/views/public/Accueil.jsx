






"use client";
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, Shirt, BrainCircuit, MonitorPlay, ArrowRight, ArrowUpRight, ChevronRight, Ruler } from 'lucide-react';
import { stripePromise } from '../../lib/stripe';
import { BackRoute } from '../../api/MyAxios';
import { useCategories } from '../../api/product';
import Hero from '@/components/layout/Hero';
import PageAurora from '@/components/layout/PageAurora';
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack';

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop';

export default function Accueil() {
  const navigate = useNavigate();
  const { data: categories = [] } = useCategories();

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
  }, [categories.length]);

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
    { title: "Cabine d'essayage virtuelle", desc: "Votre avatar IA porte chaque article — indice d'ajustement 98,4 %.", icon: <Shirt className="h-6 w-6" /> },
    { title: 'Taille intelligente', desc: 'La bonne taille, marque par marque. Fini les allers-retours.', icon: <Ruler className="h-6 w-6" /> },
    { title: 'Concierge IA 24/7', desc: 'Un personal shopper conversationnel sur chaque page.', icon: <BrainCircuit className="h-6 w-6" /> },
    { title: 'Watch. Touch. Buy.®', desc: "Achetez la pièce vue à l'écran, sans quitter la vidéo.", icon: <MonitorPlay className="h-6 w-6" /> },
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

  const galleryItems = categories.map((c) => ({
    image: c.image || FALLBACK_IMAGE,
    category: c.slug || c.id,
    text: c.name,
  }));

  const handleCategoryClick = (item) => {
    const target = item?.category;
    navigate(target ? `/produits?category=${target}` : '/catalogue');
  };

  return (
    <main className="sk relative w-full overflow-x-hidden">
      <style>{`
        .sk{--ink:#0A0A0B;--panel:#131315;--line:rgba(255,255,255,.10);--text:#EDECE8;--muted:#8E8E8A;--lime:#a8ff35;
             background:transparent;color:var(--text);min-height:100vh;
             font-family:'Poppins',ui-sans-serif,system-ui,-apple-system,'Segoe UI',sans-serif;-webkit-font-smoothing:antialiased;}
        .sk .disp{font-family:'Anton',sans-serif;font-weight:400;letter-spacing:.005em;line-height:1.02;}
        .sk .eyebrow{font-size:.7rem;letter-spacing:.28em;text-transform:uppercase;color:var(--muted);font-weight:600;}
        .sk .sk-reveal{opacity:0;transform:translateY(18px);transition:opacity .7s ease,transform .7s cubic-bezier(.2,.7,.2,1);}
        .sk .sk-in{opacity:1;transform:none;}
        @media (prefers-reduced-motion: reduce){.sk .sk-reveal{opacity:1;transform:none;transition:none;}}
        .sk a:focus-visible,.sk button:focus-visible{outline:2px solid var(--lime);outline-offset:3px;border-radius:4px;}
        .sk .lift{transition:transform .5s cubic-bezier(.2,.7,.2,1),border-color .5s,background .5s,box-shadow .5s;}
        .sk .lift:hover{transform:translateY(-6px);border-color:rgba(168,255,53,.45);box-shadow:0 24px 60px -30px rgba(168,255,53,.4);}
      `}</style>

      <PageAurora />
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="sk-reveal">
            <p className="eyebrow">Le problème</p>
            <p className="disp mt-4 text-3xl leading-tight sm:mt-6 sm:text-4xl md:text-5xl">
              22 % des articles mode<br className="hidden sm:block" /> sont <span className="text-zinc-500">renvoyés.</span>
            </p>
            <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-zinc-400 sm:mt-6 sm:text-base sm:leading-8">
              Une commande sur trois repart faute de pouvoir juger la taille et le rendu avant l'achat.
              La transaction vidéo, elle, fuit vers des sites tiers : conversion perdue, audience mal monétisée.
            </p>
          </div>
          <div className="sk-reveal md:pt-14">
            <p className="eyebrow">La réponse Skoleom</p>
            <p className="disp mt-4 text-3xl leading-tight sm:mt-6 sm:text-4xl md:text-5xl">
              Des retours réduits<br className="hidden sm:block" /> jusqu'à <span className="text-[#a8ff35]">80 %.</span>
            </p>
            <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-zinc-400 sm:mt-6 sm:text-base sm:leading-8">
              L'acheteur essaie virtuellement chaque pièce, reçoit la taille juste, et achète depuis
              l'écran. Vous gardez la transaction, la donnée et la marge.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/30 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="sk-reveal max-w-2xl">
            <p className="eyebrow">Propulsé par Skoleom AI</p>
            <h2 className="disp mt-4 text-3xl sm:mt-6 sm:text-4xl md:text-5xl">QUATRE BRIQUES D'INTELLIGENCE</h2>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:mt-16 sm:grid-cols-2 sm:rounded-3xl xl:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                onClick={() => navigate('/essayage')}
                className="lift sk-reveal group cursor-pointer bg-black/40 p-6 sm:p-9"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#a8ff35]/30 text-[#a8ff35]">
                  {f.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold sm:mt-7 sm:text-xl">{f.title}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-zinc-400 sm:mt-3 sm:text-base sm:leading-7">{f.desc}</p>
                <ArrowUpRight className="mt-4 h-5 w-5 text-zinc-600 transition group-hover:text-[#a8ff35] sm:mt-6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="sk-reveal mx-auto max-w-7xl">
          <p className="eyebrow">Comment ça marche</p>
          <h2 className="disp mt-4 text-3xl sm:mt-6 sm:text-4xl md:text-5xl">TROIS GESTES — ZÉRO DOUTE</h2>
        </div>
        <style>{`
          .steps-stack .scroll-stack-inner { padding: 4vh 0.5rem 10rem; min-height: 0; }
          .steps-stack .scroll-stack-card { height: auto; min-height: 14rem; width: 100%; }
          .steps-stack .scroll-stack-scroller { scrollbar-width: none; -ms-overflow-style: none; }
          .steps-stack .scroll-stack-scroller::-webkit-scrollbar { width: 0; height: 0; display: none; }
        `}</style>
        <div style={{ perspective: '1000px' }} className="steps-stack mx-auto mt-8 h-[420px] max-w-7xl sm:mt-10 sm:h-[460px]">
          <ScrollStack itemDistance={60} itemStackDistance={24} itemScale={0.04} baseScale={0.88} blurAmount={0}>
            {steps.map((s) => (
              <ScrollStackItem key={s.n} itemClassName="border border-white/10 bg-[#0C0C0D]/85 backdrop-blur-xl p-6 sm:p-8">
                <div className="flex h-full flex-col justify-center">
                  <div className="disp text-4xl text-[#a8ff35] sm:text-6xl">{s.n}</div>
                  <h3 className="mt-2 text-xl font-semibold text-white sm:mt-4 sm:text-3xl">{s.title}</h3>
                  <p className="mt-2 max-w-xl text-sm font-light leading-relaxed text-zinc-300 sm:mt-3 sm:text-lg sm:leading-8">{s.desc}</p>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </section>

      <section id="tarifs" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="sk-reveal max-w-2xl">
          <p className="eyebrow">Abonnements</p>
          <h2 className="disp mt-4 text-3xl sm:mt-6 sm:text-4xl md:text-5xl">CHOISISSEZ VOTRE ACCÈS</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:mt-16 sm:gap-8 md:grid-cols-2">
          {pricingPlans.map((plan) => (
            <div
              key={plan.title}
              className={`sk-reveal relative rounded-2xl border p-6 transition sm:rounded-3xl sm:p-10 ${
                plan.featured ? 'border-[#a8ff35]/40 bg-[#a8ff35]/[.04]' : 'border-white/10 bg-white/[.03] hover:border-white/25'
              }`}
            >
              {plan.featured && (
                <span className="absolute right-6 top-6 rounded-full bg-[#a8ff35] px-3 py-1 text-xs font-semibold text-black sm:right-8 sm:top-8">
                  Partenaire
                </span>
              )}
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-[#a8ff35]" />
                <h3 className="disp text-2xl sm:text-3xl">{plan.title}</h3>
              </div>
              <p className="mt-3 text-sm font-light text-zinc-400 sm:mt-5 sm:text-base">{plan.description}</p>
              <div className="mt-6 flex items-end gap-1 sm:mt-8">
                <span className="disp text-4xl sm:text-6xl">{plan.price}</span>
                <span className="mb-1 text-sm text-zinc-500 sm:mb-2 sm:text-base">{plan.period}</span>
              </div>
              <div className="mt-6 space-y-2.5 sm:mt-9 sm:space-y-3">
                {plan.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-3 text-xs text-zinc-300 sm:text-sm">
                    <ChevronRight className="h-4 w-4 shrink-0 text-[#a8ff35]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => handleCheckout(plan.stripePriceId)}
                className={`mt-8 w-full rounded-xl py-3.5 text-base font-bold transition sm:mt-10 sm:rounded-2xl sm:py-4 sm:text-lg ${
                  plan.featured ? 'bg-[#a8ff35] text-black hover:opacity-90' : 'border border-white/20 text-white hover:border-[#a8ff35] hover:text-[#a8ff35]'
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8 lg:pb-32">
        <div className="sk-reveal flex items-end justify-between">
          <div>
            <p className="eyebrow">Sélection Skoleom AI</p>
            <h2 className="disp mt-4 text-3xl sm:mt-6 sm:text-4xl md:text-5xl">EXPLOREZ NOS UNIVERS</h2>
          </div>
          <Link to="/catalogue" className="hidden items-center gap-2 font-medium text-[#a8ff35] transition hover:opacity-80 md:flex">
            Tout voir <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        {galleryItems.length > 0 ? (
          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {galleryItems.map((item, i) => (
              <button
                key={item.category ?? item.text ?? i}
                type="button"
                onClick={() => handleCategoryClick(item)}
                className="sk-reveal group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-xl border border-white/10 bg-[#131315] text-left transition-all duration-500 hover:border-[#a8ff35]/45 hover:shadow-[0_28px_60px_-40px_rgba(168,255,53,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a8ff35] sm:aspect-[4/5] sm:rounded-2xl"
              >
                <img
                  src={item.image}
                  alt={item.text || 'Catégorie'}
                  loading="lazy"
                  draggable={false}
                  onError={(e) => {
                    if (e.currentTarget.src !== FALLBACK_IMAGE) e.currentTarget.src = FALLBACK_IMAGE;
                  }}
                  className="absolute inset-0 h-full w-full object-cover brightness-[0.82] saturate-[0.9] transition-all duration-[900ms] ease-out group-hover:scale-[1.09] group-hover:brightness-95 group-hover:saturate-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 group-hover:from-black/95" />
                <span className="absolute left-3 top-3 text-[10px] font-medium tracking-[0.28em] text-white/55 sm:left-4 sm:top-4 sm:text-xs">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="absolute right-3 top-3 flex h-7 w-7 -translate-y-1.5 scale-90 items-center justify-center rounded-full bg-[#a8ff35] text-black opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 sm:right-4 sm:top-4 sm:h-8 sm:w-8">
                  <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </span>
                <div className="relative z-10 p-3 sm:p-4 lg:p-5">
                  <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#a8ff35] sm:mb-2 sm:text-[10px]">
                    Univers
                  </p>
                  <h3 className="text-sm font-semibold uppercase leading-tight tracking-wide text-white sm:text-base lg:text-lg">
                    {item.text}
                  </h3>
                  <div className="mt-2.5 h-px w-6 bg-[#a8ff35] transition-all duration-500 group-hover:w-14 sm:mt-3.5" />
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="mt-8 flex min-h-[220px] w-full items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] sm:mt-12">
            <p className="font-light text-zinc-500">Chargement des univers...</p>
          </div>
        )}

        <div className="mt-8 flex justify-center md:hidden">
          <Link to="/catalogue" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-[#a8ff35] transition hover:border-[#a8ff35]/50">
            Tout voir <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-24 text-center sm:px-6 sm:py-40 lg:px-8">
        <div className="sk-reveal relative z-10 mx-auto max-w-3xl">
          <h2 className="disp text-3xl leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            L'ESSAYAGE DEVIENT<br />LE NOUVEAU STANDARD
          </h2>
          <button
            onClick={() => navigate('/essayage')}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#a8ff35] px-7 py-4 text-base font-bold text-black transition hover:opacity-90 sm:mt-12 sm:px-9 sm:py-5 sm:text-lg"
          >
            Créer mon avatar IA <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </main>
  );
}