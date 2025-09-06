import { useState, useMemo } from 'react'
import { ProductGrid } from '@/components/products/product-grid'
import { products } from '@/data/products'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select'
import { SlidersHorizontal, X } from 'lucide-react'

// Компонент фильтров вынесен за пределы основного компонента
const FiltersContent = ({
  priceRange,
  handlePriceChange,
  categoryLabels,
  selectedCategories,
  handleCategoryChange,
  handleResetFilters
}) => (
  <div className="space-y-6">
    <div>
      <h4 className="text-sm font-medium mb-3">Цена</h4>
      <Slider
        defaultValue={[0, 1000000]}
        max={1000000}
        step={10000}
        value={priceRange}
        onValueChange={handlePriceChange}
      />
      <div className="flex justify-between items-center mt-2">
          <div className="relative">
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => handlePriceChange([+e.target.value, priceRange[1]])}
              className="w-24 border rounded px-2 py-1 text-sm"
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">₽</span>
          </div>
          <span>-</span>
          <div className="relative">
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange([priceRange[0], +e.target.value])}
              className="w-24 border rounded px-2 py-1 text-sm"
              />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">₽</span>
          </div>
      </div>
    </div>
    
    <div className="space-y-3">
      <h4 className="text-sm font-medium">Категории</h4>
      <div className="space-y-2">
        {categoryLabels.map(label => (
          <label key={label} className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-tiffany-blue focus:ring-tiffany-blue"
              checked={selectedCategories.includes(label)}
              onChange={() => handleCategoryChange(label)}
            />
            <span>{label}</span>
          </label>
        ))}
      </div>
    </div>
    
    <Button variant="outline" className="w-full" onClick={handleResetFilters}>Сбросить фильтры</Button>
  </div>
)

export default function ProductsPage() {
  const [sortBy, setSortBy] = useState('featured')
  const [priceRange, setPriceRange] = useState([0, 1000000])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)

  // Категории для фильтра
  const categoryMap = {
    'Ожерелья': ['necklaces'],
    'Подвески': ['pendants'],
    'Серьги': ['earrings'],
    'Кольца': ['rings'],
    'Браслеты': ['bracelets'],
    'Часы': ['watches'],
  }
  const categoryLabels = Object.keys(categoryMap)

  // Фильтрация товаров
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    )
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => {
        // Проверяем, есть ли категория товара в выбранных
        return selectedCategories.some(label => {
          const subcats = categoryMap[label]
          return subcats.includes(product.subcategoryId) || subcats.includes(product.categoryId)
        })
      })
    }
    // Сортировка
    let sorted = [...filtered]
    switch (sortBy) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price)
        break
      case 'newest':
        sorted = sorted.filter(product => product.new).concat(
          sorted.filter(product => !product.new)
        )
        break
      case 'bestsellers':
        sorted = sorted.filter(product => product.bestseller).concat(
          sorted.filter(product => !product.bestseller)
        )
        break
      default:
        break
    }
    return sorted
  }, [priceRange, selectedCategories, sortBy])

  // Обработчик чекбоксов категорий
  const handleCategoryChange = (label) => {
    setSelectedCategories(prev =>
      prev.includes(label)
        ? prev.filter(l => l !== label)
        : [...prev, label]
    )
  }

  // Обработчик фильтра цены
  const handlePriceChange = (value) => {
    setPriceRange(value)
  }

  // Обработчик сортировки
  const handleSortChange = (value) => {
    setSortBy(value)
  }

  // Сброс фильтров
  const handleResetFilters = () => {
    setSortBy('featured')
    setPriceRange([0, 1000000])
    setSelectedCategories([])
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-light text-gray-900 mb-8">Все ювелирные изделия</h1>
      
      {/* Мобильная кнопка фильтров */}
      <div className="md:hidden flex justify-between items-center mb-4">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setIsMobileFiltersOpen(true)}
          className="flex items-center gap-2"
        >
          <SlidersHorizontal size={16} />
          Фильтры
        </Button>
        
        <Select value={sortBy} onValueChange={handleSortChange}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Сортировать" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">По умолчанию</SelectItem>
            <SelectItem value="price-asc">Сначала дешевые</SelectItem>
            <SelectItem value="price-desc">Сначала дорогие</SelectItem>
            <SelectItem value="newest">Новинки</SelectItem>
            <SelectItem value="bestsellers">Хиты продаж</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 products-page-container">
        {/* Desktop Filters Sidebar */}
        <div className="hidden md:block md:w-64 space-y-8 filters-sidebar">
          <div>
            <h3 className="text-lg font-medium mb-4">Фильтры</h3>
            <FiltersContent 
              priceRange={priceRange}
              handlePriceChange={handlePriceChange}
              categoryLabels={categoryLabels}
              selectedCategories={selectedCategories}
              handleCategoryChange={handleCategoryChange}
              handleResetFilters={handleResetFilters}
            />
          </div>
        </div>
        
        {/* Mobile Filters Sidebar (Slide-In) */}
        {isMobileFiltersOpen && (
          <div className="md:hidden fixed inset-0 z-50 flex">
            {/* затемнение */}
            <div className="fixed inset-0 bg-black/30" onClick={() => setIsMobileFiltersOpen(false)}></div>
            
            {/* Панель фильтров */}
            <div className="relative bg-white w-72 max-w-full h-full shadow-lg z-50 animate-slide-in-left flex flex-col p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium">Фильтры</h3>
                <button
                  className="p-1 rounded-full hover:bg-gray-100"
                  onClick={() => setIsMobileFiltersOpen(false)}
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="overflow-y-auto flex-1">
                <FiltersContent 
                  priceRange={priceRange}
                  handlePriceChange={handlePriceChange}
                  categoryLabels={categoryLabels}
                  selectedCategories={selectedCategories}
                  handleCategoryChange={handleCategoryChange}
                  handleResetFilters={handleResetFilters}
                />
              </div>
              
              <div className="mt-6 pt-4 border-t">
                <Button 
                  className="w-full bg-tiffany-blue text-white"
                  onClick={() => setIsMobileFiltersOpen(false)}
                >
                  Применить ({filteredProducts.length})
                </Button>
              </div>
            </div>
          </div>
        )}
        
        {/* Products Grid */}
        <div className="flex-1">
          <div className="hidden md:flex justify-between items-center mb-6">
            <div className="text-sm text-gray-500">Показано {filteredProducts.length} товаров</div>
            <Select value={sortBy} onValueChange={handleSortChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Сортировать по" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">По умолчанию</SelectItem>
                <SelectItem value="price-asc">Сначала дешевые</SelectItem>
                <SelectItem value="price-desc">Сначала дорогие</SelectItem>
                <SelectItem value="newest">Новинки</SelectItem>
                <SelectItem value="bestsellers">Хиты продаж</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-500">Товары не найдены. Попробуйте изменить фильтры.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 