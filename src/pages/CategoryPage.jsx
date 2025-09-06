import { useParams, Link, useSearchParams } from 'react-router-dom'
import { ProductGrid } from '@/components/products/product-grid'
import { getProductsByCategory } from '@/data/products'
import { getCategoryById, getSubcategory } from '@/data/categories'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

export default function CategoryPage() {
  const { categoryId } = useParams()
  const [searchParams] = useSearchParams()
  const subcategoryId = searchParams.get('subcategory')
  const category = getCategoryById(categoryId)
  const subcategory = subcategoryId ? getSubcategory(categoryId, subcategoryId) : null
  const products = getProductsByCategory(categoryId, subcategoryId)
  
  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-3xl font-light text-gray-900 mb-6">Категория не найдена</h1>
        <p className="text-gray-600 mb-8">
          Извините, мы не можем найти категорию, которую вы ищете.
        </p>
        <Button asChild className="bg-tiffany-blue text-white hover:bg-tiffany-blue-dark">
          <Link to="/categories">К списку категорий</Link>
        </Button>
      </div>
    )
  }
  
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
              <li className="text-tiffany-blue font-medium">
                {subcategory ? subcategory.name : category.name}
              </li>
            </ol>
          </nav>
        </div>
      </div>
      
      {/* Category Header */}
      <div className="relative">
        <div className="h-80 overflow-hidden">
          <img
            src={category.image || '/images/placeholder.jpg'}
            alt={category.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-4xl font-light mb-4">{subcategory ? subcategory.name : category.name}</h1>
            <p className="text-lg text-white/90 mb-8">{category.description}</p>
          </div>
        </div>
      </div>
      
      {/* Subcategories */}
      {category.subcategories && category.subcategories.length > 0 && (
        <div className="bg-white py-8 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto whitespace-nowrap">
            <div className="inline-flex space-x-4">
              {category.subcategories.map((subcategory) => (
                <Link
                  key={subcategory.id}
                  to={`/categories/${category.id}?subcategory=${subcategory.id}`}
                  className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:bg-tiffany-blue hover:text-white hover:border-tiffany-blue transition-colors"
                >
                  {subcategory.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-light text-gray-900">Все товары</h2>
          <div className="text-sm text-gray-500">Показано {products.length} товаров</div>
        </div>
        
        {products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <div className="text-center py-24 bg-gray-50 rounded-lg">
            <p className="text-gray-600 mb-4">В этой категории пока нет товаров.</p>
            <Button asChild className="bg-tiffany-blue text-white hover:bg-tiffany-blue-dark">
              <Link to="/products">Ко всем товарам</Link>
            </Button>
          </div>
        )}
      </div>
    </>
  )
} 

