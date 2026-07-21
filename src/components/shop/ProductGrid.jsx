

  import ProductCard from './ProductCard';
import ProductCardSkeleton from './ProductCardSkeleton';

export default function ProductGrid({ products, loading, skeletonCount = 8 }) {  
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {loading
        ? Array.from({ length: skeletonCount }).map((_, i) => <ProductCardSkeleton key={i} />)
        : products.map((p , index) => (
          <ProductCard
        
            key={index}
            id={p.id}
            title={p.name}
            image={p.photos?.[0] || p.images?.[0]?.src || p.images?.[0]}
            category={p.type}
            price={p.onSale && p.salePrice ? p.salePrice : p.price}
            regularPrice={p.regularPrice}
            onSale={p.onSale}
            sku={p.sku}
            external_url={p.external_url}
            inStock={p.inStock}
          />
        ))}
    </div>
  );
}