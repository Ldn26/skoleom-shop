import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
type TryOnItem = {
  id_tryon: number;
  product_name: string;
  product_brand: string | null;
  product_type: string | null;
  garment_url: string | null;
  avatar_url: string | null;
  result_url: string;
  fit_score: number | null;
  recommended_size: string | null;
  comment: string | null;
  createdAt: string;
  product_id?: number;
};

type Props = {
  history?: { data: TryOnItem[] } | null;
  isLoading?: boolean;
  isError?: boolean;
  onDelete?: (id: number) => void;
  deletingId?: number | null;
};

const LIME = 'rgb(163 230 53)';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: '2-digit', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });
}

function fitColor(score: number | null) {
  if (score == null) return '#8a93a8';
  if (score >= 85) return LIME;
  if (score >= 65) return '#facc15';
  return '#f87171';
}

export default function EssayageHistory({
  history,
  isLoading,
  isError,
  onDelete,
  deletingId,
}: Props) {
  const items = history?.data ?? [];
  const [selected, setSelected] = useState<TryOnItem | null>(null);
  const [confirmId, setConfirmId] = useState<number | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSelected(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected]);

  const handleDelete = (id: number) => {
    onDelete?.(id);
    setConfirmId(null);
    if (selected?.id_tryon === id) setSelected(null);
  };

  const navigate = useNavigate();

  return (
    <div className="mt-16">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-[22px] font-bold tracking-[-0.02em]">
          Historique d'essayage
        </h2>
        {items.length > 0 && (
          <span className="text-xs text-[#8a93a8]">{items.length} essayage(s)</span>
        )}
      </div>

      {/* États */}
      {isLoading && (
        <p className="text-[13px] text-[#8a93a8]">Chargement de l'historique…</p>
      )}
      {isError && (
        <p className="text-[13px] text-red-400">Impossible de charger l'historique.</p>
      )}
      {!isLoading && !isError && items.length === 0 && (
        <p className="text-[13px] text-[#8a93a8]">
          Aucun essayage pour l'instant. Essayez un vêtement pour le voir ici.
        </p>
      )}

      {/* Grille */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {items.map((item) => (
          <div
            key={item.id_tryon}
            className="group relative bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors"
          >
            {/* Image cliquable */}
            <button
              onClick={() => setSelected(item)}
              className="block w-full aspect-[3/4] overflow-hidden"
            >
              <img
                src={item.result_url}
                alt={item.product_name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </button>

            {/* Badge score */}
            {item.fit_score != null && (
              <span
                className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/60 backdrop-blur"
                style={{ color: fitColor(item.fit_score) }}
              >
                {item.fit_score}%
              </span>
            )}

            {confirmId === item.id_tryon ? (
              <div className="absolute top-2 right-2 flex gap-1">
                <button
                  onClick={() => handleDelete(item.id_tryon)}
                  disabled={deletingId === item.id_tryon}
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-red-500 text-white hover:bg-red-600"
                >
                  {deletingId === item.id_tryon ? '…' : 'Oui'}
                </button>
                <button
                  onClick={() => setConfirmId(null)}
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/20 text-white hover:bg-white/30"
                >
                  Non
                </button>
              </div>
            ) : (
              <button
                onClick={() => setConfirmId(item.id_tryon)}
                className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center rounded-full bg-black/60 backdrop-blur text-white/70 opacity-0 group-hover:opacity-100 hover:text-red-400 transition-all"
                title="Supprimer"
              >
                ✕
              </button>
            )}

            {/* Infos */}
            <div className="p-2.5">
              <p className="text-[12px] font-medium truncate">{item.product_name}</p>
              <p className="text-[10px] text-[#8a93a8] mt-0.5">
                {item.recommended_size && `Taille ${item.recommended_size} · `}
                {formatDate(item.createdAt)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Modale ── */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-[#0d0f14] border border-white/10 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Fermer */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 text-white/70 hover:text-white hover:bg-black/80 transition-colors"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-0">
              {/* Résultat en grand */}
              <div className="bg-black/40">
                <img
                  src={selected.result_url}
                  alt={selected.product_name}
                  className="w-full h-full object-contain max-h-[70vh]"
                />
              </div>

              {/* Détails */}
              <div className="p-6 flex flex-col gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-[#8a93a8]">
                    {selected.product_brand ?? 'Skoleom'}
                  </p>
                  <h3 className="text-lg font-bold leading-tight">{selected.product_name}</h3>
                </div>

                {selected.fit_score != null && (
                  <div>
                    <p className="text-[11px] text-[#8a93a8] mb-1">Score d'ajustement</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{
                            width: `${selected.fit_score}%`,
                            background: fitColor(selected.fit_score),
                          }}
                        />
                      </div>
                      <span
                        className="text-sm font-bold"
                        style={{ color: fitColor(selected.fit_score) }}
                      >
                        {selected.fit_score}%
                      </span>
                    </div>
                  </div>
                )}

                {selected.recommended_size && (
                  <p className="text-[13px]">
                    <span className="text-[#8a93a8]">Taille conseillée : </span>
                    <b style={{ color: LIME }}>{selected.recommended_size}</b>
                  </p>
                )}

                {selected.comment && (
                  <p className="text-[13px] text-white/80 leading-relaxed">
                    “{selected.comment}”
                  </p>
                )}

                {/* Comparaison vêtement / jumeau */}
                <div className="flex gap-3 mt-auto pt-2">
                  {selected.garment_url && (
                    <div className="flex-1">
                      <p className="text-[10px] text-[#8a93a8] mb-1">Vêtement</p>
                      <img
                        src={selected.garment_url}
                        alt="Vêtement"
                        className="w-full aspect-square object-cover rounded-lg border border-white/10"
                      />
                    </div>
                  )}
                  {selected.avatar_url && (
                    <div className="flex-1">
                      <p className="text-[10px] text-[#8a93a8] mb-1">Jumeau</p>
                      <img
                        src={selected.avatar_url}
                        alt="Jumeau"
                        className="w-full aspect-square object-cover rounded-lg border border-white/10"
                      />
                    </div>
                  )}
                </div>

                <p className="text-[10px] text-[#8a93a8]">
                  Essayé le {formatDate(selected.createdAt)}
                </p>
    
            <button
                    onClick={() => navigate(`/produit/${selected.product_id}`)}
                    disabled={deletingId === selected.id_tryon}
                    className="w-full py-2.5 rounded-full text-sm font-semibold bg-lime-500/10 text-lime-400 border border-lime-500/30 hover:bg-lime-500/20 transition-colors disabled:opacity-50"
                  >
                    Voir le produit 
                  </button>
                {onDelete && (
                  <button
                    onClick={() => handleDelete(selected.id_tryon)}
                    disabled={deletingId === selected.id_tryon}
                    className="w-full py-2.5 rounded-full text-sm font-semibold bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20 transition-colors disabled:opacity-50"
                  >
                    {deletingId === selected.id_tryon ? 'Suppression…' : 'Supprimer cet essayage'}
                  </button>
                )}

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}