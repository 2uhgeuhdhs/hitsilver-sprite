import { useParams, Link } from 'react-router-dom'
import { ProductDetail } from '@/components/products/product-detail'
import { ProductGrid } from '@/components/products/product-grid'
import { getProductBySlug, getRandomProducts } from '@/data/products'
import { getCategoryById } from '@/data/categories'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

export default function ProductDetailPage() {
  const { productId } = useParams()
  const product = getProductBySlug(productId)
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-3xl font-light text-gray-900 mb-6">Товар не найден</h1>
        <p className="text-gray-600 mb-8">
          Извините, мы не можем найти товар, который вы ищете.
        </p>
        <Button asChild className="bg-tiffany-blue text-white hover:bg-tiffany-blue-dark">
          <Link to="/products">Ко всем товарам</Link>
        </Button>
      </div>
    )
  }
  
  const category = getCategoryById(product.categoryId)
  const relatedProducts = getRandomProducts(4, product.id)
  
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li>
                <Link to="/" className="hover:text-tiffany-blue">Главная</Link>
              </li>
              <li>
                <ChevronRight className="h-4 w-4" />
              </li>
              <li>
                <Link to="/products" className="hover:text-tiffany-blue">Все товары</Link>
              </li>
              <li>
                <ChevronRight className="h-4 w-4" />
              </li>
              <li>
                <Link 
                  to={`/categories/${product.categoryId}`} 
                  className="hover:text-tiffany-blue"
                >
                  {category?.name || 'Категория'}
                </Link>
              </li>
              <li>
                <ChevronRight className="h-4 w-4" />
              </li>
              <li className="text-tiffany-blue font-medium">
                {product.name}
              </li>
            </ol>
          </nav>
        </div>
      </div>
      
      {/* Product Detail */}
      <ProductDetail product={product} />
      
      {/* Related Products */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-light text-gray-900">Вам может понравиться</h2>
            <Button variant="outline" asChild>
              <Link to="/products">Смотреть все</Link>
            </Button>
          </div>
          
          <ProductGrid products={relatedProducts} />
        </div>
      </section>
    </>
  )
} 

