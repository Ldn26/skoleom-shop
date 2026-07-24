'use client';

import { useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Check, Loader2, LogOut, RefreshCw, Upload, User } from 'lucide-react';
import { useUserStore } from '../../store/userStore';
import { useSignOut } from '../../api/user';
import { useLocalizedPath } from '../../i18n/useLocalizedPath';
import { useGetUserAvatar, useCreateAvatar } from '../../api/avatar';

const input =
  'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-[#a8ff35]/60 focus:ring-2 focus:ring-[#a8ff35]/15';
const label = 'mb-1.5 block text-xs font-medium text-zinc-400';
const card = 'rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8';

export default function CompteAchteur() {
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
    <div className="min-h-[calc(100vh-71px)] bg-[#0A0A0B] px-4 pb-20 pt-[100px] text-[#EDECE8] sm:px-6">
      <div className="mx-auto w-full max-w-3xl">
        <div className="mb-8 flex items-center gap-4">
      
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#a8ff35]">Mon compte</p>
            <h1 className="text-2xl font-bold tracking-tight">Bonjour  {user.name.split(' ')[0]}</h1>
          </div>
        </div>

        {/* Informations */}
        <div className={card}>
          <h2 className="text-lg font-bold text-white">Mes informations</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
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

        {/* Avatar IA */}
        <div className="mt-6">
          <AvatarStudio userId={user.id} />
        </div>

        <button
          onClick={logout}
          disabled={signOut.isPending}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 py-3.5 text-sm font-semibold text-red-400 transition hover:bg-red-400/10 disabled:opacity-50"
        >
          <LogOut size={16} /> Déconnexion
        </button>
      </div>
    </div>
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
    <div className={card}>
      <h2 className="text-lg font-bold text-white">Mon avatar IA</h2>
      <p className="mt-1 text-sm text-white/50">Visualisez et mettez à jour votre jumeau numérique.</p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {/* Visualize */}
        <div className="grid grid-cols-2 gap-3">
          <Figure title="Jumeau IA" src={avatar?.avatarUrl} loading={isLoading} highlight />
          <Figure title="Photo d'origine" src={avatar?.originalUrl} loading={isLoading} />
        </div>

        {/* Update */}
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
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={(e) => onFile(e.target.files?.[0])} />
          {photo && (
            <button onClick={() => setPhoto(null)} className="mt-2 text-xs text-white/50 hover:text-white">
              Retirer la photo
            </button>
          )}

          <div className="mt-4 grid grid-cols-2 gap-3">
            {[
              ['height', 'Taille (cm)'],
              ['weight', 'Poids (kg)'],
              ['chest', 'Poitrine (cm)'],
              ['waist', 'Taille (cm)'],
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
          {create.isPending && <p className="mt-2 text-center text-xs text-white/40">Cela peut prendre jusqu'à une minute.</p>}
        </div>
      </div>
    </div>
  );
}

function Figure({ title, src, loading, highlight }) {
  return (
    <div>
      <div className={`relative aspect-[2/3] overflow-hidden rounded-2xl border ${highlight ? 'border-[#a8ff35]/30' : 'border-white/10'} bg-white/[0.02]`}>
        {loading ? (
          <div className="grid h-full place-items-center text-white/30">
            <Loader2 size={20} className="animate-spin" />
          </div>
        ) : src ? (
          <img src={src} alt={title} className="h-full w-full object-cover" />
        ) : (
          <div className="grid h-full place-items-center px-2 text-center text-xs text-white/30">Aucun avatar</div>
        )}
      </div>
      <p className="mt-2 text-center text-[11px] font-semibold uppercase tracking-widest text-white/40">{title}</p>
    </div>
  );
}