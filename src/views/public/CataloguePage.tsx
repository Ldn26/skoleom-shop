'use client';

import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Loader2 } from 'lucide-react';
import { useAllCategories, type TaxonomyItem } from '../../api/product';
import { useFilterStore } from '../../store/filterStore';
import { useLocalizedPath } from '../../i18n/useLocalizedPath';
import Reels from '../../components/shop/Reels';
import CategoryBar from '@/components/shop/CategoryBar';

// Root category "Skoleom Shop". Its direct children are the groups we display,
// and each group shows up to 4 of ITS children.
const ROOT_CATEGORY_ID = 1929;
const MAX_TILES = 4;

interface Group {
  parent: TaxonomyItem;
  children: TaxonomyItem[];
}

export default function CataloguePage() {
  const navigate = useNavigate();
  const localizePath = useLocalizedPath();
  const setCategory = useFilterStore((s) => s.setCategory);
  const { data: categories = [], isLoading } = useAllCategories();

  const groups: Group[] = useMemo(() => {
    const byParent = new Map<number, TaxonomyItem[]>();
    categories.forEach((c) => {
      const arr = byParent.get(c.parent ?? 0) ?? [];
      arr.push(c);
      byParent.set(c.parent ?? 0, arr);
    });

    // groups = direct children of Skoleom Shop (1929)
    let roots = byParent.get(ROOT_CATEGORY_ID) ?? [];
    // fallback: if nothing is nested under 1929, use top-level categories
    if (roots.length === 0) roots = (byParent.get(0) ?? []).filter((c) => c.id !== ROOT_CATEGORY_ID);

    return roots
      .map((parent) => ({ parent, children: byParent.get(parent.id) ?? [] }))
      .sort((a, b) => b.children.length - a.children.length);
  }, [categories]);

  const go = (slug: string) => {
    setCategory(slug);
    navigate(localizePath(`/produits?category=${slug}`));
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] px-4 pb-24 pt-28 text-white sm:px-6">
      <div className="mx-auto  max-w-[1600px] ">
        <header className="mb-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#a8ff35]">Catalogue</p>
          <h1 className="display-text mt-2 text-4xl sm:text-5xl">EXPLOREZ NOS UNIVERS</h1>
          <p className="mt-2 text-sm text-white/50">Parcourez les catégories de Skoleom Shop.</p>
        </header>
        <CategoryBar  />

        {/* <div className="mb-12">
          <Reels />
        </div> */}

        {isLoading ? (
          <div className="grid gap-5 md:grid-cols-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-80 animate-pulse rounded-3xl border border-white/10 bg-white/[.03]" />
            ))}
          </div>
        ) : groups.length === 0 ? (
          <p className="py-16 text-center text-sm text-white/40">Aucune catégorie trouvée.</p>
        ) : (
          <div className="grid gap-5 md:grid-cols-3">
            {groups.map((group, gi) => (
              <GroupCard key={group.parent.id} group={group} seed={gi} onGo={go} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function GroupCard({ group, seed, onGo }: { group: Group; seed: number; onGo: (slug: string) => void }) {
  const { parent, children } = group;

  if (children.length === 0) {
    return (
      <button
        onClick={() => onGo(parent.slug)}
        className="group relative flex h-full min-h-[320px] flex-col justify-end overflow-hidden rounded-3xl border border-white/10 bg-[#0C0C0D] p-6 text-left transition hover:border-[#a8ff35]/40"
      >
        <img
          src={parent.image || `https://picsum.photos/600/600?random=${seed}`}
          alt={parent.name}
          className="absolute inset-0 h-full w-full object-cover opacity-40 transition group-hover:scale-105 group-hover:opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
        <div className="relative">
          <h3 className="display-text text-3xl capitalize">{parent.name}</h3>
          <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#a8ff35]">
            Découvrir <ChevronRight className="h-4 w-4" />
          </span>
        </div>
      </button>
    );
  }

  const shown = children.slice(0, MAX_TILES);

  return (
    <div className="flex flex-col rounded-3xl border border-white/10 bg-[#0C0C0D] p-5 sm:p-6">
      <button onClick={() => onGo(parent.slug)} className="group mb-4 flex items-center justify-between text-left">
        <div>
          <h3 className="text-xl font-bold capitalize text-white">{parent.name}</h3>
          <p className="text-xs text-white/40">{parent.count} article{parent.count > 1 ? 's' : ''}</p>
        </div>
        <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-white/50 transition group-hover:border-[#a8ff35]/50 group-hover:text-[#a8ff35]">
          <ChevronRight className="h-4 w-4" />
        </span>
      </button>

      <div className="grid grid-cols-2 gap-3">
        {shown.map((child, i) => (
          <button key={child.id} onClick={() => onGo(child.slug)} className="group text-left">
            <div className="aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
              <img
                src={child.image || `https://picsum.photos/400/400?random=${seed}-${i}`}
                alt={child.name}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <p className="mt-2 truncate text-sm font-medium capitalize text-zinc-300 group-hover:text-[#a8ff35]">
              {child.name}
            </p>
          </button>
        ))}
      </div>

      {children.length > MAX_TILES && (
        <button
          onClick={() => onGo(parent.slug)}
          className="mt-4 inline-flex items-center gap-1 self-start text-sm font-semibold text-[#a8ff35] hover:underline"
        >
          Voir les {children.length} sous-catégories <ChevronRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

