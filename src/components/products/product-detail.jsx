import { useState } from 'react'
import { Heart, Minus, Plus, ShoppingBag, Truck, Check } from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useCart } from '@/context/CartContext'
import { useToast } from '@/components/ui/use-toast'
import { useFavorites } from '@/context/FavoritesContext'

export function ProductDetail({ product }) {
  const [mainImage, setMainImage] = useState(product.images[0])
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)
  const { addToCart, isInCart, getItemQuantity } = useCart()
  const { toast } = useToast()
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites()
  
  if (!product) return null

  const handleIncrement = () => {
    setQuantity(prev => prev + 1)
  }

  const handleDecrement = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1))
  }

  const handleAddToCart = () => {
    setIsAdding(true)
    
    // Добавляем товар в корзину
    addToCart(product, quantity)
    
    // Показываем уведомление
    toast({
      title: "Товар добавлен в корзину",
      description: `${product.name} (${quantity} шт.) добавлен в корзину`,
      duration: 3000,
    })
    
    // Сбрасываем состояние через небольшую задержку для анимации
    setTimeout(() => {
      setIsAdding(false)
      setQuantity(1)
    }, 500)
  }

  const handleFav = () => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id)
    } else {
      addToFavorites(product)
    }
  }

  const itemInCartQuantity = getItemQuantity(product.id)
  const totalQuantity = itemInCartQuantity + quantity
  const inFav = isFavorite(product.id)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 product-detail-container">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
            <img
              src={mainImage || '/images/placeholder.jpg'}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 gap-2 sm:gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`aspect-square overflow-hidden rounded-md bg-gray-100 ${
                  mainImage === image ? 'ring-2 ring-tiffany-blue' : ''
                }`}
                onClick={() => setMainImage(image)}
                aria-label={`Показать изображение ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`${product.name} - вид ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-light text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center space-x-2">
              <div className="text-amber-500 flex">
                {'★'.repeat(Math.floor(product.rating))}
                {'☆'.repeat(5 - Math.floor(product.rating))}
              </div>
              <div className="text-sm text-gray-500">
                {product.rating} ({product.reviews} отзывов)
              </div>
            </div>
            <div className="mt-4 text-xl sm:text-2xl font-medium text-tiffany-blue">
              {formatPrice(product.price)}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Truck size={16} />
                <span>Бесплатная доставка</span>
              </div>
              
              {itemInCartQuantity > 0 && (
                <div className="bg-green-50 text-green-700 p-3 rounded-md flex items-center space-x-2 text-sm">
                  <Check size={16} />
                  <span>Уже в корзине: {itemInCartQuantity} шт.</span>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="border border-gray-300 rounded-md flex items-center">
                  <button
                    className="p-2 text-gray-600 hover:text-black"
                    onClick={handleDecrement}
                    aria-label="Уменьшить количество"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4">{quantity}</span>
                  <button
                    className="p-2 text-gray-600 hover:text-black"
                    onClick={handleIncrement}
                    aria-label="Увеличить количество"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Button 
                    className="flex-1 bg-tiffany-blue text-white hover:bg-tiffany-blue-dark transition-all"
                    onClick={handleAddToCart}
                    disabled={isAdding}
                  >
                    {isAdding ? (
                      <>
                        <Check className="mr-2 h-4 w-4" /> Добавлено
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="mr-2 h-4 w-4" /> Добавить в корзину
                      </>
                    )}
                  </Button>
                  
                  <Button 
                    variant={inFav ? "default" : "outline"} 
                    size="icon" 
                    aria-label={inFav ? "Убрать из избранного" : "Добавить в избранное"}
                    className={inFav ? "bg-tiffany-blue text-white hover:bg-tiffany-blue-dark" : ""}
                    onClick={handleFav}
                  >
                    <Heart className="h-5 w-5" fill={inFav ? '#1abc9c' : 'none'} />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <Tabs defaultValue="features">
              <TabsList className="w-full grid grid-cols-3">
                <TabsTrigger value="features" className="text-xs sm:text-sm">Характеристики</TabsTrigger>
                <TabsTrigger value="delivery" className="text-xs sm:text-sm">Доставка</TabsTrigger>
                <TabsTrigger value="returns" className="text-xs sm:text-sm">Возврат</TabsTrigger>
              </TabsList>
              <TabsContent value="features" className="mt-4">
                <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm sm:text-base">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="delivery" className="mt-4">
                <div className="space-y-4 text-gray-600 text-sm sm:text-base">
                  <p>Мы предлагаем различные варианты доставки:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Стандартная доставка — бесплатно (3-5 рабочих дней)</li>
                    <li>Экспресс-доставка — 500₽ (1-2 рабочих дня)</li>
                    <li>Самовывоз из бутика — бесплатно</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="returns" className="mt-4">
                <div className="space-y-4 text-gray-600 text-sm sm:text-base">
                  <p>Условия возврата:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>30 дней на возврат</li>
                    <li>Изделие должно быть в идеальном состоянии</li>
                    <li>Сохранены все бирки и упаковка</li>
                    <li>Бесплатный возврат курьером или в бутике</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
} 