'use client';
import { useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BadgeCheck,
  Camera,
  Check,
  CreditCard,
  Loader2,
  LogOut,
  Mail,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Upload,
  User,
} from 'lucide-react';
import { useUserStore } from '../../store/userStore';
import { useSignOut } from '../../api/user';
import { useLocalizedPath } from '../../i18n/useLocalizedPath';
import { useGetUserAvatar, useCreateAvatar } from '../../api/avatar';
import { BackRoute } from '@/api/MyAxios';

const input =
  'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-[#a8ff35]/60 focus:ring-2 focus:ring-[#a8ff35]/15';
const label = 'mb-1.5 block text-xs font-medium text-zinc-400';
const card = 'rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl';

function SectionHead({ icon: Icon, title, desc, action }) {
  return (
    <div className="mb-5 flex items-start justify-between gap-4">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#a8ff35]/12 text-[#a8ff35]">
          <Icon size={18} />
        </span>
        <div>
          <h2 className="text-base font-bold text-white">{title}</h2>
          {desc && <p className="mt-0.5 text-xs text-white/45">{desc}</p>}
        </div>
      </div>
      {action}
    </div>
  );
}

export default function CompteAchteur() {







  const handleActivate = async () => {
  setIsSubmitting(true);
  try {
    const res = await BackRoute.post('/api/billing/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    }
  } catch (err) {
    console.error('Payment activation error:', err);
  } finally {
    setIsSubmitting(false);
  }
};
  const nav = useNavigate();
  const localizePath = useLocalizedPath();
  const user = useUserStore((s) => s.user);
  const token = useUserStore((s) => s.token);
  const role = useUserStore((s) => s.role);
  const setUser = useUserStore((s) => s.setUser);
  const signOut = useSignOut();

  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [msg, setMsg] = useState('');

  // TODO: replace with a real hook once GET /api/billing/subscription exists.
  // Expected shape: { plan, status, currentPeriodEnd, amount, currency } | null
  const subscription = null;
  const accountActive = !!user; // replace with user.status === 'active' when available

  if (!user) {
    return (
      <div className="grid min-h-[70vh] place-items-center bg-[#0A0A0B] px-6 text-center text-white">
        <div>
          <p className="text-lg font-semibold">Vous n'êtes pas connecté.</p>
          <button
            onClick={() => nav(localizePath('/connection'))}
            className="mt-4 rounded-xl bg-[#a8ff35] px-6 py-3 text-sm font-bold text-black"
          >
            Se connecter
          </button>
        </div>
      </div>
    );
  }

  const dirty = name !== user.name || email !== user.email;

  const save = () => {
    setUser({ ...user, name: name.trim(), email: email.trim() }, token, role);
    setMsg('Vos informations ont été mises à jour.');
    setTimeout(() => setMsg(''), 2500);
  };

  const logout = () =>
    signOut.mutate(undefined, {
      onSettled: () => {
        useUserStore.getState().clearUser();
        nav(localizePath('/'));
      },
    });

  return (
    <div className="min-h-[calc(100vh-71px)] bg-[#0A0A0B] px-4 pb-24 pt-[100px] text-[#EDECE8] sm:px-6">
      <div className="mx-auto w-full max-w-[1400px]">
        {/* Header */}
        <div
          className={`mb-6 flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8 ${card}`}
        >
          <div className="flex items-center gap-5">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#a8ff35]">
                Mon compte
              </p>
              <h1 className="mt-0.5 text-2xl font-bold tracking-tight">{user.name}</h1>
              <p className="flex items-center gap-1.5 text-sm text-white/50">
                <Mail size={13} /> {user.email}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold ${
                accountActive
                  ? 'border-[#a8ff35]/30 bg-[#a8ff35]/10 text-[#a8ff35]'
                  : 'border-amber-400/30 bg-amber-400/10 text-amber-300'
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${accountActive ? 'bg-[#a8ff35]' : 'bg-amber-400'}`}
              />
              {accountActive ? 'Compte actif' : 'Compte inactif'}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold capitalize text-white/70">
              <BadgeCheck size={13} /> {role}
            </span>
          </div>
        </div>

        {/* Profil */}
        <div className={`mb-6 p-6 sm:p-8 ${card}`}>
          <SectionHead
            icon={User}
            title="Informations personnelles"
            desc="Modifiez votre nom et votre email."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={label}>Nom complet</label>
              <input
                className={input}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className={label}>Email</label>
              <input
                className={input}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vous@exemple.com"
              />
            </div>
          </div>
          {msg && (
            <p className="mt-5 inline-flex items-center gap-2 rounded-xl border border-[#a8ff35]/30 bg-[#a8ff35]/10 px-4 py-2.5 text-xs font-medium text-[#a8ff35]">
              <Check size={14} /> {msg}
            </p>
          )}
          <button
            onClick={save}
            disabled={!dirty}
            className="mt-6 rounded-xl bg-[#a8ff35] px-6 py-3 text-sm font-bold text-black transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Enregistrer
          </button>
        </div>

        <div className="mb-6 grid gap-6 lg:grid-cols-2">
          <div className={`p-6 sm:p-8 ${card}`}>
            <SectionHead
              icon={ShieldCheck}
              title="État du compte"
              desc="Statut et informations de sécurité."
            />
            <dl className="space-y-3 text-sm">
              <Line
                k="Statut"
                v={<Badge ok={accountActive}>{accountActive ? 'Actif' : 'Inactif'}</Badge>}
              />
              <Line
                k="Type de compte"
                v={<span className="capitalize text-white">{role || 'acheteur'}</span>}
              />
              <Line k="Identifiant" v={<span className="text-white/70">#{user.id}</span>} />
              <Line k="Email vérifié" v={<Badge ok>Oui</Badge>} />
            </dl>
          </div>

          <div className={`flex flex-col p-6 sm:p-8 ${card}`}>
            <SectionHead
              icon={CreditCard}
              title="Facturation"
              desc="Votre abonnement et vos paiements."
            />
            {subscription ? (
              <div className="space-y-3 text-sm">
                <Line
                  k="Formule"
                  v={<span className="font-semibold text-white">{subscription.plan}</span>}
                />
                <Line
                  k="Statut"
                  v={<Badge ok={subscription.status === 'active'}>{subscription.status}</Badge>}
                />
                <Line
                  k="Prochaine facture"
                  v={<span className="text-white/70">{subscription.currentPeriodEnd}</span>}
                />
                <button className="mt-4 w-full rounded-xl border border-white/15 py-3 text-sm font-semibold text-white transition hover:border-[#a8ff35]/50 hover:text-[#a8ff35]">
                  Gérer mon abonnement
                </button>
              </div>
            ) : (
              <div className="flex flex-1 flex-col items-start justify-center">
                <p className="text-sm text-white/60">Aucun abonnement actif.</p>
                <p className="mt-1 text-xs text-white/40">
                  Débloquez l'essayage illimité et les recommandations IA.
                </p>
                <button 
                  // onClick={() => nav(`${localizePath('/')}#tarifs`)}
                  onClick={handleActivate}
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#a8ff35] px-5 py-3 text-sm font-bold text-black transition hover:brightness-105"
                >
                  <Sparkles size={15} /> Découvrir les offres
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Avatar IA */}
        <div className={`mb-6 p-6 sm:p-8 ${card}`}>
          <SectionHead
            icon={Sparkles}
            title="Mon avatar IA"
            desc="Visualisez et mettez à jour votre jumeau numérique."
          />
          <AvatarStudio userId={user.id} />
        </div>

        <button
          onClick={logout}
          disabled={signOut.isPending}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 py-3.5 text-sm font-semibold text-red-400 transition hover:bg-red-400/10 disabled:opacity-50"
        >
          <LogOut size={16} /> Déconnexion
        </button>
      </div>
    </div>
  );
}

function Line({ k, v }) {
  return (
    <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 last:border-0 last:pb-0">
      <dt className="text-white/45">{k}</dt>
      <dd>{v}</dd>
    </div>
  );
}

function Badge({ ok, children }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold capitalize ${
        ok
          ? 'border-[#a8ff35]/30 bg-[#a8ff35]/10 text-[#a8ff35]'
          : 'border-white/15 bg-white/5 text-white/60'
      }`}
    >
      {ok && <span className="h-1.5 w-1.5 rounded-full bg-[#a8ff35]" />}
      {children}
    </span>
  );
}

function AvatarStudio({ userId }) {
  const { data, isLoading, refetch } = useGetUserAvatar(userId);
  const create = useCreateAvatar();
  const avatar = data?.data;

  const fileRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [meas, setMeas] = useState({ height: '', weight: '', chest: '', waist: '' });
  const [err, setErr] = useState('');

  const preview = useMemo(() => photo || avatar?.originalUrl || null, [photo, avatar]);

  const onFile = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setPhoto(String(reader.result));
    reader.readAsDataURL(file);
  };

  const generate = () => {
    setErr('');
    if (!photo) return setErr('Ajoutez une photo.');
    if (!meas.chest) return setErr('Le tour de poitrine est requis.');
    create.mutate(
      {
        photoBase64: photo,
        userId,
        measurements: {
          height: Number(meas.height) || 0,
          weight: Number(meas.weight) || 0,
          chest: Number(meas.chest) || 0,
          waist: Number(meas.waist) || 0,
        },
      },
      {
        onSuccess: () => {
          setPhoto(null);
          refetch();
        },
        onError: (e) => setErr(e.message || 'Échec de la génération.'),
      },
    );
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="grid grid-cols-2 gap-3">
        <Figure title="Jumeau IA" src={avatar?.avatarUrl} loading={isLoading} highlight />
        <Figure title="Photo d'origine" src={avatar?.originalUrl} loading={isLoading} />
      </div>

      <div>
        <button
          onClick={() => fileRef.current?.click()}
          className="flex w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-4 py-6 text-center transition hover:border-[#a8ff35]/40 hover:bg-white/[0.04]"
        >
          {preview ? (
            <img src={preview} alt="" className="h-32 w-auto rounded-xl object-cover" />
          ) : (
            <>
              <Camera size={24} className="text-[#a8ff35]" />
              <span className="text-sm font-semibold text-white">Choisir une photo</span>
              <span className="text-xs text-white/40">Plein-pied, fond neutre</span>
            </>
          )}
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => onFile(e.target.files?.[0])}
        />
        {photo && (
          <button
            onClick={() => setPhoto(null)}
            className="mt-2 text-xs text-white/50 hover:text-white"
          >
            Retirer la photo
          </button>
        )}

        <div className="mt-4 grid grid-cols-2 gap-3">
          {[
            ['height', 'Taille (cm)'],
            ['weight', 'Poids (kg)'],
            ['chest', 'Poitrine (cm)'],
            ['waist', 'Tour de taille (cm)'],
          ].map(([key, l]) => (
            <div key={key}>
              <label className={label}>{l}</label>
              <input
                className={input}
                inputMode="numeric"
                value={meas[key]}
                onChange={(e) => setMeas((mm) => ({ ...mm, [key]: e.target.value }))}
              />
            </div>
          ))}
        </div>

        {err && (
          <p className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-xs font-medium text-red-400">
            {err}
          </p>
        )}

        <button
          onClick={generate}
          disabled={create.isPending}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#a8ff35] py-3.5 text-sm font-bold text-black transition hover:brightness-105 disabled:opacity-50"
        >
          {create.isPending ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Génération en cours…
            </>
          ) : (
            <>
              {avatar ? <RefreshCw size={16} /> : <Upload size={16} />}
              {avatar ? 'Régénérer mon avatar' : 'Générer mon avatar'}
            </>
          )}
        </button>
        {create.isPending && (
          <p className="mt-2 text-center text-xs text-white/40">
            Cela peut prendre jusqu'à une minute.
          </p>
        )}
      </div>
    </div>
  );
}

function Figure({ title, src, loading, highlight }) {
  return (
    <div>
      <div
        className={`relative aspect-[2/3] overflow-hidden rounded-2xl border ${highlight ? 'border-[#a8ff35]/30' : 'border-white/10'} bg-white/[0.02]`}
      >
        {loading ? (
          <div className="grid h-full place-items-center text-white/30">
            <Loader2 size={20} className="animate-spin" />
          </div>
        ) : src ? (
          <img src={src} alt={title} className="h-full w-full object-cover" />
        ) : (
          <div className="grid h-full place-items-center px-2 text-center text-xs text-white/30">
            Aucun avatar
          </div>
        )}
      </div>
      <p className="mt-2 text-center text-[11px] font-semibold uppercase tracking-widest text-white/40">
        {title}
      </p>
    </div>
  );
}
