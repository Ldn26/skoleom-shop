

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignIn, useSignUp } from '../../api/user';
import { useUserStore } from '../../store/userStore';
import { useLocalizedPath } from '../../i18n/useLocalizedPath';
import PageAurora from '@/components/layout/PageAurora';

const DASHBOARDS = {
  acheteur: '/essayage',
  vendeur: '/vendeur/dashboard',
};

const dashboardFor = (role) => DASHBOARDS[role] || DASHBOARDS.acheteur;

const parseAuth = (res) => ({
  token: res?.data?.jwt ?? null,
  user: res?.data?.user ?? null,
});

const ROLES = [
  {
    key: 'acheteur',
    label: 'Acheteur',
    hint: 'Je viens acheter et essayer',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
  },
  {
    key: 'vendeur',
    label: 'Vendeur',
    hint: 'Je gère ma boutique',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
  },
];

export default function Connexion() {
  const nav = useNavigate();
  const localizePath = useLocalizedPath();
  const setUser = useUserStore((state) => state.setUser);
  const signIn = useSignIn();
  const signUp = useSignUp();

  const [mode, setMode] = useState('login');
  const [role, setRole] = useState('acheteur');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [err, setErr] = useState('');

  const pending = signIn.isPending || signUp.isPending;

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setName('');
  };

  const enterApp = (response) => {
    const { token, user } = parseAuth(response);
    if (!token || !user) {
      setErr('Réponse serveur invalide.');
      return;
    }
    setUser(user, token, user.role);
    resetForm();
    nav(localizePath(dashboardFor(user.role)));
  };

  const submit = () => {
    setErr('');
    if (!email || !password) {
      setErr('Veuillez remplir tous les champs.');
      return;
    }
    if (mode === 'register' && !name) {
      setErr('Veuillez entrer un nom.');
      return;
    }

    if (mode === 'login') {
      signIn.mutate(
        { email, password },
        {
          onSuccess: enterApp,
          onError: () => setErr('Email ou mot de passe incorrect.'),
        },
      );
    } else {
      const credentials = { email, password };
      signUp.mutate(
        { name, email, password, role },
        {
          onSuccess: () => {
            signIn.mutate(credentials, {
              onSuccess: enterApp,
              onError: () => setErr('Compte créé, mais la connexion a échoué. Réessayez.'),
            });
          },
          onError: () => setErr('Erreur lors de la création du compte.'),
        },
      );
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !pending) submit();
  };

  return (
    <main className="sk-auth ">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Poppins:wght@300;400;500;600;700;800&display=swap');
        .sk-auth{--ink:#0A0A0B;--line:rgba(255,255,255,.10);--text:#EDECE8;--muted:#8E8E8A;--lime:#a8ff35;
             min-height:100vh;background:transparent;color:var(--text);
                 font-family:'Poppins',ui-sans-serif,system-ui,-apple-system,'Segoe UI',sans-serif;-webkit-font-smoothing:antialiased;}
        .sk-auth .disp{font-family:'Anton',sans-serif;font-weight:400;letter-spacing:.01em;line-height:1;}
        .sk-auth .eyebrow{font-size:.7rem;letter-spacing:.28em;text-transform:uppercase;color:var(--muted);font-weight:600;}
        .sk-auth input{font-family:'Poppins',sans-serif;}
        .sk-auth .field{transition:border-color .25s,background .25s,box-shadow .25s;}
        .sk-auth .field:focus{outline:none;border-color:rgba(168,255,53,.6);box-shadow:0 0 0 3px rgba(168,255,53,.12);background:rgba(255,255,255,.06);}
        .sk-auth .cta{transition:transform .25s cubic-bezier(.2,.7,.2,1),opacity .25s,box-shadow .25s;}
        .sk-auth .cta:hover{transform:translateY(-2px);box-shadow:0 18px 40px -18px rgba(168,255,53,.55);}
        .sk-auth .role-card img{transition:transform .7s cubic-bezier(.2,.7,.2,1);}
        .sk-auth .role-card:hover img{transform:scale(1.08);}
        @media (prefers-reduced-motion: reduce){.sk-auth *{transition:none!important;}}
      `}</style>

      <PageAurora />

      <div className="grid min-h-screen lg:grid-cols-2">
        <aside className="relative hidden overflow-hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/35 to-black/80" />
          <div className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[#a8ff35]/15 blur-[150px]" />

          <div className="relative z-10 flex h-full flex-col justify-between p-12">
            <div></div>
            <div className="pl-48">
              <p className="eyebrow">Dress haha. Touch. Buy®</p>
              <h1 className="disp mt-5 text-[clamp(2.5rem,4vw,4rem)]">
                 Connectez-vous  <br />
              à <span className="text-[#a8ff35]">Skoleom Shop </span> 


              </h1>
              <p className="mt-6 max-w-sm font-light leading-8 text-zinc-300">
                Votre avatar IA porte chaque pièce, à la bonne taille. Rejoignez la marketplace
                nouvelle génération.
              </p>

              <div className="mt-10 flex gap-8 border-t border-white/10 pt-8">
                <div>
                  <div className="disp text-3xl text-[#a8ff35]">98,4 %</div>
                  <div className="mt-1 text-xs text-zinc-500">Précision taille IA</div>
                </div>
                <div>
                  <div className="disp text-3xl text-[#a8ff35]">−80 %</div>
                  <div className="mt-1 text-xs text-zinc-500">Retours évités</div>
                </div>
                <div>
                  <div className="disp text-3xl text-[#a8ff35]">3,2×</div>
                  <div className="mt-1 text-xs text-zinc-500">Conversion</div>
                </div>
              </div>
            </div>

            <p className="text-xs text-zinc-600">© {new Date().getFullYear()} Skoleom — RGPD natif, hébergement EU.</p>
          </div>
        </aside>

        <section className="relative flex items-center justify-center overflow-hidden px-5 py-12 sm:px-8">
          <div className="pointer-events-none absolute right-0 top-0 h-[380px] w-[380px] rounded-full bg-[#a8ff35]/10 blur-[130px]" />

          <div className="relative w-full max-w-md">
            <div className="mb-8 flex flex-col items-center text-center lg:hidden"></div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8">
              <div className="mb-7">
                <h2 className="disp text-3xl">
                  {mode === 'login' ? 'Bon retour.' : 'Créer un compte.'}
                </h2>
                <p className="mt-2 text-sm font-light text-zinc-400">
                  {mode === 'login'
                    ? 'Accédez à votre espace Skoleom.'
                    : 'Quelques secondes pour rejoindre Skoleom.'}
                </p>
              </div>

              <div className="mb-6 grid grid-cols-2 gap-1 rounded-2xl border border-white/10 bg-white/5 p-1">
                <button
                  type="button"
                  onClick={() => {
                    setMode('login');
                    setErr('');
                  }}
                  className={`rounded-xl py-2.5 text-sm font-semibold transition ${
                    mode === 'login' ? 'bg-[#a8ff35] text-black' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Connexion
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMode('register');
                    setErr('');
                  }}
                  className={`rounded-xl py-2.5 text-sm font-semibold transition ${
                    mode === 'register' ? 'bg-[#a8ff35] text-black' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Créer un compte
                </button>
              </div>

              {mode === 'register' && (
                <div className="mb-6">
                  <p className="eyebrow mb-3">Je suis</p>
                  <div className="grid grid-cols-2 gap-3">
                    {ROLES.map(({ key, label, hint, image }) => {
                      const active = role === key;
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setRole(key)}
                          className={`role-card group relative aspect-[4/3] overflow-hidden rounded-2xl border text-left transition ${
                            active
                              ? 'border-[#a8ff35] ring-2 ring-[#a8ff35]/40'
                              : 'border-white/10 hover:border-white/25'
                          }`}
                        >
                          <img
                            src={image}
                            alt={label}
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.src = `https://picsum.photos/seed/${key}/600/450`;
                            }}
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />
                          {active && (
                            <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#a8ff35] text-black">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-3.5 w-3.5">
                                <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                          )}
                          <div className="absolute inset-x-0 bottom-0 p-3">
                            <p className="disp text-lg text-white">{label}</p>
                            <p className="mt-0.5 text-[11px] leading-tight text-zinc-300">{hint}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="space-y-4">
                {mode === 'register' && (
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                      {role === 'vendeur' ? 'Nom de la boutique' : 'Nom complet'}
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onKeyDown={onKeyDown}
                      placeholder={role === 'vendeur' ? 'Ma Boutique' : 'Votre nom'}
                      className="field w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-600"
                    />
                  </div>
                )}

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-zinc-400">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={onKeyDown}
                    placeholder="vous@exemple.com"
                    className="field w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-600"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-zinc-400">Mot de passe</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={onKeyDown}
                    placeholder="••••••••"
                    className="field w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-600"
                  />
                </div>
              </div>

              {err && (
                <p className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-xs font-medium text-red-400">
                  {err}
                </p>
              )}

              <button
                type="button"
                onClick={submit}
                disabled={pending}
                className="cta mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#a8ff35] py-3.5 text-sm font-bold text-black disabled:cursor-not-allowed disabled:opacity-50"
              >
                {pending
                  ? 'Chargement...'
                  : mode === 'login'
                    ? 'Se connecter'
                    : 'Créer mon compte'}
                {!pending && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-4 w-4">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>

              <p className="mt-6 text-center text-xs text-zinc-500">
                {mode === 'login' ? 'Pas encore de compte ? ' : 'Déjà inscrit ? '}
                <button
                  type="button"
                  onClick={() => {
                    setMode(mode === 'login' ? 'register' : 'login');
                    setErr('');
                  }}
                  className="font-semibold text-[#a8ff35] hover:underline"
                >
                  {mode === 'login' ? 'Créer un compte' : 'Se connecter'}
                </button>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}