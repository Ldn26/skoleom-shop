'use client';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BadgeCheck, Calendar, Check, CreditCard, Crown, Loader2, LogOut,
  Mail, ShieldCheck, Sparkles, User,
} from 'lucide-react';
import { useUserStore } from '../../store/userStore';
import { useMe, useSignOut } from '../../api/user';
import { useSubscription, useCancelSubscription, useCheckout } from '../../api/billing';
import { useLocalizedPath } from '../../i18n/useLocalizedPath';

const input =
  'w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-[#a8ff35]/60 focus:ring-2 focus:ring-[#a8ff35]/15';
const label = 'mb-1.5 block text-xs font-medium text-white/45';
const card = 'rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl';

const eur = (n) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(Number(n) || 0);
const longDate = (d) =>
  d ? new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : '—';

function SectionHead({ icon: Icon, title, desc, right }) {
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
      {right}
    </div>
  );
}

function Stat({ icon: Icon, label: l, value }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/[0.04] text-[#a8ff35]">
        <Icon size={18} />
      </span>
      <div className="min-w-0">
        <p className="truncate text-sm font-bold text-white">{value}</p>
        <p className="truncate text-[11px] text-white/45">{l}</p>
      </div>
    </div>
  );
}

function Pill({ tone = 'neutral', children }) {
  const tones = {
    green: 'border-[#a8ff35]/30 bg-[#a8ff35]/10 text-[#a8ff35]',
    amber: 'border-amber-400/30 bg-amber-400/10 text-amber-300',
    red: 'border-red-400/30 bg-red-400/10 text-red-300',
    neutral: 'border-white/15 bg-white/5 text-white/60',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold capitalize ${tones[tone]}`}>
      {children}
    </span>
  );
}

export default function CompteVendeur() {
  const nav = useNavigate();
  const localizePath = useLocalizedPath();
  const storeUser = useUserStore((s) => s.user);
  const { data: me } = useMe();
  const user = me ?? storeUser;

  const setUser = useUserStore((s) => s.setUser);
  const role = useUserStore((s) => s.role);
  const token = useUserStore((s) => s.token);
  const signOut = useSignOut();

  const { data: subscription, isLoading: subLoading } = useSubscription();
  const cancel = useCancelSubscription();
  const checkout = useCheckout();

  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [msg, setMsg] = useState('');
  const [confirmCancel, setConfirmCancel] = useState(false);

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
  const scheduledCancel = !!subscription?.cancelAtPeriodEnd;

  const statusTone = !subscription
    ? 'neutral'
    : subscription.status === 'active'
      ? scheduledCancel ? 'amber' : 'green'
      : subscription.status === 'past_due' || subscription.status === 'unpaid'
        ? 'red'
        : 'neutral';

  const save = () => {
    setUser({ ...user, name: name.trim(), email: email.trim() }, token || '', role || user.role);
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

  const doCancel = () =>
    cancel.mutate(undefined, {
      onSuccess: () => setConfirmCancel(false),
    });

  const doResume = () => cancel.mutate({ resume: true });

  return (
    <div className="text-[#EDECE8]">
      <div className="mx-auto max-w-[1400px]">
        <div className={`mb-6 overflow-hidden ${card}`}>
          <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-center gap-5">
            
              <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#a8ff35]">Mon compte</p>
                <h1 className="mt-0.5 truncate text-2xl font-bold tracking-tight sm:text-3xl">{user.name}</h1>
                <p className="flex items-center gap-1.5 truncate text-sm text-white/50">
                  <Mail size={13} /> {user.email}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Pill tone="green">
                <span className="h-1.5 w-1.5 rounded-full bg-[#a8ff35]" /> Compte actif
              </Pill>
              <Pill tone="neutral">
                <BadgeCheck size={13} /> {role || user.role}
              </Pill>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 border-t border-white/[0.06] p-4 sm:grid-cols-4 sm:p-5">
            <Stat icon={Crown} label="Abonnement" value={subscription ? (subscription.planRole === 'vendeur' ? 'Vendeur' : 'Premium') : 'Gratuit'} />
            <Stat icon={ShieldCheck} label="Statut" value={subscription ? subscription.status : 'Aucun'} />
            <Stat icon={CreditCard} label="Montant" value={subscription ? `${eur(subscription.amount)}/mois` : '0'} />
            {/* <Stat icon={User} label="Identifiant" value={`#${user.id}`} /> */}
          </div>
        </div>

        <div className="mb-6 grid gap-6 lg:grid-cols-5">
          <div className={`p-6 sm:p-8 lg:col-span-3 ${card}`}>
            <SectionHead icon={User} title="Informations personnelles" desc="Modifiez votre nom et votre email." />
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={label}>Nom complet</label>
                <input className={input} value={name} onChange={(e) => setName(e.target.value)} placeholder="Votre nom" />
              </div>
              <div>
                <label className={label}>Email</label>
                <input className={input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="vous@exemple.com" />
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

          <div className={`flex flex-col p-6 sm:p-8 lg:col-span-2 ${card}`}>
            <SectionHead
              icon={CreditCard}
              title="Abonnement"
              desc="Gérez votre formule."
              right={subscription ? <Pill tone={statusTone}>{scheduledCancel ? 'Résiliation prévue' : subscription.status}</Pill> : null}
            />

            {subLoading ? (
              <div className="flex flex-1 items-center justify-center py-8 text-white/40">
                <Loader2 className="h-5 w-5 animate-spin" />
              </div>
            ) : subscription ? (
              <div className="flex flex-1 flex-col">
                <div className="space-y-3 text-sm">
                  <Row k="Formule" v={<span className="font-semibold capitalize text-white">{subscription.planRole === 'vendeur' ? 'Vendeur' : 'Premium'}</span>} />
                  <Row k="Montant" v={<span className="text-white">{eur(subscription.amount)} / mois</span>} />
                  <Row
                    k={scheduledCancel ? 'Accès jusqu’au' : 'Prochain paiement'}
                    v={
                      <span className="inline-flex items-center gap-1.5 text-white/80">
                        <Calendar size={13} /> {longDate(subscription.currentPeriodEnd)}
                      </span>
                    }
                  />
                </div>

                <div className="mt-auto pt-6">
                  {scheduledCancel ? (
                    <>
                      <p className="mb-3 rounded-xl border border-amber-400/25 bg-amber-400/10 px-4 py-2.5 text-xs text-amber-200">
                        Votre abonnement se termine le {longDate(subscription.currentPeriodEnd)}.
                      </p>
                      <button
                        onClick={doResume}
                        disabled={cancel.isPending}
                        className="w-full rounded-xl bg-[#a8ff35] py-3 text-sm font-bold text-black transition hover:brightness-105 disabled:opacity-50"
                      >
                        {cancel.isPending ? 'Réactivation…' : 'Reprendre mon abonnement'}
                      </button>
                    </>
                  ) : confirmCancel ? (
                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                      <p className="text-sm text-white/80">Résilier à la fin de la période ?</p>
                      <p className="mt-1 text-xs text-white/45">Vous gardez l'accès jusqu'au {longDate(subscription.currentPeriodEnd)}.</p>
                      <div className="mt-4 flex gap-2">
                        <button
                          onClick={doCancel}
                          disabled={cancel.isPending}
                          className="flex-1 rounded-xl bg-red-500/90 py-2.5 text-sm font-semibold text-white transition hover:bg-red-500 disabled:opacity-50"
                        >
                          {cancel.isPending ? 'Résiliation…' : 'Confirmer'}
                        </button>
                        <button
                          onClick={() => setConfirmCancel(false)}
                          className="flex-1 rounded-xl border border-white/15 py-2.5 text-sm font-semibold text-white/80 transition hover:bg-white/5"
                        >
                          Annuler
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => setConfirmCancel(true)}
                      className="w-full rounded-xl border border-white/12 py-3 text-sm font-semibold text-white/70 transition hover:border-red-400/40 hover:text-red-300"
                    >
                      Résilier l'abonnement
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex flex-1 flex-col items-start justify-center">
                <p className="text-sm text-white/60">Aucun abonnement actif.</p>
                <p className="mt-1 text-xs text-white/40">Débloquez l'essayage illimité et les recommandations IA.</p>
                <button
                  onClick={() => checkout.mutate()}
                  disabled={checkout.isPending}
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#a8ff35] px-5 py-3 text-sm font-bold text-black transition hover:brightness-105 disabled:opacity-50"
                >
                  {checkout.isPending ? <Loader2 size={15} className="animate-spin" /> : <Sparkles size={15} />}
                  Découvrir les offres
                </button>
              </div>
            )}
          </div>
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

function Row({ k, v }) {
  return (
    <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 last:border-0 last:pb-0">
      <span className="text-white/45">{k}</span>
      <span>{v}</span>
    </div>
  );
}


