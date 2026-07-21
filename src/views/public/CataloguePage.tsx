import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { useCategories } from '../../api/product';
import { useFilterStore } from '../../store/filterStore';

const CATEGORY_IMAGES: Record<string, string[]> = {
  accessoires: [
    '/shop/categories/enfant-hoodie.webp',
    '/shop/categories/enf3.webp',
    '/shop/categories/enf2.webp',
    '/shop/categories/enf4.webp',
  ],
  accessoire: [
    '/shop/categories/cap.webp',
    '/shop/categories/cap2.webp',
    '/shop/categories/cap3.webp',
    '/shop/categories/cap4.webp',
  ],
  soins: [
    '/shop/categories/care.webp',
    '/shop/categories/care2.webp',
    '/shop/categories/care3.webp',
    '/shop/categories/care4.webp',
  ],
  femme: [
    '/shop/categories/famme.webp',
    '/shop/categories/famme2.webp',
    '/shop/categories/famme3.webp',
    '/shop/categories/famme4.webp',
  ],
  homme: [
    '/shop/categories/homme.webp',
    '/shop/categories/homme2.webp',
    '/shop/categories/homme3.webp',
    '/shop/categories/homme4.webp',
  ],
};

const fillImages = (slug: string, seed: number) => {
  const imgs = (CATEGORY_IMAGES[slug] || []).filter(Boolean).slice(0, 4);
  let i = 0;
  while (imgs.length < 4) {
    imgs.push(`https://picsum.photos/400/400?random=${seed}-${i}`);
    i += 1;
  }
  return imgs;
};




export default function CataloguePage() {
  const navigate = useNavigate();
  const setCategory = useFilterStore((s) => s.setCategory);
  const { data: categories = [], isLoading } = useCategories();

console.log('categories', categories);
  const goToCategory = (slug: string) => {
    setCategory(slug);
    navigate(`/produits?category=${slug}`);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 pt-24">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-72 animate-pulse rounded-3xl border border-white/10 bg-white/[.03]"
                />
              ))
            : categories.map((category, idx) => (
                <button
                  key={category.id}
                  onClick={() => goToCategory(category.slug)}
                  className="sk-card sk-reveal lift group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0C0C0D] p-6 text-left"
                >
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h3 className="disp text-2xl capitalize">{category.name}</h3>
                      <p className="mt-1 text-xs text-zinc-500">
                        {category.count} article{category.count > 1 ? 's' : ''}
                      </p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-zinc-600 transition group-hover:text-[#a8ff35]" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {fillImages(category.slug, idx).map((src, i) => (
                      <div key={i} className="sk-tile aspect-square rounded-xl bg-white/[.03]">
                        <img
                          src={src}
                          alt={category.name}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm text-[#a8ff35]">
                    Découvrir <ChevronRight className="h-4 w-4" />
                  </span>
                </button>
              ))}
        </div>
      </section>
    </div>
  );
}