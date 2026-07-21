

import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useGetUserAvatar, useCreateAvatar, type Measurements } from '../../api/avatar';
import {
  useDeleteTryon,
  useTryOn,
  useTryonHistory,
  useSaveTryon,
  useDiscardTryon,
  type Product as ApiProduct,
} from '../../api/tryon';
import { useProducts, useProduct, flattenProducts, type WooProduct } from '../../api/product';
import { useCart } from '../../hooks/useCart';
import EssayageHistory from '../../components/shop/EssayageHistory';
import { type MeasurementValues } from '../../types/tryon';
import { useAvatarStore } from '../../store/avatarStore';
import { SectionHeading, StepIndicator } from '../../components/tryon/ui';
import { PhotoZone } from '../../components/tryon/PhotoZone';
import { MeasurementForm } from '../../components/tryon/MeasurementForm';
import { TwinStage } from '../../components/tryon/TwinStage';
import { Wardrobe } from '../../components/tryon/Wardrobe';
import { getCurrentUserId } from '../../lib/utils';

export default function Essayage() {
  const currentUserId = getCurrentUserId();
  const { addToCart } = useCart();

  const [searchParams] = useSearchParams();
  const preselectProductId = searchParams.get('product');
  const productsQuery = useProducts();
  const products = flattenProducts(productsQuery.data);

  const { data: fetchedPreselect } = useProduct(preselectProductId ?? '');

  const avatar = useAvatarStore((s) => s.avatar);
  const ownerId = useAvatarStore((s) => s.ownerId);
  const setAvatar = useAvatarStore((s) => s.setAvatar);
  const clearAvatar = useAvatarStore((s) => s.clearAvatar);
  const { data: userAvatar, isLoading: avatarLoading } = useGetUserAvatar(currentUserId);

  const {
    data: historyData,
    isLoading: historyLoading,
    isError: historyError,
  } = useTryonHistory(avatar?.avatarId);

  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(userAvatar?.data.avatarUrl ?? null);
  const [active, setActive] = useState<WooProduct | null>(null);
  const [resultSaved, setResultSaved] = useState(false);

  const [measurements, setMeasurements] = useState<MeasurementValues>({
    height: '178',
    weight: '74',
    chest: '98',
    waist: '82',
  });

  const createAvatar = useCreateAvatar();
  const tryOn = useTryOn();
  const saveTryon = useSaveTryon();
  const discardTryon = useDiscardTryon();
  const deleteTryon = useDeleteTryon();

  useEffect(() => {
    if (!currentUserId) {
      clearAvatar();
      return;
    }
    if (ownerId && ownerId !== currentUserId) {
      clearAvatar();
      setPhotoPreview(null);
    }
    if (userAvatar === undefined) return;
    if (userAvatar === null) {
      if (avatar && ownerId === currentUserId) return;
      return;
    }
    if (userAvatar.data.avatarId !== avatar?.avatarId) {
      setAvatar(
        {
          avatarId: userAvatar.data.avatarId,
          photoPreview: userAvatar.data.avatarUrl,
          bodyMap: undefined,
        },
        currentUserId,
      );
      setPhotoPreview(userAvatar.data.avatarUrl ?? null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUserId, userAvatar]);

  const preview = tryOn.data?.data ?? null;
  const fitScore = preview?.fitScore ?? null;
  const fitComment = tryOn.isPending
    ? 'Analyse…'
    : tryOn.isError
    ? 'Erreur — réessayez.'
    : fitScore
    ? preview?.comment ?? null
    : null;

  const tryOnImage = preview?.overlayUrl ?? null;

  useEffect(() => {
    setResultSaved(!!preview?.saved);
  }, [preview?.overlayUrl, preview?.saved]);

  const scanning = createAvatar.isPending || tryOn.isPending;
  const avatarReady = !!avatar && !createAvatar.isPending;
  const canScan = !!photoPreview && !createAvatar.isPending;

  const numericMeasurements = () => ({
    height: Number(measurements.height),
    weight: Number(measurements.weight),
    chest: Number(measurements.chest),
    waist: Number(measurements.waist),
  });

  const toApiProduct = (p: WooProduct): ApiProduct => ({
    id: p.id as unknown as number,
    name: p.name,
    brand: p.brand ?? 'Skoleom',
    price: p.price,
    recommendedSize: p.recommendedSize ?? 'M',
    image: p.images?.[0]?.src ?? '',
    type: p.type,
    fabric: p.fabric,
  });

  const handlePhotoSelect = (file: File) => {
    setPhotoFile(file);
    setPhotoPreview(URL.createObjectURL(file));
    clearAvatar();
    tryOn.reset();
    setResultSaved(false);
  };

  const handleFieldChange = (key: keyof Measurements, value: string) => {
    setMeasurements((prev) => ({ ...prev, [key]: value }));
    if (avatar) {
      clearAvatar();
      tryOn.reset();
      setResultSaved(false);
    }
  };

  const handleCreateAvatar = async () => {
    if (!photoFile || !currentUserId) return;

    const toBase64 = (f: File): Promise<string> =>
      new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.readAsDataURL(f);
      });

    const base64 = await toBase64(photoFile);

    createAvatar.mutate(
      { userId: currentUserId, photoBase64: base64, measurements: numericMeasurements() },
      {
        onSuccess(data) {
          const twinUrl = data.data.avatarUrl ?? photoPreview!;
          setAvatar(
            { avatarId: data.data.avatarId, photoPreview: twinUrl, bodyMap: data.data.bodyMap },
            currentUserId,
          );
          if (data.data.avatarUrl) setPhotoPreview(data.data.avatarUrl);
        },
      },
    );
  };

  const runTryOn = (product: WooProduct) => {
    if (!avatar) return;
    setResultSaved(false);
    tryOn.mutate({
      avatarId: avatar.avatarId,
      product: toApiProduct(product),
      measurements: numericMeasurements(),
    });
  };

  const handleSelectProduct = (product: WooProduct) => {
    setActive(product);
    runTryOn(product);
  };

  const handleSaveResult = () => {
    if (!active || !avatar || !preview?.overlayUrl || resultSaved) return;
    saveTryon.mutate(
      {
        avatarId: avatar.avatarId,
        product: toApiProduct(active),
        measurements: numericMeasurements(),
        overlayUrl: preview.overlayUrl,
        resultPublicId: preview.resultPublicId,
        avatarUrl: preview.avatarUrl ?? avatar.photoPreview ?? null,
        garmentUrl: preview.garmentUrl ?? active.images?.[0]?.src ?? null,
        fitScore: preview.fitScore ?? null,
        recommendedSize: preview.recommendedSize ?? null,
        comment: preview.comment ?? null,
      },
      { onSuccess: () => setResultSaved(true) },
    );
  };

  const handleDiscardResult = () => {
    if (preview && !resultSaved && preview.resultPublicId) {
      discardTryon.mutate({ resultPublicId: preview.resultPublicId });
    }
    tryOn.reset();
    setResultSaved(false);
  };

  const preselected = useMemo<WooProduct | null>(() => {
    if (!preselectProductId) return null;
    return (
      products.find((p) => String(p.id) === String(preselectProductId)) ?? fetchedPreselect ?? null
    );
  }, [preselectProductId, products, fetchedPreselect]);

  useEffect(() => {
    if (preselected && !active) setActive(preselected);
  }, [preselected, active]);

  const autoTriedRef = useRef(false);
  useEffect(() => {
    if (autoTriedRef.current) return;
    if (!preselected || !avatar) return;
    autoTriedRef.current = true;
    setActive(preselected);
    runTryOn(preselected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preselected, avatar]);

  const handleAddToCart = () => {
    if (!active) return;
    addToCart(Number(active.id), 1);
  };

  const steps = [
    { n: 1, label: 'Photo', done: !!photoPreview },
    { n: 2, label: 'Mensurations', done: true },
    { n: 3, label: 'Jumeau créé', done: avatarReady },
    { n: 4, label: 'Essayage', done: !!fitScore },
  ];

  return (
    <section className="my-24 px-4">
      <div className="max-w-[1640px] mx-auto">
        <div className="flex items-center gap-2 text-xs text-[#8a93a8] mt-5">
          <Link to="/" className="hover:text-[rgb(163_230_53)] transition-colors">
            Accueil
          </Link>
          <span>›</span>
          <span>Cabine d'essayage</span>
        </div>

        <div className="mt-4 mb-6">
          <h2 className="text-[30px] font-bold tracking-[-0.02em] leading-[1.05]">
            Cabine d'essayage <b className="text-[rgb(163_230_53)]">Skoleom™</b>
          </h2>
          <p className="text-[#8a93a8] text-[13px] mt-1.5 font-light max-w-[520px]">
            Portez-le avant même de le posséder — votre jumeau numérique essaie pour vous en temps réel.
          </p>
          <StepIndicator steps={steps} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr_300px] gap-5">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 flex flex-col gap-4">
            <div>
              <SectionHeading n={1}>Votre photo</SectionHeading>
              <div className="mt-3">
                <PhotoZone preview={photoPreview} onFile={handlePhotoSelect} />
              </div>
              {avatarLoading && !avatar && (
                <p className="text-[10.5px] text-[#8a93a8] mt-2 text-center">Chargement de votre jumeau…</p>
              )}
              {photoPreview && !avatar && !avatarLoading && (
                <p className="text-[10.5px] text-[#8a93a8] mt-2 text-center">
                  Photo prête · renseignez vos mensurations ci-dessous
                </p>
              )}
              {avatar && (
                <p className="text-[10.5px] text-[rgb(163_230_53)] mt-2 text-center">
                  Jumeau chargé · vous pouvez essayer des vêtements ou le recréer
                </p>
              )}
            </div>

            <div className="h-px bg-white/[0.06]" />

            <div>
              <SectionHeading n={2}>Mensurations</SectionHeading>
              <div className="mt-3">
                <MeasurementForm values={measurements} onChange={handleFieldChange} />
              </div>
            </div>

            {createAvatar.isError && (
              <p className="text-[11px] text-red-400 text-center">{createAvatar.error.message}</p>
            )}

            <button
              onClick={handleCreateAvatar}
              disabled={!canScan}
              className={`w-full flex items-center justify-center gap-2 py-[14px] rounded-full font-semibold text-sm transition-all
                ${
                  canScan && !createAvatar.isPending
                    ? 'bg-[rgb(163_230_53)] text-[#07080c] hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(163,230,53,0.35)]'
                    : 'bg-white/10 text-white/30 cursor-not-allowed'
                }`}
            >
              {createAvatar.isPending ? (
                <>
                  <div className="w-4 h-4 rounded-full border-2 border-[#07080c]/30 border-t-[#07080c] animate-spin" />
                  Création du jumeau…
                </>
              ) : avatarReady ? (
                '⬡ Recréer le jumeau'
              ) : (
                '⬡ Créer mon jumeau numérique'
              )}
            </button>

            {!photoPreview && (
              <p className="text-[10px] text-[#8a93a8] text-center -mt-1">
                Ajoutez une photo pour activer cette étape
              </p>
            )}
          </div>

          <TwinStage
            avatar={avatar}
            garment={active}
            fitScore={fitScore}
            scanning={scanning}
            measurements={measurements}
            tryOnImage={tryOnImage}
            onSaveResult={handleSaveResult}
            onDiscardResult={handleDiscardResult}
            resultSaved={resultSaved}
            savePending={saveTryon.isPending}
          />

          <Wardrobe
            products={products}
            isLoading={productsQuery.isLoading}
            isError={productsQuery.isError}
            hasNextPage={!!productsQuery.hasNextPage}
            isFetchingNextPage={productsQuery.isFetchingNextPage}
            onFetchNextPage={() => productsQuery.fetchNextPage()}
            active={active}
            avatarReady={avatarReady}
            fitScore={fitScore}
            fitComment={fitComment}
            tryOnPending={tryOn.isPending}
            recommendedSize={preview?.recommendedSize}
            onSelect={handleSelectProduct}
            onAddToCart={handleAddToCart}
          />
        </div>

        <EssayageHistory
          history={historyData}
          isLoading={historyLoading}
          isError={historyError}
          onDelete={(id) => deleteTryon.mutate(String(id))}
          deletingId={deleteTryon.isPending ? Number(deleteTryon.variables) : null}
        />
      </div>
    </section>
  );
}