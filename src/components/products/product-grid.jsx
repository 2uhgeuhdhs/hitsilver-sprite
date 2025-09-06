import { ProductCard } from './product-card'

export function ProductGrid({ products, columns = 4, loading = false, skeletonCount = 8 }) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  }

  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {loading
        ? Array.from({ length: skeletonCount }).map((_, idx) => (
            <div key={idx} className="animate-pulse">
              <div className="aspect-square w-full bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded mt-3 w-3/4" />
              <div className="h-4 bg-gray-100 rounded mt-2 w-1/2" />
              <div className="h-6 bg-gray-100 rounded mt-3 w-24" />
            </div>
          ))
        : products.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
  )
}
