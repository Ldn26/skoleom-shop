import type { WooProduct } from '../../api/product';
import { fitColor, getProductImage , productPath } from '../../utils/producthelper'; 
import { Link } from 'react-router-dom';
import { useFavorites } from '../../hooks/useFavorites';

export function ProductCard({
  product,
  isActive,
  fitScore,
  showScore,
  dimmed,
  onSelect,
}: {
  product: WooProduct;
  isActive: boolean;
  fitScore: number | null;
  showScore: boolean;
  dimmed: boolean;
  onSelect: (product: WooProduct) => void;
}) {
  const image = getProductImage(product);

  const { isFavorite, toggleFavorite } = useFavorites({
    id:    Number(product.id),
    title: product.name,
    image,
    price: product.price,
  });

  return (
    <div
      onClick={() => onSelect(product)}
      className={`relative flex gap-3 p-[9px] border rounded-[13px] cursor-pointer transition-all
        ${isActive
          ? 'border-[rgb(163_230_53)] bg-[rgba(163,230,53,0.12)]'
          : 'border-white/10 hover:border-white/20 hover:bg-white/[0.03]'
        } ${dimmed ? 'opacity-80' : ''}`}
    >
      <img
        src={image}
        alt={product.name}
        className="w-[46px] h-[54px] rounded-[9px] object-cover flex-shrink-0 bg-white/5"
      />

      <div className="flex-1 min-w-0">
        <div className="text-[11.5px] font-semibold truncate pr-1">{product.name.slice(0, 24)}</div>
        <div className="text-[10px] text-[#8a93a8]">{product.brand ?? 'Skoleom'}</div>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-[11px] text-[rgb(163_230_53)] font-semibold">{product.price} €</span>
          {isActive && showScore && fitScore && (
            <span className="text-[10px] font-bold" style={{ color: fitColor(fitScore) }}>
              {fitScore}%
            </span>
          )}
        </div>
      </div>

      {/* Actions — stop propagation so they don't trigger the try-on select */}
      <div
        className="flex flex-col items-center justify-between py-0.5"
        onClick={e => e.stopPropagation()}
      >
        {/* Favorite */}
        <button
          onClick={toggleFavorite}
          aria-label={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
          title={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
          className="p-1 rounded-md hover:bg-white/[0.06] transition-colors"
        >
          <svg
            className="w-[15px] h-[15px] transition-colors"
            viewBox="0 0 24 24"
            fill={isFavorite ? 'rgb(163,230,53)' : 'none'}
            stroke={isFavorite ? 'rgb(163,230,53)' : '#8a93a8'}
            strokeWidth="1.8"
          >
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1L12 21l7.7-7.6 1.1-1a5.5 5.5 0 0 0 0-7.8z" />
          </svg>
        </button>

        <Link
          to={productPath(product)}
          aria-label="Voir le produit"
          title="Voir le produit"
          className="p-1 rounded-md text-[#8a93a8] hover:text-[rgb(163_230_53)] hover:bg-white/[0.06] transition-colors"
        >
          <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}