import { Link } from 'react-router-dom'
import { Heart, ShoppingBag } from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/CartContext'
import { useToast } from '@/components/ui/use-toast'
import { useFavorites } from '@/context/FavoritesContext'

export function ProductCard({ product, isFavorite: propIsFavorite, onFavToggle }) {
  const { id, name, slug, price, images, rating, reviews, new: isNew, bestseller } = product
  const { addToCart, isInCart, getItemQuantity } = useCart()
  const { toast } = useToast()
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites()

  const inFav = isFavorite(id)

  const handleFav = (e) => {
    e.preventDefault();
    if (onFavToggle) {
      onFavToggle(product)
      return
    }
    if (inFav) {
      removeFromFavorites(id)
    } else {
      addToFavorites(product)
    }
  }

  const handleAddCart = (e) => {
    e.preventDefault();
    addToCart(product, 1)
    toast({
      title: 'Товар добавлен в корзину',
      description: `${name} добавлен в корзину`,
      duration: 2500,
    })
  }

  const inCart = isInCart(id)
  const quantityInCart = getItemQuantity(id)

  return (
    <div className="group relative product-card">
      {/* Badge for new or bestseller */}
      {isNew && (
        <div className="absolute top-3 left-3 z-10 bg-tiffany-blue text-white text-xs font-semibold px-2 py-1 rounded">
          Новинка
        </div>
      )}
      {bestseller && !isNew && (
        <div className="absolute top-3 left-3 z-10 bg-black text-white text-xs font-semibold px-2 py-1 rounded">
          Хит продаж
        </div>
      )}

      {/* Wishlist button */}
      <button
        className={`absolute top-3 right-3 z-10 p-1.5 rounded-full bg-white/80 hover:bg-white transition-colors ${inFav ? 'text-tiffany-blue' : 'text-gray-600 hover:text-black'}`}
        aria-label={inFav ? 'Убрать из избранного' : 'Добавить в избранное'}
        onClick={handleFav}
      >
        <Heart size={18} fill={inFav ? '#1abc9c' : 'none'} />
      </button>

      {/* Product image */}
      <Link to={`/products/${slug}`} className="block aspect-square bg-gray-100 overflow-hidden rounded-lg">
        <img
          src={images[0] || '/images/placeholder.jpg'}
          alt={name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </Link>

      {/* Product info */}
      <div className="mt-3 sm:mt-4 space-y-1">
        <div className="flex items-center justify-between flex-wrap gap-1">
          <div className="text-xs sm:text-sm text-amber-500 flex items-center">
            {'★'.repeat(Math.floor(rating))}
            {'☆'.repeat(5 - Math.floor(rating))}
            <span className="ml-1 text-gray-500 text-xs hidden sm:inline">({reviews} отзывов)</span>
            <span className="ml-1 text-gray-500 text-xs sm:hidden">({reviews})</span>
          </div>
          <div className="text-xs sm:text-sm font-medium text-tiffany-blue">{formatPrice(price)}</div>
        </div>
        <h3 className="text-sm sm:text-base font-medium text-gray-900">
          <Link to={`/products/${slug}`}>{name}</Link>
        </h3>
        <div className="pt-2 sm:pt-3">
          <Button className={`w-full text-xs sm:text-sm py-1 sm:py-2 ${inCart ? 'bg-gray-300 text-gray-500' : 'bg-tiffany-blue text-white hover:bg-tiffany-blue-dark'}`} onClick={handleAddCart} disabled={inCart} size="sm">
            <ShoppingBag className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            {inCart ? `В корзине${quantityInCart > 1 ? ` (${quantityInCart})` : ''}` : 'В корзину'}
          </Button>
        </div>
      </div>
    </div>
  )
} 